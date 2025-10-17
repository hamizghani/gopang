import { LucideIcon } from 'lucide-react'

interface ProcessCardProps {
  icon: LucideIcon
  title: string
  description: string
  step: number
  isActive?: boolean
}

export default function ProcessCard({
  icon: Icon,
  title,
  description,
  step,
  isActive = false
}: ProcessCardProps) {
  return (
    <div className={`
      relative flex flex-col items-center text-center p-6 rounded-xl
      transition-all duration-300
      ${isActive 
        ? 'bg-green-50 border-2 border-green-500 shadow-lg scale-105' 
        : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
      }
    `}>
      {/* Step Number Badge */}
      <div className={`
        absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center
        text-white font-bold text-sm
        ${isActive ? 'bg-green-500' : 'bg-gray-400'}
      `}>
        {step}
      </div>

      {/* Icon Container */}
      <div className={`
        w-16 h-16 rounded-full flex items-center justify-center mb-4
        ${isActive 
          ? 'bg-green-500 text-white' 
          : 'bg-brown-100 text-amber-700'
        }
      `}>
        <Icon className="w-8 h-8" />
      </div>

      {/* Title */}
      <h3 className={`
        text-lg font-semibold mb-2
        ${isActive ? 'text-green-700' : 'text-gray-800'}
      `}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}