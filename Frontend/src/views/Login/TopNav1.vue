<template>
  <header class="navbar-container">
    <nav class="main-nav">
      <div class="logo">
        <div class="logo-icon">I</div>
        <div class="logo-text">
          <span class="brand">INTEGRATED</span>
          <span class="tagline">YOUR WEALTH PARTNER</span>
        </div>
      </div>

      <ul class="nav-links">
        <li><a href="#" class="active">Dashboard</a></li>
        
        <li class="has-dropdown" @mouseenter="showSub = true" @mouseleave="showSub = false">
          <a href="#" class="dropdown-trigger">
            Reports 
            <span class="chevron" :class="{ rotate: showSub }"></span>
          </a>
          
          <transition name="slide-up">
            <div v-if="showSub" class="sub-nav">
              <a href="#" class="sub-item">
                <div class="sub-icon">💼</div>
                <span>Current Portfolio</span>
              </a>
              <a href="#" class="sub-item">
                <div class="sub-icon">📊</div>
                <span>Asset Category Breakup</span>
              </a>
              <a href="#" class="sub-item">
                <div class="sub-icon">🔄</div>
                <span>Transactions</span>
              </a>

              <div 
                class="sub-item has-sub-sub" 
                @mouseenter="showSubSub = true" 
                @mouseleave="showSubSub = false"
              >
                <div class="sub-content-wrapper">
                  <div class="sub-icon">📄</div>
                  <span>Tax Reports</span>
                  <span class="chevron-right"></span>
                </div>

                <transition name="slide-right">
                  <div v-if="showSubSub" class="sub-sub-nav">
                    <a href="#" class="sub-sub-item">Capital Gains</a>
                    <a href="#" class="sub-sub-item">Dividend Report</a>
                    <a href="#" class="sub-sub-item">Yearly Summary</a>
                  </div>
                </transition>
              </div>
              <a href="#" class="sub-item">
                <div class="sub-icon">🛡️</div>
                <span>ELSS Statement</span>
              </a>
            </div>
          </transition>
        </li>

        <li><a href="#">Invest Online</a></li>
        <li><a href="#">Analytics</a></li>
      </ul>

      <div class="profile-section">
        <button class="icon-btn">
          <span class="notification-dot"></span>
          🔔
        </button>
        <div class="divider"></div>
        <div class="user-info">
          <span class="user-name">S Ashok</span>
          <div class="avatar">SA</div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const showSub = ref(false);
const showSubSub = ref(false); // State for the nested menu
</script>

<style scoped>
/* Keeping all your existing styles intact */
:host {
  --primary-blue: #0052cc;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --bg-glass: rgba(255, 255, 255, 0.85);
  --shadow-soft: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  font-family: 'Inter', sans-serif;
}

.main-nav {
  max-width: 1200px;
  margin: 0 auto;
  background: var(--bg-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  box-shadow: var(--shadow-soft);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #0052cc, #00a3ff);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-style: italic;
  box-shadow: 0 4px 12px rgba(0, 82, 204, 0.3);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand {
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.5px;
  color: #0f172a;
}

.tagline {
  font-size: 0.6rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.nav-links a:hover, .nav-links a.active {
  background: #f1f5f9;
  color: var(--primary-blue);
}

.has-dropdown {
  position: relative;
}

.chevron::after {
  content: '▼';
  font-size: 8px;
  margin-left: 6px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.chevron.rotate::after {
  transform: rotate(180deg);
}

.sub-nav {
  position: absolute;
  top: 110%;
  left: 0;
  width: 260px;
  background: white;
  border-radius: 14px;
  padding: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
}

.sub-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sub-item:hover {
  background: #f8fafc;
  color: var(--primary-blue);
}

.sub-icon {
  font-size: 1.1rem;
  width: 24px;
}

/* --- NEW SUB-SUB MENU CSS --- */

.has-sub-sub {
  position: relative; /* Anchor for the sub-sub menu */
}

.sub-content-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
}

.chevron-right::after {
  content: '▶';
  font-size: 8px;
  margin-left: auto; /* Pushes arrow to the far right */
  color: #cbd5e1;
}

.sub-sub-nav {
  position: absolute;
  left: 98%; /* Positions it to the right of the parent */
  top: 0;
  width: 200px;
  background: white;
  border-radius: 14px;
  padding: 8px;
  box-shadow: 15px 15px 35px rgba(0,0,0,0.1);
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.sub-sub-item {
  padding: 8px 12px;
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s;
}

.sub-sub-item:hover {
  background: #f1f5f9;
  color: var(--primary-blue);
  padding-left: 16px;
}

/* Transition for Sub-Sub menu */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.25s ease;
}
.slide-right-enter-from, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* --- Profile Section Styles --- */
.profile-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
}

.notification-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
  border: 2px solid white;
}

.divider {
  width: 1px;
  height: 24px;
  background: #e2e8f0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-main);
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #1e293b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>