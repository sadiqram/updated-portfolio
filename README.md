# Modern Portfolio Website

A sleek, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a modern design with dark/light theme support, smooth animations, and mobile responsiveness.

![Portfolio Preview](public/img/portfolio_preview.png)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: System-aware theme with manual toggle option
- **Modern UI Components**:
  - Animated navigation with active state indicators
  - Mobile-friendly navigation dock
  - Smooth page transitions
  - Interactive project cards
  - Skill icons with tooltips
  - Contact form with validation
- **Performance Optimized**:
  - Next.js 14 App Router
  - Server and Client Components
  - Optimized images using Next.js Image component
  - Lazy loading for better performance
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/)
  - CSS Variables for theming
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) - Headless UI components
  - [Shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- **Icons**:
  - [React Icons](https://react-icons.github.io/react-icons/)
  - Custom SVG icons
- **Animation**: CSS transitions and transforms
- **Development Tools**:
  - ESLint
  - Prettier
  - Git

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sadiqram/updated-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd updated-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── app/                  # Next.js 14 app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Feature-specific components
├── public/             # Static assets
│   ├── img/            # Images
│   └── ...             # Other static files
├── styles/             # Global styles
└── lib/               # Utility functions and configurations
```

## 🎨 Customization

### Themes

The website uses CSS variables for theming. You can modify the colors in `app/globals.css`:

```css
:root {
  --color-primary: #ff004f;
  --color-bg-dark: #000000;
  --color-bg-light: #ffffff;
  /* ... other variables */
}
```

### Content

Update your personal information and projects in the respective components:

- `components/Projects.tsx` - Add/modify projects
- `components/Skills.tsx` - Update skills
- `components/About.tsx` - Edit about section
- `components/Contact.tsx` - Configure contact information

## 📱 Mobile Support

The website includes:

- Responsive layout using Tailwind CSS breakpoints
- Mobile navigation dock for easy access
- Touch-friendly interactions
- Optimized images for mobile devices

## 🔍 SEO

- Meta tags for better SEO
- Semantic HTML structure
- Optimized for social media sharing
- Fast loading times

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Sadiq Ramanu - [LinkedIn](https://linkedin.com/in/ramanu-sadiq)

Project Link: [https://github.com/sadiqram/updated-portfolio](https://github.com/sadiqram/updated-portfolio)
