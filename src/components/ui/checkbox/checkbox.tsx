import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import { Check } from '../../../assets/check.tsx'
import { Typography } from '../typography/typography.tsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  //position,
  disabled,
  required,
  label,
  id,
  //className,
}) => {
  return (
    <div className={s.container}>
      <LabelRadix.Root asChild>
        <Typography variant="Body2" className={s.label} as={'label'}>
          <div className={s.buttonWrapper}>
            <CheckboxRadix.Root
              className={s.root}
              checked={checked}
              onCheckedChange={onChange}
              disabled={disabled}
              required={required}
              id={id}
            >
              {checked && (
                <CheckboxRadix.Indicator className={s.indicator} forceMount>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
