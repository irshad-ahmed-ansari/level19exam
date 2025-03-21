"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["quick-order-form"],{

/***/ "./vendor/spryker-shop/quick-order-page/src/SprykerShop/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-form/quick-order-form.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/quick-order-page/src/SprykerShop/Yves/QuickOrderPage/Theme/default/components/molecules/quick-order-form/quick-order-form.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickOrderForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ShopUi/app */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/app/index.ts");
/* harmony import */ var ShopUi_components_organisms_dynamic_notification_area_dynamic_notification_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ShopUi/components/organisms/dynamic-notification-area/dynamic-notification-area */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/organisms/dynamic-notification-area/dynamic-notification-area.ts");




class QuickOrderForm extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    /**
     * The current form.
     */
    this.form = void 0;
    /**
     * The rows of the current forms.
     */
    this.rows = void 0;
    /**
     * Element wich creats the for row.
     */
    this.addRowTrigger = void 0;
    /**
     * Collection of the elements which remove the form row.
     */
    this.removeRowTriggers = void 0;
    /**
     * Element creates the AjaxProvider component for the form row.
     */
    this.addRowAjaxProvider = void 0;
    /**
     * Element removes the AjaxProvider component from the form row.
     */
    this.removeRowAjaxProvider = void 0;
  }
  readyCallback() {
    this.form = this.getElementsByClassName(this.jsName + "__form")[0];
    this.rows = this.getElementsByClassName(this.jsName + "__rows")[0];
    this.addRowTrigger = this.getElementsByClassName(this.jsName + "__add-row-trigger")[0];
    this.addRowAjaxProvider = this.getElementsByClassName(this.jsName + "__add-row-provider")[0];
    this.removeRowAjaxProvider = this.getElementsByClassName(this.jsName + "__remove-row-provider")[0];
    this.registerRemoveRowTriggers();
    this.mapEvents();
  }
  registerRemoveRowTriggers() {
    this.removeRowTriggers = Array.from(this.getElementsByClassName(this.jsName + "__remove-row-trigger"));
  }
  mapEvents() {
    this.addRowTrigger.addEventListener('click', event => this.onAddRowClick(event));
    this.mapRemoveRowTriggersEvents();
  }
  mapRemoveRowTriggersEvents() {
    this.removeRowTriggers.forEach(trigger => {
      trigger.addEventListener('click', event => this.onRemoveRowClick(event));
    });
  }
  onAddRowClick(event) {
    event.preventDefault();
    this.addRow();
  }
  onRemoveRowClick(event) {
    event.preventDefault();
    var row = event.currentTarget;
    var rowIndex = row.getAttribute('data-row-index');
    this.removeRow(rowIndex);
  }

  /**
   * Sends an ajax request to the server and renders the response on the page.
   * @template viod The argument type returned by a successful promise.
   */
  addRow() {
    var _this = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = _this.getFormData();
      var response = yield _this.addRowAjaxProvider.fetch(data);
      _this.rows.innerHTML = response;
      yield (0,ShopUi_app__WEBPACK_IMPORTED_MODULE_2__.mount)();
      _this.registerRemoveRowTriggers();
      _this.mapRemoveRowTriggersEvents();
    })();
  }

  /**
   * Sends an ajax request to the server and renders the response on the page.
   * @template viod The argument type returned by a successful promise.
   * @param rowIndex A row string index used for removal.
   */
  removeRow(rowIndex) {
    var _this2 = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = _this2.getFormData({
        'row-index': rowIndex
      });
      var response = yield _this2.removeRowAjaxProvider.fetch(data);
      var parsedResponse = _this2.parseResponse(response);
      if (typeof parsedResponse !== 'string') {
        _this2.showFlashMessage(parsedResponse);
        return;
      }
      _this2.updateTableHtml(response);
    })();
  }
  parseResponse(response) {
    try {
      return JSON.parse(response);
    } catch (_unused) {
      return response;
    }
  }
  hasMessages(response) {
    return 'messages' in response;
  }
  showFlashMessage(response) {
    var _this3 = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.hasMessages(response)) {
        return;
      }
      var dynamicNotificationCustomEvent = new CustomEvent(ShopUi_components_organisms_dynamic_notification_area_dynamic_notification_area__WEBPACK_IMPORTED_MODULE_3__.EVENT_UPDATE_DYNAMIC_MESSAGES, {
        detail: response.messages
      });
      document.dispatchEvent(dynamicNotificationCustomEvent);
    })();
  }
  updateTableHtml(response) {
    var _this4 = this;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.rows.innerHTML = response;
      yield (0,ShopUi_app__WEBPACK_IMPORTED_MODULE_2__.mount)();
      _this4.registerRemoveRowTriggers();
      _this4.mapRemoveRowTriggersEvents();
    })();
  }

  /**
   * Gets an instance of the FormData.
   * @template FormData A data type returned by the function.
   * @param appendData An optional data object for extension of the returned data.
   * @returns A data instance of the FormData type.
   */
  getFormData(appendData) {
    var data = new FormData(this.form);
    if (appendData) {
      Object.keys(appendData).forEach(key => data.append(key, appendData[key]));
    }
    return data;
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/organisms/dynamic-notification-area/dynamic-notification-area.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/organisms/dynamic-notification-area/dynamic-notification-area.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_UPDATE_DYNAMIC_MESSAGES: () => (/* binding */ EVENT_UPDATE_DYNAMIC_MESSAGES),
/* harmony export */   "default": () => (/* binding */ DynamicNotificationArea)
/* harmony export */ });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/app */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/app/index.ts");



