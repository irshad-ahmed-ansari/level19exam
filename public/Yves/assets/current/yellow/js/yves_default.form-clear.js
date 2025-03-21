"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["form-clear"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-clear/form-clear.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-clear/form-clear.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormClear)
/* harmony export */ });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");


/**
 * @event formFieldsClearAfter An event which is triggered after the form fields are cleared.
 */
class FormClear extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    /**
     * The current form.
     */
    this.form = void 0;
    /**
     * Collection of the triggers elements.
     */
    this.triggers = void 0;
    /**
     * Collection of the form elemenets.
     */
    this.targets = void 0;
    /**
     * Collection of the targets elements which should be ignored while collection the filters.
     */
    this.ignoreElements = void 0;
    /**
     * Collection of the filter elements.
     */
    this.filterElements = void 0;
    /**
     * The custom event.
     */
    this.formFieldsClearAfter = void 0;
  }
  readyCallback() {
    this.triggers = Array.from(this.triggerClassName ? document.getElementsByClassName(this.triggerClassName) :
    // eslint-disable-next-line deprecation/deprecation
    document.querySelectorAll(this.triggerSelector));
    this.form = this.formClassName ? document.getElementsByClassName(this.formClassName)[0] :
    // eslint-disable-next-line deprecation/deprecation
    document.querySelector(this.formSelector);
    this.ignoreElements = Array.from(this.ignoreClassName ? this.form.getElementsByClassName(this.ignoreClassName) :
    // eslint-disable-next-line deprecation/deprecation
    this.form.querySelectorAll(this.ignoreSelector));
    var formInputs = Array.from(this.form.getElementsByTagName('input'));
    var formSelects = Array.from(this.form.getElementsByTagName('select'));
    this.targets = [...formInputs, ...formSelects];
    this.filterElements = this.targets.filter(element => !this.ignoreElements.includes(element));
    this.mapEvents();
  }
  mapEvents() {
    this.createCustomEvents();
    this.triggers.forEach(input => {
      input.addEventListener('change', () => this.onChange(input));
    });
  }
  onChange(input) {
    var isChecked = input.checked;
    if (isChecked) {
      this.clearFormValues();
    }
  }

  /**
   * Clears an array of the form elements and triggers the custom event formFieldsClearAfter.
   * @param element HTMLFormElement is the element for clear action.
   */
  clearFormValues() {
    this.filterElements.forEach(element => {
      this.clearFormField(element);
    });
    this.dispatchEvent(this.formFieldsClearAfter);
  }

  /**
   * Clears current form field.
   * @param element HTMLFormElement is the element for clear action.
   */
  clearFormField(element) {
    var tagName = this.getTagName(element);
    if (tagName === 'INPUT') {
      var inputType = element.type;
      if (inputType === 'text' || inputType === 'hidden') {
        element.value = '';
      }
      if (inputType === 'checkbox' || inputType === 'radio') {
        element.checked = false;
      }
    }
    if (tagName === 'SELECT') {
      element.selectedIndex = 0;
    }
  }

  /**
   * Gets a tag name of the current element.
   */
  getTagName(element) {
    return element.tagName.toUpperCase();
  }
  createCustomEvents() {
    this.formFieldsClearAfter = new CustomEvent('form-fields-clear-after');
  }

  /**
   * Gets a querySelector name of the form.
   *
   * @deprecated Use formClassName() instead.
   */
  get formSelector() {
    return this.getAttribute('form-selector');
  }
  get formClassName() {
    return this.getAttribute('form-class-name');
  }

  /**
   * Gets a querySelector name of the trigger element.
   *
   * @deprecated Use triggerClassName() instead.
   */
  get triggerSelector() {
    return this.getAttribute('trigger-selector');
  }
  get triggerClassName() {
    return this.getAttribute('trigger-class-name');
  }

  /**
   * Gets a querySelector name of the ignore element.
   *
   * @deprecated Use ignoreClassName() instead.
   */
  get ignoreSelector() {
    return this.getAttribute('ignore-selector');
  }
  get ignoreClassName() {
    return this.getAttribute('ignore-class-name');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDL0M7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLElBQUkvQixlQUFlQSxDQUFBLEVBQVc7SUFDMUIsT0FBTyxJQUFJLENBQUMrQixZQUFZLENBQUMsa0JBQWtCLENBQUM7RUFDaEQ7RUFDQSxJQUFjbkMsZ0JBQWdCQSxDQUFBLEVBQVc7SUFDckMsT0FBTyxJQUFJLENBQUNtQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7RUFDbEQ7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLElBQUkxQixjQUFjQSxDQUFBLEVBQVc7SUFDekIsT0FBTyxJQUFJLENBQUMwQixZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDL0M7RUFDQSxJQUFjM0IsZUFBZUEsQ0FBQSxFQUFXO0lBQ3BDLE9BQU8sSUFBSSxDQUFDMkIsWUFBWSxDQUFDLG1CQUFtQixDQUFDO0VBQ2pEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvZm9ybS1jbGVhci9mb3JtLWNsZWFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQGV2ZW50IGZvcm1GaWVsZHNDbGVhckFmdGVyIEFuIGV2ZW50IHdoaWNoIGlzIHRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBmaWVsZHMgYXJlIGNsZWFyZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1DbGVhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZm9ybS5cbiAgICAgKi9cbiAgICBmb3JtOiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdGhlIHRyaWdnZXJzIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHRyaWdnZXJzOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiB0aGUgZm9ybSBlbGVtZW5ldHMuXG4gICAgICovXG4gICAgdGFyZ2V0czogSFRNTEVsZW1lbnRbXTtcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdGhlIHRhcmdldHMgZWxlbWVudHMgd2hpY2ggc2hvdWxkIGJlIGlnbm9yZWQgd2hpbGUgY29sbGVjdGlvbiB0aGUgZmlsdGVycy5cbiAgICAgKi9cbiAgICBpZ25vcmVFbGVtZW50czogSFRNTEVsZW1lbnRbXTtcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdGhlIGZpbHRlciBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBmaWx0ZXJFbGVtZW50czogSFRNTEVsZW1lbnRbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gZXZlbnQuXG4gICAgICovXG4gICAgZm9ybUZpZWxkc0NsZWFyQWZ0ZXI6IEN1c3RvbUV2ZW50O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKFxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudHJpZ2dlckNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvblxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnRyaWdnZXJTZWxlY3RvciksXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZm9ybSA9IDxIVE1MRWxlbWVudD4odGhpcy5mb3JtQ2xhc3NOYW1lXG4gICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5mb3JtQ2xhc3NOYW1lKVswXVxuICAgICAgICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmZvcm1TZWxlY3RvcikpO1xuICAgICAgICB0aGlzLmlnbm9yZUVsZW1lbnRzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShcbiAgICAgICAgICAgIHRoaXMuaWdub3JlQ2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgPyB0aGlzLmZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmlnbm9yZUNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvblxuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5pZ25vcmVTZWxlY3RvciksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGZvcm1JbnB1dHMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKHRoaXMuZm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSk7XG4gICAgICAgIGNvbnN0IGZvcm1TZWxlY3RzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLmZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpKTtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gWy4uLmZvcm1JbnB1dHMsIC4uLmZvcm1TZWxlY3RzXTtcbiAgICAgICAgdGhpcy5maWx0ZXJFbGVtZW50cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKGVsZW1lbnQpID0+ICF0aGlzLmlnbm9yZUVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpKTtcblxuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tRXZlbnRzKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMub25DaGFuZ2UoaW5wdXQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2hhbmdlKGlucHV0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+aW5wdXQpLmNoZWNrZWQ7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW4gYXJyYXkgb2YgdGhlIGZvcm0gZWxlbWVudHMgYW5kIHRyaWdnZXJzIHRoZSBjdXN0b20gZXZlbnQgZm9ybUZpZWxkc0NsZWFyQWZ0ZXIuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgSFRNTEZvcm1FbGVtZW50IGlzIHRoZSBlbGVtZW50IGZvciBjbGVhciBhY3Rpb24uXG4gICAgICovXG4gICAgY2xlYXJGb3JtVmFsdWVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpbHRlckVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuZm9ybUZpZWxkc0NsZWFyQWZ0ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBjdXJyZW50IGZvcm0gZmllbGQuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgSFRNTEZvcm1FbGVtZW50IGlzIHRoZSBlbGVtZW50IGZvciBjbGVhciBhY3Rpb24uXG4gICAgICovXG4gICAgY2xlYXJGb3JtRmllbGQoZWxlbWVudDogSFRNTEZvcm1FbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoZWxlbWVudCk7XG4gICAgICAgIGlmICh0YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICAgICAgICAgIGlmIChpbnB1dFR5cGUgPT09ICd0ZXh0JyB8fCBpbnB1dFR5cGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YWdOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB0YWcgbmFtZSBvZiB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldFRhZ05hbWUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbUV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtRmllbGRzQ2xlYXJBZnRlciA9IDxDdXN0b21FdmVudD5uZXcgQ3VzdG9tRXZlbnQoJ2Zvcm0tZmllbGRzLWNsZWFyLWFmdGVyJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHF1ZXJ5U2VsZWN0b3IgbmFtZSBvZiB0aGUgZm9ybS5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBmb3JtQ2xhc3NOYW1lKCkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBnZXQgZm9ybVNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZm9ybS1zZWxlY3RvcicpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGZvcm1DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3JtLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgcXVlcnlTZWxlY3RvciBuYW1lIG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgdHJpZ2dlckNsYXNzTmFtZSgpIGluc3RlYWQuXG4gICAgICovXG4gICAgZ2V0IHRyaWdnZXJTZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyaWdnZXItc2VsZWN0b3InKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHJpZ2dlci1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHF1ZXJ5U2VsZWN0b3IgbmFtZSBvZiB0aGUgaWdub3JlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgaWdub3JlQ2xhc3NOYW1lKCkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBnZXQgaWdub3JlU2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpZ25vcmUtc2VsZWN0b3InKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBpZ25vcmVDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpZ25vcmUtY2xhc3MtbmFtZScpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJGb3JtQ2xlYXIiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImZvcm0iLCJ0cmlnZ2VycyIsInRhcmdldHMiLCJpZ25vcmVFbGVtZW50cyIsImZpbHRlckVsZW1lbnRzIiwiZm9ybUZpZWxkc0NsZWFyQWZ0ZXIiLCJyZWFkeUNhbGxiYWNrIiwiQXJyYXkiLCJmcm9tIiwidHJpZ2dlckNsYXNzTmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmlnZ2VyU2VsZWN0b3IiLCJmb3JtQ2xhc3NOYW1lIiwicXVlcnlTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsImlnbm9yZUNsYXNzTmFtZSIsImlnbm9yZVNlbGVjdG9yIiwiZm9ybUlucHV0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9ybVNlbGVjdHMiLCJmaWx0ZXIiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJtYXBFdmVudHMiLCJjcmVhdGVDdXN0b21FdmVudHMiLCJmb3JFYWNoIiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwib25DaGFuZ2UiLCJpc0NoZWNrZWQiLCJjaGVja2VkIiwiY2xlYXJGb3JtVmFsdWVzIiwiY2xlYXJGb3JtRmllbGQiLCJkaXNwYXRjaEV2ZW50IiwidGFnTmFtZSIsImdldFRhZ05hbWUiLCJpbnB1dFR5cGUiLCJ0eXBlIiwidmFsdWUiLCJzZWxlY3RlZEluZGV4IiwidG9VcHBlckNhc2UiLCJDdXN0b21FdmVudCIsImdldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=