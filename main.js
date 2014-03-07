
var mainCtrl = function($scope) {

	$scope.gacha_xtimes = 1;
	console.log("gacha!" + $scope.gacha_xtimes);
	$scope.gacha = function(){
		console.log("gacha!-----" + $scope.gacha_xtimes);
	}

	$scope.gacha_nav = function(){

		$("#monster_view").empty();		

		//add how many?<select>dropdown_menu
		var i=1;
		var option_tag = "";
		do {
			option_tag = option_tag + "<option value=\"" + i + "\">" + i + "</option>"
			i++;
		} while (i<6);	
		var select_tag = "<select ng-model=\"gacha_xtimes\">";
		$("#monster_view").append("how many?" + select_tag + option_tag + "</select>");
		$("#monster_view").append($scope.gacha_xtimes);

		// add gacha<button>
		// $("#monster_view").append("<button ng-click=\"gacha()\" id=\"gacha_button\">gacha</button>");

		//$("#monster_view").append("<button ng-click=\"gacha()\" id=\"gacha_button\">gacha</button>");
		// button.$apply();
		console.log("gacha_nav");
		$compile("<button ng-click=\"gacha()\" id=\"gacha_button\">gacha</button>")($scope).appendTo("#monster_view");

	}

	$scope.roulette_nav = function(){
		$("#monster_view").empty();
		$("#monster_view").append("under construction");
		console.log("roulette_nav");
	}

	$scope.search_nav = function(){
		$("#monster_view").empty();
		$("#monster_view").append("under construction");
		console.log("search_nav");
	}

}


// var headerCtrl = function($scope) {


// }

// var viewCtrl = function($scope) {
	
// }

// var footerCtrl = function($scope) {

// }



