"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import MotionWrapper from "./MotionWrapper";

function contactIcon(label: string) {
  if (label === "Email") return Mail;
  if (label === "Phone") return Phone;
  if (label === "GitHub") return Github;
  if (label === "LinkedIn") return Linkedin;
  return MapPin;
}

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Message draft saved in the form UI. Email sending can be connected later.");
  }

  return (
    <MotionWrapper id="contact" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Available for IT, WordPress, full-stack, and web system roles.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {profile.contact.map((item) => {
            const Icon = contactIcon(item.label);
            const isDisabled = item.href === "#";
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-disabled={isDisabled}
                className="glass-card flex items-center gap-4 p-5 transition hover:border-cyan/35"
                whileHover={{ y: -4 }}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-sm text-steel">{item.label}</span>
                  <span className="block break-all font-semibold text-white">
                    {item.value}
                  </span>
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.form
          className="glass-card p-6 sm:p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-200">Name</span>
              <input
                name="name"
                required
                className="form-field"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                required
                className="form-field"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-semibold text-slate-200">Subject</span>
            <input
              name="subject"
              required
              className="form-field"
              placeholder="Job opportunity, project, or support request"
            />
          </label>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-semibold text-slate-200">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="form-field resize-none"
              placeholder="Tell me what you want to discuss"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <motion.button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-mint/40 bg-mint px-5 py-2 text-sm font-semibold text-ink shadow-mint transition hover:bg-emerald-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={17} />
              Send Message
            </motion.button>
            {status ? (
              <p className="text-sm leading-6 text-mint" role="status">
                {status}
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </MotionWrapper>
  );
}
