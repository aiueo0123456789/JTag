# JTag

JTag is a lightweight JavaScript UI library for building HTML interfaces using object-based tags.

Instead of writing HTML directly, you create UI elements as JavaScript objects and build the interface through a parent-child hierarchy.

## Features

- Pure JavaScript UI construction
- HTML-like component hierarchy
- Row / Column / Stack layouts
- Built-in controls
  - Button
  - Label
  - Text
  - Slider
  - Canvas
  - List
  - Section
  - LayersTree
- Custom component support
- No virtual DOM
- No external dependencies

---

## Installation

javascript import { JTag } from "./JTag.js"; 

---

## Basic Usage

javascript import { JTag } from "./JTag.js";  const jTag = new JTag();  const container = JTag.createTag("Container"); jTag.append(null, container);  const text = JTag.createTag("Text"); text.setText("Hello JTag");  jTag.append(container, text); 

---

## Layout Example

javascript const row = JTag.createTag("Row"); jTag.append(container, row);  const leftColumn = JTag.createTag("Column"); const rightColumn = JTag.createTag("Column");  jTag.append(row, leftColumn, 0); jTag.append(row, rightColumn, 1); 

---

## Stack Layout

Stack allows multiple elements to overlap in the same area.

javascript const stack = JTag.createTag("Stack");  jTag.append(container, stack);  jTag.append(stack, canvas); jTag.append(stack, section); 

---

## Buttons

javascript const button = JTag.createTag("Button");  button.setText("Delete"); button.setIcon("trash");  jTag.append(parent, button); 

---

## Lists

javascript const list = JTag.createTag("List");  jTag.append(parent, list);  for (let i = 0; i < 5; i++) {     const text = JTag.createTag("Text");      text.setText(`Item ${i}`);      jTag.append(list, text); } 

---

## Sections

javascript const section = JTag.createTag("Section");  section.setTitle("Settings");  jTag.append(parent, section); 

---

## Available Tags

| Tag | Description |
|------|------|
| Container | Root container |
| Row | Horizontal layout |
| Column | Vertical layout |
| Stack | Overlay layout |
| Section | Grouped content |
| Text | Text display |
| Label | Label component |
| Button | Button component |
| Slider | Slider control |
| Canvas | Canvas element |
| List | Scrollable list |
| LayersTree | Layer hierarchy view |

---

## SVG Icons

Built-in icons can be assigned to components.

javascript button.setIcon("trash"); 

Current built-in icons:

- trash

---

## Custom Components

You can create reusable UI components by extending CustomTag.

javascript class MyPanel extends CustomTag {     constructor() {         super();          const text = JTag.createTag("Text");          text.setText("Custom Component");          this.childrenContainer[0].appendChild(text.body);     } } 

---

## Philosophy

JTag is designed for:

- Editor tools
- Game engines
- Desktop-style web applications
- Rapid UI prototyping

It focuses on simplicity and direct DOM manipulation rather than virtual DOM rendering.

---

## License

MIT License