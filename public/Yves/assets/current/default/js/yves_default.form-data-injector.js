"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["form-data-injector"],{

/***/ "./vendor/spryker-shop/shopping-list-widget/src/SprykerShop/Yves/ShoppingListWidget/Theme/default/components/molecules/form-data-injector/form-data-injector.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shopping-list-widget/src/SprykerShop/Yves/ShoppingListWidget/Theme/default/components/molecules/form-data-injector/form-data-injector.ts ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormDataInjector)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class FormDataInjector extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.destinationForm = void 0;
    this.fieldsToInject = void 0;
  }
  readyCallback() {}
  init() {
    this.destinationForm = document.getElementsByClassName(this.destinationFormClassName)[0];
    this.fieldsToInject = Array.from(document.querySelectorAll(this.fieldsSelector));
    if (!this.destinationForm) {
      return;
    }
    this.mapEvents();
  }
  mapEvents() {
    this.destinationForm.addEventListener('submit', event => this.onSubmit(event), false);
  }
  onSubmit(event) {
    event.preventDefault();
    this.disableSubmitButton();
    this.injectData();
    this.destinationForm.submit();
  }
  disableSubmitButton() {
    this.destinationForm.querySelector('[type="submit"]').setAttribute('disabled', 'disabled');
  }
  injectData() {
    this.fieldsToInject.forEach(field => this.addField(field));
  }
  addField(field) {
    var fieldToInsert = document.createElement('input');
    fieldToInsert.setAttribute('type', 'hidden');
    fieldToInsert.setAttribute('name', field.name);
    fieldToInsert.setAttribute('value', field.value);
    this.destinationForm.appendChild(fieldToInsert);
  }
  get destinationFormClassName() {
    return this.getAttribute('destination-form-class-name');
  }
  get fieldsSelector() {
    return this.getAttribute('fields-selector');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuZm9ybS1kYXRhLWluamVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBRWpDLE1BQU1DLGdCQUFnQixTQUFTRCwrREFBUyxDQUFDO0VBQUFFLFlBQUE7SUFBQSxTQUFBQyxTQUFBO0lBQUEsS0FDMUNDLGVBQWU7SUFBQSxLQUNmQyxjQUFjO0VBQUE7RUFFZEMsYUFBYUEsQ0FBQSxFQUFTLENBQUM7RUFFdkJDLElBQUlBLENBQUEsRUFBUztJQUNuQixJQUFJLENBQUNILGVBQWUsR0FBb0JJLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsSUFBSSxDQUFDQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RyxJQUFJLENBQUNMLGNBQWMsR0FBa0JNLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSixRQUFRLENBQUNLLGdCQUFnQixDQUFDLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFL0YsSUFBSSxDQUFDLElBQUksQ0FBQ1YsZUFBZSxFQUFFO01BQ3ZCO0lBQ0o7SUFFQSxJQUFJLENBQUNXLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVBLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLENBQUNYLGVBQWUsQ0FBQ1ksZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxLQUFZLElBQUssSUFBSSxDQUFDQyxRQUFRLENBQUNELEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUNsRztFQUVVQyxRQUFRQSxDQUFDRCxLQUFZLEVBQVE7SUFDbkNBLEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDakIsZUFBZSxDQUFDa0IsTUFBTSxDQUFDLENBQUM7RUFDakM7RUFFVUYsbUJBQW1CQSxDQUFBLEVBQVM7SUFDbEMsSUFBSSxDQUFDaEIsZUFBZSxDQUFDbUIsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO0VBQzlGO0VBRVVILFVBQVVBLENBQUEsRUFBUztJQUN6QixJQUFJLENBQUNoQixjQUFjLENBQUNvQixPQUFPLENBQUVDLEtBQXNCLElBQUssSUFBSSxDQUFDQyxRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO0VBQ2pGO0VBRVVDLFFBQVFBLENBQUNELEtBQXNCLEVBQVE7SUFDN0MsSUFBTUUsYUFBK0IsR0FBcUJwQixRQUFRLENBQUNxQixhQUFhLENBQUMsT0FBTyxDQUFDO0lBRXpGRCxhQUFhLENBQUNKLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0lBQzVDSSxhQUFhLENBQUNKLFlBQVksQ0FBQyxNQUFNLEVBQUVFLEtBQUssQ0FBQ0ksSUFBSSxDQUFDO0lBQzlDRixhQUFhLENBQUNKLFlBQVksQ0FBQyxPQUFPLEVBQUVFLEtBQUssQ0FBQ0ssS0FBSyxDQUFDO0lBRWhELElBQUksQ0FBQzNCLGVBQWUsQ0FBQzRCLFdBQVcsQ0FBQ0osYUFBYSxDQUFDO0VBQ25EO0VBRUEsSUFBY2xCLHdCQUF3QkEsQ0FBQSxFQUFXO0lBQzdDLE9BQU8sSUFBSSxDQUFDdUIsWUFBWSxDQUFDLDZCQUE2QixDQUFDO0VBQzNEO0VBRUEsSUFBY25CLGNBQWNBLENBQUEsRUFBVztJQUNuQyxPQUFPLElBQUksQ0FBQ21CLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztFQUMvQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wcGluZy1saXN0LXdpZGdldC9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wcGluZ0xpc3RXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9mb3JtLWRhdGEtaW5qZWN0b3IvZm9ybS1kYXRhLWluamVjdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRGF0YUluamVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgZGVzdGluYXRpb25Gb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGZpZWxkc1RvSW5qZWN0OiBIVE1MRWxlbWVudFtdO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb25Gb3JtID0gPEhUTUxGb3JtRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuZGVzdGluYXRpb25Gb3JtQ2xhc3NOYW1lKVswXTtcbiAgICAgICAgdGhpcy5maWVsZHNUb0luamVjdCA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmZpZWxkc1NlbGVjdG9yKSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uU3VibWl0KGV2ZW50KSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblN1Ym1pdChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgdGhpcy5pbmplY3REYXRhKCk7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb25Gb3JtLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkaXNhYmxlU3VibWl0QnV0dG9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uRm9ybS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5qZWN0RGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZHNUb0luamVjdC5mb3JFYWNoKChmaWVsZDogSFRNTEZvcm1FbGVtZW50KSA9PiB0aGlzLmFkZEZpZWxkKGZpZWxkKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEZpZWxkKGZpZWxkOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmllbGRUb0luc2VydDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgZmllbGRUb0luc2VydC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG4gICAgICAgIGZpZWxkVG9JbnNlcnQuc2V0QXR0cmlidXRlKCduYW1lJywgZmllbGQubmFtZSk7XG4gICAgICAgIGZpZWxkVG9JbnNlcnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGZpZWxkLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uRm9ybS5hcHBlbmRDaGlsZChmaWVsZFRvSW5zZXJ0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGRlc3RpbmF0aW9uRm9ybUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uLWZvcm0tY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZmllbGRzU2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdmaWVsZHMtc2VsZWN0b3InKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRm9ybURhdGFJbmplY3RvciIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiZGVzdGluYXRpb25Gb3JtIiwiZmllbGRzVG9JbmplY3QiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRlc3RpbmF0aW9uRm9ybUNsYXNzTmFtZSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWVsZHNTZWxlY3RvciIsIm1hcEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlU3VibWl0QnV0dG9uIiwiaW5qZWN0RGF0YSIsInN1Ym1pdCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwiZmllbGQiLCJhZGRGaWVsZCIsImZpZWxkVG9JbnNlcnQiLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsInZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9