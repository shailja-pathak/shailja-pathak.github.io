var submitButton = document.getElementById('submit');
var one = [];

submitButton.addEventListener('click', function (event){
	event.preventDefault ();
showTable();
});

document.getElementById('enterNumber').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  event.preventDefault();
  showTable ();
  }
});

function oneToTen (x, y){
for (var i = x; i<=x*10; i+=x) {
	one.push(i);
}
return one[y];
};


function showTable (){

var num = Number(document.getElementById('enterNumber').value);

document.getElementById('header').textContent = oneToTen(num, 0) + ' Times Table';
document.getElementById('timesOne').textContent = oneToTen(num, 0) + ' x 1 = '+ oneToTen(num,0);
document.getElementById('timesTwo').textContent = oneToTen(num, 0) + ' x 2 = '+ oneToTen(num, 1);
document.getElementById('timesThree').textContent = oneToTen(num, 0) + ' x 3 = '+ oneToTen(num, 2);
document.getElementById('timesFour').textContent = oneToTen(num, 0) + ' x 4 = '+ oneToTen(num, 3);
document.getElementById('timesFive').textContent = oneToTen(num, 0) + ' x 5 = '+ oneToTen(num,4);
document.getElementById('timesSix').textContent = oneToTen(num, 0) + ' x 6 = '+ oneToTen(num,5);
document.getElementById('timesSeven').textContent = oneToTen(num, 0) + ' x 7 = '+ oneToTen(num,6);
document.getElementById('timesEight').textContent = oneToTen(num, 0) + ' x 8 = '+ oneToTen(num,7);
document.getElementById('timesNine').textContent = oneToTen(num, 0) + ' x 9 = '+ oneToTen(num,8);
document.getElementById('timesTen').textContent = oneToTen(num, 0) + ' x 10 = '+ oneToTen(num,9);

document.getElementById('table').style.display = 'block';
document.getElementById('reset').style.display = 'inline-block';
};
