import { useEffect } from "react";
import { Link } from "wouter";

export default function Terms() {
  const lastUpdated = "January 15, 2026";

   useEffect(()=>{
      // scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // 'instant' is often better for initial loads
      });
  
    },[])

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-[hsl(var(--vibrant))] transition-colors mb-12">
          <span className="mr-2">←</span> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-500 font-medium tracking-tight">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Acceptance of Terms</h2>
            <p>
              By creating an account or using the SceneApps platform (“Service”), you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and SceneApps Incorporated, a Delaware C-Corp with operations based in Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use SceneApps. Users between 13 and 17 must have parental or guardian consent. Local laws may require higher age limits or specific parental verification, which we strictly adhere to, including Nigeria's child online protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Accounts and Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and notify us immediately of any unauthorized access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Acceptable Use</h2>
            <p>
              You agree not to engage in prohibited behavior, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>Posting illegal, hateful, threatening, or harassing content.</li>
              <li>Sexual or exploitative content involving minors.</li>
              <li>Non-consensual sharing of others' images or recordings.</li>
              <li>Spam, impersonation, or attempts to disrupt the service.</li>
              <li>Using "Verbal Mentions" in a harassing or irresponsible manner.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. User Content and License</h2>
            <p>
              You retain ownership of the content you post. However, by posting, you grant SceneApps a worldwide, non-exclusive, royalty-free, sublicensable license to host, process, and display your content to operate and improve our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">6. AI and Emotion Insights</h2>
            <p>
              Our AI analyzes reaction videos to generate emotion scores and insights. These are for informational and entertainment purposes only and are not guaranteed to be 100% accurate. They should not be used as a substitute for human judgment or professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Intellectual Property</h2>
            <p>
              All branding, technology, and application design remain the exclusive property of SceneApps Incorporated. Reverse engineering, scraping, or unauthorized use of our IP is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in Nigerian courts, subject to mandatory local consumer protections.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact</h2>
            <p>
              Questions about these Terms? Email us at <a href="mailto:contact@sceneapps.com" className="text-[hsl(var(--vibrant))] font-bold hover:underline">contact@sceneapps.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
