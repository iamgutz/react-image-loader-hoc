(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(module,__webpack_exports__,__webpack_require__){"use strict";var helpers_extends=__webpack_require__(34),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__(75),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),classCallCheck=(__webpack_require__(142),__webpack_require__(161)),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__(162),createClass_default=__webpack_require__.n(createClass),possibleConstructorReturn=__webpack_require__(163),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(164),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),inherits=__webpack_require__(165),inherits_default=__webpack_require__.n(inherits),assertThisInitialized=__webpack_require__(18),assertThisInitialized_default=__webpack_require__.n(assertThisInitialized),react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),cloud_off=__webpack_require__(66),taggedTemplateLiteral=__webpack_require__(4),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),styled_components_browser_cjs=__webpack_require__(5),styled_components_browser_cjs_default=__webpack_require__.n(styled_components_browser_cjs);function _templateObject(){var data=taggedTemplateLiteral_default()(["\n  width: ",";\n  height: ",";\n  position: relative;\n"]);return _templateObject=function(){return data},data}var placeholder=styled_components_browser_cjs_default.a.div(_templateObject(),function(_ref){return _ref.width||"100%"},function(_ref2){return _ref2.height||"100%"}),Error=function(_ref){var component=_ref.component,width=_ref.width,height=_ref.height;return react_default.a.createElement(placeholder,{width:width,height:height},react_default.a.createElement(component||cloud_off.b,null))};Error.propTypes={component:prop_types_default.a.oneOfType([prop_types_default.a.func,prop_types_default.a.object,prop_types_default.a.node]),width:prop_types_default.a.string,height:prop_types_default.a.string},Error.defaultProps={component:null,width:null,height:null};var error=Error;Error.__docgenInfo={description:"",methods:[],displayName:"Error",props:{component:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"func"},{name:"object"},{name:"node"}]},required:!1,description:""},width:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},height:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/error.js"]={name:"Error",docgenInfo:Error.__docgenInfo,path:"src/components/error.js"});var rolling=__webpack_require__(67),Loader=function(_ref){var component=_ref.component,width=_ref.width,height=_ref.height;return react_default.a.createElement(placeholder,{width:width,height:height},react_default.a.createElement(component||rolling.b,null))};Loader.propTypes={component:prop_types_default.a.oneOfType([prop_types_default.a.func,prop_types_default.a.object,prop_types_default.a.node]),width:prop_types_default.a.string,height:prop_types_default.a.string},Loader.defaultProps={component:null,width:null,height:null};var loader=Loader;function _templateObject2(){var data=taggedTemplateLiteral_default()(["\n      animation: "," .5s linear;\n    "]);return _templateObject2=function(){return data},data}function enhanced_templateObject(){var data=taggedTemplateLiteral_default()(["\n  from { opacity 0; }\n  to { opacity 1; }\n"]);return enhanced_templateObject=function(){return data},data}Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{component:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"func"},{name:"object"},{name:"node"}]},required:!1,description:""},width:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},height:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/loader.js"]={name:"Loader",docgenInfo:Loader.__docgenInfo,path:"src/components/loader.js"});var fadeInAnimation=Object(styled_components_browser_cjs.keyframes)(enhanced_templateObject()),EnhancedComponent=function(_ref){var component=_ref.component,fadeIn=_ref.fadeIn,rest=objectWithoutProperties_default()(_ref,["component","fadeIn"]),Component=fadeIn?styled_components_browser_cjs_default()(component)(_templateObject2(),fadeInAnimation):component;return react_default.a.createElement(Component,rest)};EnhancedComponent.propTypes={component:prop_types_default.a.oneOfType([prop_types_default.a.func,prop_types_default.a.object,prop_types_default.a.node]),fadeIn:prop_types_default.a.bool.isRequired},EnhancedComponent.defaultProps={component:null};var enhanced=EnhancedComponent;EnhancedComponent.__docgenInfo={description:"",methods:[],displayName:"EnhancedComponent",props:{component:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"func"},{name:"object"},{name:"node"}]},required:!1,description:""},fadeIn:{type:{name:"bool"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/enhanced.js"]={name:"EnhancedComponent",docgenInfo:EnhancedComponent.__docgenInfo,path:"src/components/enhanced.js"});__webpack_exports__.a=function(WrappedComponent){var ImageLoaderHOC=function(_PureComponent){function ImageLoaderHOC(props){var _this;return classCallCheck_default()(this,ImageLoaderHOC),(_this=possibleConstructorReturn_default()(this,getPrototypeOf_default()(ImageLoaderHOC).call(this,props))).state={imageLoaded:!1,imageError:!1},_this._isMounted=!1,_this.isBrowser=!("undefined"==typeof window||!window.document||!window.document.createElement),_this.domImg=_this.isBrowser?new window.Image:{},_this.setImageLoaded=_this.setImageLoaded.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this))),_this.setImageError=_this.setImageError.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this))),_this.resetState=_this.resetState.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this))),_this.handleOnLoad=_this.handleOnLoad.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this))),_this.handleOnError=_this.handleOnError.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this))),_this.handleImageLoading=_this.handleImageLoading.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this))),_this}return inherits_default()(ImageLoaderHOC,_PureComponent),createClass_default()(ImageLoaderHOC,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.handleImageLoading()}},{key:"componentDidUpdate",value:function(prevProps){this.props.src!==prevProps.src&&this.handleImageLoading()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.domImg.src=""}},{key:"setImageLoaded",value:function(){this.setState({imageLoaded:!0})}},{key:"setImageError",value:function(){this.setState({imageError:!0})}},{key:"resetState",value:function(){this.setState({imageLoaded:!1,imageError:!1})}},{key:"handleOnLoad",value:function(){var onLoad=this.props.onLoad;this._isMounted&&this.setImageLoaded(),onLoad&&onLoad()}},{key:"handleOnError",value:function(error){var onError=this.props.onError;this._isMounted&&this.setImageError(),onError&&onError(error)}},{key:"handleImageLoading",value:function(){var _this2=this,src=this.props.src;this.resetState(),this.domImg.src=src,this.domImg.onload=function(){return _this2.handleOnLoad()},this.domImg.onerror=function(){return _this2.handleOnError()}}},{key:"render",value:function(){var _this$state=this.state,imageLoaded=_this$state.imageLoaded,imageError=_this$state.imageError,_this$props=this.props,loaderComp=_this$props.loaderComp,errorComp=_this$props.errorComp,fadeIn=_this$props.fadeIn,rest=objectWithoutProperties_default()(_this$props,["loaderComp","errorComp","fadeIn"]);return imageLoaded||imageError?imageError?react_default.a.createElement(error,extends_default()({component:errorComp},rest)):react_default.a.createElement(enhanced,extends_default()({component:WrappedComponent,fadeIn:fadeIn},rest)):react_default.a.createElement(loader,extends_default()({component:loaderComp},rest))}}]),ImageLoaderHOC}(react.PureComponent);return ImageLoaderHOC.propTypes={src:prop_types_default.a.string.isRequired,onLoad:prop_types_default.a.func,onError:prop_types_default.a.func,loaderComp:prop_types_default.a.oneOfType([prop_types_default.a.node,prop_types_default.a.func,prop_types_default.a.elementType]),errorComp:prop_types_default.a.oneOfType([prop_types_default.a.node,prop_types_default.a.func,prop_types_default.a.elementType]),fadeIn:prop_types_default.a.bool},ImageLoaderHOC.defaultProps={onLoad:function(){},onError:function(){},loaderComp:null,errorComp:null,fadeIn:!0},ImageLoaderHOC}},166:function(module,exports,__webpack_require__){__webpack_require__(167),__webpack_require__(246),module.exports=__webpack_require__(247)},247:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(16),__webpack_require__(11),__webpack_require__(17);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(27),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(160),_stories_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(65),req=__webpack_require__(374);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(function(getStories){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stories_styles__WEBPACK_IMPORTED_MODULE_6__.b,null),getStories())}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__.withOptions)({name:"React Image Loader HOC",url:"https://www.npmjs.com/package/react-image-loader-hoc",addonPanelInRight:!0})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(73)(module))},374:function(module,exports,__webpack_require__){var map={"./demo.stories.js":375,"./error.stories.js":387,"./loading.stories.js":388};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=374},375:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),styled_components__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(27),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_src_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(107),_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(65);function _templateObject3(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  color: #FF0000;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #FF0000;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  background-image: url(",");\n  opacity: 1;\n  width: ",";\n  height: ",";\n  background-size: cover;\n  background-position: center;\n  font-size: inherit;\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  flex-wrap: wrap;\n  > div {\n    margin: 0 1rem;\n  }\n"]);return _templateObject=function(){return data},data}var Row=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject()),Image=function(props){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({alt:""},props))},StyledImage=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(),function(props){return props.src},function(props){return props.width||"100%"},function(props){return props.height||"100%"}),dynamicStories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("DEMO",module);dynamicStories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.withKnobs);var StyledCustomComponent=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3()),CustomComp=function(_ref){var text=_ref.text;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCustomComponent,null,text)};dynamicStories.add("Basic Usage",function(){var knobs={src:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("src","https://edmullen.net/test/rc.jpg"),fadeIn:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("fadeIn",!0),width:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("width","300px"),height:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("height","200px")},ImageWithLoader=Object(_src_index__WEBPACK_IMPORTED_MODULE_6__.a)(Image),StyledImageWithLoader=Object(_src_index__WEBPACK_IMPORTED_MODULE_6__.a)(StyledImage);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__.c,null,"React Image Loader HOC"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,"Example: Img tag Component"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWithLoader,knobs)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,"Example: Div tag image as background"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledImageWithLoader,knobs)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,"Example: Custom Loader Component"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWithLoader,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},knobs,{loaderComp:function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomComp,{text:"Loading..."})}}))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,"Example: Custom Error Component"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWithLoader,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},knobs,{src:"".concat(knobs.src,"-error"),errorComp:function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomComp,{text:"Oops! Can't load image"})}})))))})}.call(this,__webpack_require__(73)(module))},387:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_src_components_cloud_off__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(66),dynamicStories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("SubComponents/errorComp",module);dynamicStories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),dynamicStories.add("Example",function(){var knobs=_src_components_cloud_off__WEBPACK_IMPORTED_MODULE_3__.a;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Error Component"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_cloud_off__WEBPACK_IMPORTED_MODULE_3__.b,{size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("size (pixels)",knobs.size),color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("color",knobs.color)}))})}.call(this,__webpack_require__(73)(module))},388:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_src_components_rolling__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(67),dynamicStories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("SubComponents/LoadComp",module);dynamicStories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),dynamicStories.add("Example",function(){var knobs=_src_components_rolling__WEBPACK_IMPORTED_MODULE_3__.a;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Loading Component"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_rolling__WEBPACK_IMPORTED_MODULE_3__.b,{size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("size (pixels)",knobs.size),color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("color",knobs.color),strokeThickness:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("strokeThickness",knobs.strokeThickness),dasharray:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("dasharray",knobs.dasharray),duration:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("duration (seconds)",knobs.duration)}))})}.call(this,__webpack_require__(73)(module))},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return GlobalStyle}),__webpack_require__.d(__webpack_exports__,"a",function(){return Content}),__webpack_require__.d(__webpack_exports__,"c",function(){return Title});var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),styled_components__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);function _templateObject3(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-weight: normal;\n  font-size: 2rem;\n  width: 100%;\n  text-align: center;\n  background: #fff;\n  margin: 0 0 2rem 0;\n  padding: 1.5rem 0;\n  color: #666666;\n  border-bottom: 1px solid #ccc;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  @font-face {\n    font-family: 'ProstoOne';\n    src: url('/fonts/ProstoOne-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  html, body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    font-family: 'ProstoOne', sans-serif;\n  }\n  #root {\n    height: 100%;\n  }\n"]);return _templateObject=function(){return data},data}var GlobalStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject()),Content=styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article(_templateObject2()),Title=styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject3())},66:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return DEFAULT_PROPS});var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),styled_components__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);function _templateObject(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  ","\n"]);return _templateObject=function(){return data},data}var DEFAULT_PROPS={color:"#cccccc",size:40},CloudOff=function(props){var color=props.color,size=props.size;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrap,{size:size},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{width:"".concat(size,"px"),height:"".concat(size,"px"),viewBox:"0 0 612 612",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path",{fill:color,d:"M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65zM196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z"})))};CloudOff.propTypes={color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number},CloudOff.defaultProps=DEFAULT_PROPS;var Wrap=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(),function(_ref){var size=_ref.size;return"\n    width: ".concat(size,"px;\n    height: ").concat(size,"px;\n  ")});__webpack_exports__.b=CloudOff,CloudOff.__docgenInfo={description:"",methods:[],displayName:"CloudOff",props:{color:{defaultValue:{value:"'#cccccc'",computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"40",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cloud-off.js"]={name:"CloudOff",docgenInfo:CloudOff.__docgenInfo,path:"src/components/cloud-off.js"})},67:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return DEFAULT_PROPS});var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),styled_components__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);function _templateObject4(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    animation: "," ","s linear infinite;\n  "]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  ","\n  border-top-color: transparent;\n  border-radius: 50%;\n  ","\n\n  ","\n  box-sizing: border-box;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  ","\n  ","\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n"]);return _templateObject=function(){return data},data}var DEFAULT_PROPS={color:"#cccccc",strokeThickness:5,size:30,duration:1},rotate=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)(_templateObject()),LdsRolling=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(),function(_ref){var size=_ref.size;return"\n    width: ".concat(size,"px;\n    height: ").concat(size,"px;\n  ")},function(_ref2){var size=_ref2.size;return"\n    transform: translate(-".concat(size/2,"px, -").concat(size/2,"px) scale(1) translate(").concat(size/2,"px, ").concat(size/2,"px);\n  ")}),LdsRollingDiv=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(),function(_ref3){var color=_ref3.color,strokeThickness=_ref3.strokeThickness;return"\n    border: ".concat(strokeThickness,"px solid ").concat(color,";\n  ")},function(_ref4){var duration=_ref4.duration;return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject4(),rotate,duration)},function(_ref5){var size=_ref5.size;return"\n    top: ".concat(size/2,"px;\n    left: ").concat(size/2,"px;\n  ")}),Rolling=function(props){var color=props.color,strokeThickness=props.strokeThickness,size=props.size,duration=props.duration;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LdsRolling,{size:size},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LdsRollingDiv,{strokeThickness:strokeThickness,color:color,size:size,duration:duration}))};Rolling.propTypes={color:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,strokeThickness:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,size:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,duration:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number},Rolling.defaultProps=DEFAULT_PROPS,__webpack_exports__.b=Rolling,Rolling.__docgenInfo={description:"",methods:[],displayName:"Rolling",props:{color:{defaultValue:{value:"'#cccccc'",computed:!1},type:{name:"string"},required:!1,description:""},strokeThickness:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},size:{defaultValue:{value:"30",computed:!1},type:{name:"number"},required:!1,description:""},duration:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/rolling.js"]={name:"Rolling",docgenInfo:Rolling.__docgenInfo,path:"src/components/rolling.js"})}},[[166,1,2]]]);
//# sourceMappingURL=main.6aa29b56d821855346e3.bundle.js.map