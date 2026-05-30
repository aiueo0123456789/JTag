import { JTag } from "../JTag.js";
import { CustomTag } from "./CustomTag.js";

export class JTag_Button extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("div");
    const icon = document.createElement("span");
    const text = document.createElement("span");
    body.append(icon, text);
    super(jTag, body, []);
    this.icon = icon;
    this.text = text;
    body.classList.add("JTag_Button");
    icon.classList.add("icon");
    text.classList.add("text");
  }

  setText(text) {
    this.text.textContent = text;
  }

  setIcon(icon) {
    this.icon.innerHTML = JTag.getSvg(icon);
  }
}
