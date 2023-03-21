// No Homework Policy
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkHomeworkDay() {
	let today = new Date();
	let currentDay = daysOfWeek[today.getDay()];

	if (currentDay === 'Monday' || currentDay === 'Wednesday' || currentDay === 'Friday' || currentDay === 'Saturday' || currentDay === 'Sunday') {
		return "Enjoy your day off! No homework due today.";
	} else {
		return "Sorry, homework is due today. Better get to work!";
	}
}

// More Allowed Absences
let allowedAbsences = 10;

function checkAbsences(numAbsences) {
	if (numAbsences <= allowedAbsences) {
		return "You still have " + (allowedAbsences - numAbsences) + " absences remaining.";
	} else {
		return "Sorry, you've exceeded your allowed absences. Please speak with your professor.";
	}
}

// Free Ice Cream
function offerIceCream() {
	let flavor = prompt("What flavor of ice cream would you like?");
	alert("Enjoy your free " + flavor + " ice cream!");
}

// Replace School Lunch with McDonalds
function replaceLunch() {
	let order = prompt("What would you like to order from McDonald's?");
	alert("Your " + order + " from McDonald's is on its way!");
}

// Vending Machines and Water Bubblers Replaced with Vodka
function replaceVendingMachines() {
	let confirmReplace = confirm("Are you sure you want to replace the vending machines and water bubblers with vodka dispensers?");

	if (confirmReplace) {
		alert("Okay, it's done! Enjoy responsibly.");
	} else {
		alert("Maybe next time!");
	}
}
