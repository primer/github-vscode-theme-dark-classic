const { getVariant } = require("./process");
const { getColors } = require("./primer");

function getTheme({ style, name }) {
  // Usage: `auto('pink')`
  const auto = (hex) => getVariant(hex, style);

  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options) => options[style];

  const primer = getColors(style);

  const workbenchForeground = primer.gray[7];
  const editorForeground = primer.gray[7];

  return {
    name: name,
    colors: {
      focusBorder: primer.blue[3],
      foreground: primer.gray[6],
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],

      "textLink.foreground": primer.blue[6],
      "textLink.activeForeground": primer.blue[7],
      "textBlockQuote.background": primer.gray[0],
      "textBlockQuote.border": primer.gray[2],
      "textCodeBlock.background": primer.gray[1],
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],

      "button.background": primer.green[2],
      "button.foreground": primer.green[8],
      "button.hoverBackground": primer.green[3],

      "checkbox.background": primer.gray[2],
      "checkbox.border": primer.white,

      "dropdown.background": primer.gray[1],
      "dropdown.border": primer.white,
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": primer.gray[0],

      "input.background": primer.gray[1],
      "input.border": primer.white,
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": primer.gray[5],

      "badge.foreground": primer.blue[7],
      "badge.background": primer.blue[2],

      "progressBar.background": primer.blue[4],

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": primer.gray[0],
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": "#1f2428",
      "titleBar.border": primer.white,

      "activityBar.foreground": workbenchForeground,
      "activityBar.inactiveForeground": primer.gray[4],
      "activityBar.background": primer.gray[0],
      "activityBarBadge.foreground": primer.black,
      "activityBarBadge.background": primer.blue[4],
      "activityBar.activeBorder": "#f9826c",
      "activityBar.border": primer.white,

      "sideBar.foreground": primer.gray[6],
      "sideBar.background": "#1f2428",
      "sideBar.border": primer.white,
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": "#1f2428",
      "sideBarSectionHeader.border": primer.white,

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": "#282e34",
      "list.inactiveSelectionBackground": "#282e34",
      "list.activeSelectionBackground": "#39414a",
      "list.inactiveFocusBackground": "#1d2d3e",
      "list.focusBackground": primer.blue[2],

      "tree.indentGuidesStroke": primer.gray[1],

      "notificationCenterHeader.foreground": primer.gray[5],
      "notificationCenterHeader.background": primer.gray[0],
      "notifications.foreground": workbenchForeground,
      "notifications.background": primer.gray[1],
      "notifications.border": primer.white,
      "notificationsErrorIcon.foreground": primer.red[5],
      "notificationsWarningIcon.foreground": primer.orange[6],
      "notificationsInfoIcon.foreground": primer.blue[6],

      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background": primer.gray[0],
      "quickInput.foreground": workbenchForeground,

      "statusBar.foreground": primer.gray[6],
      "statusBar.background": primer.gray[0],
      "statusBar.border": primer.white,
      "statusBar.noFolderBackground": primer.gray[0],
      "statusBar.debuggingBackground": auto("#f9826c"),
      "statusBar.debuggingForeground": primer.black,
      "statusBarItem.prominentBackground": "#282e34",

      "editorGroupHeader.tabsBackground": "#1f2428",
      "editorGroupHeader.tabsBorder": primer.white,
      "editorGroup.border": primer.white,

      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": "#1f2428",
      "tab.activeBackground": primer.gray[0],
      "tab.hoverBackground": primer.gray[0],
      "tab.unfocusedHoverBackground": primer.gray[0],
      "tab.border": primer.white,
      "tab.unfocusedActiveBorderTop": primer.white,
      "tab.activeBorder": primer.gray[0],
      "tab.unfocusedActiveBorder": primer.gray[0],
      "tab.activeBorderTop": "#f9826c",

      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": workbenchForeground,
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      "breadcrumbPicker.background": "#2b3036",

      "editor.foreground": editorForeground,
      "editor.background": primer.gray[0],
      "editorWidget.background": "#1f2428",
      "editor.foldBackground": "#282e33",
      "editor.lineHighlightBackground": "#2b3036",
      "editorLineNumber.foreground": primer.gray[2],
      "editorLineNumber.activeForeground": editorForeground,
      "editorIndentGuide.background": primer.gray[1],
      "editorIndentGuide.activeBackground": primer.gray[2],
      "editorWhitespace.foreground": primer.gray[2],
      "editorCursor.foreground": primer.blue[7],

      "editor.findMatchBackground": "#ffd33d44",
      "editor.findMatchHighlightBackground": "#ffd33d22",
      "editor.inactiveSelectionBackground": "#3392FF22",
      "editor.selectionBackground": "#3392FF44",
      "editor.selectionHighlightBackground": "#17E5E633",
      "editor.selectionHighlightBorder": "#17E5E600",
      "editor.wordHighlightBackground": "#17E5E600",
      "editor.wordHighlightStrongBackground": "#17E5E600",
      "editor.wordHighlightBorder": "#17E5E699",
      "editor.wordHighlightStrongBorder": "#17E5E666",
      "editorBracketMatch.background": "#17E5E650",
      "editorBracketMatch.border": "#17E5E600",

      "editorGutter.modifiedBackground": primer.blue[5],
      "editorGutter.addedBackground": primer.green[4],
      "editorGutter.deletedBackground": primer.red[5],

      "diffEditor.insertedTextBackground": "#28a74530",
      "diffEditor.removedTextBackground": "#d73a4930",

      "scrollbar.shadow": "#0008",
      "scrollbarSlider.background": "#6a737d33",
      "scrollbarSlider.hoverBackground": "#6a737d44",
      "scrollbarSlider.activeBackground": "#6a737d88",
      "editorOverviewRuler.border": primer.white,

      "panel.background": "#1f2428",
      "panel.border": primer.white,
      "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": primer.gray[1],

      "terminal.foreground": primer.gray[6],

      "gitDecoration.addedResourceForeground": primer.green[5],
      "gitDecoration.modifiedResourceForeground": primer.blue[6],
      "gitDecoration.deletedResourceForeground": primer.red[5],
      "gitDecoration.untrackedResourceForeground": primer.green[5],
      "gitDecoration.ignoredResourceForeground": primer.gray[4],
      "gitDecoration.conflictingResourceForeground": primer.orange[6],
      "gitDecoration.submoduleResourceForeground": primer.gray[4],

      "debugToolBar.background": "#2b3036",
      "editor.stackFrameHighlightBackground": "#a707",
      "editor.focusedStackFrameHighlightBackground": "#b808",

      "peekViewEditor.matchHighlightBackground": "#ffd33d33",
      "peekViewResult.matchHighlightBackground": "#ffd33d33",
      "peekViewEditor.background": "#1f242888",
      "peekViewResult.background": "#1f2428",

      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": primer.blue[4],
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: primer.gray[4],
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
        ],
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: primer.purple[6],
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: primer.red[6],
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: primer.red[6],
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: "#9ecbff",
        },
      },
      {
        scope: "support",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: primer.orange[6],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: primer.red[6],
          foreground: primer.gray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: primer.green[6],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: primer.orange[6],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: primer.purple[6],
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: primer.blue[8],
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
