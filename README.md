# GitHub VS Code theme (Dark Classic)

:warning: Note: This theme is not actively maintained. It's an older version of https://github.com/primer/github-vscode-theme before adjusting the dark colors to match github.com. Feel free to fork this theme if you prefer this older version.

![GitHub Dark Classic VS Code theme](https://user-images.githubusercontent.com/378023/102616403-d9279e80-417a-11eb-86fa-ddda833e3704.png)

## Override this theme

To quickly test something, you can also override this (or any other) theme in your personal config file. Please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.

## Contribute

1. Clone and open this [repo](https://github.com/primer/github-vscode-theme-dark) in VS Code
2. Run `npm install` to install the Primer CSS color reference and run `npm start` to run the converter.
3. Press `F5` to open a new window with your extension loaded
4. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "GitHub Light" or "GitHub Dark" theme
5. Make changes to the [`/src/theme.js`](https://github.com/primer/github-vscode-theme-dark/blob/master/src/theme.js) file.
    - **UI**: For all changes to the "outer UI", like (status bar, file navigation etc.), take a look at the [Theme Color](https://code.visualstudio.com/api/references/theme-color) reference.
    - **Syntax**: For changes to the "code highlighting", examine the syntax scopes by invoking the [`Developer: Inspect Editor Tokens and Scopes`](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) in the Extension Development Host window.
6. Commit your changes and open a PR.

Note:

- If possible use colors from [Primer's color system](https://primer.style/css/support/color-system).
- Changes to the theme files are automatically applied to the Extension Development Host window, so no reloading should be necessary.
