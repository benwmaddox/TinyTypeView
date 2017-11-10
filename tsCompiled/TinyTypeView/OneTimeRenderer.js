import { VirtualElement } from "./VirtualElement";
var OneTimeRenderer = (function () {
    function OneTimeRenderer() {
    }
    OneTimeRenderer.Render = function (ve, eventListener) {
        var el = document.createElement(ve.elementTag);
        if (ve.children) {
            for (var i = 0; i < ve.children.length; i++) {
                var element = ve.children[i];
                if (element === null || element === undefined) {
                    continue;
                }
                if (typeof (element) == "string") {
                    el.appendChild(document.createTextNode(element));
                }
                else if (element instanceof VirtualElement) {
                    el.appendChild(OneTimeRenderer.Render(element, eventListener));
                }
            }
        }
        if (ve.attributes) {
            for (var key in ve.attributes) {
                if (ve.attributes.hasOwnProperty(key)) {
                    var value = ve.attributes[key];
                    if (key == "className") {
                        key = "class";
                    }
                    if (typeof (value) == "function") {
                        el.addEventListener(key.substr(2), value, true);
                        if (eventListener) {
                            el.addEventListener(key.substr(2), eventListener, true);
                        }
                    }
                    else {
                        el.setAttribute(key, value);
                    }
                }
            }
        }
        return el;
    };
    return OneTimeRenderer;
}());
export { OneTimeRenderer };
