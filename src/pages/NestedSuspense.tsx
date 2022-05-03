import { Suspense } from 'react'

import { Layout } from '../components/Layout'
import { FetchUsers } from '../components/FetchUsers'
import { FetchTasks } from '../components/FetchTasks'
import { Spinner } from '../components/Spinner'

import type { FC } from 'react'

/**
 * ネストしたSuspenseの挙動を確かめるコンポーネント.
 */
export const NestedSuspense: FC = () => {
  return (
    <Layout>
      <p className="mb-3 text-xl font-bold text-blue-500">Nested Suspense</p>
      <Suspense
        fallback={
          <>
            <p className="my-5 text-green-500">Showing outer skelton...</p>
            <Spinner />
          </>
        }
      >
        <FetchUsers />
        <Suspense
          fallback={
            <>
              <p className="my-5 text-pink-500">Showing inner skelton...</p>
              <Spinner />
            </>
          }
        >
          <FetchTasks />
        </Suspense>
      </Suspense>
    </Layout>
  )
}
