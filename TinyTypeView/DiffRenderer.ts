import {VirtualElement} from "./VirtualElement"

export class DiffRenderer{
    public eventListener : EventListener;
    constructor( eventListener : EventListener) {
        this.eventListener = eventListener;        
    }
    public lastVirtualElement : VirtualElement | null = null;
    public Render(htmlElement : HTMLElement, oldVe : VirtualElement | null, ve : VirtualElement, root: boolean = true) : HTMLElement {
        var oldVe = (root && this.lastVirtualElement) ? this.lastVirtualElement : oldVe;

        if (ve.children){       
            if ( typeof(ve.children) == "string") {
                if (htmlElement.childNodes.length == 0){
                    htmlElement.appendChild( document.createTextNode(ve.children as string));
                }
                else if (htmlElement.childNodes.length > 0 && (htmlElement.lastChild as Text).nodeValue !== ve.children as string){
                    htmlElement.removeChild(htmlElement.lastChild as Node);
                    htmlElement.appendChild( document.createTextNode(ve.children as string));
                }                               
            }
            else {             
                var max = oldVe != null && oldVe.children != null && ve.children.length < oldVe.children.length ? oldVe.children.length : ve.children.length;
                for (var i = 0; i < max; i++) {
                    let element = ve.children.length > i ? ve.children[i] : null;     
                    let oldElement = oldVe != null && oldVe.children != null && oldVe.children.length > i ? oldVe.children[i] : null;
                    
                    if (element instanceof VirtualElement ) {             
                        
                        if (oldElement === null && element){
                            let $elChild =  document.createElement(element.elementTag);
                            element.element = $elChild;
                            htmlElement.appendChild($elChild);
                            this.Render($elChild, null, element, false);                        
                        }
                        else if (element === null || element === undefined){      
                            let oldVeChild = oldElement as VirtualElement;
                            if (oldVeChild !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null ){
                                oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                            }
                        }
                        else if (element.elementTag !== (oldElement as VirtualElement).elementTag) {
                            // Different types: remove old and add new  
                            let oldVeChild = oldElement as VirtualElement;
                            let el =  document.createElement(element.elementTag);
                            let $elChild = this.Render(el, oldVeChild, element, false);
                            element.element = $elChild;    
                            htmlElement.insertBefore($elChild, oldVeChild.element)
                            
                            if (oldElement !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null ){
                                oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                            }
                        }
                        else if ((oldElement as VirtualElement).element) {
                            let oldVeChild = oldElement as VirtualElement;
                            let $elChild = this.Render(oldVeChild.element as HTMLElement, oldVeChild, element, false);
                            element.element = $elChild;
                        }                                       
                    }
                    else if (element === null && oldElement !== null){
                        let oldVeChild = oldElement as VirtualElement;
                        if (oldVeChild !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null ){
                            oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                        }
                    }
                }
            }            
        }

        //TODO: what to do if old item had attribute and new doesn't
        if (ve.attributes){            
            for (var key in ve.attributes){
                if (ve.attributes.hasOwnProperty(key))
                {  
                    let value = ve.attributes[key];      
                    let oldValue = oldVe != null ? oldVe.attributes[key] : null; 
                    if (oldVe != null && oldValue === value){ // Compares values and function references
                        continue;
                    }
                    if (key == "className"){
                        key = "class";
                    }          
                    if (typeof(value) == "function"){                    
                        if (oldValue !== null){
                            htmlElement.removeEventListener(key.substr(2), oldValue, true);
                        }
                        
                        htmlElement.addEventListener(key.substr(2), value, true);
                        if (oldValue == null && this.eventListener){
                            htmlElement.addEventListener(key.substr(2), this.eventListener, true);
                        }
                    }                    
                    else {
                        htmlElement.setAttribute(key, value)
                    }
                }
            }      
        }
        if (root){
            this.lastVirtualElement = ve;
        }
        return htmlElement;
    }    
}