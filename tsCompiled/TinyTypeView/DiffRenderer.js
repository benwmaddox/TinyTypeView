import { VirtualElement } from "./VirtualElement";
var DiffRenderer = (function () {
    function DiffRenderer(eventListener) {
        this.lastVirtualElement = null;
        this.eventListener = eventListener;
    }
    DiffRenderer.prototype.Render = function (htmlElement, oldVe, ve, root) {
        if (root === void 0) { root = true; }
        var oldVe = (root && this.lastVirtualElement) ? this.lastVirtualElement : oldVe;
        if (oldVe === ve) {
            return htmlElement;
        }
        if (ve.children) {
            if (typeof (ve.children) == "string") {
                if (htmlElement.childNodes.length == 0) {
                    htmlElement.appendChild(document.createTextNode(ve.children));
                }
                else if (htmlElement.childNodes.length > 0 && htmlElement.lastChild.nodeValue !== ve.children) {
                    htmlElement.removeChild(htmlElement.lastChild);
                    htmlElement.appendChild(document.createTextNode(ve.children));
                }
            }
            else {
                var max = oldVe != null && oldVe.children != null && ve.children.length < oldVe.children.length ? oldVe.children.length : ve.children.length;
                for (var i = 0; i < max; i++) {
                    var element = ve.children.length > i ? ve.children[i] : null;
                    var oldElement = oldVe != null && oldVe.children != null && oldVe.children.length > i ? oldVe.children[i] : null;
                    if (element instanceof VirtualElement) {
                        if (oldElement === null && element) {
                            var $elChild = document.createElement(element.elementTag);
                            element.element = $elChild;
                            htmlElement.appendChild($elChild);
                            this.Render($elChild, null, element, false);
                        }
                        else if (element === null || element === undefined) {
                            var oldVeChild = oldElement;
                            if (oldVeChild !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null) {
                                oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                            }
                        }
                        else if (element.elementTag !== oldElement.elementTag) {
                            var oldVeChild = oldElement;
                            var el = document.createElement(element.elementTag);
                            var $elChild = this.Render(el, oldVeChild, element, false);
                            element.element = $elChild;
                            htmlElement.insertBefore($elChild, oldVeChild.element);
                            if (oldElement !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null) {
                                oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                            }
                        }
                        else if (oldElement.element) {
                            var oldVeChild = oldElement;
                            var $elChild = this.Render(oldVeChild.element, oldVeChild, element, false);
                            element.element = $elChild;
                        }
                    }
                    else if (element === null && oldElement !== null) {
                        var oldVeChild = oldElement;
                        if (oldVeChild !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null) {
                            oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                        }
                    }
                }
            }
        }
        if (ve.attributes) {
            for (var key in ve.attributes) {
                if (ve.attributes.hasOwnProperty(key)) {
                    var value = ve.attributes[key];
                    var oldValue = oldVe != null ? oldVe.attributes[key] : null;
                    if (oldVe != null && oldValue === value) {
                        continue;
                    }
                    if (key == "className") {
                        key = "class";
                    }
                    if (typeof (value) == "function") {
                        if (oldValue !== null) {
                            htmlElement.removeEventListener(key.substr(2), oldValue, true);
                        }
                        htmlElement.addEventListener(key.substr(2), value, true);
                        if (oldValue == null && this.eventListener) {
                            htmlElement.addEventListener(key.substr(2), this.eventListener, true);
                        }
                    }
                    else {
                        htmlElement.setAttribute(key, value);
                    }
                }
            }
        }
        if (root) {
            this.lastVirtualElement = ve;
        }
        return htmlElement;
    };
    return DiffRenderer;
}());
export { DiffRenderer };
