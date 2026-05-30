import { JTag } from "../JTag.js";
import { CustomTag } from "./CustomTag.js";

export class JTag_Slider extends CustomTag {
  constructor(jTag) {
    const body = document.createElement("div");
    const slider = document.createElement("div");
    const label = document.createElement("label");
    const track = document.createElement("div");
    const input = document.createElement("input");
    const stick = document.createElement("span");
    const presentation = document.createElement("span");
    track.append(label, stick, presentation);
    slider.append(track, input);
    body.append(label, slider);
    super(jTag, body, []);
    body.classList.add("JTag_Slider");
    stick.classList.add("stick");
    slider.classList.add("slider");
    presentation.classList.add("presentation");
    track.classList.add("track");
    let value = 0;
    let max = 100;
    let min = 0;
    presentation.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      const startValue = value;
      const startX = e.clientX;
      const maxWidth = stick.offsetWidth;
      const onMouseMove = (e_) => {
        value = startValue + ((e_.clientX - startX) / maxWidth) * max;
        value = Math.max(min, Math.min(value, max));
        presentation.style.left = `${((value - min) / (max - min)) * 100}%`;
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
    this.label = label;
  }

  setLabel(label) {
    this.label.textContent = label;
  }
}
