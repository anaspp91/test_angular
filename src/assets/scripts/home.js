!function($) {
    var defaultSize = parseInt($("html").css("font-size"));
    $(".font-inr").on("click", function() {
        defaultSize = parseInt($("html").css("font-size")), 25 <= (defaultSize += 1) && (defaultSize = 25), 
        $("html").css("font-size", defaultSize + "px");
    }), $(".font-dcr").on("click", function() {
        defaultSize = parseInt($("html").css("font-size")), (defaultSize -= 1) <= 8 && (defaultSize = 8), 
        $("html").css("font-size", defaultSize + "px");
    }), window.bLazy = new Blazy({
        offset: 350,
        loadInvisible: !0,
        breakpoints: [ {
            width: 767,
            src: "data-src-small"
        } ]
    }), $(window).scroll(function(e) {
        var scrollY = $(window).scrollTop();
        100 < scrollY ? $(".fl-social").addClass("fl-scrolled") : $(".fl-social").removeClass("fl-scrolled"), 
        5 < scrollY ? $("body").addClass("scrolled") : $("body").removeClass("scrolled");
    }), $(document).ready(function() {
        pgs_.hash_scroll(), pgs_.menuscrollToDiv(), pgs_.burgger_menu(), pgs_.scroll_progress(), 
        $("[data-fancybox-modal]").fancybox({
            modal: !0
        }), pgs_.lang_switch(), pgs_.body_padding(), pgs_.scroll_click(), pgs_.star_rating(), 
        console.log("%c Developed by PGS (http://pgsuae.com/)", "background: #45d98e; color: #fff;");
    });
}(jQuery);

var viewport = window.innerWidth, pgs_ = {
    star_rating: function() {
        $("[data-s-rating]").each(function() {
            var s_rating = $(this), currentRating = s_rating.data("rating"), rate_ = String(currentRating).split("."), rate_1 = parseInt(rate_[0]), rate_2 = parseInt(rate_[1]);
            s_rating.find(".star").each(function(i, v) {
                rate_1 < (i += 1) && (rate_2 <= 5 && i == rate_1 + 1 ? $(this).addClass("half") : 5 <= rate_2 && i == rate_1 + 1 || $(this).addClass("empty"));
            });
        });
    },
    scroll_click: function() {
        $("[data-scroll-menu]").on("click", function(e) {
            e.preventDefault();
            var target_ = $(this).data("scroll-menu"), off_v = $("#header").outerHeight();
            $("#" + target_).length && $("html, body").animate({
                scrollTop: $("#" + target_).offset().top - off_v
            }, 1e3, function() {
                window.bLazy.revalidate(), $("[data-scroll-menu]").removeClass("active"), $('[data-scroll-menu ="' + target_ + '"]').addClass("active");
            });
        }), $("[data-scroll-sub-menu]").on("click", function(e) {
            e.preventDefault();
            var target_ = $(this).data("scroll-sub-menu"), off_v = $("#header").outerHeight();
            $("#" + target_).length && $("html, body").animate({
                scrollTop: $("#" + target_).offset().top - off_v
            }, 1e3, function() {
                window.bLazy.revalidate(), $("[data-scroll-sub-menu]").removeClass("active"), $('[data-scroll-sub-menu ="' + target_ + '"]').addClass("active");
            });
        });
    },
    body_padding: function() {
        var head_h = $("#header").outerHeight();
        $("body").css("padding-top", head_h);
    },
    lang_switch: function() {
        $("[data-lang-switch]").on("click", function(e) {
            e.preventDefault();
            var userLang = $("html").attr("lang");
            if ("/" == document.location.pathname) var page_ = ""; else page_ = document.location.pathname.match(/[^\/]+$/)[0];
            "en" == userLang ? "" == page_ ? window.location.replace("index_ar.html") : window.location.replace(page_.split(".")[0] + "_ar.html") : "ar" == userLang && ("" == page_ ? window.location.replace("index.html") : window.location.replace(page_.split("_ar")[0] + ".html"));
        });
    },
    hash_scroll: function() {
        $("[data-scroll]").on("click", function(e) {
            var target_ = $(this).data("scroll");
            $(target_).length && ($("html, body").stop().animate({
                scrollTop: $(target_).offset().top - $("header").outerHeight()
            }, 500), e.preventDefault());
        });
    },
    burgger_menu: function() {
        $("body").on("click", ".menu_trigger", function(e) {
            var this_ = $(this), target_ = this_.data("traget");
            this_.toggleClass("active_"), $("body").toggleClass("menu_open"), $("#" + target_).toggleClass("show");
        });
    },
    menuscrollToDiv: function() {
        var offset = $("header").outerHeight();
        $("body").on("click", ".nav-link.scroll", function(e) {
            e.preventDefault(), $(document).off("scroll"), $(this).closest(".navbar-nav").length && ($(".navbar-nav a.scroll").each(function() {
                $(this).parent().removeClass("active");
            }), $(this).parent().addClass("active"));
            var target = $(this).attr("data-href"), $target = $(target);
            $(target).length ? ($("body").hasClass("menu_open") && $(".menu_trigger").trigger("click"), 
            $("html, body").stop().animate({
                scrollTop: $target.offset().top - offset
            }, 500, "swing", function() {
                $(document).on("scroll");
            })) : window.location.href = $(this).attr("href");
        });
    },
    scroll_menu_active: function() {
        var lastId, menuItems = $(".navbar-nav").find("a"), scrollItems = menuItems.map(function() {
            var item = $($(this).attr("data-href"));
            if (item.length) return item;
        }), offset = $("header").outerHeight();
        $(window).scroll(function() {
            var fromTop = $(this).scrollTop() + offset, cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop) return this;
            }), id = (cur = cur[cur.length - 1]) && cur.length ? cur[0].id : "";
            lastId !== id && (lastId = id, menuItems.parent().removeClass("active").end().filter("[data-href='#" + id + "']").parent().addClass("active"));
        });
    },
    scroll_progress: function() {},
    progress_circle: function() {
        $(".footer_box").find("[data-percentage]").each(function() {
            var this_ = $(this), val = parseFloat(this_.attr("data-percentage")), number_place = this_.find(".number_ span"), calc_per = (185 - 185 * val / 100).toFixed(2);
            this_.hasClass("anim_done") || (this_.find(".progress_").removeAttr("style"), setTimeout(function() {
                this_.find(".progress_").css("stroke-dashoffset", calc_per);
            }, 800), number_place.empty(), $({
                percentage: 0
            }).stop(!0).animate({
                percentage: val
            }, {
                duration: 2e3,
                step: function() {
                    var percentageVal = Math.round(10 * this.percentage) / 10;
                    number_place.text(percentageVal);
                }
            }).promise().done(function() {
                number_place.text(val), this_.addClass("anim_done");
            }));
        });
    },
    word_count: function(val) {
        var wom = val.match(/\S+/g);
        return {
            charactersNoSpaces: val.replace(/\s+/g, "").length,
            characters: val.length,
            words: wom ? wom.length : 0,
            lines: val.split(/\r*\n/).length
        };
    },
    word_lenght: function() {
        $("[data-length]").each(function() {
            var this_ = $(this), max_ch = this_.data("length");
            this_.on("change paste keyup", function() {
                var v = pgs_.word_count(this.value);
                this_.closest(".input-field").find(".character-counter").text(v.words + "/" + max_ch), 
                max_ch < v.words ? this_.addClass("invalid") : this_.removeClass("invalid");
            });
        });
    },
    height_into_width: function() {
        $("[data-h_into_w]").each(function() {
            var this_ = $(this), h_ = this_.height();
            this_.css("width", h_);
        });
    },
    window_hash_smooth_scroll: function() {
        var hash = window.location.hash, this_ = $(hash);
        this_.length && $("html, body").stop().animate({
            scrollTop: this_.offset().top - 100
        }, 500);
    }
};

