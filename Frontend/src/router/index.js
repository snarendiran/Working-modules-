import { createRouter, createWebHistory } from "vue-router";
import Demopage from "@/views/Demopage/Demopage.vue";
import Login from "@/views/Login/Login.vue";
import Login1 from "@/views/Login/Login1.vue";
import Login2 from "@/views/Login/Login2.vue";
import Login3 from "@/views/Login/Login3.vue";
import Login4 from "@/views/Login/Login4.vue";
import Login5 from "@/views/Login/Login5.vue";
import Login6 from "@/views/Login/Login6.vue";
import Topnav from "@/views/Login/Topnav.vue";
import Topnav1 from "@/views/Login/Topnav1.vue";
import Topnav2 from "@/views/Login/Topnav2.vue";
import Topnav3 from "@/views/Login/Topnav3.vue";
import Topnav4 from "@/views/Login/Topnav4.vue";
import Commonclass from "@/views/Login/Commonclass.vue";
// /**
//  * ?? Auto-import ALL vue files under /views
//  * Vite will bundle them safely
//  */
// const viewModules = import.meta.glob("../views/**/*.vue");

// /**
//  * ?? Build routes from backend menu JSON
//  */
// function buildRoutesFromMenu(menu) {
//   const routes = [];

//   menu.forEach(main => {
//     main.SubMenu?.forEach(sub => {
//       sub.SubSubMenu?.forEach(child => {

//         const componentPath = `../views${child.SSMLink}`;
//         const component = viewModules[componentPath];

//         if (!component) {
//           console.warn("?? Component not found:", componentPath);
//           return;
//         }

//         routes.push({
//           path: child.SSMLinkURL,
//           name: child.SSMName.replace(/\s+/g, "_"), // ? REQUIRED
//           component,
//           meta: { requiresAuth: true }
//         });
//       });
//     });
//   });

//   return routes;
// }


/**
 * ?? Base routes (static)
 */


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/Demopage" },
    { path: "/Demopage", component: Demopage },
    { path: "/Login", component: Login },
    { path: "/Topnav", component: Topnav },
    { path: "/Topnav1", component: Topnav1 },
    { path: "/Topnav2", component: Topnav2 },
    { path: "/Topnav3", component: Topnav3 },
     { path: "/Topnav4", component: Topnav4 },
    { path: "/Login1", component: Login1 },
    { path: "/Login2", component: Login2 },
    { path: "/Login3", component: Login3 },
    { path: "/Login4", component: Login4 },
    { path: "/Login5", component: Login5 },
    { path: "/Login6", component: Login6 },
    { path: "/Commonclass", component: Commonclass },
  ]
});

/**
//  * ?? Load role-based routes AFTER login
//  */
// let routesLoaded = false;

// export async function loadDynamicRoutes() {
//   if (routesLoaded) return;

//   try {
//     let menu;
//     const cachedMenu = sessionStorage.getItem("MenuJson");

//     if (cachedMenu) {
//       menu = JSON.parse(cachedMenu);
//     } else {
//       const res = await api.get("/menu/load");
//       // console.log("res:")
//       // console.log(res.menu[0].ResultJson)
//       menu = JSON.parse(res.data.menu[0].ResultJson) || [];
//       // menu = JSON.parse(res.menu[0].ResultJson) || [];

//       sessionStorage.setItem("menu",  JSON.stringify(menu));
//     }

//     const dynamicRoutes = buildRoutesFromMenu(menu);

//     dynamicRoutes.forEach(route => {
//       if (!router.hasRoute(route.name)) {
//         router.addRoute(route);
//       }
//     });

//     // ? ADD 404 ROUTE LAST (VERY IMPORTANT)
//     if (!router.hasRoute("NotFound")) {
//       router.addRoute({
//         path: "/:pathMatch(.*)*",
//         name: "NotFound",
//         component: NotFound
//       });
//     }
//     routesLoaded = true;
//   } catch (err) {
//     console.error(" Failed to load dynamic routes", err);
//     sessionStorage.removeItem("menu"); // safety cleanup
//     throw err;
//   }
// }

// /**
//  * ?? Auth Guard
//  */

// const PUBLIC_ROUTES = ["/login"];

// router.beforeEach(async (to, from, next) => {

//   // ?? Public route ? no auth, no menu load
//   if (PUBLIC_ROUTES.includes(to.path)) {
//     return next();
//   }

//   // ?? Auth check FIRST
//   try {
//     await api.get("/auth/check");
//   } catch {
//     sessionStorage.removeItem("menu");
//     routesLoaded = false;
//     return next("/login");
//   }

//   // ?? Load dynamic routes ONLY AFTER auth
//   if (!routesLoaded) {
//     try {
//       await loadDynamicRoutes();
//       return next({ ...to, replace: true });
//     } catch {
//       return next("/login");
//     }
//   }

//   next();
// });


export default router;
