import { useEffect, useRef } from 'react'

const SKILLS = [
  { label:'React / JS',     pct:92 },
  { label:'Spring Boot',    pct:85 },
  { label:'MySQL',          pct:80 },
  { label:'AI Integration', pct:88 },
  { label:'Real-time / WS', pct:82 },
  { label:'Firebase',       pct:85 },
]

const INFO = [
  { label:'Status',          val:'Open to full-time & freelance', live:true },
  { label:'Location',        val:'India · Remote-first · Open to relocation' },
  { label:'Focus',           val:'Full-stack · Real-time · AI · Firebase' },
  { label:'Products shipped',val:'7 live (all solo)' },
  { label:'Email',           val:'khannaprerna030@gmail.com', href:'mailto:khannaprerna030@gmail.com' },
  { label:'GitHub',          val:'github.com/codergirlprerna', href:'https://github.com/codergirlprerna' },
  { label:'LinkedIn',        val:'linkedin.com/in/codergirlprerna', href:'https://www.linkedin.com/in/codergirlprerna/' },
  { label:'Resume',          val:'Download PDF →', href:'/resume.pdf', download:true },
]

export default function About() {
  const barsRef = useRef(null)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.querySelectorAll('.bar-fill').forEach(b => {
            b.style.transform = `scaleX(${b.dataset.w})`
          })
          io.disconnect()
        }
      })
    }, { threshold:.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" style={{ padding:'80px 48px' }}>
      <div className="rv">
        <h2 style={{ fontSize:28, fontWeight:700, letterSpacing:'-.02em', marginBottom:6 }}>About Me</h2>
        <p style={{ fontFamily:'var(--mono)', fontSize:14, color:'var(--muted)', marginBottom:36 }}>
          the person behind the keyboard
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:72, alignItems:'start' }}>

        {/* Left */}
        <div className="rv d1">
          <div style={{
            fontSize:'clamp(22px,2.5vw,30px)', fontWeight:700,
            letterSpacing:'-.025em', lineHeight:1.4, marginBottom:20
          }}>
            "Companies say freshers have no experience.<br/>
            <span style={{ color:'var(--accent)' }}>My 7 live products say otherwise."</span>
          </div>

          <div style={{ fontSize:15, color:'var(--muted)', lineHeight:1.9 }}>
            <p>I'm a full-stack developer who builds <strong style={{color:'var(--text)',fontWeight:600}}>real, deployed products</strong> — not homework assignments or tutorial clones. Every project is live right now, built entirely solo.</p>
            <p style={{marginTop:14}}>My stack runs from <strong style={{color:'var(--text)',fontWeight:600}}>React UIs</strong> through <strong style={{color:'var(--text)',fontWeight:600}}>Spring Boot microservices</strong>, backed by <strong style={{color:'var(--text)',fontWeight:600}}>MySQL + Firebase + Firestore</strong>, and wired with real-time WebSockets and AI integrations from Claude, Gemini, and Groq.</p>
            <p style={{marginTop:14}}>I don't stop at "it works locally." I ship, iterate, and maintain. Looking for a team that values what you've <strong style={{color:'var(--text)',fontWeight:600}}>actually built</strong>.</p>
          </div>

          {/* Skill bars */}
          <div ref={barsRef} style={{ marginTop:28, display:'flex', flexDirection:'column', gap:14 }}>
            {SKILLS.map(s => (
              <div key={s.label} style={{ display:'flex', alignItems:'center', gap:14 }}>
                <span style={{ fontFamily:'var(--mono)', fontSize:12, color:'var(--muted)', minWidth:120 }}>
                  {s.label}
                </span>
                <div style={{ flex:1, height:1, background:'var(--bg3)', borderRadius:1, overflow:'hidden' }}>
                  <div className="bar-fill" data-w={s.pct / 100}/>
                </div>
                <span style={{ fontFamily:'var(--mono)', fontSize:11, color:'var(--dim)', minWidth:28, textAlign:'right' }}>
                  {s.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="rv d2">
          <div style={{
            border:'1px solid var(--border)', borderRadius:12, overflow:'hidden',
            display:'flex', flexDirection:'column', gap:1, background:'var(--border)'
          }}>
            {INFO.map(row => (
              <div key={row.label}
                style={{ background:'var(--bg1)', padding:'14px 20px', transition:'background .15s' }}
                onMouseEnter={e => e.currentTarget.style.background='var(--bg2)'}
                onMouseLeave={e => e.currentTarget.style.background='var(--bg1)'}
              >
                <div style={{
                  fontFamily:'var(--mono)', fontSize:10, color:'var(--dim)',
                  letterSpacing:'.12em', textTransform:'uppercase', marginBottom:5
                }}>
                  {row.label}
                </div>
                <div style={{ fontSize:14, fontWeight:500, color:'var(--text)' }}>
                  {row.href ? (
                    <a href={row.href}
                      target={row.download ? undefined : '_blank'}
                      rel="noreferrer"
                      download={row.download ? 'Prerna_Resume.pdf' : undefined}
                      style={{ color:'var(--accent)', textDecoration:'none' }}>
                      {row.val}
                    </a>
                  ) : (
                    <span>
                      {row.live && (
                        <span style={{
                          display:'inline-block', width:7, height:7,
                          borderRadius:'50%', background:'var(--live)',
                          marginRight:8, animation:'pulse 2s infinite'
                        }}/>
                      )}
                      {row.val}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
