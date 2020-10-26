// How to push code to github: https://www.youtube.com/watch?v=wrb7Gge9yoE

// Form validation. sdfsdfsdfsdfsdfsdf
// document.getElementById's saved into a variable for easier use. 
var elementBaseRate = document.getElementById("base-rate");
var elementBaseRateValidate = document.getElementById("base-rate-validate");
var elementTotalClasses = document.getElementById("total-classes");
var elementTotalClassesValidate = document.getElementById("total-classes-validate");
var elementThisMonthClasses = document.getElementById("this-month-classes");
var elementThisMonthClassesValidate = document.getElementById("this-month-classes-validate");
var elementShortNoticeClasses = document.getElementById("short-notice-classes");
var elementShortNoticeClassesValidate = document.getElementById("short-notice-classes-validate");
var elementTrialNoShowClasses = document.getElementById("trial-no-show-classes");
var elementTrialNoShowClassesValidate = document.getElementById("trial-no-show-classes-validate");
var submitPermitted = {
	submitOne: false,
	submitTwo: false,
	submitThree: false,
	submitFour: false,
	submitFive: false,
};

elementBaseRate.addEventListener('change', function(event){
    event.preventDefault();
	var charInvalid = isNaN(document.getElementById('base-rate').value);
	var element = document.querySelector('#base-rate-validate');
	element.style.color = "black";
	submitPermitted.submitOne = false;
	
	if(parseInt(elementBaseRate.value) < 7 || parseInt(elementBaseRate.value) > 11) {
		element.style.color = "red";
		elementBaseRateValidate.textContent = "Your base rate is invalid. $7 to $11 USD.";
	}else if(charInvalid) {
		element.style.color = "red";
		elementBaseRateValidate.textContent = "Please do not include letters.";
	}else{
		elementBaseRateValidate.textContent = "Valid Input. :)";
		submitPermitted.submitOne = true;
	}
});

elementTotalClasses.addEventListener('change', function(event){
    event.preventDefault();
	var charInvalid = isNaN(document.getElementById('total-classes').value);
	var element = document.querySelector('#total-classes-validate');
	element.style.color = "black";
	submitPermitted.submitTwo = false;
	
	if(charInvalid){
		element.style.color = "red";
		elementTotalClassesValidate.textContent = "Please do not include letters.";
	}else{
		elementTotalClassesValidate.textContent = "Valid input. :)";
		submitPermitted.submitTwo = true;
	}
}); 

elementThisMonthClasses.addEventListener('change', function(event){
    event.preventDefault();
	var charInvalid = isNaN(document.getElementById('this-month-classes').value);
	var element = document.querySelector('#this-month-classes-validate');
	element.style.color = "black";
	submitPermitted.submitThree = false;

	if(charInvalid){
		element.style.color = "red";
		elementThisMonthClassesValidate.textContent = "Please do not include letters.";
	}else if(parseInt(elementThisMonthClasses.value) > parseInt(elementTotalClasses.value)){
		element.style.color = "red";
		elementThisMonthClassesValidate.textContent = "Your number of classes this month cannot be more than your total number of classes.";
	}else if(parseInt(elementThisMonthClasses.value) > 1500){
		element.style.color = "red";
		elementThisMonthClassesValidate.textContent = "It is not possible to have this many classes in a month. Pressing submit may freeze your broswer if you put an absurdly large number here. Proceed with caution mwah hahahahaha!"
	}else{
		elementThisMonthClassesValidate.textContent = "Valid input. :)";
		submitPermitted.submitThree = true;
	}
}); 

elementShortNoticeClasses.addEventListener('change', function(event){
    event.preventDefault();
	var charInvalid = isNaN(document.getElementById('short-notice-classes').value);
	var element = document.querySelector('#short-notice-classes-validate');
	element.style.color = "black";
	var shortNoticePlusTrialClasses = parseInt(elementTrialNoShowClasses.value) + parseInt(elementShortNoticeClasses.value);
	submitPermitted.submitFour = false;
	
	if(charInvalid){
		element.style.color = "red";
		elementShortNoticeClassesValidate.textContent = "Please do not include letters.";
	}else if(parseInt(elementShortNoticeClasses.value) > parseInt(elementTotalClasses.value)){
		element.style.color = "red";
		elementShortNoticeClassesValidate.textContent = "Your number of short notice classes this month cannot be more than your lifetime total number of classes.";
	}else if(parseInt(elementShortNoticeClasses.value) > parseInt(elementThisMonthClasses.value)){
		element.style.color = "red";
		elementShortNoticeClassesValidate.textContent = "Your number of short notice classes this month cannot be more than your total number of classes this month.";
	}else if(shortNoticePlusTrialClasses > parseInt(elementThisMonthClasses.value)){
		element.style.color = "red";
		elementShortNoticeClassesValidate.textContent = "Your number of trial no show classes + the number of short notice classes cannot be greater than the total classes this month.";
	}else{
		elementShortNoticeClassesValidate.textContent = "Valid input. :)";
		submitPermitted.submitFour = true;
	}
}); 

