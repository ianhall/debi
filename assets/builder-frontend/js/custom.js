    jQuery(document).ready(function () {

        $('.customaudioplayer').each(function () {
            let id = $(this).data('demo-id');
            var base_url = jQuery('meta[name="hidden_siteurl"]').attr("content");
            var download_url = base_url + "/site-file-download/" + id ;
            if (id) {
                $(this).find('.download-audio a')
                    .attr('href', download_url);
            }
        });


    });
    jQuery(document).ready(function () {
            jQuery('header .stellarnav').stellarNav({
                position: "top"
            });
            var app_url = jQuery('meta[name="hidden_siteurl"]').attr("content");
            var data = app_url.split("://");
            var protocol = data[0] + "://";
            var app_url_wo_protocol = data[1];
            jQuery('.stellarnav li a').each(function (index, element) {
                var menu_link = jQuery(element).find("span").text();
                var current_slug_a = jQuery(element).attr("href");
                if (current_slug_a != "") {
                    var cur_slug = current_slug_a;
                } else {
                    var cur_slug = "";
                }
                var domain_name = window.location.hostname;
                var custom_domain_protocol = window.location.protocol;
                var browser_url = window.location.href;
                var path_name = window.location.pathname
                var split_path_name = path_name.split("/");
                // For Free Domain URL
                if (menu_link == "Page" && (domain_name == app_url_wo_protocol)) {
                    var free_url = protocol + domain_name + "/" + split_path_name[1] + "/" + split_path_name[2] +
                        cur_slug;
                    jQuery(element).attr("href", free_url);
                }
                if (menu_link == "Front Page" && (domain_name == app_url_wo_protocol)) {
                    var free_url = protocol + domain_name + "/" + split_path_name[1] + "/" + split_path_name[2];
                    jQuery(element).attr("href", free_url);
                }
                // For Paid User Custom Domain URL
                if (menu_link == "Page" && (domain_name != app_url_wo_protocol)) {
                    var paid_url = custom_domain_protocol + "//" + domain_name + cur_slug;
                    jQuery(element).attr("href", paid_url);
                }
                if (menu_link == "Front Page" && (domain_name != app_url_wo_protocol)) {
                    var paid_url = custom_domain_protocol + "//" + domain_name;
                    jQuery(element).attr("href", paid_url);
                }
            });
        });
        jQuery(document).ready(function () {
            if (jQuery("header").find(".stellarnav").length > 0) {
                var t_bg_color = jQuery("header").find(".menu-element").attr("toggle_bg_color");
                var t_color = jQuery("header").find(".menu-element").attr("toggle_color");
                var menu_color = jQuery("header").find(".menu-element").attr("menu_item_color");
                jQuery("header").find(".menu-element").find(".menu-toggle").css("background", t_bg_color);
                jQuery("header").find(".menu-element").find(".menu-toggle").css("color", t_color);
                jQuery("header").find(".menu-element").find(".menu-toggle").find(".bars").find("span").css(
                    "background", t_color);
                jQuery("header").find(".menu-element").find(".icon-plus").css("color", menu_color);
            }
        });

        function adjustStyles() {
            var t_bg_color = jQuery("header").find(".menu-element").attr("toggle_bg_color");
            if (jQuery("body").find("header").find(".stellarnav").hasClass("mobile")) {
                jQuery("header").find(".stellarnav").find("ul").first().css({
                    'background-color': t_bg_color,
                });
            } else {
                jQuery("header").find(".stellarnav").find("ul").first().css({
                    'background-color': '',
                });
            }
        }
        jQuery(document).ready(function () {
            jQuery(".ready_width").attr("content", $(window).width());
            MenuWidthDetect();
            adjustStyles();
        });
        $(window).off('resize.voiceactor-menu').on('resize.voiceactor-menu', function () {

            setTimeout(function () {
                adjustStyles();
                MenuWidthDetect()
            }, 1)

        });

        function MenuWidthDetect() {
            var outer_width = jQuery("body").find("header").find(".menu-element");
            var menu_li = jQuery("body").find("header").find(".menu-element").find("ul:not(li > ul)").children();
            var all_width = 1;
            menu_li.each(function (i, e) {
                all_width += parseFloat($(e).outerWidth());
            });
            if (jQuery("body").find("header").find(".stellarnav").length > 0 && (all_width > outer_width.outerWidth() || $(window).width() < 959 || all_width == 0)) {
                jQuery("body").find("header").find(".stellarnav").removeClass("desktop").addClass("mobile");
                jQuery("body").addClass("mobile-spacing");
                var leme = jQuery("body").find("header").find(".stellarnav").closest(".menu-element");
                var menu_color = leme.attr("menu_item_color");
                var menutoogle_bgcolor = leme.attr("toggle_bg_color");
                var menutoogle_color = leme.attr("toggle_color");
                var submenu_bgcolor = leme.attr("submenu_bg_color");
                var submenu_color = leme.attr("submenu_item_color");
                leme.find("ul").first().css("background", menutoogle_bgcolor);
                leme.find("ul").first().css("display", "none");
                leme.find("li").find("a").css("color", menu_color);
                leme.find(".has-sub").find("ul").css("background", submenu_bgcolor);
                leme.find(".has-sub").find("ul").find("li").find("a").css('color', submenu_color);
                leme.find(".menu-toggle").css('background', menutoogle_bgcolor);
                leme.find(".menu-toggle").css('color', menutoogle_color);
                if (jQuery("body").find("header").find(".stellarnav").hasClass('active')) {
                    jQuery("body").find("header").find(".stellarnav").removeClass('active');
                }
                jQuery("body").find("header").find(".stellarnav").find('li').off('mouseenter.voiceactor mouseleave.voiceactor');
            } else {
                jQuery("body").find("header").find(".stellarnav").removeClass("mobile").addClass("desktop");
                jQuery("body").removeClass("mobile-spacing");
                var leme = jQuery("body").find("header").find(".stellarnav").closest(".menu-element");
                var menu_color = leme.attr("menu_item_color");
                var menutoogle_bgcolor = leme.attr("toggle_bg_color");
                var menutoogle_color = leme.attr("toggle_color");
                var submenu_bgcolor = leme.attr("submenu_bg_color");
                var submenu_color = leme.attr("submenu_item_color");
                leme.find("li").find("a").css("color", menu_color);
                leme.find(".has-sub").find("ul").css("background", submenu_bgcolor);
                leme.find(".has-sub").find("ul").find("li").find("a").css('color', submenu_color);
                leme.find(".menu-toggle").css('background', menutoogle_bgcolor);
                leme.find(".menu-toggle").css('color', menutoogle_color);
                if (jQuery("body").find("header").find(".stellarnav").hasClass('active')) {
                    jQuery("body").find("header").find(".stellarnav").removeClass('active');
                }
                jQuery("body").find("header").find(".stellarnav").find('li').off('mouseenter.voiceactor mouseleave.voiceactor');
                setTriggers();
                leme.find("ul").first().attr("style", "");
            }
            if (jQuery("body").find("header").find(".stellarnav").find(".menu-toggle").length > 1) {
                jQuery("body").find("header").find(".stellarnav").find(".menu-toggle:not(:first-child)").remove();
            }
        }
        var setTriggers = function () {
            var parentItems = jQuery("body").find("header").find(".stellarnav").find('> ul > li');
            jQuery(parentItems).each(function () {
                jQuery(this).off('mouseenter.voiceactor mouseleave.voiceactor').on({
                    'mouseenter.voiceactor': function () {
                        jQuery(this).children('ul').stop(true, true).slideDown();
                    },
                    'mouseleave.voiceactor': function () {
                        jQuery(this).children('ul').stop(true, true).delay().slideUp();
                    }
                });
                // second level and below
                jQuery(this).find('li.has-sub').off('mouseenter.voiceactor mouseleave.voiceactor').on({
                    'mouseenter.voiceactor': function () {
                        jQuery(this).children('ul').stop(true, true).slideDown();
                    },
                    'mouseleave.voiceactor': function () {
                        jQuery(this).children('ul').stop(true, true).delay().slideUp();
                    }
                });
            });
        }
        jQuery(".customaudioplayer").on("click", ".mejs__playpause-button", function (e) {
            if (jQuery(this).hasClass("mejs__play") || jQuery(this).hasClass("mejs__replay")) {
                e.preventDefault();
                var media_id = jQuery(this).closest(".customaudioplayer").attr("data-demo-id");
                var base_url = jQuery('meta[name="hidden_siteurl"]').attr("content");
                var play_url = base_url + "/audio-stats/" + media_id + "/play";
                jQuery.ajax({
                    type: 'GET',
                    url: play_url,
                    data: {
                        "media_id": media_id,
                        "playclicked": "clicked"
                    },
                    success: function (response) {},
                    error: function (error) {}
                });
            }
        });
        // jQuery(".customaudioplayer").on("click", ".download-audio a", function (e) {
        //     var media_id = jQuery(this).closest(".customaudioplayer").attr("data-demo-id");
        //     var base_url = jQuery('meta[name="hidden_siteurl"]').attr("content");
        //     var download_url = base_url + "/audio-stats/" + media_id + "/download";
        //     jQuery.ajax({
        //         type: 'GET',
        //         url: download_url,
        //         data: {
        //             "media_id": media_id,
        //             "downloadclicked": "clicked"
        //         },
        //         success: function (response) {},
        //         error: function (error) {}
        //     });
        // });
        jQuery(document).ready(function () {
            var testimonial_div = $(document).find("body").find(".testimonial-element");

            testimonial_div.each(function (index, element) {
                var $slickEl = $(element).find('.slick');
                if ($slickEl.children().length === 0) { return; }
                if ($(element).attr("design") == "slider" && !$slickEl.hasClass('slick-initialized')) {
                    $slickEl.slick({
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: $slickEl.children().length > 1,
                        autoplaySpeed: 7500,
                        arrows: false,
                        pauseOnHover: false,
                        infinite: $slickEl.children().length > 1,
                    });
                }
                var text_color = $(element).attr("text_color");
                var author_color = $(element).attr("author_color");
                var quote_color = $(element).attr("quote_color");
                var quote_size = $(element).attr("quote_size");
                var text_size = $(element).attr("text_size");
                var author_size = $(element).attr("author_size");
                var author_alignment = $(element).attr("author_alignment");
                var text_alignment = $(element).attr("text_alignment");
                var bg_color = $(element).attr("bg_color");
                $(element).find(".testimonial_content").css("color", text_color);
                $(element).find(".author_content").css("color", author_color);
                $(element).find(".author_content").css("font-size", author_size + "px");
                $(element).find(".testimonial_content").css("font-size", text_size + "px");
                $(element).find(".before-quote").css("color", quote_color);
                $(element).find(".after-quote").css("color", quote_color);
                $(element).find(".slick-dots").css("color", quote_color);
                $(element).find(".multiple").css("background-color", bg_color);
                if (quote_size == "sm") {
                    $(element).find(".after-quote").css("font-size", "18px");
                    $(element).find(".before-quote").css("font-size", "18px");
                }
                if (quote_size == "lg") {
                    $(element).find(".after-quote").css("font-size", "32px");
                    $(element).find(".before-quote").css("font-size", "32px");
                }
                if (quote_size == "xl") {
                    $(element).find(".after-quote").css("font-size", "54px");
                    $(element).find(".before-quote").css("font-size", "54px");
                }
                if (author_alignment == "center") {
                    $(element).find(".author_content").css("text-align", "center");
                }
                if (author_alignment == "right") {
                    $(element).find(".author_content").css("text-align", "right");
                }
                if (author_alignment == "left") {
                    $(element).find(".author_content").css("text-align", "left");
                }
                if (text_alignment == "center") {
                    $(element).find(".testimonial_content").css("text-align", "center");
                }
                if (text_alignment == "right") {
                    $(element).find(".testimonial_content").css("text-align", "right");
                }
                if (text_alignment == "left") {
                    $(element).find(".testimonial_content").css("text-align", "left");
                }
            });


            var client_div =  $(document).find("body").find(".client-element");  
            client_div.each(function (index, element) {
            var $clientSlick = $(element).find('.client_slick');
            var clientCount = $clientSlick.children().length;
            if (clientCount === 0) { return; }
            if (!$clientSlick.hasClass('slick-initialized')) {
                $clientSlick.slick({
                    dots: true,
                    slidesToShow: Math.min(clientCount, 5),
                    slidesToScroll: 1,
                    autoplay: clientCount > 1,
                    autoplaySpeed: 1000,
                    arrows: false,
                    pauseOnHover: false,
                    infinite: clientCount > 1,
                    centerPadding: '20px',
                    responsive: [
                        {
                            breakpoint: 1023,
                            settings: {
                                slidesToShow: 3,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 1,
                            },
                            },
                    ],
                });
            }
            var dot_color = $(element).attr("dot_color");
                $(element).find(".slick-dots").css("color", dot_color);
                $(element).find(".clientname_content").find("span").css("color", $(element).attr("text_color"));
            });

        });
