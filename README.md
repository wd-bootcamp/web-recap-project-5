# Recap Project 5: Art Gallery

In this project, your team will create an interactive art gallery app with React, TypeScript and React Router.

This is a group project, so please create **only one project per group** following this [guide to setup your repository](./docs/github-respository-template.md).

## Overview

We will create an art gallery app with four pages: **Spotlight**, **Gallery**, **Favorites** and **Details**. Users can like or unlike art pieces, and liked pieces appear on the **Favorites** page. Users can also comment on art pieces. As a bonus, favorites and comments are saved in the browser.

![wireframes](./docs/wireframes.excalidraw.png)

To open the wireframes file `wireframes.excalidraw.png` in VS Code, install the [excalidraw extension](https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor).

## User Stories

The user stories are the issues of your repository: there are 10 of them (8 core stories and 2 bonus stories). Each issue contains a value proposition, acceptance criteria, tasks and, for some stories, a hint. Work on them in the order of their numbers.

## API

We fetch all necessary information about the art pieces from an API specifically designed for this course. [Check out the API](https://example-apis.vercel.app/api/art).

```bash
https://example-apis.vercel.app/api/art
```

An art piece looks like this. You will write a TypeScript type for it in the first user story:

```json
{
  "slug": "wheat-field-with-cypresses",
  "artist": "Vincent van Gogh",
  "name": "Wheat Field with Cypresses",
  "imageSource": "https://example-apis.vercel.app/assets/art/wheat-field-with-cypresses.jpg",
  "year": "1889",
  "genre": "Landscape Painting",
  "colors": ["#37412E", "#8D7332", "#838665", "#718F98", "#9DA59E"],
  "dimensions": { "height": 1528, "width": 1920, "type": "jpg" }
}
```

## Starter Project

The template is a [Vite](https://vite.dev/) project with React, TypeScript, [React Router](https://reactrouter.com/) and [SWR](https://swr.vercel.app/) already installed:

- `src/index.tsx` wraps the app with `BrowserRouter`.
- `src/App.tsx` is your starting point.
- `src/styles.css` contains some basic styles. Feel free to change them.
- `vercel.json` makes sure that URLs like `/art-pieces/the-harvesters` also work after deploying and reloading the page.

Run `npm run check` regularly: it type-checks your project with TypeScript.

## Deploying Your Project

🚀 Project deployment to Vercel is required: Please follow [these instructions](https://github.com/wd-bootcamp/cohort-template/blob/main/docs/deployment-vercel.md) to deploy the project on Vercel. Vercel detects Vite automatically.

## Working in the Team

> 💡 **Reminder**: Work on feature branches to avoid merge conflicts!

- Assign each issue to a team member and work on the issues in sequence.
- Only one issue per team member should be in the "In Progress" column at any given time.
- Open a pull request for every issue and review each other's pull requests before they are merged into `main`.

## Development

To work locally, please install the dependencies using `npm i` first (Node.js 22.22 or newer is required).

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run serve` to preview the production build
- `npm run check` to type-check the project with TypeScript
- `npm run test` to run the tests with Vitest
