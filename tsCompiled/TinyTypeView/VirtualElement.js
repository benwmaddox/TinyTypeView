var VirtualElement = (function () {
    function VirtualElement(elementTag, attributes, children) {
        this.elementTag = elementTag;
        this.attributes = attributes;
        this.children = children;
        this.element = null;
    }
    return VirtualElement;
}());
export { VirtualElement };
export function v(elementTag, attributes, children) {
    return new VirtualElement(elementTag, attributes, children);
}
;
