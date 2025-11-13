**Shopping List App**


**Setup**


**Main Files**


**Usage Notes**


**Dev Tips**


**Files to Inspect**


**Shopping List App**

- **Description:** A small TypeScript + React (Vite) shopping list app. Users add items (name, price, quantity, priority). The app persists the list to `localStorage`, shows per-item subtotals and a grand total.

**Quick Setup**
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production: `npm run build`
- Preview production build: `npm run preview`

**Project Structure & Main Files**
- `src/App.tsx` — App entry component
  - Renders the UI, composes `ItemForm` and `ItemList`, and keeps the `shoppingList` state.
  - Persists `shoppingList` to `localStorage` (key: `shoppingList`) using `useEffect`.
  - Exposes `addItem(item: Item)` and `deleteItem(index: number)` handlers.
  - Computes `grandTotal` via `shoppingList.reduce((acc, item) => acc + item.price * item.qty, 0)`.

- `src/components/ItemForm.tsx` — controlled form component
  - Props: `onAdd(item: Item)` — called when a valid item is submitted.
  - Local state: `name`, `price`, `qty`, `priority` (Priority = `"High" | "Medium" | "Low"`).
  - Validates inputs (name must be non-empty, price & qty > 0), constructs an `Item`, calls `onAdd`, and resets inputs.

- `src/components/ItemList.tsx` — (list rendering component)
  - Renders items, shows per-item `Sub-Total: price * qty`, and exposes a delete button.

- `src/types.ts` — shared types
  - `export type Priority = "High" | "Medium" | "Low";`
  - `export interface Item { name: string; price: number; qty: number; priority: Priority }`

**Behavior & Usage**
- Adding items: fill the form and submit. The app validates and appends the item.
- Deleting items: click the item's Delete button (deletes by index).
- Persistence: the list is saved to `localStorage` automatically and restored on load.

**Notes & Extensibility**
- The form is a controlled React component (`ItemForm`) and is reusable — you can lift state or move it to a context/Store if needed.
- To add features such as editing an item, sorting, filtering by priority, or categories, update `src/types.ts` and extend `ItemList`/`App` handlers.

**Dev Tips**
- Use browser devtools to inspect `localStorage` (key `shoppingList`) during development.
- Formatting / linting: run configured linters or add Prettier/ESLint if needed.

**Run checklist**
```bash
npm install
npm run dev
```

---
Want me to:
- add a short CONTRIBUTING or DEV guide, or
- add unit tests for `ItemForm` and `ItemList`, or
- wire a simple GitHub Actions CI for linting/build?
Tell me which and I’ll implement it.
