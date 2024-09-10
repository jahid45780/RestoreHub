import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './Component/providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { router } from './Component/Router/Roter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <Toaster />
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
