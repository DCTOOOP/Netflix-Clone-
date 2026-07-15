---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or navigate to project:**
```bash
   cd netflix-clone
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Start development server:**
```bash
   npm run dev
```

4. **Open in browser:**
   Navigate to `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

---

## 🎨 Tailwind CSS Classes Used

**Layout & Flexbox:**
- `flex`, `flex-col`, `flex-row`, `gap`, `justify-between`, `items-center`, `container`, `mx-auto`, `px-4`, `py-4`

**Responsive:**
- `sm:`, `md:`, `lg:` breakpoints
- `hidden sm:block`, `flex-col sm:flex-row`

**Typography:**
- `text-white`, `text-red-600`, `font-black`, `font-bold`, `text-6xl`, `text-lg`

**Colors & Effects:**
- `bg-black`, `bg-red-600`, `hover:bg-red-700`, `text-gray-400`, `opacity-30`
- `rounded`, `shadow-lg`, `drop-shadow-lg`

**Animations:**
- `transition-all`, `duration-300`, `transform`, `hover:scale-105`

**Positioning:**
- `fixed`, `relative`, `absolute`, `inset-0`, `z-10`, `z-50`

**Effects:**
- `backdrop-blur-sm`, `bg-gradient-to-b`, `mix-blend-overlay`

---

## 🔑 Key Features Explained

### State Management
- **Navbar:** `scrolled`, `mobileOpen`, `langOpen`, `lang`
- **Hero:** `email`
- **FAQ:** `openIndex`

### Component Reusability
- **FeatureBlock:** Accepts props (`title`, `description`, `icon`, `reverse`, `accent`) to create 4 different feature rows from one component
- **FAQItem:** Reusable accordion item with controlled state

### Event Handlers
- Scroll listener for navbar background change
- Click handlers for dropdowns and buttons
- Email input onChange for form handling

---

## 📋 Responsive Breakpoints

```css
/* Default (Mobile) */
text-lg px-4

/* Small devices (sm: 640px) */
sm:text-xl sm:px-6 sm:flex-row

/* Medium devices (md: 768px) */
md:text-2xl md:flex-row-reverse

/* Large devices (lg: 1024px) */
lg:text-3xl lg:px-12
```

---

## 🎯 What This Project Demonstrates

✅ **React Skills:**
- Functional components with hooks
- State management (useState)
- Side effects (useEffect)
- Component composition
- Props drilling

✅ **Tailwind CSS Skills:**
- Utility-first CSS approach
- Responsive design
- Flexbox & Grid layouts
- Gradient effects
- Animation & transitions

✅ **Best Practices:**
- Clean folder structure
- Reusable components
- Semantic HTML
- Accessibility considerations
- Mobile-first approach

✅ **UI/UX:**
- Professional design
- Smooth animations
- Responsive layouts
- Interactive elements
- Visual hierarchy

---

## 🚫 Technologies NOT Used

As per project requirements:
- ❌ Bootstrap
- ❌ Material UI
- ❌ Chakra UI
- ❌ Ant Design
- ❌ Custom CSS frameworks

**Only:** React + Tailwind CSS + Lucide Icons

---

## 📝 Component Documentation

### Navbar.jsx
```jsx
- Fixed positioning with scroll detection
- Language dropdown with 4 options
- Mobile hamburger menu
- Sign In button
```

### Hero.jsx
```jsx
- Full-screen hero section
- Movie poster background image
- Gradient overlay
- Email input with state
- CTA button
```

### FeatureSection.jsx
```jsx
- 4 feature blocks in array
- Reusable FeatureBlock component
- Alternating left/right layout
- Icon-based visuals
```

### FAQ.jsx
```jsx
- 6 FAQ items in array
- Accordion functionality
- Single open item at a time
- Smooth expand/collapse animation
```

### Footer.jsx
```jsx
- 4-column link grid
- Contact information
- Language selector
- Responsive layout
```

### BackToTop.jsx
```jsx
- Appears after 600px scroll
- Smooth scroll-to-top
- Hover animations
- Fixed positioning
```

---

## 🔧 Customization

### Change Colors
Edit Tailwind class names:
- `text-red-600` → Change to other Tailwind colors
- `bg-black` → Adjust background colors
- `hover:bg-red-700` → Modify hover states

### Change Background Image
In `Hero.jsx`, update the `backgroundImage` URL

### Modify Responsive Breakpoints
Edit in `tailwind.config.js`:
```js
theme: {
  extend: {
    screens: {
      // Custom breakpoints
    }
  }
}
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "tailwindcss": "^3.4.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}
```

---

## 🤝 Contributing

This is a project for learning purposes. Feel free to:
- Add more features
- Improve responsive design
- Enhance animations
- Add more sections

---

## 📄 License

This project is for educational purposes. Netflix is a trademark of Netflix, Inc.

---

## 👨‍💻 Author

Built as an internship project demonstrating React and Tailwind CSS skills.

---

## 🎓 Learning Outcomes

After building this project, you should understand:
- ✅ React component architecture
- ✅ State management with hooks
- ✅ Tailwind CSS utility classes
- ✅ Responsive web design
- ✅ Modern web development workflow
- ✅ Component reusability
- ✅ Event handling in React
- ✅ Conditional rendering

---

## 📞 Support

For questions or issues, refer to the project code structure and comments within components.

