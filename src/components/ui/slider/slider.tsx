import { useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export const Slider = () => {
  const [values, setValues] = useState<[number, number]>([25, 75])

  const handleSliderChange = (e: any) => {
    const newValues = e.currentTarget.value

    setValues(newValues)
  }

  return (
    <div className={s.container}>
      <span className={s.value}>{values[0]}</span>
      <SliderRadix.Root
        className={s.root}
        value={values}
        max={100}
        step={1}
        onChange={e => handleSliderChange(e)}
      >
        <SliderRadix.Track className={s.track}>
          <SliderRadix.Range className={s.range} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.thumb} />
        <SliderRadix.Thumb className={s.thumb} />
      </SliderRadix.Root>
      <span className={s.value}>{values[1]}</span>
    </div>
  )
}
