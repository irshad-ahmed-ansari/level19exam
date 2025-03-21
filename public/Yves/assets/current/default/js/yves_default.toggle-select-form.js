"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["toggle-select-form"],{

/***/ "./vendor/spryker-shop/shopping-list-widget/src/SprykerShop/Yves/ShoppingListWidget/Theme/default/components/molecules/toggle-select-form/toggle-select-form.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shopping-list-widget/src/SprykerShop/Yves/ShoppingListWidget/Theme/default/components/molecules/toggle-select-form/toggle-select-form.ts ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleSelectForm)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class ToggleSelectForm extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.trigger = void 0;
    this.targets = void 0;
  }
  readyCallback() {}
  init() {
    this.trigger = this.querySelector('[data-select-trigger]');
    this.targets = Array.from(document.getElementsByClassName(this.target));
    this.toggle();
    this.mapEvents();
  }
  mapEvents() {
    this.trigger.addEventListener('change', event => this.onTriggerClick(event));
  }
  onTriggerClick(event) {
    event.preventDefault();
    this.toggle();
  }
  toggle(isForced) {
    if (isForced === void 0) {
      isForced = this.isSelected;
    }
    this.targets.forEach(element => element.classList.toggle(this.classToToggle, isForced));
  }
  get isSelected() {
    return this.trigger.value !== '';
  }
  get target() {
    return this.trigger.getAttribute('target');
  }
  get classToToggle() {
    return this.trigger.getAttribute('class-to-toggle');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQudG9nZ2xlLXNlbGVjdC1mb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBRWpDLE1BQU1DLGdCQUFnQixTQUFTRCwrREFBUyxDQUFDO0VBQUFFLFlBQUE7SUFBQSxTQUFBQyxTQUFBO0lBQUEsS0FDMUNDLE9BQU87SUFBQSxLQUNQQyxPQUFPO0VBQUE7RUFFUEMsYUFBYUEsQ0FBQSxFQUFTLENBQUM7RUFFdkJDLElBQUlBLENBQUEsRUFBUztJQUNuQixJQUFJLENBQUNILE9BQU8sR0FBc0IsSUFBSSxDQUFDSSxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDN0UsSUFBSSxDQUFDSCxPQUFPLEdBQWtCSSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RGLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVBLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLENBQUNYLE9BQU8sQ0FBQ1ksZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxLQUFZLElBQUssSUFBSSxDQUFDQyxjQUFjLENBQUNELEtBQUssQ0FBQyxDQUFDO0VBQ3pGO0VBRVVDLGNBQWNBLENBQUNELEtBQVksRUFBUTtJQUN6Q0EsS0FBSyxDQUFDRSxjQUFjLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0VBQ2pCO0VBRVVBLE1BQU1BLENBQUNNLFFBQWlCLEVBQTBCO0lBQUEsSUFBM0NBLFFBQWlCO01BQWpCQSxRQUFpQixHQUFHLElBQUksQ0FBQ0MsVUFBVTtJQUFBO0lBQ2hELElBQUksQ0FBQ2hCLE9BQU8sQ0FBQ2lCLE9BQU8sQ0FBRUMsT0FBb0IsSUFBS0EsT0FBTyxDQUFDQyxTQUFTLENBQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUNXLGFBQWEsRUFBRUwsUUFBUSxDQUFDLENBQUM7RUFDMUc7RUFFQSxJQUFjQyxVQUFVQSxDQUFBLEVBQVk7SUFDaEMsT0FBTyxJQUFJLENBQUNqQixPQUFPLENBQUNzQixLQUFLLEtBQUssRUFBRTtFQUNwQztFQUVBLElBQWNiLE1BQU1BLENBQUEsRUFBVztJQUMzQixPQUFPLElBQUksQ0FBQ1QsT0FBTyxDQUFDdUIsWUFBWSxDQUFDLFFBQVEsQ0FBQztFQUM5QztFQUVBLElBQWNGLGFBQWFBLENBQUEsRUFBVztJQUNsQyxPQUFPLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ3VCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztFQUN2RDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wcGluZy1saXN0LXdpZGdldC9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wcGluZ0xpc3RXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy90b2dnbGUtc2VsZWN0LWZvcm0vdG9nZ2xlLXNlbGVjdC1mb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVTZWxlY3RGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHRhcmdldHM6IEhUTUxFbGVtZW50W107XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gPEhUTUxTZWxlY3RFbGVtZW50PnRoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtc2VsZWN0LXRyaWdnZXJdJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCkpO1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uVHJpZ2dlckNsaWNrKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uVHJpZ2dlckNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b2dnbGUoaXNGb3JjZWQ6IGJvb2xlYW4gPSB0aGlzLmlzU2VsZWN0ZWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc1RvVG9nZ2xlLCBpc0ZvcmNlZCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci52YWx1ZSAhPT0gJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCB0YXJnZXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgY2xhc3NUb1RvZ2dsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmdldEF0dHJpYnV0ZSgnY2xhc3MtdG8tdG9nZ2xlJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlRvZ2dsZVNlbGVjdEZvcm0iLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInRyaWdnZXIiLCJ0YXJnZXRzIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJxdWVyeVNlbGVjdG9yIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGFyZ2V0IiwidG9nZ2xlIiwibWFwRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25UcmlnZ2VyQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImlzRm9yY2VkIiwiaXNTZWxlY3RlZCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiY2xhc3NUb1RvZ2dsZSIsInZhbHVlIiwiZ2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==