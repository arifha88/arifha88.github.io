'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "da00b6a2f891e4fe8940879eaa02374e",
"index.html": "c27befcee1b66cec1b78e325afae4df8",
"/": "c27befcee1b66cec1b78e325afae4df8",
"main.dart.js": "cc0178a7ee7e4bac9621ab08e92e21a2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a58578914c4fdf977a630c3c96e8bff1",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/ac/cba9d8a3415150765b969229d9240f7f4599d0": "6c907db73b15460e41902df9d3f9bb0f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7b/8091a0fd2b1841f02280db76bed53f8059fbcc": "501db3927ad5cbd3632ed2369c7a48e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6c/bca4d96b1e2b027c8e9b84d53dbcd7ed7b745f": "5e84a2a7528c769972ad8a29601d0f34",
".git/objects/55/7db03de997c86a4a028e1ebd3a1ceb225be238": "8860a360209f66ea0340a3c3a9aed75b",
".git/objects/63/ae1580b0058a8659a8bc3ee59b019068ebf11f": "61c5c53597b207ea5b32c61aeb988e64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/1b/17bdca8bd8939380fc4d5ab9e2bb6e24f45108": "fa25a76cc6d0c718097ea87b58aae67e",
".git/objects/1c/604a10457ee8698916c9154daf52db94afe55e": "281ddc385bda09204d9144635d923dfc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bed0e2ff732d79f6b1b8b0535471edde",
".git/logs/refs/heads/main": "6cc794127cf4eef4345737ec87790e18",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "abebc96d0ccd1a74827d523d4e1fa0bd",
".git/index": "f6e239d36896b559fb0fe39a16feeaee",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "7f04f2f047de823cb6b720867fc5554e",
"assets/AssetManifest.json": "eb203570b4019719c39491742f44f6d5",
"assets/NOTICES": "6e8bf77e17c3bfd6128164b6c49709bf",
"assets/FontManifest.json": "2cc3fcd933ee9358d7788d461c1c0f2e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/ic_pln_postpaid.png": "396e0f82c5df448b4e7b17553d0e4ceb",
"assets/assets/ic_wa_header.png": "335268e68ffa2b68ecfe788a8df10886",
"assets/assets/ic_9pajak.png": "368b6bbc54c6f67259687516b118f3ba",
"assets/assets/ic_tap_cash.png": "51dc83dd2915ee7406f21ae9d2cacd32",
"assets/assets/ic_about_header.png": "843a0eb3b00211f829fdd756560835e9",
"assets/assets/ic_bookmark.png": "3a6af3b3cf3f623ee8d2f091deb5b38e",
"assets/assets/ic_dana.png": "7f210d105cf1d4ebdb62e7b4b9e19d88",
"assets/assets/ic_ovo.png": "a69b8c05fcd60634803cc5459e31af45",
"assets/assets/ic_password.png": "f9ce54bf58ef8ae62c84375502fb6af4",
"assets/assets/ic_alfamart.png": "2b25cb8d92cc7fc756130e63f845c6fe",
"assets/assets/masagoeula.html": "c46c000acc168b3a2386e4b9d33e23d6",
"assets/assets/ic_va.png": "7d01dacea09711c0e3eb171adc76d6a4",
"assets/assets/ic_lainnya.png": "a5137c63cf65c1638caffcc02b0b4479",
"assets/assets/ic_chevron_right_blue.png": "42a717ca064d26604e22ccd5f7d5dc48",
"assets/assets/ic_about.png": "31664b26ede68026d60a602367373456",
"assets/assets/ic_shopee_pay.png": "3986f565da686fcd852c850603b08197",
"assets/assets/ic_ubah_profile.png": "7bf767b38b513b2e726f8fcdd88d7dbb",
"assets/assets/ic_user_header.png": "150aa063069d8baf981d131039eb9953",
"assets/assets/ic_wa.png": "660afc04abb34d8f5c432a6ee728bbef",
"assets/assets/ic_finance.png": "cd05df9e13beb84cdb724dcdf89ec625",
"assets/assets/ic_emoney.png": "2a97e39f1d0c5b56cdf5bccb0ecfb001",
"assets/assets/ic_jastel.png": "526c5d410b3f8d5d707ca8916e694c47",
"assets/assets/ic_onbill.png": "062ba36738b1a58e0f21071e795e4f4c",
"assets/assets/ic_rating.png": "6e84d8dcfa0aaf780c8aad349a3956b1",
"assets/assets/ic_report.png": "90afcb1280e3a6fc81e47fa66e6d422a",
"assets/assets/ic_setting.png": "249c49183d419937d23a21cb9be8172f",
"assets/assets/ic_bpjs.png": "2af9e61455de4c06886f4c2cd6b69050",
"assets/assets/ic_user.png": "efbeb87f778ee8c5cae09cc522b31b97",
"assets/assets/ic_linkaja.png": "d4749f7ecf6d3b8013087aeea2f65f7f",
"assets/assets/ic_ritel.png": "3888d24dcd67f45962c21bab43b66ad2",
"assets/assets/ic_finger_print.png": "b5582eab5114612eed679857100aa207",
"assets/assets/ic_print.png": "6e55474d38970c52dd9927866079b025",
"assets/assets/logo_masago_white.png": "4c4b88cc91d105dacf829e5ccf7a8729",
"assets/assets/logo_masago.png": "db6f0ad73018ef1cfa4e4cafc9e130da",
"assets/assets/ic_pln_ntag.png": "cb56758cb6eaad4907a7378ba5c8bb32",
"assets/assets/back_arrow.png": "3019675b8692c8202527efc8be8af22b",
"assets/assets/ic_bphtb.png": "e350221265387cc168b79b66c00beb67",
"assets/assets/ic_resi.png": "d078480e47a571b9441e17dd43e0dce7",
"assets/assets/ic_info.png": "e3ef76ae8a056b2eca574756ddaeaba0",
"assets/assets/ic_pdam.png": "9a3ee40bd3e98e522dd7d4e20377a34a",
"assets/assets/ic_profile.png": "76b68e9d438ae68c830d7c222cba5186",
"assets/assets/ic_pertagas_niaga.png": "f278d6f83e5cd21d14b504fa0605d2b5",
"assets/assets/ic_pin.png": "d2ae3a5649e0caddaeca8e2da90acd43",
"assets/assets/ic_print_black.png": "3bf6fc56515c790c750cff0a7189c87b",
"assets/assets/ic_pln_prepaid.png": "95ee175a2fcb79d0464196a0c409d0f7",
"assets/assets/ic_pulsa.png": "c90f5d4080e0157686697999884fadd1",
"assets/assets/ic_favorit.png": "877fb448949dfe7ee0f37de37fecde22",
"assets/assets/ic_retribusi_pasar.png": "b9de40fb727acb624c4aa05208a83282",
"assets/assets/ic_pertagas.png": "18c87e1efcb124928bb069f83760e438",
"assets/assets/exp_ads_top.png": "8f8f075118f6f410c13140d6e91b51b0",
"assets/assets/ic_layanan.png": "d19e0ec5a89cba3136d1a778649b676b",
"assets/assets/ic_bank.png": "62512e69a43fd486eac8d56ed1e00eed",
"assets/assets/ic_search.png": "8fb726f6668797a566c2709080497476",
"assets/assets/ic_launcher.png": "1af705178cc3b87be5dcf63ccd03bea8",
"assets/assets/ic_spanduk.png": "34565539c42f212951939c0ca1e698b2",
"assets/assets/ic_beranda.png": "c6c65b99225ba52339794610e8cbc8d9",
"assets/assets/ic_donasi.png": "fb63b481a00116982e7b46e8a1fd33ef",
"assets/assets/ic_pgn.png": "8b0d2f91881eb7fa0e148e69f0686c8a",
"assets/assets/ic_notif.png": "3df9e50e041487da0d705beecbb0a6c9",
"assets/assets/ic_menu_password.png": "0f6f4e5d4b39549c50a8582092122f4a",
"assets/assets/ic_launcher_round.png": "7adf1d1d1f0e4af923b7e764320f2575",
"assets/assets/ic_ritel_pelanggan.png": "b85ffd2704a2e7f410d89d1b805c120d",
"assets/assets/ic_komunitas.png": "dbc6bd281a52c4b8af36e8f596b9ffef",
"assets/assets/ic_isi_saldo.png": "0b5b3a1681addeb3082d27ea989b43a7",
"assets/assets/ic_masago_white.png": "4945b4a411f9cd4822f91077935f71e3",
"assets/assets/ic_email.png": "d9278760a7b2b7073442b0a777857047",
"assets/assets/ic_koperasi.png": "ac2552c138865a173fd7966a35ef91a9",
"assets/assets/ic_kai.png": "99ba951e50120320f59c00e2215c7938",
"assets/assets/ic_referral.png": "258eb6d17948b19b198a454289344d72",
"assets/assets/ic_laporan.png": "b987b04d3b7a3c04e8538efa54ad2de1",
"assets/assets/ic_gopay.png": "5253c3b101347dc53cc7352acd70380a",
"assets/assets/ic_pbb.png": "bb03e495836a67b5aa0ce002a8cd6943",
"assets/assets/bg_header_saldo.png": "afb3159bb9d3d7f27d4ca40759a47f06",
"assets/assets/ic_qrcode.png": "df18b883bb0520b13312a576180a4e1e",
"assets/assets/ic_eula.png": "f5f515c1e556dd2c3b75989a745290a3",
"assets/assets/ic_phone_book.png": "220dd26d56901688acce9369fbd950c9",
"assets/assets/ic_transfer.png": "619a354a7ad38716b5e80c990d756d06",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
