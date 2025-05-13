# Deputy

Inspired by Sheriff, Deputy is a lightweight, strict, and powerful ESLint config.

## Philosophy

- **Strict**: Enforce a strict coding style to ensure code quality and consistency.
- **Lightweight**: Don’t depend on plugins that are irrelevant for a certain codebase.
- **Easy to use**: Provide a simple `domains` concept to allow for easy configuration of rules.
- **Powerful**: Allow for easy extension of the config to suit your needs.

## Usage

We use warnings to indicate the severity of an issue when developing.
However, that’s not to say than any rules are not important.
Ensure you pass `--max-warnings=0` to ESLint to ensure that all warnings are treated as errors.
