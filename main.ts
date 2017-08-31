import {a, div, button, input, select, option, h1} from "./TinyTypeView/VirtualElement"
// import {FullRenderer} from "./TinyTypeView/FullRenderer"
import {DiffRenderer} from "./TinyTypeView/DiffRenderer"

class TestModel{
    constructor() {
        this.actions = new TestActions(this);
    }
    actions: TestActions;

    incremental: number;
    strings: string[];
    selectionIndex:number;
}


class TestActions{
    public Model : TestModel; 
    constructor(model:TestModel) {        
        this.Model = model;
    }
    public increment = () =>
    {
        this.Model.incremental++;
    }
    public decrement= () =>
    {
        this.Model.incremental--;
    }
}

var stringList = (model: TestModel) =>
    div(null, 
        model.strings.map((m, i) => div(null, i+": "+ m)
    ))    
var interactiveButtons = (model: TestModel) =>
    div(null, 
        [
            button({onclick: model.actions.decrement }, "-1"),
            div(null, model.incremental.toString()),
            button({onclick: model.actions.increment }, "+1")
        ]
    )
let inputMisc = (model: TestModel) =>
        input({autofocus:true, placeholder: "TODO"})


let selector = (model: TestModel) =>
    select({onchange: function(this: HTMLSelectElement, f) { model.selectionIndex= this.selectedIndex}, className: "sampleClass"}, [
        option({value:"a"},"aa"),
        option({value:"b"},"bb")]
    )

let selectorResults = (model:TestModel) =>
    div({}, "Selected Index: " + model.selectionIndex)

let moreStringsView = (model:TestModel) =>
    button({onclick: ()=> model.strings.push("Another " + model.incremental)},"More text!")

let fewerStringsView = (model:TestModel) =>
    button({onclick: ()=> model.strings.splice(-1,1)},"Fewer text items")

var root = (model: TestModel) =>
    div(null, [
        h1({}, "Giant H1!!"),
        a({href: "#here"}, "Link Here"),
        div({className: "sample",onclick:(f)=>{alert("hah");}}, "Text here"),
        a({href: "#there"}, "There"),        
        button({onclick: (ev)=>{  alert("yay ");}, className: "asdf"}, "Sample Button"),
        stringList(model),
        interactiveButtons(model),
        inputMisc(model),
        selector(model),
        selectorResults(model),
        moreStringsView(model),
        fewerStringsView(model)
    ]
    );

var mainModel : TestModel = new TestModel() ;
mainModel.incremental =0;
mainModel.strings= ["a", "b", "c", "asdfasdf"];

var diffRender = new DiffRenderer(render);
var node = document.createElement('div');
document.body.appendChild(node);
function render(){    
    var newVM = root(mainModel);
    diffRender.Render(node, null, newVM, true)    
}


render();
