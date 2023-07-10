import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'Large'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'Body1'
    | 'Subtitle1'
    | 'Body2'
    | 'Subtitle2'
    | 'Caption'
    | 'Overline'
    | 'Link1'
    | 'Link2'
    | 'error'
  children?: ReactNode
  className?: string
}

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant = 'Body1', className, as: Component = 'p', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
