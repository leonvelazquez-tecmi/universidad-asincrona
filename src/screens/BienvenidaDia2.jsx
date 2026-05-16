import { useState, useEffect } from 'react'
import { Flame, ChevronRight } from 'lucide-react'
import { dia2 } from '../data/mock'

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

export default function BienvenidaDia2({ onContinuar }) {
  const [visibles, setVisibles] = useState([])

  useEffect(() => {
    dia2.saludo.forEach((msg, i) => {
      setTimeout(() => {
        setVisibles(prev => [...prev, i])
      }, msg.delay)
    })
  }, [])

  const todasVisibles = visibles.length >= dia2.saludo.length

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-10 pb-8">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"
          style={{ backgroundColor: '#f0fdf4', color: '#166534' }}
        >
          <Flame size={14} style={{ color: '#f97316' }} />
          {dia2.badge}
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1 mt-6">
        {dia2.saludo.map((msg, i) =>
          visibles.includes(i) ? (
            <BurbujaAgente key={i} texto={msg.texto} />
          ) : null
        )}
      </div>

      {todasVisibles && (
        <div className="mt-8">
          <button
            onClick={onContinuar}
            className="w-full py-4 rounded-2xl font-semibold text-white text-base flex items-center justify-center gap-2"
            style={{ backgroundColor: '#00534C' }}
          >
            Continuar donde lo dejé
            <ChevronRight size={18} />
          </button>

          <p className="text-xs text-center font-bold mt-4" style={{ color: '#00534C', letterSpacing: '0.05em' }}>
            Está en ti.
          </p>
        </div>
      )}
    </div>
  )
}
