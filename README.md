# 🚀 Turborepo starter

One of the challenges of building microfrontends is dependency management and build systems. In the packages and apps in this monorepo, we'll be using Turborepo to earn great developer experience for our teams with minimal configuration.

## 🔨 Prerequisites

    git --version
    # >= 2.40.1
    node --version
    # >= v16.0.0
    pnpm --version
    # >= 8.6.0

## ✨ Features

- Everything is in TypeScript
- Next.js is used for the applications in ./apps
- Shared packages used by the apps in ./packages
- Tailwind CSS for utility CSS in React components and to build the design system
- Storybook is used for the components that are part of the hros-ui package and its setup is shared in the storybook package
- The ESLint config lives in custom-eslint-config
- Bundle your TypeScript library with no config

## 📦 Run scripts

Install packages
```sh
pnpm install
```

Start development
```sh
pnpm dev
```

Build
```sh
pnpm build
```

## 🔎 What's inside?

This Turborepo includes the following packages/apps:

### 📂 Apps and Packages

- `expenso`: a [Next.js](https://nextjs.org/) app
- `storybook`: Storybook based on Vite [Storybook](https://storybook.js.org/)
- `hros-ui`: a stub React component library shared by both `expenso` and `storybook` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwind-copnfig`: for utility CSS in React components and to build the design system

## 🖥 Code Structure

```shell
.
├── README.md                                           # README file
├── .vscode                                             # VSCode configuration
├── app
│   ├── expenso                                         # Expenso app
│   ├── storybook                                       # Storybook helps you build UI components
│   ├── ...                                             # Other app ...
├── packages
│   ├── eslint-config-custom                            # eslint configurations
│   ├── tailwind-config                                 # tailwind configurations
│   ├── tsconfig                                        # tsconfig configurations
│   ├── ui                                              # Hros UI Component
├── .eslintrc.json              
├── .prettierrc.json
├── .npmrc 
├── package.json                                    
└── turbo.json                                          # Turbo configuration
```

## 📙 Technical Documents
- Turborepo: https://turbo.build/repo/docs
- Next JS: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs/installation
- Storybook for React: https://storybook.js.org/docs/react
