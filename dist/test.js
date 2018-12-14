(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var analytics_js = function analytics_js(type, cb) {
  // eslint-disable-line
  var isGA = type === 'event' || type === 'social';
  var isTagManager = type === 'tagManager';
  if (isGA) checkIfAnalyticsLoaded(type, cb);
  if (isTagManager) setTagManager(cb);
};

function checkIfAnalyticsLoaded(type, cb) {
  if (window.ga) {
    if (cb) cb(); // bind to shared event on each individual node

    listen(function (e) {
      var platform = e.target.getAttribute('data-open-share');
      var target = e.target.getAttribute('data-open-share-link') || e.target.getAttribute('data-open-share-url') || e.target.getAttribute('data-open-share-username') || e.target.getAttribute('data-open-share-center') || e.target.getAttribute('data-open-share-search') || e.target.getAttribute('data-open-share-body');

      if (type === 'event') {
        ga('send', 'event', {
          // eslint-disable-line no-undef
          eventCategory: 'OpenShare Click',
          eventAction: platform,
          eventLabel: target,
          transport: 'beacon'
        });
      }

      if (type === 'social') {
        ga('send', {
          // eslint-disable-line no-undef
          hitType: 'social',
          socialNetwork: platform,
          socialAction: 'share',
          socialTarget: target
        });
      }
    });
  } else {
    setTimeout(function () {
      checkIfAnalyticsLoaded(type, cb);
    }, 1000);
  }
}

function setTagManager(cb) {
  if (window.dataLayer && window.dataLayer[0]['gtm.start']) {
    if (cb) cb();
    listen(onShareTagManger);
    getCounts(function (e) {
      var count = e.target ? e.target.innerHTML : e.innerHTML;
      var platform = e.target ? e.target.getAttribute('data-open-share-count-url') : e.getAttribute('data-open-share-count-url');
      window.dataLayer.push({
        event: 'OpenShare Count',
        platform: platform,
        resource: count,
        activity: 'count'
      });
    });
  } else {
    setTimeout(function () {
      setTagManager(cb);
    }, 1000);
  }
}

function listen(cb) {
  // bind to shared event on each individual node
  [].forEach.call(document.querySelectorAll('[data-open-share]'), function (node) {
    node.addEventListener('OpenShare.shared', cb);
  });
}

function getCounts(cb) {
  var countNode = document.querySelectorAll('[data-open-share-count]');
  [].forEach.call(countNode, function (node) {
    if (node.textContent) cb(node);else node.addEventListener("OpenShare.counted-".concat(node.getAttribute('data-open-share-count-url')), cb);
  });
}

function onShareTagManger(e) {
  var platform = e.target.getAttribute('data-open-share');
  var target = e.target.getAttribute('data-open-share-link') || e.target.getAttribute('data-open-share-url') || e.target.getAttribute('data-open-share-username') || e.target.getAttribute('data-open-share-center') || e.target.getAttribute('data-open-share-search') || e.target.getAttribute('data-open-share-body');
  window.dataLayer.push({
    event: 'OpenShare Share',
    platform: platform,
    resource: target,
    activity: 'share'
  });
}

module.exports = analytics_js;

},{}],2:[function(require,module,exports){
'use strict';
/**
 * Trigger custom OpenShare namespaced event
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events = {
  trigger: function trigger(element, event) {
    var ev = document.createEvent('Event');
    ev.initEvent("OpenShare.".concat(event), true, true);
    element.dispatchEvent(ev);
  }
};

var analytics = function analytics(type, cb) {
  // eslint-disable-line
  var isGA = type === 'event' || type === 'social';
  var isTagManager = type === 'tagManager';
  if (isGA) checkIfAnalyticsLoaded(type, cb);
  if (isTagManager) setTagManager(cb);
};

function checkIfAnalyticsLoaded(type, cb) {
  if (window.ga) {
    if (cb) cb(); // bind to shared event on each individual node

    listen(function (e) {
      var platform = e.target.getAttribute('data-open-share');
      var target = e.target.getAttribute('data-open-share-link') || e.target.getAttribute('data-open-share-url') || e.target.getAttribute('data-open-share-username') || e.target.getAttribute('data-open-share-center') || e.target.getAttribute('data-open-share-search') || e.target.getAttribute('data-open-share-body');

      if (type === 'event') {
        ga('send', 'event', {
          // eslint-disable-line no-undef
          eventCategory: 'OpenShare Click',
          eventAction: platform,
          eventLabel: target,
          transport: 'beacon'
        });
      }

      if (type === 'social') {
        ga('send', {
          // eslint-disable-line no-undef
          hitType: 'social',
          socialNetwork: platform,
          socialAction: 'share',
          socialTarget: target
        });
      }
    });
  } else {
    setTimeout(function () {
      checkIfAnalyticsLoaded(type, cb);
    }, 1000);
  }
}

function setTagManager(cb) {
  if (window.dataLayer && window.dataLayer[0]['gtm.start']) {
    if (cb) cb();
    listen(onShareTagManger);
    getCounts(function (e) {
      var count = e.target ? e.target.innerHTML : e.innerHTML;
      var platform = e.target ? e.target.getAttribute('data-open-share-count-url') : e.getAttribute('data-open-share-count-url');
      window.dataLayer.push({
        event: 'OpenShare Count',
        platform: platform,
        resource: count,
        activity: 'count'
      });
    });
  } else {
    setTimeout(function () {
      setTagManager(cb);
    }, 1000);
  }
}

function listen(cb) {
  // bind to shared event on each individual node
  [].forEach.call(document.querySelectorAll('[data-open-share]'), function (node) {
    node.addEventListener('OpenShare.shared', cb);
  });
}

function getCounts(cb) {
  var countNode = document.querySelectorAll('[data-open-share-count]');
  [].forEach.call(countNode, function (node) {
    if (node.textContent) cb(node);else node.addEventListener("OpenShare.counted-".concat(node.getAttribute('data-open-share-count-url')), cb);
  });
}

function onShareTagManger(e) {
  var platform = e.target.getAttribute('data-open-share');
  var target = e.target.getAttribute('data-open-share-link') || e.target.getAttribute('data-open-share-url') || e.target.getAttribute('data-open-share-username') || e.target.getAttribute('data-open-share-center') || e.target.getAttribute('data-open-share-search') || e.target.getAttribute('data-open-share-body');
  window.dataLayer.push({
    event: 'OpenShare Share',
    platform: platform,
    resource: target,
    activity: 'share'
  });
}

function initializeNodes(opts) {
  // loop through open share node collection
  return function () {
    // check for analytics
    checkAnalytics();

    if (opts.api) {
      var nodes = opts.container.querySelectorAll(opts.selector);
      [].forEach.call(nodes, opts.cb); // trigger completed event

      Events.trigger(document, "".concat(opts.api, "-loaded"));
    } else {
      // loop through open share node collection
      var shareNodes = opts.container.querySelectorAll(opts.selector.share);
      [].forEach.call(shareNodes, opts.cb.share); // trigger completed event

      Events.trigger(document, 'share-loaded'); // loop through count node collection

      var countNodes = opts.container.querySelectorAll(opts.selector.count);
      [].forEach.call(countNodes, opts.cb.count); // trigger completed event

      Events.trigger(document, 'count-loaded');
    }
  };
}

function checkAnalytics() {
  // check for analytics
  if (document.querySelector('[data-open-share-analytics]')) {
    var provider = document.querySelector('[data-open-share-analytics]').getAttribute('data-open-share-analytics');

    if (provider.indexOf(',') > -1) {
      var providers = provider.split(',');
      providers.forEach(function (p) {
        return analytics(p);
      });
    } else analytics(provider);
  }
}

function initializeWatcher(watcher, fn) {
  [].forEach.call(watcher, function (w) {
    var observer = new MutationObserver(function (mutations) {
      // target will match between all mutations so just use first
      fn(mutations[0].target);
    });
    observer.observe(w, {
      childList: true
    });
  });
}

function init$1(opts) {
  return function () {
    var initNodes = initializeNodes({
      api: opts.api || null,
      container: opts.container || document,
      selector: opts.selector,
      cb: opts.cb
    });
    initNodes(); // check for mutation observers before using, IE11 only

    if (window.MutationObserver !== undefined) {
      initializeWatcher(document.querySelectorAll('[data-open-share-watch]'), initNodes);
    }
  };
}

function round(x, precision) {
  if (typeof x !== 'number') {
    throw new TypeError('Expected value to be a number');
  }

  var exponent = precision > 0 ? 'e' : 'e-';
  var exponentNeg = precision > 0 ? 'e-' : 'e';
  precision = Math.abs(precision);
  return Number(Math.round(x + exponent + precision) + exponentNeg + precision);
}

function thousandify(num) {
  return "".concat(round(num / 1000, 1), "K");
}

function millionify(num) {
  return "".concat(round(num / 1000000, 1), "M");
}

function countReduce(el, count, cb) {
  if (count > 999999) {
    el.innerHTML = millionify(count);
    if (cb && typeof cb === 'function') cb(el);
  } else if (count > 999) {
    el.innerHTML = thousandify(count);
    if (cb && typeof cb === 'function') cb(el);
  } else {
    el.innerHTML = count;
    if (cb && typeof cb === 'function') cb(el);
  }
}
/*
   Sometimes social platforms get confused and drop share counts.
   In this module we check if the returned count is less than the count in
   localstorage.
   If the local count is greater than the returned count,
   we store the local count + the returned count.
   Otherwise, store the returned count.
*/


var storeCount = function storeCount(t, count) {
  var isArr = t.type.indexOf(',') > -1;
  var local = Number(t.storeGet("".concat(t.type, "-").concat(t.shared)));

  if (local > count && !isArr) {
    var latestCount = Number(t.storeGet("".concat(t.type, "-").concat(t.shared, "-latestCount")));
    t.storeSet("".concat(t.type, "-").concat(t.shared, "-latestCount"), count);
    count = isNumeric(latestCount) && latestCount > 0 ? count += local - latestCount : count += local;
  }

  if (!isArr) t.storeSet("".concat(t.type, "-").concat(t.shared), count);
  return count;
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Object of transform functions for each openshare api
 * Transform functions passed into OpenShare instance when instantiated
 * Return object containing URL and key/value args
 */


var CountTransforms = {
  // facebook count data
  facebook: function facebook(url) {
    return {
      type: 'get',
      url: "https://graph.facebook.com/?id=".concat(url),
      transform: function transform(xhr) {
        var fb = JSON.parse(xhr.responseText);
        var count = fb.share && fb.share.share_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // pinterest count data
  pinterest: function pinterest(url) {
    return {
      type: 'jsonp',
      url: "https://api.pinterest.com/v1/urls/count.json?callback=?&url=".concat(url),
      transform: function transform(data) {
        var count = data.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // linkedin count data
  linkedin: function linkedin(url) {
    return {
      type: 'jsonp',
      url: "https://www.linkedin.com/countserv/count/share?url=".concat(url, "&format=jsonp&callback=?"),
      transform: function transform(data) {
        var count = data.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // reddit count data
  reddit: function reddit(url) {
    return {
      type: 'get',
      url: "https://www.reddit.com/api/info.json?url=".concat(url),
      transform: function transform(xhr) {
        var reddit = JSON.parse(xhr.responseText);
        var posts = reddit.data && reddit.data.children || null;
        var ups = 0;

        if (posts) {
          posts.forEach(function (post) {
            ups += Number(post.data.ups);
          });
        }

        return storeCount(this, ups);
      }
    };
  },
  // google count data
  google: function google(url) {
    return {
      type: 'post',
      data: {
        method: 'pos.plusones.get',
        id: 'p',
        params: {
          nolog: true,
          id: url,
          source: 'widget',
          userId: '@viewer',
          groupId: '@self'
        },
        jsonrpc: '2.0',
        key: 'p',
        apiVersion: 'v1'
      },
      url: 'https://clients6.google.com/rpc',
      transform: function transform(xhr) {
        var google = JSON.parse(xhr.responseText);
        var count = google.result && google.result.metadata && google.result.metadata.globalCounts && google.result.metadata.globalCounts.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github star count
  githubStars: function githubStars(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).stargazers_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github forks count
  githubForks: function githubForks(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).forks_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github watchers count
  githubWatchers: function githubWatchers(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).watchers_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // dribbble likes count
  dribbble: function dribbble(shot) {
    shot = shot.indexOf('dribbble.com/shots') > -1 ? shot.split('shots/')[1] : shot;
    var url = "https://api.dribbble.com/v1/shots/".concat(shot, "/likes");
    return {
      type: 'get',
      url: url,
      transform: function transform(xhr, Events) {
        var _this = this;

        var count = JSON.parse(xhr.responseText).length; // at this time dribbble limits a response of 12 likes per page

        if (count === 12) {
          var page = 2;
          recursiveCount(url, page, count, function (finalCount) {
            if (_this.appendTo && typeof _this.appendTo !== 'function') {
              _this.appendTo.appendChild(_this.os);
            }

            countReduce(_this.os, finalCount, _this.cb);
            Events.trigger(_this.os, "counted-".concat(_this.url));
            return storeCount(_this, finalCount);
          });
        } else {
          return storeCount(this, count);
        }
      }
    };
  },
  twitter: function twitter(url) {
    return {
      type: 'get',
      url: "https://api.openshare.social/job?url=".concat(url, "&key="),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).count || 0;
        return storeCount(this, count);
      }
    };
  }
};

function recursiveCount(url, page, count, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "".concat(url, "?page=").concat(page));
  xhr.addEventListener('load', function () {
    //eslint-disable-line
    var likes = JSON.parse(this.response);
    count += likes.length; // dribbble like per page is 12

    if (likes.length === 12) {
      page++;
      recursiveCount(url, page, count, cb);
    } else {
      cb(count);
    }
  });
  xhr.send();
}
/**
 * Generate share count instance from one to many networks
 */
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }


var Count =
/*#__PURE__*/
function () {
  function Count(type, url) {
    var _this2 = this;

    _classCallCheck(this, Count);

    // throw error if no url provided
    if (!url) {
      throw new Error('Open Share: no url provided for count');
    } // check for Github counts


    if (type.indexOf('github') === 0) {
      if (type === 'github-stars') {
        type = 'githubStars';
      } else if (type === 'github-forks') {
        type = 'githubForks';
      } else if (type === 'github-watchers') {
        type = 'githubWatchers';
      } else {
        console.error('Invalid Github count type. Try github-stars, github-forks, or github-watchers.');
      }
    } // if type is comma separate list create array


    if (type.indexOf(',') > -1) {
      this.type = type;
      this.typeArr = this.type.split(',');
      this.countData = []; // check each type supplied is valid

      this.typeArr.forEach(function (t) {
        if (!CountTransforms[t]) {
          throw new Error("Open Share: ".concat(type, " is an invalid count type"));
        }

        _this2.countData.push(CountTransforms[t](url));
      });
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      } // throw error if invalid type provided

    } else if (!CountTransforms[type]) {
      throw new Error("Open Share: ".concat(type, " is an invalid count type")); // single count
      // store count URL and transform function
    } else {
      this.type = type;
      this.countData = CountTransforms[type](url);
    }
  } // handle calling getCount / getCounts
  // depending on number of types


  _createClass(Count, [{
    key: "count",
    value: function count(os, cb, appendTo) {
      this.os = os;
      this.appendTo = appendTo;
      this.cb = cb;
      this.url = this.os.getAttribute('data-open-share-count');
      this.shared = this.os.getAttribute('data-open-share-count-url');
      this.key = this.os.getAttribute('data-open-share-key');

      if (!Array.isArray(this.countData)) {
        this.getCount();
      } else {
        this.getCounts();
      }
    } // fetch count either AJAX or JSONP

  }, {
    key: "getCount",
    value: function getCount() {
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      }

      this[this.countData.type](this.countData);
    } // fetch multiple counts and aggregate

  }, {
    key: "getCounts",
    value: function getCounts() {
      var _this3 = this;

      this.total = [];
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      }

      this.countData.forEach(function (countData) {
        _this3[countData.type](countData, function (num) {
          _this3.total.push(num); // total counts length now equals type array length
          // so aggregate, store and insert into DOM


          if (_this3.total.length === _this3.typeArr.length) {
            var tot = 0;

            _this3.total.forEach(function (t) {
              tot += t;
            });

            if (_this3.appendTo && typeof _this3.appendTo !== 'function') {
              _this3.appendTo.appendChild(_this3.os);
            }

            var local = Number(_this3.storeGet("".concat(_this3.type, "-").concat(_this3.shared)));

            if (local > tot) {
              // const latestCount = Number(this.storeGet(`${this.type}-${this.shared}-latestCount`));
              // this.storeSet(`${this.type}-${this.shared}-latestCount`, tot);
              //
              // tot = isNumeric(latestCount) && latestCount > 0 ?
              // tot += local - latestCount :
              // tot += local;
              tot = local;
            }

            _this3.storeSet("".concat(_this3.type, "-").concat(_this3.shared), tot);

            countReduce(_this3.os, tot);
          }
        });
      });

      if (this.appendTo && typeof this.appendTo !== 'function') {
        this.appendTo.appendChild(this.os);
      }
    } // handle JSONP requests

  }, {
    key: "jsonp",
    value: function jsonp(countData, cb) {
      var _this4 = this;

      // define random callback and assign transform function
      var callback = Math.random().toString(36).substring(7).replace(/[^a-zA-Z]/g, '');

      window[callback] = function (data) {
        var count = countData.transform.apply(_this4, [data]) || 0;

        if (cb && typeof cb === 'function') {
          cb(count);
        } else {
          if (_this4.appendTo && typeof _this4.appendTo !== 'function') {
            _this4.appendTo.appendChild(_this4.os);
          }

          countReduce(_this4.os, count, _this4.cb);
        }

        Events.trigger(_this4.os, "counted-".concat(_this4.url));
      }; // append JSONP script tag to page


      var script = document.createElement('script');
      script.src = countData.url.replace('callback=?', "callback=".concat(callback));
      document.getElementsByTagName('head')[0].appendChild(script);
      return;
    } // handle AJAX GET request

  }, {
    key: "get",
    value: function get(countData, cb) {
      var _this5 = this;

      var xhr = new XMLHttpRequest(); // on success pass response to transform function

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var count = countData.transform.apply(_this5, [xhr, Events]) || 0;

            if (cb && typeof cb === 'function') {
              cb(count);
            } else {
              if (_this5.appendTo && typeof _this5.appendTo !== 'function') {
                _this5.appendTo.appendChild(_this5.os);
              }

              countReduce(_this5.os, count, _this5.cb);
            }

            Events.trigger(_this5.os, "counted-".concat(_this5.url));
            return;
          } else if (countData.url.toLowerCase().indexOf('https://api.openshare.social/job?') === 0) {
            console.warn('Please sign up for Twitter counts at https://openshare.social/twitter/auth');
            var _count = 0;

            if (cb && typeof cb === 'function') {
              cb(_count);
            } else {
              if (_this5.appendTo && typeof _this5.appendTo !== 'function') {
                _this5.appendTo.appendChild(_this5.os);
              }

              countReduce(_this5.os, _count, _this5.cb);
            }

            Events.trigger(_this5.os, "counted-".concat(_this5.url));
          } else {
            console.warn('Failed to get API data from', countData.url, '. Please use the latest version of OpenShare.');
            var _count2 = 0;

            if (cb && typeof cb === 'function') {
              cb(_count2);
            } else {
              if (_this5.appendTo && typeof _this5.appendTo !== 'function') {
                _this5.appendTo.appendChild(_this5.os);
              }

              countReduce(_this5.os, _count2, _this5.cb);
            }

            Events.trigger(_this5.os, "counted-".concat(_this5.url));
          }
        }
      };

      countData.url = countData.url.startsWith('https://api.openshare.social/job?') && this.key ? countData.url + this.key : countData.url;
      xhr.open('GET', countData.url);
      xhr.send();
    } // handle AJAX POST request

  }, {
    key: "post",
    value: function post(countData, cb) {
      var _this6 = this;

      var xhr = new XMLHttpRequest(); // on success pass response to transform function

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE || xhr.status !== 200) {
          return;
        }

        var count = countData.transform.apply(_this6, [xhr]) || 0;

        if (cb && typeof cb === 'function') {
          cb(count);
        } else {
          if (_this6.appendTo && typeof _this6.appendTo !== 'function') {
            _this6.appendTo.appendChild(_this6.os);
          }

          countReduce(_this6.os, count, _this6.cb);
        }

        Events.trigger(_this6.os, "counted-".concat(_this6.url));
      };

      xhr.open('POST', countData.url);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(countData.data));
    }
  }, {
    key: "storeSet",
    value: function storeSet(type) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      //eslint-disable-line
      if (!window.localStorage || !type) {
        return;
      }

      localStorage.setItem("OpenShare-".concat(type), count);
    }
  }, {
    key: "storeGet",
    value: function storeGet(type) {
      //eslint-disable-line
      if (!window.localStorage || !type) {
        return;
      }

      return localStorage.getItem("OpenShare-".concat(type));
    }
  }]);

  return Count;
}();

function initializeCountNode(os) {
  // initialize open share object with type attribute
  var type = os.getAttribute('data-open-share-count');
  var url = os.getAttribute('data-open-share-count-repo') || os.getAttribute('data-open-share-count-shot') || os.getAttribute('data-open-share-count-url');
  var count = new Count(type, url);
  count.count(os);
  os.setAttribute('data-open-share-node', type);
}

function init() {
  init$1({
    api: 'count',
    selector: '[data-open-share-count]:not([data-open-share-node])',
    cb: initializeCountNode
  })();
}

var count_js = function count_js() {
  if (document.readyState === 'complete') {
    init();
  }

  document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
      init();
    }
  }, false);
  return require('./src/modules/count-api')();
};

