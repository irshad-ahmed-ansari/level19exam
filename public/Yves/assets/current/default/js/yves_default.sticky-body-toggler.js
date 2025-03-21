"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["sticky-body-toggler"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/sticky-body-toggler/sticky-body-toggler.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/sticky-body-toggler/sticky-body-toggler.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyBodyToggler)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class StickyBodyToggler extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
    this.body = void 0;
  }
  readyCallback() {}
  init() {
    this.triggers = Array.from(document.getElementsByClassName(this.triggerClassName));
    this.body = document.body;
    this.mapEvents();
  }
  mapEvents() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', () => this.toggleStickyBody());
    });
  }
  toggleStickyBody() {
    var isBodySticky = this.body.classList.contains(this.classToFixBody);
    if (isBodySticky) {
      var scrollToVal = parseInt(this.body.dataset.scrollTo);
      this.body.style.top = '0';
      this.body.classList.remove(this.classToFixBody);
      window.scrollTo(0, scrollToVal);
      return;
    }
    var offset = window.scrollY;
    this.body.style.top = -offset + "px";
    this.body.classList.add(this.classToFixBody);
    this.body.dataset.scrollTo = offset.toString();
  }
  get triggerClassName() {
    return this.getAttribute('trigger-class-name');
  }
  get classToFixBody() {
    return this.getAttribute('class-to-fix-body');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuc3RpY2t5LWJvZHktdG9nZ2xlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUVqQyxNQUFNQyxpQkFBaUIsU0FBU0QsK0RBQVMsQ0FBQztFQUFBRSxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQzNDQyxRQUFRO0lBQUEsS0FDUkMsSUFBSTtFQUFBO0VBRUpDLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDSCxRQUFRLEdBQWtCSSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7SUFDakcsSUFBSSxDQUFDUCxJQUFJLEdBQWdCSyxRQUFRLENBQUNMLElBQUk7SUFDdEMsSUFBSSxDQUFDUSxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUVVQSxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDVCxRQUFRLENBQUNVLE9BQU8sQ0FBRUMsT0FBb0IsSUFBSztNQUM1Q0EsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUM7RUFDTjtFQUVVQSxnQkFBZ0JBLENBQUEsRUFBUztJQUMvQixJQUFNQyxZQUFZLEdBQUcsSUFBSSxDQUFDYixJQUFJLENBQUNjLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ0MsY0FBYyxDQUFDO0lBRXRFLElBQUlILFlBQVksRUFBRTtNQUNkLElBQU1JLFdBQVcsR0FBR0MsUUFBUSxDQUFDLElBQUksQ0FBQ2xCLElBQUksQ0FBQ21CLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO01BRXhELElBQUksQ0FBQ3BCLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEdBQUc7TUFDekIsSUFBSSxDQUFDdEIsSUFBSSxDQUFDYyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxJQUFJLENBQUNQLGNBQWMsQ0FBQztNQUMvQ1EsTUFBTSxDQUFDSixRQUFRLENBQUMsQ0FBQyxFQUFFSCxXQUFXLENBQUM7TUFFL0I7SUFDSjtJQUVBLElBQU1RLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxPQUFPO0lBRTdCLElBQUksQ0FBQzFCLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ0MsR0FBRyxHQUFNLENBQUNHLE1BQU0sT0FBSTtJQUNwQyxJQUFJLENBQUN6QixJQUFJLENBQUNjLFNBQVMsQ0FBQ2EsR0FBRyxDQUFDLElBQUksQ0FBQ1gsY0FBYyxDQUFDO0lBQzVDLElBQUksQ0FBQ2hCLElBQUksQ0FBQ21CLE9BQU8sQ0FBQ0MsUUFBUSxHQUFHSyxNQUFNLENBQUNHLFFBQVEsQ0FBQyxDQUFDO0VBQ2xEO0VBRUEsSUFBY3JCLGdCQUFnQkEsQ0FBQSxFQUFXO0lBQ3JDLE9BQU8sSUFBSSxDQUFDc0IsWUFBWSxDQUFDLG9CQUFvQixDQUFDO0VBQ2xEO0VBRUEsSUFBY2IsY0FBY0EsQ0FBQSxFQUFXO0lBQ25DLE9BQU8sSUFBSSxDQUFDYSxZQUFZLENBQUMsbUJBQW1CLENBQUM7RUFDakQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3NyYy9QeXovWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9zdGlja3ktYm9keS10b2dnbGVyL3N0aWNreS1ib2R5LXRvZ2dsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreUJvZHlUb2dnbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcnM6IEhUTUxFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIGJvZHk6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy50cmlnZ2VyQ2xhc3NOYW1lKSk7XG4gICAgICAgIHRoaXMuYm9keSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUJvZHkoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b2dnbGVTdGlja3lCb2R5KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc0JvZHlTdGlja3kgPSB0aGlzLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3NUb0ZpeEJvZHkpO1xuXG4gICAgICAgIGlmIChpc0JvZHlTdGlja3kpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvVmFsID0gcGFyc2VJbnQodGhpcy5ib2R5LmRhdGFzZXQuc2Nyb2xsVG8pO1xuXG4gICAgICAgICAgICB0aGlzLmJvZHkuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc1RvRml4Qm9keSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsVG9WYWwpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICB0aGlzLmJvZHkuc3R5bGUudG9wID0gYCR7LW9mZnNldH1weGA7XG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NUb0ZpeEJvZHkpO1xuICAgICAgICB0aGlzLmJvZHkuZGF0YXNldC5zY3JvbGxUbyA9IG9mZnNldC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdHJpZ2dlckNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyaWdnZXItY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgY2xhc3NUb0ZpeEJvZHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by1maXgtYm9keScpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJTdGlja3lCb2R5VG9nZ2xlciIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwidHJpZ2dlcnMiLCJib2R5IiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmlnZ2VyQ2xhc3NOYW1lIiwibWFwRXZlbnRzIiwiZm9yRWFjaCIsInRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlU3RpY2t5Qm9keSIsImlzQm9keVN0aWNreSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xhc3NUb0ZpeEJvZHkiLCJzY3JvbGxUb1ZhbCIsInBhcnNlSW50IiwiZGF0YXNldCIsInNjcm9sbFRvIiwic3R5bGUiLCJ0b3AiLCJyZW1vdmUiLCJ3aW5kb3ciLCJvZmZzZXQiLCJzY3JvbGxZIiwiYWRkIiwidG9TdHJpbmciLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9