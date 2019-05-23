function hello(){

	var country = 'nepal';

	function setCountry(newcountry){
		 country = newcountry;
		 return country;
	}

	function getCountry(){
		return country;
	}

	return {
		set: setCountry,
		get: getCountry

	};

};

var fun = hello();
var getco = fun.get();
var setco = fun.set('Bhutan');
var newgetco = fun.get();

console.log("get data--", getco);
console.log("Set data", setco);
console.log("get new data--", newgetco);