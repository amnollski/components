import dot from 'dot-object';
import { colors as tokens } from '../design-language/colors';

/*
  we use dot to convert objects to vscode dot notation

  the object style is better authoring experience, it helps
  organizing the file better, let's us lint the file and find
  duplicates / clashingstyles.
*/

const colors = {
  contrastBorder: tokens.grays[600],
  contrastActiveBorder: null,
  errorForeground: tokens.reds[500],
  focusBorder: tokens.grays[600],
  foreground: tokens.grays[200],
  activityBar: {
    background: tokens.grays[700],
    border: tokens.grays[600],
  },
  activityBarBadge: {
    background: tokens.grays[500],
  },
  button: {
    background: tokens.blues[600],
    foreground: tokens.white,
    border: tokens.blues[600],
  },
  dropdown: {
    background: tokens.grays[700],
    border: tokens.grays[600],
    foreground: tokens.white,
  },
  editor: {
    background: tokens.grays[700],
    foreground: tokens.grays[300],
    hoverHighlightBackground: tokens.grays[500],
    inactiveSelectionBackground: tokens.grays[500],
    lineHighlightBackground: tokens.grays[600],
    lineHighlightBorder: tokens.grays[600],
    rangeHighlightBackground: tokens.grays[600],
    selectionBackground: tokens.blues[500] + '33', // 20% opacity
    selectionHighlightBackground: tokens.grays[600],
    wordHighlightStrongBackground: tokens.grays[600],
    wordHighlightBackground: tokens.grays[600],
  },
  editorBracketMatch: {
    background: tokens.grays[600],
  },
  editorCodeLens: {
    foreground: tokens.grays[600],
  },
  editorCursor: {
    background: tokens.grays[700],
    foreground: tokens.white,
  },
  editorError: {
    border: tokens.grays[600],
    foreground: tokens.reds[500],
  },
  editorGroup: {
    background: tokens.grays[700],
    border: tokens.grays[600],
    dropBackground: tokens.blues[500] + '1a',
  },
  editorGroupHeader: {
    noTabsBackground: null,
    tabsBackground: tokens.grays[700],
    tabsBorder: tokens.grays[600],
  },
  editorGutter: {
    background: tokens.grays[700],
    deletedBackground: tokens.reds[500],
    modifiedBackground: tokens.grays[700],
  },
  editorHoverWidget: {
    background: tokens.grays[700],
    border: tokens.grays[600],
  },
  editorIndentGuide: {
    background: tokens.grays[700],
  },
  editorLink: {
    activeForeground: tokens.grays[300],
  },
  editorLineNumber: {
    foreground: tokens.grays[600],
    activeForeground: tokens.grays[400],
  },
  editorRuler: {
    foreground: tokens.white,
  },
  editorMarkerNavigation: {
    background: tokens.grays[700],
  },
  editorMarkerNavigationWarning: {
    background: tokens.grays[600],
  },
  editorMarkerNavigationError: {
    background: tokens.grays[700],
  },
  editorOverviewRuler: {
    border: tokens.grays[600],
    commonContentForeground: tokens.grays[600],
    currentContentForeground: tokens.reds[500],
    incomingContentForeground: tokens.greens[500],
  },
  editorSuggestWidget: {
    background: tokens.grays[700],
    border: tokens.grays[600],
    foreground: tokens.grays[300],
    selectedBackground: tokens.grays[600],
  },
  editorWarning: {
    border: tokens.grays[600],
    foreground: tokens.reds[300],
  },
  editorWhitespace: {
    foreground: tokens.grays[500],
  },
  editorWidget: {
    background: tokens.grays[700],
    border: tokens.grays[600],
  },
  extensionButton: {
    prominentBackground: tokens.grays[600],
    prominentForeground: tokens.white,
    prominentHoverBackground: tokens.grays[600],
  },
  input: {
    background: tokens.grays[600],
    foreground: tokens.white,
    border: tokens.grays[900],
    placeholderForeground: tokens.grays[300],
  },
  inputOption: {
    activeBorder: tokens.grays[500],
  },
  inputValidation: {
    infoForeground: null,
    infoBackground: null,
    infoBorder: tokens.purple,
    warningForeground: null,
    warningBackground: null,
    warningBorder: tokens.yellow,
    errorForeground: null,
    errorBackground: null,
    errorBorder: tokens.reds[500],
  },
  list: {
    dropBackground: tokens.grays[700],
    highlightForeground: tokens.blues[300],
    hoverBackground: tokens.grays[600],
    focusBackground: tokens.grays[600],
    activeSelectionBackground: tokens.grays[600],
    activeSelectionForeground: tokens.white,
    inactiveSelectionBackground: tokens.grays[600],
    inactiveSelectionForeground: tokens.white,
    warningForeground: tokens.yellow,
    errorForeground: tokens.reds[500],
    hoverForeground: null,
    focusForeground: null,
  },
  menu: {
    background: tokens.grays[700],
    selectionBackground: tokens.grays[600],
  },
  peekView: {
    border: tokens.grays[500],
  },
  peekViewEditor: {
    background: tokens.grays[600],
    matchHighlightBackground: tokens.blues[500] + '33', // 20% opacity
  },
  peekViewEditorGutter: {
    background: null,
  },
  peekViewResult: {
    background: tokens.grays[600],
    fileForeground: tokens.white,
    lineForeground: tokens.white,
    matchHighlightBackground: tokens.blues[500] + '33', // 20% opacity,
    selectionBackground: tokens.grays[600],
    selectionForeground: tokens.white,
  },
  peekViewTitle: {
    background: tokens.grays[600],
  },
  peekViewTitleDescription: {
    foreground: tokens.blues[700],
  },
  peekViewTitleLabel: {
    foreground: tokens.white,
  },
  scrollbarSlider: {
    activeBackground: tokens.white,
    border: tokens.grays[600],
    background: null,
    hoverBackground: null,
  },
  selection: {
    background: tokens.blues[500] + '40', // 25% opacity
  },
  separator: {
    background: tokens.grays[900],
    foreground: tokens.white,
  },
  sideBar: {
    background: tokens.grays[700],
    hoverBackground: tokens.grays[600],
    border: tokens.grays[600],
    foreground: tokens.grays[200],
  },
  sideBarSectionHeader: {
    background: tokens.grays[700],
    foreground: tokens.white,
    border: tokens.grays[600],
  },
  sideBarTitle: {
    foreground: tokens.white,
  },
  statusBar: {
    background: tokens.grays[600],
    foreground: tokens.white,
    debuggingBackground: tokens.reds[500],
    debuggingForeground: tokens.grays[600],
    noFolderBackground: tokens.grays[600],
    noFolderForeground: tokens.white,
    border: tokens.grays[600],
  },
  statusBarItem: {
    activeBackground: null,
    hoverBackground: null,
    prominentBackground: tokens.reds[500],
    prominentHoverBackground: tokens.yellow,
    remoteForeground: tokens.grays[100],
    remoteBackground: tokens.purple,
  },
  tab: {
    activeBackground: tokens.grays[700],
    activeForeground: tokens.white,
    border: tokens.grays[600],
    activeBorder: tokens.blues[300],
    unfocusedActiveBorder: null,
    inactiveBackground: tokens.grays[700],
    inactiveForeground: tokens.grays[400],
    unfocusedActiveForeground: tokens.white,
    unfocusedInactiveForeground: tokens.grays[400],
  },
  terminal: {
    background: tokens.grays[700],
    foreground: tokens.white,
    ansiBrightBlack: tokens.blues[700],
    ansiBrightRed: tokens.reds[500],
    ansiBrightGreen: tokens.greens[300],
    ansiBrightYellow: tokens.yellow,
    ansiBlack: tokens.grays[600],
    ansiRed: tokens.reds[500],
    ansiGreen: tokens.greens[300],
    ansiYellow: tokens.yellow,
    ansiBlue: tokens.blues[700],
    ansiMagenta: tokens.purple,
    ansiCyan: tokens.blues[300],
    ansiWhite: tokens.white,
  },
  titleBar: {
    background: tokens.grays[700],
    activeBackground: tokens.grays[700],
    activeForeground: tokens.white,
    border: tokens.grays[600],
    inactiveBackground: tokens.grays[700],
    inactiveForeground: tokens.grays[300],
  },
};

const theme = {
  name: 'Tallacta Light',
  type: 'light',
  // convert to vscode style flat dot notation
  colors: dot.dot(colors),
};

export default theme;
