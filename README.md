# DevAgency - Digital Products Agency Website

A modern, multi-page React application for a digital products agency, featuring smooth animations, responsive design, and pixel-perfect implementation.

![DevAgency Website](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.8-purple) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.16-pink)

## 🌟 Features

- **5 Complete Pages**: Home, Services, Pricing, About, and Contact
- **Smooth Animations**: Page transitions and scroll-triggered animations using Framer Motion
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI/UX**: Clean, professional design with vibrant colors and gradients
- **Interactive Elements**: Hover effects, form validation, and dynamic content
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📄 Pages

1. **Home** - Hero section, services overview, why choose us, tech stack, process steps
2. **Services** - Detailed service cards with images and descriptions
3. **Pricing** - Three-tier pricing plans with features comparison
4. **About** - Company mission, stats, values, and team section
5. **Contact** - Functional contact form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shaikmohammed-maaz/DevDudes.git
cd DevDudes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🛠️ Tech Stack

- **React 18.2** - UI library
- **Vite 5.0** - Build tool and dev server
- **React Router DOM 6.20** - Client-side routing
- **Framer Motion 10.16** - Animation library
- **CSS3** - Styling with custom properties

## 📁 Project Structure

```
DevDudes/
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── AnimatedSection.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and design system
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: Primary blue (#6B8CFF), coral accent (#FF7B6D)
- **Typography**: Inter font family with responsive sizing
- **Spacing**: Consistent spacing scale (xs to 3xl)
- **Components**: Reusable buttons, cards, and form elements

## ✨ Key Features

### Animations
- Page transition animations on route changes
- Scroll-triggered fade-in animations
- Hover effects on cards and buttons
- Smooth scrolling behavior

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for tablet/desktop
- Flexible grid layouts
- Optimized images

### Form Validation
- Contact form with required field validation
- Success message animation
- User-friendly error handling

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or feedback, please reach out through the contact form on the website.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React and Vite
