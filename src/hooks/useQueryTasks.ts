import axios from 'axios'
import { useQuery } from 'react-query'

import { delay } from '../utils/fetchDelay'

export const getTasks = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3').then(await delay(5000))
  return data
}

/**
 * react-queryのuseQueryを使って取得したTasksデータを返すカスタムフック
 */
export const useQueryTasks = () => {
  // react-queryのuseQueryを使ってデータを取得
  const result = useQuery({
    queryKey: ['tasks'], // キャッシュキー
    queryFn: getTasks, // fetch関数
  })
  return result
}
