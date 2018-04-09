webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nhome, contact{\n    width:100%;\n    height: 100%;\n}\nhtml,body{height: 100%;}\nbody{\n    margin: 0;    \n    direction: rtl;\n    overflow: hidden;\n    font-family: 'Droid Arabic Kufi';\n    line-height: 1.4;\n}\n@font-face {\n    font-family: 'Droid Arabic Kufi';\n    font-style: normal;\n    font-weight: 400;\n    src: url('DroidKufi-Regular.fd8d5b98b9874e5acc6d.eot');\n    src: url('DroidKufi-Regular.fd8d5b98b9874e5acc6d.eot?#iefix') format('embedded-opentype'), \n    url('DroidKufi-Regular.436938da6ed799ca1711.woff2') format('woff2'), \n    url('DroidKufi-Regular.0b2c0e74f616b916c9ca.woff') format('woff'), \n    url('DroidKufi-Regular.a9b030e29a35f523a137.ttf') format('truetype');\n}\n@font-face {\n    font-family: 'Droid Arabic Kufi';\n    font-style: normal;\n    font-weight: 700;\n    src: url('DroidKufi-Bold.da270dfc6adae884d4c9.eot');\n    src: url('DroidKufi-Bold.da270dfc6adae884d4c9.eot?#iefix') format('embedded-opentype'), \n    url('DroidKufi-Bold.4650b9f9ddfc876d3fde.woff2') format('woff2'), \n    url('DroidKufi-Bold.be72cfffbc685d39fb30.woff') format('woff'), \n    url('DroidKufi-Bold.1b89eb34f74a02c06817.ttf') format('truetype');\n}\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n    -ms-text-size-adjust: 100%;\n    /* 2 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n    display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n    display: inline-block;\n    /* 1 */\n    vertical-align: baseline;\n    /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n    display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n    background-color: transparent;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n    outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n    font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n    font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n    background: #ff0;\n    color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n    font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\nsup {\n    top: -0.5em;\n}\nsub {\n    bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n    border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n    overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n    margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n    overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    color: inherit;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n    margin: 0;\n    /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n    overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n    text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    /* 2 */\n    cursor: pointer;\n    /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n    line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    -webkit-box-sizing: content-box;\n    /* 2 */\n    box-sizing: content-box;\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n    border: none;\n    margin: 0;\n    padding: 0;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n    border: 0;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n    overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n    font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\ntd,\nth {\n    padding: 0;\n}\n/* --- General --- */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    margin: 0px;\n    font-weight: normal;\n}\nimg {\n    max-width: 100%;\n}\n.hidden {\n    display: none;\n}\n.upper {\n    text-transform: uppercase;\n}\n.list-unstyled {\n    padding-left: 0;\n    padding-right: 0;\n    list-style: none;\n}\n.no-text {\n    text-indent: -999em;\n    overflow: hidden;\n    display: block;\n}\n.nopadding-hor {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n}\n.clearfix:before,\n.clearfix:after {\n    content: \"\";\n    display: table;\n}\n.clearfix:after {\n    clear: both;\n}\n.clearfix {\n    zoom: 1;\n}\n* {\n    -webkit-box-sizing: border-box;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n}\n/* -- Main Content -- */\n.container {\n    margin: 0;\n    position: fixed;\n    overflow-y: visible;\n    height: 100%;\n    overflow-x: hidden;\n    z-index: 9;\n    margin-top: 0;\n    padding-top: 70px;\n    width: 100%;\n}\n.device-screen {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.device-screen * {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\n.device-screen *:active {\n    outline: none;\n}\n/* --- Header --- */\n.header {\n    background: #ffffff;\n    padding: 5px 0;\n    border-bottom: 1px solid #97865c;\n    position: fixed;\n    height: 70px;\n    z-index: 999;\n    width:100%;\n    -webkit-box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.15);\n            box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.15);\n}\n.pageheader {\n    text-align: center;\n    margin: 10% 1%;\n}\n.back,\n.menubtn {\n    width: 20%;\n    position: absolute;\n    left: 0;\n    text-align: left;\n    padding: 3%;\n    top: 0;\n    height: 100%;\n    padding-top: 8%;\n    cursor: pointer;\n}\n.back span,\n.menubtn span {\n    font-size: 8vw;\n}\n.header .logo {\n    width: 14%;\n    text-align: right;\n    float: right;\n    max-width: 60px;\n    margin-right: 5px;\n}\n.logo img,\n.title img {\n    width: 100%;\n}\n.title {\n    text-align: center;\n    width: 60%;\n    margin: 6px auto;\n    font-weight: bold;\n    color: #91802b;\n}\n/* --- Nav (Side Menu) --- */\n.sidemenu {\n    position: absolute;\n    left: 0;\n    color: white;\n    background: grey;\n    height: 100%;\n    width: 75%;\n    text-align: left;\n    font-family: 'Droid Arabic Kufi';\n}\n.sidemenu a.menu-item {\n    display: block;\n    font-size: 5vw;\n    padding: 3vw;\n    color: white;\n    margin: 0px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-bottom: 1px solid #a0a0a0;\n    font-weight: bold;\n    text-align: right;\n    line-height: 1;\n}\n.sidemenu img.menu-image {\n    width: 100%;\n}\n.sidemenu.menu-en .menu-icon,\n.sidemenu.menu-ar .menu-text {\n    float: right;\n}\n.sidemenu.menu-ar .menu-icon,\n.sidemenu.menu-en .menu-text {\n    float: left;\n}\n.sidemenu .menu-text {\n    line-height: 1.6;\n}\n.sidemenu.menu-ar .menu-icon:before {\n    font-size: 8vw;\n}\n.sidemenu a.menu-item-footer {\n    background: black;\n    margin: 2%;\n    border-radius: 5px;\n    border: 1px solid #eaeaea;\n    position: absolute;\n    bottom: 5px;\n}\n.sidemenu .menu-item-footer .menu-icon-img {\n    width: 11%;\n}\n/* =========================== Main Content ================================ */\n/* --- Intro --- */\n.event.received {\n\n}\n.event.received .inner {\n    display: table-cell;\n    vertical-align: middle;\n}\n.event.received .inner h1 {\n    font-size: 10vw;\n    margin-top: 0px;\n}\n.event.received .inner img {\n    max-width: 60%;\n}\n.loading {\n    position: absolute;\n    text-align: center;\n    top: 0px;\n    left: 0px;\n    background: white;\n    width: 100%;\n    height: 100%;\n}\n.loading img {\n    position: fixed;\n    top: 40%;\n    left: 42%;\n}\n.general_loading {\n    text-align: center;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.8);\n    max-height: 100%;\n    top: 0;\n    left: 0;\n    margin: 0;\n    display: none;\n    position: fixed;\n    height: 100%;\n}\n.general_loading img {\n    position: ABSOLUTE;\n    top: 48%;\n    left: 42%;\n}\n.start {\n    width: 100%;\n    background: white;\n    position: fixed;\n    height: 100%;\n    z-index: 99999;\n    top: 0;\n}\n.base {\n    overflow: hidden;\n}\n/* No Connection*/\n.no-connection {\n    position: absolute;\n    margin-top: 30vw;\n    width: 100%;\n}\n/* --- Page1 --- */\n#main {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: #ececec;\n    top: 0;\n    left: 0;\n    overflow-x: hidden;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n/* ------ */\n::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    color: #bfbfbf;\n}\n:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    color: #bfbfbf;\n    opacity: 1;\n}\n::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    color: #bfbfbf;\n    opacity: 1;\n}\n:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #bfbfbf;\n}\n/* ------ */\n.view {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    -webkit-transition: 400ms;\n    transition: 400ms;\n    background: #ececec;\n    height: 100%;\n    padding: 0;\n    z-index: 9;\n}\n.sidemenu {\n    z-index: 9999;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    -webkit-transition-property: all !important;\n    transition-property: all !important;\n}\n.menu-visible {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    -webkit-transition-property: all !important;\n    transition-property: all !important;\n}\n/*splash page*/\n.splash a {\n    display: block;\n    background: white;\n    padding: 10px;\n    margin-bottom: 5px;\n    text-decoration: none;\n    text-align: center;\n    color: #97865c;\n    font-weight: bold;\n    border: 1px solid #cacaca;\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n}\n.device-screen:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n}\n.bahet:after {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.6;\n    content: \"\";\n    display: block;\n    z-index: 999;\n    top: 0;\n}\n\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map