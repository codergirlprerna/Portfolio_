import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const secs = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let cur = ''
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 110) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on link click
  const handleLink = () => setMenuOpen(false)

  const links = [
    { id: 'stack',   label: 'Stack' },
    { id: 'work',    label: 'Projects' },
    { id: 'about',   label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:200,
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0 24px',
        borderBottom:'1px solid var(--border)',
        background:'rgba(10,10,10,.92)', backdropFilter:'blur(20px)'
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily:'var(--sans)', fontSize:16, fontWeight:600,
          color:'var(--text)', textDecoration:'none',
          display:'flex', alignItems:'center', gap:10
        }}>
          <span style={{
            width:28, height:28, background:'var(--accent)', borderRadius:6,
            display:'grid', placeItems:'center',
            fontSize:12, fontWeight:700, color:'#000', fontFamily:'var(--mono)'
          }}>p</span>
          Prerna
        </a>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display:'flex', gap:4 }}>
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} style={{
                fontFamily:'var(--sans)', fontSize:15, textDecoration:'none',
                padding:'6px 16px', borderRadius:6,
                color: active === l.id ? 'var(--text)' : 'var(--muted)',
                background: active === l.id ? 'var(--bg2)' : 'transparent',
                fontWeight: active === l.id ? 500 : 400,
                transition:'color .15s, background .15s'
              }}>
                {l.label}
              </a>
            ))}
          </div>
        )}

        {/* Desktop right */}
        {!isMobile && (
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{
              display:'flex', alignItems:'center', gap:7,
              fontFamily:'var(--sans)', fontSize:13, color:'var(--live)',
              background:'rgba(74,222,128,.07)', border:'1px solid rgba(74,222,128,.2)',
              padding:'6px 14px', borderRadius:6
            }}>
              <span className="pulse-dot" style={{ width:6, height:6, borderRadius:'50%', background:'var(--live)' }} />
              Available for work
            </div>
            <a href="mailto:khannaprerna030@gmail.com" style={{
              fontFamily:'var(--sans)', fontSize:14, fontWeight:600,
              color:'#000', background:'var(--accent)',
              padding:'8px 20px', borderRadius:6, textDecoration:'none'
            }}>
              Hire Me →
            </a>
          </div>
        )}

        {/* Mobile: Hire Me + Hamburger */}
        {isMobile && (
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <a href="mailto:khannaprerna030@gmail.com" style={{
              fontFamily:'var(--sans)', fontSize:13, fontWeight:600,
              color:'#000', background:'var(--accent)',
              padding:'7px 14px', borderRadius:6, textDecoration:'none'
            }}>
              Hire Me
            </a>
            <button onClick={() => setMenuOpen(o => !o)} style={{
              background:'none', border:'1px solid var(--border2)',
              borderRadius:6, padding:'6px 8px', cursor:'pointer',
              display:'flex', flexDirection:'column', gap:4
            }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display:'block', width:18, height:1.5,
                  background:'var(--text)', borderRadius:1
                }}/>
              ))}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position:'fixed', top:60, left:0, right:0, zIndex:199,
          background:'rgba(10,10,10,.97)', backdropFilter:'blur(20px)',
          borderBottom:'1px solid var(--border)',
          display:'flex', flexDirection:'column', padding:'8px 0'
        }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={handleLink} style={{
              fontFamily:'var(--sans)', fontSize:16, textDecoration:'none',
              padding:'14px 24px',
              color: active === l.id ? 'var(--text)' : 'var(--muted)',
              borderBottom:'1px solid var(--border)'
            }}>
              {l.label}
            </a>
          ))}
          <div style={{
            padding:'14px 24px', display:'flex', alignItems:'center', gap:8,
            fontFamily:'var(--sans)', fontSize:13, color:'var(--live)'
          }}>
            <span className="pulse-dot" style={{ width:6, height:6, borderRadius:'50%', background:'var(--live)' }} />
            Available for work
          </div>
        </div>
      )}
    </>
  )
}