elementTrialNoShowClasses.addEventListener('change', function(event){
    event.preventDefault();
	var charInvalid = isNaN(document.getElementById('trial-no-show-classes').value);
	var element = document.querySelector('#trial-no-show-classes-validate');
	element.style.color = "black";
	var shortNoticePlusTrialClasses = parseInt(elementTrialNoShowClasses.value) + parseInt(elementShortNoticeClasses.value);
	submitPermitted.submitFive = false;
	
	if(charInvalid){
		element.style.color = "red";
		elementTrialNoShowClassesValidate.textContent = "Please do not include letters.";
	}else if(parseInt(elementTrialNoShowClasses.value) > parseInt(elementTotalClasses.value)){
		element.style.color = "red";
		elementTrialNoShowClassesValidate.textContent = "Your number of trial no show classes this month cannot be more than your lifetime total number of classes.";
	}else if(parseInt(elementTrialNoShowClasses.value) > parseInt(elementThisMonthClasses.value)){
		element.style.color = "red";
		elementTrialNoShowClassesValidate.textContent = "Your number of trial no show classes this month cannot be more than your total number of classes this month.";
	}else if(shortNoticePlusTrialClasses > parseInt(elementThisMonthClasses.value)){
		element.style.color = "red";
		elementTrialNoShowClassesValidate.textContent = "Your number of trial no show classes + the number of short notice classes cannot be greater than the total classes this month.";
	}else{
		elementTrialNoShowClassesValidate.textContent = "Valid input. :)";
		submitPermitted.submitFive = true;
	}
}); 

// Runs salaryCalc() when the form is submitted, as long as it passes the validation.
document.getElementById('our-form').addEventListener('submit', function(event){
	event.preventDefault();
	var shouldBeSubmitted = true;
	Object.entries(submitPermitted).forEach(function(item){
		console.log(item);
		if(!item[1]){
			shouldBeSubmitted = false;
		}
	})
	if(shouldBeSubmitted){
		salaryCalc();
	 }else{
		 console.log("Try again.");
	 }
});

