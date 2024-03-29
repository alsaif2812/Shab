# Wahni IT Website

![Build](https://github.com/wahni-green/wit-site/actions/workflows/publish.yml/badge.svg)

![image](https://github.com/wahni-green/wit-site/assets/60477442/33142bc0-47bb-4c3e-a1b3-e004f4c9de6f)

Source files for [Wahni IT Solutions](https://wahni.io) website.

### ⚡️ Tech Stacks

| Category        | Resource                                                                    |
| --------------- | --------------------------------------------------------------------------- |
| Framework       | [Next.js](https://nextjs.org)                                               |
| Data Flow       | REST APIs (_external, not included in this project_)                        |
| Ui Frameworks   | [Material Tailwind](material-tailwind.com), [Tailwind CSS](tailwindcss.com) |
| Build           | [Github Workflows](github/workflows/publish.yml)                            |
| Icons           | [Remix Icon](remixicon.com), [FontAwesome](fontawesome.com)                 |
| Form Handling   | [Formik](formik.org)                                                        |
| Captcha         | [reCaptcha V3](https://developers.google.com/recaptcha/docs/v3)             |
| Trackers        | [GTag](https://developers.google.com/tag-platform/gtagjs)                   |
| Linting         | [ESlint](eslint.org)                                                        |
| Code Formatting | [Prettier](https://prettier.io)                                             |

## 🧑‍💻️ Development Setup

Since this project is bootstrapped with Next.js, the Development Setup follows the usual drill of installing npm packages, and running/building the project.

### To Run the Dev Server

1. **Check if you have Node.js installed in your system**

   run

   ```bash
    node -v
   ```

   - If it outputs a version number thats <= `18`, we're good to go.
   - If it throws an error, it means you dont have Nodejs installed in your system. [Get it from here](https://nodejs.org)

   > Bonus: Install `yarn` too for faster libs installation. [Refer this guide](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

2. **Install Dependancies**

   - If you prefer Yarn, run
     ```bash
     yarn
     ```
   - If you prefer Npm, run
     ```bash
     npm i
     ```

3. **Run Dev Server**
   - Yarn:
     ```bash
     yarn dev
     ```
   - Npm:
     ```bash
     npm run dev
     ```

If you have followed all the steps correctly and it did not raise any errors, the dev server will be running on port `3000`. Access it by opening [http://localhost:3000](http://localhost:3000)

**Environment Variables**

For the `gTag` and `reCaptcha` to work, you need to set up the following environment variables.

| Name                           | Value                 |
| ------------------------------ | --------------------- |
| NEXT_PUBLIC_API_ENDPOINT       | _api server endpoint_ |
| NEXT_PUBLIC_RECAPTCHA_SITE_KEY | xxx-xxxxxxxx          |

[Refer this guide](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables) to set up Environment Variables in Next.js

### Guide for the Devs

#### Linting and Formatting

The Project is nicely integrated with ESLint, Prettier and GitHub Workflows (_for the greater good_ 🫣). There is a pretty good chance that you will stumble upon linting issues and failing checks on pull requests.

After cursing the mad geek who set all these rules, dont forget to run the below checks before pushing your code.

1. **Format the Code**
   ```bash
   yarn format
   ```
2. **Run Linter**

   ```bash
   yarn lint
   ```

   This one is bit tricky. You will get an error for writing `console.log`

   > yea console logs should be strictly avoided in production

   and unsorted imports.. what more? idk be my guest and find out 🏃.

   #### Fix Unsorted Imports

   **❌ Bad**

   ```jsx
   import C from 'xx';
   import B from 'xx';
   import A from 'xx';
   ```

   **✅ Good**

   ```jsx
   import A from 'xx';
   import B from 'xx';
   import C from 'xx';
   ```

## 🛠️ Build Setup

1. **Build via GitHub Actions**

   The project is cofigured to leverage GitHub Actions to build the Project in the Workflows

   1. Navigate to `Actions` Tab
   2. Select `🔨 Build Project`
   3. Click on `Run Workflow` and select the target branch.

   It will usually complete in 2 minutes. Upon completion, you can access the compressed build file on the Artifacts Section.

2. **Build Locally**

   Yarn:

   ```bash
   yarn build
   ```

   Npm:

   ```bash
   npm run build
   ```

## ☁️ Deployment

1. **Via GitHub Actions**

   Will be Implemented Soon

2. **Manual**

   Next.js will generate a Static Build (_html + css + js_). Transpiling all the JSX into minified js chunks.

   It can be easily hosted on any servers including PHP powered Shared Hosting (_thats how [wahni.io](https://wahni.io) runs_).

   You can use [FileZilla](https://filezilla-project.org) to easily trasnfer filer over FTP.

   > For Nginx or Apache powered servers, you will have to modify the `.htaccess` file to correctly implement the routing. You can ask @akshayitzme for help 😉
#   I n t e r m e d i a t e  
 