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

javascript
import { JTag } from "./JTag.js";
const jTag = new JTag();

---

## Available Tags

| Tag        | Description          |
| ---------- | -------------------- |
| Container  | Root container       |
| Row        | Horizontal layout    |
| Column     | Vertical layout      |
| Stack      | Overlay layout       |
| Section    | Grouped content      |
| Text       | Text display         |
| Label      | Label component      |
| Button     | Button component     |
| Slider     | Slider control       |
| Canvas     | Canvas element       |
| List       | Scrollable list      |
| LayersTree | Layer hierarchy view |

---

## Custom Components

You can create reusable UI components by extending CustomTag.

javascript class MyPanel extends CustomTag { constructor() { super(); const text = JTag.createTag("Text"); text.setText("Custom Component"); this.childrenContainer[0].appendChild(text.body); } }

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
