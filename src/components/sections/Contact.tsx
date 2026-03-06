"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/section-wrapper";
import { portfolioData } from "@/lib/portfolio";
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";

// Using Formspree — user must replace FORM_ID with their own from https://formspree.io
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

export function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <SectionWrapper id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading label="Contact" title="Get In Touch" />

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Left — info */}
                    <div className="space-y-6">
                        <p className="text-white/60 leading-relaxed">
                            I&apos;m always open to discussing new projects, interesting ideas, or opportunities to be part of something amazing.
                        </p>

                        {[
                            { icon: Mail, label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                            { icon: Phone, label: "Phone", value: portfolioData.phone, href: portfolioData.phoneTel },
                            { icon: MapPin, label: "Location", value: portfolioData.location, href: undefined },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <div key={label} className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 mt-0.5">
                                    <Icon size={16} className="text-violet-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/30 font-mono uppercase tracking-wider mb-0.5">{label}</p>
                                    {href ? (
                                        <a href={href} className="text-white/70 hover:text-white transition-colors">{value}</a>
                                    ) : (
                                        <p className="text-white/70">{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right — form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/[0.07] text-white placeholder-white/30 text-sm outline-none transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/[0.07] text-white placeholder-white/30 text-sm outline-none transition-all"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:bg-white/[0.07] text-white placeholder-white/30 text-sm outline-none transition-all resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {status === "loading" ? (
                                <><Loader2 size={16} className="animate-spin" /> Sending...</>
                            ) : status === "success" ? (
                                <><CheckCircle2 size={16} /> Message Sent!</>
                            ) : (
                                <><Send size={16} /> Send Message</>
                            )}
                        </button>

                        {status === "error" && (
                            <p className="text-red-400 text-xs text-center font-mono">
                                Something went wrong. Please try again or email directly.
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </SectionWrapper>
    );
}
