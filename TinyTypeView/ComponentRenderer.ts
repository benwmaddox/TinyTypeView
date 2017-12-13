import { TinyComponent } from "./TinyComponent";
import { VirtualElement } from "./VirtualElement";

export class ComponentRenderer {
    public Render(component : TinyComponent){
        var elements = this.getElementsFromComponent(component);

    }
    
    private getElementsFromComponent(component : TinyComponent) : VirtualElement[]{
        var currentRender = component.virtualRender();
        var elements : VirtualElement[];
        if (currentRender instanceof VirtualElement){
            elements = [currentRender];
        }
        else{
            elements = currentRender;
        }
        return elements;
    }
}