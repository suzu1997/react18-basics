import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ExclamationCircleIcon } from '@heroicons/react/solid'

import { Layout } from '../components/Layout'
import { Spinner } from '../components/Spinner'
import { FetchUsers } from '../components/FetchUsers'
import { FetchTasks } from '../components/FetchTasks'
import { FetchComments } from '../components/FetchComments'

import type { FC } from 'react'

export const SuspenseDemo: FC = () => {
  return (
    <Layout>
      <p className="mb-3 text-xl font-bold text-blue-500">Suspense Demo</p>

      {/* コンポーネントごとにエラー、Loadingをハンドリングする場合 */}
      <ErrorBoundary
        // コンポーネント内でエラーが生じたら表示される
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary>

      {/* まとめてエラー、Loadingをハンドリングする場合 */}
      {/* <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
          <FetchTasks />
          <FetchComments />
        </Suspense>
      </ErrorBoundary> */}
    </Layout>
  )
}
