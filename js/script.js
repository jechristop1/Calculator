var buttonval, operatorVal, numberVal, mathEquation;
var buttons = document.getElementsByTagName('button');
var calcResults = document.getElementById('calcResults');


calcResults.innerHTML = "";

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', getButtonVal);
};

function getButtonVal(e){
	buttonval = e.currentTarget.innerHTML;
		if(buttonval === "="){
			calcSubmit();
		}else if(buttonval === "C"){
			clearResults();
		}else if(buttonval==="+/-"){
			calcResults.innerHTML *= -1;
		}else if(buttonval==="%"){
			calcResults.innerHTML /= 100;
		}else{
			calcResults.innerHTML += buttonval;			
		}

		if(calcResults.innerHTML === "undefined" || calcResults.innerHTML === "NaN"){
			clearResults();
		}


};

function calcSubmit(){
	mathEquation = calcResults.innerHTML;
	evalEquation = eval(mathEquation);
	calcResults.innerHTML = evalEquation;
};

function clearResults(){
	calcResults.innerHTML = "";
};
