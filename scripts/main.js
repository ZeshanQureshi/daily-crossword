function initializeScreen(){

	var crosswordTable = document.getElementById("crossword");
	var crosswordData = initializeCrossword();

	for (var rowCount = 0; rowCount < crosswordData.length ; rowCount++ ) {

		var row = crosswordTable.insertRow(-1);
		var rowData = crosswordData[rowCount];

		for(var columnCount = 0 ; columnCount < rowData.length ; columnCount++){

			var cell = row.insertCell(-1);

			if(rowData[columnCount] != 0){

				var txtID = String('txt' + '_' + rowCount + '_' + columnCount);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1"\
                         style="text-transform: uppercase" ' + 'id="' + txtID + '"\
                         onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			
            } else {

				cell.style.backgroundColor  = "black";
			}
		}
	}
	
    numberWords();
}


function numberWords(){
	document.getElementById("txt_0_0").placeholder = "1";
	document.getElementById("txt_0_7").placeholder = "2";
	document.getElementById("txt_3_4").placeholder = "3";
	document.getElementById("txt_2_1").placeholder = "4";
	document.getElementById("txt_6_1").placeholder = "5";
	document.getElementById("txt_8_7").placeholder = "6";
}

function initializeCrossword(){
    var items = [	['p', 'e', 'r', 's', 'o', 'n', 'i', 'f', 'y', 0],
                    [0, 0, 0, 0, 0, 0, 0, 'a', 0, 0 ],
                    [0, 'o', 0, 0, 0, 0, 0, 'b', 0, 0],
                    [0, 'v', 0, 0, 'r', 'e', 'g', 'r', 'e', 't'],
                    [0, 'e', 0, 0, 0, 0, 0, 'i', 0, 0],
                    [0, 'r', 0, 0, 0, 0, 0, 'c', 0, 0],
                    [0, 'l', 'a', 's', 'a', 'g', 'n', 'a', 0, 0],
                    [0, 'o', 0, 0, 0, 0, 0, 't', 0, 0],
                    [0, 'o', 0, 0, 0, 0, 0, 'e', 'l', 'k'],
                    [0, 'k', 0, 0, 0, 0, 0, 'd', 0, 0],
                ];
    return items;
}
