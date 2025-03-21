"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["cart-item-note"],{

/***/ "./src/Pyz/Yves/CartNoteWidget/Theme/default/components/molecules/cart-item-note/cart-item-note.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/Pyz/Yves/CartNoteWidget/Theme/default/components/molecules/cart-item-note/cart-item-note.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemNote)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class CartItemNote extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.editButton = void 0;
    this.removeButton = void 0;
    this.formTarget = void 0;
    this.textTarget = void 0;
  }
  readyCallback() {}
  init() {
    this.editButton = this.getElementsByClassName(this.jsName + "__edit")[0];
    this.removeButton = this.getElementsByClassName(this.jsName + "__remove")[0];
    this.formTarget = this.getElementsByClassName(this.jsName + "__form")[0];
    this.textTarget = this.getElementsByClassName(this.jsName + "__text-wrap")[0];
    this.mapEvents();
  }
  mapEvents() {
    this.addEventListener('click', event => this.onTriggerClick(event));
  }
  onTriggerClick(event) {
    var target = event.target;
    while (target !== this) {
      if (target === this.editButton) {
        event.preventDefault();
        this.classToggle(this.formTarget);
        this.classToggle(this.textTarget);
        return;
      }
      if (target === this.removeButton) {
        event.preventDefault();
        var form = this.formTarget.getElementsByTagName('form')[0];
        var textarea = form.getElementsByTagName('textarea')[0];
        textarea.value = '';
        form.querySelector('button[type="submit"]').click();
        return;
      }
      target = target.parentNode;
    }
  }
  classToggle(activeTrigger) {
    var isTriggerActive = activeTrigger.classList.contains(this.classToToggle);
    activeTrigger.classList.toggle(this.classToToggle, !isTriggerActive);
  }
  get classToToggle() {
    return this.getAttribute('class-to-toggle');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuY2FydC1pdGVtLW5vdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFakMsTUFBTUMsWUFBWSxTQUFTRCwrREFBUyxDQUFDO0VBQUFFLFlBQUE7SUFBQSxTQUFBQyxTQUFBO0lBQUEsS0FDdENDLFVBQVU7SUFBQSxLQUNWQyxZQUFZO0lBQUEsS0FDWkMsVUFBVTtJQUFBLEtBQ1ZDLFVBQVU7RUFBQTtFQUVWQyxhQUFhQSxDQUFBLEVBQVMsQ0FBQztFQUV2QkMsSUFBSUEsQ0FBQSxFQUFTO0lBQ25CLElBQUksQ0FBQ0wsVUFBVSxHQUFzQixJQUFJLENBQUNNLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxXQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0YsSUFBSSxDQUFDTixZQUFZLEdBQXNCLElBQUksQ0FBQ0ssc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGFBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixJQUFJLENBQUNMLFVBQVUsR0FBZ0IsSUFBSSxDQUFDSSxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sV0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLElBQUksQ0FBQ0osVUFBVSxHQUFnQixJQUFJLENBQUNHLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxnQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFGLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxLQUFZLElBQUssSUFBSSxDQUFDQyxjQUFjLENBQUNELEtBQUssQ0FBQyxDQUFDO0VBQ2hGO0VBRVVDLGNBQWNBLENBQUNELEtBQVksRUFBUTtJQUN6QyxJQUFJRSxNQUFNLEdBQWdCRixLQUFLLENBQUNFLE1BQU07SUFFdEMsT0FBT0EsTUFBTSxLQUFLLElBQUksRUFBRTtNQUNwQixJQUFJQSxNQUFNLEtBQUssSUFBSSxDQUFDWixVQUFVLEVBQUU7UUFDNUJVLEtBQUssQ0FBQ0csY0FBYyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDWixVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDWSxXQUFXLENBQUMsSUFBSSxDQUFDWCxVQUFVLENBQUM7UUFFakM7TUFDSjtNQUNBLElBQUlTLE1BQU0sS0FBSyxJQUFJLENBQUNYLFlBQVksRUFBRTtRQUM5QlMsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztRQUN0QixJQUFNRSxJQUFJLEdBQW9CLElBQUksQ0FBQ2IsVUFBVSxDQUFDYyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBTUMsUUFBUSxHQUF3QkYsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUVDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7UUFDbkJILElBQUksQ0FBQ0ksYUFBYSxDQUFvQix1QkFBdUIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUV0RTtNQUNKO01BQ0FSLE1BQU0sR0FBZ0JBLE1BQU0sQ0FBQ1MsVUFBVTtJQUMzQztFQUNKO0VBRVVQLFdBQVdBLENBQUNRLGFBQTBCLEVBQVE7SUFDcEQsSUFBTUMsZUFBZSxHQUFHRCxhQUFhLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxDQUFDO0lBQzVFSixhQUFhLENBQUNFLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ0QsYUFBYSxFQUFFLENBQUNILGVBQWUsQ0FBQztFQUN4RTtFQUVBLElBQWNHLGFBQWFBLENBQUEsRUFBVztJQUNsQyxPQUFPLElBQUksQ0FBQ0UsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQy9DO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvQ2FydE5vdGVXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9jYXJ0LWl0ZW0tbm90ZS9jYXJ0LWl0ZW0tbm90ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1Ob3RlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgZWRpdEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHJlbW92ZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGZvcm1UYXJnZXQ6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCB0ZXh0VGFyZ2V0OiBIVE1MRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVkaXRCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZWRpdGApWzBdO1xuICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19yZW1vdmVgKVswXTtcbiAgICAgICAgdGhpcy5mb3JtVGFyZ2V0ID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2Zvcm1gKVswXTtcbiAgICAgICAgdGhpcy50ZXh0VGFyZ2V0ID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3RleHQtd3JhcGApWzBdO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UcmlnZ2VyQ2xpY2soZXZlbnQpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGxldCB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIHdoaWxlICh0YXJnZXQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuZWRpdEJ1dHRvbikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1RvZ2dsZSh0aGlzLmZvcm1UYXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NUb2dnbGUodGhpcy50ZXh0VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMucmVtb3ZlQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gPEhUTUxGb3JtRWxlbWVudD50aGlzLmZvcm1UYXJnZXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PmZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XG4gICAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmNsaWNrKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xhc3NUb2dnbGUoYWN0aXZlVHJpZ2dlcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNUcmlnZ2VyQWN0aXZlID0gYWN0aXZlVHJpZ2dlci5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc1RvVG9nZ2xlKTtcbiAgICAgICAgYWN0aXZlVHJpZ2dlci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3NUb1RvZ2dsZSwgIWlzVHJpZ2dlckFjdGl2ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBjbGFzc1RvVG9nZ2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2xhc3MtdG8tdG9nZ2xlJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNhcnRJdGVtTm90ZSIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiZWRpdEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsImZvcm1UYXJnZXQiLCJ0ZXh0VGFyZ2V0IiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwibWFwRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25UcmlnZ2VyQ2xpY2siLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzVG9nZ2xlIiwiZm9ybSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidGV4dGFyZWEiLCJ2YWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsInBhcmVudE5vZGUiLCJhY3RpdmVUcmlnZ2VyIiwiaXNUcmlnZ2VyQWN0aXZlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbGFzc1RvVG9nZ2xlIiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==