<template>
  <div id="app" class="executive-portal">
    <div v-if="!isAuthenticated" class="auth-wrapper">
      
      <div class="prestige-panel">
        <div class="gold-gradient-overlay"></div>
        
        <div class="content-stack">
          <div class="brand-identity">
            <div class="logo-wrapper">
              <img src="https://www.integratedindia.in/assets/img/gip-logo.png" alt="Integrated Logo" class="gold-filter">
            </div>
            <div class="vertical-divider"></div>
            <p class="brand-tag">GROWTH INCOME PROTECTION</p>
          </div>

          <div class="hero-section">
            <h2 class="sub-heading">INTEGRATED ADMINISTRATIVE INFORMATION</h2>
            <h1 class="main-heading">Legacy of <br><span class="gold-text">Excellence</span></h1>
            <div class="geometric-accent"></div>
            <p class="mission-quote">
              "Working together is success." — We bridge the gap between vision and execution.
            </p>
          </div>

          <div class="footer-legal">
            <p>Integrated Enterprises ( India ) Private Ltd,</p>
            <span>Kences Towers, 5A, 5th Floor, Kences Towers, 1, Ramakrishna Street, T.Nagar, Chennai - 600017</span>
          </div>
        </div>
      </div>

      <div class="login-panel">
        <div class="auth-card">
          <div class="card-intro">
            <h3>Secure Login</h3>
            <p>Enter your professional credentials to proceed.</p>
          </div>

          <div class="form-container">
            <div class="input-block">
              <label>Employee ID</label>
              <div class="input-field">
                <i class="fas fa-user-tie"></i>
                <input v-model="empId" placeholder="Enter ID" type="text" />
                <div class="focus-border"></div>
              </div>
            </div>

            <div class="input-block">
              <label>Secure Password</label>
              <div class="input-field">
                <i class="fas fa-fingerprint"></i>
                <input v-model="password" type="password" placeholder="••••••••" />
                <div class="focus-border"></div>
              </div>
            </div>

            <div class="action-row">
              <button class="btn-gold-primary" @click="handleLogin">
                <span>LOGIN TO PORTAL</span>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>

            <div class="support-links">
              <button class="btn-text-gold">Forgot Credentials?</button>
              <p class="copyright">© 2026 Integrated. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600;700&display=swap'); */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;600;800&display=swap');

.executive-portal {
  height: 100vh;
  background: white;
  font-family: 'Outfit', sans-serif;
  color: #fff;
  display: flex;
  overflow: hidden;
}

.auth-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

/* LEFT PANEL - PRESTIGE */
.prestige-panel {
  flex: 1.1;
  position: relative;
  display: flex;
  padding: 80px;
  background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
}

.gold-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(5, 35, 73, 0.95) 100%, rgb(238, 237, 234) 60%);
  z-index: 1;
}

.content-stack { position: relative; z-index: 2; display: flex; flex-direction: column; width: 100%; }

.brand-identity { display: flex; align-items: center; gap: 20px; margin-bottom: 60px; }
.logo-wrapper { background: white; padding: 10px; border-radius: 8px; border: 1px solid rgba(184, 134, 11, 0.3); }
.logo-wrapper img { height: 40px; filter: brightness(1.2); }
.vertical-divider { width: 1px; height: 30px; background: rgba(184, 134, 11, 0.5); }
.brand-tag { letter-spacing: 4px; font-size: 0.75rem; font-weight: 700; color: #f7b512; }

.hero-section { flex-grow: 1; justify-content: center; display: flex; flex-direction: column; }
.sub-heading { font-size: 0.85rem; letter-spacing: 3px; opacity: 0.7; margin-bottom: 10px; }
.main-heading { font-family: 'Outfit', sans-serif; font-size: 4rem; line-height: 1.1; margin: 0; }
.gold-text { color: #d4af37; text-shadow: 0 0 20px rgba(212, 175, 55, 0.2); }
.geometric-accent { width: 100px; height: 4px; background: #d4af37; margin: 30px 0; }
.mission-quote { font-size: 1.2rem; font-weight: 300; opacity: 0.8; max-width: 480px; line-height: 1.8; font-style: italic; }

/* RIGHT PANEL - LOGIN */
.login-panel {
  flex: 0.9;
  background: linear-gradient(304deg, rgba(5, 35, 73, 0.95), rgb(13 29 49 / 95%));
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(184, 134, 11, 0.2);
}

.auth-card { width: 100%; max-width: 420px; padding: 40px; }

.card-intro h3 { font-family: 'Outfit', sans-serif; font-size: 2rem; color: #d4af37; margin-bottom: 10px; }
.card-intro p { font-size: 0.9rem; color: #888; margin-bottom: 40px; }

.input-block { margin-bottom: 25px; }
.input-block label { display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: #d4af37; margin-bottom: 10px; font-weight: 700; }

.input-field {
  position: relative;
  background: #1a1a1a;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: 0.4s;
}

.input-field i { color: #555; font-size: 1.1rem; }
.input-field input {
  background: transparent;
  border: none;
  padding: 18px 15px;
  color: #fff;
  width: 100%;
  outline: none;
  font-size: 1rem;
}

.focus-border {
  position: absolute;
  bottom: -1px; left: 50%; width: 0; height: 2px;
  background: #d4af37;
  transition: 0.4s ease-in-out;
}

.input-field:focus-within { border-color: #d4af37; }
.input-field:focus-within .focus-border { width: 100%; left: 0; }
.input-field:focus-within i { color: #d4af37; }

.btn-gold-primary {
  width: 100%;
  background: linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #b8860b 100%);
  border: none;
  padding: 20px;
  color: #000;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  transition: 0.3s;
   font-family: 'Outfit', sans-serif;
}

.btn-gold-primary:hover {
  filter: brightness(1.2);
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(184, 134, 11, 0.3);
}

.support-links { text-align: center; margin-top: 40px; }
.btn-text-gold { background: none; border: none; color: #d4af37; font-weight: 600; cursor: pointer; font-size: 0.85rem; }
.copyright { font-size: 0.7rem; color: #fff; margin-top: 20px; }

.footer-legal { font-size: 0.75rem; color: #fff; letter-spacing: 1px; }
.footer-legal p { margin-bottom: 5px; color: #fff; }
</style>