# Supreme Group

A modern, responsive, and accessible web application for Supreme Group, built with Next.js, React, and Tailwind CSS. The site showcases nonwoven solutions for automotive and commercial vehicles, with a focus on performance, usability, and maintainability.

---

## Project Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vibhorgupta04/supreme-group.git
   cd supreme-group
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## Component Architecture Overview

- **App Structure:**  
  - `src/app/layout.tsx`: Root layout, applies global styles and fonts.
  - `src/app/page.tsx`: Main page, composes the site from modular components.

- **Components:**
  - `Header`: Sticky, auto-hiding navigation bar with logo.
  - `HeroSection`: Prominent landing section with headline and subheading.
  - `SolutionSection`: Interactive, tabbed/video section for solutions, using Swiper for carousels.
  - `ContactUs`: Form with validation for user inquiries.
  - `Footer`: Responsive footer with navigation and company info.

- **Data & Constants:**
  - `src/data/solutions.json`: Data for solution categories and parts.
  - `src/data/footer.json`: Footer navigation and links.
  - `src/constants/index.ts`: Shared constants for UI elements.

- **Hooks:**
  - `useScroll`: Custom hook for header visibility on scroll.

---

## Responsive Design Strategy

- **Tailwind CSS** is used for utility-first, mobile-first responsive design.
- Layouts adapt using Tailwind's breakpoint classes (`md:`, `lg:`, etc.).
- Swiper.js is used for touch-friendly carousels on smaller screens.
- Flexbox and grid utilities ensure content is well-aligned and adapts to screen size.
- Images and videos are set to scale responsively.

---

## Performance Optimization Techniques Employed

- **Next.js**: Automatic code splitting, server-side rendering, and static asset optimization.
- **Image Optimization**: Uses Next.js `Image` component for responsive, lazy-loaded images.
- **Minimal JS/CSS**: Tailwind's utility classes reduce custom CSS bloat.
- **Efficient State Management**: Local state only where necessary, no global state libraries.
- **Custom Hooks**: `useScroll` minimizes unnecessary re-renders for header visibility.
- **Data-Driven UI**: Solutions and footer sections are rendered from static JSON, reducing hardcoded UI.

---

## Explanation of Third-Party Libraries Used

- **Next.js**: React framework for SSR, routing, and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Swiper**: For responsive, touch-enabled carousels in the Solution section.
- **Formik**: For robust, accessible form state management.
- **Yup**: For schema-based form validation.
- **Lucide-react**: For modern, customizable SVG icons.

---

## Assumptions Made and Decisions Taken

- **Data-Driven UI**: Solutions and footer sections are rendered from JSON for easy updates.
- **No Backend Integration**: The contact form currently only simulates submission (no backend).
- **Single Page Structure**: All content is rendered on the main page for simplicity.
- **Design System**: Tailwind CSS is used for consistency and rapid prototyping.
- **Accessibility**: Prioritized in all components, especially forms and navigation.

---

## Challenges Faced and Potential Solutions

- **Video Performance**: Ensuring smooth video playback across devices.  
  *Potential Solution*: Use adaptive streaming or lower-res fallback videos for mobile.
- **Form Handling**: No backend for form submissions.  
  *Potential Solution*: Integrate with a service like Formspree, Netlify Forms, or a custom API.
- **Content Management**: Static JSON is easy for small sites but not scalable.  
  *Potential Solution*: Integrate a headless CMS (e.g., Contentful, Sanity) for dynamic content.
- **Testing**: No automated tests yet.  
  *Potential Solution*: Add unit and integration tests with Jest and React Testing Library.

---

## Suggested Upcoming Features and Improvements

- **Backend Integration**: Connect the contact form to an email or CRM service.
- **CMS Integration**: Move static content to a headless CMS for easier updates.
- **Internationalization (i18n)**: Add support for multiple languages.
- **Dark Mode**: Allow users to toggle between light and dark themes.
- **SEO Enhancements**: Add meta tags, Open Graph, and structured data.
- **Analytics**: Integrate Google Analytics or similar for usage tracking.
- **Automated Testing**: Add tests for critical components and flows.

---

## Additional Remarks

- The project is designed for clarity, maintainability, and scalability.
- All code follows modern best practices for React and Next.js.
- Contributions and suggestions are welcome!

