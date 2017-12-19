import {a, div, button, input, select, option, h1, li, span, ul} from "./TinyTypeView/HtmlTypes"
import {VirtualElement} from "./TinyTypeView/VirtualElement"
import {TinyComponent} from "./TinyTypeView/TinyComponent"
import { TinyRoot} from "./TinyTypeView/TinyRoot"
 import {DiffRenderer} from "./TinyTypeView/DiffRenderer"
// import {OneTimeRenderer} from "./TinyTypeView/OneTimeRenderer"
import { ComponentRenderer } from "./TinyTypeView/ComponentRenderer";


export class NameItemComponent extends TinyComponent{
    public name : string = "";
    constructor(name : string) {
        super();
        this.name = name;
    }

    public appendToName = () => {
        this.name += " :) ";
    }

    public template(): VirtualElement | VirtualElement[] {
        return li({}, [
            span(null,this.name + " "), 
            button({onclick: this.appendToName}, "More smiles")
        ]);
    }
    
}
export class SampleComponent extends TinyComponent{
    incremental : number = 0;
    nameItems : NameItemComponent[] = [];

    increase = () => {
        this.incremental++;
    }
    addNumberedChild = () => {
        this.nameItems.push(new NameItemComponent("Child # " + this.incremental))
    }

    public template() : VirtualElement {
        return div({}, [
                    div({}, this.incremental.toString()), 
                    button({onclick: this.increase}, "Increase!"),
                    ul({}, this.renderComponents(this.nameItems)),
                    button({onclick: this.addNumberedChild}, "Add Child")
                ]);
    }
    

}

var node = document.createElement('div');
document.body.appendChild(node);
var sampleModel = new SampleComponent();
var root = new TinyRoot(sampleModel, node);