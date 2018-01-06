
import { Component } from "./Component";
import { VirtualElement } from "./VirtualElement";
import { div } from "./HtmlTypes";
import { DiffRenderer } from "./DiffRenderer";

export class Root {
    public component : Component;
    public diffRenderer : DiffRenderer;
    public boundElement : HTMLElement;
    private renderPending = false;

    constructor(component : Component, boundElement : HTMLElement){
        this.component = component;  
        this.boundElement = boundElement;
        this.diffRenderer = new DiffRenderer();
        this.component.applyReactiveProperties(this.prepareRender); 
        this.prepareRender();
    }
    
    public prepareRender = () => {    
        if (this.renderPending === false){
            this.renderPending = true;
            setTimeout(this.runRender, 0);
        }
    }

    public runRender = () => {
        this.renderPending = false;
        this.diffRenderer.Render(this.boundElement, null, this.templateRender(), true)    
    }

    public templateRender = () : VirtualElement  =>  {
        var rendered = this.component.render();
        if (rendered instanceof VirtualElement){
            return rendered;
        }
        else {
            return div({},rendered);
        }
    }
}