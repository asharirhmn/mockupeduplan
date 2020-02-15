/**
    * isMobile
    * headerFixed
    * retinaLogos
    * blog_slider
    * responsiveMenu
    * megaMenu
    * portfolioLoadMore
    * portfolioSingle
    * closeSiteCover
    * blogMasory
    * testimonialsSidebar
    * goTop
    * popupGallery
    * customVideo
    * detectViewport
    * flatAnimation
    * removePreloader
    * flatSingleImages
    * divRowBlog
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };       
    
    var headerFixed = function() { 
        if ( $('body').hasClass('header_sticky') ) {
            var top_height = $('.top').height(),
            hd_height = $('#header').height(), 
            nav_height =$('.nav').height(),
            nav =  $('.nav') - 15,       
            injectSpace = $('<div />', { height: nav_height }).insertAfter(nav);   
            injectSpace.hide();           
            $(window).on('load scroll', function(){                
                if ( $(window).scrollTop() >= top_height + hd_height ) {                    
                    $('.nav').addClass('header-sticky'); 
                    if ( $( ".header" ).hasClass( 'header-v3' ) ) {
                        $('.mainnav').addClass('header-sticky');
                    }
                    injectSpace.show();                     
                } else {                    
                    $('.nav').removeClass('header-sticky'); 
                    $('.mainnav').removeClass('header-sticky'); 
                    injectSpace.hide();                 
                }                
            })            
        }   
    }

    var topSearch = function () {   

        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID != 's' ) ) {
                $('.header-search').removeClass('show');                
            } 
        });

        $('.header-search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-icon').on('click', function () {
            if(!$('.header-search').hasClass( "show" ))
                $('.header-search').addClass('show');
            else
                $('.header-search').removeClass('show');
        });          
    }  
   
    var retinaLogos = function() {
        var logo_retina = $('.logo .site-logo').data('retina');             
        var retina = window.devicePixelRatio > 1 ? true : false;
        if(retina) {            
            $('.logo img').attr({src: logo_retina ,width:'372',height:'90'});
        }
    };     

    var blog_slider = function() {
        $('.post ').each(function() {               
            if ( $().owlCarousel ) {                
                $(this).find('.blog-slider ul').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    };

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('.nav').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);            
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);           
            e.stopImmediatePropagation()
        });
    }

    var megaMenu = function() {
        $('#mainnav li').each( function() {            
            if ( $(this).hasClass('has-mega-menu') ) {
                var $main_menu_possiton =  $(this).attr('id');                
                var $megaMenu = $('.wrap-mega-menu' +' .'+$main_menu_possiton );
                $(this).append( $megaMenu );
            }            
        } );        
    }
        
    var portfolioLoadMore = function() {       
        var $container = $('.portfolio-container')            
        $('.page-loading a').on('click', function(e) {
            e.preventDefault();               

            $('<span/>', {
                class: 'infscr-loading',
                text: 'Loading...',
            }).appendTo($container);

            $.ajax({
                type: "GET",
                url: $(this).attr('href'),
                dataType: "html",
                success: function( out ) {
                    var result = $(out).find('.item');                        
                    var nextlink = $(out).find('.page-loading a').attr('href');
                    result.css({ opacity: 0 });                        
                    $container.append(result).imagesLoaded(function () {
                        result.css({ opacity: 1 });
                        $container.isotope('appended', result);
                    });
                    
                    if ( nextlink != undefined ) {
                        $('.page-loading a').attr('href', nextlink);
                        $container.find('.infscr-loading').remove();
                    } else {
                        $container.find('.infscr-loading').addClass('no-ajax').text('All posts loaded.').delay(2000).queue(function() {$(this).remove();});
                        $('.page-loading').remove();
                    }
                }
            })
        })        
    }

    var portfolioSingle = function() {
        $('.flat-portfolio-single-slider').each(function(){
            $(this).children('#flat-portfolio-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: true,
                slideshow: true,
                itemWidth: 277,                
                itemMargin: 20,
                asNavFor: $(this).children('#flat-portfolio-flexslider'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>'
            });
            $(this).children('#flat-portfolio-flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: true,
                slideshow: true,                
                sync: $(this).children('#flat-portfolio-carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>'
            });
        });
    };  

    var closeSiteCover = function() {
        $(document).on('click', '.close-site-cover', function(e) {
            $(this).closest('#site-cover').remove();
            e.preventDefault();
        })     
    }  

    var blogMasory = function() {         
        if ( $().isotope ) {           
            var $container = $('.content-area.grid-masonry .post-wrap');
            $container.imagesLoaded(function(){
                $container.masonry({
                    itemSelector: 'article',
                    transitionDuration: '0.5s',                    
                    layoutMode: 'masonry',                 
                    masonry: { columnWidth: $container.width() / 12 }
                }); // isotope
             });

            $(window).resize(function() {
                $container.masonry({
                   masonry: { columnWidth: $container.width() / 12 }
                });
            }); // relayout        
            
        };
    };

    var testimonialsSidebar = function() {
        $('.testimonials-sidebar ').each(function() {               
            if ( $().owlCarousel ) {                
                $(this).find('.testimonial03').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: false,
                    dots: false,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    };
    
    var goTop = function() {      
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var popupGallery = function () {        
        if ( $('a').hasClass('popup-gallery') ) {                
             $(".popup-gallery").magnificPopup({
                type: "image",
                tLoading: "Loading image #%curr%...",
                removalDelay: 600,
                mainClass: "my-mfp-slide-bottom",
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [ 0, 1 ]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                }
            });
        }              
    }

    var customVideo = function() {
        if ( $().fitVids )
        $('.container').fitVids();
    } 

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };   
    
    var flatAnimation = function() {        
        if ( isMobile.any() == null ) {
            $('.flat-animation').each( function() {
                var flatElement = $(this),
                    flatAnimationClass = flatElement.data('animation'),
                    flatAnimationDelay = flatElement.data('animation-delay'),
                    flatAnimationOffset = flatElement.data('animation-offset');                
                flatElement.css({
                    '-webkit-animation-delay':  flatAnimationDelay,
                    '-moz-animation-delay':     flatAnimationDelay,
                    'animation-delay':          flatAnimationDelay
                });

                flatElement.waypoint(function() {
                    flatElement.addClass('animated').addClass(flatAnimationClass);
                },{
                    triggerOnce: true,
                    offset: flatAnimationOffset
                });
            });
        }
    };

    var removePreloader = function() {        
        $('.preloader').css('opacity', 0);
        setTimeout(function() {
            $('.preloader').hide(); }, 1000           
        );   
    };

    var flatSingleImages = function() {        
        $(".flat-single-images").addClass('class_name');
        $(window).on('load', function(event) {
            
            event.preventDefault();
        });       
    };      
    var scroll_img = function(){
        $( '.demo img' ).each( function( index, value ) {
            var waverly_transition_speed = $( this ).height() * 7;

            $( this ).css( {
                'transition' : 'transform ' + waverly_transition_speed +'ms ease'
            } );
        } );

        $( '.demo' ).each( function( index, value ) {
            //-- on mouse enter
            $( this ).on( 'mouseenter', function() {
                var waverly_translate_distance = $( this ).find( 'img' ).height() - $( this ).find( '.img-container' ).height();

                $( this ).find( 'img' ).css( {
                    'transform' : 'translateY( -' + waverly_translate_distance + 'px )'
                } );
            } );

            //-- on mouse leave
            $( this ).on( 'mouseleave', function() {
                $( this ).find( 'img' ).css( {
                    'transform' : 'translateY( 0 )'
                } );
            } );
        } );
    };
    var priceTable = function(){
        $(".drop-down .selected .selected-license").click(function() {
            $(".drop-down .options ul").toggle();
        });

        $(".drop-down .options ul li").click(function() {
            var text = $(this).find('.price-license').html(),
            get_id_opt = $(this).find('.price-license').attr('id'),
            price_text = $(this).find('.price-regular').html();

            $(".drop-down .selected .selected-license").html(text);
            $(".drop-down .selected .price-current").html(price_text);
            $(".drop-down .options ul").hide();
            $(".standard-item-content .btn-view").removeClass('active');
            $("."+get_id_opt).addClass('active');
            $(".content-price .price").removeClass('active');
            $("."+get_id_opt).addClass('active');
        }); 

        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("drop-down"))
                $(".drop-down .options ul").hide();
        });
    };
    var tabs =  function() {
        $('.flat-tabs').each(function(){
            var 
            list ="",
            title = $(this).find('.item-title'),
            titleWrap = $(this).children('.tab-title') ;

            $(this).find('.tab-title li').filter(':last').addClass('active');
            $(this).find('.tab-content-wrap').children().hide().filter(':last').addClass('active').show();
           
            $(this).find('.tab-title li').on('click', function(e) {
                var idx = $(this).index(),
                content = $(this).closest('.flat-tabs').find('.tab-content-wrap').children().eq(idx);

                $(this).addClass('active').siblings().removeClass('active');
                content.fadeIn('slow').addClass('active').siblings().hide().removeClass('active');

                e.preventDefault();
            });
        });
    };
    var divRowBlog = function() {
        if($('#main').hasClass('four-columns')) {
            for (var i = 1; i <= $('#main > article').length; i++) {
                if($(window).width() < 768) {
                    if(i % 2 == 0) {
                        $('#main > article').eq(i-1).after('<div class="spec clearfix"></div>');
                    }
                } else if (i % 4 == 0) {
                    $('#main > article').eq(i-1).after('<div class="spec clearfix"></div>');
                }
            }
        } else if($('#main').hasClass('three-columns')) {
            for (var i = 1; i <= $('#main > article').length; i++) {
                if($(window).width() < 768) {
                    if(i % 2 == 0) {
                        $('#main > article').eq(i-1).after('<div class="spec clearfix"></div>');
                    }
                } else if (i % 3 == 0) {
                    $('#main > article').eq(i-1).after('<div class="spec clearfix"></div>');
                }
            }
        } else if($('#main').hasClass('two-columns')) {
            for (var i = 1; i <= $('#main > article').length; i++) {
                if(i % 2 == 0) {
                    $('#main > article').eq(i-1).after('<div class="spec clearfix"></div>');
                }
            }
        }
    }

    $(window).on('load resize', function(event) {
        $('div.spec.clearfix').remove();
        divRowBlog();
        event.preventDefault();
    });

    // Dom Ready
    $(function() {
    if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
        headerFixed();
    } 
    responsiveMenu(); 
    topSearch(); 
    megaMenu();          
    retinaLogos();  
    popupGallery();
    portfolioLoadMore();
    blog_slider();
    customVideo();
    portfolioSingle();  
    flatAnimation();
    detectViewport();
    closeSiteCover();
    testimonialsSidebar();
    blogMasory();
    goTop();
    scroll_img();
    priceTable();
    tabs();
    removePreloader();
    });

})(jQuery);