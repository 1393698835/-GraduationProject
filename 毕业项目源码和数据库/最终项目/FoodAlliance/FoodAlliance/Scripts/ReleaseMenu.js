/* jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
	function cy(a) {
		return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}

	function cu(a) {
		if(!cj[a]) {
			var b = c.body,
				d = f("<" + a + ">").appendTo(b),
				e = d.css("display");
			d.remove();
			if(e === "none" || e === "") {
				ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
				if(!cl || !ck.createElement) {
					cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close()
				}
				d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
			}
			cj[a] = e
		}
		return cj[a]
	}

	function ct(a, b) {
		var c = {};
		f.each(cp.concat.apply([], cp.slice(0, b)), function() {
			c[this] = a
		});
		return c
	}

	function cs() {
		cq = b
	}

	function cr() {
		setTimeout(cs, 0);
		return cq = f.now()
	}

	function ci() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch(b) {}
	}

	function ch() {
		try {
			return new a.XMLHttpRequest
		} catch(b) {}
	}

	function cb(a, c) {
		a.dataFilter && (c = a.dataFilter(c, a.dataType));
		var d = a.dataTypes,
			e = {},
			g, h, i = d.length,
			j, k = d[0],
			l, m, n, o, p;
		for(g = 1; g < i; g++) {
			if(g === 1) {
				for(h in a.converters) {
					typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
				}
			}
			l = k, k = d[g];
			if(k === "*") {
				k = l
			} else {
				if(l !== "*" && l !== k) {
					m = l + " " + k, n = e[m] || e["* " + k];
					if(!n) {
						p = b;
						for(o in e) {
							j = o.split(" ");
							if(j[0] === l || j[0] === "*") {
								p = e[j[1] + " " + k];
								if(p) {
									o = e[o], o === !0 ? n = p : p === !0 && (n = o);
									break
								}
							}
						}
					}!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
				}
			}
		}
		return c
	}

	function ca(a, c, d) {
		var e = a.contents,
			f = a.dataTypes,
			g = a.responseFields,
			h, i, j, k;
		for(i in g) {
			i in d && (c[g[i]] = d[i])
		}
		while(f[0] === "*") {
			f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
		}
		if(h) {
			for(i in e) {
				if(e[i] && e[i].test(h)) {
					f.unshift(i);
					break
				}
			}
		}
		if(f[0] in d) {
			j = f[0]
		} else {
			for(i in d) {
				if(!f[0] || a.converters[i + " " + f[0]]) {
					j = i;
					break
				}
				k || (k = i)
			}
			j = j || k
		}
		if(j) {
			j !== f[0] && f.unshift(j);
			return d[j]
		}
	}

	function b_(a, b, c, d) {
		if(f.isArray(b)) {
			f.each(b, function(b, e) {
				c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
			})
		} else {
			if(!c && f.type(b) === "object") {
				for(var e in b) {
					b_(a + "[" + e + "]", b[e], c, d)
				}
			} else {
				d(a, b)
			}
		}
	}

	function b$(a, c) {
		var d, e, g = f.ajaxSettings.flatOptions || {};
		for(d in c) {
			c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
		}
		e && f.extend(!0, a, e)
	}

	function bZ(a, c, d, e, f, g) {
		f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
		var h = a[f],
			i = 0,
			j = h ? h.length : 0,
			k = a === bS,
			l;
		for(; i < j && (k || !l); i++) {
			l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)))
		}
		(k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
		return l
	}

	function bY(a) {
		return function(b, c) {
			typeof b != "string" && (c = b, b = "*");
			if(f.isFunction(c)) {
				var d = b.toLowerCase().split(bO),
					e = 0,
					g = d.length,
					h, i, j;
				for(; e < g; e++) {
					h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
				}
			}
		}
	}

	function bB(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
			e = b === "width" ? 1 : 0,
			g = 4;
		if(d > 0) {
			if(c !== "border") {
				for(; e < g; e += 2) {
					c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0
				}
			}
			return d + "px"
		}
		d = by(a, b);
		if(d < 0 || d == null) {
			d = a.style[b]
		}
		if(bt.test(d)) {
			return d
		}
		d = parseFloat(d) || 0;
		if(c) {
			for(; e < g; e += 2) {
				d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0)
			}
		}
		return d + "px"
	}

	function bo(a) {
		var b = c.createElement("div");
		bh.appendChild(b), b.innerHTML = a.outerHTML;
		return b.firstChild
	}

	function bn(a) {
		var b = (a.nodeName || "").toLowerCase();
		b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
	}

	function bm(a) {
		if(a.type === "checkbox" || a.type === "radio") {
			a.defaultChecked = a.checked
		}
	}

	function bl(a) {
		return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
	}

	function bk(a, b) {
		var c;
		b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
	}

	function bj(a, b) {
		if(b.nodeType === 1 && !!f.hasData(a)) {
			var c, d, e, g = f._data(a),
				h = f._data(b, g),
				i = g.events;
			if(i) {
				delete h.handle, h.events = {};
				for(c in i) {
					for(d = 0, e = i[c].length; d < e; d++) {
						f.event.add(b, c, i[c][d])
					}
				}
			}
			h.data && (h.data = f.extend({}, h.data))
		}
	}

	function bi(a, b) {
		return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function U(a) {
		var b = V.split("|"),
			c = a.createDocumentFragment();
		if(c.createElement) {
			while(b.length) {
				c.createElement(b.pop())
			}
		}
		return c
	}

	function T(a, b, c) {
		b = b || 0;
		if(f.isFunction(b)) {
			return f.grep(a, function(a, d) {
				var e = !!b.call(a, d, a);
				return e === c
			})
		}
		if(b.nodeType) {
			return f.grep(a, function(a, d) {
				return a === b === c
			})
		}
		if(typeof b == "string") {
			var d = f.grep(a, function(a) {
				return a.nodeType === 1
			});
			if(O.test(b)) {
				return f.filter(b, d, !c)
			}
			b = f.filter(b, d)
		}
		return f.grep(a, function(a, d) {
			return f.inArray(a, b) >= 0 === c
		})
	}

	function S(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}

	function K() {
		return !0
	}

	function J() {
		return !1
	}

	function n(a, b, c) {
		var d = b + "defer",
			e = b + "queue",
			g = b + "mark",
			h = f._data(a, d);
		h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
			!f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
		}, 0)
	}

	function m(a) {
		for(var b in a) {
			if(b === "data" && f.isEmptyObject(a[b])) {
				continue
			}
			if(b !== "toJSON") {
				return !1
			}
		}
		return !0
	}

	function l(a, c, d) {
		if(d === b && a.nodeType === 1) {
			var e = "data-" + c.replace(k, "-$1").toLowerCase();
			d = a.getAttribute(e);
			if(typeof d == "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
				} catch(g) {}
				f.data(a, c, d)
			} else {
				d = b
			}
		}
		return d
	}

	function h(a) {
		var b = g[a] = {},
			c, d;
		a = a.split(/\s+/);
		for(c = 0, d = a.length; c < d; c++) {
			b[a[c]] = !0
		}
		return b
	}

	var c = a.document,
		d = a.navigator,
		e = a.location,
		f = function() {
			function J() {
				if(!e.isReady) {
					try {
						c.documentElement.doScroll("left")
					} catch(a) {
						setTimeout(J, 1);
						return
					}
					e.ready()
				}
			}

			var e = function(a, b) {
					return new e.fn.init(a, b, h)
				},
				f = a.jQuery,
				g = a.$,
				h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				j = /\S/,
				k = /^\s+/,
				l = /\s+$/,
				m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				n = /^[\],:{}\s]*$/,
				o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				q = /(?:^|:|,)(?:\s*\[)+/g,
				r = /(webkit)[ \/]([\w.]+)/,
				s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				t = /(msie) ([\w.]+)/,
				u = /(mozilla)(?:.*? rv:([\w.]+))?/,
				v = /-([a-z]|[0-9])/ig,
				w = /^-ms-/,
				x = function(a, b) {
					return(b + "").toUpperCase()
				},
				y = d.userAgent,
				z, A, B, C = Object.prototype.toString,
				D = Object.prototype.hasOwnProperty,
				E = Array.prototype.push,
				F = Array.prototype.slice,
				G = String.prototype.trim,
				H = Array.prototype.indexOf,
				I = {};
			e.fn = e.prototype = {
				constructor: e,
				init: function(a, d, f) {
					var g, h, j, k;
					if(!a) {
						return this
					}
					if(a.nodeType) {
						this.context = this[0] = a, this.length = 1;
						return this
					}
					if(a === "body" && !d && c.body) {
						this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
						return this
					}
					if(typeof a == "string") {
						a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
						if(g && (g[1] || !d)) {
							if(g[1]) {
								d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
								return e.merge(this, a)
							}
							h = c.getElementById(g[2]);
							if(h && h.parentNode) {
								if(h.id !== g[2]) {
									return f.find(a)
								}
								this.length = 1, this[0] = h
							}
							this.context = c, this.selector = a;
							return this
						}
						return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
					}
					if(e.isFunction(a)) {
						return f.ready(a)
					}
					a.selector !== b && (this.selector = a.selector, this.context = a.context);
					return e.makeArray(a, this)
				},
				selector: "",
				jquery: "1.7.2",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return F.call(this, 0)
				},
				get: function(a) {
					return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
				},
				pushStack: function(a, b, c) {
					var d = this.constructor();
					e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
					return d
				},
				each: function(a, b) {
					return e.each(this, a, b)
				},
				ready: function(a) {
					e.bindReady(), A.add(a);
					return this
				},
				eq: function(a) {
					a = +a;
					return a === -1 ? this.slice(a) : this.slice(a, a + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
				},
				map: function(a) {
					return this.pushStack(e.map(this, function(b, c) {
						return a.call(b, c, b)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: E,
				sort: [].sort,
				splice: [].splice
			}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
				var a, c, d, f, g, h, i = arguments[0] || {},
					j = 1,
					k = arguments.length,
					l = !1;
				typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
				for(; j < k; j++) {
					if((a = arguments[j]) != null) {
						for(c in a) {
							d = i[c], f = a[c];
							if(i === f) {
								continue
							}
							l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
						}
					}
				}
				return i
			}, e.extend({
				noConflict: function(b) {
					a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
					return e
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(a) {
					a ? e.readyWait++ : e.ready(!0)
				},
				ready: function(a) {
					if(a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
						if(!c.body) {
							return setTimeout(e.ready, 1)
						}
						e.isReady = !0;
						if(a !== !0 && --e.readyWait > 0) {
							return
						}
						A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
					}
				},
				bindReady: function() {
					if(!A) {
						A = e.Callbacks("once memory");
						if(c.readyState === "complete") {
							return setTimeout(e.ready, 1)
						}
						if(c.addEventListener) {
							c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
						} else {
							if(c.attachEvent) {
								c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
								var b = !1;
								try {
									b = a.frameElement == null
								} catch(d) {}
								c.documentElement.doScroll && b && J()
							}
						}
					}
				},
				isFunction: function(a) {
					return e.type(a) === "function"
				},
				isArray: Array.isArray || function(a) {
					return e.type(a) === "array"
				},
				isWindow: function(a) {
					return a != null && a == a.window
				},
				isNumeric: function(a) {
					return !isNaN(parseFloat(a)) && isFinite(a)
				},
				type: function(a) {
					return a == null ? String(a) : I[C.call(a)] || "object"
				},
				isPlainObject: function(a) {
					if(!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
						return !1
					}
					try {
						if(a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
							return !1
						}
					} catch(c) {
						return !1
					}
					var d;
					for(d in a) {}
					return d === b || D.call(a, d)
				},
				isEmptyObject: function(a) {
					for(var b in a) {
						return !1
					}
					return !0
				},
				error: function(a) {
					throw new Error(a)
				},
				parseJSON: function(b) {
					if(typeof b != "string" || !b) {
						return null
					}
					b = e.trim(b);
					if(a.JSON && a.JSON.parse) {
						return a.JSON.parse(b)
					}
					if(n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
						return(new Function("return " + b))()
					}
					e.error("Invalid JSON: " + b)
				},
				parseXML: function(c) {
					if(typeof c != "string" || !c) {
						return null
					}
					var d, f;
					try {
						a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
					} catch(g) {
						d = b
					}
					(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
					return d
				},
				noop: function() {},
				globalEval: function(b) {
					b && j.test(b) && (a.execScript || function(b) {
						a.eval.call(a, b)
					})(b)
				},
				camelCase: function(a) {
					return a.replace(w, "ms-").replace(v, x)
				},
				nodeName: function(a, b) {
					return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
				},
				each: function(a, c, d) {
					var f, g = 0,
						h = a.length,
						i = h === b || e.isFunction(a);
					if(d) {
						if(i) {
							for(f in a) {
								if(c.apply(a[f], d) === !1) {
									break
								}
							}
						} else {
							for(; g < h;) {
								if(c.apply(a[g++], d) === !1) {
									break
								}
							}
						}
					} else {
						if(i) {
							for(f in a) {
								if(c.call(a[f], f, a[f]) === !1) {
									break
								}
							}
						} else {
							for(; g < h;) {
								if(c.call(a[g], g, a[g++]) === !1) {
									break
								}
							}
						}
					}
					return a
				},
				trim: G ? function(a) {
					return a == null ? "" : G.call(a)
				} : function(a) {
					return a == null ? "" : (a + "").replace(k, "").replace(l, "")
				},
				makeArray: function(a, b) {
					var c = b || [];
					if(a != null) {
						var d = e.type(a);
						a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
					}
					return c
				},
				inArray: function(a, b, c) {
					var d;
					if(b) {
						if(H) {
							return H.call(b, a, c)
						}
						d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
						for(; c < d; c++) {
							if(c in b && b[c] === a) {
								return c
							}
						}
					}
					return -1
				},
				merge: function(a, c) {
					var d = a.length,
						e = 0;
					if(typeof c.length == "number") {
						for(var f = c.length; e < f; e++) {
							a[d++] = c[e]
						}
					} else {
						while(c[e] !== b) {
							a[d++] = c[e++]
						}
					}
					a.length = d;
					return a
				},
				grep: function(a, b, c) {
					var d = [],
						e;
					c = !!c;
					for(var f = 0, g = a.length; f < g; f++) {
						e = !!b(a[f], f), c !== e && d.push(a[f])
					}
					return d
				},
				map: function(a, c, d) {
					var f, g, h = [],
						i = 0,
						j = a.length,
						k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
					if(k) {
						for(; i < j; i++) {
							f = c(a[i], i, d), f != null && (h[h.length] = f)
						}
					} else {
						for(g in a) {
							f = c(a[g], g, d), f != null && (h[h.length] = f)
						}
					}
					return h.concat.apply([], h)
				},
				guid: 1,
				proxy: function(a, c) {
					if(typeof c == "string") {
						var d = a[c];
						c = a, a = d
					}
					if(!e.isFunction(a)) {
						return b
					}
					var f = F.call(arguments, 2),
						g = function() {
							return a.apply(c, f.concat(F.call(arguments)))
						};
					g.guid = a.guid = a.guid || g.guid || e.guid++;
					return g
				},
				access: function(a, c, d, f, g, h, i) {
					var j, k = d == null,
						l = 0,
						m = a.length;
					if(d && typeof d == "object") {
						for(l in d) {
							e.access(a, c, l, d[l], 1, h, f)
						}
						g = 1
					} else {
						if(f !== b) {
							j = i === b && e.isFunction(f), k && (j ? (j = c, c = function(a, b, c) {
								return j.call(e(a), c)
							}) : (c.call(a, f), c = null));
							if(c) {
								for(; l < m; l++) {
									c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i)
								}
							}
							g = 1
						}
					}
					return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
				},
				now: function() {
					return(new Date).getTime()
				},
				uaMatch: function(a) {
					a = a.toLowerCase();
					var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
					return {
						browser: b[1] || "",
						version: b[2] || "0"
					}
				},
				sub: function() {
					function a(b, c) {
						return new a.fn.init(b, c)
					}

					e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
						f && f instanceof e && !(f instanceof a) && (f = a(f));
						return e.fn.init.call(this, d, f, b)
					}, a.fn.init.prototype = a.fn;
					var b = a(c);
					return a
				},
				browser: {}
			}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
				I["[object " + b + "]"] = b.toLowerCase()
			}), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
				c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
			} : c.attachEvent && (B = function() {
				c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
			});
			return e
		}(),
		g = {};
	f.Callbacks = function(a) {
		a = a ? g[a] || h(a) : {};
		var c = [],
			d = [],
			e, i, j, k, l, m, n = function(b) {
				var d, e, g, h, i;
				for(d = 0, e = b.length; d < e; d++) {
					g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
				}
			},
			o = function(b, f) {
				f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
				for(; c && m < l; m++) {
					if(c[m].apply(b, f) === !1 && a.stopOnFalse) {
						e = !0;
						break
					}
				}
				j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
			},
			p = {
				add: function() {
					if(c) {
						var a = c.length;
						n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
					}
					return this
				},
				remove: function() {
					if(c) {
						var b = arguments,
							d = 0,
							e = b.length;
						for(; d < e; d++) {
							for(var f = 0; f < c.length; f++) {
								if(b[d] === c[f]) {
									j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
									if(a.unique) {
										break
									}
								}
							}
						}
					}
					return this
				},
				has: function(a) {
					if(c) {
						var b = 0,
							d = c.length;
						for(; b < d; b++) {
							if(a === c[b]) {
								return !0
							}
						}
					}
					return !1
				},
				empty: function() {
					c = [];
					return this
				},
				disable: function() {
					c = d = e = b;
					return this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					d = b, (!e || e === !0) && p.disable();
					return this
				},
				locked: function() {
					return !d
				},
				fireWith: function(b, c) {
					d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
					return this
				},
				fire: function() {
					p.fireWith(this, arguments);
					return this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	};
	var i = [].slice;
	f.extend({
		Deferred: function(a) {
			var b = f.Callbacks("once memory"),
				c = f.Callbacks("once memory"),
				d = f.Callbacks("memory"),
				e = "pending",
				g = {
					resolve: b,
					reject: c,
					notify: d
				},
				h = {
					done: b.add,
					fail: c.add,
					progress: d.add,
					state: function() {
						return e
					},
					isResolved: b.fired,
					isRejected: c.fired,
					then: function(a, b, c) {
						i.done(a).fail(b).progress(c);
						return this
					},
					always: function() {
						i.done.apply(i, arguments).fail.apply(i, arguments);
						return this
					},
					pipe: function(a, b, c) {
						return f.Deferred(function(d) {
							f.each({
								done: [a, "resolve"],
								fail: [b, "reject"],
								progress: [c, "notify"]
							}, function(a, b) {
								var c = b[0],
									e = b[1],
									g;
								f.isFunction(c) ? i[a](function() {
									g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
								}) : i[a](d[e])
							})
						}).promise()
					},
					promise: function(a) {
						if(a == null) {
							a = h
						} else {
							for(var b in h) {
								a[b] = h[b]
							}
						}
						return a
					}
				},
				i = h.promise({}),
				j;
			for(j in g) {
				i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
			}
			i.done(function() {
				e = "resolved"
			}, c.disable, d.lock).fail(function() {
				e = "rejected"
			}, b.disable, d.lock), a && a.call(i, i);
			return i
		},
		when: function(a) {
			function m(a) {
				return function(b) {
					e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
				}
			}

			function l(a) {
				return function(c) {
					b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
				}
			}

			var b = i.call(arguments, 0),
				c = 0,
				d = b.length,
				e = Array(d),
				g = d,
				h = d,
				j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
				k = j.promise();
			if(d > 1) {
				for(; c < d; c++) {
					b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
				}
				g || j.resolveWith(j, b)
			} else {
				j !== a && j.resolveWith(j, d ? [a] : [])
			}
			return k
		}
	}), f.support = function() {
		var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
			q = c.documentElement;
		p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
		if(!d || !d.length || !e) {
			return {}
		}
		g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
			leadingWhitespace: p.firstChild.nodeType === 3,
			tbody: !p.getElementsByTagName("tbody").length,
			htmlSerialize: !!p.getElementsByTagName("link").length,
			style: /top/.test(e.getAttribute("style")),
			hrefNormalized: e.getAttribute("href") === "/a",
			opacity: /^0.55/.test(e.style.opacity),
			cssFloat: !!e.style.cssFloat,
			checkOn: i.value === "on",
			optSelected: h.selected,
			getSetAttribute: p.className !== "t",
			enctype: !!c.createElement("form").enctype,
			html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			pixelMargin: !0
		}, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
		try {
			delete p.test
		} catch(r) {
			b.deleteExpando = !1
		}!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
			b.noCloneEvent = !1
		}), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
		if(p.attachEvent) {
			for(n in {
					submit: 1,
					change: 1,
					focusin: 1
				}) {
				m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o
			}
		}
		j.removeChild(p), j = g = h = p = i = null, f(function() {
			var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
			!u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div><table " + n + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
				marginRight: 0
			}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
				doesNotAddBorder: g.offsetTop !== 5,
				doesAddBorderForTableAndCells: i.offsetTop === 5
			}, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
				marginTop: 0
			}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
		});
		return b
	}();
	var j = /^(?:\{.*\}|\[.*\])$/,
		k = /([A-Z])/g;
	f.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
			return !!a && !m(a)
		},
		data: function(a, c, d, e) {
			if(!!f.acceptData(a)) {
				var g, h, i, j = f.expando,
					k = typeof c == "string",
					l = a.nodeType,
					m = l ? f.cache : a,
					n = l ? a[j] : a[j] && j,
					o = c === "events";
				if((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
					return
				}
				n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
				if(typeof c == "object" || typeof c == "function") {
					e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
				}
				g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
				if(o && !h[c]) {
					return g.events
				}
				k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
				return i
			}
		},
		removeData: function(a, b, c) {
			if(!!f.acceptData(a)) {
				var d, e, g, h = f.expando,
					i = a.nodeType,
					j = i ? f.cache : a,
					k = i ? a[h] : h;
				if(!j[k]) {
					return
				}
				if(b) {
					d = c ? j[k] : j[k].data;
					if(d) {
						f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
						for(e = 0, g = b.length; e < g; e++) {
							delete d[b[e]]
						}
						if(!(c ? m : f.isEmptyObject)(d)) {
							return
						}
					}
				}
				if(!c) {
					delete j[k].data;
					if(!m(j[k])) {
						return
					}
				}
				f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
			}
		},
		_data: function(a, b, c) {
			return f.data(a, b, c, !0)
		},
		acceptData: function(a) {
			if(a.nodeName) {
				var b = f.noData[a.nodeName.toLowerCase()];
				if(b) {
					return b !== !0 && a.getAttribute("classid") === b
				}
			}
			return !0
		}
	}), f.fn.extend({
		data: function(a, c) {
			var d, e, g, h, i, j = this[0],
				k = 0,
				m = null;
			if(a === b) {
				if(this.length) {
					m = f.data(j);
					if(j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
						g = j.attributes;
						for(i = g.length; k < i; k++) {
							h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]))
						}
						f._data(j, "parsedAttrs", !0)
					}
				}
				return m
			}
			if(typeof a == "object") {
				return this.each(function() {
					f.data(this, a)
				})
			}
			d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
			return f.access(this, function(c) {
				if(c === b) {
					m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
					return m === b && d[1] ? this.data(d[0]) : m
				}
				d[1] = c, this.each(function() {
					var b = f(this);
					b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
				})
			}, null, c, arguments.length > 1, null, !1)
		},
		removeData: function(a) {
			return this.each(function() {
				f.removeData(this, a)
			})
		}
	}), f.extend({
		_mark: function(a, b) {
			a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
		},
		_unmark: function(a, b, c) {
			a !== !0 && (c = b, b = a, a = !1);
			if(b) {
				c = c || "fx";
				var d = c + "mark",
					e = a ? 0 : (f._data(b, d) || 1) - 1;
				e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
			}
		},
		queue: function(a, b, c) {
			var d;
			if(a) {
				b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
				return d || []
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = f.queue(a, b),
				d = c.shift(),
				e = {};
			d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
				f.dequeue(a, b)
			}, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
		}
	}), f.fn.extend({
		queue: function(a, c) {
			var d = 2;
			typeof a != "string" && (c = a, a = "fx", d--);
			if(arguments.length < d) {
				return f.queue(this[0], a)
			}
			return c === b ? this : this.each(function() {
				var b = f.queue(this, a, c);
				a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				f.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
			return this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			function m() {
				--h || d.resolveWith(e, [e])
			}

			typeof a != "string" && (c = a, a = b), a = a || "fx";
			var d = f.Deferred(),
				e = this,
				g = e.length,
				h = 1,
				i = a + "defer",
				j = a + "queue",
				k = a + "mark",
				l;
			while(g--) {
				if(l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
					h++, l.add(m)
				}
			}
			m();
			return d.promise(c)
		}
	});
	var o = /[\n\t\r]/g,
		p = /\s+/,
		q = /\r/g,
		r = /^(?:button|input)$/i,
		s = /^(?:button|input|object|select|textarea)$/i,
		t = /^a(?:rea)?$/i,
		u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		v = f.support.getSetAttribute,
		w, x, y;
	f.fn.extend({
		attr: function(a, b) {
			return f.access(this, f.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				f.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return f.access(this, f.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			a = f.propFix[a] || a;
			return this.each(function() {
				try {
					this[a] = b, delete this[a]
				} catch(c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, g, h, i;
			if(f.isFunction(a)) {
				return this.each(function(b) {
					f(this).addClass(a.call(this, b, this.className))
				})
			}
			if(a && typeof a == "string") {
				b = a.split(p);
				for(c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if(e.nodeType === 1) {
						if(!e.className && b.length === 1) {
							e.className = a
						} else {
							g = " " + e.className + " ";
							for(h = 0, i = b.length; h < i; h++) {
								~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
							}
							e.className = f.trim(g)
						}
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			var c, d, e, g, h, i, j;
			if(f.isFunction(a)) {
				return this.each(function(b) {
					f(this).removeClass(a.call(this, b, this.className))
				})
			}
			if(a && typeof a == "string" || a === b) {
				c = (a || "").split(p);
				for(d = 0, e = this.length; d < e; d++) {
					g = this[d];
					if(g.nodeType === 1 && g.className) {
						if(a) {
							h = (" " + g.className + " ").replace(o, " ");
							for(i = 0, j = c.length; i < j; i++) {
								h = h.replace(" " + c[i] + " ", " ")
							}
							g.className = f.trim(h)
						} else {
							g.className = ""
						}
					}
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = typeof b == "boolean";
			if(f.isFunction(a)) {
				return this.each(function(c) {
					f(this).toggleClass(a.call(this, c, this.className, b), b)
				})
			}
			return this.each(function() {
				if(c === "string") {
					var e, g = 0,
						h = f(this),
						i = b,
						j = a.split(p);
					while(e = j[g++]) {
						i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
					}
				} else {
					if(c === "undefined" || c === "boolean") {
						this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
					}
				}
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ",
				c = 0,
				d = this.length;
			for(; c < d; c++) {
				if(this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
					return !0
				}
			}
			return !1
		},
		val: function(a) {
			var c, d, e, g = this[0];
			if(!!arguments.length) {
				e = f.isFunction(a);
				return this.each(function(d) {
					var g = f(this),
						h;
					if(this.nodeType === 1) {
						e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
							return a == null ? "" : a + ""
						})), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
						if(!c || !("set" in c) || c.set(this, h, "value") === b) {
							this.value = h
						}
					}
				})
			}
			if(g) {
				c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
				if(c && "get" in c && (d = c.get(g, "value")) !== b) {
					return d
				}
				d = g.value;
				return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
			}
		}
	}), f.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, c, d, e, g = a.selectedIndex,
						h = [],
						i = a.options,
						j = a.type === "select-one";
					if(g < 0) {
						return null
					}
					c = j ? g : 0, d = j ? g + 1 : i.length;
					for(; c < d; c++) {
						e = i[c];
						if(e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
							b = f(e).val();
							if(j) {
								return b
							}
							h.push(b)
						}
					}
					if(j && !h.length && i.length) {
						return f(i[g]).val()
					}
					return h
				},
				set: function(a, b) {
					var c = f.makeArray(b);
					f(a).find("option").each(function() {
						this.selected = f.inArray(f(this).val(), c) >= 0
					}), c.length || (a.selectedIndex = -1);
					return c
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, c, d, e) {
			var g, h, i, j = a.nodeType;
			if(!!a && j !== 3 && j !== 8 && j !== 2) {
				if(e && c in f.attrFn) {
					return f(a)[c](d)
				}
				if(typeof a.getAttribute == "undefined") {
					return f.prop(a, c, d)
				}
				i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
				if(d !== b) {
					if(d === null) {
						f.removeAttr(a, c);
						return
					}
					if(h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
						return g
					}
					a.setAttribute(c, "" + d);
					return d
				}
				if(h && "get" in h && i && (g = h.get(a, c)) !== null) {
					return g
				}
				g = a.getAttribute(c);
				return g === null ? b : g
			}
		},
		removeAttr: function(a, b) {
			var c, d, e, g, h, i = 0;
			if(b && a.nodeType === 1) {
				d = b.toLowerCase().split(p), g = d.length;
				for(; i < g; i++) {
					e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
				}
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if(r.test(a.nodeName) && a.parentNode) {
						f.error("type property can't be changed")
					} else {
						if(!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
							var c = a.value;
							a.setAttribute("type", b), c && (a.value = c);
							return b
						}
					}
				}
			},
			value: {
				get: function(a, b) {
					if(w && f.nodeName(a, "button")) {
						return w.get(a, b)
					}
					return b in a ? a.value : null
				},
				set: function(a, b, c) {
					if(w && f.nodeName(a, "button")) {
						return w.set(a, b, c)
					}
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, c, d) {
			var e, g, h, i = a.nodeType;
			if(!!a && i !== 3 && i !== 8 && i !== 2) {
				h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
				return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
			}
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
		get: function(a, c) {
			var d, e = f.prop(a, c);
			return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			var d;
			b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
			return c
		}
	}, v || (y = {
		name: !0,
		id: !0,
		coords: !0
	}, w = f.valHooks.button = {
		get: function(a, c) {
			var d;
			d = a.getAttributeNode(c);
			return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
		},
		set: function(a, b, d) {
			var e = a.getAttributeNode(d);
			e || (e = c.createAttribute(d), a.setAttributeNode(e));
			return e.nodeValue = b + ""
		}
	}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
		f.attrHooks[b] = f.extend(f.attrHooks[b], {
			set: function(a, c) {
				if(c === "") {
					a.setAttribute(b, "auto");
					return c
				}
			}
		})
	}), f.attrHooks.contenteditable = {
		get: w.get,
		set: function(a, b, c) {
			b === "" && (b = "false"), w.set(a, b, c)
		}
	}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
		f.attrHooks[c] = f.extend(f.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return d === null ? b : d
			}
		})
	}), f.support.style || (f.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || b
		},
		set: function(a, b) {
			return a.style.cssText = "" + b
		}
	}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
			return null
		}
	})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
		f.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	}), f.each(["radio", "checkbox"], function() {
		f.valHooks[this] = f.extend(f.valHooks[this], {
			set: function(a, b) {
				if(f.isArray(b)) {
					return a.checked = f.inArray(f(a).val(), b) >= 0
				}
			}
		})
	});
	var z = /^(?:textarea|input|select)$/i,
		A = /^([^\.]*)?(?:\.(.+))?$/,
		B = /(?:^|\s)hover(\.\S+)?\b/,
		C = /^key/,
		D = /^(?:mouse|contextmenu)|click/,
		E = /^(?:focusinfocus|focusoutblur)$/,
		F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		G = function(a) {
			var b = F.exec(a);
			b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
			return b
		},
		H = function(a, b) {
			var c = a.attributes || {};
			return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
		},
		I = function(a) {
			return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
		};
	f.event = {
			add: function(a, c, d, e, g) {
				var h, i, j, k, l, m, n, o, p, q, r, s;
				if(!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
					d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
						return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
					}, i.elem = a), c = f.trim(I(c)).split(" ");
					for(k = 0; k < c.length; k++) {
						l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
							type: m,
							origType: l[1],
							data: e,
							handler: d,
							guid: d.guid,
							selector: g,
							quick: g && G(g),
							namespace: n.join(".")
						}, p), r = j[m];
						if(!r) {
							r = j[m] = [], r.delegateCount = 0;
							if(!s.setup || s.setup.call(a, e, n, i) === !1) {
								a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
							}
						}
						s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
					}
					a = null
				}
			},
			global: {},
			remove: function(a, b, c, d, e) {
				var g = f.hasData(a) && f._data(a),
					h, i, j, k, l, m, n, o, p, q, r, s;
				if(!!g && !!(o = g.events)) {
					b = f.trim(I(b || "")).split(" ");
					for(h = 0; h < b.length; h++) {
						i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
						if(!j) {
							for(j in o) {
								f.event.remove(a, j + b[h], c, d, !0)
							}
							continue
						}
						p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						for(n = 0; n < r.length; n++) {
							s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
						}
						r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
					}
					f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
				}
			},
			customEvent: {
				getData: !0,
				setData: !0,
				changeData: !0
			},
			trigger: function(c, d, e, g) {
				if(!e || e.nodeType !== 3 && e.nodeType !== 8) {
					var h = c.type || c,
						i = [],
						j, k, l, m, n, o, p, q, r, s;
					if(E.test(h + f.event.triggered)) {
						return
					}
					h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
					if((!e || f.event.customEvent[h]) && !f.event.global[h]) {
						return
					}
					c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
					if(!e) {
						j = f.cache;
						for(l in j) {
							j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
						}
						return
					}
					c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
					if(p.trigger && p.trigger.apply(e, d) === !1) {
						return
					}
					r = [
						[e, p.bindType || h]
					];
					if(!g && !p.noBubble && !f.isWindow(e)) {
						s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
						for(; m; m = m.parentNode) {
							r.push([m, s]), n = m
						}
						n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
					}
					for(l = 0; l < r.length && !c.isPropagationStopped(); l++) {
						m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
					}
					c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
					return c.result
				}
			},
			dispatch: function(c) {
				c = f.event.fix(c || a.event);
				var d = (f._data(this, "events") || {})[c.type] || [],
					e = d.delegateCount,
					g = [].slice.call(arguments, 0),
					h = !c.exclusive && !c.namespace,
					i = f.event.special[c.type] || {},
					j = [],
					k, l, m, n, o, p, q, r, s,
					t, u;
				g[0] = c, c.delegateTarget = this;
				if(!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
					if(e && (!c.button || c.type !== "click")) {
						n = f(this), n.context = this.ownerDocument || this;
						for(m = c.target; m != this; m = m.parentNode || this) {
							if(m.disabled !== !0) {
								p = {}, r = [], n[0] = m;
								for(k = 0; k < e; k++) {
									s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s)
								}
								r.length && j.push({
									elem: m,
									matches: r
								})
							}
						}
					}
					d.length > e && j.push({
						elem: this,
						matches: d.slice(e)
					});
					for(k = 0; k < j.length && !c.isPropagationStopped(); k++) {
						q = j[k], c.currentTarget = q.elem;
						for(l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
							s = q.matches[l];
							if(h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) {
								c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
							}
						}
					}
					i.postDispatch && i.postDispatch.call(this, c);
					return c.result
				}
			},
			props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(a, b) {
					a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
					return a
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(a, d) {
					var e, f, g, h = d.button,
						i = d.fromElement;
					a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
					return a
				}
			},
			fix: function(a) {
				if(a[f.expando]) {
					return a
				}
				var d, e, g = a,
					h = f.event.fixHooks[a.type] || {},
					i = h.props ? this.props.concat(h.props) : this.props;
				a = f.Event(g);
				for(d = i.length; d;) {
					e = i[--d], a[e] = g[e]
				}
				a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
				return h.filter ? h.filter(a, g) : a
			},
			special: {
				ready: {
					setup: f.bindReady
				},
				load: {
					noBubble: !0
				},
				focus: {
					delegateType: "focusin"
				},
				blur: {
					delegateType: "focusout"
				},
				beforeunload: {
					setup: function(a, b, c) {
						f.isWindow(this) && (this.onbeforeunload = c)
					},
					teardown: function(a, b) {
						this.onbeforeunload === b && (this.onbeforeunload = null)
					}
				}
			},
			simulate: function(a, b, c, d) {
				var e = f.extend(new f.Event, c, {
					type: a,
					isSimulated: !0,
					originalEvent: {}
				});
				d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
			}
		}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			a.detachEvent && a.detachEvent("on" + b, c)
		}, f.Event = function(a, b) {
			if(!(this instanceof f.Event)) {
				return new f.Event(a, b)
			}
			a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
		}, f.Event.prototype = {
			preventDefault: function() {
				this.isDefaultPrevented = K;
				var a = this.originalEvent;
				!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
			},
			stopPropagation: function() {
				this.isPropagationStopped = K;
				var a = this.originalEvent;
				!a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = K, this.stopPropagation()
			},
			isDefaultPrevented: J,
			isPropagationStopped: J,
			isImmediatePropagationStopped: J
		}, f.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(a, b) {
			f.event.special[a] = {
				delegateType: b,
				bindType: b,
				handle: function(a) {
					var c = this,
						d = a.relatedTarget,
						e = a.handleObj,
						g = e.selector,
						h;
					if(!d || d !== c && !f.contains(c, d)) {
						a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
					}
					return h
				}
			}
		}), f.support.submitBubbles || (f.event.special.submit = {
			setup: function() {
				if(f.nodeName(this, "form")) {
					return !1
				}
				f.event.add(this, "click._submit keypress._submit", function(a) {
					var c = a.target,
						d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
					d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
						a._submit_bubble = !0
					}), d._submit_attached = !0)
				})
			},
			postDispatch: function(a) {
				a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
			},
			teardown: function() {
				if(f.nodeName(this, "form")) {
					return !1
				}
				f.event.remove(this, "._submit")
			}
		}), f.support.changeBubbles || (f.event.special.change = {
			setup: function() {
				if(z.test(this.nodeName)) {
					if(this.type === "checkbox" || this.type === "radio") {
						f.event.add(this, "propertychange._change", function(a) {
							a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
						}), f.event.add(this, "click._change", function(a) {
							this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
						})
					}
					return !1
				}
				f.event.add(this, "beforeactivate._change", function(a) {
					var b = a.target;
					z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
						this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
					}), b._change_attached = !0)
				})
			},
			handle: function(a) {
				var b = a.target;
				if(this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
					return a.handleObj.handler.apply(this, arguments)
				}
			},
			teardown: function() {
				f.event.remove(this, "._change");
				return z.test(this.nodeName)
			}
		}), f.support.focusinBubbles || f.each({
			focus: "focusin",
			blur: "focusout"
		}, function(a, b) {
			var d = 0,
				e = function(a) {
					f.event.simulate(b, a.target, f.event.fix(a), !0)
				};
			f.event.special[b] = {
				setup: function() {
					d++ === 0 && c.addEventListener(a, e, !0)
				},
				teardown: function() {
					--d === 0 && c.removeEventListener(a, e, !0)
				}
			}
		}), f.fn.extend({
			on: function(a, c, d, e, g) {
				var h, i;
				if(typeof a == "object") {
					typeof c != "string" && (d = d || c, c = b);
					for(i in a) {
						this.on(i, c, d, a[i], g)
					}
					return this
				}
				d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
				if(e === !1) {
					e = J
				} else {
					if(!e) {
						return this
					}
				}
				g === 1 && (h = e, e = function(a) {
					f().off(a);
					return h.apply(this, arguments)
				}, e.guid = h.guid || (h.guid = f.guid++));
				return this.each(function() {
					f.event.add(this, a, e, d, c)
				})
			},
			one: function(a, b, c, d) {
				return this.on(a, b, c, d, 1)
			},
			off: function(a, c, d) {
				if(a && a.preventDefault && a.handleObj) {
					var e = a.handleObj;
					f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
					return this
				}
				if(typeof a == "object") {
					for(var g in a) {
						this.off(g, c, a[g])
					}
					return this
				}
				if(c === !1 || typeof c == "function") {
					d = c, c = b
				}
				d === !1 && (d = J);
				return this.each(function() {
					f.event.remove(this, a, d, c)
				})
			},
			bind: function(a, b, c) {
				return this.on(a, null, b, c)
			},
			unbind: function(a, b) {
				return this.off(a, null, b)
			},
			live: function(a, b, c) {
				f(this.context).on(a, this.selector, b, c);
				return this
			},
			die: function(a, b) {
				f(this.context).off(a, this.selector || "**", b);
				return this
			},
			delegate: function(a, b, c, d) {
				return this.on(b, a, c, d)
			},
			undelegate: function(a, b, c) {
				return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
			},
			trigger: function(a, b) {
				return this.each(function() {
					f.event.trigger(a, b, this)
				})
			},
			triggerHandler: function(a, b) {
				if(this[0]) {
					return f.event.trigger(a, b, this[0], !0)
				}
			},
			toggle: function(a) {
				var b = arguments,
					c = a.guid || f.guid++,
					d = 0,
					e = function(c) {
						var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
						f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
						return b[e].apply(this, arguments) || !1
					};
				e.guid = c;
				while(d < b.length) {
					b[d++].guid = c
				}
				return this.click(e)
			},
			hover: function(a, b) {
				return this.mouseenter(a).mouseleave(b || a)
			}
		}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
			f.fn[b] = function(a, c) {
				c == null && (c = a, a = null);
				return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			}, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
		}),
		function() {
			function x(a, b, c, e, f, g) {
				for(var h = 0, i = e.length; h < i; h++) {
					var j = e[h];
					if(j) {
						var k = !1;
						j = j[a];
						while(j) {
							if(j[d] === c) {
								k = e[j.sizset];
								break
							}
							if(j.nodeType === 1) {
								g || (j[d] = c, j.sizset = h);
								if(typeof b != "string") {
									if(j === b) {
										k = !0;
										break
									}
								} else {
									if(m.filter(b, [j]).length > 0) {
										k = j;
										break
									}
								}
							}
							j = j[a]
						}
						e[h] = k
					}
				}
			}

			function w(a, b, c, e, f, g) {
				for(var h = 0, i = e.length; h < i; h++) {
					var j = e[h];
					if(j) {
						var k = !1;
						j = j[a];
						while(j) {
							if(j[d] === c) {
								k = e[j.sizset];
								break
							}
							j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
							if(j.nodeName.toLowerCase() === b) {
								k = j;
								break
							}
							j = j[a]
						}
						e[h] = k
					}
				}
			}

			var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
				d = "sizcache" + (Math.random() + "").replace(".", ""),
				e = 0,
				g = Object.prototype.toString,
				h = !1,
				i = !0,
				j = /\\/g,
				k = /\r\n/g,
				l = /\W/;
			[0, 0].sort(function() {
				i = !1;
				return 0
			});
			var m = function(b, d, e, f) {
				e = e || [], d = d || c;
				var h = d;
				if(d.nodeType !== 1 && d.nodeType !== 9) {
					return []
				}
				if(!b || typeof b != "string") {
					return e
				}
				var i, j, k, l, n, q, r, t, u = !0,
					v = m.isXML(d),
					w = [],
					x = b;
				do {
					a.exec(""), i = a.exec(x);
					if(i) {
						x = i[3], w.push(i[1]);
						if(i[2]) {
							l = i[3];
							break
						}
					}
				} while (i);
				if(w.length > 1 && p.exec(b)) {
					if(w.length === 2 && o.relative[w[0]]) {
						j = y(w[0] + w[1], d, f)
					} else {
						j = o.relative[w[0]] ? [d] : m(w.shift(), d);
						while(w.length) {
							b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
						}
					}
				} else {
					!f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
					if(d) {
						n = f ? {
							expr: w.pop(),
							set: s(f)
						} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
						while(w.length) {
							q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
						}
					} else {
						k = w = []
					}
				}
				k || (k = j), k || m.error(q || b);
				if(g.call(k) === "[object Array]") {
					if(!u) {
						e.push.apply(e, k)
					} else {
						if(d && d.nodeType === 1) {
							for(t = 0; k[t] != null; t++) {
								k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
							}
						} else {
							for(t = 0; k[t] != null; t++) {
								k[t] && k[t].nodeType === 1 && e.push(j[t])
							}
						}
					}
				} else {
					s(k, e)
				}
				l && (m(l, h, e, f), m.uniqueSort(e));
				return e
			};
			m.uniqueSort = function(a) {
				if(u) {
					h = i, a.sort(u);
					if(h) {
						for(var b = 1; b < a.length; b++) {
							a[b] === a[b - 1] && a.splice(b--, 1)
						}
					}
				}
				return a
			}, m.matches = function(a, b) {
				return m(a, null, null, b)
			}, m.matchesSelector = function(a, b) {
				return m(b, null, null, [a]).length > 0
			}, m.find = function(a, b, c) {
				var d, e, f, g, h, i;
				if(!a) {
					return []
				}
				for(e = 0, f = o.order.length; e < f; e++) {
					h = o.order[e];
					if(g = o.leftMatch[h].exec(a)) {
						i = g[1], g.splice(1, 1);
						if(i.substr(i.length - 1) !== "\\") {
							g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
							if(d != null) {
								a = a.replace(o.match[h], "");
								break
							}
						}
					}
				}
				d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
				return {
					set: d,
					expr: a
				}
			}, m.filter = function(a, c, d, e) {
				var f, g, h, i, j, k, l, n, p, q = a,
					r = [],
					s = c,
					t = c && c[0] && m.isXML(c[0]);
				while(a && c.length) {
					for(h in o.filter) {
						if((f = o.leftMatch[h].exec(a)) != null && f[2]) {
							k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
							if(l.substr(l.length - 1) === "\\") {
								continue
							}
							s === r && (r = []);
							if(o.preFilter[h]) {
								f = o.preFilter[h](f, s, d, r, e, t);
								if(!f) {
									g = i = !0
								} else {
									if(f === !0) {
										continue
									}
								}
							}
							if(f) {
								for(n = 0;
									(j = s[n]) != null; n++) {
									j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
								}
							}
							if(i !== b) {
								d || (s = r), a = a.replace(o.match[h], "");
								if(!g) {
									return []
								}
								break
							}
						}
					}
					if(a === q) {
						if(g == null) {
							m.error(a)
						} else {
							break
						}
					}
					q = a
				}
				return s
			}, m.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			};
			var n = m.getText = function(a) {
					var b, c, d = a.nodeType,
						e = "";
					if(d) {
						if(d === 1 || d === 9 || d === 11) {
							if(typeof a.textContent == "string") {
								return a.textContent
							}
							if(typeof a.innerText == "string") {
								return a.innerText.replace(k, "")
							}
							for(a = a.firstChild; a; a = a.nextSibling) {
								e += n(a)
							}
						} else {
							if(d === 3 || d === 4) {
								return a.nodeValue
							}
						}
					} else {
						for(b = 0; c = a[b]; b++) {
							c.nodeType !== 8 && (e += n(c))
						}
					}
					return e
				},
				o = m.selectors = {
					order: ["ID", "NAME", "TAG"],
					match: {
						ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
						CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
						NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
						ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
						TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
						CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
						POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
						PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
					},
					leftMatch: {},
					attrMap: {
						"class": "className",
						"for": "htmlFor"
					},
					attrHandle: {
						href: function(a) {
							return a.getAttribute("href")
						},
						type: function(a) {
							return a.getAttribute("type")
						}
					},
					relative: {
						"+": function(a, b) {
							var c = typeof b == "string",
								d = c && !l.test(b),
								e = c && !d;
							d && (b = b.toLowerCase());
							for(var f = 0, g = a.length, h; f < g; f++) {
								if(h = a[f]) {
									while((h = h.previousSibling) && h.nodeType !== 1) {}
									a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
								}
							}
							e && m.filter(b, a, !0)
						},
						">": function(a, b) {
							var c, d = typeof b == "string",
								e = 0,
								f = a.length;
							if(d && !l.test(b)) {
								b = b.toLowerCase();
								for(; e < f; e++) {
									c = a[e];
									if(c) {
										var g = c.parentNode;
										a[e] = g.nodeName.toLowerCase() === b ? g : !1
									}
								}
							} else {
								for(; e < f; e++) {
									c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
								}
								d && m.filter(b, a, !0)
							}
						},
						"": function(a, b, c) {
							var d, f = e++,
								g = x;
							typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
						},
						"~": function(a, b, c) {
							var d, f = e++,
								g = x;
							typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
						}
					},
					find: {
						ID: function(a, b, c) {
							if(typeof b.getElementById != "undefined" && !c) {
								var d = b.getElementById(a[1]);
								return d && d.parentNode ? [d] : []
							}
						},
						NAME: function(a, b) {
							if(typeof b.getElementsByName != "undefined") {
								var c = [],
									d = b.getElementsByName(a[1]);
								for(var e = 0, f = d.length; e < f; e++) {
									d[e].getAttribute("name") === a[1] && c.push(d[e])
								}
								return c.length === 0 ? null : c
							}
						},
						TAG: function(a, b) {
							if(typeof b.getElementsByTagName != "undefined") {
								return b.getElementsByTagName(a[1])
							}
						}
					},
					preFilter: {
						CLASS: function(a, b, c, d, e, f) {
							a = " " + a[1].replace(j, "") + " ";
							if(f) {
								return a
							}
							for(var g = 0, h;
								(h = b[g]) != null; g++) {
								h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
							}
							return !1
						},
						ID: function(a) {
							return a[1].replace(j, "")
						},
						TAG: function(a, b) {
							return a[1].replace(j, "").toLowerCase()
						},
						CHILD: function(a) {
							if(a[1] === "nth") {
								a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
								var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
								a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
							} else {
								a[2] && m.error(a[0])
							}
							a[0] = e++;
							return a
						},
						ATTR: function(a, b, c, d, e, f) {
							var g = a[1] = a[1].replace(j, "");
							!f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
							return a
						},
						PSEUDO: function(b, c, d, e, f) {
							if(b[1] === "not") {
								if((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
									b[3] = m(b[3], null, null, c)
								} else {
									var g = m.filter(b[3], c, d, !0 ^ f);
									d || e.push.apply(e, g);
									return !1
								}
							} else {
								if(o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
									return !0
								}
							}
							return b
						},
						POS: function(a) {
							a.unshift(!0);
							return a
						}
					},
					filters: {
						enabled: function(a) {
							return a.disabled === !1 && a.type !== "hidden"
						},
						disabled: function(a) {
							return a.disabled === !0
						},
						checked: function(a) {
							return a.checked === !0
						},
						selected: function(a) {
							a.parentNode && a.parentNode.selectedIndex;
							return a.selected === !0
						},
						parent: function(a) {
							return !!a.firstChild
						},
						empty: function(a) {
							return !a.firstChild
						},
						has: function(a, b, c) {
							return !!m(c[3], a).length
						},
						header: function(a) {
							return /h\d/i.test(a.nodeName)
						},
						text: function(a) {
							var b = a.getAttribute("type"),
								c = a.type;
							return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
						},
						radio: function(a) {
							return a.nodeName.toLowerCase() === "input" && "radio" === a.type
						},
						checkbox: function(a) {
							return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
						},
						file: function(a) {
							return a.nodeName.toLowerCase() === "input" && "file" === a.type
						},
						password: function(a) {
							return a.nodeName.toLowerCase() === "input" && "password" === a.type
						},
						submit: function(a) {
							var b = a.nodeName.toLowerCase();
							return(b === "input" || b === "button") && "submit" === a.type
						},
						image: function(a) {
							return a.nodeName.toLowerCase() === "input" && "image" === a.type
						},
						reset: function(a) {
							var b = a.nodeName.toLowerCase();
							return(b === "input" || b === "button") && "reset" === a.type
						},
						button: function(a) {
							var b = a.nodeName.toLowerCase();
							return b === "input" && "button" === a.type || b === "button"
						},
						input: function(a) {
							return /input|select|textarea|button/i.test(a.nodeName)
						},
						focus: function(a) {
							return a === a.ownerDocument.activeElement
						}
					},
					setFilters: {
						first: function(a, b) {
							return b === 0
						},
						last: function(a, b, c, d) {
							return b === d.length - 1
						},
						even: function(a, b) {
							return b % 2 === 0
						},
						odd: function(a, b) {
							return b % 2 === 1
						},
						lt: function(a, b, c) {
							return b < c[3] - 0
						},
						gt: function(a, b, c) {
							return b > c[3] - 0
						},
						nth: function(a, b, c) {
							return c[3] - 0 === b
						},
						eq: function(a, b, c) {
							return c[3] - 0 === b
						}
					},
					filter: {
						PSEUDO: function(a, b, c, d) {
							var e = b[1],
								f = o.filters[e];
							if(f) {
								return f(a, c, b, d)
							}
							if(e === "contains") {
								return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
							}
							if(e === "not") {
								var g = b[3];
								for(var h = 0, i = g.length; h < i; h++) {
									if(g[h] === a) {
										return !1
									}
								}
								return !0
							}
							m.error(e)
						},
						CHILD: function(a, b) {
							var c, e, f, g, h, i, j, k = b[1],
								l = a;
							switch(k) {
								case "only":
								case "first":
									while(l = l.previousSibling) {
										if(l.nodeType === 1) {
											return !1
										}
									}
									if(k === "first") {
										return !0
									}
									l = a;
								case "last":
									while(l = l.nextSibling) {
										if(l.nodeType === 1) {
											return !1
										}
									}
									return !0;
								case "nth":
									c = b[2], e = b[3];
									if(c === 1 && e === 0) {
										return !0
									}
									f = b[0], g = a.parentNode;
									if(g && (g[d] !== f || !a.nodeIndex)) {
										i = 0;
										for(l = g.firstChild; l; l = l.nextSibling) {
											l.nodeType === 1 && (l.nodeIndex = ++i)
										}
										g[d] = f
									}
									j = a.nodeIndex - e;
									return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
							}
						},
						ID: function(a, b) {
							return a.nodeType === 1 && a.getAttribute("id") === b
						},
						TAG: function(a, b) {
							return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
						},
						CLASS: function(a, b) {
							return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
						},
						ATTR: function(a, b) {
							var c = b[1],
								d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
								e = d + "",
								f = b[2],
								g = b[4];
							return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
						},
						POS: function(a, b, c, d) {
							var e = b[2],
								f = o.setFilters[e];
							if(f) {
								return f(a, c, b, d)
							}
						}
					}
				},
				p = o.match.POS,
				q = function(a, b) {
					return "\\" + (b - 0 + 1)
				};
			for(var r in o.match) {
				o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
			}
			o.match.globalPOS = p;
			var s = function(a, b) {
				a = Array.prototype.slice.call(a, 0);
				if(b) {
					b.push.apply(b, a);
					return b
				}
				return a
			};
			try {
				Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
			} catch(t) {
				s = function(a, b) {
					var c = 0,
						d = b || [];
					if(g.call(a) === "[object Array]") {
						Array.prototype.push.apply(d, a)
					} else {
						if(typeof a.length == "number") {
							for(var e = a.length; c < e; c++) {
								d.push(a[c])
							}
						} else {
							for(; a[c]; c++) {
								d.push(a[c])
							}
						}
					}
					return d
				}
			}
			var u, v;
			c.documentElement.compareDocumentPosition ? u = function(a, b) {
					if(a === b) {
						h = !0;
						return 0
					}
					if(!a.compareDocumentPosition || !b.compareDocumentPosition) {
						return a.compareDocumentPosition ? -1 : 1
					}
					return a.compareDocumentPosition(b) & 4 ? -1 : 1
				} : (u = function(a, b) {
					if(a === b) {
						h = !0;
						return 0
					}
					if(a.sourceIndex && b.sourceIndex) {
						return a.sourceIndex - b.sourceIndex
					}
					var c, d, e = [],
						f = [],
						g = a.parentNode,
						i = b.parentNode,
						j = g;
					if(g === i) {
						return v(a, b)
					}
					if(!g) {
						return -1
					}
					if(!i) {
						return 1
					}
					while(j) {
						e.unshift(j), j = j.parentNode
					}
					j = i;
					while(j) {
						f.unshift(j), j = j.parentNode
					}
					c = e.length, d = f.length;
					for(var k = 0; k < c && k < d; k++) {
						if(e[k] !== f[k]) {
							return v(e[k], f[k])
						}
					}
					return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
				}, v = function(a, b, c) {
					if(a === b) {
						return c
					}
					var d = a.nextSibling;
					while(d) {
						if(d === b) {
							return -1
						}
						d = d.nextSibling
					}
					return 1
				}),
				function() {
					var a = c.createElement("div"),
						d = "script" + (new Date).getTime(),
						e = c.documentElement;
					a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
						if(typeof c.getElementById != "undefined" && !d) {
							var e = c.getElementById(a[1]);
							return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
						}
					}, o.filter.ID = function(a, b) {
						var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
						return a.nodeType === 1 && c && c.nodeValue === b
					}), e.removeChild(a), e = a = null
				}(),
				function() {
					var a = c.createElement("div");
					a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
						var c = b.getElementsByTagName(a[1]);
						if(a[1] === "*") {
							var d = [];
							for(var e = 0; c[e]; e++) {
								c[e].nodeType === 1 && d.push(c[e])
							}
							c = d
						}
						return c
					}), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
						return a.getAttribute("href", 2)
					}), a = null
				}(), c.querySelectorAll && function() {
					var a = m,
						b = c.createElement("div"),
						d = "__sizzle__";
					b.innerHTML = "<p class='TEST'></p>";
					if(!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
						m = function(b, e, f, g) {
							e = e || c;
							if(!g && !m.isXML(e)) {
								var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
								if(h && (e.nodeType === 1 || e.nodeType === 9)) {
									if(h[1]) {
										return s(e.getElementsByTagName(b), f)
									}
									if(h[2] && o.find.CLASS && e.getElementsByClassName) {
										return s(e.getElementsByClassName(h[2]), f)
									}
								}
								if(e.nodeType === 9) {
									if(b === "body" && e.body) {
										return s([e.body], f)
									}
									if(h && h[3]) {
										var i = e.getElementById(h[3]);
										if(!i || !i.parentNode) {
											return s([], f)
										}
										if(i.id === h[3]) {
											return s([i], f)
										}
									}
									try {
										return s(e.querySelectorAll(b), f)
									} catch(j) {}
								} else {
									if(e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
										var k = e,
											l = e.getAttribute("id"),
											n = l || d,
											p = e.parentNode,
											q = /^\s*[+~]/.test(b);
										l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
										try {
											if(!q || p) {
												return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
											}
										} catch(r) {} finally {
											l || k.removeAttribute("id")
										}
									}
								}
							}
							return a(b, e, f, g)
						};
						for(var e in a) {
							m[e] = a[e]
						}
						b = null
					}
				}(),
				function() {
					var a = c.documentElement,
						b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
					if(b) {
						var d = !b.call(c.createElement("div"), "div"),
							e = !1;
						try {
							b.call(c.documentElement, "[test!='']:sizzle")
						} catch(f) {
							e = !0
						}
						m.matchesSelector = function(a, c) {
							c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
							if(!m.isXML(a)) {
								try {
									if(e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
										var f = b.call(a, c);
										if(f || !d || a.document && a.document.nodeType !== 11) {
											return f
										}
									}
								} catch(g) {}
							}
							return m(c, null, null, [a]).length > 0
						}
					}
				}(),
				function() {
					var a = c.createElement("div");
					a.innerHTML = "<div class='test e'></div><div class='test'></div>";
					if(!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
						a.lastChild.className = "e";
						if(a.getElementsByClassName("e").length === 1) {
							return
						}
						o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
							if(typeof b.getElementsByClassName != "undefined" && !c) {
								return b.getElementsByClassName(a[1])
							}
						}, a = null
					}
				}(), c.documentElement.contains ? m.contains = function(a, b) {
					return a !== b && (a.contains ? a.contains(b) : !0)
				} : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
					return !!(a.compareDocumentPosition(b) & 16)
				} : m.contains = function() {
					return !1
				}, m.isXML = function(a) {
					var b = (a ? a.ownerDocument || a : 0).documentElement;
					return b ? b.nodeName !== "HTML" : !1
				};
			var y = function(a, b, c) {
				var d, e = [],
					f = "",
					g = b.nodeType ? [b] : b;
				while(d = o.match.PSEUDO.exec(a)) {
					f += d[0], a = a.replace(o.match.PSEUDO, "")
				}
				a = o.relative[a] ? a + "*" : a;
				for(var h = 0, i = g.length; h < i; h++) {
					m(a, g[h], e, c)
				}
				return m.filter(f, e)
			};
			m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
		}();
	var L = /Until$/,
		M = /^(?:parents|prevUntil|prevAll)/,
		N = /,/,
		O = /^.[^:#\[\.,]*$/,
		P = Array.prototype.slice,
		Q = f.expr.match.globalPOS,
		R = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	f.fn.extend({
		find: function(a) {
			var b = this,
				c, d;
			if(typeof a != "string") {
				return f(a).filter(function() {
					for(c = 0, d = b.length; c < d; c++) {
						if(f.contains(b[c], this)) {
							return !0
						}
					}
				})
			}
			var e = this.pushStack("", "find", a),
				g, h, i;
			for(c = 0, d = this.length; c < d; c++) {
				g = e.length, f.find(a, this[c], e);
				if(c > 0) {
					for(h = g; h < e.length; h++) {
						for(i = 0; i < g; i++) {
							if(e[i] === e[h]) {
								e.splice(h--, 1);
								break
							}
						}
					}
				}
			}
			return e
		},
		has: function(a) {
			var b = f(a);
			return this.filter(function() {
				for(var a = 0, c = b.length; a < c; a++) {
					if(f.contains(this, b[a])) {
						return !0
					}
				}
			})
		},
		not: function(a) {
			return this.pushStack(T(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(T(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var c = [],
				d, e, g = this[0];
			if(f.isArray(a)) {
				var h = 1;
				while(g && g.ownerDocument && g !== b) {
					for(d = 0; d < a.length; d++) {
						f(g).is(a[d]) && c.push({
							selector: a[d],
							elem: g,
							level: h
						})
					}
					g = g.parentNode, h++
				}
				return c
			}
			var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
			for(d = 0, e = this.length; d < e; d++) {
				g = this[d];
				while(g) {
					if(i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
						c.push(g);
						break
					}
					g = g.parentNode;
					if(!g || !g.ownerDocument || g === b || g.nodeType === 11) {
						break
					}
				}
			}
			c = c.length > 1 ? f.unique(c) : c;
			return this.pushStack(c, "closest", a)
		},
		index: function(a) {
			if(!a) {
				return this[0] && this[0].parentNode ? this.prevAll().length : -1
			}
			if(typeof a == "string") {
				return f.inArray(this[0], f(a))
			}
			return f.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
				d = f.merge(this.get(), c);
			return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), f.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents: function(a) {
			return f.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return f.dir(a, "parentNode", c)
		},
		next: function(a) {
			return f.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return f.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return f.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return f.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return f.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return f.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return f.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return f.sibling(a.firstChild)
		},
		contents: function(a) {
			return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
		}
	}, function(a, b) {
		f.fn[a] = function(c, d) {
			var e = f.map(this, b, c);
			L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
			return this.pushStack(e, a, P.call(arguments).join(","))
		}
	}), f.extend({
		filter: function(a, b, c) {
			c && (a = ":not(" + a + ")");
			return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
		},
		dir: function(a, c, d) {
			var e = [],
				g = a[c];
			while(g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
				g.nodeType === 1 && e.push(g), g = g[c]
			}
			return e
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			var e = 0;
			for(; a; a = a[c]) {
				if(a.nodeType === 1 && ++e === b) {
					break
				}
			}
			return a
		},
		sibling: function(a, b) {
			var c = [];
			for(; a; a = a.nextSibling) {
				a.nodeType === 1 && a !== b && c.push(a)
			}
			return c
		}
	});
	var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		W = / jQuery\d+="(?:\d+|null)"/g,
		X = /^\s+/,
		Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		Z = /<([\w:]+)/,
		$ = /<tbody/i,
		_ = /<|&#?\w+;/,
		ba = /<(?:script|style)/i,
		bb = /<(?:script|object|embed|option|style)/i,
		bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
		bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
		be = /\/(java|ecma)script/i,
		bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
		bg = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		bh = U(c);
	bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
		text: function(a) {
			return f.access(this, function(a) {
				return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
			}, null, a, arguments.length)
		},
		wrapAll: function(a) {
			if(f.isFunction(a)) {
				return this.each(function(b) {
					f(this).wrapAll(a.call(this, b))
				})
			}
			if(this[0]) {
				var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					var a = this;
					while(a.firstChild && a.firstChild.nodeType === 1) {
						a = a.firstChild
					}
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if(f.isFunction(a)) {
				return this.each(function(b) {
					f(this).wrapInner(a.call(this, b))
				})
			}
			return this.each(function() {
				var b = f(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = f.isFunction(a);
			return this.each(function(c) {
				f(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if(this[0] && this[0].parentNode) {
				return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this)
				})
			}
			if(arguments.length) {
				var a = f.clean(arguments);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if(this[0] && this[0].parentNode) {
				return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				})
			}
			if(arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, f.clean(arguments));
				return a
			}
		},
		remove: function(a, b) {
			for(var c = 0, d;
				(d = this[c]) != null; c++) {
				if(!a || f.filter(a, [d]).length) {
					!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
				}
			}
			return this
		},
		empty: function() {
			for(var a = 0, b;
				(b = this[a]) != null; a++) {
				b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
				while(b.firstChild) {
					b.removeChild(b.firstChild)
				}
			}
			return this
		},
		clone: function(a, b) {
			a = a == null ? !1 : a, b = b == null ? a : b;
			return this.map(function() {
				return f.clone(this, a, b)
			})
		},
		html: function(a) {
			return f.access(this, function(a) {
				var c = this[0] || {},
					d = 0,
					e = this.length;
				if(a === b) {
					return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null
				}
				if(typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Y, "<$1></$2>");
					try {
						for(; d < e; d++) {
							c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
						}
						c = 0
					} catch(g) {}
				}
				c && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function(a) {
			if(this[0] && this[0].parentNode) {
				if(f.isFunction(a)) {
					return this.each(function(b) {
						var c = f(this),
							d = c.html();
						c.replaceWith(a.call(this, b, d))
					})
				}
				typeof a != "string" && (a = f(a).detach());
				return this.each(function() {
					var b = this.nextSibling,
						c = this.parentNode;
					f(this).remove(), b ? f(b).before(a) : f(c).append(a)
				})
			}
			return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, c, d) {
			var e, g, h, i, j = a[0],
				k = [];
			if(!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
				return this.each(function() {
					f(this).domManip(a, c, d, !0)
				})
			}
			if(f.isFunction(j)) {
				return this.each(function(e) {
					var g = f(this);
					a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
				})
			}
			if(this[0]) {
				i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
					fragment: i
				} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
				if(g) {
					c = c && f.nodeName(g, "tr");
					for(var l = 0, m = this.length, n = m - 1; l < m; l++) {
						d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
					}
				}
				k.length && f.each(k, function(a, b) {
					b.src ? f.ajax({
						type: "GET",
						global: !1,
						url: b.src,
						async: !1,
						dataType: "script"
					}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
				})
			}
			return this
		}
	}), f.buildFragment = function(a, b, d) {
		var e, g, h, i, j = a[0];
		b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
		return {
			fragment: e,
			cacheable: g
		}
	}, f.fragments = {}, f.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		f.fn[a] = function(c) {
			var d = [],
				e = f(c),
				g = this.length === 1 && this[0].parentNode;
			if(g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
				e[b](this[0]);
				return this
			}
			for(var h = 0, i = e.length; h < i; h++) {
				var j = (h > 0 ? this.clone(!0) : this).get();
				f(e[h])[b](j), d = d.concat(j)
			}
			return this.pushStack(d, a, e.selector)
		}
	}), f.extend({
		clone: function(a, b, c) {
			var d, e, g,
				h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
			if((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
				bk(a, h), d = bl(a), e = bl(h);
				for(g = 0; d[g]; ++g) {
					e[g] && bk(d[g], e[g])
				}
			}
			if(b) {
				bj(a, h);
				if(c) {
					d = bl(a), e = bl(h);
					for(g = 0; d[g]; ++g) {
						bj(d[g], e[g])
					}
				}
			}
			d = e = null;
			return h
		},
		clean: function(a, b, d, e) {
			var g, h, i, j = [];
			b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
			for(var k = 0, l;
				(l = a[k]) != null; k++) {
				typeof l == "number" && (l += "");
				if(!l) {
					continue
				}
				if(typeof l == "string") {
					if(!_.test(l)) {
						l = b.createTextNode(l)
					} else {
						l = l.replace(Y, "<$1></$2>");
						var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
							n = bg[m] || bg._default,
							o = n[0],
							p = b.createElement("div"),
							q = bh.childNodes,
							r;
						b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
						while(o--) {
							p = p.lastChild
						}
						if(!f.support.tbody) {
							var s = $.test(l),
								t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
							for(i = t.length - 1; i >= 0; --i) {
								f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
							}
						}!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
					}
				}
				var u;
				if(!f.support.appendChecked) {
					if(l[0] && typeof(u = l.length) == "number") {
						for(i = 0; i < u; i++) {
							bn(l[i])
						}
					} else {
						bn(l)
					}
				}
				l.nodeType ? j.push(l) : j = f.merge(j, l)
			}
			if(d) {
				g = function(a) {
					return !a.type || be.test(a.type)
				};
				for(k = 0; j[k]; k++) {
					h = j[k];
					if(e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) {
						e.push(h.parentNode ? h.parentNode.removeChild(h) : h)
					} else {
						if(h.nodeType === 1) {
							var v = f.grep(h.getElementsByTagName("script"), g);
							j.splice.apply(j, [k + 1, 0].concat(v))
						}
						d.appendChild(h)
					}
				}
			}
			return j
		},
		cleanData: function(a) {
			var b, c, d = f.cache,
				e = f.event.special,
				g = f.support.deleteExpando;
			for(var h = 0, i;
				(i = a[h]) != null; h++) {
				if(i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
					continue
				}
				c = i[f.expando];
				if(c) {
					b = d[c];
					if(b && b.events) {
						for(var j in b.events) {
							e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
						}
						b.handle && (b.handle.elem = null)
					}
					g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
				}
			}
		}
	});
	var bp = /alpha\([^)]*\)/i,
		bq = /opacity=([^)]*)/,
		br = /([A-Z]|^ms)/g,
		bs = /^[\-+]?(?:\d*\.)?\d+$/i,
		bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
		bu = /^([\-+])=([\-+.\de]+)/,
		bv = /^margin/,
		bw = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		bx = ["Top", "Right", "Bottom", "Left"],
		by, bz, bA;
	f.fn.css = function(a, c) {
		return f.access(this, function(a, c, d) {
			return d !== b ? f.style(a, c, d) : f.css(a, c)
		}, a, c, arguments.length > 1)
	}, f.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if(b) {
						var c = by(a, "opacity");
						return c === "" ? "1" : c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": f.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, c, d, e) {
			if(!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
				var g, h, i = f.camelCase(c),
					j = a.style,
					k = f.cssHooks[i];
				c = f.cssProps[i] || i;
				if(d === b) {
					if(k && "get" in k && (g = k.get(a, !1, e)) !== b) {
						return g
					}
					return j[c]
				}
				h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
				if(d == null || h === "number" && isNaN(d)) {
					return
				}
				h === "number" && !f.cssNumber[i] && (d += "px");
				if(!k || !("set" in k) || (d = k.set(a, d)) !== b) {
					try {
						j[c] = d
					} catch(l) {}
				}
			}
		},
		css: function(a, c, d) {
			var e, g;
			c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
			if(g && "get" in g && (e = g.get(a, !0, d)) !== b) {
				return e
			}
			if(by) {
				return by(a, c)
			}
		},
		swap: function(a, b, c) {
			var d = {},
				e, f;
			for(f in b) {
				d[f] = a.style[f], a.style[f] = b[f]
			}
			e = c.call(a);
			for(f in b) {
				a.style[f] = d[f]
			}
			return e
		}
	}), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
		var c, d, e, g, h = a.style;
		b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
		return c
	}), c.documentElement.currentStyle && (bA = function(a, b) {
		var c, d, e, f = a.currentStyle && a.currentStyle[b],
			g = a.style;
		f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
		return f === "" ? "auto" : f
	}), by = bz || bA, f.each(["height", "width"], function(a, b) {
		f.cssHooks[b] = {
			get: function(a, c, d) {
				if(c) {
					return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function() {
						return bB(a, b, d)
					})
				}
			},
			set: function(a, b) {
				return bs.test(b) ? b + "px" : b
			}
		}
	}), f.support.opacity || (f.cssHooks.opacity = {
		get: function(a, b) {
			return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
				g = d && d.filter || c.filter || "";
			c.zoom = 1;
			if(b >= 1 && f.trim(g.replace(bp, "")) === "") {
				c.removeAttribute("filter");
				if(d && !d.filter) {
					return
				}
			}
			c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
		}
	}), f(function() {
		f.support.reliableMarginRight || (f.cssHooks.marginRight = {
			get: function(a, b) {
				return f.swap(a, {
					display: "inline-block"
				}, function() {
					return b ? by(a, "margin-right") : a.style.marginRight
				})
			}
		})
	}), f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight;
		return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
	}, f.expr.filters.visible = function(a) {
		return !f.expr.filters.hidden(a)
	}), f.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		f.cssHooks[a + b] = {
			expand: function(c) {
				var d, e = typeof c == "string" ? c.split(" ") : [c],
					f = {};
				for(d = 0; d < 4; d++) {
					f[a + bx[d] + b] = e[d] || e[d - 2] || e[0]
				}
				return f
			}
		}
	});
	var bC = /%20/g,
		bD = /\[\]$/,
		bE = /\r?\n/g,
		bF = /#.*$/,
		bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		bJ = /^(?:GET|HEAD)$/,
		bK = /^\/\//,
		bL = /\?/,
		bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		bN = /^(?:select|textarea)/i,
		bO = /\s+/,
		bP = /([?&])_=[^&]*/,
		bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		bR = f.fn.load,
		bS = {},
		bT = {},
		bU, bV, bW = ["*/"] + ["*"];
	try {
		bU = e.href
	} catch(bX) {
		bU = c.createElement("a"), bU.href = "", bU = bU.href
	}
	bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
		load: function(a, c, d) {
			if(typeof a != "string" && bR) {
				return bR.apply(this, arguments)
			}
			if(!this.length) {
				return this
			}
			var e = a.indexOf(" ");
			if(e >= 0) {
				var g = a.slice(e, a.length);
				a = a.slice(0, e)
			}
			var h = "GET";
			c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
			var i = this;
			f.ajax({
				url: a,
				type: h,
				dataType: "html",
				data: c,
				complete: function(a, b, c) {
					c = a.responseText, a.isResolved() && (a.done(function(a) {
						c = a
					}), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
				}
			});
			return this
		},
		serialize: function() {
			return f.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? f.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
			}).map(function(a, b) {
				var c = f(this).val();
				return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
					return {
						name: b.name,
						value: a.replace(bE, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(bE, "\r\n")
				}
			}).get()
		}
	}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		f.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), f.each(["get", "post"], function(a, c) {
		f[c] = function(a, d, e, g) {
			f.isFunction(d) && (g = g || e, e = d, d = b);
			return f.ajax({
				type: c,
				url: a,
				data: d,
				success: e,
				dataType: g
			})
		}
	}), f.extend({
		getScript: function(a, c) {
			return f.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return f.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
			return a
		},
		ajaxSettings: {
			url: bU,
			isLocal: bI.test(bV[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": bW
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": f.parseJSON,
				"text xml": f.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: bY(bS),
		ajaxTransport: bY(bT),
		ajax: function(a, c) {
			function w(a, c, l, m) {
				if(s !== 2) {
					s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
					var o, r, u, w = c,
						x = l ? ca(d, v, l) : b,
						y, z;
					if(a >= 200 && a < 300 || a === 304) {
						if(d.ifModified) {
							if(y = v.getResponseHeader("Last-Modified")) {
								f.lastModified[k] = y
							}
							if(z = v.getResponseHeader("Etag")) {
								f.etag[k] = z
							}
						}
						if(a === 304) {
							w = "notmodified", o = !0
						} else {
							try {
								r = cb(d, x), w = "success", o = !0
							} catch(A) {
								w = "parsererror", u = A
							}
						}
					} else {
						u = w;
						if(!w || a) {
							w = "error", a < 0 && (a = 0)
						}
					}
					v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
				}
			}

			typeof a == "object" && (c = a, a = b), c = c || {};
			var d = f.ajaxSetup({}, c),
				e = d.context || d,
				g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
				h = f.Deferred(),
				i = f.Callbacks("once memory"),
				j = d.statusCode || {},
				k, l = {},
				m = {},
				n, o, p, q, r, s = 0,
				t, u,
				v = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if(!s) {
							var c = a.toLowerCase();
							a = m[c] = m[c] || a, l[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return s === 2 ? n : null
					},
					getResponseHeader: function(a) {
						var c;
						if(s === 2) {
							if(!o) {
								o = {};
								while(c = bG.exec(n)) {
									o[c[1].toLowerCase()] = c[2]
								}
							}
							c = o[a.toLowerCase()]
						}
						return c === b ? null : c
					},
					overrideMimeType: function(a) {
						s || (d.mimeType = a);
						return this
					},
					abort: function(a) {
						a = a || "abort", p && p.abort(a), w(0, a);
						return this
					}
				};
			h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
				if(a) {
					var b;
					if(s < 2) {
						for(b in a) {
							j[b] = [j[b], a[b]]
						}
					} else {
						b = a[v.status], v.then(b, b)
					}
				}
				return this
			}, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
			if(s === 2) {
				return !1
			}
			t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
			if(!d.hasContent) {
				d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
				if(d.cache === !1) {
					var x = f.now(),
						y = d.url.replace(bP, "$1_=" + x);
					d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
				}
			}
			(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
			for(u in d.headers) {
				v.setRequestHeader(u, d.headers[u])
			}
			if(d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
				v.abort();
				return !1
			}
			for(u in {
					success: 1,
					error: 1,
					complete: 1
				}) {
				v[u](d[u])
			}
			p = bZ(bT, d, c, v);
			if(!p) {
				w(-1, "No Transport")
			} else {
				v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
					v.abort("timeout")
				}, d.timeout));
				try {
					s = 1, p.send(l, w)
				} catch(z) {
					if(s < 2) {
						w(-1, z)
					} else {
						throw z
					}
				}
			}
			return v
		},
		param: function(a, c) {
			var d = [],
				e = function(a, b) {
					b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			c === b && (c = f.ajaxSettings.traditional);
			if(f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
				f.each(a, function() {
					e(this.name, this.value)
				})
			} else {
				for(var g in a) {
					b_(g, a[g], c, e)
				}
			}
			return d.join("&").replace(bC, "+")
		}
	}), f.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var cc = f.now(),
		cd = /(\=)\?(&|$)|\?\?/i;
	f.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return f.expando + "_" + cc++
		}
	}), f.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
		if(b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
			var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
				i = a[h],
				j = b.url,
				k = b.data,
				l = "$1" + h + "$2";
			b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
				g = [a]
			}, d.always(function() {
				a[h] = i, g && f.isFunction(i) && a[h](g[0])
			}), b.converters["script json"] = function() {
				g || f.error(h + " was not called");
				return g[0]
			}, b.dataTypes[0] = "json";
			return "script"
		}
	}), f.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				f.globalEval(a);
				return a
			}
		}
	}), f.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), f.ajaxTransport("script", function(a) {
		if(a.crossDomain) {
			var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
			return {
				send: function(f, g) {
					d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
						if(c || !d.readyState || /loaded|complete/.test(d.readyState)) {
							d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
						}
					}, e.insertBefore(d, e.firstChild)
				},
				abort: function() {
					d && d.onload(0, 1)
				}
			}
		}
	});
	var ce = a.ActiveXObject ? function() {
			for(var a in cg) {
				cg[a](0, 1)
			}
		} : !1,
		cf = 0,
		cg;
	f.ajaxSettings.xhr = a.ActiveXObject ? function() {
			return !this.isLocal && ch() || ci()
		} : ch,
		function(a) {
			f.extend(f.support, {
				ajax: !!a,
				cors: !!a && "withCredentials" in a
			})
		}(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
			if(!c.crossDomain || f.support.cors) {
				var d;
				return {
					send: function(e, g) {
						var h = c.xhr(),
							i, j;
						c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
						if(c.xhrFields) {
							for(j in c.xhrFields) {
								h[j] = c.xhrFields[j]
							}
						}
						c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
						try {
							for(j in e) {
								h.setRequestHeader(j, e[j])
							}
						} catch(k) {}
						h.send(c.hasContent && c.data || null), d = function(a, e) {
							var j, k, l, m, n;
							try {
								if(d && (e || h.readyState === 4)) {
									d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
									if(e) {
										h.readyState !== 4 && h.abort()
									} else {
										j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
										try {
											m.text = h.responseText
										} catch(a) {}
										try {
											k = h.statusText
										} catch(o) {
											k = ""
										}!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
									}
								}
							} catch(p) {
								e || g(-1, p)
							}
							m && g(j, k, m, l)
						}, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
					},
					abort: function() {
						d && d(0, 1)
					}
				}
			}
		});
	var cj = {},
		ck, cl, cm = /^(?:toggle|show|hide)$/,
		cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		co,
		cp = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		cq;
	f.fn.extend({
		show: function(a, b, c) {
			var d, e;
			if(a || a === 0) {
				return this.animate(ct("show", 3), a, b, c)
			}
			for(var g = 0, h = this.length; g < h; g++) {
				d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)))
			}
			for(g = 0; g < h; g++) {
				d = this[g];
				if(d.style) {
					e = d.style.display;
					if(e === "" || e === "none") {
						d.style.display = f._data(d, "olddisplay") || ""
					}
				}
			}
			return this
		},
		hide: function(a, b, c) {
			if(a || a === 0) {
				return this.animate(ct("hide", 3), a, b, c)
			}
			var d, e, g = 0,
				h = this.length;
			for(; g < h; g++) {
				d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
			}
			for(g = 0; g < h; g++) {
				this[g].style && (this[g].style.display = "none")
			}
			return this
		},
		_toggle: f.fn.toggle,
		toggle: function(a, b, c) {
			var d = typeof a == "boolean";
			f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
				var b = d ? a : f(this).is(":hidden");
				f(this)[b ? "show" : "hide"]()
			}) : this.animate(ct("toggle", 3), a, b, c);
			return this
		},
		fadeTo: function(a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			function g() {
				e.queue === !1 && f._mark(this);
				var b = f.extend({}, e),
					c = this.nodeType === 1,
					d = c && f(this).is(":hidden"),
					g, h, i, j, k, l, m,
					n, o, p, q;
				b.animatedProperties = {};
				for(i in a) {
					g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
					if((k = f.cssHooks[g]) && "expand" in k) {
						l = k.expand(a[g]), delete a[g];
						for(i in l) {
							i in a || (a[i] = l[i])
						}
					}
				}
				for(g in a) {
					h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
					if(h === "hide" && d || h === "show" && !d) {
						return b.complete.call(this)
					}
					c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
				}
				b.overflow != null && (this.style.overflow = "hidden");
				for(i in a) {
					j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""))
				}
				return !0
			}

			var e = f.speed(b, c, d);
			if(f.isEmptyObject(a)) {
				return this.each(e.complete, [!1])
			}
			a = f.extend({}, a);
			return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
		},
		stop: function(a, c, d) {
			typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
			return this.each(function() {
				function h(a, b, c) {
					var e = b[c];
					f.removeData(a, c, !0), e.stop(d)
				}

				var b, c = !1,
					e = f.timers,
					g = f._data(this);
				d || f._unmark(!0, this);
				if(a == null) {
					for(b in g) {
						g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
					}
				} else {
					g[b = a + ".run"] && g[b].stop && h(this, g, b)
				}
				for(b = e.length; b--;) {
					e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
				}
				(!d || !c) && f.dequeue(this, a)
			})
		}
	}), f.each({
		slideDown: ct("show", 1),
		slideUp: ct("hide", 1),
		slideToggle: ct("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		f.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), f.extend({
		speed: function(a, b, c) {
			var d = a && typeof a == "object" ? f.extend({}, a) : {
				complete: c || !c && b || f.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !f.isFunction(b) && b
			};
			d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
			if(d.queue == null || d.queue === !0) {
				d.queue = "fx"
			}
			d.old = d.complete, d.complete = function(a) {
				f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
			};
			return d
		},
		easing: {
			linear: function(a) {
				return a
			},
			swing: function(a) {
				return -Math.cos(a * Math.PI) / 2 + 0.5
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
		}
	}), f.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
		},
		cur: function() {
			if(this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
				return this.elem[this.prop]
			}
			var a, b = f.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
		},
		custom: function(a, c, d) {
			function h(a) {
				return e.step(a)
			}

			var e = this,
				g = f.fx;
			this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
				f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
			}, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
		},
		show: function() {
			var a = f._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b, c, d, e = cq || cr(),
				g = !0,
				h = this.elem,
				i = this.options;
			if(a || e >= i.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
				for(b in i.animatedProperties) {
					i.animatedProperties[b] !== !0 && (g = !1)
				}
				if(g) {
					i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
						h.style["overflow" + b] = i.overflow[a]
					}), i.hide && f(h).hide();
					if(i.hide || i.show) {
						for(b in i.animatedProperties) {
							f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
						}
					}
					d = i.complete, d && (i.complete = !1, d.call(h))
				}
				return !1
			}
			i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
			return !0
		}
	}, f.extend(f.fx, {
		tick: function() {
			var a, b = f.timers,
				c = 0;
			for(; c < b.length; c++) {
				a = b[c], !a() && b[c] === a && b.splice(c--, 1)
			}
			b.length || f.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(co), co = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				f.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
			}
		}
	}), f.each(cp.concat.apply([], cp), function(a, b) {
		b.indexOf("margin") && (f.fx.step[b] = function(a) {
			f.style(a.elem, b, Math.max(0, a.now) + a.unit)
		})
	}), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
		return f.grep(f.timers, function(b) {
			return a === b.elem
		}).length
	});
	var cv, cw = /^t(?:able|d|h)$/i,
		cx = /^(?:body|html)$/i;
	"getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
		try {
			d = a.getBoundingClientRect()
		} catch(e) {}
		if(!d || !f.contains(c, a)) {
			return d ? {
				top: d.top,
				left: d.left
			} : {
				top: 0,
				left: 0
			}
		}
		var g = b.body,
			h = cy(b),
			i = c.clientTop || g.clientTop || 0,
			j = c.clientLeft || g.clientLeft || 0,
			k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
			l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
			m = d.top + k - i,
			n = d.left + l - j;
		return {
			top: m,
			left: n
		}
	} : cv = function(a, b, c) {
		var d, e = a.offsetParent,
			g = a,
			h = b.body,
			i = b.defaultView,
			j = i ? i.getComputedStyle(a, null) : a.currentStyle,
			k = a.offsetTop,
			l = a.offsetLeft;
		while((a = a.parentNode) && a !== h && a !== c) {
			if(f.support.fixedPosition && j.position === "fixed") {
				break
			}
			d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
		}
		if(j.position === "relative" || j.position === "static") {
			k += h.offsetTop, l += h.offsetLeft
		}
		f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
		return {
			top: k,
			left: l
		}
	}, f.fn.offset = function(a) {
		if(arguments.length) {
			return a === b ? this : this.each(function(b) {
				f.offset.setOffset(this, a, b)
			})
		}
		var c = this[0],
			d = c && c.ownerDocument;
		if(!d) {
			return null
		}
		if(c === d.body) {
			return f.offset.bodyOffset(c)
		}
		return cv(c, d, d.documentElement)
	}, f.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
			return {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = f.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var e = f(a),
				g = e.offset(),
				h = f.css(a, "top"),
				i = f.css(a, "left"),
				j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
				k = {},
				l = {},
				m, n;
			j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
		}
	}, f.fn.extend({
		position: function() {
			if(!this[0]) {
				return null
			}
			var a = this[0],
				b = this.offsetParent(),
				c = this.offset(),
				d = cx.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || c.body;
				while(a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
					a = a.offsetParent
				}
				return a
			})
		}
	}), f.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, c) {
		var d = /Y/.test(c);
		f.fn[a] = function(e) {
			return f.access(this, function(a, e, g) {
				var h = cy(a);
				if(g === b) {
					return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e]
				}
				h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
			}, a, e, arguments.length, null)
		}
	}), f.each({
		Height: "height",
		Width: "width"
	}, function(a, c) {
		var d = "client" + a,
			e = "scroll" + a,
			g = "offset" + a;
		f.fn["inner" + a] = function() {
			var a = this[0];
			return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
		}, f.fn["outer" + a] = function(a) {
			var b = this[0];
			return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
		}, f.fn[c] = function(a) {
			return f.access(this, function(a, c, h) {
				var i, j, k, l;
				if(f.isWindow(a)) {
					i = a.document, j = i.documentElement[d];
					return f.support.boxModel && j || i.body && i.body[d] || j
				}
				if(a.nodeType === 9) {
					i = a.documentElement;
					if(i[d] >= i[e]) {
						return i[d]
					}
					return Math.max(a.body[e], i[e], a.body[g], i[g])
				}
				if(h === b) {
					k = f.css(a, c), l = parseFloat(k);
					return f.isNumeric(l) ? l : k
				}
				f(a).css(c, h)
			}, c, a, arguments.length, null)
		}
	}), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return f
	})
})(window);

(function() {
	/* 
	 
	 Copyright The Closure Library Authors. 
	 SPDX-License-Identifier: Apache-2.0 
	*/
	var l;

	function aa(a) {
		var b = 0;
		return function() {
			return b < a.length ? {
				done: !1,
				value: a[b++]
			} : {
				done: !0
			}
		}
	}
	var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
		if(a == Array.prototype || a == Object.prototype) return a;
		a[b] = c.value;
		return a
	};

	function ca(a) {
		a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
		for(var b = 0; b < a.length; ++b) {
			var c = a[b];
			if(c && c.Math == Math) return c
		}
		throw Error("Cannot find global object");
	}
	var da = ca(this);

	function ea(a, b) {
		if(b) {
			var c = da;
			a = a.split(".");
			for(var d = 0; d < a.length - 1; d++) {
				var e = a[d];
				e in c || (c[e] = {});
				c = c[e]
			}
			a = a[a.length - 1];
			d = c[a];
			b = b(d);
			b != d && null != b && ba(c, a, {
				configurable: !0,
				writable: !0,
				value: b
			})
		}
	}
	ea("Symbol", function(a) {
		function b(e) {
			if(this instanceof b) throw new TypeError("Symbol is not a constructor");
			return new c("jscomp_symbol_" + (e || "") + "_" + d++, e)
		}

		function c(e, f) {
			this.a = e;
			ba(this, "description", {
				configurable: !0,
				writable: !0,
				value: f
			})
		}
		if(a) return a;
		c.prototype.toString = function() {
			return this.a
		};
		var d = 0;
		return b
	});

	function fa(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : {
			next: aa(a)
		}
	}

	function ha(a) {
		if(!(a instanceof Array)) {
			a = fa(a);
			for(var b, c = []; !(b = a.next()).done;) c.push(b.value);
			a = c
		}
		return a
	}
	var ia = "function" == typeof Object.create ? Object.create : function(a) {
			function b() {}
			b.prototype = a;
			return new b
		},
		ja;
	if("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
	else {
		var ka;
		a: {
			var la = {
					Ga: !0
				},
				ma = {};
			try {
				ma.__proto__ = la;
				ka = ma.Ga;
				break a
			} catch(a) {}
			ka = !1
		}
		ja = ka ? function(a, b) {
			a.__proto__ = b;
			if(a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var na = ja;

	function p(a, b) {
		a.prototype = ia(b.prototype);
		a.prototype.constructor = a;
		if(na) na(a, b);
		else
			for(var c in b)
				if("prototype" != c)
					if(Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d)
					} else a[c] = b[c]
	}

	function oa(a, b, c) {
		if(null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
		if(b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
		return a + ""
	}
	ea("String.prototype.endsWith", function(a) {
		return a ? a : function(b, c) {
			var d = oa(this, b, "endsWith");
			void 0 === c && (c = d.length);
			c = Math.max(0, Math.min(c | 0, d.length));
			for(var e = b.length; 0 < e && 0 < c;)
				if(d[--c] != b[--e]) return !1;
			return 0 >= e
		}
	});
	ea("Array.prototype.find", function(a) {
		return a ? a : function(b, c) {
			a: {
				var d = this;d instanceof String && (d = String(d));
				for(var e = d.length, f = 0; f < e; f++) {
					var g = d[f];
					if(b.call(c, g, f, d)) {
						b = g;
						break a
					}
				}
				b = void 0
			}
			return b
		}
	});
	var pa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
		for(var c = 1; c < arguments.length; c++) {
			var d = arguments[c];
			if(d)
				for(var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
		}
		return a
	};
	ea("Object.assign", function(a) {
		return a || pa
	});
	ea("Promise", function(a) {
		function b(g) {
			this.b = 0;
			this.g = void 0;
			this.a = [];
			var h = this.c();
			try {
				g(h.resolve, h.reject)
			} catch(k) {
				h.reject(k)
			}
		}

		function c() {
			this.a = null
		}

		function d(g) {
			return g instanceof b ? g : new b(function(h) {
				h(g)
			})
		}
		if(a) return a;
		c.prototype.b = function(g) {
			if(null == this.a) {
				this.a = [];
				var h = this;
				this.c(function() {
					h.g()
				})
			}
			this.a.push(g)
		};
		var e = da.setTimeout;
		c.prototype.c = function(g) {
			e(g, 0)
		};
		c.prototype.g = function() {
			for(; this.a && this.a.length;) {
				var g = this.a;
				this.a = [];
				for(var h = 0; h < g.length; ++h) {
					var k =
						g[h];
					g[h] = null;
					try {
						k()
					} catch(m) {
						this.f(m)
					}
				}
			}
			this.a = null
		};
		c.prototype.f = function(g) {
			this.c(function() {
				throw g;
			})
		};
		b.prototype.c = function() {
			function g(m) {
				return function(n) {
					k || (k = !0, m.call(h, n))
				}
			}
			var h = this,
				k = !1;
			return {
				resolve: g(this.K),
				reject: g(this.f)
			}
		};
		b.prototype.K = function(g) {
			if(g === this) this.f(new TypeError("A Promise cannot resolve to itself"));
			else if(g instanceof b) this.L(g);
			else {
				a: switch(typeof g) {
					case "object":
						var h = null != g;
						break a;
					case "function":
						h = !0;
						break a;
					default:
						h = !1
				}
				h ? this.I(g) : this.j(g)
			}
		};
		b.prototype.I = function(g) {
			var h = void 0;
			try {
				h = g.then
			} catch(k) {
				this.f(k);
				return
			}
			"function" == typeof h ? this.P(h, g) : this.j(g)
		};
		b.prototype.f = function(g) {
			this.o(2, g)
		};
		b.prototype.j = function(g) {
			this.o(1, g)
		};
		b.prototype.o = function(g, h) {
			if(0 != this.b) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
			this.b = g;
			this.g = h;
			this.A()
		};
		b.prototype.A = function() {
			if(null != this.a) {
				for(var g = 0; g < this.a.length; ++g) f.b(this.a[g]);
				this.a = null
			}
		};
		var f = new c;
		b.prototype.L = function(g) {
			var h = this.c();
			g.ca(h.resolve, h.reject)
		};
		b.prototype.P = function(g, h) {
			var k = this.c();
			try {
				g.call(h, k.resolve, k.reject)
			} catch(m) {
				k.reject(m)
			}
		};
		b.prototype.then = function(g, h) {
			function k(w, u) {
				return "function" == typeof w ? function(E) {
					try {
						m(w(E))
					} catch(v) {
						n(v)
					}
				} : u
			}
			var m, n, q = new b(function(w, u) {
				m = w;
				n = u
			});
			this.ca(k(g, m), k(h, n));
			return q
		};
		b.prototype.catch = function(g) {
			return this.then(void 0, g)
		};
		b.prototype.ca = function(g, h) {
			function k() {
				switch(m.b) {
					case 1:
						g(m.g);
						break;
					case 2:
						h(m.g);
						break;
					default:
						throw Error("Unexpected state: " +
							m.b);
				}
			}
			var m = this;
			null == this.a ? f.b(k) : this.a.push(k)
		};
		b.resolve = d;
		b.reject = function(g) {
			return new b(function(h, k) {
				k(g)
			})
		};
		b.race = function(g) {
			return new b(function(h, k) {
				for(var m = fa(g), n = m.next(); !n.done; n = m.next()) d(n.value).ca(h, k)
			})
		};
		b.all = function(g) {
			var h = fa(g),
				k = h.next();
			return k.done ? d([]) : new b(function(m, n) {
				function q(E) {
					return function(v) {
						w[E] = v;
						u--;
						0 == u && m(w)
					}
				}
				var w = [],
					u = 0;
				do w.push(void 0), u++, d(k.value).ca(q(w.length - 1), n), k = h.next(); while (!k.done)
			})
		};
		return b
	});
	ea("String.prototype.includes", function(a) {
		return a ? a : function(b, c) {
			return -1 !== oa(this, b, "includes").indexOf(b, c || 0)
		}
	});
	var r = this || self;

	function qa(a) {
		if(a && a != r) return ra(a.document);
		null === sa && (sa = ra(r.document));
		return sa
	}
	var ta = /^[\w+/_-]+[=]{0,2}$/,
		sa = null;

	function ra(a) {
		return(a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ta.test(a) ? a : ""
	}

	function ua(a) {
		a = a.split(".");
		for(var b = r, c = 0; c < a.length; c++)
			if(b = b[a[c]], null == b) return null;
		return b
	}

	function va() {}

	function wa(a) {
		a.la = void 0;
		a.h = function() {
			return a.la ? a.la : a.la = new a
		}
	}

	function xa(a) {
		var b = typeof a;
		return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
	}

	function ya(a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	}

	function za(a) {
		return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
	}
	var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0),
		Ba = 0;

	function Ca(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}

	function Da(a, b, c) {
		if(!a) throw Error();
		if(2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var e = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(e, d);
				return a.apply(b, e)
			}
		}
		return function() {
			return a.apply(b, arguments)
		}
	}

	function Ea(a, b, c) {
		Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea = Ca : Ea = Da;
		return Ea.apply(null, arguments)
	}

	function Fa(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var d = c.slice();
			d.push.apply(d, arguments);
			return a.apply(this, d)
		}
	}

	function t(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a
	}

	function Ha(a) {
		return a
	};
	var Ia = (new Date).getTime();

	function Ja(a, b) {
		for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
	}

	function Ka(a, b) {
		for(var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
			if(g in f) {
				var h = f[g];
				b.call(void 0, h, g, a) && (d[e++] = h)
			}
		return d
	}

	function La(a, b) {
		for(var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
		return d
	}

	function Ma(a, b) {
		for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
			if(e in d && b.call(void 0, d[e], e, a)) return !0;
		return !1
	}

	function Na(a, b) {
		a: {
			for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
				if(e in d && b.call(void 0, d[e], e, a)) {
					b = e;
					break a
				}
			b = -1
		}
		return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
	}

	function Oa(a, b) {
		a: {
			for(var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
				if(d in c && b.call(void 0, c[d], d, a)) {
					b = d;
					break a
				}
			b = -1
		}
		return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
	}

	function Pa(a, b) {
		a: if("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
			else {
				for(var c = 0; c < a.length; c++)
					if(c in a && a[c] === b) {
						a = c;
						break a
					}
				a = -1
			}return 0 <= a
	};

	function Qa(a) {
		return function() {
			return !a.apply(this, arguments)
		}
	}

	function Ra(a) {
		var b = !1,
			c;
		return function() {
			b || (c = a(), b = !0);
			return c
		}
	}

	function Sa(a) {
		var b = a;
		return function() {
			if(b) {
				var c = b;
				b = null;
				c()
			}
		}
	};

	function Ta(a, b) {
		var c = {},
			d;
		for(d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
		return c
	}

	function Ua(a, b) {
		for(var c in a)
			if(b.call(void 0, a[c], c, a)) return !0;
		return !1
	}

	function Va(a, b) {
		return null !== a && b in a
	}

	function Wa(a, b) {
		for(var c in a)
			if(b.call(void 0, a[c], c, a)) return c
	};
	var Xa;

	function Ya(a, b) {
		this.c = a === Za && b || "";
		this.f = $a
	}
	Ya.prototype.b = !0;
	Ya.prototype.a = function() {
		return this.c
	};
	var $a = {},
		Za = {};

	function ab(a, b) {
		this.c = a === bb && b || "";
		this.f = cb
	}
	ab.prototype.b = !0;
	ab.prototype.a = function() {
		return this.c.toString()
	};

	function db(a) {
		return a instanceof ab && a.constructor === ab && a.f === cb ? a.c : "type_error:TrustedResourceUrl"
	}
	var cb = {};

	function eb(a) {
		if(void 0 === Xa) {
			var b = null;
			var c = r.trustedTypes;
			if(c && c.createPolicy) {
				try {
					b = c.createPolicy("goog#html", {
						createHTML: Ha,
						createScript: Ha,
						createScriptURL: Ha
					})
				} catch(d) {
					r.console && r.console.error(d.message)
				}
				Xa = b
			} else Xa = b
		}
		a = (b = Xa) ? b.createScriptURL(a) : a;
		return new ab(bb, a)
	}
	var bb = {};

	function fb(a) {
		return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
	}
	var gb = /&/g,
		hb = /</g,
		ib = />/g,
		jb = /"/g,
		kb = /'/g,
		lb = /\x00/g;

	function mb(a, b) {
		return -1 != a.indexOf(b)
	}

	function nb(a, b) {
		var c = 0;
		a = fb(String(a)).split(".");
		b = fb(String(b)).split(".");
		for(var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
			var f = a[e] || "",
				g = b[e] || "";
			do {
				f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
				g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
				if(0 == f[0].length && 0 == g[0].length) break;
				c = ob(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ob(0 == f[2].length, 0 == g[2].length) || ob(f[2], g[2]);
				f = f[3];
				g = g[3]
			} while (0 == c)
		}
		return c
	}

	function ob(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	};

	function pb(a, b) {
		this.c = a === qb && b || "";
		this.f = rb
	}
	pb.prototype.b = !0;
	pb.prototype.a = function() {
		return this.c.toString()
	};

	function sb(a) {
		return a instanceof pb && a.constructor === pb && a.f === rb ? a.c : "type_error:SafeUrl"
	}
	var tb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		rb = {},
		qb = {};
	var ub;
	a: {
		var vb = r.navigator;
		if(vb) {
			var wb = vb.userAgent;
			if(wb) {
				ub = wb;
				break a
			}
		}
		ub = ""
	}

	function x(a) {
		return mb(ub, a)
	}

	function xb(a) {
		for(var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
		return c
	};

	function yb() {
		return(x("Chrome") || x("CriOS")) && !x("Edge")
	}

	function zb() {
		function a(e) {
			e = Na(e, d);
			return c[e] || ""
		}
		var b = ub;
		if(x("Trident") || x("MSIE")) return Ab(b);
		b = xb(b);
		var c = {};
		Ja(b, function(e) {
			c[e[0]] = e[1]
		});
		var d = Fa(Va, c);
		return x("Opera") ? a(["Version", "Opera"]) : x("Edge") ? a(["Edge"]) : x("Edg/") ? a(["Edg"]) : yb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
	}

	function Ab(a) {
		var b = /rv: *([\d\.]*)/.exec(a);
		if(b && b[1]) return b[1];
		b = "";
		var c = /MSIE +([\d\.]+)/.exec(a);
		if(c && c[1])
			if(a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
				if(a && a[1]) switch(a[1]) {
					case "4.0":
						b = "8.0";
						break;
					case "5.0":
						b = "9.0";
						break;
					case "6.0":
						b = "10.0";
						break;
					case "7.0":
						b = "11.0"
				} else b = "7.0";
				else b = c[1];
		return b
	};

	function Bb(a) {
		var b = qa(a.ownerDocument && a.ownerDocument.defaultView);
		b && a.setAttribute("nonce", b)
	};
	var Cb = {
			"\x00": "\\0",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\x0B": "\\x0B",
			'"': '\\"',
			"\\": "\\\\",
			"<": "\\u003C"
		},
		Db = {
			"'": "\\'"
		};

	function Eb(a) {
		return String(a).replace(/\-([a-z])/g, function(b, c) {
			return c.toUpperCase()
		})
	};

	function Fb() {
		return x("iPhone") && !x("iPod") && !x("iPad")
	};

	function Gb(a) {
		Gb[" "](a);
		return a
	}
	Gb[" "] = va;
	var Hb = Fb() || x("iPod"),
		Ib = x("Safari") && !(yb() || x("Coast") || x("Opera") || x("Edge") || x("Edg/") || x("OPR") || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(Fb() || x("iPad") || x("iPod"));

	function y() {}
	var Jb = "function" == typeof Uint8Array;

	function z(a, b, c, d) {
		a.b = null;
		b || (b = []);
		a.o = void 0;
		a.f = -1;
		a.a = b;
		a: {
			if(b = a.a.length) {
				--b;
				var e = a.a[b];
				if(!(null === e || "object" != typeof e || Array.isArray(e) || Jb && e instanceof Uint8Array)) {
					a.g = b - a.f;
					a.c = e;
					break a
				}
			}
			a.g = Number.MAX_VALUE
		}
		a.j = {};
		if(c)
			for(b = 0; b < c.length; b++) e = c[b], e < a.g ? (e += a.f, a.a[e] = a.a[e] || Kb) : (Lb(a), a.c[e] = a.c[e] || Kb);
		if(d && d.length)
			for(b = 0; b < d.length; b++) Mb(a, d[b])
	}
	var Kb = [];

	function Lb(a) {
		var b = a.g + a.f;
		a.a[b] || (a.c = a.a[b] = {})
	}

	function A(a, b) {
		if(b < a.g) {
			b += a.f;
			var c = a.a[b];
			return c === Kb ? a.a[b] = [] : c
		}
		if(a.c) return c = a.c[b], c === Kb ? a.c[b] = [] : c
	}

	function Nb(a, b) {
		a = A(a, b);
		return null == a ? a : +a
	}

	function Ob(a, b) {
		a = A(a, b);
		return null == a ? a : !!a
	}

	function B(a, b, c) {
		a = A(a, b);
		return null == a ? c : a
	}

	function Pb(a, b) {
		a = Ob(a, b);
		return null == a ? !1 : a
	}

	function Qb(a, b) {
		a = Nb(a, b);
		return null == a ? 0 : a
	}

	function Rb(a, b, c) {
		b < a.g ? a.a[b + a.f] = c : (Lb(a), a.c[b] = c);
		return a
	}

	function Mb(a, b) {
		for(var c, d, e = 0; e < b.length; e++) {
			var f = b[e],
				g = A(a, f);
			null != g && (c = f, d = g, Rb(a, f, void 0))
		}
		return c ? (Rb(a, c, d), c) : 0
	}

	function C(a, b, c) {
		a.b || (a.b = {});
		if(!a.b[c]) {
			var d = A(a, c);
			d && (a.b[c] = new b(d))
		}
		return a.b[c]
	}

	function D(a, b, c) {
		a.b || (a.b = {});
		if(!a.b[c]) {
			for(var d = A(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
			a.b[c] = e
		}
		b = a.b[c];
		b == Kb && (b = a.b[c] = []);
		return b
	};

	function Sb(a) {
		z(this, a, Tb, null)
	}
	t(Sb, y);

	function Ub(a) {
		z(this, a, null, null)
	}
	t(Ub, y);
	var Tb = [2, 3];

	function Vb(a) {
		z(this, a, null, null)
	}
	t(Vb, y);

	function Wb(a) {
		var b = new Vb;
		return Rb(b, 1, a)
	}

	function Xb(a, b) {
		return Rb(a, 2, b)
	}

	function Yb(a, b) {
		return Rb(a, 3, b)
	}

	function Zb(a, b) {
		return Rb(a, 4, b)
	};
	var $b = document,
		F = window;
	var ac = {
		"120x90": !0,
		"160x90": !0,
		"180x90": !0,
		"200x90": !0,
		"468x15": !0,
		"728x15": !0
	};

	function bc(a, b) {
		if(15 == b) {
			if(728 <= a) return 728;
			if(468 <= a) return 468
		} else if(90 == b) {
			if(200 <= a) return 200;
			if(180 <= a) return 180;
			if(160 <= a) return 160;
			if(120 <= a) return 120
		}
		return null
	};

	function cc() {
		this.a = F.document || {
			cookie: ""
		}
	}
	cc.prototype.set = function(a, b, c) {
		var d = !1;
		if("object" === typeof c) {
			var e = c.cb;
			d = c.Wa || !1;
			var f = c.domain || void 0;
			var g = c.path || void 0;
			var h = c.Oa
		}
		if(/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
		if(/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
		void 0 === h && (h = -1);
		this.a.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(+new Date + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
			e : "")
	};
	cc.prototype.get = function(a, b) {
		for(var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
			f = fb(d[e]);
			if(0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
			if(f == a) return ""
		}
		return b
	};

	function dc(a, b, c) {
		a.addEventListener && a.addEventListener(b, c, !1)
	};

	function ec(a, b) {
		b = String(b);
		"application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
		return a.createElement(b)
	}

	function fc(a) {
		this.a = a || r.document || document
	}
	fc.prototype.contains = function(a, b) {
		if(!a || !b) return !1;
		if(a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
		for(; b && a != b;) b = b.parentNode;
		return b == a
	};

	function gc(a) {
		hc();
		return eb(a)
	}
	var hc = va;

	function ic() {
		return !jc() && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
	}

	function jc() {
		return x("iPad") || x("Android") && !x("Mobile") || x("Silk")
	};

	function kc(a) {
		try {
			var b;
			if(b = !!a && null != a.location.href) a: {
				try {
					Gb(a.foo);
					b = !0;
					break a
				} catch(c) {}
				b = !1
			}
			return b
		} catch(c) {
			return !1
		}
	}

	function lc(a) {
		for(var b = r, c = 0; b && 40 > c++ && (!kc(b) || !a(b));) b = mc(b)
	}

	function nc() {
		var a = r;
		lc(function(b) {
			a = b;
			return !1
		});
		return a
	}

	function mc(a) {
		try {
			var b = a.parent;
			if(b && b != a) return b
		} catch(c) {}
		return null
	}

	function oc(a, b) {
		var c = a.createElement("script");
		b = gc(b);
		c.src = db(b);
		Bb(c);
		return(a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
	}

	function pc(a, b) {
		return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
	}

	function qc(a, b, c) {
		var d = !1;
		void 0 === c || c || (d = rc());
		return !d && !sc() && (c = Math.random(), c < b) ? (c = tc(r), a[Math.floor(c * a.length)]) : null
	}

	function tc(a) {
		if(!a.crypto) return Math.random();
		try {
			var b = new Uint32Array(1);
			a.crypto.getRandomValues(b);
			return b[0] / 65536 / 65536
		} catch(c) {
			return Math.random()
		}
	}

	function uc(a, b) {
		if(a)
			for(var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
	}

	function vc(a) {
		return Wa(a, function(b, c) {
			return Object.prototype.hasOwnProperty.call(a, c) && !0
		})
	}

	function wc(a) {
		var b = a.length;
		if(0 == b) return 0;
		for(var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
		return 0 < c ? c : 4294967296 + c
	}
	var sc = Ra(function() {
		return Ma(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], xc) || 1E-4 > Math.random()
	});

	function yc(a, b) {
		var c = -1;
		try {
			a && (c = parseInt(a.getItem(b), 10))
		} catch(d) {
			return null
		}
		return 0 <= c && 1E3 > c ? c : null
	}

	function zc(a, b, c) {
		a = sc() ? null : Math.floor(1E3 * tc(a));
		var d;
		if(d = null != a && b) a: {
			var e = String(a);
			try {
				if(b) {
					b.setItem(c, e);
					d = e;
					break a
				}
			} catch(f) {}
			d = null
		}
		return d ? a : null
	}
	var rc = Ra(function() {
		return xc("MSIE")
	});

	function xc(a) {
		return mb(ub, a)
	}
	var Ac = /^([0-9.]+)px$/,
		Bc = /^(-?[0-9.]{1,30})$/;

	function Cc(a) {
		return Bc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
	}

	function Dc(a, b) {
		return b ? !/^false$/.test(a) : /^true$/.test(a)
	}

	function G(a) {
		return(a = Ac.exec(a)) ? +a[1] : null
	}

	function Ec(a) {
		a = a && a.toString && a.toString();
		return "string" === typeof a && mb(a, "[native code]")
	}

	function Fc(a, b) {
		for(var c = 0; 50 > c; ++c) {
			try {
				var d = !(!a.frames || !a.frames[b])
			} catch(e) {
				d = !1
			}
			if(d) return a;
			if(!(a = mc(a))) break
		}
		return null
	}
	var Gc = Ra(function() {
		return ic() ? 2 : jc() ? 1 : 0
	});

	function Hc(a) {
		var b = {
			display: "none"
		};
		a.style.setProperty ? uc(b, function(c, d) {
			a.style.setProperty(d, c, "important")
		}) : a.style.cssText = Ic(Jc(Kc(a.style.cssText), Lc(b, function(c) {
			return c + " !important"
		})))
	}
	var Jc = Object.assign || function(a, b) {
		for(var c = 1; c < arguments.length; c++) {
			var d = arguments[c];
			if(d)
				for(var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
		}
		return a
	};

	function Lc(a, b) {
		var c = {},
			d;
		for(d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
		return c
	}

	function Ic(a) {
		var b = [];
		uc(a, function(c, d) {
			null != c && "" !== c && b.push(d + ":" + c)
		});
		return b.length ? b.join(";") + ";" : ""
	}

	function Kc(a) {
		var b = {};
		if(a) {
			var c = /\s*:\s*/;
			Ja((a || "").split(/\s*;\s*/), function(d) {
				if(d) {
					var e = d.split(c);
					d = e[0];
					e = e[1];
					d && e && (b[d.toLowerCase()] = e)
				}
			})
		}
		return b
	}

	function Mc(a) {
		"complete" === $b.readyState || "interactive" === $b.readyState ? a() : $b.addEventListener("DOMContentLoaded", a)
	}

	function Nc(a) {
		var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_dupeid";
		uc(a, function(c, d) {
			c && (b += "&" + d + "=" + encodeURIComponent(c))
		});
		window.fetch(b, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		})
	};

	function Oc(a) {
		a = parseFloat(a);
		return isNaN(a) ? 0 : a
	}

	function Pc(a, b) {
		a = parseInt(a, 10);
		return isNaN(a) ? b : a
	}
	var Qc = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

	function Rc(a, b) {
		return a ? (a = a.match(Qc)) ? a[0] : b : b
	};

	function Sc() {
		return "r20200609"
	}
	var Tc = Dc("false", !1),
		Uc = Dc("true", !1),
		Vc = Dc("false", !1),
		Wc = (Dc("true", !1) || !Uc) && !0;

	function Xc() {
		return Rc("", "pagead2.googlesyndication.com")
	};

	function Yc() {};

	function Zc(a) {
		z(this, a, $c, ad)
	}
	t(Zc, y);
	var $c = [2, 8],
		ad = [
			[3, 4, 5],
			[6, 7]
		];

	function bd(a) {
		return null != a ? !a : a
	}

	function cd(a, b) {
		for(var c = !1, d = 0; d < a.length; d++) {
			var e = a[d].call();
			if(e == b) return e;
			null == e && (c = !0)
		}
		if(!c) return !b
	}

	function dd(a, b) {
		var c = D(a, Zc, 2);
		if(!c.length) return ed(a, b);
		a = B(a, 1, 0);
		if(1 == a) return bd(dd(c[0], b));
		c = La(c, function(d) {
			return function() {
				return dd(d, b)
			}
		});
		switch(a) {
			case 2:
				return cd(c, !1);
			case 3:
				return cd(c, !0)
		}
	}

	function ed(a, b) {
		var c = Mb(a, ad[0]);
		a: {
			switch(c) {
				case 3:
					var d = B(a, 3, 0);
					break a;
				case 4:
					d = B(a, 4, 0);
					break a;
				case 5:
					d = B(a, 5, 0);
					break a
			}
			d = void 0
		}
		if(d && (b = (b = b[c]) && b[d])) {
			try {
				var e = b.apply(null, A(a, 8))
			} catch(f) {
				return
			}
			b = B(a, 1, 0);
			if(4 == b) return !!e;
			d = null != e;
			if(5 == b) return d;
			if(12 == b) a = B(a, 7, "");
			else a: {
				switch(c) {
					case 4:
						a = Qb(a, 6);
						break a;
					case 5:
						a = B(a, 7, "");
						break a
				}
				a = void 0
			}
			if(null != a) {
				if(6 == b) return e === a;
				if(9 == b) return 0 == nb(e, a);
				if(d) switch(b) {
					case 7:
						return e < a;
					case 8:
						return e > a;
					case 12:
						return(new RegExp(a)).test(e);
					case 10:
						return -1 == nb(e, a);
					case 11:
						return 1 == nb(e, a)
				}
			}
		}
	}

	function fd(a, b) {
		return !a || !(!b || !dd(a, b))
	};

	function gd(a) {
		z(this, a, hd, null)
	}
	t(gd, y);
	var hd = [4];

	function id(a) {
		z(this, a, jd, kd)
	}
	t(id, y);

	function ld(a) {
		z(this, a, null, null)
	}
	t(ld, y);
	var jd = [5],
		kd = [
			[1, 2, 3, 6, 7]
		];

	function md() {
		var a = {};
		this.a = (a[3] = {}, a[4] = {}, a[5] = {}, a)
	}
	wa(md);
	var nd = Dc("false", !1);

	function od(a, b) {
		switch(b) {
			case 1:
				return B(a, 1, 0);
			case 2:
				return B(a, 2, 0);
			case 3:
				return B(a, 3, 0);
			case 6:
				return B(a, 6, 0);
			default:
				return null
		}
	}

	function pd(a, b) {
		if(!a) return null;
		switch(b) {
			case 1:
				return Pb(a, 1);
			case 7:
				return B(a, 3, "");
			case 2:
				return Qb(a, 2);
			case 3:
				return B(a, 3, "");
			case 6:
				return A(a, 4);
			default:
				return null
		}
	}
	var qd = Ra(function() {
		if(!nd) return {};
		try {
			var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
			if(a) return JSON.parse(a)
		} catch(b) {}
		return {}
	});

	function rd(a, b, c, d) {
		d = void 0 === d ? 0 : d;
		var e = qd();
		if(e[a] && null != e[a][b]) return e[a][b];
		b = sd(d)[a][b];
		if(!b) return c;
		b = new id(b);
		b = td(b);
		a = pd(b, a);
		return null != a ? a : c
	}

	function td(a) {
		var b = md.h().a;
		if(b) {
			var c = Oa(D(a, ld, 5), function(d) {
				return fd(C(d, Zc, 1), b)
			});
			if(c) return C(c, gd, 2)
		}
		return C(a, gd, 4)
	}

	function ud() {
		this.a = {};
		this.b = []
	}
	wa(ud);

	function vd(a, b, c) {
		return !!rd(1, a, void 0 === b ? !1 : b, c)
	}

	function wd(a, b, c) {
		b = void 0 === b ? 0 : b;
		a = Number(rd(2, a, b, c));
		return isNaN(a) ? b : a
	}

	function xd(a, b, c) {
		return rd(3, a, void 0 === b ? "" : b, c)
	}

	function yd(a, b, c) {
		b = void 0 === b ? [] : b;
		return rd(6, a, b, c)
	}

	function sd(a) {
		var b = {};
		return ud.h().a[a] || (ud.h().a[a] = (b[1] = {}, b[2] = {}, b[3] = {}, b[6] = {}, b))
	}

	function zd(a, b) {
		var c = sd(b);
		uc(a, function(d, e) {
			return uc(d, function(f, g) {
				return c[e][g] = f
			})
		})
	}

	function Ad(a, b) {
		var c = sd(b);
		Ja(a, function(d) {
			var e = Mb(d, kd[0]),
				f = od(d, e);
			f && (c[e][f] = d.a)
		})
	}

	function Bd(a, b) {
		var c = sd(b);
		Ja(a, function(d) {
			var e = new id(d),
				f = Mb(e, kd[0]);
			(e = od(e, f)) && (c[f][e] || (c[f][e] = d))
		})
	}

	function Cd() {
		return La(Object.keys(ud.h().a), function(a) {
			return Number(a)
		})
	}

	function Dd(a) {
		Pa(ud.h().b, a) || zd(sd(4), a)
	};

	function H(a) {
		this.methodName = a
	}
	var Ed = new H(1),
		Fd = new H(15),
		Gd = new H(2),
		Hd = new H(3),
		Id = new H(4),
		Jd = new H(5),
		Kd = new H(6),
		Ld = new H(7),
		Md = new H(8),
		Nd = new H(9),
		Od = new H(10),
		Pd = new H(11),
		Qd = new H(12),
		Rd = new H(13),
		Sd = new H(14);

	function I(a, b, c) {
		c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
			value: b
		})
	}

	function Td(a, b, c) {
		return b[a.methodName] || c || function() {}
	}

	function Ud(a) {
		I(Jd, vd, a);
		I(Kd, wd, a);
		I(Ld, xd, a);
		I(Md, yd, a);
		I(Rd, Bd, a);
		I(Fd, Dd, a)
	}

	function Vd(a) {
		I(Id, function(b) {
			md.h().a = b
		}, a);
		I(Nd, function(b, c) {
			var d = md.h();
			d.a[3][b] || (d.a[3][b] = c)
		}, a);
		I(Od, function(b, c) {
			var d = md.h();
			d.a[4][b] || (d.a[4][b] = c)
		}, a);
		I(Pd, function(b, c) {
			var d = md.h();
			d.a[5][b] || (d.a[5][b] = c)
		}, a);
		I(Sd, function(b) {
			for(var c = md.h(), d = fa([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
				var f = e.value;
				e = void 0;
				var g = c.a[f];
				f = b[f];
				for(e in f) g[e] = f[e]
			}
		}, a)
	}

	function Wd(a) {
		a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
			value: !0
		})
	};

	function Xd() {
		this.b = function(a, b) {
			return void 0 === b ? !1 : b
		};
		this.c = function(a, b) {
			return void 0 === b ? 0 : b
		};
		this.a = function() {}
	}

	function Yd(a, b, c) {
		a.b = function(d, e) {
			return Td(Jd, b)(d, e, c)
		};
		a.c = function(d, e) {
			return Td(Kd, b)(d, e, c)
		};
		a.a = function() {
			Td(Fd, b)(c)
		}
	}
	wa(Xd);

	function J(a) {
		var b = void 0 === b ? !1 : b;
		return Xd.h().b(a, b)
	}

	function Zd() {
		var a = void 0 === a ? 0 : a;
		return Xd.h().c(62, a)
	};

	function $d(a) {
		a = void 0 === a ? r : a;
		var b = a.context || a.AMP_CONTEXT_DATA;
		if(!b) try {
			b = a.parent.context || a.parent.AMP_CONTEXT_DATA
		} catch(c) {}
		try {
			if(b && b.pageViewId && b.canonicalUrl) return b
		} catch(c) {}
		return null
	}

	function ae(a) {
		return(a = a || $d()) ? kc(a.master) ? a.master : null : null
	};

	function be(a, b) {
		r.google_image_requests || (r.google_image_requests = []);
		var c = r.document.createElement("img");
		if(b) {
			var d = function(e) {
				b && b(e);
				c.removeEventListener && c.removeEventListener("load", d, !1);
				c.removeEventListener && c.removeEventListener("error", d, !1)
			};
			dc(c, "load", d);
			dc(c, "error", d)
		}
		c.src = a;
		r.google_image_requests.push(c)
	};

	function ce(a, b) {
		if(a)
			for(var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
	}

	function de(a) {
		return !(!a || !a.call) && "function" === typeof a
	}

	function ee(a) {
		var b = void 0 === b ? 1 : b;
		a = ae($d(a)) || a;
		a.google_unique_id = (a.google_unique_id || 0) + b
	}

	function fe(a) {
		a = a.google_unique_id;
		return "number" === typeof a ? a : 0
	}

	function ge(a) {
		a = ae($d(a)) || a;
		a = a.google_unique_id;
		return "number" === typeof a ? a : 0
	}
	var he = !!window.google_async_iframe_id,
		ie = he && window.parent || window;

	function je() {
		if(he && !kc(ie)) {
			var a = "." + $b.domain;
			try {
				for(; 2 < a.split(".").length && !kc(ie);) $b.domain = a = a.substr(a.indexOf(".") + 1), ie = window.parent
			} catch(b) {}
			kc(ie) || (ie = window)
		}
		return ie
	}
	var ke = /(^| )adsbygoogle($| )/,
		le = new Ya(Za, "//fonts.googleapis.com/css");
	eb(le instanceof Ya && le.constructor === Ya && le.f === $a ? le.c : "type_error:Const");

	function me() {
		if(Tc) try {
			var a = F.google_cafe_host || F.top.google_cafe_host;
			if(a) return a
		} catch(b) {}
		return Xc()
	}

	function ne(a) {
		return Tc && a.google_top_window || a.top
	}

	function oe(a) {
		a = ne(a);
		return kc(a) ? a : null
	};

	function K(a) {
		a.google_ad_modifications || (a.google_ad_modifications = {});
		return a.google_ad_modifications
	}

	function pe(a, b) {
		a: if(a = K(a).eids || [], a.indexOf) b = a.indexOf(b), b = 0 < b || 0 === b;
			else {
				for(var c = 0; c < a.length; c++)
					if(a[c] === b) {
						b = !0;
						break a
					}
				b = !1
			}return b
	}

	function qe(a, b) {
		a = K(a);
		a.tag_partners = a.tag_partners || [];
		a.tag_partners.push(b)
	}

	function re(a) {
		K(F).allow_second_reactive_tag = a
	}

	function se(a, b, c) {
		for(var d = 0; d < a.length; ++d)
			if((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
		return null
	};
	var te = {},
		ue = (te.google_ad_client = !0, te.google_ad_host = !0, te.google_ad_host_channel = !0, te.google_adtest = !0, te.google_tag_for_child_directed_treatment = !0, te.google_tag_for_under_age_of_consent = !0, te.google_tag_partner = !0, te.google_restrict_data_processing = !0, te.google_page_url = !0, te);

	function ve() {
		var a = /[a-zA-Z0-9._~-]/,
			b = /%[89a-zA-Z]./;
		return r.location.pathname.replace(/(%[a-zA-Z0-9]{2})/g, function(c) {
			if(!c.match(b)) {
				var d = decodeURIComponent(c);
				if(d.match(a)) return d
			}
			return c.toUpperCase()
		})
	}

	function we() {
		for(var a = ve(), b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
			var e = a[d];
			b = e.match(c) ? b + e : b + encodeURIComponent(e)
		}
		return b
	};

	function M(a) {
		z(this, a, xe, null)
	}
	t(M, y);
	var xe = [4];
	M.prototype.Z = function() {
		return A(this, 3)
	};

	function N(a) {
		z(this, a, null, null)
	}
	t(N, y);

	function ye(a) {
		z(this, a, null, ze)
	}
	t(ye, y);

	function Ae(a) {
		z(this, a, null, null)
	}
	t(Ae, y);

	function Be(a) {
		z(this, a, null, null)
	}
	t(Be, y);

	function Ce(a) {
		z(this, a, null, null)
	}
	t(Ce, y);
	var ze = [
		[1, 2, 3]
	];

	function De(a) {
		z(this, a, null, null)
	}
	t(De, y);

	function Ee(a) {
		z(this, a, null, null)
	}
	t(Ee, y);

	function Fe(a) {
		z(this, a, Ge, null)
	}
	t(Fe, y);
	var Ge = [6, 7, 9, 10, 11];

	function He(a) {
		z(this, a, Ie, null)
	}
	t(He, y);

	function Je(a) {
		z(this, a, null, null)
	}
	t(Je, y);

	function Ke(a) {
		z(this, a, Le, null)
	}
	t(Ke, y);

	function Me(a) {
		z(this, a, null, null)
	}
	t(Me, y);

	function Ne(a) {
		z(this, a, null, null)
	}
	t(Ne, y);

	function Oe(a) {
		z(this, a, null, null)
	}
	t(Oe, y);

	function Pe(a) {
		z(this, a, null, null)
	}
	t(Pe, y);
	var Ie = [1, 2, 5, 7],
		Le = [2, 5, 6, 11];

	function Qe(a) {
		var b = we().replace(/(^\/)|(\/$)/g, ""),
			c = wc(b),
			d = Re(b);
		return a.find(function(e) {
			var f = null != A(e, 7) ? A(C(e, Me, 7), 1) : A(e, 1);
			e = null != A(e, 7) ? A(C(e, Me, 7), 2) : 2;
			if("number" !== typeof f) return !1;
			switch(e) {
				case 1:
					return f == c;
				case 2:
					return d[f] || !1
			}
			return !1
		}) || null
	}

	function Re(a) {
		for(var b = {};;) {
			b[wc(a)] = !0;
			if(!a) return b;
			a = a.substring(0, a.lastIndexOf("/"))
		}
	};

	function Se(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c
	}

	function Te(a) {
		return !!(a.error && a.meta && a.id)
	};
	var Ue = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

	function Ve(a, b) {
		this.a = a;
		this.b = b
	}

	function We(a, b, c) {
		this.url = a;
		this.a = b;
		this.ua = !!c;
		this.depth = null
	};

	function Xe() {
		this.c = "&";
		this.f = !1;
		this.b = {};
		this.g = 0;
		this.a = []
	}

	function Ye(a, b) {
		var c = {};
		c[a] = b;
		return [c]
	}

	function Ze(a, b, c, d, e) {
		var f = [];
		uc(a, function(g, h) {
			(g = $e(g, b, c, d, e)) && f.push(h + "=" + g)
		});
		return f.join(b)
	}

	function $e(a, b, c, d, e) {
		if(null == a) return "";
		b = b || "&";
		c = c || ",$";
		"string" == typeof c && (c = c.split(""));
		if(a instanceof Array) {
			if(d = d || 0, d < c.length) {
				for(var f = [], g = 0; g < a.length; g++) f.push($e(a[g], b, c, d + 1, e));
				return f.join(c[d])
			}
		} else if("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ze(a, b, c, d, e + 1)) : "...";
		return encodeURIComponent(String(a))
	}

	function af(a, b, c, d) {
		a.a.push(b);
		a.b[b] = Ye(c, d)
	}

	function bf(a, b, c) {
		b = b + "//pagead2.googlesyndication.com" + c;
		var d = cf(a) - c.length;
		if(0 > d) return "";
		a.a.sort(function(n, q) {
			return n - q
		});
		c = null;
		for(var e = "", f = 0; f < a.a.length; f++)
			for(var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
				if(!d) {
					c = null == c ? g : c;
					break
				}
				var m = Ze(h[k], a.c, ",$");
				if(m) {
					m = e + m;
					if(d >= m.length) {
						d -= m.length;
						b += m;
						e = a.c;
						break
					}
					a.f && (e = d, m[e - 1] == a.c && --e, b += m.substr(0, e), e = a.c, d = 0);
					c = null == c ? g : c
				}
			}
		a = "";
		null != c && (a = e + "trn=" + c);
		return b + a
	}

	function cf(a) {
		var b = 1,
			c;
		for(c in a.b) b = c.length > b ? c.length : b;
		return 3997 - b - a.c.length - 1
	};

	function df(a, b, c, d, e, f) {
		if((d ? a.a : Math.random()) < (e || .01)) try {
			if(c instanceof Xe) var g = c;
			else g = new Xe, uc(c, function(k, m) {
				var n = g,
					q = n.g++;
				k = Ye(m, k);
				n.a.push(q);
				n.b[q] = k
			});
			var h = bf(g, a.b, "/pagead/gen_204?id=" + b + "&");
			h && ("undefined" !== typeof f ? be(h, void 0 === f ? null : f) : be(h, null))
		} catch(k) {}
	};
	var ef = null;

	function ff() {
		if(null === ef) {
			ef = "";
			try {
				var a = "";
				try {
					a = r.top.location.hash
				} catch(c) {
					a = r.location.hash
				}
				if(a) {
					var b = a.match(/\bdeid=([\d,]+)/);
					ef = b ? b[1] : ""
				}
			} catch(c) {}
		}
		return ef
	};

	function gf() {
		var a = r.performance;
		return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
	}

	function hf() {
		var a = void 0 === a ? r : a;
		return(a = a.performance) && a.now ? a.now() : null
	};

	function jf(a, b, c) {
		this.label = a;
		this.type = b;
		this.value = c;
		this.duration = 0;
		this.uniqueId = Math.random();
		this.slotId = void 0
	};
	var kf = r.performance,
		lf = !!(kf && kf.mark && kf.measure && kf.clearMarks),
		mf = Ra(function() {
			var a;
			if(a = lf) a = ff(), a = !!a.indexOf && 0 <= a.indexOf("1337");
			return a
		});

	function nf() {
		var a = of ;
		this.b = [];
		this.c = a || r;
		var b = null;
		a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
		this.a = mf() || (null != b ? b : 1 > Math.random())
	}

	function pf(a) {
		a && kf && mf() && (kf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), kf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
	}
	nf.prototype.start = function(a, b) {
		if(!this.a) return null;
		var c = hf() || gf();
		a = new jf(a, b, c);
		b = "goog_" + a.label + "_" + a.uniqueId + "_start";
		kf && mf() && kf.mark(b);
		return a
	};

	function qf() {
		var a = rf;
		this.j = sf;
		this.c = !0;
		this.b = null;
		this.g = this.J;
		this.a = void 0 === a ? null : a;
		this.f = !1
	}
	l = qf.prototype;
	l.Ba = function(a) {
		this.g = a
	};
	l.ma = function(a) {
		this.b = a
	};
	l.Ca = function(a) {
		this.c = a
	};
	l.Da = function(a) {
		this.f = a
	};
	l.fa = function(a, b, c) {
		try {
			if(this.a && this.a.a) {
				var d = this.a.start(a.toString(), 3);
				var e = b();
				var f = this.a;
				b = d;
				if(f.a && "number" === typeof b.value) {
					var g = hf() || gf();
					b.duration = g - b.value;
					var h = "goog_" + b.label + "_" + b.uniqueId + "_end";
					kf && mf() && kf.mark(h);
					!f.a || 2048 < f.b.length || f.b.push(b)
				}
			} else e = b()
		} catch(k) {
			f = this.c;
			try {
				pf(d), f = this.g(a, new Se(k, {
					message: tf(k)
				}), void 0, c)
			} catch(m) {
				this.J(217, m)
			}
			if(!f) throw k;
		}
		return e
	};
	l.xa = function(a, b, c, d) {
		var e = this;
		return function(f) {
			for(var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
			return e.fa(a, function() {
				return b.apply(c, g)
			}, d)
		}
	};
	l.J = function(a, b, c, d, e) {
		e = e || "jserror";
		try {
			var f = new Xe;
			f.f = !0;
			af(f, 1, "context", a);
			Te(b) || (b = new Se(b, {
				message: tf(b)
			}));
			b.msg && af(f, 2, "msg", b.msg.substring(0, 512));
			var g = b.meta || {};
			if(this.b) try {
				this.b(g)
			} catch(L) {}
			if(d) try {
				d(g)
			} catch(L) {}
			b = [g];
			f.a.push(3);
			f.b[3] = b;
			d = r;
			b = [];
			g = null;
			do {
				var h = d;
				if(kc(h)) {
					var k = h.location.href;
					g = h.document && h.document.referrer || null
				} else k = g, g = null;
				b.push(new We(k || "", h));
				try {
					d = h.parent
				} catch(L) {
					d = null
				}
			} while (d && h != d);
			k = 0;
			for(var m = b.length - 1; k <= m; ++k) b[k].depth = m - k;
			h = r;
			if(h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
				for(m = 1; m < b.length; ++m) {
					var n = b[m];
					n.url || (n.url = h.location.ancestorOrigins[m - 1] || "", n.ua = !0)
				}
			var q = new We(r.location.href, r, !1);
			h = null;
			var w = b.length - 1;
			for(n = w; 0 <= n; --n) {
				var u = b[n];
				!h && Ue.test(u.url) && (h = u);
				if(u.url && !u.ua) {
					q = u;
					break
				}
			}
			u = null;
			var E = b.length && b[w].url;
			0 != q.depth && E && (u = b[w]);
			var v = new Ve(q, u);
			v.b && af(f, 4, "top", v.b.url || "");
			af(f, 5, "url", v.a.url || "");
			df(this.j, e, f, this.f, c)
		} catch(L) {
			try {
				df(this.j,
					e, {
						context: "ecmserr",
						rctx: a,
						msg: tf(L),
						url: v && v.a.url
					}, this.f, c)
			} catch(Ga) {}
		}
		return this.c
	};

	function tf(a) {
		var b = a.toString();
		a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
		a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
		if(a.stack) {
			a = a.stack;
			try {
				-1 == a.indexOf(b) && (a = b + "\n" + a);
				for(var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
				b = a.replace(/\n */g, "\n")
			} catch(d) {}
		}
		return b
	};

	function O(a) {
		a = void 0 === a ? "" : a;
		var b = Error.call(this);
		this.message = b.message;
		"stack" in b && (this.stack = b.stack);
		this.name = "TagError";
		this.message = a ? "adsbygoogle.push() error: " + a : "";
		Error.captureStackTrace ? Error.captureStackTrace(this, O) : this.stack = Error().stack || ""
	}
	p(O, Error);

	function uf() {
		this.b = !1;
		this.a = null;
		this.f = !1;
		this.g = Math.random();
		this.c = this.J
	}
	l = uf.prototype;
	l.ma = function(a) {
		this.a = a
	};
	l.Ca = function(a) {
		this.b = a
	};
	l.Da = function(a) {
		this.f = a
	};
	l.Ba = function(a) {
		this.c = a
	};
	l.J = function(a, b, c, d, e) {
		if((this.f ? this.g : Math.random()) > (void 0 === c ? .01 : c)) return this.b;
		Te(b) || (b = new Se(b, {
			context: a,
			id: void 0 === e ? "jserror" : e
		}));
		if(d || this.a) b.meta = {}, this.a && this.a(b.meta), d && d(b.meta);
		r.google_js_errors = r.google_js_errors || [];
		r.google_js_errors.push(b);
		r.error_rep_loaded || (oc(r.document, r.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), r.error_rep_loaded = !0);
		return this.b
	};
	l.fa = function(a, b, c) {
		try {
			var d = b()
		} catch(e) {
			if(!this.c(a, e, .01, c, "jserror")) throw e;
		}
		return d
	};
	l.xa = function(a, b, c, d) {
		var e = this;
		return function(f) {
			for(var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
			return e.fa(a, function() {
				return b.apply(c, g)
			}, d)
		}
	};
	var sf, vf, of = je(),
		rf = new nf;

	function wf(a) {
		null != a && ( of .google_measure_js_timing = a); of .google_measure_js_timing || (a = rf, a.a = !1, a.b != a.c.google_js_reporting_queue && (mf() && Ja(a.b, pf), a.b.length = 0))
	}

	function xf(a) {
		var b = F.jerExpIds;
		if(Array.isArray(b) && 0 !== b.length) {
			var c = a.eid;
			if(c) {
				b = ha(c.split(",")).concat(ha(b));
				c = {};
				for(var d = 0, e = 0; e < b.length;) {
					var f = b[e++];
					var g = f;
					g = ya(g) ? "o" + za(g) : (typeof g).charAt(0) + g;
					Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0, b[d++] = f)
				}
				b.length = d;
				a.eid = b.join(",")
			} else a.eid = b.join(",")
		}
	}

	function yf(a) {
		var b = F.jerUserAgent;
		b && (a.useragent = b)
	}
	sf = new function() {
		var a = void 0 === a ? F : a;
		this.b = "http:" === a.location.protocol ? "http:" : "https:";
		this.a = Math.random()
	};
	"number" !== typeof of .google_srt && ( of .google_srt = Math.random());
	var zf = sf,
		Af = of .google_srt;
	0 <= Af && 1 >= Af && (zf.a = Af);
	vf = new qf;
	vf.ma(function(a) {
		xf(a);
		yf(a)
	});
	vf.Da(!0);
	"complete" == of .document.readyState ? wf() : rf.a && dc( of , "load", function() {
		wf()
	});

	function Bf() {
		var a = [Cf, Df];
		vf.ma(function(b) {
			Ja(a, function(c) {
				c(b)
			});
			xf(b);
			yf(b)
		})
	}

	function Ef(a, b, c) {
		return vf.fa(a, b, c)
	}

	function Ff(a, b) {
		return vf.xa(a, b, void 0, void 0)
	}

	function Gf(a, b, c) {
		df(sf, a, b, !0, c, void 0)
	}

	function Hf(a, b, c, d) {
		var e;
		Te(b) ? e = b.msg || tf(b.error) : e = tf(b);
		return 0 == e.indexOf("TagError") ? (c = b instanceof Se ? b.error : b, c.pbr || (c.pbr = !0, vf.J(a, b, .1, d, "puberror")), !1) : vf.J(a, b, c, d)
	};

	function If(a, b) {
		this.ra = a;
		this.ya = b
	}

	function Jf(a) {
		var b = [].slice.call(arguments).filter(Qa(function(e) {
			return null === e
		}));
		if(!b.length) return null;
		var c = [],
			d = {};
		b.forEach(function(e) {
			c = c.concat(e.ra || []);
			d = Object.assign(d, e.ya)
		});
		return new If(c, d)
	}

	function Kf(a) {
		switch(a) {
			case 1:
				return new If(null, {
					google_ad_semantic_area: "mc"
				});
			case 2:
				return new If(null, {
					google_ad_semantic_area: "h"
				});
			case 3:
				return new If(null, {
					google_ad_semantic_area: "f"
				});
			case 4:
				return new If(null, {
					google_ad_semantic_area: "s"
				});
			default:
				return null
		}
	};
	var Lf = new If(["google-auto-placed"], {
		google_tag_origin: "qs"
	});
	var Mf = {},
		Nf = (Mf.google_ad_channel = !0, Mf.google_ad_host = !0, Mf);

	function Of(a, b) {
		a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
		Gf("ama", b, .01)
	}

	function Pf(a) {
		var b = {};
		uc(Nf, function(c, d) {
			d in a && (b[d] = a[d])
		});
		return b
	};
	var Qf = Pc("2019", 2012);

	function Rf(a, b, c) {
		if("relative" === a) return b;
		c || (c = Wc ? "https" : "http");
		r.location && "https:" == r.location.protocol && "http" == c && (c = "https");
		return [c, "://", a, b].join("")
	}

	function Sf(a, b, c) {
		a = Rf(a, b, c);
		2012 < Qf && (b = (b = a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/)) ? b[1] : "", a = a.replace(new RegExp(String(b + ".js").replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), ("_fy" + Qf + b + ".js").replace(/\$/g, "$$$$")));
		J(202) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
		return a
	};
	var Tf = null;

	function Uf() {
		if(!Tc) return !1;
		if(null != Tf) return Tf;
		Tf = !1;
		try {
			var a = oe(r);
			a && -1 != a.location.hash.indexOf("google_logging") && (Tf = !0);
			r.localStorage.getItem("google_logging") && (Tf = !0)
		} catch(b) {}
		return Tf
	}

	function Vf(a, b) {
		b = void 0 === b ? [] : b;
		var c = !1;
		r.google_logging_queue || (c = !0, r.google_logging_queue = []);
		r.google_logging_queue.push([a, b]);
		c && Uf() && (a = Sf(Xc(), "/pagead/js/logging_library.js"), oc(r.document, a))
	};

	function Wf(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c
	}

	function Xf(a, b) {
		return {
			top: a.b - b,
			right: a.a + a.c + 1,
			bottom: a.b + b,
			left: a.a - 1
		}
	};

	function Yf(a) {
		this.a = {};
		this.b = {};
		if(a)
			for(var b = 0; b < a.length; ++b) this.add(a[b])
	}
	Yf.prototype.add = function(a) {
		this.a[a] = !0;
		this.b[a] = a
	};
	Yf.prototype.contains = function(a) {
		return !!this.a[a]
	};

	function Zf(a) {
		z(this, a, null, null)
	}
	t(Zf, y);

	function $f(a) {
		z(this, a, null, null)
	}
	t($f, y);

	function ag(a) {
		z(this, a, null, null)
	}
	t(ag, y);

	function bg(a) {
		z(this, a, cg, null)
	}
	t(bg, y);
	var cg = [5];

	function dg(a) {
		try {
			var b = a.localStorage.getItem("google_ama_settings");
			return b ? new bg(b ? JSON.parse(b) : null) : null
		} catch(c) {
			return null
		}
	};

	function eg() {
		this.a = {};
		this.b = {}
	}
	eg.prototype.set = function(a, b) {
		this.a[a] = b;
		this.b[a] = a
	};
	eg.prototype.get = function(a, b) {
		return void 0 !== this.a[a] ? this.a[a] : b
	};
	var fg = {
		rectangle: 1,
		horizontal: 2,
		vertical: 4
	};
	var gg = {
		overlays: 1,
		interstitials: 2,
		vignettes: 2,
		inserts: 3,
		immersives: 4,
		list_view: 5
	};

	function hg() {
		this.wasPlaTagProcessed = !1;
		this.wasReactiveAdConfigReceived = {};
		this.adCount = {};
		this.wasReactiveAdVisible = {};
		this.stateForType = {};
		this.reactiveTypeEnabledInAsfe = {};
		this.wasReactiveTagRequestSent = !1;
		this.reactiveTypeDisabledByPublisher = {};
		this.tagSpecificState = {};
		this.improveCollisionDetection = 1;
		this.messageValidationEnabled = !1;
		this.floatingAdsStacking = new ig
	}

	function jg(a) {
		a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new ig) : a.google_reactive_ads_global_state = new hg;
		return a.google_reactive_ads_global_state
	}

	function ig() {
		this.maxZIndexRestrictions = {};
		this.nextRestrictionId = 0;
		this.maxZIndexListeners = []
	};

	function kg(a) {
		a = a.document;
		var b = {};
		a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
		return b || {}
	}

	function P(a) {
		return kg(a).clientWidth
	};

	function lg(a, b) {
		for(var c = ["width", "height"], d = 0; d < c.length; d++) {
			var e = "google_ad_" + c[d];
			if(!b.hasOwnProperty(e)) {
				var f = G(a[c[d]]);
				f = null === f ? null : Math.round(f);
				null != f && (b[e] = f)
			}
		}
	}

	function mg(a, b) {
		return !((Bc.test(b.google_ad_width) || Ac.test(a.style.width)) && (Bc.test(b.google_ad_height) || Ac.test(a.style.height)))
	}

	function ng(a, b) {
		return(a = og(a, b)) ? a.y : 0
	}

	function og(a, b) {
		try {
			var c = b.document.documentElement.getBoundingClientRect(),
				d = a.getBoundingClientRect();
			return {
				x: d.left - c.left,
				y: d.top - c.top
			}
		} catch(e) {
			return null
		}
	}

	function pg(a, b) {
		do {
			var c = pc(a, b);
			if(c && "fixed" == c.position) return !1
		} while (a = a.parentElement);
		return !0
	}

	function qg(a) {
		var b = 0,
			c;
		for(c in fg) - 1 != a.indexOf(c) && (b |= fg[c]);
		return b
	}

	function rg(a, b, c, d, e) {
		if(ne(a) != a) return oe(a) ? 3 : 16;
		if(!(488 > P(a))) return 4;
		if(!(a.innerHeight >= a.innerWidth)) return 5;
		var f = P(a);
		if(!f || (f - c) / f > d) a = 6;
		else {
			if(c = "true" != e.google_full_width_responsive) a: {
				c = P(a);
				for(b = b.parentElement; b; b = b.parentElement)
					if((d = pc(b, a)) && (e = G(d.width)) && !(e >= c) && "visible" != d.overflow) {
						c = !0;
						break a
					}
				c = !1
			}
			a = c ? 7 : !0
		}
		return a
	}

	function sg(a, b, c, d) {
		var e = rg(b, c, a, .3, d);
		!0 !== e ? a = e : "true" == d.google_full_width_responsive || pg(c, b) ? tg(b) ? a = !0 : (b = P(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
		return a
	}

	function ug(a, b, c) {
		a = a.style;
		"rtl" == b ? J(251) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : J(251) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
	}

	function vg(a, b) {
		if(3 == b.nodeType) return /\S/.test(b.data);
		if(1 == b.nodeType) {
			if(/^(script|style)$/i.test(b.nodeName)) return !1;
			try {
				var c = pc(b, a)
			} catch(d) {}
			return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
		}
		return !1
	}

	function wg(a, b) {
		for(var c = 0; 100 > c && b.parentElement; ++c) {
			for(var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
				var f = d[e];
				if(f != b && vg(a, f)) return
			}
			b = b.parentElement;
			b.style.width = "100%";
			b.style.height = "auto"
		}
	}

	function xg(a, b, c) {
		a = og(b, a);
		return "rtl" == c ? -a.x : a.x
	}

	function yg(a, b) {
		var c;
		c = (c = b.parentElement) ? (c = pc(c, a)) ? c.direction : "" : "";
		if(c) {
			b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
			b.style.borderSpacing = b.style.padding = "0";
			ug(b, c, "0px");
			b.style.width = P(a) + "px";
			if(0 !== xg(a, b, c)) {
				ug(b, c, "0px");
				var d = xg(a, b, c);
				ug(b, c, -1 * d + "px");
				a = xg(a, b, c);
				0 !== a && a !== d && ug(b, c, d / (a - d) * d + "px")
			}
			b.style.zIndex = 30
		}
	}

	function tg(a) {
		return J(233) || a.location && "#bffwroe2etoq" == a.location.hash
	};

	function Q(a, b) {
		this.b = a;
		this.a = b
	}
	l = Q.prototype;
	l.minWidth = function() {
		return this.b
	};
	l.height = function() {
		return this.a
	};
	l.R = function(a) {
		return 300 < a && 300 < this.a ? this.b : Math.min(1200, Math.round(a))
	};
	l.ja = function(a) {
		return this.R(a) + "x" + this.height()
	};
	l.ba = function() {};

	function R(a, b, c, d) {
		d = void 0 === d ? function(f) {
			return f
		} : d;
		var e;
		return a.style && a.style[c] && d(a.style[c]) || (e = pc(a, b)) && e[c] && d(e[c]) || null
	}

	function zg(a) {
		return function(b) {
			return b.minWidth() <= a
		}
	}

	function Ag(a, b, c, d) {
		var e = a && Bg(c, b),
			f = Cg(b, d);
		return function(g) {
			return !(e && g.height() >= f)
		}
	}

	function Dg(a) {
		return function(b) {
			return b.height() <= a
		}
	}

	function Bg(a, b) {
		return ng(a, b) < kg(b).clientHeight - 100
	}

	function Eg(a, b) {
		a = ng(a, b);
		b = kg(b).clientHeight;
		return 0 == b ? null : a / b
	}

	function Fg(a, b) {
		var c = R(b, a, "height", G);
		if(c) return c;
		var d = b.style.height;
		b.style.height = "inherit";
		c = R(b, a, "height", G);
		b.style.height = d;
		if(c) return c;
		c = Infinity;
		do(d = b.style && G(b.style.height)) && (c = Math.min(c, d)), (d = R(b, a, "maxHeight", G)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
		return c
	}

	function Cg(a, b) {
		var c = 0 == fe(a);
		return b && c ? Math.max(250, 2 * kg(a).clientHeight / 3) : 250
	};

	function Gg(a, b) {
		for(var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
		c.forEach(b, void 0)
	};

	function Hg(a) {
		if(1 != a.nodeType) var b = !1;
		else if(b = "INS" == a.tagName) a: {
			b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
			for(var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
			for(d = 0; d < b.length; ++d)
				if(!c[b[d]]) {
					b = !1;
					break a
				}
			b = !0
		}
		return b
	};

	function Ig(a, b, c) {
		switch(c) {
			case 0:
				b.parentNode && b.parentNode.insertBefore(a, b);
				break;
			case 3:
				if(c = b.parentNode) {
					var d = b.nextSibling;
					if(d && d.parentNode != c)
						for(; d && 8 == d.nodeType;) d = d.nextSibling;
					c.insertBefore(a, d)
				}
				break;
			case 1:
				b.insertBefore(a, b.firstChild);
				break;
			case 2:
				b.appendChild(a)
		}
		Hg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
	};

	function Jg(a, b, c) {
		function d(f) {
			f = Kg(f);
			return null == f ? !1 : c > f
		}

		function e(f) {
			f = Kg(f);
			return null == f ? !1 : c < f
		}
		switch(b) {
			case 0:
				return {
					init: Lg(a.previousSibling, e),
					da: function(f) {
						return Lg(f.previousSibling, e)
					},
					ea: 0
				};
			case 2:
				return {
					init: Lg(a.lastChild, e),
					da: function(f) {
						return Lg(f.previousSibling, e)
					},
					ea: 0
				};
			case 3:
				return {
					init: Lg(a.nextSibling, d),
					da: function(f) {
						return Lg(f.nextSibling, d)
					},
					ea: 3
				};
			case 1:
				return {
					init: Lg(a.firstChild, d),
					da: function(f) {
						return Lg(f.nextSibling, d)
					},
					ea: 3
				}
		}
		throw Error("Un-handled RelativePosition: " +
			b);
	}

	function Kg(a) {
		return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
	}

	function Lg(a, b) {
		return a && b(a) ? a : null
	};

	function Mg(a, b) {
		for(var c = 0; c < b.length; c++) {
			var d = b[c],
				e = Eb(d.bb);
			a[e] = d.value
		}
	};
	var Ng = null;

	function Og() {
		if(!Ng) {
			for(var a = r, b = a, c = 0; a && a != a.parent;)
				if(a = a.parent, c++, kc(a)) b = a;
				else break;
			Ng = b
		}
		return Ng
	};

	function Pg(a, b, c, d) {
		this.f = a;
		this.b = b;
		this.c = c;
		this.a = d
	}

	function Qg(a, b) {
		var c = [];
		try {
			c = b.querySelectorAll(a.f)
		} catch(g) {}
		if(!c.length) return [];
		b = c;
		c = b.length;
		if(0 < c) {
			for(var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
			b = d
		} else b = [];
		b = Rg(a, b);
		"number" === typeof a.b && (c = a.b, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
		if("number" === typeof a.c) {
			c = [];
			for(d = 0; d < b.length; d++) {
				e = Sg(b[d]);
				var f = a.c;
				0 > f && (f += e.length);
				0 <= f && f < e.length && c.push(e[f])
			}
			b = c
		}
		return b
	}
	Pg.prototype.toString = function() {
		return JSON.stringify({
			nativeQuery: this.f,
			occurrenceIndex: this.b,
			paragraphIndex: this.c,
			ignoreMode: this.a
		})
	};

	function Rg(a, b) {
		if(null == a.a) return b;
		switch(a.a) {
			case 1:
				return b.slice(1);
			case 2:
				return b.slice(0, b.length - 1);
			case 3:
				return b.slice(1, b.length - 1);
			case 0:
				return b;
			default:
				throw Error("Unknown ignore mode: " + a.a);
		}
	}

	function Sg(a) {
		var b = [];
		Gg(a.getElementsByTagName("p"), function(c) {
			100 <= Tg(c) && b.push(c)
		});
		return b
	}

	function Tg(a) {
		if(3 == a.nodeType) return a.length;
		if(1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
		var b = 0;
		Gg(a.childNodes, function(c) {
			b += Tg(c)
		});
		return b
	}

	function Ug(a) {
		return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
	};

	function Vg(a) {
		if(!a) return null;
		var b = A(a, 7);
		if(A(a, 1) || a.Z() || 0 < A(a, 4).length) {
			var c = a.Z(),
				d = A(a, 1),
				e = A(a, 4);
			b = A(a, 2);
			var f = A(a, 5);
			a = Wg(A(a, 6));
			var g = "";
			d && (g += d);
			c && (g += "#" + Ug(c));
			if(e)
				for(c = 0; c < e.length; c++) g += "." + Ug(e[c]);
			b = (e = g) ? new Pg(e, b, f, a) : null
		} else b = b ? new Pg(b, A(a, 2), A(a, 5), Wg(A(a, 6))) : null;
		return b
	}
	var Xg = {
		1: 1,
		2: 2,
		3: 3,
		0: 0
	};

	function Wg(a) {
		return null == a ? a : Xg[a]
	}
	var Yg = {
		1: 0,
		2: 1,
		3: 2,
		4: 3
	};

	function Zg() {};

	function $g(a, b, c) {
		var d = Xf(c, b + 1);
		return !Ma(a, function(e) {
			return e.left < d.right && d.left < e.right && e.top < d.bottom && d.top < e.bottom
		})
	};

	function ah() {
		this.a = new eg
	}
	ah.prototype.set = function(a, b) {
		var c = this.a.get(a);
		c || (c = new Yf, this.a.set(a, c));
		c.add(b)
	};

	function bh(a, b) {
		function c() {
			d.push({
				anchor: e.anchor,
				position: e.position
			});
			return e.anchor == b.anchor && e.position == b.position
		}
		for(var d = [], e = a; e;) {
			switch(e.position) {
				case 1:
					if(c()) return d;
					e.position = 2;
				case 2:
					if(c()) return d;
					if(e.anchor.firstChild) {
						e = {
							anchor: e.anchor.firstChild,
							position: 1
						};
						continue
					} else e.position = 3;
				case 3:
					if(c()) return d;
					e.position = 4;
				case 4:
					if(c()) return d
			}
			for(; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
				e = {
					anchor: e.anchor.parentNode,
					position: 3
				};
				if(c()) return d;
				e.position = 4;
				if(c()) return d
			}
			e && e.anchor.nextSibling ? e = {
				anchor: e.anchor.nextSibling,
				position: 1
			} : e = null
		}
		return d
	};

	function ch(a, b) {
		this.b = a;
		this.a = b
	}

	function dh(a, b) {
		var c = new ah,
			d = new Yf;
		b.forEach(function(e) {
			if(C(e, Ae, 1)) {
				e = C(e, Ae, 1);
				if(C(e, N, 1) && C(C(e, N, 1), M, 1) && C(e, N, 2) && C(C(e, N, 2), M, 1)) {
					var f = eh(a, C(C(e, N, 1), M, 1)),
						g = eh(a, C(C(e, N, 2), M, 1));
					if(f && g)
						for(f = fa(bh({
								anchor: f,
								position: A(C(e, N, 1), 2)
							}, {
								anchor: g,
								position: A(C(e, N, 2), 2)
							})), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
				}
				C(e, N, 3) && C(C(e, N, 3), M, 1) && (f = eh(a, C(C(e, N, 3), M, 1))) && c.set(za(f), A(C(e, N, 3), 2))
			} else C(e, Be, 2) ? fh(a, C(e, Be, 2), c) : C(e, Ce, 3) && gh(a, C(e, Ce, 3), d)
		});
		return new ch(c, d)
	}

	function fh(a, b, c) {
		C(b, M, 1) && (a = hh(a, C(b, M, 1))) && a.forEach(function(d) {
			d = za(d);
			c.set(d, 1);
			c.set(d, 4);
			c.set(d, 2);
			c.set(d, 3)
		})
	}

	function gh(a, b, c) {
		C(b, M, 1) && (a = hh(a, C(b, M, 1))) && a.forEach(function(d) {
			c.add(za(d))
		})
	}

	function eh(a, b) {
		return(a = hh(a, b)) && 0 < a.length ? a[0] : null
	}

	function hh(a, b) {
		return(b = Vg(b)) ? Qg(b, a) : null
	};

	function ih(a, b) {
		if(!a) return !1;
		a = pc(a, b);
		if(!a) return !1;
		a = a.cssFloat || a.styleFloat;
		return "left" == a || "right" == a
	}

	function jh(a) {
		for(a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
		return a ? a : null
	}

	function kh(a) {
		return !!a.nextSibling || !!a.parentNode && kh(a.parentNode)
	};

	function lh(a, b) {
		return a && null != A(a, 4) && b[A(C(a, Ee, 4), 2)] ? !1 : !0
	}

	function mh(a) {
		var b = {};
		a && A(a, 6).forEach(function(c) {
			b[c] = !0
		});
		return b
	}

	function nh(a, b, c, d) {
		this.a = r;
		this.A = a;
		this.b = b;
		this.j = d || null;
		this.o = (this.g = c) ? dh(r.document, D(c, ye, 5)) : dh(r.document, []);
		this.c = 0;
		this.f = !1
	}

	function oh(a) {
		return new Zg(ph(a).numAutoAdsPlaced || 0, D(a.b, Fe, 1).length)
	}

	function qh(a, b) {
		if(a.f) return !0;
		a.f = !0;
		var c = D(a.b, Fe, 1);
		a.c = 0;
		var d = mh(a.g);
		var e = (e = a.g) ? Pa(A(e, 11), 1) : !1;
		var f;
		if(f = !e && C(a.b, Pe, 15) && Pb(C(a.b, Pe, 15), 12)) a: {
			f = dg(a.a);f = null !== f ? D(f, ag, 5) : null;
			var g = dg(a.a);
			var h = null != g ? C(g, Zf, 6) || null : null;
			if(null == f) f = !1;
			else {
				g = 4;
				var k = 0;
				h && (g = A(h, 1) || g, k = A(h, 3) || k);
				h = new Yf([2, 1, 0]);
				C(a.b, Pe, 15) && Pb(C(a.b, Pe, 15), 15) && h.add(4);
				for(var m = [], n = 0; n < f.length; n++) {
					var q = ph(a).numAutoAdsPlaced || 0;
					var w = dg(a.a);
					w = null !== w && null != A(w, 8) ? A(w, 8) : 0;
					if(q + w >= g) {
						f = !0;
						break a
					}
					q =
						A(f[n], 1);
					if(null == q) break;
					w = c[q];
					var u = C(f[n], $f, 2);
					null != u && null != Nb(u, 1) && null != Nb(u, 2) && null != Nb(u, 3) && (u = new Wf(Nb(u, 1), Nb(u, 2), Nb(u, 3)), $g(m, k, u) && (q = rh(a, w, q, b, d, h), null != q && null != q.X && (q = q.X.getBoundingClientRect(), m.push(q))))
				}
				f = 0 < (ph(a).numAutoAdsPlaced || 0)
			}
		}
		if(f) return !0;
		f = dg(a.a);
		if(null !== f && Pb(f, 2)) return ph(a).eatf = !0, Vf(7, [!0, 0, !1]), !0;
		f = new Yf([2]);
		!e && C(a.b, Pe, 15) && Pb(C(a.b, Pe, 15), 15) && f.add(4);
		for(e = 0; e < c.length; e++)
			if(rh(a, c[e], e, b, d, f)) return !0;
		Vf(7, [!1, a.c, !1]);
		return !1
	}

	function rh(a, b, c, d, e, f) {
		if(!C(b, Ee, 4) || !f.contains(A(C(b, Ee, 4), 1)) || 1 !== A(b, 8) || !lh(b, e)) return null;
		a.c++;
		if(b = sh(a, b, d, e)) d = ph(a), d.placement = c, d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0), d.numAutoAdsPlaced++, Vf(7, [!1, a.c, !0]);
		return b
	}

	function sh(a, b, c, d) {
		if(!lh(b, d) || 1 != A(b, 8)) return null;
		d = C(b, M, 1);
		if(!d) return null;
		d = Vg(d);
		if(!d) return null;
		d = Qg(d, a.a.document);
		if(0 == d.length) return null;
		d = d[0];
		var e = A(b, 2);
		e = Yg[e];
		e = void 0 === e ? null : e;
		var f;
		if(!(f = null == e)) {
			a: {
				f = a.a;
				switch(e) {
					case 0:
						f = ih(jh(d), f);
						break a;
					case 3:
						f = ih(d, f);
						break a;
					case 2:
						var g = d.lastChild;
						f = ih(g ? 1 == g.nodeType ? g : jh(g) : null, f);
						break a
				}
				f = !1
			}
			if(c = !f && !(!c && 2 == e && !kh(d))) c = 1 == e || 2 == e ? d : d.parentNode,
			c = !(c && !Hg(c) && 0 >= c.offsetWidth);f = !c
		}
		if(!(c = f)) {
			c = a.o;
			f = A(b, 2);
			g =
				za(d);
			g = c.b.a.get(g);
			if(!(g = g ? g.contains(f) : !1)) a: {
				if(c.a.contains(za(d))) switch(f) {
					case 2:
					case 3:
						g = !0;
						break a;
					default:
						g = !1;
						break a
				}
				for(f = d.parentElement; f;) {
					if(c.a.contains(za(f))) {
						g = !0;
						break a
					}
					f = f.parentElement
				}
				g = !1
			}
			c = g
		}
		if(c) return null;
		c = C(b, De, 3);
		f = {};
		c && (f.Fa = A(c, 1), f.qa = A(c, 2), f.clearBoth = !!Ob(c, 3));
		c = C(b, Ee, 4) && A(C(b, Ee, 4), 2) ? A(C(b, Ee, 4), 2) : null;
		c = Kf(c);
		b = null == A(b, 12) ? null : A(b, 12);
		b = Jf(a.j, c, null == b ? null : new If(null, {
			google_ml_rank: b
		}));
		c = a.a;
		a = a.A;
		var h = c.document,
			k = f.clearBoth || !1;
		g = ec((new fc(h)).a,
			"DIV");
		var m = g.style;
		m.width = "100%";
		m.height = "auto";
		m.clear = k ? "both" : "none";
		k = g.style;
		k.textAlign = "center";
		f.Qa && Mg(k, f.Qa);
		h = ec((new fc(h)).a, "INS");
		k = h.style;
		k.display = "block";
		k.margin = "auto";
		k.backgroundColor = "transparent";
		f.Fa && (k.marginTop = f.Fa);
		f.qa && (k.marginBottom = f.qa);
		f.Ha && Mg(k, f.Ha);
		g.appendChild(h);
		f = {
			ia: g,
			X: h
		};
		f.X.setAttribute("data-ad-format", "auto");
		g = [];
		if(h = b && b.ra) f.ia.className = h.join(" ");
		h = f.X;
		h.className = "adsbygoogle";
		h.setAttribute("data-ad-client", a);
		g.length && h.setAttribute("data-ad-channel",
			g.join("+"));
		a: {
			try {
				var n = f.ia;
				var q = void 0 === q ? 0 : q;
				if(J(313)) {
					q = void 0 === q ? 0 : q;
					var w = Jg(d, e, q);
					if(w.init) {
						var u = w.init;
						for(d = u; d = w.da(d);) u = d;
						var E = {
							anchor: u,
							position: w.ea
						}
					} else E = {
						anchor: d,
						position: e
					};
					n["google-ama-order-assurance"] = q;
					Ig(n, E.anchor, E.position)
				} else Ig(n, d, e);
				b: {
					var v = f.X;v.setAttribute("data-adsbygoogle-status", "reserved");v.className += " adsbygoogle-noablate";n = {
						element: v
					};
					var L = b && b.ya;
					if(v.hasAttribute("data-pub-vars")) {
						try {
							L = JSON.parse(v.getAttribute("data-pub-vars"))
						} catch(Ga) {
							break b
						}
						v.removeAttribute("data-pub-vars")
					}
					L &&
					(n.params = L);
					(c.adsbygoogle = c.adsbygoogle || []).push(n)
				}
			} catch(Ga) {
				(v = f.ia) && v.parentNode && (L = v.parentNode, L.removeChild(v), Hg(L) && (L.style.display = L.getAttribute("data-init-display") || "none"));
				v = !1;
				break a
			}
			v = !0
		}
		return v ? f : null
	}

	function ph(a) {
		return a.a.google_ama_state = a.a.google_ama_state || {}
	};

	function th() {
		this.b = new uh(this);
		this.a = 0
	}
	th.prototype.resolve = function(a) {
		vh(this);
		this.a = 1;
		this.f = a;
		wh(this.b)
	};
	th.prototype.reject = function(a) {
		vh(this);
		this.a = 2;
		this.c = a;
		wh(this.b)
	};

	function vh(a) {
		if(0 != a.a) throw Error("Already resolved/rejected.");
	}

	function uh(a) {
		this.a = a
	}
	uh.prototype.then = function(a, b) {
		if(this.b) throw Error("Then functions already set.");
		this.b = a;
		this.c = b;
		wh(this)
	};

	function wh(a) {
		switch(a.a.a) {
			case 0:
				break;
			case 1:
				a.b && a.b(a.a.f);
				break;
			case 2:
				a.c && a.c(a.a.c);
				break;
			default:
				throw Error("Unhandled deferred state.");
		}
	};

	function xh(a, b) {
		this.exception = b
	}

	function yh(a, b) {
		this.c = r;
		this.a = a;
		this.b = b
	}
	yh.prototype.start = function() {
		this.f()
	};
	yh.prototype.f = function() {
		try {
			switch(this.c.document.readyState) {
				case "complete":
				case "interactive":
					qh(this.a, !0);
					zh(this);
					break;
				default:
					qh(this.a, !1) ? zh(this) : this.c.setTimeout(Ea(this.f, this), 100)
			}
		} catch(a) {
			zh(this, a)
		}
	};

	function zh(a, b) {
		try {
			a.b.resolve(new xh(oh(a.a), b))
		} catch(c) {
			a.b.reject(c)
		}
	};

	function Ah(a) {
		Of(a, {
			atf: 1
		})
	}

	function Bh(a, b) {
		(a.google_ama_state = a.google_ama_state || {}).exception = b;
		Of(a, {
			atf: 0
		})
	};

	function Ch() {
		this.debugCard = null;
		this.debugCardRequested = !1
	};

	function Dh(a, b) {
		if(!a) return !1;
		a = a.hash;
		if(!a || !a.indexOf) return !1;
		if(-1 != a.indexOf(b)) return !0;
		b = Eh(b);
		return "go" != b && -1 != a.indexOf(b) ? !0 : !1
	}

	function Eh(a) {
		var b = "";
		ce(a.split("_"), function(c) {
			b += c.substr(0, 2)
		});
		return b
	};

	function Fh() {
		var a = this;
		this.a = new Promise(function(b, c) {
			a.resolve = b;
			a.reject = c
		})
	};

	function Gh() {
		var a = new Fh;
		this.promise = a.a;
		this.resolve = a.resolve
	}

	function Hh(a) {
		r.google_llp || (r.google_llp = {});
		var b = r.google_llp;
		b[7] || (b[7] = new Gh, a && a());
		return b[7]
	}

	function Ih(a) {
		return Hh(function() {
			oc(r.document, a)
		}).promise
	};

	function Jh(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if(mb("preload", "stylesheet")) var f = db(b).toString();
			else {
				if(b instanceof ab) var g = db(b).toString();
				else {
					if(b instanceof pb) var h = sb(b);
					else {
						if(b instanceof pb) var k = b;
						else b = "object" == typeof b && b.b ? b.a() : String(b), tb.test(b) || (b = "about:invalid#zClosurez"), k = new pb(qb, b);
						h = sb(k)
					}
					g = h
				}
				f = g
			}
			e.href = f
		} catch(m) {
			return
		}
		d && (e.as = d);
		c && e.setAttribute("nonce", c);
		if(a = a.getElementsByTagName("head")[0]) try {
			a.appendChild(e)
		} catch(m) {}
	};

	function Kh(a) {
		var b = {},
			c = {};
		return c.enable_page_level_ads = (b.pltais = !0, b), c.google_ad_client = a, c
	};

	function Lh(a) {
		if(!a) return "";
		(a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
		return a
	};

	function Mh(a, b, c) {
		return Nh(a, void 0 === c ? "" : c, function(d) {
			return Ma(D(d, Ub, 2), function(e) {
				return A(e, 1) === b
			})
		})
	}

	function Oh(a, b, c) {
		c = void 0 === c ? "" : c;
		var d = oe(a) || a;
		return Ph(d, b) ? !0 : Nh(a, c, function(e) {
			return Ma(A(e, 3), function(f) {
				return f === b
			})
		})
	}

	function Qh(a) {
		return Nh(r, void 0 === a ? "" : a, function() {
			return !0
		})
	}

	function Ph(a, b) {
		a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
		return !!a && Pa(a.split(","), b.toString())
	}

	function Nh(a, b, c) {
		a = oe(a) || a;
		var d = Rh(a);
		b && (b = Lh(String(b)));
		return Ua(d, function(e, f) {
			return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
		})
	}

	function Rh(a) {
		a = Sh(a);
		var b = {};
		ce(a, function(c, d) {
			try {
				var e = new Sb(c);
				b[d] = e
			} catch(f) {}
		});
		return b
	}

	function Sh(a) {
		try {
			var b = a.localStorage.getItem("google_adsense_settings");
			if(!b) return {};
			var c = JSON.parse(b);
			return c !== Object(c) ? {} : Ta(c, function(d, e) {
				return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
			})
		} catch(d) {
			return {}
		}
	};

	function Th() {
		this.b = function() {};
		this.a = function() {
			return []
		}
	}

	function Uh(a, b, c) {
		a.b = function(d) {
			Td(Gd, b, function() {
				return []
			})(d, c)
		};
		a.a = function() {
			return Td(Hd, b, function() {
				return []
			})(c)
		}
	}
	wa(Th);
	var Vh = {
			i: "368226950",
			D: "368226951"
		},
		Wh = {
			i: "368226960",
			D: "368226961"
		},
		Xh = {
			i: "368226470",
			W: "368226471"
		},
		Yh = {
			i: "368226480",
			W: "368226481"
		},
		Zh = {
			i: "36998750",
			D: "36998751"
		},
		$h = {
			v: "20040067",
			i: "20040068",
			oa: "1337"
		},
		ai = {
			i: "21060548",
			v: "21060549"
		},
		bi = {
			i: "21060623",
			v: "21060624"
		},
		ci = {
			i: "21062271",
			v: "21062272"
		};

	function di(a) {
		return Tc && !!a.google_disable_experiments
	}
	je();

	function ei(a) {
		var b = Oh(r, 12, a.google_ad_client);
		a = "google_ad_host" in a;
		var c = pe(r, Vh.D),
			d = Dh(r.location, "google_ads_preview");
		return b && !a && c || d
	}

	function fi(a) {
		if(r.google_apltlad || ne(r) != r || !a.google_ad_client) return null;
		var b = ei(a),
			c = !pe(r, Xh.W);
		if(!b && !c) return null;
		r.google_apltlad = !0;
		var d = Kh(a.google_ad_client),
			e = d.enable_page_level_ads;
		uc(a, function(f, g) {
			ue[g] && "google_ad_client" != g && (e[g] = f)
		});
		b ? e.google_ad_channel = "AutoInsertAutoAdCode" : c && (e.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) && (e.google_ad_section = a.google_ad_section || a.google_ad_region);
		return d
	}

	function gi(a) {
		return ya(a.enable_page_level_ads) && 7 == a.enable_page_level_ads.google_pgb_reactive
	};

	function Df(a) {
		try {
			var b = K(r).eids || [];
			null != b && 0 < b.length && (a.eid = b.join(","))
		} catch(c) {}
	}

	function Cf(a) {
		a.shv = Sc()
	}
	vf.Ca(!Tc);

	function hi(a, b) {
		return ng(b, a) + R(b, a, "height", G)
	};

	function ii(a, b) {
		this.start = a < b ? a : b;
		this.a = a < b ? b : a
	};

	function ji(a) {
		this.b = new ii(0, 999);
		this.a = a
	}

	function ki(a, b, c) {
		c = void 0 === c ? 0 : c;
		c = 0 != c ? "google_experiment_mod" + c : "google_experiment_mod";
		var d = yc(b, c);
		return null === d ? zc(a, b, c) : d
	};

	function li() {
		var a = {};
		this[3] = (a[23] = function(b) {
			return Mh(F, parseInt(b, 10))
		}, a[24] = function(b) {
			return Oh(F, parseInt(b, 10))
		}, a);
		a = {};
		this[4] = (a[7] = function(b) {
			try {
				var c = window.localStorage
			} catch(d) {
				c = null
			}
			return ki(window, c, b)
		}, a);
		this[5] = {}
	}
	wa(li);
	var mi = {
		13: "0.001",
		22: "0.01",
		24: "0.05",
		28: "0.001",
		29: "0.01",
		60: "0.03",
		66: "0.1",
		98: "0.01",
		137: "0.01",
		149: "0",
		150: "1000",
		179: "100",
		180: "20"
	};
	var ni = null;

	function oi() {
		this.a = mi
	};
	var pi = new ji(5);

	function qi(a) {
		a = void 0 === a ? r : a;
		return a.ggeac || (a.ggeac = {})
	};

	function ri(a, b) {
		a = ua(a);
		a = "function" === typeof a ? a() : a;
		return typeof a === b ? a : void 0
	}

	function si() {
		var a = {};
		this[3] = (a[8] = function(b) {
			return !!ua(b)
		}, a[9] = function(b) {
			b = ua(b);
			return "function" == xa(b) && Ec(b)
		}, a[10] = function() {
			return window == window.top
		}, a[6] = function(b) {
			return Pa(Th.h().a(), parseInt(b, 10))
		}, a[27] = function(b) {
			b = ri(b, "boolean");
			return void 0 !== b ? b : void 0
		}, a);
		a = {};
		this[4] = (a[3] = function() {
			return Gc()
		}, a[6] = function(b) {
			b = ri(b, "number");
			return void 0 !== b ? b : void 0
		}, a);
		a = {};
		this[5] = (a[2] = function() {
				return window.location.href
			}, a[3] = function() {
				try {
					return window.top.location.hash
				} catch(b) {
					return ""
				}
			},
			a[4] = function(b) {
				b = ri(b, "string");
				return void 0 !== b ? b : void 0
			}, a)
	}
	wa(si);

	function ti(a) {
		z(this, a, ui, null)
	}
	t(ti, y);
	var ui = [2];
	ti.prototype.Z = function() {
		return B(this, 1, 0)
	};
	ti.prototype.Y = function() {
		return B(this, 7, 0)
	};

	function vi(a) {
		z(this, a, wi, null)
	}
	t(vi, y);
	var wi = [2];
	vi.prototype.Y = function() {
		return B(this, 5, 0)
	};

	function xi(a) {
		z(this, a, yi, null)
	}
	t(xi, y);

	function zi(a) {
		z(this, a, Ai, null)
	}
	t(zi, y);
	var yi = [1, 4, 2, 3],
		Ai = [2];
	zi.prototype.Y = function() {
		return B(this, 1, 0)
	};
	var Bi = [12, 13];

	function Ci() {}
	Ci.prototype.init = function(a, b, c) {
		var d = this,
			e = void 0 === c ? {} : c;
		c = void 0 === e.ta ? !1 : e.ta;
		var f = void 0 === e.Pa ? {} : e.Pa;
		e = void 0 === e.Xa ? [] : e.Xa;
		this.a = a;
		this.g = c;
		this.f = f;
		a = {};
		this.b = (a[b] = e, a[4] = [], a);
		this.c = {};
		(b = ff()) && Ja(b.split(",") || [], function(g) {
			(g = parseInt(g, 10)) && (d.c[g] = !0)
		});
		return this
	};

	function Di(a, b, c) {
		var d = [],
			e = Ei(a.a, b);
		if(e.length) {
			9 !== b && (a.a = Fi(a.a, b));
			var f = Pa(Bi, b);
			Ja(e, function(g) {
				if(g = Gi(a, g, c)) {
					var h = g.Z();
					d.push(h);
					Hi(a, h, f ? 4 : c);
					var k = D(g, id, 2);
					k && (f ? Ja(Cd(), function(m) {
						return Ad(k, m)
					}) : Ad(k, c))
				}
			})
		}
		return d
	}

	function Hi(a, b, c) {
		a.b[c] || (a.b[c] = []);
		a = a.b[c];
		Pa(a, b) ? Nc({
			eids: JSON.stringify(a),
			dup: b
		}) : a.push(b)
	}

	function Ii(a, b) {
		a.a.push.apply(a.a, ha(Ka(La(b, function(c) {
			return new zi(c)
		}), function(c) {
			return !Pa(Bi, c.Y())
		})))
	}

	function Gi(a, b, c) {
		var d = md.h().a;
		if(!fd(C(b, Zc, 3), d)) return null;
		var e = D(b, ti, 2),
			f = e.length * B(b, 1, 0),
			g = B(b, 6, 0);
		if(g) {
			f = d[4];
			switch(c) {
				case 2:
					var h = f[8];
					break;
				case 1:
					h = f[7]
			}
			f = null;
			if(h) try {
				f = h(g)
			} catch(k) {}
			null === f && (f = Math.floor(1E3 * tc(window)));
			b = Ji(b, f);
			return !b || d && !fd(C(b, Zc, 3), d) ? null : Ki(a, [b], 1)
		}
		g = d ? Ka(e, function(k) {
			return fd(C(k, Zc, 3), d)
		}) : e;
		return g.length ? (b = B(b, 4, 0)) ? Li(a, b, f, g) : Ki(a, g, f / 1E3) : null
	}

	function Li(a, b, c, d) {
		var e = null != a.f[b] ? a.f[b] : 1E3;
		if(0 >= e) return null;
		d = Ki(a, d, c / e);
		a.f[b] = d ? 0 : e - c;
		return d
	}

	function Ki(a, b, c) {
		var d = a.c,
			e = Na(b, function(f) {
				return !!d[f.Z()]
			});
		return e ? e : a.g ? null : qc(b, c, !1)
	}

	function Mi(a, b) {
		I(Ed, function(c) {
			a.c[c] = !0
		}, b);
		I(Gd, function(c, d) {
			return Di(a, c, d)
		}, b);
		I(Hd, function(c) {
			return(a.b[c] || []).concat(a.b[4])
		}, b);
		I(Qd, function(c) {
			return Ii(a, c)
		}, b)
	}
	wa(Ci);

	function Ei(a, b) {
		return(a = Na(a, function(c) {
			return c.Y() == b
		})) && D(a, vi, 2) || []
	}

	function Fi(a, b) {
		return Ka(a, function(c) {
			return c.Y() != b
		})
	}

	function Ji(a, b) {
		var c = D(a, ti, 2),
			d = c.length,
			e = B(a, 1, 0);
		a = B(a, 8, 0);
		var f = (b - a) % d;
		return b < a || b - a - f >= d * e - 1 ? null : c[f]
	};

	function Ni() {
		this.a = function() {}
	}
	wa(Ni);

	function Oi(a) {
		Ni.h().a(a)
	};

	function Pi(a, b, c, d) {
		var e = 1;
		d = void 0 === d ? qi() : d;
		e = void 0 === e ? 0 : e;
		d.hasOwnProperty("init-done") ? (Td(Qd, d)(La(D(a, zi, 2), function(f) {
			return f.a
		})), Td(Rd, d)(La(D(a, id, 1), function(f) {
			return f.a
		}), e), b && Td(Sd, d)(b), Qi(d, e)) : (Mi(Ci.h().init(D(a, zi, 2), e, c), d), Ud(d), Vd(d), Wd(d), Qi(d, e), Ad(D(a, id, 1), e), nd = nd || !(!c || !c.Ma), Oi(si.h()), b && Oi(b))
	}

	function Qi(a, b) {
		a = void 0 === a ? qi() : a;
		b = void 0 === b ? 0 : b;
		var c = a,
			d = b;
		d = void 0 === d ? 0 : d;
		Uh(Th.h(), c, d);
		c = a;
		b = void 0 === b ? 0 : b;
		Yd(Xd.h(), c, b);
		Ni.h().a = Td(Sd, a);
		Xd.h().a()
	};

	function Ri(a) {
		try {
			return a.localStorage
		} catch(b) {
			return null
		}
	}

	function Si(a) {
		var b = K(a);
		if(b.plle) Qi(qi(a), 1);
		else {
			b.plle = !0;
			var c = Ri(a);
			null == yc(c, "goog_pem_mod") && zc(a, c, "goog_pem_mod");
			c = [null, null];
			try {
				var d = JSON.parse("[[[259,null,null,[1]],[225,null,null,[1]],[289,null,null,[1]],[209,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[270,null,null,[1]],[210,null,null,[1]],[211,null,null,[1]],[284,null,null,[1]],[207,null,null,[1]],[null,60,null,[null,20]],[null,57,null,[null,300]],[null,58,null,[null,300]],[215,null,null,[1]],[230,null,null,[1]],[191,null,null,[1]],[null,null,null,[null,null,null,[\x22facebook[.]com\x22,\x22whatsapp[.]com\x22,\x22youtube[.]com\x22,\x22google[.]com\x22,\x22\\\\/ads?\\\\/\x22]],null,9]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[100,[[42530451],[42530452,[[324,null,null,[1]]]]],null,null,null,41,20,1],[100,[[42530453],[42530454,[[324,null,null,[1]]]]],null,null,null,41,20,1],[10,[[42530473],[42530474,[[341,null,null,[1]]]]],null,null,null,46,23,1],[10,[[42530475],[42530476,[[341,null,null,[1]]]]],null,null,null,46,23,1],[3,[[44717727],[44717728],[44717729],[44717730],[44719983],[44719984]]],[1,[[44719906,null,[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]],[44719907,[[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]]]],[1,[[21065070],[21065071],[21065072,[[243,null,null,[1]]]],[21065073,[[243,null,null,[1]]]]]],[50,[[21065531],[21065532]],null,null,null,13,null,300],[50,[[21066124,[[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]],[21066125,[[265,null,null,[1]],[260,null,null,[1]],[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]]],null,null,null,40,null,1],[150,[[21066141,null,[2,[[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]],[6,null,null,3,null,2]]]],[21066142,[[233,null,null,[1]],[232,null,null,[1]]],[2,[[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]],[6,null,null,3,null,2]]]]],null,null,null,42,null,1],[50,[[21066259,null,[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]],[21066260,[[335,null,null,[1]]],[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]]],null,null,null,45],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]],[182982300,null,[1,[[12,null,null,null,2,null,\x22\\\\.wiki(dogs|how)(-fun)?\\\\.\x22]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\x221\x22]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\x221\x22]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\x221\x22]]],[182984300,null,[4,null,23,null,null,null,null,[\x221\x22]]]],null,null,null,37,10,1],[10,[[21066004],[21066005,[[325,null,null,[1]]]]],null,23],[null,[[21066126,[[290,null,null,[1]],[190,null,null,[1]]]],[21066127,[[290,null,null,[1]],[190,null,null,[1]]]]],null,null,null,38,null,1],[1,[[21066167],[21066168,[[279,null,null,[1]]]]]],[1,[[21066175],[21066176],[21066177],[21066178]],null,null,null,44,22],[1,[[21066179],[21066180]],null,null,null,44,null,500],[1,[[21066336],[21066337,[[343,null,null,[1]]]]]]]],[13,[[500,[[21065350],[21065351]],[2,[[3,[[4,null,6,null,null,null,null,[\x2221061508\x22]],[4,null,6,null,null,null,null,[\x2221060549\x22]]]],[4,null,9,null,null,null,null,[\x22ReportingObserver\x22]]]]],[100,[[21065726,null,[4,null,6,null,null,null,null,[\x2221065725\x22]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\x2221065725\x22]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\x2221065725\x22]]]],[4,null,9,null,null,null,null,[\x22LayoutShift\x22]]],[50,[[21066347],[21066348,null,[4,null,8,null,null,null,null,[\x22Date.now\x22]]],[21066349,null,[4,null,9,null,null,null,null,[\x22Date.now\x22]]]]],[50,[[21066352,null,[1,[[4,null,9,null,null,null,null,[\x22Date.now\x22]]]]]]],[50,[[21066353,null,[1,[[4,null,8,null,null,null,null,[\x22Date.now\x22]]]]]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\x22LayoutShift\x22]]],[1,[[21065755],[21065756,[[312,null,null,[1]]]]],null,21],[1,[[21065757],[21065758,[[312,null,null,[1]]]]],[4,null,9,null,null,null,null,[\x22hasTrustToken\x22]],21],[1,[[21065784]]],[1,[[21065785,null,[4,null,8,null,null,null,null,[\x22navigator.connection.saveData\x22]]]]],[1,[[21065786,null,[4,null,27,null,null,null,null,[\x22navigator.connection.saveData\x22]]]]],[1,[[21065787,null,[1,[[4,null,27,null,null,null,null,[\x22navigator.connection.saveData\x22]]]]]]]]]]]")
			} catch(h) {
				d = c
			}
			Vf(13, [d]);
			Pi(new xi(d), li.h(), {
				ta: di(a),
				Ma: Tc
			}, qi(a));
			Th.h().b(12);
			Th.h().b(10);
			b.eids = La(Th.h().a(), String).concat(b.eids || []);
			b = b.eids;
			ni || (ni = new oi);
			var e = ni;
			Wc = !0;
			var f;
			if(Oh(a, 12)) {
				d = Wh;
				c = Vh;
				var g = Ti(a, new ji(0), Oc(e.a[149]), Oc(e.a[150]), [d.i, d.D], 4);
				S(b, g);
				g == d.i ? f = c.i : g == d.D ? f =
					c.D : f = "";
				S(b, f)
			}
			d = Yh;
			g = Ti(a, pi, Oc(e.a[179]), Oc(e.a[180]), [d.i, d.W]);
			S(b, g);
			c = Xh;
			g == d.i ? f = c.i : g == d.W ? f = c.W : f = "";
			S(b, f);
			fb("") && S(b, "");
			d = $h;
			g = Ui(a, Oc(e.a[13]), [d.v, d.i]);
			S(b, g);
			g = Ui(a, 0, [d.oa]);
			S(b, g);
			d = ai;
			g = Ui(a, Oc(e.a[60]), [d.v, d.i]);
			S(b, g);
			g == ai.v && (d = bi, g = Ui(a, Oc(e.a[66]), [d.v, d.i]), S(b, g), d = ci, g = Ui(a, Oc(e.a[137]), [d.v, d.i]), S(b, g));
			d = Zh;
			g = Ui(a, Oc(e.a[98]), [d.i, d.D]);
			S(b, g);
			a = oe(a) || a;
			Dh(a.location, "google_mc_lab") && S(b, "242104166")
		}
	}

	function S(a, b) {
		b && a.push(b)
	}

	function Vi(a, b) {
		for(var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
		d = oe(a) || a;
		d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1];
		return !!d && Ma(c, Fa(mb, d))
	}

	function Ui(a, b, c) {
		for(var d = 0; d < c.length; d++)
			if(Vi(a, c[d])) return c[d];
		return di(a) ? null : qc(c, b)
	}

	function Ti(a, b, c, d, e, f) {
		f = void 0 === f ? 1 : f;
		for(var g = 0; g < e.length; g++)
			if(Vi(a, e[g])) return e[g];
		di(a) ? c = null : (f = void 0 === f ? 1 : f, 0 >= d ? c = null : (g = new ii(c, c + d - 1), (d = d % f || d / f % e.length) || (d = b.b, d = !(d.start <= g.start && d.a >= g.a)), d ? c = null : (a = ki(a, Ri(a), b.a), c = null !== a && g.start <= a && g.a >= a ? e[Math.floor((a - c) / f) % e.length] : null)));
		return c
	};

	function Wi(a, b, c) {
		if(kc(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c));
		else {
			a = a.document.getElementById(b).contentWindow;
			c = String(c);
			b = ['"'];
			for(var d = 0; d < c.length; d++) {
				var e = c.charAt(d),
					f = e.charCodeAt(0),
					g = d + 1,
					h;
				if(!(h = Cb[e])) {
					if(!(31 < f && 127 > f))
						if(f = e, f in Db) e = Db[f];
						else if(f in Cb) e = Db[f] = Cb[f];
					else {
						h = f.charCodeAt(0);
						if(31 < h && 127 > h) e = f;
						else {
							if(256 > h) {
								if(e = "\\x", 16 > h || 256 < h) e += "0"
							} else e = "\\u", 4096 > h && (e += "0");
							e += h.toString(16).toUpperCase()
						}
						e = Db[f] = e
					}
					h = e
				}
				b[g] = h
			}
			b.push('"');
			a.location.replace("javascript:" + b.join(""))
		}
	};
	var Xi = null;

	function T(a, b, c, d) {
		d = void 0 === d ? !1 : d;
		Q.call(this, a, b);
		this.$ = c;
		this.Na = d
	}
	p(T, Q);
	T.prototype.ga = function() {
		return this.$
	};
	T.prototype.ba = function(a, b, c) {
		b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
	};

	function Yi(a) {
		return function(b) {
			return !!(b.$ & a)
		}
	};
	var Zi = Gb("script");

	function $i(a, b, c, d, e, f, g, h, k, m, n, q, w, u) {
		this.I = a;
		this.a = b;
		this.$ = void 0 === c ? null : c;
		this.c = void 0 === d ? null : d;
		this.U = void 0 === e ? null : e;
		this.b = void 0 === f ? null : f;
		this.f = void 0 === g ? null : g;
		this.o = void 0 === h ? !1 : h;
		this.A = void 0 === k ? !1 : k;
		this.P = void 0 === m ? null : m;
		this.aa = void 0 === n ? null : n;
		this.g = void 0 === q ? null : q;
		this.j = void 0 === w ? null : w;
		this.T = void 0 === u ? null : u;
		this.V = this.L = this.K = null
	}

	function aj(a, b, c) {
		null != a.$ && (c.google_responsive_formats = a.$);
		null != a.U && (c.google_safe_for_responsive_override = a.U);
		null != a.b && (!0 === a.b ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.b));
		null != a.f && !0 !== a.f && (c.gfwrnher = a.f);
		a.o && (c.google_bfa = a.o);
		a.A && (c.ebfa = a.A);
		var d = a.j || c.google_ad_width;
		null != d && (c.google_resizing_width = d);
		d = a.g || c.google_ad_height;
		null != d && (c.google_resizing_height = d);
		d = a.a.R(b);
		var e = a.a.height();
		c.google_ad_resize ||
			(c.google_ad_width = d, c.google_ad_height = e, c.google_ad_format = a.a.ja(b), c.google_responsive_auto_format = a.I, null != a.c && (c.armr = a.c), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.b && (c.gfwrnh = a.a.height() + "px"));
		null != a.P && (c.gfwroml = a.P);
		null != a.aa && (c.gfwromr = a.aa);
		null != a.g && (c.gfwroh = a.g);
		null != a.j && (c.gfwrow = a.j);
		null != a.T && (c.gfwroz = a.T);
		null != a.K && (c.gml = a.K);
		null != a.L && (c.gmr = a.L);
		null != a.V && (c.gzi = a.V);
		b = je();
		b = oe(b) || b;
		Dh(b.location, "google_responsive_slot_debug") &&
			(c.ds = "outline:thick dashed " + (d && e ? !0 !== a.b || !0 !== a.f ? "#ffa500" : "#0f0" : "#f00") + " !important;");
		Dh(b.location, "google_responsive_dummy_ad") && (Pa([1, 2, 3, 4, 5, 6, 7, 8], a.I) || 1 === a.c) && 2 !== a.c && (a = JSON.stringify({
				googMsgType: "adpnt",
				key_value: [{
					key: "qid",
					value: "DUMMY_AD"
				}]
			}), c.dash = "<" + Zi + ">window.top.postMessage('" + a + "', '*');\n          </" + Zi + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
			d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
	};
	/* 
	 
	 Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
	 
	 Licensed under the Apache License, Version 2.0 (the "License"); 
	 you may not use this file except in compliance with the License. 
	 You may obtain a copy of the License at 
	 
	      http://www.apache.org/licenses/LICENSE-2.0 
	 
	 Unless required by applicable law or agreed to in writing, software 
	 distributed under the License is distributed on an "AS-IS" BASIS, 
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
	 See the License for the specific language governing permissions and 
	 limitations under the License. 
	*/
	var bj = {},
		cj = (bj.image_stacked = 1 / 1.91, bj.image_sidebyside = 1 / 3.82, bj.mobile_banner_image_sidebyside = 1 / 3.82, bj.pub_control_image_stacked = 1 / 1.91, bj.pub_control_image_sidebyside = 1 / 3.82, bj.pub_control_image_card_stacked = 1 / 1.91, bj.pub_control_image_card_sidebyside = 1 / 3.74, bj.pub_control_text = 0, bj.pub_control_text_card = 0, bj),
		dj = {},
		ej = (dj.image_stacked = 80, dj.image_sidebyside = 0, dj.mobile_banner_image_sidebyside = 0, dj.pub_control_image_stacked = 80, dj.pub_control_image_sidebyside = 0, dj.pub_control_image_card_stacked =
			85, dj.pub_control_image_card_sidebyside = 0, dj.pub_control_text = 80, dj.pub_control_text_card = 80, dj),
		fj = {},
		gj = (fj.pub_control_image_stacked = 100, fj.pub_control_image_sidebyside = 200, fj.pub_control_image_card_stacked = 150, fj.pub_control_image_card_sidebyside = 250, fj.pub_control_text = 100, fj.pub_control_text_card = 150, fj);

	function hj(a) {
		var b = 0;
		a.C && b++;
		a.s && b++;
		a.u && b++;
		if(3 > b) return {
			B: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
		};
		b = a.C.split(",");
		var c = a.u.split(",");
		a = a.s.split(",");
		if(b.length !== c.length || b.length !== a.length) return {
			B: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
		};
		if(2 < b.length) return {
			B: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
		};
		for(var d = [], e = [], f = 0; f < b.length; f++) {
			var g =
				Number(c[f]);
			if(isNaN(g) || 0 === g) return {
				B: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
			};
			d.push(g);
			g = Number(a[f]);
			if(isNaN(g) || 0 === g) return {
				B: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
			};
			e.push(g)
		}
		return {
			u: d,
			s: e,
			wa: b
		}
	}

	function ij(a) {
		return 1200 <= a ? {
			width: 1200,
			height: 600
		} : 850 <= a ? {
			width: a,
			height: Math.floor(.5 * a)
		} : 550 <= a ? {
			width: a,
			height: Math.floor(.6 * a)
		} : 468 <= a ? {
			width: a,
			height: Math.floor(.7 * a)
		} : {
			width: a,
			height: Math.floor(3.44 * a)
		}
	};
	var jj = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

	function kj(a, b) {
		Q.call(this, a, b)
	}
	p(kj, Q);
	kj.prototype.R = function(a) {
		return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
	};

	function lj(a, b) {
		mj(a, b);
		if("pedestal" == b.google_content_recommendation_ui_type) return new $i(9, new kj(a, Math.floor(a * b.google_phwr)));
		var c = ic();
		468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * cj.mobile_banner_image_sidebyside + ej.mobile_banner_image_sidebyside) + 96), a = {
			O: a,
			M: c,
			s: 1,
			u: 12,
			C: "mobile_banner_image_sidebyside"
		}) : (a = ij(a), a = {
			O: a.width,
			M: a.height,
			s: 1,
			u: 13,
			C: "image_sidebyside"
		}) : (a = ij(a), a = {
			O: a.width,
			M: a.height,
			s: 4,
			u: 2,
			C: "image_stacked"
		});
		nj(b, a);
		return new $i(9, new kj(a.O, a.M))
	}

	function oj(a, b) {
		mj(a, b);
		var c = hj({
			u: b.google_content_recommendation_rows_num,
			s: b.google_content_recommendation_columns_num,
			C: b.google_content_recommendation_ui_type
		});
		if(c.B) a = {
			O: 0,
			M: 0,
			s: 0,
			u: 0,
			C: "image_stacked",
			B: c.B
		};
		else {
			var d = 2 === c.wa.length && 468 <= a ? 1 : 0;
			var e = c.wa[d];
			e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
			var f = gj[e];
			for(var g = c.s[d]; a / g < f && 1 < g;) g--;
			f = g;
			c = c.u[d];
			d = Math.floor(((a - 8 * f - 8) / f * cj[e] + ej[e]) * c + 8 * c + 8);
			a = 1500 < a ? {
					width: 0,
					height: 0,
					na: "Calculated slot width is too large: " + a
				} :
				1500 < d ? {
					width: 0,
					height: 0,
					na: "Calculated slot height is too large: " + d
				} : {
					width: a,
					height: d
				};
			a = a.na ? {
				O: 0,
				M: 0,
				s: 0,
				u: 0,
				C: e,
				B: a.na
			} : {
				O: a.width,
				M: a.height,
				s: f,
				u: c,
				C: e
			}
		}
		if(a.B) throw new O(a.B);
		nj(b, a);
		return new $i(9, new kj(a.O, a.M))
	}

	function mj(a, b) {
		if(0 >= a) throw new O("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
	}

	function nj(a, b) {
		a.google_content_recommendation_ui_type = b.C;
		a.google_content_recommendation_columns_num = b.s;
		a.google_content_recommendation_rows_num = b.u
	};

	function pj(a, b) {
		Q.call(this, a, b)
	}
	p(pj, Q);
	pj.prototype.R = function() {
		return this.minWidth()
	};
	pj.prototype.ba = function(a, b, c) {
		yg(a, c);
		b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
	};
	var qj = {
		"image-top": function(a) {
			return 600 >= a ? 284 + .414 * (a - 250) : 429
		},
		"image-middle": function(a) {
			return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
		},
		"image-side": function(a) {
			return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
		},
		"text-only": function(a) {
			return 500 >= a ? 187 - .228 * (a - 250) : 130
		},
		"in-article": function(a) {
			return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
		}
	};

	function rj(a, b) {
		Q.call(this, a, b)
	}
	p(rj, Q);
	rj.prototype.R = function() {
		return Math.min(1200, this.minWidth())
	};

	function sj(a, b, c, d, e) {
		var f = e.google_ad_layout || "image-top";
		if("in-article" == f && "false" != e.google_full_width_responsive) {
			var g = rg(b, c, a, .2, e);
			if(!0 !== g) e.gfwrnwer = g;
			else if(g = P(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (wg(b, c), yg(b, c), a = g)
		}
		if(250 > a) throw new O("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
		a = Math.min(1200, Math.floor(a));
		if(d && "in-article" != f) {
			f = Math.ceil(d);
			if(50 > f) throw new O("Fluid responsive ads must be at least 50px tall: height=" +
				f);
			return new $i(11, new Q(a, f))
		}
		if("in-article" != f && (d = e.google_ad_layout_key)) {
			f = "" + d;
			b = Math.pow(10, 3);
			if(d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
				e = [];
				for(g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
				b = e
			} else b = null;
			if(!b) throw new O("Invalid data-ad-layout-key value: " + f);
			f = (a + -725) / 1E3;
			c = 0;
			d = 1;
			e = b.length;
			for(g = 0; g < e; g++) c += b[g] * d, d *= f;
			f = Math.ceil(1E3 * c - -725 + 10);
			if(isNaN(f)) throw new O("Invalid height: height=" + f);
			if(50 > f) throw new O("Fluid responsive ads must be at least 50px tall: height=" + f);
			if(1200 < f) throw new O("Fluid responsive ads must be at most 1200px tall: height=" + f);
			return new $i(11, new Q(a, f))
		}
		d = qj[f];
		if(!d) throw new O("Invalid data-ad-layout value: " + f);
		c = Bg(c, b);
		b = P(b);
		b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
		return new $i(11, "in-article" == f ? new rj(a, b) : new Q(a, b))
	};

	function tj(a) {
		return function(b) {
			for(var c = a.length - 1; 0 <= c; --c)
				if(!a[c](b)) return !1;
			return !0
		}
	}

	function uj(a, b, c) {
		for(var d = a.length, e = null, f = 0; f < d; ++f) {
			var g = a[f];
			if(b(g)) {
				if(!c || c(g)) return g;
				null === e && (e = g)
			}
		}
		return e
	};
	var U = [new T(970, 90, 2), new T(728, 90, 2), new T(468, 60, 2), new T(336, 280, 1), new T(320, 100, 2), new T(320, 50, 2), new T(300, 600, 4), new T(300, 250, 1), new T(250, 250, 1), new T(234, 60, 2), new T(200, 200, 1), new T(180, 150, 1), new T(160, 600, 4), new T(125, 125, 1), new T(120, 600, 4), new T(120, 240, 4), new T(120, 120, 1, !0)],
		vj = [U[6], U[12], U[3], U[0], U[7], U[14], U[1], U[8], U[10], U[4], U[15], U[2], U[11], U[5], U[13], U[9], U[16]];

	function wj(a, b, c, d, e) {
		"false" == e.google_full_width_responsive ? c = {
			l: a,
			m: 1
		} : "autorelaxed" == b && e.google_full_width_responsive || xj(b) || e.google_ad_resize ? (488 > P(c) && tg(c) && wg(c, d), b = sg(a, c, d, e), c = !0 !== b ? {
			l: a,
			m: b
		} : {
			l: P(c) || a,
			m: !0
		}) : c = {
			l: a,
			m: 2
		};
		b = c.m;
		return !0 !== b ? {
			l: a,
			m: b
		} : d.parentElement ? {
			l: c.l,
			m: b
		} : {
			l: a,
			m: b
		}
	}

	function yj(a, b, c, d, e) {
		var f = Ef(247, function() {
				return wj(a, b, c, d, e)
			}),
			g = f.l;
		f = f.m;
		var h = !0 === f,
			k = G(d.style.width),
			m = G(d.style.height),
			n = zj(g, b, c, d, e, h);
		g = n.N;
		h = n.H;
		var q = n.F,
			w = n.G,
			u = n.ga;
		n = n.va;
		var E = Aj(b, u),
			v, L = (v = R(d, c, "marginLeft", G)) ? v + "px" : "",
			Ga = (v = R(d, c, "marginRight", G)) ? v + "px" : "";
		v = R(d, c, "zIndex") || "";
		return new $i(E, g, u, null, n, f, h, q, w, L, Ga, m, k, v)
	}

	function xj(a) {
		return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
	}

	function zj(a, b, c, d, e, f) {
		b = "auto" == b ? .25 >= a / Math.min(1200, P(c)) ? 4 : 3 : qg(b);
		var g = !1,
			h = !1;
		if(488 > P(c)) {
			var k = pg(d, c);
			var m = Bg(d, c);
			g = !m && k;
			h = m && k
		}
		m = 488 > P(c);
		var n = [zg(a), Yi(b)];
		tg(c) || n.push(Ag(m, c, d, h));
		null != e.google_max_responsive_height && n.push(Dg(e.google_max_responsive_height));
		var q = [function(u) {
			return !u.Na
		}];
		!g && !h || tg(c) || (g = Fg(c, d), q.push(Dg(g)));
		var w = m && !f && 3 === b && Bj(c) ? new T(a, Math.floor(a / 1.2), 1) : uj(vj.slice(0), tj(n), tj(q));
		if(!w) throw new O("No slot size for availableWidth=" + a);
		q = Ef(248,
			function() {
				var u;
				a: if(f) {
					if(e.gfwrnh && (u = G(e.gfwrnh))) {
						u = {
							N: new pj(a, u),
							H: !0,
							F: !1,
							G: !1
						};
						break a
					}
					u = !1;
					var E = kg(c).clientHeight,
						v = ng(d, c),
						L = c.google_lpabyc,
						Ga = Eg(d, c);
					Ga && 2 < Ga && !c.google_bfabyc && (!L || v - L > E) && (E = .9 * kg(c).clientHeight, v = Math.min(E, Cj(c, d, e)), E && v == E && (v = c.google_pbfabyc, u = !v, v || (c.google_pbfabyc = ng(d, c) + E)));
					E = a / 1.2;
					if(tg(c)) v = E;
					else if(v = Math.min(E, Cj(c, d, e)), v < .5 * E || 100 > v) v = E;
					J(282) && !Bg(d, c) && (v = Math.max(v, .5 * kg(c).clientHeight));
					u = {
						N: new pj(a, Math.floor(v)),
						H: v < E ? 102 : !0,
						F: !1,
						G: u
					}
				} else u = {
					N: w,
					H: 100,
					F: !1,
					G: !1
				};
				return u
			});
		g = q.N;
		m = q.H;
		n = q.F;
		q = q.G;
		return "in-article" === e.google_ad_layout && Dj(c) ? {
			N: Ej(a, c, d, g, e),
			H: !1,
			F: !1,
			G: !1,
			ga: b,
			va: k
		} : {
			N: g,
			H: m,
			F: n,
			G: q,
			ga: b,
			va: k
		}
	}

	function Cj(a, b, c) {
		if(c.google_resizing_allowed || "true" == c.google_full_width_responsive) a = Infinity;
		else {
			c = Infinity;
			do {
				var d = R(b, a, "height", G);
				d && (c = Math.min(c, d));
				(d = R(b, a, "maxHeight", G)) && (c = Math.min(c, d))
			} while ((b = b.parentElement) && "HTML" != b.tagName);
			a = c
		}
		return a
	}

	function Aj(a, b) {
		if("auto" == a) return 1;
		switch(b) {
			case 2:
				return 2;
			case 1:
				return 3;
			case 4:
				return 4;
			case 3:
				return 5;
			case 6:
				return 6;
			case 5:
				return 7;
			case 7:
				return 8
		}
		throw Error("bad mask");
	}

	function Ej(a, b, c, d, e) {
		var f = e.google_ad_height || R(c, b, "height", G);
		b = sj(a, b, c, f, e).a;
		return b.minWidth() * b.height() > a * d.height() ? new T(b.minWidth(), b.height(), 1) : d
	}

	function Dj(a) {
		return J(227) || a.location && "#hffwroe2etoq" == a.location.hash
	}

	function Bj(a) {
		return J(232) || a.location && "#affwroe2etoq" == a.location.hash
	};

	function Fj(a, b) {
		Q.call(this, a, b)
	}
	p(Fj, Q);
	Fj.prototype.R = function() {
		return this.minWidth()
	};
	Fj.prototype.ja = function(a) {
		return Q.prototype.ja.call(this, a) + "_0ads_al"
	};
	var Gj = [new Fj(728, 15), new Fj(468, 15), new Fj(200, 90), new Fj(180, 90), new Fj(160, 90), new Fj(120, 90)];

	function Hj(a, b, c) {
		var d = 250,
			e = 90;
		d = void 0 === d ? 130 : d;
		e = void 0 === e ? 30 : e;
		var f = uj(Gj, zg(a));
		if(!f) throw new O("No link unit size for width=" + a + "px");
		a = Math.min(a, 1200);
		f = f.height();
		b = Math.max(f, b);
		d = (new $i(10, new Fj(a, Math.min(b, 15 == f ? e : d)))).a;
		b = d.minWidth();
		d = d.height();
		15 <= c && (d = c);
		return new $i(10, new Fj(b, d))
	}

	function Ij(a, b, c, d) {
		if("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
		var e = sg(a, b, c, d);
		if(!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
		e = P(b);
		if(!e) return a;
		d.google_full_width_responsive_allowed = !0;
		yg(b, c);
		return e
	};

	function Jj(a, b, c, d, e) {
		var f;
		(f = P(b)) ? 488 > P(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, yg(b, c), f = {
			l: f,
			m: !0
		}) : f = {
			l: a,
			m: 5
		} : f = {
			l: a,
			m: 4
		}: f = {
			l: a,
			m: 10
		};
		var g = f;
		f = g.l;
		g = g.m;
		if(!0 !== g || a == f) return new $i(12, new Q(a, d), null, null, !0, g, 100);
		a = zj(f, "auto", b, c, e, !0);
		return new $i(1, a.N, a.ga, 2, !0, g, a.H, a.F, a.G)
	};

	function Kj(a, b) {
		var c = b.google_ad_format;
		if("autorelaxed" == c) {
			a: {
				if("pedestal" != b.google_content_recommendation_ui_type)
					for(a = fa(jj), c = a.next(); !c.done; c = a.next())
						if(null != b[c.value]) {
							b = !0;
							break a
						}
				b = !1
			}
			return b ? 9 : 5
		}
		if(xj(c)) return 1;
		if("link" == c) return 4;
		if("fluid" == c) {
			if(c = "in-article" === b.google_ad_layout) c = J(208) || J(227) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
			return c ? (Lj(b), 1) : 8
		}
		if(c = 27 === b.google_reactive_ad_format) c = !(J(335) || a.location && "#cefwroe2etoq" ==
			a.location.hash);
		if(c) return Lj(b), 1
	}

	function Mj(a, b, c, d, e) {
		e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && R(b, d, "width", G) || c.google_ad_width || 0;
		(J(310) || d.location && "#ooimne2e" == d.location.hash) && 4 === a && (c.google_ad_format = "auto", c.google_ad_slot = "", a = 1);
		var f = (f = Nj(a, e, b, c, d)) ? f : yj(e, c.google_ad_format, d, b, c);
		f.a.ba(d, c, b);
		aj(f, e, c);
		1 != a && (a = f.a.height(), b.style.height = a + "px")
	}

	function Nj(a, b, c, d, e) {
		var f = d.google_ad_height || R(c, e, "height", G);
		switch(a) {
			case 5:
				return a = Ef(247, function() {
					return wj(b, d.google_ad_format, e, c, d)
				}), f = a.l, a = a.m, !0 === a && b != f && yg(e, c), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), lj(f, d);
			case 9:
				return oj(b, d);
			case 4:
				return a = Ij(b, e, c, d), Hj(a, Fg(e, c), f);
			case 8:
				return sj(b, e, c, f, d);
			case 10:
				return Jj(b, e, c, f, d)
		}
	}

	function Lj(a) {
		a.google_ad_format = "auto";
		a.armr = 3
	};

	function V(a) {
		this.f = [];
		this.b = a || window;
		this.a = 0;
		this.c = null;
		this.g = 0
	}
	var Oj;
	l = V.prototype;
	l.Ja = function(a, b) {
		0 != this.a || 0 != this.f.length || b && b != window ? this.sa(a, b) : (this.a = 2, this.Aa(new Pj(a, window)))
	};
	l.sa = function(a, b) {
		this.f.push(new Pj(a, b || this.b));
		Qj(this)
	};
	l.Ra = function(a) {
		this.a = 1;
		if(a) {
			var b = Ff(188, Ea(this.za, this, !0));
			this.c = this.b.setTimeout(b, a)
		}
	};
	l.za = function(a) {
		a && ++this.g;
		1 == this.a && (null != this.c && (this.b.clearTimeout(this.c), this.c = null), this.a = 0);
		Qj(this)
	};
	l.Ya = function() {
		return !(!window || !Array)
	};
	l.La = function() {
		return this.g
	};

	function Qj(a) {
		var b = Ff(189, Ea(a.Za, a));
		a.b.setTimeout(b, 0)
	}
	l.Za = function() {
		if(0 == this.a && this.f.length) {
			var a = this.f.shift();
			this.a = 2;
			var b = Ff(190, Ea(this.Aa, this, a));
			a.a.setTimeout(b, 0);
			Qj(this)
		}
	};
	l.Aa = function(a) {
		this.a = 0;
		a.b()
	};

	function Rj(a) {
		try {
			return a.sz()
		} catch(b) {
			return !1
		}
	}

	function Sj(a) {
		return !!a && ("object" === typeof a || "function" === typeof a) && Rj(a) && de(a.nq) && de(a.nqa) && de(a.al) && de(a.rl)
	}

	function Tj() {
		if(Oj && Rj(Oj)) return Oj;
		var a = Og(),
			b = a.google_jobrunner;
		return Sj(b) ? Oj = b : a.google_jobrunner = Oj = new V(a)
	}

	function Uj(a, b) {
		Tj().nq(a, b)
	}

	function Vj(a, b) {
		Tj().nqa(a, b)
	}
	V.prototype.nq = V.prototype.Ja;
	V.prototype.nqa = V.prototype.sa;
	V.prototype.al = V.prototype.Ra;
	V.prototype.rl = V.prototype.za;
	V.prototype.sz = V.prototype.Ya;
	V.prototype.tc = V.prototype.La;

	function Pj(a, b) {
		this.b = a;
		this.a = b
	};

	function Wj(a, b) {
		var c = oe(b);
		if(c) {
			c = P(c);
			var d = pc(a, b) || {},
				e = d.direction;
			if("0px" === d.width && "none" != d.cssFloat) return -1;
			if("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
			if("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
		}
		return -1
	};

	function Xj(a) {
		var b = this;
		this.a = a;
		a.google_iframe_oncopy || (a.google_iframe_oncopy = {
			handlers: {},
			upd: function(c, d) {
				var e = Yj("rx", c),
					f = Number;
				a: {
					if(c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
						c = c[1];
						break a
					}
					c = ""
				}
				f = f(c);
				f = (new Date).getTime() - f;
				e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
				b.set(d, e);
				return e
			}
		});
		this.b = a.google_iframe_oncopy
	}
	Xj.prototype.set = function(a, b) {
		var c = this;
		this.b.handlers[a] = b;
		this.a.addEventListener && this.a.addEventListener("load", function() {
			var d = c.a.document.getElementById(a);
			try {
				var e = d.contentWindow.document;
				if(d.onload && e && (!e.body || !e.body.firstChild)) d.onload()
			} catch(f) {}
		}, !1)
	};

	function Yj(a, b) {
		var c = new RegExp("\\b" + a + "=(\\d+)"),
			d = c.exec(b);
		d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
		return b
	}
	var Zj, ak = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
	var W = ak;
	/[\x00&<>"']/.test(W) && (-1 != W.indexOf("&") && (W = W.replace(gb, "&amp;")), -1 != W.indexOf("<") && (W = W.replace(hb, "&lt;")), -1 != W.indexOf(">") && (W = W.replace(ib, "&gt;")), -1 != W.indexOf('"') && (W = W.replace(jb, "&quot;")), -1 != W.indexOf("'") && (W = W.replace(kb, "&#39;")), -1 != W.indexOf("\x00") && (W = W.replace(lb, "&#0;")));
	ak = W;
	Zj = ak;
	var bk = {},
		ck = (bk.google_ad_modifications = !0, bk.google_analytics_domain_name = !0, bk.google_analytics_uacct = !0, bk.google_pause_ad_requests = !0, bk);

	function dk(a) {
		switch(a) {
			case "":
			case "Test":
			case "Real":
				return !0;
			default:
				return !1
		}
	}

	function ek(a) {
		this.c = F;
		this.b = void 0 === a ? !1 : a;
		this.a = new cc
	}

	function fk(a) {
		var b = a.a.get("__gads", "");
		return a.b && !dk(b) ? "Real" : b
	}
	ek.prototype.write = function(a) {
		var b = A(a, 1);
		if(this.b) {
			if(!dk(this.a.get("__gads", ""))) return;
			dk(b) || (b = "Real")
		}
		this.a.set("__gads", b, {
			Oa: A(a, 2) - this.c.Date.now() / 1E3,
			path: A(a, 3),
			domain: A(a, 4),
			Wa: !1
		})
	};
	var gk = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		hk = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

	function ik(a) {
		return gk.test(a) && !hk.test(a)
	}
	var jk = r;

	function kk(a) {
		a = "https://adservice" + (a + "/adsid/integrator.js");
		var b = ["domain=" + encodeURIComponent(r.location.hostname)];
		X[3] >= +new Date && b.push("adsid=" + encodeURIComponent(X[1]));
		return a + "?" + b.join("&")
	}
	var X, Y;

	function lk() {
		jk = r;
		X = jk.googleToken = jk.googleToken || {};
		var a = +new Date;
		X[1] && X[3] > a && 0 < X[2] || (X[1] = "", X[2] = -1, X[3] = -1, X[4] = "", X[6] = "");
		Y = jk.googleIMState = jk.googleIMState || {};
		ik(Y[1]) || (Y[1] = ".google.com");
		Array.isArray(Y[5]) || (Y[5] = []);
		"boolean" !== typeof Y[6] && (Y[6] = !1);
		Array.isArray(Y[7]) || (Y[7] = []);
		"number" !== typeof Y[8] && (Y[8] = 0)
	}
	var mk = {
		ka: function() {
			return 0 < Y[8]
		},
		Ta: function() {
			Y[8]++
		},
		Ua: function() {
			0 < Y[8] && Y[8]--
		},
		Va: function() {
			Y[8] = 0
		},
		eb: function() {
			return !1
		},
		Ka: function() {
			return Y[5]
		},
		Ia: function(a) {
			try {
				a()
			} catch(b) {
				r.setTimeout(function() {
					throw b;
				}, 0)
			}
		},
		Sa: function() {
			if(!mk.ka()) {
				var a = r.document,
					b = function(e) {
						e = kk(e);
						a: {
							try {
								var f = qa();
								break a
							} catch(g) {}
							f = void 0
						}
						Jh(a, e, f);
						f = a.createElement("script");
						f.type = "text/javascript";
						f.onerror = function() {
							return r.processGoogleToken({}, 2)
						};
						e = gc(e);
						f.src = db(e);
						Bb(f);
						try {
							(a.head ||
								a.body || a.documentElement).appendChild(f), mk.Ta()
						} catch(g) {}
					},
					c = Y[1];
				b(c);
				".google.com" != c && b(".google.com");
				b = {};
				var d = (b.newToken = "FBT", b);
				r.setTimeout(function() {
					return r.processGoogleToken(d, 1)
				}, 1E3)
			}
		}
	};

	function nk() {
		r.processGoogleToken = r.processGoogleToken || function(a, b) {
			var c = a;
			c = void 0 === c ? {} : c;
			b = void 0 === b ? 0 : b;
			a = c.newToken || "";
			var d = "NT" == a,
				e = parseInt(c.freshLifetimeSecs || "", 10),
				f = parseInt(c.validLifetimeSecs || "", 10),
				g = c["1p_jar"] || "";
			c = c.pucrd || "";
			lk();
			1 == b ? mk.Va() : mk.Ua();
			var h = jk.googleToken = jk.googleToken || {},
				k = 0 == b && a && "string" === typeof a && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
			d = d && !mk.ka() && (!(X[3] >= +new Date) || "NT" == X[1]);
			var m = !(X[3] >= +new Date) &&
				0 != b;
			if(k || d || m) d = +new Date, e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && be("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + b, null), h[5] = b, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = c, lk();
			if(k || !mk.ka()) {
				b = mk.Ka();
				for(a = 0; a < b.length; a++) mk.Ia(b[a]);
				b.length = 0
			}
		};
		lk();
		X[3] >= +new Date && X[2] >= +new Date || mk.Sa()
	};
	var ok = Gb("script");

	function pk() {
		F.google_sa_impl && !F.document.getElementById("google_shimpl") && (F.google_sa_queue = null, F.google_sl_win = null, F.google_sa_impl = null);
		if(!F.google_sa_queue) {
			F.google_sa_queue = [];
			F.google_sl_win = F;
			F.google_process_slots = function() {
				return qk(F)
			};
			var a = rk();
			Ec(F.Promise) && Ec(F.Symbol) ? oc(F.document, a).id = "google_shimpl" : (a = ec(document, "IFRAME"), a.id = "google_shimpl", a.style.display = "none", F.document.documentElement.appendChild(a), Wi(F, "google_shimpl", "<!doctype html><html><body><" + (ok + ">google_sl_win=window.parent;google_async_iframe_id='google_shimpl';</") +
				(ok + ">") + sk() + "</body></html>"), a.contentWindow.document.close())
		}
	}
	var qk = Ff(215, function(a) {
		var b = a.google_sa_queue,
			c = b.shift();
		a.google_sa_impl || Gf("shimpl", {
			t: "no_fn"
		});
		"function" == xa(c) && Ef(216, c);
		b.length && a.setTimeout(function() {
			return qk(a)
		}, 0)
	});

	function tk(a, b, c) {
		a.google_sa_queue = a.google_sa_queue || [];
		a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
	}

	function sk() {
		var a = rk();
		return "<" + ok + ' src="' + a + '"></' + ok + ">"
	}

	function rk() {
		var a = "/show_ads_impl.js";
		a = void 0 === a ? "/show_ads_impl.js" : a;
		return Sf(me(), ["/pagead/js/", Sc(), "/r20190131", a, ""].join(""), "https")
	}

	function uk(a, b, c, d) {
		return function() {
			var e = !1;
			d && Tj().al(3E4);
			try {
				Wi(a, b, c), e = !0
			} catch(g) {
				var f = Og().google_jobrunner;
				Sj(f) && f.rl()
			}
			e && (e = Yj("google_async_rrc", c), (new Xj(a)).set(b, uk(a, b, e, !1)))
		}
	}

	function vk(a) {
		if(!Xi) a: {
			for(var b = [r.top], c = [], d = 0, e; e = b[d++];) {
				c.push(e);
				try {
					if(e.frames)
						for(var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
				} catch(k) {}
			}
			for(b = 0; b < c.length; b++) try {
				var h = c[b].frames.google_esf;
				if(h) {
					Xi = h;
					break a
				}
			} catch(k) {}
			Xi = null
		}
		if(!Xi) {
			if(/[^a-z0-9-]/.test(a)) return null;
			c = ec(document, "IFRAME");
			c.id = "google_esf";
			c.name = "google_esf";
			h = Rf(Rc("", "googleads.g.doubleclick.net"), ["/pagead/html/", Sc(), "/r20190131/zrt_lookup.html#",
				encodeURIComponent("")
			].join(""));
			c.src = h;
			c.style.display = "none";
			c.setAttribute("data-ad-client", Lh(a));
			return c
		}
		return null
	}

	function wk(a, b, c) {
		xk(a, b, c, function(d, e, f) {
			d = d.document;
			for(var g = e.id, h = 0; !g || d.getElementById(g + "_anchor");) g = "aswift_" + h++;
			e.id = g;
			e.name = g;
			g = Number(f.google_ad_width || 0);
			h = Number(f.google_ad_height || 0);
			var k = f.ds || "";
			k && (k += k.endsWith(";") ? "" : ";");
			var m = "";
			if(!f.google_enable_single_iframe) {
				m = ["<iframe"];
				for(n in e) e.hasOwnProperty(n) && m.push(n + "=" + e[n]);
				m.push('style="left:0;position:absolute;top:0;border:0px;width:' + (g + "px;height:" + (h + 'px;"')));
				m.push("></iframe>");
				m = m.join(" ")
			}
			var n = e.id;
			var q = "";
			q = void 0 === q ? "" : q;
			g = "border:none;height:" + h + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (g + "px;background-color:transparent;");
			n = ['<ins id="' + (n + '_expand"'), ' style="display:inline-table;' + g + (void 0 === k ? "" : k) + '"', q ? ' data-ad-slot="' + q + '">' : ">", '<ins id="' + (n + '_anchor" style="display:block;') + g + '">', m, "</ins></ins>"].join("");
			16 == f.google_reactive_ad_format ? (f = d.createElement("div"), f.innerHTML = n, c.appendChild(f.firstChild)) : c.innerHTML = n;
			return e.id
		})
	}

	function xk(a, b, c, d) {
		var e = b.google_ad_width,
			f = b.google_ad_height;
		if(!Hb && !Ib || J(325)) b.google_enable_single_iframe = !0;
		var g = {};
		null != e && (g.width = e && '"' + e + '"');
		null != f && (g.height = f && '"' + f + '"');
		g.frameborder = '"0"';
		g.marginwidth = '"0"';
		g.marginheight = '"0"';
		g.vspace = '"0"';
		g.hspace = '"0"';
		g.allowtransparency = '"true"';
		g.scrolling = '"no"';
		g.allowfullscreen = '"true"';
		g.onload = '"' + Zj + '"';
		d = d(a, g, b);
		yk(a, c, b);
		(c = vk(b.google_ad_client)) && a.document.documentElement.appendChild(c);
		c = Ia;
		e = (new Date).getTime();
		b.google_lrv =
			Sc();
		b.google_async_iframe_id = d;
		b.google_unique_id = ge(a);
		b.google_start_time = c;
		b.google_bpp = e > c ? e - c : 1;
		b.google_async_rrc = 0;
		a.google_sv_map = a.google_sv_map || {};
		a.google_sv_map[d] = b;
		a.google_t12n_vars = mi;
		if(b.google_enable_single_iframe) {
			var h = {
				pubWin: a,
				iframeWin: null,
				vars: b
			};
			tk(a, function() {
				a.google_sa_impl(h)
			}, a.document.getElementById(d + "_anchor") ? Uj : Vj)
		} else tk(a, uk(a, d, ["<!doctype html><html><body>", "<" + ok + ">", "google_sl_win=window.parent;google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' +
			d + '";', "</" + ok + ">", "<" + ok + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent, vars: window.parent['google_sv_map']['" + (d + "']});</") + ok + ">", "</body></html>"
		].join(""), !0), a.document.getElementById(d) ? Uj : Vj)
	}

	function yk(a, b, c) {
		var d = c.google_ad_output,
			e = c.google_ad_format,
			f = c.google_ad_width || 0,
			g = c.google_ad_height || 0;
		e || "html" != d && null != d || (e = f + "x" + g);
		d = !c.google_ad_slot || c.google_override_format || !ac[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
		e && d ? e = e.toLowerCase() : e = "";
		c.google_ad_format = e;
		if("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
			e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
				c.google_orig_ad_height || c.google_ad_height
			];
			d = [];
			f = 0;
			for(g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
			(d = d.join()) && e.push(d);
			c.google_ad_unit_key = wc(e.join(":")).toString();
			var h = void 0 === h ? !1 : h;
			e = [];
			for(d = 0; b && 25 > d; ++d) {
				f = "";
				void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
				a: {
					if(b && b.nodeName && b.parentElement) {
						g = b.nodeName.toString().toLowerCase();
						for(var k = b.parentElement.childNodes, m = 0, n = 0; n < k.length; ++n) {
							var q = k[n];
							if(q.nodeName && q.nodeName.toString().toLowerCase() ===
								g) {
								if(b === q) {
									g = "." + m;
									break a
								}++m
							}
						}
					}
					g = ""
				}
				e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
				b = b.parentElement
			}
			h = e.join() + ":";
			b = [];
			if(a) try {
				var w = a.parent;
				for(e = 0; w && w !== a && 25 > e; ++e) {
					var u = w.frames;
					for(d = 0; d < u.length; ++d)
						if(a === u[d]) {
							b.push(d);
							break
						}
					a = w;
					w = a.parent
				}
			} catch(E) {}
			c.google_ad_dom_fingerprint = wc(h + b.join()).toString()
		}
	}

	function zk() {
		var a = pe(F, bi.v) || pe(F, $h.v) || pe(F, $h.oa);
		wf(a)
	}
	var Ak = !Vc;

	function Bk(a) {
		var b = a.value,
			c = "https://partner.googleadservices.com/gampad/cookie.js?domain=" + a.domain + "&callback=_gfp_s_&client=" + a.ab;
		a.$a && (c += "&test=1");
		b && (c += "&cookie=" + encodeURIComponent(b) + "&crv=" + Number("Test" !== b));
		return c
	}

	function Ck(a) {
		var b = void 0 === b ? Bk : b;
		var c = F._gfp_a_;
		if("boolean" !== typeof c) throw Error("Illegal value of _gfp_a_: " + c);
		if(c) {
			c = F._gfp_p_;
			if("boolean" !== typeof c) throw Error("Illegal value of _gfp_p_: " + c);
			if(!c) {
				if(J(225)) {
					c = J(226);
					var d = new ek(c);
					navigator.cookieEnabled && (F._gfp_s_ = Ff(629, function(e) {
						delete F._gfp_s_;
						if(!e) throw Error("Invalid JSONP response");
						if(e = e._cookies_) {
							var f = e[0];
							if(!f) throw Error("Invalid JSONP response");
							e = f._value_;
							var g = f._expires_,
								h = f._path_;
							f = f._domain_;
							if("string" !==
								typeof e || "number" !== typeof g || "string" !== typeof h || "string" !== typeof f) throw Error("Invalid JSONP response");
							d.write(Zb(Yb(Xb(Wb(e), g), h), f))
						}
					}), oc(F.document, b({
						domain: F.location.hostname,
						ab: a,
						$a: c,
						value: fk(d)
					})))
				}
				F._gfp_p_ = !0
			}
		}
	};

	function Dk(a, b) {
		a = a.attributes;
		for(var c = a.length, d = 0; d < c; d++) {
			var e = a[d];
			if(/data-/.test(e.name)) {
				var f = fb(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
				if(!b.hasOwnProperty(f)) {
					e = e.value;
					var g = {};
					g = (g.google_reactive_ad_format = Pc, g.google_allow_expandable_ads = Dc, g);
					e = g.hasOwnProperty(f) ? g[f](e, null) : e;
					null !== e && (b[f] = e)
				}
			}
		}
	}

	function Ek(a) {
		if(a = $d(a)) switch(a.data && a.data.autoFormat) {
			case "rspv":
				return 13;
			case "mcrspv":
				return 15;
			default:
				return 14
		} else return 12
	}

	function Fk(a, b, c) {
		Dk(a, b);
		if(c.document && c.document.body && !Kj(c, b) && !b.google_reactive_ad_format) {
			var d = parseInt(a.style.width, 10),
				e = Wj(a, c);
			if(0 < e && d > e) {
				var f = parseInt(a.style.height, 10);
				d = !!ac[d + "x" + f];
				var g = e;
				if(d) {
					var h = bc(e, f);
					if(h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
					else throw new O("No slot size for availableWidth=" + e);
				}
				b.google_ad_resize = !0;
				b.google_ad_width = g;
				d || (b.google_ad_format = null, b.google_override_format = !0);
				e = g;
				a.style.width = e + "px";
				f = yj(e, "auto", c, a, b);
				g = e;
				f.a.ba(c, b, a);
				aj(f,
					g, b);
				f = f.a;
				b.google_responsive_formats = null;
				f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
			}
		}
		d = a.offsetWidth || R(a, c, "width", G) || b.google_ad_width || 0;
		e = Fa(yj, d, "auto", c, a, b, !1, !0);
		f = oe(c) || c;
		g = b.google_ad_client;
		f = f.location && "#ftptohbh" === f.location.hash ? 2 : Dh(f.location, "google_responsive_slot_debug") || Dh(f.location, "google_responsive_slot_preview") || J(217) ? 1 : J(218) ? 2 : Mh(f, 1, g) ? 1 : 0;
		if(g = 0 !== f) b: if(!(488 > P(c) || J(216)) || b.google_reactive_ad_format || Kj(c, b) || mg(a,
					b)) g = !1;
			else {
				for(g = a; g; g = g.parentElement) {
					h = pc(g, c);
					if(!h) {
						b.gfwrnwer = 18;
						g = !1;
						break b
					}
					if(!Pa(["static", "relative"], h.position)) {
						b.gfwrnwer = 17;
						g = !1;
						break b
					}
				}
				if(!J(216) && (g = rg(c, a, d, .3, b), !0 !== g)) {
					b.gfwrnwer = g;
					g = !1;
					break b
				}
				g = ne(c) == c ? !0 : !1
			}
		g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === f ? (f = {}, aj(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
		if(e = Kj(c, b)) Mj(e, a, b,
			c, d);
		else {
			if(mg(a, b)) {
				if(d = pc(a, c)) a.style.width = d.width, a.style.height = d.height, lg(d, b);
				b.google_ad_width || (b.google_ad_width = a.offsetWidth);
				b.google_ad_height || (b.google_ad_height = a.offsetHeight);
				b.google_loader_features_used = 256;
				b.google_responsive_auto_format = Ek(c)
			} else lg(a.style, b);
			c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Mj(10, a, b, c, !1) : pe(c, Zh.D) && 12 == b.google_responsive_auto_format && (a = sg(a.offsetWidth || parseInt(a.style.width,
				10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
		}
	};

	function Gk(a) {
		this.b = a;
		this.a = null
	}
	p(Gk, Yc);

	function Hk(a) {
		this.b = a;
		this.a = null;
		this.a || (this.b.googlefc ? this.a = this.b : this.a = Fc(this.b, "googlefcPresent"))
	}
	p(Hk, Yc);

	function Ik(a) {
		this.b = a;
		this.a = null
	}
	p(Ik, Yc);

	function Jk(a, b, c) {
		var d = window;
		return function() {
			var e = hf(),
				f = 3;
			try {
				var g = b.apply(this, arguments)
			} catch(h) {
				f = 13;
				if(c) return c(a, h), g;
				throw h;
			} finally {
				d.google_measure_js_timing && e && (e = {
					label: a.toString(),
					value: e,
					duration: (hf() || 0) - e,
					type: f
				}, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
			}
			return g
		}
	}

	function Kk(a, b) {
		return Jk(a, b, function(c, d) {
			(new uf).J(c, d)
		})
	};

	function Z(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
	}

	function Lk() {
		var a = this;
		this.I = this.aa = this.o = this.j = this.f = 0;
		this.K = !1;
		this.A = this.g = this.c = 0;
		this.L = .1 > Math.random();
		this.P = r === r.top;
		var b = document.querySelector("[data-google-query-id]");
		if(this.a = b ? b.getAttribute("data-google-query-id") : null) b = null;
		else {
			if("number" !== typeof r.goog_pvsid) try {
				Object.defineProperty(r, "goog_pvsid", {
					value: Math.floor(Math.random() * Math.pow(2, 52))
				})
			} catch(c) {}
			b = Number(r.goog_pvsid) || -1
		}
		this.U = b;
		this.L && (b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics" +
			(this.a ? "&qqid=" + encodeURIComponent(this.a) : Z("pvsid", this.U)), b += Z("test", 1), b += "&top=" + (this.P ? 1 : 0), Mk(b));
		this.T = new PerformanceObserver(Kk(640, function(c) {
			c = fa(c.getEntries());
			for(var d = c.next(); !d.done; d = c.next()) {
				d = d.value;
				if("layout-shift" === d.entryType) {
					var e = d;
					e.hadRecentInput || J(241) && !(.01 < e.value) || (a.f += Number(e.value), Number(e.value) > a.j && (a.j = Number(e.value)), a.o += 1)
				}
				"largest-contentful-paint" === d.entryType && (e = d, a.aa = Math.floor(e.renderTime || e.loadTime));
				"first-input" === d.entryType &&
					(e = d, a.I = Number((e.processingStart - e.startTime).toFixed(3)), a.K = !0);
				"longtask" === d.entryType && (a.c += d.duration, d.duration > a.g && (a.g = d.duration), a.A += 1)
			}
		}));
		this.V = !1;
		this.b = Kk(641, this.b.bind(this))
	}
	p(Lk, Yc);

	function Nk() {
		var a = new Lk;
		a.T.observe({
			entryTypes: ["layout-shift", "largest-contentful-paint", "first-input", "longtask"],
			buffered: !J(240)
		});
		document.addEventListener("unload", a.b);
		document.addEventListener("visibilitychange", a.b)
	}
	Lk.prototype.b = function() {
		var a = document;
		if(2 === ({
				visible: 1,
				hidden: 2,
				prerender: 3,
				preview: 4,
				unloaded: 5
			}[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0) && !this.V) {
			this.V = !0;
			this.T.takeRecords();
			a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift && (a += "&cls=" + this.f.toFixed(3), a += "&mls=" + this.j.toFixed(3), a += Z("nls", this.o));
			window.LargestContentfulPaint && (a += Z("lcp", this.aa));
			window.PerformanceEventTiming && this.K && (a += Z("fid", this.I));
			window.PerformanceLongTaskTiming &&
				(a += Z("cbt", this.c), a += Z("mbt", this.g), a += Z("nlt", this.A));
			for(var b = 0, c = fa(document.getElementsByTagName("iframe")), d = c.next(); !d.done; d = c.next())
				if(d = d.value, d.id.includes("google_ads_iframe_") || d.id.includes("aswift")) b += 1;
			a += Z("nif", b);
			a += Z("ifi", fe(window));
			b = Th.h().a();
			a += "&eid=" + encodeURIComponent(b.join());
			this.L && (a += Z("test", 1));
			a += "&top=" + (this.P ? 1 : 0);
			a += this.a ? "&qqid=" + encodeURIComponent(this.a) : Z("pvsid", this.U);
			Mk(a)
		}
	};

	function Mk(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		})
	};
	var Ok = ["https://adservice.google.com"];

	function Pk(a) {
		this.c = Ok;
		this.a = 2;
		this.b = a
	}
	p(Pk, Yc);

	function Qk(a) {
		!document.hasTrustToken || 3 <= a.a || (a.a = 3, Ja(a.c, function(b) {
			window.fetch(b + "/tt/r", {
				keepalive: !0,
				redirect: "follow",
				method: "get",
				fb: {
					type: "srr-token-redemption",
					issuer: b,
					refreshPolicy: "none"
				}
			}).then(function(c) {
				if(!c.ok) throw Error(c.status + ": Network response was not ok!");
				a.a = 5;
				a.b({
					issuer: b,
					state: 5
				})
			}).catch(function(c) {
				c && "NoModificationAllowedError" === c.name ? (a.a = 5, a.b({
					issuer: b,
					state: 5
				})) : 4 > a.a && a.b({
					issuer: null,
					state: 4
				})
			})
		}))
	};
	var Rk = null;

	function Sk(a) {
		return ke.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
	}

	function Tk(a, b) {
		a.setAttribute("data-adsbygoogle-status", "done");
		Uk(a, b)
	}

	function Uk(a, b) {
		var c = window,
			d = je();
		d.google_spfd || (d.google_spfd = Fk);
		(d = b.google_reactive_ads_config) || Fk(a, b, c);
		if(!Vk(a, b, c)) {
			d || (c.google_lpabyc = hi(c, a));
			if(d) {
				d = d.page_level_pubvars || {};
				if(K(F).page_contains_reactive_tag && !K(F).allow_second_reactive_tag) {
					if(d.pltais) {
						re(!1);
						return
					}
					throw new O("Only one 'enable_page_level_ads' allowed per page.");
				}
				K(F).page_contains_reactive_tag = !0;
				re(7 === d.google_pgb_reactive)
			} else ee(c);
			ce(ck, function(e, f) {
				b[f] = b[f] || c[f]
			});
			b.google_loader_used = "aa";
			b.google_reactive_tag_first =
				1 === (K(F).first_tag_on_page || 0);
			Ef(164, function() {
				wk(c, b, a)
			})
		}
	}

	function Vk(a, b, c) {
		var d = b.google_reactive_ads_config;
		if(d) {
			var e = d.page_level_pubvars;
			var f = (ya(e) ? e : {}).google_tag_origin
		}
		e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
		var g = b.google_ad_slot;
		var h = f || b.google_tag_origin;
		f = K(c);
		se(f.ad_whitelist || [], g, h) ? g = null : (h = f.space_collapsing || "none", g = (g = se(f.ad_blacklist || [], g)) ? {
			pa: !0,
			Ea: g.space_collapsing || h
		} : f.remove_ads_by_default ? {
			pa: !0,
			Ea: h,
			ha: f.ablation_viewport_offset
		} : null);
		if(g && g.pa && "on" != b.google_adtest &&
			!e && (e = Eg(a, c), !g.ha || g.ha && (e || 0) >= g.ha)) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == g.Ea && (null !== Cc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Cc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
		if((e = pc(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment &&
			a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
		a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
		return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (r.console && r.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
	}

	function Wk(a) {
		var b = document.getElementsByTagName("INS");
		for(var c = 0, d = b[c]; c < b.length; d = b[++c]) {
			var e = d;
			if(Sk(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
		}
		return null
	}

	function Xk(a) {
		if(a && a.shift) try {
			for(var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;) Yk(b), --c
		} catch(d) {
			throw window.setTimeout(Zk, 0), d;
		}
	}

	function $k() {
		var a = ec(document, "INS");
		a.className = "adsbygoogle";
		a.className += " adsbygoogle-noablate";
		Hc(a);
		return a
	}

	function al(a) {
		var b = {};
		ce(gg, function(e, f) {
			!1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f])
		});
		ya(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
		var c = $k();
		$b.body.appendChild(c);
		var d = {};
		d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
		d.google_pause_ad_requests = K(F).pause_ad_requests || !1;
		Tk(c, d)
	}

	function bl(a) {
		function b() {
			return al(a)
		}
		var c = void 0 === c ? $b : c;
		var d = oe(window);
		if(!d) throw new O("Page-level tag does not work inside iframes.");
		jg(d).wasPlaTagProcessed = !0;
		if(c.body || "complete" == c.readyState || "interactive" == c.readyState) b();
		else {
			var e = Sa(Ff(191, b));
			dc(c, "DOMContentLoaded", e);
			(new r.MutationObserver(function(f, g) {
				c.body && (e(), g.disconnect())
			})).observe(c, {
				childList: !0,
				subtree: !0
			})
		}
	}

	function Yk(a) {
		var b = {};
		Ef(165, function() {
			cl(a, b)
		}, function(c) {
			c.client = c.client || b.google_ad_client || a.google_ad_client;
			c.slotname = c.slotname || b.google_ad_slot;
			c.tag_origin = c.tag_origin || b.google_tag_origin
		})
	}

	function dl(a) {
		delete a.google_checked_head;
		uc(a, function(b, c) {
			ue[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), r.console.warn("AdSense head tag doesn't support " + b + " attribute."))
		})
	}

	function el() {
		var a = F.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
		if(a) {
			a.setAttribute("data-checked-head", "true");
			var b = K(window);
			if(b.head_tag_slot_vars) throw new O("Only one AdSense head tag supported per page. The second tag is ignored.");
			var c = {};
			Dk(a, c);
			dl(c);
			a = {};
			for(var d in c) a[d] = c[d];
			b.head_tag_slot_vars = a;
			d = {};
			d = (d.google_ad_client = c.google_ad_client, d.enable_page_level_ads = c, d);
			F.adsbygoogle || (F.adsbygoogle = []);
			a = F.adsbygoogle;
			a.loaded ? a.push(d) : a.splice(0, 0, d);
			"on" === c.google_adtest && J(344) && fl(b.head_tag_slot_vars)
		}
	}

	function cl(a, b) {
		if(null == a) throw new O("push() called with no parameters.");
		if("object" === typeof a && null != a && "string" === typeof a.type) {
			null != Rk && Rk.handleAdBreak(a);
			var c = "err";
			try {
				c = JSON.stringify(a)
			} catch(e) {}
			Gf("slotcarlike", {
				r: c
			});
			if(J(344)) return
		}
		Ia = (new Date).getTime();
		pk();
		a: {
			if(void 0 != a.enable_page_level_ads) {
				if("string" === typeof a.google_ad_client) {
					c = !0;
					break a
				}
				throw new O("'google_ad_client' is missing from the tag config.");
			}
			c = !1
		}
		if(c) gl(a, b);
		else if((c = a.params) && ce(c, function(e, f) {
				b[f] =
					e
			}), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
		else {
			a = hl(a.element);
			Dk(a, b);
			c = K(r).head_tag_slot_vars || {};
			uc(c, function(e, f) {
				b.hasOwnProperty(f) || (b[f] = e)
			});
			if(a.hasAttribute("data-require-head") && !K(r).head_tag_slot_vars) throw new O("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
			if(!b.google_ad_client) throw new O("Ad client is missing from the slot.");
			b.google_apsail = Qh(b.google_ad_client);
			var d = (c = 0 === (K(F).first_tag_on_page || 0) && fi(b)) && gi(c);
			c && !d && (gl(c), K(F).skip_next_reactive_tag = !0);
			0 === (K(F).first_tag_on_page || 0) && (K(F).first_tag_on_page = 2);
			"_gfp_p_" in F || (F._gfp_p_ = !1);
			Ck(b.google_ad_client);
			b.google_pause_ad_requests = K(F).pause_ad_requests || !1;
			Tk(a, b);
			c && d && il(c)
		}
	}

	function il(a) {
		Mc(function() {
			jg(r).wasPlaTagProcessed || r.adsbygoogle && r.adsbygoogle.push(a)
		})
	}

	function gl(a, b) {
		if(K(F).skip_next_reactive_tag) K(F).skip_next_reactive_tag = !1;
		else {
			0 === (K(F).first_tag_on_page || 0) && (K(F).first_tag_on_page = 1);
			b && a.tag_partner && (qe(r, a.tag_partner), qe(b, a.tag_partner));
			a: if(!K(F).ama_ran_on_page) {
				if(J(316)) var c = null;
				else try {
					c = r.localStorage.getItem("google_ama_config")
				} catch(q) {
					c = null
				}
				try {
					var d = c ? new He(c ? JSON.parse(c) : null) : null
				} catch(q) {
					d = null
				}
				if(b = d)
					if(c = C(b, Je, 3), !c || A(c, 1) <= Date.now()) try {
						r.localStorage.removeItem("google_ama_config")
					} catch(q) {
						Of(r, {
							lserr: 1
						})
					} else {
						if(gi(a) &&
							(c = Qe(D(b, Ke, 7)), !c || !Ob(c, 8))) break a;
						K(F).ama_ran_on_page = !0;
						(d = C(b, Ne, 13)) && 1 === A(d, 1) && (c = 0, (d = C(d, Oe, 6)) && A(d, 3) && (c = A(d, 3) || 0), d = K(r), d.remove_ads_by_default = !0, d.space_collapsing = "slot", d.ablation_viewport_offset = c);
						Vf(3, [b.a]);
						c = a.google_ad_client;
						d = Jf(Lf, new If(null, Pf(ya(a.enable_page_level_ads) ? a.enable_page_level_ads : {})));
						try {
							var e = Qe(D(b, Ke, 7)),
								f;
							if(f = e) b: {
								var g = A(e, 2);
								if(g)
									for(var h = 0; h < g.length; h++)
										if(1 == g[h]) {
											f = !0;
											break b
										}
								f = !1
							}
							if(f) {
								if(A(e, 4)) {
									f = {};
									var k = new If(null, (f.google_package =
										A(e, 4), f));
									d = Jf(d, k)
								}
								var m = new nh(c, b, e, d),
									n = new th;
								(new yh(m, n)).start();
								n.b.then(Fa(Ah, r), Fa(Bh, r))
							}
						} catch(q) {
							Of(r, {
								atf: -1
							})
						}
					}
			}
			bl(a)
		}
	}

	function hl(a) {
		if(a) {
			if(!Sk(a) && (a.id ? a = Wk(a.id) : a = null, !a)) throw new O("'element' has already been filled.");
			if(!("innerHTML" in a)) throw new O("'element' is not a good DOM element.");
		} else if(a = Wk(), !a) throw new O("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
		return a
	}

	function jl() {
		var a = new Ik(F),
			b = new Gk(F),
			c = new Hk(F),
			d = F.__cmp ? 1 : 0,
			e;
		(e = "function" === typeof a.b.__tcfapi) || (a.a ? e = a.a : (a.a = Fc(a.b, "__tcfapiLocator"), e = a.a), e = null != e);
		(a = "function" == xa(b.b.__uspapi)) || (b.a ? b = b.a : (b.a = Fc(b.b, "__uspapiLocator"), b = b.a), a = null != b);
		Gf("cmpMet", {
			tcfv1: d,
			tcfv2: e ? 1 : 0,
			usp: a ? 1 : 0,
			fc: c.a ? 1 : 0,
			ptt: 9
		}, Zd() || 1)
	}

	function Zk() {
		Bf();
		vf.Ba(Hf);
		Ef(166, kl)
	}

	function kl() {
		var a = ae($d(F)) || F;
		Si(a);
		if(!x("Trident") && !x("MSIE") || 0 <= nb(zb(), 11)) {
			zk();
			J(345) || (lk(), ik(".google.cn") && (Y[1] = ".google.cn"), nk());
			J(312) && Qk(new Pk(function(e) {
				F.google_trust_token_redemption_status = e
			}));
			F.PerformanceObserver && J(203) && !window.google_plmetrics && (Nk(), window.google_plmetrics = !0);
			if(a = oe(r)) a = jg(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = new Ch);
			el();
			a = window.adsbygoogle;
			if(!a || !a.loaded) {
				(J(343) || Zd()) && jl();
				var b = {
					push: Yk,
					loaded: !0
				};
				try {
					Object.defineProperty(b, "requestNonPersonalizedAds", {
						set: ll
					}), Object.defineProperty(b, "pauseAdRequests", {
						set: ml
					}), Object.defineProperty(b, "cookieOptions", {
						set: nl
					}), Object.defineProperty(b, "onload", {
						set: ol
					})
				} catch(e) {}
				if(a)
					for(var c = fa(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== a[d] && (b[d] = a[d]);
				"_gfp_a_" in window || (window._gfp_a_ = Ak);
				Xk(a);
				window.adsbygoogle = b;
				a && (b.onload = a.onload)
			}
		}
	}

	function ll(a) {
		if(+a) {
			if((a = nc()) && a.frames && !a.frames.GoogleSetNPA) try {
				var b = a.document,
					c = new fc(b),
					d = b.body || b.head && b.head.parentElement;
				if(d) {
					var e = ec(c.a, "IFRAME");
					e.name = "GoogleSetNPA";
					e.id = "GoogleSetNPA";
					e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
					d.appendChild(e)
				}
			} catch(f) {}
		} else(b = nc().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b)
	}

	function ml(a) {
		+a ? K(F).pause_ad_requests = !0 : (K(F).pause_ad_requests = !1, a = function() {
			if(!K(F).pause_ad_requests) {
				var b = je(),
					c = je();
				try {
					if($b.createEvent) {
						var d = $b.createEvent("CustomEvent");
						d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
						b.dispatchEvent(d)
					} else if(de(c.CustomEvent)) {
						var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
							bubbles: !1,
							cancelable: !1,
							detail: ""
						});
						b.dispatchEvent(e)
					} else if(de(c.Event)) {
						var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
							bubbles: !1,
							cancelable: !1
						});
						b.dispatchEvent(f)
					}
				} catch(g) {}
			}
		}, r.setTimeout(a, 0), r.setTimeout(a, 1E3))
	}

	function nl(a) {
		switch(a) {
			case 0:
				a = !0;
				break;
			case 1:
				a = !1;
				break;
			case 2:
				a = Ak;
				break;
			default:
				throw Error("Illegal value of cookieOptions: " + a);
		}
		F._gfp_a_ = a;
		"_gfp_p_" in F && (a = F.google_sv_map, Ck(a[vc(a)].google_ad_client))
	}

	function ol(a) {
		de(a) && window.setTimeout(a, 0)
	}

	function fl(a) {
		var b = me();
		b = Sf(b, "/pagead/js/" + Sc() + "/r20190131/slotcar_library.js");
		Ih(b).then(function(c) {
			null == Rk && (c.init(a), Rk = c)
		})
	};
	Zk();
}).call(this);
jQuery.extend({
    handleError: function( s, xhr, status, e )      {
        // If a local callback was specified, fire it
        if ( s.error ) {
            s.error.call( s.context || s, xhr, status, e );
        }

        // Fire the global callback
        if ( s.global ) {
            (s.context ? jQuery(s.context) : jQuery.event).trigger( "ajaxError", [xhr, s, e] );
        }
    },
    createUploadIframe: function(id, uri) {

        var frameId = 'jUploadFrame' + id;

        if(window.ActiveXObject) {
            if(jQuery.browser.version=="9.0")
            {
                io = document.createElement('iframe');
                io.id = frameId;
                io.name = frameId;
            }
            else if(jQuery.browser.version=="6.0" || jQuery.browser.version=="7.0" || jQuery.browser.version=="8.0")
            {

                var io = document.createElement('<iframe id="' + frameId + '" name="' + frameId + '" />');
                if(typeof uri== 'boolean'){
                    io.src = 'javascript:false';
                }
                else if(typeof uri== 'string'){
                    io.src = uri;
                }
            }
        } else {
            var io = document.createElement('iframe');
            io.id = frameId;
            io.name = frameId;
        }
        io.style.position = 'absolute';
        io.style.top = '-1000px';
        io.style.left = '-1000px';

        document.body.appendChild(io);

        return io;
    },
    ajaxUpload:function(s,xml){
        //if((fromFiles.nodeType&&!((fileList=fromFiles.files)&&fileList[0].name)))

        var uid = new Date().getTime(),idIO='jUploadFrame'+uid,_this=this;
        var jIO=$('<iframe name="'+idIO+'" id="'+idIO+'" style="display:none">').appendTo('body');
        var jForm=$('<form action="'+s.url+'" target="'+idIO+'" method="post" enctype="multipart/form-data"></form>').appendTo('body');
        var oldElement = $('#'+s.fileElementId);
        var newElement = $(oldElement).clone(true);
        $(oldElement).attr('id', 'jUploadFile'+uid);
        $(oldElement).before(newElement);
        $(oldElement).appendTo(jForm);

        this.remove=function()
        {
            if(_this!==null)
            {
                jNewFile.before(jOldFile).remove();
                jIO.remove();jForm.remove();
                _this=null;
            }
        }
        this.onLoad=function(){

            var data=$(jIO[0].contentWindow.document.body).text();


            try{

                if(data!=undefined){
                    data = eval('(' + data + ')');
                    try {

                        if (s.success)
                            s.success(data, status);

                        // Fire the global callback
                        if(s.global)
                            jQuery.event.trigger("ajaxSuccess", [xml, s]);
                        if (s.complete)
                            s.complete(data, status);
                        xml = null;
                    } catch(e)
                    {

                        status = "error";
                        jQuery.handleError(s, xml, status, e);
                    }

                    // The request was completed
                    if(s.global)
                        jQuery.event.trigger( "ajaxComplete", [xml, s] );
                    // Handle the global AJAX counter
                    if (s.global && ! --jQuery.active )
                        jQuery.event.trigger("ajaxStop");

                    // Process result

                }
            }catch(ex){
                alert(ex.message);
            };
        }
        this.start=function(){jForm.submit();jIO.load(_this.onLoad);};
        return this;

    },
    createUploadForm: function(id, url,fileElementId, data)
    {
        //create form
        var formId = 'jUploadForm' + id;
        var fileId = 'jUploadFile' + id;
        var form = jQuery('<form  action="'+url+'" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
        if(data)
        {
            for(var i in data)
            {
                jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
            }
        }

        var oldElement = jQuery('#' + fileElementId);
        var newElement = jQuery(oldElement).clone();
        jQuery(oldElement).attr('id', fileId);
        jQuery(oldElement).before(newElement);
        jQuery(oldElement).appendTo(form);

        //set attributes
        jQuery(form).css('position', 'absolute');
        jQuery(form).css('top', '-1200px');
        jQuery(form).css('left', '-1200px');
        jQuery(form).appendTo('body');
        return form;
    },
    ajaxFileUpload: function(s) {
        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout
        // Create the request object
        var xml = {};
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        if(window.ActiveXObject){
            var upload =  new jQuery.ajaxUpload(s,xml);
            upload.start();

        }else{
            var id = new Date().getTime();
            var form = jQuery.createUploadForm(id,s.url, s.fileElementId, (typeof(s.data)=='undefined'?false:s.data));
            var io = jQuery.createUploadIframe(id, s.secureuri);
            var frameId = 'jUploadFrame' + id;
            var formId = 'jUploadForm' + id;
            // Watch for a new set of requests
            if ( s.global && ! jQuery.active++ )
            {
                jQuery.event.trigger( "ajaxStart" );
            }
            var requestDone = false;

            if ( s.global )
                jQuery.event.trigger("ajaxSend", [xml, s]);
            // Wait for a response to come back
            var uploadCallback = function(isTimeout)
            {
                var io = document.getElementById(frameId);

                try
                {
                    if(io.contentWindow)
                    {
                        xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
                        xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;

                    }else if(io.contentDocument)
                    {
                        xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
                        xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
                    }
                }catch(e)
                {
                    jQuery.handleError(s, xml, null, e);
                }
                if ( xml || isTimeout == "timeout")
                {
                    requestDone = true;
                    var status;
                    try {
                        status = isTimeout != "timeout" ? "success" : "error";
                        // Make sure that the request was successful or notmodified
                        if ( status != "error" )
                        {
                            // process the data (runs the xml through httpData regardless of callback)
                            var data = jQuery.uploadHttpData(xml, s.dataType);
                            // If a local callback was specified, fire it and pass it the data

                            if (s.success)
                                s.success(data, status);

                            // Fire the global callback
                            if(s.global)
                                jQuery.event.trigger("ajaxSuccess", [xml, s]);
                            if (s.complete)
                                s.complete(data, status);

                        } else
                            jQuery.handleError(s, xml, status);
                    } catch(e)
                    {
                        status = "error";
                        jQuery.handleError(s, xml, status, e);
                    }

                    // The request was completed
                    if(s.global)
                        jQuery.event.trigger( "ajaxComplete", [xml, s] );
                    // Handle the global AJAX counter
                    if (s.global && ! --jQuery.active )
                        jQuery.event.trigger("ajaxStop");

                    // Process result
                    jQuery(io).unbind();

                    setTimeout(function()
                    {   try
                    {
                        jQuery(io).remove();
                        jQuery(form).remove();

                    } catch(e)
                    {
                        jQuery.handleError(s, xml, null, e);
                    }

                    }, 100);

                    xml = null;

                }
            };
            // Timeout checker
            if (s.timeout>0)
            {
                setTimeout(function(){
                    // Check to see if the request is still happening
                    if( !requestDone ) uploadCallback("timeout");
                }, s.timeout);
            }

            try
            {

                var form = jQuery('#' + formId);
                jQuery(form).attr('action', s.url);
                jQuery(form).attr('method', 'POST');
                jQuery(form).attr('target', frameId);

                if(form.encoding)
                {
                    jQuery(form).attr('encoding', 'multipart/form-data');
                }
                else
                {
                    jQuery(form).attr('enctype', 'multipart/form-data');
                }


                jQuery(form).submit();

            } catch(e)
            {
                jQuery.handleError(s, xml, null, e);
            }

            jQuery('#'+ frameId).load(uploadCallback);
            return {abort: function () {}};

        }
    },

    uploadHttpData: function( r, type ) {

        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;
        // If the type is "script", eval it in global context
        if ( type == "script" )
            jQuery.globalEval( data );
        // Get the JavaScript object, if JSON is used.
        if ( type == "json" ){
            eval( "data = " + $(data).html() );
        }
        // evaluate scripts within html
        if ( type == "html" )
            jQuery("<div>").html(data).evalScripts();

        return data;
    }
})/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
(function (global, factory) {
    "use strict";
    if (typeof module === "object" && typeof module.exports === "object") {
        // CommonJS
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error("Geetest requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    "use strict";
    if (typeof window === 'undefined') {
        throw new Error('Geetest requires browser environment');
    }
    var document = window.document;
    var Math = window.Math;
    var head = document.getElementsByTagName("head")[0];

    function _Object(obj) {
        this._obj = obj;
    }

    _Object.prototype = {
        _each: function (process) {
            var _obj = this._obj;
            for (var k in _obj) {
                if (_obj.hasOwnProperty(k)) {
                    process(k, _obj[k]);
                }
            }
            return this;
        }
    };
    function Config(config) {
        var self = this;
        new _Object(config)._each(function (key, value) {
            self[key] = value;
        });
    }

    Config.prototype = {
        api_server: 'api.geetest.com',
        protocol: 'http://',
        type_path: '/gettype.php',
        fallback_config: {
            slide: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: 'slide',
                slide: '/static/js/geetest.0.0.0.js'
            },
            fullpage: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: 'fullpage',
                fullpage: '/static/js/fullpage.0.0.0.js'
            }
        },
        _get_fallback_config: function () {
            var self = this;
            if (isString(self.type)) {
                return self.fallback_config[self.type];
            } else if (self.new_captcha) {
                return self.fallback_config.fullpage;
            } else {
                return self.fallback_config.slide;
            }
        },
        _extend: function (obj) {
            var self = this;
            new _Object(obj)._each(function (key, value) {
                self[key] = value;
            })
        }
    };
    var isNumber = function (value) {
        return (typeof value === 'number');
    };
    var isString = function (value) {
        return (typeof value === 'string');
    };
    var isBoolean = function (value) {
        return (typeof value === 'boolean');
    };
    var isObject = function (value) {
        return (typeof value === 'object' && value !== null);
    };
    var isFunction = function (value) {
        return (typeof value === 'function');
    };
    var callbacks = {};
    var status = {};
    var random = function () {
        return parseInt(Math.random() * 10000) + (new Date()).valueOf();
    };
    var loadScript = function (url, cb) {
        var script = document.createElement("script");
        script.charset = "UTF-8";
        script.async = true;
        script.onerror = function () {
            cb(true);
        };
        var loaded = false;
        script.onload = script.onreadystatechange = function () {
            if (!loaded &&
                (!script.readyState ||
                "loaded" === script.readyState ||
                "complete" === script.readyState)) {

                loaded = true;
                setTimeout(function () {
                    cb(false);
                }, 0);
            }
        };
        script.src = url;
        head.appendChild(script);
    };
    var normalizeDomain = function (domain) {
        return domain.replace(/^https?:\/\/|\/$/g, '');
    };
    var normalizePath = function (path) {
        path = path.replace(/\/+/g, '/');
        if (path.indexOf('/') !== 0) {
            path = '/' + path;
        }
        return path;
    };
    var normalizeQuery = function (query) {
        if (!query) {
            return '';
        }
        var q = '?';
        new _Object(query)._each(function (key, value) {
            if (isString(value) || isNumber(value) || isBoolean(value)) {
                q = q + encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
            }
        });
        if (q === '?') {
            q = '';
        }
        return q.replace(/&$/, '');
    };
    var makeURL = function (protocol, domain, path, query) {
        domain = normalizeDomain(domain);

        var url = normalizePath(path) + normalizeQuery(query);
        if (domain) {
            url = protocol + domain + url;
        }

        return url;
    };
    var load = function (protocol, domains, path, query, cb) {
        var tryRequest = function (at) {

            var url = makeURL(protocol, domains[at], path, query);
            loadScript(url, function (err) {
                if (err) {
                    if (at >= domains.length - 1) {
                        cb(true);
                    } else {
                        tryRequest(at + 1);
                    }
                } else {
                    cb(false);
                }
            });
        };
        tryRequest(0);
    };
    var jsonp = function (domains, path, config, callback) {
        if (isObject(config.getLib)) {
            config._extend(config.getLib);
            callback(config);
            return;
        }
        if (config.offline) {
            callback(config._get_fallback_config());
            return;
        }
        var cb = "geetest_" + random();
        window[cb] = function (data) {
            if (data.status === 'success') {
                callback(data.data);
            } else if (!data.status) {
                callback(data);
            } else {
                callback(config._get_fallback_config());
            }
            window[cb] = undefined;
            try {
                delete window[cb];
            } catch (e) {
            }
        };
        load(config.protocol, domains, path, {
            gt: config.gt,
            callback: cb
        }, function (err) {
            if (err) {
                callback(config._get_fallback_config());
            }
        });
    };
    var throwError = function (errorType, config) {
        var errors = {
            networkError: '缂冩垹绮堕柨娆掝嚖'
        };
        if (typeof config.onError === 'function') {
            config.onError(errors[errorType]);
        } else {
            throw new Error(errors[errorType]);
        }
    };
    var detect = function () {
        return !!window.Geetest;
    };
    if (detect()) {
        status.slide = "loaded";
    }
    var initGeetest = function (userConfig, callback) {
        var config = new Config(userConfig);
        if (userConfig.https) {
            config.protocol = 'https://';
        } else if (!userConfig.protocol) {
            config.protocol = window.location.protocol + '//';
        }
        jsonp([config.api_server || config.apiserver], config.type_path, config, function (newConfig) {
            var type = newConfig.type;
            var init = function () {
                config._extend(newConfig);
                callback(new window.Geetest(config));
            };
            callbacks[type] = callbacks[type] || [];
            var s = status[type] || 'init';
            if (s === 'init') {
                status[type] = 'loading';
                callbacks[type].push(init);
                load(config.protocol, newConfig.static_servers || newConfig.domains, newConfig[type] || newConfig.path, null, function (err) {
                    if (err) {
                        status[type] = 'fail';
                        throwError('networkError', config);
                    } else {
                        status[type] = 'loaded';
                        var cbs = callbacks[type];
                        for (var i = 0, len = cbs.length; i < len; i = i + 1) {
                            var cb = cbs[i];
                            if (isFunction(cb)) {
                                cb();
                            }
                        }
                        callbacks[type] = [];
                    }
                });
            } else if (s === "loaded") {
                init();
            } else if (s === "fail") {
                throwError('networkError', config);
            } else if (s === "loading") {
                callbacks[type].push(init);
            }
        });
    };
    window.initGeetest = initGeetest;
    return initGeetest;
});
function tip(options){
    var className = "fadetip";

    var text = options.text || "";
    var time = options.time || 1500;

    var cpTxt = '<div class=' + className + '>' + text + '</div>';
    $('body').append(cpTxt);
    $('.fadetip').fadeOut(time, function () {
        $(this).remove();
    });
}
// 鎼滅储
toHex.hexchars = "0123456789ABCDEF";

function toHex(B) {
	return toHex.hexchars.charAt(B >> 4) + toHex.hexchars.charAt(B & 15)
}
utfurl.okURIchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function Search() {
	var B = "/caipu";
	if ($("#global_search_inpt").val() == "" || $("#global_search_inpt").val() == "鎼滅储鑿滆氨銆佽彍鍗曘€侀鏉愩€佺敤鎴�") {
		$("#global_search_inpt").val("鎼滅储鑿滆氨銆佽彍鍗曘€侀鏉愩€佺敤鎴�");
		location.href = B;
		return false;
	} else {
		location.href = B+"/"+encodeURIComponent($("#global_search_inpt").val());
	}
	return false;
}
$("#global_search_inpt").keyup(function(event){
    if(event.keyCode ==13){
        Search();
    }
});
function Search2() {
	var B = $("#searchForm2").attr("action");
	if ($("#global_search_inpt2").val() == "" || $("#global_search_inpt2").val() == "鎼滅储鑿滆氨銆佽彍鍗曘€侀鏉愩€佺敤鎴�") {
		$("#global_search_inpt2").val("鎼滅储鑿滆氨銆佽彍鍗曘€侀鏉愩€佺敤鎴�");
		location.href = B + buildURL("");
		return false;
	} else {
		location.href = B + buildURL($("#global_search_inpt2").val());
	}
	return false;
}
function buildURL(B) {
	B = B.replace(/^\s+|\s+$/g, "");
	B = B.replace(/\"/g, "鈥�");
	B = B.replace(/\*/g, "");
	if (B == "") {
		return ""
	}
	s = utfurl(B);
	s = s.replace(/%20/g, "+");
	return s.replace(/%(5E|2E|2D|2F|3B|3F|40|2C|26|3A|3D|2B|24)/g, "_$1")
}
function utfurl(H) {
	var H = toutf8(H);
	var F;
	var E = "";
	for (var G = 0; G < H.length; G++) {
		if (utfurl.okURIchars.indexOf(H.charAt(G)) == -1) {
			E += "%" + toHex(H.charCodeAt(G))
		} else {
			E += H.charAt(G)
		}
	}
	return E
}
function toutf8(H) {
	var G, J;
	var F = "";
	var I = 0;
	while (I < H.length) {
		G = H.charCodeAt(I++);
		if (G >= 56320 && G < 57344) {
			continue
		}
		if (G >= 55296 && G < 56320) {
			if (I >= H.length) {
				continue
			}
			J = H.charCodeAt(I++);
			if (J < 56320 || G >= 56832) {
				continue
			}
			G = ((G - 55296) << 10) + (J - 56320) + 65536
		}
		if (G < 128) {
			F += String.fromCharCode(G)
		} else {
			if (G < 2048) {
				F += String.fromCharCode(192 + (G >> 6), 128 + (G & 63))
			} else {
				if (G < 65536) {
					F += String.fromCharCode(224 + (G >> 12), 128 + (G >> 6 & 63), 128 + (G & 63))
				} else {
					F += String.fromCharCode(240 + (G >> 18), 128 + (G >> 12 & 63), 128 + (G >> 6 & 63), 128 + (G & 63))
				}
			}
		}
	}
	return F
}
// 鎼滅储寤鸿璇�
function selectItem(D) {
	searchContent = removeHTMLTag($("#global_search_inpt").val());
	if (searchContent.length == 0) {
		$.ajax({
			url: '/search/ajaxSuggestCook',
			type:'get',
			success: function(A){
				var B = '<ul id="ulItems">';
				for (i = 0; i < 10; i++) {
					modnm = i + 1;
					B += '<li id="li_' + i + '" class="trackClick" module="42" href="' + A.data[i] + "\" onclick=searchJump('recipe','" + A.data[i] + "')><i>" + modnm + '.</i> <span id="si_' + i + '" class="op">' + A.data[i] + "</span></li>"
				}
				B += "</ul>";
				$(".sugg2").html(B).show();
			}
		});
	}
	var C = $("#ulItems li").length;
	if (D.keyCode == 38 || D.keyCode == 40) {
		if (C > 0) {
			oldSelIndex = currentSelIndex;
			if (D.keyCode == 38) {
				if (currentSelIndex == -1) {
					currentSelIndex = C - 1
				} else {
					currentSelIndex = currentSelIndex - 1;
					if (currentSelIndex < 0) {
						currentSelIndex = C - 1
					}
				}
				if (currentSelIndex != -1) {
					document.getElementById("li_" + currentSelIndex).style.backgroundColor = "#eaeaea";
					document.getElementById("global_search_inpt").value = document.getElementById("si_" + currentSelIndex).innerText
				}
				if (oldSelIndex != -1) {
					document.getElementById("li_" + oldSelIndex).style.backgroundColor = "#f4f4f4"
				}
			}
			if (D.keyCode == 40) {
				if (currentSelIndex == C - 1) {
					currentSelIndex = 0
				} else {
					currentSelIndex = currentSelIndex + 1;
					if (currentSelIndex > C - 1) {
						currentSelIndex = 0
					}
				}
				if (currentSelIndex != -1) {
					document.getElementById("li_" + currentSelIndex).style.backgroundColor = "#eaeaea";
					document.getElementById("global_search_inpt").value = document.getElementById("si_" + currentSelIndex).innerText
				}
				if (oldSelIndex != -1) {
					document.getElementById("li_" + oldSelIndex).style.backgroundColor = "#f4f4f4"
				}
			}
		}
	} else {
		if (D.keyCode == 13) {
			if (document.getElementById("ulItems").style.display != "none" && C > 0 && currentSelIndex != -1) {
				document.getElementById("global_search_inpt").value = document.getElementById("si_" + currentSelIndex).innerText;
				document.getElementById("ulItems").style.display = "none";
				currentSelIndex = -1;
				oldSelIndex = -1
			}
		}
	}
}

function searchJump(C, D) {
	$("#global_search_inpt").val(D);
	if (C == 'recipe')
	{
		url = "/caipu/" + D;
	}else{
		url = "/search/" + C + "/" + D;
	}
	window.location.href = url;
}

function removeHTMLTag(B) {
	B = B.replace(/\"/g, "鈥�");
	B = B.replace(/<\/?[^>]*>/g, "");
	B = B.replace(/<!*/g, "");
	B = B.replace(/\/>*/g, "");
	B = B.replace(/[ | ]*\n/g, "\n");
	B = B.replace(/"|'|-|<|>*/g, "");
	B = B.replace(/ /ig, "");
	return B
}
//搴曢儴鍔犲叧娉�
var J=false;
$(window).scroll(function(){
	var C=$(document).height()-$(window).height()-$(window).scrollTop();
	if(C<=600&&!J){var B=$("<iframe>");
		B.attr({
			width:"136",height:"24",frameborder:"0",allowtransparency:"true",marginwidth:"0",marginheight:"0",scrolling:"no",border:"0",
			src:"https://widget.weibo.com/relationship/followbutton.php?language=zh_cn&width=136&height=24&uid=1647910344&style=2&;btn=light&dpc=1"}
			);
		$(".bonefans").eq(0).append(B);
		var D=$("<iframe>");
		D.attr({frameborder:"0",allowtransparency:"true",scrolling:"no",border:"0",src:"http://open.qzone.qq.com/like?url=http%3A%2F%2Fuser.qzone.qq.com%2F2272056371&type=button_num&width=400&height=30&style=2"});D.css({width:"120px",height:"30px",border:"none",overflow:"hidden"});
		var A=$("<iframe>");
		A.attr({
			width:"178",
			height:"24",
			frameborder:"0",
			allowtransparency:"true",
			scrolling:"auto",
			marginwidth:"0",
			marginheight:"0",
			src:"http://follow.v.t.qq.com/index.php?c=follow&a=quick&name=douguomeishi&style=5&t=1351091457260&f=1"
		});
		J=true
	}
});
//鍏虫敞
function guanzhu(that,user_id,_token,isMutual){
    var action = $.trim($(that).attr("data-action"));
    $.ajax({
        url: '/user/addDelFriend',
        type:'post',
        data: {
            'user_id': user_id,
            'action' : action,
            "_token" : _token
        },
        success: function (res) {
            if(res.errcode == 0){
                if(action=="add"){
					if(res.data.rel==1){
						$(that).html("宸插叧娉�");
					}else if(res.data.rel==3){
						if(isMutual==1){
							$(that).html("浜掔浉鍏虫敞");
						}else{
							$(that).html("宸插叧娉�");
						}
					}
					$(that).attr("data-action","cancel");
					$(that).addClass("hasgz");
                }else{
                    $(that).attr("data-action","add");
                    $(that).html("<span class='addicon'>锛�</span> 鍏虫敞");
                    $(that).removeClass("hasgz");
                }
            }
        }
    });
}
//绗旇鐐硅禐
function setLike(id,that,token) {
    if($(that).data("like")==="like"){
        // 涓嶅枩娆�
        $.ajax({
            url:"/note/unlike",
            data:{id:id,'_token':token},
            type:"post",
            success:function (res) {
                if(res.errcode===0){
                    $(that).attr("onclick","")
                    $(that).removeClass("like");
                    $(that).addClass("not-like");
                    $(that).data("like","not-like")
                    if(Number($(that).html())>0){
                        $(that).html(Number($(that).html()) - 1)
                    }
                    $(that).attr("onclick","setLike("+id+",this,'" + token + "')")
                }
            }
        })
    }else{
        // 鍠滄
        $.ajax({
            url:"/note/like",
            data:{id:id,'_token':token},
            type:"post",
            success:function (res) {
                if(res.errcode===0){
                    $(that).attr("onclick","")
                    $(that).removeClass("not-like");
                    $(that).addClass("like");
                    $(that).data("like","like")
                    $(that).html(Number($(that).html()) + 1)
                    $(that).attr("onclick","setLike("+id+",this,'" + token + "')")
                }
            }
        })
    }
}
// 鍏抽棴寮圭獥
function cmask(){
	$(".smask").hide();
	$(".fancbox").hide();
}
// 寮瑰嚭鐧诲綍妗�
function logshow(){
	$(".smask").show();
	$("#log-box").show();
}
//涓婁紶椋熸潗鍥剧墖
$(".addscpic_input").on("change",function(e){
    if(this.value!=null&&this.value!=""){
       alert("涓婁紶鎴愬姛锛屽睍绀哄浘鐗囪嚦灏戦渶瑕�2涓伐浣滄棩锛岃鑰愬績绛夊緟~");
       window.location.reload();
    }
})

//鍒犻櫎鎻愮ず妗�
function showMotai(title,callback) {
    var box = document.createElement("div");
    var btm = document.createElement("div");
    var infoBox = document.createElement("div");
    var remindInfo = document.createElement("p");
    var submit = document.createElement("button");
    var cancel = document.createElement("button");
    //鏁翠釜妯℃€佹
    box.setAttribute("id", "deleteMotai");
    box.setAttribute("style", 'position: fixed;top: 0;left: 0;width:100vw;height: 100vh;');
    //搴曢儴閬僵灞�
    btm.setAttribute("style", "height: 100vh;background: black;opacity: 0.5;z-index: 999;");
    btm.onclick = function () {
        hiddenMotai()
    };
    //鎻愮ず淇℃伅妗�
    infoBox.setAttribute("style", "position: fixed;width:420px;height:191px;margin-left:-210px;margin-top:-145px;top: 50%;left: 50%;background: #fff;border-radius: 8px;z-index: 1000;text-align: center;font-size: 0;");
    //鎻愮ず淇℃伅
    remindInfo.setAttribute("style","margin-top:50px;margin-bottom:60px;font-size: 20px;line-height: 20px;text-align: center;font-weight: bold");
    remindInfo.innerHTML = title ;
    //纭鎸夐挳
    submit.innerHTML = "纭";
    submit.setAttribute("style","width:183px;height:42px;margin-right:10px;padding:0;border-radius:4px;background:#FFB31A;font-size: 18px;border: none;color: #ffffff;outline: none;cursor: pointer;")
    //鍙栨秷鎸夐挳
    cancel.innerHTML = "鍙栨秷";
    cancel.setAttribute("style", "width:183px;height:42px;padding:0;border-radius:4px;background:#cccccc;font-size: 18px;border: none;color: #ffffff;outline: none;cursor: pointer;");

    box.appendChild(btm);
    box.appendChild(infoBox);
    infoBox.appendChild(remindInfo);
    infoBox.appendChild(submit);
    infoBox.appendChild(cancel);
    document.body.appendChild(box);

    submit.onclick = function () {
        hiddenMotai();
        callback();
    };

    cancel.onclick = function () {
        hiddenMotai()
    };

}

//闅愯棌妯℃€佹
function hiddenMotai() {
    var deleteMotai = document.getElementById("deleteMotai");
    document.body.removeChild(deleteMotai);
}

function uploadImg(option) {
    if(typeof option.id == 'undefined'){
        throw "must appoint file id";
    }
    var id = option.id;
    var type = 4;
    var user_id = 0;

    if(typeof option.type !== 'undefined'){
        type = option.type;
    }
    if(typeof option.user_id !== 'undefined'){
        user_id = option.user_id;
    }

    var formFile = new FormData();
    var fileObj = document.getElementById(id).files.item(0);

    formFile.append("image", fileObj);
    formFile.append("type", type);
    formFile.append("user_id", user_id);
    
    $.ajax({
        url: "http://upload.qa.douguo.com/upload/image",
        data: formFile,
        type: "post",
        dataType: "json",
        cache: false,
        processData: false,
        contentType: false,
        success: function (result) {
            if(typeof  option.success == "function"){
                option.success(result);
            }
        }
    })
}

function hex_md5(a) {
    return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}
function b64_md5(a) {
    return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}
function str_md5(a) {
    return binl2str(core_md5(str2binl(a), a.length * chrsz))
}
function hex_hmac_md5(a, b) {
    return binl2hex(core_hmac_md5(a, b))
}
function b64_hmac_md5(a, b) {
    return binl2b64(core_hmac_md5(a, b))
}
function str_hmac_md5(a, b) {
    return binl2str(core_hmac_md5(a, b))
}
function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}
function core_md5(a, b) {
    a[b >> 5] |= 128 << b % 32,
        a[(b + 64 >>> 9 << 4) + 14] = b;
    for (var c = 1732584193, d = -271733879, e = -1732584194, f = 271733878, g = 0; g < a.length; g += 16) {
        var h = c
            , i = d
            , j = e
            , k = f;
        c = md5_ff(c, d, e, f, a[g + 0], 7, -680876936),
            f = md5_ff(f, c, d, e, a[g + 1], 12, -389564586),
            e = md5_ff(e, f, c, d, a[g + 2], 17, 606105819),
            d = md5_ff(d, e, f, c, a[g + 3], 22, -1044525330),
            c = md5_ff(c, d, e, f, a[g + 4], 7, -176418897),
            f = md5_ff(f, c, d, e, a[g + 5], 12, 1200080426),
            e = md5_ff(e, f, c, d, a[g + 6], 17, -1473231341),
            d = md5_ff(d, e, f, c, a[g + 7], 22, -45705983),
            c = md5_ff(c, d, e, f, a[g + 8], 7, 1770035416),
            f = md5_ff(f, c, d, e, a[g + 9], 12, -1958414417),
            e = md5_ff(e, f, c, d, a[g + 10], 17, -42063),
            d = md5_ff(d, e, f, c, a[g + 11], 22, -1990404162),
            c = md5_ff(c, d, e, f, a[g + 12], 7, 1804603682),
            f = md5_ff(f, c, d, e, a[g + 13], 12, -40341101),
            e = md5_ff(e, f, c, d, a[g + 14], 17, -1502002290),
            d = md5_ff(d, e, f, c, a[g + 15], 22, 1236535329),
            c = md5_gg(c, d, e, f, a[g + 1], 5, -165796510),
            f = md5_gg(f, c, d, e, a[g + 6], 9, -1069501632),
            e = md5_gg(e, f, c, d, a[g + 11], 14, 643717713),
            d = md5_gg(d, e, f, c, a[g + 0], 20, -373897302),
            c = md5_gg(c, d, e, f, a[g + 5], 5, -701558691),
            f = md5_gg(f, c, d, e, a[g + 10], 9, 38016083),
            e = md5_gg(e, f, c, d, a[g + 15], 14, -660478335),
            d = md5_gg(d, e, f, c, a[g + 4], 20, -405537848),
            c = md5_gg(c, d, e, f, a[g + 9], 5, 568446438),
            f = md5_gg(f, c, d, e, a[g + 14], 9, -1019803690),
            e = md5_gg(e, f, c, d, a[g + 3], 14, -187363961),
            d = md5_gg(d, e, f, c, a[g + 8], 20, 1163531501),
            c = md5_gg(c, d, e, f, a[g + 13], 5, -1444681467),
            f = md5_gg(f, c, d, e, a[g + 2], 9, -51403784),
            e = md5_gg(e, f, c, d, a[g + 7], 14, 1735328473),
            d = md5_gg(d, e, f, c, a[g + 12], 20, -1926607734),
            c = md5_hh(c, d, e, f, a[g + 5], 4, -378558),
            f = md5_hh(f, c, d, e, a[g + 8], 11, -2022574463),
            e = md5_hh(e, f, c, d, a[g + 11], 16, 1839030562),
            d = md5_hh(d, e, f, c, a[g + 14], 23, -35309556),
            c = md5_hh(c, d, e, f, a[g + 1], 4, -1530992060),
            f = md5_hh(f, c, d, e, a[g + 4], 11, 1272893353),
            e = md5_hh(e, f, c, d, a[g + 7], 16, -155497632),
            d = md5_hh(d, e, f, c, a[g + 10], 23, -1094730640),
            c = md5_hh(c, d, e, f, a[g + 13], 4, 681279174),
            f = md5_hh(f, c, d, e, a[g + 0], 11, -358537222),
            e = md5_hh(e, f, c, d, a[g + 3], 16, -722521979),
            d = md5_hh(d, e, f, c, a[g + 6], 23, 76029189),
            c = md5_hh(c, d, e, f, a[g + 9], 4, -640364487),
            f = md5_hh(f, c, d, e, a[g + 12], 11, -421815835),
            e = md5_hh(e, f, c, d, a[g + 15], 16, 530742520),
            d = md5_hh(d, e, f, c, a[g + 2], 23, -995338651),
            c = md5_ii(c, d, e, f, a[g + 0], 6, -198630844),
            f = md5_ii(f, c, d, e, a[g + 7], 10, 1126891415),
            e = md5_ii(e, f, c, d, a[g + 14], 15, -1416354905),
            d = md5_ii(d, e, f, c, a[g + 5], 21, -57434055),
            c = md5_ii(c, d, e, f, a[g + 12], 6, 1700485571),
            f = md5_ii(f, c, d, e, a[g + 3], 10, -1894986606),
            e = md5_ii(e, f, c, d, a[g + 10], 15, -1051523),
            d = md5_ii(d, e, f, c, a[g + 1], 21, -2054922799),
            c = md5_ii(c, d, e, f, a[g + 8], 6, 1873313359),
            f = md5_ii(f, c, d, e, a[g + 15], 10, -30611744),
            e = md5_ii(e, f, c, d, a[g + 6], 15, -1560198380),
            d = md5_ii(d, e, f, c, a[g + 13], 21, 1309151649),
            c = md5_ii(c, d, e, f, a[g + 4], 6, -145523070),
            f = md5_ii(f, c, d, e, a[g + 11], 10, -1120210379),
            e = md5_ii(e, f, c, d, a[g + 2], 15, 718787259),
            d = md5_ii(d, e, f, c, a[g + 9], 21, -343485551),
            c = safe_add(c, h),
            d = safe_add(d, i),
            e = safe_add(e, j),
            f = safe_add(f, k)
    }
    return Array(c, d, e, f)
}
function md5_cmn(a, b, c, d, e, f) {
    return safe_add(bit_rol(safe_add(safe_add(b, a), safe_add(d, f)), e), c)
}
function md5_ff(a, b, c, d, e, f, g) {
    return md5_cmn(b & c | ~b & d, a, b, e, f, g)
}
function md5_gg(a, b, c, d, e, f, g) {
    return md5_cmn(b & d | c & ~d, a, b, e, f, g)
}
function md5_hh(a, b, c, d, e, f, g) {
    return md5_cmn(b ^ c ^ d, a, b, e, f, g)
}
function md5_ii(a, b, c, d, e, f, g) {
    return md5_cmn(c ^ (b | ~d), a, b, e, f, g)
}
function core_hmac_md5(a, b) {
    var c = str2binl(a);
    c.length > 16 && (c = core_md5(c, a.length * chrsz));
    for (var d = Array(16), e = Array(16), f = 0; 16 > f; f++)
        d[f] = 909522486 ^ c[f],
            e[f] = 1549556828 ^ c[f];
    var g = core_md5(d.concat(str2binl(b)), 512 + b.length * chrsz);
    return core_md5(e.concat(g), 640)
}
function safe_add(a, b) {
    var c = (65535 & a) + (65535 & b)
        , d = (a >> 16) + (b >> 16) + (c >> 16);
    return d << 16 | 65535 & c
}
function bit_rol(a, b) {
    return a << b | a >>> 32 - b
}
function str2binl(a) {
    for (var b = Array(), c = (1 << chrsz) - 1, d = 0; d < a.length * chrsz; d += chrsz)
        b[d >> 5] |= (a.charCodeAt(d / chrsz) & c) << d % 32;
    return b
}
function binl2str(a) {
    for (var b = "", c = (1 << chrsz) - 1, d = 0; d < 32 * a.length; d += chrsz)
        b += String.fromCharCode(a[d >> 5] >>> d % 32 & c);
    return b
}
function binl2hex(a) {
    for (var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", c = "", d = 0; d < 4 * a.length; d++)
        c += b.charAt(a[d >> 2] >> d % 4 * 8 + 4 & 15) + b.charAt(a[d >> 2] >> d % 4 * 8 & 15);
    return c
}
function binl2b64(a) {
    for (var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "", d = 0; d < 4 * a.length; d += 3)
        for (var e = (a[d >> 2] >> 8 * (d % 4) & 255) << 16 | (a[d + 1 >> 2] >> 8 * ((d + 1) % 4) & 255) << 8 | a[d + 2 >> 2] >> 8 * ((d + 2) % 4) & 255, f = 0; 4 > f; f++)
            c += 8 * d + 6 * f > 32 * a.length ? b64pad : b.charAt(e >> 6 * (3 - f) & 63);
    return c
}
var hexcase = 0
    , b64pad = ""
    , chrsz = 8;
// 鐧诲綍
function login(){
    var cellphone = $.trim($("#mobile").val());
    var passp = $("#passport").val();
    var phonepreg   = /^1[3456789]\d{9}$/;

    if(cellphone.length <= 0)
    {
		$("#log-box .cellerr").html('璇疯緭鍏ユ纭殑鎵嬫満鍙风爜');
        return false;
    }else if(!phonepreg.test(cellphone)){
		$("#log-box .cellerr").html('璇疯緭鍏ユ纭殑鎵嬫満鍙风爜');
        return false;
    }
    if(passp === ""){
		$("#log-box .cellerr").html('');
		$("#log-box .pwerr").html('璇峰～鍐欏瘑鐮�');
        return false;
    }
    $.ajax({
        url: 'https://passport.douguo.com/layout/login',
        type:'post',
        jsonpCallback: "showmsg",
        dataType: 'jsonp',
        data: "&username=" + cellphone + "&password=" + hex_md5(passp) + "&code=code&agent_type=web",
    });
}
function showmsg(res) {
    if(res.errno!==0){
        tip({text:res.errmsg})
    }else{
        window.location.href=window.location.href;
    }
}
function checkPhone() {
	var cellphone = $.trim($("#mobile").val());
    var phonepreg   = /^1[3456789]\d{9}$/;
	if(cellphone.length <= 0)
	{
		$("#log-box .cellerr").html('璇峰～鍐欐偍鐨勬墜鏈哄彿鐮�');
		return false;
	}else if(!phonepreg.test(cellphone)){
		$("#log-box .cellerr").html('鎵嬫満鍙风爜鏍煎紡涓嶆纭�');
		return false;
	}else{
		$("#log-box .cellerr").html('');
	}
}
/*! Sortable 1.10.2 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function I(i){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,o;e=i,o=r[n=t],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o})}return i}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var w=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),E=t(/Edge/i),c=t(/firefox/i),s=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),i=t(/chrome/i)&&t(/android/i),r={capture:!1,passive:!1};function u(t,e,n){t.addEventListener(e,n,!w&&r)}function d(t,e,n){t.removeEventListener(e,n,!w&&r)}function h(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function P(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&h(t,e):h(t,e))||o&&t===n)return t;if(t===n)break}while(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode)}var i;return null}var f,p=/\s+/g;function k(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(p," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(p," ")}}function R(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=R(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function g(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function N(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d;if(d=t!==window&&t!==N()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!w))do{if(i&&i.getBoundingClientRect&&("none"!==R(i,"transform")||n&&"static"!==R(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(R(i,"border-top-width")),l-=h.left+parseInt(R(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);if(o&&t!==window){var f=v(i||t),p=f&&f.a,g=f&&f.d;f&&(s=(a/=g)+(u/=g),c=(l/=p)+(d/=p))}return{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function Y(t,e,n){for(var o=H(t,!0),i=X(t)[e];o;){var r=X(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===N())break;o=H(o,!1)}return!1}function m(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==Rt.ghost&&r[i]!==Rt.dragged&&P(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function B(t,e){for(var n=t.lastElementChild;n&&(n===Rt.ghost||"none"===R(n,"display")||e&&!h(n,e));)n=n.previousElementSibling;return n||null}function F(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Rt.clone||e&&!h(t,e)||n++;return n}function b(t){var e=0,n=0,o=N();if(t)do{var i=v(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function H(t,e){if(!t||!t.getBoundingClientRect)return N();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=R(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return N();if(o||e)return n;o=!0}}}while(n=n.parentNode);return N()}function y(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function D(e,n){return function(){if(!f){var t=arguments;1===t.length?e.call(this,t[0]):e.apply(this,t),f=setTimeout(function(){f=void 0},n)}}}function L(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function S(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function _(t,e){R(t,"position","absolute"),R(t,"top",e.top),R(t,"left",e.left),R(t,"width",e.width),R(t,"height",e.height)}function C(t){R(t,"position",""),R(t,"top",""),R(t,"left",""),R(t,"width",""),R(t,"height","")}var j="Sortable"+(new Date).getTime();function T(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if("none"!==R(t,"display")&&t!==Rt.ghost){o.push({target:t,rect:X(t)});var e=I({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=v(t,!0);n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=X(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&y(r,i)&&!y(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(l,r,a,c.options)),y(i,o)||(n.prevFromRect=o,n.prevToRect=i,e||(e=c.options.animation),c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){if(o){R(t,"transition",""),R(t,"transform","");var i=v(this.el),r=i&&i.a,a=i&&i.d,l=(e.left-n.left)/(r||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,R(t,"transform","translate3d("+l+"px,"+s+"px,0)"),function(t){t.offsetWidth}(t),R(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),R(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){R(t,"transition",""),R(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var x=[],M={initializeByDefault:!0},O={mount:function(t){for(var e in M)!M.hasOwnProperty(e)||e in t||(t[e]=M[e]);x.push(t)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";x.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](I({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](I({sortable:n},o)))})},initializePlugins:function(o,i,r,t){for(var e in x.forEach(function(t){var e=t.pluginName;if(o.options[e]||t.initializeByDefault){var n=new t(o,i,o.options);n.sortable=o,n.options=o.options,o[e]=n,a(r,n.defaults)}}),o.options)if(o.options.hasOwnProperty(e)){var n=this.modifyOption(o,e,o.options[e]);void 0!==n&&(o.options[e]=n)}},getEventProperties:function(e,n){var o={};return x.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return x.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function A(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,v=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||w||E?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var b=I({},p,O.getEventProperties(o,e));for(var y in b)g[y]=b[y];n&&n.dispatchEvent(g),v[m]&&v[m].call(e,g)}}function K(t,e,n){var o=2<arguments.length&&void 0!==n?n:{},i=o.evt,r=l(o,["evt"]);O.pluginEvent.bind(Rt)(t,e,I({dragEl:z,parentEl:G,ghostEl:U,rootEl:q,nextEl:V,lastDownEl:Z,cloneEl:Q,cloneHidden:$,dragStarted:dt,putSortable:it,activeSortable:Rt.active,originalEvent:i,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt,hideGhostForTarget:Nt,unhideGhostForTarget:It,cloneNowHidden:function(){$=!0},cloneNowShown:function(){$=!1},dispatchSortableEvent:function(t){W({sortable:e,name:t,originalEvent:i})}},r))}function W(t){A(I({putSortable:it,cloneEl:Q,targetEl:z,rootEl:q,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt},t))}var z,G,U,q,V,Z,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt=!1,mt=!1,bt=[],yt=!1,wt=!1,Et=[],Dt=!1,St=[],_t="undefined"!=typeof document,Ct=n,Tt=E||w?"cssFloat":"float",xt=_t&&!i&&!n&&"draggable"in document.createElement("div"),Mt=function(){if(_t){if(w)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ot=function(t,e){var n=R(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=m(t,0,e),r=m(t,1,e),a=i&&R(i),l=r&&R(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+X(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Tt]||r&&"none"===n[Tt]&&o<s+c)?"vertical":"horizontal"},At=function(t){function s(a,l){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==a&&(l||i))return!0;if(null==a||!1===a)return!1;if(l&&"clone"===a)return a;if("function"==typeof a)return s(a(t,e,n,o),l)(t,e,n,o);var r=(l?t:e).options.group.name;return!0===a||"string"==typeof a&&a===r||a.join&&-1<a.indexOf(r)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=s(n.pull,!0),e.checkPut=s(n.put),e.revertClone=n.revertClone,t.group=e},Nt=function(){!Mt&&U&&R(U,"display","none")},It=function(){!Mt&&U&&R(U,"display","")};_t&&document.addEventListener("click",function(t){if(mt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),mt=!1},!0);function Pt(t){if(z){var e=function(r,a){var l;return bt.some(function(t){if(!B(t)){var e=X(t),n=t[j].options.emptyInsertThreshold,o=r>=e.left-n&&r<=e.right+n,i=a>=e.top-n&&a<=e.bottom+n;return n&&o&&i?l=t:void 0}}),l}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[j]._onDragOver(n)}}}function kt(t){z&&z.parentNode[j]._isOutsideThisEl(t.target)}function Rt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ot(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Rt.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var o in O.initializePlugins(this,t,n),n)o in e||(e[o]=n[o]);for(var i in At(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&xt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?u(t,"pointerdown",this._onTapStart):(u(t,"mousedown",this._onTapStart),u(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(u(t,"dragover",this),u(t,"dragenter",this)),bt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,T())}function Xt(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||w||E?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||X(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),d&&(c=d.call(u,s,a)),c}function Yt(t){t.draggable=!1}function Bt(){Dt=!1}function Ft(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Ht(t){return setTimeout(t,0)}function Lt(t){return clearTimeout(t)}Rt.prototype={constructor:Rt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ht=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,z):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(function(t){St.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&St.push(o)}}(o),!z&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled||s.isContentEditable||(l=P(l,t.draggable,o,!1))&&l.animated||Z===l)){if(J=F(l),et=F(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return W({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),K("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(t){if(t=P(s,t.trim(),o,!1))return W({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),K("filter",n,{evt:e}),!0})))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!P(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;if(n&&!z&&n.parentNode===r){var s=X(n);if(q=r,G=(z=n).parentNode,V=z.nextSibling,Z=n,ot=a.group,rt={target:Rt.dragged=z,clientX:(e||t).clientX,clientY:(e||t).clientY},ct=rt.clientX-s.left,ut=rt.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,z.style["will-change"]="all",o=function(){K("delayEnded",i,{evt:t}),Rt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!c&&i.nativeDraggable&&(z.draggable=!0),i._triggerDragStart(t,e),W({sortable:i,name:"choose",originalEvent:t}),k(z,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){g(z,t.trim(),Yt)}),u(l,"dragover",Pt),u(l,"mousemove",Pt),u(l,"touchmove",Pt),u(l,"mouseup",i._onDrop),u(l,"touchend",i._onDrop),u(l,"touchcancel",i._onDrop),c&&this.nativeDraggable&&(this.options.touchStartThreshold=4,z.draggable=!0),K("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(E||w))o();else{if(Rt.eventCanceled)return void this._onDrop();u(l,"mouseup",i._disableDelayedDrag),u(l,"touchend",i._disableDelayedDrag),u(l,"touchcancel",i._disableDelayedDrag),u(l,"mousemove",i._delayedDragTouchMoveHandler),u(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&u(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){z&&Yt(z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._disableDelayedDrag),d(t,"touchend",this._disableDelayedDrag),d(t,"touchcancel",this._disableDelayedDrag),d(t,"mousemove",this._delayedDragTouchMoveHandler),d(t,"touchmove",this._delayedDragTouchMoveHandler),d(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?u(document,"pointermove",this._onTouchMove):u(document,e?"touchmove":"mousemove",this._onTouchMove):(u(z,"dragend",this),u(q,"dragstart",this._onDragStart));try{document.selection?Ht(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(vt=!1,q&&z){K("dragStarted",this,{evt:e}),this.nativeDraggable&&u(document,"dragover",kt);var n=this.options;t||k(z,n.dragClass,!1),k(z,n.ghostClass,!0),Rt.active=this,t&&this._appendGhost(),W({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,Nt();for(var t=document.elementFromPoint(at.clientX,at.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY))!==e;)e=t;if(z.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j]){if(e[j]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);It()}},_onTouchMove:function(t){if(rt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=U&&v(U,!0),a=U&&r&&r.a,l=U&&r&&r.d,s=Ct&&gt&&b(gt),c=(i.clientX-rt.clientX+o.x)/(a||1)+(s?s[0]-Et[0]:0)/(a||1),u=(i.clientY-rt.clientY+o.y)/(l||1)+(s?s[1]-Et[1]:0)/(l||1);if(!Rt.active&&!vt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(U){r?(r.e+=c-(lt||0),r.f+=u-(st||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");R(U,"webkitTransform",d),R(U,"mozTransform",d),R(U,"msTransform",d),R(U,"transform",d),lt=c,st=u,at=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!U){var t=this.options.fallbackOnBody?document.body:q,e=X(z,!0,Ct,!0,t),n=this.options;if(Ct){for(gt=t;"static"===R(gt,"position")&&"none"===R(gt,"transform")&&gt!==document;)gt=gt.parentNode;gt!==document.body&&gt!==document.documentElement?(gt===document&&(gt=N()),e.top+=gt.scrollTop,e.left+=gt.scrollLeft):gt=N(),Et=b(gt)}k(U=z.cloneNode(!0),n.ghostClass,!1),k(U,n.fallbackClass,!0),k(U,n.dragClass,!0),R(U,"transition",""),R(U,"transform",""),R(U,"box-sizing","border-box"),R(U,"margin",0),R(U,"top",e.top),R(U,"left",e.left),R(U,"width",e.width),R(U,"height",e.height),R(U,"opacity","0.8"),R(U,"position",Ct?"absolute":"fixed"),R(U,"zIndex","100000"),R(U,"pointerEvents","none"),Rt.ghost=U,t.appendChild(U),R(U,"transform-origin",ct/parseInt(U.style.width)*100+"% "+ut/parseInt(U.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;K("dragStart",this,{evt:t}),Rt.eventCanceled?this._onDrop():(K("setupClone",this),Rt.eventCanceled||((Q=S(z)).draggable=!1,Q.style["will-change"]="",this._hideClone(),k(Q,this.options.chosenClass,!1),Rt.clone=Q),n.cloneId=Ht(function(){K("clone",n),Rt.eventCanceled||(n.options.removeCloneOnHide||q.insertBefore(Q,z),n._hideClone(),W({sortable:n,name:"clone"}))}),e||k(z,i.dragClass,!0),e?(mt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(d(document,"mouseup",n._onDrop),d(document,"touchend",n._onDrop),d(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,z)),u(document,"drop",n),R(z,"transform","translateZ(0)")),vt=!0,n._dragStartId=Ht(n._dragStarted.bind(n,e,t)),u(document,"selectstart",n),dt=!0,s&&R(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,a,l=this.el,s=n.target,e=this.options,t=e.group,c=Rt.active,u=ot===t,d=e.sort,h=it||c,f=this,p=!1;if(!Dt){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),s=P(s,e.draggable,l,!0),M("dragOver"),Rt.eventCanceled)return p;if(z.contains(n.target)||s.animated&&s.animatingX&&s.animatingY||f._ignoreWhileAnimating===s)return A(!1);if(mt=!1,c&&!e.disabled&&(u?d||(r=!q.contains(z)):it===this||(this.lastPutMode=ot.checkPull(this,c,z,n))&&t.checkPut(this,c,z,n))){if(a="vertical"===this._getDirection(n,s),o=X(z),M("dragOverValid"),Rt.eventCanceled)return p;if(r)return G=q,O(),this._hideClone(),M("revert"),Rt.eventCanceled||(V?q.insertBefore(z,V):q.appendChild(z)),A(!0);var g=B(l,e.draggable);if(!g||function(t,e,n){var o=X(B(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(n,a,this)&&!g.animated){if(g===z)return A(!1);if(g&&l===n.target&&(s=g),s&&(i=X(s)),!1!==Xt(q,l,z,o,s,i,n,!!s))return O(),l.appendChild(z),G=l,N(),A(!0)}else if(s.parentNode===l){i=X(s);var v,m,b,y=z.parentNode!==l,w=!function(t,e,n){var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||i===l||o+r/2===a+s/2}(z.animated&&z.toRect||o,s.animated&&s.toRect||i,a),E=a?"top":"left",D=Y(s,"top","top")||Y(z,"top","top"),S=D?D.scrollTop:void 0;if(ht!==s&&(m=i[E],yt=!1,wt=!w&&e.invertSwap||y),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&pt<c*i){if(!yt&&(1===ft?u+c*r/2<s:s<d-c*r/2)&&(yt=!0),yt)h=!0;else if(1===ft?s<u+pt:d-pt<s)return-ft}else if(u+c*(1-i)/2<s&&s<d-c*(1-i)/2)return function(t){return F(z)<F(t)?1:-1}(e);if((h=h||a)&&(s<u+c*r/2||d-c*r/2<s))return u+c/2<s?1:-1;return 0}(n,s,i,a,w?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,wt,ht===s)))for(var _=F(z);_-=v,(b=G.children[_])&&("none"===R(b,"display")||b===U););if(0===v||b===s)return A(!1);ft=v;var C=(ht=s).nextElementSibling,T=!1,x=Xt(q,l,z,o,s,i,n,T=1===v);if(!1!==x)return 1!==x&&-1!==x||(T=1===x),Dt=!0,setTimeout(Bt,30),O(),T&&!C?l.appendChild(z):s.parentNode.insertBefore(z,T?C:s),D&&L(D,0,S-D.scrollTop),G=z.parentNode,void 0===m||wt||(pt=Math.abs(m-X(s)[E])),N(),A(!0)}if(l.contains(z))return A(!1)}return!1}function M(t,e){K(t,f,I({evt:n,isOwner:u,axis:a?"vertical":"horizontal",revert:r,dragRect:o,targetRect:i,canSort:d,fromSortable:h,target:s,completed:A,onMove:function(t,e){return Xt(q,l,z,o,t,X(t),n,e)},changed:N},e))}function O(){M("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function A(t){return M("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(k(z,it?it.options.ghostClass:c.options.ghostClass,!1),k(z,e.ghostClass,!0)),it!==f&&f!==Rt.active?it=f:f===Rt.active&&it&&(it=null),h===f&&(f._ignoreWhileAnimating=s),f.animateAll(function(){M("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(s===z&&!z.animated||s===l&&!s.animated)&&(ht=null),e.dragoverBubble||n.rootEl||s===document||(z.parentNode[j]._isOutsideThisEl(n.target),t||Pt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function N(){tt=F(z),nt=F(z,e.draggable),W({sortable:f,name:"change",toEl:l,newIndex:tt,newDraggableIndex:nt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){d(document,"mousemove",this._onTouchMove),d(document,"touchmove",this._onTouchMove),d(document,"pointermove",this._onTouchMove),d(document,"dragover",Pt),d(document,"mousemove",Pt),d(document,"touchmove",Pt)},_offUpEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._onDrop),d(t,"touchend",this._onDrop),d(t,"pointerup",this._onDrop),d(t,"touchcancel",this._onDrop),d(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;tt=F(z),nt=F(z,n.draggable),K("drop",this,{evt:t}),G=z&&z.parentNode,tt=F(z),nt=F(z,n.draggable),Rt.eventCanceled||(yt=wt=vt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Lt(this.cloneId),Lt(this._dragStartId),this.nativeDraggable&&(d(document,"drop",this),d(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),s&&R(document.body,"user-select",""),R(z,"transform",""),t&&(dt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),U&&U.parentNode&&U.parentNode.removeChild(U),(q===G||it&&"clone"!==it.lastPutMode)&&Q&&Q.parentNode&&Q.parentNode.removeChild(Q),z&&(this.nativeDraggable&&d(z,"dragend",this),Yt(z),z.style["will-change"]="",dt&&!vt&&k(z,it?it.options.ghostClass:this.options.ghostClass,!1),k(z,this.options.chosenClass,!1),W({sortable:this,name:"unchoose",toEl:G,newIndex:null,newDraggableIndex:null,originalEvent:t}),q!==G?(0<=tt&&(W({rootEl:G,name:"add",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"remove",toEl:G,originalEvent:t}),W({rootEl:G,name:"sort",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),it&&it.save()):tt!==J&&0<=tt&&(W({sortable:this,name:"update",toEl:G,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),Rt.active&&(null!=tt&&-1!==tt||(tt=J,nt=et),W({sortable:this,name:"end",toEl:G,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){K("nulling",this),q=z=G=U=V=Q=Z=$=rt=at=dt=tt=nt=J=et=ht=ft=it=ot=Rt.dragged=Rt.ghost=Rt.clone=Rt.active=null,St.forEach(function(t){t.checked=!0}),St.length=lt=st=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":z&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)P(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Ft(t));return e},sort:function(t){var o={},i=this.el;this.toArray().forEach(function(t,e){var n=i.children[e];P(n,this.options.draggable,i,!1)&&(o[t]=n)},this),t.forEach(function(t){o[t]&&(i.removeChild(o[t]),i.appendChild(o[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return P(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=O.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&At(n)},destroy:function(){K("destroy",this);var t=this.el;t[j]=null,d(t,"mousedown",this._onTapStart),d(t,"touchstart",this._onTapStart),d(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(d(t,"dragover",this),d(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),bt.splice(bt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$){if(K("hideClone",this),Rt.eventCanceled)return;R(Q,"display","none"),this.options.removeCloneOnHide&&Q.parentNode&&Q.parentNode.removeChild(Q),$=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if($){if(K("showClone",this),Rt.eventCanceled)return;q.contains(z)&&!this.options.group.revertClone?q.insertBefore(Q,z):V?q.insertBefore(Q,V):q.appendChild(Q),this.options.group.revertClone&&this.animate(z,Q),R(Q,"display",""),$=!1}}else this._hideClone()}},_t&&u(document,"touchmove",function(t){(Rt.active||vt)&&t.cancelable&&t.preventDefault()}),Rt.utils={on:u,off:d,css:R,find:g,is:function(t,e){return!!P(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:D,closest:P,toggleClass:k,clone:S,index:F,nextTick:Ht,cancelNextTick:Lt,detectDirection:Ot,getChild:m},Rt.get=function(t){return t[j]},Rt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Rt.utils=I({},Rt.utils,t.utils)),O.mount(t)})},Rt.create=function(t,e){return new Rt(t,e)};var jt,Kt,Wt,zt,Gt,Ut,qt=[],Vt=!(Rt.version="1.10.2");function Zt(){qt.forEach(function(t){clearInterval(t.pid)}),qt=[]}function Qt(){clearInterval(Ut)}function $t(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||i;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}}var Jt,te=D(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=N(),u=!1;Kt!==e&&(Kt=e,Zt(),jt=t.scroll,i=t.scrollFn,!0===jt&&(jt=H(e,!0)));var d=0,h=jt;do{var f=h,p=X(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=R(f),T=f.scrollLeft,x=f.scrollTop;D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY));var M=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(m-r)<=l&&!!T),O=D&&(Math.abs(v-a)<=l&&x+w<_)-(Math.abs(g-a)<=l&&!!x);if(!qt[d])for(var A=0;A<=d;A++)qt[A]||(qt[A]={});qt[d].vx==M&&qt[d].vy==O&&qt[d].el===f||(qt[d].el=f,qt[d].vx=M,qt[d].vy=O,clearInterval(qt[d].pid),0==M&&0==O||(u=!0,qt[d].pid=setInterval(function(){o&&0===this.layer&&Rt.active._onTouchMove(Gt);var t=qt[this.layer].vy?qt[this.layer].vy*s:0,e=qt[this.layer].vx?qt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Rt.dragged.parentNode[j],e,t,n,Gt,qt[this.layer].el)||L(qt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=H(h,!1)));Vt=u}},30);function ee(){}function ne(){}ee.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=m(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:$t},a(ee,{pluginName:"revertOnSpill"}),ne.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:$t},a(ne,{pluginName:"removeOnSpill"});var oe,ie,re,ae,le,se=[],ce=[],ue=!1,de=!1,he=!1;function fe(o,i){ce.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}function pe(){se.forEach(function(t){t!==re&&t.parentNode&&t.parentNode.removeChild(t)})}return Rt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):this.options.supportPointer?u(document,"pointermove",this._handleFallbackAutoScroll):e.touches?u(document,"touchmove",this._handleFallbackAutoScroll):u(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?d(document,"dragover",this._handleAutoScroll):(d(document,"pointermove",this._handleFallbackAutoScroll),d(document,"touchmove",this._handleFallbackAutoScroll),d(document,"mousemove",this._handleFallbackAutoScroll)),Qt(),Zt(),clearTimeout(f),f=void 0},nulling:function(){Gt=Kt=jt=Vt=Ut=Wt=zt=null,qt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o=this,i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(i,r);if(Gt=e,n||E||w||s){te(e,this.options,t,n);var a=H(t,!0);!Vt||Ut&&i===Wt&&r===zt||(Ut&&Qt(),Ut=setInterval(function(){var t=H(document.elementFromPoint(i,r),!0);t!==a&&(a=t,Zt()),te(e,o.options,t,n)},10),Wt=i,zt=r)}else{if(!this.options.bubbleScroll||H(t,!0)===N())return void Zt();te(e,this.options,H(t,!1),!1)}}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Rt.mount(ne,ee),Rt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){var e=t.dragEl;Jt=e},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;if(i.options.swap){var l=this.sortable.el,s=this.options;if(n&&n!==l){var c=Jt;Jt=!1!==o(n)?(k(n,s.swapClass,!0),n):null,c&&c!==Jt&&k(c,s.swapClass,!1)}r(),e(!0),a()}},drop:function(t){var e=t.activeSortable,n=t.putSortable,o=t.dragEl,i=n||this.sortable,r=this.options;Jt&&k(Jt,r.swapClass,!1),Jt&&(r.swap||n&&n.options.swap)&&o!==Jt&&(i.captureAnimationState(),i!==e&&e.captureAnimationState(),function(t,e){var n,o,i=t.parentNode,r=e.parentNode;if(!i||!r||i.isEqualNode(e)||r.isEqualNode(t))return;n=F(t),o=F(e),i.isEqualNode(r)&&n<o&&o++;i.insertBefore(e,i.children[n]),r.insertBefore(t,r.children[o])}(o,Jt),i.animateAll(),i!==e&&e.animateAll())},nulling:function(){Jt=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Jt}}})}),Rt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?u(document,"pointerup",this._deselectMultiDrag):(u(document,"mouseup",this._deselectMultiDrag),u(document,"touchend",this._deselectMultiDrag)),u(document,"keydown",this._checkKeyDown),u(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";se.length&&ie===o?se.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){var e=t.dragEl;re=e},delayEnded:function(){this.isMultiDrag=~se.indexOf(re)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var o=0;o<se.length;o++)ce.push(S(se[o])),ce[o].sortableIndex=se[o].sortableIndex,ce[o].draggable=!1,ce[o].style["will-change"]="",k(ce[o],this.options.selectedClass,!1),se[o]===re&&k(ce[o],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,i=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||se.length&&ie===e&&(fe(!0,n),o("clone"),i()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,o=t.cancel;this.isMultiDrag&&(fe(!1,n),ce.forEach(function(t){R(t,"display","")}),e(),le=!1,o())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),o=t.cancel;this.isMultiDrag&&(ce.forEach(function(t){R(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),le=!0,o())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&ie&&ie.multiDrag._deselectMultiDrag(),se.forEach(function(t){t.sortableIndex=F(t)}),se=se.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),he=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){se.forEach(function(t){t!==re&&R(t,"position","absolute")});var o=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&_(t,o)}),ue=de=!0}n.animateAll(function(){ue=de=!1,e.options.animation&&se.forEach(function(t){C(t)}),e.options.sort&&pe()})}},dragOver:function(t){var e=t.target,n=t.completed,o=t.cancel;de&&~se.indexOf(e)&&(n(!1),o())},revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect;1<se.length&&(se.forEach(function(t){o.addAnimationState({target:t,rect:de?X(t):i}),C(t),t.fromRect=i,e.removeAnimationState(t)}),de=!1,function(o,i){se.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,o=t.insertion,i=t.activeSortable,r=t.parentEl,a=t.putSortable,l=this.options;if(o){if(n&&i._hideClone(),ue=!1,l.animation&&1<se.length&&(de||!n&&!i.options.sort&&!a)){var s=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&(_(t,s),r.appendChild(t))}),de=!0}if(!n)if(de||pe(),1<se.length){var c=le;i._showClone(e),i.options.animation&&!le&&c&&ce.forEach(function(t){i.addAnimationState({target:t,rect:ae}),t.fromRect=ae,t.thisAnimationDuration=null})}else i._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(se.forEach(function(t){t.thisAnimationDuration=null}),o.options.animation&&!n&&o.multiDrag.isMultiDrag){ae=a({},e);var i=v(re,!0);ae.top-=i.f,ae.left-=i.e}},dragOverAnimationComplete:function(){de&&(de=!1,pe())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c=this.options,u=o.children;if(!he)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(re,c.selectedClass,!~se.indexOf(re)),~se.indexOf(re))se.splice(se.indexOf(re),1),oe=null,A({sortable:i,rootEl:n,name:"deselect",targetEl:re,originalEvt:e});else{if(se.push(re),A({sortable:i,rootEl:n,name:"select",targetEl:re,originalEvt:e}),e.shiftKey&&oe&&i.el.contains(oe)){var d,h,f=F(oe),p=F(re);if(~f&&~p&&f!==p)for(d=f<p?(h=f,p):(h=p,f+1);h<d;h++)~se.indexOf(u[h])||(k(u[h],c.selectedClass,!0),se.push(u[h]),A({sortable:i,rootEl:n,name:"select",targetEl:u[h],originalEvt:e}))}else oe=re;ie=s}if(he&&this.isMultiDrag){if((o[j].options.sort||o!==n)&&1<se.length){var g=X(re),v=F(re,":not(."+this.options.selectedClass+")");if(!ue&&c.animation&&(re.thisAnimationDuration=null),s.captureAnimationState(),!ue&&(c.animation&&(re.fromRect=g,se.forEach(function(t){if(t.thisAnimationDuration=null,t!==re){var e=de?X(t):g;t.fromRect=e,s.addAnimationState({target:t,rect:e})}})),pe(),se.forEach(function(t){u[v]?o.insertBefore(t,u[v]):o.appendChild(t),v++}),a===F(re))){var m=!1;se.forEach(function(t){t.sortableIndex===F(t)||(m=!0)}),m&&r("update")}se.forEach(function(t){C(t)}),s.animateAll()}ie=s}(n===o||l&&"clone"!==l.lastPutMode)&&ce.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=he=!1,ce.length=0},destroyGlobal:function(){this._deselectMultiDrag(),d(document,"pointerup",this._deselectMultiDrag),d(document,"mouseup",this._deselectMultiDrag),d(document,"touchend",this._deselectMultiDrag),d(document,"keydown",this._checkKeyDown),d(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==he&&he||ie!==this.sortable||t&&P(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;se.length;){var e=se[0];k(e,this.options.selectedClass,!1),se.shift(),A({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~se.indexOf(t)&&(ie&&ie!==e&&(ie.multiDrag._deselectMultiDrag(),ie=e),k(t,e.options.selectedClass,!0),se.push(t))},deselect:function(t){var e=t.parentNode[j],n=se.indexOf(t);e&&e.options.multiDrag&&~n&&(k(t,e.options.selectedClass,!1),se.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return se.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=de&&t!==re?-1:de?F(t,":not(."+n.options.selectedClass+")"):F(t),i.push({multiDragElement:t,index:e})}),{items:e(se),clones:[].concat(ce),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Rt});