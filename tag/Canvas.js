import { JTag } from "../JTag.js";
import { CustomTag } from "./CustomTag.js";

export class JTag_Canvas extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("canvas");
    super(jTag, body, []);
    body.classList.add("JTag_Canvas");
  }
}
