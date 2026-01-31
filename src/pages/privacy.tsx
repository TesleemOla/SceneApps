import { Link } from "wouter";

export default function Privacy() {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-[hsl(var(--vibrant))] transition-colors mb-12">
          <span className="mr-2">←</span> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-500 font-medium tracking-tight">Last updated: {lastUpdated}</p>
        </Header>

        <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Introduction</h2>
            <p>
              SceneApps Incorporated (“we,” “us,” or “our”) is a Delaware C-Corp with operations based in Nigeria. We are committed to protecting your privacy. This policy explains how we collect and process data across our mobile applications and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Data We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Information You Provide</h3>
                <p>We collect your name, username, phone number, profile video, date of birth, contact details, video and reaction videos, audio, and any feedback you share with us.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Syncing Your Contacts</h3>
                <p>If you grant us permission, we may sync your phone's contacts to help match you with friends and family already using SceneApps.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Automated Collection</h3>
                <p>We collect device information, OS version, IP address, and usage data such as views and app interactions to improve our service.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">AI and Emotion Data</h3>
                <p>Our AI processes facial expressions and vocal signals to infer emotion and generate authenticity scores for your reaction videos.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. How and Why We Use Data</h2>
            <p>We process your data to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>Operate and improve app features like Verbal Mentions and Emotion Analysis.</li>
              <li>Sync your contacts to match you with connections you already have on your phone that are already on SceneApps.</li>
              <li>Personalize your experience and content recommendations.</li>
              <li>Maintain platform safety and prevent abuse.</li>
              <li>Communicate essential service updates and security alerts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We share information with trusted hosting, analytics, and moderation partners. We may disclose data if required by law to protect our users or comply with legal processes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your data. You can exercise these rights directly in the app or by contacting us via email. Nigerian users may also reach out to the NDPC with complaints.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h2>
            <p>
              For privacy questions or to exercise your rights, email <a href="mailto:contact@sceneapps.com" className="text-[hsl(var(--vibrant))] font-bold hover:underline">contact@sceneapps.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
