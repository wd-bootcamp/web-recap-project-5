# 9: Bonus - Persist Favorites and Comments in the Browser

This is a bonus story: work on it when all other stories are done. Currently, all data is saved using `useState`, which means it is lost upon page refresh. To improve the user experience, we want to persist it in the browser's local storage.

## Value Proposition

**As an** art enthusiast

**I want** my favorites and comments to be saved

**so that** my data remains accessible even when I close or refresh the app.

## Acceptance Criteria

- [ ] All favorite flags and comments on art pieces are persisted across browser reloads.
- [ ] Without any data in the local storage, the app still works.

## Tasks

- [ ] Use `localStorage` to save the information on art pieces, including favorites and comments.

<details>
<summary>Hint ✨</summary>

The art pieces themselves are always fetched from the API. Only your own information (favorites and comments) is saved in the local storage.

- Read the saved value once when creating the state: `useState` accepts a function that returns the initial value, for example `useState<ArtPieceInfo[]>(loadArtPiecesInfo)`.
- Write the value with `localStorage.setItem(key, JSON.stringify(value))` in a `useEffect` that runs whenever the state changes.
- `localStorage.getItem(key)` returns `string | null` and `JSON.parse` returns `any`: handle the `null` case and annotate the parsed value with your type.

📙 Read more about [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

</details>
