var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="msgpack.data";var REMOTE_PACKAGE_BASE="msgpack.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","msgpack",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","msgpack-1.0.2-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:94797,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1222,2519,3590,4546,5801,7130,8217,9433,10236,11237,12116,12590,13086,13611,14494,15358,16579,17755,18487,19157,19963,20678,21773,23084,24295,25024,26096,27161,28337,29395,29926,30949,31930,32862,33485,34630,35905,37146,38157,39303,40385,41405,42675,43546,44763,45745,46760,47832,48975,50241,51660,52889,54058,55256,56530,57718,59004,60493,61546,62094,63165,64444,65608,67150,68127,69048,70147,71411,72529,73578,75036,76195,77443,78649,80014,81400,82717,84006,85084,86156,87324,88442,89111,90559,92018,93435,94751],sizes:[1222,1297,1071,956,1255,1329,1087,1216,803,1001,879,474,496,525,883,864,1221,1176,732,670,806,715,1095,1311,1211,729,1072,1065,1176,1058,531,1023,981,932,623,1145,1275,1241,1011,1146,1082,1020,1270,871,1217,982,1015,1072,1143,1266,1419,1229,1169,1198,1274,1188,1286,1489,1053,548,1071,1279,1164,1542,977,921,1099,1264,1118,1049,1458,1159,1248,1206,1365,1386,1317,1289,1078,1072,1168,1118,669,1448,1459,1417,1316,46],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_msgpack.data")}Module["addRunDependency"]("datafile_msgpack.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/msgpack/__init__.py",start:0,end:1118,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/_version.py",start:1118,end:1138,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/exceptions.py",start:1138,end:2219,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/ext.py",start:2219,end:8307,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/fallback.py",start:8307,end:46333,audio:0},{filename:"/lib/python3.9/site-packages/msgpack/_cmsgpack.so",start:46333,end:168638,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.2-py3.9.egg-info/PKG-INFO",start:168638,end:177599,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.2-py3.9.egg-info/dependency_links.txt",start:177599,end:177600,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.2-py3.9.egg-info/top_level.txt",start:177600,end:177608,audio:0},{filename:"/lib/python3.9/site-packages/msgpack-1.0.2-py3.9.egg-info/SOURCES.txt",start:177608,end:178229,audio:0}],remote_package_size:98893,package_uuid:"de7aee00-0897-46ca-a341-f9a20311990d"})})();