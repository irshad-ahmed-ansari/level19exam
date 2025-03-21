"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["language-switcher"],{

/***/ "./src/Pyz/Yves/LanguageSwitcherWidget/Theme/default/components/molecules/language-switcher/language-switcher.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/LanguageSwitcherWidget/Theme/default/components/molecules/language-switcher/language-switcher.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguageSwitcher)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class LanguageSwitcher extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.selectList = void 0;
  }
  readyCallback() {}
  init() {
    this.selectList = Array.from(document.getElementsByClassName("" + this.jsName));
    this.mapEvents();
  }
  mapEvents() {
    this.selectList.forEach(select => {
      select.addEventListener('change', event => this.onTriggerChange(event));
    });
  }
  onTriggerChange(event) {
    var selectTarget = event.currentTarget;
    if (this.hasUrl(selectTarget)) {
      window.location.assign(this.currentSelectValue(selectTarget));
    }
  }
  currentSelectValue(select) {
    return select.options[select.selectedIndex].value;
  }
  hasUrl(select) {
    return !!select.value;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQubGFuZ3VhZ2Utc3dpdGNoZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFakMsTUFBTUMsZ0JBQWdCLFNBQVNELCtEQUFTLENBQUM7RUFBQUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUMxQ0MsVUFBVTtFQUFBO0VBRVZDLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDRixVQUFVLEdBQXdCRyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxzQkFBc0IsTUFBSSxJQUFJLENBQUNDLE1BQVEsQ0FBQyxDQUFDO0lBRXBHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxPQUFPLENBQUVDLE1BQXlCLElBQUs7TUFDbkRBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxLQUFZLElBQUssSUFBSSxDQUFDQyxlQUFlLENBQUNELEtBQUssQ0FBQyxDQUFDO0lBQ3BGLENBQUMsQ0FBQztFQUNOO0VBRVVDLGVBQWVBLENBQUNELEtBQVksRUFBUTtJQUMxQyxJQUFNRSxZQUFZLEdBQXNCRixLQUFLLENBQUNHLGFBQWE7SUFFM0QsSUFBSSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsWUFBWSxDQUFDLEVBQUU7TUFDM0JHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ04sWUFBWSxDQUFDLENBQUM7SUFDakU7RUFDSjtFQUVVTSxrQkFBa0JBLENBQUNWLE1BQXlCLEVBQVU7SUFDNUQsT0FBT0EsTUFBTSxDQUFDVyxPQUFPLENBQUNYLE1BQU0sQ0FBQ1ksYUFBYSxDQUFDLENBQUNDLEtBQUs7RUFDckQ7RUFFVVAsTUFBTUEsQ0FBQ04sTUFBeUIsRUFBVztJQUNqRCxPQUFPLENBQUMsQ0FBQ0EsTUFBTSxDQUFDYSxLQUFLO0VBQ3pCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvTGFuZ3VhZ2VTd2l0Y2hlcldpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2xhbmd1YWdlLXN3aXRjaGVyL2xhbmd1YWdlLXN3aXRjaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5ndWFnZVN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgc2VsZWN0TGlzdDogSFRNTFNlbGVjdEVsZW1lbnRbXTtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdExpc3QgPSA8SFRNTFNlbGVjdEVsZW1lbnRbXT5BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9YCkpO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RMaXN0LmZvckVhY2goKHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uVHJpZ2dlckNoYW5nZShldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3RUYXJnZXQgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAodGhpcy5oYXNVcmwoc2VsZWN0VGFyZ2V0KSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZShzZWxlY3RUYXJnZXQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjdXJyZW50U2VsZWN0VmFsdWUoc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc1VybChzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXNlbGVjdC52YWx1ZTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTGFuZ3VhZ2VTd2l0Y2hlciIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwic2VsZWN0TGlzdCIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwibWFwRXZlbnRzIiwiZm9yRWFjaCIsInNlbGVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uVHJpZ2dlckNoYW5nZSIsInNlbGVjdFRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJoYXNVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsImN1cnJlbnRTZWxlY3RWYWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9