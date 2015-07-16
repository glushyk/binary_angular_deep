(function() {
	"use strict";

angular
	.module('thumbList')
	.controller('ListController', ListController)

function ListController (httpRequest) {
	var vm = this;
	vm.thumbs = httpRequest.get();
}

})();
	