# display-shortcuts

[![Greenkeeper badge](https://badges.greenkeeper.io/kahlil/display-shortcuts.svg)](https://greenkeeper.io/)

> Displays a list of keyboard shortcuts you can use on the command line and their descriptions in your terminal.

## Install

```
$ npm install --global display-shortcuts
```

## Usage

```
❯ display-shortcuts
```
Displays this:

![A list of command line keyboard shortcuts](https://cdn.rawgit.com/distilledhype/display-shortcuts/9f1353b0155c694612d0f5dd9178deae75b55030/screenshot.png)

These shortcuts should all work on Mac in Terminal and zsh without any configuration.

## Extend
To extend the existing shortcuts simply create `~/.display-shortcuts/shortcuts.json` containing your missing shortcuts.

```
[
  { "shortcut": "description" }
]

```
## License

MIT © [Kahlil Lechelt](https://github.com/distilledhype)
