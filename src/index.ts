import { window, commands, workspace } from 'vscode'

export function activate() {
  let disposable = commands.registerCommand('developer_encourager.showhello', () => {
    window.showInformationMessage('Hello')
  });
  
  let counter = 5
  let intervalId = setInterval(() => {
    counter -= 1
    console.log(counter)
    if (counter === 0) {
      window.showInformationMessage('Need some help?')
    }
  }, 1000)
  workspace.onDidChangeTextDocument(async ()=>{
    counter = 5
    window.showInformationMessage('text changed')
  })
  
  
}

export function deactivate() {

}
