# 3: App Navigation Design

Since we have multiple pages, we want to enable smooth navigation between them. All pages share a consistent layout.

## Value Proposition

**As an** art enthusiast

**I want to** switch between the Spotlight and Gallery views

**so that** I can navigate the app easily.

## Acceptance Criteria

- [ ] A navigation link labeled "Spotlight" is displayed.
- [ ] A navigation link labeled "Gallery" is displayed.
- [ ] Clicking "Spotlight" shows the Spotlight page.
- [ ] Clicking "Gallery" shows the Gallery page.
- [ ] The link of the current page is visually highlighted.
- [ ] Unknown URLs show a "Page not found" message.

## Tasks

- [ ] Create a `Navigation` component that renders all navigation links.
- [ ] Render the `Navigation` component only once, ensuring it appears on all pages.

<details>
<summary>Hint ✨</summary>

`NavLink` works like `Link`, but adds an `active` class to the link of the current page. Use the `end` prop for the link to `/`, otherwise it is active on every page.

</details>
