import {VirtualElement} from "./VirtualElement"
import {ChangeWrapper} from "./ChangeWrapper"

export abstract class TinyComponent{
    constructor(){    
        this.propertyChanged = false;
        this.childChanged = false;
        this.virtualElement = null;
        // this.applyReactiveProperties();
    }
    public propertyChanged : boolean;
    public childChanged : boolean;    
    public virtualElement : VirtualElement | null;
    public parent : TinyComponent | null;
    [key: string]: any;

    public abstract virtualRender() : VirtualElement;    
   
    public applyReactiveProperties() : void{
        var a = new ChangeWrapper(this, 
            (item, propName : string, value : any) : void => {
                if (this[propName] !== value){
                    if (this.beforePropertyChange){
                        this.beforePropertyChange(propName, value);                   
                    }
                    this.propertyChanged = true;
                    if (value instanceof TinyComponent) {
                        value.applyReactiveProperties();
                    }
                    // TODO: apply changes?
                    if (this.afterPropertyChange){
                        this.afterPropertyChange(propName, value);
                    }
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