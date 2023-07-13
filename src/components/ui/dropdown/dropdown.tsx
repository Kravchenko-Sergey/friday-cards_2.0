import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

import { Avatar } from 'components/ui/avatar'
import { Typography } from 'components/ui/typography'

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
      <DropdownMenu.Trigger className={s.trigger}>
        <Typography variant={'Subtitle1'} className={s.name} style={{ color: 'white' }}>
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
    </DropdownMenu.Root>
  )
}
