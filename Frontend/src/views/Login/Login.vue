<template>
  <div id="app" class="app-container">
    <div v-if="!isAuthenticated" class="split-screen">
      
      <div class="visual-side animate-fade-in">
        <div class="visual-content">
          <p class="brand-subtext">INTEGRATED ADMINISTRATIVE INFORMATION</p>
          <h1 class="quote">"Secrets to Success"</h1>
          <p class="mission-statement">
            Coming together is a beginning, staying together is progress, 
            and working together is success.
          </p>
          
          <div class="illustration-box animate-float">
             <i class="fas fa-shield-halved fa-5x"></i>
          </div>

          <div class="footer-info">
            <p>Integrated Enterprises (India) Private Ltd</p>
            <p class="legal">Kences Towers, Chennai - 600017</p>
          </div>
        </div>

        <div class="curve-divider">
          <svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 0 C 50 0, 50 100, 100 100 V 0 Z" fill="white" />
          </svg>
        </div>
      </div>

      <div class="form-side animate-slide-right">
        <div class="bubble-container">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
        <div class="login-glass-card">
          <div class="logo-area" style="display: flex;justify-content: center;">
             <img src="https://www.integratedindia.in/assets/img/gip-logo.png" width="100px" style="margin-bottom: 10px;">
          </div>
          
          <div class="form-header">
            <h3>Login to access your Account</h3>
            <div class="title-underline"></div>
          </div>
          
          <div class="input-section">
            <div class="form-group">
              <label><i class="fas fa-user-circle"></i> Employee Id</label>
              <input v-model="empId" placeholder="e.g. m00701" />
            </div>
            
            <div class="form-group">
              <label><i class="fas fa-lock"></i> Password</label>
              <input v-model="password" type="password" placeholder="••••••••" />
            </div>
          </div>
          
          <div class="action-section">
            <button class="btn-primary" @click="handleLogin">
              <span>Login Now</span>
              <i class="fas fa-arrow-right"></i>
            </button>
            <button class="btn-secondary" @click="resetForm">Reset</button>
          </div>

          <div class="help-box">
            
            <button class="btn-link">Forgot Your Password?</button>
          </div>

          <p class="copyright">© 2026 Integrated Enterprises (India) Pvt Ltd.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.app-container {
  height: 100vh;
  background-color: #f4f7fe;
}

.split-screen { display: flex; height: 100vh; }

.visual-side {
  flex: 0.9;
  background: linear-gradient(135deg, #1948cd 0%, #030c21 100%);
  color: white;
  padding: 80px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.curve-divider {
  position: absolute;
  top: 0;
  right: -2px;
  height: 100%;
  width: 120px;
  z-index: 5;
}
.curve-divider svg { height: 100%; width: 100%; }

.visual-content { position: relative; z-index: 10; }
.brand-subtext { font-size: 0.8rem; letter-spacing: 3px; color: #93c5fd; font-weight: 700; }
.quote { font-size: 3.2rem; margin: 25px 0; line-height: 1.2; }
.mission-statement { font-size: 1.2rem; opacity: 0.85; line-height: 1.7; max-width: 450px; }

.form-side {
  flex: 1;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; 
}


.login-glass-card {
  width: 100%;
  max-width: 420px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid gainsboro;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1);
}


.bubble-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.bubble {
  position: absolute;
  bottom: 0px;
  background: radial-gradient(circle, #1948cd 0%, #93c5fd 100%);
  border-radius: 50%;
  opacity: 0.15;
  animation: float-around 1s infinite ease-in-out;
}


.bubble:nth-child(1) { width: 80px; height: 80px; left: 10%; animation-duration: 18s; }
.bubble:nth-child(2) { width: 150px; height: 150px; left: 20%; animation-duration: 25s; animation-delay: 2s; }
.bubble:nth-child(3) { width: 50px; height: 50px; left: 35%; animation-duration: 20s; animation-delay: 4s; }
.bubble:nth-child(4) { width: 200px; height: 200px; left: 50%; animation-duration: 30s; }
.bubble:nth-child(5) { width: 100px; height: 100px; left: 70%; animation-duration: 22s; animation-delay: 1s; }
.bubble:nth-child(6) { width: 60px; height: 60px; left: 85%; animation-duration: 15s; }
.bubble:nth-child(7) { width: 120px; height: 120px; left: 15%; animation-duration: 28s; animation-delay: 5s; }
.bubble:nth-child(8) { width: 90px; height: 90px; left: 60%; animation-duration: 24s; animation-delay: 3s; }


@keyframes float-around {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  20% { opacity: 0.2; }
  80% { opacity: 0.2; }
  100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary:hover {
  background: #1948cd;
  transform: scale(1.02);
  box-shadow: 0 15px 30px rgba(25, 72, 205, 0.3);
}



.form-header h3 { color: #1e293b; font-size: 1.25rem; margin-bottom: 10px; }
.title-underline { width: 50px; height: 4px; background: #133b7d; border-radius: 2px; margin-bottom: 35px; }


.form-group { margin-bottom: 25px; }
.form-group label { display: block; font-size: 0.85rem; font-weight: 700; color: #64748b; margin-bottom: 10px; }
.form-group label i { color: #133b7d; margin-right: 8px; }

input {
  width: 90%; padding: 16px; border: 2px solid #f1f5f9; border-radius: 12px;
  background: #f8fafc; font-size: 1rem; transition: all 0.3s ease;
}
input:focus {
  outline: none; border-color: #133b7d; background: white;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1);
}


.action-section { display: flex; gap: 15px; margin-top: 40px; }
.btn-primary {
  flex: 1; background: #1e3a8a; color: white; border: none; padding: 16px;
  border-radius: 12px; font-weight: 700; cursor: pointer; display: flex;
  align-items: center; justify-content: center; gap: 10px; transition: 0.3s;
}

.btn-secondary {
  flex: 1; background: #f1f5f9; color: #475569; border: none; border-radius: 12px; font-weight: 700; cursor: pointer;
}

.help-box { text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px; }
.help-box p { font-size: 0.85rem; color: #94a3b8; margin-bottom: 10px; }
.btn-link { background: none; border: none; color: #133b7d; font-weight: 700; cursor: pointer; }


@keyframes slideRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
.animate-float { animation: float 6s ease-in-out infinite; }

.copyright { margin-top: 40px; font-size: 0.7rem; color: #cbd5e1; text-align: center; }
</style>