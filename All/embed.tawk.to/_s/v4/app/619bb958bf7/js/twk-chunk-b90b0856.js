(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-b90b0856"], {
        "15e8": function(t, e, a) {
            "use strict";
            var s = a("2f62"),
                i = a("f0b0"),
                n = a("7f46");

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

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(a), !0).forEach((function(e) {
                        c(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function(e) {
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
                    name: "ActiveChatItem",
                    components: {
                        TawkAvatar: i.TawkAvatar,
                        TawkEmoji: i.TawkEmoji,
                        TawkIcon: i.TawkIcon,
                        TawkButton: i.TawkButton,
                        TawkLoader: i.TawkLoader
                    },
                    props: {
                        convertToAvatarLink: {
                            type: Function,
                            required: !0
                        },
                        emojiEnabled: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: o(o({}, Object(s.c)({
                        incomingMessage: "chat/incomingMessage",
                        lastMessage: "chat/lastMessage",
                        prechatFormSubmitted: "session/prechatFormSubmitted",
                        isPrechatEnabled: "widget/isPrechatEnabled",
                        unreadMessageCount: "chat/unreadMessageCount"
                    })), {}, {
                        getAgentImage: function() {
                            return this.lastMessage && this.lastMessage.profileImage ? this.lastMessage.profileImage : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg")
                        },
                        getAgentName: function() {
                            return this.lastMessage && this.lastMessage.name ? this.lastMessage.name : this.$i18n("chat", "unanswered")
                        },
                        hasFile: function() {
                            return this.lastMessage.isUpload && this.lastMessage.fileType
                        },
                        hasUnreadMessage: function() {
                            return this.unreadMessageCount > 0 && ("c" === this.lastMessage.senderType || "a" === this.lastMessage.senderType || "s" === this.lastMessage.senderType)
                        },
                        messageTextOnly: function() {
                            return n.a.removeHTMLTags(this.lastMessage.message)
                        },
                        getDescriptionText: function() {
                            var t = this.lastMessage.callData,
                                e = "";
                            return !t.isDone && t.isRinging && "ringing" === t.status ? e = t.caller.displayName ? this.$i18n("chat", "agent_ringing") : this.$i18n("chat", "visitor_ringing") : t.isDone || t.isRinging || "in-progress" !== t.status ? t.isDone && !t.isRinging && "completed" === t.status && (t.isMissed || t.isRejected) ? e = t.caller.displayName ? this.$i18n("chat", "missed_visitor") : this.$i18n("chat", "missed_agent") : !t.isDone || t.isRinging || "completed" !== t.status || t.isMissed || t.isRejected || (e = this.$i18n("chat", "completed_call")) : e = this.$i18n("chat", "ongoing_call"), e
                        }
                    }),
                    methods: o(o({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        goToChatView: function() {
                            this.isPrechatEnabled && !this.prechatFormSubmitted ? this.routerPush("prechat") : this.routerPush("chat"), this.showOverlay(!1)
                        }
                    })
                },
                h = a("2877"),
                u = Object(h.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("li", {
                        staticClass: "tawk-flex",
                        attrs: {
                            role: "button",
                            tabindex: "0"
                        },
                        on: {
                            click: t.goToChatView
                        }
                    }, ["c" !== t.lastMessage.type || t.lastMessage.callData ? t.lastMessage.callData && !t.lastMessage.callData.hasError ? [t.lastMessage.callData.caller ? [a("div", {
                        staticClass: "tawk-flex-none tawk-margin-xsmall-right"
                    }, [a("tawk-avatar", {
                        attrs: {
                            src: t.lastMessage.callData.caller.profileImage ? t.lastMessage.callData.caller.profileImage : t.convertToAvatarLink()
                        }
                    })], 1), a("div", {
                        staticClass: "tawk-home-list-chat-content tawk-flex"
                    }, [a("div", {
                        staticClass: "tawk-flex-1",
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [a("p", {
                        class: ["tawk-margin-xsmall-bottom", "tawk-text-truncate", t.hasUnreadMessage ? "tawk-text-bold tawk-text-grey-0" : "tawk-text-grey-2"]
                    }, [t._v(" " + t._s(t.lastMessage.callData.caller.displayName ? t.lastMessage.callData.caller.displayName : t.$i18n("chat", "mobileName")) + " ")]), a("p", {
                        class: ["tawk-text-truncate", t.hasUnreadMessage ? "tawk-text-grey-0" : "tawk-text-grey-2"]
                    }, [t._v(" " + t._s(t.getDescriptionText) + " ")])]), a("div", {
                        staticClass: "tawk-flex-none tawk-text-right"
                    }, [a("p", {
                        staticClass: "tawk-text-green-1"
                    }, [t._v(" " + t._s(t.$i18n("chat", "active")) + " ")]), a("tawk-button", {
                        staticClass: "tawk-home-conversation-active-button",
                        on: {
                            click: t.goToChatView
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "right-arrow"
                        }
                    })], 1)], 1)])] : [a("div", {
                        staticClass: "tawk-flex-none tawk-margin-xsmall-right"
                    }, [a("tawk-loader", {
                        attrs: {
                            type: "avatar"
                        }
                    })], 1), a("div", {
                        staticClass: "tawk-home-list-chat-content tawk-flex"
                    }, [a("div", {
                        staticClass: "tawk-flex-1",
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [a("tawk-loader", {
                        staticClass: "tawk-margin-xsmall-bottom"
                    }), a("tawk-loader", {
                        staticClass: "tawk-margin-xsmall-top",
                        attrs: {
                            size: "small"
                        }
                    })], 1), a("div", {
                        staticClass: "tawk-flex-none tawk-text-right"
                    }, [a("p", {
                        staticClass: "tawk-text-green-1"
                    }, [t._v(" " + t._s(t.$i18n("chat", "active")) + " ")]), a("tawk-button", {
                        staticClass: "tawk-home-conversation-active-button"
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "right-arrow"
                        }
                    })], 1)], 1)])]] : t.lastMessage.callData && t.lastMessage.callData.hasError ? [a("div", {
                        staticClass: "tawk-flex-none tawk-margin-xsmall-right"
                    }, [a("tawk-avatar", {
                        attrs: {
                            src: t.convertToAvatarLink()
                        }
                    })], 1), a("div", {
                        staticClass: "tawk-home-list-chat-content tawk-flex"
                    }, [a("div", {
                        staticClass: "tawk-flex-1",
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [a("p", {
                        staticClass: "tawk-margin-xsmall-bottom tawk-text-truncate tawk-text-grey-2"
                    }, [t._v(" " + t._s(t.$i18n("chat", "error_title")) + " ")]), a("p", {
                        staticClass: "tawk-text-truncate tawk-text-grey-2"
                    }, [t._v(" " + t._s(t.$i18n("chat", "call_error_load")) + " ")])]), a("div", {
                        staticClass: "tawk-flex-none tawk-text-right"
                    }, [a("p", {
                        staticClass: "tawk-text-green-1"
                    }, [t._v(" " + t._s(t.$i18n("chat", "active")) + " ")]), a("tawk-button", {
                        staticClass: "tawk-home-conversation-active-button",
                        on: {
                            click: t.goToChatView
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "right-arrow"
                        }
                    })], 1)], 1)])] : t._e() : [a("div", {
                        staticClass: "tawk-flex-none tawk-margin-xsmall-right"
                    }, [a("tawk-avatar", {
                        attrs: {
                            src: t.getAgentImage,
                            alt: "" + t.$i18n("chat", "agent_profile_image")
                        }
                    })], 1), a("div", {
                        staticClass: "tawk-home-list-chat-content tawk-flex"
                    }, [a("div", {
                        staticClass: "tawk-flex-1",
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [a("p", {
                        class: ["tawk-margin-xsmall-bottom", "tawk-text-truncate", t.hasUnreadMessage ? "tawk-text-bold tawk-text-grey-0" : "tawk-text-grey-2"]
                    }, [t._v(" " + t._s(t.getAgentName) + " ")]), t.hasFile ? a("div", [a("p", {
                        class: ["tawk-text-italic", t.hasUnreadMessage ? "tawk-text-grey-0" : "tawk-text-grey-2"]
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "attach-file",
                            size: "small"
                        }
                    }), t._v(" " + t._s(t.$i18n("chat", "sent_file")) + " ")], 1)]) : a("p", {
                        class: ["tawk-text-truncate", t.hasUnreadMessage ? "tawk-text-grey-0" : "tawk-text-grey-2"]
                    }, [a("tawk-emoji", {
                        key: t.lastMessage.messageId,
                        attrs: {
                            emoji: t.messageTextOnly,
                            enabled: t.emojiEnabled
                        }
                    })], 1)]), a("div", {
                        staticClass: "tawk-flex-none tawk-text-right"
                    }, [a("p", {
                        staticClass: "tawk-text-green-1"
                    }, [t._v(" " + t._s(t.$i18n("chat", "active")) + " ")]), a("tawk-button", {
                        staticClass: "tawk-home-conversation-active-button tawk-button-hover tawk-custom-color tawk-custom-border-color",
                        on: {
                            click: t.goToChatView
                        }
                    }, [a("tawk-icon", {
                        attrs: {
                            type: "right-arrow"
                        }
                    })], 1)], 1)])]], 2)
                }), [], !1, null, null, null).exports;

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

            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(a), !0).forEach((function(e) {
                        g(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function g(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var m = {
                    name: "PreviousChatItem",
                    props: {
                        item: {
                            type: Object,
                            required: !0
                        },
                        convertToAvatarLink: {
                            type: Function,
                            required: !0
                        },
                        emojiEnabled: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    components: {
                        TawkAvatar: i.TawkAvatar,
                        TawkEmoji: i.TawkEmoji
                    },
                    computed: {
                        messageTextOnly: function() {
                            var t = n.a.removeHTMLTags(this.item.snippet);
                            return n.a.rawEncode(n.a.rawDecode(t))
                        }
                    },
                    methods: w(w({}, Object(s.b)({
                        routerPush: "router/routerPush",
                        showOverlay: "overlay/showOverlay"
                    })), {}, {
                        select: function(t) {
                            this.$store.commit("history/setSelectedChat", t), this.routerPush("history-chat"), this.showOverlay(!0)
                        }
                    })
                },
                v = Object(h.a)(m, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("li", {
                        staticClass: "tawk-flex",
                        attrs: {
                            role: "button",
                            tabindex: "0"
                        },
                        on: {
                            click: function(e) {
                                return t.select(t.item)
                            },
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.select(t.item)
                            }
                        }
                    }, [a("div", {
                        staticClass: "tawk-flex-none tawk-margin-xsmall-right"
                    }, [a("tawk-avatar", {
                        attrs: {
                            src: t.convertToAvatarLink(t.item.agentIds.length ? t.item.agentAliases[0].profileImage : ""),
                            alt: "" + t.$i18n("chat", "agent_profile_image")
                        }
                    })], 1), a("div", {
                        staticClass: "tawk-home-list-chat-content tawk-flex"
                    }, [a("div", {
                        staticClass: "tawk-flex-1 tawk-custom-chat-left",
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [t.item.agentIds.length && t.item.snippet ? a("p", {
                        staticClass: "tawk-margin-xsmall-bottom tawk-text-truncate"
                    }, [t._v(" " + t._s(t.item.agentAliases[0].displayName) + " ")]) : a("p", {
                        staticClass: "tawk-flex-1"
                    }, [t._v(t._s(t.$i18n("chat", "unanswered")))]), t.item.snippet ? a("p", {
                        staticClass: "tawk-text-truncate"
                    }, [a("tawk-emoji", {
                        key: t.item.id,
                        attrs: {
                            emoji: t.messageTextOnly,
                            enabled: t.emojiEnabled
                        }
                    })], 1) : t._e()]), a("div", {
                        staticClass: "tawk-flex-none tawk-text-right tawk-custom-chat-right"
                    }, [a("tawk-timeago", {
                        attrs: {
                            datetime: t.item.endedOn,
                            isDuration: !1,
                            isLive: !1
                        }
                    })], 1)])])
                }), [], !1, null, null, null).exports;

            function k(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(a), !0).forEach((function(e) {
                        f(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : k(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function f(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var b = {
                    name: "ConversationsItem",
                    components: {
                        TawkList: i.TawkList,
                        ActiveChatItem: u,
                        PreviousChatItem: v
                    },
                    props: {
                        items: {
                            type: Array,
                            required: !0
                        }
                    },
                    computed: p(p({}, Object(s.c)({
                        pageStatus: "session/pageStatus",
                        currentView: "router/getCurrentView",
                        chatOrder: "chat/chatOrder",
                        hasLiveChat: "widget/hasLiveChat",
                        agentsCount: "chat/agentsCount",
                        endedChats: "chat/endedChats",
                        lastMessage: "chat/lastMessage",
                        emojiEnabled: "widget/emojiEnabled"
                    })), {}, {
                        previousConversations: function() {
                            var t = this.items;
                            return this.endedConversations.length ? 3 === this.endedConversations.length || this.hasActiveChat && 2 === this.endedConversations.length ? [] : 1 === this.endedConversations.length && this.hasActiveChat ? t.slice(0, "-".concat(this.endedConversations.length + 1)) : t.slice(0, "-".concat(this.endedConversations.length)) : this.hasActiveChat && t.length >= 3 ? t.slice(0, -1) : t
                        },
                        hasActiveChat: function() {
                            return "offline" !== this.pageStatus && this.currentView && "chat" !== this.currentView.path && this.chatOrder && this.isLiveChatFeatureEnabled
                        },
                        isLiveChatFeatureEnabled: function() {
                            return !!(this.hasLiveChat || this.chatOrder && this.agentsCount > 0)
                        },
                        endedConversations: function() {
                            return this.endedChats.length >= 3 ? this.hasActiveChat ? this.endedChats.slice(0, 2) : this.endedChats.slice(0, 3) : this.endedChats
                        }
                    }),
                    methods: {
                        convertToAvatarLink: function(t) {
                            return t ? "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(t) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg")
                        }
                    }
                },
                y = Object(h.a)(b, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("tawk-list", {
                        staticClass: "tawk-home-list\n\t\ttawk-home-list-hover\n\t\ttawk-home-list-chat",
                        attrs: {
                            tag: "ul"
                        }
                    }, [t.hasActiveChat && t.lastMessage ? a("active-chat-item", {
                        attrs: {
                            convertToAvatarLink: t.convertToAvatarLink,
                            emojiEnabled: t.emojiEnabled
                        }
                    }) : t._e(), t._l(t.endedConversations, (function(e) {
                        return a("previous-chat-item", {
                            key: e.id,
                            attrs: {
                                item: e,
                                convertToAvatarLink: t.convertToAvatarLink,
                                emojiEnabled: t.emojiEnabled
                            }
                        })
                    })), t._l(t.previousConversations, (function(e) {
                        return a("previous-chat-item", {
                            key: e.id,
                            attrs: {
                                item: e,
                                convertToAvatarLink: t.convertToAvatarLink,
                                emojiEnabled: t.emojiEnabled
                            }
                        })
                    }))], 2)
                }), [], !1, null, null, null);
            e.a = y.exports
        },
        "30be": function(t, e, a) {
            "use strict";
            a.r(e);
            var s = a("aebe").a,
                i = a("2877"),
                n = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.history.isLoading,
                            expression: "!history.isLoading"
                        }]
                    }, [a("p", {
                        staticClass: "tawk-padding-small tawk-text-regular-4"
                    }, [t._v(" " + t._s(t.$i18n("routes", "conversations")) + " ")]), t.history.isLoading ? a("item-loader") : a("item", {
                        attrs: {
                            items: t.history.items
                        }
                    }), t.history.nextListHash && !t.history.isLoading ? a("div", {
                        staticClass: "tawk-padding-small"
                    }, [a("tawk-button", {
                        staticClass: "tawk-margin-xsmall tawk-button-cta tawk-custom-color tawk-custom-border-color",
                        staticStyle: {
                            width: "100%"
                        },
                        on: {
                            click: t.goToHistoryView
                        }
                    }, [t._v(" " + t._s(t.$i18n("chat", "all_conversations")) + " ")])], 1) : t._e()], 1)
                }), [], !1, null, null, null);
            e.default = n.exports
        },
        "35c3": function(t, e, a) {
            "use strict";
            var s = a("f0b0"),
                i = {
                    name: "ConversationsLoader",
                    components: {
                        TawkList: s.TawkList,
                        TawkLoader: s.TawkLoader
                    }
                },
                n = a("2877"),
                r = Object(n.a)(i, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("tawk-list", {
                        staticClass: "tawk-home-list tawk-home-list-chat",
                        attrs: {
                            tag: "ul"
                        }
                    }, t._l(1, (function(t, e) {
                        return a("li", {
                            key: e,
                            staticClass: "tawk-flex"
                        }, [a("div", {
                            staticClass: "tawk-flex-none tawk-margin-xsmall-right"
                        }, [a("tawk-loader", {
                            attrs: {
                                type: "icon",
                                size: "medium"
                            }
                        })], 1), a("div", {
                            staticClass: "tawk-home-list-chat-content tawk-flex"
                        }, [a("div", {
                            staticClass: "tawk-flex-1",
                            staticStyle: {
                                overflow: "hidden"
                            }
                        }, [a("tawk-loader", {
                            staticClass: "tawk-margin-xsmall-bottom"
                        }), a("tawk-loader", {
                            staticClass: "tawk-margin-xsmall-top",
                            attrs: {
                                size: "small"
                            }
                        })], 1)])])
                    })), 0)
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        aebe: function(t, e, a) {
            "use strict";
            (function(t) {
                var s = a("a34a"),
                    i = a.n(s),
                    n = a("2f62"),
                    r = a("f0b0"),
                    o = a("15e8"),
                    c = a("35c3"),
                    l = a("3f09"),
                    h = a("bdd0");

                function u(t, e, a, s, i, n, r) {
                    try {
                        var o = t[n](r),
                            c = o.value
                    } catch (t) {
                        return void a(t)
                    }
                    o.done ? e(c) : Promise.resolve(c).then(s, i)
                }

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

                function w(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(a), !0).forEach((function(e) {
                            g(t, e, a[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        }))
                    }
                    return t
                }

                function g(t, e, a) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = a, t
                }
                e.a = {
                    name: "Conversations",
                    mixins: [l.a],
                    components: {
                        TawkButton: r.TawkButton,
                        item: o.a,
                        ItemLoader: c.a
                    },
                    data: function() {
                        return {
                            unseenMessages: [],
                            history: {
                                isLoading: !1,
                                items: [],
                                nextListHash: !1
                            }
                        }
                    },
                    props: {
                        historyEnabled: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.historyEnabled && (this.loadHistory(), t.Tawk_Window.eventBus.$on("callDataUpdated", (function(t) {
                            e.activeConversation && t.callId === e.activeConversation.callId && (e.activeConversation.callData = t)
                        })))
                    },
                    beforeDestroy: function() {
                        this.unsetItems()
                    },
                    computed: w(w({}, Object(n.c)({
                        items: "history/items",
                        chatMessages: "chat/chatMessages",
                        chatOrder: "chat/chatOrder",
                        endedChats: "chat/endedChats",
                        nextListHash: "history/nextListHash",
                        isLoading: "history/isLoading",
                        token: "session/token"
                    })), {}, {
                        activeConversation: function() {
                            return 0 === this.chatOrder ? null : this.chatMessages[this.chatOrder]
                        }
                    }),
                    methods: w(w({}, Object(n.b)({
                        routerPush: "router/routerPush",
                        unsetItems: "history/unsetItems",
                        showOverlay: "overlay/showOverlay",
                        checkTokenValidity: "session/checkTokenValidity"
                    })), {}, {
                        goToHistoryView: function() {
                            this.routerPush("history-list"), this.showOverlay(!0)
                        },
                        loadHistory: function() {
                            var t = this;
                            return function(t) {
                                return function() {
                                    var e = this,
                                        a = arguments;
                                    return new Promise((function(s, i) {
                                        var n = t.apply(e, a);

                                        function r(t) {
                                            u(n, s, i, r, o, "next", t)
                                        }

                                        function o(t) {
                                            u(n, s, i, r, o, "throw", t)
                                        }
                                        r(void 0)
                                    }))
                                }
                            }(i.a.mark((function e() {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, t.checkTokenValidity();
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            return e.prev = 5, e.t0 = e.catch(0), e.abrupt("return");
                                        case 8:
                                            t.history.isLoading = !0, h.a.get("".concat("https://va.tawk.to", "/v1/chat/list"), {
                                                limit: 3
                                            }, {
                                                "X-Tawk-Token": t.token
                                            }, (function(e, a) {
                                                t.history.isLoading = !1, t.history.items = a.data.chats, t.$emit("historyItemsLoaded", t.history.items.length), a.data.hasNext && a.data.next ? t.history.nextListHash = a.data.next : t.history.nextListHash = null
                                            }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 5]
                                ])
                            })))()
                        }
                    })
                }
            }).call(this, a("c8ba"))
        }
    }
]);