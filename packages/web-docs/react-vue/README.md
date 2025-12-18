# PACER Web Documentation

Web documentation site untuk PACER Design System (React & Vue).

## Running Documentation

```bash
# From root
pnpm docs:react-vue

# Or from this directory
pnpm dev
```

Documentation akan jalan di http://localhost:5173

## Building Documentation

```bash
pnpm build
```

## Tech Stack

- **VitePress** - Static site generator
- **Vue 3** - For interactive examples
- **Markdown** - For content

## Adding New Pages

Create `.md` files in the root directory or subdirectories. Update sidebar in `.vitepress/config.ts`.
