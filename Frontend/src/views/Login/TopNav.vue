<template>
  <nav class="top-nav">
    <div class="header-main">
      <div class="logo-section">
        <img src="https://www.iepindia.net/integrated/menuv1/images/integrated.png" alt="Integrated" class="logo-img">
       
      </div>
      
      <div class="user-actions">
        <button class="icon-btn"><i class="fas fa-cog"></i></button>
        <button class="icon-btn"><i class="fas fa-bell"></i></button>
        <div class="user-profile">
          <span class="user-name">S Ashok</span>
          <div class="avatar">SA</div>
        </div>
      </div>
    </div>

    <div class="nav-links-container">
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#"><i class="fas fa-th-large"></i> Dashboard</a>
        </li>
        <li class="nav-item has-submenu">
          <a href="#">
            <i class="fas fa-chart-pie"></i> Reports <i class="fas fa-chevron-down s-icon"></i>
          </a>
          <ul class="submenu">
            <li><a href="#"><i class="fas fa-briefcase"></i> Current Portfolio</a></li>
            <li><a href="#"><i class="fas fa-chart-line"></i> Asset Category Breakup</a></li>
            <li><a href="#"><i class="fas fa-history"></i> Transactions</a></li>
            <li><a href="#"><i class="fas fa-file-invoice-dollar"></i> Tax Report</a></li>
            <li><a href="#"><i class="fas fa-shield-alt"></i> ELSS Statement</a></li>
          </ul>
        </li>
        <li class="nav-item"><a href="#"><i class="fas fa-globe"></i> Invest Online</a></li>
        <li class="nav-item"><a href="#"><i class="fas fa-analytics"></i> Analytics</a></li>
        <li class="nav-item"><a href="#"><i class="fas fa-user-circle"></i> My Profile</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

.top-nav {

  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* White Top Section */
.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background: white;
}

.logo-img { height: 45px; }
.tagline {
  font-size: 0.7rem;
  color: #64748b;
  letter-spacing: 1px;
  margin-left: 15px;
  border-left: 1px solid #e2e8f0;
  padding-left: 15px;
}

.user-actions { display: flex; align-items: center; gap: 20px; }
.icon-btn { 
  background: none; border: none; color: #64748b; font-size: 1.2rem; cursor: pointer; 
  transition: 0.3s;
}
.icon-btn:hover { color: #1948cd; }

.user-profile { display: flex; align-items: center; gap: 10px; }
.user-name { font-weight: 600; color: #1e293b; font-size: 0.9rem; }
.avatar {
  width: 35px; height: 35px; background: #1948cd; color: white;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-weight: bold; font-size: 0.8rem;
}

/* Deep Azure Navigation Bar */
.nav-links-container {
  background: linear-gradient(90deg, #2749a5 0%, #1f47a3 100%);
  padding: 0 40px;
}

.nav-menu {
  list-style: none; display: flex; margin: 0; padding: 0; gap: 5px;
}

.nav-item { position: relative; }
.nav-item a {
  display: block; padding: 15px 20px; color: rgba(255,255,255,0.8);
  text-decoration: none; font-size: 0.9rem; font-weight: 500;
  transition: all 0.3s ease; border-bottom: 3px solid transparent;
}

.nav-item a i { margin-right: 8px; opacity: 0.7; }
.nav-item a:hover, .nav-item a.active {
  color: white; background: rgba(255,255,255,0.1);
  border-bottom: 3px solid #93c5fd;
}

.s-icon { font-size: 0.7rem; margin-left: 5px; }

/* Elegant Submenu (Blue Format) */
.nav-item:hover .submenu {
  opacity: 1; visibility: visible; transform: translateY(0);
}

.submenu {
  position: absolute; top: 100%; left: 0; width: 240px;
  background: #ffffff; padding: 10px 0; border-radius: 0 0 12px 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  list-style: none; opacity: 0; visibility: hidden;
  transform: translateY(10px); transition: all 0.3s ease;
  z-index: 100;
}

.submenu li a {
  padding: 12px 20px; color: #1e293b; border: none; background: transparent;
}

.submenu li a i { color: #1948cd; }
.submenu li a:hover {
  background: #f0f4ff; color: #1948cd; border: none;
}
</style>