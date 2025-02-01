"use strict";(self.webpackChunkweather_pages_otus=self.webpackChunkweather_pages_otus||[]).push([[254],{"./src/components/Heading.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,Third:()=>Third,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Heading_stories});var react=__webpack_require__("./node_modules/react/index.js");const Heading=({level,className,children})=>{const HeadingTag=`h${level}`;return react.createElement(HeadingTag,{className},children)},components_Heading=Heading;Heading.__docgenInfo={description:"",methods:[],displayName:"Heading"};const Heading_stories={title:"Components/Heading",component:components_Heading,argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6]}}},Primary={args:{level:1,children:"Заголовок первого уровня",className:"main-heading"}},Secondary={args:{level:2,children:"Заголовок второго уровня",className:"secondary-heading"}},Third={args:{level:3,children:"Заголовок третьего уровня",className:"third-heading"}},__namedExportsOrder=["Primary","Secondary","Third"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    level: 1,\n    children: "Заголовок первого уровня",\n    className: "main-heading"\n  }\n}',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    level: 2,\n    children: "Заголовок второго уровня",\n    className: "secondary-heading"\n  }\n}',...Secondary.parameters?.docs?.source}}},Third.parameters={...Third.parameters,docs:{...Third.parameters?.docs,source:{originalSource:'{\n  args: {\n    level: 3,\n    children: "Заголовок третьего уровня",\n    className: "third-heading"\n  }\n}',...Third.parameters?.docs?.source}}}}}]);