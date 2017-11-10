import {a, div, button, input, select, option, h1} from "./TinyTypeView/HtmlTypes"
import {VirtualElement} from "./TinyTypeView/VirtualElement"
import {TinyComponent} from "./TinyTypeView/TinyComponent"
import {DiffRenderer} from "./TinyTypeView/DiffRenderer"
import {OneTimeRenderer} from "./TinyTypeView/OneTimeRenderer"

export class SampleComponent extends TinyComponent{
    incremental : number;
    constructor () {        
        super();

        this.incremental = 0;
        this.applyReactiveProperties();
    }
    increase = () => {
        this.incremental++;
    }

    public virtualRender() : VirtualElement {
        if (this.virtualElement === null || this.childChanged || this.propertyChanged){
            this.virtualElement = div({}, [
                div({}, this.incremental.toString()), 
                button({onclick: this.increase}, "Increase!")
            ]);
            this.propertyChanged = false;
        }

        return this.virtualElement;
    }
    
    public beforePropertyChange(propName: string, value: any): void {
        // throw new Error("Method not implemented.");
    }
    public afterPropertyChange(propName: string, value: any): void {
        // throw new Error("Method not implemented.");
    }

}

// var root = (model: TestModel) =>
//     div(null, [
//         h1({}, "Giant H1!!"),
//         a({href: "#here"}, "Link Here"),
//         div({className: "sample",onclick:(f)=>{alert("hah");}}, "Text here"),
//         a({href: "#there"}, "There"),        
//         //button({onclick: (ev)=>{  alert("yay ");}, className: "asdf"}, "Sample Button"),
//         stringList(model),
//         interactiveButtons(model),
//         inputMisc(model),
//         selector(model),
//         selectorResults(model),
//         moreStringsView(model),
//         fewerStringsView(model),
//         sampleBoundSelect(model)
//     ]
//     );

// var mainModel : TestModel = new TestModel() ;
// mainModel.incremental =0;
// mainModel.strings= ["a", "b", "c", "asdfasdf"];
// mainModel.options = [{name: "b", value: "2"}, {name: "c", value: "3"}];
// mainModel.selectionIndex = -1;
// var diffRender = new DiffRenderer(render);

var mainModel = new SampleComponent();
var renderer = new OneTimeRenderer();
var node = document.createElement('div');
document.body.appendChild(node);
function render(){    
    var result = OneTimeRenderer.Render(mainModel.virtualRender(), (a) => {render()})
    if (node.childNodes.length > 0){
        node.removeChild(node.children[0])
    }
    node.appendChild(result);
    // var newVM = root(mainModel);
    // diffRender.Render(node, null, newVM, true)    
}

render();

// var wrapper = new ChangeWrapper(mainModel, (item, prop, value) => { console.log(prop + ": " + value )});

