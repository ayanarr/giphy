// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var searchTerm = $("input").val();
    var index =Math.floor((Math.random() * 28) );
    function randomInt(max){
    }
    $.ajax({
        url:  "https://api.giphy.com/v1/gifs/search?q="+searchTerm+"&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
       success: function(response) {
       $(".gallery").html("<img src=" +response.data[index].images.fixed_width.url+ ">")
    }
    
    })
       });