import { Video, Smile, Bell, Clock } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Capture and Share",
    description: "Record authentic reactions to content and share with friends"
  },
  {
    icon: Smile,
    title: "Reaction Capture",
    description: "Automatically capture genuine reactions in real-time"
  },
  {
    icon: Bell,
    title: "Never miss a mention",
    description: "Get notified when your friends share or mention you"
  },
  {
    icon: Clock,
    title: "Real Time Interaction",
    description: "Connect and interact with friends in real-time"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Phone Mockups */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Phone Display */}
             <img src="/framethree.svg" alt="Three phones" />
            </div>
          </div>
          
          {/* Right Side - Features */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-green transition-colors duration-300">
                      <IconComponent className="text-white w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