module.exports = count_js;

},{"./src/modules/count-api":4}],3:[function(require,module,exports){
'use strict';
/**
 * Trigger custom OpenShare namespaced event
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events = {
  trigger: function trigger(element, event) {
    var ev = document.createEvent('Event');
    ev.initEvent("OpenShare.".concat(event), true, true);
    element.dispatchEvent(ev);
  }
};

var analytics = function analytics(type, cb) {
  // eslint-disable-line
  var isGA = type === 'event' || type === 'social';
  var isTagManager = type === 'tagManager';
  if (isGA) checkIfAnalyticsLoaded(type, cb);
  if (isTagManager) setTagManager(cb);
};

function checkIfAnalyticsLoaded(type, cb) {
  if (window.ga) {
    if (cb) cb(); // bind to shared event on each individual node

    listen(function (e) {
      var platform = e.target.getAttribute('data-open-share');
      var target = e.target.getAttribute('data-open-share-link') || e.target.getAttribute('data-open-share-url') || e.target.getAttribute('data-open-share-username') || e.target.getAttribute('data-open-share-center') || e.target.getAttribute('data-open-share-search') || e.target.getAttribute('data-open-share-body');

      if (type === 'event') {
        ga('send', 'event', {
          // eslint-disable-line no-undef
          eventCategory: 'OpenShare Click',
          eventAction: platform,
          eventLabel: target,
          transport: 'beacon'
        });
      }

      if (type === 'social') {
        ga('send', {
          // eslint-disable-line no-undef
          hitType: 'social',
          socialNetwork: platform,
          socialAction: 'share',
          socialTarget: target
        });
      }
    });
  } else {
    setTimeout(function () {
      checkIfAnalyticsLoaded(type, cb);
    }, 1000);
  }
}

function setTagManager(cb) {
  if (window.dataLayer && window.dataLayer[0]['gtm.start']) {
    if (cb) cb();
    listen(onShareTagManger);
    getCounts(function (e) {
      var count = e.target ? e.target.innerHTML : e.innerHTML;
      var platform = e.target ? e.target.getAttribute('data-open-share-count-url') : e.getAttribute('data-open-share-count-url');
      window.dataLayer.push({
        event: 'OpenShare Count',
        platform: platform,
        resource: count,
        activity: 'count'
      });
    });
  } else {
    setTimeout(function () {
      setTagManager(cb);
    }, 1000);
  }
}

function listen(cb) {
  // bind to shared event on each individual node
  [].forEach.call(document.querySelectorAll('[data-open-share]'), function (node) {
    node.addEventListener('OpenShare.shared', cb);
  });
}

function getCounts(cb) {
  var countNode = document.querySelectorAll('[data-open-share-count]');
  [].forEach.call(countNode, function (node) {
    if (node.textContent) cb(node);else node.addEventListener("OpenShare.counted-".concat(node.getAttribute('data-open-share-count-url')), cb);
  });
}

function onShareTagManger(e) {
  var platform = e.target.getAttribute('data-open-share');
  var target = e.target.getAttribute('data-open-share-link') || e.target.getAttribute('data-open-share-url') || e.target.getAttribute('data-open-share-username') || e.target.getAttribute('data-open-share-center') || e.target.getAttribute('data-open-share-search') || e.target.getAttribute('data-open-share-body');
  window.dataLayer.push({
    event: 'OpenShare Share',
    platform: platform,
    resource: target,
    activity: 'share'
  });
}

function initializeNodes(opts) {
  // loop through open share node collection
  return function () {
    // check for analytics
    checkAnalytics();

    if (opts.api) {
      var nodes = opts.container.querySelectorAll(opts.selector);
      [].forEach.call(nodes, opts.cb); // trigger completed event

      Events.trigger(document, "".concat(opts.api, "-loaded"));
    } else {
      // loop through open share node collection
      var shareNodes = opts.container.querySelectorAll(opts.selector.share);
      [].forEach.call(shareNodes, opts.cb.share); // trigger completed event

      Events.trigger(document, 'share-loaded'); // loop through count node collection

      var countNodes = opts.container.querySelectorAll(opts.selector.count);
      [].forEach.call(countNodes, opts.cb.count); // trigger completed event

      Events.trigger(document, 'count-loaded');
    }
  };
}

function checkAnalytics() {
  // check for analytics
  if (document.querySelector('[data-open-share-analytics]')) {
    var provider = document.querySelector('[data-open-share-analytics]').getAttribute('data-open-share-analytics');

    if (provider.indexOf(',') > -1) {
      var providers = provider.split(',');
      providers.forEach(function (p) {
        return analytics(p);
      });
    } else analytics(provider);
  }
}

function initializeWatcher(watcher, fn) {
  [].forEach.call(watcher, function (w) {
    var observer = new MutationObserver(function (mutations) {
      // target will match between all mutations so just use first
      fn(mutations[0].target);
    });
    observer.observe(w, {
      childList: true
    });
  });
}

function init$1(opts) {
  return function () {
    var initNodes = initializeNodes({
      api: opts.api || null,
      container: opts.container || document,
      selector: opts.selector,
      cb: opts.cb
    });
    initNodes(); // check for mutation observers before using, IE11 only

    if (window.MutationObserver !== undefined) {
      initializeWatcher(document.querySelectorAll('[data-open-share-watch]'), initNodes);
    }
  };
}
/**
 * Object of transform functions for each openshare api
 * Transform functions passed into OpenShare instance when instantiated
 * Return object containing URL and key/value args
 */


var ShareTransforms = {
  // set Twitter share URL
  twitter: function twitter(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user and ios data attribute defined
    // build iOS URL scheme as single string
    if (ios && data.ios) {
      var message = '';

      if (data.text) {
        message += data.text;
      }

      if (data.url) {
        message += " - ".concat(data.url);
      }

      if (data.hashtags) {
        var tags = data.hashtags.split(',');
        tags.forEach(function (tag) {
          message += " #".concat(tag);
        });
      }

      if (data.via) {
        message += " via ".concat(data.via);
      }

      return {
        url: 'twitter://post?',
        data: {
          message: message
        }
      };
    }

    return {
      url: 'https://twitter.com/share?',
      data: data,
      popup: {
        width: 700,
        height: 296
      }
    };
  },
  // set Twitter retweet URL
  twitterRetweet: function twitterRetweet(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user and ios data attribute defined
    if (ios && data.ios) {
      return {
        url: 'twitter://status?',
        data: {
          id: data.tweetId
        }
      };
    }

    return {
      url: 'https://twitter.com/intent/retweet?',
      data: {
        tweet_id: data.tweetId,
        related: data.related
      },
      popup: {
        width: 700,
        height: 296
      }
    };
  },
  // set Twitter like URL
  twitterLike: function twitterLike(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user and ios data attribute defined
    if (ios && data.ios) {
      return {
        url: 'twitter://status?',
        data: {
          id: data.tweetId
        }
      };
    }

    return {
      url: 'https://twitter.com/intent/favorite?',
      data: {
        tweet_id: data.tweetId,
        related: data.related
      },
      popup: {
        width: 700,
        height: 296
      }
    };
  },
  // set Twitter follow URL
  twitterFollow: function twitterFollow(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user and ios data attribute defined
    if (ios && data.ios) {
      var iosData = data.screenName ? {
        screen_name: data.screenName
      } : {
        id: data.userId
      };
      return {
        url: 'twitter://user?',
        data: iosData
      };
    }

    return {
      url: 'https://twitter.com/intent/user?',
      data: {
        screen_name: data.screenName,
        user_id: data.userId
      },
      popup: {
        width: 700,
        height: 296
      }
    };
  },
  // set Facebook share URL
  facebook: function facebook(data) {
    return {
      url: 'https://www.facebook.com/dialog/feed?app_id=961342543922322&redirect_uri=http://facebook.com&',
      data: data,
      popup: {
        width: 560,
        height: 593
      }
    };
  },
  // set Facebook send URL
  facebookSend: function facebookSend(data) {
    return {
      url: 'https://www.facebook.com/dialog/send?app_id=961342543922322&redirect_uri=http://facebook.com&',
      data: data,
      popup: {
        width: 980,
        height: 596
      }
    };
  },
  // set YouTube play URL
  youtube: function youtube(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user
    if (ios && data.ios) {
      return {
        url: "youtube:".concat(data.video, "?")
      };
    }

    return {
      url: "https://www.youtube.com/watch?v=".concat(data.video, "?"),
      popup: {
        width: 1086,
        height: 608
      }
    };
  },
  // set YouTube subcribe URL
  youtubeSubscribe: function youtubeSubscribe(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user
    if (ios && data.ios) {
      return {
        url: "youtube://www.youtube.com/user/".concat(data.user, "?")
      };
    }

    return {
      url: "https://www.youtube.com/user/".concat(data.user, "?"),
      popup: {
        width: 880,
        height: 350
      }
    };
  },
  // set Instagram follow URL
  instagram: function instagram() {
    return {
      url: 'instagram://camera?'
    };
  },
  // set Instagram follow URL
  instagramFollow: function instagramFollow(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user
    if (ios && data.ios) {
      return {
        url: 'instagram://user?',
        data: data
      };
    }

    return {
      url: "http://www.instagram.com/".concat(data.username, "?"),
      popup: {
        width: 980,
        height: 655
      }
    };
  },
  // set Snapchat follow URL
  snapchat: function snapchat(data) {
    return {
      url: "snapchat://add/".concat(data.username, "?")
    };
  },
  // set Google share URL
  google: function google(data) {
    return {
      url: 'https://plus.google.com/share?',
      data: data,
      popup: {
        width: 495,
        height: 815
      }
    };
  },
  // set Google maps URL
  googleMaps: function googleMaps(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (data.search) {
      data.q = data.search;
      delete data.search;
    } // if iOS user and ios data attribute defined


    if (ios && data.ios) {
      return {
        url: 'comgooglemaps://?',
        data: ios
      };
    }

    if (!ios && data.ios) {
      delete data.ios;
    }

    return {
      url: 'https://maps.google.com/?',
      data: data,
      popup: {
        width: 800,
        height: 600
      }
    };
  },
  // set Pinterest share URL
  pinterest: function pinterest(data) {
    return {
      url: 'https://pinterest.com/pin/create/bookmarklet/?',
      data: data,
      popup: {
        width: 745,
        height: 620
      }
    };
  },
  // set LinkedIn share URL
  linkedin: function linkedin(data) {
    return {
      url: 'http://www.linkedin.com/shareArticle?',
      data: data,
      popup: {
        width: 780,
        height: 492
      }
    };
  },
  // set Buffer share URL
  buffer: function buffer(data) {
    return {
      url: 'http://bufferapp.com/add?',
      data: data,
      popup: {
        width: 745,
        height: 345
      }
    };
  },
  // set Tumblr share URL
  tumblr: function tumblr(data) {
    return {
      url: 'https://www.tumblr.com/widgets/share/tool?',
      data: data,
      popup: {
        width: 540,
        height: 940
      }
    };
  },
  // set Reddit share URL
  reddit: function reddit(data) {
    return {
      url: 'http://reddit.com/submit?',
      data: data,
      popup: {
        width: 860,
        height: 880
      }
    };
  },
  // set Flickr follow URL
  flickr: function flickr(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // if iOS user
    if (ios && data.ios) {
      return {
        url: "flickr://photos/".concat(data.username, "?")
      };
    }

    return {
      url: "http://www.flickr.com/photos/".concat(data.username, "?"),
      popup: {
        width: 600,
        height: 650
      }
    };
  },
  // set WhatsApp share URL
  whatsapp: function whatsapp(data) {
    return {
      url: 'whatsapp://send?',
      data: data
    };
  },
  // set sms share URL
  sms: function sms(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return {
      url: ios ? 'sms:&' : 'sms:?',
      data: data
    };
  },
  // set Email share URL
  email: function email(data) {
    var url = 'mailto:'; // if to address specified then add to URL

    if (data.to !== null) {
      url += "".concat(data.to);
    }

    url += '?';
    return {
      url: url,
      data: {
        subject: data.subject,
        body: data.body
      }
    };
  },
  // set Github fork URL
  github: function github(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // eslint-disable-line no-unused-vars
    var url = data.repo ? "https://github.com/".concat(data.repo) : data.url;

    if (data.issue) {
      url += "/issues/new?title=".concat(data.issue, "&body=").concat(data.body);
    }

    return {
      url: "".concat(url, "?"),
      popup: {
        width: 1020,
        height: 323
      }
    };
  },
  // set Dribbble share URL
  dribbble: function dribbble(data) {
    var ios = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // eslint-disable-line no-unused-vars
    var url = data.shot ? "https://dribbble.com/shots/".concat(data.shot, "?") : "".concat(data.url, "?");
    return {
      url: url,
      popup: {
        width: 440,
        height: 640
      }
    };
  },
  codepen: function codepen(data) {
    var url = data.pen && data.username && data.view ? "https://codepen.io/".concat(data.username, "/").concat(data.view, "/").concat(data.pen, "?") : "".concat(data.url, "?");
    return {
      url: url,
      popup: {
        width: 1200,
        height: 800
      }
    };
  },
  paypal: function paypal(data) {
    return {
      data: data
    };
  }
};
/**
 * OpenShare generates a single share link
 */

var OpenShare =
/*#__PURE__*/
function () {
  function OpenShare(type, transform) {
    _classCallCheck(this, OpenShare);

    this.ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    this.type = type;
    this.dynamic = false;
    this.transform = transform; // capitalized type

    this.typeCaps = type.charAt(0).toUpperCase() + type.slice(1);
  } // returns function named as type set in constructor
  // e.g twitter()


  _createClass(OpenShare, [{
    key: "setData",
    value: function setData(data) {
      // if iOS user and ios data attribute defined
      // build iOS URL scheme as single string
      if (this.ios) {
        this.transformData = this.transform(data, true);
        this.mobileShareUrl = this.template(this.transformData.url, this.transformData.data);
      }

      this.transformData = this.transform(data);
      this.shareUrl = this.template(this.transformData.url, this.transformData.data);
    } // open share URL defined in individual platform functions

  }, {
    key: "share",
    value: function share() {
      var _this = this;

      // if iOS share URL has been set then use timeout hack
      // test for native app and fall back to web
      if (this.mobileShareUrl) {
        var start = new Date().valueOf();
        setTimeout(function () {
          var end = new Date().valueOf(); // if the user is still here, fall back to web

          if (end - start > 1600) {
            return;
          }

          window.location = _this.shareUrl;
        }, 1500);
        window.location = this.mobileShareUrl; // open mailto links in same window
      } else if (this.type === 'email') {
        window.location = this.shareUrl; // open social share URLs in new window
      } else {
        // if popup object present then set window dimensions / position
        if (this.popup && this.transformData.popup) {
          return this.openWindow(this.shareUrl, this.transformData.popup);
        }

        window.open(this.shareUrl);
      }
    } // create share URL with GET params
    // appending valid properties to query string

  }, {
    key: "template",
    value: function template(url, data) {
      //eslint-disable-line
      var nonURLProps = ['appendTo', 'innerHTML', 'classes'];
      var shareUrl = url,
          i;

      for (i in data) {
        // only append valid properties
        if (!data[i] || nonURLProps.indexOf(i) > -1) {
          continue; //eslint-disable-line
        } // append URL encoded GET param to share URL


        data[i] = encodeURIComponent(data[i]);
        shareUrl += "".concat(i, "=").concat(data[i], "&");
      }

      return shareUrl.substr(0, shareUrl.length - 1);
    } // center popup window supporting dual screens

  }, {
    key: "openWindow",
    value: function openWindow(url, options) {
      //eslint-disable-line
      var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left,
          dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top,
          width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
          //eslint-disable-line
      height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
          //eslint-disable-line
      left = width / 2 - options.width / 2 + dualScreenLeft,
          top = height / 2 - options.height / 2 + dualScreenTop,
          newWindow = window.open(url, 'OpenShare', "width=".concat(options.width, ", height=").concat(options.height, ", top=").concat(top, ", left=").concat(left)); // Puts focus on the newWindow

      if (window.focus) {
        newWindow.focus();
      }
    }
  }]);

  return OpenShare;
}();

function setData(osInstance, osElement) {
  osInstance.setData({
    url: osElement.getAttribute('data-open-share-url'),
    text: osElement.getAttribute('data-open-share-text'),
    via: osElement.getAttribute('data-open-share-via'),
    hashtags: osElement.getAttribute('data-open-share-hashtags'),
    tweetId: osElement.getAttribute('data-open-share-tweet-id'),
    related: osElement.getAttribute('data-open-share-related'),
    screenName: osElement.getAttribute('data-open-share-screen-name'),
    userId: osElement.getAttribute('data-open-share-user-id'),
    link: osElement.getAttribute('data-open-share-link'),
    picture: osElement.getAttribute('data-open-share-picture'),
    caption: osElement.getAttribute('data-open-share-caption'),
    description: osElement.getAttribute('data-open-share-description'),
    user: osElement.getAttribute('data-open-share-user'),
    video: osElement.getAttribute('data-open-share-video'),
    username: osElement.getAttribute('data-open-share-username'),
    title: osElement.getAttribute('data-open-share-title'),
    media: osElement.getAttribute('data-open-share-media'),
    to: osElement.getAttribute('data-open-share-to'),
    subject: osElement.getAttribute('data-open-share-subject'),
    body: osElement.getAttribute('data-open-share-body'),
    ios: osElement.getAttribute('data-open-share-ios'),
    type: osElement.getAttribute('data-open-share-type'),
    center: osElement.getAttribute('data-open-share-center'),
    views: osElement.getAttribute('data-open-share-views'),
    zoom: osElement.getAttribute('data-open-share-zoom'),
    search: osElement.getAttribute('data-open-share-search'),
    saddr: osElement.getAttribute('data-open-share-saddr'),
    daddr: osElement.getAttribute('data-open-share-daddr'),
    directionsmode: osElement.getAttribute('data-open-share-directions-mode'),
    repo: osElement.getAttribute('data-open-share-repo'),
    shot: osElement.getAttribute('data-open-share-shot'),
    pen: osElement.getAttribute('data-open-share-pen'),
    view: osElement.getAttribute('data-open-share-view'),
    issue: osElement.getAttribute('data-open-share-issue'),
    buttonId: osElement.getAttribute('data-open-share-buttonId'),
    popUp: osElement.getAttribute('data-open-share-popup'),
    key: osElement.getAttribute('data-open-share-key')
  });
}

function share(e, os, openShare) {
  // if dynamic instance then fetch attributes again in case of updates
  if (openShare.dynamic) {
    setData(openShare, os);
  }

  openShare.share(e); // trigger shared event

  Events.trigger(os, 'shared');
} // type contains a dash
// transform to camelcase for function reference
// TODO: only supports single dash, should should support multiple


var dashToCamel = function dashToCamel(dash, type) {
  var nextChar = type.substr(dash + 1, 1);
  var group = type.substr(dash, 2);
  type = type.replace(group, nextChar.toUpperCase());
  return type;
};

function initializeShareNode(os) {
  // initialize open share object with type attribute
  var type = os.getAttribute('data-open-share');
  var dash = type.indexOf('-');

  if (dash > -1) {
    type = dashToCamel(dash, type);
  }

  var transform = ShareTransforms[type];

  if (!transform) {
    throw new Error("Open Share: ".concat(type, " is an invalid type"));
  }

  var openShare = new OpenShare(type, transform); // specify if this is a dynamic instance

  if (os.getAttribute('data-open-share-dynamic')) {
    openShare.dynamic = true;
  } // specify if this is a popup instance


  if (os.getAttribute('data-open-share-popup')) {
    openShare.popup = true;
  } // set all optional attributes on open share instance


  setData(openShare, os); // open share dialog on click

  os.addEventListener('click', function (e) {
    share(e, os, openShare);
  });
  os.addEventListener('OpenShare.trigger', function (e) {
    share(e, os, openShare);
  });
  os.setAttribute('data-open-share-node', type);
}

function round(x, precision) {
  if (typeof x !== 'number') {
    throw new TypeError('Expected value to be a number');
  }

  var exponent = precision > 0 ? 'e' : 'e-';
  var exponentNeg = precision > 0 ? 'e-' : 'e';
  precision = Math.abs(precision);
  return Number(Math.round(x + exponent + precision) + exponentNeg + precision);
}

function thousandify(num) {
  return "".concat(round(num / 1000, 1), "K");
}

function millionify(num) {
  return "".concat(round(num / 1000000, 1), "M");
}

function countReduce(el, count, cb) {
  if (count > 999999) {
    el.innerHTML = millionify(count);
    if (cb && typeof cb === 'function') cb(el);
  } else if (count > 999) {
    el.innerHTML = thousandify(count);
    if (cb && typeof cb === 'function') cb(el);
  } else {
    el.innerHTML = count;
    if (cb && typeof cb === 'function') cb(el);
  }
}
/*
   Sometimes social platforms get confused and drop share counts.
   In this module we check if the returned count is less than the count in
   localstorage.
   If the local count is greater than the returned count,
   we store the local count + the returned count.
   Otherwise, store the returned count.
*/


var storeCount = function storeCount(t, count) {
  var isArr = t.type.indexOf(',') > -1;
  var local = Number(t.storeGet("".concat(t.type, "-").concat(t.shared)));

  if (local > count && !isArr) {
    var latestCount = Number(t.storeGet("".concat(t.type, "-").concat(t.shared, "-latestCount")));
    t.storeSet("".concat(t.type, "-").concat(t.shared, "-latestCount"), count);
    count = isNumeric(latestCount) && latestCount > 0 ? count += local - latestCount : count += local;
  }

  if (!isArr) t.storeSet("".concat(t.type, "-").concat(t.shared), count);
  return count;
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Object of transform functions for each openshare api
 * Transform functions passed into OpenShare instance when instantiated
 * Return object containing URL and key/value args
 */


var CountTransforms = {
  // facebook count data
  facebook: function facebook(url) {
    return {
      type: 'get',
      url: "https://graph.facebook.com/?id=".concat(url),
      transform: function transform(xhr) {
        var fb = JSON.parse(xhr.responseText);
        var count = fb.share && fb.share.share_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // pinterest count data
  pinterest: function pinterest(url) {
    return {
      type: 'jsonp',
      url: "https://api.pinterest.com/v1/urls/count.json?callback=?&url=".concat(url),
      transform: function transform(data) {
        var count = data.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // linkedin count data
  linkedin: function linkedin(url) {
    return {
      type: 'jsonp',
      url: "https://www.linkedin.com/countserv/count/share?url=".concat(url, "&format=jsonp&callback=?"),
      transform: function transform(data) {
        var count = data.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // reddit count data
  reddit: function reddit(url) {
    return {
      type: 'get',
      url: "https://www.reddit.com/api/info.json?url=".concat(url),
      transform: function transform(xhr) {
        var reddit = JSON.parse(xhr.responseText);
        var posts = reddit.data && reddit.data.children || null;
        var ups = 0;

        if (posts) {
          posts.forEach(function (post) {
            ups += Number(post.data.ups);
          });
        }

        return storeCount(this, ups);
      }
    };
  },
  // google count data
  google: function google(url) {
    return {
      type: 'post',
      data: {
        method: 'pos.plusones.get',
        id: 'p',
        params: {
          nolog: true,
          id: url,
          source: 'widget',
          userId: '@viewer',
          groupId: '@self'
        },
        jsonrpc: '2.0',
        key: 'p',
        apiVersion: 'v1'
      },
      url: 'https://clients6.google.com/rpc',
      transform: function transform(xhr) {
        var google = JSON.parse(xhr.responseText);
        var count = google.result && google.result.metadata && google.result.metadata.globalCounts && google.result.metadata.globalCounts.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github star count
  githubStars: function githubStars(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).stargazers_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github forks count
  githubForks: function githubForks(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).forks_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github watchers count
  githubWatchers: function githubWatchers(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).watchers_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // dribbble likes count
  dribbble: function dribbble(shot) {
    shot = shot.indexOf('dribbble.com/shots') > -1 ? shot.split('shots/')[1] : shot;
    var url = "https://api.dribbble.com/v1/shots/".concat(shot, "/likes");
    return {
      type: 'get',
      url: url,
      transform: function transform(xhr, Events) {
        var _this2 = this;

        var count = JSON.parse(xhr.responseText).length; // at this time dribbble limits a response of 12 likes per page

        if (count === 12) {
          var page = 2;
          recursiveCount(url, page, count, function (finalCount) {
            if (_this2.appendTo && typeof _this2.appendTo !== 'function') {
              _this2.appendTo.appendChild(_this2.os);
            }

            countReduce(_this2.os, finalCount, _this2.cb);
            Events.trigger(_this2.os, "counted-".concat(_this2.url));
            return storeCount(_this2, finalCount);
          });
        } else {
          return storeCount(this, count);
        }
      }
    };
  },
  twitter: function twitter(url) {
    return {
      type: 'get',
      url: "https://api.openshare.social/job?url=".concat(url, "&key="),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).count || 0;
        return storeCount(this, count);
      }
    };
  }
};

function recursiveCount(url, page, count, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "".concat(url, "?page=").concat(page));
  xhr.addEventListener('load', function () {
    //eslint-disable-line
    var likes = JSON.parse(this.response);
    count += likes.length; // dribbble like per page is 12

    if (likes.length === 12) {
      page++;
      recursiveCount(url, page, count, cb);
    } else {
      cb(count);
    }
  });
  xhr.send();
}
/**
 * Generate share count instance from one to many networks
 */
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }


var Count =
/*#__PURE__*/
function () {
  function Count(type, url) {
    var _this3 = this;

    _classCallCheck(this, Count);

    // throw error if no url provided
    if (!url) {
      throw new Error('Open Share: no url provided for count');
    } // check for Github counts


    if (type.indexOf('github') === 0) {
      if (type === 'github-stars') {
        type = 'githubStars';
      } else if (type === 'github-forks') {
        type = 'githubForks';
      } else if (type === 'github-watchers') {
        type = 'githubWatchers';
      } else {
        console.error('Invalid Github count type. Try github-stars, github-forks, or github-watchers.');
      }
    } // if type is comma separate list create array


    if (type.indexOf(',') > -1) {
      this.type = type;
      this.typeArr = this.type.split(',');
      this.countData = []; // check each type supplied is valid

      this.typeArr.forEach(function (t) {
        if (!CountTransforms[t]) {
          throw new Error("Open Share: ".concat(type, " is an invalid count type"));
        }

        _this3.countData.push(CountTransforms[t](url));
      });
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      } // throw error if invalid type provided

    } else if (!CountTransforms[type]) {
      throw new Error("Open Share: ".concat(type, " is an invalid count type")); // single count
      // store count URL and transform function
    } else {
      this.type = type;
      this.countData = CountTransforms[type](url);
    }
  } // handle calling getCount / getCounts
  // depending on number of types


  _createClass(Count, [{
    key: "count",
    value: function count(os, cb, appendTo) {
      this.os = os;
      this.appendTo = appendTo;
      this.cb = cb;
      this.url = this.os.getAttribute('data-open-share-count');
      this.shared = this.os.getAttribute('data-open-share-count-url');
      this.key = this.os.getAttribute('data-open-share-key');

      if (!Array.isArray(this.countData)) {
        this.getCount();
      } else {
        this.getCounts();
      }
    } // fetch count either AJAX or JSONP

  }, {
    key: "getCount",
    value: function getCount() {
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      }

      this[this.countData.type](this.countData);
    } // fetch multiple counts and aggregate

  }, {
    key: "getCounts",
    value: function getCounts() {
      var _this4 = this;

      this.total = [];
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      }

      this.countData.forEach(function (countData) {
        _this4[countData.type](countData, function (num) {
          _this4.total.push(num); // total counts length now equals type array length
          // so aggregate, store and insert into DOM


          if (_this4.total.length === _this4.typeArr.length) {
            var tot = 0;

            _this4.total.forEach(function (t) {
              tot += t;
            });

            if (_this4.appendTo && typeof _this4.appendTo !== 'function') {
              _this4.appendTo.appendChild(_this4.os);
            }

            var local = Number(_this4.storeGet("".concat(_this4.type, "-").concat(_this4.shared)));

            if (local > tot) {
              // const latestCount = Number(this.storeGet(`${this.type}-${this.shared}-latestCount`));
              // this.storeSet(`${this.type}-${this.shared}-latestCount`, tot);
              //
              // tot = isNumeric(latestCount) && latestCount > 0 ?
              // tot += local - latestCount :
              // tot += local;
              tot = local;
            }

            _this4.storeSet("".concat(_this4.type, "-").concat(_this4.shared), tot);

            countReduce(_this4.os, tot);
          }
        });
      });

      if (this.appendTo && typeof this.appendTo !== 'function') {
        this.appendTo.appendChild(this.os);
      }
    } // handle JSONP requests

  }, {
    key: "jsonp",
    value: function jsonp(countData, cb) {
      var _this5 = this;

      // define random callback and assign transform function
      var callback = Math.random().toString(36).substring(7).replace(/[^a-zA-Z]/g, '');

      window[callback] = function (data) {
        var count = countData.transform.apply(_this5, [data]) || 0;

        if (cb && typeof cb === 'function') {
          cb(count);
        } else {
          if (_this5.appendTo && typeof _this5.appendTo !== 'function') {
            _this5.appendTo.appendChild(_this5.os);
          }

          countReduce(_this5.os, count, _this5.cb);
        }

        Events.trigger(_this5.os, "counted-".concat(_this5.url));
      }; // append JSONP script tag to page


      var script = document.createElement('script');
      script.src = countData.url.replace('callback=?', "callback=".concat(callback));
      document.getElementsByTagName('head')[0].appendChild(script);
      return;
    } // handle AJAX GET request

  }, {
    key: "get",
    value: function get(countData, cb) {
      var _this6 = this;

      var xhr = new XMLHttpRequest(); // on success pass response to transform function

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var count = countData.transform.apply(_this6, [xhr, Events]) || 0;

            if (cb && typeof cb === 'function') {
              cb(count);
            } else {
              if (_this6.appendTo && typeof _this6.appendTo !== 'function') {
                _this6.appendTo.appendChild(_this6.os);
              }

              countReduce(_this6.os, count, _this6.cb);
            }

            Events.trigger(_this6.os, "counted-".concat(_this6.url));
            return;
          } else if (countData.url.toLowerCase().indexOf('https://api.openshare.social/job?') === 0) {
            console.warn('Please sign up for Twitter counts at https://openshare.social/twitter/auth');
            var _count = 0;

            if (cb && typeof cb === 'function') {
              cb(_count);
            } else {
              if (_this6.appendTo && typeof _this6.appendTo !== 'function') {
                _this6.appendTo.appendChild(_this6.os);
              }

              countReduce(_this6.os, _count, _this6.cb);
            }

            Events.trigger(_this6.os, "counted-".concat(_this6.url));
          } else {
            console.warn('Failed to get API data from', countData.url, '. Please use the latest version of OpenShare.');
            var _count2 = 0;

            if (cb && typeof cb === 'function') {
              cb(_count2);
            } else {
              if (_this6.appendTo && typeof _this6.appendTo !== 'function') {
                _this6.appendTo.appendChild(_this6.os);
              }

              countReduce(_this6.os, _count2, _this6.cb);
            }

            Events.trigger(_this6.os, "counted-".concat(_this6.url));
          }
        }
      };

      countData.url = countData.url.startsWith('https://api.openshare.social/job?') && this.key ? countData.url + this.key : countData.url;
      xhr.open('GET', countData.url);
      xhr.send();
    } // handle AJAX POST request

  }, {
    key: "post",
    value: function post(countData, cb) {
      var _this7 = this;

      var xhr = new XMLHttpRequest(); // on success pass response to transform function

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE || xhr.status !== 200) {
          return;
        }

        var count = countData.transform.apply(_this7, [xhr]) || 0;

        if (cb && typeof cb === 'function') {
          cb(count);
        } else {
          if (_this7.appendTo && typeof _this7.appendTo !== 'function') {
            _this7.appendTo.appendChild(_this7.os);
          }

          countReduce(_this7.os, count, _this7.cb);
        }

        Events.trigger(_this7.os, "counted-".concat(_this7.url));
      };

      xhr.open('POST', countData.url);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(countData.data));
    }
  }, {
    key: "storeSet",
    value: function storeSet(type) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      //eslint-disable-line
      if (!window.localStorage || !type) {
        return;
      }

      localStorage.setItem("OpenShare-".concat(type), count);
    }
  }, {
    key: "storeGet",
    value: function storeGet(type) {
      //eslint-disable-line
      if (!window.localStorage || !type) {
        return;
      }

      return localStorage.getItem("OpenShare-".concat(type));
    }
  }]);

  return Count;
}();
/**
 * count API
 */


var countAPI = function countAPI() {
  //eslint-disable-line
  // global OpenShare referencing internal class for instance generation
  var Count$$1 = function Count$$1(_ref, cb) {
    var type = _ref.type,
        url = _ref.url,
        _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === void 0 ? false : _ref$appendTo,
        element = _ref.element,
        classes = _ref.classes,
        _ref$key = _ref.key,
        key = _ref$key === void 0 ? null : _ref$key;

    _classCallCheck(this, Count$$1);

    var countNode = document.createElement(element || 'span');
    countNode.setAttribute('data-open-share-count', type);
    countNode.setAttribute('data-open-share-count-url', url);
    if (key) countNode.setAttribute('data-open-share-key', key);
    countNode.classList.add('open-share-count');

    if (classes && Array.isArray(classes)) {
      classes.forEach(function (cssCLass) {
        countNode.classList.add(cssCLass);
      });
    }

    if (appendTo) {
      return new Count(type, url).count(countNode, cb, appendTo);
    }

    return new Count(type, url).count(countNode, cb);
  };

  return Count$$1;
};

function init() {
  init$1({
    api: 'share',
    selector: '[data-open-share]:not([data-open-share-node])',
    cb: initializeShareNode
  })();
}

var share_js = function share_js() {
  if (document.readyState === 'complete') {
    init();
  }

  document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
      init();
    }
  }, false);
  return countAPI();
};

module.exports = share_js;

},{}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function round(x, precision) {
  if (typeof x !== 'number') {
    throw new TypeError('Expected value to be a number');
  }

  var exponent = precision > 0 ? 'e' : 'e-';
  var exponentNeg = precision > 0 ? 'e-' : 'e';
  precision = Math.abs(precision);
  return Number(Math.round(x + exponent + precision) + exponentNeg + precision);
}

function thousandify(num) {
  return "".concat(round(num / 1000, 1), "K");
}

function millionify(num) {
  return "".concat(round(num / 1000000, 1), "M");
}

function countReduce(el, count, cb) {
  if (count > 999999) {
    el.innerHTML = millionify(count);
    if (cb && typeof cb === 'function') cb(el);
  } else if (count > 999) {
    el.innerHTML = thousandify(count);
    if (cb && typeof cb === 'function') cb(el);
  } else {
    el.innerHTML = count;
    if (cb && typeof cb === 'function') cb(el);
  }
}
/*
   Sometimes social platforms get confused and drop share counts.
   In this module we check if the returned count is less than the count in
   localstorage.
   If the local count is greater than the returned count,
   we store the local count + the returned count.
   Otherwise, store the returned count.
*/


