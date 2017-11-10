import {VirtualElement} from "./VirtualElement"
import {ChangeWrapper} from "./ChangeWrapper"

export abstract class TinyComponent{
    constructor(){
        this.applyReactiveProperties();
        this.propertyChanged = false;
        this.childChanged = false;
        this.virtualElement = null;
    }
    public propertyChanged : boolean;
    public childChanged : boolean;    
    public virtualElement : VirtualElement | null;
    public parent : TinyComponent | null;
    [key: string]: any;

    public virtualRender(){
        this.virtualElement = new VirtualElement("div", {}, []);
    }
    
   
    public applyReactiveProperties() : void{
        var a = new ChangeWrapper(this, 
            (item, propName : string, value : any) : void => {
                if (this[propName] !== value){
                    if (this.beforePropertyChange){
                        this.beforePropertyChange(propName, value);                   
                    }

                    if (this.afterPropertyChange){
                        this.afterPropertyChange(propName, value);
                    }
                }
            }
        )
    }
    public abstract beforePropertyChange?(propName:string, value: any) : void;
    public abstract afterPropertyChange?(propName:string, value: any) : void;
}

// Will need to walk to children and back up for virtual updates & real dom updates


    // render
    // property get/set setup
    // event handling
    // caching of virtual element

    // propertyChanged bool
    // childChanged bool