"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["rating-selector"],{

/***/ "./src/Pyz/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingSelector)
/* harmony export */ });
/* harmony import */ var ProductReviewWidget_components_molecules_rating_selector_rating_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ProductReviewWidget/components/molecules/rating-selector/rating-selector */ "./vendor/spryker-shop/product-review-widget/src/SprykerShop/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts");
/* harmony import */ var src_ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/ShopUi/components/molecules/product-item/product-item */ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");


class RatingSelector extends ProductReviewWidget_components_molecules_rating_selector_rating_selector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.reviewCount = void 0;
  }
  init() {
    this.reviewCount = this.getElementsByClassName(this.jsName + "__review-count")[0];
    super.init();
  }
  mapUpdateRatingEvents() {
    super.mapUpdateRatingEvents();
    this.mapProductItemUpdateReviewCountCustomEvent();
  }
  mapProductItemUpdateReviewCountCustomEvent() {
    if (!this.productItem) {
      return;
    }
    this.productItem.addEventListener(src_ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__.EVENT_UPDATE_REVIEW_COUNT, event => {
      this.updateReviewCount(event.detail.reviewCount);
    });
  }
  updateReviewCount(value) {
    if (this.reviewCount) {
      this.reviewCount.innerText = "(" + value + ")";
    }
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

/***/ "./vendor/spryker-shop/product-review-widget/src/SprykerShop/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-review-widget/src/SprykerShop/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingSelector)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/components/molecules/product-item/product-item */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");


