"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["label-group"],{

/***/ "./src/Pyz/Yves/ProductLabelWidget/Theme/default/components/molecules/label-group/label-group.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductLabelWidget/Theme/default/components/molecules/label-group/label-group.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabelGroup)
/* harmony export */ });
/* harmony import */ var ProductLabelWidget_components_molecules_label_group_label_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ProductLabelWidget/components/molecules/label-group/label-group */ "./vendor/spryker-shop/product-label-widget/src/SprykerShop/Yves/ProductLabelWidget/Theme/default/components/molecules/label-group/label-group.ts");

class LabelGroup extends ProductLabelWidget_components_molecules_label_group_label_group__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setProductLabels(labels) {
    if (!labels.length) {
      this.productLabelFlags.forEach(element => element.classList.add(this.classToToggle));
      return;
    }
    this.updateProductLabels(labels);
  }
  updateProductLabels(labelFlags) {
    labelFlags.forEach((element, index) => {
      if (index) {
        this.createProductLabelFlagClones();
      }
      this.deleteProductLabelFlagClones(labelFlags);
      this.deleteProductLabelFlagModifiers(index);
      this.updateProductLabelFlags(element, index);
    });
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/product-label-widget/src/SprykerShop/Yves/ProductLabelWidget/Theme/default/components/molecules/label-group/label-group.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-label-widget/src/SprykerShop/Yves/ProductLabelWidget/Theme/default/components/molecules/label-group/label-group.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabelGroup)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/components/molecules/product-item/product-item */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");


