(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-2d0e5f34"], {
        9755: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("2f62");

            function n(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(a), !0).forEach((function(t) {
                        i(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function i(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var c = {
                    name: "KnowledgeBaseSearch",
                    components: {
                        TawkSearch: a("f0b0").TawkSearch
                    },
                    props: {
                        content: {
                            type: Object,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            value: "",
                            isSearching: !1,
                            isOpen: !1,
                            token: "",
                            totalResults: 0,
                            searchDelay: 500
                        }
                    },
                    mounted: function() {
                        this.searchArticles({
                            search: null,
                            siteId: this.content.siteId
                        }), this.$refs.tawkSearch && this.$refs.tawkSearch.$el && this.$refs.tawkSearch.$el.addEventListener("input", this.handleTyping)
                    },
                    beforeDestroy: function() {
                        this.$refs.tawkSearch && this.$refs.tawkSearch.$el && this.$refs.tawkSearch.$el.removeEventListener("input", this.handleTyping)
                    },
                    computed: r(r({}, Object(s.c)({
                        isLoading: "knowledgeBase/isLoading",
                        searchData: "knowledgeBase/searchData",
                        isRTL: "widget/isRTL"
                    })), {}, {
                        placeholderText: function() {
                            var e = this.$i18n("kb", "search_placeholder");
                            return this.content && void 0 !== this.content.inputPlaceholder && (e = this.content.inputPlaceholder), e
                        }
                    }),
                    methods: r(r({}, Object(s.b)({
                        show: "knowledgeBase/show",
                        routerPush: "router/routerPush",
                        updateOptions: "knowledgeBase/updateOptions",
                        searchArticles: "knowledgeBase/searchArticles",
                        articleClickedAnalytics: "knowledgeBase/articleClickedAnalytics",
                        showOverlay: "overlay/showOverlay",
                        setLoading: "knowledgeBase/setLoading",
                        setSearchLoading: "knowledgeBase/setSearchLoading",
                        updateSearchDataLinkTarget: "knowledgeBase/updateSearchDataLinkTarget",
                        unsetSearchData: "knowledgeBase/unsetSearchData",
                        unsetSearchDataResults: "knowledgeBase/unsetSearchDataResults"
                    })), {}, {
                        handleTyping: function() {
                            this.isLoading("search") || this.setSearchLoading(!0)
                        },
                        getSearchResult: function() {
                            this.searchArticles({
                                search: this.value,
                                limit: 5,
                                siteId: this.content.siteId
                            }), this.isOpen = !0
                        },
                        handleClearInput: function() {
                            this.value = "", this.unsetSearchData()
                        },
                        handleShowAll: function() {
                            this.unsetSearchDataResults(), this.$refs.tawkSearch.handleClearValue(), "blank" === this.content.linkTarget && this.updateSearchDataLinkTarget("blank"), this.searchArticles({
                                search: this.value,
                                limit: 10,
                                siteId: this.content.siteId
                            }), 0 !== this.value.length && (this.routerPush("kb-search"), this.showOverlay(!0))
                        },
                        handleSelect: function(e) {
                            if (this.isOpen = !1, this.value = "", this.articleClickedAnalytics(e.articleId), this.unsetSearchData(), "self" === this.content.linkTarget) return this.show({
                                url: "/article/get",
                                articleId: e.articleId,
                                siteId: e.siteId
                            }), this.routerPush("kb-article"), void this.showOverlay(!0);
                            window.open(e.publicUrl, "_blank")
                        }
                    })
                },
                l = a("2877"),
                o = Object(l.a)(c, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "tawk-kb-search",
                        staticStyle: {
                            "border-radius": "5px"
                        }
                    }, [a("tawk-search", {
                        ref: "tawkSearch",
                        attrs: {
                            isLoading: e.isLoading("search"),
                            isOpen: e.isOpen,
                            options: e.searchData.results,
                            optionsLimit: 5,
                            totalResults: e.searchData.total,
                            searchDelay: e.searchDelay,
                            placeholderText: e.placeholderText,
                            iconFlip: e.isRTL,
                            btnClass: "tawk-custom-color tawk-custom-border-color"
                        },
                        on: {
                            "update:isOpen": function(t) {
                                e.isOpen = t
                            },
                            "update:is-open": function(t) {
                                e.isOpen = t
                            },
                            submitSearch: e.getSearchResult,
                            clearInput: e.handleClearInput,
                            showAll: e.handleShowAll,
                            selectOption: e.handleSelect
                        },
                        model: {
                            value: e.value,
                            callback: function(t) {
                                e.value = t
                            },
                            expression: "value"
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = o.exports
        }
    }
]);