import { JTag } from "../JTag.js";
import { CustomTag } from "./CustomTag.js";

export class JTag_Stack extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("div");
    super(jTag, body, [body]);
    body.classList.add("JTag_Stack");
  }
}
