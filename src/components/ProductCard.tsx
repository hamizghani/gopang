import { LucideIcon } from 'lucide-react'

interface ProductCardProps {
  icon: LucideIcon
  name: string
  description: string
  benefits: string[]
}

export default function ProductCard({
  icon: Icon,
  name,
  description,
  benefits
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Icon Header with gradient background */}
      <div className="bg-eco-gradient p-6 flex justify-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
          <Icon className="w-10 h-10 text-green-600" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Benefits List */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-green-700 mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">•</span>
                <span className="text-gray-600 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button (non-functional) */}
      <div className="px-6 pb-6">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Learn More
        </button>
      </div>
    </div>
  )
}