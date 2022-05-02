import axios from 'axios'
import { useQuery } from 'react-query'

import { delay } from '../utils/fetchDelay'

export const getUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=3').then(await delay(3000))
  return data
}

/**
 * react-queryのuseQueryを使って取得したUsersデータを返すカスタムフック
 */
export const useQueryUsers = () => {
  // react-queryのuseQueryを使ってデータを取得
  const result = useQuery({
    queryKey: ['users'], // キャッシュキー
    queryFn: getUsers, // fetch関数
  })
  return result
}
