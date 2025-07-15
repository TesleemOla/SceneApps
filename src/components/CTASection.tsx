import AppStoreButton from "./AppStoreButton";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-black xl:border-green-400 relative">
          <span className="border text-green-400 border-green-400 rounded-md p-1 px-2 bg-green-100
          absolute -top-3 right-5">
            SceneApps
          </span>

          <div className="flex justify-center">
            <img
              src="/Mask Group.svg"
              alt="mask group"
              className="absolute -left-10 top-[10%] h-[80%] w-1/3 lg:w-full"
            />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4   text-right lg:text-center">
            Capture, Connect, Share
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl  text-right lg:text-center">
            Join millions of users sharing authentic reactions. Download
            SceneApps today and connect with friends instantly through video
            content. Share your experiences like never before.
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
