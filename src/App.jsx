import { useState } from 'react'
import CruceEntrada from './screens/CruceEntrada'
import AristotelesChat from './screens/AristotelesChat'
import CareerOSDashboard from './screens/CareerOSDashboard'
import PausaIntencional from './screens/PausaIntencional'

const PANTALLAS = {
  ENTRADA: 'entrada',
  ARISTOTELES: 'aristoteles',
  DASHBOARD: 'dashboard',
  PAUSA: 'pausa',
}

export default function App() {
  const [pantalla, setPantalla] = useState(PANTALLAS.ENTRADA)

  return (
    <div className="min-h-screen bg-gray-200 flex items-start justify-center py-0 sm:py-8">
      <div className="w-full sm:max-w-sm sm:rounded-3xl overflow-hidden shadow-2xl bg-white" style={{ minHeight: '100svh' }}>
        {pantalla === PANTALLAS.ENTRADA && (
          <CruceEntrada onContinuar={() => setPantalla(PANTALLAS.ARISTOTELES)} />
        )}
        {pantalla === PANTALLAS.ARISTOTELES && (
          <AristotelesChat onContinuar={() => setPantalla(PANTALLAS.DASHBOARD)} />
        )}
        {pantalla === PANTALLAS.DASHBOARD && (
          <CareerOSDashboard onPausar={() => setPantalla(PANTALLAS.PAUSA)} />
        )}
        {pantalla === PANTALLAS.PAUSA && (
          <PausaIntencional onVolver={() => setPantalla(PANTALLAS.DASHBOARD)} />
        )}
      </div>
    </div>
  )
}
