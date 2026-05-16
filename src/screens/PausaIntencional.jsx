import { useState } from 'react'
import { Flame, Shield, Bell, ArrowLeft } from 'lucide-react'
import { usuario } from '../data/mock'

export default function PausaIntencional({ onVolver }) {
  const [recordatorioActivo, setRecordatorioActivo] = useState(false)
  const [pausaConfirmada, setPausaConfirmada] = useState(false)

  const handleConfirmar = () => {
    setPausaConfirmada(true)
    setTimeout(() => onVolver(), 2000)
  }

  if (pausaConfirmada) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#f0fdf4' }}>
          <Shield size={32} style={{ color: '#00534C' }} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Avance guardado.</h2>
        <p className="text-gray-500 text-center text-sm">Regresando a tu dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <button onClick={onVolver} className="p-1 -ml-1">
          <ArrowLeft size={20} className="text-gray-400" />
        </button>
        <p className="font-semibold text-gray-900">Pausa intencional</p>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-8 pb-10 max-w-sm mx-auto w-full">

        {/* Garantías visuales */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            Tu avance está aquí<br />cuando regreses.
          </h2>
          <p className="text-gray-500 text-sm">Sin penalización. Sin presión. Tú controlas el ritmo.</p>
        </div>

        {/* Estado preservado */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#fff7ed' }}>
              <Flame size={20} style={{ color: '#f97316' }} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Racha guardada</p>
              <p className="text-sm text-gray-500">{usuario.racha} días activos — se conservan al pausar</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0fdf9' }}>
              <Shield size={20} style={{ color: '#00534C' }} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Progreso protegido</p>
              <p className="text-sm text-gray-500">{usuario.progreso}% completado · no se borra</p>
            </div>
          </div>
        </div>

        {/* Recordatorio opcional */}
        <div className="mb-8 p-4 rounded-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Bell size={16} className="text-gray-400" />
              <p className="text-sm font-semibold text-gray-700">Recordatorio de regreso</p>
            </div>
            <button
              onClick={() => setRecordatorioActivo(!recordatorioActivo)}
              className={`w-11 h-6 rounded-full transition-colors relative ${recordatorioActivo ? 'bg-green-500' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${recordatorioActivo ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>
          <p className="text-xs text-gray-400 ml-6">
            {recordatorioActivo ? 'Te avisamos en 7 días para que retomes tu ruta.' : 'Opcional — te lo recordamos cuando quieras.'}
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleConfirmar}
          className="w-full py-4 rounded-2xl font-semibold text-white text-base"
          style={{ backgroundColor: '#00534C' }}
        >
          Pausar y guardar mi avance
        </button>

        <button
          onClick={onVolver}
          className="w-full py-3 mt-3 text-sm text-gray-400 font-medium"
        >
          Regresar, sigo ahora
        </button>
      </div>
    </div>
  )
}
