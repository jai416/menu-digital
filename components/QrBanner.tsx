interface QrBannerProps {
  restaurantName: string
}

export default function QrBanner({ restaurantName }: QrBannerProps) {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 text-center mb-8 shadow-lg">
      <div className="max-w-xs mx-auto">
        <div className="bg-white rounded-lg p-3 inline-block mb-4">
          <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center mx-auto">
            <span className="text-gray-400 text-xs text-center leading-tight">
              QR<br />CODE
            </span>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-1">Escanea y pide</h3>
        <p className="text-red-200 text-sm">
          Escanea el código QR en tu mesa para ver el menú completo de {restaurantName} en tu celular
        </p>
      </div>
    </div>
  )
}