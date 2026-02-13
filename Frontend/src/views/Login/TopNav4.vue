<template>
  <div class="deck-container">
    <div v-if="activeTab" class="deck-overlay" @click="activeTab = null"></div>

    <nav class="glass-deck">
      <div class="deck-island brand-deck">
        <div class="logo-morph">
          <div class="inner-shape"></div>
        </div>
        <div class="brand-info">
          <span class="main-title">INTEGRATED</span>
          <span class="sub-title">CORE PLATFORM</span>
        </div>
      </div>

      <div class="deck-island links-deck">
        <div 
          v-for="item in menuData" 
          :key="item.id"
          class="nav-trigger"
          :class="{ 'is-active': activeTab === item.id }"
          @mouseenter="setActive(item.id)"
        >
          {{ item.title }}
          <div class="active-glow"></div>
        </div>
      </div>

      <div class="deck-island user-deck">
        <div class="stat-badge">
          <span class="pulse"></span>
          LIVE
        </div>
        <div class="profile-shimmer">
          <span class="initials">SA</span>
        </div>
      </div>

      <transition name="morph">
        <div v-if="activeTab" class="morph-surface" @mouseleave="activeTab = null">
          <div class="surface-grid">
            
            <div class="category-list">
              <div 
                v-for="sub in activeTabData.children" 
                :key="sub.id"
                class="category-card"
                :class="{ 'cat-selected': activeSub === sub.id }"
                @mouseenter="activeSub = sub.id"
              >
                <div class="cat-icon">{{ sub.icon }}</div>
                <div class="cat-content">
                  <span class="cat-name">{{ sub.title }}</span>
                  <span class="cat-desc">{{ sub.desc }}</span>
                </div>
                <div class="cat-arrow">→</div>
              </div>
            </div>

            <div class="bento-panel">
              <div class="bento-header">
                <span class="bento-title">{{ activeSubData.title }}</span>
                <span class="bento-count">{{ activeSubData.children?.length }} Items</span>
              </div>
              
              <div class="bento-grid">
                <a 
                  v-for="leaf in activeSubData.children" 
                  :key="leaf.title" 
                  href="#" 
                  class="bento-item"
                >
                  <div class="item-visual">
                    <span class="item-tag">{{ leaf.tag }}</span>
                  </div>
                  <div class="item-meta">
                    <span class="item-label">{{ leaf.title }}</span>
                    <span class="item-action">Access Document</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeTab = ref(null);
const activeSub = ref(null);

const setActive = (id) => {
  activeTab.value = id;
  const item = menuData.find(m => m.id === id);
  if (item?.children) activeSub.value = item.children[0].id;
};

const activeTabData = computed(() => menuData.find(m => m.id === activeTab.value) || {});
const activeSubData = computed(() => activeTabData.value.children?.find(s => s.id === activeSub.value) || {});

const menuData = [
  { 
    id: 'portfolio', 
    title: 'Portfolio', 
    children: [
      { id: 'tax', title: 'Wealth Tax', icon: '💎', desc: 'Strategy & Compliance',
        children: [
          { title: 'Tax Ledger 2026', tag: 'Updated' },
          { title: 'Asset Valuation', tag: 'Audit' },
          { title: 'Liability Report', tag: 'PDF' }
        ]
      },
      { id: 'perf', title: 'Intelligence', icon: '🧠', desc: 'AI Performance Insights',
        children: [
          { title: 'Alpha Forecast', tag: 'AI' },
          { title: 'Stress Test', tag: 'Risk' }
        ]
      }
    ]
  },
  { 
    id: 'invest', 
    title: 'Investments', 
    children: [
      { id: 'global', title: 'Global Markets', icon: '🌐', desc: 'Cross-border Assets',
        children: [
          { title: 'US Equities', tag: 'NYSE' },
          { title: 'Crypto Index', tag: '24h' }
        ]
      }
    ]
  }
];
</script>

<style scoped>
.deck-container {
  --deck-bg: rgba(255, 255, 255, 0.7);
  --accent: #6366f1;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.deck-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.05); backdrop-filter: blur(4px); z-index: 10;
}

.glass-deck {
  position: relative; z-index: 20; display: flex; gap: 12px; align-items: center;
}

/* Island Styling */
.deck-island {
  background: var(--deck-bg);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8px 16px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  height: 56px;
}

