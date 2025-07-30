import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/LogoSVG.svg"
                alt="SceneApps Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold">SceneApps</span>
            </div>
            <p className="text-green-100 text-sm">
              Copyright © 2024 • SceneApps Incorporated
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-2 text-sm text-green-100">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Abeokuta, Ogun State, Nigeria
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contact@sceneapps.com
              </p>
              {/* <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                08023400000
              </p> */}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <div className="space-y-2 space-x-2 text-sm text-green-100">
              <a
                href="http://sceneapps.com/terms-condition.html"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="http://sceneapps.com/privacy-policy.html"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Privacy Policy
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
