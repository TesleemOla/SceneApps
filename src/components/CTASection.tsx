import AppStoreButton from "./AppStoreButton";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border">
          <div className="flex justify-center" >
           <img src="/Mask Group.svg" alt="mask group" className="rotate-90"/>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Capture, Connect, Share
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join millions of users sharing authentic reactions. Download SceneApps today and connect with friends instantly through video content.
            Share your experiences like never before.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </div>
        </div>
      </div>
    </section>
  );
}
