import { useState } from 'react'
// import { flushSync } from 'react-dom'

import axios from 'axios'

import { Layout } from '../components/Layout'

import type { FC } from 'react'

export const AutoBatch: FC = () => {
  const [count, setCount] = useState(0)
  const [fetchCount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])

  const clickHandler = () => {
    // イベントハンドラーの中で2回のステート更新があっても、レンダリングは1回(バッジ)(Reactv17〜)
    // setCount((count) => count + 1)
    // setFetchCount((fetchCount) => fetchCount + 1)

    // promise内部で2回のステート更新があっても、レンダリングは1回(バッジ)(Reactv18〜)
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      // flushSync... Automatic Batchingの無効化 それぞれでレンダリングが走る
      // flushSync(() => {
      //   setUsers(res.data)
      // })
      // flushSync(() => {
      //   setFetchCount((count) => count + 1)
      // })
      setUsers(res.data)
      setFetchCount((fetchCount) => fetchCount + 1)
    })
  }

  return (
    <Layout>
      <p className="my-3 text-xl font-bold text-blue-500">Automatic batching</p>
      <p className="my-5">{fetchCount}</p>
      <button
        className="my-5 rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500"
        onClick={clickHandler}
      >
        click
      </button>
    </Layout>
  )
}
