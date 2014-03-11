
var mainCtrl = function($scope) {

	//setup
	$scope.gacha_xtimes = 1;
	$scope.monsters = monsters;
	$scope.monsters_gacha_hit = [monsters[0]];
	$scope.monsters_egg = "img/null.jpg";
	set_monsters_gacha_hit();	
	set_initial_view(".monster_view_default");	

	function set_initial_view(target){
		$(".monster_view_default").removeClass("monster_view_active");
		$(".monster_view_gacha").removeClass("monster_view_active");
		$(".monster_view_roulette").removeClass("monster_view_active");
		$(".monster_view_search").removeClass("monster_view_active");
		$(".monster_gacha_egg").removeClass("monster_view_active");
		$(target).addClass("monster_view_active");
	}

	// function set_gacha_result_active_fadein(target){
	// 	$(target).removeClass("monster_view_active");
	// 	$(target).removeClass("monster_view_inactive");
	// 	$(target).addClass("monster_view_active");
	// 	$(target).addClass("animated");
	// 	$(target).removeClass("fadeIn");
	// 	$(target).removeClass("fadeOut");
	// 	$(target).addClass("fadeIn");
	// }

	function set_gacha_result_inactive(target){
		$(target).removeClass("monster_view_active");
		$(target).removeClass("monster_view_inactive");
		$(target).addClass("monster_view_inactive");
		$(target).removeClass("animated");
		$(target).removeClass("fadeIn");
		$(target).removeClass("fadeOut");
	}

	// function set_gacha_result_inactive_fadeout(target){
	// 	$(target).removeClass("monster_view_active");
	// 	$(target).removeClass("monster_view_inactive");
	// 	$(target).addClass("monster_view_inactive");
	// 	$(target).addClass("animated");
	// 	$(target).removeClass("fadeIn");
	// 	$(target).removeClass("fadeOut");
	// 	$(target).addClass("fadeIn");
	// }


	$scope.gacha_nav = function(){
		set_initial_view(".monster_view_gacha");	
		set_gacha_result_inactive("#monster_gacha_result");
		console.log("gacha_nav");
	}

	$scope.roulette_nav = function(){
		set_initial_view(".monster_view_roulette");	
		console.log("roulette_nav");
	}

	$scope.search_nav = function(){
		set_initial_view(".monster_view_search");	
		console.log("search_nav");
	}

	$scope.gacha = function(){
		$("#monster_gacha_result").removeClass("monster_view_inactive");
		$(".monster_gacha_img").addClass("monster_view_hidden");
		$(".monster_gacha_profile").addClass("monster_view_hidden");
		// set_gacha_result_active_fadein(".monster_gacha_egg");
		console.log("gacha x" + $scope.gacha_xtimes);
	}

	function lot(){
		while(true){
			var lot = (Math.floor(Math.random()*1250));
			if(lot < monsters.length){
				break;
			}
		}
		return lot;
	}

	function set_egg_by_rare(target){
		var egg_img = "";
		if (target.rare > 4){
			egg_img = "img/egg_5678.png";
		} else if (target.rare > 3) {
			egg_img = "img/egg_4.png";
		} else if (target.rare > 2) {
			egg_img = "img/egg_3.png";
		} else if (target.rare > 1) {
			egg_img = "img/egg_2.png";
		} else {
			egg_img = "img/egg_1.png";
		}
		return egg_img;
	}

	function set_monsters_gacha_hit(){
		var i = 0;
		do {
			$scope.monsters_gacha_hit[i] = monsters[lot()];
			$scope.monsters_gacha_hit[i].egg = set_egg_by_rare($scope.monsters_gacha_hit[i]);
			i++;
		} while(i<10)
	}

	$scope.open_egg = function(){
		$(".monster_gacha_egg").addClass("animated");
		$(".monster_gacha_egg").addClass("fadeOut");
		setTimeout(function(){
			$(".monster_gacha_img").removeClass("monster_view_hidden");
			$(".monster_gacha_img").addClass("animated fadeIn");
			$(".monster_gacha_profile").removeClass("monster_view_hidden");
			$(".monster_gacha_profile").addClass("animated fadeIn");
		}, 2000)
		// set_gacha_result_active_fadein(".monster_gacha_img");

		console.log("oepn egg!");
	}

}


// var headerCtrl = function($scope) {


// }

// var viewCtrl = function($scope) {
	
// }

// var footerCtrl = function($scope) {

// }



function setMonsterVisibility(isVisible){
	if(isVisible){
		//set active
	}else
	{
		//set inactive

	}

}

function  setMonsterListVisbility (isVisible) {
	if(isVisible){
		//set active
	}else
	{
		//set inactive

	}
}

function setMonsterListGachaListVisibility (isVisible) {
	// body...
}

setMonsterListGachaListVisibility(true);

setMonsterListGachaListVisibility(false);
