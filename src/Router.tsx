import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import { AutoBatch } from './components/AutoBatch'

import type { FC } from 'react'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      {/* cookieに値が入っていない場合(ログインしてない場合は)ログイン画面に遷移する。 */}
      {/* ログイン画面を表示させるには、下記のように<Route>を<Route>で囲む */}
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/autobatch'} element={<AutoBatch />} />
      </Routes>
    </BrowserRouter>
  )
}
