<template>
  <div id="app" class="admin-portal">
    <div v-if="!isAuthenticated" class="portal-wrapper">
      
      <div class="sidebar-brand">
        <div class="brand-top">
          <div class="logo-circle">
             <img src="https://www.integratedindia.in/assets/img/gip-logo.png" alt="Logo">
          </div>
          <h2 class="company-name">INTEGRATED<span>.</span></h2>
        </div>

        <div class="main-visual">
          <div class="slanted-bg"></div>
          <div class="text-content">
            <span class="version-tag">V 4.0 SECURE</span>
            <h1 class="hero-text">Control Center</h1>
            <p class="mission-quote">"Staying together is progress, working together is success."</p>
          </div>
        </div>

        <div class="sidebar-footer">
          <p>Integrated Enterprises (India) Pvt Ltd</p>
          <small>Chennai - 600017</small>
        </div>
      </div>

      <div class="login-terminal">
        <div class="terminal-card">
          <div class="terminal-header">
            <h3>Identity Verification</h3>
            <div class="header-line"></div>
          </div>

          <div class="terminal-body">
            <div class="input-container">
              <label>Personnel ID</label>
              <div class="neumorphic-input">
                <i class="fas fa-fingerprint"></i>
                <input v-model="empId" placeholder="M00701" type="text" />
              </div>
            </div>

            <div class="input-container">
              <label>Secure Password</label>
              <div class="neumorphic-input">
                <i class="fas fa-shield-alt"></i>
                <input v-model="password" type="password" placeholder="••••••••" />
              </div>
            </div>

            <div class="terminal-actions">
              <button class="btn-execute" @click="handleLogin">
                AUTHENTICATE
              </button>
              <button class="btn-clear" @click="resetForm">
                RESET
              </button>
            </div>

            <div class="terminal-footer">
              <a href="#">Recovery Access</a>
              <p class="sys-date">ESTABLISHED: 2026</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Importing a rugged, professional font */
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Space+Grotesk:wght@300;500;700&display=swap');

.admin-portal {
  height: 100vh;
  background: #eef2f6;
  font-family: 'Space Grotesk', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portal-wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* SIDEBAR BRANDING */
.sidebar-brand {
  flex: 0.8;
  background: #101b42ff;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 60px;
  position: relative;
  z-index: 2;
}

.logo-circle {
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.logo-circle img { width: 100%; }

.company-name {
  font-family: 'Syncopate', sans-serif;
  font-size: 1.5rem;
  margin-top: 20px;
  letter-spacing: 2px;
}
.company-name span { color: #0066ff; }

.main-visual { flex-grow: 1; display: flex; align-items: center; position: relative; }



.version-tag { color: #0066ff; font-weight: 700; letter-spacing: 3px; font-size: 0.8rem; }
.hero-text { font-size: 4.5rem; font-weight: 700; line-height: 0.9; margin: 15px 0; }
.mission-quote { font-size: 1.1rem; opacity: 0.6; line-height: 1.6; max-width: 350px; }

/* LOGIN TERMINAL */
.login-terminal {
  flex: 1.2;
  background: #eef2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.terminal-card {
  width: 100%;
  max-width: 480px;
  padding: 50px;
}

.terminal-header h3 { font-family: 'Syncopate', sans-serif; font-size: 1.1rem; color: #1a1c23; }
.header-line { width: 60px; height: 5px; background: #0066ff; margin-top: 10px; margin-bottom: 40px; }

.input-container { margin-bottom: 30px; }
.input-container label { font-weight: 700; font-size: 0.8rem; text-transform: uppercase; color: #7b8ea3; margin-bottom: 10px; display: block; }

.neumorphic-input {
  background: #eef2f6;
  box-shadow: inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff;
  border-radius: 15px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.neumorphic-input i { color: #0066ff; }
.neumorphic-input input {
  background: transparent;
  border: none;
  padding: 12px 0;
  width: 100%;
  font-size: 1rem;
  color: #1a1c23;
  outline: none;
}

.terminal-actions { display: flex; gap: 20px; margin-top: 40px; }

.btn-execute {
  flex: 2;
  background: #101b42ff;
  color: #fff;
  border: none;
  padding: 20px;
  border-radius: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 10px 10px 20px #d1d9e6;
}

.btn-execute:hover { background: #0066ff; transform: translateY(-3px); }

.btn-clear {
  flex: 1;
  background: #eef2f6;
  border: none;
  border-radius: 15px;
  box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff;
  font-weight: 700;
  color: #1a1c23;
  cursor: pointer;
}

.terminal-footer { margin-top: 50px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #d1d9e6; padding-top: 20px; }
.terminal-footer a { color: #0066ff; text-decoration: none; font-size: 0.8rem; font-weight: 700; }
.sys-date { font-size: 0.7rem; color: #7b8ea3; }

.sidebar-footer { font-size: 0.8rem; opacity: 0.5; }
</style>