import { TinyComponent } from "./TinyComponent";
import { VirtualElement } from "./VirtualElement";

export class ComponentRenderer {
    public Render(component : TinyComponent){
        var elements = this.getElementsFromComponent(component);

    }

    private changeOnNextTick : boolean = false;

    public nextTick = () => {

    }


    
    private getElementsFromComponent(component : TinyComponent) : VirtualElement[]{
        var currentRender = component.template();
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