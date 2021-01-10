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
    "revision": "8383a81f0329e14e498b683ad9b8f63d"
  },
  {
    "url": "404/index.html",
    "revision": "b28369d5aa607180f436b8569b7c4a29"
  },
  {
    "url": "4a58271c7c3f471e3a49da516d04cdc54cfa755b-b7fab8804987f11d4d17.js"
  },
  {
    "url": "4a58271c7c3f471e3a49da516d04cdc54cfa755b-b7fab8804987f11d4d17.js.map",
    "revision": "f1ee8e68fccf1846328193f6ed64b59d"
  },
  {
    "url": "about/index.html",
    "revision": "bfa9f9e6872431e25f76e6f70339d490"
  },
  {
    "url": "app-a59cd2c26cced33bf3db.js"
  },
  {
    "url": "app-a59cd2c26cced33bf3db.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-a59cd2c26cced33bf3db.js.map",
    "revision": "15faf69ecc9818e407b5d147b7b53298"
  },
  {
    "url": "app-f628a59920d58fc08374.js"
  },
  {
    "url": "app-f628a59920d58fc08374.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-f628a59920d58fc08374.js.map",
    "revision": "fc99a847c2d10f35227e92e4941962c6"
  },
  {
    "url": "chunk-map.json",
    "revision": "3d9b10e9a9712b4190530171e09061a7"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-241020a1cf7d0f317bbe.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-241020a1cf7d0f317bbe.js.map",
    "revision": "8fe984ce171be8a860c99274395408db"
  },
  {
    "url": "component---src-pages-404-js-eceeee1c69baa801c558.js"
  },
  {
    "url": "component---src-pages-404-js-eceeee1c69baa801c558.js.map",
    "revision": "3f9d011eca6be0b7dc6c80240651037a"
  },
  {
    "url": "component---src-pages-index-js-ad2cbcc395275ee5c80c.js"
  },
  {
    "url": "component---src-pages-index-js-ad2cbcc395275ee5c80c.js.map",
    "revision": "a291b92c862c0cf2af9699a61d9e362b"
  },
  {
    "url": "component---src-templates-page-js-52c1a64c56a115103404.js"
  },
  {
    "url": "component---src-templates-page-js-52c1a64c56a115103404.js.map",
    "revision": "b96ac01730d217b4644b6e1c367efd09"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-449da0cc583e9acb3b12.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-449da0cc583e9acb3b12.js.map",
    "revision": "7962a3408ce262f4d41a37f3f8764ac6"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-9130c2231145367aed54.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-9130c2231145367aed54.js.map",
    "revision": "c5d5ed29c5901dcc5629d2b8c768c090"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4f865a055912c8e315f29ea13afc5257"
  },
  {
    "url": "favicon.ico",
    "revision": "6ae0a01f7c083cae86654cdddf76da8f"
  },
  {
    "url": "framework-6eeb8ad043160a79d5e7.js"
  },
  {
    "url": "framework-6eeb8ad043160a79d5e7.js.LICENSE.txt",
    "revision": "f1d523c904ebbd453f563f0acfae6349"
  },
  {
    "url": "framework-6eeb8ad043160a79d5e7.js.map",
    "revision": "ce308ef0513da6d03605c9e8a714c251"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "646bad5f1d97dc7714322688d14e8a4d"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6a48b6a1ab5c598f701aefd20e19c587"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "2d90fffa7be33d7bcdd231563fe4b4b0"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "b63bafaaa9b4c5b37a1a64a63a499da6"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "a5ccee838b17762209fa8beb3311b393"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "147e48acb22076e3106805a80f188412"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "27a007e1e6fe77e7f34864c38a2fab83"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "dbdba4a7914b6e383819e1ede9fbb2b9"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "img/bracket_left.svg",
    "revision": "7a44a85a09ff8904bb7532d2d2dccf30"
  },
  {
    "url": "index.html",
    "revision": "83d87b60700c0d2b88e17ab966fa77a1"
  },
  {
    "url": "main.scss",
    "revision": "a4627e398d983c06844a9cb7df6a95c2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b55797b28ca9050b3f0629a3b0bf2265"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e621f750d788041349d92a63130ea107"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "6f4b16ba26098b5562b22b86a174c453"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "01247c2835b7c47a3ecc230c1951353e"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "9b90a097d0724406c325f48e8d5445a6"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "3e097170524fac2b46aaaf3eccce9ce9"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f806624d21e5eae49fad9ce6749700db"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/resume/page-data.json",
    "revision": "83693102c9d5ba500b5792fd937e460d"
  },
  {
    "url": "page-data/sq/d/2706045290.json",
    "revision": "ad33518d3304b43131713476108dd904"
  },
  {
    "url": "polyfill-b501fe73f7f74246766f.js"
  },
  {
    "url": "polyfill-b501fe73f7f74246766f.js.map",
    "revision": "886897b0e872d55914c84234d246a6a0"
  },
  {
    "url": "resume/index.html",
    "revision": "627467a1425d8ef5354b85e87df233be"
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
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js.map",
    "revision": "9886838ecb3c1891896409050891e9b7"
  },
  {
    "url": "styles.bf6937269d6044cd5ae8.css"
  },
  {
    "url": "webpack-runtime-0c0bd6a974faddd034ab.js"
  },
  {
    "url": "webpack-runtime-0c0bd6a974faddd034ab.js.map",
    "revision": "c0db04e92e7c09ec1517453cd47995dc"
  },
  {
    "url": "webpack-runtime-7c0bd3378b9ec33824c3.js"
  },
  {
    "url": "webpack-runtime-7c0bd3378b9ec33824c3.js.map",
    "revision": "0e960bf27ed8231fcd57c3171e22e643"
  },
  {
    "url": "webpack.stats.json",
    "revision": "30de98081ffc1f1aa2557db2205dcae4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  if (!resources || !(await caches.match(`/me/app-f628a59920d58fc08374.js`))) {
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
