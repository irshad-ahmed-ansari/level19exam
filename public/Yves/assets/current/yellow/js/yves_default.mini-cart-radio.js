"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["mini-cart-radio"],{

/***/ "./vendor/spryker-shop/multi-cart-widget/src/SprykerShop/Yves/MultiCartWidget/Theme/default/components/molecules/mini-cart-radio/mini-cart-radio.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/multi-cart-widget/src/SprykerShop/Yves/MultiCartWidget/Theme/default/components/molecules/mini-cart-radio/mini-cart-radio.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniCartRadio)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class MiniCartRadio extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    /**
     * The radio button element.
     *
     * @deprecated
     */
    this.radio = void 0;
    this.form = void 0;
  }
  readyCallback() {}
  init() {
    // eslint-disable-next-line deprecation/deprecation
    this.radio = this.getElementsByClassName(this.jsName + "__input")[0];
    this.form = this.getElementsByClassName(this.jsName + "__form")[0];
    this.mapEvents();
  }
  mapEvents() {
    this.addEventListener('click', () => this.onMiniCartRadioClick());
  }
  onMiniCartRadioClick() {
    this.form.submit();
  }

  /**
   * Gets the location url from a checked radio button.
   *
   * @deprecated
   */
  get locationUrl() {
    // eslint-disable-next-line deprecation/deprecation
    return this.radio.dataset.href;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQubWluaS1jYXJ0LXJhZGlvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBRWpDLE1BQU1DLGFBQWEsU0FBU0QsK0RBQVMsQ0FBQztFQUFBRSxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUNqRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBSkksS0FLQUMsS0FBSztJQUFBLEtBQ0tDLElBQUk7RUFBQTtFQUVKQyxhQUFhQSxDQUFBLEVBQVMsQ0FBQztFQUV2QkMsSUFBSUEsQ0FBQSxFQUFTO0lBQ25CO0lBQ0EsSUFBSSxDQUFDSCxLQUFLLEdBQWdCLElBQUksQ0FBQ0ksc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLFlBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixJQUFJLENBQUNKLElBQUksR0FBb0IsSUFBSSxDQUFDRyxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sV0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5GLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7RUFDckU7RUFFVUEsb0JBQW9CQSxDQUFBLEVBQVM7SUFDbkMsSUFBSSxDQUFDUCxJQUFJLENBQUNRLE1BQU0sQ0FBQyxDQUFDO0VBQ3RCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJQyxXQUFXQSxDQUFBLEVBQVc7SUFDdEI7SUFDQSxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxPQUFPLENBQUNDLElBQUk7RUFDbEM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3AvbXVsdGktY2FydC13aWRnZXQvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvTXVsdGlDYXJ0V2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvbWluaS1jYXJ0LXJhZGlvL21pbmktY2FydC1yYWRpby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaUNhcnRSYWRpbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIHJhZGlvIGJ1dHRvbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICByYWRpbzogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGZvcm06IEhUTUxGb3JtRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgdGhpcy5yYWRpbyA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbnB1dGApWzBdO1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2Zvcm1gKVswXTtcblxuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9uTWluaUNhcnRSYWRpb0NsaWNrKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1pbmlDYXJ0UmFkaW9DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGxvY2F0aW9uIHVybCBmcm9tIGEgY2hlY2tlZCByYWRpbyBidXR0b24uXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIGdldCBsb2NhdGlvblVybCgpOiBzdHJpbmcge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaW8uZGF0YXNldC5ocmVmO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJNaW5pQ2FydFJhZGlvIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJyYWRpbyIsImZvcm0iLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJtYXBFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwib25NaW5pQ2FydFJhZGlvQ2xpY2siLCJzdWJtaXQiLCJsb2NhdGlvblVybCIsImRhdGFzZXQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==