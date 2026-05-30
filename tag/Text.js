import { CustomTag } from "./CustomTag.js";

export class JTag_Text extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("div");
    super(jTag, body, []);
    body.classList.add("JTag_Text");
  }

  setText(text) {
    this.body.textContent = text;
  }
}
