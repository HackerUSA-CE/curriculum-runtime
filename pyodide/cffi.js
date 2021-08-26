var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="cffi.data";var REMOTE_PACKAGE_BASE="cffi.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cffi",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cffi-1.14.6-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:295805,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1352,2677,3819,4521,5169,5799,6409,7501,8682,9723,10905,12111,13366,14976,16421,17998,19330,20892,22387,23758,25354,27010,28467,30137,31718,32876,34413,36032,37403,38861,40329,41394,42343,43689,44916,46391,47828,49139,50637,51935,53476,55140,56636,58204,59584,60942,62514,64084,65466,67102,68490,69727,71155,72684,74071,75317,76191,77304,78616,79950,81390,82720,84135,85685,87252,88771,90122,91553,92994,94443,95376,96233,97284,97766,97791,97960,99384,100535,101791,102979,103984,105378,106521,107873,109091,110415,111637,112836,113846,114877,115908,116769,118020,119272,120292,121253,122525,123518,124471,125500,126510,127547,128351,129178,130128,130982,132023,132939,133951,134904,135952,136838,137901,138887,139913,140907,141851,142952,144151,144999,146314,147452,148843,149794,151036,152318,153584,154690,155903,156914,158017,158990,159877,161035,162019,163068,164043,165440,166549,167663,168702,169571,170600,171857,173113,174377,175579,176431,177175,178349,179379,180454,181466,182444,183549,184571,185950,187166,188311,189260,190193,191012,192246,193352,194363,195450,196523,197579,198796,199882,200942,201932,202977,203988,204969,206105,207362,208419,209608,210482,211509,212549,213766,214885,216001,217022,217984,219119,220261,221267,222630,223963,225231,226493,227825,229180,230110,231368,232445,233463,234375,235469,236458,237445,238607,239719,240716,241746,242819,243810,244994,245863,246419,246980,248010,249393,250773,251807,252919,253857,254911,256127,257274,258214,259259,260379,261326,262511,263587,264752,265895,267035,268081,269211,270678,271674,272591,273098,273740,274779,275900,276983,277704,278844,280147,281255,282683,283970,285376,286439,287793,289136,290382,291767,293154,294258,295145],sizes:[1352,1325,1142,702,648,630,610,1092,1181,1041,1182,1206,1255,1610,1445,1577,1332,1562,1495,1371,1596,1656,1457,1670,1581,1158,1537,1619,1371,1458,1468,1065,949,1346,1227,1475,1437,1311,1498,1298,1541,1664,1496,1568,1380,1358,1572,1570,1382,1636,1388,1237,1428,1529,1387,1246,874,1113,1312,1334,1440,1330,1415,1550,1567,1519,1351,1431,1441,1449,933,857,1051,482,25,169,1424,1151,1256,1188,1005,1394,1143,1352,1218,1324,1222,1199,1010,1031,1031,861,1251,1252,1020,961,1272,993,953,1029,1010,1037,804,827,950,854,1041,916,1012,953,1048,886,1063,986,1026,994,944,1101,1199,848,1315,1138,1391,951,1242,1282,1266,1106,1213,1011,1103,973,887,1158,984,1049,975,1397,1109,1114,1039,869,1029,1257,1256,1264,1202,852,744,1174,1030,1075,1012,978,1105,1022,1379,1216,1145,949,933,819,1234,1106,1011,1087,1073,1056,1217,1086,1060,990,1045,1011,981,1136,1257,1057,1189,874,1027,1040,1217,1119,1116,1021,962,1135,1142,1006,1363,1333,1268,1262,1332,1355,930,1258,1077,1018,912,1094,989,987,1162,1112,997,1030,1073,991,1184,869,556,561,1030,1383,1380,1034,1112,938,1054,1216,1147,940,1045,1120,947,1185,1076,1165,1143,1140,1046,1130,1467,996,917,507,642,1039,1121,1083,721,1140,1303,1108,1428,1287,1406,1063,1354,1343,1246,1385,1387,1104,887,660],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cffi.data")}Module["addRunDependency"]("datafile_cffi.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/_cffi_backend.so",start:0,end:155399,audio:0},{filename:"/lib/python3.9/site-packages/cffi/__init__.py",start:155399,end:155912,audio:0},{filename:"/lib/python3.9/site-packages/cffi/api.py",start:155912,end:197976,audio:0},{filename:"/lib/python3.9/site-packages/cffi/backend_ctypes.py",start:197976,end:240430,audio:0},{filename:"/lib/python3.9/site-packages/cffi/cffi_opcode.py",start:240430,end:246154,audio:0},{filename:"/lib/python3.9/site-packages/cffi/commontypes.py",start:246154,end:248843,audio:0},{filename:"/lib/python3.9/site-packages/cffi/cparser.py",start:248843,end:293074,audio:0},{filename:"/lib/python3.9/site-packages/cffi/error.py",start:293074,end:293951,audio:0},{filename:"/lib/python3.9/site-packages/cffi/ffiplatform.py",start:293951,end:297997,audio:0},{filename:"/lib/python3.9/site-packages/cffi/lock.py",start:297997,end:298744,audio:0},{filename:"/lib/python3.9/site-packages/cffi/model.py",start:298744,end:320512,audio:0},{filename:"/lib/python3.9/site-packages/cffi/pkgconfig.py",start:320512,end:324886,audio:0},{filename:"/lib/python3.9/site-packages/cffi/recompiler.py",start:324886,end:389454,audio:0},{filename:"/lib/python3.9/site-packages/cffi/setuptools_ext.py",start:389454,end:398385,audio:0},{filename:"/lib/python3.9/site-packages/cffi/vengine_cpy.py",start:398385,end:441705,audio:0},{filename:"/lib/python3.9/site-packages/cffi/vengine_gen.py",start:441705,end:468389,audio:0},{filename:"/lib/python3.9/site-packages/cffi/verifier.py",start:468389,end:479642,audio:0},{filename:"/lib/python3.9/site-packages/cffi/_cffi_include.h",start:479642,end:494442,audio:0},{filename:"/lib/python3.9/site-packages/cffi/parse_c_type.h",start:494442,end:500418,audio:0},{filename:"/lib/python3.9/site-packages/cffi/_embedding.h",start:500418,end:517999,audio:0},{filename:"/lib/python3.9/site-packages/cffi/_cffi_errors.h",start:517999,end:521907,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/PKG-INFO",start:521907,end:523095,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/SOURCES.txt",start:523095,end:528108,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/dependency_links.txt",start:528108,end:528109,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/entry_points.txt",start:528109,end:528185,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/not-zip-safe",start:528185,end:528186,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/requires.txt",start:528186,end:528196,audio:0},{filename:"/lib/python3.9/site-packages/cffi-1.14.6-py3.9.egg-info/top_level.txt",start:528196,end:528215,audio:0}],remote_package_size:299901,package_uuid:"e3624106-eebc-4cb8-9551-88bc3f1a607f"})})();