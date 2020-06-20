import React from "react";
import DocumentLayout, {
  DocumentlayoutProps,
} from "pages/components/DocumentLayout";

export default ({ children }: DocumentlayoutProps) => {
  return <DocumentLayout list={list} children={children} />;
};

const list = [
  { head: "Document" },
  { title: "Why fbc?", url: "/document" },
  { head: "入门" },
  { title: "安装", url: "/document/install" },
  { title: "浏览器支持", url: "/document/browser" },
  { head: "核心概念" },
  { title: "运行机制", url: "/document/operating" },
  { title: "Utility-First", url: "/document/utility-first" },
  { title: "响应式设计", url: "/document/relevant-design" },
  { title: "Pseudo-Class Variants", url: "/document/pseudo-class" },
  { title: "提取组件", url: "/document/use-components" },
  { head: "定制" },
  { title: "配置", url: "/document/config" },
  { title: "主题", url: "/document/theme" },
  { title: "断点", url: "/document/block-point" },
  { title: "颜色", url: "/document/colors" },
  { title: "间距", url: "/document/spaces" },
  { title: "编写插件", url: "/document/plugin" },
  { head: "基础样式" },
  { title: "单位", url: "/document/util" },
  { head: "布局" },
  { title: "Container", url: "/document/container" },
  { title: "Box Sizing", url: "/document/box-sizing" },
  { title: "Display", url: "/document/display" },
  { title: "Float", url: "/document/float" },
  { title: "Clear", url: "/document/clear" },
  { title: "Object Fit", url: "/document/object-fit" },
  { title: "Object Position", url: "/document/object-position" },
  { title: "Overflow", url: "/document/overflow" },
  { title: "Position", url: "/document/position" },
  { title: "Top/Right/Bottom/Left", url: "/document/top-right-bottom-left" },
  { title: "Visibility", url: "/document/visibility" },
  { title: "Z-index", url: "/document/z-index" },
  { head: "FlexBox" },
  { title: "Flex Direction", url: "/document/flex-direction" },
  { title: "Flex Wrap", url: "/document/flex-wrap" },
  { title: "Justify Content - Align Items", url: "/document/justify" },
  { title: "Align Content", url: "/document/align-content" },
  { title: "Align Self", url: "/document/align-self" },
  { title: "Flex", url: "/document/flex" },
  { title: "Grow", url: "/document/grow" },
  { title: "Flex Shrink", url: "/document/flex-shrink" },
  { title: "Order", url: "/document/order" },
  { head: "Grid" },
  { title: "Grid Template Columns", url: "/document/grid-template-columns" },
  { title: "Grid Column Start End", url: "/document/grid-column-start-end" },
  { title: "Grid Template Rows", url: "/document/grid-template-rows" },
  { title: "Grid Row Start/End", url: "/document/grid-template-start-end" },
  { title: "Gap", url: "/document/gap" },
  { title: "Grid Auto Flow", url: "/document/grid-auto-flow" },
  { head: "Sizing" },
  { title: "Width", url: "/document/width" },
  { title: "Min-Width", url: "/document/min-width" },
  { title: "Max-Width", url: "/document/max-width" },
  { title: "Height", url: "/document/height" },
  { title: "Min-Height", url: "/document/min-height" },
  { title: "Max-Height", url: "/document/max-height" },
  { head: "排版" },
  { title: "Font Family", url: "/document/font-family" },
  { title: "Font Size", url: "/document/font-size" },
  { title: "Font Smoothing", url: "/document/font-smoothing" },
  { title: "Font Style", url: "/document/font-style" },
  { title: "Text Weight", url: "/document/text-weight" },
  { title: "字体间距", url: "/document/letter-spacing" },
  { title: "行高", url: "/document/line-height" },
  { title: "List Style Type", url: "/document/list-style-type" },
  { title: "List Style Position", url: "/document/list-style-position" },
  { title: "Placeholder Color", url: "/document/placeholder-color" },
  { title: "Placeholder Opacity", url: "/document/placeholder-opacity" },
  { title: "文本对齐", url: "/document/text-align" },
  { title: "文本颜色", url: "/document/text-color" },
  { title: "Text Opacity", url: "/document/text-opacity" },
  { title: "Text Decoration", url: "/document/text-decoration" },
  { title: "Text Transform", url: "/document/text-transform" },
  { title: "垂直对齐", url: "/document/vertical-align" },
  { title: "Whitespace", url: "/document/whitespace" },
  { title: "Word Break", url: "/document/word-break" },
  { head: "背景" },
  { title: "Background Attachment", url: "/document/attachment" },
  { title: "Background Color", url: "/document/background-color" },
  { title: "Background Opacity", url: "/document/background-opacity" },
  { title: "Background Position", url: "/document/background-position" },
  { title: "Background Repeat", url: "/document/background-repeat" },
  { title: "Background Size", url: "/document/background-size" },
  { head: "Border" },
  { title: "Border Radius", url: "/document/border-radius" },
  { title: "Border Width", url: "/document/border-width" },
  { title: "Border Color", url: "/document/border-color" },
  { title: "Border Opacity", url: "/document/border-opacity" },
  { title: "Border Style", url: "/document/border-style" },
  { head: "表格" },
  { title: "Border Collapse", url: "/document/border-collapse" },
  { title: "Table Layout", url: "/document/table-layout" },
  { head: "Effect" },
  { title: "Shadow", url: "/document/shadow" },
  { title: "Opacity", url: "/document/opacity" },
  { head: "Transition" },
  { title: "Transition Property", url: "/document/transition-property" },
  { title: "Transition Duration", url: "/document/transition-duration" },
  {
    title: "Transition Timing Function",
    url: "/document/transition-timing-function",
  },
  { title: "Transition Delay", url: "/document/transition-delay" },
  { head: "Transforms" },
  { title: "Scale", url: "/document/scale" },
  { title: "Rotate", url: "/document/rotate" },
  { title: "Translate", url: "/document/translate" },
  { title: "Skew", url: "/document/skew" },
  { title: "Transform Origin", url: "/document/transform-origin" },
  { head: "Interactivity" },
  { title: "Appearance", url: "/document/appearance" },
  { title: "Cursor", url: "/document/cursor" },
  { title: "Outline", url: "/document/outline" },
  { title: "Pointer Events", url: "/document/pointer-events" },
  { title: "Resize", url: "/document/resize" },
  { title: "User Select", url: "/document/user-select" },
  { head: "Svg" },
  { title: "Fill", url: "/document/fill" },
  { title: "Stroke", url: "/document/stroke" },
  { title: "Stroke Width", url: "/document/stroke-width" },
  { head: "Accessibility" },
  { title: "Screen Readers", url: "/document/screen-readers" },
];