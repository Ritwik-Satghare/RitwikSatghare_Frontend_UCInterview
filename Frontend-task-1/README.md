**EduMate – Pixel‑Perfect Frontend Challenge**

**Overview**
EduMate is a static frontend project assigned by the DJS Unicode Committee. The goal is to pixel‑perfectly recreate the EduMate landing page, login page, and signup page based on a Figma design—using only plain HTML and CSS (no frameworks beyond Google Fonts and Font Awesome). Focus areas include clean markup, readable styles, and seamless responsiveness for mobile, tablet, and desktop.

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [Design Reference](#design-reference)
3. [Folder Structure](#folder-structure)
4. [Technologies Used](#technologies-used)
5. [Usage](#usage)
6. [Responsive Breakpoints](#responsive-breakpoints)
7. [Customization](#customization)
8. [Author](#author)

---

## Project Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd edumate-frontend
   ```
2. **Dependencies**
   None—this is a purely static site.
3. **Run Locally**

   * Open `index.html` directly in your browser, or
   * Start a simple HTTP server (e.g., Live Server in VS Code) for auto‑reload.

---

## Design Reference

* **Figma File**: [Unicode Task 1 – EduMate Landing Page](https://www.figma.com/design/R4BnQdys0WbqtA1VAIj9Rk/Unicode-Task1?node-id=0-1&t=1HqtCyQiz4UfX8y6-1)

---

## Folder Structure

```
edumate-frontend/
├── index.html       # Landing page
├── login.html       # Login page
├── signin.html      # Signup page
├── styles.css       # Global styles
├── images/          # All image assets
│   ├── Landing page.png
│   ├── hero-image.png
│   ├── trust-logo-1.png
│   ├── ...
│   ├── google-play.png
│   └── app-store.png
└── README.md        # Project documentation
```

---

## Technologies Used

* **HTML5** for semantic, accessible markup
* **CSS3** (Flexbox, media queries) for layout and responsiveness
* **Google Fonts**: Oswald, Roboto, Source Sans Pro
* **Font Awesome** for icons

---

## Usage

1. Open the project folder in your code editor.
2. Launch `index.html` in your browser (or via Live Server).
3. Use the header buttons to navigate between pages.
4. Resize the viewport to test mobile, tablet, and desktop layouts.

---

## Responsive Breakpoints

* **Mobile**: up to 767px wide
* **Tablet**: 768px to 1439px
* **Desktop**: 1440px and above

*All major sections (header, hero, courses, community, feedback, footer) adapt fluidly.*

---

## Customization

* **Colors**: Update CSS variables or component rules in `styles.css`.
* **Assets**: Replace images in the `images/` folder—maintain filenames or update paths.
* **Fonts**: Modify the Google Fonts `<link>` in each HTML file.

---

## Author

**Ritwik Harshal Satghare**
