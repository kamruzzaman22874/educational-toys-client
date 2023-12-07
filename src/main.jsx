import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'
import AuthProviders from './providers/AuthProviders'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-8xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <RouterProvider router={router}>
          </RouterProvider>

          <MessengerCustomerChat
            pageId="183847784811940"
            appId="6895433173827211"
          />,
        </AuthProviders>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
