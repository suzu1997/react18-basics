import { useQueryComments } from '../hooks/useQueryComments'

import type { FC } from 'react'
import type { CommentType } from '../types/types'

export const FetchComments: FC = () => {
  const { data } = useQueryComments()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Comment List</p>
      {data?.map((comment: CommentType) => (
        <p className="my-3 text-sm" key={comment.id}>
          {comment.name}
        </p>
      ))}
    </div>
  )
}