/* Logo Morph */
.logo-morph {
  width: 32px; height: 32px; background: var(--accent); border-radius: 10px;
  display: flex; align-items: center; justify-content: center; transform: rotate(45deg);
}
.inner-shape { width: 12px; height: 12px; border: 2.5px solid white; border-radius: 3px; }
.brand-info { margin-left: 15px; display: flex; flex-direction: column; }
.main-title { font-weight: 800; font-size: 0.9rem; letter-spacing: 0.5px; color: var(--text-primary); }
.sub-title { font-size: 0.6rem; font-weight: 700; color: var(--accent); }

/* Nav Triggers */
.links-deck { gap: 4px; padding: 8px; }
.nav-trigger {
  padding: 8px 20px; border-radius: 16px; font-size: 0.9rem; font-weight: 600;
  color: var(--text-secondary); cursor: pointer; position: relative; transition: 0.3s;
}
.nav-trigger:hover, .is-active { color: var(--text-primary); background: rgba(255,255,255,0.5); }
.active-glow {
  position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 0%; height: 2px; background: var(--accent); transition: 0.3s;
}
.is-active .active-glow { width: 40%; box-shadow: 0 0 10px var(--accent); }

/* User Deck */
.stat-badge {
  font-size: 0.65rem; font-weight: 800; background: #ecfdf5; color: #10b981;
  padding: 4px 10px; border-radius: 100px; display: flex; align-items: center; gap: 6px;
}
.pulse { width: 6px; height: 6px; background: #10b981; border-radius: 50%; animation: blink 1.5s infinite; }
.profile-shimmer {
  margin-left: 12px; width: 36px; height: 36px; background: var(--text-primary);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
}
.initials { color: white; font-size: 0.75rem; font-weight: 800; }

/* Morphing Surface */
.morph-surface {
  position: absolute; top: 86px; left: 0; width: 800px; 
  background: white; border-radius: 32px; border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 40px 100px -20px rgba(0,0,0,0.15); padding: 12px; overflow: hidden;
}
.surface-grid { display: grid; grid-template-columns: 280px 1fr; height: 400px; }

/* Category Side */
.category-list { background: #f8fafc; border-radius: 24px; padding: 12px; }
.category-card {
  display: flex; align-items: center; gap: 15px; padding: 16px; 
  border-radius: 20px; cursor: pointer; transition: 0.3s; margin-bottom: 8px;
}
.cat-selected { background: white; box-shadow: 0 10px 20px rgba(0,0,0,0.04); }
.cat-icon { font-size: 1.5rem; }
.cat-name { display: block; font-weight: 700; font-size: 0.95rem; color: var(--text-primary); }
.cat-desc { font-size: 0.75rem; color: var(--text-secondary); }
.cat-arrow { margin-left: auto; opacity: 0; transition: 0.3s; }
.cat-selected .cat-arrow { opacity: 1; transform: translateX(5px); color: var(--accent); }

/* Bento Panel */
.bento-panel { padding: 30px; display: flex; flex-direction: column; }
.bento-header { display: flex; justify-content: space-between; margin-bottom: 25px; }
.bento-title { font-weight: 800; font-size: 1.2rem; color: var(--text-primary); }
.bento-count { font-size: 0.8rem; background: #f1f5f9; padding: 4px 12px; border-radius: 100px; color: var(--text-secondary); }

.bento-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.bento-item {
  background: #f8fafc; border-radius: 20px; padding: 16px; text-decoration: none;
  display: flex; flex-direction: column; gap: 12px; transition: 0.3s; border: 1px solid transparent;
}
.bento-item:hover { background: white; border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 15px 30px rgba(0,0,0,0.05); }

.item-visual { height: 40px; }
.item-tag { font-size: 0.65rem; font-weight: 800; color: var(--accent); background: #eef2ff; padding: 4px 10px; border-radius: 8px; }
.item-label { display: block; font-weight: 700; color: var(--text-primary); font-size: 0.95rem; }
.item-action { font-size: 0.75rem; color: var(--text-secondary); }

/* Transitions & Animations */
.morph-enter-active { transition: all 0.5s cubic-bezier(0.17, 0.84, 0.44, 1); }
.morph-enter-from { opacity: 0; transform: translateY(-10px) scale(0.98); }

@keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
</style>