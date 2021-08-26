var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="cffi_example.data";var REMOTE_PACKAGE_BASE="cffi_example.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cffi_example",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cffi_example-0.1-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:387477,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1285,2586,3875,5304,5962,6957,8306,9510,10857,11830,13063,14429,16130,17768,19431,21103,22615,24041,25100,26151,27442,28118,29102,30100,31152,32171,33231,34307,35380,36439,37450,38518,39561,40590,41565,42517,43512,44528,45470,46473,47487,48397,49319,50413,51436,52911,54544,56106,57417,58797,60360,61911,63545,65135,66504,67932,69512,70979,72614,74327,75860,77329,78954,80542,82190,83843,85494,87032,88750,90505,92206,93941,95680,97341,99003,100592,102288,103881,105632,107276,108841,110518,112045,113537,115130,116764,118265,119837,121460,123053,124560,126259,127722,129307,130739,132322,133705,135193,136753,138388,139999,141457,143039,144369,146012,147604,149200,150804,152324,153833,155502,157060,158597,160198,161938,163504,165122,166720,168320,169739,171229,172786,174226,175804,177409,179037,180550,182060,183650,184917,186473,188005,189534,191188,192414,193818,195076,196649,198283,199917,201429,203030,204743,206402,207956,209677,211236,212273,213875,215581,217280,218946,220512,221872,222672,223258,224016,224800,225542,226242,227157,228105,228926,229785,230827,232109,233103,234117,234896,235812,236600,237242,238450,240296,242344,244328,245536,246493,247839,249542,251023,253002,255054,256913,258936,260531,262034,263464,264969,267017,269065,271113,273161,275209,277257,279305,281353,283401,285449,287497,289545,291593,293641,295689,297737,299785,301833,303881,305929,307977,310025,312073,313913,315969,318017,320065,322121,324154,325093,326589,328637,330685,332666,334714,336762,338656,340662,342710,344758,346806,348854,350848,352896,354944,356992,359040,361088,363136,365184,367103,368530,370578,372520,374536,376584,378632,380680,382655,383009,383034,383724,385121,386559],sizes:[1285,1301,1289,1429,658,995,1349,1204,1347,973,1233,1366,1701,1638,1663,1672,1512,1426,1059,1051,1291,676,984,998,1052,1019,1060,1076,1073,1059,1011,1068,1043,1029,975,952,995,1016,942,1003,1014,910,922,1094,1023,1475,1633,1562,1311,1380,1563,1551,1634,1590,1369,1428,1580,1467,1635,1713,1533,1469,1625,1588,1648,1653,1651,1538,1718,1755,1701,1735,1739,1661,1662,1589,1696,1593,1751,1644,1565,1677,1527,1492,1593,1634,1501,1572,1623,1593,1507,1699,1463,1585,1432,1583,1383,1488,1560,1635,1611,1458,1582,1330,1643,1592,1596,1604,1520,1509,1669,1558,1537,1601,1740,1566,1618,1598,1600,1419,1490,1557,1440,1578,1605,1628,1513,1510,1590,1267,1556,1532,1529,1654,1226,1404,1258,1573,1634,1634,1512,1601,1713,1659,1554,1721,1559,1037,1602,1706,1699,1666,1566,1360,800,586,758,784,742,700,915,948,821,859,1042,1282,994,1014,779,916,788,642,1208,1846,2048,1984,1208,957,1346,1703,1481,1979,2052,1859,2023,1595,1503,1430,1505,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,1840,2056,2048,2048,2056,2033,939,1496,2048,2048,1981,2048,2048,1894,2006,2048,2048,2048,2048,1994,2048,2048,2048,2048,2048,2048,2048,1919,1427,2048,1942,2016,2048,2048,2048,1975,354,25,690,1397,1438,918],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cffi_example.data")}Module["addRunDependency"]("datafile_cffi_example.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/cffi_example/__init__.py",start:0,end:0,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example/build_fnmatch.py",start:0,end:825,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example/build_person.py",start:825,end:2333,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example/fnmatch.py",start:2333,end:3229,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example/person.py",start:3229,end:5882,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example/utils.py",start:5882,end:6285,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example/_person.so",start:6285,end:12462,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example/_fnmatch.so",start:12462,end:513054,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example-0.1-py3.9.egg-info/PKG-INFO",start:513054,end:518882,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example-0.1-py3.9.egg-info/dependency_links.txt",start:518882,end:518883,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example-0.1-py3.9.egg-info/requires.txt",start:518883,end:518895,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example-0.1-py3.9.egg-info/top_level.txt",start:518895,end:518908,audio:0},{filename:"/lib/python3.9/site-packages/cffi_example-0.1-py3.9.egg-info/SOURCES.txt",start:518908,end:519347,audio:0}],remote_package_size:391573,package_uuid:"8db31906-986e-4f41-be0c-e0aee241f7fc"})})();