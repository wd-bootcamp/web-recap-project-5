# 10: Bonus - Testing Components

As developers, we want to avoid repetitive manual testing by automating component tests.

## Value Proposition

**As a** programmer

**I want to** automate component testing

**so that** I can identify bugs more easily.

## Acceptance Criteria

- [ ] Automated tests cover the core components, ensuring they render and function as expected.

## Tasks

- [ ] Write tests for the Spotlight component.
- [ ] Write tests for the art piece preview and the list of art pieces.
- [ ] Write tests for the navigation to confirm that the links are rendered correctly.
- [ ] Write tests for the art piece details to confirm that all details are displayed correctly.

<details>
<summary>Hint ✨</summary>

The project uses [Vitest](https://vitest.dev/) with React Testing Library, set up like in the React Component Testing session: `test`, `expect` and `vi` are available without imports, and `vi.fn()` replaces `jest.fn()`. Rendered components are cleaned up after each test automatically. Put a test file next to its component, for example `Navigation.test.tsx`, and run the tests with `npm run test`.

Components that contain a `Link` or `NavLink` need a router around them in a test. Wrap them in a `MemoryRouter` from `react-router`.

```tsx
render(
  <MemoryRouter>
    <Navigation />
  </MemoryRouter>
);
```

</details>
