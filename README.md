# Iniyan Anbarasu — Portfolio (Create React App)

## 🚀 Stack
React 18 · Create React App · CSS per component · Google Fonts (Oswald + Cinzel)

## 📁 Source Structure
```
src/
├── components/     Navbar · Hero · Achievements · About
│                   Experience · Skills · Certifications
│                   Education · Contact · Footer
│                   (each has .js + .css)
├── data/
│   └── content.js  ← edit all resume content here
├── hooks/
│   └── useScrollReveal.js
├── styles/
│   └── globals.css ← design tokens (#29378C / #29BAED)
├── App.js
└── index.js
public/
└── self.png        ← profile photo
```

## 🔧 Run locally
```bash
npm install
npm start      # http://localhost:3000
npm run build  # → build/ folder
```

## 🌐 Deploy to Vercel
1. Push to GitHub
2. Import repo on vercel.com
3. Framework preset → **Create React App** (auto-detected)
4. No extra config needed — deploy ✓

## ✏️ Update content
Edit `src/data/content.js` — all sections pull from this single file.
