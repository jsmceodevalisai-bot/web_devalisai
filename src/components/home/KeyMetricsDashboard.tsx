import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Activity, Gauge, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

// Data 1: Web Performance & Core Web Vitals Comparison (Seconds / Milliseconds)
const PERFORMANCE_DATA = [
  { metric: 'LCP (Carga visual)', tradicional: 3.9, develisai: 1.1, unit: 's' },
  { metric: 'FID/INP (Latencia)', tradicional: 220, develisai: 42, unit: 'ms' },
  { metric: 'Speed Index', tradicional: 4.2, develisai: 1.3, unit: 's' },
  { metric: 'Tiempo a Interactivo', tradicional: 4.8, develisai: 1.4, unit: 's' },
];

// Data 2: Organic Traffic Growth Curve (6 Months after SEO Implementation)
const SEO_GROWTH_DATA = [
  { mes: 'Mes 1', impresiones: 1800, clicsCalificados: 120, consultas: 18 },
  { mes: 'Mes 2', impresiones: 3400, clicsCalificados: 260, consultas: 36 },
  { mes: 'Mes 3', impresiones: 6200, clicsCalificados: 490, consultas: 68 },
  { mes: 'Mes 4', impresiones: 9800, clicsCalificados: 810, consultas: 114 },
  { mes: 'Mes 5', impresiones: 14200, clicsCalificados: 1240, consultas: 172 },
  { mes: 'Mes 6', impresiones: 19800, clicsCalificados: 1820, consultas: 254 },
];

// Data 3: Mobile Conversion Rate Comparison (%)
const CONVERSION_DATA = [
  { semana: 'Sem 1', anterior: 1.1, optimizado: 2.3 },
  { semana: 'Sem 2', anterior: 1.3, optimizado: 2.7 },
  { semana: 'Sem 3', anterior: 1.2, optimizado: 3.2 },
  { semana: 'Sem 4', anterior: 1.4, optimizado: 3.6 },
  { semana: 'Sem 5', anterior: 1.3, optimizado: 3.9 },
  { semana: 'Sem 6', anterior: 1.5, optimizado: 4.4 },
];

