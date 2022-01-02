XA.component.observer = function(n) {
    function u() {
        typeof Sitecore != "undefined" && !i && r.hasClass("on-page-editor") && (Sitecore.PageModes.ChromeManager.chromesReseted.observe(function() {
            XA.init()
        }), i = !0)
    }
    var t = {},
        i = !1,
        r = n("body");
    return t.init = function() {
        u()
    }, t
}(jQuery);
XA.register("observer", XA.component.observer);
XA.component.partialDesignHighlight = function(n) {
    var t = {},
        i = !1;
    return t.init = function() {
        var u, t, r;
        if (!Object.prototype.hasOwnProperty.call(window, "Sitecore")) return !1;
        if (n(".on-page-editor").length > 0 && !i) {
            i = !0;
            u = Sitecore.PageModes.HoverFrame.extend({
                horizontalSideClassName: function() {
                    return this.base() + " scHilghlightedChrome boldHighlight sxaFrame"
                },
                verticalSideClassName: function() {
                    return this.base() + " scHilghlightedChrome boldHighlight sxaFrame"
                },
                dispose: function() {
                    this.sides && $sc.each(this.sides, function() {
                        this.remove()
                    });
                    this.sides = null
                },
                show: function(n) {
                    this.base(n);
                    this.top.css("left", this.top.position().left - 2 + "px").css("width", this.top.width() + 4 + "px");
                    this.bottom.css("left", this.bottom.position().left - 2 + "px").css("width", this.bottom.width() + 4 + "px");
                    this.topRightCorner.css("left", this.topRightCorner.position().left + 2 + "px");
                    this.bottomRightCorner.css("top", this.bottomRightCorner.position().top + 3 + "px");
                    this.bottomLeftCorner.css("top", this.bottomLeftCorner.position().top + 3 + "px");
                    this.left.css("height", this.left.height() + 7 + "px").css("top", this.left.position().top - 2 + "px");
                    this.right.css("height", this.right.height() + 7 + "px").css("left", this.right.position().left - 1 + "px").css("top", this.right.position().top - 2 + "px");
                    this.bottom.position().top - this.top.position().top < 7 && this.bottom.css("top", this.top.position().top + 7 + "px")
                }
            });
            t = function(n) {
                var r, i, t;
                if (n)
                    for (r = Sitecore.PageModes.ChromeManager.chromes(), i = 0; i < r.length; i++) t = r[i], t.data !== undefined && t.data.custom !== undefined && n === t.data.custom.sxaSource && (t._highlight !== undefined && t._highlight.hide(), t._highlight = new u, t._highlight.show(t))
            };
            r = function() {
                for (var i = Sitecore.PageModes.ChromeManager.chromes(), t = 0; t < i.length; t++) i[t].hideHighlight();
                n(".sxaFrame").remove()
            };
            n(".on-page-editor").on("mouseover", "table[data-zgtype=snippets] tr", function() {
                t(n(this).attr("id"))
            });
            n(".on-page-editor").on("mouseout", "table[data-zgtype=snippets] tr", r);
            n(".on-page-editor").on("mouseenter", ".sc_DropDownItemLink", function() {
                var i = n(this).data("sc-sxa-item-id");
                i.length && (i = i.substring(i.indexOf("{") + 1, i.indexOf("}")), i && t("L" + i.replace(/-/g, "")))
            });
            n(".on-page-editor").on("mouseleave", ".sc_DropDownItemLink", function() {
                n(this).data("sc-sxa-item-id").length > 0 && r()
            })
        }
    }, t
}(jQuery, _, document);
XA.register("partialDesignHighlight", XA.component.partialDesignHighlight)