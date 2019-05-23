var welcome = function(name){

	var greet = 'welcome';

	var sayhi = function (location){
		return greet + ' ' + 'to' + ' ' +location + ' ' + name;
	}

	var a = sayhi('Bhaktapur');
	return a;

}

console.log(welcome('Boy'));



var muliply = function (a){
	var mux = function (b){
		return a * b;
	}
	return mux;
}
console.log(muliply(200)(10));