var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="nlopt.data";var REMOTE_PACKAGE_BASE="nlopt.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","nlopt",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","nlopt-2.7.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:366745,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1284,2286,2920,3474,4423,5134,5757,6304,7153,8194,9553,10734,11803,12994,14226,15465,16868,18106,19325,20425,21647,22882,23738,24566,25303,25960,26608,27226,27839,28745,29763,30719,31712,32662,33698,34895,36130,37369,38664,39941,41176,42319,43466,44717,45807,47230,48324,49332,50597,51816,52931,54184,55050,56079,56976,58263,59660,60355,60987,61285,62133,63189,63934,64975,66147,67316,68467,69648,70537,71040,72397,73748,75381,76927,78288,79734,81222,82649,84121,85646,86921,88368,89663,91115,92529,94085,95336,96487,97942,99375,100697,102216,103626,104966,106334,107552,109014,110395,111845,113331,114960,116493,117853,119257,120649,122215,123270,124708,126212,127397,128471,129985,131494,132874,134406,135696,137146,138782,140295,141831,143203,144566,145719,147029,148564,149756,151235,152694,153877,154950,156261,157622,159128,160668,162159,163546,164995,166383,167833,169251,170729,172175,173505,174873,176278,177684,179256,180728,182128,183475,184651,185972,187424,188522,190029,191423,192915,194410,195720,197219,198623,200203,201494,202535,203285,204467,205510,206690,207782,209097,210422,211991,213194,214598,215821,216676,217828,219053,220418,221493,222466,223430,224317,225287,226302,227429,228410,228969,230125,231550,232100,233035,234283,235032,235549,236168,236897,237955,239420,240905,242482,243803,245007,245971,247092,248477,249849,251105,252528,253492,254886,256152,257183,258323,259478,260717,261894,262988,264084,265203,266289,267505,268529,269765,271103,272406,273567,274728,275764,277066,278274,279536,280388,281373,282619,283902,285207,286760,288384,289682,289983,290547,291800,292645,293916,295030,296364,297519,298814,299706,300427,301381,302227,303014,303872,305280,306518,307700,307863,308153,308465,308793,309150,310161,311471,312301,313258,313695,314470,315084,315661,316274,316774,317424,318102,318688,319182,319742,320284,320895,321540,322329,323682,325730,327624,327652,327680,328401,329218,330307,331403,332669,334027,335413,336852,338276,339759,341204,342720,344234,345640,347153,348522,350070,351415,353093,354303,356100,357534,358696,360493,360787,362779,364083,365143,365831,365877,366354],sizes:[1284,1002,634,554,949,711,623,547,849,1041,1359,1181,1069,1191,1232,1239,1403,1238,1219,1100,1222,1235,856,828,737,657,648,618,613,906,1018,956,993,950,1036,1197,1235,1239,1295,1277,1235,1143,1147,1251,1090,1423,1094,1008,1265,1219,1115,1253,866,1029,897,1287,1397,695,632,298,848,1056,745,1041,1172,1169,1151,1181,889,503,1357,1351,1633,1546,1361,1446,1488,1427,1472,1525,1275,1447,1295,1452,1414,1556,1251,1151,1455,1433,1322,1519,1410,1340,1368,1218,1462,1381,1450,1486,1629,1533,1360,1404,1392,1566,1055,1438,1504,1185,1074,1514,1509,1380,1532,1290,1450,1636,1513,1536,1372,1363,1153,1310,1535,1192,1479,1459,1183,1073,1311,1361,1506,1540,1491,1387,1449,1388,1450,1418,1478,1446,1330,1368,1405,1406,1572,1472,1400,1347,1176,1321,1452,1098,1507,1394,1492,1495,1310,1499,1404,1580,1291,1041,750,1182,1043,1180,1092,1315,1325,1569,1203,1404,1223,855,1152,1225,1365,1075,973,964,887,970,1015,1127,981,559,1156,1425,550,935,1248,749,517,619,729,1058,1465,1485,1577,1321,1204,964,1121,1385,1372,1256,1423,964,1394,1266,1031,1140,1155,1239,1177,1094,1096,1119,1086,1216,1024,1236,1338,1303,1161,1161,1036,1302,1208,1262,852,985,1246,1283,1305,1553,1624,1298,301,564,1253,845,1271,1114,1334,1155,1295,892,721,954,846,787,858,1408,1238,1182,163,290,312,328,357,1011,1310,830,957,437,775,614,577,613,500,650,678,586,494,560,542,611,645,789,1353,2048,1894,28,28,721,817,1089,1096,1266,1358,1386,1439,1424,1483,1445,1516,1514,1406,1513,1369,1548,1345,1678,1210,1797,1434,1162,1797,294,1992,1304,1060,688,46,477,391],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_nlopt.data")}Module["addRunDependency"]("datafile_nlopt.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/nlopt/__init__.py",start:0,end:44,audio:0},{filename:"/lib/python3.9/site-packages/nlopt/nlopt.py",start:44,end:17987,audio:0},{filename:"/lib/python3.9/site-packages/nlopt/_nlopt.so",start:17987,end:650466,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/PKG-INFO",start:650466,end:650640,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/not-zip-safe",start:650640,end:650641,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/dependency_links.txt",start:650641,end:650642,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/requires.txt",start:650642,end:650654,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/top_level.txt",start:650654,end:650660,audio:0},{filename:"/lib/python3.9/site-packages/nlopt-2.7.0-py3.9.egg-info/SOURCES.txt",start:650660,end:651985,audio:0}],remote_package_size:370841,package_uuid:"d2f61854-77ab-4739-bba4-9b450b5b1cf3"})})();