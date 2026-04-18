'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, AlignLeft } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface ServicesLayoutProps {
  services: ServiceItem[];
  children: React.ReactNode;
}

export default function ServicesLayout({ services, children }: ServicesLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState(services[0]?.id ?? '');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = services.length - 1; i >= 0; i--) {
        const el = document.getElementById(services[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(services[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActiveId(id);
    setMobileOpen(false);
  }, []);

  const activeTitle = services.find((s) => s.id === activeId)?.title ?? 'Services';

  return (
    <div className="flex min-h-screen" style={{ background: '#f2f0ec' }}>

      {/* ── Desktop sidebar ───────────────────────────────────────── */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 sticky top-20 self-start h-[calc(100vh-80px)] overflow-hidden transition-all duration-300 ease-in-out border-r border-white/8 ${
          collapsed ? 'w-[54px]' : 'w-[252px]'
        }`}
        style={{ background: '#0f3460' }}
      >
        {/* Sidebar header row */}
        <div
          className={`flex items-center border-b border-white/8 shrink-0 py-4 ${
            collapsed ? 'justify-center px-2' : 'justify-between px-4'
          }`}
        >
          {!collapsed && (
            <span className="text-orange font-heading font-bold text-[10px] tracking-[0.22em] uppercase pl-1">
              Services
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className={`p-2 rounded-lg transition-all duration-200 ${
              collapsed
                ? 'text-orange bg-orange/20 hover:bg-orange/30 ring-1 ring-orange/30'
                : 'text-white/50 hover:text-orange hover:bg-white/8'
            }`}
          >
            {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                title={collapsed ? s.title : undefined}
                className={`w-full flex items-center gap-3 text-left transition-all duration-150 relative group ${
                  collapsed ? 'justify-center px-0 py-3.5' : 'px-4 py-3'
                } ${
                  isActive
                    ? 'bg-orange/15 text-orange'
                    : 'text-white/65 hover:bg-white/5 hover:text-white'
                }`}
              >
                {isActive && !collapsed && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-orange rounded-r-full" />
                )}
                <Icon
                  size={15}
                  className={`shrink-0 transition-colors ${
                    isActive ? 'text-orange' : 'text-white/35 group-hover:text-orange'
                  }`}
                />
                {!collapsed && (
                  <span className="text-[12.5px] font-medium leading-snug truncate">
                    {s.title}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── Main content ──────────────────────────────────────────── */}
      <main className="flex-1 min-w-0">

        {/* Mobile services nav — sticky bar with collapsible list */}
        <div className="lg:hidden sticky top-16 z-20 border-b border-white/10" style={{ background: '#0f3460' }}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full flex items-center justify-between px-5 py-3.5"
            aria-expanded={mobileOpen}
          >
            <div className="flex items-center gap-2.5">
              <AlignLeft size={15} className="text-orange shrink-0" />
              <span className="text-white font-heading font-bold text-[12px] tracking-wide truncate max-w-[200px]">
                {mobileOpen ? 'Browse Services' : activeTitle}
              </span>
            </div>
            <ChevronDown
              size={15}
              className={`text-orange/80 transition-transform duration-200 shrink-0 ${mobileOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown list */}
          {mobileOpen && (
            <div
              className="border-t border-white/10 max-h-[62vh] overflow-y-auto"
              style={{ background: '#0a1f3d' }}
            >
              {services.map((s) => {
                const Icon = s.icon;
                const isActive = activeId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm text-left border-b border-white/5 last:border-0 transition-colors ${
                      isActive
                        ? 'bg-orange/15 text-orange'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-orange rounded-r-full" />
                    )}
                    <Icon size={14} className={`shrink-0 ${isActive ? 'text-orange' : 'text-white/35'}`} />
                    <span className="font-medium leading-snug">{s.title}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {children}
      </main>
    </div>
  );
}
