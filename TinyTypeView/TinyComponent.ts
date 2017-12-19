import {VirtualElement} from "./VirtualElement"
import {ChangeWrapper} from "./ChangeWrapper"
import { div } from "./HtmlTypes";

export abstract class TinyComponent{
    constructor(){    
        this.propertyChanged = false;
        this.virtualElement = null;
        // this.applyReactiveProperties();
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
    // public childChanged : boolean;    
    public virtualElement : VirtualElement |VirtualElement[]| null;
    public parent : TinyComponent | null;
    // [key: string]: any;

    public renderComponents(components : TinyComponent[]): VirtualElement[] {
        var results : VirtualElement[] = [];
        for (var i = 0; i < components.length; i++) {
            var render = components[i].render();
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
   
    public applyReactiveProperties() : void{
        var a = new ChangeWrapper(this, 
            (item : any, propName : string, value : any) : void => {
                if (item[propName]  !== value){
                    // if (this.beforePropertyChange){
                    //     this.beforePropertyChange(propName, value);                   
                    // }
                    item.markPropertyChanged()
                    if (value instanceof TinyComponent) {
                        value.applyReactiveProperties();
                        value.parent = item;
                    }
                    if (Array.isArray(value)){
                        for (var i = 0; i < value.length; i++){
                            if (value[i] instanceof TinyComponent){
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
    // public abstract beforePropertyChange(propName:string, value: any) : void;
    // public abstract afterPropertyChange(propName:string, value: any) : void;
}

export class TinyRoot {
    public component : TinyComponent;
    constructor(component : TinyComponent){
        this.component = component;
        this.component.applyReactiveProperties();
    }
    public render() : VirtualElement {
        var rendered = this.component.render();
        if (rendered instanceof VirtualElement){
            return rendered;
        }
        else {
            return div({},rendered);
        }
    }
}
// Will need to walk to children and back up for virtual updates & real dom updates


    // render
    // property get/set setup
    // event handling
    // caching of virtual element

    // propertyChanged bool
    // childChanged bool


    // Array changes
    // push()
    // pop()
    // shift()
    // unshift()
    // splice()
    // sort()
    // reverse()