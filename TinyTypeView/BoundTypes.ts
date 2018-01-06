import {select, input} from "./HtmlTypes"
import {Attribute, VirtualElement, v} from "./VirtualElement"
import { Component } from "./Component";

export function boundSelect<T, K extends keyof T>(SelectedIndexField: K, attributes: Attribute<HTMLSelectElement> | null, childRenderFunction: (item:T, selected: boolean) => VirtualElement, children: T[]) : VirtualElement {
    // return select({onchange: function(this: HTMLSelectElement, f) { model.selectionIndex= this.selectedIndex}, className: "sampleClass"}, [
    //     option({value:"a"},"aa"),
    //     option({value:"b"},"bb")]
    // )
    
    // TODO: Add in options, default change event handling, default changing of value, setting options based on selected index

    return select(attributes,children.map((m,i)=> childRenderFunction(m, false)) );
}

export function boundInput<T extends Component, K extends keyof T>(source : T, SelectedIndexField: K, attributes: Attribute<HTMLInputElement>, convertToField? : (a : string) => typeof source[K] , convertToDOM?: (a : typeof source[K] ) => string) : VirtualElement {
    
    function setFieldFromEvent (this: HTMLElement, ev: Event) : any {    
        if (convertToField){
            source[SelectedIndexField] = convertToField((<HTMLInputElement>ev.target).value);  
        }
        else {
            source[SelectedIndexField] = (<HTMLInputElement>ev.target).value;  
        }
    }
    
    attributes.oninput = setFieldFromEvent;    
    if (convertToDOM){
        attributes.value = convertToDOM(source[SelectedIndexField]); 
    }
    else{
        attributes.value = source[SelectedIndexField];
    }
    return input(
             attributes
        );   
}


export function textInput<T extends Component, K extends keyof T>(source : T, SelectedIndexField: K, attributes?: Attribute<HTMLInputElement>) : VirtualElement {
    
    function setFieldFromEvent (this: HTMLElement, ev: Event) : any {    
        source[SelectedIndexField] = (<HTMLInputElement>ev.target).value;
    }    
    if (attributes == null){
        attributes = {};
    }
    attributes.oninput = setFieldFromEvent;    
    attributes.value = source[SelectedIndexField];
    return input(
             attributes
        );   
}


export function numberInput<T extends Component, K extends keyof T>(source : T, SelectedIndexField: K, attributes?: Attribute<HTMLInputElement>) : VirtualElement {
    
    function setFieldFromEvent (this: HTMLElement, ev: Event) : any {    
        source[SelectedIndexField] = Number((<HTMLInputElement>ev.target).value);
    }
    if (attributes == null){
        attributes = {};
    }
    attributes.type = "number";
    attributes.oninput = setFieldFromEvent;    
    attributes.value = source[SelectedIndexField];
    return input(
             attributes
        );   
}