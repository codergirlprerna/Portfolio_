export default function Stack() {
  const techs = [
    { label:'React',        icon:'⚛️' },
    { label:'Spring Boot',  icon:'🍃' },
    { label:'Java',         icon:'☕' },
    { label:'MySQL',        icon:'🐬' },
    { label:'Firebase',     icon:'🔥' },
    { label:'Tailwind CSS', icon:'🎨' },
    { label:'Vite',         icon:'⚡' },
    { label:'WebSockets',   icon:'🔌' },
    { label:'GIS / Leaflet',icon:'🗺️' },
    { label:'n8n',          icon:'⚙️' },
    { label:'Redis',        icon:'🔴' },
    { label:'Supabase',     icon:'🟢' },
    { label:'Docker',       icon:'🐳' },
    { label:'Vercel',       icon:'▲'  },
    { label:'REST APIs',    icon:'📬' },
    { label:'Postman',      icon:'🔧' },
    { label:'Git / GitHub', icon:'📦' },
  ]

  return (
    <section id="stack" style={{ padding:'80px 48px' }}>
      <div className="rv">
        <h2 style={{
          fontSize:28, fontWeight:700, letterSpacing:'-.02em', marginBottom:6
        }}>Tech Stack</h2>
        <p style={{
          fontFamily:'var(--mono)', fontSize:14, color:'var(--muted)', marginBottom:36
        }}>
          the tech arsenal behind my builds!
        </p>
      </div>

      <div className="rv d1" style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {techs.map(t => (
          <span key={t.label} style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontFamily:'var(--sans)', fontSize:14, fontWeight:500,
            color:'var(--muted)',
            background:'var(--bg2)', border:'1px solid var(--border2)',
            padding:'8px 16px', borderRadius:8, cursor:'default',
            transition:'border-color .2s, color .2s, background .2s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)'
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.background = 'var(--bg3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border2)'
            e.currentTarget.style.color = 'var(--muted)'
            e.currentTarget.style.background = 'var(--bg2)'
          }}
          >
            <span style={{ fontSize:16 }}>{t.icon}</span>
            {t.label}
          </span>
        ))}
      </div>
    </section>
  )
}