class LabelGroup extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productLabelFlags = void 0;
    this.productLabelTag = void 0;
    this.productItem = void 0;
  }
  readyCallback() {}
  init() {
    this.productLabelFlags = Array.from(this.getElementsByClassName(this.jsName + "__label-flag"));
    this.productLabelTag = this.getElementsByClassName(this.jsName + "__label-tag")[0];
    if (this.productItemClassName) {
      this.productItem = this.closest("." + this.productItemClassName);
    }
    this.mapEvents();
  }
  mapEvents() {
    if (!this.productItem) {
      return;
    }
    this.mapProductItemUpdateLabelsCustomEvent();
  }
  mapProductItemUpdateLabelsCustomEvent() {
    this.productItem.addEventListener(ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__.EVENT_UPDATE_LABELS, event => {
      this.setProductLabels(event.detail.labels);
    });
  }

  /**
   * Hides the product labels if data is empty.
   * Splits the labels object to labelFlags and labelTag accordingly.
   * Calls the method for updating product labels.
   * @param labels An array of product labels.
   */
  setProductLabels(labels) {
    if (!labels.length) {
      this.productLabelFlags.forEach(element => element.classList.add(this.classToToggle));
      this.productLabelTag.classList.add(this.classToToggle);
      return;
    }
    var labelTagType = this.productLabelTag.getAttribute('data-label-tag-type');
    var labelFlags = labels.filter(element => element.type !== labelTagType);
    var labelTag = labels.filter(element => element.type === labelTagType);
    if (!labelTag.length) {
      this.productLabelTag.classList.add(this.classToToggle);
    }
    if (!labelFlags.length) {
      this.productLabelFlags.forEach(element => element.classList.add(this.classToToggle));
    }
    this.updateProductLabels(labelFlags, labelTag[0]);
  }
  updateProductLabelTag(element) {
    var labelTagTextContent = this.productLabelTag.getElementsByClassName(this.jsName + "__label-tag-text")[0];
    this.productLabelTag.classList.remove(this.classToToggle);
    labelTagTextContent.innerText = element.text;
  }
  createProductLabelFlagClones() {
    var cloneLabelFlag = this.productLabelFlags[0].cloneNode(true);
    this.productLabelFlags[0].parentNode.insertBefore(cloneLabelFlag, this.productLabelFlags[0].nextSibling);
    this.productLabelFlags = Array.from(this.getElementsByClassName(this.jsName + "__label-flag"));
  }
  deleteProductLabelFlagClones(labelFlags) {
    while (this.productLabelFlags.length > labelFlags.length) {
      this.productLabelFlags[this.productLabelFlags.length - 1].remove();
      this.productLabelFlags = Array.from(this.getElementsByClassName(this.jsName + "__label-flag"));
    }
  }
  deleteProductLabelFlagModifiers(index) {
    this.productLabelFlags[index].classList.forEach(element => {
      if (element.includes('--')) {
        this.productLabelFlags[index].classList.remove(element);
      }
    });
  }
  updateProductLabelFlags(element, index) {
    var labelFlagClassName = this.productLabelFlags[index].getAttribute('data-config-name');
    var labelFlagTextContent = this.productLabelFlags[index].getElementsByClassName(this.jsName + "__label-flag-text")[0];
    if (element.type) {
      this.productLabelFlags[index].classList.add(labelFlagClassName + "--" + element.type);
    }
    this.productLabelFlags[index].classList.remove(this.classToToggle);
    labelFlagTextContent.innerText = element.text;
  }
  updateProductLabels(labelFlags, labelTag) {
    if (labelTag) {
      this.updateProductLabelTag(labelTag);
    }
    if (labelFlags.length) {
      labelFlags.forEach((element, index) => {
        if (index >= 1) {
          this.createProductLabelFlagClones();
        }
        this.deleteProductLabelFlagClones(labelFlags);
        this.deleteProductLabelFlagModifiers(index);
        this.updateProductLabelFlags(element, index);
      });
    }
  }
  get classToToggle() {
    return this.getAttribute('class-to-toggle');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDQSxzQkFBc0IsQ0FBQytCLE9BQU8sQ0FBQ0csVUFBVSxHQUFHakIsbUJBQW1CO0lBQ3hFO0lBRUEsSUFBSSxDQUFDUSxtQkFBbUIsQ0FBQ3JDLG9DQUFvQyxFQUFFO01BQzNEd0IsR0FBRyxFQUFFLElBQUksQ0FBQ00sYUFBYSxDQUFDRCxtQkFBbUI7SUFDL0MsQ0FBQyxDQUFDO0VBQ047QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3NyYy9QeXovWXZlcy9Qcm9kdWN0TGFiZWxXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9sYWJlbC1ncm91cC9sYWJlbC1ncm91cC50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3QtbGFiZWwtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Byb2R1Y3RMYWJlbFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2xhYmVsLWdyb3VwL2xhYmVsLWdyb3VwLnRzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYWJlbEdyb3VwQ29yZSBmcm9tICdQcm9kdWN0TGFiZWxXaWRnZXQvY29tcG9uZW50cy9tb2xlY3VsZXMvbGFiZWwtZ3JvdXAvbGFiZWwtZ3JvdXAnO1xuaW1wb3J0IHsgUHJvZHVjdEl0ZW1MYWJlbHNEYXRhIH0gZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbEdyb3VwIGV4dGVuZHMgTGFiZWxHcm91cENvcmUge1xuICAgIHNldFByb2R1Y3RMYWJlbHMobGFiZWxzOiBQcm9kdWN0SXRlbUxhYmVsc0RhdGFbXSkge1xuICAgICAgICBpZiAoIWxhYmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3MuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzVG9Ub2dnbGUpKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0TGFiZWxzKGxhYmVscyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb2R1Y3RMYWJlbHMobGFiZWxGbGFnczogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhW10pOiB2b2lkIHtcbiAgICAgICAgbGFiZWxGbGFncy5mb3JFYWNoKChlbGVtZW50OiBQcm9kdWN0SXRlbUxhYmVsc0RhdGEsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvZHVjdExhYmVsRmxhZ0Nsb25lcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMobGFiZWxGbGFncyk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2R1Y3RMYWJlbEZsYWdNb2RpZmllcnMoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0TGFiZWxGbGFncyhlbGVtZW50LCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuaW1wb3J0IFByb2R1Y3RJdGVtLCB7XG4gICAgRVZFTlRfVVBEQVRFX0xBQkVMUyxcbiAgICBQcm9kdWN0SXRlbUxhYmVsc0RhdGEsXG59IGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWxHcm91cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMYWJlbEZsYWdzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TGFiZWxUYWc6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0SXRlbTogUHJvZHVjdEl0ZW07XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxGbGFncyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGFiZWwtZmxhZ2ApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxUYWcgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGFiZWwtdGFnYClbMF07XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJdGVtQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJdGVtID0gPFByb2R1Y3RJdGVtPnRoaXMuY2xvc2VzdChgLiR7dGhpcy5wcm9kdWN0SXRlbUNsYXNzTmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcFByb2R1Y3RJdGVtVXBkYXRlTGFiZWxzQ3VzdG9tRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUHJvZHVjdEl0ZW1VcGRhdGVMYWJlbHNDdXN0b21FdmVudCgpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKEVWRU5UX1VQREFURV9MQUJFTFMsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdExhYmVscygoPEN1c3RvbUV2ZW50PmV2ZW50KS5kZXRhaWwubGFiZWxzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIHByb2R1Y3QgbGFiZWxzIGlmIGRhdGEgaXMgZW1wdHkuXG4gICAgICogU3BsaXRzIHRoZSBsYWJlbHMgb2JqZWN0IHRvIGxhYmVsRmxhZ3MgYW5kIGxhYmVsVGFnIGFjY29yZGluZ2x5LlxuICAgICAqIENhbGxzIHRoZSBtZXRob2QgZm9yIHVwZGF0aW5nIHByb2R1Y3QgbGFiZWxzLlxuICAgICAqIEBwYXJhbSBsYWJlbHMgQW4gYXJyYXkgb2YgcHJvZHVjdCBsYWJlbHMuXG4gICAgICovXG4gICAgc2V0UHJvZHVjdExhYmVscyhsYWJlbHM6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdKSB7XG4gICAgICAgIGlmICghbGFiZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxGbGFncy5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NUb1RvZ2dsZSkpO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxUYWcuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzVG9Ub2dnbGUpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYWJlbFRhZ1R5cGUgPSB0aGlzLnByb2R1Y3RMYWJlbFRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwtdGFnLXR5cGUnKTtcbiAgICAgICAgY29uc3QgbGFiZWxGbGFncyA9IGxhYmVscy5maWx0ZXIoKGVsZW1lbnQ6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YSkgPT4gZWxlbWVudC50eXBlICE9PSBsYWJlbFRhZ1R5cGUpO1xuICAgICAgICBjb25zdCBsYWJlbFRhZyA9IGxhYmVscy5maWx0ZXIoKGVsZW1lbnQ6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YSkgPT4gZWxlbWVudC50eXBlID09PSBsYWJlbFRhZ1R5cGUpO1xuXG4gICAgICAgIGlmICghbGFiZWxUYWcubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbFRhZy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxhYmVsRmxhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc1RvVG9nZ2xlKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RMYWJlbHMobGFiZWxGbGFncywgbGFiZWxUYWdbMF0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9kdWN0TGFiZWxUYWcoZWxlbWVudDogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxhYmVsVGFnVGV4dENvbnRlbnQgPSA8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxUYWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xhYmVsLXRhZy10ZXh0YClbMF1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbFRhZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG4gICAgICAgIGxhYmVsVGFnVGV4dENvbnRlbnQuaW5uZXJUZXh0ID0gZWxlbWVudC50ZXh0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQcm9kdWN0TGFiZWxGbGFnQ2xvbmVzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbG9uZUxhYmVsRmxhZyA9IHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbMF0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmVMYWJlbEZsYWcsIHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbMF0ubmV4dFNpYmxpbmcpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19sYWJlbC1mbGFnYCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZWxldGVQcm9kdWN0TGFiZWxGbGFnQ2xvbmVzKGxhYmVsRmxhZ3M6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLnByb2R1Y3RMYWJlbEZsYWdzLmxlbmd0aCA+IGxhYmVsRmxhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzW3RoaXMucHJvZHVjdExhYmVsRmxhZ3MubGVuZ3RoIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzID0gPEhUTUxFbGVtZW50W10+KFxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGFiZWwtZmxhZ2ApKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZWxldGVQcm9kdWN0TGFiZWxGbGFnTW9kaWZpZXJzKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxGbGFnc1tpbmRleF0uY2xhc3NMaXN0LmZvckVhY2goKGVsZW1lbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5jbHVkZXMoJy0tJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvZHVjdExhYmVsRmxhZ3MoZWxlbWVudDogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxhYmVsRmxhZ0NsYXNzTmFtZTogc3RyaW5nID0gdGhpcy5wcm9kdWN0TGFiZWxGbGFnc1tpbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpZy1uYW1lJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsRmxhZ1RleHRDb250ZW50ID0gPEhUTUxFbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbaW5kZXhdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19sYWJlbC1mbGFnLXRleHRgKVswXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoYCR7bGFiZWxGbGFnQ2xhc3NOYW1lfS0tJHtlbGVtZW50LnR5cGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG4gICAgICAgIGxhYmVsRmxhZ1RleHRDb250ZW50LmlubmVyVGV4dCA9IGVsZW1lbnQudGV4dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvZHVjdExhYmVscyhsYWJlbEZsYWdzOiBQcm9kdWN0SXRlbUxhYmVsc0RhdGFbXSwgbGFiZWxUYWc6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAobGFiZWxUYWcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdExhYmVsVGFnKGxhYmVsVGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYWJlbEZsYWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGFiZWxGbGFncy5mb3JFYWNoKChlbGVtZW50OiBQcm9kdWN0SXRlbUxhYmVsc0RhdGEsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMobGFiZWxGbGFncyk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9kdWN0TGFiZWxGbGFnTW9kaWZpZXJzKGluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RMYWJlbEZsYWdzKGVsZW1lbnQsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBjbGFzc1RvVG9nZ2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2xhc3MtdG8tdG9nZ2xlJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBwcm9kdWN0SXRlbUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3Byb2R1Y3QtaXRlbS1jbGFzcy1uYW1lJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcblxuLyoqXG4gKiBAZXZlbnQgdXBkYXRlUmF0aW5nIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCByYXRpbmcgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVMYWJlbHMgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0IGxhYmVscyBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUFkZFRvQ2FydFVybCBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgJ2FkZCB0byBjYXJ0JyBVUkwgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVBamF4QWRkVG9DYXJ0VXJsIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCBBSkFYICdhZGQgdG8gY2FydCcgVVJMIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlQWRkVG9DYXJ0Rm9ybUFjdGlvbiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbiBoYXMgYmVlbiB1cGRhdGVkLlxuICovXG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX1JBVElORyA9ICd1cGRhdGVSYXRpbmcnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9MQUJFTFMgPSAndXBkYXRlTGFiZWxzJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfVVJMID0gJ3VwZGF0ZUFkZFRvQ2FydFVybCc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0FKQVhfQUREX1RPX0NBUlRfVVJMID0gJ3VwZGF0ZUFqYXhBZGRUb0NhcnRVcmwnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9GT1JNX0FDVElPTiA9ICd1cGRhdGVBZGRUb0NhcnRGb3JtQWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SXRlbUxhYmVsc0RhdGEge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEl0ZW1EYXRhIHtcbiAgICBpbWFnZVVybDogc3RyaW5nO1xuICAgIGltYWdlQWx0OiBzdHJpbmc7XG4gICAgbGFiZWxzOiBQcm9kdWN0SXRlbUxhYmVsc0RhdGFbXTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcmF0aW5nVmFsdWU6IG51bWJlcjtcbiAgICBkZWZhdWx0UHJpY2U6IHN0cmluZztcbiAgICBza3U/OiBzdHJpbmc7XG4gICAgb3JpZ2luYWxQcmljZTogc3RyaW5nO1xuICAgIGRldGFpbFBhZ2VVcmw6IHN0cmluZztcbiAgICBhZGRUb0NhcnRVcmw6IHN0cmluZztcbiAgICBhamF4QWRkVG9DYXJ0VXJsPzogc3RyaW5nO1xuICAgIGFkZFRvQ2FydEZvcm1BY3Rpb24/OiBzdHJpbmc7XG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBwcm9kdWN0SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3ROYW1lOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFJhdGluZzogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdERlZmF1bHRQcmljZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTa3U6IEhUTUxNZXRhRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdE9yaWdpbmFsUHJpY2U6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TGlua0RldGFpbFBhZ2U6IEhUTUxBbmNob3JFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMaW5rQWRkVG9DYXJ0OiBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQ6IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0Rm9ybUFkZFRvQ2FydDogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0QnV0dG9uQWRkVG9DYXJ0OiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZSA9IDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2ltYWdlYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbmFtZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RSYXRpbmcgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19yYXRpbmdgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2RlZmF1bHQtcHJpY2VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2t1ID0gPEhUTUxNZXRhRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19za3VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19vcmlnaW5hbC1wcmljZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZSA9IDxIVE1MQW5jaG9yRWxlbWVudFtdPihcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGluay1kZXRhaWwtcGFnZWApKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0ID0gPEhUTUxBbmNob3JFbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xpbmstYWRkLXRvLWNhcnRgKVswXVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0ID0gPEhUTUxCdXR0b25FbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2FqYXgtYnV0dG9uLWFkZC10by1jYXJ0YClbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydCA9IDxIVE1MRm9ybUVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZm9ybS1hZGQtdG8tY2FydGApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fYnV0dG9uLWFkZC10by1jYXJ0YClbMF1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIGRhdGEgQSBkYXRhIG9iamVjdCBmb3Igc2V0dGluZyB0aGUgcHJvZHVjdCBjYXJkIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RJdGVtRGF0YShkYXRhOiBQcm9kdWN0SXRlbURhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IGRhdGEuaW1hZ2VVcmw7XG4gICAgICAgIHRoaXMuaW1hZ2VBbHQgPSBkYXRhLmltYWdlQWx0O1xuICAgICAgICB0aGlzLmxhYmVscyA9IGRhdGEubGFiZWxzO1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtTmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5yYXRpbmdWYWx1ZSA9IGRhdGEucmF0aW5nVmFsdWU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByaWNlID0gZGF0YS5kZWZhdWx0UHJpY2U7XG4gICAgICAgIHRoaXMuc2t1ID0gZGF0YS5za3UgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gZGF0YS5vcmlnaW5hbFByaWNlO1xuICAgICAgICB0aGlzLmRldGFpbFBhZ2VVcmwgPSBkYXRhLmRldGFpbFBhZ2VVcmw7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VXJsID0gZGF0YS5hZGRUb0NhcnRVcmw7XG4gICAgICAgIHRoaXMuYWpheEFkZFRvQ2FydFVybCA9IGRhdGEuYWpheEFkZFRvQ2FydFVybCA/PyBudWxsO1xuICAgICAgICB0aGlzLmFkZFRvQ2FydEZvcm1BY3Rpb24gPSBkYXRhLmFkZFRvQ2FydEZvcm1BY3Rpb24gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0U2t1RnJvbVVybCh1cmw6IFVybCk6IFVybCB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxhc3RQYXJ0T2ZVcmwgPSBuZXcgUmVnRXhwKGAoW15cXFxcL10pKyRgLCAnZycpO1xuICAgICAgICBjb25zdCBza3UgPSB1cmwubWF0Y2gobGFzdFBhcnRPZlVybCk7XG5cbiAgICAgICAgcmV0dXJuIHNrdVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqL1xuICAgIGdldCBpbWFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RJbWFnZS5zcmM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqIEBwYXJhbSBpbWFnZVVybCBBIHByb2R1Y3QgY2FyZCBpbWFnZSBVUkwuXG4gICAgICovXG4gICAgc2V0IGltYWdlVXJsKGltYWdlVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZS5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBpbWFnZSBhbHQuXG4gICAgICogQHBhcmFtIGltYWdlQWx0IEEgcHJvZHVjdCBjYXJkIGltYWdlIGFsdC5cbiAgICAgKi9cbiAgICBzZXQgaW1hZ2VBbHQoaW1hZ2VBbHQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlLmFsdCA9IGltYWdlQWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGxhYmVscy5cbiAgICAgKiBAcGFyYW0gbGFiZWxzIEFuIGFycmF5IG9mIHByb2R1Y3QgY2FyZCBsYWJlbHMuXG4gICAgICovXG4gICAgc2V0IGxhYmVscyhsYWJlbHM6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfTEFCRUxTLCB7IGxhYmVscyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKi9cbiAgICBnZXQgcHJvZHVjdEl0ZW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TmFtZS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKiBAcGFyYW0gbmFtZSBBIHByb2R1Y3QgY2FyZCBuYW1lLlxuICAgICAqL1xuICAgIHNldCBwcm9kdWN0SXRlbU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3ROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3ROYW1lLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqL1xuICAgIGdldCByYXRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0UmF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMucHJvZHVjdFJhdGluZy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqIEBwYXJhbSByYXRpbmcgQSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqL1xuICAgIHNldCByYXRpbmdWYWx1ZShyYXRpbmc6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX1JBVElORywgeyByYXRpbmcgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRlZmF1bHQgcHJpY2UuXG4gICAgICovXG4gICAgZ2V0IGRlZmF1bHRQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlLmlubmVyVGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBkZWZhdWx0IHByaWNlLlxuICAgICAqIEBwYXJhbSBkZWZhdWx0UHJpY2UgQSBwcm9kdWN0IGNhcmQgZGVmYXVsdCBwcmljZS5cbiAgICAgKi9cbiAgICBzZXQgZGVmYXVsdFByaWNlKGRlZmF1bHRQcmljZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZS5pbm5lclRleHQgPSBkZWZhdWx0UHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgc2t1LlxuICAgICAqL1xuICAgIGdldCBza3UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdFNrdSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNrdS5jb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIHNrdS5cbiAgICAgKiBAcGFyYW0gcHJvZHVjdFNrdSBBIHByb2R1Y3QgY2FyZCBza3UuXG4gICAgICovXG4gICAgc2V0IHNrdShwcm9kdWN0U2t1OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdFNrdSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0U2t1LmNvbnRlbnQgPSBwcm9kdWN0U2t1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIG9yaWdpbmFsIHByaWNlLlxuICAgICAqL1xuICAgIGdldCBvcmlnaW5hbFByaWNlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgb3JpZ2luYWwgcHJpY2UuXG4gICAgICogQHBhcmFtIG9yaWdpbmFsUHJpY2UgQSBwcm9kdWN0IGNhcmQgb3JpZ2luYWwgcHJpY2UuXG4gICAgICovXG4gICAgc2V0IG9yaWdpbmFsUHJpY2Uob3JpZ2luYWxQcmljZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlLmlubmVyVGV4dCA9IG9yaWdpbmFsUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGV0YWlsIHBhZ2UgVVJMLlxuICAgICAqL1xuICAgIGdldCBkZXRhaWxQYWdlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlWzBdLmhyZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGV0YWlsIHBhZ2UgVVJMLlxuICAgICAqIEBwYXJhbSBkZXRhaWxQYWdlVXJsIEEgcHJvZHVjdCBjYXJkIGRldGFpbCBwYWdlIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgZGV0YWlsUGFnZVVybChkZXRhaWxQYWdlVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZS5mb3JFYWNoKChlbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkgPT4gKGVsZW1lbnQuaHJlZiA9IGRldGFpbFBhZ2VVcmwpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgYWRkVG9DYXJ0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydC5ocmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqIEBwYXJhbSBhZGRUb0NhcnRVcmwgQSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgc2V0IGFkZFRvQ2FydFVybChhZGRUb0NhcnRVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydC5ocmVmID0gYWRkVG9DYXJ0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwsIHsgc2t1OiB0aGlzLmdldFNrdUZyb21VcmwoYWRkVG9DYXJ0VXJsKSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgYWpheEFkZFRvQ2FydFVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQuZGF0YXNldC51cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKiBAcGFyYW0gYWpheEFkZFRvQ2FydFVybCBBIHByb2R1Y3QgY2FyZCBBSkFYICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIHNldCBhamF4QWRkVG9DYXJ0VXJsKGFqYXhBZGRUb0NhcnRVcmw6IFVybCkge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kaXNhYmxlZCA9ICFhamF4QWRkVG9DYXJ0VXJsO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LnVybCA9IGFqYXhBZGRUb0NhcnRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0FKQVhfQUREX1RPX0NBUlRfVVJMLCB7IHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFqYXhBZGRUb0NhcnRVcmwpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBhZGRUb0NhcnRGb3JtQWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydC5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQuZm9ybUFjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uLlxuICAgICAqIEBwYXJhbSBhZGRUb0NhcnRGb3JtQWN0aW9uIEEgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24uXG4gICAgICovXG4gICAgc2V0IGFkZFRvQ2FydEZvcm1BY3Rpb24oYWRkVG9DYXJ0Rm9ybUFjdGlvbjogVXJsKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0LmFjdGlvbiA9IGFkZFRvQ2FydEZvcm1BY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQuZGF0YXNldC5mb3JtQWN0aW9uID0gYWRkVG9DYXJ0Rm9ybUFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04sIHtcbiAgICAgICAgICAgIHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFkZFRvQ2FydEZvcm1BY3Rpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiTGFiZWxHcm91cENvcmUiLCJMYWJlbEdyb3VwIiwic2V0UHJvZHVjdExhYmVscyIsImxhYmVscyIsImxlbmd0aCIsInByb2R1Y3RMYWJlbEZsYWdzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc1RvVG9nZ2xlIiwidXBkYXRlUHJvZHVjdExhYmVscyIsImxhYmVsRmxhZ3MiLCJpbmRleCIsImNyZWF0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMiLCJkZWxldGVQcm9kdWN0TGFiZWxGbGFnQ2xvbmVzIiwiZGVsZXRlUHJvZHVjdExhYmVsRmxhZ01vZGlmaWVycyIsInVwZGF0ZVByb2R1Y3RMYWJlbEZsYWdzIiwiQ29tcG9uZW50IiwiRVZFTlRfVVBEQVRFX0xBQkVMUyIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwicHJvZHVjdExhYmVsVGFnIiwicHJvZHVjdEl0ZW0iLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJwcm9kdWN0SXRlbUNsYXNzTmFtZSIsImNsb3Nlc3QiLCJtYXBFdmVudHMiLCJtYXBQcm9kdWN0SXRlbVVwZGF0ZUxhYmVsc0N1c3RvbUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGV0YWlsIiwibGFiZWxUYWdUeXBlIiwiZ2V0QXR0cmlidXRlIiwiZmlsdGVyIiwidHlwZSIsImxhYmVsVGFnIiwidXBkYXRlUHJvZHVjdExhYmVsVGFnIiwibGFiZWxUYWdUZXh0Q29udGVudCIsInJlbW92ZSIsImlubmVyVGV4dCIsInRleHQiLCJjbG9uZUxhYmVsRmxhZyIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImluY2x1ZGVzIiwibGFiZWxGbGFnQ2xhc3NOYW1lIiwibGFiZWxGbGFnVGV4dENvbnRlbnQiLCJFVkVOVF9VUERBVEVfUkFUSU5HIiwiRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCIsIkVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCIsIkVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9GT1JNX0FDVElPTiIsIlByb2R1Y3RJdGVtIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0UmF0aW5nIiwicHJvZHVjdERlZmF1bHRQcmljZSIsInByb2R1Y3RTa3UiLCJwcm9kdWN0T3JpZ2luYWxQcmljZSIsInByb2R1Y3RMaW5rRGV0YWlsUGFnZSIsInByb2R1Y3RMaW5rQWRkVG9DYXJ0IiwicHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQiLCJwcm9kdWN0Rm9ybUFkZFRvQ2FydCIsInByb2R1Y3RCdXR0b25BZGRUb0NhcnQiLCJ1cGRhdGVQcm9kdWN0SXRlbURhdGEiLCJkYXRhIiwiX2RhdGEkc2t1IiwiX2RhdGEkYWpheEFkZFRvQ2FydFVyIiwiX2RhdGEkYWRkVG9DYXJ0Rm9ybUFjIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInByb2R1Y3RJdGVtTmFtZSIsIm5hbWUiLCJyYXRpbmdWYWx1ZSIsImRlZmF1bHRQcmljZSIsInNrdSIsIm9yaWdpbmFsUHJpY2UiLCJkZXRhaWxQYWdlVXJsIiwiYWRkVG9DYXJ0VXJsIiwiYWpheEFkZFRvQ2FydFVybCIsImFkZFRvQ2FydEZvcm1BY3Rpb24iLCJnZXRTa3VGcm9tVXJsIiwidXJsIiwibGFzdFBhcnRPZlVybCIsIlJlZ0V4cCIsIm1hdGNoIiwic3JjIiwiYWx0IiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsIk51bWJlciIsInZhbHVlIiwicmF0aW5nIiwiY29udGVudCIsImhyZWYiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJmb3JtQWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==