import MenuItem from "./MenuItem"
import type { Category as CategoryType } from "@/lib/types"

interface CategorySectionProps {
  category: CategoryType
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-display">
          {category.name}
        </h2>
        {category.description && (
          <p className="text-gray-500 text-sm mt-1">{category.description}</p>
        )}
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {category.items.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  )
}