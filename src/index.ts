import { window, commands, workspace, ExtensionContext, ConfigurationTarget } from 'vscode'

export function activate(context: ExtensionContext) {

  //watch if the configuration has changed
  workspace.onDidChangeConfiguration(async ()=>{
    const config = workspace.getConfiguration("capital_encourager");
    let intervalId;
    console.log(config)
    if (config.enabled) {
      window.showInformationMessage('Capital Encourager is Enabled')
    } else {
      window.showInformationMessage('Capital Encourager is Disabled')
    }
    if (config.enabled && config.duration > 0) {
      let counter = config.duration
      intervalId = setInterval(() => {
        counter -= 1
        if (counter === 0) {
          window.showInformationMessage(randomQuotes())
        }
      }, 1000)
    }
  })

  // add a command to enable encourager
  let getEncouragement = commands.registerCommand('capital_encourager.encouragement', () => {
    const config = workspace.getConfiguration("capital_encourager");
    config.update('enabled', true, ConfigurationTarget.Global)
  });

  // add a command to disable encourager
  let imFine = commands.registerCommand('capital_encourager.fine', () => {
    const config = workspace.getConfiguration("capital_encourager");
    config.update('enabled', false, ConfigurationTarget.Global)
  });
  context.subscriptions.push(getEncouragement)
  context.subscriptions.push(imFine)
}

function randomQuotes() {
  let quotes = [
    'It’s not a bug. It’s an undocumented feature!  - Anonymous',
    'If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra',
    'What separates design from art is that design is meant to be… functional.  - Cameron Moll',
    'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.  - Bill Gates',
    'My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why.  - Anonymous',
    'Things aren’t always #000000 and #FFFFFF.  - HTML Proverb',
    'If at first you don’t succeed; call it version 1.0.  - Unknown',
    'Software always remain softly for End users! But sometimes hardly to developers!  - Bananeza Pacifique'
  ]
  return quotes[Math.floor(Math.random() * 9)];

}

export function deactivate() {

}
