# 7. Comments for Art Pieces

To enhance user engagement, we’ll add a commenting feature that allows users to write and view comments on each art piece. A comment section will be displayed on the details page, showing comments specifically for the art piece being viewed.

<details>
<summary>Hint ✨</summary>
It’s best practice to consolidate related information into a single state. However, if you're not comfortable with this approach, you can use separate states. Just ensure you can clearly identify which information corresponds to each art piece—consider saving a unique identifier, such as a slug, within each state for clarity.

**Example:**

- **Using a Single State:**

  ```js
  const [carInfo, setCarInfo] = useState([
    { model: "vw-taos", colors: ["red", "blue", "white"], automatic: true },
    { model: "vw-golf", colors: ["black", "white"], automatic: false },
  ]);
  ```

- **Separate States per information:**

  ```js
  const [carColors, setCarColors] = useState([
    { model: "vw-taos", colors: "red" },
    { model: "vw-taos", colors: "blue" },
    { model: "vw-golf", colors: "black" },
  ]);

  const [carAutomatic, setCarAutomatic] = useState(["vw-taos", "vw-golf"]);
  ```

  </details>

## Value Proposition

**As an** art enthusiast

**I want to** write comments on art pieces

**so that** I can note down my thoughts and ideas about the work.

## Acceptance Criteria

- [ ] The detail view includes a section labeled "Comments" displaying a list of comments for this art piece.
- [ ] Each comment’s text is displayed.
- [ ] Each comment’s date and time are displayed.
- [ ] The detail view includes an input field for writing a comment.
- [ ] The detail view includes a submit button labeled "Send".
- [ ] After submitting the form, the new comment is added to the list of comments.

## Tasks

- [ ] Create at least two new components: one for managing the comment input and submission, and another for displaying the list of comments.
- [ ] Store the comment information in a state. You can either create a new state specifically for comments or add this information to an existing state, ensuring it’s easily accessible for each relevant art piece.
