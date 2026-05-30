import { JTag } from "../JTag.js";
import { CustomTag } from "./CustomTag.js";

export class JTag_Section extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("div");
    const childrenContainer = document.createElement("div");
    super(jTag, body, [childrenContainer]);
    const header = document.createElement("div");
    const title = document.createElement("h4");
    header.append(title);
    const resizer = document.createElement("div");
    body.append(header, childrenContainer, resizer);
    resizer.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      const startHeight = body.offsetHeight;
      const startY = e.clientY;
      const onMouseMove = (e_) => {
        const newHeight = startHeight + (e_.clientY - startY);
        body.style.height = `${newHeight}px`;
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
    body.classList.add("JTag_Section");
    header.classList.add("header");
    title.classList.add("title");
    childrenContainer.classList.add("children");
    resizer.classList.add("resizer");

    this.header = header;
    this.title = title;
  }

  setTitle(text) {
    this.title.textContent = text;
  }
}
