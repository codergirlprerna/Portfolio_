# Prerna Portfolio — Setup in 10 Minutes

## STEP 1 — Run these commands in terminal

```bash
# 1. Clone/copy this folder, then:
npm install
npm run dev
# Opens at http://localhost:5173
```

---

## STEP 2 — Add YOUR photo

1. Take your photo (any .jpg or .png)
2. Rename it to → `prerna.jpg`
3. Put it in → `public/images/prerna.jpg`
4. Done. It shows automatically.

---

## STEP 3 — Add YOUR project screenshots

For each project, take a screenshot of the live site:
- Open your site in browser
- Press F12 → toggle device toolbar → set width 1440px
- Press Ctrl+Shift+P → type "screenshot" → click "Capture full size screenshot"
- Save the file

Then:
```
public/
  images/
    cricsense.png   ← screenshot of cricsense.in
    viberoom.png    ← screenshot of viberoom
    aria.png        ← screenshot of aria
    devforge.png    ← screenshot of devforge
    railbook.png    ← screenshot of railbook
    folio.png       ← screenshot of folio
    taskflow.png    ← screenshot of taskflow
```

---

## STEP 4 — Add YOUR resume

1. Export your resume as PDF from Word/Google Docs
2. Rename to → `resume.pdf`
3. Put it in → `public/resume.pdf`
4. The "Resume" button now downloads it automatically.

---

## STEP 5 — Set up contact form (EmailJS — FREE)

1. Go to https://emailjs.com → Sign up free
2. Click "Add New Service" → choose Gmail → connect your email
3. Click "Email Templates" → Create Template
   - Use these variables in your template:
     ```
     From: {{user_name}} ({{user_email}})
     Phone: {{user_phone}}
     Message: {{message}}
     ```
4. Go to Account → API Keys → copy your Public Key
5. Open `src/components/Contact.jsx`
6. Replace these 3 lines at the top:
   ```js
   const SERVICE_ID  = 'service_xxxxxx'   // from Email Services
   const TEMPLATE_ID = 'template_xxxxxx'  // from Email Templates
   const PUBLIC_KEY  = 'xxxxxxxxxxxx'     // from Account > API Keys
   ```
7. Done — form submissions go straight to your Gmail.

---

## STEP 6 — Deploy on Vercel (FREE, takes 2 minutes)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/prerna-portfolio.git
git push -u origin main

# 2. Go to vercel.com
# 3. Click "New Project" → Import from GitHub
# 4. Select your repo → click Deploy
# 5. Your site is live at: https://prerna-portfolio.vercel.app
```

---

## STEP 7 — Custom domain (optional, ~$10/year)

1. Buy `prerna.dev` on Namecheap.com
2. In Vercel → your project → Settings → Domains
3. Add `prerna.dev`
4. Copy the DNS records Vercel gives you
5. Paste them in Namecheap DNS settings
6. Wait 10 min → your portfolio is live at prerna.dev

---

## File reference

```
prerna-portfolio/
├── public/
│   ├── resume.pdf          ← YOUR RESUME
│   └── images/
│       ├── prerna.jpg      ← YOUR PHOTO
│       ├── cricsense.png   ← project screenshots
│       ├── viberoom.png
│       ├── aria.png
│       ├── devforge.png
│       ├── railbook.png
│       ├── folio.png
│       └── taskflow.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx        ← edit your name/bio here
│   │   ├── Stack.jsx       ← edit tech stack here
│   │   ├── Projects.jsx    ← edit project details here
│   │   ├── About.jsx       ← edit about text here
│   │   ├── Contact.jsx     ← add EmailJS keys here
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```
