"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["cart-configured-bundle-item-note"],{

/***/ "./src/Pyz/Yves/ConfigurableBundleNoteWidget/Theme/default/components/molecules/cart-configured-bundle-item-note/cart-configured-bundle-item-note.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ConfigurableBundleNoteWidget/Theme/default/components/molecules/cart-configured-bundle-item-note/cart-configured-bundle-item-note.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartConfiguredBundleItemNote)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class CartConfiguredBundleItemNote extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuY2FydC1jb25maWd1cmVkLWJ1bmRsZS1pdGVtLW5vdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFakMsTUFBTUMsNEJBQTRCLFNBQVNELCtEQUFTLENBQUM7RUFBQUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUN0REMsVUFBVTtJQUFBLEtBQ1ZDLFlBQVk7SUFBQSxLQUNaQyxVQUFVO0lBQUEsS0FDVkMsVUFBVTtFQUFBO0VBRVZDLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDTCxVQUFVLEdBQXNCLElBQUksQ0FBQ00sc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLFdBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixJQUFJLENBQUNOLFlBQVksR0FBc0IsSUFBSSxDQUFDSyxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sYUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLElBQUksQ0FBQ0wsVUFBVSxHQUFnQixJQUFJLENBQUNJLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxXQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsSUFBSSxDQUFDSixVQUFVLEdBQWdCLElBQUksQ0FBQ0csc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGdCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUYsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUVVQSxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQVksSUFBSyxJQUFJLENBQUNDLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDLENBQUM7RUFDaEY7RUFFVUMsY0FBY0EsQ0FBQ0QsS0FBWSxFQUFRO0lBQ3pDLElBQUlFLE1BQU0sR0FBZ0JGLEtBQUssQ0FBQ0UsTUFBTTtJQUV0QyxPQUFPQSxNQUFNLEtBQUssSUFBSSxFQUFFO01BQ3BCLElBQUlBLE1BQU0sS0FBSyxJQUFJLENBQUNaLFVBQVUsRUFBRTtRQUM1QlUsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNaLFVBQVUsQ0FBQztRQUNqQyxJQUFJLENBQUNZLFdBQVcsQ0FBQyxJQUFJLENBQUNYLFVBQVUsQ0FBQztRQUVqQztNQUNKO01BQ0EsSUFBSVMsTUFBTSxLQUFLLElBQUksQ0FBQ1gsWUFBWSxFQUFFO1FBQzlCUyxLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCLElBQU1FLElBQUksR0FBb0IsSUFBSSxDQUFDYixVQUFVLENBQUNjLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFNQyxRQUFRLEdBQXdCRixJQUFJLENBQUNDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RUMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtRQUNuQkgsSUFBSSxDQUFDSSxhQUFhLENBQW9CLHVCQUF1QixDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO1FBRXRFO01BQ0o7TUFDQVIsTUFBTSxHQUFnQkEsTUFBTSxDQUFDUyxVQUFVO0lBQzNDO0VBQ0o7RUFFVVAsV0FBV0EsQ0FBQ1EsYUFBMEIsRUFBUTtJQUNwRCxJQUFNQyxlQUFlLEdBQUdELGFBQWEsQ0FBQ0UsU0FBUyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDQyxhQUFhLENBQUM7SUFDNUVKLGFBQWEsQ0FBQ0UsU0FBUyxDQUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDRCxhQUFhLEVBQUUsQ0FBQ0gsZUFBZSxDQUFDO0VBQ3hFO0VBRUEsSUFBY0csYUFBYUEsQ0FBQSxFQUFXO0lBQ2xDLE9BQU8sSUFBSSxDQUFDRSxZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDL0M7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3NyYy9QeXovWXZlcy9Db25maWd1cmFibGVCdW5kbGVOb3RlV2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvY2FydC1jb25maWd1cmVkLWJ1bmRsZS1pdGVtLW5vdGUvY2FydC1jb25maWd1cmVkLWJ1bmRsZS1pdGVtLW5vdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRDb25maWd1cmVkQnVuZGxlSXRlbU5vdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBlZGl0QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgZm9ybVRhcmdldDogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHRleHRUYXJnZXQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWRpdEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19lZGl0YClbMF07XG4gICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3JlbW92ZWApWzBdO1xuICAgICAgICB0aGlzLmZvcm1UYXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZm9ybWApWzBdO1xuICAgICAgICB0aGlzLnRleHRUYXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdGV4dC13cmFwYClbMF07XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblRyaWdnZXJDbGljayhldmVudCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyaWdnZXJDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lZGl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzVG9nZ2xlKHRoaXMuZm9ybVRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1RvZ2dsZSh0aGlzLnRleHRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5yZW1vdmVCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZm9ybVRhcmdldC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+Zm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuY2xpY2soKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldCA9IDxIVE1MRWxlbWVudD50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGFzc1RvZ2dsZShhY3RpdmVUcmlnZ2VyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc1RyaWdnZXJBY3RpdmUgPSBhY3RpdmVUcmlnZ2VyLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzVG9Ub2dnbGUpO1xuICAgICAgICBhY3RpdmVUcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc1RvVG9nZ2xlLCAhaXNUcmlnZ2VyQWN0aXZlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNsYXNzVG9Ub2dnbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ2FydENvbmZpZ3VyZWRCdW5kbGVJdGVtTm90ZSIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiZWRpdEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsImZvcm1UYXJnZXQiLCJ0ZXh0VGFyZ2V0IiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwibWFwRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25UcmlnZ2VyQ2xpY2siLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzVG9nZ2xlIiwiZm9ybSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidGV4dGFyZWEiLCJ2YWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsInBhcmVudE5vZGUiLCJhY3RpdmVUcmlnZ2VyIiwiaXNUcmlnZ2VyQWN0aXZlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbGFzc1RvVG9nZ2xlIiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==