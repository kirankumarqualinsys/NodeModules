'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('iterator.prototype');

module.exports = function shimIteratorPrototypeFilter() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ filter: polyfill },
		{ filter: function () { return $IteratorPrototype.filter !== polyfill; } }
	);

	return polyfill;
};
