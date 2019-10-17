console.log('html and js');

document.getElementById('submit').addEventListener('click', function(){
	console.log(document.getElementById('name').value,document.getElementById('address').value);
  document.getElementById('formData').innerHTML += '<br>' + document.getElementById('name').value ;
  document.getElementById('formData').innerHTML += '<br>' +  document.getElementById('address').value + '<br> ';
});

document.getElementById('formData').innerHTML += '<br> <button class="myButton"> Names </button> <button class="myButton">ProjectA </button>' + ' <button class="myButton">  ProjectB </button> <button class="myButton">  ProjectC  </button> <button class="myButton">  Average </button>';

var n = parseInt(prompt('Enter the number of employees please'));

var names = [];

var projectA = [];
var projectB = [];
var projectC = [];

var averagePercentage = [];


document.getElementById('saveEmployeeDetails').addEventListener('click', function(){
console.log(names.length);
  if (names.length < n) {
    	var ename = document.getElementById('ename').value;
			var projA = parseInt(document.getElementById('projectA').value);
			var projB = parseInt(document.getElementById('projectB').value);
			var projC = parseInt(document.getElementById('projectC').value);
			console.log(ename, projA, projB, projC);
			console.log(names.includes(ename), projectA.includes(projA) , projectB.includes(projB) , projectC.includes(projC));
  		if ((names.includes(ename) && projectA.includes(projA) && projectB.includes(projB) && projectC.includes(projC)) === false){

				names.push(ename);
		    projectA.push(projA);
		    projectB.push(projB);
		    projectC.push(projC);

		    var average = ((projA + projB + projC)/3).toFixed(2);
		    averagePercentage.push(average);
		    document.getElementById('average').value = average;
		    	console.log(names, projectA, projectB, projectC, averagePercentage, average);
					document.getElementById('formData').innerHTML += '<br> <button class="myButton extra">' + ename + '</button><button class="myButton">' +  projA + '</button> <button class="myButton extra">' + projB + '</button><button class="myButton extra">' + projC 	+ '</button><button class="myButton">' + average +'</button>';
				}
		} else {
		    alert('Sorry, more employees details cannot be saved');
		}
});

  document.getElementById('enterEmployeeDetails').addEventListener('click', function(){

  document.getElementById('ename').value = " ";


  document.getElementById('projectA').value = " ";


  document.getElementById('projectB').value = " ";


  document.getElementById('projectC').value = " ";

	document.getElementById('average').value = " ";
});
