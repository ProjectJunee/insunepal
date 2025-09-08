// pages/index.tsx
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ChevronRight, Sparkles, Zap, Globe, ArrowRight, Play, Star, Check } from 'lucide-react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technology"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Deploy worldwide with enterprise-grade infrastructure"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Powered",
      description: "Intelligent automation that adapts to your needs"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "This completely transformed our development workflow. The results speak for themselves.",
      avatar: "SC"
    },
    {
      name: "Marcus Rivera",
      role: "Founder of InnovateHub",
      content: "I've never seen such a seamless integration. It's like magic, but better.",
      avatar: "MR"
    },
    {
      name: "Elena Kowalski",
      role: "Lead Developer at FutureStack",
      content: "The performance gains were immediate. Our team productivity increased by 300%.",
      avatar: "EK"
    }
  ]

  return (
    <>
      <Head>
        <title>Nexus - The Future of Development</title>
        <meta name="description" content="Transform your workflow with next-generation tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen text-white overflow-hidden bg-main-gradient">
        {/* Animated background */}
        <div className="fixed inset-0 opacity-30">
          <div 
            className="absolute inset-0 blur-3xl transform transition-transform duration-1000"
            style={{
              background: 'var(--gradient-bg-overlay)',
              transform: `translate(${mousePosition.x * 0.1 - 10}px, ${mousePosition.y * 0.1 - 10}px)`
            }}
          />
        </div>

        {/* Navigation */}
        <nav className={`relative z-10 p-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-gradient">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-brand-text-gradient">
                Nexus
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="transition-colors" style={{ color: 'var(--text-white)' }} 
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-white)'}>
                Features
              </a>
              <a href="#testimonials" className="transition-colors" style={{ color: 'var(--text-white)' }}
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-white)'}>
                Testimonials
              </a>
              <a href="#pricing" className="transition-colors" style={{ color: 'var(--text-white)' }}
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-white)'}>
                Pricing
              </a>
              <a href="#support" className="transition-colors" style={{ color: 'var(--text-white)' }} 
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-white)'}>
                Support
              </a>
              <button className="btn-brand">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 fill-current" style={{ color: 'var(--text-yellow-400)' }} />
                <span className="text-sm">Trusted by 50,000+ developers</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Build the
                <span className="bg-rainbow-gradient animate-pulse">
                  {' '}Future
                </span>
                <br />
                Today
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed" 
                 style={{ color: 'var(--text-gray-300)' }}>
                Transform your development workflow with our cutting-edge platform. 
                Experience the power of next-generation tools designed for modern teams.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group btn-brand flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group btn-glass flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Engineered for
                <span className="bg-brand-text-gradient"> Excellence</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-gray-300)' }}>
                Every feature is meticulously crafted to deliver an unparalleled development experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200 + 600}ms`,
                    boxShadow: 'var(--shadow-brand-cyan)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border-hover)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-brand-cyan)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)'
                  }}
                >
                  <div className="bg-brand-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:transition-colors" 
                      style={{ 
                        color: 'var(--text-white)',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-white)'}>
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-gray-300)' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative z-10 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Loved by
                <span className="bg-brand-text-gradient"> Developers</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--text-yellow-400)' }} />
                    ))}
                  </div>
                  <p className="mb-6 italic" style={{ color: 'var(--text-gray-300)' }}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm" style={{ color: 'var(--text-gray-400)' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-3xl p-12 border" 
                 style={{ 
                   background: 'var(--gradient-bg-overlay)', 
                   backdropFilter: 'blur(12px)',
                   borderColor: 'var(--glass-border)'
                 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to
                <span className="bg-brand-text-gradient"> Transform</span>
                <br />
                Your Workflow?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-gray-300)' }}>
                Join thousands of developers who have already revolutionized their development process
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group btn-brand flex items-center space-x-2">
                  <span>Start Your Free Trial</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-gray-400)' }}>
                  <Check className="w-4 h-4" style={{ color: 'var(--text-green-400)' }} />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 px-6 py-12 border-t" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-brand-text-gradient">
                Nexus
              </span>
            </div>
            <p className="mb-8" style={{ color: 'var(--text-gray-400)' }}>
              Building the future of development, one innovation at a time.
            </p>
            <div className="flex flex-wrap justify-center space-x-8 text-sm" style={{ color: 'var(--text-gray-400)' }}>
              <a href="#" className="transition-colors"
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-gray-400)'}>
                Privacy
              </a>
              <a href="#" className="transition-colors"
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-gray-400)'}>
                Terms
              </a>
              <a href="#" className="transition-colors"
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-gray-400)'}>
                Contact
              </a>
              <a href="#" className="transition-colors"
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--brand-cyan-400)'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-gray-400)'}>
                Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}