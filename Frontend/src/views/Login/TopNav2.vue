<template>
  <header class="ultra-nav-wrapper">
    <div v-if="activeTab" class="nav-overlay" @click="closeAll"></div>

    <nav class="glass-nav">
      <div class="brand-section">
        <div class="brand-icon">I</div>
        <div class="brand-content">
          <span class="brand-name">INTEGRATED</span>
          <span class="brand-status">WEALTH PARTNER</span>
        </div>
      </div>

      <ul class="nav-list">
        <li v-for="mainItem in menuData" :key="mainItem.id" 
            class="nav-item" 
            @mouseenter="openTab(mainItem)"
            @mouseleave="handleMouseLeave">
          
          <button class="nav-link" :class="{ 'is-active': activeTab === mainItem.id }">
            {{ mainItem.title }} 
            <span v-if="mainItem.children" class="chevron">▼</span>
          </button>

          <transition name="ultra-drop">
            <div v-if="activeTab === mainItem.id && mainItem.children" class="mega-dropdown">
              
              <div class="side-panel">
                <div class="panel-label">SELECT CATEGORY</div>
                <div 
                  v-for="subItem in mainItem.children" 
                  :key="subItem.id"
                  class="panel-item" 
                  @click="activeSub = subItem.id"
                  :class="{ 'panel-active': activeSub === subItem.id }"
                >
                  <span class="icon">{{ subItem.icon }}</span> 
                  <div class="item-text">
                    <div class="item-title">{{ subItem.title }}</div>
                    <div class="item-desc">{{ subItem.desc }}</div>
                  </div>
                </div>
              </div>

              <div class="content-panel">
                <transition name="fade-shift" mode="out-in">
                  <div :key="activeSub" class="sub-sub-grid">
                    <div class="grid-header">{{ getActiveSubTitle }}</div>
                    
                    <a v-for="leaf in getActiveSubChildren" 
                       :key="leaf.title" 
                       href="#" 
                       class="grid-card">
                      <span class="card-tag">{{ leaf.tag }}</span>
                      <span class="card-label">{{ leaf.title }}</span>
                    </a>

                    <div v-if="!getActiveSubChildren.length" class="empty-state">
                      No documents available for this section.
                    </div>
                  </div>
                </transition>
              </div>

            </div>
          </transition>
        </li>
      </ul>

      <div class="user-pill">
        <div class="notification-btn">🔔</div>
        <div class="divider"></div>
          <span class="user-name">S. Ashok</span>
        <div class="user-info">
        
          <div class="avatar">SA</div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeTab = ref(null);
const activeSub = ref(null);

// TRENDY DATA STRUCTURE
const menuData = [
  { id: 'dash', title: 'Dashboard', children: null },
  { 
    id: 'portfolio', 
    title: 'Portfolio', 
    children: [
      { 
        id: 'tax', title: 'Tax Center', icon: '📜', desc: 'Compliances',
        children: [
          { title: 'Income Tax Statement', tag: 'FY 2025' },
          { title: 'Capital Gains Report', tag: 'LTCG' },
          { title: '80C Deductions', tag: 'PDF' }
        ]
      },
      { 
        id: 'perf', title: 'Performance', icon: '📈', desc: 'ROI Analytics',
        children: [
          { title: 'Asset Allocation', tag: 'REAL-TIME' },
          { title: 'Transaction Ledger', tag: 'HISTORY' }
        ]
      }
    ] 
  },
  { 
    id: 'invest', 
    title: 'Invest Online', 
    children: [
      { 
        id: 'mf', title: 'Mutual Funds', icon: '💰', desc: 'Direct & Regular',
        children: [
          { title: 'Top Rated Funds', tag: 'HOT' },
          { title: 'SIP Calculator', tag: 'TOOL' },
          { title: 'NFO Live', tag: 'NEW' }
        ]
      },
      { 
        id: 'gold', title: 'Digital Gold', icon: '✨', desc: '24K Purity',
        children: [
          { title: 'Buy Gold', tag: 'LIVE' },
          { title: 'Vault Balance', tag: 'SECURE' }
        ]
      }
    ] 
  }
];

const openTab = (item) => {
  activeTab.value = item.id;
  // Auto-select the first sub-item when opening
  if (item.children && item.children.length > 0) {
    activeSub.value = item.children[0].id;
  }
};

