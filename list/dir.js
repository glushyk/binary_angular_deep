(function() {
	"use strict";

angular
	.module('thumbList')
	.directive('show', show);

function show () {
	return {
		replace: true,
		template: 
			"<div><img class='thumbnail' ng-src='{{thumb.thumbnailUrl}}'><div class='thumbnailTitle'>{{thumb.title}}</div></div>",
		scope: {
			thumb: "="
		},
		restrict: "A",
		link: function(scope,element){
			var itsElement = element[0].addEventListener("click", function (o){
					var background = document.createElement('div');
						document.body.appendChild(background);
					var bigImage = document.createElement('img');
						background.appendChild(bigImage);					
				
								bigImage.src = scope.thumb.url;
								bigImage.setAttribute('class','bigImage');
								background.setAttribute('class','background');
								background.addEventListener("click", function (o){
					background.parentNode.removeChild(background);
				});
			});
			}
        }
}

})();