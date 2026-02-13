<template>
  <div id="app" class="monolith-portal">
    <div v-if="!isAuthenticated" class="main-layout">
      
      <aside class="brand-pillar">
        <div class="pillar-content">
          <div class="logo-area">
            <img src="https://www.integratedindia.in/assets/img/gip-logo.png" alt="Integrated" class="logo">
          </div>
          
          <div class="vertical-title">
            <span class="year">EST. 1994</span>
        
          </div>

          <div class="pillar-footer">
            <p>Chennai HQ</p>
          </div>
        </div>
      </aside>

      <main class="interaction-space">
        <div class="top-nav-decoration">
          <div class="nav-dot"></div>
          <div class="nav-line"></div>
          <span class="nav-status">SECURE ACCESS POINT</span>
        </div>

        <div class="login-wrapper">
          <header class="form-intro">
            <h2 class="greeting">Welcome to Administrative Intelligence.</h2>
            <p class="instruction">Identify yourself to access the ecosystem.</p>
          </header>

          <section class="form-core">
            <div class="input-row">
              <div class="field-container">
                <label>EMPLOYEE ID</label>
                <div class="field-box">
                  <input v-model="empId" placeholder="e.g. M00701" type="text" />
                </div>
              </div>
            </div>

            <div class="input-row">
              <div class="field-container">
                <label>PASSWORD</label>
                <div class="field-box">
                  <input v-model="password" type="password" placeholder="••••••••" />
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button class="btn-prime" @click="handleLogin">
                ENTER SYSTEM
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button class="btn-reset" @click="resetForm">Clear Form</button>
            </div>
          </section>

          <footer class="legal-disclaimer">
            <p>© 2026 Integrated Enterprises (India) Pvt Ltd. All rights reserved.</p>
            <p>Confidentiality notice applies to all user activity within this portal.</p>
          </footer>
        </div>
      </main>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;600;800&display=swap');

.monolith-portal {
  
  background: #ffffff;
  font-family: 'Outfit', sans-serif;
  color: #111;
  display: flex;
   background-image:url('https://www.integratedindia.in/assets/img/bg/gip.png') ;
  background-size:cover;
}

.main-layout {
  display: flex;
  width: 100%;
  height: 100%;
}

/* BRAND PILLAR - The unique side element */
.brand-pillar {
  width: 200px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  height: 630px;
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
}

.logo-area { margin-bottom: 80px; }
.logo { width: 140px; }

.vertical-title {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.year {
  font-size: 0.7rem;
  letter-spacing: 5px;
  color: #94a3b8;
  font-weight: 600;
  margin-bottom: 20px;
}

.side-text {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: left top;
  white-space: nowrap;
  color: #1e293b;
}

.side-text span { color: #3b82f6; }

.pillar-footer { color: #94a3b8; font-size: 0.8rem; font-weight: 600; }

/* INTERACTION SPACE - The main content */
.interaction-space {
  flex-grow: 1;
  display: flex;
  background:transparent;
  flex-direction: column;
  padding: 60px 100px;
  
  position: relative;
}

.top-nav-decoration {
  display: flex;
  align-items: center;
  gap: 15px;

}

.nav-dot { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; }
.nav-line { width: 40px; height: 2px; background: #e2e8f0; }
.nav-status { font-size: 0.7rem; letter-spacing: 2px; color: #64748b; font-weight: 800; }

.login-wrapper { max-width: 800px; }

.greeting { font-size: 3rem; font-weight: 600; line-height: 1.1; margin-bottom: 10px; color: #0f172a; }
.instruction { font-size: 1.1rem; color: #64748b; margin-bottom: 50px; }

.field-container { margin-bottom: 30px;width:500px; }
.field-container label {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #94a3b8;
  margin-bottom: 12px;
}

.field-box {
  border-bottom: 2px solid #e2e8f0;
  transition: 0.4s ease;
}

.field-box input {
  width: 100%;
  padding: 15px 0;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  font-weight: 400;
  color: #0f172a;
  outline: none;
}

.field-box:focus-within { border-color: #3b82f6; }

.form-actions {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
}

.btn-prime {
  background: #0f172a;
  color: #fff;
  border: none;
  padding: 20px 40px;
  border-radius: 4px; /* Sharp corners look more premium than round ones in this style */
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-prime:hover {
  background: #3b82f6;
  padding-right: 50px;
}

.btn-reset {
  background: none;
  border: none;
  font-weight: 700;
  color: #94a3b8;
  cursor: pointer;
}

.legal-disclaimer {
  margin-top: auto;
  padding-top: 40px;
  
}

.legal-disclaimer p { font-size: 0.75rem; color: #cbd5e1; margin: 5px 0; }

@media (max-width: 1000px) {
  .brand-pillar { display: none; }
  .interaction-space { padding: 40px;}
}
</style>