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

/* 
$( function() {
    $(".dropdown-btn").click(function(){
        $(this).next(".dropdown").toggleClass("show");
        print("Yo")
    })
} );

$( function() {
    $(window).click(function(e) {
        if (e.target.classList.contains(".dropdown-btn")) {
            $(".dropdown").each(function () {
                $(this).hasClass("show") ? $(this).removeClass("show") : print("null");
            })
        }
    })
} ); */
