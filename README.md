# 🌿 Kavishka Dewduni — Personal Portfolio

A personal portfolio website built with React, showcasing my skills, projects, education, and journey as an undergraduate Software Engineering student.

## ✨ Features

- Typewriter hero animation with rotating role titles
- Scroll-triggered fade-in animations using `IntersectionObserver`
- Animated skill progress bars
- Responsive project showcase cards
- Downloadable résumé
- Scroll-responsive navigation bar
- Contact form integration with Web3Forms
- Fully responsive layout for desktop, tablet, and mobile

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18.2 |
| Styling | Custom CSS |
| Fonts | Playfair Display · DM Sans |
| Contact Form | Web3Forms |
| Animations | CSS transitions + IntersectionObserver |
| Deployment | Netlify / Vercel / GitHub Pages |

> This is a static frontend project. It does not include a Node.js or Express backend.

## 📁 Project Structure

```text
kavishka-portfolio/
├── package.json
├── README.md
└── client/
    ├── public/
    │   ├── index.html
    │   └── Kavishka-Dewduni-Resume.pdf
    └── src/
        ├── App.jsx
        ├── index.js
        ├── index.css
        ├── hooks/
        │   ├── useInView.js
        │   └── useTypewriter.js
        └── components/
            ├── About.jsx
            ├── Contact.jsx
            ├── Experience.jsx
            ├── FadeIn.jsx
            ├── Footer.jsx
            ├── Hero.jsx
            ├── Navbar.jsx
            ├── Projects.jsx
            ├── SectionHeader.jsx
            └── Skills.jsx
```

## 🧩 Sections

- **Hero** — Introduction, animated roles, and calls to action
- **About** — Personal summary, key highlights, and résumé download
- **Skills** — Programming languages, frameworks, and developer tools
- **Projects** — NextStep and SpareHubLK project showcases
- **Journey** — Education and certification timeline
- **Contact** — Web3Forms-powered contact form
- **Footer** — Social and résumé links

## 💼 Featured Projects

| Project | Description | Stack |
|---|---|---|
| NextStep | Centralized university management platform | React.js |
| SpareHubLK | Automotive parts e-commerce solution | PHP · MySQL · JavaScript |

## ⚙️ Getting Started

### Prerequisites

- Node.js 16 or later
- npm

### Installation

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm install
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 🚀 Production Build

```bash
npm run build
```

The production-ready files will be created in:

```text
client/build/
```

## 📬 Contact Form Setup

This project uses [Web3Forms](https://web3forms.com/) for contact form submissions.

1. Create a free Web3Forms account.
2. Get your access key.
3. Open `client/src/components/Contact.jsx`.
4. Replace:

```jsx
YOUR_WEB3FORMS_ACCESS_KEY
```

with your own Web3Forms access key.

## 📄 Résumé

My résumé can be downloaded directly from the website and is stored in:

```text
client/public/Kavishka-Dewduni-Resume.pdf
```

## 📬 Contact

**Kavishka Dewduni**

- Email: npkdewduni@students.nsbm.ac.lk
- LinkedIn: [kavishka-dewduni](https://www.linkedin.com/in/kavishka-dewduni/)
- GitHub: [kavishka608](https://github.com/kavishka608)
- Location: Sri Lanka

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
