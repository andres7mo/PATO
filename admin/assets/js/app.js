(() => {
    var e, t = {
        86: (e, t, n) => {
            "use strict";
            n(972);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function (t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var a = window.jQuery;

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var s = window.jQuery, l = s("#adminmenuwrap").outerWidth(), d = s("#wpadminbar").outerHeight(),
                h = s(".chaty-header").outerHeight(), u = Boolean(window.isRtl) ? "right" : "left", p = function () {
                    return innerWidth < 600 ? (scrollY <= d ? d - scrollY : 0) + "px" : d + "px"
                }, f = function () {
                    return innerWidth >= 783 ? l + "px" : 0
                }, v = function () {
                    return innerWidth < 640 ? (h || 0) + 20 : (h || 0) + d
                };
            var g = window.jQuery;
            const w = function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var o = t.reduceRight((function (e, t) {
                    return i(i({}, e), t)
                }), {});
                return function (e) {
                    return function (t) {
                        return e(i(i({}, t), o))
                    }
                }
            }({
                onLayoutChange: function (e) {
                    var t;
                    e((c(t = {top: p()}, u, f()), c(t, "width", "calc(100% - ".concat(f(), ")")), c(t, "content", v()), t)), onscroll = function () {
                        var t;
                        e((c(t = {top: p()}, u, f()), c(t, "width", "calc(100% - ".concat(f(), ")")), c(t, "content", v()), t))
                    }, s(document).on("wp-menu-state-set wp-collapse-menu", (function (t, n) {
                        var o;
                        l = s("#adminmenuwrap").outerWidth(), d = s("#wpadminbar").outerHeight(), h = s(".chaty-header").outerHeight(), e((c(o = {top: p()}, u, f()), c(o, "width", "calc(100% - ".concat(f(), ")")), c(o, "content", v()), o))
                    }))
                }
            })((function (e) {
                var t = g(".chaty-header"), n = g("#chaty-widget-body-tab");
                0 !== t.length && (e.onLayoutChange((function (e) {
                    t.css(e), n.css("margin-top", "".concat(e.content, "px"))
                })), t.find(".chaty-tab").on("click", (function () {
                    "fixed" === t.css("position") && window.scrollTo({
                        top: t.outerHeight() + 32 + "px",
                        left: 0,
                        behavior: "smooth"
                    })
                })), a(".save-button-container .arrow-btn").on("click", (function () {
                    var e = a(".save-dashboard-button"), t = a(".footer-buttons").offset(), n = a(this).offset(),
                        o = n.top - t.top + 45, i = n.left - t.left + 40;
                    return 1 == a(this).attr("data-click-state") ? (a(this).attr("data-click-state", 0).removeClass("active"), e.css({display: "none"})) : (a(this).attr("data-click-state", 1).addClass("active"), e.css({
                        position: "absolute",
                        left: i + "px",
                        top: o + "px",
                        display: "inline-block",
                        transform: "translateX(-100%)"
                    })), !1
                })), a(window).on("click", (function (e) {
                    a(".arrow-btn.active") && (a(".save-dashboard-button").css({display: "none"}), a(".arrow-btn.active").attr("data-click-state", 0).removeClass("active"))
                })))
            }));
            var m = window.jQuery;
            var y = window.jQuery;
            var b = window.jQuery;
            var k = window.jQuery;
            window.jQuery;
            var C = window.jQuery;
            var _ = window.jQuery;

            function j() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (_("#active_widget").length) {
                    var t = _(".trigger-block-wrapper"), n = _(".widget-disable-alert"), o = _("#active_widget");
                    null === e && (e = o[0]), e.checked ? (t.show(), n.hide()) : (t.hide(), n.show()), _("#active_widget").on("change", (function () {
                        j(this)
                    }))
                }
            }

            var x = window.jQuery;
            var P = window.jQuery;

            function $() {
                wp.hooks.addAction("chaty.channel_update", "channelUpdateHandler", (function (e) {
                    var t = e.action, n = e.target, o = e.channel, i = e.isExceeded;
                    !function (e) {
                    }(i), "added" === t && !i && n && function (e) {
                        P("#chaty-social-".concat(e))[0].scrollIntoView({behavior: "smooth", block: "center"})
                    }(n);
                    var r = o.length <= 1 && "chat-view" != P("input[name='cta_type']:checked").val();
                    P(".chaty-widget-icon, .chaty-default-state, .chaty-icon-view").toggleClass("hidden", r)
                }))
            }

            jQuery((function () {
                var e;
                w(), {
                    init: function () {
                        this.$previewBtn = m(".preview-help-btn"), this.$asidePreview = m(".preview-section-chaty"), this.resizeHandler(), this.$previewBtn.on("click", this.showPreview.bind(this)), this.$asidePreview.on("click", this.removePreview.bind(this)), m(window).resize(this.resizeHandler.bind(this))
                    }, showPreview: function (e) {
                        e.preventDefault(), e.stopPropagation(), this.$asidePreview.removeClass("pb-20 hidden").addClass("fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/70").css("z-index", 9999999).attr("data-show", 1), this.$asidePreview.find(".preview").removeClass("sticky").css("max-width", "350px")
                    }, removeHandler: function () {
                        this.$asidePreview.addClass("pb-20 hidden").removeClass("fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/70").removeAttr("style").attr("data-show", 0), this.$asidePreview.find(".preview").addClass("sticky").removeAttr("style")
                    }, removePreview: function (e) {
                        e && !e.target.closest(".preview") && 1 == this.$asidePreview.attr("data-show") && this.removeHandler()
                    }, position: function () {
                        var e = m("#chaty-widget-body-tab");
                        if (0 !== e.length) {
                            var t = e.offset(), n = jQuery(document).width();
                            return {
                                centerY: window.innerHeight / 2,
                                left: t.left,
                                right: n - (t.left + e.outerWidth()),
                                width: n,
                                containerWidth: e.outerWidth()
                            }
                        }
                    }, resizeHandler: function () {
                        if (this.position()) {
                            var e = this.position(), t = e.centerY;
                            e.right, e.width <= 1024 ? (this.$previewBtn.css({
                                top: t + "px",
                                right: 0,
                                transform: "rotate(-90deg) translateX(137%)",
                                opacity: 1,
                                zIndex: 999999
                            }), this.$asidePreview.addClass("hidden")) : (this.removeHandler(), this.$asidePreview.removeClass("hidden"), this.$previewBtn.css({opacity: 0}))
                        }
                    }
                }.init(), e = {
                    init: function () {
                        this.extendJquery(), this.trigger(!1, {
                            $scope: y(document),
                            element: ".chaty-color-field"
                        }), y(document).on("chatyColorPicker/trigger", this.trigger.bind(this))
                    }, STATE: {
                        current: null, set add(e) {
                            !e.is(this.current) && this.current && this.current.parent().next().slideUp(), this.current = e, this.closeAll
                        }, get closeAll() {
                            var e = this;
                            y("html, .preview-section-chaty").on("click", (function (t) {
                                t.target.closest(".cht-colorpicker__dropdown") || e.current.parent().next().slideUp()
                            }))
                        }
                    }, trigger: function () {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        t && this.eventUtils(t);
                        var o = ["#202020", "#86cd91", "#1E88E5", "#ff6060", "#49E670", "#ffdb5e", "#ff95ee"];
                        n.$scope.find(n.element).each((function (t, i) {
                            var r = n.$scope.find(i);
                            if (!r.data("chaty-color-picker")) {
                                var a = r.val() || "#202020", c = AColorPicker.parseColor(a, "hex");
                                Object.assign({
                                    $scope: n.$scope,
                                    $input: r,
                                    defaultColor: a,
                                    colors: o,
                                    defaultColorDarker: e.colorLuminance(c, -.1)
                                }, e).addReplacer(), r.attr("data-chaty-color-picker", !0)
                            }
                        }))
                    }, eventUtils: function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }, addReplacer: function () {
                        var e = this;
                        e.$input.css("display", "none"), e.$input.after('\n                <div class="cht-colorpicker replacer">\n                    <div class="cht-colorpicker__preview">\n                        <span class="cht-colorpicker__preview--inner" style="background-color: '.concat(e.defaultColor, "; border-color: ").concat(e.defaultColorDarker, '"></span>\n                    </div>\n                    <div class="cht-colorpicker__dropdown">\n                        ').concat(e.colorTemplate(), "\n                    </div>\n                </div>\n            "));
                        var t = e.$input.parent().find(".cht-colorpicker"), n = t.find(".cht-colorpicker__dropdown"),
                            o = AColorPicker.createPicker(n, {
                                attachTo: t,
                                color: this.defaultColor,
                                showAlpha: !0,
                                showHSL: !1
                            });
                        e.initalize(t), o.on("change", (function (n, o) {
                            e.onChange.call(e, o, t, !0)
                        }))
                    }, colorTemplate: function () {
                        var e = this;
                        return '\n            <ul class="palate">\n                '.concat(this.colors.map((function (t, n) {
                            return '<li data-color="'.concat(t, '" ').concat(t === e.defaultColor ? 'class="active"' : "", '>\n                    <span class="template-color" style="background-color: ').concat(t, '"></span>\n                </li>')
                        })).join(""), '\n                <li style="'+(this.colors.includes(this.defaultColor)?"":"background-color: "+this.defaultColor)+'" class="custom-color ').concat(this.colors.includes(this.defaultColor) ? "" : "active", '">\n                    <div>\n                        <svg class="pointer-events-none" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" focusable="false" tabindex="-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 00-2 0v4H1a1 1 0 000 2h4v4a1 1 0 102 0V7h4a1 1 0 100-2H7V1z" fill="currentColor"></path></svg>\n                    </div>\n                </li>\n            </ul>\n            ')
                    }, extendJquery: function () {
                        y.fn.extend({
                            premioFixHorizontalPosition: function () {
                                var e = this.parent().offset().left, t = innerWidth - e;
                                return this.outerWidth() + 40 > t && this.css("right", "0"), this
                            }
                        })
                    }, initalize: function (e) {
                        var t = this, n = e.find(".cht-colorpicker__preview--inner"),
                            o = e.find(".cht-colorpicker__dropdown"), i = e.find(".custom-color"),
                            r = e.find(".template-color"), a = e.find(".palate"), c = e.find(".a-color-picker");
                        n.on("click", (function (e) {
                            t.eventUtils(e), o.premioFixHorizontalPosition().slideToggle(), c.hide(), setTimeout((function () {
                                a.show()
                            }), 500), t.STATE.add = n
                        })), r.on("click", (function (n) {
                            t.eventUtils(n), e.find("li").removeClass("active");
                            var o = jQuery(this).parent();
                            o.addClass("active"), t.onChange.call(t, o.data("color"), e, !1)
                        })), i.on("click", (function () {
                            e.find("li").removeClass("active"), jQuery(this).parent().addClass("active"), a.hide(), c.show()
                        }))
                    }, colorLuminance: function (e, t) {
                        (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                        var n, o, i = "#";
                        for (o = 0; o < 3; o++) n = parseInt(e.substr(2 * o, 2), 16), i += ("00" + (n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16))).substr(n.length);
                        return i
                    }, updatePreviewColor: function (e, t, n) {
                        e.find(".cht-colorpicker__preview--inner").css({backgroundColor: t, borderColor: n})
                    }, updateCustomPreviewColor: function (e, t) {
                        e.find(".custom-color").css({backgroundColor: t, borderColor: t})
                    }, updateChannelIconColor: function (e) {
                        e.$scope;
                        var t = e.color, n = (e.type, e.channel);
                        jQuery("#chaty_image_" + n + " .custom-chaty-image").css("background-color", t), jQuery("#cha   ty_image_" + n + " .facustom-icon").css("background-color", t), jQuery("#chaty_image_" + n + " .color-element").css("fill", t)
                    }, updateAgentIconColor: function (e) {
                        e.$scope;
                        var t = e.color, n = (e.type, e.channel);
                        console.log("color: " + t), console.log("channel: " + n), jQuery("#image_agent_data_agent-" + n + " .custom-agent-image").css("background-color", t), jQuery("#image_agent_data_agent-" + n + " .facustom-icon").css("background-color", t), jQuery("#image_agent_data_agent-" + n + " .color-element").css("fill", t)
                    }, updateAgentUserIconColor: function (e) {
                        e.$scope;
                        var t = e.color, n = (e.type, e.channel), o = e.agentIndex;
                        jQuery("#image_agent_data_" + n + "-" + o + " .custom-agent-image").css("background-color", t), jQuery("#image_agent_data_" + n + "-" + o + " .facustom-icon").css("background-color", t), jQuery("#image_agent_data_" + n + "-" + o + " .color-element").css("fill", t)
                    }, onChange: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = AColorPicker.parseColor(e, "hex"), i = n ? this.colorLuminance(o, -.1) : o,
                            r = t.parents(".chaty-channel").data("channel");
                        if (this.$input.val(e).attr("value", e), this.updatePreviewColor(t, e, i), n && this.updateCustomPreviewColor(t, i), this.$input.hasClass("chaty-bg-color") && (console.log("color: " + e), console.log("channel: " + r), this.updateChannelIconColor({
                            type: "chaty-bg-color",
                            $scope: jQuery(".custom-image-".concat(r)).parent(),
                            color: e,
                            channel: r
                        })), this.$input.hasClass("agent-bg-color") && this.updateAgentIconColor({
                            type: "agent-bg-color",
                            $scope: jQuery(".custom-image-".concat(r)).parent(),
                            color: e,
                            channel: r
                        }), this.$input.hasClass("agent-icon-color")) {
                            var a = t.parents(".agent-channel-setting").data("item");
                            this.updateAgentUserIconColor({
                                type: "agent-icon-color",
                                $scope: jQuery(".custom-image-".concat(r)).parent(),
                                color: e,
                                channel: r,
                                agentIndex: a
                            })
                        }
                        change_custom_preview()
                    }
                }, e.init(), b(document).on("click", ".customize-agent-button", (function () {
                    var e = b(this).parents(".chaty-channel");
                    e.find(".customize-agent-button, .agent-button-action").toggleClass("enable"), e.find(".chaty-channel-main-settings").slideToggle(200)
                })), b(document).on("click", ".agent-channel-setting-button", (function () {
                    b(this).parents(".agent-channel-setting").find(".agent-channel-setting-advance").slideToggle(200), b(this).toggleClass("enable")
                })), C(".chaty-settings").on("click", (function (e) {
                    e.preventDefault(), e.stopPropagation(), C(this).toggleClass("enable");
                    var t = C(this).parents(".chaty-channel"), n = C(window).scrollTop(), o = t.offset().top - n - 130;
                    window.scrollBy({top: o, left: 0, behavior: "smooth"})
                })), k(".widget-size-control").on("change", (function () {
                    "radio" === this.type && (k("#custom-widget-size").css({display: "size-custom" === this.id ? "block" : "none"}), k(".widget-size-control").prop("checked", !1), k(this).prop("checked", !0)), k("#custom-widget-size-input").val(this.value), change_custom_preview()
                })), wp.hooks.addAction("chaty.days_and_hours_remove_rule", "removeRuleHandler", (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "single",
                        n = e.find(".rule-btns");
                    "single" === t && (2 === e.parent().children().length && e.parent().find(".rule-btns").css({marginTop: "20px"}), n && 1 === e.prev().length && e.prev().append(n)), (n && 0 === e.prev().length || "all" === t) && (n.css({marginTop: "0"}), e.parents(".chaty-option-box").append(n), e.parents(".chaty-option-box").removeClass("show-remove-rules-btn"))
                })), wp.hooks.addAction("chaty.days_and_hours_add_rule", "addRuleHandler", (function (e) {
                    var t = e.$scope, n = e.$current, o = t.find(".rule-btns"),
                        i = t.find(".chaty-data-and-time-rules").children();
                    o.css({marginTop: i && 1 === i.length ? "20px" : "0px"}), n.append(o)
                })), j(), x(".chaty-targeted-collapse").on("click", (function (e) {
                    e.preventDefault();
                    var t = this.dataset.target, n = x("#".concat(t)), o = x(this);
                    n.slideToggle(300, (function () {
                        n.is(":hidden") ? o.find("svg").css("transform", "rotate(0deg)") : o.find("svg").css("transform", "rotate(90deg)")
                    }))
                })), $()
            }))
        }, 972: () => {
            var e = window.jQuery;
            e.fn.isInViewport = function () {
                var t = e(this).offset().top, n = t + e(this).outerHeight(), o = e(window).scrollTop(),
                    i = o + e(window).height();
                return n > o && t < i
            }
        }, 303: () => {
        }
    }, n = {};

    function o(e) {
        var i = n[e];
        if (void 0 !== i) return i.exports;
        var r = n[e] = {exports: {}};
        return t[e](r, r.exports, o), r.exports
    }

    o.m = t, e = [], o.O = (t, n, i, r) => {
        if (!n) {
            var a = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [n, i, r] = e[d], c = !0, s = 0; s < n.length; s++) (!1 & r || a >= r) && Object.keys(o.O).every((e => o.O[e](n[s]))) ? n.splice(s--, 1) : (c = !1, r < a && (a = r));
                if (c) {
                    e.splice(d--, 1);
                    var l = i();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        r = r || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
        e[d] = [n, i, r]
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {561: 0, 782: 0};
        o.O.j = t => 0 === e[t];
        var t = (t, n) => {
            var i, r, [a, c, s] = n, l = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (i in c) o.o(c, i) && (o.m[i] = c[i]);
                if (s) var d = s(o)
            }
            for (t && t(n); l < a.length; l++) r = a[l], o.o(e, r) && e[r] && e[r][0](), e[r] = 0;
            return o.O(d)
        }, n = self.webpackChunk = self.webpackChunk || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), o.O(void 0, [782], (() => o(86)));
    var i = o.O(void 0, [782], (() => o(303)));
    i = o.O(i)
})();