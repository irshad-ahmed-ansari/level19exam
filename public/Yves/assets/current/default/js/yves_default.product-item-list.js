"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["product-item-list"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item-list/product-item-list.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item-list/product-item-list.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductItemList)
/* harmony export */ });
/* harmony import */ var _product_item_product_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product-item/product-item */ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");

class ProductItemList extends _product_item_product_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init() {
    super.init();
  }
}

/***/ }),

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts":
/*!*********************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_UPDATE_REVIEW_COUNT: () => (/* binding */ EVENT_UPDATE_REVIEW_COUNT),
/* harmony export */   "default": () => (/* binding */ ProductItem)
/* harmony export */ });
/* harmony import */ var ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/components/molecules/product-item/product-item */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");

var EVENT_UPDATE_REVIEW_COUNT = 'updateReviewCount';
class ProductItem extends ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productReviewCount = void 0;
  }
  init() {
    this.productReviewCount = this.getElementsByClassName(this.jsName + "__review-count")[0];
    super.init();
  }
  set originalPrice(originalPrice) {
    if (this.productOriginalPrice) {
      this.productOriginalPrice.innerText = originalPrice;
    }
    this.setDefaultPriceColor(originalPrice);
  }
  setDefaultPriceColor(originalPrice) {
    if (!this.productDefaultPrice) {
      return;
    }
    if (!originalPrice) {
      this.productDefaultPrice.classList.remove(this.defaultPriceColorClassName);
      return;
    }
    this.productDefaultPrice.classList.add(this.defaultPriceColorClassName);
  }
  updateProductItemData(data) {
    super.updateProductItemData(data);
    this.reviewCount = data.reviewCount;
  }
  set reviewCount(reviewCount) {
    this.dispatchCustomEvent(EVENT_UPDATE_REVIEW_COUNT, {
      reviewCount
    });
  }
  get defaultPriceColorClassName() {
    return this.getAttribute('default-price-color-class-name');
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_UPDATE_ADD_TO_CART_FORM_ACTION: () => (/* binding */ EVENT_UPDATE_ADD_TO_CART_FORM_ACTION),
/* harmony export */   EVENT_UPDATE_ADD_TO_CART_URL: () => (/* binding */ EVENT_UPDATE_ADD_TO_CART_URL),
/* harmony export */   EVENT_UPDATE_AJAX_ADD_TO_CART_URL: () => (/* binding */ EVENT_UPDATE_AJAX_ADD_TO_CART_URL),
/* harmony export */   EVENT_UPDATE_LABELS: () => (/* binding */ EVENT_UPDATE_LABELS),
/* harmony export */   EVENT_UPDATE_RATING: () => (/* binding */ EVENT_UPDATE_RATING),
/* harmony export */   "default": () => (/* binding */ ProductItem)
/* harmony export */ });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");


/**
 * @event updateRating An event emitted when the product rating has been updated.
 * @event updateLabels An event emitted when the product labels has been updated.
 * @event updateAddToCartUrl An event emitted when the product 'add to cart' URL has been updated.
 * @event updateAjaxAddToCartUrl An event emitted when the product AJAX 'add to cart' URL has been updated.
 * @event updateAddToCartFormAction An event emitted when the product 'add to cart' form action has been updated.
 */
