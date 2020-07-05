/*Goto MDN and search for Standerd Built in objects*/
/*MDN = Mozzilla Developer Network*/

let mySymbol = Symbol();

/*Object Person*/

let person = {
	name : "Viren",
	age : 20,
	[mySymbol]: 'SecretInformation',
	
	/*Method*/

	showInfo: function()
	{
		showMassage("Made by " + this.name + ". My age is " + this.age + " years.");
	}
};

/*
showMassage(person.name);
showMassage(person.age);
showMassage(person.name);

person.showInfo();  // Calling the method showInfo();

showMassage(typeof person.showInfo);

let now = new Date(); // new date object...
showMassage( now.toDateString() ); // convert date into string to pass in function showMassage(); 

showMassage( Math.abs(-205) ); // to generate absolute value of a number

let string = 'Hello';
showMassage( string.charAt(2) );
*/

showMassage('Calculator');