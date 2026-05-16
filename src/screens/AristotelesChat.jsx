import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { usuario } from '../data/mock'

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#00534C' }}>
        A
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-gray-100">
        <div className="flex gap-1 items-center h-4">
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  )
}

export default function AristotelesChat({ onContinuar }) {
  const [mensajesVisibles, setMensajesVisibles] = useState([])
  const [escribiendo, setEscribiendo] = useState(false)
  const [mostrarRespuestas, setMostrarRespuestas] = useState(false)
  const [respuestaElegida, setRespuestaElegida] = useState(null)
  const mensajes = usuario.aristotelesIntro

  useEffect(() => {
    let timeouts = []

    mensajes.forEach((msg, i) => {
      // Mostrar indicador de escritura antes de cada mensaje
      const t1 = setTimeout(() => {
        setEscribiendo(true)
      }, msg.delay)

      const t2 = setTimeout(() => {
        setEscribiendo(false)
        setMensajesVisibles(prev => [...prev, msg])

        if (i === mensajes.length - 1) {
          setTimeout(() => setMostrarRespuestas(true), 400)
        }
      }, msg.delay + 600)

      timeouts.push(t1, t2)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [])

  const handleRespuesta = (respuesta) => {
    setRespuestaElegida(respuesta)
    setMostrarRespuestas(false)
    setTimeout(() => onContinuar(), 800)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 sticky top-0 bg-white z-10">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#00534C' }}>
          A
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">Aristóteles</p>
          <p className="text-xs text-gray-400">Tu guía de carrera · IA</p>
        </div>
        <div className="ml-auto">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
        {mensajesVisibles.map((msg, i) => (
          <div key={i} className="flex items-end gap-2 mb-3">
            {i === 0 || mensajesVisibles[i - 1]?.tipo !== 'agente' ? (
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#00534C' }}>
                A
              </div>
            ) : (
              <div className="w-8 flex-shrink-0" />
            )}
            <div className="max-w-xs px-4 py-3 rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800 text-sm leading-relaxed">
              {msg.texto}
            </div>
          </div>
        ))}

        {escribiendo && <TypingIndicator />}

        {respuestaElegida && (
          <div className="flex justify-end mb-3">
            <div className="max-w-xs px-4 py-3 rounded-2xl rounded-br-sm text-white text-sm" style={{ backgroundColor: '#00534C' }}>
              {respuestaElegida}
            </div>
          </div>
        )}
      </div>

      {/* Respuestas rápidas */}
      {mostrarRespuestas && (
        <div className="px-4 pb-8 pt-2 flex flex-col gap-2">
          <p className="text-xs text-gray-400 text-center mb-1">Elige cómo responder</p>
          {usuario.respuestasRapidas.map((r, i) => (
            <button
              key={i}
              onClick={() => handleRespuesta(r)}
              className="w-full text-left px-4 py-3 rounded-2xl border text-sm font-medium transition-colors active:opacity-80"
              style={{ borderColor: '#00534C', color: '#00534C' }}
            >
              {r} {i === 0 && <ArrowRight size={14} className="inline ml-1" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
