$('document').ready(function(){
	var board = {
		cells: [["","",""],["","",""],["","",""]]
	};

	var render = function(){
		for (i=0; i<3; i++) {
			for (j=0; j<3; j++){
				var x = i.toString();
				var y = j.toString();
				$('.container').append('<div class="cell" id="r'+x+'c'+y+'"><p>'+board.cells[i[j]]+'</p></div>');
			};
		};
	};
	render();
	
});
