"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["form-submitter"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts":
/*!*************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormSubmitter)
/* harmony export */ });
/* harmony import */ var ShopUi_components_molecules_form_submitter_form_submitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/components/molecules/form-submitter/form-submitter */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts");

var TAG_NAME = 'form';
class FormSubmitter extends ShopUi_components_molecules_form_submitter_form_submitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  onEvent(event) {
    var trigger = event.currentTarget;
    var form = this.formClassName ? document.getElementsByClassName(this.formClassName)[0] : trigger.closest(TAG_NAME);
    if (!form) {
      return;
    }
    var submit = form.querySelector('[type="submit"]') || form.querySelector('button:not([type])');
    if (submit) {
      submit.click();
      return;
    }
    form.submit();
  }
  get formClassName() {
    return this.getAttribute('form-class-name');
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormSubmitter)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

var TAG_NAME = 'form';
class FormSubmitter extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
  }
  readyCallback() {}
  init() {
    this.triggers = Array.from(document.querySelectorAll(this.triggerSelector));
    this.mapEvents();
  }
  mapEvents() {
    this.triggers.forEach(trigger => trigger.addEventListener(this.eventName, event => this.onEvent(event)));
  }
  onEvent(event) {
    var trigger = event.currentTarget;
    var form = trigger.closest(TAG_NAME);
    if (!form) {
      return;
    }
    var submit = form.querySelector('[type="submit"]') || form.querySelector('button');
    if (submit) {
      submit.click();
    }
    form.submit();
  }
  get triggerSelector() {
    return this.getAttribute('trigger-selector');
  }
  get eventName() {
    return this.getAttribute('event');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuZm9ybS1zdWJtaXR0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEY7QUFFMUYsSUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDUixNQUFNQyxhQUFhLFNBQVNGLGlHQUFpQixDQUFDO0VBQy9DRyxPQUFPQSxDQUFDQyxLQUFZLEVBQVE7SUFDbEMsSUFBTUMsT0FBTyxHQUFvQkQsS0FBSyxDQUFDRSxhQUFhO0lBQ3BELElBQU1DLElBQUksR0FDTCxJQUFJLENBQUNDLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUNGLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxPQUFPLENBQUNNLE9BQU8sQ0FBQ1YsUUFBUSxDQUMxRztJQUVELElBQUksQ0FBQ00sSUFBSSxFQUFFO01BQ1A7SUFDSjtJQUVBLElBQU1LLE1BQU0sR0FDOEJMLElBQUksQ0FBQ00sYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQ3hETixJQUFJLENBQUNNLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztJQUUvRCxJQUFJRCxNQUFNLEVBQUU7TUFDUkEsTUFBTSxDQUFDRSxLQUFLLENBQUMsQ0FBQztNQUVkO0lBQ0o7SUFFQVAsSUFBSSxDQUFDSyxNQUFNLENBQUMsQ0FBQztFQUNqQjtFQUVBLElBQWNKLGFBQWFBLENBQUEsRUFBVztJQUNsQyxPQUFPLElBQUksQ0FBQ08sWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQy9DO0FBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQzlCZ0Q7QUFFaEQsSUFBTWQsUUFBUSxHQUFHLE1BQU07QUFFUixNQUFNQyxhQUFhLFNBQVNjLCtEQUFTLENBQUM7RUFBQUMsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUN2Q0MsUUFBUTtFQUFBO0VBRVJDLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDRixRQUFRLEdBQWtCRyxLQUFLLENBQUNDLElBQUksQ0FBQ2QsUUFBUSxDQUFDZSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBQzFGLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxPQUFPLENBQUV0QixPQUFPLElBQzFCQSxPQUFPLENBQUN1QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUNDLFNBQVMsRUFBR3pCLEtBQVksSUFBSyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQ2xGLENBQUM7RUFDTDtFQUVVRCxPQUFPQSxDQUFDQyxLQUFZLEVBQVE7SUFDbEMsSUFBTUMsT0FBTyxHQUFvQkQsS0FBSyxDQUFDRSxhQUFhO0lBQ3BELElBQU1DLElBQUksR0FBb0JGLE9BQU8sQ0FBQ00sT0FBTyxDQUFDVixRQUFRLENBQUM7SUFFdkQsSUFBSSxDQUFDTSxJQUFJLEVBQUU7TUFDUDtJQUNKO0lBRUEsSUFBTUssTUFBTSxHQUM4QkwsSUFBSSxDQUFDTSxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFDeEROLElBQUksQ0FBQ00sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUVuRCxJQUFJRCxNQUFNLEVBQUU7TUFDUkEsTUFBTSxDQUFDRSxLQUFLLENBQUMsQ0FBQztJQUNsQjtJQUVBUCxJQUFJLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0VBQ2pCO0VBRUEsSUFBY2EsZUFBZUEsQ0FBQSxFQUFXO0lBQ3BDLE9BQU8sSUFBSSxDQUFDVixZQUFZLENBQUMsa0JBQWtCLENBQUM7RUFDaEQ7RUFFQSxJQUFjYyxTQUFTQSxDQUFBLEVBQVc7SUFDOUIsT0FBTyxJQUFJLENBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUM7RUFDckM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3NyYy9QeXovWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9mb3JtLXN1Ym1pdHRlci9mb3JtLXN1Ym1pdHRlci50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvZm9ybS1zdWJtaXR0ZXIvZm9ybS1zdWJtaXR0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1TdWJtaXR0ZXJDb3JlIGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9mb3JtLXN1Ym1pdHRlci9mb3JtLXN1Ym1pdHRlcic7XG5cbmNvbnN0IFRBR19OQU1FID0gJ2Zvcm0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVN1Ym1pdHRlciBleHRlbmRzIEZvcm1TdWJtaXR0ZXJDb3JlIHtcbiAgICBwcm90ZWN0ZWQgb25FdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IDxIVE1MRm9ybUVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgZm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQ+KFxuICAgICAgICAgICAgKHRoaXMuZm9ybUNsYXNzTmFtZSA/IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5mb3JtQ2xhc3NOYW1lKVswXSA6IHRyaWdnZXIuY2xvc2VzdChUQUdfTkFNRSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJtaXQgPVxuICAgICAgICAgICAgPEhUTUxCdXR0b25FbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJykgfHxcbiAgICAgICAgICAgIDxIVE1MQnV0dG9uRWxlbWVudD5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpub3QoW3R5cGVdKScpO1xuXG4gICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5jbGljaygpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZm9ybUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Zvcm0tY2xhc3MtbmFtZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5jb25zdCBUQUdfTkFNRSA9ICdmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVN1Ym1pdHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHRyaWdnZXJzOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50cmlnZ2VyU2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+XG4gICAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIChldmVudDogRXZlbnQpID0+IHRoaXMub25FdmVudChldmVudCkpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkV2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gPEhUTUxGb3JtRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBmb3JtID0gPEhUTUxGb3JtRWxlbWVudD50cmlnZ2VyLmNsb3Nlc3QoVEFHX05BTUUpO1xuXG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID1cbiAgICAgICAgICAgIDxIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+Zm9ybS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpIHx8XG4gICAgICAgICAgICA8SFRNTEJ1dHRvbkVsZW1lbnQ+Zm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxuICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBzdWJtaXQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyU2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0cmlnZ2VyLXNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBldmVudE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdldmVudCcpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJGb3JtU3VibWl0dGVyQ29yZSIsIlRBR19OQU1FIiwiRm9ybVN1Ym1pdHRlciIsIm9uRXZlbnQiLCJldmVudCIsInRyaWdnZXIiLCJjdXJyZW50VGFyZ2V0IiwiZm9ybSIsImZvcm1DbGFzc05hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbG9zZXN0Iiwic3VibWl0IiwicXVlcnlTZWxlY3RvciIsImNsaWNrIiwiZ2V0QXR0cmlidXRlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJ0cmlnZ2VycyIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInRyaWdnZXJTZWxlY3RvciIsIm1hcEV2ZW50cyIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==