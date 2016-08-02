$(document).ready(function(){

	for (game=1; game<=100; game++){
		if((game % 3 === 0) && (game % 5 === 0)){
			$('body').append('fizzbuzz <br>');	
		}
		else if (game % 3 === 0){
			$('body').append('fizz <br>');	
		}
		else if (game % 3 === 0){	
			$('body').append('buzz <br>');
		}	
		else{
			$('body').append(game + '<br>');
		}
	}
	
});