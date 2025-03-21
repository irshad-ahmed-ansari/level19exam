"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["comment-tag-form"],{

/***/ "./vendor/spryker-shop/comment-widget/src/SprykerShop/Yves/CommentWidget/Theme/default/components/molecules/comment-tag-form/comment-tag-form.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/comment-widget/src/SprykerShop/Yves/CommentWidget/Theme/default/components/molecules/comment-tag-form/comment-tag-form.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentTagForm)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class CommentTagForm extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.commentTagForm = void 0;
    this.commentTagSelectComponent = void 0;
  }
  readyCallback() {
    this.commentTagForm = this.querySelector("." + this.jsName + "__form");
    this.commentTagSelectComponent = this.querySelector("." + this.jsName + "__select");
    this.mapEvents();
  }
  mapEvents() {
    if (this.isAjaxMode) {
      return;
    }
    this.commentTagSelectComponent.addEventListener('change', () => {
      this.commentTagForm.submit();
    });
  }
  get isAjaxMode() {
    return this.getAttribute('ajax-mode');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuY29tbWVudC10YWctZm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUVqQyxNQUFNQyxjQUFjLFNBQVNELCtEQUFTLENBQUM7RUFBQUUsWUFBQTtJQUFBLFNBQUFDLFNBQUE7SUFBQSxLQUN4Q0MsY0FBYztJQUFBLEtBQ2RDLHlCQUF5QjtFQUFBO0VBRXpCQyxhQUFhQSxDQUFBLEVBQVM7SUFDNUIsSUFBSSxDQUFDRixjQUFjLEdBQW9CLElBQUksQ0FBQ0csYUFBYSxPQUFLLElBQUksQ0FBQ0MsTUFBTSxXQUFRLENBQUM7SUFDbEYsSUFBSSxDQUFDSCx5QkFBeUIsR0FBZ0IsSUFBSSxDQUFDRSxhQUFhLE9BQUssSUFBSSxDQUFDQyxNQUFNLGFBQVUsQ0FBQztJQUMzRixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BCO0VBRVVBLFNBQVNBLENBQUEsRUFBUztJQUN4QixJQUFJLElBQUksQ0FBQ0MsVUFBVSxFQUFFO01BQ2pCO0lBQ0o7SUFFQSxJQUFJLENBQUNMLHlCQUF5QixDQUFDTSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTTtNQUM1RCxJQUFJLENBQUNQLGNBQWMsQ0FBQ1EsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0VBQ047RUFFQSxJQUFJRixVQUFVQSxDQUFBLEVBQVc7SUFDckIsT0FBTyxJQUFJLENBQUNHLFlBQVksQ0FBQyxXQUFXLENBQUM7RUFDekM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcnlrZXItYjJiLWRlbW8tc2hvcC8uL3ZlbmRvci9zcHJ5a2VyLXNob3AvY29tbWVudC13aWRnZXQvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvQ29tbWVudFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2NvbW1lbnQtdGFnLWZvcm0vY29tbWVudC10YWctZm9ybS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudFRhZ0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBjb21tZW50VGFnRm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByb3RlY3RlZCBjb21tZW50VGFnU2VsZWN0Q29tcG9uZW50OiBIVE1MRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbW1lbnRUYWdGb3JtID0gPEhUTUxGb3JtRWxlbWVudD50aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuanNOYW1lfV9fZm9ybWApO1xuICAgICAgICB0aGlzLmNvbW1lbnRUYWdTZWxlY3RDb21wb25lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmpzTmFtZX1fX3NlbGVjdGApO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQWpheE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWVudFRhZ1NlbGVjdENvbXBvbmVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRUYWdGb3JtLnN1Ym1pdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgaXNBamF4TW9kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FqYXgtbW9kZScpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDb21tZW50VGFnRm9ybSIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiY29tbWVudFRhZ0Zvcm0iLCJjb21tZW50VGFnU2VsZWN0Q29tcG9uZW50IiwicmVhZHlDYWxsYmFjayIsInF1ZXJ5U2VsZWN0b3IiLCJqc05hbWUiLCJtYXBFdmVudHMiLCJpc0FqYXhNb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Ym1pdCIsImdldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=