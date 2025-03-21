"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["quote-request-history-select"],{

/***/ "./vendor/spryker-shop/quote-request-page/src/SprykerShop/Yves/QuoteRequestPage/Theme/default/components/molecules/quote-request-history-select/quote-request-history-select.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/quote-request-page/src/SprykerShop/Yves/QuoteRequestPage/Theme/default/components/molecules/quote-request-history-select/quote-request-history-select.ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuoteRequestHistorySelect)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class QuoteRequestHistorySelect extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.select = void 0;
  }
  readyCallback() {}
  init() {
    this.select = this.getElementsByClassName(this.jsName + "__select")[0];
    this.mapEvents();
  }
  mapEvents() {
    this.mapSelectChangeEvent();
  }
  mapSelectChangeEvent() {
    if (this.select) {
      this.select.addEventListener('change', () => this.onChange());
    }
  }
  onChange() {
    var selectedValue = this.select.options[this.select.selectedIndex].value;
    if (selectedValue) {
      window.location.search = this.versionReferenceTitle + "=" + selectedValue;
    }
  }
  get versionReferenceTitle() {
    return this.getAttribute('version-reference-title');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucXVvdGUtcmVxdWVzdC1oaXN0b3J5LXNlbGVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUVqQyxNQUFNQyx5QkFBeUIsU0FBU0QsK0RBQVMsQ0FBQztFQUFBRSxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQ25EQyxNQUFNO0VBQUE7RUFFTkMsYUFBYUEsQ0FBQSxFQUFTLENBQUM7RUFFdkJDLElBQUlBLENBQUEsRUFBUztJQUNuQixJQUFJLENBQUNGLE1BQU0sR0FBc0IsSUFBSSxDQUFDRyxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sYUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUMsQ0FBQztFQUMvQjtFQUVVQSxvQkFBb0JBLENBQUEsRUFBUztJQUNuQyxJQUFJLElBQUksQ0FBQ04sTUFBTSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNqRTtFQUNKO0VBRVVBLFFBQVFBLENBQUEsRUFBUztJQUN2QixJQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDVCxNQUFNLENBQUNVLE9BQU8sQ0FBQyxJQUFJLENBQUNWLE1BQU0sQ0FBQ1csYUFBYSxDQUFDLENBQUNDLEtBQUs7SUFDMUUsSUFBSUgsYUFBYSxFQUFFO01BQ2ZJLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLEdBQU0sSUFBSSxDQUFDQyxxQkFBcUIsU0FBSVAsYUFBZTtJQUM3RTtFQUNKO0VBRUEsSUFBY08scUJBQXFCQSxDQUFBLEVBQVc7SUFDMUMsT0FBTyxJQUFJLENBQUNDLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQztFQUN2RDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9xdW90ZS1yZXF1ZXN0LXBhZ2Uvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvUXVvdGVSZXF1ZXN0UGFnZS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3F1b3RlLXJlcXVlc3QtaGlzdG9yeS1zZWxlY3QvcXVvdGUtcmVxdWVzdC1oaXN0b3J5LXNlbGVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVvdGVSZXF1ZXN0SGlzdG9yeVNlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2VsZWN0YClbMF07XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBTZWxlY3RDaGFuZ2VFdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBTZWxlY3RDaGFuZ2VFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLm9uQ2hhbmdlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3Qub3B0aW9uc1t0aGlzLnNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPSBgJHt0aGlzLnZlcnNpb25SZWZlcmVuY2VUaXRsZX09JHtzZWxlY3RlZFZhbHVlfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHZlcnNpb25SZWZlcmVuY2VUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZlcnNpb24tcmVmZXJlbmNlLXRpdGxlJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlF1b3RlUmVxdWVzdEhpc3RvcnlTZWxlY3QiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInNlbGVjdCIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsIm1hcEV2ZW50cyIsIm1hcFNlbGVjdENoYW5nZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRWYWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInZlcnNpb25SZWZlcmVuY2VUaXRsZSIsImdldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=