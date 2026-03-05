import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoices from './routes/Invoices/index.tsx'
import Expenses from './routes/Expenses/index.tsx'
import NotFound from './routes/NotFound/index.tsx'
import Invoice from './routes/Invoices/Invoice/index.tsx'
import InvoiceIndex from './routes/Invoices/InvoiceIndex/index.tsx'
import Welcome from './routes/Welcome/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route
            index
            element={<Welcome />}
          />
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />} >
            <Route
              index
              element={<InvoiceIndex />}
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path='*' element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
