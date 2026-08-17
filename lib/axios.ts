// lib/axios.ts
import axios from "axios";

// for calls to the external backend (dummyjson)
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// for calls to your own Next.js route handlers (no baseURL needed —
// relative paths resolve against the current origin automatically)
export const internalApi = axios.create({
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});


// api.interceptors.request.use((config)=>{
//   const token = useAuthStore.getState().accessToken;
  
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config
// },
// (error)=>Promise.reject(error)
// )