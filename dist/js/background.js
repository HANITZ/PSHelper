/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@octokit/app/dist-web/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@octokit/app/dist-web/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   createNodeMiddleware: () => (/* binding */ createNodeMiddleware)
/* harmony export */ });
/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @octokit/core */ "./node_modules/@octokit/core/dist-web/index.js");
/* harmony import */ var _octokit_auth_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/auth-app */ "./node_modules/@octokit/auth-app/dist-node/index.js");
/* harmony import */ var _octokit_auth_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_octokit_auth_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/oauth-app */ "./node_modules/@octokit/oauth-app/dist-node/index.js");
/* harmony import */ var _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_octokit_oauth_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _octokit_auth_unauthenticated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/auth-unauthenticated */ "./node_modules/@octokit/auth-unauthenticated/dist-web/index.js");
/* harmony import */ var _octokit_webhooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/webhooks */ "./node_modules/@octokit/webhooks/dist-web/index.js");
/* harmony import */ var _octokit_plugin_paginate_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/plugin-paginate-rest */ "./node_modules/@octokit/plugin-paginate-rest/dist-web/index.js");
// pkg/dist-src/index.js





// pkg/dist-src/version.js
var VERSION = "14.0.0";

// pkg/dist-src/webhooks.js




function webhooks(appOctokit, options) {
  return new _octokit_webhooks__WEBPACK_IMPORTED_MODULE_0__.Webhooks({
    secret: options.secret,
    transform: async (event) => {
      if (!("installation" in event.payload) || typeof event.payload.installation !== "object") {
        const octokit2 = new appOctokit.constructor({
          authStrategy: _octokit_auth_unauthenticated__WEBPACK_IMPORTED_MODULE_1__.createUnauthenticatedAuth,
          auth: {
            reason: `"installation" key missing in webhook event payload`
          }
        });
        return {
          ...event,
          octokit: octokit2
        };
      }
      const installationId = event.payload.installation.id;
      const octokit = await appOctokit.auth({
        type: "installation",
        installationId,
        factory(auth) {
          return new auth.octokit.constructor({
            ...auth.octokitOptions,
            authStrategy: _octokit_auth_app__WEBPACK_IMPORTED_MODULE_2__.createAppAuth,
            ...{
              auth: {
                ...auth,
                installationId
              }
            }
          });
        }
      });
      octokit.hook.before("request", (options2) => {
        options2.headers["x-github-delivery"] = event.id;
      });
      return {
        ...event,
        octokit
      };
    }
  });
}

// pkg/dist-src/each-installation.js



// pkg/dist-src/get-installation-octokit.js


async function getInstallationOctokit(app, installationId) {
  return app.octokit.auth({
    type: "installation",
    installationId,
    factory(auth) {
      const options = {
        ...auth.octokitOptions,
        authStrategy: _octokit_auth_app__WEBPACK_IMPORTED_MODULE_2__.createAppAuth,
        ...{ auth: { ...auth, installationId } }
      };
      return new auth.octokit.constructor(options);
    }
  });
}

// pkg/dist-src/each-installation.js
function eachInstallationFactory(app) {
  return Object.assign(eachInstallation.bind(null, app), {
    iterator: eachInstallationIterator.bind(null, app)
  });
}
async function eachInstallation(app, callback) {
  const i = eachInstallationIterator(app)[Symbol.asyncIterator]();
  let result = await i.next();
  while (!result.done) {
    await callback(result.value);
    result = await i.next();
  }
}
function eachInstallationIterator(app) {
  return {
    async *[Symbol.asyncIterator]() {
      const iterator = _octokit_plugin_paginate_rest__WEBPACK_IMPORTED_MODULE_3__.composePaginateRest.iterator(
        app.octokit,
        "GET /app/installations"
      );
      for await (const { data: installations } of iterator) {
        for (const installation of installations) {
          const installationOctokit = await getInstallationOctokit(
            app,
            installation.id
          );
          yield { octokit: installationOctokit, installation };
        }
      }
    }
  };
}

// pkg/dist-src/each-repository.js


function eachRepositoryFactory(app) {
  return Object.assign(eachRepository.bind(null, app), {
    iterator: eachRepositoryIterator.bind(null, app)
  });
}
async function eachRepository(app, queryOrCallback, callback) {
  const i = eachRepositoryIterator(
    app,
    callback ? queryOrCallback : void 0
  )[Symbol.asyncIterator]();
  let result = await i.next();
  while (!result.done) {
    if (callback) {
      await callback(result.value);
    } else {
      await queryOrCallback(result.value);
    }
    result = await i.next();
  }
}
function singleInstallationIterator(app, installationId) {
  return {
    async *[Symbol.asyncIterator]() {
      yield {
        octokit: await app.getInstallationOctokit(installationId)
      };
    }
  };
}
function eachRepositoryIterator(app, query) {
  return {
    async *[Symbol.asyncIterator]() {
      const iterator = query ? singleInstallationIterator(app, query.installationId) : app.eachInstallation.iterator();
      for await (const { octokit } of iterator) {
        const repositoriesIterator = _octokit_plugin_paginate_rest__WEBPACK_IMPORTED_MODULE_3__.composePaginateRest.iterator(
          octokit,
          "GET /installation/repositories"
        );
        for await (const { data: repositories } of repositoriesIterator) {
          for (const repository of repositories) {
            yield { octokit, repository };
          }
        }
      }
    }
  };
}

// pkg/dist-src/middleware/node/index.js


function noop() {
}
function createNodeMiddleware(app, options = {}) {
  const log = Object.assign(
    {
      debug: noop,
      info: noop,
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    },
    options.log
  );
  const optionsWithDefaults = {
    pathPrefix: "/api/github",
    ...options,
    log
  };
  const webhooksMiddleware = (0,_octokit_webhooks__WEBPACK_IMPORTED_MODULE_0__.createNodeMiddleware)(app.webhooks, {
    path: optionsWithDefaults.pathPrefix + "/webhooks",
    log
  });
  const oauthMiddleware = (0,_octokit_oauth_app__WEBPACK_IMPORTED_MODULE_4__.createNodeMiddleware)(app.oauth, {
    pathPrefix: optionsWithDefaults.pathPrefix + "/oauth"
  });
  return middleware.bind(
    null,
    optionsWithDefaults.pathPrefix,
    webhooksMiddleware,
    oauthMiddleware
  );
}
async function middleware(pathPrefix, webhooksMiddleware, oauthMiddleware, request, response, next) {
  const { pathname } = new URL(request.url, "http://localhost");
  if (pathname.startsWith(`${pathPrefix}/`)) {
    if (pathname === `${pathPrefix}/webhooks`) {
      webhooksMiddleware(request, response);
    } else if (pathname.startsWith(`${pathPrefix}/oauth/`)) {
      oauthMiddleware(request, response);
    } else {
      (0,_octokit_oauth_app__WEBPACK_IMPORTED_MODULE_4__.sendNodeResponse)((0,_octokit_oauth_app__WEBPACK_IMPORTED_MODULE_4__.unknownRouteResponse)(request), response);
    }
    return true;
  } else {
    next?.();
    return false;
  }
}

// pkg/dist-src/index.js
var App = class {
  static {
    this.VERSION = VERSION;
  }
  static defaults(defaults) {
    const AppWithDefaults = class extends this {
      constructor(...args) {
        super({
          ...defaults,
          ...args[0]
        });
      }
    };
    return AppWithDefaults;
  }
  constructor(options) {
    const Octokit5 = options.Octokit || _octokit_core__WEBPACK_IMPORTED_MODULE_5__.Octokit;
    const authOptions = Object.assign(
      {
        appId: options.appId,
        privateKey: options.privateKey
      },
      options.oauth ? {
        clientId: options.oauth.clientId,
        clientSecret: options.oauth.clientSecret
      } : {}
    );
    this.octokit = new Octokit5({
      authStrategy: _octokit_auth_app__WEBPACK_IMPORTED_MODULE_2__.createAppAuth,
      auth: authOptions,
      log: options.log
    });
    this.log = Object.assign(
      {
        debug: () => {
        },
        info: () => {
        },
        warn: console.warn.bind(console),
        error: console.error.bind(console)
      },
      options.log
    );
    if (options.webhooks) {
      this.webhooks = webhooks(this.octokit, options.webhooks);
    } else {
      Object.defineProperty(this, "webhooks", {
        get() {
          throw new Error("[@octokit/app] webhooks option not set");
        }
      });
    }
    if (options.oauth) {
      this.oauth = new _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_4__.OAuthApp({
        ...options.oauth,
        clientType: "github-app",
        Octokit: Octokit5
      });
    } else {
      Object.defineProperty(this, "oauth", {
        get() {
          throw new Error(
            "[@octokit/app] oauth.clientId / oauth.clientSecret options are not set"
          );
        }
      });
    }
    this.getInstallationOctokit = getInstallationOctokit.bind(
      null,
      this
    );
    this.eachInstallation = eachInstallationFactory(
      this
    );
    this.eachRepository = eachRepositoryFactory(
      this
    );
  }
};



/***/ }),

/***/ "./node_modules/@octokit/auth-app/dist-node/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@octokit/auth-app/dist-node/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// pkg/dist-src/index.js
var dist_src_exports = {};
__export(dist_src_exports, {
  createAppAuth: () => createAppAuth,
  createOAuthUserAuth: () => import_auth_oauth_user2.createOAuthUserAuth
});
module.exports = __toCommonJS(dist_src_exports);
var import_universal_user_agent = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
var import_request = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
var import_auth_oauth_app = __webpack_require__(/*! @octokit/auth-oauth-app */ "./node_modules/@octokit/auth-oauth-app/dist-web/index.js");

// pkg/dist-src/auth.js
var import_deprecation = __webpack_require__(/*! deprecation */ "./node_modules/deprecation/dist-web/index.js");
var OAuthAppAuth = __toESM(__webpack_require__(/*! @octokit/auth-oauth-app */ "./node_modules/@octokit/auth-oauth-app/dist-web/index.js"));

// pkg/dist-src/get-app-authentication.js
var import_universal_github_app_jwt = __webpack_require__(/*! universal-github-app-jwt */ "./node_modules/universal-github-app-jwt/dist-web/index.bundled.js");
async function getAppAuthentication({
  appId,
  privateKey,
  timeDifference
}) {
  try {
    const appAuthentication = await (0, import_universal_github_app_jwt.githubAppJwt)({
      id: +appId,
      privateKey,
      now: timeDifference && Math.floor(Date.now() / 1e3) + timeDifference
    });
    return {
      type: "app",
      token: appAuthentication.token,
      appId: appAuthentication.appId,
      expiresAt: new Date(appAuthentication.expiration * 1e3).toISOString()
    };
  } catch (error) {
    if (privateKey === "-----BEGIN RSA PRIVATE KEY-----") {
      throw new Error(
        "The 'privateKey` option contains only the first line '-----BEGIN RSA PRIVATE KEY-----'. If you are setting it using a `.env` file, make sure it is set on a single line with newlines replaced by '\n'"
      );
    } else {
      throw error;
    }
  }
}

// pkg/dist-src/cache.js
var import_lru_cache = __webpack_require__(/*! lru-cache */ "./node_modules/@octokit/auth-app/node_modules/lru-cache/dist/cjs/index.js");
function getCache() {
  return new import_lru_cache.LRUCache({
    // cache max. 15000 tokens, that will use less than 10mb memory
    max: 15e3,
    // Cache for 1 minute less than GitHub expiry
    ttl: 1e3 * 60 * 59
  });
}
async function get(cache, options) {
  const cacheKey = optionsToCacheKey(options);
  const result = await cache.get(cacheKey);
  if (!result) {
    return;
  }
  const [
    token,
    createdAt,
    expiresAt,
    repositorySelection,
    permissionsString,
    singleFileName
  ] = result.split("|");
  const permissions = options.permissions || permissionsString.split(/,/).reduce((permissions2, string) => {
    if (/!$/.test(string)) {
      permissions2[string.slice(0, -1)] = "write";
    } else {
      permissions2[string] = "read";
    }
    return permissions2;
  }, {});
  return {
    token,
    createdAt,
    expiresAt,
    permissions,
    repositoryIds: options.repositoryIds,
    repositoryNames: options.repositoryNames,
    singleFileName,
    repositorySelection
  };
}
async function set(cache, options, data) {
  const key = optionsToCacheKey(options);
  const permissionsString = options.permissions ? "" : Object.keys(data.permissions).map(
    (name) => `${name}${data.permissions[name] === "write" ? "!" : ""}`
  ).join(",");
  const value = [
    data.token,
    data.createdAt,
    data.expiresAt,
    data.repositorySelection,
    permissionsString,
    data.singleFileName
  ].join("|");
  await cache.set(key, value);
}
function optionsToCacheKey({
  installationId,
  permissions = {},
  repositoryIds = [],
  repositoryNames = []
}) {
  const permissionsString = Object.keys(permissions).sort().map((name) => permissions[name] === "read" ? name : `${name}!`).join(",");
  const repositoryIdsString = repositoryIds.sort().join(",");
  const repositoryNamesString = repositoryNames.join(",");
  return [
    installationId,
    repositoryIdsString,
    repositoryNamesString,
    permissionsString
  ].filter(Boolean).join("|");
}

// pkg/dist-src/to-token-authentication.js
function toTokenAuthentication({
  installationId,
  token,
  createdAt,
  expiresAt,
  repositorySelection,
  permissions,
  repositoryIds,
  repositoryNames,
  singleFileName
}) {
  return Object.assign(
    {
      type: "token",
      tokenType: "installation",
      token,
      installationId,
      permissions,
      createdAt,
      expiresAt,
      repositorySelection
    },
    repositoryIds ? { repositoryIds } : null,
    repositoryNames ? { repositoryNames } : null,
    singleFileName ? { singleFileName } : null
  );
}

// pkg/dist-src/get-installation-authentication.js
async function getInstallationAuthentication(state, options, customRequest) {
  const installationId = Number(options.installationId || state.installationId);
  if (!installationId) {
    throw new Error(
      "[@octokit/auth-app] installationId option is required for installation authentication."
    );
  }
  if (options.factory) {
    const { type, factory, oauthApp, ...factoryAuthOptions } = {
      ...state,
      ...options
    };
    return factory(factoryAuthOptions);
  }
  const optionsWithInstallationTokenFromState = Object.assign(
    { installationId },
    options
  );
  if (!options.refresh) {
    const result = await get(
      state.cache,
      optionsWithInstallationTokenFromState
    );
    if (result) {
      const {
        token: token2,
        createdAt: createdAt2,
        expiresAt: expiresAt2,
        permissions: permissions2,
        repositoryIds: repositoryIds2,
        repositoryNames: repositoryNames2,
        singleFileName: singleFileName2,
        repositorySelection: repositorySelection2
      } = result;
      return toTokenAuthentication({
        installationId,
        token: token2,
        createdAt: createdAt2,
        expiresAt: expiresAt2,
        permissions: permissions2,
        repositorySelection: repositorySelection2,
        repositoryIds: repositoryIds2,
        repositoryNames: repositoryNames2,
        singleFileName: singleFileName2
      });
    }
  }
  const appAuthentication = await getAppAuthentication(state);
  const request = customRequest || state.request;
  const {
    data: {
      token,
      expires_at: expiresAt,
      repositories,
      permissions: permissionsOptional,
      repository_selection: repositorySelectionOptional,
      single_file: singleFileName
    }
  } = await request("POST /app/installations/{installation_id}/access_tokens", {
    installation_id: installationId,
    repository_ids: options.repositoryIds,
    repositories: options.repositoryNames,
    permissions: options.permissions,
    mediaType: {
      previews: ["machine-man"]
    },
    headers: {
      authorization: `bearer ${appAuthentication.token}`
    }
  });
  const permissions = permissionsOptional || {};
  const repositorySelection = repositorySelectionOptional || "all";
  const repositoryIds = repositories ? repositories.map((r) => r.id) : void 0;
  const repositoryNames = repositories ? repositories.map((repo) => repo.name) : void 0;
  const createdAt = (/* @__PURE__ */ new Date()).toISOString();
  await set(state.cache, optionsWithInstallationTokenFromState, {
    token,
    createdAt,
    expiresAt,
    repositorySelection,
    permissions,
    repositoryIds,
    repositoryNames,
    singleFileName
  });
  return toTokenAuthentication({
    installationId,
    token,
    createdAt,
    expiresAt,
    repositorySelection,
    permissions,
    repositoryIds,
    repositoryNames,
    singleFileName
  });
}

// pkg/dist-src/auth.js
async function auth(state, authOptions) {
  switch (authOptions.type) {
    case "app":
      return getAppAuthentication(state);
    case "oauth":
      state.log.warn(
        // @ts-expect-error `log.warn()` expects string
        new import_deprecation.Deprecation(
          `[@octokit/auth-app] {type: "oauth"} is deprecated. Use {type: "oauth-app"} instead`
        )
      );
    case "oauth-app":
      return state.oauthApp({ type: "oauth-app" });
    case "installation":
      authOptions;
      return getInstallationAuthentication(state, {
        ...authOptions,
        type: "installation"
      });
    case "oauth-user":
      return state.oauthApp(authOptions);
    default:
      throw new Error(`Invalid auth type: ${authOptions.type}`);
  }
}

// pkg/dist-src/hook.js
var import_auth_oauth_user = __webpack_require__(/*! @octokit/auth-oauth-user */ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js");
var import_request_error = __webpack_require__(/*! @octokit/request-error */ "./node_modules/@octokit/request-error/dist-web/index.js");

// pkg/dist-src/requires-app-auth.js
var PATHS = [
  "/app",
  "/app/hook/config",
  "/app/hook/deliveries",
  "/app/hook/deliveries/{delivery_id}",
  "/app/hook/deliveries/{delivery_id}/attempts",
  "/app/installations",
  "/app/installations/{installation_id}",
  "/app/installations/{installation_id}/access_tokens",
  "/app/installations/{installation_id}/suspended",
  "/marketplace_listing/accounts/{account_id}",
  "/marketplace_listing/plan",
  "/marketplace_listing/plans",
  "/marketplace_listing/plans/{plan_id}/accounts",
  "/marketplace_listing/stubbed/accounts/{account_id}",
  "/marketplace_listing/stubbed/plan",
  "/marketplace_listing/stubbed/plans",
  "/marketplace_listing/stubbed/plans/{plan_id}/accounts",
  "/orgs/{org}/installation",
  "/repos/{owner}/{repo}/installation",
  "/users/{username}/installation"
];
function routeMatcher(paths) {
  const regexes = paths.map(
    (p) => p.split("/").map((c) => c.startsWith("{") ? "(?:.+?)" : c).join("/")
  );
  const regex = `^(?:${regexes.map((r) => `(?:${r})`).join("|")})$`;
  return new RegExp(regex, "i");
}
var REGEX = routeMatcher(PATHS);
function requiresAppAuth(url) {
  return !!url && REGEX.test(url.split("?")[0]);
}

// pkg/dist-src/hook.js
var FIVE_SECONDS_IN_MS = 5 * 1e3;
function isNotTimeSkewError(error) {
  return !(error.message.match(
    /'Expiration time' claim \('exp'\) must be a numeric value representing the future time at which the assertion expires/
  ) || error.message.match(
    /'Issued at' claim \('iat'\) must be an Integer representing the time that the assertion was issued/
  ));
}
async function hook(state, request, route, parameters) {
  const endpoint = request.endpoint.merge(route, parameters);
  const url = endpoint.url;
  if (/\/login\/oauth\/access_token$/.test(url)) {
    return request(endpoint);
  }
  if (requiresAppAuth(url.replace(request.endpoint.DEFAULTS.baseUrl, ""))) {
    const { token: token2 } = await getAppAuthentication(state);
    endpoint.headers.authorization = `bearer ${token2}`;
    let response;
    try {
      response = await request(endpoint);
    } catch (error) {
      if (isNotTimeSkewError(error)) {
        throw error;
      }
      if (typeof error.response.headers.date === "undefined") {
        throw error;
      }
      const diff = Math.floor(
        (Date.parse(error.response.headers.date) - Date.parse((/* @__PURE__ */ new Date()).toString())) / 1e3
      );
      state.log.warn(error.message);
      state.log.warn(
        `[@octokit/auth-app] GitHub API time and system time are different by ${diff} seconds. Retrying request with the difference accounted for.`
      );
      const { token: token3 } = await getAppAuthentication({
        ...state,
        timeDifference: diff
      });
      endpoint.headers.authorization = `bearer ${token3}`;
      return request(endpoint);
    }
    return response;
  }
  if ((0, import_auth_oauth_user.requiresBasicAuth)(url)) {
    const authentication = await state.oauthApp({ type: "oauth-app" });
    endpoint.headers.authorization = authentication.headers.authorization;
    return request(endpoint);
  }
  const { token, createdAt } = await getInstallationAuthentication(
    state,
    // @ts-expect-error TBD
    {},
    request
  );
  endpoint.headers.authorization = `token ${token}`;
  return sendRequestWithRetries(
    state,
    request,
    endpoint,
    createdAt
  );
}
async function sendRequestWithRetries(state, request, options, createdAt, retries = 0) {
  const timeSinceTokenCreationInMs = +/* @__PURE__ */ new Date() - +new Date(createdAt);
  try {
    return await request(options);
  } catch (error) {
    if (error.status !== 401) {
      throw error;
    }
    if (timeSinceTokenCreationInMs >= FIVE_SECONDS_IN_MS) {
      if (retries > 0) {
        error.message = `After ${retries} retries within ${timeSinceTokenCreationInMs / 1e3}s of creating the installation access token, the response remains 401. At this point, the cause may be an authentication problem or a system outage. Please check https://www.githubstatus.com for status information`;
      }
      throw error;
    }
    ++retries;
    const awaitTime = retries * 1e3;
    state.log.warn(
      `[@octokit/auth-app] Retrying after 401 response to account for token replication delay (retry: ${retries}, wait: ${awaitTime / 1e3}s)`
    );
    await new Promise((resolve) => setTimeout(resolve, awaitTime));
    return sendRequestWithRetries(state, request, options, createdAt, retries);
  }
}

// pkg/dist-src/version.js
var VERSION = "6.0.0";

// pkg/dist-src/index.js
var import_auth_oauth_user2 = __webpack_require__(/*! @octokit/auth-oauth-user */ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js");
function createAppAuth(options) {
  if (!options.appId) {
    throw new Error("[@octokit/auth-app] appId option is required");
  }
  if (!Number.isFinite(+options.appId)) {
    throw new Error(
      "[@octokit/auth-app] appId option must be a number or numeric string"
    );
  }
  if (!options.privateKey) {
    throw new Error("[@octokit/auth-app] privateKey option is required");
  }
  if ("installationId" in options && !options.installationId) {
    throw new Error(
      "[@octokit/auth-app] installationId is set to a falsy value"
    );
  }
  const log = Object.assign(
    {
      warn: console.warn.bind(console)
    },
    options.log
  );
  const request = options.request || import_request.request.defaults({
    headers: {
      "user-agent": `octokit-auth-app.js/${VERSION} ${(0, import_universal_user_agent.getUserAgent)()}`
    }
  });
  const state = Object.assign(
    {
      request,
      cache: getCache()
    },
    options,
    options.installationId ? { installationId: Number(options.installationId) } : {},
    {
      log,
      oauthApp: (0, import_auth_oauth_app.createOAuthAppAuth)({
        clientType: "github-app",
        clientId: options.clientId || "",
        clientSecret: options.clientSecret || "",
        request
      })
    }
  );
  return Object.assign(auth.bind(null, state), {
    hook: hook.bind(null, state)
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ "./node_modules/@octokit/auth-oauth-app/dist-web/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@octokit/auth-oauth-app/dist-web/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOAuthAppAuth: () => (/* binding */ createOAuthAppAuth),
/* harmony export */   createOAuthUserAuth: () => (/* reexport safe */ _octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_1__.createOAuthUserAuth)
/* harmony export */ });
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/auth-oauth-user */ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js");
// pkg/dist-src/index.js



// pkg/dist-src/auth.js


async function auth(state, authOptions) {
  if (authOptions.type === "oauth-app") {
    return {
      type: "oauth-app",
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      clientType: state.clientType,
      headers: {
        authorization: `basic ${btoa_lite__WEBPACK_IMPORTED_MODULE_0___default()(
          `${state.clientId}:${state.clientSecret}`
        )}`
      }
    };
  }
  if ("factory" in authOptions) {
    const { type, ...options } = {
      ...authOptions,
      ...state
    };
    return authOptions.factory(options);
  }
  const common = {
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    request: state.request,
    ...authOptions
  };
  const userAuth = state.clientType === "oauth-app" ? await (0,_octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_1__.createOAuthUserAuth)({
    ...common,
    clientType: state.clientType
  }) : await (0,_octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_1__.createOAuthUserAuth)({
    ...common,
    clientType: state.clientType
  });
  return userAuth();
}

// pkg/dist-src/hook.js


async function hook(state, request2, route, parameters) {
  let endpoint = request2.endpoint.merge(
    route,
    parameters
  );
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
    return request2(endpoint);
  }
  if (state.clientType === "github-app" && !(0,_octokit_auth_oauth_user__WEBPACK_IMPORTED_MODULE_1__.requiresBasicAuth)(endpoint.url)) {
    throw new Error(
      `[@octokit/auth-oauth-app] GitHub Apps cannot use their client ID/secret for basic authentication for endpoints other than "/applications/{client_id}/**". "${endpoint.method} ${endpoint.url}" is not supported.`
    );
  }
  const credentials = btoa_lite__WEBPACK_IMPORTED_MODULE_0___default()(`${state.clientId}:${state.clientSecret}`);
  endpoint.headers.authorization = `basic ${credentials}`;
  try {
    return await request2(endpoint);
  } catch (error) {
    if (error.status !== 401)
      throw error;
    error.message = `[@octokit/auth-oauth-app] "${endpoint.method} ${endpoint.url}" does not support clientId/clientSecret basic authentication.`;
    throw error;
  }
}

// pkg/dist-src/version.js
var VERSION = "7.0.0";

// pkg/dist-src/index.js

function createOAuthAppAuth(options) {
  const state = Object.assign(
    {
      request: _octokit_request__WEBPACK_IMPORTED_MODULE_2__.request.defaults({
        headers: {
          "user-agent": `octokit-auth-oauth-app.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgent)()}`
        }
      }),
      clientType: "oauth-app"
    },
    options
  );
  return Object.assign(auth.bind(null, state), {
    hook: hook.bind(null, state)
  });
}



/***/ }),

/***/ "./node_modules/@octokit/auth-oauth-device/dist-web/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@octokit/auth-oauth-device/dist-web/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOAuthDeviceAuth: () => (/* binding */ createOAuthDeviceAuth)
/* harmony export */ });
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/create-device-code.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/exchange-device-code.js");
// pkg/dist-src/index.js



// pkg/dist-src/get-oauth-access-token.js

async function getOAuthAccessToken(state, options) {
  const cachedAuthentication = getCachedAuthentication(state, options.auth);
  if (cachedAuthentication)
    return cachedAuthentication;
  const { data: verification } = await (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_0__.createDeviceCode)({
    clientType: state.clientType,
    clientId: state.clientId,
    request: options.request || state.request,
    // @ts-expect-error the extra code to make TS happy is not worth it
    scopes: options.auth.scopes || state.scopes
  });
  await state.onVerification(verification);
  const authentication = await waitForAccessToken(
    options.request || state.request,
    state.clientId,
    state.clientType,
    verification
  );
  state.authentication = authentication;
  return authentication;
}
function getCachedAuthentication(state, auth2) {
  if (auth2.refresh === true)
    return false;
  if (!state.authentication)
    return false;
  if (state.clientType === "github-app") {
    return state.authentication;
  }
  const authentication = state.authentication;
  const newScope = ("scopes" in auth2 && auth2.scopes || state.scopes).join(
    " "
  );
  const currentScope = authentication.scopes.join(" ");
  return newScope === currentScope ? authentication : false;
}
async function wait(seconds) {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1e3));
}
async function waitForAccessToken(request, clientId, clientType, verification) {
  try {
    const options = {
      clientId,
      request,
      code: verification.device_code
    };
    const { authentication } = clientType === "oauth-app" ? await (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_1__.exchangeDeviceCode)({
      ...options,
      clientType: "oauth-app"
    }) : await (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_1__.exchangeDeviceCode)({
      ...options,
      clientType: "github-app"
    });
    return {
      type: "token",
      tokenType: "oauth",
      ...authentication
    };
  } catch (error) {
    if (!error.response)
      throw error;
    const errorType = error.response.data.error;
    if (errorType === "authorization_pending") {
      await wait(verification.interval);
      return waitForAccessToken(request, clientId, clientType, verification);
    }
    if (errorType === "slow_down") {
      await wait(verification.interval + 5);
      return waitForAccessToken(request, clientId, clientType, verification);
    }
    throw error;
  }
}

// pkg/dist-src/auth.js
async function auth(state, authOptions) {
  return getOAuthAccessToken(state, {
    auth: authOptions
  });
}

// pkg/dist-src/hook.js
async function hook(state, request, route, parameters) {
  let endpoint = request.endpoint.merge(
    route,
    parameters
  );
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
    return request(endpoint);
  }
  const { token } = await getOAuthAccessToken(state, {
    request,
    auth: { type: "oauth" }
  });
  endpoint.headers.authorization = `token ${token}`;
  return request(endpoint);
}

// pkg/dist-src/version.js
var VERSION = "6.0.0";

// pkg/dist-src/index.js
function createOAuthDeviceAuth(options) {
  const requestWithDefaults = options.request || _octokit_request__WEBPACK_IMPORTED_MODULE_2__.request.defaults({
    headers: {
      "user-agent": `octokit-auth-oauth-device.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgent)()}`
    }
  });
  const { request = requestWithDefaults, ...otherOptions } = options;
  const state = options.clientType === "github-app" ? {
    ...otherOptions,
    clientType: "github-app",
    request
  } : {
    ...otherOptions,
    clientType: "oauth-app",
    request,
    scopes: options.scopes || []
  };
  if (!options.clientId) {
    throw new Error(
      '[@octokit/auth-oauth-device] "clientId" option must be set (https://github.com/octokit/auth-oauth-device.js#usage)'
    );
  }
  if (!options.onVerification) {
    throw new Error(
      '[@octokit/auth-oauth-device] "onVerification" option must be a function (https://github.com/octokit/auth-oauth-device.js#usage)'
    );
  }
  return Object.assign(auth.bind(null, state), {
    hook: hook.bind(null, state)
  });
}



/***/ }),

/***/ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@octokit/auth-oauth-user/dist-web/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOAuthUserAuth: () => (/* binding */ createOAuthUserAuth),
/* harmony export */   requiresBasicAuth: () => (/* binding */ requiresBasicAuth)
/* harmony export */ });
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _octokit_auth_oauth_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/auth-oauth-device */ "./node_modules/@octokit/auth-oauth-device/dist-web/index.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/exchange-web-flow-code.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/refresh-token.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/check-token.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/reset-token.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/delete-token.js");
/* harmony import */ var _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/delete-authorization.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_7__);
// pkg/dist-src/index.js



// pkg/dist-src/version.js
var VERSION = "4.0.0";

// pkg/dist-src/get-authentication.js


async function getAuthentication(state) {
  if ("code" in state.strategyOptions) {
    const { authentication } = await (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_0__.exchangeWebFlowCode)({
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      clientType: state.clientType,
      onTokenCreated: state.onTokenCreated,
      ...state.strategyOptions,
      request: state.request
    });
    return {
      type: "token",
      tokenType: "oauth",
      ...authentication
    };
  }
  if ("onVerification" in state.strategyOptions) {
    const deviceAuth = (0,_octokit_auth_oauth_device__WEBPACK_IMPORTED_MODULE_1__.createOAuthDeviceAuth)({
      clientType: state.clientType,
      clientId: state.clientId,
      onTokenCreated: state.onTokenCreated,
      ...state.strategyOptions,
      request: state.request
    });
    const authentication = await deviceAuth({
      type: "oauth"
    });
    return {
      clientSecret: state.clientSecret,
      ...authentication
    };
  }
  if ("token" in state.strategyOptions) {
    return {
      type: "token",
      tokenType: "oauth",
      clientId: state.clientId,
      clientSecret: state.clientSecret,
      clientType: state.clientType,
      onTokenCreated: state.onTokenCreated,
      ...state.strategyOptions
    };
  }
  throw new Error("[@octokit/auth-oauth-user] Invalid strategy options");
}

// pkg/dist-src/auth.js

async function auth(state, options = {}) {
  if (!state.authentication) {
    state.authentication = state.clientType === "oauth-app" ? await getAuthentication(state) : await getAuthentication(state);
  }
  if (state.authentication.invalid) {
    throw new Error("[@octokit/auth-oauth-user] Token is invalid");
  }
  const currentAuthentication = state.authentication;
  if ("expiresAt" in currentAuthentication) {
    if (options.type === "refresh" || new Date(currentAuthentication.expiresAt) < /* @__PURE__ */ new Date()) {
      const { authentication } = await (0,_octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_2__.refreshToken)({
        clientType: "github-app",
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        refreshToken: currentAuthentication.refreshToken,
        request: state.request
      });
      state.authentication = {
        tokenType: "oauth",
        type: "token",
        ...authentication
      };
    }
  }
  if (options.type === "refresh") {
    if (state.clientType === "oauth-app") {
      throw new Error(
        "[@octokit/auth-oauth-user] OAuth Apps do not support expiring tokens"
      );
    }
    if (!currentAuthentication.hasOwnProperty("expiresAt")) {
      throw new Error("[@octokit/auth-oauth-user] Refresh token missing");
    }
    await state.onTokenCreated?.(state.authentication, {
      type: options.type
    });
  }
  if (options.type === "check" || options.type === "reset") {
    const method = options.type === "check" ? _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_3__.checkToken : _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_4__.resetToken;
    try {
      const { authentication } = await method({
        // @ts-expect-error making TS happy would require unnecessary code so no
        clientType: state.clientType,
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        token: state.authentication.token,
        request: state.request
      });
      state.authentication = {
        tokenType: "oauth",
        type: "token",
        // @ts-expect-error TBD
        ...authentication
      };
      if (options.type === "reset") {
        await state.onTokenCreated?.(state.authentication, {
          type: options.type
        });
      }
      return state.authentication;
    } catch (error) {
      if (error.status === 404) {
        error.message = "[@octokit/auth-oauth-user] Token is invalid";
        state.authentication.invalid = true;
      }
      throw error;
    }
  }
  if (options.type === "delete" || options.type === "deleteAuthorization") {
    const method = options.type === "delete" ? _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_5__.deleteToken : _octokit_oauth_methods__WEBPACK_IMPORTED_MODULE_6__.deleteAuthorization;
    try {
      await method({
        // @ts-expect-error making TS happy would require unnecessary code so no
        clientType: state.clientType,
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        token: state.authentication.token,
        request: state.request
      });
    } catch (error) {
      if (error.status !== 404)
        throw error;
    }
    state.authentication.invalid = true;
    return state.authentication;
  }
  return state.authentication;
}

// pkg/dist-src/hook.js


// pkg/dist-src/requires-basic-auth.js
var ROUTES_REQUIRING_BASIC_AUTH = /\/applications\/[^/]+\/(token|grant)s?/;
function requiresBasicAuth(url) {
  return url && ROUTES_REQUIRING_BASIC_AUTH.test(url);
}

// pkg/dist-src/hook.js
async function hook(state, request, route, parameters = {}) {
  const endpoint = request.endpoint.merge(
    route,
    parameters
  );
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
    return request(endpoint);
  }
  if (requiresBasicAuth(endpoint.url)) {
    const credentials = btoa_lite__WEBPACK_IMPORTED_MODULE_7___default()(`${state.clientId}:${state.clientSecret}`);
    endpoint.headers.authorization = `basic ${credentials}`;
    return request(endpoint);
  }
  const { token } = state.clientType === "oauth-app" ? await auth({ ...state, request }) : await auth({ ...state, request });
  endpoint.headers.authorization = "token " + token;
  return request(endpoint);
}

// pkg/dist-src/index.js
function createOAuthUserAuth({
  clientId,
  clientSecret,
  clientType = "oauth-app",
  request = _octokit_request__WEBPACK_IMPORTED_MODULE_8__.request.defaults({
    headers: {
      "user-agent": `octokit-auth-oauth-app.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_9__.getUserAgent)()}`
    }
  }),
  onTokenCreated,
  ...strategyOptions
}) {
  const state = Object.assign({
    clientType,
    clientId,
    clientSecret,
    onTokenCreated,
    strategyOptions,
    request
  });
  return Object.assign(auth.bind(null, state), {
    // @ts-expect-error not worth the extra code needed to appease TS
    hook: hook.bind(null, state)
  });
}
createOAuthUserAuth.VERSION = VERSION;



/***/ }),

/***/ "./node_modules/@octokit/auth-token/dist-web/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@octokit/auth-token/dist-web/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTokenAuth: () => (/* binding */ createTokenAuth)
/* harmony export */ });
// pkg/dist-src/auth.js
var REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
var REGEX_IS_INSTALLATION = /^ghs_/;
var REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function auth(token) {
  const isApp = token.split(/\./).length === 3;
  const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) || REGEX_IS_INSTALLATION.test(token);
  const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
  const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
  return {
    type: "token",
    token,
    tokenType
  };
}

// pkg/dist-src/with-authorization-prefix.js
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }
  return `token ${token}`;
}

// pkg/dist-src/hook.js
async function hook(token, request, route, parameters) {
  const endpoint = request.endpoint.merge(
    route,
    parameters
  );
  endpoint.headers.authorization = withAuthorizationPrefix(token);
  return request(endpoint);
}

// pkg/dist-src/index.js
var createTokenAuth = function createTokenAuth2(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }
  if (typeof token !== "string") {
    throw new Error(
      "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
    );
  }
  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};



/***/ }),

/***/ "./node_modules/@octokit/auth-unauthenticated/dist-web/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@octokit/auth-unauthenticated/dist-web/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUnauthenticatedAuth: () => (/* binding */ createUnauthenticatedAuth)
/* harmony export */ });
// pkg/dist-src/auth.js
async function auth(reason) {
  return {
    type: "unauthenticated",
    reason
  };
}

// pkg/dist-src/is-rate-limit-error.js

function isRateLimitError(error) {
  if (error.status !== 403) {
    return false;
  }
  if (!error.response) {
    return false;
  }
  return error.response.headers["x-ratelimit-remaining"] === "0";
}

// pkg/dist-src/is-abuse-limit-error.js

var REGEX_ABUSE_LIMIT_MESSAGE = /\babuse\b/i;
function isAbuseLimitError(error) {
  if (error.status !== 403) {
    return false;
  }
  return REGEX_ABUSE_LIMIT_MESSAGE.test(error.message);
}

// pkg/dist-src/hook.js
async function hook(reason, request, route, parameters) {
  const endpoint = request.endpoint.merge(
    route,
    parameters
  );
  return request(endpoint).catch((error) => {
    if (error.status === 404) {
      error.message = `Not found. May be due to lack of authentication. Reason: ${reason}`;
      throw error;
    }
    if (isRateLimitError(error)) {
      error.message = `API rate limit exceeded. This maybe caused by the lack of authentication. Reason: ${reason}`;
      throw error;
    }
    if (isAbuseLimitError(error)) {
      error.message = `You have triggered an abuse detection mechanism. This maybe caused by the lack of authentication. Reason: ${reason}`;
      throw error;
    }
    if (error.status === 401) {
      error.message = `Unauthorized. "${endpoint.method} ${endpoint.url}" failed most likely due to lack of authentication. Reason: ${reason}`;
      throw error;
    }
    if (error.status >= 400 && error.status < 500) {
      error.message = error.message.replace(
        /\.?$/,
        `. May be caused by lack of authentication (${reason}).`
      );
    }
    throw error;
  });
}

// pkg/dist-src/index.js
var createUnauthenticatedAuth = function createUnauthenticatedAuth2(options) {
  if (!options || !options.reason) {
    throw new Error(
      "[@octokit/auth-unauthenticated] No reason passed to createUnauthenticatedAuth"
    );
  }
  return Object.assign(auth.bind(null, options.reason), {
    hook: hook.bind(null, options.reason)
  });
};



/***/ }),

/***/ "./node_modules/@octokit/core/dist-web/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@octokit/core/dist-web/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Octokit: () => (/* binding */ Octokit)
/* harmony export */ });
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
/* harmony import */ var before_after_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! before-after-hook */ "./node_modules/before-after-hook/index.js");
/* harmony import */ var before_after_hook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(before_after_hook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _octokit_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/graphql */ "./node_modules/@octokit/graphql/dist-web/index.js");
/* harmony import */ var _octokit_auth_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/auth-token */ "./node_modules/@octokit/auth-token/dist-web/index.js");
// pkg/dist-src/index.js






// pkg/dist-src/version.js
var VERSION = "5.0.0";

// pkg/dist-src/index.js
var Octokit = class {
  static {
    this.VERSION = VERSION;
  }
  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};
        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }
        super(
          Object.assign(
            {},
            defaults,
            options,
            options.userAgent && defaults.userAgent ? {
              userAgent: `${options.userAgent} ${defaults.userAgent}`
            } : null
          )
        );
      }
    };
    return OctokitWithDefaults;
  }
  static {
    this.plugins = [];
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */
  static plugin(...newPlugins) {
    const currentPlugins = this.plugins;
    const NewOctokit = class extends this {
      static {
        this.plugins = currentPlugins.concat(
          newPlugins.filter((plugin) => !currentPlugins.includes(plugin))
        );
      }
    };
    return NewOctokit;
  }
  constructor(options = {}) {
    const hook = new before_after_hook__WEBPACK_IMPORTED_MODULE_0__.Collection();
    const requestDefaults = {
      baseUrl: _octokit_request__WEBPACK_IMPORTED_MODULE_1__.request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    requestDefaults.headers["user-agent"] = [
      options.userAgent,
      `octokit-core.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_2__.getUserAgent)()}`
    ].filter(Boolean).join(" ");
    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }
    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }
    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }
    this.request = _octokit_request__WEBPACK_IMPORTED_MODULE_1__.request.defaults(requestDefaults);
    this.graphql = (0,_octokit_graphql__WEBPACK_IMPORTED_MODULE_3__.withCustomRequest)(this.request).defaults(requestDefaults);
    this.log = Object.assign(
      {
        debug: () => {
        },
        info: () => {
        },
        warn: console.warn.bind(console),
        error: console.error.bind(console)
      },
      options.log
    );
    this.hook = hook;
    if (!options.authStrategy) {
      if (!options.auth) {
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        const auth = (0,_octokit_auth_token__WEBPACK_IMPORTED_MODULE_4__.createTokenAuth)(options.auth);
        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      const { authStrategy, ...otherOptions } = options;
      const auth = authStrategy(
        Object.assign(
          {
            request: this.request,
            log: this.log,
            // we pass the current octokit instance as well as its constructor options
            // to allow for authentication strategies that return a new octokit instance
            // that shares the same internal state as the current one. The original
            // requirement for this was the "event-octokit" authentication strategy
            // of https://github.com/probot/octokit-auth-probot.
            octokit: this,
            octokitOptions: otherOptions
          },
          options.auth
        )
      );
      hook.wrap("request", auth.hook);
      this.auth = auth;
    }
    const classConstructor = this.constructor;
    classConstructor.plugins.forEach((plugin) => {
      Object.assign(this, plugin(this, options));
    });
  }
};



/***/ }),

/***/ "./node_modules/@octokit/endpoint/dist-web/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@octokit/endpoint/dist-web/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpoint: () => (/* binding */ endpoint)
/* harmony export */ });
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/dist/is-plain-object.mjs");
// pkg/dist-src/defaults.js


// pkg/dist-src/version.js
var VERSION = "9.0.0";

// pkg/dist-src/defaults.js
var userAgent = `octokit-endpoint.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_0__.getUserAgent)()}`;
var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: ""
  }
};

// pkg/dist-src/util/lowercase-keys.js
function lowercaseKeys(object) {
  if (!object) {
    return {};
  }
  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

// pkg/dist-src/util/merge-deep.js

function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach((key) => {
    if ((0,is_plain_object__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(options[key])) {
      if (!(key in defaults))
        Object.assign(result, { [key]: options[key] });
      else
        result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, { [key]: options[key] });
    }
  });
  return result;
}

// pkg/dist-src/util/remove-undefined-properties.js
function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}

// pkg/dist-src/merge.js
function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? { method, url } : { url: method }, options);
  } else {
    options = Object.assign({}, route);
  }
  options.headers = lowercaseKeys(options.headers);
  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options);
  if (options.url === "/graphql") {
    if (defaults && defaults.mediaType.previews?.length) {
      mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(
        (preview) => !mergedOptions.mediaType.previews.includes(preview)
      ).concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = (mergedOptions.mediaType.previews || []).map((preview) => preview.replace(/-preview/, ""));
  }
  return mergedOptions;
}

// pkg/dist-src/util/add-query-parameters.js
function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);
  if (names.length === 0) {
    return url;
  }
  return url + separator + names.map((name) => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }
    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}

// pkg/dist-src/util/extract-url-variable-names.js
var urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);
  if (!matches) {
    return [];
  }
  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

// pkg/dist-src/util/omit.js
function omit(object, keysToOmit) {
  return Object.keys(object).filter((option) => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}

// pkg/dist-src/util/url-template.js
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    return part;
  }).join("");
}
function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
  var value = context[key], result = [];
  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();
      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }
      result.push(
        encodeValue(operator, value, isKeyOperator(operator) ? key : "")
      );
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            result.push(
              encodeValue(operator, value2, isKeyOperator(operator) ? key : "")
            );
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            tmp.push(encodeValue(operator, value2));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }
        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }
  return result;
}
function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}
function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    function(_, expression, literal) {
      if (expression) {
        let operator = "";
        const values = [];
        if (operators.indexOf(expression.charAt(0)) !== -1) {
          operator = expression.charAt(0);
          expression = expression.substr(1);
        }
        expression.split(/,/g).forEach(function(variable) {
          var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
          values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
        });
        if (operator && operator !== "+") {
          var separator = ",";
          if (operator === "?") {
            separator = "&";
          } else if (operator !== "#") {
            separator = operator;
          }
          return (values.length !== 0 ? operator : "") + values.join(separator);
        } else {
          return values.join(",");
        }
      } else {
        return encodeReserved(literal);
      }
    }
  );
}

// pkg/dist-src/parse.js
function parse(options) {
  let method = options.method.toUpperCase();
  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);
  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }
  const omittedParameters = Object.keys(options).filter((option) => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      headers.accept = headers.accept.split(/,/).map(
        (format) => format.replace(
          /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
          `application/vnd$1$2.${options.mediaType.format}`
        )
      ).join(",");
    }
    if (url.endsWith("/graphql")) {
      if (options.mediaType.previews?.length) {
        const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
        headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview) => {
          const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
          return `application/vnd.github.${preview}-preview${format}`;
        }).join(",");
      }
    }
  }
  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      }
    }
  }
  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  }
  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  }
  return Object.assign(
    { method, url, headers },
    typeof body !== "undefined" ? { body } : null,
    options.request ? { request: options.request } : null
  );
}

// pkg/dist-src/endpoint-with-defaults.js
function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

// pkg/dist-src/with-defaults.js
function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS2 = merge(oldDefaults, newDefaults);
  const endpoint2 = endpointWithDefaults.bind(null, DEFAULTS2);
  return Object.assign(endpoint2, {
    DEFAULTS: DEFAULTS2,
    defaults: withDefaults.bind(null, DEFAULTS2),
    merge: merge.bind(null, DEFAULTS2),
    parse
  });
}

// pkg/dist-src/index.js
var endpoint = withDefaults(null, DEFAULTS);



/***/ }),

/***/ "./node_modules/@octokit/graphql/dist-web/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@octokit/graphql/dist-web/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphqlResponseError: () => (/* binding */ GraphqlResponseError),
/* harmony export */   graphql: () => (/* binding */ graphql2),
/* harmony export */   withCustomRequest: () => (/* binding */ withCustomRequest)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
// pkg/dist-src/index.js



// pkg/dist-src/version.js
var VERSION = "7.0.1";

// pkg/dist-src/with-defaults.js


// pkg/dist-src/graphql.js


// pkg/dist-src/error.js
function _buildMessageForResponseErrors(data) {
  return `Request failed due to following response errors:
` + data.errors.map((e) => ` - ${e.message}`).join("\n");
}
var GraphqlResponseError = class extends Error {
  constructor(request2, headers, response) {
    super(_buildMessageForResponseErrors(response));
    this.request = request2;
    this.headers = headers;
    this.response = response;
    this.name = "GraphqlResponseError";
    this.errors = response.errors;
    this.data = response.data;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};

// pkg/dist-src/graphql.js
var NON_VARIABLE_OPTIONS = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
];
var FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request2, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(
        new Error(`[@octokit/graphql] "query" cannot be used as variable name`)
      );
    }
    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key))
        continue;
      return Promise.reject(
        new Error(
          `[@octokit/graphql] "${key}" cannot be used as variable name`
        )
      );
    }
  }
  const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
  const requestOptions = Object.keys(
    parsedOptions
  ).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }
    if (!result.variables) {
      result.variables = {};
    }
    result.variables[key] = parsedOptions[key];
    return result;
  }, {});
  const baseUrl = parsedOptions.baseUrl || request2.endpoint.DEFAULTS.baseUrl;
  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }
  return request2(requestOptions).then((response) => {
    if (response.data.errors) {
      const headers = {};
      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }
      throw new GraphqlResponseError(
        requestOptions,
        headers,
        response.data
      );
    }
    return response.data.data;
  });
}

// pkg/dist-src/with-defaults.js
function withDefaults(request2, newDefaults) {
  const newRequest = request2.defaults(newDefaults);
  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };
  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: newRequest.endpoint
  });
}

// pkg/dist-src/index.js
var graphql2 = withDefaults(_octokit_request__WEBPACK_IMPORTED_MODULE_0__.request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_1__.getUserAgent)()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-app/dist-node/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@octokit/oauth-app/dist-node/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// pkg/dist-src/index.js
var dist_src_exports = {};
__export(dist_src_exports, {
  OAuthApp: () => OAuthApp,
  createAWSLambdaAPIGatewayV2Handler: () => createAWSLambdaAPIGatewayV2Handler,
  createNodeMiddleware: () => createNodeMiddleware,
  createWebWorkerHandler: () => createWebWorkerHandler,
  handleRequest: () => handleRequest,
  sendNodeResponse: () => sendResponse,
  unknownRouteResponse: () => unknownRouteResponse
});
module.exports = __toCommonJS(dist_src_exports);
var import_auth_oauth_app = __webpack_require__(/*! @octokit/auth-oauth-app */ "./node_modules/@octokit/auth-oauth-app/dist-web/index.js");

// pkg/dist-src/version.js
var VERSION = "6.0.0";

// pkg/dist-src/add-event-handler.js
function addEventHandler(state, eventName, eventHandler) {
  if (Array.isArray(eventName)) {
    for (const singleEventName of eventName) {
      addEventHandler(state, singleEventName, eventHandler);
    }
    return;
  }
  if (!state.eventHandlers[eventName]) {
    state.eventHandlers[eventName] = [];
  }
  state.eventHandlers[eventName].push(eventHandler);
}

// pkg/dist-src/oauth-app-octokit.js
var import_core = __webpack_require__(/*! @octokit/core */ "./node_modules/@octokit/core/dist-web/index.js");
var import_universal_user_agent = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
var OAuthAppOctokit = import_core.Octokit.defaults({
  userAgent: `octokit-oauth-app.js/${VERSION} ${(0, import_universal_user_agent.getUserAgent)()}`
});

// pkg/dist-src/methods/get-user-octokit.js
var import_auth_oauth_user = __webpack_require__(/*! @octokit/auth-oauth-user */ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js");

// pkg/dist-src/emit-event.js
async function emitEvent(state, context) {
  const { name, action } = context;
  if (state.eventHandlers[`${name}.${action}`]) {
    for (const eventHandler of state.eventHandlers[`${name}.${action}`]) {
      await eventHandler(context);
    }
  }
  if (state.eventHandlers[name]) {
    for (const eventHandler of state.eventHandlers[name]) {
      await eventHandler(context);
    }
  }
}

// pkg/dist-src/methods/get-user-octokit.js
async function getUserOctokitWithState(state, options) {
  return state.octokit.auth({
    type: "oauth-user",
    ...options,
    async factory(options2) {
      const octokit = new state.Octokit({
        authStrategy: import_auth_oauth_user.createOAuthUserAuth,
        auth: options2
      });
      const authentication = await octokit.auth({
        type: "get"
      });
      await emitEvent(state, {
        name: "token",
        action: "created",
        token: authentication.token,
        scopes: authentication.scopes,
        authentication,
        octokit
      });
      return octokit;
    }
  });
}

// pkg/dist-src/methods/get-web-flow-authorization-url.js
var OAuthMethods = __toESM(__webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/index.js"));
function getWebFlowAuthorizationUrlWithState(state, options) {
  const optionsWithDefaults = {
    clientId: state.clientId,
    request: state.octokit.request,
    ...options,
    allowSignup: state.allowSignup ?? options.allowSignup,
    redirectUrl: options.redirectUrl ?? state.redirectUrl,
    scopes: options.scopes ?? state.defaultScopes
  };
  return OAuthMethods.getWebFlowAuthorizationUrl({
    clientType: state.clientType,
    ...optionsWithDefaults
  });
}

// pkg/dist-src/methods/create-token.js
var OAuthAppAuth = __toESM(__webpack_require__(/*! @octokit/auth-oauth-app */ "./node_modules/@octokit/auth-oauth-app/dist-web/index.js"));
async function createTokenWithState(state, options) {
  const authentication = await state.octokit.auth({
    type: "oauth-user",
    ...options
  });
  await emitEvent(state, {
    name: "token",
    action: "created",
    token: authentication.token,
    scopes: authentication.scopes,
    authentication,
    octokit: new state.Octokit({
      authStrategy: OAuthAppAuth.createOAuthUserAuth,
      auth: {
        clientType: state.clientType,
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        token: authentication.token,
        scopes: authentication.scopes,
        refreshToken: authentication.refreshToken,
        expiresAt: authentication.expiresAt,
        refreshTokenExpiresAt: authentication.refreshTokenExpiresAt
      }
    })
  });
  return { authentication };
}

// pkg/dist-src/methods/check-token.js
var OAuthMethods2 = __toESM(__webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/index.js"));
async function checkTokenWithState(state, options) {
  const result = await OAuthMethods2.checkToken({
    // @ts-expect-error not worth the extra code to appease TS
    clientType: state.clientType,
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    request: state.octokit.request,
    ...options
  });
  Object.assign(result.authentication, { type: "token", tokenType: "oauth" });
  return result;
}

// pkg/dist-src/methods/reset-token.js
var OAuthMethods3 = __toESM(__webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/index.js"));
var import_auth_oauth_user2 = __webpack_require__(/*! @octokit/auth-oauth-user */ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js");
async function resetTokenWithState(state, options) {
  const optionsWithDefaults = {
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    request: state.octokit.request,
    ...options
  };
  if (state.clientType === "oauth-app") {
    const response2 = await OAuthMethods3.resetToken({
      clientType: "oauth-app",
      ...optionsWithDefaults
    });
    const authentication2 = Object.assign(response2.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    await emitEvent(state, {
      name: "token",
      action: "reset",
      token: response2.authentication.token,
      scopes: response2.authentication.scopes || void 0,
      authentication: authentication2,
      octokit: new state.Octokit({
        authStrategy: import_auth_oauth_user2.createOAuthUserAuth,
        auth: {
          clientType: state.clientType,
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          token: response2.authentication.token,
          scopes: response2.authentication.scopes
        }
      })
    });
    return { ...response2, authentication: authentication2 };
  }
  const response = await OAuthMethods3.resetToken({
    clientType: "github-app",
    ...optionsWithDefaults
  });
  const authentication = Object.assign(response.authentication, {
    type: "token",
    tokenType: "oauth"
  });
  await emitEvent(state, {
    name: "token",
    action: "reset",
    token: response.authentication.token,
    authentication,
    octokit: new state.Octokit({
      authStrategy: import_auth_oauth_user2.createOAuthUserAuth,
      auth: {
        clientType: state.clientType,
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        token: response.authentication.token
      }
    })
  });
  return { ...response, authentication };
}

// pkg/dist-src/methods/refresh-token.js
var OAuthMethods4 = __toESM(__webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/index.js"));
var import_auth_oauth_user3 = __webpack_require__(/*! @octokit/auth-oauth-user */ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js");
async function refreshTokenWithState(state, options) {
  if (state.clientType === "oauth-app") {
    throw new Error(
      "[@octokit/oauth-app] app.refreshToken() is not supported for OAuth Apps"
    );
  }
  const response = await OAuthMethods4.refreshToken({
    clientType: "github-app",
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    request: state.octokit.request,
    refreshToken: options.refreshToken
  });
  const authentication = Object.assign(response.authentication, {
    type: "token",
    tokenType: "oauth"
  });
  await emitEvent(state, {
    name: "token",
    action: "refreshed",
    token: response.authentication.token,
    authentication,
    octokit: new state.Octokit({
      authStrategy: import_auth_oauth_user3.createOAuthUserAuth,
      auth: {
        clientType: state.clientType,
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        token: response.authentication.token
      }
    })
  });
  return { ...response, authentication };
}

// pkg/dist-src/methods/scope-token.js
var OAuthMethods5 = __toESM(__webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/index.js"));
var import_auth_oauth_user4 = __webpack_require__(/*! @octokit/auth-oauth-user */ "./node_modules/@octokit/auth-oauth-user/dist-web/index.js");
async function scopeTokenWithState(state, options) {
  if (state.clientType === "oauth-app") {
    throw new Error(
      "[@octokit/oauth-app] app.scopeToken() is not supported for OAuth Apps"
    );
  }
  const response = await OAuthMethods5.scopeToken({
    clientType: "github-app",
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    request: state.octokit.request,
    ...options
  });
  const authentication = Object.assign(response.authentication, {
    type: "token",
    tokenType: "oauth"
  });
  await emitEvent(state, {
    name: "token",
    action: "scoped",
    token: response.authentication.token,
    authentication,
    octokit: new state.Octokit({
      authStrategy: import_auth_oauth_user4.createOAuthUserAuth,
      auth: {
        clientType: state.clientType,
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        token: response.authentication.token
      }
    })
  });
  return { ...response, authentication };
}

// pkg/dist-src/methods/delete-token.js
var OAuthMethods6 = __toESM(__webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/index.js"));
var import_auth_unauthenticated = __webpack_require__(/*! @octokit/auth-unauthenticated */ "./node_modules/@octokit/auth-unauthenticated/dist-web/index.js");
async function deleteTokenWithState(state, options) {
  const optionsWithDefaults = {
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    request: state.octokit.request,
    ...options
  };
  const response = state.clientType === "oauth-app" ? await OAuthMethods6.deleteToken({
    clientType: "oauth-app",
    ...optionsWithDefaults
  }) : (
    // istanbul ignore next
    await OAuthMethods6.deleteToken({
      clientType: "github-app",
      ...optionsWithDefaults
    })
  );
  await emitEvent(state, {
    name: "token",
    action: "deleted",
    token: options.token,
    octokit: new state.Octokit({
      authStrategy: import_auth_unauthenticated.createUnauthenticatedAuth,
      auth: {
        reason: `Handling "token.deleted" event. The access for the token has been revoked.`
      }
    })
  });
  return response;
}

// pkg/dist-src/methods/delete-authorization.js
var OAuthMethods7 = __toESM(__webpack_require__(/*! @octokit/oauth-methods */ "./node_modules/@octokit/oauth-methods/dist-src/index.js"));
var import_auth_unauthenticated2 = __webpack_require__(/*! @octokit/auth-unauthenticated */ "./node_modules/@octokit/auth-unauthenticated/dist-web/index.js");
async function deleteAuthorizationWithState(state, options) {
  const optionsWithDefaults = {
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    request: state.octokit.request,
    ...options
  };
  const response = state.clientType === "oauth-app" ? await OAuthMethods7.deleteAuthorization({
    clientType: "oauth-app",
    ...optionsWithDefaults
  }) : (
    // istanbul ignore next
    await OAuthMethods7.deleteAuthorization({
      clientType: "github-app",
      ...optionsWithDefaults
    })
  );
  await emitEvent(state, {
    name: "token",
    action: "deleted",
    token: options.token,
    octokit: new state.Octokit({
      authStrategy: import_auth_unauthenticated2.createUnauthenticatedAuth,
      auth: {
        reason: `Handling "token.deleted" event. The access for the token has been revoked.`
      }
    })
  });
  await emitEvent(state, {
    name: "authorization",
    action: "deleted",
    token: options.token,
    octokit: new state.Octokit({
      authStrategy: import_auth_unauthenticated2.createUnauthenticatedAuth,
      auth: {
        reason: `Handling "authorization.deleted" event. The access for the app has been revoked.`
      }
    })
  });
  return response;
}

// pkg/dist-src/middleware/unknown-route-response.js
function unknownRouteResponse(request) {
  return {
    status: 404,
    headers: { "content-type": "application/json" },
    text: JSON.stringify({
      error: `Unknown route: ${request.method} ${request.url}`
    })
  };
}

// pkg/dist-src/middleware/handle-request.js
async function handleRequest(app, { pathPrefix = "/api/github/oauth" }, request) {
  if (request.method === "OPTIONS") {
    return {
      status: 200,
      headers: {
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "*",
        "access-control-allow-headers": "Content-Type, User-Agent, Authorization"
      }
    };
  }
  let { pathname } = new URL(request.url, "http://localhost");
  if (!pathname.startsWith(`${pathPrefix}/`)) {
    return void 0;
  }
  pathname = pathname.slice(pathPrefix.length + 1);
  const route = [request.method, pathname].join(" ");
  const routes = {
    getLogin: `GET login`,
    getCallback: `GET callback`,
    createToken: `POST token`,
    getToken: `GET token`,
    patchToken: `PATCH token`,
    patchRefreshToken: `PATCH refresh-token`,
    scopeToken: `POST token/scoped`,
    deleteToken: `DELETE token`,
    deleteGrant: `DELETE grant`
  };
  if (!Object.values(routes).includes(route)) {
    return unknownRouteResponse(request);
  }
  let json;
  try {
    const text = await request.text();
    json = text ? JSON.parse(text) : {};
  } catch (error) {
    return {
      status: 400,
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*"
      },
      text: JSON.stringify({
        error: "[@octokit/oauth-app] request error"
      })
    };
  }
  const { searchParams } = new URL(request.url, "http://localhost");
  const query = Object.fromEntries(searchParams);
  const headers = request.headers;
  try {
    if (route === routes.getLogin) {
      const { url } = app.getWebFlowAuthorizationUrl({
        state: query.state,
        scopes: query.scopes ? query.scopes.split(",") : void 0,
        allowSignup: query.allowSignup ? query.allowSignup === "true" : void 0,
        redirectUrl: query.redirectUrl
      });
      return { status: 302, headers: { location: url } };
    }
    if (route === routes.getCallback) {
      if (query.error) {
        throw new Error(
          `[@octokit/oauth-app] ${query.error} ${query.error_description}`
        );
      }
      if (!query.code) {
        throw new Error('[@octokit/oauth-app] "code" parameter is required');
      }
      const {
        authentication: { token: token2 }
      } = await app.createToken({
        code: query.code
      });
      return {
        status: 200,
        headers: {
          "content-type": "text/html"
        },
        text: `<h1>Token created successfully</h1>

<p>Your token is: <strong>${token2}</strong>. Copy it now as it cannot be shown again.</p>`
      };
    }
    if (route === routes.createToken) {
      const { code, redirectUrl } = json;
      if (!code) {
        throw new Error('[@octokit/oauth-app] "code" parameter is required');
      }
      const result = await app.createToken({
        code,
        redirectUrl
      });
      delete result.authentication.clientSecret;
      return {
        status: 201,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify(result)
      };
    }
    if (route === routes.getToken) {
      const token2 = headers.authorization?.substr("token ".length);
      if (!token2) {
        throw new Error(
          '[@octokit/oauth-app] "Authorization" header is required'
        );
      }
      const result = await app.checkToken({
        token: token2
      });
      delete result.authentication.clientSecret;
      return {
        status: 200,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify(result)
      };
    }
    if (route === routes.patchToken) {
      const token2 = headers.authorization?.substr("token ".length);
      if (!token2) {
        throw new Error(
          '[@octokit/oauth-app] "Authorization" header is required'
        );
      }
      const result = await app.resetToken({ token: token2 });
      delete result.authentication.clientSecret;
      return {
        status: 200,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify(result)
      };
    }
    if (route === routes.patchRefreshToken) {
      const token2 = headers.authorization?.substr("token ".length);
      if (!token2) {
        throw new Error(
          '[@octokit/oauth-app] "Authorization" header is required'
        );
      }
      const { refreshToken: refreshToken2 } = json;
      if (!refreshToken2) {
        throw new Error(
          "[@octokit/oauth-app] refreshToken must be sent in request body"
        );
      }
      const result = await app.refreshToken({ refreshToken: refreshToken2 });
      delete result.authentication.clientSecret;
      return {
        status: 200,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify(result)
      };
    }
    if (route === routes.scopeToken) {
      const token2 = headers.authorization?.substr("token ".length);
      if (!token2) {
        throw new Error(
          '[@octokit/oauth-app] "Authorization" header is required'
        );
      }
      const result = await app.scopeToken({
        token: token2,
        ...json
      });
      delete result.authentication.clientSecret;
      return {
        status: 200,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify(result)
      };
    }
    if (route === routes.deleteToken) {
      const token2 = headers.authorization?.substr("token ".length);
      if (!token2) {
        throw new Error(
          '[@octokit/oauth-app] "Authorization" header is required'
        );
      }
      await app.deleteToken({
        token: token2
      });
      return {
        status: 204,
        headers: { "access-control-allow-origin": "*" }
      };
    }
    const token = headers.authorization?.substr("token ".length);
    if (!token) {
      throw new Error(
        '[@octokit/oauth-app] "Authorization" header is required'
      );
    }
    await app.deleteAuthorization({
      token
    });
    return {
      status: 204,
      headers: { "access-control-allow-origin": "*" }
    };
  } catch (error) {
    return {
      status: 400,
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*"
      },
      text: JSON.stringify({ error: error.message })
    };
  }
}

// pkg/dist-src/middleware/node/parse-request.js
function parseRequest(request) {
  const { method, url, headers } = request;
  async function text() {
    const text2 = await new Promise((resolve, reject) => {
      let bodyChunks = [];
      request.on("error", reject).on("data", (chunk) => bodyChunks.push(chunk)).on("end", () => resolve(Buffer.concat(bodyChunks).toString()));
    });
    return text2;
  }
  return { method, url, headers, text };
}

// pkg/dist-src/middleware/node/send-response.js
function sendResponse(octokitResponse, response) {
  response.writeHead(octokitResponse.status, octokitResponse.headers);
  response.end(octokitResponse.text);
}

// pkg/dist-src/middleware/node/index.js
function createNodeMiddleware(app, options = {}) {
  return async function(request, response, next) {
    const octokitRequest = await parseRequest(request);
    const octokitResponse = await handleRequest(app, options, octokitRequest);
    if (octokitResponse) {
      sendResponse(octokitResponse, response);
      return true;
    } else {
      next?.();
      return false;
    }
  };
}

// pkg/dist-src/middleware/web-worker/parse-request.js
function parseRequest2(request) {
  const headers = Object.fromEntries(request.headers.entries());
  return {
    method: request.method,
    url: request.url,
    headers,
    text: () => request.text()
  };
}

// pkg/dist-src/middleware/web-worker/send-response.js
function sendResponse2(octokitResponse) {
  return new Response(octokitResponse.text, {
    status: octokitResponse.status,
    headers: octokitResponse.headers
  });
}

// pkg/dist-src/middleware/web-worker/index.js
function createWebWorkerHandler(app, options = {}) {
  return async function(request) {
    const octokitRequest = await parseRequest2(request);
    const octokitResponse = await handleRequest(app, options, octokitRequest);
    return octokitResponse ? sendResponse2(octokitResponse) : void 0;
  };
}

// pkg/dist-src/middleware/aws-lambda/api-gateway-v2-parse-request.js
function parseRequest3(request) {
  const { method } = request.requestContext.http;
  let url = request.rawPath;
  const { stage } = request.requestContext;
  if (url.startsWith("/" + stage))
    url = url.substring(stage.length + 1);
  if (request.rawQueryString)
    url += "?" + request.rawQueryString;
  const headers = request.headers;
  const text = async () => request.body || "";
  return { method, url, headers, text };
}

// pkg/dist-src/middleware/aws-lambda/api-gateway-v2-send-response.js
function sendResponse3(octokitResponse) {
  return {
    statusCode: octokitResponse.status,
    headers: octokitResponse.headers,
    body: octokitResponse.text
  };
}

// pkg/dist-src/middleware/aws-lambda/api-gateway-v2.js
function createAWSLambdaAPIGatewayV2Handler(app, options = {}) {
  return async function(event) {
    const request = parseRequest3(event);
    const response = await handleRequest(app, options, request);
    return response ? sendResponse3(response) : void 0;
  };
}

// pkg/dist-src/index.js
var OAuthApp = class {
  static {
    this.VERSION = VERSION;
  }
  static defaults(defaults) {
    const OAuthAppWithDefaults = class extends this {
      constructor(...args) {
        super({
          ...defaults,
          ...args[0]
        });
      }
    };
    return OAuthAppWithDefaults;
  }
  constructor(options) {
    const Octokit2 = options.Octokit || OAuthAppOctokit;
    this.type = options.clientType || "oauth-app";
    const octokit = new Octokit2({
      authStrategy: import_auth_oauth_app.createOAuthAppAuth,
      auth: {
        clientType: this.type,
        clientId: options.clientId,
        clientSecret: options.clientSecret
      }
    });
    const state = {
      clientType: this.type,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      // @ts-expect-error defaultScopes not permitted for GitHub Apps
      defaultScopes: options.defaultScopes || [],
      allowSignup: options.allowSignup,
      baseUrl: options.baseUrl,
      redirectUrl: options.redirectUrl,
      log: options.log,
      Octokit: Octokit2,
      octokit,
      eventHandlers: {}
    };
    this.on = addEventHandler.bind(null, state);
    this.octokit = octokit;
    this.getUserOctokit = getUserOctokitWithState.bind(null, state);
    this.getWebFlowAuthorizationUrl = getWebFlowAuthorizationUrlWithState.bind(
      null,
      state
    );
    this.createToken = createTokenWithState.bind(
      null,
      state
    );
    this.checkToken = checkTokenWithState.bind(
      null,
      state
    );
    this.resetToken = resetTokenWithState.bind(
      null,
      state
    );
    this.refreshToken = refreshTokenWithState.bind(
      null,
      state
    );
    this.scopeToken = scopeTokenWithState.bind(
      null,
      state
    );
    this.deleteToken = deleteTokenWithState.bind(null, state);
    this.deleteAuthorization = deleteAuthorizationWithState.bind(null, state);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ "./node_modules/@octokit/oauth-authorization-url/dist-web/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@octokit/oauth-authorization-url/dist-web/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oauthAuthorizationUrl: () => (/* binding */ oauthAuthorizationUrl)
/* harmony export */ });
// pkg/dist-src/index.js
function oauthAuthorizationUrl(options) {
  const clientType = options.clientType || "oauth-app";
  const baseUrl = options.baseUrl || "https://github.com";
  const result = {
    clientType,
    allowSignup: options.allowSignup === false ? false : true,
    clientId: options.clientId,
    login: options.login || null,
    redirectUrl: options.redirectUrl || null,
    state: options.state || Math.random().toString(36).substr(2),
    url: ""
  };
  if (clientType === "oauth-app") {
    const scopes = "scopes" in options ? options.scopes : [];
    result.scopes = typeof scopes === "string" ? scopes.split(/[,\s]+/).filter(Boolean) : scopes;
  }
  result.url = urlBuilderAuthorize(`${baseUrl}/login/oauth/authorize`, result);
  return result;
}
function urlBuilderAuthorize(base, options) {
  const map = {
    allowSignup: "allow_signup",
    clientId: "client_id",
    login: "login",
    redirectUrl: "redirect_uri",
    scopes: "scope",
    state: "state"
  };
  let url = base;
  Object.keys(map).filter((k) => options[k] !== null).filter((k) => {
    if (k !== "scopes")
      return true;
    if (options.clientType === "github-app")
      return false;
    return !Array.isArray(options[k]) || options[k].length > 0;
  }).map((key) => [map[key], `${options[key]}`]).forEach(([key, value], index) => {
    url += index === 0 ? `?` : "&";
    url += `${key}=${encodeURIComponent(value)}`;
  });
  return url;
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/check-token.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/check-token.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkToken: () => (/* binding */ checkToken)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_0__);


async function checkToken(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_1__.request;
  const response = await request("POST /applications/{client_id}/token", {
    headers: {
      authorization: `basic ${btoa_lite__WEBPACK_IMPORTED_MODULE_0___default()(
        `${options.clientId}:${options.clientSecret}`
      )}`
    },
    client_id: options.clientId,
    access_token: options.token
  });
  const authentication = {
    clientType: options.clientType,
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    token: options.token,
    scopes: response.data.scopes
  };
  if (response.data.expires_at)
    authentication.expiresAt = response.data.expires_at;
  if (options.clientType === "github-app") {
    delete authentication.scopes;
  }
  return { ...response, authentication };
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/create-device-code.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/create-device-code.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDeviceCode: () => (/* binding */ createDeviceCode)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@octokit/oauth-methods/dist-src/utils.js");


async function createDeviceCode(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_0__.request;
  const parameters = {
    client_id: options.clientId
  };
  if ("scopes" in options && Array.isArray(options.scopes)) {
    parameters.scope = options.scopes.join(" ");
  }
  return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.oauthRequest)(request, "POST /login/device/code", parameters);
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/delete-authorization.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/delete-authorization.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteAuthorization: () => (/* binding */ deleteAuthorization)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_0__);


async function deleteAuthorization(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_1__.request;
  const auth = btoa_lite__WEBPACK_IMPORTED_MODULE_0___default()(`${options.clientId}:${options.clientSecret}`);
  return request(
    "DELETE /applications/{client_id}/grant",
    {
      headers: {
        authorization: `basic ${auth}`
      },
      client_id: options.clientId,
      access_token: options.token
    }
  );
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/delete-token.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/delete-token.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteToken: () => (/* binding */ deleteToken)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_0__);


async function deleteToken(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_1__.request;
  const auth = btoa_lite__WEBPACK_IMPORTED_MODULE_0___default()(`${options.clientId}:${options.clientSecret}`);
  return request(
    "DELETE /applications/{client_id}/token",
    {
      headers: {
        authorization: `basic ${auth}`
      },
      client_id: options.clientId,
      access_token: options.token
    }
  );
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/exchange-device-code.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/exchange-device-code.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exchangeDeviceCode: () => (/* binding */ exchangeDeviceCode)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@octokit/oauth-methods/dist-src/utils.js");


async function exchangeDeviceCode(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_0__.request;
  const response = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.oauthRequest)(
    request,
    "POST /login/oauth/access_token",
    {
      client_id: options.clientId,
      device_code: options.code,
      grant_type: "urn:ietf:params:oauth:grant-type:device_code"
    }
  );
  const authentication = {
    clientType: options.clientType,
    clientId: options.clientId,
    token: response.data.access_token,
    scopes: response.data.scope.split(/\s+/).filter(Boolean)
  };
  if ("clientSecret" in options) {
    authentication.clientSecret = options.clientSecret;
  }
  if (options.clientType === "github-app") {
    if ("refresh_token" in response.data) {
      const apiTimeInMs = new Date(response.headers.date).getTime();
      authentication.refreshToken = response.data.refresh_token, authentication.expiresAt = toTimestamp(
        apiTimeInMs,
        response.data.expires_in
      ), authentication.refreshTokenExpiresAt = toTimestamp(
        apiTimeInMs,
        response.data.refresh_token_expires_in
      );
    }
    delete authentication.scopes;
  }
  return { ...response, authentication };
}
function toTimestamp(apiTimeInMs, expirationInSeconds) {
  return new Date(apiTimeInMs + expirationInSeconds * 1e3).toISOString();
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/exchange-web-flow-code.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/exchange-web-flow-code.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exchangeWebFlowCode: () => (/* binding */ exchangeWebFlowCode)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@octokit/oauth-methods/dist-src/utils.js");


async function exchangeWebFlowCode(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_0__.request;
  const response = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.oauthRequest)(
    request,
    "POST /login/oauth/access_token",
    {
      client_id: options.clientId,
      client_secret: options.clientSecret,
      code: options.code,
      redirect_uri: options.redirectUrl
    }
  );
  const authentication = {
    clientType: options.clientType,
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    token: response.data.access_token,
    scopes: response.data.scope.split(/\s+/).filter(Boolean)
  };
  if (options.clientType === "github-app") {
    if ("refresh_token" in response.data) {
      const apiTimeInMs = new Date(response.headers.date).getTime();
      authentication.refreshToken = response.data.refresh_token, authentication.expiresAt = toTimestamp(
        apiTimeInMs,
        response.data.expires_in
      ), authentication.refreshTokenExpiresAt = toTimestamp(
        apiTimeInMs,
        response.data.refresh_token_expires_in
      );
    }
    delete authentication.scopes;
  }
  return { ...response, authentication };
}
function toTimestamp(apiTimeInMs, expirationInSeconds) {
  return new Date(apiTimeInMs + expirationInSeconds * 1e3).toISOString();
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/get-web-flow-authorization-url.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/get-web-flow-authorization-url.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWebFlowAuthorizationUrl: () => (/* binding */ getWebFlowAuthorizationUrl)
/* harmony export */ });
/* harmony import */ var _octokit_oauth_authorization_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/oauth-authorization-url */ "./node_modules/@octokit/oauth-authorization-url/dist-web/index.js");
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@octokit/oauth-methods/dist-src/utils.js");



function getWebFlowAuthorizationUrl({
  request = _octokit_request__WEBPACK_IMPORTED_MODULE_0__.request,
  ...options
}) {
  const baseUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.requestToOAuthBaseUrl)(request);
  return (0,_octokit_oauth_authorization_url__WEBPACK_IMPORTED_MODULE_2__.oauthAuthorizationUrl)({
    ...options,
    baseUrl
  });
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* reexport safe */ _version__WEBPACK_IMPORTED_MODULE_10__.VERSION),
/* harmony export */   checkToken: () => (/* reexport safe */ _check_token__WEBPACK_IMPORTED_MODULE_4__.checkToken),
/* harmony export */   createDeviceCode: () => (/* reexport safe */ _create_device_code__WEBPACK_IMPORTED_MODULE_2__.createDeviceCode),
/* harmony export */   deleteAuthorization: () => (/* reexport safe */ _delete_authorization__WEBPACK_IMPORTED_MODULE_9__.deleteAuthorization),
/* harmony export */   deleteToken: () => (/* reexport safe */ _delete_token__WEBPACK_IMPORTED_MODULE_8__.deleteToken),
/* harmony export */   exchangeDeviceCode: () => (/* reexport safe */ _exchange_device_code__WEBPACK_IMPORTED_MODULE_3__.exchangeDeviceCode),
/* harmony export */   exchangeWebFlowCode: () => (/* reexport safe */ _exchange_web_flow_code__WEBPACK_IMPORTED_MODULE_1__.exchangeWebFlowCode),
/* harmony export */   getWebFlowAuthorizationUrl: () => (/* reexport safe */ _get_web_flow_authorization_url__WEBPACK_IMPORTED_MODULE_0__.getWebFlowAuthorizationUrl),
/* harmony export */   refreshToken: () => (/* reexport safe */ _refresh_token__WEBPACK_IMPORTED_MODULE_5__.refreshToken),
/* harmony export */   resetToken: () => (/* reexport safe */ _reset_token__WEBPACK_IMPORTED_MODULE_7__.resetToken),
/* harmony export */   scopeToken: () => (/* reexport safe */ _scope_token__WEBPACK_IMPORTED_MODULE_6__.scopeToken)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./version */ "./node_modules/@octokit/oauth-methods/dist-src/version.js");
/* harmony import */ var _get_web_flow_authorization_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-web-flow-authorization-url */ "./node_modules/@octokit/oauth-methods/dist-src/get-web-flow-authorization-url.js");
/* harmony import */ var _exchange_web_flow_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-web-flow-code */ "./node_modules/@octokit/oauth-methods/dist-src/exchange-web-flow-code.js");
/* harmony import */ var _create_device_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-device-code */ "./node_modules/@octokit/oauth-methods/dist-src/create-device-code.js");
/* harmony import */ var _exchange_device_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchange-device-code */ "./node_modules/@octokit/oauth-methods/dist-src/exchange-device-code.js");
/* harmony import */ var _check_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-token */ "./node_modules/@octokit/oauth-methods/dist-src/check-token.js");
/* harmony import */ var _refresh_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refresh-token */ "./node_modules/@octokit/oauth-methods/dist-src/refresh-token.js");
/* harmony import */ var _scope_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scope-token */ "./node_modules/@octokit/oauth-methods/dist-src/scope-token.js");
/* harmony import */ var _reset_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-token */ "./node_modules/@octokit/oauth-methods/dist-src/reset-token.js");
/* harmony import */ var _delete_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete-token */ "./node_modules/@octokit/oauth-methods/dist-src/delete-token.js");
/* harmony import */ var _delete_authorization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-authorization */ "./node_modules/@octokit/oauth-methods/dist-src/delete-authorization.js");














/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/refresh-token.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/refresh-token.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshToken: () => (/* binding */ refreshToken)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@octokit/oauth-methods/dist-src/utils.js");


async function refreshToken(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_0__.request;
  const response = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.oauthRequest)(
    request,
    "POST /login/oauth/access_token",
    {
      client_id: options.clientId,
      client_secret: options.clientSecret,
      grant_type: "refresh_token",
      refresh_token: options.refreshToken
    }
  );
  const apiTimeInMs = new Date(response.headers.date).getTime();
  const authentication = {
    clientType: "github-app",
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    token: response.data.access_token,
    refreshToken: response.data.refresh_token,
    expiresAt: toTimestamp(apiTimeInMs, response.data.expires_in),
    refreshTokenExpiresAt: toTimestamp(
      apiTimeInMs,
      response.data.refresh_token_expires_in
    )
  };
  return { ...response, authentication };
}
function toTimestamp(apiTimeInMs, expirationInSeconds) {
  return new Date(apiTimeInMs + expirationInSeconds * 1e3).toISOString();
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/reset-token.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/reset-token.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetToken: () => (/* binding */ resetToken)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_0__);


async function resetToken(options) {
  const request = options.request || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_1__.request;
  const auth = btoa_lite__WEBPACK_IMPORTED_MODULE_0___default()(`${options.clientId}:${options.clientSecret}`);
  const response = await request(
    "PATCH /applications/{client_id}/token",
    {
      headers: {
        authorization: `basic ${auth}`
      },
      client_id: options.clientId,
      access_token: options.token
    }
  );
  const authentication = {
    clientType: options.clientType,
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    token: response.data.token,
    scopes: response.data.scopes
  };
  if (response.data.expires_at)
    authentication.expiresAt = response.data.expires_at;
  if (options.clientType === "github-app") {
    delete authentication.scopes;
  }
  return { ...response, authentication };
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/scope-token.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/scope-token.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scopeToken: () => (/* binding */ scopeToken)
/* harmony export */ });
/* harmony import */ var _octokit_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request */ "./node_modules/@octokit/request/dist-web/index.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js");
/* harmony import */ var btoa_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(btoa_lite__WEBPACK_IMPORTED_MODULE_0__);


async function scopeToken(options) {
  const {
    request: optionsRequest,
    clientType,
    clientId,
    clientSecret,
    token,
    ...requestOptions
  } = options;
  const request = optionsRequest || /* istanbul ignore next: we always pass a custom request in tests */
  _octokit_request__WEBPACK_IMPORTED_MODULE_1__.request;
  const response = await request(
    "POST /applications/{client_id}/token/scoped",
    {
      headers: {
        authorization: `basic ${btoa_lite__WEBPACK_IMPORTED_MODULE_0___default()(`${clientId}:${clientSecret}`)}`
      },
      client_id: clientId,
      access_token: token,
      ...requestOptions
    }
  );
  const authentication = Object.assign(
    {
      clientType,
      clientId,
      clientSecret,
      token: response.data.token
    },
    response.data.expires_at ? { expiresAt: response.data.expires_at } : {}
  );
  return { ...response, authentication };
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oauthRequest: () => (/* binding */ oauthRequest),
/* harmony export */   requestToOAuthBaseUrl: () => (/* binding */ requestToOAuthBaseUrl)
/* harmony export */ });
/* harmony import */ var _octokit_request_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/request-error */ "./node_modules/@octokit/request-error/dist-web/index.js");

function requestToOAuthBaseUrl(request) {
  const endpointDefaults = request.endpoint.DEFAULTS;
  return /^https:\/\/(api\.)?github\.com$/.test(endpointDefaults.baseUrl) ? "https://github.com" : endpointDefaults.baseUrl.replace("/api/v3", "");
}
async function oauthRequest(request, route, parameters) {
  const withOAuthParameters = {
    baseUrl: requestToOAuthBaseUrl(request),
    headers: {
      accept: "application/json"
    },
    ...parameters
  };
  const response = await request(route, withOAuthParameters);
  if ("error" in response.data) {
    const error = new _octokit_request_error__WEBPACK_IMPORTED_MODULE_0__.RequestError(
      `${response.data.error_description} (${response.data.error}, ${response.data.error_uri})`,
      400,
      {
        request: request.endpoint.merge(
          route,
          withOAuthParameters
        ),
        headers: response.headers
      }
    );
    error.response = response;
    throw error;
  }
  return response;
}



/***/ }),

/***/ "./node_modules/@octokit/oauth-methods/dist-src/version.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@octokit/oauth-methods/dist-src/version.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "4.0.0";



/***/ }),

/***/ "./node_modules/@octokit/plugin-paginate-graphql/dist-web/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@octokit/plugin-paginate-graphql/dist-web/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paginateGraphql: () => (/* binding */ paginateGraphql)
/* harmony export */ });
// pkg/dist-src/index.js


// pkg/dist-src/errors.js
var generateMessage = (path, cursorValue) => `The cursor at "${path.join(
  ","
)}" did not change its value "${cursorValue}" after a page transition. Please make sure your that your query is set up correctly.`;
var MissingCursorChange = class extends Error {
  constructor(pageInfo, cursorValue) {
    super(generateMessage(pageInfo.pathInQuery, cursorValue));
    this.pageInfo = pageInfo;
    this.cursorValue = cursorValue;
    this.name = "MissingCursorChangeError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var MissingPageInfo = class extends Error {
  constructor(response) {
    super(
      `No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(
        response,
        null,
        2
      )}`
    );
    this.response = response;
    this.name = "MissingPageInfo";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};

// pkg/dist-src/object-helpers.js
var isObject = (value) => Object.prototype.toString.call(value) === "[object Object]";
function findPaginatedResourcePath(responseData) {
  const paginatedResourcePath = deepFindPathToProperty(
    responseData,
    "pageInfo"
  );
  if (paginatedResourcePath.length === 0) {
    throw new MissingPageInfo(responseData);
  }
  return paginatedResourcePath;
}
var deepFindPathToProperty = (object, searchProp, path = []) => {
  for (const key of Object.keys(object)) {
    const currentPath = [...path, key];
    const currentValue = object[key];
    if (currentValue.hasOwnProperty(searchProp)) {
      return currentPath;
    }
    if (isObject(currentValue)) {
      const result = deepFindPathToProperty(
        currentValue,
        searchProp,
        currentPath
      );
      if (result.length > 0) {
        return result;
      }
    }
  }
  return [];
};
var get = (object, path) => {
  return path.reduce((current, nextProperty) => current[nextProperty], object);
};
var set = (object, path, mutator) => {
  const lastProperty = path[path.length - 1];
  const parentPath = [...path].slice(0, -1);
  const parent = get(object, parentPath);
  if (typeof mutator === "function") {
    parent[lastProperty] = mutator(parent[lastProperty]);
  } else {
    parent[lastProperty] = mutator;
  }
};

// pkg/dist-src/extract-page-info.js
var extractPageInfos = (responseData) => {
  const pageInfoPath = findPaginatedResourcePath(responseData);
  return {
    pathInQuery: pageInfoPath,
    pageInfo: get(responseData, [...pageInfoPath, "pageInfo"])
  };
};

// pkg/dist-src/iterator.js


// pkg/dist-src/page-info.js
var isForwardSearch = (givenPageInfo) => {
  return givenPageInfo.hasOwnProperty("hasNextPage");
};
var getCursorFrom = (pageInfo) => isForwardSearch(pageInfo) ? pageInfo.endCursor : pageInfo.startCursor;
var hasAnotherPage = (pageInfo) => isForwardSearch(pageInfo) ? pageInfo.hasNextPage : pageInfo.hasPreviousPage;

// pkg/dist-src/iterator.js
var createIterator = (octokit) => {
  return (query, initialParameters = {}) => {
    let nextPageExists = true;
    let parameters = { ...initialParameters };
    return {
      [Symbol.asyncIterator]: () => ({
        async next() {
          if (!nextPageExists)
            return { done: true, value: {} };
          const response = await octokit.graphql(
            query,
            parameters
          );
          const pageInfoContext = extractPageInfos(response);
          const nextCursorValue = getCursorFrom(pageInfoContext.pageInfo);
          nextPageExists = hasAnotherPage(pageInfoContext.pageInfo);
          if (nextPageExists && nextCursorValue === parameters.cursor) {
            throw new MissingCursorChange(pageInfoContext, nextCursorValue);
          }
          parameters = {
            ...parameters,
            cursor: nextCursorValue
          };
          return { done: false, value: response };
        }
      })
    };
  };
};

// pkg/dist-src/paginate.js


// pkg/dist-src/merge-responses.js
var mergeResponses = (response1, response2) => {
  if (Object.keys(response1).length === 0) {
    return Object.assign(response1, response2);
  }
  const path = findPaginatedResourcePath(response1);
  const nodesPath = [...path, "nodes"];
  const newNodes = get(response2, nodesPath);
  if (newNodes) {
    set(response1, nodesPath, (values) => {
      return [...values, ...newNodes];
    });
  }
  const edgesPath = [...path, "edges"];
  const newEdges = get(response2, edgesPath);
  if (newEdges) {
    set(response1, edgesPath, (values) => {
      return [...values, ...newEdges];
    });
  }
  const pageInfoPath = [...path, "pageInfo"];
  set(response1, pageInfoPath, get(response2, pageInfoPath));
  return response1;
};

// pkg/dist-src/paginate.js
var createPaginate = (octokit) => {
  const iterator = createIterator(octokit);
  return async (query, initialParameters = {}) => {
    let mergedResponse = {};
    for await (const response of iterator(
      query,
      initialParameters
    )) {
      mergedResponse = mergeResponses(mergedResponse, response);
    }
    return mergedResponse;
  };
};

// pkg/dist-src/index.js
function paginateGraphql(octokit) {
  octokit.graphql;
  return {
    graphql: Object.assign(octokit.graphql, {
      paginate: Object.assign(createPaginate(octokit), {
        iterator: createIterator(octokit)
      })
    })
  };
}



/***/ }),

/***/ "./node_modules/@octokit/plugin-paginate-rest/dist-web/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@octokit/plugin-paginate-rest/dist-web/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composePaginateRest: () => (/* binding */ composePaginateRest),
/* harmony export */   isPaginatingEndpoint: () => (/* binding */ isPaginatingEndpoint),
/* harmony export */   paginateRest: () => (/* binding */ paginateRest),
/* harmony export */   paginatingEndpoints: () => (/* binding */ paginatingEndpoints)
/* harmony export */ });
// pkg/dist-src/version.js
var VERSION = "8.0.0";

// pkg/dist-src/normalize-paginated-list-response.js
function normalizePaginatedListResponse(response) {
  if (!response.data) {
    return {
      ...response,
      data: []
    };
  }
  const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
  if (!responseNeedsNormalization)
    return response;
  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;
  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }
  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }
  response.data.total_count = totalCount;
  return response;
}

// pkg/dist-src/iterator.js
function iterator(octokit, route, parameters) {
  const options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
  const requestMethod = typeof route === "function" ? route : octokit.request;
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!url)
          return { done: true };
        try {
          const response = await requestMethod({ method, url, headers });
          const normalizedResponse = normalizePaginatedListResponse(response);
          url = ((normalizedResponse.headers.link || "").match(
            /<([^>]+)>;\s*rel="next"/
          ) || [])[1];
          return { value: normalizedResponse };
        } catch (error) {
          if (error.status !== 409)
            throw error;
          url = "";
          return {
            value: {
              status: 200,
              headers: {},
              data: []
            }
          };
        }
      }
    })
  };
}

// pkg/dist-src/paginate.js
function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = void 0;
  }
  return gather(
    octokit,
    [],
    iterator(octokit, route, parameters)[Symbol.asyncIterator](),
    mapFn
  );
}
function gather(octokit, results, iterator2, mapFn) {
  return iterator2.next().then((result) => {
    if (result.done) {
      return results;
    }
    let earlyExit = false;
    function done() {
      earlyExit = true;
    }
    results = results.concat(
      mapFn ? mapFn(result.value, done) : result.value.data
    );
    if (earlyExit) {
      return results;
    }
    return gather(octokit, results, iterator2, mapFn);
  });
}

// pkg/dist-src/compose-paginate.js
var composePaginateRest = Object.assign(paginate, {
  iterator
});

// pkg/dist-src/generated/paginating-endpoints.js
var paginatingEndpoints = [
  "GET /app/hook/deliveries",
  "GET /app/installation-requests",
  "GET /app/installations",
  "GET /enterprises/{enterprise}/dependabot/alerts",
  "GET /enterprises/{enterprise}/secret-scanning/alerts",
  "GET /events",
  "GET /gists",
  "GET /gists/public",
  "GET /gists/starred",
  "GET /gists/{gist_id}/comments",
  "GET /gists/{gist_id}/commits",
  "GET /gists/{gist_id}/forks",
  "GET /installation/repositories",
  "GET /issues",
  "GET /licenses",
  "GET /marketplace_listing/plans",
  "GET /marketplace_listing/plans/{plan_id}/accounts",
  "GET /marketplace_listing/stubbed/plans",
  "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
  "GET /networks/{owner}/{repo}/events",
  "GET /notifications",
  "GET /organizations",
  "GET /organizations/{org}/personal-access-token-requests",
  "GET /organizations/{org}/personal-access-token-requests/{pat_request_id}/repositories",
  "GET /organizations/{org}/personal-access-tokens",
  "GET /organizations/{org}/personal-access-tokens/{pat_id}/repositories",
  "GET /orgs/{org}/actions/cache/usage-by-repository",
  "GET /orgs/{org}/actions/permissions/repositories",
  "GET /orgs/{org}/actions/required_workflows",
  "GET /orgs/{org}/actions/runners",
  "GET /orgs/{org}/actions/secrets",
  "GET /orgs/{org}/actions/secrets/{secret_name}/repositories",
  "GET /orgs/{org}/actions/variables",
  "GET /orgs/{org}/actions/variables/{name}/repositories",
  "GET /orgs/{org}/blocks",
  "GET /orgs/{org}/code-scanning/alerts",
  "GET /orgs/{org}/codespaces",
  "GET /orgs/{org}/codespaces/secrets",
  "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories",
  "GET /orgs/{org}/dependabot/alerts",
  "GET /orgs/{org}/dependabot/secrets",
  "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories",
  "GET /orgs/{org}/events",
  "GET /orgs/{org}/failed_invitations",
  "GET /orgs/{org}/hooks",
  "GET /orgs/{org}/hooks/{hook_id}/deliveries",
  "GET /orgs/{org}/installations",
  "GET /orgs/{org}/invitations",
  "GET /orgs/{org}/invitations/{invitation_id}/teams",
  "GET /orgs/{org}/issues",
  "GET /orgs/{org}/members",
  "GET /orgs/{org}/members/{username}/codespaces",
  "GET /orgs/{org}/migrations",
  "GET /orgs/{org}/migrations/{migration_id}/repositories",
  "GET /orgs/{org}/outside_collaborators",
  "GET /orgs/{org}/packages",
  "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
  "GET /orgs/{org}/projects",
  "GET /orgs/{org}/public_members",
  "GET /orgs/{org}/repos",
  "GET /orgs/{org}/rulesets",
  "GET /orgs/{org}/secret-scanning/alerts",
  "GET /orgs/{org}/teams",
  "GET /orgs/{org}/teams/{team_slug}/discussions",
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
  "GET /orgs/{org}/teams/{team_slug}/invitations",
  "GET /orgs/{org}/teams/{team_slug}/members",
  "GET /orgs/{org}/teams/{team_slug}/projects",
  "GET /orgs/{org}/teams/{team_slug}/repos",
  "GET /orgs/{org}/teams/{team_slug}/teams",
  "GET /projects/columns/{column_id}/cards",
  "GET /projects/{project_id}/collaborators",
  "GET /projects/{project_id}/columns",
  "GET /repos/{org}/{repo}/actions/required_workflows",
  "GET /repos/{owner}/{repo}/actions/artifacts",
  "GET /repos/{owner}/{repo}/actions/caches",
  "GET /repos/{owner}/{repo}/actions/organization-secrets",
  "GET /repos/{owner}/{repo}/actions/organization-variables",
  "GET /repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs",
  "GET /repos/{owner}/{repo}/actions/runners",
  "GET /repos/{owner}/{repo}/actions/runs",
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
  "GET /repos/{owner}/{repo}/actions/secrets",
  "GET /repos/{owner}/{repo}/actions/variables",
  "GET /repos/{owner}/{repo}/actions/workflows",
  "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
  "GET /repos/{owner}/{repo}/assignees",
  "GET /repos/{owner}/{repo}/branches",
  "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
  "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
  "GET /repos/{owner}/{repo}/code-scanning/alerts",
  "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
  "GET /repos/{owner}/{repo}/code-scanning/analyses",
  "GET /repos/{owner}/{repo}/codespaces",
  "GET /repos/{owner}/{repo}/codespaces/devcontainers",
  "GET /repos/{owner}/{repo}/codespaces/secrets",
  "GET /repos/{owner}/{repo}/collaborators",
  "GET /repos/{owner}/{repo}/comments",
  "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
  "GET /repos/{owner}/{repo}/commits",
  "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
  "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
  "GET /repos/{owner}/{repo}/commits/{ref}/check-runs",
  "GET /repos/{owner}/{repo}/commits/{ref}/check-suites",
  "GET /repos/{owner}/{repo}/commits/{ref}/status",
  "GET /repos/{owner}/{repo}/commits/{ref}/statuses",
  "GET /repos/{owner}/{repo}/contributors",
  "GET /repos/{owner}/{repo}/dependabot/alerts",
  "GET /repos/{owner}/{repo}/dependabot/secrets",
  "GET /repos/{owner}/{repo}/deployments",
  "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
  "GET /repos/{owner}/{repo}/environments",
  "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
  "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps",
  "GET /repos/{owner}/{repo}/events",
  "GET /repos/{owner}/{repo}/forks",
  "GET /repos/{owner}/{repo}/hooks",
  "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
  "GET /repos/{owner}/{repo}/invitations",
  "GET /repos/{owner}/{repo}/issues",
  "GET /repos/{owner}/{repo}/issues/comments",
  "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
  "GET /repos/{owner}/{repo}/issues/events",
  "GET /repos/{owner}/{repo}/issues/{issue_number}/comments",
  "GET /repos/{owner}/{repo}/issues/{issue_number}/events",
  "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
  "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
  "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
  "GET /repos/{owner}/{repo}/keys",
  "GET /repos/{owner}/{repo}/labels",
  "GET /repos/{owner}/{repo}/milestones",
  "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
  "GET /repos/{owner}/{repo}/notifications",
  "GET /repos/{owner}/{repo}/pages/builds",
  "GET /repos/{owner}/{repo}/projects",
  "GET /repos/{owner}/{repo}/pulls",
  "GET /repos/{owner}/{repo}/pulls/comments",
  "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments",
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits",
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/files",
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews",
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
  "GET /repos/{owner}/{repo}/releases",
  "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
  "GET /repos/{owner}/{repo}/releases/{release_id}/reactions",
  "GET /repos/{owner}/{repo}/rules/branches/{branch}",
  "GET /repos/{owner}/{repo}/rulesets",
  "GET /repos/{owner}/{repo}/secret-scanning/alerts",
  "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
  "GET /repos/{owner}/{repo}/security-advisories",
  "GET /repos/{owner}/{repo}/stargazers",
  "GET /repos/{owner}/{repo}/subscribers",
  "GET /repos/{owner}/{repo}/tags",
  "GET /repos/{owner}/{repo}/teams",
  "GET /repos/{owner}/{repo}/topics",
  "GET /repositories",
  "GET /repositories/{repository_id}/environments/{environment_name}/secrets",
  "GET /repositories/{repository_id}/environments/{environment_name}/variables",
  "GET /search/code",
  "GET /search/commits",
  "GET /search/issues",
  "GET /search/labels",
  "GET /search/repositories",
  "GET /search/topics",
  "GET /search/users",
  "GET /teams/{team_id}/discussions",
  "GET /teams/{team_id}/discussions/{discussion_number}/comments",
  "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
  "GET /teams/{team_id}/discussions/{discussion_number}/reactions",
  "GET /teams/{team_id}/invitations",
  "GET /teams/{team_id}/members",
  "GET /teams/{team_id}/projects",
  "GET /teams/{team_id}/repos",
  "GET /teams/{team_id}/teams",
  "GET /user/blocks",
  "GET /user/codespaces",
  "GET /user/codespaces/secrets",
  "GET /user/emails",
  "GET /user/followers",
  "GET /user/following",
  "GET /user/gpg_keys",
  "GET /user/installations",
  "GET /user/installations/{installation_id}/repositories",
  "GET /user/issues",
  "GET /user/keys",
  "GET /user/marketplace_purchases",
  "GET /user/marketplace_purchases/stubbed",
  "GET /user/memberships/orgs",
  "GET /user/migrations",
  "GET /user/migrations/{migration_id}/repositories",
  "GET /user/orgs",
  "GET /user/packages",
  "GET /user/packages/{package_type}/{package_name}/versions",
  "GET /user/public_emails",
  "GET /user/repos",
  "GET /user/repository_invitations",
  "GET /user/social_accounts",
  "GET /user/ssh_signing_keys",
  "GET /user/starred",
  "GET /user/subscriptions",
  "GET /user/teams",
  "GET /users",
  "GET /users/{username}/events",
  "GET /users/{username}/events/orgs/{org}",
  "GET /users/{username}/events/public",
  "GET /users/{username}/followers",
  "GET /users/{username}/following",
  "GET /users/{username}/gists",
  "GET /users/{username}/gpg_keys",
  "GET /users/{username}/keys",
  "GET /users/{username}/orgs",
  "GET /users/{username}/packages",
  "GET /users/{username}/projects",
  "GET /users/{username}/received_events",
  "GET /users/{username}/received_events/public",
  "GET /users/{username}/repos",
  "GET /users/{username}/social_accounts",
  "GET /users/{username}/ssh_signing_keys",
  "GET /users/{username}/starred",
  "GET /users/{username}/subscriptions"
];

// pkg/dist-src/paginating-endpoints.js
function isPaginatingEndpoint(arg) {
  if (typeof arg === "string") {
    return paginatingEndpoints.includes(arg);
  } else {
    return false;
  }
}

// pkg/dist-src/index.js
function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}
paginateRest.VERSION = VERSION;



/***/ }),

/***/ "./node_modules/@octokit/plugin-rest-endpoint-methods/dist-web/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@octokit/plugin-rest-endpoint-methods/dist-web/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   legacyRestEndpointMethods: () => (/* binding */ legacyRestEndpointMethods),
/* harmony export */   restEndpointMethods: () => (/* binding */ restEndpointMethods)
/* harmony export */ });
// pkg/dist-src/version.js
var VERSION = "9.0.0";

// pkg/dist-src/generated/endpoints.js
var Endpoints = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: [
      "POST /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    addCustomLabelsToSelfHostedRunnerForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    addSelectedRepoToRequiredWorkflow: [
      "PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}"
    ],
    approveWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createEnvironmentVariable: [
      "POST /repositories/{repository_id}/environments/{environment_name}/variables"
    ],
    createOrUpdateEnvironmentSecret: [
      "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    createOrgVariable: ["POST /orgs/{org}/actions/variables"],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token"
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
    createRequiredWorkflow: ["POST /orgs/{org}/actions/required_workflows"],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
    ],
    deleteActionsCacheById: [
      "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"
    ],
    deleteActionsCacheByKey: [
      "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteEnvironmentSecret: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    deleteEnvironmentVariable: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    deleteRepoVariable: [
      "DELETE /repos/{owner}/{repo}/actions/variables/{name}"
    ],
    deleteRequiredWorkflow: [
      "DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}"
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}"
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
    ],
    generateRunnerJitconfigForOrg: [
      "POST /orgs/{org}/actions/runners/generate-jitconfig"
    ],
    generateRunnerJitconfigForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"
    ],
    getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
    getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
    getActionsCacheUsageByRepoForOrg: [
      "GET /orgs/{org}/actions/cache/usage-by-repository"
    ],
    getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions"
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getEnvironmentPublicKey: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"
    ],
    getEnvironmentSecret: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    getEnvironmentVariable: [
      "GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    getGithubActionsDefaultWorkflowPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions/workflow"
    ],
    getGithubActionsDefaultWorkflowPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions"
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions"
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoRequiredWorkflow: [
      "GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}"
    ],
    getRepoRequiredWorkflowUsage: [
      "GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing"
    ],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
    getRequiredWorkflow: [
      "GET /orgs/{org}/actions/required_workflows/{required_workflow_id}"
    ],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"
    ],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowAccessToRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/access"
    ],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"
    ],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets"
    ],
    listEnvironmentVariables: [
      "GET /repositories/{repository_id}/environments/{environment_name}/variables"
    ],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"
    ],
    listLabelsForSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    listLabelsForSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listOrgVariables: ["GET /orgs/{org}/actions/variables"],
    listRepoOrganizationSecrets: [
      "GET /repos/{owner}/{repo}/actions/organization-secrets"
    ],
    listRepoOrganizationVariables: [
      "GET /repos/{owner}/{repo}/actions/organization-variables"
    ],
    listRepoRequiredWorkflows: [
      "GET /repos/{org}/{repo}/actions/required_workflows"
    ],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRequiredWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs"
    ],
    listRequiredWorkflows: ["GET /orgs/{org}/actions/required_workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads"
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    listSelectedReposForOrgVariable: [
      "GET /orgs/{org}/actions/variables/{name}/repositories"
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories"
    ],
    listSelectedRepositoriesRequiredWorkflow: [
      "GET /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories"
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunJobForWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    reRunWorkflowFailedJobs: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    removeCustomLabelFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeCustomLabelFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgVariable: [
      "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromRequiredWorkflow: [
      "DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}"
    ],
    reviewCustomGatesForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions"
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    setCustomLabelsForSelfHostedRunnerForOrg: [
      "PUT /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    setCustomLabelsForSelfHostedRunnerForRepo: [
      "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    setGithubActionsDefaultWorkflowPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/workflow"
    ],
    setGithubActionsDefaultWorkflowPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions"
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories"
    ],
    setSelectedReposToRequiredWorkflow: [
      "PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories"
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories"
    ],
    setWorkflowAccessToRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/access"
    ],
    updateEnvironmentVariable: [
      "PATCH /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
    updateRepoVariable: [
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}"
    ],
    updateRequiredWorkflow: [
      "PATCH /orgs/{org}/actions/required_workflows/{required_workflow_id}"
    ]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}"
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications"
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens"
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories"
    ],
    listInstallationRequestsForAuthenticatedApp: [
      "GET /app/installation-requests"
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts"
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended"
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions"
    ],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages"
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage"
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage"
    ]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences"
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } }
    ],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"
    ],
    getCodeqlDatabase: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] }
    ],
    listCodeqlDatabases: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases"
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
    ],
    updateDefaultSetup: [
      "PATCH /repos/{owner}/{repo}/code-scanning/default-setup"
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"]
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    codespaceMachinesForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/machines"
    ],
    createForAuthenticatedUser: ["POST /user/codespaces"],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}"
    ],
    createWithPrForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"
    ],
    createWithRepoForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/codespaces"
    ],
    deleteCodespacesBillingUsers: [
      "DELETE /orgs/{org}/codespaces/billing/selected_users"
    ],
    deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"],
    deleteFromOrganization: [
      "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    deleteSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}"
    ],
    exportForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/exports"
    ],
    getCodespacesForUserInOrg: [
      "GET /orgs/{org}/members/{username}/codespaces"
    ],
    getExportDetailsForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/exports/{export_id}"
    ],
    getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
    getPublicKeyForAuthenticatedUser: [
      "GET /user/codespaces/secrets/public-key"
    ],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    getSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}"
    ],
    listDevcontainersInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/devcontainers"
    ],
    listForAuthenticatedUser: ["GET /user/codespaces"],
    listInOrganization: [
      "GET /orgs/{org}/codespaces",
      {},
      { renamedParameters: { org_id: "org" } }
    ],
    listInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces"
    ],
    listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
    listRepositoriesForSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}/repositories"
    ],
    listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    preFlightWithRepoForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/new"
    ],
    publishForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/publish"
    ],
    removeRepositoryForSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repoMachinesForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/machines"
    ],
    setCodespacesBilling: ["PUT /orgs/{org}/codespaces/billing"],
    setCodespacesBillingUsers: [
      "POST /orgs/{org}/codespaces/billing/selected_users"
    ],
    setRepositoriesForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"],
    stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"],
    stopInOrganization: [
      "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"
    ],
    updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"]
  },
  dependabot: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],
    getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/dependabot/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
    listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"
    ]
  },
  dependencyGraph: {
    createRepositorySnapshot: [
      "POST /repos/{owner}/{repo}/dependency-graph/snapshots"
    ],
    diffRange: [
      "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"
    ],
    exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"]
  },
  emojis: { get: ["GET /emojis"] },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: [
      "GET /user/interaction-limits",
      {},
      { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }
    ],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits"
    ],
    removeRestrictionsForYourPublicRepos: [
      "DELETE /user/interaction-limits",
      {},
      { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }
    ],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: [
      "PUT /user/interaction-limits",
      {},
      { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }
    ]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    checkUserCanBeAssignedToIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"
    ],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: {
    get: ["GET /meta"],
    getAllVersions: ["GET /versions"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive"
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive"
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive"
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive"
    ],
    getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
    getImportStatus: ["GET /repos/{owner}/{repo}/import"],
    getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories"
    ],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] }
    ],
    mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
    setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: ["PUT /repos/{owner}/{repo}/import"],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    updateImport: ["PATCH /repos/{owner}/{repo}/import"]
  },
  orgs: {
    addSecurityManagerTeam: [
      "PUT /orgs/{org}/security-managers/teams/{team_slug}"
    ],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    delete: ["DELETE /orgs/{org}"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    enableOrDisableSecurityProductOnAllOrgRepos: [
      "POST /orgs/{org}/{security_product}/{enablement}"
    ],
    get: ["GET /orgs/{org}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPatGrantRepositories: [
      "GET /organizations/{org}/personal-access-tokens/{pat_id}/repositories"
    ],
    listPatGrantRequestRepositories: [
      "GET /organizations/{org}/personal-access-token-requests/{pat_request_id}/repositories"
    ],
    listPatGrantRequests: [
      "GET /organizations/{org}/personal-access-token-requests"
    ],
    listPatGrants: ["GET /organizations/{org}/personal-access-tokens"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listSecurityManagerTeams: ["GET /orgs/{org}/security-managers"],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}"
    ],
    removeSecurityManagerTeam: [
      "DELETE /orgs/{org}/security-managers/teams/{team_slug}"
    ],
    reviewPatGrantRequest: [
      "POST /organizations/{org}/personal-access-token-requests/{pat_request_id}"
    ],
    reviewPatGrantRequestsInBulk: [
      "POST /organizations/{org}/personal-access-token-requests"
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}"
    ],
    updatePatAccess: [
      "POST /organizations/{org}/personal-access-tokens/{pat_id}"
    ],
    updatePatAccesses: ["POST /organizations/{org}/personal-access-tokens"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}"
    ],
    deletePackageForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    deletePackageForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}"
    ],
    deletePackageVersionForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getAllPackageVersionsForAPackageOwnedByAnOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      {},
      { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }
    ],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
      {},
      {
        renamed: [
          "packages",
          "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"
        ]
      }
    ],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions"
    ],
    getPackageForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}"
    ],
    getPackageForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    getPackageForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}"
    ],
    getPackageVersionForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    listDockerMigrationConflictingPackagesForAuthenticatedUser: [
      "GET /user/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForOrganization: [
      "GET /orgs/{org}/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForUser: [
      "GET /users/{username}/docker/conflicts"
    ],
    listPackagesForAuthenticatedUser: ["GET /user/packages"],
    listPackagesForOrganization: ["GET /orgs/{org}/packages"],
    listPackagesForUser: ["GET /users/{username}/packages"],
    restorePackageForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageVersionForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ]
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"],
    createCard: ["POST /projects/columns/{column_id}/cards"],
    createColumn: ["POST /projects/{project_id}/columns"],
    createForAuthenticatedUser: ["POST /user/projects"],
    createForOrg: ["POST /orgs/{org}/projects"],
    createForRepo: ["POST /repos/{owner}/{repo}/projects"],
    delete: ["DELETE /projects/{project_id}"],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}"],
    deleteColumn: ["DELETE /projects/columns/{column_id}"],
    get: ["GET /projects/{project_id}"],
    getCard: ["GET /projects/columns/cards/{card_id}"],
    getColumn: ["GET /projects/columns/{column_id}"],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission"
    ],
    listCards: ["GET /projects/columns/{column_id}/cards"],
    listCollaborators: ["GET /projects/{project_id}/collaborators"],
    listColumns: ["GET /projects/{project_id}/columns"],
    listForOrg: ["GET /orgs/{org}/projects"],
    listForRepo: ["GET /repos/{owner}/{repo}/projects"],
    listForUser: ["GET /users/{username}/projects"],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves"],
    moveColumn: ["POST /projects/columns/{column_id}/moves"],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}"
    ],
    update: ["PATCH /projects/{project_id}"],
    updateCard: ["PATCH /projects/columns/cards/{card_id}"],
    updateColumn: ["PATCH /projects/columns/{column_id}"]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForRelease: [
      "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    listForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ]
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}"
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}"
    ],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentBranchPolicy: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    createDeploymentProtectionRule: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createOrgRuleset: ["POST /orgs/{org}/rulesets"],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployment"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
    createTagProtection: ["POST /repos/{owner}/{repo}/tags/protection"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate"
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}"
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
    ],
    deleteDeploymentBranchPolicy: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    deleteTagProtection: [
      "DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"
    ],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes"
    ],
    disableDeploymentProtectionRule: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    disableLfsForRepo: ["DELETE /repos/{owner}/{repo}/lfs"],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] }
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes"
    ],
    enableLfsForRepo: ["PUT /repos/{owner}/{repo}/lfs"],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes"
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getAllDeploymentProtectionRules: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getCustomDeploymentProtectionRule: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentBranchPolicy: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"],
    getOrgRulesets: ["GET /orgs/{org}/rulesets"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listCustomDeploymentRuleIntegrations: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"
    ],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentBranchPolicies: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTagProtection: ["GET /repos/{owner}/{repo}/tags/protection"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateDeploymentBranchPolicy: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] }
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"]
  },
  secretScanning: {
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/secret-scanning/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    listLocationsForAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ]
  },
  securityAdvisories: {
    createPrivateVulnerabilityReport: [
      "POST /repos/{owner}/{repo}/security-advisories/reports"
    ],
    createRepositoryAdvisory: [
      "POST /repos/{owner}/{repo}/security-advisories"
    ],
    getRepositoryAdvisory: [
      "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ],
    listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"],
    updateRepositoryAdvisory: [
      "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] }
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] }
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"],
    deleteSshSigningKeyForAuthenticatedUser: [
      "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    getSshSigningKeyForAuthenticatedUser: [
      "GET /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    list: ["GET /users"],
    listBlockedByAuthenticated: [
      "GET /user/blocks",
      {},
      { renamed: ["users", "listBlockedByAuthenticatedUser"] }
    ],
    listBlockedByAuthenticatedUser: ["GET /user/blocks"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] }
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] }
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
    listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
    listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
    listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
    setPrimaryEmailVisibilityForAuthenticated: [
      "PATCH /user/email/visibility",
      {},
      { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }
    ],
    setPrimaryEmailVisibilityForAuthenticatedUser: [
      "PATCH /user/email/visibility"
    ],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};
var endpoints_default = Endpoints;

// pkg/dist-src/endpoints-to-methods.js
var endpointMethodsMap = /* @__PURE__ */ new Map();
for (const [scope, endpoints] of Object.entries(endpoints_default)) {
  for (const [methodName, endpoint] of Object.entries(endpoints)) {
    const [route, defaults, decorations] = endpoint;
    const [method, url] = route.split(/ /);
    const endpointDefaults = Object.assign(
      {
        method,
        url
      },
      defaults
    );
    if (!endpointMethodsMap.has(scope)) {
      endpointMethodsMap.set(scope, /* @__PURE__ */ new Map());
    }
    endpointMethodsMap.get(scope).set(methodName, {
      scope,
      methodName,
      endpointDefaults,
      decorations
    });
  }
}
var handler = {
  get({ octokit, scope, cache }, methodName) {
    if (cache[methodName]) {
      return cache[methodName];
    }
    const { decorations, endpointDefaults } = endpointMethodsMap.get(scope).get(methodName);
    if (decorations) {
      cache[methodName] = decorate(
        octokit,
        scope,
        methodName,
        endpointDefaults,
        decorations
      );
    } else {
      cache[methodName] = octokit.request.defaults(endpointDefaults);
    }
    return cache[methodName];
  }
};
function endpointsToMethods(octokit) {
  const newMethods = {};
  for (const scope of endpointMethodsMap.keys()) {
    newMethods[scope] = new Proxy({ octokit, scope, cache: {} }, handler);
  }
  return newMethods;
}
function decorate(octokit, scope, methodName, defaults, decorations) {
  const requestWithDefaults = octokit.request.defaults(defaults);
  function withDecorations(...args) {
    let options = requestWithDefaults.endpoint.merge(...args);
    if (decorations.mapToData) {
      options = Object.assign({}, options, {
        data: options[decorations.mapToData],
        [decorations.mapToData]: void 0
      });
      return requestWithDefaults(options);
    }
    if (decorations.renamed) {
      const [newScope, newMethodName] = decorations.renamed;
      octokit.log.warn(
        `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`
      );
    }
    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }
    if (decorations.renamedParameters) {
      const options2 = requestWithDefaults.endpoint.merge(...args);
      for (const [name, alias] of Object.entries(
        decorations.renamedParameters
      )) {
        if (name in options2) {
          octokit.log.warn(
            `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
          );
          if (!(alias in options2)) {
            options2[alias] = options2[name];
          }
          delete options2[name];
        }
      }
      return requestWithDefaults(options2);
    }
    return requestWithDefaults(...args);
  }
  return Object.assign(withDecorations, requestWithDefaults);
}

// pkg/dist-src/index.js
function restEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit);
  return {
    rest: api
  };
}
restEndpointMethods.VERSION = VERSION;
function legacyRestEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit);
  return {
    ...api,
    rest: api
  };
}
legacyRestEndpointMethods.VERSION = VERSION;



/***/ }),

/***/ "./node_modules/@octokit/plugin-retry/dist-web/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@octokit/plugin-retry/dist-web/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   retry: () => (/* binding */ retry)
/* harmony export */ });
/* harmony import */ var bottleneck_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bottleneck/light */ "./node_modules/bottleneck/light.js");
/* harmony import */ var bottleneck_light__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bottleneck_light__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request-error */ "./node_modules/@octokit/request-error/dist-web/index.js");
// pkg/dist-src/index.js


// pkg/dist-src/error-request.js
async function errorRequest(state, octokit, error, options) {
  if (!error.request || !error.request.request) {
    throw error;
  }
  if (error.status >= 400 && !state.doNotRetry.includes(error.status)) {
    const retries = options.request.retries != null ? options.request.retries : state.retries;
    const retryAfter = Math.pow((options.request.retryCount || 0) + 1, 2);
    throw octokit.retry.retryRequest(error, retries, retryAfter);
  }
  throw error;
}

// pkg/dist-src/wrap-request.js


async function wrapRequest(state, octokit, request, options) {
  const limiter = new (bottleneck_light__WEBPACK_IMPORTED_MODULE_0___default())();
  limiter.on("failed", function(error, info) {
    const maxRetries = ~~error.request.request.retries;
    const after = ~~error.request.request.retryAfter;
    options.request.retryCount = info.retryCount + 1;
    if (maxRetries > info.retryCount) {
      return after * state.retryAfterBaseValue;
    }
  });
  return limiter.schedule(
    requestWithGraphqlErrorHandling.bind(null, state, octokit, request),
    options
  );
}
async function requestWithGraphqlErrorHandling(state, octokit, request, options) {
  const response = await request(request, options);
  if (response.data && response.data.errors && /Something went wrong while executing your query/.test(
    response.data.errors[0].message
  )) {
    const error = new _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__.RequestError(response.data.errors[0].message, 500, {
      request: options,
      response
    });
    return errorRequest(state, octokit, error, options);
  }
  return response;
}

// pkg/dist-src/index.js
var VERSION = "6.0.0";
function retry(octokit, octokitOptions) {
  const state = Object.assign(
    {
      enabled: true,
      retryAfterBaseValue: 1e3,
      doNotRetry: [400, 401, 403, 404, 422, 451],
      retries: 3
    },
    octokitOptions.retry
  );
  if (state.enabled) {
    octokit.hook.error("request", errorRequest.bind(null, state, octokit));
    octokit.hook.wrap("request", wrapRequest.bind(null, state, octokit));
  }
  return {
    retry: {
      retryRequest: (error, retries, retryAfter) => {
        error.request.request = Object.assign({}, error.request.request, {
          retries,
          retryAfter
        });
        return error;
      }
    }
  };
}
retry.VERSION = VERSION;



/***/ }),

/***/ "./node_modules/@octokit/plugin-throttling/dist-web/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@octokit/plugin-throttling/dist-web/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttling: () => (/* binding */ throttling)
/* harmony export */ });
/* harmony import */ var bottleneck_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bottleneck/light */ "./node_modules/bottleneck/light.js");
/* harmony import */ var bottleneck_light__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bottleneck_light__WEBPACK_IMPORTED_MODULE_0__);
// pkg/dist-src/index.js



// pkg/dist-src/version.js
var VERSION = "7.0.0";

// pkg/dist-src/wrap-request.js
var noop = () => Promise.resolve();
function wrapRequest(state, request, options) {
  return state.retryLimiter.schedule(doRequest, state, request, options);
}
async function doRequest(state, request, options) {
  const isWrite = options.method !== "GET" && options.method !== "HEAD";
  const { pathname } = new URL(options.url, "http://github.test");
  const isSearch = options.method === "GET" && pathname.startsWith("/search/");
  const isGraphQL = pathname.startsWith("/graphql");
  const retryCount = ~~request.retryCount;
  const jobOptions = retryCount > 0 ? { priority: 0, weight: 0 } : {};
  if (state.clustering) {
    jobOptions.expiration = 1e3 * 60;
  }
  if (isWrite || isGraphQL) {
    await state.write.key(state.id).schedule(jobOptions, noop);
  }
  if (isWrite && state.triggersNotification(pathname)) {
    await state.notifications.key(state.id).schedule(jobOptions, noop);
  }
  if (isSearch) {
    await state.search.key(state.id).schedule(jobOptions, noop);
  }
  const req = state.global.key(state.id).schedule(jobOptions, request, options);
  if (isGraphQL) {
    const res = await req;
    if (res.data.errors != null && // @ts-expect-error
    res.data.errors.some((error) => error.type === "RATE_LIMITED")) {
      const error = Object.assign(new Error("GraphQL Rate Limit Exceeded"), {
        response: res,
        data: res.data
      });
      throw error;
    }
  }
  return req;
}

// pkg/dist-src/generated/triggers-notification-paths.js
var triggers_notification_paths_default = [
  "/orgs/{org}/invitations",
  "/orgs/{org}/invitations/{invitation_id}",
  "/orgs/{org}/teams/{team_slug}/discussions",
  "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
  "/repos/{owner}/{repo}/collaborators/{username}",
  "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
  "/repos/{owner}/{repo}/issues",
  "/repos/{owner}/{repo}/issues/{issue_number}/comments",
  "/repos/{owner}/{repo}/pulls",
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
  "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
  "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
  "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
  "/repos/{owner}/{repo}/releases",
  "/teams/{team_id}/discussions",
  "/teams/{team_id}/discussions/{discussion_number}/comments"
];

// pkg/dist-src/route-matcher.js
function routeMatcher(paths) {
  const regexes = paths.map(
    (path) => path.split("/").map((c) => c.startsWith("{") ? "(?:.+?)" : c).join("/")
  );
  const regex2 = `^(?:${regexes.map((r) => `(?:${r})`).join("|")})[^/]*$`;
  return new RegExp(regex2, "i");
}

// pkg/dist-src/index.js
var regex = routeMatcher(triggers_notification_paths_default);
var triggersNotification = regex.test.bind(regex);
var groups = {};
var createGroups = function(Bottleneck, common) {
  groups.global = new Bottleneck.Group({
    id: "octokit-global",
    maxConcurrent: 10,
    ...common
  });
  groups.search = new Bottleneck.Group({
    id: "octokit-search",
    maxConcurrent: 1,
    minTime: 2e3,
    ...common
  });
  groups.write = new Bottleneck.Group({
    id: "octokit-write",
    maxConcurrent: 1,
    minTime: 1e3,
    ...common
  });
  groups.notifications = new Bottleneck.Group({
    id: "octokit-notifications",
    maxConcurrent: 1,
    minTime: 3e3,
    ...common
  });
};
function throttling(octokit, octokitOptions) {
  const {
    enabled = true,
    Bottleneck = (bottleneck_light__WEBPACK_IMPORTED_MODULE_0___default()),
    id = "no-id",
    timeout = 1e3 * 60 * 2,
    // Redis TTL: 2 minutes
    connection
  } = octokitOptions.throttle || {};
  if (!enabled) {
    return {};
  }
  const common = { connection, timeout };
  if (groups.global == null) {
    createGroups(Bottleneck, common);
  }
  const state = Object.assign(
    {
      clustering: connection != null,
      triggersNotification,
      fallbackSecondaryRateRetryAfter: 60,
      retryAfterBaseValue: 1e3,
      retryLimiter: new Bottleneck(),
      id,
      ...groups
    },
    octokitOptions.throttle
  );
  if (typeof state.onSecondaryRateLimit !== "function" || typeof state.onRateLimit !== "function") {
    throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);
  }
  const events = {};
  const emitter = new Bottleneck.Events(events);
  events.on("secondary-limit", state.onSecondaryRateLimit);
  events.on("rate-limit", state.onRateLimit);
  events.on(
    "error",
    (e) => octokit.log.warn("Error in throttling-plugin limit handler", e)
  );
  state.retryLimiter.on("failed", async function(error, info) {
    const [state2, request, options] = info.args;
    const { pathname } = new URL(options.url, "http://github.test");
    const shouldRetryGraphQL = pathname.startsWith("/graphql") && error.status !== 401;
    if (!(shouldRetryGraphQL || error.status === 403)) {
      return;
    }
    const retryCount = ~~request.retryCount;
    request.retryCount = retryCount;
    options.request.retryCount = retryCount;
    const { wantRetry, retryAfter = 0 } = await async function() {
      if (/\bsecondary rate\b/i.test(error.message)) {
        const retryAfter2 = Number(error.response.headers["retry-after"]) || state2.fallbackSecondaryRateRetryAfter;
        const wantRetry2 = await emitter.trigger(
          "secondary-limit",
          retryAfter2,
          options,
          octokit,
          retryCount
        );
        return { wantRetry: wantRetry2, retryAfter: retryAfter2 };
      }
      if (error.response.headers != null && error.response.headers["x-ratelimit-remaining"] === "0") {
        const rateLimitReset = new Date(
          ~~error.response.headers["x-ratelimit-reset"] * 1e3
        ).getTime();
        const retryAfter2 = Math.max(
          Math.ceil((rateLimitReset - Date.now()) / 1e3),
          0
        );
        const wantRetry2 = await emitter.trigger(
          "rate-limit",
          retryAfter2,
          options,
          octokit,
          retryCount
        );
        return { wantRetry: wantRetry2, retryAfter: retryAfter2 };
      }
      return {};
    }();
    if (wantRetry) {
      request.retryCount++;
      return retryAfter * state2.retryAfterBaseValue;
    }
  });
  octokit.hook.wrap("request", wrapRequest.bind(null, state));
  return {};
}
throttling.VERSION = VERSION;
throttling.triggersNotification = triggersNotification;



/***/ }),

/***/ "./node_modules/@octokit/request-error/dist-web/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@octokit/request-error/dist-web/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestError: () => (/* binding */ RequestError)
/* harmony export */ });
/* harmony import */ var deprecation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deprecation */ "./node_modules/deprecation/dist-web/index.js");
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! once */ "./node_modules/once/once.js");
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(once__WEBPACK_IMPORTED_MODULE_0__);
// pkg/dist-src/index.js


var logOnceCode = once__WEBPACK_IMPORTED_MODULE_0___default()((deprecation) => console.warn(deprecation));
var logOnceHeaders = once__WEBPACK_IMPORTED_MODULE_0___default()((deprecation) => console.warn(deprecation));
var RequestError = class extends Error {
  constructor(message, statusCode, options) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = "HttpError";
    this.status = statusCode;
    let headers;
    if ("headers" in options && typeof options.headers !== "undefined") {
      headers = options.headers;
    }
    if ("response" in options) {
      this.response = options.response;
      headers = options.response.headers;
    }
    const requestCopy = Object.assign({}, options.request);
    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(
          / .*$/,
          " [REDACTED]"
        )
      });
    }
    requestCopy.url = requestCopy.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
    Object.defineProperty(this, "code", {
      get() {
        logOnceCode(
          new deprecation__WEBPACK_IMPORTED_MODULE_1__.Deprecation(
            "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
          )
        );
        return statusCode;
      }
    });
    Object.defineProperty(this, "headers", {
      get() {
        logOnceHeaders(
          new deprecation__WEBPACK_IMPORTED_MODULE_1__.Deprecation(
            "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
          )
        );
        return headers || {};
      }
    });
  }
};



/***/ }),

/***/ "./node_modules/@octokit/request/dist-web/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@octokit/request/dist-web/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var _octokit_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/endpoint */ "./node_modules/@octokit/endpoint/dist-web/index.js");
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/dist-web/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/dist/is-plain-object.mjs");
/* harmony import */ var _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/request-error */ "./node_modules/@octokit/request-error/dist-web/index.js");
// pkg/dist-src/index.js



// pkg/dist-src/version.js
var VERSION = "8.1.1";

// pkg/dist-src/fetch-wrapper.js



// pkg/dist-src/get-buffer-response.js
function getBufferResponse(response) {
  return response.arrayBuffer();
}

// pkg/dist-src/fetch-wrapper.js
function fetchWrapper(requestOptions) {
  const log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;
  const parseSuccessResponseBody = requestOptions.request?.parseSuccessResponseBody !== false;
  if ((0,is_plain_object__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }
  let headers = {};
  let status;
  let url;
  let { fetch } = globalThis;
  if (requestOptions.request?.fetch) {
    fetch = requestOptions.request.fetch;
  }
  if (!fetch) {
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  }
  return fetch(requestOptions.url, {
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    signal: requestOptions.request?.signal,
    // duplex must be set if request.body is ReadableStream or Async Iterables.
    // See https://fetch.spec.whatwg.org/#dom-requestinit-duplex.
    ...requestOptions.body && { duplex: "half" }
  }).then(async (response) => {
    url = response.url;
    status = response.status;
    for (const keyAndValue of response.headers) {
      headers[keyAndValue[0]] = keyAndValue[1];
    }
    if ("deprecation" in headers) {
      const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
      const deprecationLink = matches && matches.pop();
      log.warn(
        `[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`
      );
    }
    if (status === 204 || status === 205) {
      return;
    }
    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }
      throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__.RequestError(response.statusText, status, {
        response: {
          url,
          status,
          headers,
          data: void 0
        },
        request: requestOptions
      });
    }
    if (status === 304) {
      throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__.RequestError("Not modified", status, {
        response: {
          url,
          status,
          headers,
          data: await getResponseData(response)
        },
        request: requestOptions
      });
    }
    if (status >= 400) {
      const data = await getResponseData(response);
      const error = new _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__.RequestError(toErrorMessage(data), status, {
        response: {
          url,
          status,
          headers,
          data
        },
        request: requestOptions
      });
      throw error;
    }
    return parseSuccessResponseBody ? await getResponseData(response) : response.body;
  }).then((data) => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch((error) => {
    if (error instanceof _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__.RequestError)
      throw error;
    else if (error.name === "AbortError")
      throw error;
    throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_1__.RequestError(error.message, 500, {
      request: requestOptions
    });
  });
}
async function getResponseData(response) {
  const contentType = response.headers.get("content-type");
  if (/application\/json/.test(contentType)) {
    return response.json();
  }
  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }
  return getBufferResponse(response);
}
function toErrorMessage(data) {
  if (typeof data === "string")
    return data;
  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
    }
    return data.message;
  }
  return `Unknown error: ${JSON.stringify(data)}`;
}

// pkg/dist-src/with-defaults.js
function withDefaults(oldEndpoint, newDefaults) {
  const endpoint2 = oldEndpoint.defaults(newDefaults);
  const newApi = function(route, parameters) {
    const endpointOptions = endpoint2.merge(route, parameters);
    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint2.parse(endpointOptions));
    }
    const request2 = (route2, parameters2) => {
      return fetchWrapper(
        endpoint2.parse(endpoint2.merge(route2, parameters2))
      );
    };
    Object.assign(request2, {
      endpoint: endpoint2,
      defaults: withDefaults.bind(null, endpoint2)
    });
    return endpointOptions.request.hook(request2, endpointOptions);
  };
  return Object.assign(newApi, {
    endpoint: endpoint2,
    defaults: withDefaults.bind(null, endpoint2)
  });
}

// pkg/dist-src/index.js
var request = withDefaults(_octokit_endpoint__WEBPACK_IMPORTED_MODULE_2__.endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION} ${(0,universal_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgent)()}`
  }
});



/***/ }),

/***/ "./node_modules/@octokit/webhooks-methods/dist-web/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@octokit/webhooks-methods/dist-web/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sign: () => (/* binding */ sign),
/* harmony export */   verify: () => (/* binding */ verify)
/* harmony export */ });
// pkg/dist-src/types.js
var Algorithm = /* @__PURE__ */ ((Algorithm2) => {
  Algorithm2["SHA1"] = "sha1";
  Algorithm2["SHA256"] = "sha256";
  return Algorithm2;
})(Algorithm || {});

// pkg/dist-src/utils.js
var getAlgorithm = (signature) => {
  return signature.startsWith("sha256=") ? "sha256" : "sha1";
};

// pkg/dist-src/web.js
var enc = new TextEncoder();
function hexToUInt8Array(string) {
  const pairs = string.match(/[\dA-F]{2}/gi);
  const integers = pairs.map(function(s) {
    return parseInt(s, 16);
  });
  return new Uint8Array(integers);
}
function UInt8ArrayToHex(signature) {
  return Array.prototype.map.call(new Uint8Array(signature), (x) => x.toString(16).padStart(2, "0")).join("");
}
function getHMACHashName(algorithm) {
  return {
    [Algorithm.SHA1]: "SHA-1",
    [Algorithm.SHA256]: "SHA-256"
  }[algorithm];
}
async function importKey(secret, algorithm) {
  return crypto.subtle.importKey(
    "raw",
    // raw format of the key - should be Uint8Array
    enc.encode(secret),
    {
      // algorithm details
      name: "HMAC",
      hash: { name: getHMACHashName(algorithm) }
    },
    false,
    // export = false
    ["sign", "verify"]
    // what this key can do
  );
}
async function sign(options, payload) {
  const { secret, algorithm } = typeof options === "object" ? {
    secret: options.secret,
    algorithm: options.algorithm || Algorithm.SHA256
  } : { secret: options, algorithm: Algorithm.SHA256 };
  if (!secret || !payload) {
    throw new TypeError(
      "[@octokit/webhooks-methods] secret & payload required for sign()"
    );
  }
  if (!Object.values(Algorithm).includes(algorithm)) {
    throw new TypeError(
      `[@octokit/webhooks] Algorithm ${algorithm} is not supported. Must be  'sha1' or 'sha256'`
    );
  }
  const signature = await crypto.subtle.sign(
    "HMAC",
    await importKey(secret, algorithm),
    enc.encode(payload)
  );
  return `${algorithm}=${UInt8ArrayToHex(signature)}`;
}
async function verify(secret, eventPayload, signature) {
  if (!secret || !eventPayload || !signature) {
    throw new TypeError(
      "[@octokit/webhooks-methods] secret, eventPayload & signature required"
    );
  }
  const algorithm = getAlgorithm(signature);
  return await crypto.subtle.verify(
    "HMAC",
    await importKey(secret, algorithm),
    hexToUInt8Array(signature.replace(`${algorithm}=`, "")),
    enc.encode(eventPayload)
  );
}



/***/ }),

/***/ "./node_modules/@octokit/webhooks/dist-web/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@octokit/webhooks/dist-web/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Webhooks: () => (/* binding */ Webhooks),
/* harmony export */   createEventHandler: () => (/* binding */ createEventHandler),
/* harmony export */   createNodeMiddleware: () => (/* binding */ createNodeMiddleware),
/* harmony export */   emitterEventNames: () => (/* binding */ emitterEventNames)
/* harmony export */ });
/* harmony import */ var aggregate_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aggregate-error */ "./node_modules/aggregate-error/index.js");
/* harmony import */ var aggregate_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aggregate_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/webhooks-methods */ "./node_modules/@octokit/webhooks-methods/dist-web/index.js");
// pkg/dist-src/createLogger.js
var createLogger = (logger) => ({
  debug: () => {
  },
  info: () => {
  },
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  ...logger
});

// pkg/dist-src/generated/webhook-names.js
var emitterEventNames = [
  "branch_protection_rule",
  "branch_protection_rule.created",
  "branch_protection_rule.deleted",
  "branch_protection_rule.edited",
  "check_run",
  "check_run.completed",
  "check_run.created",
  "check_run.requested_action",
  "check_run.rerequested",
  "check_suite",
  "check_suite.completed",
  "check_suite.requested",
  "check_suite.rerequested",
  "code_scanning_alert",
  "code_scanning_alert.appeared_in_branch",
  "code_scanning_alert.closed_by_user",
  "code_scanning_alert.created",
  "code_scanning_alert.fixed",
  "code_scanning_alert.reopened",
  "code_scanning_alert.reopened_by_user",
  "commit_comment",
  "commit_comment.created",
  "create",
  "delete",
  "dependabot_alert",
  "dependabot_alert.created",
  "dependabot_alert.dismissed",
  "dependabot_alert.fixed",
  "dependabot_alert.reintroduced",
  "dependabot_alert.reopened",
  "deploy_key",
  "deploy_key.created",
  "deploy_key.deleted",
  "deployment",
  "deployment.created",
  "deployment_protection_rule",
  "deployment_protection_rule.requested",
  "deployment_status",
  "deployment_status.created",
  "discussion",
  "discussion.answered",
  "discussion.category_changed",
  "discussion.created",
  "discussion.deleted",
  "discussion.edited",
  "discussion.labeled",
  "discussion.locked",
  "discussion.pinned",
  "discussion.transferred",
  "discussion.unanswered",
  "discussion.unlabeled",
  "discussion.unlocked",
  "discussion.unpinned",
  "discussion_comment",
  "discussion_comment.created",
  "discussion_comment.deleted",
  "discussion_comment.edited",
  "fork",
  "github_app_authorization",
  "github_app_authorization.revoked",
  "gollum",
  "installation",
  "installation.created",
  "installation.deleted",
  "installation.new_permissions_accepted",
  "installation.suspend",
  "installation.unsuspend",
  "installation_repositories",
  "installation_repositories.added",
  "installation_repositories.removed",
  "installation_target",
  "installation_target.renamed",
  "issue_comment",
  "issue_comment.created",
  "issue_comment.deleted",
  "issue_comment.edited",
  "issues",
  "issues.assigned",
  "issues.closed",
  "issues.deleted",
  "issues.demilestoned",
  "issues.edited",
  "issues.labeled",
  "issues.locked",
  "issues.milestoned",
  "issues.opened",
  "issues.pinned",
  "issues.reopened",
  "issues.transferred",
  "issues.unassigned",
  "issues.unlabeled",
  "issues.unlocked",
  "issues.unpinned",
  "label",
  "label.created",
  "label.deleted",
  "label.edited",
  "marketplace_purchase",
  "marketplace_purchase.cancelled",
  "marketplace_purchase.changed",
  "marketplace_purchase.pending_change",
  "marketplace_purchase.pending_change_cancelled",
  "marketplace_purchase.purchased",
  "member",
  "member.added",
  "member.edited",
  "member.removed",
  "membership",
  "membership.added",
  "membership.removed",
  "merge_group",
  "merge_group.checks_requested",
  "meta",
  "meta.deleted",
  "milestone",
  "milestone.closed",
  "milestone.created",
  "milestone.deleted",
  "milestone.edited",
  "milestone.opened",
  "org_block",
  "org_block.blocked",
  "org_block.unblocked",
  "organization",
  "organization.deleted",
  "organization.member_added",
  "organization.member_invited",
  "organization.member_removed",
  "organization.renamed",
  "package",
  "package.published",
  "package.updated",
  "page_build",
  "ping",
  "project",
  "project.closed",
  "project.created",
  "project.deleted",
  "project.edited",
  "project.reopened",
  "project_card",
  "project_card.converted",
  "project_card.created",
  "project_card.deleted",
  "project_card.edited",
  "project_card.moved",
  "project_column",
  "project_column.created",
  "project_column.deleted",
  "project_column.edited",
  "project_column.moved",
  "projects_v2_item",
  "projects_v2_item.archived",
  "projects_v2_item.converted",
  "projects_v2_item.created",
  "projects_v2_item.deleted",
  "projects_v2_item.edited",
  "projects_v2_item.reordered",
  "projects_v2_item.restored",
  "public",
  "pull_request",
  "pull_request.assigned",
  "pull_request.auto_merge_disabled",
  "pull_request.auto_merge_enabled",
  "pull_request.closed",
  "pull_request.converted_to_draft",
  "pull_request.demilestoned",
  "pull_request.dequeued",
  "pull_request.edited",
  "pull_request.enqueued",
  "pull_request.labeled",
  "pull_request.locked",
  "pull_request.milestoned",
  "pull_request.opened",
  "pull_request.ready_for_review",
  "pull_request.reopened",
  "pull_request.review_request_removed",
  "pull_request.review_requested",
  "pull_request.synchronize",
  "pull_request.unassigned",
  "pull_request.unlabeled",
  "pull_request.unlocked",
  "pull_request_review",
  "pull_request_review.dismissed",
  "pull_request_review.edited",
  "pull_request_review.submitted",
  "pull_request_review_comment",
  "pull_request_review_comment.created",
  "pull_request_review_comment.deleted",
  "pull_request_review_comment.edited",
  "pull_request_review_thread",
  "pull_request_review_thread.resolved",
  "pull_request_review_thread.unresolved",
  "push",
  "registry_package",
  "registry_package.published",
  "registry_package.updated",
  "release",
  "release.created",
  "release.deleted",
  "release.edited",
  "release.prereleased",
  "release.published",
  "release.released",
  "release.unpublished",
  "repository",
  "repository.archived",
  "repository.created",
  "repository.deleted",
  "repository.edited",
  "repository.privatized",
  "repository.publicized",
  "repository.renamed",
  "repository.transferred",
  "repository.unarchived",
  "repository_dispatch",
  "repository_import",
  "repository_vulnerability_alert",
  "repository_vulnerability_alert.create",
  "repository_vulnerability_alert.dismiss",
  "repository_vulnerability_alert.reopen",
  "repository_vulnerability_alert.resolve",
  "secret_scanning_alert",
  "secret_scanning_alert.created",
  "secret_scanning_alert.reopened",
  "secret_scanning_alert.resolved",
  "secret_scanning_alert.revoked",
  "secret_scanning_alert_location",
  "secret_scanning_alert_location.created",
  "security_advisory",
  "security_advisory.performed",
  "security_advisory.published",
  "security_advisory.updated",
  "security_advisory.withdrawn",
  "sponsorship",
  "sponsorship.cancelled",
  "sponsorship.created",
  "sponsorship.edited",
  "sponsorship.pending_cancellation",
  "sponsorship.pending_tier_change",
  "sponsorship.tier_changed",
  "star",
  "star.created",
  "star.deleted",
  "status",
  "team",
  "team.added_to_repository",
  "team.created",
  "team.deleted",
  "team.edited",
  "team.removed_from_repository",
  "team_add",
  "watch",
  "watch.started",
  "workflow_dispatch",
  "workflow_job",
  "workflow_job.completed",
  "workflow_job.in_progress",
  "workflow_job.queued",
  "workflow_job.waiting",
  "workflow_run",
  "workflow_run.completed",
  "workflow_run.in_progress",
  "workflow_run.requested"
];

// pkg/dist-src/event-handler/on.js
function handleEventHandlers(state, webhookName, handler) {
  if (!state.hooks[webhookName]) {
    state.hooks[webhookName] = [];
  }
  state.hooks[webhookName].push(handler);
}
function receiverOn(state, webhookNameOrNames, handler) {
  if (Array.isArray(webhookNameOrNames)) {
    webhookNameOrNames.forEach(
      (webhookName) => receiverOn(state, webhookName, handler)
    );
    return;
  }
  if (["*", "error"].includes(webhookNameOrNames)) {
    const webhookName = webhookNameOrNames === "*" ? "any" : webhookNameOrNames;
    const message = `Using the "${webhookNameOrNames}" event with the regular Webhooks.on() function is not supported. Please use the Webhooks.on${webhookName.charAt(0).toUpperCase() + webhookName.slice(1)}() method instead`;
    throw new Error(message);
  }
  if (!emitterEventNames.includes(webhookNameOrNames)) {
    state.log.warn(
      `"${webhookNameOrNames}" is not a known webhook name (https://developer.github.com/v3/activity/events/types/)`
    );
  }
  handleEventHandlers(state, webhookNameOrNames, handler);
}
function receiverOnAny(state, handler) {
  handleEventHandlers(state, "*", handler);
}
function receiverOnError(state, handler) {
  handleEventHandlers(state, "error", handler);
}

// pkg/dist-src/event-handler/receive.js


// pkg/dist-src/event-handler/wrap-error-handler.js
function wrapErrorHandler(handler, error) {
  let returnValue;
  try {
    returnValue = handler(error);
  } catch (error2) {
    console.log('FATAL: Error occurred in "error" event handler');
    console.log(error2);
  }
  if (returnValue && returnValue.catch) {
    returnValue.catch((error2) => {
      console.log('FATAL: Error occurred in "error" event handler');
      console.log(error2);
    });
  }
}

// pkg/dist-src/event-handler/receive.js
function getHooks(state, eventPayloadAction, eventName) {
  const hooks = [state.hooks[eventName], state.hooks["*"]];
  if (eventPayloadAction) {
    hooks.unshift(state.hooks[`${eventName}.${eventPayloadAction}`]);
  }
  return [].concat(...hooks.filter(Boolean));
}
function receiverHandle(state, event) {
  const errorHandlers = state.hooks.error || [];
  if (event instanceof Error) {
    const error = Object.assign(new (aggregate_error__WEBPACK_IMPORTED_MODULE_0___default())([event]), {
      event,
      errors: [event]
    });
    errorHandlers.forEach((handler) => wrapErrorHandler(handler, error));
    return Promise.reject(error);
  }
  if (!event || !event.name) {
    throw new (aggregate_error__WEBPACK_IMPORTED_MODULE_0___default())(["Event name not passed"]);
  }
  if (!event.payload) {
    throw new (aggregate_error__WEBPACK_IMPORTED_MODULE_0___default())(["Event payload not passed"]);
  }
  const hooks = getHooks(
    state,
    "action" in event.payload ? event.payload.action : null,
    event.name
  );
  if (hooks.length === 0) {
    return Promise.resolve();
  }
  const errors = [];
  const promises = hooks.map((handler) => {
    let promise = Promise.resolve(event);
    if (state.transform) {
      promise = promise.then(state.transform);
    }
    return promise.then((event2) => {
      return handler(event2);
    }).catch((error) => errors.push(Object.assign(error, { event })));
  });
  return Promise.all(promises).then(() => {
    if (errors.length === 0) {
      return;
    }
    const error = new (aggregate_error__WEBPACK_IMPORTED_MODULE_0___default())(errors);
    Object.assign(error, {
      event,
      errors
    });
    errorHandlers.forEach((handler) => wrapErrorHandler(handler, error));
    throw error;
  });
}

// pkg/dist-src/event-handler/remove-listener.js
function removeListener(state, webhookNameOrNames, handler) {
  if (Array.isArray(webhookNameOrNames)) {
    webhookNameOrNames.forEach(
      (webhookName) => removeListener(state, webhookName, handler)
    );
    return;
  }
  if (!state.hooks[webhookNameOrNames]) {
    return;
  }
  for (let i = state.hooks[webhookNameOrNames].length - 1; i >= 0; i--) {
    if (state.hooks[webhookNameOrNames][i] === handler) {
      state.hooks[webhookNameOrNames].splice(i, 1);
      return;
    }
  }
}

// pkg/dist-src/event-handler/index.js
function createEventHandler(options) {
  const state = {
    hooks: {},
    log: createLogger(options && options.log)
  };
  if (options && options.transform) {
    state.transform = options.transform;
  }
  return {
    on: receiverOn.bind(null, state),
    onAny: receiverOnAny.bind(null, state),
    onError: receiverOnError.bind(null, state),
    removeListener: removeListener.bind(null, state),
    receive: receiverHandle.bind(null, state)
  };
}

// pkg/dist-src/index.js


// pkg/dist-src/verify-and-receive.js

async function verifyAndReceive(state, event) {
  const matchesSignature = await (0,_octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_1__.verify)(
    state.secret,
    event.payload,
    event.signature
  );
  if (!matchesSignature) {
    const error = new Error(
      "[@octokit/webhooks] signature does not match event payload and secret"
    );
    return state.eventHandler.receive(
      Object.assign(error, { event, status: 400 })
    );
  }
  return state.eventHandler.receive({
    id: event.id,
    name: event.name,
    payload: JSON.parse(event.payload)
  });
}

// pkg/dist-src/middleware/node/get-missing-headers.js
var WEBHOOK_HEADERS = [
  "x-github-event",
  "x-hub-signature-256",
  "x-github-delivery"
];
function getMissingHeaders(request) {
  return WEBHOOK_HEADERS.filter((header) => !(header in request.headers));
}

// pkg/dist-src/middleware/node/get-payload.js

function getPayload(request) {
  if (request.body)
    return Promise.resolve(request.body);
  return new Promise((resolve, reject) => {
    let data = "";
    request.setEncoding("utf8");
    request.on("error", (error) => reject(new (aggregate_error__WEBPACK_IMPORTED_MODULE_0___default())([error])));
    request.on("data", (chunk) => data += chunk);
    request.on("end", () => {
      try {
        JSON.parse(data);
        resolve(data);
      } catch (error) {
        error.message = "Invalid JSON";
        error.status = 400;
        reject(new (aggregate_error__WEBPACK_IMPORTED_MODULE_0___default())([error]));
      }
    });
  });
}

// pkg/dist-src/middleware/node/on-unhandled-request-default.js
function onUnhandledRequestDefault(request, response) {
  response.writeHead(404, {
    "content-type": "application/json"
  });
  response.end(
    JSON.stringify({
      error: `Unknown route: ${request.method} ${request.url}`
    })
  );
}

// pkg/dist-src/middleware/node/middleware.js
async function middleware(webhooks, options, request, response, next) {
  let pathname;
  try {
    pathname = new URL(request.url, "http://localhost").pathname;
  } catch (error) {
    response.writeHead(422, {
      "content-type": "application/json"
    });
    response.end(
      JSON.stringify({
        error: `Request URL could not be parsed: ${request.url}`
      })
    );
    return true;
  }
  if (pathname !== options.path) {
    next?.();
    return false;
  } else if (request.method !== "POST") {
    onUnhandledRequestDefault(request, response);
    return true;
  }
  if (!request.headers["content-type"] || !request.headers["content-type"].startsWith("application/json")) {
    response.writeHead(415, {
      "content-type": "application/json",
      accept: "application/json"
    });
    response.end(
      JSON.stringify({
        error: `Unsupported "Content-Type" header value. Must be "application/json"`
      })
    );
    return true;
  }
  const missingHeaders = getMissingHeaders(request).join(", ");
  if (missingHeaders) {
    response.writeHead(400, {
      "content-type": "application/json"
    });
    response.end(
      JSON.stringify({
        error: `Required headers missing: ${missingHeaders}`
      })
    );
    return true;
  }
  const eventName = request.headers["x-github-event"];
  const signatureSHA256 = request.headers["x-hub-signature-256"];
  const id = request.headers["x-github-delivery"];
  options.log.debug(`${eventName} event received (id: ${id})`);
  let didTimeout = false;
  const timeout = setTimeout(() => {
    didTimeout = true;
    response.statusCode = 202;
    response.end("still processing\n");
  }, 9e3).unref();
  try {
    const payload = await getPayload(request);
    await webhooks.verifyAndReceive({
      id,
      name: eventName,
      payload,
      signature: signatureSHA256
    });
    clearTimeout(timeout);
    if (didTimeout)
      return true;
    response.end("ok\n");
    return true;
  } catch (error) {
    clearTimeout(timeout);
    if (didTimeout)
      return true;
    const err = Array.from(error)[0];
    const errorMessage = err.message ? `${err.name}: ${err.message}` : "Error: An Unspecified error occurred";
    response.statusCode = typeof err.status !== "undefined" ? err.status : 500;
    options.log.error(error);
    response.end(
      JSON.stringify({
        error: errorMessage
      })
    );
    return true;
  }
}

// pkg/dist-src/middleware/node/index.js
function createNodeMiddleware(webhooks, {
  path = "/api/github/webhooks",
  log = createLogger()
} = {}) {
  return middleware.bind(null, webhooks, {
    path,
    log
  });
}

// pkg/dist-src/index.js
var Webhooks = class {
  constructor(options) {
    if (!options || !options.secret) {
      throw new Error("[@octokit/webhooks] options.secret required");
    }
    const state = {
      eventHandler: createEventHandler(options),
      secret: options.secret,
      hooks: {},
      log: createLogger(options.log)
    };
    this.sign = _octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_1__.sign.bind(null, options.secret);
    this.verify = _octokit_webhooks_methods__WEBPACK_IMPORTED_MODULE_1__.verify.bind(null, options.secret);
    this.on = state.eventHandler.on;
    this.onAny = state.eventHandler.onAny;
    this.onError = state.eventHandler.onError;
    this.removeListener = state.eventHandler.removeListener;
    this.receive = state.eventHandler.receive;
    this.verifyAndReceive = verifyAndReceive.bind(null, state);
  }
};



/***/ }),

/***/ "./node_modules/aggregate-error/index.js":
/*!***********************************************!*\
  !*** ./node_modules/aggregate-error/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const indentString = __webpack_require__(/*! indent-string */ "./node_modules/indent-string/index.js");
const cleanStack = __webpack_require__(/*! clean-stack */ "./node_modules/clean-stack/index.js");

const cleanInternalStack = stack => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, '');

class AggregateError extends Error {
	constructor(errors) {
		if (!Array.isArray(errors)) {
			throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
		}

		errors = [...errors].map(error => {
			if (error instanceof Error) {
				return error;
			}

			if (error !== null && typeof error === 'object') {
				// Handle plain error objects with message property and/or possibly other metadata
				return Object.assign(new Error(error.message), error);
			}

			return new Error(error);
		});

		let message = errors
			.map(error => {
				// The `stack` property is not standardized, so we can't assume it exists
				return typeof error.stack === 'string' ? cleanInternalStack(cleanStack(error.stack)) : String(error);
			})
			.join('\n');
		message = '\n' + indentString(message, 4);
		super(message);

		this.name = 'AggregateError';

		Object.defineProperty(this, '_errors', {value: errors});
	}

	* [Symbol.iterator]() {
		for (const error of this._errors) {
			yield error;
		}
	}
}

module.exports = AggregateError;


/***/ }),

/***/ "./node_modules/before-after-hook/index.js":
/*!*************************************************!*\
  !*** ./node_modules/before-after-hook/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var register = __webpack_require__(/*! ./lib/register */ "./node_modules/before-after-hook/lib/register.js");
var addHook = __webpack_require__(/*! ./lib/add */ "./node_modules/before-after-hook/lib/add.js");
var removeHook = __webpack_require__(/*! ./lib/remove */ "./node_modules/before-after-hook/lib/remove.js");

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind;
var bindable = bind.bind(bind);

function bindApi(hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(
    null,
    name ? [state, name] : [state]
  );
  hook.api = { remove: removeHookRef };
  hook.remove = removeHookRef;
  ["before", "error", "after", "wrap"].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind];
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
  });
}

function HookSingular() {
  var singularHookName = "h";
  var singularHookState = {
    registry: {},
  };
  var singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}

function HookCollection() {
  var state = {
    registry: {},
  };

  var hook = register.bind(null, state);
  bindApi(hook, state);

  return hook;
}

var collectionHookDeprecationMessageDisplayed = false;
function Hook() {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn(
      '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
    );
    collectionHookDeprecationMessageDisplayed = true;
  }
  return HookCollection();
}

Hook.Singular = HookSingular.bind();
Hook.Collection = HookCollection.bind();

module.exports = Hook;
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook;
module.exports.Singular = Hook.Singular;
module.exports.Collection = Hook.Collection;


/***/ }),

/***/ "./node_modules/before-after-hook/lib/add.js":
/*!***************************************************!*\
  !*** ./node_modules/before-after-hook/lib/add.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function (method, options) {
      var result;
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_;
          return orig(result, options);
        })
        .then(function () {
          return result;
        });
    };
  }

  if (kind === "error") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options);
        });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig,
  });
}


/***/ }),

/***/ "./node_modules/before-after-hook/lib/register.js":
/*!********************************************************!*\
  !*** ./node_modules/before-after-hook/lib/register.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}


/***/ }),

/***/ "./node_modules/before-after-hook/lib/remove.js":
/*!******************************************************!*\
  !*** ./node_modules/before-after-hook/lib/remove.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name]
    .map(function (registered) {
      return registered.orig;
    })
    .indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}


/***/ }),

/***/ "./node_modules/bottleneck/light.js":
/*!******************************************!*\
  !*** ./node_modules/bottleneck/light.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
  * This file contains the Bottleneck library (MIT), compiled to ES2017, and without Clustering support.
  * https://github.com/SGrondin/bottleneck
  */
(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var load = function(received, defaults, onto = {}) {
	  var k, ref, v;
	  for (k in defaults) {
	    v = defaults[k];
	    onto[k] = (ref = received[k]) != null ? ref : v;
	  }
	  return onto;
	};

	var overwrite = function(received, defaults, onto = {}) {
	  var k, v;
	  for (k in received) {
	    v = received[k];
	    if (defaults[k] !== void 0) {
	      onto[k] = v;
	    }
	  }
	  return onto;
	};

	var parser = {
		load: load,
		overwrite: overwrite
	};

	var DLList;

	DLList = class DLList {
	  constructor(incr, decr) {
	    this.incr = incr;
	    this.decr = decr;
	    this._first = null;
	    this._last = null;
	    this.length = 0;
	  }

	  push(value) {
	    var node;
	    this.length++;
	    if (typeof this.incr === "function") {
	      this.incr();
	    }
	    node = {
	      value,
	      prev: this._last,
	      next: null
	    };
	    if (this._last != null) {
	      this._last.next = node;
	      this._last = node;
	    } else {
	      this._first = this._last = node;
	    }
	    return void 0;
	  }

	  shift() {
	    var value;
	    if (this._first == null) {
	      return;
	    } else {
	      this.length--;
	      if (typeof this.decr === "function") {
	        this.decr();
	      }
	    }
	    value = this._first.value;
	    if ((this._first = this._first.next) != null) {
	      this._first.prev = null;
	    } else {
	      this._last = null;
	    }
	    return value;
	  }

	  first() {
	    if (this._first != null) {
	      return this._first.value;
	    }
	  }

	  getArray() {
	    var node, ref, results;
	    node = this._first;
	    results = [];
	    while (node != null) {
	      results.push((ref = node, node = node.next, ref.value));
	    }
	    return results;
	  }

	  forEachShift(cb) {
	    var node;
	    node = this.shift();
	    while (node != null) {
	      (cb(node), node = this.shift());
	    }
	    return void 0;
	  }

	  debug() {
	    var node, ref, ref1, ref2, results;
	    node = this._first;
	    results = [];
	    while (node != null) {
	      results.push((ref = node, node = node.next, {
	        value: ref.value,
	        prev: (ref1 = ref.prev) != null ? ref1.value : void 0,
	        next: (ref2 = ref.next) != null ? ref2.value : void 0
	      }));
	    }
	    return results;
	  }

	};

	var DLList_1 = DLList;

	var Events;

	Events = class Events {
	  constructor(instance) {
	    this.instance = instance;
	    this._events = {};
	    if ((this.instance.on != null) || (this.instance.once != null) || (this.instance.removeAllListeners != null)) {
	      throw new Error("An Emitter already exists for this object");
	    }
	    this.instance.on = (name, cb) => {
	      return this._addListener(name, "many", cb);
	    };
	    this.instance.once = (name, cb) => {
	      return this._addListener(name, "once", cb);
	    };
	    this.instance.removeAllListeners = (name = null) => {
	      if (name != null) {
	        return delete this._events[name];
	      } else {
	        return this._events = {};
	      }
	    };
	  }

	  _addListener(name, status, cb) {
	    var base;
	    if ((base = this._events)[name] == null) {
	      base[name] = [];
	    }
	    this._events[name].push({cb, status});
	    return this.instance;
	  }

	  listenerCount(name) {
	    if (this._events[name] != null) {
	      return this._events[name].length;
	    } else {
	      return 0;
	    }
	  }

	  async trigger(name, ...args) {
	    var e, promises;
	    try {
	      if (name !== "debug") {
	        this.trigger("debug", `Event triggered: ${name}`, args);
	      }
	      if (this._events[name] == null) {
	        return;
	      }
	      this._events[name] = this._events[name].filter(function(listener) {
	        return listener.status !== "none";
	      });
	      promises = this._events[name].map(async(listener) => {
	        var e, returned;
	        if (listener.status === "none") {
	          return;
	        }
	        if (listener.status === "once") {
	          listener.status = "none";
	        }
	        try {
	          returned = typeof listener.cb === "function" ? listener.cb(...args) : void 0;
	          if (typeof (returned != null ? returned.then : void 0) === "function") {
	            return (await returned);
	          } else {
	            return returned;
	          }
	        } catch (error) {
	          e = error;
	          {
	            this.trigger("error", e);
	          }
	          return null;
	        }
	      });
	      return ((await Promise.all(promises))).find(function(x) {
	        return x != null;
	      });
	    } catch (error) {
	      e = error;
	      {
	        this.trigger("error", e);
	      }
	      return null;
	    }
	  }

	};

	var Events_1 = Events;

	var DLList$1, Events$1, Queues;

	DLList$1 = DLList_1;

	Events$1 = Events_1;

	Queues = class Queues {
	  constructor(num_priorities) {
	    var i;
	    this.Events = new Events$1(this);
	    this._length = 0;
	    this._lists = (function() {
	      var j, ref, results;
	      results = [];
	      for (i = j = 1, ref = num_priorities; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
	        results.push(new DLList$1((() => {
	          return this.incr();
	        }), (() => {
	          return this.decr();
	        })));
	      }
	      return results;
	    }).call(this);
	  }

	  incr() {
	    if (this._length++ === 0) {
	      return this.Events.trigger("leftzero");
	    }
	  }

	  decr() {
	    if (--this._length === 0) {
	      return this.Events.trigger("zero");
	    }
	  }

	  push(job) {
	    return this._lists[job.options.priority].push(job);
	  }

	  queued(priority) {
	    if (priority != null) {
	      return this._lists[priority].length;
	    } else {
	      return this._length;
	    }
	  }

	  shiftAll(fn) {
	    return this._lists.forEach(function(list) {
	      return list.forEachShift(fn);
	    });
	  }

	  getFirst(arr = this._lists) {
	    var j, len, list;
	    for (j = 0, len = arr.length; j < len; j++) {
	      list = arr[j];
	      if (list.length > 0) {
	        return list;
	      }
	    }
	    return [];
	  }

	  shiftLastFrom(priority) {
	    return this.getFirst(this._lists.slice(priority).reverse()).shift();
	  }

	};

	var Queues_1 = Queues;

	var BottleneckError;

	BottleneckError = class BottleneckError extends Error {};

	var BottleneckError_1 = BottleneckError;

	var BottleneckError$1, DEFAULT_PRIORITY, Job, NUM_PRIORITIES, parser$1;

	NUM_PRIORITIES = 10;

	DEFAULT_PRIORITY = 5;

	parser$1 = parser;

	BottleneckError$1 = BottleneckError_1;

	Job = class Job {
	  constructor(task, args, options, jobDefaults, rejectOnDrop, Events, _states, Promise) {
	    this.task = task;
	    this.args = args;
	    this.rejectOnDrop = rejectOnDrop;
	    this.Events = Events;
	    this._states = _states;
	    this.Promise = Promise;
	    this.options = parser$1.load(options, jobDefaults);
	    this.options.priority = this._sanitizePriority(this.options.priority);
	    if (this.options.id === jobDefaults.id) {
	      this.options.id = `${this.options.id}-${this._randomIndex()}`;
	    }
	    this.promise = new this.Promise((_resolve, _reject) => {
	      this._resolve = _resolve;
	      this._reject = _reject;
	    });
	    this.retryCount = 0;
	  }

	  _sanitizePriority(priority) {
	    var sProperty;
	    sProperty = ~~priority !== priority ? DEFAULT_PRIORITY : priority;
	    if (sProperty < 0) {
	      return 0;
	    } else if (sProperty > NUM_PRIORITIES - 1) {
	      return NUM_PRIORITIES - 1;
	    } else {
	      return sProperty;
	    }
	  }

	  _randomIndex() {
	    return Math.random().toString(36).slice(2);
	  }

	  doDrop({error, message = "This job has been dropped by Bottleneck"} = {}) {
	    if (this._states.remove(this.options.id)) {
	      if (this.rejectOnDrop) {
	        this._reject(error != null ? error : new BottleneckError$1(message));
	      }
	      this.Events.trigger("dropped", {args: this.args, options: this.options, task: this.task, promise: this.promise});
	      return true;
	    } else {
	      return false;
	    }
	  }

	  _assertStatus(expected) {
	    var status;
	    status = this._states.jobStatus(this.options.id);
	    if (!(status === expected || (expected === "DONE" && status === null))) {
	      throw new BottleneckError$1(`Invalid job status ${status}, expected ${expected}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
	    }
	  }

	  doReceive() {
	    this._states.start(this.options.id);
	    return this.Events.trigger("received", {args: this.args, options: this.options});
	  }

	  doQueue(reachedHWM, blocked) {
	    this._assertStatus("RECEIVED");
	    this._states.next(this.options.id);
	    return this.Events.trigger("queued", {args: this.args, options: this.options, reachedHWM, blocked});
	  }

	  doRun() {
	    if (this.retryCount === 0) {
	      this._assertStatus("QUEUED");
	      this._states.next(this.options.id);
	    } else {
	      this._assertStatus("EXECUTING");
	    }
	    return this.Events.trigger("scheduled", {args: this.args, options: this.options});
	  }

	  async doExecute(chained, clearGlobalState, run, free) {
	    var error, eventInfo, passed;
	    if (this.retryCount === 0) {
	      this._assertStatus("RUNNING");
	      this._states.next(this.options.id);
	    } else {
	      this._assertStatus("EXECUTING");
	    }
	    eventInfo = {args: this.args, options: this.options, retryCount: this.retryCount};
	    this.Events.trigger("executing", eventInfo);
	    try {
	      passed = (await (chained != null ? chained.schedule(this.options, this.task, ...this.args) : this.task(...this.args)));
	      if (clearGlobalState()) {
	        this.doDone(eventInfo);
	        await free(this.options, eventInfo);
	        this._assertStatus("DONE");
	        return this._resolve(passed);
	      }
	    } catch (error1) {
	      error = error1;
	      return this._onFailure(error, eventInfo, clearGlobalState, run, free);
	    }
	  }

	  doExpire(clearGlobalState, run, free) {
	    var error, eventInfo;
	    if (this._states.jobStatus(this.options.id === "RUNNING")) {
	      this._states.next(this.options.id);
	    }
	    this._assertStatus("EXECUTING");
	    eventInfo = {args: this.args, options: this.options, retryCount: this.retryCount};
	    error = new BottleneckError$1(`This job timed out after ${this.options.expiration} ms.`);
	    return this._onFailure(error, eventInfo, clearGlobalState, run, free);
	  }

	  async _onFailure(error, eventInfo, clearGlobalState, run, free) {
	    var retry, retryAfter;
	    if (clearGlobalState()) {
	      retry = (await this.Events.trigger("failed", error, eventInfo));
	      if (retry != null) {
	        retryAfter = ~~retry;
	        this.Events.trigger("retry", `Retrying ${this.options.id} after ${retryAfter} ms`, eventInfo);
	        this.retryCount++;
	        return run(retryAfter);
	      } else {
	        this.doDone(eventInfo);
	        await free(this.options, eventInfo);
	        this._assertStatus("DONE");
	        return this._reject(error);
	      }
	    }
	  }

	  doDone(eventInfo) {
	    this._assertStatus("EXECUTING");
	    this._states.next(this.options.id);
	    return this.Events.trigger("done", eventInfo);
	  }

	};

	var Job_1 = Job;

	var BottleneckError$2, LocalDatastore, parser$2;

	parser$2 = parser;

	BottleneckError$2 = BottleneckError_1;

	LocalDatastore = class LocalDatastore {
	  constructor(instance, storeOptions, storeInstanceOptions) {
	    this.instance = instance;
	    this.storeOptions = storeOptions;
	    this.clientId = this.instance._randomIndex();
	    parser$2.load(storeInstanceOptions, storeInstanceOptions, this);
	    this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now();
	    this._running = 0;
	    this._done = 0;
	    this._unblockTime = 0;
	    this.ready = this.Promise.resolve();
	    this.clients = {};
	    this._startHeartbeat();
	  }

	  _startHeartbeat() {
	    var base;
	    if ((this.heartbeat == null) && (((this.storeOptions.reservoirRefreshInterval != null) && (this.storeOptions.reservoirRefreshAmount != null)) || ((this.storeOptions.reservoirIncreaseInterval != null) && (this.storeOptions.reservoirIncreaseAmount != null)))) {
	      return typeof (base = (this.heartbeat = setInterval(() => {
	        var amount, incr, maximum, now, reservoir;
	        now = Date.now();
	        if ((this.storeOptions.reservoirRefreshInterval != null) && now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval) {
	          this._lastReservoirRefresh = now;
	          this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;
	          this.instance._drainAll(this.computeCapacity());
	        }
	        if ((this.storeOptions.reservoirIncreaseInterval != null) && now >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval) {
	          ({
	            reservoirIncreaseAmount: amount,
	            reservoirIncreaseMaximum: maximum,
	            reservoir
	          } = this.storeOptions);
	          this._lastReservoirIncrease = now;
	          incr = maximum != null ? Math.min(amount, maximum - reservoir) : amount;
	          if (incr > 0) {
	            this.storeOptions.reservoir += incr;
	            return this.instance._drainAll(this.computeCapacity());
	          }
	        }
	      }, this.heartbeatInterval))).unref === "function" ? base.unref() : void 0;
	    } else {
	      return clearInterval(this.heartbeat);
	    }
	  }

	  async __publish__(message) {
	    await this.yieldLoop();
	    return this.instance.Events.trigger("message", message.toString());
	  }

	  async __disconnect__(flush) {
	    await this.yieldLoop();
	    clearInterval(this.heartbeat);
	    return this.Promise.resolve();
	  }

	  yieldLoop(t = 0) {
	    return new this.Promise(function(resolve, reject) {
	      return setTimeout(resolve, t);
	    });
	  }

	  computePenalty() {
	    var ref;
	    return (ref = this.storeOptions.penalty) != null ? ref : (15 * this.storeOptions.minTime) || 5000;
	  }

	  async __updateSettings__(options) {
	    await this.yieldLoop();
	    parser$2.overwrite(options, options, this.storeOptions);
	    this._startHeartbeat();
	    this.instance._drainAll(this.computeCapacity());
	    return true;
	  }

	  async __running__() {
	    await this.yieldLoop();
	    return this._running;
	  }

	  async __queued__() {
	    await this.yieldLoop();
	    return this.instance.queued();
	  }

	  async __done__() {
	    await this.yieldLoop();
	    return this._done;
	  }

	  async __groupCheck__(time) {
	    await this.yieldLoop();
	    return (this._nextRequest + this.timeout) < time;
	  }

	  computeCapacity() {
	    var maxConcurrent, reservoir;
	    ({maxConcurrent, reservoir} = this.storeOptions);
	    if ((maxConcurrent != null) && (reservoir != null)) {
	      return Math.min(maxConcurrent - this._running, reservoir);
	    } else if (maxConcurrent != null) {
	      return maxConcurrent - this._running;
	    } else if (reservoir != null) {
	      return reservoir;
	    } else {
	      return null;
	    }
	  }

	  conditionsCheck(weight) {
	    var capacity;
	    capacity = this.computeCapacity();
	    return (capacity == null) || weight <= capacity;
	  }

	  async __incrementReservoir__(incr) {
	    var reservoir;
	    await this.yieldLoop();
	    reservoir = this.storeOptions.reservoir += incr;
	    this.instance._drainAll(this.computeCapacity());
	    return reservoir;
	  }

	  async __currentReservoir__() {
	    await this.yieldLoop();
	    return this.storeOptions.reservoir;
	  }

	  isBlocked(now) {
	    return this._unblockTime >= now;
	  }

	  check(weight, now) {
	    return this.conditionsCheck(weight) && (this._nextRequest - now) <= 0;
	  }

	  async __check__(weight) {
	    var now;
	    await this.yieldLoop();
	    now = Date.now();
	    return this.check(weight, now);
	  }

	  async __register__(index, weight, expiration) {
	    var now, wait;
	    await this.yieldLoop();
	    now = Date.now();
	    if (this.conditionsCheck(weight)) {
	      this._running += weight;
	      if (this.storeOptions.reservoir != null) {
	        this.storeOptions.reservoir -= weight;
	      }
	      wait = Math.max(this._nextRequest - now, 0);
	      this._nextRequest = now + wait + this.storeOptions.minTime;
	      return {
	        success: true,
	        wait,
	        reservoir: this.storeOptions.reservoir
	      };
	    } else {
	      return {
	        success: false
	      };
	    }
	  }

	  strategyIsBlock() {
	    return this.storeOptions.strategy === 3;
	  }

	  async __submit__(queueLength, weight) {
	    var blocked, now, reachedHWM;
	    await this.yieldLoop();
	    if ((this.storeOptions.maxConcurrent != null) && weight > this.storeOptions.maxConcurrent) {
	      throw new BottleneckError$2(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);
	    }
	    now = Date.now();
	    reachedHWM = (this.storeOptions.highWater != null) && queueLength === this.storeOptions.highWater && !this.check(weight, now);
	    blocked = this.strategyIsBlock() && (reachedHWM || this.isBlocked(now));
	    if (blocked) {
	      this._unblockTime = now + this.computePenalty();
	      this._nextRequest = this._unblockTime + this.storeOptions.minTime;
	      this.instance._dropAllQueued();
	    }
	    return {
	      reachedHWM,
	      blocked,
	      strategy: this.storeOptions.strategy
	    };
	  }

	  async __free__(index, weight) {
	    await this.yieldLoop();
	    this._running -= weight;
	    this._done += weight;
	    this.instance._drainAll(this.computeCapacity());
	    return {
	      running: this._running
	    };
	  }

	};

	var LocalDatastore_1 = LocalDatastore;

	var BottleneckError$3, States;

	BottleneckError$3 = BottleneckError_1;

	States = class States {
	  constructor(status1) {
	    this.status = status1;
	    this._jobs = {};
	    this.counts = this.status.map(function() {
	      return 0;
	    });
	  }

	  next(id) {
	    var current, next;
	    current = this._jobs[id];
	    next = current + 1;
	    if ((current != null) && next < this.status.length) {
	      this.counts[current]--;
	      this.counts[next]++;
	      return this._jobs[id]++;
	    } else if (current != null) {
	      this.counts[current]--;
	      return delete this._jobs[id];
	    }
	  }

	  start(id) {
	    var initial;
	    initial = 0;
	    this._jobs[id] = initial;
	    return this.counts[initial]++;
	  }

	  remove(id) {
	    var current;
	    current = this._jobs[id];
	    if (current != null) {
	      this.counts[current]--;
	      delete this._jobs[id];
	    }
	    return current != null;
	  }

	  jobStatus(id) {
	    var ref;
	    return (ref = this.status[this._jobs[id]]) != null ? ref : null;
	  }

	  statusJobs(status) {
	    var k, pos, ref, results, v;
	    if (status != null) {
	      pos = this.status.indexOf(status);
	      if (pos < 0) {
	        throw new BottleneckError$3(`status must be one of ${this.status.join(', ')}`);
	      }
	      ref = this._jobs;
	      results = [];
	      for (k in ref) {
	        v = ref[k];
	        if (v === pos) {
	          results.push(k);
	        }
	      }
	      return results;
	    } else {
	      return Object.keys(this._jobs);
	    }
	  }

	  statusCounts() {
	    return this.counts.reduce(((acc, v, i) => {
	      acc[this.status[i]] = v;
	      return acc;
	    }), {});
	  }

	};

	var States_1 = States;

	var DLList$2, Sync;

	DLList$2 = DLList_1;

	Sync = class Sync {
	  constructor(name, Promise) {
	    this.schedule = this.schedule.bind(this);
	    this.name = name;
	    this.Promise = Promise;
	    this._running = 0;
	    this._queue = new DLList$2();
	  }

	  isEmpty() {
	    return this._queue.length === 0;
	  }

	  async _tryToRun() {
	    var args, cb, error, reject, resolve, returned, task;
	    if ((this._running < 1) && this._queue.length > 0) {
	      this._running++;
	      ({task, args, resolve, reject} = this._queue.shift());
	      cb = (await (async function() {
	        try {
	          returned = (await task(...args));
	          return function() {
	            return resolve(returned);
	          };
	        } catch (error1) {
	          error = error1;
	          return function() {
	            return reject(error);
	          };
	        }
	      })());
	      this._running--;
	      this._tryToRun();
	      return cb();
	    }
	  }

	  schedule(task, ...args) {
	    var promise, reject, resolve;
	    resolve = reject = null;
	    promise = new this.Promise(function(_resolve, _reject) {
	      resolve = _resolve;
	      return reject = _reject;
	    });
	    this._queue.push({task, args, resolve, reject});
	    this._tryToRun();
	    return promise;
	  }

	};

	var Sync_1 = Sync;

	var version = "2.19.5";
	var version$1 = {
		version: version
	};

	var version$2 = /*#__PURE__*/Object.freeze({
		version: version,
		default: version$1
	});

	var require$$2 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

	var require$$3 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

	var require$$4 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

	var Events$2, Group, IORedisConnection$1, RedisConnection$1, Scripts$1, parser$3;

	parser$3 = parser;

	Events$2 = Events_1;

	RedisConnection$1 = require$$2;

	IORedisConnection$1 = require$$3;

	Scripts$1 = require$$4;

	Group = (function() {
	  class Group {
	    constructor(limiterOptions = {}) {
	      this.deleteKey = this.deleteKey.bind(this);
	      this.limiterOptions = limiterOptions;
	      parser$3.load(this.limiterOptions, this.defaults, this);
	      this.Events = new Events$2(this);
	      this.instances = {};
	      this.Bottleneck = Bottleneck_1;
	      this._startAutoCleanup();
	      this.sharedConnection = this.connection != null;
	      if (this.connection == null) {
	        if (this.limiterOptions.datastore === "redis") {
	          this.connection = new RedisConnection$1(Object.assign({}, this.limiterOptions, {Events: this.Events}));
	        } else if (this.limiterOptions.datastore === "ioredis") {
	          this.connection = new IORedisConnection$1(Object.assign({}, this.limiterOptions, {Events: this.Events}));
	        }
	      }
	    }

	    key(key = "") {
	      var ref;
	      return (ref = this.instances[key]) != null ? ref : (() => {
	        var limiter;
	        limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
	          id: `${this.id}-${key}`,
	          timeout: this.timeout,
	          connection: this.connection
	        }));
	        this.Events.trigger("created", limiter, key);
	        return limiter;
	      })();
	    }

	    async deleteKey(key = "") {
	      var deleted, instance;
	      instance = this.instances[key];
	      if (this.connection) {
	        deleted = (await this.connection.__runCommand__(['del', ...Scripts$1.allKeys(`${this.id}-${key}`)]));
	      }
	      if (instance != null) {
	        delete this.instances[key];
	        await instance.disconnect();
	      }
	      return (instance != null) || deleted > 0;
	    }

	    limiters() {
	      var k, ref, results, v;
	      ref = this.instances;
	      results = [];
	      for (k in ref) {
	        v = ref[k];
	        results.push({
	          key: k,
	          limiter: v
	        });
	      }
	      return results;
	    }

	    keys() {
	      return Object.keys(this.instances);
	    }

	    async clusterKeys() {
	      var cursor, end, found, i, k, keys, len, next, start;
	      if (this.connection == null) {
	        return this.Promise.resolve(this.keys());
	      }
	      keys = [];
	      cursor = null;
	      start = `b_${this.id}-`.length;
	      end = "_settings".length;
	      while (cursor !== 0) {
	        [next, found] = (await this.connection.__runCommand__(["scan", cursor != null ? cursor : 0, "match", `b_${this.id}-*_settings`, "count", 10000]));
	        cursor = ~~next;
	        for (i = 0, len = found.length; i < len; i++) {
	          k = found[i];
	          keys.push(k.slice(start, -end));
	        }
	      }
	      return keys;
	    }

	    _startAutoCleanup() {
	      var base;
	      clearInterval(this.interval);
	      return typeof (base = (this.interval = setInterval(async() => {
	        var e, k, ref, results, time, v;
	        time = Date.now();
	        ref = this.instances;
	        results = [];
	        for (k in ref) {
	          v = ref[k];
	          try {
	            if ((await v._store.__groupCheck__(time))) {
	              results.push(this.deleteKey(k));
	            } else {
	              results.push(void 0);
	            }
	          } catch (error) {
	            e = error;
	            results.push(v.Events.trigger("error", e));
	          }
	        }
	        return results;
	      }, this.timeout / 2))).unref === "function" ? base.unref() : void 0;
	    }

	    updateSettings(options = {}) {
	      parser$3.overwrite(options, this.defaults, this);
	      parser$3.overwrite(options, options, this.limiterOptions);
	      if (options.timeout != null) {
	        return this._startAutoCleanup();
	      }
	    }

	    disconnect(flush = true) {
	      var ref;
	      if (!this.sharedConnection) {
	        return (ref = this.connection) != null ? ref.disconnect(flush) : void 0;
	      }
	    }

	  }
	  Group.prototype.defaults = {
	    timeout: 1000 * 60 * 5,
	    connection: null,
	    Promise: Promise,
	    id: "group-key"
	  };

	  return Group;

	}).call(commonjsGlobal);

	var Group_1 = Group;

	var Batcher, Events$3, parser$4;

	parser$4 = parser;

	Events$3 = Events_1;

	Batcher = (function() {
	  class Batcher {
	    constructor(options = {}) {
	      this.options = options;
	      parser$4.load(this.options, this.defaults, this);
	      this.Events = new Events$3(this);
	      this._arr = [];
	      this._resetPromise();
	      this._lastFlush = Date.now();
	    }

	    _resetPromise() {
	      return this._promise = new this.Promise((res, rej) => {
	        return this._resolve = res;
	      });
	    }

	    _flush() {
	      clearTimeout(this._timeout);
	      this._lastFlush = Date.now();
	      this._resolve();
	      this.Events.trigger("batch", this._arr);
	      this._arr = [];
	      return this._resetPromise();
	    }

	    add(data) {
	      var ret;
	      this._arr.push(data);
	      ret = this._promise;
	      if (this._arr.length === this.maxSize) {
	        this._flush();
	      } else if ((this.maxTime != null) && this._arr.length === 1) {
	        this._timeout = setTimeout(() => {
	          return this._flush();
	        }, this.maxTime);
	      }
	      return ret;
	    }

	  }
	  Batcher.prototype.defaults = {
	    maxTime: null,
	    maxSize: null,
	    Promise: Promise
	  };

	  return Batcher;

	}).call(commonjsGlobal);

	var Batcher_1 = Batcher;

	var require$$4$1 = () => console.log('You must import the full version of Bottleneck in order to use this feature.');

	var require$$8 = getCjsExportFromNamespace(version$2);

	var Bottleneck, DEFAULT_PRIORITY$1, Events$4, Job$1, LocalDatastore$1, NUM_PRIORITIES$1, Queues$1, RedisDatastore$1, States$1, Sync$1, parser$5,
	  splice = [].splice;

	NUM_PRIORITIES$1 = 10;

	DEFAULT_PRIORITY$1 = 5;

	parser$5 = parser;

	Queues$1 = Queues_1;

	Job$1 = Job_1;

	LocalDatastore$1 = LocalDatastore_1;

	RedisDatastore$1 = require$$4$1;

	Events$4 = Events_1;

	States$1 = States_1;

	Sync$1 = Sync_1;

	Bottleneck = (function() {
	  class Bottleneck {
	    constructor(options = {}, ...invalid) {
	      var storeInstanceOptions, storeOptions;
	      this._addToQueue = this._addToQueue.bind(this);
	      this._validateOptions(options, invalid);
	      parser$5.load(options, this.instanceDefaults, this);
	      this._queues = new Queues$1(NUM_PRIORITIES$1);
	      this._scheduled = {};
	      this._states = new States$1(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : []));
	      this._limiter = null;
	      this.Events = new Events$4(this);
	      this._submitLock = new Sync$1("submit", this.Promise);
	      this._registerLock = new Sync$1("register", this.Promise);
	      storeOptions = parser$5.load(options, this.storeDefaults, {});
	      this._store = (function() {
	        if (this.datastore === "redis" || this.datastore === "ioredis" || (this.connection != null)) {
	          storeInstanceOptions = parser$5.load(options, this.redisStoreDefaults, {});
	          return new RedisDatastore$1(this, storeOptions, storeInstanceOptions);
	        } else if (this.datastore === "local") {
	          storeInstanceOptions = parser$5.load(options, this.localStoreDefaults, {});
	          return new LocalDatastore$1(this, storeOptions, storeInstanceOptions);
	        } else {
	          throw new Bottleneck.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
	        }
	      }).call(this);
	      this._queues.on("leftzero", () => {
	        var ref;
	        return (ref = this._store.heartbeat) != null ? typeof ref.ref === "function" ? ref.ref() : void 0 : void 0;
	      });
	      this._queues.on("zero", () => {
	        var ref;
	        return (ref = this._store.heartbeat) != null ? typeof ref.unref === "function" ? ref.unref() : void 0 : void 0;
	      });
	    }

	    _validateOptions(options, invalid) {
	      if (!((options != null) && typeof options === "object" && invalid.length === 0)) {
	        throw new Bottleneck.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
	      }
	    }

	    ready() {
	      return this._store.ready;
	    }

	    clients() {
	      return this._store.clients;
	    }

	    channel() {
	      return `b_${this.id}`;
	    }

	    channel_client() {
	      return `b_${this.id}_${this._store.clientId}`;
	    }

	    publish(message) {
	      return this._store.__publish__(message);
	    }

	    disconnect(flush = true) {
	      return this._store.__disconnect__(flush);
	    }

	    chain(_limiter) {
	      this._limiter = _limiter;
	      return this;
	    }

	    queued(priority) {
	      return this._queues.queued(priority);
	    }

	    clusterQueued() {
	      return this._store.__queued__();
	    }

	    empty() {
	      return this.queued() === 0 && this._submitLock.isEmpty();
	    }

	    running() {
	      return this._store.__running__();
	    }

	    done() {
	      return this._store.__done__();
	    }

	    jobStatus(id) {
	      return this._states.jobStatus(id);
	    }

	    jobs(status) {
	      return this._states.statusJobs(status);
	    }

	    counts() {
	      return this._states.statusCounts();
	    }

	    _randomIndex() {
	      return Math.random().toString(36).slice(2);
	    }

	    check(weight = 1) {
	      return this._store.__check__(weight);
	    }

	    _clearGlobalState(index) {
	      if (this._scheduled[index] != null) {
	        clearTimeout(this._scheduled[index].expiration);
	        delete this._scheduled[index];
	        return true;
	      } else {
	        return false;
	      }
	    }

	    async _free(index, job, options, eventInfo) {
	      var e, running;
	      try {
	        ({running} = (await this._store.__free__(index, options.weight)));
	        this.Events.trigger("debug", `Freed ${options.id}`, eventInfo);
	        if (running === 0 && this.empty()) {
	          return this.Events.trigger("idle");
	        }
	      } catch (error1) {
	        e = error1;
	        return this.Events.trigger("error", e);
	      }
	    }

	    _run(index, job, wait) {
	      var clearGlobalState, free, run;
	      job.doRun();
	      clearGlobalState = this._clearGlobalState.bind(this, index);
	      run = this._run.bind(this, index, job);
	      free = this._free.bind(this, index, job);
	      return this._scheduled[index] = {
	        timeout: setTimeout(() => {
	          return job.doExecute(this._limiter, clearGlobalState, run, free);
	        }, wait),
	        expiration: job.options.expiration != null ? setTimeout(function() {
	          return job.doExpire(clearGlobalState, run, free);
	        }, wait + job.options.expiration) : void 0,
	        job: job
	      };
	    }

	    _drainOne(capacity) {
	      return this._registerLock.schedule(() => {
	        var args, index, next, options, queue;
	        if (this.queued() === 0) {
	          return this.Promise.resolve(null);
	        }
	        queue = this._queues.getFirst();
	        ({options, args} = next = queue.first());
	        if ((capacity != null) && options.weight > capacity) {
	          return this.Promise.resolve(null);
	        }
	        this.Events.trigger("debug", `Draining ${options.id}`, {args, options});
	        index = this._randomIndex();
	        return this._store.__register__(index, options.weight, options.expiration).then(({success, wait, reservoir}) => {
	          var empty;
	          this.Events.trigger("debug", `Drained ${options.id}`, {success, args, options});
	          if (success) {
	            queue.shift();
	            empty = this.empty();
	            if (empty) {
	              this.Events.trigger("empty");
	            }
	            if (reservoir === 0) {
	              this.Events.trigger("depleted", empty);
	            }
	            this._run(index, next, wait);
	            return this.Promise.resolve(options.weight);
	          } else {
	            return this.Promise.resolve(null);
	          }
	        });
	      });
	    }

	    _drainAll(capacity, total = 0) {
	      return this._drainOne(capacity).then((drained) => {
	        var newCapacity;
	        if (drained != null) {
	          newCapacity = capacity != null ? capacity - drained : capacity;
	          return this._drainAll(newCapacity, total + drained);
	        } else {
	          return this.Promise.resolve(total);
	        }
	      }).catch((e) => {
	        return this.Events.trigger("error", e);
	      });
	    }

	    _dropAllQueued(message) {
	      return this._queues.shiftAll(function(job) {
	        return job.doDrop({message});
	      });
	    }

	    stop(options = {}) {
	      var done, waitForExecuting;
	      options = parser$5.load(options, this.stopDefaults);
	      waitForExecuting = (at) => {
	        var finished;
	        finished = () => {
	          var counts;
	          counts = this._states.counts;
	          return (counts[0] + counts[1] + counts[2] + counts[3]) === at;
	        };
	        return new this.Promise((resolve, reject) => {
	          if (finished()) {
	            return resolve();
	          } else {
	            return this.on("done", () => {
	              if (finished()) {
	                this.removeAllListeners("done");
	                return resolve();
	              }
	            });
	          }
	        });
	      };
	      done = options.dropWaitingJobs ? (this._run = function(index, next) {
	        return next.doDrop({
	          message: options.dropErrorMessage
	        });
	      }, this._drainOne = () => {
	        return this.Promise.resolve(null);
	      }, this._registerLock.schedule(() => {
	        return this._submitLock.schedule(() => {
	          var k, ref, v;
	          ref = this._scheduled;
	          for (k in ref) {
	            v = ref[k];
	            if (this.jobStatus(v.job.options.id) === "RUNNING") {
	              clearTimeout(v.timeout);
	              clearTimeout(v.expiration);
	              v.job.doDrop({
	                message: options.dropErrorMessage
	              });
	            }
	          }
	          this._dropAllQueued(options.dropErrorMessage);
	          return waitForExecuting(0);
	        });
	      })) : this.schedule({
	        priority: NUM_PRIORITIES$1 - 1,
	        weight: 0
	      }, () => {
	        return waitForExecuting(1);
	      });
	      this._receive = function(job) {
	        return job._reject(new Bottleneck.prototype.BottleneckError(options.enqueueErrorMessage));
	      };
	      this.stop = () => {
	        return this.Promise.reject(new Bottleneck.prototype.BottleneckError("stop() has already been called"));
	      };
	      return done;
	    }

	    async _addToQueue(job) {
	      var args, blocked, error, options, reachedHWM, shifted, strategy;
	      ({args, options} = job);
	      try {
	        ({reachedHWM, blocked, strategy} = (await this._store.__submit__(this.queued(), options.weight)));
	      } catch (error1) {
	        error = error1;
	        this.Events.trigger("debug", `Could not queue ${options.id}`, {args, options, error});
	        job.doDrop({error});
	        return false;
	      }
	      if (blocked) {
	        job.doDrop();
	        return true;
	      } else if (reachedHWM) {
	        shifted = strategy === Bottleneck.prototype.strategy.LEAK ? this._queues.shiftLastFrom(options.priority) : strategy === Bottleneck.prototype.strategy.OVERFLOW_PRIORITY ? this._queues.shiftLastFrom(options.priority + 1) : strategy === Bottleneck.prototype.strategy.OVERFLOW ? job : void 0;
	        if (shifted != null) {
	          shifted.doDrop();
	        }
	        if ((shifted == null) || strategy === Bottleneck.prototype.strategy.OVERFLOW) {
	          if (shifted == null) {
	            job.doDrop();
	          }
	          return reachedHWM;
	        }
	      }
	      job.doQueue(reachedHWM, blocked);
	      this._queues.push(job);
	      await this._drainAll();
	      return reachedHWM;
	    }

	    _receive(job) {
	      if (this._states.jobStatus(job.options.id) != null) {
	        job._reject(new Bottleneck.prototype.BottleneckError(`A job with the same id already exists (id=${job.options.id})`));
	        return false;
	      } else {
	        job.doReceive();
	        return this._submitLock.schedule(this._addToQueue, job);
	      }
	    }

	    submit(...args) {
	      var cb, fn, job, options, ref, ref1, task;
	      if (typeof args[0] === "function") {
	        ref = args, [fn, ...args] = ref, [cb] = splice.call(args, -1);
	        options = parser$5.load({}, this.jobDefaults);
	      } else {
	        ref1 = args, [options, fn, ...args] = ref1, [cb] = splice.call(args, -1);
	        options = parser$5.load(options, this.jobDefaults);
	      }
	      task = (...args) => {
	        return new this.Promise(function(resolve, reject) {
	          return fn(...args, function(...args) {
	            return (args[0] != null ? reject : resolve)(args);
	          });
	        });
	      };
	      job = new Job$1(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
	      job.promise.then(function(args) {
	        return typeof cb === "function" ? cb(...args) : void 0;
	      }).catch(function(args) {
	        if (Array.isArray(args)) {
	          return typeof cb === "function" ? cb(...args) : void 0;
	        } else {
	          return typeof cb === "function" ? cb(args) : void 0;
	        }
	      });
	      return this._receive(job);
	    }

	    schedule(...args) {
	      var job, options, task;
	      if (typeof args[0] === "function") {
	        [task, ...args] = args;
	        options = {};
	      } else {
	        [options, task, ...args] = args;
	      }
	      job = new Job$1(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
	      this._receive(job);
	      return job.promise;
	    }

	    wrap(fn) {
	      var schedule, wrapped;
	      schedule = this.schedule.bind(this);
	      wrapped = function(...args) {
	        return schedule(fn.bind(this), ...args);
	      };
	      wrapped.withOptions = function(options, ...args) {
	        return schedule(options, fn, ...args);
	      };
	      return wrapped;
	    }

	    async updateSettings(options = {}) {
	      await this._store.__updateSettings__(parser$5.overwrite(options, this.storeDefaults));
	      parser$5.overwrite(options, this.instanceDefaults, this);
	      return this;
	    }

	    currentReservoir() {
	      return this._store.__currentReservoir__();
	    }

	    incrementReservoir(incr = 0) {
	      return this._store.__incrementReservoir__(incr);
	    }

	  }
	  Bottleneck.default = Bottleneck;

	  Bottleneck.Events = Events$4;

	  Bottleneck.version = Bottleneck.prototype.version = require$$8.version;

	  Bottleneck.strategy = Bottleneck.prototype.strategy = {
	    LEAK: 1,
	    OVERFLOW: 2,
	    OVERFLOW_PRIORITY: 4,
	    BLOCK: 3
	  };

	  Bottleneck.BottleneckError = Bottleneck.prototype.BottleneckError = BottleneckError_1;

	  Bottleneck.Group = Bottleneck.prototype.Group = Group_1;

	  Bottleneck.RedisConnection = Bottleneck.prototype.RedisConnection = require$$2;

	  Bottleneck.IORedisConnection = Bottleneck.prototype.IORedisConnection = require$$3;

	  Bottleneck.Batcher = Bottleneck.prototype.Batcher = Batcher_1;

	  Bottleneck.prototype.jobDefaults = {
	    priority: DEFAULT_PRIORITY$1,
	    weight: 1,
	    expiration: null,
	    id: "<no-id>"
	  };

	  Bottleneck.prototype.storeDefaults = {
	    maxConcurrent: null,
	    minTime: 0,
	    highWater: null,
	    strategy: Bottleneck.prototype.strategy.LEAK,
	    penalty: null,
	    reservoir: null,
	    reservoirRefreshInterval: null,
	    reservoirRefreshAmount: null,
	    reservoirIncreaseInterval: null,
	    reservoirIncreaseAmount: null,
	    reservoirIncreaseMaximum: null
	  };

	  Bottleneck.prototype.localStoreDefaults = {
	    Promise: Promise,
	    timeout: null,
	    heartbeatInterval: 250
	  };

	  Bottleneck.prototype.redisStoreDefaults = {
	    Promise: Promise,
	    timeout: null,
	    heartbeatInterval: 5000,
	    clientTimeout: 10000,
	    Redis: null,
	    clientOptions: {},
	    clusterNodes: null,
	    clearDatastore: false,
	    connection: null
	  };

	  Bottleneck.prototype.instanceDefaults = {
	    datastore: "local",
	    connection: null,
	    id: "<no-id>",
	    rejectOnDrop: true,
	    trackDoneStatus: false,
	    Promise: Promise
	  };

	  Bottleneck.prototype.stopDefaults = {
	    enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
	    dropWaitingJobs: true,
	    dropErrorMessage: "This limiter has been stopped."
	  };

	  return Bottleneck;

	}).call(commonjsGlobal);

	var Bottleneck_1 = Bottleneck;

	var lib = Bottleneck_1;

	return lib;

})));


/***/ }),

/***/ "./node_modules/btoa-lite/btoa-browser.js":
/*!************************************************!*\
  !*** ./node_modules/btoa-lite/btoa-browser.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function _btoa(str) {
  return btoa(str)
}


/***/ }),

/***/ "./node_modules/clean-stack/index.js":
/*!*******************************************!*\
  !*** ./node_modules/clean-stack/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(/*! os */ "?e4dd");

const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/;
const homeDir = typeof os.homedir === 'undefined' ? '' : os.homedir();

module.exports = (stack, options) => {
	options = Object.assign({pretty: false}, options);

	return stack.replace(/\\/g, '/')
		.split('\n')
		.filter(line => {
			const pathMatches = line.match(extractPathRegex);
			if (pathMatches === null || !pathMatches[1]) {
				return true;
			}

			const match = pathMatches[1];

			// Electron
			if (
				match.includes('.app/Contents/Resources/electron.asar') ||
				match.includes('.app/Contents/Resources/default_app.asar')
			) {
				return false;
			}

			return !pathRegex.test(match);
		})
		.filter(line => line.trim() !== '')
		.map(line => {
			if (options.pretty) {
				return line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')));
			}

			return line;
		})
		.join('\n');
};


/***/ }),

/***/ "./node_modules/deprecation/dist-web/index.js":
/*!****************************************************!*\
  !*** ./node_modules/deprecation/dist-web/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deprecation: () => (/* binding */ Deprecation)
/* harmony export */ });
class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}




/***/ }),

/***/ "./node_modules/indent-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/indent-string/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = (string, count = 1, options) => {
	options = {
		indent: ' ',
		includeEmptyLines: false,
		...options
	};

	if (typeof string !== 'string') {
		throw new TypeError(
			`Expected \`input\` to be a \`string\`, got \`${typeof string}\``
		);
	}

	if (typeof count !== 'number') {
		throw new TypeError(
			`Expected \`count\` to be a \`number\`, got \`${typeof count}\``
		);
	}

	if (typeof options.indent !== 'string') {
		throw new TypeError(
			`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
		);
	}

	if (count === 0) {
		return string;
	}

	const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;

	return string.replace(regex, options.indent.repeat(count));
};


/***/ }),

/***/ "./node_modules/octokit/dist-web/index.js":
/*!************************************************!*\
  !*** ./node_modules/octokit/dist-web/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   OAuthApp: () => (/* binding */ OAuthApp),
/* harmony export */   Octokit: () => (/* binding */ Octokit),
/* harmony export */   RequestError: () => (/* reexport safe */ _octokit_request_error__WEBPACK_IMPORTED_MODULE_8__.RequestError),
/* harmony export */   createNodeMiddleware: () => (/* reexport safe */ _octokit_app__WEBPACK_IMPORTED_MODULE_6__.createNodeMiddleware)
/* harmony export */ });
/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/core */ "./node_modules/@octokit/core/dist-web/index.js");
/* harmony import */ var _octokit_plugin_paginate_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/plugin-paginate-rest */ "./node_modules/@octokit/plugin-paginate-rest/dist-web/index.js");
/* harmony import */ var _octokit_plugin_paginate_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/plugin-paginate-graphql */ "./node_modules/@octokit/plugin-paginate-graphql/dist-web/index.js");
/* harmony import */ var _octokit_plugin_rest_endpoint_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/plugin-rest-endpoint-methods */ "./node_modules/@octokit/plugin-rest-endpoint-methods/dist-web/index.js");
/* harmony import */ var _octokit_plugin_retry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/plugin-retry */ "./node_modules/@octokit/plugin-retry/dist-web/index.js");
/* harmony import */ var _octokit_plugin_throttling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @octokit/plugin-throttling */ "./node_modules/@octokit/plugin-throttling/dist-web/index.js");
/* harmony import */ var _octokit_request_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @octokit/request-error */ "./node_modules/@octokit/request-error/dist-web/index.js");
/* harmony import */ var _octokit_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @octokit/app */ "./node_modules/@octokit/app/dist-web/index.js");
/* harmony import */ var _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @octokit/oauth-app */ "./node_modules/@octokit/oauth-app/dist-node/index.js");
/* harmony import */ var _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_octokit_oauth_app__WEBPACK_IMPORTED_MODULE_7__);
// pkg/dist-src/octokit.js







// pkg/dist-src/version.js
var VERSION = "3.1.0";

// pkg/dist-src/octokit.js

var Octokit = _octokit_core__WEBPACK_IMPORTED_MODULE_0__.Octokit.plugin(
  _octokit_plugin_rest_endpoint_methods__WEBPACK_IMPORTED_MODULE_1__.restEndpointMethods,
  _octokit_plugin_paginate_rest__WEBPACK_IMPORTED_MODULE_2__.paginateRest,
  _octokit_plugin_paginate_graphql__WEBPACK_IMPORTED_MODULE_3__.paginateGraphql,
  _octokit_plugin_retry__WEBPACK_IMPORTED_MODULE_4__.retry,
  _octokit_plugin_throttling__WEBPACK_IMPORTED_MODULE_5__.throttling
).defaults({
  userAgent: `octokit.js/${VERSION}`,
  throttle: {
    onRateLimit,
    onSecondaryRateLimit
  }
});
function onRateLimit(retryAfter, options, octokit) {
  octokit.log.warn(
    `Request quota exhausted for request ${options.method} ${options.url}`
  );
  if (options.request.retryCount === 0) {
    octokit.log.info(`Retrying after ${retryAfter} seconds!`);
    return true;
  }
}
function onSecondaryRateLimit(retryAfter, options, octokit) {
  octokit.log.warn(
    `SecondaryRateLimit detected for request ${options.method} ${options.url}`
  );
  if (options.request.retryCount === 0) {
    octokit.log.info(`Retrying after ${retryAfter} seconds!`);
    return true;
  }
}

// pkg/dist-src/app.js



var App = _octokit_app__WEBPACK_IMPORTED_MODULE_6__.App.defaults({ Octokit });
var OAuthApp = _octokit_oauth_app__WEBPACK_IMPORTED_MODULE_7__.OAuthApp.defaults({ Octokit });



/***/ }),

/***/ "./node_modules/once/once.js":
/*!***********************************!*\
  !*** ./node_modules/once/once.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(/*! wrappy */ "./node_modules/wrappy/wrappy.js")
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ "./src/chromeUtils.ts":
/*!****************************!*\
  !*** ./src/chromeUtils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChromeTabs: () => (/* binding */ createChromeTabs),
/* harmony export */   getChromeLocalStorage: () => (/* binding */ getChromeLocalStorage),
/* harmony export */   getChromeMessage: () => (/* binding */ getChromeMessage),
/* harmony export */   getChromeSyncStorage: () => (/* binding */ getChromeSyncStorage),
/* harmony export */   sendChromeMessage: () => (/* binding */ sendChromeMessage),
/* harmony export */   setChromeLocalStorage: () => (/* binding */ setChromeLocalStorage),
/* harmony export */   setChromeSyncStorage: () => (/* binding */ setChromeSyncStorage)
/* harmony export */ });
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const createChromeTabs = (_a) => {
    var props = __rest(_a, []);
    chrome.tabs.create(Object.assign({}, props));
};
const setChromeSyncStorage = (_a, fn) => {
    var props = __rest(_a, []);
    if (fn === void 0) { fn = () => { }; }
    chrome.storage.sync.set(Object.assign({}, props), fn);
};
const getChromeSyncStorage = (key, fn) => {
    if (fn) {
        chrome.storage.sync.get([key], fn);
        return;
    }
    return chrome.storage.sync.get([key]);
};
const setChromeLocalStorage = (_a, fn) => {
    var props = __rest(_a, []);
    if (fn === void 0) { fn = () => { }; }
    chrome.storage.local.set(Object.assign({}, props), fn);
};
const getChromeLocalStorage = (key, fn) => {
    if (fn) {
        chrome.storage.local.get([key], fn);
        return;
    }
    return chrome.storage.local.get([key]);
};
const sendChromeMessage = (_a) => {
    var props = __rest(_a, []);
    chrome.runtime.sendMessage(Object.assign({}, props));
};
const getChromeMessage = (fn) => {
    chrome.runtime.onMessage.addListener(fn);
};


/***/ }),

/***/ "./node_modules/universal-github-app-jwt/dist-web/index.bundled.js":
/*!*************************************************************************!*\
  !*** ./node_modules/universal-github-app-jwt/dist-web/index.bundled.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   githubAppJwt: () => (/* binding */ o)
/* harmony export */ });
function t(t,n,r,e,i,a,o){try{var u=t[a](o),c=u.value}catch(t){return void r(t)}u.done?n(c):Promise.resolve(c).then(e,i)}function n(n){return function(){var r=this,e=arguments;return new Promise((function(i,a){var o=n.apply(r,e);function u(n){t(o,i,a,u,c,"next",n)}function c(n){t(o,i,a,u,c,"throw",n)}u(void 0)}))}}function r(t){for(var n=new ArrayBuffer(t.length),r=new Uint8Array(n),e=0,i=t.length;e<i;e++)r[e]=t.charCodeAt(e);return n}function e(t){return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function i(t){return e(btoa(JSON.stringify(t)))}var a=function(){var t=n((function*(t){var{privateKey:n,payload:a}=t;if(/BEGIN RSA PRIVATE KEY/.test(n))throw new Error("[universal-github-app-jwt] Private Key is in PKCS#1 format, but only PKCS#8 is supported. See https://github.com/gr2m/universal-github-app-jwt#readme");var o,u={name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},c=(o=n.trim().split("\n").slice(1,-1).join(""),r(atob(o))),p=yield crypto.subtle.importKey("pkcs8",c,u,!1,["sign"]),f=function(t,n){return"".concat(i(t),".").concat(i(n))}({alg:"RS256",typ:"JWT"},a),l=r(f),s=function(t){for(var n="",r=new Uint8Array(t),i=r.byteLength,a=0;a<i;a++)n+=String.fromCharCode(r[a]);return e(btoa(n))}(yield crypto.subtle.sign(u.name,p,l));return"".concat(f,".").concat(s)}));return function(n){return t.apply(this,arguments)}}();function o(t){return u.apply(this,arguments)}function u(){return(u=n((function*(t){var{id:n,privateKey:r,now:e=Math.floor(Date.now()/1e3)}=t,i=e-30,o=i+600,u={iat:i,exp:o,iss:n};return{appId:n,expiration:o,token:yield a({privateKey:r,payload:u})}}))).apply(this,arguments)}
//# sourceMappingURL=index.bundled.js.map


/***/ }),

/***/ "./node_modules/universal-user-agent/dist-web/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/universal-user-agent/dist-web/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserAgent: () => (/* binding */ getUserAgent)
/* harmony export */ });
function getUserAgent() {
    if (typeof navigator === "object" && "userAgent" in navigator) {
        return navigator.userAgent;
    }
    if (typeof process === "object" && "version" in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    }
    return "<environment undetectable>";
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/wrappy/wrappy.js":
/*!***************************************!*\
  !*** ./node_modules/wrappy/wrappy.js ***!
  \***************************************/
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ "?e4dd":
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@octokit/auth-app/node_modules/lru-cache/dist/cjs/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@octokit/auth-app/node_modules/lru-cache/dist/cjs/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * @module LRUCache
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LRUCache = void 0;
const perf = typeof performance === 'object' &&
    performance &&
    typeof performance.now === 'function'
    ? performance
    : Date;
const warned = new Set();
/* c8 ignore start */
const PROCESS = (typeof process === 'object' && !!process ? process : {});
/* c8 ignore start */
const emitWarning = (msg, type, code, fn) => {
    typeof PROCESS.emitWarning === 'function'
        ? PROCESS.emitWarning(msg, type, code, fn)
        : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
/* c8 ignore start */
if (typeof AC === 'undefined') {
    //@ts-ignore
    AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
    };
    //@ts-ignore
    AC = class AbortController {
        constructor() {
            warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
            if (this.signal.aborted)
                return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            for (const fn of this.signal._onabort) {
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1';
    const warnACPolyfill = () => {
        if (!printACPolyfillWarning)
            return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' +
            'node 14, load an AbortController polyfill from the ' +
            '`node-abort-controller` package. A minimal polyfill is ' +
            'provided for use by LRUCache.fetch(), but it should not be ' +
            'relied upon in other contexts (eg, passing it to other APIs that ' +
            'use AbortController/AbortSignal might have undesirable effects). ' +
            'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', warnACPolyfill);
    };
}
/* c8 ignore stop */
const shouldWarn = (code) => !warned.has(code);
const TYPE = Symbol('type');
const isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
/* c8 ignore start */
// This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max) => !isPosInt(max)
    ? null
    : max <= Math.pow(2, 8)
        ? Uint8Array
        : max <= Math.pow(2, 16)
            ? Uint16Array
            : max <= Math.pow(2, 32)
                ? Uint32Array
                : max <= Number.MAX_SAFE_INTEGER
                    ? ZeroArray
                    : null;
/* c8 ignore stop */
class ZeroArray extends Array {
    constructor(size) {
        super(size);
        this.fill(0);
    }
}
class Stack {
    heap;
    length;
    // private constructor
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls)
            return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls) {
        /* c8 ignore start */
        if (!Stack.#constructing) {
            throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        /* c8 ignore stop */
        this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
/**
 * Default export, the thing you're using this module to get.
 *
 * All properties from the options object (with the exception of
 * {@link OptionsBase.max} and {@link OptionsBase.maxSize}) are added as
 * normal public members. (`max` and `maxBase` are read-only getters.)
 * Changing any of these will alter the defaults for subsequent method calls,
 * but is otherwise safe.
 */
class LRUCache {
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    ttl;
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    ttlResolution;
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    ttlAutopurge;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    updateAgeOnGet;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    updateAgeOnHas;
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    allowStale;
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    noDisposeOnSet;
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    noUpdateTTL;
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    maxEntrySize;
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    sizeCalculation;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    noDeleteOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    noDeleteOnStaleGet;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    allowStaleOnFetchAbort;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    allowStaleOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    ignoreFetchAbort;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */
    static unsafeExposeInternals(c) {
        return {
            // properties
            starts: c.#starts,
            ttls: c.#ttls,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head() {
                return c.#head;
            },
            get tail() {
                return c.#tail;
            },
            free: c.#free,
            // methods
            isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
            moveToTail: (index) => c.#moveToTail(index),
            indexes: (options) => c.#indexes(options),
            rindexes: (options) => c.#rindexes(options),
            isStale: (index) => c.#isStale(index),
        };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */
    get max() {
        return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */
    get maxSize() {
        return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */
    get calculatedSize() {
        return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */
    get size() {
        return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */
    get fetchMethod() {
        return this.#fetchMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */
    get dispose() {
        return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */
    get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options) {
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort, } = options;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError('max option must be a nonnegative integer');
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error('invalid max value: ' + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
            }
            if (typeof this.sizeCalculation !== 'function') {
                throw new TypeError('sizeCalculation set to non-function');
            }
        }
        if (fetchMethod !== undefined &&
            typeof fetchMethod !== 'function') {
            throw new TypeError('fetchMethod must be a function if specified');
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === 'function') {
            this.#dispose = dispose;
        }
        if (typeof disposeAfter === 'function') {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        }
        else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError('maxSize must be a positive integer if specified');
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError('maxEntrySize must be a positive integer if specified');
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution =
            isPosInt(ttlResolution) || ttlResolution === 0
                ? ttlResolution
                : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError('ttl must be a positive integer if specified');
            }
            this.#initializeTTLTracking();
        }
        // do not allow completely unbounded caches
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = 'LRU_CACHE_UNBOUNDED';
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' +
                    'result in unbounded memory consumption.';
                emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
            }
        }
    }
    /**
     * Return the remaining TTL time for a given entry key
     */
    getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now()) => {
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(() => {
                    if (this.#isStale(index)) {
                        this.delete(this.#keyList[index]);
                    }
                }, ttl + 1);
                // unref() not supported on all platforms
                /* c8 ignore start */
                if (t.unref) {
                    t.unref();
                }
                /* c8 ignore stop */
            }
        };
        this.#updateItemAge = index => {
            starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index) => {
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        // debounce calls to perf.now() to 1s so we're not hitting
        // that costly call repeatedly.
        let cachedNow = 0;
        const getNow = () => {
            const n = perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(() => (cachedNow = 0), this.ttlResolution);
                // not available on all platforms
                /* c8 ignore start */
                if (t.unref) {
                    t.unref();
                }
                /* c8 ignore stop */
            }
            return n;
        };
        this.getRemainingTTL = key => {
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (ttl === 0 || start === 0) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = index => {
            return (ttls[index] !== 0 &&
                starts[index] !== 0 &&
                (cachedNow || getNow()) - starts[index] > ttls[index]);
        };
    }
    // conditionally set private methods related to TTL
    #updateItemAge = () => { };
    #statusTTL = () => { };
    #setItemTTL = () => { };
    /* c8 ignore stop */
    #isStale = () => false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = index => {
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation) => {
            // provisionally accept background fetches.
            // actual value size will be checked when they return.
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== 'function') {
                        throw new TypeError('sizeCalculation must be a function');
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError('sizeCalculation return invalid (expect positive integer)');
                    }
                }
                else {
                    throw new TypeError('invalid size value (must be positive integer). ' +
                        'When maxSize or maxEntrySize is used, sizeCalculation ' +
                        'or size must be set.');
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status) => {
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while (this.#calculatedSize > maxSize) {
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = _i => { };
    #addItemSize = (_i, _s, _st) => { };
    #requireSize = (_k, _v, size, sizeCalculation) => {
        if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#tail; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                }
                else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#head; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                }
                else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return (index !== undefined &&
            this.#keyMap.get(this.#keyList[index]) === index);
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */
    *entries() {
        for (const i of this.#indexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */
    *rentries() {
        for (const i of this.#rindexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */
    *keys() {
        for (const i of this.#indexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */
    *rkeys() {
        for (const i of this.#rindexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */
    *values() {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */
    *rvalues() {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */
    [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to Array.find().  fn is called as fn(value, key, cache).
     */
    find(fn, getOptions = {}) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    /**
     * Call the supplied function on each item in the cache, in order from
     * most recently used to least recently used.  fn is called as
     * fn(value, key, cache).  Does not update age or recenty of use.
     * Does not iterate over stale values.
     */
    forEach(fn, thisp = this) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */
    rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */
    purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({ allowStale: true })) {
            if (this.#isStale(i)) {
                this.delete(this.#keyList[i]);
                deleted = true;
            }
        }
        return deleted;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to cache.load()
     */
    dump() {
        const arr = [];
        for (const i of this.#indexes({ allowStale: true })) {
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined || key === undefined)
                continue;
            const entry = { value };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([key, entry]);
        }
        return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     * Note that the shape of the resulting cache may be different if the
     * same options are not used in both caches.
     */
    load(arr) {
        this.clear();
        for (const [key, entry] of arr) {
            if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = Date.now() - entry.start;
                entry.start = perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     */
    set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status, } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        // if the item doesn't fit, don't do anything
        // NB: maxEntrySize set to maxSize by default
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = 'miss';
                status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            this.delete(k);
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            // addition
            index = (this.#size === 0
                ? this.#tail
                : this.#free.length !== 0
                    ? this.#free.pop()
                    : this.#size === this.#max
                        ? this.#evict(false)
                        : this.#size);
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status)
                status.set = 'add';
            noUpdateTTL = false;
        }
        else {
            // update
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error('replaced'));
                }
                else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, 'set');
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([oldVal, k, 'set']);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = 'replace';
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal)
                        ? oldVal.__staleWhileFetching
                        : oldVal;
                    if (oldValue !== undefined)
                        status.oldValue = oldValue;
                }
            }
            else if (status) {
                status.set = 'update';
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status)
                this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */
    pop() {
        try {
            while (this.#size) {
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                }
                else if (val !== undefined) {
                    return val;
                }
            }
        }
        finally {
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while ((task = dt?.shift())) {
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('evicted'));
        }
        else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, 'evict');
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([v, k, 'evict']);
            }
        }
        this.#removeItemSize(head);
        // if we aren't about to use the index, then null these out
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        }
        else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */
    has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) &&
                v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = 'hit';
                    this.#statusTTL(status, index);
                }
                return true;
            }
            else if (status) {
                status.has = 'stale';
                this.#statusTTL(status, index);
            }
        }
        else if (status) {
            status.has = 'miss';
        }
        return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */
    peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined &&
            (allowStale || !this.#isStale(index))) {
            const v = this.#valList[index];
            // either stale and allowed, or forcing a refresh of non-stale value
            return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        }
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        // when/if our AC signals, then stop listening to theirs.
        signal?.addEventListener('abort', () => ac.abort(signal.reason), {
            signal: ac.signal,
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context,
        };
        const cb = (v, updateCache = false) => {
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort)
                        options.status.fetchAbortIgnored = true;
                }
                else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            // either we didn't abort, and are still here, or we did, and ignored
            const bf = p;
            if (this.#valList[index] === p) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    }
                    else {
                        this.delete(k);
                    }
                }
                else {
                    if (options.status)
                        options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er) => {
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er) => {
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                // if we allow stale on fetch rejections, then we need to ensure that
                // the stale value is not removed from the cache when the fetch fails.
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.delete(k);
                }
                else if (!allowStaleAborted) {
                    // still replace the *promise* with the stale value,
                    // since we are done with the promise at this point.
                    // leave it untouched if we're still waiting for an
                    // aborted background fetch that hasn't yet returned.
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            }
            else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej) => {
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then(v => res(v === undefined ? undefined : v), rej);
            }
            // ignored, we go until we finish, regardless.
            // defer check until we are actually aborting,
            // so fetchMethod can override.
            ac.signal.addEventListener('abort', () => {
                if (!options.ignoreFetchAbort ||
                    options.allowStaleOnFetchAbort) {
                    res(undefined);
                    // when it eventually resolves, update the cache.
                    if (options.allowStaleOnFetchAbort) {
                        res = v => cb(v, true);
                    }
                }
            });
        };
        if (options.status)
            options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined,
        });
        if (index === undefined) {
            // internal, don't expose status.
            this.set(k, bf, { ...fetchOpts.options, status: undefined });
            index = this.#keyMap.get(k);
        }
        else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod)
            return false;
        const b = p;
        return (!!b &&
            b instanceof Promise &&
            b.hasOwnProperty('__staleWhileFetching') &&
            b.__abortController instanceof AC);
    }
    async fetch(k, fetchOptions = {}) {
        const { 
        // get options
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, 
        // set options
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, 
        // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal, } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status)
                status.fetch = 'get';
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status,
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal,
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status)
                status.fetch = 'miss';
            const p = this.#backgroundFetch(k, index, options, context);
            return (p.__returned = p);
        }
        else {
            // in cache, maybe already fetching
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = 'inflight';
                    if (stale)
                        status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : (v.__returned = v);
            }
            // if we force a refresh, that means do NOT serve the cached value,
            // unless we are already in the process of refreshing the cache.
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status)
                    status.fetch = 'hit';
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status)
                    this.#statusTTL(status, index);
                return v;
            }
            // ok, it is stale or a forced refresh, and not already fetching.
            // refresh the cache.
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? 'stale' : 'refresh';
                if (staleVal && isStale)
                    status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : (p.__returned = p);
        }
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */
    get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status, } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status)
                this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status)
                    status.get = 'stale';
                // delete only if not an in-flight background fetch
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.delete(k);
                    }
                    if (status && allowStale)
                        status.returnedStale = true;
                    return allowStale ? value : undefined;
                }
                else {
                    if (status &&
                        allowStale &&
                        value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            }
            else {
                if (status)
                    status.get = 'hit';
                // if we're currently fetching it, we don't actually have it yet
                // it's not stale, which means this isn't a staleWhileRefetching.
                // If it's not stale, and fetching, AND has a __staleWhileFetching
                // value, then that means the user fetched with {forceRefresh:true},
                // so it's safe to return that value.
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        }
        else if (status) {
            status.get = 'miss';
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        // if tail already, nothing to do
        // if head, move head to next[index]
        // else
        //   move next[prev[index]] to next[index] (head has no prev)
        //   move prev[next[index]] to prev[index]
        // prev[index] = tail
        // next[tail] = index
        // tail = index
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            }
            else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    /**
     * Deletes a key out of the cache.
     * Returns true if the key was deleted, false otherwise.
     */
    delete(k) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                deleted = true;
                if (this.#size === 1) {
                    this.clear();
                }
                else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error('deleted'));
                    }
                    else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, 'delete');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([v, k, 'delete']);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    }
                    else if (index === this.#head) {
                        this.#head = this.#next[index];
                    }
                    else {
                        this.#next[this.#prev[index]] = this.#next[index];
                        this.#prev[this.#next[index]] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */
    clear() {
        for (const index of this.#rindexes({ allowStale: true })) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error('deleted'));
            }
            else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, 'delete');
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([v, k, 'delete']);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
    }
}
exports.LRUCache = LRUCache;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/is-plain-object/dist/is-plain-object.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/is-plain-object/dist/is-plain-object.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject)
/* harmony export */ });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! octokit */ "./node_modules/octokit/dist-web/index.js");
/* harmony import */ var _chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chromeUtils */ "./src/chromeUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const messageHandler = (req, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
        (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({ GITHUB_TOKEN: req.token });
        const octokit = new octokit__WEBPACK_IMPORTED_MODULE_1__.Octokit({
            auth: req.token,
        });
        const res = yield octokit.request("GET /user/repos");
    }
});
const a = (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeMessage)(messageHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBNEQ7QUFDN0QsQ0FBQyxDQUMrQjtBQUNoQyxDQUFDLHNCQUFzQjs7QUFFdkIsdUhBQXVILHFCQUFNLG1CQUFtQixxQkFBTTs7QUFFdEo7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7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QUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sMEJBQTBCO0FBQ2pDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsUUFBUSxpREFBaUQsZ0NBQWdDO0FBQzFLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHVCQUF1QjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQUs7QUFDWDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkJBQTZCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSx3QkFBd0Isb0JBQW9CO0FBQy9HLFdBQVc7QUFDWCxxRUFBcUUsd0JBQXdCLG9CQUFvQjtBQUNqSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRLEdBQUcsSUFBSTtBQUNqQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsUUFBUSxHQUFHLElBQUk7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsbUhBQW1ILFFBQVE7QUFDM0g7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBLFdBQVc7QUFDWCxvRkFBb0Y7QUFDcEY7QUFDQSxXQUFXO0FBQ1gscUZBQXFGLGVBQWU7QUFDcEc7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjs7QUFFQTtBQUNBLG1CQUFtQixRQUFRLEdBQUcscUJBQXFCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQiwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxXQUFXLElBQUksY0FBYztBQUMvRTtBQUNBLDJGQUEyRix5QkFBeUI7QUFDcEg7QUFDQSxtREFBbUQsV0FBVyxJQUFJLHVCQUF1QjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQyxRQUFRO0FBQ1I7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxTQUFTO0FBQ1Q7QUFDQSx5REFBeUQsV0FBVyxJQUFJLHFCQUFxQjtBQUM3RixxQkFBcUIsTUFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyR0FBMkcsZUFBZTtBQUMxSDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUJBQXVCLEtBQUssMEJBQTBCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdDQUFnQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQ0FBb0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQXdDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9DQUFvQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5Q0FBeUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrVUFBa1U7QUFDbFY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdC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QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsOEJBQThCLHlDQUF5QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpUkFBaVI7QUFDalI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsZ0JBQWdCLDRIQUE0SDtBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsa0JBQWtCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7QUNsM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7VUNqQ3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNrQztBQUNzQztBQUN4RTtBQUNBO0FBQ0EsUUFBUSxtRUFBcUIsR0FBRyx5QkFBeUI7QUFDekQsNEJBQTRCLDRDQUFPO0FBQ25DO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsVUFBVSw4REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9hcHAvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvYXV0aC1hcHAvZGlzdC1ub2RlL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2F1dGgtb2F1dGgtYXBwL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2F1dGgtb2F1dGgtZGV2aWNlL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2F1dGgtb2F1dGgtdXNlci9kaXN0LXdlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9hdXRoLXRva2VuL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2F1dGgtdW5hdXRoZW50aWNhdGVkL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L2NvcmUvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvZW5kcG9pbnQvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvZ3JhcGhxbC9kaXN0LXdlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9vYXV0aC1hcHAvZGlzdC1ub2RlL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L29hdXRoLWF1dGhvcml6YXRpb24tdXJsL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L29hdXRoLW1ldGhvZHMvZGlzdC1zcmMvY2hlY2stdG9rZW4uanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvb2F1dGgtbWV0aG9kcy9kaXN0LXNyYy9jcmVhdGUtZGV2aWNlLWNvZGUuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvb2F1dGgtbWV0aG9kcy9kaXN0LXNyYy9kZWxldGUtYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9vYXV0aC1tZXRob2RzL2Rpc3Qtc3JjL2RlbGV0ZS10b2tlbi5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9vYXV0aC1tZXRob2RzL2Rpc3Qtc3JjL2V4Y2hhbmdlLWRldmljZS1jb2RlLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L29hdXRoLW1ldGhvZHMvZGlzdC1zcmMvZXhjaGFuZ2Utd2ViLWZsb3ctY29kZS5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9vYXV0aC1tZXRob2RzL2Rpc3Qtc3JjL2dldC13ZWItZmxvdy1hdXRob3JpemF0aW9uLXVybC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9vYXV0aC1tZXRob2RzL2Rpc3Qtc3JjL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L29hdXRoLW1ldGhvZHMvZGlzdC1zcmMvcmVmcmVzaC10b2tlbi5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9vYXV0aC1tZXRob2RzL2Rpc3Qtc3JjL3Jlc2V0LXRva2VuLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L29hdXRoLW1ldGhvZHMvZGlzdC1zcmMvc2NvcGUtdG9rZW4uanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvb2F1dGgtbWV0aG9kcy9kaXN0LXNyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9vYXV0aC1tZXRob2RzL2Rpc3Qtc3JjL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXBhZ2luYXRlLWdyYXBocWwvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXBhZ2luYXRlLXJlc3QvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXJlc3QtZW5kcG9pbnQtbWV0aG9kcy9kaXN0LXdlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9wbHVnaW4tcmV0cnkvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcGx1Z2luLXRocm90dGxpbmcvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvcmVxdWVzdC1lcnJvci9kaXN0LXdlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9Ab2N0b2tpdC9yZXF1ZXN0L2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL0BvY3Rva2l0L3dlYmhvb2tzLW1ldGhvZHMvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvd2ViaG9va3MvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvYWdncmVnYXRlLWVycm9yL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9hZGQuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvYmVmb3JlLWFmdGVyLWhvb2svbGliL3JlZ2lzdGVyLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2JlZm9yZS1hZnRlci1ob29rL2xpYi9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvYm90dGxlbmVjay9saWdodC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9idG9hLWxpdGUvYnRvYS1icm93c2VyLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2NsZWFuLXN0YWNrL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2RlcHJlY2F0aW9uL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2luZGVudC1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvb2N0b2tpdC9kaXN0LXdlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9vbmNlL29uY2UuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvY2hyb21lVXRpbHMudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWdpdGh1Yi1hcHAtand0L2Rpc3Qtd2ViL2luZGV4LmJ1bmRsZWQuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLXVzZXItYWdlbnQvZGlzdC13ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvd3JhcHB5L3dyYXBweS5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci9pZ25vcmVkfC9Vc2Vycy9oYW4vRGVza3RvcC9QU0h1Yi9QU0hlbHBlci9ub2RlX21vZHVsZXMvY2xlYW4tc3RhY2t8b3MiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvQG9jdG9raXQvYXV0aC1hcHAvbm9kZV9tb2R1bGVzL2xydS1jYWNoZS9kaXN0L2Nqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvZGlzdC9pcy1wbGFpbi1vYmplY3QubWpzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgT2N0b2tpdCBhcyBPY3Rva2l0Q29yZSB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVBcHBBdXRoIGFzIGNyZWF0ZUFwcEF1dGgzIH0gZnJvbSBcIkBvY3Rva2l0L2F1dGgtYXBwXCI7XG5pbXBvcnQgeyBPQXV0aEFwcCB9IGZyb20gXCJAb2N0b2tpdC9vYXV0aC1hcHBcIjtcbmltcG9ydCB7IFdlYmhvb2tzIGFzIFdlYmhvb2tzMiB9IGZyb20gXCJAb2N0b2tpdC93ZWJob29rc1wiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjE0LjAuMFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvd2ViaG9va3MuanNcbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuaW1wb3J0IHsgY3JlYXRlQXBwQXV0aCB9IGZyb20gXCJAb2N0b2tpdC9hdXRoLWFwcFwiO1xuaW1wb3J0IHsgY3JlYXRlVW5hdXRoZW50aWNhdGVkQXV0aCB9IGZyb20gXCJAb2N0b2tpdC9hdXRoLXVuYXV0aGVudGljYXRlZFwiO1xuaW1wb3J0IHsgV2ViaG9va3MgfSBmcm9tIFwiQG9jdG9raXQvd2ViaG9va3NcIjtcbmZ1bmN0aW9uIHdlYmhvb2tzKGFwcE9jdG9raXQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBXZWJob29rcyh7XG4gICAgc2VjcmV0OiBvcHRpb25zLnNlY3JldCxcbiAgICB0cmFuc2Zvcm06IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgaWYgKCEoXCJpbnN0YWxsYXRpb25cIiBpbiBldmVudC5wYXlsb2FkKSB8fCB0eXBlb2YgZXZlbnQucGF5bG9hZC5pbnN0YWxsYXRpb24gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3Qgb2N0b2tpdDIgPSBuZXcgYXBwT2N0b2tpdC5jb25zdHJ1Y3Rvcih7XG4gICAgICAgICAgYXV0aFN0cmF0ZWd5OiBjcmVhdGVVbmF1dGhlbnRpY2F0ZWRBdXRoLFxuICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgIHJlYXNvbjogYFwiaW5zdGFsbGF0aW9uXCIga2V5IG1pc3NpbmcgaW4gd2ViaG9vayBldmVudCBwYXlsb2FkYFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgb2N0b2tpdDogb2N0b2tpdDJcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluc3RhbGxhdGlvbklkID0gZXZlbnQucGF5bG9hZC5pbnN0YWxsYXRpb24uaWQ7XG4gICAgICBjb25zdCBvY3Rva2l0ID0gYXdhaXQgYXBwT2N0b2tpdC5hdXRoKHtcbiAgICAgICAgdHlwZTogXCJpbnN0YWxsYXRpb25cIixcbiAgICAgICAgaW5zdGFsbGF0aW9uSWQsXG4gICAgICAgIGZhY3RvcnkoYXV0aCkge1xuICAgICAgICAgIHJldHVybiBuZXcgYXV0aC5vY3Rva2l0LmNvbnN0cnVjdG9yKHtcbiAgICAgICAgICAgIC4uLmF1dGgub2N0b2tpdE9wdGlvbnMsXG4gICAgICAgICAgICBhdXRoU3RyYXRlZ3k6IGNyZWF0ZUFwcEF1dGgsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgICAuLi5hdXRoLFxuICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbklkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvY3Rva2l0Lmhvb2suYmVmb3JlKFwicmVxdWVzdFwiLCAob3B0aW9uczIpID0+IHtcbiAgICAgICAgb3B0aW9uczIuaGVhZGVyc1tcIngtZ2l0aHViLWRlbGl2ZXJ5XCJdID0gZXZlbnQuaWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICBvY3Rva2l0XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9lYWNoLWluc3RhbGxhdGlvbi5qc1xuaW1wb3J0IHsgY29tcG9zZVBhZ2luYXRlUmVzdCB9IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tcGFnaW5hdGUtcmVzdFwiO1xuaW1wb3J0IHsgT2N0b2tpdCBhcyBPY3Rva2l0MyB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9nZXQtaW5zdGFsbGF0aW9uLW9jdG9raXQuanNcbmltcG9ydCB7IGNyZWF0ZUFwcEF1dGggYXMgY3JlYXRlQXBwQXV0aDIgfSBmcm9tIFwiQG9jdG9raXQvYXV0aC1hcHBcIjtcbmltcG9ydCB7IE9jdG9raXQgYXMgT2N0b2tpdDIgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuYXN5bmMgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uT2N0b2tpdChhcHAsIGluc3RhbGxhdGlvbklkKSB7XG4gIHJldHVybiBhcHAub2N0b2tpdC5hdXRoKHtcbiAgICB0eXBlOiBcImluc3RhbGxhdGlvblwiLFxuICAgIGluc3RhbGxhdGlvbklkLFxuICAgIGZhY3RvcnkoYXV0aCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgLi4uYXV0aC5vY3Rva2l0T3B0aW9ucyxcbiAgICAgICAgYXV0aFN0cmF0ZWd5OiBjcmVhdGVBcHBBdXRoMixcbiAgICAgICAgLi4ueyBhdXRoOiB7IC4uLmF1dGgsIGluc3RhbGxhdGlvbklkIH0gfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXcgYXV0aC5vY3Rva2l0LmNvbnN0cnVjdG9yKG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9lYWNoLWluc3RhbGxhdGlvbi5qc1xuZnVuY3Rpb24gZWFjaEluc3RhbGxhdGlvbkZhY3RvcnkoYXBwKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGVhY2hJbnN0YWxsYXRpb24uYmluZChudWxsLCBhcHApLCB7XG4gICAgaXRlcmF0b3I6IGVhY2hJbnN0YWxsYXRpb25JdGVyYXRvci5iaW5kKG51bGwsIGFwcClcbiAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBlYWNoSW5zdGFsbGF0aW9uKGFwcCwgY2FsbGJhY2spIHtcbiAgY29uc3QgaSA9IGVhY2hJbnN0YWxsYXRpb25JdGVyYXRvcihhcHApW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICBsZXQgcmVzdWx0ID0gYXdhaXQgaS5uZXh0KCk7XG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICBhd2FpdCBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICAgIHJlc3VsdCA9IGF3YWl0IGkubmV4dCgpO1xuICB9XG59XG5mdW5jdGlvbiBlYWNoSW5zdGFsbGF0aW9uSXRlcmF0b3IoYXBwKSB7XG4gIHJldHVybiB7XG4gICAgYXN5bmMgKltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IGNvbXBvc2VQYWdpbmF0ZVJlc3QuaXRlcmF0b3IoXG4gICAgICAgIGFwcC5vY3Rva2l0LFxuICAgICAgICBcIkdFVCAvYXBwL2luc3RhbGxhdGlvbnNcIlxuICAgICAgKTtcbiAgICAgIGZvciBhd2FpdCAoY29uc3QgeyBkYXRhOiBpbnN0YWxsYXRpb25zIH0gb2YgaXRlcmF0b3IpIHtcbiAgICAgICAgZm9yIChjb25zdCBpbnN0YWxsYXRpb24gb2YgaW5zdGFsbGF0aW9ucykge1xuICAgICAgICAgIGNvbnN0IGluc3RhbGxhdGlvbk9jdG9raXQgPSBhd2FpdCBnZXRJbnN0YWxsYXRpb25PY3Rva2l0KFxuICAgICAgICAgICAgYXBwLFxuICAgICAgICAgICAgaW5zdGFsbGF0aW9uLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICB5aWVsZCB7IG9jdG9raXQ6IGluc3RhbGxhdGlvbk9jdG9raXQsIGluc3RhbGxhdGlvbiB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZWFjaC1yZXBvc2l0b3J5LmpzXG5pbXBvcnQgeyBjb21wb3NlUGFnaW5hdGVSZXN0IGFzIGNvbXBvc2VQYWdpbmF0ZVJlc3QyIH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1wYWdpbmF0ZS1yZXN0XCI7XG5pbXBvcnQgeyBPY3Rva2l0IGFzIE9jdG9raXQ0IH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcbmZ1bmN0aW9uIGVhY2hSZXBvc2l0b3J5RmFjdG9yeShhcHApIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZWFjaFJlcG9zaXRvcnkuYmluZChudWxsLCBhcHApLCB7XG4gICAgaXRlcmF0b3I6IGVhY2hSZXBvc2l0b3J5SXRlcmF0b3IuYmluZChudWxsLCBhcHApXG4gIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24gZWFjaFJlcG9zaXRvcnkoYXBwLCBxdWVyeU9yQ2FsbGJhY2ssIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGkgPSBlYWNoUmVwb3NpdG9yeUl0ZXJhdG9yKFxuICAgIGFwcCxcbiAgICBjYWxsYmFjayA/IHF1ZXJ5T3JDYWxsYmFjayA6IHZvaWQgMFxuICApW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICBsZXQgcmVzdWx0ID0gYXdhaXQgaS5uZXh0KCk7XG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHF1ZXJ5T3JDYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICAgIH1cbiAgICByZXN1bHQgPSBhd2FpdCBpLm5leHQoKTtcbiAgfVxufVxuZnVuY3Rpb24gc2luZ2xlSW5zdGFsbGF0aW9uSXRlcmF0b3IoYXBwLCBpbnN0YWxsYXRpb25JZCkge1xuICByZXR1cm4ge1xuICAgIGFzeW5jICpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgICAgeWllbGQge1xuICAgICAgICBvY3Rva2l0OiBhd2FpdCBhcHAuZ2V0SW5zdGFsbGF0aW9uT2N0b2tpdChpbnN0YWxsYXRpb25JZClcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZWFjaFJlcG9zaXRvcnlJdGVyYXRvcihhcHAsIHF1ZXJ5KSB7XG4gIHJldHVybiB7XG4gICAgYXN5bmMgKltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHF1ZXJ5ID8gc2luZ2xlSW5zdGFsbGF0aW9uSXRlcmF0b3IoYXBwLCBxdWVyeS5pbnN0YWxsYXRpb25JZCkgOiBhcHAuZWFjaEluc3RhbGxhdGlvbi5pdGVyYXRvcigpO1xuICAgICAgZm9yIGF3YWl0IChjb25zdCB7IG9jdG9raXQgfSBvZiBpdGVyYXRvcikge1xuICAgICAgICBjb25zdCByZXBvc2l0b3JpZXNJdGVyYXRvciA9IGNvbXBvc2VQYWdpbmF0ZVJlc3QyLml0ZXJhdG9yKFxuICAgICAgICAgIG9jdG9raXQsXG4gICAgICAgICAgXCJHRVQgL2luc3RhbGxhdGlvbi9yZXBvc2l0b3JpZXNcIlxuICAgICAgICApO1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHsgZGF0YTogcmVwb3NpdG9yaWVzIH0gb2YgcmVwb3NpdG9yaWVzSXRlcmF0b3IpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHJlcG9zaXRvcnkgb2YgcmVwb3NpdG9yaWVzKSB7XG4gICAgICAgICAgICB5aWVsZCB7IG9jdG9raXQsIHJlcG9zaXRvcnkgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL25vZGUvaW5kZXguanNcbmltcG9ydCB7XG4gIGNyZWF0ZU5vZGVNaWRkbGV3YXJlIGFzIG9hdXRoTm9kZU1pZGRsZXdhcmUsXG4gIHNlbmROb2RlUmVzcG9uc2UsXG4gIHVua25vd25Sb3V0ZVJlc3BvbnNlXG59IGZyb20gXCJAb2N0b2tpdC9vYXV0aC1hcHBcIjtcbmltcG9ydCB7IGNyZWF0ZU5vZGVNaWRkbGV3YXJlIGFzIHdlYmhvb2tzTm9kZU1pZGRsZXdhcmUgfSBmcm9tIFwiQG9jdG9raXQvd2ViaG9va3NcIjtcbmZ1bmN0aW9uIG5vb3AoKSB7XG59XG5mdW5jdGlvbiBjcmVhdGVOb2RlTWlkZGxld2FyZShhcHAsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBsb2cgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGRlYnVnOiBub29wLFxuICAgICAgaW5mbzogbm9vcCxcbiAgICAgIHdhcm46IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpLFxuICAgICAgZXJyb3I6IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKVxuICAgIH0sXG4gICAgb3B0aW9ucy5sb2dcbiAgKTtcbiAgY29uc3Qgb3B0aW9uc1dpdGhEZWZhdWx0cyA9IHtcbiAgICBwYXRoUHJlZml4OiBcIi9hcGkvZ2l0aHViXCIsXG4gICAgLi4ub3B0aW9ucyxcbiAgICBsb2dcbiAgfTtcbiAgY29uc3Qgd2ViaG9va3NNaWRkbGV3YXJlID0gd2ViaG9va3NOb2RlTWlkZGxld2FyZShhcHAud2ViaG9va3MsIHtcbiAgICBwYXRoOiBvcHRpb25zV2l0aERlZmF1bHRzLnBhdGhQcmVmaXggKyBcIi93ZWJob29rc1wiLFxuICAgIGxvZ1xuICB9KTtcbiAgY29uc3Qgb2F1dGhNaWRkbGV3YXJlID0gb2F1dGhOb2RlTWlkZGxld2FyZShhcHAub2F1dGgsIHtcbiAgICBwYXRoUHJlZml4OiBvcHRpb25zV2l0aERlZmF1bHRzLnBhdGhQcmVmaXggKyBcIi9vYXV0aFwiXG4gIH0pO1xuICByZXR1cm4gbWlkZGxld2FyZS5iaW5kKFxuICAgIG51bGwsXG4gICAgb3B0aW9uc1dpdGhEZWZhdWx0cy5wYXRoUHJlZml4LFxuICAgIHdlYmhvb2tzTWlkZGxld2FyZSxcbiAgICBvYXV0aE1pZGRsZXdhcmVcbiAgKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocGF0aFByZWZpeCwgd2ViaG9va3NNaWRkbGV3YXJlLCBvYXV0aE1pZGRsZXdhcmUsIHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwsIFwiaHR0cDovL2xvY2FsaG9zdFwiKTtcbiAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoYCR7cGF0aFByZWZpeH0vYCkpIHtcbiAgICBpZiAocGF0aG5hbWUgPT09IGAke3BhdGhQcmVmaXh9L3dlYmhvb2tzYCkge1xuICAgICAgd2ViaG9va3NNaWRkbGV3YXJlKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB9IGVsc2UgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoYCR7cGF0aFByZWZpeH0vb2F1dGgvYCkpIHtcbiAgICAgIG9hdXRoTWlkZGxld2FyZShyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmROb2RlUmVzcG9uc2UodW5rbm93blJvdXRlUmVzcG9uc2UocmVxdWVzdCksIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbmV4dD8uKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIEFwcCA9IGNsYXNzIHtcbiAgc3RhdGljIHtcbiAgICB0aGlzLlZFUlNJT04gPSBWRVJTSU9OO1xuICB9XG4gIHN0YXRpYyBkZWZhdWx0cyhkZWZhdWx0cykge1xuICAgIGNvbnN0IEFwcFdpdGhEZWZhdWx0cyA9IGNsYXNzIGV4dGVuZHMgdGhpcyB7XG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAuLi5kZWZhdWx0cyxcbiAgICAgICAgICAuLi5hcmdzWzBdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFwcFdpdGhEZWZhdWx0cztcbiAgfVxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgY29uc3QgT2N0b2tpdDUgPSBvcHRpb25zLk9jdG9raXQgfHwgT2N0b2tpdENvcmU7XG4gICAgY29uc3QgYXV0aE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBhcHBJZDogb3B0aW9ucy5hcHBJZCxcbiAgICAgICAgcHJpdmF0ZUtleTogb3B0aW9ucy5wcml2YXRlS2V5XG4gICAgICB9LFxuICAgICAgb3B0aW9ucy5vYXV0aCA/IHtcbiAgICAgICAgY2xpZW50SWQ6IG9wdGlvbnMub2F1dGguY2xpZW50SWQsXG4gICAgICAgIGNsaWVudFNlY3JldDogb3B0aW9ucy5vYXV0aC5jbGllbnRTZWNyZXRcbiAgICAgIH0gOiB7fVxuICAgICk7XG4gICAgdGhpcy5vY3Rva2l0ID0gbmV3IE9jdG9raXQ1KHtcbiAgICAgIGF1dGhTdHJhdGVneTogY3JlYXRlQXBwQXV0aDMsXG4gICAgICBhdXRoOiBhdXRoT3B0aW9ucyxcbiAgICAgIGxvZzogb3B0aW9ucy5sb2dcbiAgICB9KTtcbiAgICB0aGlzLmxvZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGRlYnVnOiAoKSA9PiB7XG4gICAgICAgIH0sXG4gICAgICAgIGluZm86ICgpID0+IHtcbiAgICAgICAgfSxcbiAgICAgICAgd2FybjogY29uc29sZS53YXJuLmJpbmQoY29uc29sZSksXG4gICAgICAgIGVycm9yOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLmxvZ1xuICAgICk7XG4gICAgaWYgKG9wdGlvbnMud2ViaG9va3MpIHtcbiAgICAgIHRoaXMud2ViaG9va3MgPSB3ZWJob29rcyh0aGlzLm9jdG9raXQsIG9wdGlvbnMud2ViaG9va3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3ZWJob29rc1wiLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbQG9jdG9raXQvYXBwXSB3ZWJob29rcyBvcHRpb24gbm90IHNldFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9hdXRoKSB7XG4gICAgICB0aGlzLm9hdXRoID0gbmV3IE9BdXRoQXBwKHtcbiAgICAgICAgLi4ub3B0aW9ucy5vYXV0aCxcbiAgICAgICAgY2xpZW50VHlwZTogXCJnaXRodWItYXBwXCIsXG4gICAgICAgIE9jdG9raXQ6IE9jdG9raXQ1XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwib2F1dGhcIiwge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJbQG9jdG9raXQvYXBwXSBvYXV0aC5jbGllbnRJZCAvIG9hdXRoLmNsaWVudFNlY3JldCBvcHRpb25zIGFyZSBub3Qgc2V0XCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5nZXRJbnN0YWxsYXRpb25PY3Rva2l0ID0gZ2V0SW5zdGFsbGF0aW9uT2N0b2tpdC5iaW5kKFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuZWFjaEluc3RhbGxhdGlvbiA9IGVhY2hJbnN0YWxsYXRpb25GYWN0b3J5KFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5lYWNoUmVwb3NpdG9yeSA9IGVhY2hSZXBvc2l0b3J5RmFjdG9yeShcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgQXBwLFxuICBjcmVhdGVOb2RlTWlkZGxld2FyZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgZGlzdF9zcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoZGlzdF9zcmNfZXhwb3J0cywge1xuICBjcmVhdGVBcHBBdXRoOiAoKSA9PiBjcmVhdGVBcHBBdXRoLFxuICBjcmVhdGVPQXV0aFVzZXJBdXRoOiAoKSA9PiBpbXBvcnRfYXV0aF9vYXV0aF91c2VyMi5jcmVhdGVPQXV0aFVzZXJBdXRoXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKGRpc3Rfc3JjX2V4cG9ydHMpO1xudmFyIGltcG9ydF91bml2ZXJzYWxfdXNlcl9hZ2VudCA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiKTtcbnZhciBpbXBvcnRfcmVxdWVzdCA9IHJlcXVpcmUoXCJAb2N0b2tpdC9yZXF1ZXN0XCIpO1xudmFyIGltcG9ydF9hdXRoX29hdXRoX2FwcCA9IHJlcXVpcmUoXCJAb2N0b2tpdC9hdXRoLW9hdXRoLWFwcFwiKTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2F1dGguanNcbnZhciBpbXBvcnRfZGVwcmVjYXRpb24gPSByZXF1aXJlKFwiZGVwcmVjYXRpb25cIik7XG52YXIgT0F1dGhBcHBBdXRoID0gX190b0VTTShyZXF1aXJlKFwiQG9jdG9raXQvYXV0aC1vYXV0aC1hcHBcIikpO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ2V0LWFwcC1hdXRoZW50aWNhdGlvbi5qc1xudmFyIGltcG9ydF91bml2ZXJzYWxfZ2l0aHViX2FwcF9qd3QgPSByZXF1aXJlKFwidW5pdmVyc2FsLWdpdGh1Yi1hcHAtand0XCIpO1xuYXN5bmMgZnVuY3Rpb24gZ2V0QXBwQXV0aGVudGljYXRpb24oe1xuICBhcHBJZCxcbiAgcHJpdmF0ZUtleSxcbiAgdGltZURpZmZlcmVuY2Vcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcHBBdXRoZW50aWNhdGlvbiA9IGF3YWl0ICgwLCBpbXBvcnRfdW5pdmVyc2FsX2dpdGh1Yl9hcHBfand0LmdpdGh1YkFwcEp3dCkoe1xuICAgICAgaWQ6ICthcHBJZCxcbiAgICAgIHByaXZhdGVLZXksXG4gICAgICBub3c6IHRpbWVEaWZmZXJlbmNlICYmIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDFlMykgKyB0aW1lRGlmZmVyZW5jZVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcImFwcFwiLFxuICAgICAgdG9rZW46IGFwcEF1dGhlbnRpY2F0aW9uLnRva2VuLFxuICAgICAgYXBwSWQ6IGFwcEF1dGhlbnRpY2F0aW9uLmFwcElkLFxuICAgICAgZXhwaXJlc0F0OiBuZXcgRGF0ZShhcHBBdXRoZW50aWNhdGlvbi5leHBpcmF0aW9uICogMWUzKS50b0lTT1N0cmluZygpXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAocHJpdmF0ZUtleSA9PT0gXCItLS0tLUJFR0lOIFJTQSBQUklWQVRFIEtFWS0tLS0tXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGUgJ3ByaXZhdGVLZXlgIG9wdGlvbiBjb250YWlucyBvbmx5IHRoZSBmaXJzdCBsaW5lICctLS0tLUJFR0lOIFJTQSBQUklWQVRFIEtFWS0tLS0tJy4gSWYgeW91IGFyZSBzZXR0aW5nIGl0IHVzaW5nIGEgYC5lbnZgIGZpbGUsIG1ha2Ugc3VyZSBpdCBpcyBzZXQgb24gYSBzaW5nbGUgbGluZSB3aXRoIG5ld2xpbmVzIHJlcGxhY2VkIGJ5ICdcXG4nXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwa2cvZGlzdC1zcmMvY2FjaGUuanNcbnZhciBpbXBvcnRfbHJ1X2NhY2hlID0gcmVxdWlyZShcImxydS1jYWNoZVwiKTtcbmZ1bmN0aW9uIGdldENhY2hlKCkge1xuICByZXR1cm4gbmV3IGltcG9ydF9scnVfY2FjaGUuTFJVQ2FjaGUoe1xuICAgIC8vIGNhY2hlIG1heC4gMTUwMDAgdG9rZW5zLCB0aGF0IHdpbGwgdXNlIGxlc3MgdGhhbiAxMG1iIG1lbW9yeVxuICAgIG1heDogMTVlMyxcbiAgICAvLyBDYWNoZSBmb3IgMSBtaW51dGUgbGVzcyB0aGFuIEdpdEh1YiBleHBpcnlcbiAgICB0dGw6IDFlMyAqIDYwICogNTlcbiAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBnZXQoY2FjaGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgY2FjaGVLZXkgPSBvcHRpb25zVG9DYWNoZUtleShvcHRpb25zKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgW1xuICAgIHRva2VuLFxuICAgIGNyZWF0ZWRBdCxcbiAgICBleHBpcmVzQXQsXG4gICAgcmVwb3NpdG9yeVNlbGVjdGlvbixcbiAgICBwZXJtaXNzaW9uc1N0cmluZyxcbiAgICBzaW5nbGVGaWxlTmFtZVxuICBdID0gcmVzdWx0LnNwbGl0KFwifFwiKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBvcHRpb25zLnBlcm1pc3Npb25zIHx8IHBlcm1pc3Npb25zU3RyaW5nLnNwbGl0KC8sLykucmVkdWNlKChwZXJtaXNzaW9uczIsIHN0cmluZykgPT4ge1xuICAgIGlmICgvISQvLnRlc3Qoc3RyaW5nKSkge1xuICAgICAgcGVybWlzc2lvbnMyW3N0cmluZy5zbGljZSgwLCAtMSldID0gXCJ3cml0ZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwZXJtaXNzaW9uczJbc3RyaW5nXSA9IFwicmVhZFwiO1xuICAgIH1cbiAgICByZXR1cm4gcGVybWlzc2lvbnMyO1xuICB9LCB7fSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW4sXG4gICAgY3JlYXRlZEF0LFxuICAgIGV4cGlyZXNBdCxcbiAgICBwZXJtaXNzaW9ucyxcbiAgICByZXBvc2l0b3J5SWRzOiBvcHRpb25zLnJlcG9zaXRvcnlJZHMsXG4gICAgcmVwb3NpdG9yeU5hbWVzOiBvcHRpb25zLnJlcG9zaXRvcnlOYW1lcyxcbiAgICBzaW5nbGVGaWxlTmFtZSxcbiAgICByZXBvc2l0b3J5U2VsZWN0aW9uXG4gIH07XG59XG5hc3luYyBmdW5jdGlvbiBzZXQoY2FjaGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgY29uc3Qga2V5ID0gb3B0aW9uc1RvQ2FjaGVLZXkob3B0aW9ucyk7XG4gIGNvbnN0IHBlcm1pc3Npb25zU3RyaW5nID0gb3B0aW9ucy5wZXJtaXNzaW9ucyA/IFwiXCIgOiBPYmplY3Qua2V5cyhkYXRhLnBlcm1pc3Npb25zKS5tYXAoXG4gICAgKG5hbWUpID0+IGAke25hbWV9JHtkYXRhLnBlcm1pc3Npb25zW25hbWVdID09PSBcIndyaXRlXCIgPyBcIiFcIiA6IFwiXCJ9YFxuICApLmpvaW4oXCIsXCIpO1xuICBjb25zdCB2YWx1ZSA9IFtcbiAgICBkYXRhLnRva2VuLFxuICAgIGRhdGEuY3JlYXRlZEF0LFxuICAgIGRhdGEuZXhwaXJlc0F0LFxuICAgIGRhdGEucmVwb3NpdG9yeVNlbGVjdGlvbixcbiAgICBwZXJtaXNzaW9uc1N0cmluZyxcbiAgICBkYXRhLnNpbmdsZUZpbGVOYW1lXG4gIF0uam9pbihcInxcIik7XG4gIGF3YWl0IGNhY2hlLnNldChrZXksIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIG9wdGlvbnNUb0NhY2hlS2V5KHtcbiAgaW5zdGFsbGF0aW9uSWQsXG4gIHBlcm1pc3Npb25zID0ge30sXG4gIHJlcG9zaXRvcnlJZHMgPSBbXSxcbiAgcmVwb3NpdG9yeU5hbWVzID0gW11cbn0pIHtcbiAgY29uc3QgcGVybWlzc2lvbnNTdHJpbmcgPSBPYmplY3Qua2V5cyhwZXJtaXNzaW9ucykuc29ydCgpLm1hcCgobmFtZSkgPT4gcGVybWlzc2lvbnNbbmFtZV0gPT09IFwicmVhZFwiID8gbmFtZSA6IGAke25hbWV9IWApLmpvaW4oXCIsXCIpO1xuICBjb25zdCByZXBvc2l0b3J5SWRzU3RyaW5nID0gcmVwb3NpdG9yeUlkcy5zb3J0KCkuam9pbihcIixcIik7XG4gIGNvbnN0IHJlcG9zaXRvcnlOYW1lc1N0cmluZyA9IHJlcG9zaXRvcnlOYW1lcy5qb2luKFwiLFwiKTtcbiAgcmV0dXJuIFtcbiAgICBpbnN0YWxsYXRpb25JZCxcbiAgICByZXBvc2l0b3J5SWRzU3RyaW5nLFxuICAgIHJlcG9zaXRvcnlOYW1lc1N0cmluZyxcbiAgICBwZXJtaXNzaW9uc1N0cmluZ1xuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKFwifFwiKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3RvLXRva2VuLWF1dGhlbnRpY2F0aW9uLmpzXG5mdW5jdGlvbiB0b1Rva2VuQXV0aGVudGljYXRpb24oe1xuICBpbnN0YWxsYXRpb25JZCxcbiAgdG9rZW4sXG4gIGNyZWF0ZWRBdCxcbiAgZXhwaXJlc0F0LFxuICByZXBvc2l0b3J5U2VsZWN0aW9uLFxuICBwZXJtaXNzaW9ucyxcbiAgcmVwb3NpdG9yeUlkcyxcbiAgcmVwb3NpdG9yeU5hbWVzLFxuICBzaW5nbGVGaWxlTmFtZVxufSkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICB7XG4gICAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgICB0b2tlblR5cGU6IFwiaW5zdGFsbGF0aW9uXCIsXG4gICAgICB0b2tlbixcbiAgICAgIGluc3RhbGxhdGlvbklkLFxuICAgICAgcGVybWlzc2lvbnMsXG4gICAgICBjcmVhdGVkQXQsXG4gICAgICBleHBpcmVzQXQsXG4gICAgICByZXBvc2l0b3J5U2VsZWN0aW9uXG4gICAgfSxcbiAgICByZXBvc2l0b3J5SWRzID8geyByZXBvc2l0b3J5SWRzIH0gOiBudWxsLFxuICAgIHJlcG9zaXRvcnlOYW1lcyA/IHsgcmVwb3NpdG9yeU5hbWVzIH0gOiBudWxsLFxuICAgIHNpbmdsZUZpbGVOYW1lID8geyBzaW5nbGVGaWxlTmFtZSB9IDogbnVsbFxuICApO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZ2V0LWluc3RhbGxhdGlvbi1hdXRoZW50aWNhdGlvbi5qc1xuYXN5bmMgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uQXV0aGVudGljYXRpb24oc3RhdGUsIG9wdGlvbnMsIGN1c3RvbVJlcXVlc3QpIHtcbiAgY29uc3QgaW5zdGFsbGF0aW9uSWQgPSBOdW1iZXIob3B0aW9ucy5pbnN0YWxsYXRpb25JZCB8fCBzdGF0ZS5pbnN0YWxsYXRpb25JZCk7XG4gIGlmICghaW5zdGFsbGF0aW9uSWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIltAb2N0b2tpdC9hdXRoLWFwcF0gaW5zdGFsbGF0aW9uSWQgb3B0aW9uIGlzIHJlcXVpcmVkIGZvciBpbnN0YWxsYXRpb24gYXV0aGVudGljYXRpb24uXCJcbiAgICApO1xuICB9XG4gIGlmIChvcHRpb25zLmZhY3RvcnkpIHtcbiAgICBjb25zdCB7IHR5cGUsIGZhY3RvcnksIG9hdXRoQXBwLCAuLi5mYWN0b3J5QXV0aE9wdGlvbnMgfSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgcmV0dXJuIGZhY3RvcnkoZmFjdG9yeUF1dGhPcHRpb25zKTtcbiAgfVxuICBjb25zdCBvcHRpb25zV2l0aEluc3RhbGxhdGlvblRva2VuRnJvbVN0YXRlID0gT2JqZWN0LmFzc2lnbihcbiAgICB7IGluc3RhbGxhdGlvbklkIH0sXG4gICAgb3B0aW9uc1xuICApO1xuICBpZiAoIW9wdGlvbnMucmVmcmVzaCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldChcbiAgICAgIHN0YXRlLmNhY2hlLFxuICAgICAgb3B0aW9uc1dpdGhJbnN0YWxsYXRpb25Ub2tlbkZyb21TdGF0ZVxuICAgICk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0b2tlbjogdG9rZW4yLFxuICAgICAgICBjcmVhdGVkQXQ6IGNyZWF0ZWRBdDIsXG4gICAgICAgIGV4cGlyZXNBdDogZXhwaXJlc0F0MixcbiAgICAgICAgcGVybWlzc2lvbnM6IHBlcm1pc3Npb25zMixcbiAgICAgICAgcmVwb3NpdG9yeUlkczogcmVwb3NpdG9yeUlkczIsXG4gICAgICAgIHJlcG9zaXRvcnlOYW1lczogcmVwb3NpdG9yeU5hbWVzMixcbiAgICAgICAgc2luZ2xlRmlsZU5hbWU6IHNpbmdsZUZpbGVOYW1lMixcbiAgICAgICAgcmVwb3NpdG9yeVNlbGVjdGlvbjogcmVwb3NpdG9yeVNlbGVjdGlvbjJcbiAgICAgIH0gPSByZXN1bHQ7XG4gICAgICByZXR1cm4gdG9Ub2tlbkF1dGhlbnRpY2F0aW9uKHtcbiAgICAgICAgaW5zdGFsbGF0aW9uSWQsXG4gICAgICAgIHRva2VuOiB0b2tlbjIsXG4gICAgICAgIGNyZWF0ZWRBdDogY3JlYXRlZEF0MixcbiAgICAgICAgZXhwaXJlc0F0OiBleHBpcmVzQXQyLFxuICAgICAgICBwZXJtaXNzaW9uczogcGVybWlzc2lvbnMyLFxuICAgICAgICByZXBvc2l0b3J5U2VsZWN0aW9uOiByZXBvc2l0b3J5U2VsZWN0aW9uMixcbiAgICAgICAgcmVwb3NpdG9yeUlkczogcmVwb3NpdG9yeUlkczIsXG4gICAgICAgIHJlcG9zaXRvcnlOYW1lczogcmVwb3NpdG9yeU5hbWVzMixcbiAgICAgICAgc2luZ2xlRmlsZU5hbWU6IHNpbmdsZUZpbGVOYW1lMlxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGFwcEF1dGhlbnRpY2F0aW9uID0gYXdhaXQgZ2V0QXBwQXV0aGVudGljYXRpb24oc3RhdGUpO1xuICBjb25zdCByZXF1ZXN0ID0gY3VzdG9tUmVxdWVzdCB8fCBzdGF0ZS5yZXF1ZXN0O1xuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgdG9rZW4sXG4gICAgICBleHBpcmVzX2F0OiBleHBpcmVzQXQsXG4gICAgICByZXBvc2l0b3JpZXMsXG4gICAgICBwZXJtaXNzaW9uczogcGVybWlzc2lvbnNPcHRpb25hbCxcbiAgICAgIHJlcG9zaXRvcnlfc2VsZWN0aW9uOiByZXBvc2l0b3J5U2VsZWN0aW9uT3B0aW9uYWwsXG4gICAgICBzaW5nbGVfZmlsZTogc2luZ2xlRmlsZU5hbWVcbiAgICB9XG4gIH0gPSBhd2FpdCByZXF1ZXN0KFwiUE9TVCAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vYWNjZXNzX3Rva2Vuc1wiLCB7XG4gICAgaW5zdGFsbGF0aW9uX2lkOiBpbnN0YWxsYXRpb25JZCxcbiAgICByZXBvc2l0b3J5X2lkczogb3B0aW9ucy5yZXBvc2l0b3J5SWRzLFxuICAgIHJlcG9zaXRvcmllczogb3B0aW9ucy5yZXBvc2l0b3J5TmFtZXMsXG4gICAgcGVybWlzc2lvbnM6IG9wdGlvbnMucGVybWlzc2lvbnMsXG4gICAgbWVkaWFUeXBlOiB7XG4gICAgICBwcmV2aWV3czogW1wibWFjaGluZS1tYW5cIl1cbiAgICB9LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBiZWFyZXIgJHthcHBBdXRoZW50aWNhdGlvbi50b2tlbn1gXG4gICAgfVxuICB9KTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBwZXJtaXNzaW9uc09wdGlvbmFsIHx8IHt9O1xuICBjb25zdCByZXBvc2l0b3J5U2VsZWN0aW9uID0gcmVwb3NpdG9yeVNlbGVjdGlvbk9wdGlvbmFsIHx8IFwiYWxsXCI7XG4gIGNvbnN0IHJlcG9zaXRvcnlJZHMgPSByZXBvc2l0b3JpZXMgPyByZXBvc2l0b3JpZXMubWFwKChyKSA9PiByLmlkKSA6IHZvaWQgMDtcbiAgY29uc3QgcmVwb3NpdG9yeU5hbWVzID0gcmVwb3NpdG9yaWVzID8gcmVwb3NpdG9yaWVzLm1hcCgocmVwbykgPT4gcmVwby5uYW1lKSA6IHZvaWQgMDtcbiAgY29uc3QgY3JlYXRlZEF0ID0gKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xuICBhd2FpdCBzZXQoc3RhdGUuY2FjaGUsIG9wdGlvbnNXaXRoSW5zdGFsbGF0aW9uVG9rZW5Gcm9tU3RhdGUsIHtcbiAgICB0b2tlbixcbiAgICBjcmVhdGVkQXQsXG4gICAgZXhwaXJlc0F0LFxuICAgIHJlcG9zaXRvcnlTZWxlY3Rpb24sXG4gICAgcGVybWlzc2lvbnMsXG4gICAgcmVwb3NpdG9yeUlkcyxcbiAgICByZXBvc2l0b3J5TmFtZXMsXG4gICAgc2luZ2xlRmlsZU5hbWVcbiAgfSk7XG4gIHJldHVybiB0b1Rva2VuQXV0aGVudGljYXRpb24oe1xuICAgIGluc3RhbGxhdGlvbklkLFxuICAgIHRva2VuLFxuICAgIGNyZWF0ZWRBdCxcbiAgICBleHBpcmVzQXQsXG4gICAgcmVwb3NpdG9yeVNlbGVjdGlvbixcbiAgICBwZXJtaXNzaW9ucyxcbiAgICByZXBvc2l0b3J5SWRzLFxuICAgIHJlcG9zaXRvcnlOYW1lcyxcbiAgICBzaW5nbGVGaWxlTmFtZVxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2F1dGguanNcbmFzeW5jIGZ1bmN0aW9uIGF1dGgoc3RhdGUsIGF1dGhPcHRpb25zKSB7XG4gIHN3aXRjaCAoYXV0aE9wdGlvbnMudHlwZSkge1xuICAgIGNhc2UgXCJhcHBcIjpcbiAgICAgIHJldHVybiBnZXRBcHBBdXRoZW50aWNhdGlvbihzdGF0ZSk7XG4gICAgY2FzZSBcIm9hdXRoXCI6XG4gICAgICBzdGF0ZS5sb2cud2FybihcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBgbG9nLndhcm4oKWAgZXhwZWN0cyBzdHJpbmdcbiAgICAgICAgbmV3IGltcG9ydF9kZXByZWNhdGlvbi5EZXByZWNhdGlvbihcbiAgICAgICAgICBgW0BvY3Rva2l0L2F1dGgtYXBwXSB7dHlwZTogXCJvYXV0aFwifSBpcyBkZXByZWNhdGVkLiBVc2Uge3R5cGU6IFwib2F1dGgtYXBwXCJ9IGluc3RlYWRgXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgY2FzZSBcIm9hdXRoLWFwcFwiOlxuICAgICAgcmV0dXJuIHN0YXRlLm9hdXRoQXBwKHsgdHlwZTogXCJvYXV0aC1hcHBcIiB9KTtcbiAgICBjYXNlIFwiaW5zdGFsbGF0aW9uXCI6XG4gICAgICBhdXRoT3B0aW9ucztcbiAgICAgIHJldHVybiBnZXRJbnN0YWxsYXRpb25BdXRoZW50aWNhdGlvbihzdGF0ZSwge1xuICAgICAgICAuLi5hdXRoT3B0aW9ucyxcbiAgICAgICAgdHlwZTogXCJpbnN0YWxsYXRpb25cIlxuICAgICAgfSk7XG4gICAgY2FzZSBcIm9hdXRoLXVzZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZS5vYXV0aEFwcChhdXRoT3B0aW9ucyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhdXRoIHR5cGU6ICR7YXV0aE9wdGlvbnMudHlwZX1gKTtcbiAgfVxufVxuXG4vLyBwa2cvZGlzdC1zcmMvaG9vay5qc1xudmFyIGltcG9ydF9hdXRoX29hdXRoX3VzZXIgPSByZXF1aXJlKFwiQG9jdG9raXQvYXV0aC1vYXV0aC11c2VyXCIpO1xudmFyIGltcG9ydF9yZXF1ZXN0X2Vycm9yID0gcmVxdWlyZShcIkBvY3Rva2l0L3JlcXVlc3QtZXJyb3JcIik7XG5cbi8vIHBrZy9kaXN0LXNyYy9yZXF1aXJlcy1hcHAtYXV0aC5qc1xudmFyIFBBVEhTID0gW1xuICBcIi9hcHBcIixcbiAgXCIvYXBwL2hvb2svY29uZmlnXCIsXG4gIFwiL2FwcC9ob29rL2RlbGl2ZXJpZXNcIixcbiAgXCIvYXBwL2hvb2svZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9XCIsXG4gIFwiL2FwcC9ob29rL2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfS9hdHRlbXB0c1wiLFxuICBcIi9hcHAvaW5zdGFsbGF0aW9uc1wiLFxuICBcIi9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfVwiLFxuICBcIi9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9hY2Nlc3NfdG9rZW5zXCIsXG4gIFwiL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3N1c3BlbmRlZFwiLFxuICBcIi9tYXJrZXRwbGFjZV9saXN0aW5nL2FjY291bnRzL3thY2NvdW50X2lkfVwiLFxuICBcIi9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5cIixcbiAgXCIvbWFya2V0cGxhY2VfbGlzdGluZy9wbGFuc1wiLFxuICBcIi9tYXJrZXRwbGFjZV9saXN0aW5nL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiLFxuICBcIi9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvYWNjb3VudHMve2FjY291bnRfaWR9XCIsXG4gIFwiL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFuXCIsXG4gIFwiL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFuc1wiLFxuICBcIi9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCIsXG4gIFwiL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uXCIsXG4gIFwiL3JlcG9zL3tvd25lcn0ve3JlcG99L2luc3RhbGxhdGlvblwiLFxuICBcIi91c2Vycy97dXNlcm5hbWV9L2luc3RhbGxhdGlvblwiXG5dO1xuZnVuY3Rpb24gcm91dGVNYXRjaGVyKHBhdGhzKSB7XG4gIGNvbnN0IHJlZ2V4ZXMgPSBwYXRocy5tYXAoXG4gICAgKHApID0+IHAuc3BsaXQoXCIvXCIpLm1hcCgoYykgPT4gYy5zdGFydHNXaXRoKFwie1wiKSA/IFwiKD86Lis/KVwiIDogYykuam9pbihcIi9cIilcbiAgKTtcbiAgY29uc3QgcmVnZXggPSBgXig/OiR7cmVnZXhlcy5tYXAoKHIpID0+IGAoPzoke3J9KWApLmpvaW4oXCJ8XCIpfSkkYDtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIFwiaVwiKTtcbn1cbnZhciBSRUdFWCA9IHJvdXRlTWF0Y2hlcihQQVRIUyk7XG5mdW5jdGlvbiByZXF1aXJlc0FwcEF1dGgodXJsKSB7XG4gIHJldHVybiAhIXVybCAmJiBSRUdFWC50ZXN0KHVybC5zcGxpdChcIj9cIilbMF0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaG9vay5qc1xudmFyIEZJVkVfU0VDT05EU19JTl9NUyA9IDUgKiAxZTM7XG5mdW5jdGlvbiBpc05vdFRpbWVTa2V3RXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuICEoZXJyb3IubWVzc2FnZS5tYXRjaChcbiAgICAvJ0V4cGlyYXRpb24gdGltZScgY2xhaW0gXFwoJ2V4cCdcXCkgbXVzdCBiZSBhIG51bWVyaWMgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBmdXR1cmUgdGltZSBhdCB3aGljaCB0aGUgYXNzZXJ0aW9uIGV4cGlyZXMvXG4gICkgfHwgZXJyb3IubWVzc2FnZS5tYXRjaChcbiAgICAvJ0lzc3VlZCBhdCcgY2xhaW0gXFwoJ2lhdCdcXCkgbXVzdCBiZSBhbiBJbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgdGltZSB0aGF0IHRoZSBhc3NlcnRpb24gd2FzIGlzc3VlZC9cbiAgKSk7XG59XG5hc3luYyBmdW5jdGlvbiBob29rKHN0YXRlLCByZXF1ZXN0LCByb3V0ZSwgcGFyYW1ldGVycykge1xuICBjb25zdCBlbmRwb2ludCA9IHJlcXVlc3QuZW5kcG9pbnQubWVyZ2Uocm91dGUsIHBhcmFtZXRlcnMpO1xuICBjb25zdCB1cmwgPSBlbmRwb2ludC51cmw7XG4gIGlmICgvXFwvbG9naW5cXC9vYXV0aFxcL2FjY2Vzc190b2tlbiQvLnRlc3QodXJsKSkge1xuICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50KTtcbiAgfVxuICBpZiAocmVxdWlyZXNBcHBBdXRoKHVybC5yZXBsYWNlKHJlcXVlc3QuZW5kcG9pbnQuREVGQVVMVFMuYmFzZVVybCwgXCJcIikpKSB7XG4gICAgY29uc3QgeyB0b2tlbjogdG9rZW4yIH0gPSBhd2FpdCBnZXRBcHBBdXRoZW50aWNhdGlvbihzdGF0ZSk7XG4gICAgZW5kcG9pbnQuaGVhZGVycy5hdXRob3JpemF0aW9uID0gYGJlYXJlciAke3Rva2VuMn1gO1xuICAgIGxldCByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KGVuZHBvaW50KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGlzTm90VGltZVNrZXdFcnJvcihlcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVycm9yLnJlc3BvbnNlLmhlYWRlcnMuZGF0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmZsb29yKFxuICAgICAgICAoRGF0ZS5wYXJzZShlcnJvci5yZXNwb25zZS5oZWFkZXJzLmRhdGUpIC0gRGF0ZS5wYXJzZSgoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLnRvU3RyaW5nKCkpKSAvIDFlM1xuICAgICAgKTtcbiAgICAgIHN0YXRlLmxvZy53YXJuKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgc3RhdGUubG9nLndhcm4oXG4gICAgICAgIGBbQG9jdG9raXQvYXV0aC1hcHBdIEdpdEh1YiBBUEkgdGltZSBhbmQgc3lzdGVtIHRpbWUgYXJlIGRpZmZlcmVudCBieSAke2RpZmZ9IHNlY29uZHMuIFJldHJ5aW5nIHJlcXVlc3Qgd2l0aCB0aGUgZGlmZmVyZW5jZSBhY2NvdW50ZWQgZm9yLmBcbiAgICAgICk7XG4gICAgICBjb25zdCB7IHRva2VuOiB0b2tlbjMgfSA9IGF3YWl0IGdldEFwcEF1dGhlbnRpY2F0aW9uKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRpbWVEaWZmZXJlbmNlOiBkaWZmXG4gICAgICB9KTtcbiAgICAgIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGBiZWFyZXIgJHt0b2tlbjN9YDtcbiAgICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gIGlmICgoMCwgaW1wb3J0X2F1dGhfb2F1dGhfdXNlci5yZXF1aXJlc0Jhc2ljQXV0aCkodXJsKSkge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uID0gYXdhaXQgc3RhdGUub2F1dGhBcHAoeyB0eXBlOiBcIm9hdXRoLWFwcFwiIH0pO1xuICAgIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGF1dGhlbnRpY2F0aW9uLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCk7XG4gIH1cbiAgY29uc3QgeyB0b2tlbiwgY3JlYXRlZEF0IH0gPSBhd2FpdCBnZXRJbnN0YWxsYXRpb25BdXRoZW50aWNhdGlvbihcbiAgICBzdGF0ZSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRCRFxuICAgIHt9LFxuICAgIHJlcXVlc3RcbiAgKTtcbiAgZW5kcG9pbnQuaGVhZGVycy5hdXRob3JpemF0aW9uID0gYHRva2VuICR7dG9rZW59YDtcbiAgcmV0dXJuIHNlbmRSZXF1ZXN0V2l0aFJldHJpZXMoXG4gICAgc3RhdGUsXG4gICAgcmVxdWVzdCxcbiAgICBlbmRwb2ludCxcbiAgICBjcmVhdGVkQXRcbiAgKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHNlbmRSZXF1ZXN0V2l0aFJldHJpZXMoc3RhdGUsIHJlcXVlc3QsIG9wdGlvbnMsIGNyZWF0ZWRBdCwgcmV0cmllcyA9IDApIHtcbiAgY29uc3QgdGltZVNpbmNlVG9rZW5DcmVhdGlvbkluTXMgPSArLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkgLSArbmV3IERhdGUoY3JlYXRlZEF0KTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChvcHRpb25zKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDEpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBpZiAodGltZVNpbmNlVG9rZW5DcmVhdGlvbkluTXMgPj0gRklWRV9TRUNPTkRTX0lOX01TKSB7XG4gICAgICBpZiAocmV0cmllcyA+IDApIHtcbiAgICAgICAgZXJyb3IubWVzc2FnZSA9IGBBZnRlciAke3JldHJpZXN9IHJldHJpZXMgd2l0aGluICR7dGltZVNpbmNlVG9rZW5DcmVhdGlvbkluTXMgLyAxZTN9cyBvZiBjcmVhdGluZyB0aGUgaW5zdGFsbGF0aW9uIGFjY2VzcyB0b2tlbiwgdGhlIHJlc3BvbnNlIHJlbWFpbnMgNDAxLiBBdCB0aGlzIHBvaW50LCB0aGUgY2F1c2UgbWF5IGJlIGFuIGF1dGhlbnRpY2F0aW9uIHByb2JsZW0gb3IgYSBzeXN0ZW0gb3V0YWdlLiBQbGVhc2UgY2hlY2sgaHR0cHM6Ly93d3cuZ2l0aHVic3RhdHVzLmNvbSBmb3Igc3RhdHVzIGluZm9ybWF0aW9uYDtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICArK3JldHJpZXM7XG4gICAgY29uc3QgYXdhaXRUaW1lID0gcmV0cmllcyAqIDFlMztcbiAgICBzdGF0ZS5sb2cud2FybihcbiAgICAgIGBbQG9jdG9raXQvYXV0aC1hcHBdIFJldHJ5aW5nIGFmdGVyIDQwMSByZXNwb25zZSB0byBhY2NvdW50IGZvciB0b2tlbiByZXBsaWNhdGlvbiBkZWxheSAocmV0cnk6ICR7cmV0cmllc30sIHdhaXQ6ICR7YXdhaXRUaW1lIC8gMWUzfXMpYFxuICAgICk7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgYXdhaXRUaW1lKSk7XG4gICAgcmV0dXJuIHNlbmRSZXF1ZXN0V2l0aFJldHJpZXMoc3RhdGUsIHJlcXVlc3QsIG9wdGlvbnMsIGNyZWF0ZWRBdCwgcmV0cmllcyk7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3ZlcnNpb24uanNcbnZhciBWRVJTSU9OID0gXCI2LjAuMFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBpbXBvcnRfYXV0aF9vYXV0aF91c2VyMiA9IHJlcXVpcmUoXCJAb2N0b2tpdC9hdXRoLW9hdXRoLXVzZXJcIik7XG5mdW5jdGlvbiBjcmVhdGVBcHBBdXRoKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLmFwcElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW0BvY3Rva2l0L2F1dGgtYXBwXSBhcHBJZCBvcHRpb24gaXMgcmVxdWlyZWRcIik7XG4gIH1cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoK29wdGlvbnMuYXBwSWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJbQG9jdG9raXQvYXV0aC1hcHBdIGFwcElkIG9wdGlvbiBtdXN0IGJlIGEgbnVtYmVyIG9yIG51bWVyaWMgc3RyaW5nXCJcbiAgICApO1xuICB9XG4gIGlmICghb3B0aW9ucy5wcml2YXRlS2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW0BvY3Rva2l0L2F1dGgtYXBwXSBwcml2YXRlS2V5IG9wdGlvbiBpcyByZXF1aXJlZFwiKTtcbiAgfVxuICBpZiAoXCJpbnN0YWxsYXRpb25JZFwiIGluIG9wdGlvbnMgJiYgIW9wdGlvbnMuaW5zdGFsbGF0aW9uSWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIltAb2N0b2tpdC9hdXRoLWFwcF0gaW5zdGFsbGF0aW9uSWQgaXMgc2V0IHRvIGEgZmFsc3kgdmFsdWVcIlxuICAgICk7XG4gIH1cbiAgY29uc3QgbG9nID0gT2JqZWN0LmFzc2lnbihcbiAgICB7XG4gICAgICB3YXJuOiBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKVxuICAgIH0sXG4gICAgb3B0aW9ucy5sb2dcbiAgKTtcbiAgY29uc3QgcmVxdWVzdCA9IG9wdGlvbnMucmVxdWVzdCB8fCBpbXBvcnRfcmVxdWVzdC5yZXF1ZXN0LmRlZmF1bHRzKHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcInVzZXItYWdlbnRcIjogYG9jdG9raXQtYXV0aC1hcHAuanMvJHtWRVJTSU9OfSAkeygwLCBpbXBvcnRfdW5pdmVyc2FsX3VzZXJfYWdlbnQuZ2V0VXNlckFnZW50KSgpfWBcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgcmVxdWVzdCxcbiAgICAgIGNhY2hlOiBnZXRDYWNoZSgpXG4gICAgfSxcbiAgICBvcHRpb25zLFxuICAgIG9wdGlvbnMuaW5zdGFsbGF0aW9uSWQgPyB7IGluc3RhbGxhdGlvbklkOiBOdW1iZXIob3B0aW9ucy5pbnN0YWxsYXRpb25JZCkgfSA6IHt9LFxuICAgIHtcbiAgICAgIGxvZyxcbiAgICAgIG9hdXRoQXBwOiAoMCwgaW1wb3J0X2F1dGhfb2F1dGhfYXBwLmNyZWF0ZU9BdXRoQXBwQXV0aCkoe1xuICAgICAgICBjbGllbnRUeXBlOiBcImdpdGh1Yi1hcHBcIixcbiAgICAgICAgY2xpZW50SWQ6IG9wdGlvbnMuY2xpZW50SWQgfHwgXCJcIixcbiAgICAgICAgY2xpZW50U2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldCB8fCBcIlwiLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9KVxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXV0aC5iaW5kKG51bGwsIHN0YXRlKSwge1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCBzdGF0ZSlcbiAgfSk7XG59XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlQXBwQXV0aCxcbiAgY3JlYXRlT0F1dGhVc2VyQXV0aFxufSk7XG4iLCIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9hdXRoLmpzXG5pbXBvcnQgYnRvYSBmcm9tIFwiYnRvYS1saXRlXCI7XG5pbXBvcnQgeyBjcmVhdGVPQXV0aFVzZXJBdXRoIH0gZnJvbSBcIkBvY3Rva2l0L2F1dGgtb2F1dGgtdXNlclwiO1xuYXN5bmMgZnVuY3Rpb24gYXV0aChzdGF0ZSwgYXV0aE9wdGlvbnMpIHtcbiAgaWYgKGF1dGhPcHRpb25zLnR5cGUgPT09IFwib2F1dGgtYXBwXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJvYXV0aC1hcHBcIixcbiAgICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICAgIGNsaWVudFNlY3JldDogc3RhdGUuY2xpZW50U2VjcmV0LFxuICAgICAgY2xpZW50VHlwZTogc3RhdGUuY2xpZW50VHlwZSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYGJhc2ljICR7YnRvYShcbiAgICAgICAgICBgJHtzdGF0ZS5jbGllbnRJZH06JHtzdGF0ZS5jbGllbnRTZWNyZXR9YFxuICAgICAgICApfWBcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGlmIChcImZhY3RvcnlcIiBpbiBhdXRoT3B0aW9ucykge1xuICAgIGNvbnN0IHsgdHlwZSwgLi4ub3B0aW9ucyB9ID0ge1xuICAgICAgLi4uYXV0aE9wdGlvbnMsXG4gICAgICAuLi5zdGF0ZVxuICAgIH07XG4gICAgcmV0dXJuIGF1dGhPcHRpb25zLmZhY3Rvcnkob3B0aW9ucyk7XG4gIH1cbiAgY29uc3QgY29tbW9uID0ge1xuICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICBjbGllbnRTZWNyZXQ6IHN0YXRlLmNsaWVudFNlY3JldCxcbiAgICByZXF1ZXN0OiBzdGF0ZS5yZXF1ZXN0LFxuICAgIC4uLmF1dGhPcHRpb25zXG4gIH07XG4gIGNvbnN0IHVzZXJBdXRoID0gc3RhdGUuY2xpZW50VHlwZSA9PT0gXCJvYXV0aC1hcHBcIiA/IGF3YWl0IGNyZWF0ZU9BdXRoVXNlckF1dGgoe1xuICAgIC4uLmNvbW1vbixcbiAgICBjbGllbnRUeXBlOiBzdGF0ZS5jbGllbnRUeXBlXG4gIH0pIDogYXdhaXQgY3JlYXRlT0F1dGhVc2VyQXV0aCh7XG4gICAgLi4uY29tbW9uLFxuICAgIGNsaWVudFR5cGU6IHN0YXRlLmNsaWVudFR5cGVcbiAgfSk7XG4gIHJldHVybiB1c2VyQXV0aCgpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaG9vay5qc1xuaW1wb3J0IGJ0b2EyIGZyb20gXCJidG9hLWxpdGVcIjtcbmltcG9ydCB7IHJlcXVpcmVzQmFzaWNBdXRoIH0gZnJvbSBcIkBvY3Rva2l0L2F1dGgtb2F1dGgtdXNlclwiO1xuYXN5bmMgZnVuY3Rpb24gaG9vayhzdGF0ZSwgcmVxdWVzdDIsIHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gIGxldCBlbmRwb2ludCA9IHJlcXVlc3QyLmVuZHBvaW50Lm1lcmdlKFxuICAgIHJvdXRlLFxuICAgIHBhcmFtZXRlcnNcbiAgKTtcbiAgaWYgKC9cXC9sb2dpblxcLyhvYXV0aFxcL2FjY2Vzc190b2tlbnxkZXZpY2VcXC9jb2RlKSQvLnRlc3QoZW5kcG9pbnQudXJsKSkge1xuICAgIHJldHVybiByZXF1ZXN0MihlbmRwb2ludCk7XG4gIH1cbiAgaWYgKHN0YXRlLmNsaWVudFR5cGUgPT09IFwiZ2l0aHViLWFwcFwiICYmICFyZXF1aXJlc0Jhc2ljQXV0aChlbmRwb2ludC51cmwpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFtAb2N0b2tpdC9hdXRoLW9hdXRoLWFwcF0gR2l0SHViIEFwcHMgY2Fubm90IHVzZSB0aGVpciBjbGllbnQgSUQvc2VjcmV0IGZvciBiYXNpYyBhdXRoZW50aWNhdGlvbiBmb3IgZW5kcG9pbnRzIG90aGVyIHRoYW4gXCIvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9LyoqXCIuIFwiJHtlbmRwb2ludC5tZXRob2R9ICR7ZW5kcG9pbnQudXJsfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYFxuICAgICk7XG4gIH1cbiAgY29uc3QgY3JlZGVudGlhbHMgPSBidG9hMihgJHtzdGF0ZS5jbGllbnRJZH06JHtzdGF0ZS5jbGllbnRTZWNyZXR9YCk7XG4gIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGBiYXNpYyAke2NyZWRlbnRpYWxzfWA7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QyKGVuZHBvaW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDEpXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICBlcnJvci5tZXNzYWdlID0gYFtAb2N0b2tpdC9hdXRoLW9hdXRoLWFwcF0gXCIke2VuZHBvaW50Lm1ldGhvZH0gJHtlbmRwb2ludC51cmx9XCIgZG9lcyBub3Qgc3VwcG9ydCBjbGllbnRJZC9jbGllbnRTZWNyZXQgYmFzaWMgYXV0aGVudGljYXRpb24uYDtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjcuMC4wXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhVc2VyQXV0aCBhcyBjcmVhdGVPQXV0aFVzZXJBdXRoMiB9IGZyb20gXCJAb2N0b2tpdC9hdXRoLW9hdXRoLXVzZXJcIjtcbmZ1bmN0aW9uIGNyZWF0ZU9BdXRoQXBwQXV0aChvcHRpb25zKSB7XG4gIGNvbnN0IHN0YXRlID0gT2JqZWN0LmFzc2lnbihcbiAgICB7XG4gICAgICByZXF1ZXN0OiByZXF1ZXN0LmRlZmF1bHRzKHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwidXNlci1hZ2VudFwiOiBgb2N0b2tpdC1hdXRoLW9hdXRoLWFwcC5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YFxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGNsaWVudFR5cGU6IFwib2F1dGgtYXBwXCJcbiAgICB9LFxuICAgIG9wdGlvbnNcbiAgKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXV0aC5iaW5kKG51bGwsIHN0YXRlKSwge1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCBzdGF0ZSlcbiAgfSk7XG59XG5leHBvcnQge1xuICBjcmVhdGVPQXV0aEFwcEF1dGgsXG4gIGNyZWF0ZU9BdXRoVXNlckF1dGgyIGFzIGNyZWF0ZU9BdXRoVXNlckF1dGhcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuaW1wb3J0IHsgcmVxdWVzdCBhcyBvY3Rva2l0UmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9nZXQtb2F1dGgtYWNjZXNzLXRva2VuLmpzXG5pbXBvcnQgeyBjcmVhdGVEZXZpY2VDb2RlLCBleGNoYW5nZURldmljZUNvZGUgfSBmcm9tIFwiQG9jdG9raXQvb2F1dGgtbWV0aG9kc1wiO1xuYXN5bmMgZnVuY3Rpb24gZ2V0T0F1dGhBY2Nlc3NUb2tlbihzdGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBjYWNoZWRBdXRoZW50aWNhdGlvbiA9IGdldENhY2hlZEF1dGhlbnRpY2F0aW9uKHN0YXRlLCBvcHRpb25zLmF1dGgpO1xuICBpZiAoY2FjaGVkQXV0aGVudGljYXRpb24pXG4gICAgcmV0dXJuIGNhY2hlZEF1dGhlbnRpY2F0aW9uO1xuICBjb25zdCB7IGRhdGE6IHZlcmlmaWNhdGlvbiB9ID0gYXdhaXQgY3JlYXRlRGV2aWNlQ29kZSh7XG4gICAgY2xpZW50VHlwZTogc3RhdGUuY2xpZW50VHlwZSxcbiAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0IHx8IHN0YXRlLnJlcXVlc3QsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0aGUgZXh0cmEgY29kZSB0byBtYWtlIFRTIGhhcHB5IGlzIG5vdCB3b3J0aCBpdFxuICAgIHNjb3Blczogb3B0aW9ucy5hdXRoLnNjb3BlcyB8fCBzdGF0ZS5zY29wZXNcbiAgfSk7XG4gIGF3YWl0IHN0YXRlLm9uVmVyaWZpY2F0aW9uKHZlcmlmaWNhdGlvbik7XG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uID0gYXdhaXQgd2FpdEZvckFjY2Vzc1Rva2VuKFxuICAgIG9wdGlvbnMucmVxdWVzdCB8fCBzdGF0ZS5yZXF1ZXN0LFxuICAgIHN0YXRlLmNsaWVudElkLFxuICAgIHN0YXRlLmNsaWVudFR5cGUsXG4gICAgdmVyaWZpY2F0aW9uXG4gICk7XG4gIHN0YXRlLmF1dGhlbnRpY2F0aW9uID0gYXV0aGVudGljYXRpb247XG4gIHJldHVybiBhdXRoZW50aWNhdGlvbjtcbn1cbmZ1bmN0aW9uIGdldENhY2hlZEF1dGhlbnRpY2F0aW9uKHN0YXRlLCBhdXRoMikge1xuICBpZiAoYXV0aDIucmVmcmVzaCA9PT0gdHJ1ZSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmICghc3RhdGUuYXV0aGVudGljYXRpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoc3RhdGUuY2xpZW50VHlwZSA9PT0gXCJnaXRodWItYXBwXCIpIHtcbiAgICByZXR1cm4gc3RhdGUuYXV0aGVudGljYXRpb247XG4gIH1cbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSBzdGF0ZS5hdXRoZW50aWNhdGlvbjtcbiAgY29uc3QgbmV3U2NvcGUgPSAoXCJzY29wZXNcIiBpbiBhdXRoMiAmJiBhdXRoMi5zY29wZXMgfHwgc3RhdGUuc2NvcGVzKS5qb2luKFxuICAgIFwiIFwiXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IGF1dGhlbnRpY2F0aW9uLnNjb3Blcy5qb2luKFwiIFwiKTtcbiAgcmV0dXJuIG5ld1Njb3BlID09PSBjdXJyZW50U2NvcGUgPyBhdXRoZW50aWNhdGlvbiA6IGZhbHNlO1xufVxuYXN5bmMgZnVuY3Rpb24gd2FpdChzZWNvbmRzKSB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHNlY29uZHMgKiAxZTMpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JBY2Nlc3NUb2tlbihyZXF1ZXN0LCBjbGllbnRJZCwgY2xpZW50VHlwZSwgdmVyaWZpY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNsaWVudElkLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGNvZGU6IHZlcmlmaWNhdGlvbi5kZXZpY2VfY29kZVxuICAgIH07XG4gICAgY29uc3QgeyBhdXRoZW50aWNhdGlvbiB9ID0gY2xpZW50VHlwZSA9PT0gXCJvYXV0aC1hcHBcIiA/IGF3YWl0IGV4Y2hhbmdlRGV2aWNlQ29kZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY2xpZW50VHlwZTogXCJvYXV0aC1hcHBcIlxuICAgIH0pIDogYXdhaXQgZXhjaGFuZ2VEZXZpY2VDb2RlKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjbGllbnRUeXBlOiBcImdpdGh1Yi1hcHBcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgICB0b2tlblR5cGU6IFwib2F1dGhcIixcbiAgICAgIC4uLmF1dGhlbnRpY2F0aW9uXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoIWVycm9yLnJlc3BvbnNlKVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgY29uc3QgZXJyb3JUeXBlID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcjtcbiAgICBpZiAoZXJyb3JUeXBlID09PSBcImF1dGhvcml6YXRpb25fcGVuZGluZ1wiKSB7XG4gICAgICBhd2FpdCB3YWl0KHZlcmlmaWNhdGlvbi5pbnRlcnZhbCk7XG4gICAgICByZXR1cm4gd2FpdEZvckFjY2Vzc1Rva2VuKHJlcXVlc3QsIGNsaWVudElkLCBjbGllbnRUeXBlLCB2ZXJpZmljYXRpb24pO1xuICAgIH1cbiAgICBpZiAoZXJyb3JUeXBlID09PSBcInNsb3dfZG93blwiKSB7XG4gICAgICBhd2FpdCB3YWl0KHZlcmlmaWNhdGlvbi5pbnRlcnZhbCArIDUpO1xuICAgICAgcmV0dXJuIHdhaXRGb3JBY2Nlc3NUb2tlbihyZXF1ZXN0LCBjbGllbnRJZCwgY2xpZW50VHlwZSwgdmVyaWZpY2F0aW9uKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2F1dGguanNcbmFzeW5jIGZ1bmN0aW9uIGF1dGgoc3RhdGUsIGF1dGhPcHRpb25zKSB7XG4gIHJldHVybiBnZXRPQXV0aEFjY2Vzc1Rva2VuKHN0YXRlLCB7XG4gICAgYXV0aDogYXV0aE9wdGlvbnNcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9ob29rLmpzXG5hc3luYyBmdW5jdGlvbiBob29rKHN0YXRlLCByZXF1ZXN0LCByb3V0ZSwgcGFyYW1ldGVycykge1xuICBsZXQgZW5kcG9pbnQgPSByZXF1ZXN0LmVuZHBvaW50Lm1lcmdlKFxuICAgIHJvdXRlLFxuICAgIHBhcmFtZXRlcnNcbiAgKTtcbiAgaWYgKC9cXC9sb2dpblxcLyhvYXV0aFxcL2FjY2Vzc190b2tlbnxkZXZpY2VcXC9jb2RlKSQvLnRlc3QoZW5kcG9pbnQudXJsKSkge1xuICAgIHJldHVybiByZXF1ZXN0KGVuZHBvaW50KTtcbiAgfVxuICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCBnZXRPQXV0aEFjY2Vzc1Rva2VuKHN0YXRlLCB7XG4gICAgcmVxdWVzdCxcbiAgICBhdXRoOiB7IHR5cGU6IFwib2F1dGhcIiB9XG4gIH0pO1xuICBlbmRwb2ludC5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSBgdG9rZW4gJHt0b2tlbn1gO1xuICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiNi4wLjBcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5mdW5jdGlvbiBjcmVhdGVPQXV0aERldmljZUF1dGgob3B0aW9ucykge1xuICBjb25zdCByZXF1ZXN0V2l0aERlZmF1bHRzID0gb3B0aW9ucy5yZXF1ZXN0IHx8IG9jdG9raXRSZXF1ZXN0LmRlZmF1bHRzKHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcInVzZXItYWdlbnRcIjogYG9jdG9raXQtYXV0aC1vYXV0aC1kZXZpY2UuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWBcbiAgICB9XG4gIH0pO1xuICBjb25zdCB7IHJlcXVlc3QgPSByZXF1ZXN0V2l0aERlZmF1bHRzLCAuLi5vdGhlck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0YXRlID0gb3B0aW9ucy5jbGllbnRUeXBlID09PSBcImdpdGh1Yi1hcHBcIiA/IHtcbiAgICAuLi5vdGhlck9wdGlvbnMsXG4gICAgY2xpZW50VHlwZTogXCJnaXRodWItYXBwXCIsXG4gICAgcmVxdWVzdFxuICB9IDoge1xuICAgIC4uLm90aGVyT3B0aW9ucyxcbiAgICBjbGllbnRUeXBlOiBcIm9hdXRoLWFwcFwiLFxuICAgIHJlcXVlc3QsXG4gICAgc2NvcGVzOiBvcHRpb25zLnNjb3BlcyB8fCBbXVxuICB9O1xuICBpZiAoIW9wdGlvbnMuY2xpZW50SWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnW0BvY3Rva2l0L2F1dGgtb2F1dGgtZGV2aWNlXSBcImNsaWVudElkXCIgb3B0aW9uIG11c3QgYmUgc2V0IChodHRwczovL2dpdGh1Yi5jb20vb2N0b2tpdC9hdXRoLW9hdXRoLWRldmljZS5qcyN1c2FnZSknXG4gICAgKTtcbiAgfVxuICBpZiAoIW9wdGlvbnMub25WZXJpZmljYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnW0BvY3Rva2l0L2F1dGgtb2F1dGgtZGV2aWNlXSBcIm9uVmVyaWZpY2F0aW9uXCIgb3B0aW9uIG11c3QgYmUgYSBmdW5jdGlvbiAoaHR0cHM6Ly9naXRodWIuY29tL29jdG9raXQvYXV0aC1vYXV0aC1kZXZpY2UuanMjdXNhZ2UpJ1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXV0aC5iaW5kKG51bGwsIHN0YXRlKSwge1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCBzdGF0ZSlcbiAgfSk7XG59XG5leHBvcnQge1xuICBjcmVhdGVPQXV0aERldmljZUF1dGhcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuaW1wb3J0IHsgcmVxdWVzdCBhcyBvY3Rva2l0UmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiNC4wLjBcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dldC1hdXRoZW50aWNhdGlvbi5qc1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhEZXZpY2VBdXRoIH0gZnJvbSBcIkBvY3Rva2l0L2F1dGgtb2F1dGgtZGV2aWNlXCI7XG5pbXBvcnQgeyBleGNoYW5nZVdlYkZsb3dDb2RlIH0gZnJvbSBcIkBvY3Rva2l0L29hdXRoLW1ldGhvZHNcIjtcbmFzeW5jIGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0aW9uKHN0YXRlKSB7XG4gIGlmIChcImNvZGVcIiBpbiBzdGF0ZS5zdHJhdGVneU9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGF1dGhlbnRpY2F0aW9uIH0gPSBhd2FpdCBleGNoYW5nZVdlYkZsb3dDb2RlKHtcbiAgICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICAgIGNsaWVudFNlY3JldDogc3RhdGUuY2xpZW50U2VjcmV0LFxuICAgICAgY2xpZW50VHlwZTogc3RhdGUuY2xpZW50VHlwZSxcbiAgICAgIG9uVG9rZW5DcmVhdGVkOiBzdGF0ZS5vblRva2VuQ3JlYXRlZCxcbiAgICAgIC4uLnN0YXRlLnN0cmF0ZWd5T3B0aW9ucyxcbiAgICAgIHJlcXVlc3Q6IHN0YXRlLnJlcXVlc3RcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJ0b2tlblwiLFxuICAgICAgdG9rZW5UeXBlOiBcIm9hdXRoXCIsXG4gICAgICAuLi5hdXRoZW50aWNhdGlvblxuICAgIH07XG4gIH1cbiAgaWYgKFwib25WZXJpZmljYXRpb25cIiBpbiBzdGF0ZS5zdHJhdGVneU9wdGlvbnMpIHtcbiAgICBjb25zdCBkZXZpY2VBdXRoID0gY3JlYXRlT0F1dGhEZXZpY2VBdXRoKHtcbiAgICAgIGNsaWVudFR5cGU6IHN0YXRlLmNsaWVudFR5cGUsXG4gICAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgICBvblRva2VuQ3JlYXRlZDogc3RhdGUub25Ub2tlbkNyZWF0ZWQsXG4gICAgICAuLi5zdGF0ZS5zdHJhdGVneU9wdGlvbnMsXG4gICAgICByZXF1ZXN0OiBzdGF0ZS5yZXF1ZXN0XG4gICAgfSk7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb24gPSBhd2FpdCBkZXZpY2VBdXRoKHtcbiAgICAgIHR5cGU6IFwib2F1dGhcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBjbGllbnRTZWNyZXQ6IHN0YXRlLmNsaWVudFNlY3JldCxcbiAgICAgIC4uLmF1dGhlbnRpY2F0aW9uXG4gICAgfTtcbiAgfVxuICBpZiAoXCJ0b2tlblwiIGluIHN0YXRlLnN0cmF0ZWd5T3B0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgICB0b2tlblR5cGU6IFwib2F1dGhcIixcbiAgICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICAgIGNsaWVudFNlY3JldDogc3RhdGUuY2xpZW50U2VjcmV0LFxuICAgICAgY2xpZW50VHlwZTogc3RhdGUuY2xpZW50VHlwZSxcbiAgICAgIG9uVG9rZW5DcmVhdGVkOiBzdGF0ZS5vblRva2VuQ3JlYXRlZCxcbiAgICAgIC4uLnN0YXRlLnN0cmF0ZWd5T3B0aW9uc1xuICAgIH07XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFwiW0BvY3Rva2l0L2F1dGgtb2F1dGgtdXNlcl0gSW52YWxpZCBzdHJhdGVneSBvcHRpb25zXCIpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvYXV0aC5qc1xuaW1wb3J0IHtcbiAgY2hlY2tUb2tlbixcbiAgZGVsZXRlQXV0aG9yaXphdGlvbixcbiAgZGVsZXRlVG9rZW4sXG4gIHJlZnJlc2hUb2tlbixcbiAgcmVzZXRUb2tlblxufSBmcm9tIFwiQG9jdG9raXQvb2F1dGgtbWV0aG9kc1wiO1xuYXN5bmMgZnVuY3Rpb24gYXV0aChzdGF0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICghc3RhdGUuYXV0aGVudGljYXRpb24pIHtcbiAgICBzdGF0ZS5hdXRoZW50aWNhdGlvbiA9IHN0YXRlLmNsaWVudFR5cGUgPT09IFwib2F1dGgtYXBwXCIgPyBhd2FpdCBnZXRBdXRoZW50aWNhdGlvbihzdGF0ZSkgOiBhd2FpdCBnZXRBdXRoZW50aWNhdGlvbihzdGF0ZSk7XG4gIH1cbiAgaWYgKHN0YXRlLmF1dGhlbnRpY2F0aW9uLmludmFsaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbQG9jdG9raXQvYXV0aC1vYXV0aC11c2VyXSBUb2tlbiBpcyBpbnZhbGlkXCIpO1xuICB9XG4gIGNvbnN0IGN1cnJlbnRBdXRoZW50aWNhdGlvbiA9IHN0YXRlLmF1dGhlbnRpY2F0aW9uO1xuICBpZiAoXCJleHBpcmVzQXRcIiBpbiBjdXJyZW50QXV0aGVudGljYXRpb24pIHtcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSBcInJlZnJlc2hcIiB8fCBuZXcgRGF0ZShjdXJyZW50QXV0aGVudGljYXRpb24uZXhwaXJlc0F0KSA8IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKSB7XG4gICAgICBjb25zdCB7IGF1dGhlbnRpY2F0aW9uIH0gPSBhd2FpdCByZWZyZXNoVG9rZW4oe1xuICAgICAgICBjbGllbnRUeXBlOiBcImdpdGh1Yi1hcHBcIixcbiAgICAgICAgY2xpZW50SWQ6IHN0YXRlLmNsaWVudElkLFxuICAgICAgICBjbGllbnRTZWNyZXQ6IHN0YXRlLmNsaWVudFNlY3JldCxcbiAgICAgICAgcmVmcmVzaFRva2VuOiBjdXJyZW50QXV0aGVudGljYXRpb24ucmVmcmVzaFRva2VuLFxuICAgICAgICByZXF1ZXN0OiBzdGF0ZS5yZXF1ZXN0XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uID0ge1xuICAgICAgICB0b2tlblR5cGU6IFwib2F1dGhcIixcbiAgICAgICAgdHlwZTogXCJ0b2tlblwiLFxuICAgICAgICAuLi5hdXRoZW50aWNhdGlvblxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMudHlwZSA9PT0gXCJyZWZyZXNoXCIpIHtcbiAgICBpZiAoc3RhdGUuY2xpZW50VHlwZSA9PT0gXCJvYXV0aC1hcHBcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIltAb2N0b2tpdC9hdXRoLW9hdXRoLXVzZXJdIE9BdXRoIEFwcHMgZG8gbm90IHN1cHBvcnQgZXhwaXJpbmcgdG9rZW5zXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghY3VycmVudEF1dGhlbnRpY2F0aW9uLmhhc093blByb3BlcnR5KFwiZXhwaXJlc0F0XCIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbQG9jdG9raXQvYXV0aC1vYXV0aC11c2VyXSBSZWZyZXNoIHRva2VuIG1pc3NpbmdcIik7XG4gICAgfVxuICAgIGF3YWl0IHN0YXRlLm9uVG9rZW5DcmVhdGVkPy4oc3RhdGUuYXV0aGVudGljYXRpb24sIHtcbiAgICAgIHR5cGU6IG9wdGlvbnMudHlwZVxuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLnR5cGUgPT09IFwiY2hlY2tcIiB8fCBvcHRpb25zLnR5cGUgPT09IFwicmVzZXRcIikge1xuICAgIGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMudHlwZSA9PT0gXCJjaGVja1wiID8gY2hlY2tUb2tlbiA6IHJlc2V0VG9rZW47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgYXV0aGVudGljYXRpb24gfSA9IGF3YWl0IG1ldGhvZCh7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbWFraW5nIFRTIGhhcHB5IHdvdWxkIHJlcXVpcmUgdW5uZWNlc3NhcnkgY29kZSBzbyBub1xuICAgICAgICBjbGllbnRUeXBlOiBzdGF0ZS5jbGllbnRUeXBlLFxuICAgICAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgICAgIGNsaWVudFNlY3JldDogc3RhdGUuY2xpZW50U2VjcmV0LFxuICAgICAgICB0b2tlbjogc3RhdGUuYXV0aGVudGljYXRpb24udG9rZW4sXG4gICAgICAgIHJlcXVlc3Q6IHN0YXRlLnJlcXVlc3RcbiAgICAgIH0pO1xuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb24gPSB7XG4gICAgICAgIHRva2VuVHlwZTogXCJvYXV0aFwiLFxuICAgICAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVEJEXG4gICAgICAgIC4uLmF1dGhlbnRpY2F0aW9uXG4gICAgICB9O1xuICAgICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gXCJyZXNldFwiKSB7XG4gICAgICAgIGF3YWl0IHN0YXRlLm9uVG9rZW5DcmVhdGVkPy4oc3RhdGUuYXV0aGVudGljYXRpb24sIHtcbiAgICAgICAgICB0eXBlOiBvcHRpb25zLnR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGUuYXV0aGVudGljYXRpb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gXCJbQG9jdG9raXQvYXV0aC1vYXV0aC11c2VyXSBUb2tlbiBpcyBpbnZhbGlkXCI7XG4gICAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uLmludmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLnR5cGUgPT09IFwiZGVsZXRlXCIgfHwgb3B0aW9ucy50eXBlID09PSBcImRlbGV0ZUF1dGhvcml6YXRpb25cIikge1xuICAgIGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMudHlwZSA9PT0gXCJkZWxldGVcIiA/IGRlbGV0ZVRva2VuIDogZGVsZXRlQXV0aG9yaXphdGlvbjtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbWV0aG9kKHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBtYWtpbmcgVFMgaGFwcHkgd291bGQgcmVxdWlyZSB1bm5lY2Vzc2FyeSBjb2RlIHNvIG5vXG4gICAgICAgIGNsaWVudFR5cGU6IHN0YXRlLmNsaWVudFR5cGUsXG4gICAgICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBzdGF0ZS5jbGllbnRTZWNyZXQsXG4gICAgICAgIHRva2VuOiBzdGF0ZS5hdXRoZW50aWNhdGlvbi50b2tlbixcbiAgICAgICAgcmVxdWVzdDogc3RhdGUucmVxdWVzdFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5zdGF0dXMgIT09IDQwNClcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uLmludmFsaWQgPSB0cnVlO1xuICAgIHJldHVybiBzdGF0ZS5hdXRoZW50aWNhdGlvbjtcbiAgfVxuICByZXR1cm4gc3RhdGUuYXV0aGVudGljYXRpb247XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9ob29rLmpzXG5pbXBvcnQgYnRvYSBmcm9tIFwiYnRvYS1saXRlXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9yZXF1aXJlcy1iYXNpYy1hdXRoLmpzXG52YXIgUk9VVEVTX1JFUVVJUklOR19CQVNJQ19BVVRIID0gL1xcL2FwcGxpY2F0aW9uc1xcL1teL10rXFwvKHRva2VufGdyYW50KXM/LztcbmZ1bmN0aW9uIHJlcXVpcmVzQmFzaWNBdXRoKHVybCkge1xuICByZXR1cm4gdXJsICYmIFJPVVRFU19SRVFVSVJJTkdfQkFTSUNfQVVUSC50ZXN0KHVybCk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9ob29rLmpzXG5hc3luYyBmdW5jdGlvbiBob29rKHN0YXRlLCByZXF1ZXN0LCByb3V0ZSwgcGFyYW1ldGVycyA9IHt9KSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gcmVxdWVzdC5lbmRwb2ludC5tZXJnZShcbiAgICByb3V0ZSxcbiAgICBwYXJhbWV0ZXJzXG4gICk7XG4gIGlmICgvXFwvbG9naW5cXC8ob2F1dGhcXC9hY2Nlc3NfdG9rZW58ZGV2aWNlXFwvY29kZSkkLy50ZXN0KGVuZHBvaW50LnVybCkpIHtcbiAgICByZXR1cm4gcmVxdWVzdChlbmRwb2ludCk7XG4gIH1cbiAgaWYgKHJlcXVpcmVzQmFzaWNBdXRoKGVuZHBvaW50LnVybCkpIHtcbiAgICBjb25zdCBjcmVkZW50aWFscyA9IGJ0b2EoYCR7c3RhdGUuY2xpZW50SWR9OiR7c3RhdGUuY2xpZW50U2VjcmV0fWApO1xuICAgIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGBiYXNpYyAke2NyZWRlbnRpYWxzfWA7XG4gICAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQpO1xuICB9XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHN0YXRlLmNsaWVudFR5cGUgPT09IFwib2F1dGgtYXBwXCIgPyBhd2FpdCBhdXRoKHsgLi4uc3RhdGUsIHJlcXVlc3QgfSkgOiBhd2FpdCBhdXRoKHsgLi4uc3RhdGUsIHJlcXVlc3QgfSk7XG4gIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IFwidG9rZW4gXCIgKyB0b2tlbjtcbiAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmZ1bmN0aW9uIGNyZWF0ZU9BdXRoVXNlckF1dGgoe1xuICBjbGllbnRJZCxcbiAgY2xpZW50U2VjcmV0LFxuICBjbGllbnRUeXBlID0gXCJvYXV0aC1hcHBcIixcbiAgcmVxdWVzdCA9IG9jdG9raXRSZXF1ZXN0LmRlZmF1bHRzKHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcInVzZXItYWdlbnRcIjogYG9jdG9raXQtYXV0aC1vYXV0aC1hcHAuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWBcbiAgICB9XG4gIH0pLFxuICBvblRva2VuQ3JlYXRlZCxcbiAgLi4uc3RyYXRlZ3lPcHRpb25zXG59KSB7XG4gIGNvbnN0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7XG4gICAgY2xpZW50VHlwZSxcbiAgICBjbGllbnRJZCxcbiAgICBjbGllbnRTZWNyZXQsXG4gICAgb25Ub2tlbkNyZWF0ZWQsXG4gICAgc3RyYXRlZ3lPcHRpb25zLFxuICAgIHJlcXVlc3RcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGF1dGguYmluZChudWxsLCBzdGF0ZSksIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIG5vdCB3b3J0aCB0aGUgZXh0cmEgY29kZSBuZWVkZWQgdG8gYXBwZWFzZSBUU1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCBzdGF0ZSlcbiAgfSk7XG59XG5jcmVhdGVPQXV0aFVzZXJBdXRoLlZFUlNJT04gPSBWRVJTSU9OO1xuZXhwb3J0IHtcbiAgY3JlYXRlT0F1dGhVc2VyQXV0aCxcbiAgcmVxdWlyZXNCYXNpY0F1dGhcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvYXV0aC5qc1xudmFyIFJFR0VYX0lTX0lOU1RBTExBVElPTl9MRUdBQ1kgPSAvXnYxXFwuLztcbnZhciBSRUdFWF9JU19JTlNUQUxMQVRJT04gPSAvXmdoc18vO1xudmFyIFJFR0VYX0lTX1VTRVJfVE9fU0VSVkVSID0gL15naHVfLztcbmFzeW5jIGZ1bmN0aW9uIGF1dGgodG9rZW4pIHtcbiAgY29uc3QgaXNBcHAgPSB0b2tlbi5zcGxpdCgvXFwuLykubGVuZ3RoID09PSAzO1xuICBjb25zdCBpc0luc3RhbGxhdGlvbiA9IFJFR0VYX0lTX0lOU1RBTExBVElPTl9MRUdBQ1kudGVzdCh0b2tlbikgfHwgUkVHRVhfSVNfSU5TVEFMTEFUSU9OLnRlc3QodG9rZW4pO1xuICBjb25zdCBpc1VzZXJUb1NlcnZlciA9IFJFR0VYX0lTX1VTRVJfVE9fU0VSVkVSLnRlc3QodG9rZW4pO1xuICBjb25zdCB0b2tlblR5cGUgPSBpc0FwcCA/IFwiYXBwXCIgOiBpc0luc3RhbGxhdGlvbiA/IFwiaW5zdGFsbGF0aW9uXCIgOiBpc1VzZXJUb1NlcnZlciA/IFwidXNlci10by1zZXJ2ZXJcIiA6IFwib2F1dGhcIjtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgdG9rZW4sXG4gICAgdG9rZW5UeXBlXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93aXRoLWF1dGhvcml6YXRpb24tcHJlZml4LmpzXG5mdW5jdGlvbiB3aXRoQXV0aG9yaXphdGlvblByZWZpeCh0b2tlbikge1xuICBpZiAodG9rZW4uc3BsaXQoL1xcLi8pLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBgYmVhcmVyICR7dG9rZW59YDtcbiAgfVxuICByZXR1cm4gYHRva2VuICR7dG9rZW59YDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2hvb2suanNcbmFzeW5jIGZ1bmN0aW9uIGhvb2sodG9rZW4sIHJlcXVlc3QsIHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gcmVxdWVzdC5lbmRwb2ludC5tZXJnZShcbiAgICByb3V0ZSxcbiAgICBwYXJhbWV0ZXJzXG4gICk7XG4gIGVuZHBvaW50LmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHdpdGhBdXRob3JpemF0aW9uUHJlZml4KHRva2VuKTtcbiAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBjcmVhdGVUb2tlbkF1dGggPSBmdW5jdGlvbiBjcmVhdGVUb2tlbkF1dGgyKHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbQG9jdG9raXQvYXV0aC10b2tlbl0gTm8gdG9rZW4gcGFzc2VkIHRvIGNyZWF0ZVRva2VuQXV0aFwiKTtcbiAgfVxuICBpZiAodHlwZW9mIHRva2VuICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJbQG9jdG9raXQvYXV0aC10b2tlbl0gVG9rZW4gcGFzc2VkIHRvIGNyZWF0ZVRva2VuQXV0aCBpcyBub3QgYSBzdHJpbmdcIlxuICAgICk7XG4gIH1cbiAgdG9rZW4gPSB0b2tlbi5yZXBsYWNlKC9eKHRva2VufGJlYXJlcikgKy9pLCBcIlwiKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXV0aC5iaW5kKG51bGwsIHRva2VuKSwge1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCB0b2tlbilcbiAgfSk7XG59O1xuZXhwb3J0IHtcbiAgY3JlYXRlVG9rZW5BdXRoXG59O1xuIiwiLy8gcGtnL2Rpc3Qtc3JjL2F1dGguanNcbmFzeW5jIGZ1bmN0aW9uIGF1dGgocmVhc29uKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJ1bmF1dGhlbnRpY2F0ZWRcIixcbiAgICByZWFzb25cbiAgfTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2lzLXJhdGUtbGltaXQtZXJyb3IuanNcbmltcG9ydCB7IFJlcXVlc3RFcnJvciB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0LWVycm9yXCI7XG5mdW5jdGlvbiBpc1JhdGVMaW1pdEVycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvci5zdGF0dXMgIT09IDQwMykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIWVycm9yLnJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBlcnJvci5yZXNwb25zZS5oZWFkZXJzW1wieC1yYXRlbGltaXQtcmVtYWluaW5nXCJdID09PSBcIjBcIjtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2lzLWFidXNlLWxpbWl0LWVycm9yLmpzXG5pbXBvcnQgeyBSZXF1ZXN0RXJyb3IgYXMgUmVxdWVzdEVycm9yMiB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0LWVycm9yXCI7XG52YXIgUkVHRVhfQUJVU0VfTElNSVRfTUVTU0FHRSA9IC9cXGJhYnVzZVxcYi9pO1xuZnVuY3Rpb24gaXNBYnVzZUxpbWl0RXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDAzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBSRUdFWF9BQlVTRV9MSU1JVF9NRVNTQUdFLnRlc3QoZXJyb3IubWVzc2FnZSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9ob29rLmpzXG5hc3luYyBmdW5jdGlvbiBob29rKHJlYXNvbiwgcmVxdWVzdCwgcm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgZW5kcG9pbnQgPSByZXF1ZXN0LmVuZHBvaW50Lm1lcmdlKFxuICAgIHJvdXRlLFxuICAgIHBhcmFtZXRlcnNcbiAgKTtcbiAgcmV0dXJuIHJlcXVlc3QoZW5kcG9pbnQpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgZXJyb3IubWVzc2FnZSA9IGBOb3QgZm91bmQuIE1heSBiZSBkdWUgdG8gbGFjayBvZiBhdXRoZW50aWNhdGlvbi4gUmVhc29uOiAke3JlYXNvbn1gO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGlmIChpc1JhdGVMaW1pdEVycm9yKGVycm9yKSkge1xuICAgICAgZXJyb3IubWVzc2FnZSA9IGBBUEkgcmF0ZSBsaW1pdCBleGNlZWRlZC4gVGhpcyBtYXliZSBjYXVzZWQgYnkgdGhlIGxhY2sgb2YgYXV0aGVudGljYXRpb24uIFJlYXNvbjogJHtyZWFzb259YDtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBpZiAoaXNBYnVzZUxpbWl0RXJyb3IoZXJyb3IpKSB7XG4gICAgICBlcnJvci5tZXNzYWdlID0gYFlvdSBoYXZlIHRyaWdnZXJlZCBhbiBhYnVzZSBkZXRlY3Rpb24gbWVjaGFuaXNtLiBUaGlzIG1heWJlIGNhdXNlZCBieSB0aGUgbGFjayBvZiBhdXRoZW50aWNhdGlvbi4gUmVhc29uOiAke3JlYXNvbn1gO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgZXJyb3IubWVzc2FnZSA9IGBVbmF1dGhvcml6ZWQuIFwiJHtlbmRwb2ludC5tZXRob2R9ICR7ZW5kcG9pbnQudXJsfVwiIGZhaWxlZCBtb3N0IGxpa2VseSBkdWUgdG8gbGFjayBvZiBhdXRoZW50aWNhdGlvbi4gUmVhc29uOiAke3JlYXNvbn1gO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGlmIChlcnJvci5zdGF0dXMgPj0gNDAwICYmIGVycm9yLnN0YXR1cyA8IDUwMCkge1xuICAgICAgZXJyb3IubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UucmVwbGFjZShcbiAgICAgICAgL1xcLj8kLyxcbiAgICAgICAgYC4gTWF5IGJlIGNhdXNlZCBieSBsYWNrIG9mIGF1dGhlbnRpY2F0aW9uICgke3JlYXNvbn0pLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgY3JlYXRlVW5hdXRoZW50aWNhdGVkQXV0aCA9IGZ1bmN0aW9uIGNyZWF0ZVVuYXV0aGVudGljYXRlZEF1dGgyKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJlYXNvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiW0BvY3Rva2l0L2F1dGgtdW5hdXRoZW50aWNhdGVkXSBObyByZWFzb24gcGFzc2VkIHRvIGNyZWF0ZVVuYXV0aGVudGljYXRlZEF1dGhcIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXV0aC5iaW5kKG51bGwsIG9wdGlvbnMucmVhc29uKSwge1xuICAgIGhvb2s6IGhvb2suYmluZChudWxsLCBvcHRpb25zLnJlYXNvbilcbiAgfSk7XG59O1xuZXhwb3J0IHtcbiAgY3JlYXRlVW5hdXRoZW50aWNhdGVkQXV0aFxufTtcbiIsIi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcImJlZm9yZS1hZnRlci1ob29rXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcbmltcG9ydCB7IGdyYXBocWwsIHdpdGhDdXN0b21SZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L2dyYXBocWxcIjtcbmltcG9ydCB7IGNyZWF0ZVRva2VuQXV0aCB9IGZyb20gXCJAb2N0b2tpdC9hdXRoLXRva2VuXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiNS4wLjBcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgT2N0b2tpdCA9IGNsYXNzIHtcbiAgc3RhdGljIHtcbiAgICB0aGlzLlZFUlNJT04gPSBWRVJTSU9OO1xuICB9XG4gIHN0YXRpYyBkZWZhdWx0cyhkZWZhdWx0cykge1xuICAgIGNvbnN0IE9jdG9raXRXaXRoRGVmYXVsdHMgPSBjbGFzcyBleHRlbmRzIHRoaXMge1xuICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gYXJnc1swXSB8fCB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc3VwZXIoZGVmYXVsdHMob3B0aW9ucykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkZWZhdWx0cyxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zLnVzZXJBZ2VudCAmJiBkZWZhdWx0cy51c2VyQWdlbnQgPyB7XG4gICAgICAgICAgICAgIHVzZXJBZ2VudDogYCR7b3B0aW9ucy51c2VyQWdlbnR9ICR7ZGVmYXVsdHMudXNlckFnZW50fWBcbiAgICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE9jdG9raXRXaXRoRGVmYXVsdHM7XG4gIH1cbiAgc3RhdGljIHtcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcbiAgfVxuICAvKipcbiAgICogQXR0YWNoIGEgcGx1Z2luIChvciBtYW55KSB0byB5b3VyIE9jdG9raXQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IEFQSSA9IE9jdG9raXQucGx1Z2luKHBsdWdpbjEsIHBsdWdpbjIsIHBsdWdpbjMsIC4uLilcbiAgICovXG4gIHN0YXRpYyBwbHVnaW4oLi4ubmV3UGx1Z2lucykge1xuICAgIGNvbnN0IGN1cnJlbnRQbHVnaW5zID0gdGhpcy5wbHVnaW5zO1xuICAgIGNvbnN0IE5ld09jdG9raXQgPSBjbGFzcyBleHRlbmRzIHRoaXMge1xuICAgICAgc3RhdGljIHtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gY3VycmVudFBsdWdpbnMuY29uY2F0KFxuICAgICAgICAgIG5ld1BsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+ICFjdXJyZW50UGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4pKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE5ld09jdG9raXQ7XG4gIH1cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgaG9vayA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgY29uc3QgcmVxdWVzdERlZmF1bHRzID0ge1xuICAgICAgYmFzZVVybDogcmVxdWVzdC5lbmRwb2ludC5ERUZBVUxUUy5iYXNlVXJsLFxuICAgICAgaGVhZGVyczoge30sXG4gICAgICByZXF1ZXN0OiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLnJlcXVlc3QsIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBpbnRlcm5hbCB1c2FnZSBvbmx5LCBubyBuZWVkIHRvIHR5cGVcbiAgICAgICAgaG9vazogaG9vay5iaW5kKG51bGwsIFwicmVxdWVzdFwiKVxuICAgICAgfSksXG4gICAgICBtZWRpYVR5cGU6IHtcbiAgICAgICAgcHJldmlld3M6IFtdLFxuICAgICAgICBmb3JtYXQ6IFwiXCJcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcXVlc3REZWZhdWx0cy5oZWFkZXJzW1widXNlci1hZ2VudFwiXSA9IFtcbiAgICAgIG9wdGlvbnMudXNlckFnZW50LFxuICAgICAgYG9jdG9raXQtY29yZS5qcy8ke1ZFUlNJT059ICR7Z2V0VXNlckFnZW50KCl9YFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICAgIGlmIChvcHRpb25zLmJhc2VVcmwpIHtcbiAgICAgIHJlcXVlc3REZWZhdWx0cy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmV2aWV3cykge1xuICAgICAgcmVxdWVzdERlZmF1bHRzLm1lZGlhVHlwZS5wcmV2aWV3cyA9IG9wdGlvbnMucHJldmlld3M7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRpbWVab25lKSB7XG4gICAgICByZXF1ZXN0RGVmYXVsdHMuaGVhZGVyc1tcInRpbWUtem9uZVwiXSA9IG9wdGlvbnMudGltZVpvbmU7XG4gICAgfVxuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3QuZGVmYXVsdHMocmVxdWVzdERlZmF1bHRzKTtcbiAgICB0aGlzLmdyYXBocWwgPSB3aXRoQ3VzdG9tUmVxdWVzdCh0aGlzLnJlcXVlc3QpLmRlZmF1bHRzKHJlcXVlc3REZWZhdWx0cyk7XG4gICAgdGhpcy5sb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBkZWJ1ZzogKCkgPT4ge1xuICAgICAgICB9LFxuICAgICAgICBpbmZvOiAoKSA9PiB7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpLFxuICAgICAgICBlcnJvcjogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gICAgICB9LFxuICAgICAgb3B0aW9ucy5sb2dcbiAgICApO1xuICAgIHRoaXMuaG9vayA9IGhvb2s7XG4gICAgaWYgKCFvcHRpb25zLmF1dGhTdHJhdGVneSkge1xuICAgICAgaWYgKCFvcHRpb25zLmF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gYXN5bmMgKCkgPT4gKHtcbiAgICAgICAgICB0eXBlOiBcInVuYXV0aGVudGljYXRlZFwiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGNyZWF0ZVRva2VuQXV0aChvcHRpb25zLmF1dGgpO1xuICAgICAgICBob29rLndyYXAoXCJyZXF1ZXN0XCIsIGF1dGguaG9vayk7XG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgYXV0aFN0cmF0ZWd5LCAuLi5vdGhlck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBhdXRoID0gYXV0aFN0cmF0ZWd5KFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICAgIGxvZzogdGhpcy5sb2csXG4gICAgICAgICAgICAvLyB3ZSBwYXNzIHRoZSBjdXJyZW50IG9jdG9raXQgaW5zdGFuY2UgYXMgd2VsbCBhcyBpdHMgY29uc3RydWN0b3Igb3B0aW9uc1xuICAgICAgICAgICAgLy8gdG8gYWxsb3cgZm9yIGF1dGhlbnRpY2F0aW9uIHN0cmF0ZWdpZXMgdGhhdCByZXR1cm4gYSBuZXcgb2N0b2tpdCBpbnN0YW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBzaGFyZXMgdGhlIHNhbWUgaW50ZXJuYWwgc3RhdGUgYXMgdGhlIGN1cnJlbnQgb25lLiBUaGUgb3JpZ2luYWxcbiAgICAgICAgICAgIC8vIHJlcXVpcmVtZW50IGZvciB0aGlzIHdhcyB0aGUgXCJldmVudC1vY3Rva2l0XCIgYXV0aGVudGljYXRpb24gc3RyYXRlZ3lcbiAgICAgICAgICAgIC8vIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9ib3Qvb2N0b2tpdC1hdXRoLXByb2JvdC5cbiAgICAgICAgICAgIG9jdG9raXQ6IHRoaXMsXG4gICAgICAgICAgICBvY3Rva2l0T3B0aW9uczogb3RoZXJPcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zLmF1dGhcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGhvb2sud3JhcChcInJlcXVlc3RcIiwgYXV0aC5ob29rKTtcbiAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzQ29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgIGNsYXNzQ29uc3RydWN0b3IucGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGx1Z2luKHRoaXMsIG9wdGlvbnMpKTtcbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIE9jdG9raXRcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvZGVmYXVsdHMuanNcbmltcG9ydCB7IGdldFVzZXJBZ2VudCB9IGZyb20gXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjkuMC4wXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9kZWZhdWx0cy5qc1xudmFyIHVzZXJBZ2VudCA9IGBvY3Rva2l0LWVuZHBvaW50LmpzLyR7VkVSU0lPTn0gJHtnZXRVc2VyQWdlbnQoKX1gO1xudmFyIERFRkFVTFRTID0ge1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiLFxuICBoZWFkZXJzOiB7XG4gICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgIFwidXNlci1hZ2VudFwiOiB1c2VyQWdlbnRcbiAgfSxcbiAgbWVkaWFUeXBlOiB7XG4gICAgZm9ybWF0OiBcIlwiXG4gIH1cbn07XG5cbi8vIHBrZy9kaXN0LXNyYy91dGlsL2xvd2VyY2FzZS1rZXlzLmpzXG5mdW5jdGlvbiBsb3dlcmNhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIW9iamVjdCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5yZWR1Y2UoKG5ld09iaiwga2V5KSA9PiB7XG4gICAgbmV3T2JqW2tleS50b0xvd2VyQ2FzZSgpXSA9IG9iamVjdFtrZXldO1xuICAgIHJldHVybiBuZXdPYmo7XG4gIH0sIHt9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvbWVyZ2UtZGVlcC5qc1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gXCJpcy1wbGFpbi1vYmplY3RcIjtcbmZ1bmN0aW9uIG1lcmdlRGVlcChkZWZhdWx0cywgb3B0aW9ucykge1xuICBjb25zdCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cyk7XG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdGlvbnNba2V5XSkpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZWZhdWx0cykpXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvcHRpb25zW2tleV0gfSk7XG4gICAgICBlbHNlXG4gICAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2VEZWVwKGRlZmF1bHRzW2tleV0sIG9wdGlvbnNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvcHRpb25zW2tleV0gfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWwvcmVtb3ZlLXVuZGVmaW5lZC1wcm9wZXJ0aWVzLmpzXG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKG9iaikge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqW2tleV0gPT09IHZvaWQgMCkge1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvbWVyZ2UuanNcbmZ1bmN0aW9uIG1lcmdlKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgbGV0IFttZXRob2QsIHVybF0gPSByb3V0ZS5zcGxpdChcIiBcIik7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odXJsID8geyBtZXRob2QsIHVybCB9IDogeyB1cmw6IG1ldGhvZCB9LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgcm91dGUpO1xuICB9XG4gIG9wdGlvbnMuaGVhZGVycyA9IGxvd2VyY2FzZUtleXMob3B0aW9ucy5oZWFkZXJzKTtcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhvcHRpb25zKTtcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcyhvcHRpb25zLmhlYWRlcnMpO1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0gbWVyZ2VEZWVwKGRlZmF1bHRzIHx8IHt9LCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMudXJsID09PSBcIi9ncmFwaHFsXCIpIHtcbiAgICBpZiAoZGVmYXVsdHMgJiYgZGVmYXVsdHMubWVkaWFUeXBlLnByZXZpZXdzPy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZE9wdGlvbnMubWVkaWFUeXBlLnByZXZpZXdzID0gZGVmYXVsdHMubWVkaWFUeXBlLnByZXZpZXdzLmZpbHRlcihcbiAgICAgICAgKHByZXZpZXcpID0+ICFtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cy5pbmNsdWRlcyhwcmV2aWV3KVxuICAgICAgKS5jb25jYXQobWVyZ2VkT3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MpO1xuICAgIH1cbiAgICBtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyA9IChtZXJnZWRPcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cyB8fCBbXSkubWFwKChwcmV2aWV3KSA9PiBwcmV2aWV3LnJlcGxhY2UoLy1wcmV2aWV3LywgXCJcIikpO1xuICB9XG4gIHJldHVybiBtZXJnZWRPcHRpb25zO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9hZGQtcXVlcnktcGFyYW1ldGVycy5qc1xuZnVuY3Rpb24gYWRkUXVlcnlQYXJhbWV0ZXJzKHVybCwgcGFyYW1ldGVycykge1xuICBjb25zdCBzZXBhcmF0b3IgPSAvXFw/Ly50ZXN0KHVybCkgPyBcIiZcIiA6IFwiP1wiO1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpO1xuICBpZiAobmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZXR1cm4gdXJsICsgc2VwYXJhdG9yICsgbmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgaWYgKG5hbWUgPT09IFwicVwiKSB7XG4gICAgICByZXR1cm4gXCJxPVwiICsgcGFyYW1ldGVycy5xLnNwbGl0KFwiK1wiKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKFwiK1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtZXRlcnNbbmFtZV0pfWA7XG4gIH0pLmpvaW4oXCImXCIpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9leHRyYWN0LXVybC12YXJpYWJsZS1uYW1lcy5qc1xudmFyIHVybFZhcmlhYmxlUmVnZXggPSAvXFx7W159XStcXH0vZztcbmZ1bmN0aW9uIHJlbW92ZU5vbkNoYXJzKHZhcmlhYmxlTmFtZSkge1xuICByZXR1cm4gdmFyaWFibGVOYW1lLnJlcGxhY2UoL15cXFcrfFxcVyskL2csIFwiXCIpLnNwbGl0KC8sLyk7XG59XG5mdW5jdGlvbiBleHRyYWN0VXJsVmFyaWFibGVOYW1lcyh1cmwpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHVybC5tYXRjaCh1cmxWYXJpYWJsZVJlZ2V4KTtcbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBtYXRjaGVzLm1hcChyZW1vdmVOb25DaGFycykucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSwgW10pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC9vbWl0LmpzXG5mdW5jdGlvbiBvbWl0KG9iamVjdCwga2V5c1RvT21pdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5maWx0ZXIoKG9wdGlvbikgPT4gIWtleXNUb09taXQuaW5jbHVkZXMob3B0aW9uKSkucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgIG9ialtrZXldID0gb2JqZWN0W2tleV07XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvdXRpbC91cmwtdGVtcGxhdGUuanNcbmZ1bmN0aW9uIGVuY29kZVJlc2VydmVkKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KC8oJVswLTlBLUZhLWZdezJ9KS9nKS5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgIGlmICghLyVbMC05QS1GYS1mXS8udGVzdChwYXJ0KSkge1xuICAgICAgcGFydCA9IGVuY29kZVVSSShwYXJ0KS5yZXBsYWNlKC8lNUIvZywgXCJbXCIpLnJlcGxhY2UoLyU1RC9nLCBcIl1cIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0O1xuICB9KS5qb2luKFwiXCIpO1xufVxuZnVuY3Rpb24gZW5jb2RlVW5yZXNlcnZlZChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBcIiVcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGtleSkge1xuICB2YWx1ZSA9IG9wZXJhdG9yID09PSBcIitcIiB8fCBvcGVyYXRvciA9PT0gXCIjXCIgPyBlbmNvZGVSZXNlcnZlZCh2YWx1ZSkgOiBlbmNvZGVVbnJlc2VydmVkKHZhbHVlKTtcbiAgaWYgKGtleSkge1xuICAgIHJldHVybiBlbmNvZGVVbnJlc2VydmVkKGtleSkgKyBcIj1cIiArIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdm9pZCAwICYmIHZhbHVlICE9PSBudWxsO1xufVxuZnVuY3Rpb24gaXNLZXlPcGVyYXRvcihvcGVyYXRvcikge1xuICByZXR1cm4gb3BlcmF0b3IgPT09IFwiO1wiIHx8IG9wZXJhdG9yID09PSBcIiZcIiB8fCBvcGVyYXRvciA9PT0gXCI/XCI7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIGtleSwgbW9kaWZpZXIpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dFtrZXldLCByZXN1bHQgPSBbXTtcbiAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUgIT09IFwiXCIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICBpZiAobW9kaWZpZXIgJiYgbW9kaWZpZXIgIT09IFwiKlwiKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHBhcnNlSW50KG1vZGlmaWVyLCAxMCkpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwgaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBcIlwiKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZS5maWx0ZXIoaXNEZWZpbmVkKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlMikge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICAgIGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZTIsIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpID8ga2V5IDogXCJcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZVtrXSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlW2tdLCBrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZS5maWx0ZXIoaXNEZWZpbmVkKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlMikge1xuICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlMikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWVba10pKSB7XG4gICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoaykpO1xuICAgICAgICAgICAgICB0bXAucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWVba10udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVucmVzZXJ2ZWQoa2V5KSArIFwiPVwiICsgdG1wLmpvaW4oXCIsXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0bXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2godG1wLmpvaW4oXCIsXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiO1wiKSB7XG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVbnJlc2VydmVkKGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiXCIgJiYgKG9wZXJhdG9yID09PSBcIiZcIiB8fCBvcGVyYXRvciA9PT0gXCI/XCIpKSB7XG4gICAgICByZXN1bHQucHVzaChlbmNvZGVVbnJlc2VydmVkKGtleSkgKyBcIj1cIik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmVzdWx0LnB1c2goXCJcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBwYXJzZVVybCh0ZW1wbGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGV4cGFuZDogZXhwYW5kLmJpbmQobnVsbCwgdGVtcGxhdGUpXG4gIH07XG59XG5mdW5jdGlvbiBleHBhbmQodGVtcGxhdGUsIGNvbnRleHQpIHtcbiAgdmFyIG9wZXJhdG9ycyA9IFtcIitcIiwgXCIjXCIsIFwiLlwiLCBcIi9cIiwgXCI7XCIsIFwiP1wiLCBcIiZcIl07XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKFxuICAgIC9cXHsoW15cXHtcXH1dKylcXH18KFteXFx7XFx9XSspL2csXG4gICAgZnVuY3Rpb24oXywgZXhwcmVzc2lvbiwgbGl0ZXJhbCkge1xuICAgICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgICAgbGV0IG9wZXJhdG9yID0gXCJcIjtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGlmIChvcGVyYXRvcnMuaW5kZXhPZihleHByZXNzaW9uLmNoYXJBdCgwKSkgIT09IC0xKSB7XG4gICAgICAgICAgb3BlcmF0b3IgPSBleHByZXNzaW9uLmNoYXJBdCgwKTtcbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwcmVzc2lvbi5zcGxpdCgvLC9nKS5mb3JFYWNoKGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG4gICAgICAgICAgdmFyIHRtcCA9IC8oW146XFwqXSopKD86OihcXGQrKXwoXFwqKSk/Ly5leGVjKHZhcmlhYmxlKTtcbiAgICAgICAgICB2YWx1ZXMucHVzaChnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIHRtcFsxXSwgdG1wWzJdIHx8IHRtcFszXSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wZXJhdG9yICYmIG9wZXJhdG9yICE9PSBcIitcIikge1xuICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSBcIixcIjtcbiAgICAgICAgICBpZiAob3BlcmF0b3IgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICBzZXBhcmF0b3IgPSBcIiZcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yICE9PSBcIiNcIikge1xuICAgICAgICAgICAgc2VwYXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCA/IG9wZXJhdG9yIDogXCJcIikgKyB2YWx1ZXMuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMuam9pbihcIixcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVSZXNlcnZlZChsaXRlcmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9wYXJzZS5qc1xuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICBsZXQgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKTtcbiAgbGV0IHVybCA9IChvcHRpb25zLnVybCB8fCBcIi9cIikucmVwbGFjZSgvOihbYS16XVxcdyspL2csIFwieyQxfVwiKTtcbiAgbGV0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmhlYWRlcnMpO1xuICBsZXQgYm9keTtcbiAgbGV0IHBhcmFtZXRlcnMgPSBvbWl0KG9wdGlvbnMsIFtcbiAgICBcIm1ldGhvZFwiLFxuICAgIFwiYmFzZVVybFwiLFxuICAgIFwidXJsXCIsXG4gICAgXCJoZWFkZXJzXCIsXG4gICAgXCJyZXF1ZXN0XCIsXG4gICAgXCJtZWRpYVR5cGVcIlxuICBdKTtcbiAgY29uc3QgdXJsVmFyaWFibGVOYW1lcyA9IGV4dHJhY3RVcmxWYXJpYWJsZU5hbWVzKHVybCk7XG4gIHVybCA9IHBhcnNlVXJsKHVybCkuZXhwYW5kKHBhcmFtZXRlcnMpO1xuICBpZiAoIS9eaHR0cC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gb3B0aW9ucy5iYXNlVXJsICsgdXJsO1xuICB9XG4gIGNvbnN0IG9taXR0ZWRQYXJhbWV0ZXJzID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKChvcHRpb24pID0+IHVybFZhcmlhYmxlTmFtZXMuaW5jbHVkZXMob3B0aW9uKSkuY29uY2F0KFwiYmFzZVVybFwiKTtcbiAgY29uc3QgcmVtYWluaW5nUGFyYW1ldGVycyA9IG9taXQocGFyYW1ldGVycywgb21pdHRlZFBhcmFtZXRlcnMpO1xuICBjb25zdCBpc0JpbmFyeVJlcXVlc3QgPSAvYXBwbGljYXRpb25cXC9vY3RldC1zdHJlYW0vaS50ZXN0KGhlYWRlcnMuYWNjZXB0KTtcbiAgaWYgKCFpc0JpbmFyeVJlcXVlc3QpIHtcbiAgICBpZiAob3B0aW9ucy5tZWRpYVR5cGUuZm9ybWF0KSB7XG4gICAgICBoZWFkZXJzLmFjY2VwdCA9IGhlYWRlcnMuYWNjZXB0LnNwbGl0KC8sLykubWFwKFxuICAgICAgICAoZm9ybWF0KSA9PiBmb3JtYXQucmVwbGFjZShcbiAgICAgICAgICAvYXBwbGljYXRpb25cXC92bmQoXFwuXFx3KykoXFwudjMpPyhcXC5cXHcrKT8oXFwranNvbik/JC8sXG4gICAgICAgICAgYGFwcGxpY2F0aW9uL3ZuZCQxJDIuJHtvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXR9YFxuICAgICAgICApXG4gICAgICApLmpvaW4oXCIsXCIpO1xuICAgIH1cbiAgICBpZiAodXJsLmVuZHNXaXRoKFwiL2dyYXBocWxcIikpIHtcbiAgICAgIGlmIChvcHRpb25zLm1lZGlhVHlwZS5wcmV2aWV3cz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdzRnJvbUFjY2VwdEhlYWRlciA9IGhlYWRlcnMuYWNjZXB0Lm1hdGNoKC9bXFx3LV0rKD89LXByZXZpZXcpL2cpIHx8IFtdO1xuICAgICAgICBoZWFkZXJzLmFjY2VwdCA9IHByZXZpZXdzRnJvbUFjY2VwdEhlYWRlci5jb25jYXQob3B0aW9ucy5tZWRpYVR5cGUucHJldmlld3MpLm1hcCgocHJldmlldykgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IG9wdGlvbnMubWVkaWFUeXBlLmZvcm1hdCA/IGAuJHtvcHRpb25zLm1lZGlhVHlwZS5mb3JtYXR9YCA6IFwiK2pzb25cIjtcbiAgICAgICAgICByZXR1cm4gYGFwcGxpY2F0aW9uL3ZuZC5naXRodWIuJHtwcmV2aWV3fS1wcmV2aWV3JHtmb3JtYXR9YDtcbiAgICAgICAgfSkuam9pbihcIixcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChbXCJHRVRcIiwgXCJIRUFEXCJdLmluY2x1ZGVzKG1ldGhvZCkpIHtcbiAgICB1cmwgPSBhZGRRdWVyeVBhcmFtZXRlcnModXJsLCByZW1haW5pbmdQYXJhbWV0ZXJzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoXCJkYXRhXCIgaW4gcmVtYWluaW5nUGFyYW1ldGVycykge1xuICAgICAgYm9keSA9IHJlbWFpbmluZ1BhcmFtZXRlcnMuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlbWFpbmluZ1BhcmFtZXRlcnMpLmxlbmd0aCkge1xuICAgICAgICBib2R5ID0gcmVtYWluaW5nUGFyYW1ldGVycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFoZWFkZXJzW1wiY29udGVudC10eXBlXCJdICYmIHR5cGVvZiBib2R5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuICB9XG4gIGlmIChbXCJQQVRDSFwiLCBcIlBVVFwiXS5pbmNsdWRlcyhtZXRob2QpICYmIHR5cGVvZiBib2R5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgYm9keSA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgeyBtZXRob2QsIHVybCwgaGVhZGVycyB9LFxuICAgIHR5cGVvZiBib2R5ICE9PSBcInVuZGVmaW5lZFwiID8geyBib2R5IH0gOiBudWxsLFxuICAgIG9wdGlvbnMucmVxdWVzdCA/IHsgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0IH0gOiBudWxsXG4gICk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9lbmRwb2ludC13aXRoLWRlZmF1bHRzLmpzXG5mdW5jdGlvbiBlbmRwb2ludFdpdGhEZWZhdWx0cyhkZWZhdWx0cywgcm91dGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHBhcnNlKG1lcmdlKGRlZmF1bHRzLCByb3V0ZSwgb3B0aW9ucykpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKG9sZERlZmF1bHRzLCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBERUZBVUxUUzIgPSBtZXJnZShvbGREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICBjb25zdCBlbmRwb2ludDIgPSBlbmRwb2ludFdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIERFRkFVTFRTMik7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGVuZHBvaW50Miwge1xuICAgIERFRkFVTFRTOiBERUZBVUxUUzIsXG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIERFRkFVTFRTMiksXG4gICAgbWVyZ2U6IG1lcmdlLmJpbmQobnVsbCwgREVGQVVMVFMyKSxcbiAgICBwYXJzZVxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgZW5kcG9pbnQgPSB3aXRoRGVmYXVsdHMobnVsbCwgREVGQVVMVFMpO1xuZXhwb3J0IHtcbiAgZW5kcG9pbnRcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiNy4wLjFcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmltcG9ydCB7IHJlcXVlc3QgYXMgUmVxdWVzdDIgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ3JhcGhxbC5qc1xuaW1wb3J0IHsgcmVxdWVzdCBhcyBSZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2Vycm9yLmpzXG5mdW5jdGlvbiBfYnVpbGRNZXNzYWdlRm9yUmVzcG9uc2VFcnJvcnMoZGF0YSkge1xuICByZXR1cm4gYFJlcXVlc3QgZmFpbGVkIGR1ZSB0byBmb2xsb3dpbmcgcmVzcG9uc2UgZXJyb3JzOlxuYCArIGRhdGEuZXJyb3JzLm1hcCgoZSkgPT4gYCAtICR7ZS5tZXNzYWdlfWApLmpvaW4oXCJcXG5cIik7XG59XG52YXIgR3JhcGhxbFJlc3BvbnNlRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocmVxdWVzdDIsIGhlYWRlcnMsIHJlc3BvbnNlKSB7XG4gICAgc3VwZXIoX2J1aWxkTWVzc2FnZUZvclJlc3BvbnNlRXJyb3JzKHJlc3BvbnNlKSk7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDI7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5uYW1lID0gXCJHcmFwaHFsUmVzcG9uc2VFcnJvclwiO1xuICAgIHRoaXMuZXJyb3JzID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHBrZy9kaXN0LXNyYy9ncmFwaHFsLmpzXG52YXIgTk9OX1ZBUklBQkxFX09QVElPTlMgPSBbXG4gIFwibWV0aG9kXCIsXG4gIFwiYmFzZVVybFwiLFxuICBcInVybFwiLFxuICBcImhlYWRlcnNcIixcbiAgXCJyZXF1ZXN0XCIsXG4gIFwicXVlcnlcIixcbiAgXCJtZWRpYVR5cGVcIlxuXTtcbnZhciBGT1JCSURERU5fVkFSSUFCTEVfT1BUSU9OUyA9IFtcInF1ZXJ5XCIsIFwibWV0aG9kXCIsIFwidXJsXCJdO1xudmFyIEdIRVNfVjNfU1VGRklYX1JFR0VYID0gL1xcL2FwaVxcL3YzXFwvPyQvO1xuZnVuY3Rpb24gZ3JhcGhxbChyZXF1ZXN0MiwgcXVlcnksIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiICYmIFwicXVlcnlcIiBpbiBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihgW0BvY3Rva2l0L2dyYXBocWxdIFwicXVlcnlcIiBjYW5ub3QgYmUgdXNlZCBhcyB2YXJpYWJsZSBuYW1lYClcbiAgICAgICk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICghRk9SQklEREVOX1ZBUklBQkxFX09QVElPTlMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgY29udGludWU7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgW0BvY3Rva2l0L2dyYXBocWxdIFwiJHtrZXl9XCIgY2Fubm90IGJlIHVzZWQgYXMgdmFyaWFibGUgbmFtZWBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFyc2VkT3B0aW9ucyA9IHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIiA/IE9iamVjdC5hc3NpZ24oeyBxdWVyeSB9LCBvcHRpb25zKSA6IHF1ZXJ5O1xuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5rZXlzKFxuICAgIHBhcnNlZE9wdGlvbnNcbiAgKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgaWYgKE5PTl9WQVJJQUJMRV9PUFRJT05TLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gcGFyc2VkT3B0aW9uc1trZXldO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHQudmFyaWFibGVzKSB7XG4gICAgICByZXN1bHQudmFyaWFibGVzID0ge307XG4gICAgfVxuICAgIHJlc3VsdC52YXJpYWJsZXNba2V5XSA9IHBhcnNlZE9wdGlvbnNba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG4gIGNvbnN0IGJhc2VVcmwgPSBwYXJzZWRPcHRpb25zLmJhc2VVcmwgfHwgcmVxdWVzdDIuZW5kcG9pbnQuREVGQVVMVFMuYmFzZVVybDtcbiAgaWYgKEdIRVNfVjNfU1VGRklYX1JFR0VYLnRlc3QoYmFzZVVybCkpIHtcbiAgICByZXF1ZXN0T3B0aW9ucy51cmwgPSBiYXNlVXJsLnJlcGxhY2UoR0hFU19WM19TVUZGSVhfUkVHRVgsIFwiL2FwaS9ncmFwaHFsXCIpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0MihyZXF1ZXN0T3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlc3BvbnNlLmhlYWRlcnMpKSB7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHJlc3BvbnNlLmhlYWRlcnNba2V5XTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBHcmFwaHFsUmVzcG9uc2VFcnJvcihcbiAgICAgICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHJlc3BvbnNlLmRhdGFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvd2l0aC1kZWZhdWx0cy5qc1xuZnVuY3Rpb24gd2l0aERlZmF1bHRzKHJlcXVlc3QyLCBuZXdEZWZhdWx0cykge1xuICBjb25zdCBuZXdSZXF1ZXN0ID0gcmVxdWVzdDIuZGVmYXVsdHMobmV3RGVmYXVsdHMpO1xuICBjb25zdCBuZXdBcGkgPSAocXVlcnksIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gZ3JhcGhxbChuZXdSZXF1ZXN0LCBxdWVyeSwgb3B0aW9ucyk7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0FwaSwge1xuICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBuZXdSZXF1ZXN0KSxcbiAgICBlbmRwb2ludDogbmV3UmVxdWVzdC5lbmRwb2ludFxuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgZ3JhcGhxbDIgPSB3aXRoRGVmYXVsdHMocmVxdWVzdCwge1xuICBoZWFkZXJzOiB7XG4gICAgXCJ1c2VyLWFnZW50XCI6IGBvY3Rva2l0LWdyYXBocWwuanMvJHtWRVJTSU9OfSAke2dldFVzZXJBZ2VudCgpfWBcbiAgfSxcbiAgbWV0aG9kOiBcIlBPU1RcIixcbiAgdXJsOiBcIi9ncmFwaHFsXCJcbn0pO1xuZnVuY3Rpb24gd2l0aEN1c3RvbVJlcXVlc3QoY3VzdG9tUmVxdWVzdCkge1xuICByZXR1cm4gd2l0aERlZmF1bHRzKGN1c3RvbVJlcXVlc3QsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIHVybDogXCIvZ3JhcGhxbFwiXG4gIH0pO1xufVxuZXhwb3J0IHtcbiAgR3JhcGhxbFJlc3BvbnNlRXJyb3IsXG4gIGdyYXBocWwyIGFzIGdyYXBocWwsXG4gIHdpdGhDdXN0b21SZXF1ZXN0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBkaXN0X3NyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChkaXN0X3NyY19leHBvcnRzLCB7XG4gIE9BdXRoQXBwOiAoKSA9PiBPQXV0aEFwcCxcbiAgY3JlYXRlQVdTTGFtYmRhQVBJR2F0ZXdheVYySGFuZGxlcjogKCkgPT4gY3JlYXRlQVdTTGFtYmRhQVBJR2F0ZXdheVYySGFuZGxlcixcbiAgY3JlYXRlTm9kZU1pZGRsZXdhcmU6ICgpID0+IGNyZWF0ZU5vZGVNaWRkbGV3YXJlLFxuICBjcmVhdGVXZWJXb3JrZXJIYW5kbGVyOiAoKSA9PiBjcmVhdGVXZWJXb3JrZXJIYW5kbGVyLFxuICBoYW5kbGVSZXF1ZXN0OiAoKSA9PiBoYW5kbGVSZXF1ZXN0LFxuICBzZW5kTm9kZVJlc3BvbnNlOiAoKSA9PiBzZW5kUmVzcG9uc2UsXG4gIHVua25vd25Sb3V0ZVJlc3BvbnNlOiAoKSA9PiB1bmtub3duUm91dGVSZXNwb25zZVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhkaXN0X3NyY19leHBvcnRzKTtcbnZhciBpbXBvcnRfYXV0aF9vYXV0aF9hcHAgPSByZXF1aXJlKFwiQG9jdG9raXQvYXV0aC1vYXV0aC1hcHBcIik7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiNi4wLjBcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2FkZC1ldmVudC1oYW5kbGVyLmpzXG5mdW5jdGlvbiBhZGRFdmVudEhhbmRsZXIoc3RhdGUsIGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV2ZW50TmFtZSkpIHtcbiAgICBmb3IgKGNvbnN0IHNpbmdsZUV2ZW50TmFtZSBvZiBldmVudE5hbWUpIHtcbiAgICAgIGFkZEV2ZW50SGFuZGxlcihzdGF0ZSwgc2luZ2xlRXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzdGF0ZS5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcbiAgICBzdGF0ZS5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuICBzdGF0ZS5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0ucHVzaChldmVudEhhbmRsZXIpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvb2F1dGgtYXBwLW9jdG9raXQuanNcbnZhciBpbXBvcnRfY29yZSA9IHJlcXVpcmUoXCJAb2N0b2tpdC9jb3JlXCIpO1xudmFyIGltcG9ydF91bml2ZXJzYWxfdXNlcl9hZ2VudCA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtdXNlci1hZ2VudFwiKTtcbnZhciBPQXV0aEFwcE9jdG9raXQgPSBpbXBvcnRfY29yZS5PY3Rva2l0LmRlZmF1bHRzKHtcbiAgdXNlckFnZW50OiBgb2N0b2tpdC1vYXV0aC1hcHAuanMvJHtWRVJTSU9OfSAkeygwLCBpbXBvcnRfdW5pdmVyc2FsX3VzZXJfYWdlbnQuZ2V0VXNlckFnZW50KSgpfWBcbn0pO1xuXG4vLyBwa2cvZGlzdC1zcmMvbWV0aG9kcy9nZXQtdXNlci1vY3Rva2l0LmpzXG52YXIgaW1wb3J0X2F1dGhfb2F1dGhfdXNlciA9IHJlcXVpcmUoXCJAb2N0b2tpdC9hdXRoLW9hdXRoLXVzZXJcIik7XG5cbi8vIHBrZy9kaXN0LXNyYy9lbWl0LWV2ZW50LmpzXG5hc3luYyBmdW5jdGlvbiBlbWl0RXZlbnQoc3RhdGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBuYW1lLCBhY3Rpb24gfSA9IGNvbnRleHQ7XG4gIGlmIChzdGF0ZS5ldmVudEhhbmRsZXJzW2Ake25hbWV9LiR7YWN0aW9ufWBdKSB7XG4gICAgZm9yIChjb25zdCBldmVudEhhbmRsZXIgb2Ygc3RhdGUuZXZlbnRIYW5kbGVyc1tgJHtuYW1lfS4ke2FjdGlvbn1gXSkge1xuICAgICAgYXdhaXQgZXZlbnRIYW5kbGVyKGNvbnRleHQpO1xuICAgIH1cbiAgfVxuICBpZiAoc3RhdGUuZXZlbnRIYW5kbGVyc1tuYW1lXSkge1xuICAgIGZvciAoY29uc3QgZXZlbnRIYW5kbGVyIG9mIHN0YXRlLmV2ZW50SGFuZGxlcnNbbmFtZV0pIHtcbiAgICAgIGF3YWl0IGV2ZW50SGFuZGxlcihjb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21ldGhvZHMvZ2V0LXVzZXItb2N0b2tpdC5qc1xuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck9jdG9raXRXaXRoU3RhdGUoc3RhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHN0YXRlLm9jdG9raXQuYXV0aCh7XG4gICAgdHlwZTogXCJvYXV0aC11c2VyXCIsXG4gICAgLi4ub3B0aW9ucyxcbiAgICBhc3luYyBmYWN0b3J5KG9wdGlvbnMyKSB7XG4gICAgICBjb25zdCBvY3Rva2l0ID0gbmV3IHN0YXRlLk9jdG9raXQoe1xuICAgICAgICBhdXRoU3RyYXRlZ3k6IGltcG9ydF9hdXRoX29hdXRoX3VzZXIuY3JlYXRlT0F1dGhVc2VyQXV0aCxcbiAgICAgICAgYXV0aDogb3B0aW9uczJcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYXV0aGVudGljYXRpb24gPSBhd2FpdCBvY3Rva2l0LmF1dGgoe1xuICAgICAgICB0eXBlOiBcImdldFwiXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGVtaXRFdmVudChzdGF0ZSwge1xuICAgICAgICBuYW1lOiBcInRva2VuXCIsXG4gICAgICAgIGFjdGlvbjogXCJjcmVhdGVkXCIsXG4gICAgICAgIHRva2VuOiBhdXRoZW50aWNhdGlvbi50b2tlbixcbiAgICAgICAgc2NvcGVzOiBhdXRoZW50aWNhdGlvbi5zY29wZXMsXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uLFxuICAgICAgICBvY3Rva2l0XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvY3Rva2l0O1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9tZXRob2RzL2dldC13ZWItZmxvdy1hdXRob3JpemF0aW9uLXVybC5qc1xudmFyIE9BdXRoTWV0aG9kcyA9IF9fdG9FU00ocmVxdWlyZShcIkBvY3Rva2l0L29hdXRoLW1ldGhvZHNcIikpO1xuZnVuY3Rpb24gZ2V0V2ViRmxvd0F1dGhvcml6YXRpb25VcmxXaXRoU3RhdGUoc3RhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0aW9uc1dpdGhEZWZhdWx0cyA9IHtcbiAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgcmVxdWVzdDogc3RhdGUub2N0b2tpdC5yZXF1ZXN0LFxuICAgIC4uLm9wdGlvbnMsXG4gICAgYWxsb3dTaWdudXA6IHN0YXRlLmFsbG93U2lnbnVwID8/IG9wdGlvbnMuYWxsb3dTaWdudXAsXG4gICAgcmVkaXJlY3RVcmw6IG9wdGlvbnMucmVkaXJlY3RVcmwgPz8gc3RhdGUucmVkaXJlY3RVcmwsXG4gICAgc2NvcGVzOiBvcHRpb25zLnNjb3BlcyA/PyBzdGF0ZS5kZWZhdWx0U2NvcGVzXG4gIH07XG4gIHJldHVybiBPQXV0aE1ldGhvZHMuZ2V0V2ViRmxvd0F1dGhvcml6YXRpb25Vcmwoe1xuICAgIGNsaWVudFR5cGU6IHN0YXRlLmNsaWVudFR5cGUsXG4gICAgLi4ub3B0aW9uc1dpdGhEZWZhdWx0c1xuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21ldGhvZHMvY3JlYXRlLXRva2VuLmpzXG52YXIgT0F1dGhBcHBBdXRoID0gX190b0VTTShyZXF1aXJlKFwiQG9jdG9raXQvYXV0aC1vYXV0aC1hcHBcIikpO1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9rZW5XaXRoU3RhdGUoc3RhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSBhd2FpdCBzdGF0ZS5vY3Rva2l0LmF1dGgoe1xuICAgIHR5cGU6IFwib2F1dGgtdXNlclwiLFxuICAgIC4uLm9wdGlvbnNcbiAgfSk7XG4gIGF3YWl0IGVtaXRFdmVudChzdGF0ZSwge1xuICAgIG5hbWU6IFwidG9rZW5cIixcbiAgICBhY3Rpb246IFwiY3JlYXRlZFwiLFxuICAgIHRva2VuOiBhdXRoZW50aWNhdGlvbi50b2tlbixcbiAgICBzY29wZXM6IGF1dGhlbnRpY2F0aW9uLnNjb3BlcyxcbiAgICBhdXRoZW50aWNhdGlvbixcbiAgICBvY3Rva2l0OiBuZXcgc3RhdGUuT2N0b2tpdCh7XG4gICAgICBhdXRoU3RyYXRlZ3k6IE9BdXRoQXBwQXV0aC5jcmVhdGVPQXV0aFVzZXJBdXRoLFxuICAgICAgYXV0aDoge1xuICAgICAgICBjbGllbnRUeXBlOiBzdGF0ZS5jbGllbnRUeXBlLFxuICAgICAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgICAgIGNsaWVudFNlY3JldDogc3RhdGUuY2xpZW50U2VjcmV0LFxuICAgICAgICB0b2tlbjogYXV0aGVudGljYXRpb24udG9rZW4sXG4gICAgICAgIHNjb3BlczogYXV0aGVudGljYXRpb24uc2NvcGVzLFxuICAgICAgICByZWZyZXNoVG9rZW46IGF1dGhlbnRpY2F0aW9uLnJlZnJlc2hUb2tlbixcbiAgICAgICAgZXhwaXJlc0F0OiBhdXRoZW50aWNhdGlvbi5leHBpcmVzQXQsXG4gICAgICAgIHJlZnJlc2hUb2tlbkV4cGlyZXNBdDogYXV0aGVudGljYXRpb24ucmVmcmVzaFRva2VuRXhwaXJlc0F0XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG4gIHJldHVybiB7IGF1dGhlbnRpY2F0aW9uIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9tZXRob2RzL2NoZWNrLXRva2VuLmpzXG52YXIgT0F1dGhNZXRob2RzMiA9IF9fdG9FU00ocmVxdWlyZShcIkBvY3Rva2l0L29hdXRoLW1ldGhvZHNcIikpO1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tUb2tlbldpdGhTdGF0ZShzdGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBPQXV0aE1ldGhvZHMyLmNoZWNrVG9rZW4oe1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3Igbm90IHdvcnRoIHRoZSBleHRyYSBjb2RlIHRvIGFwcGVhc2UgVFNcbiAgICBjbGllbnRUeXBlOiBzdGF0ZS5jbGllbnRUeXBlLFxuICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICBjbGllbnRTZWNyZXQ6IHN0YXRlLmNsaWVudFNlY3JldCxcbiAgICByZXF1ZXN0OiBzdGF0ZS5vY3Rva2l0LnJlcXVlc3QsXG4gICAgLi4ub3B0aW9uc1xuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihyZXN1bHQuYXV0aGVudGljYXRpb24sIHsgdHlwZTogXCJ0b2tlblwiLCB0b2tlblR5cGU6IFwib2F1dGhcIiB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21ldGhvZHMvcmVzZXQtdG9rZW4uanNcbnZhciBPQXV0aE1ldGhvZHMzID0gX190b0VTTShyZXF1aXJlKFwiQG9jdG9raXQvb2F1dGgtbWV0aG9kc1wiKSk7XG52YXIgaW1wb3J0X2F1dGhfb2F1dGhfdXNlcjIgPSByZXF1aXJlKFwiQG9jdG9raXQvYXV0aC1vYXV0aC11c2VyXCIpO1xuYXN5bmMgZnVuY3Rpb24gcmVzZXRUb2tlbldpdGhTdGF0ZShzdGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBvcHRpb25zV2l0aERlZmF1bHRzID0ge1xuICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICBjbGllbnRTZWNyZXQ6IHN0YXRlLmNsaWVudFNlY3JldCxcbiAgICByZXF1ZXN0OiBzdGF0ZS5vY3Rva2l0LnJlcXVlc3QsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBpZiAoc3RhdGUuY2xpZW50VHlwZSA9PT0gXCJvYXV0aC1hcHBcIikge1xuICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IE9BdXRoTWV0aG9kczMucmVzZXRUb2tlbih7XG4gICAgICBjbGllbnRUeXBlOiBcIm9hdXRoLWFwcFwiLFxuICAgICAgLi4ub3B0aW9uc1dpdGhEZWZhdWx0c1xuICAgIH0pO1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uMiA9IE9iamVjdC5hc3NpZ24ocmVzcG9uc2UyLmF1dGhlbnRpY2F0aW9uLCB7XG4gICAgICB0eXBlOiBcInRva2VuXCIsXG4gICAgICB0b2tlblR5cGU6IFwib2F1dGhcIlxuICAgIH0pO1xuICAgIGF3YWl0IGVtaXRFdmVudChzdGF0ZSwge1xuICAgICAgbmFtZTogXCJ0b2tlblwiLFxuICAgICAgYWN0aW9uOiBcInJlc2V0XCIsXG4gICAgICB0b2tlbjogcmVzcG9uc2UyLmF1dGhlbnRpY2F0aW9uLnRva2VuLFxuICAgICAgc2NvcGVzOiByZXNwb25zZTIuYXV0aGVudGljYXRpb24uc2NvcGVzIHx8IHZvaWQgMCxcbiAgICAgIGF1dGhlbnRpY2F0aW9uOiBhdXRoZW50aWNhdGlvbjIsXG4gICAgICBvY3Rva2l0OiBuZXcgc3RhdGUuT2N0b2tpdCh7XG4gICAgICAgIGF1dGhTdHJhdGVneTogaW1wb3J0X2F1dGhfb2F1dGhfdXNlcjIuY3JlYXRlT0F1dGhVc2VyQXV0aCxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIGNsaWVudFR5cGU6IHN0YXRlLmNsaWVudFR5cGUsXG4gICAgICAgICAgY2xpZW50SWQ6IHN0YXRlLmNsaWVudElkLFxuICAgICAgICAgIGNsaWVudFNlY3JldDogc3RhdGUuY2xpZW50U2VjcmV0LFxuICAgICAgICAgIHRva2VuOiByZXNwb25zZTIuYXV0aGVudGljYXRpb24udG9rZW4sXG4gICAgICAgICAgc2NvcGVzOiByZXNwb25zZTIuYXV0aGVudGljYXRpb24uc2NvcGVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgLi4ucmVzcG9uc2UyLCBhdXRoZW50aWNhdGlvbjogYXV0aGVudGljYXRpb24yIH07XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBPQXV0aE1ldGhvZHMzLnJlc2V0VG9rZW4oe1xuICAgIGNsaWVudFR5cGU6IFwiZ2l0aHViLWFwcFwiLFxuICAgIC4uLm9wdGlvbnNXaXRoRGVmYXVsdHNcbiAgfSk7XG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uID0gT2JqZWN0LmFzc2lnbihyZXNwb25zZS5hdXRoZW50aWNhdGlvbiwge1xuICAgIHR5cGU6IFwidG9rZW5cIixcbiAgICB0b2tlblR5cGU6IFwib2F1dGhcIlxuICB9KTtcbiAgYXdhaXQgZW1pdEV2ZW50KHN0YXRlLCB7XG4gICAgbmFtZTogXCJ0b2tlblwiLFxuICAgIGFjdGlvbjogXCJyZXNldFwiLFxuICAgIHRva2VuOiByZXNwb25zZS5hdXRoZW50aWNhdGlvbi50b2tlbixcbiAgICBhdXRoZW50aWNhdGlvbixcbiAgICBvY3Rva2l0OiBuZXcgc3RhdGUuT2N0b2tpdCh7XG4gICAgICBhdXRoU3RyYXRlZ3k6IGltcG9ydF9hdXRoX29hdXRoX3VzZXIyLmNyZWF0ZU9BdXRoVXNlckF1dGgsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIGNsaWVudFR5cGU6IHN0YXRlLmNsaWVudFR5cGUsXG4gICAgICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBzdGF0ZS5jbGllbnRTZWNyZXQsXG4gICAgICAgIHRva2VuOiByZXNwb25zZS5hdXRoZW50aWNhdGlvbi50b2tlblxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuICByZXR1cm4geyAuLi5yZXNwb25zZSwgYXV0aGVudGljYXRpb24gfTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21ldGhvZHMvcmVmcmVzaC10b2tlbi5qc1xudmFyIE9BdXRoTWV0aG9kczQgPSBfX3RvRVNNKHJlcXVpcmUoXCJAb2N0b2tpdC9vYXV0aC1tZXRob2RzXCIpKTtcbnZhciBpbXBvcnRfYXV0aF9vYXV0aF91c2VyMyA9IHJlcXVpcmUoXCJAb2N0b2tpdC9hdXRoLW9hdXRoLXVzZXJcIik7XG5hc3luYyBmdW5jdGlvbiByZWZyZXNoVG9rZW5XaXRoU3RhdGUoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0YXRlLmNsaWVudFR5cGUgPT09IFwib2F1dGgtYXBwXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIltAb2N0b2tpdC9vYXV0aC1hcHBdIGFwcC5yZWZyZXNoVG9rZW4oKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBPQXV0aCBBcHBzXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgT0F1dGhNZXRob2RzNC5yZWZyZXNoVG9rZW4oe1xuICAgIGNsaWVudFR5cGU6IFwiZ2l0aHViLWFwcFwiLFxuICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICBjbGllbnRTZWNyZXQ6IHN0YXRlLmNsaWVudFNlY3JldCxcbiAgICByZXF1ZXN0OiBzdGF0ZS5vY3Rva2l0LnJlcXVlc3QsXG4gICAgcmVmcmVzaFRva2VuOiBvcHRpb25zLnJlZnJlc2hUb2tlblxuICB9KTtcbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSBPYmplY3QuYXNzaWduKHJlc3BvbnNlLmF1dGhlbnRpY2F0aW9uLCB7XG4gICAgdHlwZTogXCJ0b2tlblwiLFxuICAgIHRva2VuVHlwZTogXCJvYXV0aFwiXG4gIH0pO1xuICBhd2FpdCBlbWl0RXZlbnQoc3RhdGUsIHtcbiAgICBuYW1lOiBcInRva2VuXCIsXG4gICAgYWN0aW9uOiBcInJlZnJlc2hlZFwiLFxuICAgIHRva2VuOiByZXNwb25zZS5hdXRoZW50aWNhdGlvbi50b2tlbixcbiAgICBhdXRoZW50aWNhdGlvbixcbiAgICBvY3Rva2l0OiBuZXcgc3RhdGUuT2N0b2tpdCh7XG4gICAgICBhdXRoU3RyYXRlZ3k6IGltcG9ydF9hdXRoX29hdXRoX3VzZXIzLmNyZWF0ZU9BdXRoVXNlckF1dGgsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIGNsaWVudFR5cGU6IHN0YXRlLmNsaWVudFR5cGUsXG4gICAgICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBzdGF0ZS5jbGllbnRTZWNyZXQsXG4gICAgICAgIHRva2VuOiByZXNwb25zZS5hdXRoZW50aWNhdGlvbi50b2tlblxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuICByZXR1cm4geyAuLi5yZXNwb25zZSwgYXV0aGVudGljYXRpb24gfTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21ldGhvZHMvc2NvcGUtdG9rZW4uanNcbnZhciBPQXV0aE1ldGhvZHM1ID0gX190b0VTTShyZXF1aXJlKFwiQG9jdG9raXQvb2F1dGgtbWV0aG9kc1wiKSk7XG52YXIgaW1wb3J0X2F1dGhfb2F1dGhfdXNlcjQgPSByZXF1aXJlKFwiQG9jdG9raXQvYXV0aC1vYXV0aC11c2VyXCIpO1xuYXN5bmMgZnVuY3Rpb24gc2NvcGVUb2tlbldpdGhTdGF0ZShzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAoc3RhdGUuY2xpZW50VHlwZSA9PT0gXCJvYXV0aC1hcHBcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiW0BvY3Rva2l0L29hdXRoLWFwcF0gYXBwLnNjb3BlVG9rZW4oKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBPQXV0aCBBcHBzXCJcbiAgICApO1xuICB9XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgT0F1dGhNZXRob2RzNS5zY29wZVRva2VuKHtcbiAgICBjbGllbnRUeXBlOiBcImdpdGh1Yi1hcHBcIixcbiAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgY2xpZW50U2VjcmV0OiBzdGF0ZS5jbGllbnRTZWNyZXQsXG4gICAgcmVxdWVzdDogc3RhdGUub2N0b2tpdC5yZXF1ZXN0LFxuICAgIC4uLm9wdGlvbnNcbiAgfSk7XG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uID0gT2JqZWN0LmFzc2lnbihyZXNwb25zZS5hdXRoZW50aWNhdGlvbiwge1xuICAgIHR5cGU6IFwidG9rZW5cIixcbiAgICB0b2tlblR5cGU6IFwib2F1dGhcIlxuICB9KTtcbiAgYXdhaXQgZW1pdEV2ZW50KHN0YXRlLCB7XG4gICAgbmFtZTogXCJ0b2tlblwiLFxuICAgIGFjdGlvbjogXCJzY29wZWRcIixcbiAgICB0b2tlbjogcmVzcG9uc2UuYXV0aGVudGljYXRpb24udG9rZW4sXG4gICAgYXV0aGVudGljYXRpb24sXG4gICAgb2N0b2tpdDogbmV3IHN0YXRlLk9jdG9raXQoe1xuICAgICAgYXV0aFN0cmF0ZWd5OiBpbXBvcnRfYXV0aF9vYXV0aF91c2VyNC5jcmVhdGVPQXV0aFVzZXJBdXRoLFxuICAgICAgYXV0aDoge1xuICAgICAgICBjbGllbnRUeXBlOiBzdGF0ZS5jbGllbnRUeXBlLFxuICAgICAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgICAgIGNsaWVudFNlY3JldDogc3RhdGUuY2xpZW50U2VjcmV0LFxuICAgICAgICB0b2tlbjogcmVzcG9uc2UuYXV0aGVudGljYXRpb24udG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbiAgcmV0dXJuIHsgLi4ucmVzcG9uc2UsIGF1dGhlbnRpY2F0aW9uIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9tZXRob2RzL2RlbGV0ZS10b2tlbi5qc1xudmFyIE9BdXRoTWV0aG9kczYgPSBfX3RvRVNNKHJlcXVpcmUoXCJAb2N0b2tpdC9vYXV0aC1tZXRob2RzXCIpKTtcbnZhciBpbXBvcnRfYXV0aF91bmF1dGhlbnRpY2F0ZWQgPSByZXF1aXJlKFwiQG9jdG9raXQvYXV0aC11bmF1dGhlbnRpY2F0ZWRcIik7XG5hc3luYyBmdW5jdGlvbiBkZWxldGVUb2tlbldpdGhTdGF0ZShzdGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBvcHRpb25zV2l0aERlZmF1bHRzID0ge1xuICAgIGNsaWVudElkOiBzdGF0ZS5jbGllbnRJZCxcbiAgICBjbGllbnRTZWNyZXQ6IHN0YXRlLmNsaWVudFNlY3JldCxcbiAgICByZXF1ZXN0OiBzdGF0ZS5vY3Rva2l0LnJlcXVlc3QsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCByZXNwb25zZSA9IHN0YXRlLmNsaWVudFR5cGUgPT09IFwib2F1dGgtYXBwXCIgPyBhd2FpdCBPQXV0aE1ldGhvZHM2LmRlbGV0ZVRva2VuKHtcbiAgICBjbGllbnRUeXBlOiBcIm9hdXRoLWFwcFwiLFxuICAgIC4uLm9wdGlvbnNXaXRoRGVmYXVsdHNcbiAgfSkgOiAoXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICBhd2FpdCBPQXV0aE1ldGhvZHM2LmRlbGV0ZVRva2VuKHtcbiAgICAgIGNsaWVudFR5cGU6IFwiZ2l0aHViLWFwcFwiLFxuICAgICAgLi4ub3B0aW9uc1dpdGhEZWZhdWx0c1xuICAgIH0pXG4gICk7XG4gIGF3YWl0IGVtaXRFdmVudChzdGF0ZSwge1xuICAgIG5hbWU6IFwidG9rZW5cIixcbiAgICBhY3Rpb246IFwiZGVsZXRlZFwiLFxuICAgIHRva2VuOiBvcHRpb25zLnRva2VuLFxuICAgIG9jdG9raXQ6IG5ldyBzdGF0ZS5PY3Rva2l0KHtcbiAgICAgIGF1dGhTdHJhdGVneTogaW1wb3J0X2F1dGhfdW5hdXRoZW50aWNhdGVkLmNyZWF0ZVVuYXV0aGVudGljYXRlZEF1dGgsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHJlYXNvbjogYEhhbmRsaW5nIFwidG9rZW4uZGVsZXRlZFwiIGV2ZW50LiBUaGUgYWNjZXNzIGZvciB0aGUgdG9rZW4gaGFzIGJlZW4gcmV2b2tlZC5gXG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21ldGhvZHMvZGVsZXRlLWF1dGhvcml6YXRpb24uanNcbnZhciBPQXV0aE1ldGhvZHM3ID0gX190b0VTTShyZXF1aXJlKFwiQG9jdG9raXQvb2F1dGgtbWV0aG9kc1wiKSk7XG52YXIgaW1wb3J0X2F1dGhfdW5hdXRoZW50aWNhdGVkMiA9IHJlcXVpcmUoXCJAb2N0b2tpdC9hdXRoLXVuYXV0aGVudGljYXRlZFwiKTtcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUF1dGhvcml6YXRpb25XaXRoU3RhdGUoc3RhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0aW9uc1dpdGhEZWZhdWx0cyA9IHtcbiAgICBjbGllbnRJZDogc3RhdGUuY2xpZW50SWQsXG4gICAgY2xpZW50U2VjcmV0OiBzdGF0ZS5jbGllbnRTZWNyZXQsXG4gICAgcmVxdWVzdDogc3RhdGUub2N0b2tpdC5yZXF1ZXN0LFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3QgcmVzcG9uc2UgPSBzdGF0ZS5jbGllbnRUeXBlID09PSBcIm9hdXRoLWFwcFwiID8gYXdhaXQgT0F1dGhNZXRob2RzNy5kZWxldGVBdXRob3JpemF0aW9uKHtcbiAgICBjbGllbnRUeXBlOiBcIm9hdXRoLWFwcFwiLFxuICAgIC4uLm9wdGlvbnNXaXRoRGVmYXVsdHNcbiAgfSkgOiAoXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICBhd2FpdCBPQXV0aE1ldGhvZHM3LmRlbGV0ZUF1dGhvcml6YXRpb24oe1xuICAgICAgY2xpZW50VHlwZTogXCJnaXRodWItYXBwXCIsXG4gICAgICAuLi5vcHRpb25zV2l0aERlZmF1bHRzXG4gICAgfSlcbiAgKTtcbiAgYXdhaXQgZW1pdEV2ZW50KHN0YXRlLCB7XG4gICAgbmFtZTogXCJ0b2tlblwiLFxuICAgIGFjdGlvbjogXCJkZWxldGVkXCIsXG4gICAgdG9rZW46IG9wdGlvbnMudG9rZW4sXG4gICAgb2N0b2tpdDogbmV3IHN0YXRlLk9jdG9raXQoe1xuICAgICAgYXV0aFN0cmF0ZWd5OiBpbXBvcnRfYXV0aF91bmF1dGhlbnRpY2F0ZWQyLmNyZWF0ZVVuYXV0aGVudGljYXRlZEF1dGgsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHJlYXNvbjogYEhhbmRsaW5nIFwidG9rZW4uZGVsZXRlZFwiIGV2ZW50LiBUaGUgYWNjZXNzIGZvciB0aGUgdG9rZW4gaGFzIGJlZW4gcmV2b2tlZC5gXG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG4gIGF3YWl0IGVtaXRFdmVudChzdGF0ZSwge1xuICAgIG5hbWU6IFwiYXV0aG9yaXphdGlvblwiLFxuICAgIGFjdGlvbjogXCJkZWxldGVkXCIsXG4gICAgdG9rZW46IG9wdGlvbnMudG9rZW4sXG4gICAgb2N0b2tpdDogbmV3IHN0YXRlLk9jdG9raXQoe1xuICAgICAgYXV0aFN0cmF0ZWd5OiBpbXBvcnRfYXV0aF91bmF1dGhlbnRpY2F0ZWQyLmNyZWF0ZVVuYXV0aGVudGljYXRlZEF1dGgsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHJlYXNvbjogYEhhbmRsaW5nIFwiYXV0aG9yaXphdGlvbi5kZWxldGVkXCIgZXZlbnQuIFRoZSBhY2Nlc3MgZm9yIHRoZSBhcHAgaGFzIGJlZW4gcmV2b2tlZC5gXG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21pZGRsZXdhcmUvdW5rbm93bi1yb3V0ZS1yZXNwb25zZS5qc1xuZnVuY3Rpb24gdW5rbm93blJvdXRlUmVzcG9uc2UocmVxdWVzdCkge1xuICByZXR1cm4ge1xuICAgIHN0YXR1czogNDA0LFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB0ZXh0OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlcnJvcjogYFVua25vd24gcm91dGU6ICR7cmVxdWVzdC5tZXRob2R9ICR7cmVxdWVzdC51cmx9YFxuICAgIH0pXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL2hhbmRsZS1yZXF1ZXN0LmpzXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KGFwcCwgeyBwYXRoUHJlZml4ID0gXCIvYXBpL2dpdGh1Yi9vYXV0aFwiIH0sIHJlcXVlc3QpIHtcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIk9QVElPTlNcIikge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjogXCIqXCIsXG4gICAgICAgIFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiOiBcIipcIixcbiAgICAgICAgXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI6IFwiQ29udGVudC1UeXBlLCBVc2VyLUFnZW50LCBBdXRob3JpemF0aW9uXCJcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGxldCB7IHBhdGhuYW1lIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBcImh0dHA6Ly9sb2NhbGhvc3RcIik7XG4gIGlmICghcGF0aG5hbWUuc3RhcnRzV2l0aChgJHtwYXRoUHJlZml4fS9gKSkge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5zbGljZShwYXRoUHJlZml4Lmxlbmd0aCArIDEpO1xuICBjb25zdCByb3V0ZSA9IFtyZXF1ZXN0Lm1ldGhvZCwgcGF0aG5hbWVdLmpvaW4oXCIgXCIpO1xuICBjb25zdCByb3V0ZXMgPSB7XG4gICAgZ2V0TG9naW46IGBHRVQgbG9naW5gLFxuICAgIGdldENhbGxiYWNrOiBgR0VUIGNhbGxiYWNrYCxcbiAgICBjcmVhdGVUb2tlbjogYFBPU1QgdG9rZW5gLFxuICAgIGdldFRva2VuOiBgR0VUIHRva2VuYCxcbiAgICBwYXRjaFRva2VuOiBgUEFUQ0ggdG9rZW5gLFxuICAgIHBhdGNoUmVmcmVzaFRva2VuOiBgUEFUQ0ggcmVmcmVzaC10b2tlbmAsXG4gICAgc2NvcGVUb2tlbjogYFBPU1QgdG9rZW4vc2NvcGVkYCxcbiAgICBkZWxldGVUb2tlbjogYERFTEVURSB0b2tlbmAsXG4gICAgZGVsZXRlR3JhbnQ6IGBERUxFVEUgZ3JhbnRgXG4gIH07XG4gIGlmICghT2JqZWN0LnZhbHVlcyhyb3V0ZXMpLmluY2x1ZGVzKHJvdXRlKSkge1xuICAgIHJldHVybiB1bmtub3duUm91dGVSZXNwb25zZShyZXF1ZXN0KTtcbiAgfVxuICBsZXQganNvbjtcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVxdWVzdC50ZXh0KCk7XG4gICAganNvbiA9IHRleHQgPyBKU09OLnBhcnNlKHRleHQpIDoge307XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogNDAwLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjogXCIqXCJcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVycm9yOiBcIltAb2N0b2tpdC9vYXV0aC1hcHBdIHJlcXVlc3QgZXJyb3JcIlxuICAgICAgfSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBcImh0dHA6Ly9sb2NhbGhvc3RcIik7XG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmZyb21FbnRyaWVzKHNlYXJjaFBhcmFtcyk7XG4gIGNvbnN0IGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnM7XG4gIHRyeSB7XG4gICAgaWYgKHJvdXRlID09PSByb3V0ZXMuZ2V0TG9naW4pIHtcbiAgICAgIGNvbnN0IHsgdXJsIH0gPSBhcHAuZ2V0V2ViRmxvd0F1dGhvcml6YXRpb25Vcmwoe1xuICAgICAgICBzdGF0ZTogcXVlcnkuc3RhdGUsXG4gICAgICAgIHNjb3BlczogcXVlcnkuc2NvcGVzID8gcXVlcnkuc2NvcGVzLnNwbGl0KFwiLFwiKSA6IHZvaWQgMCxcbiAgICAgICAgYWxsb3dTaWdudXA6IHF1ZXJ5LmFsbG93U2lnbnVwID8gcXVlcnkuYWxsb3dTaWdudXAgPT09IFwidHJ1ZVwiIDogdm9pZCAwLFxuICAgICAgICByZWRpcmVjdFVybDogcXVlcnkucmVkaXJlY3RVcmxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiAzMDIsIGhlYWRlcnM6IHsgbG9jYXRpb246IHVybCB9IH07XG4gICAgfVxuICAgIGlmIChyb3V0ZSA9PT0gcm91dGVzLmdldENhbGxiYWNrKSB7XG4gICAgICBpZiAocXVlcnkuZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBbQG9jdG9raXQvb2F1dGgtYXBwXSAke3F1ZXJ5LmVycm9yfSAke3F1ZXJ5LmVycm9yX2Rlc2NyaXB0aW9ufWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghcXVlcnkuY29kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tAb2N0b2tpdC9vYXV0aC1hcHBdIFwiY29kZVwiIHBhcmFtZXRlciBpcyByZXF1aXJlZCcpO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBhdXRoZW50aWNhdGlvbjogeyB0b2tlbjogdG9rZW4yIH1cbiAgICAgIH0gPSBhd2FpdCBhcHAuY3JlYXRlVG9rZW4oe1xuICAgICAgICBjb2RlOiBxdWVyeS5jb2RlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJ0ZXh0L2h0bWxcIlxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiBgPGgxPlRva2VuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5PC9oMT5cblxuPHA+WW91ciB0b2tlbiBpczogPHN0cm9uZz4ke3Rva2VuMn08L3N0cm9uZz4uIENvcHkgaXQgbm93IGFzIGl0IGNhbm5vdCBiZSBzaG93biBhZ2Fpbi48L3A+YFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHJvdXRlID09PSByb3V0ZXMuY3JlYXRlVG9rZW4pIHtcbiAgICAgIGNvbnN0IHsgY29kZSwgcmVkaXJlY3RVcmwgfSA9IGpzb247XG4gICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQG9jdG9raXQvb2F1dGgtYXBwXSBcImNvZGVcIiBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcC5jcmVhdGVUb2tlbih7XG4gICAgICAgIGNvZGUsXG4gICAgICAgIHJlZGlyZWN0VXJsXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSByZXN1bHQuYXV0aGVudGljYXRpb24uY2xpZW50U2VjcmV0O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiAyMDEsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpblwiOiBcIipcIlxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiBKU09OLnN0cmluZ2lmeShyZXN1bHQpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocm91dGUgPT09IHJvdXRlcy5nZXRUb2tlbikge1xuICAgICAgY29uc3QgdG9rZW4yID0gaGVhZGVycy5hdXRob3JpemF0aW9uPy5zdWJzdHIoXCJ0b2tlbiBcIi5sZW5ndGgpO1xuICAgICAgaWYgKCF0b2tlbjIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdbQG9jdG9raXQvb2F1dGgtYXBwXSBcIkF1dGhvcml6YXRpb25cIiBoZWFkZXIgaXMgcmVxdWlyZWQnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHAuY2hlY2tUb2tlbih7XG4gICAgICAgIHRva2VuOiB0b2tlbjJcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIHJlc3VsdC5hdXRoZW50aWNhdGlvbi5jbGllbnRTZWNyZXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI6IFwiKlwiXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChyb3V0ZSA9PT0gcm91dGVzLnBhdGNoVG9rZW4pIHtcbiAgICAgIGNvbnN0IHRva2VuMiA9IGhlYWRlcnMuYXV0aG9yaXphdGlvbj8uc3Vic3RyKFwidG9rZW4gXCIubGVuZ3RoKTtcbiAgICAgIGlmICghdG9rZW4yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnW0BvY3Rva2l0L29hdXRoLWFwcF0gXCJBdXRob3JpemF0aW9uXCIgaGVhZGVyIGlzIHJlcXVpcmVkJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwLnJlc2V0VG9rZW4oeyB0b2tlbjogdG9rZW4yIH0pO1xuICAgICAgZGVsZXRlIHJlc3VsdC5hdXRoZW50aWNhdGlvbi5jbGllbnRTZWNyZXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI6IFwiKlwiXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChyb3V0ZSA9PT0gcm91dGVzLnBhdGNoUmVmcmVzaFRva2VuKSB7XG4gICAgICBjb25zdCB0b2tlbjIgPSBoZWFkZXJzLmF1dGhvcml6YXRpb24/LnN1YnN0cihcInRva2VuIFwiLmxlbmd0aCk7XG4gICAgICBpZiAoIXRva2VuMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1tAb2N0b2tpdC9vYXV0aC1hcHBdIFwiQXV0aG9yaXphdGlvblwiIGhlYWRlciBpcyByZXF1aXJlZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4yIH0gPSBqc29uO1xuICAgICAgaWYgKCFyZWZyZXNoVG9rZW4yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBcIltAb2N0b2tpdC9vYXV0aC1hcHBdIHJlZnJlc2hUb2tlbiBtdXN0IGJlIHNlbnQgaW4gcmVxdWVzdCBib2R5XCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcC5yZWZyZXNoVG9rZW4oeyByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbjIgfSk7XG4gICAgICBkZWxldGUgcmVzdWx0LmF1dGhlbnRpY2F0aW9uLmNsaWVudFNlY3JldDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjogXCIqXCJcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDogSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHJvdXRlID09PSByb3V0ZXMuc2NvcGVUb2tlbikge1xuICAgICAgY29uc3QgdG9rZW4yID0gaGVhZGVycy5hdXRob3JpemF0aW9uPy5zdWJzdHIoXCJ0b2tlbiBcIi5sZW5ndGgpO1xuICAgICAgaWYgKCF0b2tlbjIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdbQG9jdG9raXQvb2F1dGgtYXBwXSBcIkF1dGhvcml6YXRpb25cIiBoZWFkZXIgaXMgcmVxdWlyZWQnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHAuc2NvcGVUb2tlbih7XG4gICAgICAgIHRva2VuOiB0b2tlbjIsXG4gICAgICAgIC4uLmpzb25cbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIHJlc3VsdC5hdXRoZW50aWNhdGlvbi5jbGllbnRTZWNyZXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI6IFwiKlwiXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChyb3V0ZSA9PT0gcm91dGVzLmRlbGV0ZVRva2VuKSB7XG4gICAgICBjb25zdCB0b2tlbjIgPSBoZWFkZXJzLmF1dGhvcml6YXRpb24/LnN1YnN0cihcInRva2VuIFwiLmxlbmd0aCk7XG4gICAgICBpZiAoIXRva2VuMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1tAb2N0b2tpdC9vYXV0aC1hcHBdIFwiQXV0aG9yaXphdGlvblwiIGhlYWRlciBpcyByZXF1aXJlZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGFwcC5kZWxldGVUb2tlbih7XG4gICAgICAgIHRva2VuOiB0b2tlbjJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiAyMDQsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjogXCIqXCIgfVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW4gPSBoZWFkZXJzLmF1dGhvcml6YXRpb24/LnN1YnN0cihcInRva2VuIFwiLmxlbmd0aCk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnW0BvY3Rva2l0L29hdXRoLWFwcF0gXCJBdXRob3JpemF0aW9uXCIgaGVhZGVyIGlzIHJlcXVpcmVkJ1xuICAgICAgKTtcbiAgICB9XG4gICAgYXdhaXQgYXBwLmRlbGV0ZUF1dGhvcml6YXRpb24oe1xuICAgICAgdG9rZW5cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAyMDQsXG4gICAgICBoZWFkZXJzOiB7IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI6IFwiKlwiIH1cbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IDQwMCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI6IFwiKlwiXG4gICAgICB9LFxuICAgICAgdGV4dDogSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KVxuICAgIH07XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21pZGRsZXdhcmUvbm9kZS9wYXJzZS1yZXF1ZXN0LmpzXG5mdW5jdGlvbiBwYXJzZVJlcXVlc3QocmVxdWVzdCkge1xuICBjb25zdCB7IG1ldGhvZCwgdXJsLCBoZWFkZXJzIH0gPSByZXF1ZXN0O1xuICBhc3luYyBmdW5jdGlvbiB0ZXh0KCkge1xuICAgIGNvbnN0IHRleHQyID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGJvZHlDaHVua3MgPSBbXTtcbiAgICAgIHJlcXVlc3Qub24oXCJlcnJvclwiLCByZWplY3QpLm9uKFwiZGF0YVwiLCAoY2h1bmspID0+IGJvZHlDaHVua3MucHVzaChjaHVuaykpLm9uKFwiZW5kXCIsICgpID0+IHJlc29sdmUoQnVmZmVyLmNvbmNhdChib2R5Q2h1bmtzKS50b1N0cmluZygpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRleHQyO1xuICB9XG4gIHJldHVybiB7IG1ldGhvZCwgdXJsLCBoZWFkZXJzLCB0ZXh0IH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL25vZGUvc2VuZC1yZXNwb25zZS5qc1xuZnVuY3Rpb24gc2VuZFJlc3BvbnNlKG9jdG9raXRSZXNwb25zZSwgcmVzcG9uc2UpIHtcbiAgcmVzcG9uc2Uud3JpdGVIZWFkKG9jdG9raXRSZXNwb25zZS5zdGF0dXMsIG9jdG9raXRSZXNwb25zZS5oZWFkZXJzKTtcbiAgcmVzcG9uc2UuZW5kKG9jdG9raXRSZXNwb25zZS50ZXh0KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21pZGRsZXdhcmUvbm9kZS9pbmRleC5qc1xuZnVuY3Rpb24gY3JlYXRlTm9kZU1pZGRsZXdhcmUoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSB7XG4gICAgY29uc3Qgb2N0b2tpdFJlcXVlc3QgPSBhd2FpdCBwYXJzZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgY29uc3Qgb2N0b2tpdFJlc3BvbnNlID0gYXdhaXQgaGFuZGxlUmVxdWVzdChhcHAsIG9wdGlvbnMsIG9jdG9raXRSZXF1ZXN0KTtcbiAgICBpZiAob2N0b2tpdFJlc3BvbnNlKSB7XG4gICAgICBzZW5kUmVzcG9uc2Uob2N0b2tpdFJlc3BvbnNlLCByZXNwb25zZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dD8uKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvbWlkZGxld2FyZS93ZWItd29ya2VyL3BhcnNlLXJlcXVlc3QuanNcbmZ1bmN0aW9uIHBhcnNlUmVxdWVzdDIocmVxdWVzdCkge1xuICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmZyb21FbnRyaWVzKHJlcXVlc3QuaGVhZGVycy5lbnRyaWVzKCkpO1xuICByZXR1cm4ge1xuICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICBoZWFkZXJzLFxuICAgIHRleHQ6ICgpID0+IHJlcXVlc3QudGV4dCgpXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL3dlYi13b3JrZXIvc2VuZC1yZXNwb25zZS5qc1xuZnVuY3Rpb24gc2VuZFJlc3BvbnNlMihvY3Rva2l0UmVzcG9uc2UpIHtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShvY3Rva2l0UmVzcG9uc2UudGV4dCwge1xuICAgIHN0YXR1czogb2N0b2tpdFJlc3BvbnNlLnN0YXR1cyxcbiAgICBoZWFkZXJzOiBvY3Rva2l0UmVzcG9uc2UuaGVhZGVyc1xuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21pZGRsZXdhcmUvd2ViLXdvcmtlci9pbmRleC5qc1xuZnVuY3Rpb24gY3JlYXRlV2ViV29ya2VySGFuZGxlcihhcHAsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIGNvbnN0IG9jdG9raXRSZXF1ZXN0ID0gYXdhaXQgcGFyc2VSZXF1ZXN0MihyZXF1ZXN0KTtcbiAgICBjb25zdCBvY3Rva2l0UmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVSZXF1ZXN0KGFwcCwgb3B0aW9ucywgb2N0b2tpdFJlcXVlc3QpO1xuICAgIHJldHVybiBvY3Rva2l0UmVzcG9uc2UgPyBzZW5kUmVzcG9uc2UyKG9jdG9raXRSZXNwb25zZSkgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL2F3cy1sYW1iZGEvYXBpLWdhdGV3YXktdjItcGFyc2UtcmVxdWVzdC5qc1xuZnVuY3Rpb24gcGFyc2VSZXF1ZXN0MyhyZXF1ZXN0KSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXF1ZXN0LnJlcXVlc3RDb250ZXh0Lmh0dHA7XG4gIGxldCB1cmwgPSByZXF1ZXN0LnJhd1BhdGg7XG4gIGNvbnN0IHsgc3RhZ2UgfSA9IHJlcXVlc3QucmVxdWVzdENvbnRleHQ7XG4gIGlmICh1cmwuc3RhcnRzV2l0aChcIi9cIiArIHN0YWdlKSlcbiAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHN0YWdlLmxlbmd0aCArIDEpO1xuICBpZiAocmVxdWVzdC5yYXdRdWVyeVN0cmluZylcbiAgICB1cmwgKz0gXCI/XCIgKyByZXF1ZXN0LnJhd1F1ZXJ5U3RyaW5nO1xuICBjb25zdCBoZWFkZXJzID0gcmVxdWVzdC5oZWFkZXJzO1xuICBjb25zdCB0ZXh0ID0gYXN5bmMgKCkgPT4gcmVxdWVzdC5ib2R5IHx8IFwiXCI7XG4gIHJldHVybiB7IG1ldGhvZCwgdXJsLCBoZWFkZXJzLCB0ZXh0IH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL2F3cy1sYW1iZGEvYXBpLWdhdGV3YXktdjItc2VuZC1yZXNwb25zZS5qc1xuZnVuY3Rpb24gc2VuZFJlc3BvbnNlMyhvY3Rva2l0UmVzcG9uc2UpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiBvY3Rva2l0UmVzcG9uc2Uuc3RhdHVzLFxuICAgIGhlYWRlcnM6IG9jdG9raXRSZXNwb25zZS5oZWFkZXJzLFxuICAgIGJvZHk6IG9jdG9raXRSZXNwb25zZS50ZXh0XG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL2F3cy1sYW1iZGEvYXBpLWdhdGV3YXktdjIuanNcbmZ1bmN0aW9uIGNyZWF0ZUFXU0xhbWJkYUFQSUdhdGV3YXlWMkhhbmRsZXIoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IHBhcnNlUmVxdWVzdDMoZXZlbnQpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlUmVxdWVzdChhcHAsIG9wdGlvbnMsIHJlcXVlc3QpO1xuICAgIHJldHVybiByZXNwb25zZSA/IHNlbmRSZXNwb25zZTMocmVzcG9uc2UpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBPQXV0aEFwcCA9IGNsYXNzIHtcbiAgc3RhdGljIHtcbiAgICB0aGlzLlZFUlNJT04gPSBWRVJTSU9OO1xuICB9XG4gIHN0YXRpYyBkZWZhdWx0cyhkZWZhdWx0cykge1xuICAgIGNvbnN0IE9BdXRoQXBwV2l0aERlZmF1bHRzID0gY2xhc3MgZXh0ZW5kcyB0aGlzIHtcbiAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgICAgIC4uLmFyZ3NbMF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT0F1dGhBcHBXaXRoRGVmYXVsdHM7XG4gIH1cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGNvbnN0IE9jdG9raXQyID0gb3B0aW9ucy5PY3Rva2l0IHx8IE9BdXRoQXBwT2N0b2tpdDtcbiAgICB0aGlzLnR5cGUgPSBvcHRpb25zLmNsaWVudFR5cGUgfHwgXCJvYXV0aC1hcHBcIjtcbiAgICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQyKHtcbiAgICAgIGF1dGhTdHJhdGVneTogaW1wb3J0X2F1dGhfb2F1dGhfYXBwLmNyZWF0ZU9BdXRoQXBwQXV0aCxcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgY2xpZW50VHlwZTogdGhpcy50eXBlLFxuICAgICAgICBjbGllbnRJZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldFxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgY2xpZW50VHlwZTogdGhpcy50eXBlLFxuICAgICAgY2xpZW50SWQ6IG9wdGlvbnMuY2xpZW50SWQsXG4gICAgICBjbGllbnRTZWNyZXQ6IG9wdGlvbnMuY2xpZW50U2VjcmV0LFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBkZWZhdWx0U2NvcGVzIG5vdCBwZXJtaXR0ZWQgZm9yIEdpdEh1YiBBcHBzXG4gICAgICBkZWZhdWx0U2NvcGVzOiBvcHRpb25zLmRlZmF1bHRTY29wZXMgfHwgW10sXG4gICAgICBhbGxvd1NpZ251cDogb3B0aW9ucy5hbGxvd1NpZ251cCxcbiAgICAgIGJhc2VVcmw6IG9wdGlvbnMuYmFzZVVybCxcbiAgICAgIHJlZGlyZWN0VXJsOiBvcHRpb25zLnJlZGlyZWN0VXJsLFxuICAgICAgbG9nOiBvcHRpb25zLmxvZyxcbiAgICAgIE9jdG9raXQ6IE9jdG9raXQyLFxuICAgICAgb2N0b2tpdCxcbiAgICAgIGV2ZW50SGFuZGxlcnM6IHt9XG4gICAgfTtcbiAgICB0aGlzLm9uID0gYWRkRXZlbnRIYW5kbGVyLmJpbmQobnVsbCwgc3RhdGUpO1xuICAgIHRoaXMub2N0b2tpdCA9IG9jdG9raXQ7XG4gICAgdGhpcy5nZXRVc2VyT2N0b2tpdCA9IGdldFVzZXJPY3Rva2l0V2l0aFN0YXRlLmJpbmQobnVsbCwgc3RhdGUpO1xuICAgIHRoaXMuZ2V0V2ViRmxvd0F1dGhvcml6YXRpb25VcmwgPSBnZXRXZWJGbG93QXV0aG9yaXphdGlvblVybFdpdGhTdGF0ZS5iaW5kKFxuICAgICAgbnVsbCxcbiAgICAgIHN0YXRlXG4gICAgKTtcbiAgICB0aGlzLmNyZWF0ZVRva2VuID0gY3JlYXRlVG9rZW5XaXRoU3RhdGUuYmluZChcbiAgICAgIG51bGwsXG4gICAgICBzdGF0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja1Rva2VuID0gY2hlY2tUb2tlbldpdGhTdGF0ZS5iaW5kKFxuICAgICAgbnVsbCxcbiAgICAgIHN0YXRlXG4gICAgKTtcbiAgICB0aGlzLnJlc2V0VG9rZW4gPSByZXNldFRva2VuV2l0aFN0YXRlLmJpbmQoXG4gICAgICBudWxsLFxuICAgICAgc3RhdGVcbiAgICApO1xuICAgIHRoaXMucmVmcmVzaFRva2VuID0gcmVmcmVzaFRva2VuV2l0aFN0YXRlLmJpbmQoXG4gICAgICBudWxsLFxuICAgICAgc3RhdGVcbiAgICApO1xuICAgIHRoaXMuc2NvcGVUb2tlbiA9IHNjb3BlVG9rZW5XaXRoU3RhdGUuYmluZChcbiAgICAgIG51bGwsXG4gICAgICBzdGF0ZVxuICAgICk7XG4gICAgdGhpcy5kZWxldGVUb2tlbiA9IGRlbGV0ZVRva2VuV2l0aFN0YXRlLmJpbmQobnVsbCwgc3RhdGUpO1xuICAgIHRoaXMuZGVsZXRlQXV0aG9yaXphdGlvbiA9IGRlbGV0ZUF1dGhvcml6YXRpb25XaXRoU3RhdGUuYmluZChudWxsLCBzdGF0ZSk7XG4gIH1cbn07XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgT0F1dGhBcHAsXG4gIGNyZWF0ZUFXU0xhbWJkYUFQSUdhdGV3YXlWMkhhbmRsZXIsXG4gIGNyZWF0ZU5vZGVNaWRkbGV3YXJlLFxuICBjcmVhdGVXZWJXb3JrZXJIYW5kbGVyLFxuICBoYW5kbGVSZXF1ZXN0LFxuICBzZW5kTm9kZVJlc3BvbnNlLFxuICB1bmtub3duUm91dGVSZXNwb25zZVxufSk7XG4iLCIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmZ1bmN0aW9uIG9hdXRoQXV0aG9yaXphdGlvblVybChvcHRpb25zKSB7XG4gIGNvbnN0IGNsaWVudFR5cGUgPSBvcHRpb25zLmNsaWVudFR5cGUgfHwgXCJvYXV0aC1hcHBcIjtcbiAgY29uc3QgYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybCB8fCBcImh0dHBzOi8vZ2l0aHViLmNvbVwiO1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgY2xpZW50VHlwZSxcbiAgICBhbGxvd1NpZ251cDogb3B0aW9ucy5hbGxvd1NpZ251cCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUsXG4gICAgY2xpZW50SWQ6IG9wdGlvbnMuY2xpZW50SWQsXG4gICAgbG9naW46IG9wdGlvbnMubG9naW4gfHwgbnVsbCxcbiAgICByZWRpcmVjdFVybDogb3B0aW9ucy5yZWRpcmVjdFVybCB8fCBudWxsLFxuICAgIHN0YXRlOiBvcHRpb25zLnN0YXRlIHx8IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKSxcbiAgICB1cmw6IFwiXCJcbiAgfTtcbiAgaWYgKGNsaWVudFR5cGUgPT09IFwib2F1dGgtYXBwXCIpIHtcbiAgICBjb25zdCBzY29wZXMgPSBcInNjb3Blc1wiIGluIG9wdGlvbnMgPyBvcHRpb25zLnNjb3BlcyA6IFtdO1xuICAgIHJlc3VsdC5zY29wZXMgPSB0eXBlb2Ygc2NvcGVzID09PSBcInN0cmluZ1wiID8gc2NvcGVzLnNwbGl0KC9bLFxcc10rLykuZmlsdGVyKEJvb2xlYW4pIDogc2NvcGVzO1xuICB9XG4gIHJlc3VsdC51cmwgPSB1cmxCdWlsZGVyQXV0aG9yaXplKGAke2Jhc2VVcmx9L2xvZ2luL29hdXRoL2F1dGhvcml6ZWAsIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiB1cmxCdWlsZGVyQXV0aG9yaXplKGJhc2UsIG9wdGlvbnMpIHtcbiAgY29uc3QgbWFwID0ge1xuICAgIGFsbG93U2lnbnVwOiBcImFsbG93X3NpZ251cFwiLFxuICAgIGNsaWVudElkOiBcImNsaWVudF9pZFwiLFxuICAgIGxvZ2luOiBcImxvZ2luXCIsXG4gICAgcmVkaXJlY3RVcmw6IFwicmVkaXJlY3RfdXJpXCIsXG4gICAgc2NvcGVzOiBcInNjb3BlXCIsXG4gICAgc3RhdGU6IFwic3RhdGVcIlxuICB9O1xuICBsZXQgdXJsID0gYmFzZTtcbiAgT2JqZWN0LmtleXMobWFwKS5maWx0ZXIoKGspID0+IG9wdGlvbnNba10gIT09IG51bGwpLmZpbHRlcigoaykgPT4ge1xuICAgIGlmIChrICE9PSBcInNjb3Blc1wiKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKG9wdGlvbnMuY2xpZW50VHlwZSA9PT0gXCJnaXRodWItYXBwXCIpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICFBcnJheS5pc0FycmF5KG9wdGlvbnNba10pIHx8IG9wdGlvbnNba10ubGVuZ3RoID4gMDtcbiAgfSkubWFwKChrZXkpID0+IFttYXBba2V5XSwgYCR7b3B0aW9uc1trZXldfWBdKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgdXJsICs9IGluZGV4ID09PSAwID8gYD9gIDogXCImXCI7XG4gICAgdXJsICs9IGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWA7XG4gIH0pO1xuICByZXR1cm4gdXJsO1xufVxuZXhwb3J0IHtcbiAgb2F1dGhBdXRob3JpemF0aW9uVXJsXG59O1xuIiwiaW1wb3J0IHsgcmVxdWVzdCBhcyBkZWZhdWx0UmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5pbXBvcnQgYnRvYSBmcm9tIFwiYnRvYS1saXRlXCI7XG5hc3luYyBmdW5jdGlvbiBjaGVja1Rva2VuKG9wdGlvbnMpIHtcbiAgY29uc3QgcmVxdWVzdCA9IG9wdGlvbnMucmVxdWVzdCB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogd2UgYWx3YXlzIHBhc3MgYSBjdXN0b20gcmVxdWVzdCBpbiB0ZXN0cyAqL1xuICBkZWZhdWx0UmVxdWVzdDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KFwiUE9TVCAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L3Rva2VuXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgYmFzaWMgJHtidG9hKFxuICAgICAgICBgJHtvcHRpb25zLmNsaWVudElkfToke29wdGlvbnMuY2xpZW50U2VjcmV0fWBcbiAgICAgICl9YFxuICAgIH0sXG4gICAgY2xpZW50X2lkOiBvcHRpb25zLmNsaWVudElkLFxuICAgIGFjY2Vzc190b2tlbjogb3B0aW9ucy50b2tlblxuICB9KTtcbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSB7XG4gICAgY2xpZW50VHlwZTogb3B0aW9ucy5jbGllbnRUeXBlLFxuICAgIGNsaWVudElkOiBvcHRpb25zLmNsaWVudElkLFxuICAgIGNsaWVudFNlY3JldDogb3B0aW9ucy5jbGllbnRTZWNyZXQsXG4gICAgdG9rZW46IG9wdGlvbnMudG9rZW4sXG4gICAgc2NvcGVzOiByZXNwb25zZS5kYXRhLnNjb3Blc1xuICB9O1xuICBpZiAocmVzcG9uc2UuZGF0YS5leHBpcmVzX2F0KVxuICAgIGF1dGhlbnRpY2F0aW9uLmV4cGlyZXNBdCA9IHJlc3BvbnNlLmRhdGEuZXhwaXJlc19hdDtcbiAgaWYgKG9wdGlvbnMuY2xpZW50VHlwZSA9PT0gXCJnaXRodWItYXBwXCIpIHtcbiAgICBkZWxldGUgYXV0aGVudGljYXRpb24uc2NvcGVzO1xuICB9XG4gIHJldHVybiB7IC4uLnJlc3BvbnNlLCBhdXRoZW50aWNhdGlvbiB9O1xufVxuZXhwb3J0IHtcbiAgY2hlY2tUb2tlblxufTtcbiIsImltcG9ydCB7IHJlcXVlc3QgYXMgZGVmYXVsdFJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgb2F1dGhSZXF1ZXN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURldmljZUNvZGUob3B0aW9ucykge1xuICBjb25zdCByZXF1ZXN0ID0gb3B0aW9ucy5yZXF1ZXN0IHx8IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiB3ZSBhbHdheXMgcGFzcyBhIGN1c3RvbSByZXF1ZXN0IGluIHRlc3RzICovXG4gIGRlZmF1bHRSZXF1ZXN0O1xuICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZFxuICB9O1xuICBpZiAoXCJzY29wZXNcIiBpbiBvcHRpb25zICYmIEFycmF5LmlzQXJyYXkob3B0aW9ucy5zY29wZXMpKSB7XG4gICAgcGFyYW1ldGVycy5zY29wZSA9IG9wdGlvbnMuc2NvcGVzLmpvaW4oXCIgXCIpO1xuICB9XG4gIHJldHVybiBvYXV0aFJlcXVlc3QocmVxdWVzdCwgXCJQT1NUIC9sb2dpbi9kZXZpY2UvY29kZVwiLCBwYXJhbWV0ZXJzKTtcbn1cbmV4cG9ydCB7XG4gIGNyZWF0ZURldmljZUNvZGVcbn07XG4iLCJpbXBvcnQgeyByZXF1ZXN0IGFzIGRlZmF1bHRSZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcbmltcG9ydCBidG9hIGZyb20gXCJidG9hLWxpdGVcIjtcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUF1dGhvcml6YXRpb24ob3B0aW9ucykge1xuICBjb25zdCByZXF1ZXN0ID0gb3B0aW9ucy5yZXF1ZXN0IHx8IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiB3ZSBhbHdheXMgcGFzcyBhIGN1c3RvbSByZXF1ZXN0IGluIHRlc3RzICovXG4gIGRlZmF1bHRSZXF1ZXN0O1xuICBjb25zdCBhdXRoID0gYnRvYShgJHtvcHRpb25zLmNsaWVudElkfToke29wdGlvbnMuY2xpZW50U2VjcmV0fWApO1xuICByZXR1cm4gcmVxdWVzdChcbiAgICBcIkRFTEVURSAvYXBwbGljYXRpb25zL3tjbGllbnRfaWR9L2dyYW50XCIsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBgYmFzaWMgJHthdXRofWBcbiAgICAgIH0sXG4gICAgICBjbGllbnRfaWQ6IG9wdGlvbnMuY2xpZW50SWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IG9wdGlvbnMudG9rZW5cbiAgICB9XG4gICk7XG59XG5leHBvcnQge1xuICBkZWxldGVBdXRob3JpemF0aW9uXG59O1xuIiwiaW1wb3J0IHsgcmVxdWVzdCBhcyBkZWZhdWx0UmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5pbXBvcnQgYnRvYSBmcm9tIFwiYnRvYS1saXRlXCI7XG5hc3luYyBmdW5jdGlvbiBkZWxldGVUb2tlbihvcHRpb25zKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBvcHRpb25zLnJlcXVlc3QgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHdlIGFsd2F5cyBwYXNzIGEgY3VzdG9tIHJlcXVlc3QgaW4gdGVzdHMgKi9cbiAgZGVmYXVsdFJlcXVlc3Q7XG4gIGNvbnN0IGF1dGggPSBidG9hKGAke29wdGlvbnMuY2xpZW50SWR9OiR7b3B0aW9ucy5jbGllbnRTZWNyZXR9YCk7XG4gIHJldHVybiByZXF1ZXN0KFxuICAgIFwiREVMRVRFIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIixcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGF1dGhvcml6YXRpb246IGBiYXNpYyAke2F1dGh9YFxuICAgICAgfSxcbiAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgIGFjY2Vzc190b2tlbjogb3B0aW9ucy50b2tlblxuICAgIH1cbiAgKTtcbn1cbmV4cG9ydCB7XG4gIGRlbGV0ZVRva2VuXG59O1xuIiwiaW1wb3J0IHsgcmVxdWVzdCBhcyBkZWZhdWx0UmVxdWVzdCB9IGZyb20gXCJAb2N0b2tpdC9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBvYXV0aFJlcXVlc3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuYXN5bmMgZnVuY3Rpb24gZXhjaGFuZ2VEZXZpY2VDb2RlKG9wdGlvbnMpIHtcbiAgY29uc3QgcmVxdWVzdCA9IG9wdGlvbnMucmVxdWVzdCB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogd2UgYWx3YXlzIHBhc3MgYSBjdXN0b20gcmVxdWVzdCBpbiB0ZXN0cyAqL1xuICBkZWZhdWx0UmVxdWVzdDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvYXV0aFJlcXVlc3QoXG4gICAgcmVxdWVzdCxcbiAgICBcIlBPU1QgL2xvZ2luL29hdXRoL2FjY2Vzc190b2tlblwiLFxuICAgIHtcbiAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgIGRldmljZV9jb2RlOiBvcHRpb25zLmNvZGUsXG4gICAgICBncmFudF90eXBlOiBcInVybjppZXRmOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmRldmljZV9jb2RlXCJcbiAgICB9XG4gICk7XG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uID0ge1xuICAgIGNsaWVudFR5cGU6IG9wdGlvbnMuY2xpZW50VHlwZSxcbiAgICBjbGllbnRJZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICB0b2tlbjogcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgc2NvcGVzOiByZXNwb25zZS5kYXRhLnNjb3BlLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pXG4gIH07XG4gIGlmIChcImNsaWVudFNlY3JldFwiIGluIG9wdGlvbnMpIHtcbiAgICBhdXRoZW50aWNhdGlvbi5jbGllbnRTZWNyZXQgPSBvcHRpb25zLmNsaWVudFNlY3JldDtcbiAgfVxuICBpZiAob3B0aW9ucy5jbGllbnRUeXBlID09PSBcImdpdGh1Yi1hcHBcIikge1xuICAgIGlmIChcInJlZnJlc2hfdG9rZW5cIiBpbiByZXNwb25zZS5kYXRhKSB7XG4gICAgICBjb25zdCBhcGlUaW1lSW5NcyA9IG5ldyBEYXRlKHJlc3BvbnNlLmhlYWRlcnMuZGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgYXV0aGVudGljYXRpb24ucmVmcmVzaFRva2VuID0gcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuLCBhdXRoZW50aWNhdGlvbi5leHBpcmVzQXQgPSB0b1RpbWVzdGFtcChcbiAgICAgICAgYXBpVGltZUluTXMsXG4gICAgICAgIHJlc3BvbnNlLmRhdGEuZXhwaXJlc19pblxuICAgICAgKSwgYXV0aGVudGljYXRpb24ucmVmcmVzaFRva2VuRXhwaXJlc0F0ID0gdG9UaW1lc3RhbXAoXG4gICAgICAgIGFwaVRpbWVJbk1zLFxuICAgICAgICByZXNwb25zZS5kYXRhLnJlZnJlc2hfdG9rZW5fZXhwaXJlc19pblxuICAgICAgKTtcbiAgICB9XG4gICAgZGVsZXRlIGF1dGhlbnRpY2F0aW9uLnNjb3BlcztcbiAgfVxuICByZXR1cm4geyAuLi5yZXNwb25zZSwgYXV0aGVudGljYXRpb24gfTtcbn1cbmZ1bmN0aW9uIHRvVGltZXN0YW1wKGFwaVRpbWVJbk1zLCBleHBpcmF0aW9uSW5TZWNvbmRzKSB7XG4gIHJldHVybiBuZXcgRGF0ZShhcGlUaW1lSW5NcyArIGV4cGlyYXRpb25JblNlY29uZHMgKiAxZTMpLnRvSVNPU3RyaW5nKCk7XG59XG5leHBvcnQge1xuICBleGNoYW5nZURldmljZUNvZGVcbn07XG4iLCJpbXBvcnQgeyByZXF1ZXN0IGFzIGRlZmF1bHRSZXF1ZXN0IH0gZnJvbSBcIkBvY3Rva2l0L3JlcXVlc3RcIjtcbmltcG9ydCB7IG9hdXRoUmVxdWVzdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5hc3luYyBmdW5jdGlvbiBleGNoYW5nZVdlYkZsb3dDb2RlKG9wdGlvbnMpIHtcbiAgY29uc3QgcmVxdWVzdCA9IG9wdGlvbnMucmVxdWVzdCB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogd2UgYWx3YXlzIHBhc3MgYSBjdXN0b20gcmVxdWVzdCBpbiB0ZXN0cyAqL1xuICBkZWZhdWx0UmVxdWVzdDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvYXV0aFJlcXVlc3QoXG4gICAgcmVxdWVzdCxcbiAgICBcIlBPU1QgL2xvZ2luL29hdXRoL2FjY2Vzc190b2tlblwiLFxuICAgIHtcbiAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IG9wdGlvbnMuY2xpZW50U2VjcmV0LFxuICAgICAgY29kZTogb3B0aW9ucy5jb2RlLFxuICAgICAgcmVkaXJlY3RfdXJpOiBvcHRpb25zLnJlZGlyZWN0VXJsXG4gICAgfVxuICApO1xuICBjb25zdCBhdXRoZW50aWNhdGlvbiA9IHtcbiAgICBjbGllbnRUeXBlOiBvcHRpb25zLmNsaWVudFR5cGUsXG4gICAgY2xpZW50SWQ6IG9wdGlvbnMuY2xpZW50SWQsXG4gICAgY2xpZW50U2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldCxcbiAgICB0b2tlbjogcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgc2NvcGVzOiByZXNwb25zZS5kYXRhLnNjb3BlLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pXG4gIH07XG4gIGlmIChvcHRpb25zLmNsaWVudFR5cGUgPT09IFwiZ2l0aHViLWFwcFwiKSB7XG4gICAgaWYgKFwicmVmcmVzaF90b2tlblwiIGluIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIGNvbnN0IGFwaVRpbWVJbk1zID0gbmV3IERhdGUocmVzcG9uc2UuaGVhZGVycy5kYXRlKS5nZXRUaW1lKCk7XG4gICAgICBhdXRoZW50aWNhdGlvbi5yZWZyZXNoVG9rZW4gPSByZXNwb25zZS5kYXRhLnJlZnJlc2hfdG9rZW4sIGF1dGhlbnRpY2F0aW9uLmV4cGlyZXNBdCA9IHRvVGltZXN0YW1wKFxuICAgICAgICBhcGlUaW1lSW5NcyxcbiAgICAgICAgcmVzcG9uc2UuZGF0YS5leHBpcmVzX2luXG4gICAgICApLCBhdXRoZW50aWNhdGlvbi5yZWZyZXNoVG9rZW5FeHBpcmVzQXQgPSB0b1RpbWVzdGFtcChcbiAgICAgICAgYXBpVGltZUluTXMsXG4gICAgICAgIHJlc3BvbnNlLmRhdGEucmVmcmVzaF90b2tlbl9leHBpcmVzX2luXG4gICAgICApO1xuICAgIH1cbiAgICBkZWxldGUgYXV0aGVudGljYXRpb24uc2NvcGVzO1xuICB9XG4gIHJldHVybiB7IC4uLnJlc3BvbnNlLCBhdXRoZW50aWNhdGlvbiB9O1xufVxuZnVuY3Rpb24gdG9UaW1lc3RhbXAoYXBpVGltZUluTXMsIGV4cGlyYXRpb25JblNlY29uZHMpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGFwaVRpbWVJbk1zICsgZXhwaXJhdGlvbkluU2Vjb25kcyAqIDFlMykudG9JU09TdHJpbmcoKTtcbn1cbmV4cG9ydCB7XG4gIGV4Y2hhbmdlV2ViRmxvd0NvZGVcbn07XG4iLCJpbXBvcnQgeyBvYXV0aEF1dGhvcml6YXRpb25VcmwgfSBmcm9tIFwiQG9jdG9raXQvb2F1dGgtYXV0aG9yaXphdGlvbi11cmxcIjtcbmltcG9ydCB7IHJlcXVlc3QgYXMgZGVmYXVsdFJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgcmVxdWVzdFRvT0F1dGhCYXNlVXJsIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmZ1bmN0aW9uIGdldFdlYkZsb3dBdXRob3JpemF0aW9uVXJsKHtcbiAgcmVxdWVzdCA9IGRlZmF1bHRSZXF1ZXN0LFxuICAuLi5vcHRpb25zXG59KSB7XG4gIGNvbnN0IGJhc2VVcmwgPSByZXF1ZXN0VG9PQXV0aEJhc2VVcmwocmVxdWVzdCk7XG4gIHJldHVybiBvYXV0aEF1dGhvcml6YXRpb25Vcmwoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgYmFzZVVybFxuICB9KTtcbn1cbmV4cG9ydCB7XG4gIGdldFdlYkZsb3dBdXRob3JpemF0aW9uVXJsXG59O1xuIiwiaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gXCIuL3ZlcnNpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dldC13ZWItZmxvdy1hdXRob3JpemF0aW9uLXVybFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXhjaGFuZ2Utd2ViLWZsb3ctY29kZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY3JlYXRlLWRldmljZS1jb2RlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9leGNoYW5nZS1kZXZpY2UtY29kZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY2hlY2stdG9rZW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JlZnJlc2gtdG9rZW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Njb3BlLXRva2VuXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yZXNldC10b2tlblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZGVsZXRlLXRva2VuXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kZWxldGUtYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IHtcbiAgVkVSU0lPTlxufTtcbiIsImltcG9ydCB7IHJlcXVlc3QgYXMgZGVmYXVsdFJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IHsgb2F1dGhSZXF1ZXN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hUb2tlbihvcHRpb25zKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBvcHRpb25zLnJlcXVlc3QgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHdlIGFsd2F5cyBwYXNzIGEgY3VzdG9tIHJlcXVlc3QgaW4gdGVzdHMgKi9cbiAgZGVmYXVsdFJlcXVlc3Q7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2F1dGhSZXF1ZXN0KFxuICAgIHJlcXVlc3QsXG4gICAgXCJQT1NUIC9sb2dpbi9vYXV0aC9hY2Nlc3NfdG9rZW5cIixcbiAgICB7XG4gICAgICBjbGllbnRfaWQ6IG9wdGlvbnMuY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldCxcbiAgICAgIGdyYW50X3R5cGU6IFwicmVmcmVzaF90b2tlblwiLFxuICAgICAgcmVmcmVzaF90b2tlbjogb3B0aW9ucy5yZWZyZXNoVG9rZW5cbiAgICB9XG4gICk7XG4gIGNvbnN0IGFwaVRpbWVJbk1zID0gbmV3IERhdGUocmVzcG9uc2UuaGVhZGVycy5kYXRlKS5nZXRUaW1lKCk7XG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uID0ge1xuICAgIGNsaWVudFR5cGU6IFwiZ2l0aHViLWFwcFwiLFxuICAgIGNsaWVudElkOiBvcHRpb25zLmNsaWVudElkLFxuICAgIGNsaWVudFNlY3JldDogb3B0aW9ucy5jbGllbnRTZWNyZXQsXG4gICAgdG9rZW46IHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuLFxuICAgIHJlZnJlc2hUb2tlbjogcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuLFxuICAgIGV4cGlyZXNBdDogdG9UaW1lc3RhbXAoYXBpVGltZUluTXMsIHJlc3BvbnNlLmRhdGEuZXhwaXJlc19pbiksXG4gICAgcmVmcmVzaFRva2VuRXhwaXJlc0F0OiB0b1RpbWVzdGFtcChcbiAgICAgIGFwaVRpbWVJbk1zLFxuICAgICAgcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuX2V4cGlyZXNfaW5cbiAgICApXG4gIH07XG4gIHJldHVybiB7IC4uLnJlc3BvbnNlLCBhdXRoZW50aWNhdGlvbiB9O1xufVxuZnVuY3Rpb24gdG9UaW1lc3RhbXAoYXBpVGltZUluTXMsIGV4cGlyYXRpb25JblNlY29uZHMpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGFwaVRpbWVJbk1zICsgZXhwaXJhdGlvbkluU2Vjb25kcyAqIDFlMykudG9JU09TdHJpbmcoKTtcbn1cbmV4cG9ydCB7XG4gIHJlZnJlc2hUb2tlblxufTtcbiIsImltcG9ydCB7IHJlcXVlc3QgYXMgZGVmYXVsdFJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IGJ0b2EgZnJvbSBcImJ0b2EtbGl0ZVwiO1xuYXN5bmMgZnVuY3Rpb24gcmVzZXRUb2tlbihvcHRpb25zKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBvcHRpb25zLnJlcXVlc3QgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHdlIGFsd2F5cyBwYXNzIGEgY3VzdG9tIHJlcXVlc3QgaW4gdGVzdHMgKi9cbiAgZGVmYXVsdFJlcXVlc3Q7XG4gIGNvbnN0IGF1dGggPSBidG9hKGAke29wdGlvbnMuY2xpZW50SWR9OiR7b3B0aW9ucy5jbGllbnRTZWNyZXR9YCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdChcbiAgICBcIlBBVENIIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIixcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGF1dGhvcml6YXRpb246IGBiYXNpYyAke2F1dGh9YFxuICAgICAgfSxcbiAgICAgIGNsaWVudF9pZDogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgIGFjY2Vzc190b2tlbjogb3B0aW9ucy50b2tlblxuICAgIH1cbiAgKTtcbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSB7XG4gICAgY2xpZW50VHlwZTogb3B0aW9ucy5jbGllbnRUeXBlLFxuICAgIGNsaWVudElkOiBvcHRpb25zLmNsaWVudElkLFxuICAgIGNsaWVudFNlY3JldDogb3B0aW9ucy5jbGllbnRTZWNyZXQsXG4gICAgdG9rZW46IHJlc3BvbnNlLmRhdGEudG9rZW4sXG4gICAgc2NvcGVzOiByZXNwb25zZS5kYXRhLnNjb3Blc1xuICB9O1xuICBpZiAocmVzcG9uc2UuZGF0YS5leHBpcmVzX2F0KVxuICAgIGF1dGhlbnRpY2F0aW9uLmV4cGlyZXNBdCA9IHJlc3BvbnNlLmRhdGEuZXhwaXJlc19hdDtcbiAgaWYgKG9wdGlvbnMuY2xpZW50VHlwZSA9PT0gXCJnaXRodWItYXBwXCIpIHtcbiAgICBkZWxldGUgYXV0aGVudGljYXRpb24uc2NvcGVzO1xuICB9XG4gIHJldHVybiB7IC4uLnJlc3BvbnNlLCBhdXRoZW50aWNhdGlvbiB9O1xufVxuZXhwb3J0IHtcbiAgcmVzZXRUb2tlblxufTtcbiIsImltcG9ydCB7IHJlcXVlc3QgYXMgZGVmYXVsdFJlcXVlc3QgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdFwiO1xuaW1wb3J0IGJ0b2EgZnJvbSBcImJ0b2EtbGl0ZVwiO1xuYXN5bmMgZnVuY3Rpb24gc2NvcGVUb2tlbihvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICByZXF1ZXN0OiBvcHRpb25zUmVxdWVzdCxcbiAgICBjbGllbnRUeXBlLFxuICAgIGNsaWVudElkLFxuICAgIGNsaWVudFNlY3JldCxcbiAgICB0b2tlbixcbiAgICAuLi5yZXF1ZXN0T3B0aW9uc1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVxdWVzdCA9IG9wdGlvbnNSZXF1ZXN0IHx8IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiB3ZSBhbHdheXMgcGFzcyBhIGN1c3RvbSByZXF1ZXN0IGluIHRlc3RzICovXG4gIGRlZmF1bHRSZXF1ZXN0O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoXG4gICAgXCJQT1NUIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW4vc2NvcGVkXCIsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBgYmFzaWMgJHtidG9hKGAke2NsaWVudElkfToke2NsaWVudFNlY3JldH1gKX1gXG4gICAgICB9LFxuICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgIGFjY2Vzc190b2tlbjogdG9rZW4sXG4gICAgICAuLi5yZXF1ZXN0T3B0aW9uc1xuICAgIH1cbiAgKTtcbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGNsaWVudFR5cGUsXG4gICAgICBjbGllbnRJZCxcbiAgICAgIGNsaWVudFNlY3JldCxcbiAgICAgIHRva2VuOiByZXNwb25zZS5kYXRhLnRva2VuXG4gICAgfSxcbiAgICByZXNwb25zZS5kYXRhLmV4cGlyZXNfYXQgPyB7IGV4cGlyZXNBdDogcmVzcG9uc2UuZGF0YS5leHBpcmVzX2F0IH0gOiB7fVxuICApO1xuICByZXR1cm4geyAuLi5yZXNwb25zZSwgYXV0aGVudGljYXRpb24gfTtcbn1cbmV4cG9ydCB7XG4gIHNjb3BlVG9rZW5cbn07XG4iLCJpbXBvcnQgeyBSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdC1lcnJvclwiO1xuZnVuY3Rpb24gcmVxdWVzdFRvT0F1dGhCYXNlVXJsKHJlcXVlc3QpIHtcbiAgY29uc3QgZW5kcG9pbnREZWZhdWx0cyA9IHJlcXVlc3QuZW5kcG9pbnQuREVGQVVMVFM7XG4gIHJldHVybiAvXmh0dHBzOlxcL1xcLyhhcGlcXC4pP2dpdGh1YlxcLmNvbSQvLnRlc3QoZW5kcG9pbnREZWZhdWx0cy5iYXNlVXJsKSA/IFwiaHR0cHM6Ly9naXRodWIuY29tXCIgOiBlbmRwb2ludERlZmF1bHRzLmJhc2VVcmwucmVwbGFjZShcIi9hcGkvdjNcIiwgXCJcIik7XG59XG5hc3luYyBmdW5jdGlvbiBvYXV0aFJlcXVlc3QocmVxdWVzdCwgcm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3Qgd2l0aE9BdXRoUGFyYW1ldGVycyA9IHtcbiAgICBiYXNlVXJsOiByZXF1ZXN0VG9PQXV0aEJhc2VVcmwocmVxdWVzdCksXG4gICAgaGVhZGVyczoge1xuICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgLi4ucGFyYW1ldGVyc1xuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Qocm91dGUsIHdpdGhPQXV0aFBhcmFtZXRlcnMpO1xuICBpZiAoXCJlcnJvclwiIGluIHJlc3BvbnNlLmRhdGEpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBSZXF1ZXN0RXJyb3IoXG4gICAgICBgJHtyZXNwb25zZS5kYXRhLmVycm9yX2Rlc2NyaXB0aW9ufSAoJHtyZXNwb25zZS5kYXRhLmVycm9yfSwgJHtyZXNwb25zZS5kYXRhLmVycm9yX3VyaX0pYCxcbiAgICAgIDQwMCxcbiAgICAgIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdC5lbmRwb2ludC5tZXJnZShcbiAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICB3aXRoT0F1dGhQYXJhbWV0ZXJzXG4gICAgICAgICksXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnNcbiAgICAgIH1cbiAgICApO1xuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuZXhwb3J0IHtcbiAgb2F1dGhSZXF1ZXN0LFxuICByZXF1ZXN0VG9PQXV0aEJhc2VVcmxcbn07XG4iLCJjb25zdCBWRVJTSU9OID0gXCI0LjAuMFwiO1xuZXhwb3J0IHtcbiAgVkVSU0lPTlxufTtcbiIsIi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgT2N0b2tpdCBhcyBPY3Rva2l0MyB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9lcnJvcnMuanNcbnZhciBnZW5lcmF0ZU1lc3NhZ2UgPSAocGF0aCwgY3Vyc29yVmFsdWUpID0+IGBUaGUgY3Vyc29yIGF0IFwiJHtwYXRoLmpvaW4oXG4gIFwiLFwiXG4pfVwiIGRpZCBub3QgY2hhbmdlIGl0cyB2YWx1ZSBcIiR7Y3Vyc29yVmFsdWV9XCIgYWZ0ZXIgYSBwYWdlIHRyYW5zaXRpb24uIFBsZWFzZSBtYWtlIHN1cmUgeW91ciB0aGF0IHlvdXIgcXVlcnkgaXMgc2V0IHVwIGNvcnJlY3RseS5gO1xudmFyIE1pc3NpbmdDdXJzb3JDaGFuZ2UgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocGFnZUluZm8sIGN1cnNvclZhbHVlKSB7XG4gICAgc3VwZXIoZ2VuZXJhdGVNZXNzYWdlKHBhZ2VJbmZvLnBhdGhJblF1ZXJ5LCBjdXJzb3JWYWx1ZSkpO1xuICAgIHRoaXMucGFnZUluZm8gPSBwYWdlSW5mbztcbiAgICB0aGlzLmN1cnNvclZhbHVlID0gY3Vyc29yVmFsdWU7XG4gICAgdGhpcy5uYW1lID0gXCJNaXNzaW5nQ3Vyc29yQ2hhbmdlRXJyb3JcIjtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgfVxufTtcbnZhciBNaXNzaW5nUGFnZUluZm8gPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICBzdXBlcihcbiAgICAgIGBObyBwYWdlSW5mbyBwcm9wZXJ0eSBmb3VuZCBpbiByZXNwb25zZS4gUGxlYXNlIG1ha2Ugc3VyZSB0byBzcGVjaWZ5IHRoZSBwYWdlSW5mbyBpbiB5b3VyIHF1ZXJ5LiBSZXNwb25zZS1EYXRhOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgMlxuICAgICAgKX1gXG4gICAgKTtcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5uYW1lID0gXCJNaXNzaW5nUGFnZUluZm9cIjtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL29iamVjdC1oZWxwZXJzLmpzXG52YXIgaXNPYmplY3QgPSAodmFsdWUpID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG5mdW5jdGlvbiBmaW5kUGFnaW5hdGVkUmVzb3VyY2VQYXRoKHJlc3BvbnNlRGF0YSkge1xuICBjb25zdCBwYWdpbmF0ZWRSZXNvdXJjZVBhdGggPSBkZWVwRmluZFBhdGhUb1Byb3BlcnR5KFxuICAgIHJlc3BvbnNlRGF0YSxcbiAgICBcInBhZ2VJbmZvXCJcbiAgKTtcbiAgaWYgKHBhZ2luYXRlZFJlc291cmNlUGF0aC5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgTWlzc2luZ1BhZ2VJbmZvKHJlc3BvbnNlRGF0YSk7XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRlZFJlc291cmNlUGF0aDtcbn1cbnZhciBkZWVwRmluZFBhdGhUb1Byb3BlcnR5ID0gKG9iamVjdCwgc2VhcmNoUHJvcCwgcGF0aCA9IFtdKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IFsuLi5wYXRoLCBrZXldO1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG9iamVjdFtrZXldO1xuICAgIGlmIChjdXJyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoc2VhcmNoUHJvcCkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50UGF0aDtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRlZXBGaW5kUGF0aFRvUHJvcGVydHkoXG4gICAgICAgIGN1cnJlbnRWYWx1ZSxcbiAgICAgICAgc2VhcmNoUHJvcCxcbiAgICAgICAgY3VycmVudFBhdGhcbiAgICAgICk7XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXQgPSAob2JqZWN0LCBwYXRoKSA9PiB7XG4gIHJldHVybiBwYXRoLnJlZHVjZSgoY3VycmVudCwgbmV4dFByb3BlcnR5KSA9PiBjdXJyZW50W25leHRQcm9wZXJ0eV0sIG9iamVjdCk7XG59O1xudmFyIHNldCA9IChvYmplY3QsIHBhdGgsIG11dGF0b3IpID0+IHtcbiAgY29uc3QgbGFzdFByb3BlcnR5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwYXJlbnRQYXRoID0gWy4uLnBhdGhdLnNsaWNlKDAsIC0xKTtcbiAgY29uc3QgcGFyZW50ID0gZ2V0KG9iamVjdCwgcGFyZW50UGF0aCk7XG4gIGlmICh0eXBlb2YgbXV0YXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcGFyZW50W2xhc3RQcm9wZXJ0eV0gPSBtdXRhdG9yKHBhcmVudFtsYXN0UHJvcGVydHldKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRbbGFzdFByb3BlcnR5XSA9IG11dGF0b3I7XG4gIH1cbn07XG5cbi8vIHBrZy9kaXN0LXNyYy9leHRyYWN0LXBhZ2UtaW5mby5qc1xudmFyIGV4dHJhY3RQYWdlSW5mb3MgPSAocmVzcG9uc2VEYXRhKSA9PiB7XG4gIGNvbnN0IHBhZ2VJbmZvUGF0aCA9IGZpbmRQYWdpbmF0ZWRSZXNvdXJjZVBhdGgocmVzcG9uc2VEYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoSW5RdWVyeTogcGFnZUluZm9QYXRoLFxuICAgIHBhZ2VJbmZvOiBnZXQocmVzcG9uc2VEYXRhLCBbLi4ucGFnZUluZm9QYXRoLCBcInBhZ2VJbmZvXCJdKVxuICB9O1xufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2l0ZXJhdG9yLmpzXG5pbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL3BhZ2UtaW5mby5qc1xudmFyIGlzRm9yd2FyZFNlYXJjaCA9IChnaXZlblBhZ2VJbmZvKSA9PiB7XG4gIHJldHVybiBnaXZlblBhZ2VJbmZvLmhhc093blByb3BlcnR5KFwiaGFzTmV4dFBhZ2VcIik7XG59O1xudmFyIGdldEN1cnNvckZyb20gPSAocGFnZUluZm8pID0+IGlzRm9yd2FyZFNlYXJjaChwYWdlSW5mbykgPyBwYWdlSW5mby5lbmRDdXJzb3IgOiBwYWdlSW5mby5zdGFydEN1cnNvcjtcbnZhciBoYXNBbm90aGVyUGFnZSA9IChwYWdlSW5mbykgPT4gaXNGb3J3YXJkU2VhcmNoKHBhZ2VJbmZvKSA/IHBhZ2VJbmZvLmhhc05leHRQYWdlIDogcGFnZUluZm8uaGFzUHJldmlvdXNQYWdlO1xuXG4vLyBwa2cvZGlzdC1zcmMvaXRlcmF0b3IuanNcbnZhciBjcmVhdGVJdGVyYXRvciA9IChvY3Rva2l0KSA9PiB7XG4gIHJldHVybiAocXVlcnksIGluaXRpYWxQYXJhbWV0ZXJzID0ge30pID0+IHtcbiAgICBsZXQgbmV4dFBhZ2VFeGlzdHMgPSB0cnVlO1xuICAgIGxldCBwYXJhbWV0ZXJzID0geyAuLi5pbml0aWFsUGFyYW1ldGVycyB9O1xuICAgIHJldHVybiB7XG4gICAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdOiAoKSA9PiAoe1xuICAgICAgICBhc3luYyBuZXh0KCkge1xuICAgICAgICAgIGlmICghbmV4dFBhZ2VFeGlzdHMpXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZToge30gfTtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9jdG9raXQuZ3JhcGhxbChcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgcGFnZUluZm9Db250ZXh0ID0gZXh0cmFjdFBhZ2VJbmZvcyhyZXNwb25zZSk7XG4gICAgICAgICAgY29uc3QgbmV4dEN1cnNvclZhbHVlID0gZ2V0Q3Vyc29yRnJvbShwYWdlSW5mb0NvbnRleHQucGFnZUluZm8pO1xuICAgICAgICAgIG5leHRQYWdlRXhpc3RzID0gaGFzQW5vdGhlclBhZ2UocGFnZUluZm9Db250ZXh0LnBhZ2VJbmZvKTtcbiAgICAgICAgICBpZiAobmV4dFBhZ2VFeGlzdHMgJiYgbmV4dEN1cnNvclZhbHVlID09PSBwYXJhbWV0ZXJzLmN1cnNvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1pc3NpbmdDdXJzb3JDaGFuZ2UocGFnZUluZm9Db250ZXh0LCBuZXh0Q3Vyc29yVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgLi4ucGFyYW1ldGVycyxcbiAgICAgICAgICAgIGN1cnNvcjogbmV4dEN1cnNvclZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IHJlc3BvbnNlIH07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcbn07XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0ZS5qc1xuaW1wb3J0IHsgT2N0b2tpdCBhcyBPY3Rva2l0MiB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9tZXJnZS1yZXNwb25zZXMuanNcbnZhciBtZXJnZVJlc3BvbnNlcyA9IChyZXNwb25zZTEsIHJlc3BvbnNlMikgPT4ge1xuICBpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UxKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihyZXNwb25zZTEsIHJlc3BvbnNlMik7XG4gIH1cbiAgY29uc3QgcGF0aCA9IGZpbmRQYWdpbmF0ZWRSZXNvdXJjZVBhdGgocmVzcG9uc2UxKTtcbiAgY29uc3Qgbm9kZXNQYXRoID0gWy4uLnBhdGgsIFwibm9kZXNcIl07XG4gIGNvbnN0IG5ld05vZGVzID0gZ2V0KHJlc3BvbnNlMiwgbm9kZXNQYXRoKTtcbiAgaWYgKG5ld05vZGVzKSB7XG4gICAgc2V0KHJlc3BvbnNlMSwgbm9kZXNQYXRoLCAodmFsdWVzKSA9PiB7XG4gICAgICByZXR1cm4gWy4uLnZhbHVlcywgLi4ubmV3Tm9kZXNdO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGVkZ2VzUGF0aCA9IFsuLi5wYXRoLCBcImVkZ2VzXCJdO1xuICBjb25zdCBuZXdFZGdlcyA9IGdldChyZXNwb25zZTIsIGVkZ2VzUGF0aCk7XG4gIGlmIChuZXdFZGdlcykge1xuICAgIHNldChyZXNwb25zZTEsIGVkZ2VzUGF0aCwgKHZhbHVlcykgPT4ge1xuICAgICAgcmV0dXJuIFsuLi52YWx1ZXMsIC4uLm5ld0VkZ2VzXTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYWdlSW5mb1BhdGggPSBbLi4ucGF0aCwgXCJwYWdlSW5mb1wiXTtcbiAgc2V0KHJlc3BvbnNlMSwgcGFnZUluZm9QYXRoLCBnZXQocmVzcG9uc2UyLCBwYWdlSW5mb1BhdGgpKTtcbiAgcmV0dXJuIHJlc3BvbnNlMTtcbn07XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0ZS5qc1xudmFyIGNyZWF0ZVBhZ2luYXRlID0gKG9jdG9raXQpID0+IHtcbiAgY29uc3QgaXRlcmF0b3IgPSBjcmVhdGVJdGVyYXRvcihvY3Rva2l0KTtcbiAgcmV0dXJuIGFzeW5jIChxdWVyeSwgaW5pdGlhbFBhcmFtZXRlcnMgPSB7fSkgPT4ge1xuICAgIGxldCBtZXJnZWRSZXNwb25zZSA9IHt9O1xuICAgIGZvciBhd2FpdCAoY29uc3QgcmVzcG9uc2Ugb2YgaXRlcmF0b3IoXG4gICAgICBxdWVyeSxcbiAgICAgIGluaXRpYWxQYXJhbWV0ZXJzXG4gICAgKSkge1xuICAgICAgbWVyZ2VkUmVzcG9uc2UgPSBtZXJnZVJlc3BvbnNlcyhtZXJnZWRSZXNwb25zZSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkUmVzcG9uc2U7XG4gIH07XG59O1xuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHBhZ2luYXRlR3JhcGhxbChvY3Rva2l0KSB7XG4gIG9jdG9raXQuZ3JhcGhxbDtcbiAgcmV0dXJuIHtcbiAgICBncmFwaHFsOiBPYmplY3QuYXNzaWduKG9jdG9raXQuZ3JhcGhxbCwge1xuICAgICAgcGFnaW5hdGU6IE9iamVjdC5hc3NpZ24oY3JlYXRlUGFnaW5hdGUob2N0b2tpdCksIHtcbiAgICAgICAgaXRlcmF0b3I6IGNyZWF0ZUl0ZXJhdG9yKG9jdG9raXQpXG4gICAgICB9KVxuICAgIH0pXG4gIH07XG59XG5leHBvcnQge1xuICBwYWdpbmF0ZUdyYXBocWxcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjguMC4wXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9ub3JtYWxpemUtcGFnaW5hdGVkLWxpc3QtcmVzcG9uc2UuanNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhZ2luYXRlZExpc3RSZXNwb25zZShyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICBkYXRhOiBbXVxuICAgIH07XG4gIH1cbiAgY29uc3QgcmVzcG9uc2VOZWVkc05vcm1hbGl6YXRpb24gPSBcInRvdGFsX2NvdW50XCIgaW4gcmVzcG9uc2UuZGF0YSAmJiAhKFwidXJsXCIgaW4gcmVzcG9uc2UuZGF0YSk7XG4gIGlmICghcmVzcG9uc2VOZWVkc05vcm1hbGl6YXRpb24pXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICBjb25zdCBpbmNvbXBsZXRlUmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEuaW5jb21wbGV0ZV9yZXN1bHRzO1xuICBjb25zdCByZXBvc2l0b3J5U2VsZWN0aW9uID0gcmVzcG9uc2UuZGF0YS5yZXBvc2l0b3J5X3NlbGVjdGlvbjtcbiAgY29uc3QgdG90YWxDb3VudCA9IHJlc3BvbnNlLmRhdGEudG90YWxfY291bnQ7XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLmluY29tcGxldGVfcmVzdWx0cztcbiAgZGVsZXRlIHJlc3BvbnNlLmRhdGEucmVwb3NpdG9yeV9zZWxlY3Rpb247XG4gIGRlbGV0ZSByZXNwb25zZS5kYXRhLnRvdGFsX2NvdW50O1xuICBjb25zdCBuYW1lc3BhY2VLZXkgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhKVswXTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGFbbmFtZXNwYWNlS2V5XTtcbiAgcmVzcG9uc2UuZGF0YSA9IGRhdGE7XG4gIGlmICh0eXBlb2YgaW5jb21wbGV0ZVJlc3VsdHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXNwb25zZS5kYXRhLmluY29tcGxldGVfcmVzdWx0cyA9IGluY29tcGxldGVSZXN1bHRzO1xuICB9XG4gIGlmICh0eXBlb2YgcmVwb3NpdG9yeVNlbGVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJlc3BvbnNlLmRhdGEucmVwb3NpdG9yeV9zZWxlY3Rpb24gPSByZXBvc2l0b3J5U2VsZWN0aW9uO1xuICB9XG4gIHJlc3BvbnNlLmRhdGEudG90YWxfY291bnQgPSB0b3RhbENvdW50O1xuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pdGVyYXRvci5qc1xuZnVuY3Rpb24gaXRlcmF0b3Iob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiByb3V0ZSA9PT0gXCJmdW5jdGlvblwiID8gcm91dGUuZW5kcG9pbnQocGFyYW1ldGVycykgOiBvY3Rva2l0LnJlcXVlc3QuZW5kcG9pbnQocm91dGUsIHBhcmFtZXRlcnMpO1xuICBjb25zdCByZXF1ZXN0TWV0aG9kID0gdHlwZW9mIHJvdXRlID09PSBcImZ1bmN0aW9uXCIgPyByb3V0ZSA6IG9jdG9raXQucmVxdWVzdDtcbiAgY29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XG4gIGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gIGxldCB1cmwgPSBvcHRpb25zLnVybDtcbiAgcmV0dXJuIHtcbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdOiAoKSA9PiAoe1xuICAgICAgYXN5bmMgbmV4dCgpIHtcbiAgICAgICAgaWYgKCF1cmwpXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdE1ldGhvZCh7IG1ldGhvZCwgdXJsLCBoZWFkZXJzIH0pO1xuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRSZXNwb25zZSA9IG5vcm1hbGl6ZVBhZ2luYXRlZExpc3RSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgdXJsID0gKChub3JtYWxpemVkUmVzcG9uc2UuaGVhZGVycy5saW5rIHx8IFwiXCIpLm1hdGNoKFxuICAgICAgICAgICAgLzwoW14+XSspPjtcXHMqcmVsPVwibmV4dFwiL1xuICAgICAgICAgICkgfHwgW10pWzFdO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBub3JtYWxpemVkUmVzcG9uc2UgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDkpXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB1cmwgPSBcIlwiO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0ZS5qc1xuZnVuY3Rpb24gcGFnaW5hdGUob2N0b2tpdCwgcm91dGUsIHBhcmFtZXRlcnMsIG1hcEZuKSB7XG4gIGlmICh0eXBlb2YgcGFyYW1ldGVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbWFwRm4gPSBwYXJhbWV0ZXJzO1xuICAgIHBhcmFtZXRlcnMgPSB2b2lkIDA7XG4gIH1cbiAgcmV0dXJuIGdhdGhlcihcbiAgICBvY3Rva2l0LFxuICAgIFtdLFxuICAgIGl0ZXJhdG9yKG9jdG9raXQsIHJvdXRlLCBwYXJhbWV0ZXJzKVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSxcbiAgICBtYXBGblxuICApO1xufVxuZnVuY3Rpb24gZ2F0aGVyKG9jdG9raXQsIHJlc3VsdHMsIGl0ZXJhdG9yMiwgbWFwRm4pIHtcbiAgcmV0dXJuIGl0ZXJhdG9yMi5uZXh0KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgbGV0IGVhcmx5RXhpdCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBlYXJseUV4aXQgPSB0cnVlO1xuICAgIH1cbiAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICBtYXBGbiA/IG1hcEZuKHJlc3VsdC52YWx1ZSwgZG9uZSkgOiByZXN1bHQudmFsdWUuZGF0YVxuICAgICk7XG4gICAgaWYgKGVhcmx5RXhpdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIHJldHVybiBnYXRoZXIob2N0b2tpdCwgcmVzdWx0cywgaXRlcmF0b3IyLCBtYXBGbik7XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvY29tcG9zZS1wYWdpbmF0ZS5qc1xudmFyIGNvbXBvc2VQYWdpbmF0ZVJlc3QgPSBPYmplY3QuYXNzaWduKHBhZ2luYXRlLCB7XG4gIGl0ZXJhdG9yXG59KTtcblxuLy8gcGtnL2Rpc3Qtc3JjL2dlbmVyYXRlZC9wYWdpbmF0aW5nLWVuZHBvaW50cy5qc1xudmFyIHBhZ2luYXRpbmdFbmRwb2ludHMgPSBbXG4gIFwiR0VUIC9hcHAvaG9vay9kZWxpdmVyaWVzXCIsXG4gIFwiR0VUIC9hcHAvaW5zdGFsbGF0aW9uLXJlcXVlc3RzXCIsXG4gIFwiR0VUIC9hcHAvaW5zdGFsbGF0aW9uc1wiLFxuICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9lbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvZXZlbnRzXCIsXG4gIFwiR0VUIC9naXN0c1wiLFxuICBcIkdFVCAvZ2lzdHMvcHVibGljXCIsXG4gIFwiR0VUIC9naXN0cy9zdGFycmVkXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHNcIixcbiAgXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21taXRzXCIsXG4gIFwiR0VUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIixcbiAgXCJHRVQgL2luc3RhbGxhdGlvbi9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL2lzc3Vlc1wiLFxuICBcIkdFVCAvbGljZW5zZXNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCIsXG4gIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnNcIixcbiAgXCJHRVQgL21hcmtldHBsYWNlX2xpc3Rpbmcvc3R1YmJlZC9wbGFucy97cGxhbl9pZH0vYWNjb3VudHNcIixcbiAgXCJHRVQgL25ldHdvcmtzL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiLFxuICBcIkdFVCAvbm90aWZpY2F0aW9uc1wiLFxuICBcIkdFVCAvb3JnYW5pemF0aW9uc1wiLFxuICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHNcIixcbiAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzL3twYXRfcmVxdWVzdF9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIixcbiAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vucy97cGF0X2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9jYWNoZS91c2FnZS1ieS1yZXBvc2l0b3J5XCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcmVxdWlyZWRfd29ya2Zsb3dzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L2V2ZW50c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9mYWlsZWRfaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH0vdGVhbXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vaXNzdWVzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvZGVzcGFjZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHJvamVjdHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcmVwb3NcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vcnVsZXNldHNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9uc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vaW52aXRhdGlvbnNcIixcbiAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9wcm9qZWN0c1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvc1wiLFxuICBcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS90ZWFtc1wiLFxuICBcIkdFVCAvcHJvamVjdHMvY29sdW1ucy97Y29sdW1uX2lkfS9jYXJkc1wiLFxuICBcIkdFVCAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL3Byb2plY3RzL3twcm9qZWN0X2lkfS9jb2x1bW5zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3JnfS97cmVwb30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tc2VjcmV0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3JlcXVpcmVkX3dvcmtmbG93cy97cmVxdWlyZWRfd29ya2Zsb3dfaWRfZm9yX3JlcG99L3J1bnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVyc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXJ0aWZhY3RzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXR0ZW1wdHMve2F0dGVtcHRfbnVtYmVyfS9qb2JzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vam9ic1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfS9hbm5vdGF0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH0vY2hlY2stcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2luc3RhbmNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9kZXZjb250YWluZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vcHVsbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stcnVuc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1zdWl0ZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c2VzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250cmlidXRvcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3QvYWxlcnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBsb3ltZW50cy97ZGVwbG95bWVudF9pZH0vc3RhdHVzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMvYXBwc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZXZlbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9mb3Jrc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnZpdGF0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH0vcmVhY3Rpb25zXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvZXZlbnRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vY29tbWVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9ldmVudHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS90aW1lbGluZVwiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfS9sYWJlbHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L25vdGlmaWNhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHJvamVjdHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21taXRzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2ZpbGVzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfS9jb21tZW50c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3J1bGVzL2JyYW5jaGVzL3ticmFuY2h9XCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9sb2NhdGlvbnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXJnYXplcnNcIixcbiAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N1YnNjcmliZXJzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzXCIsXG4gIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90ZWFtc1wiLFxuICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdG9waWNzXCIsXG4gIFwiR0VUIC9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH0vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzXCIsXG4gIFwiR0VUIC9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzXCIsXG4gIFwiR0VUIC9zZWFyY2gvY29kZVwiLFxuICBcIkdFVCAvc2VhcmNoL2NvbW1pdHNcIixcbiAgXCJHRVQgL3NlYXJjaC9pc3N1ZXNcIixcbiAgXCJHRVQgL3NlYXJjaC9sYWJlbHNcIixcbiAgXCJHRVQgL3NlYXJjaC9yZXBvc2l0b3JpZXNcIixcbiAgXCJHRVQgL3NlYXJjaC90b3BpY3NcIixcbiAgXCJHRVQgL3NlYXJjaC91c2Vyc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfS9yZWFjdGlvbnNcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9uc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vbWVtYmVyc1wiLFxuICBcIkdFVCAvdGVhbXMve3RlYW1faWR9L3Byb2plY3RzXCIsXG4gIFwiR0VUIC90ZWFtcy97dGVhbV9pZH0vcmVwb3NcIixcbiAgXCJHRVQgL3RlYW1zL3t0ZWFtX2lkfS90ZWFtc1wiLFxuICBcIkdFVCAvdXNlci9ibG9ja3NcIixcbiAgXCJHRVQgL3VzZXIvY29kZXNwYWNlc1wiLFxuICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHNcIixcbiAgXCJHRVQgL3VzZXIvZW1haWxzXCIsXG4gIFwiR0VUIC91c2VyL2ZvbGxvd2Vyc1wiLFxuICBcIkdFVCAvdXNlci9mb2xsb3dpbmdcIixcbiAgXCJHRVQgL3VzZXIvZ3BnX2tleXNcIixcbiAgXCJHRVQgL3VzZXIvaW5zdGFsbGF0aW9uc1wiLFxuICBcIkdFVCAvdXNlci9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L3JlcG9zaXRvcmllc1wiLFxuICBcIkdFVCAvdXNlci9pc3N1ZXNcIixcbiAgXCJHRVQgL3VzZXIva2V5c1wiLFxuICBcIkdFVCAvdXNlci9tYXJrZXRwbGFjZV9wdXJjaGFzZXNcIixcbiAgXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzL3N0dWJiZWRcIixcbiAgXCJHRVQgL3VzZXIvbWVtYmVyc2hpcHMvb3Jnc1wiLFxuICBcIkdFVCAvdXNlci9taWdyYXRpb25zXCIsXG4gIFwiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3NpdG9yaWVzXCIsXG4gIFwiR0VUIC91c2VyL29yZ3NcIixcbiAgXCJHRVQgL3VzZXIvcGFja2FnZXNcIixcbiAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgXCJHRVQgL3VzZXIvcHVibGljX2VtYWlsc1wiLFxuICBcIkdFVCAvdXNlci9yZXBvc1wiLFxuICBcIkdFVCAvdXNlci9yZXBvc2l0b3J5X2ludml0YXRpb25zXCIsXG4gIFwiR0VUIC91c2VyL3NvY2lhbF9hY2NvdW50c1wiLFxuICBcIkdFVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzXCIsXG4gIFwiR0VUIC91c2VyL3N0YXJyZWRcIixcbiAgXCJHRVQgL3VzZXIvc3Vic2NyaXB0aW9uc1wiLFxuICBcIkdFVCAvdXNlci90ZWFtc1wiLFxuICBcIkdFVCAvdXNlcnNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9vcmdzL3tvcmd9XCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9wdWJsaWNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZm9sbG93ZXJzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2luZ1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9naXN0c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ncGdfa2V5c1wiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9rZXlzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L29yZ3NcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVjZWl2ZWRfZXZlbnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50cy9wdWJsaWNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVwb3NcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc29jaWFsX2FjY291bnRzXCIsXG4gIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NzaF9zaWduaW5nX2tleXNcIixcbiAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc3RhcnJlZFwiLFxuICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdWJzY3JpcHRpb25zXCJcbl07XG5cbi8vIHBrZy9kaXN0LXNyYy9wYWdpbmF0aW5nLWVuZHBvaW50cy5qc1xuZnVuY3Rpb24gaXNQYWdpbmF0aW5nRW5kcG9pbnQoYXJnKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHBhZ2luYXRpbmdFbmRwb2ludHMuaW5jbHVkZXMoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5mdW5jdGlvbiBwYWdpbmF0ZVJlc3Qob2N0b2tpdCkge1xuICByZXR1cm4ge1xuICAgIHBhZ2luYXRlOiBPYmplY3QuYXNzaWduKHBhZ2luYXRlLmJpbmQobnVsbCwgb2N0b2tpdCksIHtcbiAgICAgIGl0ZXJhdG9yOiBpdGVyYXRvci5iaW5kKG51bGwsIG9jdG9raXQpXG4gICAgfSlcbiAgfTtcbn1cbnBhZ2luYXRlUmVzdC5WRVJTSU9OID0gVkVSU0lPTjtcbmV4cG9ydCB7XG4gIGNvbXBvc2VQYWdpbmF0ZVJlc3QsXG4gIGlzUGFnaW5hdGluZ0VuZHBvaW50LFxuICBwYWdpbmF0ZVJlc3QsXG4gIHBhZ2luYXRpbmdFbmRwb2ludHNcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjkuMC4wXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9nZW5lcmF0ZWQvZW5kcG9pbnRzLmpzXG52YXIgRW5kcG9pbnRzID0ge1xuICBhY3Rpb25zOiB7XG4gICAgYWRkQ3VzdG9tTGFiZWxzVG9TZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiXG4gICAgXSxcbiAgICBhZGRDdXN0b21MYWJlbHNUb1NlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHNcIlxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdWYXJpYWJsZTogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9SZXF1aXJlZFdvcmtmbG93OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3JlcXVpcmVkX3dvcmtmbG93cy97cmVxdWlyZWRfd29ya2Zsb3dfaWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgYXBwcm92ZVdvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcHByb3ZlXCJcbiAgICBdLFxuICAgIGNhbmNlbFdvcmtmbG93UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9jYW5jZWxcIlxuICAgIF0sXG4gICAgY3JlYXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJQT1NUIC9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzXCJcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRW52aXJvbm1lbnRTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy97c2VjcmV0X25hbWV9XCJcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIlxuICAgIF0sXG4gICAgY3JlYXRlT3JnVmFyaWFibGU6IFtcIlBPU1QgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXNcIl0sXG4gICAgY3JlYXRlUmVnaXN0cmF0aW9uVG9rZW5Gb3JPcmc6IFtcbiAgICAgIFwiUE9TVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMvcmVnaXN0cmF0aW9uLXRva2VuXCJcbiAgICBdLFxuICAgIGNyZWF0ZVJlZ2lzdHJhdGlvblRva2VuRm9yUmVwbzogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvcmVnaXN0cmF0aW9uLXRva2VuXCJcbiAgICBdLFxuICAgIGNyZWF0ZVJlbW92ZVRva2VuRm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9yZW1vdmUtdG9rZW5cIl0sXG4gICAgY3JlYXRlUmVtb3ZlVG9rZW5Gb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9yZW1vdmUtdG9rZW5cIlxuICAgIF0sXG4gICAgY3JlYXRlUmVwb1ZhcmlhYmxlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBjcmVhdGVSZXF1aXJlZFdvcmtmbG93OiBbXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcmVxdWlyZWRfd29ya2Zsb3dzXCJdLFxuICAgIGNyZWF0ZVdvcmtmbG93RGlzcGF0Y2g6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS9kaXNwYXRjaGVzXCJcbiAgICBdLFxuICAgIGRlbGV0ZUFjdGlvbnNDYWNoZUJ5SWQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlcy97Y2FjaGVfaWR9XCJcbiAgICBdLFxuICAgIGRlbGV0ZUFjdGlvbnNDYWNoZUJ5S2V5OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9jYWNoZXN7P2tleSxyZWZ9XCJcbiAgICBdLFxuICAgIGRlbGV0ZUFydGlmYWN0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHMve2FydGlmYWN0X2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVFbnZpcm9ubWVudFNlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH0vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIlxuICAgIF0sXG4gICAgZGVsZXRlRW52aXJvbm1lbnRWYXJpYWJsZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH0vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXMve25hbWV9XCJcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1NlY3JldDogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJdLFxuICAgIGRlbGV0ZU9yZ1ZhcmlhYmxlOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIGRlbGV0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXG4gICAgXSxcbiAgICBkZWxldGVSZXBvVmFyaWFibGU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIlxuICAgIF0sXG4gICAgZGVsZXRlUmVxdWlyZWRXb3JrZmxvdzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3Mve3JlcXVpcmVkX3dvcmtmbG93X2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVTZWxmSG9zdGVkUnVubmVyRnJvbU9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9XCJcbiAgICBdLFxuICAgIGRlbGV0ZVNlbGZIb3N0ZWRSdW5uZXJGcm9tUmVwbzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVXb3JrZmxvd1J1bjogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH1cIl0sXG4gICAgZGVsZXRlV29ya2Zsb3dSdW5Mb2dzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2xvZ3NcIlxuICAgIF0sXG4gICAgZGlzYWJsZVNlbGVjdGVkUmVwb3NpdG9yeUdpdGh1YkFjdGlvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiXG4gICAgXSxcbiAgICBkaXNhYmxlV29ya2Zsb3c6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2Rpc2FibGVcIlxuICAgIF0sXG4gICAgZG93bmxvYWRBcnRpZmFjdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzL3thcnRpZmFjdF9pZH0ve2FyY2hpdmVfZm9ybWF0fVwiXG4gICAgXSxcbiAgICBkb3dubG9hZEpvYkxvZ3NGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvam9icy97am9iX2lkfS9sb2dzXCJcbiAgICBdLFxuICAgIGRvd25sb2FkV29ya2Zsb3dSdW5BdHRlbXB0TG9nczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hdHRlbXB0cy97YXR0ZW1wdF9udW1iZXJ9L2xvZ3NcIlxuICAgIF0sXG4gICAgZG93bmxvYWRXb3JrZmxvd1J1bkxvZ3M6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vbG9nc1wiXG4gICAgXSxcbiAgICBlbmFibGVTZWxlY3RlZFJlcG9zaXRvcnlHaXRodWJBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgZW5hYmxlV29ya2Zsb3c6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93cy97d29ya2Zsb3dfaWR9L2VuYWJsZVwiXG4gICAgXSxcbiAgICBnZW5lcmF0ZVJ1bm5lckppdGNvbmZpZ0Zvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9nZW5lcmF0ZS1qaXRjb25maWdcIlxuICAgIF0sXG4gICAgZ2VuZXJhdGVSdW5uZXJKaXRjb25maWdGb3JSZXBvOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVubmVycy9nZW5lcmF0ZS1qaXRjb25maWdcIlxuICAgIF0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlTGlzdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlc1wiXSxcbiAgICBnZXRBY3Rpb25zQ2FjaGVVc2FnZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2NhY2hlL3VzYWdlXCJdLFxuICAgIGdldEFjdGlvbnNDYWNoZVVzYWdlQnlSZXBvRm9yT3JnOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2NhY2hlL3VzYWdlLWJ5LXJlcG9zaXRvcnlcIlxuICAgIF0sXG4gICAgZ2V0QWN0aW9uc0NhY2hlVXNhZ2VGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL2NhY2hlL3VzYWdlXCJdLFxuICAgIGdldEFsbG93ZWRBY3Rpb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3NlbGVjdGVkLWFjdGlvbnNcIlxuICAgIF0sXG4gICAgZ2V0QWxsb3dlZEFjdGlvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCJcbiAgICBdLFxuICAgIGdldEFydGlmYWN0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzL3thcnRpZmFjdF9pZH1cIl0sXG4gICAgZ2V0RW52aXJvbm1lbnRQdWJsaWNLZXk6IFtcbiAgICAgIFwiR0VUIC9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vc2VjcmV0cy9wdWJsaWMta2V5XCJcbiAgICBdLFxuICAgIGdldEVudmlyb25tZW50U2VjcmV0OiBbXG4gICAgICBcIkdFVCAvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIkdFVCAvcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L3ZhcmlhYmxlcy97bmFtZX1cIlxuICAgIF0sXG4gICAgZ2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCJcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNEZWZhdWx0V29ya2Zsb3dQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL3dvcmtmbG93XCJcbiAgICBdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiXG4gICAgXSxcbiAgICBnZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNSZXBvc2l0b3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiXG4gICAgXSxcbiAgICBnZXRKb2JGb3JXb3JrZmxvd1J1bjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0T3JnVmFyaWFibGU6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlcy97bmFtZX1cIl0sXG4gICAgZ2V0UGVuZGluZ0RlcGxveW1lbnRzRm9yUnVuOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3BlbmRpbmdfZGVwbG95bWVudHNcIlxuICAgIF0sXG4gICAgZ2V0UmVwb1Blcm1pc3Npb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9wZXJtaXNzaW9uc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImFjdGlvbnNcIiwgXCJnZXRHaXRodWJBY3Rpb25zUGVybWlzc2lvbnNSZXBvc2l0b3J5XCJdIH1cbiAgICBdLFxuICAgIGdldFJlcG9QdWJsaWNLZXk6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0UmVwb1JlcXVpcmVkV29ya2Zsb3c6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3JnfS97cmVwb30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3Mve3JlcXVpcmVkX3dvcmtmbG93X2lkX2Zvcl9yZXBvfVwiXG4gICAgXSxcbiAgICBnZXRSZXBvUmVxdWlyZWRXb3JrZmxvd1VzYWdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve29yZ30ve3JlcG99L2FjdGlvbnMvcmVxdWlyZWRfd29ya2Zsb3dzL3tyZXF1aXJlZF93b3JrZmxvd19pZF9mb3JfcmVwb30vdGltaW5nXCJcbiAgICBdLFxuICAgIGdldFJlcG9TZWNyZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UmVwb1ZhcmlhYmxlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfVwiXSxcbiAgICBnZXRSZXF1aXJlZFdvcmtmbG93OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3JlcXVpcmVkX3dvcmtmbG93cy97cmVxdWlyZWRfd29ya2Zsb3dfaWR9XCJcbiAgICBdLFxuICAgIGdldFJldmlld3NGb3JSdW46IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXBwcm92YWxzXCJcbiAgICBdLFxuICAgIGdldFNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIl0sXG4gICAgZ2V0U2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH1cIlxuICAgIF0sXG4gICAgZ2V0V29ya2Zsb3c6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfVwiXSxcbiAgICBnZXRXb3JrZmxvd0FjY2Vzc1RvUmVwb3NpdG9yeTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvYWNjZXNzXCJcbiAgICBdLFxuICAgIGdldFdvcmtmbG93UnVuOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfVwiXSxcbiAgICBnZXRXb3JrZmxvd1J1bkF0dGVtcHQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vYXR0ZW1wdHMve2F0dGVtcHRfbnVtYmVyfVwiXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvd1J1blVzYWdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3RpbWluZ1wiXG4gICAgXSxcbiAgICBnZXRXb3JrZmxvd1VzYWdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy93b3JrZmxvd3Mve3dvcmtmbG93X2lkfS90aW1pbmdcIlxuICAgIF0sXG4gICAgbGlzdEFydGlmYWN0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9hcnRpZmFjdHNcIl0sXG4gICAgbGlzdEVudmlyb25tZW50U2VjcmV0czogW1xuICAgICAgXCJHRVQgL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH0vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9zZWNyZXRzXCJcbiAgICBdLFxuICAgIGxpc3RFbnZpcm9ubWVudFZhcmlhYmxlczogW1xuICAgICAgXCJHRVQgL3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH0vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS92YXJpYWJsZXNcIlxuICAgIF0sXG4gICAgbGlzdEpvYnNGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9qb2JzXCJcbiAgICBdLFxuICAgIGxpc3RKb2JzRm9yV29ya2Zsb3dSdW5BdHRlbXB0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2F0dGVtcHRzL3thdHRlbXB0X251bWJlcn0vam9ic1wiXG4gICAgXSxcbiAgICBsaXN0TGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiXG4gICAgXSxcbiAgICBsaXN0TGFiZWxzRm9yU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCJcbiAgICBdLFxuICAgIGxpc3RPcmdTZWNyZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzXCJdLFxuICAgIGxpc3RPcmdWYXJpYWJsZXM6IFtcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBsaXN0UmVwb09yZ2FuaXphdGlvblNlY3JldHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL29yZ2FuaXphdGlvbi1zZWNyZXRzXCJcbiAgICBdLFxuICAgIGxpc3RSZXBvT3JnYW5pemF0aW9uVmFyaWFibGVzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9vcmdhbml6YXRpb24tdmFyaWFibGVzXCJcbiAgICBdLFxuICAgIGxpc3RSZXBvUmVxdWlyZWRXb3JrZmxvd3M6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3JnfS97cmVwb30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3NcIlxuICAgIF0sXG4gICAgbGlzdFJlcG9TZWNyZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvc2VjcmV0c1wiXSxcbiAgICBsaXN0UmVwb1ZhcmlhYmxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3ZhcmlhYmxlc1wiXSxcbiAgICBsaXN0UmVwb1dvcmtmbG93czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3dvcmtmbG93c1wiXSxcbiAgICBsaXN0UmVxdWlyZWRXb3JrZmxvd1J1bnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3JlcXVpcmVkX3dvcmtmbG93cy97cmVxdWlyZWRfd29ya2Zsb3dfaWRfZm9yX3JlcG99L3J1bnNcIlxuICAgIF0sXG4gICAgbGlzdFJlcXVpcmVkV29ya2Zsb3dzOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3NcIl0sXG4gICAgbGlzdFJ1bm5lckFwcGxpY2F0aW9uc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy9kb3dubG9hZHNcIl0sXG4gICAgbGlzdFJ1bm5lckFwcGxpY2F0aW9uc0ZvclJlcG86IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMvZG93bmxvYWRzXCJcbiAgICBdLFxuICAgIGxpc3RTZWxlY3RlZFJlcG9zRm9yT3JnU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9hY3Rpb25zL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NGb3JPcmdWYXJpYWJsZTogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9L3JlcG9zaXRvcmllc1wiXG4gICAgXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc2l0b3JpZXNFbmFibGVkR2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgbGlzdFNlbGVjdGVkUmVwb3NpdG9yaWVzUmVxdWlyZWRXb3JrZmxvdzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3Mve3JlcXVpcmVkX3dvcmtmbG93X2lkfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgbGlzdFNlbGZIb3N0ZWRSdW5uZXJzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzXCJdLFxuICAgIGxpc3RTZWxmSG9zdGVkUnVubmVyc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzXCJdLFxuICAgIGxpc3RXb3JrZmxvd1J1bkFydGlmYWN0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9hcnRpZmFjdHNcIlxuICAgIF0sXG4gICAgbGlzdFdvcmtmbG93UnVuczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvd29ya2Zsb3dzL3t3b3JrZmxvd19pZH0vcnVuc1wiXG4gICAgXSxcbiAgICBsaXN0V29ya2Zsb3dSdW5zRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnNcIl0sXG4gICAgcmVSdW5Kb2JGb3JXb3JrZmxvd1J1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL2pvYnMve2pvYl9pZH0vcmVydW5cIlxuICAgIF0sXG4gICAgcmVSdW5Xb3JrZmxvdzogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L3JlcnVuXCJdLFxuICAgIHJlUnVuV29ya2Zsb3dGYWlsZWRKb2JzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcnVucy97cnVuX2lkfS9yZXJ1bi1mYWlsZWQtam9ic1wiXG4gICAgXSxcbiAgICByZW1vdmVBbGxDdXN0b21MYWJlbHNGcm9tU2VsZkhvc3RlZFJ1bm5lckZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiXG4gICAgXSxcbiAgICByZW1vdmVBbGxDdXN0b21MYWJlbHNGcm9tU2VsZkhvc3RlZFJ1bm5lckZvclJlcG86IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCJcbiAgICBdLFxuICAgIHJlbW92ZUN1c3RvbUxhYmVsRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvcnVubmVycy97cnVubmVyX2lkfS9sYWJlbHMve25hbWV9XCJcbiAgICBdLFxuICAgIHJlbW92ZUN1c3RvbUxhYmVsRnJvbVNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVscy97bmFtZX1cIlxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vYWN0aW9ucy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiXG4gICAgXSxcbiAgICByZW1vdmVTZWxlY3RlZFJlcG9Gcm9tT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCJcbiAgICBdLFxuICAgIHJlbW92ZVNlbGVjdGVkUmVwb0Zyb21SZXF1aXJlZFdvcmtmbG93OiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9hY3Rpb25zL3JlcXVpcmVkX3dvcmtmbG93cy97cmVxdWlyZWRfd29ya2Zsb3dfaWR9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgcmV2aWV3Q3VzdG9tR2F0ZXNGb3JSdW46IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5zL3tydW5faWR9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlXCJcbiAgICBdLFxuICAgIHJldmlld1BlbmRpbmdEZXBsb3ltZW50c0ZvclJ1bjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3J1bnMve3J1bl9pZH0vcGVuZGluZ19kZXBsb3ltZW50c1wiXG4gICAgXSxcbiAgICBzZXRBbGxvd2VkQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9zZWxlY3RlZC1hY3Rpb25zXCJcbiAgICBdLFxuICAgIHNldEFsbG93ZWRBY3Rpb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvc2VsZWN0ZWQtYWN0aW9uc1wiXG4gICAgXSxcbiAgICBzZXRDdXN0b21MYWJlbHNGb3JTZWxmSG9zdGVkUnVubmVyRm9yT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3J1bm5lcnMve3J1bm5lcl9pZH0vbGFiZWxzXCJcbiAgICBdLFxuICAgIHNldEN1c3RvbUxhYmVsc0ZvclNlbGZIb3N0ZWRSdW5uZXJGb3JSZXBvOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy9ydW5uZXJzL3tydW5uZXJfaWR9L2xhYmVsc1wiXG4gICAgXSxcbiAgICBzZXRHaXRodWJBY3Rpb25zRGVmYXVsdFdvcmtmbG93UGVybWlzc2lvbnNPcmdhbml6YXRpb246IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIlxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc0RlZmF1bHRXb3JrZmxvd1Blcm1pc3Npb25zUmVwb3NpdG9yeTogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2FjdGlvbnMvcGVybWlzc2lvbnMvd29ya2Zsb3dcIlxuICAgIF0sXG4gICAgc2V0R2l0aHViQWN0aW9uc1Blcm1pc3Npb25zT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9hY3Rpb25zL3Blcm1pc3Npb25zXCJcbiAgICBdLFxuICAgIHNldEdpdGh1YkFjdGlvbnNQZXJtaXNzaW9uc1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zXCJcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiXG4gICAgXSxcbiAgICBzZXRTZWxlY3RlZFJlcG9zRm9yT3JnVmFyaWFibGU6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2FjdGlvbnMvdmFyaWFibGVzL3tuYW1lfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc1RvUmVxdWlyZWRXb3JrZmxvdzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3Mve3JlcXVpcmVkX3dvcmtmbG93X2lkfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc2l0b3JpZXNFbmFibGVkR2l0aHViQWN0aW9uc09yZ2FuaXphdGlvbjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vYWN0aW9ucy9wZXJtaXNzaW9ucy9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgc2V0V29ya2Zsb3dBY2Nlc3NUb1JlcG9zaXRvcnk6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hY3Rpb25zL3Blcm1pc3Npb25zL2FjY2Vzc1wiXG4gICAgXSxcbiAgICB1cGRhdGVFbnZpcm9ubWVudFZhcmlhYmxlOiBbXG4gICAgICBcIlBBVENIIC9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vdmFyaWFibGVzL3tuYW1lfVwiXG4gICAgXSxcbiAgICB1cGRhdGVPcmdWYXJpYWJsZTogW1wiUEFUQ0ggL29yZ3Mve29yZ30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJdLFxuICAgIHVwZGF0ZVJlcG9WYXJpYWJsZTogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYWN0aW9ucy92YXJpYWJsZXMve25hbWV9XCJcbiAgICBdLFxuICAgIHVwZGF0ZVJlcXVpcmVkV29ya2Zsb3c6IFtcbiAgICAgIFwiUEFUQ0ggL29yZ3Mve29yZ30vYWN0aW9ucy9yZXF1aXJlZF93b3JrZmxvd3Mve3JlcXVpcmVkX3dvcmtmbG93X2lkfVwiXG4gICAgXVxuICB9LFxuICBhY3Rpdml0eToge1xuICAgIGNoZWNrUmVwb0lzU3RhcnJlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zdGFycmVkL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGRlbGV0ZVJlcG9TdWJzY3JpcHRpb246IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vc3Vic2NyaXB0aW9uXCJdLFxuICAgIGRlbGV0ZVRocmVhZFN1YnNjcmlwdGlvbjogW1xuICAgICAgXCJERUxFVEUgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfS9zdWJzY3JpcHRpb25cIlxuICAgIF0sXG4gICAgZ2V0RmVlZHM6IFtcIkdFVCAvZmVlZHNcIl0sXG4gICAgZ2V0UmVwb1N1YnNjcmlwdGlvbjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpcHRpb25cIl0sXG4gICAgZ2V0VGhyZWFkOiBbXCJHRVQgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfVwiXSxcbiAgICBnZXRUaHJlYWRTdWJzY3JpcHRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL25vdGlmaWNhdGlvbnMvdGhyZWFkcy97dGhyZWFkX2lkfS9zdWJzY3JpcHRpb25cIlxuICAgIF0sXG4gICAgbGlzdEV2ZW50c0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vZXZlbnRzXCJdLFxuICAgIGxpc3ROb3RpZmljYXRpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvbm90aWZpY2F0aW9uc1wiXSxcbiAgICBsaXN0T3JnRXZlbnRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2V2ZW50cy9vcmdzL3tvcmd9XCJcbiAgICBdLFxuICAgIGxpc3RQdWJsaWNFdmVudHM6IFtcIkdFVCAvZXZlbnRzXCJdLFxuICAgIGxpc3RQdWJsaWNFdmVudHNGb3JSZXBvTmV0d29yazogW1wiR0VUIC9uZXR3b3Jrcy97b3duZXJ9L3tyZXBvfS9ldmVudHNcIl0sXG4gICAgbGlzdFB1YmxpY0V2ZW50c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ldmVudHMvcHVibGljXCJdLFxuICAgIGxpc3RQdWJsaWNPcmdFdmVudHM6IFtcIkdFVCAvb3Jncy97b3JnfS9ldmVudHNcIl0sXG4gICAgbGlzdFJlY2VpdmVkRXZlbnRzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3JlY2VpdmVkX2V2ZW50c1wiXSxcbiAgICBsaXN0UmVjZWl2ZWRQdWJsaWNFdmVudHNGb3JVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9yZWNlaXZlZF9ldmVudHMvcHVibGljXCJcbiAgICBdLFxuICAgIGxpc3RSZXBvRXZlbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2V2ZW50c1wiXSxcbiAgICBsaXN0UmVwb05vdGlmaWNhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L25vdGlmaWNhdGlvbnNcIlxuICAgIF0sXG4gICAgbGlzdFJlcG9zU3RhcnJlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zdGFycmVkXCJdLFxuICAgIGxpc3RSZXBvc1N0YXJyZWRCeVVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdGFycmVkXCJdLFxuICAgIGxpc3RSZXBvc1dhdGNoZWRCeVVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9zdWJzY3JpcHRpb25zXCJdLFxuICAgIGxpc3RTdGFyZ2F6ZXJzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGFyZ2F6ZXJzXCJdLFxuICAgIGxpc3RXYXRjaGVkUmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3N1YnNjcmlwdGlvbnNcIl0sXG4gICAgbGlzdFdhdGNoZXJzRm9yUmVwbzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpYmVyc1wiXSxcbiAgICBtYXJrTm90aWZpY2F0aW9uc0FzUmVhZDogW1wiUFVUIC9ub3RpZmljYXRpb25zXCJdLFxuICAgIG1hcmtSZXBvTm90aWZpY2F0aW9uc0FzUmVhZDogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ub3RpZmljYXRpb25zXCJdLFxuICAgIG1hcmtUaHJlYWRBc1JlYWQ6IFtcIlBBVENIIC9ub3RpZmljYXRpb25zL3RocmVhZHMve3RocmVhZF9pZH1cIl0sXG4gICAgc2V0UmVwb1N1YnNjcmlwdGlvbjogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdWJzY3JpcHRpb25cIl0sXG4gICAgc2V0VGhyZWFkU3Vic2NyaXB0aW9uOiBbXG4gICAgICBcIlBVVCAvbm90aWZpY2F0aW9ucy90aHJlYWRzL3t0aHJlYWRfaWR9L3N1YnNjcmlwdGlvblwiXG4gICAgXSxcbiAgICBzdGFyUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQVVQgL3VzZXIvc3RhcnJlZC97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICB1bnN0YXJSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9zdGFycmVkL3tvd25lcn0ve3JlcG99XCJdXG4gIH0sXG4gIGFwcHM6IHtcbiAgICBhZGRSZXBvVG9JbnN0YWxsYXRpb246IFtcbiAgICAgIFwiUFVUIC91c2VyL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImFwcHNcIiwgXCJhZGRSZXBvVG9JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9XG4gICAgXSxcbiAgICBhZGRSZXBvVG9JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCJcbiAgICBdLFxuICAgIGNoZWNrVG9rZW46IFtcIlBPU1QgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlblwiXSxcbiAgICBjcmVhdGVGcm9tTWFuaWZlc3Q6IFtcIlBPU1QgL2FwcC1tYW5pZmVzdHMve2NvZGV9L2NvbnZlcnNpb25zXCJdLFxuICAgIGNyZWF0ZUluc3RhbGxhdGlvbkFjY2Vzc1Rva2VuOiBbXG4gICAgICBcIlBPU1QgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9L2FjY2Vzc190b2tlbnNcIlxuICAgIF0sXG4gICAgZGVsZXRlQXV0aG9yaXphdGlvbjogW1wiREVMRVRFIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vZ3JhbnRcIl0sXG4gICAgZGVsZXRlSW5zdGFsbGF0aW9uOiBbXCJERUxFVEUgL2FwcC9pbnN0YWxsYXRpb25zL3tpbnN0YWxsYXRpb25faWR9XCJdLFxuICAgIGRlbGV0ZVRva2VuOiBbXCJERUxFVEUgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlblwiXSxcbiAgICBnZXRBdXRoZW50aWNhdGVkOiBbXCJHRVQgL2FwcFwiXSxcbiAgICBnZXRCeVNsdWc6IFtcIkdFVCAvYXBwcy97YXBwX3NsdWd9XCJdLFxuICAgIGdldEluc3RhbGxhdGlvbjogW1wiR0VUIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfVwiXSxcbiAgICBnZXRPcmdJbnN0YWxsYXRpb246IFtcIkdFVCAvb3Jncy97b3JnfS9pbnN0YWxsYXRpb25cIl0sXG4gICAgZ2V0UmVwb0luc3RhbGxhdGlvbjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnN0YWxsYXRpb25cIl0sXG4gICAgZ2V0U3Vic2NyaXB0aW9uUGxhbkZvckFjY291bnQ6IFtcbiAgICAgIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL2FjY291bnRzL3thY2NvdW50X2lkfVwiXG4gICAgXSxcbiAgICBnZXRTdWJzY3JpcHRpb25QbGFuRm9yQWNjb3VudFN0dWJiZWQ6IFtcbiAgICAgIFwiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvYWNjb3VudHMve2FjY291bnRfaWR9XCJcbiAgICBdLFxuICAgIGdldFVzZXJJbnN0YWxsYXRpb246IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9pbnN0YWxsYXRpb25cIl0sXG4gICAgZ2V0V2ViaG9va0NvbmZpZ0ZvckFwcDogW1wiR0VUIC9hcHAvaG9vay9jb25maWdcIl0sXG4gICAgZ2V0V2ViaG9va0RlbGl2ZXJ5OiBbXCJHRVQgL2FwcC9ob29rL2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfVwiXSxcbiAgICBsaXN0QWNjb3VudHNGb3JQbGFuOiBbXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnMve3BsYW5faWR9L2FjY291bnRzXCJdLFxuICAgIGxpc3RBY2NvdW50c0ZvclBsYW5TdHViYmVkOiBbXG4gICAgICBcIkdFVCAvbWFya2V0cGxhY2VfbGlzdGluZy9zdHViYmVkL3BsYW5zL3twbGFuX2lkfS9hY2NvdW50c1wiXG4gICAgXSxcbiAgICBsaXN0SW5zdGFsbGF0aW9uUmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvblJlcXVlc3RzRm9yQXV0aGVudGljYXRlZEFwcDogW1xuICAgICAgXCJHRVQgL2FwcC9pbnN0YWxsYXRpb24tcmVxdWVzdHNcIlxuICAgIF0sXG4gICAgbGlzdEluc3RhbGxhdGlvbnM6IFtcIkdFVCAvYXBwL2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdEluc3RhbGxhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2luc3RhbGxhdGlvbnNcIl0sXG4gICAgbGlzdFBsYW5zOiBbXCJHRVQgL21hcmtldHBsYWNlX2xpc3RpbmcvcGxhbnNcIl0sXG4gICAgbGlzdFBsYW5zU3R1YmJlZDogW1wiR0VUIC9tYXJrZXRwbGFjZV9saXN0aW5nL3N0dWJiZWQvcGxhbnNcIl0sXG4gICAgbGlzdFJlcG9zQWNjZXNzaWJsZVRvSW5zdGFsbGF0aW9uOiBbXCJHRVQgL2luc3RhbGxhdGlvbi9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFN1YnNjcmlwdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21hcmtldHBsYWNlX3B1cmNoYXNlc1wiXSxcbiAgICBsaXN0U3Vic2NyaXB0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyU3R1YmJlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvbWFya2V0cGxhY2VfcHVyY2hhc2VzL3N0dWJiZWRcIlxuICAgIF0sXG4gICAgbGlzdFdlYmhvb2tEZWxpdmVyaWVzOiBbXCJHRVQgL2FwcC9ob29rL2RlbGl2ZXJpZXNcIl0sXG4gICAgcmVkZWxpdmVyV2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIlBPU1QgL2FwcC9ob29rL2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfS9hdHRlbXB0c1wiXG4gICAgXSxcbiAgICByZW1vdmVSZXBvRnJvbUluc3RhbGxhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiYXBwc1wiLCBcInJlbW92ZVJlcG9Gcm9tSW5zdGFsbGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgcmVtb3ZlUmVwb0Zyb21JbnN0YWxsYXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCJcbiAgICBdLFxuICAgIHJlc2V0VG9rZW46IFtcIlBBVENIIC9hcHBsaWNhdGlvbnMve2NsaWVudF9pZH0vdG9rZW5cIl0sXG4gICAgcmV2b2tlSW5zdGFsbGF0aW9uQWNjZXNzVG9rZW46IFtcIkRFTEVURSAvaW5zdGFsbGF0aW9uL3Rva2VuXCJdLFxuICAgIHNjb3BlVG9rZW46IFtcIlBPU1QgL2FwcGxpY2F0aW9ucy97Y2xpZW50X2lkfS90b2tlbi9zY29wZWRcIl0sXG4gICAgc3VzcGVuZEluc3RhbGxhdGlvbjogW1wiUFVUIC9hcHAvaW5zdGFsbGF0aW9ucy97aW5zdGFsbGF0aW9uX2lkfS9zdXNwZW5kZWRcIl0sXG4gICAgdW5zdXNwZW5kSW5zdGFsbGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvYXBwL2luc3RhbGxhdGlvbnMve2luc3RhbGxhdGlvbl9pZH0vc3VzcGVuZGVkXCJcbiAgICBdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JBcHA6IFtcIlBBVENIIC9hcHAvaG9vay9jb25maWdcIl1cbiAgfSxcbiAgYmlsbGluZzoge1xuICAgIGdldEdpdGh1YkFjdGlvbnNCaWxsaW5nT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9hY3Rpb25zXCJdLFxuICAgIGdldEdpdGh1YkFjdGlvbnNCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9hY3Rpb25zXCJcbiAgICBdLFxuICAgIGdldEdpdGh1YlBhY2thZ2VzQmlsbGluZ09yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NldHRpbmdzL2JpbGxpbmcvcGFja2FnZXNcIl0sXG4gICAgZ2V0R2l0aHViUGFja2FnZXNCaWxsaW5nVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vc2V0dGluZ3MvYmlsbGluZy9wYWNrYWdlc1wiXG4gICAgXSxcbiAgICBnZXRTaGFyZWRTdG9yYWdlQmlsbGluZ09yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vc2V0dGluZ3MvYmlsbGluZy9zaGFyZWQtc3RvcmFnZVwiXG4gICAgXSxcbiAgICBnZXRTaGFyZWRTdG9yYWdlQmlsbGluZ1VzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NldHRpbmdzL2JpbGxpbmcvc2hhcmVkLXN0b3JhZ2VcIlxuICAgIF1cbiAgfSxcbiAgY2hlY2tzOiB7XG4gICAgY3JlYXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1ydW5zXCJdLFxuICAgIGNyZWF0ZVN1aXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXNcIl0sXG4gICAgZ2V0OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH1cIl0sXG4gICAgZ2V0U3VpdGU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3tjaGVja19zdWl0ZV9pZH1cIl0sXG4gICAgbGlzdEFubm90YXRpb25zOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stcnVucy97Y2hlY2tfcnVuX2lkfS9hbm5vdGF0aW9uc1wiXG4gICAgXSxcbiAgICBsaXN0Rm9yUmVmOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vY2hlY2stcnVuc1wiXSxcbiAgICBsaXN0Rm9yU3VpdGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jaGVjay1zdWl0ZXMve2NoZWNrX3N1aXRlX2lkfS9jaGVjay1ydW5zXCJcbiAgICBdLFxuICAgIGxpc3RTdWl0ZXNGb3JSZWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfS9jaGVjay1zdWl0ZXNcIl0sXG4gICAgcmVyZXF1ZXN0UnVuOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH0vcmVyZXF1ZXN0XCJcbiAgICBdLFxuICAgIHJlcmVxdWVzdFN1aXRlOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXN1aXRlcy97Y2hlY2tfc3VpdGVfaWR9L3JlcmVxdWVzdFwiXG4gICAgXSxcbiAgICBzZXRTdWl0ZXNQcmVmZXJlbmNlczogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY2hlY2stc3VpdGVzL3ByZWZlcmVuY2VzXCJcbiAgICBdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2NoZWNrLXJ1bnMve2NoZWNrX3J1bl9pZH1cIl1cbiAgfSxcbiAgY29kZVNjYW5uaW5nOiB7XG4gICAgZGVsZXRlQW5hbHlzaXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FuYWx5c2VzL3thbmFseXNpc19pZH17P2NvbmZpcm1fZGVsZXRlfVwiXG4gICAgXSxcbiAgICBnZXRBbGVydDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZFBhcmFtZXRlcnM6IHsgYWxlcnRfaWQ6IFwiYWxlcnRfbnVtYmVyXCIgfSB9XG4gICAgXSxcbiAgICBnZXRBbmFseXNpczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYW5hbHlzZXMve2FuYWx5c2lzX2lkfVwiXG4gICAgXSxcbiAgICBnZXRDb2RlcWxEYXRhYmFzZTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL2RhdGFiYXNlcy97bGFuZ3VhZ2V9XCJcbiAgICBdLFxuICAgIGdldERlZmF1bHRTZXR1cDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2RlZmF1bHQtc2V0dXBcIl0sXG4gICAgZ2V0U2FyaWY6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9zYXJpZnMve3NhcmlmX2lkfVwiXSxcbiAgICBsaXN0QWxlcnRJbnN0YW5jZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIlxuICAgIF0sXG4gICAgbGlzdEFsZXJ0c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvYWxlcnRzXCJdLFxuICAgIGxpc3RBbGVydHNJbnN0YW5jZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfS9pbnN0YW5jZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJjb2RlU2Nhbm5pbmdcIiwgXCJsaXN0QWxlcnRJbnN0YW5jZXNcIl0gfVxuICAgIF0sXG4gICAgbGlzdENvZGVxbERhdGFiYXNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvY29kZXFsL2RhdGFiYXNlc1wiXG4gICAgXSxcbiAgICBsaXN0UmVjZW50QW5hbHlzZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbmFseXNlc1wiXSxcbiAgICB1cGRhdGVBbGVydDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZS1zY2FubmluZy9hbGVydHMve2FsZXJ0X251bWJlcn1cIlxuICAgIF0sXG4gICAgdXBkYXRlRGVmYXVsdFNldHVwOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2RlLXNjYW5uaW5nL2RlZmF1bHQtc2V0dXBcIlxuICAgIF0sXG4gICAgdXBsb2FkU2FyaWY6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGUtc2Nhbm5pbmcvc2FyaWZzXCJdXG4gIH0sXG4gIGNvZGVzT2ZDb25kdWN0OiB7XG4gICAgZ2V0QWxsQ29kZXNPZkNvbmR1Y3Q6IFtcIkdFVCAvY29kZXNfb2ZfY29uZHVjdFwiXSxcbiAgICBnZXRDb25kdWN0Q29kZTogW1wiR0VUIC9jb2Rlc19vZl9jb25kdWN0L3trZXl9XCJdXG4gIH0sXG4gIGNvZGVzcGFjZXM6IHtcbiAgICBhZGRSZXBvc2l0b3J5Rm9yU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgYWRkU2VsZWN0ZWRSZXBvVG9PcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgY29kZXNwYWNlTWFjaGluZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L21hY2hpbmVzXCJcbiAgICBdLFxuICAgIGNyZWF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2NvZGVzcGFjZXNcIl0sXG4gICAgY3JlYXRlT3JVcGRhdGVPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUFVUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJcbiAgICBdLFxuICAgIGNyZWF0ZVdpdGhQckZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29kZXNwYWNlc1wiXG4gICAgXSxcbiAgICBjcmVhdGVXaXRoUmVwb0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXNcIlxuICAgIF0sXG4gICAgZGVsZXRlQ29kZXNwYWNlc0JpbGxpbmdVc2VyczogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9iaWxsaW5nL3NlbGVjdGVkX3VzZXJzXCJcbiAgICBdLFxuICAgIGRlbGV0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9XCJdLFxuICAgIGRlbGV0ZUZyb21Pcmdhbml6YXRpb246IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIlxuICAgIF0sXG4gICAgZGVsZXRlT3JnU2VjcmV0OiBbXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZGVsZXRlUmVwb1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJcbiAgICBdLFxuICAgIGRlbGV0ZVNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfVwiXG4gICAgXSxcbiAgICBleHBvcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9leHBvcnRzXCJcbiAgICBdLFxuICAgIGdldENvZGVzcGFjZXNGb3JVc2VySW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnMve3VzZXJuYW1lfS9jb2Rlc3BhY2VzXCJcbiAgICBdLFxuICAgIGdldEV4cG9ydERldGFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L2V4cG9ydHMve2V4cG9ydF9pZH1cIlxuICAgIF0sXG4gICAgZ2V0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UHVibGljS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy9wdWJsaWMta2V5XCJcbiAgICBdLFxuICAgIGdldFJlcG9QdWJsaWNLZXk6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHMvcHVibGljLWtleVwiXG4gICAgXSxcbiAgICBnZXRSZXBvU2VjcmV0OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIlxuICAgIF0sXG4gICAgZ2V0U2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9XCJcbiAgICBdLFxuICAgIGxpc3REZXZjb250YWluZXJzSW5SZXBvc2l0b3J5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL2RldmNvbnRhaW5lcnNcIlxuICAgIF0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvY29kZXNwYWNlc1wiXSxcbiAgICBsaXN0SW5Pcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkUGFyYW1ldGVyczogeyBvcmdfaWQ6IFwib3JnXCIgfSB9XG4gICAgXSxcbiAgICBsaXN0SW5SZXBvc2l0b3J5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzXCJcbiAgICBdLFxuICAgIGxpc3RPcmdTZWNyZXRzOiBbXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzXCJdLFxuICAgIGxpc3RSZXBvU2VjcmV0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9zaXRvcmllc0ZvclNlY3JldEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9jb2Rlc3BhY2VzL3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgbGlzdFNlY3JldHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0c1wiXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCJcbiAgICBdLFxuICAgIHByZUZsaWdodFdpdGhSZXBvRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlc3BhY2VzL25ld1wiXG4gICAgXSxcbiAgICBwdWJsaXNoRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX0vcHVibGlzaFwiXG4gICAgXSxcbiAgICByZW1vdmVSZXBvc2l0b3J5Rm9yU2VjcmV0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRSZXBvRnJvbU9yZ1NlY3JldDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzL3tyZXBvc2l0b3J5X2lkfVwiXG4gICAgXSxcbiAgICByZXBvTWFjaGluZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvZGVzcGFjZXMvbWFjaGluZXNcIlxuICAgIF0sXG4gICAgc2V0Q29kZXNwYWNlc0JpbGxpbmc6IFtcIlBVVCAvb3Jncy97b3JnfS9jb2Rlc3BhY2VzL2JpbGxpbmdcIl0sXG4gICAgc2V0Q29kZXNwYWNlc0JpbGxpbmdVc2VyczogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvYmlsbGluZy9zZWxlY3RlZF91c2Vyc1wiXG4gICAgXSxcbiAgICBzZXRSZXBvc2l0b3JpZXNGb3JTZWNyZXRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQVVQgL3VzZXIvY29kZXNwYWNlcy9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCJcbiAgICBdLFxuICAgIHNldFNlbGVjdGVkUmVwb3NGb3JPcmdTZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L2NvZGVzcGFjZXMvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllc1wiXG4gICAgXSxcbiAgICBzdGFydEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9zdGFydFwiXSxcbiAgICBzdG9wRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvY29kZXNwYWNlcy97Y29kZXNwYWNlX25hbWV9L3N0b3BcIl0sXG4gICAgc3RvcEluT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9L2NvZGVzcGFjZXMve2NvZGVzcGFjZV9uYW1lfS9zdG9wXCJcbiAgICBdLFxuICAgIHVwZGF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQQVRDSCAvdXNlci9jb2Rlc3BhY2VzL3tjb2Rlc3BhY2VfbmFtZX1cIl1cbiAgfSxcbiAgZGVwZW5kYWJvdDoge1xuICAgIGFkZFNlbGVjdGVkUmVwb1RvT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfS9yZXBvc2l0b3JpZXMve3JlcG9zaXRvcnlfaWR9XCJcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlT3JnU2VjcmV0OiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXG4gICAgXSxcbiAgICBjcmVhdGVPclVwZGF0ZVJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXG4gICAgXSxcbiAgICBkZWxldGVPcmdTZWNyZXQ6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXSxcbiAgICBkZWxldGVSZXBvU2VjcmV0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIlxuICAgIF0sXG4gICAgZ2V0QWxlcnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHMve2FsZXJ0X251bWJlcn1cIl0sXG4gICAgZ2V0T3JnUHVibGljS2V5OiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3B1YmxpYy1rZXlcIl0sXG4gICAgZ2V0T3JnU2VjcmV0OiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX1cIl0sXG4gICAgZ2V0UmVwb1B1YmxpY0tleTogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0cy9wdWJsaWMta2V5XCJcbiAgICBdLFxuICAgIGdldFJlcG9TZWNyZXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L3NlY3JldHMve3NlY3JldF9uYW1lfVwiXG4gICAgXSxcbiAgICBsaXN0QWxlcnRzRm9yRW50ZXJwcmlzZTogW1xuICAgICAgXCJHRVQgL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9kZXBlbmRhYm90L2FsZXJ0c1wiXG4gICAgXSxcbiAgICBsaXN0QWxlcnRzRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kYWJvdC9hbGVydHNcIl0sXG4gICAgbGlzdE9yZ1NlY3JldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9kZXBlbmRhYm90L3NlY3JldHNcIl0sXG4gICAgbGlzdFJlcG9TZWNyZXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGVuZGFib3Qvc2VjcmV0c1wiXSxcbiAgICBsaXN0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCJcbiAgICBdLFxuICAgIHJlbW92ZVNlbGVjdGVkUmVwb0Zyb21PcmdTZWNyZXQ6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L2RlcGVuZGFib3Qvc2VjcmV0cy97c2VjcmV0X25hbWV9L3JlcG9zaXRvcmllcy97cmVwb3NpdG9yeV9pZH1cIlxuICAgIF0sXG4gICAgc2V0U2VsZWN0ZWRSZXBvc0Zvck9yZ1NlY3JldDogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vZGVwZW5kYWJvdC9zZWNyZXRzL3tzZWNyZXRfbmFtZX0vcmVwb3NpdG9yaWVzXCJcbiAgICBdLFxuICAgIHVwZGF0ZUFsZXJ0OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRhYm90L2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiXG4gICAgXVxuICB9LFxuICBkZXBlbmRlbmN5R3JhcGg6IHtcbiAgICBjcmVhdGVSZXBvc2l0b3J5U25hcHNob3Q6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9zbmFwc2hvdHNcIlxuICAgIF0sXG4gICAgZGlmZlJhbmdlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwZW5kZW5jeS1ncmFwaC9jb21wYXJlL3tiYXNlaGVhZH1cIlxuICAgIF0sXG4gICAgZXhwb3J0U2JvbTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kZXBlbmRlbmN5LWdyYXBoL3Nib21cIl1cbiAgfSxcbiAgZW1vamlzOiB7IGdldDogW1wiR0VUIC9lbW9qaXNcIl0gfSxcbiAgZ2lzdHM6IHtcbiAgICBjaGVja0lzU3RhcnJlZDogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICBjcmVhdGU6IFtcIlBPU1QgL2dpc3RzXCJdLFxuICAgIGNyZWF0ZUNvbW1lbnQ6IFtcIlBPU1QgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50c1wiXSxcbiAgICBkZWxldGU6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9XCJdLFxuICAgIGRlbGV0ZUNvbW1lbnQ6IFtcIkRFTEVURSAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBmb3JrOiBbXCJQT1NUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIl0sXG4gICAgZ2V0OiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfVwiXSxcbiAgICBnZXRDb21tZW50OiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZ2V0UmV2aXNpb246IFtcIkdFVCAvZ2lzdHMve2dpc3RfaWR9L3tzaGF9XCJdLFxuICAgIGxpc3Q6IFtcIkdFVCAvZ2lzdHNcIl0sXG4gICAgbGlzdENvbW1lbnRzOiBbXCJHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50c1wiXSxcbiAgICBsaXN0Q29tbWl0czogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWl0c1wiXSxcbiAgICBsaXN0Rm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2dpc3RzXCJdLFxuICAgIGxpc3RGb3JrczogW1wiR0VUIC9naXN0cy97Z2lzdF9pZH0vZm9ya3NcIl0sXG4gICAgbGlzdFB1YmxpYzogW1wiR0VUIC9naXN0cy9wdWJsaWNcIl0sXG4gICAgbGlzdFN0YXJyZWQ6IFtcIkdFVCAvZ2lzdHMvc3RhcnJlZFwiXSxcbiAgICBzdGFyOiBbXCJQVVQgL2dpc3RzL3tnaXN0X2lkfS9zdGFyXCJdLFxuICAgIHVuc3RhcjogW1wiREVMRVRFIC9naXN0cy97Z2lzdF9pZH0vc3RhclwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9naXN0cy97Z2lzdF9pZH1cIl0sXG4gICAgdXBkYXRlQ29tbWVudDogW1wiUEFUQ0ggL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl1cbiAgfSxcbiAgZ2l0OiB7XG4gICAgY3JlYXRlQmxvYjogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2Jsb2JzXCJdLFxuICAgIGNyZWF0ZUNvbW1pdDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2NvbW1pdHNcIl0sXG4gICAgY3JlYXRlUmVmOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmc1wiXSxcbiAgICBjcmVhdGVUYWc6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90YWdzXCJdLFxuICAgIGNyZWF0ZVRyZWU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC90cmVlc1wiXSxcbiAgICBkZWxldGVSZWY6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZnMve3JlZn1cIl0sXG4gICAgZ2V0QmxvYjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvYmxvYnMve2ZpbGVfc2hhfVwiXSxcbiAgICBnZXRDb21taXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L2NvbW1pdHMve2NvbW1pdF9zaGF9XCJdLFxuICAgIGdldFJlZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmL3tyZWZ9XCJdLFxuICAgIGdldFRhZzogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdGFncy97dGFnX3NoYX1cIl0sXG4gICAgZ2V0VHJlZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvdHJlZXMve3RyZWVfc2hhfVwiXSxcbiAgICBsaXN0TWF0Y2hpbmdSZWZzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9tYXRjaGluZy1yZWZzL3tyZWZ9XCJdLFxuICAgIHVwZGF0ZVJlZjogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2dpdC9yZWZzL3tyZWZ9XCJdXG4gIH0sXG4gIGdpdGlnbm9yZToge1xuICAgIGdldEFsbFRlbXBsYXRlczogW1wiR0VUIC9naXRpZ25vcmUvdGVtcGxhdGVzXCJdLFxuICAgIGdldFRlbXBsYXRlOiBbXCJHRVQgL2dpdGlnbm9yZS90ZW1wbGF0ZXMve25hbWV9XCJdXG4gIH0sXG4gIGludGVyYWN0aW9uczoge1xuICAgIGdldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIGdldFJlc3RyaWN0aW9uc0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICBnZXRSZXN0cmljdGlvbnNGb3JZb3VyUHVibGljUmVwb3M6IFtcbiAgICAgIFwiR0VUIC91c2VyL2ludGVyYWN0aW9uLWxpbWl0c1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcImludGVyYWN0aW9uc1wiLCBcImdldFJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0Zvck9yZzogW1wiREVMRVRFIC9vcmdzL3tvcmd9L2ludGVyYWN0aW9uLWxpbWl0c1wiXSxcbiAgICByZW1vdmVSZXN0cmljdGlvbnNGb3JSZXBvOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW50ZXJhY3Rpb24tbGltaXRzXCJcbiAgICBdLFxuICAgIHJlbW92ZVJlc3RyaWN0aW9uc0ZvcllvdXJQdWJsaWNSZXBvczogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiaW50ZXJhY3Rpb25zXCIsIFwicmVtb3ZlUmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBVVCAvdXNlci9pbnRlcmFjdGlvbi1saW1pdHNcIl0sXG4gICAgc2V0UmVzdHJpY3Rpb25zRm9yT3JnOiBbXCJQVVQgL29yZ3Mve29yZ30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHNldFJlc3RyaWN0aW9uc0ZvclJlcG86IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW50ZXJhY3Rpb24tbGltaXRzXCJdLFxuICAgIHNldFJlc3RyaWN0aW9uc0ZvcllvdXJQdWJsaWNSZXBvczogW1xuICAgICAgXCJQVVQgL3VzZXIvaW50ZXJhY3Rpb24tbGltaXRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wiaW50ZXJhY3Rpb25zXCIsIFwic2V0UmVzdHJpY3Rpb25zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF1cbiAgfSxcbiAgaXNzdWVzOiB7XG4gICAgYWRkQXNzaWduZWVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9hc3NpZ25lZXNcIlxuICAgIF0sXG4gICAgYWRkTGFiZWxzOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vbGFiZWxzXCJdLFxuICAgIGNoZWNrVXNlckNhbkJlQXNzaWduZWQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXNzaWduZWVzL3thc3NpZ25lZX1cIl0sXG4gICAgY2hlY2tVc2VyQ2FuQmVBc3NpZ25lZFRvSXNzdWU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vYXNzaWduZWVzL3thc3NpZ25lZX1cIlxuICAgIF0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXNcIl0sXG4gICAgY3JlYXRlQ29tbWVudDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vY29tbWVudHNcIlxuICAgIF0sXG4gICAgY3JlYXRlTGFiZWw6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVsc1wiXSxcbiAgICBjcmVhdGVNaWxlc3RvbmU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L21pbGVzdG9uZXNcIl0sXG4gICAgZGVsZXRlQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50cy97Y29tbWVudF9pZH1cIlxuICAgIF0sXG4gICAgZGVsZXRlTGFiZWw6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzL3tuYW1lfVwiXSxcbiAgICBkZWxldGVNaWxlc3RvbmU6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9XCJdLFxuICAgIGdldENvbW1lbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBnZXRFdmVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvZXZlbnRzL3tldmVudF9pZH1cIl0sXG4gICAgZ2V0TGFiZWw6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzL3tuYW1lfVwiXSxcbiAgICBnZXRNaWxlc3RvbmU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbWlsZXN0b25lcy97bWlsZXN0b25lX251bWJlcn1cIl0sXG4gICAgbGlzdDogW1wiR0VUIC9pc3N1ZXNcIl0sXG4gICAgbGlzdEFzc2lnbmVlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hc3NpZ25lZXNcIl0sXG4gICAgbGlzdENvbW1lbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9jb21tZW50c1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy9jb21tZW50c1wiXSxcbiAgICBsaXN0RXZlbnRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9ldmVudHNcIl0sXG4gICAgbGlzdEV2ZW50c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2V2ZW50c1wiXSxcbiAgICBsaXN0RXZlbnRzRm9yVGltZWxpbmU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vdGltZWxpbmVcIlxuICAgIF0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvaXNzdWVzXCJdLFxuICAgIGxpc3RGb3JPcmc6IFtcIkdFVCAvb3Jncy97b3JnfS9pc3N1ZXNcIl0sXG4gICAgbGlzdEZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzXCJdLFxuICAgIGxpc3RMYWJlbHNGb3JNaWxlc3RvbmU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfS9sYWJlbHNcIlxuICAgIF0sXG4gICAgbGlzdExhYmVsc0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGFiZWxzXCJdLFxuICAgIGxpc3RMYWJlbHNPbklzc3VlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiXG4gICAgXSxcbiAgICBsaXN0TWlsZXN0b25lczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzXCJdLFxuICAgIGxvY2s6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xvY2tcIl0sXG4gICAgcmVtb3ZlQWxsTGFiZWxzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVsc1wiXG4gICAgXSxcbiAgICByZW1vdmVBc3NpZ25lZXM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMve2lzc3VlX251bWJlcn0vYXNzaWduZWVzXCJcbiAgICBdLFxuICAgIHJlbW92ZUxhYmVsOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2xhYmVscy97bmFtZX1cIlxuICAgIF0sXG4gICAgc2V0TGFiZWxzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sYWJlbHNcIl0sXG4gICAgdW5sb2NrOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9sb2NrXCJdLFxuICAgIHVwZGF0ZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfVwiXSxcbiAgICB1cGRhdGVDb21tZW50OiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICB1cGRhdGVMYWJlbDogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2xhYmVscy97bmFtZX1cIl0sXG4gICAgdXBkYXRlTWlsZXN0b25lOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9taWxlc3RvbmVzL3ttaWxlc3RvbmVfbnVtYmVyfVwiXG4gICAgXVxuICB9LFxuICBsaWNlbnNlczoge1xuICAgIGdldDogW1wiR0VUIC9saWNlbnNlcy97bGljZW5zZX1cIl0sXG4gICAgZ2V0QWxsQ29tbW9ubHlVc2VkOiBbXCJHRVQgL2xpY2Vuc2VzXCJdLFxuICAgIGdldEZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vbGljZW5zZVwiXVxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIHJlbmRlcjogW1wiUE9TVCAvbWFya2Rvd25cIl0sXG4gICAgcmVuZGVyUmF3OiBbXG4gICAgICBcIlBPU1QgL21hcmtkb3duL3Jhd1wiLFxuICAgICAgeyBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiIH0gfVxuICAgIF1cbiAgfSxcbiAgbWV0YToge1xuICAgIGdldDogW1wiR0VUIC9tZXRhXCJdLFxuICAgIGdldEFsbFZlcnNpb25zOiBbXCJHRVQgL3ZlcnNpb25zXCJdLFxuICAgIGdldE9jdG9jYXQ6IFtcIkdFVCAvb2N0b2NhdFwiXSxcbiAgICBnZXRaZW46IFtcIkdFVCAvemVuXCJdLFxuICAgIHJvb3Q6IFtcIkdFVCAvXCJdXG4gIH0sXG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBjYW5jZWxJbXBvcnQ6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW1wb3J0XCJdLFxuICAgIGRlbGV0ZUFyY2hpdmVGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9hcmNoaXZlXCJcbiAgICBdLFxuICAgIGRlbGV0ZUFyY2hpdmVGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiXG4gICAgXSxcbiAgICBkb3dubG9hZEFyY2hpdmVGb3JPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiXG4gICAgXSxcbiAgICBnZXRBcmNoaXZlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2VyL21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vYXJjaGl2ZVwiXG4gICAgXSxcbiAgICBnZXRDb21taXRBdXRob3JzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ltcG9ydC9hdXRob3JzXCJdLFxuICAgIGdldEltcG9ydFN0YXR1czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbXBvcnRcIl0sXG4gICAgZ2V0TGFyZ2VGaWxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbXBvcnQvbGFyZ2VfZmlsZXNcIl0sXG4gICAgZ2V0U3RhdHVzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9taWdyYXRpb25zL3ttaWdyYXRpb25faWR9XCJdLFxuICAgIGdldFN0YXR1c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH1cIl0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWlncmF0aW9uc1wiXSxcbiAgICBsaXN0Rm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9uc1wiXSxcbiAgICBsaXN0UmVwb3NGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgbGlzdFJlcG9zRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIl0sXG4gICAgbGlzdFJlcG9zRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvc2l0b3JpZXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJtaWdyYXRpb25zXCIsIFwibGlzdFJlcG9zRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgbWFwQ29tbWl0QXV0aG9yOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaW1wb3J0L2F1dGhvcnMve2F1dGhvcl9pZH1cIl0sXG4gICAgc2V0TGZzUHJlZmVyZW5jZTogW1wiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2ltcG9ydC9sZnNcIl0sXG4gICAgc3RhcnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9taWdyYXRpb25zXCJdLFxuICAgIHN0YXJ0Rm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnNcIl0sXG4gICAgc3RhcnRJbXBvcnQ6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vaW1wb3J0XCJdLFxuICAgIHVubG9ja1JlcG9Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvbWlncmF0aW9ucy97bWlncmF0aW9uX2lkfS9yZXBvcy97cmVwb19uYW1lfS9sb2NrXCJcbiAgICBdLFxuICAgIHVubG9ja1JlcG9Gb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L21pZ3JhdGlvbnMve21pZ3JhdGlvbl9pZH0vcmVwb3Mve3JlcG9fbmFtZX0vbG9ja1wiXG4gICAgXSxcbiAgICB1cGRhdGVJbXBvcnQ6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbXBvcnRcIl1cbiAgfSxcbiAgb3Jnczoge1xuICAgIGFkZFNlY3VyaXR5TWFuYWdlclRlYW06IFtcbiAgICAgIFwiUFVUIC9vcmdzL3tvcmd9L3NlY3VyaXR5LW1hbmFnZXJzL3RlYW1zL3t0ZWFtX3NsdWd9XCJcbiAgICBdLFxuICAgIGJsb2NrVXNlcjogW1wiUFVUIC9vcmdzL3tvcmd9L2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIGNhbmNlbEludml0YXRpb246IFtcIkRFTEVURSAvb3Jncy97b3JnfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIl0sXG4gICAgY2hlY2tCbG9ja2VkVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L2Jsb2Nrcy97dXNlcm5hbWV9XCJdLFxuICAgIGNoZWNrTWVtYmVyc2hpcEZvclVzZXI6IFtcIkdFVCAvb3Jncy97b3JnfS9tZW1iZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tQdWJsaWNNZW1iZXJzaGlwRm9yVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzL3t1c2VybmFtZX1cIl0sXG4gICAgY29udmVydE1lbWJlclRvT3V0c2lkZUNvbGxhYm9yYXRvcjogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vb3V0c2lkZV9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIlxuICAgIF0sXG4gICAgY3JlYXRlSW52aXRhdGlvbjogW1wiUE9TVCAvb3Jncy97b3JnfS9pbnZpdGF0aW9uc1wiXSxcbiAgICBjcmVhdGVXZWJob29rOiBbXCJQT1NUIC9vcmdzL3tvcmd9L2hvb2tzXCJdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9vcmdzL3tvcmd9XCJdLFxuICAgIGRlbGV0ZVdlYmhvb2s6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9ob29rcy97aG9va19pZH1cIl0sXG4gICAgZW5hYmxlT3JEaXNhYmxlU2VjdXJpdHlQcm9kdWN0T25BbGxPcmdSZXBvczogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3tzZWN1cml0eV9wcm9kdWN0fS97ZW5hYmxlbWVudH1cIlxuICAgIF0sXG4gICAgZ2V0OiBbXCJHRVQgL29yZ3Mve29yZ31cIl0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvbWVtYmVyc2hpcHMvb3Jncy97b3JnfVwiXSxcbiAgICBnZXRNZW1iZXJzaGlwRm9yVXNlcjogW1wiR0VUIC9vcmdzL3tvcmd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIl0sXG4gICAgZ2V0V2ViaG9vazogW1wiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBnZXRXZWJob29rQ29uZmlnRm9yT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2NvbmZpZ1wiXSxcbiAgICBnZXRXZWJob29rRGVsaXZlcnk6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH1cIlxuICAgIF0sXG4gICAgbGlzdDogW1wiR0VUIC9vcmdhbml6YXRpb25zXCJdLFxuICAgIGxpc3RBcHBJbnN0YWxsYXRpb25zOiBbXCJHRVQgL29yZ3Mve29yZ30vaW5zdGFsbGF0aW9uc1wiXSxcbiAgICBsaXN0QmxvY2tlZFVzZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vYmxvY2tzXCJdLFxuICAgIGxpc3RGYWlsZWRJbnZpdGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2ZhaWxlZF9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9vcmdzXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vb3Jnc1wiXSxcbiAgICBsaXN0SW52aXRhdGlvblRlYW1zOiBbXCJHRVQgL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9L3RlYW1zXCJdLFxuICAgIGxpc3RNZW1iZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vbWVtYmVyc1wiXSxcbiAgICBsaXN0TWVtYmVyc2hpcHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL21lbWJlcnNoaXBzL29yZ3NcIl0sXG4gICAgbGlzdE91dHNpZGVDb2xsYWJvcmF0b3JzOiBbXCJHRVQgL29yZ3Mve29yZ30vb3V0c2lkZV9jb2xsYWJvcmF0b3JzXCJdLFxuICAgIGxpc3RQYXRHcmFudFJlcG9zaXRvcmllczogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2Vucy97cGF0X2lkfS9yZXBvc2l0b3JpZXNcIlxuICAgIF0sXG4gICAgbGlzdFBhdEdyYW50UmVxdWVzdFJlcG9zaXRvcmllczogW1xuICAgICAgXCJHRVQgL29yZ2FuaXphdGlvbnMve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzL3twYXRfcmVxdWVzdF9pZH0vcmVwb3NpdG9yaWVzXCJcbiAgICBdLFxuICAgIGxpc3RQYXRHcmFudFJlcXVlc3RzOiBbXG4gICAgICBcIkdFVCAvb3JnYW5pemF0aW9ucy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW4tcmVxdWVzdHNcIlxuICAgIF0sXG4gICAgbGlzdFBhdEdyYW50czogW1wiR0VUIC9vcmdhbml6YXRpb25zL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIl0sXG4gICAgbGlzdFBlbmRpbmdJbnZpdGF0aW9uczogW1wiR0VUIC9vcmdzL3tvcmd9L2ludml0YXRpb25zXCJdLFxuICAgIGxpc3RQdWJsaWNNZW1iZXJzOiBbXCJHRVQgL29yZ3Mve29yZ30vcHVibGljX21lbWJlcnNcIl0sXG4gICAgbGlzdFNlY3VyaXR5TWFuYWdlclRlYW1zOiBbXCJHRVQgL29yZ3Mve29yZ30vc2VjdXJpdHktbWFuYWdlcnNcIl0sXG4gICAgbGlzdFdlYmhvb2tEZWxpdmVyaWVzOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXNcIl0sXG4gICAgbGlzdFdlYmhvb2tzOiBbXCJHRVQgL29yZ3Mve29yZ30vaG9va3NcIl0sXG4gICAgcGluZ1dlYmhvb2s6IFtcIlBPU1QgL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9L3BpbmdzXCJdLFxuICAgIHJlZGVsaXZlcldlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9kZWxpdmVyaWVzL3tkZWxpdmVyeV9pZH0vYXR0ZW1wdHNcIlxuICAgIF0sXG4gICAgcmVtb3ZlTWVtYmVyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVycy97dXNlcm5hbWV9XCJdLFxuICAgIHJlbW92ZU1lbWJlcnNoaXBGb3JVc2VyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXSxcbiAgICByZW1vdmVPdXRzaWRlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS9vdXRzaWRlX2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXG4gICAgXSxcbiAgICByZW1vdmVQdWJsaWNNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3B1YmxpY19tZW1iZXJzL3t1c2VybmFtZX1cIlxuICAgIF0sXG4gICAgcmVtb3ZlU2VjdXJpdHlNYW5hZ2VyVGVhbTogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vc2VjdXJpdHktbWFuYWdlcnMvdGVhbXMve3RlYW1fc2x1Z31cIlxuICAgIF0sXG4gICAgcmV2aWV3UGF0R3JhbnRSZXF1ZXN0OiBbXG4gICAgICBcIlBPU1QgL29yZ2FuaXphdGlvbnMve29yZ30vcGVyc29uYWwtYWNjZXNzLXRva2VuLXJlcXVlc3RzL3twYXRfcmVxdWVzdF9pZH1cIlxuICAgIF0sXG4gICAgcmV2aWV3UGF0R3JhbnRSZXF1ZXN0c0luQnVsazogW1xuICAgICAgXCJQT1NUIC9vcmdhbml6YXRpb25zL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbi1yZXF1ZXN0c1wiXG4gICAgXSxcbiAgICBzZXRNZW1iZXJzaGlwRm9yVXNlcjogW1wiUFVUIC9vcmdzL3tvcmd9L21lbWJlcnNoaXBzL3t1c2VybmFtZX1cIl0sXG4gICAgc2V0UHVibGljTWVtYmVyc2hpcEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS9wdWJsaWNfbWVtYmVycy97dXNlcm5hbWV9XCJcbiAgICBdLFxuICAgIHVuYmxvY2tVc2VyOiBbXCJERUxFVEUgL29yZ3Mve29yZ30vYmxvY2tzL3t1c2VybmFtZX1cIl0sXG4gICAgdXBkYXRlOiBbXCJQQVRDSCAvb3Jncy97b3JnfVwiXSxcbiAgICB1cGRhdGVNZW1iZXJzaGlwRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvbWVtYmVyc2hpcHMvb3Jncy97b3JnfVwiXG4gICAgXSxcbiAgICB1cGRhdGVQYXRBY2Nlc3M6IFtcbiAgICAgIFwiUE9TVCAvb3JnYW5pemF0aW9ucy97b3JnfS9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zL3twYXRfaWR9XCJcbiAgICBdLFxuICAgIHVwZGF0ZVBhdEFjY2Vzc2VzOiBbXCJQT1NUIC9vcmdhbml6YXRpb25zL3tvcmd9L3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIl0sXG4gICAgdXBkYXRlV2ViaG9vazogW1wiUEFUQ0ggL29yZ3Mve29yZ30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JPcmc6IFtcIlBBVENIIC9vcmdzL3tvcmd9L2hvb2tzL3tob29rX2lkfS9jb25maWdcIl1cbiAgfSxcbiAgcGFja2FnZXM6IHtcbiAgICBkZWxldGVQYWNrYWdlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiREVMRVRFIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCJcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VGb3JPcmc6IFtcbiAgICAgIFwiREVMRVRFIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9XCJcbiAgICBdLFxuICAgIGRlbGV0ZVBhY2thZ2VGb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlVmVyc2lvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVQYWNrYWdlVmVyc2lvbkZvck9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIlxuICAgIF0sXG4gICAgZGVsZXRlUGFja2FnZVZlcnNpb25Gb3JVc2VyOiBbXG4gICAgICBcIkRFTEVURSAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfVwiXG4gICAgXSxcbiAgICBnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JBUGFja2FnZU93bmVkQnlBbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJwYWNrYWdlc1wiLCBcImdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5T3JnXCJdIH1cbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvckFQYWNrYWdlT3duZWRCeVRoZUF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9uc1wiLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHJlbmFtZWQ6IFtcbiAgICAgICAgICBcInBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJnZXRBbGxQYWNrYWdlVmVyc2lvbnNGb3JQYWNrYWdlT3duZWRCeUF1dGhlbnRpY2F0ZWRVc2VyXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIlxuICAgIF0sXG4gICAgZ2V0QWxsUGFja2FnZVZlcnNpb25zRm9yUGFja2FnZU93bmVkQnlPcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zXCJcbiAgICBdLFxuICAgIGdldEFsbFBhY2thZ2VWZXJzaW9uc0ZvclBhY2thZ2VPd25lZEJ5VXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnNcIlxuICAgIF0sXG4gICAgZ2V0UGFja2FnZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIkdFVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yT3JnYW5pemF0aW9uOiBbXG4gICAgICBcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfVwiXG4gICAgXSxcbiAgICBnZXRQYWNrYWdlRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX1cIlxuICAgIF0sXG4gICAgZ2V0UGFja2FnZVZlcnNpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIlxuICAgIF0sXG4gICAgZ2V0UGFja2FnZVZlcnNpb25Gb3JPcmdhbml6YXRpb246IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9XCJcbiAgICBdLFxuICAgIGdldFBhY2thZ2VWZXJzaW9uRm9yVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXMve3BhY2thZ2VfdHlwZX0ve3BhY2thZ2VfbmFtZX0vdmVyc2lvbnMve3BhY2thZ2VfdmVyc2lvbl9pZH1cIlxuICAgIF0sXG4gICAgbGlzdERvY2tlck1pZ3JhdGlvbkNvbmZsaWN0aW5nUGFja2FnZXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvZG9ja2VyL2NvbmZsaWN0c1wiXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0Zvck9yZ2FuaXphdGlvbjogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vZG9ja2VyL2NvbmZsaWN0c1wiXG4gICAgXSxcbiAgICBsaXN0RG9ja2VyTWlncmF0aW9uQ29uZmxpY3RpbmdQYWNrYWdlc0ZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC91c2Vycy97dXNlcm5hbWV9L2RvY2tlci9jb25mbGljdHNcIlxuICAgIF0sXG4gICAgbGlzdFBhY2thZ2VzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9wYWNrYWdlc1wiXSxcbiAgICBsaXN0UGFja2FnZXNGb3JPcmdhbml6YXRpb246IFtcIkdFVCAvb3Jncy97b3JnfS9wYWNrYWdlc1wiXSxcbiAgICBsaXN0UGFja2FnZXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcGFja2FnZXNcIl0sXG4gICAgcmVzdG9yZVBhY2thZ2VGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2VyL3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3Jlc3RvcmV7P3Rva2VufVwiXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZUZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3Jlc3RvcmV7P3Rva2VufVwiXG4gICAgXSxcbiAgICByZXN0b3JlUGFja2FnZUZvclVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlcnMve3VzZXJuYW1lfS9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS9yZXN0b3Jlez90b2tlbn1cIlxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VWZXJzaW9uRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9wYWNrYWdlcy97cGFja2FnZV90eXBlfS97cGFja2FnZV9uYW1lfS92ZXJzaW9ucy97cGFja2FnZV92ZXJzaW9uX2lkfS9yZXN0b3JlXCJcbiAgICBdLFxuICAgIHJlc3RvcmVQYWNrYWdlVmVyc2lvbkZvck9yZzogW1xuICAgICAgXCJQT1NUIC9vcmdzL3tvcmd9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIlxuICAgIF0sXG4gICAgcmVzdG9yZVBhY2thZ2VWZXJzaW9uRm9yVXNlcjogW1xuICAgICAgXCJQT1NUIC91c2Vycy97dXNlcm5hbWV9L3BhY2thZ2VzL3twYWNrYWdlX3R5cGV9L3twYWNrYWdlX25hbWV9L3ZlcnNpb25zL3twYWNrYWdlX3ZlcnNpb25faWR9L3Jlc3RvcmVcIlxuICAgIF1cbiAgfSxcbiAgcHJvamVjdHM6IHtcbiAgICBhZGRDb2xsYWJvcmF0b3I6IFtcIlBVVCAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXSxcbiAgICBjcmVhdGVDYXJkOiBbXCJQT1NUIC9wcm9qZWN0cy9jb2x1bW5zL3tjb2x1bW5faWR9L2NhcmRzXCJdLFxuICAgIGNyZWF0ZUNvbHVtbjogW1wiUE9TVCAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbHVtbnNcIl0sXG4gICAgY3JlYXRlRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvcHJvamVjdHNcIl0sXG4gICAgY3JlYXRlRm9yT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3Byb2plY3RzXCJdLFxuICAgIGNyZWF0ZUZvclJlcG86IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Byb2plY3RzXCJdLFxuICAgIGRlbGV0ZTogW1wiREVMRVRFIC9wcm9qZWN0cy97cHJvamVjdF9pZH1cIl0sXG4gICAgZGVsZXRlQ2FyZDogW1wiREVMRVRFIC9wcm9qZWN0cy9jb2x1bW5zL2NhcmRzL3tjYXJkX2lkfVwiXSxcbiAgICBkZWxldGVDb2x1bW46IFtcIkRFTEVURSAvcHJvamVjdHMvY29sdW1ucy97Y29sdW1uX2lkfVwiXSxcbiAgICBnZXQ6IFtcIkdFVCAvcHJvamVjdHMve3Byb2plY3RfaWR9XCJdLFxuICAgIGdldENhcmQ6IFtcIkdFVCAvcHJvamVjdHMvY29sdW1ucy9jYXJkcy97Y2FyZF9pZH1cIl0sXG4gICAgZ2V0Q29sdW1uOiBbXCJHRVQgL3Byb2plY3RzL2NvbHVtbnMve2NvbHVtbl9pZH1cIl0sXG4gICAgZ2V0UGVybWlzc2lvbkZvclVzZXI6IFtcbiAgICAgIFwiR0VUIC9wcm9qZWN0cy97cHJvamVjdF9pZH0vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9L3Blcm1pc3Npb25cIlxuICAgIF0sXG4gICAgbGlzdENhcmRzOiBbXCJHRVQgL3Byb2plY3RzL2NvbHVtbnMve2NvbHVtbl9pZH0vY2FyZHNcIl0sXG4gICAgbGlzdENvbGxhYm9yYXRvcnM6IFtcIkdFVCAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbGxhYm9yYXRvcnNcIl0sXG4gICAgbGlzdENvbHVtbnM6IFtcIkdFVCAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbHVtbnNcIl0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3Byb2plY3RzXCJdLFxuICAgIGxpc3RGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Byb2plY3RzXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcHJvamVjdHNcIl0sXG4gICAgbW92ZUNhcmQ6IFtcIlBPU1QgL3Byb2plY3RzL2NvbHVtbnMvY2FyZHMve2NhcmRfaWR9L21vdmVzXCJdLFxuICAgIG1vdmVDb2x1bW46IFtcIlBPU1QgL3Byb2plY3RzL2NvbHVtbnMve2NvbHVtbl9pZH0vbW92ZXNcIl0sXG4gICAgcmVtb3ZlQ29sbGFib3JhdG9yOiBbXG4gICAgICBcIkRFTEVURSAvcHJvamVjdHMve3Byb2plY3RfaWR9L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXG4gICAgXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9wcm9qZWN0cy97cHJvamVjdF9pZH1cIl0sXG4gICAgdXBkYXRlQ2FyZDogW1wiUEFUQ0ggL3Byb2plY3RzL2NvbHVtbnMvY2FyZHMve2NhcmRfaWR9XCJdLFxuICAgIHVwZGF0ZUNvbHVtbjogW1wiUEFUQ0ggL3Byb2plY3RzL2NvbHVtbnMve2NvbHVtbl9pZH1cIl1cbiAgfSxcbiAgcHVsbHM6IHtcbiAgICBjaGVja0lmTWVyZ2VkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vbWVyZ2VcIl0sXG4gICAgY3JlYXRlOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiXSxcbiAgICBjcmVhdGVSZXBseUZvclJldmlld0NvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVwbGllc1wiXG4gICAgXSxcbiAgICBjcmVhdGVSZXZpZXc6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3c1wiXSxcbiAgICBjcmVhdGVSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHNcIlxuICAgIF0sXG4gICAgZGVsZXRlUGVuZGluZ1JldmlldzogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3cy97cmV2aWV3X2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCJcbiAgICBdLFxuICAgIGRpc21pc3NSZXZpZXc6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vZGlzbWlzc2Fsc1wiXG4gICAgXSxcbiAgICBnZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfVwiXSxcbiAgICBnZXRSZXZpZXc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH1cIlxuICAgIF0sXG4gICAgZ2V0UmV2aWV3Q29tbWVudDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgbGlzdDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxsc1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JSZXZpZXc6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH0vY29tbWVudHNcIlxuICAgIF0sXG4gICAgbGlzdENvbW1pdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21taXRzXCJdLFxuICAgIGxpc3RGaWxlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L2ZpbGVzXCJdLFxuICAgIGxpc3RSZXF1ZXN0ZWRSZXZpZXdlcnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3JlcXVlc3RlZF9yZXZpZXdlcnNcIlxuICAgIF0sXG4gICAgbGlzdFJldmlld0NvbW1lbnRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50c1wiXG4gICAgXSxcbiAgICBsaXN0UmV2aWV3Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzXCJdLFxuICAgIGxpc3RSZXZpZXdzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmV2aWV3c1wiXSxcbiAgICBtZXJnZTogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L21lcmdlXCJdLFxuICAgIHJlbW92ZVJlcXVlc3RlZFJldmlld2VyczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiXG4gICAgXSxcbiAgICByZXF1ZXN0UmV2aWV3ZXJzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiXG4gICAgXSxcbiAgICBzdWJtaXRSZXZpZXc6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9yZXZpZXdzL3tyZXZpZXdfaWR9L2V2ZW50c1wiXG4gICAgXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9XCJdLFxuICAgIHVwZGF0ZUJyYW5jaDogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vdXBkYXRlLWJyYW5jaFwiXG4gICAgXSxcbiAgICB1cGRhdGVSZXZpZXc6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3Mve3Jldmlld19pZH1cIlxuICAgIF0sXG4gICAgdXBkYXRlUmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMvY29tbWVudHMve2NvbW1lbnRfaWR9XCJcbiAgICBdXG4gIH0sXG4gIHJhdGVMaW1pdDogeyBnZXQ6IFtcIkdFVCAvcmF0ZV9saW1pdFwiXSB9LFxuICByZWFjdGlvbnM6IHtcbiAgICBjcmVhdGVGb3JDb21taXRDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIlxuICAgIF0sXG4gICAgY3JlYXRlRm9ySXNzdWU6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9uc1wiXG4gICAgXSxcbiAgICBjcmVhdGVGb3JJc3N1ZUNvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIlxuICAgIF0sXG4gICAgY3JlYXRlRm9yUHVsbFJlcXVlc3RSZXZpZXdDb21tZW50OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIlxuICAgIF0sXG4gICAgY3JlYXRlRm9yUmVsZWFzZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCJcbiAgICBdLFxuICAgIGNyZWF0ZUZvclRlYW1EaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiXG4gICAgXSxcbiAgICBjcmVhdGVGb3JUZWFtRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIlxuICAgIF0sXG4gICAgZGVsZXRlRm9yQ29tbWl0Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVGb3JJc3N1ZTogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2lzc3Vlcy97aXNzdWVfbnVtYmVyfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVGb3JJc3N1ZUNvbW1lbnQ6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXMvY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCJcbiAgICBdLFxuICAgIGRlbGV0ZUZvclB1bGxSZXF1ZXN0Q29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnMve3JlYWN0aW9uX2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVGb3JSZWxlYXNlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCJcbiAgICBdLFxuICAgIGRlbGV0ZUZvclRlYW1EaXNjdXNzaW9uOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCJcbiAgICBdLFxuICAgIGRlbGV0ZUZvclRlYW1EaXNjdXNzaW9uQ29tbWVudDogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9ucy97cmVhY3Rpb25faWR9XCJcbiAgICBdLFxuICAgIGxpc3RGb3JDb21taXRDb21tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9L3JlYWN0aW9uc1wiXG4gICAgXSxcbiAgICBsaXN0Rm9ySXNzdWU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L3JlYWN0aW9uc1wiXSxcbiAgICBsaXN0Rm9ySXNzdWVDb21tZW50OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIlxuICAgIF0sXG4gICAgbGlzdEZvclB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL2NvbW1lbnRzL3tjb21tZW50X2lkfS9yZWFjdGlvbnNcIlxuICAgIF0sXG4gICAgbGlzdEZvclJlbGVhc2U6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vcmVhY3Rpb25zXCJcbiAgICBdLFxuICAgIGxpc3RGb3JUZWFtRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9L3JlYWN0aW9uc1wiXG4gICAgXSxcbiAgICBsaXN0Rm9yVGVhbURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9yZWFjdGlvbnNcIlxuICAgIF1cbiAgfSxcbiAgcmVwb3M6IHtcbiAgICBhY2NlcHRJbnZpdGF0aW9uOiBbXG4gICAgICBcIlBBVENIIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1wicmVwb3NcIiwgXCJhY2NlcHRJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgYWNjZXB0SW52aXRhdGlvbkZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXG4gICAgICBcIlBBVENIIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCJcbiAgICBdLFxuICAgIGFkZEFwcEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy9hcHBzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImFwcHNcIiB9XG4gICAgXSxcbiAgICBhZGRDb2xsYWJvcmF0b3I6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9ycy97dXNlcm5hbWV9XCJdLFxuICAgIGFkZFN0YXR1c0NoZWNrQ29udGV4dHM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImNvbnRleHRzXCIgfVxuICAgIF0sXG4gICAgYWRkVGVhbUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH1cbiAgICBdLFxuICAgIGFkZFVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwidXNlcnNcIiB9XG4gICAgXSxcbiAgICBjaGVja0NvbGxhYm9yYXRvcjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX1cIl0sXG4gICAgY2hlY2tWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIlxuICAgIF0sXG4gICAgY29kZW93bmVyc0Vycm9yczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2Rlb3duZXJzL2Vycm9yc1wiXSxcbiAgICBjb21wYXJlQ29tbWl0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21wYXJlL3tiYXNlfS4uLntoZWFkfVwiXSxcbiAgICBjb21wYXJlQ29tbWl0c1dpdGhCYXNlaGVhZDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbXBhcmUve2Jhc2VoZWFkfVwiXG4gICAgXSxcbiAgICBjcmVhdGVBdXRvbGluazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzXCJdLFxuICAgIGNyZWF0ZUNvbW1pdENvbW1lbnQ6IFtcbiAgICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97Y29tbWl0X3NoYX0vY29tbWVudHNcIlxuICAgIF0sXG4gICAgY3JlYXRlQ29tbWl0U2lnbmF0dXJlUHJvdGVjdGlvbjogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3NpZ25hdHVyZXNcIlxuICAgIF0sXG4gICAgY3JlYXRlQ29tbWl0U3RhdHVzOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0dXNlcy97c2hhfVwiXSxcbiAgICBjcmVhdGVEZXBsb3lLZXk6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIl0sXG4gICAgY3JlYXRlRGVwbG95bWVudDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHNcIl0sXG4gICAgY3JlYXRlRGVwbG95bWVudEJyYW5jaFBvbGljeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzXCJcbiAgICBdLFxuICAgIGNyZWF0ZURlcGxveW1lbnRQcm90ZWN0aW9uUnVsZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlc1wiXG4gICAgXSxcbiAgICBjcmVhdGVEZXBsb3ltZW50U3RhdHVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlc1wiXG4gICAgXSxcbiAgICBjcmVhdGVEaXNwYXRjaEV2ZW50OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9kaXNwYXRjaGVzXCJdLFxuICAgIGNyZWF0ZUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL3JlcG9zXCJdLFxuICAgIGNyZWF0ZUZvcms6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXCJdLFxuICAgIGNyZWF0ZUluT3JnOiBbXCJQT1NUIC9vcmdzL3tvcmd9L3JlcG9zXCJdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRW52aXJvbm1lbnQ6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9XCJcbiAgICBdLFxuICAgIGNyZWF0ZU9yVXBkYXRlRmlsZUNvbnRlbnRzOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBjcmVhdGVPcmdSdWxlc2V0OiBbXCJQT1NUIC9vcmdzL3tvcmd9L3J1bGVzZXRzXCJdLFxuICAgIGNyZWF0ZVBhZ2VzRGVwbG95bWVudDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvZGVwbG95bWVudFwiXSxcbiAgICBjcmVhdGVQYWdlc1NpdGU6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIGNyZWF0ZVJlbGVhc2U6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzXCJdLFxuICAgIGNyZWF0ZVJlcG9SdWxlc2V0OiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiXSxcbiAgICBjcmVhdGVUYWdQcm90ZWN0aW9uOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzL3Byb3RlY3Rpb25cIl0sXG4gICAgY3JlYXRlVXNpbmdUZW1wbGF0ZTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97dGVtcGxhdGVfb3duZXJ9L3t0ZW1wbGF0ZV9yZXBvfS9nZW5lcmF0ZVwiXG4gICAgXSxcbiAgICBjcmVhdGVXZWJob29rOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rc1wiXSxcbiAgICBkZWNsaW5lSW52aXRhdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcImRlY2xpbmVJbnZpdGF0aW9uRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgZGVjbGluZUludml0YXRpb25Gb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvcmVwb3NpdG9yeV9pbnZpdGF0aW9ucy97aW52aXRhdGlvbl9pZH1cIlxuICAgIF0sXG4gICAgZGVsZXRlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99XCJdLFxuICAgIGRlbGV0ZUFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zXCJcbiAgICBdLFxuICAgIGRlbGV0ZUFkbWluQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vZW5mb3JjZV9hZG1pbnNcIlxuICAgIF0sXG4gICAgZGVsZXRlQW5FbnZpcm9ubWVudDogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX1cIlxuICAgIF0sXG4gICAgZGVsZXRlQXV0b2xpbms6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYXV0b2xpbmtzL3thdXRvbGlua19pZH1cIl0sXG4gICAgZGVsZXRlQnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIlxuICAgIF0sXG4gICAgZGVsZXRlQ29tbWl0Q29tbWVudDogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21tZW50cy97Y29tbWVudF9pZH1cIl0sXG4gICAgZGVsZXRlQ29tbWl0U2lnbmF0dXJlUHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc2lnbmF0dXJlc1wiXG4gICAgXSxcbiAgICBkZWxldGVEZXBsb3lLZXk6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30va2V5cy97a2V5X2lkfVwiXSxcbiAgICBkZWxldGVEZXBsb3ltZW50OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHMve2RlcGxveW1lbnRfaWR9XCJcbiAgICBdLFxuICAgIGRlbGV0ZURlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzL3ticmFuY2hfcG9saWN5X2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVGaWxlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiXSxcbiAgICBkZWxldGVJbnZpdGF0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCJcbiAgICBdLFxuICAgIGRlbGV0ZU9yZ1J1bGVzZXQ6IFtcIkRFTEVURSAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgZGVsZXRlUGFnZXNTaXRlOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIGRlbGV0ZVB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3NcIlxuICAgIF0sXG4gICAgZGVsZXRlUmVsZWFzZTogW1wiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH1cIl0sXG4gICAgZGVsZXRlUmVsZWFzZUFzc2V0OiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIlxuICAgIF0sXG4gICAgZGVsZXRlUmVwb1J1bGVzZXQ6IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGRlbGV0ZVRhZ1Byb3RlY3Rpb246IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzL3Byb3RlY3Rpb24ve3RhZ19wcm90ZWN0aW9uX2lkfVwiXG4gICAgXSxcbiAgICBkZWxldGVXZWJob29rOiBbXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBkaXNhYmxlQXV0b21hdGVkU2VjdXJpdHlGaXhlczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9tYXRlZC1zZWN1cml0eS1maXhlc1wiXG4gICAgXSxcbiAgICBkaXNhYmxlRGVwbG95bWVudFByb3RlY3Rpb25SdWxlOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZXMve3Byb3RlY3Rpb25fcnVsZV9pZH1cIlxuICAgIF0sXG4gICAgZGlzYWJsZUxmc0ZvclJlcG86IFtcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vbGZzXCJdLFxuICAgIGRpc2FibGVWdWxuZXJhYmlsaXR5QWxlcnRzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vdnVsbmVyYWJpbGl0eS1hbGVydHNcIlxuICAgIF0sXG4gICAgZG93bmxvYWRBcmNoaXZlOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vemlwYmFsbC97cmVmfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInJlcG9zXCIsIFwiZG93bmxvYWRaaXBiYWxsQXJjaGl2ZVwiXSB9XG4gICAgXSxcbiAgICBkb3dubG9hZFRhcmJhbGxBcmNoaXZlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RhcmJhbGwve3JlZn1cIl0sXG4gICAgZG93bmxvYWRaaXBiYWxsQXJjaGl2ZTogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS96aXBiYWxsL3tyZWZ9XCJdLFxuICAgIGVuYWJsZUF1dG9tYXRlZFNlY3VyaXR5Rml4ZXM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbWF0ZWQtc2VjdXJpdHktZml4ZXNcIlxuICAgIF0sXG4gICAgZW5hYmxlTGZzRm9yUmVwbzogW1wiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sZnNcIl0sXG4gICAgZW5hYmxlVnVsbmVyYWJpbGl0eUFsZXJ0czogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3Z1bG5lcmFiaWxpdHktYWxlcnRzXCJcbiAgICBdLFxuICAgIGdlbmVyYXRlUmVsZWFzZU5vdGVzOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL2dlbmVyYXRlLW5vdGVzXCJcbiAgICBdLFxuICAgIGdldDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICBnZXRBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9uc1wiXG4gICAgXSxcbiAgICBnZXRBZG1pbkJyYW5jaFByb3RlY3Rpb246IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL2VuZm9yY2VfYWRtaW5zXCJcbiAgICBdLFxuICAgIGdldEFsbERlcGxveW1lbnRQcm90ZWN0aW9uUnVsZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlc1wiXG4gICAgXSxcbiAgICBnZXRBbGxFbnZpcm9ubWVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzXCJdLFxuICAgIGdldEFsbFN0YXR1c0NoZWNrQ29udGV4dHM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3MvY29udGV4dHNcIlxuICAgIF0sXG4gICAgZ2V0QWxsVG9waWNzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RvcGljc1wiXSxcbiAgICBnZXRBcHBzV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiXG4gICAgXSxcbiAgICBnZXRBdXRvbGluazogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9hdXRvbGlua3Mve2F1dG9saW5rX2lkfVwiXSxcbiAgICBnZXRCcmFuY2g6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH1cIl0sXG4gICAgZ2V0QnJhbmNoUHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb25cIlxuICAgIF0sXG4gICAgZ2V0QnJhbmNoUnVsZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXMvYnJhbmNoZXMve2JyYW5jaH1cIl0sXG4gICAgZ2V0Q2xvbmVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RyYWZmaWMvY2xvbmVzXCJdLFxuICAgIGdldENvZGVGcmVxdWVuY3lTdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9jb2RlX2ZyZXF1ZW5jeVwiXSxcbiAgICBnZXRDb2xsYWJvcmF0b3JQZXJtaXNzaW9uTGV2ZWw6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb2xsYWJvcmF0b3JzL3t1c2VybmFtZX0vcGVybWlzc2lvblwiXG4gICAgXSxcbiAgICBnZXRDb21iaW5lZFN0YXR1c0ZvclJlZjogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tyZWZ9L3N0YXR1c1wiXSxcbiAgICBnZXRDb21taXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0cy97cmVmfVwiXSxcbiAgICBnZXRDb21taXRBY3Rpdml0eVN0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvbW1pdF9hY3Rpdml0eVwiXSxcbiAgICBnZXRDb21taXRDb21tZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzL3tjb21tZW50X2lkfVwiXSxcbiAgICBnZXRDb21taXRTaWduYXR1cmVQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zaWduYXR1cmVzXCJcbiAgICBdLFxuICAgIGdldENvbW11bml0eVByb2ZpbGVNZXRyaWNzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW11bml0eS9wcm9maWxlXCJdLFxuICAgIGdldENvbnRlbnQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCJdLFxuICAgIGdldENvbnRyaWJ1dG9yc1N0YXRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3N0YXRzL2NvbnRyaWJ1dG9yc1wiXSxcbiAgICBnZXRDdXN0b21EZXBsb3ltZW50UHJvdGVjdGlvblJ1bGU6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlcy97cHJvdGVjdGlvbl9ydWxlX2lkfVwiXG4gICAgXSxcbiAgICBnZXREZXBsb3lLZXk6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30va2V5cy97a2V5X2lkfVwiXSxcbiAgICBnZXREZXBsb3ltZW50OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfVwiXSxcbiAgICBnZXREZXBsb3ltZW50QnJhbmNoUG9saWN5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZW52aXJvbm1lbnRzL3tlbnZpcm9ubWVudF9uYW1lfS9kZXBsb3ltZW50LWJyYW5jaC1wb2xpY2llcy97YnJhbmNoX3BvbGljeV9pZH1cIlxuICAgIF0sXG4gICAgZ2V0RGVwbG95bWVudFN0YXR1czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlcy97c3RhdHVzX2lkfVwiXG4gICAgXSxcbiAgICBnZXRFbnZpcm9ubWVudDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX1cIlxuICAgIF0sXG4gICAgZ2V0TGF0ZXN0UGFnZXNCdWlsZDogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHMvbGF0ZXN0XCJdLFxuICAgIGdldExhdGVzdFJlbGVhc2U6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvbGF0ZXN0XCJdLFxuICAgIGdldE9yZ1J1bGVzZXQ6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0cy97cnVsZXNldF9pZH1cIl0sXG4gICAgZ2V0T3JnUnVsZXNldHM6IFtcIkdFVCAvb3Jncy97b3JnfS9ydWxlc2V0c1wiXSxcbiAgICBnZXRQYWdlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlc1wiXSxcbiAgICBnZXRQYWdlc0J1aWxkOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkcy97YnVpbGRfaWR9XCJdLFxuICAgIGdldFBhZ2VzSGVhbHRoQ2hlY2s6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcGFnZXMvaGVhbHRoXCJdLFxuICAgIGdldFBhcnRpY2lwYXRpb25TdGF0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zdGF0cy9wYXJ0aWNpcGF0aW9uXCJdLFxuICAgIGdldFB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3NcIlxuICAgIF0sXG4gICAgZ2V0UHVuY2hDYXJkU3RhdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc3RhdHMvcHVuY2hfY2FyZFwiXSxcbiAgICBnZXRSZWFkbWU6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVhZG1lXCJdLFxuICAgIGdldFJlYWRtZUluRGlyZWN0b3J5OiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlYWRtZS97ZGlyfVwiXSxcbiAgICBnZXRSZWxlYXNlOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfVwiXSxcbiAgICBnZXRSZWxlYXNlQXNzZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIl0sXG4gICAgZ2V0UmVsZWFzZUJ5VGFnOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3RhZ3Mve3RhZ31cIl0sXG4gICAgZ2V0UmVwb1J1bGVzZXQ6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIGdldFJlcG9SdWxlc2V0czogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ydWxlc2V0c1wiXSxcbiAgICBnZXRTdGF0dXNDaGVja3NQcm90ZWN0aW9uOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzXCJcbiAgICBdLFxuICAgIGdldFRlYW1zV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdGVhbXNcIlxuICAgIF0sXG4gICAgZ2V0VG9wUGF0aHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy9wb3B1bGFyL3BhdGhzXCJdLFxuICAgIGdldFRvcFJlZmVycmVyczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFmZmljL3BvcHVsYXIvcmVmZXJyZXJzXCJdLFxuICAgIGdldFVzZXJzV2l0aEFjY2Vzc1RvUHJvdGVjdGVkQnJhbmNoOiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvdXNlcnNcIlxuICAgIF0sXG4gICAgZ2V0Vmlld3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vdHJhZmZpYy92aWV3c1wiXSxcbiAgICBnZXRXZWJob29rOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfVwiXSxcbiAgICBnZXRXZWJob29rQ29uZmlnRm9yUmVwbzogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2hvb2tzL3tob29rX2lkfS9jb25maWdcIlxuICAgIF0sXG4gICAgZ2V0V2ViaG9va0RlbGl2ZXJ5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L2RlbGl2ZXJpZXMve2RlbGl2ZXJ5X2lkfVwiXG4gICAgXSxcbiAgICBsaXN0QXV0b2xpbmtzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2F1dG9saW5rc1wiXSxcbiAgICBsaXN0QnJhbmNoZXM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXNcIl0sXG4gICAgbGlzdEJyYW5jaGVzRm9ySGVhZENvbW1pdDogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve2NvbW1pdF9zaGF9L2JyYW5jaGVzLXdoZXJlLWhlYWRcIlxuICAgIF0sXG4gICAgbGlzdENvbGxhYm9yYXRvcnM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29sbGFib3JhdG9yc1wiXSxcbiAgICBsaXN0Q29tbWVudHNGb3JDb21taXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiXG4gICAgXSxcbiAgICBsaXN0Q29tbWl0Q29tbWVudHNGb3JSZXBvOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1lbnRzXCJdLFxuICAgIGxpc3RDb21taXRTdGF0dXNlc0ZvclJlZjogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHMve3JlZn0vc3RhdHVzZXNcIlxuICAgIF0sXG4gICAgbGlzdENvbW1pdHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWl0c1wiXSxcbiAgICBsaXN0Q29udHJpYnV0b3JzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRyaWJ1dG9yc1wiXSxcbiAgICBsaXN0Q3VzdG9tRGVwbG95bWVudFJ1bGVJbnRlZ3JhdGlvbnM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlcy9hcHBzXCJcbiAgICBdLFxuICAgIGxpc3REZXBsb3lLZXlzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2tleXNcIl0sXG4gICAgbGlzdERlcGxveW1lbnRCcmFuY2hQb2xpY2llczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2Vudmlyb25tZW50cy97ZW52aXJvbm1lbnRfbmFtZX0vZGVwbG95bWVudC1icmFuY2gtcG9saWNpZXNcIlxuICAgIF0sXG4gICAgbGlzdERlcGxveW1lbnRTdGF0dXNlczogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50X2lkfS9zdGF0dXNlc1wiXG4gICAgXSxcbiAgICBsaXN0RGVwbG95bWVudHM6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZGVwbG95bWVudHNcIl0sXG4gICAgbGlzdEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvcmVwb3NcIl0sXG4gICAgbGlzdEZvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3JlcG9zXCJdLFxuICAgIGxpc3RGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vcmVwb3NcIl0sXG4gICAgbGlzdEZvcmtzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXCJdLFxuICAgIGxpc3RJbnZpdGF0aW9uczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9pbnZpdGF0aW9uc1wiXSxcbiAgICBsaXN0SW52aXRhdGlvbnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3JlcG9zaXRvcnlfaW52aXRhdGlvbnNcIl0sXG4gICAgbGlzdExhbmd1YWdlczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9sYW5ndWFnZXNcIl0sXG4gICAgbGlzdFBhZ2VzQnVpbGRzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzL2J1aWxkc1wiXSxcbiAgICBsaXN0UHVibGljOiBbXCJHRVQgL3JlcG9zaXRvcmllc1wiXSxcbiAgICBsaXN0UHVsbFJlcXVlc3RzQXNzb2NpYXRlZFdpdGhDb21taXQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9wdWxsc1wiXG4gICAgXSxcbiAgICBsaXN0UmVsZWFzZUFzc2V0czogW1xuICAgICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzL3tyZWxlYXNlX2lkfS9hc3NldHNcIlxuICAgIF0sXG4gICAgbGlzdFJlbGVhc2VzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3JlbGVhc2VzXCJdLFxuICAgIGxpc3RUYWdQcm90ZWN0aW9uOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3RhZ3MvcHJvdGVjdGlvblwiXSxcbiAgICBsaXN0VGFnczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90YWdzXCJdLFxuICAgIGxpc3RUZWFtczogW1wiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90ZWFtc1wiXSxcbiAgICBsaXN0V2ViaG9va0RlbGl2ZXJpZXM6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllc1wiXG4gICAgXSxcbiAgICBsaXN0V2ViaG9va3M6IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3NcIl0sXG4gICAgbWVyZ2U6IFtcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L21lcmdlc1wiXSxcbiAgICBtZXJnZVVwc3RyZWFtOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9tZXJnZS11cHN0cmVhbVwiXSxcbiAgICBwaW5nV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L3BpbmdzXCJdLFxuICAgIHJlZGVsaXZlcldlYmhvb2tEZWxpdmVyeTogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vZGVsaXZlcmllcy97ZGVsaXZlcnlfaWR9L2F0dGVtcHRzXCJcbiAgICBdLFxuICAgIHJlbW92ZUFwcEFjY2Vzc1Jlc3RyaWN0aW9uczogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVzdHJpY3Rpb25zL2FwcHNcIixcbiAgICAgIHt9LFxuICAgICAgeyBtYXBUb0RhdGE6IFwiYXBwc1wiIH1cbiAgICBdLFxuICAgIHJlbW92ZUNvbGxhYm9yYXRvcjogW1xuICAgICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiXG4gICAgXSxcbiAgICByZW1vdmVTdGF0dXNDaGVja0NvbnRleHRzOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzL2NvbnRleHRzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgbWFwVG9EYXRhOiBcImNvbnRleHRzXCIgfVxuICAgIF0sXG4gICAgcmVtb3ZlU3RhdHVzQ2hlY2tQcm90ZWN0aW9uOiBbXG4gICAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9zdGF0dXNfY2hlY2tzXCJcbiAgICBdLFxuICAgIHJlbW92ZVRlYW1BY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH1cbiAgICBdLFxuICAgIHJlbW92ZVVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ1c2Vyc1wiIH1cbiAgICBdLFxuICAgIHJlbmFtZUJyYW5jaDogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcmVuYW1lXCJdLFxuICAgIHJlcGxhY2VBbGxUb3BpY3M6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vdG9waWNzXCJdLFxuICAgIHJlcXVlc3RQYWdlc0J1aWxkOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9wYWdlcy9idWlsZHNcIl0sXG4gICAgc2V0QWRtaW5CcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vZW5mb3JjZV9hZG1pbnNcIlxuICAgIF0sXG4gICAgc2V0QXBwQWNjZXNzUmVzdHJpY3Rpb25zOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXN0cmljdGlvbnMvYXBwc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJhcHBzXCIgfVxuICAgIF0sXG4gICAgc2V0U3RhdHVzQ2hlY2tDb250ZXh0czogW1xuICAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrcy9jb250ZXh0c1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJjb250ZXh0c1wiIH1cbiAgICBdLFxuICAgIHNldFRlYW1BY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy90ZWFtc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ0ZWFtc1wiIH1cbiAgICBdLFxuICAgIHNldFVzZXJBY2Nlc3NSZXN0cmljdGlvbnM6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3Jlc3RyaWN0aW9ucy91c2Vyc1wiLFxuICAgICAge30sXG4gICAgICB7IG1hcFRvRGF0YTogXCJ1c2Vyc1wiIH1cbiAgICBdLFxuICAgIHRlc3RQdXNoV2ViaG9vazogW1wiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9L3Rlc3RzXCJdLFxuICAgIHRyYW5zZmVyOiBbXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS90cmFuc2ZlclwiXSxcbiAgICB1cGRhdGU6IFtcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfVwiXSxcbiAgICB1cGRhdGVCcmFuY2hQcm90ZWN0aW9uOiBbXG4gICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvblwiXG4gICAgXSxcbiAgICB1cGRhdGVDb21taXRDb21tZW50OiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vY29tbWVudHMve2NvbW1lbnRfaWR9XCJdLFxuICAgIHVwZGF0ZURlcGxveW1lbnRCcmFuY2hQb2xpY3k6IFtcbiAgICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9lbnZpcm9ubWVudHMve2Vudmlyb25tZW50X25hbWV9L2RlcGxveW1lbnQtYnJhbmNoLXBvbGljaWVzL3ticmFuY2hfcG9saWN5X2lkfVwiXG4gICAgXSxcbiAgICB1cGRhdGVJbmZvcm1hdGlvbkFib3V0UGFnZXNTaXRlOiBbXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3BhZ2VzXCJdLFxuICAgIHVwZGF0ZUludml0YXRpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2ludml0YXRpb25zL3tpbnZpdGF0aW9uX2lkfVwiXG4gICAgXSxcbiAgICB1cGRhdGVPcmdSdWxlc2V0OiBbXCJQVVQgL29yZ3Mve29yZ30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIHVwZGF0ZVB1bGxSZXF1ZXN0UmV2aWV3UHJvdGVjdGlvbjogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vYnJhbmNoZXMve2JyYW5jaH0vcHJvdGVjdGlvbi9yZXF1aXJlZF9wdWxsX3JlcXVlc3RfcmV2aWV3c1wiXG4gICAgXSxcbiAgICB1cGRhdGVSZWxlYXNlOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMve3JlbGVhc2VfaWR9XCJdLFxuICAgIHVwZGF0ZVJlbGVhc2VBc3NldDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXMvYXNzZXRzL3thc3NldF9pZH1cIlxuICAgIF0sXG4gICAgdXBkYXRlUmVwb1J1bGVzZXQ6IFtcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vcnVsZXNldHMve3J1bGVzZXRfaWR9XCJdLFxuICAgIHVwZGF0ZVN0YXR1c0NoZWNrUG90ZWN0aW9uOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9icmFuY2hlcy97YnJhbmNofS9wcm90ZWN0aW9uL3JlcXVpcmVkX3N0YXR1c19jaGVja3NcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJyZXBvc1wiLCBcInVwZGF0ZVN0YXR1c0NoZWNrUHJvdGVjdGlvblwiXSB9XG4gICAgXSxcbiAgICB1cGRhdGVTdGF0dXNDaGVja1Byb3RlY3Rpb246IFtcbiAgICAgIFwiUEFUQ0ggL3JlcG9zL3tvd25lcn0ve3JlcG99L2JyYW5jaGVzL3ticmFuY2h9L3Byb3RlY3Rpb24vcmVxdWlyZWRfc3RhdHVzX2NoZWNrc1wiXG4gICAgXSxcbiAgICB1cGRhdGVXZWJob29rOiBbXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vaG9va3Mve2hvb2tfaWR9XCJdLFxuICAgIHVwZGF0ZVdlYmhvb2tDb25maWdGb3JSZXBvOiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9ob29rcy97aG9va19pZH0vY29uZmlnXCJcbiAgICBdLFxuICAgIHVwbG9hZFJlbGVhc2VBc3NldDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9yZWxlYXNlcy97cmVsZWFzZV9pZH0vYXNzZXRzez9uYW1lLGxhYmVsfVwiLFxuICAgICAgeyBiYXNlVXJsOiBcImh0dHBzOi8vdXBsb2Fkcy5naXRodWIuY29tXCIgfVxuICAgIF1cbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgY29kZTogW1wiR0VUIC9zZWFyY2gvY29kZVwiXSxcbiAgICBjb21taXRzOiBbXCJHRVQgL3NlYXJjaC9jb21taXRzXCJdLFxuICAgIGlzc3Vlc0FuZFB1bGxSZXF1ZXN0czogW1wiR0VUIC9zZWFyY2gvaXNzdWVzXCJdLFxuICAgIGxhYmVsczogW1wiR0VUIC9zZWFyY2gvbGFiZWxzXCJdLFxuICAgIHJlcG9zOiBbXCJHRVQgL3NlYXJjaC9yZXBvc2l0b3JpZXNcIl0sXG4gICAgdG9waWNzOiBbXCJHRVQgL3NlYXJjaC90b3BpY3NcIl0sXG4gICAgdXNlcnM6IFtcIkdFVCAvc2VhcmNoL3VzZXJzXCJdXG4gIH0sXG4gIHNlY3JldFNjYW5uaW5nOiB7XG4gICAgZ2V0QWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9XCJcbiAgICBdLFxuICAgIGxpc3RBbGVydHNGb3JFbnRlcnByaXNlOiBbXG4gICAgICBcIkdFVCAvZW50ZXJwcmlzZXMve2VudGVycHJpc2V9L3NlY3JldC1zY2FubmluZy9hbGVydHNcIlxuICAgIF0sXG4gICAgbGlzdEFsZXJ0c0Zvck9yZzogW1wiR0VUIC9vcmdzL3tvcmd9L3NlY3JldC1zY2FubmluZy9hbGVydHNcIl0sXG4gICAgbGlzdEFsZXJ0c0ZvclJlcG86IFtcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0c1wiXSxcbiAgICBsaXN0TG9jYXRpb25zRm9yQWxlcnQ6IFtcbiAgICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWNyZXQtc2Nhbm5pbmcvYWxlcnRzL3thbGVydF9udW1iZXJ9L2xvY2F0aW9uc1wiXG4gICAgXSxcbiAgICB1cGRhdGVBbGVydDogW1xuICAgICAgXCJQQVRDSCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjcmV0LXNjYW5uaW5nL2FsZXJ0cy97YWxlcnRfbnVtYmVyfVwiXG4gICAgXVxuICB9LFxuICBzZWN1cml0eUFkdmlzb3JpZXM6IHtcbiAgICBjcmVhdGVQcml2YXRlVnVsbmVyYWJpbGl0eVJlcG9ydDogW1xuICAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3JlcG9ydHNcIlxuICAgIF0sXG4gICAgY3JlYXRlUmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIlBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIlxuICAgIF0sXG4gICAgZ2V0UmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vc2VjdXJpdHktYWR2aXNvcmllcy97Z2hzYV9pZH1cIlxuICAgIF0sXG4gICAgbGlzdFJlcG9zaXRvcnlBZHZpc29yaWVzOiBbXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L3NlY3VyaXR5LWFkdmlzb3JpZXNcIl0sXG4gICAgdXBkYXRlUmVwb3NpdG9yeUFkdmlzb3J5OiBbXG4gICAgICBcIlBBVENIIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9zZWN1cml0eS1hZHZpc29yaWVzL3tnaHNhX2lkfVwiXG4gICAgXVxuICB9LFxuICB0ZWFtczoge1xuICAgIGFkZE9yVXBkYXRlTWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXG4gICAgXSxcbiAgICBhZGRPclVwZGF0ZVByb2plY3RQZXJtaXNzaW9uc0luT3JnOiBbXG4gICAgICBcIlBVVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9wcm9qZWN0cy97cHJvamVjdF9pZH1cIlxuICAgIF0sXG4gICAgYWRkT3JVcGRhdGVSZXBvUGVybWlzc2lvbnNJbk9yZzogW1xuICAgICAgXCJQVVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3Mve293bmVyfS97cmVwb31cIlxuICAgIF0sXG4gICAgY2hlY2tQZXJtaXNzaW9uc0ZvclByb2plY3RJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcHJvamVjdHMve3Byb2plY3RfaWR9XCJcbiAgICBdLFxuICAgIGNoZWNrUGVybWlzc2lvbnNGb3JSZXBvSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L3JlcG9zL3tvd25lcn0ve3JlcG99XCJcbiAgICBdLFxuICAgIGNyZWF0ZTogW1wiUE9TVCAvb3Jncy97b3JnfS90ZWFtc1wiXSxcbiAgICBjcmVhdGVEaXNjdXNzaW9uQ29tbWVudEluT3JnOiBbXG4gICAgICBcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50c1wiXG4gICAgXSxcbiAgICBjcmVhdGVEaXNjdXNzaW9uSW5Pcmc6IFtcIlBPU1QgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnNcIl0sXG4gICAgZGVsZXRlRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9udW1iZXJ9XCJcbiAgICBdLFxuICAgIGRlbGV0ZURpc2N1c3Npb25Jbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnMve2Rpc2N1c3Npb25fbnVtYmVyfVwiXG4gICAgXSxcbiAgICBkZWxldGVJbk9yZzogW1wiREVMRVRFIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGdldEJ5TmFtZTogW1wiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdLFxuICAgIGdldERpc2N1c3Npb25Db21tZW50SW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHMve2NvbW1lbnRfbnVtYmVyfVwiXG4gICAgXSxcbiAgICBnZXREaXNjdXNzaW9uSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn1cIlxuICAgIF0sXG4gICAgZ2V0TWVtYmVyc2hpcEZvclVzZXJJbk9yZzogW1xuICAgICAgXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc2hpcHMve3VzZXJuYW1lfVwiXG4gICAgXSxcbiAgICBsaXN0OiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXNcIl0sXG4gICAgbGlzdENoaWxkSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS90ZWFtc1wiXSxcbiAgICBsaXN0RGlzY3Vzc2lvbkNvbW1lbnRzSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn0vY29tbWVudHNcIlxuICAgIF0sXG4gICAgbGlzdERpc2N1c3Npb25zSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9uc1wiXSxcbiAgICBsaXN0Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci90ZWFtc1wiXSxcbiAgICBsaXN0TWVtYmVyc0luT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vbWVtYmVyc1wiXSxcbiAgICBsaXN0UGVuZGluZ0ludml0YXRpb25zSW5Pcmc6IFtcbiAgICAgIFwiR0VUIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2ludml0YXRpb25zXCJcbiAgICBdLFxuICAgIGxpc3RQcm9qZWN0c0luT3JnOiBbXCJHRVQgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcHJvamVjdHNcIl0sXG4gICAgbGlzdFJlcG9zSW5Pcmc6IFtcIkdFVCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9yZXBvc1wiXSxcbiAgICByZW1vdmVNZW1iZXJzaGlwRm9yVXNlckluT3JnOiBbXG4gICAgICBcIkRFTEVURSAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9tZW1iZXJzaGlwcy97dXNlcm5hbWV9XCJcbiAgICBdLFxuICAgIHJlbW92ZVByb2plY3RJbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcHJvamVjdHMve3Byb2plY3RfaWR9XCJcbiAgICBdLFxuICAgIHJlbW92ZVJlcG9Jbk9yZzogW1xuICAgICAgXCJERUxFVEUgL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vcmVwb3Mve293bmVyfS97cmVwb31cIlxuICAgIF0sXG4gICAgdXBkYXRlRGlzY3Vzc2lvbkNvbW1lbnRJbk9yZzogW1xuICAgICAgXCJQQVRDSCAvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzL3tjb21tZW50X251bWJlcn1cIlxuICAgIF0sXG4gICAgdXBkYXRlRGlzY3Vzc2lvbkluT3JnOiBbXG4gICAgICBcIlBBVENIIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9L2Rpc2N1c3Npb25zL3tkaXNjdXNzaW9uX251bWJlcn1cIlxuICAgIF0sXG4gICAgdXBkYXRlSW5Pcmc6IFtcIlBBVENIIC9vcmdzL3tvcmd9L3RlYW1zL3t0ZWFtX3NsdWd9XCJdXG4gIH0sXG4gIHVzZXJzOiB7XG4gICAgYWRkRW1haWxGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJhZGRFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIGFkZEVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIlBPU1QgL3VzZXIvZW1haWxzXCJdLFxuICAgIGFkZFNvY2lhbEFjY291bnRGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgYmxvY2s6IFtcIlBVVCAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0Jsb2NrZWQ6IFtcIkdFVCAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICBjaGVja0ZvbGxvd2luZ0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9mb2xsb3dpbmcve3RhcmdldF91c2VyfVwiXSxcbiAgICBjaGVja1BlcnNvbklzRm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcIkdFVCAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICBjcmVhdGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIlBPU1QgL3VzZXIvZ3BnX2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImNyZWF0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIGNyZWF0ZUdwZ0tleUZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJQT1NUIC91c2VyL2dwZ19rZXlzXCJdLFxuICAgIGNyZWF0ZVB1YmxpY1NzaEtleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiUE9TVCAvdXNlci9rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJjcmVhdGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9XG4gICAgXSxcbiAgICBjcmVhdGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9rZXlzXCJdLFxuICAgIGNyZWF0ZVNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiUE9TVCAvdXNlci9zc2hfc2lnbmluZ19rZXlzXCJdLFxuICAgIGRlbGV0ZUVtYWlsRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvZW1haWxzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVFbWFpbEZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIGRlbGV0ZUVtYWlsRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkRFTEVURSAvdXNlci9lbWFpbHNcIl0sXG4gICAgZGVsZXRlR3BnS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvZ3BnX2tleXMve2dwZ19rZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9XG4gICAgXSxcbiAgICBkZWxldGVHcGdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiXSxcbiAgICBkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkRFTEVURSAvdXNlci9rZXlzL3trZXlfaWR9XCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlclwiXSB9XG4gICAgXSxcbiAgICBkZWxldGVQdWJsaWNTc2hLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiREVMRVRFIC91c2VyL2tleXMve2tleV9pZH1cIl0sXG4gICAgZGVsZXRlU29jaWFsQWNjb3VudEZvckF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJERUxFVEUgL3VzZXIvc29jaWFsX2FjY291bnRzXCJdLFxuICAgIGRlbGV0ZVNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJERUxFVEUgL3VzZXIvc3NoX3NpZ25pbmdfa2V5cy97c3NoX3NpZ25pbmdfa2V5X2lkfVwiXG4gICAgXSxcbiAgICBmb2xsb3c6IFtcIlBVVCAvdXNlci9mb2xsb3dpbmcve3VzZXJuYW1lfVwiXSxcbiAgICBnZXRBdXRoZW50aWNhdGVkOiBbXCJHRVQgL3VzZXJcIl0sXG4gICAgZ2V0QnlVc2VybmFtZTogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9XCJdLFxuICAgIGdldENvbnRleHRGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0vaG92ZXJjYXJkXCJdLFxuICAgIGdldEdwZ0tleUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2dwZ19rZXlzL3tncGdfa2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZ2V0R3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgZ2V0R3BnS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ncGdfa2V5cy97Z3BnX2tleV9pZH1cIl0sXG4gICAgZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIva2V5cy97a2V5X2lkfVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwiZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgZ2V0UHVibGljU3NoS2V5Rm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9rZXlzL3trZXlfaWR9XCJdLFxuICAgIGdldFNzaFNpZ25pbmdLZXlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJHRVQgL3VzZXIvc3NoX3NpZ25pbmdfa2V5cy97c3NoX3NpZ25pbmdfa2V5X2lkfVwiXG4gICAgXSxcbiAgICBsaXN0OiBbXCJHRVQgL3VzZXJzXCJdLFxuICAgIGxpc3RCbG9ja2VkQnlBdXRoZW50aWNhdGVkOiBbXG4gICAgICBcIkdFVCAvdXNlci9ibG9ja3NcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RCbG9ja2VkQnlBdXRoZW50aWNhdGVkVXNlclwiXSB9XG4gICAgXSxcbiAgICBsaXN0QmxvY2tlZEJ5QXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ibG9ja3NcIl0sXG4gICAgbGlzdEVtYWlsc0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEVtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIGxpc3RFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2VtYWlsc1wiXSxcbiAgICBsaXN0Rm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2ZvbGxvd2luZ1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdEZvbGxvd2VkQnlBdXRoZW50aWNhdGVkVXNlclwiXSB9XG4gICAgXSxcbiAgICBsaXN0Rm9sbG93ZWRCeUF1dGhlbnRpY2F0ZWRVc2VyOiBbXCJHRVQgL3VzZXIvZm9sbG93aW5nXCJdLFxuICAgIGxpc3RGb2xsb3dlcnNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2ZvbGxvd2Vyc1wiXSxcbiAgICBsaXN0Rm9sbG93ZXJzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2Vyc1wiXSxcbiAgICBsaXN0Rm9sbG93aW5nRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L2ZvbGxvd2luZ1wiXSxcbiAgICBsaXN0R3BnS2V5c0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2dwZ19rZXlzXCIsXG4gICAgICB7fSxcbiAgICAgIHsgcmVuYW1lZDogW1widXNlcnNcIiwgXCJsaXN0R3BnS2V5c0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIGxpc3RHcGdLZXlzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9ncGdfa2V5c1wiXSxcbiAgICBsaXN0R3BnS2V5c0ZvclVzZXI6IFtcIkdFVCAvdXNlcnMve3VzZXJuYW1lfS9ncGdfa2V5c1wiXSxcbiAgICBsaXN0UHVibGljRW1haWxzRm9yQXV0aGVudGljYXRlZDogW1xuICAgICAgXCJHRVQgL3VzZXIvcHVibGljX2VtYWlsc1wiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwibGlzdFB1YmxpY0VtYWlsc0ZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIGxpc3RQdWJsaWNFbWFpbHNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3B1YmxpY19lbWFpbHNcIl0sXG4gICAgbGlzdFB1YmxpY0tleXNGb3JVc2VyOiBbXCJHRVQgL3VzZXJzL3t1c2VybmFtZX0va2V5c1wiXSxcbiAgICBsaXN0UHVibGljU3NoS2V5c0ZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiR0VUIC91c2VyL2tleXNcIixcbiAgICAgIHt9LFxuICAgICAgeyByZW5hbWVkOiBbXCJ1c2Vyc1wiLCBcImxpc3RQdWJsaWNTc2hLZXlzRm9yQXV0aGVudGljYXRlZFVzZXJcIl0gfVxuICAgIF0sXG4gICAgbGlzdFB1YmxpY1NzaEtleXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL2tleXNcIl0sXG4gICAgbGlzdFNvY2lhbEFjY291bnRzRm9yQXV0aGVudGljYXRlZFVzZXI6IFtcIkdFVCAvdXNlci9zb2NpYWxfYWNjb3VudHNcIl0sXG4gICAgbGlzdFNvY2lhbEFjY291bnRzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NvY2lhbF9hY2NvdW50c1wiXSxcbiAgICBsaXN0U3NoU2lnbmluZ0tleXNGb3JBdXRoZW50aWNhdGVkVXNlcjogW1wiR0VUIC91c2VyL3NzaF9zaWduaW5nX2tleXNcIl0sXG4gICAgbGlzdFNzaFNpZ25pbmdLZXlzRm9yVXNlcjogW1wiR0VUIC91c2Vycy97dXNlcm5hbWV9L3NzaF9zaWduaW5nX2tleXNcIl0sXG4gICAgc2V0UHJpbWFyeUVtYWlsVmlzaWJpbGl0eUZvckF1dGhlbnRpY2F0ZWQ6IFtcbiAgICAgIFwiUEFUQ0ggL3VzZXIvZW1haWwvdmlzaWJpbGl0eVwiLFxuICAgICAge30sXG4gICAgICB7IHJlbmFtZWQ6IFtcInVzZXJzXCIsIFwic2V0UHJpbWFyeUVtYWlsVmlzaWJpbGl0eUZvckF1dGhlbnRpY2F0ZWRVc2VyXCJdIH1cbiAgICBdLFxuICAgIHNldFByaW1hcnlFbWFpbFZpc2liaWxpdHlGb3JBdXRoZW50aWNhdGVkVXNlcjogW1xuICAgICAgXCJQQVRDSCAvdXNlci9lbWFpbC92aXNpYmlsaXR5XCJcbiAgICBdLFxuICAgIHVuYmxvY2s6IFtcIkRFTEVURSAvdXNlci9ibG9ja3Mve3VzZXJuYW1lfVwiXSxcbiAgICB1bmZvbGxvdzogW1wiREVMRVRFIC91c2VyL2ZvbGxvd2luZy97dXNlcm5hbWV9XCJdLFxuICAgIHVwZGF0ZUF1dGhlbnRpY2F0ZWQ6IFtcIlBBVENIIC91c2VyXCJdXG4gIH1cbn07XG52YXIgZW5kcG9pbnRzX2RlZmF1bHQgPSBFbmRwb2ludHM7XG5cbi8vIHBrZy9kaXN0LXNyYy9lbmRwb2ludHMtdG8tbWV0aG9kcy5qc1xudmFyIGVuZHBvaW50TWV0aG9kc01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5mb3IgKGNvbnN0IFtzY29wZSwgZW5kcG9pbnRzXSBvZiBPYmplY3QuZW50cmllcyhlbmRwb2ludHNfZGVmYXVsdCkpIHtcbiAgZm9yIChjb25zdCBbbWV0aG9kTmFtZSwgZW5kcG9pbnRdIG9mIE9iamVjdC5lbnRyaWVzKGVuZHBvaW50cykpIHtcbiAgICBjb25zdCBbcm91dGUsIGRlZmF1bHRzLCBkZWNvcmF0aW9uc10gPSBlbmRwb2ludDtcbiAgICBjb25zdCBbbWV0aG9kLCB1cmxdID0gcm91dGUuc3BsaXQoLyAvKTtcbiAgICBjb25zdCBlbmRwb2ludERlZmF1bHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0c1xuICAgICk7XG4gICAgaWYgKCFlbmRwb2ludE1ldGhvZHNNYXAuaGFzKHNjb3BlKSkge1xuICAgICAgZW5kcG9pbnRNZXRob2RzTWFwLnNldChzY29wZSwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gICAgfVxuICAgIGVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLnNldChtZXRob2ROYW1lLCB7XG4gICAgICBzY29wZSxcbiAgICAgIG1ldGhvZE5hbWUsXG4gICAgICBlbmRwb2ludERlZmF1bHRzLFxuICAgICAgZGVjb3JhdGlvbnNcbiAgICB9KTtcbiAgfVxufVxudmFyIGhhbmRsZXIgPSB7XG4gIGdldCh7IG9jdG9raXQsIHNjb3BlLCBjYWNoZSB9LCBtZXRob2ROYW1lKSB7XG4gICAgaWYgKGNhY2hlW21ldGhvZE5hbWVdKSB7XG4gICAgICByZXR1cm4gY2FjaGVbbWV0aG9kTmFtZV07XG4gICAgfVxuICAgIGNvbnN0IHsgZGVjb3JhdGlvbnMsIGVuZHBvaW50RGVmYXVsdHMgfSA9IGVuZHBvaW50TWV0aG9kc01hcC5nZXQoc2NvcGUpLmdldChtZXRob2ROYW1lKTtcbiAgICBpZiAoZGVjb3JhdGlvbnMpIHtcbiAgICAgIGNhY2hlW21ldGhvZE5hbWVdID0gZGVjb3JhdGUoXG4gICAgICAgIG9jdG9raXQsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICBlbmRwb2ludERlZmF1bHRzLFxuICAgICAgICBkZWNvcmF0aW9uc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBvY3Rva2l0LnJlcXVlc3QuZGVmYXVsdHMoZW5kcG9pbnREZWZhdWx0cyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZVttZXRob2ROYW1lXTtcbiAgfVxufTtcbmZ1bmN0aW9uIGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0KSB7XG4gIGNvbnN0IG5ld01ldGhvZHMgPSB7fTtcbiAgZm9yIChjb25zdCBzY29wZSBvZiBlbmRwb2ludE1ldGhvZHNNYXAua2V5cygpKSB7XG4gICAgbmV3TWV0aG9kc1tzY29wZV0gPSBuZXcgUHJveHkoeyBvY3Rva2l0LCBzY29wZSwgY2FjaGU6IHt9IH0sIGhhbmRsZXIpO1xuICB9XG4gIHJldHVybiBuZXdNZXRob2RzO1xufVxuZnVuY3Rpb24gZGVjb3JhdGUob2N0b2tpdCwgc2NvcGUsIG1ldGhvZE5hbWUsIGRlZmF1bHRzLCBkZWNvcmF0aW9ucykge1xuICBjb25zdCByZXF1ZXN0V2l0aERlZmF1bHRzID0gb2N0b2tpdC5yZXF1ZXN0LmRlZmF1bHRzKGRlZmF1bHRzKTtcbiAgZnVuY3Rpb24gd2l0aERlY29yYXRpb25zKC4uLmFyZ3MpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHJlcXVlc3RXaXRoRGVmYXVsdHMuZW5kcG9pbnQubWVyZ2UoLi4uYXJncyk7XG4gICAgaWYgKGRlY29yYXRpb25zLm1hcFRvRGF0YSkge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgZGF0YTogb3B0aW9uc1tkZWNvcmF0aW9ucy5tYXBUb0RhdGFdLFxuICAgICAgICBbZGVjb3JhdGlvbnMubWFwVG9EYXRhXTogdm9pZCAwXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXF1ZXN0V2l0aERlZmF1bHRzKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZGVjb3JhdGlvbnMucmVuYW1lZCkge1xuICAgICAgY29uc3QgW25ld1Njb3BlLCBuZXdNZXRob2ROYW1lXSA9IGRlY29yYXRpb25zLnJlbmFtZWQ7XG4gICAgICBvY3Rva2l0LmxvZy53YXJuKFxuICAgICAgICBgb2N0b2tpdC4ke3Njb3BlfS4ke21ldGhvZE5hbWV9KCkgaGFzIGJlZW4gcmVuYW1lZCB0byBvY3Rva2l0LiR7bmV3U2NvcGV9LiR7bmV3TWV0aG9kTmFtZX0oKWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChkZWNvcmF0aW9ucy5kZXByZWNhdGVkKSB7XG4gICAgICBvY3Rva2l0LmxvZy53YXJuKGRlY29yYXRpb25zLmRlcHJlY2F0ZWQpO1xuICAgIH1cbiAgICBpZiAoZGVjb3JhdGlvbnMucmVuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMyID0gcmVxdWVzdFdpdGhEZWZhdWx0cy5lbmRwb2ludC5tZXJnZSguLi5hcmdzKTtcbiAgICAgIGZvciAoY29uc3QgW25hbWUsIGFsaWFzXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgICAgZGVjb3JhdGlvbnMucmVuYW1lZFBhcmFtZXRlcnNcbiAgICAgICkpIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gb3B0aW9uczIpIHtcbiAgICAgICAgICBvY3Rva2l0LmxvZy53YXJuKFxuICAgICAgICAgICAgYFwiJHtuYW1lfVwiIHBhcmFtZXRlciBpcyBkZXByZWNhdGVkIGZvciBcIm9jdG9raXQuJHtzY29wZX0uJHttZXRob2ROYW1lfSgpXCIuIFVzZSBcIiR7YWxpYXN9XCIgaW5zdGVhZGBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghKGFsaWFzIGluIG9wdGlvbnMyKSkge1xuICAgICAgICAgICAgb3B0aW9uczJbYWxpYXNdID0gb3B0aW9uczJbbmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zMltuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcXVlc3RXaXRoRGVmYXVsdHMob3B0aW9uczIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdFdpdGhEZWZhdWx0cyguLi5hcmdzKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih3aXRoRGVjb3JhdGlvbnMsIHJlcXVlc3RXaXRoRGVmYXVsdHMpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHJlc3RFbmRwb2ludE1ldGhvZHMob2N0b2tpdCkge1xuICBjb25zdCBhcGkgPSBlbmRwb2ludHNUb01ldGhvZHMob2N0b2tpdCk7XG4gIHJldHVybiB7XG4gICAgcmVzdDogYXBpXG4gIH07XG59XG5yZXN0RW5kcG9pbnRNZXRob2RzLlZFUlNJT04gPSBWRVJTSU9OO1xuZnVuY3Rpb24gbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcyhvY3Rva2l0KSB7XG4gIGNvbnN0IGFwaSA9IGVuZHBvaW50c1RvTWV0aG9kcyhvY3Rva2l0KTtcbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gICAgcmVzdDogYXBpXG4gIH07XG59XG5sZWdhY3lSZXN0RW5kcG9pbnRNZXRob2RzLlZFUlNJT04gPSBWRVJTSU9OO1xuZXhwb3J0IHtcbiAgbGVnYWN5UmVzdEVuZHBvaW50TWV0aG9kcyxcbiAgcmVzdEVuZHBvaW50TWV0aG9kc1xufTtcbiIsIi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9lcnJvci1yZXF1ZXN0LmpzXG5hc3luYyBmdW5jdGlvbiBlcnJvclJlcXVlc3Qoc3RhdGUsIG9jdG9raXQsIGVycm9yLCBvcHRpb25zKSB7XG4gIGlmICghZXJyb3IucmVxdWVzdCB8fCAhZXJyb3IucmVxdWVzdC5yZXF1ZXN0KSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgaWYgKGVycm9yLnN0YXR1cyA+PSA0MDAgJiYgIXN0YXRlLmRvTm90UmV0cnkuaW5jbHVkZXMoZXJyb3Iuc3RhdHVzKSkge1xuICAgIGNvbnN0IHJldHJpZXMgPSBvcHRpb25zLnJlcXVlc3QucmV0cmllcyAhPSBudWxsID8gb3B0aW9ucy5yZXF1ZXN0LnJldHJpZXMgOiBzdGF0ZS5yZXRyaWVzO1xuICAgIGNvbnN0IHJldHJ5QWZ0ZXIgPSBNYXRoLnBvdygob3B0aW9ucy5yZXF1ZXN0LnJldHJ5Q291bnQgfHwgMCkgKyAxLCAyKTtcbiAgICB0aHJvdyBvY3Rva2l0LnJldHJ5LnJldHJ5UmVxdWVzdChlcnJvciwgcmV0cmllcywgcmV0cnlBZnRlcik7XG4gIH1cbiAgdGhyb3cgZXJyb3I7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy93cmFwLXJlcXVlc3QuanNcbmltcG9ydCBCb3R0bGVuZWNrIGZyb20gXCJib3R0bGVuZWNrL2xpZ2h0XCI7XG5pbXBvcnQgeyBSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdC1lcnJvclwiO1xuYXN5bmMgZnVuY3Rpb24gd3JhcFJlcXVlc3Qoc3RhdGUsIG9jdG9raXQsIHJlcXVlc3QsIG9wdGlvbnMpIHtcbiAgY29uc3QgbGltaXRlciA9IG5ldyBCb3R0bGVuZWNrKCk7XG4gIGxpbWl0ZXIub24oXCJmYWlsZWRcIiwgZnVuY3Rpb24oZXJyb3IsIGluZm8pIHtcbiAgICBjb25zdCBtYXhSZXRyaWVzID0gfn5lcnJvci5yZXF1ZXN0LnJlcXVlc3QucmV0cmllcztcbiAgICBjb25zdCBhZnRlciA9IH5+ZXJyb3IucmVxdWVzdC5yZXF1ZXN0LnJldHJ5QWZ0ZXI7XG4gICAgb3B0aW9ucy5yZXF1ZXN0LnJldHJ5Q291bnQgPSBpbmZvLnJldHJ5Q291bnQgKyAxO1xuICAgIGlmIChtYXhSZXRyaWVzID4gaW5mby5yZXRyeUNvdW50KSB7XG4gICAgICByZXR1cm4gYWZ0ZXIgKiBzdGF0ZS5yZXRyeUFmdGVyQmFzZVZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsaW1pdGVyLnNjaGVkdWxlKFxuICAgIHJlcXVlc3RXaXRoR3JhcGhxbEVycm9ySGFuZGxpbmcuYmluZChudWxsLCBzdGF0ZSwgb2N0b2tpdCwgcmVxdWVzdCksXG4gICAgb3B0aW9uc1xuICApO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdpdGhHcmFwaHFsRXJyb3JIYW5kbGluZyhzdGF0ZSwgb2N0b2tpdCwgcmVxdWVzdCwgb3B0aW9ucykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QocmVxdWVzdCwgb3B0aW9ucyk7XG4gIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZXJyb3JzICYmIC9Tb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBleGVjdXRpbmcgeW91ciBxdWVyeS8udGVzdChcbiAgICByZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlXG4gICkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBSZXF1ZXN0RXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZSwgNTAwLCB7XG4gICAgICByZXF1ZXN0OiBvcHRpb25zLFxuICAgICAgcmVzcG9uc2VcbiAgICB9KTtcbiAgICByZXR1cm4gZXJyb3JSZXF1ZXN0KHN0YXRlLCBvY3Rva2l0LCBlcnJvciwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBWRVJTSU9OID0gXCI2LjAuMFwiO1xuZnVuY3Rpb24gcmV0cnkob2N0b2tpdCwgb2N0b2tpdE9wdGlvbnMpIHtcbiAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICByZXRyeUFmdGVyQmFzZVZhbHVlOiAxZTMsXG4gICAgICBkb05vdFJldHJ5OiBbNDAwLCA0MDEsIDQwMywgNDA0LCA0MjIsIDQ1MV0sXG4gICAgICByZXRyaWVzOiAzXG4gICAgfSxcbiAgICBvY3Rva2l0T3B0aW9ucy5yZXRyeVxuICApO1xuICBpZiAoc3RhdGUuZW5hYmxlZCkge1xuICAgIG9jdG9raXQuaG9vay5lcnJvcihcInJlcXVlc3RcIiwgZXJyb3JSZXF1ZXN0LmJpbmQobnVsbCwgc3RhdGUsIG9jdG9raXQpKTtcbiAgICBvY3Rva2l0Lmhvb2sud3JhcChcInJlcXVlc3RcIiwgd3JhcFJlcXVlc3QuYmluZChudWxsLCBzdGF0ZSwgb2N0b2tpdCkpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmV0cnk6IHtcbiAgICAgIHJldHJ5UmVxdWVzdDogKGVycm9yLCByZXRyaWVzLCByZXRyeUFmdGVyKSA9PiB7XG4gICAgICAgIGVycm9yLnJlcXVlc3QucmVxdWVzdCA9IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLnJlcXVlc3QucmVxdWVzdCwge1xuICAgICAgICAgIHJldHJpZXMsXG4gICAgICAgICAgcmV0cnlBZnRlclxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbnJldHJ5LlZFUlNJT04gPSBWRVJTSU9OO1xuZXhwb3J0IHtcbiAgVkVSU0lPTixcbiAgcmV0cnlcbn07XG4iLCIvLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbmltcG9ydCBCb3R0bGVuZWNrTGlnaHQgZnJvbSBcImJvdHRsZW5lY2svbGlnaHRcIjtcbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjcuMC4wXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy93cmFwLXJlcXVlc3QuanNcbnZhciBub29wID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCk7XG5mdW5jdGlvbiB3cmFwUmVxdWVzdChzdGF0ZSwgcmVxdWVzdCwgb3B0aW9ucykge1xuICByZXR1cm4gc3RhdGUucmV0cnlMaW1pdGVyLnNjaGVkdWxlKGRvUmVxdWVzdCwgc3RhdGUsIHJlcXVlc3QsIG9wdGlvbnMpO1xufVxuYXN5bmMgZnVuY3Rpb24gZG9SZXF1ZXN0KHN0YXRlLCByZXF1ZXN0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGlzV3JpdGUgPSBvcHRpb25zLm1ldGhvZCAhPT0gXCJHRVRcIiAmJiBvcHRpb25zLm1ldGhvZCAhPT0gXCJIRUFEXCI7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IG5ldyBVUkwob3B0aW9ucy51cmwsIFwiaHR0cDovL2dpdGh1Yi50ZXN0XCIpO1xuICBjb25zdCBpc1NlYXJjaCA9IG9wdGlvbnMubWV0aG9kID09PSBcIkdFVFwiICYmIHBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvc2VhcmNoL1wiKTtcbiAgY29uc3QgaXNHcmFwaFFMID0gcGF0aG5hbWUuc3RhcnRzV2l0aChcIi9ncmFwaHFsXCIpO1xuICBjb25zdCByZXRyeUNvdW50ID0gfn5yZXF1ZXN0LnJldHJ5Q291bnQ7XG4gIGNvbnN0IGpvYk9wdGlvbnMgPSByZXRyeUNvdW50ID4gMCA/IHsgcHJpb3JpdHk6IDAsIHdlaWdodDogMCB9IDoge307XG4gIGlmIChzdGF0ZS5jbHVzdGVyaW5nKSB7XG4gICAgam9iT3B0aW9ucy5leHBpcmF0aW9uID0gMWUzICogNjA7XG4gIH1cbiAgaWYgKGlzV3JpdGUgfHwgaXNHcmFwaFFMKSB7XG4gICAgYXdhaXQgc3RhdGUud3JpdGUua2V5KHN0YXRlLmlkKS5zY2hlZHVsZShqb2JPcHRpb25zLCBub29wKTtcbiAgfVxuICBpZiAoaXNXcml0ZSAmJiBzdGF0ZS50cmlnZ2Vyc05vdGlmaWNhdGlvbihwYXRobmFtZSkpIHtcbiAgICBhd2FpdCBzdGF0ZS5ub3RpZmljYXRpb25zLmtleShzdGF0ZS5pZCkuc2NoZWR1bGUoam9iT3B0aW9ucywgbm9vcCk7XG4gIH1cbiAgaWYgKGlzU2VhcmNoKSB7XG4gICAgYXdhaXQgc3RhdGUuc2VhcmNoLmtleShzdGF0ZS5pZCkuc2NoZWR1bGUoam9iT3B0aW9ucywgbm9vcCk7XG4gIH1cbiAgY29uc3QgcmVxID0gc3RhdGUuZ2xvYmFsLmtleShzdGF0ZS5pZCkuc2NoZWR1bGUoam9iT3B0aW9ucywgcmVxdWVzdCwgb3B0aW9ucyk7XG4gIGlmIChpc0dyYXBoUUwpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXE7XG4gICAgaWYgKHJlcy5kYXRhLmVycm9ycyAhPSBudWxsICYmIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICByZXMuZGF0YS5lcnJvcnMuc29tZSgoZXJyb3IpID0+IGVycm9yLnR5cGUgPT09IFwiUkFURV9MSU1JVEVEXCIpKSB7XG4gICAgICBjb25zdCBlcnJvciA9IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKFwiR3JhcGhRTCBSYXRlIExpbWl0IEV4Y2VlZGVkXCIpLCB7XG4gICAgICAgIHJlc3BvbnNlOiByZXMsXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXG4gICAgICB9KTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVxO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZ2VuZXJhdGVkL3RyaWdnZXJzLW5vdGlmaWNhdGlvbi1wYXRocy5qc1xudmFyIHRyaWdnZXJzX25vdGlmaWNhdGlvbl9wYXRoc19kZWZhdWx0ID0gW1xuICBcIi9vcmdzL3tvcmd9L2ludml0YXRpb25zXCIsXG4gIFwiL29yZ3Mve29yZ30vaW52aXRhdGlvbnMve2ludml0YXRpb25faWR9XCIsXG4gIFwiL29yZ3Mve29yZ30vdGVhbXMve3RlYW1fc2x1Z30vZGlzY3Vzc2lvbnNcIixcbiAgXCIvb3Jncy97b3JnfS90ZWFtcy97dGVhbV9zbHVnfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbGxhYm9yYXRvcnMve3VzZXJuYW1lfVwiLFxuICBcIi9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb21taXRzL3tjb21taXRfc2hhfS9jb21tZW50c1wiLFxuICBcIi9yZXBvcy97b3duZXJ9L3tyZXBvfS9pc3N1ZXNcIixcbiAgXCIvcmVwb3Mve293bmVyfS97cmVwb30vaXNzdWVzL3tpc3N1ZV9udW1iZXJ9L2NvbW1lbnRzXCIsXG4gIFwiL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzXCIsXG4gIFwiL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vY29tbWVudHNcIixcbiAgXCIvcmVwb3Mve293bmVyfS97cmVwb30vcHVsbHMve3B1bGxfbnVtYmVyfS9jb21tZW50cy97Y29tbWVudF9pZH0vcmVwbGllc1wiLFxuICBcIi9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L21lcmdlXCIsXG4gIFwiL3JlcG9zL3tvd25lcn0ve3JlcG99L3B1bGxzL3twdWxsX251bWJlcn0vcmVxdWVzdGVkX3Jldmlld2Vyc1wiLFxuICBcIi9yZXBvcy97b3duZXJ9L3tyZXBvfS9wdWxscy97cHVsbF9udW1iZXJ9L3Jldmlld3NcIixcbiAgXCIvcmVwb3Mve293bmVyfS97cmVwb30vcmVsZWFzZXNcIixcbiAgXCIvdGVhbXMve3RlYW1faWR9L2Rpc2N1c3Npb25zXCIsXG4gIFwiL3RlYW1zL3t0ZWFtX2lkfS9kaXNjdXNzaW9ucy97ZGlzY3Vzc2lvbl9udW1iZXJ9L2NvbW1lbnRzXCJcbl07XG5cbi8vIHBrZy9kaXN0LXNyYy9yb3V0ZS1tYXRjaGVyLmpzXG5mdW5jdGlvbiByb3V0ZU1hdGNoZXIocGF0aHMpIHtcbiAgY29uc3QgcmVnZXhlcyA9IHBhdGhzLm1hcChcbiAgICAocGF0aCkgPT4gcGF0aC5zcGxpdChcIi9cIikubWFwKChjKSA9PiBjLnN0YXJ0c1dpdGgoXCJ7XCIpID8gXCIoPzouKz8pXCIgOiBjKS5qb2luKFwiL1wiKVxuICApO1xuICBjb25zdCByZWdleDIgPSBgXig/OiR7cmVnZXhlcy5tYXAoKHIpID0+IGAoPzoke3J9KWApLmpvaW4oXCJ8XCIpfSlbXi9dKiRgO1xuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleDIsIFwiaVwiKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG52YXIgcmVnZXggPSByb3V0ZU1hdGNoZXIodHJpZ2dlcnNfbm90aWZpY2F0aW9uX3BhdGhzX2RlZmF1bHQpO1xudmFyIHRyaWdnZXJzTm90aWZpY2F0aW9uID0gcmVnZXgudGVzdC5iaW5kKHJlZ2V4KTtcbnZhciBncm91cHMgPSB7fTtcbnZhciBjcmVhdGVHcm91cHMgPSBmdW5jdGlvbihCb3R0bGVuZWNrLCBjb21tb24pIHtcbiAgZ3JvdXBzLmdsb2JhbCA9IG5ldyBCb3R0bGVuZWNrLkdyb3VwKHtcbiAgICBpZDogXCJvY3Rva2l0LWdsb2JhbFwiLFxuICAgIG1heENvbmN1cnJlbnQ6IDEwLFxuICAgIC4uLmNvbW1vblxuICB9KTtcbiAgZ3JvdXBzLnNlYXJjaCA9IG5ldyBCb3R0bGVuZWNrLkdyb3VwKHtcbiAgICBpZDogXCJvY3Rva2l0LXNlYXJjaFwiLFxuICAgIG1heENvbmN1cnJlbnQ6IDEsXG4gICAgbWluVGltZTogMmUzLFxuICAgIC4uLmNvbW1vblxuICB9KTtcbiAgZ3JvdXBzLndyaXRlID0gbmV3IEJvdHRsZW5lY2suR3JvdXAoe1xuICAgIGlkOiBcIm9jdG9raXQtd3JpdGVcIixcbiAgICBtYXhDb25jdXJyZW50OiAxLFxuICAgIG1pblRpbWU6IDFlMyxcbiAgICAuLi5jb21tb25cbiAgfSk7XG4gIGdyb3Vwcy5ub3RpZmljYXRpb25zID0gbmV3IEJvdHRsZW5lY2suR3JvdXAoe1xuICAgIGlkOiBcIm9jdG9raXQtbm90aWZpY2F0aW9uc1wiLFxuICAgIG1heENvbmN1cnJlbnQ6IDEsXG4gICAgbWluVGltZTogM2UzLFxuICAgIC4uLmNvbW1vblxuICB9KTtcbn07XG5mdW5jdGlvbiB0aHJvdHRsaW5nKG9jdG9raXQsIG9jdG9raXRPcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBlbmFibGVkID0gdHJ1ZSxcbiAgICBCb3R0bGVuZWNrID0gQm90dGxlbmVja0xpZ2h0LFxuICAgIGlkID0gXCJuby1pZFwiLFxuICAgIHRpbWVvdXQgPSAxZTMgKiA2MCAqIDIsXG4gICAgLy8gUmVkaXMgVFRMOiAyIG1pbnV0ZXNcbiAgICBjb25uZWN0aW9uXG4gIH0gPSBvY3Rva2l0T3B0aW9ucy50aHJvdHRsZSB8fCB7fTtcbiAgaWYgKCFlbmFibGVkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IGNvbW1vbiA9IHsgY29ubmVjdGlvbiwgdGltZW91dCB9O1xuICBpZiAoZ3JvdXBzLmdsb2JhbCA9PSBudWxsKSB7XG4gICAgY3JlYXRlR3JvdXBzKEJvdHRsZW5lY2ssIGNvbW1vbik7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGNsdXN0ZXJpbmc6IGNvbm5lY3Rpb24gIT0gbnVsbCxcbiAgICAgIHRyaWdnZXJzTm90aWZpY2F0aW9uLFxuICAgICAgZmFsbGJhY2tTZWNvbmRhcnlSYXRlUmV0cnlBZnRlcjogNjAsXG4gICAgICByZXRyeUFmdGVyQmFzZVZhbHVlOiAxZTMsXG4gICAgICByZXRyeUxpbWl0ZXI6IG5ldyBCb3R0bGVuZWNrKCksXG4gICAgICBpZCxcbiAgICAgIC4uLmdyb3Vwc1xuICAgIH0sXG4gICAgb2N0b2tpdE9wdGlvbnMudGhyb3R0bGVcbiAgKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZS5vblNlY29uZGFyeVJhdGVMaW1pdCAhPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBzdGF0ZS5vblJhdGVMaW1pdCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBvY3Rva2l0L3BsdWdpbi10aHJvdHRsaW5nIGVycm9yOlxuICAgICAgICBZb3UgbXVzdCBwYXNzIHRoZSBvblNlY29uZGFyeVJhdGVMaW1pdCBhbmQgb25SYXRlTGltaXQgZXJyb3IgaGFuZGxlcnMuXG4gICAgICAgIFNlZSBodHRwczovL29jdG9raXQuZ2l0aHViLmlvL3Jlc3QuanMvI3Rocm90dGxpbmdcblxuICAgICAgICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICAgICAgICAgIHRocm90dGxlOiB7XG4gICAgICAgICAgICBvblNlY29uZGFyeVJhdGVMaW1pdDogKHJldHJ5QWZ0ZXIsIG9wdGlvbnMpID0+IHsvKiAuLi4gKi99LFxuICAgICAgICAgICAgb25SYXRlTGltaXQ6IChyZXRyeUFmdGVyLCBvcHRpb25zKSA9PiB7LyogLi4uICovfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBgKTtcbiAgfVxuICBjb25zdCBldmVudHMgPSB7fTtcbiAgY29uc3QgZW1pdHRlciA9IG5ldyBCb3R0bGVuZWNrLkV2ZW50cyhldmVudHMpO1xuICBldmVudHMub24oXCJzZWNvbmRhcnktbGltaXRcIiwgc3RhdGUub25TZWNvbmRhcnlSYXRlTGltaXQpO1xuICBldmVudHMub24oXCJyYXRlLWxpbWl0XCIsIHN0YXRlLm9uUmF0ZUxpbWl0KTtcbiAgZXZlbnRzLm9uKFxuICAgIFwiZXJyb3JcIixcbiAgICAoZSkgPT4gb2N0b2tpdC5sb2cud2FybihcIkVycm9yIGluIHRocm90dGxpbmctcGx1Z2luIGxpbWl0IGhhbmRsZXJcIiwgZSlcbiAgKTtcbiAgc3RhdGUucmV0cnlMaW1pdGVyLm9uKFwiZmFpbGVkXCIsIGFzeW5jIGZ1bmN0aW9uKGVycm9yLCBpbmZvKSB7XG4gICAgY29uc3QgW3N0YXRlMiwgcmVxdWVzdCwgb3B0aW9uc10gPSBpbmZvLmFyZ3M7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gbmV3IFVSTChvcHRpb25zLnVybCwgXCJodHRwOi8vZ2l0aHViLnRlc3RcIik7XG4gICAgY29uc3Qgc2hvdWxkUmV0cnlHcmFwaFFMID0gcGF0aG5hbWUuc3RhcnRzV2l0aChcIi9ncmFwaHFsXCIpICYmIGVycm9yLnN0YXR1cyAhPT0gNDAxO1xuICAgIGlmICghKHNob3VsZFJldHJ5R3JhcGhRTCB8fCBlcnJvci5zdGF0dXMgPT09IDQwMykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmV0cnlDb3VudCA9IH5+cmVxdWVzdC5yZXRyeUNvdW50O1xuICAgIHJlcXVlc3QucmV0cnlDb3VudCA9IHJldHJ5Q291bnQ7XG4gICAgb3B0aW9ucy5yZXF1ZXN0LnJldHJ5Q291bnQgPSByZXRyeUNvdW50O1xuICAgIGNvbnN0IHsgd2FudFJldHJ5LCByZXRyeUFmdGVyID0gMCB9ID0gYXdhaXQgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoL1xcYnNlY29uZGFyeSByYXRlXFxiL2kudGVzdChlcnJvci5tZXNzYWdlKSkge1xuICAgICAgICBjb25zdCByZXRyeUFmdGVyMiA9IE51bWJlcihlcnJvci5yZXNwb25zZS5oZWFkZXJzW1wicmV0cnktYWZ0ZXJcIl0pIHx8IHN0YXRlMi5mYWxsYmFja1NlY29uZGFyeVJhdGVSZXRyeUFmdGVyO1xuICAgICAgICBjb25zdCB3YW50UmV0cnkyID0gYXdhaXQgZW1pdHRlci50cmlnZ2VyKFxuICAgICAgICAgIFwic2Vjb25kYXJ5LWxpbWl0XCIsXG4gICAgICAgICAgcmV0cnlBZnRlcjIsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBvY3Rva2l0LFxuICAgICAgICAgIHJldHJ5Q291bnRcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgd2FudFJldHJ5OiB3YW50UmV0cnkyLCByZXRyeUFmdGVyOiByZXRyeUFmdGVyMiB9O1xuICAgICAgfVxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMgIT0gbnVsbCAmJiBlcnJvci5yZXNwb25zZS5oZWFkZXJzW1wieC1yYXRlbGltaXQtcmVtYWluaW5nXCJdID09PSBcIjBcIikge1xuICAgICAgICBjb25zdCByYXRlTGltaXRSZXNldCA9IG5ldyBEYXRlKFxuICAgICAgICAgIH5+ZXJyb3IucmVzcG9uc2UuaGVhZGVyc1tcIngtcmF0ZWxpbWl0LXJlc2V0XCJdICogMWUzXG4gICAgICAgICkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCByZXRyeUFmdGVyMiA9IE1hdGgubWF4KFxuICAgICAgICAgIE1hdGguY2VpbCgocmF0ZUxpbWl0UmVzZXQgLSBEYXRlLm5vdygpKSAvIDFlMyksXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB3YW50UmV0cnkyID0gYXdhaXQgZW1pdHRlci50cmlnZ2VyKFxuICAgICAgICAgIFwicmF0ZS1saW1pdFwiLFxuICAgICAgICAgIHJldHJ5QWZ0ZXIyLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgb2N0b2tpdCxcbiAgICAgICAgICByZXRyeUNvdW50XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IHdhbnRSZXRyeTogd2FudFJldHJ5MiwgcmV0cnlBZnRlcjogcmV0cnlBZnRlcjIgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7fTtcbiAgICB9KCk7XG4gICAgaWYgKHdhbnRSZXRyeSkge1xuICAgICAgcmVxdWVzdC5yZXRyeUNvdW50Kys7XG4gICAgICByZXR1cm4gcmV0cnlBZnRlciAqIHN0YXRlMi5yZXRyeUFmdGVyQmFzZVZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIG9jdG9raXQuaG9vay53cmFwKFwicmVxdWVzdFwiLCB3cmFwUmVxdWVzdC5iaW5kKG51bGwsIHN0YXRlKSk7XG4gIHJldHVybiB7fTtcbn1cbnRocm90dGxpbmcuVkVSU0lPTiA9IFZFUlNJT047XG50aHJvdHRsaW5nLnRyaWdnZXJzTm90aWZpY2F0aW9uID0gdHJpZ2dlcnNOb3RpZmljYXRpb247XG5leHBvcnQge1xuICB0aHJvdHRsaW5nXG59O1xuIiwiLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5pbXBvcnQgeyBEZXByZWNhdGlvbiB9IGZyb20gXCJkZXByZWNhdGlvblwiO1xuaW1wb3J0IG9uY2UgZnJvbSBcIm9uY2VcIjtcbnZhciBsb2dPbmNlQ29kZSA9IG9uY2UoKGRlcHJlY2F0aW9uKSA9PiBjb25zb2xlLndhcm4oZGVwcmVjYXRpb24pKTtcbnZhciBsb2dPbmNlSGVhZGVycyA9IG9uY2UoKGRlcHJlY2F0aW9uKSA9PiBjb25zb2xlLndhcm4oZGVwcmVjYXRpb24pKTtcbnZhciBSZXF1ZXN0RXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHRoaXMubmFtZSA9IFwiSHR0cEVycm9yXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNDb2RlO1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChcImhlYWRlcnNcIiBpbiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmhlYWRlcnMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gICAgfVxuICAgIGlmIChcInJlc3BvbnNlXCIgaW4gb3B0aW9ucykge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IG9wdGlvbnMucmVzcG9uc2U7XG4gICAgICBoZWFkZXJzID0gb3B0aW9ucy5yZXNwb25zZS5oZWFkZXJzO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0Q29weSA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMucmVxdWVzdCk7XG4gICAgaWYgKG9wdGlvbnMucmVxdWVzdC5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgIHJlcXVlc3RDb3B5LmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLnJlcXVlc3QuaGVhZGVycywge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBvcHRpb25zLnJlcXVlc3QuaGVhZGVycy5hdXRob3JpemF0aW9uLnJlcGxhY2UoXG4gICAgICAgICAgLyAuKiQvLFxuICAgICAgICAgIFwiIFtSRURBQ1RFRF1cIlxuICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWVzdENvcHkudXJsID0gcmVxdWVzdENvcHkudXJsLnJlcGxhY2UoL1xcYmNsaWVudF9zZWNyZXQ9XFx3Ky9nLCBcImNsaWVudF9zZWNyZXQ9W1JFREFDVEVEXVwiKS5yZXBsYWNlKC9cXGJhY2Nlc3NfdG9rZW49XFx3Ky9nLCBcImFjY2Vzc190b2tlbj1bUkVEQUNURURdXCIpO1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3RDb3B5O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvZGVcIiwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsb2dPbmNlQ29kZShcbiAgICAgICAgICBuZXcgRGVwcmVjYXRpb24oXG4gICAgICAgICAgICBcIltAb2N0b2tpdC9yZXF1ZXN0LWVycm9yXSBgZXJyb3IuY29kZWAgaXMgZGVwcmVjYXRlZCwgdXNlIGBlcnJvci5zdGF0dXNgLlwiXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc3RhdHVzQ29kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJoZWFkZXJzXCIsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgbG9nT25jZUhlYWRlcnMoXG4gICAgICAgICAgbmV3IERlcHJlY2F0aW9uKFxuICAgICAgICAgICAgXCJbQG9jdG9raXQvcmVxdWVzdC1lcnJvcl0gYGVycm9yLmhlYWRlcnNgIGlzIGRlcHJlY2F0ZWQsIHVzZSBgZXJyb3IucmVzcG9uc2UuaGVhZGVyc2AuXCJcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzIHx8IHt9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgUmVxdWVzdEVycm9yXG59O1xuIiwiLy8gcGtnL2Rpc3Qtc3JjL2luZGV4LmpzXG5pbXBvcnQgeyBlbmRwb2ludCB9IGZyb20gXCJAb2N0b2tpdC9lbmRwb2ludFwiO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSBcInVuaXZlcnNhbC11c2VyLWFnZW50XCI7XG5cbi8vIHBrZy9kaXN0LXNyYy92ZXJzaW9uLmpzXG52YXIgVkVSU0lPTiA9IFwiOC4xLjFcIjtcblxuLy8gcGtnL2Rpc3Qtc3JjL2ZldGNoLXdyYXBwZXIuanNcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tIFwiaXMtcGxhaW4tb2JqZWN0XCI7XG5pbXBvcnQgeyBSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdC1lcnJvclwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ2V0LWJ1ZmZlci1yZXNwb25zZS5qc1xuZnVuY3Rpb24gZ2V0QnVmZmVyUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9mZXRjaC13cmFwcGVyLmpzXG5mdW5jdGlvbiBmZXRjaFdyYXBwZXIocmVxdWVzdE9wdGlvbnMpIHtcbiAgY29uc3QgbG9nID0gcmVxdWVzdE9wdGlvbnMucmVxdWVzdCAmJiByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0LmxvZyA/IHJlcXVlc3RPcHRpb25zLnJlcXVlc3QubG9nIDogY29uc29sZTtcbiAgY29uc3QgcGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ID0gcmVxdWVzdE9wdGlvbnMucmVxdWVzdD8ucGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ICE9PSBmYWxzZTtcbiAgaWYgKGlzUGxhaW5PYmplY3QocmVxdWVzdE9wdGlvbnMuYm9keSkgfHwgQXJyYXkuaXNBcnJheShyZXF1ZXN0T3B0aW9ucy5ib2R5KSkge1xuICAgIHJlcXVlc3RPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShyZXF1ZXN0T3B0aW9ucy5ib2R5KTtcbiAgfVxuICBsZXQgaGVhZGVycyA9IHt9O1xuICBsZXQgc3RhdHVzO1xuICBsZXQgdXJsO1xuICBsZXQgeyBmZXRjaCB9ID0gZ2xvYmFsVGhpcztcbiAgaWYgKHJlcXVlc3RPcHRpb25zLnJlcXVlc3Q/LmZldGNoKSB7XG4gICAgZmV0Y2ggPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0LmZldGNoO1xuICB9XG4gIGlmICghZmV0Y2gpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcImZldGNoIGlzIG5vdCBzZXQuIFBsZWFzZSBwYXNzIGEgZmV0Y2ggaW1wbGVtZW50YXRpb24gYXMgbmV3IE9jdG9raXQoeyByZXF1ZXN0OiB7IGZldGNoIH19KS4gTGVhcm4gbW9yZSBhdCBodHRwczovL2dpdGh1Yi5jb20vb2N0b2tpdC9vY3Rva2l0LmpzLyNmZXRjaC1taXNzaW5nXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBmZXRjaChyZXF1ZXN0T3B0aW9ucy51cmwsIHtcbiAgICBtZXRob2Q6IHJlcXVlc3RPcHRpb25zLm1ldGhvZCxcbiAgICBib2R5OiByZXF1ZXN0T3B0aW9ucy5ib2R5LFxuICAgIGhlYWRlcnM6IHJlcXVlc3RPcHRpb25zLmhlYWRlcnMsXG4gICAgc2lnbmFsOiByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0Py5zaWduYWwsXG4gICAgLy8gZHVwbGV4IG11c3QgYmUgc2V0IGlmIHJlcXVlc3QuYm9keSBpcyBSZWFkYWJsZVN0cmVhbSBvciBBc3luYyBJdGVyYWJsZXMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdGluaXQtZHVwbGV4LlxuICAgIC4uLnJlcXVlc3RPcHRpb25zLmJvZHkgJiYgeyBkdXBsZXg6IFwiaGFsZlwiIH1cbiAgfSkudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICB1cmwgPSByZXNwb25zZS51cmw7XG4gICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgIGZvciAoY29uc3Qga2V5QW5kVmFsdWUgb2YgcmVzcG9uc2UuaGVhZGVycykge1xuICAgICAgaGVhZGVyc1trZXlBbmRWYWx1ZVswXV0gPSBrZXlBbmRWYWx1ZVsxXTtcbiAgICB9XG4gICAgaWYgKFwiZGVwcmVjYXRpb25cIiBpbiBoZWFkZXJzKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gaGVhZGVycy5saW5rICYmIGhlYWRlcnMubGluay5tYXRjaCgvPChbXj5dKyk+OyByZWw9XCJkZXByZWNhdGlvblwiLyk7XG4gICAgICBjb25zdCBkZXByZWNhdGlvbkxpbmsgPSBtYXRjaGVzICYmIG1hdGNoZXMucG9wKCk7XG4gICAgICBsb2cud2FybihcbiAgICAgICAgYFtAb2N0b2tpdC9yZXF1ZXN0XSBcIiR7cmVxdWVzdE9wdGlvbnMubWV0aG9kfSAke3JlcXVlc3RPcHRpb25zLnVybH1cIiBpcyBkZXByZWNhdGVkLiBJdCBpcyBzY2hlZHVsZWQgdG8gYmUgcmVtb3ZlZCBvbiAke2hlYWRlcnMuc3Vuc2V0fSR7ZGVwcmVjYXRpb25MaW5rID8gYC4gU2VlICR7ZGVwcmVjYXRpb25MaW5rfWAgOiBcIlwifWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IDIwNCB8fCBzdGF0dXMgPT09IDIwNSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVxdWVzdE9wdGlvbnMubWV0aG9kID09PSBcIkhFQURcIikge1xuICAgICAgaWYgKHN0YXR1cyA8IDQwMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQsIHN0YXR1cywge1xuICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICBkYXRhOiB2b2lkIDBcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSAzMDQpIHtcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoXCJOb3QgbW9kaWZpZWRcIiwgc3RhdHVzLCB7XG4gICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgIGRhdGE6IGF3YWl0IGdldFJlc3BvbnNlRGF0YShyZXNwb25zZSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID49IDQwMCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFJlc3BvbnNlRGF0YShyZXNwb25zZSk7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBSZXF1ZXN0RXJyb3IodG9FcnJvck1lc3NhZ2UoZGF0YSksIHN0YXR1cywge1xuICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICBkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RPcHRpb25zXG4gICAgICB9KTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VTdWNjZXNzUmVzcG9uc2VCb2R5ID8gYXdhaXQgZ2V0UmVzcG9uc2VEYXRhKHJlc3BvbnNlKSA6IHJlc3BvbnNlLmJvZHk7XG4gIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzLFxuICAgICAgdXJsLFxuICAgICAgaGVhZGVycyxcbiAgICAgIGRhdGFcbiAgICB9O1xuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXF1ZXN0RXJyb3IpXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSBcIkFib3J0RXJyb3JcIilcbiAgICAgIHRocm93IGVycm9yO1xuICAgIHRocm93IG5ldyBSZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSwgNTAwLCB7XG4gICAgICByZXF1ZXN0OiByZXF1ZXN0T3B0aW9uc1xuICAgIH0pO1xuICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YShyZXNwb25zZSkge1xuICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICBpZiAoL2FwcGxpY2F0aW9uXFwvanNvbi8udGVzdChjb250ZW50VHlwZSkpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG4gIGlmICghY29udGVudFR5cGUgfHwgL150ZXh0XFwvfGNoYXJzZXQ9dXRmLTgkLy50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gIH1cbiAgcmV0dXJuIGdldEJ1ZmZlclJlc3BvbnNlKHJlc3BvbnNlKTtcbn1cbmZ1bmN0aW9uIHRvRXJyb3JNZXNzYWdlKGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKVxuICAgIHJldHVybiBkYXRhO1xuICBpZiAoXCJtZXNzYWdlXCIgaW4gZGF0YSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZXJyb3JzKSkge1xuICAgICAgcmV0dXJuIGAke2RhdGEubWVzc2FnZX06ICR7ZGF0YS5lcnJvcnMubWFwKEpTT04uc3RyaW5naWZ5KS5qb2luKFwiLCBcIil9YDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEubWVzc2FnZTtcbiAgfVxuICByZXR1cm4gYFVua25vd24gZXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YDtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL3dpdGgtZGVmYXVsdHMuanNcbmZ1bmN0aW9uIHdpdGhEZWZhdWx0cyhvbGRFbmRwb2ludCwgbmV3RGVmYXVsdHMpIHtcbiAgY29uc3QgZW5kcG9pbnQyID0gb2xkRW5kcG9pbnQuZGVmYXVsdHMobmV3RGVmYXVsdHMpO1xuICBjb25zdCBuZXdBcGkgPSBmdW5jdGlvbihyb3V0ZSwgcGFyYW1ldGVycykge1xuICAgIGNvbnN0IGVuZHBvaW50T3B0aW9ucyA9IGVuZHBvaW50Mi5tZXJnZShyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgaWYgKCFlbmRwb2ludE9wdGlvbnMucmVxdWVzdCB8fCAhZW5kcG9pbnRPcHRpb25zLnJlcXVlc3QuaG9vaykge1xuICAgICAgcmV0dXJuIGZldGNoV3JhcHBlcihlbmRwb2ludDIucGFyc2UoZW5kcG9pbnRPcHRpb25zKSk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3QyID0gKHJvdXRlMiwgcGFyYW1ldGVyczIpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaFdyYXBwZXIoXG4gICAgICAgIGVuZHBvaW50Mi5wYXJzZShlbmRwb2ludDIubWVyZ2Uocm91dGUyLCBwYXJhbWV0ZXJzMikpXG4gICAgICApO1xuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihyZXF1ZXN0Miwge1xuICAgICAgZW5kcG9pbnQ6IGVuZHBvaW50MixcbiAgICAgIGRlZmF1bHRzOiB3aXRoRGVmYXVsdHMuYmluZChudWxsLCBlbmRwb2ludDIpXG4gICAgfSk7XG4gICAgcmV0dXJuIGVuZHBvaW50T3B0aW9ucy5yZXF1ZXN0Lmhvb2socmVxdWVzdDIsIGVuZHBvaW50T3B0aW9ucyk7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0FwaSwge1xuICAgIGVuZHBvaW50OiBlbmRwb2ludDIsXG4gICAgZGVmYXVsdHM6IHdpdGhEZWZhdWx0cy5iaW5kKG51bGwsIGVuZHBvaW50MilcbiAgfSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xudmFyIHJlcXVlc3QgPSB3aXRoRGVmYXVsdHMoZW5kcG9pbnQsIHtcbiAgaGVhZGVyczoge1xuICAgIFwidXNlci1hZ2VudFwiOiBgb2N0b2tpdC1yZXF1ZXN0LmpzLyR7VkVSU0lPTn0gJHtnZXRVc2VyQWdlbnQoKX1gXG4gIH1cbn0pO1xuZXhwb3J0IHtcbiAgcmVxdWVzdFxufTtcbiIsIi8vIHBrZy9kaXN0LXNyYy90eXBlcy5qc1xudmFyIEFsZ29yaXRobSA9IC8qIEBfX1BVUkVfXyAqLyAoKEFsZ29yaXRobTIpID0+IHtcbiAgQWxnb3JpdGhtMltcIlNIQTFcIl0gPSBcInNoYTFcIjtcbiAgQWxnb3JpdGhtMltcIlNIQTI1NlwiXSA9IFwic2hhMjU2XCI7XG4gIHJldHVybiBBbGdvcml0aG0yO1xufSkoQWxnb3JpdGhtIHx8IHt9KTtcblxuLy8gcGtnL2Rpc3Qtc3JjL3V0aWxzLmpzXG52YXIgZ2V0QWxnb3JpdGhtID0gKHNpZ25hdHVyZSkgPT4ge1xuICByZXR1cm4gc2lnbmF0dXJlLnN0YXJ0c1dpdGgoXCJzaGEyNTY9XCIpID8gXCJzaGEyNTZcIiA6IFwic2hhMVwiO1xufTtcblxuLy8gcGtnL2Rpc3Qtc3JjL3dlYi5qc1xudmFyIGVuYyA9IG5ldyBUZXh0RW5jb2RlcigpO1xuZnVuY3Rpb24gaGV4VG9VSW50OEFycmF5KHN0cmluZykge1xuICBjb25zdCBwYWlycyA9IHN0cmluZy5tYXRjaCgvW1xcZEEtRl17Mn0vZ2kpO1xuICBjb25zdCBpbnRlZ2VycyA9IHBhaXJzLm1hcChmdW5jdGlvbihzKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHMsIDE2KTtcbiAgfSk7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShpbnRlZ2Vycyk7XG59XG5mdW5jdGlvbiBVSW50OEFycmF5VG9IZXgoc2lnbmF0dXJlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobmV3IFVpbnQ4QXJyYXkoc2lnbmF0dXJlKSwgKHgpID0+IHgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSkuam9pbihcIlwiKTtcbn1cbmZ1bmN0aW9uIGdldEhNQUNIYXNoTmFtZShhbGdvcml0aG0pIHtcbiAgcmV0dXJuIHtcbiAgICBbQWxnb3JpdGhtLlNIQTFdOiBcIlNIQS0xXCIsXG4gICAgW0FsZ29yaXRobS5TSEEyNTZdOiBcIlNIQS0yNTZcIlxuICB9W2FsZ29yaXRobV07XG59XG5hc3luYyBmdW5jdGlvbiBpbXBvcnRLZXkoc2VjcmV0LCBhbGdvcml0aG0pIHtcbiAgcmV0dXJuIGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFxuICAgIFwicmF3XCIsXG4gICAgLy8gcmF3IGZvcm1hdCBvZiB0aGUga2V5IC0gc2hvdWxkIGJlIFVpbnQ4QXJyYXlcbiAgICBlbmMuZW5jb2RlKHNlY3JldCksXG4gICAge1xuICAgICAgLy8gYWxnb3JpdGhtIGRldGFpbHNcbiAgICAgIG5hbWU6IFwiSE1BQ1wiLFxuICAgICAgaGFzaDogeyBuYW1lOiBnZXRITUFDSGFzaE5hbWUoYWxnb3JpdGhtKSB9XG4gICAgfSxcbiAgICBmYWxzZSxcbiAgICAvLyBleHBvcnQgPSBmYWxzZVxuICAgIFtcInNpZ25cIiwgXCJ2ZXJpZnlcIl1cbiAgICAvLyB3aGF0IHRoaXMga2V5IGNhbiBkb1xuICApO1xufVxuYXN5bmMgZnVuY3Rpb24gc2lnbihvcHRpb25zLCBwYXlsb2FkKSB7XG4gIGNvbnN0IHsgc2VjcmV0LCBhbGdvcml0aG0gfSA9IHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiID8ge1xuICAgIHNlY3JldDogb3B0aW9ucy5zZWNyZXQsXG4gICAgYWxnb3JpdGhtOiBvcHRpb25zLmFsZ29yaXRobSB8fCBBbGdvcml0aG0uU0hBMjU2XG4gIH0gOiB7IHNlY3JldDogb3B0aW9ucywgYWxnb3JpdGhtOiBBbGdvcml0aG0uU0hBMjU2IH07XG4gIGlmICghc2VjcmV0IHx8ICFwYXlsb2FkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIFwiW0BvY3Rva2l0L3dlYmhvb2tzLW1ldGhvZHNdIHNlY3JldCAmIHBheWxvYWQgcmVxdWlyZWQgZm9yIHNpZ24oKVwiXG4gICAgKTtcbiAgfVxuICBpZiAoIU9iamVjdC52YWx1ZXMoQWxnb3JpdGhtKS5pbmNsdWRlcyhhbGdvcml0aG0pKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIGBbQG9jdG9raXQvd2ViaG9va3NdIEFsZ29yaXRobSAke2FsZ29yaXRobX0gaXMgbm90IHN1cHBvcnRlZC4gTXVzdCBiZSAgJ3NoYTEnIG9yICdzaGEyNTYnYFxuICAgICk7XG4gIH1cbiAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5zaWduKFxuICAgIFwiSE1BQ1wiLFxuICAgIGF3YWl0IGltcG9ydEtleShzZWNyZXQsIGFsZ29yaXRobSksXG4gICAgZW5jLmVuY29kZShwYXlsb2FkKVxuICApO1xuICByZXR1cm4gYCR7YWxnb3JpdGhtfT0ke1VJbnQ4QXJyYXlUb0hleChzaWduYXR1cmUpfWA7XG59XG5hc3luYyBmdW5jdGlvbiB2ZXJpZnkoc2VjcmV0LCBldmVudFBheWxvYWQsIHNpZ25hdHVyZSkge1xuICBpZiAoIXNlY3JldCB8fCAhZXZlbnRQYXlsb2FkIHx8ICFzaWduYXR1cmUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgXCJbQG9jdG9raXQvd2ViaG9va3MtbWV0aG9kc10gc2VjcmV0LCBldmVudFBheWxvYWQgJiBzaWduYXR1cmUgcmVxdWlyZWRcIlxuICAgICk7XG4gIH1cbiAgY29uc3QgYWxnb3JpdGhtID0gZ2V0QWxnb3JpdGhtKHNpZ25hdHVyZSk7XG4gIHJldHVybiBhd2FpdCBjcnlwdG8uc3VidGxlLnZlcmlmeShcbiAgICBcIkhNQUNcIixcbiAgICBhd2FpdCBpbXBvcnRLZXkoc2VjcmV0LCBhbGdvcml0aG0pLFxuICAgIGhleFRvVUludDhBcnJheShzaWduYXR1cmUucmVwbGFjZShgJHthbGdvcml0aG19PWAsIFwiXCIpKSxcbiAgICBlbmMuZW5jb2RlKGV2ZW50UGF5bG9hZClcbiAgKTtcbn1cbmV4cG9ydCB7XG4gIHNpZ24sXG4gIHZlcmlmeVxufTtcbiIsIi8vIHBrZy9kaXN0LXNyYy9jcmVhdGVMb2dnZXIuanNcbnZhciBjcmVhdGVMb2dnZXIgPSAobG9nZ2VyKSA9PiAoe1xuICBkZWJ1ZzogKCkgPT4ge1xuICB9LFxuICBpbmZvOiAoKSA9PiB7XG4gIH0sXG4gIHdhcm46IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpLFxuICBlcnJvcjogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpLFxuICAuLi5sb2dnZXJcbn0pO1xuXG4vLyBwa2cvZGlzdC1zcmMvZ2VuZXJhdGVkL3dlYmhvb2stbmFtZXMuanNcbnZhciBlbWl0dGVyRXZlbnROYW1lcyA9IFtcbiAgXCJicmFuY2hfcHJvdGVjdGlvbl9ydWxlXCIsXG4gIFwiYnJhbmNoX3Byb3RlY3Rpb25fcnVsZS5jcmVhdGVkXCIsXG4gIFwiYnJhbmNoX3Byb3RlY3Rpb25fcnVsZS5kZWxldGVkXCIsXG4gIFwiYnJhbmNoX3Byb3RlY3Rpb25fcnVsZS5lZGl0ZWRcIixcbiAgXCJjaGVja19ydW5cIixcbiAgXCJjaGVja19ydW4uY29tcGxldGVkXCIsXG4gIFwiY2hlY2tfcnVuLmNyZWF0ZWRcIixcbiAgXCJjaGVja19ydW4ucmVxdWVzdGVkX2FjdGlvblwiLFxuICBcImNoZWNrX3J1bi5yZXJlcXVlc3RlZFwiLFxuICBcImNoZWNrX3N1aXRlXCIsXG4gIFwiY2hlY2tfc3VpdGUuY29tcGxldGVkXCIsXG4gIFwiY2hlY2tfc3VpdGUucmVxdWVzdGVkXCIsXG4gIFwiY2hlY2tfc3VpdGUucmVyZXF1ZXN0ZWRcIixcbiAgXCJjb2RlX3NjYW5uaW5nX2FsZXJ0XCIsXG4gIFwiY29kZV9zY2FubmluZ19hbGVydC5hcHBlYXJlZF9pbl9icmFuY2hcIixcbiAgXCJjb2RlX3NjYW5uaW5nX2FsZXJ0LmNsb3NlZF9ieV91c2VyXCIsXG4gIFwiY29kZV9zY2FubmluZ19hbGVydC5jcmVhdGVkXCIsXG4gIFwiY29kZV9zY2FubmluZ19hbGVydC5maXhlZFwiLFxuICBcImNvZGVfc2Nhbm5pbmdfYWxlcnQucmVvcGVuZWRcIixcbiAgXCJjb2RlX3NjYW5uaW5nX2FsZXJ0LnJlb3BlbmVkX2J5X3VzZXJcIixcbiAgXCJjb21taXRfY29tbWVudFwiLFxuICBcImNvbW1pdF9jb21tZW50LmNyZWF0ZWRcIixcbiAgXCJjcmVhdGVcIixcbiAgXCJkZWxldGVcIixcbiAgXCJkZXBlbmRhYm90X2FsZXJ0XCIsXG4gIFwiZGVwZW5kYWJvdF9hbGVydC5jcmVhdGVkXCIsXG4gIFwiZGVwZW5kYWJvdF9hbGVydC5kaXNtaXNzZWRcIixcbiAgXCJkZXBlbmRhYm90X2FsZXJ0LmZpeGVkXCIsXG4gIFwiZGVwZW5kYWJvdF9hbGVydC5yZWludHJvZHVjZWRcIixcbiAgXCJkZXBlbmRhYm90X2FsZXJ0LnJlb3BlbmVkXCIsXG4gIFwiZGVwbG95X2tleVwiLFxuICBcImRlcGxveV9rZXkuY3JlYXRlZFwiLFxuICBcImRlcGxveV9rZXkuZGVsZXRlZFwiLFxuICBcImRlcGxveW1lbnRcIixcbiAgXCJkZXBsb3ltZW50LmNyZWF0ZWRcIixcbiAgXCJkZXBsb3ltZW50X3Byb3RlY3Rpb25fcnVsZVwiLFxuICBcImRlcGxveW1lbnRfcHJvdGVjdGlvbl9ydWxlLnJlcXVlc3RlZFwiLFxuICBcImRlcGxveW1lbnRfc3RhdHVzXCIsXG4gIFwiZGVwbG95bWVudF9zdGF0dXMuY3JlYXRlZFwiLFxuICBcImRpc2N1c3Npb25cIixcbiAgXCJkaXNjdXNzaW9uLmFuc3dlcmVkXCIsXG4gIFwiZGlzY3Vzc2lvbi5jYXRlZ29yeV9jaGFuZ2VkXCIsXG4gIFwiZGlzY3Vzc2lvbi5jcmVhdGVkXCIsXG4gIFwiZGlzY3Vzc2lvbi5kZWxldGVkXCIsXG4gIFwiZGlzY3Vzc2lvbi5lZGl0ZWRcIixcbiAgXCJkaXNjdXNzaW9uLmxhYmVsZWRcIixcbiAgXCJkaXNjdXNzaW9uLmxvY2tlZFwiLFxuICBcImRpc2N1c3Npb24ucGlubmVkXCIsXG4gIFwiZGlzY3Vzc2lvbi50cmFuc2ZlcnJlZFwiLFxuICBcImRpc2N1c3Npb24udW5hbnN3ZXJlZFwiLFxuICBcImRpc2N1c3Npb24udW5sYWJlbGVkXCIsXG4gIFwiZGlzY3Vzc2lvbi51bmxvY2tlZFwiLFxuICBcImRpc2N1c3Npb24udW5waW5uZWRcIixcbiAgXCJkaXNjdXNzaW9uX2NvbW1lbnRcIixcbiAgXCJkaXNjdXNzaW9uX2NvbW1lbnQuY3JlYXRlZFwiLFxuICBcImRpc2N1c3Npb25fY29tbWVudC5kZWxldGVkXCIsXG4gIFwiZGlzY3Vzc2lvbl9jb21tZW50LmVkaXRlZFwiLFxuICBcImZvcmtcIixcbiAgXCJnaXRodWJfYXBwX2F1dGhvcml6YXRpb25cIixcbiAgXCJnaXRodWJfYXBwX2F1dGhvcml6YXRpb24ucmV2b2tlZFwiLFxuICBcImdvbGx1bVwiLFxuICBcImluc3RhbGxhdGlvblwiLFxuICBcImluc3RhbGxhdGlvbi5jcmVhdGVkXCIsXG4gIFwiaW5zdGFsbGF0aW9uLmRlbGV0ZWRcIixcbiAgXCJpbnN0YWxsYXRpb24ubmV3X3Blcm1pc3Npb25zX2FjY2VwdGVkXCIsXG4gIFwiaW5zdGFsbGF0aW9uLnN1c3BlbmRcIixcbiAgXCJpbnN0YWxsYXRpb24udW5zdXNwZW5kXCIsXG4gIFwiaW5zdGFsbGF0aW9uX3JlcG9zaXRvcmllc1wiLFxuICBcImluc3RhbGxhdGlvbl9yZXBvc2l0b3JpZXMuYWRkZWRcIixcbiAgXCJpbnN0YWxsYXRpb25fcmVwb3NpdG9yaWVzLnJlbW92ZWRcIixcbiAgXCJpbnN0YWxsYXRpb25fdGFyZ2V0XCIsXG4gIFwiaW5zdGFsbGF0aW9uX3RhcmdldC5yZW5hbWVkXCIsXG4gIFwiaXNzdWVfY29tbWVudFwiLFxuICBcImlzc3VlX2NvbW1lbnQuY3JlYXRlZFwiLFxuICBcImlzc3VlX2NvbW1lbnQuZGVsZXRlZFwiLFxuICBcImlzc3VlX2NvbW1lbnQuZWRpdGVkXCIsXG4gIFwiaXNzdWVzXCIsXG4gIFwiaXNzdWVzLmFzc2lnbmVkXCIsXG4gIFwiaXNzdWVzLmNsb3NlZFwiLFxuICBcImlzc3Vlcy5kZWxldGVkXCIsXG4gIFwiaXNzdWVzLmRlbWlsZXN0b25lZFwiLFxuICBcImlzc3Vlcy5lZGl0ZWRcIixcbiAgXCJpc3N1ZXMubGFiZWxlZFwiLFxuICBcImlzc3Vlcy5sb2NrZWRcIixcbiAgXCJpc3N1ZXMubWlsZXN0b25lZFwiLFxuICBcImlzc3Vlcy5vcGVuZWRcIixcbiAgXCJpc3N1ZXMucGlubmVkXCIsXG4gIFwiaXNzdWVzLnJlb3BlbmVkXCIsXG4gIFwiaXNzdWVzLnRyYW5zZmVycmVkXCIsXG4gIFwiaXNzdWVzLnVuYXNzaWduZWRcIixcbiAgXCJpc3N1ZXMudW5sYWJlbGVkXCIsXG4gIFwiaXNzdWVzLnVubG9ja2VkXCIsXG4gIFwiaXNzdWVzLnVucGlubmVkXCIsXG4gIFwibGFiZWxcIixcbiAgXCJsYWJlbC5jcmVhdGVkXCIsXG4gIFwibGFiZWwuZGVsZXRlZFwiLFxuICBcImxhYmVsLmVkaXRlZFwiLFxuICBcIm1hcmtldHBsYWNlX3B1cmNoYXNlXCIsXG4gIFwibWFya2V0cGxhY2VfcHVyY2hhc2UuY2FuY2VsbGVkXCIsXG4gIFwibWFya2V0cGxhY2VfcHVyY2hhc2UuY2hhbmdlZFwiLFxuICBcIm1hcmtldHBsYWNlX3B1cmNoYXNlLnBlbmRpbmdfY2hhbmdlXCIsXG4gIFwibWFya2V0cGxhY2VfcHVyY2hhc2UucGVuZGluZ19jaGFuZ2VfY2FuY2VsbGVkXCIsXG4gIFwibWFya2V0cGxhY2VfcHVyY2hhc2UucHVyY2hhc2VkXCIsXG4gIFwibWVtYmVyXCIsXG4gIFwibWVtYmVyLmFkZGVkXCIsXG4gIFwibWVtYmVyLmVkaXRlZFwiLFxuICBcIm1lbWJlci5yZW1vdmVkXCIsXG4gIFwibWVtYmVyc2hpcFwiLFxuICBcIm1lbWJlcnNoaXAuYWRkZWRcIixcbiAgXCJtZW1iZXJzaGlwLnJlbW92ZWRcIixcbiAgXCJtZXJnZV9ncm91cFwiLFxuICBcIm1lcmdlX2dyb3VwLmNoZWNrc19yZXF1ZXN0ZWRcIixcbiAgXCJtZXRhXCIsXG4gIFwibWV0YS5kZWxldGVkXCIsXG4gIFwibWlsZXN0b25lXCIsXG4gIFwibWlsZXN0b25lLmNsb3NlZFwiLFxuICBcIm1pbGVzdG9uZS5jcmVhdGVkXCIsXG4gIFwibWlsZXN0b25lLmRlbGV0ZWRcIixcbiAgXCJtaWxlc3RvbmUuZWRpdGVkXCIsXG4gIFwibWlsZXN0b25lLm9wZW5lZFwiLFxuICBcIm9yZ19ibG9ja1wiLFxuICBcIm9yZ19ibG9jay5ibG9ja2VkXCIsXG4gIFwib3JnX2Jsb2NrLnVuYmxvY2tlZFwiLFxuICBcIm9yZ2FuaXphdGlvblwiLFxuICBcIm9yZ2FuaXphdGlvbi5kZWxldGVkXCIsXG4gIFwib3JnYW5pemF0aW9uLm1lbWJlcl9hZGRlZFwiLFxuICBcIm9yZ2FuaXphdGlvbi5tZW1iZXJfaW52aXRlZFwiLFxuICBcIm9yZ2FuaXphdGlvbi5tZW1iZXJfcmVtb3ZlZFwiLFxuICBcIm9yZ2FuaXphdGlvbi5yZW5hbWVkXCIsXG4gIFwicGFja2FnZVwiLFxuICBcInBhY2thZ2UucHVibGlzaGVkXCIsXG4gIFwicGFja2FnZS51cGRhdGVkXCIsXG4gIFwicGFnZV9idWlsZFwiLFxuICBcInBpbmdcIixcbiAgXCJwcm9qZWN0XCIsXG4gIFwicHJvamVjdC5jbG9zZWRcIixcbiAgXCJwcm9qZWN0LmNyZWF0ZWRcIixcbiAgXCJwcm9qZWN0LmRlbGV0ZWRcIixcbiAgXCJwcm9qZWN0LmVkaXRlZFwiLFxuICBcInByb2plY3QucmVvcGVuZWRcIixcbiAgXCJwcm9qZWN0X2NhcmRcIixcbiAgXCJwcm9qZWN0X2NhcmQuY29udmVydGVkXCIsXG4gIFwicHJvamVjdF9jYXJkLmNyZWF0ZWRcIixcbiAgXCJwcm9qZWN0X2NhcmQuZGVsZXRlZFwiLFxuICBcInByb2plY3RfY2FyZC5lZGl0ZWRcIixcbiAgXCJwcm9qZWN0X2NhcmQubW92ZWRcIixcbiAgXCJwcm9qZWN0X2NvbHVtblwiLFxuICBcInByb2plY3RfY29sdW1uLmNyZWF0ZWRcIixcbiAgXCJwcm9qZWN0X2NvbHVtbi5kZWxldGVkXCIsXG4gIFwicHJvamVjdF9jb2x1bW4uZWRpdGVkXCIsXG4gIFwicHJvamVjdF9jb2x1bW4ubW92ZWRcIixcbiAgXCJwcm9qZWN0c192Ml9pdGVtXCIsXG4gIFwicHJvamVjdHNfdjJfaXRlbS5hcmNoaXZlZFwiLFxuICBcInByb2plY3RzX3YyX2l0ZW0uY29udmVydGVkXCIsXG4gIFwicHJvamVjdHNfdjJfaXRlbS5jcmVhdGVkXCIsXG4gIFwicHJvamVjdHNfdjJfaXRlbS5kZWxldGVkXCIsXG4gIFwicHJvamVjdHNfdjJfaXRlbS5lZGl0ZWRcIixcbiAgXCJwcm9qZWN0c192Ml9pdGVtLnJlb3JkZXJlZFwiLFxuICBcInByb2plY3RzX3YyX2l0ZW0ucmVzdG9yZWRcIixcbiAgXCJwdWJsaWNcIixcbiAgXCJwdWxsX3JlcXVlc3RcIixcbiAgXCJwdWxsX3JlcXVlc3QuYXNzaWduZWRcIixcbiAgXCJwdWxsX3JlcXVlc3QuYXV0b19tZXJnZV9kaXNhYmxlZFwiLFxuICBcInB1bGxfcmVxdWVzdC5hdXRvX21lcmdlX2VuYWJsZWRcIixcbiAgXCJwdWxsX3JlcXVlc3QuY2xvc2VkXCIsXG4gIFwicHVsbF9yZXF1ZXN0LmNvbnZlcnRlZF90b19kcmFmdFwiLFxuICBcInB1bGxfcmVxdWVzdC5kZW1pbGVzdG9uZWRcIixcbiAgXCJwdWxsX3JlcXVlc3QuZGVxdWV1ZWRcIixcbiAgXCJwdWxsX3JlcXVlc3QuZWRpdGVkXCIsXG4gIFwicHVsbF9yZXF1ZXN0LmVucXVldWVkXCIsXG4gIFwicHVsbF9yZXF1ZXN0LmxhYmVsZWRcIixcbiAgXCJwdWxsX3JlcXVlc3QubG9ja2VkXCIsXG4gIFwicHVsbF9yZXF1ZXN0Lm1pbGVzdG9uZWRcIixcbiAgXCJwdWxsX3JlcXVlc3Qub3BlbmVkXCIsXG4gIFwicHVsbF9yZXF1ZXN0LnJlYWR5X2Zvcl9yZXZpZXdcIixcbiAgXCJwdWxsX3JlcXVlc3QucmVvcGVuZWRcIixcbiAgXCJwdWxsX3JlcXVlc3QucmV2aWV3X3JlcXVlc3RfcmVtb3ZlZFwiLFxuICBcInB1bGxfcmVxdWVzdC5yZXZpZXdfcmVxdWVzdGVkXCIsXG4gIFwicHVsbF9yZXF1ZXN0LnN5bmNocm9uaXplXCIsXG4gIFwicHVsbF9yZXF1ZXN0LnVuYXNzaWduZWRcIixcbiAgXCJwdWxsX3JlcXVlc3QudW5sYWJlbGVkXCIsXG4gIFwicHVsbF9yZXF1ZXN0LnVubG9ja2VkXCIsXG4gIFwicHVsbF9yZXF1ZXN0X3Jldmlld1wiLFxuICBcInB1bGxfcmVxdWVzdF9yZXZpZXcuZGlzbWlzc2VkXCIsXG4gIFwicHVsbF9yZXF1ZXN0X3Jldmlldy5lZGl0ZWRcIixcbiAgXCJwdWxsX3JlcXVlc3RfcmV2aWV3LnN1Ym1pdHRlZFwiLFxuICBcInB1bGxfcmVxdWVzdF9yZXZpZXdfY29tbWVudFwiLFxuICBcInB1bGxfcmVxdWVzdF9yZXZpZXdfY29tbWVudC5jcmVhdGVkXCIsXG4gIFwicHVsbF9yZXF1ZXN0X3Jldmlld19jb21tZW50LmRlbGV0ZWRcIixcbiAgXCJwdWxsX3JlcXVlc3RfcmV2aWV3X2NvbW1lbnQuZWRpdGVkXCIsXG4gIFwicHVsbF9yZXF1ZXN0X3Jldmlld190aHJlYWRcIixcbiAgXCJwdWxsX3JlcXVlc3RfcmV2aWV3X3RocmVhZC5yZXNvbHZlZFwiLFxuICBcInB1bGxfcmVxdWVzdF9yZXZpZXdfdGhyZWFkLnVucmVzb2x2ZWRcIixcbiAgXCJwdXNoXCIsXG4gIFwicmVnaXN0cnlfcGFja2FnZVwiLFxuICBcInJlZ2lzdHJ5X3BhY2thZ2UucHVibGlzaGVkXCIsXG4gIFwicmVnaXN0cnlfcGFja2FnZS51cGRhdGVkXCIsXG4gIFwicmVsZWFzZVwiLFxuICBcInJlbGVhc2UuY3JlYXRlZFwiLFxuICBcInJlbGVhc2UuZGVsZXRlZFwiLFxuICBcInJlbGVhc2UuZWRpdGVkXCIsXG4gIFwicmVsZWFzZS5wcmVyZWxlYXNlZFwiLFxuICBcInJlbGVhc2UucHVibGlzaGVkXCIsXG4gIFwicmVsZWFzZS5yZWxlYXNlZFwiLFxuICBcInJlbGVhc2UudW5wdWJsaXNoZWRcIixcbiAgXCJyZXBvc2l0b3J5XCIsXG4gIFwicmVwb3NpdG9yeS5hcmNoaXZlZFwiLFxuICBcInJlcG9zaXRvcnkuY3JlYXRlZFwiLFxuICBcInJlcG9zaXRvcnkuZGVsZXRlZFwiLFxuICBcInJlcG9zaXRvcnkuZWRpdGVkXCIsXG4gIFwicmVwb3NpdG9yeS5wcml2YXRpemVkXCIsXG4gIFwicmVwb3NpdG9yeS5wdWJsaWNpemVkXCIsXG4gIFwicmVwb3NpdG9yeS5yZW5hbWVkXCIsXG4gIFwicmVwb3NpdG9yeS50cmFuc2ZlcnJlZFwiLFxuICBcInJlcG9zaXRvcnkudW5hcmNoaXZlZFwiLFxuICBcInJlcG9zaXRvcnlfZGlzcGF0Y2hcIixcbiAgXCJyZXBvc2l0b3J5X2ltcG9ydFwiLFxuICBcInJlcG9zaXRvcnlfdnVsbmVyYWJpbGl0eV9hbGVydFwiLFxuICBcInJlcG9zaXRvcnlfdnVsbmVyYWJpbGl0eV9hbGVydC5jcmVhdGVcIixcbiAgXCJyZXBvc2l0b3J5X3Z1bG5lcmFiaWxpdHlfYWxlcnQuZGlzbWlzc1wiLFxuICBcInJlcG9zaXRvcnlfdnVsbmVyYWJpbGl0eV9hbGVydC5yZW9wZW5cIixcbiAgXCJyZXBvc2l0b3J5X3Z1bG5lcmFiaWxpdHlfYWxlcnQucmVzb2x2ZVwiLFxuICBcInNlY3JldF9zY2FubmluZ19hbGVydFwiLFxuICBcInNlY3JldF9zY2FubmluZ19hbGVydC5jcmVhdGVkXCIsXG4gIFwic2VjcmV0X3NjYW5uaW5nX2FsZXJ0LnJlb3BlbmVkXCIsXG4gIFwic2VjcmV0X3NjYW5uaW5nX2FsZXJ0LnJlc29sdmVkXCIsXG4gIFwic2VjcmV0X3NjYW5uaW5nX2FsZXJ0LnJldm9rZWRcIixcbiAgXCJzZWNyZXRfc2Nhbm5pbmdfYWxlcnRfbG9jYXRpb25cIixcbiAgXCJzZWNyZXRfc2Nhbm5pbmdfYWxlcnRfbG9jYXRpb24uY3JlYXRlZFwiLFxuICBcInNlY3VyaXR5X2Fkdmlzb3J5XCIsXG4gIFwic2VjdXJpdHlfYWR2aXNvcnkucGVyZm9ybWVkXCIsXG4gIFwic2VjdXJpdHlfYWR2aXNvcnkucHVibGlzaGVkXCIsXG4gIFwic2VjdXJpdHlfYWR2aXNvcnkudXBkYXRlZFwiLFxuICBcInNlY3VyaXR5X2Fkdmlzb3J5LndpdGhkcmF3blwiLFxuICBcInNwb25zb3JzaGlwXCIsXG4gIFwic3BvbnNvcnNoaXAuY2FuY2VsbGVkXCIsXG4gIFwic3BvbnNvcnNoaXAuY3JlYXRlZFwiLFxuICBcInNwb25zb3JzaGlwLmVkaXRlZFwiLFxuICBcInNwb25zb3JzaGlwLnBlbmRpbmdfY2FuY2VsbGF0aW9uXCIsXG4gIFwic3BvbnNvcnNoaXAucGVuZGluZ190aWVyX2NoYW5nZVwiLFxuICBcInNwb25zb3JzaGlwLnRpZXJfY2hhbmdlZFwiLFxuICBcInN0YXJcIixcbiAgXCJzdGFyLmNyZWF0ZWRcIixcbiAgXCJzdGFyLmRlbGV0ZWRcIixcbiAgXCJzdGF0dXNcIixcbiAgXCJ0ZWFtXCIsXG4gIFwidGVhbS5hZGRlZF90b19yZXBvc2l0b3J5XCIsXG4gIFwidGVhbS5jcmVhdGVkXCIsXG4gIFwidGVhbS5kZWxldGVkXCIsXG4gIFwidGVhbS5lZGl0ZWRcIixcbiAgXCJ0ZWFtLnJlbW92ZWRfZnJvbV9yZXBvc2l0b3J5XCIsXG4gIFwidGVhbV9hZGRcIixcbiAgXCJ3YXRjaFwiLFxuICBcIndhdGNoLnN0YXJ0ZWRcIixcbiAgXCJ3b3JrZmxvd19kaXNwYXRjaFwiLFxuICBcIndvcmtmbG93X2pvYlwiLFxuICBcIndvcmtmbG93X2pvYi5jb21wbGV0ZWRcIixcbiAgXCJ3b3JrZmxvd19qb2IuaW5fcHJvZ3Jlc3NcIixcbiAgXCJ3b3JrZmxvd19qb2IucXVldWVkXCIsXG4gIFwid29ya2Zsb3dfam9iLndhaXRpbmdcIixcbiAgXCJ3b3JrZmxvd19ydW5cIixcbiAgXCJ3b3JrZmxvd19ydW4uY29tcGxldGVkXCIsXG4gIFwid29ya2Zsb3dfcnVuLmluX3Byb2dyZXNzXCIsXG4gIFwid29ya2Zsb3dfcnVuLnJlcXVlc3RlZFwiXG5dO1xuXG4vLyBwa2cvZGlzdC1zcmMvZXZlbnQtaGFuZGxlci9vbi5qc1xuZnVuY3Rpb24gaGFuZGxlRXZlbnRIYW5kbGVycyhzdGF0ZSwgd2ViaG9va05hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKCFzdGF0ZS5ob29rc1t3ZWJob29rTmFtZV0pIHtcbiAgICBzdGF0ZS5ob29rc1t3ZWJob29rTmFtZV0gPSBbXTtcbiAgfVxuICBzdGF0ZS5ob29rc1t3ZWJob29rTmFtZV0ucHVzaChoYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIHJlY2VpdmVyT24oc3RhdGUsIHdlYmhvb2tOYW1lT3JOYW1lcywgaGFuZGxlcikge1xuICBpZiAoQXJyYXkuaXNBcnJheSh3ZWJob29rTmFtZU9yTmFtZXMpKSB7XG4gICAgd2ViaG9va05hbWVPck5hbWVzLmZvckVhY2goXG4gICAgICAod2ViaG9va05hbWUpID0+IHJlY2VpdmVyT24oc3RhdGUsIHdlYmhvb2tOYW1lLCBoYW5kbGVyKVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChbXCIqXCIsIFwiZXJyb3JcIl0uaW5jbHVkZXMod2ViaG9va05hbWVPck5hbWVzKSkge1xuICAgIGNvbnN0IHdlYmhvb2tOYW1lID0gd2ViaG9va05hbWVPck5hbWVzID09PSBcIipcIiA/IFwiYW55XCIgOiB3ZWJob29rTmFtZU9yTmFtZXM7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBVc2luZyB0aGUgXCIke3dlYmhvb2tOYW1lT3JOYW1lc31cIiBldmVudCB3aXRoIHRoZSByZWd1bGFyIFdlYmhvb2tzLm9uKCkgZnVuY3Rpb24gaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSB0aGUgV2ViaG9va3Mub24ke3dlYmhvb2tOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2ViaG9va05hbWUuc2xpY2UoMSl9KCkgbWV0aG9kIGluc3RlYWRgO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxuICBpZiAoIWVtaXR0ZXJFdmVudE5hbWVzLmluY2x1ZGVzKHdlYmhvb2tOYW1lT3JOYW1lcykpIHtcbiAgICBzdGF0ZS5sb2cud2FybihcbiAgICAgIGBcIiR7d2ViaG9va05hbWVPck5hbWVzfVwiIGlzIG5vdCBhIGtub3duIHdlYmhvb2sgbmFtZSAoaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9hY3Rpdml0eS9ldmVudHMvdHlwZXMvKWBcbiAgICApO1xuICB9XG4gIGhhbmRsZUV2ZW50SGFuZGxlcnMoc3RhdGUsIHdlYmhvb2tOYW1lT3JOYW1lcywgaGFuZGxlcik7XG59XG5mdW5jdGlvbiByZWNlaXZlck9uQW55KHN0YXRlLCBoYW5kbGVyKSB7XG4gIGhhbmRsZUV2ZW50SGFuZGxlcnMoc3RhdGUsIFwiKlwiLCBoYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIHJlY2VpdmVyT25FcnJvcihzdGF0ZSwgaGFuZGxlcikge1xuICBoYW5kbGVFdmVudEhhbmRsZXJzKHN0YXRlLCBcImVycm9yXCIsIGhhbmRsZXIpO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZXZlbnQtaGFuZGxlci9yZWNlaXZlLmpzXG5pbXBvcnQgQWdncmVnYXRlRXJyb3IgZnJvbSBcImFnZ3JlZ2F0ZS1lcnJvclwiO1xuXG4vLyBwa2cvZGlzdC1zcmMvZXZlbnQtaGFuZGxlci93cmFwLWVycm9yLWhhbmRsZXIuanNcbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoaGFuZGxlciwgZXJyb3IpIHtcbiAgbGV0IHJldHVyblZhbHVlO1xuICB0cnkge1xuICAgIHJldHVyblZhbHVlID0gaGFuZGxlcihlcnJvcik7XG4gIH0gY2F0Y2ggKGVycm9yMikge1xuICAgIGNvbnNvbGUubG9nKCdGQVRBTDogRXJyb3Igb2NjdXJyZWQgaW4gXCJlcnJvclwiIGV2ZW50IGhhbmRsZXInKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcjIpO1xuICB9XG4gIGlmIChyZXR1cm5WYWx1ZSAmJiByZXR1cm5WYWx1ZS5jYXRjaCkge1xuICAgIHJldHVyblZhbHVlLmNhdGNoKChlcnJvcjIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGQVRBTDogRXJyb3Igb2NjdXJyZWQgaW4gXCJlcnJvclwiIGV2ZW50IGhhbmRsZXInKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yMik7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2V2ZW50LWhhbmRsZXIvcmVjZWl2ZS5qc1xuZnVuY3Rpb24gZ2V0SG9va3Moc3RhdGUsIGV2ZW50UGF5bG9hZEFjdGlvbiwgZXZlbnROYW1lKSB7XG4gIGNvbnN0IGhvb2tzID0gW3N0YXRlLmhvb2tzW2V2ZW50TmFtZV0sIHN0YXRlLmhvb2tzW1wiKlwiXV07XG4gIGlmIChldmVudFBheWxvYWRBY3Rpb24pIHtcbiAgICBob29rcy51bnNoaWZ0KHN0YXRlLmhvb2tzW2Ake2V2ZW50TmFtZX0uJHtldmVudFBheWxvYWRBY3Rpb259YF0pO1xuICB9XG4gIHJldHVybiBbXS5jb25jYXQoLi4uaG9va3MuZmlsdGVyKEJvb2xlYW4pKTtcbn1cbmZ1bmN0aW9uIHJlY2VpdmVySGFuZGxlKHN0YXRlLCBldmVudCkge1xuICBjb25zdCBlcnJvckhhbmRsZXJzID0gc3RhdGUuaG9va3MuZXJyb3IgfHwgW107XG4gIGlmIChldmVudCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgY29uc3QgZXJyb3IgPSBPYmplY3QuYXNzaWduKG5ldyBBZ2dyZWdhdGVFcnJvcihbZXZlbnRdKSwge1xuICAgICAgZXZlbnQsXG4gICAgICBlcnJvcnM6IFtldmVudF1cbiAgICB9KTtcbiAgICBlcnJvckhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHdyYXBFcnJvckhhbmRsZXIoaGFuZGxlciwgZXJyb3IpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4gIGlmICghZXZlbnQgfHwgIWV2ZW50Lm5hbWUpIHtcbiAgICB0aHJvdyBuZXcgQWdncmVnYXRlRXJyb3IoW1wiRXZlbnQgbmFtZSBub3QgcGFzc2VkXCJdKTtcbiAgfVxuICBpZiAoIWV2ZW50LnBheWxvYWQpIHtcbiAgICB0aHJvdyBuZXcgQWdncmVnYXRlRXJyb3IoW1wiRXZlbnQgcGF5bG9hZCBub3QgcGFzc2VkXCJdKTtcbiAgfVxuICBjb25zdCBob29rcyA9IGdldEhvb2tzKFxuICAgIHN0YXRlLFxuICAgIFwiYWN0aW9uXCIgaW4gZXZlbnQucGF5bG9hZCA/IGV2ZW50LnBheWxvYWQuYWN0aW9uIDogbnVsbCxcbiAgICBldmVudC5uYW1lXG4gICk7XG4gIGlmIChob29rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgY29uc3QgZXJyb3JzID0gW107XG4gIGNvbnN0IHByb21pc2VzID0gaG9va3MubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZXZlbnQpO1xuICAgIGlmIChzdGF0ZS50cmFuc2Zvcm0pIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oc3RhdGUudHJhbnNmb3JtKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZXZlbnQyKSA9PiB7XG4gICAgICByZXR1cm4gaGFuZGxlcihldmVudDIpO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4gZXJyb3JzLnB1c2goT2JqZWN0LmFzc2lnbihlcnJvciwgeyBldmVudCB9KSkpO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlcnJvciA9IG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMpO1xuICAgIE9iamVjdC5hc3NpZ24oZXJyb3IsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgZXJyb3JzXG4gICAgfSk7XG4gICAgZXJyb3JIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB3cmFwRXJyb3JIYW5kbGVyKGhhbmRsZXIsIGVycm9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvZXZlbnQtaGFuZGxlci9yZW1vdmUtbGlzdGVuZXIuanNcbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHN0YXRlLCB3ZWJob29rTmFtZU9yTmFtZXMsIGhhbmRsZXIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkod2ViaG9va05hbWVPck5hbWVzKSkge1xuICAgIHdlYmhvb2tOYW1lT3JOYW1lcy5mb3JFYWNoKFxuICAgICAgKHdlYmhvb2tOYW1lKSA9PiByZW1vdmVMaXN0ZW5lcihzdGF0ZSwgd2ViaG9va05hbWUsIGhhbmRsZXIpXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzdGF0ZS5ob29rc1t3ZWJob29rTmFtZU9yTmFtZXNdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAobGV0IGkgPSBzdGF0ZS5ob29rc1t3ZWJob29rTmFtZU9yTmFtZXNdLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHN0YXRlLmhvb2tzW3dlYmhvb2tOYW1lT3JOYW1lc11baV0gPT09IGhhbmRsZXIpIHtcbiAgICAgIHN0YXRlLmhvb2tzW3dlYmhvb2tOYW1lT3JOYW1lc10uc3BsaWNlKGksIDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwa2cvZGlzdC1zcmMvZXZlbnQtaGFuZGxlci9pbmRleC5qc1xuZnVuY3Rpb24gY3JlYXRlRXZlbnRIYW5kbGVyKG9wdGlvbnMpIHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgaG9va3M6IHt9LFxuICAgIGxvZzogY3JlYXRlTG9nZ2VyKG9wdGlvbnMgJiYgb3B0aW9ucy5sb2cpXG4gIH07XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMudHJhbnNmb3JtKSB7XG4gICAgc3RhdGUudHJhbnNmb3JtID0gb3B0aW9ucy50cmFuc2Zvcm07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvbjogcmVjZWl2ZXJPbi5iaW5kKG51bGwsIHN0YXRlKSxcbiAgICBvbkFueTogcmVjZWl2ZXJPbkFueS5iaW5kKG51bGwsIHN0YXRlKSxcbiAgICBvbkVycm9yOiByZWNlaXZlck9uRXJyb3IuYmluZChudWxsLCBzdGF0ZSksXG4gICAgcmVtb3ZlTGlzdGVuZXI6IHJlbW92ZUxpc3RlbmVyLmJpbmQobnVsbCwgc3RhdGUpLFxuICAgIHJlY2VpdmU6IHJlY2VpdmVySGFuZGxlLmJpbmQobnVsbCwgc3RhdGUpXG4gIH07XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9pbmRleC5qc1xuaW1wb3J0IHsgc2lnbiwgdmVyaWZ5IGFzIHZlcmlmeTIgfSBmcm9tIFwiQG9jdG9raXQvd2ViaG9va3MtbWV0aG9kc1wiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyaWZ5LWFuZC1yZWNlaXZlLmpzXG5pbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwiQG9jdG9raXQvd2ViaG9va3MtbWV0aG9kc1wiO1xuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QW5kUmVjZWl2ZShzdGF0ZSwgZXZlbnQpIHtcbiAgY29uc3QgbWF0Y2hlc1NpZ25hdHVyZSA9IGF3YWl0IHZlcmlmeShcbiAgICBzdGF0ZS5zZWNyZXQsXG4gICAgZXZlbnQucGF5bG9hZCxcbiAgICBldmVudC5zaWduYXR1cmVcbiAgKTtcbiAgaWYgKCFtYXRjaGVzU2lnbmF0dXJlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICBcIltAb2N0b2tpdC93ZWJob29rc10gc2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIGV2ZW50IHBheWxvYWQgYW5kIHNlY3JldFwiXG4gICAgKTtcbiAgICByZXR1cm4gc3RhdGUuZXZlbnRIYW5kbGVyLnJlY2VpdmUoXG4gICAgICBPYmplY3QuYXNzaWduKGVycm9yLCB7IGV2ZW50LCBzdGF0dXM6IDQwMCB9KVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmV2ZW50SGFuZGxlci5yZWNlaXZlKHtcbiAgICBpZDogZXZlbnQuaWQsXG4gICAgbmFtZTogZXZlbnQubmFtZSxcbiAgICBwYXlsb2FkOiBKU09OLnBhcnNlKGV2ZW50LnBheWxvYWQpXG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvbWlkZGxld2FyZS9ub2RlL2dldC1taXNzaW5nLWhlYWRlcnMuanNcbnZhciBXRUJIT09LX0hFQURFUlMgPSBbXG4gIFwieC1naXRodWItZXZlbnRcIixcbiAgXCJ4LWh1Yi1zaWduYXR1cmUtMjU2XCIsXG4gIFwieC1naXRodWItZGVsaXZlcnlcIlxuXTtcbmZ1bmN0aW9uIGdldE1pc3NpbmdIZWFkZXJzKHJlcXVlc3QpIHtcbiAgcmV0dXJuIFdFQkhPT0tfSEVBREVSUy5maWx0ZXIoKGhlYWRlcikgPT4gIShoZWFkZXIgaW4gcmVxdWVzdC5oZWFkZXJzKSk7XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL25vZGUvZ2V0LXBheWxvYWQuanNcbmltcG9ydCBBZ2dyZWdhdGVFcnJvcjIgZnJvbSBcImFnZ3JlZ2F0ZS1lcnJvclwiO1xuZnVuY3Rpb24gZ2V0UGF5bG9hZChyZXF1ZXN0KSB7XG4gIGlmIChyZXF1ZXN0LmJvZHkpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXF1ZXN0LmJvZHkpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBkYXRhID0gXCJcIjtcbiAgICByZXF1ZXN0LnNldEVuY29kaW5nKFwidXRmOFwiKTtcbiAgICByZXF1ZXN0Lm9uKFwiZXJyb3JcIiwgKGVycm9yKSA9PiByZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yMihbZXJyb3JdKSkpO1xuICAgIHJlcXVlc3Qub24oXCJkYXRhXCIsIChjaHVuaykgPT4gZGF0YSArPSBjaHVuayk7XG4gICAgcmVxdWVzdC5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3IubWVzc2FnZSA9IFwiSW52YWxpZCBKU09OXCI7XG4gICAgICAgIGVycm9yLnN0YXR1cyA9IDQwMDtcbiAgICAgICAgcmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcjIoW2Vycm9yXSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21pZGRsZXdhcmUvbm9kZS9vbi11bmhhbmRsZWQtcmVxdWVzdC1kZWZhdWx0LmpzXG5mdW5jdGlvbiBvblVuaGFuZGxlZFJlcXVlc3REZWZhdWx0KHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHJlc3BvbnNlLndyaXRlSGVhZCg0MDQsIHtcbiAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICB9KTtcbiAgcmVzcG9uc2UuZW5kKFxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVycm9yOiBgVW5rbm93biByb3V0ZTogJHtyZXF1ZXN0Lm1ldGhvZH0gJHtyZXF1ZXN0LnVybH1gXG4gICAgfSlcbiAgKTtcbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL21pZGRsZXdhcmUvbm9kZS9taWRkbGV3YXJlLmpzXG5hc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHdlYmhvb2tzLCBvcHRpb25zLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkge1xuICBsZXQgcGF0aG5hbWU7XG4gIHRyeSB7XG4gICAgcGF0aG5hbWUgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBcImh0dHA6Ly9sb2NhbGhvc3RcIikucGF0aG5hbWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzcG9uc2Uud3JpdGVIZWFkKDQyMiwge1xuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9KTtcbiAgICByZXNwb25zZS5lbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVycm9yOiBgUmVxdWVzdCBVUkwgY291bGQgbm90IGJlIHBhcnNlZDogJHtyZXF1ZXN0LnVybH1gXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHBhdGhuYW1lICE9PSBvcHRpb25zLnBhdGgpIHtcbiAgICBuZXh0Py4oKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgb25VbmhhbmRsZWRSZXF1ZXN0RGVmYXVsdChyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFyZXF1ZXN0LmhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgIXJlcXVlc3QuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXS5zdGFydHNXaXRoKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgIHJlc3BvbnNlLndyaXRlSGVhZCg0MTUsIHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0pO1xuICAgIHJlc3BvbnNlLmVuZChcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZXJyb3I6IGBVbnN1cHBvcnRlZCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlciB2YWx1ZS4gTXVzdCBiZSBcImFwcGxpY2F0aW9uL2pzb25cImBcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBtaXNzaW5nSGVhZGVycyA9IGdldE1pc3NpbmdIZWFkZXJzKHJlcXVlc3QpLmpvaW4oXCIsIFwiKTtcbiAgaWYgKG1pc3NpbmdIZWFkZXJzKSB7XG4gICAgcmVzcG9uc2Uud3JpdGVIZWFkKDQwMCwge1xuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9KTtcbiAgICByZXNwb25zZS5lbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVycm9yOiBgUmVxdWlyZWQgaGVhZGVycyBtaXNzaW5nOiAke21pc3NpbmdIZWFkZXJzfWBcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBldmVudE5hbWUgPSByZXF1ZXN0LmhlYWRlcnNbXCJ4LWdpdGh1Yi1ldmVudFwiXTtcbiAgY29uc3Qgc2lnbmF0dXJlU0hBMjU2ID0gcmVxdWVzdC5oZWFkZXJzW1wieC1odWItc2lnbmF0dXJlLTI1NlwiXTtcbiAgY29uc3QgaWQgPSByZXF1ZXN0LmhlYWRlcnNbXCJ4LWdpdGh1Yi1kZWxpdmVyeVwiXTtcbiAgb3B0aW9ucy5sb2cuZGVidWcoYCR7ZXZlbnROYW1lfSBldmVudCByZWNlaXZlZCAoaWQ6ICR7aWR9KWApO1xuICBsZXQgZGlkVGltZW91dCA9IGZhbHNlO1xuICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGlkVGltZW91dCA9IHRydWU7XG4gICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMjtcbiAgICByZXNwb25zZS5lbmQoXCJzdGlsbCBwcm9jZXNzaW5nXFxuXCIpO1xuICB9LCA5ZTMpLnVucmVmKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldFBheWxvYWQocmVxdWVzdCk7XG4gICAgYXdhaXQgd2ViaG9va3MudmVyaWZ5QW5kUmVjZWl2ZSh7XG4gICAgICBpZCxcbiAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgIHBheWxvYWQsXG4gICAgICBzaWduYXR1cmU6IHNpZ25hdHVyZVNIQTI1NlxuICAgIH0pO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBpZiAoZGlkVGltZW91dClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJlc3BvbnNlLmVuZChcIm9rXFxuXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBpZiAoZGlkVGltZW91dClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGVyciA9IEFycmF5LmZyb20oZXJyb3IpWzBdO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyci5tZXNzYWdlID8gYCR7ZXJyLm5hbWV9OiAke2Vyci5tZXNzYWdlfWAgOiBcIkVycm9yOiBBbiBVbnNwZWNpZmllZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSB0eXBlb2YgZXJyLnN0YXR1cyAhPT0gXCJ1bmRlZmluZWRcIiA/IGVyci5zdGF0dXMgOiA1MDA7XG4gICAgb3B0aW9ucy5sb2cuZXJyb3IoZXJyb3IpO1xuICAgIHJlc3BvbnNlLmVuZChcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZXJyb3I6IGVycm9yTWVzc2FnZVxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8vIHBrZy9kaXN0LXNyYy9taWRkbGV3YXJlL25vZGUvaW5kZXguanNcbmZ1bmN0aW9uIGNyZWF0ZU5vZGVNaWRkbGV3YXJlKHdlYmhvb2tzLCB7XG4gIHBhdGggPSBcIi9hcGkvZ2l0aHViL3dlYmhvb2tzXCIsXG4gIGxvZyA9IGNyZWF0ZUxvZ2dlcigpXG59ID0ge30pIHtcbiAgcmV0dXJuIG1pZGRsZXdhcmUuYmluZChudWxsLCB3ZWJob29rcywge1xuICAgIHBhdGgsXG4gICAgbG9nXG4gIH0pO1xufVxuXG4vLyBwa2cvZGlzdC1zcmMvaW5kZXguanNcbnZhciBXZWJob29rcyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zZWNyZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIltAb2N0b2tpdC93ZWJob29rc10gb3B0aW9ucy5zZWNyZXQgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgZXZlbnRIYW5kbGVyOiBjcmVhdGVFdmVudEhhbmRsZXIob3B0aW9ucyksXG4gICAgICBzZWNyZXQ6IG9wdGlvbnMuc2VjcmV0LFxuICAgICAgaG9va3M6IHt9LFxuICAgICAgbG9nOiBjcmVhdGVMb2dnZXIob3B0aW9ucy5sb2cpXG4gICAgfTtcbiAgICB0aGlzLnNpZ24gPSBzaWduLmJpbmQobnVsbCwgb3B0aW9ucy5zZWNyZXQpO1xuICAgIHRoaXMudmVyaWZ5ID0gdmVyaWZ5Mi5iaW5kKG51bGwsIG9wdGlvbnMuc2VjcmV0KTtcbiAgICB0aGlzLm9uID0gc3RhdGUuZXZlbnRIYW5kbGVyLm9uO1xuICAgIHRoaXMub25BbnkgPSBzdGF0ZS5ldmVudEhhbmRsZXIub25Bbnk7XG4gICAgdGhpcy5vbkVycm9yID0gc3RhdGUuZXZlbnRIYW5kbGVyLm9uRXJyb3I7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lciA9IHN0YXRlLmV2ZW50SGFuZGxlci5yZW1vdmVMaXN0ZW5lcjtcbiAgICB0aGlzLnJlY2VpdmUgPSBzdGF0ZS5ldmVudEhhbmRsZXIucmVjZWl2ZTtcbiAgICB0aGlzLnZlcmlmeUFuZFJlY2VpdmUgPSB2ZXJpZnlBbmRSZWNlaXZlLmJpbmQobnVsbCwgc3RhdGUpO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgV2ViaG9va3MsXG4gIGNyZWF0ZUV2ZW50SGFuZGxlcixcbiAgY3JlYXRlTm9kZU1pZGRsZXdhcmUsXG4gIGVtaXR0ZXJFdmVudE5hbWVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgaW5kZW50U3RyaW5nID0gcmVxdWlyZSgnaW5kZW50LXN0cmluZycpO1xuY29uc3QgY2xlYW5TdGFjayA9IHJlcXVpcmUoJ2NsZWFuLXN0YWNrJyk7XG5cbmNvbnN0IGNsZWFuSW50ZXJuYWxTdGFjayA9IHN0YWNrID0+IHN0YWNrLnJlcGxhY2UoL1xccythdCAuKmFnZ3JlZ2F0ZS1lcnJvclxcL2luZGV4LmpzOlxcZCs6XFxkK1xcKT8vZywgJycpO1xuXG5jbGFzcyBBZ2dyZWdhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IoZXJyb3JzKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGVycm9ycykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGlucHV0IHRvIGJlIGFuIEFycmF5LCBnb3QgJHt0eXBlb2YgZXJyb3JzfWApO1xuXHRcdH1cblxuXHRcdGVycm9ycyA9IFsuLi5lcnJvcnNdLm1hcChlcnJvciA9PiB7XG5cdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlcnJvciAhPT0gbnVsbCAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdC8vIEhhbmRsZSBwbGFpbiBlcnJvciBvYmplY3RzIHdpdGggbWVzc2FnZSBwcm9wZXJ0eSBhbmQvb3IgcG9zc2libHkgb3RoZXIgbWV0YWRhdGFcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgRXJyb3IoZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0bGV0IG1lc3NhZ2UgPSBlcnJvcnNcblx0XHRcdC5tYXAoZXJyb3IgPT4ge1xuXHRcdFx0XHQvLyBUaGUgYHN0YWNrYCBwcm9wZXJ0eSBpcyBub3Qgc3RhbmRhcmRpemVkLCBzbyB3ZSBjYW4ndCBhc3N1bWUgaXQgZXhpc3RzXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgZXJyb3Iuc3RhY2sgPT09ICdzdHJpbmcnID8gY2xlYW5JbnRlcm5hbFN0YWNrKGNsZWFuU3RhY2soZXJyb3Iuc3RhY2spKSA6IFN0cmluZyhlcnJvcik7XG5cdFx0XHR9KVxuXHRcdFx0LmpvaW4oJ1xcbicpO1xuXHRcdG1lc3NhZ2UgPSAnXFxuJyArIGluZGVudFN0cmluZyhtZXNzYWdlLCA0KTtcblx0XHRzdXBlcihtZXNzYWdlKTtcblxuXHRcdHRoaXMubmFtZSA9ICdBZ2dyZWdhdGVFcnJvcic7XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19lcnJvcnMnLCB7dmFsdWU6IGVycm9yc30pO1xuXHR9XG5cblx0KiBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRmb3IgKGNvbnN0IGVycm9yIG9mIHRoaXMuX2Vycm9ycykge1xuXHRcdFx0eWllbGQgZXJyb3I7XG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWdncmVnYXRlRXJyb3I7XG4iLCJ2YXIgcmVnaXN0ZXIgPSByZXF1aXJlKFwiLi9saWIvcmVnaXN0ZXJcIik7XG52YXIgYWRkSG9vayA9IHJlcXVpcmUoXCIuL2xpYi9hZGRcIik7XG52YXIgcmVtb3ZlSG9vayA9IHJlcXVpcmUoXCIuL2xpYi9yZW1vdmVcIik7XG5cbi8vIGJpbmQgd2l0aCBhcnJheSBvZiBhcmd1bWVudHM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTc5MjkxM1xudmFyIGJpbmQgPSBGdW5jdGlvbi5iaW5kO1xudmFyIGJpbmRhYmxlID0gYmluZC5iaW5kKGJpbmQpO1xuXG5mdW5jdGlvbiBiaW5kQXBpKGhvb2ssIHN0YXRlLCBuYW1lKSB7XG4gIHZhciByZW1vdmVIb29rUmVmID0gYmluZGFibGUocmVtb3ZlSG9vaywgbnVsbCkuYXBwbHkoXG4gICAgbnVsbCxcbiAgICBuYW1lID8gW3N0YXRlLCBuYW1lXSA6IFtzdGF0ZV1cbiAgKTtcbiAgaG9vay5hcGkgPSB7IHJlbW92ZTogcmVtb3ZlSG9va1JlZiB9O1xuICBob29rLnJlbW92ZSA9IHJlbW92ZUhvb2tSZWY7XG4gIFtcImJlZm9yZVwiLCBcImVycm9yXCIsIFwiYWZ0ZXJcIiwgXCJ3cmFwXCJdLmZvckVhY2goZnVuY3Rpb24gKGtpbmQpIHtcbiAgICB2YXIgYXJncyA9IG5hbWUgPyBbc3RhdGUsIGtpbmQsIG5hbWVdIDogW3N0YXRlLCBraW5kXTtcbiAgICBob29rW2tpbmRdID0gaG9vay5hcGlba2luZF0gPSBiaW5kYWJsZShhZGRIb29rLCBudWxsKS5hcHBseShudWxsLCBhcmdzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEhvb2tTaW5ndWxhcigpIHtcbiAgdmFyIHNpbmd1bGFySG9va05hbWUgPSBcImhcIjtcbiAgdmFyIHNpbmd1bGFySG9va1N0YXRlID0ge1xuICAgIHJlZ2lzdHJ5OiB7fSxcbiAgfTtcbiAgdmFyIHNpbmd1bGFySG9vayA9IHJlZ2lzdGVyLmJpbmQobnVsbCwgc2luZ3VsYXJIb29rU3RhdGUsIHNpbmd1bGFySG9va05hbWUpO1xuICBiaW5kQXBpKHNpbmd1bGFySG9vaywgc2luZ3VsYXJIb29rU3RhdGUsIHNpbmd1bGFySG9va05hbWUpO1xuICByZXR1cm4gc2luZ3VsYXJIb29rO1xufVxuXG5mdW5jdGlvbiBIb29rQ29sbGVjdGlvbigpIHtcbiAgdmFyIHN0YXRlID0ge1xuICAgIHJlZ2lzdHJ5OiB7fSxcbiAgfTtcblxuICB2YXIgaG9vayA9IHJlZ2lzdGVyLmJpbmQobnVsbCwgc3RhdGUpO1xuICBiaW5kQXBpKGhvb2ssIHN0YXRlKTtcblxuICByZXR1cm4gaG9vaztcbn1cblxudmFyIGNvbGxlY3Rpb25Ib29rRGVwcmVjYXRpb25NZXNzYWdlRGlzcGxheWVkID0gZmFsc2U7XG5mdW5jdGlvbiBIb29rKCkge1xuICBpZiAoIWNvbGxlY3Rpb25Ib29rRGVwcmVjYXRpb25NZXNzYWdlRGlzcGxheWVkKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1tiZWZvcmUtYWZ0ZXItaG9va106IFwiSG9vaygpXCIgcmVwdXJwb3Npbmcgd2FybmluZywgdXNlIFwiSG9vay5Db2xsZWN0aW9uKClcIi4gUmVhZCBtb3JlOiBodHRwczovL2dpdC5pby91cGdyYWRlLWJlZm9yZS1hZnRlci1ob29rLXRvLTEuNCdcbiAgICApO1xuICAgIGNvbGxlY3Rpb25Ib29rRGVwcmVjYXRpb25NZXNzYWdlRGlzcGxheWVkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gSG9va0NvbGxlY3Rpb24oKTtcbn1cblxuSG9vay5TaW5ndWxhciA9IEhvb2tTaW5ndWxhci5iaW5kKCk7XG5Ib29rLkNvbGxlY3Rpb24gPSBIb29rQ29sbGVjdGlvbi5iaW5kKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9vaztcbi8vIGV4cG9zZSBjb25zdHJ1Y3RvcnMgYXMgYSBuYW1lZCBwcm9wZXJ0eSBmb3IgVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuSG9vayA9IEhvb2s7XG5tb2R1bGUuZXhwb3J0cy5TaW5ndWxhciA9IEhvb2suU2luZ3VsYXI7XG5tb2R1bGUuZXhwb3J0cy5Db2xsZWN0aW9uID0gSG9vay5Db2xsZWN0aW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhZGRIb29rO1xuXG5mdW5jdGlvbiBhZGRIb29rKHN0YXRlLCBraW5kLCBuYW1lLCBob29rKSB7XG4gIHZhciBvcmlnID0gaG9vaztcbiAgaWYgKCFzdGF0ZS5yZWdpc3RyeVtuYW1lXSkge1xuICAgIHN0YXRlLnJlZ2lzdHJ5W25hbWVdID0gW107XG4gIH1cblxuICBpZiAoa2luZCA9PT0gXCJiZWZvcmVcIikge1xuICAgIGhvb2sgPSBmdW5jdGlvbiAobWV0aG9kLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4ob3JpZy5iaW5kKG51bGwsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChraW5kID09PSBcImFmdGVyXCIpIHtcbiAgICBob29rID0gZnVuY3Rpb24gKG1ldGhvZCwgb3B0aW9ucykge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihtZXRob2QuYmluZChudWxsLCBvcHRpb25zKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdF8pIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRfO1xuICAgICAgICAgIHJldHVybiBvcmlnKHJlc3VsdCwgb3B0aW9ucyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGtpbmQgPT09IFwiZXJyb3JcIikge1xuICAgIGhvb2sgPSBmdW5jdGlvbiAobWV0aG9kLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4obWV0aG9kLmJpbmQobnVsbCwgb3B0aW9ucykpXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gb3JpZyhlcnJvciwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBzdGF0ZS5yZWdpc3RyeVtuYW1lXS5wdXNoKHtcbiAgICBob29rOiBob29rLFxuICAgIG9yaWc6IG9yaWcsXG4gIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcblxuZnVuY3Rpb24gcmVnaXN0ZXIoc3RhdGUsIG5hbWUsIG1ldGhvZCwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGZvciBiZWZvcmUgaG9vayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgIHJldHVybiBuYW1lLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGNhbGxiYWNrLCBuYW1lKSB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXIuYmluZChudWxsLCBzdGF0ZSwgbmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgIH0sIG1ldGhvZCkoKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXN0YXRlLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgICByZXR1cm4gbWV0aG9kKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZS5yZWdpc3RyeVtuYW1lXS5yZWR1Y2UoZnVuY3Rpb24gKG1ldGhvZCwgcmVnaXN0ZXJlZCkge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWQuaG9vay5iaW5kKG51bGwsIG1ldGhvZCwgb3B0aW9ucyk7XG4gICAgfSwgbWV0aG9kKSgpO1xuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlSG9vaztcblxuZnVuY3Rpb24gcmVtb3ZlSG9vayhzdGF0ZSwgbmFtZSwgbWV0aG9kKSB7XG4gIGlmICghc3RhdGUucmVnaXN0cnlbbmFtZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaW5kZXggPSBzdGF0ZS5yZWdpc3RyeVtuYW1lXVxuICAgIC5tYXAoZnVuY3Rpb24gKHJlZ2lzdGVyZWQpIHtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkLm9yaWc7XG4gICAgfSlcbiAgICAuaW5kZXhPZihtZXRob2QpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5yZWdpc3RyeVtuYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuIiwiLyoqXG4gICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBCb3R0bGVuZWNrIGxpYnJhcnkgKE1JVCksIGNvbXBpbGVkIHRvIEVTMjAxNywgYW5kIHdpdGhvdXQgQ2x1c3RlcmluZyBzdXBwb3J0LlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9TR3JvbmRpbi9ib3R0bGVuZWNrXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQm90dGxlbmVjayA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXHRmdW5jdGlvbiBnZXRDanNFeHBvcnRGcm9tTmFtZXNwYWNlIChuKSB7XG5cdFx0cmV0dXJuIG4gJiYgblsnZGVmYXVsdCddIHx8IG47XG5cdH1cblxuXHR2YXIgbG9hZCA9IGZ1bmN0aW9uKHJlY2VpdmVkLCBkZWZhdWx0cywgb250byA9IHt9KSB7XG5cdCAgdmFyIGssIHJlZiwgdjtcblx0ICBmb3IgKGsgaW4gZGVmYXVsdHMpIHtcblx0ICAgIHYgPSBkZWZhdWx0c1trXTtcblx0ICAgIG9udG9ba10gPSAocmVmID0gcmVjZWl2ZWRba10pICE9IG51bGwgPyByZWYgOiB2O1xuXHQgIH1cblx0ICByZXR1cm4gb250bztcblx0fTtcblxuXHR2YXIgb3ZlcndyaXRlID0gZnVuY3Rpb24ocmVjZWl2ZWQsIGRlZmF1bHRzLCBvbnRvID0ge30pIHtcblx0ICB2YXIgaywgdjtcblx0ICBmb3IgKGsgaW4gcmVjZWl2ZWQpIHtcblx0ICAgIHYgPSByZWNlaXZlZFtrXTtcblx0ICAgIGlmIChkZWZhdWx0c1trXSAhPT0gdm9pZCAwKSB7XG5cdCAgICAgIG9udG9ba10gPSB2O1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gb250bztcblx0fTtcblxuXHR2YXIgcGFyc2VyID0ge1xuXHRcdGxvYWQ6IGxvYWQsXG5cdFx0b3ZlcndyaXRlOiBvdmVyd3JpdGVcblx0fTtcblxuXHR2YXIgRExMaXN0O1xuXG5cdERMTGlzdCA9IGNsYXNzIERMTGlzdCB7XG5cdCAgY29uc3RydWN0b3IoaW5jciwgZGVjcikge1xuXHQgICAgdGhpcy5pbmNyID0gaW5jcjtcblx0ICAgIHRoaXMuZGVjciA9IGRlY3I7XG5cdCAgICB0aGlzLl9maXJzdCA9IG51bGw7XG5cdCAgICB0aGlzLl9sYXN0ID0gbnVsbDtcblx0ICAgIHRoaXMubGVuZ3RoID0gMDtcblx0ICB9XG5cblx0ICBwdXNoKHZhbHVlKSB7XG5cdCAgICB2YXIgbm9kZTtcblx0ICAgIHRoaXMubGVuZ3RoKys7XG5cdCAgICBpZiAodHlwZW9mIHRoaXMuaW5jciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgIHRoaXMuaW5jcigpO1xuXHQgICAgfVxuXHQgICAgbm9kZSA9IHtcblx0ICAgICAgdmFsdWUsXG5cdCAgICAgIHByZXY6IHRoaXMuX2xhc3QsXG5cdCAgICAgIG5leHQ6IG51bGxcblx0ICAgIH07XG5cdCAgICBpZiAodGhpcy5fbGFzdCAhPSBudWxsKSB7XG5cdCAgICAgIHRoaXMuX2xhc3QubmV4dCA9IG5vZGU7XG5cdCAgICAgIHRoaXMuX2xhc3QgPSBub2RlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5fZmlyc3QgPSB0aGlzLl9sYXN0ID0gbm9kZTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB2b2lkIDA7XG5cdCAgfVxuXG5cdCAgc2hpZnQoKSB7XG5cdCAgICB2YXIgdmFsdWU7XG5cdCAgICBpZiAodGhpcy5fZmlyc3QgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmxlbmd0aC0tO1xuXHQgICAgICBpZiAodHlwZW9mIHRoaXMuZGVjciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgdGhpcy5kZWNyKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHZhbHVlID0gdGhpcy5fZmlyc3QudmFsdWU7XG5cdCAgICBpZiAoKHRoaXMuX2ZpcnN0ID0gdGhpcy5fZmlyc3QubmV4dCkgIT0gbnVsbCkge1xuXHQgICAgICB0aGlzLl9maXJzdC5wcmV2ID0gbnVsbDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuX2xhc3QgPSBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHZhbHVlO1xuXHQgIH1cblxuXHQgIGZpcnN0KCkge1xuXHQgICAgaWYgKHRoaXMuX2ZpcnN0ICE9IG51bGwpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0LnZhbHVlO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIGdldEFycmF5KCkge1xuXHQgICAgdmFyIG5vZGUsIHJlZiwgcmVzdWx0cztcblx0ICAgIG5vZGUgPSB0aGlzLl9maXJzdDtcblx0ICAgIHJlc3VsdHMgPSBbXTtcblx0ICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcblx0ICAgICAgcmVzdWx0cy5wdXNoKChyZWYgPSBub2RlLCBub2RlID0gbm9kZS5uZXh0LCByZWYudmFsdWUpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXN1bHRzO1xuXHQgIH1cblxuXHQgIGZvckVhY2hTaGlmdChjYikge1xuXHQgICAgdmFyIG5vZGU7XG5cdCAgICBub2RlID0gdGhpcy5zaGlmdCgpO1xuXHQgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuXHQgICAgICAoY2Iobm9kZSksIG5vZGUgPSB0aGlzLnNoaWZ0KCkpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHZvaWQgMDtcblx0ICB9XG5cblx0ICBkZWJ1ZygpIHtcblx0ICAgIHZhciBub2RlLCByZWYsIHJlZjEsIHJlZjIsIHJlc3VsdHM7XG5cdCAgICBub2RlID0gdGhpcy5fZmlyc3Q7XG5cdCAgICByZXN1bHRzID0gW107XG5cdCAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG5cdCAgICAgIHJlc3VsdHMucHVzaCgocmVmID0gbm9kZSwgbm9kZSA9IG5vZGUubmV4dCwge1xuXHQgICAgICAgIHZhbHVlOiByZWYudmFsdWUsXG5cdCAgICAgICAgcHJldjogKHJlZjEgPSByZWYucHJldikgIT0gbnVsbCA/IHJlZjEudmFsdWUgOiB2b2lkIDAsXG5cdCAgICAgICAgbmV4dDogKHJlZjIgPSByZWYubmV4dCkgIT0gbnVsbCA/IHJlZjIudmFsdWUgOiB2b2lkIDBcblx0ICAgICAgfSkpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHJlc3VsdHM7XG5cdCAgfVxuXG5cdH07XG5cblx0dmFyIERMTGlzdF8xID0gRExMaXN0O1xuXG5cdHZhciBFdmVudHM7XG5cblx0RXZlbnRzID0gY2xhc3MgRXZlbnRzIHtcblx0ICBjb25zdHJ1Y3RvcihpbnN0YW5jZSkge1xuXHQgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuXHQgICAgdGhpcy5fZXZlbnRzID0ge307XG5cdCAgICBpZiAoKHRoaXMuaW5zdGFuY2Uub24gIT0gbnVsbCkgfHwgKHRoaXMuaW5zdGFuY2Uub25jZSAhPSBudWxsKSB8fCAodGhpcy5pbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMgIT0gbnVsbCkpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gRW1pdHRlciBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBvYmplY3RcIik7XG5cdCAgICB9XG5cdCAgICB0aGlzLmluc3RhbmNlLm9uID0gKG5hbWUsIGNiKSA9PiB7XG5cdCAgICAgIHJldHVybiB0aGlzLl9hZGRMaXN0ZW5lcihuYW1lLCBcIm1hbnlcIiwgY2IpO1xuXHQgICAgfTtcblx0ICAgIHRoaXMuaW5zdGFuY2Uub25jZSA9IChuYW1lLCBjYikgPT4ge1xuXHQgICAgICByZXR1cm4gdGhpcy5fYWRkTGlzdGVuZXIobmFtZSwgXCJvbmNlXCIsIGNiKTtcblx0ICAgIH07XG5cdCAgICB0aGlzLmluc3RhbmNlLnJlbW92ZUFsbExpc3RlbmVycyA9IChuYW1lID0gbnVsbCkgPT4ge1xuXHQgICAgICBpZiAobmFtZSAhPSBudWxsKSB7XG5cdCAgICAgICAgcmV0dXJuIGRlbGV0ZSB0aGlzLl9ldmVudHNbbmFtZV07XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cyA9IHt9O1xuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIF9hZGRMaXN0ZW5lcihuYW1lLCBzdGF0dXMsIGNiKSB7XG5cdCAgICB2YXIgYmFzZTtcblx0ICAgIGlmICgoYmFzZSA9IHRoaXMuX2V2ZW50cylbbmFtZV0gPT0gbnVsbCkge1xuXHQgICAgICBiYXNlW25hbWVdID0gW107XG5cdCAgICB9XG5cdCAgICB0aGlzLl9ldmVudHNbbmFtZV0ucHVzaCh7Y2IsIHN0YXR1c30pO1xuXHQgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG5cdCAgfVxuXG5cdCAgbGlzdGVuZXJDb3VudChuYW1lKSB7XG5cdCAgICBpZiAodGhpcy5fZXZlbnRzW25hbWVdICE9IG51bGwpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50c1tuYW1lXS5sZW5ndGg7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gMDtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBhc3luYyB0cmlnZ2VyKG5hbWUsIC4uLmFyZ3MpIHtcblx0ICAgIHZhciBlLCBwcm9taXNlcztcblx0ICAgIHRyeSB7XG5cdCAgICAgIGlmIChuYW1lICE9PSBcImRlYnVnXCIpIHtcblx0ICAgICAgICB0aGlzLnRyaWdnZXIoXCJkZWJ1Z1wiLCBgRXZlbnQgdHJpZ2dlcmVkOiAke25hbWV9YCwgYXJncyk7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuX2V2ZW50c1tuYW1lXSA9PSBudWxsKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXSA9IHRoaXMuX2V2ZW50c1tuYW1lXS5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHtcblx0ICAgICAgICByZXR1cm4gbGlzdGVuZXIuc3RhdHVzICE9PSBcIm5vbmVcIjtcblx0ICAgICAgfSk7XG5cdCAgICAgIHByb21pc2VzID0gdGhpcy5fZXZlbnRzW25hbWVdLm1hcChhc3luYyhsaXN0ZW5lcikgPT4ge1xuXHQgICAgICAgIHZhciBlLCByZXR1cm5lZDtcblx0ICAgICAgICBpZiAobGlzdGVuZXIuc3RhdHVzID09PSBcIm5vbmVcIikge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAobGlzdGVuZXIuc3RhdHVzID09PSBcIm9uY2VcIikge1xuXHQgICAgICAgICAgbGlzdGVuZXIuc3RhdHVzID0gXCJub25lXCI7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICByZXR1cm5lZCA9IHR5cGVvZiBsaXN0ZW5lci5jYiA9PT0gXCJmdW5jdGlvblwiID8gbGlzdGVuZXIuY2IoLi4uYXJncykgOiB2b2lkIDA7XG5cdCAgICAgICAgICBpZiAodHlwZW9mIChyZXR1cm5lZCAhPSBudWxsID8gcmV0dXJuZWQudGhlbiA6IHZvaWQgMCkgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGF3YWl0IHJldHVybmVkKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiByZXR1cm5lZDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgICAgZSA9IGVycm9yO1xuXHQgICAgICAgICAge1xuXHQgICAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJlcnJvclwiLCBlKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiAoKGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKSkpLmZpbmQoZnVuY3Rpb24oeCkge1xuXHQgICAgICAgIHJldHVybiB4ICE9IG51bGw7XG5cdCAgICAgIH0pO1xuXHQgICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgZSA9IGVycm9yO1xuXHQgICAgICB7XG5cdCAgICAgICAgdGhpcy50cmlnZ2VyKFwiZXJyb3JcIiwgZSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgfVxuXG5cdH07XG5cblx0dmFyIEV2ZW50c18xID0gRXZlbnRzO1xuXG5cdHZhciBETExpc3QkMSwgRXZlbnRzJDEsIFF1ZXVlcztcblxuXHRETExpc3QkMSA9IERMTGlzdF8xO1xuXG5cdEV2ZW50cyQxID0gRXZlbnRzXzE7XG5cblx0UXVldWVzID0gY2xhc3MgUXVldWVzIHtcblx0ICBjb25zdHJ1Y3RvcihudW1fcHJpb3JpdGllcykge1xuXHQgICAgdmFyIGk7XG5cdCAgICB0aGlzLkV2ZW50cyA9IG5ldyBFdmVudHMkMSh0aGlzKTtcblx0ICAgIHRoaXMuX2xlbmd0aCA9IDA7XG5cdCAgICB0aGlzLl9saXN0cyA9IChmdW5jdGlvbigpIHtcblx0ICAgICAgdmFyIGosIHJlZiwgcmVzdWx0cztcblx0ICAgICAgcmVzdWx0cyA9IFtdO1xuXHQgICAgICBmb3IgKGkgPSBqID0gMSwgcmVmID0gbnVtX3ByaW9yaXRpZXM7ICgxIDw9IHJlZiA/IGogPD0gcmVmIDogaiA+PSByZWYpOyBpID0gMSA8PSByZWYgPyArK2ogOiAtLWopIHtcblx0ICAgICAgICByZXN1bHRzLnB1c2gobmV3IERMTGlzdCQxKCgoKSA9PiB7XG5cdCAgICAgICAgICByZXR1cm4gdGhpcy5pbmNyKCk7XG5cdCAgICAgICAgfSksICgoKSA9PiB7XG5cdCAgICAgICAgICByZXR1cm4gdGhpcy5kZWNyKCk7XG5cdCAgICAgICAgfSkpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcmVzdWx0cztcblx0ICAgIH0pLmNhbGwodGhpcyk7XG5cdCAgfVxuXG5cdCAgaW5jcigpIHtcblx0ICAgIGlmICh0aGlzLl9sZW5ndGgrKyA9PT0gMCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5FdmVudHMudHJpZ2dlcihcImxlZnR6ZXJvXCIpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIGRlY3IoKSB7XG5cdCAgICBpZiAoLS10aGlzLl9sZW5ndGggPT09IDApIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuRXZlbnRzLnRyaWdnZXIoXCJ6ZXJvXCIpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHB1c2goam9iKSB7XG5cdCAgICByZXR1cm4gdGhpcy5fbGlzdHNbam9iLm9wdGlvbnMucHJpb3JpdHldLnB1c2goam9iKTtcblx0ICB9XG5cblx0ICBxdWV1ZWQocHJpb3JpdHkpIHtcblx0ICAgIGlmIChwcmlvcml0eSAhPSBudWxsKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLl9saXN0c1twcmlvcml0eV0ubGVuZ3RoO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBzaGlmdEFsbChmbikge1xuXHQgICAgcmV0dXJuIHRoaXMuX2xpc3RzLmZvckVhY2goZnVuY3Rpb24obGlzdCkge1xuXHQgICAgICByZXR1cm4gbGlzdC5mb3JFYWNoU2hpZnQoZm4pO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cdCAgZ2V0Rmlyc3QoYXJyID0gdGhpcy5fbGlzdHMpIHtcblx0ICAgIHZhciBqLCBsZW4sIGxpc3Q7XG5cdCAgICBmb3IgKGogPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcblx0ICAgICAgbGlzdCA9IGFycltqXTtcblx0ICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIHJldHVybiBsaXN0O1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gW107XG5cdCAgfVxuXG5cdCAgc2hpZnRMYXN0RnJvbShwcmlvcml0eSkge1xuXHQgICAgcmV0dXJuIHRoaXMuZ2V0Rmlyc3QodGhpcy5fbGlzdHMuc2xpY2UocHJpb3JpdHkpLnJldmVyc2UoKSkuc2hpZnQoKTtcblx0ICB9XG5cblx0fTtcblxuXHR2YXIgUXVldWVzXzEgPSBRdWV1ZXM7XG5cblx0dmFyIEJvdHRsZW5lY2tFcnJvcjtcblxuXHRCb3R0bGVuZWNrRXJyb3IgPSBjbGFzcyBCb3R0bGVuZWNrRXJyb3IgZXh0ZW5kcyBFcnJvciB7fTtcblxuXHR2YXIgQm90dGxlbmVja0Vycm9yXzEgPSBCb3R0bGVuZWNrRXJyb3I7XG5cblx0dmFyIEJvdHRsZW5lY2tFcnJvciQxLCBERUZBVUxUX1BSSU9SSVRZLCBKb2IsIE5VTV9QUklPUklUSUVTLCBwYXJzZXIkMTtcblxuXHROVU1fUFJJT1JJVElFUyA9IDEwO1xuXG5cdERFRkFVTFRfUFJJT1JJVFkgPSA1O1xuXG5cdHBhcnNlciQxID0gcGFyc2VyO1xuXG5cdEJvdHRsZW5lY2tFcnJvciQxID0gQm90dGxlbmVja0Vycm9yXzE7XG5cblx0Sm9iID0gY2xhc3MgSm9iIHtcblx0ICBjb25zdHJ1Y3Rvcih0YXNrLCBhcmdzLCBvcHRpb25zLCBqb2JEZWZhdWx0cywgcmVqZWN0T25Ecm9wLCBFdmVudHMsIF9zdGF0ZXMsIFByb21pc2UpIHtcblx0ICAgIHRoaXMudGFzayA9IHRhc2s7XG5cdCAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuXHQgICAgdGhpcy5yZWplY3RPbkRyb3AgPSByZWplY3RPbkRyb3A7XG5cdCAgICB0aGlzLkV2ZW50cyA9IEV2ZW50cztcblx0ICAgIHRoaXMuX3N0YXRlcyA9IF9zdGF0ZXM7XG5cdCAgICB0aGlzLlByb21pc2UgPSBQcm9taXNlO1xuXHQgICAgdGhpcy5vcHRpb25zID0gcGFyc2VyJDEubG9hZChvcHRpb25zLCBqb2JEZWZhdWx0cyk7XG5cdCAgICB0aGlzLm9wdGlvbnMucHJpb3JpdHkgPSB0aGlzLl9zYW5pdGl6ZVByaW9yaXR5KHRoaXMub3B0aW9ucy5wcmlvcml0eSk7XG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmlkID09PSBqb2JEZWZhdWx0cy5pZCkge1xuXHQgICAgICB0aGlzLm9wdGlvbnMuaWQgPSBgJHt0aGlzLm9wdGlvbnMuaWR9LSR7dGhpcy5fcmFuZG9tSW5kZXgoKX1gO1xuXHQgICAgfVxuXHQgICAgdGhpcy5wcm9taXNlID0gbmV3IHRoaXMuUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcblx0ICAgICAgdGhpcy5fcmVzb2x2ZSA9IF9yZXNvbHZlO1xuXHQgICAgICB0aGlzLl9yZWplY3QgPSBfcmVqZWN0O1xuXHQgICAgfSk7XG5cdCAgICB0aGlzLnJldHJ5Q291bnQgPSAwO1xuXHQgIH1cblxuXHQgIF9zYW5pdGl6ZVByaW9yaXR5KHByaW9yaXR5KSB7XG5cdCAgICB2YXIgc1Byb3BlcnR5O1xuXHQgICAgc1Byb3BlcnR5ID0gfn5wcmlvcml0eSAhPT0gcHJpb3JpdHkgPyBERUZBVUxUX1BSSU9SSVRZIDogcHJpb3JpdHk7XG5cdCAgICBpZiAoc1Byb3BlcnR5IDwgMCkge1xuXHQgICAgICByZXR1cm4gMDtcblx0ICAgIH0gZWxzZSBpZiAoc1Byb3BlcnR5ID4gTlVNX1BSSU9SSVRJRVMgLSAxKSB7XG5cdCAgICAgIHJldHVybiBOVU1fUFJJT1JJVElFUyAtIDE7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gc1Byb3BlcnR5O1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIF9yYW5kb21JbmRleCgpIHtcblx0ICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcblx0ICB9XG5cblx0ICBkb0Ryb3Aoe2Vycm9yLCBtZXNzYWdlID0gXCJUaGlzIGpvYiBoYXMgYmVlbiBkcm9wcGVkIGJ5IEJvdHRsZW5lY2tcIn0gPSB7fSkge1xuXHQgICAgaWYgKHRoaXMuX3N0YXRlcy5yZW1vdmUodGhpcy5vcHRpb25zLmlkKSkge1xuXHQgICAgICBpZiAodGhpcy5yZWplY3RPbkRyb3ApIHtcblx0ICAgICAgICB0aGlzLl9yZWplY3QoZXJyb3IgIT0gbnVsbCA/IGVycm9yIDogbmV3IEJvdHRsZW5lY2tFcnJvciQxKG1lc3NhZ2UpKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLkV2ZW50cy50cmlnZ2VyKFwiZHJvcHBlZFwiLCB7YXJnczogdGhpcy5hcmdzLCBvcHRpb25zOiB0aGlzLm9wdGlvbnMsIHRhc2s6IHRoaXMudGFzaywgcHJvbWlzZTogdGhpcy5wcm9taXNlfSk7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIF9hc3NlcnRTdGF0dXMoZXhwZWN0ZWQpIHtcblx0ICAgIHZhciBzdGF0dXM7XG5cdCAgICBzdGF0dXMgPSB0aGlzLl9zdGF0ZXMuam9iU3RhdHVzKHRoaXMub3B0aW9ucy5pZCk7XG5cdCAgICBpZiAoIShzdGF0dXMgPT09IGV4cGVjdGVkIHx8IChleHBlY3RlZCA9PT0gXCJET05FXCIgJiYgc3RhdHVzID09PSBudWxsKSkpIHtcblx0ICAgICAgdGhyb3cgbmV3IEJvdHRsZW5lY2tFcnJvciQxKGBJbnZhbGlkIGpvYiBzdGF0dXMgJHtzdGF0dXN9LCBleHBlY3RlZCAke2V4cGVjdGVkfS4gUGxlYXNlIG9wZW4gYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL1NHcm9uZGluL2JvdHRsZW5lY2svaXNzdWVzYCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgZG9SZWNlaXZlKCkge1xuXHQgICAgdGhpcy5fc3RhdGVzLnN0YXJ0KHRoaXMub3B0aW9ucy5pZCk7XG5cdCAgICByZXR1cm4gdGhpcy5FdmVudHMudHJpZ2dlcihcInJlY2VpdmVkXCIsIHthcmdzOiB0aGlzLmFyZ3MsIG9wdGlvbnM6IHRoaXMub3B0aW9uc30pO1xuXHQgIH1cblxuXHQgIGRvUXVldWUocmVhY2hlZEhXTSwgYmxvY2tlZCkge1xuXHQgICAgdGhpcy5fYXNzZXJ0U3RhdHVzKFwiUkVDRUlWRURcIik7XG5cdCAgICB0aGlzLl9zdGF0ZXMubmV4dCh0aGlzLm9wdGlvbnMuaWQpO1xuXHQgICAgcmV0dXJuIHRoaXMuRXZlbnRzLnRyaWdnZXIoXCJxdWV1ZWRcIiwge2FyZ3M6IHRoaXMuYXJncywgb3B0aW9uczogdGhpcy5vcHRpb25zLCByZWFjaGVkSFdNLCBibG9ja2VkfSk7XG5cdCAgfVxuXG5cdCAgZG9SdW4oKSB7XG5cdCAgICBpZiAodGhpcy5yZXRyeUNvdW50ID09PSAwKSB7XG5cdCAgICAgIHRoaXMuX2Fzc2VydFN0YXR1cyhcIlFVRVVFRFwiKTtcblx0ICAgICAgdGhpcy5fc3RhdGVzLm5leHQodGhpcy5vcHRpb25zLmlkKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuX2Fzc2VydFN0YXR1cyhcIkVYRUNVVElOR1wiKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLkV2ZW50cy50cmlnZ2VyKFwic2NoZWR1bGVkXCIsIHthcmdzOiB0aGlzLmFyZ3MsIG9wdGlvbnM6IHRoaXMub3B0aW9uc30pO1xuXHQgIH1cblxuXHQgIGFzeW5jIGRvRXhlY3V0ZShjaGFpbmVkLCBjbGVhckdsb2JhbFN0YXRlLCBydW4sIGZyZWUpIHtcblx0ICAgIHZhciBlcnJvciwgZXZlbnRJbmZvLCBwYXNzZWQ7XG5cdCAgICBpZiAodGhpcy5yZXRyeUNvdW50ID09PSAwKSB7XG5cdCAgICAgIHRoaXMuX2Fzc2VydFN0YXR1cyhcIlJVTk5JTkdcIik7XG5cdCAgICAgIHRoaXMuX3N0YXRlcy5uZXh0KHRoaXMub3B0aW9ucy5pZCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLl9hc3NlcnRTdGF0dXMoXCJFWEVDVVRJTkdcIik7XG5cdCAgICB9XG5cdCAgICBldmVudEluZm8gPSB7YXJnczogdGhpcy5hcmdzLCBvcHRpb25zOiB0aGlzLm9wdGlvbnMsIHJldHJ5Q291bnQ6IHRoaXMucmV0cnlDb3VudH07XG5cdCAgICB0aGlzLkV2ZW50cy50cmlnZ2VyKFwiZXhlY3V0aW5nXCIsIGV2ZW50SW5mbyk7XG5cdCAgICB0cnkge1xuXHQgICAgICBwYXNzZWQgPSAoYXdhaXQgKGNoYWluZWQgIT0gbnVsbCA/IGNoYWluZWQuc2NoZWR1bGUodGhpcy5vcHRpb25zLCB0aGlzLnRhc2ssIC4uLnRoaXMuYXJncykgOiB0aGlzLnRhc2soLi4udGhpcy5hcmdzKSkpO1xuXHQgICAgICBpZiAoY2xlYXJHbG9iYWxTdGF0ZSgpKSB7XG5cdCAgICAgICAgdGhpcy5kb0RvbmUoZXZlbnRJbmZvKTtcblx0ICAgICAgICBhd2FpdCBmcmVlKHRoaXMub3B0aW9ucywgZXZlbnRJbmZvKTtcblx0ICAgICAgICB0aGlzLl9hc3NlcnRTdGF0dXMoXCJET05FXCIpO1xuXHQgICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHBhc3NlZCk7XG5cdCAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuXHQgICAgICBlcnJvciA9IGVycm9yMTtcblx0ICAgICAgcmV0dXJuIHRoaXMuX29uRmFpbHVyZShlcnJvciwgZXZlbnRJbmZvLCBjbGVhckdsb2JhbFN0YXRlLCBydW4sIGZyZWUpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIGRvRXhwaXJlKGNsZWFyR2xvYmFsU3RhdGUsIHJ1biwgZnJlZSkge1xuXHQgICAgdmFyIGVycm9yLCBldmVudEluZm87XG5cdCAgICBpZiAodGhpcy5fc3RhdGVzLmpvYlN0YXR1cyh0aGlzLm9wdGlvbnMuaWQgPT09IFwiUlVOTklOR1wiKSkge1xuXHQgICAgICB0aGlzLl9zdGF0ZXMubmV4dCh0aGlzLm9wdGlvbnMuaWQpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5fYXNzZXJ0U3RhdHVzKFwiRVhFQ1VUSU5HXCIpO1xuXHQgICAgZXZlbnRJbmZvID0ge2FyZ3M6IHRoaXMuYXJncywgb3B0aW9uczogdGhpcy5vcHRpb25zLCByZXRyeUNvdW50OiB0aGlzLnJldHJ5Q291bnR9O1xuXHQgICAgZXJyb3IgPSBuZXcgQm90dGxlbmVja0Vycm9yJDEoYFRoaXMgam9iIHRpbWVkIG91dCBhZnRlciAke3RoaXMub3B0aW9ucy5leHBpcmF0aW9ufSBtcy5gKTtcblx0ICAgIHJldHVybiB0aGlzLl9vbkZhaWx1cmUoZXJyb3IsIGV2ZW50SW5mbywgY2xlYXJHbG9iYWxTdGF0ZSwgcnVuLCBmcmVlKTtcblx0ICB9XG5cblx0ICBhc3luYyBfb25GYWlsdXJlKGVycm9yLCBldmVudEluZm8sIGNsZWFyR2xvYmFsU3RhdGUsIHJ1biwgZnJlZSkge1xuXHQgICAgdmFyIHJldHJ5LCByZXRyeUFmdGVyO1xuXHQgICAgaWYgKGNsZWFyR2xvYmFsU3RhdGUoKSkge1xuXHQgICAgICByZXRyeSA9IChhd2FpdCB0aGlzLkV2ZW50cy50cmlnZ2VyKFwiZmFpbGVkXCIsIGVycm9yLCBldmVudEluZm8pKTtcblx0ICAgICAgaWYgKHJldHJ5ICE9IG51bGwpIHtcblx0ICAgICAgICByZXRyeUFmdGVyID0gfn5yZXRyeTtcblx0ICAgICAgICB0aGlzLkV2ZW50cy50cmlnZ2VyKFwicmV0cnlcIiwgYFJldHJ5aW5nICR7dGhpcy5vcHRpb25zLmlkfSBhZnRlciAke3JldHJ5QWZ0ZXJ9IG1zYCwgZXZlbnRJbmZvKTtcblx0ICAgICAgICB0aGlzLnJldHJ5Q291bnQrKztcblx0ICAgICAgICByZXR1cm4gcnVuKHJldHJ5QWZ0ZXIpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuZG9Eb25lKGV2ZW50SW5mbyk7XG5cdCAgICAgICAgYXdhaXQgZnJlZSh0aGlzLm9wdGlvbnMsIGV2ZW50SW5mbyk7XG5cdCAgICAgICAgdGhpcy5fYXNzZXJ0U3RhdHVzKFwiRE9ORVwiKTtcblx0ICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KGVycm9yKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblxuXHQgIGRvRG9uZShldmVudEluZm8pIHtcblx0ICAgIHRoaXMuX2Fzc2VydFN0YXR1cyhcIkVYRUNVVElOR1wiKTtcblx0ICAgIHRoaXMuX3N0YXRlcy5uZXh0KHRoaXMub3B0aW9ucy5pZCk7XG5cdCAgICByZXR1cm4gdGhpcy5FdmVudHMudHJpZ2dlcihcImRvbmVcIiwgZXZlbnRJbmZvKTtcblx0ICB9XG5cblx0fTtcblxuXHR2YXIgSm9iXzEgPSBKb2I7XG5cblx0dmFyIEJvdHRsZW5lY2tFcnJvciQyLCBMb2NhbERhdGFzdG9yZSwgcGFyc2VyJDI7XG5cblx0cGFyc2VyJDIgPSBwYXJzZXI7XG5cblx0Qm90dGxlbmVja0Vycm9yJDIgPSBCb3R0bGVuZWNrRXJyb3JfMTtcblxuXHRMb2NhbERhdGFzdG9yZSA9IGNsYXNzIExvY2FsRGF0YXN0b3JlIHtcblx0ICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgc3RvcmVPcHRpb25zLCBzdG9yZUluc3RhbmNlT3B0aW9ucykge1xuXHQgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuXHQgICAgdGhpcy5zdG9yZU9wdGlvbnMgPSBzdG9yZU9wdGlvbnM7XG5cdCAgICB0aGlzLmNsaWVudElkID0gdGhpcy5pbnN0YW5jZS5fcmFuZG9tSW5kZXgoKTtcblx0ICAgIHBhcnNlciQyLmxvYWQoc3RvcmVJbnN0YW5jZU9wdGlvbnMsIHN0b3JlSW5zdGFuY2VPcHRpb25zLCB0aGlzKTtcblx0ICAgIHRoaXMuX25leHRSZXF1ZXN0ID0gdGhpcy5fbGFzdFJlc2Vydm9pclJlZnJlc2ggPSB0aGlzLl9sYXN0UmVzZXJ2b2lySW5jcmVhc2UgPSBEYXRlLm5vdygpO1xuXHQgICAgdGhpcy5fcnVubmluZyA9IDA7XG5cdCAgICB0aGlzLl9kb25lID0gMDtcblx0ICAgIHRoaXMuX3VuYmxvY2tUaW1lID0gMDtcblx0ICAgIHRoaXMucmVhZHkgPSB0aGlzLlByb21pc2UucmVzb2x2ZSgpO1xuXHQgICAgdGhpcy5jbGllbnRzID0ge307XG5cdCAgICB0aGlzLl9zdGFydEhlYXJ0YmVhdCgpO1xuXHQgIH1cblxuXHQgIF9zdGFydEhlYXJ0YmVhdCgpIHtcblx0ICAgIHZhciBiYXNlO1xuXHQgICAgaWYgKCh0aGlzLmhlYXJ0YmVhdCA9PSBudWxsKSAmJiAoKCh0aGlzLnN0b3JlT3B0aW9ucy5yZXNlcnZvaXJSZWZyZXNoSW50ZXJ2YWwgIT0gbnVsbCkgJiYgKHRoaXMuc3RvcmVPcHRpb25zLnJlc2Vydm9pclJlZnJlc2hBbW91bnQgIT0gbnVsbCkpIHx8ICgodGhpcy5zdG9yZU9wdGlvbnMucmVzZXJ2b2lySW5jcmVhc2VJbnRlcnZhbCAhPSBudWxsKSAmJiAodGhpcy5zdG9yZU9wdGlvbnMucmVzZXJ2b2lySW5jcmVhc2VBbW91bnQgIT0gbnVsbCkpKSkge1xuXHQgICAgICByZXR1cm4gdHlwZW9mIChiYXNlID0gKHRoaXMuaGVhcnRiZWF0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHQgICAgICAgIHZhciBhbW91bnQsIGluY3IsIG1heGltdW0sIG5vdywgcmVzZXJ2b2lyO1xuXHQgICAgICAgIG5vdyA9IERhdGUubm93KCk7XG5cdCAgICAgICAgaWYgKCh0aGlzLnN0b3JlT3B0aW9ucy5yZXNlcnZvaXJSZWZyZXNoSW50ZXJ2YWwgIT0gbnVsbCkgJiYgbm93ID49IHRoaXMuX2xhc3RSZXNlcnZvaXJSZWZyZXNoICsgdGhpcy5zdG9yZU9wdGlvbnMucmVzZXJ2b2lyUmVmcmVzaEludGVydmFsKSB7XG5cdCAgICAgICAgICB0aGlzLl9sYXN0UmVzZXJ2b2lyUmVmcmVzaCA9IG5vdztcblx0ICAgICAgICAgIHRoaXMuc3RvcmVPcHRpb25zLnJlc2Vydm9pciA9IHRoaXMuc3RvcmVPcHRpb25zLnJlc2Vydm9pclJlZnJlc2hBbW91bnQ7XG5cdCAgICAgICAgICB0aGlzLmluc3RhbmNlLl9kcmFpbkFsbCh0aGlzLmNvbXB1dGVDYXBhY2l0eSgpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKCh0aGlzLnN0b3JlT3B0aW9ucy5yZXNlcnZvaXJJbmNyZWFzZUludGVydmFsICE9IG51bGwpICYmIG5vdyA+PSB0aGlzLl9sYXN0UmVzZXJ2b2lySW5jcmVhc2UgKyB0aGlzLnN0b3JlT3B0aW9ucy5yZXNlcnZvaXJJbmNyZWFzZUludGVydmFsKSB7XG5cdCAgICAgICAgICAoe1xuXHQgICAgICAgICAgICByZXNlcnZvaXJJbmNyZWFzZUFtb3VudDogYW1vdW50LFxuXHQgICAgICAgICAgICByZXNlcnZvaXJJbmNyZWFzZU1heGltdW06IG1heGltdW0sXG5cdCAgICAgICAgICAgIHJlc2Vydm9pclxuXHQgICAgICAgICAgfSA9IHRoaXMuc3RvcmVPcHRpb25zKTtcblx0ICAgICAgICAgIHRoaXMuX2xhc3RSZXNlcnZvaXJJbmNyZWFzZSA9IG5vdztcblx0ICAgICAgICAgIGluY3IgPSBtYXhpbXVtICE9IG51bGwgPyBNYXRoLm1pbihhbW91bnQsIG1heGltdW0gLSByZXNlcnZvaXIpIDogYW1vdW50O1xuXHQgICAgICAgICAgaWYgKGluY3IgPiAwKSB7XG5cdCAgICAgICAgICAgIHRoaXMuc3RvcmVPcHRpb25zLnJlc2Vydm9pciArPSBpbmNyO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5fZHJhaW5BbGwodGhpcy5jb21wdXRlQ2FwYWNpdHkoKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLmhlYXJ0YmVhdEludGVydmFsKSkpLnVucmVmID09PSBcImZ1bmN0aW9uXCIgPyBiYXNlLnVucmVmKCkgOiB2b2lkIDA7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJ0YmVhdCk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgYXN5bmMgX19wdWJsaXNoX18obWVzc2FnZSkge1xuXHQgICAgYXdhaXQgdGhpcy55aWVsZExvb3AoKTtcblx0ICAgIHJldHVybiB0aGlzLmluc3RhbmNlLkV2ZW50cy50cmlnZ2VyKFwibWVzc2FnZVwiLCBtZXNzYWdlLnRvU3RyaW5nKCkpO1xuXHQgIH1cblxuXHQgIGFzeW5jIF9fZGlzY29ubmVjdF9fKGZsdXNoKSB7XG5cdCAgICBhd2FpdCB0aGlzLnlpZWxkTG9vcCgpO1xuXHQgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJ0YmVhdCk7XG5cdCAgICByZXR1cm4gdGhpcy5Qcm9taXNlLnJlc29sdmUoKTtcblx0ICB9XG5cblx0ICB5aWVsZExvb3AodCA9IDApIHtcblx0ICAgIHJldHVybiBuZXcgdGhpcy5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0KTtcblx0ICAgIH0pO1xuXHQgIH1cblxuXHQgIGNvbXB1dGVQZW5hbHR5KCkge1xuXHQgICAgdmFyIHJlZjtcblx0ICAgIHJldHVybiAocmVmID0gdGhpcy5zdG9yZU9wdGlvbnMucGVuYWx0eSkgIT0gbnVsbCA/IHJlZiA6ICgxNSAqIHRoaXMuc3RvcmVPcHRpb25zLm1pblRpbWUpIHx8IDUwMDA7XG5cdCAgfVxuXG5cdCAgYXN5bmMgX191cGRhdGVTZXR0aW5nc19fKG9wdGlvbnMpIHtcblx0ICAgIGF3YWl0IHRoaXMueWllbGRMb29wKCk7XG5cdCAgICBwYXJzZXIkMi5vdmVyd3JpdGUob3B0aW9ucywgb3B0aW9ucywgdGhpcy5zdG9yZU9wdGlvbnMpO1xuXHQgICAgdGhpcy5fc3RhcnRIZWFydGJlYXQoKTtcblx0ICAgIHRoaXMuaW5zdGFuY2UuX2RyYWluQWxsKHRoaXMuY29tcHV0ZUNhcGFjaXR5KCkpO1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXG5cdCAgYXN5bmMgX19ydW5uaW5nX18oKSB7XG5cdCAgICBhd2FpdCB0aGlzLnlpZWxkTG9vcCgpO1xuXHQgICAgcmV0dXJuIHRoaXMuX3J1bm5pbmc7XG5cdCAgfVxuXG5cdCAgYXN5bmMgX19xdWV1ZWRfXygpIHtcblx0ICAgIGF3YWl0IHRoaXMueWllbGRMb29wKCk7XG5cdCAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5xdWV1ZWQoKTtcblx0ICB9XG5cblx0ICBhc3luYyBfX2RvbmVfXygpIHtcblx0ICAgIGF3YWl0IHRoaXMueWllbGRMb29wKCk7XG5cdCAgICByZXR1cm4gdGhpcy5fZG9uZTtcblx0ICB9XG5cblx0ICBhc3luYyBfX2dyb3VwQ2hlY2tfXyh0aW1lKSB7XG5cdCAgICBhd2FpdCB0aGlzLnlpZWxkTG9vcCgpO1xuXHQgICAgcmV0dXJuICh0aGlzLl9uZXh0UmVxdWVzdCArIHRoaXMudGltZW91dCkgPCB0aW1lO1xuXHQgIH1cblxuXHQgIGNvbXB1dGVDYXBhY2l0eSgpIHtcblx0ICAgIHZhciBtYXhDb25jdXJyZW50LCByZXNlcnZvaXI7XG5cdCAgICAoe21heENvbmN1cnJlbnQsIHJlc2Vydm9pcn0gPSB0aGlzLnN0b3JlT3B0aW9ucyk7XG5cdCAgICBpZiAoKG1heENvbmN1cnJlbnQgIT0gbnVsbCkgJiYgKHJlc2Vydm9pciAhPSBudWxsKSkge1xuXHQgICAgICByZXR1cm4gTWF0aC5taW4obWF4Q29uY3VycmVudCAtIHRoaXMuX3J1bm5pbmcsIHJlc2Vydm9pcik7XG5cdCAgICB9IGVsc2UgaWYgKG1heENvbmN1cnJlbnQgIT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gbWF4Q29uY3VycmVudCAtIHRoaXMuX3J1bm5pbmc7XG5cdCAgICB9IGVsc2UgaWYgKHJlc2Vydm9pciAhPSBudWxsKSB7XG5cdCAgICAgIHJldHVybiByZXNlcnZvaXI7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBjb25kaXRpb25zQ2hlY2sod2VpZ2h0KSB7XG5cdCAgICB2YXIgY2FwYWNpdHk7XG5cdCAgICBjYXBhY2l0eSA9IHRoaXMuY29tcHV0ZUNhcGFjaXR5KCk7XG5cdCAgICByZXR1cm4gKGNhcGFjaXR5ID09IG51bGwpIHx8IHdlaWdodCA8PSBjYXBhY2l0eTtcblx0ICB9XG5cblx0ICBhc3luYyBfX2luY3JlbWVudFJlc2Vydm9pcl9fKGluY3IpIHtcblx0ICAgIHZhciByZXNlcnZvaXI7XG5cdCAgICBhd2FpdCB0aGlzLnlpZWxkTG9vcCgpO1xuXHQgICAgcmVzZXJ2b2lyID0gdGhpcy5zdG9yZU9wdGlvbnMucmVzZXJ2b2lyICs9IGluY3I7XG5cdCAgICB0aGlzLmluc3RhbmNlLl9kcmFpbkFsbCh0aGlzLmNvbXB1dGVDYXBhY2l0eSgpKTtcblx0ICAgIHJldHVybiByZXNlcnZvaXI7XG5cdCAgfVxuXG5cdCAgYXN5bmMgX19jdXJyZW50UmVzZXJ2b2lyX18oKSB7XG5cdCAgICBhd2FpdCB0aGlzLnlpZWxkTG9vcCgpO1xuXHQgICAgcmV0dXJuIHRoaXMuc3RvcmVPcHRpb25zLnJlc2Vydm9pcjtcblx0ICB9XG5cblx0ICBpc0Jsb2NrZWQobm93KSB7XG5cdCAgICByZXR1cm4gdGhpcy5fdW5ibG9ja1RpbWUgPj0gbm93O1xuXHQgIH1cblxuXHQgIGNoZWNrKHdlaWdodCwgbm93KSB7XG5cdCAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zQ2hlY2sod2VpZ2h0KSAmJiAodGhpcy5fbmV4dFJlcXVlc3QgLSBub3cpIDw9IDA7XG5cdCAgfVxuXG5cdCAgYXN5bmMgX19jaGVja19fKHdlaWdodCkge1xuXHQgICAgdmFyIG5vdztcblx0ICAgIGF3YWl0IHRoaXMueWllbGRMb29wKCk7XG5cdCAgICBub3cgPSBEYXRlLm5vdygpO1xuXHQgICAgcmV0dXJuIHRoaXMuY2hlY2sod2VpZ2h0LCBub3cpO1xuXHQgIH1cblxuXHQgIGFzeW5jIF9fcmVnaXN0ZXJfXyhpbmRleCwgd2VpZ2h0LCBleHBpcmF0aW9uKSB7XG5cdCAgICB2YXIgbm93LCB3YWl0O1xuXHQgICAgYXdhaXQgdGhpcy55aWVsZExvb3AoKTtcblx0ICAgIG5vdyA9IERhdGUubm93KCk7XG5cdCAgICBpZiAodGhpcy5jb25kaXRpb25zQ2hlY2sod2VpZ2h0KSkge1xuXHQgICAgICB0aGlzLl9ydW5uaW5nICs9IHdlaWdodDtcblx0ICAgICAgaWYgKHRoaXMuc3RvcmVPcHRpb25zLnJlc2Vydm9pciAhPSBudWxsKSB7XG5cdCAgICAgICAgdGhpcy5zdG9yZU9wdGlvbnMucmVzZXJ2b2lyIC09IHdlaWdodDtcblx0ICAgICAgfVxuXHQgICAgICB3YWl0ID0gTWF0aC5tYXgodGhpcy5fbmV4dFJlcXVlc3QgLSBub3csIDApO1xuXHQgICAgICB0aGlzLl9uZXh0UmVxdWVzdCA9IG5vdyArIHdhaXQgKyB0aGlzLnN0b3JlT3B0aW9ucy5taW5UaW1lO1xuXHQgICAgICByZXR1cm4ge1xuXHQgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG5cdCAgICAgICAgd2FpdCxcblx0ICAgICAgICByZXNlcnZvaXI6IHRoaXMuc3RvcmVPcHRpb25zLnJlc2Vydm9pclxuXHQgICAgICB9O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHtcblx0ICAgICAgICBzdWNjZXNzOiBmYWxzZVxuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHN0cmF0ZWd5SXNCbG9jaygpIHtcblx0ICAgIHJldHVybiB0aGlzLnN0b3JlT3B0aW9ucy5zdHJhdGVneSA9PT0gMztcblx0ICB9XG5cblx0ICBhc3luYyBfX3N1Ym1pdF9fKHF1ZXVlTGVuZ3RoLCB3ZWlnaHQpIHtcblx0ICAgIHZhciBibG9ja2VkLCBub3csIHJlYWNoZWRIV007XG5cdCAgICBhd2FpdCB0aGlzLnlpZWxkTG9vcCgpO1xuXHQgICAgaWYgKCh0aGlzLnN0b3JlT3B0aW9ucy5tYXhDb25jdXJyZW50ICE9IG51bGwpICYmIHdlaWdodCA+IHRoaXMuc3RvcmVPcHRpb25zLm1heENvbmN1cnJlbnQpIHtcblx0ICAgICAgdGhyb3cgbmV3IEJvdHRsZW5lY2tFcnJvciQyKGBJbXBvc3NpYmxlIHRvIGFkZCBhIGpvYiBoYXZpbmcgYSB3ZWlnaHQgb2YgJHt3ZWlnaHR9IHRvIGEgbGltaXRlciBoYXZpbmcgYSBtYXhDb25jdXJyZW50IHNldHRpbmcgb2YgJHt0aGlzLnN0b3JlT3B0aW9ucy5tYXhDb25jdXJyZW50fWApO1xuXHQgICAgfVxuXHQgICAgbm93ID0gRGF0ZS5ub3coKTtcblx0ICAgIHJlYWNoZWRIV00gPSAodGhpcy5zdG9yZU9wdGlvbnMuaGlnaFdhdGVyICE9IG51bGwpICYmIHF1ZXVlTGVuZ3RoID09PSB0aGlzLnN0b3JlT3B0aW9ucy5oaWdoV2F0ZXIgJiYgIXRoaXMuY2hlY2sod2VpZ2h0LCBub3cpO1xuXHQgICAgYmxvY2tlZCA9IHRoaXMuc3RyYXRlZ3lJc0Jsb2NrKCkgJiYgKHJlYWNoZWRIV00gfHwgdGhpcy5pc0Jsb2NrZWQobm93KSk7XG5cdCAgICBpZiAoYmxvY2tlZCkge1xuXHQgICAgICB0aGlzLl91bmJsb2NrVGltZSA9IG5vdyArIHRoaXMuY29tcHV0ZVBlbmFsdHkoKTtcblx0ICAgICAgdGhpcy5fbmV4dFJlcXVlc3QgPSB0aGlzLl91bmJsb2NrVGltZSArIHRoaXMuc3RvcmVPcHRpb25zLm1pblRpbWU7XG5cdCAgICAgIHRoaXMuaW5zdGFuY2UuX2Ryb3BBbGxRdWV1ZWQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIHJlYWNoZWRIV00sXG5cdCAgICAgIGJsb2NrZWQsXG5cdCAgICAgIHN0cmF0ZWd5OiB0aGlzLnN0b3JlT3B0aW9ucy5zdHJhdGVneVxuXHQgICAgfTtcblx0ICB9XG5cblx0ICBhc3luYyBfX2ZyZWVfXyhpbmRleCwgd2VpZ2h0KSB7XG5cdCAgICBhd2FpdCB0aGlzLnlpZWxkTG9vcCgpO1xuXHQgICAgdGhpcy5fcnVubmluZyAtPSB3ZWlnaHQ7XG5cdCAgICB0aGlzLl9kb25lICs9IHdlaWdodDtcblx0ICAgIHRoaXMuaW5zdGFuY2UuX2RyYWluQWxsKHRoaXMuY29tcHV0ZUNhcGFjaXR5KCkpO1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgcnVubmluZzogdGhpcy5fcnVubmluZ1xuXHQgICAgfTtcblx0ICB9XG5cblx0fTtcblxuXHR2YXIgTG9jYWxEYXRhc3RvcmVfMSA9IExvY2FsRGF0YXN0b3JlO1xuXG5cdHZhciBCb3R0bGVuZWNrRXJyb3IkMywgU3RhdGVzO1xuXG5cdEJvdHRsZW5lY2tFcnJvciQzID0gQm90dGxlbmVja0Vycm9yXzE7XG5cblx0U3RhdGVzID0gY2xhc3MgU3RhdGVzIHtcblx0ICBjb25zdHJ1Y3RvcihzdGF0dXMxKSB7XG5cdCAgICB0aGlzLnN0YXR1cyA9IHN0YXR1czE7XG5cdCAgICB0aGlzLl9qb2JzID0ge307XG5cdCAgICB0aGlzLmNvdW50cyA9IHRoaXMuc3RhdHVzLm1hcChmdW5jdGlvbigpIHtcblx0ICAgICAgcmV0dXJuIDA7XG5cdCAgICB9KTtcblx0ICB9XG5cblx0ICBuZXh0KGlkKSB7XG5cdCAgICB2YXIgY3VycmVudCwgbmV4dDtcblx0ICAgIGN1cnJlbnQgPSB0aGlzLl9qb2JzW2lkXTtcblx0ICAgIG5leHQgPSBjdXJyZW50ICsgMTtcblx0ICAgIGlmICgoY3VycmVudCAhPSBudWxsKSAmJiBuZXh0IDwgdGhpcy5zdGF0dXMubGVuZ3RoKSB7XG5cdCAgICAgIHRoaXMuY291bnRzW2N1cnJlbnRdLS07XG5cdCAgICAgIHRoaXMuY291bnRzW25leHRdKys7XG5cdCAgICAgIHJldHVybiB0aGlzLl9qb2JzW2lkXSsrO1xuXHQgICAgfSBlbHNlIGlmIChjdXJyZW50ICE9IG51bGwpIHtcblx0ICAgICAgdGhpcy5jb3VudHNbY3VycmVudF0tLTtcblx0ICAgICAgcmV0dXJuIGRlbGV0ZSB0aGlzLl9qb2JzW2lkXTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBzdGFydChpZCkge1xuXHQgICAgdmFyIGluaXRpYWw7XG5cdCAgICBpbml0aWFsID0gMDtcblx0ICAgIHRoaXMuX2pvYnNbaWRdID0gaW5pdGlhbDtcblx0ICAgIHJldHVybiB0aGlzLmNvdW50c1tpbml0aWFsXSsrO1xuXHQgIH1cblxuXHQgIHJlbW92ZShpZCkge1xuXHQgICAgdmFyIGN1cnJlbnQ7XG5cdCAgICBjdXJyZW50ID0gdGhpcy5fam9ic1tpZF07XG5cdCAgICBpZiAoY3VycmVudCAhPSBudWxsKSB7XG5cdCAgICAgIHRoaXMuY291bnRzW2N1cnJlbnRdLS07XG5cdCAgICAgIGRlbGV0ZSB0aGlzLl9qb2JzW2lkXTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjdXJyZW50ICE9IG51bGw7XG5cdCAgfVxuXG5cdCAgam9iU3RhdHVzKGlkKSB7XG5cdCAgICB2YXIgcmVmO1xuXHQgICAgcmV0dXJuIChyZWYgPSB0aGlzLnN0YXR1c1t0aGlzLl9qb2JzW2lkXV0pICE9IG51bGwgPyByZWYgOiBudWxsO1xuXHQgIH1cblxuXHQgIHN0YXR1c0pvYnMoc3RhdHVzKSB7XG5cdCAgICB2YXIgaywgcG9zLCByZWYsIHJlc3VsdHMsIHY7XG5cdCAgICBpZiAoc3RhdHVzICE9IG51bGwpIHtcblx0ICAgICAgcG9zID0gdGhpcy5zdGF0dXMuaW5kZXhPZihzdGF0dXMpO1xuXHQgICAgICBpZiAocG9zIDwgMCkge1xuXHQgICAgICAgIHRocm93IG5ldyBCb3R0bGVuZWNrRXJyb3IkMyhgc3RhdHVzIG11c3QgYmUgb25lIG9mICR7dGhpcy5zdGF0dXMuam9pbignLCAnKX1gKTtcblx0ICAgICAgfVxuXHQgICAgICByZWYgPSB0aGlzLl9qb2JzO1xuXHQgICAgICByZXN1bHRzID0gW107XG5cdCAgICAgIGZvciAoayBpbiByZWYpIHtcblx0ICAgICAgICB2ID0gcmVmW2tdO1xuXHQgICAgICAgIGlmICh2ID09PSBwb3MpIHtcblx0ICAgICAgICAgIHJlc3VsdHMucHVzaChrKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fam9icyk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgc3RhdHVzQ291bnRzKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuY291bnRzLnJlZHVjZSgoKGFjYywgdiwgaSkgPT4ge1xuXHQgICAgICBhY2NbdGhpcy5zdGF0dXNbaV1dID0gdjtcblx0ICAgICAgcmV0dXJuIGFjYztcblx0ICAgIH0pLCB7fSk7XG5cdCAgfVxuXG5cdH07XG5cblx0dmFyIFN0YXRlc18xID0gU3RhdGVzO1xuXG5cdHZhciBETExpc3QkMiwgU3luYztcblxuXHRETExpc3QkMiA9IERMTGlzdF8xO1xuXG5cdFN5bmMgPSBjbGFzcyBTeW5jIHtcblx0ICBjb25zdHJ1Y3RvcihuYW1lLCBQcm9taXNlKSB7XG5cdCAgICB0aGlzLnNjaGVkdWxlID0gdGhpcy5zY2hlZHVsZS5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5uYW1lID0gbmFtZTtcblx0ICAgIHRoaXMuUHJvbWlzZSA9IFByb21pc2U7XG5cdCAgICB0aGlzLl9ydW5uaW5nID0gMDtcblx0ICAgIHRoaXMuX3F1ZXVlID0gbmV3IERMTGlzdCQyKCk7XG5cdCAgfVxuXG5cdCAgaXNFbXB0eSgpIHtcblx0ICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDA7XG5cdCAgfVxuXG5cdCAgYXN5bmMgX3RyeVRvUnVuKCkge1xuXHQgICAgdmFyIGFyZ3MsIGNiLCBlcnJvciwgcmVqZWN0LCByZXNvbHZlLCByZXR1cm5lZCwgdGFzaztcblx0ICAgIGlmICgodGhpcy5fcnVubmluZyA8IDEpICYmIHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDApIHtcblx0ICAgICAgdGhpcy5fcnVubmluZysrO1xuXHQgICAgICAoe3Rhc2ssIGFyZ3MsIHJlc29sdmUsIHJlamVjdH0gPSB0aGlzLl9xdWV1ZS5zaGlmdCgpKTtcblx0ICAgICAgY2IgPSAoYXdhaXQgKGFzeW5jIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICByZXR1cm5lZCA9IChhd2FpdCB0YXNrKC4uLmFyZ3MpKTtcblx0ICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmV0dXJuZWQpO1xuXHQgICAgICAgICAgfTtcblx0ICAgICAgICB9IGNhdGNoIChlcnJvcjEpIHtcblx0ICAgICAgICAgIGVycm9yID0gZXJyb3IxO1xuXHQgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0ICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgICB9KSgpKTtcblx0ICAgICAgdGhpcy5fcnVubmluZy0tO1xuXHQgICAgICB0aGlzLl90cnlUb1J1bigpO1xuXHQgICAgICByZXR1cm4gY2IoKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBzY2hlZHVsZSh0YXNrLCAuLi5hcmdzKSB7XG5cdCAgICB2YXIgcHJvbWlzZSwgcmVqZWN0LCByZXNvbHZlO1xuXHQgICAgcmVzb2x2ZSA9IHJlamVjdCA9IG51bGw7XG5cdCAgICBwcm9taXNlID0gbmV3IHRoaXMuUHJvbWlzZShmdW5jdGlvbihfcmVzb2x2ZSwgX3JlamVjdCkge1xuXHQgICAgICByZXNvbHZlID0gX3Jlc29sdmU7XG5cdCAgICAgIHJldHVybiByZWplY3QgPSBfcmVqZWN0O1xuXHQgICAgfSk7XG5cdCAgICB0aGlzLl9xdWV1ZS5wdXNoKHt0YXNrLCBhcmdzLCByZXNvbHZlLCByZWplY3R9KTtcblx0ICAgIHRoaXMuX3RyeVRvUnVuKCk7XG5cdCAgICByZXR1cm4gcHJvbWlzZTtcblx0ICB9XG5cblx0fTtcblxuXHR2YXIgU3luY18xID0gU3luYztcblxuXHR2YXIgdmVyc2lvbiA9IFwiMi4xOS41XCI7XG5cdHZhciB2ZXJzaW9uJDEgPSB7XG5cdFx0dmVyc2lvbjogdmVyc2lvblxuXHR9O1xuXG5cdHZhciB2ZXJzaW9uJDIgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG5cdFx0dmVyc2lvbjogdmVyc2lvbixcblx0XHRkZWZhdWx0OiB2ZXJzaW9uJDFcblx0fSk7XG5cblx0dmFyIHJlcXVpcmUkJDIgPSAoKSA9PiBjb25zb2xlLmxvZygnWW91IG11c3QgaW1wb3J0IHRoZSBmdWxsIHZlcnNpb24gb2YgQm90dGxlbmVjayBpbiBvcmRlciB0byB1c2UgdGhpcyBmZWF0dXJlLicpO1xuXG5cdHZhciByZXF1aXJlJCQzID0gKCkgPT4gY29uc29sZS5sb2coJ1lvdSBtdXN0IGltcG9ydCB0aGUgZnVsbCB2ZXJzaW9uIG9mIEJvdHRsZW5lY2sgaW4gb3JkZXIgdG8gdXNlIHRoaXMgZmVhdHVyZS4nKTtcblxuXHR2YXIgcmVxdWlyZSQkNCA9ICgpID0+IGNvbnNvbGUubG9nKCdZb3UgbXVzdCBpbXBvcnQgdGhlIGZ1bGwgdmVyc2lvbiBvZiBCb3R0bGVuZWNrIGluIG9yZGVyIHRvIHVzZSB0aGlzIGZlYXR1cmUuJyk7XG5cblx0dmFyIEV2ZW50cyQyLCBHcm91cCwgSU9SZWRpc0Nvbm5lY3Rpb24kMSwgUmVkaXNDb25uZWN0aW9uJDEsIFNjcmlwdHMkMSwgcGFyc2VyJDM7XG5cblx0cGFyc2VyJDMgPSBwYXJzZXI7XG5cblx0RXZlbnRzJDIgPSBFdmVudHNfMTtcblxuXHRSZWRpc0Nvbm5lY3Rpb24kMSA9IHJlcXVpcmUkJDI7XG5cblx0SU9SZWRpc0Nvbm5lY3Rpb24kMSA9IHJlcXVpcmUkJDM7XG5cblx0U2NyaXB0cyQxID0gcmVxdWlyZSQkNDtcblxuXHRHcm91cCA9IChmdW5jdGlvbigpIHtcblx0ICBjbGFzcyBHcm91cCB7XG5cdCAgICBjb25zdHJ1Y3RvcihsaW1pdGVyT3B0aW9ucyA9IHt9KSB7XG5cdCAgICAgIHRoaXMuZGVsZXRlS2V5ID0gdGhpcy5kZWxldGVLZXkuYmluZCh0aGlzKTtcblx0ICAgICAgdGhpcy5saW1pdGVyT3B0aW9ucyA9IGxpbWl0ZXJPcHRpb25zO1xuXHQgICAgICBwYXJzZXIkMy5sb2FkKHRoaXMubGltaXRlck9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIHRoaXMpO1xuXHQgICAgICB0aGlzLkV2ZW50cyA9IG5ldyBFdmVudHMkMih0aGlzKTtcblx0ICAgICAgdGhpcy5pbnN0YW5jZXMgPSB7fTtcblx0ICAgICAgdGhpcy5Cb3R0bGVuZWNrID0gQm90dGxlbmVja18xO1xuXHQgICAgICB0aGlzLl9zdGFydEF1dG9DbGVhbnVwKCk7XG5cdCAgICAgIHRoaXMuc2hhcmVkQ29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbiAhPSBudWxsO1xuXHQgICAgICBpZiAodGhpcy5jb25uZWN0aW9uID09IG51bGwpIHtcblx0ICAgICAgICBpZiAodGhpcy5saW1pdGVyT3B0aW9ucy5kYXRhc3RvcmUgPT09IFwicmVkaXNcIikge1xuXHQgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFJlZGlzQ29ubmVjdGlvbiQxKE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGltaXRlck9wdGlvbnMsIHtFdmVudHM6IHRoaXMuRXZlbnRzfSkpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW1pdGVyT3B0aW9ucy5kYXRhc3RvcmUgPT09IFwiaW9yZWRpc1wiKSB7XG5cdCAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgSU9SZWRpc0Nvbm5lY3Rpb24kMShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpbWl0ZXJPcHRpb25zLCB7RXZlbnRzOiB0aGlzLkV2ZW50c30pKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAga2V5KGtleSA9IFwiXCIpIHtcblx0ICAgICAgdmFyIHJlZjtcblx0ICAgICAgcmV0dXJuIChyZWYgPSB0aGlzLmluc3RhbmNlc1trZXldKSAhPSBudWxsID8gcmVmIDogKCgpID0+IHtcblx0ICAgICAgICB2YXIgbGltaXRlcjtcblx0ICAgICAgICBsaW1pdGVyID0gdGhpcy5pbnN0YW5jZXNba2V5XSA9IG5ldyB0aGlzLkJvdHRsZW5lY2soT2JqZWN0LmFzc2lnbih0aGlzLmxpbWl0ZXJPcHRpb25zLCB7XG5cdCAgICAgICAgICBpZDogYCR7dGhpcy5pZH0tJHtrZXl9YCxcblx0ICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcblx0ICAgICAgICAgIGNvbm5lY3Rpb246IHRoaXMuY29ubmVjdGlvblxuXHQgICAgICAgIH0pKTtcblx0ICAgICAgICB0aGlzLkV2ZW50cy50cmlnZ2VyKFwiY3JlYXRlZFwiLCBsaW1pdGVyLCBrZXkpO1xuXHQgICAgICAgIHJldHVybiBsaW1pdGVyO1xuXHQgICAgICB9KSgpO1xuXHQgICAgfVxuXG5cdCAgICBhc3luYyBkZWxldGVLZXkoa2V5ID0gXCJcIikge1xuXHQgICAgICB2YXIgZGVsZXRlZCwgaW5zdGFuY2U7XG5cdCAgICAgIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNba2V5XTtcblx0ICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuXHQgICAgICAgIGRlbGV0ZWQgPSAoYXdhaXQgdGhpcy5jb25uZWN0aW9uLl9fcnVuQ29tbWFuZF9fKFsnZGVsJywgLi4uU2NyaXB0cyQxLmFsbEtleXMoYCR7dGhpcy5pZH0tJHtrZXl9YCldKSk7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGluc3RhbmNlICE9IG51bGwpIHtcblx0ICAgICAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNba2V5XTtcblx0ICAgICAgICBhd2FpdCBpbnN0YW5jZS5kaXNjb25uZWN0KCk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIChpbnN0YW5jZSAhPSBudWxsKSB8fCBkZWxldGVkID4gMDtcblx0ICAgIH1cblxuXHQgICAgbGltaXRlcnMoKSB7XG5cdCAgICAgIHZhciBrLCByZWYsIHJlc3VsdHMsIHY7XG5cdCAgICAgIHJlZiA9IHRoaXMuaW5zdGFuY2VzO1xuXHQgICAgICByZXN1bHRzID0gW107XG5cdCAgICAgIGZvciAoayBpbiByZWYpIHtcblx0ICAgICAgICB2ID0gcmVmW2tdO1xuXHQgICAgICAgIHJlc3VsdHMucHVzaCh7XG5cdCAgICAgICAgICBrZXk6IGssXG5cdCAgICAgICAgICBsaW1pdGVyOiB2XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cdCAgICB9XG5cblx0ICAgIGtleXMoKSB7XG5cdCAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcyk7XG5cdCAgICB9XG5cblx0ICAgIGFzeW5jIGNsdXN0ZXJLZXlzKCkge1xuXHQgICAgICB2YXIgY3Vyc29yLCBlbmQsIGZvdW5kLCBpLCBrLCBrZXlzLCBsZW4sIG5leHQsIHN0YXJ0O1xuXHQgICAgICBpZiAodGhpcy5jb25uZWN0aW9uID09IG51bGwpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5Qcm9taXNlLnJlc29sdmUodGhpcy5rZXlzKCkpO1xuXHQgICAgICB9XG5cdCAgICAgIGtleXMgPSBbXTtcblx0ICAgICAgY3Vyc29yID0gbnVsbDtcblx0ICAgICAgc3RhcnQgPSBgYl8ke3RoaXMuaWR9LWAubGVuZ3RoO1xuXHQgICAgICBlbmQgPSBcIl9zZXR0aW5nc1wiLmxlbmd0aDtcblx0ICAgICAgd2hpbGUgKGN1cnNvciAhPT0gMCkge1xuXHQgICAgICAgIFtuZXh0LCBmb3VuZF0gPSAoYXdhaXQgdGhpcy5jb25uZWN0aW9uLl9fcnVuQ29tbWFuZF9fKFtcInNjYW5cIiwgY3Vyc29yICE9IG51bGwgPyBjdXJzb3IgOiAwLCBcIm1hdGNoXCIsIGBiXyR7dGhpcy5pZH0tKl9zZXR0aW5nc2AsIFwiY291bnRcIiwgMTAwMDBdKSk7XG5cdCAgICAgICAgY3Vyc29yID0gfn5uZXh0O1xuXHQgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGZvdW5kLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgICBrID0gZm91bmRbaV07XG5cdCAgICAgICAgICBrZXlzLnB1c2goay5zbGljZShzdGFydCwgLWVuZCkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4ga2V5cztcblx0ICAgIH1cblxuXHQgICAgX3N0YXJ0QXV0b0NsZWFudXAoKSB7XG5cdCAgICAgIHZhciBiYXNlO1xuXHQgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuXHQgICAgICByZXR1cm4gdHlwZW9mIChiYXNlID0gKHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhc3luYygpID0+IHtcblx0ICAgICAgICB2YXIgZSwgaywgcmVmLCByZXN1bHRzLCB0aW1lLCB2O1xuXHQgICAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuXHQgICAgICAgIHJlZiA9IHRoaXMuaW5zdGFuY2VzO1xuXHQgICAgICAgIHJlc3VsdHMgPSBbXTtcblx0ICAgICAgICBmb3IgKGsgaW4gcmVmKSB7XG5cdCAgICAgICAgICB2ID0gcmVmW2tdO1xuXHQgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgaWYgKChhd2FpdCB2Ll9zdG9yZS5fX2dyb3VwQ2hlY2tfXyh0aW1lKSkpIHtcblx0ICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5kZWxldGVLZXkoaykpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgICAgICBlID0gZXJyb3I7XG5cdCAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2LkV2ZW50cy50cmlnZ2VyKFwiZXJyb3JcIiwgZSkpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0cztcblx0ICAgICAgfSwgdGhpcy50aW1lb3V0IC8gMikpKS51bnJlZiA9PT0gXCJmdW5jdGlvblwiID8gYmFzZS51bnJlZigpIDogdm9pZCAwO1xuXHQgICAgfVxuXG5cdCAgICB1cGRhdGVTZXR0aW5ncyhvcHRpb25zID0ge30pIHtcblx0ICAgICAgcGFyc2VyJDMub3ZlcndyaXRlKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIHRoaXMpO1xuXHQgICAgICBwYXJzZXIkMy5vdmVyd3JpdGUob3B0aW9ucywgb3B0aW9ucywgdGhpcy5saW1pdGVyT3B0aW9ucyk7XG5cdCAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgIT0gbnVsbCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLl9zdGFydEF1dG9DbGVhbnVwKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZGlzY29ubmVjdChmbHVzaCA9IHRydWUpIHtcblx0ICAgICAgdmFyIHJlZjtcblx0ICAgICAgaWYgKCF0aGlzLnNoYXJlZENvbm5lY3Rpb24pIHtcblx0ICAgICAgICByZXR1cm4gKHJlZiA9IHRoaXMuY29ubmVjdGlvbikgIT0gbnVsbCA/IHJlZi5kaXNjb25uZWN0KGZsdXNoKSA6IHZvaWQgMDtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgfVxuXHQgIEdyb3VwLnByb3RvdHlwZS5kZWZhdWx0cyA9IHtcblx0ICAgIHRpbWVvdXQ6IDEwMDAgKiA2MCAqIDUsXG5cdCAgICBjb25uZWN0aW9uOiBudWxsLFxuXHQgICAgUHJvbWlzZTogUHJvbWlzZSxcblx0ICAgIGlkOiBcImdyb3VwLWtleVwiXG5cdCAgfTtcblxuXHQgIHJldHVybiBHcm91cDtcblxuXHR9KS5jYWxsKGNvbW1vbmpzR2xvYmFsKTtcblxuXHR2YXIgR3JvdXBfMSA9IEdyb3VwO1xuXG5cdHZhciBCYXRjaGVyLCBFdmVudHMkMywgcGFyc2VyJDQ7XG5cblx0cGFyc2VyJDQgPSBwYXJzZXI7XG5cblx0RXZlbnRzJDMgPSBFdmVudHNfMTtcblxuXHRCYXRjaGVyID0gKGZ1bmN0aW9uKCkge1xuXHQgIGNsYXNzIEJhdGNoZXIge1xuXHQgICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cdCAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICAgIHBhcnNlciQ0LmxvYWQodGhpcy5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCB0aGlzKTtcblx0ICAgICAgdGhpcy5FdmVudHMgPSBuZXcgRXZlbnRzJDModGhpcyk7XG5cdCAgICAgIHRoaXMuX2FyciA9IFtdO1xuXHQgICAgICB0aGlzLl9yZXNldFByb21pc2UoKTtcblx0ICAgICAgdGhpcy5fbGFzdEZsdXNoID0gRGF0ZS5ub3coKTtcblx0ICAgIH1cblxuXHQgICAgX3Jlc2V0UHJvbWlzZSgpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2UgPSBuZXcgdGhpcy5Qcm9taXNlKChyZXMsIHJlaikgPT4ge1xuXHQgICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlID0gcmVzO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgX2ZsdXNoKCkge1xuXHQgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdCAgICAgIHRoaXMuX2xhc3RGbHVzaCA9IERhdGUubm93KCk7XG5cdCAgICAgIHRoaXMuX3Jlc29sdmUoKTtcblx0ICAgICAgdGhpcy5FdmVudHMudHJpZ2dlcihcImJhdGNoXCIsIHRoaXMuX2Fycik7XG5cdCAgICAgIHRoaXMuX2FyciA9IFtdO1xuXHQgICAgICByZXR1cm4gdGhpcy5fcmVzZXRQcm9taXNlKCk7XG5cdCAgICB9XG5cblx0ICAgIGFkZChkYXRhKSB7XG5cdCAgICAgIHZhciByZXQ7XG5cdCAgICAgIHRoaXMuX2Fyci5wdXNoKGRhdGEpO1xuXHQgICAgICByZXQgPSB0aGlzLl9wcm9taXNlO1xuXHQgICAgICBpZiAodGhpcy5fYXJyLmxlbmd0aCA9PT0gdGhpcy5tYXhTaXplKSB7XG5cdCAgICAgICAgdGhpcy5fZmx1c2goKTtcblx0ICAgICAgfSBlbHNlIGlmICgodGhpcy5tYXhUaW1lICE9IG51bGwpICYmIHRoaXMuX2Fyci5sZW5ndGggPT09IDEpIHtcblx0ICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdCAgICAgICAgICByZXR1cm4gdGhpcy5fZmx1c2goKTtcblx0ICAgICAgICB9LCB0aGlzLm1heFRpbWUpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9XG5cblx0ICB9XG5cdCAgQmF0Y2hlci5wcm90b3R5cGUuZGVmYXVsdHMgPSB7XG5cdCAgICBtYXhUaW1lOiBudWxsLFxuXHQgICAgbWF4U2l6ZTogbnVsbCxcblx0ICAgIFByb21pc2U6IFByb21pc2Vcblx0ICB9O1xuXG5cdCAgcmV0dXJuIEJhdGNoZXI7XG5cblx0fSkuY2FsbChjb21tb25qc0dsb2JhbCk7XG5cblx0dmFyIEJhdGNoZXJfMSA9IEJhdGNoZXI7XG5cblx0dmFyIHJlcXVpcmUkJDQkMSA9ICgpID0+IGNvbnNvbGUubG9nKCdZb3UgbXVzdCBpbXBvcnQgdGhlIGZ1bGwgdmVyc2lvbiBvZiBCb3R0bGVuZWNrIGluIG9yZGVyIHRvIHVzZSB0aGlzIGZlYXR1cmUuJyk7XG5cblx0dmFyIHJlcXVpcmUkJDggPSBnZXRDanNFeHBvcnRGcm9tTmFtZXNwYWNlKHZlcnNpb24kMik7XG5cblx0dmFyIEJvdHRsZW5lY2ssIERFRkFVTFRfUFJJT1JJVFkkMSwgRXZlbnRzJDQsIEpvYiQxLCBMb2NhbERhdGFzdG9yZSQxLCBOVU1fUFJJT1JJVElFUyQxLCBRdWV1ZXMkMSwgUmVkaXNEYXRhc3RvcmUkMSwgU3RhdGVzJDEsIFN5bmMkMSwgcGFyc2VyJDUsXG5cdCAgc3BsaWNlID0gW10uc3BsaWNlO1xuXG5cdE5VTV9QUklPUklUSUVTJDEgPSAxMDtcblxuXHRERUZBVUxUX1BSSU9SSVRZJDEgPSA1O1xuXG5cdHBhcnNlciQ1ID0gcGFyc2VyO1xuXG5cdFF1ZXVlcyQxID0gUXVldWVzXzE7XG5cblx0Sm9iJDEgPSBKb2JfMTtcblxuXHRMb2NhbERhdGFzdG9yZSQxID0gTG9jYWxEYXRhc3RvcmVfMTtcblxuXHRSZWRpc0RhdGFzdG9yZSQxID0gcmVxdWlyZSQkNCQxO1xuXG5cdEV2ZW50cyQ0ID0gRXZlbnRzXzE7XG5cblx0U3RhdGVzJDEgPSBTdGF0ZXNfMTtcblxuXHRTeW5jJDEgPSBTeW5jXzE7XG5cblx0Qm90dGxlbmVjayA9IChmdW5jdGlvbigpIHtcblx0ICBjbGFzcyBCb3R0bGVuZWNrIHtcblx0ICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSwgLi4uaW52YWxpZCkge1xuXHQgICAgICB2YXIgc3RvcmVJbnN0YW5jZU9wdGlvbnMsIHN0b3JlT3B0aW9ucztcblx0ICAgICAgdGhpcy5fYWRkVG9RdWV1ZSA9IHRoaXMuX2FkZFRvUXVldWUuYmluZCh0aGlzKTtcblx0ICAgICAgdGhpcy5fdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMsIGludmFsaWQpO1xuXHQgICAgICBwYXJzZXIkNS5sb2FkKG9wdGlvbnMsIHRoaXMuaW5zdGFuY2VEZWZhdWx0cywgdGhpcyk7XG5cdCAgICAgIHRoaXMuX3F1ZXVlcyA9IG5ldyBRdWV1ZXMkMShOVU1fUFJJT1JJVElFUyQxKTtcblx0ICAgICAgdGhpcy5fc2NoZWR1bGVkID0ge307XG5cdCAgICAgIHRoaXMuX3N0YXRlcyA9IG5ldyBTdGF0ZXMkMShbXCJSRUNFSVZFRFwiLCBcIlFVRVVFRFwiLCBcIlJVTk5JTkdcIiwgXCJFWEVDVVRJTkdcIl0uY29uY2F0KHRoaXMudHJhY2tEb25lU3RhdHVzID8gW1wiRE9ORVwiXSA6IFtdKSk7XG5cdCAgICAgIHRoaXMuX2xpbWl0ZXIgPSBudWxsO1xuXHQgICAgICB0aGlzLkV2ZW50cyA9IG5ldyBFdmVudHMkNCh0aGlzKTtcblx0ICAgICAgdGhpcy5fc3VibWl0TG9jayA9IG5ldyBTeW5jJDEoXCJzdWJtaXRcIiwgdGhpcy5Qcm9taXNlKTtcblx0ICAgICAgdGhpcy5fcmVnaXN0ZXJMb2NrID0gbmV3IFN5bmMkMShcInJlZ2lzdGVyXCIsIHRoaXMuUHJvbWlzZSk7XG5cdCAgICAgIHN0b3JlT3B0aW9ucyA9IHBhcnNlciQ1LmxvYWQob3B0aW9ucywgdGhpcy5zdG9yZURlZmF1bHRzLCB7fSk7XG5cdCAgICAgIHRoaXMuX3N0b3JlID0gKGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIGlmICh0aGlzLmRhdGFzdG9yZSA9PT0gXCJyZWRpc1wiIHx8IHRoaXMuZGF0YXN0b3JlID09PSBcImlvcmVkaXNcIiB8fCAodGhpcy5jb25uZWN0aW9uICE9IG51bGwpKSB7XG5cdCAgICAgICAgICBzdG9yZUluc3RhbmNlT3B0aW9ucyA9IHBhcnNlciQ1LmxvYWQob3B0aW9ucywgdGhpcy5yZWRpc1N0b3JlRGVmYXVsdHMsIHt9KTtcblx0ICAgICAgICAgIHJldHVybiBuZXcgUmVkaXNEYXRhc3RvcmUkMSh0aGlzLCBzdG9yZU9wdGlvbnMsIHN0b3JlSW5zdGFuY2VPcHRpb25zKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YXN0b3JlID09PSBcImxvY2FsXCIpIHtcblx0ICAgICAgICAgIHN0b3JlSW5zdGFuY2VPcHRpb25zID0gcGFyc2VyJDUubG9hZChvcHRpb25zLCB0aGlzLmxvY2FsU3RvcmVEZWZhdWx0cywge30pO1xuXHQgICAgICAgICAgcmV0dXJuIG5ldyBMb2NhbERhdGFzdG9yZSQxKHRoaXMsIHN0b3JlT3B0aW9ucywgc3RvcmVJbnN0YW5jZU9wdGlvbnMpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB0aHJvdyBuZXcgQm90dGxlbmVjay5wcm90b3R5cGUuQm90dGxlbmVja0Vycm9yKGBJbnZhbGlkIGRhdGFzdG9yZSB0eXBlOiAke3RoaXMuZGF0YXN0b3JlfWApO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSkuY2FsbCh0aGlzKTtcblx0ICAgICAgdGhpcy5fcXVldWVzLm9uKFwibGVmdHplcm9cIiwgKCkgPT4ge1xuXHQgICAgICAgIHZhciByZWY7XG5cdCAgICAgICAgcmV0dXJuIChyZWYgPSB0aGlzLl9zdG9yZS5oZWFydGJlYXQpICE9IG51bGwgPyB0eXBlb2YgcmVmLnJlZiA9PT0gXCJmdW5jdGlvblwiID8gcmVmLnJlZigpIDogdm9pZCAwIDogdm9pZCAwO1xuXHQgICAgICB9KTtcblx0ICAgICAgdGhpcy5fcXVldWVzLm9uKFwiemVyb1wiLCAoKSA9PiB7XG5cdCAgICAgICAgdmFyIHJlZjtcblx0ICAgICAgICByZXR1cm4gKHJlZiA9IHRoaXMuX3N0b3JlLmhlYXJ0YmVhdCkgIT0gbnVsbCA/IHR5cGVvZiByZWYudW5yZWYgPT09IFwiZnVuY3Rpb25cIiA/IHJlZi51bnJlZigpIDogdm9pZCAwIDogdm9pZCAwO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgX3ZhbGlkYXRlT3B0aW9ucyhvcHRpb25zLCBpbnZhbGlkKSB7XG5cdCAgICAgIGlmICghKChvcHRpb25zICE9IG51bGwpICYmIHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiICYmIGludmFsaWQubGVuZ3RoID09PSAwKSkge1xuXHQgICAgICAgIHRocm93IG5ldyBCb3R0bGVuZWNrLnByb3RvdHlwZS5Cb3R0bGVuZWNrRXJyb3IoXCJCb3R0bGVuZWNrIHYyIHRha2VzIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudC4gUmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL1NHcm9uZGluL2JvdHRsZW5lY2sjdXBncmFkaW5nLXRvLXYyIGlmIHlvdSdyZSB1cGdyYWRpbmcgZnJvbSBCb3R0bGVuZWNrIHYxLlwiKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZWFkeSgpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLnJlYWR5O1xuXHQgICAgfVxuXG5cdCAgICBjbGllbnRzKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuY2xpZW50cztcblx0ICAgIH1cblxuXHQgICAgY2hhbm5lbCgpIHtcblx0ICAgICAgcmV0dXJuIGBiXyR7dGhpcy5pZH1gO1xuXHQgICAgfVxuXG5cdCAgICBjaGFubmVsX2NsaWVudCgpIHtcblx0ICAgICAgcmV0dXJuIGBiXyR7dGhpcy5pZH1fJHt0aGlzLl9zdG9yZS5jbGllbnRJZH1gO1xuXHQgICAgfVxuXG5cdCAgICBwdWJsaXNoKG1lc3NhZ2UpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLl9fcHVibGlzaF9fKG1lc3NhZ2UpO1xuXHQgICAgfVxuXG5cdCAgICBkaXNjb25uZWN0KGZsdXNoID0gdHJ1ZSkge1xuXHQgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuX19kaXNjb25uZWN0X18oZmx1c2gpO1xuXHQgICAgfVxuXG5cdCAgICBjaGFpbihfbGltaXRlcikge1xuXHQgICAgICB0aGlzLl9saW1pdGVyID0gX2xpbWl0ZXI7XG5cdCAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfVxuXG5cdCAgICBxdWV1ZWQocHJpb3JpdHkpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlcy5xdWV1ZWQocHJpb3JpdHkpO1xuXHQgICAgfVxuXG5cdCAgICBjbHVzdGVyUXVldWVkKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuX19xdWV1ZWRfXygpO1xuXHQgICAgfVxuXG5cdCAgICBlbXB0eSgpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMucXVldWVkKCkgPT09IDAgJiYgdGhpcy5fc3VibWl0TG9jay5pc0VtcHR5KCk7XG5cdCAgICB9XG5cblx0ICAgIHJ1bm5pbmcoKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5fX3J1bm5pbmdfXygpO1xuXHQgICAgfVxuXG5cdCAgICBkb25lKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuX19kb25lX18oKTtcblx0ICAgIH1cblxuXHQgICAgam9iU3RhdHVzKGlkKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLl9zdGF0ZXMuam9iU3RhdHVzKGlkKTtcblx0ICAgIH1cblxuXHQgICAgam9icyhzdGF0dXMpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlcy5zdGF0dXNKb2JzKHN0YXR1cyk7XG5cdCAgICB9XG5cblx0ICAgIGNvdW50cygpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlcy5zdGF0dXNDb3VudHMoKTtcblx0ICAgIH1cblxuXHQgICAgX3JhbmRvbUluZGV4KCkge1xuXHQgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG5cdCAgICB9XG5cblx0ICAgIGNoZWNrKHdlaWdodCA9IDEpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLl9fY2hlY2tfXyh3ZWlnaHQpO1xuXHQgICAgfVxuXG5cdCAgICBfY2xlYXJHbG9iYWxTdGF0ZShpbmRleCkge1xuXHQgICAgICBpZiAodGhpcy5fc2NoZWR1bGVkW2luZGV4XSAhPSBudWxsKSB7XG5cdCAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NjaGVkdWxlZFtpbmRleF0uZXhwaXJhdGlvbik7XG5cdCAgICAgICAgZGVsZXRlIHRoaXMuX3NjaGVkdWxlZFtpbmRleF07XG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGFzeW5jIF9mcmVlKGluZGV4LCBqb2IsIG9wdGlvbnMsIGV2ZW50SW5mbykge1xuXHQgICAgICB2YXIgZSwgcnVubmluZztcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICAoe3J1bm5pbmd9ID0gKGF3YWl0IHRoaXMuX3N0b3JlLl9fZnJlZV9fKGluZGV4LCBvcHRpb25zLndlaWdodCkpKTtcblx0ICAgICAgICB0aGlzLkV2ZW50cy50cmlnZ2VyKFwiZGVidWdcIiwgYEZyZWVkICR7b3B0aW9ucy5pZH1gLCBldmVudEluZm8pO1xuXHQgICAgICAgIGlmIChydW5uaW5nID09PSAwICYmIHRoaXMuZW1wdHkoKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHRoaXMuRXZlbnRzLnRyaWdnZXIoXCJpZGxlXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBjYXRjaCAoZXJyb3IxKSB7XG5cdCAgICAgICAgZSA9IGVycm9yMTtcblx0ICAgICAgICByZXR1cm4gdGhpcy5FdmVudHMudHJpZ2dlcihcImVycm9yXCIsIGUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIF9ydW4oaW5kZXgsIGpvYiwgd2FpdCkge1xuXHQgICAgICB2YXIgY2xlYXJHbG9iYWxTdGF0ZSwgZnJlZSwgcnVuO1xuXHQgICAgICBqb2IuZG9SdW4oKTtcblx0ICAgICAgY2xlYXJHbG9iYWxTdGF0ZSA9IHRoaXMuX2NsZWFyR2xvYmFsU3RhdGUuYmluZCh0aGlzLCBpbmRleCk7XG5cdCAgICAgIHJ1biA9IHRoaXMuX3J1bi5iaW5kKHRoaXMsIGluZGV4LCBqb2IpO1xuXHQgICAgICBmcmVlID0gdGhpcy5fZnJlZS5iaW5kKHRoaXMsIGluZGV4LCBqb2IpO1xuXHQgICAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVkW2luZGV4XSA9IHtcblx0ICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcblx0ICAgICAgICAgIHJldHVybiBqb2IuZG9FeGVjdXRlKHRoaXMuX2xpbWl0ZXIsIGNsZWFyR2xvYmFsU3RhdGUsIHJ1biwgZnJlZSk7XG5cdCAgICAgICAgfSwgd2FpdCksXG5cdCAgICAgICAgZXhwaXJhdGlvbjogam9iLm9wdGlvbnMuZXhwaXJhdGlvbiAhPSBudWxsID8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0ICAgICAgICAgIHJldHVybiBqb2IuZG9FeHBpcmUoY2xlYXJHbG9iYWxTdGF0ZSwgcnVuLCBmcmVlKTtcblx0ICAgICAgICB9LCB3YWl0ICsgam9iLm9wdGlvbnMuZXhwaXJhdGlvbikgOiB2b2lkIDAsXG5cdCAgICAgICAgam9iOiBqb2Jcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgX2RyYWluT25lKGNhcGFjaXR5KSB7XG5cdCAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RlckxvY2suc2NoZWR1bGUoKCkgPT4ge1xuXHQgICAgICAgIHZhciBhcmdzLCBpbmRleCwgbmV4dCwgb3B0aW9ucywgcXVldWU7XG5cdCAgICAgICAgaWYgKHRoaXMucXVldWVkKCkgPT09IDApIHtcblx0ICAgICAgICAgIHJldHVybiB0aGlzLlByb21pc2UucmVzb2x2ZShudWxsKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcXVldWUgPSB0aGlzLl9xdWV1ZXMuZ2V0Rmlyc3QoKTtcblx0ICAgICAgICAoe29wdGlvbnMsIGFyZ3N9ID0gbmV4dCA9IHF1ZXVlLmZpcnN0KCkpO1xuXHQgICAgICAgIGlmICgoY2FwYWNpdHkgIT0gbnVsbCkgJiYgb3B0aW9ucy53ZWlnaHQgPiBjYXBhY2l0eSkge1xuXHQgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLkV2ZW50cy50cmlnZ2VyKFwiZGVidWdcIiwgYERyYWluaW5nICR7b3B0aW9ucy5pZH1gLCB7YXJncywgb3B0aW9uc30pO1xuXHQgICAgICAgIGluZGV4ID0gdGhpcy5fcmFuZG9tSW5kZXgoKTtcblx0ICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuX19yZWdpc3Rlcl9fKGluZGV4LCBvcHRpb25zLndlaWdodCwgb3B0aW9ucy5leHBpcmF0aW9uKS50aGVuKCh7c3VjY2Vzcywgd2FpdCwgcmVzZXJ2b2lyfSkgPT4ge1xuXHQgICAgICAgICAgdmFyIGVtcHR5O1xuXHQgICAgICAgICAgdGhpcy5FdmVudHMudHJpZ2dlcihcImRlYnVnXCIsIGBEcmFpbmVkICR7b3B0aW9ucy5pZH1gLCB7c3VjY2VzcywgYXJncywgb3B0aW9uc30pO1xuXHQgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcblx0ICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcblx0ICAgICAgICAgICAgZW1wdHkgPSB0aGlzLmVtcHR5KCk7XG5cdCAgICAgICAgICAgIGlmIChlbXB0eSkge1xuXHQgICAgICAgICAgICAgIHRoaXMuRXZlbnRzLnRyaWdnZXIoXCJlbXB0eVwiKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAocmVzZXJ2b2lyID09PSAwKSB7XG5cdCAgICAgICAgICAgICAgdGhpcy5FdmVudHMudHJpZ2dlcihcImRlcGxldGVkXCIsIGVtcHR5KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLl9ydW4oaW5kZXgsIG5leHQsIHdhaXQpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9taXNlLnJlc29sdmUob3B0aW9ucy53ZWlnaHQpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgX2RyYWluQWxsKGNhcGFjaXR5LCB0b3RhbCA9IDApIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuX2RyYWluT25lKGNhcGFjaXR5KS50aGVuKChkcmFpbmVkKSA9PiB7XG5cdCAgICAgICAgdmFyIG5ld0NhcGFjaXR5O1xuXHQgICAgICAgIGlmIChkcmFpbmVkICE9IG51bGwpIHtcblx0ICAgICAgICAgIG5ld0NhcGFjaXR5ID0gY2FwYWNpdHkgIT0gbnVsbCA/IGNhcGFjaXR5IC0gZHJhaW5lZCA6IGNhcGFjaXR5O1xuXHQgICAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWluQWxsKG5ld0NhcGFjaXR5LCB0b3RhbCArIGRyYWluZWQpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9taXNlLnJlc29sdmUodG90YWwpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSkuY2F0Y2goKGUpID0+IHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5FdmVudHMudHJpZ2dlcihcImVycm9yXCIsIGUpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgX2Ryb3BBbGxRdWV1ZWQobWVzc2FnZSkge1xuXHQgICAgICByZXR1cm4gdGhpcy5fcXVldWVzLnNoaWZ0QWxsKGZ1bmN0aW9uKGpvYikge1xuXHQgICAgICAgIHJldHVybiBqb2IuZG9Ecm9wKHttZXNzYWdlfSk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICBzdG9wKG9wdGlvbnMgPSB7fSkge1xuXHQgICAgICB2YXIgZG9uZSwgd2FpdEZvckV4ZWN1dGluZztcblx0ICAgICAgb3B0aW9ucyA9IHBhcnNlciQ1LmxvYWQob3B0aW9ucywgdGhpcy5zdG9wRGVmYXVsdHMpO1xuXHQgICAgICB3YWl0Rm9yRXhlY3V0aW5nID0gKGF0KSA9PiB7XG5cdCAgICAgICAgdmFyIGZpbmlzaGVkO1xuXHQgICAgICAgIGZpbmlzaGVkID0gKCkgPT4ge1xuXHQgICAgICAgICAgdmFyIGNvdW50cztcblx0ICAgICAgICAgIGNvdW50cyA9IHRoaXMuX3N0YXRlcy5jb3VudHM7XG5cdCAgICAgICAgICByZXR1cm4gKGNvdW50c1swXSArIGNvdW50c1sxXSArIGNvdW50c1syXSArIGNvdW50c1szXSkgPT09IGF0O1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgcmV0dXJuIG5ldyB0aGlzLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHQgICAgICAgICAgaWYgKGZpbmlzaGVkKCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLm9uKFwiZG9uZVwiLCAoKSA9PiB7XG5cdCAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKCkpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKFwiZG9uZVwiKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgfTtcblx0ICAgICAgZG9uZSA9IG9wdGlvbnMuZHJvcFdhaXRpbmdKb2JzID8gKHRoaXMuX3J1biA9IGZ1bmN0aW9uKGluZGV4LCBuZXh0KSB7XG5cdCAgICAgICAgcmV0dXJuIG5leHQuZG9Ecm9wKHtcblx0ICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMuZHJvcEVycm9yTWVzc2FnZVxuXHQgICAgICAgIH0pO1xuXHQgICAgICB9LCB0aGlzLl9kcmFpbk9uZSA9ICgpID0+IHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5Qcm9taXNlLnJlc29sdmUobnVsbCk7XG5cdCAgICAgIH0sIHRoaXMuX3JlZ2lzdGVyTG9jay5zY2hlZHVsZSgoKSA9PiB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdExvY2suc2NoZWR1bGUoKCkgPT4ge1xuXHQgICAgICAgICAgdmFyIGssIHJlZiwgdjtcblx0ICAgICAgICAgIHJlZiA9IHRoaXMuX3NjaGVkdWxlZDtcblx0ICAgICAgICAgIGZvciAoayBpbiByZWYpIHtcblx0ICAgICAgICAgICAgdiA9IHJlZltrXTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuam9iU3RhdHVzKHYuam9iLm9wdGlvbnMuaWQpID09PSBcIlJVTk5JTkdcIikge1xuXHQgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2LnRpbWVvdXQpO1xuXHQgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2LmV4cGlyYXRpb24pO1xuXHQgICAgICAgICAgICAgIHYuam9iLmRvRHJvcCh7XG5cdCAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLmRyb3BFcnJvck1lc3NhZ2Vcblx0ICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgdGhpcy5fZHJvcEFsbFF1ZXVlZChvcHRpb25zLmRyb3BFcnJvck1lc3NhZ2UpO1xuXHQgICAgICAgICAgcmV0dXJuIHdhaXRGb3JFeGVjdXRpbmcoMCk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0pKSA6IHRoaXMuc2NoZWR1bGUoe1xuXHQgICAgICAgIHByaW9yaXR5OiBOVU1fUFJJT1JJVElFUyQxIC0gMSxcblx0ICAgICAgICB3ZWlnaHQ6IDBcblx0ICAgICAgfSwgKCkgPT4ge1xuXHQgICAgICAgIHJldHVybiB3YWl0Rm9yRXhlY3V0aW5nKDEpO1xuXHQgICAgICB9KTtcblx0ICAgICAgdGhpcy5fcmVjZWl2ZSA9IGZ1bmN0aW9uKGpvYikge1xuXHQgICAgICAgIHJldHVybiBqb2IuX3JlamVjdChuZXcgQm90dGxlbmVjay5wcm90b3R5cGUuQm90dGxlbmVja0Vycm9yKG9wdGlvbnMuZW5xdWV1ZUVycm9yTWVzc2FnZSkpO1xuXHQgICAgICB9O1xuXHQgICAgICB0aGlzLnN0b3AgPSAoKSA9PiB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuUHJvbWlzZS5yZWplY3QobmV3IEJvdHRsZW5lY2sucHJvdG90eXBlLkJvdHRsZW5lY2tFcnJvcihcInN0b3AoKSBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZFwiKSk7XG5cdCAgICAgIH07XG5cdCAgICAgIHJldHVybiBkb25lO1xuXHQgICAgfVxuXG5cdCAgICBhc3luYyBfYWRkVG9RdWV1ZShqb2IpIHtcblx0ICAgICAgdmFyIGFyZ3MsIGJsb2NrZWQsIGVycm9yLCBvcHRpb25zLCByZWFjaGVkSFdNLCBzaGlmdGVkLCBzdHJhdGVneTtcblx0ICAgICAgKHthcmdzLCBvcHRpb25zfSA9IGpvYik7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgKHtyZWFjaGVkSFdNLCBibG9ja2VkLCBzdHJhdGVneX0gPSAoYXdhaXQgdGhpcy5fc3RvcmUuX19zdWJtaXRfXyh0aGlzLnF1ZXVlZCgpLCBvcHRpb25zLndlaWdodCkpKTtcblx0ICAgICAgfSBjYXRjaCAoZXJyb3IxKSB7XG5cdCAgICAgICAgZXJyb3IgPSBlcnJvcjE7XG5cdCAgICAgICAgdGhpcy5FdmVudHMudHJpZ2dlcihcImRlYnVnXCIsIGBDb3VsZCBub3QgcXVldWUgJHtvcHRpb25zLmlkfWAsIHthcmdzLCBvcHRpb25zLCBlcnJvcn0pO1xuXHQgICAgICAgIGpvYi5kb0Ryb3Aoe2Vycm9yfSk7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChibG9ja2VkKSB7XG5cdCAgICAgICAgam9iLmRvRHJvcCgpO1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICB9IGVsc2UgaWYgKHJlYWNoZWRIV00pIHtcblx0ICAgICAgICBzaGlmdGVkID0gc3RyYXRlZ3kgPT09IEJvdHRsZW5lY2sucHJvdG90eXBlLnN0cmF0ZWd5LkxFQUsgPyB0aGlzLl9xdWV1ZXMuc2hpZnRMYXN0RnJvbShvcHRpb25zLnByaW9yaXR5KSA6IHN0cmF0ZWd5ID09PSBCb3R0bGVuZWNrLnByb3RvdHlwZS5zdHJhdGVneS5PVkVSRkxPV19QUklPUklUWSA/IHRoaXMuX3F1ZXVlcy5zaGlmdExhc3RGcm9tKG9wdGlvbnMucHJpb3JpdHkgKyAxKSA6IHN0cmF0ZWd5ID09PSBCb3R0bGVuZWNrLnByb3RvdHlwZS5zdHJhdGVneS5PVkVSRkxPVyA/IGpvYiA6IHZvaWQgMDtcblx0ICAgICAgICBpZiAoc2hpZnRlZCAhPSBudWxsKSB7XG5cdCAgICAgICAgICBzaGlmdGVkLmRvRHJvcCgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoKHNoaWZ0ZWQgPT0gbnVsbCkgfHwgc3RyYXRlZ3kgPT09IEJvdHRsZW5lY2sucHJvdG90eXBlLnN0cmF0ZWd5Lk9WRVJGTE9XKSB7XG5cdCAgICAgICAgICBpZiAoc2hpZnRlZCA9PSBudWxsKSB7XG5cdCAgICAgICAgICAgIGpvYi5kb0Ryb3AoKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIHJldHVybiByZWFjaGVkSFdNO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICBqb2IuZG9RdWV1ZShyZWFjaGVkSFdNLCBibG9ja2VkKTtcblx0ICAgICAgdGhpcy5fcXVldWVzLnB1c2goam9iKTtcblx0ICAgICAgYXdhaXQgdGhpcy5fZHJhaW5BbGwoKTtcblx0ICAgICAgcmV0dXJuIHJlYWNoZWRIV007XG5cdCAgICB9XG5cblx0ICAgIF9yZWNlaXZlKGpvYikge1xuXHQgICAgICBpZiAodGhpcy5fc3RhdGVzLmpvYlN0YXR1cyhqb2Iub3B0aW9ucy5pZCkgIT0gbnVsbCkge1xuXHQgICAgICAgIGpvYi5fcmVqZWN0KG5ldyBCb3R0bGVuZWNrLnByb3RvdHlwZS5Cb3R0bGVuZWNrRXJyb3IoYEEgam9iIHdpdGggdGhlIHNhbWUgaWQgYWxyZWFkeSBleGlzdHMgKGlkPSR7am9iLm9wdGlvbnMuaWR9KWApKTtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgam9iLmRvUmVjZWl2ZSgpO1xuXHQgICAgICAgIHJldHVybiB0aGlzLl9zdWJtaXRMb2NrLnNjaGVkdWxlKHRoaXMuX2FkZFRvUXVldWUsIGpvYik7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgc3VibWl0KC4uLmFyZ3MpIHtcblx0ICAgICAgdmFyIGNiLCBmbiwgam9iLCBvcHRpb25zLCByZWYsIHJlZjEsIHRhc2s7XG5cdCAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgcmVmID0gYXJncywgW2ZuLCAuLi5hcmdzXSA9IHJlZiwgW2NiXSA9IHNwbGljZS5jYWxsKGFyZ3MsIC0xKTtcblx0ICAgICAgICBvcHRpb25zID0gcGFyc2VyJDUubG9hZCh7fSwgdGhpcy5qb2JEZWZhdWx0cyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmVmMSA9IGFyZ3MsIFtvcHRpb25zLCBmbiwgLi4uYXJnc10gPSByZWYxLCBbY2JdID0gc3BsaWNlLmNhbGwoYXJncywgLTEpO1xuXHQgICAgICAgIG9wdGlvbnMgPSBwYXJzZXIkNS5sb2FkKG9wdGlvbnMsIHRoaXMuam9iRGVmYXVsdHMpO1xuXHQgICAgICB9XG5cdCAgICAgIHRhc2sgPSAoLi4uYXJncykgPT4ge1xuXHQgICAgICAgIHJldHVybiBuZXcgdGhpcy5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICAgICAgcmV0dXJuIGZuKC4uLmFyZ3MsIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChhcmdzWzBdICE9IG51bGwgPyByZWplY3QgOiByZXNvbHZlKShhcmdzKTtcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9O1xuXHQgICAgICBqb2IgPSBuZXcgSm9iJDEodGFzaywgYXJncywgb3B0aW9ucywgdGhpcy5qb2JEZWZhdWx0cywgdGhpcy5yZWplY3RPbkRyb3AsIHRoaXMuRXZlbnRzLCB0aGlzLl9zdGF0ZXMsIHRoaXMuUHJvbWlzZSk7XG5cdCAgICAgIGpvYi5wcm9taXNlLnRoZW4oZnVuY3Rpb24oYXJncykge1xuXHQgICAgICAgIHJldHVybiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIiA/IGNiKC4uLmFyZ3MpIDogdm9pZCAwO1xuXHQgICAgICB9KS5jYXRjaChmdW5jdGlvbihhcmdzKSB7XG5cdCAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0ICAgICAgICAgIHJldHVybiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIiA/IGNiKC4uLmFyZ3MpIDogdm9pZCAwO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgPyBjYihhcmdzKSA6IHZvaWQgMDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICByZXR1cm4gdGhpcy5fcmVjZWl2ZShqb2IpO1xuXHQgICAgfVxuXG5cdCAgICBzY2hlZHVsZSguLi5hcmdzKSB7XG5cdCAgICAgIHZhciBqb2IsIG9wdGlvbnMsIHRhc2s7XG5cdCAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgW3Rhc2ssIC4uLmFyZ3NdID0gYXJncztcblx0ICAgICAgICBvcHRpb25zID0ge307XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgW29wdGlvbnMsIHRhc2ssIC4uLmFyZ3NdID0gYXJncztcblx0ICAgICAgfVxuXHQgICAgICBqb2IgPSBuZXcgSm9iJDEodGFzaywgYXJncywgb3B0aW9ucywgdGhpcy5qb2JEZWZhdWx0cywgdGhpcy5yZWplY3RPbkRyb3AsIHRoaXMuRXZlbnRzLCB0aGlzLl9zdGF0ZXMsIHRoaXMuUHJvbWlzZSk7XG5cdCAgICAgIHRoaXMuX3JlY2VpdmUoam9iKTtcblx0ICAgICAgcmV0dXJuIGpvYi5wcm9taXNlO1xuXHQgICAgfVxuXG5cdCAgICB3cmFwKGZuKSB7XG5cdCAgICAgIHZhciBzY2hlZHVsZSwgd3JhcHBlZDtcblx0ICAgICAgc2NoZWR1bGUgPSB0aGlzLnNjaGVkdWxlLmJpbmQodGhpcyk7XG5cdCAgICAgIHdyYXBwZWQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG5cdCAgICAgICAgcmV0dXJuIHNjaGVkdWxlKGZuLmJpbmQodGhpcyksIC4uLmFyZ3MpO1xuXHQgICAgICB9O1xuXHQgICAgICB3cmFwcGVkLndpdGhPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucywgLi4uYXJncykge1xuXHQgICAgICAgIHJldHVybiBzY2hlZHVsZShvcHRpb25zLCBmbiwgLi4uYXJncyk7XG5cdCAgICAgIH07XG5cdCAgICAgIHJldHVybiB3cmFwcGVkO1xuXHQgICAgfVxuXG5cdCAgICBhc3luYyB1cGRhdGVTZXR0aW5ncyhvcHRpb25zID0ge30pIHtcblx0ICAgICAgYXdhaXQgdGhpcy5fc3RvcmUuX191cGRhdGVTZXR0aW5nc19fKHBhcnNlciQ1Lm92ZXJ3cml0ZShvcHRpb25zLCB0aGlzLnN0b3JlRGVmYXVsdHMpKTtcblx0ICAgICAgcGFyc2VyJDUub3ZlcndyaXRlKG9wdGlvbnMsIHRoaXMuaW5zdGFuY2VEZWZhdWx0cywgdGhpcyk7XG5cdCAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfVxuXG5cdCAgICBjdXJyZW50UmVzZXJ2b2lyKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuX19jdXJyZW50UmVzZXJ2b2lyX18oKTtcblx0ICAgIH1cblxuXHQgICAgaW5jcmVtZW50UmVzZXJ2b2lyKGluY3IgPSAwKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5fX2luY3JlbWVudFJlc2Vydm9pcl9fKGluY3IpO1xuXHQgICAgfVxuXG5cdCAgfVxuXHQgIEJvdHRsZW5lY2suZGVmYXVsdCA9IEJvdHRsZW5lY2s7XG5cblx0ICBCb3R0bGVuZWNrLkV2ZW50cyA9IEV2ZW50cyQ0O1xuXG5cdCAgQm90dGxlbmVjay52ZXJzaW9uID0gQm90dGxlbmVjay5wcm90b3R5cGUudmVyc2lvbiA9IHJlcXVpcmUkJDgudmVyc2lvbjtcblxuXHQgIEJvdHRsZW5lY2suc3RyYXRlZ3kgPSBCb3R0bGVuZWNrLnByb3RvdHlwZS5zdHJhdGVneSA9IHtcblx0ICAgIExFQUs6IDEsXG5cdCAgICBPVkVSRkxPVzogMixcblx0ICAgIE9WRVJGTE9XX1BSSU9SSVRZOiA0LFxuXHQgICAgQkxPQ0s6IDNcblx0ICB9O1xuXG5cdCAgQm90dGxlbmVjay5Cb3R0bGVuZWNrRXJyb3IgPSBCb3R0bGVuZWNrLnByb3RvdHlwZS5Cb3R0bGVuZWNrRXJyb3IgPSBCb3R0bGVuZWNrRXJyb3JfMTtcblxuXHQgIEJvdHRsZW5lY2suR3JvdXAgPSBCb3R0bGVuZWNrLnByb3RvdHlwZS5Hcm91cCA9IEdyb3VwXzE7XG5cblx0ICBCb3R0bGVuZWNrLlJlZGlzQ29ubmVjdGlvbiA9IEJvdHRsZW5lY2sucHJvdG90eXBlLlJlZGlzQ29ubmVjdGlvbiA9IHJlcXVpcmUkJDI7XG5cblx0ICBCb3R0bGVuZWNrLklPUmVkaXNDb25uZWN0aW9uID0gQm90dGxlbmVjay5wcm90b3R5cGUuSU9SZWRpc0Nvbm5lY3Rpb24gPSByZXF1aXJlJCQzO1xuXG5cdCAgQm90dGxlbmVjay5CYXRjaGVyID0gQm90dGxlbmVjay5wcm90b3R5cGUuQmF0Y2hlciA9IEJhdGNoZXJfMTtcblxuXHQgIEJvdHRsZW5lY2sucHJvdG90eXBlLmpvYkRlZmF1bHRzID0ge1xuXHQgICAgcHJpb3JpdHk6IERFRkFVTFRfUFJJT1JJVFkkMSxcblx0ICAgIHdlaWdodDogMSxcblx0ICAgIGV4cGlyYXRpb246IG51bGwsXG5cdCAgICBpZDogXCI8bm8taWQ+XCJcblx0ICB9O1xuXG5cdCAgQm90dGxlbmVjay5wcm90b3R5cGUuc3RvcmVEZWZhdWx0cyA9IHtcblx0ICAgIG1heENvbmN1cnJlbnQ6IG51bGwsXG5cdCAgICBtaW5UaW1lOiAwLFxuXHQgICAgaGlnaFdhdGVyOiBudWxsLFxuXHQgICAgc3RyYXRlZ3k6IEJvdHRsZW5lY2sucHJvdG90eXBlLnN0cmF0ZWd5LkxFQUssXG5cdCAgICBwZW5hbHR5OiBudWxsLFxuXHQgICAgcmVzZXJ2b2lyOiBudWxsLFxuXHQgICAgcmVzZXJ2b2lyUmVmcmVzaEludGVydmFsOiBudWxsLFxuXHQgICAgcmVzZXJ2b2lyUmVmcmVzaEFtb3VudDogbnVsbCxcblx0ICAgIHJlc2Vydm9pckluY3JlYXNlSW50ZXJ2YWw6IG51bGwsXG5cdCAgICByZXNlcnZvaXJJbmNyZWFzZUFtb3VudDogbnVsbCxcblx0ICAgIHJlc2Vydm9pckluY3JlYXNlTWF4aW11bTogbnVsbFxuXHQgIH07XG5cblx0ICBCb3R0bGVuZWNrLnByb3RvdHlwZS5sb2NhbFN0b3JlRGVmYXVsdHMgPSB7XG5cdCAgICBQcm9taXNlOiBQcm9taXNlLFxuXHQgICAgdGltZW91dDogbnVsbCxcblx0ICAgIGhlYXJ0YmVhdEludGVydmFsOiAyNTBcblx0ICB9O1xuXG5cdCAgQm90dGxlbmVjay5wcm90b3R5cGUucmVkaXNTdG9yZURlZmF1bHRzID0ge1xuXHQgICAgUHJvbWlzZTogUHJvbWlzZSxcblx0ICAgIHRpbWVvdXQ6IG51bGwsXG5cdCAgICBoZWFydGJlYXRJbnRlcnZhbDogNTAwMCxcblx0ICAgIGNsaWVudFRpbWVvdXQ6IDEwMDAwLFxuXHQgICAgUmVkaXM6IG51bGwsXG5cdCAgICBjbGllbnRPcHRpb25zOiB7fSxcblx0ICAgIGNsdXN0ZXJOb2RlczogbnVsbCxcblx0ICAgIGNsZWFyRGF0YXN0b3JlOiBmYWxzZSxcblx0ICAgIGNvbm5lY3Rpb246IG51bGxcblx0ICB9O1xuXG5cdCAgQm90dGxlbmVjay5wcm90b3R5cGUuaW5zdGFuY2VEZWZhdWx0cyA9IHtcblx0ICAgIGRhdGFzdG9yZTogXCJsb2NhbFwiLFxuXHQgICAgY29ubmVjdGlvbjogbnVsbCxcblx0ICAgIGlkOiBcIjxuby1pZD5cIixcblx0ICAgIHJlamVjdE9uRHJvcDogdHJ1ZSxcblx0ICAgIHRyYWNrRG9uZVN0YXR1czogZmFsc2UsXG5cdCAgICBQcm9taXNlOiBQcm9taXNlXG5cdCAgfTtcblxuXHQgIEJvdHRsZW5lY2sucHJvdG90eXBlLnN0b3BEZWZhdWx0cyA9IHtcblx0ICAgIGVucXVldWVFcnJvck1lc3NhZ2U6IFwiVGhpcyBsaW1pdGVyIGhhcyBiZWVuIHN0b3BwZWQgYW5kIGNhbm5vdCBhY2NlcHQgbmV3IGpvYnMuXCIsXG5cdCAgICBkcm9wV2FpdGluZ0pvYnM6IHRydWUsXG5cdCAgICBkcm9wRXJyb3JNZXNzYWdlOiBcIlRoaXMgbGltaXRlciBoYXMgYmVlbiBzdG9wcGVkLlwiXG5cdCAgfTtcblxuXHQgIHJldHVybiBCb3R0bGVuZWNrO1xuXG5cdH0pLmNhbGwoY29tbW9uanNHbG9iYWwpO1xuXG5cdHZhciBCb3R0bGVuZWNrXzEgPSBCb3R0bGVuZWNrO1xuXG5cdHZhciBsaWIgPSBCb3R0bGVuZWNrXzE7XG5cblx0cmV0dXJuIGxpYjtcblxufSkpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2J0b2Eoc3RyKSB7XG4gIHJldHVybiBidG9hKHN0cilcbn1cbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcblxuY29uc3QgZXh0cmFjdFBhdGhSZWdleCA9IC9cXHMrYXQuKig/OlxcKHxcXHMpKC4qKVxcKT8vO1xuY29uc3QgcGF0aFJlZ2V4ID0gL14oPzooPzooPzpub2RlfCg/OmludGVybmFsXFwvW1xcdy9dKnwuKm5vZGVfbW9kdWxlc1xcLyg/OmJhYmVsLXBvbHlmaWxsfHBpcmF0ZXMpXFwvLiopP1xcdyspXFwuanM6XFxkKzpcXGQrKXxuYXRpdmUpLztcbmNvbnN0IGhvbWVEaXIgPSB0eXBlb2Ygb3MuaG9tZWRpciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IG9zLmhvbWVkaXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoc3RhY2ssIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe3ByZXR0eTogZmFsc2V9LCBvcHRpb25zKTtcblxuXHRyZXR1cm4gc3RhY2sucmVwbGFjZSgvXFxcXC9nLCAnLycpXG5cdFx0LnNwbGl0KCdcXG4nKVxuXHRcdC5maWx0ZXIobGluZSA9PiB7XG5cdFx0XHRjb25zdCBwYXRoTWF0Y2hlcyA9IGxpbmUubWF0Y2goZXh0cmFjdFBhdGhSZWdleCk7XG5cdFx0XHRpZiAocGF0aE1hdGNoZXMgPT09IG51bGwgfHwgIXBhdGhNYXRjaGVzWzFdKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdGhNYXRjaGVzWzFdO1xuXG5cdFx0XHQvLyBFbGVjdHJvblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRtYXRjaC5pbmNsdWRlcygnLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvZWxlY3Ryb24uYXNhcicpIHx8XG5cdFx0XHRcdG1hdGNoLmluY2x1ZGVzKCcuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9kZWZhdWx0X2FwcC5hc2FyJylcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAhcGF0aFJlZ2V4LnRlc3QobWF0Y2gpO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSAnJylcblx0XHQubWFwKGxpbmUgPT4ge1xuXHRcdFx0aWYgKG9wdGlvbnMucHJldHR5KSB7XG5cdFx0XHRcdHJldHVybiBsaW5lLnJlcGxhY2UoZXh0cmFjdFBhdGhSZWdleCwgKG0sIHAxKSA9PiBtLnJlcGxhY2UocDEsIHAxLnJlcGxhY2UoaG9tZURpciwgJ34nKSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbGluZTtcblx0XHR9KVxuXHRcdC5qb2luKCdcXG4nKTtcbn07XG4iLCJjbGFzcyBEZXByZWNhdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpOyAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIChvbmx5IGF2YWlsYWJsZSBvbiBWOClcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9ICdEZXByZWNhdGlvbic7XG4gIH1cblxufVxuXG5leHBvcnQgeyBEZXByZWNhdGlvbiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHJpbmcsIGNvdW50ID0gMSwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdGluZGVudDogJyAnLFxuXHRcdGluY2x1ZGVFbXB0eUxpbmVzOiBmYWxzZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdGBFeHBlY3RlZCBcXGBpbnB1dFxcYCB0byBiZSBhIFxcYHN0cmluZ1xcYCwgZ290IFxcYCR7dHlwZW9mIHN0cmluZ31cXGBgXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgY291bnQgIT09ICdudW1iZXInKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdGBFeHBlY3RlZCBcXGBjb3VudFxcYCB0byBiZSBhIFxcYG51bWJlclxcYCwgZ290IFxcYCR7dHlwZW9mIGNvdW50fVxcYGBcblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluZGVudCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0YEV4cGVjdGVkIFxcYG9wdGlvbnMuaW5kZW50XFxgIHRvIGJlIGEgXFxgc3RyaW5nXFxgLCBnb3QgXFxgJHt0eXBlb2Ygb3B0aW9ucy5pbmRlbnR9XFxgYFxuXHRcdCk7XG5cdH1cblxuXHRpZiAoY291bnQgPT09IDApIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3QgcmVnZXggPSBvcHRpb25zLmluY2x1ZGVFbXB0eUxpbmVzID8gL14vZ20gOiAvXig/IVxccyokKS9nbTtcblxuXHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnZXgsIG9wdGlvbnMuaW5kZW50LnJlcGVhdChjb3VudCkpO1xufTtcbiIsIi8vIHBrZy9kaXN0LXNyYy9vY3Rva2l0LmpzXG5pbXBvcnQgeyBPY3Rva2l0IGFzIE9jdG9raXRDb3JlIH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIjtcbmltcG9ydCB7IHBhZ2luYXRlUmVzdCB9IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tcGFnaW5hdGUtcmVzdFwiO1xuaW1wb3J0IHsgcGFnaW5hdGVHcmFwaHFsIH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1wYWdpbmF0ZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyByZXN0RW5kcG9pbnRNZXRob2RzIH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1yZXN0LWVuZHBvaW50LW1ldGhvZHNcIjtcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSBcIkBvY3Rva2l0L3BsdWdpbi1yZXRyeVwiO1xuaW1wb3J0IHsgdGhyb3R0bGluZyB9IGZyb20gXCJAb2N0b2tpdC9wbHVnaW4tdGhyb3R0bGluZ1wiO1xuXG4vLyBwa2cvZGlzdC1zcmMvdmVyc2lvbi5qc1xudmFyIFZFUlNJT04gPSBcIjMuMS4wXCI7XG5cbi8vIHBrZy9kaXN0LXNyYy9vY3Rva2l0LmpzXG5pbXBvcnQgeyBSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiQG9jdG9raXQvcmVxdWVzdC1lcnJvclwiO1xudmFyIE9jdG9raXQgPSBPY3Rva2l0Q29yZS5wbHVnaW4oXG4gIHJlc3RFbmRwb2ludE1ldGhvZHMsXG4gIHBhZ2luYXRlUmVzdCxcbiAgcGFnaW5hdGVHcmFwaHFsLFxuICByZXRyeSxcbiAgdGhyb3R0bGluZ1xuKS5kZWZhdWx0cyh7XG4gIHVzZXJBZ2VudDogYG9jdG9raXQuanMvJHtWRVJTSU9OfWAsXG4gIHRocm90dGxlOiB7XG4gICAgb25SYXRlTGltaXQsXG4gICAgb25TZWNvbmRhcnlSYXRlTGltaXRcbiAgfVxufSk7XG5mdW5jdGlvbiBvblJhdGVMaW1pdChyZXRyeUFmdGVyLCBvcHRpb25zLCBvY3Rva2l0KSB7XG4gIG9jdG9raXQubG9nLndhcm4oXG4gICAgYFJlcXVlc3QgcXVvdGEgZXhoYXVzdGVkIGZvciByZXF1ZXN0ICR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9YFxuICApO1xuICBpZiAob3B0aW9ucy5yZXF1ZXN0LnJldHJ5Q291bnQgPT09IDApIHtcbiAgICBvY3Rva2l0LmxvZy5pbmZvKGBSZXRyeWluZyBhZnRlciAke3JldHJ5QWZ0ZXJ9IHNlY29uZHMhYCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uU2Vjb25kYXJ5UmF0ZUxpbWl0KHJldHJ5QWZ0ZXIsIG9wdGlvbnMsIG9jdG9raXQpIHtcbiAgb2N0b2tpdC5sb2cud2FybihcbiAgICBgU2Vjb25kYXJ5UmF0ZUxpbWl0IGRldGVjdGVkIGZvciByZXF1ZXN0ICR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9YFxuICApO1xuICBpZiAob3B0aW9ucy5yZXF1ZXN0LnJldHJ5Q291bnQgPT09IDApIHtcbiAgICBvY3Rva2l0LmxvZy5pbmZvKGBSZXRyeWluZyBhZnRlciAke3JldHJ5QWZ0ZXJ9IHNlY29uZHMhYCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gcGtnL2Rpc3Qtc3JjL2FwcC5qc1xuaW1wb3J0IHsgQXBwIGFzIERlZmF1bHRBcHAgfSBmcm9tIFwiQG9jdG9raXQvYXBwXCI7XG5pbXBvcnQgeyBPQXV0aEFwcCBhcyBEZWZhdWx0T0F1dGhBcHAgfSBmcm9tIFwiQG9jdG9raXQvb2F1dGgtYXBwXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2RlTWlkZGxld2FyZSB9IGZyb20gXCJAb2N0b2tpdC9hcHBcIjtcbnZhciBBcHAgPSBEZWZhdWx0QXBwLmRlZmF1bHRzKHsgT2N0b2tpdCB9KTtcbnZhciBPQXV0aEFwcCA9IERlZmF1bHRPQXV0aEFwcC5kZWZhdWx0cyh7IE9jdG9raXQgfSk7XG5leHBvcnQge1xuICBBcHAsXG4gIE9BdXRoQXBwLFxuICBPY3Rva2l0LFxuICBSZXF1ZXN0RXJyb3IsXG4gIGNyZWF0ZU5vZGVNaWRkbGV3YXJlXG59O1xuIiwidmFyIHdyYXBweSA9IHJlcXVpcmUoJ3dyYXBweScpXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweShvbmNlKVxubW9kdWxlLmV4cG9ydHMuc3RyaWN0ID0gd3JhcHB5KG9uY2VTdHJpY3QpXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZVN0cmljdCcsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2VTdHJpY3QodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKSByZXR1cm4gZi52YWx1ZVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cblxuZnVuY3Rpb24gb25jZVN0cmljdCAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGYub25jZUVycm9yKVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIHZhciBuYW1lID0gZm4ubmFtZSB8fCAnRnVuY3Rpb24gd3JhcHBlZCB3aXRoIGBvbmNlYCdcbiAgZi5vbmNlRXJyb3IgPSBuYW1lICsgXCIgc2hvdWxkbid0IGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZVwiXG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDaHJvbWVUYWJzID0gKF9hKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZVN5bmNTdG9yYWdlID0gKF9hLCBmbikgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gKCkgPT4geyB9OyB9XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZVN5bmNTdG9yYWdlID0gKGtleSwgZm4pID0+IHtcbiAgICBpZiAoZm4pIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0sIGZuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoX2EsIGZuKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGZuID09PSB2b2lkIDApIHsgZm4gPSAoKSA9PiB7IH07IH1cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZUxvY2FsU3RvcmFnZSA9IChrZXksIGZuKSA9PiB7XG4gICAgaWYgKGZuKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChba2V5XSwgZm4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBzZW5kQ2hyb21lTWVzc2FnZSA9IChfYSkgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZU1lc3NhZ2UgPSAoZm4pID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZm4pO1xufTtcbiIsImZ1bmN0aW9uIHQodCxuLHIsZSxpLGEsbyl7dHJ5e3ZhciB1PXRbYV0obyksYz11LnZhbHVlfWNhdGNoKHQpe3JldHVybiB2b2lkIHIodCl9dS5kb25lP24oYyk6UHJvbWlzZS5yZXNvbHZlKGMpLnRoZW4oZSxpKX1mdW5jdGlvbiBuKG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciByPXRoaXMsZT1hcmd1bWVudHM7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihpLGEpe3ZhciBvPW4uYXBwbHkocixlKTtmdW5jdGlvbiB1KG4pe3QobyxpLGEsdSxjLFwibmV4dFwiLG4pfWZ1bmN0aW9uIGMobil7dChvLGksYSx1LGMsXCJ0aHJvd1wiLG4pfXUodm9pZCAwKX0pKX19ZnVuY3Rpb24gcih0KXtmb3IodmFyIG49bmV3IEFycmF5QnVmZmVyKHQubGVuZ3RoKSxyPW5ldyBVaW50OEFycmF5KG4pLGU9MCxpPXQubGVuZ3RoO2U8aTtlKyspcltlXT10LmNoYXJDb2RlQXQoZSk7cmV0dXJuIG59ZnVuY3Rpb24gZSh0KXtyZXR1cm4gdC5yZXBsYWNlKC89L2csXCJcIikucmVwbGFjZSgvXFwrL2csXCItXCIpLnJlcGxhY2UoL1xcLy9nLFwiX1wiKX1mdW5jdGlvbiBpKHQpe3JldHVybiBlKGJ0b2EoSlNPTi5zdHJpbmdpZnkodCkpKX12YXIgYT1mdW5jdGlvbigpe3ZhciB0PW4oKGZ1bmN0aW9uKih0KXt2YXJ7cHJpdmF0ZUtleTpuLHBheWxvYWQ6YX09dDtpZigvQkVHSU4gUlNBIFBSSVZBVEUgS0VZLy50ZXN0KG4pKXRocm93IG5ldyBFcnJvcihcIlt1bml2ZXJzYWwtZ2l0aHViLWFwcC1qd3RdIFByaXZhdGUgS2V5IGlzIGluIFBLQ1MjMSBmb3JtYXQsIGJ1dCBvbmx5IFBLQ1MjOCBpcyBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3IybS91bml2ZXJzYWwtZ2l0aHViLWFwcC1qd3QjcmVhZG1lXCIpO3ZhciBvLHU9e25hbWU6XCJSU0FTU0EtUEtDUzEtdjFfNVwiLGhhc2g6e25hbWU6XCJTSEEtMjU2XCJ9fSxjPShvPW4udHJpbSgpLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDEsLTEpLmpvaW4oXCJcIikscihhdG9iKG8pKSkscD15aWVsZCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcInBrY3M4XCIsYyx1LCExLFtcInNpZ25cIl0pLGY9ZnVuY3Rpb24odCxuKXtyZXR1cm5cIlwiLmNvbmNhdChpKHQpLFwiLlwiKS5jb25jYXQoaShuKSl9KHthbGc6XCJSUzI1NlwiLHR5cDpcIkpXVFwifSxhKSxsPXIoZikscz1mdW5jdGlvbih0KXtmb3IodmFyIG49XCJcIixyPW5ldyBVaW50OEFycmF5KHQpLGk9ci5ieXRlTGVuZ3RoLGE9MDthPGk7YSsrKW4rPVN0cmluZy5mcm9tQ2hhckNvZGUoclthXSk7cmV0dXJuIGUoYnRvYShuKSl9KHlpZWxkIGNyeXB0by5zdWJ0bGUuc2lnbih1Lm5hbWUscCxsKSk7cmV0dXJuXCJcIi5jb25jYXQoZixcIi5cIikuY29uY2F0KHMpfSkpO3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSgpO2Z1bmN0aW9uIG8odCl7cmV0dXJuIHUuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIHUoKXtyZXR1cm4odT1uKChmdW5jdGlvbioodCl7dmFye2lkOm4scHJpdmF0ZUtleTpyLG5vdzplPU1hdGguZmxvb3IoRGF0ZS5ub3coKS8xZTMpfT10LGk9ZS0zMCxvPWkrNjAwLHU9e2lhdDppLGV4cDpvLGlzczpufTtyZXR1cm57YXBwSWQ6bixleHBpcmF0aW9uOm8sdG9rZW46eWllbGQgYSh7cHJpdmF0ZUtleTpyLHBheWxvYWQ6dX0pfX0pKSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWV4cG9ydHtvIGFzIGdpdGh1YkFwcEp3dH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5idW5kbGVkLmpzLm1hcFxuIiwiZnVuY3Rpb24gZ2V0VXNlckFnZW50KCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSBcIm9iamVjdFwiICYmIFwidXNlckFnZW50XCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgXCJ2ZXJzaW9uXCIgaW4gcHJvY2Vzcykge1xuICAgICAgICByZXR1cm4gYE5vZGUuanMvJHtwcm9jZXNzLnZlcnNpb24uc3Vic3RyKDEpfSAoJHtwcm9jZXNzLnBsYXRmb3JtfTsgJHtwcm9jZXNzLmFyY2h9KWA7XG4gICAgfVxuICAgIHJldHVybiBcIjxlbnZpcm9ubWVudCB1bmRldGVjdGFibGU+XCI7XG59XG5cbmV4cG9ydCB7IGdldFVzZXJBZ2VudCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB3cmFwcGVkIGNhbGxiYWNrXG4vLyBUaGUgd3JhcHBlciBmdW5jdGlvbiBzaG91bGQgZG8gc29tZSBzdHVmZiwgYW5kIHJldHVybiBhXG4vLyBwcmVzdW1hYmx5IGRpZmZlcmVudCBjYWxsYmFjayBmdW5jdGlvbi5cbi8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IG93biBwcm9wZXJ0aWVzIGFyZSByZXRhaW5lZCwgc28gdGhhdFxuLy8gZGVjb3JhdGlvbnMgYW5kIHN1Y2ggYXJlIG5vdCBsb3N0IGFsb25nIHRoZSB3YXkuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweVxuZnVuY3Rpb24gd3JhcHB5IChmbiwgY2IpIHtcbiAgaWYgKGZuICYmIGNiKSByZXR1cm4gd3JhcHB5KGZuKShjYilcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25lZWQgd3JhcHBlciBmdW5jdGlvbicpXG5cbiAgT2JqZWN0LmtleXMoZm4pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB3cmFwcGVyW2tdID0gZm5ba11cbiAgfSlcblxuICByZXR1cm4gd3JhcHBlclxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgdmFyIHJldCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgdmFyIGNiID0gYXJnc1thcmdzLmxlbmd0aC0xXVxuICAgIGlmICh0eXBlb2YgcmV0ID09PSAnZnVuY3Rpb24nICYmIHJldCAhPT0gY2IpIHtcbiAgICAgIE9iamVjdC5rZXlzKGNiKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldFtrXSA9IGNiW2tdXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBAbW9kdWxlIExSVUNhY2hlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTFJVQ2FjaGUgPSB2b2lkIDA7XG5jb25zdCBwZXJmID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSAnb2JqZWN0JyAmJlxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gcGVyZm9ybWFuY2VcbiAgICA6IERhdGU7XG5jb25zdCB3YXJuZWQgPSBuZXcgU2V0KCk7XG4vKiBjOCBpZ25vcmUgc3RhcnQgKi9cbmNvbnN0IFBST0NFU1MgPSAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmICEhcHJvY2VzcyA/IHByb2Nlc3MgOiB7fSk7XG4vKiBjOCBpZ25vcmUgc3RhcnQgKi9cbmNvbnN0IGVtaXRXYXJuaW5nID0gKG1zZywgdHlwZSwgY29kZSwgZm4pID0+IHtcbiAgICB0eXBlb2YgUFJPQ0VTUy5lbWl0V2FybmluZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IFBST0NFU1MuZW1pdFdhcm5pbmcobXNnLCB0eXBlLCBjb2RlLCBmbilcbiAgICAgICAgOiBjb25zb2xlLmVycm9yKGBbJHtjb2RlfV0gJHt0eXBlfTogJHttc2d9YCk7XG59O1xubGV0IEFDID0gZ2xvYmFsVGhpcy5BYm9ydENvbnRyb2xsZXI7XG5sZXQgQVMgPSBnbG9iYWxUaGlzLkFib3J0U2lnbmFsO1xuLyogYzggaWdub3JlIHN0YXJ0ICovXG5pZiAodHlwZW9mIEFDID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIEFTID0gY2xhc3MgQWJvcnRTaWduYWwge1xuICAgICAgICBvbmFib3J0O1xuICAgICAgICBfb25hYm9ydCA9IFtdO1xuICAgICAgICByZWFzb247XG4gICAgICAgIGFib3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihfLCBmbikge1xuICAgICAgICAgICAgdGhpcy5fb25hYm9ydC5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy9AdHMtaWdub3JlXG4gICAgQUMgPSBjbGFzcyBBYm9ydENvbnRyb2xsZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHdhcm5BQ1BvbHlmaWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2lnbmFsID0gbmV3IEFTKCk7XG4gICAgICAgIGFib3J0KHJlYXNvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2lnbmFsLmFib3J0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLnNpZ25hbC5yZWFzb24gPSByZWFzb247XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZuIG9mIHRoaXMuc2lnbmFsLl9vbmFib3J0KSB7XG4gICAgICAgICAgICAgICAgZm4ocmVhc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2lnbmFsLm9uYWJvcnQ/LihyZWFzb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgcHJpbnRBQ1BvbHlmaWxsV2FybmluZyA9IFBST0NFU1MuZW52Py5MUlVfQ0FDSEVfSUdOT1JFX0FDX1dBUk5JTkcgIT09ICcxJztcbiAgICBjb25zdCB3YXJuQUNQb2x5ZmlsbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFwcmludEFDUG9seWZpbGxXYXJuaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwcmludEFDUG9seWZpbGxXYXJuaW5nID0gZmFsc2U7XG4gICAgICAgIGVtaXRXYXJuaW5nKCdBYm9ydENvbnRyb2xsZXIgaXMgbm90IGRlZmluZWQuIElmIHVzaW5nIGxydS1jYWNoZSBpbiAnICtcbiAgICAgICAgICAgICdub2RlIDE0LCBsb2FkIGFuIEFib3J0Q29udHJvbGxlciBwb2x5ZmlsbCBmcm9tIHRoZSAnICtcbiAgICAgICAgICAgICdgbm9kZS1hYm9ydC1jb250cm9sbGVyYCBwYWNrYWdlLiBBIG1pbmltYWwgcG9seWZpbGwgaXMgJyArXG4gICAgICAgICAgICAncHJvdmlkZWQgZm9yIHVzZSBieSBMUlVDYWNoZS5mZXRjaCgpLCBidXQgaXQgc2hvdWxkIG5vdCBiZSAnICtcbiAgICAgICAgICAgICdyZWxpZWQgdXBvbiBpbiBvdGhlciBjb250ZXh0cyAoZWcsIHBhc3NpbmcgaXQgdG8gb3RoZXIgQVBJcyB0aGF0ICcgK1xuICAgICAgICAgICAgJ3VzZSBBYm9ydENvbnRyb2xsZXIvQWJvcnRTaWduYWwgbWlnaHQgaGF2ZSB1bmRlc2lyYWJsZSBlZmZlY3RzKS4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBkaXNhYmxlIHRoaXMgd2l0aCBMUlVfQ0FDSEVfSUdOT1JFX0FDX1dBUk5JTkc9MSBpbiB0aGUgZW52LicsICdOT19BQk9SVF9DT05UUk9MTEVSJywgJ0VOT1RTVVAnLCB3YXJuQUNQb2x5ZmlsbCk7XG4gICAgfTtcbn1cbi8qIGM4IGlnbm9yZSBzdG9wICovXG5jb25zdCBzaG91bGRXYXJuID0gKGNvZGUpID0+ICF3YXJuZWQuaGFzKGNvZGUpO1xuY29uc3QgVFlQRSA9IFN5bWJvbCgndHlwZScpO1xuY29uc3QgaXNQb3NJbnQgPSAobikgPT4gbiAmJiBuID09PSBNYXRoLmZsb29yKG4pICYmIG4gPiAwICYmIGlzRmluaXRlKG4pO1xuLyogYzggaWdub3JlIHN0YXJ0ICovXG4vLyBUaGlzIGlzIGEgbGl0dGxlIGJpdCByaWRpY3Vsb3VzLCB0YmguXG4vLyBUaGUgbWF4aW11bSBhcnJheSBsZW5ndGggaXMgMl4zMi0xIG9yIHRoZXJlYWJvdXRzIG9uIG1vc3QgSlMgaW1wbHMuXG4vLyBBbmQgd2VsbCBiZWZvcmUgdGhhdCBwb2ludCwgeW91J3JlIGNhY2hpbmcgdGhlIGVudGlyZSB3b3JsZCwgSSBtZWFuLFxuLy8gdGhhdCdzIH4zMkdCIG9mIGp1c3QgaW50ZWdlcnMgZm9yIHRoZSBuZXh0L3ByZXYgbGlua3MsIHBsdXMgd2hhdGV2ZXJcbi8vIGVsc2UgdG8gaG9sZCB0aGF0IG1hbnkga2V5cyBhbmQgdmFsdWVzLiAgSnVzdCBmaWxsaW5nIHRoZSBtZW1vcnkgd2l0aFxuLy8gemVyb2VzIGF0IGluaXQgdGltZSBpcyBicnV0YWwgd2hlbiB5b3UgZ2V0IHRoYXQgYmlnLlxuLy8gQnV0IHdoeSBub3QgYmUgY29tcGxldGU/XG4vLyBNYXliZSBpbiB0aGUgZnV0dXJlLCB0aGVzZSBsaW1pdHMgd2lsbCBoYXZlIGV4cGFuZGVkLlxuY29uc3QgZ2V0VWludEFycmF5ID0gKG1heCkgPT4gIWlzUG9zSW50KG1heClcbiAgICA/IG51bGxcbiAgICA6IG1heCA8PSBNYXRoLnBvdygyLCA4KVxuICAgICAgICA/IFVpbnQ4QXJyYXlcbiAgICAgICAgOiBtYXggPD0gTWF0aC5wb3coMiwgMTYpXG4gICAgICAgICAgICA/IFVpbnQxNkFycmF5XG4gICAgICAgICAgICA6IG1heCA8PSBNYXRoLnBvdygyLCAzMilcbiAgICAgICAgICAgICAgICA/IFVpbnQzMkFycmF5XG4gICAgICAgICAgICAgICAgOiBtYXggPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICAgICAgICAgICAgICAgICAgPyBaZXJvQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuLyogYzggaWdub3JlIHN0b3AgKi9cbmNsYXNzIFplcm9BcnJheSBleHRlbmRzIEFycmF5IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHN1cGVyKHNpemUpO1xuICAgICAgICB0aGlzLmZpbGwoMCk7XG4gICAgfVxufVxuY2xhc3MgU3RhY2sge1xuICAgIGhlYXA7XG4gICAgbGVuZ3RoO1xuICAgIC8vIHByaXZhdGUgY29uc3RydWN0b3JcbiAgICBzdGF0aWMgI2NvbnN0cnVjdGluZyA9IGZhbHNlO1xuICAgIHN0YXRpYyBjcmVhdGUobWF4KSB7XG4gICAgICAgIGNvbnN0IEhlYXBDbHMgPSBnZXRVaW50QXJyYXkobWF4KTtcbiAgICAgICAgaWYgKCFIZWFwQ2xzKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBTdGFjay4jY29uc3RydWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTdGFjayhtYXgsIEhlYXBDbHMpO1xuICAgICAgICBTdGFjay4jY29uc3RydWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihtYXgsIEhlYXBDbHMpIHtcbiAgICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICAgIGlmICghU3RhY2suI2NvbnN0cnVjdGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5zdGFudGlhdGUgU3RhY2sgdXNpbmcgU3RhY2suY3JlYXRlKG4pJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICAgICAgdGhpcy5oZWFwID0gbmV3IEhlYXBDbHMobWF4KTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBwdXNoKG4pIHtcbiAgICAgICAgdGhpcy5oZWFwW3RoaXMubGVuZ3RoKytdID0gbjtcbiAgICB9XG4gICAgcG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwWy0tdGhpcy5sZW5ndGhdO1xuICAgIH1cbn1cbi8qKlxuICogRGVmYXVsdCBleHBvcnQsIHRoZSB0aGluZyB5b3UncmUgdXNpbmcgdGhpcyBtb2R1bGUgdG8gZ2V0LlxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0ICh3aXRoIHRoZSBleGNlcHRpb24gb2ZcbiAqIHtAbGluayBPcHRpb25zQmFzZS5tYXh9IGFuZCB7QGxpbmsgT3B0aW9uc0Jhc2UubWF4U2l6ZX0pIGFyZSBhZGRlZCBhc1xuICogbm9ybWFsIHB1YmxpYyBtZW1iZXJzLiAoYG1heGAgYW5kIGBtYXhCYXNlYCBhcmUgcmVhZC1vbmx5IGdldHRlcnMuKVxuICogQ2hhbmdpbmcgYW55IG9mIHRoZXNlIHdpbGwgYWx0ZXIgdGhlIGRlZmF1bHRzIGZvciBzdWJzZXF1ZW50IG1ldGhvZCBjYWxscyxcbiAqIGJ1dCBpcyBvdGhlcndpc2Ugc2FmZS5cbiAqL1xuY2xhc3MgTFJVQ2FjaGUge1xuICAgIC8vIHByb3BlcnRpZXMgY29taW5nIGluIGZyb20gdGhlIG9wdGlvbnMgb2YgdGhlc2UsIG9ubHkgbWF4IGFuZCBtYXhTaXplXG4gICAgLy8gcmVhbGx5ICpuZWVkKiB0byBiZSBwcm90ZWN0ZWQuIFRoZSByZXN0IGNhbiBiZSBtb2RpZmllZCwgYXMgdGhleSBqdXN0XG4gICAgLy8gc2V0IGRlZmF1bHRzIGZvciB2YXJpb3VzIG1ldGhvZHMuXG4gICAgI21heDtcbiAgICAjbWF4U2l6ZTtcbiAgICAjZGlzcG9zZTtcbiAgICAjZGlzcG9zZUFmdGVyO1xuICAgICNmZXRjaE1ldGhvZDtcbiAgICAvKipcbiAgICAgKiB7QGxpbmsgTFJVQ2FjaGUuT3B0aW9uc0Jhc2UudHRsfVxuICAgICAqL1xuICAgIHR0bDtcbiAgICAvKipcbiAgICAgKiB7QGxpbmsgTFJVQ2FjaGUuT3B0aW9uc0Jhc2UudHRsUmVzb2x1dGlvbn1cbiAgICAgKi9cbiAgICB0dGxSZXNvbHV0aW9uO1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS50dGxBdXRvcHVyZ2V9XG4gICAgICovXG4gICAgdHRsQXV0b3B1cmdlO1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS51cGRhdGVBZ2VPbkdldH1cbiAgICAgKi9cbiAgICB1cGRhdGVBZ2VPbkdldDtcbiAgICAvKipcbiAgICAgKiB7QGxpbmsgTFJVQ2FjaGUuT3B0aW9uc0Jhc2UudXBkYXRlQWdlT25IYXN9XG4gICAgICovXG4gICAgdXBkYXRlQWdlT25IYXM7XG4gICAgLyoqXG4gICAgICoge0BsaW5rIExSVUNhY2hlLk9wdGlvbnNCYXNlLmFsbG93U3RhbGV9XG4gICAgICovXG4gICAgYWxsb3dTdGFsZTtcbiAgICAvKipcbiAgICAgKiB7QGxpbmsgTFJVQ2FjaGUuT3B0aW9uc0Jhc2Uubm9EaXNwb3NlT25TZXR9XG4gICAgICovXG4gICAgbm9EaXNwb3NlT25TZXQ7XG4gICAgLyoqXG4gICAgICoge0BsaW5rIExSVUNhY2hlLk9wdGlvbnNCYXNlLm5vVXBkYXRlVFRMfVxuICAgICAqL1xuICAgIG5vVXBkYXRlVFRMO1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5tYXhFbnRyeVNpemV9XG4gICAgICovXG4gICAgbWF4RW50cnlTaXplO1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5zaXplQ2FsY3VsYXRpb259XG4gICAgICovXG4gICAgc2l6ZUNhbGN1bGF0aW9uO1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5ub0RlbGV0ZU9uRmV0Y2hSZWplY3Rpb259XG4gICAgICovXG4gICAgbm9EZWxldGVPbkZldGNoUmVqZWN0aW9uO1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5ub0RlbGV0ZU9uU3RhbGVHZXR9XG4gICAgICovXG4gICAgbm9EZWxldGVPblN0YWxlR2V0O1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5hbGxvd1N0YWxlT25GZXRjaEFib3J0fVxuICAgICAqL1xuICAgIGFsbG93U3RhbGVPbkZldGNoQWJvcnQ7XG4gICAgLyoqXG4gICAgICoge0BsaW5rIExSVUNhY2hlLk9wdGlvbnNCYXNlLmFsbG93U3RhbGVPbkZldGNoUmVqZWN0aW9ufVxuICAgICAqL1xuICAgIGFsbG93U3RhbGVPbkZldGNoUmVqZWN0aW9uO1xuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5pZ25vcmVGZXRjaEFib3J0fVxuICAgICAqL1xuICAgIGlnbm9yZUZldGNoQWJvcnQ7XG4gICAgLy8gY29tcHV0ZWQgcHJvcGVydGllc1xuICAgICNzaXplO1xuICAgICNjYWxjdWxhdGVkU2l6ZTtcbiAgICAja2V5TWFwO1xuICAgICNrZXlMaXN0O1xuICAgICN2YWxMaXN0O1xuICAgICNuZXh0O1xuICAgICNwcmV2O1xuICAgICNoZWFkO1xuICAgICN0YWlsO1xuICAgICNmcmVlO1xuICAgICNkaXNwb3NlZDtcbiAgICAjc2l6ZXM7XG4gICAgI3N0YXJ0cztcbiAgICAjdHRscztcbiAgICAjaGFzRGlzcG9zZTtcbiAgICAjaGFzRmV0Y2hNZXRob2Q7XG4gICAgI2hhc0Rpc3Bvc2VBZnRlcjtcbiAgICAvKipcbiAgICAgKiBEbyBub3QgY2FsbCB0aGlzIG1ldGhvZCB1bmxlc3MgeW91IG5lZWQgdG8gaW5zcGVjdCB0aGVcbiAgICAgKiBpbm5lciB3b3JraW5ncyBvZiB0aGUgY2FjaGUuICBJZiBhbnl0aGluZyByZXR1cm5lZCBieSB0aGlzXG4gICAgICogb2JqZWN0IGlzIG1vZGlmaWVkIGluIGFueSB3YXksIHN0cmFuZ2UgYnJlYWthZ2UgbWF5IG9jY3VyLlxuICAgICAqXG4gICAgICogVGhlc2UgZmllbGRzIGFyZSBwcml2YXRlIGZvciBhIHJlYXNvbiFcbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyB1bnNhZmVFeHBvc2VJbnRlcm5hbHMoYykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICAgICAgc3RhcnRzOiBjLiNzdGFydHMsXG4gICAgICAgICAgICB0dGxzOiBjLiN0dGxzLFxuICAgICAgICAgICAgc2l6ZXM6IGMuI3NpemVzLFxuICAgICAgICAgICAga2V5TWFwOiBjLiNrZXlNYXAsXG4gICAgICAgICAgICBrZXlMaXN0OiBjLiNrZXlMaXN0LFxuICAgICAgICAgICAgdmFsTGlzdDogYy4jdmFsTGlzdCxcbiAgICAgICAgICAgIG5leHQ6IGMuI25leHQsXG4gICAgICAgICAgICBwcmV2OiBjLiNwcmV2LFxuICAgICAgICAgICAgZ2V0IGhlYWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuI2hlYWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IHRhaWwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuI3RhaWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJlZTogYy4jZnJlZSxcbiAgICAgICAgICAgIC8vIG1ldGhvZHNcbiAgICAgICAgICAgIGlzQmFja2dyb3VuZEZldGNoOiAocCkgPT4gYy4jaXNCYWNrZ3JvdW5kRmV0Y2gocCksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmV0Y2g6IChrLCBpbmRleCwgb3B0aW9ucywgY29udGV4dCkgPT4gYy4jYmFja2dyb3VuZEZldGNoKGssIGluZGV4LCBvcHRpb25zLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1vdmVUb1RhaWw6IChpbmRleCkgPT4gYy4jbW92ZVRvVGFpbChpbmRleCksXG4gICAgICAgICAgICBpbmRleGVzOiAob3B0aW9ucykgPT4gYy4jaW5kZXhlcyhvcHRpb25zKSxcbiAgICAgICAgICAgIHJpbmRleGVzOiAob3B0aW9ucykgPT4gYy4jcmluZGV4ZXMob3B0aW9ucyksXG4gICAgICAgICAgICBpc1N0YWxlOiAoaW5kZXgpID0+IGMuI2lzU3RhbGUoaW5kZXgpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBQcm90ZWN0ZWQgcmVhZC1vbmx5IG1lbWJlcnNcbiAgICAvKipcbiAgICAgKiB7QGxpbmsgTFJVQ2FjaGUuT3B0aW9uc0Jhc2UubWF4fSAocmVhZC1vbmx5KVxuICAgICAqL1xuICAgIGdldCBtYXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNtYXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5tYXhTaXplfSAocmVhZC1vbmx5KVxuICAgICAqL1xuICAgIGdldCBtYXhTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbWF4U2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHRvdGFsIGNvbXB1dGVkIHNpemUgb2YgaXRlbXMgaW4gdGhlIGNhY2hlIChyZWFkLW9ubHkpXG4gICAgICovXG4gICAgZ2V0IGNhbGN1bGF0ZWRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2FsY3VsYXRlZFNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgc3RvcmVkIGluIHRoZSBjYWNoZSAocmVhZC1vbmx5KVxuICAgICAqL1xuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIExSVUNhY2hlLk9wdGlvbnNCYXNlLmZldGNoTWV0aG9kfSAocmVhZC1vbmx5KVxuICAgICAqL1xuICAgIGdldCBmZXRjaE1ldGhvZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ZldGNoTWV0aG9kO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgTFJVQ2FjaGUuT3B0aW9uc0Jhc2UuZGlzcG9zZX0gKHJlYWQtb25seSlcbiAgICAgKi9cbiAgICBnZXQgZGlzcG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rpc3Bvc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5kaXNwb3NlQWZ0ZXJ9IChyZWFkLW9ubHkpXG4gICAgICovXG4gICAgZ2V0IGRpc3Bvc2VBZnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rpc3Bvc2VBZnRlcjtcbiAgICB9XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IG1heCA9IDAsIHR0bCwgdHRsUmVzb2x1dGlvbiA9IDEsIHR0bEF1dG9wdXJnZSwgdXBkYXRlQWdlT25HZXQsIHVwZGF0ZUFnZU9uSGFzLCBhbGxvd1N0YWxlLCBkaXNwb3NlLCBkaXNwb3NlQWZ0ZXIsIG5vRGlzcG9zZU9uU2V0LCBub1VwZGF0ZVRUTCwgbWF4U2l6ZSA9IDAsIG1heEVudHJ5U2l6ZSA9IDAsIHNpemVDYWxjdWxhdGlvbiwgZmV0Y2hNZXRob2QsIG5vRGVsZXRlT25GZXRjaFJlamVjdGlvbiwgbm9EZWxldGVPblN0YWxlR2V0LCBhbGxvd1N0YWxlT25GZXRjaFJlamVjdGlvbiwgYWxsb3dTdGFsZU9uRmV0Y2hBYm9ydCwgaWdub3JlRmV0Y2hBYm9ydCwgfSA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChtYXggIT09IDAgJiYgIWlzUG9zSW50KG1heCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heCBvcHRpb24gbXVzdCBiZSBhIG5vbm5lZ2F0aXZlIGludGVnZXInKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBVaW50QXJyYXkgPSBtYXggPyBnZXRVaW50QXJyYXkobWF4KSA6IEFycmF5O1xuICAgICAgICBpZiAoIVVpbnRBcnJheSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG1heCB2YWx1ZTogJyArIG1heCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jbWF4ID0gbWF4O1xuICAgICAgICB0aGlzLiNtYXhTaXplID0gbWF4U2l6ZTtcbiAgICAgICAgdGhpcy5tYXhFbnRyeVNpemUgPSBtYXhFbnRyeVNpemUgfHwgdGhpcy4jbWF4U2l6ZTtcbiAgICAgICAgdGhpcy5zaXplQ2FsY3VsYXRpb24gPSBzaXplQ2FsY3VsYXRpb247XG4gICAgICAgIGlmICh0aGlzLnNpemVDYWxjdWxhdGlvbikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiNtYXhTaXplICYmICF0aGlzLm1heEVudHJ5U2l6ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Nhbm5vdCBzZXQgc2l6ZUNhbGN1bGF0aW9uIHdpdGhvdXQgc2V0dGluZyBtYXhTaXplIG9yIG1heEVudHJ5U2l6ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNpemVDYWxjdWxhdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemVDYWxjdWxhdGlvbiBzZXQgdG8gbm9uLWZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZldGNoTWV0aG9kICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHR5cGVvZiBmZXRjaE1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZmV0Y2hNZXRob2QgbXVzdCBiZSBhIGZ1bmN0aW9uIGlmIHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2ZldGNoTWV0aG9kID0gZmV0Y2hNZXRob2Q7XG4gICAgICAgIHRoaXMuI2hhc0ZldGNoTWV0aG9kID0gISFmZXRjaE1ldGhvZDtcbiAgICAgICAgdGhpcy4ja2V5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLiNrZXlMaXN0ID0gbmV3IEFycmF5KG1heCkuZmlsbCh1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLiN2YWxMaXN0ID0gbmV3IEFycmF5KG1heCkuZmlsbCh1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLiNuZXh0ID0gbmV3IFVpbnRBcnJheShtYXgpO1xuICAgICAgICB0aGlzLiNwcmV2ID0gbmV3IFVpbnRBcnJheShtYXgpO1xuICAgICAgICB0aGlzLiNoZWFkID0gMDtcbiAgICAgICAgdGhpcy4jdGFpbCA9IDA7XG4gICAgICAgIHRoaXMuI2ZyZWUgPSBTdGFjay5jcmVhdGUobWF4KTtcbiAgICAgICAgdGhpcy4jc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuI2NhbGN1bGF0ZWRTaXplID0gMDtcbiAgICAgICAgaWYgKHR5cGVvZiBkaXNwb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLiNkaXNwb3NlID0gZGlzcG9zZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRpc3Bvc2VBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy4jZGlzcG9zZUFmdGVyID0gZGlzcG9zZUFmdGVyO1xuICAgICAgICAgICAgdGhpcy4jZGlzcG9zZWQgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2Rpc3Bvc2VBZnRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuI2Rpc3Bvc2VkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2hhc0Rpc3Bvc2UgPSAhIXRoaXMuI2Rpc3Bvc2U7XG4gICAgICAgIHRoaXMuI2hhc0Rpc3Bvc2VBZnRlciA9ICEhdGhpcy4jZGlzcG9zZUFmdGVyO1xuICAgICAgICB0aGlzLm5vRGlzcG9zZU9uU2V0ID0gISFub0Rpc3Bvc2VPblNldDtcbiAgICAgICAgdGhpcy5ub1VwZGF0ZVRUTCA9ICEhbm9VcGRhdGVUVEw7XG4gICAgICAgIHRoaXMubm9EZWxldGVPbkZldGNoUmVqZWN0aW9uID0gISFub0RlbGV0ZU9uRmV0Y2hSZWplY3Rpb247XG4gICAgICAgIHRoaXMuYWxsb3dTdGFsZU9uRmV0Y2hSZWplY3Rpb24gPSAhIWFsbG93U3RhbGVPbkZldGNoUmVqZWN0aW9uO1xuICAgICAgICB0aGlzLmFsbG93U3RhbGVPbkZldGNoQWJvcnQgPSAhIWFsbG93U3RhbGVPbkZldGNoQWJvcnQ7XG4gICAgICAgIHRoaXMuaWdub3JlRmV0Y2hBYm9ydCA9ICEhaWdub3JlRmV0Y2hBYm9ydDtcbiAgICAgICAgLy8gTkI6IG1heEVudHJ5U2l6ZSBpcyBzZXQgdG8gbWF4U2l6ZSBpZiBpdCdzIHNldFxuICAgICAgICBpZiAodGhpcy5tYXhFbnRyeVNpemUgIT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNtYXhTaXplICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Bvc0ludCh0aGlzLiNtYXhTaXplKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhTaXplIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIGlmIHNwZWNpZmllZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNQb3NJbnQodGhpcy5tYXhFbnRyeVNpemUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4RW50cnlTaXplIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIGlmIHNwZWNpZmllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4jaW5pdGlhbGl6ZVNpemVUcmFja2luZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsb3dTdGFsZSA9ICEhYWxsb3dTdGFsZTtcbiAgICAgICAgdGhpcy5ub0RlbGV0ZU9uU3RhbGVHZXQgPSAhIW5vRGVsZXRlT25TdGFsZUdldDtcbiAgICAgICAgdGhpcy51cGRhdGVBZ2VPbkdldCA9ICEhdXBkYXRlQWdlT25HZXQ7XG4gICAgICAgIHRoaXMudXBkYXRlQWdlT25IYXMgPSAhIXVwZGF0ZUFnZU9uSGFzO1xuICAgICAgICB0aGlzLnR0bFJlc29sdXRpb24gPVxuICAgICAgICAgICAgaXNQb3NJbnQodHRsUmVzb2x1dGlvbikgfHwgdHRsUmVzb2x1dGlvbiA9PT0gMFxuICAgICAgICAgICAgICAgID8gdHRsUmVzb2x1dGlvblxuICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgdGhpcy50dGxBdXRvcHVyZ2UgPSAhIXR0bEF1dG9wdXJnZTtcbiAgICAgICAgdGhpcy50dGwgPSB0dGwgfHwgMDtcbiAgICAgICAgaWYgKHRoaXMudHRsKSB7XG4gICAgICAgICAgICBpZiAoIWlzUG9zSW50KHRoaXMudHRsKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3R0bCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciBpZiBzcGVjaWZpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuI2luaXRpYWxpemVUVExUcmFja2luZygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvIG5vdCBhbGxvdyBjb21wbGV0ZWx5IHVuYm91bmRlZCBjYWNoZXNcbiAgICAgICAgaWYgKHRoaXMuI21heCA9PT0gMCAmJiB0aGlzLnR0bCA9PT0gMCAmJiB0aGlzLiNtYXhTaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBdCBsZWFzdCBvbmUgb2YgbWF4LCBtYXhTaXplLCBvciB0dGwgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMudHRsQXV0b3B1cmdlICYmICF0aGlzLiNtYXggJiYgIXRoaXMuI21heFNpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAnTFJVX0NBQ0hFX1VOQk9VTkRFRCc7XG4gICAgICAgICAgICBpZiAoc2hvdWxkV2Fybihjb2RlKSkge1xuICAgICAgICAgICAgICAgIHdhcm5lZC5hZGQoY29kZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ1RUTCBjYWNoaW5nIHdpdGhvdXQgdHRsQXV0b3B1cmdlLCBtYXgsIG9yIG1heFNpemUgY2FuICcgK1xuICAgICAgICAgICAgICAgICAgICAncmVzdWx0IGluIHVuYm91bmRlZCBtZW1vcnkgY29uc3VtcHRpb24uJztcbiAgICAgICAgICAgICAgICBlbWl0V2FybmluZyhtc2csICdVbmJvdW5kZWRDYWNoZVdhcm5pbmcnLCBjb2RlLCBMUlVDYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSByZW1haW5pbmcgVFRMIHRpbWUgZm9yIGEgZ2l2ZW4gZW50cnkga2V5XG4gICAgICovXG4gICAgZ2V0UmVtYWluaW5nVFRMKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy4ja2V5TWFwLmhhcyhrZXkpID8gSW5maW5pdHkgOiAwO1xuICAgIH1cbiAgICAjaW5pdGlhbGl6ZVRUTFRyYWNraW5nKCkge1xuICAgICAgICBjb25zdCB0dGxzID0gbmV3IFplcm9BcnJheSh0aGlzLiNtYXgpO1xuICAgICAgICBjb25zdCBzdGFydHMgPSBuZXcgWmVyb0FycmF5KHRoaXMuI21heCk7XG4gICAgICAgIHRoaXMuI3R0bHMgPSB0dGxzO1xuICAgICAgICB0aGlzLiNzdGFydHMgPSBzdGFydHM7XG4gICAgICAgIHRoaXMuI3NldEl0ZW1UVEwgPSAoaW5kZXgsIHR0bCwgc3RhcnQgPSBwZXJmLm5vdygpKSA9PiB7XG4gICAgICAgICAgICBzdGFydHNbaW5kZXhdID0gdHRsICE9PSAwID8gc3RhcnQgOiAwO1xuICAgICAgICAgICAgdHRsc1tpbmRleF0gPSB0dGw7XG4gICAgICAgICAgICBpZiAodHRsICE9PSAwICYmIHRoaXMudHRsQXV0b3B1cmdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNTdGFsZShpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHRoaXMuI2tleUxpc3RbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHR0bCArIDEpO1xuICAgICAgICAgICAgICAgIC8vIHVucmVmKCkgbm90IHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zXG4gICAgICAgICAgICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICAgICAgICAgICAgaWYgKHQudW5yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgdC51bnJlZigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiN1cGRhdGVJdGVtQWdlID0gaW5kZXggPT4ge1xuICAgICAgICAgICAgc3RhcnRzW2luZGV4XSA9IHR0bHNbaW5kZXhdICE9PSAwID8gcGVyZi5ub3coKSA6IDA7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuI3N0YXR1c1RUTCA9IChzdGF0dXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodHRsc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0dGwgPSB0dGxzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgc3RhdHVzLnR0bCA9IHR0bDtcbiAgICAgICAgICAgICAgICBzdGF0dXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICBzdGF0dXMubm93ID0gY2FjaGVkTm93IHx8IGdldE5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFnZSA9IHN0YXR1cy5ub3cgLSBzdGFydDtcbiAgICAgICAgICAgICAgICBzdGF0dXMucmVtYWluaW5nVFRMID0gdHRsIC0gYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBkZWJvdW5jZSBjYWxscyB0byBwZXJmLm5vdygpIHRvIDFzIHNvIHdlJ3JlIG5vdCBoaXR0aW5nXG4gICAgICAgIC8vIHRoYXQgY29zdGx5IGNhbGwgcmVwZWF0ZWRseS5cbiAgICAgICAgbGV0IGNhY2hlZE5vdyA9IDA7XG4gICAgICAgIGNvbnN0IGdldE5vdyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwZXJmLm5vdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMudHRsUmVzb2x1dGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICBjYWNoZWROb3cgPSBuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IChjYWNoZWROb3cgPSAwKSwgdGhpcy50dGxSZXNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBub3QgYXZhaWxhYmxlIG9uIGFsbCBwbGF0Zm9ybXNcbiAgICAgICAgICAgICAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICAgICAgICAgICAgICBpZiAodC51bnJlZikge1xuICAgICAgICAgICAgICAgICAgICB0LnVucmVmKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRSZW1haW5pbmdUVEwgPSBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNrZXlNYXAuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHRsID0gdHRsc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0c1tpbmRleF07XG4gICAgICAgICAgICBpZiAodHRsID09PSAwIHx8IHN0YXJ0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWdlID0gKGNhY2hlZE5vdyB8fCBnZXROb3coKSkgLSBzdGFydDtcbiAgICAgICAgICAgIHJldHVybiB0dGwgLSBhZ2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuI2lzU3RhbGUgPSBpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHR0bHNbaW5kZXhdICE9PSAwICYmXG4gICAgICAgICAgICAgICAgc3RhcnRzW2luZGV4XSAhPT0gMCAmJlxuICAgICAgICAgICAgICAgIChjYWNoZWROb3cgfHwgZ2V0Tm93KCkpIC0gc3RhcnRzW2luZGV4XSA+IHR0bHNbaW5kZXhdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gY29uZGl0aW9uYWxseSBzZXQgcHJpdmF0ZSBtZXRob2RzIHJlbGF0ZWQgdG8gVFRMXG4gICAgI3VwZGF0ZUl0ZW1BZ2UgPSAoKSA9PiB7IH07XG4gICAgI3N0YXR1c1RUTCA9ICgpID0+IHsgfTtcbiAgICAjc2V0SXRlbVRUTCA9ICgpID0+IHsgfTtcbiAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuICAgICNpc1N0YWxlID0gKCkgPT4gZmFsc2U7XG4gICAgI2luaXRpYWxpemVTaXplVHJhY2tpbmcoKSB7XG4gICAgICAgIGNvbnN0IHNpemVzID0gbmV3IFplcm9BcnJheSh0aGlzLiNtYXgpO1xuICAgICAgICB0aGlzLiNjYWxjdWxhdGVkU2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuI3NpemVzID0gc2l6ZXM7XG4gICAgICAgIHRoaXMuI3JlbW92ZUl0ZW1TaXplID0gaW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy4jY2FsY3VsYXRlZFNpemUgLT0gc2l6ZXNbaW5kZXhdO1xuICAgICAgICAgICAgc2l6ZXNbaW5kZXhdID0gMDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4jcmVxdWlyZVNpemUgPSAoaywgdiwgc2l6ZSwgc2l6ZUNhbGN1bGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAvLyBwcm92aXNpb25hbGx5IGFjY2VwdCBiYWNrZ3JvdW5kIGZldGNoZXMuXG4gICAgICAgICAgICAvLyBhY3R1YWwgdmFsdWUgc2l6ZSB3aWxsIGJlIGNoZWNrZWQgd2hlbiB0aGV5IHJldHVybi5cbiAgICAgICAgICAgIGlmICh0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh2KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1Bvc0ludChzaXplKSkge1xuICAgICAgICAgICAgICAgIGlmIChzaXplQ2FsY3VsYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzaXplQ2FsY3VsYXRpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemVDYWxjdWxhdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaXplID0gc2l6ZUNhbGN1bGF0aW9uKHYsIGspO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUG9zSW50KHNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaXplQ2FsY3VsYXRpb24gcmV0dXJuIGludmFsaWQgKGV4cGVjdCBwb3NpdGl2ZSBpbnRlZ2VyKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHNpemUgdmFsdWUgKG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlcikuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1doZW4gbWF4U2l6ZSBvciBtYXhFbnRyeVNpemUgaXMgdXNlZCwgc2l6ZUNhbGN1bGF0aW9uICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ29yIHNpemUgbXVzdCBiZSBzZXQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuI2FkZEl0ZW1TaXplID0gKGluZGV4LCBzaXplLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHNpemVzW2luZGV4XSA9IHNpemU7XG4gICAgICAgICAgICBpZiAodGhpcy4jbWF4U2l6ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFNpemUgPSB0aGlzLiNtYXhTaXplIC0gc2l6ZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLiNjYWxjdWxhdGVkU2l6ZSA+IG1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZXZpY3QodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4jY2FsY3VsYXRlZFNpemUgKz0gc2l6ZXNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5lbnRyeVNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHN0YXR1cy50b3RhbENhbGN1bGF0ZWRTaXplID0gdGhpcy4jY2FsY3VsYXRlZFNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgICNyZW1vdmVJdGVtU2l6ZSA9IF9pID0+IHsgfTtcbiAgICAjYWRkSXRlbVNpemUgPSAoX2ksIF9zLCBfc3QpID0+IHsgfTtcbiAgICAjcmVxdWlyZVNpemUgPSAoX2ssIF92LCBzaXplLCBzaXplQ2FsY3VsYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHNpemUgfHwgc2l6ZUNhbGN1bGF0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYW5ub3Qgc2V0IHNpemUgd2l0aG91dCBzZXR0aW5nIG1heFNpemUgb3IgbWF4RW50cnlTaXplIG9uIGNhY2hlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICAqI2luZGV4ZXMoeyBhbGxvd1N0YWxlID0gdGhpcy5hbGxvd1N0YWxlIH0gPSB7fSkge1xuICAgICAgICBpZiAodGhpcy4jc2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuI3RhaWw7IHRydWU7KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiNpc1ZhbGlkSW5kZXgoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1N0YWxlIHx8ICF0aGlzLiNpc1N0YWxlKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLiNoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuI3ByZXZbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICojcmluZGV4ZXMoeyBhbGxvd1N0YWxlID0gdGhpcy5hbGxvd1N0YWxlIH0gPSB7fSkge1xuICAgICAgICBpZiAodGhpcy4jc2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuI2hlYWQ7IHRydWU7KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiNpc1ZhbGlkSW5kZXgoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1N0YWxlIHx8ICF0aGlzLiNpc1N0YWxlKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLiN0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuI25leHRbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICNpc1ZhbGlkSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChpbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0aGlzLiNrZXlNYXAuZ2V0KHRoaXMuI2tleUxpc3RbaW5kZXhdKSA9PT0gaW5kZXgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBnZW5lcmF0b3IgeWllbGRpbmcgYFtrZXksIHZhbHVlXWAgcGFpcnMsXG4gICAgICogaW4gb3JkZXIgZnJvbSBtb3N0IHJlY2VudGx5IHVzZWQgdG8gbGVhc3QgcmVjZW50bHkgdXNlZC5cbiAgICAgKi9cbiAgICAqZW50cmllcygpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHRoaXMuI2luZGV4ZXMoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI3ZhbExpc3RbaV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuI2tleUxpc3RbaV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh0aGlzLiN2YWxMaXN0W2ldKSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIFt0aGlzLiNrZXlMaXN0W2ldLCB0aGlzLiN2YWxMaXN0W2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZlcnNlIG9yZGVyIHZlcnNpb24gb2Yge0BsaW5rIExSVUNhY2hlLmVudHJpZXN9XG4gICAgICpcbiAgICAgKiBSZXR1cm4gYSBnZW5lcmF0b3IgeWllbGRpbmcgYFtrZXksIHZhbHVlXWAgcGFpcnMsXG4gICAgICogaW4gb3JkZXIgZnJvbSBsZWFzdCByZWNlbnRseSB1c2VkIHRvIG1vc3QgcmVjZW50bHkgdXNlZC5cbiAgICAgKi9cbiAgICAqcmVudHJpZXMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiB0aGlzLiNyaW5kZXhlcygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jdmFsTGlzdFtpXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgdGhpcy4ja2V5TGlzdFtpXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuI2lzQmFja2dyb3VuZEZldGNoKHRoaXMuI3ZhbExpc3RbaV0pKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3RoaXMuI2tleUxpc3RbaV0sIHRoaXMuI3ZhbExpc3RbaV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBhIGdlbmVyYXRvciB5aWVsZGluZyB0aGUga2V5cyBpbiB0aGUgY2FjaGUsXG4gICAgICogaW4gb3JkZXIgZnJvbSBtb3N0IHJlY2VudGx5IHVzZWQgdG8gbGVhc3QgcmVjZW50bHkgdXNlZC5cbiAgICAgKi9cbiAgICAqa2V5cygpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHRoaXMuI2luZGV4ZXMoKSkge1xuICAgICAgICAgICAgY29uc3QgayA9IHRoaXMuI2tleUxpc3RbaV07XG4gICAgICAgICAgICBpZiAoayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuI2lzQmFja2dyb3VuZEZldGNoKHRoaXMuI3ZhbExpc3RbaV0pKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZlcnNlIG9yZGVyIHZlcnNpb24gb2Yge0BsaW5rIExSVUNhY2hlLmtleXN9XG4gICAgICpcbiAgICAgKiBSZXR1cm4gYSBnZW5lcmF0b3IgeWllbGRpbmcgdGhlIGtleXMgaW4gdGhlIGNhY2hlLFxuICAgICAqIGluIG9yZGVyIGZyb20gbGVhc3QgcmVjZW50bHkgdXNlZCB0byBtb3N0IHJlY2VudGx5IHVzZWQuXG4gICAgICovXG4gICAgKnJrZXlzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy4jcmluZGV4ZXMoKSkge1xuICAgICAgICAgICAgY29uc3QgayA9IHRoaXMuI2tleUxpc3RbaV07XG4gICAgICAgICAgICBpZiAoayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuI2lzQmFja2dyb3VuZEZldGNoKHRoaXMuI3ZhbExpc3RbaV0pKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBnZW5lcmF0b3IgeWllbGRpbmcgdGhlIHZhbHVlcyBpbiB0aGUgY2FjaGUsXG4gICAgICogaW4gb3JkZXIgZnJvbSBtb3N0IHJlY2VudGx5IHVzZWQgdG8gbGVhc3QgcmVjZW50bHkgdXNlZC5cbiAgICAgKi9cbiAgICAqdmFsdWVzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy4jaW5kZXhlcygpKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy4jdmFsTGlzdFtpXTtcbiAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy4jaXNCYWNrZ3JvdW5kRmV0Y2godGhpcy4jdmFsTGlzdFtpXSkpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLiN2YWxMaXN0W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludmVyc2Ugb3JkZXIgdmVyc2lvbiBvZiB7QGxpbmsgTFJVQ2FjaGUudmFsdWVzfVxuICAgICAqXG4gICAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIHlpZWxkaW5nIHRoZSB2YWx1ZXMgaW4gdGhlIGNhY2hlLFxuICAgICAqIGluIG9yZGVyIGZyb20gbGVhc3QgcmVjZW50bHkgdXNlZCB0byBtb3N0IHJlY2VudGx5IHVzZWQuXG4gICAgICovXG4gICAgKnJ2YWx1ZXMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiB0aGlzLiNyaW5kZXhlcygpKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy4jdmFsTGlzdFtpXTtcbiAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy4jaXNCYWNrZ3JvdW5kRmV0Y2godGhpcy4jdmFsTGlzdFtpXSkpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLiN2YWxMaXN0W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGluZyBvdmVyIHRoZSBjYWNoZSBpdHNlbGYgeWllbGRzIHRoZSBzYW1lIHJlc3VsdHMgYXNcbiAgICAgKiB7QGxpbmsgTFJVQ2FjaGUuZW50cmllc31cbiAgICAgKi9cbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaW5kIGEgdmFsdWUgZm9yIHdoaWNoIHRoZSBzdXBwbGllZCBmbiBtZXRob2QgcmV0dXJucyBhIHRydXRoeSB2YWx1ZSxcbiAgICAgKiBzaW1pbGFyIHRvIEFycmF5LmZpbmQoKS4gIGZuIGlzIGNhbGxlZCBhcyBmbih2YWx1ZSwga2V5LCBjYWNoZSkuXG4gICAgICovXG4gICAgZmluZChmbiwgZ2V0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiB0aGlzLiNpbmRleGVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLiN2YWxMaXN0W2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh2KVxuICAgICAgICAgICAgICAgID8gdi5fX3N0YWxlV2hpbGVGZXRjaGluZ1xuICAgICAgICAgICAgICAgIDogdjtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGZuKHZhbHVlLCB0aGlzLiNrZXlMaXN0W2ldLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLiNrZXlMaXN0W2ldLCBnZXRPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoZSBzdXBwbGllZCBmdW5jdGlvbiBvbiBlYWNoIGl0ZW0gaW4gdGhlIGNhY2hlLCBpbiBvcmRlciBmcm9tXG4gICAgICogbW9zdCByZWNlbnRseSB1c2VkIHRvIGxlYXN0IHJlY2VudGx5IHVzZWQuICBmbiBpcyBjYWxsZWQgYXNcbiAgICAgKiBmbih2YWx1ZSwga2V5LCBjYWNoZSkuICBEb2VzIG5vdCB1cGRhdGUgYWdlIG9yIHJlY2VudHkgb2YgdXNlLlxuICAgICAqIERvZXMgbm90IGl0ZXJhdGUgb3ZlciBzdGFsZSB2YWx1ZXMuXG4gICAgICovXG4gICAgZm9yRWFjaChmbiwgdGhpc3AgPSB0aGlzKSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiB0aGlzLiNpbmRleGVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLiN2YWxMaXN0W2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh2KVxuICAgICAgICAgICAgICAgID8gdi5fX3N0YWxlV2hpbGVGZXRjaGluZ1xuICAgICAgICAgICAgICAgIDogdjtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzcCwgdmFsdWUsIHRoaXMuI2tleUxpc3RbaV0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBzYW1lIGFzIHtAbGluayBMUlVDYWNoZS5mb3JFYWNofSBidXQgaXRlbXMgYXJlIGl0ZXJhdGVkIG92ZXIgaW5cbiAgICAgKiByZXZlcnNlIG9yZGVyLiAgKGllLCBsZXNzIHJlY2VudGx5IHVzZWQgaXRlbXMgYXJlIGl0ZXJhdGVkIG92ZXIgZmlyc3QuKVxuICAgICAqL1xuICAgIHJmb3JFYWNoKGZuLCB0aGlzcCA9IHRoaXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHRoaXMuI3JpbmRleGVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLiN2YWxMaXN0W2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh2KVxuICAgICAgICAgICAgICAgID8gdi5fX3N0YWxlV2hpbGVGZXRjaGluZ1xuICAgICAgICAgICAgICAgIDogdjtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzcCwgdmFsdWUsIHRoaXMuI2tleUxpc3RbaV0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhbnkgc3RhbGUgZW50cmllcy4gUmV0dXJucyB0cnVlIGlmIGFueXRoaW5nIHdhcyByZW1vdmVkLFxuICAgICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBwdXJnZVN0YWxlKCkge1xuICAgICAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy4jcmluZGV4ZXMoeyBhbGxvd1N0YWxlOiB0cnVlIH0pKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jaXNTdGFsZShpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHRoaXMuI2tleUxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWxldGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgW2tleSwge0BsaW5rIExSVUNhY2hlLkVudHJ5fV0gdHVwbGVzIHdoaWNoIGNhbiBiZVxuICAgICAqIHBhc3NlZCB0byBjYWNoZS5sb2FkKClcbiAgICAgKi9cbiAgICBkdW1wKCkge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHRoaXMuI2luZGV4ZXMoeyBhbGxvd1N0YWxlOiB0cnVlIH0pKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLiNrZXlMaXN0W2ldO1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuI3ZhbExpc3RbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuI2lzQmFja2dyb3VuZEZldGNoKHYpXG4gICAgICAgICAgICAgICAgPyB2Ll9fc3RhbGVXaGlsZUZldGNoaW5nXG4gICAgICAgICAgICAgICAgOiB2O1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwga2V5ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHsgdmFsdWUgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLiN0dGxzICYmIHRoaXMuI3N0YXJ0cykge1xuICAgICAgICAgICAgICAgIGVudHJ5LnR0bCA9IHRoaXMuI3R0bHNbaV07XG4gICAgICAgICAgICAgICAgLy8gYWx3YXlzIGR1bXAgdGhlIHN0YXJ0IHJlbGF0aXZlIHRvIGEgcG9ydGFibGUgdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgLy8gaXQncyBvayBmb3IgdGhpcyB0byBiZSBhIGJpdCBzbG93LCBpdCdzIGEgcmFyZSBvcGVyYXRpb24uXG4gICAgICAgICAgICAgICAgY29uc3QgYWdlID0gcGVyZi5ub3coKSAtIHRoaXMuI3N0YXJ0c1tpXTtcbiAgICAgICAgICAgICAgICBlbnRyeS5zdGFydCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAtIGFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy4jc2l6ZXMpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS5zaXplID0gdGhpcy4jc2l6ZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnIudW5zaGlmdChba2V5LCBlbnRyeV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBjYWNoZSBhbmQgbG9hZCBpbiB0aGUgaXRlbXMgaW4gZW50cmllcyBpbiB0aGUgb3JkZXIgbGlzdGVkLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgc2hhcGUgb2YgdGhlIHJlc3VsdGluZyBjYWNoZSBtYXkgYmUgZGlmZmVyZW50IGlmIHRoZVxuICAgICAqIHNhbWUgb3B0aW9ucyBhcmUgbm90IHVzZWQgaW4gYm90aCBjYWNoZXMuXG4gICAgICovXG4gICAgbG9hZChhcnIpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGVudHJ5XSBvZiBhcnIpIHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5zdGFydCkge1xuICAgICAgICAgICAgICAgIC8vIGVudHJ5LnN0YXJ0IGlzIGEgcG9ydGFibGUgdGltZXN0YW1wLCBidXQgd2UgbWF5IGJlIHVzaW5nXG4gICAgICAgICAgICAgICAgLy8gbm9kZSdzIHBlcmZvcm1hbmNlLm5vdygpLCBzbyBjYWxjdWxhdGUgdGhlIG9mZnNldCwgc28gdGhhdFxuICAgICAgICAgICAgICAgIC8vIHdlIGdldCB0aGUgaW50ZW5kZWQgcmVtYWluaW5nIFRUTCwgbm8gbWF0dGVyIGhvdyBsb25nIGl0J3NcbiAgICAgICAgICAgICAgICAvLyBiZWVuIG9uIGljZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGl0J3Mgb2sgZm9yIHRoaXMgdG8gYmUgYSBiaXQgc2xvdywgaXQncyBhIHJhcmUgb3BlcmF0aW9uLlxuICAgICAgICAgICAgICAgIGNvbnN0IGFnZSA9IERhdGUubm93KCkgLSBlbnRyeS5zdGFydDtcbiAgICAgICAgICAgICAgICBlbnRyeS5zdGFydCA9IHBlcmYubm93KCkgLSBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIGVudHJ5LnZhbHVlLCBlbnRyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGEgdmFsdWUgdG8gdGhlIGNhY2hlLlxuICAgICAqXG4gICAgICogTm90ZTogaWYgYHVuZGVmaW5lZGAgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUsIHRoaXMgaXMgYW4gYWxpYXMgZm9yXG4gICAgICoge0BsaW5rIExSVUNhY2hlI2RlbGV0ZX1cbiAgICAgKi9cbiAgICBzZXQoaywgdiwgc2V0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGspO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0dGwgPSB0aGlzLnR0bCwgc3RhcnQsIG5vRGlzcG9zZU9uU2V0ID0gdGhpcy5ub0Rpc3Bvc2VPblNldCwgc2l6ZUNhbGN1bGF0aW9uID0gdGhpcy5zaXplQ2FsY3VsYXRpb24sIHN0YXR1cywgfSA9IHNldE9wdGlvbnM7XG4gICAgICAgIGxldCB7IG5vVXBkYXRlVFRMID0gdGhpcy5ub1VwZGF0ZVRUTCB9ID0gc2V0T3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuI3JlcXVpcmVTaXplKGssIHYsIHNldE9wdGlvbnMuc2l6ZSB8fCAwLCBzaXplQ2FsY3VsYXRpb24pO1xuICAgICAgICAvLyBpZiB0aGUgaXRlbSBkb2Vzbid0IGZpdCwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgLy8gTkI6IG1heEVudHJ5U2l6ZSBzZXQgdG8gbWF4U2l6ZSBieSBkZWZhdWx0XG4gICAgICAgIGlmICh0aGlzLm1heEVudHJ5U2l6ZSAmJiBzaXplID4gdGhpcy5tYXhFbnRyeVNpemUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuc2V0ID0gJ21pc3MnO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5tYXhFbnRyeVNpemVFeGNlZWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYXZlIHRvIGRlbGV0ZSwgaW4gY2FzZSBzb21ldGhpbmcgaXMgdGhlcmUgYWxyZWFkeS5cbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGspO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy4jc2l6ZSA9PT0gMCA/IHVuZGVmaW5lZCA6IHRoaXMuI2tleU1hcC5nZXQoayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBhZGRpdGlvblxuICAgICAgICAgICAgaW5kZXggPSAodGhpcy4jc2l6ZSA9PT0gMFxuICAgICAgICAgICAgICAgID8gdGhpcy4jdGFpbFxuICAgICAgICAgICAgICAgIDogdGhpcy4jZnJlZS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiNmcmVlLnBvcCgpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4jc2l6ZSA9PT0gdGhpcy4jbWF4XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuI2V2aWN0KGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiNzaXplKTtcbiAgICAgICAgICAgIHRoaXMuI2tleUxpc3RbaW5kZXhdID0gaztcbiAgICAgICAgICAgIHRoaXMuI3ZhbExpc3RbaW5kZXhdID0gdjtcbiAgICAgICAgICAgIHRoaXMuI2tleU1hcC5zZXQoaywgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy4jbmV4dFt0aGlzLiN0YWlsXSA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy4jcHJldltpbmRleF0gPSB0aGlzLiN0YWlsO1xuICAgICAgICAgICAgdGhpcy4jdGFpbCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy4jc2l6ZSsrO1xuICAgICAgICAgICAgdGhpcy4jYWRkSXRlbVNpemUoaW5kZXgsIHNpemUsIHN0YXR1cyk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5zZXQgPSAnYWRkJztcbiAgICAgICAgICAgIG5vVXBkYXRlVFRMID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgICAgIHRoaXMuI21vdmVUb1RhaWwoaW5kZXgpO1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsID0gdGhpcy4jdmFsTGlzdFtpbmRleF07XG4gICAgICAgICAgICBpZiAodiAhPT0gb2xkVmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2hhc0ZldGNoTWV0aG9kICYmIHRoaXMuI2lzQmFja2dyb3VuZEZldGNoKG9sZFZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsLl9fYWJvcnRDb250cm9sbGVyLmFib3J0KG5ldyBFcnJvcigncmVwbGFjZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFub0Rpc3Bvc2VPblNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4jaGFzRGlzcG9zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jZGlzcG9zZT8uKG9sZFZhbCwgaywgJ3NldCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNoYXNEaXNwb3NlQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3Bvc2VkPy5wdXNoKFtvbGRWYWwsIGssICdzZXQnXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlSXRlbVNpemUoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2FkZEl0ZW1TaXplKGluZGV4LCBzaXplLCBzdGF0dXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3ZhbExpc3RbaW5kZXhdID0gdjtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5zZXQgPSAncmVwbGFjZSc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gb2xkVmFsICYmIHRoaXMuI2lzQmFja2dyb3VuZEZldGNoKG9sZFZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb2xkVmFsLl9fc3RhbGVXaGlsZUZldGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG9sZFZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuc2V0ID0gJ3VwZGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR0bCAhPT0gMCAmJiAhdGhpcy4jdHRscykge1xuICAgICAgICAgICAgdGhpcy4jaW5pdGlhbGl6ZVRUTFRyYWNraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuI3R0bHMpIHtcbiAgICAgICAgICAgIGlmICghbm9VcGRhdGVUVEwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNzZXRJdGVtVFRMKGluZGV4LCB0dGwsIHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0dXMpXG4gICAgICAgICAgICAgICAgdGhpcy4jc3RhdHVzVFRMKHN0YXR1cywgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbm9EaXNwb3NlT25TZXQgJiYgdGhpcy4jaGFzRGlzcG9zZUFmdGVyICYmIHRoaXMuI2Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICBjb25zdCBkdCA9IHRoaXMuI2Rpc3Bvc2VkO1xuICAgICAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgICAgICB3aGlsZSAoKHRhc2sgPSBkdD8uc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNkaXNwb3NlQWZ0ZXI/LiguLi50YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZpY3QgdGhlIGxlYXN0IHJlY2VudGx5IHVzZWQgaXRlbSwgcmV0dXJuaW5nIGl0cyB2YWx1ZSBvclxuICAgICAqIGB1bmRlZmluZWRgIGlmIGNhY2hlIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLiNzaXplKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy4jdmFsTGlzdFt0aGlzLiNoZWFkXTtcbiAgICAgICAgICAgICAgICB0aGlzLiNldmljdCh0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNCYWNrZ3JvdW5kRmV0Y2godmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsLl9fc3RhbGVXaGlsZUZldGNoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLl9fc3RhbGVXaGlsZUZldGNoaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2hhc0Rpc3Bvc2VBZnRlciAmJiB0aGlzLiNkaXNwb3NlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGR0ID0gdGhpcy4jZGlzcG9zZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCh0YXNrID0gZHQ/LnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3Bvc2VBZnRlcj8uKC4uLnRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAjZXZpY3QoZnJlZSkge1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy4jaGVhZDtcbiAgICAgICAgY29uc3QgayA9IHRoaXMuI2tleUxpc3RbaGVhZF07XG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLiN2YWxMaXN0W2hlYWRdO1xuICAgICAgICBpZiAodGhpcy4jaGFzRmV0Y2hNZXRob2QgJiYgdGhpcy4jaXNCYWNrZ3JvdW5kRmV0Y2godikpIHtcbiAgICAgICAgICAgIHYuX19hYm9ydENvbnRyb2xsZXIuYWJvcnQobmV3IEVycm9yKCdldmljdGVkJykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuI2hhc0Rpc3Bvc2UgfHwgdGhpcy4jaGFzRGlzcG9zZUFmdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jaGFzRGlzcG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3Bvc2U/Lih2LCBrLCAnZXZpY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLiNoYXNEaXNwb3NlQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNkaXNwb3NlZD8ucHVzaChbdiwgaywgJ2V2aWN0J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3JlbW92ZUl0ZW1TaXplKGhlYWQpO1xuICAgICAgICAvLyBpZiB3ZSBhcmVuJ3QgYWJvdXQgdG8gdXNlIHRoZSBpbmRleCwgdGhlbiBudWxsIHRoZXNlIG91dFxuICAgICAgICBpZiAoZnJlZSkge1xuICAgICAgICAgICAgdGhpcy4ja2V5TGlzdFtoZWFkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuI3ZhbExpc3RbaGVhZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLiNmcmVlLnB1c2goaGVhZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuI3NpemUgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuI2hlYWQgPSB0aGlzLiN0YWlsID0gMDtcbiAgICAgICAgICAgIHRoaXMuI2ZyZWUubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2hlYWQgPSB0aGlzLiNuZXh0W2hlYWRdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2tleU1hcC5kZWxldGUoayk7XG4gICAgICAgIHRoaXMuI3NpemUtLTtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEga2V5IGlzIGluIHRoZSBjYWNoZSwgd2l0aG91dCB1cGRhdGluZyB0aGUgcmVjZW5jeSBvZiB1c2UuXG4gICAgICogV2lsbCByZXR1cm4gZmFsc2UgaWYgdGhlIGl0ZW0gaXMgc3RhbGUsIGV2ZW4gdGhvdWdoIGl0IGlzIHRlY2huaWNhbGx5XG4gICAgICogaW4gdGhlIGNhY2hlLlxuICAgICAqXG4gICAgICogV2lsbCBub3QgdXBkYXRlIGl0ZW0gYWdlIHVubGVzc1xuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS51cGRhdGVBZ2VPbkhhc30gaXMgc2V0LlxuICAgICAqL1xuICAgIGhhcyhrLCBoYXNPcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVBZ2VPbkhhcyA9IHRoaXMudXBkYXRlQWdlT25IYXMsIHN0YXR1cyB9ID0gaGFzT3B0aW9ucztcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNrZXlNYXAuZ2V0KGspO1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuI3ZhbExpc3RbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHRoaXMuI2lzQmFja2dyb3VuZEZldGNoKHYpICYmXG4gICAgICAgICAgICAgICAgdi5fX3N0YWxlV2hpbGVGZXRjaGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLiNpc1N0YWxlKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVBZ2VPbkhhcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVJdGVtQWdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuaGFzID0gJ2hpdCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3N0YXR1c1RUTChzdGF0dXMsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuaGFzID0gJ3N0YWxlJztcbiAgICAgICAgICAgICAgICB0aGlzLiNzdGF0dXNUVEwoc3RhdHVzLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBzdGF0dXMuaGFzID0gJ21pc3MnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlrZSB7QGxpbmsgTFJVQ2FjaGUjZ2V0fSBidXQgZG9lc24ndCB1cGRhdGUgcmVjZW5jeSBvciBkZWxldGUgc3RhbGVcbiAgICAgKiBpdGVtcy5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgdGhlIGl0ZW0gaXMgc3RhbGUsIHVubGVzc1xuICAgICAqIHtAbGluayBMUlVDYWNoZS5PcHRpb25zQmFzZS5hbGxvd1N0YWxlfSBpcyBzZXQuXG4gICAgICovXG4gICAgcGVlayhrLCBwZWVrT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgYWxsb3dTdGFsZSA9IHRoaXMuYWxsb3dTdGFsZSB9ID0gcGVla09wdGlvbnM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4ja2V5TWFwLmdldChrKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIChhbGxvd1N0YWxlIHx8ICF0aGlzLiNpc1N0YWxlKGluZGV4KSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLiN2YWxMaXN0W2luZGV4XTtcbiAgICAgICAgICAgIC8vIGVpdGhlciBzdGFsZSBhbmQgYWxsb3dlZCwgb3IgZm9yY2luZyBhIHJlZnJlc2ggb2Ygbm9uLXN0YWxlIHZhbHVlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jaXNCYWNrZ3JvdW5kRmV0Y2godikgPyB2Ll9fc3RhbGVXaGlsZUZldGNoaW5nIDogdjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjYmFja2dyb3VuZEZldGNoKGssIGluZGV4LCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHYgPSBpbmRleCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdGhpcy4jdmFsTGlzdFtpbmRleF07XG4gICAgICAgIGlmICh0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh2KSkge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWMgPSBuZXcgQUMoKTtcbiAgICAgICAgY29uc3QgeyBzaWduYWwgfSA9IG9wdGlvbnM7XG4gICAgICAgIC8vIHdoZW4vaWYgb3VyIEFDIHNpZ25hbHMsIHRoZW4gc3RvcCBsaXN0ZW5pbmcgdG8gdGhlaXJzLlxuICAgICAgICBzaWduYWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4gYWMuYWJvcnQoc2lnbmFsLnJlYXNvbiksIHtcbiAgICAgICAgICAgIHNpZ25hbDogYWMuc2lnbmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRzID0ge1xuICAgICAgICAgICAgc2lnbmFsOiBhYy5zaWduYWwsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2IgPSAodiwgdXBkYXRlQ2FjaGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhYm9ydGVkIH0gPSBhYy5zaWduYWw7XG4gICAgICAgICAgICBjb25zdCBpZ25vcmVBYm9ydCA9IG9wdGlvbnMuaWdub3JlRmV0Y2hBYm9ydCAmJiB2ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWJvcnRlZCAmJiAhdXBkYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdGF0dXMuZmV0Y2hBYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdGF0dXMuZmV0Y2hFcnJvciA9IGFjLnNpZ25hbC5yZWFzb247XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmVBYm9ydClcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc3RhdHVzLmZldGNoQWJvcnRJZ25vcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc3RhdHVzLmZldGNoUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhYm9ydGVkICYmICFpZ25vcmVBYm9ydCAmJiAhdXBkYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hGYWlsKGFjLnNpZ25hbC5yZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWl0aGVyIHdlIGRpZG4ndCBhYm9ydCwgYW5kIGFyZSBzdGlsbCBoZXJlLCBvciB3ZSBkaWQsIGFuZCBpZ25vcmVkXG4gICAgICAgICAgICBjb25zdCBiZiA9IHA7XG4gICAgICAgICAgICBpZiAodGhpcy4jdmFsTGlzdFtpbmRleF0gPT09IHApIHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZi5fX3N0YWxlV2hpbGVGZXRjaGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jdmFsTGlzdFtpbmRleF0gPSBiZi5fX3N0YWxlV2hpbGVGZXRjaGluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnN0YXR1cy5mZXRjaFVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChrLCB2LCBmZXRjaE9wdHMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGViID0gKGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0YXR1cy5mZXRjaFJlamVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0YXR1cy5mZXRjaEVycm9yID0gZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hGYWlsKGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmV0Y2hGYWlsID0gKGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGFib3J0ZWQgfSA9IGFjLnNpZ25hbDtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93U3RhbGVBYm9ydGVkID0gYWJvcnRlZCAmJiBvcHRpb25zLmFsbG93U3RhbGVPbkZldGNoQWJvcnQ7XG4gICAgICAgICAgICBjb25zdCBhbGxvd1N0YWxlID0gYWxsb3dTdGFsZUFib3J0ZWQgfHwgb3B0aW9ucy5hbGxvd1N0YWxlT25GZXRjaFJlamVjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IG5vRGVsZXRlID0gYWxsb3dTdGFsZSB8fCBvcHRpb25zLm5vRGVsZXRlT25GZXRjaFJlamVjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGJmID0gcDtcbiAgICAgICAgICAgIGlmICh0aGlzLiN2YWxMaXN0W2luZGV4XSA9PT0gcCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFsbG93IHN0YWxlIG9uIGZldGNoIHJlamVjdGlvbnMsIHRoZW4gd2UgbmVlZCB0byBlbnN1cmUgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSBzdGFsZSB2YWx1ZSBpcyBub3QgcmVtb3ZlZCBmcm9tIHRoZSBjYWNoZSB3aGVuIHRoZSBmZXRjaCBmYWlscy5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWwgPSAhbm9EZWxldGUgfHwgYmYuX19zdGFsZVdoaWxlRmV0Y2hpbmcgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghYWxsb3dTdGFsZUFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgcmVwbGFjZSB0aGUgKnByb21pc2UqIHdpdGggdGhlIHN0YWxlIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB3ZSBhcmUgZG9uZSB3aXRoIHRoZSBwcm9taXNlIGF0IHRoaXMgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxlYXZlIGl0IHVudG91Y2hlZCBpZiB3ZSdyZSBzdGlsbCB3YWl0aW5nIGZvciBhblxuICAgICAgICAgICAgICAgICAgICAvLyBhYm9ydGVkIGJhY2tncm91bmQgZmV0Y2ggdGhhdCBoYXNuJ3QgeWV0IHJldHVybmVkLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiN2YWxMaXN0W2luZGV4XSA9IGJmLl9fc3RhbGVXaGlsZUZldGNoaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbGxvd1N0YWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhdHVzICYmIGJmLl9fc3RhbGVXaGlsZUZldGNoaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdGF0dXMucmV0dXJuZWRTdGFsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBiZi5fX3N0YWxlV2hpbGVGZXRjaGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJmLl9fcmV0dXJuZWQgPT09IGJmKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBjYWxsID0gKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbXAgPSB0aGlzLiNmZXRjaE1ldGhvZD8uKGssIHYsIGZldGNoT3B0cyk7XG4gICAgICAgICAgICBpZiAoZm1wICYmIGZtcCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBmbXAudGhlbih2ID0+IHJlcyh2ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB2KSwgcmVqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlnbm9yZWQsIHdlIGdvIHVudGlsIHdlIGZpbmlzaCwgcmVnYXJkbGVzcy5cbiAgICAgICAgICAgIC8vIGRlZmVyIGNoZWNrIHVudGlsIHdlIGFyZSBhY3R1YWxseSBhYm9ydGluZyxcbiAgICAgICAgICAgIC8vIHNvIGZldGNoTWV0aG9kIGNhbiBvdmVycmlkZS5cbiAgICAgICAgICAgIGFjLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuaWdub3JlRmV0Y2hBYm9ydCB8fFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFsbG93U3RhbGVPbkZldGNoQWJvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gaXQgZXZlbnR1YWxseSByZXNvbHZlcywgdXBkYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYWxsb3dTdGFsZU9uRmV0Y2hBYm9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gdiA9PiBjYih2LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXMpXG4gICAgICAgICAgICBvcHRpb25zLnN0YXR1cy5mZXRjaERpc3BhdGNoZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBwID0gbmV3IFByb21pc2UocGNhbGwpLnRoZW4oY2IsIGViKTtcbiAgICAgICAgY29uc3QgYmYgPSBPYmplY3QuYXNzaWduKHAsIHtcbiAgICAgICAgICAgIF9fYWJvcnRDb250cm9sbGVyOiBhYyxcbiAgICAgICAgICAgIF9fc3RhbGVXaGlsZUZldGNoaW5nOiB2LFxuICAgICAgICAgICAgX19yZXR1cm5lZDogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGludGVybmFsLCBkb24ndCBleHBvc2Ugc3RhdHVzLlxuICAgICAgICAgICAgdGhpcy5zZXQoaywgYmYsIHsgLi4uZmV0Y2hPcHRzLm9wdGlvbnMsIHN0YXR1czogdW5kZWZpbmVkIH0pO1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLiNrZXlNYXAuZ2V0KGspO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jdmFsTGlzdFtpbmRleF0gPSBiZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmY7XG4gICAgfVxuICAgICNpc0JhY2tncm91bmRGZXRjaChwKSB7XG4gICAgICAgIGlmICghdGhpcy4jaGFzRmV0Y2hNZXRob2QpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGIgPSBwO1xuICAgICAgICByZXR1cm4gKCEhYiAmJlxuICAgICAgICAgICAgYiBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgIGIuaGFzT3duUHJvcGVydHkoJ19fc3RhbGVXaGlsZUZldGNoaW5nJykgJiZcbiAgICAgICAgICAgIGIuX19hYm9ydENvbnRyb2xsZXIgaW5zdGFuY2VvZiBBQyk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoKGssIGZldGNoT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgXG4gICAgICAgIC8vIGdldCBvcHRpb25zXG4gICAgICAgIGFsbG93U3RhbGUgPSB0aGlzLmFsbG93U3RhbGUsIHVwZGF0ZUFnZU9uR2V0ID0gdGhpcy51cGRhdGVBZ2VPbkdldCwgbm9EZWxldGVPblN0YWxlR2V0ID0gdGhpcy5ub0RlbGV0ZU9uU3RhbGVHZXQsIFxuICAgICAgICAvLyBzZXQgb3B0aW9uc1xuICAgICAgICB0dGwgPSB0aGlzLnR0bCwgbm9EaXNwb3NlT25TZXQgPSB0aGlzLm5vRGlzcG9zZU9uU2V0LCBzaXplID0gMCwgc2l6ZUNhbGN1bGF0aW9uID0gdGhpcy5zaXplQ2FsY3VsYXRpb24sIG5vVXBkYXRlVFRMID0gdGhpcy5ub1VwZGF0ZVRUTCwgXG4gICAgICAgIC8vIGZldGNoIGV4Y2x1c2l2ZSBvcHRpb25zXG4gICAgICAgIG5vRGVsZXRlT25GZXRjaFJlamVjdGlvbiA9IHRoaXMubm9EZWxldGVPbkZldGNoUmVqZWN0aW9uLCBhbGxvd1N0YWxlT25GZXRjaFJlamVjdGlvbiA9IHRoaXMuYWxsb3dTdGFsZU9uRmV0Y2hSZWplY3Rpb24sIGlnbm9yZUZldGNoQWJvcnQgPSB0aGlzLmlnbm9yZUZldGNoQWJvcnQsIGFsbG93U3RhbGVPbkZldGNoQWJvcnQgPSB0aGlzLmFsbG93U3RhbGVPbkZldGNoQWJvcnQsIGNvbnRleHQsIGZvcmNlUmVmcmVzaCA9IGZhbHNlLCBzdGF0dXMsIHNpZ25hbCwgfSA9IGZldGNoT3B0aW9ucztcbiAgICAgICAgaWYgKCF0aGlzLiNoYXNGZXRjaE1ldGhvZCkge1xuICAgICAgICAgICAgaWYgKHN0YXR1cylcbiAgICAgICAgICAgICAgICBzdGF0dXMuZmV0Y2ggPSAnZ2V0JztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldChrLCB7XG4gICAgICAgICAgICAgICAgYWxsb3dTdGFsZSxcbiAgICAgICAgICAgICAgICB1cGRhdGVBZ2VPbkdldCxcbiAgICAgICAgICAgICAgICBub0RlbGV0ZU9uU3RhbGVHZXQsXG4gICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFsbG93U3RhbGUsXG4gICAgICAgICAgICB1cGRhdGVBZ2VPbkdldCxcbiAgICAgICAgICAgIG5vRGVsZXRlT25TdGFsZUdldCxcbiAgICAgICAgICAgIHR0bCxcbiAgICAgICAgICAgIG5vRGlzcG9zZU9uU2V0LFxuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIHNpemVDYWxjdWxhdGlvbixcbiAgICAgICAgICAgIG5vVXBkYXRlVFRMLFxuICAgICAgICAgICAgbm9EZWxldGVPbkZldGNoUmVqZWN0aW9uLFxuICAgICAgICAgICAgYWxsb3dTdGFsZU9uRmV0Y2hSZWplY3Rpb24sXG4gICAgICAgICAgICBhbGxvd1N0YWxlT25GZXRjaEFib3J0LFxuICAgICAgICAgICAgaWdub3JlRmV0Y2hBYm9ydCxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy4ja2V5TWFwLmdldChrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmZldGNoID0gJ21pc3MnO1xuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuI2JhY2tncm91bmRGZXRjaChrLCBpbmRleCwgb3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gKHAuX19yZXR1cm5lZCA9IHApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW4gY2FjaGUsIG1heWJlIGFscmVhZHkgZmV0Y2hpbmdcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLiN2YWxMaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGlmICh0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh2KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWxlID0gYWxsb3dTdGFsZSAmJiB2Ll9fc3RhbGVXaGlsZUZldGNoaW5nICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZmV0Y2ggPSAnaW5mbGlnaHQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMucmV0dXJuZWRTdGFsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzdGFsZSA/IHYuX19zdGFsZVdoaWxlRmV0Y2hpbmcgOiAodi5fX3JldHVybmVkID0gdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB3ZSBmb3JjZSBhIHJlZnJlc2gsIHRoYXQgbWVhbnMgZG8gTk9UIHNlcnZlIHRoZSBjYWNoZWQgdmFsdWUsXG4gICAgICAgICAgICAvLyB1bmxlc3Mgd2UgYXJlIGFscmVhZHkgaW4gdGhlIHByb2Nlc3Mgb2YgcmVmcmVzaGluZyB0aGUgY2FjaGUuXG4gICAgICAgICAgICBjb25zdCBpc1N0YWxlID0gdGhpcy4jaXNTdGFsZShpbmRleCk7XG4gICAgICAgICAgICBpZiAoIWZvcmNlUmVmcmVzaCAmJiAhaXNTdGFsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5mZXRjaCA9ICdoaXQnO1xuICAgICAgICAgICAgICAgIHRoaXMuI21vdmVUb1RhaWwoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVBZ2VPbkdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVJdGVtQWdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc3RhdHVzVFRMKHN0YXR1cywgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb2ssIGl0IGlzIHN0YWxlIG9yIGEgZm9yY2VkIHJlZnJlc2gsIGFuZCBub3QgYWxyZWFkeSBmZXRjaGluZy5cbiAgICAgICAgICAgIC8vIHJlZnJlc2ggdGhlIGNhY2hlLlxuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuI2JhY2tncm91bmRGZXRjaChrLCBpbmRleCwgb3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgICAgICBjb25zdCBoYXNTdGFsZSA9IHAuX19zdGFsZVdoaWxlRmV0Y2hpbmcgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IHN0YWxlVmFsID0gaGFzU3RhbGUgJiYgYWxsb3dTdGFsZTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZmV0Y2ggPSBpc1N0YWxlID8gJ3N0YWxlJyA6ICdyZWZyZXNoJztcbiAgICAgICAgICAgICAgICBpZiAoc3RhbGVWYWwgJiYgaXNTdGFsZSlcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLnJldHVybmVkU3RhbGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YWxlVmFsID8gcC5fX3N0YWxlV2hpbGVGZXRjaGluZyA6IChwLl9fcmV0dXJuZWQgPSBwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSB2YWx1ZSBmcm9tIHRoZSBjYWNoZS4gV2lsbCB1cGRhdGUgdGhlIHJlY2VuY3kgb2YgdGhlIGNhY2hlXG4gICAgICogZW50cnkgZm91bmQuXG4gICAgICpcbiAgICAgKiBJZiB0aGUga2V5IGlzIG5vdCBmb3VuZCwgZ2V0KCkgd2lsbCByZXR1cm4gYHVuZGVmaW5lZGAuXG4gICAgICovXG4gICAgZ2V0KGssIGdldE9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IGFsbG93U3RhbGUgPSB0aGlzLmFsbG93U3RhbGUsIHVwZGF0ZUFnZU9uR2V0ID0gdGhpcy51cGRhdGVBZ2VPbkdldCwgbm9EZWxldGVPblN0YWxlR2V0ID0gdGhpcy5ub0RlbGV0ZU9uU3RhbGVHZXQsIHN0YXR1cywgfSA9IGdldE9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4ja2V5TWFwLmdldChrKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy4jdmFsTGlzdFtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBmZXRjaGluZyA9IHRoaXMuI2lzQmFja2dyb3VuZEZldGNoKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMpXG4gICAgICAgICAgICAgICAgdGhpcy4jc3RhdHVzVFRMKHN0YXR1cywgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuI2lzU3RhbGUoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmdldCA9ICdzdGFsZSc7XG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIG9ubHkgaWYgbm90IGFuIGluLWZsaWdodCBiYWNrZ3JvdW5kIGZldGNoXG4gICAgICAgICAgICAgICAgaWYgKCFmZXRjaGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vRGVsZXRlT25TdGFsZUdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUoayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAmJiBhbGxvd1N0YWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLnJldHVybmVkU3RhbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxsb3dTdGFsZSA/IHZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dTdGFsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuX19zdGFsZVdoaWxlRmV0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLnJldHVybmVkU3RhbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGxvd1N0YWxlID8gdmFsdWUuX19zdGFsZVdoaWxlRmV0Y2hpbmcgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmdldCA9ICdoaXQnO1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGN1cnJlbnRseSBmZXRjaGluZyBpdCwgd2UgZG9uJ3QgYWN0dWFsbHkgaGF2ZSBpdCB5ZXRcbiAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdCBzdGFsZSwgd2hpY2ggbWVhbnMgdGhpcyBpc24ndCBhIHN0YWxlV2hpbGVSZWZldGNoaW5nLlxuICAgICAgICAgICAgICAgIC8vIElmIGl0J3Mgbm90IHN0YWxlLCBhbmQgZmV0Y2hpbmcsIEFORCBoYXMgYSBfX3N0YWxlV2hpbGVGZXRjaGluZ1xuICAgICAgICAgICAgICAgIC8vIHZhbHVlLCB0aGVuIHRoYXQgbWVhbnMgdGhlIHVzZXIgZmV0Y2hlZCB3aXRoIHtmb3JjZVJlZnJlc2g6dHJ1ZX0sXG4gICAgICAgICAgICAgICAgLy8gc28gaXQncyBzYWZlIHRvIHJldHVybiB0aGF0IHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChmZXRjaGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuX19zdGFsZVdoaWxlRmV0Y2hpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuI21vdmVUb1RhaWwoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVBZ2VPbkdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVJdGVtQWdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgc3RhdHVzLmdldCA9ICdtaXNzJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAjY29ubmVjdChwLCBuKSB7XG4gICAgICAgIHRoaXMuI3ByZXZbbl0gPSBwO1xuICAgICAgICB0aGlzLiNuZXh0W3BdID0gbjtcbiAgICB9XG4gICAgI21vdmVUb1RhaWwoaW5kZXgpIHtcbiAgICAgICAgLy8gaWYgdGFpbCBhbHJlYWR5LCBub3RoaW5nIHRvIGRvXG4gICAgICAgIC8vIGlmIGhlYWQsIG1vdmUgaGVhZCB0byBuZXh0W2luZGV4XVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vICAgbW92ZSBuZXh0W3ByZXZbaW5kZXhdXSB0byBuZXh0W2luZGV4XSAoaGVhZCBoYXMgbm8gcHJldilcbiAgICAgICAgLy8gICBtb3ZlIHByZXZbbmV4dFtpbmRleF1dIHRvIHByZXZbaW5kZXhdXG4gICAgICAgIC8vIHByZXZbaW5kZXhdID0gdGFpbFxuICAgICAgICAvLyBuZXh0W3RhaWxdID0gaW5kZXhcbiAgICAgICAgLy8gdGFpbCA9IGluZGV4XG4gICAgICAgIGlmIChpbmRleCAhPT0gdGhpcy4jdGFpbCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLiNoZWFkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jaGVhZCA9IHRoaXMuI25leHRbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY29ubmVjdCh0aGlzLiNwcmV2W2luZGV4XSwgdGhpcy4jbmV4dFtpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4jY29ubmVjdCh0aGlzLiN0YWlsLCBpbmRleCk7XG4gICAgICAgICAgICB0aGlzLiN0YWlsID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIGtleSBvdXQgb2YgdGhlIGNhY2hlLlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUga2V5IHdhcyBkZWxldGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZGVsZXRlKGspIHtcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuI3NpemUgIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4ja2V5TWFwLmdldChrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3NpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlSXRlbVNpemUoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy4jdmFsTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNpc0JhY2tncm91bmRGZXRjaCh2KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdi5fX2Fib3J0Q29udHJvbGxlci5hYm9ydChuZXcgRXJyb3IoJ2RlbGV0ZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy4jaGFzRGlzcG9zZSB8fCB0aGlzLiNoYXNEaXNwb3NlQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNoYXNEaXNwb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jZGlzcG9zZT8uKHYsIGssICdkZWxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNoYXNEaXNwb3NlQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNkaXNwb3NlZD8ucHVzaChbdiwgaywgJ2RlbGV0ZSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNrZXlNYXAuZGVsZXRlKGspO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNrZXlMaXN0W2luZGV4XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jdmFsTGlzdFtpbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy4jdGFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jdGFpbCA9IHRoaXMuI3ByZXZbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSB0aGlzLiNoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNoZWFkID0gdGhpcy4jbmV4dFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNuZXh0W3RoaXMuI3ByZXZbaW5kZXhdXSA9IHRoaXMuI25leHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jcHJldlt0aGlzLiNuZXh0W2luZGV4XV0gPSB0aGlzLiNwcmV2W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzaXplLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2ZyZWUucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiNoYXNEaXNwb3NlQWZ0ZXIgJiYgdGhpcy4jZGlzcG9zZWQ/Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZHQgPSB0aGlzLiNkaXNwb3NlZDtcbiAgICAgICAgICAgIGxldCB0YXNrO1xuICAgICAgICAgICAgd2hpbGUgKCh0YXNrID0gZHQ/LnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jZGlzcG9zZUFmdGVyPy4oLi4udGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGV0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBjYWNoZSBlbnRpcmVseSwgdGhyb3dpbmcgYXdheSBhbGwgdmFsdWVzLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHRoaXMuI3JpbmRleGVzKHsgYWxsb3dTdGFsZTogdHJ1ZSB9KSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuI3ZhbExpc3RbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHRoaXMuI2lzQmFja2dyb3VuZEZldGNoKHYpKSB7XG4gICAgICAgICAgICAgICAgdi5fX2Fib3J0Q29udHJvbGxlci5hYm9ydChuZXcgRXJyb3IoJ2RlbGV0ZWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gdGhpcy4ja2V5TGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2hhc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZGlzcG9zZT8uKHYsIGssICdkZWxldGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2hhc0Rpc3Bvc2VBZnRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNkaXNwb3NlZD8ucHVzaChbdiwgaywgJ2RlbGV0ZSddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4ja2V5TWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuI3ZhbExpc3QuZmlsbCh1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLiNrZXlMaXN0LmZpbGwodW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKHRoaXMuI3R0bHMgJiYgdGhpcy4jc3RhcnRzKSB7XG4gICAgICAgICAgICB0aGlzLiN0dGxzLmZpbGwoMCk7XG4gICAgICAgICAgICB0aGlzLiNzdGFydHMuZmlsbCgwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4jc2l6ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuI3NpemVzLmZpbGwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jaGVhZCA9IDA7XG4gICAgICAgIHRoaXMuI3RhaWwgPSAwO1xuICAgICAgICB0aGlzLiNmcmVlLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuI2NhbGN1bGF0ZWRTaXplID0gMDtcbiAgICAgICAgdGhpcy4jc2l6ZSA9IDA7XG4gICAgICAgIGlmICh0aGlzLiNoYXNEaXNwb3NlQWZ0ZXIgJiYgdGhpcy4jZGlzcG9zZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGR0ID0gdGhpcy4jZGlzcG9zZWQ7XG4gICAgICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgICAgIHdoaWxlICgodGFzayA9IGR0Py5zaGlmdCgpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3Bvc2VBZnRlcj8uKC4uLnRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5MUlVDYWNoZSA9IExSVUNhY2hlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyohXG4gKiBpcy1wbGFpbi1vYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIHZhciBjdG9yLHByb3Q7XG5cbiAgaWYgKGlzT2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKGN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuICBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG4gIGlmIChpc09iamVjdChwcm90KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgaXNQbGFpbk9iamVjdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSBcIm9jdG9raXRcIjtcbmltcG9ydCB7IGdldENocm9tZU1lc3NhZ2UsIHNldENocm9tZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2Nocm9tZVV0aWxzXCI7XG5jb25zdCBtZXNzYWdlSGFuZGxlciA9IChyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAocmVxICYmIHJlcS5pc1N1Y2Nlc3MgJiYgcmVxLmFjdGlvbiA9PT0gXCJQU0hFTFBFUl9UT0tFTlwiKSB7XG4gICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7IEdJVEhVQl9UT0tFTjogcmVxLnRva2VuIH0pO1xuICAgICAgICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICAgICAgICAgICAgYXV0aDogcmVxLnRva2VuLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgb2N0b2tpdC5yZXF1ZXN0KFwiR0VUIC91c2VyL3JlcG9zXCIpO1xuICAgIH1cbn0pO1xuY29uc3QgYSA9IGdldENocm9tZU1lc3NhZ2UobWVzc2FnZUhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9