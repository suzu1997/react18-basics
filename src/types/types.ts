export type UserType = {
  address: {
    city: string
    geo: {
      lat: string
      lng: string
    }
    street: string
    suite: string
    zipcode: string
  }
  company: {
    bs: string
    catchPhrase: string
    name: string
  }
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export type TaskType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

export type CommentType = {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

export type PhotoType = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}