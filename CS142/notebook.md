# CS142 Web Applications

- Notebook created on 2022/6/26

## 学习目标

- 学会基础的全栈式开发

## 目录

- <a href="Environment">Environment</a>

- <a href="#intro">Intro</a>
- <a href="#HTML">HTML</a>

- <a href="#CSS">CSS</a>



## <a id="Environment">Environment</a>

HTML: VScode + Live Server(Extention)

## <a id="intro">Intro</a>

- Full stack

Browser -- Web server -- Storage system

Chrome -- Node.js -- MongoDB



## <a id="HTML">HTML</a>

Concept: HyperText **Markup Language**（超文本标记语言）

Approach:

- Start with content
- Annotate it with tags

#### Tags

Meaning of text: <h1>

Formatting information: <i>

Additional information <img>

#### XML

Basic Syntax rules:

- Document started with <html>
- Tags can contain attributes
- special characters
  - &lt &gt &amp...

Structure:

<?xml version="1.0" encoding="utf-8"?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="..." xml:lang="en" lang="en">

<head>

</head>

<body>

Common used tags:

- #<table> <tr> <td> Tables

- #<ul> <li> Unordered list

- #<ol> <li> Ordered list

- #<div> Grouping related elements, forces a line break before and after

- #<span> Used for single line 

- #<form> <input> <textarea> <select> Create forms to input data

---

#<head> section  

- #<title> Create title, which will appear in the title bar for the browser
- #<link> CSS stylesheets
- #<script> Javascript



## <a id="CSS">CSS</a>

Key Concept: separate style from content (#<span class="test">)

DRY principle: don't repeat yourself

Rules:

```css
(selector){
    property1: value;
    property2: value;
    ...
}
```

---

Selector:

- Tag name: h1
- Class attribute: .large
- Tag and class: p.large
- Element id #id20

- (Pseudo) hover: (p:hover) When mouse is over element
- (Pseudo) a:link, a:visited

---

Properties:

- Coloring

Predefined names: red, blue ...

8-bit hexadecimal number: #ff0000 (RGB)

0-255 decimal: rgb(255, 255, 0)

Percentage: rgb(80% 80% 80%)

---

Box model: Margin, Border, Padding, Element

![css_box](src/css_box.png)

Size properties:

**width, height** | **model**-**location**(top, right, bottom, left)-**properties**(color, style, width)

---

Position property:

**static**: document flow

**relative**: position related to default position via top right bottom left

**fixed**: position related to a fixed location, (0,0) means top left corner

**absolute**: related to ancestor absolute element

---

More properties:

- background-img
- background-repeat
- font, font-family, font-size, font-weight, font-style
- text-align, vertical-align:(center, left, right)

- cursor
- display:(none, inline, block, flex, grid)
- visibility:(hidden, visible)

---

Issues:

Inheritance: **Inherited**(font-size), **Others**(border,background)

Multiple rule matches:**Most specific rule wins**

---

Adding styles to HTML

- Page specific:

```html
<head>
    <style type="text/css">
        /* your CSS */
    </style>
</head>
```

- Element-specific:

```html
<a style="/* Your style */">Text</a>
```

- Seperate style sheet:

```html
<head>
    <link rel="stylesheet" type="text/css" href="/* css path */">
</head>
```

- @import

