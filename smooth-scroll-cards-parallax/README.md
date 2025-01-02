# Smooth Scroll Cards Parallax

![Demo Video](public/demo.gif)

## Overview

A mesmerizing smooth scroll cards parallax animation built with Next.js and Framer Motion. This implementation features a butter-smooth scrolling experience powered by Lenis Scroll, creating an engaging and modern user interface inspired by award-winning websites.

## Credits

This implementation is inspired by and adapted from [Olivier Larose's tutorial](https://blog.olivierlarose.com/tutorials/cards-parallax). Full credit goes to the original creator for the concept and base implementation.

## Tech Stack

-   [Next.js](https://nextjs.org/) - React framework for production
-   [Framer Motion](https://www.framer.com/motion/) - Animation library
-   [Lenis Scroll](https://lenis.darkroom.engineering/) - Smooth scroll library
-   [SCSS](https://sass-lang.com/) - CSS preprocessor

## Running Locally

1. **Clone the repository**

    ```bash
    git clone https://github.com/akdevv/framer-snippets
    cd smooth-scroll-cards-parallax
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4. **View in browser**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
|   ├── page.jsx
|   └── page.module.scss
|
├── components/
│   └── card/
│       ├── index.tsx
│       └── styles.module.scss
|
└── constants/
    └── data.js
```
