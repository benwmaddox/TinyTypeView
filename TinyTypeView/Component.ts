import {VirtualElement} from "./VirtualElement"
import {ChangeWrapper} from "./ChangeWrapper"
import { div } from "./HtmlTypes";


export abstract class Component{
    constructor(){    
        this.propertyChanged = false;
        this.virtualElement = null;
    }
    public markPropertyChanged(){
        this.propertyChanged = true;        
        var parent = this.parent;
        while (parent != null && parent.propertyChanged == false){
            parent.propertyChanged = true;
            parent = parent.parent;
        }
    }
    public propertyChanged : boolean;
    public virtualElement : VirtualElement | VirtualElement[] | null;
    public parent : Component | null;

    public renderComponents(components : (Component|null)[]): VirtualElement[] {
        var results : VirtualElement[] = [];
        for (var i = 0; i < components.length; i++) {
            if (components[i] == null){
                continue;
            }
            var render = (<Component>components[i]).render();
            if (render instanceof VirtualElement){
                results.push(render);
            }
            else{
                for (var j = 0; j < render.length;j++){
                    results.push(render[j]);
                }
            }
        }
        return results;
    }
    public render() : VirtualElement | VirtualElement[]{        
        if (this.virtualElement === null || this.propertyChanged){
            this.virtualElement = this.template();
            this.propertyChanged = false;
        }
        return this.virtualElement;
    }
    public abstract template() : VirtualElement | VirtualElement[];    
   
    public applyReactiveProperties(changeCallback : () => void) : void{        
        // var capturedCallback = changeCallback;
        var a = new ChangeWrapper(this, 
            (item : any, propName : string, value : any) : void => {
                if (item[propName]  !== value){
                    // if (this.beforePropertyChange){
                    //     this.beforePropertyChange(propName, value);                   
                    // }
                    item.markPropertyChanged()
                    changeCallback();
                    if (value instanceof Component) {
                        value.applyReactiveProperties(changeCallback);
                        value.parent = item;
                    }
                    if (Array.isArray(value)){
                        for (var i = 0; i < value.length; i++){
                            if (value[i] instanceof Component){
                                value[i].applyReactiveProperties();
                                value[i].parent = item;
                            }
                            else {
                                break;
                            }
                        }
                    }
                    // TODO: apply changes?
                    // if (this.afterPropertyChange){
                    //     this.afterPropertyChange(propName, value);
                    // }
                }
            },
            ["propertyChanged", "childChanged", "virtualElement", "parent", "beforePropertyChange", "afterPropertyChange"]
        )
    }
}


export abstract class OneTimeComponent extends Component {
    public markPropertyChanged(){
        // Don't mark self as changed.          
        var parent = this.parent;
        while (parent != null && parent.propertyChanged == false){
            parent.propertyChanged = true;
            parent = parent.parent;
        }
    }
    public applyReactiveProperties(){
        // Skip
    }
}