# AGENT CODING GUIDELINES

This document provides strict operational commands and code style guidelines for all agentic coding in this repository. All agents must adhere to these conventions.

---

## I. OPERATIONAL COMMANDS

### A. Core Scripts

All commands are run from the project root using `npm`.

| Command | Action | Verification Role |
| :--- | :--- | :--- |
| `npm install` | Installs dependencies. | **REQUIRED** before any development. |
| `npm run dev` | Starts local dev server (`localhost:4321`). | Local development only. |
| `npm run build` | Builds the production site to `./dist/`. | **PRIMARY VERIFICATION TOOL:** Must run successfully after all changes. |
| `npm run preview` | Previews the production build locally. | Post-build verification. |

### B. Verification & Testing

**NOTE: This project currently does not have dedicated linting or unit testing frameworks configured (e.g., ESLint, Vitest, Jest).**

1.  **Primary Verification:** The successful execution of the build command is the single most important verification step.
    ```bash
    npm run build
    ```
2.  **Linting:** No formal linting is available. Agents must rely on the **TypeScript compiler** to catch errors and follow the style guidelines in Section II.
3.  **Running a Single Test:** Since there is no test runner, it is not possible to run a single test. Changes to a single file must be verified by running `npm run build` and checking the specific output/functionality locally.

---

## II. CODE STYLE GUIDELINES

### A. Technology Stack

Agents must respect the existing technology choices:
*   **Frameworks:** Astro, React.
*   **Language:** TypeScript (TSX/TS).
*   **Styling:** **SASS (con clases de utilidad personalizadas)**.
*   **Markup:** Astro and React JSX/TSX.

### B. Type Safety (TypeScript)

The project uses strict type checking: `"strictNullChecks": true`.

1.  **Explicit Types:** Always use explicit types for function arguments, return values, and complex state where possible. Avoid `any` unless absolutely necessary for external libraries.
2.  **Null and Undefined:** Explicitly check for `null` or `undefined` returns from functions, especially when interacting with external data or component props.
3.  **Interfaces/Types:** Define clear interfaces (`interface`) or types (`type`) for data structures (e.g., component props, constant objects).

### C. Imports and Path Aliases

**Agents MUST use the configured path aliases from `tsconfig.json` for internal imports.**

| Alias | Target | Example Usage |
| :--- | :--- | :--- |
| `@src/*` | `src/*` | `import { foo } from '@src/utils';` |
| `@components/*` | `src/components/*` | `import Button from '@components/Button.astro';` |
| `@layouts/*` | `src/layouts/*` | `import Layout from '@layouts/BaseLayout.astro';` |
| `@constant/*` | `src/constant/*` | `import { API_URL } from '@constant/api';` |
| `@assets/*` | `src/assets/*` | `import logo from '@assets/logo.svg';` |

**Import Ordering:** Follow a consistent convention (e.g., node modules, external libraries, path aliases, relative imports). Separate groups with a newline.

### D. Naming Conventions

1.  **React/Astro Components:** Use **PascalCase** (e.g., `Button.astro`, `UserProfile.tsx`).
2.  **Variables/Functions:** Use **camelCase** (e.g., `calculateTotal`, `userId`).
3.  **Constants:** Use **SCREAMING\_SNAKE\_CASE** for global, hardcoded constants, typically stored in `@constant/*` (e.g., `MAX_RETRIES`).
4.  **Enums/Types/Interfaces:** Use **PascalCase** (e.g., `UserStatus`, `UserProfileProps`).

### E. Component Structure

1.  **Prefer Functional Components:** All React components should be functional.
2.  **Prop Typing:** Component props must be explicitly typed using TypeScript interfaces/types.
3.  **Class Management:** Classes should be descriptive and follow existing SASS naming conventions (e.g., BEM or similar structure) found in the project.

### F. Styling

1.  **Primary Styles:** Use **SASS**.
2.  **Utility Classes:** Utilize the existing, manually defined utility classes (CSS/SASS) as a first approach for common properties (e.g., spacing, colors).
3.  **Custom Styles:** Use dedicated SASS files for component-specific styles and complex layouts. Organize SASS files to mirror the component structure they style.

### G. Error Handling

1.  **API/Async Operations:** Use `try...catch` blocks for all asynchronous operations, especially data fetching. Log or handle errors gracefully, providing user feedback.
2.  **Prop Validation:** Ensure default values or checks are in place for optional props to prevent runtime type errors.

---

## III. AGENT DIRECTIVES

1.  **Idempotence:** All code modifications must be atomic and reversible. Do not make changes that introduce non-deterministic side effects outside of the intended scope.
2.  **Search First:** Never assume file existence or content. Use `glob` and `read` to confirm the required context before any `edit` or `write` operation.
3.  **Do Not Install:** Do not introduce or install new `npm` dependencies without explicit user permission.
4.  **No Unapproved Rules:** There are no additional agent-specific configuration files (`.cursorrules`, `copilot-instructions.md`). Follow the rules outlined in this `AGENTS.md` and the standard OPencode mandates.
5.  **Language Consistency:** Maintain Spanish in user-facing text and comments if the existing file uses Spanish (as observed in `README.md`). Use English for all code-level identifiers (variables, functions, classes).

---
## IV. PROJECT-SPECIFIC CONTEXT

- **Project:** Astro/React Portfolio Website.
- **Goal:** Maintain clean, fast, and static-friendly code. All changes should keep the site performant.
- **File Types:** Astro (`.astro`), React (`.tsx`), TypeScript (`.ts`), Styling (`.scss`).
