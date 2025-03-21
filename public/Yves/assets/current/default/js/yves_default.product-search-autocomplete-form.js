"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["product-search-autocomplete-form"],{

/***/ "./src/Pyz/Yves/ProductSearchWidget/Theme/default/components/molecules/product-search-autocomplete-form/product-search-autocomplete-form.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductSearchWidget/Theme/default/components/molecules/product-search-autocomplete-form/product-search-autocomplete-form.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   "default": () => (/* binding */ ProductSearchAutocompleteForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var src_ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/ShopUi/components/molecules/autocomplete-form/autocomplete-form */ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts");


var Events = /*#__PURE__*/function (Events) {
  Events["FETCHING"] = "fetching";
  Events["FETCHED"] = "fetched";
  Events["CHANGE"] = "change";
  Events["SET"] = "set";
  Events["UNSET"] = "unset";
  return Events;
}({});
class ProductSearchAutocompleteForm extends src_ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.widgetSuggestionsContainer = void 0;
    this.suggestionItems = void 0;
    this.lastSelectedItem = void 0;
    this.quantityInput = void 0;
    this.injectorsExtraQueryValueList = void 0;
    this.extraQueryValues = new Map();
  }
  init() {
    this.widgetSuggestionsContainer = this.getElementsByClassName(this.jsName + "__suggestions")[0];
    this.quantityInput = document.getElementsByClassName(this.jsName + "__quantity-field")[0];
    if (this.injectorsExtraQueryValueClassName) {
      this.injectorsExtraQueryValueList = Array.from(document.getElementsByClassName(this.injectorsExtraQueryValueClassName));
    }
    super.init();
    this.plugKeydownEvent();
  }
  plugKeydownEvent() {
    this.inputElement.addEventListener('keydown', event => this.onKeyDown(event));
  }
  onInput() {
    if (this.inputText.length >= this.minLetters) {
      this.loadSuggestions();
      return;
    }
    this.hideSuggestions();
  }
  showSuggestions() {
    this.widgetSuggestionsContainer.classList.remove('is-hidden');
  }
  hideSuggestions() {
    this.widgetSuggestionsContainer.classList.add('is-hidden');
  }
  mapItemEvents() {
    var items = Array.from(this.widgetSuggestionsContainer.getElementsByClassName(this.itemClassName));
    items.forEach(item => {
      item.addEventListener('click', event => this.onItemClick(event));
    });
  }
  onKeyDown(event) {
    if (!this.suggestionItems && this.inputText.length < this.minLetters) {
      return;
    }
    switch (event.key) {
      case 'ArrowUp':
        this.onKeyDownArrowUp();
        break;
      case 'ArrowDown':
        this.onKeyDownArrowDown();
        break;
      case 'Enter':
        this.onKeyDownEnter();
        break;
    }
  }
  onKeyDownArrowUp() {
    var lastSelectedItemIndex = this.suggestionItems.indexOf(this.lastSelectedItem);
    var elementIndex = lastSelectedItemIndex - 1;
    var lastSuggestionItemIndex = this.suggestionItems.length - 1;
    var item = this.suggestionItems[elementIndex < 0 ? lastSuggestionItemIndex : elementIndex];
    this.changeSelectedItem(item);
  }
  onKeyDownArrowDown() {
    var lastSelectedItemIndex = this.suggestionItems.indexOf(this.lastSelectedItem);
    var elementIndex = lastSelectedItemIndex + 1;
    var lastSuggestionItemIndex = this.suggestionItems.length - 1;
    var item = this.suggestionItems[elementIndex > lastSuggestionItemIndex ? 0 : elementIndex];
    this.changeSelectedItem(item);
  }
  onKeyDownEnter() {
    this.lastSelectedItem.click();
  }
  changeSelectedItem(item) {
    this.lastSelectedItem.classList.remove(this.selectedInputClass);
    item.classList.add(this.selectedInputClass);
    this.lastSelectedItem = item;
  }
  setQueryParams() {
    this.extraQueryValues.clear();
    this.ajaxProvider.queryParams.clear();
    this.ajaxProvider.queryParams.set(this.queryParamName, this.inputText);
    if (!this.injectorsExtraQueryValueList || !this.injectorsExtraQueryValueList.length) {
      return;
    }
    this.injectorsExtraQueryValueList.forEach(item => {
      if (!item.name || !item.value) {
        return;
      }
      this.ajaxProvider.queryParams.set(item.name, item.value);
      this.extraQueryValues.set(item.name, item.value);
    });
  }
  loadSuggestions() {
    var _this = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.dispatchCustomEvent(Events.FETCHING);
      _this.showSuggestions();
      _this.setQueryParams();
      yield _this.ajaxProvider.fetch();
      _this.suggestionItems = Array.from(_this.widgetSuggestionsContainer.getElementsByClassName(_this.itemClassName));
      _this.lastSelectedItem = _this.suggestionItems[0];
      _this.mapItemEvents();
    })();
  }
  setInputs(data, text) {
    this.inputText = text;
    this.inputValue = data;
    this.dispatchCustomEvent(Events.SET, {
      text: this.inputText,
      value: this.inputValue,
      extraValues: this.extraQueryValues
    });
    if (this.quantityInput) {
      this.quantityInput.focus();
    }
  }
  onBlur() {
    this.hideSuggestions();
  }
  onFocus() {
    if (this.inputText.length >= this.minLetters) {
      this.showSuggestions();
    }
  }
  get inputText() {
    return this.inputElement.value.trim();
  }
  set inputText(value) {
    this.inputElement.value = value;
  }
  get selectedInputClass() {
    return (this.itemClassName + "--selected").substring(1);
  }
  get inputValue() {
    return this.hiddenInputElement.value;
  }
  set inputValue(value) {
    this.hiddenInputElement.value = value;
  }
  get injectorsExtraQueryValueClassName() {
    return this.getAttribute('injectors-extra-query-value-class-name');
  }
}

/***/ }),

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutocompleteForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_main_overlay_main_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ShopUi/components/molecules/main-overlay/main-overlay */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/main-overlay/main-overlay.ts");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");