const closeAll = () => {
  activeTab.value = null;
  activeSub.value = null;
};

const handleMouseLeave = () => {
  // activeTab.value = null; // Uncomment to close on mouse leave
};

// Helpers to find active data
const getActiveSubTitle = computed(() => {
  const main = menuData.find(m => m.id === activeTab.value);
  const sub = main?.children?.find(s => s.id === activeSub.value);
  return sub ? sub.title : '';
});

const getActiveSubChildren = computed(() => {
  const main = menuData.find(m => m.id === activeTab.value);
  const sub = main?.children?.find(s => s.id === activeSub.value);
  return sub?.children || [];
});
</script>

<style scoped>
/* All the styles from your previous white theme go here */
.ultra-nav-wrapper {
  --primary: #2563eb;
  --bg-white: #ffffff;
  --text-dark: #0f172a;
  --text-light: #64748b;
  --border-color: #e2e8f0;
  padding: 1.5rem;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.nav-overlay { position: fixed; inset: 0; z-index: 10; background: rgba(0,0,0,0.02); }

.glass-nav {
  position: relative; z-index: 20; display: flex; align-items: center; justify-content: space-between;
  background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 20px;
  padding: 0 1.5rem; height: 70px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.brand-section { display: flex; align-items: center; gap: 12px; }
.brand-icon { width: 38px; height: 38px; background: var(--primary); border-radius: 10px; color: white; display: flex; align-items: center; justify-content: center; font-weight: 900; }
.brand-name { font-weight: 800; color: var(--text-dark); display: block; line-height: 1; }
.brand-status { font-size: 0.65rem; font-weight: 700; color: var(--primary); }

.nav-list { display: flex; list-style: none; gap: 5px; margin: 0; padding: 0; }
.nav-link { text-decoration: none; color: var(--text-light); font-weight: 600; font-size: 0.9rem; padding: 10px 16px; border-radius: 12px; transition: 0.2s; border: none; background: none; cursor: pointer; }
.nav-link:hover, .is-active { color: var(--primary); background: #f1f5f9; }
.chevron { font-size: 8px; margin-left: 5px; }

.mega-dropdown {
  position: absolute; top: 85px; left: 50%; transform: translateX(-50%);
  width: 760px; background: white; border-radius: 24px;
  border: 1px solid var(--border-color); display: grid;
  grid-template-columns: 280px 1fr; overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); z-index: 30;
}

.side-panel { background: #f8fafc; padding: 20px; border-right: 1px solid var(--border-color); }
.panel-label { font-size: 0.7rem; font-weight: 800; color: var(--text-light); margin-bottom: 15px; text-transform: uppercase; }
.panel-item { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 14px; cursor: pointer; transition: 0.2s; margin-bottom: 4px; }
.panel-item:hover { background: #f1f5f9; }
.panel-active { background: white !important; box-shadow: 0 4px 12px rgba(0,0,0,0.05); color: var(--primary); }

.item-title { font-size: 0.9rem; font-weight: 700; }
.item-desc { font-size: 0.75rem; color: var(--text-light); }

.content-panel { padding: 24px; background: white; min-height: 300px; }
.sub-sub-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.grid-header { grid-column: span 2; font-weight: 800; font-size: 0.95rem; color: var(--text-dark); margin-bottom: 8px; }

.grid-card { border: 1px solid var(--border-color); padding: 16px; border-radius: 16px; text-decoration: none; transition: 0.2s; }
.grid-card:hover { border-color: var(--primary); background: #f0f7ff; transform: translateY(-2px); }
.card-tag { font-size: 0.65rem; color: var(--primary); font-weight: 800; display: block; margin-bottom: 4px; }
.card-label { font-size: 0.85rem; color: var(--text-dark); font-weight: 600; }

.user-pill { display: flex; align-items: center; gap: 12px; }
.avatar { width: 36px; height: 36px; background: var(--text-dark); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: bold; }

/* Transitions */
.ultra-drop-enter-active { transition: all 0.3s ease-out; }
.ultra-drop-enter-from { opacity: 0; transform: translateX(-50%) translateY(15px); }
.fade-shift-enter-active { transition: all 0.2s ease; }
.fade-shift-enter-from { opacity: 0; transform: translateX(10px); }
</style>