Currently, all data is saved using `useState`, meaning it’s lost upon page refresh. To improve the user experience, we want to persist data in local storage. Keep in mind that when there is no data in local storage, we’ll need to fetch everything from the API.

## Value Proposition

**As an** art enthusiast

**I want** my favorites and comments to be saved

**so that** my data remains accessible even when I close or refresh the app.

## Acceptance Criteria

- [ ] All favorite flags and comments on art pieces are persisted across browser reloads.

## Tasks

- [ ] Use local storage to save information on art pieces, including favorites and comments.