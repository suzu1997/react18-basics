import { useQueryUsers } from '../hooks/useQueryUsers'

import type { FC } from 'react'
import type { UserType } from '../types/types'

export const FetchUsers: FC = () => {
  const { status, data } = useQueryUsers()

  // Suspenseを使わない(コンポーネントレベルで状態のハンドリングを行う)場合
  // if (status === 'loading') return <p>Loading...</p>
  // if (status === 'error') return <p>Error</p>
  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">User List</p>
      {data?.map((user: UserType) => (
        <p className="my-3 text-sm" key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  )
}