var EVENT_UPDATE_RATING = 'updateRating';
var EVENT_UPDATE_LABELS = 'updateLabels';
var EVENT_UPDATE_ADD_TO_CART_URL = 'updateAddToCartUrl';
var EVENT_UPDATE_AJAX_ADD_TO_CART_URL = 'updateAjaxAddToCartUrl';
var EVENT_UPDATE_ADD_TO_CART_FORM_ACTION = 'updateAddToCartFormAction';
class ProductItem extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productImage = void 0;
    this.productName = void 0;
    this.productRating = void 0;
    this.productDefaultPrice = void 0;
    this.productSku = void 0;
    this.productOriginalPrice = void 0;
    this.productLinkDetailPage = void 0;
    this.productLinkAddToCart = void 0;
    this.productAjaxButtonAddToCart = void 0;
    this.productFormAddToCart = void 0;
    this.productButtonAddToCart = void 0;
  }
  readyCallback() {}
  init() {
    this.productImage = this.getElementsByClassName(this.jsName + "__image")[0];
    this.productName = this.getElementsByClassName(this.jsName + "__name")[0];
    this.productRating = this.getElementsByClassName(this.jsName + "__rating")[0];
    this.productDefaultPrice = this.getElementsByClassName(this.jsName + "__default-price")[0];
    this.productSku = this.getElementsByClassName(this.jsName + "__sku")[0];
    this.productOriginalPrice = this.getElementsByClassName(this.jsName + "__original-price")[0];
    this.productLinkDetailPage = Array.from(this.getElementsByClassName(this.jsName + "__link-detail-page"));
    this.productLinkAddToCart = this.getElementsByClassName(this.jsName + "__link-add-to-cart")[0];
    this.productAjaxButtonAddToCart = this.getElementsByClassName(this.jsName + "__ajax-button-add-to-cart")[0];
    this.productFormAddToCart = this.getElementsByClassName(this.jsName + "__form-add-to-cart")[0];
    this.productButtonAddToCart = this.getElementsByClassName(this.jsName + "__button-add-to-cart")[0];
  }

  /**
   * Sets the product card information.
   * @param data A data object for setting the product card information.
   */
  updateProductItemData(data) {
    var _data$sku, _data$ajaxAddToCartUr, _data$addToCartFormAc;
    this.imageUrl = data.imageUrl;
    this.imageAlt = data.imageAlt;
    this.labels = data.labels;
    this.productItemName = data.name;
    this.ratingValue = data.ratingValue;
    this.defaultPrice = data.defaultPrice;
    this.sku = (_data$sku = data.sku) != null ? _data$sku : null;
    this.originalPrice = data.originalPrice;
    this.detailPageUrl = data.detailPageUrl;
    this.addToCartUrl = data.addToCartUrl;
    this.ajaxAddToCartUrl = (_data$ajaxAddToCartUr = data.ajaxAddToCartUrl) != null ? _data$ajaxAddToCartUr : null;
    this.addToCartFormAction = (_data$addToCartFormAc = data.addToCartFormAction) != null ? _data$addToCartFormAc : null;
  }
  getSkuFromUrl(url) {
    if (!url) {
      return null;
    }
    var lastPartOfUrl = new RegExp("([^\\/])+$", 'g');
    var sku = url.match(lastPartOfUrl);
    return sku[0];
  }

  /**
   * Gets the product card image URL.
   */
  get imageUrl() {
    if (this.productImage) {
      return this.productImage.src;
    }
  }

  /**
   * Sets the product card image URL.
   * @param imageUrl A product card image URL.
   */
  set imageUrl(imageUrl) {
    if (this.productImage) {
      this.productImage.src = imageUrl;
    }
  }

  /**
   * Sets the product card image alt.
   * @param imageAlt A product card image alt.
   */
  set imageAlt(imageAlt) {
    if (this.productImage) {
      this.productImage.alt = imageAlt;
    }
  }

  /**
   * Sets the product card labels.
   * @param labels An array of product card labels.
   */
  set labels(labels) {
    this.dispatchCustomEvent(EVENT_UPDATE_LABELS, {
      labels
    });
  }

  /**
   * Gets the product card name.
   */
  get productItemName() {
    if (this.productName) {
      return this.productName.innerText;
    }
  }

  /**
   * Sets the product card name.
   * @param name A product card name.
   */
  set productItemName(name) {
    if (this.productName) {
      this.productName.innerText = name;
    }
  }

  /**
   * Gets the product card rating.
   */
  get ratingValue() {
    if (this.productRating) {
      return Number(this.productRating.value);
    }
  }

  /**
   * Sets the product card rating.
   * @param rating A product card rating.
   */
  set ratingValue(rating) {
    this.dispatchCustomEvent(EVENT_UPDATE_RATING, {
      rating
    });
  }

  /**
   * Gets the product card default price.
   */
  get defaultPrice() {
    if (this.productDefaultPrice) {
      return this.productDefaultPrice.innerText;
    }
  }

  /**
   * Sets the product card default price.
   * @param defaultPrice A product card default price.
   */
  set defaultPrice(defaultPrice) {
    if (this.productDefaultPrice) {
      this.productDefaultPrice.innerText = defaultPrice;
    }
  }

  /**
   * Gets the product card sku.
   */
  get sku() {
    if (this.productSku) {
      return this.productSku.content;
    }
  }

  /**
   * Sets the product card sku.
   * @param productSku A product card sku.
   */
  set sku(productSku) {
    if (this.productSku) {
      this.productSku.content = productSku;
    }
  }

  /**
   * Gets the product card original price.
   */
  get originalPrice() {
    if (this.productOriginalPrice) {
      return this.productOriginalPrice.innerText;
    }
  }

  /**
   * Sets the product card original price.
   * @param originalPrice A product card original price.
   */
  set originalPrice(originalPrice) {
    if (this.productOriginalPrice) {
      this.productOriginalPrice.innerText = originalPrice;
    }
  }

  /**
   * Gets the product card detail page URL.
   */
  get detailPageUrl() {
    if (this.productLinkDetailPage) {
      return this.productLinkDetailPage[0].href;
    }
  }

  /**
   * Sets the product card detail page URL.
   * @param detailPageUrl A product card detail page URL.
   */
  set detailPageUrl(detailPageUrl) {
    if (this.productLinkDetailPage) {
      this.productLinkDetailPage.forEach(element => element.href = detailPageUrl);
    }
  }

  /**
   * Gets the product card 'add to cart' URL.
   */
  get addToCartUrl() {
    if (this.productLinkAddToCart) {
      return this.productLinkAddToCart.href;
    }
  }

  /**
   * Sets the product card 'add to cart' URL.
   * @param addToCartUrl A product card 'add to cart' URL.
   */
  set addToCartUrl(addToCartUrl) {
    if (this.productLinkAddToCart) {
      this.productLinkAddToCart.href = addToCartUrl;
    }
    this.dispatchCustomEvent(EVENT_UPDATE_ADD_TO_CART_URL, {
      sku: this.getSkuFromUrl(addToCartUrl)
    });
  }

  /**
   * Gets the product card AJAX 'add to cart' URL.
   */
  get ajaxAddToCartUrl() {
    if (this.productAjaxButtonAddToCart) {
      return this.productAjaxButtonAddToCart.dataset.url;
    }
  }

  /**
   * Sets the product card AJAX 'add to cart' URL.
   * @param ajaxAddToCartUrl A product card AJAX 'add to cart' URL.
   */
  set ajaxAddToCartUrl(ajaxAddToCartUrl) {
    if (this.productAjaxButtonAddToCart) {
      this.productAjaxButtonAddToCart.disabled = !ajaxAddToCartUrl;
      this.productAjaxButtonAddToCart.dataset.url = ajaxAddToCartUrl;
    }
    this.dispatchCustomEvent(EVENT_UPDATE_AJAX_ADD_TO_CART_URL, {
      sku: this.getSkuFromUrl(ajaxAddToCartUrl)
    });
  }

  /**
   * Gets the product card 'add to cart' form action.
   */
  get addToCartFormAction() {
    if (this.productFormAddToCart) {
      return this.productFormAddToCart.action;
    }
    if (this.productButtonAddToCart) {
      return this.productButtonAddToCart.dataset.formAction;
    }
  }

  /**
   * Sets the product card 'add to cart' form action.
   * @param addToCartFormAction A product card 'add to cart' form action.
   */
  set addToCartFormAction(addToCartFormAction) {
    if (this.productFormAddToCart) {
      this.productFormAddToCart.action = addToCartFormAction;
    }
    if (this.productButtonAddToCart) {
      this.productButtonAddToCart.dataset.formAction = addToCartFormAction;
    }
    this.dispatchCustomEvent(EVENT_UPDATE_ADD_TO_CART_FORM_ACTION, {
      sku: this.getSkuFromUrl(addToCartFormAction)
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNuQixvQkFBb0IsRUFBRTtNQUMzQixJQUFJLENBQUNBLG9CQUFvQixDQUFDb0MsTUFBTSxHQUFHakIsbUJBQW1CO0lBQzFEO0lBRUEsSUFBSSxJQUFJLENBQUNsQixzQkFBc0IsRUFBRTtNQUM3QixJQUFJLENBQUNBLHNCQUFzQixDQUFDaUMsT0FBTyxDQUFDRyxVQUFVLEdBQUdsQixtQkFBbUI7SUFDeEU7SUFFQSxJQUFJLENBQUNsQyxtQkFBbUIsQ0FBQ08sb0NBQW9DLEVBQUU7TUFDM0R1QixHQUFHLEVBQUUsSUFBSSxDQUFDSyxhQUFhLENBQUNELG1CQUFtQjtJQUMvQyxDQUFDLENBQUM7RUFDTjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vc3JjL1B5ei9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS1saXN0L3Byb2R1Y3QtaXRlbS1saXN0LnRzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3NyYy9QeXovWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLnRzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuLi9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEl0ZW1MaXN0IGV4dGVuZHMgUHJvZHVjdEl0ZW0ge1xuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RJdGVtQ29yZSwge1xuICAgIFByb2R1Y3RJdGVtRGF0YSBhcyBQcm9kdWN0SXRlbURhdGFDb3JlLFxufSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbSc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfUkVWSUVXX0NPVU5UID0gJ3VwZGF0ZVJldmlld0NvdW50JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SXRlbURhdGEgZXh0ZW5kcyBQcm9kdWN0SXRlbURhdGFDb3JlIHtcbiAgICByZXZpZXdDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0SXRlbSBleHRlbmRzIFByb2R1Y3RJdGVtQ29yZSB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RSZXZpZXdDb3VudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3Q291bnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcmV2aWV3LWNvdW50YClbMF07XG5cbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHNldCBvcmlnaW5hbFByaWNlKG9yaWdpbmFsUHJpY2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZS5pbm5lclRleHQgPSBvcmlnaW5hbFByaWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXREZWZhdWx0UHJpY2VDb2xvcihvcmlnaW5hbFByaWNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFByaWNlQ29sb3Iob3JpZ2luYWxQcmljZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9yaWdpbmFsUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGVmYXVsdFByaWNlQ29sb3JDbGFzc05hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UuY2xhc3NMaXN0LmFkZCh0aGlzLmRlZmF1bHRQcmljZUNvbG9yQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9kdWN0SXRlbURhdGEoZGF0YTogUHJvZHVjdEl0ZW1EYXRhKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RJdGVtRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5yZXZpZXdDb3VudCA9IGRhdGEucmV2aWV3Q291bnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldCByZXZpZXdDb3VudChyZXZpZXdDb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfUkVWSUVXX0NPVU5ULCB7IHJldmlld0NvdW50IH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZGVmYXVsdFByaWNlQ29sb3JDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LXByaWNlLWNvbG9yLWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL21vZGVscy9jb21wb25lbnQnO1xuXG4vKipcbiAqIEBldmVudCB1cGRhdGVSYXRpbmcgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0IHJhdGluZyBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUxhYmVscyBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgbGFiZWxzIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlQWRkVG9DYXJ0VXJsIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCAnYWRkIHRvIGNhcnQnIFVSTCBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUFqYXhBZGRUb0NhcnRVcmwgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0IEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVBZGRUb0NhcnRGb3JtQWN0aW9uIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfUkFUSU5HID0gJ3VwZGF0ZVJhdGluZyc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0xBQkVMUyA9ICd1cGRhdGVMYWJlbHMnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwgPSAndXBkYXRlQWRkVG9DYXJ0VXJsJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfQUpBWF9BRERfVE9fQ0FSVF9VUkwgPSAndXBkYXRlQWpheEFkZFRvQ2FydFVybCc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX0ZPUk1fQUNUSU9OID0gJ3VwZGF0ZUFkZFRvQ2FydEZvcm1BY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJdGVtTGFiZWxzRGF0YSB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SXRlbURhdGEge1xuICAgIGltYWdlVXJsOiBzdHJpbmc7XG4gICAgaW1hZ2VBbHQ6IHN0cmluZztcbiAgICBsYWJlbHM6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICByYXRpbmdWYWx1ZTogbnVtYmVyO1xuICAgIGRlZmF1bHRQcmljZTogc3RyaW5nO1xuICAgIHNrdT86IHN0cmluZztcbiAgICBvcmlnaW5hbFByaWNlOiBzdHJpbmc7XG4gICAgZGV0YWlsUGFnZVVybDogc3RyaW5nO1xuICAgIGFkZFRvQ2FydFVybDogc3RyaW5nO1xuICAgIGFqYXhBZGRUb0NhcnRVcmw/OiBzdHJpbmc7XG4gICAgYWRkVG9DYXJ0Rm9ybUFjdGlvbj86IHN0cmluZztcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdE5hbWU6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0UmF0aW5nOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0RGVmYXVsdFByaWNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNrdTogSFRNTE1ldGFFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0T3JpZ2luYWxQcmljZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMaW5rRGV0YWlsUGFnZTogSFRNTEFuY2hvckVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExpbmtBZGRUb0NhcnQ6IEhUTUxBbmNob3JFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RGb3JtQWRkVG9DYXJ0OiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RCdXR0b25BZGRUb0NhcnQ6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvZHVjdEltYWdlID0gPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9faW1hZ2VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19uYW1lYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdFJhdGluZyA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3JhdGluZ2ApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZGVmYXVsdC1wcmljZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RTa3UgPSA8SFRNTE1ldGFFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3NrdWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX29yaWdpbmFsLXByaWNlYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlID0gPEhUTUxBbmNob3JFbGVtZW50W10+KFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19saW5rLWRldGFpbC1wYWdlYCkpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQgPSA8SFRNTEFuY2hvckVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGluay1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fYWpheC1idXR0b24tYWRkLXRvLWNhcnRgKVswXVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0ID0gPEhUTUxGb3JtRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19mb3JtLWFkZC10by1jYXJ0YClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19idXR0b24tYWRkLXRvLWNhcnRgKVswXVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gZGF0YSBBIGRhdGEgb2JqZWN0IGZvciBzZXR0aW5nIHRoZSBwcm9kdWN0IGNhcmQgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEl0ZW1EYXRhKGRhdGE6IFByb2R1Y3RJdGVtRGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gZGF0YS5pbWFnZVVybDtcbiAgICAgICAgdGhpcy5pbWFnZUFsdCA9IGRhdGEuaW1hZ2VBbHQ7XG4gICAgICAgIHRoaXMubGFiZWxzID0gZGF0YS5sYWJlbHM7XG4gICAgICAgIHRoaXMucHJvZHVjdEl0ZW1OYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLnJhdGluZ1ZhbHVlID0gZGF0YS5yYXRpbmdWYWx1ZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJpY2UgPSBkYXRhLmRlZmF1bHRQcmljZTtcbiAgICAgICAgdGhpcy5za3UgPSBkYXRhLnNrdSA/PyBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUHJpY2UgPSBkYXRhLm9yaWdpbmFsUHJpY2U7XG4gICAgICAgIHRoaXMuZGV0YWlsUGFnZVVybCA9IGRhdGEuZGV0YWlsUGFnZVVybDtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRVcmwgPSBkYXRhLmFkZFRvQ2FydFVybDtcbiAgICAgICAgdGhpcy5hamF4QWRkVG9DYXJ0VXJsID0gZGF0YS5hamF4QWRkVG9DYXJ0VXJsID8/IG51bGw7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0Rm9ybUFjdGlvbiA9IGRhdGEuYWRkVG9DYXJ0Rm9ybUFjdGlvbiA/PyBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRTa3VGcm9tVXJsKHVybDogVXJsKTogVXJsIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFzdFBhcnRPZlVybCA9IG5ldyBSZWdFeHAoYChbXlxcXFwvXSkrJGAsICdnJyk7XG4gICAgICAgIGNvbnN0IHNrdSA9IHVybC5tYXRjaChsYXN0UGFydE9mVXJsKTtcblxuICAgICAgICByZXR1cm4gc2t1WzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBpbWFnZSBVUkwuXG4gICAgICovXG4gICAgZ2V0IGltYWdlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEltYWdlLnNyYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBpbWFnZSBVUkwuXG4gICAgICogQHBhcmFtIGltYWdlVXJsIEEgcHJvZHVjdCBjYXJkIGltYWdlIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgaW1hZ2VVcmwoaW1hZ2VVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlLnNyYyA9IGltYWdlVXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGltYWdlIGFsdC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VBbHQgQSBwcm9kdWN0IGNhcmQgaW1hZ2UgYWx0LlxuICAgICAqL1xuICAgIHNldCBpbWFnZUFsdChpbWFnZUFsdDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2UuYWx0ID0gaW1hZ2VBbHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgbGFiZWxzLlxuICAgICAqIEBwYXJhbSBsYWJlbHMgQW4gYXJyYXkgb2YgcHJvZHVjdCBjYXJkIGxhYmVscy5cbiAgICAgKi9cbiAgICBzZXQgbGFiZWxzKGxhYmVsczogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhW10pIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9MQUJFTFMsIHsgbGFiZWxzIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBuYW1lLlxuICAgICAqL1xuICAgIGdldCBwcm9kdWN0SXRlbU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3ROYW1lLmlubmVyVGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBuYW1lLlxuICAgICAqIEBwYXJhbSBuYW1lIEEgcHJvZHVjdCBjYXJkIG5hbWUuXG4gICAgICovXG4gICAgc2V0IHByb2R1Y3RJdGVtTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCByYXRpbmcuXG4gICAgICovXG4gICAgZ2V0IHJhdGluZ1ZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RSYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5wcm9kdWN0UmF0aW5nLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCByYXRpbmcuXG4gICAgICogQHBhcmFtIHJhdGluZyBBIHByb2R1Y3QgY2FyZCByYXRpbmcuXG4gICAgICovXG4gICAgc2V0IHJhdGluZ1ZhbHVlKHJhdGluZzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfUkFUSU5HLCB7IHJhdGluZyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGVmYXVsdCBwcmljZS5cbiAgICAgKi9cbiAgICBnZXQgZGVmYXVsdFByaWNlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRlZmF1bHQgcHJpY2UuXG4gICAgICogQHBhcmFtIGRlZmF1bHRQcmljZSBBIHByb2R1Y3QgY2FyZCBkZWZhdWx0IHByaWNlLlxuICAgICAqL1xuICAgIHNldCBkZWZhdWx0UHJpY2UoZGVmYXVsdFByaWNlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlLmlubmVyVGV4dCA9IGRlZmF1bHRQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBza3UuXG4gICAgICovXG4gICAgZ2V0IHNrdSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0U2t1KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2t1LmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgc2t1LlxuICAgICAqIEBwYXJhbSBwcm9kdWN0U2t1IEEgcHJvZHVjdCBjYXJkIHNrdS5cbiAgICAgKi9cbiAgICBzZXQgc2t1KHByb2R1Y3RTa3U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0U2t1KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RTa3UuY29udGVudCA9IHByb2R1Y3RTa3U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgb3JpZ2luYWwgcHJpY2UuXG4gICAgICovXG4gICAgZ2V0IG9yaWdpbmFsUHJpY2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlLmlubmVyVGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxQcmljZSBBIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKi9cbiAgICBzZXQgb3JpZ2luYWxQcmljZShvcmlnaW5hbFByaWNlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UuaW5uZXJUZXh0ID0gb3JpZ2luYWxQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBkZXRhaWwgcGFnZSBVUkwuXG4gICAgICovXG4gICAgZ2V0IGRldGFpbFBhZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2VbMF0uaHJlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBkZXRhaWwgcGFnZSBVUkwuXG4gICAgICogQHBhcmFtIGRldGFpbFBhZ2VVcmwgQSBwcm9kdWN0IGNhcmQgZGV0YWlsIHBhZ2UgVVJMLlxuICAgICAqL1xuICAgIHNldCBkZXRhaWxQYWdlVXJsKGRldGFpbFBhZ2VVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSA9PiAoZWxlbWVudC5ocmVmID0gZGV0YWlsUGFnZVVybCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIGdldCBhZGRUb0NhcnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0LmhyZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICogQHBhcmFtIGFkZFRvQ2FydFVybCBBIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgYWRkVG9DYXJ0VXJsKGFkZFRvQ2FydFVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0LmhyZWYgPSBhZGRUb0NhcnRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCwgeyBza3U6IHRoaXMuZ2V0U2t1RnJvbVVybChhZGRUb0NhcnRVcmwpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBBSkFYICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIGdldCBhamF4QWRkVG9DYXJ0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LnVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBBSkFYICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqIEBwYXJhbSBhamF4QWRkVG9DYXJ0VXJsIEEgcHJvZHVjdCBjYXJkIEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgc2V0IGFqYXhBZGRUb0NhcnRVcmwoYWpheEFkZFRvQ2FydFVybDogVXJsKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0LmRpc2FibGVkID0gIWFqYXhBZGRUb0NhcnRVcmw7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQudXJsID0gYWpheEFkZFRvQ2FydFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfQUpBWF9BRERfVE9fQ0FSVF9VUkwsIHsgc2t1OiB0aGlzLmdldFNrdUZyb21VcmwoYWpheEFkZFRvQ2FydFVybCkgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24uXG4gICAgICovXG4gICAgZ2V0IGFkZFRvQ2FydEZvcm1BY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0LmFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQuZGF0YXNldC5mb3JtQWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24uXG4gICAgICogQHBhcmFtIGFkZFRvQ2FydEZvcm1BY3Rpb24gQSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbi5cbiAgICAgKi9cbiAgICBzZXQgYWRkVG9DYXJ0Rm9ybUFjdGlvbihhZGRUb0NhcnRGb3JtQWN0aW9uOiBVcmwpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQuYWN0aW9uID0gYWRkVG9DYXJ0Rm9ybUFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LmZvcm1BY3Rpb24gPSBhZGRUb0NhcnRGb3JtQWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9GT1JNX0FDVElPTiwge1xuICAgICAgICAgICAgc2t1OiB0aGlzLmdldFNrdUZyb21VcmwoYWRkVG9DYXJ0Rm9ybUFjdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsIlByb2R1Y3RJdGVtTGlzdCIsImluaXQiLCJQcm9kdWN0SXRlbUNvcmUiLCJFVkVOVF9VUERBVEVfUkVWSUVXX0NPVU5UIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJwcm9kdWN0UmV2aWV3Q291bnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwib3JpZ2luYWxQcmljZSIsInByb2R1Y3RPcmlnaW5hbFByaWNlIiwiaW5uZXJUZXh0Iiwic2V0RGVmYXVsdFByaWNlQ29sb3IiLCJwcm9kdWN0RGVmYXVsdFByaWNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZGVmYXVsdFByaWNlQ29sb3JDbGFzc05hbWUiLCJhZGQiLCJ1cGRhdGVQcm9kdWN0SXRlbURhdGEiLCJkYXRhIiwicmV2aWV3Q291bnQiLCJkaXNwYXRjaEN1c3RvbUV2ZW50IiwiZ2V0QXR0cmlidXRlIiwiQ29tcG9uZW50IiwiRVZFTlRfVVBEQVRFX1JBVElORyIsIkVWRU5UX1VQREFURV9MQUJFTFMiLCJFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfVVJMIiwiRVZFTlRfVVBEQVRFX0FKQVhfQUREX1RPX0NBUlRfVVJMIiwiRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX0ZPUk1fQUNUSU9OIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0UmF0aW5nIiwicHJvZHVjdFNrdSIsInByb2R1Y3RMaW5rRGV0YWlsUGFnZSIsInByb2R1Y3RMaW5rQWRkVG9DYXJ0IiwicHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQiLCJwcm9kdWN0Rm9ybUFkZFRvQ2FydCIsInByb2R1Y3RCdXR0b25BZGRUb0NhcnQiLCJyZWFkeUNhbGxiYWNrIiwiQXJyYXkiLCJmcm9tIiwiX2RhdGEkc2t1IiwiX2RhdGEkYWpheEFkZFRvQ2FydFVyIiwiX2RhdGEkYWRkVG9DYXJ0Rm9ybUFjIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsImxhYmVscyIsInByb2R1Y3RJdGVtTmFtZSIsIm5hbWUiLCJyYXRpbmdWYWx1ZSIsImRlZmF1bHRQcmljZSIsInNrdSIsImRldGFpbFBhZ2VVcmwiLCJhZGRUb0NhcnRVcmwiLCJhamF4QWRkVG9DYXJ0VXJsIiwiYWRkVG9DYXJ0Rm9ybUFjdGlvbiIsImdldFNrdUZyb21VcmwiLCJ1cmwiLCJsYXN0UGFydE9mVXJsIiwiUmVnRXhwIiwibWF0Y2giLCJzcmMiLCJhbHQiLCJOdW1iZXIiLCJ2YWx1ZSIsInJhdGluZyIsImNvbnRlbnQiLCJocmVmIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJmb3JtQWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==