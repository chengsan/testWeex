// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "topheader": {
    "backgroundColor": "#FF0000",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "toptext": {
    "color": "#ffffff",
    "fontSize": "45",
    "textAlign": "center",
    "lines": 1
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["topheader"]
  }, [_c('text', {
    staticClass: ["toptext"]
  }, [_vm._v("标题")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "testinput": {
    "height": "80",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "fontSize": "32",
    "width": "750",
    "borderBottomWidth": "1",
    "marginBottom": "20"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    staticClass: ["testinput"],
    attrs: {
      "type": "text"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/chengsan/Desktop/WeexSpace/weexDemo/src/topHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-93f5b62e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "video": {
    "width": "630",
    "height": "350",
    "marginTop": "60",
    "marginLeft": "60"
  },
  "info": {
    "marginTop": "40",
    "fontSize": "40",
    "textAlign": "center"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      state: '----',
      src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
    };
  },

  methods: {
    onstart: function onstart(event) {
      this.state = 'onstart';
    },
    onpause: function onpause(event) {
      this.state = 'onpause';
    },
    onfinish: function onfinish(event) {
      this.state = 'onfinish';
    },
    onfail: function onfail(event) {
      this.state = 'onfinish';
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('video', {
    staticClass: ["video"],
    attrs: {
      "src": _vm.src,
      "autoplay": "",
      "controls": ""
    },
    on: {
      "start": _vm.onstart,
      "pause": _vm.onpause,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  }), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("state: " + _vm._s(_vm.state))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/chengsan/Desktop/WeexSpace/weexDemo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4f9a2e0e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "700",
    "height": "1250",
    "borderWidth": "3",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "marginLeft": "25"
  },
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "750",
    "height": "200"
  },
  "greeting": {
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  },
  "button": {
    "width": "450",
    "marginTop": "30",
    "marginLeft": "150",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderWidth": "2",
    "borderColor": "#DDDDDD",
    "backgroundColor": "#F5F5F5"
  },
  "text": {
    "fontSize": "20",
    "color": "#666666",
    "textAlign": "center"
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _topHeader = __webpack_require__(9);

var _topHeader2 = _interopRequireDefault(_topHeader);

var _foot = __webpack_require__(22);

var _foot2 = _interopRequireDefault(_foot);

var _videoTest = __webpack_require__(23);

var _videoTest2 = _interopRequireDefault(_videoTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用WEEX内置组件modal
var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//导入引用其他的文件

var navigator = weex.requireModule('navigator');
exports.default = {
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  },

  components: {
    topHeader: _topHeader2.default,
    foot: _foot2.default,
    videoTest: _videoTest2.default
  },
  created: function created() {
    modal.toast({
      message: '页面初始化成功！',
      duration: 3
    });
  },

  methods: {
    jump: function jump(event) {
      console.log('will jump');
      navigator.push({
        url: 'http://192.168.31.103:8081/dist/sliderDemo.js',
        animated: "true"
      }, function (event) {
        modal.toast({ message: 'callback: ' + event });
      });
    },
    jump1: function jump1(event) {
      console.log('will jump');
      navigator.push({
        url: 'http://192.168.31.103:8081/dist/webViewDemo.js',
        animated: "true"
      }, function (event) {
        modal.toast({ message: 'callback: ' + event });
      });
    },
    jump2: function jump2(event) {
      console.log('will jump');
      navigator.push({
        url: 'http://192.168.31.103:8081/dist/animationDemo.js',
        animated: "true"
      }, function (event) {
        modal.toast({ message: 'callback: ' + event });
      });
    },
    jump3: function jump3(event) {
      console.log('will jump');
      navigator.push({
        url: 'http://192.168.31.103:8081/dist/routerDemo.js',
        animated: "true"
      }, function (event) {
        modal.toast({ message: 'callback: ' + event });
      });
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/chengsan/Desktop/WeexSpace/weexDemo/src/foot.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-40fe8397"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/chengsan/Desktop/WeexSpace/weexDemo/src/videoTest.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-30c3da58"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('topHeader'), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', [_vm._m(0), _c('div', [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo,
      "resize": "contain"
    }
  })]), _c('div', [_c('videoTest')], 1), _c('div', [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.jump3
    }
  }, [_vm._v("routerDemo")])]), _c('div', [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.jump
    }
  }, [_vm._v("跳转轮播图2")])]), _c('div', [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.jump1
    }
  }, [_vm._v("跳转WebView")])]), _c('div', [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.jump2
    }
  }, [_vm._v("动画")])]), _c('foot')], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["greeting"]
  }, [_vm._v("hello world")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
