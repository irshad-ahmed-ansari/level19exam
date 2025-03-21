"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["toggler-checkbox"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQudG9nZ2xlci1jaGVja2JveC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ2UsTUFBTUMsZUFBZSxTQUFTRCx5REFBUyxDQUFDO0VBWW5ERSxXQUFXQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUMsQ0FBQztJQVpYO0FBQ0o7QUFDQTtJQUZJLEtBR1NDLE9BQU87SUFFaEI7QUFDSjtBQUNBO0lBRkksS0FHU0MsT0FBTztJQUFBLEtBQ05DLEtBQUs7SUFJWCxJQUFJLENBQUNGLE9BQU8sR0FBcUIsSUFBSSxDQUFDRyxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sY0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLElBQUksQ0FBQ0gsT0FBTyxHQUFrQkksS0FBSyxDQUFDQyxJQUFJLENBQ3BDLElBQUksQ0FBQ0MsZUFBZSxHQUNkQyxRQUFRLENBQUNMLHNCQUFzQixDQUFDLElBQUksQ0FBQ0ksZUFBZSxDQUFDO0lBQ3JEO0lBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDQyxjQUFjLENBQ3ZELENBQUM7RUFDTDtFQUVVQyxhQUFhQSxDQUFBLEVBQVMsQ0FBQztFQUV2QkMsSUFBSUEsQ0FBQSxFQUFTO0lBQ25CLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ2YsT0FBTyxDQUFDZ0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFHZCxLQUFZLElBQUssSUFBSSxDQUFDZSxjQUFjLENBQUNmLEtBQUssQ0FBQyxDQUFDO0VBQ3pGO0VBRVVlLGNBQWNBLENBQUNmLEtBQVksRUFBUTtJQUN6Q0EsS0FBSyxDQUFDZ0IsY0FBYyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQztJQUNiLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUM7RUFDMUI7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFDSUQsTUFBTUEsQ0FBQ00sUUFBaUIsRUFBd0I7SUFBQSxJQUF6Q0EsUUFBaUI7TUFBakJBLFFBQWlCLEdBQUcsSUFBSSxDQUFDQSxRQUFRO0lBQUE7SUFDcEMsSUFBSSxDQUFDbEIsT0FBTyxDQUFDbUIsT0FBTyxDQUFFQyxPQUFvQixJQUFLQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQ1UsYUFBYSxFQUFFSixRQUFRLENBQUMsQ0FBQztFQUMxRzs7RUFFQTtBQUNKO0FBQ0E7RUFDSUwsZUFBZUEsQ0FBQSxFQUFTO0lBQ3BCLElBQUksQ0FBQ1osS0FBSyxHQUFHLElBQUlzQixXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ3RDLElBQUksQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQztFQUNsQzs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJaUIsUUFBUUEsQ0FBQSxFQUFZO0lBQ3BCLE9BQU8sSUFBSSxDQUFDTyxtQkFBbUIsR0FBRyxJQUFJLENBQUMxQixPQUFPLENBQUMyQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMzQixPQUFPLENBQUMyQixPQUFPO0VBQ2xGOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJakIsY0FBY0EsQ0FBQSxFQUFXO0lBQ3pCLE9BQU8sSUFBSSxDQUFDVixPQUFPLENBQUM0QixZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDdkQ7RUFDQSxJQUFjckIsZUFBZUEsQ0FBQSxFQUFXO0lBQ3BDLE9BQU8sSUFBSSxDQUFDUCxPQUFPLENBQUM0QixZQUFZLENBQUMsbUJBQW1CLENBQUM7RUFDekQ7O0VBRUE7QUFDSjtBQUNBO0VBQ0ksSUFBSUwsYUFBYUEsQ0FBQSxFQUFXO0lBQ3hCLE9BQU8sSUFBSSxDQUFDdkIsT0FBTyxDQUFDNEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQ3ZEOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlGLG1CQUFtQkEsQ0FBQSxFQUFZO0lBQy9CLE9BQU8sSUFBSSxDQUFDMUIsT0FBTyxDQUFDNkIsWUFBWSxDQUFDLHdCQUF3QixDQUFDO0VBQzlEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1jaGVja2JveC90b2dnbGVyLWNoZWNrYm94LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQGV2ZW50IHRvZ2dsZSBBbiBldmVudCB3aGljaCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdHJpZ2dlciBlbGVtZW50IGlzIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZXJDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogRWxlbWVudCB0cmlnZ2VyaW5nIHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyaWdnZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBFbGVtZW50cyB0YXJnZXRlZCBieSB0aGUgdG9nZ2xlIGFjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBldmVudDogQ3VzdG9tRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdHJpZ2dlcmApWzBdO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKFxuICAgICAgICAgICAgdGhpcy50YXJnZXRDbGFzc05hbWVcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy50YXJnZXRDbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50YXJnZXRTZWxlY3RvciksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIHRoaXMuZmlyZVRvZ2dsZUV2ZW50KCk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UcmlnZ2VyQ2xpY2soZXZlbnQpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIHRoaXMuZmlyZVRvZ2dsZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgY2xhc3MgbmFtZXMgaW4gdGhlIHRhcmdldCBlbGVtZW50cy5cbiAgICAgKiBAcGFyYW0gYWRkQ2xhc3MgQSBib29sZWFuIHZhbHVlIHdoaWNoIGNoZWNrcyBpZiB0aGUgdHJpZ2dlciBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIHRvZ2dsZShhZGRDbGFzczogYm9vbGVhbiA9IHRoaXMuYWRkQ2xhc3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc1RvVG9nZ2xlLCBhZGRDbGFzcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBjdXN0b20gdG9nZ2xlIGV2ZW50IGFuZCB0cmlnZ2VycyBpdC5cbiAgICAgKi9cbiAgICBmaXJlVG9nZ2xlRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5ldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpZiB0aGUgdHJpZ2dlciBlbGVtZW50IGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgZ2V0IGFkZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRDbGFzc1doZW5DaGVja2VkID8gdGhpcy50cmlnZ2VyLmNoZWNrZWQgOiAhdGhpcy50cmlnZ2VyLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHF1ZXJ5U2VsZWN0b3Igb2YgdGhlIHRhcmdldCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIHRhcmdldENsYXNzTmFtZSgpIGluc3RlYWQuXG4gICAgICovXG4gICAgZ2V0IHRhcmdldFNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0QXR0cmlidXRlKCd0YXJnZXQtc2VsZWN0b3InKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCB0YXJnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ3RhcmdldC1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIGNsYXNzIG5hbWUgZm9yIHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBjbGFzc1RvVG9nZ2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBlbGVtZW50IHNob3VsZCBhZGQgdGhlIGNsYXNzIHdoZW4gY2hlY2tlZC5cbiAgICAgKi9cbiAgICBnZXQgYWRkQ2xhc3NXaGVuQ2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5oYXNBdHRyaWJ1dGUoJ2FkZC1jbGFzcy13aGVuLWNoZWNrZWQnKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiVG9nZ2xlckNoZWNrYm94IiwiY29uc3RydWN0b3IiLCJ0cmlnZ2VyIiwidGFyZ2V0cyIsImV2ZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsIkFycmF5IiwiZnJvbSIsInRhcmdldENsYXNzTmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRhcmdldFNlbGVjdG9yIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJ0b2dnbGUiLCJmaXJlVG9nZ2xlRXZlbnQiLCJtYXBFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwib25UcmlnZ2VyQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjbGFzc1RvVG9nZ2xlIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYWRkQ2xhc3NXaGVuQ2hlY2tlZCIsImNoZWNrZWQiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9