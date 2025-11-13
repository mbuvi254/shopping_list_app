**Shopping List App**

- **Description:**: A small TypeScript + React (Vite) shopping list app that stores items in `localStorage`. Users add items with a name, price, quantity and priority; the app shows subtotals and a grand total.

**Setup**
- **Install:**: Run `npm install` to install dependencies.
- **Run (dev):**: Run `npm run dev` to start the Vite dev server.
- **Build:**: Run `npm run build` to create a production build.
- **Preview:**: Run `npm run preview` to serve the production build locally.

**Main Files**
- **Component:**: `src/App.tsx` — main app component and UI.
	- **State:**: Uses `shoppingList` (array of `Item`) in component state and persists it to `localStorage`.
	- **Types:**: `interface Item { name: string; price: number; qty: number; priority: Priority }` (Priority is `"High" | "Medium" | "Low"`).
	- **Form:**: Controlled inputs for `name`, `price`, `qty`, and `priority` with validation (price & qty must be > 0, name required).
	- **Add Item:**: `AddNewItem` handles `onSubmit`, appends a new item to `shoppingList`, resets inputs, and updates `localStorage` via a `useEffect`.
	- **Delete Item:**: `deleteItem(index)` removes an item by index.
	- **Totals:**: Sub-total shown per item (`price * qty`) and `grandTotal` computed via `reduce`.

**Usage Notes**
- **Persistence:**: The app automatically saves and loads the shopping list from `localStorage` under the key `shoppingList`.
- **Extending:**: To add features (edit items, sort by priority, categories), modify `src/App.tsx` and update the `Item` type as needed.

**Dev Tips**
- **Formatting:**: Project uses TypeScript; format with your preferred tool (Prettier/ESLint) if configured.
- **Testing changes:**: After edits run `npm run dev` and verify UI and `localStorage` behavior in the browser.

**Files to Inspect**
- `src/App.tsx` — main logic and UI
- `src/App.css` — basic styles applied to the app

---

