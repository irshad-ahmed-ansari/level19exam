"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["product-item-color-selector"],{

/***/ "./src/Pyz/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductItemColorSelector)
/* harmony export */ });
/* harmony import */ var ProductGroupWidget_components_molecules_product_item_color_selector_product_item_color_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ProductGroupWidget/components/molecules/product-item-color-selector/product-item-color-selector */ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts");

class ProductItemColorSelector extends ProductGroupWidget_components_molecules_product_item_color_selector_product_item_color_selector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productItemData = void 0;
    this.productItem = void 0;
  }
  getProductItemData() {
    super.getProductItemData();
    this.productItemData.reviewCount = this.reviewCount;
  }
  get reviewCount() {
    return Number(this.currentSelection.getAttribute('data-product-review-count'));
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorSelector)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class ColorSelector extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
    this.currentSelection = void 0;
  }
  readyCallback() {}
  init() {
    this.triggers = Array.from(this.getElementsByClassName(this.jsName + "__item"));
    this.mapEvents();
  }
  mapEvents() {
    this.mapTriggerMouseenterEvent();
  }
  mapTriggerMouseenterEvent() {
    this.triggers.forEach(element => {
      element.addEventListener('mouseenter', event => this.onTriggerSelection(event));
    });
  }
  onTriggerSelection(event) {
    event.preventDefault();
    this.currentSelection = event.currentTarget;
    this.resetActiveItemSelections();
    this.setActiveItemSelection();
  }
  resetActiveItemSelections() {
    this.triggers.forEach(element => {
      element.classList.remove(this.activeItemClassName);
    });
  }
  setActiveItemSelection(selection) {
    (selection || this.currentSelection).classList.add(this.activeItemClassName);
  }
  get activeItemClassName() {
    return this.getAttribute('active-item-class-name');
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductItemColorSelector)
/* harmony export */ });
/* harmony import */ var _color_selector_color_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-selector/color-selector */ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts");

