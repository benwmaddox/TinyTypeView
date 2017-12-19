
import { TinyComponent } from "./TinyComponent";
import { VirtualElement } from "./VirtualElement";
import { div } from "./HtmlTypes";
import { DiffRenderer } from "./DiffRenderer";

export class TinyRoot {
    public component : TinyComponent;
    public diffRenderer : DiffRenderer;
    public boundElement : HTMLElement;
    private renderPending = false;

    constructor(component : TinyComponent, boundElement : HTMLElement){
        this.component = component;       
        this.boundElement = boundElement;
        this.diffRenderer = new DiffRenderer(this.prepareRender);
        this.component.applyReactiveProperties(); 
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
        this.diffRenderer.Render(this.boundElement, null, this.render(), true)    
    }

    public render = () : VirtualElement  =>  {
        var rendered = this.component.render();
        if (rendered instanceof VirtualElement){
            return rendered;
        }
        else {
            return div({},rendered);
        }
    }
}