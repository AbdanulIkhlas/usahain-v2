import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { waitlistData } from "@/data/waitlist";
import { brandConfig } from "@/config/brand.config";
import { z } from "zod";
import { CheckCircle, Loader2, Send } from "lucide-react";

const waitlistSchema = z.object({
  fullName: z.string().trim().min(1, "Nama wajib diisi").max(100),
  phone: z.string().trim().min(1, "Nomor HP wajib diisi").max(20),
  email: z.string().trim().email("Email tidak valid").max(255),
  city: z.string().trim().max(100).optional(),
  role: z.string().min(1, "Pilih peran kamu"),
  budget: z.string().optional(),
  reason: z.string().trim().min(1, "Alasan wajib diisi").max(1000),
  consent: z.literal(true, { errorMap: () => ({ message: "Kamu harus menyetujui" }) }),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

const Waitlist = () => {
  const [form, setForm] = useState<Partial<WaitlistForm>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = waitlistSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    // Simulate API call — ready for real backend
    await new Promise((r) => setTimeout(r, 1500));
    console.log("[Waitlist Submission]", result.data);
    setSubmitting(false);
    setSuccess(true);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all text-sm";
  const labelClass = "block text-sm font-medium text-text-primary mb-1.5";
  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-xl">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full gradient-accent mx-auto flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <h2 className="text-2xl font-extrabold text-text-primary">
                  {waitlistData.successMessage}
                </h2>
                <p className="mt-4 text-text-secondary">
                  {waitlistData.referralMessage}
                </p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                    🚀 Early Access — Kuota Terbatas
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary">
                    {waitlistData.headline}
                  </h1>
                  <p className="mt-3 text-text-secondary">{waitlistData.subheadline}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className={labelClass}>Nama Lengkap *</label>
                    <input className={inputClass} placeholder="Nama kamu" onChange={(e) => update("fullName", e.target.value)} />
                    {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>Nomor HP *</label>
                    <input className={inputClass} placeholder="08xxxxxxxxxx" onChange={(e) => update("phone", e.target.value)} />
                    {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input className={inputClass} type="email" placeholder="email@contoh.com" onChange={(e) => update("email", e.target.value)} />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className={labelClass}>Kota</label>
                    <input className={inputClass} placeholder="Jakarta, Surabaya, dll." onChange={(e) => update("city", e.target.value)} />
                  </div>

                  {/* Role */}
                  <div>
                    <label className={labelClass}>Bergabung Sebagai *</label>
                    <select className={inputClass} onChange={(e) => update("role", e.target.value)} defaultValue="">
                      <option value="" disabled>Pilih peran</option>
                      {waitlistData.roles.map((r) => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                    {errors.role && <p className={errorClass}>{errors.role}</p>}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className={labelClass}>Estimasi Budget</label>
                    <select className={inputClass} onChange={(e) => update("budget", e.target.value)} defaultValue="">
                      <option value="" disabled>Pilih range (opsional)</option>
                      {waitlistData.budgetRanges.map((b) => (
                        <option key={b.value} value={b.value}>{b.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Reason */}
                  <div>
                    <label className={labelClass}>Alasan Bergabung *</label>
                    <textarea
                      className={`${inputClass} min-h-[100px] resize-none`}
                      placeholder="Ceritakan kenapa kamu tertarik..."
                      onChange={(e) => update("reason", e.target.value)}
                    />
                    {errors.reason && <p className={errorClass}>{errors.reason}</p>}
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 rounded border-border"
                      onChange={(e) => update("consent", e.target.checked)}
                    />
                    <label htmlFor="consent" className="text-sm text-text-secondary">
                      Saya bersedia dihubungi oleh tim {brandConfig.name}
                    </label>
                  </div>
                  {errors.consent && <p className={errorClass}>{errors.consent}</p>}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 shadow-lg shadow-primary/20"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Mendaftar...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Gabung Waitlist
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Waitlist;