/**
 * @event updateDynamicMessages An event emitted when need to update messages.
 */
var EVENT_UPDATE_DYNAMIC_MESSAGES = 'updateDynamicMessages';
class DynamicNotificationArea extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.target = void 0;
  }
  readyCallback() {}
  init() {
    this.target = document.getElementsByClassName(this.targetClassName)[0];
    this.mapEvents();
  }
  mapEvents() {
    this.mapTriggerCustomUpdateMessagesEvent();
  }
  mapTriggerCustomUpdateMessagesEvent() {
    document.addEventListener(EVENT_UPDATE_DYNAMIC_MESSAGES, event => this.updateMessages(event.detail));
  }
  updateMessages(responseHtml) {
    if (!responseHtml) {
      return;
    }
    var notificationArea = this.target || this;
    notificationArea.insertAdjacentHTML('beforeend', responseHtml);
    (0,ShopUi_app__WEBPACK_IMPORTED_MODULE_1__.mount)();
  }
  get targetClassName() {
    return this.getAttribute('target-class-name');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucXVpY2stb3JkZXItZm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFYjtBQUM2RjtBQUVqSCxNQUFNRyxjQUFjLFNBQVNILCtEQUFTLENBQUM7RUFBQUksWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFDbEQ7QUFDSjtBQUNBO0lBRkksS0FHQUMsSUFBSTtJQUVKO0FBQ0o7QUFDQTtJQUZJLEtBR0FDLElBQUk7SUFFSjtBQUNKO0FBQ0E7SUFGSSxLQUdBQyxhQUFhO0lBRWI7QUFDSjtBQUNBO0lBRkksS0FHQUMsaUJBQWlCO0lBRWpCO0FBQ0o7QUFDQTtJQUZJLEtBR0FDLGtCQUFrQjtJQUVsQjtBQUNKO0FBQ0E7SUFGSSxLQUdBQyxxQkFBcUI7RUFBQTtFQUVYQyxhQUFhQSxDQUFBLEVBQVM7SUFDNUIsSUFBSSxDQUFDTixJQUFJLEdBQW9CLElBQUksQ0FBQ08sc0JBQXNCLENBQUksSUFBSSxDQUFDQyxNQUFNLFdBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixJQUFJLENBQUNQLElBQUksR0FBZ0IsSUFBSSxDQUFDTSxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0sV0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLElBQUksQ0FBQ04sYUFBYSxHQUFnQixJQUFJLENBQUNLLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSxzQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRyxJQUFJLENBQUNKLGtCQUFrQixHQUFpQixJQUFJLENBQUNHLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSx1QkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRyxJQUFJLENBQUNILHFCQUFxQixHQUN0QixJQUFJLENBQUNFLHNCQUFzQixDQUFJLElBQUksQ0FBQ0MsTUFBTSwwQkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FDdkU7SUFDRCxJQUFJLENBQUNDLHlCQUF5QixDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUVVRCx5QkFBeUJBLENBQUEsRUFBUztJQUN4QyxJQUFJLENBQUNOLGlCQUFpQixHQUNsQlEsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDTCxzQkFBc0IsQ0FBSSxJQUFJLENBQUNDLE1BQU0seUJBQXNCLENBQUMsQ0FDL0U7RUFDTDtFQUVVRSxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDUixhQUFhLENBQUNXLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsS0FBWSxJQUFLLElBQUksQ0FBQ0MsYUFBYSxDQUFDRCxLQUFLLENBQUMsQ0FBQztJQUN6RixJQUFJLENBQUNFLDBCQUEwQixDQUFDLENBQUM7RUFDckM7RUFFVUEsMEJBQTBCQSxDQUFBLEVBQVM7SUFDekMsSUFBSSxDQUFDYixpQkFBaUIsQ0FBQ2MsT0FBTyxDQUFFQyxPQUFvQixJQUFLO01BQ3JEQSxPQUFPLENBQUNMLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsS0FBWSxJQUFLLElBQUksQ0FBQ0ssZ0JBQWdCLENBQUNMLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLENBQUMsQ0FBQztFQUNOO0VBRVVDLGFBQWFBLENBQUNELEtBQVksRUFBUTtJQUN4Q0EsS0FBSyxDQUFDTSxjQUFjLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBQ2pCO0VBRVVGLGdCQUFnQkEsQ0FBQ0wsS0FBWSxFQUFRO0lBQzNDQSxLQUFLLENBQUNNLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLElBQU1FLEdBQUcsR0FBZ0JSLEtBQUssQ0FBQ1MsYUFBYTtJQUM1QyxJQUFNQyxRQUFRLEdBQUdGLEdBQUcsQ0FBQ0csWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUM7RUFDNUI7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFDVUgsTUFBTUEsQ0FBQSxFQUFrQjtJQUFBLElBQUFNLEtBQUE7SUFBQSxPQUFBQyxtRkFBQTtNQUMxQixJQUFNQyxJQUFJLEdBQUdGLEtBQUksQ0FBQ0csV0FBVyxDQUFDLENBQUM7TUFDL0IsSUFBTUMsUUFBUSxTQUFTSixLQUFJLENBQUN2QixrQkFBa0IsQ0FBQzRCLEtBQUssQ0FBQ0gsSUFBSSxDQUFDO01BRTFERixLQUFJLENBQUMxQixJQUFJLENBQUNnQyxTQUFTLEdBQUdGLFFBQVE7TUFDOUIsTUFBTXBDLGlEQUFLLENBQUMsQ0FBQztNQUNiZ0MsS0FBSSxDQUFDbEIseUJBQXlCLENBQUMsQ0FBQztNQUNoQ2tCLEtBQUksQ0FBQ1gsMEJBQTBCLENBQUMsQ0FBQztJQUFDO0VBQ3RDOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDVVUsU0FBU0EsQ0FBQ0YsUUFBZ0IsRUFBaUI7SUFBQSxJQUFBVSxNQUFBO0lBQUEsT0FBQU4sbUZBQUE7TUFDN0MsSUFBTUMsSUFBSSxHQUFHSyxNQUFJLENBQUNKLFdBQVcsQ0FBQztRQUMxQixXQUFXLEVBQUVOO01BQ2pCLENBQUMsQ0FBQztNQUNGLElBQU1PLFFBQVEsU0FBU0csTUFBSSxDQUFDN0IscUJBQXFCLENBQUMyQixLQUFLLENBQUNILElBQUksQ0FBQztNQUM3RCxJQUFNTSxjQUFjLEdBQUdELE1BQUksQ0FBQ0UsYUFBYSxDQUFDTCxRQUFRLENBQUM7TUFFbkQsSUFBSSxPQUFPSSxjQUFjLEtBQUssUUFBUSxFQUFFO1FBQ3BDRCxNQUFJLENBQUNHLGdCQUFnQixDQUFDRixjQUFjLENBQUM7UUFFckM7TUFDSjtNQUVBRCxNQUFJLENBQUNJLGVBQWUsQ0FBQ1AsUUFBUSxDQUFDO0lBQUM7RUFDbkM7RUFFVUssYUFBYUEsQ0FBQ0wsUUFBZ0IsRUFBbUI7SUFDdkQsSUFBSTtNQUNBLE9BQU9RLElBQUksQ0FBQ0MsS0FBSyxDQUFDVCxRQUFRLENBQUM7SUFDL0IsQ0FBQyxDQUFDLE9BQUFVLE9BQUEsRUFBTTtNQUNKLE9BQU9WLFFBQVE7SUFDbkI7RUFDSjtFQUVVVyxXQUFXQSxDQUFDWCxRQUFnQixFQUFvQztJQUN0RSxPQUFPLFVBQVUsSUFBSUEsUUFBUTtFQUNqQztFQUVnQk0sZ0JBQWdCQSxDQUFDTixRQUFnQixFQUFpQjtJQUFBLElBQUFZLE1BQUE7SUFBQSxPQUFBZixtRkFBQTtNQUM5RCxJQUFJLENBQUNlLE1BQUksQ0FBQ0QsV0FBVyxDQUFDWCxRQUFRLENBQUMsRUFBRTtRQUM3QjtNQUNKO01BQ0EsSUFBTWEsOEJBQThCLEdBQUcsSUFBSUMsV0FBVyxDQUFDakQsMElBQTZCLEVBQUU7UUFDbEZrRCxNQUFNLEVBQUVmLFFBQVEsQ0FBQ2dCO01BQ3JCLENBQUMsQ0FBQztNQUNGQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0wsOEJBQThCLENBQUM7SUFBQztFQUMzRDtFQUVnQk4sZUFBZUEsQ0FBQ1AsUUFBZ0IsRUFBaUI7SUFBQSxJQUFBbUIsTUFBQTtJQUFBLE9BQUF0QixtRkFBQTtNQUM3RHNCLE1BQUksQ0FBQ2pELElBQUksQ0FBQ2dDLFNBQVMsR0FBR0YsUUFBUTtNQUM5QixNQUFNcEMsaURBQUssQ0FBQyxDQUFDO01BQ2J1RCxNQUFJLENBQUN6Qyx5QkFBeUIsQ0FBQyxDQUFDO01BQ2hDeUMsTUFBSSxDQUFDbEMsMEJBQTBCLENBQUMsQ0FBQztJQUFDO0VBQ3RDOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJYyxXQUFXQSxDQUFDcUIsVUFBbUIsRUFBWTtJQUN2QyxJQUFNdEIsSUFBSSxHQUFHLElBQUl1QixRQUFRLENBQUMsSUFBSSxDQUFDcEQsSUFBSSxDQUFDO0lBRXBDLElBQUltRCxVQUFVLEVBQUU7TUFDWkUsTUFBTSxDQUFDQyxJQUFJLENBQUNILFVBQVUsQ0FBQyxDQUFDbEMsT0FBTyxDQUFFc0MsR0FBVyxJQUFLMUIsSUFBSSxDQUFDMkIsTUFBTSxDQUFDRCxHQUFHLEVBQUVKLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RjtJQUVBLE9BQU8xQixJQUFJO0VBQ2Y7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SmtEO0FBQ2Y7O0FBRW5DO0FBQ0E7QUFDQTtBQUNPLElBQU1qQyw2QkFBNkIsR0FBRyx1QkFBdUI7QUFFckQsTUFBTTZELHVCQUF1QixTQUFTL0QseURBQVMsQ0FBQztFQUFBSSxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQ2pEMkQsTUFBTTtFQUFBO0VBRU5wRCxhQUFhQSxDQUFBLEVBQVMsQ0FBQztFQUV2QnFELElBQUlBLENBQUEsRUFBUztJQUNuQixJQUFJLENBQUNELE1BQU0sR0FBZ0JWLFFBQVEsQ0FBQ3pDLHNCQUFzQixDQUFDLElBQUksQ0FBQ3FELGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixJQUFJLENBQUNsRCxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUVVQSxTQUFTQSxDQUFBLEVBQVM7SUFDeEIsSUFBSSxDQUFDbUQsbUNBQW1DLENBQUMsQ0FBQztFQUM5QztFQUVVQSxtQ0FBbUNBLENBQUEsRUFBUztJQUNsRGIsUUFBUSxDQUFDbkMsZ0JBQWdCLENBQUNqQiw2QkFBNkIsRUFBR2tCLEtBQWtCLElBQ3hFLElBQUksQ0FBQ2dELGNBQWMsQ0FBQ2hELEtBQUssQ0FBQ2dDLE1BQU0sQ0FDcEMsQ0FBQztFQUNMO0VBRVVnQixjQUFjQSxDQUFDQyxZQUFvQixFQUFRO0lBQ2pELElBQUksQ0FBQ0EsWUFBWSxFQUFFO01BQ2Y7SUFDSjtJQUNBLElBQU1DLGdCQUFnQixHQUFHLElBQUksQ0FBQ04sTUFBTSxJQUFJLElBQUk7SUFDNUNNLGdCQUFnQixDQUFDQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUVGLFlBQVksQ0FBQztJQUM5RHBFLGlEQUFLLENBQUMsQ0FBQztFQUNYO0VBRUEsSUFBY2lFLGVBQWVBLENBQUEsRUFBVztJQUNwQyxPQUFPLElBQUksQ0FBQ25DLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztFQUNqRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByeWtlci1iMmItZGVtby1zaG9wLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9xdWljay1vcmRlci1wYWdlL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1F1aWNrT3JkZXJQYWdlL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcXVpY2stb3JkZXItZm9ybS9xdWljay1vcmRlci1mb3JtLnRzIiwid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL29yZ2FuaXNtcy9keW5hbWljLW5vdGlmaWNhdGlvbi1hcmVhL2R5bmFtaWMtbm90aWZpY2F0aW9uLWFyZWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgQWpheFByb3ZpZGVyIGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9hamF4LXByb3ZpZGVyL2FqYXgtcHJvdmlkZXInO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdTaG9wVWkvYXBwJztcbmltcG9ydCB7IEVWRU5UX1VQREFURV9EWU5BTUlDX01FU1NBR0VTIH0gZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvb3JnYW5pc21zL2R5bmFtaWMtbm90aWZpY2F0aW9uLWFyZWEvZHluYW1pYy1ub3RpZmljYXRpb24tYXJlYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrT3JkZXJGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBmb3JtLlxuICAgICAqL1xuICAgIGZvcm06IEhUTUxGb3JtRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSByb3dzIG9mIHRoZSBjdXJyZW50IGZvcm1zLlxuICAgICAqL1xuICAgIHJvd3M6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogRWxlbWVudCB3aWNoIGNyZWF0cyB0aGUgZm9yIHJvdy5cbiAgICAgKi9cbiAgICBhZGRSb3dUcmlnZ2VyOiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdGhlIGVsZW1lbnRzIHdoaWNoIHJlbW92ZSB0aGUgZm9ybSByb3cuXG4gICAgICovXG4gICAgcmVtb3ZlUm93VHJpZ2dlcnM6IEhUTUxFbGVtZW50W107XG5cbiAgICAvKipcbiAgICAgKiBFbGVtZW50IGNyZWF0ZXMgdGhlIEFqYXhQcm92aWRlciBjb21wb25lbnQgZm9yIHRoZSBmb3JtIHJvdy5cbiAgICAgKi9cbiAgICBhZGRSb3dBamF4UHJvdmlkZXI6IEFqYXhQcm92aWRlcjtcblxuICAgIC8qKlxuICAgICAqIEVsZW1lbnQgcmVtb3ZlcyB0aGUgQWpheFByb3ZpZGVyIGNvbXBvbmVudCBmcm9tIHRoZSBmb3JtIHJvdy5cbiAgICAgKi9cbiAgICByZW1vdmVSb3dBamF4UHJvdmlkZXI6IEFqYXhQcm92aWRlcjtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2Zvcm1gKVswXTtcbiAgICAgICAgdGhpcy5yb3dzID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3Jvd3NgKVswXTtcbiAgICAgICAgdGhpcy5hZGRSb3dUcmlnZ2VyID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2FkZC1yb3ctdHJpZ2dlcmApWzBdO1xuICAgICAgICB0aGlzLmFkZFJvd0FqYXhQcm92aWRlciA9IDxBamF4UHJvdmlkZXI+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fYWRkLXJvdy1wcm92aWRlcmApWzBdO1xuICAgICAgICB0aGlzLnJlbW92ZVJvd0FqYXhQcm92aWRlciA9IDxBamF4UHJvdmlkZXI+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcmVtb3ZlLXJvdy1wcm92aWRlcmApWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSZW1vdmVSb3dUcmlnZ2VycygpO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3RlclJlbW92ZVJvd1RyaWdnZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZVJvd1RyaWdnZXJzID0gPEhUTUxFbGVtZW50W10+KFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19yZW1vdmUtcm93LXRyaWdnZXJgKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZFJvd1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQWRkUm93Q2xpY2soZXZlbnQpKTtcbiAgICAgICAgdGhpcy5tYXBSZW1vdmVSb3dUcmlnZ2Vyc0V2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBSZW1vdmVSb3dUcmlnZ2Vyc0V2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSb3dUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25SZW1vdmVSb3dDbGljayhldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BZGRSb3dDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hZGRSb3coKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25SZW1vdmVSb3dDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCByb3cgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdy1pbmRleCcpO1xuICAgICAgICB0aGlzLnJlbW92ZVJvdyhyb3dJbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYW4gYWpheCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgYW5kIHJlbmRlcnMgdGhlIHJlc3BvbnNlIG9uIHRoZSBwYWdlLlxuICAgICAqIEB0ZW1wbGF0ZSB2aW9kIFRoZSBhcmd1bWVudCB0eXBlIHJldHVybmVkIGJ5IGEgc3VjY2Vzc2Z1bCBwcm9taXNlLlxuICAgICAqL1xuICAgIGFzeW5jIGFkZFJvdygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFkZFJvd0FqYXhQcm92aWRlci5mZXRjaChkYXRhKTtcblxuICAgICAgICB0aGlzLnJvd3MuaW5uZXJIVE1MID0gcmVzcG9uc2U7XG4gICAgICAgIGF3YWl0IG1vdW50KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSZW1vdmVSb3dUcmlnZ2VycygpO1xuICAgICAgICB0aGlzLm1hcFJlbW92ZVJvd1RyaWdnZXJzRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYW4gYWpheCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgYW5kIHJlbmRlcnMgdGhlIHJlc3BvbnNlIG9uIHRoZSBwYWdlLlxuICAgICAqIEB0ZW1wbGF0ZSB2aW9kIFRoZSBhcmd1bWVudCB0eXBlIHJldHVybmVkIGJ5IGEgc3VjY2Vzc2Z1bCBwcm9taXNlLlxuICAgICAqIEBwYXJhbSByb3dJbmRleCBBIHJvdyBzdHJpbmcgaW5kZXggdXNlZCBmb3IgcmVtb3ZhbC5cbiAgICAgKi9cbiAgICBhc3luYyByZW1vdmVSb3cocm93SW5kZXg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAncm93LWluZGV4Jzogcm93SW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVtb3ZlUm93QWpheFByb3ZpZGVyLmZldGNoKGRhdGEpO1xuICAgICAgICBjb25zdCBwYXJzZWRSZXNwb25zZSA9IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRSZXNwb25zZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZsYXNoTWVzc2FnZShwYXJzZWRSZXNwb25zZSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVGFibGVIdG1sKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFyc2VSZXNwb25zZShyZXNwb25zZTogc3RyaW5nKTogc3RyaW5nIHwgb2JqZWN0IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFzTWVzc2FnZXMocmVzcG9uc2U6IG9iamVjdCk6IHJlc3BvbnNlIGlzIHsgbWVzc2FnZXM6IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuICdtZXNzYWdlcycgaW4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHNob3dGbGFzaE1lc3NhZ2UocmVzcG9uc2U6IG9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIXRoaXMuaGFzTWVzc2FnZXMocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZHluYW1pY05vdGlmaWNhdGlvbkN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9EWU5BTUlDX01FU1NBR0VTLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHJlc3BvbnNlLm1lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChkeW5hbWljTm90aWZpY2F0aW9uQ3VzdG9tRXZlbnQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB1cGRhdGVUYWJsZUh0bWwocmVzcG9uc2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnJvd3MuaW5uZXJIVE1MID0gcmVzcG9uc2U7XG4gICAgICAgIGF3YWl0IG1vdW50KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSZW1vdmVSb3dUcmlnZ2VycygpO1xuICAgICAgICB0aGlzLm1hcFJlbW92ZVJvd1RyaWdnZXJzRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiB0aGUgRm9ybURhdGEuXG4gICAgICogQHRlbXBsYXRlIEZvcm1EYXRhIEEgZGF0YSB0eXBlIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gYXBwZW5kRGF0YSBBbiBvcHRpb25hbCBkYXRhIG9iamVjdCBmb3IgZXh0ZW5zaW9uIG9mIHRoZSByZXR1cm5lZCBkYXRhLlxuICAgICAqIEByZXR1cm5zIEEgZGF0YSBpbnN0YW5jZSBvZiB0aGUgRm9ybURhdGEgdHlwZS5cbiAgICAgKi9cbiAgICBnZXRGb3JtRGF0YShhcHBlbmREYXRhPzogb2JqZWN0KTogRm9ybURhdGEge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG5cbiAgICAgICAgaWYgKGFwcGVuZERhdGEpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFwcGVuZERhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiBkYXRhLmFwcGVuZChrZXksIGFwcGVuZERhdGFba2V5XSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnU2hvcFVpL2FwcCc7XG5cbi8qKlxuICogQGV2ZW50IHVwZGF0ZUR5bmFtaWNNZXNzYWdlcyBBbiBldmVudCBlbWl0dGVkIHdoZW4gbmVlZCB0byB1cGRhdGUgbWVzc2FnZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfRFlOQU1JQ19NRVNTQUdFUyA9ICd1cGRhdGVEeW5hbWljTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljTm90aWZpY2F0aW9uQXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHRhcmdldDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnRhcmdldENsYXNzTmFtZSlbMF07XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBUcmlnZ2VyQ3VzdG9tVXBkYXRlTWVzc2FnZXNFdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBUcmlnZ2VyQ3VzdG9tVXBkYXRlTWVzc2FnZXNFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVF9VUERBVEVfRFlOQU1JQ19NRVNTQUdFUywgKGV2ZW50OiBDdXN0b21FdmVudCkgPT5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZXMoZXZlbnQuZGV0YWlsKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlTWVzc2FnZXMocmVzcG9uc2VIdG1sOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZUh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25BcmVhID0gdGhpcy50YXJnZXQgfHwgdGhpcztcbiAgICAgICAgbm90aWZpY2F0aW9uQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlc3BvbnNlSHRtbCk7XG4gICAgICAgIG1vdW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCB0YXJnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0YXJnZXQtY2xhc3MtbmFtZScpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJtb3VudCIsIkVWRU5UX1VQREFURV9EWU5BTUlDX01FU1NBR0VTIiwiUXVpY2tPcmRlckZvcm0iLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImZvcm0iLCJyb3dzIiwiYWRkUm93VHJpZ2dlciIsInJlbW92ZVJvd1RyaWdnZXJzIiwiYWRkUm93QWpheFByb3ZpZGVyIiwicmVtb3ZlUm93QWpheFByb3ZpZGVyIiwicmVhZHlDYWxsYmFjayIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJyZWdpc3RlclJlbW92ZVJvd1RyaWdnZXJzIiwibWFwRXZlbnRzIiwiQXJyYXkiLCJmcm9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25BZGRSb3dDbGljayIsIm1hcFJlbW92ZVJvd1RyaWdnZXJzRXZlbnRzIiwiZm9yRWFjaCIsInRyaWdnZXIiLCJvblJlbW92ZVJvd0NsaWNrIiwicHJldmVudERlZmF1bHQiLCJhZGRSb3ciLCJyb3ciLCJjdXJyZW50VGFyZ2V0Iiwicm93SW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVSb3ciLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZGF0YSIsImdldEZvcm1EYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImlubmVySFRNTCIsIl90aGlzMiIsInBhcnNlZFJlc3BvbnNlIiwicGFyc2VSZXNwb25zZSIsInNob3dGbGFzaE1lc3NhZ2UiLCJ1cGRhdGVUYWJsZUh0bWwiLCJKU09OIiwicGFyc2UiLCJfdW51c2VkIiwiaGFzTWVzc2FnZXMiLCJfdGhpczMiLCJkeW5hbWljTm90aWZpY2F0aW9uQ3VzdG9tRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIm1lc3NhZ2VzIiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiX3RoaXM0IiwiYXBwZW5kRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFwcGVuZCIsIkR5bmFtaWNOb3RpZmljYXRpb25BcmVhIiwidGFyZ2V0IiwiaW5pdCIsInRhcmdldENsYXNzTmFtZSIsIm1hcFRyaWdnZXJDdXN0b21VcGRhdGVNZXNzYWdlc0V2ZW50IiwidXBkYXRlTWVzc2FnZXMiLCJyZXNwb25zZUh0bWwiLCJub3RpZmljYXRpb25BcmVhIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==