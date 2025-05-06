import { ReactNode } from 'react'

export default function ComplexDashboardLayout ({
  children,
  analysis,
  metrics,
  notifications,
  login,
}: {
  children: ReactNode
  analysis: ReactNode
  metrics: ReactNode
  notifications: ReactNode
  login: ReactNode
}) {
  const isLoggedIn = true
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{analysis}</div>
          <div>{metrics}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    login
  )
}
