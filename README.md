# Treblle Documentation

This is the official documentation site for Treblle, built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Prerequisites

- Node.js
- npm/yarn/pnpm

## Installation

1. Clone the repository

2. Install dependencies:

```bash
npm install
```

## Development

To run the development server:

```bash
npm run dev
```

This will start the Astro development server, typically at `http://localhost:4321`

## Building

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

- `/src/content/docs/` - Documentation content (MDX files)
- `/src/assets/` - Static assets like images
- `/src/components/` - Custom components
- `/public/` - Public static files

## Features

The documentation site includes:

- Full documentation for Treblle's features and integrations
- Integration guides for multiple programming languages and frameworks
- API reference documentation
- Interactive examples and code snippets
- Dark/light theme support
- Full-text search
- Responsive design

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Environment Variables

The following environment variables can be set in a `.env` file:

```bash
TREBLLE_API_KEY=your_api_key
TREBLLE_PROJECT_ID=your_project_id
```

## License

This project is licensed under the MIT License.
