import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, Search, Menu, Ship, LayoutDashboard, Crosshair, 
  Navigation, AlertTriangle, BarChart3, Info, X
} from 'lucide-react'
import { getDashboardStats, getAlerts } from '../api'

const navLinks = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/detection', label: 'Detection', icon: Crosshair },
  { to: '/traffic', label: 'Traffic', icon: Navigation },
  { to: '/collisions', label: 'Collisions', icon: AlertTriangle },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/alerts', label: 'Alerts', icon: Bell },
]

export default function Topbar({ onMenuClick }) {
  const [stats, setStats] = useState(null)
  const [alerts, setAlerts] = useState([])
  const [showNotif, setShowNotif] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = () => {
      getDashboardStats().then(r => setStats(r.data)).catch(() => {})
      getAlerts().then(r => setAlerts(Array.isArray(r.data) ? r.data : [])).catch(() => {})
    }
    fetch()
    const t = setInterval(fetch, 10000)
    return () => clearInterval(t)
  }, [])

  const unreadAlerts = alerts.filter(a => !a.acknowledged)

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // Simple search redirect logic
      const query = searchQuery.toLowerCase()
      if (query.includes('detect')) navigate('/detection')
      else if (query.includes('alert')) navigate('/alerts')
      else if (query.includes('traffic')) navigate('/traffic')
      else if (query.includes('collision')) navigate('/collisions')
      else if (query.includes('analytic')) navigate('/analytics')
      else if (query.includes('system')) navigate('/system')
      else navigate('/')
      setSearchQuery('')
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        height: 'var(--topbar-h)',
        background: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
        borderBottom: '1px solid var(--c-border)',
      }}
    >
      <div className="w-full h-full max-w-[var(--container-max)] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 cursor-pointer"
                 onClick={() => navigate('/')}
                 style={{ background: 'linear-gradient(135deg, var(--c-accent), var(--c-purple))' }}>
              <Ship size={20} />
            </div>
            <div className="hidden lg:block cursor-pointer" onClick={() => navigate('/')}>
              <h1 className="text-lg font-black text-white leading-none tracking-tighter uppercase">ShipDetect<span className="text-[var(--c-accent)]">AI</span></h1>
              <p className="text-[9px] text-[var(--c-text-dim)] font-bold tracking-[0.2em] uppercase mt-1 opacity-60">Intelligence</p>
            </div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map(({ to, label, icon: Icon }) => {
            const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
            return (
              <NavLink
                key={to}
                to={to}
                className={`
                  relative px-5 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-300 group
                  ${isActive ? 'text-white' : 'text-[var(--c-text-dim)] hover:text-white hover:bg-white/5'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="topNavActive"
                    className="absolute inset-0 bg-white/5 rounded-xl ring-1 ring-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={18} className={`${isActive ? 'text-[var(--c-accent)]' : 'group-hover:scale-110 transition-transform'}`} />
                <span className="text-[11px] font-black uppercase tracking-[0.15em]">{label}</span>
              </NavLink>
            )
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="hidden md:flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-2 group focus-within:border-[var(--c-accent)]/40 transition-all">
            <Search size={16} className="text-[var(--c-text-dim)] group-focus-within:text-[var(--c-accent)]" />
            <input 
              type="text" 
              placeholder="Search Intelligence..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-transparent outline-none text-[11px] font-bold uppercase tracking-widest text-white placeholder-[var(--c-text-dim)] w-40"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowNotif(!showNotif)}
                className="relative p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[var(--c-text-dim)] hover:text-white hover:bg-white/[0.08] transition-all group"
              >
                <Bell size={20} className="group-hover:rotate-12 transition-transform" />
                {unreadAlerts.length > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--c-red)] animate-pulse shadow-[0_0_8px_var(--c-red)]" />
                )}
              </button>

              <AnimatePresence>
                {showNotif && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotif(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-80 glass p-4 z-50 border-white/10 shadow-2xl"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-50">Notifications</h4>
                        <button onClick={() => setShowNotif(false)} className="text-[var(--c-text-dim)] hover:text-white"><X size={14} /></button>
                      </div>
                      <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                        {unreadAlerts.length === 0 ? (
                          <div className="py-8 text-center opacity-40">
                            <Info size={24} className="mx-auto mb-2" />
                            <p className="text-[10px] font-bold uppercase tracking-widest">No Active Alerts</p>
                          </div>
                        ) : (
                          unreadAlerts.map(a => (
                            <div 
                              key={a.id} 
                              className="p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                              onClick={() => { navigate('/alerts'); setShowNotif(false); }}
                            >
                              <p className="text-[11px] font-bold text-white mb-1 group-hover:text-[var(--c-accent)] transition-colors">{a.title}</p>
                              <p className="text-[9px] text-[var(--c-text-dim)] leading-tight">{a.message}</p>
                            </div>
                          ))
                        )}
                      </div>
                      <button 
                        onClick={() => { navigate('/alerts'); setShowNotif(false); }}
                        className="w-full mt-4 py-2 rounded-lg bg-[var(--c-accent)] text-white text-[9px] font-black uppercase tracking-[0.2em] hover:brightness-110 transition-all"
                      >
                        View All Alerts
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            
            <button 
              className="xl:hidden p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[var(--c-text-dim)] hover:text-white"
              onClick={onMenuClick}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
