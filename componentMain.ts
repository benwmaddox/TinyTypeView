import {a, div, button, input, select, option, h1, li, span, ul} from "./TinyTypeView/HtmlTypes"
import {VirtualElement} from "./TinyTypeView/VirtualElement"
import {Component, OneTimeComponent} from "./TinyTypeView/Component"
import { Root} from "./TinyTypeView/Root"
 import {DiffRenderer} from "./TinyTypeView/DiffRenderer"
// import {OneTimeRenderer} from "./TinyTypeView/OneTimeRenderer"
// import { ComponentRenderer } from "./TinyTypeView/ComponentRenderer";


export class NameItemComponent extends Component{
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
export class SampleComponent extends Component{
    incremental : number = 0;
    nameItems : NameItemComponent[] = [];
    uneditableItems : Uneditable[] = [];

    increase = () => {
        this.incremental++;
    }
    addNumberedChild = () => {
        this.nameItems.push(new NameItemComponent("Child # " + this.incremental))
    }
    addUneditable = () => {
        this.incremental++;
        this.uneditableItems.push(new Uneditable(`Sample when we had ${this.nameItems.length} child elements`));
    }

    public template() : VirtualElement {
        return div({}, [
                    div({}, this.incremental.toString()), 
                    button({onclick: this.increase}, "Increase!"),
                    ul({}, this.renderComponents(this.nameItems)),
                    ul({}, this.renderComponents(this.uneditableItems)),
                    button({onclick: this.addNumberedChild}, "Add Child"),
                    button({onclick: this.addUneditable}, "Add child count")
                ]);
    }
}
export class Uneditable extends OneTimeComponent{    
    public text : string = "";
    constructor(text : string){
        super();
        this.text = text;
    }
    public template() : VirtualElement {
        return li({}, this.text);
    }
}

var node = document.createElement('div');
document.body.appendChild(node);
var sampleModel = new SampleComponent();
var root = new Root(sampleModel, node);