class RatingSelector extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    /**
     * The input element.
     */
    this.input = void 0;
    /**
     * Collection of the elements which toggle the steps of the product review.
     */
    this.steps = void 0;
    this.productItem = void 0;
  }
  readyCallback() {
    this.input = this.getElementsByClassName(this.jsName + "__input")[0];
    this.steps = Array.from(this.getElementsByClassName(this.jsName + "__step"));
    if (this.productItemClassName) {
      this.productItem = this.closest("." + this.productItemClassName);
    }
    if (!this.readOnly) {
      this.checkInput(this.value);
      this.mapEvents();
    }
    this.mapUpdateRatingEvents();
  }
  mapEvents() {
    this.mapStepClickEvent();
  }
  mapStepClickEvent() {
    this.steps.forEach(step => {
      step.addEventListener('click', event => this.onStepClick(event));
    });
  }
  mapUpdateRatingEvents() {
    if (!this.productItem) {
      return;
    }
    this.mapProductItemUpdateRatingCustomEvent();
  }
  mapProductItemUpdateRatingCustomEvent() {
    this.productItem.addEventListener(ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__.EVENT_UPDATE_RATING, event => {
      this.updateRating(event.detail.rating);
    });
  }
  onStepClick(event) {
    var step = event.currentTarget;
    var newValue = parseFloat(step.getAttribute('data-step-value'));
    this.checkInput(newValue);
    this.updateRating(newValue);
  }

  /**
   * Toggles the disabled attribute of the input element.
   * @param value A number for checking if the attribute is to be set or removed from the input element.
   */
  checkInput(value) {
    if (!this.disableIfEmptyValue) {
      return;
    }
    if (!value) {
      this.input.setAttribute('disabled', 'disabled');
      return;
    }
    this.input.removeAttribute('disabled');
  }

  /**
   * Sets the value attribute and toggles the special class name.
   * @param value A number for setting the attribute.
   */
  updateRating(value) {
    this.input.setAttribute('value', "" + value);
    this.steps.forEach(step => {
      var stepValue = parseFloat(step.getAttribute('data-step-value'));
      if (value >= stepValue) {
        step.classList.add(this.name + "__step--active");
        return;
      }
      step.classList.remove(this.name + "__step--active");
    });
  }

  /**
   * Gets an input value.
   */
  get value() {
    return parseFloat(this.input.value);
  }

  /**
   * Gets if the element is read-only.
   */
  get readOnly() {
    return this.hasAttribute('readonly');
  }

  /**
   * Gets if the element has an empty value.
   */
  get disableIfEmptyValue() {
    return this.hasAttribute('disable-if-empty-value');
  }
  get productItemClassName() {
    return this.getAttribute('product-item-class-name');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFQSxJQUFJLENBQUN2RCxtQkFBbUIsQ0FBQ2dDLGlDQUFpQyxFQUFFO01BQUVvQixHQUFHLEVBQUUsSUFBSSxDQUFDSyxhQUFhLENBQUNGLGdCQUFnQjtJQUFFLENBQUMsQ0FBQztFQUM5Rzs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJQyxtQkFBbUJBLENBQUEsRUFBVztJQUM5QixJQUFJLElBQUksQ0FBQ2Ysb0JBQW9CLEVBQUU7TUFDM0IsT0FBTyxJQUFJLENBQUNBLG9CQUFvQixDQUFDNkIsTUFBTTtJQUMzQztJQUVBLElBQUksSUFBSSxDQUFDNUIsc0JBQXNCLEVBQUU7TUFDN0IsT0FBTyxJQUFJLENBQUNBLHNCQUFzQixDQUFDMEIsT0FBTyxDQUFDRyxVQUFVO0lBQ3pEO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFDSSxJQUFJZixtQkFBbUJBLENBQUNBLG1CQUF3QixFQUFFO0lBQzlDLElBQUksSUFBSSxDQUFDZixvQkFBb0IsRUFBRTtNQUMzQixJQUFJLENBQUNBLG9CQUFvQixDQUFDNkIsTUFBTSxHQUFHZCxtQkFBbUI7SUFDMUQ7SUFFQSxJQUFJLElBQUksQ0FBQ2Qsc0JBQXNCLEVBQUU7TUFDN0IsSUFBSSxDQUFDQSxzQkFBc0IsQ0FBQzBCLE9BQU8sQ0FBQ0csVUFBVSxHQUFHZixtQkFBbUI7SUFDeEU7SUFFQSxJQUFJLENBQUN4RCxtQkFBbUIsQ0FBQ2lDLG9DQUFvQyxFQUFFO01BQzNEbUIsR0FBRyxFQUFFLElBQUksQ0FBQ0ssYUFBYSxDQUFDRCxtQkFBbUI7SUFDL0MsQ0FBQyxDQUFDO0VBQ047QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3NyYy9QeXovWXZlcy9Qcm9kdWN0UmV2aWV3V2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcmF0aW5nLXNlbGVjdG9yL3JhdGluZy1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3QtcmV2aWV3LXdpZGdldC9zcmMvU3ByeWtlclNob3AvWXZlcy9Qcm9kdWN0UmV2aWV3V2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcmF0aW5nLXNlbGVjdG9yL3JhdGluZy1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmF0aW5nU2VsZWN0b3JDb3JlIGZyb20gJ1Byb2R1Y3RSZXZpZXdXaWRnZXQvY29tcG9uZW50cy9tb2xlY3VsZXMvcmF0aW5nLXNlbGVjdG9yL3JhdGluZy1zZWxlY3Rvcic7XG5pbXBvcnQgeyBFVkVOVF9VUERBVEVfUkVWSUVXX0NPVU5UIH0gZnJvbSAnc3JjL1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0aW5nU2VsZWN0b3IgZXh0ZW5kcyBSYXRpbmdTZWxlY3RvckNvcmUge1xuICAgIHByb3RlY3RlZCByZXZpZXdDb3VudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXZpZXdDb3VudCA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19yZXZpZXctY291bnRgKVswXTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFVwZGF0ZVJhdGluZ0V2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIubWFwVXBkYXRlUmF0aW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMubWFwUHJvZHVjdEl0ZW1VcGRhdGVSZXZpZXdDb3VudEN1c3RvbUV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFByb2R1Y3RJdGVtVXBkYXRlUmV2aWV3Q291bnRDdXN0b21FdmVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfVVBEQVRFX1JFVklFV19DT1VOVCwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXZpZXdDb3VudCgoPEN1c3RvbUV2ZW50PmV2ZW50KS5kZXRhaWwucmV2aWV3Q291bnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUmV2aWV3Q291bnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yZXZpZXdDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5yZXZpZXdDb3VudC5pbm5lclRleHQgPSBgKCR7dmFsdWV9KWA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvZHVjdEl0ZW1Db3JlLCB7XG4gICAgUHJvZHVjdEl0ZW1EYXRhIGFzIFByb2R1Y3RJdGVtRGF0YUNvcmUsXG59IGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtJztcblxuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9SRVZJRVdfQ09VTlQgPSAndXBkYXRlUmV2aWV3Q291bnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJdGVtRGF0YSBleHRlbmRzIFByb2R1Y3RJdGVtRGF0YUNvcmUge1xuICAgIHJldmlld0NvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RJdGVtIGV4dGVuZHMgUHJvZHVjdEl0ZW1Db3JlIHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFJldmlld0NvdW50OiBIVE1MRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdDb3VudCA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19yZXZpZXctY291bnRgKVswXTtcblxuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgc2V0IG9yaWdpbmFsUHJpY2Uob3JpZ2luYWxQcmljZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlLmlubmVyVGV4dCA9IG9yaWdpbmFsUHJpY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldERlZmF1bHRQcmljZUNvbG9yKG9yaWdpbmFsUHJpY2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0UHJpY2VDb2xvcihvcmlnaW5hbFByaWNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3JpZ2luYWxQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kZWZhdWx0UHJpY2VDb2xvckNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZS5jbGFzc0xpc3QuYWRkKHRoaXMuZGVmYXVsdFByaWNlQ29sb3JDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2R1Y3RJdGVtRGF0YShkYXRhOiBQcm9kdWN0SXRlbURhdGEpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEl0ZW1EYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLnJldmlld0NvdW50ID0gZGF0YS5yZXZpZXdDb3VudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0IHJldmlld0NvdW50KHJldmlld0NvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9SRVZJRVdfQ09VTlQsIHsgcmV2aWV3Q291bnQgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBkZWZhdWx0UHJpY2VDb2xvckNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtcHJpY2UtY29sb3ItY2xhc3MtbmFtZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuaW1wb3J0IFByb2R1Y3RJdGVtLCB7IEVWRU5UX1VQREFURV9SQVRJTkcgfSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGluZ1NlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdGhlIGVsZW1lbnRzIHdoaWNoIHRvZ2dsZSB0aGUgc3RlcHMgb2YgdGhlIHByb2R1Y3QgcmV2aWV3LlxuICAgICAqL1xuICAgIHN0ZXBzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0SXRlbTogUHJvZHVjdEl0ZW07XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2lucHV0YClbMF07XG4gICAgICAgIHRoaXMuc3RlcHMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3N0ZXBgKSk7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJdGVtQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJdGVtID0gPFByb2R1Y3RJdGVtPnRoaXMuY2xvc2VzdChgLiR7dGhpcy5wcm9kdWN0SXRlbUNsYXNzTmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5yZWFkT25seSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0lucHV0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwVXBkYXRlUmF0aW5nRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBTdGVwQ2xpY2tFdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBTdGVwQ2xpY2tFdmVudCgpIHtcbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgc3RlcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25TdGVwQ2xpY2soZXZlbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFVwZGF0ZVJhdGluZ0V2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcFByb2R1Y3RJdGVtVXBkYXRlUmF0aW5nQ3VzdG9tRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUHJvZHVjdEl0ZW1VcGRhdGVSYXRpbmdDdXN0b21FdmVudCgpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKEVWRU5UX1VQREFURV9SQVRJTkcsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmF0aW5nKCg8Q3VzdG9tRXZlbnQ+ZXZlbnQpLmRldGFpbC5yYXRpbmcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25TdGVwQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KHN0ZXAuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAtdmFsdWUnKSk7XG5cbiAgICAgICAgdGhpcy5jaGVja0lucHV0KG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXRpbmcobmV3VmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBudW1iZXIgZm9yIGNoZWNraW5nIGlmIHRoZSBhdHRyaWJ1dGUgaXMgdG8gYmUgc2V0IG9yIHJlbW92ZWQgZnJvbSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjaGVja0lucHV0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVJZkVtcHR5VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgYW5kIHRvZ2dsZXMgdGhlIHNwZWNpYWwgY2xhc3MgbmFtZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBudW1iZXIgZm9yIHNldHRpbmcgdGhlIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVSYXRpbmcodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt2YWx1ZX1gKTtcblxuICAgICAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXA6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBwYXJzZUZsb2F0KHN0ZXAuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAtdmFsdWUnKSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSBzdGVwVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzdGVwLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5uYW1lfV9fc3RlcC0tYWN0aXZlYCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0ZXAuY2xhc3NMaXN0LnJlbW92ZShgJHt0aGlzLm5hbWV9X19zdGVwLS1hY3RpdmVgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpZiB0aGUgZWxlbWVudCBpcyByZWFkLW9ubHkuXG4gICAgICovXG4gICAgZ2V0IHJlYWRPbmx5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpZiB0aGUgZWxlbWVudCBoYXMgYW4gZW1wdHkgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IGRpc2FibGVJZkVtcHR5VmFsdWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZS1pZi1lbXB0eS12YWx1ZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcHJvZHVjdEl0ZW1DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwcm9kdWN0LWl0ZW0tY2xhc3MtbmFtZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQGV2ZW50IHVwZGF0ZVJhdGluZyBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgcmF0aW5nIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlTGFiZWxzIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCBsYWJlbHMgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVBZGRUb0NhcnRVcmwgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0ICdhZGQgdG8gY2FydCcgVVJMIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlQWpheEFkZFRvQ2FydFVybCBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTCBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUFkZFRvQ2FydEZvcm1BY3Rpb24gQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0ICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9SQVRJTkcgPSAndXBkYXRlUmF0aW5nJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfTEFCRUxTID0gJ3VwZGF0ZUxhYmVscyc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCA9ICd1cGRhdGVBZGRUb0NhcnRVcmwnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCA9ICd1cGRhdGVBamF4QWRkVG9DYXJ0VXJsJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04gPSAndXBkYXRlQWRkVG9DYXJ0Rm9ybUFjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEl0ZW1MYWJlbHNEYXRhIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJdGVtRGF0YSB7XG4gICAgaW1hZ2VVcmw6IHN0cmluZztcbiAgICBpbWFnZUFsdDogc3RyaW5nO1xuICAgIGxhYmVsczogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhW107XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHJhdGluZ1ZhbHVlOiBudW1iZXI7XG4gICAgZGVmYXVsdFByaWNlOiBzdHJpbmc7XG4gICAgc2t1Pzogc3RyaW5nO1xuICAgIG9yaWdpbmFsUHJpY2U6IHN0cmluZztcbiAgICBkZXRhaWxQYWdlVXJsOiBzdHJpbmc7XG4gICAgYWRkVG9DYXJ0VXJsOiBzdHJpbmc7XG4gICAgYWpheEFkZFRvQ2FydFVybD86IHN0cmluZztcbiAgICBhZGRUb0NhcnRGb3JtQWN0aW9uPzogc3RyaW5nO1xufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TmFtZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RSYXRpbmc6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3REZWZhdWx0UHJpY2U6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0U2t1OiBIVE1MTWV0YUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RPcmlnaW5hbFByaWNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExpbmtEZXRhaWxQYWdlOiBIVE1MQW5jaG9yRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TGlua0FkZFRvQ2FydDogSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEZvcm1BZGRUb0NhcnQ6IEhUTUxGb3JtRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEJ1dHRvbkFkZFRvQ2FydDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2UgPSA8SFRNTEltYWdlRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbWFnZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX25hbWVgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmF0aW5nID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcmF0aW5nYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19kZWZhdWx0LXByaWNlYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdFNrdSA9IDxIVE1MTWV0YUVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2t1YClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fb3JpZ2luYWwtcHJpY2VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UgPSA8SFRNTEFuY2hvckVsZW1lbnRbXT4oXG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xpbmstZGV0YWlsLXBhZ2VgKSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCA9IDxIVE1MQW5jaG9yRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19saW5rLWFkZC10by1jYXJ0YClbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19hamF4LWJ1dHRvbi1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQgPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2Zvcm0tYWRkLXRvLWNhcnRgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0ID0gPEhUTUxCdXR0b25FbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2J1dHRvbi1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSBkYXRhIEEgZGF0YSBvYmplY3QgZm9yIHNldHRpbmcgdGhlIHByb2R1Y3QgY2FyZCBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0SXRlbURhdGEoZGF0YTogUHJvZHVjdEl0ZW1EYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBkYXRhLmltYWdlVXJsO1xuICAgICAgICB0aGlzLmltYWdlQWx0ID0gZGF0YS5pbWFnZUFsdDtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBkYXRhLmxhYmVscztcbiAgICAgICAgdGhpcy5wcm9kdWN0SXRlbU5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMucmF0aW5nVmFsdWUgPSBkYXRhLnJhdGluZ1ZhbHVlO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmljZSA9IGRhdGEuZGVmYXVsdFByaWNlO1xuICAgICAgICB0aGlzLnNrdSA9IGRhdGEuc2t1ID8/IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQcmljZSA9IGRhdGEub3JpZ2luYWxQcmljZTtcbiAgICAgICAgdGhpcy5kZXRhaWxQYWdlVXJsID0gZGF0YS5kZXRhaWxQYWdlVXJsO1xuICAgICAgICB0aGlzLmFkZFRvQ2FydFVybCA9IGRhdGEuYWRkVG9DYXJ0VXJsO1xuICAgICAgICB0aGlzLmFqYXhBZGRUb0NhcnRVcmwgPSBkYXRhLmFqYXhBZGRUb0NhcnRVcmwgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRGb3JtQWN0aW9uID0gZGF0YS5hZGRUb0NhcnRGb3JtQWN0aW9uID8/IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFNrdUZyb21VcmwodXJsOiBVcmwpOiBVcmwge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0UGFydE9mVXJsID0gbmV3IFJlZ0V4cChgKFteXFxcXC9dKSskYCwgJ2cnKTtcbiAgICAgICAgY29uc3Qgc2t1ID0gdXJsLm1hdGNoKGxhc3RQYXJ0T2ZVcmwpO1xuXG4gICAgICAgIHJldHVybiBza3VbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIGltYWdlIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgaW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0SW1hZ2Uuc3JjO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGltYWdlIFVSTC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VVcmwgQSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqL1xuICAgIHNldCBpbWFnZVVybChpbWFnZVVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgYWx0LlxuICAgICAqIEBwYXJhbSBpbWFnZUFsdCBBIHByb2R1Y3QgY2FyZCBpbWFnZSBhbHQuXG4gICAgICovXG4gICAgc2V0IGltYWdlQWx0KGltYWdlQWx0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZS5hbHQgPSBpbWFnZUFsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBsYWJlbHMuXG4gICAgICogQHBhcmFtIGxhYmVscyBBbiBhcnJheSBvZiBwcm9kdWN0IGNhcmQgbGFiZWxzLlxuICAgICAqL1xuICAgIHNldCBsYWJlbHMobGFiZWxzOiBQcm9kdWN0SXRlbUxhYmVsc0RhdGFbXSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0xBQkVMUywgeyBsYWJlbHMgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIG5hbWUuXG4gICAgICovXG4gICAgZ2V0IHByb2R1Y3RJdGVtTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdE5hbWUuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIG5hbWUuXG4gICAgICogQHBhcmFtIG5hbWUgQSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKi9cbiAgICBzZXQgcHJvZHVjdEl0ZW1OYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIHJhdGluZy5cbiAgICAgKi9cbiAgICBnZXQgcmF0aW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdFJhdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnByb2R1Y3RSYXRpbmcudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIHJhdGluZy5cbiAgICAgKiBAcGFyYW0gcmF0aW5nIEEgcHJvZHVjdCBjYXJkIHJhdGluZy5cbiAgICAgKi9cbiAgICBzZXQgcmF0aW5nVmFsdWUocmF0aW5nOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9SQVRJTkcsIHsgcmF0aW5nIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBkZWZhdWx0IHByaWNlLlxuICAgICAqL1xuICAgIGdldCBkZWZhdWx0UHJpY2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGVmYXVsdCBwcmljZS5cbiAgICAgKiBAcGFyYW0gZGVmYXVsdFByaWNlIEEgcHJvZHVjdCBjYXJkIGRlZmF1bHQgcHJpY2UuXG4gICAgICovXG4gICAgc2V0IGRlZmF1bHRQcmljZShkZWZhdWx0UHJpY2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UuaW5uZXJUZXh0ID0gZGVmYXVsdFByaWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIHNrdS5cbiAgICAgKi9cbiAgICBnZXQgc2t1KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RTa3UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTa3UuY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBza3UuXG4gICAgICogQHBhcmFtIHByb2R1Y3RTa3UgQSBwcm9kdWN0IGNhcmQgc2t1LlxuICAgICAqL1xuICAgIHNldCBza3UocHJvZHVjdFNrdTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RTa3UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdFNrdS5jb250ZW50ID0gcHJvZHVjdFNrdTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKi9cbiAgICBnZXQgb3JpZ2luYWxQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIG9yaWdpbmFsIHByaWNlLlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFByaWNlIEEgcHJvZHVjdCBjYXJkIG9yaWdpbmFsIHByaWNlLlxuICAgICAqL1xuICAgIHNldCBvcmlnaW5hbFByaWNlKG9yaWdpbmFsUHJpY2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZS5pbm5lclRleHQgPSBvcmlnaW5hbFByaWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRldGFpbCBwYWdlIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgZGV0YWlsUGFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZVswXS5ocmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRldGFpbCBwYWdlIFVSTC5cbiAgICAgKiBAcGFyYW0gZGV0YWlsUGFnZVVybCBBIHByb2R1Y3QgY2FyZCBkZXRhaWwgcGFnZSBVUkwuXG4gICAgICovXG4gICAgc2V0IGRldGFpbFBhZ2VVcmwoZGV0YWlsUGFnZVVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UuZm9yRWFjaCgoZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpID0+IChlbGVtZW50LmhyZWYgPSBkZXRhaWxQYWdlVXJsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgZ2V0IGFkZFRvQ2FydFVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQuaHJlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKiBAcGFyYW0gYWRkVG9DYXJ0VXJsIEEgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIHNldCBhZGRUb0NhcnRVcmwoYWRkVG9DYXJ0VXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQuaHJlZiA9IGFkZFRvQ2FydFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfVVJMLCB7IHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFkZFRvQ2FydFVybCkgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgZ2V0IGFqYXhBZGRUb0NhcnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQudXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICogQHBhcmFtIGFqYXhBZGRUb0NhcnRVcmwgQSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgYWpheEFkZFRvQ2FydFVybChhamF4QWRkVG9DYXJ0VXJsOiBVcmwpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQuZGlzYWJsZWQgPSAhYWpheEFkZFRvQ2FydFVybDtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQuZGF0YXNldC51cmwgPSBhamF4QWRkVG9DYXJ0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCwgeyBza3U6IHRoaXMuZ2V0U2t1RnJvbVVybChhamF4QWRkVG9DYXJ0VXJsKSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgYWRkVG9DYXJ0Rm9ybUFjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQuYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LmZvcm1BY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbi5cbiAgICAgKiBAcGFyYW0gYWRkVG9DYXJ0Rm9ybUFjdGlvbiBBIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uLlxuICAgICAqL1xuICAgIHNldCBhZGRUb0NhcnRGb3JtQWN0aW9uKGFkZFRvQ2FydEZvcm1BY3Rpb246IFVybCkge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydC5hY3Rpb24gPSBhZGRUb0NhcnRGb3JtQWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQuZm9ybUFjdGlvbiA9IGFkZFRvQ2FydEZvcm1BY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX0ZPUk1fQUNUSU9OLCB7XG4gICAgICAgICAgICBza3U6IHRoaXMuZ2V0U2t1RnJvbVVybChhZGRUb0NhcnRGb3JtQWN0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlJhdGluZ1NlbGVjdG9yQ29yZSIsIkVWRU5UX1VQREFURV9SRVZJRVdfQ09VTlQiLCJSYXRpbmdTZWxlY3RvciIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicmV2aWV3Q291bnQiLCJpbml0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsIm1hcFVwZGF0ZVJhdGluZ0V2ZW50cyIsIm1hcFByb2R1Y3RJdGVtVXBkYXRlUmV2aWV3Q291bnRDdXN0b21FdmVudCIsInByb2R1Y3RJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXBkYXRlUmV2aWV3Q291bnQiLCJkZXRhaWwiLCJ2YWx1ZSIsImlubmVyVGV4dCIsIlByb2R1Y3RJdGVtQ29yZSIsIlByb2R1Y3RJdGVtIiwicHJvZHVjdFJldmlld0NvdW50Iiwib3JpZ2luYWxQcmljZSIsInByb2R1Y3RPcmlnaW5hbFByaWNlIiwic2V0RGVmYXVsdFByaWNlQ29sb3IiLCJwcm9kdWN0RGVmYXVsdFByaWNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZGVmYXVsdFByaWNlQ29sb3JDbGFzc05hbWUiLCJhZGQiLCJ1cGRhdGVQcm9kdWN0SXRlbURhdGEiLCJkYXRhIiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsImdldEF0dHJpYnV0ZSIsIkNvbXBvbmVudCIsIkVWRU5UX1VQREFURV9SQVRJTkciLCJpbnB1dCIsInN0ZXBzIiwicmVhZHlDYWxsYmFjayIsIkFycmF5IiwiZnJvbSIsInByb2R1Y3RJdGVtQ2xhc3NOYW1lIiwiY2xvc2VzdCIsInJlYWRPbmx5IiwiY2hlY2tJbnB1dCIsIm1hcEV2ZW50cyIsIm1hcFN0ZXBDbGlja0V2ZW50IiwiZm9yRWFjaCIsInN0ZXAiLCJvblN0ZXBDbGljayIsIm1hcFByb2R1Y3RJdGVtVXBkYXRlUmF0aW5nQ3VzdG9tRXZlbnQiLCJ1cGRhdGVSYXRpbmciLCJyYXRpbmciLCJjdXJyZW50VGFyZ2V0IiwibmV3VmFsdWUiLCJwYXJzZUZsb2F0IiwiZGlzYWJsZUlmRW1wdHlWYWx1ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInN0ZXBWYWx1ZSIsIm5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJFVkVOVF9VUERBVEVfTEFCRUxTIiwiRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCIsIkVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCIsIkVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9GT1JNX0FDVElPTiIsInByb2R1Y3RJbWFnZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdFJhdGluZyIsInByb2R1Y3RTa3UiLCJwcm9kdWN0TGlua0RldGFpbFBhZ2UiLCJwcm9kdWN0TGlua0FkZFRvQ2FydCIsInByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0IiwicHJvZHVjdEZvcm1BZGRUb0NhcnQiLCJwcm9kdWN0QnV0dG9uQWRkVG9DYXJ0IiwiX2RhdGEkc2t1IiwiX2RhdGEkYWpheEFkZFRvQ2FydFVyIiwiX2RhdGEkYWRkVG9DYXJ0Rm9ybUFjIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsImxhYmVscyIsInByb2R1Y3RJdGVtTmFtZSIsInJhdGluZ1ZhbHVlIiwiZGVmYXVsdFByaWNlIiwic2t1IiwiZGV0YWlsUGFnZVVybCIsImFkZFRvQ2FydFVybCIsImFqYXhBZGRUb0NhcnRVcmwiLCJhZGRUb0NhcnRGb3JtQWN0aW9uIiwiZ2V0U2t1RnJvbVVybCIsInVybCIsImxhc3RQYXJ0T2ZVcmwiLCJSZWdFeHAiLCJtYXRjaCIsInNyYyIsImFsdCIsIk51bWJlciIsImNvbnRlbnQiLCJocmVmIiwiZWxlbWVudCIsImRhdGFzZXQiLCJkaXNhYmxlZCIsImFjdGlvbiIsImZvcm1BY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9