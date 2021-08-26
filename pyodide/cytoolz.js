var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="cytoolz.data";var REMOTE_PACKAGE_BASE="cytoolz.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cytoolz",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/cytoolz","curried",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/cytoolz","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cytoolz-0.11.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:525723,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,881,1659,2912,4184,5575,6799,7895,8684,9849,11101,12377,13569,14568,15957,16999,18001,19038,20366,21450,22408,23393,24642,25930,26901,28263,29524,30454,31435,32751,33747,34768,36004,37166,38366,39612,40784,41855,42954,44200,45351,46527,47007,47946,48769,49526,50334,51618,52727,53943,55287,56602,57363,58119,58821,59991,61240,62077,63078,64218,65266,66529,67511,68164,69136,70305,70928,71479,72097,73052,74174,75334,76426,77570,78783,79936,81098,82292,83433,84516,85645,86946,88177,89529,90687,90997,91863,92882,94082,95021,96324,97408,98435,99633,100623,101364,102327,103772,105019,106149,107371,108572,109706,110483,111630,112712,113817,114904,116131,116990,118282,119438,120087,120722,121346,122663,123860,124887,125905,126927,128076,129205,130491,131108,131852,132516,133369,134506,135243,135820,136597,137514,138082,138768,139323,140081,141098,142322,143487,144513,145629,146846,148011,149433,150120,150652,151291,152517,153798,154912,156105,157050,158165,159325,160581,160975,162163,163267,163894,165147,166360,167665,168644,169693,170881,172092,173180,174353,175438,176417,177620,178490,179349,180350,181368,182366,183538,184545,185596,186537,187782,188702,189824,190931,191979,193083,194403,195432,196463,197641,198567,199511,200648,201946,202931,203981,205036,206102,207133,208035,208789,209980,210972,212126,213540,214800,216121,217353,218187,219535,220843,222021,223120,224589,225801,226764,227780,228945,230073,231147,232138,232657,233792,234936,236111,237289,237674,238910,240019,240666,241314,241933,242548,243167,243778,245011,246221,247375,248542,249591,250615,251638,252659,253686,254868,255990,257119,258221,259303,260639,261139,261841,262507,263230,263885,264538,265614,266245,267023,267713,268292,268884,269425,269954,270498,271032,271589,272090,272583,273121,273857,274371,274883,275430,275930,276419,277100,277799,278427,279223,280109,280754,281454,282125,282896,283532,284240,284860,285494,286548,287786,288999,290100,291128,292338,293432,294373,295398,296491,297633,298682,299819,301097,302280,303403,304429,305300,306360,307256,308166,308998,309798,310653,311717,312942,314269,315442,316504,317738,318947,320099,321119,321909,323337,324465,324752,325737,326750,327794,329042,330102,331386,332546,333520,334702,335660,337031,337728,338776,340001,341031,341992,343049,343508,344589,345679,346889,348002,349039,349963,351040,352158,353348,354416,355457,356724,357869,358927,360069,361137,362283,363594,364629,365889,366932,367997,369146,370231,370599,371559,372650,373701,374808,375929,376967,378021,379242,379675,380110,380545,381019,381947,383031,384033,385209,386179,387144,388305,389572,390841,391635,392892,394115,395398,396733,398145,399446,400349,401011,402304,403748,405008,406371,407620,408678,409695,410525,411641,412422,413554,414414,415483,416078,416517,417136,418285,419492,420668,421746,422828,423450,424018,424337,424856,425589,426289,426943,428230,429269,430640,431894,433228,434637,435058,435083,436303,437305,438421,439756,440879,441865,442289,443316,444258,445730,446850,447146,447950,449032,450251,451575,452879,454256,455396,456310,457581,458468,459688,461026,462267,463247,464793,465959,466243,467140,468495,469551,470458,471478,472883,474013,475116,476050,477286,478384,479389,480458,481123,482105,483120,484401,485549,486708,487836,488959,489950,491038,491856,492974,493864,494979,496046,497144,498122,498958,499466,500098,500835,501582,502215,503404,504411,505414,506355,507273,508239,509261,510261,511073,511960,513198,514196,514937,515722,516369,516953,517919,518920,519750,520617,521182,522090,523242,524809],sizes:[881,778,1253,1272,1391,1224,1096,789,1165,1252,1276,1192,999,1389,1042,1002,1037,1328,1084,958,985,1249,1288,971,1362,1261,930,981,1316,996,1021,1236,1162,1200,1246,1172,1071,1099,1246,1151,1176,480,939,823,757,808,1284,1109,1216,1344,1315,761,756,702,1170,1249,837,1001,1140,1048,1263,982,653,972,1169,623,551,618,955,1122,1160,1092,1144,1213,1153,1162,1194,1141,1083,1129,1301,1231,1352,1158,310,866,1019,1200,939,1303,1084,1027,1198,990,741,963,1445,1247,1130,1222,1201,1134,777,1147,1082,1105,1087,1227,859,1292,1156,649,635,624,1317,1197,1027,1018,1022,1149,1129,1286,617,744,664,853,1137,737,577,777,917,568,686,555,758,1017,1224,1165,1026,1116,1217,1165,1422,687,532,639,1226,1281,1114,1193,945,1115,1160,1256,394,1188,1104,627,1253,1213,1305,979,1049,1188,1211,1088,1173,1085,979,1203,870,859,1001,1018,998,1172,1007,1051,941,1245,920,1122,1107,1048,1104,1320,1029,1031,1178,926,944,1137,1298,985,1050,1055,1066,1031,902,754,1191,992,1154,1414,1260,1321,1232,834,1348,1308,1178,1099,1469,1212,963,1016,1165,1128,1074,991,519,1135,1144,1175,1178,385,1236,1109,647,648,619,615,619,611,1233,1210,1154,1167,1049,1024,1023,1021,1027,1182,1122,1129,1102,1082,1336,500,702,666,723,655,653,1076,631,778,690,579,592,541,529,544,534,557,501,493,538,736,514,512,547,500,489,681,699,628,796,886,645,700,671,771,636,708,620,634,1054,1238,1213,1101,1028,1210,1094,941,1025,1093,1142,1049,1137,1278,1183,1123,1026,871,1060,896,910,832,800,855,1064,1225,1327,1173,1062,1234,1209,1152,1020,790,1428,1128,287,985,1013,1044,1248,1060,1284,1160,974,1182,958,1371,697,1048,1225,1030,961,1057,459,1081,1090,1210,1113,1037,924,1077,1118,1190,1068,1041,1267,1145,1058,1142,1068,1146,1311,1035,1260,1043,1065,1149,1085,368,960,1091,1051,1107,1121,1038,1054,1221,433,435,435,474,928,1084,1002,1176,970,965,1161,1267,1269,794,1257,1223,1283,1335,1412,1301,903,662,1293,1444,1260,1363,1249,1058,1017,830,1116,781,1132,860,1069,595,439,619,1149,1207,1176,1078,1082,622,568,319,519,733,700,654,1287,1039,1371,1254,1334,1409,421,25,1220,1002,1116,1335,1123,986,424,1027,942,1472,1120,296,804,1082,1219,1324,1304,1377,1140,914,1271,887,1220,1338,1241,980,1546,1166,284,897,1355,1056,907,1020,1405,1130,1103,934,1236,1098,1005,1069,665,982,1015,1281,1148,1159,1128,1123,991,1088,818,1118,890,1115,1067,1098,978,836,508,632,737,747,633,1189,1007,1003,941,918,966,1022,1e3,812,887,1238,998,741,785,647,584,966,1001,830,867,565,908,1152,1567,914],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cytoolz.data")}Module["addRunDependency"]("datafile_cytoolz.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/cytoolz/__init__.py",start:0,end:471,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/_signatures.py",start:471,end:4827,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/_version.py",start:4827,end:4879,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/compatibility.py",start:4879,end:5862,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/utils_test.py",start:5862,end:7937,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/dicttoolz.pyx",start:7937,end:23481,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/functoolz.pyx",start:23481,end:48516,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/itertoolz.pyx",start:48516,end:99685,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/recipes.pyx",start:99685,end:101285,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/utils.pyx",start:101285,end:102638,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/__init__.pxd",start:102638,end:103388,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/cpython.pxd",start:103388,end:103885,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/dicttoolz.pxd",start:103885,end:105253,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/functoolz.pxd",start:105253,end:106505,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/itertoolz.pxd",start:106505,end:111200,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/recipes.pxd",start:111200,end:111300,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/utils.pxd",start:111300,end:111333,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/dicttoolz.so",start:111333,end:222328,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/functoolz.so",start:222328,end:462326,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/itertoolz.so",start:462326,end:888838,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/recipes.so",start:888838,end:929758,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/utils.so",start:929758,end:963008,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/curried/__init__.py",start:963008,end:965892,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/curried/exceptions.py",start:965892,end:966242,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/curried/operator.py",start:966242,end:966744,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/dev_skip_test.py",start:966744,end:967756,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_compatibility.py",start:967756,end:967785,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_curried.py",start:967785,end:971488,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_curried_toolzlike.py",start:971488,end:972887,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_dev_skip_test.py",start:972887,end:973267,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_dicttoolz.py",start:973267,end:982365,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_docstrings.py",start:982365,end:985399,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_doctests.py",start:985399,end:985834,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_embedded_sigs.py",start:985834,end:989329,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_functoolz.py",start:989329,end:1009546,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_inspect_args.py",start:1009546,end:1025548,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_itertoolz.py",start:1025548,end:1043713,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_none_safe.py",start:1043713,end:1055935,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_recipes.py",start:1055935,end:1056757,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_serialization.py",start:1056757,end:1062582,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_signatures.py",start:1062582,end:1065459,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_tlz.py",start:1065459,end:1066945,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_utils.py",start:1066945,end:1067330,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/PKG-INFO",start:1067330,end:1071542,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/SOURCES.txt",start:1071542,end:1072907,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/dependency_links.txt",start:1072907,end:1072908,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/not-zip-safe",start:1072908,end:1072909,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/requires.txt",start:1072909,end:1072939,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/top_level.txt",start:1072939,end:1072947,audio:0}],remote_package_size:529819,package_uuid:"a9f8c7a9-fb8d-49fb-a85c-dd2ed3e857cb"})})();