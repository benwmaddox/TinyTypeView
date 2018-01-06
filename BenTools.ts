// rollup tsCompiled/BenTools.js --o ben_bundle.js --f iife -n component -w

import {Component} from "./TinyTypeView/Component"
import { VirtualElement } from "./TinyTypeView/VirtualElement";
import { h1, ul, div, li, button, input, span } from "./TinyTypeView/HtmlTypes";
import { Root } from "./TinyTypeView/Root";
import { boundInput } from "./TinyTypeView/BoundTypes";

class WebsiteInvesting extends Component{

    hoursPerMonth : number = 5;
    valuePerHour : number = 50;
    siteCost : number =1;
    netIncomePerMonth : number = 1;
    // goalROIOnCashAnnually : number

    netIncomePerYear = () : number => {
        return this.netIncomePerMonth * 12;
    }
    breakEvenYears = () : number => {
        return this.siteCost / (this.netIncomePerMonth - (this.hoursPerMonth * this.valuePerHour));
    }
    
    ROIOnCashAnually = () : number => {
        return (this.netIncomePerMonth - (this.hoursPerMonth * this.valuePerHour)) / this.siteCost;
    }
    public template(): VirtualElement | VirtualElement[] {
        return div({}, [            
            h1({},"Website Investing"),
            div({}, "I wanted to use a few values to see if I should purchase another person's website and run it."),
            div({},"Hours Per Month"),
            boundInput(this, 'hoursPerMonth', {type: "number"}),
            div({},"Value Per Hour"),
            boundInput(this, 'valuePerHour', {type: "number"}),
            div({},"Site Cost"),
            boundInput(this, 'siteCost', {type: "number"}),
            div({},"Net Income Per Month"),
            boundInput(this, 'netIncomePerMonth', {type: "number"}),

            h1({}, "Results"),
            div({}, `Net Income Per Year: ${this.netIncomePerYear()}`),
            div({}, `Break Even Years: ${this.breakEvenYears()}`),
            div({}, `ROI On Cash Annually: ${this.ROIOnCashAnually()}`)

        ]);
    }
    
}

 class BenToolsComponent extends Component {
    ToolOptions : Component[] = [];
    SelectedTool : Component | null = null;
    /**
     *
     */
    constructor() {
        super();
    }    
    public renderToolOptions = () : VirtualElement => {
        return div({},            
            this.ToolOptions.map((item, index) => button({onclick: () => this.selectTool(item)}, `Item ${index}` ))
        )
    }
    selectTool = (item : Component) : any => {
        this.SelectedTool = item
    }
    public template(): VirtualElement | VirtualElement[] {
        return div({}, [
                h1({}, "Pick your tool"),
                this.renderToolOptions()            
            ].concat(this.renderComponents([this.SelectedTool]))
        );
    }    
}



var node = document.createElement('div');
document.body.appendChild(node);
var toolsModel = new BenToolsComponent();
var root = new Root(toolsModel, node);
toolsModel.SelectedTool = new WebsiteInvesting();
toolsModel.ToolOptions.push(toolsModel.SelectedTool);