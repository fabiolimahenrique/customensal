import { createBrowserRouter } from 'react-router-dom'
import { Button } from './components/shered/button'
import { PiggyBank } from 'lucide-react' 
import { RootLayout } from './components/layout/RootLayout'
import { SimulationFormPage } from './pages/SimulationFormPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
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