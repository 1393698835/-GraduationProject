/*! jQuery v1.7.2 jquery.com | jquery.org/license */
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
				if(!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
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
			if(g === 1)
				for(h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
			l = k, k = d[g];
			if(k === "*") k = l;
			else if(l !== "*" && l !== k) {
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
		return c
	}

	function ca(a, c, d) {
		var e = a.contents,
			f = a.dataTypes,
			g = a.responseFields,
			h, i, j, k;
		for(i in g) i in d && (c[g[i]] = d[i]);
		while(f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
		if(h)
			for(i in e)
				if(e[i] && e[i].test(h)) {
					f.unshift(i);
					break
				}
		if(f[0] in d) j = f[0];
		else {
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
		if(f.isArray(b)) f.each(b, function(b, e) {
			c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
		});
		else if(!c && f.type(b) === "object")
			for(var e in b) b_(a + "[" + e + "]", b[e], c, d);
		else d(a, b)
	}

	function b$(a, c) {
		var d, e, g = f.ajaxSettings.flatOptions || {};
		for(d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
		e && f.extend(!0, a, e)
	}

	function bZ(a, c, d, e, f, g) {
		f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
		var h = a[f],
			i = 0,
			j = h ? h.length : 0,
			k = a === bS,
			l;
		for(; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
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
				for(; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
			}
		}
	}

	function bB(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
			e = b === "width" ? 1 : 0,
			g = 4;
		if(d > 0) {
			if(c !== "border")
				for(; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
			return d + "px"
		}
		d = by(a, b);
		if(d < 0 || d == null) d = a.style[b];
		if(bt.test(d)) return d;
		d = parseFloat(d) || 0;
		if(c)
			for(; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
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
		if(a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
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
				for(c in i)
					for(d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
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
		if(c.createElement)
			while(b.length) c.createElement(b.pop());
		return c
	}

	function T(a, b, c) {
		b = b || 0;
		if(f.isFunction(b)) return f.grep(a, function(a, d) {
			var e = !!b.call(a, d, a);
			return e === c
		});
		if(b.nodeType) return f.grep(a, function(a, d) {
			return a === b === c
		});
		if(typeof b == "string") {
			var d = f.grep(a, function(a) {
				return a.nodeType === 1
			});
			if(O.test(b)) return f.filter(b, d, !c);
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
			if(b === "data" && f.isEmptyObject(a[b])) continue;
			if(b !== "toJSON") return !1
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
			} else d = b
		}
		return d
	}

	function h(a) {
		var b = g[a] = {},
			c, d;
		a = a.split(/\s+/);
		for(c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
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
					if(!a) return this;
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
								if(h.id !== g[2]) return f.find(a);
								this.length = 1, this[0] = h
							}
							this.context = c, this.selector = a;
							return this
						}
						return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
					}
					if(e.isFunction(a)) return f.ready(a);
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
				for(; j < k; j++)
					if((a = arguments[j]) != null)
						for(c in a) {
							d = i[c], f = a[c];
							if(i === f) continue;
							l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
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
						if(!c.body) return setTimeout(e.ready, 1);
						e.isReady = !0;
						if(a !== !0 && --e.readyWait > 0) return;
						A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
					}
				},
				bindReady: function() {
					if(!A) {
						A = e.Callbacks("once memory");
						if(c.readyState === "complete") return setTimeout(e.ready, 1);
						if(c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
						else if(c.attachEvent) {
							c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
							var b = !1;
							try {
								b = a.frameElement == null
							} catch(d) {}
							c.documentElement.doScroll && b && J()
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
					if(!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
					try {
						if(a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
					} catch(c) {
						return !1
					}
					var d;
					for(d in a);
					return d === b || D.call(a, d)
				},
				isEmptyObject: function(a) {
					for(var b in a) return !1;
					return !0
				},
				error: function(a) {
					throw new Error(a)
				},
				parseJSON: function(b) {
					if(typeof b != "string" || !b) return null;
					b = e.trim(b);
					if(a.JSON && a.JSON.parse) return a.JSON.parse(b);
					if(n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return(new Function("return " + b))();
					e.error("Invalid JSON: " + b)
				},
				parseXML: function(c) {
					if(typeof c != "string" || !c) return null;
					var d, f;
					try {
						a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
					} catch(g) {
						d = b
					}(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
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
							for(f in a)
								if(c.apply(a[f], d) === !1) break
						} else
							for(; g < h;)
								if(c.apply(a[g++], d) === !1) break
					} else if(i) {
						for(f in a)
							if(c.call(a[f], f, a[f]) === !1) break
					} else
						for(; g < h;)
							if(c.call(a[g], g, a[g++]) === !1) break;
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
						if(H) return H.call(b, a, c);
						d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
						for(; c < d; c++)
							if(c in b && b[c] === a) return c
					}
					return -1
				},
				merge: function(a, c) {
					var d = a.length,
						e = 0;
					if(typeof c.length == "number")
						for(var f = c.length; e < f; e++) a[d++] = c[e];
					else
						while(c[e] !== b) a[d++] = c[e++];
					a.length = d;
					return a
				},
				grep: function(a, b, c) {
					var d = [],
						e;
					c = !!c;
					for(var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
					return d
				},
				map: function(a, c, d) {
					var f, g, h = [],
						i = 0,
						j = a.length,
						k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
					if(k)
						for(; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
					else
						for(g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
					return h.concat.apply([], h)
				},
				guid: 1,
				proxy: function(a, c) {
					if(typeof c == "string") {
						var d = a[c];
						c = a, a = d
					}
					if(!e.isFunction(a)) return b;
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
						for(l in d) e.access(a, c, l, d[l], 1, h, f);
						g = 1
					} else if(f !== b) {
						j = i === b && e.isFunction(f), k && (j ? (j = c, c = function(a, b, c) {
							return j.call(e(a), c)
						}) : (c.call(a, f), c = null));
						if(c)
							for(; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
						g = 1
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
			}), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test("聽") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
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
				for(d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
			},
			o = function(b, f) {
				f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
				for(; c && m < l; m++)
					if(c[m].apply(b, f) === !1 && a.stopOnFalse) {
						e = !0;
						break
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
						for(; d < e; d++)
							for(var f = 0; f < c.length; f++)
								if(b[d] === c[f]) {
									j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
									if(a.unique) break
								}
					}
					return this
				},
				has: function(a) {
					if(c) {
						var b = 0,
							d = c.length;
						for(; b < d; b++)
							if(a === c[b]) return !0
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
						if(a == null) a = h;
						else
							for(var b in h) a[b] = h[b];
						return a
					}
				},
				i = h.promise({}),
				j;
			for(j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
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
				for(; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
				g || j.resolveWith(j, b)
			} else j !== a && j.resolveWith(j, d ? [a] : []);
			return k
		}
	}), f.support = function() {
		var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
			q = c.documentElement;
		p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
		if(!d || !d.length || !e) return {};
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
		if(p.attachEvent)
			for(n in {
					submit: 1,
					change: 1,
					focusin: 1
				}) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
		j.removeChild(p), j = g = h = p = i = null, f(function() {
			var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
			!u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
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
				if((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
				n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
				if(typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
				g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
				if(o && !h[c]) return g.events;
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
				if(!j[k]) return;
				if(b) {
					d = c ? j[k] : j[k].data;
					if(d) {
						f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
						for(e = 0, g = b.length; e < g; e++) delete d[b[e]];
						if(!(c ? m : f.isEmptyObject)(d)) return
					}
				}
				if(!c) {
					delete j[k].data;
					if(!m(j[k])) return
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
				if(b) return b !== !0 && a.getAttribute("classid") === b
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
						for(i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
						f._data(j, "parsedAttrs", !0)
					}
				}
				return m
			}
			if(typeof a == "object") return this.each(function() {
				f.data(this, a)
			});
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
			if(arguments.length < d) return f.queue(this[0], a);
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
			while(g--)
				if(l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
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
			if(f.isFunction(a)) return this.each(function(b) {
				f(this).addClass(a.call(this, b, this.className))
			});
			if(a && typeof a == "string") {
				b = a.split(p);
				for(c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if(e.nodeType === 1)
						if(!e.className && b.length === 1) e.className = a;
						else {
							g = " " + e.className + " ";
							for(h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
							e.className = f.trim(g)
						}
				}
			}
			return this
		},
		removeClass: function(a) {
			var c, d, e, g, h, i, j;
			if(f.isFunction(a)) return this.each(function(b) {
				f(this).removeClass(a.call(this, b, this.className))
			});
			if(a && typeof a == "string" || a === b) {
				c = (a || "").split(p);
				for(d = 0, e = this.length; d < e; d++) {
					g = this[d];
					if(g.nodeType === 1 && g.className)
						if(a) {
							h = (" " + g.className + " ").replace(o, " ");
							for(i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
							g.className = f.trim(h)
						} else g.className = ""
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = typeof b == "boolean";
			if(f.isFunction(a)) return this.each(function(c) {
				f(this).toggleClass(a.call(this, c, this.className, b), b)
			});
			return this.each(function() {
				if(c === "string") {
					var e, g = 0,
						h = f(this),
						i = b,
						j = a.split(p);
					while(e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
				} else if(c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ",
				c = 0,
				d = this.length;
			for(; c < d; c++)
				if(this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e, g = this[0]; {
				if(!!arguments.length) {
					e = f.isFunction(a);
					return this.each(function(d) {
						var g = f(this),
							h;
						if(this.nodeType === 1) {
							e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
								return a == null ? "" : a + ""
							})), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
							if(!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
						}
					})
				}
				if(g) {
					c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
					if(c && "get" in c && (d = c.get(g, "value")) !== b) return d;
					d = g.value;
					return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
				}
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
					if(g < 0) return null;
					c = j ? g : 0, d = j ? g + 1 : i.length;
					for(; c < d; c++) {
						e = i[c];
						if(e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
							b = f(e).val();
							if(j) return b;
							h.push(b)
						}
					}
					if(j && !h.length && i.length) return f(i[g]).val();
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
				if(e && c in f.attrFn) return f(a)[c](d);
				if(typeof a.getAttribute == "undefined") return f.prop(a, c, d);
				i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
				if(d !== b) {
					if(d === null) {
						f.removeAttr(a, c);
						return
					}
					if(h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
					a.setAttribute(c, "" + d);
					return d
				}
				if(h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
				g = a.getAttribute(c);
				return g === null ? b : g
			}
		},
		removeAttr: function(a, b) {
			var c, d, e, g, h, i = 0;
			if(b && a.nodeType === 1) {
				d = b.toLowerCase().split(p), g = d.length;
				for(; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if(r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
					else if(!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
						var c = a.value;
						a.setAttribute("type", b), c && (a.value = c);
						return b
					}
				}
			},
			value: {
				get: function(a, b) {
					if(w && f.nodeName(a, "button")) return w.get(a, b);
					return b in a ? a.value : null
				},
				set: function(a, b, c) {
					if(w && f.nodeName(a, "button")) return w.set(a, b, c);
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
				if(f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
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
		G = function(
			a) {
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
							if(!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
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
							for(j in o) f.event.remove(a, j + b[h], c, d, !0);
							continue
						}
						p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						for(n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
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
					if(E.test(h + f.event.triggered)) return;
					h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
					if((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
					c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
					if(!e) {
						j = f.cache;
						for(l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
						return
					}
					c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
					if(p.trigger && p.trigger.apply(e, d) === !1) return;
					r = [
						[e, p.bindType || h]
					];
					if(!g && !p.noBubble && !f.isWindow(e)) {
						s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
						for(; m; m = m.parentNode) r.push([m, s]), n = m;
						n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
					}
					for(l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
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
					k, l, m, n, o, p, q, r, s, t, u;
				g[0] = c, c.delegateTarget = this;
				if(!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
					if(e && (!c.button || c.type !== "click")) {
						n = f(this), n.context = this.ownerDocument || this;
						for(m = c.target; m != this; m = m.parentNode || this)
							if(m.disabled !== !0) {
								p = {}, r = [], n[0] = m;
								for(k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
								r.length && j.push({
									elem: m,
									matches: r
								})
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
							if(h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
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
				if(a[f.expando]) return a;
				var d, e, g = a,
					h = f.event.fixHooks[a.type] || {},
					i = h.props ? this.props.concat(h.props) : this.props;
				a = f.Event(g);
				for(d = i.length; d;) e = i[--d], a[e] = g[e];
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
			if(!(this instanceof f.Event)) return new f.Event(a, b);
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
					if(!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
					return h
				}
			}
		}), f.support.submitBubbles || (f.event.special.submit = {
			setup: function() {
				if(f.nodeName(this, "form")) return !1;
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
				if(f.nodeName(this, "form")) return !1;
				f.event.remove(this, "._submit")
			}
		}), f.support.changeBubbles || (f.event.special.change = {
			setup: function() {
				if(z.test(this.nodeName)) {
					if(this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function(a) {
						a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
					}), f.event.add(this, "click._change", function(a) {
						this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
					});
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
				if(this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
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
					for(i in a) this.on(i, c, d, a[i], g);
					return this
				}
				d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
				if(e === !1) e = J;
				else if(!e) return this;
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
					for(var g in a) this.off(g, c, a[g]);
					return this
				}
				if(c === !1 || typeof c == "function") d = c, c = b;
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
				if(this[0]) return f.event.trigger(a, b, this[0], !0)
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
				while(d < b.length) b[d++].guid = c;
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
								} else if(m.filter(b, [j]).length > 0) {
									k = j;
									break
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
				if(d.nodeType !== 1 && d.nodeType !== 9) return [];
				if(!b || typeof b != "string") return e;
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
				if(w.length > 1 && p.exec(b))
					if(w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
					else {
						j = o.relative[w[0]] ? [d] : m(w.shift(), d);
						while(w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
					}
				else {
					!f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
					if(d) {
						n = f ? {
							expr: w.pop(),
							set: s(f)
						} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
						while(w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
					} else k = w = []
				}
				k || (k = j), k || m.error(q || b);
				if(g.call(k) === "[object Array]")
					if(!u) e.push.apply(e, k);
					else if(d && d.nodeType === 1)
					for(t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
				else
					for(t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
				else s(k, e);
				l && (m(l, h, e, f), m.uniqueSort(e));
				return e
			};
			m.uniqueSort = function(a) {
				if(u) {
					h = i, a.sort(u);
					if(h)
						for(var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
				}
				return a
			}, m.matches = function(a, b) {
				return m(a, null, null, b)
			}, m.matchesSelector = function(a, b) {
				return m(b, null, null, [a]).length > 0
			}, m.find = function(a, b, c) {
				var d, e, f, g, h, i;
				if(!a) return [];
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
					for(h in o.filter)
						if((f = o.leftMatch[h].exec(a)) != null && f[2]) {
							k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
							if(l.substr(l.length - 1) === "\\") continue;
							s === r && (r = []);
							if(o.preFilter[h]) {
								f = o.preFilter[h](f, s, d, r, e, t);
								if(!f) g = i = !0;
								else if(f === !0) continue
							}
							if(f)
								for(n = 0;
									(j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
							if(i !== b) {
								d || (s = r), a = a.replace(o.match[h], "");
								if(!g) return [];
								break
							}
						}
					if(a === q)
						if(g == null) m.error(a);
						else break;
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
							if(typeof a.textContent == "string") return a.textContent;
							if(typeof a.innerText == "string") return a.innerText.replace(k, "");
							for(a = a.firstChild; a; a = a.nextSibling) e += n(a)
						} else if(d === 3 || d === 4) return a.nodeValue
					} else
						for(b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
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
							for(var f = 0, g = a.length, h; f < g; f++)
								if(h = a[f]) {
									while((h = h.previousSibling) && h.nodeType !== 1);
									a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
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
								for(; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
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
								for(var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
								return c.length === 0 ? null : c
							}
						},
						TAG: function(a, b) {
							if(typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
						}
					},
					preFilter: {
						CLASS: function(a, b, c, d, e, f) {
							a = " " + a[1].replace(j, "") + " ";
							if(f) return a;
							for(var g = 0, h;
								(h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
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
							} else a[2] && m.error(a[0]);
							a[0] = e++;
							return a
						},
						ATTR: function(a, b, c, d, e, f) {
							var g = a[1] = a[1].replace(j, "");
							!f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
							return a
						},
						PSEUDO: function(b, c, d, e, f) {
							if(b[1] === "not")
								if((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
								else {
									var g = m.filter(b[3], c, d, !0 ^ f);
									d || e.push.apply(e, g);
									return !1
								}
							else if(o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
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
							if(f) return f(a, c, b, d);
							if(e === "contains") return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
							if(e === "not") {
								var g = b[3];
								for(var h = 0, i = g.length; h < i; h++)
									if(g[h] === a) return !1;
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
									while(l = l.previousSibling)
										if(l.nodeType === 1) return !1;
									if(k === "first") return !0;
									l = a;
								case "last":
									while(l = l.nextSibling)
										if(l.nodeType === 1) return !1;
									return !0;
								case "nth":
									c = b[2], e = b[3];
									if(c === 1 && e === 0) return !0;
									f = b[0], g = a.parentNode;
									if(g && (g[d] !== f || !a.nodeIndex)) {
										i = 0;
										for(l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
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
							if(f) return f(a, c, b, d)
						}
					}
				},
				p = o.match.POS,
				q = function(a, b) {
					return "\\" + (b - 0 + 1)
				};
			for(var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
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
					if(g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
					else if(typeof a.length == "number")
						for(var e = a.length; c < e; c++) d.push(a[c]);
					else
						for(; a[c]; c++) d.push(a[c]);
					return d
				}
			}
			var u, v;
			c.documentElement.compareDocumentPosition ? u = function(a, b) {
					if(a === b) {
						h = !0;
						return 0
					}
					if(!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
					return a.compareDocumentPosition(b) & 4 ? -1 : 1
				} : (u = function(a, b) {
					if(a === b) {
						h = !0;
						return 0
					}
					if(a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
					var c, d, e = [],
						f = [],
						g = a.parentNode,
						i = b.parentNode,
						j = g;
					if(g === i) return v(a, b);
					if(!g) return -1;
					if(!i) return 1;
					while(j) e.unshift(j), j = j.parentNode;
					j = i;
					while(j) f.unshift(j), j = j.parentNode;
					c = e.length, d = f.length;
					for(var k = 0; k < c && k < d; k++)
						if(e[k] !== f[k]) return v(e[k], f[k]);
					return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
				}, v = function(a, b, c) {
					if(a === b) return c;
					var d = a.nextSibling;
					while(d) {
						if(d === b) return -1;
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
							for(var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
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
									if(h[1]) return s(e.getElementsByTagName(b), f);
									if(h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
								}
								if(e.nodeType === 9) {
									if(b === "body" && e.body) return s([e.body], f);
									if(h && h[3]) {
										var i = e.getElementById(h[3]);
										if(!i || !i.parentNode) return s([], f);
										if(i.id === h[3]) return s([i], f)
									}
									try {
										return s(e.querySelectorAll(b), f)
									} catch(j) {}
								} else if(e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
									var k = e,
										l = e.getAttribute("id"),
										n = l || d,
										p = e.parentNode,
										q = /^\s*[+~]/.test(b);
									l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
									try {
										if(!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
									} catch(r) {} finally {
										l || k.removeAttribute("id")
									}
								}
							}
							return a(b, e, f, g)
						};
						for(var e in a) m[e] = a[e];
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
							if(!m.isXML(a)) try {
								if(e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
									var f = b.call(a, c);
									if(f || !d || a.document && a.document.nodeType !== 11) return f
								}
							} catch(g) {}
							return m(c, null, null, [a]).length > 0
						}
					}
				}(),
				function() {
					var a = c.createElement("div");
					a.innerHTML = "<div class='test e'></div><div class='test'></div>";
					if(!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
						a.lastChild.className = "e";
						if(a.getElementsByClassName("e").length === 1) return;
						o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
							if(typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
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
				while(d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
				a = o.relative[a] ? a + "*" : a;
				for(var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
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
			if(typeof a != "string") return f(a).filter(function() {
				for(c = 0, d = b.length; c < d; c++)
					if(f.contains(b[c], this)) return !0
			});
			var e = this.pushStack("", "find", a),
				g, h, i;
			for(c = 0, d = this.length; c < d; c++) {
				g = e.length, f.find(a, this[c], e);
				if(c > 0)
					for(h = g; h < e.length; h++)
						for(i = 0; i < g; i++)
							if(e[i] === e[h]) {
								e.splice(h--, 1);
								break
							}
			}
			return e
		},
		has: function(a) {
			var b = f(a);
			return this.filter(function() {
				for(var a = 0, c = b.length; a < c; a++)
					if(f.contains(this, b[a])) return !0
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
					for(d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
						selector: a[d],
						elem: g,
						level: h
					});
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
					if(!g || !g.ownerDocument || g === b || g.nodeType === 11) break
				}
			}
			c = c.length > 1 ? f.unique(c) : c;
			return this.pushStack(c, "closest", a)
		},
		index: function(a) {
			if(!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
			if(typeof a == "string") return f.inArray(this[0], f(a));
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
			while(g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
			return e
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			var e = 0;
			for(; a; a = a[c])
				if(a.nodeType === 1 && ++e === b) break;
			return a
		},
		sibling: function(a, b) {
			var c = [];
			for(; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
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
			if(f.isFunction(a)) return this.each(function(b) {
				f(this).wrapAll(a.call(this, b))
			});
			if(this[0]) {
				var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					var a = this;
					while(a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if(f.isFunction(a)) return this.each(function(b) {
				f(this).wrapInner(a.call(this, b))
			});
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
			if(this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if(arguments.length) {
				var a = f
					.clean(arguments);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if(this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if(arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, f.clean(arguments));
				return a
			}
		},
		remove: function(a, b) {
			for(var c = 0, d;
				(d = this[c]) != null; c++)
				if(!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty: function() {
			for(var a = 0, b;
				(b = this[a]) != null; a++) {
				b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
				while(b.firstChild) b.removeChild(b.firstChild)
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
				if(a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
				if(typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Y, "<$1></$2>");
					try {
						for(; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
						c = 0
					} catch(g) {}
				}
				c && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function(a) {
			if(this[0] && this[0].parentNode) {
				if(f.isFunction(a)) return this.each(function(b) {
					var c = f(this),
						d = c.html();
					c.replaceWith(a.call(this, b, d))
				});
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
			if(!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
				f(this).domManip(a, c, d, !0)
			});
			if(f.isFunction(j)) return this.each(function(e) {
				var g = f(this);
				a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
			});
			if(this[0]) {
				i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
					fragment: i
				} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
				if(g) {
					c = c && f.nodeName(g, "tr");
					for(var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
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
			var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
			if((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
				bk(a, h), d = bl(a), e = bl(h);
				for(g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
			}
			if(b) {
				bj(a, h);
				if(c) {
					d = bl(a), e = bl(h);
					for(g = 0; d[g]; ++g) bj(d[g], e[g])
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
				if(!l) continue;
				if(typeof l == "string")
					if(!_.test(l)) l = b.createTextNode(l);
					else {
						l = l.replace(Y, "<$1></$2>");
						var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
							n = bg[m] || bg._default,
							o = n[0],
							p = b.createElement("div"),
							q = bh.childNodes,
							r;
						b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
						while(o--) p = p.lastChild;
						if(!f.support.tbody) {
							var s = $.test(l),
								t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
							for(i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
						}!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
					}
				var u;
				if(!f.support.appendChecked)
					if(l[0] && typeof(u = l.length) == "number")
						for(i = 0; i < u; i++) bn(l[i]);
					else bn(l);
				l.nodeType ? j.push(l) : j = f.merge(j, l)
			}
			if(d) {
				g = function(a) {
					return !a.type || be.test(a.type)
				};
				for(k = 0; j[k]; k++) {
					h = j[k];
					if(e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
					else {
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
				if(i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
				c = i[f.expando];
				if(c) {
					b = d[c];
					if(b && b.events) {
						for(var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
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
					if(k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
					return j[c]
				}
				h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
				if(d == null || h === "number" && isNaN(d)) return;
				h === "number" && !f.cssNumber[i] && (d += "px");
				if(!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
					j[c] = d
				} catch(l) {}
			}
		},
		css: function(a, c, d) {
			var e, g;
			c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
			if(g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
			if(by) return by(a, c)
		},
		swap: function(a, b, c) {
			var d = {},
				e, f;
			for(f in b) d[f] = a.style[f], a.style[f] = b[f];
			e = c.call(a);
			for(f in b) a.style[f] = d[f];
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
				if(c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function() {
					return bB(a, b, d)
				})
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
				if(d && !d.filter) return
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
				for(d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
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
			if(typeof a != "string" && bR) return bR.apply(this, arguments);
			if(!this.length) return this;
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
							if(y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
							if(z = v.getResponseHeader("Etag")) f.etag[k] = z
						}
						if(a === 304) w = "notmodified", o = !0;
						else try {
							r = cb(d, x), w = "success", o = !0
						} catch(A) {
							w = "parsererror", u = A
						}
					} else {
						u = w;
						if(!w || a) w = "error", a < 0 && (a = 0)
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
				t, u, v = {
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
								while(c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
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
					if(s < 2)
						for(b in a) j[b] = [j[b], a[b]];
					else b = a[v.status], v.then(b, b)
				}
				return this
			}, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
			if(s === 2) return !1;
			t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
			if(!d.hasContent) {
				d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
				if(d.cache === !1) {
					var x = f.now(),
						y = d.url.replace(bP, "$1_=" + x);
					d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
				}
			}(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
			for(u in d.headers) v.setRequestHeader(u, d.headers[u]);
			if(d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
				v.abort();
				return !1
			}
			for(u in {
					success: 1,
					error: 1,
					complete: 1
				}) v[u](d[u]);
			p = bZ(bT, d, c, v);
			if(!p) w(-1, "No Transport");
			else {
				v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
					v.abort("timeout")
				}, d.timeout));
				try {
					s = 1, p.send(l, w)
				} catch(z) {
					if(s < 2) w(-1, z);
					else throw z
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
			if(f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
				e(this.name, this.value)
			});
			else
				for(var g in a) b_(g, a[g], c, e);
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
						if(c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
					}, e.insertBefore(d, e.firstChild)
				},
				abort: function() {
					d && d.onload(0, 1)
				}
			}
		}
	});
	var ce = a.ActiveXObject ? function() {
			for(var a in cg) cg[a](0, 1)
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
						if(c.xhrFields)
							for(j in c.xhrFields) h[j] = c.xhrFields[j];
						c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
						try {
							for(j in e) h.setRequestHeader(j, e[j])
						} catch(k) {}
						h.send(c.hasContent && c.data || null), d = function(a, e) {
							var j, k, l, m, n;
							try {
								if(d && (e || h.readyState === 4)) {
									d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
									if(e) h.readyState !== 4 && h.abort();
									else {
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
		co, cp = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		cq;
	f.fn.extend({
		show: function(a, b, c) {
			var d, e;
			if(a || a === 0) return this.animate(ct("show", 3), a, b, c);
			for(var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
			for(g = 0; g < h; g++) {
				d = this[g];
				if(d.style) {
					e = d.style.display;
					if(e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
				}
			}
			return this
		},
		hide: function(a, b, c) {
			if(a || a === 0) return this.animate(ct("hide", 3), a, b, c);
			var d, e, g = 0,
				h = this.length;
			for(; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
			for(g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
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
					g, h, i, j, k, l, m, n, o, p, q;
				b.animatedProperties = {};
				for(i in a) {
					g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
					if((k = f.cssHooks[g]) && "expand" in k) {
						l = k.expand(a[g]), delete a[g];
						for(i in l) i in a || (a[i] = l[i])
					}
				}
				for(g in a) {
					h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
					if(h === "hide" && d || h === "show" && !d) return b.complete.call(this);
					c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
				}
				b.overflow != null && (this.style.overflow = "hidden");
				for(i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
				return !0
			}
			var e = f.speed(b, c, d);
			if(f.isEmptyObject(a)) return this.each(e.complete, [!1]);
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
				if(a == null)
					for(b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
				else g[b = a + ".run"] && g[b].stop && h(this, g, b);
				for(b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
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
			if(d.queue == null || d.queue === !0) d.queue = "fx";
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
				return -Math.cos(a * Math.PI) / 2 + .5
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
			if(this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
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
				for(b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
				if(g) {
					i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
						h.style["overflow" + b] = i.overflow[a]
					}), i.hide && f(h).hide();
					if(i.hide || i.show)
						for(b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
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
			for(; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
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
		if(!d || !f.contains(c, a)) return d ? {
			top: d.top,
			left: d.left
		} : {
			top: 0,
			left: 0
		};
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
			if(f.support.fixedPosition && j.position === "fixed") break;
			d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
		}
		if(j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
		f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
		return {
			top: k,
			left: l
		}
	}, f.fn.offset = function(a) {
		if(arguments.length) return a === b ? this : this.each(function(b) {
			f.offset.setOffset(this, a, b)
		});
		var c = this[0],
			d = c && c.ownerDocument;
		if(!d) return null;
		if(c === d.body) return f.offset.bodyOffset(c);
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
			if(!this[0]) return null;
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
				while(a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
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
				if(g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
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
					if(i[d] >= i[e]) return i[d];
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
console.log(
	'___' + '/\\\\\\\\' + '____________' + '/\\\\\\\\' + '______' + '/\\\\\\\\\\\\\\\\\\\\\\' + '_________' + '/\\\\\\\\\\\\\\\\\\\\\\' + '_' + '\n' +
	'___' + '\\/\\\\\\\\\\\\' + '________' + '/\\\\\\\\\\\\' + '____' + '/\\\\\\/////////\\\\\\' + '______' + '\\/////\\\\\\///' + '__' + '\n' +
	'____' + '\\/\\\\\\//\\\\\\' + '____' + '/\\\\\\//\\\\\\' + '___' + '\\//\\\\\\' + '______' + '\\///' + '___________' + '\\/\\\\\\' + '_____' + '\n' +
	'_____' + '\\/\\\\\\\\///\\\\\\/\\\\\\/' + '_' + '\\/\\\\\\' + '____' + '\\////\\\\\\' + '__________________' + '\\/\\\\\\' + '_____' + '\n' +
	'______' + '\\/\\\\\\' + '__' + '\\///\\\\\\/' + '___' + '\\/\\\\\\' + '_______' + '\\////\\\\\\' + '_______________' + '\\/\\\\\\' + '_____' + '\n' +
	'_______' + '\\/\\\\\\' + '____' + '\\///' + '_____' + '\\/\\\\\\' + '__________' + '\\////\\\\\\' + '____________' + '\\/\\\\\\' + '_____' + '\n' +
	'________' + '\\/\\\\\\' + '_____________' + '\\/\\\\\\' + '___' + '/\\\\\\' + '______' + '\\//\\\\\\' + '____' + '/\\\\\\' + '___' + '\\/\\\\\\' + '_____' + '\n' +
	'_________' + '\\/\\\\\\' + '_____________' + '\\/\\\\\\' + '__' + '\\///\\\\\\\\\\\\\\\\\\\\\\/' + '____' + '\\//\\\\\\\\\\\\\\\\\\' + '______' + '\n' +
	'__________' + '\\///' + '______________' + '\\///' + '_____' + '\\///////////' + '_______' + '\\/////////' + '_______' + '\n')

function close_tip() {
	$('#windown-close').click();
}

function show_info() {
	$('#dr_getmission_box1').fadeIn();
}
$(function() {

	$("#exitaddrbox1").click(function() {
		$("#dr_getmission_box1").fadeOut();
	});
	var pass = 1;
	$("#submitaddrbox1").click(function() {
		if(pass != 1) {
			return false;
		}
		pass = 0;
		var prom = 1;
		$.each($(".addrinputw1 input"), function() {
			if($(this).val() == "" || $(this).val() == " " || $(this).val() == "undefined") {
				prom = 0;
			}
		});

		if(prom == 1) {

			var real_name = $("#addr_info11").val();
			var mobile = $("#addr_info22").val();
			var qq = $("#addr_info33").val();
			var weixin = $("#addr_info44").val();
			var address = $("#addr_info55").val();

			var id = 151;

			$.post("/ajax/join_task.php", {
				id: id,
				act: 'join_task',
				real_name: real_name,
				mobile: mobile,
				qq: qq,
				weixin: weixin,
				address: address
			}, function(data) {

				if(data.code == 1) {
					$("#dr_getmission_box1").fadeOut();
					location.href = "http://i.meishi.cc/daren_task/dr_postwz.php?id=151";

				} else {
					alert(data.msg);
				}

				pass = 1;
			}, 'json');
		} else {
			alert("璇锋纭～鍐欐墍鏈夎仈绯绘柟寮弤");
			pass = 1;
		}
	});

});

function guidGenerator() {
	var S4 = function() {
		return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return(S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function loginreg(is_login) {
	Alert("鐧诲綍缇庨鏉�", "iframe:/ajax/login.php?t=" + is_login + '&redirect=' + encodeURIComponent(location.href), "700", "300", "false", "", "true", "img");
}
var is_req_login_jifen = 0;
var is_req_sign_in = 0;

function sign_in(t) {
	if(is_req_sign_in == 0) {
		is_req_sign_in = 1;
		$.post("/ajax/sign_in.php", {}, function(data) {
			is_req_sign_in = 0;
			$.post("/ajax/login_jifen.php", {}, function(data) {
				$('.qdbox').html(data);
			});
		});
	}
}

function jifenpage_sign_in(t) {
	$.post("/ajax/sign_in.php", {}, function(data, status) {
		if(data.add_jifen > 0) {
			$('.qdbtn').html('浠婃棩宸茬鍒�,娆㈣繋鍏変复!');
			msjLittletips("浠婃棩绛惧埌,绉垎+" + data.add_jifen);
			$("#jifen_num").html(data.jifen);
		}
	}, 'json');
}

function ztlistMoveleft() {
	$("#ztlist_style1_item_ww").animate({
		"margin-left": "0px"
	}, 600, function() {
		$("#ztlist_style1_item_ww .ztlist_style1_item_w1").last().prependTo($("#ztlist_style1_item_ww"));
		$("#ztlist_style1_item_ww").css("margin-left", "-988px");
		$("#index_cd_leftarrow_mask").hide();
		index_cd_cur = index_cd_cur - 1;
		if(index_cd_cur == -1) {
			index_cd_cur = 2;
		}
		setztlistCur();
	});
}

function ztlistMoveright() {
	$("#ztlist_style1_item_ww").animate({
		"margin-left": "-1976px"
	}, 600, function() {
		$("#ztlist_style1_item_ww .ztlist_style1_item_w1").first().appendTo($("#ztlist_style1_item_ww"));
		$("#ztlist_style1_item_ww").css("margin-left", "-988px");
		$("#index_cd_rightarrow_mask").hide();
		index_cd_cur = index_cd_cur + 1;
		if(index_cd_cur == 3) {
			index_cd_cur = 0;
		}
		setztlistCur();
	});

}

function setztlistCur() {
	$("#ztlist_cur span").removeClass("current");
	$("#ztlist_cur span").eq(parseInt(index_cd_cur)).addClass("current");
}

var index_cd_move = "";
var index_cd_cur = 1;

$(function() {

	if($('#ztlist_style1_item_w').length > 0) {
		index_cd_move = setInterval(function() {
			ztlistMoveright();
		}, 5000);
		$("#index_cd_leftarrow").click(function() {
			$("#index_cd_leftarrow_mask").show();
			ztlistMoveleft();
		});
		$("#index_cd_rightarrow").click(function() {
			$("#index_cd_rightarrow_mask").show();
			ztlistMoveright();
		});
		$("#index_cd_leftarrow").mouseenter(function() {
			clearInterval(index_cd_move);
		});
		$("#index_cd_leftarrow").mouseleave(function() {
			index_cd_move = setInterval(function() {
				ztlistMoveright();
			}, 5000);
		});
		$("#index_cd_rightarrow").mouseenter(function() {
			clearInterval(index_cd_move);
		});
		$("#index_cd_rightarrow").mouseleave(function() {
			index_cd_move = setInterval(function() {
				ztlistMoveright();
			}, 5000);
		});
		$("#ztlist_style1_item_w").mouseenter(function() {
			clearInterval(index_cd_move);
		});
		$("#ztlist_style1_item_w").mouseleave(function() {
			index_cd_move = setInterval(function() {
				ztlistMoveright();
			}, 5000);
		});
	}
	$("#userinfo_w").hover(function() {
		$(this).addClass("userinfo_w_hover");
	}, function() {
		$(this).removeClass("userinfo_w_hover");
	});
	$("#qd_inindex").hover(function() {
		$(this).addClass("qd_hover");
		if(is_req_login_jifen == 0) {
			$('.qdbox').html("<p style=\"text-align:center;padding:30px 0;\">鍔犺浇涓�...</p>");
			is_req_login_jifen = 1;
			$.post("/ajax/login_jifen.php", {}, function(data) {
				$('.qdbox').html(data);
			});
		}
	}, function() {
		$(this).removeClass("qd_hover");
	});
	$("#main_nav li").hover(function() {
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
	}, function() {
		$(this).removeClass("on");
	});
	$("#erweima_t").hover(function() {
		$(this).addClass("erweima_t_hover");
		$("#ewmbox").show();
	}, function() {
		$(this).removeClass("erweima_t_hover");
		$("#ewmbox").hide();
	});
	$("#ewmbox").hover(function() {
		$(this).show();
		$("#erweima_t").addClass("erweima_t_hover");
	}, function() {
		$(this).hide();
		$("#erweima_t").removeClass("erweima_t_hover");
	});
	$("#msjtop_loginbtn").bind("click", function() {
		loginreg(1);
	});
	$("#msjtop_registerbtn").bind("click", function() {
		loginreg(0);
	});
	$("#ztlist_style1_index li").hover(function() {
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
	}, function() {});
	$("#index_forum_right_list li").hover(function() {
		$(this).find("span").stop().slideDown();
	}, function() {
		$(this).find("span").stop().slideUp();
	});
	$(".index_sc_dd").hover(function() {
		$(this).siblings().removeClass("index_sc_dd_current");
		$(this).addClass("index_sc_dd_current");
	}, function() {});
	$("#sccon_right").mouseenter(function() {
		$(this).find(".scc_masker").fadeOut();
		$(this).prev().find(".scc_masker").fadeIn();
		$(this).stop().animate({
			width: "718px"
		}, 600, function() {});
	});
	$("#sccon_left").mouseenter(function() {
		$(this).next().stop().animate({
			width: "232px"
		}, 600, function() {});
		$(this).next().find(".scc_masker").fadeIn();
		$(this).find(".scc_masker").fadeOut();
	});
	$(".index_healthitem li").hover(function() {
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
	}, function() {});
	$("#index_zzw_main").mouseenter(function() {
		$("#zzw_prev_btn").trigger("mouseenter");
		$("#zzw_next_btn").trigger("mouseenter");
		$("#timedot_c").show();
	});
	$("#index_zzw_main").mouseleave(function() {
		$("#zzw_prev_btn").trigger("mouseleave");
		$("#zzw_next_btn").trigger("mouseleave");
		$("#timedot_c").hide();
	});
	$("#maskleft").mouseenter(function() {
		$("#zzw_prev_btn").trigger("mouseenter");
		$("#zzw_next_btn").trigger("mouseenter");
		$("#timedot_c").show();
	});
	$("#maskleft").mouseleave(function() {
		$("#zzw_prev_btn").trigger("mouseleave");
		$("#zzw_next_btn").trigger("mouseleave");
		$("#timedot_c").hide();
	});
	$("#maskright").mouseenter(function() {
		$("#zzw_prev_btn").trigger("mouseenter");
		$("#zzw_next_btn").trigger("mouseenter");
		$("#timedot_c").show();
	});
	$("#maskright").mouseleave(function() {
		$("#zzw_prev_btn").trigger("mouseleave");
		$("#zzw_next_btn").trigger("mouseleave");
		$("#timedot_c").hide();
	});
	$("#index_timelinebox").mouseleave(function() {
		$("#zzw_prev_btn").trigger("mouseleave");
		$("#zzw_next_btn").trigger("mouseleave");
		$("#timedot_c").hide();
	});
	bindtimex();
	$("#index_zzw .prev_btn").click(function() {
		$(".zzw_item_3 h3").hide();
		$("#index_zzw_main").animate({
			left: '-990px'
		}, "600", function() {

			$("#index_zzw_main .zzw_item").last().prependTo($("#index_zzw_main"));

			$.each($("#index_zzw_main .zzw_item"), function() {
				var _this = $(this);
				var po = parseInt($(this).attr("po"));
				if(po == 5) {
					po = 0
				}
				$(this).removeClass().addClass("zzw_item").addClass("zzw_item_" + String(po + 1)).attr("po", String(po + 1));
				$("#zzw_prev_btn").trigger("mouseover");

			});
			var i = $("#index_timelinebox span.timex_current");
			if(i.prev().length > 0) {
				i.removeClass("timex_current").prev().addClass("timex_current");
			} else {
				i.removeClass("timex_current");
				$("#index_timelinebox span.timex").last().addClass("timex_current");
			}
			bindtimex();
			$("#index_zzw_main").mouseenter();
			$(".zzw_item h3").hide();
			$(".zzw_item_3 h3").fadeIn();
			$("#index_zzw_main").css("left", "-1980px");

		});
	});
	$("#index_zzw .next_btn").click(function() {
		$(".zzw_item_3 h3").hide();
		$("#index_zzw_main").animate({
			left: '-2970px'
		}, "600", function() {

			$("#index_zzw_main .zzw_item").first().appendTo($("#index_zzw_main"));

			$.each($("#index_zzw_main .zzw_item"), function() {
				var _this = $(this);
				var po = parseInt($(this).attr("po"));
				if(po == 1) {
					po = 6
				}
				$(this).removeClass().addClass("zzw_item").addClass("zzw_item_" + String(po - 1)).attr("po", String(po - 1));
				$("#zzw_next_btn").trigger("mouseover");
			});
			var i = $("#index_timelinebox span.timex_current");
			if(i.next().length > 0) {
				i.removeClass("timex_current").next().addClass("timex_current");
			} else {
				i.removeClass("timex_current");
				$("#index_timelinebox span.timex").first().addClass("timex_current");
			}
			bindtimex();
			$("#index_zzw_main").mouseenter();
			$(".zzw_item h3").hide();
			$(".zzw_item_3 h3").fadeIn();
			$("#index_zzw_main").css("left", "-1980px");

		});
	});
	$("#zzw_prev_btn").hover(function() {
		var now = parseInt($(".zzw_item_3").attr("c"));
		if(now == 1) {
			now = 6
		}
		$(this).css("background-position", "0px " + (6 - (now - 1) * 74) + "px");
	}, function() {
		$(this).css("background-position", "0px 6px");
	});
	$("#zzw_next_btn").hover(function() {
		var now = parseInt($(".zzw_item_3").attr("c"));
		if(now == 5) {
			now = 0
		}
		$(this).css("background-position", "-174px " + (6 - (now + 1) * 74) + "px");
	}, function() {
		$(this).css("background-position", "-174px 6px");
	});
	$(".followTa,.followTaed").click(function() {
		var _this = $(this);
		var uid = $(this).attr("uid");
		$.post("/ajax/add_follow.php", {
				uid: uid
			},
			function(data) {
				if(data != '') {
					var obj = eval('(' + data + ')');
					if(obj.status_code == -2) {
						alert(obj.result);
					} else if(obj.status_code == -1) {
						location.href = "http://i.meishi.cc/login.php?redirect=" + encodeURIComponent(location.href);
					} else if(obj.status_code == 0) {
						_this.removeClass("followTa").addClass("followTaed");
					} else if(obj.status_code == 1) {
						_this.removeClass("followTaed").addClass("followTa");
					}
				}
			});
	});
	$(".addToFav").click(function() {
		var _this = $(this);
		var uid = $(this).attr("uid");
		$.post("beAFan.php", {
				uid: uid
			},
			function(data) {
				alert("鏀惰棌鎴愬姛锛�");
				_this.removeClass("addToFav").addClass("addToFaved");
				_this.html("宸叉敹钘�");
				_this.unbind();
			});
	});
	$("#cp_com_mask span").click(function() {
		var _this = $(this);
		_this.siblings().removeClass("current");
		_this.addClass("current");
		var type = _this.attr("type");
		$("#cp_com_type").val(type);
		//alert($("#cp_com_type").val());
		var t = $("#cp_com_textarea").val();
		var t_q = t.substring(0, 8);
		if(t_q == "[鎻愰棶姹傝В]: " || t_q == "[闅忔剰鍚愭Ы]: ") {
			t = t.substring(8, t.length);
		}

		$("#cp_com_textarea").val("[" + _this.html() + "]: " + t);
		$("#cp_com_textarea").focus();
		moveEnd($("#cp_com_textarea").get(0));
		// $("#cp_com_submit").removeClass("submit_off");
		// $("#cp_com_mask").hide();
	});
	$("#cp_com_textarea").keyup(function() {
		var _this = $(this);

		//alert(_this.val());
		if(_this.val() == "") {
			$("#cp_com_mask span").removeClass("current");
			$("#cp_com_mask span").eq(0).addClass("current");
			var type = $("#cp_com_mask span").eq(0).attr("type");
			$("#cp_com_type").val(type);
			// $("#cp_com_mask").show();
			// $("#cp_com_submit").addClass("submit_off");
			// _this.blur();
		}
	});
	bind_re();

	setTimeout(function() {
		bind_scrollNews(".similar_cp", 1, 1, 600);
	}, 5000);
});

function moveEnd(obj) {
	obj.focus();
	var len = obj.value.length;
	if(document.selection) {
		var sel = obj.createTextRange();
		sel.moveStart('character', len);
		sel.collapse();
		sel.select();
	} else if(typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
		obj.selectionStart = obj.selectionEnd = len;
	}
}

function bind_re() {
	$(".re_slideUp").unbind();
	$(".re_slideUp").click(function() {
		var _this = $(this);
		_this.parents(".info").next().slideUp(function() {
			_this.html("灞曞紑鍥炲");
			_this.removeClass("re_slideUp").addClass("re_slideDown");
			bind_re();
		});
	});
	$(".re_slideDown").unbind();
	$(".re_slideDown").click(function() {
		var _this = $(this);
		_this.parents(".info").next().slideDown(function() {
			_this.html("鏀惰捣鍥炲");
			_this.removeClass("re_slideDown").addClass("re_slideUp");
			_this.parents(".info").next().find("textarea").focus();
			bind_re();
		});
	});
	$(".re_start").unbind();
	$(".re_start").click(function() {
		var _this = $(this);
		_this.parents(".info").next().find("form").css("paddingTop", "20px");
		_this.parents(".info").next().find("form").show();
		_this.parents(".info").next().slideDown(function() {
			_this.html("鏀惰捣");
			_this.removeClass("re_start").addClass("re_slideUp1");
			_this.parents(".info").next().find("textarea").focus();
			bind_re();
		});
	});
	$(".re_slideUp1").unbind();
	$(".re_slideUp1").click(function() {
		var _this = $(this);
		_this.parents(".info").next().slideUp(function() {
			_this.html("鍥炲");
			_this.removeClass("re_slideUp1").addClass("re_start");
			bind_re();
		});
	});
	$(".saybtn").toggle(function() {
		var _this = $(this);
		_this.html("鏀惰捣");
		_this.addClass("saybtn_ed");
		_this.next().slideDown(function() {

			_this.next().find("textarea").focus();
		});
	}, function() {
		var _this = $(this);
		_this.html("鎴戜篃璇翠竴鍙�");
		_this.removeClass("saybtn_ed");
		$(this).next().slideUp(function() {

		});
	});
}

function bind_scrollNews(obj, flag, step, time) {
	var $this = $(obj);
	if($this.length > 0) {
		var scrollTimer;
		$this.hover(function() {
				clearInterval(scrollTimer)
			},
			function() {
				scrollTimer = setInterval(function() {
						scrollNews($this, flag, step, time)
					},
					3000)
			}).trigger("mouseleave")
	}
}

function scrollNews(obj, flag, step, time) {
	var $self = obj.find(".similar_cp_w");
	var lineHeight = $self.find("div:first").width() + 30;
	//var w = 988+20;
	if(flag == 1) {
		$self.animate({
				"marginLeft": -lineHeight + "px"
			},
			time,
			function() {
				$self.css({
					marginLeft: "-10px"
				}).find("div:first").appendTo($self)
			})
	}
}
$(function() {
	var ie6 = $.browser.msie && ($.browser.version == "6.0") && !$.support.style;
	if($("#main_search").attr("slideUp") == 1 && !ie6) {
		$("#main_search").hover(function() {
			$(this).stop().animate({
				bottom: "0px",
				paddingTop: "0px"
			}, 300, function() {
				$(this).find("input.text").focus();
			});
			$("#bottom_back_top_top").stop().animate({
				bottom: "6px"
			}, 300, function() {});

		}, function() {
			$(this).stop().animate({
				bottom: "-56px",
				paddingTop: "9px"
			}, 300, function() {});
			$("#bottom_back_top_top").animate({
				bottom: "20px"
			}, 300, function() {});
		});
	}
	if($("#searchslideup_btn").length > 0) {
		$("#searchslideup_btn").click(function() {
			if($("#main_search").attr("slideUp") == 1) {

				$(this).css("background-position", "0px -0px");
				$("#main_search").unbind();
				$("#main_search").attr("slideUp", "0");
				setCookies('slideUp', 0, 720, 'h', '/');
				var a = getCookie("slideUp");
			} else {

				$(this).css("background-position", "0px -48px");
				$("#main_search").stop().animate({
					bottom: "-56px",
					paddingTop: "9px"
				}, 300, function() {
					$("#bottom_back_top_top").stop().animate({
						bottom: "20px"
					}, 300, function() {});
					$("#main_search").hover(function() {
						$(this).stop().animate({
							bottom: "0px",
							paddingTop: "0px"
						}, 300, function() {});
						$("#bottom_back_top_top").stop().animate({
							bottom: "6px"
						}, 300, function() {});
						$(this).find("input.text").focus();
					}, function() {
						$(this).stop().animate({
							bottom: "-56px",
							paddingTop: "9px"
						}, 300, function() {});
						$("#bottom_back_top_top").animate({
							bottom: "20px"
						}, 300, function() {});
					});
				});
				$("#main_search").attr("slideUp", "1");
				setCookies('slideUp', 1, 720, 'h', '/');
				var a = getCookie("slideUp");
			}
		});
	}

	var show_delay;
	var scroll_div_left = parseInt((document.body.offsetWidth - 990) / 2) + 990;
	$("#bottom_back_top_top").css('left', scroll_div_left);
	$(window).resize(function() {
		scroll_div_left = parseInt((document.body.offsetWidth - 990) / 2) + 990;
		$("#bottom_back_top_top").css('left', scroll_div_left)
	});
	reshow(scroll_div_left, show_delay);
	$(window).scroll(function() {

		if($(window).scrollTop() > 300) {
			$("#bottom_back_top_top").fadeIn();
		} else {
			$("#bottom_back_top_top").fadeOut();
		}
	});
});

function reshow(marign_l, show_d) {
	$("#bottom_back_top_top").css("left", marign_l);
	if(show_d) window.clearTimeout(show_d);
	scroll_div_left = parseInt((document.body.offsetWidth - 990) / 2) + 990;
	show_d = setTimeout(function() {
			reshow(scroll_div_left)
		},
		500)
}
$(function() {
	$("#xbyjfk").toggle(function() {
		$("#doulike").animate({
			width: "300px"
		}, 300, function() {});
	}, function() {
		$("#doulike").animate({
			width: "48px"
		}, 300, function() {});
	});
	$("#doulike .yjfkly a").click(function() {
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
		$("#likeornot").val($(this).attr("like"));
	});
	$("#yjfkshut").click(function() {
		$("#xbyjfk").trigger("click");
	});
});

function setCookies(name, value, time, type, path) {
	var cd = [name + '=' + encodeURIComponent(value)];
	if(typeof time == 'number') {
		var temp = 86400000;
		if(type == 'h') {
			temp = 3600000;
		} else if(type == 'i') {
			temp = 60000;
		} else if(type == 's') {
			temp = 1000;
		}
		time = new Date((new Date()).getTime() + time * temp);
		cd.push('expires=' + time.toGMTString());
	}
	if(path) cd.push('path=' + path);
	document.cookie = cd.join('; ');
}

function getCookie(name) {
	for(var b = [], d = document.cookie.split(/; */), c = 0; c < d.length; c++) {
		var e = d[c].split("=");
		e[0] == name && b.push(decodeURIComponent(e[1]));
	}
	return b[0];
}

function delCookie(name) {
	setCookies(name, '', 0, 's', '/');
}

function bindtimex() {
	$("#index_timelinebox span.timex").unbind();
	$("#index_timelinebox span.timex_current").prev().bind("mouseenter", function() {

		$("#zzw_prev_btn").click();
	});
	$("#index_timelinebox span.timex_current").next().bind("mouseenter", function() {

		$("#zzw_next_btn").click();
	});
	// $("#index_timelinebox span.timex_current").prev().bind("click",function(){

	// 	$("#zzw_prev_btn").click();
	// });
	// $("#index_timelinebox span.timex_current").next().bind("click",function(){

	// 	$("#zzw_next_btn").click();
	// });
}
var active = -1;
var lastKeyValue = '';
var lastKeyPressCode = 0;
var default_value = $("#inputString").attr('defaultval');

function lookup(inputString) {
	if(inputString.length == 0) {
		$('#suggestions').hide()
	} else {
		if(inputString != lastKeyValue) {
			lastKeyValue = inputString;
			$.get($("#inputString").attr('href'), {
					words: encodeURIComponent(inputString)
				},
				function(data) {
					if(data.length > 0) {
						$('#suggestions').show();
						$('#autoSuggestionsList').html(data);
						$("li", $('#autoSuggestionsList')).removeClass("ac_over");
						$("#autoSuggestionsList li").hover(function() {
								var liss = $("li.ac_over", $('#autoSuggestionsList'));
								liss.find('a').css("backgroundColor", "#fff");
								liss.find('a').css("color", "#333");
								liss.find('a').find('span').css("color", "#2b952b");
								$("li", $('#autoSuggestionsList')).removeClass("ac_over");
								$(this).addClass("ac_over");
								$(this).find('a').css("backgroundColor", "#ff3232");
								$(this).find('a').css("color", "#fff");
								$(this).find('a').find('span').css("color", "#fff");
								for(var i = 0; i <= $("li", $('#autoSuggestionsList')).length; i++) {
									if($("li", $('#autoSuggestionsList'))[i] == $(this)[0]) {
										active = i
									}
								}
							},
							function() {
								$(this).removeClass("ac_over");
								$(this).find('a').css("backgroundColor", "#fff");
								$(this).find('a').css("color", "#333");
								$(this).find('a').find('span').css("color", "#2b952b")
							});
						active = -1
					}
				})
		} else if($('#autoSuggestionsList').html() != '') {
			$('#suggestions').show()
		}
	}
}
$(document).ready(function() {
	$('#inputString').keyup(function(e) {
		lastKeyPressCode = e.keyCode;
		if((lastKeyPressCode > 32 && lastKeyPressCode < 41) || (lastKeyPressCode > 8 && lastKeyPressCode < 32)) {
			return false
		} else {
			lookup($('#inputString').val())
		}
	});
	$('#inputString').keydown(function(e) {
		switch(e.keyCode) {
			case 38:
				$("li", $('#autoSuggestionsList')).removeClass("ac_over");
				e.preventDefault();
				moveSelect(-1);
				break;
			case 40:
				$("li", $('#autoSuggestionsList')).removeClass("ac_over");
				e.preventDefault();
				moveSelect(1);
				break;
			case 9:
			case 13:
				break;
			default:
				break
		}
	}).blur(function() {
		fill()
	})
});

function submit_headerfrom() {
	if($('#inputString').val() == '' || $('#inputString').val() == default_value) {
		return false
	}
	var submit_from = true;
	if(active != -1) {
		var lis = $("li", $('#autoSuggestionsList'));
		if(lis) {
			var jump_href = $(lis[active]).find("a").attr('href');
			if(jump_href != '') {
				location.href = jump_href;
				submit_from = false
			}
		}
	}
	if(submit_from == true) {
		$('#suggestions_from').submit(function() {
			$('#suggestions_from').submit()
		});
		$('#suggestions_from').submit()
	}
}

function fill() {
	setTimeout("$('#suggestions').hide();", 200)
}

function moveSelect(step) {
	var lis = $("li", $('#autoSuggestionsList'));
	if(!lis) return;
	active += step;
	if(active < 0) {
		active = 0
	} else if(active >= lis.size()) {
		active = lis.size() - 1
	}
	var li_val = $(lis[active]).html();
	li_val = li_val.toLowerCase();
	var find1 = li_val.indexOf('</span>');
	var find2 = li_val.indexOf('</a>', find1);
	var words_val = li_val.substring(find1 + 7, find2);
	if(words_val != '') {
		$('#inputString').val(words_val)
	}
	lis.find('a').css("backgroundColor", "#fff");
	lis.find('a').css("color", "#333");
	lis.find('a').find('span').css("color", "#2b952b");
	$(lis[active]).addClass("ac_over");
	$(lis[active]).find('a').css("backgroundColor", "#ff3232");
	$(lis[active]).find('a').css("color", "#fff");
	$(lis[active]).find('span').css("color", "#fff")
};
var pxarr = [" ", " ", " ", " ", " ", " ", " ", " "];
var pxflag;

function refresh_inews(st, forward) {
	pxflag = 0;
	if(pxarr[st] != undefined && pxarr[st] != null && pxarr[st] != " ") {
		pxflag = 1;
		var data = pxarr[st];
		if(forward == 1) {
			$("#index_cp_rightarrow_mask").show();
			$("#index_pxw").append(data);
			$("#index_pxw").css("margin-left", "0px");
			$("#index_pxw").animate({
				"margin-left": "-988px"
			}, 600, function() {
				$("#index_pxw .index_pxi").first().remove();
				$("#index_pxw").css("margin-left", "0px");
				$("#index_cp_rightarrow_mask").hide();
			});
		} else if(forward == -1) {
			$("#index_pxw").css("margin-left", "-988px");
			$("#index_cp_leftarrow_mask").show();
			$("#index_pxw").prepend(data);
			$("#index_pxw").animate({
				"margin-left": "0px"
			}, 600, function() {
				$("#index_pxw .index_pxi").last().remove();
				$("#index_pxw").css("margin-left", "0px");
				$("#index_cp_leftarrow_mask").hide();
			});
		}
		$('.paixu').find('.current').removeClass('current');
		$('.l_n_' + st).addClass('current');
	}
	if(pxflag == 0) {
		$.get('/ajax/index_more_news.php?st=' + st, null,
			function(data) {
				if(data != '') {
					if(forward == 1) {
						$("#index_cp_rightarrow_mask").show();
						$("#index_pxw").append(data);
						$("#index_pxw").css("margin-left", "0px");
						$("#index_pxw").animate({
							"margin-left": "-988px"
						}, 600, function() {
							$("#index_pxw .index_pxi").first().remove();
							$("#index_pxw").css("margin-left", "0px");
							$("#index_cp_rightarrow_mask").hide();
						});
					} else if(forward == -1) {
						$("#index_cp_leftarrow_mask").show();
						$("#index_pxw").prepend(data);
						$("#index_pxw").css("margin-left", "-988px");
						$("#index_pxw").animate({
							"margin-left": "0px"
						}, 600, function() {
							$("#index_pxw .index_pxi").last().remove();
							$("#index_pxw").css("margin-left", "0px");
							$("#index_cp_leftarrow_mask").hide();
						});
					}
					$('.paixu').find('.current').removeClass('current');
					$('.l_n_' + st).addClass('current');
					pxarr.splice(st, 1, data);
				}
			})
	}
}
var paixu_i = 2;
var sti;
$(function() {
	if($('#index_pxw').length > 0) {
		setsti();
		setInterval(function() {
			pxarr = [" ", " ", " ", " ", " ", " ", " ", " "]
		}, 10 * 60 * 1000);
		$(".paixu .l_n").mouseover(function() {
			clearInterval(sti);
			var po = $(this).attr("po");
			paixu_i = parseInt(po) + 1;
			if(paixu_i == 3) {
				paixu_i = 4
			}
			if(paixu_i == 6) {
				paixu_i = 1
			}
			refresh_inews(po, 1);
		});
		$(".paixu .l_n").mouseout(function() {
			clearInterval(sti);
			setsti();
		});
		$('#index_pxw_w').mouseenter(function() {
			clearInterval(sti);
		});
		$('#index_pxw_w').mouseleave(function() {
			clearInterval(sti);
			setsti();
		});
		$('#index_cp_leftarrow').mouseenter(function() {
			clearInterval(sti);
		});
		$('#index_cp_leftarrow').mouseleave(function() {
			clearInterval(sti);
			setsti();
		});
		$('#index_cp_rightarrow').mouseenter(function() {
			clearInterval(sti);
		});
		$('#index_cp_rightarrow').mouseleave(function() {
			clearInterval(sti);
			setsti();
		});
		$('#index_cp_leftarrow').click(function() {
			paixu_i--;
			if(paixu_i == 0) {
				paixu_i = 5
			}
			if(paixu_i == 3) {
				paixu_i = 2
			}
			refresh_inews(paixu_i, -1);
		});
		$('#index_cp_rightarrow').click(function() {
			paixu_i++;
			if(paixu_i == 3) {
				paixu_i = 4
			}
			if(paixu_i == 6) {
				paixu_i = 1
			}
			refresh_inews(paixu_i, 1);
		});
	}
});

function setsti() {
	sti = setInterval(function() {
		refresh_inews(paixu_i, 1);
		paixu_i++;
		if(paixu_i == 3) {
			paixu_i = 4
		}
		if(paixu_i == 6) {
			paixu_i = 1
		}
	}, 5000);
}

function msjLittletips(html) {
	$("body").append("<div class='msjLittletips'>" + html + "</div>");
	$(".msjLittletips").fadeIn();
	var _x = setTimeout(function() {
		$(".msjLittletips").fadeOut(function() {
			$(".msjLittletips").remove();
		});

	}, 3000);
}

! function(n) {
	var r = {};

	function e(t) {
		if(r[t]) return r[t].exports;
		var i = r[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return n[t].call(i.exports, i, i.exports, e), i.l = !0, i.exports
	}
	e.m = n, e.c = r, e.d = function(t, i, n) {
		e.o(t, i) || Object.defineProperty(t, i, {
			enumerable: !0,
			get: n
		})
	}, e.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, e.t = function(i, t) {
		if(1 & t && (i = e(i)), 8 & t) return i;
		if(4 & t && "object" == typeof i && i && i.__esModule) return i;
		var n = Object.create(null);
		if(e.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: i
			}), 2 & t && "string" != typeof i)
			for(var r in i) e.d(n, r, function(t) {
				return i[t]
			}.bind(null, r));
		return n
	}, e.n = function(t) {
		var i = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return e.d(i, "a", i), i
	}, e.o = function(t, i) {
		return Object.prototype.hasOwnProperty.call(t, i)
	}, e.p = "", e(e.s = 28)
}([function(t, i) {
	t.exports = {
		e: Object.prototype.hasOwnProperty,
		a: function(t, i) {
			for(var n = t, r = i.split("."); r.length;) {
				if(n === undefined || null === n) return undefined;
				n = n[r.shift()]
			}
			return n
		},
		u: function(t) {
			if("object" != typeof t) return "";
			var i = [];
			for(var n in t) this.e.call(t, n) && i.push(n + "=" + encodeURIComponent(t[n]));
			return i.join("&")
		},
		f: function(t) {
			for(var i in t) return !1;
			return !0
		},
		h: function(t, n) {
			return t.replace(/{(\w*?)}/g, function(t, i) {
				return n[i] === undefined ? "" : n[i]
			})
		},
		v: function(t) {
			var i = {
				'"': "&quot;",
				">": "&gt;",
				"<": "&lt;",
				"&": "&amp;"
			};
			return t.replace(/["<>&]/g, function(t) {
				return i[t]
			})
		},
		_: function(t, e) {
			var a = this;
			return t.replace(/\{(\w+):(\w+)\}/g, function(t, i, n) {
				var r = e[i];
				switch(n) {
					case "number":
						r = +r || 0;
						break;
					case "boolean":
						r = !!r;
						break;
					case "html":
						r = a.v(r)
				}
				return r
			})
		},
		w: function(t) {
			var i = "";
			return window.JSON && window.JSON.parse && (i = window.JSON.parse(t)), i
		},
		y: function(t) {
			var i = "";
			try {
				i = window.JSON && window.JSON.stringify ? window.JSON.stringify(t) : window.eval(t)
			} catch(n) {}
			return i
		},
		b: function(t) {
			return t.replace(/(^\s*)|(\s*$)/g, "")
		},
		I: function(t) {
			for(var i = [], n = {}, r = t.length, e = 0; e < r; e++) {
				var a = t[e];
				n[a] || (n[i[i.length] = a] = !0)
			}
			return i
		},
		k: function(t) {
			return "[object Array]" === Object.prototype.toString.call(t)
		},
		A: function(t) {
			return "[object Function]" === Object.prototype.toString.call(t)
		},
		S: function(t) {
			return "[object Object]" === Object.prototype.toString.call(t)
		},
		x: function(t) {
			return "[object Number]" === Object.prototype.toString.call(t)
		},
		D: function(t) {
			return "[object String]" === Object.prototype.toString.call(t)
		},
		C: function(t) {
			var i, n = Object.prototype.hasOwnProperty;
			if(!(t && "[object Object]" === Object.prototype.toString.call(t) && "isPrototypeOf" in t)) return !1;
			if(t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf")) return !1;
			for(i in t);
			return i === undefined || n.call(t, i)
		},
		T: function(t) {
			var i, n, r = t;
			if(!t || t instanceof Number || t instanceof String || t instanceof Boolean) return r;
			if(this.k(t)) {
				r = [];
				var e = 0;
				for(i = 0, n = t.length; i < n; i++) r[e++] = this.T(t[i])
			} else if(this.C(t))
				for(i in r = {}, t) t.hasOwnProperty(i) && (r[i] = this.T(t[i]));
			return r
		},
		P: function(t, i) {
			var n = Array.prototype.slice.apply(arguments),
				r = n.shift(),
				e = "function" == typeof this ? this : n.shift();
			return function() {
				var t = Array.prototype.slice.apply(arguments);
				return e.apply(r, t.concat(n))
			}
		}
	}
}, function(t, i) {
	t.exports = {
		O: "BAIDU_SSP_",
		M: "___baidu_union_callback",
		U: "https:",
		B: "https:" === document.location.protocol,
		R: "___adblockplus_",
		L: "BAIDU_SSP_lcr",
		N: "//pos.baidu.com/",
		F: "",
		j: "pos.baidu.com",
		H: "HTML_POST",
		W: "SSP_JSONP",
		z: "STATIC_JSONP",
		V: "//pos.baidu.com/bfp/snippetcacher.php?",
		q: 1,
		J: 2,
		G: 4,
		X: 8,
		K: 16,
		Y: "pageSearchId",
		$: "0",
		Q: "AUTO_JSONP",
		Z: 4,
		it: "auto_dup",
		nt: "auto_ds",
		rt: "111003",
		et: "fatalError",
		at: "remote",
		ot: "BAIDU_DUP2_pageFirstRequestTime",
		st: "DUP_DEBUG_FLAG",
		ut: "https://dup.baidustatic.com/dup/painter/",
		ct: "__baidu_dup_jobruner",
		ft: 111e3,
		ht: /^u?\d*0[0-7]_\d+$/,
		dt: {
			text_default_120_600: !0,
			text_default_160_600: !0,
			text_default_300_250: !0,
			text_default_250_250: !0,
			text_default_200_200: !0,
			text_default_336_280: !0,
			text_default_360_300: !0,
			text_default_234_60: !0,
			text_default_460_60: !0,
			text_default_all: !0
		},
		lt: {
			CLOSEAD: "closeAd"
		}
	}
}, function(t, i, f) {
	var e = f(0),
		h = f(5),
		o = f(17),
		r = f(3);
	t.exports = {
		g: function(t, i) {
			return t ? e.D(t) && 0 < t.length ? (i = i || window).document.getElementById(t) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null : t : null
		},
		vt: function(t, i) {
			if(!t) return null;
			var n;
			if(document.getElementsByClassName) n = document.getElementsByClassName(t);
			else {
				n = [];
				for(var r = document.getElementsByTagName(i), e = 0, a = r.length; e < a; e++) {
					var o = r[e],
						s = o.getAttribute("class") || o.getAttribute("className");
					s && 0 <= s.indexOf(t) && n.push(o)
				}
			}
			return n
		},
		_t: function(t, i, n) {
			if(!t) return null;
			if(1 === t.nodeType) return t;
			var r = this.vt(t, i);
			if(n instanceof Function)
				for(var e = 0, a = r.length; e < a; e++)
					if(n(r[e])) return r[e];
			return r[0]
		},
		pt: function(t) {
			if(t.wt) return t.wt;
			var i = t.containerId;
			return t.wt = this.g(i) || this._t(i, "div", function(t) {
				var i = r.__slotMap;
				for(var n in i)
					if(i.hasOwnProperty(n) && i[n] && i[n].wt === t) return !1;
				return !0
			}), t.wt
		},
		mt: function(t) {
			return 9 === t.nodeType ? t : t.ownerDocument || t.document
		},
		gt: function(t) {
			var i = this.mt(t);
			return i.parentWindow || i.defaultView || null
		},
		yt: function(t) {
			try {
				if(t && "object" == typeof t && t.document && "setInterval" in t) return !0
			} catch(i) {
				return !1
			}
			return !1
		},
		bt: function(t, i) {
			return(t = t || window) != window.top && t != t.parent || !this.yt(t)
		},
		It: function(t) {
			try {
				return !!t.parent.location.toString()
			} catch(i) {
				return !1
			}
		},
		kt: function(t, i) {
			i = 2 === arguments.length ? i : t.parent;
			for(var n = 0; n++ < 10 && this.bt(t, i);) {
				if(!this.It(t)) return !0;
				t = t.parent
			}
			return 10 <= n
		},
		At: function(t, i, s) {
			var u = (s = s || this.win || window).document;
			i = i || 0, this.domReadyMonitorRunTimes = 0, this.readyFuncArray = this.readyFuncArray || [], this.readyFuncArray.push({
				func: t,
				delay: i,
				done: !1
			});
			var n = e.P(this, function() {
					var t = !1;
					this.domReadyMonitorRunTimes++;
					var i = !1;
					try {
						s.frameElement && (i = !0)
					} catch(a) {
						i = !0
					}
					if(h.ie && h.ie < 9 && !i) try {
							u.documentElement.doScroll("left"), t = !0
						} catch(a) {} else if("complete" === u.readyState || this.domContentLoaded) t = !0;
						else if(3e5 < this.domReadyMonitorRunTimes) return void(this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null));
					if(t) try {
						if(this.readyFuncArray && this.readyFuncArray.length)
							for(var n = 0, r = this.readyFuncArray.length; n < r; n++) {
								var e = this.readyFuncArray[n];
								e && e.func && !e.done && (e.delay ? (e.done = !0, s.setTimeout(e.func, e.delay)) : (e.done = !0, e.func()))
							}
					} catch(o) {} finally {
						this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null)
					}
				}),
				r = e.P(this, function() {
					this.domContentLoaded = !0, n()
				});
			this.domReadyMonitorId || (this.domReadyMonitorId = s.setInterval(n, 50), u.addEventListener ? (u.addEventListener("DOMContentLoaded", r, !1), s.addEventListener("load", r, !1)) : u.attachEvent && s.attachEvent("onload", r, !1))
		},
		St: function(t, i, n) {
			return i = i.replace(/^on/i, "").toLowerCase(), t.addEventListener ? t.addEventListener(i, n, !1) : t.attachEvent && t.attachEvent("on" + i, n), t
		},
		xt: function(t, i, n) {
			return i = i.replace(/^on/i, "").toLowerCase(), t.removeEventListener ? t.removeEventListener(i, n, !1) : t.attachEvent && t.detachEvent("on" + i, n), t
		},
		Dt: function(t, i) {
			1 === arguments.length && e.x(t) && (i = t, t = undefined), i = i || 10;
			for(var n = window, r = 0; r++ < i && this.bt(n) && !this.kt(n) && (!t || !t(n));) n = n.parent;
			return n
		},
		Ct: function(t) {
			var i = this.yt(t) ? t.document : this.mt(t);
			return "CSS1Compat" === i.compatMode ? i.documentElement : i.body
		},
		Tt: function(t) {
			var i = document.createElement("script");
			i.type = "text/javascript", i.async = !0, i.src = t;
			var n = document.getElementsByTagName("script")[0];
			n.parentNode && n.parentNode.insertBefore(i, n)
		},
		Pt: function(t) {
			switch(t.nodeName.toLowerCase()) {
				case "a":
				case "script":
				case "iframe":
				case "br":
				case "title":
				case "option":
				case "button":
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6":
					return !1;
				default:
					return !0
			}
		},
		Ot: function(t, n, i, r) {
			try {
				var e = t || document.createElement("script");
				if(!e.attachEvent || e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0 || h.opera ? (this.St(e, "error", i), this.St(e, "load", n)) : this.St(t, "readystatechange", function(t) {
						var i = (t.currentTarget || t.srcElement).readyState;
						"complete" !== i && "loaded" !== i || n(t)
					}), !t && r) {
					for(var a in e.type = "text/javascript", e.async = !0, r) r.hasOwnProperty(a) && (e[a] = r[a]);
					var o = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
					o.parentNode.insertBefore(e, o)
				}
				return e
			} catch(c) {
				var s = f(6),
					u = f(1);
				s.Et(u.et, c, {
					pos: "loadScriptError"
				})
			}
		},
		Mt: function(t, i) {
			if(o.Ut(20) && (i = this.Bt() + i), o.Ut(20) && (i += this.Bt()), o.Ut(20)) {
				for(var n = "", r = "", e = o.Rt(1, 3), a = 0; a < e; a++) n += this.Lt(), r += "</div>";
				i = n + i + r
			}
			return o.Ut(30) && t.removeAttribute && t.removeAttribute("id"), o.Ut(80) && t.removeAttribute && t.removeAttribute("style"), i
		},
		Bt: function() {
			var t = o.Nt(["div", "abbr", "span", "ins", "em"]),
				i = "";
			o.Ut(20) && (i = ' id="' + o.Ft(5, 10) + '" ');
			var n = "";
			o.Ut(20) && (n = ' class="' + o.Ft(6, 15) + '" ');
			var r = o.Nt(["display:none;", "width:0px;height:0px;"]);
			o.Ut(50) && (r += o.jt()), r = ' style="' + r + '" ';
			return e.h("<{tagname} {idString} {classString} {styleString}></{tagname}>", {
				tagname: t,
				idString: i,
				classString: n,
				styleString: r
			})
		},
		Lt: function() {
			var t = "";
			o.Ut(30) && (t = ' id="' + o.Ft(5, 10) + '" ');
			var i = "";
			o.Ut(60) && (i = ' style="' + o.jt() + '" ');
			return e.h("<div {idString} {styleString}>", {
				idString: t,
				styleString: i
			})
		}
	}
}, function(t, i) {
	var n = "___delivery___global___counter___";
	if(window._SF_ && window._SF_._global_ && window._SF_._global_._ssp && !window.___baidu_union) {
		var r = window._SF_._global_._ssp;
		r.DUP_4_SF = !0, r.destroy = function() {
			try {
				window.top[n] = {}
			} catch(t) {
				window[n] = {}
			}
		}, window.___baidu_union = r
	}
	var e = window.___baidu_union = window.___baidu_union || {};
	try {
		e.counter = window.top[n] = window.top[n] || {}
	} catch(s) {
		e.counter = window[n] = window[n] || {}
	}
	var a = "",
		o = "";
	e.domainInfo, e.domainInfo = {
		dup: a,
		pos: o
	}, e.startTime = (new Date).getTime(), t.exports = e
}, function(t, i, n) {
	var c = n(1),
		o = n(11),
		p = n(2),
		s = n(17),
		u = n(0),
		w = n(8),
		f = n(5),
		e = n(15),
		r = n(6),
		h = n(24),
		a = n(23),
		d = n(3),
		l = n(10);
	d.__slotMap = d.__slotMap || {};
	var v = d.__slotMap,
		_ = d.counter || {};
	_.slotTotalCount = _.slotTotalCount || 1, _.slotCountIndex = _.slotCountIndex || {}, t.exports = {
		Ht: function(t) {
			return v[t]
		},
		Wt: function(t) {
			for(var i in v)
				if(v.hasOwnProperty(i) && -1 < i.indexOf(t)) return v[i];
			return {}
		},
		zt: function(t) {
			var i = "" + t.slotId;
			_.slotCountIndex[i] = _.slotCountIndex[i] || 0;
			var n = {};
			return n.index = _.slotCountIndex[i], n.count = 0 === i.indexOf("u") ? _.slotTotalCount : 0, n.id = i + "_" + n.index, n.containerId = c.O + "_wrapper_" + i + "_" + n.index, n.slotId = t.slotId, n.productLine = t.productLine, n.errors = [], _.slotCountIndex[i] = _.slotCountIndex[i] + 1, i !== c.$ && (_.slotTotalCount = _.slotTotalCount + 1), n.isAsync = t.isAsync, n.timestampWatcher = d.startTime ? {
				t1: d.startTime
			} : {
				t1: 0
			}, t.coa && u.S(t.coa) ? n.styleOpenApi = t.coa : window.cproStyleApi ? n.styleOpenApi = window.cproStyleApi[i] || {} : n.styleOpenApi = {}, n.isUnion = 0 === i.indexOf("u"), n.width = 0, n.height = 0, n.domainInfo = d.domainInfo || {}, n.domainInfo.mixOffset = a.Vt(n.domainInfo.pos), n
		},
		processSlot: function(t) {
			var i = t.response.rtb_deliv = t.response.rtb_deliv || {},
				n = t.response.order_deliv = t.response.order_deliv || {},
				r = t.response.pdb_deliv = t.response.pdb_deliv || {},
				e = i.deliv_id = parseInt(i.deliv_id, 10),
				a = i.demand_id = parseInt(i.demand_id, 10),
				o = n.deliv_id = parseInt(n.deliv_id, 10),
				s = n.demand_id = parseInt(n.demand_id, 10),
				u = r.deliv_id = parseInt(r.deliv_id, 10);
			r.demand_id = parseInt(r.demand_id, 10);
			var c = t.response.placement || {};
			t.containerInfo = c.container || {}, t.complementType = c.complement_type, t.isPdbAd = 0 === e && 0 === a && 0 === o && 0 === s, t.isNeedCacheRequest = !isNaN(e) && 0 !== e && 7 === t.complementType || !isNaN(o) && 0 !== o || !isNaN(e) && 0 !== e && 0 !== u
		},
		qt: function(t) {
			v[t.id] = t
		},
		Jt: function(t, i) {
			t.status = t.status ^ i
		},
		Gt: function(t, i) {
			return 0 < (t.status & i)
		},
		Xt: function(t, i) {
			var n = this.Ht(t);
			n && (n.status |= i)
		},
		Kt: function() {
			var t = v;
			for(var i in t)
				if(i && t[i] && t.hasOwnProperty(i)) {
					var n = t[i];
					if(n.status >= c.J) continue;
					this.Yt(n), this.$t(n), this.Qt(n)
				}
		},
		Qt: function(t) {
			0 !== t.proxy && 1 !== t.proxy && (d.prScript = p.Ot(d.prScript, u.P(this, this.Zt, t), u.P(this, this.Zt, t), {
				src: "//cpro.baidustatic.com/cpro/ui/pr.js"
			}))
		},
		Zt: function(t, i) {
			"object" != typeof window.__baidu_dup_jobruner && (window.__baidu_dup_jobruner = "block", i.proxy = 1, e.ti("___ds_storage__isblock", i.proxy + "|" + (new Date).getTime()), this.$t(i))
		},
		$t: function(t) {
			!d.ii && window.postMessage && (d.ii = !0, p.St(window, "message", u.P(this, this.ni)));
			var i, n = t.isUnion || t.isAsync;
			t.proxy = t.proxy || this.ri(t), t.paramObj = t.paramObj || o.ei(t);
			var r = o.ai(t.paramObj, t.proxy, t.domainInfo.mixOffset),
				e = c.F + r;
			if(1 === t.proxy && t.domainInfo.mixOffset) {
				var a = c.U + "//" + t.domainInfo.pos + "/";
				e = (a += f.ie ? "s?" : s.Ft(5, 10) + "?") + r
			}
			t.paramObj.dtm = c.H, t.timestampWatcher.t2 = +new Date, (i = this.oi(t)) ? window[c.R](i) : this.si(e, n), h.ui(t), this.Xt(t.id, c.J)
		},
		ni: function(t) {
			var i = t.data;
			if("string" == typeof i && window.JSON && window.JSON.parse) try {
				i = JSON.parse(i)
			} catch(n) {}
			i && i.tuid && (i.placement && i.placement.update && i.queryid ? (this.ci(i), -1 < i.tuid.indexOf("u") && i.noadx && parseInt(i.noadx, 10) && 3 !== parseInt(i.noadx, 10) && this.fi(i)) : 1 === i.type && this.hi(t, i))
		},
		hi: function(t, i) {
			var n = t.origin || t.originalEvent.origin,
				r = n && n.split("//")[1],
				e = i.tuid,
				a = i.msg,
				o = this.Wt(e),
				s = o && o.response,
				u = s && s.placement && s.placement.basic && s.placement.basic.publisherDomain && s.placement.basic.publisherDomain.pos;
			!o || r !== c.j && r !== u || "click" !== a || (this.li(o), l.vi(c.lt.CLOSEAD, e))
		},
		ci: function(t) {
			var i, n = t.placement.update,
				r = e.Nt(t.tuid);
			r && (i = u.w(r), e._i() && window.JSON && window.JSON.stringify && i && i.placement && i.placement.update && i.placement.update !== n && (t.adExpire = (new Date).getTime(), e.ti(t.tuid, JSON.stringify(t))))
		},
		oi: function(t) {
			try {
				if(f.ie && f.ie < 9 || !e._i() || t.isAutoAd) return !1;
				var i = e.Nt(t.id);
				return !!i && u.w(i)
			} catch(n) {
				r.Et("elog", n, {
					pos: "localAdInfo",
					id: t.id
				})
			}
		},
		pi: function(t) {
			try {
				var i = t.response,
					n = t.id;
				n && !t.isPdbAd && t.isUnion && !t.isAutoAd && window.JSON && window.JSON.stringify && e._i() && !e.Nt(n) && (i.adExpire = (new Date).getTime(), e.ti(n, JSON.stringify(i)))
			} catch(r) {}
		},
		Yt: function(t) {
			p.pt(t) || (t.isAsync ? "union" === t.productLine && (t.containerId = "cpro_" + t.slotId) : (document.write('<div id="' + t.containerId + '"></div>'), p.g(t.containerId) || this.wi(t))), this.Xt(t.id, c.q)
		},
		wi: function(t) {
			try {
				var i = document.getElementsByTagName("script"),
					n = i[i.length - 1];
				if(n) {
					var r = n.parentNode;
					if(r) {
						var e = document.createElement("div");
						return e.id = t.containerId, r.insertBefore(e, n), !0
					}
				}
			} catch(a) {}
			return !1
		},
		si: function(t, i) {
			if(i) {
				var n = document.createElement("script");
				if(!n) return;
				n.type = "text/javascript", n.async = !0, n.src = t;
				var r = document.getElementsByTagName("script")[0];
				r && r.parentNode ? r.parentNode.insertBefore(n, r) : document.write('<script charset="utf-8" src="' + t + '"><\/script>')
			} else document.write('<script charset="utf-8" src="' + t + '"><\/script>')
		},
		mi: function(t) {
			var i = t.response,
				n = i.pdb_deliv,
				r = i.rtb_deliv,
				e = i.order_deliv;
			return !(!t.isUnion && 7 === t.complementType && 0 === n.deliv_id && 0 === r.deliv_id && 0 === e.deliv_id)
		},
		fi: function(t) {
			var i = this.Wt(t.tuid);
			i && 7 === t.placement.complement_type && this.li(i)
		},
		li: function(t) {
			var i = p.pt(t);
			i && (i.parentNode.removeChild(i), n(12).unregisetViewWatch(t))
		},
		processSlotInfo: function(t) {
			var i = this.gi(t),
				n = t.response.placement.basic;
			return i.cname = n.cname, i
		},
		gi: function(t) {
			var i = t.response.placement,
				n = t.response["extends"] || {},
				r = p.pt(t),
				e = i.container,
				a = t.styleOpenApi,
				o = e.width,
				s = e.height,
				u = a.cpro_w || a.rsi0 || 0,
				c = a.cpro_h || a.rsi1 || 0,
				f = e.sizeType;
			if(5 !== f && !t.isUnion && n && n.hasOwnProperty("sspw") && n.hasOwnProperty("ssph")) {
				var h = parseInt(n.sspw || 0, 10),
					d = parseInt(n.ssph || 0, 10),
					l = parseInt(n.cbsz || 0, 10);
				f = 0 < l ? l : f, o = 0 < h ? h : o, s = 0 < d ? d : s
			}
			if(a.scale) {
				f = 2;
				var v = a.scale.split(".") || [];
				o = v[0], s = v[1]
			}(u || c) && (f = 1, o = u || w.yi(), s = c || s), ("-1" === t.pcwd || t.ftpc || t.styleOpenApi.cpro_ftpc) && (f = "-1" === t.pcwd && "-1" === t.pchd ? 8 : 5), a.sizeType && (f = a.sizeType && parseInt(a.sizeType, 10) || f, o = a.width && parseInt(a.width, 10) || o, s = a.height && parseInt(a.height, 10) || s), 2 !== a.apType && 3 !== a.apType || (e.location = a.apType);
			var _ = 0;
			switch(f) {
				case 1:
					break;
				case 2:
					o = t.pcwd || o, s = t.pchd || s, o && s && (_ = s / o), o = w.yi(), s = Math.ceil(o * _);
					break;
				case 3:
					o = w.yi();
					break;
				case 5:
					o && s && (_ = s / o), o = w.bi(r.parentElement), s = Math.ceil(o * _);
					break;
				case 6:
					o = w.bi(r.parentElement);
					break;
				case 7:
					s = w.Ii(r.parentElement);
					break;
				case 8:
					o = w.bi(r.parentElement), s = w.Ii(r.parentElement)
			}
			return {
				width: t.width = o,
				height: t.height = s,
				sizeType: f
			}
		},
		ri: function(t) {
			var i = -1;
			return t.isAnti ? "block" === window[c.ct] || 1 === e.ki("isblock") ? i = 1 : !u.S(window[c.ct]) && 0 !== e.ki("isblock") || (i = 0) : i = 0, i
		}
	}
}, function(t, i, n) {
	var s = n(0),
		u = window,
		c = window.navigator;
	var r = {
		Ai: function() {
			var t = navigator.userAgent,
				i = window.RegExp;
			this.antBrowser = !1, /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +i.$1), /opera\/(\d+\.\d)/i.test(t) && (this.opera = +i.$1), /firefox\/(\d+\.\d)/i.test(t) && (this.firefox = +i.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t) && !/chrome/i.test(t) && (this.safari = +(i.$1 || i.$2)), /chrome\/(\d+\.\d)/i.test(t) && (this.chrome = +i.$1, function a() {
				try {
					return "scoped" in document.createElement("style")
				} catch(t) {
					return !1
				}
			}() && (this.qihoo = !0)), /qqbrowser\/(\d+\.\d)/i.test(t) && (this.tencent = !0), (/ucbrowser\/(\d+\.\d)/i.test(t) || /ubrowser\/(\d+\.\d)/i.test(t)) && (this.uc = !0), /miuibrowser\/(\d+\.\d)/i.test(t) && (this.xiaomi = !0), /vivobrowser\/(\d+\.\d)/i.test(t) && (this.vivo = !0), /oppobrowser\/(\d+\.\d)/i.test(t) && (this.oppo = !0), /baiduboxapp\/([\d.]+)/.test(t) && (this.baiduboxapp = !0), /qqbrowser|ucbrowser|ubrowser|miuibrowser|vivobrowser|oppobrowser/i.test(t) && (this.isAdBlock = !0);
			try {
				/(\d+\.\d)/.test(s.a(window, "external.max_version")) && (this.maxthon = +i.$1)
			} catch(o) {}
			/Chrome\/[8-9][0-9]/.test(t) && (this.hasSameSiteLimit = !0), (this.tencent || this.uc || this.xiaomi || this.vivo || this.oppo) && (this.antBrowser = !0), this.isWebkit = /webkit/i.test(t), this.isGecko = /gecko/i.test(t) && !/like gecko/i.test(t);
			for(var n = ["Android", "iPad", "iPod", "iPhone", "iOS", "Linux", "Macintosh", "Windows"], r = "", e = 0; e < n.length; e++)
				if(r = n[e], t.match(new RegExp(r, "i"))) {
					"iPad" === r || "iPhone" === r || "iOS" === r || "iPod" === r ? this.isIOS = !0 : "Android" === r && (this.isAndroid = !0);
					break
				}
			this.platform = r
		},
		Si: function() {
			var t = 0;
			try {
				var i = "https:" === document.location.protocol;
				if(45 <= this.chrome || i) return 0;
				if(c.plugins && c.mimeTypes.length) {
					var n = c.plugins["Shockwave Flash"];
					n && n.description && (t = n.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
				}
				if(0 === t && (u.ActiveXObject || u.hasOwnProperty("ActiveXObject")))
					for(var r = 30; 2 <= r; r--) try {
						var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + r);
						if(e) {
							var a = e.GetVariable("$version");
							if(0 < (t = a.replace(/WIN/g, "").replace(/,/g, "."))) break
						}
					} catch(o) {}
				t = parseInt(t, 10), this.Si = function() {
					return t
				}
			} catch(s) {
				t = 0
			}
			return t
		}
	};
	r.Ai(), t.exports = r
}, function(t, i, n) {
	var a = n(0),
		o = n(10),
		s = n(15),
		u = "BAIDU_DUP_log_storage";
	t.exports = {
		xi: function(t, i) {
			var n = new Image,
				r = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
			(window[r] = n).onload = n.onerror = n.onabort = function() {
				n.onload = n.onerror = n.onabort = null, window[r] = null, n = null, i && i(u, t, !0)
			}, n.src = t
		},
		Di: function(t) {
			var i = new Image,
				n = "baidu_dan_log_" + +new Date;
			(window[n] = i).onload = i.onerror = i.onabort = function() {
				try {
					delete window[n]
				} catch(t) {
					window[n] = undefined
				}
				i = null
			}, t += -1 < t.indexOf("?") ? "&" : "?", t += "stamp=" + Math.random(), i.src = t
		},
		Ci: function(t) {
			var i = (t = a.S(t) ? t : {}).url || "//eclick.baidu.com/se.jpg",
				n = t.data || {},
				r = t.option || "now",
				e = a.u(n);
			switch(i += (0 <= i.indexOf("?") ? "&" : "?") + e + (e ? "&" : "") + "ver=0603&rdm=" + +new Date, r) {
				case "now":
					this.xi(i);
					break;
				case "block":
					break;
				case "unload":
				default:
					s.Ti(u, i, !0), o.St(window, "unload", a.P(this, function() {
						this.xi(i, a.P(s, s.Pi))
					}))
			}
		},
		Oi: function(t, i, n) {
			if(!t || !i) return "";
			var r = "//eclick.baidu.com/" + t + "?type=" + i;
			if(n)
				for(var e in n) n.hasOwnProperty(e) && (r += "&" + e + "=" + n[e]);
			this.Ci({
				url: r,
				option: "now"
			})
		},
		Ei: function(t, i) {
			this.Oi("se.jpg", t, i)
		},
		Et: function(t, i, n) {
			n = n || {};
			var r = i && i.stack ? i.stack : i;
			n.stack = encodeURIComponent(r), this.Oi("rs.jpg", t, n)
		}
	}
}, function(t, i, n) {
	var u = n(0),
		r = n(2),
		e = n(3);
	e.__pageInfo = e.__pageInfo || {};
	var c = e.__pageInfo,
		a = r.Dt(),
		f = a.BAIDU_SSP__info || (a.BAIDU_SSP__info = {});
	t.exports = {
		Mi: function(t, i, n) {
			var r, e = n ? f : c;
			if(u.D(t)) {
				for(var a = t.split("."), o = e; a.length;) {
					var s = a.shift();
					0 < a.length ? o[s] || (o[s] = {}) : o[s] = i, o = o[s]
				}
				r = i
			}
			return r
		},
		Ui: function(t, i) {
			var n = i ? f : c;
			if(u.D(t))
				for(var r = t.split("."); r.length;) {
					var e = r.shift();
					if(!r.length || n[e] === undefined) return delete n[e], !0;
					n = n[e]
				}
			return !1
		},
		Bi: function(t, i) {
			var n, r = i ? f : c;
			return u.D(t) && (n = u.a(r, t)), n
		},
		Ri: function(t) {
			var i = window,
				n = i[t];
			return i[t] = undefined, n
		},
		Li: function(t, i, n) {
			var r = n || window;
			return r[t] ? r[t] : r[t] = i
		},
		Ni: function(t) {
			return !!t && (c = this.Bi("pageConfig") || {})[t]
		},
		Fi: function(t, i) {
			return !(!t || !i) && ((c = this.Bi("pageConfig") || {})[t] = i, this.Mi("pageConfig", c), !0)
		}
	}
}, function(t, i, n) {
	var f = n(2),
		o = n(0),
		s = n(5);
	t.exports = {
		ji: function(t) {
			t = t || window;
			try {
				var i = f.Ct(t).clientWidth;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		Hi: function(t) {
			t = t || window;
			try {
				var i = f.Ct(t).clientHeight;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		Wi: function(t) {
			var i = {
				top: 0,
				left: 0
			};
			if(t === f.Ct(t)) return i;
			var n = f.mt(t),
				r = n.body,
				e = n.documentElement;
			if(r && t.getBoundingClientRect) {
				var a = t.getBoundingClientRect();
				i.left = Math.floor(a.left) + Math.max(e.scrollLeft, r.scrollLeft), i.top = Math.floor(a.top) + Math.max(e.scrollTop, r.scrollTop), i.left -= e.clientLeft, i.top -= e.clientTop;
				var o = this.zi(r, "borderLeftWidth"),
					s = this.zi(r, "borderTopWidth"),
					u = parseInt(o, 10),
					c = parseInt(s, 10);
				i.left -= isNaN(u) ? 2 : u, i.top -= isNaN(c) ? 2 : c
			}
			return i
		},
		zi: function(t, i) {
			if(!t) return "";
			var n = "";
			n = -1 < i.indexOf("-") ? i.replace(/[-][^-]{1}/g, function(t) {
				return t.charAt(1).toUpperCase()
			}) : i.replace(/[A-Z]{1}/g, function(t) {
				return "-" + t.charAt(0).toLowerCase()
			});
			var r, e = f.gt(t);
			if(t.style[i] || t.style[n]) return t.style[i] || t.style[n];
			if(e && e.getComputedStyle) {
				if(r = e.getComputedStyle(t, null)) return r.getPropertyValue(i) || r.getPropertyValue(n)
			} else if(t.currentStyle) return(r = t.currentStyle)[i] || r[n];
			return ""
		},
		Vi: function(t) {
			if(!t) return {
				top: 0,
				left: 0
			};
			var i = this.Wi(t),
				n = f.gt(t);
			if(!n) return i;
			try {
				for(var r = 0; n !== n.parent && r++ < 10 && !f.kt(n) && n.frameElement;) {
					var e = this.Wi(n.frameElement);
					i.left += e.left, i.top += e.top, n = n.parent
				}
			} catch(a) {}
			return i
		},
		qi: function(t) {
			for(var i = t, n = f.gt(i), r = 100; i && i.tagName;) {
				var e = 100;
				if(s.ie) {
					if(5 < s.ie) try {
						e = parseInt(o.a(i, "filters.alpha.opacity"), 10) || 100
					} catch(a) {}
					r = e < r ? e : r
				} else {
					try {
						e = 100 * (n.getComputedStyle(i, null).opacity || 1)
					} catch(a) {}
					r *= e / 100
				}
				i = i.parentNode
			}
			return 0 === r ? 0 : r || 100
		},
		Ji: function(t) {
			var i = f.gt(t),
				n = this.qi(t);
			try {
				for(var r = 0; r++ < 10 && f.bt(i) && !f.kt(i);) {
					n *= (i.frameElement ? this.qi(i.frameElement) : 100) / 100, i = i.parent
				}
			} catch(e) {}
			return n
		},
		Gi: function(t) {
			t = t || window;
			try {
				var i = f.Ct(t).scrollWidth;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		Xi: function(t) {
			t = t || window;
			try {
				var i = f.Ct(t).scrollHeight;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		Ki: function(t) {
			var i = (t = t || window).document;
			return t.pageYOffset || i.documentElement.scrollTop || i.body.scrollTop
		},
		Yi: function(t) {
			var i = t || window,
				n = f.Ct(i);
			return i.pageXOffset || n.scrollLeft
		},
		$i: function(t, i) {
			var n = t.offsetWidth;
			return i && (n += this.Qi(t, "Left") + this.Qi(t, "Right")), n
		},
		Qi: function(t, i) {
			var n = this.zi(t, "margin" + i).toString().toLowerCase().replace("px", "").replace("auto", "0");
			return parseInt(n, 10) || 0
		},
		Zi: function(t, i) {
			var n = t.offsetHeight;
			return i && (n += this.Qi(t, "Top") + this.Qi(t, "Bottom")), n
		},
		"in": function(t, i) {
			var n = ["<div ", 'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;', 'font-size: 12px;background:#ff0000;font-weight: 700;">', "BAIDU_AD_", i, "<br>", t.clientWidth, "*", t.clientHeight, "</div>"].join(""),
				r = document.createElement("div");
			r.innerHTML = n;
			var e = t.style;
			e.border = "1px solid #ff0000", e.position = e.position || "relative", t.appendChild(r)
		},
		nn: function(t) {
			for(var i = t, n = f.gt(i); i && i.tagName;) {
				if(!("hidden" !== n.getComputedStyle(i, null).visibility)) return !1;
				i = i.parentNode
			}
			return !0
		},
		rn: function(t) {
			var i = f.gt(t),
				n = this.nn(t);
			if(!n) return !1;
			try {
				for(var r = 0; r++ < 10 && f.bt(i) && !f.kt(i) && i.frameElement;) {
					if(!(n = this.nn(i.frameElement))) return !1;
					i = i.parent
				}
			} catch(e) {}
			return !0
		},
		yi: function() {
			var t = Math.max(320, window.innerWidth);
			return t = isNaN(t) ? this.ji() : t
		},
		bi: function(t) {
			if(!t) return window.screen.width;
			var i = parseInt(this.zi(t, "paddingLeft"), 10) || 0,
				n = parseInt(this.zi(t, "paddingRight"), 10) || 0,
				r = t.clientWidth - i - n;
			return r = 0 < r ? r : window.screen.width
		},
		Ii: function(t) {
			if(!t) return 0;
			var i = parseInt(this.zi(t, "paddingTop"), 10) || 0,
				n = parseInt(this.zi(t, "paddingBottom"), 10) || 0,
				r = t.clientHeight - i - n;
			return r = 0 < r ? r : 0
		}
	}
}, function(t, i, n) {
	var h = n(1),
		d = n(4),
		u = n(34),
		r = n(7),
		e = n(6),
		l = n(2),
		a = n(0);
	t.exports = {
		en: function(t, i) {
			return t.nodeName && t.nodeName.toUpperCase() === i.toUpperCase()
		},
		an: function(t, i) {
			try {
				var n = document.createElement("script");
				n.type = "text/javascript", t.src ? n.src = t.src : n.text = t.text || t.textContent || t.innerHTML || "", i.insertBefore(n, i.firstChild)
			} catch(r) {
				e.Et(h.et, r, {
					pos: "createscripterror",
					status: "renderFail"
				})
			}
		},
		on: function(t, i) {
			if(!t) return !1;
			t.innerHTML = '<span style="display: none">ie</span>' + i;
			for(var n = t.childNodes, r = [], e = 0; n[e]; e++) !this.en(n[e], "script") || n[e].type && "text/javascript" !== n[e].type.toLowerCase() || r.push(n[e]);
			r.reverse();
			for(var a = 0, o = r.length; a < o; a++) this.an(r[a].parentNode.removeChild(r[a]), t);
			return !0
		},
		sn: function(t, i) {
			var n = d.Ht(t);
			if(n && !d.Gt(n, h.K)) {
				var r = n.response.pdb_deliv.deliv_des;
				r = r._html;
				var e = this.un();
				if(this.cn() && i.getAttribute("src", 2) !== e) i.src = e;
				else {
					if(r && "url" === r.type) return i.src = r.content, void d.Xt(n.id, h.K);
					try {
						d.Xt(n.id, h.K);
						var a = u.fn(r, n);
						a.indexOf("<body>") < 0 && (a = "<!DOCTYPE html><body>" + a);
						var o = i.contentWindow.document;
						o.open("text/html", "replace"), o.write(a), o.body && (o.body.style.backgroundColor = "transparent")
					} catch(s) {}
				}
			}
		},
		cn: function() {
			var t = document.createElement("iframe"),
				i = !1;
			if(!document.body) return i;
			return t.src = "about:blank", document.body.insertBefore(t, document.body.firstChild), i = function n(t) {
				try {
					return !t.contentWindow.document
				} catch(i) {
					return !0
				}
			}(t), document.body.removeChild(t), this.cn = function() {
				return i
			}, i
		},
		hn: function() {
			var t = navigator.userAgent,
				i = t && t.match(/iphone.*micromessenger/i);
			return this.hn = function() {
				return i
			}, i
		},
		un: function() {
			return this.cn() ? r.Ni("domainPolicyFileUrl") || "/domain-policy.htm" : this.hn() ? r.Ni("blankPolicyFileUrl") || "/blank-policy.htm" : "about:blank"
		},
		renderRichMaterial: function(t) {
			var i = t.response,
				n = i && i.pdb_deliv && i.pdb_deliv.deliv_des,
				r = n && n._html,
				e = t.isNeedCacheRequest;
			if(!r || "rich" !== r.type || e) return !1;
			var a = l.pt(t),
				o = r.content,
				s = t.isAsync,
				u = t.productLine,
				c = !1;
			if(s)
				if(!s || "clb" !== u && "dup" !== u) c = this.on(a, o);
				else {
					var f = this.dn(t);
					a.innerHTML = f, c = !0
				}
			else document.write(o), d.Xt(t.id, h.K), c = !0;
			return c
		},
		dn: function(t) {
			var i = this.ln(t);
			return this.vn(i)
		},
		ln: function(t) {
			var i = t.containerInfo,
				n = t.width || i.width,
				r = t.height || i.height,
				e = this.un();
			return {
				iframeId: "iframe" + t.id,
				srcAttriName: "src",
				onloadDefine: 'onload="' + h.M + "(3, '" + t.id + "', this);\"",
				iframeWidth: "" + n,
				iframeHeight: "" + r,
				url: e
			}
		},
		vn: function(t) {
			var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
			return a.h(i, t)
		}
	}
}, function(t, i, n) {
	var r = n(3),
		e = n(0);
	r.__eventMap = r.__eventMap || {};
	var a = r.__eventMap;
	t.exports = {
		St: function(t, i, n) {
			if(t)
				if(t.addEventListener) t.addEventListener(i, n, !1);
				else if(t.attachEvent) t.attachEvent("on" + i, n);
			else {
				var r = t["on" + i];
				t["on" + i] = function() {
					r && r.apply(this, arguments), n.apply(this, arguments)
				}
			}
			return t
		},
		_n: function(t, i) {
			e.A(i) && (a[t] = i)
		},
		pn: function(t) {
			delete a[t]
		},
		vi: function(t) {
			var i = a[t];
			if(e.A(i)) {
				var n = Array.prototype.slice.call(arguments, 1);
				i.apply(window, n)
			}
		}
	}
}, function(t, i, n) {
	var d = n(1),
		o = n(29),
		s = n(31),
		u = n(20),
		c = n(32),
		f = n(22),
		h = n(33),
		l = n(23),
		v = n(5),
		_ = n(17),
		p = n(2),
		e = n(0),
		w = n(6),
		a = {
			slotParam: o,
			businessParam: s,
			browserParam: u,
			systemParam: c,
			additionalParam: f
		};
	t.exports = {
		wn: function(t) {
			for(var i = [], n = t.paramsList, r = 0, e = n.length; r < e; r++) {
				var a = n[r],
					o = a.key,
					s = a.encode,
					u = a.value,
					c = a.limit;
				try {
					u = "function" == typeof u ? u.apply(t) : u, u = c ? u.substr(0, c) : u, u = s ? encodeURIComponent(u) : u, i.push({
						key: o,
						value: u
					})
				} catch(f) {
					w.Et("adcodex_error", f, {
						key: encodeURIComponent(o)
					})
				}
			}
			return i
		},
		ei: function(t) {
			var i = [];
			o.setSlotInfo(t), u.setSlotInfo(t), s.setSlotInfo(t), s.mn(p.Dt());
			for(var n = {}, r = 0, e = (i = (i = (i = (i = (i = i.concat(this.wn(o))).concat(this.wn(s))).concat(this.wn(u))).concat(this.wn(f))).concat(this.wn(c))).length; r < e; r++) {
				var a = i[r];
				n[a.key] = a.value
			}
			return n
		},
		gn: function(t) {
			var i = [];
			h.setSlotInfo(t), h.mn(p.Dt());
			for(var n = {}, r = 0, e = (i = i.concat(this.wn(h))).length; r < e; r++) {
				var a = i[r];
				n[a.key] = a.value
			}
			return n
		},
		ai: function(t, i, n, r) {
			var e = [];
			for(var a in t)
				if(a && (t[a] || 0 === t[a]) && t.hasOwnProperty(a) && (!r || !r[a])) {
					var o = t[a];
					e.push(a + "=" + o)
				}
			if(i && (e = _.yn(e)), window && window.location && window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
				var s = window.location.ancestorOrigins;
				e.push("lto=" + encodeURIComponent(s[s.length - 1])), e.push("ltl=" + s.length)
			}
			return 1 === i && n && !v.ie ? l.bn(n, e) : e.join("&")
		},
		getPmpRequestUrl: function(t) {
			var i = t.paramObj,
				n = t.timestampWatcher,
				r = n.t1,
				e = n.t2,
				a = n.t3,
				o = t.response;
			i.qn = o.queryid;
			var s = ["conwid=" + t.width, "conhei=" + t.height],
				u = o.pdb_deliv,
				c = o.order_deliv,
				f = o.rtb_deliv;
			o.media_protect && "0" !== o.media_protect && s.push("mpdi=" + o.media_protect), u.deliv_id && s.push("pdbid=" + u.deliv_id), c.deliv_id && s.push("orderid=" + c.deliv_id), c.demand_id && s.push("odid=" + c.demand_id), f.deliv_id && s.push("rtbid=" + f.deliv_id), f.demand_id && s.push("rdid=" + f.demand_id), t.isNeedCacheRequest && (i.dpv = i.qn), t.isUnion ? s.push("dc=3") : s.push("dc=2"), 0 < r && 0 < e && 0 < a && (i.tt = r + "." + (e - r) + "." + (a - r) + "." + (new Date - r));
			var h = {};
			return i.exps && (s.push("exps=" + i.exps), h.exps = !0), this.In(t, d.U, d.kn, i, s, h)
		},
		An: function(t) {
			var i = t.paramObj,
				n = d.B && _.Ut(50) ? "" : d.U,
				r = d.N + "s?",
				e = {},
				a = ["wid=" + t.width, "hei=" + t.height];
			if(a.push("di=" + i.di), e.di = !0, i.ltu && (a.push("ltu=" + i.ltu), e.ltu = !0), i.psi && (a.push("psi=" + i.psi), e.psi = !0), t.isUnion ? a.push("dc=3") : a.push("dc=2"), 1 === t.proxy)
				for(var o = ["ti", "utdi", "drs", "cfv", "cpl", "chi", "cce", "tlm", "psr", "ccd", "cja", "cmi", "col", "cdo", "tcn", "ltr"], s = 0; s < o.length; s++) e[o[s]] = !0;
			return this.In(t, n, r, i, a, e)
		},
		In: function(t, i, n, r, e, a) {
			var o = i + n + e.join("&") + "&",
				s = t.response.placement.basic.publisherDomain,
				u = "",
				c = !1;
			1 === t.proxy && s && s.pos && (o = i + "//" + s.pos + "/", v.ie ? o = o + "s?" + e.join("&") + "&" : (u = l.Vt(s.pos), o = o + _.Ft(5, 10) + "?" + l.bn(u, e) + "&", c = !0));
			var f = o + this.ai(r, t.proxy, u, a);
			return c && (f += "&swt=1"), f
		},
		Sn: function(t, i) {
			var n = a[t] && a[t].paramsList;
			if(n)
				for(var r = 0; r < n.length; r++)
					if(n[r].key === i) return e.P(a[t], n[r].value)()
		}
	}
}, function(t, i, n) {
	var l = n(2),
		_ = n(8),
		s = n(5),
		u = n(6),
		r = n(0),
		c = 1,
		f = 2,
		h = 3,
		p = !0,
		w = window,
		d = 0,
		v = 0;
	t.exports = {
		xn: "//eclick.baidu.com/a.js",
		Dn: 72e5,
		Cn: {},
		Tn: null,
		Pn: null,
		On: 500,
		En: !1,
		regisetViewWatch: function(t) {
			this.En || (this.Mn(), this.En = !0), this.Tn = this.Tn || [];
			var i = l.pt(t);
			if(i) {
				var n = t.paramObj,
					r = t.width,
					e = t.height,
					a = t.response.queryid,
					o = t.containerInfo;
				r = o.width, e = o.height;
				var s = new Date,
					u = "" + t.slotId,
					c = {
						uid: t.id,
						slotId: u,
						domEle: i,
						jk: a,
						word: n.ltu,
						iframeStatus: n.dis,
						aw: r,
						ah: e,
						viewContext: {
							opacity: 1,
							pageStayTime: 0,
							pageStayTimeStamp: s,
							inViewTime: 0,
							inViewTimeStamp: s,
							currViewStatus: !1,
							focusTime: 0,
							adViewTime: 0,
							currAdViewStatus: !1,
							adViewTimeStamp: s
						}
					};
				if(window.postMessage && c.slotId && -1 < c.slotId.indexOf("u")) {
					c.sendMessage = function() {
						if(this.watchIframeWindow && this.watchIframeLoaded && this.viewContext && this.viewContext.lastAdViewStatus !== this.viewContext.currAdViewStatus) try {
							var t = this.analysisUrl && this.analysisUrl.split("?"),
								i = t ? t[1] : "";
							this.watchIframeWindow.postMessage(i, this.targetOrigin)
						} catch(n) {}
					};
					var f = i.getElementsByTagName("iframe");
					if(f && f.length) {
						var h = f[0];
						c.watchIframe = h, c.targetOrigin = h.getAttribute("src") || "*";
						try {
							c.watchIframeWindow = h.contentWindow
						} catch(d) {
							c.watchIframeWindow = ""
						}
						c.viewContext.lastAdViewStatus = !1, c.viewContext.lastViewStatus = !1, l.St(c.watchIframe, "load", function() {
							c.watchIframeLoaded = !0, c.viewContext.lastAdViewStatus = !c.viewContext.currAdViewStatus, c.sendMessage()
						})
					}
				}
				this.Un(c, i), this.Tn.push(c)
			}
		},
		unregisetViewWatch: function(t) {
			if(this.Tn)
				for(var i = t.id, n = 0; n < this.Tn.length; n++) {
					if(this.Tn[n].uid === i) return void this.Tn.splice(n, 1)
				}
		},
		Bn: function(t, i) {
			if(t && i) {
				var n = t + "?",
					r = i.viewContext;
				r.inViewTime > this.Dn && (r.inViewTime = this.Dn), r.adViewTime > this.Dn && (r.adViewTime = this.Dn), r.pageStayTime >= this.Dn && (r.pageStayTime = this.Dn);
				var e = [];
				return e.push("tu=" + i.slotId), e.push("op=" + r.opacity), e.push("jk=" + i.jk), e.push("word=" + i.word), e.push("if=" + i.iframeStatus), e.push("aw=" + i.aw), e.push("ah=" + i.ah), e.push("pt=" + r.pageStayTime), e.push("it=" + r.inViewTime), e.push("vt=" + r.adViewTime), e.push("csp=" + i.desktopResolution), e.push("bcl=" + i.browserRegion), e.push("pof=" + i.pageRegion), e.push("top=" + i.top), e.push("left=" + i.left), e.push("uid=" + i.uid), e.push("iw=" + r.currAdViewStatus), n + e.join("&")
			}
		},
		Mn: function() {
			this.Rn(), l.At(r.P(this, this.Ln), 2e3), s.platform && (-1 < s.platform.indexOf("Android") || -1 < s.platform.indexOf("Phone") || -1 < s.platform.indexOf("iPod")) || l.St(w, "beforeunload", r.P(this, this.Nn))
		},
		Un: function(t, i) {
			var n = _.Vi(i);
			t.left = n.left, t.top = n.top;
			var r = window.screen.availWidth,
				e = window.screen.availHeight;
			1e4 < r && (r = 0), 1e4 < e && (e = 0), t.desktopResolution = r + "," + e, t.browserRegion = _.ji(window) + "," + _.Hi(window), t.pageRegion = _.Gi(window) + "," + _.Xi(window)
		},
		Fn: function(t, i) {
			var n, r, e, a = i.isInView,
				o = i.isAdView,
				s = new Date;
			return n = r = e = this.On, t.lastViewStatus = t.currViewStatus, t.lastAdViewStatus = t.currAdViewStatus, v === c && (v = f, n = r = 0, e = r = 0), t.currViewStatus ? (v === c && ((n = parseInt(s.getTime() - t.inViewTimeStamp.getTime(), 10)) < 0 ? n = 0 : n > this.On && (n = this.On)), t.inViewTime += n, t.inViewTimeStamp = s) : a && (t.inViewTimeStamp = s), t.currViewStatus = a, t.currAdViewStatus ? (v === h && ((e = parseInt(s.getTime() - t.adViewTimeStamp.getTime(), 10)) < 0 ? e = 0 : e > this.On && (e = this.On)), t.adViewTime += e, t.adViewTimeStamp = s) : o && (t.adViewTimeStamp = s), t.currAdViewStatus = o, t.pageStayTime = t.pageStayTime || 0, d = d || 0, v === h && (this.pageTimeSpan = parseInt(s.getTime() - t.pageStayTimeStamp.getTime(), 10), r < 0 ? r = 0 : r > this.On && (r = this.On)), t.pageStayTime += r, d += r, p && (t.focusTime += r), t.pageStayTimeStamp = s, t.opacity = i.opacity, t
		},
		jn: function(t) {
			var i = t.domEle;
			if(!i) return {
				isInView: !1,
				isAdView: !1,
				opacity: 1
			};
			var n = !1,
				r = !1,
				e = 1;
			if(p) try {
				if(e = this.Ji(t), this.Hn(i)) {
					var a = _.ji(w),
						o = _.Hi(w),
						s = this.Vi(i),
						u = _.$i(i),
						c = _.Zi(i);
					n = 0 <= s.top && s.bottom <= o && 0 <= s.left && s.left <= a;
					var f = 0 < s.top ? s.top : 0,
						h = s.bottom > o ? o : s.bottom,
						d = 0 < s.left ? s.left : 0,
						l = s.right > a ? a : s.right;
					if(f < h && d < l) r = .5 * (u * c) < (h - f) * (l - d)
				} else r = n = !1
			} catch(v) {}
			return {
				isInView: n,
				isAdView: r,
				opacity: e
			}
		},
		Hn: function(t) {
			return !!t && (50 <= _.Ji(t) && _.rn(t))
		},
		Ji: function(t) {
			var i = t.uid,
				n = t.domEle;
			this.Cn[i] = this.Cn[i] || 0;
			var r = _.Ji(n);
			return 100 === r && (this.Cn[i] |= 1), r < 100 && 0 < r && (this.Cn[i] |= 2), 0 === r && (this.Cn[i] |= 4), this.Cn[i]
		},
		Vi: function(t) {
			var i = _.Wi(t),
				n = _.Yi(window),
				r = _.Ki(window),
				e = _.$i(t, !1),
				a = _.Zi(t, !1);
			return {
				top: i.top - r,
				bottom: i.top - r + a,
				left: i.left - n,
				right: i.left - n + e,
				topAbs: i.top,
				bottomAbs: i.top + a,
				leftAbs: i.left,
				rightAbs: i.left + e
			}
		},
		Wn: function() {
			if(this.Tn)
				for(var t = 0, i = this.Tn.length; t < i; t++) {
					var n = this.Tn[t],
						r = this.jn(n);
					n.viewContext = this.Fn(n.viewContext, r), n.analysisUrl = this.Bn(this.xn, n), n.sendMessage && n.sendMessage()
				}
		},
		zn: function() {
			this.Wn(), d >= this.Dn && this.Nn(!1)
		},
		Rn: function() {
			v = c, this.Vn(w), (!s.ie || s.ie && 6 < s.ie) && this.zn(), this.Pn = setInterval(r.P(this, this.zn), this.On)
		},
		Ln: function() {
			var t, i, n, r;
			for(t = 0, i = this.Tn.length; t < i; t++)(n = this.Tn[t]) && (r = n.domEle) && this.Un(n, r)
		},
		Nn: function(t) {
			try {
				if(clearInterval(this.Pn), v !== f) return void(v = h);
				var i, n;
				for(v = h, this.Wn(), i = 0, n = this.Tn.length; i < n; i++) {
					var r = this.Tn[i];
					r && r.analysisUrl && !r.isSended && (r.isSended = !0, 0 === i && (r.analysisUrl += "&total=" + this.Tn.length), u.Ci({
						url: r.analysisUrl
					}))
				}
				if(t) {
					var e, a = (new Date).getTime();
					if(s.ie)
						for(e = a + 200; a < e;) a = (new Date).getTime();
					else {
						for(n = 1e5, i = 0; i < n; i++);
						for(n = 1e7 < (n = 2e7 / ((e = (new Date).getTime()) - a)) ? 1e7 : n, i = 0; i < n; i++);
					}
				}
			} catch(o) {}
		},
		Vn: function(t) {
			t = t || w, p = !0, s.ie ? (l.St(t, "focusin", r.P(this, this.Jn)), l.St(t, "focusout", r.P(this, this.Gn))) : (l.St(t, "focus", r.P(this, this.Jn)), l.St(t, "blur", r.P(this, this.Gn)))
		},
		Jn: function() {
			p = !0
		},
		Gn: function() {
			p = !1
		}
	}
}, function(t, i, n) {
	var r, e, a, o = n(3),
		s = n(0),
		u = {
			mixDom: {
				percent: 10,
				expId: "110063",
				baseId: "110053"
			}
		};
	if(!o.__onlyExps)
		for(var c in o.__onlyExps = {}, u) u.hasOwnProperty(c) && u[c] && (a = u[c]).onlyExp && (r = a.expId, e = a.baseId, r && (o.__onlyExps[r] = !0), e && (o.__onlyExps[e] = !0));
	t.exports = {
		Xn: function(t, i) {
			return t && i ? t += "," + i : t = t || i, t
		},
		Kn: function(t) {
			var i = "",
				n = 1e4 * Math.random(),
				r = 100 * t.percent,
				e = 200 * t.percent;
			return n < r ? i = t.expId : r <= n && n < e && (i = t.baseId), i
		},
		Yn: function(t, i) {
			var n = u[t],
				r = this.Kn(n),
				e = "";
			return(r = r && this.$n(i) ? "" : r) && (r === n.expId ? e = "exp" : r === n.baseId && (e = "base")), {
				expType: e,
				expId: r
			}
		},
		$n: function(t) {
			if(s.f(o.__onlyExps)) return !1;
			var i = this.Qn(t),
				n = i && i.split(",");
			if(0 < n.length)
				for(var r = 0; r < n.length; r++)
					if(o.__onlyExps[n[r]]) return !0;
			return !1
		},
		Qn: function(t) {
			return t && t.exps ? t.paramObj && t.paramObj.exps ? t.paramObj.exps : t.exps : ""
		}
	}
}, function(t, i, n) {
	var u = n(1),
		c = n(25),
		f = n(11),
		h = n(0),
		d = n(7),
		r = n(9);
	t.exports = {
		getFrameHTML: function(t) {
			if(t.isPdbAd) return r.dn(t);
			var i = this.ln(t);
			return this.vn(i)
		},
		ln: function(t) {
			var i = t.containerInfo,
				n = t.width || i.width,
				r = t.height || i.height,
				e = t.isDsFlow ? f.An(t) : f.getPmpRequestUrl(t),
				a = "";
			if(t.isNeedCacheRequest) {
				var o = t.response.queryid;
				c.Zn(o, t), d.Li("adsbybaidu_callback", h.P(c, c.tr)), a = 'onload="' + u.M + "(1, '" + o + "', this);\""
			} else if(t.styleOpenApi && t.styleOpenApi.floatingState && "show" !== t.styleOpenApi.floatingState || 2 === i.location) {
				var s = t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : "upSlideShow";
				a = 'onload="' + u.M + "(2, '" + i.location + "', '" + s + "', this);\""
			}
			return {
				iframeId: "iframe" + t.id,
				srcAttriName: "src",
				onloadDefine: a,
				iframeWidth: "" + n,
				iframeHeight: "" + r,
				url: e
			}
		},
		vn: function(t) {
			var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
			return h.h(i, t)
		}
	}
}, function(t, i) {
	var a = null,
		e = !1;
	try {
		(a = window.localStorage) && a.removeItem && (e = !0)
	} catch(n) {}
	t.exports = {
		ir: "___ds_storage__",
		nr: 72e5,
		_i: function() {
			return e
		},
		ti: function(t, i, n) {
			if(a) {
				i = n ? encodeURIComponent(i) : i;
				try {
					a.setItem(t, i)
				} catch(r) {}
			}
		},
		Nt: function(t, i) {
			if(a) try {
				var n = a.getItem(t);
				return i && n ? decodeURIComponent(n) : n
			} catch(r) {
				return null
			}
			return null
		},
		Ti: function(t, i, n) {
			if(a) {
				i = n ? encodeURIComponent(i) : i;
				var r = this.Nt(t) || "";
				r += (r && "|") + i;
				try {
					this.ti(t, r)
				} catch(e) {}
			}
		},
		rr: function(t) {
			try {
				a && a.removeItem(t)
			} catch(i) {}
		},
		Pi: function(t, i, n) {
			if(a) {
				i = n ? encodeURIComponent(i) : i;
				var r = this.Nt(t) || "";
				if(r = r.replace(new RegExp(i + "\\|?", "g"), "").replace(/\|$/, "")) try {
					this.ti(t, r)
				} catch(e) {} else a.removeItem(t)
			}
		},
		ki: function(t) {
			var i, n = this.Nt(this.ir + t) || "";
			if(e && n) {
				var r = (new Date).getTime();
				n = n.split("|"), (parseInt(n[1], 10) || 0) + this.nr > r && (i = parseInt(n[0], 10) || 0)
			}
			return i
		},
		er: function(t) {
			this.rr(this.ir + t)
		}
	}
}, function(t, i) {
	t.exports = {
		Ci: function(t) {
			var i = t.response.pdb_deliv.deliv_des,
				n = i && i._html,
				r = n && n.monitorUrl;
			if(r) {
				var e = new Image,
					a = "log" + +new Date;
				window[a] = e, "http" === r.substr(0, 4).toLowerCase() ? ("http://" === r.substr(0, 7).toLowerCase() && (r = r.replace("http://", "//")), "https://" === r.substr(0, 8).toLowerCase() && (r = r.replace("https://", "//"))) : r = "//" + r;
				e.onload = e.onerror = e.onabort = function() {
					e.onload = e.onerror = e.onabort = null;
					try {
						delete window[a]
					} catch(t) {
						window[a] = undefined
					}
				}, e.src = r
			}
		}
	}
}, function(t, i) {
	t.exports = {
		Rt: function(t, i) {
			return t = t || 0, i = i || 1, Math.floor(Math.random() * (i - t + 1)) + t
		},
		Ft: function(t, i) {
			for(var n = "", r = this.Rt(t, i), e = 0; e < r; e++) n += String.fromCharCode(Math.floor(26 * Math.random()) + 97);
			return n
		},
		Ut: function(t) {
			var i = !1;
			return t = 10 * (t || 50), this.Rt(0, 1e3) < t && (i = !0), i
		},
		Nt: function(t) {
			var i;
			t && 0 < t.length && (i = t[this.Rt(0, t.length - 1)]);
			return i
		},
		jt: function() {
			var t = ["padding-left:0px;", "padding-right:0px;", "padding-top:0px;", "padding-bottom:0px;", "padding:0px;", "margin-left:0px;", "margin-right:0px;", "margin-top:0px;", "margin-bottom:0px;", "margin:0px;", "cursor:auto;", "visibility:visible;", "text-align:left;", "zoom:1;"];
			return t[this.Rt(0, t.length - 1)]
		},
		yn: function(t) {
			for(var i = t.length; 0 < i; i--) {
				var n = Math.floor(Math.random() * i),
					r = t[i - 1];
				t[i - 1] = t[n], t[n] = r
			}
			return t
		}
	}
}, function(t, i, n) {
	var f = n(0),
		h = n(7);
	t.exports = {
		ar: "bizOrientations",
		or: "bizUrgentOrientations",
		sr: function(t, i) {
			var n = this.ur.apply(this, arguments);
			return this.cr(t, n)
		},
		ur: function(t, i) {
			return t && /^[0-9a-zA-Z]+$/.test(t) && i ? i = f.k(i) ? i : Array.prototype.slice.call(arguments, 1) : []
		},
		cr: function(t, i) {
			if(!i || !i.length) return !1;
			var n = this.ar,
				r = h.Bi(n) || {},
				e = {};
			for(var a in r) f.e.call(r, a) && (e[a] = f.k(r[a]) ? r[a].slice() : r[a]);
			for(var o = e[t] || [], s = i.length, u = 0; u < s; u++) {
				var c = i[u];
				"string" == typeof c && (c = encodeURIComponent(c)).length <= 100 && (o[o.length] = c)
			}
			return !!o.length && (e[t] = f.I(o), h.Mi(n, e), !0)
		},
		fr: function(t) {
			t = t || 500, t = Math.max(0, Math.min(t, 500));
			var i, n = [],
				r = h.Bi(this.or) || h.Bi(this.ar) || {};
			if(f.S(r))
				for(var e in r) f.e.call(r, e) && (i = e + "=" + r[e].join(","), n[n.length] = i);
			h.Mi(this.or, undefined), n.sort(function(t, i) {
				return t.length - i.length
			});
			for(var a = "", o = n.length, s = 0; s < o && !(a.length + n[s].length >= t); s++) a += (s ? "&" : "") + n[s];
			return a
		}
	}
}, function(t, i, n) {
	var e = n(20),
		a = n(1),
		o = n(0),
		s = n(6);
	t.exports = {
		hr: function(t) {
			o.S(t) ? (this.hasher = t.hasher, this.time = t.time, this.url = t.url, this.random = t.random, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
		},
		dr: function() {
			var t = [];
			t.push((new Date).getTime()), t.push(Math.random()), this.url && t.push(this.url);
			try {
				if(t.push(navigator.userAgent), t.push(navigator.language), t.push(window.screen.colorDepth), this.screen_resolution) {
					var i = this.lr();
					void 0 !== i && t.push(i.join("x"))
				}
				t.push((new Date).getTimezoneOffset()), t.push(this.vr()), t.push(this._r()), t.push(this.pr()), document.body ? t.push(typeof document.body.addBehavior) : t.push(typeof undefined), t.push(typeof window.openDatabase), t.push(navigator.cpuClass), t.push(navigator.platform), t.push(navigator.doNotTrack), this.canvas && this.wr() && t.push(this.mr())
			} catch(n) {
				s.Et(a.et, n, {
					key: "pageSearchId",
					value: "navigatorParam"
				})
			}
			return this.hasher ? this.hasher(t.join("~~~"), 31) : this.gr(t.join("~~~"), 31)
		},
		yr: function(t, i) {
			t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
			var n = [0, 0, 0, 0];
			return n[3] += t[3] + i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
		},
		br: function(t, i) {
			t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
			var n = [0, 0, 0, 0];
			return n[3] += t[3] * i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * i[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * i[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * i[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * i[3] + t[1] * i[2] + t[2] * i[1] + t[3] * i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
		},
		Ir: function(t, i) {
			return 32 === (i %= 64) ? [t[1], t[0]] : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i | t[0] >>> 32 - i] : (i -= 32, [t[1] << i | t[0] >>> 32 - i, t[0] << i | t[1] >>> 32 - i])
		},
		kr: function(t, i) {
			return 0 === (i %= 64) ? t : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i] : [t[1] << i - 32, 0]
		},
		Ar: function(t, i) {
			return [t[0] ^ i[0], t[1] ^ i[1]]
		},
		Sr: function(t) {
			return t = this.Ar(t, [0, t[0] >>> 1]), t = this.br(t, [4283543511, 3981806797]), t = this.Ar(t, [0, t[0] >>> 1]), t = this.br(t, [3301882366, 444984403]), t = this.Ar(t, [0, t[0] >>> 1])
		},
		gr: function(t, i) {
			i = i || 0;
			for(var n = (t = t || "").length % 16, r = t.length - n, e = [0, i], a = [0, i], o = [0, 0], s = [0, 0], u = [2277735313, 289559509], c = [1291169091, 658871167], f = 0; f < r; f += 16) o = [255 & t.charCodeAt(f + 4) | (255 & t.charCodeAt(f + 5)) << 8 | (255 & t.charCodeAt(f + 6)) << 16 | (255 & t.charCodeAt(f + 7)) << 24, 255 & t.charCodeAt(f) | (255 & t.charCodeAt(f + 1)) << 8 | (255 & t.charCodeAt(f + 2)) << 16 | (255 & t.charCodeAt(f + 3)) << 24], s = [255 & t.charCodeAt(f + 12) | (255 & t.charCodeAt(f + 13)) << 8 | (255 & t.charCodeAt(f + 14)) << 16 | (255 & t.charCodeAt(f + 15)) << 24, 255 & t.charCodeAt(f + 8) | (255 & t.charCodeAt(f + 9)) << 8 | (255 & t.charCodeAt(f + 10)) << 16 | (255 & t.charCodeAt(f + 11)) << 24], o = this.br(o, u), o = this.Ir(o, 31), o = this.br(o, c), e = this.Ar(e, o), e = this.Ir(e, 27), e = this.yr(e, a), e = this.yr(this.br(e, [0, 5]), [0, 1390208809]), s = this.br(s, c), s = this.Ir(s, 33), s = this.br(s, u), a = this.Ar(a, s), a = this.Ir(a, 31), a = this.yr(a, e), a = this.yr(this.br(a, [0, 5]), [0, 944331445]);
			switch(o = [0, 0], s = [0, 0], n) {
				case 15:
					s = this.Ar(s, this.kr([0, t.charCodeAt(f + 14)], 48));
				case 14:
					s = this.Ar(s, this.kr([0, t.charCodeAt(f + 13)], 40));
				case 13:
					s = this.Ar(s, this.kr([0, t.charCodeAt(f + 12)], 32));
				case 12:
					s = this.Ar(s, this.kr([0, t.charCodeAt(f + 11)], 24));
				case 11:
					s = this.Ar(s, this.kr([0, t.charCodeAt(f + 10)], 16));
				case 10:
					s = this.Ar(s, this.kr([0, t.charCodeAt(f + 9)], 8));
				case 9:
					s = this.Ar(s, [0, t.charCodeAt(f + 8)]), s = this.br(s, c), s = this.Ir(s, 33), s = this.br(s, u), a = this.Ar(a, s);
				case 8:
					o = this.Ar(o, this.kr([0, t.charCodeAt(f + 7)], 56));
				case 7:
					o = this.Ar(o, this.kr([0, t.charCodeAt(f + 6)], 48));
				case 6:
					o = this.Ar(o, this.kr([0, t.charCodeAt(f + 5)], 40));
				case 5:
					o = this.Ar(o, this.kr([0, t.charCodeAt(f + 4)], 32));
				case 4:
					o = this.Ar(o, this.kr([0, t.charCodeAt(f + 3)], 24));
				case 3:
					o = this.Ar(o, this.kr([0, t.charCodeAt(f + 2)], 16));
				case 2:
					o = this.Ar(o, this.kr([0, t.charCodeAt(f + 1)], 8));
				case 1:
					o = this.Ar(o, [0, t.charCodeAt(f)]), o = this.br(o, u), o = this.Ir(o, 31), o = this.br(o, c), e = this.Ar(e, o)
			}
			return e = this.Ar(e, [0, t.length]), a = this.Ar(a, [0, t.length]), e = this.yr(e, a), a = this.yr(a, e), e = this.Sr(e), a = this.Sr(a), e = this.yr(e, a), a = this.yr(a, e), ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
		},
		_r: function() {
			try {
				return !!window.localStorage
			} catch(t) {
				return !0
			}
		},
		vr: function() {
			try {
				return !!window.sessionStorage
			} catch(t) {
				return !0
			}
		},
		pr: function() {
			try {
				return !!window.indexedDB
			} catch(t) {
				return !0
			}
		},
		wr: function() {
			var t = document.createElement("canvas");
			return !(!t.getContext || !t.getContext("2d"))
		},
		lr: function() {
			return this.screen_orientation ? window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height] : [window.screen.height, window.screen.width]
		},
		mr: function() {
			var t = document.createElement("canvas"),
				i = t.getContext("2d"),
				n = "http://valve.github.io";
			return i.textBaseline = "top", i.font = '14px "Arial"', i.textBaseline = "alphabetic", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", i.fillText(n, 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.7)", i.fillText(n, 4, 17), t.toDataURL()
		},
		xr: function() {
			try {
				for(var t = "", i = e.paramsList, n = 0; n < i.length; n++)
					if("ltu" === i[n].key) {
						t = o.P(e, i[n].value)();
						break
					}
				return this.hr({
					url: t
				}), this.dr()
			} catch(r) {
				s.Et(a.et, r, {
					key: "pageSearchId"
				})
			}
		}
	}
}, function(t, i, n) {
	var e = n(1),
		r = n(5),
		a = n(2),
		o = n(8),
		s = n(21),
		u = n(30),
		c = n(3),
		f = window,
		h = f.document,
		d = f.navigator,
		l = a.Dt();
	t.exports = {
		paramsList: [{
			key: "dbv",
			value: function() {
				return r.qihoo ? "1" : r.chrome ? "2" : "0"
			}
		}, {
			key: "drs",
			value: function() {
				try {
					return {
						uninitialized: 0,
						loading: 1,
						loaded: 2,
						interactive: 3,
						complete: 4
					}[h.readyState]
				} catch(t) {
					return -1
				}
			}
		}, {
			key: "pcs",
			value: function() {
				return [o.ji(l), o.Hi(l)].join("x")
			}
		}, {
			key: "pss",
			value: function() {
				return [o.Gi(l), o.Xi(l)].join("x")
			}
		}, {
			key: "cfv",
			value: function() {
				return r.Si()
			}
		}, {
			key: "cpl",
			value: function() {
				return d.plugins.length || 0
			}
		}, {
			key: "chi",
			value: function() {
				return f.history.length || 0
			}
		}, {
			key: "cce",
			value: function() {
				return d.cookieEnabled || 0
			}
		}, {
			key: "cec",
			value: function() {
				return(h.characterSet ? h.characterSet : h.charset) || ""
			}
		}, {
			key: "tlm",
			value: function() {
				return Date.parse(h.lastModified) / 1e3
			}
		}, {
			key: "prot",
			value: function() {
				return "2"
			}
		}, {
			key: "rw",
			value: function() {
				var t = Math.max(320, Math.min(window.innerWidth, window.innerHeight));
				return isNaN(t) && (t = Math.min(o.ji(), o.Hi())), t || 0
			}
		}, {
			key: "ltu",
			encode: !0,
			limit: 700,
			value: function() {
				var t;
				return 0 < (t = c.location && c.location.href ? c.location.href : s.Dr(function(t) {
					var i = o.ji(t),
						n = o.Hi(t);
					return 400 < i && 120 < n
				})).indexOf("cpro_prev") && (t = t.slice(0, t.indexOf("?"))), t
			}
		}, {
			key: "liu",
			encode: !0,
			limit: 700,
			value: function() {
				return a.bt(f) ? h.URL : ""
			}
		}, {
			key: "ltr",
			encode: !0,
			limit: 300,
			value: function() {
				var t = "";
				try {
					t = l.opener ? l.opener.document.location.href : ""
				} catch(i) {}
				return t || l.document.referrer
			}
		}, {
			key: "lcr",
			encode: !0,
			value: function() {
				if("union" === this.Cr.productLine) return "";
				var t = h.referrer;
				if(!t) return "";
				var i = t.replace(/^https?:\/\//, "");
				i = (i = i.split("/")[0]).split(":")[0], i = s.Tr(i);
				var n = s.Tr(),
					r = u.Pr(e.L);
				return r && n === i ? r : n !== i ? (u.Or(e.L, t, {
					domain: n
				}), t) : ""
			}
		}, {
			key: "ecd",
			encode: !0,
			value: function() {
				return r.ie && r.ie < 9 ? 0 : 1
			}
		}],
		setSlotInfo: function(t) {
			this.Cr = t
		}
	}
}, function(t, i, n) {
	var r = n(2);
	t.exports = {
		Dr: function(t) {
			var i = r.Dt(t),
				n = "";
			return r.bt(i) && (n = i.document.referrer), n = n || i.location.href
		},
		Tr: function(t) {
			0 === (t = t || document.domain).indexOf("www.") && (t = t.substr(4)), "." === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1));
			var i = "([a-z0-9][a-z0-9\\-]*?\\.(?:" + ["com", "cn", "net", "org", "gov", "info", "la", "cc", "co", "jp", "us", "hk", "tv", "me", "biz", "in", "be", "io", "tk", "cm", "li", "ru", "ws", "hn", "fm", "tw", "ma", "in", "vn", "name", "mx", "gd", "im"].join("|") + ")(?:\\.(?:cn|jp|tw|ru|th))?)$",
				n = new RegExp(i, "i"),
				r = t.match(n);
			return r ? r[0] : t
		}
	}
}, function(t, i) {
	t.exports = {
		paramsList: [],
		Er: {
			clid: {
				key: "apdi",
				encode: !0
			},
			cuid: {
				key: "udi",
				encode: !0
			},
			ctkey: {
				key: "lcdi",
				encode: !0
			},
			acid: {
				key: "acid",
				encode: !0
			}
		},
		Mr: function(t, i) {
			for(var n in this.paramsList = [], i)
				if(n && i.hasOwnProperty(n) && this.Er[n]) {
					var r = this.Er[n],
						e = {};
					try {
						r.key && (e.key = r.key, e.value = this.Ur(r, i[n])), r && !r.key && (e.key = n, e.value = this.Ur(r, i[n])), this.paramsList.push(e)
					} catch(a) {}
				}
		},
		Ur: function(t, i) {
			return t.encode ? encodeURIComponent(i) : i
		}
	}
}, function(t, i, n) {
	var c = n(3);
	c.__mappingCache = c.__mappingCache || {}, t.exports = {
		Vt: function(t) {
			if(!t) return 0;
			for(var i = 21, n = 0; n < t.length; n++) i += t.charCodeAt(n);
			return i
		},
		Br: function(t) {
			var i, n = t % 25 + 1,
				r = "key" + n;
			if(!(i = c.__mappingCache[r])) {
				i = {};
				for(var e = 97; e <= 122; e++) {
					var a = String.fromCharCode(e),
						o = e + n;
					o = 122 < o ? o - 26 : o;
					var s = String.fromCharCode(o);
					i[a] = s
				}
				c.__mappingCache[r] = i
			}
			return i
		},
		Rr: function(t) {
			var i, n = t % 64 + 1,
				r = "v" + n,
				e = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-.";
			if(!(i = c.__mappingCache[r])) {
				i = {};
				for(var a = 0; a < e.length; a++) {
					var o = e.charAt(a),
						s = a + n,
						u = e.charAt(65 <= s ? s - 65 : s);
					i[o] = u
				}
				c.__mappingCache[r] = i
			}
			return i
		},
		bn: function(t, i) {
			for(var n = this.Br(t), r = this.Rr(t), e = {}, a = 0; a < i.length; a++) {
				i[a] = i[a].replace(/\./g, "%_"), i[a] = i[a].replace(/%/g, ".");
				var o = i[a].split("=");
				e[o[0]] = o[1]
			}
			var s = [];
			for(var u in e)
				if(e.hasOwnProperty(u) && e[u]) {
					for(var c = "", f = 0; f < u.length; f++) {
						c += n[u.charAt(f)]
					}
					c += "=";
					for(var h = e[u], d = 0; d < h.length; d++) {
						var l = h.charAt(d);
						r[l] ? c += r[l] : c += l
					}
					s.push(c)
				}
			return s.join("&")
		}
	}
}, function(t, i, n) {
	var r = n(1),
		e = n(3),
		a = n(10),
		o = n(2),
		s = n(15),
		u = n(0),
		c = n(7),
		f = n(13),
		h = n(5);
	t.exports = {
		Lr: function() {
			this.idPrefix = "BAIDU_DUP_fp_", this.fpElId = this.idPrefix + "wrapper", o.g(this.fpElId) || a.St(window, "load", u.P(this, this.Nr))
		},
		Nr: function() {
			if(!o.g(this.fpElId)) {
				var t = window.document,
					i = t.body,
					n = t.createElement("div");
				n.id = this.fpElId, n.style.position = "absolute", n.style.left = "-1px", n.style.bottom = "-1px", n.style.zIndex = 0, n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", n.style.visibility = "hidden", n.style.display = "none";
				var r = t.createElement("iframe");
				r.id = this.idPrefix + "iframe", r.src = "https://pos.baidu.com/wh/o.htm?ltr=", r.style.width = 0, r.style.height = 0, r.style.visibility = "hidden", r.style.display = "none";
				try {
					n.insertBefore(r, n.firstChild), i && i.insertBefore(n, i.firstChild)
				} catch(e) {}
			}
		},
		ui: function(t) {
			try {
				if(e.antiScript || !this.Fr(t)) return;
				e.antiScript = document.createElement("script"), e.antiScript.type = "text/javascript", e.antiScript.async = !0, e.antiScript.src = "//cpro.baidustatic.com/cpro/ui/ab.min.js";
				var i = document.getElementsByTagName("script")[0];
				i && i.parentNode && i.parentNode.insertBefore(e.antiScript, i), o.Ot(e.antiScript, function() {
					window.BAIDU_SSP_sendAntiLog && window.BAIDU_SSP_sendAntiLog()
				}), c.Li("__abbaidu_2028_cb", u.P(this, function(t) {
					t && s.ti("___ds_storage__loadAntiFile", t)
				}))
			} catch(n) {}
		},
		jr: function(t) {
			var i = t.paramObj,
				n = i.exps || "";
			if(this.Fr(t)) {
				var r = s.Nt("___ds_storage__loadAntiFile") ? "119015" : "";
				n = f.Xn(n, r), i.exps = n
			}
		},
		Fr: function(t) {
			return(h.isAndroid || h.isIOS) && !o.bt(window) && !t.isAnti && r.ht.test(t.id)
		}
	}
}, function(t, i, n) {
	var c = n(4),
		f = n(1),
		h = n(2),
		d = n(9),
		a = n(12),
		r = {},
		l = {};
	t.exports = {
		Zn: function(t, i) {
			r[t] = i
		},
		Hr: function(t) {
			return r[t]
		},
		Wr: function(t, i) {
			if(!t || l[t]) return !1;
			l[t] = i;
			var n = this.Hr(t),
				r = f.V + "dpv=" + t + "&di=" + n.slotId;
			h.Tt(r)
		},
		tr: function(t) {
			if("success" !== (t.html || "success")) {
				var i = this.Hr(t.dpv);
				if(i) {
					var n = i.response,
						r = n.pdb_deliv,
						e = n.rtb_deliv,
						a = n.order_deliv,
						o = r.deliv_des;
					if(o = o._html || {}, 0 === parseInt(r.deliv_id, 10) && (0 !== parseInt(a.deliv_id, 10) || 0 !== parseInt(e.deliv_id, 10)) && 7 === n.placement.complement_type) return this.zr(i);
					if("rich" === o.type) {
						var s = h.pt(i);
						d.on(s, o.content)
					} else {
						var u = l[t.dpv];
						c.Jt(i, f.K), u.outerHTML = d.dn(i)
					}
				}
			}
		},
		zr: function(t) {
			var i = t.containerId,
				n = h.pt(t),
				r = document.getElementById(i + "_left"),
				e = document.getElementById(i + "_right");
			n && (a.unregisetViewWatch(t), n.parentNode.removeChild(n)), r && r.parentNode.removeChild(r), e && e.parentNode.removeChild(e)
		}
	}
}, function(t, i, n) {
	var e = n(1),
		r = n(4),
		a = n(24),
		o = n(7),
		s = n(27),
		u = n(35),
		c = n(36),
		f = n(37),
		h = n(38),
		d = n(39),
		l = n(2),
		v = n(0),
		_ = n(3),
		p = n(12),
		w = n(40),
		m = n(8),
		g = n(6),
		y = n(41),
		b = n(42),
		I = n(45),
		k = n(46),
		A = n(47),
		S = n(48),
		x = n(25),
		D = n(9),
		C = {
			inlayFix: b,
			"mobile.inlayFix": I,
			"mobile.float": k,
			"mobile.insideText": A,
			"ds.inlay": S
		};
	t.exports = {
		Kt: function() {
			this.Vr(), w.qr(), d.qr(), c.qr(), f.qr(), u.qr(), h.qr(), a.Lr()
		},
		Vr: function() {
			o.Li(e.R, v.P(this, this.Jr)), o.Li(e.M, this.Gr)
		},
		Jr: function(t) {
			try {
				var i = r.Ht(t.tuid);
				if(!i || i.containerId && !l.pt(i)) return;
				i.response = t, r.Xt(i.id, e.G), r.processSlot(i), i.timestampWatcher.t3 = (new Date).getTime(), r.pi(i), a.jr(i), this.Xr(i)
			} catch(n) {
				if(!t.tuid) return;
				g.Et(e.et, n, {
					pos: "callback",
					id: t.tuid
				})
			}
		},
		Xr: function(t) {
			var i = s.Kr(t);
			if(i) {
				var n = C[i] || this.Yr(i);
				n ? this.$r(i, t, n) : this.Qr(i, t)
			}
		},
		Qr: function(t, i) {
			var n = t;
			0 < n.indexOf(".") && (n = n.replace(".", "/")), n = e.ut + n + ".js", y.Zr(i.id, n, v.P(this, this.te, t, i))
		},
		te: function(t, i) {
			try {
				var n = this.Yr(t);
				this.$r(t, i, n)
			} catch(r) {
				g.Et(e.et, r, {
					pos: "painterLoadCallback",
					painter: t,
					id: i.id
				})
			}
		},
		Yr: function(t) {
			var i = _.painter;
			if(i) {
				var n = t.split(".");
				return "mobile" === n[0] ? i.mobile && i.mobile[n[1]] : i[n[0]]
			}
		},
		$r: function(t, i, n) {
			n && (n.render(i), this.ne(i), t && -1 < t.indexOf("mobile") && p.regisetViewWatch(i), this.re(i))
		},
		ne: function(i) {
			var t = l.pt(i),
				n = t && t.querySelector && t.querySelector("iframe");
			n && l.St(n, "load", function() {
				if(window.JSON && window.JSON.stringify && n.contentWindow && n.contentWindow.postMessage) {
					var t = JSON.stringify({
						type: 1,
						tuid: i.id
					});
					n.contentWindow.postMessage(t, "*")
				}
			})
		},
		Gr: function(t) {
			try {
				var i = Array.prototype.slice.call(arguments, 1);
				switch(t) {
					case "auto":
						w.Jr.apply(w, i);
						break;
					case 1:
						x.Wr.apply(x, i);
						break;
					case 2:
						k.ee.apply(k, i);
						break;
					case 3:
						D.sn.apply(D, i)
				}
			} catch(n) {
				g.Et(e.et, n, {
					pos: "commoncallback"
				})
			}
		},
		re: function(t) {
			var i = l.pt(t); - 1 < (t.paramObj.dis ? t.paramObj.ltu : window.location.href).indexOf(e.st) && m["in"](i, t.id)
		}
	}
}, function(t, i, n) {
	var h = n(1),
		d = n(13);
	t.exports = {
		Kr: function(t) {
			var i = t.response;
			if(!i.painter) {
				var n = this.ae(t);
				if(n) return n
			}
			return this.oe(i)
		},
		ae: function(t) {
			var i = t.response.placement.userdefine || "",
				n = t.response.placement.encode_userdefine || "";
			n && "encoded" === n && (i = decodeURIComponent(i), t.response.placement.userdefine = i);
			for(var r = i.split("|") || [], e = {}, a = 0, o = r.length; a < o; a++) {
				var s = r[a].split("="),
					u = s[0];
				u && (e[u] = s[1])
			}
			if(3 === r.length && e.hasOwnProperty("cpro_template") && e.hasOwnProperty("cpro_version") && h.dt[e.cpro_template] && "2.0" === e.cpro_version && (t.paramObj.exps = d.Xn("117318", t.paramObj.exps)), e.hasOwnProperty("painter")) return e.painter;
			var c = t.styleOpenApi.tn || "",
				f = parseInt(t.styleOpenApi.xuanting || 0, 10);
			return 0 <= c.indexOf("mobile") && 0 < f ? "mobile.float" : 0 <= c.indexOf("mobile") ? "mobile.inlayFix" : 0 < f ? "dynamicFloat" : c && 0 < c.length && c.indexOf("_xuanfu") < 0 && c.indexOf("float") < 0 ? "inlayFix" : ""
		},
		oe: function(t) {
			return this.se(t) ? "ds.inlay" : this.ue(t) ? "mobile.float" : this.ce(t) ? "mobile.inlayFix" : this.fe(t) ? "mobile.float" : this.he(t) ? "mobile.insideText" : this.de(t) ? "inlayFix" : this.le(t) ? "insideText" : this.ve(t) ? "dynamicFloat" : this._e(t) ? "bottomSearchBar" : void 0
		},
		_e: function(t) {
			var i = t.placement,
				n = i.container,
				r = i.fillstyle;
			return !(3 !== n.anchoredType || !n.slide || 9 !== r.btnStyleId)
		},
		de: function(t) {
			var i = t.placement,
				n = i.basic,
				r = i.container,
				e = r.floated;
			return 1 === n.rspFormat && 1 === n.flowType && 1 === r.anchoredType && (!e || (1 === e.trigger || !this.pe(e)))
		},
		pe: function(t) {
			for(var i in t) return !0;
			return !1
		},
		ve: function(t) {
			var i = t.placement,
				n = i.basic,
				r = i.container,
				e = r.floated;
			return !(1 !== n.rspFormat || 1 !== n.flowType || 1 !== r.anchoredType || !e || 8 !== e.trigger)
		},
		le: function(t) {
			var i = t.placement,
				n = i.basic,
				r = i.container;
			return 3 === n.rspFormat && 1 === n.flowType && 8 === r.occurrence && 11 === r.anchoredType
		},
		ce: function(t) {
			var i = t.placement,
				n = i.basic,
				r = i.container;
			return 1 === n.rspFormat && 2 === n.flowType && 1 === r.anchoredType
		},
		fe: function(t) {
			var i = t.placement,
				n = i.basic,
				r = i.container;
			return 1 === n.rspFormat && 2 === n.flowType && (3 === r.anchoredType || 11 === r.anchoredType)
		},
		he: function(t) {
			var i = t.painter,
				n = t.placement,
				r = n.basic,
				e = n.container;
			return 3 === i || "mobile.insideText" === i || !i && 3 === r.rspFormat && 2 === r.flowType && 8 === e.occurrence && 11 === e.anchoredType
		},
		se: function(t) {
			var i = t.painter;
			return 1 === i || "mobile.inlayFix" === i || "inlayFix" === i
		},
		ue: function(t) {
			var i = t.painter;
			return 2 === i || "mobile.float" === i
		}
	}
}, function(t, i, n) {
	try {
		a = n(3), o = n(7), s = n(0), u = n(4), c = n(12), f = n(14), h = n(9), d = n(11), l = n(26), n(49), o.Li("regisetViewWatch", s.P(c, c.regisetViewWatch), a), o.Li("getFrameHTML", s.P(f, f.getFrameHTML), a), o.Li("renderRichMaterial", s.P(h, h.renderRichMaterial), a), o.Li("processSlotInfo", s.P(u, u.processSlotInfo), a), o.Li("getPmpRequestUrl", s.P(d, d.getPmpRequestUrl), a), l.Kt()
	} catch(v) {
		var r = n(6),
			e = n(1);
		r.Et(e.et, v, {
			date: "0604"
		})
	}
	var a, o, s, u, c, f, h, d, l
}, function(t, i, n) {
	var a = n(2),
		o = n(8),
		e = n(5),
		s = n(1),
		u = n(13),
		c = n(3),
		r = n(19),
		f = n(6),
		h = window;
	t.exports = {
		paramsList: [{
			key: "psi",
			value: function() {
				var t = c[s.Y];
				return t = t || (c[s.Y] = r.xr())
			}
		}, {
			key: "di",
			value: function() {
				return this.Cr.slotId
			}
		}, {
			key: "dri",
			value: function() {
				return this.Cr.index
			}
		}, {
			key: "dis",
			value: function() {
				var t = 0;
				a.bt(h) && (t += 1), a.kt(h, h.top) && (t += 2);
				var i = o.ji(),
					n = o.Hi();
				(i < 40 || n < 10) && (t += 4);
				try {
					if(3 == (3 & t)) {
						var r = a.Dt();
						r.document.referrer && r.top === r.parent && (t += 8)
					}
				} catch(e) {
					f.Et(s.et, e, {
						pos: "disParam"
					})
				}
				return t
			}
		}, {
			key: "dai",
			value: function() {
				return this.Cr.count
			}
		}, {
			key: "ps",
			value: function() {
				var t = a.pt(this.Cr),
					i = o.Vi(t);
				return i.top + "x" + i.left
			}
		}, {
			key: "coa",
			encode: !0,
			value: function() {
				var t = [],
					i = this.Cr.styleOpenApi;
				for(var n in "-1" === this.Cr.pcwd && (i.cpro_ftpc = "true"), i)
					if(n && "undefined" != typeof i[n] && i.hasOwnProperty(n)) {
						var r = n;
						if("width" === n || "height" === n || "sizeType" === n || "apType" === n || "floatingState" === n) continue;
						"cpro_w" === n && (r = "rsi0"), "cpro_h" === n && (r = "rsi1"), t.push(r + "=" + encodeURIComponent(i[n]))
					}
				return t.join("&")
			}
		}, {
			key: "enu",
			value: function() {
				return "encoding"
			}
		}, {
			key: "cw",
			value: function() {
				var t = this.Cr.styleOpenApi.cpro_ftpc || "true" === this.Cr.styleOpenApi.cpro_ftpc || "-1" === this.Cr.pcwd,
					i = a.pt(this.Cr);
				if(t && i && i.parentElement.clientWidth) return i.parentElement.clientWidth || 0
			}
		}, {
			key: "exps",
			value: function() {
				var t = this.Cr.exps;
				if(t && 0 <= t.indexOf(s.ft)) {
					for(var i, n = t.split(","), r = 0; r < n.length; r++)(i = parseInt(n[r], 10)) === s.ft && 1 === this.Cr.proxy && (i = e.isAdBlock ? i + 1 : i + 2, n[r] = "" + i);
					t = n.join(",")
				}
				return u.Xn(t, c.expId)
			}
		}, {
			key: "ant",
			value: function() {
				return 1 === this.Cr.proxy ? 1 : 0
			}
		}],
		setSlotInfo: function(t) {
			this.Cr = t
		}
	}
}, function(t, i) {
	t.exports = {
		Pr: function(t, i) {
			var n = new RegExp("(^| )" + t + "=([^;]*)(;|$)").exec(document.cookie),
				r = "";
			return n && (r = i ? decodeURIComponent(n[2]) : n[2]), r
		},
		Or: function(t, i, n, r) {
			var e = n.expires;
			document.cookie = t + "=" + (r ? encodeURIComponent(i) : i) + (n.path ? "; path=" + n.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "")
		},
		we: function(t) {
			var i = new Date;
			i.setTime(i.getTime() - 86400), this.Or(t, "", {
				path: "/",
				expires: i
			})
		}
	}
}, function(t, i, n) {
	var r = n(1),
		e = n(5),
		a = n(18),
		o = n(3);
	t.exports = {
		mn: function(t) {
			this.me = t
		},
		paramsList: [{
			key: "dcb",
			value: function() {
				return r.R
			}
		}, {
			key: "dtm",
			value: function() {
				return r.W
			}
		}, {
			key: "dvi",
			value: function() {
				return "0.0"
			}
		}, {
			key: "dci",
			value: function() {
				return "-1"
			}
		}, {
			key: "dds",
			value: function() {
				return ""
			}
		}, {
			key: "dpt",
			value: function() {
				return "none"
			}
		}, {
			key: "tsr",
			value: function() {
				var t = 0,
					i = +new Date;
				return r.startTime && (t = i - r.startTime), t
			}
		}, {
			key: "tpr",
			value: function() {
				var t = (new Date).getTime(),
					i = o.DUP_4_SF ? o : this.me,
					n = i[r.ot];
				return(!n || "number" != typeof n || 24e4 <= t - n) && (n = i[r.ot] = t), n
			}
		}, {
			key: "cop",
			encode: !0,
			value: function() {
				return a.fr()
			}
		}, {
			key: "ti",
			encode: !0,
			limit: 60,
			value: function() {
				var t = e.baiduboxapp && this.me.articleTitle ? this.me.articleTitle : this.me.document.title;
				return t = this.Cr.title ? this.Cr.title : t
			}
		}, {
			key: "utdi",
			encode: !0,
			value: function() {
				return e.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.cuid || ""
			}
		}, {
			key: "atdi",
			encode: !0,
			value: function() {
				return e.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.nid || ""
			}
		}, {
			key: "ari",
			value: function() {
				return 2
			}
		}, {
			key: "ver",
			value: function() {
				return "0603"
			}
		}],
		setSlotInfo: function(t) {
			this.Cr = t
		}
	}
}, function(t, i, n) {
	var r = n(2),
		e = n(8),
		a = window,
		o = a.screen;
	t.exports = {
		paramsList: [{
			key: "uc",
			value: function() {
				return [o.availWidth, o.availHeight].join("x")
			}
		}, {
			key: "pis",
			value: function() {
				return(r.bt(a) ? [e.ji(), e.Hi()] : [-1, -1]).join("x")
			}
		}, {
			key: "sr",
			value: function() {
				return [o.width, o.height].join("x")
			}
		}, {
			key: "tcn",
			value: function() {
				var t = +new Date;
				return Math.round(t / 1e3)
			}
		}]
	}
}, function(t, i, n) {
	var a = n(1),
		o = n(3),
		s = n(2),
		u = n(8),
		c = n(5),
		f = n(6),
		r = n(21),
		h = n(13),
		e = n(19),
		d = window,
		l = d.document,
		v = d.navigator,
		_ = d.screen,
		p = s.Dt();
	t.exports = {
		setSlotInfo: function(t) {
			this.Cr = t
		},
		mn: function(t) {
			this.me = t
		},
		paramsList: [{
			key: "ti",
			encode: !0,
			limit: 60,
			value: function() {
				return c.baiduboxapp && this.me.articleTitle ? this.me.articleTitle : this.me.document.title
			}
		}, {
			key: "utdi",
			encode: !0,
			value: function() {
				return c.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.cuid || ""
			}
		}, {
			key: "atdi",
			encode: !0,
			value: function() {
				return c.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.nid || ""
			}
		}, {
			key: "ps",
			value: function() {
				var t = s.pt(this.Cr),
					i = u.Vi(t);
				return i.top + "x" + i.left
			}
		}, {
			key: "drs",
			value: function() {
				try {
					return {
						uninitialized: 0,
						loading: 1,
						loaded: 2,
						interactive: 3,
						complete: 4
					}[l.readyState]
				} catch(t) {
					return -1
				}
			}
		}, {
			key: "pcs",
			value: function() {
				return [u.ji(p), u.Hi(p)].join("x")
			}
		}, {
			key: "pss",
			value: function() {
				return [u.Gi(p), u.Xi(p)].join("x")
			}
		}, {
			key: "cfv",
			value: function() {
				return c.Si()
			}
		}, {
			key: "cpl",
			value: function() {
				return v.plugins.length || 0
			}
		}, {
			key: "chi",
			value: function() {
				return d.history.length || 0
			}
		}, {
			key: "cce",
			value: function() {
				return v.cookieEnabled || 0
			}
		}, {
			key: "cec",
			value: function() {
				return(l.characterSet ? l.characterSet : l.charset) || ""
			}
		}, {
			key: "tlm",
			value: function() {
				return Date.parse(l.lastModified) / 1e3
			}
		}, {
			key: "psr",
			value: function() {
				return [_.width, _.height].join("x")
			}
		}, {
			key: "par",
			value: function() {
				return [_.availWidth, _.availHeight].join("x")
			}
		}, {
			key: "pis",
			value: function() {
				return(s.bt(d) ? [u.ji(), u.Hi()] : [-1, -1]).join("x")
			}
		}, {
			key: "ccd",
			value: function() {
				return _.colorDepth || 0
			}
		}, {
			key: "cja",
			value: function() {
				return v.javaEnabled().toString()
			}
		}, {
			key: "cmi",
			value: function() {
				return v.mimeTypes.length || 0
			}
		}, {
			key: "col",
			value: function() {
				var t = v.language || v.browserLanguage || v.systemLanguage || "";
				return t = t.replace(/[^a-zA-Z0-9-]/g, "")
			}
		}, {
			key: "cdo",
			value: function() {
				var t = d.orientation;
				return t === undefined && (t = -1), t
			}
		}, {
			key: "tcn",
			value: function() {
				var t = +new Date;
				return Math.round(t / 1e3)
			}
		}, {
			key: "psi",
			value: function() {
				var t = o[a.Y];
				return t = t || (o[a.Y] = e.xr())
			}
		}, {
			key: "di",
			value: function() {
				return this.Cr.slotId
			}
		}, {
			key: "dtm",
			value: function() {
				return a.W
			}
		}, {
			key: "tpr",
			value: function() {
				var t = (new Date).getTime(),
					i = o.DUP_4_SF ? o : this.me,
					n = i[a.ot];
				return(!n || "number" != typeof n || 24e4 <= t - n) && (n = i[a.ot] = t), n
			}
		}, {
			key: "ari",
			value: function() {
				return 2
			}
		}, {
			key: "ant",
			value: function() {
				return 1 === this.Cr.proxy ? 1 : 0
			}
		}, {
			key: "exps",
			value: function() {
				var t = this.Cr.exps;
				if(t && 0 <= t.indexOf(a.ft)) {
					for(var i, n = t.split(","), r = 0; r < n.length; r++)(i = parseInt(n[r], 10)) === a.ft && 1 === this.Cr.proxy && (i = c.isAdBlock ? i + 1 : i + 2, n[r] = "" + i);
					t = n.join(",")
				}
				var e = o.expId;
				return c.hasSameSiteLimit && (e = 1 === this.Cr.proxy ? h.Xn("112028", o.expId) : h.Xn("112027", o.expId)), h.Xn(t, e)
			}
		}, {
			key: "prot",
			value: function() {
				return "2"
			}
		}, {
			key: "dis",
			value: function() {
				var t = 0;
				s.bt(d) && (t += 1), s.kt(d, d.top) && (t += 2);
				var i = u.ji(),
					n = u.Hi();
				(i < 40 || n < 10) && (t += 4);
				try {
					if(!0 & t) {
						var r = s.Dt();
						r.document.referrer && r.top === r.parent && (t += 8)
					}
				} catch(e) {
					f.Et(a.et, e, {
						pos: "disParam"
					})
				}
				return t
			}
		}, {
			key: "dai",
			value: function() {
				return this.Cr.count
			}
		}, {
			key: "dri",
			value: function() {
				return this.Cr.index
			}
		}, {
			key: "ltu",
			encode: !0,
			limit: 700,
			value: function() {
				var t;
				return 0 < (t = o.location && o.location.href ? o.location.href : r.Dr(function(t) {
					var i = u.ji(t),
						n = u.Hi(t);
					return 400 < i && 120 < n
				})).indexOf("cpro_prev") && (t = t.slice(0, t.indexOf("?"))), t
			}
		}, {
			key: "liu",
			encode: !0,
			limit: 700,
			value: function() {
				return s.bt(d) ? l.URL : ""
			}
		}, {
			key: "ltr",
			encode: !0,
			limit: 300,
			value: function() {
				var t = "";
				try {
					t = p.opener ? p.opener.document.location.href : ""
				} catch(i) {}
				return t || p.document.referrer
			}
		}, {
			key: "coa",
			encode: !0,
			value: function() {
				var t = [],
					i = this.Cr.styleOpenApi;
				for(var n in "-1" === this.Cr.pcwd && (i.cpro_ftpc = "true"), i)
					if(n && "undefined" != typeof i[n] && i.hasOwnProperty(n)) {
						var r = n;
						if("width" === n || "height" === n || "sizeType" === n || "apType" === n || "floatingState" === n) continue;
						"cpro_w" === n && (r = "rsi0"), "cpro_h" === n && (r = "rsi1"), t.push(r + "=" + encodeURIComponent(i[n]))
					}
				return t.join("&")
			}
		}]
	}
}, function(t, i, n) {
	var f = n(0),
		a = {};

	function s(t, i, n) {
		if("string" == typeof t) return t;
		if(!t.type) return "";
		var r = a[t.type];
		if(!r) return "";
		var e = "string" == typeof r ? f._(r, t) : r(t, i);
		return n ? e : "<!DOCTYPE html><body>" + e
	}
	a.text = function(t) {
		var i = '<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',
			n = /\{events\}/;
		if(1 === t.version) i = i.replace(n, "");
		else if(2 === t.version) {
			i = i.replace(n, " onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\"");
			for(var r = ["default", "hover"], e = 0; e < r.length; e++) {
				var a = r[e],
					o = a + "Color",
					s = a + "Bold",
					u = a + "Italic",
					c = a + "Underline";
				t[o] = "#" + t[o], t[s] = t[s] ? "bold" : "normal", t[u] = t[u] ? "italic" : "normal", t[c] = t[c] ? "underline" : "none"
			}
		}
		return f._(i, t)
	}, a.image = '<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>', a.flash = function(t) {
		return t.file = t.hasLink ? "cflash" : "flash", t.imageClickUrl = t.clickUrl, t.hasLink || (t.clickUrl = ""), f._(["<script>", "var BD = BD || {};", "BD.MC = BD.MC || {};", "BD.MC.ADFlash = BD.MC.ADFlash || {};", "BD.MC.ADImg = BD.MC.ADImg || {};", "BD.MC.ADFlash.w = {width:number};", "BD.MC.ADFlash.h = {height:number};", 'BD.MC.ADFlash.mu = "{src:string}";', 'BD.MC.ADFlash.cu = "{clickUrl:string}";', "BD.MC.ADFlash.wm = {wmode:number};", 'BD.MC.ADFlash.ct = "{clickTag:string}";', "BD.MC.ADImg.w = {imageWidth:number};", "BD.MC.ADImg.h = {imageHeight:number};", 'BD.MC.ADImg.mu = "{imageSrc:string}";', 'BD.MC.ADImg.cu = "{imageClickUrl:string}";', 'BD.MC.ADImg.tw = "{target:string}";', "BD.MC.ADImg.flag = {backupImage:number};", "<\/script>", '<script src ="', '//cbjs.baidu.com/js/{file:string}.js">', "<\/script>"].join(""), t)
	}, a.rich = function(t) {
		return t.content
	}, a.slide = function(t, i) {
		for(var n = [], r = t.materials, e = 0; e < r.length; e++) {
			var a = r[e];
			"string" != typeof a && (a = s(a, i, !0)), n.push(a)
		}
		t.html = "<div>" + n.join("</div><div>") + "</div>";
		var o = i.response.placement.container;
		return t.width = i.width || o.width, t.height = i.height || o.height, f._('<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>', t)
	}, t.exports = {
		fn: s
	}
}, function(t, i, n) {
	var a = n(4),
		o = n(1),
		r = n(18),
		e = n(7),
		s = n(0);
	t.exports = {
		ge: {
			BAIDU_CLB_fillSlot: !0,
			BAIDU_CLB_singleFillSlot: !0,
			BAIDU_CLB_fillSlotWithSize: !0,
			BAIDU_CLB_fillSlotAsync: !0
		},
		qr: function() {
			var t;
			try {
				var i = window.BAIDU_CLB_SLOT_ID;
				for(var n in window.BAIDU_CLB_SLOT_ID = null, i && (t = a.zt({
						slotId: i,
						productLine: "clb",
						isAsync: !1
					}), a.qt(t), a.Kt()), this.ge) e.Li(n, this.ye);
				this.be()
			} catch(r) {}
		},
		Ie: function() {},
		ye: function(t, i) {
			var n;
			t && ((n = a.zt({
				slotId: t,
				productLine: "clb",
				isAsync: !!i
			})).containerId = i || n.containerId, a.qt(n), a.Kt())
		},
		be: function() {
			try {
				e.Li("BAIDU_CLB_prepareMoveSlot", this.ke), e.Li("BAIDU_CLB_setConfig", s.P(e, e.Fi)), e.Li("BAIDU_CLB_addOrientation", s.P(r, r.sr)), e.Li("BAIDU_CLB_addSlot", this.Ie), e.Li("BAIDU_CLB_enableAllSlots", this.Ie), e.Li("BAIDU_CLB_preloadSlots", this.Ie), e.Li("BAIDU_DUP_addSlotStatusCallback", this.Ie)
			} catch(t) {}
		},
		ke: function(t) {
			try {
				for(var i = 0, n = t + "_" + i; a.Ht(n) && 0 !== a.Ht(n)[0];) {
					var r = a.Ht(n);
					a.Jt(r, o.K), n = t + "_" + ++i
				}
			} catch(e) {}
		}
	}
}, function(t, i, n) {
	var u = n(4);
	t.exports = {
		qr: function() {
			var t, i = window.cpro_id;
			window.cpro_id = null, i && (t = u.zt({
				slotId: i,
				productLine: "union",
				isAsync: !1
			}), u.qt(t));
			var n, r, e = window.cproArray;
			if(window.cproArray = null, e)
				for(n = 0, r = e.length; n < r; n++) t = u.zt({
					slotId: e[n].id,
					productLine: "union",
					isAsync: !0
				}), u.qt(t);
			var a = window.cpro_mobile_slot;
			if(window.cpro_mobile_slot = null, a)
				for(n = 0, r = a.length; n < r; n++) {
					var o = a[n];
					for(var s in (t = u.zt({
							slotId: o.id,
							productLine: "union",
							isAsync: !0
						})).styleOpenApi = t.styleOpenApi || {}, o) s && o[s] && o.hasOwnProperty(s) && (t.styleOpenApi[s] = o[s]);
					u.qt(t)
				}
			u.Kt()
		}
	}
}, function(t, i, n) {
	var s = n(4);
	t.exports = {
		qr: function() {
			this.delieveryObjArray = this.delieveryObjArray || [], window.BAIDU_DUP = window.BAIDU_DUP || [], window.BAIDU_DUP && window.BAIDU_DUP instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.BAIDU_DUP), window.BAIDU_DUP = []), this.be(), this.Kt()
		},
		be: function() {
			window.BAIDU_DUP = this, window.BAIDU_DUP.load = !0
		},
		Kt: function() {
			for(var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
				var r = this.delieveryObjArray[i];
				if(r instanceof Array && 2 <= r.length) {
					var e = r[0],
						a = r[1],
						o = r[2];
					if("fill" !== e && "fillAsync" !== e || !a) continue;
					(t = s.zt({
						slotId: a,
						productLine: "dup",
						isAsync: "fillAsync" === e
					})).containerId = o || t.containerId, s.qt(t)
				}
			}
			this.delieveryObjArray = [], s.Kt()
		},
		push: function(t) {
			this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Kt()
		}
	}
}, function(t, i, n) {
	var s = n(4),
		u = n(22),
		a = n(18),
		o = n(0),
		c = n(3),
		f = n(10),
		h = n(1);
	t.exports = {
		qr: function() {
			this.delieveryObjArray = this.delieveryObjArray || [], window.slotbydup = window.slotbydup || [], window.slotbydup && window.slotbydup instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.slotbydup), window.slotbydup = []), c.slotbyds = c.slotbyds || [], c.slotbyds instanceof Array && c.domainInfo.dup && c.domainInfo.pos && (this.delieveryObjArray = this.delieveryObjArray.concat(c.slotbyds), c.slotbyds = []), this.be(), 0 < this.delieveryObjArray.length && this.Kt()
		},
		Kt: function() {
			for(var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
				var r = this.delieveryObjArray[i];
				if(c.domainInfo.dup || c.domainInfo.pos || !r.isAnti)
					if(r.hasOwnProperty("id")) {
						var e = r.isRelateRecomAd && r.title,
							a = r.hasOwnProperty("isAsync") && r.isAsync || r.hasOwnProperty("async") && r.async || e,
							o = r.hasOwnProperty("coa") && r.coa;
						t = s.zt({
							slotId: r.id,
							productLine: "adcodex",
							isAsync: a,
							coa: o
						}), u.Mr(t, r), t.containerId = r.container || t.containerId, t.display = r.display, t.ftpc = r.ftpc || !1, t.size = r.size || "", t.pcwd = r.pcwd || "", t.pchd = r.pchd || "", t.exps = r.exps || "", t.isAutoAd = r.isAutoAd || !1, t.isAnti = r.isAnti || "", t.startTime = r.startTime || 0, e && (t.title = r.title), s.qt(t)
					} else this.Ae(r);
				else(c.slotbyds = c.slotbyds || []).push(r)
			}
			this.delieveryObjArray = [], s.Kt()
		},
		be: function() {
			window.slotbydup = this, window.slotbydup.load = !0
		},
		push: function(t) {
			this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Kt()
		},
		Ae: function(t) {
			var i = t.addOrientation;
			for(var n in i && o.k(i) && a.sr.apply(a, i), h.lt)
				if(h.lt.hasOwnProperty(n)) {
					var r = h.lt[n],
						e = t[r];
					o.A(e) && f._n(r, e)
				}
		}
	}
}, function(t, i, n) {
	var a = n(1),
		r = n(2),
		e = n(0),
		o = n(6),
		s = n(3),
		u = n(4),
		c = n(11);
	window.__delivery_global_ = window.__delivery_global_ || {};
	var f = window.__delivery_global_;
	t.exports = {
		qr: function() {
			f.dupApi = f.dupApi || [];
			var t = f.dupApi;
			f.dupApi = this;
			for(var i = 0, n = t.length; i < n; i++) this.push(t[i])
		},
		push: function(t) {
			try {
				var i = t.container;
				if(!document.getElementById(i)) return !1;
				var n = t.hasOwnProperty("coa") && t.coa,
					r = u.zt({
						slotId: t.id,
						isAsync: !0,
						coa: n
					});
				r.isDsFlow = !0, r.proxy = t.proxy, r.exps = t.exps, r.containerId = i, u.qt(r), r.response = t.adInfo, r.response.painter = n.painter || r.response.painter, r.containerInfo = r.response.placement.container || {}, r.paramObj = c.gn(r), r.paramObj.dtm = a.H, u.processSlot(r), this.Kt(r)
			} catch(e) {
				o.Et(a.at, e)
			}
		},
		Kt: function(t) {
			!s.ii && window.postMessage && (s.ii = !0, r.St(window, "message", e.P(u, u.ni))), n(26).Xr(t)
		}
	}
}, function(t, i, n) {
	var a = n(1),
		o = n(2),
		s = n(6),
		u = n(0),
		r = n(5),
		e = n(15),
		c = n(3),
		f = n(4),
		h = n(11);
	t.exports = {
		qr: function() {
			try {
				if(!c.expId && !r.baiduboxapp)
					if(c.expId = "110011", 0 === h.Sn("slotParam", "dis")) {
						var t = this.Se();
						this.xe(t)
					}
			} catch(i) {
				s.Et(a.et, i, {
					pos: "autoAds"
				})
			}
		},
		Se: function() {
			return f.zt({
				slotId: a.$,
				isAsync: !0
			})
		},
		xe: function(t) {
			t.paramObj = h.ei(t), t.paramObj.dcb = a.M, t.paramObj.dtm = a.Q, t.paramObj.dc = a.Z;
			var i = this.De() ? 1 : 0,
				n = c.domainInfo.mixOffset,
				r = h.ai(t.paramObj, i, n),
				e = a.U + a.N + a.it + "?" + r;
			1 == i && n && (e = a.U + "//" + c.domainInfo.pos + "/" + a.nt + "?" + r), o.At(u.P(this, o.Tt, e))
		},
		Jr: function(t, i) {
			try {
				i instanceof Array && document.querySelector && this.Ce(i)
			} catch(n) {
				s.Et(a.et, n, {
					pos: "autoDupCallback"
				})
			}
		},
		Ce: function(t) {
			for(var i = 0; i < t.length; i++) {
				var n = t[i],
					r = n.tuid,
					e = n.placement;
				r && u.S(e) && (this.Te(r, e.processor, e.position, n), s.Ei("autoDupLog", {
					tuid: r,
					ltu: encodeURIComponent(h.Sn("browserParam", "ltu")),
					psi: h.Sn("slotParam", "psi")
				}))
			}
		},
		Te: function(t, i, n, r) {
			var e = n && document.querySelector(n),
				a = "";
			switch(i) {
				case "0":
					e = (a = e) && a.parentNode;
					break;
				case "1":
					a = this.Pe(e);
					break;
				case "2":
					a = this.Oe(e)
			}
			this.Ee(t, a, e, r)
		},
		Pe: function(t) {
			var i = t && t.children;
			if(i && 1 < i.length && t.scrollHeight > window.screen.height) {
				var n = i.length;
				return i[Math.ceil(n / 2)]
			}
		},
		Oe: function(t) {
			var i = t && t.children;
			if(i && 0 < i.length) return i[i.length - 1]
		},
		Ee: function(t, i, n, r) {
			if(!i || !n) return !1;
			var e = document.createElement("div");
			e.id = "_" + Math.random().toString(36).slice(2);
			var a = document.createElement("script");
			a.text = this.Me(t, e.id, r), e.appendChild(a), n.insertBefore(e, i)
		},
		Me: function(t, i, n) {
			var r = n.userdefine;
			return r = window.JSON && window.JSON.stringify && u.S(r) && JSON.stringify(r), u.h('(window.slotbydup = window.slotbydup || []).push({ id:"{tuid}", container:"{containerId}", exps:"{exps}", isAutoAd:true, coa:{coa}, isAnti:{isAnti}});', {
				tuid: t,
				containerId: i,
				exps: a.rt,
				coa: r || "{}",
				isAnti: this.De()
			})
		},
		De: function() {
			return !(!c.domainInfo.dup || !c.domainInfo.pos || u.S(window[a.ct]) && 0 === e.ki("isblock"))
		}
	}
}, function(t, i, n) {
	var o = n(0),
		s = {};
	t.exports = {
		Zr: function(t, i, n) {
			if(i) {
				var r = document.createElement("script");
				r.type = "text/javascript", r.async = !0, r.src = i;
				var e = o.P(this, this.Ue, t, r);
				r.onload = r.onerror = r.onreadystatechange = e;
				var a = document.getElementsByTagName("script")[0];
				a.parentNode.insertBefore(r, a), s[t] = n
			}
		},
		Ue: function(t, i, n) {
			n = 3 === arguments.length ? (i = i, n) : i = t;
			var r = s[i];
			n && /loaded|complete|undefined/.test(n.readyState) && (n.onload = n.onerror = n.onreadystatechange = null, n = undefined, r && r())
		}
	}
}, function(t, i, n) {
	var o = n(1),
		s = n(2),
		u = n(4),
		c = n(14),
		f = n(12),
		h = n(9),
		d = n(16),
		l = n(43),
		r = n(10),
		v = n(0),
		e = n(5),
		a = n(44),
		_ = !e.ie || 8 <= e.ie;
	t.exports = {
		Be: function(n) {
			var t = s.pt(n);
			r.St(t, "mouseover", function(t) {
				var i = t.target || t.srcElement;
				"iframe" !== i.tagName.toLowerCase() && "iframe" !== i.nodeName.toLowerCase() || l.Re("mouseover", n.id)
			})
		},
		Le: function(t) {
			if(t.isUnion) {
				var i = a.Ne(t),
					n = a.Le(t);
				return n && a.Fe(i, t.containerId), n
			}
			return !0
		},
		je: function(t, i) {
			0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
		},
		render: function(t) {
			u.Xt(t.id, o.X);
			var i = s.pt(t);
			if(!u.mi(t)) return u.Xt(t.id, o.K), !1;
			var n = t.containerInfo.slide,
				r = n && !v.f(n) && _;
			if(r && (l.He(t), this.Be(t)), this.Le(t))
				if(d.Ci(t), h.renderRichMaterial(t)) _ && setTimeout(function() {
					l.Re("adloaded", t.id)
				}, 800);
				else {
					var e = u.processSlotInfo(t);
					t.width = e.width, t.height = e.height, this.je(i, t);
					var a = c.getFrameHTML(t);
					i.innerHTML = a, f.regisetViewWatch(t), t.isPdbAd || u.Xt(t.id, o.K), r && setTimeout(function() {
						l.Re("adloaded", t.id)
					}, 800)
				}
		}
	}
}, function(t, i, n) {
	var v = n(2),
		e = n(10),
		_ = n(4),
		p = {},
		w = {},
		r = !1,
		u = {
			up: {},
			down: {},
			left: {},
			right: {}
		};
	t.exports = {
		We: function(t, i) {
			var n = _.Ht(t),
				r = v.pt(n);
			if(r) {
				var e = r.getElementsByTagName("iframe")[0];
				i = JSON.stringify(i), e.contentWindow.postMessage(i, "*")
			}
		},
		ze: function(t) {
			return window.getComputedStyle ? window.getComputedStyle(t).width : t.currentStyle.width
		},
		Ve: function() {
			var n = this;
			(window.addEventListener || window.attachEvent) && JSON && JSON.parse && e.St(window, "message", function r(t) {
				if("string" != typeof t.data) return !1;
				var i = JSON.parse(t.data);
				if(!i.title || "baidudup" !== i.title) return !1;
				if("invokeMethod" === i.type) switch(i.method) {
					case "expand":
						n.qe(i.parameters[0]);
						break;
					case "close":
						n.Je(i.parameters[0])
				}
			}), e.St(window, "scroll", function() {
				n.Ge()
			}), e.St(window, "resize", function() {
				n.Ge()
			})
		},
		Ge: function() {
			var t = u;
			for(var i in t)
				for(var n in t[i]) {
					var r = t[i][n];
					if(!r.isExpand) return;
					var e, a = r.origin,
						o = a.getElementsByTagName("iframe")[0],
						s = r.originWidth;
					switch(i) {
						case "up":
						case "down":
							e = parseInt(this.ze(a), 10), o.style.left = 0;
							break;
						case "left":
							e = parseInt(this.ze(a), 10), o.style.right = e - s + "px";
							break;
						case "right":
							e = parseInt(this.ze(a), 10), o.style.left = 0
					}
				}
		},
		Xe: function(t, i, n, r, e, a, o) {
			if(!u[t][i]) {
				var s = u[t][i] = {};
				s.isExpand = !0, s.origin = n, s.originWidth = r, s.originHeight = e, s.targetWidth = a, s.targetHeight = o
			}
		},
		Ke: function(t, i, n, r, e, a) {
			this.Xe("up", t, i, n, r, e, a);
			var o = i.getElementsByTagName("iframe")[0];
			o.style.bottom = 0, o.style.left = 0
		},
		Ye: function(t, i, n, r, e, a) {
			this.Xe("down", t, i, n, r, e, a);
			var o = i.getElementsByTagName("iframe")[0];
			o.style.top = 0, o.style.left = 0
		},
		$e: function(t, i, n, r, e, a) {
			this.Xe("left", t, i, n, r, e, a);
			var o = i.getElementsByTagName("iframe")[0],
				s = parseInt(this.ze(i), 10);
			o.style.bottom = 0, o.style.right = s - n + "px"
		},
		Qe: function(t, i, n, r, e, a) {
			this.Xe("right", t, i, n, r, e, a);
			var o = i.getElementsByTagName("iframe")[0];
			o.style.bottom = 0, o.style.left = 0
		},
		qe: function(t) {
			if(!p[t]) {
				p[t] = !0;
				var i = _.Wt(t),
					n = i.containerInfo,
					r = n.width,
					e = n.height,
					a = n.slide,
					o = a.slideWidth,
					s = a.slideHeight,
					u = 1e3 * parseInt(a.extendTime, 10),
					c = parseInt(a.slideMode, 10),
					f = parseInt(a.direction, 10),
					h = v.pt(i),
					d = h.getElementsByTagName("iframe")[0];
				if(1 === f || 2 === f ? (d.setAttribute("height", s), d.style.height = s + "px") : 3 !== f && 4 !== f || (d.setAttribute("width", o), d.style.width = o + "px"), 2 === c && 2 === f || 2 === c && 4 === f) switch(f) {
					case 2:
						d.setAttribute("height", s), d.style.height = s + "px";
						break;
					case 4:
						d.setAttribute("width", o), d.style.width = o + "px"
				} else switch(h.style.position = "relative", d.style.position = "absolute", h.style.height = e + "px", f) {
					case 1:
						this.Ke(t, h, r, e, o, s);
						break;
					case 2:
						this.Ye(t, h, r, e, o, s);
						break;
					case 3:
						this.$e(t, h, r, e, o, s);
						break;
					case 4:
						this.Qe(t, h, r, e, o, s)
				}
				var l = this;
				w[t] = setTimeout(function() {
					p[t] && l.Je(t)
				}, Math.min(u))
			}
		},
		Je: function(t) {
			if(p[t]) {
				p[t] = !1, clearTimeout(w[t]);
				var i = _.Wt(t),
					n = i.containerInfo.width,
					r = i.containerInfo.height,
					e = v.pt(i),
					a = e.getElementsByTagName("iframe")[0];
				for(var o in e.style.position = "", e.style.width = "", e.style.height = "", e.style.top = "", e.style.left = "", a.style.position = "", a.style.display = "", a.style.top = "", a.style.left = "", a.style.right = "", a.style.width = "", a.style.height = "", a.setAttribute("height", r), a.setAttribute("width", n), u)
					for(var s in u[o]) s === t && (u[o][s].isExpand = !1)
			}
		},
		He: function(t) {
			t = _.Wt(t.slotId), v.pt(t).style.textAlign = "left", r || (r = !0, this.Ve())
		},
		Re: function(t, i) {
			var n, r = _.Wt(i).containerInfo.slide;
			r && (n = r.trigger);
			var e, a = 0;
			e = n, "[object Array]" === Object.prototype.toString.call(e) ? a = n[0] : n && (a = n);
			["", "BEFORE_PAGELOAD", "AFTER_PAGECLOSE", "PAGE_PERCENT", "mouseover", "click", "adloaded", "SLIP"][a] === t && this.We(i, {
				title: "baidudup",
				type: "eventHappen",
				parameters: [t]
			})
		}
	}
}, function(t, i, n) {
	var s = n(27),
		r = n(2),
		u = "inlay",
		c = "linkunit",
		e = {
			inlay: 25,
			linkunit: 25
		},
		a = {};
	t.exports = {
		Le: function(t) {
			if(!t.isUnion) return !0;
			var i = this.Ne(t);
			return this.Ze(i) < e[i]
		},
		Ze: function(t) {
			var i = a[t] || {},
				n = 0;
			for(var r in i) i.hasOwnProperty(r) && (n += i[r]);
			return n
		},
		Fe: function(t, i) {
			var n = a[t];
			return n || (a[t] = {}, n = a[t]), r.g(i) ? n[i] = 1 : n[i] ? n[i]++ : n[i] = 1, !0
		},
		Ne: function(t) {
			var i = u,
				n = t.response;
			if(!n) return i;
			var r = n.placement;
			if((s.de(n) || s.ve(n)) && (i = u), r && r.fillstyle)
				for(var e = n.placement.fillstyle.elements || [], a = 0, o = e.length; a < o; a++)
					if(5 === e[a]) return c;
			return i
		}
	}
}, function(t, i, n) {
	var u = n(1),
		r = n(0),
		c = n(2),
		f = n(4),
		h = n(16),
		d = n(14),
		l = n(9);
	t.exports = {
		ta: function(t) {
			var i = ['<div style="box-sizing: content-box;width:{width}px;height:{height}px;position:relative;margin:0 auto;">', "{iframeHtml}", "</div>"].join("");
			return r.h(i, t)
		},
		je: function(t, i) {
			0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
		},
		render: function(t) {
			if(f.Xt(t.id, u.X), !f.mi(t)) return !1;
			var i = c.pt(t);
			if(h.Ci(t), !l.renderRichMaterial(t)) {
				var n = f.processSlotInfo(t);
				if(t.width = n.width, t.height = n.height, 2 === n.sizeType || 5 === n.sizeType) {
					var r = t.response.pdb_deliv.deliv_des;
					if(r && r._html) {
						var e = (r = r._html).type;
						"text" !== e && "image" !== e && "flash" !== e || (r.width = t.width, r.height = t.height)
					}
				}
				this.je(i, t);
				var a = d.getFrameHTML(t),
					o = {
						id: t.id,
						width: n.width,
						height: n.height,
						iframeHtml: a
					},
					s = this.ta(o);
				s = 1 === t.proxy ? c.Mt(i, s) : s, i.innerHTML = s, t.isPdbAd || f.Xt(t.id, u.K)
			}
		}
	}
}, function(t, i, n) {
	var c = n(1),
		a = n(0),
		e = n(8),
		f = n(2),
		h = n(4),
		d = n(14),
		l = n(16),
		v = n(9);
	t.exports = {
		ia: "show",
		na: "upSlideShow",
		ra: "downSlideShow",
		ea: 2,
		aa: 1,
		oa: String.fromCharCode(65088),
		sa: String.fromCharCode(65087),
		ua: function(t, i) {
			var n = !1,
				r = t.containerInfo.location,
				e = t.styleOpenApi,
				a = 2 === e.apType;
			if(2 === r && !a) return !1;
			(1 !== i.sizeType || e.rsi0 || e.rsi1 || e.cpro_w || e.cpro_h) && (n = 3.4 < i.width / i.height);
			return n
		},
		ca: function(t) {
			var i = t.containerInfo,
				n = t.response.placement.fillstyle || {},
				r = parseFloat(n.opacity || .9),
				e = n.backgroundColor || "#000";
			t.styleOpenApi.sizeType && (t.styleOpenApi.sizeType = 2), i.sizeType = 2;
			var a = h.processSlotInfo(t);
			a.backgroundOpacity = r, a.backgroundColor = e;
			var o = 2 === i.location ? 2 : 3;
			return a.locationType = o, a.containerId = t.containerId, a.floatingState = this.fa(t, o), a
		},
		ta: function(t) {
			var i = ["{closeBtnHtml}", "{iframeHtml}"].join("");
			return a.h(i, t)
		},
		ha: function(t) {
			var i = "",
				n = "",
				r = "0",
				e = 0;
			return e = 2 === t.locationType ? (i = "0 0 40px 40px", r = t.height, n = t.floatingState === this.ia ? this.sa : this.oa, this.aa) : (i = "40px 40px 0 0", r = -20, n = t.floatingState === this.ia ? this.oa : this.sa, this.ea), {
				domId: t.containerId,
				borderRadius: i,
				top: r,
				btnTag: n,
				lineHeight: e
			}
		},
		da: function(t) {
			var i = ["<div", ' class="closeBtn"', ' style="', "position:absolute;", "left:50%;", "top:{top}px;", "margin-left: -20px;", "width:40px;", "height:20px;", "background-color:#4a4a4a;", "cursor:pointer;", "border-radius:{borderRadius};", "z-index:2147483647;", "color:#ffffff;", "font-weight:600;", "box-sizing:border-box;", "font-size:14px;", "font-family:'Microsoft Yahei',sans-serif;", 'line-height:{lineHeight};">', "{btnTag}", "</div>"].join(""),
				n = this.ha(t);
			return a.h(i, n)
		},
		je: function(t, i) {
			var n = 0;
			i.floatingState !== this.ia && "ontouchend" in document && 0 < i.height && (n = -1 * (i.height + 20));
			var r = 2 === i.locationType ? "top" : "bottom",
				e = 2 === i.locationType ? "border-bottom" : "border-top";
			t.style.cssText = ["box-sizing: content-box;", "display:block", "position:fixed", "z-index:2147483647;", "left:0", r + ":" + n + "px", "background-color:" + i.backgroundColor, "opacity:" + i.backgroundOpacity, "text-align:center", "width:" + i.width + "px", "height:" + i.height + "px", e + ":2px solid #4a4a4a"].join(";")
		},
		la: function(t, i, n, r) {
			var e = 2 === i.locationType ? "top" : "bottom";
			"hidden" === n.getAttribute("state") ? this.va(e, n, r) : this._a(e, n, r)
		},
		va: function(t, i, n) {
			i.setAttribute("state", "show"), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = "0px", "top" === t ? (n.style.lineHeight = this.aa, n.innerText = this.sa) : (n.style.lineHeight = this.ea, n.innerText = this.oa)
		},
		_a: function(t, i, n) {
			i.setAttribute("state", "hidden");
			var r = e.zi(i, "height");
			r = r && parseInt(r, 10), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = -1 * r + "px", "top" === t ? (n.style.lineHeight = this.ea, n.innerText = this.oa) : (n.style.lineHeight = this.aa, n.innerText = this.sa)
		},
		render: function(t) {
			if(!h.mi(t)) return !1;
			h.Xt(t.id, c.X), this.id = t.id;
			var i = this.ca(t);
			l.Ci(t);
			var n = v.renderRichMaterial(t),
				r = f.pt(t);
			if(!n && r && this.ua(t, i)) {
				this.je(r, i);
				var e = this.da(i);
				this.pa(i, t);
				var a = {
						closeBtnHtml: e,
						iframeHtml: d.getFrameHTML(t)
					},
					o = this.ta(a);
				r.innerHTML = o;
				var s = r.getElementsByClassName("closeBtn")[0];
				if(s) {
					var u = this;
					f.St(s, "click", function() {
						u.la(t, i, r, this)
					})
				}
				t.isPdbAd || h.Xt(t.id, c.K)
			}
		},
		ee: function(t, i, n) {
			var r = n.parentElement;
			if(document.body && r) {
				var e = r.getElementsByClassName("closeBtn")[0];
				t = "2" === t ? "top" : "bottom", f.St(document.body, "touchstart", a.P(this, this.wa)), f.St(document.body, "touchend", a.P(this, this.ma, r, e, t, i))
			}
		},
		wa: function(t) {
			this.startY = t.targetTouches[0] && t.targetTouches[0].pageY
		},
		ma: function(t, i, n, r, e) {
			this[r] = this[r] || !1, this.pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
			var a = this.pageY - this.startY;
			(a < -10 && !this[r] && e === this.na || 10 < a && !this[r] && e === this.ra) && (this[r] = !0, this.va(r, i, n))
		},
		fa: function(t, i) {
			return t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : 2 === i ? this.na : this.ia
		},
		pa: function(t, i) {
			if(2 === t.sizeType) {
				var n = i.response.pdb_deliv.deliv_des;
				if(n && n._html) {
					var r = (n = n._html).type;
					"text" !== r && "image" !== r && "flash" !== r || (n.width = i.width, n.height = i.height)
				}
			}
		}
	}
}, function(t, i, n) {
	var e = n(1),
		a = n(0),
		o = n(2),
		r = n(4),
		s = n(11),
		u = n(7),
		c = n(12),
		f = n(5),
		h = n(16);
	t.exports = {
		ga: {},
		ya: 0,
		ba: "BAIDU_DUP_MOBILE_INSIDE_TEXT_",
		Ia: 40,
		ka: 3,
		Aa: 0,
		Sa: {},
		render: function(t) {
			r.Xt(t.id, e.X), h.Ci(t);
			var i = o.pt(t);
			if(i) {
				u.Li(this.ba, a.P(this, this.xa));
				var n = this.Da(i);
				n && ("complete" === document.readyState ? (this.Ca(t, i), this.Ta(n)) : o.St(document, "readystatechange", a.P(this, function() {
					"complete" === document.readyState && (this.Ca(t, i), this.Ta(n))
				})), c.regisetViewWatch(t), r.Xt(t.id, e.K))
			}
		},
		Da: function(t) {
			var i = t.parentNode;
			return i.tagName && "body" === i.tagName.toLowerCase() ? i : this.Da(i)
		},
		Ca: function(t, i) {
			t.paramObj.dcb = this.ba, t.paramObj.dtm = e.z, t.paramObj.cec = "utf-8";
			var n = s.getPmpRequestUrl(t),
				r = document.createElement("script");
			r.src = n, r.charset = t.paramObj.cec, i.appendChild(r)
		},
		Ta: function(t) {
			for(var i = t.childNodes, n = 0; n < i.length; n++) {
				var r = i[n];
				if(o.Pt(r)) switch(r.nodeType) {
					case 3:
						var e;
						f.ie < 9 && r.nodeValue && (e = r.nodeValue), r.textContent && (e = r.textContent), e && a.b(e) && 0 < e.length && this.Pa(r);
						break;
					default:
						this.Ta(r)
				}
			}
		},
		Pa: function(t) {
			var i = t.parentNode;
			i.innerHTML && (this.ga["item_" + this.ya] = i, this.ya++)
		},
		xa: function() {
			var t = arguments[0] && arguments[0].slots[0] && arguments[0].slots[0].ads[0];
			if(t) {
				var i = t.data && t.data.meta;
				if(i && 0 !== i.length)
					for(var n in this.ga) {
						var r = this.ga[n];
						if(document.contains(r)) {
							for(var e = r.innerHTML, a = 0; a < i.length; a++) e = this.Oa(i[a], e);
							if(r.innerHTML = e, this.Aa === this.Ia) break
						}
					}
			}
		},
		Oa: function(t, i) {
			if(!t || !i) return i;
			var n = t.title,
				r = new RegExp(n, "i");
			if(n && 0 < n.length && r.test(i) && this.Ea(n, i) && this.Ma(n, i)) {
				var e = '<a href="' + (t.curl || "") + '" target="_blank" style="color:#38f;text-decoration:none">' + n + "</a>";
				if(this.Sa[n] || (this.Sa[n] = 0), this.Aa < this.Ia && this.Sa[n] < this.ka) return this.Aa++, this.Sa[n]++, i.replace(r, e)
			}
			return i
		},
		Ea: function(t, i) {
			var n = i.indexOf(t),
				r = n - 4,
				e = n + t.length,
				a = "</a>" === i.substr(r, 4),
				o = "<a " === i.substr(e, 3);
			return !a && !o
		},
		Ma: function(t, i) {
			var n = new RegExp("<[^>]*" + t + "[^<]*>", "i"),
				r = new RegExp(">[^<]*" + t + "[^>]*</", "i");
			return !n.test(i) && !r.test(i)
		}
	}
}, function(t, i, n) {
	var s = n(1),
		u = n(0),
		c = n(2),
		f = n(4),
		h = n(14),
		d = n(13);
	t.exports = {
		render: function(t) {
			f.Xt(t.id, s.X);
			var i = f.processSlotInfo(t);
			t.width = i.width, t.height = i.height;
			var n = c.pt(t),
				r = {};
			0 === t.proxy && (r = d.Yn("mixDom", t)).expType && (t.paramObj.exps = d.Xn(t.paramObj.exps, r.expId));
			var e = h.ln(t),
				a = u.h('<iframe width="{iframeWidth}" frameborder="0" height="{iframeHeight}" scrolling="no" src="{url}"></iframe>', e),
				o = a;
			"exp" !== r.expType && (o = c.Mt(n, a)), n.innerHTML = o, f.Xt(t.id, s.K)
		}
	}
}, function(t, i, n) {
	var r = n(1),
		e = String.fromCharCode(Math.floor(26 * Math.random()) + 97),
		a = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
	r.F || (r.kn = r.N + e + "c" + a + "m?", r.F = r.U + r.kn)
}]);
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if(!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	var c = [],
		d = c.slice,
		e = c.concat,
		f = c.push,
		g = c.indexOf,
		h = {},
		i = h.toString,
		j = h.hasOwnProperty,
		k = {},
		l = a.document,
		m = "2.1.4",
		n = function(a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function(a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function() {
			return d.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		},
		pushStack: function(a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a, b) {
			return n.each(this, a, b)
		},
		map: function(a) {
			return this.pushStack(n.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if(null != (a = arguments[h]))
				for(b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray,
		isWindow: function(a) {
			return null != a && a === a.window
		},
		isNumeric: function(a) {
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isPlainObject: function(a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(a) {
			var b;
			for(b in a) return !1;
			return !0
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		},
		globalEval: function(a) {
			var b, c = eval;
			a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function(a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b, c) {
			var d, e = 0,
				f = a.length,
				g = s(a);
			if(c) {
				if(g) {
					for(; f > e; e++)
						if(d = b.apply(a[e], c), d === !1) break
				} else
					for(e in a)
						if(d = b.apply(a[e], c), d === !1) break
			} else if(g) {
				for(; f > e; e++)
					if(d = b.call(a[e], e, a[e]), d === !1) break
			} else
				for(e in a)
					if(d = b.call(a[e], e, a[e]), d === !1) break;
			return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function(a, b, c) {
			return null == b ? -1 : g.call(b, a, c)
		},
		merge: function(a, b) {
			for(var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for(var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function(a, b, c) {
			var d, f = 0,
				g = a.length,
				h = s(a),
				i = [];
			if(h)
				for(; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
			else
				for(f in a) d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, e, f;
			return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
				return a.apply(b || this, e.concat(d.call(arguments)))
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0
		},
		now: Date.now,
		support: k
	}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function(a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ha(),
			z = ha(),
			A = ha(),
			B = function(a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function(a, b) {
				for(var c = 0, d = a.length; d > c; c++)
					if(a[c] === b) return c;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = M.replace("w", "w#"),
			O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
			P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
			Q = new RegExp(L + "+", "g"),
			R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			S = new RegExp("^" + L + "*," + L + "*"),
			T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			V = new RegExp(P),
			W = new RegExp("^" + N + "$"),
			X = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + O),
				PSEUDO: new RegExp("^" + P),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			$ = /^[^{]+\{\s*\[native \w/,
			_ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			aa = /[+~]/,
			ba = /'|\\/g,
			ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			da = function(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			ea = function() {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch(fa) {
			H = {
				apply: E.length ? function(a, b) {
					G.apply(a, I.call(b))
				} : function(a, b) {
					var c = a.length,
						d = 0;
					while(a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}

		function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
			if(!e && p) {
				if(11 !== k && (f = _.exec(a)))
					if(j = f[1]) {
						if(9 === k) {
							if(h = b.getElementById(j), !h || !h.parentNode) return d;
							if(h.id === j) return d.push(h), d
						} else if(b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
					} else {
						if(f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
					}
				if(c.qsa && (!q || !q.test(a))) {
					if(s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
						while(l--) o[l] = s + ra(o[l]);
						w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
					}
					if(x) try {
						return H.apply(d, w.querySelectorAll(x)), d
					} catch(y) {} finally {
						r || b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function ha() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ia(a) {
			return a[u] = !0, a
		}

		function ja(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch(c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ka(a, b) {
			var c = a.split("|"),
				e = a.length;
			while(e--) d.attrHandle[c[e]] = b
		}

		function la(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if(d) return d;
			if(c)
				while(c = c.nextSibling)
					if(c === b) return -1;
			return a ? 1 : -1
		}

		function ma(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function na(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return("input" === c || "button" === c) && b.type === a
			}
		}

		function oa(a) {
			return ia(function(b) {
				return b = +b, ia(function(c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while(g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = ga.support = {}, f = ga.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = ga.setDocument = function(a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ja(function(a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function(a, b) {
				if("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function(a) {
				var b = a.replace(ca, da);
				return function(a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function(a) {
				var b = a.replace(ca, da);
				return function(a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function(a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function(a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if("*" === a) {
					while(c = f[e++]) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function(a, b) {
				return p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ja(function(a) {
				var b = g.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function(a, b) {
				if(b)
					while(b = b.parentNode)
						if(b === a) return !0;
				return !1
			}, B = b ? function(a, b) {
				if(a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function(a, b) {
				if(a === b) return l = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					h = [a],
					i = [b];
				if(!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
				if(e === f) return la(a, b);
				c = a;
				while(c = c.parentNode) h.unshift(c);
				c = b;
				while(c = c.parentNode) i.unshift(c);
				while(h[d] === i[d]) d++;
				return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, g) : n
		}, ga.matches = function(a, b) {
			return ga(a, null, null, b)
		}, ga.matchesSelector = function(a, b) {
			if((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);
				if(d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch(e) {}
			return ga(b, n, null, [a]).length > 0
		}, ga.contains = function(a, b) {
			return(a.ownerDocument || a) !== n && m(a), t(a, b)
		}, ga.attr = function(a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, ga.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, ga.uniqueSort = function(a) {
			var b, d = [],
				e = 0,
				f = 0;
			if(l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while(b = a[f++]) b === a[f] && (e = d.push(f));
				while(e--) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = ga.getText = function(a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if(f) {
				if(1 === f || 9 === f || 11 === f) {
					if("string" == typeof a.textContent) return a.textContent;
					for(a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if(3 === f || 4 === f) return a.nodeValue
			} else
				while(b = a[d++]) c += e(b);
			return c
		}, d = ga.selectors = {
			cacheLength: 50,
			createPseudo: ia,
			match: X,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
				},
				PSEUDO: function(a) {
					var b, c = !a[6] && a[2];
					return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					var b = a.replace(ca, da).toLowerCase();
					return "*" === a ? function() {
						return !0
					} : function(a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function(a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function(a, b, c) {
					return function(d) {
						var e = ga.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				},
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function(a) {
						return !!a.parentNode
					} : function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if(q) {
							if(f) {
								while(p) {
									l = b;
									while(l = l[p])
										if(h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if(o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
								while(l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if(1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];
										break
									}
							} else if(s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
							else
								while(l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function(a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
						var d, f = e(a, b),
							g = f.length;
						while(g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function(a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ia(function(a) {
					var b = [],
						c = [],
						d = h(a.replace(R, "$1"));
					return d[u] ? ia(function(a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while(h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ia(function(a) {
					return function(b) {
						return ga(a, b).length > 0
					}
				}),
				contains: ia(function(a) {
					return a = a.replace(ca, da),
						function(b) {
							return(b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ia(function(a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
						function(b) {
							var c;
							do
								if(c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function(a) {
					return a === o
				},
				focus: function(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function(a) {
					return a.disabled === !1
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function(a) {
					for(a = a.firstChild; a; a = a.nextSibling)
						if(a.nodeType < 6) return !1;
					return !0
				},
				parent: function(a) {
					return !d.pseudos.empty(a)
				},
				header: function(a) {
					return Z.test(a.nodeName)
				},
				input: function(a) {
					return Y.test(a.nodeName)
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: oa(function() {
					return [0]
				}),
				last: oa(function(a, b) {
					return [b - 1]
				}),
				eq: oa(function(a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: oa(function(a, b) {
					for(var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: oa(function(a, b) {
					for(var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: oa(function(a, b, c) {
					for(var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: oa(function(a, b, c) {
					for(var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for(b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = ma(b);
		for(b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = na(b);

		function qa() {}
		qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if(k) return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while(h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(R, " ")
				}), h = h.slice(c.length));
				for(g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if(!c) break
			}
			return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
		};

		function ra(a) {
			for(var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function sa(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function(b, c, f) {
				while(b = b[d])
					if(1 === b.nodeType || e) return a(b, c, f)
			} : function(b, c, g) {
				var h, i, j = [w, f];
				if(g) {
					while(b = b[d])
						if((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					while(b = b[d])
						if(1 === b.nodeType || e) {
							if(i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
							if(i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function ta(a) {
			return a.length > 1 ? function(b, c, d) {
				var e = a.length;
				while(e--)
					if(!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function ua(a, b, c) {
			for(var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
			return c
		}

		function va(a, b, c, d, e) {
			for(var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ua(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : va(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if(c && c(q, r, h, i), d) {
					j = va(r, n), d(j, [], h, i), k = j.length;
					while(k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if(f) {
					if(e || a) {
						if(e) {
							j = [], k = r.length;
							while(k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while(k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
			})
		}

		function xa(a) {
			for(var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
					return a === b
				}, h, !0), l = sa(function(a) {
					return J(b, a) > -1
				}, h, !0), m = [function(a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++)
				if(c = d.relative[a[i].type]) m = [sa(ta(m), c)];
				else {
					if(c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for(e = ++i; f > e; e++)
							if(d.relative[a[e].type]) break;
						return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
					}
					m.push(c)
				}
			return ta(m)
		}

		function ya(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function(f, g, h, i, k) {
					var l, m, o, p = 0,
						q = "0",
						r = f && [],
						s = [],
						t = j,
						u = f || e && d.find.TAG("*", k),
						v = w += null == t ? 1 : Math.random() || .1,
						x = u.length;
					for(k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
						if(e && l) {
							m = 0;
							while(o = a[m++])
								if(o(l, g, h)) {
									i.push(l);
									break
								}
							k && (w = v)
						}
						c && ((l = !o && l) && p--, f && r.push(l))
					}
					if(p += q, c && q !== p) {
						m = 0;
						while(o = b[m++]) o(r, s, g, h);
						if(f) {
							if(p > 0)
								while(q--) r[q] || s[q] || (s[q] = F.call(i));
							s = va(s)
						}
						H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
					}
					return k && (w = v, j = t), r
				};
			return c ? ia(f) : f
		}
		return h = ga.compile = function(a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if(!f) {
				b || (b = g(a)), c = b.length;
				while(c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, ya(e, d)), f.selector = a
			}
			return f
		}, i = ga.select = function(a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if(e = e || [], 1 === o.length) {
				if(j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if(b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = X.needsContext.test(a) ? 0 : j.length;
				while(i--) {
					if(k = j[i], d.relative[l = k.type]) break;
					if((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if(j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
						break
					}
				}
			}
			return(n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ja(function(a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ka("type|href|height|width", function(a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ja(function(a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ka("value", function(a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ja(function(a) {
			return null == a.getAttribute("disabled")
		}) || ka(K, function(a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), ga
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = n.expr.match.needsContext,
		v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(a, b, c) {
		if(n.isFunction(b)) return n.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if(b.nodeType) return n.grep(a, function(a) {
			return a === b !== c
		});
		if("string" == typeof b) {
			if(w.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function(a) {
			return g.call(b, a) >= 0 !== c
		})
	}
	n.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function(a) {
			var b, c = this.length,
				d = [],
				e = this;
			if("string" != typeof a) return this.pushStack(n(a).filter(function() {
				for(b = 0; c > b; b++)
					if(n.contains(e[b], this)) return !0
			}));
			for(b = 0; c > b; b++) n.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function(a) {
			return this.pushStack(x(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(x(this, a || [], !0))
		},
		is: function(a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
		}
	});
	var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		A = n.fn.init = function(a, b) {
			var c, d;
			if(!a) return this;
			if("string" == typeof a) {
				if(c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
				if(c[1]) {
					if(b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
						for(c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	A.prototype = n.fn, y = n(l);
	var B = /^(?:parents|prev(?:Until|All))/,
		C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.extend({
		dir: function(a, b, c) {
			var d = [],
				e = void 0 !== c;
			while((a = a[b]) && 9 !== a.nodeType)
				if(1 === a.nodeType) {
					if(e && n(a).is(c)) break;
					d.push(a)
				}
			return d
		},
		sibling: function(a, b) {
			for(var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), n.fn.extend({
		has: function(a) {
			var b = n(a, this),
				c = b.length;
			return this.filter(function() {
				for(var a = 0; c > a; a++)
					if(n.contains(this, b[a])) return !0
			})
		},
		closest: function(a, b) {
			for(var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
				for(c = this[d]; c && c !== b; c = c.parentNode)
					if(c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? n.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function D(a, b) {
		while((a = a[b]) && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return n.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return n.dir(a, "parentNode", c)
		},
		next: function(a) {
			return D(a, "nextSibling")
		},
		prev: function(a) {
			return D(a, "previousSibling")
		},
		nextAll: function(a) {
			return n.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return n.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return n.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return n.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return n.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return n.sibling(a.firstChild)
		},
		contents: function(a) {
			return a.contentDocument || n.merge([], a.childNodes)
		}
	}, function(a, b) {
		n.fn[a] = function(c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var E = /\S+/g,
		F = {};

	function G(a) {
		var b = F[a] = {};
		return n.each(a.match(E) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function(a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
		var b, c, d, e, f, g, h = [],
			i = !a.once && [],
			j = function(l) {
				for(b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
					if(h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
						b = !1;
						break
					}
				d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
			},
			k = {
				add: function() {
					if(h) {
						var c = h.length;
						! function g(b) {
							n.each(b, function(b, c) {
								var d = n.type(c);
								"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
							})
						}(arguments), d ? f = h.length : b && (e = c, j(b))
					}
					return this
				},
				remove: function() {
					return h && n.each(arguments, function(a, b) {
						var c;
						while((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
					}), this
				},
				has: function(a) {
					return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
				},
				empty: function() {
					return h = [], f = 0, this
				},
				disable: function() {
					return h = i = b = void 0, this
				},
				disabled: function() {
					return !h
				},
				lock: function() {
					return i = void 0, b || k.disable(), this
				},
				locked: function() {
					return !i
				},
				fireWith: function(a, b) {
					return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
				},
				fire: function() {
					return k.fireWith(this, arguments), this
				},
				fired: function() {
					return !!c
				}
			};
		return k
	}, n.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return n.Deferred(function(c) {
							n.each(b, function(b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b = 0,
				c = d.call(arguments),
				e = c.length,
				f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function(a, b, c) {
					return function(e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if(e > 1)
				for(i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	n.fn.ready = function(a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
		}
	});

	function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
	}
	n.ready.promise = function(b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
	}, n.ready.promise();
	var J = n.access = function(a, b, c, d, e, f, g) {
		var h = 0,
			i = a.length,
			j = null == c;
		if("object" === n.type(c)) {
			e = !0;
			for(h in c) n.access(a, b, h, c[h], !0, f, g)
		} else if(void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
				return j.call(n(a), c)
			})), b))
			for(; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	n.acceptData = function(a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	};

	function K() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = n.expando + K.uid++
	}
	K.uid = 1, K.accepts = n.acceptData, K.prototype = {
		key: function(a) {
			if(!K.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if(!c) {
				c = K.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch(d) {
					b[this.expando] = c, n.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function(a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if("string" == typeof b) f[b] = c;
			else if(n.isEmptyObject(f)) n.extend(this.cache[e], b);
			else
				for(d in b) f[d] = b[d];
			return f
		},
		get: function(a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function(a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function(a, b) {
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if(void 0 === b) this.cache[f] = {};
			else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
				while(c--) delete g[d[c]]
			}
		},
		hasData: function(a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function(a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var L = new K,
		M = new K,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		var d;
		if(void 0 === c && 1 === a.nodeType)
			if(d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
				} catch(e) {}
				M.set(a, b, c)
			} else c = void 0;
		return c
	}
	n.extend({
		hasData: function(a) {
			return M.hasData(a) || L.hasData(a)
		},
		data: function(a, b, c) {
			return M.access(a, b, c)
		},
		removeData: function(a, b) {
			M.remove(a, b)
		},
		_data: function(a, b, c) {
			return L.access(a, b, c)
		},
		_removeData: function(a, b) {
			L.remove(a, b)
		}
	}), n.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if(void 0 === a) {
				if(this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;
					while(c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					L.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				M.set(this, a)
			}) : J(this, function(b) {
				var c, d = n.camelCase(a);
				if(f && void 0 === b) {
					if(c = M.get(f, a), void 0 !== c) return c;
					if(c = M.get(f, d), void 0 !== c) return c;
					if(c = P(f, d, void 0), void 0 !== c) return c
				} else this.each(function() {
					var c = M.get(this, d);
					M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function(a) {
			return this.each(function() {
				M.remove(this, a)
			})
		}
	}), n.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = n.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = n._queueHooks(a, b),
				g = function() {
					n.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return L.get(a, c) || L.access(a, c, {
				empty: n.Callbacks("once memory").add(function() {
					L.remove(a, [b + "queue", c])
				})
			})
		}
	}), n.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = n.queue(this, a, b);
				n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				n.dequeue(this, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			var c, d = 1,
				e = n.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while(g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		R = ["Top", "Right", "Bottom", "Left"],
		S = function(a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		},
		T = /^(?:checkbox|radio)$/i;
	! function() {
		var a = l.createDocumentFragment(),
			b = a.appendChild(l.createElement("div")),
			c = l.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var U = "undefined";
	k.focusinBubbles = "onfocusin" in a;
	var V = /^key/,
		W = /^(?:mouse|pointer|contextmenu)|click/,
		X = /^(?:focusinfocus|focusoutblur)$/,
		Y = /^([^.]*)(?:\.(.+)|)$/;

	function Z() {
		return !0
	}

	function $() {
		return !1
	}

	function _() {
		try {
			return l.activeElement
		} catch(a) {}
	}
	n.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
			if(r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
					return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
				}), b = (b || "").match(E) || [""], j = b.length;
				while(j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
			if(r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while(j--)
					if(h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
						while(f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
					} else
						for(o in i) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
			}
		},
		trigger: function(b, c, d, e) {
			var f, g, h, i, k, m, o, p = [d || l],
				q = j.call(b, "type") ? b.type : b,
				r = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if(g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
				if(!e && !o.noBubble && !n.isWindow(d)) {
					for(i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
					h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
				}
				f = 0;
				while((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
			}
		},
		dispatch: function(a) {
			a = n.event.fix(a);
			var b, c, e, f, g, h = [],
				i = d.call(arguments),
				j = (L.get(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if(i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if(h && i.nodeType && (!a.button || "click" !== a.type))
				for(; i !== this; i = i.parentNode || this)
					if(i.disabled !== !0 || "click" !== a.type) {
						for(d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function(a) {
			if(a[n.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
			while(b--) c = d[b], a[c] = f[c];
			return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === _() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, n.Event = function(a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		isDefaultPrevented: $,
		isPropagationStopped: $,
		isImmediatePropagationStopped: $,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return(!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.focusinBubbles || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0)
		};
		n.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = L.access(d, b);
				e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = L.access(d, b) - 1;
				e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
			}
		}
	}), n.fn.extend({
		on: function(a, b, c, d, e) {
			var f, g;
			if("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for(g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if(null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
			else if(!d) return this;
			return 1 === e && (f = d, d = function(a) {
				return n().off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
				n.event.add(this, a, d, c, b)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if(a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if("object" == typeof a) {
				for(e in a) this.off(e, b, a[e]);
				return this
			}
			return(b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ba = /<([\w:]+)/,
		ca = /<|&#?\w+;/,
		da = /<(?:script|style|link)/i,
		ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
		fa = /^$|\/(?:java|ecma)script/i,
		ga = /^true\/(.*)/,
		ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ia = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

	function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function ka(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function la(a) {
		var b = ga.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function ma(a, b) {
		for(var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
	}

	function na(a, b) {
		var c, d, e, f, g, h, i, j;
		if(1 === b.nodeType) {
			if(L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for(e in j)
					for(c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
			}
			M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
		}
	}

	function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
	}

	function pa(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}
	n.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = n.contains(a.ownerDocument, a);
			if(!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
				for(g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
			if(b)
				if(c)
					for(f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
				else na(a, h);
			return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
		},
		buildFragment: function(a, b, c, d) {
			for(var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
				if(e = a[m], e || 0 === e)
					if("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
					else if(ca.test(e)) {
				f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
				while(j--) f = f.lastChild;
				n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			} else l.push(b.createTextNode(e));
			k.textContent = "", m = 0;
			while(e = l[m++])
				if((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
					j = 0;
					while(e = f[j++]) fa.test(e.type || "") && c.push(e)
				}
			return k
		},
		cleanData: function(a) {
			for(var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if(n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if(b.events)
						for(d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
					L.cache[e] && delete L.cache[e]
				}
				delete M.cache[c[M.expando]]
			}
		}
	}), n.fn.extend({
		text: function(a) {
			return J(this, function(a) {
				return void 0 === a ? n.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(a) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(a) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for(var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for(var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return n.clone(this, a, b)
			})
		},
		html: function(a) {
			return J(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if(void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");
					try {
						for(; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
						b = 0
					} catch(e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = arguments[0];
			return this.domManip(arguments, function(b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0,
				l = this.length,
				m = this,
				o = l - 1,
				p = a[0],
				q = n.isFunction(p);
			if(q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
				var d = m.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if(l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for(f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
				if(g)
					for(i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
			}
			return this
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		n.fn[a] = function(a) {
			for(var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var qa, ra = {};

	function sa(b, c) {
		var d, e = n(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
		return e.detach(), f
	}

	function ta(a) {
		var b = l,
			c = ra[a];
		return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
	}
	var ua = /^margin/,
		va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
		wa = function(b) {
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
		};

	function xa(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function ya(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}! function() {
		var b, c, d = l.documentElement,
			e = l.createElement("div"),
			f = l.createElement("div");
		if(f.style) {
			f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

			function g() {
				f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
				var g = a.getComputedStyle(f, null);
				b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
			}
			a.getComputedStyle && n.extend(k, {
				pixelPosition: function() {
					return g(), b
				},
				boxSizingReliable: function() {
					return null == c && g(), c
				},
				reliableMarginRight: function() {
					var b, c = f.appendChild(l.createElement("div"));
					return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
				}
			})
		}
	}(), n.swap = function(a, b, c, d) {
		var e, f, g = {};
		for(f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for(f in b) a.style[f] = g[f];
		return e
	};
	var za = /^(none|table(?!-c[ea]).+)/,
		Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
		Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
		Ca = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Da = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ea = ["Webkit", "O", "Moz", "ms"];

	function Fa(a, b) {
		if(b in a) return b;
		var c = b[0].toUpperCase() + b.slice(1),
			d = b,
			e = Ea.length;
		while(e--)
			if(b = Ea[e] + c, b in a) return b;
		return d
	}

	function Ga(a, b, c) {
		var d = Aa.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Ha(a, b, c, d, e) {
		for(var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		return g
	}

	function Ia(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = wa(a),
			g = "border-box" === n.css(a, "boxSizing", !1, f);
		if(0 >= e || null == e) {
			if(e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function Ja(a, b) {
		for(var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		for(g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if(b) {
						var c = xa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(a, b, c, d) {
			if(a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
		}
	}), n.each(["height", "width"], function(a, b) {
		n.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
					return Ia(a, b, d)
				}) : Ia(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && wa(a);
				return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
		return b ? n.swap(a, {
			display: "inline-block"
		}, xa, [a, "marginRight"]) : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		n.cssHooks[a + b] = {
			expand: function(c) {
				for(var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, ua.test(a) || (n.cssHooks[a + b].set = Ga)
	}), n.fn.extend({
		css: function(a, b) {
			return J(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if(n.isArray(b)) {
					for(d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return Ja(this, !0)
		},
		hide: function() {
			return Ja(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				S(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e)
	}
	n.Tween = Ka, Ka.prototype = {
		constructor: Ka,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = Ka.propHooks[this.prop];
			return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = Ka.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
		}
	}, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, n.fx = Ka.prototype.init, n.fx.step = {};
	var La, Ma, Na = /^(?:toggle|show|hide)$/,
		Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
		Pa = /queueHooks$/,
		Qa = [Va],
		Ra = {
			"*": [function(a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = Oa.exec(b),
					f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
					g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
					h = 1,
					i = 20;
				if(g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};

	function Sa() {
		return setTimeout(function() {
			La = void 0
		}), La = n.now()
	}

	function Ta(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for(b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function Ua(a, b, c) {
		for(var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
			if(d = e[f].call(c, b, a)) return d
	}

	function Va(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = {},
			o = a.style,
			p = a.nodeType && S(a),
			q = L.get(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, l.always(function() {
			l.always(function() {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
		}));
		for(d in b)
			if(e = b[d], Na.exec(e)) {
				if(delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if("show" !== e || !q || void 0 === q[d]) continue;
					p = !0
				}
				m[d] = q && q[d] || n.style(a, d)
			} else j = void 0;
		if(n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
		else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
				n(a).hide()
			}), l.done(function() {
				var b;
				L.remove(a, "fxshow");
				for(b in m) n.style(a, b, m[b])
			});
			for(d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function Wa(a, b) {
		var c, d, e, f, g;
		for(c in a)
			if(d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for(c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function Xa(a, b, c) {
		var d, e, f = 0,
			g = Qa.length,
			h = n.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if(e) return !1;
				for(var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: La || Sa(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if(e) return this;
					for(e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for(Wa(k, j.opts.specialEasing); g > f; f++)
			if(d = Qa[f].call(j, a, k, j.opts)) return d;
		return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(Xa, {
			tweener: function(a, b) {
				n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for(var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
			},
			prefilter: function(a, b) {
				b ? Qa.unshift(a) : Qa.push(a)
			}
		}), n.speed = function(a, b, c) {
			var d = a && "object" == typeof a ? n.extend({}, a) : {
				complete: c || !c && b || n.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
				n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
			}, d
		}, n.fn.extend({
			fadeTo: function(a, b, c, d) {
				return this.filter(S).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function(a, b, c, d) {
				var e = n.isEmptyObject(a),
					f = n.speed(b, c, d),
					g = function() {
						var b = Xa(this, n.extend({}, a), f);
						(e || L.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function(a, b, c) {
				var d = function(a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = n.timers,
						g = L.get(this);
					if(e) g[e] && g[e].stop && d(g[e]);
					else
						for(e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
					for(e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && n.dequeue(this, a)
				})
			},
			finish: function(a) {
				return a !== !1 && (a = a || "fx"), this.each(function() {
					var b, c = L.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = n.timers,
						g = d ? d.length : 0;
					for(c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for(b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), n.each(["toggle", "show", "hide"], function(a, b) {
			var c = n.fn[b];
			n.fn[b] = function(a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
			}
		}), n.each({
			slideDown: Ta("show"),
			slideUp: Ta("hide"),
			slideToggle: Ta("toggle"),
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
			n.fn[a] = function(a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), n.timers = [], n.fx.tick = function() {
			var a, b = 0,
				c = n.timers;
			for(La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			c.length || n.fx.stop(), La = void 0
		}, n.fx.timer = function(a) {
			n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
		}, n.fx.interval = 13, n.fx.start = function() {
			Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
		}, n.fx.stop = function() {
			clearInterval(Ma), Ma = null
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function(a, b) {
			return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		function() {
			var a = l.createElement("input"),
				b = l.createElement("select"),
				c = b.appendChild(l.createElement("option"));
			a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
		}();
	var Ya, Za, $a = n.expr.attrHandle;
	n.fn.extend({
		attr: function(a, b) {
			return J(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if(a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
				void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(E);
			if(f && 1 === a.nodeType)
				while(c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if(!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), Za = {
		set: function(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = $a[b] || n.find.attr;
		$a[b] = function(a, b, d) {
			var e, f;
			return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
		}
	});
	var _a = /^(?:input|select|textarea|button)$/i;
	n.fn.extend({
		prop: function(a, b) {
			return J(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return this.each(function() {
				delete this[n.propFix[a] || a]
			})
		}
	}), n.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(a, b, c) {
			var d, e, f, g = a.nodeType;
			if(a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), k.optSelected || (n.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		n.propFix[this.toLowerCase()] = this
	});
	var ab = /[\t\r\n\f]/g;
	n.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if(n.isFunction(a)) return this.each(function(b) {
				n(this).addClass(a.call(this, b, this.className))
			});
			if(h)
				for(b = (a || "").match(E) || []; j > i; i++)
					if(c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
						f = 0;
						while(e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = n.trim(d), c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if(n.isFunction(a)) return this.each(function(b) {
				n(this).removeClass(a.call(this, b, this.className))
			});
			if(h)
				for(b = (a || "").match(E) || []; j > i; i++)
					if(c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
						f = 0;
						while(e = b[f++])
							while(d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
						g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function() {
				if("string" === c) {
					var b, d = 0,
						e = n(this),
						f = a.match(E) || [];
					while(b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for(var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if(1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	});
	var bb = /\r/g;
	n.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if(arguments.length) return d = n.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if(e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a))
				}
			},
			select: {
				get: function(a) {
					for(var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if(c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
							if(b = n(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function(a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while(g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), n.each(["radio", "checkbox"], function() {
		n.valHooks[this] = {
			set: function(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
			}
		}, k.checkOn || (n.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		n.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var cb = n.now(),
		db = /\?/;
	n.parseJSON = function(a) {
		return JSON.parse(a + "")
	}, n.parseXML = function(a) {
		var b, c;
		if(!a || "string" != typeof a) return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch(d) {
			b = void 0
		}
		return(!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
	};
	var eb = /#.*$/,
		fb = /([?&])_=[^&]*/,
		gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		ib = /^(?:GET|HEAD)$/,
		jb = /^\/\//,
		kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		lb = {},
		mb = {},
		nb = "*/".concat("*"),
		ob = a.location.href,
		pb = kb.exec(ob.toLowerCase()) || [];

	function qb(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(E) || [];
			if(n.isFunction(c))
				while(d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function rb(a, b, c, d) {
		var e = {},
			f = a === mb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function sb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for(c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && n.extend(!0, a, d), a
	}

	function tb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if(d)
			for(e in h)
				if(h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				}
		if(i[0] in c) f = i[0];
		else {
			for(e in c) {
				if(!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function ub(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if(k[1])
			for(g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while(f)
			if(a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if("*" === f) f = i;
				else if("*" !== i && i !== f) {
			if(g = j[i + " " + f] || j["* " + f], !g)
				for(e in j)
					if(h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if(g !== !0)
				if(g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch(l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ob,
			type: "GET",
			isLocal: hb.test(pb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": nb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
		},
		ajaxPrefilter: qb(lb),
		ajaxTransport: qb(mb),
		ajax: function(a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
				l = k.context || k,
				m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
				o = n.Deferred(),
				p = n.Callbacks("once memory"),
				q = k.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if(2 === t) {
							if(!f) {
								f = {};
								while(b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
							}
							b = f[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === t ? e : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function(a) {
						return t || (k.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if(a)
							if(2 > t)
								for(b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function(a) {
						var b = a || u;
						return c && c.abort(b), x(0, b), this
					}
				};
			if(o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
			i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
			for(j in k.headers) v.setRequestHeader(j, k.headers[j]);
			if(k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for(j in {
					success: 1,
					error: 1,
					complete: 1
				}) v[j](k[j]);
			if(c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, c.send(r, x)
				} catch(w) {
					if(!(2 > t)) throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");

			function x(a, b, f, h) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
			}
			return v
		},
		getJSON: function(a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function(a, b) {
		n[b] = function(a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), n._evalUrl = function(a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function(a) {
			var b;
			return n.isFunction(a) ? this.each(function(b) {
				n(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
				var a = this;
				while(a.firstElementChild) a = a.firstElementChild;
				return a
			}).append(this)), this)
		},
		wrapInner: function(a) {
			return this.each(n.isFunction(a) ? function(b) {
				n(this).wrapInner(a.call(this, b))
			} : function() {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = n.isFunction(a);
			return this.each(function(c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	}), n.expr.filters.hidden = function(a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, n.expr.filters.visible = function(a) {
		return !n.expr.filters.hidden(a)
	};
	var vb = /%20/g,
		wb = /\[\]$/,
		xb = /\r?\n/g,
		yb = /^(?:submit|button|image|reset|file)$/i,
		zb = /^(?:input|select|textarea|keygen)/i;

	function Ab(a, b, c, d) {
		var e;
		if(n.isArray(b)) n.each(b, function(b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if(c || "object" !== n.type(b)) d(a, b);
		else
			for(e in b) Ab(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if(void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
			e(this.name, this.value)
		});
		else
			for(c in a) Ab(c, a[c], b, e);
		return d.join("&").replace(vb, "+")
	}, n.fn.extend({
		serialize: function() {
			return n.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
			}).map(function(a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(xb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(xb, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch(a) {}
	};
	var Bb = 0,
		Cb = {},
		Db = {
			0: 200,
			1223: 204
		},
		Eb = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
		for(var a in Cb) Cb[a]()
	}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
		var b;
		return k.cors || Eb && !a.crossDomain ? {
			send: function(c, d) {
				var e, f = a.xhr(),
					g = ++Bb;
				if(f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for(e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for(e in c) f.setRequestHeader(e, c[e]);
				b = function(a) {
					return function() {
						b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch(h) {
					if(b) throw h
				}
			},
			abort: function() {
				b && b()
			}
		} : void 0
	}), n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), n.ajaxTransport("script", function(a) {
		if(a.crossDomain) {
			var b, c;
			return {
				send: function(d, e) {
					b = n("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function(a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), l.head.appendChild(b[0])
				},
				abort: function() {
					c && c()
				}
			}
		}
	});
	var Fb = [],
		Gb = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Fb.pop() || n.expando + "_" + cb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function(a, b, c) {
		if(!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || l;
		var d = v.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
	};
	var Hb = n.fn.load;
	n.fn.load = function(a, b, c) {
		if("string" != typeof a && Hb) return Hb.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e,
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).complete(c && function(a, b) {
			g.each(c, f || [a.responseText, b, a])
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		n.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function(a) {
		return n.grep(n.timers, function(b) {
			return a === b.elem
		}).length
	};
	var Ib = a.document.documentElement;

	function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	n.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function(a) {
			if(arguments.length) return void 0 === a ? this : this.each(function(b) {
				n.offset.setOffset(this, a, b)
			});
			var b, c, d = this[0],
				e = {
					top: 0,
					left: 0
				},
				f = d && d.ownerDocument;
			if(f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
				top: e.top + c.pageYOffset - b.clientTop,
				left: e.left + c.pageXOffset - b.clientLeft
			}) : e
		},
		position: function() {
			if(this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - n.css(c, "marginTop", !0),
					left: b.left - d.left - n.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || Ib;
				while(a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
				return a || Ib
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, c) {
		var d = "pageYOffset" === c;
		n.fn[b] = function(e) {
			return J(this, function(b, e, f) {
				var g = Jb(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), n.each(["top", "left"], function(a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			n.fn[d] = function(d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return J(this, function(b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.size = function() {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return n
	});
	var Kb = a.jQuery,
		Lb = a.$;
	return n.noConflict = function(b) {
		return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
	}, typeof b === U && (a.jQuery = a.$ = n), n
});
(function($) {

	$.fn.ajaxSubmit = function(options) {
		if(typeof options == 'function')
			options = {
				success: options
			};

		options = $.extend({
			url: this.attr('action') || window.location,
			type: this.attr('method') || 'GET'
		}, options || {});

		var a = this.formToArray(options.semantic);

		// give pre-submit callback an opportunity to abort the submit
		if(options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;

		// fire vetoable 'validate' event
		var veto = {};
		$.event.trigger('form.submit.validate', [a, this, options, veto]);
		if(veto.veto)
			return this;

		var q = $.param(a); //.replace(/%20/g,'+');

		if(options.type.toUpperCase() == 'GET') {
			options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
			options.data = null; // data is null for 'get'
		} else
			options.data = q; // data is the query string for 'post'

		var $form = this,
			callbacks = [];
		if(options.resetForm) callbacks.push(function() {
			$form.resetForm();
		});
		if(options.clearForm) callbacks.push(function() {
			$form.clearForm();
		});

		// perform a load on the target only if dataType is not provided
		if(!options.dataType && options.target) {
			var oldSuccess = options.success; // || function(){};
			callbacks.push(function(data) {
				$(options.target).attr("innerHTML", data).evalScripts().each(oldSuccess, arguments);
			});
		} else if(options.success)
			callbacks.push(options.success);

		options.success = function(data, status) {
			for(var i = 0, max = callbacks.length; i < max; i++)
				callbacks[i](data, status, $form);
		};

		// are there files to upload?
		var files = $('input:file', this).fieldValue();
		var found = false;
		for(var j = 0; j < files.length; j++)
			if(files[j])
				found = true;

		if(options.iframe || found) // options.iframe allows user to force iframe mode
			fileUpload();
		else
			$.ajax(options);

		// fire 'notify' event
		$.event.trigger('form.submit.notify', [this, options]);
		return this;

		// private function for handling file uploads (hat tip to YAHOO!)
		function fileUpload() {
			var form = $form[0];
			var opts = $.extend({}, $.ajaxSettings, options);

			var id = 'jqFormIO' + $.fn.ajaxSubmit.counter++;
			var $io = $('<iframe id="' + id + '" name="' + id + '" />');
			var io = $io[0];
			var op8 = $.browser.opera && window.opera.version() < 9;
			if($.browser.msie || op8) io.src = 'javascript:false;document.write("");';
			$io.css({
				position: 'absolute',
				top: '-1000px',
				left: '-1000px'
			});

			var xhr = { // mock object
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: 'n/a',
				getAllResponseHeaders: function() {},
				getResponseHeader: function() {},
				setRequestHeader: function() {}
			};

			var g = opts.global;
			// trigger ajax global events so that activity/block indicators work like normal
			if(g && !$.active++) $.event.trigger("ajaxStart");
			if(g) $.event.trigger("ajaxSend", [xhr, opts]);

			var cbInvoked = 0;
			var timedOut = 0;

			// take a breath so that pending repaints get some cpu time before the upload starts
			setTimeout(function() {
				$io.appendTo('body');
				// jQuery's event binding doesn't work for iframe events in IE
				io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);

				// make sure form attrs are set
				var encAttr = form.encoding ? 'encoding' : 'enctype';
				var t = $form.attr('target');
				$form.attr({
					target: id,
					method: 'POST',
					encAttr: 'multipart/form-data',
					action: opts.url
				});

				// support timout
				if(opts.timeout)
					setTimeout(function() {
						timedOut = true;
						cb();
					}, opts.timeout);

				form.submit();
				$form.attr('target', t); // reset target
			}, 10);

			function cb() {
				if(cbInvoked++) return;

				io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

				var ok = true;
				try {
					if(timedOut) throw 'timeout';
					// extract the server response from the iframe
					var data, doc;
					doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
					xhr.responseText = doc.body ? doc.body.innerHTML : null;
					xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;

					if(opts.dataType == 'json' || opts.dataType == 'script') {
						var ta = doc.getElementsByTagName('textarea')[0];
						data = ta ? ta.value : xhr.responseText;
						if(opts.dataType == 'json')
							eval("data = " + data);
						else
							$.globalEval(data);
					} else if(opts.dataType == 'xml') {
						data = xhr.responseXML;
						if(!data && xhr.responseText != null)
							data = toXml(xhr.responseText);
					} else {
						data = xhr.responseText;
					}
				} catch(e) {
					ok = false;
					$.handleError(opts, xhr, 'error', e);
				}

				// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
				if(ok) {
					opts.success(data, 'success');
					if(g) $.event.trigger("ajaxSuccess", [xhr, opts]);
				}
				if(g) $.event.trigger("ajaxComplete", [xhr, opts]);
				if(g && !--$.active) $.event.trigger("ajaxStop");
				if(opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

				// clean up
				setTimeout(function() {
					$io.remove();
					xhr.responseXML = null;
				}, 100);
			};

			function toXml(s, doc) {
				if(window.ActiveXObject) {
					doc = new ActiveXObject('Microsoft.XMLDOM');
					doc.async = 'false';
					doc.loadXML(s);
				} else
					doc = (new DOMParser()).parseFromString(s, 'text/xml');
				return(doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
			};
		};
	};
	$.fn.ajaxSubmit.counter = 0; // used to create unique iframe ids

	$.fn.ajaxForm = function(options) {
		return this.ajaxFormUnbind().submit(submitHandler).each(function() {
			// store options in hash
			this.formPluginId = $.fn.ajaxForm.counter++;
			$.fn.ajaxForm.optionHash[this.formPluginId] = options;
			$(":submit,input:image", this).click(clickHandler);
		});
	};

	$.fn.ajaxForm.counter = 1;
	$.fn.ajaxForm.optionHash = {};

	function clickHandler(e) {
		var $form = this.form;
		$form.clk = this;
		if(this.type == 'image') {
			if(e.offsetX != undefined) {
				$form.clk_x = e.offsetX;
				$form.clk_y = e.offsetY;
			} else if(typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $(this).offset();
				$form.clk_x = e.pageX - offset.left;
				$form.clk_y = e.pageY - offset.top;
			} else {
				$form.clk_x = e.pageX - this.offsetLeft;
				$form.clk_y = e.pageY - this.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() {
			$form.clk = $form.clk_x = $form.clk_y = null;
		}, 10);
	};

	function submitHandler() {
		// retrieve options from hash
		var id = this.formPluginId;
		var options = $.fn.ajaxForm.optionHash[id];
		$(this).ajaxSubmit(options);
		return false;
	};

	/**
	 * ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	 *
	 * @name   ajaxFormUnbind
	 * @return jQuery
	 * @cat    Plugins/Form
	 * @type   jQuery
	 */
	$.fn.ajaxFormUnbind = function() {
		this.unbind('submit', submitHandler);
		return this.each(function() {
			$(":submit,input:image", this).unbind('click', clickHandler);
		});

	};

	$.fn.formToArray = function(semantic) {
		var a = [];
		if(this.length == 0) return a;

		var form = this[0];
		var els = semantic ? form.getElementsByTagName('*') : form.elements;
		if(!els) return a;
		for(var i = 0, max = els.length; i < max; i++) {
			var el = els[i];
			var n = el.name;
			if(!n) continue;

			if(semantic && form.clk && el.type == "image") {
				// handle image inputs on the fly when semantic == true
				if(!el.disabled && form.clk == el)
					a.push({
						name: n + '.x',
						value: form.clk_x
					}, {
						name: n + '.y',
						value: form.clk_y
					});
				continue;
			}

			var v = $.fieldValue(el, true);
			if(v && v.constructor == Array) {
				for(var j = 0, jmax = v.length; j < jmax; j++)
					a.push({
						name: n,
						value: v[j]
					});
			} else if(v !== null && typeof v != 'undefined')
				a.push({
					name: n,
					value: v
				});
		}

		if(!semantic && form.clk) {
			// input type=='image' are not found in elements array! handle them here
			var inputs = form.getElementsByTagName("input");
			for(var i = 0, max = inputs.length; i < max; i++) {
				var input = inputs[i];
				var n = input.name;
				if(n && !input.disabled && input.type == "image" && form.clk == input)
					a.push({
						name: n + '.x',
						value: form.clk_x
					}, {
						name: n + '.y',
						value: form.clk_y
					});
			}
		}
		return a;
	};

	$.fn.formSerialize = function(semantic) {
		//hand off to jQuery.param for proper encoding
		return $.param(this.formToArray(semantic));
	};

	$.fn.fieldSerialize = function(successful) {
		var a = [];
		this.each(function() {
			var n = this.name;
			if(!n) return;
			var v = $.fieldValue(this, successful);
			if(v && v.constructor == Array) {
				for(var i = 0, max = v.length; i < max; i++)
					a.push({
						name: n,
						value: v[i]
					});
			} else if(v !== null && typeof v != 'undefined')
				a.push({
					name: this.name,
					value: v
				});
		});
		//hand off to jQuery.param for proper encoding
		return $.param(a);
	};

	$.fn.fieldValue = function(successful) {
		for(var val = [], i = 0, max = this.length; i < max; i++) {
			var el = this[i];
			var v = $.fieldValue(el, successful);
			if(v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
				continue;
			v.constructor == Array ? $.merge(val, v) : val.push(v);
		}
		return val;
	};

	$.fieldValue = function(el, successful) {
		var n = el.name,
			t = el.type,
			tag = el.tagName.toLowerCase();
		if(typeof successful == 'undefined') successful = true;

		if(successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
				(t == 'checkbox' || t == 'radio') && !el.checked ||
				(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
				tag == 'select' && el.selectedIndex == -1))
			return null;

		if(tag == 'select') {
			var index = el.selectedIndex;
			if(index < 0) return null;
			var a = [],
				ops = el.options;
			var one = (t == 'select-one');
			var max = (one ? index + 1 : ops.length);
			for(var i = (one ? index : 0); i < max; i++) {
				var op = ops[i];
				if(op.selected) {
					// extra pain for IE...
					var v = $.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value;
					if(one) return v;
					a.push(v);
				}
			}
			return a;
		}
		return el.value;
	};

	$.fn.clearForm = function() {
		return this.each(function() {
			$('input,select,textarea', this).clearFields();
		});
	};

	$.fn.clearFields = $.fn.clearInputs = function() {
		return this.each(function() {
			var t = this.type,
				tag = this.tagName.toLowerCase();
			if(t == 'text' || t == 'password' || tag == 'textarea')
				this.value = '';
			else if(t == 'checkbox' || t == 'radio')
				this.checked = false;
			else if(tag == 'select')
				this.selectedIndex = -1;
		});
	};

	$.fn.resetForm = function() {
		return this.each(function() {
			// guard against an input with the name of 'reset'
			// note that IE reports the reset function as an 'object'
			if(typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
				this.reset();
		});
	};

})(jQuery);