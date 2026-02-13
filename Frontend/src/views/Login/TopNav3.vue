<template>
  <aside class="sidebar-wrapper">
    <div class="brand-section">
      <div class="brand-icon">I</div>
      <div class="brand-content">
        <span class="brand-name">INTEGRATED</span>
        <span class="brand-status">WEALTH OS</span>
      </div>
    </div>

    <nav class="nav-container">
      <div v-for="mainItem in menuData" :key="mainItem.id" class="menu-group">
        <button 
          class="nav-item-l1" 
          :class="{ 'active': activeL1 === mainItem.id }"
          @click="toggleL1(mainItem)"
        >
          <span class="icon-box">{{ mainItem.icon || '📁' }}</span>
          <span class="nav-label">{{ mainItem.title }}</span>
          <span v-if="mainItem.children" class="chevron" :class="{ 'rotate': activeL1 === mainItem.id }">▼</span>
        </button>

        <transition name="expand">
          <div v-if="activeL1 === mainItem.id && mainItem.children" class="sub-menu-l2">
            <div v-for="subItem in mainItem.children" :key="subItem.id" class="l2-wrapper">
              <button 
                class="nav-item-l2" 
                :class="{ 'active': activeL2 === subItem.id }"
                @click="activeL2 = activeL2 === subItem.id ? null : subItem.id"
              >
                <span class="dot"></span>
                {{ subItem.title }}
                <span v-if="subItem.children" class="chevron-s">›</span>
              </button>

              <transition name="expand">
                <div v-if="activeL2 === subItem.id && subItem.children" class="sub-menu-l3">
                  <a v-for="leaf in subItem.children" 
                     :key="leaf.title" 
                     href="#" 
                     class="nav-item-l3"
                  >
                    <span class="tag" v-if="leaf.tag">{{ leaf.tag }}</span>
                    {{ leaf.title }}
                  </a>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <div class="sidebar-footer">
      <div class="user-pill">
        <div class="avatar">SA</div>
        <div class="user-meta">
          <span class="u-name">S. Ashok</span>
          <span class="u-plan">Premium</span>
        </div>
        <button class="settings-btn">⚙️</button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const activeL1 = ref('portfolio');
const activeL2 = ref('tax');

const toggleL1 = (item) => {
  if (!item.children) {
    activeL1.value = item.id;
    return;
  }
  activeL1.value = activeL1.value === item.id ? null : item.id;
};

const menuData = [
  { id: 'dash', title: 'Dashboard', icon: '🏠', children: null },
  { 
    id: 'portfolio', 
    title: 'Portfolio', 
    icon: '💼',
    children: [
      { 
        id: 'tax', title: 'Tax Center',
        children: [
          { title: 'IT Statement', tag: 'FY25' },
          { title: 'Capital Gains', tag: 'LTCG' }
        ]
      },
      { 
        id: 'perf', title: 'Performance',
        children: [
          { title: 'Asset Mix', tag: 'Live' },
          { title: 'ROI Graph', tag: 'New' }
        ]
      }
    ] 
  },
  { 
    id: 'invest', 
    title: 'Invest Online', 
    icon: '💰',
    children: [
      { 
        id: 'mf', title: 'Mutual Funds',
        children: [
          { title: 'Top SIPs', tag: 'Hot' },
          { title: 'NFO List', tag: 'Live' }
        ]
      }
    ] 
  }
];
</script>

<style scoped>
.sidebar-wrapper {
  --primary: #2563eb;
  --bg-white: #ffffff;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --border: #f1f5f9;
  
  width: 280px;
  height: 90vh;
  background: var(--bg-white);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  font-family: 'Inter', sans-serif;
  position: fixed;
  left: 0;
  top: 0;
}

/* Brand Area */
.brand-section {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 0.5rem 2rem;
}
.brand-icon {
  width: 35px; height: 35px; background: var(--primary);
  border-radius: 8px; color: white; display: flex;
  align-items: center; justify-content: center; font-weight: 900;
}
.brand-name { font-weight: 800; font-size: 1rem; color: var(--text-main); display: block; }
.brand-status { font-size: 0.6rem; color: var(--primary); font-weight: 700; letter-spacing: 1px; }

/* Level 1 Styling */
.nav-container { flex: 1; overflow-y: auto; }
.nav-item-l1 {
  width: 100%; display: flex; align-items: center; gap: 12px;
  padding: 12px; border: none; background: none; color: var(--text-muted);
  font-weight: 600; cursor: pointer; border-radius: 12px; transition: 0.2s;
}
.nav-item-l1:hover, .nav-item-l1.active { background: #f8fafc; color: var(--primary); }
.nav-item-l1.active .icon-box { background: var(--primary); color: white; }

.icon-box {
  width: 32px; height: 32px; background: #f1f5f9; border-radius: 8px;
  display: flex; align-items: center; justify-content: center; transition: 0.2s;
}

/* Level 2 Styling */
.sub-menu-l2 { padding-left: 20px; margin-top: 4px; }
.nav-item-l2 {
  width: 100%; display: flex; align-items: center; gap: 10px;
  padding: 10px; border: none; background: none; color: var(--text-muted);
  font-size: 0.9rem; font-weight: 500; cursor: pointer; border-radius: 8px;
}
.nav-item-l2:hover, .nav-item-l2.active { color: var(--text-main); }
.dot { width: 4px; height: 4px; border-radius: 50%; background: #cbd5e1; }
.nav-item-l2.active .dot { background: var(--primary); width: 6px; height: 6px; }

/* Level 3 Styling */
.sub-menu-l3 { padding-left: 18px; margin-bottom: 8px; border-left: 1px solid #f1f5f9; margin-left: 14px; }
.nav-item-l3 {
  display: block; padding: 8px 12px; font-size: 0.8rem; color: var(--text-muted);
  text-decoration: none; border-radius: 6px; transition: 0.2s;
}
.nav-item-l3:hover { background: #f1f5f9; color: var(--primary); }
.tag { font-size: 0.6rem; background: #e0e7ff; color: var(--primary); padding: 2px 6px; border-radius: 4px; font-weight: 700; margin-right: 8px; }

/* Utilities */
.chevron { margin-left: auto; font-size: 8px; transition: 0.3s; opacity: 0.5; }
.chevron.rotate { transform: rotate(180deg); }
.chevron-s { margin-left: auto; font-size: 12px; opacity: 0.4; }

/* Footer */
.sidebar-footer { padding-top: 1rem; border-top: 1px solid var(--border); }
.user-pill { 
  display: flex; align-items: center; gap: 10px; padding: 10px;
  background: #f8fafc; border-radius: 14px; 
}
.avatar { width: 36px; height: 36px; background: var(--text-main); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem; }
.user-meta { flex: 1; display: flex; flex-direction: column; }
.u-name { font-size: 0.85rem; font-weight: 700; color: var(--text-main); }
.u-plan { font-size: 0.7rem; color: var(--primary); font-weight: 600; }
.settings-btn { background: none; border: none; cursor: pointer; opacity: 0.5; }

/* Transitions */
.expand-enter-active, .expand-leave-active { transition: all 0.3s ease-in-out; max-height: 200px; overflow: hidden; }
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
</style>