class AutocompleteForm extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.ajaxProvider = void 0;
    this.inputElement = void 0;
    this.hiddenInputElement = void 0;
    this.suggestionsContainer = void 0;
    this.cleanButton = void 0;
    this.eventShowOverlay = void 0;
    this.eventHideOverlay = void 0;
  }
  readyCallback() {}
  init() {
    this.ajaxProvider = this.getElementsByClassName(this.jsName + "__provider")[0];
    this.suggestionsContainer = this.getElementsByClassName(this.jsName + "__container")[0];
    this.inputElement = this.getElementsByClassName(this.jsName + "__input")[0];
    this.hiddenInputElement = this.getElementsByClassName(this.jsName + "__input-hidden")[0];
    this.cleanButton = this.getElementsByClassName(this.jsName + "__clean-button")[0];
    this.mapEvents();
  }
  mapEvents() {
    this.inputElement.addEventListener('input', (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(() => this.onInput(), this.debounceDelay));
    this.inputElement.addEventListener('blur', (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(() => this.onBlur(), this.debounceDelay));
    this.inputElement.addEventListener('focus', () => this.onFocus());
    if (this.showCleanButton) {
      this.cleanButton.addEventListener('click', () => this.onCleanButtonClick());
    }
    this.mapOverlayEvents();
  }
  onCleanButtonClick() {
    this.cleanFields();
  }
  onBlur() {
    this.toggleOverlay(false);
    this.hideSuggestions();
  }
  onFocus() {
    this.toggleOverlay(true);
    if (this.inputValue.length >= this.minLetters) {
      this.showSuggestions();
    }
  }
  onInput() {
    if (this.inputValue.length >= this.minLetters) {
      this.loadSuggestions();
      return;
    }
    this.hideSuggestions();
  }
  mapOverlayEvents() {
    var overlayConfig = {
      bubbles: true,
      detail: {
        id: this.name,
        zIndex: Number(getComputedStyle(this).zIndex) - 1
      }
    };
    this.eventShowOverlay = new CustomEvent(ShopUi_components_molecules_main_overlay_main_overlay__WEBPACK_IMPORTED_MODULE_2__.EVENT_SHOW_OVERLAY, overlayConfig);
    this.eventHideOverlay = new CustomEvent(ShopUi_components_molecules_main_overlay_main_overlay__WEBPACK_IMPORTED_MODULE_2__.EVENT_HIDE_OVERLAY, overlayConfig);
  }
  toggleOverlay(isShown) {
    this.dispatchEvent(isShown ? this.eventShowOverlay : this.eventHideOverlay);
    document.body.classList.toggle(this.bodyOverlayClassName, isShown);
  }
  showSuggestions() {
    this.suggestionsContainer.classList.remove('is-hidden');
  }
  hideSuggestions() {
    this.suggestionsContainer.classList.add('is-hidden');
  }
  loadSuggestions() {
    var _this = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showSuggestions();
      _this.ajaxProvider.queryParams.set(_this.queryParamName, _this.inputValue);
      yield _this.ajaxProvider.fetch();
      _this.mapItemEvents();
    })();
  }
  mapItemEvents() {
    var items = Array.from(this.suggestionsContainer.getElementsByClassName(this.itemClassName));
    items.forEach(item => {
      item.addEventListener('click', event => this.onItemClick(event));
    });
  }
  onItemClick(event) {
    var dataTarget = event.target;
    var data = dataTarget.getAttribute(this.valueDataAttribute);
    var text = dataTarget.textContent.trim();
    this.setInputs(data, text);
  }
  setInputs(data, text) {
    this.hiddenInputElement.value = data;
    this.inputElement.value = text;
  }
  cleanFields() {
    this.setInputs('', '');
  }
  get minLetters() {
    return Number(this.getAttribute('min-letters'));
  }
  get inputValue() {
    return this.inputElement.value.trim();
  }
  get queryParamName() {
    return this.getAttribute('query-param-name');
  }
  get valueDataAttribute() {
    return this.getAttribute('value-data-attribute');
  }
  get itemClassName() {
    return this.getAttribute('item-class-name');
  }
  get debounceDelay() {
    return Number(this.getAttribute('debounce-delay'));
  }
  get showCleanButton() {
    return this.hasAttribute('show-clean-button');
  }
  get bodyOverlayClassName() {
    return this.getAttribute('body-overlay-class-name');
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/main-overlay/main-overlay.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/main-overlay/main-overlay.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_HIDE_OVERLAY: () => (/* binding */ EVENT_HIDE_OVERLAY),
/* harmony export */   EVENT_SHOW_OVERLAY: () => (/* binding */ EVENT_SHOW_OVERLAY),
/* harmony export */   "default": () => (/* binding */ MainOverlay)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

var EVENT_SHOW_OVERLAY = 'showOverlay';
var EVENT_HIDE_OVERLAY = 'hideOverlay';
class MainOverlay extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggerQueue = [];
    this.showClassName = this.name + "--show";
  }
  readyCallback() {}
  init() {
    this.mapEvents();
    if (this.isOpen) {
      this.onShowOverlay();
    }
  }
  mapEvents() {
    this.mapShowOverlayEvent();
    this.mapHideOverlayEvent();
  }
  mapShowOverlayEvent() {
    document.addEventListener(EVENT_SHOW_OVERLAY, event => this.onShowOverlay(event.detail));
  }
  mapHideOverlayEvent() {
    document.addEventListener(EVENT_HIDE_OVERLAY, event => this.onHideOverlay(event.detail));
  }
  onShowOverlay(detail) {
    if (detail === void 0) {
      detail = {};
    }
    this.classList.add(this.showClassName);
    this.setProperties(detail);
    this.triggerQueue.push(detail);
  }
  onHideOverlay(detail) {
    var isSingleInQueue = this.triggerQueue.length === 1;
    if (!(detail != null && detail.id) && isSingleInQueue) {
      this.triggerQueue.pop();
      this.hideOverlay();
      return;
    }
    if (!(detail != null && detail.id)) {
      this.triggerQueue.pop();
      this.setPreviousOverlayState(this.triggerQueue[this.triggerQueue.length - 1]);
      return;
    }
    this.triggerQueue = this.triggerQueue.filter(item => (item == null ? void 0 : item.id) !== detail.id);
    if (!this.triggerQueue.length) {
      this.hideOverlay();
      return;
    }
    this.setPreviousOverlayState(this.triggerQueue[this.triggerQueue.length - 1]);
  }
  hideOverlay() {
    this.classList.remove(this.showClassName);
    this.resetProperties();
  }
  setPreviousOverlayState(detail) {
    this.resetProperties();
    this.setProperties(detail);
  }
  setProperties(detail) {
    if (detail != null && detail.zIndex) {
      this.style.zIndex = String(detail.zIndex);
    }
  }
  resetProperties() {
    this.style.removeProperty('z-index');
  }
  get isOpen() {
    return this.hasAttribute('is-open');
  }
}

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTrim.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ "./node_modules/lodash-es/_trimmedEndIndex.js");


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_trimmedEndIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);


/***/ }),

/***/ "./node_modules/lodash-es/debounce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now.js */ "./node_modules/lodash-es/now.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/now.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ }),

