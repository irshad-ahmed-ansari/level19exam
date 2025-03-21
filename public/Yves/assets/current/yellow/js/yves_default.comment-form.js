"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["comment-form"],{

/***/ "./vendor/spryker-shop/comment-widget/src/SprykerShop/Yves/CommentWidget/Theme/default/components/molecules/comment-form/comment-form.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/comment-widget/src/SprykerShop/Yves/CommentWidget/Theme/default/components/molecules/comment-form/comment-form.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentForm)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");


/**
 * @deprecated Typescript file only. Use native formaction html attribute.
 */
class CommentForm extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.commentForm = void 0;
    this.submitButton = void 0;
    this.removeButton = void 0;
  }
  readyCallback() {
    this.commentForm = this.querySelector("." + this.jsName + "__form");
    this.submitButton = this.querySelector("." + this.jsName + "__submit-button");
    this.removeButton = this.querySelector("." + this.jsName + "__remove-button");
    this.mapEvents();
  }
  mapEvents() {
    if (!this.submitButton.hasAttribute('formaction')) {
      this.submitButton.addEventListener('click', event => {
        this.onButtonFormClick(event, this.editFormActionAttribute);
      });
    }
    if (this.removeButton && !this.submitButton.hasAttribute('formaction')) {
      this.removeButton.addEventListener('click', event => {
        this.onButtonFormClick(event, this.removeFormActionAttribute);
      });
    }
  }
  onButtonFormClick(event, action) {
    event.preventDefault();
    this.commentForm.setAttribute('action', action);
    this.commentForm.submit();
  }

  /**
   * Gets an attribute name for form element.
   */
  get editFormActionAttribute() {
    return this.submitButton.getAttribute('action');
  }

  /**
   * Gets an attribute name for form element.
   */
  get removeFormActionAttribute() {
    return this.removeButton.getAttribute('action');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuY29tbWVudC1mb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDZSxNQUFNQyxXQUFXLFNBQVNELCtEQUFTLENBQUM7RUFBQUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUNyQ0MsV0FBVztJQUFBLEtBQ1hDLFlBQVk7SUFBQSxLQUNaQyxZQUFZO0VBQUE7RUFFWkMsYUFBYUEsQ0FBQSxFQUFTO0lBQzVCLElBQUksQ0FBQ0gsV0FBVyxHQUFvQixJQUFJLENBQUNJLGFBQWEsT0FBSyxJQUFJLENBQUNDLE1BQU0sV0FBUSxDQUFDO0lBQy9FLElBQUksQ0FBQ0osWUFBWSxHQUFzQixJQUFJLENBQUNHLGFBQWEsT0FBSyxJQUFJLENBQUNDLE1BQU0sb0JBQWlCLENBQUM7SUFDM0YsSUFBSSxDQUFDSCxZQUFZLEdBQXNCLElBQUksQ0FBQ0UsYUFBYSxPQUFLLElBQUksQ0FBQ0MsTUFBTSxvQkFBaUIsQ0FBQztJQUMzRixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVBLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDTCxZQUFZLENBQUNNLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUMvQyxJQUFJLENBQUNOLFlBQVksQ0FBQ08sZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxLQUFZLElBQUs7UUFDMUQsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQ0UsdUJBQXVCLENBQUM7TUFDL0QsQ0FBQyxDQUFDO0lBQ047SUFFQSxJQUFJLElBQUksQ0FBQ1QsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDRCxZQUFZLENBQUNNLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUNwRSxJQUFJLENBQUNMLFlBQVksQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxLQUFZLElBQUs7UUFDMUQsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQ0cseUJBQXlCLENBQUM7TUFDakUsQ0FBQyxDQUFDO0lBQ047RUFDSjtFQUVVRixpQkFBaUJBLENBQUNELEtBQVksRUFBRUksTUFBYyxFQUFRO0lBQzVESixLQUFLLENBQUNLLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ2QsV0FBVyxDQUFDZSxZQUFZLENBQUMsUUFBUSxFQUFFRixNQUFNLENBQUM7SUFDL0MsSUFBSSxDQUFDYixXQUFXLENBQUNnQixNQUFNLENBQUMsQ0FBQztFQUM3Qjs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJTCx1QkFBdUJBLENBQUEsRUFBVztJQUNsQyxPQUFPLElBQUksQ0FBQ1YsWUFBWSxDQUFDZ0IsWUFBWSxDQUFDLFFBQVEsQ0FBQztFQUNuRDs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJTCx5QkFBeUJBLENBQUEsRUFBVztJQUNwQyxPQUFPLElBQUksQ0FBQ1YsWUFBWSxDQUFDZSxZQUFZLENBQUMsUUFBUSxDQUFDO0VBQ25EO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL2NvbW1lbnQtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL0NvbW1lbnRXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9jb21tZW50LWZvcm0vY29tbWVudC1mb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFR5cGVzY3JpcHQgZmlsZSBvbmx5LiBVc2UgbmF0aXZlIGZvcm1hY3Rpb24gaHRtbCBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgY29tbWVudEZvcm06IEhUTUxGb3JtRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc3VibWl0QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtID0gPEhUTUxGb3JtRWxlbWVudD50aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuanNOYW1lfV9fZm9ybWApO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuanNOYW1lfV9fc3VibWl0LWJ1dHRvbmApO1xuICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuanNOYW1lfV9fcmVtb3ZlLWJ1dHRvbmApO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zdWJtaXRCdXR0b24uaGFzQXR0cmlidXRlKCdmb3JtYWN0aW9uJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25Gb3JtQ2xpY2soZXZlbnQsIHRoaXMuZWRpdEZvcm1BY3Rpb25BdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yZW1vdmVCdXR0b24gJiYgIXRoaXMuc3VibWl0QnV0dG9uLmhhc0F0dHJpYnV0ZSgnZm9ybWFjdGlvbicpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQnV0dG9uRm9ybUNsaWNrKGV2ZW50LCB0aGlzLnJlbW92ZUZvcm1BY3Rpb25BdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25CdXR0b25Gb3JtQ2xpY2soZXZlbnQ6IEV2ZW50LCBhY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgYWN0aW9uKTtcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIGF0dHJpYnV0ZSBuYW1lIGZvciBmb3JtIGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0IGVkaXRGb3JtQWN0aW9uQXR0cmlidXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYW4gYXR0cmlidXRlIG5hbWUgZm9yIGZvcm0gZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXQgcmVtb3ZlRm9ybUFjdGlvbkF0dHJpYnV0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVCdXR0b24uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ29tbWVudEZvcm0iLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImNvbW1lbnRGb3JtIiwic3VibWl0QnV0dG9uIiwicmVtb3ZlQnV0dG9uIiwicmVhZHlDYWxsYmFjayIsInF1ZXJ5U2VsZWN0b3IiLCJqc05hbWUiLCJtYXBFdmVudHMiLCJoYXNBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvbkJ1dHRvbkZvcm1DbGljayIsImVkaXRGb3JtQWN0aW9uQXR0cmlidXRlIiwicmVtb3ZlRm9ybUFjdGlvbkF0dHJpYnV0ZSIsImFjdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2V0QXR0cmlidXRlIiwic3VibWl0IiwiZ2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==