var welcome = function(name){

	var greet = 'welcome';

	var sayhi = function (location){
		return greet + ' ' + 'to' + ' ' +location + ' ' + name;
	}

	var a = sayhi('Bhaktapur');
	return a;

}

console.log(welcome('Boy'));