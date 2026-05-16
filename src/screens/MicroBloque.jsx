import { useState } from 'react'
import { ArrowLeft, CheckCircle, XCircle, BookOpen, ChevronRight, Flame } from 'lucide-react'
import { microBloque, usuario } from '../data/mock'

function BarraProgreso({ paso, total }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-1.5 rounded-full transition-all duration-300"
          style={{ backgroundColor: i <= paso ? '#00534C' : '#e5e7eb' }}
        />
      ))}
    </div>
  )
}

function PasoLectura({ paso, onSiguiente, esFinal }) {
  const lineas = paso.contenido.split('\n')

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#00534C' }}>
            <BookOpen size={12} color="white" />
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Lectura</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-5 leading-snug">{paso.titulo}</h2>

        <div className="space-y-3">
          {lineas.map((linea, i) => {
            if (!linea.trim()) return null
            const esBloqueCodigo = linea.startsWith('    ')
            if (esBloqueCodigo) {
              return (
                <code key={i} className="block text-sm font-mono px-4 py-1 rounded-lg" style={{ backgroundColor: '#f0fdf9', color: '#00534C' }}>
                  {linea.trim()}
                </code>
              )
            }
            return (
              <p key={i} className="text-base text-gray-700 leading-relaxed">
                {linea}
              </p>
            )
          })}
        </div>
      </div>

      <button
        onClick={onSiguiente}
        className="w-full py-4 rounded-2xl font-semibold text-white text-base flex items-center justify-center gap-2 mt-6 flex-shrink-0"
        style={{ backgroundColor: '#00534C' }}
      >
        {esFinal ? 'Ver pregunta' : 'Continuar'}
        <ChevronRight size={18} />
      </button>
    </div>
  )
}

function PasoQuiz({ paso, onTerminar }) {
  const [seleccion, setSeleccion] = useState(null)
  const respondido = seleccion !== null
  const correcto = seleccion === paso.correcta

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{ backgroundColor: '#78D64B' }}>
            ?
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Pregunta rápida</p>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-6 leading-snug">{paso.pregunta}</h2>

        <div className="flex flex-col gap-3">
          {paso.opciones.map((opcion, i) => {
            let estilo = 'border-gray-200 bg-white text-gray-800'
            if (respondido) {
              if (i === paso.correcta) estilo = 'border-green-400 bg-green-50 text-green-800'
              else if (i === seleccion) estilo = 'border-red-300 bg-red-50 text-red-700'
              else estilo = 'border-gray-100 bg-gray-50 text-gray-400'
            }

            return (
              <button
                key={i}
                onClick={() => !respondido && setSeleccion(i)}
                className={`w-full py-4 px-5 rounded-2xl border-2 text-left font-medium text-sm transition-all flex items-center justify-between ${estilo}`}
              >
                <span>{opcion}</span>
                {respondido && i === paso.correcta && <CheckCircle size={18} className="text-green-500 flex-shrink-0" />}
                {respondido && i === seleccion && i !== paso.correcta && <XCircle size={18} className="text-red-400 flex-shrink-0" />}
              </button>
            )
          })}
        </div>

        {respondido && (
          <div
            className="mt-4 p-4 rounded-2xl text-sm"
            style={{ backgroundColor: correcto ? '#f0fdf4' : '#fef3c7', color: correcto ? '#166534' : '#92400e' }}
          >
            {paso.explicacion}
          </div>
        )}
      </div>

      {respondido && (
        <button
          onClick={onTerminar}
          className="w-full py-4 rounded-2xl font-semibold text-white text-base flex items-center justify-center gap-2 mt-6 flex-shrink-0"
          style={{ backgroundColor: '#00534C' }}
        >
          Ver mi resultado
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  )
}

function PantallaCelebracion({ onVolver }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 text-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#f0fdf4' }}>
        <CheckCircle size={40} style={{ color: '#78D64B' }} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Módulo terminado.</h2>
      <p className="text-lg text-gray-500 mb-8">+{microBloque.tiempoTotal} a tu racha.</p>

      <div className="w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 mb-8">
        <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">Tu progreso hoy</p>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="flex items-center gap-1 justify-center">
              <Flame size={20} style={{ color: '#f97316' }} />
              <span className="text-2xl font-bold text-gray-900">{usuario.racha + 1}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">días de racha</p>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-900">{microBloque.tiempoTotal}</span>
            <p className="text-xs text-gray-400 mt-1">invertidos</p>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-center">
            <span className="text-2xl font-bold" style={{ color: '#78D64B' }}>1/3</span>
            <p className="text-xs text-gray-400 mt-1">bloques hoy</p>
          </div>
        </div>
      </div>

      <button
        onClick={onVolver}
        className="w-full py-4 rounded-2xl font-semibold text-white text-base"
        style={{ backgroundColor: '#00534C' }}
      >
        Volver al dashboard
      </button>

      <p className="text-xs text-gray-400 mt-4 font-heading font-bold" style={{ color: '#00534C', letterSpacing: '0.05em' }}>
        Está en ti.
      </p>
    </div>
  )
}

export default function MicroBloque({ onVolver }) {
  const [pasoActual, setPasoActual] = useState(0)
  const [terminado, setTerminado] = useState(false)
  const pasos = microBloque.pasos

  const avanzar = () => {
    if (pasoActual < pasos.length - 1) {
      setPasoActual(pasoActual + 1)
    }
  }

  if (terminado) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <PantallaCelebracion onVolver={onVolver} />
      </div>
    )
  }

  const paso = pasos[pasoActual]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onVolver} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <p className="text-xs text-gray-400">{microBloque.modulo}</p>
            <p className="text-xs text-gray-400">{pasoActual + 1} de {pasos.length} · {microBloque.tiempoTotal}</p>
          </div>
        </div>
        <BarraProgreso paso={pasoActual} total={pasos.length} />
      </div>

      {/* Contenido */}
      <div className="flex-1 flex flex-col px-6 py-6">
        {paso.tipo === 'lectura' && (
          <PasoLectura
            paso={paso}
            onSiguiente={avanzar}
            esFinal={pasoActual === pasos.length - 2}
          />
        )}
        {paso.tipo === 'quiz' && (
          <PasoQuiz
            paso={paso}
            onTerminar={() => setTerminado(true)}
          />
        )}
      </div>
    </div>
  )
}
