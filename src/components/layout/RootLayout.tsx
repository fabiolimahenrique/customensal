import { Outlet } from 'react-router-dom'
import { Header } from '../shered/Header'



export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
