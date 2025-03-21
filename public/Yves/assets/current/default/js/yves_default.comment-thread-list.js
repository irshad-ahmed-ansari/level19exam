"use strict";
(globalThis["webpackJsonp_yves_default"] = globalThis["webpackJsonp_yves_default"] || []).push([["comment-thread-list"],{

/***/ "./src/Pyz/Yves/CommentWidget/Theme/default/components/molecules/comment-thread-list/comment-thread-list-extended.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/CommentWidget/Theme/default/components/molecules/comment-thread-list/comment-thread-list-extended.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentThreadListExtended)
/* harmony export */ });
/* harmony import */ var CommentWidget_components_molecules_comment_thread_list_comment_thread_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! CommentWidget/components/molecules/comment-thread-list/comment-thread-list */ "./vendor/spryker-shop/comment-widget/src/SprykerShop/Yves/CommentWidget/Theme/default/components/molecules/comment-thread-list/comment-thread-list.ts");

class CommentThreadListExtended extends CommentWidget_components_molecules_comment_thread_list_comment_thread_list__WEBPACK_IMPORTED_MODULE_0__["default"] {
  show() {
    var commentThreadSelect = this.commentThreadSelectComponent;
    this.onShowCommentThread(commentThreadSelect.value);
    this.scrollDown();
  }
}

/***/ }),

