// Random Text V1.0

$(function()
{
	$('[data-random-text="true"]').each(function(i) // Loop all target text items
	{
		var max = parseInt($(this).attr('data-random-text-string-count'));
		var targetID = Math.floor((Math.random()*max)+2);
		$(this).text($(this).attr('data-random-text-string-'+targetID));
	});
});