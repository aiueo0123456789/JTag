import { JTag } from "../JTag.js";

export class CustomTag {
  /**
   *
   * @param {JTag} jTga
   * @param {HTMLElement} body
   * @param {HTMLElement[]} childrenContainer
   */
  constructor(jTga, body, childrenContainer) {
    this.jTga = jTga;
    /** @type {CustomTag | null} */
    this.parent = null;
    this.body = body;
    /** @type {HTMLElement[]} */
    this.childrenContainer = childrenContainer;
    /** @type {CustomTag[]} */
    this.children = [];
  }
}
