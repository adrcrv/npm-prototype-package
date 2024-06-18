# 📦 NPM Prototype Package

This repository provides a foundation for creating common services and reusable components that can be shared across multiple Node.js and TypeScript projects. It is designed to facilitate development, maintenance, and code reuse in different applications.

## 📝 Description
Code structures and patterns that are intended to be generic and reusable. This includes:

- **Common Services**: Shared services or utilities, such as authentication services, API handlers, global state managers, etc.

- **Default Configurations**: Initial configurations for a Node.js project, including directory structure and TypeScript settings.

## 📋 Requirements
- [nodejs 20+](nodejs.org)
- [pnpm 9+](pnpm.io)

## ⚙️ Environments

Set up required environment.  
Authenticate with npm, ensure to have the necessary credentials set in `.npmrc` file.

```bash
# service environments
# check file information
$ cp .npmrc.example .npmrc
```


## 📦 Installation

Install dependencies and execute post-install processes.

```bash
# install dependencies
$ pnpm install
```

*After installation, a post-install process will execute to copy Markdown files to the root directory.*

## ✔️ Checks

Commands for running checks, linting, and parsing.

```bash
# all checks
$ pnpm check

# lint
$ pnpm lint

# parse
$ pnpm parse
```

## 🧪 Test

Run automated tests to validate functionality and behavior.

```bash
# unit tests
$ pnpm test
```


## 🛠️ Build

Build the project to generate compiled output.

```bash
# build
$ pnpm build
```

*Upon running the build command, a folder named `/dist` will be created, containing the build output.*

## 🚀 Publish
Publishing the package to npm.  
Note that npm authorization is required for publishing. Ensure `.npmrc` file contains the necessary authentication information.

```bash
# build
$ pnpm publish
```

## ⚖️ License
This software is proprietary and confidential, owned by Andre Carvalho. All rights reserved.  
Any unauthorized use, reproduction, or distribution of this software is strictly prohibited.
