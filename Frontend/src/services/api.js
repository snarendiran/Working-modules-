import axios from "axios";
// import router from "@/router";

/* ---------------- AXIOS INSTANCE ---------------- */
const api = axios.create({
  baseURL: "http://10.70.100.14:5002/api",
});

// /* ---------------- DEVICE ID ---------------- */
// if (!localStorage.getItem("device_id")) {
//   const deviceId = btoa(
//     navigator.userAgent +
//     screen.width +
//     screen.height +
//     Intl.DateTimeFormat().resolvedOptions().timeZone
//   );
//   localStorage.setItem("device_id", deviceId);
// }

// /* ---------------- REQUEST INTERCEPTOR ---------------- */
// // Automatically add device info and user-agent to every request
// api.interceptors.request.use(config => {
//   const deviceId = localStorage.getItem("device_id");

//   if (!config.headers) config.headers = {};

//   config.headers["X-Device-Id"] = deviceId;
//   config.headers["X-User-Agent"] = navigator.userAgent;

//   return config;
// });

// /* ---------------- REFRESH STATE ---------------- */
// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error) => {
//   failedQueue.forEach(p => {
//     error ? p.reject(error) : p.resolve();
//   });
//   failedQueue = [];
// };


// /* ---------------- RESPONSE INTERCEPTOR ---------------- */
// api.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;

//     //  Ignore refresh endpoint itself
//     if (originalRequest?.url?.includes("/auth/refresh")) {
//       return Promise.reject(error);
//     }

//     //  Access token expired
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       //  Wait if refresh already in progress
//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         }).then(() => api(originalRequest));
//       }

//       isRefreshing = true;

//       try {
//         //  Try refresh (deviceId already sent via request interceptor)
//         await api.post("/auth/refresh");

//         isRefreshing = false;
//         processQueue(null);

//         //  Retry original request
//         return api(originalRequest);

//       } catch (err) {
//         isRefreshing = false;
//         processQueue(err);

//         //  HARD LOGOUT
//         try {
//           await api.post("/auth/logout");
//         } catch (_) { }

//         //  Redirect safely
//         router.replace("/login");

//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
