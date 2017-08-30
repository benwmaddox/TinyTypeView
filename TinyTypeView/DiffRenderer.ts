import {VirtualElement} from "./VirtualElement"

export class DiffRenderer{
    public eventListener : EventListener;
    constructor( eventListener : EventListener) {
        this.eventListener = eventListener;        
    }
    public lastVirtualElement : VirtualElement | null = null;
    public Render(htmlElement : HTMLElement, oldVe : VirtualElement | null, ve : VirtualElement, initial: boolean = true) : HTMLElement {
        // var el =  document.createElement(ve.elementTag);
        var oldVe = (initial && this.lastVirtualElement) ? this.lastVirtualElement : oldVe;

        if (ve.children){       
            if ( typeof(ve.children) == "string"){
                // if (htmlElement.firstChild){
                //     htmlElement.removeChild(htmlElement.firstChild);
                // }
                if (htmlElement.childNodes.length == 0){
                    htmlElement.appendChild( document.createTextNode(ve.children as string));
                }
                else if (htmlElement.childNodes.length > 0 && (htmlElement.lastChild as Text).nodeValue != ve.children as string){
                    htmlElement.removeChild(htmlElement.lastChild as Node);
                }
                
                
            }
            else {
             
            var max = oldVe != null && oldVe.children != null && ve.children.length < oldVe.children.length ? oldVe.children.length : ve.children.length;
            for (var i = 0; i < max; i++) {
                var element = ve.children.length > i ? ve.children[i] : null;     
                var oldElement = oldVe != null && oldVe.children != null && oldVe.children.length > i ? oldVe.children[i] : null;
                   
                 if (element instanceof VirtualElement ){             
                     
                    if (oldElement === null && element){
                        var $elChild =  document.createElement(element.elementTag);
                        element.element = $elChild;
                        htmlElement.appendChild($elChild);
                        var $elChild = this.Render($elChild, null, element, false);                        
                    }
                    else if (element === null || element === undefined){      
                        var oldVE = oldElement as VirtualElement;
                        if (oldVE !== null && oldVE.element !== null && oldVE.element.parentNode !== null ){
                            oldVE.element.parentNode.removeChild(oldVE.element);
                        }
                    }
                    else if (element.elementTag !== (oldElement as VirtualElement).elementTag) {
                        // Different types: remove old and add new  
                        var oldVE = oldElement as VirtualElement;
                        if (oldElement !== null && oldVE.element !== null && oldVE.element.parentNode !== null ){
                            oldVE.element.parentNode.removeChild(oldVE.element);
                        }
                        var el =  document.createElement(element.elementTag);
                        var $elChild = this.Render(el, oldVE, element, false);
                        element.element = $elChild;    
                        htmlElement.appendChild($elChild);
                    }
                    else if ((oldElement as VirtualElement).element) {
                        var oldVE = oldElement as VirtualElement;
                        var $elChild = this.Render(oldVE.element as HTMLElement, oldVE, element, false);
                        element.element = $elChild;
                    }                                       
                }
            }
        }            
        }
        if (ve.attributes){            
            for (var key in ve.attributes){
                if (ve.attributes.hasOwnProperty(key))
                {                    
                    var value = ve.attributes[key];                          
                    if (key == "className"){
                        key = "class";
                    }          
                    if (typeof(value) == "function"){                            
                        // htmlElement.removeEventListener(key.substr(2));
                        htmlElement.addEventListener(key.substr(2), value, true);
                        if (this.eventListener){
                            htmlElement.addEventListener(key.substr(2), this.eventListener, true);
                        }
                    }                    
                    else {
                        htmlElement.setAttribute(key, value)
                    }
                }
            }      
        }
        if (initial){
            this.lastVirtualElement = ve;
        }
        return htmlElement;
    }    
}