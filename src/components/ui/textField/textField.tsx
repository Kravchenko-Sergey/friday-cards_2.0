import { ComponentProps, ComponentPropsWithoutRef, FC, useState } from 'react'

import s from './textField.module.scss'

import { EyeSvg } from 'assets/eye.tsx'
import { VisibilityOffSvg } from 'assets/visibility-off.tsx'
import { Typography } from 'components/ui/typography'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<TextFieldProps> = ({
  className,
  errorMessage,
  placeholder,
  type,
  containerProps,
  labelProps,
  label,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const isShowPasswordButtonShown = type === 'password'
  const finalType = getFinalType(type, showPassword)

  function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
    if (type === 'password' && showPassword) {
      return 'text'
    }

    return type
  }

  return (
    <div className={s.root}>
      {label && (
        <Typography variant="Body2" as="label" className={s.label}>
          {label}
        </Typography>
      )}
      <div className={s.fieldContainer}>
        <input className={s.field} placeholder={placeholder} type={finalType} {...restProps} />
        {isShowPasswordButtonShown && (
          <button
            className={s.showPassword}
            type={'button'}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <VisibilityOffSvg /> : <EyeSvg />}
          </button>
        )}
      </div>
      <Typography variant="error" className={s.error}>
        {errorMessage}
      </Typography>
    </div>
  )
}
