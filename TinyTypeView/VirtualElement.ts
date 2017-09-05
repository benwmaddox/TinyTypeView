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

export function a(attributes?: Attribute<HTMLAnchorElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("a", attributes, children);}
export function applet(attributes?: Attribute<HTMLAppletElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("applet", attributes, children);}
export function area(attributes?: Attribute<HTMLAreaElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("area", attributes, children);}
export function audio(attributes?: Attribute<HTMLAudioElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("audio", attributes, children);}
export function base(attributes?: Attribute<HTMLBaseElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("base", attributes, children);}
export function basefont(attributes?: Attribute<HTMLBaseFontElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("basefont", attributes, children);}
export function blockquote(attributes?: Attribute<HTMLQuoteElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("blockquote", attributes, children);}
export function body(attributes?: Attribute<HTMLBodyElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("body", attributes, children);}
export function br(attributes?: Attribute<HTMLBRElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("br", attributes, children);}
export function button(attributes?: Attribute<HTMLButtonElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("button", attributes, children);}
export function canvas(attributes?: Attribute<HTMLCanvasElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("canvas", attributes, children);}
export function caption(attributes?: Attribute<HTMLTableCaptionElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("caption", attributes, children);}
export function col(attributes?: Attribute<HTMLTableColElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("col", attributes, children);}
export function colgroup(attributes?: Attribute<HTMLTableColElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("colgroup", attributes, children);}
export function data(attributes?: Attribute<HTMLDataElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("data", attributes, children);}
export function datalist(attributes?: Attribute<HTMLDataListElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("datalist", attributes, children);}
export function del(attributes?: Attribute<HTMLModElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("del", attributes, children);}
export function dir(attributes?: Attribute<HTMLDirectoryElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("dir", attributes, children);}
export function div(attributes?: Attribute<HTMLDivElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("div", attributes, children);}
export function dl(attributes?: Attribute<HTMLDListElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("dl", attributes, children);}
export function embed(attributes?: Attribute<HTMLEmbedElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("embed", attributes, children);}
export function fieldset(attributes?: Attribute<HTMLFieldSetElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("fieldset", attributes, children);}
export function font(attributes?: Attribute<HTMLFontElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("font", attributes, children);}
export function form(attributes?: Attribute<HTMLFormElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("form", attributes, children);}
export function frame(attributes?: Attribute<HTMLFrameElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("frame", attributes, children);}
export function frameset(attributes?: Attribute<HTMLFrameSetElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("frameset", attributes, children);}
export function h1(attributes?: Attribute<HTMLHeadingElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("h1", attributes, children);}
export function h2(attributes?: Attribute<HTMLHeadingElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("h2", attributes, children);}
export function h3(attributes?: Attribute<HTMLHeadingElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("h3", attributes, children);}
export function h4(attributes?: Attribute<HTMLHeadingElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("h4", attributes, children);}
export function h5(attributes?: Attribute<HTMLHeadingElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("h5", attributes, children);}
export function h6(attributes?: Attribute<HTMLHeadingElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("h6", attributes, children);}
export function head(attributes?: Attribute<HTMLHeadElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("head", attributes, children);}
export function hr(attributes?: Attribute<HTMLHRElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("hr", attributes, children);}
export function html(attributes?: Attribute<HTMLHtmlElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("html", attributes, children);}
export function iframe(attributes?: Attribute<HTMLIFrameElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("iframe", attributes, children);}
export function img(attributes?: Attribute<HTMLImageElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("img", attributes, children);}
export function input(attributes?: Attribute<HTMLInputElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("input", attributes, children);}
export function ins(attributes?: Attribute<HTMLModElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("ins", attributes, children);}
export function isindex(attributes?: Attribute<HTMLUnknownElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("isindex", attributes, children);}
export function label(attributes?: Attribute<HTMLLabelElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("label", attributes, children);}
export function legend(attributes?: Attribute<HTMLLegendElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("legend", attributes, children);}
export function li(attributes?: Attribute<HTMLLIElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("li", attributes, children);}
export function link(attributes?: Attribute<HTMLLinkElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("link", attributes, children);}
export function listing(attributes?: Attribute<HTMLPreElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("listing", attributes, children);}
export function map(attributes?: Attribute<HTMLMapElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("map", attributes, children);}
export function marquee(attributes?: Attribute<HTMLMarqueeElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("marquee", attributes, children);}
export function menu(attributes?: Attribute<HTMLMenuElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("menu", attributes, children);}
export function meta(attributes?: Attribute<HTMLMetaElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("meta", attributes, children);}
export function meter(attributes?: Attribute<HTMLMeterElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("meter", attributes, children);}
export function nextid(attributes?: Attribute<HTMLUnknownElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("nextid", attributes, children);}
export function object(attributes?: Attribute<HTMLObjectElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("object", attributes, children);}
export function ol(attributes?: Attribute<HTMLOListElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("ol", attributes, children);}
export function optgroup(attributes?: Attribute<HTMLOptGroupElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("optgroup", attributes, children);}
export function option(attributes?: Attribute<HTMLOptionElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("option", attributes, children);}
export function output(attributes?: Attribute<HTMLOutputElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("output", attributes, children);}
export function p(attributes?: Attribute<HTMLParagraphElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("p", attributes, children);}
export function param(attributes?: Attribute<HTMLParamElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("param", attributes, children);}
export function picture(attributes?: Attribute<HTMLPictureElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("picture", attributes, children);}
export function pre(attributes?: Attribute<HTMLPreElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("pre", attributes, children);}
export function progress(attributes?: Attribute<HTMLProgressElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("progress", attributes, children);}
export function q(attributes?: Attribute<HTMLQuoteElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("q", attributes, children);}
export function script(attributes?: Attribute<HTMLScriptElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("script", attributes, children);}
export function select(attributes?: Attribute<HTMLSelectElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("select", attributes, children);}
export function source(attributes?: Attribute<HTMLSourceElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("source", attributes, children);}
export function span(attributes?: Attribute<HTMLSpanElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("span", attributes, children);}
export function style(attributes?: Attribute<HTMLStyleElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("style", attributes, children);}
export function table(attributes?: Attribute<HTMLTableElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("table", attributes, children);}
export function tbody(attributes?: Attribute<HTMLTableSectionElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("tbody", attributes, children);}
export function td(attributes?: Attribute<HTMLTableDataCellElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("td", attributes, children);}
export function template(attributes?: Attribute<HTMLTemplateElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("template", attributes, children);}
export function textarea(attributes?: Attribute<HTMLTextAreaElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("textarea", attributes, children);}
export function tfoot(attributes?: Attribute<HTMLTableSectionElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("tfoot", attributes, children);}
export function th(attributes?: Attribute<HTMLTableHeaderCellElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("th", attributes, children);}
export function thead(attributes?: Attribute<HTMLTableSectionElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("thead", attributes, children);}
export function time(attributes?: Attribute<HTMLTimeElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("time", attributes, children);}
export function title(attributes?: Attribute<HTMLTitleElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("title", attributes, children);}
export function tr(attributes?: Attribute<HTMLTableRowElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("tr", attributes, children);}
export function track(attributes?: Attribute<HTMLTrackElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("track", attributes, children);}
export function ul(attributes?: Attribute<HTMLUListElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("ul", attributes, children);}
export function video(attributes?: Attribute<HTMLVideoElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("video", attributes, children);}
export function xmp(attributes?: Attribute<HTMLPreElement> | null , children?: VirtualElement[] | null | string ){     return new VirtualElement("xmp", attributes, children);}

// type VirtualElementRender  = {    
//     [P in keyof T]?: T[P];
// } 
// options: SelectedIndexField : string, IndexField: any, root object (that contains index), children?
export function boundSelect<T, K extends keyof T>(SelectedIndexField: K, attributes: Attribute<HTMLSelectElement> | null, childRenderFunction: (item:T, selected: boolean) => VirtualElement, children: T[]) : VirtualElement {
    // return select({onchange: function(this: HTMLSelectElement, f) { model.selectionIndex= this.selectedIndex}, className: "sampleClass"}, [
    //     option({value:"a"},"aa"),
    //     option({value:"b"},"bb")]
    // )
    
    // TODO: Add in options, default change event handling, default changing of value, setting options based on selected index

    return select(attributes,children.map((m,i)=> childRenderFunction(m, false)) );
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