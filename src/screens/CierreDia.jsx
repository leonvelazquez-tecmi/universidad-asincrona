import { useState, useEffect } from 'react'
import { Flame, Bell, CheckCircle } from 'lucide-react'
import { cierreDia, usuario } from '../data/mock'

function BurbujaAgente({ texto }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{ backgroundColor: '#00534C' }}>
        A
      </div>
      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-gray-800 leading-relaxed max-w-xs">
        {texto}
      </div>
    </div>
  )
}

export default function CierreDia({ onRecordar }) {
  const [visibles, setVisibles] = useState([])
  const [recordando, setRecordando] = useState(false)
  const [confirmado, setConfirmado] = useState(false)

  useEffect(() => {
    cierreDia.resumen.forEach((msg, i) => {
      setTimeout(() => {
        setVisibles(prev => [...prev, i])
      }, msg.delay)
    })
  }, [])

  const handleRecordar = () => {
    setRecordando(true)
    setTimeout(() => {
      setConfirmado(true)
      setTimeout(() => {
        onRecordar()
      }, 1000)
    }, 1500)
  }

  const todasVisibles = visibles.length >= cierreDia.resumen.length

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-10 pb-8">
      <div className="flex items-center gap-2 mb-8">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: '#fff7ed' }}>
          <Flame size={16} style={{ color: '#f97316' }} />
          <span style={{ color: '#f97316' }}>{usuario.racha + 1} días</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {cierreDia.resumen.map((msg, i) =>
          visibles.includes(i) ? (
            <BurbujaAgente key={i} texto={msg.texto} />
          ) : null
        )}
      </div>

      {todasVisibles && (
        <div className="mt-8">
          {confirmado ? (
            <div className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-semibold" style={{ backgroundColor: '#f0fdf4', color: '#166534' }}>
              <CheckCircle size={18} />
              Recordatorio agendado para las {cierreDia.horaRecordatorio}
            </div>
          ) : (
            <button
              onClick={handleRecordar}
              disabled={recordando}
              className="w-full py-4 rounded-2xl font-semibold text-white text-base flex items-center justify-center gap-2"
              style={{ backgroundColor: recordando ? '#6b9e8a' : '#00534C' }}
            >
              <Bell size={18} />
              {recordando ? 'Agendando...' : `Recordarme mañana a las ${cierreDia.horaRecordatorio}`}
            </button>
          )}

          <p className="text-xs text-center text-gray-400 mt-3">
            Tu racha y progreso se guardan. Sin penalización.
          </p>
        </div>
      )}
    </div>
  )
}