export const KeyMetricsDashboard: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'performance' | 'growth' | 'conversion'>('growth');

  const isLight = theme === 'light';
  const gridStroke = isLight ? '#E2E8F0' : '#1E2D4A';
  const tooltipBg = isLight ? '#FFFFFF' : '#0C1527';
  const tooltipBorder = isLight ? '#CBD5E1' : '#2A3F66';
  const tooltipText = isLight ? '#0F172A' : '#F8FAFC';
  const legendTextColor = isLight ? '#334155' : '#dae2fd';
  const primaryColor = isLight ? '#00939e' : '#00f0ff';
  const neutralBarColor = isLight ? '#94A3B8' : '#3B494B';

  return (
    <section id="metricas" className="py-20 bg-[#0B1326] border-b border-[#1E2D4A] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0C1527] px-4 py-1.5 text-xs font-semibold text-[#00f0ff] mb-2.5">
              <Activity className="h-3.5 w-3.5" />
              <span>{t.metrics.badge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {t.metrics.title}
            </h2>
          </div>
          <p className="text-xs text-[#94A3B8] max-w-md leading-relaxed">
            {t.metrics.subtitle}
          </p>
        </div>

        {/* 4 Summary Quantitative KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="rounded-xl border border-[#1E2D4A] bg-[#0C1527] p-5 space-y-1">
            <div className="flex items-center justify-between text-[#00f0ff]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                {t.metrics.items.speed?.label || 'Velocidad Web'}
              </span>
              <Gauge className="h-4 w-4" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              {t.metrics.items.speed?.value || '98/100'}
            </div>
            <div className="text-[11px] text-[#10B981] font-semibold">
              {t.metrics.items.speed?.description || 'Optimización extrema'}
            </div>
          </div>

          <div className="rounded-xl border border-[#1E2D4A] bg-[#0C1527] p-5 space-y-1">
            <div className="flex items-center justify-between text-[#38BDF8]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                {t.metrics.items.delivery?.label || 'Cumplimiento'}
              </span>
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              {t.metrics.items.delivery?.value || '100%'}
            </div>
            <div className="text-[11px] text-[#10B981] font-semibold">
              {t.metrics.items.delivery?.description || 'Entregas a tiempo'}
            </div>
          </div>

          <div className="rounded-xl border border-[#1E2D4A] bg-[#0C1527] p-5 space-y-1">
            <div className="flex items-center justify-between text-[#10B981]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                {t.metrics.items.support?.label || 'Soporte'}
              </span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              {t.metrics.items.support?.value || '< 15 min'}
            </div>
            <div className="text-[11px] text-[#10B981] font-semibold">
              {t.metrics.items.support?.description || 'Respuesta rápida'}
            </div>
          </div>

          <div className="rounded-xl border border-[#1E2D4A] bg-[#0C1527] p-5 space-y-1">
            <div className="flex items-center justify-between text-[#F59E0B]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                {t.metrics.items.uptime?.label || 'Disponibilidad'}
              </span>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              {t.metrics.items.uptime?.value || '99.98%'}
            </div>
            <div className="text-[11px] text-[#10B981] font-semibold">
              {t.metrics.items.uptime?.description || 'SLA continuo'}
            </div>
          </div>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="rounded-2xl border border-[#2A3F66] bg-[#0C1527] p-6 sm:p-8 shadow-2xl">
          
          {/* Tabs Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1E2D4A]">
            <div className="flex items-center gap-2 p-1 bg-[#060A12] rounded-xl border border-[#1E2D4A]">
              <button
                type="button"
                onClick={() => setActiveTab('growth')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'growth'
                    ? 'bg-[#00838f] dark:bg-[#00f0ff] text-white dark:text-[#060e20] shadow-md'
                    : 'text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
                }`}
              >
                {t.metrics.tabUptime}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('performance')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'performance'
                    ? 'bg-[#00838f] dark:bg-[#00f0ff] text-white dark:text-[#060e20] shadow-md'
                    : 'text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
                }`}
              >
                {t.metrics.tabPerformance}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('conversion')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'conversion'
                    ? 'bg-[#00838f] dark:bg-[#00f0ff] text-white dark:text-[#060e20] shadow-md'
                    : 'text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
                }`}
              >
                {t.metrics.tabSatisfaction}
              </button>
            </div>

            <div className="text-[11px] text-[#64748B] font-mono">
              Datos normalizados de auditorías técnicas (2025–2026)
            </div>
          </div>

          {/* Chart Viewports */}
          <div className="pt-6">
            
            {/* View 1: Organic Growth */}
            {activeTab === 'growth' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-sm font-bold text-[#F8FAFC]">
                    Proyección de Tráfico Orgánico y Consultas Calificadas (Mes 1 a Mes 6)
                  </h3>
                  <div className="text-xs text-[#10B981] font-semibold">
                    Tendencia de crecimiento sostenible comprobada
                  </div>
                </div>

                <div className="h-72 sm:h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={SEO_GROWTH_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorImpresiones" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorClics" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis dataKey="mes" stroke="#64748B" fontSize={11} />
                      <YAxis stroke="#64748B" fontSize={11} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: tooltipBg,
                          borderColor: tooltipBorder,
                          borderRadius: '0.75rem',
                          color: tooltipText,
                          fontSize: '12px',
                        }}
                      />
                      <Legend
                        verticalAlign="top"
                        height={36}
                        formatter={(value) => <span className="text-xs" style={{ color: legendTextColor }}>{value}</span>}
                      />
                      <Area
                        type="monotone"
                        dataKey="impresiones"
                        name="Impresiones en Búsqueda"
                        stroke={primaryColor}
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorImpresiones)"
                      />
                      <Area
                        type="monotone"
                        dataKey="clicsCalificados"
                        name="Clics a la Web"
                        stroke="#10B981"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorClics)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* View 2: Web Performance & Core Web Vitals */}
            {activeTab === 'performance' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-sm font-bold text-[#F8FAFC]">
                    Tiempos de Respuesta: Sitio Web Tradicional vs Arquitectura Develisai
                  </h3>
                  <div className="text-xs text-[#00f0ff] font-semibold">
                    Menor valor = Mayor rapidez y mejor experiencia
                  </div>
                </div>

                <div className="h-72 sm:h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis dataKey="metric" stroke="#64748B" fontSize={11} />
                      <YAxis stroke="#64748B" fontSize={11} />
                      <Tooltip
                        formatter={(val: unknown, name: unknown) => [
                          `${val}`,
                          String(name) === 'tradicional' ? 'Sitio Tradicional' : 'Solución Develisai',
                        ]}
                        contentStyle={{
                          backgroundColor: tooltipBg,
                          borderColor: tooltipBorder,
                          borderRadius: '0.75rem',
                          color: tooltipText,
                          fontSize: '12px',
                        }}
                      />
                      <Legend
                        verticalAlign="top"
                        height={36}
                        formatter={(value) => (
                          <span className="text-xs" style={{ color: legendTextColor }}>
                            {value === 'tradicional' ? 'Sitio Web Tradicional' : 'Arquitectura Develisai'}
                          </span>
                        )}
                      />
                      <Bar dataKey="tradicional" fill={neutralBarColor} radius={[6, 6, 0, 0]} />
                      <Bar dataKey="develisai" fill={primaryColor} radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* View 3: Mobile Conversion */}
            {activeTab === 'conversion' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-sm font-bold text-[#F8FAFC]">
                    Evolución de Tasa de Conversión Móvil (%) tras Optimización UX
                  </h3>
                  <div className="text-xs text-[#10B981] font-semibold">
                    Promedio en cotizaciones y ventas en línea
                  </div>
                </div>

                <div className="h-72 sm:h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={CONVERSION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorOpt" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis dataKey="semana" stroke="#64748B" fontSize={11} />
                      <YAxis stroke="#64748B" fontSize={11} unit="%" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: tooltipBg,
                          borderColor: tooltipBorder,
                          borderRadius: '0.75rem',
                          color: tooltipText,
                          fontSize: '12px',
                        }}
                      />
                      <Legend
                        verticalAlign="top"
                        height={36}
                        formatter={(value) => (
                          <span className="text-xs" style={{ color: legendTextColor }}>
                            {value === 'anterior' ? 'Tasa Anterior' : 'Tasa con Develisai'}
                          </span>
                        )}
                      />
                      <Area
                        type="monotone"
                        dataKey="anterior"
                        stroke="#64748B"
                        strokeDasharray="4 4"
                        fill="transparent"
                      />
                      <Area
                        type="monotone"
                        dataKey="optimizado"
                        stroke="#10B981"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorOpt)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
