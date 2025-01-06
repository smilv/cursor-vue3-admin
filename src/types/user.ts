export interface UserInfo {
  id: number
  username: string
  avatar?: string
  roles: string[]
}

export interface LoginForm {
  username: string
  password: string
} 