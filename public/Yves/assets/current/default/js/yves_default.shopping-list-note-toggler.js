"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["shopping-list-note-toggler"],{

/***/ "./src/Pyz/Yves/ShoppingListNoteWidget/Theme/default/components/molecules/shopping-list-note-toggler/shopping-list-note-toggler.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShoppingListNoteWidget/Theme/default/components/molecules/shopping-list-note-toggler/shopping-list-note-toggler.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShoppingListNoteToggler)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class ShoppingListNoteToggler extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.label = void 0;
    this.trigger = void 0;
    this.noteTextFieldWrapper = void 0;
    this.noteTextarea = void 0;
    this.hiddenClass = 'is-hidden';
  }
  readyCallback() {}
  init() {
    this.label = this.getElementsByClassName(this.jsName + "__label")[0];
    this.trigger = this.getElementsByClassName(this.jsName + "__title")[0];
    this.noteTextFieldWrapper = this.getElementsByClassName(this.jsName + "__wrapper")[0];
    this.noteTextarea = this.getElementsByClassName(this.jsName + "__note-textarea")[0];
    this.mapEvents();
  }
  mapEvents() {
    if (this.label) {
      this.label.addEventListener('click', event => this.onClick(event));
    }
  }
  onClick(event) {
    event.preventDefault();
    this.toggleClass([this.label, this.trigger, this.noteTextFieldWrapper]);
    this.focusTextarea();
  }
  toggleClass(elementsToToggle) {
    elementsToToggle.forEach(element => {
      element.classList.toggle(this.hiddenClass);
    });
  }
  focusTextarea() {
    this.noteTextarea.focus();
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuc2hvcHBpbmctbGlzdC1ub3RlLXRvZ2dsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFakMsTUFBTUMsdUJBQXVCLFNBQVNELCtEQUFTLENBQUM7RUFBQUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUNqREMsS0FBSztJQUFBLEtBQ0xDLE9BQU87SUFBQSxLQUNQQyxvQkFBb0I7SUFBQSxLQUNwQkMsWUFBWTtJQUFBLEtBQ1pDLFdBQVcsR0FBRyxXQUFXO0VBQUE7RUFFekJDLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDTixLQUFLLEdBQWdCLElBQUksQ0FBQ08sc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLFlBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixJQUFJLENBQUNQLE9BQU8sR0FBZ0IsSUFBSSxDQUFDTSxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sWUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLElBQUksQ0FBQ04sb0JBQW9CLEdBQW9CLElBQUksQ0FBQ0ssc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLGNBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RyxJQUFJLENBQUNMLFlBQVksR0FBb0IsSUFBSSxDQUFDSSxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sb0JBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEcsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUVVQSxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxJQUFJLENBQUNULEtBQUssRUFBRTtNQUNaLElBQUksQ0FBQ0EsS0FBSyxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQVksSUFBSyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLENBQUM7SUFDL0U7RUFDSjtFQUVRQyxPQUFPQSxDQUFDRCxLQUFZLEVBQVE7SUFDaENBLEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUNkLEtBQUssRUFBRSxJQUFJLENBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUNDLG9CQUFvQixDQUFDLENBQUM7SUFDdkUsSUFBSSxDQUFDYSxhQUFhLENBQUMsQ0FBQztFQUN4QjtFQUVRRCxXQUFXQSxDQUFDRSxnQkFBK0IsRUFBUTtJQUN2REEsZ0JBQWdCLENBQUNDLE9BQU8sQ0FBRUMsT0FBTyxJQUFLO01BQ2xDQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQztJQUM5QyxDQUFDLENBQUM7RUFDTjtFQUVRVyxhQUFhQSxDQUFBLEVBQVM7SUFDMUIsSUFBSSxDQUFDWixZQUFZLENBQUNrQixLQUFLLENBQUMsQ0FBQztFQUM3QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vc3JjL1B5ei9ZdmVzL1Nob3BwaW5nTGlzdE5vdGVXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9zaG9wcGluZy1saXN0LW5vdGUtdG9nZ2xlci9zaG9wcGluZy1saXN0LW5vdGUtdG9nZ2xlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcHBpbmdMaXN0Tm90ZVRvZ2dsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBsYWJlbDogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHRyaWdnZXI6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBub3RlVGV4dEZpZWxkV3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIG5vdGVUZXh0YXJlYTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByb3RlY3RlZCBoaWRkZW5DbGFzcyA9ICdpcy1oaWRkZW4nO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFiZWwgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGFiZWxgKVswXTtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3RpdGxlYClbMF07XG4gICAgICAgIHRoaXMubm90ZVRleHRGaWVsZFdyYXBwZXIgPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3dyYXBwZXJgKVswXTtcbiAgICAgICAgdGhpcy5ub3RlVGV4dGFyZWEgPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX25vdGUtdGV4dGFyZWFgKVswXTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKFt0aGlzLmxhYmVsLCB0aGlzLnRyaWdnZXIsIHRoaXMubm90ZVRleHRGaWVsZFdyYXBwZXJdKTtcbiAgICAgICAgdGhpcy5mb2N1c1RleHRhcmVhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVDbGFzcyhlbGVtZW50c1RvVG9nZ2xlOiBIVE1MRWxlbWVudFtdKTogdm9pZCB7XG4gICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzVGV4dGFyZWEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm90ZVRleHRhcmVhLmZvY3VzKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlNob3BwaW5nTGlzdE5vdGVUb2dnbGVyIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJsYWJlbCIsInRyaWdnZXIiLCJub3RlVGV4dEZpZWxkV3JhcHBlciIsIm5vdGVUZXh0YXJlYSIsImhpZGRlbkNsYXNzIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwibWFwRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25DbGljayIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJmb2N1c1RleHRhcmVhIiwiZWxlbWVudHNUb1RvZ2dsZSIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9jdXMiXSwic291cmNlUm9vdCI6IiJ9