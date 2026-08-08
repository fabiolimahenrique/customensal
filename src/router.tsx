import { createBrowserRouter } from 'react-router-dom'
import { Button } from './components/shered/button'
import { PiggyBank } from 'lucide-react' 
import { RootLayout } from './components/layout/RootLayout'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: 
         <>
         <h1>Inicial</h1>
         <Button variant='primary' icon={PiggyBank} ></Button>
         </>,
      },
      {
        path: '/resultado',
        element: <h1>Resultado</h1>,
      },
      {
        path: '/historico',
        element: <h1>Histórico de Simulações</h1>,
      },
    ],
  },
])