import { Flame, Clock, ChevronRight, PauseCircle, BookOpen, Lock } from 'lucide-react'
import { usuario } from '../data/mock'

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${value}%`, backgroundColor: '#78D64B' }}
      />
    </div>
  )
}

export default function CareerOSDashboard({ onPausar, onEmpezar }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Career OS</p>
            <h1 className="text-xl font-bold text-gray-900">{usuario.programa}</h1>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: '#fff7ed' }}>
            <Flame size={16} style={{ color: '#f97316' }} />
            <span style={{ color: '#f97316' }}>{usuario.racha}</span>
          </div>
        </div>
        <ProgressBar value={usuario.progreso} />
        <p className="text-xs text-gray-400 mt-1.5">{usuario.progreso}% completado · {usuario.ruta.length} módulos</p>
      </div>

      {/* Próximo bloque — acción principal */}
      <div className="px-6 py-5 bg-white mt-2">
        <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">Siguiente bloque</p>
        <div className="p-4 rounded-2xl border-2" style={{ borderColor: '#00534C', backgroundColor: '#f0fdf9' }}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <p className="font-bold text-gray-900 leading-snug">{usuario.siguienteModulo}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock size={12} className="text-gray-400" />
                <p className="text-xs text-gray-500">{usuario.tiempoEstimado} · Puedes pausar en cualquier momento</p>
              </div>
            </div>
          </div>
          <button
            onClick={onEmpezar}
            className="w-full py-3.5 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2"
            style={{ backgroundColor: '#00534C' }}
          >
            Empezar ahora
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Ruta de aprendizaje */}
      <div className="px-6 py-5 bg-white mt-2">
        <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">Tu ruta</p>
        <div className="flex flex-col gap-2">
          {usuario.ruta.map((modulo, i) => (
            <div
              key={modulo.id}
              className={`flex items-center gap-3 p-3 rounded-xl ${modulo.activo ? 'bg-gray-50 border border-gray-200' : 'opacity-50'}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{
                  backgroundColor: modulo.activo ? '#00534C' : '#e5e7eb',
                  color: modulo.activo ? 'white' : '#9ca3af'
                }}
              >
                {modulo.activo ? <BookOpen size={14} /> : <Lock size={12} />}
              </div>
              <div className="flex-1 text-left">
                <p className={`text-sm font-medium ${modulo.activo ? 'text-gray-900' : 'text-gray-400'}`}>
                  {modulo.titulo}
                </p>
                <p className="text-xs text-gray-400">{modulo.duracion}</p>
              </div>
              {modulo.activo && (
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                  Activo
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pausa — acción secundaria visible pero no dominante */}
      <div className="px-6 py-5 mt-2 mb-8">
        <button
          onClick={onPausar}
          className="w-full py-3.5 rounded-2xl border border-gray-200 bg-white flex items-center justify-center gap-2 text-sm text-gray-500 font-medium"
        >
          <PauseCircle size={18} className="text-gray-400" />
          Pausar mi avance
        </button>
        <p className="text-xs text-center text-gray-400 mt-2">Tu racha y progreso se guardan. Sin penalización.</p>
      </div>
    </div>
  )
}
