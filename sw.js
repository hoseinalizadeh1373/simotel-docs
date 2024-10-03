/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"15d30b5f96ed2a48c8e2afc7ccaaf835","url":"404-notfound/404.html"},{"revision":"b6a2186d8ab4392fa94bdc403d0e0d09","url":"404.html"},{"revision":"1b48dec6b2c7a7cf1a904143aab06e37","url":"assets/css/styles.6fda24a6.css"},{"revision":"d5b07b3717b54ecc9380c149085f79e9","url":"assets/js/0058b4c6.14b54ac2.js"},{"revision":"1c7142dc19a4f2acf652cc57087ea14b","url":"assets/js/00ca6447.f374d968.js"},{"revision":"b8e4c03f7502380fe15c47c2d80dbe55","url":"assets/js/01a5258b.647df4ca.js"},{"revision":"b0488e35a097a7e2a7dc26744cf9425a","url":"assets/js/01d19262.2d4fc0e1.js"},{"revision":"c444b8e7f9da68e212cce64dcb6484f3","url":"assets/js/02724244.1b6ac78d.js"},{"revision":"e454b84eecf0845bd2b2528deaafd650","url":"assets/js/033d8b3a.22a28159.js"},{"revision":"2895122000b49c812d0f0357099aa622","url":"assets/js/0415a921.0ca4e8f4.js"},{"revision":"9b5ae2f069519f4e491fab08e668daad","url":"assets/js/0533b331.ca8779c3.js"},{"revision":"eb96dde7088e0c7df97720644eaddced","url":"assets/js/0596910e.d872d0f8.js"},{"revision":"d61281049452eea85d7554a7afc743fe","url":"assets/js/05b971bb.51f9d6bc.js"},{"revision":"b1a27494b50598f1d721b4c956b47e26","url":"assets/js/08834442.415a4282.js"},{"revision":"516e6108105aee536c81c9be38f91751","url":"assets/js/0abc943c.8d3ad8eb.js"},{"revision":"3a1fb5cedb06ff174a1dad027dd5cb27","url":"assets/js/0b67d0fa.4565d438.js"},{"revision":"519359a8992ffef7c0de97299ef2bd88","url":"assets/js/0c125c3e.80f87c85.js"},{"revision":"67ed8dfbdf25cd6c3930f4fc1bfeef08","url":"assets/js/0d3d8034.9a688e4c.js"},{"revision":"85fa6eda3748640bd7d5974b6e9f7169","url":"assets/js/0de2f38a.8a75c1ac.js"},{"revision":"e3a04da2e5ef178495526847df75b8e6","url":"assets/js/0e6ecfcc.d38d7e04.js"},{"revision":"0578586ba523b9b19fed2c67d5c83f02","url":"assets/js/10044bef.ab8aa879.js"},{"revision":"bd37bd00d3fc84e325e7c54d0b2c3c04","url":"assets/js/1345de2e.75a768a8.js"},{"revision":"d9f5425956090503fb8f172b553f2ac7","url":"assets/js/138e0e15.54cc6797.js"},{"revision":"a2527d29a4c43f3ae70c10da0e7dedcb","url":"assets/js/1456e152.7092c904.js"},{"revision":"59adbaabbf60ec769a67308176598f91","url":"assets/js/16acd466.92a585b9.js"},{"revision":"237fd419dd25002721c901f1e7dea8b9","url":"assets/js/17896441.d587f8b9.js"},{"revision":"6281bbd3d9618b1af28673c5e29c53cf","url":"assets/js/17f757ca.7471a6ce.js"},{"revision":"18eca7debc94cd7d4be0b11abec29111","url":"assets/js/192be9c3.1a9c305c.js"},{"revision":"40e53b84e47d78660932d4530d66a2eb","url":"assets/js/197eaad9.053e65eb.js"},{"revision":"b61daf6a4eb0d7f9069e78bc01be18e6","url":"assets/js/1a4e3797.d500327a.js"},{"revision":"feffa22a2c918ec8f26c259f0fe60982","url":"assets/js/1f391b9e.57a9d609.js"},{"revision":"926549a2c9b1555a2fa40942fc143217","url":"assets/js/20e060bc.4df3b41c.js"},{"revision":"60a48b4ad33c0f7f75d4d562cc83c455","url":"assets/js/2237.4b551d0c.js"},{"revision":"9f537fabb37740919127bdac1f492c1c","url":"assets/js/23f826b4.65bcf083.js"},{"revision":"0b5d18c83348884603af317ad00b2d92","url":"assets/js/24578ed5.1894f387.js"},{"revision":"7511557f84868a0e229514263179d005","url":"assets/js/247c778e.4e1847ad.js"},{"revision":"d5a8375ba6c0bc921fdc2ec6e30de337","url":"assets/js/24de6dde.a6f18a4c.js"},{"revision":"2553d2e0f1ee0180cb82137315d72915","url":"assets/js/25b294b0.7d3dbc4b.js"},{"revision":"deaa0fd7ea5674e184b69cfd770f7e77","url":"assets/js/26074cdc.16dcd0df.js"},{"revision":"d294d93d963388e967622c56e76d92b6","url":"assets/js/27d54ade.a2ea27c5.js"},{"revision":"1cf5049eeb87099025729840ad7fcc92","url":"assets/js/2878f05e.da9e9b0f.js"},{"revision":"8591a09b7f77e4c1065c3d2e43c351f8","url":"assets/js/28890e9f.c6e95eaf.js"},{"revision":"08b4461a8cbfa77b79eabf570c48e523","url":"assets/js/2ae95efa.ef3a0471.js"},{"revision":"094fbcae294189505b7d0788e142ffa2","url":"assets/js/2bc5c56c.2028bb72.js"},{"revision":"6624221fa9bbb5cfd29353633d657427","url":"assets/js/2e3e53f6.7aaeb8a7.js"},{"revision":"7803730547b0b3bbc4714db1db0ee5b2","url":"assets/js/2e5b0c79.63b8a312.js"},{"revision":"3ec3674b57dff802e9ef7146c3ff65c1","url":"assets/js/2fc725c6.3ce8fa3f.js"},{"revision":"ce2159b8bc8cb4f5d6de464b75d3b7c9","url":"assets/js/31052633.fb3f0644.js"},{"revision":"23bf53d0b242b40cf0cd444a8e71e678","url":"assets/js/34dd5e85.e94ca59c.js"},{"revision":"71238b7a1bb6d0d700b45b2475031272","url":"assets/js/3640e12e.0edb2fe8.js"},{"revision":"96e65bf743c4f2932a1ffd5e32079841","url":"assets/js/36994c47.03418573.js"},{"revision":"e9cbbab6937fd4afc3790fc2ebe9d3f8","url":"assets/js/3756880a.cef892ed.js"},{"revision":"5bbc4d48eb177f80b862aba0dad6eb04","url":"assets/js/37c53436.f89c844b.js"},{"revision":"6bc3b7eefda1063778cb1b708dc735f0","url":"assets/js/389dab75.1af4f68e.js"},{"revision":"de521987337226b3bff189a2c37accc0","url":"assets/js/393be207.f024efdf.js"},{"revision":"aec4a44589cec8d9b377f77a07ca435f","url":"assets/js/3b8b3ff1.e6211fd9.js"},{"revision":"2675efe51a6d9fed301b1469da182517","url":"assets/js/3bd807be.39ccced9.js"},{"revision":"dd00e7eeaf2196e60b6c2911d6f5e179","url":"assets/js/3c432fa2.7b643072.js"},{"revision":"f521bc1af26fcf86f06dbf6ba516d9ac","url":"assets/js/3cbf702f.f40dde30.js"},{"revision":"2a21608fc885ebf8361247aca7169c6e","url":"assets/js/3cd11a48.b35b2570.js"},{"revision":"7968c146c4b9e70ea4b8fd97f62d3f4f","url":"assets/js/3e05b77c.adfb0b23.js"},{"revision":"14c8d8bd889a3bdc4b1c485cdc0e28ce","url":"assets/js/3e9abf99.01426c06.js"},{"revision":"f0d2fe18729c75dcac4a3160707a3e36","url":"assets/js/3ea80cd5.2ae55b05.js"},{"revision":"fac38c7e3f52444ab4570faad426cb00","url":"assets/js/3faa1fea.9e508c7d.js"},{"revision":"37632fcabead0b341fb2b5d479c2e734","url":"assets/js/403585f1.b08ce1b6.js"},{"revision":"0f199d30e8649b791840a741755608da","url":"assets/js/4072e084.070dc865.js"},{"revision":"3b895aff996a2cb0f8658e6d10a7eac8","url":"assets/js/40baa6f3.c3ba417c.js"},{"revision":"7df4da727c4e823a5ff8bc8836f10f4c","url":"assets/js/42e04505.0b7fa682.js"},{"revision":"05295b95af69406834f0cd7fc2079673","url":"assets/js/4334.93317f82.js"},{"revision":"a60b781fef8a5d15979461dd78b275d4","url":"assets/js/452f53bb.93c07f03.js"},{"revision":"a4897ea2129dd968359672d00ea4c4d9","url":"assets/js/46dcd4bd.deb4c1ae.js"},{"revision":"c92fccc6970b4051313a1752736f1d00","url":"assets/js/4730ee12.4a504fd1.js"},{"revision":"b934e63f2f4229a18b4cc6ddea13da79","url":"assets/js/483f056d.02fa9991.js"},{"revision":"a11c6288d62d6b9beb2043663b3be4ed","url":"assets/js/489.ecae5772.js"},{"revision":"8f1b668e7bfb53610636b1cb1cc63ccc","url":"assets/js/492adc93.767e2097.js"},{"revision":"1aecf62437698e5e0923e5ee28a83f4c","url":"assets/js/49da9a0d.b7cac076.js"},{"revision":"521779ee5580777294ea11f98970b02f","url":"assets/js/49e9275c.05a198d5.js"},{"revision":"5203aeb7a85aab8fe71348653e92ea15","url":"assets/js/4ab8899d.8c3125e9.js"},{"revision":"af932aea85870b65ca670840d6de28e0","url":"assets/js/4abc877e.406471e6.js"},{"revision":"c49bb78e21800d2c2f264f78a36e0500","url":"assets/js/4e36bbc3.eeeb442e.js"},{"revision":"53e1d01f9887c7bb9ed8bdfb94332e5b","url":"assets/js/4f45e8e3.271168e6.js"},{"revision":"63721d99104a8bb2235b34d07146ecf1","url":"assets/js/4fc9e01a.fd0250f4.js"},{"revision":"44034102c2c1774bb9054044a46ca00b","url":"assets/js/500f082b.8ca51375.js"},{"revision":"23ebb7f97854e7edfd9569979f84137e","url":"assets/js/507e7f23.cbb180e8.js"},{"revision":"11acb4789570a62f3f13946eed677825","url":"assets/js/514f4026.ce71968e.js"},{"revision":"a1bdaf81d705cca5db3bd39f2225f20f","url":"assets/js/5400e5ca.11f596a3.js"},{"revision":"1969ecdf3a01bb7090c5420f776eb578","url":"assets/js/54153286.737c30dc.js"},{"revision":"9308e012f81972b51a37595584d4f029","url":"assets/js/5502285b.9782cc4f.js"},{"revision":"7e3b1e7961e3f8a7006dc112ecc9e6d8","url":"assets/js/56767cc1.55903873.js"},{"revision":"03c75fb3399b89a96b39b04f800cd963","url":"assets/js/5741.796f5d93.js"},{"revision":"e1b843e982b521f1cbf0502c23b6058d","url":"assets/js/59132b4e.4883dbdd.js"},{"revision":"f4cb3f74e996a51d919baaa5534cae2e","url":"assets/js/5957da07.d1ce1f2b.js"},{"revision":"66676b015e7f61081f3684bdc7371dbe","url":"assets/js/5b0702e5.e93c6448.js"},{"revision":"3de3c943399105c2fb25e4cc013f5165","url":"assets/js/5ceb0969.5f17e068.js"},{"revision":"1d5ceabde991a67e17ed354388595fe5","url":"assets/js/5d0f41da.aad99078.js"},{"revision":"33d1c50756cee009267658243ec0485b","url":"assets/js/5d622b28.f1fb85b9.js"},{"revision":"0f25b4c17a8805f1e40d73db7d369970","url":"assets/js/5e95c892.ddecf55b.js"},{"revision":"367dd394fbcc1b899a1e862d91733145","url":"assets/js/5f89479b.4e093f85.js"},{"revision":"c242d27ed7f83c2606362629406d95b6","url":"assets/js/646ca952.3bed38da.js"},{"revision":"40e7bb105322f98d4d4e009f82d16713","url":"assets/js/647d527b.705acef3.js"},{"revision":"0b5a3279e1b36533617b547275a54cc0","url":"assets/js/688a6d21.6abe05ab.js"},{"revision":"79f1c15fa5d17a6bbbd9b5a0c41d3102","url":"assets/js/6a2a5bd1.c9cb1cb2.js"},{"revision":"0494e555d2e6603e9db5966c595e0f74","url":"assets/js/6bd8de9c.251b828d.js"},{"revision":"0341315055a64154eecd5f760d47cce1","url":"assets/js/6d4eb8fd.c7982bd1.js"},{"revision":"adf5e244b5af6db9e066d7d0bf1d69ab","url":"assets/js/6d5f50d9.1cb130eb.js"},{"revision":"81e801ecba3ad72a3c715fc4384ba57c","url":"assets/js/6ff1a779.43fc05dd.js"},{"revision":"e5402083c331d9b8db69a39511e475bd","url":"assets/js/70a7566b.36bcb7f9.js"},{"revision":"ffbd881212991d2c89271d90e1c9f5f6","url":"assets/js/733731b9.d8dffd6e.js"},{"revision":"5ceb0458528d5d872646b0abfe1b190f","url":"assets/js/7363d298.39f65976.js"},{"revision":"fdfc3947d3cefbae86c7bab442e49c64","url":"assets/js/73813315.35219e3a.js"},{"revision":"62b198a10b95b31efbd78fb28d3cde7b","url":"assets/js/74a652c2.ab56b076.js"},{"revision":"dc6ccd568f078a979dbed1f2f074b27a","url":"assets/js/762f7c66.eac21101.js"},{"revision":"01b39e888a2f7436e8233e5c5addc8be","url":"assets/js/767bd700.75d033f4.js"},{"revision":"018c021862cd55c57dd1c1f4e781844f","url":"assets/js/77e2bd65.fcc1f031.js"},{"revision":"4877e50769185e2cde5d9d9c4520215e","url":"assets/js/781ad543.69f93654.js"},{"revision":"2e1cf99a7e9749df85f2770e08bc3d0b","url":"assets/js/78d8a38a.c7d813a0.js"},{"revision":"cf91b0a31d951a272ba7625549760090","url":"assets/js/79a4857b.99e0b638.js"},{"revision":"7570cb662ce489d17fefc8ae04be8947","url":"assets/js/79d29c8f.dbd61a67.js"},{"revision":"bf8d9b8fd718a0cab769b1ad46adfaed","url":"assets/js/7abb3bf9.822d18c1.js"},{"revision":"618f65d45e604f1fdc54731a5e07d5d8","url":"assets/js/7beff8d5.c1a58f9a.js"},{"revision":"4dbe48417ff0fcd2d743b01893025ca7","url":"assets/js/7cb97631.98eaa2fc.js"},{"revision":"de4f5aadca136a54bd6afad173ceef6b","url":"assets/js/7d277f0c.530e29eb.js"},{"revision":"c9469b1f94afb83792af9d52dde05fa1","url":"assets/js/7d738a78.b1041562.js"},{"revision":"885a7f541ce01212d7e5904d02f8c665","url":"assets/js/7e5893ea.734f1dc8.js"},{"revision":"774aeed063f01bdacf3e338e37c7461e","url":"assets/js/807f788a.d0663361.js"},{"revision":"6e32d692ef7f57eefa10f73028356f75","url":"assets/js/814f3328.cae40520.js"},{"revision":"c05f5c06f0710c2ee5d74c8489ba7393","url":"assets/js/8177921f.e1ec563c.js"},{"revision":"348d906b8df2b4e4adeecc12c1a414d2","url":"assets/js/8205137b.da2630de.js"},{"revision":"5b95b8d70b423edaa415956f59d887f7","url":"assets/js/8284d749.86408112.js"},{"revision":"38a892d6780ff3ad32c1f4cc2bd83b3f","url":"assets/js/84818250.9b0b0fb6.js"},{"revision":"07058b457c8081fa429c2e00ed4be41b","url":"assets/js/8498.5fb6ddde.js"},{"revision":"9a2f5752099feda586db3894b8cae8be","url":"assets/js/84c72657.278fa387.js"},{"revision":"6ab79d735c0769f9b9f94991d9d5d630","url":"assets/js/85e9e7e1.d8f1ce30.js"},{"revision":"97642ec580f796dbd336d641bc9a924b","url":"assets/js/861e5e2e.104a721d.js"},{"revision":"57dc2f011d4757d8ebe004eea60c49be","url":"assets/js/86da77e3.d3fe9b05.js"},{"revision":"73d568262a3dc3f19e3ecd14107c07bd","url":"assets/js/8793.b29071c8.js"},{"revision":"468a331369225f9ba0b4589bfc566122","url":"assets/js/879329cd.d70000b4.js"},{"revision":"d65f7ab45c5bb9095f236e61f8ef0387","url":"assets/js/879eeca6.5daf435d.js"},{"revision":"fd92683aef379bb5b451d9df1474d839","url":"assets/js/8833d61d.dfa37f6c.js"},{"revision":"884f14f29b85d653d752b4c73a1be688","url":"assets/js/8a815535.95fe98c7.js"},{"revision":"5d9a36669fdae5bdb839dae49241cf01","url":"assets/js/8b37887c.8f1311f0.js"},{"revision":"b9abe029f8f6a8fb1e3ca3b8457a6ab7","url":"assets/js/8b60762d.68e6a47a.js"},{"revision":"aeb2295553e2904995b1413f814a512f","url":"assets/js/8c83aaf9.05c218a7.js"},{"revision":"3d877090bae77a8ea1d26ce5f1f8f946","url":"assets/js/8da2a8c4.f28a3645.js"},{"revision":"bd34ba507fe2224f7541ff407a29d8cc","url":"assets/js/8e2f9e44.1d615f62.js"},{"revision":"7c22d1228b2052f562cb6791e0e89eb7","url":"assets/js/8f163d7e.0a10a729.js"},{"revision":"86e60847c654bba4c68948f8efcf3cb4","url":"assets/js/90d33efe.0a60f129.js"},{"revision":"44bcc8acce829be5e94f3bee9556a1dd","url":"assets/js/9172c551.4f3432d3.js"},{"revision":"37851d47d16171d86398ec092fb0f47a","url":"assets/js/918a11e0.6591497b.js"},{"revision":"47934c91d72c34897612d8184c42855a","url":"assets/js/9290e3fa.9bb55045.js"},{"revision":"44ee343c7936e96187cb2ced127028ed","url":"assets/js/93995866.6494f931.js"},{"revision":"1ed9796c00b0b872b600e8060582a374","url":"assets/js/93ef5328.dbbcda01.js"},{"revision":"0860f2cead705f7b7c702e745a223902","url":"assets/js/94e46ebc.f3939731.js"},{"revision":"013141224d7f654dc0e2b0f6b1c51e25","url":"assets/js/94eaeb86.8f693ac5.js"},{"revision":"d4507f9297446e8879f61d40ecc735f7","url":"assets/js/95850579.4a1f61f5.js"},{"revision":"042de22ec83ed1feec4edd3b69925a9f","url":"assets/js/960f5c79.112437af.js"},{"revision":"c2b23607a310bf4549ba206c7853cc9b","url":"assets/js/96f50347.6bd4e98b.js"},{"revision":"97631fe2ea9dbc1cc1a999fed27617d7","url":"assets/js/9730.7035db71.js"},{"revision":"976311c267ffe62245f759f760190281","url":"assets/js/9746bdf5.c74d2524.js"},{"revision":"2ead157113170945580d1014bf712b94","url":"assets/js/97ecc110.5c2ccd57.js"},{"revision":"9c1322957a4c6ae6688aee2b37134a19","url":"assets/js/97fe530d.c07a4712.js"},{"revision":"eed12b56e8d279b132d380ac509098ce","url":"assets/js/99028d1a.288768c7.js"},{"revision":"c786a9d07040a9329e0489dd01d828af","url":"assets/js/9939.7bb56657.js"},{"revision":"6e499535cebf914f0e7e5faabd4d7c48","url":"assets/js/9bca47cb.22c68a4b.js"},{"revision":"c1a80282360a0a4aa252156c44ad9c11","url":"assets/js/9c33e8a5.adcaf6f4.js"},{"revision":"87aab860c50f125664c88461c82154b7","url":"assets/js/9e4087bc.df40e4d7.js"},{"revision":"bd1b3110117a9803410c28abace44ee1","url":"assets/js/9fd7fe9a.d27f1f13.js"},{"revision":"57760a1d55f708b2da1cec9cc8b0d107","url":"assets/js/a2257575.e29a9ac4.js"},{"revision":"b36033ca8c370f5ff5face76c93102ee","url":"assets/js/a2b6a36a.8c669234.js"},{"revision":"c6e5ccc94f4dfc0d3e94f23b4bb9401c","url":"assets/js/a2f5c433.60fa1429.js"},{"revision":"e7399a3f6d2a22a88d36b58fbe95a72c","url":"assets/js/a464554a.eb21e5df.js"},{"revision":"11ad65ae8c0acf446e87271662fa3e80","url":"assets/js/a632a721.6b2ad591.js"},{"revision":"ece4ae9198bdfb6298baa4e4abe9de4f","url":"assets/js/a6aa9e1f.0d132380.js"},{"revision":"2af9c7f4a2a1918bd70fd7c6bbb87572","url":"assets/js/a72126c4.ea562467.js"},{"revision":"6daf1d46bfb79a3e5c1ba75e0a931453","url":"assets/js/a7456010.ca259d29.js"},{"revision":"c7a4d9b6503333373d9aa20b06324bcb","url":"assets/js/a7bd4aaa.49d98d9a.js"},{"revision":"20c0f3b767fb06927b76628b1c4c7f4f","url":"assets/js/a82106ea.7727518b.js"},{"revision":"e596f06704fc213b14a49503fc113b2f","url":"assets/js/a94703ab.406dab6a.js"},{"revision":"1859f3f652672b52a1b08250e46259d6","url":"assets/js/a96ccb04.ea790382.js"},{"revision":"59be94024eb763c39803194325781e09","url":"assets/js/aa63b058.695659f2.js"},{"revision":"4247b051e3ba75c9651cb7552d1453b7","url":"assets/js/aab67fc4.db33d7e9.js"},{"revision":"5849137f34f8647dce454c546df0ce63","url":"assets/js/aae77a7e.9e4887b6.js"},{"revision":"8d2543b4cecd2360822c0a9fce67c927","url":"assets/js/ab1e4118.afeccb0b.js"},{"revision":"c1555c5b8795ce561bfb189a661f051e","url":"assets/js/ab390b84.edfc5a4c.js"},{"revision":"6436487332813028c7cef757ce7ea8f9","url":"assets/js/aba21aa0.d4da815e.js"},{"revision":"611d4d5e82ee709c985b4f54cd5ee265","url":"assets/js/acecf23e.902299bc.js"},{"revision":"c898197d0032a937e70b83b3fd1c5378","url":"assets/js/ad1a74b4.5230108d.js"},{"revision":"f9e6f66455bee89177c559e00bea3614","url":"assets/js/ad1bfd55.58872388.js"},{"revision":"b0e76f1cbd7431d1d5b90c12dadd375f","url":"assets/js/ad4e6337.f1ba01d0.js"},{"revision":"0a94f4d009b3d832e5e3900f5b458be1","url":"assets/js/af595832.78a22892.js"},{"revision":"a184b65971bad7082ef077d33a489f70","url":"assets/js/afddb665.2711015d.js"},{"revision":"e1615d80c555cb74b45a651e6119430b","url":"assets/js/b29f36ac.16ee666c.js"},{"revision":"d8e417b86579a0157f417d4e0bfc8eab","url":"assets/js/b3339582.d5afc570.js"},{"revision":"18c9ad832c44a58d6429fc3569faf2dc","url":"assets/js/b34df3e4.0a4bb3f5.js"},{"revision":"43534cacb7d980dc0e4ddb9049d920ac","url":"assets/js/b54fbcba.f3d743f7.js"},{"revision":"df2f117d1e2540a9cb338765fe49139e","url":"assets/js/b65d0bf2.c3a83b0a.js"},{"revision":"17fb8be5891f31ec0ee7b8a31507d0b0","url":"assets/js/b693bc78.90d80a7d.js"},{"revision":"11a20e6a051d821a3c9952b27163f512","url":"assets/js/b830722d.b504b728.js"},{"revision":"08424b036cbcac77d17651dcc5566ab3","url":"assets/js/b8a06ed3.89565cad.js"},{"revision":"96fced60501a88c7f21b584b39027719","url":"assets/js/ba107d63.70a9efae.js"},{"revision":"a7b7febc35dbb67fac787544fce79369","url":"assets/js/baabce91.dbf7812e.js"},{"revision":"f2006e4312b537a55253b873e7ba0b89","url":"assets/js/be650fbb.6d659feb.js"},{"revision":"d5794c4830d124e9e599b62521739e5c","url":"assets/js/c03391df.4a7c3f64.js"},{"revision":"e94307f1c22ea7c0b74c7e1a52930264","url":"assets/js/c15d9823.7556f87b.js"},{"revision":"9b10d0da6c810acc9be8c890f22dde3b","url":"assets/js/c15dda91.cf3a897f.js"},{"revision":"7cab5ea415a5812470b5ed19fdb5e3cb","url":"assets/js/c3bfddaf.ec82df0f.js"},{"revision":"49b626f4ca77ed2bd8e706b1138ea6c3","url":"assets/js/c4f5d8e4.5ee5c483.js"},{"revision":"0b8179e0249a3e10eb710428731af856","url":"assets/js/c73574d5.edd5eaca.js"},{"revision":"2120d4d73d263b6727120315b95bbfba","url":"assets/js/c8196043.4a4c9dd8.js"},{"revision":"b44c8428f6e831c50509df08057baa63","url":"assets/js/c8a18bbd.48030d30.js"},{"revision":"3574709070337d81983922c6091870d4","url":"assets/js/c9255c75.8940b935.js"},{"revision":"8968168c44d32038b8b1fe3ec77b2706","url":"assets/js/cc7e66a1.124da135.js"},{"revision":"bf865225985080a7c23de2fb78078cd0","url":"assets/js/ccc49370.6b52b181.js"},{"revision":"fb07dfaefb92a58809a74179cf9af866","url":"assets/js/cd352afe.dd530058.js"},{"revision":"cf37bed0668b13c7f98b8bcca9a2d57d","url":"assets/js/cd3e490f.a287ea22.js"},{"revision":"34cb4746a45c47458946ec7834ec8706","url":"assets/js/cd678514.6be55e7a.js"},{"revision":"dcc73b2ea132e328fc1aa13af213f8bc","url":"assets/js/cea0582d.8f041a5e.js"},{"revision":"57e3172c518f80b3d3c780e1d3a7de50","url":"assets/js/cf79fd76.4b4d72fa.js"},{"revision":"776c80e34cdfd180375b430b99375ef3","url":"assets/js/cf8b77d1.d1134beb.js"},{"revision":"1047671f6d78cdd1c84af89b9c06aa30","url":"assets/js/d090b270.8711f0b7.js"},{"revision":"3ae29c06cb7a306433c811a9e89d1d28","url":"assets/js/d0aadb65.063b649e.js"},{"revision":"f32fc6da9c53b1905c9e5a9cfaaec392","url":"assets/js/d0ee514b.1b1c4e36.js"},{"revision":"92f2206ac81c61cd11588c540a3c4827","url":"assets/js/d2efbc9b.bddf4c08.js"},{"revision":"ef10326daaa82de2c3a0778a5d194891","url":"assets/js/d33da4e4.3727b473.js"},{"revision":"bfab239d34fe404aaad51e2bdd0f8f2d","url":"assets/js/d3cc27b8.14c948bb.js"},{"revision":"7d5229a708f4c1b4aac17580f99e9b14","url":"assets/js/d4eaaa22.15bfa898.js"},{"revision":"75d9d759737bea772194db5856e8bf2c","url":"assets/js/d756e001.8ca9d998.js"},{"revision":"021964b1b25c3b6666ab725f35da87f9","url":"assets/js/d81bf3f2.ef5f9433.js"},{"revision":"1c1b9bbfc5118e57cec1599d3f4ff97f","url":"assets/js/d8b36815.b397bef1.js"},{"revision":"9afcb8e76888d5342a64dfffa916a01b","url":"assets/js/d9444cd4.410f0fc5.js"},{"revision":"3058f5d440161eccf90477b562b86904","url":"assets/js/d9ba7aed.61073be7.js"},{"revision":"c4be4af2e735f524db2bf45307f7c9a2","url":"assets/js/dae797b5.d0320680.js"},{"revision":"03d4b9e4d2482fc69771a72c2e8ac49e","url":"assets/js/db0d299f.88a6112c.js"},{"revision":"900593a346591408d15572bf8d552058","url":"assets/js/db214e7b.df5439a0.js"},{"revision":"c0dbcfe6c1c7add8c2c01099364be0a3","url":"assets/js/db90ad8e.a2f104f0.js"},{"revision":"0b4ef25f0657cd2746b0660d1026463f","url":"assets/js/dc54b0b9.0fdbc103.js"},{"revision":"e26c6e8e8192ecb271d88b3a9fd58e6d","url":"assets/js/dc5fcfa2.e3945930.js"},{"revision":"5210046be68bb0cb210cd90f30edcf99","url":"assets/js/de5bd09d.b7d3debd.js"},{"revision":"52ed3e2a51733f494e2f9bde1faedf29","url":"assets/js/de806e04.d4c6ca85.js"},{"revision":"f081673390a623988436e80cbaf0873a","url":"assets/js/df0ac983.7b280748.js"},{"revision":"1c55ae6f412cc13d7686cdd4ce88ddb4","url":"assets/js/dfb2c235.298fc436.js"},{"revision":"43383361e12b65d0d69c96ffcac1ff6f","url":"assets/js/e1595233.514595c6.js"},{"revision":"b69abfee76237795b1a98350f530fb5c","url":"assets/js/e37edbb0.3244c6c6.js"},{"revision":"24e5ffe852b74039f66498ae10fce240","url":"assets/js/e595b868.b56ee15c.js"},{"revision":"c207f154c2cff423a28980042e866b7b","url":"assets/js/e5b126f6.ae82036c.js"},{"revision":"3219a45ebc86007aa00c0cd7e563bf88","url":"assets/js/e673a141.ceeb1add.js"},{"revision":"a00dca81b47f3e081313dde4cd6c0307","url":"assets/js/e6a60ab4.6ad22ea5.js"},{"revision":"3737ddf1517ba8af5e23c7665f70b245","url":"assets/js/e7cdb5c1.ead6d22f.js"},{"revision":"1322697e276a752cca28800a4508412a","url":"assets/js/eb43c9f1.b6d04f74.js"},{"revision":"4ba28eb6c987eedb6727f183fc62c327","url":"assets/js/eb78db82.a8b415ec.js"},{"revision":"be5795f585cea531e69e8a1f10e5bb7f","url":"assets/js/ebca14f3.4f80974a.js"},{"revision":"6cebffe307a63c9f2cb2dbbec9e22e95","url":"assets/js/ec1d60ce.f72b84a8.js"},{"revision":"52b0d05e354d4cce74708fb568f3c45c","url":"assets/js/ee8c18ea.61b5d8a3.js"},{"revision":"5f57049aa8b565d3269a7fa52e4030fe","url":"assets/js/ee9d9519.0d411fbb.js"},{"revision":"eeb8d96d199f7d673d2b8de6011e0a78","url":"assets/js/ef3abb48.c1931750.js"},{"revision":"9b608fa0a79dbff2eb884d0854d13bf2","url":"assets/js/ef9ba084.c2cb9226.js"},{"revision":"e1cda00b33734b25c752f6c4d479dc5d","url":"assets/js/f090ad5f.59aaaf70.js"},{"revision":"b59a39cb80f097fa72546fad7fd4c845","url":"assets/js/f34401f2.46e3414a.js"},{"revision":"8e016733003174d4793d5b43e4e3e3b2","url":"assets/js/f6105694.eca70c48.js"},{"revision":"ca7f5f578f60bd73b8dd2253309777b0","url":"assets/js/f7655300.94ad71c3.js"},{"revision":"6287bf85aa6b837baa24719039ef3277","url":"assets/js/f7dc056c.627889c2.js"},{"revision":"8bb3119fa345c89e7a2a7ee085bfd89f","url":"assets/js/f81c1134.1c38316d.js"},{"revision":"26d60c2bba8720328b4bfc3385044bc0","url":"assets/js/fa60f4f0.2bd142e6.js"},{"revision":"12279889822d812d2f5dc2c9b217f0d1","url":"assets/js/fb431a41.d54d1872.js"},{"revision":"0eccaa04dbeb6f95c03f0210446aaf89","url":"assets/js/fc7be632.b8912b2b.js"},{"revision":"4f3f0308e517cecc0e42c781b3da7764","url":"assets/js/fd9eca46.d637dd53.js"},{"revision":"64735515c28f8bb00e9c7b8f0d585058","url":"assets/js/fdbcecbe.cdc4447b.js"},{"revision":"797ab057bd3d0f96521ffc6a612d5495","url":"assets/js/fed7c6eb.321f04b0.js"},{"revision":"1a72abf7b359aece2204a3867e0627e4","url":"assets/js/ff193b78.bd1473a2.js"},{"revision":"241fd3e04fe216a9012a6071daa48b21","url":"assets/js/main.84ed1758.js"},{"revision":"5ce9e4ef53a1ba260736101a4e2fd322","url":"assets/js/runtime~main.f868a1e3.js"},{"revision":"22ceb16d0da85c2bbfa6da384e70bc01","url":"blog/2021/07/01/SimoTel-DocsCenter-publish/index.html"},{"revision":"0424563543036c05f553446aadaeebf6","url":"blog/2021/08/18/SimoTel-6.2.27-publish/index.html"},{"revision":"6313af65dab5a03933bb1abccb90889d","url":"blog/2021/09/04/update-simotelhelper-26/index.html"},{"revision":"98aeeb4d0f24bb8ea04dbecee0d0c612","url":"blog/archive/index.html"},{"revision":"ade827b7bb237f6b78e15dd3049f28f5","url":"blog/index.html"},{"revision":"616347b524834a2ce814b2460c9cf9db","url":"docs/autodialer/announcements/index.html"},{"revision":"08cc80e2acdbedca3eed5eaeb0a87a5e","url":"docs/autodialer/campaigns/index.html"},{"revision":"4d218d5f92b39554a309b6e80e81464e","url":"docs/autodialer/contacts/index.html"},{"revision":"95e45bd7f9f2bf34907825eb8538253f","url":"docs/autodialer/dialer.ini/index.html"},{"revision":"c69e6b85a698ced4f6351ba6a3a885d0","url":"docs/autodialer/groups/index.html"},{"revision":"9b5c324fc455dcc2910433bf878a48ff","url":"docs/autodialer/introad/index.html"},{"revision":"82b6ca23490c69d5331ab2d09790e654","url":"docs/autodialer/reports/index.html"},{"revision":"9a9e89dcba45b0e58d57429b2e1dac68","url":"docs/autodialer/trunk_manager/index.html"},{"revision":"5bece90c47f60869a75b5c3d342afbb2","url":"docs/developers/api/Autodialer_API/announcement/announcement_add/index.html"},{"revision":"6def2cb5138207fcc90ed8def343cc30","url":"docs/developers/api/Autodialer_API/announcement/announcement_delete/index.html"},{"revision":"6c4a474d08b56b62bf8749f4f4593b62","url":"docs/developers/api/Autodialer_API/announcement/announcement_edit/index.html"},{"revision":"8880e8dee06e00ff49056f2f6a6f76b1","url":"docs/developers/api/Autodialer_API/announcement/announcement_search/index.html"},{"revision":"750943b9d05f6d5f770e65863f054ca3","url":"docs/developers/api/Autodialer_API/announcement/announcement_upload/index.html"},{"revision":"d0f401a31a2802dae00e24fce64e8874","url":"docs/developers/api/Autodialer_API/call_originate/index.html"},{"revision":"3a7fc153635bb7c1ec21601c16db59a5","url":"docs/developers/api/Autodialer_API/campaign/campaign_add/index.html"},{"revision":"a678d3d95e4724529ffd59e42da50f58","url":"docs/developers/api/Autodialer_API/campaign/campaign_delete/index.html"},{"revision":"b19dea852e521e56daf6a463420eb3f3","url":"docs/developers/api/Autodialer_API/campaign/campaign_edit/index.html"},{"revision":"6e0134e9c1dbd8f17bf15b828bdacf7c","url":"docs/developers/api/Autodialer_API/campaign/campaign_search/index.html"},{"revision":"6d30680e5f5bb7188034ffb6e31d6753","url":"docs/developers/api/Autodialer_API/contact/contact_add/index.html"},{"revision":"cfed81b36f371448c60dc07062886480","url":"docs/developers/api/Autodialer_API/contact/contact_delete/index.html"},{"revision":"8939d5c8fc7d5701fc5abc6a79abab0c","url":"docs/developers/api/Autodialer_API/contact/contact_edit/index.html"},{"revision":"69ac49fb19788198d9857c963a4f2d90","url":"docs/developers/api/Autodialer_API/contact/contact_search/index.html"},{"revision":"cc2ab83147ba99663e6f540a8a20f191","url":"docs/developers/api/Autodialer_API/example/index.html"},{"revision":"34b92f8fd471ec4088a71f849c5f29f4","url":"docs/developers/api/Autodialer_API/group/group_add/index.html"},{"revision":"d231552124ed1908fc2a6c99b352bdbf","url":"docs/developers/api/Autodialer_API/group/group_delete/index.html"},{"revision":"7d88f95aeb2c9a386b94d69f8b409140","url":"docs/developers/api/Autodialer_API/group/group_edit/index.html"},{"revision":"6ec429a47f5cbb783e00441c44c4a503","url":"docs/developers/api/Autodialer_API/group/group_search/index.html"},{"revision":"d443fd9b7fe6c29d4f89856ddf155d8b","url":"docs/developers/api/Autodialer_API/group/group_upload/index.html"},{"revision":"8e435aa72df6df3d48f929c6b2d5c73a","url":"docs/developers/api/Autodialer_API/introautodialer/index.html"},{"revision":"b9ba637973db4a782134abd4623cc24f","url":"docs/developers/api/Autodialer_API/report/report_info/index.html"},{"revision":"ab1bd96b79fc387b0b98d7d365b73dd4","url":"docs/developers/api/Autodialer_API/report/report_search_ordered/index.html"},{"revision":"6df3b8bac5ec6432beb6ff3ac755d76b","url":"docs/developers/api/Autodialer_API/report/report_search/index.html"},{"revision":"4ddfd7793b00b6e8264e4fe89451577a","url":"docs/developers/api/Autodialer_API/trunk_manager/trunk_manager_edit/index.html"},{"revision":"e51cc4269ab9e4aeeb3476a1fa69e38c","url":"docs/developers/api/Autodialer_API/trunk_manager/trunk_manager_search/index.html"},{"revision":"21d351f4b4f0af22cb4c873c184bc793","url":"docs/developers/api/introapi/index.html"},{"revision":"3fbf5cd51107c263abb66c4d2160df87","url":"docs/developers/api/Scenarios/call_originate/index.html"},{"revision":"4fa37de84898935d715990958e72d8b7","url":"docs/developers/api/Scenarios/exten_api/index.html"},{"revision":"79c74876a657ef22a40a63d83e51f21e","url":"docs/developers/api/Scenarios/smart_api/index.html"},{"revision":"8e259d088e2587bd28ec1cff2e5806d8","url":"docs/developers/api/SimotelAPI/v4/announcement/announcements_add/index.html"},{"revision":"76d6f126329bdcb679f148c445eeb4c7","url":"docs/developers/api/SimotelAPI/v4/announcement/announcements_edit/index.html"},{"revision":"47be853a3d100656e24e009bdd86d73c","url":"docs/developers/api/SimotelAPI/v4/announcement/announcements_remove/index.html"},{"revision":"dd5ce8e4c86c8e364ed39663732de545","url":"docs/developers/api/SimotelAPI/v4/announcement/announcements_search/index.html"},{"revision":"52aa74858ce10d38276f98f4f4782fb3","url":"docs/developers/api/SimotelAPI/v4/announcement/announcements_upload/index.html"},{"revision":"057f2070d1d5dac860432be9c7cad023","url":"docs/developers/api/SimotelAPI/v4/blacklist/blacklist_add/index.html"},{"revision":"f81e0f1345db58ae1c48ee2eefdc56b7","url":"docs/developers/api/SimotelAPI/v4/blacklist/blacklist_edit/index.html"},{"revision":"04c3ad02f9d933bd31f841f39764137c","url":"docs/developers/api/SimotelAPI/v4/blacklist/blacklist_remove/index.html"},{"revision":"742f6d82730dec891a55508bcd7c200f","url":"docs/developers/api/SimotelAPI/v4/blacklist/blacklist_search/index.html"},{"revision":"713bcc910b91d4ebeca0372c3acb0ad5","url":"docs/developers/api/SimotelAPI/v4/call-originate/index.html"},{"revision":"c90b9f8b33cc1c919a40739a0b564082","url":"docs/developers/api/SimotelAPI/v4/fax/fax_add/index.html"},{"revision":"5e5546fadbf465cae4df9c0230e5a13c","url":"docs/developers/api/SimotelAPI/v4/fax/fax_download/index.html"},{"revision":"f38df91d0eb12cb104085d14f4c73baf","url":"docs/developers/api/SimotelAPI/v4/fax/fax_search/index.html"},{"revision":"383cd5364857d94174e53f5be586b9fd","url":"docs/developers/api/SimotelAPI/v4/fax/fax_upload/index.html"},{"revision":"d0b0ea7959d450be03d261b8e6288386","url":"docs/developers/api/SimotelAPI/v4/introapi/index.html"},{"revision":"811c7e5dea7a22c2eed92d45f295e932","url":"docs/developers/api/SimotelAPI/v4/musiconhold/musiconhold_search/index.html"},{"revision":"2cf6d80492bbe9e278b4afcdd694dfbd","url":"docs/developers/api/SimotelAPI/v4/ping/index.html"},{"revision":"07254a7d1137d8fdfb0f15350b27b347","url":"docs/developers/api/SimotelAPI/v4/queues/queue_addagent/index.html"},{"revision":"4e5669cde3140b9bb4ad9dc253463e25","url":"docs/developers/api/SimotelAPI/v4/queues/queue_batchaddagent/index.html"},{"revision":"bed0bccf24e4376959df0a27ea7c32aa","url":"docs/developers/api/SimotelAPI/v4/queues/queue_batchpauseagent/index.html"},{"revision":"42ccfe5a30d386c8248f5bef9515da9f","url":"docs/developers/api/SimotelAPI/v4/queues/queue_batchremoveagent/index.html"},{"revision":"72622b056da89e3c8c72c52e76a2a4b9","url":"docs/developers/api/SimotelAPI/v4/queues/queue_batchresumagent/index.html"},{"revision":"538552c8d6a663f2b05b1eebc3b42d67","url":"docs/developers/api/SimotelAPI/v4/queues/queue_pauseagent/index.html"},{"revision":"43201979fb2385e42e1e3787cd4e5ed8","url":"docs/developers/api/SimotelAPI/v4/queues/queue_removeagent/index.html"},{"revision":"b19f60d112ff3cf6b7ec1b7ad5b46514","url":"docs/developers/api/SimotelAPI/v4/queues/queue_resumagent/index.html"},{"revision":"1ced7534a7eb32d5b103369fdbcbe178","url":"docs/developers/api/SimotelAPI/v4/queues/queues_add/index.html"},{"revision":"a54d2efa04b696d12e6abd9029ee54f4","url":"docs/developers/api/SimotelAPI/v4/queues/queues_edit/index.html"},{"revision":"9b690973dd21fdad8f536c73c0dd569a","url":"docs/developers/api/SimotelAPI/v4/queues/queues_remove/index.html"},{"revision":"5381580992accbafa8f12d7a69f2a007","url":"docs/developers/api/SimotelAPI/v4/queues/queues_search/index.html"},{"revision":"f016eb41d6f23f92cc0c64175d9eb4d6","url":"docs/developers/api/SimotelAPI/v4/report/agent_search/index.html"},{"revision":"c77d76ed83cdb8333d99d5e8e1369de3","url":"docs/developers/api/SimotelAPI/v4/report/audio_download/index.html"},{"revision":"e72c496beb9286cbc2846661cc80121d","url":"docs/developers/api/SimotelAPI/v4/report/queue_details_ordered_id/index.html"},{"revision":"e6a52327916f24b44176678baf0e8537","url":"docs/developers/api/SimotelAPI/v4/report/queue_details_search/index.html"},{"revision":"cdabdfbc446238779a38e2b21528f0b9","url":"docs/developers/api/SimotelAPI/v4/report/queue_search_ordered_id/index.html"},{"revision":"cc13c4be2a5fc5011e32a47bf06188f1","url":"docs/developers/api/SimotelAPI/v4/report/queue_search/index.html"},{"revision":"54b495b25e37773a3f5e203682c8cc19","url":"docs/developers/api/SimotelAPI/v4/report/quick_info/index.html"},{"revision":"2a827cb1763c4e7ff8a94b612845aa70","url":"docs/developers/api/SimotelAPI/v4/report/quick_search/index.html"},{"revision":"484e2a9ebe3071a01fb93353cad837b2","url":"docs/developers/api/SimotelAPI/v4/report/report_cdr_ordered_id/index.html"},{"revision":"7b39741602c4b9af480044c4afe756a1","url":"docs/developers/api/SimotelAPI/v4/report/report_cdr_search/index.html"},{"revision":"562b1ac648f580a07d669e4f15e0a184","url":"docs/developers/api/SimotelAPI/v4/report/report_poll/index.html"},{"revision":"c48255c6169470dd7f32fb84ca2872af","url":"docs/developers/api/SimotelAPI/v4/settings/index.html"},{"revision":"0386d60b73850603b227cb6e22a33fa8","url":"docs/developers/api/SimotelAPI/v4/trunks/trunks_add/index.html"},{"revision":"c7ac2863556652b3a2f81e345c534a4f","url":"docs/developers/api/SimotelAPI/v4/trunks/trunks_edit/index.html"},{"revision":"8b0bd4603b61883a2bfc71ccb7a01fba","url":"docs/developers/api/SimotelAPI/v4/trunks/trunks_remove/index.html"},{"revision":"b34749d39c5b1a9eca4df89168ac2139","url":"docs/developers/api/SimotelAPI/v4/trunks/trunks_search/index.html"},{"revision":"4d65568f87a8ba1aac8ff9b03530cecd","url":"docs/developers/api/SimotelAPI/v4/users/users_add/index.html"},{"revision":"a7bc3985a0ab7126e1a31213d6157087","url":"docs/developers/api/SimotelAPI/v4/users/users_edit/index.html"},{"revision":"b57b15ec638f852892afd4c59fe302f6","url":"docs/developers/api/SimotelAPI/v4/users/users_remove/index.html"},{"revision":"022ee89afb81ffaa646c7dbeba79d7eb","url":"docs/developers/api/SimotelAPI/v4/users/users_search/index.html"},{"revision":"8a2854a96d0f0f634b8a7c3355f70429","url":"docs/developers/api/SimotelAPI/v4/voicemail/inbox_download/index.html"},{"revision":"44a43c4e3fec975712c2f592e3f9ebbd","url":"docs/developers/api/SimotelAPI/v4/voicemail/inbox_search/index.html"},{"revision":"51a0e84350d7542b5c17f1a26ee5e568","url":"docs/developers/api/SimotelAPI/v4/voicemail/voicemail_add/index.html"},{"revision":"9e4d22fa3830f9821382a09acf0267dc","url":"docs/developers/api/SimotelAPI/v4/voicemail/voicemail_edit/index.html"},{"revision":"bca5ac0078b8165314f836273c6f9fcc","url":"docs/developers/api/SimotelAPI/v4/voicemail/voicemail_remove/index.html"},{"revision":"daba9889a48cae946b09d1a3ddb1094d","url":"docs/developers/api/SimotelAPI/v4/voicemail/voicemail_search/index.html"},{"revision":"d3de50029bb738c648a241bea9e60bce","url":"docs/developers/api/SimotelAPI/v4/whatis/index.html"},{"revision":"ebb9fc27a159ac6fbbdb4dbc560d6148","url":"docs/developers/api/SimotelAPI/v4/whitelist/whitelist_add/index.html"},{"revision":"54637a2503ab52c7bd3ae7ee98b16f8d","url":"docs/developers/api/SimotelAPI/v4/whitelist/whitelist_edit/index.html"},{"revision":"dfe6d027242c7fd241bea365b42f0da6","url":"docs/developers/api/SimotelAPI/v4/whitelist/whitelist_remove/index.html"},{"revision":"7a3cb831f13957b0aeedc99e15e08d49","url":"docs/developers/api/SimotelAPI/v4/whitelist/whitelist_search/index.html"},{"revision":"3038df3fbfa656e2b56fb838175ede9a","url":"docs/developers/api/SimotelWebhooks/DialplanApiComponents/exten_api/index.html"},{"revision":"2552745cefd5465b7094171c36f991b5","url":"docs/developers/api/SimotelWebhooks/DialplanApiComponents/ivr_api/index.html"},{"revision":"467a5354da54f9f88d651962adb22e20","url":"docs/developers/api/SimotelWebhooks/DialplanApiComponents/setting/index.html"},{"revision":"05fcc5bf80e2f0c43d185147e8b1fd87","url":"docs/developers/api/SimotelWebhooks/DialplanApiComponents/smart_api/index.html"},{"revision":"28aee98eeb4c7d0a8bcfd6c368234d20","url":"docs/developers/api/SimotelWebhooks/DialplanApiComponents/trunk_api/index.html"},{"revision":"d1b4405e068936e43b1b6082ee74c446","url":"docs/developers/api/SimotelWebhooks/DialplanApiComponents/whatis/index.html"},{"revision":"a67043cc53995d4d3176a7fdd1b7a449","url":"docs/developers/api/SimotelWebhooks/Events/AutoDialerReport/index.html"},{"revision":"52b28e3a12d3689302d09880bf0dd8ea","url":"docs/developers/api/SimotelWebhooks/Events/cdr_queue/index.html"},{"revision":"2055ab71f0bf5cd776d16ac2223040d3","url":"docs/developers/api/SimotelWebhooks/Events/cdr/index.html"},{"revision":"233d2471f5899693bcacdb38b0d08130","url":"docs/developers/api/SimotelWebhooks/Events/exten_added/index.html"},{"revision":"9e244672f6332319aa5def6b86bb5293","url":"docs/developers/api/SimotelWebhooks/Events/exten_remove/index.html"},{"revision":"02ee3c30bf17c7aaff48cb856ace5fb0","url":"docs/developers/api/SimotelWebhooks/Events/incoming_call/index.html"},{"revision":"0d9a2f7a79775f0b84adeb9ae2080270","url":"docs/developers/api/SimotelWebhooks/Events/incoming_fax/index.html"},{"revision":"139bdd01a6ad651a4c7b5839824a8112","url":"docs/developers/api/SimotelWebhooks/Events/new_state/index.html"},{"revision":"bbd8ccf4d3ab2ecf8ff21bc23c99fd37","url":"docs/developers/api/SimotelWebhooks/Events/outgoing_call/index.html"},{"revision":"8bd23bcd69925ff3b6df1acfffe591b2","url":"docs/developers/api/SimotelWebhooks/Events/outgoing_fax/index.html"},{"revision":"43ed6c7fc14c41c0e9d771094e98ea6e","url":"docs/developers/api/SimotelWebhooks/Events/setting/index.html"},{"revision":"9a25e1bbbabdadc58b2c49ae1065e9e0","url":"docs/developers/api/SimotelWebhooks/Events/survey/index.html"},{"revision":"ff1a7284759a7b342af4ec0eaa4f25f8","url":"docs/developers/api/SimotelWebhooks/Events/transfer/index.html"},{"revision":"9bdb67726229bc64846c92b2c1ab5fe5","url":"docs/developers/api/SimotelWebhooks/Events/TrunkAdded/index.html"},{"revision":"8d101661530ed7e2300546198611233b","url":"docs/developers/api/SimotelWebhooks/Events/TrunkNewState/index.html"},{"revision":"649c20f624ebb7ebecf8e045c662dbee","url":"docs/developers/api/SimotelWebhooks/Events/TrunkRemoved/index.html"},{"revision":"6a841781dc5dd0c08a1e88b49a15ce7b","url":"docs/developers/api/SimotelWebhooks/Events/voicemail_email/index.html"},{"revision":"3f56e09f58d7488a182ac3896d58ab09","url":"docs/developers/api/SimotelWebhooks/Events/voicemail/index.html"},{"revision":"c76c772d6b275a6f01e4ac8cc1b157f6","url":"docs/developers/api/SimotelWebhooks/Events/whatis/index.html"},{"revision":"7fd74881fd96387b8d53266202b791ff","url":"docs/developers/api/SimotelWebhooks/whatis/index.html"},{"revision":"c246ed79fffaa77d529230a7b888fa08","url":"docs/developers/two_verify/service_activate/index.html"},{"revision":"cd249ef9227017be21a8aceeb1d646a1","url":"docs/developers/two_verify/template_sms/index.html"},{"revision":"4cdf59cd47e7fa11b0fe8a631f548b32","url":"docs/developers/two_verify/whatis/index.html"},{"revision":"208d605077841ce6673a0cfd28e1299c","url":"docs/index.html"},{"revision":"2233316b5841f5399cd5fb94ca02894f","url":"docs/simotel/advance-settings/call_record_storage/index.html"},{"revision":"b3a8afd9b8556ef002ba229f4b5557f5","url":"docs/simotel/advance-settings/create_ami_user/index.html"},{"revision":"8ca83d522035fe113daa971df632d88f","url":"docs/simotel/advance-settings/ha-service/intro/index.html"},{"revision":"f664d48024f80de147576480134eb853","url":"docs/simotel/advance-settings/matchpattern/index.html"},{"revision":"086f8157928d0658906109bc1c52b97d","url":"docs/simotel/advance-settings/simotel.ini/index.html"},{"revision":"0c5c3199c85f1a46ffc938f6550ef3b3","url":"docs/simotel/advance-settings/simotelhelper_tool/index.html"},{"revision":"8682685332cd90b9490d750a7f35e0e1","url":"docs/simotel/advance-settings/simotelupdate/index.html"},{"revision":"5cb49233f968f119e1793965a63f2a21","url":"docs/simotel/callcenter-docs/control-panel/backup/index.html"},{"revision":"5f94eabe53ace09391718b6b0059f83a","url":"docs/simotel/callcenter-docs/control-panel/ha_logs/index.html"},{"revision":"1de80a56aaabf551254dacbe1492145d","url":"docs/simotel/callcenter-docs/control-panel/ha/index.html"},{"revision":"d77451fd4ead0e07a7696094c050440b","url":"docs/simotel/callcenter-docs/control-panel/pbx_cli/index.html"},{"revision":"3e91c10e0765f7f5ed25c70d0a1e3de5","url":"docs/simotel/callcenter-docs/dashboard/general_components/index.html"},{"revision":"5e3bc75b78a6afd34c8a05e1014020ae","url":"docs/simotel/callcenter-docs/dashboard/intro/index.html"},{"revision":"c9156dddb1caf61bc9c33fc8196055fe","url":"docs/simotel/callcenter-docs/dashboard/queue_components/index.html"},{"revision":"d28dec7bb2e27f5de49365853fc02f1a","url":"docs/simotel/callcenter-docs/dashboard/realtime_components/index.html"},{"revision":"828735d394a73f48ead72466ffba093d","url":"docs/simotel/callcenter-docs/dialplan/components/agi/index.html"},{"revision":"9992f2fba9b6488822cc3e0cf6ab6852","url":"docs/simotel/callcenter-docs/dialplan/components/announcements/index.html"},{"revision":"8e25a4c9c2f8682a92751cbf34c7f71e","url":"docs/simotel/callcenter-docs/dialplan/components/answer/index.html"},{"revision":"4f835045e7292d9c2aca47b2a9911428","url":"docs/simotel/callcenter-docs/dialplan/components/authentication/index.html"},{"revision":"ed134aec83889c0ef7c3fea44eae2ce1","url":"docs/simotel/callcenter-docs/dialplan/components/autodialer_route/index.html"},{"revision":"a294cf4b9d8c77432a98e60b1271be8b","url":"docs/simotel/callcenter-docs/dialplan/components/blacklist/index.html"},{"revision":"923db872a0f632c193fb9e7880a03384","url":"docs/simotel/callcenter-docs/dialplan/components/call_completion/index.html"},{"revision":"4f008312005f9e47630486e1c1432154","url":"docs/simotel/callcenter-docs/dialplan/components/callback/index.html"},{"revision":"c060f82b61f22884a34d60c9b8f067db","url":"docs/simotel/callcenter-docs/dialplan/components/chanspy/index.html"},{"revision":"2d2292c7c157e45b1fb71acd38c9d986","url":"docs/simotel/callcenter-docs/dialplan/components/conference/index.html"},{"revision":"ab24e50870d29674fe096b33faecf301","url":"docs/simotel/callcenter-docs/dialplan/components/corrector/index.html"},{"revision":"62238fc030853d20210dfacb2333ddaf","url":"docs/simotel/callcenter-docs/dialplan/components/custom_plan/index.html"},{"revision":"966b170138d941a5699a6f1477d73afa","url":"docs/simotel/callcenter-docs/dialplan/components/disa/index.html"},{"revision":"c7fd9736d0be12ffca6d1ddbfd475fbd","url":"docs/simotel/callcenter-docs/dialplan/components/extension_api/index.html"},{"revision":"3234573dcbdbfbb1e1a7bf7aceb444bd","url":"docs/simotel/callcenter-docs/dialplan/components/extension/index.html"},{"revision":"e40a59424613382a9370d181d45d9bcc","url":"docs/simotel/callcenter-docs/dialplan/components/followe_me/index.html"},{"revision":"47af0ad807b21ca964e4052978b2cda0","url":"docs/simotel/callcenter-docs/dialplan/components/incoming_route/index.html"},{"revision":"12db034fe241a3647c04efba2e470a07","url":"docs/simotel/callcenter-docs/dialplan/components/ivr_api/index.html"},{"revision":"affec75dd02267fc836ddfd6bb28f834","url":"docs/simotel/callcenter-docs/dialplan/components/ivr/index.html"},{"revision":"f8187b32df317dad717d6ca8aee522bc","url":"docs/simotel/callcenter-docs/dialplan/components/jump_in/index.html"},{"revision":"8b6641cf34ef1238d4af58bc8a551793","url":"docs/simotel/callcenter-docs/dialplan/components/jump_out/index.html"},{"revision":"e2a91e7e140ebd40057d236e8fee35c4","url":"docs/simotel/callcenter-docs/dialplan/components/mix_monitor/index.html"},{"revision":"0ab8860763d1d66803f23d3e1faf9faf","url":"docs/simotel/callcenter-docs/dialplan/components/outgoing_route/index.html"},{"revision":"db592776af617c9fcb7cb65a0c74f374","url":"docs/simotel/callcenter-docs/dialplan/components/page/index.html"},{"revision":"a3d872e7c41116f3c98a0dcaacee3bcd","url":"docs/simotel/callcenter-docs/dialplan/components/pickup/index.html"},{"revision":"0e37daf70253e836fcba5c469587ef28","url":"docs/simotel/callcenter-docs/dialplan/components/poll/index.html"},{"revision":"3cdda8933ad57cb5bc4791ed9347e0bb","url":"docs/simotel/callcenter-docs/dialplan/components/queue/index.html"},{"revision":"9529f8814b2acf48ef9e1f879ffd7002","url":"docs/simotel/callcenter-docs/dialplan/components/ring_group/index.html"},{"revision":"3a214bd7ec727c7964b266826045ceba","url":"docs/simotel/callcenter-docs/dialplan/components/smart_api/index.html"},{"revision":"0bdee1328cca71039bdf08d27034c097","url":"docs/simotel/callcenter-docs/dialplan/components/spit_detection/index.html"},{"revision":"ccb9d8ba4f4f4d0543d0e7d376a3d3e8","url":"docs/simotel/callcenter-docs/dialplan/components/time_condition/index.html"},{"revision":"a0a417f9079268a2136a779930b103e6","url":"docs/simotel/callcenter-docs/dialplan/components/trunk_api/index.html"},{"revision":"78ac44e4c9f776542e166b9a419638c2","url":"docs/simotel/callcenter-docs/dialplan/components/trunk/index.html"},{"revision":"09faf95f752a2717d9c0dc164636862f","url":"docs/simotel/callcenter-docs/dialplan/components/voicemail/index.html"},{"revision":"0b83c1ae4b1e210c0e249fa8947451dd","url":"docs/simotel/callcenter-docs/dialplan/components/whitelist/index.html"},{"revision":"65bb845dc0daed043a073a32581c66a8","url":"docs/simotel/callcenter-docs/dialplan/intro/index.html"},{"revision":"b5d9487e816fb068ce75d9ca7bdc2780","url":"docs/simotel/callcenter-docs/dialplan/variables/index.html"},{"revision":"7dda391d730e4ecdd7f4c33a5e66f22f","url":"docs/simotel/callcenter-docs/maintenance/account_type/index.html"},{"revision":"2713f68329c9a15f918e12bc15563135","url":"docs/simotel/callcenter-docs/maintenance/accounts/index.html"},{"revision":"4336987ee03d1faa5ee868a19982d33e","url":"docs/simotel/callcenter-docs/maintenance/activity_log/index.html"},{"revision":"699a4e03247cca1c51c0251cecad121e","url":"docs/simotel/callcenter-docs/maintenance/api_accounts/index.html"},{"revision":"553033552e02f2e0616599a7215b76df","url":"docs/simotel/callcenter-docs/maintenance/api_logs/index.html"},{"revision":"1faff2bc966e75ce32d78f0cfc5d6078","url":"docs/simotel/callcenter-docs/maintenance/groups/index.html"},{"revision":"4fc9ca0496127ff70f6a0ef492839164","url":"docs/simotel/callcenter-docs/maintenance/network/index.html"},{"revision":"a402a35b1ee986fcc85250f7fc893fc8","url":"docs/simotel/callcenter-docs/maintenance/server_status/index.html"},{"revision":"563fa51fbdb9b9aa753cf4a1ab749947","url":"docs/simotel/callcenter-docs/maintenance/settings/api_settings/index.html"},{"revision":"56d2a542363edc119f883b8d04d047f2","url":"docs/simotel/callcenter-docs/maintenance/settings/backup_drive/index.html"},{"revision":"1195b2df6812616518d6278a35ac1483","url":"docs/simotel/callcenter-docs/maintenance/settings/general_settings/index.html"},{"revision":"5bf8ba0a76f47008db85e9d2ea9f8042","url":"docs/simotel/callcenter-docs/maintenance/settings/mail_server/index.html"},{"revision":"3ff076774cc9a1b9fee064f243da1f49","url":"docs/simotel/callcenter-docs/maintenance/settings/more_settings/index.html"},{"revision":"0a4b1263e9f78e21bed82eb719f47350","url":"docs/simotel/callcenter-docs/maintenance/settings/push_notification/index.html"},{"revision":"9a8967121a7d60da17aace48ce26fb4f","url":"docs/simotel/callcenter-docs/maintenance/settings/update/index.html"},{"revision":"3258d9d2e341c2863745654a2c9a0772","url":"docs/simotel/callcenter-docs/maintenance/system_logs/index.html"},{"revision":"a134633dc96679422273009733790ad0","url":"docs/simotel/callcenter-docs/monitor/exten/index.html"},{"revision":"35fb3ec7d660e06c795436ba8066cb7a","url":"docs/simotel/callcenter-docs/monitor/operator/index.html"},{"revision":"e1807f6cc3a50d2b02709faa85a3d853","url":"docs/simotel/callcenter-docs/pbx/announcements/index.html"},{"revision":"5c4304f88667e15df100b514350e8890","url":"docs/simotel/callcenter-docs/pbx/blacklist/index.html"},{"revision":"94c0cdd400c8bb751c2e3ec95d96f35c","url":"docs/simotel/callcenter-docs/pbx/faxes/index.html"},{"revision":"5a1c0efb04e5485a466a0935a950347e","url":"docs/simotel/callcenter-docs/pbx/featur_codes/index.html"},{"revision":"408fa13ccb46caefea9226f8137aee02","url":"docs/simotel/callcenter-docs/pbx/groups/index.html"},{"revision":"fea873969cbe842cde63a13ceb0590b6","url":"docs/simotel/callcenter-docs/pbx/music_on_hold/index.html"},{"revision":"7d41d90214dca0b84f6ae77d0fe3c4ed","url":"docs/simotel/callcenter-docs/pbx/queues/index.html"},{"revision":"2d8021b9938e0027b3035583133c4b16","url":"docs/simotel/callcenter-docs/pbx/speed_dial/index.html"},{"revision":"af43083dd2ee941779a527c52389a22b","url":"docs/simotel/callcenter-docs/pbx/trunks/index.html"},{"revision":"ef7db2390cd362cdf79da1204ceb7020","url":"docs/simotel/callcenter-docs/pbx/users/index.html"},{"revision":"b90cf946465c43e95dc00b9a3bbdbd29","url":"docs/simotel/callcenter-docs/pbx/white_list/index.html"},{"revision":"225444bd1dae75daf02c419e5cf2f469","url":"docs/simotel/callcenter-docs/reports/advanced_report/index.html"},{"revision":"3430ed1c1d031cf48e711d5cd1f08301","url":"docs/simotel/callcenter-docs/reports/custom_report/index.html"},{"revision":"61c470046905e2750de0e16a0dc562c2","url":"docs/simotel/callcenter-docs/reports/filter/index.html"},{"revision":"c5be4f45b18ec380a1ffde31acfd2266","url":"docs/simotel/callcenter-docs/reports/intro/index.html"},{"revision":"b590da0e6131bc363e1a78f82fbaef0b","url":"docs/simotel/callcenter-docs/reports/quick_report/index.html"},{"revision":"d5ef75b3ee4f4c292a6e3d56ee9bc62d","url":"docs/simotel/callcenter-docs/spit-detection/auto_spit_detect/index.html"},{"revision":"10ffc744c73c2426a8028a4989f7bf62","url":"docs/simotel/callcenter-docs/spit-detection/intro/index.html"},{"revision":"2573fc6c2c471031c735a99d7b842ab2","url":"docs/simotel/callcenter-docs/spit-detection/spit_detect/index.html"},{"revision":"3a5fdcef4372b90acec2dd29d4d34aa1","url":"docs/simotel/callcenter-docs/voicemail/inbox/index.html"},{"revision":"8590554a018e62064101ca66e4268d36","url":"docs/simotel/callcenter-docs/voicemail/voice_mailboxes/index.html"},{"revision":"d5b9f831e34c1ebea9a5689acdd36c1d","url":"docs/simotel/system-intro/dialplanintro/index.html"},{"revision":"08eb895a1133646f7589439a4c2d876d","url":"docs/simotel/system-intro/pbxsettingintro/index.html"},{"revision":"339a6beab83bbca9d22d02e67e9b4495","url":"file/Simotel_V3.edition_11.postman_collection.json"},{"revision":"62ade16bfd243f54fb895db4987a8249","url":"file/Simotel_V3.edition_12.postman_collection.json"},{"revision":"d9f1e04004019251545e88d2a06f5bb8","url":"file/Simotel_V3.edition_14.postman_collection.json"},{"revision":"99afec3cd6a95437da0c86fb638c2bbc","url":"img/setLanguageClass.js"},{"revision":"29940e33c3e4677be88d0c454bd7c6c4","url":"index.html"},{"revision":"b8f6b59f5daa6e37f3cfb0911112a732","url":"intro-softphone/2021/06/28/Microsip/index.html"},{"revision":"a54bfe84ca5d86fe486f0d4fc74b0b4c","url":"intro-softphone/2021/06/29/Zoiper/index.html"},{"revision":"40b81429b5c0320506d6ba8fd4fd96ed","url":"intro-softphone/2021/07/01/Grandstream Wave/index.html"},{"revision":"c9e7b2813d21ab0f044ae32bcbc75348","url":"intro-softphone/archive/index.html"},{"revision":"97dd65261c32c134ecb23c279d530fbc","url":"intro-softphone/index.html"},{"revision":"cc398c9bf8bfe1bfdf221a5309fae179","url":"manifest.json"},{"revision":"f4e5d69e53e205293b60d40a996c6e02","url":"markdown-page/index.html"},{"revision":"2e763882fe2fd6650b91fc93f64e1036","url":"search/index.html"},{"revision":"90d5da7368e4644f5d7efa4a2be9c52f","url":"assets/images/1-119365bc00a13c3fe7af46663f738a6c.jpg"},{"revision":"01b36ce1614438786401c80925d58512","url":"assets/images/1-eddb4decf10fb658003fa3d1402f83a9.png"},{"revision":"12e4e1c9bbef922571dd3a6a8c2f0ae0","url":"assets/images/10-de627b6a365d59f7f240bc94dac9ad19.png"},{"revision":"ada97ca88d4fa2f489cabad460f18566","url":"assets/images/2-4c573781b54b5b2311f72c3790ea378c.jpg"},{"revision":"085d2942ae9597e15ff7929b73116b70","url":"assets/images/2-b6dea3207988624c3e47777594b26ae2.png"},{"revision":"f10d300f75a144ddd16149df44c87298","url":"assets/images/3-295ce2e3c5bf68b8a7b467afc049c888.png"},{"revision":"9f8d531a060b0049d695047983a8fef0","url":"assets/images/3-55029783d9f4bd6b1526e057839a67bd.jpg"},{"revision":"7bfdcf6ac54e1c5e16eea7200af7ee96","url":"assets/images/4-b13c7ed5a256aed8ea30d762832b1396.png"},{"revision":"1777a4bc9957864383f06e7b096267f7","url":"assets/images/4-c4f930ddc8dcaba301d9b46d9fe4a699.jpg"},{"revision":"8986980d867fd92ff555e8f2808a77f9","url":"assets/images/5-4c6509ce125569232f55ae898741e210.png"},{"revision":"d9c7f0279d9ff3b61ec61eda9e1f9bcd","url":"assets/images/5-ea99856c1dbafffd6fa92af4bbdf5f4d.jpg"},{"revision":"8c43b6964bc6a826cd53be567b3228cc","url":"assets/images/6-02caae80693d2e262d5105597ef154ca.png"},{"revision":"3c90db03adb568b210336bc79595feab","url":"assets/images/7-f647be2d89535d380276eeb48314db21.png"},{"revision":"7edcfa1caa48a9ba8235f37c98318a6a","url":"assets/images/8-2f8769388db4350eed9e5fbaf4b81e1b.png"},{"revision":"a389ad9de89aea626341c66e3c502f31","url":"assets/images/9-10ff03bc468f4d9851a17ae8d3a07aaa.png"},{"revision":"e036d9381512e2abdfdd809cd5e56167","url":"assets/images/compontnetprop-07f67e578338634981b99fe771425e05.png"},{"revision":"113ece430542ac97b147e42efc8adc7e","url":"assets/images/dialplan-bca9d94c5f2bd2d7881a98d54be854ec.png"},{"revision":"8719e08f1e140bfafb67283d72772684","url":"assets/images/exten-api-610031a279191701a718c414395fa502.png"},{"revision":"e36e0350b237429fef2f71d7d99ec290","url":"assets/images/exten-ee82329a8a046536f6f869cea162df6a.png"},{"revision":"e36e0350b237429fef2f71d7d99ec290","url":"assets/images/monitoring-ee82329a8a046536f6f869cea162df6a.png"},{"revision":"54769c619961fde2ff4be63d2f85b52d","url":"assets/images/NPS-04f683ac16a22173c2e850c854c071f4.png"},{"revision":"1ff316491da044091b3e195f268fb77e","url":"assets/images/operator-c05f1dbded54c2bb156d32264f41f8cf.png"},{"revision":"1d4f390b648b8d451f0c434d51fcb212","url":"assets/images/simotel-integrations-9291540270ad1fd33f3929828771333d.png"},{"revision":"8719e08f1e140bfafb67283d72772684","url":"img/api/exten-api.png"},{"revision":"1d4f390b648b8d451f0c434d51fcb212","url":"img/api/simotel-integrations.png"},{"revision":"e036d9381512e2abdfdd809cd5e56167","url":"img/compontnetprop.png"},{"revision":"113ece430542ac97b147e42efc8adc7e","url":"img/dialplan.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"015256607b18ff03bd5747b04ce45d5f","url":"img/LogoSimotel.svg"},{"revision":"5af0eb0b1609e42f4354267a99f570b3","url":"img/LogoSimotel128.png"},{"revision":"0166ec91500538f0aa4e37a70cd1be54","url":"img/LogoSimotel144.png"},{"revision":"cfe432b55d1796738542b36a64294793","url":"img/LogoSimotel152.png"},{"revision":"790b6e1a7f6dc310a4595adde045f866","url":"img/LogoSimotel180.png"},{"revision":"849cc64d19caf2a373a9e5fd485675a7","url":"img/LogoSimotel192.png"},{"revision":"e4a61930515e65fde4257f2b89cf78af","url":"img/LogoSimotel196.png"},{"revision":"87c20c50e71cc3f1c74736c322932527","url":"img/LogoSimotel384.png"},{"revision":"da40568d0d2c2c1fcc430219ad40763a","url":"img/LogoSimotel512.png"},{"revision":"a9d4c5726f5e0ea86992734a3e9608f6","url":"img/LogoSimotel72.png"},{"revision":"f72ef3aa93873d185305f93e49e95956","url":"img/LogoSimotel96.png"},{"revision":"e36e0350b237429fef2f71d7d99ec290","url":"img/monitoring.png"},{"revision":"13d487cf3a040597e68beb5360af55da","url":"img/newSimotelFavIcon.svg"},{"revision":"bee3d5ad7fc9dc9cb2d35ac1317ae568","url":"img/Simotel.png"},{"revision":"01b36ce1614438786401c80925d58512","url":"img/simotel/backup_ftp_dropbox/1.png"},{"revision":"12e4e1c9bbef922571dd3a6a8c2f0ae0","url":"img/simotel/backup_ftp_dropbox/10.png"},{"revision":"085d2942ae9597e15ff7929b73116b70","url":"img/simotel/backup_ftp_dropbox/2.png"},{"revision":"f10d300f75a144ddd16149df44c87298","url":"img/simotel/backup_ftp_dropbox/3.png"},{"revision":"7bfdcf6ac54e1c5e16eea7200af7ee96","url":"img/simotel/backup_ftp_dropbox/4.png"},{"revision":"8986980d867fd92ff555e8f2808a77f9","url":"img/simotel/backup_ftp_dropbox/5.png"},{"revision":"8c43b6964bc6a826cd53be567b3228cc","url":"img/simotel/backup_ftp_dropbox/6.png"},{"revision":"3c90db03adb568b210336bc79595feab","url":"img/simotel/backup_ftp_dropbox/7.png"},{"revision":"7edcfa1caa48a9ba8235f37c98318a6a","url":"img/simotel/backup_ftp_dropbox/8.png"},{"revision":"a389ad9de89aea626341c66e3c502f31","url":"img/simotel/backup_ftp_dropbox/9.png"},{"revision":"90d5da7368e4644f5d7efa4a2be9c52f","url":"img/simotel/mail_server/1.jpg"},{"revision":"ada97ca88d4fa2f489cabad460f18566","url":"img/simotel/mail_server/2.jpg"},{"revision":"9f8d531a060b0049d695047983a8fef0","url":"img/simotel/mail_server/3.jpg"},{"revision":"1777a4bc9957864383f06e7b096267f7","url":"img/simotel/mail_server/4.jpg"},{"revision":"d9c7f0279d9ff3b61ec61eda9e1f9bcd","url":"img/simotel/mail_server/5.jpg"},{"revision":"e36e0350b237429fef2f71d7d99ec290","url":"img/simotel/monitor/exten.png"},{"revision":"1ff316491da044091b3e195f268fb77e","url":"img/simotel/monitor/operator.png"},{"revision":"54769c619961fde2ff4be63d2f85b52d","url":"img/simotel/NPS.png"},{"revision":"c4dbdad1dfd97d681b8971bb13f6fbd9","url":"img/simotel/server_status.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"23206871296d5f4352d784b99826c5e4","url":"img/undraw_All_the_data_re_hh4w.svg"},{"revision":"5cc84e9af91d4a39a41e1360c224d907","url":"img/undraw_building_websites_i78t.svg"},{"revision":"436c2d8e6539042f873648d8f265c23d","url":"img/undraw_Dashboard_re_3b76.svg"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"a29c523b038efb4caa5bf37154e1cb8b","url":"img/undraw_Growth_analytics_re_pyxf.svg"},{"revision":"ea0968dcee21f5e5ada22ec622cb3733","url":"assets/fonts/Vazir-0236d12799f12ebefd2d1451b6ba69f2.woff2"},{"revision":"00dac7548bf7493c9042ad817d34cd46","url":"assets/fonts/Vazir-04fa21193336c3e1fa9870b7bd2face5.eot"},{"revision":"398b39dd0060814801cd1cbfe43fe0b5","url":"assets/fonts/Vazir-8698ab7164cb8aa9f35b0df0e3a335df.ttf"},{"revision":"331c39315fd661b27d8bba271fdb3fc0","url":"assets/fonts/Vazir-a30b9598c58099f1584cd2e1d074004b.woff"},{"revision":"0c503e15fdffeb5b465760486d0472f9","url":"assets/fonts/Vazir-Bold-06faa6ed072a10f151d8db83147c2ca0.woff2"},{"revision":"380d3338b01136a559e4577698318597","url":"assets/fonts/Vazir-Bold-a8b2710684121888389b71a87b83b17e.eot"},{"revision":"8cea4a72681429a50b77de1d8aa609f3","url":"assets/fonts/Vazir-Bold-aaa531a9e9300b26225d6408fec0aa37.ttf"},{"revision":"06d42e475259e543806e34cde62f444e","url":"assets/fonts/Vazir-Bold-cf91a7a6bcfa78aad30637407393cba7.woff"},{"revision":"380d3338b01136a559e4577698318597","url":"fonts/Vazir-Bold.eot"},{"revision":"8cea4a72681429a50b77de1d8aa609f3","url":"fonts/Vazir-Bold.ttf"},{"revision":"06d42e475259e543806e34cde62f444e","url":"fonts/Vazir-Bold.woff"},{"revision":"0c503e15fdffeb5b465760486d0472f9","url":"fonts/Vazir-Bold.woff2"},{"revision":"ee181cac89371b32c84ed24e7677a9cb","url":"fonts/Vazir-Light.eot"},{"revision":"00f48b2a2bde26034df6e71ef3efadfe","url":"fonts/Vazir-Light.ttf"},{"revision":"6c0a5ff35524caf9299877ad884e4733","url":"fonts/Vazir-Light.woff"},{"revision":"d0a69cd04643602985210637d7dc3537","url":"fonts/Vazir-Light.woff2"},{"revision":"8bcbb741a2779e4e34b729c45f66f28f","url":"fonts/Vazir-Medium.eot"},{"revision":"4a3887b6bfe4ed0fc41834d6e56b71ae","url":"fonts/Vazir-Medium.ttf"},{"revision":"f2bd4a28e444d8f2ac28e9ce07b486b2","url":"fonts/Vazir-Medium.woff"},{"revision":"0a3bc5ee1d3a315a24a1ac791a154823","url":"fonts/Vazir-Medium.woff2"},{"revision":"3827ff8b38103584a840571f6eef219d","url":"fonts/Vazir-Thin.eot"},{"revision":"e514f10989c43e8b8e0d81fac7aad163","url":"fonts/Vazir-Thin.ttf"},{"revision":"7c81b653d9a41b0ae30534af4c13b5c2","url":"fonts/Vazir-Thin.woff"},{"revision":"bb61b0157f216f5f31d8dd3fb58e8b4f","url":"fonts/Vazir-Thin.woff2"},{"revision":"00dac7548bf7493c9042ad817d34cd46","url":"fonts/Vazir.eot"},{"revision":"398b39dd0060814801cd1cbfe43fe0b5","url":"fonts/Vazir.ttf"},{"revision":"331c39315fd661b27d8bba271fdb3fc0","url":"fonts/Vazir.woff"},{"revision":"ea0968dcee21f5e5ada22ec622cb3733","url":"fonts/Vazir.woff2"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

/******/ })()
;
//# sourceMappingURL=sw.js.map