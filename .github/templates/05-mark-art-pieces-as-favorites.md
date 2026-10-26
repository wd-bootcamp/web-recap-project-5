# 5: Mark Art Pieces as Favorites

Users want the ability to mark art pieces as favorites. Users can do this on the Gallery page, the Spotlight page and the Details page. The favorite button is reused on all of these pages.

## Value Proposition

**As an** art enthusiast

**I want to** mark art pieces as favorites

**so that** I can find them more easily.

## Acceptance Criteria

- [ ] The favorite button is displayed on each entry in the list view.
- [ ] The favorite button is displayed on the details view.
- [ ] The favorite button is displayed on the spotlight view.
- [ ] Clicking the favorite button on a non-favorite piece saves it as a favorite and provides a visual indication (for example a changing color or icon).
- [ ] Clicking the favorite button on a favorite piece removes it from the favorites and provides a visual indication.
- [ ] Favorite art pieces are visually highlighted to clearly show their favorite status.

## Tasks

- [ ] Create a new component for the favorite button.
- [ ] Store this additional information (favorite status) in a state.

<details>
<summary>Hint ✨</summary>

All pages need to read and change the favorite status. The place for state that is shared by several routes is the component that renders the `Routes`: `App`.

Do not change the fetched art pieces. Store the additional information in your own state and connect it with the art pieces via the unique `slug`, for example:

```ts
type ArtPieceInfo = {
  slug: string;
  isFavorite: boolean;
};
```

You can find a heart icon on [Lucide](https://lucide.dev/icons/heart).

</details>