var storeCount = function storeCount(t, count) {
  var isArr = t.type.indexOf(',') > -1;
  var local = Number(t.storeGet("".concat(t.type, "-").concat(t.shared)));

  if (local > count && !isArr) {
    var latestCount = Number(t.storeGet("".concat(t.type, "-").concat(t.shared, "-latestCount")));
    t.storeSet("".concat(t.type, "-").concat(t.shared, "-latestCount"), count);
    count = isNumeric(latestCount) && latestCount > 0 ? count += local - latestCount : count += local;
  }

  if (!isArr) t.storeSet("".concat(t.type, "-").concat(t.shared), count);
  return count;
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var CountTransforms = {
  // facebook count data
  facebook: function facebook(url) {
    return {
      type: 'get',
      url: "https://graph.facebook.com/?id=".concat(url),
      transform: function transform(xhr) {
        var fb = JSON.parse(xhr.responseText);
        var count = fb.share && fb.share.share_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // pinterest count data
  pinterest: function pinterest(url) {
    return {
      type: 'jsonp',
      url: "https://api.pinterest.com/v1/urls/count.json?callback=?&url=".concat(url),
      transform: function transform(data) {
        var count = data.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // linkedin count data
  linkedin: function linkedin(url) {
    return {
      type: 'jsonp',
      url: "https://www.linkedin.com/countserv/count/share?url=".concat(url, "&format=jsonp&callback=?"),
      transform: function transform(data) {
        var count = data.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // reddit count data
  reddit: function reddit(url) {
    return {
      type: 'get',
      url: "https://www.reddit.com/api/info.json?url=".concat(url),
      transform: function transform(xhr) {
        var reddit = JSON.parse(xhr.responseText);
        var posts = reddit.data && reddit.data.children || null;
        var ups = 0;

        if (posts) {
          posts.forEach(function (post) {
            ups += Number(post.data.ups);
          });
        }

        return storeCount(this, ups);
      }
    };
  },
  // google count data
  google: function google(url) {
    return {
      type: 'post',
      data: {
        method: 'pos.plusones.get',
        id: 'p',
        params: {
          nolog: true,
          id: url,
          source: 'widget',
          userId: '@viewer',
          groupId: '@self'
        },
        jsonrpc: '2.0',
        key: 'p',
        apiVersion: 'v1'
      },
      url: 'https://clients6.google.com/rpc',
      transform: function transform(xhr) {
        var google = JSON.parse(xhr.responseText);
        var count = google.result && google.result.metadata && google.result.metadata.globalCounts && google.result.metadata.globalCounts.count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github star count
  githubStars: function githubStars(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).stargazers_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github forks count
  githubForks: function githubForks(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).forks_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // github watchers count
  githubWatchers: function githubWatchers(repo) {
    repo = repo.indexOf('github.com/') > -1 ? repo.split('github.com/')[1] : repo;
    return {
      type: 'get',
      url: "https://api.github.com/repos/".concat(repo),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).watchers_count || 0;
        return storeCount(this, count);
      }
    };
  },
  // dribbble likes count
  dribbble: function dribbble(shot) {
    shot = shot.indexOf('dribbble.com/shots') > -1 ? shot.split('shots/')[1] : shot;
    var url = "https://api.dribbble.com/v1/shots/".concat(shot, "/likes");
    return {
      type: 'get',
      url: url,
      transform: function transform(xhr, Events) {
        var _this = this;

        var count = JSON.parse(xhr.responseText).length; // at this time dribbble limits a response of 12 likes per page

        if (count === 12) {
          var page = 2;
          recursiveCount(url, page, count, function (finalCount) {
            if (_this.appendTo && typeof _this.appendTo !== 'function') {
              _this.appendTo.appendChild(_this.os);
            }

            countReduce(_this.os, finalCount, _this.cb);
            Events.trigger(_this.os, "counted-".concat(_this.url));
            return storeCount(_this, finalCount);
          });
        } else {
          return storeCount(this, count);
        }
      }
    };
  },
  twitter: function twitter(url) {
    return {
      type: 'get',
      url: "https://api.openshare.social/job?url=".concat(url, "&key="),
      transform: function transform(xhr) {
        var count = JSON.parse(xhr.responseText).count || 0;
        return storeCount(this, count);
      }
    };
  }
};

function recursiveCount(url, page, count, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "".concat(url, "?page=").concat(page));
  xhr.addEventListener('load', function () {
    //eslint-disable-line
    var likes = JSON.parse(this.response);
    count += likes.length; // dribbble like per page is 12

    if (likes.length === 12) {
      page++;
      recursiveCount(url, page, count, cb);
    } else {
      cb(count);
    }
  });
  xhr.send();
}
/**
 * Trigger custom OpenShare namespaced event
 */


var Events = {
  trigger: function trigger(element, event) {
    var ev = document.createEvent('Event');
    ev.initEvent("OpenShare.".concat(event), true, true);
    element.dispatchEvent(ev);
  }
};
/**
 * Generate share count instance from one to many networks
 */

var Count =
/*#__PURE__*/
function () {
  function Count(type, url) {
    var _this2 = this;

    _classCallCheck(this, Count);

    // throw error if no url provided
    if (!url) {
      throw new Error('Open Share: no url provided for count');
    } // check for Github counts


    if (type.indexOf('github') === 0) {
      if (type === 'github-stars') {
        type = 'githubStars';
      } else if (type === 'github-forks') {
        type = 'githubForks';
      } else if (type === 'github-watchers') {
        type = 'githubWatchers';
      } else {
        console.error('Invalid Github count type. Try github-stars, github-forks, or github-watchers.');
      }
    } // if type is comma separate list create array


    if (type.indexOf(',') > -1) {
      this.type = type;
      this.typeArr = this.type.split(',');
      this.countData = []; // check each type supplied is valid

      this.typeArr.forEach(function (t) {
        if (!CountTransforms[t]) {
          throw new Error("Open Share: ".concat(type, " is an invalid count type"));
        }

        _this2.countData.push(CountTransforms[t](url));
      });
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      } // throw error if invalid type provided

    } else if (!CountTransforms[type]) {
      throw new Error("Open Share: ".concat(type, " is an invalid count type")); // single count
      // store count URL and transform function
    } else {
      this.type = type;
      this.countData = CountTransforms[type](url);
    }
  } // handle calling getCount / getCounts
  // depending on number of types


  _createClass(Count, [{
    key: "count",
    value: function count(os, cb, appendTo) {
      this.os = os;
      this.appendTo = appendTo;
      this.cb = cb;
      this.url = this.os.getAttribute('data-open-share-count');
      this.shared = this.os.getAttribute('data-open-share-count-url');
      this.key = this.os.getAttribute('data-open-share-key');

      if (!Array.isArray(this.countData)) {
        this.getCount();
      } else {
        this.getCounts();
      }
    } // fetch count either AJAX or JSONP

  }, {
    key: "getCount",
    value: function getCount() {
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      }

      this[this.countData.type](this.countData);
    } // fetch multiple counts and aggregate

  }, {
    key: "getCounts",
    value: function getCounts() {
      var _this3 = this;

      this.total = [];
      var count = this.storeGet("".concat(this.type, "-").concat(this.shared));

      if (count) {
        if (this.appendTo && typeof this.appendTo !== 'function') {
          this.appendTo.appendChild(this.os);
        }

        countReduce(this.os, count);
      }

      this.countData.forEach(function (countData) {
        _this3[countData.type](countData, function (num) {
          _this3.total.push(num); // total counts length now equals type array length
          // so aggregate, store and insert into DOM


          if (_this3.total.length === _this3.typeArr.length) {
            var tot = 0;

            _this3.total.forEach(function (t) {
              tot += t;
            });

            if (_this3.appendTo && typeof _this3.appendTo !== 'function') {
              _this3.appendTo.appendChild(_this3.os);
            }

            var local = Number(_this3.storeGet("".concat(_this3.type, "-").concat(_this3.shared)));

            if (local > tot) {
              // const latestCount = Number(this.storeGet(`${this.type}-${this.shared}-latestCount`));
              // this.storeSet(`${this.type}-${this.shared}-latestCount`, tot);
              //
              // tot = isNumeric(latestCount) && latestCount > 0 ?
              // tot += local - latestCount :
              // tot += local;
              tot = local;
            }

            _this3.storeSet("".concat(_this3.type, "-").concat(_this3.shared), tot);

            countReduce(_this3.os, tot);
          }
        });
      });

      if (this.appendTo && typeof this.appendTo !== 'function') {
        this.appendTo.appendChild(this.os);
      }
    } // handle JSONP requests

  }, {
    key: "jsonp",
    value: function jsonp(countData, cb) {
      var _this4 = this;

      // define random callback and assign transform function
      var callback = Math.random().toString(36).substring(7).replace(/[^a-zA-Z]/g, '');

      window[callback] = function (data) {
        var count = countData.transform.apply(_this4, [data]) || 0;

        if (cb && typeof cb === 'function') {
          cb(count);
        } else {
          if (_this4.appendTo && typeof _this4.appendTo !== 'function') {
            _this4.appendTo.appendChild(_this4.os);
          }

          countReduce(_this4.os, count, _this4.cb);
        }

        Events.trigger(_this4.os, "counted-".concat(_this4.url));
      }; // append JSONP script tag to page


      var script = document.createElement('script');
      script.src = countData.url.replace('callback=?', "callback=".concat(callback));
      document.getElementsByTagName('head')[0].appendChild(script);
      return;
    } // handle AJAX GET request

  }, {
    key: "get",
    value: function get(countData, cb) {
      var _this5 = this;

      var xhr = new XMLHttpRequest(); // on success pass response to transform function

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var count = countData.transform.apply(_this5, [xhr, Events]) || 0;

            if (cb && typeof cb === 'function') {
              cb(count);
            } else {
              if (_this5.appendTo && typeof _this5.appendTo !== 'function') {
                _this5.appendTo.appendChild(_this5.os);
              }

              countReduce(_this5.os, count, _this5.cb);
            }

            Events.trigger(_this5.os, "counted-".concat(_this5.url));
            return;
          } else if (countData.url.toLowerCase().indexOf('https://api.openshare.social/job?') === 0) {
            console.warn('Please sign up for Twitter counts at https://openshare.social/twitter/auth');
            var _count = 0;

            if (cb && typeof cb === 'function') {
              cb(_count);
            } else {
              if (_this5.appendTo && typeof _this5.appendTo !== 'function') {
                _this5.appendTo.appendChild(_this5.os);
              }

              countReduce(_this5.os, _count, _this5.cb);
            }

            Events.trigger(_this5.os, "counted-".concat(_this5.url));
          } else {
            console.warn('Failed to get API data from', countData.url, '. Please use the latest version of OpenShare.');
            var _count2 = 0;

            if (cb && typeof cb === 'function') {
              cb(_count2);
            } else {
              if (_this5.appendTo && typeof _this5.appendTo !== 'function') {
                _this5.appendTo.appendChild(_this5.os);
              }

              countReduce(_this5.os, _count2, _this5.cb);
            }

            Events.trigger(_this5.os, "counted-".concat(_this5.url));
          }
        }
      };

      countData.url = countData.url.startsWith('https://api.openshare.social/job?') && this.key ? countData.url + this.key : countData.url;
      xhr.open('GET', countData.url);
      xhr.send();
    } // handle AJAX POST request

  }, {
    key: "post",
    value: function post(countData, cb) {
      var _this6 = this;

      var xhr = new XMLHttpRequest(); // on success pass response to transform function

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE || xhr.status !== 200) {
          return;
        }

        var count = countData.transform.apply(_this6, [xhr]) || 0;

        if (cb && typeof cb === 'function') {
          cb(count);
        } else {
          if (_this6.appendTo && typeof _this6.appendTo !== 'function') {
            _this6.appendTo.appendChild(_this6.os);
          }

          countReduce(_this6.os, count, _this6.cb);
        }

        Events.trigger(_this6.os, "counted-".concat(_this6.url));
      };

      xhr.open('POST', countData.url);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(countData.data));
    }
  }, {
    key: "storeSet",
    value: function storeSet(type) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      //eslint-disable-line
      if (!window.localStorage || !type) {
        return;
      }

      localStorage.setItem("OpenShare-".concat(type), count);
    }
  }, {
    key: "storeGet",
    value: function storeGet(type) {
      //eslint-disable-line
      if (!window.localStorage || !type) {
        return;
      }

      return localStorage.getItem("OpenShare-".concat(type));
    }
  }]);

  return Count;
}();
/**
 * count API
 */


var countApi_js = function countApi_js() {
  //eslint-disable-line
  // global OpenShare referencing internal class for instance generation
  var Count$$1 = function Count$$1(_ref, cb) {
    var type = _ref.type,
        url = _ref.url,
        _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === void 0 ? false : _ref$appendTo,
        element = _ref.element,
        classes = _ref.classes,
        _ref$key = _ref.key,
        key = _ref$key === void 0 ? null : _ref$key;

    _classCallCheck(this, Count$$1);

    var countNode = document.createElement(element || 'span');
    countNode.setAttribute('data-open-share-count', type);
    countNode.setAttribute('data-open-share-count-url', url);
    if (key) countNode.setAttribute('data-open-share-key', key);
    countNode.classList.add('open-share-count');

    if (classes && Array.isArray(classes)) {
      classes.forEach(function (cssCLass) {
        countNode.classList.add(cssCLass);
      });
    }

    if (appendTo) {
      return new Count(type, url).count(countNode, cb, appendTo);
    }

    return new Count(type, url).count(countNode, cb);
  };

  return Count$$1;
};

module.exports = countApi_js;

},{}],5:[function(require,module,exports){
'use strict';

var OpenShare = {
  share: require('../share.js'),
  count: require('../count.js'),
  analytics: require('../analytics.js')
};
OpenShare.analytics('tagManager', function () {
  console.log('tag manager loaded');
});
OpenShare.analytics('event', function () {
  console.log('google analytics events loaded');
});
OpenShare.analytics('social', function () {
  console.log('google analytics social loaded');
});
var dynamicNodeData = {
  url: 'http://www.digitalsurgeons.com',
  via: 'digitalsurgeons',
  text: 'Forward Obsessed',
  hashtags: 'forwardobsessed',
  button: 'Open Share Watcher!'
};

function createOpenShareNode(data) {
  var openShare = document.createElement('a');
  openShare.classList.add('open-share-link', 'twitter');
  openShare.setAttribute('data-open-share', 'twitter');
  openShare.setAttribute('data-open-share-url', data.url);
  openShare.setAttribute('data-open-share-via', data.via);
  openShare.setAttribute('data-open-share-text', data.text);
  openShare.setAttribute('data-open-share-hashtags', data.hashtags);
  openShare.innerHTML = "<span class=\"fa fa-twitter\"></span>".concat(data.button);
  var node = new OpenShare.share({
    //eslint-disable-line
    type: 'twitter',
    url: 'http://www.digitalsurgeons.com',
    via: 'digitalsurgeons',
    hashtags: 'forwardobsessed',
    appendTo: document.querySelector('.open-share-watch'),
    innerHTML: 'Created via OpenShareAPI',
    element: 'div',
    classes: ['wow', 'such', 'classes']
  });
  return openShare;
}

function addNode() {
  var data = dynamicNodeData;
  document.querySelector('.open-share-watch').appendChild(createOpenShareNode(data));
}

window.addNode = addNode;

function addNodeWithCount() {
  var data = dynamicNodeData; // eslint-disable-line no-unused-vars

  new OpenShare.count({
    // eslint-disable-line
    type: 'facebook',
    url: 'https://www.digitalsurgeons.com/'
  }, function (node) {
    var os = new OpenShare.share({
      // eslint-disable-line
      type: 'twitter',
      url: 'http://www.digitalsurgeons.com',
      via: 'digitalsurgeons',
      hashtags: 'forwardobsessed',
      innerHTML: 'Created via OpenShareAPI',
      element: 'div',
      classes: ['wow', 'such', 'classes']
    });
    document.querySelector('.create-node.w-count').appendChild(os);
    os.appendChild(node);
  });
}

window.addNodeWithCount = addNodeWithCount;

function createCountNode() {
  var container = document.querySelector('.create-node.count-nodes');
  var type = container.querySelector('input.count-type').value;
  var url = container.querySelector('input.count-url').value;
  new OpenShare.count({
    //eslint-disable-line
    type: type,
    //eslint-disable-line
    url: url,
    //eslint-disable-line
    appendTo: container,
    classes: ['test']
  }, function (node) {
    node.style.position = 'relative';
  });
  container.querySelector('input.count-type').value = '';
  container.querySelector('input.count-url').value = '';
}

window.createCountNode = createCountNode; // test JS OpenShare API with dashes

new OpenShare.share({
  //eslint-disable-line
  type: 'googleMaps',
  center: '40.765819,-73.975866',
  view: 'traffic',
  zoom: 14,
  appendTo: document.body,
  innerHTML: 'Maps'
});
new OpenShare.share({
  //eslint-disable-line
  type: 'twitter-follow',
  screenName: 'digitalsurgeons',
  userId: '18189130',
  appendTo: document.body,
  innerHTML: 'Follow Test'
}); // test PayPal

new OpenShare.share({
  //eslint-disable-line
  type: 'paypal',
  buttonId: '2P3RJYEFL7Z62',
  sandbox: true,
  appendTo: document.body,
  innerHTML: 'PayPal Test'
}); // bind to count loaded event

document.addEventListener('OpenShare.count-loaded', function () {
  console.log('OpenShare (count) loaded');
}); // bind to share loaded event

document.addEventListener('OpenShare.share-loaded', function () {
  console.log('OpenShare (share) loaded'); // bind to shared event on each individual node

  [].forEach.call(document.querySelectorAll('[data-open-share]'), function (node) {
    node.addEventListener('OpenShare.shared', function (e) {
      console.log('Open Share Shared', e);
    });
  });
  var examples = {
    // eslint-disable-line no-unused-vars
    twitter: new OpenShare.share({
      //eslint-disable-line
      type: 'twitter',
      bindClick: true,
      url: 'http://digitalsurgeons.com',
      via: 'digitalsurgeons',
      text: 'Digital Surgeons',
      hashtags: 'forwardobsessed'
    }, document.querySelector('[data-api-example="twitter"]')),
    facebook: new OpenShare.share({
      //eslint-disable-line
      type: 'facebook',
      bindClick: true,
      link: 'http://digitalsurgeons.com',
      picture: 'http://www.digitalsurgeons.com/img/about/bg_office_team.jpg',
      caption: 'Digital Surgeons',
      description: 'forwardobsessed'
    }, document.querySelector('[data-api-example="facebook"]')),
    pinterest: new OpenShare.share({
      //eslint-disable-line
      type: 'pinterest',
      bindClick: true,
      url: 'http://digitalsurgeons.com',
      media: 'http://www.digitalsurgeons.com/img/about/bg_office_team.jpg',
      description: 'Digital Surgeons',
      appendTo: document.body
    }, document.querySelector('[data-api-example="pinterest"]')),
    email: new OpenShare.share({
      //eslint-disable-line
      type: 'email',
      bindClick: true,
      to: 'techroom@digitalsurgeons.com',
      subject: 'Digital Surgeons',
      body: 'Forward Obsessed'
    }, document.querySelector('[data-api-example="email"]'))
  };
}); // Example of listening for counted events on individual urls or arrays of urls

var urls = ['facebook', 'google', 'linkedin', 'reddit', 'pinterest', ['google', 'linkedin', 'reddit', 'pinterest']];
urls.forEach(function (url) {
  if (Array.isArray(url)) {
    url = url.join(',');
  }

  var countNode = document.querySelectorAll("[data-open-share-count=\"".concat(url, "\"]"));
  [].forEach.call(countNode, function (node) {
    node.addEventListener("OpenShare.counted-".concat(url), function () {
      var counts = node.innerHTML;
      if (counts) console.log(url, 'shares: ', counts);
    });
  });
}); // test twitter count js api

new OpenShare.count({
  //eslint-disable-line
  type: 'twitter',
  url: 'https://www.digitalsurgeons.com/thoughts/technology/the-blockchain-revolution',
  key: 'dstweets'
}, function (node) {
  var os = new OpenShare.share({
    //eslint-disable-line
    type: 'twitter',
    url: 'https://www.digitalsurgeons.com/thoughts/technology/the-blockchain-revolution',
    via: 'digitalsurgeons',
    hashtags: 'forwardobsessed, blockchain',
    appendTo: document.body,
    innerHTML: 'BLOCKCHAIN'
  });
  os.appendChild(node);
});

},{"../analytics.js":1,"../count.js":2,"../share.js":3}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhbmFseXRpY3MuanMiLCJjb3VudC5qcyIsInNoYXJlLmpzIiwic3JjL21vZHVsZXMvY291bnQtYXBpLmpzIiwic3JjL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLFlBQVksR0FBRyxTQUFmLFlBQWUsQ0FBVSxJQUFWLEVBQWdCLEVBQWhCLEVBQW9CO0FBQUM7QUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQVQsSUFBb0IsSUFBSSxLQUFLLFFBQTFDO0FBQ0EsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLFlBQTlCO0FBRUEsTUFBSSxJQUFKLEVBQVUsc0JBQXNCLENBQUMsSUFBRCxFQUFPLEVBQVAsQ0FBdEI7QUFDVixNQUFJLFlBQUosRUFBa0IsYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNuQixDQU5EOztBQVFBLFNBQVMsc0JBQVQsQ0FBZ0MsSUFBaEMsRUFBc0MsRUFBdEMsRUFBMEM7QUFDeEMsTUFBSSxNQUFNLENBQUMsRUFBWCxFQUFlO0FBQ2IsUUFBSSxFQUFKLEVBQVEsRUFBRSxHQURHLENBRWY7O0FBQ0UsSUFBQSxNQUFNLENBQUMsVUFBQyxDQUFELEVBQU87QUFDWixVQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBRixDQUFTLFlBQVQsQ0FBc0IsaUJBQXRCLENBQWpCO0FBQ0EsVUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxZQUFULENBQXNCLHNCQUF0QixLQUNmLENBQUMsQ0FBQyxNQUFGLENBQVMsWUFBVCxDQUFzQixxQkFBdEIsQ0FEZSxJQUVmLENBQUMsQ0FBQyxNQUFGLENBQVMsWUFBVCxDQUFzQiwwQkFBdEIsQ0FGZSxJQUdmLENBQUMsQ0FBQyxNQUFGLENBQVMsWUFBVCxDQUFzQix3QkFBdEIsQ0FIZSxJQUlmLENBQUMsQ0FBQyxNQUFGLENBQVMsWUFBVCxDQUFzQix3QkFBdEIsQ0FK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LGdCQUFMLDZCQUEyQyxHQUEzQyxHQUFrRCxZQUFNO0FBQ3RELFVBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFwQjtBQUNBLFVBQUksTUFBSixFQUFZLE9BQU8sQ0FBQyxHQUFSLENBQVksR0FBWixFQUFpQixVQUFqQixFQUE2QixNQUE3QjtBQUNiLEtBSEQ7QUFJRCxHQUxEO0FBTUQsQ0FaRCxFLENBY0E7O0FBQ0EsSUFBSSxTQUFTLENBQUMsS0FBZCxDQUFvQjtBQUFFO0FBQ3BCLEVBQUEsSUFBSSxFQUFFLFNBRFk7QUFFbEIsRUFBQSxHQUFHLEVBQUUsK0VBRmE7QUFHbEIsRUFBQSxHQUFHLEVBQUU7QUFIYSxDQUFwQixFQUlHLFVBQUMsSUFBRCxFQUFVO0FBQ1gsTUFBTSxFQUFFLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBZCxDQUFvQjtBQUFFO0FBQy9CLElBQUEsSUFBSSxFQUFFLFNBRHVCO0FBRTdCLElBQUEsR0FBRyxFQUFFLCtFQUZ3QjtBQUc3QixJQUFBLEdBQUcsRUFBRSxpQkFId0I7QUFJN0IsSUFBQSxRQUFRLEVBQUUsNkJBSm1CO0FBSzdCLElBQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUxVO0FBTTdCLElBQUEsU0FBUyxFQUFFO0FBTmtCLEdBQXBCLENBQVg7QUFRQSxFQUFBLEVBQUUsQ0FBQyxXQUFILENBQWUsSUFBZjtBQUNELENBZEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbmFseXRpY3NfanMgPSBmdW5jdGlvbiAodHlwZSwgY2IpIHsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGNvbnN0IGlzR0EgPSB0eXBlID09PSAnZXZlbnQnIHx8IHR5cGUgPT09ICdzb2NpYWwnO1xuICBjb25zdCBpc1RhZ01hbmFnZXIgPSB0eXBlID09PSAndGFnTWFuYWdlcic7XG5cbiAgaWYgKGlzR0EpIGNoZWNrSWZBbmFseXRpY3NMb2FkZWQodHlwZSwgY2IpO1xuICBpZiAoaXNUYWdNYW5hZ2VyKSBzZXRUYWdNYW5hZ2VyKGNiKTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSWZBbmFseXRpY3NMb2FkZWQodHlwZSwgY2IpIHtcbiAgaWYgKHdpbmRvdy5nYSkge1xuICAgIGlmIChjYikgY2IoKTtcbiAgLy8gYmluZCB0byBzaGFyZWQgZXZlbnQgb24gZWFjaCBpbmRpdmlkdWFsIG5vZGVcbiAgICBsaXN0ZW4oKGUpID0+IHtcbiAgICAgIGNvbnN0IHBsYXRmb3JtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUnKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWxpbmsnKSB8fFxuICAgICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtdXJsJykgfHxcbiAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXVzZXJuYW1lJykgfHxcbiAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNlbnRlcicpIHx8XG4gICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1zZWFyY2gnKSB8fFxuICAgICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtYm9keScpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIGV2ZW50Q2F0ZWdvcnk6ICdPcGVuU2hhcmUgQ2xpY2snLFxuICAgICAgICAgIGV2ZW50QWN0aW9uOiBwbGF0Zm9ybSxcbiAgICAgICAgICBldmVudExhYmVsOiB0YXJnZXQsXG4gICAgICAgICAgdHJhbnNwb3J0OiAnYmVhY29uJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSAnc29jaWFsJykge1xuICAgICAgICBnYSgnc2VuZCcsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIGhpdFR5cGU6ICdzb2NpYWwnLFxuICAgICAgICAgIHNvY2lhbE5ldHdvcms6IHBsYXRmb3JtLFxuICAgICAgICAgIHNvY2lhbEFjdGlvbjogJ3NoYXJlJyxcbiAgICAgICAgICBzb2NpYWxUYXJnZXQ6IHRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGVja0lmQW5hbHl0aWNzTG9hZGVkKHR5cGUsIGNiKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUYWdNYW5hZ2VyKGNiKSB7XG4gIGlmICh3aW5kb3cuZGF0YUxheWVyICYmIHdpbmRvdy5kYXRhTGF5ZXJbMF1bJ2d0bS5zdGFydCddKSB7XG4gICAgaWYgKGNiKSBjYigpO1xuXG4gICAgbGlzdGVuKG9uU2hhcmVUYWdNYW5nZXIpO1xuXG4gICAgZ2V0Q291bnRzKChlKSA9PiB7XG4gICAgICBjb25zdCBjb3VudCA9IGUudGFyZ2V0ID9cbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA6XG4gICAgICBlLmlubmVySFRNTDtcblxuICAgICAgY29uc3QgcGxhdGZvcm0gPSBlLnRhcmdldCA/XG4gICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jb3VudC11cmwnKSA6XG4gICAgICBlLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50LXVybCcpO1xuXG4gICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICAgICAgICBldmVudDogJ09wZW5TaGFyZSBDb3VudCcsXG4gICAgICAgIHBsYXRmb3JtLFxuICAgICAgICByZXNvdXJjZTogY291bnQsXG4gICAgICAgIGFjdGl2aXR5OiAnY291bnQnLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRUYWdNYW5hZ2VyKGNiKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0ZW4oY2IpIHtcbiAgLy8gYmluZCB0byBzaGFyZWQgZXZlbnQgb24gZWFjaCBpbmRpdmlkdWFsIG5vZGVcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZW4tc2hhcmVdJyksIChub2RlKSA9PiB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdPcGVuU2hhcmUuc2hhcmVkJywgY2IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRzKGNiKSB7XG4gIGNvbnN0IGNvdW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZW4tc2hhcmUtY291bnRdJyk7XG5cbiAgW10uZm9yRWFjaC5jYWxsKGNvdW50Tm9kZSwgKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS50ZXh0Q29udGVudCkgY2Iobm9kZSk7XG4gICAgZWxzZSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoYE9wZW5TaGFyZS5jb3VudGVkLSR7bm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jb3VudC11cmwnKX1gLCBjYik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblNoYXJlVGFnTWFuZ2VyKGUpIHtcbiAgY29uc3QgcGxhdGZvcm0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZScpO1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1saW5rJykgfHxcbiAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS11cmwnKSB8fFxuICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXVzZXJuYW1lJykgfHxcbiAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jZW50ZXInKSB8fFxuICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXNlYXJjaCcpIHx8XG4gICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtYm9keScpO1xuXG4gIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XG4gICAgZXZlbnQ6ICdPcGVuU2hhcmUgU2hhcmUnLFxuICAgIHBsYXRmb3JtLFxuICAgIHJlc291cmNlOiB0YXJnZXQsXG4gICAgYWN0aXZpdHk6ICdzaGFyZScsXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuYWx5dGljc19qcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUcmlnZ2VyIGN1c3RvbSBPcGVuU2hhcmUgbmFtZXNwYWNlZCBldmVudFxuICovXG52YXIgRXZlbnRzID0ge1xuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldi5pbml0RXZlbnQoYE9wZW5TaGFyZS4ke2V2ZW50fWAsIHRydWUsIHRydWUpO1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldik7XG4gIH0sXG59O1xuXG52YXIgYW5hbHl0aWNzID0gZnVuY3Rpb24gKHR5cGUsIGNiKSB7Ly8gZXNsaW50LWRpc2FibGUtbGluZVxuICBjb25zdCBpc0dBID0gdHlwZSA9PT0gJ2V2ZW50JyB8fCB0eXBlID09PSAnc29jaWFsJztcbiAgY29uc3QgaXNUYWdNYW5hZ2VyID0gdHlwZSA9PT0gJ3RhZ01hbmFnZXInO1xuXG4gIGlmIChpc0dBKSBjaGVja0lmQW5hbHl0aWNzTG9hZGVkKHR5cGUsIGNiKTtcbiAgaWYgKGlzVGFnTWFuYWdlcikgc2V0VGFnTWFuYWdlcihjYik7XG59O1xuXG5mdW5jdGlvbiBjaGVja0lmQW5hbHl0aWNzTG9hZGVkKHR5cGUsIGNiKSB7XG4gIGlmICh3aW5kb3cuZ2EpIHtcbiAgICBpZiAoY2IpIGNiKCk7XG4gIC8vIGJpbmQgdG8gc2hhcmVkIGV2ZW50IG9uIGVhY2ggaW5kaXZpZHVhbCBub2RlXG4gICAgbGlzdGVuKChlKSA9PiB7XG4gICAgICBjb25zdCBwbGF0Zm9ybSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlJyk7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1saW5rJykgfHxcbiAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXVybCcpIHx8XG4gICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS11c2VybmFtZScpIHx8XG4gICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jZW50ZXInKSB8fFxuICAgICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtc2VhcmNoJykgfHxcbiAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWJvZHknKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBldmVudENhdGVnb3J5OiAnT3BlblNoYXJlIENsaWNrJyxcbiAgICAgICAgICBldmVudEFjdGlvbjogcGxhdGZvcm0sXG4gICAgICAgICAgZXZlbnRMYWJlbDogdGFyZ2V0LFxuICAgICAgICAgIHRyYW5zcG9ydDogJ2JlYWNvbicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ3NvY2lhbCcpIHtcbiAgICAgICAgZ2EoJ3NlbmQnLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBoaXRUeXBlOiAnc29jaWFsJyxcbiAgICAgICAgICBzb2NpYWxOZXR3b3JrOiBwbGF0Zm9ybSxcbiAgICAgICAgICBzb2NpYWxBY3Rpb246ICdzaGFyZScsXG4gICAgICAgICAgc29jaWFsVGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2hlY2tJZkFuYWx5dGljc0xvYWRlZCh0eXBlLCBjYik7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VGFnTWFuYWdlcihjYikge1xuICBpZiAod2luZG93LmRhdGFMYXllciAmJiB3aW5kb3cuZGF0YUxheWVyWzBdWydndG0uc3RhcnQnXSkge1xuICAgIGlmIChjYikgY2IoKTtcblxuICAgIGxpc3RlbihvblNoYXJlVGFnTWFuZ2VyKTtcblxuICAgIGdldENvdW50cygoZSkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBlLnRhcmdldCA/XG4gICAgICBlLnRhcmdldC5pbm5lckhUTUwgOlxuICAgICAgZS5pbm5lckhUTUw7XG5cbiAgICAgIGNvbnN0IHBsYXRmb3JtID0gZS50YXJnZXQgP1xuICAgICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY291bnQtdXJsJykgOlxuICAgICAgZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jb3VudC11cmwnKTtcblxuICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdPcGVuU2hhcmUgQ291bnQnLFxuICAgICAgICBwbGF0Zm9ybSxcbiAgICAgICAgcmVzb3VyY2U6IGNvdW50LFxuICAgICAgICBhY3Rpdml0eTogJ2NvdW50JyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VGFnTWFuYWdlcihjYik7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdGVuKGNiKSB7XG4gIC8vIGJpbmQgdG8gc2hhcmVkIGV2ZW50IG9uIGVhY2ggaW5kaXZpZHVhbCBub2RlXG4gIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcGVuLXNoYXJlXScpLCAobm9kZSkgPT4ge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignT3BlblNoYXJlLnNoYXJlZCcsIGNiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50cyhjYikge1xuICBjb25zdCBjb3VudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcGVuLXNoYXJlLWNvdW50XScpO1xuXG4gIFtdLmZvckVhY2guY2FsbChjb3VudE5vZGUsIChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUudGV4dENvbnRlbnQpIGNiKG5vZGUpO1xuICAgIGVsc2Ugbm9kZS5hZGRFdmVudExpc3RlbmVyKGBPcGVuU2hhcmUuY291bnRlZC0ke25vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY291bnQtdXJsJyl9YCwgY2IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25TaGFyZVRhZ01hbmdlcihlKSB7XG4gIGNvbnN0IHBsYXRmb3JtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUnKTtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtbGluaycpIHx8XG4gICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtdXJsJykgfHxcbiAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS11c2VybmFtZScpIHx8XG4gICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY2VudGVyJykgfHxcbiAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1zZWFyY2gnKSB8fFxuICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWJvZHknKTtcblxuICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICAgIGV2ZW50OiAnT3BlblNoYXJlIFNoYXJlJyxcbiAgICBwbGF0Zm9ybSxcbiAgICByZXNvdXJjZTogdGFyZ2V0LFxuICAgIGFjdGl2aXR5OiAnc2hhcmUnLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZU5vZGVzKG9wdHMpIHtcbiAgLy8gbG9vcCB0aHJvdWdoIG9wZW4gc2hhcmUgbm9kZSBjb2xsZWN0aW9uXG4gIHJldHVybiAoKSA9PiB7XG4gICAgLy8gY2hlY2sgZm9yIGFuYWx5dGljc1xuICAgIGNoZWNrQW5hbHl0aWNzKCk7XG5cbiAgICBpZiAob3B0cy5hcGkpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gb3B0cy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChvcHRzLnNlbGVjdG9yKTtcbiAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlcywgb3B0cy5jYik7XG5cbiAgICAgIC8vIHRyaWdnZXIgY29tcGxldGVkIGV2ZW50XG4gICAgICBFdmVudHMudHJpZ2dlcihkb2N1bWVudCwgYCR7b3B0cy5hcGl9LWxvYWRlZGApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29wIHRocm91Z2ggb3BlbiBzaGFyZSBub2RlIGNvbGxlY3Rpb25cbiAgICAgIGNvbnN0IHNoYXJlTm9kZXMgPSBvcHRzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKG9wdHMuc2VsZWN0b3Iuc2hhcmUpO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKHNoYXJlTm9kZXMsIG9wdHMuY2Iuc2hhcmUpO1xuXG4gICAgICAvLyB0cmlnZ2VyIGNvbXBsZXRlZCBldmVudFxuICAgICAgRXZlbnRzLnRyaWdnZXIoZG9jdW1lbnQsICdzaGFyZS1sb2FkZWQnKTtcblxuICAgICAgLy8gbG9vcCB0aHJvdWdoIGNvdW50IG5vZGUgY29sbGVjdGlvblxuICAgICAgY29uc3QgY291bnROb2RlcyA9IG9wdHMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zZWxlY3Rvci5jb3VudCk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoY291bnROb2Rlcywgb3B0cy5jYi5jb3VudCk7XG5cbiAgICAgIC8vIHRyaWdnZXIgY29tcGxldGVkIGV2ZW50XG4gICAgICBFdmVudHMudHJpZ2dlcihkb2N1bWVudCwgJ2NvdW50LWxvYWRlZCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2hlY2tBbmFseXRpY3MoKSB7XG4gIC8vIGNoZWNrIGZvciBhbmFseXRpY3NcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW9wZW4tc2hhcmUtYW5hbHl0aWNzXScpKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vcGVuLXNoYXJlLWFuYWx5dGljc10nKVxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWFuYWx5dGljcycpO1xuXG4gICAgaWYgKHByb3ZpZGVyLmluZGV4T2YoJywnKSA+IC0xKSB7XG4gICAgICBjb25zdCBwcm92aWRlcnMgPSBwcm92aWRlci5zcGxpdCgnLCcpO1xuICAgICAgcHJvdmlkZXJzLmZvckVhY2gocCA9PiBhbmFseXRpY3MocCkpO1xuICAgIH0gZWxzZSBhbmFseXRpY3MocHJvdmlkZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXYXRjaGVyKHdhdGNoZXIsIGZuKSB7XG4gIFtdLmZvckVhY2guY2FsbCh3YXRjaGVyLCAodykgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgLy8gdGFyZ2V0IHdpbGwgbWF0Y2ggYmV0d2VlbiBhbGwgbXV0YXRpb25zIHNvIGp1c3QgdXNlIGZpcnN0XG4gICAgICBmbihtdXRhdGlvbnNbMF0udGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUodywge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdCQxKG9wdHMpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBpbml0Tm9kZXMgPSBpbml0aWFsaXplTm9kZXMoe1xuICAgICAgYXBpOiBvcHRzLmFwaSB8fCBudWxsLFxuICAgICAgY29udGFpbmVyOiBvcHRzLmNvbnRhaW5lciB8fCBkb2N1bWVudCxcbiAgICAgIHNlbGVjdG9yOiBvcHRzLnNlbGVjdG9yLFxuICAgICAgY2I6IG9wdHMuY2IsXG4gICAgfSk7XG5cbiAgICBpbml0Tm9kZXMoKTtcblxuICAgIC8vIGNoZWNrIGZvciBtdXRhdGlvbiBvYnNlcnZlcnMgYmVmb3JlIHVzaW5nLCBJRTExIG9ubHlcbiAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5pdGlhbGl6ZVdhdGNoZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb3Blbi1zaGFyZS13YXRjaF0nKSwgaW5pdE5vZGVzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJvdW5kKHgsIHByZWNpc2lvbikge1xuICBpZiAodHlwZW9mIHggIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdmFsdWUgdG8gYmUgYSBudW1iZXInKTtcbiAgfVxuXG4gIGNvbnN0IGV4cG9uZW50ID0gcHJlY2lzaW9uID4gMCA/ICdlJyA6ICdlLSc7XG4gIGNvbnN0IGV4cG9uZW50TmVnID0gcHJlY2lzaW9uID4gMCA/ICdlLScgOiAnZSc7XG4gIHByZWNpc2lvbiA9IE1hdGguYWJzKHByZWNpc2lvbik7XG5cbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHggKyBleHBvbmVudCArIHByZWNpc2lvbikgKyBleHBvbmVudE5lZyArIHByZWNpc2lvbik7XG59XG5cbmZ1bmN0aW9uIHRob3VzYW5kaWZ5KG51bSkge1xuICByZXR1cm4gYCR7cm91bmQobnVtIC8gMTAwMCwgMSl9S2A7XG59XG5cbmZ1bmN0aW9uIG1pbGxpb25pZnkobnVtKSB7XG4gIHJldHVybiBgJHtyb3VuZChudW0gLyAxMDAwMDAwLCAxKX1NYDtcbn1cblxuZnVuY3Rpb24gY291bnRSZWR1Y2UoZWwsIGNvdW50LCBjYikge1xuICBpZiAoY291bnQgPiA5OTk5OTkpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBtaWxsaW9uaWZ5KGNvdW50KTtcbiAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihlbCk7XG4gIH0gZWxzZSBpZiAoY291bnQgPiA5OTkpIHtcbiAgICBlbC5pbm5lckhUTUwgPSB0aG91c2FuZGlmeShjb3VudCk7XG4gICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IoZWwpO1xuICB9IGVsc2Uge1xuICAgIGVsLmlubmVySFRNTCA9IGNvdW50O1xuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKGVsKTtcbiAgfVxufVxuXG4vKlxuICAgU29tZXRpbWVzIHNvY2lhbCBwbGF0Zm9ybXMgZ2V0IGNvbmZ1c2VkIGFuZCBkcm9wIHNoYXJlIGNvdW50cy5cbiAgIEluIHRoaXMgbW9kdWxlIHdlIGNoZWNrIGlmIHRoZSByZXR1cm5lZCBjb3VudCBpcyBsZXNzIHRoYW4gdGhlIGNvdW50IGluXG4gICBsb2NhbHN0b3JhZ2UuXG4gICBJZiB0aGUgbG9jYWwgY291bnQgaXMgZ3JlYXRlciB0aGFuIHRoZSByZXR1cm5lZCBjb3VudCxcbiAgIHdlIHN0b3JlIHRoZSBsb2NhbCBjb3VudCArIHRoZSByZXR1cm5lZCBjb3VudC5cbiAgIE90aGVyd2lzZSwgc3RvcmUgdGhlIHJldHVybmVkIGNvdW50LlxuKi9cblxudmFyIHN0b3JlQ291bnQgPSAodCwgY291bnQpID0+IHtcbiAgY29uc3QgaXNBcnIgPSB0LnR5cGUuaW5kZXhPZignLCcpID4gLTE7XG4gIGNvbnN0IGxvY2FsID0gTnVtYmVyKHQuc3RvcmVHZXQoYCR7dC50eXBlfS0ke3Quc2hhcmVkfWApKTtcblxuICBpZiAobG9jYWwgPiBjb3VudCAmJiAhaXNBcnIpIHtcbiAgICBjb25zdCBsYXRlc3RDb3VudCA9IE51bWJlcih0LnN0b3JlR2V0KGAke3QudHlwZX0tJHt0LnNoYXJlZH0tbGF0ZXN0Q291bnRgKSk7XG4gICAgdC5zdG9yZVNldChgJHt0LnR5cGV9LSR7dC5zaGFyZWR9LWxhdGVzdENvdW50YCwgY291bnQpO1xuXG4gICAgY291bnQgPSBpc051bWVyaWMobGF0ZXN0Q291bnQpICYmIGxhdGVzdENvdW50ID4gMCA/XG4gICAgICBjb3VudCArPSBsb2NhbCAtIGxhdGVzdENvdW50IDpcbiAgICAgIGNvdW50ICs9IGxvY2FsO1xuICB9XG5cbiAgaWYgKCFpc0FycikgdC5zdG9yZVNldChgJHt0LnR5cGV9LSR7dC5zaGFyZWR9YCwgY291bnQpO1xuICByZXR1cm4gY291bnQ7XG59O1xuXG5mdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuXG4vKipcbiAqIE9iamVjdCBvZiB0cmFuc2Zvcm0gZnVuY3Rpb25zIGZvciBlYWNoIG9wZW5zaGFyZSBhcGlcbiAqIFRyYW5zZm9ybSBmdW5jdGlvbnMgcGFzc2VkIGludG8gT3BlblNoYXJlIGluc3RhbmNlIHdoZW4gaW5zdGFudGlhdGVkXG4gKiBSZXR1cm4gb2JqZWN0IGNvbnRhaW5pbmcgVVJMIGFuZCBrZXkvdmFsdWUgYXJnc1xuICovXG52YXIgQ291bnRUcmFuc2Zvcm1zID0ge1xuXG4gIC8vIGZhY2Vib29rIGNvdW50IGRhdGFcbiAgZmFjZWJvb2sodXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vP2lkPSR7dXJsfWAsXG4gICAgICB0cmFuc2Zvcm0oeGhyKSB7XG4gICAgICAgIGNvbnN0IGZiID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IChmYi5zaGFyZSAmJiBmYi5zaGFyZS5zaGFyZV9jb3VudCkgfHwgMDtcblxuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbi8vIHBpbnRlcmVzdCBjb3VudCBkYXRhXG4gIHBpbnRlcmVzdCh1cmwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2pzb25wJyxcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLnBpbnRlcmVzdC5jb20vdjEvdXJscy9jb3VudC5qc29uP2NhbGxiYWNrPT8mdXJsPSR7dXJsfWAsXG4gICAgICB0cmFuc2Zvcm0oZGF0YSkge1xuICAgICAgICBjb25zdCBjb3VudCA9IGRhdGEuY291bnQgfHwgMDtcbiAgICAgICAgcmV0dXJuIHN0b3JlQ291bnQodGhpcywgY291bnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIGxpbmtlZGluIGNvdW50IGRhdGFcbiAgbGlua2VkaW4odXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdqc29ucCcsXG4gICAgICB1cmw6IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vY291bnRzZXJ2L2NvdW50L3NoYXJlP3VybD0ke3VybH0mZm9ybWF0PWpzb25wJmNhbGxiYWNrPT9gLFxuICAgICAgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBkYXRhLmNvdW50IHx8IDA7XG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIGNvdW50KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyByZWRkaXQgY291bnQgZGF0YVxuICByZWRkaXQodXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9hcGkvaW5mby5qc29uP3VybD0ke3VybH1gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCByZWRkaXQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICBjb25zdCBwb3N0cyA9IChyZWRkaXQuZGF0YSAmJiByZWRkaXQuZGF0YS5jaGlsZHJlbikgfHwgbnVsbDtcbiAgICAgICAgbGV0IHVwcyA9IDA7XG5cbiAgICAgICAgaWYgKHBvc3RzKSB7XG4gICAgICAgICAgcG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgdXBzICs9IE51bWJlcihwb3N0LmRhdGEudXBzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIHVwcyk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbi8vIGdvb2dsZSBjb3VudCBkYXRhXG4gIGdvb2dsZSh1cmwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBtZXRob2Q6ICdwb3MucGx1c29uZXMuZ2V0JyxcbiAgICAgICAgaWQ6ICdwJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbm9sb2c6IHRydWUsXG4gICAgICAgICAgaWQ6IHVybCxcbiAgICAgICAgICBzb3VyY2U6ICd3aWRnZXQnLFxuICAgICAgICAgIHVzZXJJZDogJ0B2aWV3ZXInLFxuICAgICAgICAgIGdyb3VwSWQ6ICdAc2VsZicsXG4gICAgICAgIH0sXG4gICAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgICBrZXk6ICdwJyxcbiAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgIH0sXG4gICAgICB1cmw6ICdodHRwczovL2NsaWVudHM2Lmdvb2dsZS5jb20vcnBjJyxcbiAgICAgIHRyYW5zZm9ybSh4aHIpIHtcbiAgICAgICAgY29uc3QgZ29vZ2xlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgY29uc3QgY291bnQgPSAoZ29vZ2xlLnJlc3VsdFxuICAgICAgICAgICYmIGdvb2dsZS5yZXN1bHQubWV0YWRhdGFcbiAgICAgICAgICAmJiBnb29nbGUucmVzdWx0Lm1ldGFkYXRhLmdsb2JhbENvdW50c1xuICAgICAgICAgICYmIGdvb2dsZS5yZXN1bHQubWV0YWRhdGEuZ2xvYmFsQ291bnRzLmNvdW50KSB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2l0aHViIHN0YXIgY291bnRcbiAgZ2l0aHViU3RhcnMocmVwbykge1xuICAgIHJlcG8gPSByZXBvLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMSA/XG4gICAgcmVwby5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXSA6XG4gICAgcmVwbztcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb31gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkuc3RhcmdhemVyc19jb3VudCB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2l0aHViIGZvcmtzIGNvdW50XG4gIGdpdGh1YkZvcmtzKHJlcG8pIHtcbiAgICByZXBvID0gcmVwby5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTEgP1xuICAgIHJlcG8uc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV0gOlxuICAgIHJlcG87XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3JlcG99YCxcbiAgICAgIHRyYW5zZm9ybSh4aHIpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLmZvcmtzX2NvdW50IHx8IDA7XG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIGNvdW50KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyBnaXRodWIgd2F0Y2hlcnMgY291bnRcbiAgZ2l0aHViV2F0Y2hlcnMocmVwbykge1xuICAgIHJlcG8gPSByZXBvLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMSA/XG4gICAgcmVwby5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXSA6XG4gICAgcmVwbztcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb31gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkud2F0Y2hlcnNfY291bnQgfHwgMDtcbiAgICAgICAgcmV0dXJuIHN0b3JlQ291bnQodGhpcywgY291bnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIGRyaWJiYmxlIGxpa2VzIGNvdW50XG4gIGRyaWJiYmxlKHNob3QpIHtcbiAgICBzaG90ID0gc2hvdC5pbmRleE9mKCdkcmliYmJsZS5jb20vc2hvdHMnKSA+IC0xID9cbiAgICBzaG90LnNwbGl0KCdzaG90cy8nKVsxXSA6XG4gICAgc2hvdDtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZHJpYmJibGUuY29tL3YxL3Nob3RzLyR7c2hvdH0vbGlrZXNgO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHVybCxcbiAgICAgIHRyYW5zZm9ybSh4aHIsIEV2ZW50cykge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkubGVuZ3RoO1xuXG4gICAgICAgIC8vIGF0IHRoaXMgdGltZSBkcmliYmJsZSBsaW1pdHMgYSByZXNwb25zZSBvZiAxMiBsaWtlcyBwZXIgcGFnZVxuICAgICAgICBpZiAoY291bnQgPT09IDEyKSB7XG4gICAgICAgICAgY29uc3QgcGFnZSA9IDI7XG4gICAgICAgICAgcmVjdXJzaXZlQ291bnQodXJsLCBwYWdlLCBjb3VudCwgKGZpbmFsQ291bnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBmaW5hbENvdW50LCB0aGlzLmNiKTtcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBmaW5hbENvdW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICB0d2l0dGVyKHVybCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLm9wZW5zaGFyZS5zb2NpYWwvam9iP3VybD0ke3VybH0ma2V5PWAsXG4gICAgICB0cmFuc2Zvcm0oeGhyKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5jb3VudCB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5mdW5jdGlvbiByZWN1cnNpdmVDb3VudCh1cmwsIHBhZ2UsIGNvdW50LCBjYikge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIGAke3VybH0/cGFnZT0ke3BhZ2V9YCk7XG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkgeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zdCBsaWtlcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XG4gICAgY291bnQgKz0gbGlrZXMubGVuZ3RoO1xuXG4gICAgLy8gZHJpYmJibGUgbGlrZSBwZXIgcGFnZSBpcyAxMlxuICAgIGlmIChsaWtlcy5sZW5ndGggPT09IDEyKSB7XG4gICAgICBwYWdlKys7XG4gICAgICByZWN1cnNpdmVDb3VudCh1cmwsIHBhZ2UsIGNvdW50LCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKGNvdW50KTtcbiAgICB9XG4gIH0pO1xuICB4aHIuc2VuZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHNoYXJlIGNvdW50IGluc3RhbmNlIGZyb20gb25lIHRvIG1hbnkgbmV0d29ya3NcbiAqL1xuXG4vLyBmdW5jdGlvbiBpc051bWVyaWMobikge1xuLy8gICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuLy8gfVxuXG5jbGFzcyBDb3VudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHVybCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5vIHVybCBwcm92aWRlZFxuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gU2hhcmU6IG5vIHVybCBwcm92aWRlZCBmb3IgY291bnQnKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3IgR2l0aHViIGNvdW50c1xuICAgIGlmICh0eXBlLmluZGV4T2YoJ2dpdGh1YicpID09PSAwKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ2dpdGh1Yi1zdGFycycpIHtcbiAgICAgICAgdHlwZSA9ICdnaXRodWJTdGFycyc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdnaXRodWItZm9ya3MnKSB7XG4gICAgICAgIHR5cGUgPSAnZ2l0aHViRm9ya3MnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZ2l0aHViLXdhdGNoZXJzJykge1xuICAgICAgICB0eXBlID0gJ2dpdGh1YldhdGNoZXJzJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgR2l0aHViIGNvdW50IHR5cGUuIFRyeSBnaXRodWItc3RhcnMsIGdpdGh1Yi1mb3Jrcywgb3IgZ2l0aHViLXdhdGNoZXJzLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHR5cGUgaXMgY29tbWEgc2VwYXJhdGUgbGlzdCBjcmVhdGUgYXJyYXlcbiAgICBpZiAodHlwZS5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMudHlwZUFyciA9IHRoaXMudHlwZS5zcGxpdCgnLCcpO1xuICAgICAgdGhpcy5jb3VudERhdGEgPSBbXTtcblxuICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlIHN1cHBsaWVkIGlzIHZhbGlkXG4gICAgICB0aGlzLnR5cGVBcnIuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAoIUNvdW50VHJhbnNmb3Jtc1t0XSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlbiBTaGFyZTogJHt0eXBlfSBpcyBhbiBpbnZhbGlkIGNvdW50IHR5cGVgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY291bnREYXRhLnB1c2goQ291bnRUcmFuc2Zvcm1zW3RdKHVybCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCk7XG5cbiAgICAgIGlmIChjb3VudCkge1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciBpZiBpbnZhbGlkIHR5cGUgcHJvdmlkZWRcbiAgICB9IGVsc2UgaWYgKCFDb3VudFRyYW5zZm9ybXNbdHlwZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlbiBTaGFyZTogJHt0eXBlfSBpcyBhbiBpbnZhbGlkIGNvdW50IHR5cGVgKTtcblxuICAgICAgICAvLyBzaW5nbGUgY291bnRcbiAgICAgICAgLy8gc3RvcmUgY291bnQgVVJMIGFuZCB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuY291bnREYXRhID0gQ291bnRUcmFuc2Zvcm1zW3R5cGVdKHVybCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaGFuZGxlIGNhbGxpbmcgZ2V0Q291bnQgLyBnZXRDb3VudHNcbiAgLy8gZGVwZW5kaW5nIG9uIG51bWJlciBvZiB0eXBlc1xuICBjb3VudChvcywgY2IsIGFwcGVuZFRvKSB7XG4gICAgdGhpcy5vcyA9IG9zO1xuICAgIHRoaXMuYXBwZW5kVG8gPSBhcHBlbmRUbztcbiAgICB0aGlzLmNiID0gY2I7XG4gICAgdGhpcy51cmwgPSB0aGlzLm9zLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50Jyk7XG4gICAgdGhpcy5zaGFyZWQgPSB0aGlzLm9zLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50LXVybCcpO1xuICAgIHRoaXMua2V5ID0gdGhpcy5vcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1rZXknKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmNvdW50RGF0YSkpIHtcbiAgICAgIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRDb3VudHMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBmZXRjaCBjb3VudCBlaXRoZXIgQUpBWCBvciBKU09OUFxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RvcmVHZXQoYCR7dGhpcy50eXBlfS0ke3RoaXMuc2hhcmVkfWApO1xuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgfVxuICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQpO1xuICAgIH1cbiAgICB0aGlzW3RoaXMuY291bnREYXRhLnR5cGVdKHRoaXMuY291bnREYXRhKTtcbiAgfVxuXG4gIC8vIGZldGNoIG11bHRpcGxlIGNvdW50cyBhbmQgYWdncmVnYXRlXG4gIGdldENvdW50cygpIHtcbiAgICB0aGlzLnRvdGFsID0gW107XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RvcmVHZXQoYCR7dGhpcy50eXBlfS0ke3RoaXMuc2hhcmVkfWApO1xuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgfVxuICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQpO1xuICAgIH1cblxuICAgIHRoaXMuY291bnREYXRhLmZvckVhY2goKGNvdW50RGF0YSkgPT4ge1xuICAgICAgdGhpc1tjb3VudERhdGEudHlwZV0oY291bnREYXRhLCAobnVtKSA9PiB7XG4gICAgICAgIHRoaXMudG90YWwucHVzaChudW0pO1xuXG4gICAgICAgIC8vIHRvdGFsIGNvdW50cyBsZW5ndGggbm93IGVxdWFscyB0eXBlIGFycmF5IGxlbmd0aFxuICAgICAgICAvLyBzbyBhZ2dyZWdhdGUsIHN0b3JlIGFuZCBpbnNlcnQgaW50byBET01cbiAgICAgICAgaWYgKHRoaXMudG90YWwubGVuZ3RoID09PSB0aGlzLnR5cGVBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IHRvdCA9IDA7XG5cbiAgICAgICAgICB0aGlzLnRvdGFsLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIHRvdCArPSB0O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdHlwZW9mIHRoaXMuYXBwZW5kVG8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbG9jYWwgPSBOdW1iZXIodGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCkpO1xuICAgICAgICAgIGlmIChsb2NhbCA+IHRvdCkge1xuICAgICAgICAgICAgLy8gY29uc3QgbGF0ZXN0Q291bnQgPSBOdW1iZXIodGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9LWxhdGVzdENvdW50YCkpO1xuICAgICAgICAgICAgLy8gdGhpcy5zdG9yZVNldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9LWxhdGVzdENvdW50YCwgdG90KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0b3QgPSBpc051bWVyaWMobGF0ZXN0Q291bnQpICYmIGxhdGVzdENvdW50ID4gMCA/XG4gICAgICAgICAgICAvLyB0b3QgKz0gbG9jYWwgLSBsYXRlc3RDb3VudCA6XG4gICAgICAgICAgICAvLyB0b3QgKz0gbG9jYWw7XG4gICAgICAgICAgICB0b3QgPSBsb2NhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdG9yZVNldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCwgdG90KTtcblxuICAgICAgICAgIGNvdW50UmVkdWNlKHRoaXMub3MsIHRvdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdHlwZW9mIHRoaXMuYXBwZW5kVG8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gaGFuZGxlIEpTT05QIHJlcXVlc3RzXG4gIGpzb25wKGNvdW50RGF0YSwgY2IpIHtcbiAgLy8gZGVmaW5lIHJhbmRvbSBjYWxsYmFjayBhbmQgYXNzaWduIHRyYW5zZm9ybSBmdW5jdGlvblxuICAgIGNvbnN0IGNhbGxiYWNrID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnJlcGxhY2UoL1teYS16QS1aXS9nLCAnJyk7XG4gICAgd2luZG93W2NhbGxiYWNrXSA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb3VudCA9IGNvdW50RGF0YS50cmFuc2Zvcm0uYXBwbHkodGhpcywgW2RhdGFdKSB8fCAwO1xuXG4gICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiKGNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCwgdGhpcy5jYik7XG4gICAgICB9XG5cbiAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgfTtcblxuICAgIC8vIGFwcGVuZCBKU09OUCBzY3JpcHQgdGFnIHRvIHBhZ2VcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gY291bnREYXRhLnVybC5yZXBsYWNlKCdjYWxsYmFjaz0/JywgYGNhbGxiYWNrPSR7Y2FsbGJhY2t9YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaGFuZGxlIEFKQVggR0VUIHJlcXVlc3RcbiAgZ2V0KGNvdW50RGF0YSwgY2IpIHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIG9uIHN1Y2Nlc3MgcGFzcyByZXNwb25zZSB0byB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IGNvdW50RGF0YS50cmFuc2Zvcm0uYXBwbHkodGhpcywgW3hociwgRXZlbnRzXSkgfHwgMDtcblxuICAgICAgICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNiKGNvdW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdHlwZW9mIHRoaXMuYXBwZW5kVG8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50UmVkdWNlKHRoaXMub3MsIGNvdW50LCB0aGlzLmNiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBFdmVudHMudHJpZ2dlcih0aGlzLm9zLCBgY291bnRlZC0ke3RoaXMudXJsfWApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChjb3VudERhdGEudXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHR0cHM6Ly9hcGkub3BlbnNoYXJlLnNvY2lhbC9qb2I/JykgPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSBzaWduIHVwIGZvciBUd2l0dGVyIGNvdW50cyBhdCBodHRwczovL29wZW5zaGFyZS5zb2NpYWwvdHdpdHRlci9hdXRoJyk7XG4gICAgICAgICAgY29uc3QgY291bnQgPSAwO1xuXG4gICAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IoY291bnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQsIHRoaXMuY2IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gZ2V0IEFQSSBkYXRhIGZyb20nLCBjb3VudERhdGEudXJsLCAnLiBQbGVhc2UgdXNlIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiBPcGVuU2hhcmUuJyk7XG4gICAgICAgICAgY29uc3QgY291bnQgPSAwO1xuXG4gICAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IoY291bnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQsIHRoaXMuY2IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY291bnREYXRhLnVybCA9IGNvdW50RGF0YS51cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly9hcGkub3BlbnNoYXJlLnNvY2lhbC9qb2I/JykgJiYgdGhpcy5rZXkgP1xuICAgICAgY291bnREYXRhLnVybCArIHRoaXMua2V5IDpcbiAgICAgIGNvdW50RGF0YS51cmw7XG5cbiAgICB4aHIub3BlbignR0VUJywgY291bnREYXRhLnVybCk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxuXG4gIC8vIGhhbmRsZSBBSkFYIFBPU1QgcmVxdWVzdFxuICBwb3N0KGNvdW50RGF0YSwgY2IpIHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIG9uIHN1Y2Nlc3MgcGFzcyByZXNwb25zZSB0byB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FIHx8XG4gICAgICAgIHhoci5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvdW50ID0gY291bnREYXRhLnRyYW5zZm9ybS5hcHBseSh0aGlzLCBbeGhyXSkgfHwgMDtcblxuICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYihjb3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQsIHRoaXMuY2IpO1xuICAgICAgfVxuICAgICAgRXZlbnRzLnRyaWdnZXIodGhpcy5vcywgYGNvdW50ZWQtJHt0aGlzLnVybH1gKTtcbiAgICB9O1xuXG4gICAgeGhyLm9wZW4oJ1BPU1QnLCBjb3VudERhdGEudXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcpO1xuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGNvdW50RGF0YS5kYXRhKSk7XG4gIH1cblxuICBzdG9yZVNldCh0eXBlLCBjb3VudCA9IDApIHsvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UgfHwgIXR5cGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgT3BlblNoYXJlLSR7dHlwZX1gLCBjb3VudCk7XG4gIH1cblxuICBzdG9yZUdldCh0eXBlKSB7Ly9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlIHx8ICF0eXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBPcGVuU2hhcmUtJHt0eXBlfWApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvdW50Tm9kZShvcykge1xuICAvLyBpbml0aWFsaXplIG9wZW4gc2hhcmUgb2JqZWN0IHdpdGggdHlwZSBhdHRyaWJ1dGVcbiAgY29uc3QgdHlwZSA9IG9zLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50Jyk7XG4gIGNvbnN0IHVybCA9IG9zLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50LXJlcG8nKSB8fFxuICAgICAgb3MuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY291bnQtc2hvdCcpIHx8XG4gICAgICBvcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jb3VudC11cmwnKTtcbiAgY29uc3QgY291bnQgPSBuZXcgQ291bnQodHlwZSwgdXJsKTtcblxuICBjb3VudC5jb3VudChvcyk7XG4gIG9zLnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLW5vZGUnLCB0eXBlKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdCQxKHtcbiAgICBhcGk6ICdjb3VudCcsXG4gICAgc2VsZWN0b3I6ICdbZGF0YS1vcGVuLXNoYXJlLWNvdW50XTpub3QoW2RhdGEtb3Blbi1zaGFyZS1ub2RlXSknLFxuICAgIGNiOiBpbml0aWFsaXplQ291bnROb2RlLFxuICB9KSgpO1xufVxudmFyIGNvdW50X2pzID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGluaXQoKTtcbiAgfVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICBpbml0KCk7XG4gICAgfVxuICB9LCBmYWxzZSk7XG4gIHJldHVybiByZXF1aXJlKCcuL3NyYy9tb2R1bGVzL2NvdW50LWFwaScpKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvdW50X2pzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRyaWdnZXIgY3VzdG9tIE9wZW5TaGFyZSBuYW1lc3BhY2VkIGV2ZW50XG4gKi9cbnZhciBFdmVudHMgPSB7XG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2LmluaXRFdmVudChgT3BlblNoYXJlLiR7ZXZlbnR9YCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgfSxcbn07XG5cbnZhciBhbmFseXRpY3MgPSBmdW5jdGlvbiAodHlwZSwgY2IpIHsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGNvbnN0IGlzR0EgPSB0eXBlID09PSAnZXZlbnQnIHx8IHR5cGUgPT09ICdzb2NpYWwnO1xuICBjb25zdCBpc1RhZ01hbmFnZXIgPSB0eXBlID09PSAndGFnTWFuYWdlcic7XG5cbiAgaWYgKGlzR0EpIGNoZWNrSWZBbmFseXRpY3NMb2FkZWQodHlwZSwgY2IpO1xuICBpZiAoaXNUYWdNYW5hZ2VyKSBzZXRUYWdNYW5hZ2VyKGNiKTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSWZBbmFseXRpY3NMb2FkZWQodHlwZSwgY2IpIHtcbiAgaWYgKHdpbmRvdy5nYSkge1xuICAgIGlmIChjYikgY2IoKTtcbiAgLy8gYmluZCB0byBzaGFyZWQgZXZlbnQgb24gZWFjaCBpbmRpdmlkdWFsIG5vZGVcbiAgICBsaXN0ZW4oKGUpID0+IHtcbiAgICAgIGNvbnN0IHBsYXRmb3JtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUnKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWxpbmsnKSB8fFxuICAgICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtdXJsJykgfHxcbiAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXVzZXJuYW1lJykgfHxcbiAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNlbnRlcicpIHx8XG4gICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1zZWFyY2gnKSB8fFxuICAgICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtYm9keScpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIGV2ZW50Q2F0ZWdvcnk6ICdPcGVuU2hhcmUgQ2xpY2snLFxuICAgICAgICAgIGV2ZW50QWN0aW9uOiBwbGF0Zm9ybSxcbiAgICAgICAgICBldmVudExhYmVsOiB0YXJnZXQsXG4gICAgICAgICAgdHJhbnNwb3J0OiAnYmVhY29uJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSAnc29jaWFsJykge1xuICAgICAgICBnYSgnc2VuZCcsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgICAgIGhpdFR5cGU6ICdzb2NpYWwnLFxuICAgICAgICAgIHNvY2lhbE5ldHdvcms6IHBsYXRmb3JtLFxuICAgICAgICAgIHNvY2lhbEFjdGlvbjogJ3NoYXJlJyxcbiAgICAgICAgICBzb2NpYWxUYXJnZXQ6IHRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGVja0lmQW5hbHl0aWNzTG9hZGVkKHR5cGUsIGNiKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUYWdNYW5hZ2VyKGNiKSB7XG4gIGlmICh3aW5kb3cuZGF0YUxheWVyICYmIHdpbmRvdy5kYXRhTGF5ZXJbMF1bJ2d0bS5zdGFydCddKSB7XG4gICAgaWYgKGNiKSBjYigpO1xuXG4gICAgbGlzdGVuKG9uU2hhcmVUYWdNYW5nZXIpO1xuXG4gICAgZ2V0Q291bnRzKChlKSA9PiB7XG4gICAgICBjb25zdCBjb3VudCA9IGUudGFyZ2V0ID9cbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA6XG4gICAgICBlLmlubmVySFRNTDtcblxuICAgICAgY29uc3QgcGxhdGZvcm0gPSBlLnRhcmdldCA/XG4gICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jb3VudC11cmwnKSA6XG4gICAgICBlLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50LXVybCcpO1xuXG4gICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICAgICAgICBldmVudDogJ09wZW5TaGFyZSBDb3VudCcsXG4gICAgICAgIHBsYXRmb3JtLFxuICAgICAgICByZXNvdXJjZTogY291bnQsXG4gICAgICAgIGFjdGl2aXR5OiAnY291bnQnLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRUYWdNYW5hZ2VyKGNiKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0ZW4oY2IpIHtcbiAgLy8gYmluZCB0byBzaGFyZWQgZXZlbnQgb24gZWFjaCBpbmRpdmlkdWFsIG5vZGVcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZW4tc2hhcmVdJyksIChub2RlKSA9PiB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdPcGVuU2hhcmUuc2hhcmVkJywgY2IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q291bnRzKGNiKSB7XG4gIGNvbnN0IGNvdW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZW4tc2hhcmUtY291bnRdJyk7XG5cbiAgW10uZm9yRWFjaC5jYWxsKGNvdW50Tm9kZSwgKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS50ZXh0Q29udGVudCkgY2Iobm9kZSk7XG4gICAgZWxzZSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoYE9wZW5TaGFyZS5jb3VudGVkLSR7bm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jb3VudC11cmwnKX1gLCBjYik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblNoYXJlVGFnTWFuZ2VyKGUpIHtcbiAgY29uc3QgcGxhdGZvcm0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZScpO1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1saW5rJykgfHxcbiAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS11cmwnKSB8fFxuICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXVzZXJuYW1lJykgfHxcbiAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jZW50ZXInKSB8fFxuICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXNlYXJjaCcpIHx8XG4gICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtYm9keScpO1xuXG4gIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XG4gICAgZXZlbnQ6ICdPcGVuU2hhcmUgU2hhcmUnLFxuICAgIHBsYXRmb3JtLFxuICAgIHJlc291cmNlOiB0YXJnZXQsXG4gICAgYWN0aXZpdHk6ICdzaGFyZScsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplTm9kZXMob3B0cykge1xuICAvLyBsb29wIHRocm91Z2ggb3BlbiBzaGFyZSBub2RlIGNvbGxlY3Rpb25cbiAgcmV0dXJuICgpID0+IHtcbiAgICAvLyBjaGVjayBmb3IgYW5hbHl0aWNzXG4gICAgY2hlY2tBbmFseXRpY3MoKTtcblxuICAgIGlmIChvcHRzLmFwaSkge1xuICAgICAgY29uc3Qgbm9kZXMgPSBvcHRzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKG9wdHMuc2VsZWN0b3IpO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzLCBvcHRzLmNiKTtcblxuICAgICAgLy8gdHJpZ2dlciBjb21wbGV0ZWQgZXZlbnRcbiAgICAgIEV2ZW50cy50cmlnZ2VyKGRvY3VtZW50LCBgJHtvcHRzLmFwaX0tbG9hZGVkYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb3AgdGhyb3VnaCBvcGVuIHNoYXJlIG5vZGUgY29sbGVjdGlvblxuICAgICAgY29uc3Qgc2hhcmVOb2RlcyA9IG9wdHMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zZWxlY3Rvci5zaGFyZSk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoc2hhcmVOb2Rlcywgb3B0cy5jYi5zaGFyZSk7XG5cbiAgICAgIC8vIHRyaWdnZXIgY29tcGxldGVkIGV2ZW50XG4gICAgICBFdmVudHMudHJpZ2dlcihkb2N1bWVudCwgJ3NoYXJlLWxvYWRlZCcpO1xuXG4gICAgICAvLyBsb29wIHRocm91Z2ggY291bnQgbm9kZSBjb2xsZWN0aW9uXG4gICAgICBjb25zdCBjb3VudE5vZGVzID0gb3B0cy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChvcHRzLnNlbGVjdG9yLmNvdW50KTtcbiAgICAgIFtdLmZvckVhY2guY2FsbChjb3VudE5vZGVzLCBvcHRzLmNiLmNvdW50KTtcblxuICAgICAgLy8gdHJpZ2dlciBjb21wbGV0ZWQgZXZlbnRcbiAgICAgIEV2ZW50cy50cmlnZ2VyKGRvY3VtZW50LCAnY291bnQtbG9hZGVkJyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjaGVja0FuYWx5dGljcygpIHtcbiAgLy8gY2hlY2sgZm9yIGFuYWx5dGljc1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3Blbi1zaGFyZS1hbmFseXRpY3NdJykpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW9wZW4tc2hhcmUtYW5hbHl0aWNzXScpXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtYW5hbHl0aWNzJyk7XG5cbiAgICBpZiAocHJvdmlkZXIuaW5kZXhPZignLCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVycyA9IHByb3ZpZGVyLnNwbGl0KCcsJyk7XG4gICAgICBwcm92aWRlcnMuZm9yRWFjaChwID0+IGFuYWx5dGljcyhwKSk7XG4gICAgfSBlbHNlIGFuYWx5dGljcyhwcm92aWRlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdhdGNoZXIod2F0Y2hlciwgZm4pIHtcbiAgW10uZm9yRWFjaC5jYWxsKHdhdGNoZXIsICh3KSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAvLyB0YXJnZXQgd2lsbCBtYXRjaCBiZXR3ZWVuIGFsbCBtdXRhdGlvbnMgc28ganVzdCB1c2UgZmlyc3RcbiAgICAgIGZuKG11dGF0aW9uc1swXS50YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh3LCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0JDEob3B0cykge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGluaXROb2RlcyA9IGluaXRpYWxpemVOb2Rlcyh7XG4gICAgICBhcGk6IG9wdHMuYXBpIHx8IG51bGwsXG4gICAgICBjb250YWluZXI6IG9wdHMuY29udGFpbmVyIHx8IGRvY3VtZW50LFxuICAgICAgc2VsZWN0b3I6IG9wdHMuc2VsZWN0b3IsXG4gICAgICBjYjogb3B0cy5jYixcbiAgICB9KTtcblxuICAgIGluaXROb2RlcygpO1xuXG4gICAgLy8gY2hlY2sgZm9yIG11dGF0aW9uIG9ic2VydmVycyBiZWZvcmUgdXNpbmcsIElFMTEgb25seVxuICAgIGlmICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbml0aWFsaXplV2F0Y2hlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcGVuLXNoYXJlLXdhdGNoXScpLCBpbml0Tm9kZXMpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBPYmplY3Qgb2YgdHJhbnNmb3JtIGZ1bmN0aW9ucyBmb3IgZWFjaCBvcGVuc2hhcmUgYXBpXG4gKiBUcmFuc2Zvcm0gZnVuY3Rpb25zIHBhc3NlZCBpbnRvIE9wZW5TaGFyZSBpbnN0YW5jZSB3aGVuIGluc3RhbnRpYXRlZFxuICogUmV0dXJuIG9iamVjdCBjb250YWluaW5nIFVSTCBhbmQga2V5L3ZhbHVlIGFyZ3NcbiAqL1xudmFyIFNoYXJlVHJhbnNmb3JtcyA9IHtcblxuICAvLyBzZXQgVHdpdHRlciBzaGFyZSBVUkxcbiAgdHdpdHRlcihkYXRhLCBpb3MgPSBmYWxzZSkge1xuICAgIC8vIGlmIGlPUyB1c2VyIGFuZCBpb3MgZGF0YSBhdHRyaWJ1dGUgZGVmaW5lZFxuICAgIC8vIGJ1aWxkIGlPUyBVUkwgc2NoZW1lIGFzIHNpbmdsZSBzdHJpbmdcbiAgICBpZiAoaW9zICYmIGRhdGEuaW9zKSB7XG4gICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuXG4gICAgICBpZiAoZGF0YS50ZXh0KSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gZGF0YS50ZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS51cmwpIHtcbiAgICAgICAgbWVzc2FnZSArPSBgIC0gJHtkYXRhLnVybH1gO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5oYXNodGFncykge1xuICAgICAgICBjb25zdCB0YWdzID0gZGF0YS5oYXNodGFncy5zcGxpdCgnLCcpO1xuICAgICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gYCAjJHt0YWd9YDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnZpYSkge1xuICAgICAgICBtZXNzYWdlICs9IGAgdmlhICR7ZGF0YS52aWF9YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiAndHdpdHRlcjovL3Bvc3Q/JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlPycsXG4gICAgICBkYXRhLFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDcwMCxcbiAgICAgICAgaGVpZ2h0OiAyOTYsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IFR3aXR0ZXIgcmV0d2VldCBVUkxcbiAgdHdpdHRlclJldHdlZXQoZGF0YSwgaW9zID0gZmFsc2UpIHtcbiAgICAvLyBpZiBpT1MgdXNlciBhbmQgaW9zIGRhdGEgYXR0cmlidXRlIGRlZmluZWRcbiAgICBpZiAoaW9zICYmIGRhdGEuaW9zKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6ICd0d2l0dGVyOi8vc3RhdHVzPycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogZGF0YS50d2VldElkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvcmV0d2VldD8nLFxuICAgICAgZGF0YToge1xuICAgICAgICB0d2VldF9pZDogZGF0YS50d2VldElkLFxuICAgICAgICByZWxhdGVkOiBkYXRhLnJlbGF0ZWQsXG4gICAgICB9LFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDcwMCxcbiAgICAgICAgaGVpZ2h0OiAyOTYsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IFR3aXR0ZXIgbGlrZSBVUkxcbiAgdHdpdHRlckxpa2UoZGF0YSwgaW9zID0gZmFsc2UpIHtcbiAgICAvLyBpZiBpT1MgdXNlciBhbmQgaW9zIGRhdGEgYXR0cmlidXRlIGRlZmluZWRcbiAgICBpZiAoaW9zICYmIGRhdGEuaW9zKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6ICd0d2l0dGVyOi8vc3RhdHVzPycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogZGF0YS50d2VldElkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvZmF2b3JpdGU/JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHdlZXRfaWQ6IGRhdGEudHdlZXRJZCxcbiAgICAgICAgcmVsYXRlZDogZGF0YS5yZWxhdGVkLFxuICAgICAgfSxcbiAgICAgIHBvcHVwOiB7XG4gICAgICAgIHdpZHRoOiA3MDAsXG4gICAgICAgIGhlaWdodDogMjk2LFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBUd2l0dGVyIGZvbGxvdyBVUkxcbiAgdHdpdHRlckZvbGxvdyhkYXRhLCBpb3MgPSBmYWxzZSkge1xuICAgIC8vIGlmIGlPUyB1c2VyIGFuZCBpb3MgZGF0YSBhdHRyaWJ1dGUgZGVmaW5lZFxuICAgIGlmIChpb3MgJiYgZGF0YS5pb3MpIHtcbiAgICAgIGNvbnN0IGlvc0RhdGEgPSBkYXRhLnNjcmVlbk5hbWUgPyB7XG4gICAgICAgIHNjcmVlbl9uYW1lOiBkYXRhLnNjcmVlbk5hbWUsXG4gICAgICB9IDoge1xuICAgICAgICBpZDogZGF0YS51c2VySWQsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6ICd0d2l0dGVyOi8vdXNlcj8nLFxuICAgICAgICBkYXRhOiBpb3NEYXRhLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdXNlcj8nLFxuICAgICAgZGF0YToge1xuICAgICAgICBzY3JlZW5fbmFtZTogZGF0YS5zY3JlZW5OYW1lLFxuICAgICAgICB1c2VyX2lkOiBkYXRhLnVzZXJJZCxcbiAgICAgIH0sXG4gICAgICBwb3B1cDoge1xuICAgICAgICB3aWR0aDogNzAwLFxuICAgICAgICBoZWlnaHQ6IDI5NixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyBzZXQgRmFjZWJvb2sgc2hhcmUgVVJMXG4gIGZhY2Vib29rKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9mZWVkP2FwcF9pZD05NjEzNDI1NDM5MjIzMjImcmVkaXJlY3RfdXJpPWh0dHA6Ly9mYWNlYm9vay5jb20mJyxcbiAgICAgIGRhdGEsXG4gICAgICBwb3B1cDoge1xuICAgICAgICB3aWR0aDogNTYwLFxuICAgICAgICBoZWlnaHQ6IDU5MyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAgIC8vIHNldCBGYWNlYm9vayBzZW5kIFVSTFxuICBmYWNlYm9va1NlbmQoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGlhbG9nL3NlbmQ/YXBwX2lkPTk2MTM0MjU0MzkyMjMyMiZyZWRpcmVjdF91cmk9aHR0cDovL2ZhY2Vib29rLmNvbSYnLFxuICAgICAgZGF0YSxcbiAgICAgIHBvcHVwOiB7XG4gICAgICAgIHdpZHRoOiA5ODAsXG4gICAgICAgIGhlaWdodDogNTk2LFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBZb3VUdWJlIHBsYXkgVVJMXG4gIHlvdXR1YmUoZGF0YSwgaW9zID0gZmFsc2UpIHtcbiAgICAvLyBpZiBpT1MgdXNlclxuICAgIGlmIChpb3MgJiYgZGF0YS5pb3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogYHlvdXR1YmU6JHtkYXRhLnZpZGVvfT9gLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke2RhdGEudmlkZW99P2AsXG4gICAgICBwb3B1cDoge1xuICAgICAgICB3aWR0aDogMTA4NixcbiAgICAgICAgaGVpZ2h0OiA2MDgsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IFlvdVR1YmUgc3ViY3JpYmUgVVJMXG4gIHlvdXR1YmVTdWJzY3JpYmUoZGF0YSwgaW9zID0gZmFsc2UpIHtcbiAgICAvLyBpZiBpT1MgdXNlclxuICAgIGlmIChpb3MgJiYgZGF0YS5pb3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogYHlvdXR1YmU6Ly93d3cueW91dHViZS5jb20vdXNlci8ke2RhdGEudXNlcn0/YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIvJHtkYXRhLnVzZXJ9P2AsXG4gICAgICBwb3B1cDoge1xuICAgICAgICB3aWR0aDogODgwLFxuICAgICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyBzZXQgSW5zdGFncmFtIGZvbGxvdyBVUkxcbiAgaW5zdGFncmFtKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1cmw6ICdpbnN0YWdyYW06Ly9jYW1lcmE/JyxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBJbnN0YWdyYW0gZm9sbG93IFVSTFxuICBpbnN0YWdyYW1Gb2xsb3coZGF0YSwgaW9zID0gZmFsc2UpIHtcbiAgICAvLyBpZiBpT1MgdXNlclxuICAgIGlmIChpb3MgJiYgZGF0YS5pb3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogJ2luc3RhZ3JhbTovL3VzZXI/JyxcbiAgICAgICAgZGF0YSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogYGh0dHA6Ly93d3cuaW5zdGFncmFtLmNvbS8ke2RhdGEudXNlcm5hbWV9P2AsXG4gICAgICBwb3B1cDoge1xuICAgICAgICB3aWR0aDogOTgwLFxuICAgICAgICBoZWlnaHQ6IDY1NSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyBzZXQgU25hcGNoYXQgZm9sbG93IFVSTFxuICBzbmFwY2hhdChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogYHNuYXBjaGF0Oi8vYWRkLyR7ZGF0YS51c2VybmFtZX0/YCxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBHb29nbGUgc2hhcmUgVVJMXG4gIGdvb2dsZShkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlPycsXG4gICAgICBkYXRhLFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDQ5NSxcbiAgICAgICAgaGVpZ2h0OiA4MTUsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IEdvb2dsZSBtYXBzIFVSTFxuICBnb29nbGVNYXBzKGRhdGEsIGlvcyA9IGZhbHNlKSB7XG4gICAgaWYgKGRhdGEuc2VhcmNoKSB7XG4gICAgICBkYXRhLnEgPSBkYXRhLnNlYXJjaDtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlYXJjaDtcbiAgICB9XG5cbiAgICAvLyBpZiBpT1MgdXNlciBhbmQgaW9zIGRhdGEgYXR0cmlidXRlIGRlZmluZWRcbiAgICBpZiAoaW9zICYmIGRhdGEuaW9zKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6ICdjb21nb29nbGVtYXBzOi8vPycsXG4gICAgICAgIGRhdGE6IGlvcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFpb3MgJiYgZGF0YS5pb3MpIHtcbiAgICAgIGRlbGV0ZSBkYXRhLmlvcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vPycsXG4gICAgICBkYXRhLFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IFBpbnRlcmVzdCBzaGFyZSBVUkxcbiAgcGludGVyZXN0KGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvPycsXG4gICAgICBkYXRhLFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDc0NSxcbiAgICAgICAgaGVpZ2h0OiA2MjAsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IExpbmtlZEluIHNoYXJlIFVSTFxuICBsaW5rZWRpbihkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT8nLFxuICAgICAgZGF0YSxcbiAgICAgIHBvcHVwOiB7XG4gICAgICAgIHdpZHRoOiA3ODAsXG4gICAgICAgIGhlaWdodDogNDkyLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBCdWZmZXIgc2hhcmUgVVJMXG4gIGJ1ZmZlcihkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogJ2h0dHA6Ly9idWZmZXJhcHAuY29tL2FkZD8nLFxuICAgICAgZGF0YSxcbiAgICAgIHBvcHVwOiB7XG4gICAgICAgIHdpZHRoOiA3NDUsXG4gICAgICAgIGhlaWdodDogMzQ1LFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBUdW1ibHIgc2hhcmUgVVJMXG4gIHR1bWJscihkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnR1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sPycsXG4gICAgICBkYXRhLFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDU0MCxcbiAgICAgICAgaGVpZ2h0OiA5NDAsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IFJlZGRpdCBzaGFyZSBVUkxcbiAgcmVkZGl0KGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiAnaHR0cDovL3JlZGRpdC5jb20vc3VibWl0PycsXG4gICAgICBkYXRhLFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDg2MCxcbiAgICAgICAgaGVpZ2h0OiA4ODAsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IEZsaWNrciBmb2xsb3cgVVJMXG4gIGZsaWNrcihkYXRhLCBpb3MgPSBmYWxzZSkge1xuICAgIC8vIGlmIGlPUyB1c2VyXG4gICAgaWYgKGlvcyAmJiBkYXRhLmlvcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBgZmxpY2tyOi8vcGhvdG9zLyR7ZGF0YS51c2VybmFtZX0/YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmw6IGBodHRwOi8vd3d3LmZsaWNrci5jb20vcGhvdG9zLyR7ZGF0YS51c2VybmFtZX0/YCxcbiAgICAgIHBvcHVwOiB7XG4gICAgICAgIHdpZHRoOiA2MDAsXG4gICAgICAgIGhlaWdodDogNjUwLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBXaGF0c0FwcCBzaGFyZSBVUkxcbiAgd2hhdHNhcHAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICB1cmw6ICd3aGF0c2FwcDovL3NlbmQ/JyxcbiAgICAgIGRhdGEsXG4gICAgfTtcbiAgfSxcblxuICAvLyBzZXQgc21zIHNoYXJlIFVSTFxuICBzbXMoZGF0YSwgaW9zID0gZmFsc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiBpb3MgPyAnc21zOiYnIDogJ3Ntczo/JyxcbiAgICAgIGRhdGEsXG4gICAgfTtcbiAgfSxcblxuICAvLyBzZXQgRW1haWwgc2hhcmUgVVJMXG4gIGVtYWlsKGRhdGEpIHtcbiAgICBsZXQgdXJsID0gJ21haWx0bzonO1xuXG4gICAgLy8gaWYgdG8gYWRkcmVzcyBzcGVjaWZpZWQgdGhlbiBhZGQgdG8gVVJMXG4gICAgaWYgKGRhdGEudG8gIT09IG51bGwpIHtcbiAgICAgIHVybCArPSBgJHtkYXRhLnRvfWA7XG4gICAgfVxuXG4gICAgdXJsICs9ICc/JztcblxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHN1YmplY3Q6IGRhdGEuc3ViamVjdCxcbiAgICAgICAgYm9keTogZGF0YS5ib2R5LFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNldCBHaXRodWIgZm9yayBVUkxcbiAgZ2l0aHViKGRhdGEsIGlvcyA9IGZhbHNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBsZXQgdXJsID0gZGF0YS5yZXBvID8gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke2RhdGEucmVwb31gIDogZGF0YS51cmw7XG5cbiAgICBpZiAoZGF0YS5pc3N1ZSkge1xuICAgICAgdXJsICs9IGAvaXNzdWVzL25ldz90aXRsZT0ke2RhdGEuaXNzdWV9JmJvZHk9JHtkYXRhLmJvZHl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiBgJHt1cmx9P2AsXG4gICAgICBwb3B1cDoge1xuICAgICAgICB3aWR0aDogMTAyMCxcbiAgICAgICAgaGVpZ2h0OiAzMjMsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2V0IERyaWJiYmxlIHNoYXJlIFVSTFxuICBkcmliYmJsZShkYXRhLCBpb3MgPSBmYWxzZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgY29uc3QgdXJsID0gZGF0YS5zaG90ID8gYGh0dHBzOi8vZHJpYmJibGUuY29tL3Nob3RzLyR7ZGF0YS5zaG90fT9gIDogYCR7ZGF0YS51cmx9P2A7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIHBvcHVwOiB7XG4gICAgICAgIHdpZHRoOiA0NDAsXG4gICAgICAgIGhlaWdodDogNjQwLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIGNvZGVwZW4oZGF0YSkge1xuICAgIGNvbnN0IHVybCA9IChkYXRhLnBlbiAmJiBkYXRhLnVzZXJuYW1lICYmIGRhdGEudmlldykgPyBgaHR0cHM6Ly9jb2RlcGVuLmlvLyR7ZGF0YS51c2VybmFtZX0vJHtkYXRhLnZpZXd9LyR7ZGF0YS5wZW59P2AgOiBgJHtkYXRhLnVybH0/YDtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgcG9wdXA6IHtcbiAgICAgICAgd2lkdGg6IDEyMDAsXG4gICAgICAgIGhlaWdodDogODAwLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIHBheXBhbChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgfTtcbiAgfSxcbn07XG5cbi8qKlxuICogT3BlblNoYXJlIGdlbmVyYXRlcyBhIHNpbmdsZSBzaGFyZSBsaW5rXG4gKi9cbmNsYXNzIE9wZW5TaGFyZSB7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgdHJhbnNmb3JtKSB7XG4gICAgdGhpcy5pb3MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5keW5hbWljID0gZmFsc2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAvLyBjYXBpdGFsaXplZCB0eXBlXG4gICAgdGhpcy50eXBlQ2FwcyA9IHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICB9XG5cbiAgLy8gcmV0dXJucyBmdW5jdGlvbiBuYW1lZCBhcyB0eXBlIHNldCBpbiBjb25zdHJ1Y3RvclxuICAvLyBlLmcgdHdpdHRlcigpXG4gIHNldERhdGEoZGF0YSkge1xuICAgIC8vIGlmIGlPUyB1c2VyIGFuZCBpb3MgZGF0YSBhdHRyaWJ1dGUgZGVmaW5lZFxuICAgIC8vIGJ1aWxkIGlPUyBVUkwgc2NoZW1lIGFzIHNpbmdsZSBzdHJpbmdcbiAgICBpZiAodGhpcy5pb3MpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtRGF0YSA9IHRoaXMudHJhbnNmb3JtKGRhdGEsIHRydWUpO1xuICAgICAgdGhpcy5tb2JpbGVTaGFyZVVybCA9IHRoaXMudGVtcGxhdGUodGhpcy50cmFuc2Zvcm1EYXRhLnVybCwgdGhpcy50cmFuc2Zvcm1EYXRhLmRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtRGF0YSA9IHRoaXMudHJhbnNmb3JtKGRhdGEpO1xuICAgIHRoaXMuc2hhcmVVcmwgPSB0aGlzLnRlbXBsYXRlKHRoaXMudHJhbnNmb3JtRGF0YS51cmwsIHRoaXMudHJhbnNmb3JtRGF0YS5kYXRhKTtcbiAgfVxuXG4gIC8vIG9wZW4gc2hhcmUgVVJMIGRlZmluZWQgaW4gaW5kaXZpZHVhbCBwbGF0Zm9ybSBmdW5jdGlvbnNcbiAgc2hhcmUoKSB7XG4gICAgLy8gaWYgaU9TIHNoYXJlIFVSTCBoYXMgYmVlbiBzZXQgdGhlbiB1c2UgdGltZW91dCBoYWNrXG4gICAgLy8gdGVzdCBmb3IgbmF0aXZlIGFwcCBhbmQgZmFsbCBiYWNrIHRvIHdlYlxuICAgIGlmICh0aGlzLm1vYmlsZVNoYXJlVXJsKSB7XG4gICAgICBjb25zdCBzdGFydCA9IChuZXcgRGF0ZSgpKS52YWx1ZU9mKCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbmQgPSAobmV3IERhdGUoKSkudmFsdWVPZigpO1xuXG4gICAgICAgIC8vIGlmIHRoZSB1c2VyIGlzIHN0aWxsIGhlcmUsIGZhbGwgYmFjayB0byB3ZWJcbiAgICAgICAgaWYgKGVuZCAtIHN0YXJ0ID4gMTYwMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuc2hhcmVVcmw7XG4gICAgICB9LCAxNTAwKTtcblxuICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5tb2JpbGVTaGFyZVVybDtcblxuICAgICAgLy8gb3BlbiBtYWlsdG8gbGlua3MgaW4gc2FtZSB3aW5kb3dcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5zaGFyZVVybDtcblxuICAgICAgLy8gb3BlbiBzb2NpYWwgc2hhcmUgVVJMcyBpbiBuZXcgd2luZG93XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHBvcHVwIG9iamVjdCBwcmVzZW50IHRoZW4gc2V0IHdpbmRvdyBkaW1lbnNpb25zIC8gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLnBvcHVwICYmIHRoaXMudHJhbnNmb3JtRGF0YS5wb3B1cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuV2luZG93KHRoaXMuc2hhcmVVcmwsIHRoaXMudHJhbnNmb3JtRGF0YS5wb3B1cCk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMuc2hhcmVVcmwpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNyZWF0ZSBzaGFyZSBVUkwgd2l0aCBHRVQgcGFyYW1zXG4gIC8vIGFwcGVuZGluZyB2YWxpZCBwcm9wZXJ0aWVzIHRvIHF1ZXJ5IHN0cmluZ1xuICB0ZW1wbGF0ZSh1cmwsIGRhdGEpIHsvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zdCBub25VUkxQcm9wcyA9IFtcbiAgICAgICdhcHBlbmRUbycsXG4gICAgICAnaW5uZXJIVE1MJyxcbiAgICAgICdjbGFzc2VzJyxcbiAgICBdO1xuXG4gICAgbGV0IHNoYXJlVXJsID0gdXJsLFxuICAgICAgaTtcblxuICAgIGZvciAoaSBpbiBkYXRhKSB7XG4gICAgICAvLyBvbmx5IGFwcGVuZCB2YWxpZCBwcm9wZXJ0aWVzXG4gICAgICBpZiAoIWRhdGFbaV0gfHwgbm9uVVJMUHJvcHMuaW5kZXhPZihpKSA+IC0xKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIH1cblxuICAgICAgLy8gYXBwZW5kIFVSTCBlbmNvZGVkIEdFVCBwYXJhbSB0byBzaGFyZSBVUkxcbiAgICAgIGRhdGFbaV0gPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtpXSk7XG4gICAgICBzaGFyZVVybCArPSBgJHtpfT0ke2RhdGFbaV19JmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYXJlVXJsLnN1YnN0cigwLCBzaGFyZVVybC5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIC8vIGNlbnRlciBwb3B1cCB3aW5kb3cgc3VwcG9ydGluZyBkdWFsIHNjcmVlbnNcbiAgb3BlbldpbmRvdyh1cmwsIG9wdGlvbnMpIHsvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zdCBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHNjcmVlbi5sZWZ0LFxuICAgICAgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wLFxuICAgICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogc2NyZWVuLndpZHRoLC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBzY3JlZW4uaGVpZ2h0LC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgbGVmdCA9ICgod2lkdGggLyAyKSAtIChvcHRpb25zLndpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQsXG4gICAgICB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKG9wdGlvbnMuaGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcCxcbiAgICAgIG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ09wZW5TaGFyZScsIGB3aWR0aD0ke29wdGlvbnMud2lkdGh9LCBoZWlnaHQ9JHtvcHRpb25zLmhlaWdodH0sIHRvcD0ke3RvcH0sIGxlZnQ9JHtsZWZ0fWApO1xuXG4gICAgLy8gUHV0cyBmb2N1cyBvbiB0aGUgbmV3V2luZG93XG4gICAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgICAgbmV3V2luZG93LmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhdGEob3NJbnN0YW5jZSwgb3NFbGVtZW50KSB7XG4gIG9zSW5zdGFuY2Uuc2V0RGF0YSh7XG4gICAgdXJsOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtdXJsJyksXG4gICAgdGV4dDogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXRleHQnKSxcbiAgICB2aWE6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS12aWEnKSxcbiAgICBoYXNodGFnczogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWhhc2h0YWdzJyksXG4gICAgdHdlZXRJZDogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXR3ZWV0LWlkJyksXG4gICAgcmVsYXRlZDogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXJlbGF0ZWQnKSxcbiAgICBzY3JlZW5OYW1lOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtc2NyZWVuLW5hbWUnKSxcbiAgICB1c2VySWQ6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS11c2VyLWlkJyksXG4gICAgbGluazogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWxpbmsnKSxcbiAgICBwaWN0dXJlOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtcGljdHVyZScpLFxuICAgIGNhcHRpb246IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jYXB0aW9uJyksXG4gICAgZGVzY3JpcHRpb246IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1kZXNjcmlwdGlvbicpLFxuICAgIHVzZXI6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS11c2VyJyksXG4gICAgdmlkZW86IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS12aWRlbycpLFxuICAgIHVzZXJuYW1lOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtdXNlcm5hbWUnKSxcbiAgICB0aXRsZTogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXRpdGxlJyksXG4gICAgbWVkaWE6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1tZWRpYScpLFxuICAgIHRvOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtdG8nKSxcbiAgICBzdWJqZWN0OiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtc3ViamVjdCcpLFxuICAgIGJvZHk6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1ib2R5JyksXG4gICAgaW9zOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtaW9zJyksXG4gICAgdHlwZTogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXR5cGUnKSxcbiAgICBjZW50ZXI6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jZW50ZXInKSxcbiAgICB2aWV3czogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXZpZXdzJyksXG4gICAgem9vbTogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXpvb20nKSxcbiAgICBzZWFyY2g6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1zZWFyY2gnKSxcbiAgICBzYWRkcjogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXNhZGRyJyksXG4gICAgZGFkZHI6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1kYWRkcicpLFxuICAgIGRpcmVjdGlvbnNtb2RlOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtZGlyZWN0aW9ucy1tb2RlJyksXG4gICAgcmVwbzogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXJlcG8nKSxcbiAgICBzaG90OiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtc2hvdCcpLFxuICAgIHBlbjogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXBlbicpLFxuICAgIHZpZXc6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS12aWV3JyksXG4gICAgaXNzdWU6IG9zRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1pc3N1ZScpLFxuICAgIGJ1dHRvbklkOiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtYnV0dG9uSWQnKSxcbiAgICBwb3BVcDogb3NFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLXBvcHVwJyksXG4gICAga2V5OiBvc0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUta2V5JyksXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaGFyZShlLCBvcywgb3BlblNoYXJlKSB7XG4gIC8vIGlmIGR5bmFtaWMgaW5zdGFuY2UgdGhlbiBmZXRjaCBhdHRyaWJ1dGVzIGFnYWluIGluIGNhc2Ugb2YgdXBkYXRlc1xuICBpZiAob3BlblNoYXJlLmR5bmFtaWMpIHtcbiAgICBzZXREYXRhKG9wZW5TaGFyZSwgb3MpO1xuICB9XG5cbiAgb3BlblNoYXJlLnNoYXJlKGUpO1xuXG4gIC8vIHRyaWdnZXIgc2hhcmVkIGV2ZW50XG4gIEV2ZW50cy50cmlnZ2VyKG9zLCAnc2hhcmVkJyk7XG59XG5cbi8vIHR5cGUgY29udGFpbnMgYSBkYXNoXG4vLyB0cmFuc2Zvcm0gdG8gY2FtZWxjYXNlIGZvciBmdW5jdGlvbiByZWZlcmVuY2Vcbi8vIFRPRE86IG9ubHkgc3VwcG9ydHMgc2luZ2xlIGRhc2gsIHNob3VsZCBzaG91bGQgc3VwcG9ydCBtdWx0aXBsZVxudmFyIGRhc2hUb0NhbWVsID0gKGRhc2gsIHR5cGUpID0+IHtcbiAgY29uc3QgbmV4dENoYXIgPSB0eXBlLnN1YnN0cihkYXNoICsgMSwgMSk7XG4gIGNvbnN0IGdyb3VwID0gdHlwZS5zdWJzdHIoZGFzaCwgMik7XG5cbiAgdHlwZSA9IHR5cGUucmVwbGFjZShncm91cCwgbmV4dENoYXIudG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiB0eXBlO1xufTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNoYXJlTm9kZShvcykge1xuICAvLyBpbml0aWFsaXplIG9wZW4gc2hhcmUgb2JqZWN0IHdpdGggdHlwZSBhdHRyaWJ1dGVcbiAgbGV0IHR5cGUgPSBvcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZScpO1xuICBjb25zdCBkYXNoID0gdHlwZS5pbmRleE9mKCctJyk7XG5cbiAgaWYgKGRhc2ggPiAtMSkge1xuICAgIHR5cGUgPSBkYXNoVG9DYW1lbChkYXNoLCB0eXBlKTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IFNoYXJlVHJhbnNmb3Jtc1t0eXBlXTtcblxuICBpZiAoIXRyYW5zZm9ybSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgT3BlbiBTaGFyZTogJHt0eXBlfSBpcyBhbiBpbnZhbGlkIHR5cGVgKTtcbiAgfVxuXG4gIGNvbnN0IG9wZW5TaGFyZSA9IG5ldyBPcGVuU2hhcmUodHlwZSwgdHJhbnNmb3JtKTtcblxuICAvLyBzcGVjaWZ5IGlmIHRoaXMgaXMgYSBkeW5hbWljIGluc3RhbmNlXG4gIGlmIChvcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1keW5hbWljJykpIHtcbiAgICBvcGVuU2hhcmUuZHluYW1pYyA9IHRydWU7XG4gIH1cblxuICAvLyBzcGVjaWZ5IGlmIHRoaXMgaXMgYSBwb3B1cCBpbnN0YW5jZVxuICBpZiAob3MuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtcG9wdXAnKSkge1xuICAgIG9wZW5TaGFyZS5wb3B1cCA9IHRydWU7XG4gIH1cblxuICAvLyBzZXQgYWxsIG9wdGlvbmFsIGF0dHJpYnV0ZXMgb24gb3BlbiBzaGFyZSBpbnN0YW5jZVxuICBzZXREYXRhKG9wZW5TaGFyZSwgb3MpO1xuXG4gIC8vIG9wZW4gc2hhcmUgZGlhbG9nIG9uIGNsaWNrXG4gIG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzaGFyZShlLCBvcywgb3BlblNoYXJlKTtcbiAgfSk7XG5cbiAgb3MuYWRkRXZlbnRMaXN0ZW5lcignT3BlblNoYXJlLnRyaWdnZXInLCAoZSkgPT4ge1xuICAgIHNoYXJlKGUsIG9zLCBvcGVuU2hhcmUpO1xuICB9KTtcblxuICBvcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1ub2RlJywgdHlwZSk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kKHgsIHByZWNpc2lvbikge1xuICBpZiAodHlwZW9mIHggIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdmFsdWUgdG8gYmUgYSBudW1iZXInKTtcbiAgfVxuXG4gIGNvbnN0IGV4cG9uZW50ID0gcHJlY2lzaW9uID4gMCA/ICdlJyA6ICdlLSc7XG4gIGNvbnN0IGV4cG9uZW50TmVnID0gcHJlY2lzaW9uID4gMCA/ICdlLScgOiAnZSc7XG4gIHByZWNpc2lvbiA9IE1hdGguYWJzKHByZWNpc2lvbik7XG5cbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHggKyBleHBvbmVudCArIHByZWNpc2lvbikgKyBleHBvbmVudE5lZyArIHByZWNpc2lvbik7XG59XG5cbmZ1bmN0aW9uIHRob3VzYW5kaWZ5KG51bSkge1xuICByZXR1cm4gYCR7cm91bmQobnVtIC8gMTAwMCwgMSl9S2A7XG59XG5cbmZ1bmN0aW9uIG1pbGxpb25pZnkobnVtKSB7XG4gIHJldHVybiBgJHtyb3VuZChudW0gLyAxMDAwMDAwLCAxKX1NYDtcbn1cblxuZnVuY3Rpb24gY291bnRSZWR1Y2UoZWwsIGNvdW50LCBjYikge1xuICBpZiAoY291bnQgPiA5OTk5OTkpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBtaWxsaW9uaWZ5KGNvdW50KTtcbiAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihlbCk7XG4gIH0gZWxzZSBpZiAoY291bnQgPiA5OTkpIHtcbiAgICBlbC5pbm5lckhUTUwgPSB0aG91c2FuZGlmeShjb3VudCk7XG4gICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IoZWwpO1xuICB9IGVsc2Uge1xuICAgIGVsLmlubmVySFRNTCA9IGNvdW50O1xuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKGVsKTtcbiAgfVxufVxuXG4vKlxuICAgU29tZXRpbWVzIHNvY2lhbCBwbGF0Zm9ybXMgZ2V0IGNvbmZ1c2VkIGFuZCBkcm9wIHNoYXJlIGNvdW50cy5cbiAgIEluIHRoaXMgbW9kdWxlIHdlIGNoZWNrIGlmIHRoZSByZXR1cm5lZCBjb3VudCBpcyBsZXNzIHRoYW4gdGhlIGNvdW50IGluXG4gICBsb2NhbHN0b3JhZ2UuXG4gICBJZiB0aGUgbG9jYWwgY291bnQgaXMgZ3JlYXRlciB0aGFuIHRoZSByZXR1cm5lZCBjb3VudCxcbiAgIHdlIHN0b3JlIHRoZSBsb2NhbCBjb3VudCArIHRoZSByZXR1cm5lZCBjb3VudC5cbiAgIE90aGVyd2lzZSwgc3RvcmUgdGhlIHJldHVybmVkIGNvdW50LlxuKi9cblxudmFyIHN0b3JlQ291bnQgPSAodCwgY291bnQpID0+IHtcbiAgY29uc3QgaXNBcnIgPSB0LnR5cGUuaW5kZXhPZignLCcpID4gLTE7XG4gIGNvbnN0IGxvY2FsID0gTnVtYmVyKHQuc3RvcmVHZXQoYCR7dC50eXBlfS0ke3Quc2hhcmVkfWApKTtcblxuICBpZiAobG9jYWwgPiBjb3VudCAmJiAhaXNBcnIpIHtcbiAgICBjb25zdCBsYXRlc3RDb3VudCA9IE51bWJlcih0LnN0b3JlR2V0KGAke3QudHlwZX0tJHt0LnNoYXJlZH0tbGF0ZXN0Q291bnRgKSk7XG4gICAgdC5zdG9yZVNldChgJHt0LnR5cGV9LSR7dC5zaGFyZWR9LWxhdGVzdENvdW50YCwgY291bnQpO1xuXG4gICAgY291bnQgPSBpc051bWVyaWMobGF0ZXN0Q291bnQpICYmIGxhdGVzdENvdW50ID4gMCA/XG4gICAgICBjb3VudCArPSBsb2NhbCAtIGxhdGVzdENvdW50IDpcbiAgICAgIGNvdW50ICs9IGxvY2FsO1xuICB9XG5cbiAgaWYgKCFpc0FycikgdC5zdG9yZVNldChgJHt0LnR5cGV9LSR7dC5zaGFyZWR9YCwgY291bnQpO1xuICByZXR1cm4gY291bnQ7XG59O1xuXG5mdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuXG4vKipcbiAqIE9iamVjdCBvZiB0cmFuc2Zvcm0gZnVuY3Rpb25zIGZvciBlYWNoIG9wZW5zaGFyZSBhcGlcbiAqIFRyYW5zZm9ybSBmdW5jdGlvbnMgcGFzc2VkIGludG8gT3BlblNoYXJlIGluc3RhbmNlIHdoZW4gaW5zdGFudGlhdGVkXG4gKiBSZXR1cm4gb2JqZWN0IGNvbnRhaW5pbmcgVVJMIGFuZCBrZXkvdmFsdWUgYXJnc1xuICovXG52YXIgQ291bnRUcmFuc2Zvcm1zID0ge1xuXG4gIC8vIGZhY2Vib29rIGNvdW50IGRhdGFcbiAgZmFjZWJvb2sodXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vP2lkPSR7dXJsfWAsXG4gICAgICB0cmFuc2Zvcm0oeGhyKSB7XG4gICAgICAgIGNvbnN0IGZiID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IChmYi5zaGFyZSAmJiBmYi5zaGFyZS5zaGFyZV9jb3VudCkgfHwgMDtcblxuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbi8vIHBpbnRlcmVzdCBjb3VudCBkYXRhXG4gIHBpbnRlcmVzdCh1cmwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2pzb25wJyxcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLnBpbnRlcmVzdC5jb20vdjEvdXJscy9jb3VudC5qc29uP2NhbGxiYWNrPT8mdXJsPSR7dXJsfWAsXG4gICAgICB0cmFuc2Zvcm0oZGF0YSkge1xuICAgICAgICBjb25zdCBjb3VudCA9IGRhdGEuY291bnQgfHwgMDtcbiAgICAgICAgcmV0dXJuIHN0b3JlQ291bnQodGhpcywgY291bnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIGxpbmtlZGluIGNvdW50IGRhdGFcbiAgbGlua2VkaW4odXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdqc29ucCcsXG4gICAgICB1cmw6IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vY291bnRzZXJ2L2NvdW50L3NoYXJlP3VybD0ke3VybH0mZm9ybWF0PWpzb25wJmNhbGxiYWNrPT9gLFxuICAgICAgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBkYXRhLmNvdW50IHx8IDA7XG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIGNvdW50KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyByZWRkaXQgY291bnQgZGF0YVxuICByZWRkaXQodXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9hcGkvaW5mby5qc29uP3VybD0ke3VybH1gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCByZWRkaXQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICBjb25zdCBwb3N0cyA9IChyZWRkaXQuZGF0YSAmJiByZWRkaXQuZGF0YS5jaGlsZHJlbikgfHwgbnVsbDtcbiAgICAgICAgbGV0IHVwcyA9IDA7XG5cbiAgICAgICAgaWYgKHBvc3RzKSB7XG4gICAgICAgICAgcG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgdXBzICs9IE51bWJlcihwb3N0LmRhdGEudXBzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIHVwcyk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbi8vIGdvb2dsZSBjb3VudCBkYXRhXG4gIGdvb2dsZSh1cmwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBtZXRob2Q6ICdwb3MucGx1c29uZXMuZ2V0JyxcbiAgICAgICAgaWQ6ICdwJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbm9sb2c6IHRydWUsXG4gICAgICAgICAgaWQ6IHVybCxcbiAgICAgICAgICBzb3VyY2U6ICd3aWRnZXQnLFxuICAgICAgICAgIHVzZXJJZDogJ0B2aWV3ZXInLFxuICAgICAgICAgIGdyb3VwSWQ6ICdAc2VsZicsXG4gICAgICAgIH0sXG4gICAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgICBrZXk6ICdwJyxcbiAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgIH0sXG4gICAgICB1cmw6ICdodHRwczovL2NsaWVudHM2Lmdvb2dsZS5jb20vcnBjJyxcbiAgICAgIHRyYW5zZm9ybSh4aHIpIHtcbiAgICAgICAgY29uc3QgZ29vZ2xlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgY29uc3QgY291bnQgPSAoZ29vZ2xlLnJlc3VsdFxuICAgICAgICAgICYmIGdvb2dsZS5yZXN1bHQubWV0YWRhdGFcbiAgICAgICAgICAmJiBnb29nbGUucmVzdWx0Lm1ldGFkYXRhLmdsb2JhbENvdW50c1xuICAgICAgICAgICYmIGdvb2dsZS5yZXN1bHQubWV0YWRhdGEuZ2xvYmFsQ291bnRzLmNvdW50KSB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2l0aHViIHN0YXIgY291bnRcbiAgZ2l0aHViU3RhcnMocmVwbykge1xuICAgIHJlcG8gPSByZXBvLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMSA/XG4gICAgcmVwby5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXSA6XG4gICAgcmVwbztcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb31gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkuc3RhcmdhemVyc19jb3VudCB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2l0aHViIGZvcmtzIGNvdW50XG4gIGdpdGh1YkZvcmtzKHJlcG8pIHtcbiAgICByZXBvID0gcmVwby5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTEgP1xuICAgIHJlcG8uc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV0gOlxuICAgIHJlcG87XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3JlcG99YCxcbiAgICAgIHRyYW5zZm9ybSh4aHIpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLmZvcmtzX2NvdW50IHx8IDA7XG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIGNvdW50KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyBnaXRodWIgd2F0Y2hlcnMgY291bnRcbiAgZ2l0aHViV2F0Y2hlcnMocmVwbykge1xuICAgIHJlcG8gPSByZXBvLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMSA/XG4gICAgcmVwby5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXSA6XG4gICAgcmVwbztcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb31gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkud2F0Y2hlcnNfY291bnQgfHwgMDtcbiAgICAgICAgcmV0dXJuIHN0b3JlQ291bnQodGhpcywgY291bnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIGRyaWJiYmxlIGxpa2VzIGNvdW50XG4gIGRyaWJiYmxlKHNob3QpIHtcbiAgICBzaG90ID0gc2hvdC5pbmRleE9mKCdkcmliYmJsZS5jb20vc2hvdHMnKSA+IC0xID9cbiAgICBzaG90LnNwbGl0KCdzaG90cy8nKVsxXSA6XG4gICAgc2hvdDtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZHJpYmJibGUuY29tL3YxL3Nob3RzLyR7c2hvdH0vbGlrZXNgO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHVybCxcbiAgICAgIHRyYW5zZm9ybSh4aHIsIEV2ZW50cykge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkubGVuZ3RoO1xuXG4gICAgICAgIC8vIGF0IHRoaXMgdGltZSBkcmliYmJsZSBsaW1pdHMgYSByZXNwb25zZSBvZiAxMiBsaWtlcyBwZXIgcGFnZVxuICAgICAgICBpZiAoY291bnQgPT09IDEyKSB7XG4gICAgICAgICAgY29uc3QgcGFnZSA9IDI7XG4gICAgICAgICAgcmVjdXJzaXZlQ291bnQodXJsLCBwYWdlLCBjb3VudCwgKGZpbmFsQ291bnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBmaW5hbENvdW50LCB0aGlzLmNiKTtcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBmaW5hbENvdW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICB0d2l0dGVyKHVybCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLm9wZW5zaGFyZS5zb2NpYWwvam9iP3VybD0ke3VybH0ma2V5PWAsXG4gICAgICB0cmFuc2Zvcm0oeGhyKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5jb3VudCB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5mdW5jdGlvbiByZWN1cnNpdmVDb3VudCh1cmwsIHBhZ2UsIGNvdW50LCBjYikge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIGAke3VybH0/cGFnZT0ke3BhZ2V9YCk7XG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkgeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zdCBsaWtlcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XG4gICAgY291bnQgKz0gbGlrZXMubGVuZ3RoO1xuXG4gICAgLy8gZHJpYmJibGUgbGlrZSBwZXIgcGFnZSBpcyAxMlxuICAgIGlmIChsaWtlcy5sZW5ndGggPT09IDEyKSB7XG4gICAgICBwYWdlKys7XG4gICAgICByZWN1cnNpdmVDb3VudCh1cmwsIHBhZ2UsIGNvdW50LCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKGNvdW50KTtcbiAgICB9XG4gIH0pO1xuICB4aHIuc2VuZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHNoYXJlIGNvdW50IGluc3RhbmNlIGZyb20gb25lIHRvIG1hbnkgbmV0d29ya3NcbiAqL1xuXG4vLyBmdW5jdGlvbiBpc051bWVyaWMobikge1xuLy8gICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuLy8gfVxuXG5jbGFzcyBDb3VudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHVybCkge1xuICAgIC8vIHRocm93IGVycm9yIGlmIG5vIHVybCBwcm92aWRlZFxuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gU2hhcmU6IG5vIHVybCBwcm92aWRlZCBmb3IgY291bnQnKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3IgR2l0aHViIGNvdW50c1xuICAgIGlmICh0eXBlLmluZGV4T2YoJ2dpdGh1YicpID09PSAwKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ2dpdGh1Yi1zdGFycycpIHtcbiAgICAgICAgdHlwZSA9ICdnaXRodWJTdGFycyc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdnaXRodWItZm9ya3MnKSB7XG4gICAgICAgIHR5cGUgPSAnZ2l0aHViRm9ya3MnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZ2l0aHViLXdhdGNoZXJzJykge1xuICAgICAgICB0eXBlID0gJ2dpdGh1YldhdGNoZXJzJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgR2l0aHViIGNvdW50IHR5cGUuIFRyeSBnaXRodWItc3RhcnMsIGdpdGh1Yi1mb3Jrcywgb3IgZ2l0aHViLXdhdGNoZXJzLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHR5cGUgaXMgY29tbWEgc2VwYXJhdGUgbGlzdCBjcmVhdGUgYXJyYXlcbiAgICBpZiAodHlwZS5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMudHlwZUFyciA9IHRoaXMudHlwZS5zcGxpdCgnLCcpO1xuICAgICAgdGhpcy5jb3VudERhdGEgPSBbXTtcblxuICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlIHN1cHBsaWVkIGlzIHZhbGlkXG4gICAgICB0aGlzLnR5cGVBcnIuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAoIUNvdW50VHJhbnNmb3Jtc1t0XSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlbiBTaGFyZTogJHt0eXBlfSBpcyBhbiBpbnZhbGlkIGNvdW50IHR5cGVgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY291bnREYXRhLnB1c2goQ291bnRUcmFuc2Zvcm1zW3RdKHVybCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCk7XG5cbiAgICAgIGlmIChjb3VudCkge1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciBpZiBpbnZhbGlkIHR5cGUgcHJvdmlkZWRcbiAgICB9IGVsc2UgaWYgKCFDb3VudFRyYW5zZm9ybXNbdHlwZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlbiBTaGFyZTogJHt0eXBlfSBpcyBhbiBpbnZhbGlkIGNvdW50IHR5cGVgKTtcblxuICAgICAgICAvLyBzaW5nbGUgY291bnRcbiAgICAgICAgLy8gc3RvcmUgY291bnQgVVJMIGFuZCB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuY291bnREYXRhID0gQ291bnRUcmFuc2Zvcm1zW3R5cGVdKHVybCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaGFuZGxlIGNhbGxpbmcgZ2V0Q291bnQgLyBnZXRDb3VudHNcbiAgLy8gZGVwZW5kaW5nIG9uIG51bWJlciBvZiB0eXBlc1xuICBjb3VudChvcywgY2IsIGFwcGVuZFRvKSB7XG4gICAgdGhpcy5vcyA9IG9zO1xuICAgIHRoaXMuYXBwZW5kVG8gPSBhcHBlbmRUbztcbiAgICB0aGlzLmNiID0gY2I7XG4gICAgdGhpcy51cmwgPSB0aGlzLm9zLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50Jyk7XG4gICAgdGhpcy5zaGFyZWQgPSB0aGlzLm9zLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50LXVybCcpO1xuICAgIHRoaXMua2V5ID0gdGhpcy5vcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1rZXknKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmNvdW50RGF0YSkpIHtcbiAgICAgIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRDb3VudHMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBmZXRjaCBjb3VudCBlaXRoZXIgQUpBWCBvciBKU09OUFxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RvcmVHZXQoYCR7dGhpcy50eXBlfS0ke3RoaXMuc2hhcmVkfWApO1xuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgfVxuICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQpO1xuICAgIH1cbiAgICB0aGlzW3RoaXMuY291bnREYXRhLnR5cGVdKHRoaXMuY291bnREYXRhKTtcbiAgfVxuXG4gIC8vIGZldGNoIG11bHRpcGxlIGNvdW50cyBhbmQgYWdncmVnYXRlXG4gIGdldENvdW50cygpIHtcbiAgICB0aGlzLnRvdGFsID0gW107XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RvcmVHZXQoYCR7dGhpcy50eXBlfS0ke3RoaXMuc2hhcmVkfWApO1xuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgfVxuICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQpO1xuICAgIH1cblxuICAgIHRoaXMuY291bnREYXRhLmZvckVhY2goKGNvdW50RGF0YSkgPT4ge1xuICAgICAgdGhpc1tjb3VudERhdGEudHlwZV0oY291bnREYXRhLCAobnVtKSA9PiB7XG4gICAgICAgIHRoaXMudG90YWwucHVzaChudW0pO1xuXG4gICAgICAgIC8vIHRvdGFsIGNvdW50cyBsZW5ndGggbm93IGVxdWFscyB0eXBlIGFycmF5IGxlbmd0aFxuICAgICAgICAvLyBzbyBhZ2dyZWdhdGUsIHN0b3JlIGFuZCBpbnNlcnQgaW50byBET01cbiAgICAgICAgaWYgKHRoaXMudG90YWwubGVuZ3RoID09PSB0aGlzLnR5cGVBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IHRvdCA9IDA7XG5cbiAgICAgICAgICB0aGlzLnRvdGFsLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIHRvdCArPSB0O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdHlwZW9mIHRoaXMuYXBwZW5kVG8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbG9jYWwgPSBOdW1iZXIodGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCkpO1xuICAgICAgICAgIGlmIChsb2NhbCA+IHRvdCkge1xuICAgICAgICAgICAgLy8gY29uc3QgbGF0ZXN0Q291bnQgPSBOdW1iZXIodGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9LWxhdGVzdENvdW50YCkpO1xuICAgICAgICAgICAgLy8gdGhpcy5zdG9yZVNldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9LWxhdGVzdENvdW50YCwgdG90KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0b3QgPSBpc051bWVyaWMobGF0ZXN0Q291bnQpICYmIGxhdGVzdENvdW50ID4gMCA/XG4gICAgICAgICAgICAvLyB0b3QgKz0gbG9jYWwgLSBsYXRlc3RDb3VudCA6XG4gICAgICAgICAgICAvLyB0b3QgKz0gbG9jYWw7XG4gICAgICAgICAgICB0b3QgPSBsb2NhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdG9yZVNldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCwgdG90KTtcblxuICAgICAgICAgIGNvdW50UmVkdWNlKHRoaXMub3MsIHRvdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdHlwZW9mIHRoaXMuYXBwZW5kVG8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gaGFuZGxlIEpTT05QIHJlcXVlc3RzXG4gIGpzb25wKGNvdW50RGF0YSwgY2IpIHtcbiAgLy8gZGVmaW5lIHJhbmRvbSBjYWxsYmFjayBhbmQgYXNzaWduIHRyYW5zZm9ybSBmdW5jdGlvblxuICAgIGNvbnN0IGNhbGxiYWNrID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnJlcGxhY2UoL1teYS16QS1aXS9nLCAnJyk7XG4gICAgd2luZG93W2NhbGxiYWNrXSA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb3VudCA9IGNvdW50RGF0YS50cmFuc2Zvcm0uYXBwbHkodGhpcywgW2RhdGFdKSB8fCAwO1xuXG4gICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiKGNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCwgdGhpcy5jYik7XG4gICAgICB9XG5cbiAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgfTtcblxuICAgIC8vIGFwcGVuZCBKU09OUCBzY3JpcHQgdGFnIHRvIHBhZ2VcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gY291bnREYXRhLnVybC5yZXBsYWNlKCdjYWxsYmFjaz0/JywgYGNhbGxiYWNrPSR7Y2FsbGJhY2t9YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaGFuZGxlIEFKQVggR0VUIHJlcXVlc3RcbiAgZ2V0KGNvdW50RGF0YSwgY2IpIHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIG9uIHN1Y2Nlc3MgcGFzcyByZXNwb25zZSB0byB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IGNvdW50RGF0YS50cmFuc2Zvcm0uYXBwbHkodGhpcywgW3hociwgRXZlbnRzXSkgfHwgMDtcblxuICAgICAgICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNiKGNvdW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdHlwZW9mIHRoaXMuYXBwZW5kVG8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50UmVkdWNlKHRoaXMub3MsIGNvdW50LCB0aGlzLmNiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBFdmVudHMudHJpZ2dlcih0aGlzLm9zLCBgY291bnRlZC0ke3RoaXMudXJsfWApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChjb3VudERhdGEudXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHR0cHM6Ly9hcGkub3BlbnNoYXJlLnNvY2lhbC9qb2I/JykgPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSBzaWduIHVwIGZvciBUd2l0dGVyIGNvdW50cyBhdCBodHRwczovL29wZW5zaGFyZS5zb2NpYWwvdHdpdHRlci9hdXRoJyk7XG4gICAgICAgICAgY29uc3QgY291bnQgPSAwO1xuXG4gICAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IoY291bnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQsIHRoaXMuY2IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gZ2V0IEFQSSBkYXRhIGZyb20nLCBjb3VudERhdGEudXJsLCAnLiBQbGVhc2UgdXNlIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiBPcGVuU2hhcmUuJyk7XG4gICAgICAgICAgY29uc3QgY291bnQgPSAwO1xuXG4gICAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IoY291bnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQsIHRoaXMuY2IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY291bnREYXRhLnVybCA9IGNvdW50RGF0YS51cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly9hcGkub3BlbnNoYXJlLnNvY2lhbC9qb2I/JykgJiYgdGhpcy5rZXkgP1xuICAgICAgY291bnREYXRhLnVybCArIHRoaXMua2V5IDpcbiAgICAgIGNvdW50RGF0YS51cmw7XG5cbiAgICB4aHIub3BlbignR0VUJywgY291bnREYXRhLnVybCk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxuXG4gIC8vIGhhbmRsZSBBSkFYIFBPU1QgcmVxdWVzdFxuICBwb3N0KGNvdW50RGF0YSwgY2IpIHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIG9uIHN1Y2Nlc3MgcGFzcyByZXNwb25zZSB0byB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FIHx8XG4gICAgICAgIHhoci5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvdW50ID0gY291bnREYXRhLnRyYW5zZm9ybS5hcHBseSh0aGlzLCBbeGhyXSkgfHwgMDtcblxuICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYihjb3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQsIHRoaXMuY2IpO1xuICAgICAgfVxuICAgICAgRXZlbnRzLnRyaWdnZXIodGhpcy5vcywgYGNvdW50ZWQtJHt0aGlzLnVybH1gKTtcbiAgICB9O1xuXG4gICAgeGhyLm9wZW4oJ1BPU1QnLCBjb3VudERhdGEudXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcpO1xuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGNvdW50RGF0YS5kYXRhKSk7XG4gIH1cblxuICBzdG9yZVNldCh0eXBlLCBjb3VudCA9IDApIHsvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UgfHwgIXR5cGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgT3BlblNoYXJlLSR7dHlwZX1gLCBjb3VudCk7XG4gIH1cblxuICBzdG9yZUdldCh0eXBlKSB7Ly9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlIHx8ICF0eXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBPcGVuU2hhcmUtJHt0eXBlfWApO1xuICB9XG5cbn1cblxuLyoqXG4gKiBjb3VudCBBUElcbiAqL1xuXG52YXIgY291bnRBUEkgPSAoKSA9PiB7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAvLyBnbG9iYWwgT3BlblNoYXJlIHJlZmVyZW5jaW5nIGludGVybmFsIGNsYXNzIGZvciBpbnN0YW5jZSBnZW5lcmF0aW9uXG4gIGNsYXNzIENvdW50JCQxIHtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgIHR5cGUsXG4gICAgICB1cmwsXG4gICAgICBhcHBlbmRUbyA9IGZhbHNlLFxuICAgICAgZWxlbWVudCxcbiAgICAgIGNsYXNzZXMsXG4gICAgICBrZXkgPSBudWxsLFxuICAgIH0sIGNiKSB7XG4gICAgICBjb25zdCBjb3VudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQgfHwgJ3NwYW4nKTtcblxuICAgICAgY291bnROb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWNvdW50JywgdHlwZSk7XG4gICAgICBjb3VudE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY291bnQtdXJsJywgdXJsKTtcbiAgICAgIGlmIChrZXkpIGNvdW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1rZXknLCBrZXkpO1xuXG4gICAgICBjb3VudE5vZGUuY2xhc3NMaXN0LmFkZCgnb3Blbi1zaGFyZS1jb3VudCcpO1xuXG4gICAgICBpZiAoY2xhc3NlcyAmJiBBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY3NzQ0xhc3MpID0+IHtcbiAgICAgICAgICBjb3VudE5vZGUuY2xhc3NMaXN0LmFkZChjc3NDTGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXBwZW5kVG8pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb3VudCh0eXBlLCB1cmwpLmNvdW50KGNvdW50Tm9kZSwgY2IsIGFwcGVuZFRvKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBDb3VudCh0eXBlLCB1cmwpLmNvdW50KGNvdW50Tm9kZSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDb3VudCQkMTtcbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGluaXQkMSh7XG4gICAgYXBpOiAnc2hhcmUnLFxuICAgIHNlbGVjdG9yOiAnW2RhdGEtb3Blbi1zaGFyZV06bm90KFtkYXRhLW9wZW4tc2hhcmUtbm9kZV0pJyxcbiAgICBjYjogaW5pdGlhbGl6ZVNoYXJlTm9kZSxcbiAgfSkoKTtcbn1cbnZhciBzaGFyZV9qcyA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICBpbml0KCk7XG4gIH1cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgaW5pdCgpO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuICByZXR1cm4gY291bnRBUEkoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhcmVfanM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJvdW5kKHgsIHByZWNpc2lvbikge1xuICBpZiAodHlwZW9mIHggIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdmFsdWUgdG8gYmUgYSBudW1iZXInKTtcbiAgfVxuXG4gIGNvbnN0IGV4cG9uZW50ID0gcHJlY2lzaW9uID4gMCA/ICdlJyA6ICdlLSc7XG4gIGNvbnN0IGV4cG9uZW50TmVnID0gcHJlY2lzaW9uID4gMCA/ICdlLScgOiAnZSc7XG4gIHByZWNpc2lvbiA9IE1hdGguYWJzKHByZWNpc2lvbik7XG5cbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHggKyBleHBvbmVudCArIHByZWNpc2lvbikgKyBleHBvbmVudE5lZyArIHByZWNpc2lvbik7XG59XG5cbmZ1bmN0aW9uIHRob3VzYW5kaWZ5KG51bSkge1xuICByZXR1cm4gYCR7cm91bmQobnVtIC8gMTAwMCwgMSl9S2A7XG59XG5cbmZ1bmN0aW9uIG1pbGxpb25pZnkobnVtKSB7XG4gIHJldHVybiBgJHtyb3VuZChudW0gLyAxMDAwMDAwLCAxKX1NYDtcbn1cblxuZnVuY3Rpb24gY291bnRSZWR1Y2UoZWwsIGNvdW50LCBjYikge1xuICBpZiAoY291bnQgPiA5OTk5OTkpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBtaWxsaW9uaWZ5KGNvdW50KTtcbiAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihlbCk7XG4gIH0gZWxzZSBpZiAoY291bnQgPiA5OTkpIHtcbiAgICBlbC5pbm5lckhUTUwgPSB0aG91c2FuZGlmeShjb3VudCk7XG4gICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2IoZWwpO1xuICB9IGVsc2Uge1xuICAgIGVsLmlubmVySFRNTCA9IGNvdW50O1xuICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKGVsKTtcbiAgfVxufVxuXG4vKlxuICAgU29tZXRpbWVzIHNvY2lhbCBwbGF0Zm9ybXMgZ2V0IGNvbmZ1c2VkIGFuZCBkcm9wIHNoYXJlIGNvdW50cy5cbiAgIEluIHRoaXMgbW9kdWxlIHdlIGNoZWNrIGlmIHRoZSByZXR1cm5lZCBjb3VudCBpcyBsZXNzIHRoYW4gdGhlIGNvdW50IGluXG4gICBsb2NhbHN0b3JhZ2UuXG4gICBJZiB0aGUgbG9jYWwgY291bnQgaXMgZ3JlYXRlciB0aGFuIHRoZSByZXR1cm5lZCBjb3VudCxcbiAgIHdlIHN0b3JlIHRoZSBsb2NhbCBjb3VudCArIHRoZSByZXR1cm5lZCBjb3VudC5cbiAgIE90aGVyd2lzZSwgc3RvcmUgdGhlIHJldHVybmVkIGNvdW50LlxuKi9cblxudmFyIHN0b3JlQ291bnQgPSAodCwgY291bnQpID0+IHtcbiAgY29uc3QgaXNBcnIgPSB0LnR5cGUuaW5kZXhPZignLCcpID4gLTE7XG4gIGNvbnN0IGxvY2FsID0gTnVtYmVyKHQuc3RvcmVHZXQoYCR7dC50eXBlfS0ke3Quc2hhcmVkfWApKTtcblxuICBpZiAobG9jYWwgPiBjb3VudCAmJiAhaXNBcnIpIHtcbiAgICBjb25zdCBsYXRlc3RDb3VudCA9IE51bWJlcih0LnN0b3JlR2V0KGAke3QudHlwZX0tJHt0LnNoYXJlZH0tbGF0ZXN0Q291bnRgKSk7XG4gICAgdC5zdG9yZVNldChgJHt0LnR5cGV9LSR7dC5zaGFyZWR9LWxhdGVzdENvdW50YCwgY291bnQpO1xuXG4gICAgY291bnQgPSBpc051bWVyaWMobGF0ZXN0Q291bnQpICYmIGxhdGVzdENvdW50ID4gMCA/XG4gICAgICBjb3VudCArPSBsb2NhbCAtIGxhdGVzdENvdW50IDpcbiAgICAgIGNvdW50ICs9IGxvY2FsO1xuICB9XG5cbiAgaWYgKCFpc0FycikgdC5zdG9yZVNldChgJHt0LnR5cGV9LSR7dC5zaGFyZWR9YCwgY291bnQpO1xuICByZXR1cm4gY291bnQ7XG59O1xuXG5mdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuXG52YXIgQ291bnRUcmFuc2Zvcm1zID0ge1xuXG4gIC8vIGZhY2Vib29rIGNvdW50IGRhdGFcbiAgZmFjZWJvb2sodXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vP2lkPSR7dXJsfWAsXG4gICAgICB0cmFuc2Zvcm0oeGhyKSB7XG4gICAgICAgIGNvbnN0IGZiID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IChmYi5zaGFyZSAmJiBmYi5zaGFyZS5zaGFyZV9jb3VudCkgfHwgMDtcblxuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbi8vIHBpbnRlcmVzdCBjb3VudCBkYXRhXG4gIHBpbnRlcmVzdCh1cmwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2pzb25wJyxcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLnBpbnRlcmVzdC5jb20vdjEvdXJscy9jb3VudC5qc29uP2NhbGxiYWNrPT8mdXJsPSR7dXJsfWAsXG4gICAgICB0cmFuc2Zvcm0oZGF0YSkge1xuICAgICAgICBjb25zdCBjb3VudCA9IGRhdGEuY291bnQgfHwgMDtcbiAgICAgICAgcmV0dXJuIHN0b3JlQ291bnQodGhpcywgY291bnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIGxpbmtlZGluIGNvdW50IGRhdGFcbiAgbGlua2VkaW4odXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdqc29ucCcsXG4gICAgICB1cmw6IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vY291bnRzZXJ2L2NvdW50L3NoYXJlP3VybD0ke3VybH0mZm9ybWF0PWpzb25wJmNhbGxiYWNrPT9gLFxuICAgICAgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBkYXRhLmNvdW50IHx8IDA7XG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIGNvdW50KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyByZWRkaXQgY291bnQgZGF0YVxuICByZWRkaXQodXJsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9hcGkvaW5mby5qc29uP3VybD0ke3VybH1gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCByZWRkaXQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICBjb25zdCBwb3N0cyA9IChyZWRkaXQuZGF0YSAmJiByZWRkaXQuZGF0YS5jaGlsZHJlbikgfHwgbnVsbDtcbiAgICAgICAgbGV0IHVwcyA9IDA7XG5cbiAgICAgICAgaWYgKHBvc3RzKSB7XG4gICAgICAgICAgcG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgdXBzICs9IE51bWJlcihwb3N0LmRhdGEudXBzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIHVwcyk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbi8vIGdvb2dsZSBjb3VudCBkYXRhXG4gIGdvb2dsZSh1cmwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBtZXRob2Q6ICdwb3MucGx1c29uZXMuZ2V0JyxcbiAgICAgICAgaWQ6ICdwJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbm9sb2c6IHRydWUsXG4gICAgICAgICAgaWQ6IHVybCxcbiAgICAgICAgICBzb3VyY2U6ICd3aWRnZXQnLFxuICAgICAgICAgIHVzZXJJZDogJ0B2aWV3ZXInLFxuICAgICAgICAgIGdyb3VwSWQ6ICdAc2VsZicsXG4gICAgICAgIH0sXG4gICAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgICBrZXk6ICdwJyxcbiAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgIH0sXG4gICAgICB1cmw6ICdodHRwczovL2NsaWVudHM2Lmdvb2dsZS5jb20vcnBjJyxcbiAgICAgIHRyYW5zZm9ybSh4aHIpIHtcbiAgICAgICAgY29uc3QgZ29vZ2xlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgY29uc3QgY291bnQgPSAoZ29vZ2xlLnJlc3VsdFxuICAgICAgICAgICYmIGdvb2dsZS5yZXN1bHQubWV0YWRhdGFcbiAgICAgICAgICAmJiBnb29nbGUucmVzdWx0Lm1ldGFkYXRhLmdsb2JhbENvdW50c1xuICAgICAgICAgICYmIGdvb2dsZS5yZXN1bHQubWV0YWRhdGEuZ2xvYmFsQ291bnRzLmNvdW50KSB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2l0aHViIHN0YXIgY291bnRcbiAgZ2l0aHViU3RhcnMocmVwbykge1xuICAgIHJlcG8gPSByZXBvLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMSA/XG4gICAgcmVwby5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXSA6XG4gICAgcmVwbztcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb31gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkuc3RhcmdhemVyc19jb3VudCB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgLy8gZ2l0aHViIGZvcmtzIGNvdW50XG4gIGdpdGh1YkZvcmtzKHJlcG8pIHtcbiAgICByZXBvID0gcmVwby5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTEgP1xuICAgIHJlcG8uc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV0gOlxuICAgIHJlcG87XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3JlcG99YCxcbiAgICAgIHRyYW5zZm9ybSh4aHIpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLmZvcmtzX2NvdW50IHx8IDA7XG4gICAgICAgIHJldHVybiBzdG9yZUNvdW50KHRoaXMsIGNvdW50KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICAvLyBnaXRodWIgd2F0Y2hlcnMgY291bnRcbiAgZ2l0aHViV2F0Y2hlcnMocmVwbykge1xuICAgIHJlcG8gPSByZXBvLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMSA/XG4gICAgcmVwby5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXSA6XG4gICAgcmVwbztcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2dldCcsXG4gICAgICB1cmw6IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb31gLFxuICAgICAgdHJhbnNmb3JtKHhocikge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkud2F0Y2hlcnNfY291bnQgfHwgMDtcbiAgICAgICAgcmV0dXJuIHN0b3JlQ291bnQodGhpcywgY291bnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIGRyaWJiYmxlIGxpa2VzIGNvdW50XG4gIGRyaWJiYmxlKHNob3QpIHtcbiAgICBzaG90ID0gc2hvdC5pbmRleE9mKCdkcmliYmJsZS5jb20vc2hvdHMnKSA+IC0xID9cbiAgICBzaG90LnNwbGl0KCdzaG90cy8nKVsxXSA6XG4gICAgc2hvdDtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZHJpYmJibGUuY29tL3YxL3Nob3RzLyR7c2hvdH0vbGlrZXNgO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHVybCxcbiAgICAgIHRyYW5zZm9ybSh4aHIsIEV2ZW50cykge1xuICAgICAgICBjb25zdCBjb3VudCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkubGVuZ3RoO1xuXG4gICAgICAgIC8vIGF0IHRoaXMgdGltZSBkcmliYmJsZSBsaW1pdHMgYSByZXNwb25zZSBvZiAxMiBsaWtlcyBwZXIgcGFnZVxuICAgICAgICBpZiAoY291bnQgPT09IDEyKSB7XG4gICAgICAgICAgY29uc3QgcGFnZSA9IDI7XG4gICAgICAgICAgcmVjdXJzaXZlQ291bnQodXJsLCBwYWdlLCBjb3VudCwgKGZpbmFsQ291bnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBmaW5hbENvdW50LCB0aGlzLmNiKTtcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBmaW5hbENvdW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcblxuICB0d2l0dGVyKHVybCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLm9wZW5zaGFyZS5zb2NpYWwvam9iP3VybD0ke3VybH0ma2V5PWAsXG4gICAgICB0cmFuc2Zvcm0oeGhyKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5jb3VudCB8fCAwO1xuICAgICAgICByZXR1cm4gc3RvcmVDb3VudCh0aGlzLCBjb3VudCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5mdW5jdGlvbiByZWN1cnNpdmVDb3VudCh1cmwsIHBhZ2UsIGNvdW50LCBjYikge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIGAke3VybH0/cGFnZT0ke3BhZ2V9YCk7XG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkgeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zdCBsaWtlcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XG4gICAgY291bnQgKz0gbGlrZXMubGVuZ3RoO1xuXG4gICAgLy8gZHJpYmJibGUgbGlrZSBwZXIgcGFnZSBpcyAxMlxuICAgIGlmIChsaWtlcy5sZW5ndGggPT09IDEyKSB7XG4gICAgICBwYWdlKys7XG4gICAgICByZWN1cnNpdmVDb3VudCh1cmwsIHBhZ2UsIGNvdW50LCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKGNvdW50KTtcbiAgICB9XG4gIH0pO1xuICB4aHIuc2VuZCgpO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgY3VzdG9tIE9wZW5TaGFyZSBuYW1lc3BhY2VkIGV2ZW50XG4gKi9cbnZhciBFdmVudHMgPSB7XG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2LmluaXRFdmVudChgT3BlblNoYXJlLiR7ZXZlbnR9YCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgfSxcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgc2hhcmUgY291bnQgaW5zdGFuY2UgZnJvbSBvbmUgdG8gbWFueSBuZXR3b3Jrc1xuICovXG5cbmNsYXNzIENvdW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgdXJsKSB7XG4gICAgLy8gdGhyb3cgZXJyb3IgaWYgbm8gdXJsIHByb3ZpZGVkXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBTaGFyZTogbm8gdXJsIHByb3ZpZGVkIGZvciBjb3VudCcpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBHaXRodWIgY291bnRzXG4gICAgaWYgKHR5cGUuaW5kZXhPZignZ2l0aHViJykgPT09IDApIHtcbiAgICAgIGlmICh0eXBlID09PSAnZ2l0aHViLXN0YXJzJykge1xuICAgICAgICB0eXBlID0gJ2dpdGh1YlN0YXJzJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2dpdGh1Yi1mb3JrcycpIHtcbiAgICAgICAgdHlwZSA9ICdnaXRodWJGb3Jrcyc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdnaXRodWItd2F0Y2hlcnMnKSB7XG4gICAgICAgIHR5cGUgPSAnZ2l0aHViV2F0Y2hlcnMnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBHaXRodWIgY291bnQgdHlwZS4gVHJ5IGdpdGh1Yi1zdGFycywgZ2l0aHViLWZvcmtzLCBvciBnaXRodWItd2F0Y2hlcnMuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdHlwZSBpcyBjb21tYSBzZXBhcmF0ZSBsaXN0IGNyZWF0ZSBhcnJheVxuICAgIGlmICh0eXBlLmluZGV4T2YoJywnKSA+IC0xKSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgdGhpcy50eXBlQXJyID0gdGhpcy50eXBlLnNwbGl0KCcsJyk7XG4gICAgICB0aGlzLmNvdW50RGF0YSA9IFtdO1xuXG4gICAgICAvLyBjaGVjayBlYWNoIHR5cGUgc3VwcGxpZWQgaXMgdmFsaWRcbiAgICAgIHRoaXMudHlwZUFyci5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICghQ291bnRUcmFuc2Zvcm1zW3RdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcGVuIFNoYXJlOiAke3R5cGV9IGlzIGFuIGludmFsaWQgY291bnQgdHlwZWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb3VudERhdGEucHVzaChDb3VudFRyYW5zZm9ybXNbdF0odXJsKSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY291bnQgPSB0aGlzLnN0b3JlR2V0KGAke3RoaXMudHlwZX0tJHt0aGlzLnNoYXJlZH1gKTtcblxuICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRocm93IGVycm9yIGlmIGludmFsaWQgdHlwZSBwcm92aWRlZFxuICAgIH0gZWxzZSBpZiAoIUNvdW50VHJhbnNmb3Jtc1t0eXBlXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcGVuIFNoYXJlOiAke3R5cGV9IGlzIGFuIGludmFsaWQgY291bnQgdHlwZWApO1xuXG4gICAgICAgIC8vIHNpbmdsZSBjb3VudFxuICAgICAgICAvLyBzdG9yZSBjb3VudCBVUkwgYW5kIHRyYW5zZm9ybSBmdW5jdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgdGhpcy5jb3VudERhdGEgPSBDb3VudFRyYW5zZm9ybXNbdHlwZV0odXJsKTtcbiAgICB9XG4gIH1cblxuICAvLyBoYW5kbGUgY2FsbGluZyBnZXRDb3VudCAvIGdldENvdW50c1xuICAvLyBkZXBlbmRpbmcgb24gbnVtYmVyIG9mIHR5cGVzXG4gIGNvdW50KG9zLCBjYiwgYXBwZW5kVG8pIHtcbiAgICB0aGlzLm9zID0gb3M7XG4gICAgdGhpcy5hcHBlbmRUbyA9IGFwcGVuZFRvO1xuICAgIHRoaXMuY2IgPSBjYjtcbiAgICB0aGlzLnVybCA9IHRoaXMub3MuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY291bnQnKTtcbiAgICB0aGlzLnNoYXJlZCA9IHRoaXMub3MuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY291bnQtdXJsJyk7XG4gICAgdGhpcy5rZXkgPSB0aGlzLm9zLmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWtleScpO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuY291bnREYXRhKSkge1xuICAgICAgdGhpcy5nZXRDb3VudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldENvdW50cygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZldGNoIGNvdW50IGVpdGhlciBBSkFYIG9yIEpTT05QXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCk7XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICB9XG4gICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCk7XG4gICAgfVxuICAgIHRoaXNbdGhpcy5jb3VudERhdGEudHlwZV0odGhpcy5jb3VudERhdGEpO1xuICB9XG5cbiAgLy8gZmV0Y2ggbXVsdGlwbGUgY291bnRzIGFuZCBhZ2dyZWdhdGVcbiAgZ2V0Q291bnRzKCkge1xuICAgIHRoaXMudG90YWwgPSBbXTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zdG9yZUdldChgJHt0aGlzLnR5cGV9LSR7dGhpcy5zaGFyZWR9YCk7XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICB9XG4gICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudERhdGEuZm9yRWFjaCgoY291bnREYXRhKSA9PiB7XG4gICAgICB0aGlzW2NvdW50RGF0YS50eXBlXShjb3VudERhdGEsIChudW0pID0+IHtcbiAgICAgICAgdGhpcy50b3RhbC5wdXNoKG51bSk7XG5cbiAgICAgICAgLy8gdG90YWwgY291bnRzIGxlbmd0aCBub3cgZXF1YWxzIHR5cGUgYXJyYXkgbGVuZ3RoXG4gICAgICAgIC8vIHNvIGFnZ3JlZ2F0ZSwgc3RvcmUgYW5kIGluc2VydCBpbnRvIERPTVxuICAgICAgICBpZiAodGhpcy50b3RhbC5sZW5ndGggPT09IHRoaXMudHlwZUFyci5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdG90ID0gMDtcblxuICAgICAgICAgIHRoaXMudG90YWwuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgdG90ICs9IHQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBsb2NhbCA9IE51bWJlcih0aGlzLnN0b3JlR2V0KGAke3RoaXMudHlwZX0tJHt0aGlzLnNoYXJlZH1gKSk7XG4gICAgICAgICAgaWYgKGxvY2FsID4gdG90KSB7XG4gICAgICAgICAgICAvLyBjb25zdCBsYXRlc3RDb3VudCA9IE51bWJlcih0aGlzLnN0b3JlR2V0KGAke3RoaXMudHlwZX0tJHt0aGlzLnNoYXJlZH0tbGF0ZXN0Q291bnRgKSk7XG4gICAgICAgICAgICAvLyB0aGlzLnN0b3JlU2V0KGAke3RoaXMudHlwZX0tJHt0aGlzLnNoYXJlZH0tbGF0ZXN0Q291bnRgLCB0b3QpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRvdCA9IGlzTnVtZXJpYyhsYXRlc3RDb3VudCkgJiYgbGF0ZXN0Q291bnQgPiAwID9cbiAgICAgICAgICAgIC8vIHRvdCArPSBsb2NhbCAtIGxhdGVzdENvdW50IDpcbiAgICAgICAgICAgIC8vIHRvdCArPSBsb2NhbDtcbiAgICAgICAgICAgIHRvdCA9IGxvY2FsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0b3JlU2V0KGAke3RoaXMudHlwZX0tJHt0aGlzLnNoYXJlZH1gLCB0b3QpO1xuXG4gICAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgdG90KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICB9XG4gIH1cblxuICAvLyBoYW5kbGUgSlNPTlAgcmVxdWVzdHNcbiAganNvbnAoY291bnREYXRhLCBjYikge1xuICAvLyBkZWZpbmUgcmFuZG9tIGNhbGxiYWNrIGFuZCBhc3NpZ24gdHJhbnNmb3JtIGZ1bmN0aW9uXG4gICAgY29uc3QgY2FsbGJhY2sgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykucmVwbGFjZSgvW15hLXpBLVpdL2csICcnKTtcbiAgICB3aW5kb3dbY2FsbGJhY2tdID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ID0gY291bnREYXRhLnRyYW5zZm9ybS5hcHBseSh0aGlzLCBbZGF0YV0pIHx8IDA7XG5cbiAgICAgIGlmIChjYiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2IoY291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdHlwZW9mIHRoaXMuYXBwZW5kVG8gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50UmVkdWNlKHRoaXMub3MsIGNvdW50LCB0aGlzLmNiKTtcbiAgICAgIH1cblxuICAgICAgRXZlbnRzLnRyaWdnZXIodGhpcy5vcywgYGNvdW50ZWQtJHt0aGlzLnVybH1gKTtcbiAgICB9O1xuXG4gICAgLy8gYXBwZW5kIEpTT05QIHNjcmlwdCB0YWcgdG8gcGFnZVxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSBjb3VudERhdGEudXJsLnJlcGxhY2UoJ2NhbGxiYWNrPT8nLCBgY2FsbGJhY2s9JHtjYWxsYmFja31gKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBoYW5kbGUgQUpBWCBHRVQgcmVxdWVzdFxuICBnZXQoY291bnREYXRhLCBjYikge1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gb24gc3VjY2VzcyBwYXNzIHJlc3BvbnNlIHRvIHRyYW5zZm9ybSBmdW5jdGlvblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGNvdW50ID0gY291bnREYXRhLnRyYW5zZm9ybS5hcHBseSh0aGlzLCBbeGhyLCBFdmVudHNdKSB8fCAwO1xuXG4gICAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IoY291bnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0eXBlb2YgdGhpcy5hcHBlbmRUbyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMub3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRSZWR1Y2UodGhpcy5vcywgY291bnQsIHRoaXMuY2IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMub3MsIGBjb3VudGVkLSR7dGhpcy51cmx9YCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGNvdW50RGF0YS51cmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodHRwczovL2FwaS5vcGVuc2hhcmUuc29jaWFsL2pvYj8nKSA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignUGxlYXNlIHNpZ24gdXAgZm9yIFR3aXR0ZXIgY291bnRzIGF0IGh0dHBzOi8vb3BlbnNoYXJlLnNvY2lhbC90d2l0dGVyL2F1dGgnKTtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IDA7XG5cbiAgICAgICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYihjb3VudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCwgdGhpcy5jYik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgRXZlbnRzLnRyaWdnZXIodGhpcy5vcywgYGNvdW50ZWQtJHt0aGlzLnVybH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBnZXQgQVBJIGRhdGEgZnJvbScsIGNvdW50RGF0YS51cmwsICcuIFBsZWFzZSB1c2UgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIE9wZW5TaGFyZS4nKTtcbiAgICAgICAgICBjb25zdCBjb3VudCA9IDA7XG5cbiAgICAgICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYihjb3VudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5vcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCwgdGhpcy5jYik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgRXZlbnRzLnRyaWdnZXIodGhpcy5vcywgYGNvdW50ZWQtJHt0aGlzLnVybH1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb3VudERhdGEudXJsID0gY291bnREYXRhLnVybC5zdGFydHNXaXRoKCdodHRwczovL2FwaS5vcGVuc2hhcmUuc29jaWFsL2pvYj8nKSAmJiB0aGlzLmtleSA/XG4gICAgICBjb3VudERhdGEudXJsICsgdGhpcy5rZXkgOlxuICAgICAgY291bnREYXRhLnVybDtcblxuICAgIHhoci5vcGVuKCdHRVQnLCBjb3VudERhdGEudXJsKTtcbiAgICB4aHIuc2VuZCgpO1xuICB9XG5cbiAgLy8gaGFuZGxlIEFKQVggUE9TVCByZXF1ZXN0XG4gIHBvc3QoY291bnREYXRhLCBjYikge1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gb24gc3VjY2VzcyBwYXNzIHJlc3BvbnNlIHRvIHRyYW5zZm9ybSBmdW5jdGlvblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgfHxcbiAgICAgICAgeGhyLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY291bnQgPSBjb3VudERhdGEudHJhbnNmb3JtLmFwcGx5KHRoaXMsIFt4aHJdKSB8fCAwO1xuXG4gICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiKGNvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHR5cGVvZiB0aGlzLmFwcGVuZFRvICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm9zKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudFJlZHVjZSh0aGlzLm9zLCBjb3VudCwgdGhpcy5jYik7XG4gICAgICB9XG4gICAgICBFdmVudHMudHJpZ2dlcih0aGlzLm9zLCBgY291bnRlZC0ke3RoaXMudXJsfWApO1xuICAgIH07XG5cbiAgICB4aHIub3BlbignUE9TVCcsIGNvdW50RGF0YS51cmwpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04Jyk7XG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoY291bnREYXRhLmRhdGEpKTtcbiAgfVxuXG4gIHN0b3JlU2V0KHR5cGUsIGNvdW50ID0gMCkgey8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSB8fCAhdHlwZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBPcGVuU2hhcmUtJHt0eXBlfWAsIGNvdW50KTtcbiAgfVxuXG4gIHN0b3JlR2V0KHR5cGUpIHsvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UgfHwgIXR5cGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYE9wZW5TaGFyZS0ke3R5cGV9YCk7XG4gIH1cblxufVxuXG4vKipcbiAqIGNvdW50IEFQSVxuICovXG5cbnZhciBjb3VudEFwaV9qcyA9ICgpID0+IHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gIC8vIGdsb2JhbCBPcGVuU2hhcmUgcmVmZXJlbmNpbmcgaW50ZXJuYWwgY2xhc3MgZm9yIGluc3RhbmNlIGdlbmVyYXRpb25cbiAgY2xhc3MgQ291bnQkJDEge1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgdHlwZSxcbiAgICAgIHVybCxcbiAgICAgIGFwcGVuZFRvID0gZmFsc2UsXG4gICAgICBlbGVtZW50LFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGtleSA9IG51bGwsXG4gICAgfSwgY2IpIHtcbiAgICAgIGNvbnN0IGNvdW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCB8fCAnc3BhbicpO1xuXG4gICAgICBjb3VudE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4tc2hhcmUtY291bnQnLCB0eXBlKTtcbiAgICAgIGNvdW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS1jb3VudC11cmwnLCB1cmwpO1xuICAgICAgaWYgKGtleSkgY291bnROb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWtleScsIGtleSk7XG5cbiAgICAgIGNvdW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdvcGVuLXNoYXJlLWNvdW50Jyk7XG5cbiAgICAgIGlmIChjbGFzc2VzICYmIEFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjc3NDTGFzcykgPT4ge1xuICAgICAgICAgIGNvdW50Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NMYXNzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcHBlbmRUbykge1xuICAgICAgICByZXR1cm4gbmV3IENvdW50KHR5cGUsIHVybCkuY291bnQoY291bnROb2RlLCBjYiwgYXBwZW5kVG8pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IENvdW50KHR5cGUsIHVybCkuY291bnQoY291bnROb2RlLCBjYik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIENvdW50JCQxO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3VudEFwaV9qcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT3BlblNoYXJlID0ge1xuICBzaGFyZTogcmVxdWlyZSgnLi4vc2hhcmUuanMnKSxcbiAgY291bnQ6IHJlcXVpcmUoJy4uL2NvdW50LmpzJyksXG4gIGFuYWx5dGljczogcmVxdWlyZSgnLi4vYW5hbHl0aWNzLmpzJyksXG59O1xuXG5PcGVuU2hhcmUuYW5hbHl0aWNzKCd0YWdNYW5hZ2VyJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygndGFnIG1hbmFnZXIgbG9hZGVkJyk7XG59KTtcblxuT3BlblNoYXJlLmFuYWx5dGljcygnZXZlbnQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdnb29nbGUgYW5hbHl0aWNzIGV2ZW50cyBsb2FkZWQnKTtcbn0pO1xuXG5PcGVuU2hhcmUuYW5hbHl0aWNzKCdzb2NpYWwnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdnb29nbGUgYW5hbHl0aWNzIHNvY2lhbCBsb2FkZWQnKTtcbn0pO1xuXG5jb25zdCBkeW5hbWljTm9kZURhdGEgPSB7XG4gIHVybDogJ2h0dHA6Ly93d3cuZGlnaXRhbHN1cmdlb25zLmNvbScsXG4gIHZpYTogJ2RpZ2l0YWxzdXJnZW9ucycsXG4gIHRleHQ6ICdGb3J3YXJkIE9ic2Vzc2VkJyxcbiAgaGFzaHRhZ3M6ICdmb3J3YXJkb2JzZXNzZWQnLFxuICBidXR0b246ICdPcGVuIFNoYXJlIFdhdGNoZXIhJyxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZW5TaGFyZU5vZGUoZGF0YSkge1xuICBjb25zdCBvcGVuU2hhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgb3BlblNoYXJlLmNsYXNzTGlzdC5hZGQoJ29wZW4tc2hhcmUtbGluaycsICd0d2l0dGVyJyk7XG4gIG9wZW5TaGFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZScsICd0d2l0dGVyJyk7XG4gIG9wZW5TaGFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS11cmwnLCBkYXRhLnVybCk7XG4gIG9wZW5TaGFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS12aWEnLCBkYXRhLnZpYSk7XG4gIG9wZW5TaGFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3Blbi1zaGFyZS10ZXh0JywgZGF0YS50ZXh0KTtcbiAgb3BlblNoYXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLXNoYXJlLWhhc2h0YWdzJywgZGF0YS5oYXNodGFncyk7XG4gIG9wZW5TaGFyZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9zcGFuPiR7ZGF0YS5idXR0b259YDtcblxuICBjb25zdCBub2RlID0gbmV3IE9wZW5TaGFyZS5zaGFyZSh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHR5cGU6ICd0d2l0dGVyJyxcbiAgICB1cmw6ICdodHRwOi8vd3d3LmRpZ2l0YWxzdXJnZW9ucy5jb20nLFxuICAgIHZpYTogJ2RpZ2l0YWxzdXJnZW9ucycsXG4gICAgaGFzaHRhZ3M6ICdmb3J3YXJkb2JzZXNzZWQnLFxuICAgIGFwcGVuZFRvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1zaGFyZS13YXRjaCcpLFxuICAgIGlubmVySFRNTDogJ0NyZWF0ZWQgdmlhIE9wZW5TaGFyZUFQSScsXG4gICAgZWxlbWVudDogJ2RpdicsXG4gICAgY2xhc3NlczogWyd3b3cnLCAnc3VjaCcsICdjbGFzc2VzJ10sXG4gIH0pO1xuXG4gIHJldHVybiBvcGVuU2hhcmU7XG59XG5cbmZ1bmN0aW9uIGFkZE5vZGUoKSB7XG4gIGNvbnN0IGRhdGEgPSBkeW5hbWljTm9kZURhdGE7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXNoYXJlLXdhdGNoJylcbiAgICAuYXBwZW5kQ2hpbGQoY3JlYXRlT3BlblNoYXJlTm9kZShkYXRhKSk7XG59XG5cbndpbmRvdy5hZGROb2RlID0gYWRkTm9kZTtcblxuZnVuY3Rpb24gYWRkTm9kZVdpdGhDb3VudCgpIHtcbiAgY29uc3QgZGF0YSA9IGR5bmFtaWNOb2RlRGF0YTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICBuZXcgT3BlblNoYXJlLmNvdW50KHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHR5cGU6ICdmYWNlYm9vaycsXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZGlnaXRhbHN1cmdlb25zLmNvbS8nLFxuICB9LCAobm9kZSkgPT4ge1xuICAgIGNvbnN0IG9zID0gbmV3IE9wZW5TaGFyZS5zaGFyZSh7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHR5cGU6ICd0d2l0dGVyJyxcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuZGlnaXRhbHN1cmdlb25zLmNvbScsXG4gICAgICB2aWE6ICdkaWdpdGFsc3VyZ2VvbnMnLFxuICAgICAgaGFzaHRhZ3M6ICdmb3J3YXJkb2JzZXNzZWQnLFxuICAgICAgaW5uZXJIVE1MOiAnQ3JlYXRlZCB2aWEgT3BlblNoYXJlQVBJJyxcbiAgICAgIGVsZW1lbnQ6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWyd3b3cnLCAnc3VjaCcsICdjbGFzc2VzJ10sXG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1ub2RlLnctY291bnQnKVxuICAgIC5hcHBlbmRDaGlsZChvcyk7XG4gICAgb3MuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH0pO1xufVxuXG53aW5kb3cuYWRkTm9kZVdpdGhDb3VudCA9IGFkZE5vZGVXaXRoQ291bnQ7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvdW50Tm9kZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1ub2RlLmNvdW50LW5vZGVzJyk7XG4gIGNvbnN0IHR5cGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQuY291bnQtdHlwZScpLnZhbHVlO1xuICBjb25zdCB1cmwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQuY291bnQtdXJsJykudmFsdWU7XG5cbiAgbmV3IE9wZW5TaGFyZS5jb3VudCh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHR5cGU6IHR5cGUsIC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHVybDogdXJsLCAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBhcHBlbmRUbzogY29udGFpbmVyLFxuICAgIGNsYXNzZXM6IFsndGVzdCddLFxuICB9LCAobm9kZSkgPT4ge1xuICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9KTtcblxuXG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dC5jb3VudC10eXBlJykudmFsdWUgPSAnJztcbiAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmNvdW50LXVybCcpLnZhbHVlID0gJyc7XG59XG5cbndpbmRvdy5jcmVhdGVDb3VudE5vZGUgPSBjcmVhdGVDb3VudE5vZGU7XG5cbi8vIHRlc3QgSlMgT3BlblNoYXJlIEFQSSB3aXRoIGRhc2hlc1xubmV3IE9wZW5TaGFyZS5zaGFyZSh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICB0eXBlOiAnZ29vZ2xlTWFwcycsXG4gIGNlbnRlcjogJzQwLjc2NTgxOSwtNzMuOTc1ODY2JyxcbiAgdmlldzogJ3RyYWZmaWMnLFxuICB6b29tOiAxNCxcbiAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksXG4gIGlubmVySFRNTDogJ01hcHMnLFxufSk7XG5cbm5ldyBPcGVuU2hhcmUuc2hhcmUoeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgdHlwZTogJ3R3aXR0ZXItZm9sbG93JyxcbiAgc2NyZWVuTmFtZTogJ2RpZ2l0YWxzdXJnZW9ucycsXG4gIHVzZXJJZDogJzE4MTg5MTMwJyxcbiAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksXG4gIGlubmVySFRNTDogJ0ZvbGxvdyBUZXN0Jyxcbn0pO1xuXG4vLyB0ZXN0IFBheVBhbFxubmV3IE9wZW5TaGFyZS5zaGFyZSh7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICB0eXBlOiAncGF5cGFsJyxcbiAgYnV0dG9uSWQ6ICcyUDNSSllFRkw3WjYyJyxcbiAgc2FuZGJveDogdHJ1ZSxcbiAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksXG4gIGlubmVySFRNTDogJ1BheVBhbCBUZXN0Jyxcbn0pO1xuXG4vLyBiaW5kIHRvIGNvdW50IGxvYWRlZCBldmVudFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignT3BlblNoYXJlLmNvdW50LWxvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ09wZW5TaGFyZSAoY291bnQpIGxvYWRlZCcpO1xufSk7XG5cbi8vIGJpbmQgdG8gc2hhcmUgbG9hZGVkIGV2ZW50XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdPcGVuU2hhcmUuc2hhcmUtbG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnT3BlblNoYXJlIChzaGFyZSkgbG9hZGVkJyk7XG5cbiAgLy8gYmluZCB0byBzaGFyZWQgZXZlbnQgb24gZWFjaCBpbmRpdmlkdWFsIG5vZGVcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW9wZW4tc2hhcmVdJyksIChub2RlKSA9PiB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdPcGVuU2hhcmUuc2hhcmVkJywgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdPcGVuIFNoYXJlIFNoYXJlZCcsIGUpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBleGFtcGxlcyA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHR3aXR0ZXI6IG5ldyBPcGVuU2hhcmUuc2hhcmUoeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHR5cGU6ICd0d2l0dGVyJyxcbiAgICAgIGJpbmRDbGljazogdHJ1ZSxcbiAgICAgIHVybDogJ2h0dHA6Ly9kaWdpdGFsc3VyZ2VvbnMuY29tJyxcbiAgICAgIHZpYTogJ2RpZ2l0YWxzdXJnZW9ucycsXG4gICAgICB0ZXh0OiAnRGlnaXRhbCBTdXJnZW9ucycsXG4gICAgICBoYXNodGFnczogJ2ZvcndhcmRvYnNlc3NlZCcsXG4gICAgfSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYXBpLWV4YW1wbGU9XCJ0d2l0dGVyXCJdJykpLFxuXG4gICAgZmFjZWJvb2s6IG5ldyBPcGVuU2hhcmUuc2hhcmUoeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHR5cGU6ICdmYWNlYm9vaycsXG4gICAgICBiaW5kQ2xpY2s6IHRydWUsXG4gICAgICBsaW5rOiAnaHR0cDovL2RpZ2l0YWxzdXJnZW9ucy5jb20nLFxuICAgICAgcGljdHVyZTogJ2h0dHA6Ly93d3cuZGlnaXRhbHN1cmdlb25zLmNvbS9pbWcvYWJvdXQvYmdfb2ZmaWNlX3RlYW0uanBnJyxcbiAgICAgIGNhcHRpb246ICdEaWdpdGFsIFN1cmdlb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnZm9yd2FyZG9ic2Vzc2VkJyxcbiAgICB9LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hcGktZXhhbXBsZT1cImZhY2Vib29rXCJdJykpLFxuXG4gICAgcGludGVyZXN0OiBuZXcgT3BlblNoYXJlLnNoYXJlKHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB0eXBlOiAncGludGVyZXN0JyxcbiAgICAgIGJpbmRDbGljazogdHJ1ZSxcbiAgICAgIHVybDogJ2h0dHA6Ly9kaWdpdGFsc3VyZ2VvbnMuY29tJyxcbiAgICAgIG1lZGlhOiAnaHR0cDovL3d3dy5kaWdpdGFsc3VyZ2VvbnMuY29tL2ltZy9hYm91dC9iZ19vZmZpY2VfdGVhbS5qcGcnLFxuICAgICAgZGVzY3JpcHRpb246ICdEaWdpdGFsIFN1cmdlb25zJyxcbiAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LFxuICAgIH0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFwaS1leGFtcGxlPVwicGludGVyZXN0XCJdJykpLFxuXG4gICAgZW1haWw6IG5ldyBPcGVuU2hhcmUuc2hhcmUoeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICBiaW5kQ2xpY2s6IHRydWUsXG4gICAgICB0bzogJ3RlY2hyb29tQGRpZ2l0YWxzdXJnZW9ucy5jb20nLFxuICAgICAgc3ViamVjdDogJ0RpZ2l0YWwgU3VyZ2VvbnMnLFxuICAgICAgYm9keTogJ0ZvcndhcmQgT2JzZXNzZWQnLFxuICAgIH0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFwaS1leGFtcGxlPVwiZW1haWxcIl0nKSksXG4gIH07XG59KTtcblxuLy8gRXhhbXBsZSBvZiBsaXN0ZW5pbmcgZm9yIGNvdW50ZWQgZXZlbnRzIG9uIGluZGl2aWR1YWwgdXJscyBvciBhcnJheXMgb2YgdXJsc1xuY29uc3QgdXJscyA9IFtcbiAgJ2ZhY2Vib29rJyxcbiAgJ2dvb2dsZScsXG4gICdsaW5rZWRpbicsXG4gICdyZWRkaXQnLFxuICAncGludGVyZXN0JyxcbiAgW1xuICAgICdnb29nbGUnLFxuICAgICdsaW5rZWRpbicsXG4gICAgJ3JlZGRpdCcsXG4gICAgJ3BpbnRlcmVzdCcsXG4gIF0sXG5dO1xuXG51cmxzLmZvckVhY2goKHVybCkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheSh1cmwpKSB7XG4gICAgdXJsID0gdXJsLmpvaW4oJywnKTtcbiAgfVxuICBjb25zdCBjb3VudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vcGVuLXNoYXJlLWNvdW50PVwiJHt1cmx9XCJdYCk7XG5cbiAgW10uZm9yRWFjaC5jYWxsKGNvdW50Tm9kZSwgKG5vZGUpID0+IHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoYE9wZW5TaGFyZS5jb3VudGVkLSR7dXJsfWAsICgpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50cyA9IG5vZGUuaW5uZXJIVE1MO1xuICAgICAgaWYgKGNvdW50cykgY29uc29sZS5sb2codXJsLCAnc2hhcmVzOiAnLCBjb3VudHMpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyB0ZXN0IHR3aXR0ZXIgY291bnQganMgYXBpXG5uZXcgT3BlblNoYXJlLmNvdW50KHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gIHR5cGU6ICd0d2l0dGVyJyxcbiAgdXJsOiAnaHR0cHM6Ly93d3cuZGlnaXRhbHN1cmdlb25zLmNvbS90aG91Z2h0cy90ZWNobm9sb2d5L3RoZS1ibG9ja2NoYWluLXJldm9sdXRpb24nLFxuICBrZXk6ICdkc3R3ZWV0cycsXG59LCAobm9kZSkgPT4ge1xuICBjb25zdCBvcyA9IG5ldyBPcGVuU2hhcmUuc2hhcmUoeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICB0eXBlOiAndHdpdHRlcicsXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZGlnaXRhbHN1cmdlb25zLmNvbS90aG91Z2h0cy90ZWNobm9sb2d5L3RoZS1ibG9ja2NoYWluLXJldm9sdXRpb24nLFxuICAgIHZpYTogJ2RpZ2l0YWxzdXJnZW9ucycsXG4gICAgaGFzaHRhZ3M6ICdmb3J3YXJkb2JzZXNzZWQsIGJsb2NrY2hhaW4nLFxuICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LFxuICAgIGlubmVySFRNTDogJ0JMT0NLQ0hBSU4nLFxuICB9KTtcbiAgb3MuYXBwZW5kQ2hpbGQobm9kZSk7XG59KTtcbiJdfQ==
