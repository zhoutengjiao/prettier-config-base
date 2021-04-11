module.exports = {
  // Specify the line length that the printer will wrap on
  printWidth: 80,
  // Specify the number of spaces per indentation-level.
  tabWidth: 2,
  // Indent lines with tabs instead of spaces
  useTabs: false,
  // Print semicolons at the ends of statements
  semi: true,
  // Use single quotes instead of double quotes
  singleQuote: false,
  // Change when properties in objects are quoted
  quoteProps: "as-needed",
  // Use single quotes instead of double quotes in JSX
  jsxSingleQuote: false,
  // Print trailing commas wherever possible when multi-line
  trailingComma: "es5",
  // Print spaces between brackets in object literals
  bracketSpacing: true,
  // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
  jsxBracketSameLine: true,
  // Include parentheses around a sole arrow function parameter
  arrowParens: "always",
  // These two options can be used to format code starting and ending at a given character offset
  rangeStart: 0,
  rangeEnd: Infinity,
  // Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file
  // This is very useful when gradually transitioning large, unformatted codebases to prettier
  requirePragma: false,
  // Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier
  insertPragma: false,
  // Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer
  proseWrap: "preserve",
  // Specify the global whitespace sensitivity for HTML files
  htmlWhitespaceSensitivity: "css",
  // Whether or not to indent the code inside <script> and <style> tags in Vue files
  vueIndentScriptAndStyle: false,
  // flavors of line endings in text files
  endOfLine: "lf",
  // Control whether Prettier formats quoted code embedded in the file
  embeddedLanguageFormatting: "auto",
};
