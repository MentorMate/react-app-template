// note: all tasks below are run serially instead of concurrently (controlled by the pre-commit git hook)
// this avoids the issue of linting and formatting the same file at the same time
const config = {
    // reusing the lint pkg script instead of only the staged files
    // while respecting the config and ignore rules in eslintrc, tsconfig, and eslintignore
    // this avoids linting a file that shouldn't be linted, but isn't explicitly ignore in eslintignore
    '*.{js,ts,tsx}': ['npm run lint', 'prettier --write'],
    '*.{css,md}': 'prettier --write',
};

export default config;
