# 7: Comments for Art Pieces

To enhance user engagement, we add a commenting feature that allows users to write and view comments on each art piece. A comment section is displayed on the details page, showing the comments of the art piece being viewed.

## Value Proposition

**As an** art enthusiast

**I want to** write comments on art pieces

**so that** I can note down my thoughts and ideas about the work.

## Acceptance Criteria

- [ ] The detail view includes a section labeled "Comments" displaying a list of comments for this art piece.
- [ ] Each comment's text is displayed.
- [ ] Each comment's date and time are displayed.
- [ ] A form with a text field and a submit button is displayed.
- [ ] Submitting the form adds the comment to the list of this art piece, and only to this art piece.
- [ ] Empty comments cannot be submitted.

## Tasks

- [ ] Create a `Comments` component and a `CommentForm` component.
- [ ] Type the comment, for example with `type ArtPieceComment = { text: string; date: string }`.
- [ ] Extend the information you store for each art piece with its comments.

<details>
<summary>Hint ✨</summary>

It is best practice to consolidate related information into one state. If you already have `ArtPieceInfo` with the `slug` and `isFavorite`, add a `comments` property with a list of comments.

Use `new Date().toISOString()` to get a date you can store, and `new Date(dateString).toLocaleString()` to display it.

</details>
