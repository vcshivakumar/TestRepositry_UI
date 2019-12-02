/* Enable Button*/

$(document).on('click',function(){
	$('.nav-contenttab').collapse('hide');
});

function liveSearch(val) {
	var len = val.value.length;
  if(len < 2) {
  	$('.search-box').removeClass('search-active');
  } else if (len == 2) {
		$('.search-box').addClass('search-active');
    $('.search-results').html('');
  } else {
  	$('.search-results').html('<li role="tab" tab-index="0" aria-selected="true"><img class="pull-left" src="images/Sapling-icon.png" alt=""/><a href="sapling.html"><h3 class="h-size4">Sapling Learning</h3></a><p class="small">Get to the top of class.</p></li>'+
	'<li role="tab" tab-index="0" ><img class="pull-left" src="http://static.bfwpub.com/BFWCatalog/Complete/Jackets/high_res/9781464199493.jpg" alt=""/><a href="product.html"><h3 class="h-size4">Product Title Here</h3></a><p class="small">Second Edition<span class="specs-divider" aria-hidden="true"> | </span>Deborah Licht<span class="specs-divider" aria-hidden="true"> | </span>©2017</p></li>'+
        '<li role="tab" tab-index="0"><img class="pull-left" src="http://static.bfwpub.com/BFWCatalog/Complete/Jackets/high_res/9781319016371.jpg" alt=""/><a href="product.html"><h3 class="h-size4">Product Title Here</h3></a><p class="small">First Edition<span class="specs-divider" aria-hidden="true"> | </span>Deborah Licht<span class="specs-divider" aria-hidden="true"> | </span>©2015</p></li>'+
        '<li role="tab" tab-index="0"><a href="list.html" class="btn-primary btn-justified btn-large btn">See All Results</a></li>');
  }
}

$(document).ready(function(){
  $(".search-box").click(function(e){
    e.stopPropagation();
  });

	/*
  $('.search-box').click(function(){
    // close other instances
    $('.search-active').removeClass('search-active');

    // open new instance
    $(this).addClass('search-active');
  })
  */

  // close dropdown if click outside
  $(document).click(function(){
    $('.search-active').removeClass('search-active');
  });
});


$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".expand-plus").removeClass("expand-plus").addClass("expand-minus");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".expand-minus").removeClass("expand-minus").addClass("expand-plus");
});


$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".expand-plus-caret-down").removeClass("expand-plus-caret-down").addClass("expand-minus-caret-up");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".expand-minus-caret-up").removeClass("expand-minus-caret-up").addClass("expand-plus-caret-down");
});

$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".expand-plus-white").removeClass("expand-plus-white").addClass("expand-minus-white");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".expand-minus-white").removeClass("expand-minus-white").addClass("expand-plus-white");
});

;( function( $, window, document, undefined )
{
    'use strict';
 
    var s = document.body || document.documentElement, s = s.style;
    if( s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '' ) return true;
 
    var $list       = $( '.list' ),
        $items      = $list.find( '.list__item' ),
        setHeights  = function()
        {
            $items.css( 'height', 'auto' );
 
            var perRow = Math.floor( $list.width() / $items.width() );
            if( perRow == null || perRow < 2 ) return true;
 
            for( var i = 0, j = $items.length; i < j; i += perRow )
            {
                var maxHeight   = 0,
                    $row        = $items.slice( i, i + perRow );
 
                $row.each( function()
                {
                    var itemHeight = parseInt( $( this ).outerHeight() );
                    if ( itemHeight > maxHeight ) maxHeight = itemHeight;
                });
                $row.css( 'height', maxHeight );
            }
        };
 
    setHeights();
    $( window ).on( 'resize', setHeights );
    $list.find( 'img' ).on( 'load', setHeights );
 
})( jQuery, window, document );


$('#purchase1').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase2').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase3').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase4').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase5').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase6').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase7').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase8').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase9').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase10').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase11').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase12').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase13').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase14').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#purchase15').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent1').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent2').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent3').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent4').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent5').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent6').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent7').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent8').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent9').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#rent10').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource1').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource2').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource3').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource4').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource5').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource6').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource7').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource8').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource9').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$('#resource10').on('click', function(){
  $(this).parent().find('a').trigger('click')
});

$(function() {
  
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

  
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}
 

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

/*========================================
=            NAV TOGGLE FUNCTIONS            =
========================================*/

$(document).ready(function () {    

    $(document).on("click", ".navbar-toggle", function () {
        
        // Select SignIn//Register selected as default.
        if ($(".navbar-toggle").attr("aria-expanded") == "true") {
            $(".navbar-collapse ul li a")[0].focus(); 
        }
        else {
            $(".navbar-toggle").focus();
        }
    });
});


/*========================================
=            PRODUCT PURCHASE FUNCTIONS       =
========================================*/

$(document).ready(function () {

    $(document).on("click", ".purchase-cb-addon", function () {

        //$(".purchase-cb-addon").attr("aria-checked", "false");

        if ($(this).is(":checked") == true) {
            $(this).attr("aria-checked", "true");
        }
        else {
            $(this).attr("aria-checked", "false");
        }
    });
	
	$(document).on("click", ".purchase-type-link", function () {

		// Disable All
        $(".purchase-type-link").attr("aria-selected", "false");

        $(this).attr("aria-selected", "true");
    });
	
	$(document).on("click", ".purchase-contenttype-link", function () {

		// Disable All
        $(".purchase-contenttype-link").attr("aria-selected", "false");

        $(this).attr("aria-selected", "true");
    });
});

/*========================================
=            LIST PAGE FUNCTIONS            =
========================================*/

$(document).ready(function () {    
	
    $(document).on("click", ".list-filter-toggle", function () {
        
        // Select SignIn//Register selected as default.
        if ($(".list-filter-toggle").attr("aria-expanded") == "true") {
            $("#collapseOne1 select")[0].focus(); 
        }
        else {
            $(".list-filter-toggle").focus();
        }
    });
	
	$(document).on("click", ".list-sort-toggle", function () {
		
		$("#collapseOne1").attr('class', 'panel-collapse collapse');
		$("#collapseOne1").attr('aria-expanded', 'false');
		
        // Select SignIn//Register selected as default.
        if ($(".list-sort-toggle").attr("aria-expanded") == "true") {
			$(".sort-toggle-items li a")[0].focus();			
        }
        else {
            $(".list-sort-toggle").focus();
        }
    });
	
	var sortpopupkeycode = 0;
	$(document).on("keyup", ".sort-toggle-items li .last", function (event) {
        sortpopupkeycode = event.keyCode;
		//alert(sorypopupkeycode);
    });	
	
	$(document).on("focusout", ".sort-toggle-items li .last", function (event) {        
		if(sortpopupkeycode == 9) { 
			$(".list-sort-toggle").focus();
		}
    });	
	
	var filterpopupkeycode = 0;
	$(document).on("keyup", ".list-sort-toggle-update-filter", function (event) {
        filterpopupkeycode = event.keyCode;
		//alert(filterpopupkeycode);
    });	
	
	$(document).on("focusout", ".list-sort-toggle-update-filter", function (event) {        
		if(filterpopupkeycode == 9) { 
			$(".list-filter-toggle").focus();
		}
    });
});

