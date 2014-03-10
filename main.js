
var mainCtrl = function($scope) {

	//setup
	$scope.gacha_xtimes = 1;
	$scope.monsters = monsters;
	set_all_hidden(".monster_view_default");	

	console.log("gacha!" + $scope.gacha_xtimes);
	$scope.gacha = function(){
		console.log("gacha!-----" + $scope.gacha_xtimes);
	}

	function set_all_hidden(target){
		$(".monster_view_default").removeClass("monster_view_active");
		$(".monster_view_gacha").removeClass("monster_view_active");
		$(".monster_view_roulette").removeClass("monster_view_active");
		$(".monster_view_search").removeClass("monster_view_active");
		$(target).addClass("monster_view_active");
	}

	$scope.gacha_nav = function(){
		set_all_hidden(".monster_view_gacha");	
		console.log("gacha_nav");
	}

	$scope.roulette_nav = function(){
		set_all_hidden(".monster_view_roulette");	
		console.log("roulette_nav");
	}

	$scope.search_nav = function(){
		set_all_hidden(".monster_view_search");	
		console.log("search_nav");
	}

}


// var headerCtrl = function($scope) {


// }

// var viewCtrl = function($scope) {
	
// }

// var footerCtrl = function($scope) {

// }



