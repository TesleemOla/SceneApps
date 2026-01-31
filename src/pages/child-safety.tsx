import { useEffect } from "react";
import { Link } from "wouter";

export default function ChildSafety() {
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
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Child Safety Policy</h1>
          <p className="text-lg text-slate-500 font-medium tracking-tight">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Our Commitment</h2>
            <p>
              SceneApps is a Delaware C-Corp with operations based in Nigeria. We are built on authentic human connection, and protecting our youngest users is our absolute priority. We maintain a safe environment for expression while strictly adhering to global and local child protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Age Limits</h2>
            <p>
              You must be at least 13 years old to use SceneApps. We do not knowingly collect data from children under 13. If you believe a child under 13 is using the platform, please report it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Prohibited Conduct</h2>
            <p>
              We have a zero-tolerance policy for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>Exploitative, sexual, or abusive content involving minors.</li>
              <li>Bullying, doxxing, or threats directed at younger users.</li>
              <li>Promotion of self-harm or dangerous challenges involving minors.</li>
              <li>Using AI insights to manipulate or shame minors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Safety and Reporting</h2>
            <p>
              Use our in-app reporting tools to flag any concerning behavior. Our moderation team reviews all reports involving minor safety with the highest priority. In case of immediate danger, always contact your local law enforcement.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get Help</h2>
            <p>
              Parents and guardians can reach us at <a href="mailto:contact@sceneapps.com" className="text-[hsl(var(--vibrant))] font-bold hover:underline">contact@sceneapps.com</a> for safety concerns or account reviews.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
