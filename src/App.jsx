import { useState } from "react";

const CANDIDATE_FORM_URL = "https://formspree.io/f/mojybbgb";
const COMPANY_FORM_URL = "https://formspree.io/f/xvzdynpp";

const Index = () => {
  const [userType, setUserType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [cvName, setCvName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).finally(() => setSubmitted(true));
  };

  const openForm = (type) => {
    setUserType(type);
    setSubmitted(false);
    setTimeout(() => {
      document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* NAV */}
      <header className="border-b border-slate-900/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-blue-600 grid place-items-center">
              <span className="h-2 w-2 rounded-full bg-[#f5f1ea]" />
            </span>
            <span className="text-base font-semibold tracking-tight">internity</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#how" className="hover:text-blue-600 transition">How it works</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          </nav>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Join waitlist
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-slate-900/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blue-600">
                <span className="h-px w-8 bg-blue-600" />
                Built for first-timers
              </div>
              <h1 className="mt-6 font-serif text-[2.75rem] sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
                Your first job<br />
                shouldn't require<br />
                <span className="italic text-slate-500">five years of</span>
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">experience.</span>
                  <span className="absolute left-0 right-0 bottom-1 h-3 bg-blue-200 -z-0" />
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-slate-600 text-base sm:text-lg leading-relaxed">
                Internity connects students and early-career talent with verified
                employers who are actually hiring beginners. No scams. No fees.
                No "entry-level (3 yrs req'd)" nonsense.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openForm("candidate")}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  I'm looking for a job
                  <span className="transition group-hover:translate-x-0.5" aria-hidden>→</span>
                </button>
                <button
                  onClick={() => openForm("company")}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-900/20 bg-transparent px-7 py-4 text-sm font-medium text-slate-900 hover:border-blue-600 hover:text-blue-600 transition"
                >
                  I'm hiring talent
                </button>
              </div>
            </div>

            {/* Side stat card */}
            <div className="lg:col-span-4">
              <div className="border-l-2 border-blue-600 pl-6">
                <div className="font-serif text-6xl leading-none text-blue-600">2,400+</div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  students and recent grads already on the waitlist —
                  hunting for their first real opportunity.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-slate-900/10 p-4 bg-[#fbf8f3]">
                  <div className="text-2xl font-medium text-blue-600">0</div>
                  <div className="mt-1 text-xs text-slate-500">Application fees, ever</div>
                </div>
                <div className="rounded-xl border border-slate-900/10 p-4 bg-[#fbf8f3]">
                  <div className="text-2xl font-medium text-blue-600">100%</div>
                  <div className="mt-1 text-xs text-slate-500">Verified employers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-b border-slate-900/10 overflow-hidden bg-blue-600 text-white">
        <div className="flex whitespace-nowrap animate-[ticker_40s_linear_infinite] py-4 text-sm uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center shrink-0">
              {[
                "No experience required",
                "Verified employers",
                "Built for Nigeria",
                "Apply in seconds",
                "100% free",
                "Internships & entry-level",
              ].map((t) => (
                <span key={t + k} className="flex items-center px-8">
                  {t}
                  <span className="ml-8 h-1.5 w-1.5 rounded-full bg-blue-200" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="border-b border-slate-900/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-600">— How it works</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                Three steps.<br />
                <span className="italic text-slate-500">That's the whole thing.</span>
              </h2>
            </div>

            <div className="md:col-span-8 grid gap-px bg-slate-900/10 border border-slate-900/10">
              {[
                {
                  n: "01",
                  title: "Build a profile & upload your CV",
                  desc: "Tell us what you can do, attach your CV, and let employers see what you're working with.",
                },
                {
                  n: "02",
                  title: "Browse only what fits",
                  desc: "We show roles tagged for beginners, students, and 0–2 years experience. Nothing else.",
                },
                {
                  n: "03",
                  title: "Apply with one tap",
                  desc: "Hit apply. We forward your profile and CV to the employer. You track everything in one place.",
                },
              ].map((s) => (
                <div key={s.n} className="bg-[#f5f1ea] p-8 md:p-10 grid grid-cols-[auto_1fr] gap-6">
                  <div className="font-serif text-5xl text-blue-600/30">{s.n}</div>
                  <div>
                    <h3 className="text-xl font-medium">{s.title}</h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-md">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-slate-900/10 bg-[#fbf8f3]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-blue-600">— What you get</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              The boring stuff,<br /> done right.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Verified employers", d: "Every company is reviewed before they can post. No ghost jobs, no MLMs." },
              { t: "Beginner-friendly only", d: "We hide listings asking for years of experience. You stop second-guessing." },
              { t: "One-tap apply", d: "Use your profile and CV. No re-uploading the same file ten times a day." },
              { t: "Live status tracker", d: "Know when your application is opened, reviewed, or declined." },
            ].map((f, i) => (
              <div
                key={f.t}
                className="group relative rounded-2xl bg-[#f5f1ea] border border-slate-900/10 p-6 hover:border-blue-600 transition"
              >
                <div className="font-serif text-blue-600/50 text-sm">0{i + 1}</div>
                <h3 className="mt-4 text-lg font-medium">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.d}</p>
                <span className="absolute top-6 right-6 h-2 w-2 rounded-full bg-blue-200 group-hover:bg-blue-600 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / MISSION */}
      <section className="border-b border-slate-900/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.2]">
            "Talent is everywhere.<br />
            <span className="italic text-blue-600">Opportunity isn't.</span><br />
            We're trying to fix that."
          </div>
          <div className="mt-8 text-xs uppercase tracking-[0.25em] text-slate-500">
            — The Internity team
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="bg-blue-600 text-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-blue-200">— Join the waitlist</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                Be first<br />
                <span className="italic text-blue-200">when we launch.</span>
              </h2>
              <p className="mt-6 text-blue-100 text-sm leading-relaxed max-w-md">
                Pick the side you're on. We'll send one email when you're in —
                no spam, no pressure.
              </p>

              {!userType && (
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setUserType("candidate")}
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition"
                  >
                    I'm looking for a job
                  </button>
                  <button
                    onClick={() => setUserType("company")}
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:border-white transition"
                  >
                    I'm hiring talent
                  </button>
                </div>
              )}
            </div>

            <div>
              {userType && (
                <div className="rounded-2xl bg-[#f5f1ea] text-slate-900 p-6 sm:p-8">
                  {submitted ? (
                    <div className="py-6 text-center">
                      <div className="mx-auto h-12 w-12 rounded-full bg-blue-600 text-white grid place-items-center text-xl">✓</div>
                      <h3 className="mt-5 font-serif text-2xl">You're on the list.</h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Thanks. We'll reach out the moment we open access.
                      </p>
                      <button
                        onClick={() => { setUserType(null); setSubmitted(false); setCvName(""); }}
                        className="mt-6 text-xs uppercase tracking-[0.2em] text-blue-600 hover:text-blue-700"
                      >
                        ← back
                      </button>
                    </div>
                  ) : userType === "candidate" ? (
                    <form action={CANDIDATE_FORM_URL} method="POST" encType="multipart/form-data" onSubmit={handleSubmit} className="space-y-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl">Join as candidate</h3>
                        <button type="button" onClick={() => { setUserType("company"); setCvName(""); }} className="text-xs text-blue-600 underline underline-offset-2 hover:text-blue-700">
                          switch to hiring
                        </button>
                      </div>
                      <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
                      <Field label="Role you're after" name="role" placeholder="e.g. Frontend intern" optional />

                      <div>
                        <span className="block text-xs uppercase tracking-[0.15em] text-slate-500 mb-2">
                          Upload your CV
                        </span>
                        <label className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-blue-600/40 bg-white px-4 py-3 cursor-pointer hover:border-blue-600 transition">
                          <span className="text-sm text-slate-600 truncate">
                            {cvName || "Choose a PDF or DOCX file"}
                          </span>
                          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                            Browse
                          </span>
                          <input
                            type="file"
                            name="cv"
                            required
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => setCvName(e.target.files?.[0]?.name ?? "")}
                          />
                        </label>
                        <p className="mt-1.5 text-[11px] text-slate-400">PDF or DOCX. Max ~5MB.</p>
                      </div>

                      <SubmitBtn>Join the waitlist</SubmitBtn>
                    </form>
                  ) : (
                    <form action={COMPANY_FORM_URL} method="POST" onSubmit={handleSubmit} className="space-y-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl">Hire on Internity</h3>
                        <button type="button" onClick={() => setUserType("candidate")} className="text-xs text-blue-600 underline underline-offset-2 hover:text-blue-700">
                          switch to candidate
                        </button>
                      </div>
                      <Field label="Company" name="company" required placeholder="Acme Inc." />
                      <Field label="Work email" name="email" type="email" required placeholder="hiring@company.com" />
                      <Field label="Role hiring for" name="role" required placeholder="e.g. Marketing intern" />
                      <SubmitBtn>Request early access</SubmitBtn>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-slate-900/10">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600">— Questions</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Things people ask.</h2>
          <div className="mt-12 divide-y divide-slate-900/10 border-y border-slate-900/10">
            {[
              { q: "Is Internity really free?", a: "Yes. Always free for candidates. Employers pay only when they actively hire." },
              { q: "Do I need a CV?", a: "Yes. A CV is required so employers can see your background — even a short one is fine." },
              { q: "When are you launching?", a: "Soon. Waitlist members get access first, in waves." },
              { q: "Where are you based?", a: "Built in Nigeria, opening to the wider African market next." },
            ].map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-medium">{item.q}</span>
                  <span className="ml-4 text-2xl text-blue-600 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f5f1ea]">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-blue-600 grid place-items-center">
              <span className="h-2 w-2 rounded-full bg-[#f5f1ea]" />
            </span>
            <span className="text-sm font-semibold">internity</span>
          </div>
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Internity. Made for the next generation.
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Field = ({ label, name, type = "text", required, optional, placeholder }) => (
  <label className="block">
    <span className="block text-xs uppercase tracking-[0.15em] text-slate-500 mb-2">
      {label} {optional && <span className="normal-case tracking-normal text-slate-400">(optional)</span>}
    </span>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-slate-900/30 py-2 text-base focus:outline-none focus:border-blue-600 transition placeholder:text-slate-400"
    />
  </label>
);

const SubmitBtn = ({ children }) => (
  <button
    type="submit"
    className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition"
  >
    {children} <span aria-hidden>→</span>
  </button>
);

export default Index;