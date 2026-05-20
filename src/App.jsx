import { useEffect } from 'react'
import './index.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Stack    from './components/Stack'
import Projects from './components/Projects'
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {

  // Custom cursor
  useEffect(() => {
    const dot  = document.getElementById('dot')
    const ring = document.getElementById('ring')
    let mx = window.innerWidth/2, my = window.innerHeight/2
    let rx = mx, ry = my
    const onMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)
    const animate = () => {
      rx += (mx-rx)*.13; ry += (my-ry)*.13
      dot.style.left  = mx+'px'; dot.style.top  = my+'px'
      ring.style.left = rx+'px'; ring.style.top = ry+'px'
      requestAnimationFrame(animate)
    }
    animate()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on') }),
      { threshold:.07 }
    )
    document.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div id="dot"/>
      <div id="ring"/>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <div style={{ height:1, background:'var(--border)' }}/>
      <Stack/>
      <div style={{ height:1, background:'var(--border)' }}/>
      <Projects/>
      <div style={{ height:1, background:'var(--border)' }}/>
      <About/>
      <div style={{ height:1, background:'var(--border)' }}/>
      <Contact/>
      <Footer/>
    </>
  )
}

function Marquee() {
  const items = [
    'React','Spring Boot','MySQL','Firebase','Firestore','WebSockets',
    'GIS / Maps','Claude API','Gemini','n8n','Supabase','Docker',
    'Vercel','Redis','Java','Tailwind CSS','REST APIs'
  ]
  const doubled = [...items, ...items]
  return (
    <div style={{
      borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)',
      overflow:'hidden', padding:'12px 0', background:'var(--bg1)'
    }}>
      <div className="mq-track" style={{ display:'flex', width:'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontFamily:'var(--mono)', fontSize:11, color:'var(--dim)',
            letterSpacing:'.1em', textTransform:'uppercase',
            padding:'0 24px', borderRight:'1px solid var(--border)', whiteSpace:'nowrap'
          }}>
            <span style={{
              width:3, height:3, borderRadius:'50%',
              background:'var(--accent)', flexShrink:0
            }}/>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
