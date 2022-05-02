import { useQueryTasks } from '../hooks/useQueryTasks'

import type { FC } from 'react'
import type { TaskType } from '../types/types'

export const FetchTasks: FC = () => {
  const { data } = useQueryTasks()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Task List</p>
      {data?.map((task: TaskType) => (
        <p className="my-3 text-sm" key={task.id}>
          {task.title}
        </p>
      ))}
    </div>
  )
}
