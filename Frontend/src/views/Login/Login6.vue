<template>
  <div id="app" class="spiritual-root">
    <div class="radiance-bg">
      <div class="sun-orb"></div>
      <div class="morning-mist"></div>
      <div class="energy-lines"></div>
    </div>

    <div v-if="!isAuthenticated" class="split-layout">
      
      <section class="visual-pillar">
        <div class="branding-top">
          <img src="https://www.integratedindia.in/assets/img/gip-logo.png" alt="Integrated" class="logo-clean">
          <div class="mantra-text">UNITY • INTEGRITY • GROWTH</div>
        </div>

        <div class="symbolic-center">
          <div class="sun-mandala">
            <div class="ring r1"></div>
            <div class="ring r2"></div>
            <div class="ring r3"></div>
            <div class="core-light"></div>
          </div>
          <div class="spiritual-quote">
            <p>"Light is the messenger of potential."</p>
          </div>
        </div>

        <div class="pillar-footer">
          <span>SECURE PORTAL // EST. 1994</span>
        </div>
      </section>

      <section class="form-pillar">
        <div class="luminous-card">
          <header class="card-header">
            <span class="step-label">WELCOME TO THE ECOSYSTEM</span>
            <h1>Initialize Journey</h1>
            <div class="active-line"></div>
          </header>

          <div class="input-universe">
            <div class="bright-field">
              <label>PERSONNEL IDENTIFIER</label>
              <div class="input-wrap">
                <input v-model="empId" type="text" placeholder="Enter your ID" required />
                <div class="focus-glow"></div>
              </div>
            </div>

            <div class="bright-field">
              <label>ACCESS SECRET</label>
              <div class="input-wrap">
                <input v-model="password" type="password" placeholder="••••••••" required />
                <div class="focus-glow"></div>
              </div>
            </div>
          </div>

          <div class="action-zone">
            <button class="btn-radiant" @click="handleLogin">
              <span>PROCEED TO SYSTEM</span>
              <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div class="support-row">
              <button class="btn-text">Recovery Access</button>
              <button class="btn-text">System Status</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=Outfit:wght@200;400;700&display=swap');

.spiritual-root {
  height: 100vh;
  background: #fffaf0; /* Warm Pearl White */
  font-family: 'Outfit', sans-serif;
  color: #2d3436;
  overflow: hidden;
  position: relative;
}

/* --- THE RADIANCE ENGINE (BRIGHT & GLOWING) --- */
.radiance-bg { position: absolute; inset: 0; z-index: 1; overflow: hidden; }

.sun-orb {
  position: absolute; top: -10%; left: 30%; width: 60vw; height: 60vw;
  background: radial-gradient(circle, rgba(255, 214, 10, 0.4) 0%, rgba(255, 159, 26, 0.1) 50%, transparent 70%);
  filter: blur(80px); animation: sun-drift 20s infinite alternate;
}

.morning-mist {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%);
  pointer-events: none;
}

/* --- LAYOUT --- */
.split-layout { position: relative; z-index: 10; display: flex; height: 100vh; }

/* --- LEFT PILLAR --- */
.visual-pillar {
  flex: 1.1; padding: 60px; display: flex; flex-direction: column; justify-content: space-between;
}

.logo-clean { height: 45px; }
.mantra-text { font-size: 0.7rem; letter-spacing: 4px; font-weight: 700; color: #f39c12; margin-top: 10px; }

/* Sun Mandala Animation */
.sun-mandala { position: relative; width: 180px; height: 180px; margin: 0 auto; }
.ring {
  position: absolute; inset: 0; border: 1px solid rgba(243, 156, 18, 0.3);
  border-radius: 50%; animation: pulse-ring 4s infinite ease-in-out;
}
.r2 { transform: scale(0.8); animation-delay: 1s; }
.r3 { transform: scale(0.6); animation-delay: 2s; }
.core-light {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 40px; height: 40px; background: #ffbd03; border-radius: 50%;
  box-shadow: 0 0 50px 10px #ffbd03;
}

.spiritual-quote { margin-top: 40px; font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.6rem; color: #7f8c8d; }

/* --- RIGHT PILLAR --- */
.form-pillar {
  flex: 0.9; display: flex; align-items: center; justify-content: center;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(40px);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

.luminous-card { width: 100%; max-width: 440px; padding: 40px; }

.step-label { font-size: 0.65rem; letter-spacing: 3px; color: #f39c12; font-weight: 800; }
.card-header h1 { font-family: 'Cormorant Garamond', serif; font-size: 3.2rem; font-weight: 600; margin: 10px 0; color: #2d3436; }
.active-line { width: 50px; height: 3px; background: #ffbd03; border-radius: 2px; }

/* INPUTS */
.input-universe { margin-top: 50px; }
.bright-field { margin-bottom: 40px; }
.bright-field label { font-size: 0.7rem; font-weight: 800; color: #bdc3c7; letter-spacing: 2px; margin-bottom: 12px; display: block; }

.input-wrap { position: relative; }
.input-wrap input {
  width: 100%; background: transparent; border: none; padding: 15px 0;
  color: #2d3436; font-size: 1.2rem; outline: none; border-bottom: 2px solid #f1f2f6;
  transition: 0.3s;
}
.focus-glow { position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: #ffbd03; transition: 0.5s ease; }
.input-wrap input:focus ~ .focus-glow { width: 100%; box-shadow: 0 4px 15px rgba(243, 156, 18, 0.4); }

/* BUTTON */
.btn-radiant {
  width: 100%; padding: 22px; background: #2d3436; color: #fff; border: none;
  font-weight: 700; letter-spacing: 2px; cursor: pointer; border-radius: 50px;
  display: flex; justify-content: space-between; align-items: center;
  transition: 0.4s;
}
.btn-radiant:hover { background: #ffbd03; color: #000; transform: translateY(-5px); box-shadow: 0 15px 30px rgba(243, 156, 18, 0.3); }

.support-row { display: flex; justify-content: space-between; margin-top: 25px; }
.btn-text { background: none; border: none; color: #95a5a6; font-weight: 700; font-size: 0.75rem; cursor: pointer; }

/* ANIMATIONS */
@keyframes sun-drift { from { transform: translate(-10%, -10%); } to { transform: translate(10%, 5%); } }
@keyframes pulse-ring { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.6; } }

@media (max-width: 1000px) {
  .visual-pillar { display: none; }
  .form-pillar { flex: 1; background: #fffaf0; }
}
</style>