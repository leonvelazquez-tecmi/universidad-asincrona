import { CheckCircle, ArrowRight, BookOpen } from 'lucide-react'
import { usuario } from '../data/mock'

export default function CruceEntrada({ onContinuar }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header mínimo */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00534C' }}>
            <BookOpen size={16} color="white" />
          </div>
          <span className="text-sm font-semibold" style={{ color: '#00534C' }}>Tecmilenio</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-8 max-w-sm mx-auto w-full">

        {/* Confirmación de pago */}
        <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl" style={{ backgroundColor: '#f0fdf4' }}>
          <CheckCircle size={24} style={{ color: '#78D64B' }} />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-800">Acceso confirmado</p>
            <p className="text-xs text-gray-500">Pago procesado · {usuario.fechaInicio}</p>
          </div>
        </div>

        {/* Saludo */}
        <div className="mb-10 text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Hola, {usuario.nombre}.
          </h1>
          <p className="text-lg text-gray-500 leading-snug">
            Tu {usuario.programa} empieza ahora.
          </p>
        </div>

        {/* Info del programa */}
        <div className="mb-10 p-5 rounded-2xl border border-gray-100 bg-gray-50 text-left">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">Tu programa</p>
          <p className="text-xl font-bold text-gray-900 mb-1">{usuario.programa}</p>
          <p className="text-sm text-gray-500">{usuario.ruta.length} módulos · Completamente asíncrono</p>
          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#78D64B' }}></div>
            <p className="text-sm text-gray-600">Aristóteles ya preparó tu ruta</p>
          </div>
        </div>

        {/* CTA único */}
        <button
          onClick={onContinuar}
          className="w-full py-4 px-6 rounded-2xl font-semibold text-white text-lg flex items-center justify-center gap-3 transition-opacity active:opacity-80"
          style={{ backgroundColor: '#00534C' }}
        >
          Activar mi acceso
          <ArrowRight size={20} />
        </button>

        <p className="text-xs text-center text-gray-400 mt-4">
          Sin formularios. Sin tutoriales. Directo al grano.
        </p>
      </div>

      {/* Tagline institucional — esquina inferior izquierda, Montserrat Bold */}
      <div className="px-6 pb-6">
        <p className="font-heading font-bold text-sm" style={{ color: '#00534C', letterSpacing: '0.05em' }}>
          Está en ti.
        </p>
      </div>
    </div>
  )
}
