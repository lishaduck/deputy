# Deputy

Inspired by [Sheriff], Deputy is a lightweight(ish), strict, and powerful TypeScript-first ESLint config.

## Philosophy

- **Strict**: Enforce a strict coding style to ensure code quality and consistency.
- **Lightweight**: Don’t depend on plugins that are irrelevant for a certain codebase.
- **Easy to use**: Provide a simple `domains` concept to allow for easy configuration of rules.
- **Powerful**: Allow for easy extension of the config to suit your needs.

## Usage

We use warnings to indicate the severity of an issue when developing.
However, that’s not to say that any rules are unimportant, if they were, we wouldn’t have them in the first place.
Ensure you pass `--max-warnings=0` to ESLint to ensure that all warnings are treated as errors.

[Sheriff]: https://github.com/AndreaPontrandolfo/sheriff
