(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 200;\n    src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'), url(https://fonts.gstatic.com/s/sourcesanspro/v12/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdr.ttf) format('truetype');\n}\n\n@font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v12/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf) format('truetype');\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-weight: 300;\n}\n\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n    color: white;\n    font-weight: 300;\n}\n\nbody ::-webkit-input-placeholder {\n    /* WebKit browsers */\n    font-family: 'Source Sans Pro', sans-serif;\n    color: white;\n    font-weight: 300;\n}\n\nbody :-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    font-family: 'Source Sans Pro', sans-serif;\n    color: white;\n    opacity: 1;\n    font-weight: 300;\n}\n\nbody ::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    font-family: 'Source Sans Pro', sans-serif;\n    color: white;\n    opacity: 1;\n    font-weight: 300;\n}\n\nbody :-ms-input-placeholder {\n    /* Internet Explorer 10+ */\n    font-family: 'Source Sans Pro', sans-serif;\n    color: white;\n    font-weight: 300;\n}\n\n.wrapper {\n    background: #50a3a2;\n    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 400px;\n    margin-top: -200px;\n    overflow: hidden;\n}\n\n.wrapper.form-success .container h1 {\n    -webkit-transform: translateY(85px);\n    transform: translateY(85px);\n}\n\n.container {\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 80px 0;\n    height: 400px;\n    text-align: center;\n}\n\n.container h1 {\n    font-size: 40px;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-put;\n    font-weight: 200;\n    font-family: system-ui !important;\n}\n\nform {\n    padding: 20px 0;\n    position: relative;\n    z-index: 2;\n}\n\nform input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    outline: 0;\n    border: 1px solid rgba(255, 255, 255, 0.4);\n    background-color: rgba(255, 255, 255, 0.2);\n    width: 250px;\n    border-radius: 3px;\n    padding: 10px 15px;\n    margin: 0 auto 10px auto;\n    display: block;\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    transition-duration: 0.25s;\n    font-weight: 300;\n}\n\nform input:hover {\n    background-color: rgba(255, 255, 255, 0.4);\n}\n\nform input:focus {\n    background-color: white;\n    width: 300px;\n    color: #53e3a6;\n}\n\nform button {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    outline: 0;\n    background-color: white;\n    border: 0;\n    padding: 10px 15px;\n    color: #53e3a6;\n    border-radius: 3px;\n    width: 250px;\n    cursor: pointer;\n    font-size: 18px;\n    transition-duration: 0.25s;\n}\n\nform button:hover {\n    background-color: #f5f7f9;\n}\n\n.bg-bubbles {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n\n.bg-bubbles li {\n    position: absolute;\n    list-style: none;\n    display: block;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(255, 255, 255, 0.15);\n    bottom: -160px;\n    -webkit-animation: square 25s infinite;\n    animation: square 25s infinite;\n    transition-timing-function: linear;\n}\n\n.bg-bubbles li:nth-child(1) {\n    left: 10%;\n}\n\n.bg-bubbles li:nth-child(2) {\n    left: 20%;\n    width: 80px;\n    height: 80px;\n    -webkit-animation-delay: 2s;\n    animation-delay: 2s;\n    -webkit-animation-duration: 17s;\n    animation-duration: 17s;\n}\n\n.bg-bubbles li:nth-child(3) {\n    left: 25%;\n    -webkit-animation-delay: 4s;\n    animation-delay: 4s;\n}\n\n.bg-bubbles li:nth-child(4) {\n    left: 40%;\n    width: 60px;\n    height: 60px;\n    -webkit-animation-duration: 22s;\n    animation-duration: 22s;\n    background-color: rgba(255, 255, 255, 0.25);\n}\n\n.bg-bubbles li:nth-child(5) {\n    left: 70%;\n}\n\n.bg-bubbles li:nth-child(6) {\n    left: 80%;\n    width: 120px;\n    height: 120px;\n    -webkit-animation-delay: 3s;\n    animation-delay: 3s;\n    background-color: rgba(255, 255, 255, 0.2);\n}\n\n.bg-bubbles li:nth-child(7) {\n    left: 32%;\n    width: 160px;\n    height: 160px;\n    -webkit-animation-delay: 7s;\n    animation-delay: 7s;\n}\n\n.bg-bubbles li:nth-child(8) {\n    left: 55%;\n    width: 20px;\n    height: 20px;\n    -webkit-animation-delay: 15s;\n    animation-delay: 15s;\n    -webkit-animation-duration: 40s;\n    animation-duration: 40s;\n}\n\n.bg-bubbles li:nth-child(9) {\n    left: 25%;\n    width: 10px;\n    height: 10px;\n    -webkit-animation-delay: 2s;\n    animation-delay: 2s;\n    -webkit-animation-duration: 40s;\n    animation-duration: 40s;\n    background-color: rgba(255, 255, 255, 0.3);\n}\n\n.bg-bubbles li:nth-child(10) {\n    left: 90%;\n    width: 160px;\n    height: 160px;\n    -webkit-animation-delay: 11s;\n    animation-delay: 11s;\n}\n\n@-webkit-keyframes square {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n\n    100% {\n        -webkit-transform: translateY(-700px) rotate(600deg);\n        transform: translateY(-700px) rotate(600deg);\n    }\n}\n\n@keyframes square {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n\n    100% {\n        -webkit-transform: translateY(-700px) rotate(600deg);\n        transform: translateY(-700px) rotate(600deg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJMQUEyTDtBQUMvTDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlMQUFpTDtBQUNyTDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztRQUNoQyx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxvREFBb0Q7UUFDcEQsNENBQTRDO0lBQ2hEO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztRQUNoQyx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxvREFBb0Q7UUFDcEQsNENBQTRDO0lBQ2hEO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHNyYzogbG9jYWwoJ1NvdXJjZSBTYW5zIFBybyBFeHRyYUxpZ2h0JyksIGxvY2FsKCdTb3VyY2VTYW5zUHJvLUV4dHJhTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zb3VyY2VzYW5zcHJvL3YxMi82eEt5ZFNCWUtjU1YtTENvZVFxZlgxUllPbzNpOTRfd2x4ZHIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdTb3VyY2UgU2FucyBQcm8gTGlnaHQnKSwgbG9jYWwoJ1NvdXJjZVNhbnNQcm8tTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zb3VyY2VzYW5zcHJvL3YxMi82eEt5ZFNCWUtjU1YtTENvZVFxZlgxUllPbzNpazR6d2x4ZHIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICM1MGEzYTI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzUwYTNhMiAwJSwgIzUzZTNhNiAxMDAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbi10b3A6IC0yMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud3JhcHBlci5mb3JtLXN1Y2Nlc3MgLmNvbnRhaW5lciBoMSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDg1cHgpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLXB1dDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWkgIWltcG9ydGFudDtcbn1cblxuZm9ybSB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5mb3JtIGlucHV0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5mb3JtIGlucHV0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbmZvcm0gaW5wdXQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogIzUzZTNhNjtcbn1cblxuZm9ybSBidXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgY29sb3I6ICM1M2UzYTY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xufVxuXG5mb3JtIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmOTtcbn1cblxuLmJnLWJ1YmJsZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJnLWJ1YmJsZXMgbGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcXVhcmUgMjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3F1YXJlIDI1cyBpbmZpbml0ZTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDEwJTtcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiAyMCU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XG59XG5cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCgzKSB7XG4gICAgbGVmdDogMjUlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDRzO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNCkge1xuICAgIGxlZnQ6IDQwJTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIycztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNSkge1xuICAgIGxlZnQ6IDcwJTtcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDYpIHtcbiAgICBsZWZ0OiA4MCU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogM3M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNykge1xuICAgIGxlZnQ6IDMyJTtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogN3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA3cztcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDgpIHtcbiAgICBsZWZ0OiA1NSU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDQwcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDQwcztcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDkpIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMTApIHtcbiAgICBsZWZ0OiA5MCU7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDExcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDExcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZSB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHJvdGF0ZSg2MDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSByb3RhdGUoNjAwZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3F1YXJlIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgcm90YXRlKDYwMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHJvdGF0ZSg2MDBkZWcpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\">\n      <h1>Hello PAGOS</h1>\n      <form class=\"form\">\n        <input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"userName\"\n        (ngModelChange)=\"changeInModelValue(userName, 'user')\" [ngModelOptions]=\"{standalone: true}\">\n        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"\n        (ngModelChange)=\"changeInModelValue(password, 'password')\" [ngModelOptions]=\"{standalone: true}\">\n        <button type=\"submit\" (click)=\"authenticate()\" id=\"login-button\">Login</button>\n      </form>\n    </div>\n    <ul class=\"bg-bubbles\">\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(router, api) {
        this.router = router;
        this.api = api;
        this.userName = '';
        this.password = '';
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        this.api.logout();
    };
    AdminLoginComponent.prototype.changeInModelValue = function (value, prop) {
        console.log(value, prop);
        if (prop === 'user') {
            this.userName = value;
        }
        else if (prop === 'password') {
            this.password = value;
        }
    };
    AdminLoginComponent.prototype.authenticate = function () {
        var _this = this;
        var req = {};
        req.username = this.userName;
        req.password = this.password;
        this.api.authenticate(req)
            .subscribe(function (user) {
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.router.navigate(['/products']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/api";
var loginUrl = '/login/user';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getProducts = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getProduct = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postProduct = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.authenticate = function (data) {
        return this.http.post(loginUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    ApiService.prototype.updateProduct = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteProduct = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            window.console.log = function () { };
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/book-create/book-create.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jwt-interceptor */ "./src/app/jwt-interceptor.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    {
        path: 'login',
        component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"],
        data: { title: 'Admin Login' }
    },
    {
        path: 'products',
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
        data: { title: 'Product List' }
    },
    {
        path: 'product-details/:id',
        component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'product-create',
        component: _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_8__["BookCreateComponent"],
        data: { title: 'Create Product' }
    },
    {
        path: 'product-edit/:id',
        component: _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookEditComponent"],
        data: { title: 'Edit Product' }
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailComponent"],
                _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_8__["BookCreateComponent"],
                _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookEditComponent"],
                _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]
            ],
            providers: [_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptorProvider"], _api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-create/book-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-create/book-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1jcmVhdGUvYm9vay1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ib29rLWNyZWF0ZS9ib29rLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGg6bnRoLWxhc3QtY2hpbGQoKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b24tcm93IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/book-create/book-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-create/book-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/products']\">\n    <mat-icon>list</mat-icon>\n  </a>\n</div>\n<form [formGroup]=\"productForm\" (ngSubmit)=\"onFormSubmit(productForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"SKU\" formControlName=\"sku\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('sku').valid && productForm.get('sku').touched\">Please enter sku</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('title').valid && productForm.get('title').touched\">Please enter product\n        title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Model\" formControlName=\"model\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('model').valid && productForm.get('model').touched\">Please enter product\n        model</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!productForm.get('description').valid && productForm.get('description').touched\">Please enter\n        product description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Color\" formControlName=\"color\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('color').valid && productForm.get('color').touched\">Please enter color</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Price\" formControlName=\"price\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('price').valid && productForm.get('price').touched\">Please enter price</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Coupon\" formControlName=\"coupon\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('coupon').valid && productForm.get('coupon').touched\">Please enter color</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Small\" formControlName=\"small\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('small').valid && productForm.get('small').touched\">Please enter\n        size small</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Medium\" formControlName=\"medium\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('medium').valid && productForm.get('medium').touched\">Please enter\n        size medium</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Large\" formControlName=\"large\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('large').valid && productForm.get('large').touched\">Please enter\n        size large</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"X-Large\" formControlName=\"xlarge\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('xlarge').valid && productForm.get('xlarge').touched\">Please enter\n        size x-large</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field *ngFor=\"let item of imageList; let i = index;\" class=\"example-full-width\">\n    <input matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item.image\"\n      (ngModelChange)=\"changeInModelValue(item.image, i)\" placeholder=\"Image\">\n    <mat-icon matSuffix (click)=\"deleteImage(i)\">delete</mat-icon>\n  </mat-form-field>\n  <div class=\"row\">\n    <div class=\"column imageWrapper\" *ngFor=\"let item of imageList; let i = index;\">\n      <img *ngIf=\"item.image !== ''\" src=\"{{'http://drive.google.com/uc?id=' + item.image}}\">\n      <span *ngIf=\"item.image !== ''\" class=\"imageText\">{{i + 1}}</span>\n    </div>\n  </div>\n  <div class=\"button-row\">\n    <button (click)=\"addNewImage()\" type=\"button\" mat-raised-button color=\"primary\">\n      <mat-icon>add_a_photo</mat-icon>\n    </button>\n  </div>\n  <div class=\"button-row\">\n    <button type=\"submit\" mat-raised-button color=\"primary\">\n      <mat-icon>save</mat-icon>\n    </button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/book-create/book-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-create/book-create.component.ts ***!
  \******************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.sku = '';
        this.title = '';
        this.description = '';
        this.model = '';
        this.color = '';
        this.price = '';
        this.coupon = '';
        this.small = 0;
        this.medium = 0;
        this.large = 0;
        this.xlarge = 0;
        this.imageList = [];
    }
    BookCreateComponent.prototype.ngOnInit = function () {
        this.productForm = this.formBuilder.group({
            'sku': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'model': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'color': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'coupon': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'small': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'medium': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'large': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'xlarge': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BookCreateComponent.prototype.deleteImage = function (imageIndex) {
        this.imageList.splice(imageIndex, 1);
    };
    BookCreateComponent.prototype.checkProperties = function (obj) {
        for (var key in obj) {
            if (obj[key] !== null && obj[key] != "")
                return false;
        }
        return true;
    };
    BookCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        var flag = this.checkProperties(form);
        if (flag)
            return;
        form.images = this.imageList;
        this.api.postProduct(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/product-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent.prototype.changeInModelValue = function (value, index) {
        this.imageList[index].image = value;
    };
    BookCreateComponent.prototype.addNewImage = function () {
        this.imageList.push({
            image: ''
        });
    };
    BookCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__(/*! ./book-create.component.css */ "./src/app/book-create/book-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book-detail/book-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 50%;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n.cardWrapper{\n  display: flex;\n}\n\n.marginRight{\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ib29rLWRldGFpbC9ib29rLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tcm93IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5jYXJkV3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1hcmdpblJpZ2h0e1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" class=\"marginRight\" [routerLink]=\"['/products']\">\n    <mat-icon>list</mat-icon>\n  </a>\n  <a mat-raised-button color=\"primary\" class=\"marginRight\" [routerLink]=\"['/product-edit', product._id]\">\n    <mat-icon>edit</mat-icon>\n  </a>\n  <a mat-raised-button color=\"warn\" class=\"marginRight\" (click)=\"deleteProduct(product._id)\">\n    <mat-icon>delete</mat-icon>\n  </a>\n</div>\n<mat-card class=\"cardWrapper\">\n  <mat-card-content class=\"example-card\">\n    <mat-card>\n      <p>SKU Code</p>\n      <mat-card>{{product.sku}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Title</p>\n      <mat-card>{{product.title}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Description</p>\n      <mat-card>{{product.description}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Model Name</p>\n      <mat-card>{{product.model}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Price</p>\n      <mat-card>{{product.price}}</mat-card>\n    </mat-card>\n  </mat-card-content>\n  <mat-card-content class=\"example-card\">\n    <mat-card>\n      <p>Size S</p>\n      <mat-card>{{product.small}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Size M</p>\n      <mat-card>{{product.medium}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Size L</p>\n      <mat-card>{{product.large}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Size XL</p>\n      <mat-card>{{product.xlarge}}</mat-card>\n    </mat-card>\n    <mat-card>\n      <p>Coupon Code</p>\n      <mat-card>{{product.coupon}}</mat-card>\n    </mat-card>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <p>Images</p>\n  <mat-card>\n    <div class=\"row\">\n      <div class=\"column imageWrapper\" *ngFor=\"let item of product.images; let i = index;\">\n        <img *ngIf=\"item.image !== ''\" src=\"{{'http://drive.google.com/uc?id=' + item.image}}\">\n        <span *ngIf=\"item.image !== ''\" class=\"imageText\">{{i + 1}}</span>\n      </div>\n    </div>\n  </mat-card>\n</mat-card>\n<mat-card>\n  <p>Update Date</p>\n  <mat-card>{{product.updated_date | date}}</mat-card>\n</mat-card>"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.ts ***!
  \******************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.product = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getProductDetails(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getProductDetails = function (id) {
        var _this = this;
        this.api.getProduct(id)
            .subscribe(function (data) {
            console.log(data);
            _this.product = data;
        });
    };
    BookDetailComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.api.deleteProduct(id)
            .subscribe(function (res) {
            _this.router.navigate(['/products']);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-edit/book-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYnV0dG9uLXJvdyB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"productDetails()\">\n    <mat-icon>show</mat-icon>\n  </a>\n</div>\n<form [formGroup]=\"productForm\" (ngSubmit)=\"onFormSubmit(productForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"SKU\" formControlName=\"sku\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('sku').valid && productForm.get('sku').touched\">Please enter sku</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('title').valid && productForm.get('title').touched\">Please enter product\n        title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Model\" formControlName=\"model\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('model').valid && productForm.get('model').touched\">Please enter product\n        model</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!productForm.get('description').valid && productForm.get('description').touched\">Please enter\n        product description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Color\" formControlName=\"color\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('color').valid && productForm.get('color').touched\">Please enter color</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Price\" formControlName=\"price\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('price').valid && productForm.get('price').touched\">Please enter price</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Coupon\" formControlName=\"coupon\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('coupon').valid && productForm.get('coupon').touched\">Please enter color</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Small\" formControlName=\"small\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('small').valid && productForm.get('small').touched\">Please enter\n        size small</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Medium\" formControlName=\"medium\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('medium').valid && productForm.get('medium').touched\">Please enter\n        size medium</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Large\" formControlName=\"large\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('large').valid && productForm.get('large').touched\">Please enter\n        size large</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"X-Large\" formControlName=\"xlarge\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!productForm.get('xlarge').valid && productForm.get('xlarge').touched\">Please enter\n        size x-large</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field *ngFor=\"let item of imageList; let i = index;\" class=\"example-full-width\">\n    <input matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item.image\"\n      (ngModelChange)=\"changeInModelValue(item.image, i)\" placeholder=\"Image\">\n    <mat-icon matSuffix (click)=\"deleteImage(i)\">delete</mat-icon>\n  </mat-form-field>\n  <div class=\"row\">\n    <div class=\"column imageWrapper\" *ngFor=\"let item of imageList; let i = index;\">\n      <img *ngIf=\"item.image !== ''\" src=\"{{'http://drive.google.com/uc?id=' + item.image}}\">\n      <span *ngIf=\"item.image !== ''\"  class=\"imageText\">{{i + 1}}</span>\n    </div>\n  </div>\n  <div class=\"button-row\">\n    <button (click)=\"addNewImage()\" type=\"button\" mat-raised-button color=\"primary\">\n      <mat-icon>add_a_photo</mat-icon>\n    </button>\n  </div>\n  <div class=\"button-row\">\n    <button type=\"submit\" mat-raised-button color=\"primary\">\n      <mat-icon>save</mat-icon>\n    </button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.sku = '';
        this.title = '';
        this.description = '';
        this.model = '';
        this.color = '';
        this.price = '';
        this.coupon = '';
        this.small = '';
        this.medium = '';
        this.large = '';
        this.xlarge = '';
        this.inventory = [];
        this.imageList = [];
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getProduct(this.route.snapshot.params['id']);
        this.productForm = this.formBuilder.group({
            'sku': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'model': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'color': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'coupon': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'small': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'medium': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'large': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'xlarge': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BookEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.api.getProduct(id).subscribe(function (data) {
            _this.id = data._id;
            _this.imageList = data.images;
            _this.productForm.setValue({
                sku: data.sku,
                title: data.title,
                description: data.description,
                model: data.model,
                color: data.color,
                price: data.price,
                coupon: data.coupon,
                small: data.small,
                medium: data.medium,
                large: data.large,
                xlarge: data.xlarge
            });
        });
    };
    BookEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        form.images = this.imageList;
        this.api.updateProduct(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/product-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent.prototype.changeInModelValue = function (value, index) {
        this.imageList[index].image = value;
    };
    BookEditComponent.prototype.deleteImage = function (imageIndex) {
        this.imageList.splice(imageIndex, 1);
    };
    BookEditComponent.prototype.addNewImage = function () {
        this.imageList.push({
            image: ''
        });
    };
    BookEditComponent.prototype.productDetails = function () {
        this.router.navigate(['/product-details', this.id]);
    };
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/book-edit/book-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5pc2JuLWNvbCB7XG4gIGZsZXg6IDAgMCAxMDBweCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/product-create']\">\n    <mat-icon>add</mat-icon>\n  </a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"sku\">\n      <th mat-header-cell *matHeaderCellDef> SKU </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.sku}} </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Title </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- Author Column -->\n    <ng-container matColumnDef=\"model\">\n      <th mat-header-cell *matHeaderCellDef> Model </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef> Color </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/product-details/', row._id]\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent, BookDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataSource", function() { return BookDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(api) {
        this.api = api;
        this.displayedColumns = ['sku', 'title', 'model', 'color'];
        this.dataSource = new BookDataSource(this.api);
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getProducts()
            .subscribe(function (res) {
            console.log(res);
            _this.products = res;
        }, function (err) {
            console.log(err);
        });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], BookComponent);
    return BookComponent;
}());

var BookDataSource = /** @class */ (function (_super) {
    __extends(BookDataSource, _super);
    function BookDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    BookDataSource.prototype.connect = function () {
        return this.api.getProducts();
    };
    BookDataSource.prototype.disconnect = function () {
    };
    return BookDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/jwt-interceptor.ts":
/*!************************************!*\
  !*** ./src/app/jwt-interceptor.ts ***!
  \************************************/
/*! exports provided: JwtInterceptor, JwtInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorProvider", function() { return JwtInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());

var JwtInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: JwtInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/praveen/Projects/pagos-store/git-hub/pagos-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map