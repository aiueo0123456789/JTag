import { JTag } from "./JTag.js";
import { JTag_Button } from "./tag/Button.js";
import { JTag_Canvas } from "./tag/Canvas.js";
import { JTag_Column } from "./tag/Column.js";
import { JTag_Container } from "./TAG/container.js";
import { JTag_Label } from "./tag/Label.js";
import { JTag_LayersTree } from "./tag/LayersTree.js";
import { JTag_List } from "./tag/list.js";
import { JTag_Row } from "./tag/row.js";
import { JTag_Section } from "./tag/Section.js";
import { JTag_Slider } from "./tag/slider.js";
import { JTag_Text } from "./tag/Text.js";

const jTag = new JTag();

/** @type {JTag_Container} */
const container = JTag.createTag("Container");
jTag.append(null, container);

/** @type {JTag_Row} */
const row = JTag.createTag("Row");
jTag.append(container, row);

/** @type {JTag_Column} */
const column = JTag.createTag("Column");
jTag.append(row, column, 0);

/** @type {JTag_Stack} */
const stack = JTag.createTag("Stack");
jTag.append(row, stack, 1);

/** @type {JTag_Canvas} */
const canvas = JTag.createTag("Canvas");
jTag.append(stack, canvas);

/** @type {JTag_Section} */
const section = JTag.createTag("Section");
section.setTitle("セクション");
jTag.append(stack, section);

/** @type {JTag_Label} */
const text2 = JTag.createTag("Label");
text2.setLabel("test3");
jTag.append(section, text2);

/** @type {JTag_Slider} */
const slider = JTag.createTag("Slider");
jTag.append(section, slider);
slider.setLabel("test");

/** @type {JTag_Slider} */
const slider2 = JTag.createTag("Slider");
jTag.append(section, slider2);
slider2.setLabel("test2");

/** @type {JTag_Button} */
const button = JTag.createTag("Button");
button.setText("テスト");
button.setIcon("trash");
jTag.append(section, button);

/** @type {JTag_List} */
const list = JTag.createTag("List");
jTag.append(section, list);
for (const textContent of ["要素0", "要素1", "要素2", "要素3", "要素4"]) {
  /** @type {JTag_Text} */
  const text = JTag.createTag("Text");
  text.setText(textContent);
  jTag.append(list, text);
}

/** @type {JTag_Text} */
const text0 = JTag.createTag("Text");
text0.setText("test2");
jTag.append(column, text0, 0);

/** @type {JTag_LayersTree} */
const layersTree = JTag.createTag("LayersTree");
jTag.append(column, layersTree, 1);
for (let i = 0; i < 100; i ++) {
  /** @type {JTag_Text} */
  const text = JTag.createTag("Text");
  text.setText("aaaa" + i);
  jTag.append(layersTree, text);
}
