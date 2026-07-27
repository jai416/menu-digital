import type { MenuData } from "@/lib/types"

const API_BASE = process.env.NEXT_PUBLIC_API_URL || ""

export async function getMenuData(): Promise<MenuData> {
  const res = await fetch(`${API_BASE}/api/menu`, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch menu")
  return res.json()
}