/***/ "./vendor/spryker-shop/comment-widget/src/SprykerShop/Yves/CommentWidget/Theme/default/components/molecules/comment-thread-list/comment-thread-list.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/comment-widget/src/SprykerShop/Yves/CommentWidget/Theme/default/components/molecules/comment-thread-list/comment-thread-list.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentThreadList)
/* harmony export */ });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class CommentThreadList extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.commentThreadSelectComponent = void 0;
    this.commentThread = void 0;
  }
  readyCallback() {
    this.commentThreadSelectComponent = document.querySelector(this.commentThreadSelectSelector);
    this.commentThread = Array.from(this.querySelectorAll("." + this.commentThreadSelector));
    this.show();
    this.mapEvents();
  }
  mapEvents() {
    this.commentThreadSelectComponent.addEventListener('change', event => {
      this.onSelectChange(event);
    });
  }
  show() {
    var commentThreadSelect = this.commentThreadSelectComponent.querySelector('select');
    this.onShowCommentThread(commentThreadSelect.value);
    this.scrollDown();
  }
  onSelectChange(event) {
    var commentThreadSelect = event.target;
    this.onShowCommentThread(commentThreadSelect.value);
    this.scrollDown();
  }
  onShowCommentThread(showNameComment) {
    this.commentThread.forEach(comment => {
      var commentName = comment.getAttribute('name');
      if (commentName !== showNameComment) {
        comment.classList.add(this.classToToggle);
        return;
      }
      comment.classList.remove(this.classToToggle);
    });
  }
  scrollDown() {
    if (this.scrollHeight > this.clientHeight) {
      this.scrollTop = this.scrollHeight - this.clientHeight;
    }
  }

  /**
   * Gets a querySelector name of the select element.
   */
  get commentThreadSelectSelector() {
    return this.getAttribute('comment-thread-select-selector');
  }

  /**
   * Gets a querySelector name of the comment-thread component.
   */
  get commentThreadSelector() {
    return this.getAttribute('comment-thread-selector');
  }

  /**
   * Gets a class name for the toggle action.
   */
  get classToToggle() {
    return this.getAttribute('class-to-toggle');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuY29tbWVudC10aHJlYWQtbGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyRztBQUU1RixNQUFNQyx5QkFBeUIsU0FBU0Qsa0hBQWlCLENBQUM7RUFDM0RFLElBQUlBLENBQUEsRUFBUztJQUNuQixJQUFNQyxtQkFBc0MsR0FBc0IsSUFBSSxDQUFDQyw0QkFBNEI7SUFDbkcsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ0YsbUJBQW1CLENBQUNHLEtBQUssQ0FBQztJQUNuRCxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0FBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQ1JnRDtBQUVqQyxNQUFNUCxpQkFBaUIsU0FBU1EsK0RBQVMsQ0FBQztFQUFBQyxZQUFBO0lBQUEsU0FBQUMsU0FBQTtJQUFBLEtBQzNDTiw0QkFBNEI7SUFBQSxLQUM1Qk8sYUFBYTtFQUFBO0VBRWJDLGFBQWFBLENBQUEsRUFBUztJQUM1QixJQUFJLENBQUNSLDRCQUE0QixHQUFnQlMsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDQywyQkFBMkIsQ0FBQztJQUN6RyxJQUFJLENBQUNKLGFBQWEsR0FBa0JLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0MsZ0JBQWdCLE9BQUssSUFBSSxDQUFDQyxxQkFBdUIsQ0FBQyxDQUFDO0lBQ3ZHLElBQUksQ0FBQ2pCLElBQUksQ0FBQyxDQUFDO0lBQ1gsSUFBSSxDQUFDa0IsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFFVUEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3hCLElBQUksQ0FBQ2hCLDRCQUE0QixDQUFDaUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxLQUFZLElBQUs7TUFDM0UsSUFBSSxDQUFDQyxjQUFjLENBQUNELEtBQUssQ0FBQztJQUM5QixDQUFDLENBQUM7RUFDTjtFQUVVcEIsSUFBSUEsQ0FBQSxFQUFTO0lBQ25CLElBQU1DLG1CQUFzQyxHQUFHLElBQUksQ0FBQ0MsNEJBQTRCLENBQUNVLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDeEcsSUFBSSxDQUFDVCxtQkFBbUIsQ0FBQ0YsbUJBQW1CLENBQUNHLEtBQUssQ0FBQztJQUNuRCxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0VBRVVnQixjQUFjQSxDQUFDRCxLQUFZLEVBQVE7SUFDekMsSUFBTW5CLG1CQUFzQyxHQUFHbUIsS0FBSyxDQUFDRSxNQUEyQjtJQUNoRixJQUFJLENBQUNuQixtQkFBbUIsQ0FBQ0YsbUJBQW1CLENBQUNHLEtBQUssQ0FBQztJQUNuRCxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0VBRVVGLG1CQUFtQkEsQ0FBQ29CLGVBQXVCLEVBQVE7SUFDekQsSUFBSSxDQUFDZCxhQUFhLENBQUNlLE9BQU8sQ0FBRUMsT0FBb0IsSUFBSztNQUNqRCxJQUFNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsWUFBWSxDQUFDLE1BQU0sQ0FBQztNQUVoRCxJQUFJRCxXQUFXLEtBQUtILGVBQWUsRUFBRTtRQUNqQ0UsT0FBTyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLGFBQWEsQ0FBQztRQUV6QztNQUNKO01BQ0FMLE9BQU8sQ0FBQ0csU0FBUyxDQUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDRCxhQUFhLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0VBQ047RUFFVXpCLFVBQVVBLENBQUEsRUFBUztJQUN6QixJQUFJLElBQUksQ0FBQzJCLFlBQVksR0FBRyxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUN2QyxJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNGLFlBQVksR0FBRyxJQUFJLENBQUNDLFlBQVk7SUFDMUQ7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJcEIsMkJBQTJCQSxDQUFBLEVBQVc7SUFDdEMsT0FBTyxJQUFJLENBQUNjLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQztFQUM5RDs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxJQUFJVixxQkFBcUJBLENBQUEsRUFBVztJQUNoQyxPQUFPLElBQUksQ0FBQ1UsWUFBWSxDQUFDLHlCQUF5QixDQUFDO0VBQ3ZEOztFQUVBO0FBQ0o7QUFDQTtFQUNJLElBQUlHLGFBQWFBLENBQUEsRUFBVztJQUN4QixPQUFPLElBQUksQ0FBQ0gsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0VBQy9DO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi9zcmMvUHl6L1l2ZXMvQ29tbWVudFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2NvbW1lbnQtdGhyZWFkLWxpc3QvY29tbWVudC10aHJlYWQtbGlzdC1leHRlbmRlZC50cyIsIndlYnBhY2s6Ly9zcHJ5a2VyLWIyYi1kZW1vLXNob3AvLi92ZW5kb3Ivc3ByeWtlci1zaG9wL2NvbW1lbnQtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL0NvbW1lbnRXaWRnZXQvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9jb21tZW50LXRocmVhZC1saXN0L2NvbW1lbnQtdGhyZWFkLWxpc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lbnRUaHJlYWRMaXN0IGZyb20gJ0NvbW1lbnRXaWRnZXQvY29tcG9uZW50cy9tb2xlY3VsZXMvY29tbWVudC10aHJlYWQtbGlzdC9jb21tZW50LXRocmVhZC1saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudFRocmVhZExpc3RFeHRlbmRlZCBleHRlbmRzIENvbW1lbnRUaHJlYWRMaXN0IHtcbiAgICBwcm90ZWN0ZWQgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29tbWVudFRocmVhZFNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+dGhpcy5jb21tZW50VGhyZWFkU2VsZWN0Q29tcG9uZW50O1xuICAgICAgICB0aGlzLm9uU2hvd0NvbW1lbnRUaHJlYWQoY29tbWVudFRocmVhZFNlbGVjdC52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50VGhyZWFkTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGNvbW1lbnRUaHJlYWRTZWxlY3RDb21wb25lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBjb21tZW50VGhyZWFkOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tbWVudFRocmVhZFNlbGVjdENvbXBvbmVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29tbWVudFRocmVhZFNlbGVjdFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5jb21tZW50VGhyZWFkID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuY29tbWVudFRocmVhZFNlbGVjdG9yfWApKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb21tZW50VGhyZWFkU2VsZWN0Q29tcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RDaGFuZ2UoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29tbWVudFRocmVhZFNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgPSB0aGlzLmNvbW1lbnRUaHJlYWRTZWxlY3RDb21wb25lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub25TaG93Q29tbWVudFRocmVhZChjb21tZW50VGhyZWFkU2VsZWN0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uU2VsZWN0Q2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb21tZW50VGhyZWFkU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgdGhpcy5vblNob3dDb21tZW50VGhyZWFkKGNvbW1lbnRUaHJlYWRTZWxlY3QudmFsdWUpO1xuICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25TaG93Q29tbWVudFRocmVhZChzaG93TmFtZUNvbW1lbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbW1lbnRUaHJlYWQuZm9yRWFjaCgoY29tbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnROYW1lID0gY29tbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICAgICAgICAgICAgaWYgKGNvbW1lbnROYW1lICE9PSBzaG93TmFtZUNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc1RvVG9nZ2xlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzVG9Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsRG93bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBxdWVyeVNlbGVjdG9yIG5hbWUgb2YgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldCBjb21tZW50VGhyZWFkU2VsZWN0U2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb21tZW50LXRocmVhZC1zZWxlY3Qtc2VsZWN0b3InKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgcXVlcnlTZWxlY3RvciBuYW1lIG9mIHRoZSBjb21tZW50LXRocmVhZCBjb21wb25lbnQuXG4gICAgICovXG4gICAgZ2V0IGNvbW1lbnRUaHJlYWRTZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbW1lbnQtdGhyZWFkLXNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIGNsYXNzIG5hbWUgZm9yIHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBjbGFzc1RvVG9nZ2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2xhc3MtdG8tdG9nZ2xlJyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbW1lbnRUaHJlYWRMaXN0IiwiQ29tbWVudFRocmVhZExpc3RFeHRlbmRlZCIsInNob3ciLCJjb21tZW50VGhyZWFkU2VsZWN0IiwiY29tbWVudFRocmVhZFNlbGVjdENvbXBvbmVudCIsIm9uU2hvd0NvbW1lbnRUaHJlYWQiLCJ2YWx1ZSIsInNjcm9sbERvd24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImNvbW1lbnRUaHJlYWQiLCJyZWFkeUNhbGxiYWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29tbWVudFRocmVhZFNlbGVjdFNlbGVjdG9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbW1lbnRUaHJlYWRTZWxlY3RvciIsIm1hcEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uU2VsZWN0Q2hhbmdlIiwidGFyZ2V0Iiwic2hvd05hbWVDb21tZW50IiwiZm9yRWFjaCIsImNvbW1lbnQiLCJjb21tZW50TmFtZSIsImdldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzVG9Ub2dnbGUiLCJyZW1vdmUiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiXSwic291cmNlUm9vdCI6IiJ9