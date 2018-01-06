import {select, input} from "./HtmlTypes"
import {Attribute, VirtualElement} from "./VirtualElement"
import { Component } from "./Component";

export function boundSelect<T, K extends keyof T>(SelectedIndexField: K, attributes: Attribute<HTMLSelectElement> | null, childRenderFunction: (item:T, selected: boolean) => VirtualElement, children: T[]) : VirtualElement {
    // return select({onchange: function(this: HTMLSelectElement, f) { model.selectionIndex= this.selectedIndex}, className: "sampleClass"}, [
    //     option({value:"a"},"aa"),
    //     option({value:"b"},"bb")]
    // )
    
    // TODO: Add in options, default change event handling, default changing of value, setting options based on selected index

    return select(attributes,children.map((m,i)=> childRenderFunction(m, false)) );
}
export function boundInput<T extends Component, K extends keyof T>(source : T, SelectedIndexField: K, attributes: Attribute<HTMLSelectElement> | null) : VirtualElement {
    
    function setFieldFromEvent (this: HTMLElement, ev: Event) : any {    
        source[SelectedIndexField] = (<HTMLInputElement>ev.target).value;  
    }
    return input(
            { 
                oninput: setFieldFromEvent,
                value: source[SelectedIndexField] 
            }
        );   
}