!function($) {
    $(".menu-row ul>li.settings-tab").on("click", function() {
        $(this).find(".settings").toggleClass("active");
    }), $(".site-colors .clr").on("click", function() {
        $("body").removeClass("site-brand"), $("body").removeClass("site-red"), $("body").removeClass("site-green"), 
        $("body").removeClass("site-black"), $("body").removeClass("site-dark"), $("body").addClass($(this).attr("data-color"));
    }), $(".dark-switch").on("click", function() {
        $("body").removeClass("site-brand"), $("body").removeClass("site-red"), $("body").removeClass("site-green"), 
        $("body").removeClass("site-black"), console.log("dark"), $("body").toggleClass("site-dark");
    }), $(document).ready(function() {
        767 < $(window).width() ? $(".home-section").viewportChecker({
            classToAdd: "inView",
            offset: "28%"
        }) : $(".home-section").viewportChecker({
            classToAdd: "inView",
            offset: "30%"
        }), $("footer").viewportChecker({
            classToAdd: "inView",
            offset: "28%"
        }), setTimeout(function() {
            $("body").addClass("is-loaded");
        }, 500), $("[data-model-box]").fancybox({
            modal: !0
        });
    }), window.onscroll = function() {
        jQuery(window).height() / 2 < $(window).scrollTop() ? $(".side-button").addClass("show") : $(".side-button").removeClass("show");
    }, $("body").on("click", ".menu_trigger", function(e) {
        var this_ = $(this), target_ = this_.data("traget");
        console.log(target_), this_.toggleClass("active_"), $("body").toggleClass("menu_open"), 
        $("#" + target_).toggleClass("show");
    });
}(jQuery);