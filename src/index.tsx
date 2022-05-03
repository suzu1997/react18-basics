// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Router } from './Router'

// react-queryの設定
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // fetch失敗時に再試行しない
      refetchOnWindowFocus: false, // ブラウザへのフォーカス時に再取得しない
      suspense: true, // React18のSuspense機能を使うためにtrueにする
      staleTime: 300000, // 再取得までの保持期間
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>,
  // </React.StrictMode>,
)
