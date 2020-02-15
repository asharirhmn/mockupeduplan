/**
    * testimonialCarousel
    * multiSlide
    * portfolioIsotope
    * portfolioMasory
    * popupGallery
    * portfolioRelatedCarousel
    * portfolioCarousel
    * blogCarousel
    * blogMasory
    * logoClient
    * googleMap
    * flatCounter
    * progressBar
    * rowStyling
    * spacer
*/

;(function($) {

    'use strict'
    
    var testimonialCarousel = function() {   
        $('.vc_row').each(function() {            
            if ( $().owlCarousel ) {                  
                $(this).find('.testimonial-slider').owlCarousel({
                    loop: true,
                    margin: parseInt( $(this).find('.testimonial-slider').data('margin') ),
                    nav: Boolean( $(this).find('.testimonial-slider').data('hide_buttons') )? false: true, 
                    dots: Boolean( $(this).find('.testimonial-slider').data('hide_control') )? false: true,                   
                    autoplay: Boolean( $(this).find('.testimonial-slider').data('autoplay') )? true: false,                
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 2
                        },
                        1200: {
                            items: parseInt( $(this).find('.testimonial-slider').data('slides_per_view') )
                        }
                    }
                });
            }
        });
    }; 

    var testimonialCarousel_2 = function() {   
        $('.vc_row').each(function() {            
            if ( $().owlCarousel ) {                  
                $(this).find('.testimonial-slider-2').owlCarousel({
                    loop: true,
                    margin: parseInt( $(this).find('.testimonial-slider-2').data('margin') ),
                    nav: Boolean( $(this).find('.testimonial-slider-2').data('hide_buttons') )? false: true, 
                    dots: Boolean( $(this).find('.testimonial-slider-2').data('hide_control') )? false: true,                   
                    autoplay: Boolean( $(this).find('.testimonial-slider-2').data('autoplay') )? true: false,                
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
                            items: parseInt( $(this).find('.testimonial-slider-2').data('slides_per_view') )
                        }
                    }
                });
            }
        });
    }; 
    
    var multiSlide = function() {        
        $('.flat-multi-slider').each(function(){           
            var json_obj = jQuery.parseJSON ( '{' +$('#flat-testimonials-carousel').data('config') + '}' );           
            var $selector = $('.flat-multi-slider');           
            $selector.find('#flat-testimonials-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                slideshow: false,    
                animationLoop: true,               
                itemWidth: parseInt( json_obj['item_width'] ),
                itemMargin: parseInt( json_obj['margin'] ),
                asNavFor: $selector.find('#flat-testimonials-flexslider')
            });

            $selector.find('#flat-testimonials-flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: true,
                slideshow: false,                
                sync: $selector.find('#flat-testimonials-carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>'
            });
        });
    }; 

    var portfolioIsotope = function() { 
        if ( $( '.portfolio-container' ).hasClass('show_filter_portfolio') ) {
            if ( $().isotope ) {           
                var $container = $('.portfolio-container');
                $container.imagesLoaded(function(){
                    $container.isotope({
                        itemSelector: '.item',
                        transitionDuration: '1s'
                    });
                });

                $('.portfolio-filter li').on('click',function() {                           
                    var selector = $(this).find("a").attr('data-filter');
                    $('.portfolio-filter li').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({ filter: selector });
                    return false;
                });            
            };
        };        
    };

    var portfolioMasory = function() {         
        if ( $().isotope ) {           
            var $container = $('.portfolio-container.masonry');
            $container.imagesLoaded(function(){
                $container.masonry({
                    itemSelector: '.item',
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

    var portfolioRelatedCarousel = function() {   
        $('.related-portfolio').each(function() {
            if ( $().owlCarousel ) {
                $(this).find('.portfolio-container.carosuel').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: true,                   
                    autoplay: false,                
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            }
        });
    }; 

    var portfolioCarousel = function() {
        if ( $( ".flat-portfolio" ).hasClass( "yes" ) ) {            
            if ( $().owlCarousel ) {                
                $('.flat-portfolio.yes').find('.portfolio-container').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: true,                   
                    autoplay: false,                
                    responsive:{
                        0:{
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            }
        }
    };    

    var blogCarousel = function() {
        if ( $( ".blog-shortcode" ).hasClass( "has-carousel" ) ) {            
            if ( $().owlCarousel ) {                
                $('.blog-shortcode.has-carousel').owlCarousel({
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
        }
    };  

    var blogMasory = function() {         
        if ( $().isotope ) {           
            var $container = $('.blog-shortcode.blog-masonry');
            $container.imagesLoaded(function(){
                $container.masonry({
                    itemSelector: '.entry',
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

    var logoClient = function() {
        $('.wrap-client-slide').each(function() {             
            if ( $().owlCarousel ) {                
                $('.client-slide ').owlCarousel({
                    loop: true,
                    margin: parseInt( $(this).find('.client-slide').data('margin') ),
                    nav: Boolean( $(this).find('.client-slide').data('hide_buttons') )? false: true, 
                    dots: Boolean( $(this).find('.client-slide').data('hide_control') )? false: true,                   
                    autoplay: Boolean( $(this).find('.client-slide').data('autoplay') )? true: false,                        
                    responsive:{
                        0:{
                            items: 2
                        },                                              
                        480:{
                            items: 3
                        }, 
                        767:{
                            items: 4
                        },
                        991:{
                            items: 5
                        },
                        1200: {
                            items: parseInt( $(this).find('.client-slide').data('slides_per_view') )
                        }
                    }
                });
            }
        });
    };  

    var googleMap = function() {            
        if ( $().gmap3 ) {  
            $("#map").gmap3({
                map:{
                    options:{
                        zoom: 14,
                        mapTypeId: 'consultant_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['consultant_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: true
                    }
                },
                getlatlng:{
                    address:  $('.flat-maps').data('address'),
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: $('.flat-maps').data('images')
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "consultant_style",
                    options:{
                        name: "Consultant Map"
                    },
                    styles: [
                        {
                            "featureType": "water",
                            "stylers": [
                                { "color": "#c6c6c6" }
                            ]
                        },
                        
                        {
                            "featureType": "road.local",
                            "stylers": [
                              { "color": "#d3d3d3" }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "stylers": [
                              { "color": "#e3e3e3" }
                            ]
                       },
                       {
                            "featureType": "road.highway",
                            "stylers": [
                              { "color": "#fff" }
                            ]
                       },
                       {
                            "featureType": "poi.park",
                            "stylers": [
                              { "color": "#e5e5e5" }
                            ]
                       }                                              
                    ]
                },  
            });
        }
        $('#map').css( 'height', $('.flat-maps').data('height') );
    };
    
    var flatCounter = function() {
        $('.counter').on('on-appear', function() { 
            $(this).find('.numb-count').each(function() { 
                var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                }
            });
       });
    };
   
    var progressBar = function() {        
        $('.progress-bar').on('on-appear', function() {
            $(this).each(function() {
                var percent = $(this).data('percent');                
                $(this).find('.progress-animate').animate({
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );

                $(this).parent('.flat-progress').find('.perc').addClass('show').animate({
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );
            });
        });
    };

    var rowStyling = function() {
        $(".vc_row").each(function( idx, el ) {
            if ($(this).hasClass('flat-overlay')) {
                var class_mask ='<div class="overlay"></div>';
                $(this).append(class_mask);
            }          

        });       
    };

    var spacer = function() {
        $(".flat-spacer").each(function() {

            var spacer_size = $(this).data( 'desktop' );
            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                spacer_size = $(this).data( 'mobile' )
            }

            if ( matchMedia( 'only screen and (max-width: 479px)' ).matches ) {
                spacer_size = $(this).data( 'smobile' )
            }
            
            $(this).css( "height", spacer_size );
        });       
    };      

    var flatSingleImages = function() {
        var $this = $(".flat-single-images");
        $this.closest('.vc_column-inner').css({
            'background-image': "url(" + $this.find('.vc_single_image-img').attr('src') + ")",
            "background-size": "cover",
            "background-position": "center"
        });
        $this.find('.vc_single_image-img').remove();
    };
    var colorHover = function(iconbox, img_adv_video, img_adv_image, single_bt, dtab, icons){
        /*iconbox*/
        var iconbox = $(iconbox);
        iconbox.each(function() {
            var bgcolor_hover = $(this).find('.icon-wrap').data('bgcolor_hover'),
                bgcolor = $(this).find('.icon-wrap').data('bgcolor'),
                color_hover = $(this).find('.icon-wrap').data('color_hover'),
                color = $(this).find('.icon-wrap').data('color'),
                bordercolor_hover = $(this).find('.icon-wrap').data('bordercolor_hover'),
                bordercolor = $(this).find('.icon-wrap').data('bordercolor'),
                buttoncolor_hover = $(this).find('.btn').data('buttoncolor_hover'),
                buttoncolor = $(this).find('.btn').data('buttoncolor'),
                button_bgcolor_hover = $(this).find('.btn').data('button_bgcolor_hover'),
                button_bgcolor = $(this).find('.btn').data('button_bgcolor'),
                button_bordercolor_hover = $(this).find('.btn').data('button_bordercolor_hover'),
                button_bordercolor = $(this).find('.btn').data('button_bordercolor'),

                headingcolor = $(this).find('.heading').data('headingcolor'),
                headingcolor_hover = $(this).find('.heading').data('headingcolor_hover');
            
            //Icon
            $(this).on('mouseenter',function() {
                $(this).find('.icon-wrap').css({'background': bgcolor_hover , 'color': color_hover, 'border-color': bordercolor_hover });               
            });
            $(this).on('mouseleave',function() {
                $(this).find('.icon-wrap').css({'background': bgcolor , 'color': color , 'border-color': bordercolor });                
            });

            //Button
            $(this).find('.btn > a').on('mouseenter',function() {
                $(this).css({'color': buttoncolor_hover, 'background': button_bgcolor_hover, 'border-color': button_bordercolor_hover });
            });
            $(this).find('.btn > a').on('mouseleave',function() {
                $(this).css({'color': buttoncolor , 'background': button_bgcolor , 'border-color': button_bordercolor });
            }); 

            //Heading
            $(this).find('.heading > a').on('mouseenter',function() {
                $(this).css({'color': headingcolor_hover });
            });
            $(this).find('.heading > a').on('mouseleave',function() {
                $(this).css({'color': headingcolor });
            });            
        });

        /*images_advanced_video*/
        var images_advanced_video = $(img_adv_video);         
        images_advanced_video.each(function() {
            var bgcolor_hover = $(this).find('.icon-wrap').data('bgcolor_hover'),
                bgcolor = $(this).find('.icon-wrap').data('bgcolor');
            //Icon
            $(this).find('.icon-wrap').on('mouseenter',function() {
                $(this).css({'background': bgcolor_hover });               
            });
            $(this).find('.icon-wrap').on('mouseleave',function() {
                $(this).css({'background': bgcolor });                
            });
        });

        /*images_advanced_image*/
        var images_advanced_image = $(img_adv_image);         
        images_advanced_image.each(function() {
            var bgcolor_hover = $(this).find('.icon-wrap').data('bgcolor_hover'),
                bgcolor = $(this).find('.icon-wrap').data('bgcolor');            
            //Icon
            $(this).find('.icon-wrap').on('mouseenter',function() {
                $(this).css({'background': bgcolor_hover });               
            });
            $(this).find('.icon-wrap').on('mouseleave',function() {
                $(this).css({'background': bgcolor });                
            });
        });

        /*single_button*/
        var single_button = $(single_bt);         
        single_button.each(function() {
            var btn_bgcolor_hover = $(this).data('btn_bgcolor_hover'),
                btn_bgcolor = $(this).data('btn_bgcolor'),
                btn_color_hover = $(this).data('btn_color_hover'),
                btn_color = $(this).data('btn_color'),
                btn_bordercolor_hover = $(this).data('btn_bordercolor_hover'),
                btn_bordercolor = $(this).data('btn_bordercolor');
            //button             
            $(this).on('mouseenter',function() {
                $(this).css({'background': btn_bgcolor_hover, 'color': btn_color_hover, 'border-color': btn_bordercolor_hover });               
            });
            $(this).on('mouseleave',function() {
                $(this).css({'background': btn_bgcolor, 'color': btn_color, 'border-color': btn_bordercolor });                
            });
        });

        /*dtab*/
        var colordtab = $(dtab);        
        colordtab.each(function() {            
            var bgcolorhover = $(this).find('.tab-title').data('bgcolorhover'),
                bgcolor = $(this).find('.tab-title').data('bgcolor'),
                bgcoloractive = $(this).find('.tab-title').data('bgcoloractive'),                
                colorhover = $(this).find('.tab-title').data('colorhover'),
                color = $(this).find('.tab-title').data('color'),
                coloractive = $(this).find('.tab-title').data('coloractive');
                                          
            //title 
            $(this).find('.item-title').css({'background': bgcolor, 'color': color });                       
            $(this).find('.item-title').on('mouseenter',function() {
                $(this).css({'background': bgcolorhover, 'color': colorhover });               
            });
            $(this).find('.item-title').on('mouseleave',function() {
                $(this).css({'background': bgcolor, 'color': color });                
            }); 
            
            $(this).find('.item-title.active').children().css({'color': coloractive });
            $(this).find('.item-title.active').children().css({'background': bgcoloractive });
            $(this).find('.tab-title').on('click',function(e) {
                $(this).find('.item-title').children().css({'color': '' });
                $(this).find('.item-title.active').children().css({'color': coloractive });

                $(this).find('.item-title').children().css({'background': '' });
                $(this).find('.item-title.active').children().css({'background': bgcoloractive }); 
                e.preventDefault();
            });
        }); 

        /*icon*/
        var icon = $(icons);         
        icon.each(function() {
            var bgcolor_hover = $(this).data('bgcolor_hover'),
                bgcolor = $(this).data('bgcolor'),
                color_hover = $(this).data('color_hover'),
                color = $(this).data('color'),
                bordercolor_hover = $(this).data('bordercolor_hover'),
                bordercolor = $(this).data('bordercolor');
            //button             
            $(this).on('mouseenter',function() {
                $(this).find('span.icon').css({'background': bgcolor_hover, 'color': color_hover, 'border-color': bordercolor_hover });               
            });
            $(this).on('mouseleave',function() {
                $(this).find('span.icon').css({'background': bgcolor, 'color': color, 'border-color': bordercolor });                
            });
        });
    };
    // Dom Ready
    $(function() {
        multiSlide();
        testimonialCarousel();
        testimonialCarousel_2();
        portfolioIsotope();
        portfolioMasory();
        popupGallery();
        portfolioCarousel();
        blogCarousel();
        portfolioRelatedCarousel();        
        flatCounter();
        blogMasory();
        logoClient();
        googleMap();
        progressBar();
        rowStyling();   
        spacer();     
        colorHover('.themesflat_sc_vc-icon-box','.themesflat_sc_vc-image-video','.themesflat_sc_vc-single-image','.themesflat_sc_vc-button','.themesflat_sc_vc-tabs','.themesflat_sc_vc-icon'); 
        flatSingleImages();
    });

})(jQuery);