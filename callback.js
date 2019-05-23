function call(cb){
	console.log("Call for Somethin");
	setTimeout(function(){
		console.log("Wait")
		cb('500');
	},5000);
}

call(function(value){
	console.log("From cb",value)
});
console.log('Task 1')
console.log('Task 2')