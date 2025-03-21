"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["customer-reorder"],{

/***/ "./vendor/spryker-shop/customer-reorder-widget/src/SprykerShop/Yves/CustomerReorderWidget/Theme/default/views/customer-reorder/customer-reorder.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/customer-reorder-widget/src/SprykerShop/Yves/CustomerReorderWidget/Theme/default/views/customer-reorder/customer-reorder.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerReorder)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class CustomerReorder extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    /**
     * Elements enabling/disabling the trigger.
     */
    this.selections = void 0;
    /**
     * Element enabled/disabled by selections changes.
     */
    this.trigger = void 0;
    this.selections = Array.from(this.getElementsByClassName(this.jsName + "__selection"));
    this.trigger = this.getElementsByClassName(this.jsName + "__trigger")[0];
  }
  readyCallback() {
    this.mapEvents();
  }
  mapEvents() {
    this.selections.forEach(selection => selection.addEventListener('change', () => this.onSelectionChange()));
  }
  onSelectionChange() {
    var isEnabled = this.selections.some(selection => selection.checked);
    this.enableTrigger(isEnabled);
  }

  /**
   * Sets or removes the disabled attribute from the trigger element.
   * @param enable A boolean value for checking if the trigger is available for changing.
   */
  enableTrigger(isEnabled) {
    if (isEnabled) {
      this.trigger.removeAttribute('disabled');
      return;
    }
    this.trigger.setAttribute('disabled', 'disabled');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuY3VzdG9tZXItcmVvcmRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUVqQyxNQUFNQyxlQUFlLFNBQVNELCtEQUFTLENBQUM7RUFXbkRFLFdBQVdBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQyxDQUFDO0lBWFg7QUFDSjtBQUNBO0lBRkksS0FHU0MsVUFBVTtJQUVuQjtBQUNKO0FBQ0E7SUFGSSxLQUdTQyxPQUFPO0lBSVosSUFBSSxDQUFDRCxVQUFVLEdBQXVCRSxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNDLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxnQkFBYSxDQUFDLENBQUM7SUFDMUcsSUFBSSxDQUFDSixPQUFPLEdBQWdCLElBQUksQ0FBQ0csc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGNBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6RjtFQUVVQyxhQUFhQSxDQUFBLEVBQVM7SUFDNUIsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUVVQSxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDUCxVQUFVLENBQUNRLE9BQU8sQ0FBRUMsU0FBMkIsSUFDaERBLFNBQVMsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDLENBQ3ZFLENBQUM7RUFDTDtFQUVVQSxpQkFBaUJBLENBQUEsRUFBUztJQUNoQyxJQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDWixVQUFVLENBQUNhLElBQUksQ0FBRUosU0FBMkIsSUFBS0EsU0FBUyxDQUFDSyxPQUFPLENBQUM7SUFDMUYsSUFBSSxDQUFDQyxhQUFhLENBQUNILFNBQVMsQ0FBQztFQUNqQzs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtFQUNJRyxhQUFhQSxDQUFDSCxTQUFrQixFQUFRO0lBQ3BDLElBQUlBLFNBQVMsRUFBRTtNQUNYLElBQUksQ0FBQ1gsT0FBTyxDQUFDZSxlQUFlLENBQUMsVUFBVSxDQUFDO01BRXhDO0lBQ0o7SUFFQSxJQUFJLENBQUNmLE9BQU8sQ0FBQ2dCLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO0VBQ3JEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL2N1c3RvbWVyLXJlb3JkZXItd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL0N1c3RvbWVyUmVvcmRlcldpZGdldC9UaGVtZS9kZWZhdWx0L3ZpZXdzL2N1c3RvbWVyLXJlb3JkZXIvY3VzdG9tZXItcmVvcmRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXJSZW9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBFbGVtZW50cyBlbmFibGluZy9kaXNhYmxpbmcgdGhlIHRyaWdnZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VsZWN0aW9uczogSFRNTElucHV0RWxlbWVudFtdO1xuXG4gICAgLyoqXG4gICAgICogRWxlbWVudCBlbmFibGVkL2Rpc2FibGVkIGJ5IHNlbGVjdGlvbnMgY2hhbmdlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmlnZ2VyOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbnMgPSA8SFRNTElucHV0RWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2VsZWN0aW9uYCkpO1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdHJpZ2dlcmApWzBdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3Rpb246IEhUTUxJbnB1dEVsZW1lbnQpID0+XG4gICAgICAgICAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5vblNlbGVjdGlvbkNoYW5nZSgpKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25TZWxlY3Rpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzRW5hYmxlZCA9IHRoaXMuc2VsZWN0aW9ucy5zb21lKChzZWxlY3Rpb246IEhUTUxJbnB1dEVsZW1lbnQpID0+IHNlbGVjdGlvbi5jaGVja2VkKTtcbiAgICAgICAgdGhpcy5lbmFibGVUcmlnZ2VyKGlzRW5hYmxlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBvciByZW1vdmVzIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgdHJpZ2dlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbmFibGUgQSBib29sZWFuIHZhbHVlIGZvciBjaGVja2luZyBpZiB0aGUgdHJpZ2dlciBpcyBhdmFpbGFibGUgZm9yIGNoYW5naW5nLlxuICAgICAqL1xuICAgIGVuYWJsZVRyaWdnZXIoaXNFbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkN1c3RvbWVyUmVvcmRlciIsImNvbnN0cnVjdG9yIiwic2VsZWN0aW9ucyIsInRyaWdnZXIiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwicmVhZHlDYWxsYmFjayIsIm1hcEV2ZW50cyIsImZvckVhY2giLCJzZWxlY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJpc0VuYWJsZWQiLCJzb21lIiwiY2hlY2tlZCIsImVuYWJsZVRyaWdnZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9