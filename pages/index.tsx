// pages/index.tsx
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ChevronRight, Sparkles, Zap, Globe, ArrowRight, Play, Star, Check } from 'lucide-react'
import LifeInsuranceQuote from '@/components/Hero'
import Layout from '@/components/Layout'

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
    <Layout>

        {/* Hero Section */}
        <LifeInsuranceQuote />
    </Layout>
  )
}