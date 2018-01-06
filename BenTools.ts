// rollup tsCompiled/BenTools.js --o ben_bundle.js --f iife -n component -w

import {Component} from "./TinyTypeView/Component"
import { VirtualElement } from "./TinyTypeView/VirtualElement";
import { h1, ul, div, li, button, input, span } from "./TinyTypeView/HtmlTypes";
import { Root } from "./TinyTypeView/Root";
import { boundInput, numberInput } from "./TinyTypeView/BoundTypes";

class WebsiteInvesting extends Component{

    hoursPerMonth : number = 5;
    valuePerHour : number = 50;
    siteCost : number = 1;
    netIncomePerMonth : number = 1;

    breakEvenYears = () : number => {
        return this.siteCost / (this.netIncomePerMonth - (this.hoursPerMonth * this.valuePerHour));
    }    
    ROIAnually = () : number => {
        return this.netIncomePerMonth - (this.hoursPerMonth * this.valuePerHour);
    }
    ROIOnCashAnually = () : number => {
        return (this.netIncomePerMonth - (this.hoursPerMonth * this.valuePerHour)) / this.siteCost;
    }
    stringToNumberConverter (value : string) : number {
        return Number(value);
    }
    public template(): VirtualElement | VirtualElement[] {
        return div({}, [            
            h1({},"Website Investing"),
            div({}, "I wanted to use a few values to see if I should purchase another person's website and run it."),
            div({},"Hours Per Month"),
            numberInput(this, 'hoursPerMonth'),
            div({},"Value Per Hour"),
            numberInput(this, 'valuePerHour'),
            div({},"Site Cost"),
            numberInput(this, 'siteCost'),
            div({},"Net Income Per Month"),
            numberInput(this, 'netIncomePerMonth'),

            h1({}, "Results"),
            div({}, `Break Even Years: ${this.breakEvenYears()}`),
            div({className: this.ROIAnually() < 0 ? "warning" : ""}, `ROI Annually: ${this.ROIOnCashAnually()}`),
            div({className: this.ROIOnCashAnually() < 0 ? "warning" : ""}, `ROI On Cash Annually: $${this.ROIAnually()}`)

        ]);
    }
    
}
interface ToolOptions{
    name: string;
    component: Component
}
 class BenToolsComponent extends Component {
    // ToolOptions : Component[] = [];
    ToolOptions : ToolOptions[] = [];
    SelectedTool : Component | null = null;
    /**
     *
     */
    constructor() {
        super();
    }    
    public renderToolOptions = () : VirtualElement => {
        return div({},            
            this.ToolOptions.map((item, index) => button({onclick: () => this.selectTool(item.component)}, item.name ))
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



// var node = document.createElement('div');
// document.body.appendChild(node);
var toolsModel = new BenToolsComponent();
var root = new Root(toolsModel, document.body);
// For some reason, doing this in a different order fails. Bah.
var webInvesting = new WebsiteInvesting();
toolsModel.ToolOptions.push({
        name:    "Web Investing",
        component: webInvesting}
    );