class ProductItemColorSelector extends _color_selector_color_selector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productItemData = void 0;
    this.productItem = void 0;
  }
  init() {
    if (this.productItemClassName) {
      this.productItem = this.closest("." + this.productItemClassName);
    }
    super.init();
  }
  onTriggerSelection(event) {
    super.onTriggerSelection(event);
    this.getProductItemData();
    this.productItem.updateProductItemData(this.productItemData);
  }
  getProductItemData() {
    this.productItemData = {
      imageUrl: this.imageUrl,
      imageAlt: this.productImageAlt,
      labels: this.labels ? JSON.parse(this.labels) : [],
      name: this.productItemName,
      ratingValue: this.ratingValue,
      defaultPrice: this.defaultPrice,
      originalPrice: this.originalPrice,
      detailPageUrl: this.detailPageUrl,
      addToCartUrl: this.addToCartUrl,
      ajaxAddToCartUrl: this.ajaxAddToCartUrl,
      addToCartFormAction: this.addToCartFormAction,
      sku: this.sku
    };
  }
  get imageUrl() {
    return this.currentSelection.getAttribute('data-product-image-src');
  }
  get labels() {
    return this.currentSelection.getAttribute('data-product-labels');
  }
  get productItemName() {
    return this.currentSelection.getAttribute('data-product-name');
  }
  get ratingValue() {
    return Number(this.currentSelection.getAttribute('data-product-rating'));
  }
  get defaultPrice() {
    return this.currentSelection.getAttribute('data-product-default-price');
  }
  get originalPrice() {
    return this.currentSelection.getAttribute('data-product-original-price');
  }
  get detailPageUrl() {
    return this.currentSelection.getAttribute('data-product-detail-page-url');
  }
  get addToCartUrl() {
    return this.currentSelection.getAttribute('data-product-add-to-cart-url');
  }
  get ajaxAddToCartUrl() {
    return this.currentSelection.getAttribute('data-product-ajax-add-to-cart-url');
  }
  get addToCartFormAction() {
    return this.currentSelection.getAttribute('data-product-add-to-cart-form-action');
  }
  get sku() {
    return this.currentSelection.getAttribute('data-product-sku');
  }
  get productItemClassName() {
    return this.getAttribute('product-item-class-name');
  }
  get productImageAlt() {
    return this.currentSelection.getAttribute('data-product-image-alt');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucHJvZHVjdC1pdGVtLWNvbG9yLXNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJJO0FBRzVILE1BQU1DLHdCQUF3QixTQUFTRCx1SUFBNEIsQ0FBQztFQUFBRSxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQ3JFQyxlQUFlO0lBQUEsS0FDZkMsV0FBVztFQUFBO0VBRVhDLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQ2pDLEtBQUssQ0FBQ0Esa0JBQWtCLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUNGLGVBQWUsQ0FBQ0csV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVztFQUN2RDtFQUVBLElBQWNBLFdBQVdBLENBQUEsRUFBVztJQUNoQyxPQUFPQyxNQUFNLENBQUMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDLDJCQUEyQixDQUFDLENBQUM7RUFDbEY7QUFDSjs7Ozs7Ozs7Ozs7Ozs7O0FDZmdEO0FBRWpDLE1BQU1FLGFBQWEsU0FBU0QsK0RBQVMsQ0FBQztFQUFBVCxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQ3ZDVSxRQUFRO0lBQUEsS0FDUkosZ0JBQWdCO0VBQUE7RUFFaEJLLGFBQWFBLENBQUEsRUFBUyxDQUFDO0VBRXZCQyxJQUFJQSxDQUFBLEVBQVM7SUFDbkIsSUFBSSxDQUFDRixRQUFRLEdBQWtCRyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNDLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxXQUFRLENBQUMsQ0FBQztJQUU5RixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVBLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLENBQUNDLHlCQUF5QixDQUFDLENBQUM7RUFDcEM7RUFFVUEseUJBQXlCQSxDQUFBLEVBQUc7SUFDbEMsSUFBSSxDQUFDUixRQUFRLENBQUNTLE9BQU8sQ0FBRUMsT0FBb0IsSUFBSztNQUM1Q0EsT0FBTyxDQUFD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QUFBLEVBQVc7SUFDekMsT0FBTyxJQUFJLENBQUMxQixZQUFZLENBQUMseUJBQXlCLENBQUM7RUFDdkQ7RUFFQSxJQUFjK0IsZUFBZUEsQ0FBQSxFQUFXO0lBQ3BDLE9BQU8sSUFBSSxDQUFDaEMsZ0JBQWdCLENBQUNDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztFQUN2RTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vc3JjL1B5ei9ZdmVzL1Byb2R1Y3RHcm91cFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS1jb2xvci1zZWxlY3Rvci9wcm9kdWN0LWl0ZW0tY29sb3Itc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9wcm9kdWN0LWdyb3VwLXdpZGdldC9zcmMvU3ByeWtlclNob3AvWXZlcy9Qcm9kdWN0R3JvdXBXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9jb2xvci1zZWxlY3Rvci9jb2xvci1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3QtZ3JvdXAtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Byb2R1Y3RHcm91cFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS1jb2xvci1zZWxlY3Rvci9wcm9kdWN0LWl0ZW0tY29sb3Itc2VsZWN0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RJdGVtQ29sb3JTZWxlY3RvckNvcmUgZnJvbSAnUHJvZHVjdEdyb3VwV2lkZ2V0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS1jb2xvci1zZWxlY3Rvci9wcm9kdWN0LWl0ZW0tY29sb3Itc2VsZWN0b3InO1xuaW1wb3J0IFByb2R1Y3RJdGVtLCB7IFByb2R1Y3RJdGVtRGF0YSB9IGZyb20gJ3NyYy9TaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RJdGVtQ29sb3JTZWxlY3RvciBleHRlbmRzIFByb2R1Y3RJdGVtQ29sb3JTZWxlY3RvckNvcmUge1xuICAgIHByb3RlY3RlZCBwcm9kdWN0SXRlbURhdGE6IFByb2R1Y3RJdGVtRGF0YTtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEl0ZW06IFByb2R1Y3RJdGVtO1xuXG4gICAgcHJvdGVjdGVkIGdldFByb2R1Y3RJdGVtRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZ2V0UHJvZHVjdEl0ZW1EYXRhKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdEl0ZW1EYXRhLnJldmlld0NvdW50ID0gdGhpcy5yZXZpZXdDb3VudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJldmlld0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LXJldmlldy1jb3VudCcpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHRyaWdnZXJzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBjdXJyZW50U2VsZWN0aW9uOiBIVE1MRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pdGVtYCkpO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBUcmlnZ2VyTW91c2VlbnRlckV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFRyaWdnZXJNb3VzZWVudGVyRXZlbnQoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UcmlnZ2VyU2VsZWN0aW9uKGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyaWdnZXJTZWxlY3Rpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbVNlbGVjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0QWN0aXZlSXRlbVNlbGVjdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUl0ZW1DbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0QWN0aXZlSXRlbVNlbGVjdGlvbihzZWxlY3Rpb24/OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICAoc2VsZWN0aW9uIHx8IHRoaXMuY3VycmVudFNlbGVjdGlvbikuY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUl0ZW1DbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYWN0aXZlSXRlbUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FjdGl2ZS1pdGVtLWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvZHVjdEl0ZW0sIHsgUHJvZHVjdEl0ZW1EYXRhIH0gZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0nO1xuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi4vY29sb3Itc2VsZWN0b3IvY29sb3Itc2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0SXRlbUNvbG9yU2VsZWN0b3IgZXh0ZW5kcyBDb2xvclNlbGVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEl0ZW1EYXRhOiBQcm9kdWN0SXRlbURhdGE7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RJdGVtOiBQcm9kdWN0SXRlbTtcblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SXRlbUNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SXRlbSA9IDxQcm9kdWN0SXRlbT50aGlzLmNsb3Nlc3QoYC4ke3RoaXMucHJvZHVjdEl0ZW1DbGFzc05hbWV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uVHJpZ2dlclNlbGVjdGlvbihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25UcmlnZ2VyU2VsZWN0aW9uKGV2ZW50KTtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0SXRlbURhdGEoKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0SXRlbS51cGRhdGVQcm9kdWN0SXRlbURhdGEodGhpcy5wcm9kdWN0SXRlbURhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRQcm9kdWN0SXRlbURhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvZHVjdEl0ZW1EYXRhID0ge1xuICAgICAgICAgICAgaW1hZ2VVcmw6IHRoaXMuaW1hZ2VVcmwsXG4gICAgICAgICAgICBpbWFnZUFsdDogdGhpcy5wcm9kdWN0SW1hZ2VBbHQsXG4gICAgICAgICAgICBsYWJlbHM6IHRoaXMubGFiZWxzID8gSlNPTi5wYXJzZSh0aGlzLmxhYmVscykgOiBbXSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvZHVjdEl0ZW1OYW1lLFxuICAgICAgICAgICAgcmF0aW5nVmFsdWU6IHRoaXMucmF0aW5nVmFsdWUsXG4gICAgICAgICAgICBkZWZhdWx0UHJpY2U6IHRoaXMuZGVmYXVsdFByaWNlLFxuICAgICAgICAgICAgb3JpZ2luYWxQcmljZTogdGhpcy5vcmlnaW5hbFByaWNlLFxuICAgICAgICAgICAgZGV0YWlsUGFnZVVybDogdGhpcy5kZXRhaWxQYWdlVXJsLFxuICAgICAgICAgICAgYWRkVG9DYXJ0VXJsOiB0aGlzLmFkZFRvQ2FydFVybCxcbiAgICAgICAgICAgIGFqYXhBZGRUb0NhcnRVcmw6IHRoaXMuYWpheEFkZFRvQ2FydFVybCxcbiAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1BY3Rpb246IHRoaXMuYWRkVG9DYXJ0Rm9ybUFjdGlvbixcbiAgICAgICAgICAgIHNrdTogdGhpcy5za3UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBpbWFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWltYWdlLXNyYycpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbGFiZWxzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtbGFiZWxzJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBwcm9kdWN0SXRlbU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1uYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCByYXRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1yYXRpbmcnKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBkZWZhdWx0UHJpY2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1kZWZhdWx0LXByaWNlJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBvcmlnaW5hbFByaWNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3Qtb3JpZ2luYWwtcHJpY2UnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGRldGFpbFBhZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1kZXRhaWwtcGFnZS11cmwnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGFkZFRvQ2FydFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWFkZC10by1jYXJ0LXVybCcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYWpheEFkZFRvQ2FydFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWFqYXgtYWRkLXRvLWNhcnQtdXJsJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBhZGRUb0NhcnRGb3JtQWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYWRkLXRvLWNhcnQtZm9ybS1hY3Rpb24nKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNrdSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LXNrdScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcHJvZHVjdEl0ZW1DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwcm9kdWN0LWl0ZW0tY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcHJvZHVjdEltYWdlQWx0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtaW1hZ2UtYWx0Jyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtQ29sb3JTZWxlY3RvckNvcmUiLCJQcm9kdWN0SXRlbUNvbG9yU2VsZWN0b3IiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInByb2R1Y3RJdGVtRGF0YSIsInByb2R1Y3RJdGVtIiwiZ2V0UHJvZHVjdEl0ZW1EYXRhIiwicmV2aWV3Q291bnQiLCJOdW1iZXIiLCJjdXJyZW50U2VsZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwiQ29tcG9uZW50IiwiQ29sb3JTZWxlY3RvciIsInRyaWdnZXJzIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwibWFwRXZlbnRzIiwibWFwVHJpZ2dlck1vdXNlZW50ZXJFdmVudCIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25UcmlnZ2VyU2VsZWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwicmVzZXRBY3RpdmVJdGVtU2VsZWN0aW9ucyIsInNldEFjdGl2ZUl0ZW1TZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhY3RpdmVJdGVtQ2xhc3NOYW1lIiwic2VsZWN0aW9uIiwiYWRkIiwicHJvZHVjdEl0ZW1DbGFzc05hbWUiLCJjbG9zZXN0IiwidXBkYXRlUHJvZHVjdEl0ZW1EYXRhIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInByb2R1Y3RJbWFnZUFsdCIsImxhYmVscyIsIkpTT04iLCJwYXJzZSIsIm5hbWUiLCJwcm9kdWN0SXRlbU5hbWUiLCJyYXRpbmdWYWx1ZSIsImRlZmF1bHRQcmljZSIsIm9yaWdpbmFsUHJpY2UiLCJkZXRhaWxQYWdlVXJsIiwiYWRkVG9DYXJ0VXJsIiwiYWpheEFkZFRvQ2FydFVybCIsImFkZFRvQ2FydEZvcm1BY3Rpb24iLCJza3UiXSwic291cmNlUm9vdCI6IiJ9