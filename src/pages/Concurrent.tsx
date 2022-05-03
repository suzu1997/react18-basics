import { useTransition, useEffect, useState } from 'react'

import axios from 'axios'

import { NavBar } from '../components/NavBar'

import type { FC, ChangeEventHandler } from 'react'
import type { PhotoType } from '../types/types'

export const Concurrent: FC = () => {
  const [isPending, startTransition] = useTransition()

  const [photos, setPhotos] = useState<PhotoType[]>([])
  const [input, setInput] = useState('') //Urgent state update
  const [searchKey, setSearchKey] = useState('') //Not urgent state update

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setPhotos(res.data)
    }
    fetchData()
  }, [])

  const filteredPhotos = photos.filter((photo) =>
    photo.title.includes(searchKey),
  )

  const updateHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
    // 少し遅れてステート更新
    startTransition(() => {
      setSearchKey(e.target.value)
    })
  }
  return (
    <div className="flex flex-col items-center font-mono text-gray-600">
      <NavBar />
      <p
        className={`my-3 text-xl font-bold ${
          isPending ? 'text-pink-500' : 'text-blue-500'
        }`}
      >
        startTransition (concurrent feature)
      </p>
      <input
        type="text"
        className="mb-5 rounded border border-gray-300 px-3 py-1 text-xs"
        value={input}
        onChange={updateHandler}
      />
      {filteredPhotos.map((photo) => (
        <p className="mb-2 text-xs" key={photo.id}>
          {photo.title}
        </p>
      ))}
    </div>
  )
}
