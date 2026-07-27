interface HeaderProps {
  name: string
  slogan: string
  address: string
  hours: string
  theme: string
}

const themeStyles: Record<string, { bg: string; text: string; accent: string }> = {
  classic: {
    bg: "bg-gradient-to-br from-red-700 via-red-600 to-red-800",
    text: "text-white",
    accent: "text-red-200",
  },
  tropical: {
    bg: "bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600",
    text: "text-white",
    accent: "text-emerald-200",
  },
  elegant: {
    bg: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
    text: "text-white",
    accent: "text-gold-300",
  },
}

export default function Header({ name, slogan, address, hours, theme }: HeaderProps) {
  const style = themeStyles[theme] || themeStyles.classic

  return (
    <header className={`${style.bg} ${style.text} py-10 px-6 text-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:16px_16px]" />
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">{name}</h1>
        <p className={`text-lg italic ${style.accent} mb-4`}>{slogan}</p>
        <div className={`text-sm ${style.accent} space-y-1`}>
          <p>{address}</p>
          <p>{hours}</p>
        </div>
      </div>
    </header>
  )
}