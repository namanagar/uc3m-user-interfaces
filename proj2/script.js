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

