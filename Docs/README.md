# Development Notes

- Double-check the case of exported & imported components in case of this error as it's a common cause:

```text
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```

- Check the console output of `next dev` to find stuff not mentioned in the browser's dev console such as suggestions to check specific lines in the case of the case mismatch error mentioned elsewhere

- The hot reload feature of `next dev` doesn't seem to catch file changes such as `foo.js` to `foo.jsx` or vice versa (when said file is imported without an extension)
