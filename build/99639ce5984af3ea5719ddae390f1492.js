// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped, ModuleConfig) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(ModuleConfig);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({16:[function(require,module,exports) {
var e=exports.cache={};function t(){}exports.insert=function(n){if(e[n])return t;e[n]=!0;var r=document.createElement("style");return r.setAttribute("type","text/css"),"textContent"in r?r.textContent=n:r.styleSheet.cssText=n,document.getElementsByTagName("head")[0].appendChild(r),function(){document.getElementsByTagName("head")[0].removeChild(r),e[n]=!1}};
},{}],9:[function(require,module,exports) {
"use strict";var e=require("vueify/lib/insert-css").insert(".index{display:flex;font-size:24px}");!function(){Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("../store/index"),s=(e=t)&&e.__esModule?e:{default:e};exports.default={data:function(){return{msg:"hello parcel"}},computed:{name:function(){return s.default.state.firstData}}}}(),module.exports.__esModule&&(module.exports=module.exports.default);var t="function"==typeof module.exports?module.exports.options:module.exports;t.render=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"index"},[t("h1",[this._v("haha")]),this._v(" "),t("router-link",{attrs:{to:"/card",tag:"div"}},[this._v(this._s(this.name))]),this._v(" "),t("router-link",{attrs:{to:"/city",tag:"div"}},[this._v("to city web")])],1)},t.staticRenderFns=[];
},{"vueify/lib/insert-css":16,"../store/index":4}]},{},[9])