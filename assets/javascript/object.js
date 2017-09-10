var object1 = {
	"arr" : [1,2,3],
	guess : function () {
	console.log(this.arr[0]);
	}
	
}
function start (callback) {
	console.log("I console first");
	callback();
	setTimeout(function() {
		callback(),
		1000
	})
	console.log("I console third")

}
start(funcction() {
	console.log("I console second");
})
//asychronous gets called last