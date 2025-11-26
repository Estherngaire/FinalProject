# **Pure Canvas**

### **Live Demo**

{https://final-project-git-main-esthers-projects-d758b7bb.vercel.app} 

# **Project Overview**

This project represents a modern fashion brand offering stylish, contemporary clothing and accessories for both men and women. The website highlights the brand’s visual identity through a clean layout, engaging product imagery, and smooth navigation across all screen sizes.
The platform aims to build a strong brand presence while giving users a simple, responsive, and enjoyable browsing experience.

# **Brand Identity**

## **Color System**

* **Primary – Purple (#A855F7 or your shade):** Used for hero sections, call-to-action areas, and high-impact visuals to reflect creativity, elegance, and modern style.
* **Secondary – Gray (#6B7280 or your shade):** Used for text, backgrounds, and supporting UI elements to create balance, readability, and a minimal aesthetic.
* **Accent Colors:** Subtle variations of purple and gray applied for section dividers, hover states, or borders to maintain consistency.
* **Neutral Light:** Light gray/white for clean spacing and contrast.
* **Neutral Dark:** Dark gray for typography and depth.

---

# **Typography**

* **Headings – [Bold ]:** Selected for boldness and clarity, ensuring titles and section headers stand out across all screen sizes.
* **Body Text – [lg:3xl md:2xl sm:xl]:** Chosen for readability and smooth scaling on small and large devices, creating a clean reading experience.

---

# **Design Decisions**

### **Layout Adherence**

* Spacing and alignment follow a 4px–8px grid system for consistency.
* Tailwind utility classes were used to maintain predictable spacing across SM and MD breakpoints.
* Component width and height were tested using Chrome DevTools to ensure perfect display on mobile and tablet screens.

### **Tools Used for Design Accuracy**

* Figma mockups (if applicable)
* Chrome DevTools responsive mode
* Tailwind’s built-in spacing scale

---

# **Creative Departures**

* A mixture of **purple and gray** was intentionally used to create a modern, premium feel while avoiding monotony.
* Hero sections use bold purple backgrounds, while product grids and text sections alternate between gray and white for contrast.
* The content strategy focuses on minimal wording and strong visuals to reinforce brand identity.

# **Component Architecture**

* **Reusable Components:**
The project uses a component-driven structure for reusability and maintainability. Key reusable components include:

**ProductCard**

Displays product image, name, and description with consistent layout and styling.

**Button**

A custom button component used across the site for consistency in interaction and styling.

**ResponsiveImage**

A lazy-loading image component built using React.memo to improve performance and prevent re-renders.

* Components were separated for better maintainability and reduced code duplication.
* Props were used to customize content and styling where needed.

---

# **Performance Optimizations**

* Lazy loading images using a custom `ResponsiveImage` component.
* Memoized heavy visual components using `React.memo`.
* Removed unused imports and minimized console logs.
* Optimized image sizes for faster load speeds.
* Tailwind JIT compilation reduces unused CSS.

---

# **Image Credits**

Some images were sourced from:

* **Pinterest** – for product inspiration visuals
* **Pexels** – for high-quality royalty-free images

# **Installation & Setup**

Installation & Setup

This project was created using Vite, then developed locally before being pushed to GitHub.

To set up the project locally:
# Clone the repository
git clone https://github.com/yourusername/yourrepo.git

# Navigate into the project folder
cd yourrepo

# Install dependencies
npm install

# Start the development server
npm run dev

# Project Creation

I originally created the project with:

npm create vite@latest


Then selected:

Framework: React

Variant: JavaScript

After development, i pushed the project to GitHub using:

git init 

git add .

git commit -m "Initial commit"

git remote add origin <repo-url>


git push -u origin main
---

# **Technologies Used**

* **React** (Vite)
* **Tailwind CSS v4+**
* **JavaScript (ES6+)**
* **React.memo for optimization**

---

# **Challenges & Solutions**

### 1. **Responsive Layout Issues**

**Challenge:** Components did not align properly at MD breakpoint.
**Solution:** Used Tailwind grid utilities (`grid-cols-1`, `md:grid-cols-2`) and tested spacing using DevTools.

### 2. **Image Sizing & Distortion**

**Challenge:** Large images were stretching on mobile.
**Solution:** Implemented a `ResponsiveImage` component with object-cover styles and lazy loading.

### 3. **Color Balance**

**Challenge:** Too much purple or gray made sections feel heavy.
**Solution:** Alternated colors strategically—purple for hero highlights, gray for background sections, and white for readability.

---

# **Future Improvements**

* Add product detail pages and filter/sort features.
* Implement an interactive cart system.
* Add micro-animations.
* Improve SEO and metadata for better visibility.
* Add dark mode support.
