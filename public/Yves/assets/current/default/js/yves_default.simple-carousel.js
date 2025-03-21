"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["simple-carousel"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleCarousel)
/* harmony export */ });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class SimpleCarousel extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    /**
     * Switches a slide to a previous one.
     */
    this.triggerPrev = void 0;
    /**
     * Switches a slide to a next one.
     */
    this.triggerNext = void 0;
    /**
     * The current slider.
     */
    this.slider = void 0;
    /**
     * The number of the slides.
     */
    this.slidesCount = void 0;
    /**
     * The slider width.
     */
    this.slideWidth = void 0;
    /**
     * Thr dot-switch elements below the slides.
     */
    this.dots = void 0;
    /**
     * The number of views.
     */
    this.viewsCount = void 0;
    /**
     * The index of the active slide.
     */
    this.viewCurrentIndex = 0;
    /**
     * Dot element selector.
     */
    this.dotSelector = void 0;
    /**
     * Dot element "is current" modifier.
     */
    this.dotCurrentModifier = void 0;
    this.fullSliderWidth = 100;
    this.dotSelector = this.jsName + "__dot";
    this.dotCurrentModifier = this.name + "__dot--current";
  }
  readyCallback() {}
  init() {
    this.slidesCount = this.getElementsByClassName(this.jsName + "__slide").length;
    if (this.slidesCount <= 1) {
      return;
    }
    this.triggerPrev = this.getElementsByClassName(this.jsName + "__prev")[0];
    this.triggerNext = this.getElementsByClassName(this.jsName + "__next")[0];
    this.slider = this.getElementsByClassName(this.jsName + "__slider")[0];
    this.slideWidth = this.fullSliderWidth / this.slidesToShow;
    this.dots = Array.from(this.getElementsByClassName(this.dotSelector));
    this.viewsCount = this.getViewsCount();
    this.mapEvents();
  }

  /**
   * Gets the number of slides.
   */
  getViewsCount() {
    return Math.ceil((this.slidesCount - this.slidesToShow) / this.slidesToScroll) + 1;
  }
  mapEvents() {
    this.triggerPrev.addEventListener('click', event => this.onPrevClick(event));
    this.triggerNext.addEventListener('click', event => this.onNextClick(event));
    this.dots.forEach(dot => {
      dot.addEventListener('click', event => this.onDotClick(event));
    });
  }
  onPrevClick(event) {
    event.preventDefault();
    this.loadPrevViewIndex();
    this.slide();
    this.updateCurrentDot();
  }
  onNextClick(event) {
    event.preventDefault();
    this.loadNextViewIndex();
    this.slide();
    this.updateCurrentDot();
  }
  onDotClick(event) {
    event.preventDefault();
    this.loadViewIndexFromDot(event.target);
    this.slide();
    this.updateCurrentDot();
  }

  /**
   * Switches the current slide to the previous one.
   */
  loadPrevViewIndex() {
    this.viewCurrentIndex = this.viewCurrentIndex - 1;
    if (this.viewCurrentIndex < 0) {
      this.viewCurrentIndex = this.viewsCount - 1;
    }
  }

  /**
   * Switches the current slide to the next one.
   */
  loadNextViewIndex() {
    this.viewCurrentIndex = this.viewCurrentIndex + 1;
    if (this.viewCurrentIndex >= this.viewsCount) {
      this.viewCurrentIndex = 0;
    }
  }

  /**
   * Switches to the slide based on the provided dot element.
   * @param dot HTMLElement corresponding to the new target slide that has to be loaded.
   */
  loadViewIndexFromDot(dot) {
    this.viewCurrentIndex = this.dots.indexOf(dot);
    if (this.viewCurrentIndex === -1) {
      this.viewCurrentIndex = 0;
    }
  }

  /**
   * Performs sliding of slider items.
   */
  slide() {
    var slidesToSlide = this.slidesToScroll * this.viewCurrentIndex;
    if (this.slidesToScroll + slidesToSlide > this.slidesCount) {
      slidesToSlide = slidesToSlide - (this.slidesCount - slidesToSlide);
    }
    var offset = -(slidesToSlide * this.slideWidth);
    this.slider.style.transform = "translateX(" + offset + "%)";
  }

  /**
   * Toggles the active class and the modifier on the current dot.
   */
  updateCurrentDot() {
    if (this.dots.length === 0) {
      return;
    }
    this.querySelector("." + this.dotSelector + "." + this.dotCurrentModifier).classList.remove(this.dotCurrentModifier);
    this.dots[this.viewCurrentIndex].classList.add(this.dotCurrentModifier);
  }

  /**
   * Gets the number of slides to be shown.
   */
  get slidesToShow() {
    return parseInt(this.getAttribute('slides-to-show') || '0');
  }

  /**
   * Gets the number of slides to be scrolled by an interaction.
   */
  get slidesToScroll() {
    return parseInt(this.getAttribute('slides-to-scroll') || '0');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ3JDLGtCQUFrQixDQUFDO0lBRS9HLElBQUksQ0FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUMsQ0FBQ3NDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ3RDLGtCQUFrQixDQUFDO0VBQzNFOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlRLFlBQVlBLENBQUEsRUFBVztJQUN2QixPQUFPK0IsUUFBUSxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxDQUFDO0VBQy9EOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUl6QixjQUFjQSxDQUFBLEVBQVc7SUFDekIsT0FBT3dCLFFBQVEsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUNqRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3NpbXBsZS1jYXJvdXNlbC9zaW1wbGUtY2Fyb3VzZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlQ2Fyb3VzZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIGEgc2xpZGUgdG8gYSBwcmV2aW91cyBvbmUuXG4gICAgICovXG4gICAgdHJpZ2dlclByZXY6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgYSBzbGlkZSB0byBhIG5leHQgb25lLlxuICAgICAqL1xuICAgIHRyaWdnZXJOZXh0OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNsaWRlci5cbiAgICAgKi9cbiAgICBzbGlkZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aGUgc2xpZGVzLlxuICAgICAqL1xuICAgIHNsaWRlc0NvdW50OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2xpZGVyIHdpZHRoLlxuICAgICAqL1xuICAgIHNsaWRlV2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRociBkb3Qtc3dpdGNoIGVsZW1lbnRzIGJlbG93IHRoZSBzbGlkZXMuXG4gICAgICovXG4gICAgZG90czogSFRNTEVsZW1lbnRbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2Ygdmlld3MuXG4gICAgICovXG4gICAgdmlld3NDb3VudDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgc2xpZGUuXG4gICAgICovXG4gICAgdmlld0N1cnJlbnRJbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBEb3QgZWxlbWVudCBzZWxlY3Rvci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb3RTZWxlY3Rvcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogRG90IGVsZW1lbnQgXCJpcyBjdXJyZW50XCIgbW9kaWZpZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG90Q3VycmVudE1vZGlmaWVyOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGZ1bGxTbGlkZXJXaWR0aCA9IDEwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZG90U2VsZWN0b3IgPSBgJHt0aGlzLmpzTmFtZX1fX2RvdGA7XG4gICAgICAgIHRoaXMuZG90Q3VycmVudE1vZGlmaWVyID0gYCR7dGhpcy5uYW1lfV9fZG90LS1jdXJyZW50YDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zbGlkZXNDb3VudCA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3NsaWRlYCkubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLnNsaWRlc0NvdW50IDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpZ2dlclByZXYgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcHJldmApWzBdO1xuICAgICAgICB0aGlzLnRyaWdnZXJOZXh0ID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX25leHRgKVswXTtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2xpZGVyYClbMF07XG4gICAgICAgIHRoaXMuc2xpZGVXaWR0aCA9IHRoaXMuZnVsbFNsaWRlcldpZHRoIC8gdGhpcy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIHRoaXMuZG90cyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuZG90U2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy52aWV3c0NvdW50ID0gdGhpcy5nZXRWaWV3c0NvdW50KCk7XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2Ygc2xpZGVzLlxuICAgICAqL1xuICAgIGdldFZpZXdzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgodGhpcy5zbGlkZXNDb3VudCAtIHRoaXMuc2xpZGVzVG9TaG93KSAvIHRoaXMuc2xpZGVzVG9TY3JvbGwpICsgMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblByZXZDbGljayhldmVudCkpO1xuICAgICAgICB0aGlzLnRyaWdnZXJOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbk5leHRDbGljayhldmVudCkpO1xuICAgICAgICB0aGlzLmRvdHMuZm9yRWFjaCgoZG90OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkRvdENsaWNrKGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblByZXZDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJldlZpZXdJbmRleCgpO1xuICAgICAgICB0aGlzLnNsaWRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERvdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk5leHRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpZXdJbmRleCgpO1xuICAgICAgICB0aGlzLnNsaWRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERvdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRvdENsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmxvYWRWaWV3SW5kZXhGcm9tRG90KDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgICB0aGlzLnNsaWRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERvdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIHRoZSBjdXJyZW50IHNsaWRlIHRvIHRoZSBwcmV2aW91cyBvbmUuXG4gICAgICovXG4gICAgbG9hZFByZXZWaWV3SW5kZXgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IHRoaXMudmlld0N1cnJlbnRJbmRleCAtIDE7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld0N1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IHRoaXMudmlld3NDb3VudCAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0aGUgY3VycmVudCBzbGlkZSB0byB0aGUgbmV4dCBvbmUuXG4gICAgICovXG4gICAgbG9hZE5leHRWaWV3SW5kZXgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IHRoaXMudmlld0N1cnJlbnRJbmRleCArIDE7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld0N1cnJlbnRJbmRleCA+PSB0aGlzLnZpZXdzQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0byB0aGUgc2xpZGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRvdCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBkb3QgSFRNTEVsZW1lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgbmV3IHRhcmdldCBzbGlkZSB0aGF0IGhhcyB0byBiZSBsb2FkZWQuXG4gICAgICovXG4gICAgbG9hZFZpZXdJbmRleEZyb21Eb3QoZG90OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZihkb3QpO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdDdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgc2xpZGluZyBvZiBzbGlkZXIgaXRlbXMuXG4gICAgICovXG4gICAgc2xpZGUoKTogdm9pZCB7XG4gICAgICAgIGxldCBzbGlkZXNUb1NsaWRlID0gdGhpcy5zbGlkZXNUb1Njcm9sbCAqIHRoaXMudmlld0N1cnJlbnRJbmRleDtcblxuICAgICAgICBpZiAodGhpcy5zbGlkZXNUb1Njcm9sbCArIHNsaWRlc1RvU2xpZGUgPiB0aGlzLnNsaWRlc0NvdW50KSB7XG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlID0gc2xpZGVzVG9TbGlkZSAtICh0aGlzLnNsaWRlc0NvdW50IC0gc2xpZGVzVG9TbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSAtKHNsaWRlc1RvU2xpZGUgKiB0aGlzLnNsaWRlV2lkdGgpO1xuICAgICAgICB0aGlzLnNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH0lKWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgYWN0aXZlIGNsYXNzIGFuZCB0aGUgbW9kaWZpZXIgb24gdGhlIGN1cnJlbnQgZG90LlxuICAgICAqL1xuICAgIHVwZGF0ZUN1cnJlbnREb3QoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuZG90U2VsZWN0b3J9LiR7dGhpcy5kb3RDdXJyZW50TW9kaWZpZXJ9YCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRvdEN1cnJlbnRNb2RpZmllcik7XG5cbiAgICAgICAgdGhpcy5kb3RzW3RoaXMudmlld0N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZCh0aGlzLmRvdEN1cnJlbnRNb2RpZmllcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHNsaWRlcyB0byBiZSBzaG93bi5cbiAgICAgKi9cbiAgICBnZXQgc2xpZGVzVG9TaG93KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZSgnc2xpZGVzLXRvLXNob3cnKSB8fCAnMCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBzbGlkZXMgdG8gYmUgc2Nyb2xsZWQgYnkgYW4gaW50ZXJhY3Rpb24uXG4gICAgICovXG4gICAgZ2V0IHNsaWRlc1RvU2Nyb2xsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZSgnc2xpZGVzLXRvLXNjcm9sbCcpIHx8ICcwJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlNpbXBsZUNhcm91c2VsIiwiY29uc3RydWN0b3IiLCJ0cmlnZ2VyUHJldiIsInRyaWdnZXJOZXh0Iiwic2xpZGVyIiwic2xpZGVzQ291bnQiLCJzbGlkZVdpZHRoIiwiZG90cyIsInZpZXdzQ291bnQiLCJ2aWV3Q3VycmVudEluZGV4IiwiZG90U2VsZWN0b3IiLCJkb3RDdXJyZW50TW9kaWZpZXIiLCJmdWxsU2xpZGVyV2lkdGgiLCJqc05hbWUiLCJuYW1lIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwic2xpZGVzVG9TaG93IiwiQXJyYXkiLCJmcm9tIiwiZ2V0Vmlld3NDb3VudCIsIm1hcEV2ZW50cyIsIk1hdGgiLCJjZWlsIiwic2xpZGVzVG9TY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvblByZXZDbGljayIsIm9uTmV4dENsaWNrIiwiZm9yRWFjaCIsImRvdCIsIm9uRG90Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImxvYWRQcmV2Vmlld0luZGV4Iiwic2xpZGUiLCJ1cGRhdGVDdXJyZW50RG90IiwibG9hZE5leHRWaWV3SW5kZXgiLCJsb2FkVmlld0luZGV4RnJvbURvdCIsInRhcmdldCIsImluZGV4T2YiLCJzbGlkZXNUb1NsaWRlIiwib2Zmc2V0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9