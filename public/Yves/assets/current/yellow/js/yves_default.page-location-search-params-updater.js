"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["page-location-search-params-updater"],{

/***/ "./vendor/spryker-shop/merchant-product-widget/src/SprykerShop/Yves/MerchantProductWidget/Theme/default/components/molecules/page-location-search-params-updater/page-location-search-params-updater.ts":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/merchant-product-widget/src/SprykerShop/Yves/MerchantProductWidget/Theme/default/components/molecules/page-location-search-params-updater/page-location-search-params-updater.ts ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageLocationSearchParamsUpdater)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class PageLocationSearchParamsUpdater extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
  }
  readyCallback() {}
  init() {
    this.triggers = Array.from(document.getElementsByClassName(this.triggerClass));
    this.mapEvents();
  }
  mapEvents() {
    this.triggers.forEach(trigger => trigger.addEventListener(this.eventName, () => this.onEvent()));
  }
  onEvent() {
    window.location.search = this.searchParams;
  }
  get searchParams() {
    return this.getAttribute('search-params');
  }
  get triggerClass() {
    return this.getAttribute('trigger-class');
  }
  get eventName() {
    return this.getAttribute('event');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucGFnZS1sb2NhdGlvbi1zZWFyY2gtcGFyYW1zLXVwZGF0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFakMsTUFBTUMsK0JBQStCLFNBQVNELCtEQUFTLENBQUM7RUFBQUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUN6REMsUUFBUTtFQUFBO0VBRVJDLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDRixRQUFRLEdBQWtCRyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQzdGLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxPQUFPLENBQUVDLE9BQU8sSUFBS0EsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNDLFNBQVMsRUFBRSxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RHO0VBRVVBLE9BQU9BLENBQUEsRUFBUztJQUN0QkMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNDLFlBQVk7RUFDOUM7RUFFQSxJQUFjQSxZQUFZQSxDQUFBLEVBQVc7SUFDakMsT0FBTyxJQUFJLENBQUNDLFlBQVksQ0FBQyxlQUFlLENBQUM7RUFDN0M7RUFFQSxJQUFjWCxZQUFZQSxDQUFBLEVBQVc7SUFDakMsT0FBTyxJQUFJLENBQUNXLFlBQVksQ0FBQyxlQUFlLENBQUM7RUFDN0M7RUFFQSxJQUFjTixTQUFTQSxDQUFBLEVBQVc7SUFDOUIsT0FBTyxJQUFJLENBQUNNLFlBQVksQ0FBQyxPQUFPLENBQUM7RUFDckM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3AvbWVyY2hhbnQtcHJvZHVjdC13aWRnZXQvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvTWVyY2hhbnRQcm9kdWN0V2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcGFnZS1sb2NhdGlvbi1zZWFyY2gtcGFyYW1zLXVwZGF0ZXIvcGFnZS1sb2NhdGlvbi1zZWFyY2gtcGFyYW1zLXVwZGF0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VMb2NhdGlvblNlYXJjaFBhcmFtc1VwZGF0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCB0cmlnZ2VyczogSFRNTEVsZW1lbnRbXTtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudHJpZ2dlckNsYXNzKSk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsICgpID0+IHRoaXMub25FdmVudCgpKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPSB0aGlzLnNlYXJjaFBhcmFtcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNlYXJjaFBhcmFtcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NlYXJjaC1wYXJhbXMnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHRyaWdnZXJDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyaWdnZXItY2xhc3MnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGV2ZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2V2ZW50Jyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlBhZ2VMb2NhdGlvblNlYXJjaFBhcmFtc1VwZGF0ZXIiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInRyaWdnZXJzIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmlnZ2VyQ2xhc3MiLCJtYXBFdmVudHMiLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudE5hbWUiLCJvbkV2ZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzZWFyY2hQYXJhbXMiLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9