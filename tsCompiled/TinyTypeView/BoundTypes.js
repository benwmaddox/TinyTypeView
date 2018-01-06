import { select, input } from "./HtmlTypes";
export function boundSelect(SelectedIndexField, attributes, childRenderFunction, children) {
    return select(attributes, children.map(function (m, i) { return childRenderFunction(m, false); }));
}
export function boundInput(source, SelectedIndexField, attributes) {
    function setFieldFromEvent(ev) {
        source[SelectedIndexField] = ev.target.value;
    }
    attributes.oninput = setFieldFromEvent;
    attributes.value = source[SelectedIndexField];
    return input(attributes);
}
