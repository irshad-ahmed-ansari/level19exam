"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["filter-category"],{

/***/ "./src/Pyz/Yves/CatalogPage/Theme/default/components/molecules/filter-category/filter-category.ts":
/*!********************************************************************************************************!*\
  !*** ./src/Pyz/Yves/CatalogPage/Theme/default/components/molecules/filter-category/filter-category.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterCategory)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class FilterCategory extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.activeCategory = void 0;
    this.visibleCategories = void 0;
    this.parent = void 0;
  }
  readyCallback() {}
  init() {
    this.activeCategory = document.getElementsByClassName(this.activeCategoryClassName)[0];
    this.parent = this.activeCategory ? this.activeCategory : this;
    this.visibleCategories = Array.from(this.parent.getElementsByClassName(this.visibleCategoryClass));
    this.hideCategory();
  }
  hideCategory() {
    if (!this.activeCategory || this.activeCategory.classList.contains(this.parentClassName)) {
      this.removeClass(this.visibleCategories);
      return;
    }
    this.hideParentCategories();
  }
  hideParentCategories() {
    var target = this.activeCategory;
    while (!target.classList.contains(this.wrapperClassName)) {
      if (target.classList.contains(this.parentClassName)) {
        this.removeClass(Array.from(target.getElementsByClassName(this.visibleCategoryClass)));
        return;
      }
      target = target.parentNode;
    }
  }
  removeClass(categoriesToShow) {
    categoriesToShow.forEach(element => element.classList.remove(this.classToRemove));
  }
  get wrapperClassName() {
    return this.getAttribute('wrapper-class-name');
  }
  get parentClassName() {
    return this.getAttribute('parent-class-name');
  }
  get activeCategoryClassName() {
    return this.getAttribute('active-category-class-name');
  }
  get visibleCategoryClass() {
    return this.getAttribute('visible-category-class');
  }
  get classToRemove() {
    return this.getAttribute('class-to-remove');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuZmlsdGVyLWNhdGVnb3J5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBRWpDLE1BQU1DLGNBQWMsU0FBU0QsK0RBQVMsQ0FBQztFQUFBRSxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQ3hDQyxjQUFjO0lBQUEsS0FDZEMsaUJBQWlCO0lBQUEsS0FDakJDLE1BQU07RUFBQTtFQUVOQyxhQUFhQSxDQUFBLEVBQVMsQ0FBQztFQUV2QkMsSUFBSUEsQ0FBQSxFQUFTO0lBQ25CLElBQUksQ0FBQ0osY0FBYyxHQUFnQkssUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUNDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25HLElBQUksQ0FBQ0wsTUFBTSxHQUFHLElBQUksQ0FBQ0YsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxHQUFHLElBQUk7SUFDOUQsSUFBSSxDQUFDQyxpQkFBaUIsR0FDbEJPLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ1AsTUFBTSxDQUFDSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUNJLG9CQUFvQixDQUFDLENBQzNFO0lBRUQsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztFQUN2QjtFQUVVQSxZQUFZQSxDQUFBLEVBQVM7SUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQ1gsY0FBYyxJQUFJLElBQUksQ0FBQ0EsY0FBYyxDQUFDWSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxFQUFFO01BQ3RGLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ2QsaUJBQWlCLENBQUM7TUFFeEM7SUFDSjtJQUVBLElBQUksQ0FBQ2Usb0JBQW9CLENBQUMsQ0FBQztFQUMvQjtFQUVVQSxvQkFBb0JBLENBQUEsRUFBUztJQUNuQyxJQUFJQyxNQUFNLEdBQWdCLElBQUksQ0FBQ2pCLGNBQWM7SUFFN0MsT0FBTyxDQUFDaUIsTUFBTSxDQUFDTCxTQUFTLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNLLGdCQUFnQixDQUFDLEVBQUU7TUFDdEQsSUFBSUQsTUFBTSxDQUFDTCxTQUFTLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxFQUFFO1FBQ2pELElBQUksQ0FBQ0MsV0FBVyxDQUFnQlAsS0FBSyxDQUFDQyxJQUFJLENBQUNRLE1BQU0sQ0FBQ1gsc0JBQXNCLENBQUMsSUFBSSxDQUFDSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFFckc7TUFDSjtNQUVBTyxNQUFNLEdBQWdCQSxNQUFNLENBQUNFLFVBQVU7SUFDM0M7RUFDSjtFQUVVSixXQUFXQSxDQUFDSyxnQkFBK0IsRUFBUTtJQUN6REEsZ0JBQWdCLENBQUNDLE9BQU8sQ0FBRUMsT0FBb0IsSUFBS0EsT0FBTyxDQUFDVixTQUFTLENBQUNXLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0VBQ3BHO0VBRUEsSUFBY04sZ0JBQWdCQSxDQUFBLEVBQVc7SUFDckMsT0FBTyxJQUFJLENBQUNPLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztFQUNsRDtFQUVBLElBQWNYLGVBQWVBLENBQUEsRUFBVztJQUNwQyxPQUFPLElBQUksQ0FBQ1csWUFBWSxDQUFDLG1CQUFtQixDQUFDO0VBQ2pEO0VBRUEsSUFBY2xCLHVCQUF1QkEsQ0FBQSxFQUFXO0lBQzVDLE9BQU8sSUFBSSxDQUFDa0IsWUFBWSxDQUFDLDRCQUE0QixDQUFDO0VBQzFEO0VBRUEsSUFBY2Ysb0JBQW9CQSxDQUFBLEVBQVc7SUFDekMsT0FBTyxJQUFJLENBQUNlLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztFQUN0RDtFQUVBLElBQWNELGFBQWFBLENBQUEsRUFBVztJQUNsQyxPQUFPLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQy9DO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvQ2F0YWxvZ1BhZ2UvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9maWx0ZXItY2F0ZWdvcnkvZmlsdGVyLWNhdGVnb3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJDYXRlZ29yeSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhdGVnb3J5OiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgdmlzaWJsZUNhdGVnb3JpZXM6IEhUTUxFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIHBhcmVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuYWN0aXZlQ2F0ZWdvcnlDbGFzc05hbWUpWzBdO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPyB0aGlzLmFjdGl2ZUNhdGVnb3J5IDogdGhpcztcbiAgICAgICAgdGhpcy52aXNpYmxlQ2F0ZWdvcmllcyA9IDxIVE1MRWxlbWVudFtdPihcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5wYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnZpc2libGVDYXRlZ29yeUNsYXNzKSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmhpZGVDYXRlZ29yeSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlQ2F0ZWdvcnkoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVDYXRlZ29yeSB8fCB0aGlzLmFjdGl2ZUNhdGVnb3J5LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnBhcmVudENsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3ModGhpcy52aXNpYmxlQ2F0ZWdvcmllcyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZVBhcmVudENhdGVnb3JpZXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGlkZVBhcmVudENhdGVnb3JpZXMoKTogdm9pZCB7XG4gICAgICAgIGxldCB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5hY3RpdmVDYXRlZ29yeTtcblxuICAgICAgICB3aGlsZSAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpcy53cmFwcGVyQ2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5wYXJlbnRDbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyg8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKHRhcmdldC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudmlzaWJsZUNhdGVnb3J5Q2xhc3MpKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldCA9IDxIVE1MRWxlbWVudD50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW1vdmVDbGFzcyhjYXRlZ29yaWVzVG9TaG93OiBIVE1MRWxlbWVudFtdKTogdm9pZCB7XG4gICAgICAgIGNhdGVnb3JpZXNUb1Nob3cuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzVG9SZW1vdmUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHdyYXBwZXJDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd3cmFwcGVyLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhcmVudENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3BhcmVudC1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBhY3RpdmVDYXRlZ29yeUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FjdGl2ZS1jYXRlZ29yeS1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCB2aXNpYmxlQ2F0ZWdvcnlDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2F0ZWdvcnktY2xhc3MnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNsYXNzVG9SZW1vdmUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by1yZW1vdmUnKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRmlsdGVyQ2F0ZWdvcnkiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImFjdGl2ZUNhdGVnb3J5IiwidmlzaWJsZUNhdGVnb3JpZXMiLCJwYXJlbnQiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFjdGl2ZUNhdGVnb3J5Q2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwidmlzaWJsZUNhdGVnb3J5Q2xhc3MiLCJoaWRlQ2F0ZWdvcnkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudENsYXNzTmFtZSIsInJlbW92ZUNsYXNzIiwiaGlkZVBhcmVudENhdGVnb3JpZXMiLCJ0YXJnZXQiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImNhdGVnb3JpZXNUb1Nob3ciLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZSIsImNsYXNzVG9SZW1vdmUiLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9