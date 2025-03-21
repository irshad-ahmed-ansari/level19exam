"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["image-carousel"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/image-carousel/image-carousel.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/image-carousel/image-carousel.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageCarousel)
/* harmony export */ });
/* harmony import */ var _simple_carousel_simple_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../simple-carousel/simple-carousel */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts");

class ImageCarousel extends _simple_carousel_simple_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.defaultImageUrl = void 0;
    this.currentSlideImage = void 0;
  }
  readyCallback() {}
  init() {
    this.getCurrentSlideImage();
    this.setDefaultImageUrl();
    super.init();
  }

  /**
   * Performs sliding of slider items.
   */
  slide() {
    super.slide();
    this.getCurrentSlideImage();
    this.setDefaultImageUrl();
  }

  /**
   * Sets the new slide image with a new URL.
   * @param url An image URL.
   */
  set slideImageUrl(url) {
    this.currentSlideImage.src = url;
  }

  /**
   * Sets the slide image with a default URL.
   */
  restoreDefaultImageUrl() {
    this.currentSlideImage.src = this.defaultImageUrl;
  }
  getCurrentSlideImage() {
    var currentSlide = this.getElementsByClassName(this.jsName + "__slide")[this.viewCurrentIndex];
    this.currentSlideImage = currentSlide.getElementsByTagName('img')[0];
  }
  setDefaultImageUrl() {
    this.defaultImageUrl = this.currentSlideImage.dataset.src || this.currentSlideImage.src;
  }
}

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFLLElBQUksQ0FBQy9CLFdBQVcsU0FBSSxJQUFJLENBQUNDLGtCQUFvQixDQUFDLENBQUMrQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNoQyxrQkFBa0IsQ0FBQztJQUUvRyxJQUFJLENBQUNILElBQUksQ0FBQyxJQUFJLENBQUNULGdCQUFnQixDQUFDLENBQUMyQyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNqQyxrQkFBa0IsQ0FBQztFQUMzRTs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJSSxZQUFZQSxDQUFBLEVBQVc7SUFDdkIsT0FBTzhCLFFBQVEsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUMvRDs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJeEIsY0FBY0EsQ0FBQSxFQUFXO0lBQ3pCLE9BQU91QixRQUFRLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDakU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9pbWFnZS1jYXJvdXNlbC9pbWFnZS1jYXJvdXNlbC50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvc2ltcGxlLWNhcm91c2VsL3NpbXBsZS1jYXJvdXNlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2ltcGxlQ2Fyb3VzZWwgZnJvbSAnLi4vc2ltcGxlLWNhcm91c2VsL3NpbXBsZS1jYXJvdXNlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ2Fyb3VzZWwgZXh0ZW5kcyBTaW1wbGVDYXJvdXNlbCB7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRJbWFnZVVybDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBjdXJyZW50U2xpZGVJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRTbGlkZUltYWdlKCk7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdEltYWdlVXJsKCk7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBzbGlkaW5nIG9mIHNsaWRlciBpdGVtcy5cbiAgICAgKi9cbiAgICBzbGlkZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuc2xpZGUoKTtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50U2xpZGVJbWFnZSgpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRJbWFnZVVybCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG5ldyBzbGlkZSBpbWFnZSB3aXRoIGEgbmV3IFVSTC5cbiAgICAgKiBAcGFyYW0gdXJsIEFuIGltYWdlIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgc2xpZGVJbWFnZVVybCh1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZUltYWdlLnNyYyA9IHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzbGlkZSBpbWFnZSB3aXRoIGEgZGVmYXVsdCBVUkwuXG4gICAgICovXG4gICAgcmVzdG9yZURlZmF1bHRJbWFnZVVybCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVJbWFnZS5zcmMgPSB0aGlzLmRlZmF1bHRJbWFnZVVybDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q3VycmVudFNsaWRlSW1hZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19zbGlkZWApW3RoaXMudmlld0N1cnJlbnRJbmRleF07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVJbWFnZSA9IGN1cnJlbnRTbGlkZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRJbWFnZVVybCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW1hZ2VVcmwgPSB0aGlzLmN1cnJlbnRTbGlkZUltYWdlLmRhdGFzZXQuc3JjIHx8IHRoaXMuY3VycmVudFNsaWRlSW1hZ2Uuc3JjO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUNhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyBhIHNsaWRlIHRvIGEgcHJldmlvdXMgb25lLlxuICAgICAqL1xuICAgIHRyaWdnZXJQcmV2OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIGEgc2xpZGUgdG8gYSBuZXh0IG9uZS5cbiAgICAgKi9cbiAgICB0cmlnZ2VyTmV4dDogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzbGlkZXIuXG4gICAgICovXG4gICAgc2xpZGVyOiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdGhlIHNsaWRlcy5cbiAgICAgKi9cbiAgICBzbGlkZXNDb3VudDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNsaWRlciB3aWR0aC5cbiAgICAgKi9cbiAgICBzbGlkZVdpZHRoOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaHIgZG90LXN3aXRjaCBlbGVtZW50cyBiZWxvdyB0aGUgc2xpZGVzLlxuICAgICAqL1xuICAgIGRvdHM6IEhUTUxFbGVtZW50W107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHZpZXdzLlxuICAgICAqL1xuICAgIHZpZXdzQ291bnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgYWN0aXZlIHNsaWRlLlxuICAgICAqL1xuICAgIHZpZXdDdXJyZW50SW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogRG90IGVsZW1lbnQgc2VsZWN0b3IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG90U2VsZWN0b3I6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIERvdCBlbGVtZW50IFwiaXMgY3VycmVudFwiIG1vZGlmaWVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvdEN1cnJlbnRNb2RpZmllcjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBmdWxsU2xpZGVyV2lkdGggPSAxMDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRvdFNlbGVjdG9yID0gYCR7dGhpcy5qc05hbWV9X19kb3RgO1xuICAgICAgICB0aGlzLmRvdEN1cnJlbnRNb2RpZmllciA9IGAke3RoaXMubmFtZX1fX2RvdC0tY3VycmVudGA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2xpZGVzQ291bnQgPSB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19zbGlkZWApLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5zbGlkZXNDb3VudCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaWdnZXJQcmV2ID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3ByZXZgKVswXTtcbiAgICAgICAgdGhpcy50cmlnZ2VyTmV4dCA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19uZXh0YClbMF07XG4gICAgICAgIHRoaXMuc2xpZGVyID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3NsaWRlcmApWzBdO1xuICAgICAgICB0aGlzLnNsaWRlV2lkdGggPSB0aGlzLmZ1bGxTbGlkZXJXaWR0aCAvIHRoaXMuc2xpZGVzVG9TaG93O1xuICAgICAgICB0aGlzLmRvdHMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmRvdFNlbGVjdG9yKSk7XG4gICAgICAgIHRoaXMudmlld3NDb3VudCA9IHRoaXMuZ2V0Vmlld3NDb3VudCgpO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHNsaWRlcy5cbiAgICAgKi9cbiAgICBnZXRWaWV3c0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuc2xpZGVzQ291bnQgLSB0aGlzLnNsaWRlc1RvU2hvdykgLyB0aGlzLnNsaWRlc1RvU2Nyb2xsKSArIDE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25QcmV2Q2xpY2soZXZlbnQpKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25OZXh0Q2xpY2soZXZlbnQpKTtcbiAgICAgICAgdGhpcy5kb3RzLmZvckVhY2goKGRvdDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25Eb3RDbGljayhldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25QcmV2Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubG9hZFByZXZWaWV3SW5kZXgoKTtcbiAgICAgICAgdGhpcy5zbGlkZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREb3QoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25OZXh0Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubG9hZE5leHRWaWV3SW5kZXgoKTtcbiAgICAgICAgdGhpcy5zbGlkZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREb3QoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Eb3RDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5sb2FkVmlld0luZGV4RnJvbURvdCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdGhpcy5zbGlkZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREb3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0aGUgY3VycmVudCBzbGlkZSB0byB0aGUgcHJldmlvdXMgb25lLlxuICAgICAqL1xuICAgIGxvYWRQcmV2Vmlld0luZGV4KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSB0aGlzLnZpZXdDdXJyZW50SW5kZXggLSAxO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdDdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSB0aGlzLnZpZXdzQ291bnQgLSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgdGhlIGN1cnJlbnQgc2xpZGUgdG8gdGhlIG5leHQgb25lLlxuICAgICAqL1xuICAgIGxvYWROZXh0Vmlld0luZGV4KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSB0aGlzLnZpZXdDdXJyZW50SW5kZXggKyAxO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdDdXJyZW50SW5kZXggPj0gdGhpcy52aWV3c0NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgdG8gdGhlIHNsaWRlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkb3QgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZG90IEhUTUxFbGVtZW50IGNvcnJlc3BvbmRpbmcgdG8gdGhlIG5ldyB0YXJnZXQgc2xpZGUgdGhhdCBoYXMgdG8gYmUgbG9hZGVkLlxuICAgICAqL1xuICAgIGxvYWRWaWV3SW5kZXhGcm9tRG90KGRvdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3Q3VycmVudEluZGV4ID0gdGhpcy5kb3RzLmluZGV4T2YoZG90KTtcblxuICAgICAgICBpZiAodGhpcy52aWV3Q3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3Q3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIHNsaWRpbmcgb2Ygc2xpZGVyIGl0ZW1zLlxuICAgICAqL1xuICAgIHNsaWRlKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2xpZGVzVG9TbGlkZSA9IHRoaXMuc2xpZGVzVG9TY3JvbGwgKiB0aGlzLnZpZXdDdXJyZW50SW5kZXg7XG5cbiAgICAgICAgaWYgKHRoaXMuc2xpZGVzVG9TY3JvbGwgKyBzbGlkZXNUb1NsaWRlID4gdGhpcy5zbGlkZXNDb3VudCkge1xuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZSA9IHNsaWRlc1RvU2xpZGUgLSAodGhpcy5zbGlkZXNDb3VudCAtIHNsaWRlc1RvU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLShzbGlkZXNUb1NsaWRlICogdGhpcy5zbGlkZVdpZHRoKTtcbiAgICAgICAgdGhpcy5zbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtvZmZzZXR9JSlgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGFjdGl2ZSBjbGFzcyBhbmQgdGhlIG1vZGlmaWVyIG9uIHRoZSBjdXJyZW50IGRvdC5cbiAgICAgKi9cbiAgICB1cGRhdGVDdXJyZW50RG90KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kb3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmRvdFNlbGVjdG9yfS4ke3RoaXMuZG90Q3VycmVudE1vZGlmaWVyfWApLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kb3RDdXJyZW50TW9kaWZpZXIpO1xuXG4gICAgICAgIHRoaXMuZG90c1t0aGlzLnZpZXdDdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5hZGQodGhpcy5kb3RDdXJyZW50TW9kaWZpZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBzbGlkZXMgdG8gYmUgc2hvd24uXG4gICAgICovXG4gICAgZ2V0IHNsaWRlc1RvU2hvdygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3NsaWRlcy10by1zaG93JykgfHwgJzAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2Ygc2xpZGVzIHRvIGJlIHNjcm9sbGVkIGJ5IGFuIGludGVyYWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBzbGlkZXNUb1Njcm9sbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3NsaWRlcy10by1zY3JvbGwnKSB8fCAnMCcpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJTaW1wbGVDYXJvdXNlbCIsIkltYWdlQ2Fyb3VzZWwiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImRlZmF1bHRJbWFnZVVybCIsImN1cnJlbnRTbGlkZUltYWdlIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJnZXRDdXJyZW50U2xpZGVJbWFnZSIsInNldERlZmF1bHRJbWFnZVVybCIsInNsaWRlIiwic2xpZGVJbWFnZVVybCIsInVybCIsInNyYyIsInJlc3RvcmVEZWZhdWx0SW1hZ2VVcmwiLCJjdXJyZW50U2xpZGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwidmlld0N1cnJlbnRJbmRleCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZGF0YXNldCIsIkNvbXBvbmVudCIsInRyaWdnZXJQcmV2IiwidHJpZ2dlck5leHQiLCJzbGlkZXIiLCJzbGlkZXNDb3VudCIsInNsaWRlV2lkdGgiLCJkb3RzIiwidmlld3NDb3VudCIsImRvdFNlbGVjdG9yIiwiZG90Q3VycmVudE1vZGlmaWVyIiwiZnVsbFNsaWRlcldpZHRoIiwibmFtZSIsImxlbmd0aCIsInNsaWRlc1RvU2hvdyIsIkFycmF5IiwiZnJvbSIsImdldFZpZXdzQ291bnQiLCJtYXBFdmVudHMiLCJNYXRoIiwiY2VpbCIsInNsaWRlc1RvU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25QcmV2Q2xpY2siLCJvbk5leHRDbGljayIsImZvckVhY2giLCJkb3QiLCJvbkRvdENsaWNrIiwicHJldmVudERlZmF1bHQiLCJsb2FkUHJldlZpZXdJbmRleCIsInVwZGF0ZUN1cnJlbnREb3QiLCJsb2FkTmV4dFZpZXdJbmRleCIsImxvYWRWaWV3SW5kZXhGcm9tRG90IiwidGFyZ2V0IiwiaW5kZXhPZiIsInNsaWRlc1RvU2xpZGUiLCJvZmZzZXQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=