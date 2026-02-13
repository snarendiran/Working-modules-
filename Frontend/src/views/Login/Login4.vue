<template>
  <div :class="['page-container', currentTheme]">
    
    <div class="content-side">
      <div class="content-wrapper">
        <h3 class="sub-header">Integrated Administrative Information</h3>
        <h1 class="main-title">"Secrets to Success"</h1>
        
        <div class="icon-holder">
           <div class="shield-pulse"></div>
           <svg class="shield-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        </div>

        <p class="quote">
          Coming together is a beginning, staying together is progress, and working together is success.
        </p>
      </div>
    </div>

    <div class="curve-overlay">
      <svg preserveAspectRatio="none" viewBox="0 0 100 100">
        <path class="animated-path" d="M100 0 L40 0 C50 30 30 70 40 100 L100 100 Z" />
      </svg>
    </div>

    <div class="login-card">
      <div class="card-header">
        <div class="logo-box">GIP</div>
        <h2>Welcome Back</h2>
        <p class="card-subtext">Please enter your details to continue</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-field">
          <input type="text" id="empId" placeholder=" " required>
          <label for="empId">Employee Id</label>
          <div class="input-line"></div>
        </div>
        
        <div class="input-field">
          <input type="password" id="pw" placeholder=" " required>
          <label for="pw">Password</label>
          <div class="input-line"></div>
        </div>

        <div class="button-row">
          <button type="submit" class="btn-login">
            <span>Login Now</span>
            <svg class="arrow" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h14" fill="none" stroke="currentColor" stroke-width="2"/></svg>
          </button>
        </div>
      </form>
      
      <div class="card-footer">
        <div class="footer-links">
          <button @click="resetForm" class="btn-text">Reset Fields</button>
          <a href="#" class="forgot-link">Forgot Password?</a>
        </div>

        <div class="theme-picker-container">
          <span class="theme-label">Switch Mood</span>
          <div class="theme-selector">
            <button v-for="theme in themeList" 
                    :key="theme" 
                    :class="['theme-dot', theme, { active: currentTheme === theme }]"
                    @click="currentTheme = theme">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentTheme = ref('blue');
const themeList = ['blue', 'sunset', 'forest', 'midnight'];

const resetForm = () => {
  document.querySelector('form').reset();
};

const handleLogin = () => {
  alert(`Attempting login with theme: ${currentTheme.value}`);
};
</script>

