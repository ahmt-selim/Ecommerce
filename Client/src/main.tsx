import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Routes.tsx'
import { RouterProvider } from 'react-router'
import { CartContextProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(//index.html dosyasındaki "root" id sine sahip elementi bulur ve uygulamayı oraya render eder.
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>,
)
//sayfa haritalandırması için App yerine RouterProvider eklendi. 