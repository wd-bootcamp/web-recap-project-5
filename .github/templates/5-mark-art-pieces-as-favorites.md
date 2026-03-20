# 5: Mark Art Pieces as Favorites

The Favorite page will display a list of all favorite art pieces. Each art piece will show its image, artist’s name, title, and a favorite button.

Users should be able to save their favorite art pieces both on the Gallery page and the Detail page.

To achieve this, we’ll divide the tasks into two parts:

1. Implement the favorite button where needed.
2. Create the Favorite page.

## Mark Art Pieces as Favorites

Users want the ability to add additional information to each art piece. Consider where to store the art piece data to ensure all pages can access it efficiently. Remember that we’ll be reusing this favorite button across multiple pages.

<details>
<summary>Hint ✨</summary>

In Next.js, the recommended place to store data or states that need to be accessed across the app is in `_app.js`.

</details>

## Value Proposition

**As an** art enthusiast

**I want to** mark art pieces as favorites

**so that** I can find them more easily.

## Acceptance Criteria

- [ ] The favorite button is displayed on each entry in the list view.
- [ ] The favorite button is displayed on the details view.
- [ ] The favorite button is displayed on the spotlight view.
- [ ] Clicking the favorite button on a non-favorite piece saves it as a favorite and provides a visual indication (e.g., changing color or icon) to show it’s now a favorite.
- [ ] Clicking the favorite button on a favorite piece removes it from favorites and provides a visual indication (e.g., changing color or icon) to show it’s no longer a favorite.
- [ ] Favorite art pieces are visually highlighted to clearly show their favorite status.

#### Tasks

- [ ] Create a new component for the favorite button.
- [ ] Store this additional information (favorite status) in a state.
