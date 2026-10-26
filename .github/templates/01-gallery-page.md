# 1: Gallery Page

The Gallery page displays a list of all art pieces. Each art piece's image, along with its artist's name and title, is shown.

## Value Proposition

**As an** art enthusiast

**I want to** see a list of all art pieces

**so that** I can get an overview of each one.

## Acceptance Criteria

- [ ] All art pieces are displayed in a list.
- [ ] Each art piece's image is displayed.
- [ ] Each art piece's title is displayed.
- [ ] Each art piece's artist's name is displayed.
- [ ] The list is available on the route `/art-pieces`.

## Tasks

- [ ] Define a type `ArtPiece` that describes one art piece of the API (see the example in the README), for example in a new file `src/types.ts`. Only type the properties you use.
- [ ] Fetch the art pieces with `useSWR` and write a `fetcher` function that returns `ArtPiece[]`.
- [ ] Display a loading and an error state.
- [ ] Create a component to render the list of art pieces.
- [ ] Create a component to render each art piece preview.

<details>
<summary>Hint ✨</summary>

`response.json()` returns `any`. Annotate the result with your type and let the `fetcher` say what it returns:

```ts
async function fetcher(url: string): Promise<ArtPiece[]> {
  // ...
  const data: ArtPiece[] = await response.json();
  return data;
}
```

SWR only reports an `error` if the `fetcher` throws. Throw an `Error` when the response is not `ok`, like in React Data Fetching.

</details>

## Where to fetch the data

This app has four main pages: **Spotlight**, **Gallery**, **Favorites** and **Details**. Each page needs access to the art pieces. Think about where to fetch and store the data so that all pages can reach it.

<details>
<summary>Hint ✨</summary>

Fetch the art pieces once in `App.tsx` with `useSWR` and pass them down as props to the pages that need them. Components rendered by a `Route` can only get data from props, context or their own hooks.

Remember to type everything: the fetched data, your state and the props of your components.

</details>
