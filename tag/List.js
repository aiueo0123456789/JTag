import { JTag } from "../JTag.js";
import { CustomTag } from "./CustomTag.js";

export class JTag_List extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("div");
    const list = document.createElement("div");
    const childrenContainer = document.createElement("div");
    super(jTag, body, [childrenContainer]);
    body.appendChild(list);
    list.appendChild(childrenContainer);
    body.classList.add("JTag_List");
    list.classList.add("list");
    childrenContainer.classList.add("children");
  }
}