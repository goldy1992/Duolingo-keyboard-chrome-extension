// UPDATED -> NOW WORKS WITH jQuery 1.3.1
$.fn.listHandlers = function(events) {
    return this.each(function(i){
        var elem = this,
            dEvents = $(this).data('events');
        if (!dEvents) {return;}
        $.each(dEvents, function(name, handler){
            if((new RegExp('^(' + (events === '*' ? '.+' : events.replace(',','|').replace(/^on/i,'')) + ')$' ,'i')).test(name)) {
               $.each(handler, function(i,handler){
                   console.log(elem, 'n' + i + ': [' + name + '] : ' + handler );
               });
           }
        });
    });
};


function checkTextBoxExistence()
{
	console.log("duolingo ukranian key mapper is running11");
				
  var inputBox = $('#text-input');
	if (!inputBox.length) return;
	
	//if (inputBox.attr('lang') === 'uk')
	//{

	var currentData = $('#text-input').data('events');
	
	//	console.log(currentData);
		//console.log("prop: " + currentData.propertychange);
					//	$("#text-input").unbind('input propertychange');
					$("#text-input").listHandlers('*');
				$("#text-input").on('input propertychange', function() {
        editText("#text-input");  }); 
				
				console.log("binded ");
	//}		
}


$(document).ready(function(){

	
	MMutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	var observer = new MutationObserver(function(mutations, observer) {
 /* mutations.forEach(function( mutation ) 
	{
    var newNodes = mutation.addedNodes; // DOM NodeList
    if( newNodes !== null ) 
		{ // If there are new nodes added
    	var $nodes = $( newNodes ); // jQuery set
    	$nodes.each(function() {
    		var $node = $( this );
    		if( $node.is("textarea")){
				checkTextBoxExistence();
    		}
    	});
		}	


  });*/
					checkTextBoxExistence();
	});
// configuration of the observer:
var config = { attributes: true, childList: true, subtree: true };

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, config);

});
