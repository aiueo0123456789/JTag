import { CustomTag } from "./CustomTag.js";

export class JTag_Label extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("label");
    super(jTag, body, []);
    body.classList.add("JTag_Label");
  }

  setLabel(text) {
    this.body.textContent = text;
  }
}
