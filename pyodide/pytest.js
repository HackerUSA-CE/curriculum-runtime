var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="pytest.data";var REMOTE_PACKAGE_BASE="pytest.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","_pytest",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/_pytest","_code",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/_pytest","_io",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/_pytest","assertion",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/_pytest","config",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/_pytest","mark",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pytest",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pytest-6.2.4-py3.9.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:563083,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1463,2798,4092,5175,6292,7483,8664,9834,10834,12023,13234,14585,15821,17176,18539,19880,20787,22059,23126,24319,25348,26262,27464,28380,29314,30363,31381,32172,33538,34916,36259,37690,38999,40249,41423,42627,43669,44860,45994,47373,48706,49934,51013,52215,53233,54407,55574,56641,57866,59267,60339,61495,62442,63579,64831,66122,67058,68215,69477,70650,71966,72974,74153,75407,76722,77737,79006,80160,81291,82431,83633,84902,86094,87305,88595,89789,91027,92191,93567,94684,95994,97332,98661,99948,101179,102279,103428,104568,105878,107082,108238,109504,110761,111687,112933,113988,115293,116411,117489,118587,119661,120848,121890,123277,124429,125817,126965,128174,129610,130863,132072,132977,134161,135301,136769,137933,139128,140173,140981,142087,143208,144502,145802,146893,148012,148995,150270,151526,152653,153941,154890,156040,156887,157785,158950,160022,161033,161953,163217,164126,165347,166539,167722,168906,170081,171220,172434,173292,174347,175603,176837,178088,179586,180690,181796,183115,184403,185547,186772,188050,189363,190474,191682,193032,194371,195454,196796,198208,199465,200726,202134,203378,204674,206047,207433,208735,210054,211314,212444,213881,215245,216566,217960,219151,220369,221438,222750,223817,224739,225797,227243,228373,229530,230893,232236,233480,234467,235574,236638,237897,239263,240509,241736,242969,244149,245431,246549,247776,249115,249790,250477,251235,252328,253475,254626,255455,256548,257545,258620,259869,261185,262529,263623,264982,266233,267319,268493,269594,270741,271905,273058,274204,275057,276292,277528,278748,280065,281178,282341,283536,284576,285911,287093,288379,289548,290845,292164,293423,294629,296001,297084,298165,299441,300624,301981,303230,304513,305764,307148,308362,309597,310830,312088,313228,314318,315542,316717,317788,318598,319884,320918,322197,323491,324672,325954,327116,328178,329093,330189,331346,332617,333869,335006,336282,337252,338442,339541,340564,341821,343021,344114,345264,346446,347611,348785,350073,351160,352330,353350,354413,355654,356859,357925,358985,360221,361259,362253,363321,364421,365618,366766,367940,368992,370057,370942,371966,372863,374004,375163,376308,377686,379049,380238,381377,382624,383910,385155,386120,387323,388461,389596,390693,391638,392910,394117,395193,396062,397325,398592,399382,400383,401718,402958,404110,405443,406649,407923,409103,410013,411216,412401,413589,414733,415861,417078,418244,419335,420356,421573,422642,423994,425264,426383,427707,429096,430187,431432,432633,433868,435205,436353,437651,438905,440200,441424,442739,444086,445410,446582,448031,449303,450435,451760,453039,454239,455596,456805,457943,459109,460417,461431,462525,463685,464790,465935,467310,468484,469776,470969,472202,473285,474497,475694,476660,477787,478838,480324,481622,482919,484294,485676,486792,488056,489228,490485,491632,492845,494152,495524,496716,497714,498933,500251,501515,502616,503832,505022,506220,507455,508619,509802,511045,512299,513529,514792,515888,517297,518346,519371,520533,521846,522963,524079,525272,526697,527905,529001,530319,531725,532995,534154,535562,536593,537750,538956,540178,541209,542336,543588,544786,545936,546985,548262,549283,550088,551427,552386,553703,555221,556362,556745,557138,557752,558711,559605,560279,560673,561452,562588],sizes:[1463,1335,1294,1083,1117,1191,1181,1170,1e3,1189,1211,1351,1236,1355,1363,1341,907,1272,1067,1193,1029,914,1202,916,934,1049,1018,791,1366,1378,1343,1431,1309,1250,1174,1204,1042,1191,1134,1379,1333,1228,1079,1202,1018,1174,1167,1067,1225,1401,1072,1156,947,1137,1252,1291,936,1157,1262,1173,1316,1008,1179,1254,1315,1015,1269,1154,1131,1140,1202,1269,1192,1211,1290,1194,1238,1164,1376,1117,1310,1338,1329,1287,1231,1100,1149,1140,1310,1204,1156,1266,1257,926,1246,1055,1305,1118,1078,1098,1074,1187,1042,1387,1152,1388,1148,1209,1436,1253,1209,905,1184,1140,1468,1164,1195,1045,808,1106,1121,1294,1300,1091,1119,983,1275,1256,1127,1288,949,1150,847,898,1165,1072,1011,920,1264,909,1221,1192,1183,1184,1175,1139,1214,858,1055,1256,1234,1251,1498,1104,1106,1319,1288,1144,1225,1278,1313,1111,1208,1350,1339,1083,1342,1412,1257,1261,1408,1244,1296,1373,1386,1302,1319,1260,1130,1437,1364,1321,1394,1191,1218,1069,1312,1067,922,1058,1446,1130,1157,1363,1343,1244,987,1107,1064,1259,1366,1246,1227,1233,1180,1282,1118,1227,1339,675,687,758,1093,1147,1151,829,1093,997,1075,1249,1316,1344,1094,1359,1251,1086,1174,1101,1147,1164,1153,1146,853,1235,1236,1220,1317,1113,1163,1195,1040,1335,1182,1286,1169,1297,1319,1259,1206,1372,1083,1081,1276,1183,1357,1249,1283,1251,1384,1214,1235,1233,1258,1140,1090,1224,1175,1071,810,1286,1034,1279,1294,1181,1282,1162,1062,915,1096,1157,1271,1252,1137,1276,970,1190,1099,1023,1257,1200,1093,1150,1182,1165,1174,1288,1087,1170,1020,1063,1241,1205,1066,1060,1236,1038,994,1068,1100,1197,1148,1174,1052,1065,885,1024,897,1141,1159,1145,1378,1363,1189,1139,1247,1286,1245,965,1203,1138,1135,1097,945,1272,1207,1076,869,1263,1267,790,1001,1335,1240,1152,1333,1206,1274,1180,910,1203,1185,1188,1144,1128,1217,1166,1091,1021,1217,1069,1352,1270,1119,1324,1389,1091,1245,1201,1235,1337,1148,1298,1254,1295,1224,1315,1347,1324,1172,1449,1272,1132,1325,1279,1200,1357,1209,1138,1166,1308,1014,1094,1160,1105,1145,1375,1174,1292,1193,1233,1083,1212,1197,966,1127,1051,1486,1298,1297,1375,1382,1116,1264,1172,1257,1147,1213,1307,1372,1192,998,1219,1318,1264,1101,1216,1190,1198,1235,1164,1183,1243,1254,1230,1263,1096,1409,1049,1025,1162,1313,1117,1116,1193,1425,1208,1096,1318,1406,1270,1159,1408,1031,1157,1206,1222,1031,1127,1252,1198,1150,1049,1277,1021,805,1339,959,1317,1518,1141,383,393,614,959,894,674,394,779,1136,495],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_pytest.data")}Module["addRunDependency"]("datafile_pytest.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/_pytest/__init__.py",start:0,end:239,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_argcomplete.py",start:239,end:4049,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_version.py",start:4049,end:4191,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/cacheprovider.py",start:4191,end:24900,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/capture.py",start:24900,end:57073,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/compat.py",start:57073,end:69187,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/debugging.py",start:69187,end:82594,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/deprecated.py",start:82594,end:85399,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/doctest.py",start:85399,end:110670,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/faulthandler.py",start:110670,end:115034,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/fixtures.py",start:115034,end:180273,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/freeze_support.py",start:180273,end:181664,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/helpconfig.py",start:181664,end:190007,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/hookspec.py",start:190007,end:221478,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/junitxml.py",start:221478,end:247106,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/logging.py",start:247106,end:276887,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/main.py",start:276887,end:308675,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/monkeypatch.py",start:308675,end:321654,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/nodes.py",start:321654,end:341534,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/nose.py",start:341534,end:342893,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/outcomes.py",start:342893,end:350313,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/pastebin.py",start:350313,end:354282,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/pathlib.py",start:354282,end:375693,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/pytester.py",start:375693,end:443165,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/pytester_assertions.py",start:443165,end:445124,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/python.py",start:445124,end:509249,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/python_api.py",start:509249,end:539691,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/recwarn.py",start:539691,end:549979,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/reports.py",start:549979,end:568983,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/runner.py",start:568983,end:584820,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/setuponly.py",start:584820,end:587917,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/setupplan.py",start:587917,end:589132,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/skipping.py",start:589132,end:600364,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/stepwise.py",start:600364,end:604606,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/store.py",start:604606,end:608239,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/terminal.py",start:608239,end:659049,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/threadexception.py",start:659049,end:662078,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/timing.py",start:662078,end:662453,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/tmpdir.py",start:662453,end:671881,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/unittest.py",start:671881,end:685816,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/unraisableexception.py",start:685816,end:689007,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/warning_types.py",start:689007,end:692155,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/warnings.py",start:692155,end:696643,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/py.typed",start:696643,end:696643,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_code/__init__.py",start:696643,end:697126,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_code/code.py",start:697126,end:740586,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_code/source.py",start:740586,end:747640,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_io/__init__.py",start:747640,end:747794,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_io/saferepr.py",start:747794,end:751561,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_io/terminalwriter.py",start:751561,end:758743,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/_io/wcwidth.py",start:758743,end:759996,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/assertion/__init__.py",start:759996,end:766420,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/assertion/rewrite.py",start:766420,end:810040,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/assertion/truncate.py",start:810040,end:813480,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/assertion/util.py",start:813480,end:829729,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/config/__init__.py",start:829729,end:886669,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/config/argparsing.py",start:886669,end:907246,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/config/exceptions.py",start:907246,end:907506,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/config/findpaths.py",start:907506,end:914929,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/mark/__init__.py",start:914929,end:923884,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/mark/expression.py",start:923884,end:930256,audio:0},{filename:"/lib/python3.9/site-packages/_pytest/mark/structures.py",start:930256,end:949019,audio:0},{filename:"/lib/python3.9/site-packages/pytest/__init__.py",start:949019,end:952732,audio:0},{filename:"/lib/python3.9/site-packages/pytest/__main__.py",start:952732,end:952848,audio:0},{filename:"/lib/python3.9/site-packages/pytest/collect.py",start:952848,end:953766,audio:0},{filename:"/lib/python3.9/site-packages/pytest/py.typed",start:953766,end:953766,audio:0},{filename:"/lib/python3.9/site-packages/pytest-6.2.4-py3.9.egg-info/PKG-INFO",start:953766,end:960415,audio:0},{filename:"/lib/python3.9/site-packages/pytest-6.2.4-py3.9.egg-info/SOURCES.txt",start:960415,end:979461,audio:0},{filename:"/lib/python3.9/site-packages/pytest-6.2.4-py3.9.egg-info/dependency_links.txt",start:979461,end:979462,audio:0},{filename:"/lib/python3.9/site-packages/pytest-6.2.4-py3.9.egg-info/entry_points.txt",start:979462,end:979540,audio:0},{filename:"/lib/python3.9/site-packages/pytest-6.2.4-py3.9.egg-info/not-zip-safe",start:979540,end:979541,audio:0},{filename:"/lib/python3.9/site-packages/pytest-6.2.4-py3.9.egg-info/requires.txt",start:979541,end:979788,audio:0},{filename:"/lib/python3.9/site-packages/pytest-6.2.4-py3.9.egg-info/top_level.txt",start:979788,end:979803,audio:0},{filename:"/bin/py.test",start:979803,end:980764,audio:0},{filename:"/bin/pytest",start:980764,end:981723,audio:0}],remote_package_size:567179,package_uuid:"ad23907f-be43-45cd-827d-7233b6c21ff0"})})();