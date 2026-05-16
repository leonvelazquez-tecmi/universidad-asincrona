import { useState } from 'react'
import CruceEntrada from './screens/CruceEntrada'
import AristotelesChat from './screens/AristotelesChat'
import CareerOSDashboard from './screens/CareerOSDashboard'
import PausaIntencional from './screens/PausaIntencional'
import MicroBloque from './screens/MicroBloque'
import CierreDia from './screens/CierreDia'
import BienvenidaDia2 from './screens/BienvenidaDia2'

const PANTALLAS = {
  ENTRADA: 'entrada',
  ARISTOTELES: 'aristoteles',
  DASHBOARD: 'dashboard',
  PAUSA: 'pausa',
  MICROBLOQUE: 'microbloque',
  CIERRE_DIA: 'cierre_dia',
  DIA_2: 'dia_2',
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
          <CareerOSDashboard
            onPausar={() => setPantalla(PANTALLAS.PAUSA)}
            onEmpezar={() => setPantalla(PANTALLAS.MICROBLOQUE)}
          />
        )}
        {pantalla === PANTALLAS.PAUSA && (
          <PausaIntencional onVolver={() => setPantalla(PANTALLAS.DASHBOARD)} />
        )}
        {pantalla === PANTALLAS.MICROBLOQUE && (
          <MicroBloque
            onVolver={() => setPantalla(PANTALLAS.DASHBOARD)}
            onTerminarDia={() => setPantalla(PANTALLAS.CIERRE_DIA)}
          />
        )}
        {pantalla === PANTALLAS.CIERRE_DIA && (
          <CierreDia onRecordar={() => setPantalla(PANTALLAS.DIA_2)} />
        )}
        {pantalla === PANTALLAS.DIA_2 && (
          <BienvenidaDia2 onContinuar={() => setPantalla(PANTALLAS.MICROBLOQUE)} />
        )}
      </div>
    </div>
  )
}
