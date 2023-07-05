import s from '../avatar/avatar.module.scss'

export type AvatarPropsType = {
  name?: string
  src: string
  size?: number
}

export const Avatar = ({ name, src, size = 36 }: AvatarPropsType) => {
  return <img src={src} alt={`${name} avatar`} className={s.avatar} width={size} height={size} />
}
