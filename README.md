<!-- START Template Install Instructions -->

# MentorMate React Starter Template

This is an opinionated architecture and dev environment, based on the company's Engineering Standards and Processes. This project is meant to be used as a starter template for new React SPA projects using [Vite](https://vitejs.dev/). Follow the instructions bellow for the initial setup.

The `main` branch of the template repository represents the latest stable version that should be used for new projects. The `next` branch contains upcoming unreleased changes. Lastly, each version adheres to SemVer and is always released with a tag.

## Features

-   Consistency with established company standards and practices.
-   Preconfigured code quality tools.
-   Handy aliases, configurable generators, and preconfigured icon management.

## Using This Template

```
# 1. Clone the repository.
git clone https://github.com/MentorMate/react-starter.git my-new-project

# 2. Enter your newly-cloned directory.
cd my-new-project

# 3. Add to this document a note about when you started, so that you can
# always get an overview of changes made to the boilerplate since you cloned.
sh _start.sh

# 4. Delete the one-time start script
rm _start.sh

# 5. Read the documentation linked below for "Getting Started".
```

<!-- END Template Install Instructions -->
<div align="center">
  <img src="https://mentormate.com/wp-content/uploads/2021/10/mentormate-logo-2x.png" alt="Logo" width="200">

  <h3>Title / Repository Name</h3>

<a href="/link-here"><strong>Explore the docs »</strong></a>

  <p>
    <a href="/link-here">View Demo</a>
    ·
    <a href="/link-here">Report Bug</a>
    ·
    <a href="/link-here">Request Feature</a>
  </p>
</div>

<!-- Tip: anything wrapped with an underscore is a placeholder. You should update them when setting up your project for the first time. -->
<!-- Tip: Don't forget to update the markdown files in the `.github` directory as well. -->

## About The Project

_One to two paragraph statement about the product and what it does._

### Features

_A few of the things you can do with the product:_

## Getting Started

_Short description of what will be needed to get up and running._

### Prerequisites

_A list of tools, recommended package manager, runtimes, access tokens, environment variables, or SDKs that are needed before installing the project locally._

-   Node.js LTS

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app._

1. Clone the repo
    ```
    git clone https://github.com/your_username_/Project-Name.git
    ```
1. Open XXX
1. Run with YYYY

## Usage

_Use this space to show useful examples of how this project can be used by other team members. Additional screenshots, code examples and demos work well in this space. You may also link to more resources._

### Build

_Instructions how to make production builds._

### Directory Structure

_Describe any notable patterns or guidelines that your teammates need to adhere to. For example:_

```
├── src
│   └─ components
│      └─ DatePicker
│         ├── DatePicker.tests.jsx
│         ├── DatePicker.stories.jsx
│         ├── DatePicker.docs.md
│         ├── ...
│         └── DatePicker.jsx
```

### Icons

The project comes preconfigured with SVG icon pipeline. This allows importing SVG files as React components and the SVG file is automatically transformed and optimized. Here's a quick refresher of how to inline an `<svg>` icon with SVGR:

1. Export the vector icon from Figma.
1. Save it in `src/assets/icons`.
1. Import it as usual: `import ReactLogo from '@/icons/react-logo.svg?react';`.
1. Use it in JSX: `<ReactLogo />`.

> **Tip**: you can automatically transform all `fill` or `stroke` attribute values from the exported vector assets to `currentColor` (allowing you to control the icon's color through CSS directly). When setting up the project make sure to update `vite.config.ts` appropriately to match the exported icon color values.

### Tests

#### Running All Tests

```
# run all tests in watch mode
npm test

# generate code coverage report
npm run test:coverage

# preview the report
npm run preview:coverage
```

#### Introduction to Vitest

For unit tests, we use [Vitest](https://vitest.dev/) along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Vitest is a Jest compatible testing framework powered by Vite. If you're not familiar with these tools, I recommend first browsing through the existing tests to get a sense for them.

Then at the very least, read about:

-   React Testing Library's [queries](https://testing-library.com/docs/queries/about) for examples of how you can find rendered elements.
-   RTL's Jest DOM [extended matchers](https://testing-library.com/docs/ecosystem-jest-dom) for examples of other assertions you can make.
-   Mocking network requests with [MSW](https://vitest.dev/guide/mocking.html#requests)
-   [Debugging tests](https://vitest.dev/guide/debugging.html) in Vitest

#### Tests Architecture & Code Coverage

Configuration for Vitest is in `vite.config.ts`, support files are in `tests/`, but as for the tests themselves - they're first-class citizens. That means they live alongside our source files, using the same name as the file they test, but with the extension `.test.tsx`.

This may seem strange at first, but it makes poor test coverage obvious from a glance, even for those less familiar with the project. It also lowers the barrier to adding tests before creating a new file, adding a new feature, or fixing a bug. Most importantly - this follows the principle of [co-location](https://mtsknn.fi/blog/locality-of-behavior-and-co-location/#co-location).

Code coverage is generated by the built-in v8 provider.

### Generators

This project includes generators to speed up common development tasks. Commands include:

```bash
# See a list of available generators in the project
npx plop

# Generate a new component with adjacent test and Storybook file
npx plop feature

# Generate a new utility function with adjacent test file
npx plop service

# Tip: you can skip the interactive prompt and pass the component name directly
npx plop feature HelloWorld
```

Update existing or create new generators in the `generators` directory, with help from the [Plop docs](https://plopjs.com/documentation/#getting-started).

## License

Distributed under _XXX_ License. See `LICENSE.txt` for more information.

## Contact

Your Name - _username@mentormate.com_
