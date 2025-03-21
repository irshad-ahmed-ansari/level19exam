"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["toggler-accordion"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-accordion/toggler-accordion.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-accordion/toggler-accordion.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TogglerAccordion)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class TogglerAccordion extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.wrap = void 0;
    this.triggers = void 0;
    this.isTouch = void 0;
  }
  readyCallback() {}
  init() {
    this.wrap = document.getElementsByClassName(this.wrapClassName)[0];
    this.triggers = Array.from(document.getElementsByClassName(this.triggerClassName));
    this.isTouch = 'ontouchstart' in window;
    this.mapEvents();
  }
  mapEvents() {
    this.wrap.addEventListener('click', event => this.onTriggerClick(event));
  }
  onTriggerClick(event) {
    if (this.isTouchScreen) {
      if (this.isTouch) {
        this.initializeClick(event);
      }
    } else {
      this.initializeClick(event);
    }
  }
  initializeClick(event) {
    this.triggers.some(trigger => {
      var target = event.target;
      while (target !== this.wrap) {
        if (target === trigger) {
          event.preventDefault();
          this.toggle(trigger);
          return true;
        }
        target = target.parentNode;
      }
    });
  }
  toggle(activeTrigger) {
    var isTriggerActive = activeTrigger.classList.contains(this.triggerActiveClass);
    activeTrigger.classList.toggle(this.triggerActiveClass, !isTriggerActive);
    this.targetToggle(activeTrigger);
  }
  targetToggle(target) {
    var targets = Array.from(document.querySelectorAll(target.dataset.toggleTarget));
    targets.forEach(element => {
      var isTargetActive = !element.classList.contains(this.classToToggle);
      element.classList.toggle(this.classToToggle, isTargetActive);
    });
  }
  get wrapClassName() {
    return this.getAttribute('wrap-class-name');
  }
  get triggerClassName() {
    return this.getAttribute('trigger-class-name');
  }
  get classToToggle() {
    return this.getAttribute('class-to-toggle');
  }
  get triggerActiveClass() {
    return this.getAttribute('active-class');
  }
  get isTouchScreen() {
    return this.touchRules === 'true';
  }
  get touchRules() {
    return this.getAttribute('active-on-touch');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFBLEVBQVc7SUFDbEMsT0FBTyxJQUFJLENBQUMrQixZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDL0M7RUFFQSxJQUFjNUIsZ0JBQWdCQSxDQUFBLEVBQVc7SUFDckMsT0FBTyxJQUFJLENBQUM0QixZQUFZLENBQUMsb0JBQW9CLENBQUM7RUFDbEQ7RUFFQSxJQUFjRCxhQUFhQSxDQUFBLEVBQVc7SUFDbEMsT0FBTyxJQUFJLENBQUNDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztFQUMvQztFQUVBLElBQWNWLGtCQUFrQkEsQ0FBQSxFQUFXO0lBQ3ZDLE9BQU8sSUFBSSxDQUFDVSxZQUFZLENBQUMsY0FBYyxDQUFDO0VBQzVDO0VBRUEsSUFBY3RCLGFBQWFBLENBQUEsRUFBWTtJQUNuQyxPQUFPLElBQUksQ0FBQ3VCLFVBQVUsS0FBSyxNQUFNO0VBQ3JDO0VBRUEsSUFBY0EsVUFBVUEsQ0FBQSxFQUFXO0lBQy9CLE9BQU8sSUFBSSxDQUFDRCxZQUFZLENBQUMsaUJBQWlCLENBQUM7RUFDL0M7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3NyYy9QeXovWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy90b2dnbGVyLWFjY29yZGlvbi90b2dnbGVyLWFjY29yZGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlckFjY29yZGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHdyYXA6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCB0cmlnZ2VyczogSFRNTEVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgaXNUb3VjaDogYm9vbGVhbjtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLndyYXAgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLndyYXBDbGFzc05hbWUpWzBdO1xuICAgICAgICB0aGlzLnRyaWdnZXJzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudHJpZ2dlckNsYXNzTmFtZSkpO1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLndyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uVHJpZ2dlckNsaWNrKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uVHJpZ2dlckNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ2xpY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpemVDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5zb21lKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG5cbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgIT09IHRoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGUodHJpZ2dlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldCA9IDxIVE1MRWxlbWVudD50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRvZ2dsZShhY3RpdmVUcmlnZ2VyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc1RyaWdnZXJBY3RpdmUgPSBhY3RpdmVUcmlnZ2VyLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRyaWdnZXJBY3RpdmVDbGFzcyk7XG4gICAgICAgIGFjdGl2ZVRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnRyaWdnZXJBY3RpdmVDbGFzcywgIWlzVHJpZ2dlckFjdGl2ZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0VG9nZ2xlKGFjdGl2ZVRyaWdnZXIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0YXJnZXRUb2dnbGUodGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldC5kYXRhc2V0LnRvZ2dsZVRhcmdldCkpO1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1RhcmdldEFjdGl2ZSA9ICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzVG9Ub2dnbGUpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3NUb1RvZ2dsZSwgaXNUYXJnZXRBY3RpdmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHdyYXBDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd3cmFwLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHRyaWdnZXJDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0cmlnZ2VyLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNsYXNzVG9Ub2dnbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHRyaWdnZXJBY3RpdmVDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FjdGl2ZS1jbGFzcycpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaXNUb3VjaFNjcmVlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG91Y2hSdWxlcyA9PT0gJ3RydWUnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdG91Y2hSdWxlcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FjdGl2ZS1vbi10b3VjaCcpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJUb2dnbGVyQWNjb3JkaW9uIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJ3cmFwIiwidHJpZ2dlcnMiLCJpc1RvdWNoIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ3cmFwQ2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwidHJpZ2dlckNsYXNzTmFtZSIsIndpbmRvdyIsIm1hcEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uVHJpZ2dlckNsaWNrIiwiaXNUb3VjaFNjcmVlbiIsImluaXRpYWxpemVDbGljayIsInNvbWUiLCJ0cmlnZ2VyIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJwYXJlbnROb2RlIiwiYWN0aXZlVHJpZ2dlciIsImlzVHJpZ2dlckFjdGl2ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidHJpZ2dlckFjdGl2ZUNsYXNzIiwidGFyZ2V0VG9nZ2xlIiwidGFyZ2V0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRhc2V0IiwidG9nZ2xlVGFyZ2V0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpc1RhcmdldEFjdGl2ZSIsImNsYXNzVG9Ub2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJ0b3VjaFJ1bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==