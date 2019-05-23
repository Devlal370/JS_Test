function callForNote(note, callback){
	console.log('Asked Friend for Note')
	setTimeout(function(){
		console.log('Got Reply from Friend for Note')
		callback({
			
			PDF_file: note
		})
	},1000);
}

function printNote(note,cb){
	console.log('Sent for Printing')
	setTimeout(function(){
		console.log('Print completed')
		cb({
			print: note
		})
	},3000);
}

function entertain(cb){
	setTimeout(function(){
		cb('Done')
	},2000)

}
console.log('Start preparation')

callForNote('JAVA',function(result){
	console.log('called for note>>',result)

	printNote('JAVA',function(result){
	console.log('Got Replied for Print>>', result)
	console.log("All Preparaton done for exam")
		});

	entertain(function(result){
		console.log('Entertainemtn is >>',result)
	});

	console.log('Printing is going on')

})

console.log('DOne Cleaning ')
console.log('Done Washing')

