'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c73f57a771f98f41ea0cbfd364899fee",
".git/config": "de8362d80700c4c12e7ee7abac79c21f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32225090377f188b6ee4d20dad2539f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "458c64f389861a6bacb7e403dd1be5fc",
".git/logs/refs/heads/main": "f0668dee0c98834e7ba1f87aad30b2db",
".git/logs/refs/remotes/origin/main": "c6bf3cf446ac19c21deef08286ea46e6",
".git/objects/08/1fe8b9f9061fbaf6eae147d285799ee8525ef6": "0c04f19df9c27e573d67338f971f87e0",
".git/objects/0d/d12a1f5b2839e33cbdaded9960c055d1d716c3": "72d2e31522833a36a7400fabbbcc7b82",
".git/objects/11/63f6f3133cd5e09fa09f72963f5b305dc59092": "6f1f5177a133e178404026fa8352f29b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/23b23e075776b907066db7b10f26cffbcec182": "c202542f5f7c2f0a01f79419d24e3d5e",
".git/objects/16/3bab1f7a814f75d6e3044d707ca6f745703d08": "efa46a253396e1f8e0e4ae0c2760cede",
".git/objects/19/0e28bb01cde85568187afb64585e9d1f7cbaa3": "e21996d74bc21c73ee413c0396c951f3",
".git/objects/1a/16044e55d075c7674f55104f393eaf2b847dd0": "988a9ccfb53452747859dc7e81d02850",
".git/objects/1a/bc49e8682353040447eeb8debef707a7b25f68": "7439c52dd5ba9901a633500e70eb53d1",
".git/objects/1b/399b1f6efdb36e6e482f0dff2a3414767f12d6": "c7ce3ca152df928b79eefb96d2d61530",
".git/objects/1e/4c31f239a4cb49bbf3f5f00c33096cac0cb1c5": "41e7a2e023936cfa65bb2f8d1a9e4150",
".git/objects/1f/5762785ca0649e29727187f167b5a9b9b227d5": "88e41799404b9166e58aef2376413938",
".git/objects/20/7e6dd29a47f9511f4cbc2bb6080e3964e359f8": "6afa689fbf47b38317d530d962bd3da6",
".git/objects/21/c2bc5b06edefcd5ae94dd06fbfda66e9acbe67": "a356594f77ff498157831be536dcb0cc",
".git/objects/22/f7e78d42f5b70069dfd76ba75fe8a359c370f0": "149e72a2257f525ee851d5c789c16baf",
".git/objects/25/d9cd8209fa3b30f61c00db4f3706c2c9597b10": "622a8a07ea8a6b5ecdce4717ca3f5c4d",
".git/objects/28/623b9730f71fe44b32eaf99b66c08aa333f382": "833bc0dbfb4fa1c91b2084288602f3b5",
".git/objects/28/9652716b630cf1d4d9aba6cd2e59d0dc178d44": "189d27d284d80fca8ad6f174ce80ef3e",
".git/objects/2a/079364e3e77f697e5f939d1f997a242e5487da": "374816559c29170112c28da9b181b517",
".git/objects/2f/9f16dc5b3665c726bf4f3dce97f2bc2ba9201d": "b98caa2e34c290474a5fa98c11d23e2e",
".git/objects/2f/ca68ec6e1b4f688a4ce146f23bf5164e34cdee": "33f57e03fb3cc0192957b3606e6a8901",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/5fc3b8234eac5b32a09b9476d455c0b0c046e2": "0c3acf4029690c6462aa5439edc8f505",
".git/objects/3b/934258dde7317c99b0462552b29d3447d00a05": "2ddcbcacb57f967b725e88c6e9f55690",
".git/objects/3f/fef1ffbf03fb424e67b8445728c37ac018b76f": "2ec1a9eb08a9bf7138826f64d2fd5ecc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/49/0365fcf406a987f04f4aa50bb83fb8b55d0eed": "b10b5698385d7b15deaa39854783be3b",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/62dabb9f816430f924a4676d9eabebf6657a90": "9f80e3110976ca4c99b3ca4c8a3e2196",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/75c3b73ea089d9e5822d3a6f8112c72c867ad5": "26cc7b3e74d1d7438cd0b22735d36372",
".git/objects/59/0e1b0359187ffafa7425b5492f5f6269376072": "db396039ff7209739cb77fe676ccafff",
".git/objects/5e/073752723e94310c4bb2b341979fb4a1eb1c0d": "48e56befa7a647d5ff6a0752df53b1c2",
".git/objects/60/efabdd9b94ebcfe90d79a7ca0c4f621d498757": "0609b534c19c787ce71bace2bedaf498",
".git/objects/63/ec6176af6f69f4d892cfb4e2048e75bab2533c": "d3229982f2e05a0e7c0f6201ee5f3d77",
".git/objects/68/db33964ea7945936f6742e5e1ae3e9dd040e64": "1587e23d35b6ba232c3bd76487dfde7a",
".git/objects/69/4d7c3a8c2280938dbd55de73c56592f063ece4": "59f2303f78083990bf78c1cb98a65ae1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/911e713ed39037e607a5dab1c8f6bd753c6846": "eca0cb4140ca0f3ab577234731b8aff8",
".git/objects/6e/b5bf21b26405801a90b9ef4e7419369a1eb282": "6faa52a3a1e72e8fb89c7d68097c1d2d",
".git/objects/72/ef4fa2ba8cb78eb2e7a6c44f8c4b34283fb446": "b26e034cf73d84578a46d63f3c61a55b",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/00de6a546e32f589ebccc12562a4884150e84b": "9158ee925369f4a30239d2a575a72665",
".git/objects/74/139489d1864ae2a7de49f192fda1ff1e56cdaf": "f004afe48f4f70cd98faf5c4d35676b6",
".git/objects/76/4ab7f620c22054cb43836c1fed8455aa30f343": "65426ca858e301f6012b8581ba6b777b",
".git/objects/76/78a2b55556cfaed2e97a99cd09a9292cb7a1fc": "724e46b0570618ba533812bb82c8f535",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/f54d0905e9b1d2fed9283aa8cebb5ad9b62eb2": "8de8fc9045fddae41946d8e9ddbe79de",
".git/objects/7f/2046be49a77f14b769e1ad5c7bbaabccae5c5f": "d85283e4fc8da1650a34d727ac23a1fb",
".git/objects/83/74fc3fadd7986fd760dd090aceeed0e8e9238e": "cd30f2eb5420aa0dbd28b36cbc4b867e",
".git/objects/88/8e9785adece4c4525169c74d9c6adf45eafb82": "612ccbc4a82249c2b0200d65b197d369",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2087c2d3d3609180b9c18149353299f50fa1a4": "9e9e6012aff78429a2d78804ca454f63",
".git/objects/89/f8a6456fa59ffce29ca4a1dcd11d19979f4cc0": "0ba30c09cdcf88299da4febe6146f9e7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/cebb886a538ed3caf2f93db1b8e6752d55d2c4": "e9fea1585da9ded67b8f20def95b35fe",
".git/objects/90/a2b8bf29a4f55f30d238224d821807a5090821": "b4e1b2e5f617c3adbe082dd62bf81b1b",
".git/objects/91/933163e52120ff477e5856f1a646d5b44f55df": "dc09fcb8a25c058bf791c0cb2eb04fd5",
".git/objects/92/36a8b80df5ea469966c50b423659645de0fb84": "c686b353b9bab4df6f01511e37223a47",
".git/objects/99/a402ae9f774f5dae98a92486293867fcffbdaa": "cc38e1958ca6a7bd445debf61fa244d7",
".git/objects/9b/a02e6a37044427c669c942ad30921320104553": "be0c33222a79086e96c43e79aa564a50",
".git/objects/9e/f80a78fcad121901b45c3b79ec2420d1a26006": "9c0d611813cda2b0505aefd6ea0e08d2",
".git/objects/9f/486afd546f795bd03c8d56b29079406e573b47": "6128eac8c4ef8fcba7a76d578b19ffdb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fb868ec11373da8689374a56d0cfa855d252fd": "28eba24bf26d528e443d592653ceccba",
".git/objects/a7/16b794bcf3cf28acc1a7b8dcaae0ed0ec728f4": "992716aaedd228747260058dbe8bf144",
".git/objects/a9/0fbefb8bc544e0250363969b46da315a706b29": "4e6cabd7a6813523dc70951306dad00e",
".git/objects/aa/513dec9ee5b7fb29cf812c2d9376582135f02d": "25bd5d54108641b9ccc04966e44a658f",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f12bf0dbe85ba670c2629d86efe08694185818": "d2c4cc71cf075aec500346ec3eb11428",
".git/objects/ad/3a8e4206f3d88bb6471d7176101bdf8949bd86": "8e2210625f6765836d567066fc052f54",
".git/objects/ae/cb5955d56c2e8aeab34e9f56cb9853e309d192": "925e87028a7d00f754f75d6caa7056d9",
".git/objects/af/2826c49cd4ac705bc01999758b4387a7fe17aa": "a8af7be64d6825ae2ceafcbc541ecf0a",
".git/objects/b1/9e0abb1a70f81d9eafed6a000e056e659d0654": "316c6881babf99dda82a79c780d3b384",
".git/objects/b2/39b6219ec34a70685dff0b5eef91f62a4f9c80": "f88497a3c79fdc09b646e575f241e2d8",
".git/objects/b5/18f3d16764e152620bf65c042bbd6db1192ef9": "fdb9a89f8088b4f27259571ec73ddb0e",
".git/objects/b5/d6eb703af7c691839efa6f3093fc9571b424a5": "c445239d98faeb3ddab779d5ad96bfa0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/68163eab2a3e4f1d935225e3e12a5a1de3448c": "d5d5cfbe1166764bd9aabe5851b7e3a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/c2aca1ace71b075fe53be71caa0ad8235ba13d": "03012573ae80240f9ec48bb50b2719eb",
".git/objects/c0/324f9f6ba60001a1d0db6e27dfbd1e399f47b0": "c0909fc03e7ad8408dcc37a272da8a16",
".git/objects/c7/3ee97a37b9a4c6eb48322db5c1f7e820575be2": "5f8823997dd5ffd07c891dd26eef95d4",
".git/objects/ca/6c6f40efb54ec142a65788dfeaf21a6784d039": "1001483d4396b0467b182e9dc6ad0714",
".git/objects/ca/9a4dda7c242287e5b38626650e5c97b56a3e45": "39e0b6b26270294b46e05cb221edf3b9",
".git/objects/cd/c8eddf502321ccc0ca2e50d4b31d6ff8dd92b6": "53c7e68d75695693bfca8523e87070db",
".git/objects/cd/ec5c69e9e03774fee843d6ae5d5b6a0d46e127": "a4ea25dbf50004bab445449fe9d92fb9",
".git/objects/d1/630340d570b94b6858b4446c3818e57c1bb8b6": "500bd04737734d0c63db858aff70cf62",
".git/objects/d3/14352496161f255e0b78a77af9a6b6b5a3c1fd": "ae337ada763caf3caac82dcfa95cb635",
".git/objects/d5/db72813afc59a08dd6265f9d108df834d4b483": "8f1564b26e752c8d32fdfa46a0fd19c5",
".git/objects/d6/338f84ca7d625c4c0efa5ce728223212a844b7": "45510bb85e2d47b8cab17c21f848409c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/3a62a8a0f4cfb66a4513561f085090cc3de75e": "2943d4fea6790c8e0ba924612f623dc3",
".git/objects/de/b4624b3d881f75fa40831bf0be5ea5572182d4": "e4359a61ab098c64893877e19742e4ed",
".git/objects/e0/b168c0673f0b192ed8bc99e1030e3ed82900d9": "5e545924fd2815c504e57db32e0ae674",
".git/objects/e0/ca6c636df7660b247ae182c5cece4a7cb15e93": "a6a661cdb341f72be747f66266d55125",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/f7fbdb49bc08a1dfe49a18e9bf93e610d3bd87": "2355c031ecbcadd75020da91a2dbdebd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f536e5487063e14e0220336ee1b1b635b8a46d": "aad78097da8fd26b9946edd0abe85a24",
".git/objects/f1/d2e64db4eabcf2fb09dfd0e4bd1adc75f0a3d0": "eb49644986dba8d61b387e72d6c08cd3",
".git/objects/f2/2cdc99403d97765d96ae1ca2b1b23d08eb1a6f": "108a64268ebbf9547b790d49cec4b4d7",
".git/objects/f9/70b240baf2a450773a69a1526dad3ac7b5676e": "e45f7ecd1b926d6c9bc26b7ef3171770",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/objects/fe/bf90ba76c9783c7d6aaa329fe30763acf1adf5": "d655f32278863db15d4f35d5e1762206",
".git/refs/heads/main": "cfb331c22d0806efc9ab7ac439d135d7",
".git/refs/remotes/origin/main": "cfb331c22d0806efc9ab7ac439d135d7",
"assets/AssetManifest.json": "926c56d598c9939a731d2013ef762d6f",
"assets/Assets/125-1257717_quotation-marks-in-english-computer-icons-large-quotation-marks-png.png": "54f3afd0460a88b35aaadd4d9fec6038",
"assets/Assets/16268340_rm373batch5-banner-08.jpg": "e68efc051776ddbb7052d97704af729e",
"assets/Assets/18407472_5995339.jpg": "576c2c1e6627a78bfe4edf24e4603e63",
"assets/Assets/21724280_6506030.jpg": "eebf0fd16602790162e5242ac35a2ba2",
"assets/Assets/5437842.jpg": "dd6672ceff15116c50477723cab2b302",
"assets/Assets/60bb4a2e143f632da3e56aea_Flutter%2520app%2520development%2520(2).png": "dfe33ccfbaad137d8e811190101497f9",
"assets/Assets/animated_login_character.riv": "776846a6268a48a238375bb45f538b2a",
"assets/Assets/double-quotation-marks-11550127028mnhcrm7tmp.png": "e2a7bf94abf089e143b7c8b57df9da1f",
"assets/Assets/login.riv": "dd6c4eee50f004d90266b7953bba92c4",
"assets/Assets/There%2520Brat.otf": "a15689fc9592be3ba0a00d046bb64271",
"assets/Assets/toemater_timer.riv": "3796a55d10763cff9bd40130d7988f9b",
"assets/Assets/v748-toon-103.jpg": "b1af4742ee1029b3517387a0094acde3",
"assets/FontManifest.json": "2a8b0612733a19a8e2bdb39071421f5b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f2b8ed3b4ba71efd429dcf06fa554641",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5f755513fcb91443d6e6fd6693974f8",
"/": "a5f755513fcb91443d6e6fd6693974f8",
"main.dart.js": "42e79096cfdf2381fdabaa29f4f356b3",
"manifest.json": "40bb5a91270240d0c0e18688c5a22f91",
"README.md": "bf39dd9310777afa44eccdaa50e88230",
"version.json": "e7809552602b1681622fc3e4df2fd8a0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
