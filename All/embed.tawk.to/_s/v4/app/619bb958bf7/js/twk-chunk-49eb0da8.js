(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-49eb0da8"], {
        3558: function(t, e, a) {
            "use strict";
            var s = a("bfec").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("base-frame", {
                        staticClass: "tawk-chat-view",
                        on: {
                            "&scroll": function(e) {
                                return t.handleScrollProcess.apply(null, arguments)
                            }
                        }
                    }, [a("base-header", {
                        ref: "tawk-base-header",
                        staticClass: "tawk-padding-remove-bottom"
                    }, [a("chat-header", {
                        ref: "tawk-home-header",
                        staticClass: "tawk-flex-none"
                    })], 1), a("base-body", {
                        ref: "tawk-base-body"
                    }, [a("chat-body", {
                        ref: "chat-body",
                        attrs: {
                            isLoading: t.isLoading,
                            messageBlocks: t.messageBlocks,
                            barMessageRerence: t.barMessageId,
                            emojiEnabled: t.emojiEnabled
                        },
                        on: {
                            imageLoaded: t.imageLoaded
                        }
                    }), a("transition-group", {
                        attrs: {
                            name: "list"
                        }
                    }, t._l(t.agentTyping, (function(e, s) {
                        return a("div", {
                            key: s
                        }, [a("div", {
                            staticClass: "tawk-flex tawk-flex-middle tawk-margin-small-bottom"
                        }, [a("tawk-avatar", {
                            staticClass: "tawk-message-profile",
                            attrs: {
                                size: "small",
                                src: e,
                                alt: "" + t.$i18n("chat", "agent_profile_image")
                            }
                        }), a("div", {
                            staticClass: "agentTypingIndicator tawk-margin-xsmall-left"
                        }, [a("div", {
                            staticClass: "dot tawk-agent-chat-bubble"
                        }), a("div", {
                            staticClass: "dot tawk-agent-chat-bubble"
                        }), a("div", {
                            staticClass: "dot tawk-agent-chat-bubble"
                        })]), a("div", {
                            staticClass: "clearfix"
                        })], 1)])
                    })), 0), a("transition-group", {
                        attrs: {
                            name: "list"
                        }
                    }, t._l(t.uploadFiles, (function(e, s) {
                        return a("div", {
                            key: "key-" + s,
                            staticClass: "tawk-margin-xsmall-top tawk-margin-xsmall-bottom"
                        }, [e.hasError ? a("div", [a("tawk-alert", {
                            attrs: {
                                status: "danger",
                                icon: "error",
                                title: t.$i18n("chat", "generalUploadErrorLabel"),
                                description: t.$i18n("chat", "generalUploadError", {
                                    fileName: e.fileName
                                })
                            }
                        }), a("tawk-button", {
                            staticClass: "tawk-text-red-1 tawk-margin-auto-left tawk-button tawk-button-text tawk-text-regular-2 tawk-margin-xsmall-top",
                            staticStyle: {
                                display: "block"
                            },
                            attrs: {
                                isText: !0
                            },
                            on: {
                                click: function(a) {
                                    return t.retryUpload(e)
                                }
                            }
                        }, [t._v(" " + t._s(t.$i18n("chat", "tryAgain")) + " ")])], 1) : a("progress-bar", {
                            attrs: {
                                handle: e.handle,
                                fileName: e.fileName,
                                percentage: e.percentage,
                                "aria-busy": "true",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100",
                                "aria-valuenow": e.percentage
                            }
                        })], 1)
                    })), 0), t.tooBigFileList ? a("div", [a("tawk-alert", {
                        staticClass: "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                        attrs: {
                            status: "danger",
                            icon: "error",
                            title: t.$i18n("notifications", "maximum_size_upload_warning", {
                                limitFileSize: "50MB"
                            }),
                            description: t.tooBigFileList
                        }
                    })], 1) : t._e()], 1), a("div", {
                        attrs: {
                            slot: "unseen-message-count"
                        },
                        slot: "unseen-message-count"
                    }, [a("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.showNotification && t.unreadMessageCount ? a("tawk-button", {
                        staticClass: "tawk-new-messages-notification",
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: function(e) {
                                return t.scrollToEl(t.barMessageId)
                            }
                        }
                    }, [t._v(" " + t._s(t.$i18n("chat", "newMessage", {
                        num: t.unreadMessageCount
                    })) + " "), a("tawk-icon", {
                        attrs: {
                            type: "down-arrow-2",
                            size: "xsmall"
                        }
                    })], 1) : t._e()], 1)], 1), a("div", {
                        attrs: {
                            slot: "unseen-message-count"
                        },
                        slot: "unseen-message-count"
                    }, [a("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.showLatest ? a("tawk-button", {
                        staticClass: "tawk-new-messages-notification",
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: function(e) {
                                return t.scrollToBottom()
                            }
                        }
                    }, [t._v(" " + t._s(t.$i18n("chat", "goToLatest")) + " "), a("tawk-icon", {
                        attrs: {
                            type: "down-arrow-2",
                            size: "xsmall"
                        }
                    })], 1) : t._e()], 1)], 1)], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        "38d6": function(t, e, a) {
            "use strict";
            a.r(e);
            var s = a("2f62"),
                i = a("7f46"),
                r = a("f0b0");

            function n(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach((function(e) {
                        c(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function c(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var l = {
                    name: "home-header",
                    components: {
                        TawkImage: r.TawkImage,
                        TawkVideo: r.TawkVideo,
                        KnowledgeBaseSearch: function() {
                            return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"))
                        },
                        AgentCard: function() {
                            return a.e("chunk-2d0c8894").then(a.bind(null, "54fe"))
                        },
                        TawkEmoji: r.TawkEmoji
                    },
                    props: {
                        state: {
                            type: String,
                            default: "online"
                        }
                    },
                    data: function() {
                        return {
                            header: {},
                            refreshHeader: !0
                        }
                    },
                    mounted: function() {
                        this.state && this.states[this.state] && (this.header = this.states[this.state].header)
                    },
                    computed: o(o({}, Object(s.c)({
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        chatVersion: "chat/chatVersion",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        emojiEnabled: "widget/emojiEnabled"
                    })), {}, {
                        logoUrl: function() {
                            return "https://tawk.link"
                        }
                    }),
                    watch: {
                        state: function() {
                            var t = this;
                            this.refreshHeader = !1, this.header = {}, this.$nextTick((function() {
                                t.refreshHeader = !0, t.state && t.states[t.state] && (t.header = t.states[t.state].header)
                            }))
                        }
                    },
                    methods: {
                        convertToHTML: function(t) {
                            return i.a.markdownToHtml(t)
                        }
                    }
                },
                u = a("2877"),
                h = Object(u.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.refreshHeader ? a("div", t._l(t.header, (function(e, s) {
                        return a("div", {
                            key: s
                        }, ["logo" === e.type ? a("div", {
                            class: ["header-card card--" + e.type, e.content.alignment && "tawk-text-" + e.content.alignment]
                        }, [a("tawk-image", {
                            attrs: {
                                src: t.logoUrl + "/" + e.content.image.content,
                                alt: "" + t.$i18n("home", "logo_image"),
                                role: "logo"
                            }
                        })], 1) : t._e(), "heading" === e.type ? a("div", {
                            class: "header-card card--" + e.type
                        }, [a("p", {
                            staticClass: "tawk-text-bold-4 tawk-header-text tawk-custom-color",
                            class: [e.content.alignment && "tawk-text-" + e.content.alignment],
                            attrs: {
                                role: "heading"
                            }
                        }, [a("tawk-emoji", {
                            attrs: {
                                emoji: t.convertToHTML(e.content.value),
                                enabled: t.emojiEnabled
                            }
                        })], 1)]) : t._e(), "text" === e.type ? a("div", {
                            class: "header-card card--" + e.type
                        }, [a("p", {
                            staticClass: "tawk-text-regular-4 tawk-header-text tawk-custom-color",
                            class: [e.content.alignment && "tawk-text-" + e.content.alignment]
                        }, [a("tawk-emoji", {
                            attrs: {
                                emoji: t.convertToHTML(e.content.value),
                                enabled: t.emojiEnabled
                            }
                        })], 1)]) : t._e(), "agents" === e.type ? a("div", {
                            class: ["tawk-flex card--" + e.type, e.content.alignment && "tawk-flex-" + e.content.alignment]
                        }, [a("agent-card", {
                            attrs: {
                                agentIds: e.content.agentIds
                            }
                        })], 1) : t._e(), "image" === e.type ? a("div", {
                            class: "header-card card--" + e.type
                        }, [a(e.content.link ? "a" : "div", {
                            tag: "component",
                            attrs: {
                                href: e.content.link ? e.content.link.ref : null,
                                target: e.content.link && "blank" === e.content.link.target ? "_blank" : "_top"
                            }
                        }, [a("tawk-image", {
                            staticClass: "tawk-custom-image",
                            attrs: {
                                position: e.content.alignment,
                                src: e.content.image.content,
                                alt: e.content.image.content
                            }
                        })], 1)], 1) : t._e(), "video" === e.type ? a("div", {
                            class: "header-card card--" + e.type
                        }, [a("tawk-video", {
                            attrs: {
                                content: {
                                    source: e.content.source,
                                    url: e.content.url,
                                    options: e.content.config
                                },
                                isMobile: !!t.mobileBrowserName
                            }
                        })], 1) : t._e(), "kb-search" === e.type ? a("knowledge-base-search", {
                            attrs: {
                                content: e.content
                            }
                        }) : t._e()], 1)
                    })), 0) : t._e()
                }), [], !1, null, null, null);
            e.default = h.exports
        },
        "3d78": function(t, e, a) {
            "use strict";
            var s = a("2f62"),
                i = a("7f46"),
                r = a("4b3e"),
                n = a("f0b0");

            function o(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(a), !0).forEach((function(e) {
                        l(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function l(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var u = {
                    name: "Item",
                    mixins: [r.a],
                    data: function() {
                        return {
                            isConversationCard: !1,
                            totalHistoryItems: 0,
                            isLoadingHistory: !0,
                            offVideo: !0
                        }
                    },
                    props: {
                        card: {
                            type: Object,
                            required: !0
                        },
                        isSubmitting: {
                            type: Boolean,
                            required: !0
                        },
                        submissionError: {
                            type: Boolean,
                            required: !1
                        },
                        body: {
                            type: Array,
                            required: !0
                        },
                        state: {
                            type: String,
                            required: !0
                        },
                        hasConversationCard: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    components: {
                        TawkCard: n.TawkCard,
                        TawkIcon: n.TawkIcon,
                        TawkImage: n.TawkImage,
                        TawkVideo: n.TawkVideo,
                        TawkButton: n.TawkButton,
                        KnowledgeBase: function() {
                            return Promise.all([a.e("chunk-2d221830"), a.e("chunk-2d0c02e2")]).then(a.bind(null, "414c"))
                        },
                        TawkAlert: n.TawkAlert,
                        KnowledgeBaseSearch: function() {
                            return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"))
                        },
                        Conversations: function() {
                            return a.e("chunk-b90b0856").then(a.bind(null, "30be"))
                        },
                        KbFeaturedArticle: function() {
                            return a.e("chunk-2d207f48").then(a.bind(null, "a377"))
                        },
                        TawkEmoji: n.TawkEmoji,
                        TawkForm: function() {
                            return a.e("chunk-2d0b345a").then(a.bind(null, "2853"))
                        }
                    },
                    mounted: function() {
                        this.hasLiveChat && "previous-conversations" === this.card.type && (this.$emit("update:hasConversationCard", !0), this.isConversationCard = !0)
                    },
                    computed: c(c({}, Object(s.c)({
                        hasLiveChat: "widget/hasLiveChat",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        hasChatStarted: "chat/hasChatStarted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        historyItems: "history/items",
                        hasChatEnded: "chat/hasChatEnded",
                        emojiEnabled: "widget/emojiEnabled",
                        chatOrder: "chat/chatOrder"
                    })), {}, {
                        isChatInputBottom: function() {
                            var t = !1;
                            return this.body && this.body.length && (t = "chat" === this.body[this.body.length - 1].type), t
                        },
                        showStartChatButton: function() {
                            return !this.hasChatStarted && !this.hasChatEnded && (!this.isChatInputBottom || this.isPrechatEnabled && !this.prechatFormSubmitted)
                        },
                        showConversationCard: function() {
                            return this.isLoadingHistory || this.totalHistoryItems || this.chatOrder
                        }
                    }),
                    methods: c(c({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        startChat: function() {
                            this.isPrechatEnabled && !this.prechatFormSubmitted ? this.routerPush("prechat") : (this.routerPush("chat"), this.showOverlay(!1))
                        },
                        submitForm: function(t) {
                            this.$emit("submitForm", t)
                        },
                        convertToHTML: function(t) {
                            return i.a.markdownToHtml(t)
                        },
                        historyItemsLoaded: function(t) {
                            this.totalHistoryItems = t, this.isLoadingHistory = !1
                        }
                    })
                },
                h = a("2877"),
                d = Object(h.a)(u, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return !t.isConversationCard || t.isConversationCard && t.showConversationCard ? a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isConversationCard || t.isConversationCard && !t.isLoadingHistory,
                            expression: "!isConversationCard || (isConversationCard && !isLoadingHistory)"
                        }],
                        staticClass: "card-container",
                        class: t.isConversationCard && t.chatOrder ? "tawk-flex-first" : ""
                    }, ["heading" === t.card.type ? a("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [a("p", {
                        staticClass: "tawk-text-bold-4",
                        class: [t.card.content.alignment && "tawk-text-" + t.card.content.alignment],
                        attrs: {
                            role: "heading"
                        }
                    }, [a("tawk-emoji", {
                        attrs: {
                            emoji: t.convertToHTML(t.card.content.value),
                            enabled: t.emojiEnabled
                        }
                    })], 1)]) : "text" === t.card.type ? a("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [a("p", {
                        staticClass: "tawk-text-regular-4",
                        class: [t.card.content.alignment && "tawk-text-" + t.card.content.alignment]
                    }, [a("tawk-emoji", {
                        attrs: {
                            emoji: t.convertToHTML(t.card.content.value),
                            enabled: t.emojiEnabled
                        }
                    })], 1)]) : "image" === t.card.type ? a("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [a(t.card.content.link ? "a" : "div", {
                        tag: "component",
                        attrs: {
                            href: t.card.content.link ? t.card.content.link.ref : null,
                            target: t.card.content.link && "blank" === t.card.content.link.target ? "_blank" : "_top"
                        }
                    }, [a("tawk-image", {
                        staticClass: "tawk-custom-image",
                        attrs: {
                            position: t.card.content.alignment,
                            src: t.card.content.image.content,
                            alt: "" + t.$i18n("home", "banner_image"),
                            role: "banner"
                        }
                    })], 1)], 1) : "video" === t.card.type ? a("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [t.offVideo ? a("tawk-video", {
                        attrs: {
                            content: {
                                source: t.card.content.source,
                                url: t.card.content.url,
                                options: t.card.content.config
                            },
                            isMobile: !!t.mobileBrowserName
                        }
                    }) : t._e()], 1) : "chat" === t.card.type ? [t.showStartChatButton && t.hasLiveChat ? a("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        class: "card--" + t.card.type,
                        attrs: {
                            id: t.card.id,
                            color: "inverse",
                            size: "small"
                        }
                    }, [a("tawk-button", {
                        staticClass: "tawk-button-hover tawk-custom-color tawk-custom-border-color",
                        on: {
                            click: t.startChat
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "mobile-send"
                        }
                    }), t._v(" " + t._s(t.card.content.buttonText) + " ")], 1)], 1) : t._e()] : "kb-featured-articles" === t.card.type ? a("tawk-card", {
                        staticClass: "tawk-home-kb-card",
                        attrs: {
                            id: t.card.id,
                            color: "inverse",
                            size: "xsmall"
                        }
                    }, [a("knowledge-base", {
                        attrs: {
                            state: t.state,
                            content: t.card.content
                        }
                    })], 1) : "kb-search" === t.card.type ? a("knowledge-base-search", {
                        staticClass: "tawk-box-shadow-xsmall",
                        attrs: {
                            content: t.card.content
                        }
                    }) : "kb-featured-article" == t.card.type ? a("kb-featured-article", {
                        class: "card--" + t.card.type,
                        attrs: {
                            content: t.card.content
                        }
                    }) : "form" === t.card.type ? a("div", {
                        staticClass: "card--form",
                        class: t.isSubmitting && "submitting"
                    }, [a("tawk-form", {
                        attrs: {
                            isSubmitting: t.isSubmitting,
                            state: t.state,
                            submissionError: t.submissionError
                        },
                        on: {
                            onFormSubmit: t.submitForm
                        }
                    }), a("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.submissionError ? a("tawk-alert", {
                        staticClass: "tawk-form-error-alert",
                        attrs: {
                            status: "danger",
                            icon: "error",
                            title: t.$i18n("form", "errorSaving"),
                            description: "",
                            isDismissable: !0,
                            isAutoDismissable: !0
                        }
                    }) : t._e()], 1)], 1) : t.isConversationCard ? a("tawk-card", {
                        staticClass: "tawk-home-kb-card",
                        attrs: {
                            id: t.card.id,
                            color: "inverse",
                            size: "xsmall"
                        }
                    }, [a("conversations", {
                        on: {
                            historyItemsLoaded: t.historyItemsLoaded
                        }
                    })], 1) : t._e()], 2) : t._e()
                }), [], !1, null, null, null);
            e.a = d.exports
        },
        "411f": function(t, e, a) {
            "use strict";
            var s = a("9534").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("base-frame", {
                        ref: "tawk-frame",
                        staticClass: "tawk-prechat-view"
                    }, [a("base-header", {
                        ref: "tawk-base-header",
                        class: t.headerClass
                    }, [a("home-header", {
                        ref: "tawk-prechat-header",
                        attrs: {
                            state: "prechat"
                        }
                    })], 1), a("base-body", [a("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [a("home-body", {
                        ref: "tawk-prechat-body",
                        attrs: {
                            state: "prechat",
                            overwriteSubmit: !0
                        },
                        on: {
                            submitForm: t.submitForm
                        }
                    })], 1)])], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        "4b3e": function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            }));
            var s = a("2f62");

            function i(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function r(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var n = {
                data: function() {
                    return {
                        offVideo: !0
                    }
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(a), !0).forEach((function(e) {
                            r(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }({}, Object(s.c)({
                    chatWindowState: "session/chatWindowState",
                    currentRoute: "router/current"
                })),
                watch: {
                    chatWindowState: function(t) {
                        "min" === t || "/" !== this.currentRoute && "kb-article" !== this.currentRoute ? this.offVideo = !1 : this.offVideo = !0
                    },
                    currentRoute: function(t) {
                        this.offVideo = "/" === t || "kb-article" === t
                    }
                }
            }
        },
        "4cd0": function(t, e, a) {
            "use strict";
            var s = a("2f62"),
                i = a("7f46");

            function r(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function n(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(a), !0).forEach((function(e) {
                        o(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function o(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var c = {
                    name: "chat-header",
                    components: {
                        ChatAgents: function() {
                            return a.e("chunk-2d0a4ee2").then(a.bind(null, "0914"))
                        },
                        HomeHeader: function() {
                            return Promise.resolve().then(a.bind(null, "38d6"))
                        }
                    },
                    mounted: function() {
                        this.addWaitTime()
                    },
                    computed: n(n({}, Object(s.c)({
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        agents: "chat/agents",
                        agentsCount: "chat/agentsCount",
                        activeProfiles: "chat/activeProfiles",
                        hasChatStarted: "chat/hasChatStarted",
                        agentHasMessaged: "chat/agentHasMessaged",
                        showEstimatedWaitTime: "widget/showEstimatedWaitTime",
                        waitTime: "session/waitTime"
                    })), {}, {
                        header: function() {
                            return this.states[this.pageStatus] ? this.states[this.pageStatus].header : null
                        },
                        logoUrl: function() {
                            return "https://tawk.link"
                        },
                        hasHomeView: function() {
                            var t = this.states[this.pageStatus];
                            return !t || !t.body || 1 !== t.body.length || "chat" !== t.body[0].type
                        }
                    }),
                    methods: n(n({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        addWaitTime: "session/addWaitTime",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        convertToHTML: function(t) {
                            return i.a.markdownToHtml(t)
                        },
                        changeView: function() {
                            this.routerPush("agents"), this.showOverlay(!0)
                        }
                    })
                },
                l = a("2877"),
                u = Object(l.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [0 === t.activeProfiles.length ? [!t.hasHomeView && t.header.length > 0 ? a("home-header", {
                        staticClass: "tawk-margin-bottom",
                        attrs: {
                            state: t.pageStatus
                        }
                    }) : t._e(), t.hasChatStarted && !t.agentHasMessaged && t.showEstimatedWaitTime && t.waitTime ? a("p", {
                        staticClass: "tawk-margin-xsmall-bottom",
                        domProps: {
                            innerHTML: t._s(t.$i18n("chat", "messageQueuedText", {
                                t: Math.ceil(t.waitTime / 6e4),
                                strongStart: "<b>",
                                strongEnd: "</b>"
                            }))
                        }
                    }) : t._e()] : a("chat-agents", {
                        attrs: {
                            profiles: t.activeProfiles,
                            role: "button",
                            tabindex: "0"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.changeView.apply(null, arguments)
                            }
                        }
                    })], 2)
                }), [], !1, null, null, null);
            e.a = u.exports
        },
        5688: function(t, e, a) {
            "use strict";
            var s = a("e906").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        ref: "adqe",
                        class: t.wrapperClasses,
                        style: {
                            borderRadius: t.borderRadiusTop
                        }
                    }, [a("div", {
                        staticClass: "tawk-toolbar-nav"
                    }, [t.showBackButton ? a("div", {
                        staticClass: "tawk-route-back tawk-flex tawk-flex-middle"
                    }, [a("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            "data-text": t.$i18n("rollover", "back"),
                            "aria-label": t.$i18n("rollover", "back")
                        },
                        on: {
                            click: t.routerBack
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "left-arrow",
                            size: "small"
                        }
                    })], 1), t.currentView.title && "agents" !== t.currentRoute ? a("span", {
                        staticClass: "tawk-toolbar-title tawk-text-regular-3 tawk-header-text tawk-margin-xsmall-left tawk-custom-text-color-inverse"
                    }, [t._v(" " + t._s(t.currentView.title()) + " ")]) : t._e()], 1) : t._e(), a("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [t.isAgentAvatarsVisible ? a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.toolbarOptions.showAgentAvatars,
                            expression: "toolbarOptions.showAgentAvatars"
                        }],
                        staticClass: "tawk-toolbar-agent-avatars",
                        on: {
                            click: t.toggleAgentsList
                        }
                    }, [t._l(t.getActiveAgents, (function(e, s) {
                        return a("tawk-avatar", {
                            key: s,
                            attrs: {
                                src: t.convertToAvatarLink(e.profileImage),
                                alt: "" + t.$i18n("chat", "agent_profile_image")
                            }
                        })
                    })), a("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [1 === t.activeProfiles.length ? a("div", {
                        staticClass: "tawk-toolbar-agent-details"
                    }, [a("p", {
                        staticClass: "tawk-toolbar-agent-name\n\t\t\t\t\t\t\ttawk-text-truncate"
                    }, [t._v(" " + t._s(t.getActiveAgents[0].displayName) + " ")]), a("p", {
                        staticClass: "tawk-toolbar-agent-title\n\t\t\t\t\t\t\ttawk-text-truncate"
                    }, [t._v(" " + t._s(t.getActiveAgents[0].profileTitle) + " ")])]) : a("tawk-avatar", {
                        attrs: {
                            count: t.activeProfiles.length - 1
                        }
                    })], 1)], 2) : t._e()])], 1), a("div", {
                        staticClass: "tawk-margin-auto-left tawk-flex-none tawk-flex tawk-flex-middle"
                    }, [t.showWebrtcOptions && !t.needConsent ? a("div", [a("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            "aria-label": t.$i18n("rollover", "voiceCall"),
                            "data-text": t.$i18n("rollover", "voiceCall")
                        },
                        on: {
                            click: t.initiateCall
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "call"
                        }
                    })], 1), t.webrtcOptions.video ? a("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            "aria-label": t.$i18n("rollover", "videoCall"),
                            "data-text": t.$i18n("rollover", "videoCall")
                        },
                        on: {
                            click: function(e) {
                                return t.initiateCall(!0, !1)
                            }
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "video-chat"
                        }
                    })], 1) : t._e(), t.webrtcOptions.screen ? a("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            "aria-label": t.$i18n("rollover", "screenShare"),
                            "data-text": t.$i18n("rollover", "screenShare")
                        },
                        on: {
                            click: function(e) {
                                return t.initiateCall(!1, !0)
                            }
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "screenshare"
                        }
                    })], 1) : t._e()], 1) : t._e(), t.isHamburgerMenuVisible && !t.needConsent ? a("tawk-dropdown", {
                        ref: "toolbar-menu",
                        staticClass: "tawk-toolbar-menu",
                        attrs: {
                            isOpen: t.isOpen,
                            position: t.isRTL ? "left" : "right",
                            role: "menu"
                        }
                    }, [a("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        ref: "toolbar-button",
                        staticClass: "tawk-header-text tawk-margin-auto-left tawk-flex-none tawk-button-hover",
                        attrs: {
                            isText: !0,
                            inverse: !0,
                            "aria-label": t.$i18n("rollover", "chatMenu"),
                            "data-text": t.$i18n("rollover", "chatMenu")
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleDropdown.apply(null, arguments)
                            }
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "hamburger-menu"
                        }
                    })], 1), a("div", {
                        attrs: {
                            slot: "menu"
                        },
                        slot: "menu"
                    }, [a("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.nameForm
                        }
                    }, [a("span", {
                        staticStyle: {
                            width: "25px"
                        }
                    }, [a("tawk-icon", {
                        staticStyle: {
                            width: "20px"
                        },
                        attrs: {
                            type: "change-name",
                            size: "small"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "change_name")) + " ")]), t.emailTranscriptEnabled ? a("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.emailTranscriptForm
                        }
                    }, [a("span", {
                        staticStyle: {
                            width: "25px"
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "email-transcript",
                            size: "small"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "email_transcript")) + " ")]) : t._e(), a("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.toggleLocalSound
                        }
                    }, [t.isSoundEnabled && t.localSoundEnabled ? a("div", [a("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "sound-on",
                            size: "medium"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "sound_on")) + " ")]) : a("div", [a("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "sound-off",
                            size: "medium"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "sound_off")) + " ")])]), t.isPopup ? t._e() : a("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: t.popoutWidget
                        }
                    }, [a("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "pop-out",
                            size: "medium"
                        }
                    })], 1), t._v(t._s(t.$i18n("menu", "popout_widget")) + " ")]), t.hasChatStarted ? a("tawk-button", {
                        staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                        attrs: {
                            isText: !0,
                            size: "small"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("showEndChat")
                            }
                        }
                    }, [a("span", {
                        staticStyle: {
                            width: "1.6rem"
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "end-chat",
                            size: "small"
                        }
                    })], 1), t._v(" " + t._s(t.$i18n("menu", "end_chat_session")) + " ")]) : t._e()], 1)], 1) : t._e(), t.isPopup || t.isRoundWidget && !t.mobileBrowserName ? t._e() : a("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        staticClass: "tawk-header-text tawk-flex-none tawk-button-hover tawk-custom-color",
                        attrs: {
                            isText: !0,
                            "data-text": t.$i18n("rollover", "minimize"),
                            "aria-label": t.$i18n("rollover", "minimize")
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleWidget.apply(null, arguments)
                            }
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "close",
                            size: "small"
                        }
                    })], 1)], 1)])
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        "6bf7": function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("5a60"),
                    n = a("5688"),
                    o = a("7ea7"),
                    c = a("f2ef"),
                    l = a("3558"),
                    u = a("411f"),
                    h = a("87dd");

                function d(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function m(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(a), !0).forEach((function(e) {
                            w(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function w(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "MaximizeWidget",
                    components: {
                        IFrame: r.a,
                        CallWidget: function() {
                            return a.e("chunk-495e3f59").then(a.bind(null, "bcae"))
                        },
                        EndChat: function() {
                            return a.e("chunk-2d0e982e").then(a.bind(null, "8e9d"))
                        },
                        InactiveOverlay: function() {
                            return a.e("chunk-2d0af2da").then(a.bind(null, "0ce6"))
                        },
                        Toolbar: n.a,
                        TawkAlert: i.TawkAlert,
                        TawkOverlay: i.TawkOverlay,
                        HomeView: c.a,
                        ChatView: l.a,
                        MaximizeFooter: o.a,
                        PrechatView: u.a
                    },
                    mixins: [h.a],
                    data: function() {
                        return {
                            cssLink: "".concat("https://embed.tawk.to/_s/v4/app/619bb958bf7", "/css/max-widget.css"),
                            classString: "",
                            showEndChat: !1,
                            noZoomMetaTag: null,
                            resizeHeightTo: null,
                            formIsOpen: !1,
                            isDraggedOver: !1,
                            originalBodyStyle: null,
                            isLoaded: !1,
                            isChatStatus: {},
                            routeLoadedTimeout: null,
                            powerImageUrl: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/power.svg"),
                            initialized: !1
                        }
                    },
                    computed: m(m({}, Object(s.c)({
                        maxDimension: "widget/maxDesktop",
                        minDesktop: "widget/minDesktop",
                        chatWindowState: "session/chatWindowState",
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        isRoundWidget: "widget/isRoundWidget",
                        xOffset: "widget/xOffset",
                        yOffset: "widget/yOffset",
                        branding: "widget/branding",
                        features: "widget/features",
                        currentView: "router/getCurrentView",
                        activeProfiles: "chat/activeProfiles",
                        hasChatStarted: "chat/hasChatStarted",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        isPopup: "widget/isPopup",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        isEmbedded: "widget/isEmbedded",
                        hasChatEnded: "chat/hasChatEnded",
                        needConsent: "session/needConsent",
                        isInactive: "session/isInactive",
                        isRight: "widget/isRight",
                        isBottom: "widget/isBottom",
                        isCenter: "widget/isCenter",
                        isOverlayOpen: "overlay/isOpen",
                        getHistory: "router/getHistory",
                        hasLiveChat: "widget/hasLiveChat",
                        webrtcOptions: "widget/webrtcOptions",
                        agentsCount: "chat/agentsCount",
                        currentRoute: "router/current",
                        isReconnecting: "session/isReconnecting",
                        chatOrder: "chat/chatOrder",
                        unreadMessageCount: "chat/unreadMessageCount",
                        desktopVisibility: "widget/desktopVisibility",
                        showMessagePreview: "widget/showMessagePreview",
                        firstIncoming: "chat/firstIncoming",
                        isReady: "socket/isReady"
                    })), {}, {
                        width: function() {
                            return this.isPopup || this.mobileBrowserName || this.isEmbedded ? "100%" : this.maxDimension.width + "px"
                        },
                        height: function() {
                            if (this.isPopup || this.mobileBrowserName || this.isEmbedded) return "100%";
                            if (this.resizeHeightTo) return this.resizeHeightTo + "px";
                            if (this.isRoundWidget) {
                                var t = this.minDesktop.height + this.yOffset + 10;
                                if (this.maxDimension.height + t > window.innerHeight) return "".concat(window.innerHeight - t - 10, "px")
                            } else if (this.maxDimension.height >= window.innerHeight) return "".concat(window.innerHeight - 10, "px");
                            return "".concat(this.maxDimension.height, "px")
                        },
                        styleObject: function() {
                            var t, e = {
                                "border-radius:": "".concat(this.borderRadius, " !important;"),
                                "height:": "".concat(this.height, " !important;"),
                                "width:": "".concat(this.width, " !important;"),
                                "min-height:": "".concat(this.height, " !important;"),
                                "min-width:": "".concat(this.width, " !important;"),
                                "max-height:": "".concat(this.height, " !important;"),
                                "max-width:": "".concat(this.width, " !important;")
                            };
                            return this.isPopup || this.isEmbedded ? e["position:"] = "absolute !important;" : e["position:"] = "fixed !important;", this.isPopup || this.mobileBrowserName || this.isEmbedded ? (e["bottom:"] = "0px !important;", e["right:"] = "0px !important;", e["left:"] = "0px !important;", e["top:"] = "0px !important;") : (t = this.isCenter && this.isRoundWidget ? this.minDesktop.height + this.yOffset + 10 : 10, this.isRight ? e["right:"] = "".concat(t, "px !important;") : e["left:"] = "".concat(t, "px !important;"), this.isRoundWidget ? this.isBottom ? e["bottom:"] = "".concat(this.minDesktop.height + this.yOffset + 10, "px !important;") : (e["top:"] = "".concat(this.minDesktop.height + this.yOffset + 10, "px !important;"), e["bottom:"] = "auto !important;") : e["bottom:"] = "0px !important;"), "max" === this.chatWindowState || this.isPopup || this.isEmbedded ? e["display:"] = "block !important;" : e["display:"] = "none !important;", m(m({}, this.genericStyles), e)
                        },
                        borderRadius: function() {
                            return this.isPopup || this.mobileBrowserName || this.isEmbedded ? "0px" : this.isRoundWidget ? "5px" : "5px 5px  0 0"
                        },
                        borderRadiusTop: function() {
                            return this.isPopup || this.mobileBrowserName || this.isEmbedded ? "0px" : "5px 5px 0 0"
                        },
                        hasHomeView: function() {
                            if (this.hasChatEnded) return !0;
                            var t = this.states[this.pageStatus];
                            return !t || !t.body || 1 !== t.body.length || "chat" !== t.body[0].type
                        },
                        showBackButton: function() {
                            return this.currentView && ("chat" === this.currentView.path || "agents" === this.currentView.path || "prechat" === this.currentView.path) && this.hasHomeView && ("agents" === this.currentView.path || !this.isOverlayOpen)
                        },
                        isToolbarElementsVisible: function() {
                            return !(!this.mobileBrowserName && this.isRoundWidget && "/" === this.currentRoute && (void 0 === this.webrtcOptions || !this.webrtcOptions.enabled || this.isPrechatEnabled && !this.prechatFormSubmitted))
                        },
                        isChatInputBottom: function() {
                            var t = !1,
                                e = this.states[this.pageStatus];
                            return e && e.body.length && (t = "chat" === e.body[e.body.length - 1].type), t
                        },
                        showChatInput: function() {
                            return this.currentView && ("/" === this.currentView.path && (this.hasChatStarted || this.isChatInputBottom) || "chat" === this.currentView.path)
                        },
                        hasPrechatHistory: function() {
                            if (0 === this.getHistory.length) return !1;
                            var t = !1;
                            return this.getHistory.filter((function(e) {
                                "prechat" === e && (t = !0)
                            })), t
                        },
                        isHomeViewVisible: function() {
                            return this.needConsent || "chat" !== this.currentRoute && "agents" !== this.currentRoute && "prechat" !== this.currentRoute && this.hasHomeView && (!this.hasPrechatHistory || this.prechatFormSubmitted)
                        }
                    }),
                    watch: {
                        chatWindowState: function(t) {
                            var e = this;
                            "max" === t ? (this.classString = "open", this.openView(), this.formIsOpen && this.resizeFrame(), this.isChatStatus["display:"] = "block !important;") : (this.classString = "closed", this.noZoomMetaTag.content = "", this.noZoomMetaTag.parentNode && this.noZoomMetaTag.parentNode.removeChild(this.noZoomMetaTag), null !== this.originalBodyStyle && (document.body.style.cssText = this.originalBodyStyle), this.mobileBrowserName ? this.isChatStatus["display:"] = "none !important;" : setTimeout((function() {
                                e.isChatStatus["display:"] = "none !important;"
                            }), 250))
                        },
                        pageStatus: function() {
                            "max" === this.chatWindowState && this.openView(), "offline" === this.pageStatus && (this.showOverlay(!1), this.routerPush("/"), this.clearHistory())
                        },
                        unreadMessageCount: function(t) {
                            this.isPopup || this.isEmbedded || (!this.mobileBrowserName && !this.desktopVisibility.show && t > 0 && "max" !== this.chatWindowState && this.updateChatWindowState("max"), !this.firstIncoming || this.mobileBrowserName || this.showMessagePreview || "max" === this.chatWindowState || this.updateChatWindowState("max"))
                        }
                    },
                    methods: m(m({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        updateRoute: "router/updateRoute",
                        toggleWidget: "session/toggleWidget",
                        toggleLocalSound: "widget/toggleLocalSound",
                        showOverlay: "overlay/showOverlay",
                        routerBack: "router/routerBack",
                        clearHistory: "router/clearHistory",
                        updateChatWindowState: "session/updateChatWindowState",
                        toggleFocus: "widget/toggleFocus"
                    })), {}, {
                        triggerClick: function() {
                            this.$store.dispatch("session/toggleWidget")
                        },
                        openView: function() {
                            if (this.initialized = !0, this.mobileBrowserName) {
                                var e = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
                                t.Tawk_Window.isMobileOptimizedWebsite || null === this.noZoomMetaTag || (t.Tawk_Window.metaContent || "" !== this.noZoomMetaTag.content ? t.Tawk_Window.metaContent && !t.Tawk_Window.hasNoScale && e && e.setAttribute("content", t.Tawk_Window.metaContent + ", user-scalable=no") : (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no", this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag)));
                                var a = document.body;
                                this.originalBodyStyle = a.style.cssText;
                                for (var s = ["height", "min-height", "max-height", "width", "min-width", "max-width"], i = 0; i < s.length; i++) a.style.setProperty(s[i], "100%", "important");
                                a.style.setProperty("overflow", "hidden", "important"), a.style.setProperty("position", "fixed", "important")
                            }
                            if (!this.currentView && this.hasHomeView && this.routerPush("/"), "offline" !== this.pageStatus) return this.hasHomeView || this.prechatFormSubmitted || !this.isPrechatEnabled ? void(this.currentView && ("/" !== this.currentRoute || this.hasHomeView) || (this.hasLiveChat && this.hasChatStarted || !this.hasHomeView ? (this.routerPush("chat"), this.showOverlay(!1)) : this.showOverlay(!1))) : this.routerPush("prechat");
                            this.showOverlay(!1)
                        },
                        loaded: function() {
                            var e = this;
                            if (this.hasHomeView || (this.updateRoute({
                                    path: "chat",
                                    hasBack: !1
                                }), this.updateRoute({
                                    path: "prechat",
                                    hasBack: !1
                                })), (this.isPopup || this.isEmbedded || "max" === this.chatWindowState) && this.openView(), t.Tawk_Window.eventBus.$on("formOpened", (function() {
                                    "max" === e.chatWindowState ? e.resizeFrame() : e.formIsOpen = !0
                                })), t.Tawk_Window.eventBus.$on("formClosed", (function() {
                                    e.resizeHeightTo = null, e.formIsOpen = !1
                                })), t.Tawk_Window.eventBus.$on("resetState", (function() {
                                    e.$store.commit("router/changeCurrentView", "/"), t.Tawk_Window.activityMonitor.setupMaxWidgetListeners()
                                })), !this.isPopup && !this.isEmbedded) {
                                var a, s, i = "",
                                    r = "tawkMaxOpen",
                                    n = "tawkMaxClose",
                                    o = this.$el.id;
                                this.isBottom ? (a = "transform:translate(0, 30px);", s = "transform:translate(0, 0px);") : this.isCenter ? this.isRight ? (a = "transform:translate(30px,0);", s = "transform:translate(0px,0);") : (a = "transform:translate(-30px,0);", s = "transform:translate(0px,0);") : (a = "transform:translate(0, -30px);", s = "transform:translate(0, 0px);");
                                var c, l = "{0%{opacity:0;" + a + ";}to{opacity:1;" + s + "}}";
                                i += "@keyframes " + r + l, i += "@-moz-keyframes " + r + l, i += "@-webkit-keyframes " + r + l, i += "#" + o + ".open{animation : " + r + " .25s ease!important;}", this.mobileBrowserName || (this.isRoundWidget, i += "@keyframes " + n + (c = "{from{opacity: 1;" + s + ";}to{opacity: 0;" + a + ";}}"), i += "@-moz-keyframes " + n + c, i += "@-webkit-keyframes " + n + c, i += "#" + o + ".closed{animation: " + n + " .25s ease!important}");
                                var u = document.head,
                                    h = document.createDocumentFragment(),
                                    d = document.createElement("style"),
                                    m = document.createTextNode(i);
                                d.type = "text/css", h.appendChild(d), u.appendChild(h), d.styleSheet ? d.styleSheet.cssText = m.nodeValue : d.appendChild(m)
                            }
                            t.Tawk_Window.activityMonitor.setupMaxWidgetListeners()
                        },
                        widgetFocus: function(e) {
                            t.Tawk_Window.eventBus.$emit("widgetOnFocus", e)
                        },
                        resizeFrame: function() {
                            var t = this,
                                e = 0,
                                a = 0,
                                s = 0;
                            this.isPopup || this.mobileBrowserName || this.isEmbedded || setTimeout((function() {
                                if (!t.isOverlayOpen && t.$refs["main-toolbar"] && t.$refs["main-toolbar"].$el && (e = t.$refs["main-toolbar"].$el.offsetHeight), t.isOverlayOpen && t.$refs["view-overlay"] && t.$refs["view-overlay"].$el.children[0] && (e = t.$refs["view-overlay"].$el.children[0].offsetHeight), !t.isOverlayOpen && t.$refs["main-footer"] && (a = t.$refs["main-footer"].$el.offsetHeight), t.isOverlayOpen && t.$refs["overlay-footer"] && (a = t.$refs["overlay-footer"].$el.offsetHeight), t.$refs["router-view"] && t.$refs["router-view"].$children.length) {
                                    var i = t.$refs["router-view"].$children.length ? t.$refs["router-view"].$children[0] : null;
                                    i && i.$refs && i.$refs["tawk-inner-panel"] && (s = i.$refs["tawk-inner-panel"].offsetHeight)
                                }
                                if (!t.$refs["router-view"].$children.length) {
                                    var r;
                                    "chat" === t.currentRoute && t.$refs["chat-view"] ? r = t.$refs["chat-view"].$refs["tawk-inner-panel"] : "prechat" === t.currentRoute && t.$refs["prechat-view"] ? r = t.$refs["prechat-view"].$refs["tawk-inner-panel"] : t.$refs["home-view"] && (r = t.$refs["home-view"].$refs["tawk-inner-panel"]);
                                    var n = r ? r.lastChild : null;
                                    if (n && 0 === n.offsetHeight) return t.resizeHeightTo = null;
                                    s = r ? r.offsetHeight : 0
                                }
                                return 0 === s ? t.resizeHeightTo = null : (s < 250 && (s = 250), 0 === s ? t.resizeHeightTo = null : void((s += e + a) && t.maxDimension.height > s + 10 && (t.resizeHeightTo = s + 10)))
                            }), 300)
                        },
                        handleOverlayBack: function() {
                            this.routerBack(), this.isDraggedOver = !1
                        },
                        checkRouteLoaded: function() {
                            var t = this;
                            clearTimeout(this.routeLoadedTimeout), void 0 !== this.$refs["router-view"] ? this.isLoaded = !0 : this.routeLoadedTimeout = setTimeout((function() {
                                t.checkRouteLoaded()
                            }), 1e3)
                        },
                        handleFocus: function() {
                            this.toggleFocus(!0)
                        },
                        handleBlur: function() {
                            this.toggleFocus(!1)
                        }
                    }),
                    mounted: function() {
                        this.noZoomMetaTag = document.createElement("meta"), this.noZoomMetaTag.name = "viewport", this.checkRouteLoaded(), this.$el.contentWindow.addEventListener("focus", this.handleFocus), this.$el.contentWindow.addEventListener("blur", this.handleBlur)
                    },
                    beforeDestroy: function() {
                        this.$el.contentWindow.removeEventListener("focus", this.handleFocus), this.$el.contentWindow.removeEventListener("blur", this.handleBlur)
                    }
                }
            }).call(this, a("c8ba"))
        },
        "702b": function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("38d6"),
                    r = a("f0b4"),
                    n = a("9f3e"),
                    o = a("31dd"),
                    c = a("dbd1");

                function l(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? l(Object(a), !0).forEach((function(e) {
                            h(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function h(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "Home",
                    components: {
                        BaseFrame: n.a,
                        BaseHeader: o.a,
                        BaseBody: c.a,
                        HomeHeader: i.default,
                        HomeBody: r.a,
                        ConsentForm: function() {
                            return a.e("chunk-01913470").then(a.bind(null, "9114"))
                        }
                    },
                    props: {
                        isVisible: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: u({}, Object(s.c)({
                        states: "widget/states",
                        pageStatus: "session/pageStatus",
                        hasChatStarted: "chat/hasChatStarted",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        needConsent: "session/needConsent"
                    })),
                    watch: {
                        pageStatus: function(e) {
                            "offline" === e ? t.Tawk_Window.eventBus.$emit("formOpened") : t.Tawk_Window.eventBus.$emit("formClosed")
                        },
                        isVisible: function() {
                            for (var t = this.$refs["tawk-main-panel"].querySelectorAll(".tawk-video-el"), e = 0; e < t.length; e++) {
                                var a = t[e];
                                "about:blank" !== a.src ? a.src = "about:blank" : a.getAttribute("data-src") && (a.src = a.getAttribute("data-src"))
                            }
                        }
                    },
                    data: function() {
                        return {
                            headerClass: "",
                            isLoaded: !1
                        }
                    },
                    methods: u({}, Object(s.b)({
                        routerPush: "router/routerPush"
                    })),
                    mounted: function() {
                        "offline" === this.pageStatus && t.Tawk_Window.eventBus.$emit("formOpened")
                    },
                    destroyed: function() {
                        t.Tawk_Window.eventBus.$emit("formClosed")
                    }
                }
            }).call(this, a("c8ba"))
        },
        "7ea7": function(t, e, a) {
            "use strict";
            var s = a("f3c3").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        ref: "main-footer",
                        class: t.mainFooterClasses,
                        style: {
                            borderRadius: t.borderRadiusBottom
                        },
                        on: {
                            dragover: t.dragover,
                            dragleave: t.dragleave,
                            drop: t.drop,
                            paste: t.paste
                        }
                    }, [a("tawk-branding", {
                        staticClass: "tawk-text-center\n\t\t\ttawk-padding-small",
                        attrs: {
                            whitelabel: t.whitelabel,
                            powerImageUrl: t.powerImageUrl,
                            tawkToUrl: t.branding.url
                        }
                    }), t.isDraggedOver ? a("div", {
                        staticClass: "tawk-flex\n\t\t\ttawk-flex-column\n\t\t\ttawk-flex-center\n\t\t\ttawk-flex-middle",
                        attrs: {
                            id: "tawk-dragover-container"
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "attach-file",
                            size: "xlarge"
                        }
                    }), a("p", [t._v(t._s(t.$i18n("rollover", "uploadFile")))])], 1) : t._e(), t.needConsent || "offline" === t.pageStatus || t.isPrechatEnabled && !t.prechatFormSubmitted || !t.isLiveChatFeatureEnabled ? t._e() : a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showChatInput,
                            expression: "showChatInput"
                        }],
                        ref: "tawk-chatinput-container",
                        attrs: {
                            id: "tawk-chatinput-container"
                        }
                    }, [a("tawk-chat-input", {
                        ref: "tawk-chatinput",
                        attrs: {
                            placeholder: t.inputPlaceholder,
                            features: t.features
                        },
                        on: {
                            messageTyping: t.messageTyping,
                            sendMessage: t.sendMessage,
                            ratingClicked: t.ratingClicked,
                            sendFiles: t.sendFiles,
                            focus: t.chatFocus,
                            blur: t.chatBlur
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        9534: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("9f3e"),
                    r = a("31dd"),
                    n = a("dbd1"),
                    o = a("f0b4"),
                    c = a("38d6");

                function l(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? l(Object(a), !0).forEach((function(e) {
                            h(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function h(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "prechat-form",
                    components: {
                        BaseFrame: i.a,
                        BaseHeader: r.a,
                        BaseBody: n.a,
                        HomeHeader: c.default,
                        HomeBody: o.a
                    },
                    data: function() {
                        return {
                            isDropdownOpen: !1,
                            isSubmitting: !1,
                            submissionError: !1,
                            submissionSuccess: !1,
                            headerClass: ""
                        }
                    },
                    computed: u({}, Object(s.c)({
                        states: "widget/states",
                        departments: "session/departments",
                        name: "visitor/name",
                        email: "visitor/getEmailValue",
                        pageStatus: "session/pageStatus"
                    })),
                    watch: {
                        pageStatus: function(t) {
                            "offline" === t && this.showOverlay(!1)
                        }
                    },
                    methods: u(u({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay",
                        removeRoute: "router/removeRoute"
                    })), {}, {
                        submitForm: function(e) {
                            var a = this;
                            e.hasError || (this.isSubmitting = !0, this.submissionError = !1, this.submissionSuccess = !1, t.Tawk_Window.app.$socket.publish("notifyPrechat", e.formData, (function(s) {
                                var i = "";
                                a.isSubmitting = !1, s ? a.submissionError = !0 : (a.$store.commit("session/setPrechatSubmitted", !0), t.Tawk_Window.jsApi.triggerApiHandlers("onPrechatSubmit", e.formData.questions), a.$nextTick((function() {
                                    if (e.formData.questions && e.formData.questions.length > 0)
                                        for (var s = 0, r = e.formData.questions.length; s < r; s++) i += "".concat(e.formData.questions[s].label, " : ").concat(e.formData.questions[s].answer), s !== r - 1 && (i += "\r\n");
                                    i && t.Tawk_Window.chatManager.sendMessageToServer(i), a.routerPush("chat"), a.removeRoute("prechat"), a.showOverlay(!1)
                                })))
                            })))
                        }
                    }),
                    mounted: function() {
                        setTimeout((function() {
                            t.Tawk_Window.eventBus.$emit("formOpened")
                        }), 50)
                    },
                    destroyed: function() {
                        t.Tawk_Window.eventBus.$emit("formClosed")
                    }
                }
            }).call(this, a("c8ba"))
        },
        aacb: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("3d78");

                function n(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? n(Object(a), !0).forEach((function(e) {
                            c(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function c(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "HomeBody",
                    props: {
                        state: {
                            type: String,
                            default: "online"
                        },
                        overwriteSubmit: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    components: {
                        TawkCard: i.TawkCard,
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton,
                        ContentCard: r.a,
                        Conversations: function() {
                            return a.e("chunk-b90b0856").then(a.bind(null, "30be"))
                        },
                        RestartChat: function() {
                            return a.e("chunk-3c7eb82e").then(a.bind(null, "a3af"))
                        }
                    },
                    data: function() {
                        return {
                            isSubmitting: !1,
                            submissionError: !1,
                            submissionSuccess: !1,
                            hasConversationCard: !1
                        }
                    },
                    computed: o(o({}, Object(s.c)({
                        states: "widget/states",
                        chatOrder: "chat/chatOrder",
                        hasLiveChat: "widget/hasLiveChat",
                        hasChatEnded: "chat/hasChatEnded",
                        chatEndVersion: "chat/chatEndVersion",
                        pageStatus: "session/pageStatus"
                    })), {}, {
                        body: function() {
                            return this.state && this.states[this.state] ? this.states[this.state].body : []
                        },
                        noPrechatForm: function() {
                            var t = !0;
                            if ("prechat" === this.state) {
                                for (var e = 0; e < this.body.length; e++)
                                    if ("form" === this.body[e].type) {
                                        t = !1;
                                        break
                                    }
                            } else t = !1;
                            return t
                        },
                        isHistoryCardEnabled: function() {
                            for (var t = !1, e = 0; e < this.body.length; e++) {
                                if ("previous-conversations" === this.body[e].type) {
                                    t = !0;
                                    break
                                }
                            }
                            return t
                        }
                    }),
                    methods: o(o({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay",
                        loadHistory: "history/load",
                        updateShowChat: "chat/updateShowChat"
                    })), {}, {
                        submitForm: function(e) {
                            var a = this;
                            if (!e.hasError) {
                                if (this.isSubmitting = !0, this.submissionError = !1, this.submissionSuccess = !1, this.overwriteSubmit) return this.$emit("submitForm", e);
                                e.formData.questions.unshift({
                                    label: this.$i18n("form", "SubmittedFrom"),
                                    answer: window.location.href
                                }), t.Tawk_Window.app.$socket.publish("notifyOfflineMessage", e.formData, (function(s) {
                                    a.isSubmitting = !1, a.$emit("submitting", !1), s ? a.submissionError = !0 : (a.routerPush("offline-success"), a.showOverlay(!0), a.$store.dispatch("visitor/updateVisitorInformation", {
                                        n: e.formData.name,
                                        e: e.formData.email
                                    }), t.Tawk_Window.jsApi.triggerApiHandlers("onOfflineSubmit", e.formData))
                                }))
                            }
                        }
                    })
                }
            }).call(this, a("c8ba"))
        },
        bfec: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("4cd0"),
                    n = a("3519"),
                    o = a("9f3e"),
                    c = a("31dd"),
                    l = a("dbd1"),
                    u = a("3f09"),
                    h = a("e375");

                function d(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function m(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(a), !0).forEach((function(e) {
                            w(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function w(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "chat-main",
                    mixins: [u.a],
                    components: {
                        BaseFrame: o.a,
                        BaseHeader: c.a,
                        BaseBody: l.a,
                        ChatHeader: r.a,
                        ChatBody: n.a,
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton,
                        TawkAvatar: i.TawkAvatar,
                        ProgressBar: h.a,
                        TawkAlert: i.TawkAlert
                    },
                    computed: m({}, Object(s.c)({
                        chatVersion: "chat/chatVersion",
                        incomingMessage: "chat/incomingMessage",
                        agentProfile: "chat/agentProfile",
                        chatMessages: "chat/chatMessages",
                        unreadMessageCount: "chat/unreadMessageCount",
                        lastMessageTimestamp: "session/lastMessageTimestamp",
                        showAgentTyping: "widget/showAgentTyping",
                        hasChatEnded: "chat/hasChatEnded",
                        uploadFiles: "chat/uploadFiles",
                        lastScrollPositon: "chat/lastScrollPositon",
                        outgoingMessage: "chat/outgoingMessage",
                        historyProcessed: "chat/historyProcessed",
                        messageBlocks: "chat/messageBlocks",
                        emojiEnabled: "widget/emojiEnabled",
                        currentRoute: "router/current",
                        chatWindowState: "session/chatWindowState",
                        isFocus: "widget/isFocus"
                    })),
                    data: function() {
                        return {
                            barMessageId: null,
                            isLoading: !1,
                            barMessageRerence: null,
                            unseenMessages: [],
                            showNotification: !1,
                            agentTyping: {},
                            clearBarTimeout: 0,
                            tooBigFileList: null,
                            showLatest: !1
                        }
                    },
                    watch: {
                        incomingMessage: function(t, e) {
                            (!e || t && e.cver && e.cver < t.cver) && this.displayMessages({
                                message: t,
                                isIncoming: !0
                            })
                        },
                        unreadMessageCount: function(t) {
                            0 === t && this.clearBarMessageId()
                        },
                        hasChatEnded: function(t) {
                            t && this.clearData()
                        },
                        uploadFiles: function() {
                            this.scrollToBottom()
                        },
                        outgoingMessage: function(t) {
                            this.isLoading || t && (this.displayMessages({
                                message: t,
                                isIncoming: !0
                            }), this.$store.commit("chat/setOutgoingMessage", null))
                        },
                        historyProcessed: function(t) {
                            t && this.processChatMessages()
                        },
                        currentRoute: function(t, e) {
                            "chat" === t && (this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update(), this.checkSeenMessageViewport(), this.checkBarPosition()), "chat" === e && this.saveScrollPosition()
                        },
                        chatWindowState: function(t) {
                            "max" === t && "chat" === this.currentRoute && (this.toggleFocus(!0), this.checkSeenMessageViewport())
                        },
                        isFocus: function(t) {
                            t && "chat" === this.currentRoute && this.checkSeenMessageViewport()
                        }
                    },
                    created: function() {
                        var e = this;
                        t.Tawk_Window.eventBus.$on("tooBigFileList", (function(t) {
                            e.tooBigFileList = t.join(", ")
                        }))
                    },
                    mounted: function() {
                        var e = this;
                        this.processChatMessages(), this.showAgentTyping && (t.Tawk_Window.eventBus.$on("agentIsTyping", (function(t) {
                            var a = e.agentProfile(t.rsc),
                                s = e.isScrollBarBottom();
                            a && (e.updateAgentTyping(t, a), s && e.scrollToBottom())
                        })), t.Tawk_Window.eventBus.$on("agentStopedTyping", (function(t) {
                            e.removeAgentIsTyping(t.rsc)
                        }))), t.Tawk_Window.eventBus.$on("callDataUpdated", (function(t) {
                            for (var a = e.isScrollBarBottom(), s = 0; s < e.messageBlocks.length; s++) {
                                var i = e.messageBlocks[s];
                                if ("call" === i.messageType && i.ownerId === t.callId) {
                                    i.callData = t;
                                    break
                                }
                            }
                            a && e.scrollToBottom()
                        }))
                    },
                    beforeDestroy: function() {
                        this.saveScrollPosition(), this.clearData()
                    },
                    methods: m(m({}, Object(s.b)({
                        clearMessageBlock: "chat/clearMessageBlock",
                        toggleAgentAvatarToolbar: "widget/toggleAgentAvatarToolbar",
                        toggleFocus: "widget/toggleFocus"
                    })), {}, {
                        updateAgentTyping: function(t, e) {
                            this.$set(this.agentTyping, t.rsc, e.profileImage)
                        },
                        scrollToBottom: function(t) {
                            var e = this.$refs["tawk-chat-panel"];
                            e && setTimeout((function() {
                                e.scrollTop = t || e.scrollHeight
                            }), 300)
                        },
                        handleScrollProcess: function() {
                            this.checkBarPosition(), this.checkSeenMessageViewport(), this.handleAgentsAvatarToolbar()
                        },
                        scrollToEl: function(t) {
                            if (t) {
                                var e = this.$refs["chat-body"],
                                    a = e ? e.$refs[t] : null,
                                    s = this.$refs["tawk-chat-panel"];
                                a && a.length && s && (void 0 !== a[0].offsetTop ? s.scrollTop = a[0].offsetTop - 40 : s.scrollTop = a[0].offsetTop, this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update())
                            }
                        },
                        clearBarMessageId: function() {
                            var t = this;
                            clearTimeout(this.clearBarTimeout), this.clearBarTimeout = setTimeout((function() {
                                t.barMessageId = null, t.barMessageRerence && (t.barMessageRerence.showBar = !1), t.showNotification = !1, t.barMessageRerence = null
                            }), 1e3)
                        },
                        checkSeenMessageViewport: function() {
                            var t, e = -1,
                                a = this.$refs["chat-body"];
                            if (0 !== this.unseenMessages.length && a && this.isFocus) {
                                for (var s = 0; s < this.unseenMessages.length; s++) {
                                    t = this.unseenMessages[s];
                                    var i = a.$refs[t.messageId];
                                    if (i && this.chatElementInView(i) && t.timeStamp > this.lastMessageTimestamp) {
                                        e = s;
                                        break
                                    }
                                } - 1 !== e && ((t = this.unseenMessages[this.unseenMessages.length - 1]) && (this.unseenMessages = [], this.$store.dispatch("session/updateVisitorChatSeen", t.timeStamp)))
                            }
                        },
                        chatElementInView: function(t) {
                            var e = this.$refs["tawk-chat-panel"];
                            return !!e && !!(t[0].offsetTop >= e.scrollTop && t[0].offsetTop <= e.scrollTop + e.offsetHeight && 0 !== t[0].clientWidth && 0 !== t[0].clientHeight)
                        },
                        removeAgentIsTyping: function(t) {
                            this.$delete(this.agentTyping, t)
                        },
                        checkBarPosition: function() {
                            var t = this;
                            this.$nextTick((function() {
                                if (t.showNotification = !1, t.barMessageRerence && t.barMessageId) {
                                    var e = t.$refs[t.barMessageId],
                                        a = t.$refs["chat-body"];
                                    if (a && a.$refs[t.barMessageId] && (e = a.$refs[t.barMessageId]), e)
                                        if (t.chatElementInView(e)) t.clearBarMessageId();
                                        else {
                                            var s = t.$refs["tawk-chat-panel"];
                                            s && s.scrollTop < e[0].offsetTop && (t.showNotification = !0)
                                        }
                                }
                                t.isScrollBarBottom() || t.showNotification || t.unreadMessageCount ? t.showLatest = !1 : t.showLatest = !0
                            }))
                        },
                        clearData: function() {
                            clearTimeout(this.clearBarTimeout), this.barMessageId = null, this.isLoading = !1, this.barMessageRerence = null, this.unseenMessages = [], this.showNotification = !1, this.agentTyping = [], this.clearBarTimeout = 0
                        },
                        retryUpload: function(e) {
                            for (var a = 0; a < this.uploadFiles.length; a++)
                                if (this.uploadFiles[a].handle === e.handle) {
                                    this.uploadFiles.splice(a, 1);
                                    break
                                }
                            t.Tawk_Window.chatManager.uploadFiles([e.fileData])
                        },
                        processChatMessages: function() {
                            var t = this;
                            this.isLoading = !0;
                            var e = !1;
                            for (var a in this.clearMessageBlock(), this.chatMessages) {
                                var s = this.chatMessages[a];
                                this.outgoingMessage && !e && s.messageId === this.outgoingMessage.messageId ? (e = !0, this.displayMessages({
                                    message: s,
                                    isIncoming: !0
                                })) : this.displayMessages({
                                    message: s
                                })
                            }
                            this.outgoingMessage && !e && this.displayMessages({
                                message: this.outgoingMessage,
                                isIncoming: !0
                            }), this.isLoading = !1, setTimeout((function() {
                                t.barMessageId ? (t.scrollToEl(t.barMessageId), t.checkBarPosition()) : t.scrollToBottom(t.lastScrollPositon), t.checkSeenMessageViewport()
                            }), 1e3 / 66)
                        },
                        imageLoaded: function() {
                            this.isScrollBarBottom() && this.scrollToBottom(), this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update()
                        },
                        handleAgentsAvatarToolbar: function() {
                            if (this.$refs["tawk-home-header"]) {
                                var t = this.$refs["tawk-home-header"].$el.offsetHeight;
                                this.$refs["tawk-chat-panel"].scrollTop > t ? this.toggleAgentAvatarToolbar(!0) : this.toggleAgentAvatarToolbar(!1)
                            }
                        },
                        saveScrollPosition: function() {
                            var t = this.$refs["tawk-chat-panel"];
                            t && this.$store.commit("chat/setLastScrollPosition", this.isScrollBarBottom() ? 9999999999 : t.scrollTop)
                        }
                    })
                }
            }).call(this, a("c8ba"))
        },
        d6a3: function(t, e, a) {
            "use strict";
            a.r(e);
            var s = a("6bf7").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("i-frame", {
                        attrs: {
                            width: t.width,
                            height: t.height,
                            cssLink: t.cssLink,
                            styleObject: t.styleObject,
                            classString: t.classString
                        }
                    }, [a("div", [t.initialized ? a("div", {
                        staticClass: "tawk-max-container tawk-flex tawk-flex-column",
                        class: [!t.isToolbarElementsVisible && "tawk-no-toolbar-elements"],
                        style: {
                            borderRadius: t.borderRadius
                        },
                        on: {
                            click: t.widgetFocus,
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.widgetFocus.apply(null, arguments)
                            }
                        }
                    }, [a("toolbar", {
                        ref: "main-toolbar",
                        attrs: {
                            borderRadiusTop: t.borderRadiusTop,
                            showBackButton: t.showBackButton,
                            currentView: t.currentView,
                            showWebRtcButtons: !0,
                            showAgentAvatars: !0
                        },
                        on: {
                            showEndChat: function(e) {
                                t.showEndChat = !0
                            }
                        }
                    }), t.webrtcOptions && t.webrtcOptions.enabled ? a("call-widget") : t._e(), a("tawk-overlay", {
                        ref: "view-overlay",
                        style: {
                            borderRadius: t.borderRadius
                        },
                        attrs: {
                            isOpen: t.isOverlayOpen,
                            title: t.currentView && t.currentView.title ? t.currentView.title() : "",
                            backTooltipText: t.$i18n("rollover", "back"),
                            headerClass: "tawk-custom-color"
                        },
                        on: {
                            goBack: t.handleOverlayBack
                        }
                    }, [a("div", {
                        attrs: {
                            slot: "options"
                        },
                        slot: "options"
                    }, [a("toolbar", {
                        attrs: {
                            borderRadiusTop: t.borderRadiusTop,
                            currentView: t.currentView
                        },
                        on: {
                            showEndChat: function(e) {
                                t.showEndChat = !0
                            }
                        }
                    })], 1), a("div", {
                        staticClass: "tawk-flex tawk-flex-column",
                        staticStyle: {
                            height: "100%",
                            overflow: "hidden"
                        }
                    }, [a("div", {
                        staticClass: "tawk-flex tawk-flex-column tawk-flex-1 tawk-custom-flex-1"
                    }, [a("div", {
                        staticClass: "tawk-router-view tawk-flex tawk-flex-1 tawk-custom-flex-1"
                    }, [a("tawk-router-view", {
                        ref: "router-view"
                    })], 1), a("maximize-footer", {
                        ref: "overlay-footer"
                    })], 1)])]), t.isInactive ? a("inactive-overlay") : t._e(), t.showEndChat && !t.hasChatEnded ? a("end-chat", {
                        on: {
                            cancelEnd: function(e) {
                                t.showEndChat = !1
                            }
                        }
                    }) : t._e(), a("div", {
                        staticClass: "tawk-flex tawk-flex-column tawk-flex-1"
                    }, [a("div", {
                        staticClass: "tawk-router-view tawk-flex tawk-flex-1"
                    }, [t.isLoaded ? t._e() : a("div", {
                        staticClass: "tawk-flex tawk-flex-middle tawk-flex-center",
                        style: {
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            position: "absolute"
                        }
                    }, [a("div", {
                        staticClass: "tawk-spinner-loader",
                        style: {
                            margin: "1px"
                        }
                    })]), a("transition", {
                        attrs: {
                            name: "slide-fade",
                            mode: "out-in"
                        }
                    }, [!t.hasLiveChat || t.needConsent || !t.chatOrder && !t.hasChatStarted && t.hasHomeView ? t._e() : a("chat-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "chat" === t.currentRoute || "agents" === t.currentRoute,
                            expression: "currentRoute === 'chat' || currentRoute === 'agents'"
                        }],
                        ref: "chat-view"
                    })], 1), a("transition", {
                        attrs: {
                            name: "slide-fade",
                            mode: "out-in"
                        }
                    }, [t.hasLiveChat && !t.needConsent && t.isPrechatEnabled && t.isReady && !t.prechatFormSubmitted && ("prechat" === t.currentRoute || !t.hasHomeView || t.hasPrechatHistory && !t.prechatFormSubmitted) ? a("prechat-view", {
                        ref: "prechat-view"
                    }) : t._e()], 1), a("transition", {
                        attrs: {
                            name: "slide-fade",
                            mode: "out-in"
                        }
                    }, [t.hasHomeView || t.needConsent ? a("home-view", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isHomeViewVisible,
                            expression: "isHomeViewVisible"
                        }],
                        ref: "home-view",
                        attrs: {
                            isVisible: t.isHomeViewVisible && !t.isOverlayOpen
                        }
                    }) : t._e()], 1)], 1), a("maximize-footer", {
                        ref: "main-footer"
                    })], 1), a("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.isReconnecting ? a("tawk-alert", {
                        staticStyle: {
                            position: "absolute",
                            bottom: "16px",
                            left: "16px",
                            right: "16px",
                            width: "auto",
                            "z-index": "10"
                        },
                        attrs: {
                            title: t.$i18n("notifications", "reconnecting"),
                            status: "danger",
                            description: "",
                            icon: "error"
                        }
                    }) : t._e()], 1)], 1) : t._e()])])
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        e375: function(t, e, a) {
            "use strict";
            var s = {
                    name: "progress-bar",
                    props: {
                        handle: {
                            type: String,
                            default: ""
                        },
                        fileName: {
                            type: String,
                            default: ""
                        },
                        percentage: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        progressWidth: function() {
                            return "width : ".concat(this.percentage, "%")
                        }
                    }
                },
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "file-upload-progress"
                    }, [a("div", [t._v(t._s(t.fileName))]), a("div", {
                        staticClass: "progress active tawk-margin-small-top"
                    }, [a("div", {
                        staticClass: "progress-bar",
                        style: t.progressWidth,
                        attrs: {
                            role: "progressbar"
                        }
                    })])])
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        e906: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0");

                function r(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function n(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(a), !0).forEach((function(e) {
                            o(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function o(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "toolbar",
                    components: {
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton,
                        TawkDropdown: i.TawkDropdown,
                        TawkAvatar: i.TawkAvatar
                    },
                    directives: {
                        TawkTooltip: i.TawkTooltip
                    },
                    data: function() {
                        return {
                            isOpen: !1
                        }
                    },
                    props: {
                        currentView: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        borderRadiusTop: {
                            type: String,
                            default: "0px"
                        },
                        hasBackground: {
                            type: Boolean,
                            default: !0
                        },
                        showBackButton: {
                            default: !1
                        },
                        showWebRtcButtons: {
                            type: Boolean,
                            default: !1
                        },
                        showAgentAvatars: {
                            default: !1
                        }
                    },
                    computed: n(n({}, Object(s.c)({
                        isSoundEnabled: "widget/isSoundEnabled",
                        localSoundEnabled: "widget/localSoundEnabled",
                        isRoundWidget: "widget/isRoundWidget",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        hasChatStarted: "chat/hasChatStarted",
                        isPopup: "widget/isPopup",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        pageStatus: "session/pageStatus",
                        isRTL: "widget/isRTL",
                        webrtcOptions: "widget/webrtcOptions",
                        hasLiveChat: "widget/hasLiveChat",
                        agentsCount: "chat/agentsCount",
                        needConsent: "session/needConsent",
                        currentRoute: "router/current",
                        components: "widget/components",
                        emailTranscriptEnabled: "widget/emailTranscriptEnabled",
                        activeProfiles: "chat/activeProfiles",
                        toolbarOptions: "widget/toolbarOptions"
                    })), {}, {
                        showWebrtcOptions: function() {
                            return this.components.webrtc && "offline" !== this.pageStatus && this.webrtcOptions && this.webrtcOptions.enabled && (!this.isPrechatEnabled || this.isPrechatEnabled && this.prechatFormSubmitted) && this.showWebRtcButtons
                        },
                        wrapperClasses: function() {
                            return this.hasBackground ? ["tawk-toolbar", "tawk-card-primary", "tawk-flex", "tawk-card-small", "tawk-flex-none", "tawk-flex-middle", "tawk-custom-color"] : ["tawk-toolbar"]
                        },
                        isLiveChatFeatureEnabled: function() {
                            return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                        },
                        isHamburgerMenuVisible: function() {
                            return "offline" !== this.pageStatus && ("chat" === this.currentRoute || "agents" === this.currentRoute)
                        },
                        isAgentAvatarsVisible: function() {
                            return !(!this.showAgentAvatars || "chat" !== this.currentRoute && "agents" !== this.currentRoute || !(this.activeProfiles.length > 0))
                        },
                        getActiveAgents: function() {
                            var t = this.activeProfiles;
                            return t < 2 ? t : t.slice(0, 1)
                        }
                    }),
                    methods: n(n({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        routerBack: "router/routerBack",
                        toggleLocalSound: "widget/toggleLocalSound",
                        toggleWidget: "session/toggleWidget",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        initiateCall: function(e, a) {
                            t.Tawk_Window.chatManager.initiateCall(e, a)
                        },
                        popoutWidget: function() {
                            t.Tawk_Window.popoutWidget()
                        },
                        toggleDropdown: function() {
                            this.isOpen = !this.isOpen
                        },
                        nameForm: function() {
                            this.isOpen = !1, this.routerPush("name-form"), this.showOverlay(!0)
                        },
                        emailTranscriptForm: function() {
                            this.isOpen = !1, this.routerPush("email-transcript-form"), this.showOverlay(!0)
                        },
                        convertToAvatarLink: function(t) {
                            return t ? 0 === t.indexOf("https://s3.amazonaws.com/tawk-to-pi") || 0 === t.indexOf("https://embed.tawk.to/_s/v4/assets") ? t : "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(t) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg")
                        },
                        toggleAgentsList: function() {
                            this.routerPush("agents"), this.showOverlay(!0)
                        }
                    }),
                    mounted: function() {
                        var e = this;
                        t.Tawk_Window.eventBus.$on("widgetOnFocus", (function(t) {
                            e.$refs["toolbar-button"] && !e.$refs["toolbar-button"].$el.contains(t.target) && (e.isOpen = !1)
                        }))
                    }
                }
            }).call(this, a("c8ba"))
        },
        f0b4: function(t, e, a) {
            "use strict";
            var s = a("aacb").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "tawk-form-width-100 tawk-flex tawk-flex-column"
                    }, [t.hasChatEnded && "prechat" !== t.state && "offline" !== t.state && t.chatEndVersion ? a("div", {
                        staticClass: "card-container"
                    }, [a("restart-chat")], 1) : t._e(), !t.isHistoryCardEnabled && t.chatOrder && t.hasLiveChat && "offline" !== t.pageStatus && "prechat" !== t.state ? a("div", {
                        staticClass: "card-container tawk-flex-first"
                    }, [a("tawk-card", {
                        staticClass: "tawk-home-kb-card",
                        attrs: {
                            color: "inverse",
                            size: "xsmall"
                        }
                    }, [a("conversations", {
                        attrs: {
                            historyEnabled: t.isHistoryCardEnabled
                        }
                    })], 1)], 1) : t._e(), t._l(t.body, (function(e, s) {
                        return a("content-card", {
                            key: s,
                            attrs: {
                                card: e,
                                isSubmitting: t.isSubmitting,
                                submissionError: t.submissionError,
                                body: t.body,
                                state: t.state,
                                hasConversationCard: t.hasConversationCard
                            },
                            on: {
                                "update:hasConversationCard": function(e) {
                                    t.hasConversationCard = e
                                },
                                "update:has-conversation-card": function(e) {
                                    t.hasConversationCard = e
                                },
                                submitForm: t.submitForm
                            }
                        })
                    })), t.noPrechatForm ? a("div", {
                        staticClass: "card-container"
                    }, [a("tawk-card", {
                        staticClass: "tawk-box-shadow-xsmall",
                        attrs: {
                            color: "inverse",
                            size: "small"
                        }
                    }, [a("tawk-button", {
                        staticClass: "tawk-form-width-100 tawk-button-hover tawk-custom-color tawk-custom-border-color",
                        on: {
                            click: function(e) {
                                return t.submitForm({
                                    formData: {}
                                })
                            }
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "mobile-send"
                        }
                    }), t._v(" " + t._s(t.$i18n("form", "StartChatButton")) + " ")], 1)], 1)], 1) : t._e()], 2)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        f2ef: function(t, e, a) {
            "use strict";
            var s = a("702b").a,
                i = a("2877"),
                r = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("base-frame", {
                        staticClass: "tawk-home-view tawk-custom-flex-1"
                    }, [a("base-header", {
                        ref: "tawk-base-header",
                        class: t.headerClass
                    }, [t.needConsent ? t._e() : a("home-header", {
                        ref: "tawk-home-header",
                        attrs: {
                            state: t.pageStatus
                        }
                    })], 1), a("base-body", [t.needConsent ? a("consent-form") : a("home-body", {
                        attrs: {
                            state: t.pageStatus
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        f3c3: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("2f62"),
                    i = a("f0b0"),
                    r = a("7f46");

                function n(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? n(Object(a), !0).forEach((function(e) {
                            c(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function c(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "TawkMaximizeFooter",
                    components: {
                        TawkChatInput: i.TawkChatInput,
                        TawkBranding: i.TawkBranding,
                        TawkIcon: i.TawkIcon
                    },
                    data: function() {
                        return {
                            isDraggedOver: !1,
                            powerImageUrl: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/power.svg")
                        }
                    },
                    computed: o(o({}, Object(s.c)({
                        isPopup: "widget/isPopup",
                        mobileBrowserName: "browserData/mobileBrowserName",
                        isEmbedded: "widget/isEmbedded",
                        hasLiveChat: "widget/hasLiveChat",
                        branding: "widget/branding",
                        needConsent: "session/needConsent",
                        pageStatus: "session/pageStatus",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        getHistory: "router/getHistory",
                        currentView: "router/getCurrentView",
                        features: "widget/features",
                        states: "widget/states",
                        hasChatStarted: "chat/hasChatStarted"
                    })), {}, {
                        borderRadiusBottom: function() {
                            return this.isPopup || this.mobileBrowserName || this.isEmbedded ? "0px" : this.isRoundWidget ? "0 0 5px 5px" : "0px"
                        },
                        whitelabel: function() {
                            if (this.branding.whitelabeled) return {
                                label: r.a.markdownToHtml(this.branding.text),
                                url: this.branding.url,
                                textColor: this.branding.textColor
                            }
                        },
                        isChatInputBottom: function() {
                            var t = !1,
                                e = this.states[this.pageStatus];
                            return e && e.body.length && (t = "chat" === e.body[e.body.length - 1].type), t
                        },
                        isLiveChatFeatureEnabled: function() {
                            return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                        },
                        inputPlaceholder: function() {
                            var t, e = this.states[this.pageStatus];
                            if (e && e.body && e.body.length)
                                for (var a = 0; a < e.body.length; a++) {
                                    var s = e.body[a];
                                    if ("chat" === s.type) {
                                        t = s.content.inputPlaceholder;
                                        break
                                    }
                                }
                            return t
                        },
                        mainFooterClasses: function() {
                            return ["tawk-card", "tawk-card-inverse", "tawk-card-xsmall", "tawk-footer", "tawk-flex-none", this.isDraggedOver ? "has-dragover" : ""]
                        },
                        showChatInput: function() {
                            return this.currentView && ("/" === this.currentView.path && (this.hasChatStarted || this.isChatInputBottom) || "chat" === this.currentView.path)
                        }
                    }),
                    methods: o(o({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        dragover: function(t) {
                            t.preventDefault(), this.features.upload && (this.isDraggedOver = !0)
                        },
                        dragleave: function(t) {
                            t.preventDefault(), this.features.upload && (t.currentTarget.contains(t.relatedTarget) || (this.isDraggedOver = !1))
                        },
                        drop: function(t) {
                            this.hasLiveChat && this.features.upload && (t.preventDefault(), this.isDraggedOver = !1, this.$refs["tawk-chatinput"] && this.$refs["tawk-chatinput"].$refs && this.$refs["tawk-chatinput"].$refs.fileupload && (this.$refs["tawk-chatinput"].$refs.fileupload.files = t.dataTransfer.files, this.$refs["tawk-chatinput"].onFileUpload()))
                        },
                        messageTyping: function(e) {
                            t.Tawk_Window.chatManager.sendMessagePreview(e)
                        },
                        sendMessage: function(e) {
                            t.Tawk_Window.chatManager.sendMessage(e), this.routerPush("chat"), this.showOverlay(!1)
                        },
                        ratingClicked: function(e) {
                            t.Tawk_Window.chatManager.changeRating(e), this.routerPush("chat"), this.showOverlay(!1)
                        },
                        sendFiles: function(e) {
                            t.Tawk_Window.chatManager.uploadFiles(e), this.routerPush("chat"), this.showOverlay(!1)
                        },
                        chatFocus: function() {
                            this.$refs["main-footer"].style.boxShadow = "0px -2px 8px rgba(0,0,0,.1)"
                        },
                        chatBlur: function() {
                            this.$refs["main-footer"].style.boxShadow = "0 0 0 transparent"
                        },
                        paste: function(t) {
                            var e, a = (t.originalEvent || t).clipboardData;
                            a && ((e = a.files).length && !this.features.uploads || e && e.length && (this.$refs["tawk-chatinput"].$refs.fileupload.files = e, this.$refs["tawk-chatinput"].onFileUpload()))
                        }
                    })
                }
            }).call(this, a("c8ba"))
        }
    }
]);