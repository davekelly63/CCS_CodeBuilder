// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs =require( 'fs');
const os =require( 'os');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "ccs-builder" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sendBuildCommand', function () {
        // The code you place here will be executed every time your command is executed

        const tempDir = os.tmpdir();
        const tempFilename = "Start.txt";
        let fullname = tempDir + path.sep + tempFilename;

       fs.writeFile(fullname,'Go');
       vscode.window.showInformationMessage('Created build signal: ');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;