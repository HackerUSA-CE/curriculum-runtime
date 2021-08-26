var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="Jinja2.data";var REMOTE_PACKAGE_BASE="Jinja2.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","jinja2",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","Jinja2-3.0.1-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:278565,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,789,2741,3900,5250,6447,7697,8862,10173,11317,12564,13749,15001,16262,17513,18759,19697,20867,21825,22857,24106,25261,26543,27545,28760,29888,31059,32187,33248,34240,35215,36269,37295,38241,39251,40381,41482,42406,43520,44561,45452,46445,47422,48291,49122,50847,52168,53503,54827,56070,57323,58349,59544,60580,61870,63140,64358,65487,66628,67680,68813,70004,71178,72071,73317,74612,75805,77113,78311,79530,80639,81975,83075,84050,85198,86322,87417,88532,89835,91184,92377,93625,94851,96108,97566,98777,99826,100923,101813,103005,103970,105113,106172,107331,108483,109950,111114,112460,113553,114852,115986,117284,118645,120072,121321,122519,123585,124945,126121,127413,128681,130011,131234,132555,133897,135242,136565,137669,138950,140195,141270,142177,143540,144554,145794,146863,147991,148906,149887,150750,152168,153074,154150,155230,156499,157662,158911,160127,160820,161882,163121,164233,165191,166081,167238,168568,169941,171190,172292,173556,174707,175952,177189,178343,179547,180834,182188,183317,184460,185646,186967,188223,189386,190471,191705,192854,194292,195324,196659,197532,198640,199844,200884,201813,203087,204438,205860,207099,208283,209498,210816,211815,212909,213912,214875,215835,216941,217699,218403,219241,220512,221435,222422,223239,224166,225162,226180,227533,228886,230184,231242,232466,233724,234911,235931,236997,238117,239167,240453,241525,242638,243709,244745,245983,247128,248242,249453,250560,251631,252785,254083,255e3,255811,257017,257983,258797,260190,261587,262944,264017,265250,266564,267639,268872,270194,271568,272826,274061,275174,276764,277991],sizes:[789,1952,1159,1350,1197,1250,1165,1311,1144,1247,1185,1252,1261,1251,1246,938,1170,958,1032,1249,1155,1282,1002,1215,1128,1171,1128,1061,992,975,1054,1026,946,1010,1130,1101,924,1114,1041,891,993,977,869,831,1725,1321,1335,1324,1243,1253,1026,1195,1036,1290,1270,1218,1129,1141,1052,1133,1191,1174,893,1246,1295,1193,1308,1198,1219,1109,1336,1100,975,1148,1124,1095,1115,1303,1349,1193,1248,1226,1257,1458,1211,1049,1097,890,1192,965,1143,1059,1159,1152,1467,1164,1346,1093,1299,1134,1298,1361,1427,1249,1198,1066,1360,1176,1292,1268,1330,1223,1321,1342,1345,1323,1104,1281,1245,1075,907,1363,1014,1240,1069,1128,915,981,863,1418,906,1076,1080,1269,1163,1249,1216,693,1062,1239,1112,958,890,1157,1330,1373,1249,1102,1264,1151,1245,1237,1154,1204,1287,1354,1129,1143,1186,1321,1256,1163,1085,1234,1149,1438,1032,1335,873,1108,1204,1040,929,1274,1351,1422,1239,1184,1215,1318,999,1094,1003,963,960,1106,758,704,838,1271,923,987,817,927,996,1018,1353,1353,1298,1058,1224,1258,1187,1020,1066,1120,1050,1286,1072,1113,1071,1036,1238,1145,1114,1211,1107,1071,1154,1298,917,811,1206,966,814,1393,1397,1357,1073,1233,1314,1075,1233,1322,1374,1258,1235,1113,1590,1227,574],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_Jinja2.data")}Module["addRunDependency"]("datafile_Jinja2.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/jinja2/__init__.py",start:0,end:2205,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/_identifier.py",start:2205,end:3980,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/async_utils.py",start:3980,end:5731,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/bccache.py",start:5731,end:18408,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/compiler.py",start:18408,end:90454,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/constants.py",start:90454,end:91887,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/debug.py",start:91887,end:101125,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/defaults.py",start:101125,end:102392,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/environment.py",start:102392,end:163965,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/exceptions.py",start:163965,end:169036,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/ext.py",start:169036,end:201158,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/filters.py",start:201158,end:253735,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/idtracking.py",start:253735,end:264448,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/lexer.py",start:264448,end:294371,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/loaders.py",start:294371,end:316721,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/meta.py",start:316721,end:321117,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/nativetypes.py",start:321117,end:324792,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/nodes.py",start:324792,end:359301,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/optimizer.py",start:359301,end:360951,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/parser.py",start:360951,end:400718,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/runtime.py",start:400718,end:435731,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/sandbox.py",start:435731,end:450331,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/tests.py",start:450331,end:456236,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/utils.py",start:456236,end:483197,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/visitor.py",start:483197,end:486769,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/py.typed",start:486769,end:486769,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.1-py3.9.egg-info/PKG-INFO",start:486769,end:490222,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.1-py3.9.egg-info/SOURCES.txt",start:490222,end:492599,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.1-py3.9.egg-info/dependency_links.txt",start:492599,end:492600,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.1-py3.9.egg-info/entry_points.txt",start:492600,end:492661,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.1-py3.9.egg-info/requires.txt",start:492661,end:492696,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.1-py3.9.egg-info/top_level.txt",start:492696,end:492703,audio:0}],remote_package_size:282661,package_uuid:"97c67d09-a359-4ffb-b0b8-cec6fff2984d"})})();