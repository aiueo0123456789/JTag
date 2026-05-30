import { JTag } from "../JTag.js";
import { CustomTag } from "./CustomTag.js";

export class JTag_LayersTree extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("div");
    const childrenContainer = document.createElement("div");
    super(jTag, body, [childrenContainer]);
    body.appendChild(childrenContainer);
    body.classList.add("JTag_LayersTree");
    childrenContainer.classList.add("children");
  }
}
