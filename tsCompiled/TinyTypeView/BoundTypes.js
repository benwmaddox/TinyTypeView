import { select } from "./HtmlTypes";
export function boundSelect(SelectedIndexField, attributes, childRenderFunction, children) {
    return select(attributes, children.map(function (m, i) { return childRenderFunction(m, false); }));
}
