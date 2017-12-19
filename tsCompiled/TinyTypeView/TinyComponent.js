import { VirtualElement } from "./VirtualElement";
import { ChangeWrapper } from "./ChangeWrapper";
import { div } from "./HtmlTypes";
var TinyComponent = (function () {
    function TinyComponent() {
        this.propertyChanged = false;
        this.virtualElement = null;
    }
    TinyComponent.prototype.renderComponents = function (components) {
        var results = [];
        for (var i = 0; i < components.length; i++) {
            var render = components[i].render();
            if (render instanceof VirtualElement) {
                results.push(render);
            }
            else {
                for (var j = 0; j < render.length; j++) {
                    results.push(render[j]);
                }
            }
        }
        return results;
    };
    TinyComponent.prototype.render = function () {
        if (this.virtualElement === null || this.propertyChanged) {
            this.virtualElement = this.template();
            this.propertyChanged = false;
        }
        return this.virtualElement;
    };
    TinyComponent.prototype.applyReactiveProperties = function () {
        var a = new ChangeWrapper(this, function (item, propName, value) {
            if (item[propName] !== value) {
                item.propertyChanged = true;
                if (value instanceof TinyComponent) {
                    value.applyReactiveProperties();
                    value.parent = item;
                }
                if (Array.isArray(value)) {
                    for (var i = 0; i < value.length; i++) {
                        if (value[i] instanceof TinyComponent) {
                            value[i].applyReactiveProperties();
                            value[i].parent = item;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }, ["propertyChanged", "childChanged", "virtualElement", "parent", "beforePropertyChange", "afterPropertyChange"]);
    };
    return TinyComponent;
}());
export { TinyComponent };
var TinyRoot = (function () {
    function TinyRoot(component) {
        this.component = component;
        this.component.applyReactiveProperties();
    }
    TinyRoot.prototype.render = function () {
        var rendered = this.component.render();
        if (rendered instanceof VirtualElement) {
            return rendered;
        }
        else {
            return div({}, rendered);
        }
    };
    return TinyRoot;
}());
export { TinyRoot };
