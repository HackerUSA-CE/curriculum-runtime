var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="patsy.data";var REMOTE_PACKAGE_BASE="patsy.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","patsy",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","patsy-0.5.1-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:501734,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1541,2974,4165,5014,6310,7485,8451,9316,10341,11364,12189,13231,14097,15003,15864,16730,17665,19261,20807,22074,23281,24322,25461,26845,28015,29173,30155,31572,32532,33889,34743,35805,36745,37829,39128,40413,41638,42967,44149,44926,45870,46725,48116,49340,50469,51488,52383,53140,54110,55289,56749,58614,60464,62303,64172,66023,67860,69728,71545,73352,75224,76998,78805,80699,82526,84406,86266,88129,89990,91829,93620,95478,97283,99133,100948,102815,104648,106533,108384,110236,112091,113892,115732,117564,119352,121217,123082,124932,126816,128657,130513,132372,134214,136040,137887,139695,141500,143368,145187,147014,148842,150669,152520,154232,156086,157894,159734,161572,163383,165191,166981,168789,170578,172419,174224,176007,177324,178766,179831,181282,182847,184317,185619,187092,188268,189794,190857,192276,193434,194939,196046,197357,198614,199996,201015,202236,203946,205559,207214,209035,210864,212617,214342,216015,217579,219370,221093,222852,224484,226212,227800,229504,231331,233011,234768,236520,238067,239650,241384,243101,244745,246478,248222,250060,251879,253684,255442,257230,258891,260618,262438,264249,266067,267859,269635,271395,273063,274744,276533,278379,280201,282003,283807,285469,287177,289006,290850,292641,294469,296229,297990,299273,300666,301709,302865,304051,305401,306564,307505,308303,309751,310868,311902,312949,314099,315043,315964,316994,317935,318890,319813,320683,321438,322457,323374,324244,325268,326242,327078,328314,329580,330490,331396,332478,333462,334415,335286,336362,337388,338446,339809,341325,342757,343870,345097,346039,347402,348729,349680,350570,351529,352933,353994,355045,356400,357523,358445,359391,360484,361615,362864,364029,365383,366704,367867,369004,369847,370575,371438,372425,373832,375260,376477,377650,378760,380066,381202,382558,383645,384807,385927,387355,388738,390071,391406,392418,393632,394988,396047,397083,397942,398442,399668,400975,401918,403187,404384,405437,406813,408252,409383,410803,412304,413635,415144,416434,417839,419145,420117,421557,422873,424097,425237,426173,427314,428388,429546,430396,431135,432336,433610,434615,435460,436212,437219,438071,439019,440108,441145,442059,443165,444254,445372,446563,447967,448854,450065,451476,452877,454107,455294,456801,458236,459631,460940,461784,462786,464024,464774,465929,467430,469013,469964,470992,472254,473447,474652,475633,476689,477887,478859,479946,480989,482012,483004,484380,485643,486939,488523,489619,490723,491875,493193,494655,495733,497016,498330,499568,500543],sizes:[1541,1433,1191,849,1296,1175,966,865,1025,1023,825,1042,866,906,861,866,935,1596,1546,1267,1207,1041,1139,1384,1170,1158,982,1417,960,1357,854,1062,940,1084,1299,1285,1225,1329,1182,777,944,855,1391,1224,1129,1019,895,757,970,1179,1460,1865,1850,1839,1869,1851,1837,1868,1817,1807,1872,1774,1807,1894,1827,1880,1860,1863,1861,1839,1791,1858,1805,1850,1815,1867,1833,1885,1851,1852,1855,1801,1840,1832,1788,1865,1865,1850,1884,1841,1856,1859,1842,1826,1847,1808,1805,1868,1819,1827,1828,1827,1851,1712,1854,1808,1840,1838,1811,1808,1790,1808,1789,1841,1805,1783,1317,1442,1065,1451,1565,1470,1302,1473,1176,1526,1063,1419,1158,1505,1107,1311,1257,1382,1019,1221,1710,1613,1655,1821,1829,1753,1725,1673,1564,1791,1723,1759,1632,1728,1588,1704,1827,1680,1757,1752,1547,1583,1734,1717,1644,1733,1744,1838,1819,1805,1758,1788,1661,1727,1820,1811,1818,1792,1776,1760,1668,1681,1789,1846,1822,1802,1804,1662,1708,1829,1844,1791,1828,1760,1761,1283,1393,1043,1156,1186,1350,1163,941,798,1448,1117,1034,1047,1150,944,921,1030,941,955,923,870,755,1019,917,870,1024,974,836,1236,1266,910,906,1082,984,953,871,1076,1026,1058,1363,1516,1432,1113,1227,942,1363,1327,951,890,959,1404,1061,1051,1355,1123,922,946,1093,1131,1249,1165,1354,1321,1163,1137,843,728,863,987,1407,1428,1217,1173,1110,1306,1136,1356,1087,1162,1120,1428,1383,1333,1335,1012,1214,1356,1059,1036,859,500,1226,1307,943,1269,1197,1053,1376,1439,1131,1420,1501,1331,1509,1290,1405,1306,972,1440,1316,1224,1140,936,1141,1074,1158,850,739,1201,1274,1005,845,752,1007,852,948,1089,1037,914,1106,1089,1118,1191,1404,887,1211,1411,1401,1230,1187,1507,1435,1395,1309,844,1002,1238,750,1155,1501,1583,951,1028,1262,1193,1205,981,1056,1198,972,1087,1043,1023,992,1376,1263,1296,1584,1096,1104,1152,1318,1462,1078,1283,1314,1238,975,1191],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_patsy.data")}Module["addRunDependency"]("datafile_patsy.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/patsy/builtins.py",start:0,end:3158,audio:0},{filename:"/lib/python3.9/site-packages/patsy/test_regressions.py",start:3158,end:4013,audio:0},{filename:"/lib/python3.9/site-packages/patsy/test_build.py",start:4013,end:35105,audio:0},{filename:"/lib/python3.9/site-packages/patsy/missing.py",start:35105,end:46712,audio:0},{filename:"/lib/python3.9/site-packages/patsy/contrasts.py",start:46712,end:70942,audio:0},{filename:"/lib/python3.9/site-packages/patsy/eval.py",start:70942,end:103266,audio:0},{filename:"/lib/python3.9/site-packages/patsy/test_splines_crs_data.py",start:103266,end:236484,audio:0},{filename:"/lib/python3.9/site-packages/patsy/__init__.py",start:236484,end:239991,audio:0},{filename:"/lib/python3.9/site-packages/patsy/state.py",start:239991,end:246859,audio:0},{filename:"/lib/python3.9/site-packages/patsy/test_splines_bs_data.py",start:246859,end:390865,audio:0},{filename:"/lib/python3.9/site-packages/patsy/categorical.py",start:390865,end:409941,audio:0},{filename:"/lib/python3.9/site-packages/patsy/parse_formula.py",start:409941,end:419685,audio:0},{filename:"/lib/python3.9/site-packages/patsy/test_state.py",start:419685,end:427703,audio:0},{filename:"/lib/python3.9/site-packages/patsy/test_highlevel.py",start:427703,end:456469,audio:0},{filename:"/lib/python3.9/site-packages/patsy/util.py",start:456469,end:485015,audio:0},{filename:"/lib/python3.9/site-packages/patsy/tokens.py",start:485015,end:493225,audio:0},{filename:"/lib/python3.9/site-packages/patsy/design_info.py",start:493225,end:544047,audio:0},{filename:"/lib/python3.9/site-packages/patsy/highlevel.py",start:544047,end:558763,audio:0},{filename:"/lib/python3.9/site-packages/patsy/mgcv_cubic_splines.py",start:558763,end:603988,audio:0},{filename:"/lib/python3.9/site-packages/patsy/user_util.py",start:603988,end:613128,audio:0},{filename:"/lib/python3.9/site-packages/patsy/desc.py",start:613128,end:635603,audio:0},{filename:"/lib/python3.9/site-packages/patsy/build.py",start:635603,end:678476,audio:0},{filename:"/lib/python3.9/site-packages/patsy/splines.py",start:678476,end:696027,audio:0},{filename:"/lib/python3.9/site-packages/patsy/compat.py",start:696027,end:698016,audio:0},{filename:"/lib/python3.9/site-packages/patsy/infix_parser.py",start:698016,end:707828,audio:0},{filename:"/lib/python3.9/site-packages/patsy/constraint.py",start:707828,end:728131,audio:0},{filename:"/lib/python3.9/site-packages/patsy/origin.py",start:728131,end:732721,audio:0},{filename:"/lib/python3.9/site-packages/patsy/version.py",start:732721,end:733544,audio:0},{filename:"/lib/python3.9/site-packages/patsy/compat_ordereddict.py",start:733544,end:742714,audio:0},{filename:"/lib/python3.9/site-packages/patsy/redundancy.py",start:742714,end:753372,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.1-py3.9.egg-info/requires.txt",start:753372,end:753387,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.1-py3.9.egg-info/top_level.txt",start:753387,end:753393,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.1-py3.9.egg-info/dependency_links.txt",start:753393,end:753394,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.1-py3.9.egg-info/SOURCES.txt",start:753394,end:755648,audio:0},{filename:"/lib/python3.9/site-packages/patsy-0.5.1-py3.9.egg-info/PKG-INFO",start:755648,end:757606,audio:0}],remote_package_size:505830,package_uuid:"a1ba2e00-5b81-4858-9244-5257ece90fd4"})})();