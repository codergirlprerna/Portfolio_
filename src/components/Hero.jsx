import { useEffect, useState } from 'react'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const n = new Date()
      const ist = new Date(n.getTime() + ((330 + n.getTimezoneOffset()) * 60000))
      let h = ist.getHours(), m = ist.getMinutes(), ap = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      setTime(`${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m} ${ap}  // same time`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      padding:'100px 24px 70px', position:'relative', overflow:'hidden'
    }}>
      <div style={{
        position:'absolute', width:700, height:500, borderRadius:'50%',
        background:'radial-gradient(ellipse,rgba(232,213,176,.04) 0%,transparent 70%)',
        top:'40%', left:'30%', transform:'translate(-50%,-50%)', pointerEvents:'none'
      }}/>

      <div style={{ position:'relative', zIndex:1, maxWidth:820, width:'100%' }}>

        {/* Profile row */}
        <div className="rv" style={{ display:'flex', alignItems:'center', gap:18, marginBottom:28, flexWrap:'wrap' }}>
          <div style={{
            width:72, height:72, borderRadius:14,
            border:'1px solid var(--border2)', overflow:'hidden', flexShrink:0
          }}>
            <img src="/images/prerna.jpg" alt="Prerna"
              style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}/>
          </div>
          <div>
            <div style={{
              fontSize:'clamp(28px,6vw,38px)', fontWeight:800, letterSpacing:'-.03em', lineHeight:1,
              marginBottom:6, display:'flex', alignItems:'center', gap:10, flexWrap:'wrap'
            }}>
              Prerna
              <span style={{
                fontFamily:'var(--sans)', fontSize:12, color:'var(--live)',
                background:'rgba(74,222,128,.08)', border:'1px solid rgba(74,222,128,.2)',
                padding:'4px 10px', borderRadius:20,
                display:'inline-flex', alignItems:'center', gap:6, fontWeight:500
              }}>
                <span className="pulse-dot" style={{ width:6, height:6, borderRadius:'50%', background:'var(--live)' }}/>
                Available for work
              </span>
            </div>
            <div style={{ fontSize:15, color:'var(--muted)', fontWeight:400 }}>Full-Stack Developer</div>
          </div>
        </div>

        {/* Info grid */}
        <div className="rv d1" style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))',
          gap:1,
          background:'var(--border)', border:'1px solid var(--border)',
          borderRadius:12, overflow:'hidden', marginBottom:24
        }}>
          {[
            { ic:'</>',  val:'Full-Stack Developer' },
            { ic:'🕐',   val: time, mono: true },
            { ic:'📍',   val:'India' },
            { ic:'🌐',   val:'Remote-first · Open to relocation' },
            { ic:'✉',    val:'khannaprerna030@gmail.com' },
            { ic:'💼',   val:'7 live products shipped solo' },
          ].map(({ ic, val, mono }, i) => (
            <div key={i} style={{
              background:'var(--bg1)', padding:'12px 18px',
              display:'flex', alignItems:'center', gap:12,
              fontSize:14, color:'var(--muted)'
            }}>
              <span style={{ fontSize:14, minWidth:18, opacity:.5 }}>{ic}</span>
              <span style={{
                color:'var(--text)',
                fontFamily: mono ? 'var(--mono)' : 'inherit',
                fontSize: mono ? 12 : 14,
                fontWeight: 400,
                wordBreak:'break-all'
              }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Bio */}
        <p className="rv d2" style={{
          fontSize:'clamp(13px,2vw,16px)', color:'var(--muted)', lineHeight:1.85,
          marginBottom:24, maxWidth:720, fontFamily:'var(--mono)'
        }}>
          I build real, deployed products using{' '}
          <TechBadge color="#61dafb">React</TechBadge>,{' '}
          <TechBadge color="#6db33f">Spring Boot</TechBadge>, and{' '}
          <TechBadge color="#00758f">MySQL</TechBadge>.{' '}
          Not demos, not clones.{' '}
          <strong style={{ color:'var(--text)', fontWeight:600 }}>
            Real products, in production, right now.
          </strong>{' '}
          I specialise in real-time systems, GIS, and AI-integrated full-stack apps.
          I thrive on shipping fast — and maintaining what I build.
        </p>

        {/* Action buttons */}
        <div className="rv d3" style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
          <a href="/resume.pdf" download="Prerna_Resume.pdf" style={btnPrimary}>📄 Resume</a>
          <a href="#contact" style={btnGhost}>✉ Contact</a>
          <a href="https://github.com/codergirlprerna" target="_blank" rel="noreferrer" style={btnGhost}>&lt;/&gt; GitHub</a>
          <div style={{ width:1, height:38, background:'var(--border2)', margin:'0 4px' }}/>
          <IconBtn href="https://github.com/codergirlprerna" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </IconBtn>
          <IconBtn href="https://www.linkedin.com/in/codergirlprerna/" title="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </IconBtn>
          <IconBtn href="mailto:khannaprerna030@gmail.com" title="Email">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </IconBtn>
        </div>

      </div>
    </section>
  )
}

function TechBadge({ color, children }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:5,
      background:'var(--bg2)', border:'1px solid var(--border2)',
      padding:'3px 10px 3px 6px', borderRadius:5,
      fontFamily:'var(--mono)', fontSize:12, color:'var(--text)',
      verticalAlign:'middle', margin:'0 2px'
    }}>
      <span style={{ width:8, height:8, borderRadius:2, background:color, display:'inline-block', flexShrink:0 }}/>
      {children}
    </span>
  )
}

const btnPrimary = {
  display:'inline-flex', alignItems:'center', gap:7,
  fontFamily:'var(--sans)', fontSize:14, fontWeight:600,
  color:'#000', background:'var(--accent)', border:'1px solid var(--accent)',
  padding:'9px 18px', borderRadius:7, textDecoration:'none', cursor:'pointer'
}
const btnGhost = {
  display:'inline-flex', alignItems:'center', gap:7,
  fontFamily:'var(--sans)', fontSize:14, fontWeight:500,
  color:'var(--text)', background:'var(--bg1)', border:'1px solid var(--border2)',
  padding:'9px 18px', borderRadius:7, textDecoration:'none', cursor:'pointer'
}

function IconBtn({ href, title, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title} style={{
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      width:40, height:40, background:'var(--bg1)', border:'1px solid var(--border2)',
      borderRadius:7, textDecoration:'none', color:'var(--muted)'
    }}>
      {children}
    </a>
  )
}
