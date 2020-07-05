
function showMassage(massage)
{
	document.getElementById('header').textContent = massage; // textContent or innerHTML
}

let a = document.getElementById('header');

a.style.color = "White";
a.style.fontWeight = '100';

let button = document.getElementById('three');

/*Styling Button Using Javascript*/

button.style.height = "80px";
button.style.width = "200px";
button.style.marginBottom = "10px";
button.style.fontWeight = "600";
button.style.fontSize = "18px";

button.addEventListener('click',function(){

			const a = document.getElementById('show');

			if(a.classList.contains('one'))
			{
				a.classList.remove('one');
				document.getElementById('three').innerHTML = "Close Calculator";
			}
			else
			{
				a.classList.add('one');
				document.getElementById('three').innerHTML = "Show Calculator";
			}
		}

	);