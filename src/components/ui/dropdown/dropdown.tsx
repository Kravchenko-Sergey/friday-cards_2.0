import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Avatar } from '../avatar/avatar.tsx'
import { Typography } from '../typography/typography.tsx'

import s from './dropdown.module.scss'

type MenuItem = {
  id: string
  icon?: string
  title: string
  onClick?: () => void
}

type DropdownProps = {
  name: string
  email: string
  src: string
  items: MenuItem[]
}

export const Dropdown: FC<DropdownProps> = ({ name, email, src, items }) => {
  return (
    <DropdownMenu.Root>
      <div className={s.wrapper}>
        <DropdownMenu.Trigger className={s.trigger}>
          <Typography variant={'Subtitle1'} className={s.name}>
            {name}
          </Typography>
          <Avatar src={src} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className={s.content} sideOffset={10} align={'end'}>
          {src && (
            <div className={`${s.item} ${s.head}`}>
              <Avatar src={src} />
              <div className={s.info}>
                <Typography variant={'Subtitle2'} className={s.name}>
                  {name}
                </Typography>
                <Typography variant={'Caption'} className={s.email}>
                  {email}
                </Typography>
              </div>
            </div>
          )}
          <DropdownMenu.Separator className={s.separator} />
          {items.map(item => (
            <>
              <DropdownMenu.Item key={item.id} onSelect={item.onClick} className={s.item}>
                <img src={item.icon} alt="itemIcon" className={s.icon} />
                <Typography className={s.title}>{item.title}</Typography>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className={s.separator} />
            </>
          ))}
          <DropdownMenu.Arrow className={s.arrow_block} asChild>
            <div className={s.arrow} />
          </DropdownMenu.Arrow>
        </DropdownMenu.Content>
      </div>
    </DropdownMenu.Root>
  )
}
