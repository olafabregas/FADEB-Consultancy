# Setup Guide - FADEB Consultancy React + Vite Project

## ✅ What's Been Created

Your project has been converted to a modern React + Vite setup with:

✨ **Reusable Components:**

- `Navbar.jsx` - Navigation with mobile menu (replaces navbar duplicate code)
- `Footer.jsx` - Footer component (replaces footer duplicate code)
- `HeroCarousel.jsx` - Auto-rotating hero with image carousel

📁 **Project Structure:**

```
fadeb-consultancy/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── HeroCarousel.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── Assets/ (your existing images)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd "c:\Desktop\FADEB Consultancy"
npm install
```

This will install:

- React 18
- Vite
- Tailwind CSS
- PostCSS & Autoprefixer

### 2. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

Output files will be in the `dist/` folder.

## 🎨 Purple Theme Applied

All components automatically use the purple color scheme:

- **Primary Gradient**: #802fc3 → #c583ff
- **Text Colors**: Properly themed for dark/light contrast
- **Animations**: Smooth transitions and micro-interactions

## 📱 Component Usage in Each Page

### For Home Page (index)

```jsx
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      {/* Your content */}
      <Footer />
    </div>
  );
}
```

### For Other Pages

```jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      {/* Your page-specific content */}
      <Footer />
    </div>
  );
}
```

## ✨ Features Included

### Navbar Features

✅ Responsive design (mobile hamburger menu)
✅ Animated nav links with purple underlines
✅ Glass-morphism effect
✅ Contact button with gradient
✅ Mobile menu toggles on click
✅ Smooth animations

### Footer Features

✅ 4-column grid layout
✅ Brand section with social icons
✅ Quick links
✅ Latest blog posts with images
✅ Contact information
✅ Responsive mobile layout
✅ Tooltip hints on hover

### Hero Carousel Features

✅ Auto-rotates through 3 images every 4 seconds
✅ Smooth fade transitions between images
✅ Interactive dot indicators
✅ Manual control via dot clicks
✅ Gradient overlay
✅ Call-to-action button
✅ Animated content reveal

## 🎯 Next Steps

### 1. Update Links

Find and replace placeholder links in components:

- Update `href="#"` to actual page URLs
- Update social media links
- Update contact email/phone

### 2. Customize Colors (if needed)

Edit `tailwind.config.js` in the `colors` section:

```js
colors: {
  primary: "#802fc3",      // Change primary color
  "primary-fixed": "#c583ff", // Change accent color
  // ... other colors
}
```

### 3. Add More Pages

```bash
# Create new page component
touch src/pages/AboutPage.jsx
```

Then import and use components:

```jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      {/* Content */}
      <Footer />
    </>
  );
}
```

### 4. Setup Routing (Optional)

If you want multiple pages with React Router:

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 🔍 File Explanations

### `index.html`

Vite entry point that loads your React app into the `<div id="root">` element.

### `src/main.jsx`

React bootstrap file that mounts the App component.

### `src/App.jsx`

Main application component that combines all sections.

### `src/components/`

Reusable components:

- **Navbar.jsx** - Navigation (no duplicate HTML across pages)
- **Footer.jsx** - Footer (no duplicate HTML across pages)
- **HeroCarousel.jsx** - Hero section with carousel

### `src/index.css`

Global styles including:

- Material Symbols font config
- Tailwind CSS setup
- Custom animations
- Color utilities

### `tailwind.config.js`

Tailwind configuration with:

- Extended color palette (purple theme)
- Custom fonts
- Custom animations
- Responsive breakpoints

### `vite.config.js`

Vite build configuration:

- React plugin
- Development server settings
- Build optimization

## 💡 Key Benefits of This Setup

1. **✅ No Code Duplication** - Use Navbar and Footer components everywhere
2. **✅ Fast Development** - Vite provides instant HMR (hot reload)
3. **✅ Easy Maintenance** - Update Navbar once, all pages update
4. **✅ Scalability** - Easy to add new pages and components
5. **✅ Modern Tooling** - Latest React, Vite, Tailwind stack
6. **✅ Animations** - Smooth micro-interactions throughout
7. **✅ Theme Consistency** - Purple theme applied everywhere

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- --port 3001
```

### Dependencies Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### CSS Not Loading

Make sure `src/index.css` is imported in `src/main.jsx`:

```jsx
import "./index.css";
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Material Symbols](https://fonts.google.com/icons)

## 🎉 You're All Set!

Your project is ready to run. Execute:

```bash
npm install
npm run dev
```

The development server will open automatically, and you'll see your hero carousel and all components working with the beautiful purple theme!

---

**Questions? Check the React & Vite documentation or the component files for detailed comments.**
