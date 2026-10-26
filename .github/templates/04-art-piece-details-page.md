# 4: Art Piece Details Page

When a user clicks on an art piece, they see all detailed information about it, along with an option to navigate back to the list of art pieces.

## Value Proposition

**As an** art enthusiast

**I want to** view detailed information about an art piece

**so that** I can learn everything about it.

## Acceptance Criteria

- [ ] Clicking on an art piece from the list navigates to the detail page.
- [ ] The details are available on the route `/art-pieces/:slug`, for example `/art-pieces/the-harvesters`.
- [ ] The art piece's image is displayed.
- [ ] The art piece's title is displayed.
- [ ] The art piece's artist is displayed.
- [ ] The art piece's year is displayed.
- [ ] The art piece's genre is displayed.
- [ ] A back button is displayed.
- [ ] Clicking the back button navigates back to the list view.
- [ ] An unknown `slug` shows an "Art piece not found" message instead of crashing.

## Tasks

- [ ] Create a new component for displaying the art piece details.
- [ ] Create a **dynamic route** that renders the details of the selected art piece. Read the `slug` from the URL with `useParams`.
