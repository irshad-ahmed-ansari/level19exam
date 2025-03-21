"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["toggler-radio"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio.ts":
/*!***********************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TogglerRadio)
/* harmony export */ });
/* harmony import */ var ShopUi_components_molecules_toggler_checkbox_toggler_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/components/molecules/toggler-checkbox/toggler-checkbox */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts");

class TogglerRadio extends ShopUi_components_molecules_toggler_checkbox_toggler_checkbox__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    // eslint-disable-next-line no-use-before-define
    this.togglers = void 0;
  }
  init() {
    this.togglers = Array.from(document.querySelectorAll(this.name + "[group-name=\"" + this.groupName + "\"]"));
    super.init();
  }
  onTriggerClick(event) {
    event.preventDefault();
    this.toggleAll();
  }
  toggleAll() {
    this.togglers.forEach(toggler => {
      toggler.toggle(toggler.addClass);
    });
  }
  get groupName() {
    return this.getAttribute('group-name');
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TogglerCheckbox)
/* harmony export */ });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");


/**
 * @event toggle An event which is triggered when the trigger element is changed.
 */
class TogglerCheckbox extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    /**
     * Element triggering the toggle action.
     */
    this.trigger = void 0;
    /**
     * Elements targeted by the toggle action.
     */
    this.targets = void 0;
    this.event = void 0;
    this.trigger = this.getElementsByClassName(this.jsName + "__trigger")[0];
    this.targets = Array.from(this.targetClassName ? document.getElementsByClassName(this.targetClassName) :
    // eslint-disable-next-line deprecation/deprecation
    document.querySelectorAll(this.targetSelector));
  }
  readyCallback() {}
  init() {
    this.toggle();
    this.fireToggleEvent();
    this.mapEvents();
  }
  mapEvents() {
    this.trigger.addEventListener('change', event => this.onTriggerClick(event));
  }
  onTriggerClick(event) {
    event.preventDefault();
    this.toggle();
    this.fireToggleEvent();
  }

  /**
   * Toggles the class names in the target elements.
   * @param addClass A boolean value which checks if the trigger is checked.
   */
  toggle(addClass) {
    if (addClass === void 0) {
      addClass = this.addClass;
    }
    this.targets.forEach(element => element.classList.toggle(this.classToToggle, addClass));
  }

  /**
   *  Creates an instance of the custom toggle event and triggers it.
   */
  fireToggleEvent() {
    this.event = new CustomEvent('toggle');
    this.dispatchEvent(this.event);
  }

  /**
   * Gets if the trigger element is checked.
   */
  get addClass() {
    return this.addClassWhenChecked ? this.trigger.checked : !this.trigger.checked;
  }

  /**
   * Gets a querySelector of the target element.
   *
   * @deprecated Use targetClassName() instead.
   */
  get targetSelector() {
    return this.trigger.getAttribute('target-selector');
  }
  get targetClassName() {
    return this.trigger.getAttribute('target-class-name');
  }

  /**
   * Gets a class name for the toggle action.
   */
  get classToToggle() {
    return this.trigger.getAttribute('class-to-toggle');
  }

  /**
   * Gets if the element should add the class when checked.
   */
  get addClassWhenChecked() {
    return this.trigger.hasAttribute('add-class-when-checked');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztFQUMxRzs7RUFFQTtBQUNKO0FBQ0E7RUFDSVUsZUFBZUEsQ0FBQSxFQUFTO0lBQ3BCLElBQUksQ0FBQ2hCLEtBQUssR0FBRyxJQUFJc0IsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUN0QyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUN2QixLQUFLLENBQUM7RUFDbEM7O0VBRUE7QUFDSjtBQUNBO0VBQ0ksSUFBSU0sUUFBUUEsQ0FBQSxFQUFZO0lBQ3BCLE9BQU8sSUFBSSxDQUFDa0IsbUJBQW1CLEdBQUcsSUFBSSxDQUFDZixPQUFPLENBQUNnQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUNoQixPQUFPLENBQUNnQixPQUFPO0VBQ2xGOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJWCxjQUFjQSxDQUFBLEVBQVc7SUFDekIsT0FBTyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0YsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQ3ZEO0VBQ0EsSUFBY00sZUFBZUEsQ0FBQSxFQUFXO0lBQ3BDLE9BQU8sSUFBSSxDQUFDSixPQUFPLENBQUNGLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztFQUN6RDs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJYyxhQUFhQSxDQUFBLEVBQVc7SUFDeEIsT0FBTyxJQUFJLENBQUNaLE9BQU8sQ0FBQ0YsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQ3ZEOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlpQixtQkFBbUJBLENBQUEsRUFBWTtJQUMvQixPQUFPLElBQUksQ0FBQ2YsT0FBTyxDQUFDaUIsWUFBWSxDQUFDLHdCQUF3QixDQUFDO0VBQzlEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1yYWRpby90b2dnbGVyLXJhZGlvLnRzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy90b2dnbGVyLWNoZWNrYm94L3RvZ2dsZXItY2hlY2tib3gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZ2dsZXJDaGVja2JveCBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1jaGVja2JveC90b2dnbGVyLWNoZWNrYm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlclJhZGlvIGV4dGVuZHMgVG9nZ2xlckNoZWNrYm94IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBwcm90ZWN0ZWQgdG9nZ2xlcnM6IFRvZ2dsZXJSYWRpb1tdO1xuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlcnMgPSA8VG9nZ2xlclJhZGlvW10+KFxuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3RoaXMubmFtZX1bZ3JvdXAtbmFtZT1cIiR7dGhpcy5ncm91cE5hbWV9XCJdYCkpXG4gICAgICAgICk7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlQWxsKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZXJzLmZvckVhY2goKHRvZ2dsZXI6IFRvZ2dsZXJSYWRpbykgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlci50b2dnbGUodG9nZ2xlci5hZGRDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZ3JvdXBOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQGV2ZW50IHRvZ2dsZSBBbiBldmVudCB3aGljaCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdHJpZ2dlciBlbGVtZW50IGlzIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZXJDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogRWxlbWVudCB0cmlnZ2VyaW5nIHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyaWdnZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBFbGVtZW50cyB0YXJnZXRlZCBieSB0aGUgdG9nZ2xlIGFjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBldmVudDogQ3VzdG9tRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdHJpZ2dlcmApWzBdO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKFxuICAgICAgICAgICAgdGhpcy50YXJnZXRDbGFzc05hbWVcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy50YXJnZXRDbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50YXJnZXRTZWxlY3RvciksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIHRoaXMuZmlyZVRvZ2dsZUV2ZW50KCk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UcmlnZ2VyQ2xpY2soZXZlbnQpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIHRoaXMuZmlyZVRvZ2dsZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgY2xhc3MgbmFtZXMgaW4gdGhlIHRhcmdldCBlbGVtZW50cy5cbiAgICAgKiBAcGFyYW0gYWRkQ2xhc3MgQSBib29sZWFuIHZhbHVlIHdoaWNoIGNoZWNrcyBpZiB0aGUgdHJpZ2dlciBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIHRvZ2dsZShhZGRDbGFzczogYm9vbGVhbiA9IHRoaXMuYWRkQ2xhc3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc1RvVG9nZ2xlLCBhZGRDbGFzcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBjdXN0b20gdG9nZ2xlIGV2ZW50IGFuZCB0cmlnZ2VycyBpdC5cbiAgICAgKi9cbiAgICBmaXJlVG9nZ2xlRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5ldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpZiB0aGUgdHJpZ2dlciBlbGVtZW50IGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgZ2V0IGFkZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRDbGFzc1doZW5DaGVja2VkID8gdGhpcy50cmlnZ2VyLmNoZWNrZWQgOiAhdGhpcy50cmlnZ2VyLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHF1ZXJ5U2VsZWN0b3Igb2YgdGhlIHRhcmdldCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIHRhcmdldENsYXNzTmFtZSgpIGluc3RlYWQuXG4gICAgICovXG4gICAgZ2V0IHRhcmdldFNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0QXR0cmlidXRlKCd0YXJnZXQtc2VsZWN0b3InKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCB0YXJnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ3RhcmdldC1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIGNsYXNzIG5hbWUgZm9yIHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBjbGFzc1RvVG9nZ2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBlbGVtZW50IHNob3VsZCBhZGQgdGhlIGNsYXNzIHdoZW4gY2hlY2tlZC5cbiAgICAgKi9cbiAgICBnZXQgYWRkQ2xhc3NXaGVuQ2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5oYXNBdHRyaWJ1dGUoJ2FkZC1jbGFzcy13aGVuLWNoZWNrZWQnKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiVG9nZ2xlckNoZWNrYm94IiwiVG9nZ2xlclJhZGlvIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJ0b2dnbGVycyIsImluaXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYW1lIiwiZ3JvdXBOYW1lIiwib25UcmlnZ2VyQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQWxsIiwiZm9yRWFjaCIsInRvZ2dsZXIiLCJ0b2dnbGUiLCJhZGRDbGFzcyIsImdldEF0dHJpYnV0ZSIsIkNvbXBvbmVudCIsInRyaWdnZXIiLCJ0YXJnZXRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsInRhcmdldENsYXNzTmFtZSIsInRhcmdldFNlbGVjdG9yIiwicmVhZHlDYWxsYmFjayIsImZpcmVUb2dnbGVFdmVudCIsIm1hcEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiY2xhc3NUb1RvZ2dsZSIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImFkZENsYXNzV2hlbkNoZWNrZWQiLCJjaGVja2VkIiwiaGFzQXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==