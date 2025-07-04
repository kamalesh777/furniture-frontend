'use client'
import React, { type PropsWithChildren } from 'react'

import { ConfigProvider, theme } from 'antd'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

// eslint-disable-next-line no-duplicate-imports

// eslint-disable-next-line no-duplicate-imports

import type { RootState } from 'src/store'

import LayoutWrapper from './LayoutWrapper'

const ThemeWrapper = ({ children }: PropsWithChildren): JSX.Element => {
  const theme = useSelector((state: RootState) => state.theme)
  const pathname = usePathname()
  const isAuth = pathname.startsWith('/auth')

  return (
    <ConfigProvider theme={theme}>
      <ThemeToken>{!isAuth ? <LayoutWrapper>{children}</LayoutWrapper> : children}</ThemeToken>
    </ConfigProvider>
  )
}

const { useToken } = theme

// use the theme token and pass it by global css
const ThemeToken = (props: PropsWithChildren): JSX.Element => {
  const { token } = useToken()

  return (
    <>
      <style jsx global>
        {`
          :root {
            --primary-color: ${token?.colorPrimary};
            --primary-border-color: ${token?.colorPrimaryBorder};
            --primary-hover-color: ${token?.colorPrimaryHover};
            --primary-bg-color: ${token?.colorPrimaryBg};
            --error-color: ${token?.colorError};
            --error-color-bg: ${token?.colorErrorBg};
            --success-color: ${token?.colorSuccess};
            --success-color-bg: ${token?.colorSuccessBg};
            --warning-color: ${token?.colorWarning};
            --warning-color-bg: ${token?.colorWarningBg};
          }
        `}
      </style>
      {props.children}
    </>
  )
}

export default ThemeWrapper
