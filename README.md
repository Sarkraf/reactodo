# ReactTodo — React on Rails

A simple TODO application demonstrating **React on Rails** integration. This project leverages:

- **Rails** for the backend
- **React** for the frontend
- **Shakapacker** for Webpack configuration
- **react_on_rails** for Rails + React integration (including optional server-side rendering)

## Features

- Create, read, update, and delete todos
- Responsive UI built with Tailwind CSS
- Docker support for containerized deployment
- Hot Module Replacement (HMR) setup for quick iterative development

## Requirements

- Ruby (version specified in your `Gemfile`)
- Node.js (v14+)
- Yarn or npm
- PostgreSQL (if you plan to use Rails in production)

## Getting Started (Local Development)

1. **Install RubyGems and Node deps**

   ```bash
   bundle install
   yarn install
   ```

2. **Database Setup (if needed)**

   ```bash
   rails db:create db:migrate
   ```

3. **Start the Dev Environment**
   ```bash
    bin/dev
   ```
   This launches Rails on port 3000, the Shakapacker dev server, and Tailwind CSS in watch mode.

## Production

- Assets are precompiled using `shakapacker` and stored in `public/packs`
- Rails forced to use SSL in production (`config.force_ssl = true`)
