import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useLocalStorage } from 'usehooks-ts'
import { FaMoon, FaSun } from 'react-icons/fa'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState(theme === 'light')

  const handleThemeChange = (enabled) => {
    setTheme(enabled ? 'light' : 'dark')
    setEnabled(enabled)
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleThemeChange}
      className={classNames(
        enabled ? 'bg-amber-400' : 'bg-slate-400',
        'relative inline-flex h-6 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
      )}
    >
      <span className='sr-only'>Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-8' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <FaMoon className='h-3 w-3 text-slate-800' />
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <FaSun className='h-3 w-3 text-yellow-800' />
        </span>
      </span>
    </Switch>
  )
}

export default ThemeSwitch
