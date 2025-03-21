"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["toggler-hash"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-hash/toggler-hash.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-hash/toggler-hash.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TogglerHash)
/* harmony export */ });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class TogglerHash extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    /**
     * Elements targeted by the toggle action.
     */
    this.targets = void 0;
    this.targets = Array.from(this.targetClassName ? document.getElementsByClassName(this.targetClassName) :
    // eslint-disable-next-line deprecation/deprecation
    document.querySelectorAll(this.targetSelector));
  }
  readyCallback() {
    this.checkHash();
    this.mapEvents();
  }
  mapEvents() {
    window.addEventListener('hashchange', () => this.onHashChange());
  }
  onHashChange() {
    this.checkHash();
  }

  /**
   * Checks the hash and triggers the flexible toggle action.
   */
  checkHash() {
    if (this.triggerHash === this.hash) {
      this.toggle(this.addClassWhenHashInUrl);
      return;
    }
    this.toggle(!this.addClassWhenHashInUrl);
  }

  /**
   * Toggles the class names in the target elements.
   * @param addClass A boolean value for a more flexible toggling action.
   */
  toggle(addClass) {
    this.targets.forEach(target => target.classList.toggle(this.classToToggle, addClass));
  }

  /**
   * Gets the current page url.
   */
  get hash() {
    return window.location.hash;
  }

  /**
   * Gets the trigger hash.
   */
  get triggerHash() {
    return this.getAttribute('trigger-hash');
  }

  /**
   * Gets a querySelector of the target element.
   *
   * @deprecated Use targetClassName() instead.
   */
  get targetSelector() {
    return this.getAttribute('target-selector');
  }
  get targetClassName() {
    return this.getAttribute('target-class-name');
  }

  /**
   * Gets a class name for the toggle action.
   */
  get classToToggle() {
    return this.getAttribute('class-to-toggle');
  }

  /**
   * Gets if the element should add the class when in blur.
   */
  get addClassWhenHashInUrl() {
    return this.hasAttribute('add-class-when-hash-in-url');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQudG9nZ2xlci1oYXNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBRW5DLE1BQU1DLFdBQVcsU0FBU0QseURBQVMsQ0FBQztFQU0vQ0UsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDLENBQUM7SUFOWDtBQUNKO0FBQ0E7SUFGSSxLQUdTQyxPQUFPO0lBSVosSUFBSSxDQUFDQSxPQUFPLEdBQWtCQyxLQUFLLENBQUNDLElBQUksQ0FDcEMsSUFBSSxDQUFDQyxlQUFlLEdBQ2RDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsSUFBSSxDQUFDRixlQUFlLENBQUM7SUFDckQ7SUFDQUMsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNDLGNBQWMsQ0FDdkQsQ0FBQztFQUNMO0VBRVVDLGFBQWFBLENBQUEsRUFBUztJQUM1QixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUNwRTtFQUVVQSxZQUFZQSxDQUFBLEVBQVM7SUFDM0IsSUFBSSxDQUFDSixTQUFTLENBQUMsQ0FBQztFQUNwQjs7RUFFQTtBQUNKO0FBQ0E7RUFDSUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ2QsSUFBSSxJQUFJLENBQUNLLFdBQVcsS0FBSyxJQUFJLENBQUNDLElBQUksRUFBRTtNQUNoQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNDLHFCQUFxQixDQUFDO01BRXZDO0lBQ0o7SUFFQSxJQUFJLENBQUNELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQ0MscUJBQXFCLENBQUM7RUFDNUM7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFDSUQsTUFBTUEsQ0FBQ0UsUUFBaUIsRUFBUTtJQUM1QixJQUFJLENBQUNsQixPQUFPLENBQUNtQixPQUFPLENBQUVDLE1BQW1CLElBQUtBLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDTSxhQUFhLEVBQUVKLFFBQVEsQ0FBQyxDQUFDO0VBQ3hHOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlILElBQUlBLENBQUEsRUFBVztJQUNmLE9BQU9KLE1BQU0sQ0FBQ1ksUUFBUSxDQUFDUixJQUFJO0VBQy9COztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlELFdBQVdBLENBQUEsRUFBVztJQUN0QixPQUFPLElBQUksQ0FBQ1UsWUFBWSxDQUFDLGNBQWMsQ0FBQztFQUM1Qzs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksSUFBSWpCLGNBQWNBLENBQUEsRUFBVztJQUN6QixPQUFPLElBQUksQ0FBQ2lCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztFQUMvQztFQUNBLElBQWNyQixlQUFlQSxDQUFBLEVBQVc7SUFDcEMsT0FBTyxJQUFJLENBQUNxQixZQUFZLENBQUMsbUJBQW1CLENBQUM7RUFDakQ7O0VBRUE7QUFDSjtBQUNBO0VBQ0ksSUFBSUYsYUFBYUEsQ0FBQSxFQUFXO0lBQ3hCLE9BQU8sSUFBSSxDQUFDRSxZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDL0M7O0VBRUE7QUFDSjtBQUNBO0VBQ0ksSUFBSVAscUJBQXFCQSxDQUFBLEVBQVk7SUFDakMsT0FBTyxJQUFJLENBQUNRLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQztFQUMxRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3RvZ2dsZXItaGFzaC90b2dnbGVyLWhhc2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlckhhc2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEVsZW1lbnRzIHRhcmdldGVkIGJ5IHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldHM6IEhUTUxFbGVtZW50W107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0Q2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFyZ2V0U2VsZWN0b3IpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrSGFzaCgpO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4gdGhpcy5vbkhhc2hDaGFuZ2UoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSGFzaENoYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja0hhc2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlIGhhc2ggYW5kIHRyaWdnZXJzIHRoZSBmbGV4aWJsZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIGNoZWNrSGFzaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudHJpZ2dlckhhc2ggPT09IHRoaXMuaGFzaCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUodGhpcy5hZGRDbGFzc1doZW5IYXNoSW5VcmwpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZSghdGhpcy5hZGRDbGFzc1doZW5IYXNoSW5VcmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGNsYXNzIG5hbWVzIGluIHRoZSB0YXJnZXQgZWxlbWVudHMuXG4gICAgICogQHBhcmFtIGFkZENsYXNzIEEgYm9vbGVhbiB2YWx1ZSBmb3IgYSBtb3JlIGZsZXhpYmxlIHRvZ2dsaW5nIGFjdGlvbi5cbiAgICAgKi9cbiAgICB0b2dnbGUoYWRkQ2xhc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldDogSFRNTEVsZW1lbnQpID0+IHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3NUb1RvZ2dsZSwgYWRkQ2xhc3MpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHBhZ2UgdXJsLlxuICAgICAqL1xuICAgIGdldCBoYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0cmlnZ2VyIGhhc2guXG4gICAgICovXG4gICAgZ2V0IHRyaWdnZXJIYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHJpZ2dlci1oYXNoJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHF1ZXJ5U2VsZWN0b3Igb2YgdGhlIHRhcmdldCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIHRhcmdldENsYXNzTmFtZSgpIGluc3RlYWQuXG4gICAgICovXG4gICAgZ2V0IHRhcmdldFNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFyZ2V0LXNlbGVjdG9yJyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgdGFyZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFyZ2V0LWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgY2xhc3MgbmFtZSBmb3IgdGhlIHRvZ2dsZSBhY3Rpb24uXG4gICAgICovXG4gICAgZ2V0IGNsYXNzVG9Ub2dnbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBlbGVtZW50IHNob3VsZCBhZGQgdGhlIGNsYXNzIHdoZW4gaW4gYmx1ci5cbiAgICAgKi9cbiAgICBnZXQgYWRkQ2xhc3NXaGVuSGFzaEluVXJsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2FkZC1jbGFzcy13aGVuLWhhc2gtaW4tdXJsJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlRvZ2dsZXJIYXNoIiwiY29uc3RydWN0b3IiLCJ0YXJnZXRzIiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0Q2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXVlcnlTZWxlY3RvckFsbCIsInRhcmdldFNlbGVjdG9yIiwicmVhZHlDYWxsYmFjayIsImNoZWNrSGFzaCIsIm1hcEV2ZW50cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkhhc2hDaGFuZ2UiLCJ0cmlnZ2VySGFzaCIsImhhc2giLCJ0b2dnbGUiLCJhZGRDbGFzc1doZW5IYXNoSW5VcmwiLCJhZGRDbGFzcyIsImZvckVhY2giLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjbGFzc1RvVG9nZ2xlIiwibG9jYXRpb24iLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9