boxoffice.service('dataservice',function($http){

	var imagval;
	var b=[];

	this.imge=function(val){
		imagval=val;
        
		console.log(val);
	}
	this.newimge=function(){
		return imagval;
	}

	this.details=function(a){
		b=a;
		console.log(b);
	}
	this.confirmdetail=function(){
		return b;
	}

})