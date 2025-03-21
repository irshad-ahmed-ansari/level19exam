"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["quick-order-row"],{

/***/ "./src/Pyz/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-row/quick-order-row.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/Pyz/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-row/quick-order-row.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickOrderRow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var QuickOrderPage_components_molecules_quick_order_row_quick_order_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! QuickOrderPage/components/molecules/quick-order-row/quick-order-row */ "./vendor/spryker-shop/quick-order-page/src/SprykerShop/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-row/quick-order-row.ts");


class QuickOrderRow extends QuickOrderPage_components_molecules_quick_order_row_quick_order_row__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.incrementButton = void 0;
    this.decrementButton = void 0;
    this.eventInput = new Event('input');
    this.formattedNumberInput = void 0;
  }
  init() {
    this.ajaxProvider = this.getElementsByClassName(this.jsName + "__provider")[0];
    this.autocompleteInput = this.getElementsByClassName(this.autocompleteFormClassName)[0];
    this.registerQuantityInput();
    this.registerAdditionalFormElements();
    this.mapEvents();
  }
  registerQuantityInput() {
    this.incrementButton = this.getElementsByClassName(this.jsName + "__button-increment")[0] || this.getElementsByClassName(this.jsName + "-partial__button-increment")[0];
    this.decrementButton = this.getElementsByClassName(this.jsName + "__button-decrement")[0] || this.getElementsByClassName(this.jsName + "-partial__button-decrement")[0];
    super.registerQuantityInput();
    this.formattedNumberInput = this.getElementsByClassName(this.jsName + "__formatted")[0] || this.getElementsByClassName(this.jsName + "-partial__formatted")[0];
  }
  mapAdditionalFormElementChange() {
    if (!this.additionalFormElements || !this.additionalFormElements.length) {
      return;
    }
    this.additionalFormElements.forEach(item => {
      item.addEventListener('change', () => this.reloadField(this.autocompleteInput.inputValue));
    });
  }
  mapQuantityInputChange() {
    this.incrementButton.addEventListener('click', event => this.incrementValue(event));
    this.decrementButton.addEventListener('click', event => this.decrementValue(event));
    super.mapQuantityInputChange();
  }
  incrementValue(event) {
    event.preventDefault();
    var value = this.formattedNumberInput.unformattedValue;
    var potentialValue = value + this.step;
    if (value < this.maxQuantity) {
      this.quantityInput.value = potentialValue.toString();
      this.triggerInputEvent(this.quantityInput);
      this.reloadField(this.autocompleteInput.inputValue);
    }
  }
  decrementValue(event) {
    event.preventDefault();
    var value = this.formattedNumberInput.unformattedValue;
    var potentialValue = value - this.step;
    if (potentialValue >= this.minQuantity) {
      this.quantityInput.value = potentialValue.toString();
      this.triggerInputEvent(this.quantityInput);
      this.reloadField(this.autocompleteInput.inputValue);
    }
  }
  reloadField(sku) {
    var _this = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (sku === void 0) {
        sku = '';
      }
      _this.setQueryParams(sku);
      yield _this.ajaxProvider.fetch();
      _this.registerQuantityInput();
      _this.mapQuantityInputChange();
      _this.registerAdditionalFormElements();
      _this.mapAdditionalFormElementChange();
      if (Boolean(sku)) {
        _this.quantityInput.focus();
      }
    })();
  }
  triggerInputEvent(input) {
    input.dispatchEvent(this.eventInput);
  }
  get autocompleteFormClassName() {
    return this.getAttribute('autocomplete-form-class-name');
  }
  get minQuantity() {
    return Number(this.formattedNumberInput.getAttribute('min'));
  }
  get maxQuantity() {
    var max = Number(this.formattedNumberInput.getAttribute('max'));
    return max > 0 && max > this.minQuantity ? max : Infinity;
  }
  get step() {
    var step = Number(this.quantityInput.getAttribute('step'));
    return step > 0 ? step : 1;
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/quick-order-page/src/SprykerShop/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-row/quick-order-row.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/quick-order-page/src/SprykerShop/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-row/quick-order-row.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickOrderRow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ShopUi/components/molecules/autocomplete-form/autocomplete-form */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");




class QuickOrderRow extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    /**
     * Performs the Ajax operations.
     */
    this.ajaxProvider = void 0;
    /**
     * The autocomplete text input element.
     */
    this.autocompleteInput = void 0;
    this.quantityHiddenInput = void 0;
    /**
     * The quantity number input element.
     */
    this.quantityInput = void 0;
    this.additionalFormElements = void 0;
    this.extraQueryParams = void 0;
  }
  readyCallback() {
    this.ajaxProvider = this.getElementsByClassName(this.jsName + "__provider")[0];
    this.autocompleteInput = this.getElementsByTagName('autocomplete-form')[0];
    this.registerQuantityInput();
    this.registerAdditionalFormElements();
    this.mapEvents();
  }
  registerQuantityInput() {
    this.quantityInput = this.getElementsByClassName(this.jsName + "__quantity-input")[0] || this.getElementsByClassName(this.jsName + "-partial__quantity-input")[0];
    this.quantityHiddenInput = this.getElementsByClassName(this.jsName + "__hidden-input")[0] || this.getElementsByClassName(this.jsName + "-partial__hidden-input")[0];
  }
  registerAdditionalFormElements() {
    this.additionalFormElements = Array.from(this.getElementsByClassName(this.jsName + "-partial__additional-form-element"));
  }
  mapEvents() {
    this.autocompleteInput.addEventListener(ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_2__.Events.SET, event => this.onAutocompleteSet(event));
    this.autocompleteInput.addEventListener(ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_2__.Events.UNSET, () => this.onAutocompleteUnset());
    this.mapQuantityInputChange();
    this.mapAdditionalFormElementChange();
  }
  mapQuantityInputChange() {
    this.quantityInput.addEventListener('change', () => this.reloadField(this.autocompleteInput.inputValue));
  }
  mapAdditionalFormElementChange() {
    if (!this.additionalFormElements || !this.additionalFormElements.length) {
      return;
    }
    this.additionalFormElements.forEach(item => {
      item.addEventListener('input', (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
        this.reloadField(this.autocompleteInput.inputValue);
      }, this.autocompleteInput.debounceDelay));
    });
  }
  onAutocompleteSet(event) {
    this.extraQueryParams = event.detail.extraValues;
    this.reloadField(this.autocompleteInput.inputValue);
  }
  onAutocompleteUnset() {
    this.reloadField();
  }
  setQueryParams(sku) {
    var quantityInputValue = this.quantityValue;
    this.ajaxProvider.queryParams.clear();
    this.ajaxProvider.queryParams.set('sku', sku);
    this.ajaxProvider.queryParams.set('index', this.index);
    if (Boolean(quantityInputValue)) {
      this.ajaxProvider.queryParams.set('quantity', "" + quantityInputValue);
    }
    if (this.additionalFormElements && this.additionalFormElements.length) {
      this.additionalFormElements.forEach(item => {
        if (!item.name || !item.value) {
          return;
        }
        this.ajaxProvider.queryParams.set(item.name, item.value);
      });
    }
    if (!this.extraQueryParams) {
      return;
    }
    this.extraQueryParams.forEach((value, key) => this.ajaxProvider.queryParams.set(key, value));
  }

  /**
   * Sends an ajax request to the server and renders the response on the page.
   * @param sku A product SKU used for reloading autocomplete field.
   */
  reloadField(sku) {
    var _this = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (sku === void 0) {
        sku = '';
      }
      _this.setQueryParams(sku);
      yield _this.ajaxProvider.fetch();
      _this.registerQuantityInput();
      _this.mapQuantityInputChange();
      _this.registerAdditionalFormElements();
      _this.mapAdditionalFormElementChange();
      if (!sku) {
        return;
      }
      var quantityValueLength = _this.quantityValue.length;
      _this.quantityInput.focus();
      _this.quantityInput.setSelectionRange(quantityValueLength, quantityValueLength);
    })();
  }

  /**
   * Gets the unformatted quantity value.
   */
  get quantityValue() {
    return this.quantityHiddenInput.value;
  }
  get index() {
    return this.getAttribute('index');
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   "default": () => (/* binding */ AutocompleteForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");

/* eslint-disable max-lines */


var Events = /*#__PURE__*/function (Events) {
  Events["FETCHING"] = "fetching";
  Events["FETCHED"] = "fetched";
  Events["CHANGE"] = "change";
  Events["SET"] = "set";
  Events["UNSET"] = "unset";
  return Events;
}({});

/**
 * @event fetching An event which is triggered when an ajax request is sent to the server.
 * @event fetched An event which is triggered when an ajax request is closed.
 * @event change An event which is triggered when the search field is changed.
 * @event set An event which is triggered when the element of an autocomplete suggestion is selected.
 * @event unset An event which is triggered when the element of an autocomplete suggestion is removed.
 */
class AutocompleteForm extends _models_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    /**
     * Performs the Ajax operations.
     */
    this.ajaxProvider = void 0;
    /**
     * The text input element.
     */
    this.textInput = void 0;
    /**
     * The value input element.
     */
    this.valueInput = void 0;
    /**
     * The contains of the suggestions.
     */
    this.suggestionsContainer = void 0;
    /**
     * Collection of the suggestions items.
     */
    this.suggestionItems = void 0;
    /**
     * The trigger of the form clearing.
     */
    this.cleanButton = void 0;
    /**
     * The last selected saggestion item.
     */
    this.lastSelectedItem = void 0;
    this.injectorsExtraQueryValueList = void 0;
    this.extraQueryValues = new Map();
  }
  readyCallback() {
    this.ajaxProvider = this.getElementsByClassName(this.jsName + "__provider")[0];
    this.textInput = this.getElementsByClassName(this.jsName + "__text-input")[0];
    this.valueInput = this.getElementsByClassName(this.jsName + "__value-input")[0];
    this.suggestionsContainer = this.getElementsByClassName(this.jsName + "__suggestions")[0];
    this.cleanButton = this.getElementsByClassName(this.jsName + "__clean-button")[0];
    if (this.injectorsExtraQueryValueClassName) {
      this.injectorsExtraQueryValueList = Array.from(document.getElementsByClassName(this.injectorsExtraQueryValueClassName));
    }
    if (this.autoInitEnabled) {
      this.autoLoadInit();
    }
    this.mapEvents();
  }
  mapEvents() {
    this.textInput.addEventListener('input', (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(() => this.onInput(), this.debounceDelay));
    this.textInput.addEventListener('blur', (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(() => this.onBlur(), this.debounceDelay));
    this.textInput.addEventListener('focus', () => this.onFocus());
    this.textInput.addEventListener('keydown', event => this.onKeyDown(event));
    if (this.cleanButton) {
      this.cleanButton.addEventListener('click', () => this.onCleanButtonClick());
    }
  }
  autoLoadInit() {
    this.textInput.focus();
    this.loadSuggestions();
  }
  onCleanButtonClick() {
    this.clean();
    this.dispatchCustomEvent(Events.UNSET);
  }
  onBlur() {
    this.hideSuggestions();
  }
  onFocus() {
    if (this.inputText.length < this.minLetters) {
      return;
    }
    this.showSuggestions();
  }
  onInput() {
    this.dispatchCustomEvent(Events.CHANGE);
    if (this.inputText.length >= this.minLetters) {
      this.loadSuggestions();
      return;
    }
    this.hideSuggestions();
    if (!!this.inputValue) {
      this.inputValue = '';
      this.dispatchCustomEvent(Events.UNSET);
    }
  }
  showSuggestions() {
    this.suggestionsContainer.classList.remove('is-hidden');
  }
  hideSuggestions() {
    this.suggestionsContainer.classList.add('is-hidden');
  }
  setQueryParams() {
    this.extraQueryValues.clear();
    this.ajaxProvider.queryParams.clear();
    this.ajaxProvider.queryParams.set(this.queryString, this.inputText);
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

  /**
   * Sends a request to the server and triggers the custom fetching and fetched events.
   */
  loadSuggestions() {
    var _this = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.dispatchCustomEvent(Events.FETCHING);
      _this.showSuggestions();
      _this.setQueryParams();
      yield _this.ajaxProvider.fetch();
      _this.suggestionItems = Array.from(_this.suggestionsContainer.getElementsByClassName(_this.suggestedItemClassName) ||
      // eslint-disable-next-line deprecation/deprecation
      _this.suggestionsContainer.querySelectorAll(_this.suggestedItemSelector));
      _this.lastSelectedItem = _this.suggestionItems[0];
      _this.mapSuggestionItemsEvents();
      _this.dispatchCustomEvent(Events.FETCHED);
    })();
  }
  mapSuggestionItemsEvents() {
    this.suggestionItems.forEach(item => {
      item.addEventListener('click', () => this.onItemClick(item));
      item.addEventListener('mouseover', () => this.onItemSelected(item));
    });
  }
  onItemClick(item) {
    this.inputText = item.textContent.trim();
    this.inputValue = item.getAttribute(this.valueAttributeName);
    this.dispatchCustomEvent(Events.SET, {
      text: this.inputText,
      value: this.inputValue,
      extraValues: this.extraQueryValues
    });
  }
  onItemSelected(item) {
    this.changeSelectedItem(item);
  }
  changeSelectedItem(item) {
    this.lastSelectedItem.classList.remove(this.selectedInputClass);
    item.classList.add(this.selectedInputClass);
    this.lastSelectedItem = item;
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
        this.onKeyDownEnter(event);
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
  onKeyDownEnter(event) {
    event.preventDefault();
    this.lastSelectedItem.click();
  }

  /**
   * Clears the input value and the typed text.
   */
  clean() {
    this.inputText = '';
    this.inputValue = '';
  }

  /**
   * Gets the css query selector of the selected suggestion items.
   */
  get selectedInputClass() {
    // eslint-disable-next-line deprecation/deprecation
    return this.suggestedItemClassName + "--selected" || 0;
  }

  /**
   * Gets the typed text from the form field.
   */
  get inputText() {
    return this.textInput.value.trim();
  }

  /**
   * Sets an input text.
   * @param value A typed text in the input field.
   */
  set inputText(value) {
    this.textInput.value = value;
  }

  /**
   * Gets the value attribute from the input form field.
   */
  get inputValue() {
    return this.valueInput.value;
  }

  /**
   * Sets the input value.
   */
  set inputValue(value) {
    this.valueInput.value = value;
  }

  /**
   * Gets the css query selector for the ajaxProvider configuration.
   */
  get queryString() {
    return this.getAttribute('query-string');
  }

  /**
   * Gets the value attribute name for the input element configuration.
   */
  get valueAttributeName() {
    return this.getAttribute('value-attribute-name');
  }

  /**
   * Gets the css query selector of the suggestion items.
   *
   * @deprecated Use suggestedItemClassName() instead.
   */
  get suggestedItemSelector() {
    return this.getAttribute('suggested-item-selector');
  }
  get suggestedItemClassName() {
    return this.getAttribute('suggested-item-class-name');
  }
  get injectorsExtraQueryValueClassName() {
    return this.getAttribute('injectors-extra-query-value-class-name');
  }

  /**
   * Gets a time delay for the blur and input events.
   */
  get debounceDelay() {
    return Number(this.getAttribute('debounce-delay'));
  }

  /**
   * Gets the number of letters which, upon entering in form field, is sufficient to show, hide or load the
   * suggestions.
   */
  get minLetters() {
    return Number(this.getAttribute('min-letters'));
  }

  /**
   * Gets if the auto load of suggestions is enabled.
   */
  get autoInitEnabled() {
    return this.hasAttribute('auto-init');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucXVpY2stb3JkZXItcm93LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0c7QUFLckYsTUFBTUMsYUFBYSxTQUFTRCwyR0FBaUIsQ0FBQztFQUFBRSxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQy9DQyxlQUFlO0lBQUEsS0FDZkMsZUFBZTtJQUFBLEtBQ2ZDLFVBQVUsR0FBVSxJQUFJQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQUEsS0FDdENDLG9CQUFvQjtFQUFBO0VBRXBCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQWlCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGVBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixJQUFJLENBQUNDLGlCQUFpQixHQUFxQixJQUFJLENBQUNGLHNCQUFzQixDQUFDLElBQUksQ0FBQ0cseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekcsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVCLElBQUksQ0FBQ0MsOEJBQThCLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVGLHFCQUFxQkEsQ0FBQSxFQUFTO0lBQ3BDLElBQUksQ0FBQ1gsZUFBZSxHQUNmLElBQUksQ0FBQ08sc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLHVCQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQy9ELElBQUksQ0FBQ0Qsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLCtCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUNoRjtJQUNELElBQUksQ0FBQ1AsZUFBZSxHQUNmLElBQUksQ0FBQ00sc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLHVCQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQy9ELElBQUksQ0FBQ0Qsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLCtCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUNoRjtJQUVELEtBQUssQ0FBQ0cscUJBQXFCLENBQUMsQ0FBQztJQUU3QixJQUFJLENBQUNQLG9CQUFvQixHQUNwQixJQUFJLENBQUNHLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxnQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQ3hELElBQUksQ0FBQ0Qsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLHdCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUN6RTtFQUNMO0VBRVVNLDhCQUE4QkEsQ0FBQSxFQUFTO0lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUNDLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDQSxzQkFBc0IsQ0FBQ0MsTUFBTSxFQUFFO01BQ3JFO0lBQ0o7SUFFQSxJQUFJLENBQUNELHNCQUFzQixDQUFDRSxPQUFPLENBQUVDLElBQUksSUFBSztNQUMxQ0EsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNYLGlCQUFpQixDQUFDWSxVQUFVLENBQUMsQ0FBQztJQUM5RixDQUFDLENBQUM7RUFDTjtFQUVVQyxzQkFBc0JBLENBQUEsRUFBUztJQUNyQyxJQUFJLENBQUN0QixlQUFlLENBQUNtQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdJLEtBQVksSUFBSyxJQUFJLENBQUNDLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDLENBQUM7SUFDNUYsSUFBSSxDQUFDdEIsZUFBZSxDQUFDa0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFHSSxLQUFZLElBQUssSUFBSSxDQUFDRSxjQUFjLENBQUNGLEtBQUssQ0FBQyxDQUFDO0lBRTVGLEtBQUssQ0FBQ0Qsc0JBQXNCLENBQUMsQ0FBQztFQUNsQztFQUVVRSxjQUFjQSxDQUFDRCxLQUFZLEVBQVE7SUFDekNBLEtBQUssQ0FBQ0csY0FBYyxDQUFDLENBQUM7SUFDdEIsSUFBTUMsS0FBYSxHQUFHLElBQUksQ0FBQ3ZCLG9CQUFvQixDQUFDd0IsZ0JBQWdCO0lBQ2hFLElBQU1DLGNBQWMsR0FBR0YsS0FBSyxHQUFHLElBQUksQ0FBQ0csSUFBSTtJQUN4QyxJQUFJSCxLQUFLLEdBQUcsSUFBSSxDQUFDSSxXQUFXLEVBQUU7TUFDMUIsSUFBSSxDQUFDQyxhQUFhLENBQUNMLEtBQUssR0FBR0UsY0FBYyxDQUFDSSxRQUFRLENBQUMsQ0FBQztNQUNwRCxJQUFJLENBQUNDLGlCQUFpQixDQUFDLElBQUksQ0FBQ0YsYUFBYSxDQUFDO01BQzFDLElBQUksQ0FBQ1osV0FBVyxDQUFDLElBQUksQ0FBQ1gsaUJBQWlCLENBQUNZLFVBQVUsQ0FBQztJQUN2RDtFQUNKO0VBRVVJLGNBQWNBLENBQUNGLEtBQVksRUFBUTtJQUN6Q0EsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUN0QixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDdkIsb0JBQW9CLENBQUN3QixnQkFBZ0I7SUFDeEQsSUFBTUMsY0FBYyxHQUFHRixLQUFLLEdBQUcsSUFBSSxDQUFDRyxJQUFJO0lBQ3hDLElBQUlELGNBQWMsSUFBSSxJQUFJLENBQUNNLFdBQVcsRUFBRTtNQUNwQyxJQUFJLENBQUNILGFBQWEsQ0FBQ0wsS0FBSyxHQUFHRSxjQUFjLENBQUNJLFFBQVEsQ0FBQyxDQUFDO01BQ3BELElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDRixhQUFhLENBQUM7TUFDMUMsSUFBSSxDQUFDWixXQUFXLENBQUMsSUFBSSxDQUFDWCxpQkFBaUIsQ0FBQ1ksVUFBVSxDQUFDO0lBQ3ZEO0VBQ0o7RUFFTUQsV0FBV0EsQ0FBQ2dCLEdBQUcsRUFBc0I7SUFBQSxJQUFBQyxLQUFBO0lBQUEsT0FBQUMsbUZBQUE7TUFBQSxJQUF6QkYsR0FBRztRQUFIQSxHQUFHLEdBQUcsRUFBRTtNQUFBO01BQ3RCQyxLQUFJLENBQUNFLGNBQWMsQ0FBQ0gsR0FBRyxDQUFDO01BRXhCLE1BQU1DLEtBQUksQ0FBQy9CLFlBQVksQ0FBQ2tDLEtBQUssQ0FBQyxDQUFDO01BRS9CSCxLQUFJLENBQUMxQixxQkFBcUIsQ0FBQyxDQUFDO01BQzVCMEIsS0FBSSxDQUFDZixzQkFBc0IsQ0FBQyxDQUFDO01BRTdCZSxLQUFJLENBQUN6Qiw4QkFBOEIsQ0FBQyxDQUFDO01BQ3JDeUIsS0FBSSxDQUFDdkIsOEJBQThCLENBQUMsQ0FBQztNQUVyQyxJQUFJMkIsT0FBTyxDQUFDTCxHQUFHLENBQUMsRUFBRTtRQUNkQyxLQUFJLENBQUNMLGFBQWEsQ0FBQ1UsS0FBSyxDQUFDLENBQUM7TUFDOUI7SUFBQztFQUNMO0VBRVVSLGlCQUFpQkEsQ0FBQ1MsS0FBdUIsRUFBUTtJQUN2REEsS0FBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDMUMsVUFBVSxDQUFDO0VBQ3hDO0VBRUEsSUFBY1EseUJBQXlCQSxDQUFBLEVBQVc7SUFDOUMsT0FBTyxJQUFJLENBQUNtQyxZQUFZLENBQUMsOEJBQThCLENBQUM7RUFDNUQ7RUFFQSxJQUFjVixXQUFXQSxDQUFBLEVBQVc7SUFDaEMsT0FBT1csTUFBTSxDQUFDLElBQUksQ0FBQzFDLG9CQUFvQixDQUFDeUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2hFO0VBRUEsSUFBY2QsV0FBV0EsQ0FBQSxFQUFXO0lBQ2hDLElBQU1nQixHQUFHLEdBQUdELE1BQU0sQ0FBQyxJQUFJLENBQUMxQyxvQkFBb0IsQ0FBQ3lDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxPQUFPRSxHQUFHLEdBQUcsQ0FBQyxJQUFJQSxHQUFHLEdBQUcsSUFBSSxDQUFDWixXQUFXLEdBQUdZLEdBQUcsR0FBR0MsUUFBUTtFQUM3RDtFQUVBLElBQWNsQixJQUFJQSxDQUFBLEVBQVc7SUFDekIsSUFBTUEsSUFBSSxHQUFHZ0IsTUFBTSxDQUFDLElBQUksQ0FBQ2QsYUFBYSxDQUFDYSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFNUQsT0FBT2YsSUFBSSxHQUFHLENBQUMsR0FBR0EsSUFBSSxHQUFHLENBQUM7RUFDOUI7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIZ0Q7QUFHeUI7QUFFL0I7QUFFM0IsTUFBTWpDLGFBQWEsU0FBU29ELCtEQUFTLENBQUM7RUFBQW5ELFlBQUE7SUFBQSxTQUFBQyxTQUFBO0lBQ2pEO0FBQ0o7QUFDQTtJQUZJLEtBR0FPLFlBQVk7SUFFWjtBQUNKO0FBQ0E7SUFGSSxLQUdBRyxpQkFBaUI7SUFBQSxLQUVQNEMsbUJBQW1CO0lBRTdCO0FBQ0o7QUFDQTtJQUZJLEtBR0FyQixhQUFhO0lBQUEsS0FDSGpCLHNCQUFzQjtJQUFBLEtBQ3RCdUMsZ0JBQWdCO0VBQUE7RUFFaEJDLGFBQWFBLENBQUEsRUFBUztJQUM1QixJQUFJLENBQUNqRCxZQUFZLEdBQWlCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGVBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixJQUFJLENBQUNDLGlCQUFpQixHQUFxQixJQUFJLENBQUMrQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RixJQUFJLENBQUM3QyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVCLElBQUksQ0FBQ0MsOEJBQThCLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVGLHFCQUFxQkEsQ0FBQSxFQUFTO0lBQ3BDLElBQUksQ0FBQ3FCLGFBQWEsR0FDYixJQUFJLENBQUN6QixzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0scUJBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFDN0QsSUFBSSxDQUFDRCxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sNkJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQzlFO0lBQ0QsSUFBSSxDQUFDNkMsbUJBQW1CLEdBQ25CLElBQUksQ0FBQzlDLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxtQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUMzRCxJQUFJLENBQUNELHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSwyQkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FDNUU7RUFDTDtFQUVVSSw4QkFBOEJBLENBQUEsRUFBUztJQUM3QyxJQUFJLENBQUNHLHNCQUFzQixHQUN2QjBDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ25ELHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxzQ0FBbUMsQ0FBQyxDQUM1RjtFQUNMO0VBRVVLLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLENBQUNKLGlCQUFpQixDQUFDVSxnQkFBZ0IsQ0FBQ2dDLG1HQUFrQixDQUFDUSxHQUFHLEVBQUdwQyxLQUFrQixJQUMvRSxJQUFJLENBQUNxQyxpQkFBaUIsQ0FBQ3JDLEtBQUssQ0FDaEMsQ0FBQztJQUNELElBQUksQ0FBQ2QsaUJBQWlCLENBQUNVLGdCQUFnQixDQUFDZ0MsbUdBQWtCLENBQUNVLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ25HLElBQUksQ0FBQ3hDLHNCQUFzQixDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDUiw4QkFBOEIsQ0FBQyxDQUFDO0VBQ3pDO0VBRVVRLHNCQUFzQkEsQ0FBQSxFQUFTO0lBQ3JDLElBQUksQ0FBQ1UsYUFBYSxDQUFDYixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNYLGlCQUFpQixDQUFDWSxVQUFVLENBQUMsQ0FBQztFQUM1RztFQUVVUCw4QkFBOEJBLENBQUEsRUFBUztJQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDQyxzQkFBc0IsSUFBSSxDQUFDLElBQUksQ0FBQ0Esc0JBQXNCLENBQUNDLE1BQU0sRUFBRTtNQUNyRTtJQUNKO0lBRUEsSUFBSSxDQUFDRCxzQkFBc0IsQ0FBQ0UsT0FBTyxDQUFFQyxJQUFJLElBQUs7TUFDMUNBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQ2pCLE9BQU8sRUFDUGlDLDhEQUFRLENBQUMsTUFBTTtRQUNYLElBQUksQ0FBQ2hDLFdBQVcsQ0FBQyxJQUFJLENBQUNYLGlCQUFpQixDQUFDWSxVQUFVLENBQUM7TUFDdkQsQ0FBQyxFQUFFLElBQUksQ0FBQ1osaUJBQWlCLENBQUNzRCxhQUFhLENBQzNDLENBQUM7SUFDTCxDQUFDLENBQUM7RUFDTjtFQUVVSCxpQkFBaUJBLENBQUNyQyxLQUFrQixFQUFRO0lBQ2xELElBQUksQ0FBQytCLGdCQUFnQixHQUFHL0IsS0FBSyxDQUFDeUMsTUFBTSxDQUFDQyxXQUFXO0lBQ2hELElBQUksQ0FBQzdDLFdBQVcsQ0FBQyxJQUFJLENBQUNYLGlCQUFpQixDQUFDWSxVQUFVLENBQUM7RUFDdkQ7RUFFVXlDLG1CQUFtQkEsQ0FBQSxFQUFTO0lBQ2xDLElBQUksQ0FBQzFDLFdBQVcsQ0FBQyxDQUFDO0VBQ3RCO0VBRVVtQixjQUFjQSxDQUFDSCxHQUFXLEVBQVE7SUFDeEMsSUFBTThCLGtCQUFrQixHQUFHLElBQUksQ0FBQ0MsYUFBYTtJQUU3QyxJQUFJLENBQUM3RCxZQUFZLENBQUM4RCxXQUFXLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLElBQUksQ0FBQy9ELFlBQVksQ0FBQzhELFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLEtBQUssRUFBRWxDLEdBQUcsQ0FBQztJQUM3QyxJQUFJLENBQUM5QixZQUFZLENBQUM4RCxXQUFXLENBQUNFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUM7SUFFdEQsSUFBSTlCLE9BQU8sQ0FBQ3lCLGtCQUFrQixDQUFDLEVBQUU7TUFDN0IsSUFBSSxDQUFDNUQsWUFBWSxDQUFDOEQsV0FBVyxDQUFDRSxHQUFHLENBQUMsVUFBVSxPQUFLSixrQkFBb0IsQ0FBQztJQUMxRTtJQUVBLElBQUksSUFBSSxDQUFDbkQsc0JBQXNCLElBQUksSUFBSSxDQUFDQSxzQkFBc0IsQ0FBQ0MsTUFBTSxFQUFFO01BQ25FLElBQUksQ0FBQ0Qsc0JBQXNCLENBQUNFLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO1FBQzFDLElBQUksQ0FBQ0EsSUFBSSxDQUFDc0QsSUFBSSxJQUFJLENBQUN0RCxJQUFJLENBQUNTLEtBQUssRUFBRTtVQUMzQjtRQUNKO1FBRUEsSUFBSSxDQUFDckIsWUFBWSxDQUFDOEQsV0FBVyxDQUFDRSxHQUFHLENBQUNwRCxJQUFJLENBQUNzRCxJQUFJLEVBQUV0RCxJQUFJLENBQUNTLEtBQUssQ0FBQztNQUM1RCxDQUFDLENBQUM7SUFDTjtJQUVBLElBQUksQ0FBQyxJQUFJLENBQUMyQixnQkFBZ0IsRUFBRTtNQUN4QjtJQUNKO0lBRUEsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ3JDLE9BQU8sQ0FBQyxDQUFDVSxLQUFLLEVBQUU4QyxHQUFHLEtBQUssSUFBSSxDQUFDbkUsWUFBWSxDQUFDOEQsV0FBVyxDQUFDRSxHQUFHLENBQUNHLEdBQUcsRUFBRTlDLEtBQUssQ0FBQyxDQUFDO0VBQ2hHOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0VBQ1VQLFdBQVdBLENBQUNnQixHQUFHLEVBQXNCO0lBQUEsSUFBQUMsS0FBQTtJQUFBLE9BQUFDLG1GQUFBO01BQUEsSUFBekJGLEdBQUc7UUFBSEEsR0FBRyxHQUFHLEVBQUU7TUFBQTtNQUN0QkMsS0FBSSxDQUFDRSxjQUFjLENBQUNILEdBQUcsQ0FBQztNQUV4QixNQUFNQyxLQUFJLENBQUMvQixZQUFZLENBQUNrQyxLQUFLLENBQUMsQ0FBQztNQUUvQkgsS0FBSSxDQUFDMUIscUJBQXFCLENBQUMsQ0FBQztNQUM1QjBCLEtBQUksQ0FBQ2Ysc0JBQXNCLENBQUMsQ0FBQztNQUU3QmUsS0FBSSxDQUFDekIsOEJBQThCLENBQUMsQ0FBQztNQUNyQ3lCLEtBQUksQ0FBQ3ZCLDhCQUE4QixDQUFDLENBQUM7TUFFckMsSUFBSSxDQUFDc0IsR0FBRyxFQUFFO1FBQ047TUFDSjtNQUVBLElBQU1zQyxtQkFBbUIsR0FBR3JDLEtBQUksQ0FBQzhCLGFBQWEsQ0FBQ25ELE1BQU07TUFFckRxQixLQUFJLENBQUNMLGFBQWEsQ0FBQ1UsS0FBSyxDQUFDLENBQUM7TUFDMUJMLEtBQUksQ0FBQ0wsYUFBYSxDQUFDMkMsaUJBQWlCLENBQUNELG1CQUFtQixFQUFFQSxtQkFBbUIsQ0FBQztJQUFDO0VBQ25GOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlQLGFBQWFBLENBQUEsRUFBVztJQUN4QixPQUFPLElBQUksQ0FBQ2QsbUJBQW1CLENBQUMxQixLQUFLO0VBQ3pDO0VBRUEsSUFBYzRDLEtBQUtBLENBQUEsRUFBVztJQUMxQixPQUFPLElBQUksQ0FBQzFCLFlBQVksQ0FBQyxPQUFPLENBQUM7RUFDckM7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKQTtBQUNrRDtBQUVSO0FBRW5DLElBQUtLLE1BQU0sMEJBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQUEsT0FBTkEsTUFBTTtBQUFBOztBQVFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLE1BQU0wQixnQkFBZ0IsU0FBUzNCLHlEQUFTLENBQUM7RUFBQW5ELFlBQUE7SUFBQSxTQUFBQyxTQUFBO0lBQ3BEO0FBQ0o7QUFDQTtJQUZJLEtBR0FPLFlBQVk7SUFFWjtBQUNKO0FBQ0E7SUFGSSxLQUdBdUUsU0FBUztJQUVUO0FBQ0o7QUFDQTtJQUZJLEtBR0FDLFVBQVU7SUFFVjtBQUNKO0FBQ0E7SUFGSSxLQUdBQyxvQkFBb0I7SUFFcEI7QUFDSjtBQUNBO0lBRkksS0FHQUMsZUFBZTtJQUVmO0FBQ0o7QUFDQTtJQUZJLEtBR0FDLFdBQVc7SUFFWDtBQUNKO0FBQ0E7SUFGSSxLQUdBQyxnQkFBZ0I7SUFBQSxLQUNOQyw0QkFBNEI7SUFBQSxLQUM1QkMsZ0JBQWdCLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUM7RUFBQTtFQUU1QjlCLGFBQWFBLENBQUEsRUFBUztJQUM1QixJQUFJLENBQUNqRCxZQUFZLEdBQWlCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGVBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixJQUFJLENBQUNxRSxTQUFTLEdBQXFCLElBQUksQ0FBQ3RFLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxpQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLElBQUksQ0FBQ3NFLFVBQVUsR0FBcUIsSUFBSSxDQUFDdkUsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGtCQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsSUFBSSxDQUFDdUUsb0JBQW9CLEdBQWdCLElBQUksQ0FBQ3hFLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxrQkFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLElBQUksQ0FBQ3lFLFdBQVcsR0FBc0IsSUFBSSxDQUFDMUUsc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLG1CQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBHLElBQUksSUFBSSxDQUFDOEUsaUNBQWlDLEVBQUU7TUFDeEMsSUFBSSxDQUFDSCw0QkFBNEIsR0FDN0IxQixLQUFLLENBQUNDLElBQUksQ0FBQzZCLFFBQVEsQ0FBQ2hGLHNCQUFzQixDQUFDLElBQUksQ0FBQytFLGlDQUFpQyxDQUFDLENBQ3JGO0lBQ0w7SUFFQSxJQUFJLElBQUksQ0FBQ0UsZUFBZSxFQUFFO01BQ3RCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDdkI7SUFFQSxJQUFJLENBQUM1RSxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUVVQSxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDZ0UsU0FBUyxDQUFDMUQsZ0JBQWdCLENBQzNCLE9BQU8sRUFDUGlDLDhEQUFRLENBQUMsTUFBTSxJQUFJLENBQUNzQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQzNCLGFBQWEsQ0FDckQsQ0FBQztJQUNELElBQUksQ0FBQ2MsU0FBUyxDQUFDMUQsZ0JBQWdCLENBQzNCLE1BQU0sRUFDTmlDLDhEQUFRLENBQUMsTUFBTSxJQUFJLENBQUN1QyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQzVCLGFBQWEsQ0FDcEQsQ0FBQztJQUNELElBQUksQ0FBQ2MsU0FBUyxDQUFDMUQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDeUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUNmLFNBQVMsQ0FBQzFELGdCQUFnQixDQUFDLFNBQVMsRUFBR0ksS0FBSyxJQUFLLElBQUksQ0FBQ3NFLFNBQVMsQ0FBQ3RFLEtBQUssQ0FBQyxDQUFDO0lBQzVFLElBQUksSUFBSSxDQUFDMEQsV0FBVyxFQUFFO01BQ2xCLElBQUksQ0FBQ0EsV0FBVyxDQUFDOUQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDMkUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQy9FO0VBQ0o7RUFFVUwsWUFBWUEsQ0FBQSxFQUFTO0lBQzNCLElBQUksQ0FBQ1osU0FBUyxDQUFDbkMsS0FBSyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDcUQsZUFBZSxDQUFDLENBQUM7RUFDMUI7RUFFVUQsa0JBQWtCQSxDQUFBLEVBQVM7SUFDakMsSUFBSSxDQUFDRSxLQUFLLENBQUMsQ0FBQztJQUNaLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMvQyxNQUFNLENBQUNXLEtBQUssQ0FBQztFQUMxQztFQUVVOEIsTUFBTUEsQ0FBQSxFQUFTO0lBQ3JCLElBQUksQ0FBQ08sZUFBZSxDQUFDLENBQUM7RUFDMUI7RUFFVU4sT0FBT0EsQ0FBQSxFQUFTO0lBQ3RCLElBQUksSUFBSSxDQUFDTyxTQUFTLENBQUNuRixNQUFNLEdBQUcsSUFBSSxDQUFDb0YsVUFBVSxFQUFFO01BQ3pDO0lBQ0o7SUFDQSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0VBQzFCO0VBRVVYLE9BQU9BLENBQUEsRUFBUztJQUN0QixJQUFJLENBQUNPLG1CQUFtQixDQUFDL0MsTUFBTSxDQUFDb0QsTUFBTSxDQUFDO0lBQ3ZDLElBQUksSUFBSSxDQUFDSCxTQUFTLENBQUNuRixNQUFNLElBQUksSUFBSSxDQUFDb0YsVUFBVSxFQUFFO01BQzFDLElBQUksQ0FBQ0wsZUFBZSxDQUFDLENBQUM7TUFFdEI7SUFDSjtJQUNBLElBQUksQ0FBQ0csZUFBZSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDN0UsVUFBVSxFQUFFO01BQ25CLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEVBQUU7TUFDcEIsSUFBSSxDQUFDNEUsbUJBQW1CLENBQUMvQyxNQUFNLENBQUNXLEtBQUssQ0FBQztJQUMxQztFQUNKO0VBRVV3QyxlQUFlQSxDQUFBLEVBQVM7SUFDOUIsSUFBSSxDQUFDdEIsb0JBQW9CLENBQUN3QixTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDM0Q7RUFFVU4sZUFBZUEsQ0FBQSxFQUFTO0lBQzlCLElBQUksQ0FBQ25CLG9CQUFvQixDQUFDd0IsU0FBUyxDQUFDRSxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ3hEO0VBRVVsRSxjQUFjQSxDQUFBLEVBQVM7SUFDN0IsSUFBSSxDQUFDNkMsZ0JBQWdCLENBQUNmLEtBQUssQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQy9ELFlBQVksQ0FBQzhELFdBQVcsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDL0QsWUFBWSxDQUFDOEQsV0FBVyxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDb0MsV0FBVyxFQUFFLElBQUksQ0FBQ1AsU0FBUyxDQUFDO0lBRW5FLElBQUksQ0FBQyxJQUFJLENBQUNoQiw0QkFBNEIsSUFBSSxDQUFDLElBQUksQ0FBQ0EsNEJBQTRCLENBQUNuRSxNQUFNLEVBQUU7TUFDakY7SUFDSjtJQUVBLElBQUksQ0FBQ21FLDRCQUE0QixDQUFDbEUsT0FBTyxDQUFFQyxJQUFJLElBQUs7TUFDaEQsSUFBSSxDQUFDQSxJQUFJLENBQUNzRCxJQUFJLElBQUksQ0FBQ3RELElBQUksQ0FBQ1MsS0FBSyxFQUFFO1FBQzNCO01BQ0o7TUFFQSxJQUFJLENBQUNyQixZQUFZLENBQUM4RCxXQUFXLENBQUNFLEdBQUcsQ0FBQ3BELElBQUksQ0FBQ3NELElBQUksRUFBRXRELElBQUksQ0FBQ1MsS0FBSyxDQUFDO01BQ3hELElBQUksQ0FBQ3lELGdCQUFnQixDQUFDZCxHQUFHLENBQUNwRCxJQUFJLENBQUNzRCxJQUFJLEVBQUV0RCxJQUFJLENBQUNTLEtBQUssQ0FBQztJQUNwRCxDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7RUFDVW9FLGVBQWVBLENBQUEsRUFBa0I7SUFBQSxJQUFBMUQsS0FBQTtJQUFBLE9BQUFDLG1GQUFBO01BQ25DRCxLQUFJLENBQUM0RCxtQkFBbUIsQ0FBQy9DLE1BQU0sQ0FBQ3lELFFBQVEsQ0FBQztNQUN6Q3RFLEtBQUksQ0FBQ2dFLGVBQWUsQ0FBQyxDQUFDO01BQ3RCaEUsS0FBSSxDQUFDRSxjQUFjLENBQUMsQ0FBQztNQUVyQixNQUFNRixLQUFJLENBQUMvQixZQUFZLENBQUNrQyxLQUFLLENBQUMsQ0FBQztNQUMvQkgsS0FBSSxDQUFDMkMsZUFBZSxHQUFrQnZCLEtBQUssQ0FBQ0MsSUFBSSxDQUM1Q3JCLEtBQUksQ0FBQzBDLG9CQUFvQixDQUFDeEUsc0JBQXNCLENBQUM4QixLQUFJLENBQUN1RSxzQkFBc0IsQ0FBQztNQUN6RTtNQUNBdkUsS0FBSSxDQUFDMEMsb0JBQW9CLENBQUM4QixnQkFBZ0IsQ0FBQ3hFLEtBQUksQ0FBQ3lFLHFCQUFxQixDQUM3RSxDQUFDO01BQ0R6RSxLQUFJLENBQUM2QyxnQkFBZ0IsR0FBRzdDLEtBQUksQ0FBQzJDLGVBQWUsQ0FBQyxDQUFDLENBQUM7TUFDL0MzQyxLQUFJLENBQUMwRSx3QkFBd0IsQ0FBQyxDQUFDO01BQy9CMUUsS0FBSSxDQUFDNEQsbUJBQW1CLENBQUMvQyxNQUFNLENBQUM4RCxPQUFPLENBQUM7SUFBQztFQUM3QztFQUVVRCx3QkFBd0JBLENBQUEsRUFBUztJQUN2QyxJQUFJLENBQUMvQixlQUFlLENBQUMvRCxPQUFPLENBQUVDLElBQWlCLElBQUs7TUFDaERBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDOEYsV0FBVyxDQUFDL0YsSUFBSSxDQUFDLENBQUM7TUFDNURBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU0sSUFBSSxDQUFDK0YsY0FBYyxDQUFDaEcsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDO0VBQ047RUFFVStGLFdBQVdBLENBQUMvRixJQUFpQixFQUFRO0lBQzNDLElBQUksQ0FBQ2lGLFNBQVMsR0FBR2pGLElBQUksQ0FBQ2lHLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDL0YsVUFBVSxHQUFHSCxJQUFJLENBQUMyQixZQUFZLENBQUMsSUFBSSxDQUFDd0Usa0JBQWtCLENBQUM7SUFDNUQsSUFBSSxDQUFDcEIsbUJBQW1CLENBQUMvQyxNQUFNLENBQUNTLEdBQUcsRUFBRTtNQUNqQzJELElBQUksRUFBRSxJQUFJLENBQUNuQixTQUFTO01BQ3BCeEUsS0FBSyxFQUFFLElBQUksQ0FBQ04sVUFBVTtNQUN0QjRDLFdBQVcsRUFBRSxJQUFJLENBQUNtQjtJQUN0QixDQUFDLENBQUM7RUFDTjtFQUVVOEIsY0FBY0EsQ0FBQ2hHLElBQWlCLEVBQVE7SUFDOUMsSUFBSSxDQUFDcUcsa0JBQWtCLENBQUNyRyxJQUFJLENBQUM7RUFDakM7RUFFVXFHLGtCQUFrQkEsQ0FBQ3JHLElBQWlCLEVBQVE7SUFDbEQsSUFBSSxDQUFDZ0UsZ0JBQWdCLENBQUNxQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNnQixrQkFBa0IsQ0FBQztJQUMvRHRHLElBQUksQ0FBQ3FGLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ2Usa0JBQWtCLENBQUM7SUFDM0MsSUFBSSxDQUFDdEMsZ0JBQWdCLEdBQUdoRSxJQUFJO0VBQ2hDO0VBRVUyRSxTQUFTQSxDQUFDdEUsS0FBb0IsRUFBUTtJQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDeUQsZUFBZSxJQUFJLElBQUksQ0FBQ21CLFNBQVMsQ0FBQ25GLE1BQU0sR0FBRyxJQUFJLENBQUNvRixVQUFVLEVBQUU7TUFDbEU7SUFDSjtJQUNBLFFBQVE3RSxLQUFLLENBQUNrRCxHQUFHO01BQ2IsS0FBSyxTQUFTO1FBQ1YsSUFBSSxDQUFDZ0QsZ0JBQWdCLENBQUMsQ0FBQztRQUN2QjtNQUNKLEtBQUssV0FBVztRQUNaLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQztRQUN6QjtNQUNKLEtBQUssT0FBTztRQUNSLElBQUksQ0FBQ0MsY0FBYyxDQUFDcEcsS0FBSyxDQUFDO1FBQzFCO0lBQ1I7RUFDSjtFQUVVa0csZ0JBQWdCQSxDQUFBLEVBQVM7SUFDL0IsSUFBTUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDNUMsZUFBZSxDQUFDNkMsT0FBTyxDQUFDLElBQUksQ0FBQzNDLGdCQUFnQixDQUFDO0lBQ2pGLElBQU00QyxZQUFZLEdBQUdGLHFCQUFxQixHQUFHLENBQUM7SUFDOUMsSUFBTUcsdUJBQXVCLEdBQUcsSUFBSSxDQUFDL0MsZUFBZSxDQUFDaEUsTUFBTSxHQUFHLENBQUM7SUFDL0QsSUFBTUUsSUFBSSxHQUFHLElBQUksQ0FBQzhELGVBQWUsQ0FBQzhDLFlBQVksR0FBRyxDQUFDLEdBQUdDLHVCQUF1QixHQUFHRCxZQUFZLENBQUM7SUFDNUYsSUFBSSxDQUFDUCxrQkFBa0IsQ0FBQ3JHLElBQUksQ0FBQztFQUNqQztFQUVVd0csa0JBQWtCQSxDQUFBLEVBQVM7SUFDakMsSUFBTUUscUJBQXFCLEdBQUcsSUFBSSxDQUFDNUMsZUFBZSxDQUFDNkMsT0FBTyxDQUFDLElBQUksQ0FBQzNDLGdCQUFnQixDQUFDO0lBQ2pGLElBQU00QyxZQUFZLEdBQUdGLHFCQUFxQixHQUFHLENBQUM7SUFDOUMsSUFBTUcsdUJBQXVCLEdBQUcsSUFBSSxDQUFDL0MsZUFBZSxDQUFDaEUsTUFBTSxHQUFHLENBQUM7SUFDL0QsSUFBTUUsSUFBSSxHQUFHLElBQUksQ0FBQzhELGVBQWUsQ0FBQzhDLFlBQVksR0FBR0MsdUJBQXVCLEdBQUcsQ0FBQyxHQUFHRCxZQUFZLENBQUM7SUFDNUYsSUFBSSxDQUFDUCxrQkFBa0IsQ0FBQ3JHLElBQUksQ0FBQztFQUNqQztFQUVVeUcsY0FBY0EsQ0FBQ3BHLEtBQW9CLEVBQVE7SUFDakRBLEtBQUssQ0FBQ0csY0FBYyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDd0QsZ0JBQWdCLENBQUM4QyxLQUFLLENBQUMsQ0FBQztFQUNqQzs7RUFFQTtBQUNKO0FBQ0E7RUFDSWhDLEtBQUtBLENBQUEsRUFBUztJQUNWLElBQUksQ0FBQ0csU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDOUUsVUFBVSxHQUFHLEVBQUU7RUFDeEI7O0VBRUE7QUFDSjtBQUNBO0VBQ0ksSUFBSW1HLGtCQUFrQkEsQ0FBQSxFQUFXO0lBQzdCO0lBQ0EsT0FBVSxJQUFJLENBQUNaLHNCQUFzQixtQkFBZ0IsQ0FBbUQ7RUFDNUc7O0VBRUE7QUFDSjtBQUNBO0VBQ0ksSUFBSVQsU0FBU0EsQ0FBQSxFQUFXO0lBQ3BCLE9BQU8sSUFBSSxDQUFDdEIsU0FBUyxDQUFDbEQsS0FBSyxDQUFDeUYsSUFBSSxDQUFDLENBQUM7RUFDdEM7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFDSSxJQUFJakIsU0FBU0EsQ0FBQ3hFLEtBQWEsRUFBRTtJQUN6QixJQUFJLENBQUNrRCxTQUFTLENBQUNsRCxLQUFLLEdBQUdBLEtBQUs7RUFDaEM7O0VBRUE7QUFDSjtBQUNBO0VBQ0ksSUFBSU4sVUFBVUEsQ0FBQSxFQUFXO0lBQ3JCLE9BQU8sSUFBSSxDQUFDeUQsVUFBVSxDQUFDbkQsS0FBSztFQUNoQzs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJTixVQUFVQSxDQUFDTSxLQUFhLEVBQUU7SUFDMUIsSUFBSSxDQUFDbUQsVUFBVSxDQUFDbkQsS0FBSyxHQUFHQSxLQUFLO0VBQ2pDOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUkrRSxXQUFXQSxDQUFBLEVBQVc7SUFDdEIsT0FBTyxJQUFJLENBQUM3RCxZQUFZLENBQUMsY0FBYyxDQUFDO0VBQzVDOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUl3RSxrQkFBa0JBLENBQUEsRUFBVztJQUM3QixPQUFPLElBQUksQ0FBQ3hFLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztFQUNwRDs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksSUFBSWlFLHFCQUFxQkEsQ0FBQSxFQUFXO0lBQ2hDLE9BQU8sSUFBSSxDQUFDakUsWUFBWSxDQUFDLHlCQUF5QixDQUFDO0VBQ3ZEO0VBRUEsSUFBYytELHNCQUFzQkEsQ0FBQSxFQUFXO0lBQzNDLE9BQU8sSUFBSSxDQUFDL0QsWUFBWSxDQUFDLDJCQUEyQixDQUFDO0VBQ3pEO0VBRUEsSUFBY3lDLGlDQUFpQ0EsQ0FBQSxFQUFXO0lBQ3RELE9BQU8sSUFBSSxDQUFDekMsWUFBWSxDQUFDLHdDQUF3QyxDQUFDO0VBQ3RFOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlrQixhQUFhQSxDQUFBLEVBQVc7SUFDeEIsT0FBT2pCLE1BQU0sQ0FBQyxJQUFJLENBQUNELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3REOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0VBQ0ksSUFBSXVELFVBQVVBLENBQUEsRUFBVztJQUNyQixPQUFPdEQsTUFBTSxDQUFDLElBQUksQ0FBQ0QsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0VBQ25EOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUkyQyxlQUFlQSxDQUFBLEVBQVk7SUFDM0IsT0FBTyxJQUFJLENBQUMwQyxZQUFZLENBQUMsV0FBVyxDQUFDO0VBQ3pDO0FBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQ2pWOEI7O0FBRTlCO0FBQ0EsYUFBYSxnREFBSTs7QUFFakIsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMWTtBQUNNO0FBQ1U7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrREFBTSxHQUFHLGtEQUFNOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFTO0FBQ2YsTUFBTSw4REFBYztBQUNwQjs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjBCOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQWU7QUFDckM7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCeEI7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUTs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrREFBTSxHQUFHLGtEQUFNOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCWTs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0RBQVU7O0FBRXJCLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUnBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTTtBQUNWO0FBQ1U7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsV0FBVztBQUM5QixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBUTtBQUNqQixNQUFNLHdEQUFRO0FBQ2Q7QUFDQTtBQUNBLGlDQUFpQyx3REFBUTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbURBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RCxtREFBRztBQUM1RDs7QUFFQTtBQUNBLGVBQWUsbURBQUc7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5THhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCYztBQUNHOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0REFBWSxXQUFXLDBEQUFVO0FBQ3RDOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdEQUFJO0FBQ2I7O0FBRUEsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm1CO0FBQ0Q7QUFDQTs7QUFFckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVE7QUFDZDtBQUNBO0FBQ0EsTUFBTSx3REFBUTtBQUNkO0FBQ0EsWUFBWSx3REFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvUXVpY2tPcmRlclBhZ2UvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9xdWljay1vcmRlci1yb3cvcXVpY2stb3JkZXItcm93LnRzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3AvcXVpY2stb3JkZXItcGFnZS9zcmMvU3ByeWtlclNob3AvWXZlcy9RdWlja09yZGVyUGFnZS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3F1aWNrLW9yZGVyLXJvdy9xdWljay1vcmRlci1yb3cudHMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2F1dG9jb21wbGV0ZS1mb3JtL2F1dG9jb21wbGV0ZS1mb3JtLnRzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fdHJpbW1lZEVuZEluZGV4LmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzU3ltYm9sLmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbm93LmpzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9OdW1iZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1aWNrT3JkZXJSb3dDb3JlIGZyb20gJ1F1aWNrT3JkZXJQYWdlL2NvbXBvbmVudHMvbW9sZWN1bGVzL3F1aWNrLW9yZGVyLXJvdy9xdWljay1vcmRlci1yb3cnO1xuaW1wb3J0IEF1dG9jb21wbGV0ZUZvcm0gZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2F1dG9jb21wbGV0ZS1mb3JtL2F1dG9jb21wbGV0ZS1mb3JtJztcbmltcG9ydCBBamF4UHJvdmlkZXIgZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2FqYXgtcHJvdmlkZXIvYWpheC1wcm92aWRlcic7XG5pbXBvcnQgRm9ybWF0dGVkTnVtYmVySW5wdXQgZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Zvcm1hdHRlZC1udW1iZXItaW5wdXQvZm9ybWF0dGVkLW51bWJlci1pbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrT3JkZXJSb3cgZXh0ZW5kcyBRdWlja09yZGVyUm93Q29yZSB7XG4gICAgcHJvdGVjdGVkIGluY3JlbWVudEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGRlY3JlbWVudEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGV2ZW50SW5wdXQ6IEV2ZW50ID0gbmV3IEV2ZW50KCdpbnB1dCcpO1xuICAgIHByb3RlY3RlZCBmb3JtYXR0ZWROdW1iZXJJbnB1dDogRm9ybWF0dGVkTnVtYmVySW5wdXQ7XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIgPSA8QWpheFByb3ZpZGVyPnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3Byb3ZpZGVyYClbMF07XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQgPSA8QXV0b2NvbXBsZXRlRm9ybT50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5hdXRvY29tcGxldGVGb3JtQ2xhc3NOYW1lKVswXTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyUXVhbnRpdHlJbnB1dCgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkaXRpb25hbEZvcm1FbGVtZW50cygpO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3RlclF1YW50aXR5SW5wdXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50QnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PihcbiAgICAgICAgICAgICh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19idXR0b24taW5jcmVtZW50YClbMF0gfHxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9LXBhcnRpYWxfX2J1dHRvbi1pbmNyZW1lbnRgKVswXSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kZWNyZW1lbnRCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxuICAgICAgICAgICAgKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2J1dHRvbi1kZWNyZW1lbnRgKVswXSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX0tcGFydGlhbF9fYnV0dG9uLWRlY3JlbWVudGApWzBdKVxuICAgICAgICApO1xuXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyUXVhbnRpdHlJbnB1dCgpO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVkTnVtYmVySW5wdXQgPSA8Rm9ybWF0dGVkTnVtYmVySW5wdXQ+KFxuICAgICAgICAgICAgKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2Zvcm1hdHRlZGApWzBdIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfS1wYXJ0aWFsX19mb3JtYXR0ZWRgKVswXSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwQWRkaXRpb25hbEZvcm1FbGVtZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuYWRkaXRpb25hbEZvcm1FbGVtZW50cyB8fCAhdGhpcy5hZGRpdGlvbmFsRm9ybUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsRm9ybUVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5yZWxvYWRGaWVsZCh0aGlzLmF1dG9jb21wbGV0ZUlucHV0LmlucHV0VmFsdWUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFF1YW50aXR5SW5wdXRDaGFuZ2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5pbmNyZW1lbnRWYWx1ZShldmVudCkpO1xuICAgICAgICB0aGlzLmRlY3JlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMuZGVjcmVtZW50VmFsdWUoZXZlbnQpKTtcblxuICAgICAgICBzdXBlci5tYXBRdWFudGl0eUlucHV0Q2hhbmdlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluY3JlbWVudFZhbHVlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gdGhpcy5mb3JtYXR0ZWROdW1iZXJJbnB1dC51bmZvcm1hdHRlZFZhbHVlO1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxWYWx1ZSA9IHZhbHVlICsgdGhpcy5zdGVwO1xuICAgICAgICBpZiAodmFsdWUgPCB0aGlzLm1heFF1YW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQudmFsdWUgPSBwb3RlbnRpYWxWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VySW5wdXRFdmVudCh0aGlzLnF1YW50aXR5SW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWRGaWVsZCh0aGlzLmF1dG9jb21wbGV0ZUlucHV0LmlucHV0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlY3JlbWVudFZhbHVlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZm9ybWF0dGVkTnVtYmVySW5wdXQudW5mb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsVmFsdWUgPSB2YWx1ZSAtIHRoaXMuc3RlcDtcbiAgICAgICAgaWYgKHBvdGVudGlhbFZhbHVlID49IHRoaXMubWluUXVhbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHlJbnB1dC52YWx1ZSA9IHBvdGVudGlhbFZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJJbnB1dEV2ZW50KHRoaXMucXVhbnRpdHlJbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZEZpZWxkKHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuaW5wdXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZWxvYWRGaWVsZChza3UgPSAnJyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHNrdSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5hamF4UHJvdmlkZXIuZmV0Y2goKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyUXVhbnRpdHlJbnB1dCgpO1xuICAgICAgICB0aGlzLm1hcFF1YW50aXR5SW5wdXRDaGFuZ2UoKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkaXRpb25hbEZvcm1FbGVtZW50cygpO1xuICAgICAgICB0aGlzLm1hcEFkZGl0aW9uYWxGb3JtRWxlbWVudENoYW5nZSgpO1xuXG4gICAgICAgIGlmIChCb29sZWFuKHNrdSkpIHtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHlJbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyaWdnZXJJbnB1dEV2ZW50KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQodGhpcy5ldmVudElucHV0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGF1dG9jb21wbGV0ZUZvcm1DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUtZm9ybS1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBtaW5RdWFudGl0eSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZm9ybWF0dGVkTnVtYmVySW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBtYXhRdWFudGl0eSgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBtYXggPSBOdW1iZXIodGhpcy5mb3JtYXR0ZWROdW1iZXJJbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpKTtcblxuICAgICAgICByZXR1cm4gbWF4ID4gMCAmJiBtYXggPiB0aGlzLm1pblF1YW50aXR5ID8gbWF4IDogSW5maW5pdHk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5xdWFudGl0eUlucHV0LmdldEF0dHJpYnV0ZSgnc3RlcCcpKTtcblxuICAgICAgICByZXR1cm4gc3RlcCA+IDAgPyBzdGVwIDogMTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcbmltcG9ydCBBdXRvY29tcGxldGVGb3JtLCB7XG4gICAgRXZlbnRzIGFzIEF1dG9jb21wbGV0ZUV2ZW50cyxcbn0gZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2F1dG9jb21wbGV0ZS1mb3JtL2F1dG9jb21wbGV0ZS1mb3JtJztcbmltcG9ydCBBamF4UHJvdmlkZXIgZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2FqYXgtcHJvdmlkZXIvYWpheC1wcm92aWRlcic7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLWVzL2RlYm91bmNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tPcmRlclJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgdGhlIEFqYXggb3BlcmF0aW9ucy5cbiAgICAgKi9cbiAgICBhamF4UHJvdmlkZXI6IEFqYXhQcm92aWRlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhdXRvY29tcGxldGUgdGV4dCBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGF1dG9jb21wbGV0ZUlucHV0OiBBdXRvY29tcGxldGVGb3JtO1xuXG4gICAgcHJvdGVjdGVkIHF1YW50aXR5SGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVhbnRpdHkgbnVtYmVyIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgcXVhbnRpdHlJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgYWRkaXRpb25hbEZvcm1FbGVtZW50czogSFRNTFNlbGVjdEVsZW1lbnRbXSB8IEhUTUxJbnB1dEVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgZXh0cmFRdWVyeVBhcmFtczogTWFwPHN0cmluZywgc3RyaW5nPjtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFqYXhQcm92aWRlciA9IDxBamF4UHJvdmlkZXI+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcHJvdmlkZXJgKVswXTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dCA9IDxBdXRvY29tcGxldGVGb3JtPnRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2F1dG9jb21wbGV0ZS1mb3JtJylbMF07XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlclF1YW50aXR5SW5wdXQoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFkZGl0aW9uYWxGb3JtRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJRdWFudGl0eUlucHV0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD4oXG4gICAgICAgICAgICAodGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcXVhbnRpdHktaW5wdXRgKVswXSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX0tcGFydGlhbF9fcXVhbnRpdHktaW5wdXRgKVswXSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5xdWFudGl0eUhpZGRlbklucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxuICAgICAgICAgICAgKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2hpZGRlbi1pbnB1dGApWzBdIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfS1wYXJ0aWFsX19oaWRkZW4taW5wdXRgKVswXSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJBZGRpdGlvbmFsRm9ybUVsZW1lbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxGb3JtRWxlbWVudHMgPSA8SFRNTFNlbGVjdEVsZW1lbnRbXSB8IEhUTUxJbnB1dEVsZW1lbnRbXT4oXG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX0tcGFydGlhbF9fYWRkaXRpb25hbC1mb3JtLWVsZW1lbnRgKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoQXV0b2NvbXBsZXRlRXZlbnRzLlNFVCwgKGV2ZW50OiBDdXN0b21FdmVudCkgPT5cbiAgICAgICAgICAgIHRoaXMub25BdXRvY29tcGxldGVTZXQoZXZlbnQpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoQXV0b2NvbXBsZXRlRXZlbnRzLlVOU0VULCAoKSA9PiB0aGlzLm9uQXV0b2NvbXBsZXRlVW5zZXQoKSk7XG4gICAgICAgIHRoaXMubWFwUXVhbnRpdHlJbnB1dENoYW5nZSgpO1xuICAgICAgICB0aGlzLm1hcEFkZGl0aW9uYWxGb3JtRWxlbWVudENoYW5nZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBRdWFudGl0eUlucHV0Q2hhbmdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5yZWxvYWRGaWVsZCh0aGlzLmF1dG9jb21wbGV0ZUlucHV0LmlucHV0VmFsdWUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwQWRkaXRpb25hbEZvcm1FbGVtZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuYWRkaXRpb25hbEZvcm1FbGVtZW50cyB8fCAhdGhpcy5hZGRpdGlvbmFsRm9ybUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsRm9ybUVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRGaWVsZCh0aGlzLmF1dG9jb21wbGV0ZUlucHV0LmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuZGVib3VuY2VEZWxheSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BdXRvY29tcGxldGVTZXQoZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXh0cmFRdWVyeVBhcmFtcyA9IGV2ZW50LmRldGFpbC5leHRyYVZhbHVlcztcbiAgICAgICAgdGhpcy5yZWxvYWRGaWVsZCh0aGlzLmF1dG9jb21wbGV0ZUlucHV0LmlucHV0VmFsdWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkF1dG9jb21wbGV0ZVVuc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbG9hZEZpZWxkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFF1ZXJ5UGFyYW1zKHNrdTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXRWYWx1ZSA9IHRoaXMucXVhbnRpdHlWYWx1ZTtcblxuICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQoJ3NrdScsIHNrdSk7XG4gICAgICAgIHRoaXMuYWpheFByb3ZpZGVyLnF1ZXJ5UGFyYW1zLnNldCgnaW5kZXgnLCB0aGlzLmluZGV4KTtcblxuICAgICAgICBpZiAoQm9vbGVhbihxdWFudGl0eUlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQoJ3F1YW50aXR5JywgYCR7cXVhbnRpdHlJbnB1dFZhbHVlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbEZvcm1FbGVtZW50cyAmJiB0aGlzLmFkZGl0aW9uYWxGb3JtRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGb3JtRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbS5uYW1lIHx8ICFpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQoaXRlbS5uYW1lLCBpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmV4dHJhUXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXh0cmFRdWVyeVBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQoa2V5LCB2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGFuIGFqYXggcmVxdWVzdCB0byB0aGUgc2VydmVyIGFuZCByZW5kZXJzIHRoZSByZXNwb25zZSBvbiB0aGUgcGFnZS5cbiAgICAgKiBAcGFyYW0gc2t1IEEgcHJvZHVjdCBTS1UgdXNlZCBmb3IgcmVsb2FkaW5nIGF1dG9jb21wbGV0ZSBmaWVsZC5cbiAgICAgKi9cbiAgICBhc3luYyByZWxvYWRGaWVsZChza3UgPSAnJyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHNrdSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5hamF4UHJvdmlkZXIuZmV0Y2goKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyUXVhbnRpdHlJbnB1dCgpO1xuICAgICAgICB0aGlzLm1hcFF1YW50aXR5SW5wdXRDaGFuZ2UoKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkaXRpb25hbEZvcm1FbGVtZW50cygpO1xuICAgICAgICB0aGlzLm1hcEFkZGl0aW9uYWxGb3JtRWxlbWVudENoYW5nZSgpO1xuXG4gICAgICAgIGlmICghc2t1KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWFudGl0eVZhbHVlTGVuZ3RoID0gdGhpcy5xdWFudGl0eVZhbHVlLmxlbmd0aDtcblxuICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5xdWFudGl0eUlucHV0LnNldFNlbGVjdGlvblJhbmdlKHF1YW50aXR5VmFsdWVMZW5ndGgsIHF1YW50aXR5VmFsdWVMZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHVuZm9ybWF0dGVkIHF1YW50aXR5IHZhbHVlLlxuICAgICAqL1xuICAgIGdldCBxdWFudGl0eVZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXR5SGlkZGVuSW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBpbmRleCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL21vZGVscy9jb21wb25lbnQnO1xuaW1wb3J0IEFqYXhQcm92aWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9hamF4LXByb3ZpZGVyL2FqYXgtcHJvdmlkZXInO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC1lcy9kZWJvdW5jZSc7XG5cbmV4cG9ydCBlbnVtIEV2ZW50cyB7XG4gICAgRkVUQ0hJTkcgPSAnZmV0Y2hpbmcnLFxuICAgIEZFVENIRUQgPSAnZmV0Y2hlZCcsXG4gICAgQ0hBTkdFID0gJ2NoYW5nZScsXG4gICAgU0VUID0gJ3NldCcsXG4gICAgVU5TRVQgPSAndW5zZXQnLFxufVxuXG4vKipcbiAqIEBldmVudCBmZXRjaGluZyBBbiBldmVudCB3aGljaCBpcyB0cmlnZ2VyZWQgd2hlbiBhbiBhamF4IHJlcXVlc3QgaXMgc2VudCB0byB0aGUgc2VydmVyLlxuICogQGV2ZW50IGZldGNoZWQgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gYW4gYWpheCByZXF1ZXN0IGlzIGNsb3NlZC5cbiAqIEBldmVudCBjaGFuZ2UgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHNlYXJjaCBmaWVsZCBpcyBjaGFuZ2VkLlxuICogQGV2ZW50IHNldCBBbiBldmVudCB3aGljaCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZWxlbWVudCBvZiBhbiBhdXRvY29tcGxldGUgc3VnZ2VzdGlvbiBpcyBzZWxlY3RlZC5cbiAqIEBldmVudCB1bnNldCBBbiBldmVudCB3aGljaCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZWxlbWVudCBvZiBhbiBhdXRvY29tcGxldGUgc3VnZ2VzdGlvbiBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvY29tcGxldGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyB0aGUgQWpheCBvcGVyYXRpb25zLlxuICAgICAqL1xuICAgIGFqYXhQcm92aWRlcjogQWpheFByb3ZpZGVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICB0ZXh0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICB2YWx1ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRhaW5zIG9mIHRoZSBzdWdnZXN0aW9ucy5cbiAgICAgKi9cbiAgICBzdWdnZXN0aW9uc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHRoZSBzdWdnZXN0aW9ucyBpdGVtcy5cbiAgICAgKi9cbiAgICBzdWdnZXN0aW9uSXRlbXM6IEhUTUxFbGVtZW50W107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHJpZ2dlciBvZiB0aGUgZm9ybSBjbGVhcmluZy5cbiAgICAgKi9cbiAgICBjbGVhbkJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFzdCBzZWxlY3RlZCBzYWdnZXN0aW9uIGl0ZW0uXG4gICAgICovXG4gICAgbGFzdFNlbGVjdGVkSXRlbTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3Q6IEhUTUxTZWxlY3RFbGVtZW50W10gfCBIVE1MSW5wdXRFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIGV4dHJhUXVlcnlWYWx1ZXMgPSBuZXcgTWFwKCk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIgPSA8QWpheFByb3ZpZGVyPnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3Byb3ZpZGVyYClbMF07XG4gICAgICAgIHRoaXMudGV4dElucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdGV4dC1pbnB1dGApWzBdO1xuICAgICAgICB0aGlzLnZhbHVlSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X192YWx1ZS1pbnB1dGApWzBdO1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zQ29udGFpbmVyID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3N1Z2dlc3Rpb25zYClbMF07XG4gICAgICAgIHRoaXMuY2xlYW5CdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fY2xlYW4tYnV0dG9uYClbMF07XG5cbiAgICAgICAgaWYgKHRoaXMuaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QgPSA8SFRNTFNlbGVjdEVsZW1lbnRbXSB8IEhUTUxJbnB1dEVsZW1lbnRbXT4oXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvSW5pdEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0xvYWRJbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnaW5wdXQnLFxuICAgICAgICAgICAgZGVib3VuY2UoKCkgPT4gdGhpcy5vbklucHV0KCksIHRoaXMuZGVib3VuY2VEZWxheSksXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgICBkZWJvdW5jZSgoKSA9PiB0aGlzLm9uQmx1cigpLCB0aGlzLmRlYm91bmNlRGVsYXkpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHRoaXMub25Gb2N1cygpKTtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy5vbktleURvd24oZXZlbnQpKTtcbiAgICAgICAgaWYgKHRoaXMuY2xlYW5CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ2xlYW5CdXR0b25DbGljaygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhdXRvTG9hZEluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dElucHV0LmZvY3VzKCk7XG4gICAgICAgIHRoaXMubG9hZFN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xlYW5CdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRXZlbnRzLlVOU0VUKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25CbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkZvY3VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dFRleHQubGVuZ3RoIDwgdGhpcy5taW5MZXR0ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5DSEFOR0UpO1xuICAgICAgICBpZiAodGhpcy5pbnB1dFRleHQubGVuZ3RoID49IHRoaXMubWluTGV0dGVycykge1xuICAgICAgICAgICAgdGhpcy5sb2FkU3VnZ2VzdGlvbnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgIGlmICghIXRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRXZlbnRzLlVOU0VUKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93U3VnZ2VzdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhpZGVTdWdnZXN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0UXVlcnlQYXJhbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXh0cmFRdWVyeVZhbHVlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQodGhpcy5xdWVyeVN0cmluZywgdGhpcy5pbnB1dFRleHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0IHx8ICF0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLm5hbWUgfHwgIWl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWpheFByb3ZpZGVyLnF1ZXJ5UGFyYW1zLnNldChpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5leHRyYVF1ZXJ5VmFsdWVzLnNldChpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciBhbmQgdHJpZ2dlcnMgdGhlIGN1c3RvbSBmZXRjaGluZyBhbmQgZmV0Y2hlZCBldmVudHMuXG4gICAgICovXG4gICAgYXN5bmMgbG9hZFN1Z2dlc3Rpb25zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRXZlbnRzLkZFVENISU5HKTtcbiAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zZXRRdWVyeVBhcmFtcygpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuYWpheFByb3ZpZGVyLmZldGNoKCk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbkl0ZW1zID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnN1Z2dlc3RlZEl0ZW1DbGFzc05hbWUpIHx8XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc3VnZ2VzdGVkSXRlbVNlbGVjdG9yKSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRJdGVtID0gdGhpcy5zdWdnZXN0aW9uSXRlbXNbMF07XG4gICAgICAgIHRoaXMubWFwU3VnZ2VzdGlvbkl0ZW1zRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFdmVudHMuRkVUQ0hFRCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFN1Z2dlc3Rpb25JdGVtc0V2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uSXRlbXMuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9uSXRlbUNsaWNrKGl0ZW0pKTtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdGhpcy5vbkl0ZW1TZWxlY3RlZChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkl0ZW1DbGljayhpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9IGl0ZW0udGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSh0aGlzLnZhbHVlQXR0cmlidXRlTmFtZSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFdmVudHMuU0VULCB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmlucHV0VGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmlucHV0VmFsdWUsXG4gICAgICAgICAgICBleHRyYVZhbHVlczogdGhpcy5leHRyYVF1ZXJ5VmFsdWVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JdGVtU2VsZWN0ZWQoaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNoYW5nZVNlbGVjdGVkSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNlbGVjdGVkSW5wdXRDbGFzcyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkSW5wdXRDbGFzcyk7XG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc3VnZ2VzdGlvbkl0ZW1zICYmIHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCA8IHRoaXMubWluTGV0dGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5RG93bkFycm93VXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25BcnJvd0Rvd24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5RG93bkVudGVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd25BcnJvd1VwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsYXN0U2VsZWN0ZWRJdGVtSW5kZXggPSB0aGlzLnN1Z2dlc3Rpb25JdGVtcy5pbmRleE9mKHRoaXMubGFzdFNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IGxhc3RTZWxlY3RlZEl0ZW1JbmRleCAtIDE7XG4gICAgICAgIGNvbnN0IGxhc3RTdWdnZXN0aW9uSXRlbUluZGV4ID0gdGhpcy5zdWdnZXN0aW9uSXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zW2VsZW1lbnRJbmRleCA8IDAgPyBsYXN0U3VnZ2VzdGlvbkl0ZW1JbmRleCA6IGVsZW1lbnRJbmRleF07XG4gICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd25BcnJvd0Rvd24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxhc3RTZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zLmluZGV4T2YodGhpcy5sYXN0U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgY29uc3QgZWxlbWVudEluZGV4ID0gbGFzdFNlbGVjdGVkSXRlbUluZGV4ICsgMTtcbiAgICAgICAgY29uc3QgbGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXggPSB0aGlzLnN1Z2dlc3Rpb25JdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zdWdnZXN0aW9uSXRlbXNbZWxlbWVudEluZGV4ID4gbGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXggPyAwIDogZWxlbWVudEluZGV4XTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bkVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbS5jbGljaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgaW5wdXQgdmFsdWUgYW5kIHRoZSB0eXBlZCB0ZXh0LlxuICAgICAqL1xuICAgIGNsZWFuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjc3MgcXVlcnkgc2VsZWN0b3Igb2YgdGhlIHNlbGVjdGVkIHN1Z2dlc3Rpb24gaXRlbXMuXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSW5wdXRDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuc3VnZ2VzdGVkSXRlbUNsYXNzTmFtZX0tLXNlbGVjdGVkYCB8fCBgJHt0aGlzLnN1Z2dlc3RlZEl0ZW1TZWxlY3Rvcn0tLXNlbGVjdGVkYC5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdHlwZWQgdGV4dCBmcm9tIHRoZSBmb3JtIGZpZWxkLlxuICAgICAqL1xuICAgIGdldCBpbnB1dFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGlucHV0IHRleHQuXG4gICAgICogQHBhcmFtIHZhbHVlIEEgdHlwZWQgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQuXG4gICAgICovXG4gICAgc2V0IGlucHV0VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGV4dElucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgYXR0cmlidXRlIGZyb20gdGhlIGlucHV0IGZvcm0gZmllbGQuXG4gICAgICovXG4gICAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVJbnB1dC52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICBzZXQgaW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsdWVJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNzcyBxdWVyeSBzZWxlY3RvciBmb3IgdGhlIGFqYXhQcm92aWRlciBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIGdldCBxdWVyeVN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3F1ZXJ5LXN0cmluZycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIGF0dHJpYnV0ZSBuYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudCBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIGdldCB2YWx1ZUF0dHJpYnV0ZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZS1hdHRyaWJ1dGUtbmFtZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNzcyBxdWVyeSBzZWxlY3RvciBvZiB0aGUgc3VnZ2VzdGlvbiBpdGVtcy5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBzdWdnZXN0ZWRJdGVtQ2xhc3NOYW1lKCkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBnZXQgc3VnZ2VzdGVkSXRlbVNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3VnZ2VzdGVkLWl0ZW0tc2VsZWN0b3InKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHN1Z2dlc3RlZEl0ZW1DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzdWdnZXN0ZWQtaXRlbS1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBpbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpbmplY3RvcnMtZXh0cmEtcXVlcnktdmFsdWUtY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB0aW1lIGRlbGF5IGZvciB0aGUgYmx1ciBhbmQgaW5wdXQgZXZlbnRzLlxuICAgICAqL1xuICAgIGdldCBkZWJvdW5jZURlbGF5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ2RlYm91bmNlLWRlbGF5JykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBsZXR0ZXJzIHdoaWNoLCB1cG9uIGVudGVyaW5nIGluIGZvcm0gZmllbGQsIGlzIHN1ZmZpY2llbnQgdG8gc2hvdywgaGlkZSBvciBsb2FkIHRoZVxuICAgICAqIHN1Z2dlc3Rpb25zLlxuICAgICAqL1xuICAgIGdldCBtaW5MZXR0ZXJzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ21pbi1sZXR0ZXJzJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaWYgdGhlIGF1dG8gbG9hZCBvZiBzdWdnZXN0aW9ucyBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIGdldCBhdXRvSW5pdEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnYXV0by1pbml0Jyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcbiIsImltcG9ydCB0cmltbWVkRW5kSW5kZXggZnJvbSAnLi9fdHJpbW1lZEVuZEluZGV4LmpzJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVHJpbTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJpbW1lZEVuZEluZGV4O1xuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IG5vdyBmcm9tICcuL25vdy5qcyc7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnLi90b051bWJlci5qcyc7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3ltYm9sO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdztcbiIsImltcG9ydCBiYXNlVHJpbSBmcm9tICcuL19iYXNlVHJpbS5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b051bWJlcjtcbiJdLCJuYW1lcyI6WyJRdWlja09yZGVyUm93Q29yZSIsIlF1aWNrT3JkZXJSb3ciLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImluY3JlbWVudEJ1dHRvbiIsImRlY3JlbWVudEJ1dHRvbiIsImV2ZW50SW5wdXQiLCJFdmVudCIsImZvcm1hdHRlZE51bWJlcklucHV0IiwiaW5pdCIsImFqYXhQcm92aWRlciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJhdXRvY29tcGxldGVJbnB1dCIsImF1dG9jb21wbGV0ZUZvcm1DbGFzc05hbWUiLCJyZWdpc3RlclF1YW50aXR5SW5wdXQiLCJyZWdpc3RlckFkZGl0aW9uYWxGb3JtRWxlbWVudHMiLCJtYXBFdmVudHMiLCJtYXBBZGRpdGlvbmFsRm9ybUVsZW1lbnRDaGFuZ2UiLCJhZGRpdGlvbmFsRm9ybUVsZW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwicmVsb2FkRmllbGQiLCJpbnB1dFZhbHVlIiwibWFwUXVhbnRpdHlJbnB1dENoYW5nZSIsImV2ZW50IiwiaW5jcmVtZW50VmFsdWUiLCJkZWNyZW1lbnRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ1bmZvcm1hdHRlZFZhbHVlIiwicG90ZW50aWFsVmFsdWUiLCJzdGVwIiwibWF4UXVhbnRpdHkiLCJxdWFudGl0eUlucHV0IiwidG9TdHJpbmciLCJ0cmlnZ2VySW5wdXRFdmVudCIsIm1pblF1YW50aXR5Iiwic2t1IiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsInNldFF1ZXJ5UGFyYW1zIiwiZmV0Y2giLCJCb29sZWFuIiwiZm9jdXMiLCJpbnB1dCIsImRpc3BhdGNoRXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJOdW1iZXIiLCJtYXgiLCJJbmZpbml0eSIsIkNvbXBvbmVudCIsIkV2ZW50cyIsIkF1dG9jb21wbGV0ZUV2ZW50cyIsImRlYm91bmNlIiwicXVhbnRpdHlIaWRkZW5JbnB1dCIsImV4dHJhUXVlcnlQYXJhbXMiLCJyZWFkeUNhbGxiYWNrIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBcnJheSIsImZyb20iLCJTRVQiLCJvbkF1dG9jb21wbGV0ZVNldCIsIlVOU0VUIiwib25BdXRvY29tcGxldGVVbnNldCIsImRlYm91bmNlRGVsYXkiLCJkZXRhaWwiLCJleHRyYVZhbHVlcyIsInF1YW50aXR5SW5wdXRWYWx1ZSIsInF1YW50aXR5VmFsdWUiLCJxdWVyeVBhcmFtcyIsImNsZWFyIiwic2V0IiwiaW5kZXgiLCJuYW1lIiwia2V5IiwicXVhbnRpdHlWYWx1ZUxlbmd0aCIsInNldFNlbGVjdGlvblJhbmdlIiwiQXV0b2NvbXBsZXRlRm9ybSIsInRleHRJbnB1dCIsInZhbHVlSW5wdXQiLCJzdWdnZXN0aW9uc0NvbnRhaW5lciIsInN1Z2dlc3Rpb25JdGVtcyIsImNsZWFuQnV0dG9uIiwibGFzdFNlbGVjdGVkSXRlbSIsImluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QiLCJleHRyYVF1ZXJ5VmFsdWVzIiwiTWFwIiwiaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJhdXRvSW5pdEVuYWJsZWQiLCJhdXRvTG9hZEluaXQiLCJvbklucHV0Iiwib25CbHVyIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIm9uQ2xlYW5CdXR0b25DbGljayIsImxvYWRTdWdnZXN0aW9ucyIsImNsZWFuIiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsImhpZGVTdWdnZXN0aW9ucyIsImlucHV0VGV4dCIsIm1pbkxldHRlcnMiLCJzaG93U3VnZ2VzdGlvbnMiLCJDSEFOR0UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJxdWVyeVN0cmluZyIsIkZFVENISU5HIiwic3VnZ2VzdGVkSXRlbUNsYXNzTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdWdnZXN0ZWRJdGVtU2VsZWN0b3IiLCJtYXBTdWdnZXN0aW9uSXRlbXNFdmVudHMiLCJGRVRDSEVEIiwib25JdGVtQ2xpY2siLCJvbkl0ZW1TZWxlY3RlZCIsInRleHRDb250ZW50IiwidHJpbSIsInZhbHVlQXR0cmlidXRlTmFtZSIsInRleHQiLCJjaGFuZ2VTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZElucHV0Q2xhc3MiLCJvbktleURvd25BcnJvd1VwIiwib25LZXlEb3duQXJyb3dEb3duIiwib25LZXlEb3duRW50ZXIiLCJsYXN0U2VsZWN0ZWRJdGVtSW5kZXgiLCJpbmRleE9mIiwiZWxlbWVudEluZGV4IiwibGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXgiLCJjbGljayIsInN1YnN0ciIsImhhc0F0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=