import { JTag_Button } from "./tag/Button.js";
import { JTag_Canvas } from "./tag/Canvas.js";
import { JTag_Column } from "./tag/Column.js";
import { JTag_Container } from "./TAG/container.js";
import { CustomTag } from "./tag/CustomTag.js";
import { JTag_Label } from "./tag/Label.js";
import { JTag_LayersTree } from "./tag/LayersTree.js";
import { JTag_List } from "./tag/list.js";
import { JTag_Row } from "./tag/row.js";
import { JTag_Section } from "./tag/Section.js";
import { JTag_Slider } from "./tag/slider.js";
import { JTag_Stack } from "./tag/Stack.js";
import { JTag_Text } from "./tag/Text.js";

export class JTag {
  static svg = {
    trash:
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>',
  };

  static tags = {
    Container: JTag_Container,
    Column: JTag_Column,
    Row: JTag_Row,
    List: JTag_List,
    Text: JTag_Text,
    Label: JTag_Label,
    Canvas: JTag_Canvas,
    Section: JTag_Section,
    Stack: JTag_Stack,
    Button: JTag_Button,
    Slider: JTag_Slider,
    LayersTree: JTag_LayersTree,
  };
  constructor() {
    this.body = document.body;
  }

  /**
   *
   * @param {CustomTag | null} parent
   * @param {CustomTag} tag
   * @param {Number} containerIndex
   */
  append(parent, tag, containerIndex = 0) {
    tag.parent = parent;
    if (parent?.childrenContainer.length) {
      parent.children.push(tag);
      parent.childrenContainer[containerIndex].appendChild(tag.body);
    } else {
      this.body.appendChild(tag.body);
    }
  }

  /**
   *
   * @param {CustomTag | null} parent
   * @param {CustomTag} tag
   * @param {Number} index
   * @param {Number} containerIndex
   */
  insert(parent, tag, index, containerIndex = 0) {
    tag.parent = parent;
    if (parent?.childrenContainer.length) {
      const insertIndex = index;
      parent.children.splice(insertIndex, 0, tag);
      parent.childrenContainer[containerIndex].appendChild(tag.body);
    }
  }

  /**
   *
   * @param {CustomTag} tag
   */
  remove(tag) {
    const removeIndex = tag.parent.children.indexOf(tag);
    if (removeIndex) {
      tag.parent.children.splice(removeIndex, 1);
    } else {
      console.warn("親要素の子要素として登録されていません", tag.parent, tag);
    }
  }

  /**
   *
   * @param {string} tag
   * @returns {CustomTag}
   */
  static createTag(tag) {
    return new this.tags[tag]();
  }

  static getSvg(svg) {
    return this.svg[svg];
  }
}
