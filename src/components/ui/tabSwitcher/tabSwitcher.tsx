import * as Tabs from '@radix-ui/react-tabs'

import s from './tabSwitcher.module.scss'

export const TabSwitcher = () => {
  return (
    <Tabs.Root className={s.TabsRoot} defaultValue="tab1">
      <Tabs.List className={s.TabsList} aria-label="Manage your account">
        <Tabs.Trigger className={s.TabsTrigger} value="tab1">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger className={s.TabsTrigger} value="tab2">
          Password
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
