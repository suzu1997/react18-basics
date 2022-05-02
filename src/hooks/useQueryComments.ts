import axios from 'axios'
import { useQuery } from 'react-query'

import { delay } from '../utils/fetchDelay'

export const getComments = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=3').then(await delay(1000))
  return data
}

/**
 * react-queryのuseQueryを使って取得したTasksデータを返すカスタムフック
 */
export const useQueryComments = () => {
  // react-queryのuseQueryを使ってデータを取得
  const result = useQuery({
    queryKey: ['comments'], // キャッシュキー
    queryFn: getComments, // fetch関数
    staleTime: Infinity // refetchが走らないようにする
  })
  return result
}
