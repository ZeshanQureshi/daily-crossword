let wordSelector;
let crosswordData;

function initializeScreen() {

	let crosswordTable = document.getElementById("crossword");

	crosswordData = initializeCrossword();

	for (let rowCount = 0; rowCount < crosswordData.length ; rowCount++ ) {

		let row = crosswordTable.insertRow(-1);

		let rowData = crosswordData[rowCount];

		for (let columnCount = 0 ; columnCount < rowData.length ; columnCount++) {

			let cell = row.insertCell(-1);

			if (rowData[columnCount] != 0) {

				let textRec = String('text' + '_' + rowCount + '_' + columnCount);

				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1"\
                         style="text-transform: uppercase" ' + 'id="' + textRec + '"\
                         onfocus="textInputFocus(' + "'" + textRec + "'"+ ')">';
			
            } else {

				cell.style.backgroundColor  = "black";
			}
		}
	}
	
    numberWords();
}

function selectText(textRec) {
	
	wordSelector = textRec;
}

function checkLetters() {
	
	for (let rowCount = 0 ; rowCount < crosswordData.length ; rowCount++) {

		let rowInfo = crosswordData[rowCount];

		for (let columnCount = 0 ; columnCount < rowInfo.length ; columnCount++) {

			if (rowInfo[columnCount] != 0 && rowInfo[columnCount] != null) {
				
				let selectTextData = document.getElementById('text' + '_' + rowCount + '_' + columnCount);

				if (selectTextData.value != 0) {
					
					if (selectTextData.value != crosswordData[rowCount][columnCount]) {
					
					selectTextData.style.backgroundColor = "#f77a7a";

					} else {

						selectTextData.style.backgroundColor = "lightgreen";

					}

				}

			}

		}

	}
	
	setTimeout(returnColor, 3000);

}

function clearScreen() {
	
	for (let rowCount = 0 ; rowCount < crosswordData.length ; rowCount++) {

		for (let columnCount = 0; columnCount < crosswordData.length ; columnCount++) {
			
			let selectTextData = document.getElementById('text' + '_' + rowCount + '_' + columnCount);

			selectTextData.value = null;
		}
	}
}

function returnColor() {
	
	for (let rowInc = 0 ; rowInc < crosswordData.length ; rowInc++) {
		
		let rowInfo = crosswordData[rowInc];
		
		for (let columnInc = 0 ; columnInc < crosswordData.length ; columnInc++) {

			document.getElementById("text" + "_" + rowInc + "_" + columnInc).style.backgroundColor = "white";

		}

	}
}

function solveLetter() {

}

function numberWords() {
	
	document.getElementById("text_0_0").placeholder = "1";
	document.getElementById("text_0_7").placeholder = "2";
	document.getElementById("text_3_4").placeholder = "3";
	document.getElementById("text_2_1").placeholder = "4";
	document.getElementById("text_6_1").placeholder = "5";
	document.getElementById("text_8_7").placeholder = "6";
}

function initializeCrossword() {
    
	let items = [	['p', 'e', 'r', 's', 'o', 'n', 'i', 'f', 'y', 0],
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
