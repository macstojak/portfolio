    $(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $.each(["#section1", "#section21", "#section22", "#section23", "#section24", "#section3", "#section4"], function(i, value){
            
            var bottom_of_object =  $(value).offset().top +  $(value).outerHeight() -1000;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(value).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    })

    