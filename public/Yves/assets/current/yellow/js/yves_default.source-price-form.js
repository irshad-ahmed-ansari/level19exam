"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["source-price-form"],{

/***/ "./src/Pyz/Yves/QuoteRequestAgentPage/Theme/default/components/molecules/source-price-form/source-price-form.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/QuoteRequestAgentPage/Theme/default/components/molecules/source-price-form/source-price-form.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SourcePriceForm)
/* harmony export */ });
/* harmony import */ var QuoteRequestAgentPage_components_molecules_source_price_form_source_price_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! QuoteRequestAgentPage/components/molecules/source-price-form/source-price-form */ "./vendor/spryker-shop/quote-request-agent-page/src/SprykerShop/Yves/QuoteRequestAgentPage/Theme/default/components/molecules/source-price-form/source-price-form.ts");

class SourcePriceForm extends QuoteRequestAgentPage_components_molecules_source_price_form_source_price_form__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.price = void 0;
    this.originPrice = void 0;
    this.hiddenClass = 'is-hidden';
  }
  init() {
    this.price = this.getElementsByClassName(this.jsName + "__price")[0];
    this.originPrice = this.getElementsByClassName(this.jsName + "__origin-price")[0];
    super.init();
  }
  togglePriceVisibility() {
    this.price.classList.toggle(this.hiddenClass);
    this.originPrice.classList.toggle(this.hiddenClass);
  }
  onInputType(event) {
    super.onInputType(event);
    if (this.checkboxChecked) {
      this.togglePriceVisibility();
    }
  }
  onCheckboxChange(event) {
    super.onCheckboxChange(event);
    this.togglePriceVisibility();
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/quote-request-agent-page/src/SprykerShop/Yves/QuoteRequestAgentPage/Theme/default/components/molecules/source-price-form/source-price-form.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/quote-request-agent-page/src/SprykerShop/Yves/QuoteRequestAgentPage/Theme/default/components/molecules/source-price-form/source-price-form.ts ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SourcePriceForm)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class SourcePriceForm extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.input = void 0;
    this.inputContainer = void 0;
    this.checkbox = void 0;
  }
  readyCallback() {}
  init() {
    this.input = this.getElementsByClassName(this.jsName + "__hidden-input")[0];
    this.inputContainer = this.getElementsByClassName(this.jsName + "__input-container")[0];
    this.checkbox = this.getElementsByClassName(this.jsName + "__checkbox-container")[0];
    this.setSourcePrice();
    this.mapEvents();
  }
  mapEvents() {
    this.input.addEventListener('input', () => this.onInputType());
    this.checkbox.addEventListener('change', () => this.onCheckboxChange());
  }
  setSourcePrice() {
    if (!this.sourcePrice.length) {
      return;
    }
    this.inputValue = String(this.sourcePrice);
    this.inputContainer.classList.remove('is-hidden');
  }
  onInputType() {
    this.checkboxChecked = this.inputValueLength === 0;
    if (this.checkboxChecked) {
      this.inputContainer.classList.add('is-hidden');
    }
  }
  onCheckboxChange() {
    if (this.checkboxChecked) {
      this.inputValue = '';
      this.inputContainer.classList.add('is-hidden');
      return;
    }
    this.setSourcePrice();
    this.inputContainer.classList.remove('is-hidden');
    this.input.focus();
  }

  /**
   * Gets an input value length.
   */
  get inputValueLength() {
    return this.input.value.length;
  }

  /**
   * Gets the source price value of the product.
   */
  get sourcePrice() {
    return this.getAttribute('price');
  }

  /**
   * Sets an input value.
   * @param value A typed text in the input field.
   */
  set inputValue(value) {
    this.input.value = value;
  }

  /**
   * Gets if the checkbox is checked.
   */
  get checkboxChecked() {
    return this.checkbox.checked;
  }

  /**
   * Sets an checkbox checked attribute.
   * @param value A boolean value of the checkecd attribute.
   */
  set checkboxChecked(value) {
    this.checkbox.checked = value;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEM7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFDSSxJQUFJcEIsZUFBZUEsQ0FBQ2tCLEtBQWMsRUFBRTtJQUNoQyxJQUFJLENBQUNiLFFBQVEsQ0FBQ2UsT0FBTyxHQUFHRixLQUFLO0VBQ2pDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvUXVvdGVSZXF1ZXN0QWdlbnRQYWdlL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvc291cmNlLXByaWNlLWZvcm0vc291cmNlLXByaWNlLWZvcm0udHMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9xdW90ZS1yZXF1ZXN0LWFnZW50LXBhZ2Uvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvUXVvdGVSZXF1ZXN0QWdlbnRQYWdlL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvc291cmNlLXByaWNlLWZvcm0vc291cmNlLXByaWNlLWZvcm0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdXJjZVByaWNlRm9ybVBhcmVudENsYXNzIGZyb20gJ1F1b3RlUmVxdWVzdEFnZW50UGFnZS9jb21wb25lbnRzL21vbGVjdWxlcy9zb3VyY2UtcHJpY2UtZm9ybS9zb3VyY2UtcHJpY2UtZm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZVByaWNlRm9ybSBleHRlbmRzIFNvdXJjZVByaWNlRm9ybVBhcmVudENsYXNzIHtcbiAgICBwcm90ZWN0ZWQgcHJpY2U6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBvcmlnaW5QcmljZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGhpZGRlbkNsYXNzOiBzdHJpbmcgPSAnaXMtaGlkZGVuJztcblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByaWNlID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3ByaWNlYClbMF07XG4gICAgICAgIHRoaXMub3JpZ2luUHJpY2UgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fb3JpZ2luLXByaWNlYClbMF07XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdG9nZ2xlUHJpY2VWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByaWNlLmNsYXNzTGlzdC50b2dnbGUodGhpcy5oaWRkZW5DbGFzcyk7XG4gICAgICAgIHRoaXMub3JpZ2luUHJpY2UuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmhpZGRlbkNsYXNzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JbnB1dFR5cGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uSW5wdXRUeXBlKGV2ZW50KTtcblxuICAgICAgICBpZiAodGhpcy5jaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUHJpY2VWaXNpYmlsaXR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DaGVja2JveENoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25DaGVja2JveENoYW5nZShldmVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlUHJpY2VWaXNpYmlsaXR5KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZVByaWNlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByb3RlY3RlZCBpbnB1dENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGNoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19oaWRkZW4taW5wdXRgKVswXTtcbiAgICAgICAgdGhpcy5pbnB1dENvbnRhaW5lciA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbnB1dC1jb250YWluZXJgKVswXTtcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2NoZWNrYm94LWNvbnRhaW5lcmApWzBdO1xuICAgICAgICB0aGlzLnNldFNvdXJjZVByaWNlKCk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMub25JbnB1dFR5cGUoKSk7XG4gICAgICAgIHRoaXMuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5vbkNoZWNrYm94Q2hhbmdlKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRTb3VyY2VQcmljZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnNvdXJjZVByaWNlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlUHJpY2UpO1xuICAgICAgICB0aGlzLmlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbklucHV0VHlwZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2JveENoZWNrZWQgPSB0aGlzLmlucHV0VmFsdWVMZW5ndGggPT09IDA7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNoZWNrYm94Q2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTb3VyY2VQcmljZSgpO1xuICAgICAgICB0aGlzLmlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBpbnB1dCB2YWx1ZSBsZW5ndGguXG4gICAgICovXG4gICAgZ2V0IGlucHV0VmFsdWVMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNvdXJjZSBwcmljZSB2YWx1ZSBvZiB0aGUgcHJvZHVjdC5cbiAgICAgKi9cbiAgICBnZXQgc291cmNlUHJpY2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwcmljZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gaW5wdXQgdmFsdWUuXG4gICAgICogQHBhcmFtIHZhbHVlIEEgdHlwZWQgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQuXG4gICAgICovXG4gICAgc2V0IGlucHV0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpZiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICAgKi9cbiAgICBnZXQgY2hlY2tib3hDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2JveC5jaGVja2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gY2hlY2tib3ggY2hlY2tlZCBhdHRyaWJ1dGUuXG4gICAgICogQHBhcmFtIHZhbHVlIEEgYm9vbGVhbiB2YWx1ZSBvZiB0aGUgY2hlY2tlY2QgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCBjaGVja2JveENoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gdmFsdWU7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlNvdXJjZVByaWNlRm9ybVBhcmVudENsYXNzIiwiU291cmNlUHJpY2VGb3JtIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJwcmljZSIsIm9yaWdpblByaWNlIiwiaGlkZGVuQ2xhc3MiLCJpbml0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsInRvZ2dsZVByaWNlVmlzaWJpbGl0eSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uSW5wdXRUeXBlIiwiZXZlbnQiLCJjaGVja2JveENoZWNrZWQiLCJvbkNoZWNrYm94Q2hhbmdlIiwiQ29tcG9uZW50IiwiaW5wdXQiLCJpbnB1dENvbnRhaW5lciIsImNoZWNrYm94IiwicmVhZHlDYWxsYmFjayIsInNldFNvdXJjZVByaWNlIiwibWFwRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNvdXJjZVByaWNlIiwibGVuZ3RoIiwiaW5wdXRWYWx1ZSIsIlN0cmluZyIsInJlbW92ZSIsImlucHV0VmFsdWVMZW5ndGgiLCJhZGQiLCJmb2N1cyIsInZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=