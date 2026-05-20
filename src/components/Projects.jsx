// ── HOW TO ADD SCREENSHOTS ──────────────────────────────────
// 1. Open your live site → F12 → Ctrl+Shift+P → "Capture full size screenshot"
// 2. Save to:  public/images/cricsense.png  etc.
// 3. No imports needed — files in /public/ work as /images/name.png
// ────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    name: 'CricSense',
    url: 'https://www.cricsense.in',
    github: 'https://github.com/codergirlprerna',
    desc: 'IPL analytics — AI match predictions with confidence scores, key/risk factor explainability. Live scores, venue pitch reports, 2026 points table. 59+ matches.',
    detail: 'Built AI prediction engine with Firebase Firestore for real-time data, API integrations for live scores and pitch reports, Spring Boot REST backend, and a React dashboard.',
    tags: ['React', 'Tailwind CSS', 'Spring Boot', 'Firebase', 'Firestore', 'API Integration'],
    img: '/images/cricsense.png',
  },
  {
    id: 2,
    name: 'Viberoom',
    url: 'https://viberoom-deploy.vercel.app/',
    github: 'https://github.com/codergirlprerna',
    desc: 'Real-time synchronized music rooms. Zero-drift audio sync — every user hears the exact same millisecond. Mood rooms, shareable links, no account needed.',
    detail: 'Custom WebSocket sync algorithm, Firebase real-time listeners and Firestore for room state, host/guest management, latency compensation — all built from scratch.',
    tags: ['React', 'Tailwind CSS', 'WebSockets', 'Firebase', 'Firestore', 'Real-time'],
    img: '/images/viberoom.png',
  },
  {
    id: 3,
    name: 'ARIA — AI Life Assistant',
    url: 'https://buildsbyprerna.github.io/aria-ai-assistant/',
    github: 'https://github.com/codergirlprerna',
    desc: 'Multi-feature AI assistant on Telegram. Smart contextual chat, expense tracking, tech news digest, personalised morning briefing, job application tracker.',
    detail: 'Wired Claude + Gemini APIs, Firebase + Firestore for state, n8n automation workflows for daily briefings, auto follow-up reminders with cron triggers.',
    tags: ['React', 'Tailwind CSS', 'Claude API', 'Gemini', 'Firebase', 'Firestore', 'n8n'],
    img: '/images/aria.png',
  },
  {
    id: 4,
    name: 'DevForge',
    url: 'https://dev-forge-gamma.vercel.app/',
    github: 'https://github.com/codergirlprerna',
    desc: '12 developer tools in one — HTTP API tester, JSON formatter, JWT decoder, regex tester, code diff, password generator, Base64 encoder. No paywalls, no account required.',
    tags: ['React', 'Tailwind CSS', 'Spring Boot', 'Vite', '12 Tools', 'Client-side'],
detail: 'Spring Boot backend powers the API testing tool. Other 11 tools are fully client-side React + Vite — stateless, fast, and private.',
    img: '/images/devforge.png',
  },
  {
    id: 5,
    name: 'RailBook — Smart Train Booking',
    url: 'https://irctc-frontend-five.vercel.app/',
    github: 'https://github.com/codergirlprerna',
    desc: 'Weather-aware IRCTC booking system. Fuses live train schedule data with real-time weather forecasts at origin and destination. Know about delays before they happen.',
    detail: 'Spring Boot REST API backend, MySQL persistence, real-time train data API integration, live weather API fusion — no GIS, pure data-driven smart booking.',
    tags: ['React', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'Real-time Train API', 'Weather API'],
    img: '/images/railbook.png',
  },
  {
    id: 6,
    name: 'Folio',
    url: 'https://folio-prerna.vercel.app/',
    github: 'https://github.com/codergirlprerna',
    desc: 'Mood-based book discovery. 8 atmospheric reading rooms, AI "Life Mirror" matches books to your current emotional reality. 70,000+ free public domain classics.',
    detail: 'Gemini AI for reading personality analysis, Open Library API for 70K+ books, Firebase + Firestore for user state, emotion-to-genre mapping engine built in React.',
    tags: ['React', 'Tailwind CSS', 'Gemini AI', 'Firebase', 'Firestore', 'Open Library API'],
    img: '/images/folio.png',
  },
]

const TASKFLOW = {
  id: 7,
  name: 'TaskFlow',
  url: 'https://taskflow-rouge-alpha.vercel.app/',
  github: 'https://github.com/codergirlprerna',
  desc: 'Real-time collaborative task management. Priority queues, deadline tracking, instant Firebase sync across all collaborators, drag-and-drop Kanban, full filter and search.',
  detail: 'Production-ready from day one. Firebase + Firestore real-time listeners, multi-user collaboration state, priority queue algorithm, deadline notification system — all in React.',
  tags: ['React', 'Tailwind CSS', 'Firebase', 'Firestore', 'Real-time', 'Collaboration'],
  img: '/images/taskflow.png',
}

