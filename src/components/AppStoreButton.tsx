import { Apple } from "lucide-react";
import { SiGoogleplay } from "react-icons/si";

interface AppStoreButtonProps {
  store: "apple" | "google";
}

export default function AppStoreButton({ store }: AppStoreButtonProps) {
  const isApple = store === "apple";
  
  return (
    <a 
      href="#" 
      className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 w-2/3 mx-auto sm:w-auto"
    >
      {isApple ? (
        <Apple className="w-6 h-6 mr-3 flex-shrink-0" />
      ) : (
        <SiGoogleplay className="w-6 h-6 mr-3 flex-shrink-0" />
      )}
      <div className="text-center sm:text-left">
        <div className="text-xs">Download from the</div>
        <div className="text-lg font-semibold">
          {isApple ? "App Store" : "Play Store"}
        </div>
      </div>
    </a>
  );
}
