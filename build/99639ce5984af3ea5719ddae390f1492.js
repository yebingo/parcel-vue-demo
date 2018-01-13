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
})({13:[function(require,module,exports) {
"use strict";var t=require("vueify/lib/insert-css").insert(".index[data-v-86ab0a94]{font-size:24px}");!function(){Object.defineProperty(exports,"__esModule",{value:!0});var t,e=require("../store/index"),s=(t=e)&&t.__esModule?t:{default:t};exports.default={data:function(){return{msg:"hello parcel"}},computed:{name:function(){return s.default.state.firstData}}}}(),module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("h1",[this._v("haha")]),this._v(" "),e("router-link",{attrs:{to:"/card",tag:"div"}},[this._v(this._s(this.name))]),this._v(" "),e("router-link",{attrs:{to:"/city",tag:"div"}},[this._v("to city web")])],1)},e.staticRenderFns=[],e._scopeId="data-v-86ab0a94";
},{"vueify/lib/insert-css":10,"../store/index":6}]},{},[13])