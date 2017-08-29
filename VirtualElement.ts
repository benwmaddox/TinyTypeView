export class VirtualElement{
    public elementTag :  keyof ElementTagNameMap;
    public attributes?: any | null;
    public children?:VirtualElement[] | string | null;
    public element : HTMLElement | null; // Should only be used during rendering

    constructor(elementTag : keyof ElementTagNameMap, attributes?: any| null , children?: VirtualElement[] | null | string ) { //| VirtualElement
        this.elementTag = elementTag;
        this.attributes = attributes;
        this.children = children;    
        this.element = null;
    }

}


export function v (elementTag : keyof ElementTagNameMap, attributes?: any | null , children?: VirtualElement[] | null | string) : VirtualElement { 
  return new VirtualElement(elementTag, attributes, children);
};

type Attribute<T extends HTMLElement> = {    
    [P in keyof T]?: T[P];
} 

export function div(attributes?: Attribute<HTMLDivElement> | null , children?: VirtualElement[] | null | string ){ 
    return new VirtualElement("div", attributes, children)
};
export function a(attributes?: Attribute<HTMLAnchorElement>, children?: VirtualElement[] | null | string){ 
    return new VirtualElement("a", attributes, children)
};
export function button(attributes?: Attribute<HTMLButtonElement>, children?: VirtualElement[] | null | string){ 
    return new VirtualElement("button", attributes, children)
};
export function input(attributes?: Attribute<HTMLInputElement>, children?: VirtualElement[] | null | string){ 
    return new VirtualElement("input", attributes, children)
};
export function select(attributes?: Attribute<HTMLSelectElement>, children?: VirtualElement[] | null | string){ 
    return new VirtualElement("select", attributes, children)
};
export function option(attributes?: Attribute<HTMLOptionElement>, children?: VirtualElement[] | null | string){ 
    return new VirtualElement("option", attributes, children)
};

export function boundSelect() {
    // select({onchange: function(this: HTMLSelectElement, f) { model.selectionIndex= this.selectedIndex}, className: "sampleClass"}, [
    //     option({value:"a"},"aa"),
    //     option({value:"b"},"bb")]
    // )
    return select({},[]);
}

// export type HtmlVirtualElements = {
//     // [P in keyof T]?: T[P]
//     [ P in keyof ElementTagNameMap ] :   ElementTagNameMap[P]
// }
// export function HtmlVirtualElement<elementTag, attributeType>(elementTag : keyof ElementTagNameMap, attributes? : keyof ElementTagNameMap[elementTag] , children?: VirtualElement[] | null | string ){
//     return new VirtualElement(elementTag, attributes, children)
// }

// export type HVE<T extends HtmlVirtualElements<P>>(){

// }
// export  [key in keyof ElementTagNameMap]