function salaryCalc() {
	
/* These salaryCalc() local variables obtain user info. */
var baseRate = document.getElementById('base-rate').value;
var totalClasses = document.getElementById('total-classes').value;
var thisMonthClasses = document.getElementById('this-month-classes').value;
var shortNoticeClasses = document.getElementById('short-notice-classes').value;
var trialNoShowClasses = document.getElementById('trial-no-show-classes').value;
var classTier = 0;

console.log("Your base rate is: " + baseRate, typeof(baseRate));
console.log("Your Total Classes: " + totalClasses, typeof(baseRate));
console.log("This months total classes: " + thisMonthClasses, typeof(baseRate));
	
/* These salaryCalc() local variables hold values of the total payment amounts for base pay, bonuses and total pay 'base + bonus'.
VIPKID Pay Scale: https://www.teacherchelsey.com/vipkid-pay-updated/*/
var totalBase = 0; 
var totalAdjustedBase = 0;
var totalNewBonus = 0;
var totalNewPay = 0;
	
/* These salaryCalc() local vars are to calculate the OLD incentive pay */
var oldPartInc = 0;
var oldFinClassesInc = 0;
var totalOldBonus = 0;
var totalOldPay = 0;
	
/* To calculate the total amount for the trial student no show classes. */
var totalTrialNoShowClasses = 0;

/* These vars are the amount of incentive per class. Ex: $0.8, $1.2 etc.
partIncAmt0_20 and partIncAmt21_40 are hard coded because they the same in all class tiers. The rest are calculated in partAmtCalc().*/
var partIncAmt0_20 = 0.8;
var partIncAmt21_40 = 1.2;
var partIncAmt41_60 = 0;
var partIncAmt61_90 = 0;
var partIncAmt91_130 = 0;
var partIncAmt131_180 = 0;
var partIncAmtOver180 = 0;

/* These global vars are for the total amount of incentives per class taught in each section of pay scale. You add them all together to get the total participation. */
var partIncTotal0_20 = 0;
var partIncTotal21_40 = 0;
var partIncTotal41_60 = 0;
var partIncTotal61_90 = 0;
var partIncTotal91_130 = 0;
var partIncTotal131_180 = 0;
var partIncTotalOver180 = 0;
	
function classTierCalc() {
		
/* Calculates the class tier.*/
	if(totalClasses < 80 && totalClasses > 0) {
		classTier = 1;
	} else if(totalClasses >= 80 && totalClasses < 200) {
		classTier = 2;
	} else if(totalClasses >= 200 && totalClasses < 400) {
		classTier = 3;
	} else if(totalClasses >= 400 && totalClasses < 800) {
		classTier = 4;
	} else if(totalClasses >= 800 && totalClasses < 1500) {
		classTier = 5;
	} else if(totalClasses >= 1500 && totalClasses < 2500) {
		classTier = 6;
	} else if(totalClasses >= 2500 && totalClasses < 4500) {
		classTier = 7;
	} else if(totalClasses >= 4500 && totalClasses < 7000) {
		classTier = 8;
	} else if(totalClasses >= 7000 && totalClasses < 10000) {
		classTier = 9;
	} else if(totalClasses >= 10000) {
		classTier = 10;
	} else {
		console.log("Function \"classTierCalc\" says: Invalid input. Please try again.")
	}
	console.log("Your class tier is: Tier " + classTier);
}
	
function partAmtCalc() {
	switch(classTier) {
		case 1: 
			partIncAmt41_60 = 1.6;
			partIncAmt61_90 = 1.7;
			partIncAmt91_130 = 1.9;
			partIncAmt131_180 = 2.0;
			partIncAmtOver180 = 2.1;
		break;
		case 2: 
			partIncAmt41_60 = 1.6;
			partIncAmt61_90 = 1.7;
			partIncAmt91_130 = 1.9;
			partIncAmt131_180 = 2.1;
			partIncAmtOver180 = 2.3;
		break;
		case 3: 
			partIncAmt41_60 = 1.6;
			partIncAmt61_90 = 1.7;
			partIncAmt91_130 = 2.0;
			partIncAmt131_180 = 2.2;
			partIncAmtOver180 = 2.5;
		break;	
		case 4: 
			partIncAmt41_60 = 1.6;
			partIncAmt61_90 = 1.8;
			partIncAmt91_130 = 2.1;
			partIncAmt131_180 = 2.3;
			partIncAmtOver180 = 2.6;
		break;	
		case 5: 
			partIncAmt41_60 = 1.6;
			partIncAmt61_90 = 1.8;
			partIncAmt91_130 = 2.2;
			partIncAmt131_180 = 2.4;
			partIncAmtOver180 = 2.7;
		break;	
		case 6: 
			partIncAmt41_60 = 1.7;
			partIncAmt61_90 = 1.8;
			partIncAmt91_130 = 2.3;
			partIncAmt131_180 = 2.5;
			partIncAmtOver180 = 2.8;
		break;	
		case 7: 
			partIncAmt41_60 = 1.7;
			partIncAmt61_90 = 1.9;
			partIncAmt91_130 = 2.4;
			partIncAmt131_180 = 2.6;
			partIncAmtOver180 = 2.9;
		break;	
		case 8: 
			partIncAmt41_60 = 1.7;
			partIncAmt61_90 = 1.9;
			partIncAmt91_130 = 2.4;
			partIncAmt131_180 = 2.7;
			partIncAmtOver180 = 3.0;
		break;	
		case 9: 
			partIncAmt41_60 = 1.7;
			partIncAmt61_90 = 1.9;
			partIncAmt91_130 = 2.5;
			partIncAmt131_180 = 2.8;
			partIncAmtOver180 = 3.1;
		break;
		case 10: 
			partIncAmt41_60 = 1.7;
			partIncAmt61_90 = 1.9;
			partIncAmt91_130 = 2.5;
			partIncAmt131_180 = 2.9;
			partIncAmtOver180 = 3.2;
	}
	console.log("Your NEW incentive pay 0-20 classes: " + partIncAmt0_20, "21-40 classes: " + partIncAmt21_40, "41-60 classes: " + partIncAmt41_60, "61-90 classes: " + partIncAmt61_90, "91-130 classes: " + partIncAmt91_130, "131-190 classes: " + partIncAmt131_180, "Over 180 classes: " +partIncAmtOver180);
}

function basePayCalc() {
	totalTrialNoShowClasses = trialNoShowClasses * (baseRate/2);
	//Calculate number of short notice classes. $2 per sn classes. 
	shortNoticeClasses *= 2;
	//Calculate base pay. 
	totalBase = baseRate * thisMonthClasses;
	console.log("Total Base: " + totalBase);
	totalAdjustedBase = totalBase + shortNoticeClasses - totalTrialNoShowClasses;
	console.log("Total Adjusted Base: " + totalAdjustedBase);
}

function totalNewPayCalc() {
	for(var i = 0; i < thisMonthClasses; i++) {
		if(i < 21) {
			partIncTotal0_20 += partIncAmt0_20;
			console.log(partIncTotal0_20);
		} else if(i >= 21 && i < 41) {
			partIncTotal21_40 += partIncAmt21_40;
			console.log(partIncTotal21_40);
		} else if(i >= 41 && i < 61) {
			partIncTotal41_60 += partIncAmt41_60;
			console.log(partIncTotal41_60);
		} else if(i >= 61 && i < 91) {
			partIncTotal61_90 += partIncAmt61_90;
			console.log(partIncTotal61_90);
		} else if(i >= 91 && i < 131) {
			partIncTotal91_130 += partIncAmt91_130;
			console.log(partIncTotal91_130);
		} else if(i >= 131 && i < 181) {
			partIncTotal131_180 += partIncAmt131_180;
			console.log(partIncTotal131_180);
		} else {
			partIncTotalOver180 += partIncAmtOver180;
			console.log(partIncTotalOver180);
		} 
	}
	
	totalNewBonus = partIncTotal0_20 + partIncTotal21_40 + partIncTotal41_60 + partIncTotal61_90 + partIncTotal91_130 + partIncTotal131_180 + partIncTotalOver180
	
	totalNewPay = totalAdjustedBase + totalNewBonus;
	
	console.log("Your total base rate pay WITHOUT bonuses is: $" + totalBase);
	console.log("Your NEW incentive totals: " + partIncTotal0_20, partIncTotal21_40, partIncTotal41_60, partIncTotal61_90, partIncTotal91_130, partIncTotal131_180, partIncTotalOver180)
	console.log("Your NEW total bonus is: $" + totalNewBonus);
	console.log("Your NEW total pay is: $" + totalNewPay);
}

function totalOldPayCalc() {
	/* Assign incentive amounts according to the OLD pay scale. */
	if (thisMonthClasses < 30) {
		oldPartInc = 0;
		oldFinClassesInc = 0;
	} else if (thisMonthClasses >= 30 && thisMonthClasses < 45) {
		oldPartInc = 0.5;
		oldFinClassesInc = 0.5;		
	} else {
		oldPartInc = 1;
		oldFinClassesInc = 1;		
	}
	
	/* Add participation and finished classes incentives to the old bonus total. */
	for(var i = 0; i < thisMonthClasses; i++) {
		totalOldBonus += (oldPartInc + oldFinClassesInc);
	}
	totalOldPay = totalAdjustedBase + totalOldBonus;
	console.log("---------------------------------------")
	console.log("Your OLD total bonus is: $" + totalOldBonus);
	console.log("Your total pay with the OLD paystructure: $" + totalOldPay);
}

function comparePayScales() {
	var payDifference;
	
	if(totalNewPay > totalOldPay) {
		payDifference = totalNewPay - totalOldPay;
		console.log("Your total new pay is GREATER THAN your total old pay by $" + payDifference + " YAY :)")
		document.getElementById("pay-difference").textContent = "Your total new pay is greater than your total old pay by $" + Math.round(payDifference) + ".";
		
	} else if(totalNewPay < totalOldPay) {
		payDifference = totalOldPay - totalNewPay;
		console.log("Your total new pay is LESS THAN your total old pay by $" + payDifference + " DAMN! :(")
		document.getElementById("pay-difference").textContent = "Your total new pay is less than your total old pay by $" + Math.round(payDifference) + ".";
	} else {
		console.log("Your old and new pay are equal.");	
		document.getElementById("pay-difference").textContent = "Your old and new pay are equal.";
	}
}
	
function output() {
	document.getElementById("base-rate-output").innerText = baseRate;
	document.getElementById("total-classes-output").innerText = totalClasses;
	document.getElementById("this-month-classes-output").innerText = thisMonthClasses;
	document.getElementById("short-notice-classes-output").innerText = shortNoticeClasses;
	document.getElementById("trial-no-show-classes-output").innerText = trialNoShowClasses;
	document.getElementById("class-tier").innerText = classTier;
	document.getElementById("total-base-pay").innerText = Math.round(totalBase);	
	document.getElementById("total-adjuted-base-pay").innerText = Math.round(totalAdjustedBase);
	document.getElementById("total-short-notice-classes-pay").innerText = Math.round(shortNoticeClasses);
	document.getElementById("total-trial-SNS-classes-pay").innerText = Math.round(trialNoShowClasses) + " classes. Total base pay amount = $" + Math.round(totalTrialNoShowClasses) + " instead of $" + Math.round(trialNoShowClasses * baseRate) + ".";
	document.getElementById("old-incentive-pay").innerText = Math.round(totalOldBonus);
	document.getElementById("total-old-pay").innerText = Math.round(totalOldPay);
	document.getElementById("new-incentive-pay").innerText = Math.round(totalNewBonus);
	document.getElementById("total-new-pay").innerText = Math.round(totalNewPay);
}

classTierCalc();
basePayCalc();
partAmtCalc();
totalNewPayCalc();
totalOldPayCalc();
comparePayScales();
output();
}


