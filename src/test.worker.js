// import { createProject, ts } from "@ts-morph/bootstrap";

postMessage('hi')

// let tests = {
//     javascript: (code, babelConfig = { filename: 'test.js', presets: [ 'env' ] }) => {
//         let log = []
//         let mockConsole = {
//             log: (vars) => {
//                 log.push(...vars)
//             }
//         }
//         try {
//             // let completeScript = `${setupScript}\n${code}\n${testScript}`
            
//             completeScript = Babel.transform(completeScript, babelConfig).code
//             let test = new Function('expect', 'console', 'code', completeScript)
//             test(chai.expect, mockConsole, code)
//             codeExerciseTestOutput.style.color = 'green'
//             codeExerciseTestOutput.innerText = "Great Job!"
//         } catch(err){
//             codeExerciseTestOutput.style.color = 'red'
//             codeExerciseTestOutput.innerText = err.message
//         }
//     },
//     python: () => {
//         codeExerciseTestOutput.innerText = '(Testing is not yet implemented for Python)'
//     },
//     jsx: (code) => {
//         tests.javascript(code, {
//             filename: 'test.jsx',
//             plugins: [
//                 'proposal-class-properties',
//                 'transform-modules-commonjs'
//             ],
//             presets: [['react', {
//                 "pragma": "createElement", // default pragma is React.createElement
//                 "pragmaFrag": "span", // default is React.Fragment
//                 "throwIfNamespace": false // defaults to true
//             }]]
//         })
//     },
//     typescript: async (code) => {
//         const project = await createProject({ useInMemoryFileSystem: true });
//         project.createSourceFile("test.ts", code);

//         // const program = project.createProgram();
//         const diagnostics = ts.getPreEmitDiagnostics(project.createProgram());

//         console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));
//         tests.javascript(ts.transpile(code))
//     }
// }
