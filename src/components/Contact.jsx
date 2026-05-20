import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// ── EmailJS Setup (free) ────────────────────────────────────
// 1. Go to https://emailjs.com → sign up free
// 2. Add Service (Gmail) → copy SERVICE_ID
// 3. Create Template → copy TEMPLATE_ID  
// 4. Account → API Keys → copy PUBLIC_KEY
// 5. Replace the 3 values below:
const SERVICE_ID  = 'service_k43f5dc'
const TEMPLATE_ID = 'template_pysm34i'
const PUBLIC_KEY  = 'dO43cSyL35hoBHcY-'
// ────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => setStatus('sent'))
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" style={{ padding:'80px 48px', background:'var(--bg1)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'start' }}>

        {/* Left */}
        <div className="rv">
          <h2 style={{
            fontSize:36, fontWeight:700, letterSpacing:'-.03em',
            marginBottom:14, lineHeight:1.1
          }}>
            Get in <span style={{ color:'var(--accent)' }}>Touch</span>
          </h2>
          <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.8, marginBottom:10 }}>
            Open to full-time roles, freelance projects, and interesting collaborations.
            If you ship real software, I want to be part of it.
          </p>
          <a href="mailto:khannaprerna030@gmail.com" style={{
            fontFamily:'var(--mono)', fontSize:14, color:'var(--accent)', textDecoration:'none'
          }}>
            khannaprerna030@gmail.com
          </a>

          <div style={{
            fontFamily:'var(--sans)', fontSize:13, fontWeight:600, color:'var(--dim)',
            letterSpacing:'.05em', textTransform:'uppercase', marginTop:24, marginBottom:12
          }}>
            Follow me
          </div>

          <div style={{ display:'flex', gap:8 }}>
            {[
              {
                href:'https://github.com/codergirlprerna',
                icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--muted)"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              },
              {
                href:'https://www.linkedin.com/in/codergirlprerna/',
                icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--muted)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              },
              {
                href:'mailto:khannaprerna030@gmail.com',
                icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                width:40, height:40, background:'var(--bg1)', border:'1px solid var(--border2)',
                borderRadius:8, display:'grid', placeItems:'center', textDecoration:'none',
                transition:'border-color .2s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor='rgba(255,255,255,.22)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='var(--border2)'}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div style={{ marginTop:24 }}>
            <a href="/resume.pdf" download="Prerna_Resume.pdf" style={{
              display:'inline-flex', alignItems:'center', gap:7,
              fontFamily:'var(--sans)', fontSize:14, fontWeight:600,
              color:'#000', background:'var(--accent)', border:'1px solid var(--accent)',
              padding:'10px 20px', borderRadius:7, textDecoration:'none'
            }}>
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="rv d2">
          <form ref={formRef} onSubmit={handleSubmit}
            style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
              <input name="user_name"  type="text"  placeholder="Full Name"  required style={inp}/>
              <input name="user_phone" type="tel"   placeholder="Phone No"           style={inp}/>
            </div>
            <input   name="user_email" type="email" placeholder="Email"      required style={inp}/>
            <textarea name="message"   placeholder="Message"                 required
              style={{ ...inp, resize:'vertical', minHeight:110 }}/>
            <button type="submit" style={{
              width:'100%', background:'var(--text)', color:'#000',
              border:'none', padding:14, borderRadius:8,
              fontSize:15, fontWeight:600, fontFamily:'var(--sans)', cursor:'pointer',
              transition:'opacity .2s'
            }}>
              {status==='sending' ? 'Sending...' : status==='sent' ? '✓ Message Sent!' : status==='error' ? 'Error — try email directly' : 'Submit'}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

const inp = {
  width:'100%', background:'var(--bg1)', border:'1px solid var(--border2)',
  borderRadius:8, padding:'12px 16px', fontSize:14, color:'var(--text)',
  fontFamily:'var(--sans)', outline:'none', transition:'border-color .2s'
}
