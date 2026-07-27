export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string | null
}

export interface Category {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export interface Restaurant {
  name: string
  slogan: string
  description: string
  address: string
  phone: string
  whatsapp: string
  hours: string
  instagram: string
  theme: "classic" | "tropical" | "elegant"
}

export interface MenuData {
  restaurant: Restaurant
  categories: Category[]
}