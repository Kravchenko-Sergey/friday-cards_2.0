/*import { ComponentPropsWithoutRef, FC } from 'react'

import s from './card.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card: FC<CardProps & HTMLDivElement> = (...restProps) => {
  return <div className={s.container} {...restProps}></div>
}*/

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './card.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
  return <div ref={ref} className={s.container} {...restProps}></div>
})
