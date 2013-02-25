 // Activity 3
// VFW
//Troy Stevenson
//main javascript

var form = function(data){
	console.log(data);
};

$(document).ready(function(){
	
	var rbform = $("#recordbootyform");
		rberrorslink = ("#rberrorslink")
	;
	
	rbform.validate({
		invalidHandler: function(form, validator){
			rberrorslink.click();
			for(var key in validator.submited){
				var label = $("label [for^=" + key + ']')
				console.log(label.text());
			};
		},
		submitHandler: function(){
			var data = rbform.serializeArray();
			parseBootyForm(data);
		}
	});
});