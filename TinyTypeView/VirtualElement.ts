export class VirtualElement{
    public elementTag :  keyof ElementTagNameMap;
    public attributes?: any | null;
    public children?:VirtualElement[] | string | null;
    public element : HTMLElement | null; // Should only be used during rendering

    constructor(elementTag : keyof ElementTagNameMap, attributes?: any | null , children?: VirtualElement[] | null | string ) { //| VirtualElement
        this.elementTag = elementTag;
        this.attributes = attributes;
        this.children = children;    
        this.element = null;
    }

}

export function v (elementTag : keyof ElementTagNameMap, attributes?: any | null , children?: VirtualElement[] | null | string) : VirtualElement { 
  return new VirtualElement(elementTag, attributes, children);
};

declare global{
    export interface HTMLElement{
        role: string
    }
}
export type Attribute<T extends HTMLElement > = {    
    [P in keyof T]?: T[P] ;
}
//TODO: add behavior for *-* attributes 

// type VirtualElementRender  = {    
//     [P in keyof T]?: T[P];
// } 
// options: SelectedIndexField : string, IndexField: any, root object (that contains index), children?


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