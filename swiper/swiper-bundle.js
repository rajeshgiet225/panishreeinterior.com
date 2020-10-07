* Swiper 6.2.0
3	 * Most modern mobile touch slider and framework with hardware accelerated transitions
4	 * http://swiperjs.com
5	 *
6	 * Copyright 2014-2020 Vladimir Kharlampidi
7	 *
8	 * Released under the MIT License
9	 *
10	 * Released on: September 4, 2020
11	 */
12	
13	(function (global, factory) {
14	  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
15	  typeof define === 'function' && define.amd ? define(factory) :
16	  (global = global || self, global.Swiper = factory());
17	}(this, (function () { 'use strict';
18	
19	  function _defineProperties(target, props) {
20	    for (var i = 0; i < props.length; i++) {
21	      var descriptor = props[i];
22	      descriptor.enumerable = descriptor.enumerable || false;
23	      descriptor.configurable = true;
24	      if ("value" in descriptor) descriptor.writable = true;
25	      Object.defineProperty(target, descriptor.key, descriptor);
26	    }
27	  }
28	
29	  function _createClass(Constructor, protoProps, staticProps) {
30	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
31	    if (staticProps) _defineProperties(Constructor, staticProps);
32	    return Constructor;
33	  }
34	
35	  function _extends() {
36	    _extends = Object.assign || function (target) {
37	      for (var i = 1; i < arguments.length; i++) {
38	        var source = arguments[i];
39	
40	        for (var key in source) {
41	          if (Object.prototype.hasOwnProperty.call(source, key)) {
42	            target[key] = source[key];
43	          }
44	        }
45	      }
46	
47	      return target;
48	    };
49	
50	    return _extends.apply(this, arguments);
51	  }
52	
53	  /**
54	   * SSR Window 3.0.0-alpha.4
55	   * Better handling for window object in SSR environment
56	   * https://github.com/nolimits4web/ssr-window
57	   *
58	   * Copyright 2020, Vladimir Kharlampidi
59	   *
60	   * Licensed under MIT
61	   *
62	   * Released on: May 20, 2020
63	   */
64	
65	  /* eslint-disable no-param-reassign */
66	  function isObject(obj) {
67	    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
68	  }
69	
70	  function extend(target, src) {
71	    if (target === void 0) {
72	      target = {};
73	    }
74	
75	    if (src === void 0) {
76	      src = {};
77	    }
78	
79	    Object.keys(src).forEach(function (key) {
80	      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
81	        extend(target[key], src[key]);
82	      }
83	    });
84	  }
85	
86	  var ssrDocument = {
87	    body: {},
88	    addEventListener: function addEventListener() {},
89	    removeEventListener: function removeEventListener() {},
90	    activeElement: {
91	      blur: function blur() {},
92	      nodeName: ''
93	    },
94	    querySelector: function querySelector() {
95	      return null;
96	    },
97	    querySelectorAll: function querySelectorAll() {
98	      return [];
99	    },
100	    getElementById: function getElementById() {
101	      return null;
102	    },
103	    createEvent: function createEvent() {
104	      return {
105	        initEvent: function initEvent() {}
106	      };
107	    },
108	    createElement: function createElement() {
109	      return {
110	        children: [],
111	        childNodes: [],
112	        style: {},
113	        setAttribute: function setAttribute() {},
114	        getElementsByTagName: function getElementsByTagName() {
115	          return [];
116	        }
117	      };
118	    },
119	    createElementNS: function createElementNS() {
120	      return {};
121	    },
122	    importNode: function importNode() {
123	      return null;
124	    },
125	    location: {
126	      hash: '',
127	      host: '',
128	      hostname: '',
129	      href: '',
130	      origin: '',
131	      pathname: '',
132	      protocol: '',
133	      search: ''
134	    }
135	  };
136	
137	  function getDocument() {
138	    var doc = typeof document !== 'undefined' ? document : {};
139	    extend(doc, ssrDocument);
140	    return doc;
141	  }
142	
143	  var ssrWindow = {
144	    document: ssrDocument,
145	    navigator: {
146	      userAgent: ''
147	    },
148	    location: {
149	      hash: '',
150	      host: '',
151	      hostname: '',
152	      href: '',
153	      origin: '',
154	      pathname: '',
155	      protocol: '',
156	      search: ''
157	    },
158	    history: {
159	      replaceState: function replaceState() {},
160	      pushState: function pushState() {},
161	      go: function go() {},
162	      back: function back() {}
163	    },
164	    CustomEvent: function CustomEvent() {
165	      return this;
166	    },
167	    addEventListener: function addEventListener() {},
168	    removeEventListener: function removeEventListener() {},
169	    getComputedStyle: function getComputedStyle() {
170	      return {
171	        getPropertyValue: function getPropertyValue() {
172	          return '';
173	        }
174	      };
175	    },
176	    Image: function Image() {},
177	    Date: function Date() {},
178	    screen: {},
179	    setTimeout: function setTimeout() {},
180	    clearTimeout: function clearTimeout() {},
181	    matchMedia: function matchMedia() {
182	      return {};
183	    },
184	    requestAnimationFrame: function requestAnimationFrame(callback) {
185	      if (typeof setTimeout === 'undefined') {
186	        callback();
187	        return null;
188	      }
189	
190	      return setTimeout(callback, 0);
191	    },
192	    cancelAnimationFrame: function cancelAnimationFrame(id) {
193	      if (typeof setTimeout === 'undefined') {
194	        return;
195	      }
196	
197	      clearTimeout(id);
198	    }
199	  };
200	
201	  function getWindow() {
202	    var win = typeof window !== 'undefined' ? window : {};
203	    extend(win, ssrWindow);
204	    return win;
205	  }
206	
207	  /**
208	   * Dom7 3.0.0-alpha.7
209	   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
210	   * https://framework7.io/docs/dom7.html
211	   *
212	   * Copyright 2020, Vladimir Kharlampidi
213	   *
214	   * Licensed under MIT
215	   *
216	   * Released on: July 14, 2020
217	   */
218	
219	  function _inheritsLoose(subClass, superClass) {
220	    subClass.prototype = Object.create(superClass.prototype);
221	    subClass.prototype.constructor = subClass;
222	    subClass.__proto__ = superClass;
223	  }
224	
225	  function _getPrototypeOf(o) {
226	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
227	      return o.__proto__ || Object.getPrototypeOf(o);
228	    };
229	    return _getPrototypeOf(o);
230	  }
231	
232	  function _setPrototypeOf(o, p) {
233	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
234	      o.__proto__ = p;
235	      return o;
236	    };
237	
238	    return _setPrototypeOf(o, p);
239	  }
240	
241	  function _isNativeReflectConstruct() {
242	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
243	    if (Reflect.construct.sham) return false;
244	    if (typeof Proxy === "function") return true;
245	
246	    try {
247	      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
248	      return true;
249	    } catch (e) {
250	      return false;
251	    }
252	  }
253	
254	  function _construct(Parent, args, Class) {
255	    if (_isNativeReflectConstruct()) {
256	      _construct = Reflect.construct;
257	    } else {
258	      _construct = function _construct(Parent, args, Class) {
259	        var a = [null];
260	        a.push.apply(a, args);
261	        var Constructor = Function.bind.apply(Parent, a);
262	        var instance = new Constructor();
263	        if (Class) _setPrototypeOf(instance, Class.prototype);
264	        return instance;
265	      };
266	    }
267	
268	    return _construct.apply(null, arguments);
269	  }
270	
271	  function _isNativeFunction(fn) {
272	    return Function.toString.call(fn).indexOf("[native code]") !== -1;
273	  }
274	
275	  function _wrapNativeSuper(Class) {
276	    var _cache = typeof Map === "function" ? new Map() : undefined;
277	
278	    _wrapNativeSuper = function _wrapNativeSuper(Class) {
279	      if (Class === null || !_isNativeFunction(Class)) return Class;
280	
281	      if (typeof Class !== "function") {
282	        throw new TypeError("Super expression must either be null or a function");
283	      }
284	
285	      if (typeof _cache !== "undefined") {
286	        if (_cache.has(Class)) return _cache.get(Class);
287	
288	        _cache.set(Class, Wrapper);
289	      }
290	
291	      function Wrapper() {
292	        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
293	      }
294	
295	      Wrapper.prototype = Object.create(Class.prototype, {
296	        constructor: {
297	          value: Wrapper,
298	          enumerable: false,
299	          writable: true,
300	          configurable: true
301	        }
302	      });
303	      return _setPrototypeOf(Wrapper, Class);
304	    };
305	
306	    return _wrapNativeSuper(Class);
307	  }
308	
309	  function _assertThisInitialized(self) {
310	    if (self === void 0) {
311	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
312	    }
313	
314	    return self;
315	  }
316	  /* eslint-disable no-proto */
317	
318	
319	  function makeReactive(obj) {
320	    var proto = obj.__proto__;
321	    Object.defineProperty(obj, '__proto__', {
322	      get: function get() {
323	        return proto;
324	      },
325	      set: function set(value) {
326	        proto.__proto__ = value;
327	      }
328	    });
329	  }
330	
331	  var Dom7 = /*#__PURE__*/function (_Array) {
332	    _inheritsLoose(Dom7, _Array);
333	
334	    function Dom7(items) {
335	      var _this;
336	
337	      _this = _Array.call.apply(_Array, [this].concat(items)) || this;
338	      makeReactive(_assertThisInitialized(_this));
339	      return _this;
340	    }
341	
342	    return Dom7;
343	  }( /*#__PURE__*/_wrapNativeSuper(Array));
344	
345	  function arrayFlat(arr) {
346	    if (arr === void 0) {
347	      arr = [];
348	    }
349	
350	    var res = [];
351	    arr.forEach(function (el) {
352	      if (Array.isArray(el)) {
353	        res.push.apply(res, arrayFlat(el));
354	      } else {
355	        res.push(el);
356	      }
357	    });
358	    return res;
359	  }
360	
361	  function arrayFilter(arr, callback) {
362	    return Array.prototype.filter.call(arr, callback);
363	  }
364	
365	  function arrayUnique(arr) {
366	    var uniqueArray = [];
367	
368	    for (var i = 0; i < arr.length; i += 1) {
369	      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
370	    }
371	
372	    return uniqueArray;
373	  }
374	
375	  function qsa(selector, context) {
376	    if (typeof selector !== 'string') {
377	      return [selector];
378	    }
379	
380	    var a = [];
381	    var res = context.querySelectorAll(selector);
382	
383	    for (var i = 0; i < res.length; i += 1) {
384	      a.push(res[i]);
385	    }
386	
387	    return a;
388	  }
389	
390	  function $(selector, context) {
391	    var window = getWindow();
392	    var document = getDocument();
393	    var arr = [];
394	
395	    if (!context && selector instanceof Dom7) {
396	      return selector;
397	    }
398	
399	    if (!selector) {
400	      return new Dom7(arr);
401	    }
402	
403	    if (typeof selector === 'string') {
404	      var html = selector.trim();
405	
406	      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
407	        var toCreate = 'div';
408	        if (html.indexOf('<li') === 0) toCreate = 'ul';
409	        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
410	        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
411	        if (html.indexOf('<tbody') === 0) toCreate = 'table';
412	        if (html.indexOf('<option') === 0) toCreate = 'select';
413	        var tempParent = document.createElement(toCreate);
414	        tempParent.innerHTML = html;
415	
416	        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
417	          arr.push(tempParent.childNodes[i]);
418	        }
419	      } else {
420	        arr = qsa(selector.trim(), context || document);
421	      } // arr = qsa(selector, document);
422	
423	    } else if (selector.nodeType || selector === window || selector === document) {
424	      arr.push(selector);
425	    } else if (Array.isArray(selector)) {
426	      if (selector instanceof Dom7) return selector;
427	      arr = selector;
428	    }
429	
430	    return new Dom7(arrayUnique(arr));
431	  }
432	
433	  $.fn = Dom7.prototype;
434	
435	  function addClass() {
436	    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
437	      classes[_key] = arguments[_key];
438	    }
439	
440	    var classNames = arrayFlat(classes.map(function (c) {
441	      return c.split(' ');
442	    }));
443	    this.forEach(function (el) {
444	      var _el$classList;
445	
446	      (_el$classList = el.classList).add.apply(_el$classList, classNames);
447	    });
448	    return this;
449	  }
450	
451	  function removeClass() {
452	    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
453	      classes[_key2] = arguments[_key2];
454	    }
455	
456	    var classNames = arrayFlat(classes.map(function (c) {
457	      return c.split(' ');
458	    }));
459	    this.forEach(function (el) {
460	      var _el$classList2;
461	
462	      (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
463	    });
464	    return this;
465	  }
466	
467	  function toggleClass() {
468	    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
469	      classes[_key3] = arguments[_key3];
470	    }
471	
472	    var classNames = arrayFlat(classes.map(function (c) {
473	      return c.split(' ');
474	    }));
475	    this.forEach(function (el) {
476	      classNames.forEach(function (className) {
477	        el.classList.toggle(className);
478	      });
479	    });
480	  }
481	
482	  function hasClass() {
483	    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
484	      classes[_key4] = arguments[_key4];
485	    }
486	
487	    var classNames = arrayFlat(classes.map(function (c) {
488	      return c.split(' ');
489	    }));
490	    return arrayFilter(this, function (el) {
491	      return classNames.filter(function (className) {
492	        return el.classList.contains(className);
493	      }).length > 0;
494	    }).length > 0;
495	  }
496	
497	  function attr(attrs, value) {
498	    if (arguments.length === 1 && typeof attrs === 'string') {
499	      // Get attr
500	      if (this[0]) return this[0].getAttribute(attrs);
501	      return undefined;
502	    } // Set attrs
503	
504	
505	    for (var i = 0; i < this.length; i += 1) {
506	      if (arguments.length === 2) {
507	        // String
508	        this[i].setAttribute(attrs, value);
509	      } else {
510	        // Object
511	        for (var attrName in attrs) {
512	          this[i][attrName] = attrs[attrName];
513	          this[i].setAttribute(attrName, attrs[attrName]);
514	        }
515	      }
516	    }
517	
518	    return this;
519	  }
520	
521	  function removeAttr(attr) {
522	    for (var i = 0; i < this.length; i += 1) {
523	      this[i].removeAttribute(attr);
524	    }
525	
526	    return this;
527	  }
528	
529	  function transform(transform) {
530	    for (var i = 0; i < this.length; i += 1) {
531	      this[i].style.transform = transform;
532	    }
533	
534	    return this;
535	  }
536	
537	  function transition(duration) {
538	    for (var i = 0; i < this.length; i += 1) {
539	      this[i].style.transition = typeof duration !== 'string' ? duration + "ms" : duration;
540	    }
541	
542	    return this;
543	  }
544	
545	  function on() {
546	    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
547	      args[_key5] = arguments[_key5];
548	    }
549	
550	    var eventType = args[0],
551	        targetSelector = args[1],
552	        listener = args[2],
553	        capture = args[3];
554	
555	    if (typeof args[1] === 'function') {
556	      eventType = args[0];
557	      listener = args[1];
558	      capture = args[2];
559	      targetSelector = undefined;
560	    }
561	
562	    if (!capture) capture = false;
563	
564	    function handleLiveEvent(e) {
565	      var target = e.target;
566	      if (!target) return;
567	      var eventData = e.target.dom7EventData || [];
568	
569	      if (eventData.indexOf(e) < 0) {
570	        eventData.unshift(e);
571	      }
572	
573	      if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
574	        var _parents = $(target).parents(); // eslint-disable-line
575	
576	
577	        for (var k = 0; k < _parents.length; k += 1) {
578	          if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
579	        }
580	      }
581	    }
582	
583	    function handleEvent(e) {
584	      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
585	
586	      if (eventData.indexOf(e) < 0) {
587	        eventData.unshift(e);
588	      }
589	
590	      listener.apply(this, eventData);
591	    }
592	
593	    var events = eventType.split(' ');
594	    var j;
595	
596	    for (var i = 0; i < this.length; i += 1) {
597	      var el = this[i];
598	
599	      if (!targetSelector) {
600	        for (j = 0; j < events.length; j += 1) {
601	          var event = events[j];
602	          if (!el.dom7Listeners) el.dom7Listeners = {};
603	          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
604	          el.dom7Listeners[event].push({
605	            listener: listener,
606	            proxyListener: handleEvent
607	          });
608	          el.addEventListener(event, handleEvent, capture);
609	        }
610	      } else {
611	        // Live events
612	        for (j = 0; j < events.length; j += 1) {
613	          var _event = events[j];
614	          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
615	          if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];
616	
617	          el.dom7LiveListeners[_event].push({
618	            listener: listener,
619	            proxyListener: handleLiveEvent
620	          });
621	
622	          el.addEventListener(_event, handleLiveEvent, capture);
623	        }
624	      }
625	    }
626	
627	    return this;
628	  }
629	
630	  function off() {
631	    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
632	      args[_key6] = arguments[_key6];
633	    }
634	
635	    var eventType = args[0],
636	        targetSelector = args[1],
637	        listener = args[2],
638	        capture = args[3];
639	
640	    if (typeof args[1] === 'function') {
641	      eventType = args[0];
642	      listener = args[1];
643	      capture = args[2];
644	      targetSelector = undefined;
645	    }
646	
647	    if (!capture) capture = false;
648	    var events = eventType.split(' ');
649	
650	    for (var i = 0; i < events.length; i += 1) {
651	      var event = events[i];
652	
653	      for (var j = 0; j < this.length; j += 1) {
654	        var el = this[j];
655	        var handlers = void 0;
656	
657	        if (!targetSelector && el.dom7Listeners) {
658	          handlers = el.dom7Listeners[event];
659	        } else if (targetSelector && el.dom7LiveListeners) {
660	          handlers = el.dom7LiveListeners[event];
661	        }
662	
663	        if (handlers && handlers.length) {
664	          for (var k = handlers.length - 1; k >= 0; k -= 1) {
665	            var handler = handlers[k];
666	
667	            if (listener && handler.listener === listener) {
668	              el.removeEventListener(event, handler.proxyListener, capture);
669	              handlers.splice(k, 1);
670	            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
671	              el.removeEventListener(event, handler.proxyListener, capture);
672	              handlers.splice(k, 1);
673	            } else if (!listener) {
674	              el.removeEventListener(event, handler.proxyListener, capture);
675	              handlers.splice(k, 1);
676	            }
677	          }
678	        }
679	      }
680	    }
681	
682	    return this;
683	  }
684	
685	  function trigger() {
686	    var window = getWindow();
687	
688	    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
689	      args[_key9] = arguments[_key9];
690	    }
691	
692	    var events = args[0].split(' ');
693	    var eventData = args[1];
694	
695	    for (var i = 0; i < events.length; i += 1) {
696	      var event = events[i];
697	
698	      for (var j = 0; j < this.length; j += 1) {
699	        var el = this[j];
700	
701	        if (window.CustomEvent) {
702	          var evt = new window.CustomEvent(event, {
703	            detail: eventData,
704	            bubbles: true,
705	            cancelable: true
706	          });
707	          el.dom7EventData = args.filter(function (data, dataIndex) {
708	            return dataIndex > 0;
709	          });
710	          el.dispatchEvent(evt);
711	          el.dom7EventData = [];
712	          delete el.dom7EventData;
713	        }
714	      }
715	    }
716	
717	    return this;
718	  }
719	
720	  function transitionEnd(callback) {
721	    var dom = this;
722	
723	    function fireCallBack(e) {
724	      if (e.target !== this) return;
725	      callback.call(this, e);
726	      dom.off('transitionend', fireCallBack);
727	    }
728	
729	    if (callback) {
730	      dom.on('transitionend', fireCallBack);
731	    }
732	
733	    return this;
734	  }
735	
736	  function outerWidth(includeMargins) {
737	    if (this.length > 0) {
738	      if (includeMargins) {
739	        var _styles = this.styles();
740	
741	        return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
742	      }
743	
744	      return this[0].offsetWidth;
745	    }
746	
747	    return null;
748	  }
749	
750	  function outerHeight(includeMargins) {
751	    if (this.length > 0) {
752	      if (includeMargins) {
753	        var _styles2 = this.styles();
754	
755	        return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
756	      }
757	
758	      return this[0].offsetHeight;
759	    }
760	
761	    return null;
762	  }
763	
764	  function offset() {
765	    if (this.length > 0) {
766	      var window = getWindow();
767	      var document = getDocument();
768	      var el = this[0];
769	      var box = el.getBoundingClientRect();
770	      var body = document.body;
771	      var clientTop = el.clientTop || body.clientTop || 0;
772	      var clientLeft = el.clientLeft || body.clientLeft || 0;
773	      var scrollTop = el === window ? window.scrollY : el.scrollTop;
774	      var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
775	      return {
776	        top: box.top + scrollTop - clientTop,
777	        left: box.left + scrollLeft - clientLeft
778	      };
779	    }
780	
781	    return null;
782	  }
783	
784	  function styles() {
785	    var window = getWindow();
786	    if (this[0]) return window.getComputedStyle(this[0], null);
787	    return {};
788	  }
789	
790	  function css(props, value) {
791	    var window = getWindow();
792	    var i;
793	
794	    if (arguments.length === 1) {
795	      if (typeof props === 'string') {
796	        // .css('width')
797	        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
798	      } else {
799	        // .css({ width: '100px' })
800	        for (i = 0; i < this.length; i += 1) {
801	          for (var _prop in props) {
802	            this[i].style[_prop] = props[_prop];
803	          }
804	        }
805	
806	        return this;
807	      }
808	    }
809	
810	    if (arguments.length === 2 && typeof props === 'string') {
811	      // .css('width', '100px')
812	      for (i = 0; i < this.length; i += 1) {
813	        this[i].style[props] = value;
814	      }
815	
816	      return this;
817	    }
818	
819	    return this;
820	  }
821	
822	  function each(callback) {
823	    if (!callback) return this;
824	    this.forEach(function (el, index) {
825	      callback.apply(el, [el, index]);
826	    });
827	    return this;
828	  }
829	
830	  function filter(callback) {
831	    var result = arrayFilter(this, callback);
832	    return $(result);
833	  }
834	
835	  function html(html) {
836	    if (typeof html === 'undefined') {
837	      return this[0] ? this[0].innerHTML : null;
838	    }
839	
840	    for (var i = 0; i < this.length; i += 1) {
841	      this[i].innerHTML = html;
842	    }
843	
844	    return this;
845	  }
846	
847	  function text(text) {
848	    if (typeof text === 'undefined') {
849	      return this[0] ? this[0].textContent.trim() : null;
850	    }
851	
852	    for (var i = 0; i < this.length; i += 1) {
853	      this[i].textContent = text;
854	    }
855	
856	    return this;
857	  }
858	
859	  function is(selector) {
860	    var window = getWindow();
861	    var document = getDocument();
862	    var el = this[0];
863	    var compareWith;
864	    var i;
865	    if (!el || typeof selector === 'undefined') return false;
866	
867	    if (typeof selector === 'string') {
868	      if (el.matches) return el.matches(selector);
869	      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
870	      if (el.msMatchesSelector) return el.msMatchesSelector(selector);
871	      compareWith = $(selector);
872	
873	      for (i = 0; i < compareWith.length; i += 1) {
874	        if (compareWith[i] === el) return true;
875	      }
876	
877	      return false;
878	    }
879	
880	    if (selector === document) {
881	      return el === document;
882	    }
883	
884	    if (selector === window) {
885	      return el === window;
886	    }
887	
888	    if (selector.nodeType || selector instanceof Dom7) {
889	      compareWith = selector.nodeType ? [selector] : selector;
890	
891	      for (i = 0; i < compareWith.length; i += 1) {
892	        if (compareWith[i] === el) return true;
893	      }
894	
895	      return false;
896	    }
897	
898	    return false;
899	  }
900	
901	  function index() {
902	    var child = this[0];
903	    var i;
904	
905	    if (child) {
906	      i = 0; // eslint-disable-next-line
907	
908	      while ((child = child.previousSibling) !== null) {
909	        if (child.nodeType === 1) i += 1;
910	      }
911	
912	      return i;
913	    }
914	
915	    return undefined;
916	  }
917	
918	  function eq(index) {
919	    if (typeof index === 'undefined') return this;
920	    var length = this.length;
921	
922	    if (index > length - 1) {
923	      return $([]);
924	    }
925	
926	    if (index < 0) {
927	      var returnIndex = length + index;
928	      if (returnIndex < 0) return $([]);
929	      return $([this[returnIndex]]);
930	    }
931	
932	    return $([this[index]]);
933	  }
934	
935	  function append() {
936	    var newChild;
937	    var document = getDocument();
938	
939	    for (var k = 0; k < arguments.length; k += 1) {
940	      newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];
941	
942	      for (var i = 0; i < this.length; i += 1) {
943	        if (typeof newChild === 'string') {
944	          var tempDiv = document.createElement('div');
945	          tempDiv.innerHTML = newChild;
946	
947	          while (tempDiv.firstChild) {
948	            this[i].appendChild(tempDiv.firstChild);
949	          }
950	        } else if (newChild instanceof Dom7) {
951	          for (var j = 0; j < newChild.length; j += 1) {
952	            this[i].appendChild(newChild[j]);
953	          }
954	        } else {
955	          this[i].appendChild(newChild);
956	        }
957	      }
958	    }
959	
960	    return this;
961	  }
962	
963	  function prepend(newChild) {
964	    var document = getDocument();
965	    var i;
966	    var j;
967	
968	    for (i = 0; i < this.length; i += 1) {
969	      if (typeof newChild === 'string') {
970	        var tempDiv = document.createElement('div');
971	        tempDiv.innerHTML = newChild;
972	
973	        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
974	          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
975	        }
976	      } else if (newChild instanceof Dom7) {
977	        for (j = 0; j < newChild.length; j += 1) {
978	          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
979	        }
980	      } else {
981	        this[i].insertBefore(newChild, this[i].childNodes[0]);
982	      }
983	    }
984	
985	    return this;
986	  }
987	
988	  function next(selector) {
989	    if (this.length > 0) {
990	      if (selector) {
991	        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
992	          return $([this[0].nextElementSibling]);
993	        }
994	
995	        return $([]);
996	      }
997	
998	      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
999	      return $([]);
1000	    }
1001	
1002	    return $([]);
1003	  }
1004	
1005	  function nextAll(selector) {
1006	    var nextEls = [];
1007	    var el = this[0];
1008	    if (!el) return $([]);
1009	
1010	    while (el.nextElementSibling) {
1011	      var _next = el.nextElementSibling; // eslint-disable-line
1012	
1013	      if (selector) {
1014	        if ($(_next).is(selector)) nextEls.push(_next);
1015	      } else nextEls.push(_next);
1016	
1017	      el = _next;
1018	    }
1019	
1020	    return $(nextEls);
1021	  }
1022	
1023	  function prev(selector) {
1024	    if (this.length > 0) {
1025	      var el = this[0];
1026	
1027	      if (selector) {
1028	        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
1029	          return $([el.previousElementSibling]);
1030	        }
1031	
1032	        return $([]);
1033	      }
1034	
1035	      if (el.previousElementSibling) return $([el.previousElementSibling]);
1036	      return $([]);
1037	    }
1038	
1039	    return $([]);
1040	  }
1041	
1042	  function prevAll(selector) {
1043	    var prevEls = [];
1044	    var el = this[0];
1045	    if (!el) return $([]);
1046	
1047	    while (el.previousElementSibling) {
1048	      var _prev = el.previousElementSibling; // eslint-disable-line
1049	
1050	      if (selector) {
1051	        if ($(_prev).is(selector)) prevEls.push(_prev);
1052	      } else prevEls.push(_prev);
1053	
1054	      el = _prev;
1055	    }
1056	
1057	    return $(prevEls);
1058	  }
1059	
1060	  function parent(selector) {
1061	    var parents = []; // eslint-disable-line
1062	
1063	    for (var i = 0; i < this.length; i += 1) {
1064	      if (this[i].parentNode !== null) {
1065	        if (selector) {
1066	          if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
1067	        } else {
1068	          parents.push(this[i].parentNode);
1069	        }
1070	      }
1071	    }
1072	
1073	    return $(parents);
1074	  }
1075	
1076	  function parents(selector) {
1077	    var parents = []; // eslint-disable-line
1078	
1079	    for (var i = 0; i < this.length; i += 1) {
1080	      var _parent = this[i].parentNode; // eslint-disable-line
1081	
1082	      while (_parent) {
1083	        if (selector) {
1084	          if ($(_parent).is(selector)) parents.push(_parent);
1085	        } else {
1086	          parents.push(_parent);
1087	        }
1088	
1089	        _parent = _parent.parentNode;
1090	      }
1091	    }
1092	
1093	    return $(parents);
1094	  }
1095	
1096	  function closest(selector) {
1097	    var closest = this; // eslint-disable-line
1098	
1099	    if (typeof selector === 'undefined') {
1100	      return $([]);
1101	    }
1102	
1103	    if (!closest.is(selector)) {
1104	      closest = closest.parents(selector).eq(0);
1105	    }
1106	
1107	    return closest;
1108	  }
1109	
1110	  function find(selector) {
1111	    var foundElements = [];
1112	
1113	    for (var i = 0; i < this.length; i += 1) {
1114	      var found = this[i].querySelectorAll(selector);
1115	
1116	      for (var j = 0; j < found.length; j += 1) {
1117	        foundElements.push(found[j]);
1118	      }
1119	    }
1120	
1121	    return $(foundElements);
1122	  }
1123	
1124	  function children(selector) {
1125	    var children = []; // eslint-disable-line
1126	
1127	    for (var i = 0; i < this.length; i += 1) {
1128	      var childNodes = this[i].children;
1129	
1130	      for (var j = 0; j < childNodes.length; j += 1) {
1131	        if (!selector || $(childNodes[j]).is(selector)) {
1132	          children.push(childNodes[j]);
1133	        }
1134	      }
1135	    }
1136	
1137	    return $(children);
1138	  }
1139	
1140	  function remove() {
1141	    for (var i = 0; i < this.length; i += 1) {
1142	      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
1143	    }
1144	
1145	    return this;
1146	  }
1147	
1148	  var Methods = {
1149	    addClass: addClass,
1150	    removeClass: removeClass,
1151	    hasClass: hasClass,
1152	    toggleClass: toggleClass,
1153	    attr: attr,
1154	    removeAttr: removeAttr,
1155	    transform: transform,
1156	    transition: transition,
1157	    on: on,
1158	    off: off,
1159	    trigger: trigger,
1160	    transitionEnd: transitionEnd,
1161	    outerWidth: outerWidth,
1162	    outerHeight: outerHeight,
1163	    styles: styles,
1164	    offset: offset,
1165	    css: css,
1166	    each: each,
1167	    html: html,
1168	    text: text,
1169	    is: is,
1170	    index: index,
1171	    eq: eq,
1172	    append: append,
1173	    prepend: prepend,
1174	    next: next,
1175	    nextAll: nextAll,
1176	    prev: prev,
1177	    prevAll: prevAll,
1178	    parent: parent,
1179	    parents: parents,
1180	    closest: closest,
1181	    find: find,
1182	    children: children,
1183	    filter: filter,
1184	    remove: remove
1185	  };
1186	  Object.keys(Methods).forEach(function (methodName) {
1187	    $.fn[methodName] = Methods[methodName];
1188	  });
1189	
1190	  function deleteProps(obj) {
1191	    var object = obj;
1192	    Object.keys(object).forEach(function (key) {
1193	      try {
1194	        object[key] = null;
1195	      } catch (e) {// no getter for object
1196	      }
1197	
1198	      try {
1199	        delete object[key];
1200	      } catch (e) {// something got wrong
1201	      }
1202	    });
1203	  }
1204	
1205	  function nextTick(callback, delay) {
1206	    if (delay === void 0) {
1207	      delay = 0;
1208	    }
1209	
1210	    return setTimeout(callback, delay);
1211	  }
1212	
1213	  function now() {
1214	    return Date.now();
1215	  }
1216	
1217	  function getTranslate(el, axis) {
1218	    if (axis === void 0) {
1219	      axis = 'x';
1220	    }
1221	
1222	    var window = getWindow();
1223	    var matrix;
1224	    var curTransform;
1225	    var transformMatrix;
1226	    var curStyle = window.getComputedStyle(el, null);
1227	
1228	    if (window.WebKitCSSMatrix) {
1229	      curTransform = curStyle.transform || curStyle.webkitTransform;
1230	
1231	      if (curTransform.split(',').length > 6) {
1232	        curTransform = curTransform.split(', ').map(function (a) {
1233	          return a.replace(',', '.');
1234	        }).join(', ');
1235	      } // Some old versions of Webkit choke when 'none' is passed; pass
1236	      // empty string instead in this case
1237	
1238	
1239	      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
1240	    } else {
1241	      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
1242	      matrix = transformMatrix.toString().split(',');
1243	    }
1244	
1245	    if (axis === 'x') {
1246	      // Latest Chrome and webkits Fix
1247	      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
1248	      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
1249	        else curTransform = parseFloat(matrix[4]);
1250	    }
1251	
1252	    if (axis === 'y') {
1253	      // Latest Chrome and webkits Fix
1254	      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
1255	      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
1256	        else curTransform = parseFloat(matrix[5]);
1257	    }
1258	
1259	    return curTransform || 0;
1260	  }
1261	
1262	  function isObject$1(o) {
1263	    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
1264	  }
1265	
1266	  function extend$1() {
1267	    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
1268	
1269	    for (var i = 1; i < arguments.length; i += 1) {
1270	      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
1271	
1272	      if (nextSource !== undefined && nextSource !== null) {
1273	        var keysArray = Object.keys(Object(nextSource));
1274	
1275	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
1276	          var nextKey = keysArray[nextIndex];
1277	          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
1278	
1279	          if (desc !== undefined && desc.enumerable) {
1280	            if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
1281	              extend$1(to[nextKey], nextSource[nextKey]);
1282	            } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
1283	              to[nextKey] = {};
1284	              extend$1(to[nextKey], nextSource[nextKey]);
1285	            } else {
1286	              to[nextKey] = nextSource[nextKey];
1287	            }
1288	          }
1289	        }
1290	      }
1291	    }
1292	
1293	    return to;
1294	  }
1295	
1296	  function bindModuleMethods(instance, obj) {
1297	    Object.keys(obj).forEach(function (key) {
1298	      if (isObject$1(obj[key])) {
1299	        Object.keys(obj[key]).forEach(function (subKey) {
1300	          if (typeof obj[key][subKey] === 'function') {
1301	            obj[key][subKey] = obj[key][subKey].bind(instance);
1302	          }
1303	        });
1304	      }
1305	
1306	      instance[key] = obj[key];
1307	    });
1308	  }
1309	
1310	  var support;
1311	
1312	  function calcSupport() {
1313	    var window = getWindow();
1314	    var document = getDocument();
1315	    return {
1316	      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
1317	      pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
1318	      observer: function checkObserver() {
1319	        return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
1320	      }(),
1321	      passiveListener: function checkPassiveListener() {
1322	        var supportsPassive = false;
1323	
1324	        try {
1325	          var opts = Object.defineProperty({}, 'passive', {
1326	            // eslint-disable-next-line
1327	            get: function get() {
1328	              supportsPassive = true;
1329	            }
1330	          });
1331	          window.addEventListener('testPassiveListener', null, opts);
1332	        } catch (e) {// No support
1333	        }
1334	
1335	        return supportsPassive;
1336	      }(),
1337	      gestures: function checkGestures() {
1338	        return 'ongesturestart' in window;
1339	      }()
1340	    };
1341	  }
1342	
1343	  function getSupport() {
1344	    if (!support) {
1345	      support = calcSupport();
1346	    }
1347	
1348	    return support;
1349	  }
1350	
1351	  var device;
1352	
1353	  function calcDevice(_temp) {
1354	    var _ref = _temp === void 0 ? {} : _temp,
1355	        userAgent = _ref.userAgent;
1356	
1357	    var support = getSupport();
1358	    var window = getWindow();
1359	    var platform = window.navigator.platform;
1360	    var ua = userAgent || window.navigator.userAgent;
1361	    var device = {
1362	      ios: false,
1363	      android: false
1364	    };
1365	    var screenWidth = window.screen.width;
1366	    var screenHeight = window.screen.height;
1367	    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
1368	
1369	    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
1370	    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
1371	    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
1372	    var windows = platform === 'Win32';
1373	    var macos = platform === 'MacIntel'; // iPadOs 13 fix
1374	
1375	    var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768'];
1376	
1377	    if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
1378	      ipad = ua.match(/(Version)\/([\d.]+)/);
1379	      if (!ipad) ipad = [0, 1, '13_0_0'];
1380	      macos = false;
1381	    } // Android
1382	
1383	
1384	    if (android && !windows) {
1385	      device.os = 'android';
1386	      device.android = true;
1387	    }
1388	
1389	    if (ipad || iphone || ipod) {
1390	      device.os = 'ios';
1391	      device.ios = true;
1392	    } // Export object
1393	
1394	
1395	    return device;
1396	  }
1397	
1398	  function getDevice(overrides) {
1399	    if (overrides === void 0) {
1400	      overrides = {};
1401	    }
1402	
1403	    if (!device) {
1404	      device = calcDevice(overrides);
1405	    }
1406	
1407	    return device;
1408	  }
1409	
1410	  var browser;
1411	
1412	  function calcBrowser() {
1413	    var window = getWindow();
1414	
1415	    function isSafari() {
1416	      var ua = window.navigator.userAgent.toLowerCase();
1417	      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
1418	    }
1419	
1420	    return {
1421	      isEdge: !!window.navigator.userAgent.match(/Edge/g),
1422	      isSafari: isSafari(),
1423	      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
1424	    };
1425	  }
1426	
1427	  function getBrowser() {
1428	    if (!browser) {
1429	      browser = calcBrowser();
1430	    }
1431	
1432	    return browser;
1433	  }
1434	
1435	  var Resize = {
1436	    name: 'resize',
1437	    create: function create() {
1438	      var swiper = this;
1439	      extend$1(swiper, {
1440	        resize: {
1441	          resizeHandler: function resizeHandler() {
1442	            if (!swiper || swiper.destroyed || !swiper.initialized) return;
1443	            swiper.emit('beforeResize');
1444	            swiper.emit('resize');
1445	          },
1446	          orientationChangeHandler: function orientationChangeHandler() {
1447	            if (!swiper || swiper.destroyed || !swiper.initialized) return;
1448	            swiper.emit('orientationchange');
1449	          }
1450	        }
1451	      });
1452	    },
1453	    on: {
1454	      init: function init(swiper) {
1455	        var window = getWindow(); // Emit resize
1456	
1457	        window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange
1458	
1459	        window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
1460	      },
1461	      destroy: function destroy(swiper) {
1462	        var window = getWindow();
1463	        window.removeEventListener('resize', swiper.resize.resizeHandler);
1464	        window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
1465	      }
1466	    }
1467	  };
1468	
1469	  var Observer = {
1470	    attach: function attach(target, options) {
1471	      if (options === void 0) {
1472	        options = {};
1473	      }
1474	
1475	      var window = getWindow();
1476	      var swiper = this;
1477	      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
1478	      var observer = new ObserverFunc(function (mutations) {
1479	        // The observerUpdate event should only be triggered
1480	        // once despite the number of mutations.  Additional
1481	        // triggers are redundant and are very costly
1482	        if (mutations.length === 1) {
1483	          swiper.emit('observerUpdate', mutations[0]);
1484	          return;
1485	        }
1486	
1487	        var observerUpdate = function observerUpdate() {
1488	          swiper.emit('observerUpdate', mutations[0]);
1489	        };
1490	
1491	        if (window.requestAnimationFrame) {
1492	          window.requestAnimationFrame(observerUpdate);
1493	        } else {
1494	          window.setTimeout(observerUpdate, 0);
1495	        }
1496	      });
1497	      observer.observe(target, {
1498	        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
1499	        childList: typeof options.childList === 'undefined' ? true : options.childList,
1500	        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
1501	      });
1502	      swiper.observer.observers.push(observer);
1503	    },
1504	    init: function init() {
1505	      var swiper = this;
1506	      if (!swiper.support.observer || !swiper.params.observer) return;
1507	
1508	      if (swiper.params.observeParents) {
1509	        var containerParents = swiper.$el.parents();
1510	
1511	        for (var i = 0; i < containerParents.length; i += 1) {
1512	          swiper.observer.attach(containerParents[i]);
1513	        }
1514	      } // Observe container
1515	
1516	
1517	      swiper.observer.attach(swiper.$el[0], {
1518	        childList: swiper.params.observeSlideChildren
1519	      }); // Observe wrapper
1520	
1521	      swiper.observer.attach(swiper.$wrapperEl[0], {
1522	        attributes: false
1523	      });
1524	    },
1525	    destroy: function destroy() {
1526	      var swiper = this;
1527	      swiper.observer.observers.forEach(function (observer) {
1528	        observer.disconnect();
1529	      });
1530	      swiper.observer.observers = [];
1531	    }
1532	  };
1533	  var Observer$1 = {
1534	    name: 'observer',
1535	    params: {
1536	      observer: false,
1537	      observeParents: false,
1538	      observeSlideChildren: false
1539	    },
1540	    create: function create() {
1541	      var swiper = this;
1542	      bindModuleMethods(swiper, {
1543	        observer: _extends(_extends({}, Observer), {}, {
1544	          observers: []
1545	        })
1546	      });
1547	    },
1548	    on: {
1549	      init: function init(swiper) {
1550	        swiper.observer.init();
1551	      },
1552	      destroy: function destroy(swiper) {
1553	        swiper.observer.destroy();
1554	      }
1555	    }
1556	  };
1557	
1558	  var modular = {
1559	    useParams: function useParams(instanceParams) {
1560	      var instance = this;
1561	      if (!instance.modules) return;
1562	      Object.keys(instance.modules).forEach(function (moduleName) {
1563	        var module = instance.modules[moduleName]; // Extend params
1564	
1565	        if (module.params) {
1566	          extend$1(instanceParams, module.params);
1567	        }
1568	      });
1569	    },
1570	    useModules: function useModules(modulesParams) {
1571	      if (modulesParams === void 0) {
1572	        modulesParams = {};
1573	      }
1574	
1575	      var instance = this;
1576	      if (!instance.modules) return;
1577	      Object.keys(instance.modules).forEach(function (moduleName) {
1578	        var module = instance.modules[moduleName];
1579	        var moduleParams = modulesParams[moduleName] || {}; // Add event listeners
1580	
1581	        if (module.on && instance.on) {
1582	          Object.keys(module.on).forEach(function (moduleEventName) {
1583	            instance.on(moduleEventName, module.on[moduleEventName]);
1584	          });
1585	        } // Module create callback
1586	
1587	
1588	        if (module.create) {
1589	          module.create.bind(instance)(moduleParams);
1590	        }
1591	      });
1592	    }
1593	  };
1594	
1595	  /* eslint-disable no-underscore-dangle */
1596	  var eventsEmitter = {
1597	    on: function on(events, handler, priority) {
1598	      var self = this;
1599	      if (typeof handler !== 'function') return self;
1600	      var method = priority ? 'unshift' : 'push';
1601	      events.split(' ').forEach(function (event) {
1602	        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
1603	        self.eventsListeners[event][method](handler);
1604	      });
1605	      return self;
1606	    },
1607	    once: function once(events, handler, priority) {
1608	      var self = this;
1609	      if (typeof handler !== 'function') return self;
1610	
1611	      function onceHandler() {
1612	        self.off(events, onceHandler);
1613	
1614	        if (onceHandler.__emitterProxy) {
1615	          delete onceHandler.__emitterProxy;
1616	        }
1617	
1618	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
1619	          args[_key] = arguments[_key];
1620	        }
1621	
1622	        handler.apply(self, args);
1623	      }
1624	
1625	      onceHandler.__emitterProxy = handler;
1626	      return self.on(events, onceHandler, priority);
1627	    },
1628	    onAny: function onAny(handler, priority) {
1629	      var self = this;
1630	      if (typeof handler !== 'function') return self;
1631	      var method = priority ? 'unshift' : 'push';
1632	
1633	      if (self.eventsAnyListeners.indexOf(handler) < 0) {
1634	        self.eventsAnyListeners[method](handler);
1635	      }
1636	
1637	      return self;
1638	    },
1639	    offAny: function offAny(handler) {
1640	      var self = this;
1641	      if (!self.eventsAnyListeners) return self;
1642	      var index = self.eventsAnyListeners.indexOf(handler);
1643	
1644	      if (index >= 0) {
1645	        self.eventsAnyListeners.splice(index, 1);
1646	      }
1647	
1648	      return self;
1649	    },
1650	    off: function off(events, handler) {
1651	      var self = this;
1652	      if (!self.eventsListeners) return self;
1653	      events.split(' ').forEach(function (event) {
1654	        if (typeof handler === 'undefined') {
1655	          self.eventsListeners[event] = [];
1656	        } else if (self.eventsListeners[event]) {
1657	          self.eventsListeners[event].forEach(function (eventHandler, index) {
1658	            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
1659	              self.eventsListeners[event].splice(index, 1);
1660	            }
1661	          });
1662	        }
1663	      });
1664	      return self;
1665	    },
1666	    emit: function emit() {
1667	      var self = this;
1668	      if (!self.eventsListeners) return self;
1669	      var events;
1670	      var data;
1671	      var context;
1672	
1673	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
1674	        args[_key2] = arguments[_key2];
1675	      }
1676	
1677	      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
1678	        events = args[0];
1679	        data = args.slice(1, args.length);
1680	        context = self;
1681	      } else {
1682	        events = args[0].events;
1683	        data = args[0].data;
1684	        context = args[0].context || self;
1685	      }
1686	
1687	      data.unshift(context);
1688	      var eventsArray = Array.isArray(events) ? events : events.split(' ');
1689	      eventsArray.forEach(function (event) {
1690	        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
1691	          self.eventsAnyListeners.forEach(function (eventHandler) {
1692	            eventHandler.apply(context, [event].concat(data));
1693	          });
1694	        }
1695	
1696	        if (self.eventsListeners && self.eventsListeners[event]) {
1697	          var handlers = [];
1698	          self.eventsListeners[event].forEach(function (eventHandler) {
1699	            handlers.push(eventHandler);
1700	          });
1701	          handlers.forEach(function (eventHandler) {
1702	            eventHandler.apply(context, data);
1703	          });
1704	        }
1705	      });
1706	      return self;
1707	    }
1708	  };
1709	
1710	  function updateSize() {
1711	    var swiper = this;
1712	    var width;
1713	    var height;
1714	    var $el = swiper.$el;
1715	
1716	    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
1717	      width = swiper.params.width;
1718	    } else {
1719	      width = $el[0].clientWidth;
1720	    }
1721	
1722	    if (typeof swiper.params.height !== 'undefined' && swiper.params.width !== null) {
1723	      height = swiper.params.height;
1724	    } else {
1725	      height = $el[0].clientHeight;
1726	    }
1727	
1728	    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
1729	      return;
1730	    } // Subtract paddings
1731	
1732	
1733	    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
1734	    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
1735	    if (Number.isNaN(width)) width = 0;
1736	    if (Number.isNaN(height)) height = 0;
1737	    extend$1(swiper, {
1738	      width: width,
1739	      height: height,
1740	      size: swiper.isHorizontal() ? width : height
1741	    });
1742	  }
1743	
1744	  function updateSlides() {
1745	    var swiper = this;
1746	    var window = getWindow();
1747	    var params = swiper.params;
1748	    var $wrapperEl = swiper.$wrapperEl,
1749	        swiperSize = swiper.size,
1750	        rtl = swiper.rtlTranslate,
1751	        wrongRTL = swiper.wrongRTL;
1752	    var isVirtual = swiper.virtual && params.virtual.enabled;
1753	    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
1754	    var slides = $wrapperEl.children("." + swiper.params.slideClass);
1755	    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
1756	    var snapGrid = [];
1757	    var slidesGrid = [];
1758	    var slidesSizesGrid = [];
1759	
1760	    function slidesForMargin(slideEl, slideIndex) {
1761	      if (!params.cssMode) return true;
1762	
1763	      if (slideIndex === slides.length - 1) {
1764	        return false;
1765	      }
1766	
1767	      return true;
1768	    }
1769	
1770	    var offsetBefore = params.slidesOffsetBefore;
1771	
1772	    if (typeof offsetBefore === 'function') {
1773	      offsetBefore = params.slidesOffsetBefore.call(swiper);
1774	    }
1775	
1776	    var offsetAfter = params.slidesOffsetAfter;
1777	
1778	    if (typeof offsetAfter === 'function') {
1779	      offsetAfter = params.slidesOffsetAfter.call(swiper);
1780	    }
1781	
1782	    var previousSnapGridLength = swiper.snapGrid.length;
1783	    var previousSlidesGridLength = swiper.snapGrid.length;
1784	    var spaceBetween = params.spaceBetween;
1785	    var slidePosition = -offsetBefore;
1786	    var prevSlideSize = 0;
1787	    var index = 0;
1788	
1789	    if (typeof swiperSize === 'undefined') {
1790	      return;
1791	    }
1792	
1793	    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
1794	      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
1795	    }
1796	
1797	    swiper.virtualSize = -spaceBetween; // reset margins
1798	
1799	    if (rtl) slides.css({
1800	      marginLeft: '',
1801	      marginTop: ''
1802	    });else slides.css({
1803	      marginRight: '',
1804	      marginBottom: ''
1805	    });
1806	    var slidesNumberEvenToRows;
1807	
1808	    if (params.slidesPerColumn > 1) {
1809	      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
1810	        slidesNumberEvenToRows = slidesLength;
1811	      } else {
1812	        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
1813	      }
1814	
1815	      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
1816	        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
1817	      }
1818	    } // Calc slides
1819	
1820	
1821	    var slideSize;
1822	    var slidesPerColumn = params.slidesPerColumn;
1823	    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
1824	    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
1825	
1826	    for (var i = 0; i < slidesLength; i += 1) {
1827	      slideSize = 0;
1828	      var slide = slides.eq(i);
1829	
1830	      if (params.slidesPerColumn > 1) {
1831	        // Set slides order
1832	        var newSlideOrderIndex = void 0;
1833	        var column = void 0;
1834	        var row = void 0;
1835	
1836	        if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
1837	          var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
1838	          var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
1839	          var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
1840	          row = Math.floor(slideIndexInGroup / columnsInGroup);
1841	          column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
1842	          newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
1843	          slide.css({
1844	            '-webkit-box-ordinal-group': newSlideOrderIndex,
1845	            '-moz-box-ordinal-group': newSlideOrderIndex,
1846	            '-ms-flex-order': newSlideOrderIndex,
1847	            '-webkit-order': newSlideOrderIndex,
1848	            order: newSlideOrderIndex
1849	          });
1850	        } else if (params.slidesPerColumnFill === 'column') {
1851	          column = Math.floor(i / slidesPerColumn);
1852	          row = i - column * slidesPerColumn;
1853	
1854	          if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
1855	            row += 1;
1856	
1857	            if (row >= slidesPerColumn) {
1858	              row = 0;
1859	              column += 1;
1860	            }
1861	          }
1862	        } else {
1863	          row = Math.floor(i / slidesPerRow);
1864	          column = i - row * slidesPerRow;
1865	        }
1866	
1867	        slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
1868	      }
1869	
1870	      if (slide.css('display') === 'none') continue; // eslint-disable-line
1871	
1872	      if (params.slidesPerView === 'auto') {
1873	        var slideStyles = window.getComputedStyle(slide[0], null);
1874	        var currentTransform = slide[0].style.transform;
1875	        var currentWebKitTransform = slide[0].style.webkitTransform;
1876	
1877	        if (currentTransform) {
1878	          slide[0].style.transform = 'none';
1879	        }
1880	
1881	        if (currentWebKitTransform) {
1882	          slide[0].style.webkitTransform = 'none';
1883	        }
1884	
1885	        if (params.roundLengths) {
1886	          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
1887	        } else {
1888	          // eslint-disable-next-line
1889	          if (swiper.isHorizontal()) {
1890	            var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
1891	            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
1892	            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
1893	            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
1894	            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
1895	            var boxSizing = slideStyles.getPropertyValue('box-sizing');
1896	
1897	            if (boxSizing && boxSizing === 'border-box') {
1898	              slideSize = width + marginLeft + marginRight;
1899	            } else {
1900	              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
1901	            }
1902	          } else {
1903	            var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
1904	            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
1905	            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
1906	            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
1907	            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);
1908	
1909	            var _boxSizing = slideStyles.getPropertyValue('box-sizing');
1910	
1911	            if (_boxSizing && _boxSizing === 'border-box') {
1912	              slideSize = height + marginTop + marginBottom;
1913	            } else {
1914	              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
1915	            }
1916	          }
1917	        }
1918	
1919	        if (currentTransform) {
1920	          slide[0].style.transform = currentTransform;
1921	        }
1922	
1923	        if (currentWebKitTransform) {
1924	          slide[0].style.webkitTransform = currentWebKitTransform;
1925	        }
1926	
1927	        if (params.roundLengths) slideSize = Math.floor(slideSize);
1928	      } else {
1929	        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
1930	        if (params.roundLengths) slideSize = Math.floor(slideSize);
1931	
1932	        if (slides[i]) {
1933	          if (swiper.isHorizontal()) {
1934	            slides[i].style.width = slideSize + "px";
1935	          } else {
1936	            slides[i].style.height = slideSize + "px";
1937	          }
1938	        }
1939	      }
1940	
1941	      if (slides[i]) {
1942	        slides[i].swiperSlideSize = slideSize;
1943	      }
1944	
1945	      slidesSizesGrid.push(slideSize);
1946	
1947	      if (params.centeredSlides) {
1948	        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
1949	        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
1950	        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
1951	        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
1952	        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
1953	        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
1954	        slidesGrid.push(slidePosition);
1955	      } else {
1956	        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
1957	        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
1958	        slidesGrid.push(slidePosition);
1959	        slidePosition = slidePosition + slideSize + spaceBetween;
1960	      }
1961	
1962	      swiper.virtualSize += slideSize + spaceBetween;
1963	      prevSlideSize = slideSize;
1964	      index += 1;
1965	    }
1966	
1967	    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
1968	    var newSlidesGrid;
1969	
1970	    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
1971	      $wrapperEl.css({
1972	        width: swiper.virtualSize + params.spaceBetween + "px"
1973	      });
1974	    }
1975	
1976	    if (params.setWrapperSize) {
1977	      if (swiper.isHorizontal()) $wrapperEl.css({
1978	        width: swiper.virtualSize + params.spaceBetween + "px"
1979	      });else $wrapperEl.css({
1980	        height: swiper.virtualSize + params.spaceBetween + "px"
1981	      });
1982	    }
1983	
1984	    if (params.slidesPerColumn > 1) {
1985	      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
1986	      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
1987	      if (swiper.isHorizontal()) $wrapperEl.css({
1988	        width: swiper.virtualSize + params.spaceBetween + "px"
1989	      });else $wrapperEl.css({
1990	        height: swiper.virtualSize + params.spaceBetween + "px"
1991	      });
1992	
1993	      if (params.centeredSlides) {
1994	        newSlidesGrid = [];
1995	
1996	        for (var _i = 0; _i < snapGrid.length; _i += 1) {
1997	          var slidesGridItem = snapGrid[_i];
1998	          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
1999	          if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
2000	        }
2001	
2002	        snapGrid = newSlidesGrid;
2003	      }
2004	    } // Remove last grid elements depending on width
2005	
2006	
2007	    if (!params.centeredSlides) {
2008	      newSlidesGrid = [];
2009	
2010	      for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
2011	        var _slidesGridItem = snapGrid[_i2];
2012	        if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);
2013	
2014	        if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
2015	          newSlidesGrid.push(_slidesGridItem);
2016	        }
2017	      }
2018	
2019	      snapGrid = newSlidesGrid;
2020	
2021	      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
2022	        snapGrid.push(swiper.virtualSize - swiperSize);
2023	      }
2024	    }
2025	
2026	    if (snapGrid.length === 0) snapGrid = [0];
2027	
2028	    if (params.spaceBetween !== 0) {
2029	      if (swiper.isHorizontal()) {
2030	        if (rtl) slides.filter(slidesForMargin).css({
2031	          marginLeft: spaceBetween + "px"
2032	        });else slides.filter(slidesForMargin).css({
2033	          marginRight: spaceBetween + "px"
2034	        });
2035	      } else slides.filter(slidesForMargin).css({
2036	        marginBottom: spaceBetween + "px"
2037	      });
2038	    }
2039	
2040	    if (params.centeredSlides && params.centeredSlidesBounds) {
2041	      var allSlidesSize = 0;
2042	      slidesSizesGrid.forEach(function (slideSizeValue) {
2043	        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
2044	      });
2045	      allSlidesSize -= params.spaceBetween;
2046	      var maxSnap = allSlidesSize - swiperSize;
2047	      snapGrid = snapGrid.map(function (snap) {
2048	        if (snap < 0) return -offsetBefore;
2049	        if (snap > maxSnap) return maxSnap + offsetAfter;
2050	        return snap;
2051	      });
2052	    }
2053	
2054	    if (params.centerInsufficientSlides) {
2055	      var _allSlidesSize = 0;
2056	      slidesSizesGrid.forEach(function (slideSizeValue) {
2057	        _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
2058	      });
2059	      _allSlidesSize -= params.spaceBetween;
2060	
2061	      if (_allSlidesSize < swiperSize) {
2062	        var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
2063	        snapGrid.forEach(function (snap, snapIndex) {
2064	          snapGrid[snapIndex] = snap - allSlidesOffset;
2065	        });
2066	        slidesGrid.forEach(function (snap, snapIndex) {
2067	          slidesGrid[snapIndex] = snap + allSlidesOffset;
2068	        });
2069	      }
2070	    }
2071	
2072	    extend$1(swiper, {
2073	      slides: slides,
2074	      snapGrid: snapGrid,
2075	      slidesGrid: slidesGrid,
2076	      slidesSizesGrid: slidesSizesGrid
2077	    });
2078	
2079	    if (slidesLength !== previousSlidesLength) {
2080	      swiper.emit('slidesLengthChange');
2081	    }
2082	
2083	    if (snapGrid.length !== previousSnapGridLength) {
2084	      if (swiper.params.watchOverflow) swiper.checkOverflow();
2085	      swiper.emit('snapGridLengthChange');
2086	    }
2087	
2088	    if (slidesGrid.length !== previousSlidesGridLength) {
2089	      swiper.emit('slidesGridLengthChange');
2090	    }
2091	
2092	    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
2093	      swiper.updateSlidesOffset();
2094	    }
2095	  }
2096	
2097	  function updateAutoHeight(speed) {
2098	    var swiper = this;
2099	    var activeSlides = [];
2100	    var newHeight = 0;
2101	    var i;
2102	
2103	    if (typeof speed === 'number') {
2104	      swiper.setTransition(speed);
2105	    } else if (speed === true) {
2106	      swiper.setTransition(swiper.params.speed);
2107	    } // Find slides currently in view
2108	
2109	
2110	    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
2111	      if (swiper.params.centeredSlides) {
2112	        swiper.visibleSlides.each(function (slide) {
2113	          activeSlides.push(slide);
2114	        });
2115	      } else {
2116	        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
2117	          var index = swiper.activeIndex + i;
2118	          if (index > swiper.slides.length) break;
2119	          activeSlides.push(swiper.slides.eq(index)[0]);
2120	        }
2121	      }
2122	    } else {
2123	      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
2124	    } // Find new height from highest slide in view
2125	
2126	
2127	    for (i = 0; i < activeSlides.length; i += 1) {
2128	      if (typeof activeSlides[i] !== 'undefined') {
2129	        var height = activeSlides[i].offsetHeight;
2130	        newHeight = height > newHeight ? height : newHeight;
2131	      }
2132	    } // Update Height
2133	
2134	
2135	    if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
2136	  }
2137	
2138	  function updateSlidesOffset() {
2139	    var swiper = this;
2140	    var slides = swiper.slides;
2141	
2142	    for (var i = 0; i < slides.length; i += 1) {
2143	      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
2144	    }
2145	  }
2146	
2147	  function updateSlidesProgress(translate) {
2148	    if (translate === void 0) {
2149	      translate = this && this.translate || 0;
2150	    }
2151	
2152	    var swiper = this;
2153	    var params = swiper.params;
2154	    var slides = swiper.slides,
2155	        rtl = swiper.rtlTranslate;
2156	    if (slides.length === 0) return;
2157	    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
2158	    var offsetCenter = -translate;
2159	    if (rtl) offsetCenter = translate; // Visible Slides
2160	
2161	    slides.removeClass(params.slideVisibleClass);
2162	    swiper.visibleSlidesIndexes = [];
2163	    swiper.visibleSlides = [];
2164	
2165	    for (var i = 0; i < slides.length; i += 1) {
2166	      var slide = slides[i];
2167	      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
2168	
2169	      if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
2170	        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
2171	        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
2172	        var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
2173	
2174	        if (isVisible) {
2175	          swiper.visibleSlides.push(slide);
2176	          swiper.visibleSlidesIndexes.push(i);
2177	          slides.eq(i).addClass(params.slideVisibleClass);
2178	        }
2179	      }
2180	
2181	      slide.progress = rtl ? -slideProgress : slideProgress;
2182	    }
2183	
2184	    swiper.visibleSlides = $(swiper.visibleSlides);
2185	  }
2186	
2187	  function updateProgress(translate) {
2188	    var swiper = this;
2189	
2190	    if (typeof translate === 'undefined') {
2191	      var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
2192	
2193	      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
2194	    }
2195	
2196	    var params = swiper.params;
2197	    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
2198	    var progress = swiper.progress,
2199	        isBeginning = swiper.isBeginning,
2200	        isEnd = swiper.isEnd;
2201	    var wasBeginning = isBeginning;
2202	    var wasEnd = isEnd;
2203	
2204	    if (translatesDiff === 0) {
2205	      progress = 0;
2206	      isBeginning = true;
2207	      isEnd = true;
2208	    } else {
2209	      progress = (translate - swiper.minTranslate()) / translatesDiff;
2210	      isBeginning = progress <= 0;
2211	      isEnd = progress >= 1;
2212	    }
2213	
2214	    extend$1(swiper, {
2215	      progress: progress,
2216	      isBeginning: isBeginning,
2217	      isEnd: isEnd
2218	    });
2219	    if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
2220	
2221	    if (isBeginning && !wasBeginning) {
2222	      swiper.emit('reachBeginning toEdge');
2223	    }
2224	
2225	    if (isEnd && !wasEnd) {
2226	      swiper.emit('reachEnd toEdge');
2227	    }
2228	
2229	    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
2230	      swiper.emit('fromEdge');
2231	    }
2232	
2233	    swiper.emit('progress', progress);
2234	  }
2235	
2236	  function updateSlidesClasses() {
2237	    var swiper = this;
2238	    var slides = swiper.slides,
2239	        params = swiper.params,
2240	        $wrapperEl = swiper.$wrapperEl,
2241	        activeIndex = swiper.activeIndex,
2242	        realIndex = swiper.realIndex;
2243	    var isVirtual = swiper.virtual && params.virtual.enabled;
2244	    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
2245	    var activeSlide;
2246	
2247	    if (isVirtual) {
2248	      activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
2249	    } else {
2250	      activeSlide = slides.eq(activeIndex);
2251	    } // Active classes
2252	
2253	
2254	    activeSlide.addClass(params.slideActiveClass);
2255	
2256	    if (params.loop) {
2257	      // Duplicate to all looped slides
2258	      if (activeSlide.hasClass(params.slideDuplicateClass)) {
2259	        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
2260	      } else {
2261	        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
2262	      }
2263	    } // Next Slide
2264	
2265	
2266	    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
2267	
2268	    if (params.loop && nextSlide.length === 0) {
2269	      nextSlide = slides.eq(0);
2270	      nextSlide.addClass(params.slideNextClass);
2271	    } // Prev Slide
2272	
2273	
2274	    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
2275	
2276	    if (params.loop && prevSlide.length === 0) {
2277	      prevSlide = slides.eq(-1);
2278	      prevSlide.addClass(params.slidePrevClass);
2279	    }
2280	
2281	    if (params.loop) {
2282	      // Duplicate to all looped slides
2283	      if (nextSlide.hasClass(params.slideDuplicateClass)) {
2284	        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
2285	      } else {
2286	        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
2287	      }
2288	
2289	      if (prevSlide.hasClass(params.slideDuplicateClass)) {
2290	        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
2291	      } else {
2292	        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
2293	      }
2294	    }
2295	
2296	    swiper.emitSlidesClasses();
2297	  }
2298	
2299	  function updateActiveIndex(newActiveIndex) {
2300	    var swiper = this;
2301	    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
2302	    var slidesGrid = swiper.slidesGrid,
2303	        snapGrid = swiper.snapGrid,
2304	        params = swiper.params,
2305	        previousIndex = swiper.activeIndex,
2306	        previousRealIndex = swiper.realIndex,
2307	        previousSnapIndex = swiper.snapIndex;
2308	    var activeIndex = newActiveIndex;
2309	    var snapIndex;
2310	
2311	    if (typeof activeIndex === 'undefined') {
2312	      for (var i = 0; i < slidesGrid.length; i += 1) {
2313	        if (typeof slidesGrid[i + 1] !== 'undefined') {
2314	          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
2315	            activeIndex = i;
2316	          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
2317	            activeIndex = i + 1;
2318	          }
2319	        } else if (translate >= slidesGrid[i]) {
2320	          activeIndex = i;
2321	        }
2322	      } // Normalize slideIndex
2323	
2324	
2325	      if (params.normalizeSlideIndex) {
2326	        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
2327	      }
2328	    }
2329	
2330	    if (snapGrid.indexOf(translate) >= 0) {
2331	      snapIndex = snapGrid.indexOf(translate);
2332	    } else {
2333	      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
2334	      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
2335	    }
2336	
2337	    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
2338	
2339	    if (activeIndex === previousIndex) {
2340	      if (snapIndex !== previousSnapIndex) {
2341	        swiper.snapIndex = snapIndex;
2342	        swiper.emit('snapIndexChange');
2343	      }
2344	
2345	      return;
2346	    } // Get real index
2347	
2348	
2349	    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
2350	    extend$1(swiper, {
2351	      snapIndex: snapIndex,
2352	      realIndex: realIndex,
2353	      previousIndex: previousIndex,
2354	      activeIndex: activeIndex
2355	    });
2356	    swiper.emit('activeIndexChange');
2357	    swiper.emit('snapIndexChange');
2358	
2359	    if (previousRealIndex !== realIndex) {
2360	      swiper.emit('realIndexChange');
2361	    }
2362	
2363	    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
2364	      swiper.emit('slideChange');
2365	    }
2366	  }
2367	
2368	  function updateClickedSlide(e) {
2369	    var swiper = this;
2370	    var params = swiper.params;
2371	    var slide = $(e.target).closest("." + params.slideClass)[0];
2372	    var slideFound = false;
2373	
2374	    if (slide) {
2375	      for (var i = 0; i < swiper.slides.length; i += 1) {
2376	        if (swiper.slides[i] === slide) slideFound = true;
2377	      }
2378	    }
2379	
2380	    if (slide && slideFound) {
2381	      swiper.clickedSlide = slide;
2382	
2383	      if (swiper.virtual && swiper.params.virtual.enabled) {
2384	        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
2385	      } else {
2386	        swiper.clickedIndex = $(slide).index();
2387	      }
2388	    } else {
2389	      swiper.clickedSlide = undefined;
2390	      swiper.clickedIndex = undefined;
2391	      return;
2392	    }
2393	
2394	    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
2395	      swiper.slideToClickedSlide();
2396	    }
2397	  }
2398	
2399	  var update = {
2400	    updateSize: updateSize,
2401	    updateSlides: updateSlides,
2402	    updateAutoHeight: updateAutoHeight,
2403	    updateSlidesOffset: updateSlidesOffset,
2404	    updateSlidesProgress: updateSlidesProgress,
2405	    updateProgress: updateProgress,
2406	    updateSlidesClasses: updateSlidesClasses,
2407	    updateActiveIndex: updateActiveIndex,
2408	    updateClickedSlide: updateClickedSlide
2409	  };
2410	
2411	  function getSwiperTranslate(axis) {
2412	    if (axis === void 0) {
2413	      axis = this.isHorizontal() ? 'x' : 'y';
2414	    }
2415	
2416	    var swiper = this;
2417	    var params = swiper.params,
2418	        rtl = swiper.rtlTranslate,
2419	        translate = swiper.translate,
2420	        $wrapperEl = swiper.$wrapperEl;
2421	
2422	    if (params.virtualTranslate) {
2423	      return rtl ? -translate : translate;
2424	    }
2425	
2426	    if (params.cssMode) {
2427	      return translate;
2428	    }
2429	
2430	    var currentTranslate = getTranslate($wrapperEl[0], axis);
2431	    if (rtl) currentTranslate = -currentTranslate;
2432	    return currentTranslate || 0;
2433	  }
2434	
2435	  function setTranslate(translate, byController) {
2436	    var swiper = this;
2437	    var rtl = swiper.rtlTranslate,
2438	        params = swiper.params,
2439	        $wrapperEl = swiper.$wrapperEl,
2440	        wrapperEl = swiper.wrapperEl,
2441	        progress = swiper.progress;
2442	    var x = 0;
2443	    var y = 0;
2444	    var z = 0;
2445	
2446	    if (swiper.isHorizontal()) {
2447	      x = rtl ? -translate : translate;
2448	    } else {
2449	      y = translate;
2450	    }
2451	
2452	    if (params.roundLengths) {
2453	      x = Math.floor(x);
2454	      y = Math.floor(y);
2455	    }
2456	
2457	    if (params.cssMode) {
2458	      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
2459	    } else if (!params.virtualTranslate) {
2460	      $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
2461	    }
2462	
2463	    swiper.previousTranslate = swiper.translate;
2464	    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
2465	
2466	    var newProgress;
2467	    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
2468	
2469	    if (translatesDiff === 0) {
2470	      newProgress = 0;
2471	    } else {
2472	      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
2473	    }
2474	
2475	    if (newProgress !== progress) {
2476	      swiper.updateProgress(translate);
2477	    }
2478	
2479	    swiper.emit('setTranslate', swiper.translate, byController);
2480	  }
2481	
2482	  function minTranslate() {
2483	    return -this.snapGrid[0];
2484	  }
2485	
2486	  function maxTranslate() {
2487	    return -this.snapGrid[this.snapGrid.length - 1];
2488	  }
2489	
2490	  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
2491	    if (translate === void 0) {
2492	      translate = 0;
2493	    }
2494	
2495	    if (speed === void 0) {
2496	      speed = this.params.speed;
2497	    }
2498	
2499	    if (runCallbacks === void 0) {
2500	      runCallbacks = true;
2501	    }
2502	
2503	    if (translateBounds === void 0) {
2504	      translateBounds = true;
2505	    }
2506	
2507	    var swiper = this;
2508	    var params = swiper.params,
2509	        wrapperEl = swiper.wrapperEl;
2510	
2511	    if (swiper.animating && params.preventInteractionOnTransition) {
2512	      return false;
2513	    }
2514	
2515	    var minTranslate = swiper.minTranslate();
2516	    var maxTranslate = swiper.maxTranslate();
2517	    var newTranslate;
2518	    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress
2519	
2520	    swiper.updateProgress(newTranslate);
2521	
2522	    if (params.cssMode) {
2523	      var isH = swiper.isHorizontal();
2524	
2525	      if (speed === 0) {
2526	        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
2527	      } else {
2528	        // eslint-disable-next-line
2529	        if (wrapperEl.scrollTo) {
2530	          var _wrapperEl$scrollTo;
2531	
2532	          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
2533	        } else {
2534	          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
2535	        }
2536	      }
2537	
2538	      return true;
2539	    }
2540	
2541	    if (speed === 0) {
2542	      swiper.setTransition(0);
2543	      swiper.setTranslate(newTranslate);
2544	
2545	      if (runCallbacks) {
2546	        swiper.emit('beforeTransitionStart', speed, internal);
2547	        swiper.emit('transitionEnd');
2548	      }
2549	    } else {
2550	      swiper.setTransition(speed);
2551	      swiper.setTranslate(newTranslate);
2552	
2553	      if (runCallbacks) {
2554	        swiper.emit('beforeTransitionStart', speed, internal);
2555	        swiper.emit('transitionStart');
2556	      }
2557	
2558	      if (!swiper.animating) {
2559	        swiper.animating = true;
2560	
2561	        if (!swiper.onTranslateToWrapperTransitionEnd) {
2562	          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
2563	            if (!swiper || swiper.destroyed) return;
2564	            if (e.target !== this) return;
2565	            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
2566	            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
2567	            swiper.onTranslateToWrapperTransitionEnd = null;
2568	            delete swiper.onTranslateToWrapperTransitionEnd;
2569	
2570	            if (runCallbacks) {
2571	              swiper.emit('transitionEnd');
2572	            }
2573	          };
2574	        }
2575	
2576	        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
2577	        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
2578	      }
2579	    }
2580	
2581	    return true;
2582	  }
2583	
2584	  var translate = {
2585	    getTranslate: getSwiperTranslate,
2586	    setTranslate: setTranslate,
2587	    minTranslate: minTranslate,
2588	    maxTranslate: maxTranslate,
2589	    translateTo: translateTo
2590	  };
2591	
2592	  function setTransition(duration, byController) {
2593	    var swiper = this;
2594	
2595	    if (!swiper.params.cssMode) {
2596	      swiper.$wrapperEl.transition(duration);
2597	    }
2598	
2599	    swiper.emit('setTransition', duration, byController);
2600	  }
2601	
2602	  function transitionStart(runCallbacks, direction) {
2603	    if (runCallbacks === void 0) {
2604	      runCallbacks = true;
2605	    }
2606	
2607	    var swiper = this;
2608	    var activeIndex = swiper.activeIndex,
2609	        params = swiper.params,
2610	        previousIndex = swiper.previousIndex;
2611	    if (params.cssMode) return;
2612	
2613	    if (params.autoHeight) {
2614	      swiper.updateAutoHeight();
2615	    }
2616	
2617	    var dir = direction;
2618	
2619	    if (!dir) {
2620	      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
2621	    }
2622	
2623	    swiper.emit('transitionStart');
2624	
2625	    if (runCallbacks && activeIndex !== previousIndex) {
2626	      if (dir === 'reset') {
2627	        swiper.emit('slideResetTransitionStart');
2628	        return;
2629	      }
2630	
2631	      swiper.emit('slideChangeTransitionStart');
2632	
2633	      if (dir === 'next') {
2634	        swiper.emit('slideNextTransitionStart');
2635	      } else {
2636	        swiper.emit('slidePrevTransitionStart');
2637	      }
2638	    }
2639	  }
2640	
2641	  function transitionEnd$1(runCallbacks, direction) {
2642	    if (runCallbacks === void 0) {
2643	      runCallbacks = true;
2644	    }
2645	
2646	    var swiper = this;
2647	    var activeIndex = swiper.activeIndex,
2648	        previousIndex = swiper.previousIndex,
2649	        params = swiper.params;
2650	    swiper.animating = false;
2651	    if (params.cssMode) return;
2652	    swiper.setTransition(0);
2653	    var dir = direction;
2654	
2655	    if (!dir) {
2656	      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
2657	    }
2658	
2659	    swiper.emit('transitionEnd');
2660	
2661	    if (runCallbacks && activeIndex !== previousIndex) {
2662	      if (dir === 'reset') {
2663	        swiper.emit('slideResetTransitionEnd');
2664	        return;
2665	      }
2666	
2667	      swiper.emit('slideChangeTransitionEnd');
2668	
2669	      if (dir === 'next') {
2670	        swiper.emit('slideNextTransitionEnd');
2671	      } else {
2672	        swiper.emit('slidePrevTransitionEnd');
2673	      }
2674	    }
2675	  }
2676	
2677	  var transition$1 = {
2678	    setTransition: setTransition,
2679	    transitionStart: transitionStart,
2680	    transitionEnd: transitionEnd$1
2681	  };
2682	
2683	  function slideTo(index, speed, runCallbacks, internal) {
2684	    if (index === void 0) {
2685	      index = 0;
2686	    }
2687	
2688	    if (speed === void 0) {
2689	      speed = this.params.speed;
2690	    }
2691	
2692	    if (runCallbacks === void 0) {
2693	      runCallbacks = true;
2694	    }
2695	
2696	    var swiper = this;
2697	    var slideIndex = index;
2698	    if (slideIndex < 0) slideIndex = 0;
2699	    var params = swiper.params,
2700	        snapGrid = swiper.snapGrid,
2701	        slidesGrid = swiper.slidesGrid,
2702	        previousIndex = swiper.previousIndex,
2703	        activeIndex = swiper.activeIndex,
2704	        rtl = swiper.rtlTranslate,
2705	        wrapperEl = swiper.wrapperEl;
2706	
2707	    if (swiper.animating && params.preventInteractionOnTransition) {
2708	      return false;
2709	    }
2710	
2711	    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
2712	    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
2713	    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
2714	
2715	    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
2716	      swiper.emit('beforeSlideChangeStart');
2717	    }
2718	
2719	    var translate = -snapGrid[snapIndex]; // Update progress
2720	
2721	    swiper.updateProgress(translate); // Normalize slideIndex
2722	
2723	    if (params.normalizeSlideIndex) {
2724	      for (var i = 0; i < slidesGrid.length; i += 1) {
2725	        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
2726	          slideIndex = i;
2727	        }
2728	      }
2729	    } // Directions locks
2730	
2731	
2732	    if (swiper.initialized && slideIndex !== activeIndex) {
2733	      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
2734	        return false;
2735	      }
2736	
2737	      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
2738	        if ((activeIndex || 0) !== slideIndex) return false;
2739	      }
2740	    }
2741	
2742	    var direction;
2743	    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index
2744	
2745	    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
2746	      swiper.updateActiveIndex(slideIndex); // Update Height
2747	
2748	      if (params.autoHeight) {
2749	        swiper.updateAutoHeight();
2750	      }
2751	
2752	      swiper.updateSlidesClasses();
2753	
2754	      if (params.effect !== 'slide') {
2755	        swiper.setTranslate(translate);
2756	      }
2757	
2758	      if (direction !== 'reset') {
2759	        swiper.transitionStart(runCallbacks, direction);
2760	        swiper.transitionEnd(runCallbacks, direction);
2761	      }
2762	
2763	      return false;
2764	    }
2765	
2766	    if (params.cssMode) {
2767	      var isH = swiper.isHorizontal();
2768	      var t = -translate;
2769	
2770	      if (rtl) {
2771	        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
2772	      }
2773	
2774	      if (speed === 0) {
2775	        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
2776	      } else {
2777	        // eslint-disable-next-line
2778	        if (wrapperEl.scrollTo) {
2779	          var _wrapperEl$scrollTo;
2780	
2781	          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
2782	        } else {
2783	          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
2784	        }
2785	      }
2786	
2787	      return true;
2788	    }
2789	
2790	    if (speed === 0) {
2791	      swiper.setTransition(0);
2792	      swiper.setTranslate(translate);
2793	      swiper.updateActiveIndex(slideIndex);
2794	      swiper.updateSlidesClasses();
2795	      swiper.emit('beforeTransitionStart', speed, internal);
2796	      swiper.transitionStart(runCallbacks, direction);
2797	      swiper.transitionEnd(runCallbacks, direction);
2798	    } else {
2799	      swiper.setTransition(speed);
2800	      swiper.setTranslate(translate);
2801	      swiper.updateActiveIndex(slideIndex);
2802	      swiper.updateSlidesClasses();
2803	      swiper.emit('beforeTransitionStart', speed, internal);
2804	      swiper.transitionStart(runCallbacks, direction);
2805	
2806	      if (!swiper.animating) {
2807	        swiper.animating = true;
2808	
2809	        if (!swiper.onSlideToWrapperTransitionEnd) {
2810	          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
2811	            if (!swiper || swiper.destroyed) return;
2812	            if (e.target !== this) return;
2813	            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
2814	            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
2815	            swiper.onSlideToWrapperTransitionEnd = null;
2816	            delete swiper.onSlideToWrapperTransitionEnd;
2817	            swiper.transitionEnd(runCallbacks, direction);
2818	          };
2819	        }
2820	
2821	        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
2822	        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
2823	      }
2824	    }
2825	
2826	    return true;
2827	  }
2828	
2829	  function slideToLoop(index, speed, runCallbacks, internal) {
2830	    if (index === void 0) {
2831	      index = 0;
2832	    }
2833	
2834	    if (speed === void 0) {
2835	      speed = this.params.speed;
2836	    }
2837	
2838	    if (runCallbacks === void 0) {
2839	      runCallbacks = true;
2840	    }
2841	
2842	    var swiper = this;
2843	    var newIndex = index;
2844	
2845	    if (swiper.params.loop) {
2846	      newIndex += swiper.loopedSlides;
2847	    }
2848	
2849	    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
2850	  }
2851	
2852	  /* eslint no-unused-vars: "off" */
2853	  function slideNext(speed, runCallbacks, internal) {
2854	    if (speed === void 0) {
2855	      speed = this.params.speed;
2856	    }
2857	
2858	    if (runCallbacks === void 0) {
2859	      runCallbacks = true;
2860	    }
2861	
2862	    var swiper = this;
2863	    var params = swiper.params,
2864	        animating = swiper.animating;
2865	    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
2866	
2867	    if (params.loop) {
2868	      if (animating && params.loopPreventsSlide) return false;
2869	      swiper.loopFix(); // eslint-disable-next-line
2870	
2871	      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
2872	    }
2873	
2874	    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
2875	  }
2876	
2877	  /* eslint no-unused-vars: "off" */
2878	  function slidePrev(speed, runCallbacks, internal) {
2879	    if (speed === void 0) {
2880	      speed = this.params.speed;
2881	    }
2882	
2883	    if (runCallbacks === void 0) {
2884	      runCallbacks = true;
2885	    }
2886	
2887	    var swiper = this;
2888	    var params = swiper.params,
2889	        animating = swiper.animating,
2890	        snapGrid = swiper.snapGrid,
2891	        slidesGrid = swiper.slidesGrid,
2892	        rtlTranslate = swiper.rtlTranslate;
2893	
2894	    if (params.loop) {
2895	      if (animating && params.loopPreventsSlide) return false;
2896	      swiper.loopFix(); // eslint-disable-next-line
2897	
2898	      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
2899	    }
2900	
2901	    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
2902	
2903	    function normalize(val) {
2904	      if (val < 0) return -Math.floor(Math.abs(val));
2905	      return Math.floor(val);
2906	    }
2907	
2908	    var normalizedTranslate = normalize(translate);
2909	    var normalizedSnapGrid = snapGrid.map(function (val) {
2910	      return normalize(val);
2911	    });
2912	    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
2913	    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
2914	
2915	    if (typeof prevSnap === 'undefined' && params.cssMode) {
2916	      snapGrid.forEach(function (snap) {
2917	        if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
2918	      });
2919	    }
2920	
2921	    var prevIndex;
2922	
2923	    if (typeof prevSnap !== 'undefined') {
2924	      prevIndex = slidesGrid.indexOf(prevSnap);
2925	      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
2926	    }
2927	
2928	    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
2929	  }
2930	
2931	  /* eslint no-unused-vars: "off" */
2932	  function slideReset(speed, runCallbacks, internal) {
2933	    if (speed === void 0) {
2934	      speed = this.params.speed;
2935	    }
2936	
2937	    if (runCallbacks === void 0) {
2938	      runCallbacks = true;
2939	    }
2940	
2941	    var swiper = this;
2942	    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
2943	  }
2944	
2945	  /* eslint no-unused-vars: "off" */
2946	  function slideToClosest(speed, runCallbacks, internal, threshold) {
2947	    if (speed === void 0) {
2948	      speed = this.params.speed;
2949	    }
2950	
2951	    if (runCallbacks === void 0) {
2952	      runCallbacks = true;
2953	    }
2954	
2955	    if (threshold === void 0) {
2956	      threshold = 0.5;
2957	    }
2958	
2959	    var swiper = this;
2960	    var index = swiper.activeIndex;
2961	    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
2962	    var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
2963	    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
2964	
2965	    if (translate >= swiper.snapGrid[snapIndex]) {
2966	      // The current translate is on or after the current snap index, so the choice
2967	      // is between the current index and the one after it.
2968	      var currentSnap = swiper.snapGrid[snapIndex];
2969	      var nextSnap = swiper.snapGrid[snapIndex + 1];
2970	
2971	      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
2972	        index += swiper.params.slidesPerGroup;
2973	      }
2974	    } else {
2975	      // The current translate is before the current snap index, so the choice
2976	      // is between the current index and the one before it.
2977	      var prevSnap = swiper.snapGrid[snapIndex - 1];
2978	      var _currentSnap = swiper.snapGrid[snapIndex];
2979	
2980	      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
2981	        index -= swiper.params.slidesPerGroup;
2982	      }
2983	    }
2984	
2985	    index = Math.max(index, 0);
2986	    index = Math.min(index, swiper.slidesGrid.length - 1);
2987	    return swiper.slideTo(index, speed, runCallbacks, internal);
2988	  }
2989	
2990	  function slideToClickedSlide() {
2991	    var swiper = this;
2992	    var params = swiper.params,
2993	        $wrapperEl = swiper.$wrapperEl;
2994	    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
2995	    var slideToIndex = swiper.clickedIndex;
2996	    var realIndex;
2997	
2998	    if (params.loop) {
2999	      if (swiper.animating) return;
3000	      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
3001	
3002	      if (params.centeredSlides) {
3003	        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
3004	          swiper.loopFix();
3005	          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
3006	          nextTick(function () {
3007	            swiper.slideTo(slideToIndex);
3008	          });
3009	        } else {
3010	          swiper.slideTo(slideToIndex);
3011	        }
3012	      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
3013	        swiper.loopFix();
3014	        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
3015	        nextTick(function () {
3016	          swiper.slideTo(slideToIndex);
3017	        });
3018	      } else {
3019	        swiper.slideTo(slideToIndex);
3020	      }
3021	    } else {
3022	      swiper.slideTo(slideToIndex);
3023	    }
3024	  }
3025	
3026	  var slide = {
3027	    slideTo: slideTo,
3028	    slideToLoop: slideToLoop,
3029	    slideNext: slideNext,
3030	    slidePrev: slidePrev,
3031	    slideReset: slideReset,
3032	    slideToClosest: slideToClosest,
3033	    slideToClickedSlide: slideToClickedSlide
3034	  };
3035	
3036	  function loopCreate() {
3037	    var swiper = this;
3038	    var document = getDocument();
3039	    var params = swiper.params,
3040	        $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides
3041	
3042	    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
3043	    var slides = $wrapperEl.children("." + params.slideClass);
3044	
3045	    if (params.loopFillGroupWithBlank) {
3046	      var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
3047	
3048	      if (blankSlidesNum !== params.slidesPerGroup) {
3049	        for (var i = 0; i < blankSlidesNum; i += 1) {
3050	          var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
3051	          $wrapperEl.append(blankNode);
3052	        }
3053	
3054	        slides = $wrapperEl.children("." + params.slideClass);
3055	      }
3056	    }
3057	
3058	    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
3059	    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
3060	    swiper.loopedSlides += params.loopAdditionalSlides;
3061	
3062	    if (swiper.loopedSlides > slides.length) {
3063	      swiper.loopedSlides = slides.length;
3064	    }
3065	
3066	    var prependSlides = [];
3067	    var appendSlides = [];
3068	    slides.each(function (el, index) {
3069	      var slide = $(el);
3070	
3071	      if (index < swiper.loopedSlides) {
3072	        appendSlides.push(el);
3073	      }
3074	
3075	      if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
3076	        prependSlides.push(el);
3077	      }
3078	
3079	      slide.attr('data-swiper-slide-index', index);
3080	    });
3081	
3082	    for (var _i = 0; _i < appendSlides.length; _i += 1) {
3083	      $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
3084	    }
3085	
3086	    for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
3087	      $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
3088	    }
3089	  }
3090	
3091	  function loopFix() {
3092	    var swiper = this;
3093	    swiper.emit('beforeLoopFix');
3094	    var activeIndex = swiper.activeIndex,
3095	        slides = swiper.slides,
3096	        loopedSlides = swiper.loopedSlides,
3097	        allowSlidePrev = swiper.allowSlidePrev,
3098	        allowSlideNext = swiper.allowSlideNext,
3099	        snapGrid = swiper.snapGrid,
3100	        rtl = swiper.rtlTranslate;
3101	    var newIndex;
3102	    swiper.allowSlidePrev = true;
3103	    swiper.allowSlideNext = true;
3104	    var snapTranslate = -snapGrid[activeIndex];
3105	    var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
3106	
3107	    if (activeIndex < loopedSlides) {
3108	      newIndex = slides.length - loopedSlides * 3 + activeIndex;
3109	      newIndex += loopedSlides;
3110	      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
3111	
3112	      if (slideChanged && diff !== 0) {
3113	        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
3114	      }
3115	    } else if (activeIndex >= slides.length - loopedSlides) {
3116	      // Fix For Positive Oversliding
3117	      newIndex = -slides.length + activeIndex + loopedSlides;
3118	      newIndex += loopedSlides;
3119	
3120	      var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
3121	
3122	      if (_slideChanged && diff !== 0) {
3123	        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
3124	      }
3125	    }
3126	
3127	    swiper.allowSlidePrev = allowSlidePrev;
3128	    swiper.allowSlideNext = allowSlideNext;
3129	    swiper.emit('loopFix');
3130	  }
3131	
3132	  function loopDestroy() {
3133	    var swiper = this;
3134	    var $wrapperEl = swiper.$wrapperEl,
3135	        params = swiper.params,
3136	        slides = swiper.slides;
3137	    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
3138	    slides.removeAttr('data-swiper-slide-index');
3139	  }
3140	
3141	  var loop = {
3142	    loopCreate: loopCreate,
3143	    loopFix: loopFix,
3144	    loopDestroy: loopDestroy
3145	  };
3146	
3147	  function setGrabCursor(moving) {
3148	    var swiper = this;
3149	    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
3150	    var el = swiper.el;
3151	    el.style.cursor = 'move';
3152	    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
3153	    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
3154	    el.style.cursor = moving ? 'grabbing' : 'grab';
3155	  }
3156	
3157	  function unsetGrabCursor() {
3158	    var swiper = this;
3159	
3160	    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
3161	      return;
3162	    }
3163	
3164	    swiper.el.style.cursor = '';
3165	  }
3166	
3167	  var grabCursor = {
3168	    setGrabCursor: setGrabCursor,
3169	    unsetGrabCursor: unsetGrabCursor
3170	  };
3171	
3172	  function appendSlide(slides) {
3173	    var swiper = this;
3174	    var $wrapperEl = swiper.$wrapperEl,
3175	        params = swiper.params;
3176	
3177	    if (params.loop) {
3178	      swiper.loopDestroy();
3179	    }
3180	
3181	    if (typeof slides === 'object' && 'length' in slides) {
3182	      for (var i = 0; i < slides.length; i += 1) {
3183	        if (slides[i]) $wrapperEl.append(slides[i]);
3184	      }
3185	    } else {
3186	      $wrapperEl.append(slides);
3187	    }
3188	
3189	    if (params.loop) {
3190	      swiper.loopCreate();
3191	    }
3192	
3193	    if (!(params.observer && swiper.support.observer)) {
3194	      swiper.update();
3195	    }
3196	  }
3197	
3198	  function prependSlide(slides) {
3199	    var swiper = this;
3200	    var params = swiper.params,
3201	        $wrapperEl = swiper.$wrapperEl,
3202	        activeIndex = swiper.activeIndex;
3203	
3204	    if (params.loop) {
3205	      swiper.loopDestroy();
3206	    }
3207	
3208	    var newActiveIndex = activeIndex + 1;
3209	
3210	    if (typeof slides === 'object' && 'length' in slides) {
3211	      for (var i = 0; i < slides.length; i += 1) {
3212	        if (slides[i]) $wrapperEl.prepend(slides[i]);
3213	      }
3214	
3215	      newActiveIndex = activeIndex + slides.length;
3216	    } else {
3217	      $wrapperEl.prepend(slides);
3218	    }
3219	
3220	    if (params.loop) {
3221	      swiper.loopCreate();
3222	    }
3223	
3224	    if (!(params.observer && swiper.support.observer)) {
3225	      swiper.update();
3226	    }
3227	
3228	    swiper.slideTo(newActiveIndex, 0, false);
3229	  }
3230	
3231	  function addSlide(index, slides) {
3232	    var swiper = this;
3233	    var $wrapperEl = swiper.$wrapperEl,
3234	        params = swiper.params,
3235	        activeIndex = swiper.activeIndex;
3236	    var activeIndexBuffer = activeIndex;
3237	
3238	    if (params.loop) {
3239	      activeIndexBuffer -= swiper.loopedSlides;
3240	      swiper.loopDestroy();
3241	      swiper.slides = $wrapperEl.children("." + params.slideClass);
3242	    }
3243	
3244	    var baseLength = swiper.slides.length;
3245	
3246	    if (index <= 0) {
3247	      swiper.prependSlide(slides);
3248	      return;
3249	    }
3250	
3251	    if (index >= baseLength) {
3252	      swiper.appendSlide(slides);
3253	      return;
3254	    }
3255	
3256	    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
3257	    var slidesBuffer = [];
3258	
3259	    for (var i = baseLength - 1; i >= index; i -= 1) {
3260	      var currentSlide = swiper.slides.eq(i);
3261	      currentSlide.remove();
3262	      slidesBuffer.unshift(currentSlide);
3263	    }
3264	
3265	    if (typeof slides === 'object' && 'length' in slides) {
3266	      for (var _i = 0; _i < slides.length; _i += 1) {
3267	        if (slides[_i]) $wrapperEl.append(slides[_i]);
3268	      }
3269	
3270	      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
3271	    } else {
3272	      $wrapperEl.append(slides);
3273	    }
3274	
3275	    for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
3276	      $wrapperEl.append(slidesBuffer[_i2]);
3277	    }
3278	
3279	    if (params.loop) {
3280	      swiper.loopCreate();
3281	    }
3282	
3283	    if (!(params.observer && swiper.support.observer)) {
3284	      swiper.update();
3285	    }
3286	
3287	    if (params.loop) {
3288	      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
3289	    } else {
3290	      swiper.slideTo(newActiveIndex, 0, false);
3291	    }
3292	  }
3293	
3294	  function removeSlide(slidesIndexes) {
3295	    var swiper = this;
3296	    var params = swiper.params,
3297	        $wrapperEl = swiper.$wrapperEl,
3298	        activeIndex = swiper.activeIndex;
3299	    var activeIndexBuffer = activeIndex;
3300	
3301	    if (params.loop) {
3302	      activeIndexBuffer -= swiper.loopedSlides;
3303	      swiper.loopDestroy();
3304	      swiper.slides = $wrapperEl.children("." + params.slideClass);
3305	    }
3306	
3307	    var newActiveIndex = activeIndexBuffer;
3308	    var indexToRemove;
3309	
3310	    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
3311	      for (var i = 0; i < slidesIndexes.length; i += 1) {
3312	        indexToRemove = slidesIndexes[i];
3313	        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
3314	        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
3315	      }
3316	
3317	      newActiveIndex = Math.max(newActiveIndex, 0);
3318	    } else {
3319	      indexToRemove = slidesIndexes;
3320	      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
3321	      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
3322	      newActiveIndex = Math.max(newActiveIndex, 0);
3323	    }
3324	
3325	    if (params.loop) {
3326	      swiper.loopCreate();
3327	    }
3328	
3329	    if (!(params.observer && swiper.support.observer)) {
3330	      swiper.update();
3331	    }
3332	
3333	    if (params.loop) {
3334	      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
3335	    } else {
3336	      swiper.slideTo(newActiveIndex, 0, false);
3337	    }
3338	  }
3339	
3340	  function removeAllSlides() {
3341	    var swiper = this;
3342	    var slidesIndexes = [];
3343	
3344	    for (var i = 0; i < swiper.slides.length; i += 1) {
3345	      slidesIndexes.push(i);
3346	    }
3347	
3348	    swiper.removeSlide(slidesIndexes);
3349	  }
3350	
3351	  var manipulation = {
3352	    appendSlide: appendSlide,
3353	    prependSlide: prependSlide,
3354	    addSlide: addSlide,
3355	    removeSlide: removeSlide,
3356	    removeAllSlides: removeAllSlides
3357	  };
3358	
3359	  function onTouchStart(event) {
3360	    var swiper = this;
3361	    var document = getDocument();
3362	    var window = getWindow();
3363	    var data = swiper.touchEventsData;
3364	    var params = swiper.params,
3365	        touches = swiper.touches;
3366	
3367	    if (swiper.animating && params.preventInteractionOnTransition) {
3368	      return;
3369	    }
3370	
3371	    var e = event;
3372	    if (e.originalEvent) e = e.originalEvent;
3373	    var $targetEl = $(e.target);
3374	
3375	    if (params.touchEventsTarget === 'wrapper') {
3376	      if (!$targetEl.closest(swiper.wrapperEl).length) return;
3377	    }
3378	
3379	    data.isTouchEvent = e.type === 'touchstart';
3380	    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
3381	    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
3382	    if (data.isTouched && data.isMoved) return;
3383	
3384	    if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
3385	      swiper.allowClick = true;
3386	      return;
3387	    }
3388	
3389	    if (params.swipeHandler) {
3390	      if (!$targetEl.closest(params.swipeHandler)[0]) return;
3391	    }
3392	
3393	    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
3394	    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
3395	    var startX = touches.currentX;
3396	    var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
3397	
3398	    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
3399	    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
3400	
3401	    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.screen.width - edgeSwipeThreshold)) {
3402	      return;
3403	    }
3404	
3405	    extend$1(data, {
3406	      isTouched: true,
3407	      isMoved: false,
3408	      allowTouchCallbacks: true,
3409	      isScrolling: undefined,
3410	      startMoving: undefined
3411	    });
3412	    touches.startX = startX;
3413	    touches.startY = startY;
3414	    data.touchStartTime = now();
3415	    swiper.allowClick = true;
3416	    swiper.updateSize();
3417	    swiper.swipeDirection = undefined;
3418	    if (params.threshold > 0) data.allowThresholdMove = false;
3419	
3420	    if (e.type !== 'touchstart') {
3421	      var preventDefault = true;
3422	      if ($targetEl.is(data.formElements)) preventDefault = false;
3423	
3424	      if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
3425	        document.activeElement.blur();
3426	      }
3427	
3428	      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
3429	
3430	      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
3431	        e.preventDefault();
3432	      }
3433	    }
3434	
3435	    swiper.emit('touchStart', e);
3436	  }
3437	
3438	  function onTouchMove(event) {
3439	    var document = getDocument();
3440	    var swiper = this;
3441	    var data = swiper.touchEventsData;
3442	    var params = swiper.params,
3443	        touches = swiper.touches,
3444	        rtl = swiper.rtlTranslate;
3445	    var e = event;
3446	    if (e.originalEvent) e = e.originalEvent;
3447	
3448	    if (!data.isTouched) {
3449	      if (data.startMoving && data.isScrolling) {
3450	        swiper.emit('touchMoveOpposite', e);
3451	      }
3452	
3453	      return;
3454	    }
3455	
3456	    if (data.isTouchEvent && e.type !== 'touchmove') return;
3457	    var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
3458	    var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
3459	    var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
3460	
3461	    if (e.preventedByNestedSwiper) {
3462	      touches.startX = pageX;
3463	      touches.startY = pageY;
3464	      return;
3465	    }
3466	
3467	    if (!swiper.allowTouchMove) {
3468	      // isMoved = true;
3469	      swiper.allowClick = false;
3470	
3471	      if (data.isTouched) {
3472	        extend$1(touches, {
3473	          startX: pageX,
3474	          startY: pageY,
3475	          currentX: pageX,
3476	          currentY: pageY
3477	        });
3478	        data.touchStartTime = now();
3479	      }
3480	
3481	      return;
3482	    }
3483	
3484	    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
3485	      if (swiper.isVertical()) {
3486	        // Vertical
3487	        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
3488	          data.isTouched = false;
3489	          data.isMoved = false;
3490	          return;
3491	        }
3492	      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
3493	        return;
3494	      }
3495	    }
3496	
3497	    if (data.isTouchEvent && document.activeElement) {
3498	      if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
3499	        data.isMoved = true;
3500	        swiper.allowClick = false;
3501	        return;
3502	      }
3503	    }
3504	
3505	    if (data.allowTouchCallbacks) {
3506	      swiper.emit('touchMove', e);
3507	    }
3508	
3509	    if (e.targetTouches && e.targetTouches.length > 1) return;
3510	    touches.currentX = pageX;
3511	    touches.currentY = pageY;
3512	    var diffX = touches.currentX - touches.startX;
3513	    var diffY = touches.currentY - touches.startY;
3514	    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
3515	
3516	    if (typeof data.isScrolling === 'undefined') {
3517	      var touchAngle;
3518	
3519	      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
3520	        data.isScrolling = false;
3521	      } else {
3522	        // eslint-disable-next-line
3523	        if (diffX * diffX + diffY * diffY >= 25) {
3524	          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
3525	          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
3526	        }
3527	      }
3528	    }
3529	
3530	    if (data.isScrolling) {
3531	      swiper.emit('touchMoveOpposite', e);
3532	    }
3533	
3534	    if (typeof data.startMoving === 'undefined') {
3535	      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
3536	        data.startMoving = true;
3537	      }
3538	    }
3539	
3540	    if (data.isScrolling) {
3541	      data.isTouched = false;
3542	      return;
3543	    }
3544	
3545	    if (!data.startMoving) {
3546	      return;
3547	    }
3548	
3549	    swiper.allowClick = false;
3550	
3551	    if (!params.cssMode && e.cancelable) {
3552	      e.preventDefault();
3553	    }
3554	
3555	    if (params.touchMoveStopPropagation && !params.nested) {
3556	      e.stopPropagation();
3557	    }
3558	
3559	    if (!data.isMoved) {
3560	      if (params.loop) {
3561	        swiper.loopFix();
3562	      }
3563	
3564	      data.startTranslate = swiper.getTranslate();
3565	      swiper.setTransition(0);
3566	
3567	      if (swiper.animating) {
3568	        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
3569	      }
3570	
3571	      data.allowMomentumBounce = false; // Grab Cursor
3572	
3573	      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
3574	        swiper.setGrabCursor(true);
3575	      }
3576	
3577	      swiper.emit('sliderFirstMove', e);
3578	    }
3579	
3580	    swiper.emit('sliderMove', e);
3581	    data.isMoved = true;
3582	    var diff = swiper.isHorizontal() ? diffX : diffY;
3583	    touches.diff = diff;
3584	    diff *= params.touchRatio;
3585	    if (rtl) diff = -diff;
3586	    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
3587	    data.currentTranslate = diff + data.startTranslate;
3588	    var disableParentSwiper = true;
3589	    var resistanceRatio = params.resistanceRatio;
3590	
3591	    if (params.touchReleaseOnEdges) {
3592	      resistanceRatio = 0;
3593	    }
3594	
3595	    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
3596	      disableParentSwiper = false;
3597	      if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
3598	    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
3599	      disableParentSwiper = false;
3600	      if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
3601	    }
3602	
3603	    if (disableParentSwiper) {
3604	      e.preventedByNestedSwiper = true;
3605	    } // Directions locks
3606	
3607	
3608	    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
3609	      data.currentTranslate = data.startTranslate;
3610	    }
3611	
3612	    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
3613	      data.currentTranslate = data.startTranslate;
3614	    } // Threshold
3615	
3616	
3617	    if (params.threshold > 0) {
3618	      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
3619	        if (!data.allowThresholdMove) {
3620	          data.allowThresholdMove = true;
3621	          touches.startX = touches.currentX;
3622	          touches.startY = touches.currentY;
3623	          data.currentTranslate = data.startTranslate;
3624	          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
3625	          return;
3626	        }
3627	      } else {
3628	        data.currentTranslate = data.startTranslate;
3629	        return;
3630	      }
3631	    }
3632	
3633	    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
3634	
3635	    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
3636	      swiper.updateActiveIndex();
3637	      swiper.updateSlidesClasses();
3638	    }
3639	
3640	    if (params.freeMode) {
3641	      // Velocity
3642	      if (data.velocities.length === 0) {
3643	        data.velocities.push({
3644	          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
3645	          time: data.touchStartTime
3646	        });
3647	      }
3648	
3649	      data.velocities.push({
3650	        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
3651	        time: now()
3652	      });
3653	    } // Update progress
3654	
3655	
3656	    swiper.updateProgress(data.currentTranslate); // Update translate
3657	
3658	    swiper.setTranslate(data.currentTranslate);
3659	  }
3660	
3661	  function onTouchEnd(event) {
3662	    var swiper = this;
3663	    var data = swiper.touchEventsData;
3664	    var params = swiper.params,
3665	        touches = swiper.touches,
3666	        rtl = swiper.rtlTranslate,
3667	        $wrapperEl = swiper.$wrapperEl,
3668	        slidesGrid = swiper.slidesGrid,
3669	        snapGrid = swiper.snapGrid;
3670	    var e = event;
3671	    if (e.originalEvent) e = e.originalEvent;
3672	
3673	    if (data.allowTouchCallbacks) {
3674	      swiper.emit('touchEnd', e);
3675	    }
3676	
3677	    data.allowTouchCallbacks = false;
3678	
3679	    if (!data.isTouched) {
3680	      if (data.isMoved && params.grabCursor) {
3681	        swiper.setGrabCursor(false);
3682	      }
3683	
3684	      data.isMoved = false;
3685	      data.startMoving = false;
3686	      return;
3687	    } // Return Grab Cursor
3688	
3689	
3690	    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
3691	      swiper.setGrabCursor(false);
3692	    } // Time diff
3693	
3694	
3695	    var touchEndTime = now();
3696	    var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
3697	
3698	    if (swiper.allowClick) {
3699	      swiper.updateClickedSlide(e);
3700	      swiper.emit('tap click', e);
3701	
3702	      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
3703	        swiper.emit('doubleTap doubleClick', e);
3704	      }
3705	    }
3706	
3707	    data.lastClickTime = now();
3708	    nextTick(function () {
3709	      if (!swiper.destroyed) swiper.allowClick = true;
3710	    });
3711	
3712	    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
3713	      data.isTouched = false;
3714	      data.isMoved = false;
3715	      data.startMoving = false;
3716	      return;
3717	    }
3718	
3719	    data.isTouched = false;
3720	    data.isMoved = false;
3721	    data.startMoving = false;
3722	    var currentPos;
3723	
3724	    if (params.followFinger) {
3725	      currentPos = rtl ? swiper.translate : -swiper.translate;
3726	    } else {
3727	      currentPos = -data.currentTranslate;
3728	    }
3729	
3730	    if (params.cssMode) {
3731	      return;
3732	    }
3733	
3734	    if (params.freeMode) {
3735	      if (currentPos < -swiper.minTranslate()) {
3736	        swiper.slideTo(swiper.activeIndex);
3737	        return;
3738	      }
3739	
3740	      if (currentPos > -swiper.maxTranslate()) {
3741	        if (swiper.slides.length < snapGrid.length) {
3742	          swiper.slideTo(snapGrid.length - 1);
3743	        } else {
3744	          swiper.slideTo(swiper.slides.length - 1);
3745	        }
3746	
3747	        return;
3748	      }
3749	
3750	      if (params.freeModeMomentum) {
3751	        if (data.velocities.length > 1) {
3752	          var lastMoveEvent = data.velocities.pop();
3753	          var velocityEvent = data.velocities.pop();
3754	          var distance = lastMoveEvent.position - velocityEvent.position;
3755	          var time = lastMoveEvent.time - velocityEvent.time;
3756	          swiper.velocity = distance / time;
3757	          swiper.velocity /= 2;
3758	
3759	          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
3760	            swiper.velocity = 0;
3761	          } // this implies that the user stopped moving a finger then released.
3762	          // There would be no events with distance zero, so the last event is stale.
3763	
3764	
3765	          if (time > 150 || now() - lastMoveEvent.time > 300) {
3766	            swiper.velocity = 0;
3767	          }
3768	        } else {
3769	          swiper.velocity = 0;
3770	        }
3771	
3772	        swiper.velocity *= params.freeModeMomentumVelocityRatio;
3773	        data.velocities.length = 0;
3774	        var momentumDuration = 1000 * params.freeModeMomentumRatio;
3775	        var momentumDistance = swiper.velocity * momentumDuration;
3776	        var newPosition = swiper.translate + momentumDistance;
3777	        if (rtl) newPosition = -newPosition;
3778	        var doBounce = false;
3779	        var afterBouncePosition;
3780	        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
3781	        var needsLoopFix;
3782	
3783	        if (newPosition < swiper.maxTranslate()) {
3784	          if (params.freeModeMomentumBounce) {
3785	            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
3786	              newPosition = swiper.maxTranslate() - bounceAmount;
3787	            }
3788	
3789	            afterBouncePosition = swiper.maxTranslate();
3790	            doBounce = true;
3791	            data.allowMomentumBounce = true;
3792	          } else {
3793	            newPosition = swiper.maxTranslate();
3794	          }
3795	
3796	          if (params.loop && params.centeredSlides) needsLoopFix = true;
3797	        } else if (newPosition > swiper.minTranslate()) {
3798	          if (params.freeModeMomentumBounce) {
3799	            if (newPosition - swiper.minTranslate() > bounceAmount) {
3800	              newPosition = swiper.minTranslate() + bounceAmount;
3801	            }
3802	
3803	            afterBouncePosition = swiper.minTranslate();
3804	            doBounce = true;
3805	            data.allowMomentumBounce = true;
3806	          } else {
3807	            newPosition = swiper.minTranslate();
3808	          }
3809	
3810	          if (params.loop && params.centeredSlides) needsLoopFix = true;
3811	        } else if (params.freeModeSticky) {
3812	          var nextSlide;
3813	
3814	          for (var j = 0; j < snapGrid.length; j += 1) {
3815	            if (snapGrid[j] > -newPosition) {
3816	              nextSlide = j;
3817	              break;
3818	            }
3819	          }
3820	
3821	          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
3822	            newPosition = snapGrid[nextSlide];
3823	          } else {
3824	            newPosition = snapGrid[nextSlide - 1];
3825	          }
3826	
3827	          newPosition = -newPosition;
3828	        }
3829	
3830	        if (needsLoopFix) {
3831	          swiper.once('transitionEnd', function () {
3832	            swiper.loopFix();
3833	          });
3834	        } // Fix duration
3835	
3836	
3837	        if (swiper.velocity !== 0) {
3838	          if (rtl) {
3839	            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
3840	          } else {
3841	            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
3842	          }
3843	
3844	          if (params.freeModeSticky) {
3845	            // If freeModeSticky is active and the user ends a swipe with a slow-velocity
3846	            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
3847	            // It's easy to see this when simulating touch with mouse events. To fix this,
3848	            // limit single-slide swipes to the default slide duration. This also has the
3849	            // nice side effect of matching slide speed if the user stopped moving before
3850	            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
3851	            // For faster swipes, also apply limits (albeit higher ones).
3852	            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
3853	            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
3854	
3855	            if (moveDistance < currentSlideSize) {
3856	              momentumDuration = params.speed;
3857	            } else if (moveDistance < 2 * currentSlideSize) {
3858	              momentumDuration = params.speed * 1.5;
3859	            } else {
3860	              momentumDuration = params.speed * 2.5;
3861	            }
3862	          }
3863	        } else if (params.freeModeSticky) {
3864	          swiper.slideToClosest();
3865	          return;
3866	        }
3867	
3868	        if (params.freeModeMomentumBounce && doBounce) {
3869	          swiper.updateProgress(afterBouncePosition);
3870	          swiper.setTransition(momentumDuration);
3871	          swiper.setTranslate(newPosition);
3872	          swiper.transitionStart(true, swiper.swipeDirection);
3873	          swiper.animating = true;
3874	          $wrapperEl.transitionEnd(function () {
3875	            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
3876	            swiper.emit('momentumBounce');
3877	            swiper.setTransition(params.speed);
3878	            setTimeout(function () {
3879	              swiper.setTranslate(afterBouncePosition);
3880	              $wrapperEl.transitionEnd(function () {
3881	                if (!swiper || swiper.destroyed) return;
3882	                swiper.transitionEnd();
3883	              });
3884	            }, 0);
3885	          });
3886	        } else if (swiper.velocity) {
3887	          swiper.updateProgress(newPosition);
3888	          swiper.setTransition(momentumDuration);
3889	          swiper.setTranslate(newPosition);
3890	          swiper.transitionStart(true, swiper.swipeDirection);
3891	
3892	          if (!swiper.animating) {
3893	            swiper.animating = true;
3894	            $wrapperEl.transitionEnd(function () {
3895	              if (!swiper || swiper.destroyed) return;
3896	              swiper.transitionEnd();
3897	            });
3898	          }
3899	        } else {
3900	          swiper.updateProgress(newPosition);
3901	        }
3902	
3903	        swiper.updateActiveIndex();
3904	        swiper.updateSlidesClasses();
3905	      } else if (params.freeModeSticky) {
3906	        swiper.slideToClosest();
3907	        return;
3908	      }
3909	
3910	      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
3911	        swiper.updateProgress();
3912	        swiper.updateActiveIndex();
3913	        swiper.updateSlidesClasses();
3914	      }
3915	
3916	      return;
3917	    } // Find current slide
3918	
3919	
3920	    var stopIndex = 0;
3921	    var groupSize = swiper.slidesSizesGrid[0];
3922	
3923	    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
3924	      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
3925	
3926	      if (typeof slidesGrid[i + _increment] !== 'undefined') {
3927	        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
3928	          stopIndex = i;
3929	          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
3930	        }
3931	      } else if (currentPos >= slidesGrid[i]) {
3932	        stopIndex = i;
3933	        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
3934	      }
3935	    } // Find current slide size
3936	
3937	
3938	    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
3939	    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
3940	
3941	    if (timeDiff > params.longSwipesMs) {
3942	      // Long touches
3943	      if (!params.longSwipes) {
3944	        swiper.slideTo(swiper.activeIndex);
3945	        return;
3946	      }
3947	
3948	      if (swiper.swipeDirection === 'next') {
3949	        if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
3950	      }
3951	
3952	      if (swiper.swipeDirection === 'prev') {
3953	        if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
3954	      }
3955	    } else {
3956	      // Short swipes
3957	      if (!params.shortSwipes) {
3958	        swiper.slideTo(swiper.activeIndex);
3959	        return;
3960	      }
3961	
3962	      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
3963	
3964	      if (!isNavButtonTarget) {
3965	        if (swiper.swipeDirection === 'next') {
3966	          swiper.slideTo(stopIndex + increment);
3967	        }
3968	
3969	        if (swiper.swipeDirection === 'prev') {
3970	          swiper.slideTo(stopIndex);
3971	        }
3972	      } else if (e.target === swiper.navigation.nextEl) {
3973	        swiper.slideTo(stopIndex + increment);
3974	      } else {
3975	        swiper.slideTo(stopIndex);
3976	      }
3977	    }
3978	  }
3979	
3980	  function onResize() {
3981	    var swiper = this;
3982	    var params = swiper.params,
3983	        el = swiper.el;
3984	    if (el && el.offsetWidth === 0) return; // Breakpoints
3985	
3986	    if (params.breakpoints) {
3987	      swiper.setBreakpoint();
3988	    } // Save locks
3989	
3990	
3991	    var allowSlideNext = swiper.allowSlideNext,
3992	        allowSlidePrev = swiper.allowSlidePrev,
3993	        snapGrid = swiper.snapGrid; // Disable locks on resize
3994	
3995	    swiper.allowSlideNext = true;
3996	    swiper.allowSlidePrev = true;
3997	    swiper.updateSize();
3998	    swiper.updateSlides();
3999	    swiper.updateSlidesClasses();
4000	
4001	    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
4002	      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
4003	    } else {
4004	      swiper.slideTo(swiper.activeIndex, 0, false, true);
4005	    }
4006	
4007	    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
4008	      swiper.autoplay.run();
4009	    } // Return locks after resize
4010	
4011	
4012	    swiper.allowSlidePrev = allowSlidePrev;
4013	    swiper.allowSlideNext = allowSlideNext;
4014	
4015	    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
4016	      swiper.checkOverflow();
4017	    }
4018	  }
4019	
4020	  function onClick(e) {
4021	    var swiper = this;
4022	
4023	    if (!swiper.allowClick) {
4024	      if (swiper.params.preventClicks) e.preventDefault();
4025	
4026	      if (swiper.params.preventClicksPropagation && swiper.animating) {
4027	        e.stopPropagation();
4028	        e.stopImmediatePropagation();
4029	      }
4030	    }
4031	  }
4032	
4033	  function onScroll() {
4034	    var swiper = this;
4035	    var wrapperEl = swiper.wrapperEl,
4036	        rtlTranslate = swiper.rtlTranslate;
4037	    swiper.previousTranslate = swiper.translate;
4038	
4039	    if (swiper.isHorizontal()) {
4040	      if (rtlTranslate) {
4041	        swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
4042	      } else {
4043	        swiper.translate = -wrapperEl.scrollLeft;
4044	      }
4045	    } else {
4046	      swiper.translate = -wrapperEl.scrollTop;
4047	    } // eslint-disable-next-line
4048	
4049	
4050	    if (swiper.translate === -0) swiper.translate = 0;
4051	    swiper.updateActiveIndex();
4052	    swiper.updateSlidesClasses();
4053	    var newProgress;
4054	    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
4055	
4056	    if (translatesDiff === 0) {
4057	      newProgress = 0;
4058	    } else {
4059	      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
4060	    }
4061	
4062	    if (newProgress !== swiper.progress) {
4063	      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
4064	    }
4065	
4066	    swiper.emit('setTranslate', swiper.translate, false);
4067	  }
4068	
4069	  var dummyEventAttached = false;
4070	
4071	  function dummyEventListener() {}
4072	
4073	  function attachEvents() {
4074	    var swiper = this;
4075	    var document = getDocument();
4076	    var params = swiper.params,
4077	        touchEvents = swiper.touchEvents,
4078	        el = swiper.el,
4079	        wrapperEl = swiper.wrapperEl,
4080	        device = swiper.device,
4081	        support = swiper.support;
4082	    swiper.onTouchStart = onTouchStart.bind(swiper);
4083	    swiper.onTouchMove = onTouchMove.bind(swiper);
4084	    swiper.onTouchEnd = onTouchEnd.bind(swiper);
4085	
4086	    if (params.cssMode) {
4087	      swiper.onScroll = onScroll.bind(swiper);
4088	    }
4089	
4090	    swiper.onClick = onClick.bind(swiper);
4091	    var capture = !!params.nested; // Touch Events
4092	
4093	    if (!support.touch && support.pointerEvents) {
4094	      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
4095	      document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
4096	      document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
4097	    } else {
4098	      if (support.touch) {
4099	        var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
4100	          passive: true,
4101	          capture: false
4102	        } : false;
4103	        el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
4104	        el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
4105	          passive: false,
4106	          capture: capture
4107	        } : capture);
4108	        el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
4109	
4110	        if (touchEvents.cancel) {
4111	          el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
4112	        }
4113	
4114	        if (!dummyEventAttached) {
4115	          document.addEventListener('touchstart', dummyEventListener);
4116	          dummyEventAttached = true;
4117	        }
4118	      }
4119	
4120	      if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
4121	        el.addEventListener('mousedown', swiper.onTouchStart, false);
4122	        document.addEventListener('mousemove', swiper.onTouchMove, capture);
4123	        document.addEventListener('mouseup', swiper.onTouchEnd, false);
4124	      }
4125	    } // Prevent Links Clicks
4126	
4127	
4128	    if (params.preventClicks || params.preventClicksPropagation) {
4129	      el.addEventListener('click', swiper.onClick, true);
4130	    }
4131	
4132	    if (params.cssMode) {
4133	      wrapperEl.addEventListener('scroll', swiper.onScroll);
4134	    } // Resize handler
4135	
4136	
4137	    if (params.updateOnWindowResize) {
4138	      swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
4139	    } else {
4140	      swiper.on('observerUpdate', onResize, true);
4141	    }
4142	  }
4143	
4144	  function detachEvents() {
4145	    var swiper = this;
4146	    var document = getDocument();
4147	    var params = swiper.params,
4148	        touchEvents = swiper.touchEvents,
4149	        el = swiper.el,
4150	        wrapperEl = swiper.wrapperEl,
4151	        device = swiper.device,
4152	        support = swiper.support;
4153	    var capture = !!params.nested; // Touch Events
4154	
4155	    if (!support.touch && support.pointerEvents) {
4156	      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
4157	      document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
4158	      document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
4159	    } else {
4160	      if (support.touch) {
4161	        var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
4162	          passive: true,
4163	          capture: false
4164	        } : false;
4165	        el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
4166	        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
4167	        el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
4168	
4169	        if (touchEvents.cancel) {
4170	          el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
4171	        }
4172	      }
4173	
4174	      if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
4175	        el.removeEventListener('mousedown', swiper.onTouchStart, false);
4176	        document.removeEventListener('mousemove', swiper.onTouchMove, capture);
4177	        document.removeEventListener('mouseup', swiper.onTouchEnd, false);
4178	      }
4179	    } // Prevent Links Clicks
4180	
4181	
4182	    if (params.preventClicks || params.preventClicksPropagation) {
4183	      el.removeEventListener('click', swiper.onClick, true);
4184	    }
4185	
4186	    if (params.cssMode) {
4187	      wrapperEl.removeEventListener('scroll', swiper.onScroll);
4188	    } // Resize handler
4189	
4190	
4191	    swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
4192	  }
4193	
4194	  var events = {
4195	    attachEvents: attachEvents,
4196	    detachEvents: detachEvents
4197	  };
4198	
4199	  function setBreakpoint() {
4200	    var swiper = this;
4201	    var activeIndex = swiper.activeIndex,
4202	        initialized = swiper.initialized,
4203	        _swiper$loopedSlides = swiper.loopedSlides,
4204	        loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
4205	        params = swiper.params,
4206	        $el = swiper.$el;
4207	    var breakpoints = params.breakpoints;
4208	    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
4209	
4210	    var breakpoint = swiper.getBreakpoint(breakpoints);
4211	
4212	    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
4213	      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
4214	
4215	      if (breakpointOnlyParams) {
4216	        ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
4217	          var paramValue = breakpointOnlyParams[param];
4218	          if (typeof paramValue === 'undefined') return;
4219	
4220	          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
4221	            breakpointOnlyParams[param] = 'auto';
4222	          } else if (param === 'slidesPerView') {
4223	            breakpointOnlyParams[param] = parseFloat(paramValue);
4224	          } else {
4225	            breakpointOnlyParams[param] = parseInt(paramValue, 10);
4226	          }
4227	        });
4228	      }
4229	
4230	      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
4231	      var wasMultiRow = params.slidesPerColumn > 1;
4232	      var isMultiRow = breakpointParams.slidesPerColumn > 1;
4233	
4234	      if (wasMultiRow && !isMultiRow) {
4235	        $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
4236	        swiper.emitContainerClasses();
4237	      } else if (!wasMultiRow && isMultiRow) {
4238	        $el.addClass(params.containerModifierClass + "multirow");
4239	
4240	        if (breakpointParams.slidesPerColumnFill === 'column') {
4241	          $el.addClass(params.containerModifierClass + "multirow-column");
4242	        }
4243	
4244	        swiper.emitContainerClasses();
4245	      }
4246	
4247	      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
4248	      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
4249	
4250	      if (directionChanged && initialized) {
4251	        swiper.changeDirection();
4252	      }
4253	
4254	      extend$1(swiper.params, breakpointParams);
4255	      extend$1(swiper, {
4256	        allowTouchMove: swiper.params.allowTouchMove,
4257	        allowSlideNext: swiper.params.allowSlideNext,
4258	        allowSlidePrev: swiper.params.allowSlidePrev
4259	      });
4260	      swiper.currentBreakpoint = breakpoint;
4261	      swiper.emit('_beforeBreakpoint', breakpointParams);
4262	
4263	      if (needsReLoop && initialized) {
4264	        swiper.loopDestroy();
4265	        swiper.loopCreate();
4266	        swiper.updateSlides();
4267	        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
4268	      }
4269	
4270	      swiper.emit('breakpoint', breakpointParams);
4271	    }
4272	  }
4273	
4274	  function getBreakpoints(breakpoints) {
4275	    var window = getWindow(); // Get breakpoint for window width
4276	
4277	    if (!breakpoints) return undefined;
4278	    var breakpoint = false;
4279	    var points = Object.keys(breakpoints).map(function (point) {
4280	      if (typeof point === 'string' && point.indexOf('@') === 0) {
4281	        var minRatio = parseFloat(point.substr(1));
4282	        var value = window.innerHeight * minRatio;
4283	        return {
4284	          value: value,
4285	          point: point
4286	        };
4287	      }
4288	
4289	      return {
4290	        value: point,
4291	        point: point
4292	      };
4293	    });
4294	    points.sort(function (a, b) {
4295	      return parseInt(a.value, 10) - parseInt(b.value, 10);
4296	    });
4297	
4298	    for (var i = 0; i < points.length; i += 1) {
4299	      var _points$i = points[i],
4300	          point = _points$i.point,
4301	          value = _points$i.value;
4302	
4303	      if (value <= window.innerWidth) {
4304	        breakpoint = point;
4305	      }
4306	    }
4307	
4308	    return breakpoint || 'max';
4309	  }
4310	
4311	  var breakpoints = {
4312	    setBreakpoint: setBreakpoint,
4313	    getBreakpoint: getBreakpoints
4314	  };
4315	
4316	  function addClasses() {
4317	    var swiper = this;
4318	    var classNames = swiper.classNames,
4319	        params = swiper.params,
4320	        rtl = swiper.rtl,
4321	        $el = swiper.$el,
4322	        device = swiper.device;
4323	    var suffixes = [];
4324	    suffixes.push('initialized');
4325	    suffixes.push(params.direction);
4326	
4327	    if (params.freeMode) {
4328	      suffixes.push('free-mode');
4329	    }
4330	
4331	    if (params.autoHeight) {
4332	      suffixes.push('autoheight');
4333	    }
4334	
4335	    if (rtl) {
4336	      suffixes.push('rtl');
4337	    }
4338	
4339	    if (params.slidesPerColumn > 1) {
4340	      suffixes.push('multirow');
4341	
4342	      if (params.slidesPerColumnFill === 'column') {
4343	        suffixes.push('multirow-column');
4344	      }
4345	    }
4346	
4347	    if (device.android) {
4348	      suffixes.push('android');
4349	    }
4350	
4351	    if (device.ios) {
4352	      suffixes.push('ios');
4353	    }
4354	
4355	    if (params.cssMode) {
4356	      suffixes.push('css-mode');
4357	    }
4358	
4359	    suffixes.forEach(function (suffix) {
4360	      classNames.push(params.containerModifierClass + suffix);
4361	    });
4362	    $el.addClass(classNames.join(' '));
4363	    swiper.emitContainerClasses();
4364	  }
4365	
4366	  function removeClasses() {
4367	    var swiper = this;
4368	    var $el = swiper.$el,
4369	        classNames = swiper.classNames;
4370	    $el.removeClass(classNames.join(' '));
4371	    swiper.emitContainerClasses();
4372	  }
4373	
4374	  var classes = {
4375	    addClasses: addClasses,
4376	    removeClasses: removeClasses
4377	  };
4378	
4379	  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
4380	    var window = getWindow();
4381	    var image;
4382	
4383	    function onReady() {
4384	      if (callback) callback();
4385	    }
4386	
4387	    var isPicture = $(imageEl).parent('picture')[0];
4388	
4389	    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
4390	      if (src) {
4391	        image = new window.Image();
4392	        image.onload = onReady;
4393	        image.onerror = onReady;
4394	
4395	        if (sizes) {
4396	          image.sizes = sizes;
4397	        }
4398	
4399	        if (srcset) {
4400	          image.srcset = srcset;
4401	        }
4402	
4403	        if (src) {
4404	          image.src = src;
4405	        }
4406	      } else {
4407	        onReady();
4408	      }
4409	    } else {
4410	      // image already loaded...
4411	      onReady();
4412	    }
4413	  }
4414	
4415	  function preloadImages() {
4416	    var swiper = this;
4417	    swiper.imagesToLoad = swiper.$el.find('img');
4418	
4419	    function onReady() {
4420	      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
4421	      if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
4422	
4423	      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
4424	        if (swiper.params.updateOnImagesReady) swiper.update();
4425	        swiper.emit('imagesReady');
4426	      }
4427	    }
4428	
4429	    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
4430	      var imageEl = swiper.imagesToLoad[i];
4431	      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
4432	    }
4433	  }
4434	
4435	  var images = {
4436	    loadImage: loadImage,
4437	    preloadImages: preloadImages
4438	  };
4439	
4440	  function checkOverflow() {
4441	    var swiper = this;
4442	    var params = swiper.params;
4443	    var wasLocked = swiper.isLocked;
4444	    var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
4445	
4446	    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
4447	      swiper.isLocked = lastSlidePosition <= swiper.size;
4448	    } else {
4449	      swiper.isLocked = swiper.snapGrid.length === 1;
4450	    }
4451	
4452	    swiper.allowSlideNext = !swiper.isLocked;
4453	    swiper.allowSlidePrev = !swiper.isLocked; // events
4454	
4455	    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
4456	
4457	    if (wasLocked && wasLocked !== swiper.isLocked) {
4458	      swiper.isEnd = false;
4459	      if (swiper.navigation) swiper.navigation.update();
4460	    }
4461	  }
4462	
4463	  var checkOverflow$1 = {
4464	    checkOverflow: checkOverflow
4465	  };
4466	
4467	  var defaults = {
4468	    init: true,
4469	    direction: 'horizontal',
4470	    touchEventsTarget: 'container',
4471	    initialSlide: 0,
4472	    speed: 300,
4473	    cssMode: false,
4474	    updateOnWindowResize: true,
4475	    // Overrides
4476	    width: null,
4477	    height: null,
4478	    //
4479	    preventInteractionOnTransition: false,
4480	    // ssr
4481	    userAgent: null,
4482	    url: null,
4483	    // To support iOS's swipe-to-go-back gesture (when being used in-app).
4484	    edgeSwipeDetection: false,
4485	    edgeSwipeThreshold: 20,
4486	    // Free mode
4487	    freeMode: false,
4488	    freeModeMomentum: true,
4489	    freeModeMomentumRatio: 1,
4490	    freeModeMomentumBounce: true,
4491	    freeModeMomentumBounceRatio: 1,
4492	    freeModeMomentumVelocityRatio: 1,
4493	    freeModeSticky: false,
4494	    freeModeMinimumVelocity: 0.02,
4495	    // Autoheight
4496	    autoHeight: false,
4497	    // Set wrapper width
4498	    setWrapperSize: false,
4499	    // Virtual Translate
4500	    virtualTranslate: false,
4501	    // Effects
4502	    effect: 'slide',
4503	    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
4504	    // Breakpoints
4505	    breakpoints: undefined,
4506	    // Slides grid
4507	    spaceBetween: 0,
4508	    slidesPerView: 1,
4509	    slidesPerColumn: 1,
4510	    slidesPerColumnFill: 'column',
4511	    slidesPerGroup: 1,
4512	    slidesPerGroupSkip: 0,
4513	    centeredSlides: false,
4514	    centeredSlidesBounds: false,
4515	    slidesOffsetBefore: 0,
4516	    // in px
4517	    slidesOffsetAfter: 0,
4518	    // in px
4519	    normalizeSlideIndex: true,
4520	    centerInsufficientSlides: false,
4521	    // Disable swiper and hide navigation when container not overflow
4522	    watchOverflow: false,
4523	    // Round length
4524	    roundLengths: false,
4525	    // Touches
4526	    touchRatio: 1,
4527	    touchAngle: 45,
4528	    simulateTouch: true,
4529	    shortSwipes: true,
4530	    longSwipes: true,
4531	    longSwipesRatio: 0.5,
4532	    longSwipesMs: 300,
4533	    followFinger: true,
4534	    allowTouchMove: true,
4535	    threshold: 0,
4536	    touchMoveStopPropagation: false,
4537	    touchStartPreventDefault: true,
4538	    touchStartForcePreventDefault: false,
4539	    touchReleaseOnEdges: false,
4540	    // Unique Navigation Elements
4541	    uniqueNavElements: true,
4542	    // Resistance
4543	    resistance: true,
4544	    resistanceRatio: 0.85,
4545	    // Progress
4546	    watchSlidesProgress: false,
4547	    watchSlidesVisibility: false,
4548	    // Cursor
4549	    grabCursor: false,
4550	    // Clicks
4551	    preventClicks: true,
4552	    preventClicksPropagation: true,
4553	    slideToClickedSlide: false,
4554	    // Images
4555	    preloadImages: true,
4556	    updateOnImagesReady: true,
4557	    // loop
4558	    loop: false,
4559	    loopAdditionalSlides: 0,
4560	    loopedSlides: null,
4561	    loopFillGroupWithBlank: false,
4562	    loopPreventsSlide: true,
4563	    // Swiping/no swiping
4564	    allowSlidePrev: true,
4565	    allowSlideNext: true,
4566	    swipeHandler: null,
4567	    // '.swipe-handler',
4568	    noSwiping: true,
4569	    noSwipingClass: 'swiper-no-swiping',
4570	    noSwipingSelector: null,
4571	    // Passive Listeners
4572	    passiveListeners: true,
4573	    // NS
4574	    containerModifierClass: 'swiper-container-',
4575	    // NEW
4576	    slideClass: 'swiper-slide',
4577	    slideBlankClass: 'swiper-slide-invisible-blank',
4578	    slideActiveClass: 'swiper-slide-active',
4579	    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
4580	    slideVisibleClass: 'swiper-slide-visible',
4581	    slideDuplicateClass: 'swiper-slide-duplicate',
4582	    slideNextClass: 'swiper-slide-next',
4583	    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
4584	    slidePrevClass: 'swiper-slide-prev',
4585	    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
4586	    wrapperClass: 'swiper-wrapper',
4587	    // Callbacks
4588	    runCallbacksOnInit: true,
4589	    // Internals
4590	    _emitClasses: false
4591	  };
4592	
4593	  var prototypes = {
4594	    modular: modular,
4595	    eventsEmitter: eventsEmitter,
4596	    update: update,
4597	    translate: translate,
4598	    transition: transition$1,
4599	    slide: slide,
4600	    loop: loop,
4601	    grabCursor: grabCursor,
4602	    manipulation: manipulation,
4603	    events: events,
4604	    breakpoints: breakpoints,
4605	    checkOverflow: checkOverflow$1,
4606	    classes: classes,
4607	    images: images
4608	  };
4609	  var extendedDefaults = {};
4610	
4611	  var Swiper = /*#__PURE__*/function () {
4612	    function Swiper() {
4613	      var el;
4614	      var params;
4615	
4616	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
4617	        args[_key] = arguments[_key];
4618	      }
4619	
4620	      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
4621	        params = args[0];
4622	      } else {
4623	        el = args[0];
4624	        params = args[1];
4625	      }
4626	
4627	      if (!params) params = {};
4628	      params = extend$1({}, params);
4629	      if (el && !params.el) params.el = el; // Swiper Instance
4630	
4631	      var swiper = this;
4632	      swiper.support = getSupport();
4633	      swiper.device = getDevice({
4634	        userAgent: params.userAgent
4635	      });
4636	      swiper.browser = getBrowser();
4637	      swiper.eventsListeners = {};
4638	      swiper.eventsAnyListeners = [];
4639	
4640	      if (typeof swiper.modules === 'undefined') {
4641	        swiper.modules = {};
4642	      }
4643	
4644	      Object.keys(swiper.modules).forEach(function (moduleName) {
4645	        var module = swiper.modules[moduleName];
4646	
4647	        if (module.params) {
4648	          var moduleParamName = Object.keys(module.params)[0];
4649	          var moduleParams = module.params[moduleParamName];
4650	          if (typeof moduleParams !== 'object' || moduleParams === null) return;
4651	          if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
4652	
4653	          if (params[moduleParamName] === true) {
4654	            params[moduleParamName] = {
4655	              enabled: true
4656	            };
4657	          }
4658	
4659	          if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
4660	            params[moduleParamName].enabled = true;
4661	          }
4662	
4663	          if (!params[moduleParamName]) params[moduleParamName] = {
4664	            enabled: false
4665	          };
4666	        }
4667	      }); // Extend defaults with modules params
4668	
4669	      var swiperParams = extend$1({}, defaults);
4670	      swiper.useParams(swiperParams); // Extend defaults with passed params
4671	
4672	      swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
4673	      swiper.originalParams = extend$1({}, swiper.params);
4674	      swiper.passedParams = extend$1({}, params); // add event listeners
4675	
4676	      if (swiper.params && swiper.params.on) {
4677	        Object.keys(swiper.params.on).forEach(function (eventName) {
4678	          swiper.on(eventName, swiper.params.on[eventName]);
4679	        });
4680	      }
4681	
4682	      if (swiper.params && swiper.params.onAny) {
4683	        swiper.onAny(swiper.params.onAny);
4684	      } // Save Dom lib
4685	
4686	
4687	      swiper.$ = $; // Find el
4688	
4689	      var $el = $(swiper.params.el);
4690	      el = $el[0];
4691	
4692	      if (!el) {
4693	        return undefined;
4694	      }
4695	
4696	      if ($el.length > 1) {
4697	        var swipers = [];
4698	        $el.each(function (containerEl) {
4699	          var newParams = extend$1({}, params, {
4700	            el: containerEl
4701	          });
4702	          swipers.push(new Swiper(newParams));
4703	        });
4704	        return swipers;
4705	      }
4706	
4707	      el.swiper = swiper; // Find Wrapper
4708	
4709	      var $wrapperEl;
4710	
4711	      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
4712	        $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items
4713	
4714	        $wrapperEl.children = function (options) {
4715	          return $el.children(options);
4716	        };
4717	      } else {
4718	        $wrapperEl = $el.children("." + swiper.params.wrapperClass);
4719	      } // Extend Swiper
4720	
4721	
4722	      extend$1(swiper, {
4723	        $el: $el,
4724	        el: el,
4725	        $wrapperEl: $wrapperEl,
4726	        wrapperEl: $wrapperEl[0],
4727	        // Classes
4728	        classNames: [],
4729	        // Slides
4730	        slides: $(),
4731	        slidesGrid: [],
4732	        snapGrid: [],
4733	        slidesSizesGrid: [],
4734	        // isDirection
4735	        isHorizontal: function isHorizontal() {
4736	          return swiper.params.direction === 'horizontal';
4737	        },
4738	        isVertical: function isVertical() {
4739	          return swiper.params.direction === 'vertical';
4740	        },
4741	        // RTL
4742	        rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
4743	        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
4744	        wrongRTL: $wrapperEl.css('display') === '-webkit-box',
4745	        // Indexes
4746	        activeIndex: 0,
4747	        realIndex: 0,
4748	        //
4749	        isBeginning: true,
4750	        isEnd: false,
4751	        // Props
4752	        translate: 0,
4753	        previousTranslate: 0,
4754	        progress: 0,
4755	        velocity: 0,
4756	        animating: false,
4757	        // Locks
4758	        allowSlideNext: swiper.params.allowSlideNext,
4759	        allowSlidePrev: swiper.params.allowSlidePrev,
4760	        // Touch Events
4761	        touchEvents: function touchEvents() {
4762	          var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
4763	          var desktop = ['mousedown', 'mousemove', 'mouseup'];
4764	
4765	          if (swiper.support.pointerEvents) {
4766	            desktop = ['pointerdown', 'pointermove', 'pointerup'];
4767	          }
4768	
4769	          swiper.touchEventsTouch = {
4770	            start: touch[0],
4771	            move: touch[1],
4772	            end: touch[2],
4773	            cancel: touch[3]
4774	          };
4775	          swiper.touchEventsDesktop = {
4776	            start: desktop[0],
4777	            move: desktop[1],
4778	            end: desktop[2]
4779	          };
4780	          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
4781	        }(),
4782	        touchEventsData: {
4783	          isTouched: undefined,
4784	          isMoved: undefined,
4785	          allowTouchCallbacks: undefined,
4786	          touchStartTime: undefined,
4787	          isScrolling: undefined,
4788	          currentTranslate: undefined,
4789	          startTranslate: undefined,
4790	          allowThresholdMove: undefined,
4791	          // Form elements to match
4792	          formElements: 'input, select, option, textarea, button, video, label',
4793	          // Last click time
4794	          lastClickTime: now(),
4795	          clickTimeout: undefined,
4796	          // Velocities
4797	          velocities: [],
4798	          allowMomentumBounce: undefined,
4799	          isTouchEvent: undefined,
4800	          startMoving: undefined
4801	        },
4802	        // Clicks
4803	        allowClick: true,
4804	        // Touches
4805	        allowTouchMove: swiper.params.allowTouchMove,
4806	        touches: {
4807	          startX: 0,
4808	          startY: 0,
4809	          currentX: 0,
4810	          currentY: 0,
4811	          diff: 0
4812	        },
4813	        // Images
4814	        imagesToLoad: [],
4815	        imagesLoaded: 0
4816	      }); // Install Modules
4817	
4818	      swiper.useModules();
4819	      swiper.emit('_swiper'); // Init
4820	
4821	      if (swiper.params.init) {
4822	        swiper.init();
4823	      } // Return app instance
4824	
4825	
4826	      return swiper;
4827	    }
4828	
4829	    var _proto = Swiper.prototype;
4830	
4831	    _proto.emitContainerClasses = function emitContainerClasses() {
4832	      var swiper = this;
4833	      if (!swiper.params._emitClasses || !swiper.el) return;
4834	      var classes = swiper.el.className.split(' ').filter(function (className) {
4835	        return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
4836	      });
4837	      swiper.emit('_containerClasses', classes.join(' '));
4838	    };
4839	
4840	    _proto.emitSlidesClasses = function emitSlidesClasses() {
4841	      var swiper = this;
4842	      if (!swiper.params._emitClasses || !swiper.el) return;
4843	      swiper.slides.each(function (slideEl) {
4844	        var classes = slideEl.className.split(' ').filter(function (className) {
4845	          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
4846	        });
4847	        swiper.emit('_slideClass', slideEl, classes.join(' '));
4848	      });
4849	    };
4850	
4851	    _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
4852	      var swiper = this;
4853	      var params = swiper.params,
4854	          slides = swiper.slides,
4855	          slidesGrid = swiper.slidesGrid,
4856	          swiperSize = swiper.size,
4857	          activeIndex = swiper.activeIndex;
4858	      var spv = 1;
4859	
4860	      if (params.centeredSlides) {
4861	        var slideSize = slides[activeIndex].swiperSlideSize;
4862	        var breakLoop;
4863	
4864	        for (var i = activeIndex + 1; i < slides.length; i += 1) {
4865	          if (slides[i] && !breakLoop) {
4866	            slideSize += slides[i].swiperSlideSize;
4867	            spv += 1;
4868	            if (slideSize > swiperSize) breakLoop = true;
4869	          }
4870	        }
4871	
4872	        for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
4873	          if (slides[_i] && !breakLoop) {
4874	            slideSize += slides[_i].swiperSlideSize;
4875	            spv += 1;
4876	            if (slideSize > swiperSize) breakLoop = true;
4877	          }
4878	        }
4879	      } else {
4880	        for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
4881	          if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
4882	            spv += 1;
4883	          }
4884	        }
4885	      }
4886	
4887	      return spv;
4888	    };
4889	
4890	    _proto.update = function update() {
4891	      var swiper = this;
4892	      if (!swiper || swiper.destroyed) return;
4893	      var snapGrid = swiper.snapGrid,
4894	          params = swiper.params; // Breakpoints
4895	
4896	      if (params.breakpoints) {
4897	        swiper.setBreakpoint();
4898	      }
4899	
4900	      swiper.updateSize();
4901	      swiper.updateSlides();
4902	      swiper.updateProgress();
4903	      swiper.updateSlidesClasses();
4904	
4905	      function setTranslate() {
4906	        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
4907	        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
4908	        swiper.setTranslate(newTranslate);
4909	        swiper.updateActiveIndex();
4910	        swiper.updateSlidesClasses();
4911	      }
4912	
4913	      var translated;
4914	
4915	      if (swiper.params.freeMode) {
4916	        setTranslate();
4917	
4918	        if (swiper.params.autoHeight) {
4919	          swiper.updateAutoHeight();
4920	        }
4921	      } else {
4922	        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
4923	          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
4924	        } else {
4925	          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
4926	        }
4927	
4928	        if (!translated) {
4929	          setTranslate();
4930	        }
4931	      }
4932	
4933	      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
4934	        swiper.checkOverflow();
4935	      }
4936	
4937	      swiper.emit('update');
4938	    };
4939	
4940	    _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
4941	      if (needUpdate === void 0) {
4942	        needUpdate = true;
4943	      }
4944	
4945	      var swiper = this;
4946	      var currentDirection = swiper.params.direction;
4947	
4948	      if (!newDirection) {
4949	        // eslint-disable-next-line
4950	        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
4951	      }
4952	
4953	      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
4954	        return swiper;
4955	      }
4956	
4957	      swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
4958	      swiper.emitContainerClasses();
4959	      swiper.params.direction = newDirection;
4960	      swiper.slides.each(function (slideEl) {
4961	        if (newDirection === 'vertical') {
4962	          slideEl.style.width = '';
4963	        } else {
4964	          slideEl.style.height = '';
4965	        }
4966	      });
4967	      swiper.emit('changeDirection');
4968	      if (needUpdate) swiper.update();
4969	      return swiper;
4970	    };
4971	
4972	    _proto.init = function init() {
4973	      var swiper = this;
4974	      if (swiper.initialized) return;
4975	      swiper.emit('beforeInit'); // Set breakpoint
4976	
4977	      if (swiper.params.breakpoints) {
4978	        swiper.setBreakpoint();
4979	      } // Add Classes
4980	
4981	
4982	      swiper.addClasses(); // Create loop
4983	
4984	      if (swiper.params.loop) {
4985	        swiper.loopCreate();
4986	      } // Update size
4987	
4988	
4989	      swiper.updateSize(); // Update slides
4990	
4991	      swiper.updateSlides();
4992	
4993	      if (swiper.params.watchOverflow) {
4994	        swiper.checkOverflow();
4995	      } // Set Grab Cursor
4996	
4997	
4998	      if (swiper.params.grabCursor) {
4999	        swiper.setGrabCursor();
5000	      }
5001	
5002	      if (swiper.params.preloadImages) {
5003	        swiper.preloadImages();
5004	      } // Slide To Initial Slide
5005	
5006	
5007	      if (swiper.params.loop) {
5008	        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
5009	      } else {
5010	        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
5011	      } // Attach events
5012	
5013	
5014	      swiper.attachEvents(); // Init Flag
5015	
5016	      swiper.initialized = true; // Emit
5017	
5018	      swiper.emit('init');
5019	    };
5020	
5021	    _proto.destroy = function destroy(deleteInstance, cleanStyles) {
5022	      if (deleteInstance === void 0) {
5023	        deleteInstance = true;
5024	      }
5025	
5026	      if (cleanStyles === void 0) {
5027	        cleanStyles = true;
5028	      }
5029	
5030	      var swiper = this;
5031	      var params = swiper.params,
5032	          $el = swiper.$el,
5033	          $wrapperEl = swiper.$wrapperEl,
5034	          slides = swiper.slides;
5035	
5036	      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
5037	        return null;
5038	      }
5039	
5040	      swiper.emit('beforeDestroy'); // Init Flag
5041	
5042	      swiper.initialized = false; // Detach events
5043	
5044	      swiper.detachEvents(); // Destroy loop
5045	
5046	      if (params.loop) {
5047	        swiper.loopDestroy();
5048	      } // Cleanup styles
5049	
5050	
5051	      if (cleanStyles) {
5052	        swiper.removeClasses();
5053	        $el.removeAttr('style');
5054	        $wrapperEl.removeAttr('style');
5055	
5056	        if (slides && slides.length) {
5057	          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
5058	        }
5059	      }
5060	
5061	      swiper.emit('destroy'); // Detach emitter events
5062	
5063	      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
5064	        swiper.off(eventName);
5065	      });
5066	
5067	      if (deleteInstance !== false) {
5068	        swiper.$el[0].swiper = null;
5069	        deleteProps(swiper);
5070	      }
5071	
5072	      swiper.destroyed = true;
5073	      return null;
5074	    };
5075	
5076	    Swiper.extendDefaults = function extendDefaults(newDefaults) {
5077	      extend$1(extendedDefaults, newDefaults);
5078	    };
5079	
5080	    Swiper.installModule = function installModule(module) {
5081	      if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
5082	      var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
5083	      Swiper.prototype.modules[name] = module;
5084	    };
5085	
5086	    Swiper.use = function use(module) {
5087	      if (Array.isArray(module)) {
5088	        module.forEach(function (m) {
5089	          return Swiper.installModule(m);
5090	        });
5091	        return Swiper;
5092	      }
5093	
5094	      Swiper.installModule(module);
5095	      return Swiper;
5096	    };
5097	
5098	    _createClass(Swiper, null, [{
5099	      key: "extendedDefaults",
5100	      get: function get() {
5101	        return extendedDefaults;
5102	      }
5103	    }, {
5104	      key: "defaults",
5105	      get: function get() {
5106	        return defaults;
5107	      }
5108	    }]);
5109	
5110	    return Swiper;
5111	  }();
5112	
5113	  Object.keys(prototypes).forEach(function (prototypeGroup) {
5114	    Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
5115	      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
5116	    });
5117	  });
5118	  Swiper.use([Resize, Observer$1]);
5119	
5120	  var Virtual = {
5121	    update: function update(force) {
5122	      var swiper = this;
5123	      var _swiper$params = swiper.params,
5124	          slidesPerView = _swiper$params.slidesPerView,
5125	          slidesPerGroup = _swiper$params.slidesPerGroup,
5126	          centeredSlides = _swiper$params.centeredSlides;
5127	      var _swiper$params$virtua = swiper.params.virtual,
5128	          addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
5129	          addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
5130	      var _swiper$virtual = swiper.virtual,
5131	          previousFrom = _swiper$virtual.from,
5132	          previousTo = _swiper$virtual.to,
5133	          slides = _swiper$virtual.slides,
5134	          previousSlidesGrid = _swiper$virtual.slidesGrid,
5135	          renderSlide = _swiper$virtual.renderSlide,
5136	          previousOffset = _swiper$virtual.offset;
5137	      swiper.updateActiveIndex();
5138	      var activeIndex = swiper.activeIndex || 0;
5139	      var offsetProp;
5140	      if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
5141	      var slidesAfter;
5142	      var slidesBefore;
5143	
5144	      if (centeredSlides) {
5145	        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
5146	        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
5147	      } else {
5148	        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
5149	        slidesBefore = slidesPerGroup + addSlidesBefore;
5150	      }
5151	
5152	      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
5153	      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
5154	      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
5155	      extend$1(swiper.virtual, {
5156	        from: from,
5157	        to: to,
5158	        offset: offset,
5159	        slidesGrid: swiper.slidesGrid
5160	      });
5161	
5162	      function onRendered() {
5163	        swiper.updateSlides();
5164	        swiper.updateProgress();
5165	        swiper.updateSlidesClasses();
5166	
5167	        if (swiper.lazy && swiper.params.lazy.enabled) {
5168	          swiper.lazy.load();
5169	        }
5170	      }
5171	
5172	      if (previousFrom === from && previousTo === to && !force) {
5173	        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
5174	          swiper.slides.css(offsetProp, offset + "px");
5175	        }
5176	
5177	        swiper.updateProgress();
5178	        return;
5179	      }
5180	
5181	      if (swiper.params.virtual.renderExternal) {
5182	        swiper.params.virtual.renderExternal.call(swiper, {
5183	          offset: offset,
5184	          from: from,
5185	          to: to,
5186	          slides: function getSlides() {
5187	            var slidesToRender = [];
5188	
5189	            for (var i = from; i <= to; i += 1) {
5190	              slidesToRender.push(slides[i]);
5191	            }
5192	
5193	            return slidesToRender;
5194	          }()
5195	        });
5196	
5197	        if (swiper.params.virtual.renderExternalUpdate) {
5198	          onRendered();
5199	        }
5200	
5201	        return;
5202	      }
5203	
5204	      var prependIndexes = [];
5205	      var appendIndexes = [];
5206	
5207	      if (force) {
5208	        swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
5209	      } else {
5210	        for (var i = previousFrom; i <= previousTo; i += 1) {
5211	          if (i < from || i > to) {
5212	            swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
5213	          }
5214	        }
5215	      }
5216	
5217	      for (var _i = 0; _i < slides.length; _i += 1) {
5218	        if (_i >= from && _i <= to) {
5219	          if (typeof previousTo === 'undefined' || force) {
5220	            appendIndexes.push(_i);
5221	          } else {
5222	            if (_i > previousTo) appendIndexes.push(_i);
5223	            if (_i < previousFrom) prependIndexes.push(_i);
5224	          }
5225	        }
5226	      }
5227	
5228	      appendIndexes.forEach(function (index) {
5229	        swiper.$wrapperEl.append(renderSlide(slides[index], index));
5230	      });
5231	      prependIndexes.sort(function (a, b) {
5232	        return b - a;
5233	      }).forEach(function (index) {
5234	        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
5235	      });
5236	      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
5237	      onRendered();
5238	    },
5239	    renderSlide: function renderSlide(slide, index) {
5240	      var swiper = this;
5241	      var params = swiper.params.virtual;
5242	
5243	      if (params.cache && swiper.virtual.cache[index]) {
5244	        return swiper.virtual.cache[index];
5245	      }
5246	
5247	      var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
5248	      if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
5249	      if (params.cache) swiper.virtual.cache[index] = $slideEl;
5250	      return $slideEl;
5251	    },
5252	    appendSlide: function appendSlide(slides) {
5253	      var swiper = this;
5254	
5255	      if (typeof slides === 'object' && 'length' in slides) {
5256	        for (var i = 0; i < slides.length; i += 1) {
5257	          if (slides[i]) swiper.virtual.slides.push(slides[i]);
5258	        }
5259	      } else {
5260	        swiper.virtual.slides.push(slides);
5261	      }
5262	
5263	      swiper.virtual.update(true);
5264	    },
5265	    prependSlide: function prependSlide(slides) {
5266	      var swiper = this;
5267	      var activeIndex = swiper.activeIndex;
5268	      var newActiveIndex = activeIndex + 1;
5269	      var numberOfNewSlides = 1;
5270	
5271	      if (Array.isArray(slides)) {
5272	        for (var i = 0; i < slides.length; i += 1) {
5273	          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
5274	        }
5275	
5276	        newActiveIndex = activeIndex + slides.length;
5277	        numberOfNewSlides = slides.length;
5278	      } else {
5279	        swiper.virtual.slides.unshift(slides);
5280	      }
5281	
5282	      if (swiper.params.virtual.cache) {
5283	        var cache = swiper.virtual.cache;
5284	        var newCache = {};
5285	        Object.keys(cache).forEach(function (cachedIndex) {
5286	          var $cachedEl = cache[cachedIndex];
5287	          var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
5288	
5289	          if (cachedElIndex) {
5290	            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
5291	          }
5292	
5293	          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
5294	        });
5295	        swiper.virtual.cache = newCache;
5296	      }
5297	
5298	      swiper.virtual.update(true);
5299	      swiper.slideTo(newActiveIndex, 0);
5300	    },
5301	    removeSlide: function removeSlide(slidesIndexes) {
5302	      var swiper = this;
5303	      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
5304	      var activeIndex = swiper.activeIndex;
5305	
5306	      if (Array.isArray(slidesIndexes)) {
5307	        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
5308	          swiper.virtual.slides.splice(slidesIndexes[i], 1);
5309	
5310	          if (swiper.params.virtual.cache) {
5311	            delete swiper.virtual.cache[slidesIndexes[i]];
5312	          }
5313	
5314	          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
5315	          activeIndex = Math.max(activeIndex, 0);
5316	        }
5317	      } else {
5318	        swiper.virtual.slides.splice(slidesIndexes, 1);
5319	
5320	        if (swiper.params.virtual.cache) {
5321	          delete swiper.virtual.cache[slidesIndexes];
5322	        }
5323	
5324	        if (slidesIndexes < activeIndex) activeIndex -= 1;
5325	        activeIndex = Math.max(activeIndex, 0);
5326	      }
5327	
5328	      swiper.virtual.update(true);
5329	      swiper.slideTo(activeIndex, 0);
5330	    },
5331	    removeAllSlides: function removeAllSlides() {
5332	      var swiper = this;
5333	      swiper.virtual.slides = [];
5334	
5335	      if (swiper.params.virtual.cache) {
5336	        swiper.virtual.cache = {};
5337	      }
5338	
5339	      swiper.virtual.update(true);
5340	      swiper.slideTo(0, 0);
5341	    }
5342	  };
5343	  var Virtual$1 = {
5344	    name: 'virtual',
5345	    params: {
5346	      virtual: {
5347	        enabled: false,
5348	        slides: [],
5349	        cache: true,
5350	        renderSlide: null,
5351	        renderExternal: null,
5352	        renderExternalUpdate: true,
5353	        addSlidesBefore: 0,
5354	        addSlidesAfter: 0
5355	      }
5356	    },
5357	    create: function create() {
5358	      var swiper = this;
5359	      bindModuleMethods(swiper, {
5360	        virtual: _extends(_extends({}, Virtual), {}, {
5361	          slides: swiper.params.virtual.slides,
5362	          cache: {}
5363	        })
5364	      });
5365	    },
5366	    on: {
5367	      beforeInit: function beforeInit(swiper) {
5368	        if (!swiper.params.virtual.enabled) return;
5369	        swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
5370	        var overwriteParams = {
5371	          watchSlidesProgress: true
5372	        };
5373	        extend$1(swiper.params, overwriteParams);
5374	        extend$1(swiper.originalParams, overwriteParams);
5375	
5376	        if (!swiper.params.initialSlide) {
5377	          swiper.virtual.update();
5378	        }
5379	      },
5380	      setTranslate: function setTranslate(swiper) {
5381	        if (!swiper.params.virtual.enabled) return;
5382	        swiper.virtual.update();
5383	      }
5384	    }
5385	  };
5386	
5387	  var Keyboard = {
5388	    handle: function handle(event) {
5389	      var swiper = this;
5390	      var window = getWindow();
5391	      var document = getDocument();
5392	      var rtl = swiper.rtlTranslate;
5393	      var e = event;
5394	      if (e.originalEvent) e = e.originalEvent; // jquery fix
5395	
5396	      var kc = e.keyCode || e.charCode;
5397	      var pageUpDown = swiper.params.keyboard.pageUpDown;
5398	      var isPageUp = pageUpDown && kc === 33;
5399	      var isPageDown = pageUpDown && kc === 34;
5400	      var isArrowLeft = kc === 37;
5401	      var isArrowRight = kc === 39;
5402	      var isArrowUp = kc === 38;
5403	      var isArrowDown = kc === 40; // Directions locks
5404	
5405	      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
5406	        return false;
5407	      }
5408	
5409	      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
5410	        return false;
5411	      }
5412	
5413	      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
5414	        return undefined;
5415	      }
5416	
5417	      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
5418	        return undefined;
5419	      }
5420	
5421	      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
5422	        var inView = false; // Check that swiper should be inside of visible area of window
5423	
5424	        if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
5425	          return undefined;
5426	        }
5427	
5428	        var windowWidth = window.innerWidth;
5429	        var windowHeight = window.innerHeight;
5430	        var swiperOffset = swiper.$el.offset();
5431	        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
5432	        var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
5433	
5434	        for (var i = 0; i < swiperCoord.length; i += 1) {
5435	          var point = swiperCoord[i];
5436	
5437	          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
5438	            inView = true;
5439	          }
5440	        }
5441	
5442	        if (!inView) return undefined;
5443	      }
5444	
5445	      if (swiper.isHorizontal()) {
5446	        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
5447	          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
5448	        }
5449	
5450	        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
5451	        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
5452	      } else {
5453	        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
5454	          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
5455	        }
5456	
5457	        if (isPageDown || isArrowDown) swiper.slideNext();
5458	        if (isPageUp || isArrowUp) swiper.slidePrev();
5459	      }
5460	
5461	      swiper.emit('keyPress', kc);
5462	      return undefined;
5463	    },
5464	    enable: function enable() {
5465	      var swiper = this;
5466	      var document = getDocument();
5467	      if (swiper.keyboard.enabled) return;
5468	      $(document).on('keydown', swiper.keyboard.handle);
5469	      swiper.keyboard.enabled = true;
5470	    },
5471	    disable: function disable() {
5472	      var swiper = this;
5473	      var document = getDocument();
5474	      if (!swiper.keyboard.enabled) return;
5475	      $(document).off('keydown', swiper.keyboard.handle);
5476	      swiper.keyboard.enabled = false;
5477	    }
5478	  };
5479	  var Keyboard$1 = {
5480	    name: 'keyboard',
5481	    params: {
5482	      keyboard: {
5483	        enabled: false,
5484	        onlyInViewport: true,
5485	        pageUpDown: true
5486	      }
5487	    },
5488	    create: function create() {
5489	      var swiper = this;
5490	      bindModuleMethods(swiper, {
5491	        keyboard: _extends({
5492	          enabled: false
5493	        }, Keyboard)
5494	      });
5495	    },
5496	    on: {
5497	      init: function init(swiper) {
5498	        if (swiper.params.keyboard.enabled) {
5499	          swiper.keyboard.enable();
5500	        }
5501	      },
5502	      destroy: function destroy(swiper) {
5503	        if (swiper.keyboard.enabled) {
5504	          swiper.keyboard.disable();
5505	        }
5506	      }
5507	    }
5508	  };
5509	
5510	  function isEventSupported() {
5511	    var document = getDocument();
5512	    var eventName = 'onwheel';
5513	    var isSupported = (eventName in document);
5514	
5515	    if (!isSupported) {
5516	      var element = document.createElement('div');
5517	      element.setAttribute(eventName, 'return;');
5518	      isSupported = typeof element[eventName] === 'function';
5519	    }
5520	
5521	    if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
5522	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
5523	    document.implementation.hasFeature('', '') !== true) {
5524	      // This is the only way to test support for the `wheel` event in IE9+.
5525	      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
5526	    }
5527	
5528	    return isSupported;
5529	  }
5530	
5531	  var Mousewheel = {
5532	    lastScrollTime: now(),
5533	    lastEventBeforeSnap: undefined,
5534	    recentWheelEvents: [],
5535	    event: function event() {
5536	      var window = getWindow();
5537	      if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
5538	      return isEventSupported() ? 'wheel' : 'mousewheel';
5539	    },
5540	    normalize: function normalize(e) {
5541	      // Reasonable defaults
5542	      var PIXEL_STEP = 10;
5543	      var LINE_HEIGHT = 40;
5544	      var PAGE_HEIGHT = 800;
5545	      var sX = 0;
5546	      var sY = 0; // spinX, spinY
5547	
5548	      var pX = 0;
5549	      var pY = 0; // pixelX, pixelY
5550	      // Legacy
5551	
5552	      if ('detail' in e) {
5553	        sY = e.detail;
5554	      }
5555	
5556	      if ('wheelDelta' in e) {
5557	        sY = -e.wheelDelta / 120;
5558	      }
5559	
5560	      if ('wheelDeltaY' in e) {
5561	        sY = -e.wheelDeltaY / 120;
5562	      }
5563	
5564	      if ('wheelDeltaX' in e) {
5565	        sX = -e.wheelDeltaX / 120;
5566	      } // side scrolling on FF with DOMMouseScroll
5567	
5568	
5569	      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
5570	        sX = sY;
5571	        sY = 0;
5572	      }
5573	
5574	      pX = sX * PIXEL_STEP;
5575	      pY = sY * PIXEL_STEP;
5576	
5577	      if ('deltaY' in e) {
5578	        pY = e.deltaY;
5579	      }
5580	
5581	      if ('deltaX' in e) {
5582	        pX = e.deltaX;
5583	      }
5584	
5585	      if (e.shiftKey && !pX) {
5586	        // if user scrolls with shift he wants horizontal scroll
5587	        pX = pY;
5588	        pY = 0;
5589	      }
5590	
5591	      if ((pX || pY) && e.deltaMode) {
5592	        if (e.deltaMode === 1) {
5593	          // delta in LINE units
5594	          pX *= LINE_HEIGHT;
5595	          pY *= LINE_HEIGHT;
5596	        } else {
5597	          // delta in PAGE units
5598	          pX *= PAGE_HEIGHT;
5599	          pY *= PAGE_HEIGHT;
5600	        }
5601	      } // Fall-back if spin cannot be determined
5602	
5603	
5604	      if (pX && !sX) {
5605	        sX = pX < 1 ? -1 : 1;
5606	      }
5607	
5608	      if (pY && !sY) {
5609	        sY = pY < 1 ? -1 : 1;
5610	      }
5611	
5612	      return {
5613	        spinX: sX,
5614	        spinY: sY,
5615	        pixelX: pX,
5616	        pixelY: pY
5617	      };
5618	    },
5619	    handleMouseEnter: function handleMouseEnter() {
5620	      var swiper = this;
5621	      swiper.mouseEntered = true;
5622	    },
5623	    handleMouseLeave: function handleMouseLeave() {
5624	      var swiper = this;
5625	      swiper.mouseEntered = false;
5626	    },
5627	    handle: function handle(event) {
5628	      var e = event;
5629	      var swiper = this;
5630	      var params = swiper.params.mousewheel;
5631	
5632	      if (swiper.params.cssMode) {
5633	        e.preventDefault();
5634	      }
5635	
5636	      var target = swiper.$el;
5637	
5638	      if (swiper.params.mousewheel.eventsTarget !== 'container') {
5639	        target = $(swiper.params.mousewheel.eventsTarget);
5640	      }
5641	
5642	      if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
5643	      if (e.originalEvent) e = e.originalEvent; // jquery fix
5644	
5645	      var delta = 0;
5646	      var rtlFactor = swiper.rtlTranslate ? -1 : 1;
5647	      var data = Mousewheel.normalize(e);
5648	
5649	      if (params.forceToAxis) {
5650	        if (swiper.isHorizontal()) {
5651	          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
5652	        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
5653	      } else {
5654	        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
5655	      }
5656	
5657	      if (delta === 0) return true;
5658	      if (params.invert) delta = -delta;
5659	
5660	      if (!swiper.params.freeMode) {
5661	        // Register the new event in a variable which stores the relevant data
5662	        var newEvent = {
5663	          time: now(),
5664	          delta: Math.abs(delta),
5665	          direction: Math.sign(delta),
5666	          raw: event
5667	        }; // Keep the most recent events
5668	
5669	        var recentWheelEvents = swiper.mousewheel.recentWheelEvents;
5670	
5671	        if (recentWheelEvents.length >= 2) {
5672	          recentWheelEvents.shift(); // only store the last N events
5673	        }
5674	
5675	        var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
5676	        recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
5677	        //   If direction has changed or
5678	        //   if the scroll is quicker than the previous one:
5679	        //     Animate the slider.
5680	        // Else (this is the first time the wheel is moved):
5681	        //     Animate the slider.
5682	
5683	        if (prevEvent) {
5684	          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
5685	            swiper.mousewheel.animateSlider(newEvent);
5686	          }
5687	        } else {
5688	          swiper.mousewheel.animateSlider(newEvent);
5689	        } // If it's time to release the scroll:
5690	        //   Return now so you don't hit the preventDefault.
5691	
5692	
5693	        if (swiper.mousewheel.releaseScroll(newEvent)) {
5694	          return true;
5695	        }
5696	      } else {
5697	        // Freemode or scrollContainer:
5698	        // If we recently snapped after a momentum scroll, then ignore wheel events
5699	        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
5700	        // or if it's a new scroll (larger delta or inverse sign as last event before
5701	        // an end-of-momentum snap).
5702	        var _newEvent = {
5703	          time: now(),
5704	          delta: Math.abs(delta),
5705	          direction: Math.sign(delta)
5706	        };
5707	        var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
5708	        var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;
5709	
5710	        if (!ignoreWheelEvents) {
5711	          swiper.mousewheel.lastEventBeforeSnap = undefined;
5712	
5713	          if (swiper.params.loop) {
5714	            swiper.loopFix();
5715	          }
5716	
5717	          var position = swiper.getTranslate() + delta * params.sensitivity;
5718	          var wasBeginning = swiper.isBeginning;
5719	          var wasEnd = swiper.isEnd;
5720	          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
5721	          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
5722	          swiper.setTransition(0);
5723	          swiper.setTranslate(position);
5724	          swiper.updateProgress();
5725	          swiper.updateActiveIndex();
5726	          swiper.updateSlidesClasses();
5727	
5728	          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
5729	            swiper.updateSlidesClasses();
5730	          }
5731	
5732	          if (swiper.params.freeModeSticky) {
5733	            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
5734	            // the end of a momentum scroll by storing recent (N=15?) wheel events.
5735	            // 1. do all N events have decreasing or same (absolute value) delta?
5736	            // 2. did all N events arrive in the last M (M=500?) msecs?
5737	            // 3. does the earliest event have an (absolute value) delta that's
5738	            //    at least P (P=1?) larger than the most recent event's delta?
5739	            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
5740	            // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
5741	            // Snap immediately and ignore remaining wheel events in this scroll.
5742	            // See comment above for "remaining wheel events in this scroll" determination.
5743	            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
5744	            clearTimeout(swiper.mousewheel.timeout);
5745	            swiper.mousewheel.timeout = undefined;
5746	            var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;
5747	
5748	            if (_recentWheelEvents.length >= 15) {
5749	              _recentWheelEvents.shift(); // only store the last N events
5750	
5751	            }
5752	
5753	            var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;
5754	
5755	            var firstEvent = _recentWheelEvents[0];
5756	
5757	            _recentWheelEvents.push(_newEvent);
5758	
5759	            if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
5760	              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
5761	              _recentWheelEvents.splice(0);
5762	            } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
5763	              // We're at the end of the deceleration of a momentum scroll, so there's no need
5764	              // to wait for more events. Snap ASAP on the next tick.
5765	              // Also, because there's some remaining momentum we'll bias the snap in the
5766	              // direction of the ongoing scroll because it's better UX for the scroll to snap
5767	              // in the same direction as the scroll instead of reversing to snap.  Therefore,
5768	              // if it's already scrolled more than 20% in the current direction, keep going.
5769	              var snapToThreshold = delta > 0 ? 0.8 : 0.2;
5770	              swiper.mousewheel.lastEventBeforeSnap = _newEvent;
5771	
5772	              _recentWheelEvents.splice(0);
5773	
5774	              swiper.mousewheel.timeout = nextTick(function () {
5775	                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
5776	              }, 0); // no delay; move on next tick
5777	            }
5778	
5779	            if (!swiper.mousewheel.timeout) {
5780	              // if we get here, then we haven't detected the end of a momentum scroll, so
5781	              // we'll consider a scroll "complete" when there haven't been any wheel events
5782	              // for 500ms.
5783	              swiper.mousewheel.timeout = nextTick(function () {
5784	                var snapToThreshold = 0.5;
5785	                swiper.mousewheel.lastEventBeforeSnap = _newEvent;
5786	
5787	                _recentWheelEvents.splice(0);
5788	
5789	                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
5790	              }, 500);
5791	            }
5792	          } // Emit event
5793	
5794	
5795	          if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay
5796	
5797	          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
5798	
5799	          if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
5800	        }
5801	      }
5802	
5803	      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
5804	      return false;
5805	    },
5806	    animateSlider: function animateSlider(newEvent) {
5807	      var swiper = this;
5808	      var window = getWindow();
5809	
5810	      if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
5811	        // Prevent if delta of wheel scroll delta is below configured threshold
5812	        return false;
5813	      }
5814	
5815	      if (this.params.mousewheel.thresholdTime && now() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
5816	        // Prevent if time between scrolls is below configured threshold
5817	        return false;
5818	      } // If the movement is NOT big enough and
5819	      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
5820	      //   Don't go any further (avoid insignificant scroll movement).
5821	
5822	
5823	      if (newEvent.delta >= 6 && now() - swiper.mousewheel.lastScrollTime < 60) {
5824	        // Return false as a default
5825	        return true;
5826	      } // If user is scrolling towards the end:
5827	      //   If the slider hasn't hit the latest slide or
5828	      //   if the slider is a loop and
5829	      //   if the slider isn't moving right now:
5830	      //     Go to next slide and
5831	      //     emit a scroll event.
5832	      // Else (the user is scrolling towards the beginning) and
5833	      // if the slider hasn't hit the first slide or
5834	      // if the slider is a loop and
5835	      // if the slider isn't moving right now:
5836	      //   Go to prev slide and
5837	      //   emit a scroll event.
5838	
5839	
5840	      if (newEvent.direction < 0) {
5841	        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
5842	          swiper.slideNext();
5843	          swiper.emit('scroll', newEvent.raw);
5844	        }
5845	      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
5846	        swiper.slidePrev();
5847	        swiper.emit('scroll', newEvent.raw);
5848	      } // If you got here is because an animation has been triggered so store the current time
5849	
5850	
5851	      swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default
5852	
5853	      return false;
5854	    },
5855	    releaseScroll: function releaseScroll(newEvent) {
5856	      var swiper = this;
5857	      var params = swiper.params.mousewheel;
5858	
5859	      if (newEvent.direction < 0) {
5860	        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
5861	          // Return true to animate scroll on edges
5862	          return true;
5863	        }
5864	      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
5865	        // Return true to animate scroll on edges
5866	        return true;
5867	      }
5868	
5869	      return false;
5870	    },
5871	    enable: function enable() {
5872	      var swiper = this;
5873	      var event = Mousewheel.event();
5874	
5875	      if (swiper.params.cssMode) {
5876	        swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
5877	        return true;
5878	      }
5879	
5880	      if (!event) return false;
5881	      if (swiper.mousewheel.enabled) return false;
5882	      var target = swiper.$el;
5883	
5884	      if (swiper.params.mousewheel.eventsTarget !== 'container') {
5885	        target = $(swiper.params.mousewheel.eventsTarget);
5886	      }
5887	
5888	      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
5889	      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
5890	      target.on(event, swiper.mousewheel.handle);
5891	      swiper.mousewheel.enabled = true;
5892	      return true;
5893	    },
5894	    disable: function disable() {
5895	      var swiper = this;
5896	      var event = Mousewheel.event();
5897	
5898	      if (swiper.params.cssMode) {
5899	        swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
5900	        return true;
5901	      }
5902	
5903	      if (!event) return false;
5904	      if (!swiper.mousewheel.enabled) return false;
5905	      var target = swiper.$el;
5906	
5907	      if (swiper.params.mousewheel.eventsTarget !== 'container') {
5908	        target = $(swiper.params.mousewheel.eventsTarget);
5909	      }
5910	
5911	      target.off(event, swiper.mousewheel.handle);
5912	      swiper.mousewheel.enabled = false;
5913	      return true;
5914	    }
5915	  };
5916	  var Mousewheel$1 = {
5917	    name: 'mousewheel',
5918	    params: {
5919	      mousewheel: {
5920	        enabled: false,
5921	        releaseOnEdges: false,
5922	        invert: false,
5923	        forceToAxis: false,
5924	        sensitivity: 1,
5925	        eventsTarget: 'container',
5926	        thresholdDelta: null,
5927	        thresholdTime: null
5928	      }
5929	    },
5930	    create: function create() {
5931	      var swiper = this;
5932	      bindModuleMethods(swiper, {
5933	        mousewheel: {
5934	          enabled: false,
5935	          lastScrollTime: now(),
5936	          lastEventBeforeSnap: undefined,
5937	          recentWheelEvents: [],
5938	          enable: Mousewheel.enable,
5939	          disable: Mousewheel.disable,
5940	          handle: Mousewheel.handle,
5941	          handleMouseEnter: Mousewheel.handleMouseEnter,
5942	          handleMouseLeave: Mousewheel.handleMouseLeave,
5943	          animateSlider: Mousewheel.animateSlider,
5944	          releaseScroll: Mousewheel.releaseScroll
5945	        }
5946	      });
5947	    },
5948	    on: {
5949	      init: function init(swiper) {
5950	        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
5951	          swiper.mousewheel.disable();
5952	        }
5953	
5954	        if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
5955	      },
5956	      destroy: function destroy(swiper) {
5957	        if (swiper.params.cssMode) {
5958	          swiper.mousewheel.enable();
5959	        }
5960	
5961	        if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
5962	      }
5963	    }
5964	  };
5965	
5966	  var Navigation = {
5967	    update: function update() {
5968	      // Update Navigation Buttons
5969	      var swiper = this;
5970	      var params = swiper.params.navigation;
5971	      if (swiper.params.loop) return;
5972	      var _swiper$navigation = swiper.navigation,
5973	          $nextEl = _swiper$navigation.$nextEl,
5974	          $prevEl = _swiper$navigation.$prevEl;
5975	
5976	      if ($prevEl && $prevEl.length > 0) {
5977	        if (swiper.isBeginning) {
5978	          $prevEl.addClass(params.disabledClass);
5979	        } else {
5980	          $prevEl.removeClass(params.disabledClass);
5981	        }
5982	
5983	        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
5984	      }
5985	
5986	      if ($nextEl && $nextEl.length > 0) {
5987	        if (swiper.isEnd) {
5988	          $nextEl.addClass(params.disabledClass);
5989	        } else {
5990	          $nextEl.removeClass(params.disabledClass);
5991	        }
5992	
5993	        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
5994	      }
5995	    },
5996	    onPrevClick: function onPrevClick(e) {
5997	      var swiper = this;
5998	      e.preventDefault();
5999	      if (swiper.isBeginning && !swiper.params.loop) return;
6000	      swiper.slidePrev();
6001	    },
6002	    onNextClick: function onNextClick(e) {
6003	      var swiper = this;
6004	      e.preventDefault();
6005	      if (swiper.isEnd && !swiper.params.loop) return;
6006	      swiper.slideNext();
6007	    },
6008	    init: function init() {
6009	      var swiper = this;
6010	      var params = swiper.params.navigation;
6011	      if (!(params.nextEl || params.prevEl)) return;
6012	      var $nextEl;
6013	      var $prevEl;
6014	
6015	      if (params.nextEl) {
6016	        $nextEl = $(params.nextEl);
6017	
6018	        if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
6019	          $nextEl = swiper.$el.find(params.nextEl);
6020	        }
6021	      }
6022	
6023	      if (params.prevEl) {
6024	        $prevEl = $(params.prevEl);
6025	
6026	        if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
6027	          $prevEl = swiper.$el.find(params.prevEl);
6028	        }
6029	      }
6030	
6031	      if ($nextEl && $nextEl.length > 0) {
6032	        $nextEl.on('click', swiper.navigation.onNextClick);
6033	      }
6034	
6035	      if ($prevEl && $prevEl.length > 0) {
6036	        $prevEl.on('click', swiper.navigation.onPrevClick);
6037	      }
6038	
6039	      extend$1(swiper.navigation, {
6040	        $nextEl: $nextEl,
6041	        nextEl: $nextEl && $nextEl[0],
6042	        $prevEl: $prevEl,
6043	        prevEl: $prevEl && $prevEl[0]
6044	      });
6045	    },
6046	    destroy: function destroy() {
6047	      var swiper = this;
6048	      var _swiper$navigation2 = swiper.navigation,
6049	          $nextEl = _swiper$navigation2.$nextEl,
6050	          $prevEl = _swiper$navigation2.$prevEl;
6051	
6052	      if ($nextEl && $nextEl.length) {
6053	        $nextEl.off('click', swiper.navigation.onNextClick);
6054	        $nextEl.removeClass(swiper.params.navigation.disabledClass);
6055	      }
6056	
6057	      if ($prevEl && $prevEl.length) {
6058	        $prevEl.off('click', swiper.navigation.onPrevClick);
6059	        $prevEl.removeClass(swiper.params.navigation.disabledClass);
6060	      }
6061	    }
6062	  };
6063	  var Navigation$1 = {
6064	    name: 'navigation',
6065	    params: {
6066	      navigation: {
6067	        nextEl: null,
6068	        prevEl: null,
6069	        hideOnClick: false,
6070	        disabledClass: 'swiper-button-disabled',
6071	        hiddenClass: 'swiper-button-hidden',
6072	        lockClass: 'swiper-button-lock'
6073	      }
6074	    },
6075	    create: function create() {
6076	      var swiper = this;
6077	      bindModuleMethods(swiper, {
6078	        navigation: _extends({}, Navigation)
6079	      });
6080	    },
6081	    on: {
6082	      init: function init(swiper) {
6083	        swiper.navigation.init();
6084	        swiper.navigation.update();
6085	      },
6086	      toEdge: function toEdge(swiper) {
6087	        swiper.navigation.update();
6088	      },
6089	      fromEdge: function fromEdge(swiper) {
6090	        swiper.navigation.update();
6091	      },
6092	      destroy: function destroy(swiper) {
6093	        swiper.navigation.destroy();
6094	      },
6095	      click: function click(swiper, e) {
6096	        var _swiper$navigation3 = swiper.navigation,
6097	            $nextEl = _swiper$navigation3.$nextEl,
6098	            $prevEl = _swiper$navigation3.$prevEl;
6099	
6100	        if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
6101	          var isHidden;
6102	
6103	          if ($nextEl) {
6104	            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
6105	          } else if ($prevEl) {
6106	            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
6107	          }
6108	
6109	          if (isHidden === true) {
6110	            swiper.emit('navigationShow');
6111	          } else {
6112	            swiper.emit('navigationHide');
6113	          }
6114	
6115	          if ($nextEl) {
6116	            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
6117	          }
6118	
6119	          if ($prevEl) {
6120	            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
6121	          }
6122	        }
6123	      }
6124	    }
6125	  };
6126	
6127	  var Pagination = {
6128	    update: function update() {
6129	      // Render || Update Pagination bullets/items
6130	      var swiper = this;
6131	      var rtl = swiper.rtl;
6132	      var params = swiper.params.pagination;
6133	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
6134	      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
6135	      var $el = swiper.pagination.$el; // Current/Total
6136	
6137	      var current;
6138	      var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
6139	
6140	      if (swiper.params.loop) {
6141	        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
6142	
6143	        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
6144	          current -= slidesLength - swiper.loopedSlides * 2;
6145	        }
6146	
6147	        if (current > total - 1) current -= total;
6148	        if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
6149	      } else if (typeof swiper.snapIndex !== 'undefined') {
6150	        current = swiper.snapIndex;
6151	      } else {
6152	        current = swiper.activeIndex || 0;
6153	      } // Types
6154	
6155	
6156	      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
6157	        var bullets = swiper.pagination.bullets;
6158	        var firstIndex;
6159	        var lastIndex;
6160	        var midIndex;
6161	
6162	        if (params.dynamicBullets) {
6163	          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
6164	          $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");
6165	
6166	          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
6167	            swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
6168	
6169	            if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
6170	              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
6171	            } else if (swiper.pagination.dynamicBulletIndex < 0) {
6172	              swiper.pagination.dynamicBulletIndex = 0;
6173	            }
6174	          }
6175	
6176	          firstIndex = current - swiper.pagination.dynamicBulletIndex;
6177	          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
6178	          midIndex = (lastIndex + firstIndex) / 2;
6179	        }
6180	
6181	        bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");
6182	
6183	        if ($el.length > 1) {
6184	          bullets.each(function (bullet) {
6185	            var $bullet = $(bullet);
6186	            var bulletIndex = $bullet.index();
6187	
6188	            if (bulletIndex === current) {
6189	              $bullet.addClass(params.bulletActiveClass);
6190	            }
6191	
6192	            if (params.dynamicBullets) {
6193	              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
6194	                $bullet.addClass(params.bulletActiveClass + "-main");
6195	              }
6196	
6197	              if (bulletIndex === firstIndex) {
6198	                $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
6199	              }
6200	
6201	              if (bulletIndex === lastIndex) {
6202	                $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
6203	              }
6204	            }
6205	          });
6206	        } else {
6207	          var $bullet = bullets.eq(current);
6208	          var bulletIndex = $bullet.index();
6209	          $bullet.addClass(params.bulletActiveClass);
6210	
6211	          if (params.dynamicBullets) {
6212	            var $firstDisplayedBullet = bullets.eq(firstIndex);
6213	            var $lastDisplayedBullet = bullets.eq(lastIndex);
6214	
6215	            for (var i = firstIndex; i <= lastIndex; i += 1) {
6216	              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
6217	            }
6218	
6219	            if (swiper.params.loop) {
6220	              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
6221	                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
6222	                  bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
6223	                }
6224	
6225	                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
6226	              } else {
6227	                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
6228	                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
6229	              }
6230	            } else {
6231	              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
6232	              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
6233	            }
6234	          }
6235	        }
6236	
6237	        if (params.dynamicBullets) {
6238	          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
6239	          var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
6240	          var offsetProp = rtl ? 'right' : 'left';
6241	          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
6242	        }
6243	      }
6244	
6245	      if (params.type === 'fraction') {
6246	        $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
6247	        $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
6248	      }
6249	
6250	      if (params.type === 'progressbar') {
6251	        var progressbarDirection;
6252	
6253	        if (params.progressbarOpposite) {
6254	          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
6255	        } else {
6256	          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
6257	        }
6258	
6259	        var scale = (current + 1) / total;
6260	        var scaleX = 1;
6261	        var scaleY = 1;
6262	
6263	        if (progressbarDirection === 'horizontal') {
6264	          scaleX = scale;
6265	        } else {
6266	          scaleY = scale;
6267	        }
6268	
6269	        $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
6270	      }
6271	
6272	      if (params.type === 'custom' && params.renderCustom) {
6273	        $el.html(params.renderCustom(swiper, current + 1, total));
6274	        swiper.emit('paginationRender', $el[0]);
6275	      } else {
6276	        swiper.emit('paginationUpdate', $el[0]);
6277	      }
6278	
6279	      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
6280	    },
6281	    render: function render() {
6282	      // Render Container
6283	      var swiper = this;
6284	      var params = swiper.params.pagination;
6285	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
6286	      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
6287	      var $el = swiper.pagination.$el;
6288	      var paginationHTML = '';
6289	
6290	      if (params.type === 'bullets') {
6291	        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
6292	
6293	        for (var i = 0; i < numberOfBullets; i += 1) {
6294	          if (params.renderBullet) {
6295	            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
6296	          } else {
6297	            paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
6298	          }
6299	        }
6300	
6301	        $el.html(paginationHTML);
6302	        swiper.pagination.bullets = $el.find("." + params.bulletClass);
6303	      }
6304	
6305	      if (params.type === 'fraction') {
6306	        if (params.renderFraction) {
6307	          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
6308	        } else {
6309	          paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
6310	        }
6311	
6312	        $el.html(paginationHTML);
6313	      }
6314	
6315	      if (params.type === 'progressbar') {
6316	        if (params.renderProgressbar) {
6317	          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
6318	        } else {
6319	          paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
6320	        }
6321	
6322	        $el.html(paginationHTML);
6323	      }
6324	
6325	      if (params.type !== 'custom') {
6326	        swiper.emit('paginationRender', swiper.pagination.$el[0]);
6327	      }
6328	    },
6329	    init: function init() {
6330	      var swiper = this;
6331	      var params = swiper.params.pagination;
6332	      if (!params.el) return;
6333	      var $el = $(params.el);
6334	      if ($el.length === 0) return;
6335	
6336	      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
6337	        $el = swiper.$el.find(params.el);
6338	      }
6339	
6340	      if (params.type === 'bullets' && params.clickable) {
6341	        $el.addClass(params.clickableClass);
6342	      }
6343	
6344	      $el.addClass(params.modifierClass + params.type);
6345	
6346	      if (params.type === 'bullets' && params.dynamicBullets) {
6347	        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
6348	        swiper.pagination.dynamicBulletIndex = 0;
6349	
6350	        if (params.dynamicMainBullets < 1) {
6351	          params.dynamicMainBullets = 1;
6352	        }
6353	      }
6354	
6355	      if (params.type === 'progressbar' && params.progressbarOpposite) {
6356	        $el.addClass(params.progressbarOppositeClass);
6357	      }
6358	
6359	      if (params.clickable) {
6360	        $el.on('click', "." + params.bulletClass, function onClick(e) {
6361	          e.preventDefault();
6362	          var index = $(this).index() * swiper.params.slidesPerGroup;
6363	          if (swiper.params.loop) index += swiper.loopedSlides;
6364	          swiper.slideTo(index);
6365	        });
6366	      }
6367	
6368	      extend$1(swiper.pagination, {
6369	        $el: $el,
6370	        el: $el[0]
6371	      });
6372	    },
6373	    destroy: function destroy() {
6374	      var swiper = this;
6375	      var params = swiper.params.pagination;
6376	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
6377	      var $el = swiper.pagination.$el;
6378	      $el.removeClass(params.hiddenClass);
6379	      $el.removeClass(params.modifierClass + params.type);
6380	      if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
6381	
6382	      if (params.clickable) {
6383	        $el.off('click', "." + params.bulletClass);
6384	      }
6385	    }
6386	  };
6387	  var Pagination$1 = {
6388	    name: 'pagination',
6389	    params: {
6390	      pagination: {
6391	        el: null,
6392	        bulletElement: 'span',
6393	        clickable: false,
6394	        hideOnClick: false,
6395	        renderBullet: null,
6396	        renderProgressbar: null,
6397	        renderFraction: null,
6398	        renderCustom: null,
6399	        progressbarOpposite: false,
6400	        type: 'bullets',
6401	        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
6402	        dynamicBullets: false,
6403	        dynamicMainBullets: 1,
6404	        formatFractionCurrent: function formatFractionCurrent(number) {
6405	          return number;
6406	        },
6407	        formatFractionTotal: function formatFractionTotal(number) {
6408	          return number;
6409	        },
6410	        bulletClass: 'swiper-pagination-bullet',
6411	        bulletActiveClass: 'swiper-pagination-bullet-active',
6412	        modifierClass: 'swiper-pagination-',
6413	        // NEW
6414	        currentClass: 'swiper-pagination-current',
6415	        totalClass: 'swiper-pagination-total',
6416	        hiddenClass: 'swiper-pagination-hidden',
6417	        progressbarFillClass: 'swiper-pagination-progressbar-fill',
6418	        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
6419	        clickableClass: 'swiper-pagination-clickable',
6420	        // NEW
6421	        lockClass: 'swiper-pagination-lock'
6422	      }
6423	    },
6424	    create: function create() {
6425	      var swiper = this;
6426	      bindModuleMethods(swiper, {
6427	        pagination: _extends({
6428	          dynamicBulletIndex: 0
6429	        }, Pagination)
6430	      });
6431	    },
6432	    on: {
6433	      init: function init(swiper) {
6434	        swiper.pagination.init();
6435	        swiper.pagination.render();
6436	        swiper.pagination.update();
6437	      },
6438	      activeIndexChange: function activeIndexChange(swiper) {
6439	        if (swiper.params.loop) {
6440	          swiper.pagination.update();
6441	        } else if (typeof swiper.snapIndex === 'undefined') {
6442	          swiper.pagination.update();
6443	        }
6444	      },
6445	      snapIndexChange: function snapIndexChange(swiper) {
6446	        if (!swiper.params.loop) {
6447	          swiper.pagination.update();
6448	        }
6449	      },
6450	      slidesLengthChange: function slidesLengthChange(swiper) {
6451	        if (swiper.params.loop) {
6452	          swiper.pagination.render();
6453	          swiper.pagination.update();
6454	        }
6455	      },
6456	      snapGridLengthChange: function snapGridLengthChange(swiper) {
6457	        if (!swiper.params.loop) {
6458	          swiper.pagination.render();
6459	          swiper.pagination.update();
6460	        }
6461	      },
6462	      destroy: function destroy(swiper) {
6463	        swiper.pagination.destroy();
6464	      },
6465	      click: function click(swiper, e) {
6466	        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
6467	          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
6468	
6469	          if (isHidden === true) {
6470	            swiper.emit('paginationShow');
6471	          } else {
6472	            swiper.emit('paginationHide');
6473	          }
6474	
6475	          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
6476	        }
6477	      }
6478	    }
6479	  };
6480	
6481	  var Scrollbar = {
6482	    setTranslate: function setTranslate() {
6483	      var swiper = this;
6484	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
6485	      var scrollbar = swiper.scrollbar,
6486	          rtl = swiper.rtlTranslate,
6487	          progress = swiper.progress;
6488	      var dragSize = scrollbar.dragSize,
6489	          trackSize = scrollbar.trackSize,
6490	          $dragEl = scrollbar.$dragEl,
6491	          $el = scrollbar.$el;
6492	      var params = swiper.params.scrollbar;
6493	      var newSize = dragSize;
6494	      var newPos = (trackSize - dragSize) * progress;
6495	
6496	      if (rtl) {
6497	        newPos = -newPos;
6498	
6499	        if (newPos > 0) {
6500	          newSize = dragSize - newPos;
6501	          newPos = 0;
6502	        } else if (-newPos + dragSize > trackSize) {
6503	          newSize = trackSize + newPos;
6504	        }
6505	      } else if (newPos < 0) {
6506	        newSize = dragSize + newPos;
6507	        newPos = 0;
6508	      } else if (newPos + dragSize > trackSize) {
6509	        newSize = trackSize - newPos;
6510	      }
6511	
6512	      if (swiper.isHorizontal()) {
6513	        $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
6514	        $dragEl[0].style.width = newSize + "px";
6515	      } else {
6516	        $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
6517	        $dragEl[0].style.height = newSize + "px";
6518	      }
6519	
6520	      if (params.hide) {
6521	        clearTimeout(swiper.scrollbar.timeout);
6522	        $el[0].style.opacity = 1;
6523	        swiper.scrollbar.timeout = setTimeout(function () {
6524	          $el[0].style.opacity = 0;
6525	          $el.transition(400);
6526	        }, 1000);
6527	      }
6528	    },
6529	    setTransition: function setTransition(duration) {
6530	      var swiper = this;
6531	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
6532	      swiper.scrollbar.$dragEl.transition(duration);
6533	    },
6534	    updateSize: function updateSize() {
6535	      var swiper = this;
6536	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
6537	      var scrollbar = swiper.scrollbar;
6538	      var $dragEl = scrollbar.$dragEl,
6539	          $el = scrollbar.$el;
6540	      $dragEl[0].style.width = '';
6541	      $dragEl[0].style.height = '';
6542	      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
6543	      var divider = swiper.size / swiper.virtualSize;
6544	      var moveDivider = divider * (trackSize / swiper.size);
6545	      var dragSize;
6546	
6547	      if (swiper.params.scrollbar.dragSize === 'auto') {
6548	        dragSize = trackSize * divider;
6549	      } else {
6550	        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
6551	      }
6552	
6553	      if (swiper.isHorizontal()) {
6554	        $dragEl[0].style.width = dragSize + "px";
6555	      } else {
6556	        $dragEl[0].style.height = dragSize + "px";
6557	      }
6558	
6559	      if (divider >= 1) {
6560	        $el[0].style.display = 'none';
6561	      } else {
6562	        $el[0].style.display = '';
6563	      }
6564	
6565	      if (swiper.params.scrollbar.hide) {
6566	        $el[0].style.opacity = 0;
6567	      }
6568	
6569	      extend$1(scrollbar, {
6570	        trackSize: trackSize,
6571	        divider: divider,
6572	        moveDivider: moveDivider,
6573	        dragSize: dragSize
6574	      });
6575	      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
6576	    },
6577	    getPointerPosition: function getPointerPosition(e) {
6578	      var swiper = this;
6579	
6580	      if (swiper.isHorizontal()) {
6581	        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
6582	      }
6583	
6584	      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
6585	    },
6586	    setDragPosition: function setDragPosition(e) {
6587	      var swiper = this;
6588	      var scrollbar = swiper.scrollbar,
6589	          rtl = swiper.rtlTranslate;
6590	      var $el = scrollbar.$el,
6591	          dragSize = scrollbar.dragSize,
6592	          trackSize = scrollbar.trackSize,
6593	          dragStartPos = scrollbar.dragStartPos;
6594	      var positionRatio;
6595	      positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
6596	      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
6597	
6598	      if (rtl) {
6599	        positionRatio = 1 - positionRatio;
6600	      }
6601	
6602	      var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
6603	      swiper.updateProgress(position);
6604	      swiper.setTranslate(position);
6605	      swiper.updateActiveIndex();
6606	      swiper.updateSlidesClasses();
6607	    },
6608	    onDragStart: function onDragStart(e) {
6609	      var swiper = this;
6610	      var params = swiper.params.scrollbar;
6611	      var scrollbar = swiper.scrollbar,
6612	          $wrapperEl = swiper.$wrapperEl;
6613	      var $el = scrollbar.$el,
6614	          $dragEl = scrollbar.$dragEl;
6615	      swiper.scrollbar.isTouched = true;
6616	      swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
6617	      e.preventDefault();
6618	      e.stopPropagation();
6619	      $wrapperEl.transition(100);
6620	      $dragEl.transition(100);
6621	      scrollbar.setDragPosition(e);
6622	      clearTimeout(swiper.scrollbar.dragTimeout);
6623	      $el.transition(0);
6624	
6625	      if (params.hide) {
6626	        $el.css('opacity', 1);
6627	      }
6628	
6629	      if (swiper.params.cssMode) {
6630	        swiper.$wrapperEl.css('scroll-snap-type', 'none');
6631	      }
6632	
6633	      swiper.emit('scrollbarDragStart', e);
6634	    },
6635	    onDragMove: function onDragMove(e) {
6636	      var swiper = this;
6637	      var scrollbar = swiper.scrollbar,
6638	          $wrapperEl = swiper.$wrapperEl;
6639	      var $el = scrollbar.$el,
6640	          $dragEl = scrollbar.$dragEl;
6641	      if (!swiper.scrollbar.isTouched) return;
6642	      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
6643	      scrollbar.setDragPosition(e);
6644	      $wrapperEl.transition(0);
6645	      $el.transition(0);
6646	      $dragEl.transition(0);
6647	      swiper.emit('scrollbarDragMove', e);
6648	    },
6649	    onDragEnd: function onDragEnd(e) {
6650	      var swiper = this;
6651	      var params = swiper.params.scrollbar;
6652	      var scrollbar = swiper.scrollbar,
6653	          $wrapperEl = swiper.$wrapperEl;
6654	      var $el = scrollbar.$el;
6655	      if (!swiper.scrollbar.isTouched) return;
6656	      swiper.scrollbar.isTouched = false;
6657	
6658	      if (swiper.params.cssMode) {
6659	        swiper.$wrapperEl.css('scroll-snap-type', '');
6660	        $wrapperEl.transition('');
6661	      }
6662	
6663	      if (params.hide) {
6664	        clearTimeout(swiper.scrollbar.dragTimeout);
6665	        swiper.scrollbar.dragTimeout = nextTick(function () {
6666	          $el.css('opacity', 0);
6667	          $el.transition(400);
6668	        }, 1000);
6669	      }
6670	
6671	      swiper.emit('scrollbarDragEnd', e);
6672	
6673	      if (params.snapOnRelease) {
6674	        swiper.slideToClosest();
6675	      }
6676	    },
6677	    enableDraggable: function enableDraggable() {
6678	      var swiper = this;
6679	      if (!swiper.params.scrollbar.el) return;
6680	      var document = getDocument();
6681	      var scrollbar = swiper.scrollbar,
6682	          touchEventsTouch = swiper.touchEventsTouch,
6683	          touchEventsDesktop = swiper.touchEventsDesktop,
6684	          params = swiper.params,
6685	          support = swiper.support;
6686	      var $el = scrollbar.$el;
6687	      var target = $el[0];
6688	      var activeListener = support.passiveListener && params.passiveListeners ? {
6689	        passive: false,
6690	        capture: false
6691	      } : false;
6692	      var passiveListener = support.passiveListener && params.passiveListeners ? {
6693	        passive: true,
6694	        capture: false
6695	      } : false;
6696	
6697	      if (!support.touch) {
6698	        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
6699	        document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
6700	        document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
6701	      } else {
6702	        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
6703	        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
6704	        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
6705	      }
6706	    },
6707	    disableDraggable: function disableDraggable() {
6708	      var swiper = this;
6709	      if (!swiper.params.scrollbar.el) return;
6710	      var document = getDocument();
6711	      var scrollbar = swiper.scrollbar,
6712	          touchEventsTouch = swiper.touchEventsTouch,
6713	          touchEventsDesktop = swiper.touchEventsDesktop,
6714	          params = swiper.params,
6715	          support = swiper.support;
6716	      var $el = scrollbar.$el;
6717	      var target = $el[0];
6718	      var activeListener = support.passiveListener && params.passiveListeners ? {
6719	        passive: false,
6720	        capture: false
6721	      } : false;
6722	      var passiveListener = support.passiveListener && params.passiveListeners ? {
6723	        passive: true,
6724	        capture: false
6725	      } : false;
6726	
6727	      if (!support.touch) {
6728	        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
6729	        document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
6730	        document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
6731	      } else {
6732	        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
6733	        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
6734	        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
6735	      }
6736	    },
6737	    init: function init() {
6738	      var swiper = this;
6739	      if (!swiper.params.scrollbar.el) return;
6740	      var scrollbar = swiper.scrollbar,
6741	          $swiperEl = swiper.$el;
6742	      var params = swiper.params.scrollbar;
6743	      var $el = $(params.el);
6744	
6745	      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
6746	        $el = $swiperEl.find(params.el);
6747	      }
6748	
6749	      var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
6750	
6751	      if ($dragEl.length === 0) {
6752	        $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
6753	        $el.append($dragEl);
6754	      }
6755	
6756	      extend$1(scrollbar, {
6757	        $el: $el,
6758	        el: $el[0],
6759	        $dragEl: $dragEl,
6760	        dragEl: $dragEl[0]
6761	      });
6762	
6763	      if (params.draggable) {
6764	        scrollbar.enableDraggable();
6765	      }
6766	    },
6767	    destroy: function destroy() {
6768	      var swiper = this;
6769	      swiper.scrollbar.disableDraggable();
6770	    }
6771	  };
6772	  var Scrollbar$1 = {
6773	    name: 'scrollbar',
6774	    params: {
6775	      scrollbar: {
6776	        el: null,
6777	        dragSize: 'auto',
6778	        hide: false,
6779	        draggable: false,
6780	        snapOnRelease: true,
6781	        lockClass: 'swiper-scrollbar-lock',
6782	        dragClass: 'swiper-scrollbar-drag'
6783	      }
6784	    },
6785	    create: function create() {
6786	      var swiper = this;
6787	      bindModuleMethods(swiper, {
6788	        scrollbar: _extends({
6789	          isTouched: false,
6790	          timeout: null,
6791	          dragTimeout: null
6792	        }, Scrollbar)
6793	      });
6794	    },
6795	    on: {
6796	      init: function init(swiper) {
6797	        swiper.scrollbar.init();
6798	        swiper.scrollbar.updateSize();
6799	        swiper.scrollbar.setTranslate();
6800	      },
6801	      update: function update(swiper) {
6802	        swiper.scrollbar.updateSize();
6803	      },
6804	      resize: function resize(swiper) {
6805	        swiper.scrollbar.updateSize();
6806	      },
6807	      observerUpdate: function observerUpdate(swiper) {
6808	        swiper.scrollbar.updateSize();
6809	      },
6810	      setTranslate: function setTranslate(swiper) {
6811	        swiper.scrollbar.setTranslate();
6812	      },
6813	      setTransition: function setTransition(swiper, duration) {
6814	        swiper.scrollbar.setTransition(duration);
6815	      },
6816	      destroy: function destroy(swiper) {
6817	        swiper.scrollbar.destroy();
6818	      }
6819	    }
6820	  };
6821	
6822	  var Parallax = {
6823	    setTransform: function setTransform(el, progress) {
6824	      var swiper = this;
6825	      var rtl = swiper.rtl;
6826	      var $el = $(el);
6827	      var rtlFactor = rtl ? -1 : 1;
6828	      var p = $el.attr('data-swiper-parallax') || '0';
6829	      var x = $el.attr('data-swiper-parallax-x');
6830	      var y = $el.attr('data-swiper-parallax-y');
6831	      var scale = $el.attr('data-swiper-parallax-scale');
6832	      var opacity = $el.attr('data-swiper-parallax-opacity');
6833	
6834	      if (x || y) {
6835	        x = x || '0';
6836	        y = y || '0';
6837	      } else if (swiper.isHorizontal()) {
6838	        x = p;
6839	        y = '0';
6840	      } else {
6841	        y = p;
6842	        x = '0';
6843	      }
6844	
6845	      if (x.indexOf('%') >= 0) {
6846	        x = parseInt(x, 10) * progress * rtlFactor + "%";
6847	      } else {
6848	        x = x * progress * rtlFactor + "px";
6849	      }
6850	
6851	      if (y.indexOf('%') >= 0) {
6852	        y = parseInt(y, 10) * progress + "%";
6853	      } else {
6854	        y = y * progress + "px";
6855	      }
6856	
6857	      if (typeof opacity !== 'undefined' && opacity !== null) {
6858	        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
6859	        $el[0].style.opacity = currentOpacity;
6860	      }
6861	
6862	      if (typeof scale === 'undefined' || scale === null) {
6863	        $el.transform("translate3d(" + x + ", " + y + ", 0px)");
6864	      } else {
6865	        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
6866	        $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
6867	      }
6868	    },
6869	    setTranslate: function setTranslate() {
6870	      var swiper = this;
6871	      var $el = swiper.$el,
6872	          slides = swiper.slides,
6873	          progress = swiper.progress,
6874	          snapGrid = swiper.snapGrid;
6875	      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
6876	        swiper.parallax.setTransform(el, progress);
6877	      });
6878	      slides.each(function (slideEl, slideIndex) {
6879	        var slideProgress = slideEl.progress;
6880	
6881	        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
6882	          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
6883	        }
6884	
6885	        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
6886	        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
6887	          swiper.parallax.setTransform(el, slideProgress);
6888	        });
6889	      });
6890	    },
6891	    setTransition: function setTransition(duration) {
6892	      if (duration === void 0) {
6893	        duration = this.params.speed;
6894	      }
6895	
6896	      var swiper = this;
6897	      var $el = swiper.$el;
6898	      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
6899	        var $parallaxEl = $(parallaxEl);
6900	        var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
6901	        if (duration === 0) parallaxDuration = 0;
6902	        $parallaxEl.transition(parallaxDuration);
6903	      });
6904	    }
6905	  };
6906	  var Parallax$1 = {
6907	    name: 'parallax',
6908	    params: {
6909	      parallax: {
6910	        enabled: false
6911	      }
6912	    },
6913	    create: function create() {
6914	      var swiper = this;
6915	      bindModuleMethods(swiper, {
6916	        parallax: _extends({}, Parallax)
6917	      });
6918	    },
6919	    on: {
6920	      beforeInit: function beforeInit(swiper) {
6921	        if (!swiper.params.parallax.enabled) return;
6922	        swiper.params.watchSlidesProgress = true;
6923	        swiper.originalParams.watchSlidesProgress = true;
6924	      },
6925	      init: function init(swiper) {
6926	        if (!swiper.params.parallax.enabled) return;
6927	        swiper.parallax.setTranslate();
6928	      },
6929	      setTranslate: function setTranslate(swiper) {
6930	        if (!swiper.params.parallax.enabled) return;
6931	        swiper.parallax.setTranslate();
6932	      },
6933	      setTransition: function setTransition(swiper, duration) {
6934	        if (!swiper.params.parallax.enabled) return;
6935	        swiper.parallax.setTransition(duration);
6936	      }
6937	    }
6938	  };
6939	
6940	  var Zoom = {
6941	    // Calc Scale From Multi-touches
6942	    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
6943	      if (e.targetTouches.length < 2) return 1;
6944	      var x1 = e.targetTouches[0].pageX;
6945	      var y1 = e.targetTouches[0].pageY;
6946	      var x2 = e.targetTouches[1].pageX;
6947	      var y2 = e.targetTouches[1].pageY;
6948	      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
6949	      return distance;
6950	    },
6951	    // Events
6952	    onGestureStart: function onGestureStart(e) {
6953	      var swiper = this;
6954	      var support = swiper.support;
6955	      var params = swiper.params.zoom;
6956	      var zoom = swiper.zoom;
6957	      var gesture = zoom.gesture;
6958	      zoom.fakeGestureTouched = false;
6959	      zoom.fakeGestureMoved = false;
6960	
6961	      if (!support.gestures) {
6962	        if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
6963	          return;
6964	        }
6965	
6966	        zoom.fakeGestureTouched = true;
6967	        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
6968	      }
6969	
6970	      if (!gesture.$slideEl || !gesture.$slideEl.length) {
6971	        gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
6972	        if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
6973	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
6974	        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
6975	        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
6976	
6977	        if (gesture.$imageWrapEl.length === 0) {
6978	          gesture.$imageEl = undefined;
6979	          return;
6980	        }
6981	      }
6982	
6983	      if (gesture.$imageEl) {
6984	        gesture.$imageEl.transition(0);
6985	      }
6986	
6987	      swiper.zoom.isScaling = true;
6988	    },
6989	    onGestureChange: function onGestureChange(e) {
6990	      var swiper = this;
6991	      var support = swiper.support;
6992	      var params = swiper.params.zoom;
6993	      var zoom = swiper.zoom;
6994	      var gesture = zoom.gesture;
6995	
6996	      if (!support.gestures) {
6997	        if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
6998	          return;
6999	        }
7000	
7001	        zoom.fakeGestureMoved = true;
7002	        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
7003	      }
7004	
7005	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
7006	        if (e.type === 'gesturechange') zoom.onGestureStart(e);
7007	        return;
7008	      }
7009	
7010	      if (support.gestures) {
7011	        zoom.scale = e.scale * zoom.currentScale;
7012	      } else {
7013	        zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
7014	      }
7015	
7016	      if (zoom.scale > gesture.maxRatio) {
7017	        zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
7018	      }
7019	
7020	      if (zoom.scale < params.minRatio) {
7021	        zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
7022	      }
7023	
7024	      gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
7025	    },
7026	    onGestureEnd: function onGestureEnd(e) {
7027	      var swiper = this;
7028	      var device = swiper.device;
7029	      var support = swiper.support;
7030	      var params = swiper.params.zoom;
7031	      var zoom = swiper.zoom;
7032	      var gesture = zoom.gesture;
7033	
7034	      if (!support.gestures) {
7035	        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
7036	          return;
7037	        }
7038	
7039	        if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
7040	          return;
7041	        }
7042	
7043	        zoom.fakeGestureTouched = false;
7044	        zoom.fakeGestureMoved = false;
7045	      }
7046	
7047	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
7048	      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
7049	      gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
7050	      zoom.currentScale = zoom.scale;
7051	      zoom.isScaling = false;
7052	      if (zoom.scale === 1) gesture.$slideEl = undefined;
7053	    },
7054	    onTouchStart: function onTouchStart(e) {
7055	      var swiper = this;
7056	      var device = swiper.device;
7057	      var zoom = swiper.zoom;
7058	      var gesture = zoom.gesture,
7059	          image = zoom.image;
7060	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
7061	      if (image.isTouched) return;
7062	      if (device.android && e.cancelable) e.preventDefault();
7063	      image.isTouched = true;
7064	      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
7065	      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
7066	    },
7067	    onTouchMove: function onTouchMove(e) {
7068	      var swiper = this;
7069	      var zoom = swiper.zoom;
7070	      var gesture = zoom.gesture,
7071	          image = zoom.image,
7072	          velocity = zoom.velocity;
7073	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
7074	      swiper.allowClick = false;
7075	      if (!image.isTouched || !gesture.$slideEl) return;
7076	
7077	      if (!image.isMoved) {
7078	        image.width = gesture.$imageEl[0].offsetWidth;
7079	        image.height = gesture.$imageEl[0].offsetHeight;
7080	        image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
7081	        image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
7082	        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
7083	        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
7084	        gesture.$imageWrapEl.transition(0);
7085	
7086	        if (swiper.rtl) {
7087	          image.startX = -image.startX;
7088	          image.startY = -image.startY;
7089	        }
7090	      } // Define if we need image drag
7091	
7092	
7093	      var scaledWidth = image.width * zoom.scale;
7094	      var scaledHeight = image.height * zoom.scale;
7095	      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
7096	      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
7097	      image.maxX = -image.minX;
7098	      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
7099	      image.maxY = -image.minY;
7100	      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
7101	      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
7102	
7103	      if (!image.isMoved && !zoom.isScaling) {
7104	        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
7105	          image.isTouched = false;
7106	          return;
7107	        }
7108	
7109	        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
7110	          image.isTouched = false;
7111	          return;
7112	        }
7113	      }
7114	
7115	      if (e.cancelable) {
7116	        e.preventDefault();
7117	      }
7118	
7119	      e.stopPropagation();
7120	      image.isMoved = true;
7121	      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
7122	      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
7123	
7124	      if (image.currentX < image.minX) {
7125	        image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
7126	      }
7127	
7128	      if (image.currentX > image.maxX) {
7129	        image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
7130	      }
7131	
7132	      if (image.currentY < image.minY) {
7133	        image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
7134	      }
7135	
7136	      if (image.currentY > image.maxY) {
7137	        image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
7138	      } // Velocity
7139	
7140	
7141	      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
7142	      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
7143	      if (!velocity.prevTime) velocity.prevTime = Date.now();
7144	      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
7145	      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
7146	      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
7147	      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
7148	      velocity.prevPositionX = image.touchesCurrent.x;
7149	      velocity.prevPositionY = image.touchesCurrent.y;
7150	      velocity.prevTime = Date.now();
7151	      gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
7152	    },
7153	    onTouchEnd: function onTouchEnd() {
7154	      var swiper = this;
7155	      var zoom = swiper.zoom;
7156	      var gesture = zoom.gesture,
7157	          image = zoom.image,
7158	          velocity = zoom.velocity;
7159	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
7160	
7161	      if (!image.isTouched || !image.isMoved) {
7162	        image.isTouched = false;
7163	        image.isMoved = false;
7164	        return;
7165	      }
7166	
7167	      image.isTouched = false;
7168	      image.isMoved = false;
7169	      var momentumDurationX = 300;
7170	      var momentumDurationY = 300;
7171	      var momentumDistanceX = velocity.x * momentumDurationX;
7172	      var newPositionX = image.currentX + momentumDistanceX;
7173	      var momentumDistanceY = velocity.y * momentumDurationY;
7174	      var newPositionY = image.currentY + momentumDistanceY; // Fix duration
7175	
7176	      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
7177	      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
7178	      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
7179	      image.currentX = newPositionX;
7180	      image.currentY = newPositionY; // Define if we need image drag
7181	
7182	      var scaledWidth = image.width * zoom.scale;
7183	      var scaledHeight = image.height * zoom.scale;
7184	      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
7185	      image.maxX = -image.minX;
7186	      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
7187	      image.maxY = -image.minY;
7188	      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
7189	      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
7190	      gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
7191	    },
7192	    onTransitionEnd: function onTransitionEnd() {
7193	      var swiper = this;
7194	      var zoom = swiper.zoom;
7195	      var gesture = zoom.gesture;
7196	
7197	      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
7198	        if (gesture.$imageEl) {
7199	          gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
7200	        }
7201	
7202	        if (gesture.$imageWrapEl) {
7203	          gesture.$imageWrapEl.transform('translate3d(0,0,0)');
7204	        }
7205	
7206	        zoom.scale = 1;
7207	        zoom.currentScale = 1;
7208	        gesture.$slideEl = undefined;
7209	        gesture.$imageEl = undefined;
7210	        gesture.$imageWrapEl = undefined;
7211	      }
7212	    },
7213	    // Toggle Zoom
7214	    toggle: function toggle(e) {
7215	      var swiper = this;
7216	      var zoom = swiper.zoom;
7217	
7218	      if (zoom.scale && zoom.scale !== 1) {
7219	        // Zoom Out
7220	        zoom.out();
7221	      } else {
7222	        // Zoom In
7223	        zoom.in(e);
7224	      }
7225	    },
7226	    in: function _in(e) {
7227	      var swiper = this;
7228	      var zoom = swiper.zoom;
7229	      var params = swiper.params.zoom;
7230	      var gesture = zoom.gesture,
7231	          image = zoom.image;
7232	
7233	      if (!gesture.$slideEl) {
7234	        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
7235	          gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
7236	        } else {
7237	          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
7238	        }
7239	
7240	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
7241	        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
7242	      }
7243	
7244	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
7245	      gesture.$slideEl.addClass("" + params.zoomedSlideClass);
7246	      var touchX;
7247	      var touchY;
7248	      var offsetX;
7249	      var offsetY;
7250	      var diffX;
7251	      var diffY;
7252	      var translateX;
7253	      var translateY;
7254	      var imageWidth;
7255	      var imageHeight;
7256	      var scaledWidth;
7257	      var scaledHeight;
7258	      var translateMinX;
7259	      var translateMinY;
7260	      var translateMaxX;
7261	      var translateMaxY;
7262	      var slideWidth;
7263	      var slideHeight;
7264	
7265	      if (typeof image.touchesStart.x === 'undefined' && e) {
7266	        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
7267	        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
7268	      } else {
7269	        touchX = image.touchesStart.x;
7270	        touchY = image.touchesStart.y;
7271	      }
7272	
7273	      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
7274	      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
7275	
7276	      if (e) {
7277	        slideWidth = gesture.$slideEl[0].offsetWidth;
7278	        slideHeight = gesture.$slideEl[0].offsetHeight;
7279	        offsetX = gesture.$slideEl.offset().left;
7280	        offsetY = gesture.$slideEl.offset().top;
7281	        diffX = offsetX + slideWidth / 2 - touchX;
7282	        diffY = offsetY + slideHeight / 2 - touchY;
7283	        imageWidth = gesture.$imageEl[0].offsetWidth;
7284	        imageHeight = gesture.$imageEl[0].offsetHeight;
7285	        scaledWidth = imageWidth * zoom.scale;
7286	        scaledHeight = imageHeight * zoom.scale;
7287	        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
7288	        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
7289	        translateMaxX = -translateMinX;
7290	        translateMaxY = -translateMinY;
7291	        translateX = diffX * zoom.scale;
7292	        translateY = diffY * zoom.scale;
7293	
7294	        if (translateX < translateMinX) {
7295	          translateX = translateMinX;
7296	        }
7297	
7298	        if (translateX > translateMaxX) {
7299	          translateX = translateMaxX;
7300	        }
7301	
7302	        if (translateY < translateMinY) {
7303	          translateY = translateMinY;
7304	        }
7305	
7306	        if (translateY > translateMaxY) {
7307	          translateY = translateMaxY;
7308	        }
7309	      } else {
7310	        translateX = 0;
7311	        translateY = 0;
7312	      }
7313	
7314	      gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
7315	      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
7316	    },
7317	    out: function out() {
7318	      var swiper = this;
7319	      var zoom = swiper.zoom;
7320	      var params = swiper.params.zoom;
7321	      var gesture = zoom.gesture;
7322	
7323	      if (!gesture.$slideEl) {
7324	        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
7325	          gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
7326	        } else {
7327	          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
7328	        }
7329	
7330	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
7331	        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
7332	      }
7333	
7334	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
7335	      zoom.scale = 1;
7336	      zoom.currentScale = 1;
7337	      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
7338	      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
7339	      gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
7340	      gesture.$slideEl = undefined;
7341	    },
7342	    toggleGestures: function toggleGestures(method) {
7343	      var swiper = this;
7344	      var zoom = swiper.zoom;
7345	      var selector = zoom.slideSelector,
7346	          passive = zoom.passiveListener;
7347	      swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
7348	      swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
7349	      swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
7350	    },
7351	    enableGestures: function enableGestures() {
7352	      if (this.zoom.gesturesEnabled) return;
7353	      this.zoom.gesturesEnabled = true;
7354	      this.zoom.toggleGestures('on');
7355	    },
7356	    disableGestures: function disableGestures() {
7357	      if (!this.zoom.gesturesEnabled) return;
7358	      this.zoom.gesturesEnabled = false;
7359	      this.zoom.toggleGestures('off');
7360	    },
7361	    // Attach/Detach Events
7362	    enable: function enable() {
7363	      var swiper = this;
7364	      var support = swiper.support;
7365	      var zoom = swiper.zoom;
7366	      if (zoom.enabled) return;
7367	      zoom.enabled = true;
7368	      var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
7369	        passive: true,
7370	        capture: false
7371	      } : false;
7372	      var activeListenerWithCapture = support.passiveListener ? {
7373	        passive: false,
7374	        capture: true
7375	      } : true;
7376	      var slideSelector = "." + swiper.params.slideClass;
7377	      swiper.zoom.passiveListener = passiveListener;
7378	      swiper.zoom.slideSelector = slideSelector; // Scale image
7379	
7380	      if (support.gestures) {
7381	        swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
7382	        swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
7383	      } else if (swiper.touchEvents.start === 'touchstart') {
7384	        swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
7385	        swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
7386	        swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
7387	
7388	        if (swiper.touchEvents.cancel) {
7389	          swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
7390	        }
7391	      } // Move image
7392	
7393	
7394	      swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
7395	    },
7396	    disable: function disable() {
7397	      var swiper = this;
7398	      var zoom = swiper.zoom;
7399	      if (!zoom.enabled) return;
7400	      var support = swiper.support;
7401	      swiper.zoom.enabled = false;
7402	      var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
7403	        passive: true,
7404	        capture: false
7405	      } : false;
7406	      var activeListenerWithCapture = support.passiveListener ? {
7407	        passive: false,
7408	        capture: true
7409	      } : true;
7410	      var slideSelector = "." + swiper.params.slideClass; // Scale image
7411	
7412	      if (support.gestures) {
7413	        swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
7414	        swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
7415	      } else if (swiper.touchEvents.start === 'touchstart') {
7416	        swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
7417	        swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
7418	        swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
7419	
7420	        if (swiper.touchEvents.cancel) {
7421	          swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
7422	        }
7423	      } // Move image
7424	
7425	
7426	      swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
7427	    }
7428	  };
7429	  var Zoom$1 = {
7430	    name: 'zoom',
7431	    params: {
7432	      zoom: {
7433	        enabled: false,
7434	        maxRatio: 3,
7435	        minRatio: 1,
7436	        toggle: true,
7437	        containerClass: 'swiper-zoom-container',
7438	        zoomedSlideClass: 'swiper-slide-zoomed'
7439	      }
7440	    },
7441	    create: function create() {
7442	      var swiper = this;
7443	      bindModuleMethods(swiper, {
7444	        zoom: _extends({
7445	          enabled: false,
7446	          scale: 1,
7447	          currentScale: 1,
7448	          isScaling: false,
7449	          gesture: {
7450	            $slideEl: undefined,
7451	            slideWidth: undefined,
7452	            slideHeight: undefined,
7453	            $imageEl: undefined,
7454	            $imageWrapEl: undefined,
7455	            maxRatio: 3
7456	          },
7457	          image: {
7458	            isTouched: undefined,
7459	            isMoved: undefined,
7460	            currentX: undefined,
7461	            currentY: undefined,
7462	            minX: undefined,
7463	            minY: undefined,
7464	            maxX: undefined,
7465	            maxY: undefined,
7466	            width: undefined,
7467	            height: undefined,
7468	            startX: undefined,
7469	            startY: undefined,
7470	            touchesStart: {},
7471	            touchesCurrent: {}
7472	          },
7473	          velocity: {
7474	            x: undefined,
7475	            y: undefined,
7476	            prevPositionX: undefined,
7477	            prevPositionY: undefined,
7478	            prevTime: undefined
7479	          }
7480	        }, Zoom)
7481	      });
7482	      var scale = 1;
7483	      Object.defineProperty(swiper.zoom, 'scale', {
7484	        get: function get() {
7485	          return scale;
7486	        },
7487	        set: function set(value) {
7488	          if (scale !== value) {
7489	            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
7490	            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
7491	            swiper.emit('zoomChange', value, imageEl, slideEl);
7492	          }
7493	
7494	          scale = value;
7495	        }
7496	      });
7497	    },
7498	    on: {
7499	      init: function init(swiper) {
7500	        if (swiper.params.zoom.enabled) {
7501	          swiper.zoom.enable();
7502	        }
7503	      },
7504	      destroy: function destroy(swiper) {
7505	        swiper.zoom.disable();
7506	      },
7507	      touchStart: function touchStart(swiper, e) {
7508	        if (!swiper.zoom.enabled) return;
7509	        swiper.zoom.onTouchStart(e);
7510	      },
7511	      touchEnd: function touchEnd(swiper, e) {
7512	        if (!swiper.zoom.enabled) return;
7513	        swiper.zoom.onTouchEnd(e);
7514	      },
7515	      doubleTap: function doubleTap(swiper, e) {
7516	        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
7517	          swiper.zoom.toggle(e);
7518	        }
7519	      },
7520	      transitionEnd: function transitionEnd(swiper) {
7521	        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
7522	          swiper.zoom.onTransitionEnd();
7523	        }
7524	      },
7525	      slideChange: function slideChange(swiper) {
7526	        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
7527	          swiper.zoom.onTransitionEnd();
7528	        }
7529	      }
7530	    }
7531	  };
7532	
7533	  var Lazy = {
7534	    loadInSlide: function loadInSlide(index, loadInDuplicate) {
7535	      if (loadInDuplicate === void 0) {
7536	        loadInDuplicate = true;
7537	      }
7538	
7539	      var swiper = this;
7540	      var params = swiper.params.lazy;
7541	      if (typeof index === 'undefined') return;
7542	      if (swiper.slides.length === 0) return;
7543	      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
7544	      var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
7545	      var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");
7546	
7547	      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
7548	        $images.push($slideEl[0]);
7549	      }
7550	
7551	      if ($images.length === 0) return;
7552	      $images.each(function (imageEl) {
7553	        var $imageEl = $(imageEl);
7554	        $imageEl.addClass(params.loadingClass);
7555	        var background = $imageEl.attr('data-background');
7556	        var src = $imageEl.attr('data-src');
7557	        var srcset = $imageEl.attr('data-srcset');
7558	        var sizes = $imageEl.attr('data-sizes');
7559	        var $pictureEl = $imageEl.parent('picture');
7560	        swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
7561	          if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
7562	
7563	          if (background) {
7564	            $imageEl.css('background-image', "url(\"" + background + "\")");
7565	            $imageEl.removeAttr('data-background');
7566	          } else {
7567	            if (srcset) {
7568	              $imageEl.attr('srcset', srcset);
7569	              $imageEl.removeAttr('data-srcset');
7570	            }
7571	
7572	            if (sizes) {
7573	              $imageEl.attr('sizes', sizes);
7574	              $imageEl.removeAttr('data-sizes');
7575	            }
7576	
7577	            if ($pictureEl.length) {
7578	              $pictureEl.children('source').each(function (sourceEl) {
7579	                var $source = $(sourceEl);
7580	
7581	                if ($source.attr('data-srcset')) {
7582	                  $source.attr('srcset', $source.attr('data-srcset'));
7583	                  $source.removeAttr('data-srcset');
7584	                }
7585	              });
7586	            }
7587	
7588	            if (src) {
7589	              $imageEl.attr('src', src);
7590	              $imageEl.removeAttr('data-src');
7591	            }
7592	          }
7593	
7594	          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
7595	          $slideEl.find("." + params.preloaderClass).remove();
7596	
7597	          if (swiper.params.loop && loadInDuplicate) {
7598	            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
7599	
7600	            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
7601	              var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
7602	              swiper.lazy.loadInSlide(originalSlide.index(), false);
7603	            } else {
7604	              var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
7605	              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
7606	            }
7607	          }
7608	
7609	          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
7610	
7611	          if (swiper.params.autoHeight) {
7612	            swiper.updateAutoHeight();
7613	          }
7614	        });
7615	        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
7616	      });
7617	    },
7618	    load: function load() {
7619	      var swiper = this;
7620	      var $wrapperEl = swiper.$wrapperEl,
7621	          swiperParams = swiper.params,
7622	          slides = swiper.slides,
7623	          activeIndex = swiper.activeIndex;
7624	      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
7625	      var params = swiperParams.lazy;
7626	      var slidesPerView = swiperParams.slidesPerView;
7627	
7628	      if (slidesPerView === 'auto') {
7629	        slidesPerView = 0;
7630	      }
7631	
7632	      function slideExist(index) {
7633	        if (isVirtual) {
7634	          if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
7635	            return true;
7636	          }
7637	        } else if (slides[index]) return true;
7638	
7639	        return false;
7640	      }
7641	
7642	      function slideIndex(slideEl) {
7643	        if (isVirtual) {
7644	          return $(slideEl).attr('data-swiper-slide-index');
7645	        }
7646	
7647	        return $(slideEl).index();
7648	      }
7649	
7650	      if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
7651	
7652	      if (swiper.params.watchSlidesVisibility) {
7653	        $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
7654	          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
7655	          swiper.lazy.loadInSlide(index);
7656	        });
7657	      } else if (slidesPerView > 1) {
7658	        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
7659	          if (slideExist(i)) swiper.lazy.loadInSlide(i);
7660	        }
7661	      } else {
7662	        swiper.lazy.loadInSlide(activeIndex);
7663	      }
7664	
7665	      if (params.loadPrevNext) {
7666	        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
7667	          var amount = params.loadPrevNextAmount;
7668	          var spv = slidesPerView;
7669	          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
7670	          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
7671	
7672	          for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
7673	            if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
7674	          } // Prev Slides
7675	
7676	
7677	          for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
7678	            if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
7679	          }
7680	        } else {
7681	          var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
7682	          if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
7683	          var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
7684	          if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
7685	        }
7686	      }
7687	    }
7688	  };
7689	  var Lazy$1 = {
7690	    name: 'lazy',
7691	    params: {
7692	      lazy: {
7693	        enabled: false,
7694	        loadPrevNext: false,
7695	        loadPrevNextAmount: 1,
7696	        loadOnTransitionStart: false,
7697	        elementClass: 'swiper-lazy',
7698	        loadingClass: 'swiper-lazy-loading',
7699	        loadedClass: 'swiper-lazy-loaded',
7700	        preloaderClass: 'swiper-lazy-preloader'
7701	      }
7702	    },
7703	    create: function create() {
7704	      var swiper = this;
7705	      bindModuleMethods(swiper, {
7706	        lazy: _extends({
7707	          initialImageLoaded: false
7708	        }, Lazy)
7709	      });
7710	    },
7711	    on: {
7712	      beforeInit: function beforeInit(swiper) {
7713	        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
7714	          swiper.params.preloadImages = false;
7715	        }
7716	      },
7717	      init: function init(swiper) {
7718	        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
7719	          swiper.lazy.load();
7720	        }
7721	      },
7722	      scroll: function scroll(swiper) {
7723	        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
7724	          swiper.lazy.load();
7725	        }
7726	      },
7727	      resize: function resize(swiper) {
7728	        if (swiper.params.lazy.enabled) {
7729	          swiper.lazy.load();
7730	        }
7731	      },
7732	      scrollbarDragMove: function scrollbarDragMove(swiper) {
7733	        if (swiper.params.lazy.enabled) {
7734	          swiper.lazy.load();
7735	        }
7736	      },
7737	      transitionStart: function transitionStart(swiper) {
7738	        if (swiper.params.lazy.enabled) {
7739	          if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
7740	            swiper.lazy.load();
7741	          }
7742	        }
7743	      },
7744	      transitionEnd: function transitionEnd(swiper) {
7745	        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
7746	          swiper.lazy.load();
7747	        }
7748	      },
7749	      slideChange: function slideChange(swiper) {
7750	        if (swiper.params.lazy.enabled && swiper.params.cssMode) {
7751	          swiper.lazy.load();
7752	        }
7753	      }
7754	    }
7755	  };
7756	
7757	  var Controller = {
7758	    LinearSpline: function LinearSpline(x, y) {
7759	      var binarySearch = function search() {
7760	        var maxIndex;
7761	        var minIndex;
7762	        var guess;
7763	        return function (array, val) {
7764	          minIndex = -1;
7765	          maxIndex = array.length;
7766	
7767	          while (maxIndex - minIndex > 1) {
7768	            guess = maxIndex + minIndex >> 1;
7769	
7770	            if (array[guess] <= val) {
7771	              minIndex = guess;
7772	            } else {
7773	              maxIndex = guess;
7774	            }
7775	          }
7776	
7777	          return maxIndex;
7778	        };
7779	      }();
7780	
7781	      this.x = x;
7782	      this.y = y;
7783	      this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
7784	      // (x1,y1) is the known point before given value,
7785	      // (x3,y3) is the known point after given value.
7786	
7787	      var i1;
7788	      var i3;
7789	
7790	      this.interpolate = function interpolate(x2) {
7791	        if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
7792	
7793	        i3 = binarySearch(this.x, x2);
7794	        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
7795	        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
7796	
7797	        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
7798	      };
7799	
7800	      return this;
7801	    },
7802	    // xxx: for now i will just save one spline function to to
7803	    getInterpolateFunction: function getInterpolateFunction(c) {
7804	      var swiper = this;
7805	
7806	      if (!swiper.controller.spline) {
7807	        swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
7808	      }
7809	    },
7810	    setTranslate: function setTranslate(_setTranslate, byController) {
7811	      var swiper = this;
7812	      var controlled = swiper.controller.control;
7813	      var multiplier;
7814	      var controlledTranslate;
7815	      var Swiper = swiper.constructor;
7816	
7817	      function setControlledTranslate(c) {
7818	        // this will create an Interpolate function based on the snapGrids
7819	        // x is the Grid of the scrolled scroller and y will be the controlled scroller
7820	        // it makes sense to create this only once and recall it for the interpolation
7821	        // the function does a lot of value caching for performance
7822	        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
7823	
7824	        if (swiper.params.controller.by === 'slide') {
7825	          swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
7826	          // but it did not work out
7827	
7828	          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
7829	        }
7830	
7831	        if (!controlledTranslate || swiper.params.controller.by === 'container') {
7832	          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
7833	          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
7834	        }
7835	
7836	        if (swiper.params.controller.inverse) {
7837	          controlledTranslate = c.maxTranslate() - controlledTranslate;
7838	        }
7839	
7840	        c.updateProgress(controlledTranslate);
7841	        c.setTranslate(controlledTranslate, swiper);
7842	        c.updateActiveIndex();
7843	        c.updateSlidesClasses();
7844	      }
7845	
7846	      if (Array.isArray(controlled)) {
7847	        for (var i = 0; i < controlled.length; i += 1) {
7848	          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
7849	            setControlledTranslate(controlled[i]);
7850	          }
7851	        }
7852	      } else if (controlled instanceof Swiper && byController !== controlled) {
7853	        setControlledTranslate(controlled);
7854	      }
7855	    },
7856	    setTransition: function setTransition(duration, byController) {
7857	      var swiper = this;
7858	      var Swiper = swiper.constructor;
7859	      var controlled = swiper.controller.control;
7860	      var i;
7861	
7862	      function setControlledTransition(c) {
7863	        c.setTransition(duration, swiper);
7864	
7865	        if (duration !== 0) {
7866	          c.transitionStart();
7867	
7868	          if (c.params.autoHeight) {
7869	            nextTick(function () {
7870	              c.updateAutoHeight();
7871	            });
7872	          }
7873	
7874	          c.$wrapperEl.transitionEnd(function () {
7875	            if (!controlled) return;
7876	
7877	            if (c.params.loop && swiper.params.controller.by === 'slide') {
7878	              c.loopFix();
7879	            }
7880	
7881	            c.transitionEnd();
7882	          });
7883	        }
7884	      }
7885	
7886	      if (Array.isArray(controlled)) {
7887	        for (i = 0; i < controlled.length; i += 1) {
7888	          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
7889	            setControlledTransition(controlled[i]);
7890	          }
7891	        }
7892	      } else if (controlled instanceof Swiper && byController !== controlled) {
7893	        setControlledTransition(controlled);
7894	      }
7895	    }
7896	  };
7897	  var Controller$1 = {
7898	    name: 'controller',
7899	    params: {
7900	      controller: {
7901	        control: undefined,
7902	        inverse: false,
7903	        by: 'slide' // or 'container'
7904	
7905	      }
7906	    },
7907	    create: function create() {
7908	      var swiper = this;
7909	      bindModuleMethods(swiper, {
7910	        controller: _extends({
7911	          control: swiper.params.controller.control
7912	        }, Controller)
7913	      });
7914	    },
7915	    on: {
7916	      update: function update(swiper) {
7917	        if (!swiper.controller.control) return;
7918	
7919	        if (swiper.controller.spline) {
7920	          swiper.controller.spline = undefined;
7921	          delete swiper.controller.spline;
7922	        }
7923	      },
7924	      resize: function resize(swiper) {
7925	        if (!swiper.controller.control) return;
7926	
7927	        if (swiper.controller.spline) {
7928	          swiper.controller.spline = undefined;
7929	          delete swiper.controller.spline;
7930	        }
7931	      },
7932	      observerUpdate: function observerUpdate(swiper) {
7933	        if (!swiper.controller.control) return;
7934	
7935	        if (swiper.controller.spline) {
7936	          swiper.controller.spline = undefined;
7937	          delete swiper.controller.spline;
7938	        }
7939	      },
7940	      setTranslate: function setTranslate(swiper, translate, byController) {
7941	        if (!swiper.controller.control) return;
7942	        swiper.controller.setTranslate(translate, byController);
7943	      },
7944	      setTransition: function setTransition(swiper, duration, byController) {
7945	        if (!swiper.controller.control) return;
7946	        swiper.controller.setTransition(duration, byController);
7947	      }
7948	    }
7949	  };
7950	
7951	  var A11y = {
7952	    makeElFocusable: function makeElFocusable($el) {
7953	      $el.attr('tabIndex', '0');
7954	      return $el;
7955	    },
7956	    makeElNotFocusable: function makeElNotFocusable($el) {
7957	      $el.attr('tabIndex', '-1');
7958	      return $el;
7959	    },
7960	    addElRole: function addElRole($el, role) {
7961	      $el.attr('role', role);
7962	      return $el;
7963	    },
7964	    addElLabel: function addElLabel($el, label) {
7965	      $el.attr('aria-label', label);
7966	      return $el;
7967	    },
7968	    disableEl: function disableEl($el) {
7969	      $el.attr('aria-disabled', true);
7970	      return $el;
7971	    },
7972	    enableEl: function enableEl($el) {
7973	      $el.attr('aria-disabled', false);
7974	      return $el;
7975	    },
7976	    onEnterKey: function onEnterKey(e) {
7977	      var swiper = this;
7978	      var params = swiper.params.a11y;
7979	      if (e.keyCode !== 13) return;
7980	      var $targetEl = $(e.target);
7981	
7982	      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
7983	        if (!(swiper.isEnd && !swiper.params.loop)) {
7984	          swiper.slideNext();
7985	        }
7986	
7987	        if (swiper.isEnd) {
7988	          swiper.a11y.notify(params.lastSlideMessage);
7989	        } else {
7990	          swiper.a11y.notify(params.nextSlideMessage);
7991	        }
7992	      }
7993	
7994	      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
7995	        if (!(swiper.isBeginning && !swiper.params.loop)) {
7996	          swiper.slidePrev();
7997	        }
7998	
7999	        if (swiper.isBeginning) {
8000	          swiper.a11y.notify(params.firstSlideMessage);
8001	        } else {
8002	          swiper.a11y.notify(params.prevSlideMessage);
8003	        }
8004	      }
8005	
8006	      if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
8007	        $targetEl[0].click();
8008	      }
8009	    },
8010	    notify: function notify(message) {
8011	      var swiper = this;
8012	      var notification = swiper.a11y.liveRegion;
8013	      if (notification.length === 0) return;
8014	      notification.html('');
8015	      notification.html(message);
8016	    },
8017	    updateNavigation: function updateNavigation() {
8018	      var swiper = this;
8019	      if (swiper.params.loop || !swiper.navigation) return;
8020	      var _swiper$navigation = swiper.navigation,
8021	          $nextEl = _swiper$navigation.$nextEl,
8022	          $prevEl = _swiper$navigation.$prevEl;
8023	
8024	      if ($prevEl && $prevEl.length > 0) {
8025	        if (swiper.isBeginning) {
8026	          swiper.a11y.disableEl($prevEl);
8027	          swiper.a11y.makeElNotFocusable($prevEl);
8028	        } else {
8029	          swiper.a11y.enableEl($prevEl);
8030	          swiper.a11y.makeElFocusable($prevEl);
8031	        }
8032	      }
8033	
8034	      if ($nextEl && $nextEl.length > 0) {
8035	        if (swiper.isEnd) {
8036	          swiper.a11y.disableEl($nextEl);
8037	          swiper.a11y.makeElNotFocusable($nextEl);
8038	        } else {
8039	          swiper.a11y.enableEl($nextEl);
8040	          swiper.a11y.makeElFocusable($nextEl);
8041	        }
8042	      }
8043	    },
8044	    updatePagination: function updatePagination() {
8045	      var swiper = this;
8046	      var params = swiper.params.a11y;
8047	
8048	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
8049	        swiper.pagination.bullets.each(function (bulletEl) {
8050	          var $bulletEl = $(bulletEl);
8051	          swiper.a11y.makeElFocusable($bulletEl);
8052	
8053	          if (!swiper.params.pagination.renderBullet) {
8054	            swiper.a11y.addElRole($bulletEl, 'button');
8055	            swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
8056	          }
8057	        });
8058	      }
8059	    },
8060	    init: function init() {
8061	      var swiper = this;
8062	      swiper.$el.append(swiper.a11y.liveRegion); // Navigation
8063	
8064	      var params = swiper.params.a11y;
8065	      var $nextEl;
8066	      var $prevEl;
8067	
8068	      if (swiper.navigation && swiper.navigation.$nextEl) {
8069	        $nextEl = swiper.navigation.$nextEl;
8070	      }
8071	
8072	      if (swiper.navigation && swiper.navigation.$prevEl) {
8073	        $prevEl = swiper.navigation.$prevEl;
8074	      }
8075	
8076	      if ($nextEl) {
8077	        swiper.a11y.makeElFocusable($nextEl);
8078	        swiper.a11y.addElRole($nextEl, 'button');
8079	        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
8080	        $nextEl.on('keydown', swiper.a11y.onEnterKey);
8081	      }
8082	
8083	      if ($prevEl) {
8084	        swiper.a11y.makeElFocusable($prevEl);
8085	        swiper.a11y.addElRole($prevEl, 'button');
8086	        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
8087	        $prevEl.on('keydown', swiper.a11y.onEnterKey);
8088	      } // Pagination
8089	
8090	
8091	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
8092	        swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
8093	      }
8094	    },
8095	    destroy: function destroy() {
8096	      var swiper = this;
8097	      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
8098	      var $nextEl;
8099	      var $prevEl;
8100	
8101	      if (swiper.navigation && swiper.navigation.$nextEl) {
8102	        $nextEl = swiper.navigation.$nextEl;
8103	      }
8104	
8105	      if (swiper.navigation && swiper.navigation.$prevEl) {
8106	        $prevEl = swiper.navigation.$prevEl;
8107	      }
8108	
8109	      if ($nextEl) {
8110	        $nextEl.off('keydown', swiper.a11y.onEnterKey);
8111	      }
8112	
8113	      if ($prevEl) {
8114	        $prevEl.off('keydown', swiper.a11y.onEnterKey);
8115	      } // Pagination
8116	
8117	
8118	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
8119	        swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
8120	      }
8121	    }
8122	  };
8123	  var A11y$1 = {
8124	    name: 'a11y',
8125	    params: {
8126	      a11y: {
8127	        enabled: true,
8128	        notificationClass: 'swiper-notification',
8129	        prevSlideMessage: 'Previous slide',
8130	        nextSlideMessage: 'Next slide',
8131	        firstSlideMessage: 'This is the first slide',
8132	        lastSlideMessage: 'This is the last slide',
8133	        paginationBulletMessage: 'Go to slide {{index}}'
8134	      }
8135	    },
8136	    create: function create() {
8137	      var swiper = this;
8138	      bindModuleMethods(swiper, {
8139	        a11y: _extends(_extends({}, A11y), {}, {
8140	          liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
8141	        })
8142	      });
8143	    },
8144	    on: {
8145	      init: function init(swiper) {
8146	        if (!swiper.params.a11y.enabled) return;
8147	        swiper.a11y.init();
8148	        swiper.a11y.updateNavigation();
8149	      },
8150	      toEdge: function toEdge(swiper) {
8151	        if (!swiper.params.a11y.enabled) return;
8152	        swiper.a11y.updateNavigation();
8153	      },
8154	      fromEdge: function fromEdge(swiper) {
8155	        if (!swiper.params.a11y.enabled) return;
8156	        swiper.a11y.updateNavigation();
8157	      },
8158	      paginationUpdate: function paginationUpdate(swiper) {
8159	        if (!swiper.params.a11y.enabled) return;
8160	        swiper.a11y.updatePagination();
8161	      },
8162	      destroy: function destroy(swiper) {
8163	        if (!swiper.params.a11y.enabled) return;
8164	        swiper.a11y.destroy();
8165	      }
8166	    }
8167	  };
8168	
8169	  var History = {
8170	    init: function init() {
8171	      var swiper = this;
8172	      var window = getWindow();
8173	      if (!swiper.params.history) return;
8174	
8175	      if (!window.history || !window.history.pushState) {
8176	        swiper.params.history.enabled = false;
8177	        swiper.params.hashNavigation.enabled = true;
8178	        return;
8179	      }
8180	
8181	      var history = swiper.history;
8182	      history.initialized = true;
8183	      history.paths = History.getPathValues(swiper.params.url);
8184	      if (!history.paths.key && !history.paths.value) return;
8185	      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
8186	
8187	      if (!swiper.params.history.replaceState) {
8188	        window.addEventListener('popstate', swiper.history.setHistoryPopState);
8189	      }
8190	    },
8191	    destroy: function destroy() {
8192	      var swiper = this;
8193	      var window = getWindow();
8194	
8195	      if (!swiper.params.history.replaceState) {
8196	        window.removeEventListener('popstate', swiper.history.setHistoryPopState);
8197	      }
8198	    },
8199	    setHistoryPopState: function setHistoryPopState() {
8200	      var swiper = this;
8201	      swiper.history.paths = History.getPathValues(swiper.params.url);
8202	      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
8203	    },
8204	    getPathValues: function getPathValues(urlOverride) {
8205	      var window = getWindow();
8206	      var location;
8207	
8208	      if (urlOverride) {
8209	        location = new URL(urlOverride);
8210	      } else {
8211	        location = window.location;
8212	      }
8213	
8214	      var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
8215	        return part !== '';
8216	      });
8217	      var total = pathArray.length;
8218	      var key = pathArray[total - 2];
8219	      var value = pathArray[total - 1];
8220	      return {
8221	        key: key,
8222	        value: value
8223	      };
8224	    },
8225	    setHistory: function setHistory(key, index) {
8226	      var swiper = this;
8227	      var window = getWindow();
8228	      if (!swiper.history.initialized || !swiper.params.history.enabled) return;
8229	      var location;
8230	
8231	      if (swiper.params.url) {
8232	        location = new URL(swiper.params.url);
8233	      } else {
8234	        location = window.location;
8235	      }
8236	
8237	      var slide = swiper.slides.eq(index);
8238	      var value = History.slugify(slide.attr('data-history'));
8239	
8240	      if (!location.pathname.includes(key)) {
8241	        value = key + "/" + value;
8242	      }
8243	
8244	      var currentState = window.history.state;
8245	
8246	      if (currentState && currentState.value === value) {
8247	        return;
8248	      }
8249	
8250	      if (swiper.params.history.replaceState) {
8251	        window.history.replaceState({
8252	          value: value
8253	        }, null, value);
8254	      } else {
8255	        window.history.pushState({
8256	          value: value
8257	        }, null, value);
8258	      }
8259	    },
8260	    slugify: function slugify(text) {
8261	      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
8262	    },
8263	    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
8264	      var swiper = this;
8265	
8266	      if (value) {
8267	        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
8268	          var slide = swiper.slides.eq(i);
8269	          var slideHistory = History.slugify(slide.attr('data-history'));
8270	
8271	          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
8272	            var index = slide.index();
8273	            swiper.slideTo(index, speed, runCallbacks);
8274	          }
8275	        }
8276	      } else {
8277	        swiper.slideTo(0, speed, runCallbacks);
8278	      }
8279	    }
8280	  };
8281	  var History$1 = {
8282	    name: 'history',
8283	    params: {
8284	      history: {
8285	        enabled: false,
8286	        replaceState: false,
8287	        key: 'slides'
8288	      }
8289	    },
8290	    create: function create() {
8291	      var swiper = this;
8292	      bindModuleMethods(swiper, {
8293	        history: _extends({}, History)
8294	      });
8295	    },
8296	    on: {
8297	      init: function init(swiper) {
8298	        if (swiper.params.history.enabled) {
8299	          swiper.history.init();
8300	        }
8301	      },
8302	      destroy: function destroy(swiper) {
8303	        if (swiper.params.history.enabled) {
8304	          swiper.history.destroy();
8305	        }
8306	      },
8307	      transitionEnd: function transitionEnd(swiper) {
8308	        if (swiper.history.initialized) {
8309	          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
8310	        }
8311	      },
8312	      slideChange: function slideChange(swiper) {
8313	        if (swiper.history.initialized && swiper.params.cssMode) {
8314	          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
8315	        }
8316	      }
8317	    }
8318	  };
8319	
8320	  var HashNavigation = {
8321	    onHashCange: function onHashCange() {
8322	      var swiper = this;
8323	      var document = getDocument();
8324	      swiper.emit('hashChange');
8325	      var newHash = document.location.hash.replace('#', '');
8326	      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
8327	
8328	      if (newHash !== activeSlideHash) {
8329	        var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
8330	        if (typeof newIndex === 'undefined') return;
8331	        swiper.slideTo(newIndex);
8332	      }
8333	    },
8334	    setHash: function setHash() {
8335	      var swiper = this;
8336	      var window = getWindow();
8337	      var document = getDocument();
8338	      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
8339	
8340	      if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
8341	        window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
8342	        swiper.emit('hashSet');
8343	      } else {
8344	        var slide = swiper.slides.eq(swiper.activeIndex);
8345	        var hash = slide.attr('data-hash') || slide.attr('data-history');
8346	        document.location.hash = hash || '';
8347	        swiper.emit('hashSet');
8348	      }
8349	    },
8350	    init: function init() {
8351	      var swiper = this;
8352	      var document = getDocument();
8353	      var window = getWindow();
8354	      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
8355	      swiper.hashNavigation.initialized = true;
8356	      var hash = document.location.hash.replace('#', '');
8357	
8358	      if (hash) {
8359	        var speed = 0;
8360	
8361	        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
8362	          var slide = swiper.slides.eq(i);
8363	          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
8364	
8365	          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
8366	            var index = slide.index();
8367	            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
8368	          }
8369	        }
8370	      }
8371	
8372	      if (swiper.params.hashNavigation.watchState) {
8373	        $(window).on('hashchange', swiper.hashNavigation.onHashCange);
8374	      }
8375	    },
8376	    destroy: function destroy() {
8377	      var swiper = this;
8378	      var window = getWindow();
8379	
8380	      if (swiper.params.hashNavigation.watchState) {
8381	        $(window).off('hashchange', swiper.hashNavigation.onHashCange);
8382	      }
8383	    }
8384	  };
8385	  var HashNavigation$1 = {
8386	    name: 'hash-navigation',
8387	    params: {
8388	      hashNavigation: {
8389	        enabled: false,
8390	        replaceState: false,
8391	        watchState: false
8392	      }
8393	    },
8394	    create: function create() {
8395	      var swiper = this;
8396	      bindModuleMethods(swiper, {
8397	        hashNavigation: _extends({
8398	          initialized: false
8399	        }, HashNavigation)
8400	      });
8401	    },
8402	    on: {
8403	      init: function init(swiper) {
8404	        if (swiper.params.hashNavigation.enabled) {
8405	          swiper.hashNavigation.init();
8406	        }
8407	      },
8408	      destroy: function destroy(swiper) {
8409	        if (swiper.params.hashNavigation.enabled) {
8410	          swiper.hashNavigation.destroy();
8411	        }
8412	      },
8413	      transitionEnd: function transitionEnd(swiper) {
8414	        if (swiper.hashNavigation.initialized) {
8415	          swiper.hashNavigation.setHash();
8416	        }
8417	      },
8418	      slideChange: function slideChange(swiper) {
8419	        if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
8420	          swiper.hashNavigation.setHash();
8421	        }
8422	      }
8423	    }
8424	  };
8425	
8426	  var Autoplay = {
8427	    run: function run() {
8428	      var swiper = this;
8429	      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
8430	      var delay = swiper.params.autoplay.delay;
8431	
8432	      if ($activeSlideEl.attr('data-swiper-autoplay')) {
8433	        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
8434	      }
8435	
8436	      clearTimeout(swiper.autoplay.timeout);
8437	      swiper.autoplay.timeout = nextTick(function () {
8438	        if (swiper.params.autoplay.reverseDirection) {
8439	          if (swiper.params.loop) {
8440	            swiper.loopFix();
8441	            swiper.slidePrev(swiper.params.speed, true, true);
8442	            swiper.emit('autoplay');
8443	          } else if (!swiper.isBeginning) {
8444	            swiper.slidePrev(swiper.params.speed, true, true);
8445	            swiper.emit('autoplay');
8446	          } else if (!swiper.params.autoplay.stopOnLastSlide) {
8447	            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
8448	            swiper.emit('autoplay');
8449	          } else {
8450	            swiper.autoplay.stop();
8451	          }
8452	        } else if (swiper.params.loop) {
8453	          swiper.loopFix();
8454	          swiper.slideNext(swiper.params.speed, true, true);
8455	          swiper.emit('autoplay');
8456	        } else if (!swiper.isEnd) {
8457	          swiper.slideNext(swiper.params.speed, true, true);
8458	          swiper.emit('autoplay');
8459	        } else if (!swiper.params.autoplay.stopOnLastSlide) {
8460	          swiper.slideTo(0, swiper.params.speed, true, true);
8461	          swiper.emit('autoplay');
8462	        } else {
8463	          swiper.autoplay.stop();
8464	        }
8465	
8466	        if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
8467	      }, delay);
8468	    },
8469	    start: function start() {
8470	      var swiper = this;
8471	      if (typeof swiper.autoplay.timeout !== 'undefined') return false;
8472	      if (swiper.autoplay.running) return false;
8473	      swiper.autoplay.running = true;
8474	      swiper.emit('autoplayStart');
8475	      swiper.autoplay.run();
8476	      return true;
8477	    },
8478	    stop: function stop() {
8479	      var swiper = this;
8480	      if (!swiper.autoplay.running) return false;
8481	      if (typeof swiper.autoplay.timeout === 'undefined') return false;
8482	
8483	      if (swiper.autoplay.timeout) {
8484	        clearTimeout(swiper.autoplay.timeout);
8485	        swiper.autoplay.timeout = undefined;
8486	      }
8487	
8488	      swiper.autoplay.running = false;
8489	      swiper.emit('autoplayStop');
8490	      return true;
8491	    },
8492	    pause: function pause(speed) {
8493	      var swiper = this;
8494	      if (!swiper.autoplay.running) return;
8495	      if (swiper.autoplay.paused) return;
8496	      if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
8497	      swiper.autoplay.paused = true;
8498	
8499	      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
8500	        swiper.autoplay.paused = false;
8501	        swiper.autoplay.run();
8502	      } else {
8503	        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
8504	        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
8505	      }
8506	    },
8507	    onVisibilityChange: function onVisibilityChange() {
8508	      var swiper = this;
8509	      var document = getDocument();
8510	
8511	      if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
8512	        swiper.autoplay.pause();
8513	      }
8514	
8515	      if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
8516	        swiper.autoplay.run();
8517	        swiper.autoplay.paused = false;
8518	      }
8519	    },
8520	    onTransitionEnd: function onTransitionEnd(e) {
8521	      var swiper = this;
8522	      if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
8523	      if (e.target !== swiper.$wrapperEl[0]) return;
8524	      swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
8525	      swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
8526	      swiper.autoplay.paused = false;
8527	
8528	      if (!swiper.autoplay.running) {
8529	        swiper.autoplay.stop();
8530	      } else {
8531	        swiper.autoplay.run();
8532	      }
8533	    }
8534	  };
8535	  var Autoplay$1 = {
8536	    name: 'autoplay',
8537	    params: {
8538	      autoplay: {
8539	        enabled: false,
8540	        delay: 3000,
8541	        waitForTransition: true,
8542	        disableOnInteraction: true,
8543	        stopOnLastSlide: false,
8544	        reverseDirection: false
8545	      }
8546	    },
8547	    create: function create() {
8548	      var swiper = this;
8549	      bindModuleMethods(swiper, {
8550	        autoplay: _extends(_extends({}, Autoplay), {}, {
8551	          running: false,
8552	          paused: false
8553	        })
8554	      });
8555	    },
8556	    on: {
8557	      init: function init(swiper) {
8558	        if (swiper.params.autoplay.enabled) {
8559	          swiper.autoplay.start();
8560	          var document = getDocument();
8561	          document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
8562	        }
8563	      },
8564	      beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
8565	        if (swiper.autoplay.running) {
8566	          if (internal || !swiper.params.autoplay.disableOnInteraction) {
8567	            swiper.autoplay.pause(speed);
8568	          } else {
8569	            swiper.autoplay.stop();
8570	          }
8571	        }
8572	      },
8573	      sliderFirstMove: function sliderFirstMove(swiper) {
8574	        if (swiper.autoplay.running) {
8575	          if (swiper.params.autoplay.disableOnInteraction) {
8576	            swiper.autoplay.stop();
8577	          } else {
8578	            swiper.autoplay.pause();
8579	          }
8580	        }
8581	      },
8582	      touchEnd: function touchEnd(swiper) {
8583	        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
8584	          swiper.autoplay.run();
8585	        }
8586	      },
8587	      destroy: function destroy(swiper) {
8588	        if (swiper.autoplay.running) {
8589	          swiper.autoplay.stop();
8590	        }
8591	
8592	        var document = getDocument();
8593	        document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
8594	      }
8595	    }
8596	  };
8597	
8598	  var Fade = {
8599	    setTranslate: function setTranslate() {
8600	      var swiper = this;
8601	      var slides = swiper.slides;
8602	
8603	      for (var i = 0; i < slides.length; i += 1) {
8604	        var $slideEl = swiper.slides.eq(i);
8605	        var offset = $slideEl[0].swiperSlideOffset;
8606	        var tx = -offset;
8607	        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
8608	        var ty = 0;
8609	
8610	        if (!swiper.isHorizontal()) {
8611	          ty = tx;
8612	          tx = 0;
8613	        }
8614	
8615	        var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
8616	        $slideEl.css({
8617	          opacity: slideOpacity
8618	        }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
8619	      }
8620	    },
8621	    setTransition: function setTransition(duration) {
8622	      var swiper = this;
8623	      var slides = swiper.slides,
8624	          $wrapperEl = swiper.$wrapperEl;
8625	      slides.transition(duration);
8626	
8627	      if (swiper.params.virtualTranslate && duration !== 0) {
8628	        var eventTriggered = false;
8629	        slides.transitionEnd(function () {
8630	          if (eventTriggered) return;
8631	          if (!swiper || swiper.destroyed) return;
8632	          eventTriggered = true;
8633	          swiper.animating = false;
8634	          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
8635	
8636	          for (var i = 0; i < triggerEvents.length; i += 1) {
8637	            $wrapperEl.trigger(triggerEvents[i]);
8638	          }
8639	        });
8640	      }
8641	    }
8642	  };
8643	  var EffectFade = {
8644	    name: 'effect-fade',
8645	    params: {
8646	      fadeEffect: {
8647	        crossFade: false
8648	      }
8649	    },
8650	    create: function create() {
8651	      var swiper = this;
8652	      bindModuleMethods(swiper, {
8653	        fadeEffect: _extends({}, Fade)
8654	      });
8655	    },
8656	    on: {
8657	      beforeInit: function beforeInit(swiper) {
8658	        if (swiper.params.effect !== 'fade') return;
8659	        swiper.classNames.push(swiper.params.containerModifierClass + "fade");
8660	        var overwriteParams = {
8661	          slidesPerView: 1,
8662	          slidesPerColumn: 1,
8663	          slidesPerGroup: 1,
8664	          watchSlidesProgress: true,
8665	          spaceBetween: 0,
8666	          virtualTranslate: true
8667	        };
8668	        extend$1(swiper.params, overwriteParams);
8669	        extend$1(swiper.originalParams, overwriteParams);
8670	      },
8671	      setTranslate: function setTranslate(swiper) {
8672	        if (swiper.params.effect !== 'fade') return;
8673	        swiper.fadeEffect.setTranslate();
8674	      },
8675	      setTransition: function setTransition(swiper, duration) {
8676	        if (swiper.params.effect !== 'fade') return;
8677	        swiper.fadeEffect.setTransition(duration);
8678	      }
8679	    }
8680	  };
8681	
8682	  var Cube = {
8683	    setTranslate: function setTranslate() {
8684	      var swiper = this;
8685	      var $el = swiper.$el,
8686	          $wrapperEl = swiper.$wrapperEl,
8687	          slides = swiper.slides,
8688	          swiperWidth = swiper.width,
8689	          swiperHeight = swiper.height,
8690	          rtl = swiper.rtlTranslate,
8691	          swiperSize = swiper.size,
8692	          browser = swiper.browser;
8693	      var params = swiper.params.cubeEffect;
8694	      var isHorizontal = swiper.isHorizontal();
8695	      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
8696	      var wrapperRotate = 0;
8697	      var $cubeShadowEl;
8698	
8699	      if (params.shadow) {
8700	        if (isHorizontal) {
8701	          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
8702	
8703	          if ($cubeShadowEl.length === 0) {
8704	            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
8705	            $wrapperEl.append($cubeShadowEl);
8706	          }
8707	
8708	          $cubeShadowEl.css({
8709	            height: swiperWidth + "px"
8710	          });
8711	        } else {
8712	          $cubeShadowEl = $el.find('.swiper-cube-shadow');
8713	
8714	          if ($cubeShadowEl.length === 0) {
8715	            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
8716	            $el.append($cubeShadowEl);
8717	          }
8718	        }
8719	      }
8720	
8721	      for (var i = 0; i < slides.length; i += 1) {
8722	        var $slideEl = slides.eq(i);
8723	        var slideIndex = i;
8724	
8725	        if (isVirtual) {
8726	          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
8727	        }
8728	
8729	        var slideAngle = slideIndex * 90;
8730	        var round = Math.floor(slideAngle / 360);
8731	
8732	        if (rtl) {
8733	          slideAngle = -slideAngle;
8734	          round = Math.floor(-slideAngle / 360);
8735	        }
8736	
8737	        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
8738	        var tx = 0;
8739	        var ty = 0;
8740	        var tz = 0;
8741	
8742	        if (slideIndex % 4 === 0) {
8743	          tx = -round * 4 * swiperSize;
8744	          tz = 0;
8745	        } else if ((slideIndex - 1) % 4 === 0) {
8746	          tx = 0;
8747	          tz = -round * 4 * swiperSize;
8748	        } else if ((slideIndex - 2) % 4 === 0) {
8749	          tx = swiperSize + round * 4 * swiperSize;
8750	          tz = swiperSize;
8751	        } else if ((slideIndex - 3) % 4 === 0) {
8752	          tx = -swiperSize;
8753	          tz = 3 * swiperSize + swiperSize * 4 * round;
8754	        }
8755	
8756	        if (rtl) {
8757	          tx = -tx;
8758	        }
8759	
8760	        if (!isHorizontal) {
8761	          ty = tx;
8762	          tx = 0;
8763	        }
8764	
8765	        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
8766	
8767	        if (progress <= 1 && progress > -1) {
8768	          wrapperRotate = slideIndex * 90 + progress * 90;
8769	          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
8770	        }
8771	
8772	        $slideEl.transform(transform);
8773	
8774	        if (params.slideShadows) {
8775	          // Set shadows
8776	          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
8777	          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
8778	
8779	          if (shadowBefore.length === 0) {
8780	            shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
8781	            $slideEl.append(shadowBefore);
8782	          }
8783	
8784	          if (shadowAfter.length === 0) {
8785	            shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
8786	            $slideEl.append(shadowAfter);
8787	          }
8788	
8789	          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
8790	          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
8791	        }
8792	      }
8793	
8794	      $wrapperEl.css({
8795	        '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
8796	        '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
8797	        '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
8798	        'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
8799	      });
8800	
8801	      if (params.shadow) {
8802	        if (isHorizontal) {
8803	          $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
8804	        } else {
8805	          var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
8806	          var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
8807	          var scale1 = params.shadowScale;
8808	          var scale2 = params.shadowScale / multiplier;
8809	          var offset = params.shadowOffset;
8810	          $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
8811	        }
8812	      }
8813	
8814	      var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
8815	      $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
8816	    },
8817	    setTransition: function setTransition(duration) {
8818	      var swiper = this;
8819	      var $el = swiper.$el,
8820	          slides = swiper.slides;
8821	      slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
8822	
8823	      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
8824	        $el.find('.swiper-cube-shadow').transition(duration);
8825	      }
8826	    }
8827	  };
8828	  var EffectCube = {
8829	    name: 'effect-cube',
8830	    params: {
8831	      cubeEffect: {
8832	        slideShadows: true,
8833	        shadow: true,
8834	        shadowOffset: 20,
8835	        shadowScale: 0.94
8836	      }
8837	    },
8838	    create: function create() {
8839	      var swiper = this;
8840	      bindModuleMethods(swiper, {
8841	        cubeEffect: _extends({}, Cube)
8842	      });
8843	    },
8844	    on: {
8845	      beforeInit: function beforeInit(swiper) {
8846	        if (swiper.params.effect !== 'cube') return;
8847	        swiper.classNames.push(swiper.params.containerModifierClass + "cube");
8848	        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
8849	        var overwriteParams = {
8850	          slidesPerView: 1,
8851	          slidesPerColumn: 1,
8852	          slidesPerGroup: 1,
8853	          watchSlidesProgress: true,
8854	          resistanceRatio: 0,
8855	          spaceBetween: 0,
8856	          centeredSlides: false,
8857	          virtualTranslate: true
8858	        };
8859	        extend$1(swiper.params, overwriteParams);
8860	        extend$1(swiper.originalParams, overwriteParams);
8861	      },
8862	      setTranslate: function setTranslate(swiper) {
8863	        if (swiper.params.effect !== 'cube') return;
8864	        swiper.cubeEffect.setTranslate();
8865	      },
8866	      setTransition: function setTransition(swiper, duration) {
8867	        if (swiper.params.effect !== 'cube') return;
8868	        swiper.cubeEffect.setTransition(duration);
8869	      }
8870	    }
8871	  };
8872	
8873	  var Flip = {
8874	    setTranslate: function setTranslate() {
8875	      var swiper = this;
8876	      var slides = swiper.slides,
8877	          rtl = swiper.rtlTranslate;
8878	
8879	      for (var i = 0; i < slides.length; i += 1) {
8880	        var $slideEl = slides.eq(i);
8881	        var progress = $slideEl[0].progress;
8882	
8883	        if (swiper.params.flipEffect.limitRotation) {
8884	          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
8885	        }
8886	
8887	        var offset = $slideEl[0].swiperSlideOffset;
8888	        var rotate = -180 * progress;
8889	        var rotateY = rotate;
8890	        var rotateX = 0;
8891	        var tx = -offset;
8892	        var ty = 0;
8893	
8894	        if (!swiper.isHorizontal()) {
8895	          ty = tx;
8896	          tx = 0;
8897	          rotateX = -rotateY;
8898	          rotateY = 0;
8899	        } else if (rtl) {
8900	          rotateY = -rotateY;
8901	        }
8902	
8903	        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
8904	
8905	        if (swiper.params.flipEffect.slideShadows) {
8906	          // Set shadows
8907	          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
8908	          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
8909	
8910	          if (shadowBefore.length === 0) {
8911	            shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
8912	            $slideEl.append(shadowBefore);
8913	          }
8914	
8915	          if (shadowAfter.length === 0) {
8916	            shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
8917	            $slideEl.append(shadowAfter);
8918	          }
8919	
8920	          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
8921	          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
8922	        }
8923	
8924	        $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
8925	      }
8926	    },
8927	    setTransition: function setTransition(duration) {
8928	      var swiper = this;
8929	      var slides = swiper.slides,
8930	          activeIndex = swiper.activeIndex,
8931	          $wrapperEl = swiper.$wrapperEl;
8932	      slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
8933	
8934	      if (swiper.params.virtualTranslate && duration !== 0) {
8935	        var eventTriggered = false; // eslint-disable-next-line
8936	
8937	        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
8938	          if (eventTriggered) return;
8939	          if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
8940	
8941	          eventTriggered = true;
8942	          swiper.animating = false;
8943	          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
8944	
8945	          for (var i = 0; i < triggerEvents.length; i += 1) {
8946	            $wrapperEl.trigger(triggerEvents[i]);
8947	          }
8948	        });
8949	      }
8950	    }
8951	  };
8952	  var EffectFlip = {
8953	    name: 'effect-flip',
8954	    params: {
8955	      flipEffect: {
8956	        slideShadows: true,
8957	        limitRotation: true
8958	      }
8959	    },
8960	    create: function create() {
8961	      var swiper = this;
8962	      bindModuleMethods(swiper, {
8963	        flipEffect: _extends({}, Flip)
8964	      });
8965	    },
8966	    on: {
8967	      beforeInit: function beforeInit(swiper) {
8968	        if (swiper.params.effect !== 'flip') return;
8969	        swiper.classNames.push(swiper.params.containerModifierClass + "flip");
8970	        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
8971	        var overwriteParams = {
8972	          slidesPerView: 1,
8973	          slidesPerColumn: 1,
8974	          slidesPerGroup: 1,
8975	          watchSlidesProgress: true,
8976	          spaceBetween: 0,
8977	          virtualTranslate: true
8978	        };
8979	        extend$1(swiper.params, overwriteParams);
8980	        extend$1(swiper.originalParams, overwriteParams);
8981	      },
8982	      setTranslate: function setTranslate(swiper) {
8983	        if (swiper.params.effect !== 'flip') return;
8984	        swiper.flipEffect.setTranslate();
8985	      },
8986	      setTransition: function setTransition(swiper, duration) {
8987	        if (swiper.params.effect !== 'flip') return;
8988	        swiper.flipEffect.setTransition(duration);
8989	      }
8990	    }
8991	  };
8992	
8993	  var Coverflow = {
8994	    setTranslate: function setTranslate() {
8995	      var swiper = this;
8996	      var swiperWidth = swiper.width,
8997	          swiperHeight = swiper.height,
8998	          slides = swiper.slides,
8999	          slidesSizesGrid = swiper.slidesSizesGrid;
9000	      var params = swiper.params.coverflowEffect;
9001	      var isHorizontal = swiper.isHorizontal();
9002	      var transform = swiper.translate;
9003	      var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
9004	      var rotate = isHorizontal ? params.rotate : -params.rotate;
9005	      var translate = params.depth; // Each slide offset from center
9006	
9007	      for (var i = 0, length = slides.length; i < length; i += 1) {
9008	        var $slideEl = slides.eq(i);
9009	        var slideSize = slidesSizesGrid[i];
9010	        var slideOffset = $slideEl[0].swiperSlideOffset;
9011	        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
9012	        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
9013	        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
9014	
9015	        var translateZ = -translate * Math.abs(offsetMultiplier);
9016	        var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
9017	
9018	        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
9019	          stretch = parseFloat(params.stretch) / 100 * slideSize;
9020	        }
9021	
9022	        var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
9023	        var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
9024	        var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
9025	
9026	        if (Math.abs(translateX) < 0.001) translateX = 0;
9027	        if (Math.abs(translateY) < 0.001) translateY = 0;
9028	        if (Math.abs(translateZ) < 0.001) translateZ = 0;
9029	        if (Math.abs(rotateY) < 0.001) rotateY = 0;
9030	        if (Math.abs(rotateX) < 0.001) rotateX = 0;
9031	        if (Math.abs(scale) < 0.001) scale = 0;
9032	        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
9033	        $slideEl.transform(slideTransform);
9034	        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
9035	
9036	        if (params.slideShadows) {
9037	          // Set shadows
9038	          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
9039	          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
9040	
9041	          if ($shadowBeforeEl.length === 0) {
9042	            $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
9043	            $slideEl.append($shadowBeforeEl);
9044	          }
9045	
9046	          if ($shadowAfterEl.length === 0) {
9047	            $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
9048	            $slideEl.append($shadowAfterEl);
9049	          }
9050	
9051	          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
9052	          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
9053	        }
9054	      }
9055	    },
9056	    setTransition: function setTransition(duration) {
9057	      var swiper = this;
9058	      swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
9059	    }
9060	  };
9061	  var EffectCoverflow = {
9062	    name: 'effect-coverflow',
9063	    params: {
9064	      coverflowEffect: {
9065	        rotate: 50,
9066	        stretch: 0,
9067	        depth: 100,
9068	        scale: 1,
9069	        modifier: 1,
9070	        slideShadows: true
9071	      }
9072	    },
9073	    create: function create() {
9074	      var swiper = this;
9075	      bindModuleMethods(swiper, {
9076	        coverflowEffect: _extends({}, Coverflow)
9077	      });
9078	    },
9079	    on: {
9080	      beforeInit: function beforeInit(swiper) {
9081	        if (swiper.params.effect !== 'coverflow') return;
9082	        swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
9083	        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
9084	        swiper.params.watchSlidesProgress = true;
9085	        swiper.originalParams.watchSlidesProgress = true;
9086	      },
9087	      setTranslate: function setTranslate(swiper) {
9088	        if (swiper.params.effect !== 'coverflow') return;
9089	        swiper.coverflowEffect.setTranslate();
9090	      },
9091	      setTransition: function setTransition(swiper, duration) {
9092	        if (swiper.params.effect !== 'coverflow') return;
9093	        swiper.coverflowEffect.setTransition(duration);
9094	      }
9095	    }
9096	  };
9097	
9098	  var Thumbs = {
9099	    init: function init() {
9100	      var swiper = this;
9101	      var thumbsParams = swiper.params.thumbs;
9102	      if (swiper.thumbs.initialized) return false;
9103	      swiper.thumbs.initialized = true;
9104	      var SwiperClass = swiper.constructor;
9105	
9106	      if (thumbsParams.swiper instanceof SwiperClass) {
9107	        swiper.thumbs.swiper = thumbsParams.swiper;
9108	        extend$1(swiper.thumbs.swiper.originalParams, {
9109	          watchSlidesProgress: true,
9110	          slideToClickedSlide: false
9111	        });
9112	        extend$1(swiper.thumbs.swiper.params, {
9113	          watchSlidesProgress: true,
9114	          slideToClickedSlide: false
9115	        });
9116	      } else if (isObject$1(thumbsParams.swiper)) {
9117	        swiper.thumbs.swiper = new SwiperClass(extend$1({}, thumbsParams.swiper, {
9118	          watchSlidesVisibility: true,
9119	          watchSlidesProgress: true,
9120	          slideToClickedSlide: false
9121	        }));
9122	        swiper.thumbs.swiperCreated = true;
9123	      }
9124	
9125	      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
9126	      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
9127	      return true;
9128	    },
9129	    onThumbClick: function onThumbClick() {
9130	      var swiper = this;
9131	      var thumbsSwiper = swiper.thumbs.swiper;
9132	      if (!thumbsSwiper) return;
9133	      var clickedIndex = thumbsSwiper.clickedIndex;
9134	      var clickedSlide = thumbsSwiper.clickedSlide;
9135	      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
9136	      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
9137	      var slideToIndex;
9138	
9139	      if (thumbsSwiper.params.loop) {
9140	        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
9141	      } else {
9142	        slideToIndex = clickedIndex;
9143	      }
9144	
9145	      if (swiper.params.loop) {
9146	        var currentIndex = swiper.activeIndex;
9147	
9148	        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
9149	          swiper.loopFix(); // eslint-disable-next-line
9150	
9151	          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
9152	          currentIndex = swiper.activeIndex;
9153	        }
9154	
9155	        var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
9156	        var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
9157	        if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
9158	      }
9159	
9160	      swiper.slideTo(slideToIndex);
9161	    },
9162	    update: function update(initial) {
9163	      var swiper = this;
9164	      var thumbsSwiper = swiper.thumbs.swiper;
9165	      if (!thumbsSwiper) return;
9166	      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
9167	      var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
9168	      var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
9169	
9170	      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
9171	        var currentThumbsIndex = thumbsSwiper.activeIndex;
9172	        var newThumbsIndex;
9173	        var direction;
9174	
9175	        if (thumbsSwiper.params.loop) {
9176	          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
9177	            thumbsSwiper.loopFix(); // eslint-disable-next-line
9178	
9179	            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
9180	            currentThumbsIndex = thumbsSwiper.activeIndex;
9181	          } // Find actual thumbs index to slide to
9182	
9183	
9184	          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
9185	          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
9186	          if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
9187	          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
9188	        } else {
9189	          newThumbsIndex = swiper.realIndex;
9190	          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
9191	        }
9192	
9193	        if (useOffset) {
9194	          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
9195	        }
9196	
9197	        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
9198	          if (thumbsSwiper.params.centeredSlides) {
9199	            if (newThumbsIndex > currentThumbsIndex) {
9200	              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
9201	            } else {
9202	              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
9203	            }
9204	          } else if (newThumbsIndex > currentThumbsIndex) {
9205	            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
9206	          }
9207	
9208	          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
9209	        }
9210	      } // Activate thumbs
9211	
9212	
9213	      var thumbsToActivate = 1;
9214	      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
9215	
9216	      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
9217	        thumbsToActivate = swiper.params.slidesPerView;
9218	      }
9219	
9220	      if (!swiper.params.thumbs.multipleActiveThumbs) {
9221	        thumbsToActivate = 1;
9222	      }
9223	
9224	      thumbsToActivate = Math.floor(thumbsToActivate);
9225	      thumbsSwiper.slides.removeClass(thumbActiveClass);
9226	
9227	      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
9228	        for (var i = 0; i < thumbsToActivate; i += 1) {
9229	          thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
9230	        }
9231	      } else {
9232	        for (var _i = 0; _i < thumbsToActivate; _i += 1) {
9233	          thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
9234	        }
9235	      }
9236	    }
9237	  };
9238	  var Thumbs$1 = {
9239	    name: 'thumbs',
9240	    params: {
9241	      thumbs: {
9242	        swiper: null,
9243	        multipleActiveThumbs: true,
9244	        autoScrollOffset: 0,
9245	        slideThumbActiveClass: 'swiper-slide-thumb-active',
9246	        thumbsContainerClass: 'swiper-container-thumbs'
9247	      }
9248	    },
9249	    create: function create() {
9250	      var swiper = this;
9251	      bindModuleMethods(swiper, {
9252	        thumbs: _extends({
9253	          swiper: null,
9254	          initialized: false
9255	        }, Thumbs)
9256	      });
9257	    },
9258	    on: {
9259	      beforeInit: function beforeInit(swiper) {
9260	        var thumbs = swiper.params.thumbs;
9261	        if (!thumbs || !thumbs.swiper) return;
9262	        swiper.thumbs.init();
9263	        swiper.thumbs.update(true);
9264	      },
9265	      slideChange: function slideChange(swiper) {
9266	        if (!swiper.thumbs.swiper) return;
9267	        swiper.thumbs.update();
9268	      },
9269	      update: function update(swiper) {
9270	        if (!swiper.thumbs.swiper) return;
9271	        swiper.thumbs.update();
9272	      },
9273	      resize: function resize(swiper) {
9274	        if (!swiper.thumbs.swiper) return;
9275	        swiper.thumbs.update();
9276	      },
9277	      observerUpdate: function observerUpdate(swiper) {
9278	        if (!swiper.thumbs.swiper) return;
9279	        swiper.thumbs.update();
9280	      },
9281	      setTransition: function setTransition(swiper, duration) {
9282	        var thumbsSwiper = swiper.thumbs.swiper;
9283	        if (!thumbsSwiper) return;
9284	        thumbsSwiper.setTransition(duration);
9285	      },
9286	      beforeDestroy: function beforeDestroy(swiper) {
9287	        var thumbsSwiper = swiper.thumbs.swiper;
9288	        if (!thumbsSwiper) return;
9289	
9290	        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
9291	          thumbsSwiper.destroy();
9292	        }
9293	      }
9294	    }
9295	  };
9296	
9297	  // Swiper Class
9298	  var components = [Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
9299	  Swiper.use(components);
9300	
9301	  return Swiper;
9302	
9303	})));