"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["navigation-multilevel"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/navigation-multilevel/navigation-multilevel.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/navigation-multilevel/navigation-multilevel.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationMultilevel)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_main_overlay_main_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/components/molecules/main-overlay/main-overlay */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/main-overlay/main-overlay.ts");


class NavigationMultilevel extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.overlay = void 0;
    this.triggers = void 0;
    this.touchTriggers = void 0;
    this.eventShowOverlay = void 0;
    this.eventHideOverlay = void 0;
  }
  readyCallback() {}
  init() {
    this.overlay = document.getElementsByClassName(this.overlayBlockClassName)[0];
    this.triggers = Array.from(this.getElementsByClassName(this.jsName + "__trigger"));
    this.touchTriggers = Array.from(this.getElementsByClassName(this.jsName + "__touch-trigger"));
    this.mapEvents();
    this.addReverseClassToDropDownMenu();
  }
  mapEvents() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('mouseover', event => this.onTriggerOver(event));
    });
    this.triggers.forEach(trigger => {
      trigger.addEventListener('mouseout', event => this.onTriggerOut(event));
    });
    this.touchTriggers.forEach(trigger => {
      trigger.addEventListener('click', event => this.onTriggerClick(event));
    });
    this.mapOverlayEvents();
  }
  addReverseClassToDropDownMenu() {
    this.triggers.forEach(trigger => {
      var dropItem = trigger.getElementsByClassName(this.jsName + "__wrapper")[0];
      if (!dropItem) {
        return;
      }
      if (this.isDropMenuReverse(trigger, dropItem)) {
        dropItem.classList.add(this.reverseClassName);
      }
    });
  }
  onTriggerOver(event) {
    if (this.isWidthMoreThanAvailableBreakpoint()) {
      var trigger = event.currentTarget;
      event.preventDefault();
      this.toggleOverlay(true);
      trigger.classList.add(this.classToToggle);
    }
  }
  onTriggerOut(event) {
    if (this.isWidthMoreThanAvailableBreakpoint()) {
      var trigger = event.currentTarget;
      event.preventDefault();
      this.toggleOverlay(false);
      trigger.classList.remove(this.classToToggle);
    }
  }
  onTriggerClick(event) {
    if (!this.isWidthMoreThanAvailableBreakpoint()) {
      var trigger = event.currentTarget;
      var contentToShowSelector = this.getDataAttribute(trigger, 'data-toggle-target');
      var contentToggleClass = this.getDataAttribute(trigger, 'data-class-to-toggle');
      var closestParentNode = trigger.closest("." + this.jsName + "__item");
      var contentToShow = closestParentNode.querySelector(contentToShowSelector);
      contentToShow.classList.toggle(contentToggleClass);
      trigger.classList.toggle('is-active');
    }
  }
  mapOverlayEvents() {
    var overlayConfig = {
      bubbles: true,
      detail: {
        id: this.name,
        zIndex: Number(getComputedStyle(this).zIndex) - 1
      }
    };
    this.eventShowOverlay = new CustomEvent(ShopUi_components_molecules_main_overlay_main_overlay__WEBPACK_IMPORTED_MODULE_1__.EVENT_SHOW_OVERLAY, overlayConfig);
    this.eventHideOverlay = new CustomEvent(ShopUi_components_molecules_main_overlay_main_overlay__WEBPACK_IMPORTED_MODULE_1__.EVENT_HIDE_OVERLAY, overlayConfig);
  }
  toggleOverlay(isShown) {
    this.dispatchEvent(isShown ? this.eventShowOverlay : this.eventHideOverlay);
  }
  isDropMenuReverse(trigger, dropItem) {
    var leftPositionToTheMenuItem = trigger.offsetLeft;
    var windowWidth = window.innerWidth;
    var dropItemWidth = dropItem ? dropItem.offsetWidth : 0;
    return windowWidth - leftPositionToTheMenuItem < dropItemWidth;
  }
  isWidthMoreThanAvailableBreakpoint() {
    return window.innerWidth >= this.availableBreakpoint;
  }
  getDataAttribute(block, attr) {
    return block.getAttribute(attr);
  }
  get classToToggle() {
    return this.getAttribute('class-to-toggle');
  }
  get availableBreakpoint() {
    return Number(this.getAttribute('available-breakpoint'));
  }
  get overlayBlockClassName() {
    return this.getAttribute('overlay-block-class-name');
  }
  get reverseClassName() {
    return this.getAttribute('reverse-class-name');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQubmF2aWdhdGlvbi1tdWx0aWxldmVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUtlO0FBRWhELE1BQU1HLG9CQUFvQixTQUFTSCwrREFBUyxDQUFDO0VBQUFJLFlBQUE7SUFBQSxTQUFBQyxTQUFBO0lBQUEsS0FDOUNDLE9BQU87SUFBQSxLQUNQQyxRQUFRO0lBQUEsS0FDUkMsYUFBYTtJQUFBLEtBQ2JDLGdCQUFnQjtJQUFBLEtBQ2hCQyxnQkFBZ0I7RUFBQTtFQUVoQkMsYUFBYUEsQ0FBQSxFQUFTLENBQUM7RUFFdkJDLElBQUlBLENBQUEsRUFBUztJQUNuQixJQUFJLENBQUNOLE9BQU8sR0FBZ0JPLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRixJQUFJLENBQUNSLFFBQVEsR0FBa0JTLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsc0JBQXNCLENBQUksSUFBSSxDQUFDSSxNQUFNLGNBQVcsQ0FBQyxDQUFDO0lBQ2pHLElBQUksQ0FBQ1YsYUFBYSxHQUFrQlEsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDSCxzQkFBc0IsQ0FBSSxJQUFJLENBQUNJLE1BQU0sb0JBQWlCLENBQUMsQ0FBQztJQUU1RyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQ0MsNkJBQTZCLENBQUMsQ0FBQztFQUN4QztFQUVVRCxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDWixRQUFRLENBQUNjLE9BQU8sQ0FBRUMsT0FBb0IsSUFBSztNQUM1Q0EsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUdDLEtBQVksSUFBSyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDLENBQUM7SUFDdEYsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDakIsUUFBUSxDQUFDYyxPQUFPLENBQUVDLE9BQW9C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QUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQztFQUM1RDtFQUVBLElBQWN0RCxxQkFBcUJBLENBQUEsRUFBVztJQUMxQyxPQUFPLElBQUksQ0FBQ3NELFlBQVksQ0FBQywwQkFBMEIsQ0FBQztFQUN4RDtFQUVBLElBQWNwQyxnQkFBZ0JBLENBQUEsRUFBVztJQUNyQyxPQUFPLElBQUksQ0FBQ29DLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztFQUNsRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vc3JjL1B5ei9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL25hdmlnYXRpb24tbXVsdGlsZXZlbC9uYXZpZ2F0aW9uLW11bHRpbGV2ZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIEVWRU5UX0hJREVfT1ZFUkxBWSxcbiAgICBFVkVOVF9TSE9XX09WRVJMQVksXG4gICAgT3ZlcmxheUV2ZW50RGV0YWlsLFxufSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvbWFpbi1vdmVybGF5L21haW4tb3ZlcmxheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25NdWx0aWxldmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHRyaWdnZXJzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCB0b3VjaFRyaWdnZXJzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBldmVudFNob3dPdmVybGF5OiBDdXN0b21FdmVudDxPdmVybGF5RXZlbnREZXRhaWw+O1xuICAgIHByb3RlY3RlZCBldmVudEhpZGVPdmVybGF5OiBDdXN0b21FdmVudDxPdmVybGF5RXZlbnREZXRhaWw+O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMub3ZlcmxheUJsb2NrQ2xhc3NOYW1lKVswXTtcbiAgICAgICAgdGhpcy50cmlnZ2VycyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdHJpZ2dlcmApKTtcbiAgICAgICAgdGhpcy50b3VjaFRyaWdnZXJzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X190b3VjaC10cmlnZ2VyYCkpO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYWRkUmV2ZXJzZUNsYXNzVG9Ecm9wRG93bk1lbnUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UcmlnZ2VyT3ZlcihldmVudCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UcmlnZ2VyT3V0KGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvdWNoVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uVHJpZ2dlckNsaWNrKGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcE92ZXJsYXlFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkUmV2ZXJzZUNsYXNzVG9Ecm9wRG93bk1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyb3BJdGVtID0gPEhUTUxFbGVtZW50PnRyaWdnZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3dyYXBwZXJgKVswXTtcblxuICAgICAgICAgICAgaWYgKCFkcm9wSXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcm9wTWVudVJldmVyc2UodHJpZ2dlciwgZHJvcEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgZHJvcEl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLnJldmVyc2VDbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyT3ZlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNXaWR0aE1vcmVUaGFuQXZhaWxhYmxlQnJlYWtwb2ludCgpKSB7XG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVPdmVybGF5KHRydWUpO1xuICAgICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyT3V0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1dpZHRoTW9yZVRoYW5BdmFpbGFibGVCcmVha3BvaW50KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU92ZXJsYXkoZmFsc2UpO1xuICAgICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1dpZHRoTW9yZVRoYW5BdmFpbGFibGVCcmVha3BvaW50KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUb1Nob3dTZWxlY3RvciA9IHRoaXMuZ2V0RGF0YUF0dHJpYnV0ZSh0cmlnZ2VyLCAnZGF0YS10b2dnbGUtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50VG9nZ2xlQ2xhc3MgPSB0aGlzLmdldERhdGFBdHRyaWJ1dGUodHJpZ2dlciwgJ2RhdGEtY2xhc3MtdG8tdG9nZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0UGFyZW50Tm9kZSA9IHRyaWdnZXIuY2xvc2VzdChgLiR7dGhpcy5qc05hbWV9X19pdGVtYCk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50VG9TaG93ID0gY2xvc2VzdFBhcmVudE5vZGUucXVlcnlTZWxlY3Rvcihjb250ZW50VG9TaG93U2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBjb250ZW50VG9TaG93LmNsYXNzTGlzdC50b2dnbGUoY29udGVudFRvZ2dsZUNsYXNzKTtcbiAgICAgICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwT3ZlcmxheUV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZzogQ3VzdG9tRXZlbnRJbml0PE92ZXJsYXlFdmVudERldGFpbD4gPSB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKHRoaXMpLnpJbmRleCkgLSAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmV2ZW50U2hvd092ZXJsYXkgPSBuZXcgQ3VzdG9tRXZlbnQoRVZFTlRfU0hPV19PVkVSTEFZLCBvdmVybGF5Q29uZmlnKTtcbiAgICAgICAgdGhpcy5ldmVudEhpZGVPdmVybGF5ID0gbmV3IEN1c3RvbUV2ZW50KEVWRU5UX0hJREVfT1ZFUkxBWSwgb3ZlcmxheUNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRvZ2dsZU92ZXJsYXkoaXNTaG93bjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoaXNTaG93biA/IHRoaXMuZXZlbnRTaG93T3ZlcmxheSA6IHRoaXMuZXZlbnRIaWRlT3ZlcmxheSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzRHJvcE1lbnVSZXZlcnNlKHRyaWdnZXI6IEhUTUxFbGVtZW50LCBkcm9wSXRlbTogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGVmdFBvc2l0aW9uVG9UaGVNZW51SXRlbSA9IHRyaWdnZXIub2Zmc2V0TGVmdDtcbiAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29uc3QgZHJvcEl0ZW1XaWR0aCA9IGRyb3BJdGVtID8gZHJvcEl0ZW0ub2Zmc2V0V2lkdGggOiAwO1xuXG4gICAgICAgIHJldHVybiB3aW5kb3dXaWR0aCAtIGxlZnRQb3NpdGlvblRvVGhlTWVudUl0ZW0gPCBkcm9wSXRlbVdpZHRoO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc1dpZHRoTW9yZVRoYW5BdmFpbGFibGVCcmVha3BvaW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPj0gdGhpcy5hdmFpbGFibGVCcmVha3BvaW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXREYXRhQXR0cmlidXRlKGJsb2NrOiBIVE1MRWxlbWVudCwgYXR0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGJsb2NrLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNsYXNzVG9Ub2dnbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGF2YWlsYWJsZUJyZWFrcG9pbnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgnYXZhaWxhYmxlLWJyZWFrcG9pbnQnKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBvdmVybGF5QmxvY2tDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdvdmVybGF5LWJsb2NrLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJldmVyc2VDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdyZXZlcnNlLWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRVZFTlRfSElERV9PVkVSTEFZIiwiRVZFTlRfU0hPV19PVkVSTEFZIiwiTmF2aWdhdGlvbk11bHRpbGV2ZWwiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsIm92ZXJsYXkiLCJ0cmlnZ2VycyIsInRvdWNoVHJpZ2dlcnMiLCJldmVudFNob3dPdmVybGF5IiwiZXZlbnRIaWRlT3ZlcmxheSIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheUJsb2NrQ2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwianNOYW1lIiwibWFwRXZlbnRzIiwiYWRkUmV2ZXJzZUNsYXNzVG9Ecm9wRG93bk1lbnUiLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uVHJpZ2dlck92ZXIiLCJvblRyaWdnZXJPdXQiLCJvblRyaWdnZXJDbGljayIsIm1hcE92ZXJsYXlFdmVudHMiLCJkcm9wSXRlbSIsImlzRHJvcE1lbnVSZXZlcnNlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmV2ZXJzZUNsYXNzTmFtZSIsImlzV2lkdGhNb3JlVGhhbkF2YWlsYWJsZUJyZWFrcG9pbnQiLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVPdmVybGF5IiwiY2xhc3NUb1RvZ2dsZSIsInJlbW92ZSIsImNvbnRlbnRUb1Nob3dTZWxlY3RvciIsImdldERhdGFBdHRyaWJ1dGUiLCJjb250ZW50VG9nZ2xlQ2xhc3MiLCJjbG9zZXN0UGFyZW50Tm9kZSIsImNsb3Nlc3QiLCJjb250ZW50VG9TaG93IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsIm92ZXJsYXlDb25maWciLCJidWJibGVzIiwiZGV0YWlsIiwiaWQiLCJuYW1lIiwiekluZGV4IiwiTnVtYmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIkN1c3RvbUV2ZW50IiwiaXNTaG93biIsImRpc3BhdGNoRXZlbnQiLCJsZWZ0UG9zaXRpb25Ub1RoZU1lbnVJdGVtIiwib2Zmc2V0TGVmdCIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRyb3BJdGVtV2lkdGgiLCJvZmZzZXRXaWR0aCIsImF2YWlsYWJsZUJyZWFrcG9pbnQiLCJibG9jayIsImF0dHIiLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9