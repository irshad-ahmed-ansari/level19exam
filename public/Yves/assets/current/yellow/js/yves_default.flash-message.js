"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["flash-message"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/flash-message/flash-message.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/flash-message/flash-message.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashMessage)
/* harmony export */ });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class FlashMessage extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    /**
     * Default flash message show duration.
     */
    this.defaultDuration = 5000;
    /**
     * The id of flash message timeout.
     */
    this.durationTimeoutId = void 0;
  }
  readyCallback() {
    this.mapEvents();
    window.setTimeout(() => this.showFor(this.defaultDuration));
  }
  mapEvents() {
    this.addEventListener('click', event => this.onClick(event));
  }
  onClick(event) {
    event.preventDefault();
    this.hide();
  }

  /**
   * Shows the flash message during the time set.
   * @param duration A number value which defines the period of time for which the flash message is shown.
   */
  showFor(duration) {
    this.classList.add(this.name + "--show");
    this.durationTimeoutId = window.setTimeout(() => this.hide(), duration);
  }

  /**
   * Hides the flash message.
   */
  hide() {
    clearTimeout(this.durationTimeoutId);
    this.classList.remove(this.name + "--show");
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuZmxhc2gtbWVzc2FnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUVuQyxNQUFNQyxZQUFZLFNBQVNELHlEQUFTLENBQUM7RUFBQUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFDaEQ7QUFDSjtBQUNBO0lBRkksS0FHU0MsZUFBZSxHQUFXLElBQUk7SUFFdkM7QUFDSjtBQUNBO0lBRkksS0FHQUMsaUJBQWlCO0VBQUE7RUFFUEMsYUFBYUEsQ0FBQSxFQUFTO0lBQzVCLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDaEJDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDTixlQUFlLENBQUMsQ0FBQztFQUMvRDtFQUVVRyxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQVksSUFBSyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLENBQUM7RUFDekU7RUFFVUMsT0FBT0EsQ0FBQ0QsS0FBWSxFQUFRO0lBQ2xDQSxLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDZjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtFQUNJTCxPQUFPQSxDQUFDTSxRQUFnQixFQUFFO0lBQ3RCLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUksSUFBSSxDQUFDQyxJQUFJLFdBQVEsQ0FBQztJQUN4QyxJQUFJLENBQUNkLGlCQUFpQixHQUFHRyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQ00sSUFBSSxDQUFDLENBQUMsRUFBRUMsUUFBUSxDQUFDO0VBQzNFOztFQUVBO0FBQ0o7QUFDQTtFQUNJRCxJQUFJQSxDQUFBLEVBQUc7SUFDSEssWUFBWSxDQUFDLElBQUksQ0FBQ2YsaUJBQWlCLENBQUM7SUFDcEMsSUFBSSxDQUFDWSxTQUFTLENBQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUNGLElBQUksV0FBUSxDQUFDO0VBQy9DO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvZmxhc2gtbWVzc2FnZS9mbGFzaC1tZXNzYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBmbGFzaCBtZXNzYWdlIHNob3cgZHVyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVmYXVsdER1cmF0aW9uOiBudW1iZXIgPSA1MDAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIGZsYXNoIG1lc3NhZ2UgdGltZW91dC5cbiAgICAgKi9cbiAgICBkdXJhdGlvblRpbWVvdXRJZDogbnVtYmVyO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd0Zvcih0aGlzLmRlZmF1bHREdXJhdGlvbikpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgdGhlIGZsYXNoIG1lc3NhZ2UgZHVyaW5nIHRoZSB0aW1lIHNldC5cbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gQSBudW1iZXIgdmFsdWUgd2hpY2ggZGVmaW5lcyB0aGUgcGVyaW9kIG9mIHRpbWUgZm9yIHdoaWNoIHRoZSBmbGFzaCBtZXNzYWdlIGlzIHNob3duLlxuICAgICAqL1xuICAgIHNob3dGb3IoZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5uYW1lfS0tc2hvd2ApO1xuICAgICAgICB0aGlzLmR1cmF0aW9uVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlKCksIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBoaWRlKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kdXJhdGlvblRpbWVvdXRJZCk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShgJHt0aGlzLm5hbWV9LS1zaG93YCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkZsYXNoTWVzc2FnZSIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiZGVmYXVsdER1cmF0aW9uIiwiZHVyYXRpb25UaW1lb3V0SWQiLCJyZWFkeUNhbGxiYWNrIiwibWFwRXZlbnRzIiwid2luZG93Iiwic2V0VGltZW91dCIsInNob3dGb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvbkNsaWNrIiwicHJldmVudERlZmF1bHQiLCJoaWRlIiwiZHVyYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJuYW1lIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==