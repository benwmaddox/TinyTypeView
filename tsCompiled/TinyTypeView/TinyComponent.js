var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { VirtualElement } from "./VirtualElement";
import { ChangeWrapper } from "./ChangeWrapper";
var Component = (function () {
    function Component() {
        this.propertyChanged = false;
        this.virtualElement = null;
    }
    Component.prototype.markPropertyChanged = function () {
        this.propertyChanged = true;
        var parent = this.parent;
        while (parent != null && parent.propertyChanged == false) {
            parent.propertyChanged = true;
            parent = parent.parent;
        }
    };
    Component.prototype.renderComponents = function (components) {
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
    Component.prototype.render = function () {
        if (this.virtualElement === null || this.propertyChanged) {
            this.virtualElement = this.template();
            this.propertyChanged = false;
        }
        return this.virtualElement;
    };
    Component.prototype.applyReactiveProperties = function () {
        var a = new ChangeWrapper(this, function (item, propName, value) {
            if (item[propName] !== value) {
                item.markPropertyChanged();
                if (value instanceof Component) {
                    value.applyReactiveProperties();
                    value.parent = item;
                }
                if (Array.isArray(value)) {
                    for (var i = 0; i < value.length; i++) {
                        if (value[i] instanceof Component) {
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
    return Component;
}());
export { Component };
var OneTimeComponent = (function (_super) {
    __extends(OneTimeComponent, _super);
    function OneTimeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OneTimeComponent.prototype.markPropertyChanged = function () {
        var parent = this.parent;
        while (parent != null && parent.propertyChanged == false) {
            parent.propertyChanged = true;
            parent = parent.parent;
        }
    };
    OneTimeComponent.prototype.applyReactiveProperties = function () {
    };
    return OneTimeComponent;
}(Component));
export { OneTimeComponent };
