var module = angular.module("global.directives", []);

module.directive("csrfTokenized", function() {
	function authenticityToken() {
	    return $("meta[name='csrf-token']").attr("content") || "0xDEADBEEF";
	}

	return {
	    restrict: "A",
		link: function(scope, elt, attrs, controller) {
		var tag = $("<input/>").attr("type", "hidden");
		tag.attr("name", "authenticity_token");
		tag.attr("value", authenticityToken());
		$(elt).prepend(tag);
	    }
	}
    })
