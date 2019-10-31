$( function() {
    $( "ul.drop" ).sortable({
      connectWith: "ul"
    });
 
    $( "#list1, #list2, #list3" ).disableSelection();
  } );


$( function() {
    $( "div.drop" ).sortable({
      connectWith: "div"
    });
 
    $( "#biglist1, #biglist2, #biglist3" ).disableSelection();
  } );

$( function() {
    $(".like-btn").click(function(){
        $(this).toggleClass("liked");
    })
} );


$( function() {
    $(".close-btn").click(function(){
        $(this).closest(".card").fadeOut();
    })
} );

$(document).ready(function() {
    if (document.cookie.indexOf('loggedIn') != -1) {
        $("#options-logged-out").toggleClass("show");
        $("#options-logged-in").toggleClass("show");
        $("#username").text($.cookie('username'));
    }
});