export default function Projects() {
  return (
    <section id="work" style={{ padding:'80px 48px', background:'var(--bg1)' }}>
      <div className="rv">
        <h2 style={{ fontSize:28, fontWeight:700, letterSpacing:'-.02em', marginBottom:6 }}>
          Featured Projects
        </h2>
        <p style={{ fontFamily:'var(--mono)', fontSize:14, color:'var(--muted)', marginBottom:36 }}>
          7 live products — all built solo, all in production
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i % 4 + 1} />
        ))}

        {/* TaskFlow — full-width featured card */}
        <a href={TASKFLOW.url} target="_blank" rel="noreferrer"
          className="rv d1"
          style={{
            gridColumn:'1/-1', display:'grid', gridTemplateColumns:'1fr 1fr',
            background:'var(--bg1)', border:'1px solid var(--border)',
            borderRadius:14, overflow:'hidden', textDecoration:'none', color:'inherit',
            transition:'border-color .22s, transform .22s, box-shadow .22s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor='var(--border2)'
            e.currentTarget.style.transform='translateY(-3px)'
            e.currentTarget.style.boxShadow='0 20px 56px rgba(0,0,0,.55)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor='var(--border)'
            e.currentTarget.style.transform='none'
            e.currentTarget.style.boxShadow='none'
          }}
        >
          <div style={{ overflow:'hidden', background:'var(--bg2)' }}>
            <img src={TASKFLOW.img} alt={TASKFLOW.name}
              style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top left', display:'block' }}/>
          </div>
          <CardBody project={TASKFLOW} wide />
        </a>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  return (
    <a href={project.url} target="_blank" rel="noreferrer"
      className={`rv d${delay}`}
      style={{
        background:'var(--bg1)', border:'1px solid var(--border)',
        borderRadius:14, overflow:'hidden', textDecoration:'none', color:'inherit',
        display:'block', transition:'border-color .22s, transform .22s, box-shadow .22s'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor='var(--border2)'
        e.currentTarget.style.transform='translateY(-3px)'
        e.currentTarget.style.boxShadow='0 20px 56px rgba(0,0,0,.55)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor='var(--border)'
        e.currentTarget.style.transform='none'
        e.currentTarget.style.boxShadow='none'
      }}
    >
      <div style={{ width:'100%', aspectRatio:'16/8', overflow:'hidden', background:'var(--bg2)' }}>
        <img src={project.img} alt={project.name}
          style={{ width:'100%', height:'100%', objectFit:'cover',
            objectPosition:'top left', display:'block', transition:'transform .5s' }}
          onMouseEnter={e => e.target.style.transform='scale(1.04) translateY(-5px)'}
          onMouseLeave={e => e.target.style.transform='none'}
        />
      </div>
      <CardBody project={project} />
    </a>
  )
}

function CardBody({ project, wide }) {
  return (
    <div style={{
      padding: wide ? 30 : 22,
      display:'flex', flexDirection:'column',
      justifyContent: wide ? 'center' : 'flex-start'
    }}>
      <div style={{
        fontSize: wide ? 22 : 18, fontWeight:700,
        letterSpacing:'-.02em', marginBottom:8, color:'var(--text)'
      }}>
        {project.name}
      </div>
      <div style={{ fontSize:14, color:'var(--muted)', lineHeight:1.75, marginBottom:12 }}>
        {project.desc}
      </div>
      {/* Technical detail box */}
      <div style={{
        background:'var(--bg2)', borderRadius:8, padding:'10px 14px',
        fontSize:13, color:'var(--muted)', lineHeight:1.65, marginBottom:14,
        borderLeft:'2px solid var(--border2)'
      }}>
        {project.detail}
      </div>
      {/* Tags */}
      <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:16 }}>
        {project.tags.map(t => (
          <span key={t} style={{
            fontFamily:'var(--sans)', fontSize:12, fontWeight:500,
            color:'var(--muted)', background:'var(--bg)',
            border:'1px solid var(--border2)',
            padding:'4px 10px', borderRadius:6
          }}>{t}</span>
        ))}
      </div>
      {/* Links */}
      <div style={{ display:'flex', gap:8 }}>
        <span style={{
          display:'inline-flex', alignItems:'center', gap:6,
          fontFamily:'var(--sans)', fontSize:13, fontWeight:500,
          color:'var(--live)', border:'1px solid rgba(74,222,128,.22)',
          padding:'6px 14px', borderRadius:6, background:'rgba(74,222,128,.05)'
        }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--live)', animation:'pulse 2s infinite' }}/>
          Live
        </span>
        <span style={{
          display:'inline-flex', alignItems:'center', gap:6,
          fontFamily:'var(--sans)', fontSize:13, fontWeight:500,
          color:'var(--muted)', border:'1px solid var(--border2)',
          padding:'6px 14px', borderRadius:6, background:'var(--bg)'
        }}>
          GitHub →
        </span>
      </div>
    </div>
  )
}
