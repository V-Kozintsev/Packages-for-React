"use strict";(self.webpackChunkweather_pages_otus=self.webpackChunkweather_pages_otus||[]).push([[516],{"./src/components/Collapsible.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyle:()=>CustomStyle,CustomTitle:()=>CustomTitle,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Collapsible_stories});var react=__webpack_require__("./node_modules/react/index.js");const Collapsible=({title,children,className})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return react.createElement("div",{className},react.createElement("h3",{onClick:()=>{setIsOpen(!isOpen)},style:{cursor:"pointer",userSelect:"none",display:"inline-block"}},title),isOpen&&react.createElement("div",null,children))},components_Collapsible=Collapsible;Collapsible.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};const Collapsible_stories={title:"Components/Collapsible",component:components_Collapsible,argTypes:{title:{control:"text"},className:{control:"text"}}},Default={args:{title:"Название раскрывашки",className:"collapsible",children:react.createElement("p",null,"Это содержимое, которое появляется и исчезает при клике")}},CustomTitle={args:{title:"Пользовательское название раскрывашки",className:"collapsible",children:react.createElement("p",null,"Это содержимое, которое появляется и исчезает при клике")}},CustomStyle={args:{title:"Раскрывашка c кастомным стилем",className:"custom-collapsible",children:react.createElement("p",null,"Это содержимое, которое появляется и исчезает при клике")}},__namedExportsOrder=["Default","CustomTitle","CustomStyle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Название раскрывашки",\n    className: "collapsible",\n    children: <p>Это содержимое, которое появляется и исчезает при клике</p>\n  }\n}',...Default.parameters?.docs?.source}}},CustomTitle.parameters={...CustomTitle.parameters,docs:{...CustomTitle.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Пользовательское название раскрывашки",\n    className: "collapsible",\n    children: <p>Это содержимое, которое появляется и исчезает при клике</p>\n  }\n}',...CustomTitle.parameters?.docs?.source}}},CustomStyle.parameters={...CustomStyle.parameters,docs:{...CustomStyle.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "Раскрывашка c кастомным стилем",\n    className: "custom-collapsible",\n    children: <p>Это содержимое, которое появляется и исчезает при клике</p>\n  }\n}',...CustomStyle.parameters?.docs?.source}}}}}]);