<style scoped>
/* --- 1. THEME VARIABLES --- */
.page-container {
  --blue-p: #1e3a8a; --blue-a: #3b82f6; --blue-c: #f8fafc;
  --sunset-p: #7c2d12; --sunset-a: #f97316; --sunset-c: #fff7ed;
  --forest-p: #064e3b; --forest-a: #10b981; --forest-c: #f0fdf4;
  --midnight-p: #0f172a; --midnight-a: #64748b; --midnight-c: #f1f5f9;

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.blue { background: var(--blue-p); --active-accent: var(--blue-a); --active-curve: var(--blue-c); }
.sunset { background: var(--sunset-p); --active-accent: var(--sunset-a); --active-curve: var(--sunset-c); }
.forest { background: var(--forest-p); --active-accent: var(--forest-a); --active-curve: var(--forest-c); }
.midnight { background: var(--midnight-p); --active-accent: var(--midnight-a); --active-curve: var(--midnight-c); }

/* --- 2. LEFT SIDE (DESKTOP ONLY) --- */
.content-side {
  display: none;
  width: 50%;
  padding: 0 5%;
  color: white;
  z-index: 10;
}

@media (min-width: 1024px) { .content-side { display: flex; } }

.sub-header { text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.2em; margin-bottom: 2rem; opacity: 0.7; }
.main-title { font-size: 2.5rem; line-height: 1; font-weight: 900; margin-bottom: 2rem; }
.quote { font-size: 1.25rem; font-style: italic; max-width: 480px; opacity: 0.8; line-height: 1.6; }

.icon-holder { position: relative; margin: 2rem 0; width: fit-content; }
.shield-icon { width: 80px; height: 80px; padding: 16px; background: rgba(255,255,255,0.15); border-radius: 20px; backdrop-filter: blur(10px); position: relative; z-index: 2; }
.shield-pulse { position: absolute; inset: 0; background: white; border-radius: 20px; opacity: 0.3; animation: pulse 3s infinite; }

@keyframes pulse { 0% { transform: scale(1); opacity: 0.3; } 100% { transform: scale(1.5); opacity: 0; } }

/* --- 3. THE CURVE --- */
.curve-overlay { position: absolute; inset: 0; pointer-events: none; }
.curve-overlay svg { width: 100%; height: 100%; }
.animated-path { fill: var(--active-curve); transition: fill 0.8s ease; animation: wave 15s ease-in-out infinite; }

@keyframes wave {
  0%, 100% { d: path("M100 0 L40 0 C50 30 30 70 40 100 L100 100 Z"); }
  50% { d: path("M100 0 L48 0 C38 45 60 55 48 100 L100 100 Z"); }
}

/* --- 4. THE LOGIN CARD (MOBILE FIRST) --- */
.login-card {
  z-index: 20;
  width: 90%;
  max-width: 440px;
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 40px;
  box-shadow: 0 40px 100px -20px rgba(0,0,0,0.3);
  transition: transform 0.4s ease;
}

.card-header h2 { font-size: 1.75rem; color: #1e293b; margin: 0.5rem 0; }
.card-subtext { color: #64748b; font-size: 0.9rem; margin-bottom: 2.5rem; }
.logo-box { display: inline-block; padding: 8px 16px; background: #f1f5f9; color: var(--active-accent); border-radius: 12px; font-weight: 800; font-size: 1.2rem; }

/* FLOATING LABELS UX */
.input-field { position: relative; margin-bottom: 2rem; }
.input-field input {
  width: 100%;
  padding: 1rem 0;
  border: none;
  border-bottom: 2px solid #e2e8f0;
  outline: none;
  font-size: 1rem;
  background: transparent;
  transition: border-color 0.3s;
}
.input-field label {
  position: absolute;
  top: 1rem;
  left: 0;
  color: #94a3b8;
  pointer-events: none;
  transition: all 0.3s ease;
}
.input-field input:focus ~ label,
.input-field input:not(:placeholder-shown) ~ label {
  top: -12px;
  font-size: 0.8rem;
  color: var(--active-accent);
  font-weight: 700;
}
.input-line { position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--active-accent); transition: width 0.4s ease; }
.input-field input:focus ~ .input-line { width: 100%; }

/* BUTTONS */
.btn-login {
  width: 100%;
  background: #1e293b;
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-login:hover { background: #0f172a; transform: scale(1.02); }
.arrow { width: 20px; transition: transform 0.3s; }
.btn-login:hover .arrow { transform: translateX(5px); }

/* FOOTER & THEMES */
.footer-links { display: flex; justify-content: space-between; margin-top: 1.5rem; }
.btn-text, .forgot-link { background: none; border: none; font-size: 0.85rem; color: #64748b; cursor: pointer; text-decoration: none; font-weight: 500; }
.btn-text:hover, .forgot-link:hover { color: var(--active-accent); }

.theme-picker-container { margin-top: 3rem; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 2rem; }
.theme-label { font-size: 0.75rem; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.1em; display: block; margin-bottom: 1rem; }
.theme-selector { display: flex; justify-content: center; gap: 15px; }
.theme-dot { width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); cursor: pointer; transition: 0.3s; }
.theme-dot.active { transform: scale(1.4); box-shadow: 0 0 0 2px var(--active-accent); }

/* Theme dot colors */
.theme-dot.blue { background: #1e3a8a; }
.theme-dot.sunset { background: #ea580c; }
.theme-dot.forest { background: #059669; }
.theme-dot.midnight { background: #1e293b; }

/* RESPONSIVE FIXES */
@media (max-width: 1023px) {
  .page-container { align-items: flex-end; }
  .login-card { margin-bottom: 5vh; width: 95%; border-radius: 30px 30px 0 0; padding-bottom: 5rem; }
  .curve-overlay svg { transform: rotate(90deg) scale(2); }
}

@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>