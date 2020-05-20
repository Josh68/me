/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_vars.scss",
    "revision": "f08038dc6825d9aebdb3b5d112da752a"
  },
  {
    "url": "404.html",
    "revision": "9fee32852f77f2b26c5f0c9a84676336"
  },
  {
    "url": "404/index.html",
    "revision": "94143c5947177c08eb5f372d3986888f"
  },
  {
    "url": "4a58271c7c3f471e3a49da516d04cdc54cfa755b-44d2bfbddab36ed73826.js"
  },
  {
    "url": "4a58271c7c3f471e3a49da516d04cdc54cfa755b-44d2bfbddab36ed73826.js.map",
    "revision": "730c8767ab26d6499236ef90e2dc0ff1"
  },
  {
    "url": "about/index.html",
    "revision": "501bd69c17c6c0871e66b8b4f2d4e626"
  },
  {
    "url": "app-4fb0c84e45744f90056c.js"
  },
  {
    "url": "app-4fb0c84e45744f90056c.js.map",
    "revision": "f925cde56ebf4ac7d624343ddcb9efdb"
  },
  {
    "url": "chunk-map.json",
    "revision": "9483d980d58eb6a9ded96d171a875f30"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b1462017a2c34a95e2b4.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b1462017a2c34a95e2b4.js.map",
    "revision": "0eee71e1f22b5daf050ffe97afeb6adc"
  },
  {
    "url": "component---src-pages-404-js-bac1296af974c3534328.js"
  },
  {
    "url": "component---src-pages-404-js-bac1296af974c3534328.js.map",
    "revision": "9aee719846c322486cedb14211fccfa9"
  },
  {
    "url": "component---src-pages-index-js-e0bd5c426f0b710a5838.js"
  },
  {
    "url": "component---src-pages-index-js-e0bd5c426f0b710a5838.js.map",
    "revision": "bce08501c48e7acbd9496885cb8adf3e"
  },
  {
    "url": "component---src-templates-page-js-cd3f2e2631588aa8ae9a.js"
  },
  {
    "url": "component---src-templates-page-js-cd3f2e2631588aa8ae9a.js.map",
    "revision": "4f35826a4bc24d720e664223fef429d5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "78cc8dba13644d2c38a8ef194834eead"
  },
  {
    "url": "favicon.ico",
    "revision": "6ae0a01f7c083cae86654cdddf76da8f"
  },
  {
    "url": "framework-fb62c49788a6b508e224.js"
  },
  {
    "url": "framework-fb62c49788a6b508e224.js.map",
    "revision": "7ee0d25b3e95fc573a04a8266d128fb2"
  },
  {
    "url": "grumblings/index.html",
    "revision": "82a29892ee7f8d0ead648593693a09df"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "19456e423fd61247da92c3482c62139e"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "30338e39e688a54f3135df5bab542672"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "8438ebf9e70c214888fcad388be3c4be"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "9bc42d78a8db355454b50d20bced9046"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "9d9f4873c4c3c6e3b87ca739cd20a15d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "ad2cce700741c610d7cce0fc4945ca78"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "e674da1b681a0b190eeaffd026abb2fa"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "e950576a34aed4f9171a810e8ba86ace"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "img/bracket_left.svg",
    "revision": "7a44a85a09ff8904bb7532d2d2dccf30"
  },
  {
    "url": "index.html",
    "revision": "67d2ddb643f4250bc35342eb8754720d"
  },
  {
    "url": "main.scss",
    "revision": "a4627e398d983c06844a9cb7df6a95c2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "567811d1034eab0f9992abdb3b79ae6f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cc6c7598d892ad71e0e1c306c2f3ef89"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "74b2801aceb1df71b67f3f9885352a19"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "d435bb8b7be43cd2fe147a37d892ca4c"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "042754a6b509c16a17d0c9052cb06ee5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "15e33b4eacc67ef0c48fecf061de8041"
  },
  {
    "url": "page-data/grumblings/page-data.json",
    "revision": "e8f4313052a0f532049a232184396b34"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1dda8fb30300d40f3e6cd7bc82b77e91"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "bbd84116c579387dad36f04b150ead59"
  },
  {
    "url": "page-data/talking-loud/page-data.json",
    "revision": "a079e53c5f4960cf3ca2008582f5c4a3"
  },
  {
    "url": "resume/index.html",
    "revision": "0157ca7e7bd8f695b14eead8a78daf07"
  },
  {
    "url": "robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "scss/_index.scss",
    "revision": "49b6bcb071f781ea81bb1ec220b36d49"
  },
  {
    "url": "scss/layout/_footer.scss",
    "revision": "f83b639a7774c2c9f3966a26f008ddfc"
  },
  {
    "url": "scss/layout/_header.scss",
    "revision": "cc2d6d10b383bb496aebd8a858e5f561"
  },
  {
    "url": "scss/layout/_index.scss",
    "revision": "fc93b6390b117871b1a2c91c2ebb3984"
  },
  {
    "url": "scss/layout/_primary.scss",
    "revision": "eccf1b6ea3b122ee1950d1057e45073d"
  },
  {
    "url": "scss/modules/_bio.scss",
    "revision": "09d66cfd868d619677b6db94e6665185"
  },
  {
    "url": "scss/modules/_index.scss",
    "revision": "d1bc1116b00beab19def8b8b67bb5e3b"
  },
  {
    "url": "scss/modules/_nav.scss",
    "revision": "97164765c2c80ec2e20cc988a95421ec"
  },
  {
    "url": "scss/modules/_resume.scss",
    "revision": "bc07ff7ba9a30b72c97e326aaa2d6577"
  },
  {
    "url": "scss/utilities/_display.scss",
    "revision": "a345c00c2fea2a96d7eda53de5127d9b"
  },
  {
    "url": "scss/utilities/_index.scss",
    "revision": "655d86e5304caece6dc1f0ce1e8a2351"
  },
  {
    "url": "scss/utilities/_text.scss",
    "revision": "92e12430aab4d27a43cef3699cc41adf"
  },
  {
    "url": "static/d/673658460.json"
  },
  {
    "url": "static/merriweather-latin-300-b1158cfcd4aacb9d8fb61625e37af46a.woff2"
  },
  {
    "url": "static/merriweather-latin-300-cc7de05e166e90320d7d896e0f72a19d.woff"
  },
  {
    "url": "static/merriweather-latin-300italic-8fe52a48089d6ebe46db0b8e7cc66263.woff2"
  },
  {
    "url": "static/merriweather-latin-300italic-e1331f5397c2a673f9d3765138debdb5.woff"
  },
  {
    "url": "static/merriweather-latin-400-69f09800f4f6479d06e44eba837df872.woff"
  },
  {
    "url": "static/merriweather-latin-400-8276fdb72ae8f4714d4e6eba704cc39f.woff2"
  },
  {
    "url": "static/merriweather-latin-400italic-3a9be9ea9f7aa4af6de7307df21d9fc0.woff2"
  },
  {
    "url": "static/merriweather-latin-400italic-d76079ed7541a433a54f79316de086e9.woff"
  },
  {
    "url": "static/merriweather-latin-700-ba56ea84b8084b7ff9677f50d3cd81bd.woff"
  },
  {
    "url": "static/merriweather-latin-700-fa534be7ffa380e39a7f6e03bf9a5e03.woff2"
  },
  {
    "url": "static/merriweather-latin-700italic-1ef5edaaa20ae53ea50399884c5e48c6.woff2"
  },
  {
    "url": "static/merriweather-latin-700italic-534bc9e7ce93c73d73426e46acd78092.woff"
  },
  {
    "url": "static/merriweather-latin-900-3799b6e2f5ed3fcccf9d7a708d7419fa.woff"
  },
  {
    "url": "static/merriweather-latin-900-7528fb70e8a4a82c7305e72ff43ac25f.woff2"
  },
  {
    "url": "static/merriweather-latin-900italic-2ae22f731b3424e8dbb4b37f7ca6e708.woff"
  },
  {
    "url": "static/merriweather-latin-900italic-e1b4d2aaa78e12ad84aaf8a56321e4c2.woff2"
  },
  {
    "url": "static/montserrat-latin-100-191cc9f50f3b76b9617cb383f19acb7d.woff2"
  },
  {
    "url": "static/montserrat-latin-100-370318464551d5f25b0f0a78f374faac.woff"
  },
  {
    "url": "static/montserrat-latin-100italic-bdeaeb79db315697bd173a55b097dc18.woff2"
  },
  {
    "url": "static/montserrat-latin-100italic-ecf7d49386e8f265878e735db34a7c4b.woff"
  },
  {
    "url": "static/montserrat-latin-200-1fc98e126a3d152549240e6244d7e669.woff"
  },
  {
    "url": "static/montserrat-latin-200-85d5ef9db7f2dc6979172a4a3b2c57cb.woff2"
  },
  {
    "url": "static/montserrat-latin-200italic-49095760a498d024fe1a85a078850df9.woff2"
  },
  {
    "url": "static/montserrat-latin-200italic-fe46cf8b9462c820457d3bf537e4057f.woff"
  },
  {
    "url": "static/montserrat-latin-300-7c3daf12b706645b5d3710f863a4da04.woff2"
  },
  {
    "url": "static/montserrat-latin-300-8dc95fab9cf98d02ca8d76e97d3dff60.woff"
  },
  {
    "url": "static/montserrat-latin-300italic-3fe16939288856e8e828fa2661bf2354.woff"
  },
  {
    "url": "static/montserrat-latin-300italic-f20b178ca2024a5eac8e42e6649db86c.woff2"
  },
  {
    "url": "static/montserrat-latin-400-8102c4838f9e3d08dad644290a9cb701.woff"
  },
  {
    "url": "static/montserrat-latin-400-bc3aa95dca08f5fee5291e34959c27bc.woff2"
  },
  {
    "url": "static/montserrat-latin-400italic-5cad650422a7184467af5a4d17b264c4.woff2"
  },
  {
    "url": "static/montserrat-latin-400italic-d191f22af3bb50902b99ac577f81a322.woff"
  },
  {
    "url": "static/montserrat-latin-500-8b763220218ffc11c57c84ddb80e7b26.woff"
  },
  {
    "url": "static/montserrat-latin-500-92d16e458625f4d2c8940f6bdca0ff09.woff2"
  },
  {
    "url": "static/montserrat-latin-500italic-47bfcca6b69d6a9acca7a8bff17193e2.woff2"
  },
  {
    "url": "static/montserrat-latin-500italic-72c01f753c3940c0b9cb6bf2389caddf.woff"
  },
  {
    "url": "static/montserrat-latin-600-6fb1b5623e528e27c18658fecf5ee0ee.woff2"
  },
  {
    "url": "static/montserrat-latin-600-7c839d15a6f54e7025ba8c0c4b333e8f.woff"
  },
  {
    "url": "static/montserrat-latin-600italic-60789af1c9338ed1a9546722ec54b4f7.woff2"
  },
  {
    "url": "static/montserrat-latin-600italic-f3d4de8d0afb19e777c79032ce828e3d.woff"
  },
  {
    "url": "static/montserrat-latin-700-39d93cf678c740f9f6b2b1cfde34bee3.woff2"
  },
  {
    "url": "static/montserrat-latin-700-80f10bd382f0df1cd650fec59f3c9394.woff"
  },
  {
    "url": "static/montserrat-latin-700italic-8c98142b425630821139c24bd1698700.woff"
  },
  {
    "url": "static/montserrat-latin-700italic-ba136d97b14e82284dd595e257f11c47.woff2"
  },
  {
    "url": "static/montserrat-latin-800-9a9befcf50d64f9d2d19d8b1d1984add.woff"
  },
  {
    "url": "static/montserrat-latin-800-b7018be9ed6cd94da8b6675b3a468c3b.woff2"
  },
  {
    "url": "static/montserrat-latin-800italic-540ffdd223d1a9ad3d4e678e1a23372e.woff2"
  },
  {
    "url": "static/montserrat-latin-800italic-897086f99f4e1f45e6b1e9368527d0bc.woff"
  },
  {
    "url": "static/montserrat-latin-900-26d42c9428780e545a540bbb50c84bce.woff"
  },
  {
    "url": "static/montserrat-latin-900-58cd789700850375b834e8b6776002eb.woff2"
  },
  {
    "url": "static/montserrat-latin-900italic-451157bc8861fe54f523b3669a3def71.woff2"
  },
  {
    "url": "static/montserrat-latin-900italic-a8ec4957e1c24f5793305763ad9845b3.woff"
  },
  {
    "url": "styles-b729c27faa6284e9ff45.js"
  },
  {
    "url": "styles-b729c27faa6284e9ff45.js.map",
    "revision": "3b8f3b75751f0d0dc972b827d742fe06"
  },
  {
    "url": "styles.f7b28335ab6047159689.css"
  },
  {
    "url": "talking-loud/index.html",
    "revision": "22771fe86d95680e0a1ff386f8a14b40"
  },
  {
    "url": "webpack-runtime-1abe69fc2f58079cafb4.js"
  },
  {
    "url": "webpack-runtime-1abe69fc2f58079cafb4.js.map",
    "revision": "fb5e0be66ad0ec1478e21b253d6812bb"
  },
  {
    "url": "webpack.stats.json",
    "revision": "77000162fc974e6a46916894150cab58"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/me`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/me/app-4fb0c84e45744f90056c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/me/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
