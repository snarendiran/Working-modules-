<template>
  <div id="app" class="spatial-root">
    <div class="ambient-bg">
      <div class="blob-1"></div>
      <div class="blob-2"></div>
    </div>

    <div v-if="!isAuthenticated" class="spatial-container">
      
      <div class="brand-wing animate-slide-in">
        <div class="brand-header">
          <div class="logo-orb">
            <img src="https://www.integratedindia.in/assets/img/gip-logo.png" alt="Logo" style="margin-top:10px">
          </div>
          <div class="header-text">
            
           
          </div>
        </div>

        <div class="hero-block">
          <h1 class="split-text">
            <span class="light">Secrets to </span>
            <span class="bold">SUCCESS</span>
          </h1>
          <div class="progress-indicator">
            <div class="bar"></div>
            <span>SYSTEM READY / SECURE</span>
          </div>
        </div>

        <div class="brand-footer">
          <div class="legal-wrap">
            <p>Kences Towers, Chennai</p>
            <p class="copyright">© 2026 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>

      <div class="logic-wing">
        <div class="glass-card animate-float-up">
          <div class="card-glow"></div>
          
          <div class="form-header">
            <h3>Authorization</h3>
            <p>Accessing Secure Network Node</p>
          </div>

          <div class="input-universe">
            <div class="spatial-field">
              <input v-model="empId" type="text" placeholder=" " required />
              <label>Employee ID</label>
              <div class="field-line"></div>
            </div>

            <div class="spatial-field">
              <input v-model="password" type="password" placeholder=" " required />
              <label>Password</label>
              <div class="field-line"></div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-spatial" @click="handleLogin">
              <span class="btn-text">INITIALIZE ACCESS</span>
              <div class="btn-glow"></div>
            </button>
            <a href="#" class="reset-link">Forgotten Credentials?</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;600;800&family=Space+Mono&display=swap');

.spatial-root {
  height: 100vh;
 
  background: linear-gradient( rgba(11, 42, 145, 1),#070f29ff,rgba(3, 9, 27, 1));
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  perspective: 1000px;
}

/* AMBIENT BACKGROUND */
.ambient-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.blob-1, .blob-2 {
  position: absolute;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(67, 56, 202, 0.15) 0%, transparent 70%);
  filter: blur(80px);
  animation: drift 20s infinite alternate;
}
.blob-1 { top: -10%; left: -10%; }
.blob-2 { bottom: -10%; right: -10%; background: radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%); }

/* CONTAINER */
.spatial-container {
  position: relative;
  z-index: 10;
  width: 90vw;
  max-width: 1200px;
  height: 700px;
  display: flex;
  gap: 40px;
}

/* BRAND WING */
.brand-wing {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
}

.brand-header { display: flex; align-items: center; gap: 20px; }
.logo-orb {
  width: 50px; height: 50px; background: #fff; padding: 8px;
  border-radius: 14px; box-shadow: 0 0 20px rgba(255,255,255,0.1);
}
.logo-orb img { width: 100%; }
.system-id { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: #4338ca; display: block; }
.enterprise-name { font-weight: 800; font-size: 0.9rem; letter-spacing: 1px; margin: 0; }

.hero-block h1 { font-size: 5.5rem; line-height: 0.9; margin: 0; }
.hero-block .light { font-weight: 200; display: block; opacity: 0.6; }
.hero-block .bold { font-weight: 800; display: block; color: #fff; }

.progress-indicator { margin-top: 40px; display: flex; align-items: center; gap: 20px; }
.progress-indicator .bar { width: 100px; height: 2px; background: rgba(255,255,255,0.1); position: relative; }
.progress-indicator .bar::after { content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 40%; background: #4338ca; }
.progress-indicator span { font-family: 'Space Mono', monospace; font-size: 0.65rem; opacity: 0.5; }

/* LOGIC WING (THE FORM) */
.logic-wing {
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-card {
  width: 100%;
  max-width: 440px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 40px;
  padding: 60px 50px;
  position: relative;
  box-shadow: 0 40px 80px rgba(0,0,0,0.4);
}

.card-glow {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 80%; height: 1px; background: linear-gradient(90deg, transparent, #4338ca, transparent);
}

.form-header h3 { font-size: 1.8rem; font-weight: 800; margin: 0; }
.form-header p { color: #64748b; font-size: 0.9rem; margin-top: 10px; margin-bottom: 50px; }

/* SPATIAL INPUTS */
.input-universe { display: flex; flex-direction: column; gap: 40px; }
.spatial-field { position: relative; }

.spatial-field input {
  width: 100%; background: transparent; border: none; padding: 10px 0;
  color: #fff; font-size: 1.1rem; outline: none;
}
.spatial-field label {
  position: absolute; left: 0; top: 10px; color: #475569;
  transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); pointer-events: none;
}
.field-line { width: 100%; height: 1px; background: rgba(255,255,255,0.1); margin-top: 5px; transition: 0.4s; }

.spatial-field input:focus ~ label,
.spatial-field input:not(:placeholder-shown) ~ label {
  transform: translateY(-25px); font-size: 0.75rem; color: white; font-weight: 800; letter-spacing: 1px;
}
.spatial-field input:focus ~ .field-line { background: white; box-shadow: 0 0 10px white; }

/* ACTION BUTTON */
.btn-spatial {
  width: 100%; background: #fff; color: #000; border: none; padding: 22px;
  border-radius: 20px; font-weight: 800; letter-spacing: 1px;
  margin-top: 50px; cursor: pointer; position: relative; overflow: hidden;
  transition: 0.3s;
}
.btn-spatial:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(255,255,255,0.1); }
.reset-link { display: block; text-align: center; margin-top: 25px; font-size: 0.85rem; color: #475569; text-decoration: none; }
.reset-link:hover { color: #fff; }

/* ANIMATIONS */
@keyframes drift {
  from { transform: translate(0,0); }
  to { transform: translate(50px, 50px); }
}
.animate-float-up { animation: floatUp 1s ease-out; }
@keyframes floatUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .brand-wing { display: none; }
  .spatial-container { justify-content: center; }
}
</style>