/***/ "./node_modules/lodash-es/toNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ "./node_modules/lodash-es/_baseTrim.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucHJvZHVjdC1zZWFyY2gtYXV0b2NvbXBsZXRlLWZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUc7QUFFNUYsSUFBS0MsTUFBTSwwQkFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBQSxPQUFOQSxNQUFNO0FBQUE7QUFRSCxNQUFNQyw2QkFBNkIsU0FBU0YsMkdBQWdCLENBQUM7RUFBQUcsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUM5REMsMEJBQTBCO0lBQUEsS0FDMUJDLGVBQWU7SUFBQSxLQUNmQyxnQkFBZ0I7SUFBQSxLQUNoQkMsYUFBYTtJQUFBLEtBQ2JDLDRCQUE0QjtJQUFBLEtBQzVCQyxnQkFBZ0IsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQztFQUFBO0VBRTVCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDUCwwQkFBMEIsR0FBZ0IsSUFBSSxDQUFDUSxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sa0JBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RyxJQUFJLENBQUNOLGFBQWEsR0FBcUJPLFFBQVEsQ0FBQ0Ysc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLHFCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNHLElBQUksSUFBSSxDQUFDRSxpQ0FBaUMsRUFBRTtNQUN4QyxJQUFJLENBQUNQLDRCQUE0QixHQUM3QlEsS0FBSyxDQUFDQyxJQUFJLENBQUNILFFBQVEsQ0FBQ0Ysc0JBQXNCLENBQUMsSUFBSSxDQUFDRyxpQ0FBaUMsQ0FBQyxDQUNyRjtJQUNMO0lBRUEsS0FBSyxDQUFDSixJQUFJLENBQUMsQ0FBQztJQUNaLElBQUksQ0FBQ08sZ0JBQWdCLENBQUMsQ0FBQztFQUMzQjtFQUVVQSxnQkFBZ0JBLENBQUEsRUFBUztJQUMvQixJQUFJLENBQUNDLFlBQVksQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxLQUFvQixJQUFLLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxLQUFLLENBQUMsQ0FBQztFQUNsRztFQUVVRSxPQUFPQSxDQUFBLEVBQVM7SUFDdEIsSUFBSSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxJQUFJLElBQUksQ0FBQ0MsVUFBVSxFQUFFO01BQzFDLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUM7TUFFdEI7SUFDSjtJQUNBLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUM7RUFDMUI7RUFFVUMsZUFBZUEsQ0FBQSxFQUFTO0lBQzlCLElBQUksQ0FBQ3pCLDBCQUEwQixDQUFDMEIsU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO0VBQ2pFO0VBRVVILGVBQWVBLENBQUEsRUFBUztJQUM5QixJQUFJLENBQUN4QiwwQkFBMEIsQ0FBQzBCLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUM5RDtFQUVVQyxhQUFhQSxDQUFBLEVBQVM7SUFDNUIsSUFBTUMsS0FBSyxHQUNQbEIsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDYiwwQkFBMEIsQ0FBQ1Esc0JBQXNCLENBQUMsSUFBSSxDQUFDdUIsYUFBYSxDQUFDLENBQ3hGO0lBQ0RELEtBQUssQ0FBQ0UsT0FBTyxDQUFFQyxJQUFpQixJQUFLO01BQ2pDQSxJQUFJLENBQUNqQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQVksSUFBSyxJQUFJLENBQUNpQixXQUFXLENBQUNqQixLQUFLLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUM7RUFDTjtFQUVVQyxTQUFTQSxDQUFDRCxLQUFvQixFQUFRO0lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUNoQixlQUFlLElBQUksSUFBSSxDQUFDbUIsU0FBUyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQUU7TUFDbEU7SUFDSjtJQUVBLFFBQVFMLEtBQUssQ0FBQ2tCLEdBQUc7TUFDYixLQUFLLFNBQVM7UUFDVixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7UUFDdkI7TUFDSixLQUFLLFdBQVc7UUFDWixJQUFJLENBQUNDLGtCQUFrQixDQUFDLENBQUM7UUFDekI7TUFDSixLQUFLLE9BQU87UUFDUixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCO0lBQ1I7RUFDSjtFQUVVRixnQkFBZ0JBLENBQUEsRUFBUztJQUMvQixJQUFNRyxxQkFBcUIsR0FBRyxJQUFJLENBQUN0QyxlQUFlLENBQUN1QyxPQUFPLENBQUMsSUFBSSxDQUFDdEMsZ0JBQWdCLENBQUM7SUFDakYsSUFBTXVDLFlBQVksR0FBR0YscUJBQXFCLEdBQUcsQ0FBQztJQUM5QyxJQUFNRyx1QkFBdUIsR0FBRyxJQUFJLENBQUN6QyxlQUFlLENBQUNvQixNQUFNLEdBQUcsQ0FBQztJQUMvRCxJQUFNWSxJQUFJLEdBQUcsSUFBSSxDQUFDaEMsZUFBZSxDQUFDd0MsWUFBWSxHQUFHLENBQUMsR0FBR0MsdUJBQXVCLEdBQUdELFlBQVksQ0FBQztJQUU1RixJQUFJLENBQUNFLGtCQUFrQixDQUFDVixJQUFJLENBQUM7RUFDakM7RUFFVUksa0JBQWtCQSxDQUFBLEVBQVM7SUFDakMsSUFBTUUscUJBQXFCLEdBQUcsSUFBSSxDQUFDdEMsZUFBZSxDQUFDdUMsT0FBTyxDQUFDLElBQUksQ0FBQ3RDLGdCQUFnQixDQUFDO0lBQ2pGLElBQU11QyxZQUFZLEdBQUdGLHFCQUFxQixHQUFHLENBQUM7SUFDOUMsSUFBTUcsdUJBQXVCLEdBQUcsSUFBSSxDQUFDekMsZUFBZSxDQUFDb0IsTUFBTSxHQUFHLENBQUM7SUFDL0QsSUFBTVksSUFBSSxHQUFHLElBQUksQ0FBQ2hDLGVBQWUsQ0FBQ3dDLFlBQVksR0FBR0MsdUJBQXVCLEdBQUcsQ0FBQyxHQUFHRCxZQUFZLENBQUM7SUFFNUYsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQ1YsSUFBSSxDQUFDO0VBQ2pDO0VBRVVLLGNBQWNBLENBQUEsRUFBUztJQUM3QixJQUFJLENBQUNwQyxnQkFBZ0IsQ0FBQzBDLEtBQUssQ0FBQyxDQUFDO0VBQ2pDO0VBRVVELGtCQUFrQkEsQ0FBQ1YsSUFBaUIsRUFBUTtJQUNsRCxJQUFJLENBQUMvQixnQkFBZ0IsQ0FBQ3dCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ2tCLGtCQUFrQixDQUFDO0lBQy9EWixJQUFJLENBQUNQLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ2lCLGtCQUFrQixDQUFDO0lBQzNDLElBQUksQ0FBQzNDLGdCQUFnQixHQUFHK0IsSUFBSTtFQUNoQztFQUVVYSxjQUFjQSxDQUFBLEVBQVM7SUFDN0IsSUFBSSxDQUFDekMsZ0JBQWdCLENBQUMwQyxLQUFLLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNDLFlBQVksQ0FBQ0MsV0FBVyxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxjQUFjLEVBQUUsSUFBSSxDQUFDL0IsU0FBUyxDQUFDO0lBRXRFLElBQUksQ0FBQyxJQUFJLENBQUNoQiw0QkFBNEIsSUFBSSxDQUFDLElBQUksQ0FBQ0EsNEJBQTRCLENBQUNpQixNQUFNLEVBQUU7TUFDakY7SUFDSjtJQUVBLElBQUksQ0FBQ2pCLDRCQUE0QixDQUFDNEIsT0FBTyxDQUFFQyxJQUFJLElBQUs7TUFDaEQsSUFBSSxDQUFDQSxJQUFJLENBQUNtQixJQUFJLElBQUksQ0FBQ25CLElBQUksQ0FBQ29CLEtBQUssRUFBRTtRQUMzQjtNQUNKO01BRUEsSUFBSSxDQUFDTCxZQUFZLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDakIsSUFBSSxDQUFDbUIsSUFBSSxFQUFFbkIsSUFBSSxDQUFDb0IsS0FBSyxDQUFDO01BQ3hELElBQUksQ0FBQ2hELGdCQUFnQixDQUFDNkMsR0FBRyxDQUFDakIsSUFBSSxDQUFDbUIsSUFBSSxFQUFFbkIsSUFBSSxDQUFDb0IsS0FBSyxDQUFDO0lBQ3BELENBQUMsQ0FBQztFQUNOO0VBRU05QixlQUFlQSxDQUFBLEVBQWtCO0lBQUEsSUFBQStCLEtBQUE7SUFBQSxPQUFBQyxtRkFBQTtNQUNuQ0QsS0FBSSxDQUFDRSxtQkFBbUIsQ0FBQzVELE1BQU0sQ0FBQzZELFFBQVEsQ0FBQztNQUN6Q0gsS0FBSSxDQUFDN0IsZUFBZSxDQUFDLENBQUM7TUFDdEI2QixLQUFJLENBQUNSLGNBQWMsQ0FBQyxDQUFDO01BRXJCLE1BQU1RLEtBQUksQ0FBQ04sWUFBWSxDQUFDVSxLQUFLLENBQUMsQ0FBQztNQUMvQkosS0FBSSxDQUFDckQsZUFBZSxHQUNoQlcsS0FBSyxDQUFDQyxJQUFJLENBQUN5QyxLQUFJLENBQUN0RCwwQkFBMEIsQ0FBQ1Esc0JBQXNCLENBQUM4QyxLQUFJLENBQUN2QixhQUFhLENBQUMsQ0FDeEY7TUFDRHVCLEtBQUksQ0FBQ3BELGdCQUFnQixHQUFHb0QsS0FBSSxDQUFDckQsZUFBZSxDQUFDLENBQUMsQ0FBQztNQUMvQ3FELEtBQUksQ0FBQ3pCLGFBQWEsQ0FBQyxDQUFDO0lBQUM7RUFDekI7RUFFQThCLFNBQVNBLENBQUNDLElBQVksRUFBRUMsSUFBWSxFQUFRO0lBQ3hDLElBQUksQ0FBQ3pDLFNBQVMsR0FBR3lDLElBQUk7SUFDckIsSUFBSSxDQUFDQyxVQUFVLEdBQUdGLElBQUk7SUFFdEIsSUFBSSxDQUFDSixtQkFBbUIsQ0FBQzVELE1BQU0sQ0FBQ21FLEdBQUcsRUFBRTtNQUNqQ0YsSUFBSSxFQUFFLElBQUksQ0FBQ3pDLFNBQVM7TUFDcEJpQyxLQUFLLEVBQUUsSUFBSSxDQUFDUyxVQUFVO01BQ3RCRSxXQUFXLEVBQUUsSUFBSSxDQUFDM0Q7SUFDdEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxJQUFJLENBQUNGLGFBQWEsRUFBRTtNQUNwQixJQUFJLENBQUNBLGFBQWEsQ0FBQzhELEtBQUssQ0FBQyxDQUFDO0lBQzlCO0VBQ0o7RUFFVUMsTUFBTUEsQ0FBQSxFQUFTO0lBQ3JCLElBQUksQ0FBQzFDLGVBQWUsQ0FBQyxDQUFDO0VBQzFCO0VBRVUyQyxPQUFPQSxDQUFBLEVBQVM7SUFDdEIsSUFBSSxJQUFJLENBQUMvQyxTQUFTLENBQUNDLE1BQU0sSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFBRTtNQUMxQyxJQUFJLENBQUNHLGVBQWUsQ0FBQyxDQUFDO0lBQzFCO0VBQ0o7RUFFQSxJQUFjTCxTQUFTQSxDQUFBLEVBQVc7SUFDOUIsT0FBTyxJQUFJLENBQUNMLFlBQVksQ0FBQ3NDLEtBQUssQ0FBQ2UsSUFBSSxDQUFDLENBQUM7RUFDekM7RUFFQSxJQUFjaEQsU0FBU0EsQ0FBQ2lDLEtBQWEsRUFBRTtJQUNuQyxJQUFJLENBQUN0QyxZQUFZLENBQUNzQyxLQUFLLEdBQUdBLEtBQUs7RUFDbkM7RUFFQSxJQUFjUixrQkFBa0JBLENBQUEsRUFBVztJQUN2QyxPQUFPLENBQUcsSUFBSSxDQUFDZCxhQUFhLGlCQUFhc0MsU0FBUyxDQUFDLENBQUMsQ0FBQztFQUN6RDtFQUVBLElBQWNQLFVBQVVBLENBQUEsRUFBVztJQUMvQixPQUFPLElBQUksQ0FBQ1Esa0JBQWtCLENBQUNqQixLQUFLO0VBQ3hDO0VBRUEsSUFBY1MsVUFBVUEsQ0FBQ1QsS0FBYSxFQUFFO0lBQ3BDLElBQUksQ0FBQ2lCLGtCQUFrQixDQUFDakIsS0FBSyxHQUFHQSxLQUFLO0VBQ3pDO0VBRUEsSUFBYzFDLGlDQUFpQ0EsQ0FBQSxFQUFXO0lBQ3RELE9BQU8sSUFBSSxDQUFDNEQsWUFBWSxDQUFDLHdDQUF3QyxDQUFDO0VBQ3RFO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTGdEO0FBTWU7QUFDckI7QUFFM0IsTUFBTTVFLGdCQUFnQixTQUFTNkUsK0RBQVMsQ0FBQztFQUFBMUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUMxQ2lELFlBQVk7SUFBQSxLQUNaakMsWUFBWTtJQUFBLEtBQ1p1RCxrQkFBa0I7SUFBQSxLQUNsQk0sb0JBQW9CO0lBQUEsS0FDcEJDLFdBQVc7SUFBQSxLQUNYQyxnQkFBZ0I7SUFBQSxLQUNoQkMsZ0JBQWdCO0VBQUE7RUFFaEJDLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCekUsSUFBSUEsQ0FBQSxFQUFTO0lBQ25CLElBQUksQ0FBQ3lDLFlBQVksR0FBaUIsSUFBSSxDQUFDeEMsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGVBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixJQUFJLENBQUNtRSxvQkFBb0IsR0FBZ0IsSUFBSSxDQUFDcEUsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGdCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEcsSUFBSSxDQUFDTSxZQUFZLEdBQXFCLElBQUksQ0FBQ1Asc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLFlBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixJQUFJLENBQUM2RCxrQkFBa0IsR0FBcUIsSUFBSSxDQUFDOUQsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLG1CQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLElBQUksQ0FBQ29FLFdBQVcsR0FBc0IsSUFBSSxDQUFDckUsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLG1CQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBHLElBQUksQ0FBQ3dFLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVBLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLENBQUNsRSxZQUFZLENBQUNDLGdCQUFnQixDQUM5QixPQUFPLEVBQ1AyRCw4REFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDeEQsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMrRCxhQUFhLENBQ3JELENBQUM7SUFDRCxJQUFJLENBQUNuRSxZQUFZLENBQUNDLGdCQUFnQixDQUM5QixNQUFNLEVBQ04yRCw4REFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDVCxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2dCLGFBQWEsQ0FDcEQsQ0FBQztJQUNELElBQUksQ0FBQ25FLFlBQVksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDbUQsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVqRSxJQUFJLElBQUksQ0FBQ2dCLGVBQWUsRUFBRTtNQUN0QixJQUFJLENBQUNOLFdBQVcsQ0FBQzdELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQ29FLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMvRTtJQUVBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUMzQjtFQUVVRCxrQkFBa0JBLENBQUEsRUFBUztJQUNqQyxJQUFJLENBQUNFLFdBQVcsQ0FBQyxDQUFDO0VBQ3RCO0VBRVVwQixNQUFNQSxDQUFBLEVBQVM7SUFDckIsSUFBSSxDQUFDcUIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QixJQUFJLENBQUMvRCxlQUFlLENBQUMsQ0FBQztFQUMxQjtFQUVVMkMsT0FBT0EsQ0FBQSxFQUFTO0lBQ3RCLElBQUksQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFFeEIsSUFBSSxJQUFJLENBQUN6QixVQUFVLENBQUN6QyxNQUFNLElBQUksSUFBSSxDQUFDQyxVQUFVLEVBQUU7TUFDM0MsSUFBSSxDQUFDRyxlQUFlLENBQUMsQ0FBQztJQUMxQjtFQUNKO0VBRVVOLE9BQU9BLENBQUEsRUFBUztJQUN0QixJQUFJLElBQUksQ0FBQzJDLFVBQVUsQ0FBQ3pDLE1BQU0sSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFBRTtNQUMzQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO01BRXRCO0lBQ0o7SUFDQSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0VBQzFCO0VBRVU2RCxnQkFBZ0JBLENBQUEsRUFBUztJQUMvQixJQUFNRyxhQUFrRCxHQUFHO01BQ3ZEQyxPQUFPLEVBQUUsSUFBSTtNQUNiQyxNQUFNLEVBQUU7UUFDSkMsRUFBRSxFQUFFLElBQUksQ0FBQ3ZDLElBQUk7UUFDYndDLE1BQU0sRUFBRUMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQ0YsTUFBTSxDQUFDLEdBQUc7TUFDcEQ7SUFDSixDQUFDO0lBRUQsSUFBSSxDQUFDZCxnQkFBZ0IsR0FBRyxJQUFJaUIsV0FBVyxDQUFDckIscUdBQWtCLEVBQUVjLGFBQWEsQ0FBQztJQUMxRSxJQUFJLENBQUNULGdCQUFnQixHQUFHLElBQUlnQixXQUFXLENBQUN0QixxR0FBa0IsRUFBRWUsYUFBYSxDQUFDO0VBQzlFO0VBRVVELGFBQWFBLENBQUNTLE9BQWdCLEVBQVE7SUFDNUMsSUFBSSxDQUFDQyxhQUFhLENBQUNELE9BQU8sR0FBRyxJQUFJLENBQUNsQixnQkFBZ0IsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixDQUFDO0lBQzNFckUsUUFBUSxDQUFDd0YsSUFBSSxDQUFDeEUsU0FBUyxDQUFDeUUsTUFBTSxDQUFDLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUVKLE9BQU8sQ0FBQztFQUN0RTtFQUVVdkUsZUFBZUEsQ0FBQSxFQUFTO0lBQzlCLElBQUksQ0FBQ21ELG9CQUFvQixDQUFDbEQsU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO0VBQzNEO0VBRVVILGVBQWVBLENBQUEsRUFBUztJQUM5QixJQUFJLENBQUNvRCxvQkFBb0IsQ0FBQ2xELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUN4RDtFQUVNTCxlQUFlQSxDQUFBLEVBQWtCO0lBQUEsSUFBQStCLEtBQUE7SUFBQSxPQUFBQyxtRkFBQTtNQUNuQ0QsS0FBSSxDQUFDN0IsZUFBZSxDQUFDLENBQUM7TUFDdEI2QixLQUFJLENBQUNOLFlBQVksQ0FBQ0MsV0FBVyxDQUFDQyxHQUFHLENBQUNJLEtBQUksQ0FBQ0gsY0FBYyxFQUFFRyxLQUFJLENBQUNRLFVBQVUsQ0FBQztNQUV2RSxNQUFNUixLQUFJLENBQUNOLFlBQVksQ0FBQ1UsS0FBSyxDQUFDLENBQUM7TUFDL0JKLEtBQUksQ0FBQ3pCLGFBQWEsQ0FBQyxDQUFDO0lBQUM7RUFDekI7RUFFVUEsYUFBYUEsQ0FBQSxFQUFTO0lBQzVCLElBQU1DLEtBQUssR0FBR2xCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQytELG9CQUFvQixDQUFDcEUsc0JBQXNCLENBQUMsSUFBSSxDQUFDdUIsYUFBYSxDQUFDLENBQUM7SUFDOUZELEtBQUssQ0FBQ0UsT0FBTyxDQUFFQyxJQUFpQixJQUFLO01BQ2pDQSxJQUFJLENBQUNqQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQVksSUFBSyxJQUFJLENBQUNpQixXQUFXLENBQUNqQixLQUFLLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUM7RUFDTjtFQUVVaUIsV0FBV0EsQ0FBQ2pCLEtBQVksRUFBUTtJQUN0QyxJQUFNb0YsVUFBVSxHQUFnQnBGLEtBQUssQ0FBQ3FGLE1BQU07SUFDNUMsSUFBTTFDLElBQUksR0FBR3lDLFVBQVUsQ0FBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUNnQyxrQkFBa0IsQ0FBQztJQUM3RCxJQUFNMUMsSUFBSSxHQUFHd0MsVUFBVSxDQUFDRyxXQUFXLENBQUNwQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxJQUFJLENBQUNULFNBQVMsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUM7RUFDOUI7RUFFQUYsU0FBU0EsQ0FBQ0MsSUFBWSxFQUFFQyxJQUFZLEVBQVE7SUFDeEMsSUFBSSxDQUFDUyxrQkFBa0IsQ0FBQ2pCLEtBQUssR0FBR08sSUFBSTtJQUNwQyxJQUFJLENBQUM3QyxZQUFZLENBQUNzQyxLQUFLLEdBQUdRLElBQUk7RUFDbEM7RUFFQXlCLFdBQVdBLENBQUEsRUFBUztJQUNoQixJQUFJLENBQUMzQixTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUMxQjtFQUVBLElBQWNyQyxVQUFVQSxDQUFBLEVBQVc7SUFDL0IsT0FBT3VFLE1BQU0sQ0FBQyxJQUFJLENBQUN0QixZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7RUFDbkQ7RUFFQSxJQUFjVCxVQUFVQSxDQUFBLEVBQVc7SUFDL0IsT0FBTyxJQUFJLENBQUMvQyxZQUFZLENBQUNzQyxLQUFLLENBQUNlLElBQUksQ0FBQyxDQUFDO0VBQ3pDO0VBRUEsSUFBY2pCLGNBQWNBLENBQUEsRUFBVztJQUNuQyxPQUFPLElBQUksQ0FBQ29CLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztFQUNoRDtFQUVBLElBQWNnQyxrQkFBa0JBLENBQUEsRUFBVztJQUN2QyxPQUFPLElBQUksQ0FBQ2hDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztFQUNwRDtFQUVBLElBQWN4QyxhQUFhQSxDQUFBLEVBQVc7SUFDbEMsT0FBTyxJQUFJLENBQUN3QyxZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDL0M7RUFFQSxJQUFjVyxhQUFhQSxDQUFBLEVBQVc7SUFDbEMsT0FBT1csTUFBTSxDQUFDLElBQUksQ0FBQ3RCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3REO0VBRUEsSUFBY1ksZUFBZUEsQ0FBQSxFQUFZO0lBQ3JDLE9BQU8sSUFBSSxDQUFDc0IsWUFBWSxDQUFDLG1CQUFtQixDQUFDO0VBQ2pEO0VBRUEsSUFBY0wsb0JBQW9CQSxDQUFBLEVBQVc7SUFDekMsT0FBTyxJQUFJLENBQUM3QixZQUFZLENBQUMseUJBQXlCLENBQUM7RUFDdkQ7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS2dEO0FBRXpDLElBQU1HLGtCQUFrQixHQUFHLGFBQWE7QUFDeEMsSUFBTUQsa0JBQWtCLEdBQUcsYUFBYTtBQU9oQyxNQUFNaUMsV0FBVyxTQUFTbEMsK0RBQVMsQ0FBQztFQUFBMUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUNyQzRHLFlBQVksR0FBeUIsRUFBRTtJQUFBLEtBQ3ZDQyxhQUFhLEdBQU0sSUFBSSxDQUFDeEQsSUFBSTtFQUFBO0VBRTVCNEIsYUFBYUEsQ0FBQSxFQUFTLENBQUM7RUFFdkJ6RSxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDMEUsU0FBUyxDQUFDLENBQUM7SUFFaEIsSUFBSSxJQUFJLENBQUM0QixNQUFNLEVBQUU7TUFDYixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hCO0VBQ0o7RUFFVTdCLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLENBQUM4QixtQkFBbUIsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQztFQUM5QjtFQUVVRCxtQkFBbUJBLENBQUEsRUFBUztJQUNsQ3JHLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMwRCxrQkFBa0IsRUFBR3pELEtBQXNDLElBQ2pGLElBQUksQ0FBQzZGLGFBQWEsQ0FBQzdGLEtBQUssQ0FBQ3lFLE1BQU0sQ0FDbkMsQ0FBQztFQUNMO0VBRVVzQixtQkFBbUJBLENBQUEsRUFBUztJQUNsQ3RHLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUN5RCxrQkFBa0IsRUFBR3hELEtBQXNDLElBQ2pGLElBQUksQ0FBQ2dHLGFBQWEsQ0FBQ2hHLEtBQUssQ0FBQ3lFLE1BQU0sQ0FDbkMsQ0FBQztFQUNMO0VBRVVvQixhQUFhQSxDQUFDcEIsTUFBMEIsRUFBYTtJQUFBLElBQXZDQSxNQUEwQjtNQUExQkEsTUFBMEIsR0FBRyxDQUFDLENBQUM7SUFBQTtJQUNuRCxJQUFJLENBQUNoRSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNnRixhQUFhLENBQUM7SUFDdEMsSUFBSSxDQUFDTSxhQUFhLENBQUN4QixNQUFNLENBQUM7SUFDMUIsSUFBSSxDQUFDaUIsWUFBWSxDQUFDUSxJQUFJLENBQUN6QixNQUFNLENBQUM7RUFDbEM7RUFFVXVCLGFBQWFBLENBQUN2QixNQUEwQixFQUFRO0lBQ3RELElBQU0wQixlQUFlLEdBQUcsSUFBSSxDQUFDVCxZQUFZLENBQUN0RixNQUFNLEtBQUssQ0FBQztJQUV0RCxJQUFJLEVBQUNxRSxNQUFNLFlBQU5BLE1BQU0sQ0FBRUMsRUFBRSxLQUFJeUIsZUFBZSxFQUFFO01BQ2hDLElBQUksQ0FBQ1QsWUFBWSxDQUFDVSxHQUFHLENBQUMsQ0FBQztNQUN2QixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BRWxCO0lBQ0o7SUFFQSxJQUFJLEVBQUM1QixNQUFNLFlBQU5BLE1BQU0sQ0FBRUMsRUFBRSxHQUFFO01BQ2IsSUFBSSxDQUFDZ0IsWUFBWSxDQUFDVSxHQUFHLENBQUMsQ0FBQztNQUN2QixJQUFJLENBQUNFLHVCQUF1QixDQUFDLElBQUksQ0FBQ1osWUFBWSxDQUFDLElBQUksQ0FBQ0EsWUFBWSxDQUFDdEYsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BRTdFO0lBQ0o7SUFFQSxJQUFJLENBQUNzRixZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNhLE1BQU0sQ0FBRXZGLElBQUksSUFBSyxDQUFBQSxJQUFJLG9CQUFKQSxJQUFJLENBQUUwRCxFQUFFLE1BQUtELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDO0lBRTlFLElBQUksQ0FBQyxJQUFJLENBQUNnQixZQUFZLENBQUN0RixNQUFNLEVBQUU7TUFDM0IsSUFBSSxDQUFDaUcsV0FBVyxDQUFDLENBQUM7TUFFbEI7SUFDSjtJQUVBLElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsSUFBSSxDQUFDWixZQUFZLENBQUMsSUFBSSxDQUFDQSxZQUFZLENBQUN0RixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDakY7RUFFVWlHLFdBQVdBLENBQUEsRUFBUztJQUMxQixJQUFJLENBQUM1RixTQUFTLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNpRixhQUFhLENBQUM7SUFDekMsSUFBSSxDQUFDYSxlQUFlLENBQUMsQ0FBQztFQUMxQjtFQUVVRix1QkFBdUJBLENBQUM3QixNQUEwQixFQUFRO0lBQ2hFLElBQUksQ0FBQytCLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ1AsYUFBYSxDQUFDeEIsTUFBTSxDQUFDO0VBQzlCO0VBRVV3QixhQUFhQSxDQUFDeEIsTUFBMEIsRUFBUTtJQUN0RCxJQUFJQSxNQUFNLFlBQU5BLE1BQU0sQ0FBRUUsTUFBTSxFQUFFO01BQ2hCLElBQUksQ0FBQzhCLEtBQUssQ0FBQzlCLE1BQU0sR0FBRytCLE1BQU0sQ0FBQ2pDLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO0lBQzdDO0VBQ0o7RUFFVTZCLGVBQWVBLENBQUEsRUFBUztJQUM5QixJQUFJLENBQUNDLEtBQUssQ0FBQ0UsY0FBYyxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUVBLElBQWNmLE1BQU1BLENBQUEsRUFBWTtJQUM1QixPQUFPLElBQUksQ0FBQ0osWUFBWSxDQUFDLFNBQVMsQ0FBQztFQUN2QztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUNsRzhCOztBQUU5QjtBQUNBLGFBQWEsZ0RBQUk7O0FBRWpCLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFk7QUFDTTtBQUNVOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0RBQU0sR0FBRyxrREFBTTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBUztBQUNmLE1BQU0sOERBQWM7QUFDcEI7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0IwQjs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtEQUFlO0FBQ3JDO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnhCO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSFE7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0RBQU0sR0FBRyxrREFBTTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0N6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlk7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNEQUFVOztBQUVyQixpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1JwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQk07QUFDVjtBQUNVOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLFdBQVc7QUFDOUIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQVE7QUFDakIsTUFBTSx3REFBUTtBQUNkO0FBQ0E7QUFDQSxpQ0FBaUMsd0RBQVE7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1EQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQsbURBQUc7QUFDNUQ7O0FBRUE7QUFDQSxlQUFlLG1EQUFHO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUx4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmM7QUFDRzs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNERBQVksV0FBVywwREFBVTtBQUN0Qzs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qk07O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnREFBSTtBQUNiOztBQUVBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJtQjtBQUNEO0FBQ0E7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFRO0FBQ2Q7QUFDQTtBQUNBLE1BQU0sd0RBQVE7QUFDZDtBQUNBLFlBQVksd0RBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vc3JjL1B5ei9ZdmVzL1Byb2R1Y3RTZWFyY2hXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LXNlYXJjaC1hdXRvY29tcGxldGUtZm9ybS9wcm9kdWN0LXNlYXJjaC1hdXRvY29tcGxldGUtZm9ybS50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvYXV0b2NvbXBsZXRlLWZvcm0vYXV0b2NvbXBsZXRlLWZvcm0udHMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL21haW4tb3ZlcmxheS9tYWluLW92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0LmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9ub3cuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy90b051bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b2NvbXBsZXRlRm9ybSBmcm9tICdzcmMvU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2F1dG9jb21wbGV0ZS1mb3JtL2F1dG9jb21wbGV0ZS1mb3JtJztcblxuZXhwb3J0IGVudW0gRXZlbnRzIHtcbiAgICBGRVRDSElORyA9ICdmZXRjaGluZycsXG4gICAgRkVUQ0hFRCA9ICdmZXRjaGVkJyxcbiAgICBDSEFOR0UgPSAnY2hhbmdlJyxcbiAgICBTRVQgPSAnc2V0JyxcbiAgICBVTlNFVCA9ICd1bnNldCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RTZWFyY2hBdXRvY29tcGxldGVGb3JtIGV4dGVuZHMgQXV0b2NvbXBsZXRlRm9ybSB7XG4gICAgcHJvdGVjdGVkIHdpZGdldFN1Z2dlc3Rpb25zQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3VnZ2VzdGlvbkl0ZW1zOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBsYXN0U2VsZWN0ZWRJdGVtOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcXVhbnRpdHlJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlTGlzdDogSFRNTFNlbGVjdEVsZW1lbnRbXSB8IEhUTUxJbnB1dEVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgZXh0cmFRdWVyeVZhbHVlcyA9IG5ldyBNYXAoKTtcblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLndpZGdldFN1Z2dlc3Rpb25zQ29udGFpbmVyID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3N1Z2dlc3Rpb25zYClbMF07XG4gICAgICAgIHRoaXMucXVhbnRpdHlJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19xdWFudGl0eS1maWVsZGApWzBdO1xuICAgICAgICBpZiAodGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlTGlzdCA9IDxIVE1MU2VsZWN0RWxlbWVudFtdIHwgSFRNTElucHV0RWxlbWVudFtdPihcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVDbGFzc05hbWUpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgdGhpcy5wbHVnS2V5ZG93bkV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBsdWdLZXlkb3duRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMub25LZXlEb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0VGV4dC5sZW5ndGggPj0gdGhpcy5taW5MZXR0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRTdWdnZXN0aW9ucygpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd1N1Z2dlc3Rpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLndpZGdldFN1Z2dlc3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlU3VnZ2VzdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2lkZ2V0U3VnZ2VzdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEl0ZW1FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gPEhUTUxFbGVtZW50W10+KFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLndpZGdldFN1Z2dlc3Rpb25zQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pdGVtQ2xhc3NOYW1lKSlcbiAgICAgICAgKTtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uSXRlbUNsaWNrKGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1Z2dlc3Rpb25JdGVtcyAmJiB0aGlzLmlucHV0VGV4dC5sZW5ndGggPCB0aGlzLm1pbkxldHRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5RG93bkFycm93VXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25BcnJvd0Rvd24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5RG93bkVudGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duQXJyb3dVcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGFzdFNlbGVjdGVkSXRlbUluZGV4ID0gdGhpcy5zdWdnZXN0aW9uSXRlbXMuaW5kZXhPZih0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICBjb25zdCBlbGVtZW50SW5kZXggPSBsYXN0U2VsZWN0ZWRJdGVtSW5kZXggLSAxO1xuICAgICAgICBjb25zdCBsYXN0U3VnZ2VzdGlvbkl0ZW1JbmRleCA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnN1Z2dlc3Rpb25JdGVtc1tlbGVtZW50SW5kZXggPCAwID8gbGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXggOiBlbGVtZW50SW5kZXhdO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd25BcnJvd0Rvd24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxhc3RTZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zLmluZGV4T2YodGhpcy5sYXN0U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgY29uc3QgZWxlbWVudEluZGV4ID0gbGFzdFNlbGVjdGVkSXRlbUluZGV4ICsgMTtcbiAgICAgICAgY29uc3QgbGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXggPSB0aGlzLnN1Z2dlc3Rpb25JdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zdWdnZXN0aW9uSXRlbXNbZWxlbWVudEluZGV4ID4gbGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXggPyAwIDogZWxlbWVudEluZGV4XTtcblxuICAgICAgICB0aGlzLmNoYW5nZVNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duRW50ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbS5jbGljaygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VTZWxlY3RlZEl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZWxlY3RlZElucHV0Q2xhc3MpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5zZWxlY3RlZElucHV0Q2xhc3MpO1xuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRRdWVyeVBhcmFtcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHRyYVF1ZXJ5VmFsdWVzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYWpheFByb3ZpZGVyLnF1ZXJ5UGFyYW1zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYWpheFByb3ZpZGVyLnF1ZXJ5UGFyYW1zLnNldCh0aGlzLnF1ZXJ5UGFyYW1OYW1lLCB0aGlzLmlucHV0VGV4dCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QgfHwgIXRoaXMuaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubmFtZSB8fCAhaXRlbS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIucXVlcnlQYXJhbXMuc2V0KGl0ZW0ubmFtZSwgaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmV4dHJhUXVlcnlWYWx1ZXMuc2V0KGl0ZW0ubmFtZSwgaXRlbS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRTdWdnZXN0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5GRVRDSElORyk7XG4gICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmFqYXhQcm92aWRlci5mZXRjaCgpO1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25JdGVtcyA9IDxIVE1MRWxlbWVudFtdPihcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy53aWRnZXRTdWdnZXN0aW9uc0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaXRlbUNsYXNzTmFtZSkpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zWzBdO1xuICAgICAgICB0aGlzLm1hcEl0ZW1FdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZXRJbnB1dHMoZGF0YTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFdmVudHMuU0VULCB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmlucHV0VGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmlucHV0VmFsdWUsXG4gICAgICAgICAgICBleHRyYVZhbHVlczogdGhpcy5leHRyYVF1ZXJ5VmFsdWVzLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5xdWFudGl0eUlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkJsdXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0VGV4dC5sZW5ndGggPj0gdGhpcy5taW5MZXR0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTdWdnZXN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBpbnB1dFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0IGlucHV0VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzZWxlY3RlZElucHV0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuaXRlbUNsYXNzTmFtZX0tLXNlbGVjdGVkYC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZGRlbklucHV0RWxlbWVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0IGlucHV0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmhpZGRlbklucHV0RWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaW5qZWN0b3JzLWV4dHJhLXF1ZXJ5LXZhbHVlLWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcbmltcG9ydCBBamF4UHJvdmlkZXIgZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2FqYXgtcHJvdmlkZXIvYWpheC1wcm92aWRlcic7XG5pbXBvcnQge1xuICAgIEVWRU5UX0hJREVfT1ZFUkxBWSxcbiAgICBFVkVOVF9TSE9XX09WRVJMQVksXG4gICAgT3ZlcmxheUV2ZW50RGV0YWlsLFxufSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvbWFpbi1vdmVybGF5L21haW4tb3ZlcmxheSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLWVzL2RlYm91bmNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGFqYXhQcm92aWRlcjogQWpheFByb3ZpZGVyO1xuICAgIHByb3RlY3RlZCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGhpZGRlbklucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3VnZ2VzdGlvbnNDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBjbGVhbkJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGV2ZW50U2hvd092ZXJsYXk6IEN1c3RvbUV2ZW50PE92ZXJsYXlFdmVudERldGFpbD47XG4gICAgcHJvdGVjdGVkIGV2ZW50SGlkZU92ZXJsYXk6IEN1c3RvbUV2ZW50PE92ZXJsYXlFdmVudERldGFpbD47XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIgPSA8QWpheFByb3ZpZGVyPnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3Byb3ZpZGVyYClbMF07XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fY29udGFpbmVyYClbMF07XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9faW5wdXRgKVswXTtcbiAgICAgICAgdGhpcy5oaWRkZW5JbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbnB1dC1oaWRkZW5gKVswXTtcbiAgICAgICAgdGhpcy5jbGVhbkJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19jbGVhbi1idXR0b25gKVswXTtcblxuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnaW5wdXQnLFxuICAgICAgICAgICAgZGVib3VuY2UoKCkgPT4gdGhpcy5vbklucHV0KCksIHRoaXMuZGVib3VuY2VEZWxheSksXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgICBkZWJvdW5jZSgoKSA9PiB0aGlzLm9uQmx1cigpLCB0aGlzLmRlYm91bmNlRGVsYXkpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHRoaXMub25Gb2N1cygpKTtcblxuICAgICAgICBpZiAodGhpcy5zaG93Q2xlYW5CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ2xlYW5CdXR0b25DbGljaygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwT3ZlcmxheUV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNsZWFuQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYW5GaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25CbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZU92ZXJsYXkoZmFsc2UpO1xuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZU92ZXJsYXkodHJ1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGggPj0gdGhpcy5taW5MZXR0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTdWdnZXN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUubGVuZ3RoID49IHRoaXMubWluTGV0dGVycykge1xuICAgICAgICAgICAgdGhpcy5sb2FkU3VnZ2VzdGlvbnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcE92ZXJsYXlFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWc6IEN1c3RvbUV2ZW50SW5pdDxPdmVybGF5RXZlbnREZXRhaWw+ID0ge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS56SW5kZXgpIC0gMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ldmVudFNob3dPdmVybGF5ID0gbmV3IEN1c3RvbUV2ZW50KEVWRU5UX1NIT1dfT1ZFUkxBWSwgb3ZlcmxheUNvbmZpZyk7XG4gICAgICAgIHRoaXMuZXZlbnRIaWRlT3ZlcmxheSA9IG5ldyBDdXN0b21FdmVudChFVkVOVF9ISURFX09WRVJMQVksIG92ZXJsYXlDb25maWcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b2dnbGVPdmVybGF5KGlzU2hvd246IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGlzU2hvd24gPyB0aGlzLmV2ZW50U2hvd092ZXJsYXkgOiB0aGlzLmV2ZW50SGlkZU92ZXJsYXkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUodGhpcy5ib2R5T3ZlcmxheUNsYXNzTmFtZSwgaXNTaG93bik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3dTdWdnZXN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGlkZVN1Z2dlc3Rpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRTdWdnZXN0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIucXVlcnlQYXJhbXMuc2V0KHRoaXMucXVlcnlQYXJhbU5hbWUsIHRoaXMuaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5hamF4UHJvdmlkZXIuZmV0Y2goKTtcbiAgICAgICAgdGhpcy5tYXBJdGVtRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEl0ZW1FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLnN1Z2dlc3Rpb25zQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pdGVtQ2xhc3NOYW1lKSk7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkl0ZW1DbGljayhldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JdGVtQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGFUYXJnZXQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBkYXRhID0gZGF0YVRhcmdldC5nZXRBdHRyaWJ1dGUodGhpcy52YWx1ZURhdGFBdHRyaWJ1dGUpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZGF0YVRhcmdldC50ZXh0Q29udGVudC50cmltKCk7XG5cbiAgICAgICAgdGhpcy5zZXRJbnB1dHMoZGF0YSwgdGV4dCk7XG4gICAgfVxuXG4gICAgc2V0SW5wdXRzKGRhdGE6IHN0cmluZywgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZGVuSW5wdXRFbGVtZW50LnZhbHVlID0gZGF0YTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0ZXh0O1xuICAgIH1cblxuICAgIGNsZWFuRmllbGRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldElucHV0cygnJywgJycpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWluTGV0dGVycygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdtaW4tbGV0dGVycycpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHF1ZXJ5UGFyYW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncXVlcnktcGFyYW0tbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdmFsdWVEYXRhQXR0cmlidXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUtZGF0YS1hdHRyaWJ1dGUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGl0ZW1DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpdGVtLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGRlYm91bmNlRGVsYXkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgnZGVib3VuY2UtZGVsYXknKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzaG93Q2xlYW5CdXR0b24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnc2hvdy1jbGVhbi1idXR0b24nKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGJvZHlPdmVybGF5Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYm9keS1vdmVybGF5LWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEVWRU5UX1NIT1dfT1ZFUkxBWSA9ICdzaG93T3ZlcmxheSc7XG5leHBvcnQgY29uc3QgRVZFTlRfSElERV9PVkVSTEFZID0gJ2hpZGVPdmVybGF5JztcblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RXZlbnREZXRhaWwge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHpJbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk92ZXJsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCB0cmlnZ2VyUXVldWU6IE92ZXJsYXlFdmVudERldGFpbFtdID0gW107XG4gICAgcHJvdGVjdGVkIHNob3dDbGFzc05hbWUgPSBgJHt0aGlzLm5hbWV9LS1zaG93YDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vblNob3dPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcFNob3dPdmVybGF5RXZlbnQoKTtcbiAgICAgICAgdGhpcy5tYXBIaWRlT3ZlcmxheUV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFNob3dPdmVybGF5RXZlbnQoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfU0hPV19PVkVSTEFZLCAoZXZlbnQ6IEN1c3RvbUV2ZW50PE92ZXJsYXlFdmVudERldGFpbD4pID0+XG4gICAgICAgICAgICB0aGlzLm9uU2hvd092ZXJsYXkoZXZlbnQuZGV0YWlsKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwSGlkZU92ZXJsYXlFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVF9ISURFX09WRVJMQVksIChldmVudDogQ3VzdG9tRXZlbnQ8T3ZlcmxheUV2ZW50RGV0YWlsPikgPT5cbiAgICAgICAgICAgIHRoaXMub25IaWRlT3ZlcmxheShldmVudC5kZXRhaWwpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblNob3dPdmVybGF5KGRldGFpbDogT3ZlcmxheUV2ZW50RGV0YWlsID0ge30pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKHRoaXMuc2hvd0NsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhkZXRhaWwpO1xuICAgICAgICB0aGlzLnRyaWdnZXJRdWV1ZS5wdXNoKGRldGFpbCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSGlkZU92ZXJsYXkoZGV0YWlsOiBPdmVybGF5RXZlbnREZXRhaWwpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNTaW5nbGVJblF1ZXVlID0gdGhpcy50cmlnZ2VyUXVldWUubGVuZ3RoID09PSAxO1xuXG4gICAgICAgIGlmICghZGV0YWlsPy5pZCAmJiBpc1NpbmdsZUluUXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRldGFpbD8uaWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcmV2aW91c092ZXJsYXlTdGF0ZSh0aGlzLnRyaWdnZXJRdWV1ZVt0aGlzLnRyaWdnZXJRdWV1ZS5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlID0gdGhpcy50cmlnZ2VyUXVldWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtPy5pZCAhPT0gZGV0YWlsLmlkKTtcblxuICAgICAgICBpZiAoIXRoaXMudHJpZ2dlclF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFByZXZpb3VzT3ZlcmxheVN0YXRlKHRoaXMudHJpZ2dlclF1ZXVlW3RoaXMudHJpZ2dlclF1ZXVlLmxlbmd0aCAtIDFdKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGlkZU92ZXJsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNob3dDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRQcmV2aW91c092ZXJsYXlTdGF0ZShkZXRhaWw6IE92ZXJsYXlFdmVudERldGFpbCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0UHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoZGV0YWlsKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0UHJvcGVydGllcyhkZXRhaWw6IE92ZXJsYXlFdmVudERldGFpbCk6IHZvaWQge1xuICAgICAgICBpZiAoZGV0YWlsPy56SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gU3RyaW5nKGRldGFpbC56SW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0UHJvcGVydGllcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnei1pbmRleCcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2lzLW9wZW4nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiaW1wb3J0IHRyaW1tZWRFbmRJbmRleCBmcm9tICcuL190cmltbWVkRW5kSW5kZXguanMnO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmltbWVkRW5kSW5kZXg7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgbm93IGZyb20gJy4vbm93LmpzJztcbmltcG9ydCB0b051bWJlciBmcm9tICcuL3RvTnVtYmVyLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNTeW1ib2w7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm93O1xuIiwiaW1wb3J0IGJhc2VUcmltIGZyb20gJy4vX2Jhc2VUcmltLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvTnVtYmVyO1xuIl0sIm5hbWVzIjpbIkF1dG9jb21wbGV0ZUZvcm0iLCJFdmVudHMiLCJQcm9kdWN0U2VhcmNoQXV0b2NvbXBsZXRlRm9ybSIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwid2lkZ2V0U3VnZ2VzdGlvbnNDb250YWluZXIiLCJzdWdnZXN0aW9uSXRlbXMiLCJsYXN0U2VsZWN0ZWRJdGVtIiwicXVhbnRpdHlJbnB1dCIsImluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QiLCJleHRyYVF1ZXJ5VmFsdWVzIiwiTWFwIiwiaW5pdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJkb2N1bWVudCIsImluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUNsYXNzTmFtZSIsIkFycmF5IiwiZnJvbSIsInBsdWdLZXlkb3duRXZlbnQiLCJpbnB1dEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvbktleURvd24iLCJvbklucHV0IiwiaW5wdXRUZXh0IiwibGVuZ3RoIiwibWluTGV0dGVycyIsImxvYWRTdWdnZXN0aW9ucyIsImhpZGVTdWdnZXN0aW9ucyIsInNob3dTdWdnZXN0aW9ucyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1hcEl0ZW1FdmVudHMiLCJpdGVtcyIsIml0ZW1DbGFzc05hbWUiLCJmb3JFYWNoIiwiaXRlbSIsIm9uSXRlbUNsaWNrIiwia2V5Iiwib25LZXlEb3duQXJyb3dVcCIsIm9uS2V5RG93bkFycm93RG93biIsIm9uS2V5RG93bkVudGVyIiwibGFzdFNlbGVjdGVkSXRlbUluZGV4IiwiaW5kZXhPZiIsImVsZW1lbnRJbmRleCIsImxhc3RTdWdnZXN0aW9uSXRlbUluZGV4IiwiY2hhbmdlU2VsZWN0ZWRJdGVtIiwiY2xpY2siLCJzZWxlY3RlZElucHV0Q2xhc3MiLCJzZXRRdWVyeVBhcmFtcyIsImNsZWFyIiwiYWpheFByb3ZpZGVyIiwicXVlcnlQYXJhbXMiLCJzZXQiLCJxdWVyeVBhcmFtTmFtZSIsIm5hbWUiLCJ2YWx1ZSIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJkaXNwYXRjaEN1c3RvbUV2ZW50IiwiRkVUQ0hJTkciLCJmZXRjaCIsInNldElucHV0cyIsImRhdGEiLCJ0ZXh0IiwiaW5wdXRWYWx1ZSIsIlNFVCIsImV4dHJhVmFsdWVzIiwiZm9jdXMiLCJvbkJsdXIiLCJvbkZvY3VzIiwidHJpbSIsInN1YnN0cmluZyIsImhpZGRlbklucHV0RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsIkNvbXBvbmVudCIsIkVWRU5UX0hJREVfT1ZFUkxBWSIsIkVWRU5UX1NIT1dfT1ZFUkxBWSIsImRlYm91bmNlIiwic3VnZ2VzdGlvbnNDb250YWluZXIiLCJjbGVhbkJ1dHRvbiIsImV2ZW50U2hvd092ZXJsYXkiLCJldmVudEhpZGVPdmVybGF5IiwicmVhZHlDYWxsYmFjayIsIm1hcEV2ZW50cyIsImRlYm91bmNlRGVsYXkiLCJzaG93Q2xlYW5CdXR0b24iLCJvbkNsZWFuQnV0dG9uQ2xpY2siLCJtYXBPdmVybGF5RXZlbnRzIiwiY2xlYW5GaWVsZHMiLCJ0b2dnbGVPdmVybGF5Iiwib3ZlcmxheUNvbmZpZyIsImJ1YmJsZXMiLCJkZXRhaWwiLCJpZCIsInpJbmRleCIsIk51bWJlciIsImdldENvbXB1dGVkU3R5bGUiLCJDdXN0b21FdmVudCIsImlzU2hvd24iLCJkaXNwYXRjaEV2ZW50IiwiYm9keSIsInRvZ2dsZSIsImJvZHlPdmVybGF5Q2xhc3NOYW1lIiwiZGF0YVRhcmdldCIsInRhcmdldCIsInZhbHVlRGF0YUF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiaGFzQXR0cmlidXRlIiwiTWFpbk92ZXJsYXkiLCJ0cmlnZ2VyUXVldWUiLCJzaG93Q2xhc3NOYW1lIiwiaXNPcGVuIiwib25TaG93T3ZlcmxheSIsIm1hcFNob3dPdmVybGF5RXZlbnQiLCJtYXBIaWRlT3ZlcmxheUV2ZW50Iiwib25IaWRlT3ZlcmxheSIsInNldFByb3BlcnRpZXMiLCJwdXNoIiwiaXNTaW5nbGVJblF1ZXVlIiwicG9wIiwiaGlkZU92ZXJsYXkiLCJzZXRQcmV2aW91c092ZXJsYXlTdGF0ZSIsImZpbHRlciIsInJlc2V0UHJvcGVydGllcyIsInN0eWxlIiwiU3RyaW5nIiwicmVtb3ZlUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9