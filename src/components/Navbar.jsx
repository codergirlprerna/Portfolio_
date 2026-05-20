import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('')

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

  const links = [
    { id: 'stack', label: 'Stack' },
    { id: 'work',  label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:200,
      height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 48px',
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

      {/* Nav links */}
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

      {/* Right */}
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <div style={{
          display:'flex', alignItems:'center', gap:7,
          fontFamily:'var(--sans)', fontSize:13, color:'var(--live)',
          background:'rgba(74,222,128,.07)', border:'1px solid rgba(74,222,128,.2)',
          padding:'6px 14px', borderRadius:6
        }}>
          <span className="pulse-dot" style={{
            width:6, height:6, borderRadius:'50%', background:'var(--live)'
          }} />
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
    </nav>
  )
}
