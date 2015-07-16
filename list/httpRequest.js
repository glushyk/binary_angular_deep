angular
	.module('thumbList')
	.factory('httpRequest', httpRequest)

function httpRequest($http) {
	var thumbs = {}
	thumbs.get = function () {
		var arr = []
		$http.get('http://jsonplaceholder.typicode.com/photos').success( function (response){
			for (data in response){
            	arr.push(response[data]);
          	}
		});
		return arr;
	}
	return thumbs;
}
