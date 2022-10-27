import { window, commands, workspace, ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {
  let getEncouragement = commands.registerCommand('developer_encourager.encouragement', () => {
    window.showInformationMessage('encourager enabled')
    let counter = 10
    let intervalId = setInterval(() => {
      counter -= 1
      console.log(counter)
      if (counter === 0) {
        window.showInformationMessage('Need some help?')
      }
    }, 1000)
    workspace.onDidChangeTextDocument(async ()=>{
      counter = 10
      window.showInformationMessage('text changed')
    })
  });
  context.subscriptions.push(getEncouragement)
}

export function deactivate() {

}
