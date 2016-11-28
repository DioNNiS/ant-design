webpackJsonp([43,202],{

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(212);

	var _affix = __webpack_require__(180);

	var _affix2 = _interopRequireDefault(_affix);

	var _style4 = __webpack_require__(12);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法。"]],
	    "en-US": [["p", "The simplest usage."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/affix/demo/basic.md",
	    "id": "components-affix-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Affix<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Affix</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Affix top<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Affix</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Affix</span> <span class=\"token attr-name\" >offsetBottom</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Affix bottom<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Affix</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _affix2.default,
	        null,
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'primary' },
	          'Affix top'
	        )
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _affix2.default,
	        { offsetBottom: 0 },
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'primary' },
	          'Affix bottom'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(212);

	var _affix = __webpack_require__(180);

	var _affix2 = _interopRequireDefault(_affix);

	var _style4 = __webpack_require__(12);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以获得是否固定的状态。"]],
	    "en-US": [["p", "Callback with affixed state."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "固定状态改变的回调",
	      "en-US": "Callback"
	    },
	    "filename": "components/affix/demo/on-change.md",
	    "id": "components-affix-demo-on-change"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Affix<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Affix</span> <span class=\"token attr-name\" >offsetTop</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >120</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>affixed <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>affixed<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span><span class=\"token punctuation\" >></span></span>120px to affix top<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Affix</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _affix2.default,
	      { offsetTop: 120, onChange: function onChange(affixed) {
	          return console.log(affixed);
	        } },
	      _react2.default.createElement(
	        _button2.default,
	        null,
	        '120px to affix top'
	      )
	    );
	  }
	};

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(212);

	var _affix = __webpack_require__(180);

	var _affix2 = _interopRequireDefault(_affix);

	var _style4 = __webpack_require__(12);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用 ", ["code", "target"], " 设置 ", ["code", "Affix"], " 需要监听其滚动事件的元素，默认为 ", ["code", "window"], "。"]],
	    "en-US": [["p", "Set a ", ["code", "target"], " for 'Affix', which is listen to scroll event of target element (default is ", ["code", "window"], ")."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "滚动容器",
	      "en-US": "Container to scroll."
	    },
	    "filename": "components/affix/demo/target.md",
	    "id": "components-affix-demo-target"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Affix<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Demo <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>view-port<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>scrollable-container<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>background<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Affix</span> <span class=\"token attr-name\" >target</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> document<span class=\"token punctuation\" >.</span><span class=\"token function\" >getElementById</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'scrollable-container'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >offsetTop</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >20</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Fixed at the top <span class=\"token keyword\" >of</span> container<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Affix</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Demo</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Demo = function Demo() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'view-port' },
	        _react2.default.createElement(
	          'div',
	          { id: 'scrollable-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'background' },
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              _affix2.default,
	              { target: function target() {
	                  return document.getElementById('scrollable-container');
	                }, offsetTop: 20 },
	              _react2.default.createElement(
	                _button2.default,
	                { type: 'primary' },
	                'Fixed at the top of container'
	              )
	            )
	          )
	        )
	      );
	    };return _react2.default.createElement(Demo, null);
	  },
	  "style": "\n#components-affix-demo-target .view-port {\n  height: 100px;\n  overflow: hidden;\n}\n#components-affix-demo-target #scrollable-container {\n  height: 100%;\n  overflow-y: scroll;\n}\n#components-affix-demo-target .background {\n  height: 300px;\n  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');\n}\n"
	};

/***/ },

/***/ 1183:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(627),
	    'on-change': __webpack_require__(628),
	    'target': __webpack_require__(629),
	}

/***/ }

});