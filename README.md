# Another Cyprus

A responsive property showcase for selected commercial and residential developments in Limassol, Cyprus.

The owner's approved layout and content decisions, verification requirements, and recovery checkpoint are recorded in [AGENTS.md](AGENTS.md). Preserve this baseline during subsequent maintenance.

## Development

Requirements: Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Production verification:

```bash
npm run lint
npm run build
```

## Deployment

The production domain is [anothercyprus.com](https://anothercyprus.com/). Configure the hosting platform to build with `npm run build` and publish the `dist` directory.

## Important notice

Website content is for general information and marketing only. Prices, availability, specifications, completion dates and projections may change. Legal, tax, immigration and investment matters require independent professional advice.

## Technology

React, TypeScript, Vite and Tailwind CSS.
