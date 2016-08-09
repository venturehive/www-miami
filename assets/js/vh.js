$(document).ready(function(){

	/* ---------- Button loading states setup ---------- */
	$('.vh-loader-form').submit(
			function(){
				$(".vh-loader-btn").button('loading')
	});

	$("form button, form input").click(function() {
	    $("button", $(this).parents("form")).removeClass("vh-loader-btn");
	    $("input", $(this).parents("form")).removeClass("vh-loader-btn");
	    $(this).addClass("vh-loader-btn");
	});

	//$.ajaxSetup({
	//    beforeSend:function(){
	//        $('.vh-loader-btn').button('loading');
	//    },
	//    complete:function(){
	//        $('.vh-loader-btn').button('reset');
	//        $('.vh-loader-btn').removeClass('vh-loader-btn');
	//    }
	//});
	
});

function formatTime(hours, minutes)
{
	if (hours < 10)
		hours = "0" + hours;
	if (minutes < 10)
		minutes = "0" + minutes;
	return hours + ":" + minutes;
}

function formatDate(year, month, date)
{
	if (month < 10)
		month = "0" + month;
	
	if (date < 10) 
		date = "0" + date;
	
	return year + "-" + month + "-" + date;
}

function selectFormat(el)
{
	alert(el);
}