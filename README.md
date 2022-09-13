# CRUD App Demo

MERN stack application.

## Tech Stack

Dependencies not listed in package.json files are listed here.

- Node.js runtime v16.16.0
- PNPM package manager v7.1.1 (the current lockfile is only compatible with pnpm but npm and yarn will probably work fine with just the package.json file)

.mjs files are used to enable EcmaScript module syntax (instead of the older CommonJS syntax) in the backend project without using bundlers or editing package.json.

## Current Features & Limitations

- Global state manager doesn't function correctly with SSR & hydration without some tweaks, so I ended up using React Context (less performant but works reliably for global state when combined with state hooks)
- Authentication & authorization (protected routes) are working correctly on the backend with Mongoose & Passport.js
- React Spring was used along with Sass/SCSS for some basic animations
- Some components still use placeholders in place of proper fetched objects due to time constraints
- Version control history should show all commits leading up to 4 PM GMT +5:30 (48 hours from the initial email), I understand anything made after that is a change made for personal work and won't count towards appraisal
- App is an SPA using conditional rendering triggered by nav bar buttons

Using Next.js for implicit, automated routing with dependency injection to reduce redundant code, and automatic server-side rendering for increased client-side performance, UX, and improved SEO. Web crawlers like Googlebot have technically been able to access dynamic single page applications (that use client-side rendering) for a while now. However, the slower rendering times for CSR apps (among other issues) could influence ranking to some extent. SSR is still typically considered optimal assuming the developer can deal with some additional requirements when coding.
