import AppStoreButton from "./AppStoreButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Capture <span className="text-primary-green">Reactions</span><br />
              and Share Moments<br />
              with <span className="text-primary-green">SceneApps</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Capture and share authentic reactions to content and share with a network of live
              friends, videos
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <AppStoreButton store="apple" />
              <AppStoreButton store="google" />
            </div>
            
            {/* User Avatars */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face" 
                alt="User avatar" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face" 
                alt="User avatar" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-md -ml-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face" 
                alt="User avatar" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-md -ml-2"
              />
              <span className="text-sm text-gray-600 ml-3">Join 1M+ users</span>
            </div>
          </div>
          
          {/* Right Content - Phone Mockups */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Phone */}
              <div className="animate-float mx-auto w-64 h-auto transform -rotate-12">
                {/* <div className="bg-black rounded-3xl p-2 shadow-2xl"> */}
                  <img 
                    src="/alo_ping.png" 
                    alt="Friends reacting to content" 
                    className="w-full h-full rounded-2xl object-cover -rotate-20"
                  />
                {/* </div> */}
              </div>
              
              {/* Second Phone */}
              {/* <div className="animate-float-delayed absolute top-20 -right-8 w-56 h-auto transform rotate-12">
                <div className="bg-black rounded-3xl p-2 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=400&h=600&fit=crop" 
                    alt="Person enjoying app content" 
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
