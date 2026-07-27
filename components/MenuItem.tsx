interface MenuItemProps {
  name: string
  description: string
  price: number
  image: string | null
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      {image && (
        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      {!image && (
        <div className="w-20 h-20 rounded-lg shrink-0 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
          <span className="text-2xl text-red-400 font-bold">
            {name.charAt(0)}
          </span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-gray-900 text-base">{name}</h3>
          <span className="text-red-600 font-bold whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}