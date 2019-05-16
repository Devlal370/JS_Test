function outer(){


	function inner(){
		var obj= {
			name:'Taaha',
			location:'BKT',
			phone:92992929
		};
		return obj; 
	}
	// console.log('innernnn>>',inner());

	var innerone = inner();
	return innerone;
  
	
}
console.log('full>>',outer());
var a = outer();
var prop = a.phone;
console.log('Property>>',prop);
