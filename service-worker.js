"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e9025436ee02715b7216a7ddd4462542"],["/static/css/main.c51168b3.css","227ad1858a1a1a528e676187378b1d88"],["/static/js/main.9c1e063a.js","7cf70015bc3ea058ac8441f70d5104ca"],["/static/media/15th.6edf062e.jpg","6edf062e3ed1df006bc9dbae6ed0c39d"],["/static/media/Circular.6365c40a.otf","6365c40aa59d462f1cc52ccce9635cb4"],["/static/media/accordian.59c9caf4.jpg","59c9caf427b11b7d3e72dc3b5bc17d0e"],["/static/media/akihabara.c268b920.jpg","c268b92041224c669095fba6430caa90"],["/static/media/arashiyama.9e6411b6.jpg","9e6411b6c8794d5a84bb996d9a2c5d25"],["/static/media/arinells.10dfcc9f.jpg","10dfcc9fe3e588fea94378031f9aa3cb"],["/static/media/bamboo-waves.49eaa5e5.jpg","49eaa5e5b3c93315a0704eaffca7ccc2"],["/static/media/bart.079f126e.jpg","079f126edaa234f886ff1fe33fbd2b0c"],["/static/media/bart.f9a0d6f5.jpg","f9a0d6f52d9e4bfa76b9d01f375d7f25"],["/static/media/bernal.82352242.jpg","8235224209f2a185db0a5e252f901e61"],["/static/media/bike.d8cf4608.jpg","d8cf460842291064a1e9c1f4d1f5dd21"],["/static/media/bird-woman.5356e515.jpg","5356e515ce75776d5a25cc8ba6e6d627"],["/static/media/birhakeim.edb01232.jpg","edb0123256cd41c6aa05c809836cd7fe"],["/static/media/canal.c6381649.jpg","c6381649717650a81be1bf81ce3c3e49"],["/static/media/canalcouple.3d945e21.jpg","3d945e21ed011c39ed1d02b460db4c01"],["/static/media/castle-couple.2cec1b67.jpg","2cec1b67a4840eef8263818683a88e04"],["/static/media/castle-taxi.b1c2c6a5.jpg","b1c2c6a5230063907d7a6bc8a24ca4ab"],["/static/media/castle-waves.c670811e.jpg","c670811e4a4dab65c9b37a71ae8df36a"],["/static/media/caught.7afc15c7.jpg","7afc15c700bb0646b9e95e822f2139df"],["/static/media/channing.b3c421ff.jpg","b3c421ff45b5dae1c89df91290ec7086"],["/static/media/child-park.8be3799a.jpg","8be3799adf14fd5315c83af9fab67d9c"],["/static/media/couple.5af0e326.jpg","5af0e326ab3c2be7f29b7ef43f43919d"],["/static/media/cta-girl.8fe9d518.jpg","8fe9d518d58df6c6fc1097649e623e4f"],["/static/media/dinosaur.cee716a1.jpg","cee716a16198f43ade09a3ddb7bf8c10"],["/static/media/dot-lights.f624b9c7.jpg","f624b9c75987617a69abdeb8a114a1c0"],["/static/media/dot-lights2.6f426e9c.jpg","6f426e9cb3a083bd8c08f26802ff3efe"],["/static/media/durant.83862967.jpg","838629679100a025731d84f854b6a65c"],["/static/media/echo.1eb4c418.jpg","1eb4c418684d56a79cb1df4870920762"],["/static/media/empty.3d0fa62c.jpg","3d0fa62c468b6df2aa19ed1ba80e1973"],["/static/media/empty.90d9559f.jpg","90d9559f50f9fa6f4e84ee2b4fb7acc6"],["/static/media/estell.4d0e118b.jpg","4d0e118b590f1a71b6a2c4f432390db0"],["/static/media/fifty-seven.9b0bb1d2.jpg","9b0bb1d26c3586b088e728ae5d161828"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/fumer.6daf862a.jpg","6daf862a74e20b28c208b10c783bf05d"],["/static/media/greenwich.212237f7.jpg","212237f773bc22b9a00a094798909f71"],["/static/media/harajuku-waves.204727ce.jpg","204727ce0b92acd77e5e4a1073d178a3"],["/static/media/jioufen-5.f3d09810.jpg","f3d09810c77262baa3d5a1bbc4601e75"],["/static/media/jioufen.028dffce.jpg","028dffce696ebe594372e20dfeec7d1a"],["/static/media/jiufen-2.dbb1f074.jpg","dbb1f074ca961024ba9c9eb64151c8e8"],["/static/media/jiufen.7c50ef86.jpg","7c50ef86a3fb6e802925224eac11ef70"],["/static/media/kita.687d556b.jpg","687d556b7002756e9a57c83da7026512"],["/static/media/kyoto-lights.4b6e07b8.jpg","4b6e07b890f370a88874ad7133293355"],["/static/media/kyoto-station.f5a9ad20.jpg","f5a9ad20e297245c5d1d1b58778646c6"],["/static/media/laundry.543004a8.jpg","543004a855deee5296b2bb34a4bc1e55"],["/static/media/m2-taipei-2.a2dae654.jpg","a2dae65400f4bdb398c135022c56d872"],["/static/media/m2-taipei-3.0e2e9b33.jpg","0e2e9b33cde9a12f6f9f4434a6f3fadc"],["/static/media/m2-taipei-4.7c28bf0f.jpg","7c28bf0f9fb69ed4eedf7135d262501d"],["/static/media/m2-taipei.bdb9db06.jpg","bdb9db0680aee6bff384a338c3898d76"],["/static/media/man-subway.fa25fe8e.jpg","fa25fe8ef0917c4ed3c2cb86529e91bf"],["/static/media/market.0a622b89.jpg","0a622b895fbaa29c8c391d45b72d593a"],["/static/media/mission.88260d73.jpg","88260d73423981d81dc13bbe71efaf89"],["/static/media/muni-night.6c967bab.jpg","6c967babfcc9cebbec84415750bd3d67"],["/static/media/muni.23141cb0.jpg","23141cb03a960863c23b2eaa5bbfc797"],["/static/media/ocean.1b6144bd.jpg","1b6144bd19cf286eb6a5401a1fbb9fef"],["/static/media/old-men.4117b184.jpg","4117b184ff45bf1d069b7b3ac6281763"],["/static/media/old-woman.d215b72e.jpg","d215b72e0a4a3b1e3729252d5c6ee448"],["/static/media/parking.1de2c96f.jpg","1de2c96fcbdf57a702e41ceca8bc05dd"],["/static/media/pompidou.ae778bd3.jpg","ae778bd313789d77bef9323dc8be1566"],["/static/media/pontocho-lights.1b503ffa.jpg","1b503ffa9b2ad0cd708cd280687e7814"],["/static/media/pontocho.28294505.jpg","282945057a77864b4f2be9dd35633ae5"],["/static/media/powell.0894380d.jpg","0894380d91a057ae6091b888a23c80be"],["/static/media/road.694252de.jpg","694252de9568b994b88c9df1b8932ad2"],["/static/media/shibuya.f67b857e.jpg","f67b857e6a5a6d43cdc486b8f8b70905"],["/static/media/shinjuku-night.b6a3f5ab.jpg","b6a3f5abf57a3e592fc84046a4873e2f"],["/static/media/shinjuku.e19e5032.jpg","e19e5032490b6a96d144e78924b3d56f"],["/static/media/soho-crossing.80b0dfea.jpg","80b0dfeadd98f5203c6183a915a29402"],["/static/media/soho-woman.394e81ba.jpg","394e81bafdfb05ad2f0c1ee458b5502b"],["/static/media/station.65438020.jpg","65438020d5e89cbd005108a97cce3fd7"],["/static/media/subway.994aa12c.jpg","994aa12c474f61c709f096f4017bd03f"],["/static/media/subway.ee6856fd.jpg","ee6856fdb53bd303f84359820376456d"],["/static/media/sunny.7cbcee7c.jpg","7cbcee7c2879ac02556ac6b9186e70a2"],["/static/media/taipei-2.b596253d.jpg","b596253d81f0c3e45a2063acb21a85fe"],["/static/media/taipei-3.6b8bc56f.jpg","6b8bc56f731df5685ed56e228985356d"],["/static/media/taipei-4.dedf22f5.jpg","dedf22f50f8ca6064968e4c2f92fe6a9"],["/static/media/taipei-5.bd8bba76.jpg","bd8bba76f6741ed8d4be8e9eeaa53982"],["/static/media/tamsui-3.fbc0e59a.jpg","fbc0e59ad0345d2f02688004d7b2d5d3"],["/static/media/tamsui-4.5148f240.jpg","5148f240850f58df5a181f62155b8ac0"],["/static/media/taxi.9d44b151.jpg","9d44b151e6dac1bf1403052b2677ddac"],["/static/media/tourists.ecc990d8.jpg","ecc990d825d071ead4e1ae377ddd679b"],["/static/media/train-couple.311ce8d5.jpg","311ce8d5ddc64b130ee084d38e13e792"],["/static/media/train.b397b110.jpg","b397b110ea09ee03e2fc80f184555fc6"],["/static/media/transamerica.69b0b2e6.jpg","69b0b2e66e17700353a5f4855d440c6f"],["/static/media/ueno.feecbacd.jpg","feecbacde5dd351da13f00748fc6b8df"],["/static/media/umeda-alley.006862a1.jpg","006862a10190ed73ce746ec2143744f1"],["/static/media/umeda-alley2.8bb67cc3.jpg","8bb67cc32708efd05dff1c772539ad1e"],["/static/media/undercta.44fa9c64.jpg","44fa9c64b061903a3082274d72c84b05"],["/static/media/venice-skate-2.34f3b58f.jpg","34f3b58fb0ae230228c3b594ad471891"],["/static/media/venice-skate-3.0c57e4bd.jpg","0c57e4bd41410498547663e678f70670"],["/static/media/venice-skate.b4da1c35.jpg","b4da1c35a14f31f2e6beac23b2c22cdc"],["/static/media/waves-bridge.c4ffc76f.jpg","c4ffc76f3c4a1b32d08c497ffd27b692"],["/static/media/waves.29fafd87.jpg","29fafd87eb805696006d84dc3c95da46"],["/static/media/waves2.7c6a689f.jpg","7c6a689f6ff2664179a9e4056a9fbd2c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});