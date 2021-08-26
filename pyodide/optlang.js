var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="optlang.data";var REMOTE_PACKAGE_BASE="optlang.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","optlang",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/optlang","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/optlang/tests","data",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","optlang-1.5.2-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:299267,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1125,2498,3795,4788,5800,6804,7927,8874,10232,11321,11992,13067,14100,15005,16001,17153,18613,19774,20686,21749,22946,23551,24751,25744,26779,27669,28762,29801,30876,31563,32585,33436,34412,35328,36436,37490,38362,39435,40398,41578,43068,44256,45147,46429,47775,48796,49922,51346,52449,53765,55238,56434,57545,58478,59507,60606,61562,62675,63449,64556,65534,66761,67716,68641,69645,70464,71344,72817,73900,74765,75771,76781,77674,78709,79659,80647,81460,82338,83207,84163,85141,86167,87575,88546,89249,90042,91145,92192,93599,95037,96133,97304,98140,99148,100298,101470,102543,103428,104482,105647,106758,107677,108749,109948,111130,112378,113581,114797,115886,116866,117935,118544,119630,120542,121518,122544,123482,124536,126052,127171,128120,129212,129976,130998,131893,132858,133749,134846,135758,136746,137637,138460,139428,140447,141737,143026,144002,144794,145851,146988,147930,148759,149684,150694,151682,152577,153822,155218,156290,157719,158737,159825,160892,162031,163578,164819,165765,166552,167474,168384,169158,169848,170660,171324,172053,172674,173566,174403,175279,175886,176650,177417,178109,178963,180191,180927,182074,182936,183862,184834,185745,186700,187534,188350,188975,189864,190763,191592,192787,193947,195094,195874,196425,197164,198309,199414,200412,201282,202200,203135,203988,204755,205545,206138,206929,207687,208362,209175,209839,210471,211651,212504,213127,213661,214613,215461,216181,217287,218337,219523,220688,221584,222476,223259,223924,224367,225313,226033,227159,228358,229221,230089,230985,231749,232259,232977,233766,234557,235203,235970,237170,238318,239061,239843,240671,241364,242232,242937,243799,244617,245341,246299,247123,248246,249298,250013,250756,251647,252455,253415,254298,255663,256804,257698,258996,260264,261339,262585,263695,264783,265931,267171,268364,269182,270398,271455,272229,273184,274086,274994,275849,276751,277438,278232,279044,279809,280799,281775,282765,283681,284537,285406,286242,287336,288352,289411,290414,291514,293e3,294347,295829,297259,298426,299202],sizes:[1125,1373,1297,993,1012,1004,1123,947,1358,1089,671,1075,1033,905,996,1152,1460,1161,912,1063,1197,605,1200,993,1035,890,1093,1039,1075,687,1022,851,976,916,1108,1054,872,1073,963,1180,1490,1188,891,1282,1346,1021,1126,1424,1103,1316,1473,1196,1111,933,1029,1099,956,1113,774,1107,978,1227,955,925,1004,819,880,1473,1083,865,1006,1010,893,1035,950,988,813,878,869,956,978,1026,1408,971,703,793,1103,1047,1407,1438,1096,1171,836,1008,1150,1172,1073,885,1054,1165,1111,919,1072,1199,1182,1248,1203,1216,1089,980,1069,609,1086,912,976,1026,938,1054,1516,1119,949,1092,764,1022,895,965,891,1097,912,988,891,823,968,1019,1290,1289,976,792,1057,1137,942,829,925,1010,988,895,1245,1396,1072,1429,1018,1088,1067,1139,1547,1241,946,787,922,910,774,690,812,664,729,621,892,837,876,607,764,767,692,854,1228,736,1147,862,926,972,911,955,834,816,625,889,899,829,1195,1160,1147,780,551,739,1145,1105,998,870,918,935,853,767,790,593,791,758,675,813,664,632,1180,853,623,534,952,848,720,1106,1050,1186,1165,896,892,783,665,443,946,720,1126,1199,863,868,896,764,510,718,789,791,646,767,1200,1148,743,782,828,693,868,705,862,818,724,958,824,1123,1052,715,743,891,808,960,883,1365,1141,894,1298,1268,1075,1246,1110,1088,1148,1240,1193,818,1216,1057,774,955,902,908,855,902,687,794,812,765,990,976,990,916,856,869,836,1094,1016,1059,1003,1100,1486,1347,1482,1430,1167,776,65],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_optlang.data")}Module["addRunDependency"]("datafile_optlang.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/optlang/__init__.py",start:0,end:3226,audio:0},{filename:"/lib/python3.9/site-packages/optlang/coinor_cbc_interface.py",start:3226,end:33810,audio:0},{filename:"/lib/python3.9/site-packages/optlang/container.py",start:33810,end:40766,audio:0},{filename:"/lib/python3.9/site-packages/optlang/cplex_interface.py",start:40766,end:81714,audio:0},{filename:"/lib/python3.9/site-packages/optlang/duality.py",start:81714,end:89381,audio:0},{filename:"/lib/python3.9/site-packages/optlang/exceptions.py",start:89381,end:90849,audio:0},{filename:"/lib/python3.9/site-packages/optlang/expression_parsing.py",start:90849,end:97021,audio:0},{filename:"/lib/python3.9/site-packages/optlang/glpk_exact_interface.py",start:97021,end:102228,audio:0},{filename:"/lib/python3.9/site-packages/optlang/glpk_interface.py",start:102228,end:138045,audio:0},{filename:"/lib/python3.9/site-packages/optlang/gurobi_interface.py",start:138045,end:168215,audio:0},{filename:"/lib/python3.9/site-packages/optlang/inspyred_interface.py",start:168215,end:181192,audio:0},{filename:"/lib/python3.9/site-packages/optlang/interface.py",start:181192,end:241984,audio:0},{filename:"/lib/python3.9/site-packages/optlang/osqp_interface.py",start:241984,end:275873,audio:0},{filename:"/lib/python3.9/site-packages/optlang/scipy_interface.py",start:275873,end:300705,audio:0},{filename:"/lib/python3.9/site-packages/optlang/symbolics.py",start:300705,end:304993,audio:0},{filename:"/lib/python3.9/site-packages/optlang/util.py",start:304993,end:315999,audio:0},{filename:"/lib/python3.9/site-packages/optlang/_version.py",start:315999,end:316496,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/__init__.py",start:316496,end:317107,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/abstract_test_cases.py",start:317107,end:357451,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_change_solver.py",start:357451,end:361208,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_coinor_cbc_interface.py",start:361208,end:388980,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_container.py",start:388980,end:398053,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_cplex_interface.py",start:398053,end:430920,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_duality.py",start:430920,end:438723,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_elements.py",start:438723,end:444460,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_expression_parsing.py",start:444460,end:447957,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_glpk_exact_interface.py",start:447957,end:467454,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_glpk_interface.py",start:467454,end:491799,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_gurobi_interface.py",start:491799,end:519264,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_inspyred_interface.py",start:519264,end:521355,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_interface.py",start:521355,end:531014,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_io.py",start:531014,end:534975,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_cplex_interface.py",start:534975,end:542053,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_glpk_exact_interface.py",start:542053,end:548023,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_glpk_interface.py",start:548023,end:554656,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_netlib_gurobi_interface.py",start:554656,end:562147,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_osqp_interface.py",start:562147,end:588825,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_scipy_interface.py",start:588825,end:601237,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_symbolics.py",start:601237,end:601492,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/test_util.py",start:601492,end:611108,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/data/__init__.py",start:611108,end:611108,audio:0},{filename:"/lib/python3.9/site-packages/optlang/tests/data/parse_the_final_netlib_results.py",start:611108,end:612684,audio:0},{filename:"/lib/python3.9/site-packages/optlang-1.5.2-py3.9.egg-info/PKG-INFO",start:612684,end:620792,audio:0},{filename:"/lib/python3.9/site-packages/optlang-1.5.2-py3.9.egg-info/SOURCES.txt",start:620792,end:622579,audio:0},{filename:"/lib/python3.9/site-packages/optlang-1.5.2-py3.9.egg-info/dependency_links.txt",start:622579,end:622580,audio:0},{filename:"/lib/python3.9/site-packages/optlang-1.5.2-py3.9.egg-info/requires.txt",start:622580,end:622646,audio:0},{filename:"/lib/python3.9/site-packages/optlang-1.5.2-py3.9.egg-info/top_level.txt",start:622646,end:622654,audio:0},{filename:"/lib/python3.9/site-packages/optlang-1.5.2-py3.9.egg-info/zip-safe",start:622654,end:622655,audio:0}],remote_package_size:303363,package_uuid:"225ae295-dd83-4e1d-a8a5-86ef89dff960"})})();