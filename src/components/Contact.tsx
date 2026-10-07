"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Github, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import MotionWrapper from "./MotionWrapper";

// reCAPTCHA v2 site key (public). The secret key is only used server-side
// in the Google Apps Script (scripts/contact-form-apps-script.gs).
const RECAPTCHA_SITE_KEY = "6LdV2OMtAAAAALKSpg0g7wK_7-_yznD7ZFVsGZNy";

// Web app URL of the deployed Google Apps Script. While empty, the form
// falls back to opening the visitor's email app.
const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz6SZKWKsGmGu0bzY3iPMNlPvmY-AF85ZMxq9q83KAtJTAAYoySotbtHOAFbsJeCbq_xA/exec";

interface Grecaptcha {
  render: (container: HTMLElement, options: { sitekey: string; theme?: "dark" | "light" }) => number;
  getResponse: (widgetId?: number) => string;
  reset: (widgetId?: number) => void;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type Status = { kind: "success" | "error" | "info"; text: string } | null;

function contactIcon(label: string) {
  if (label === "Email") return Mail;
  if (label === "Phone") return Phone;
  if (label === "GitHub") return Github;
  return MapPin;
}

export default function Contact() {
  const [status, setStatus] = useState<Status>(null);
  const [isSending, setIsSending] = useState(false);
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = captchaRef.current;
    if (!container) return;

    if (!document.querySelector("script[data-recaptcha]")) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.dataset.recaptcha = "true";
      document.head.appendChild(script);
    }

    let cancelled = false;
    let timer = 0;
    const renderWhenReady = () => {
      if (cancelled) return;
      const grecaptcha = window.grecaptcha;
      if (typeof grecaptcha?.render !== "function") {
        timer = window.setTimeout(renderWhenReady, 200);
        return;
      }
      if (widgetIdRef.current === null) {
        widgetIdRef.current = grecaptcha.render(container, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "dark"
        });
      }
    };
    renderWhenReady();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      widgetIdRef.current = null;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const widgetId = widgetIdRef.current;
    const token =
      widgetId !== null ? window.grecaptcha?.getResponse(widgetId) ?? "" : "";

    if (!token) {
      setStatus({
        kind: "error",
        text: `Please tick "I'm not a robot" before sending. If the check does not load, email me at ${profile.email}.`
      });
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!CONTACT_ENDPOINT) {
      const body = `${message}\n\n---\nFrom: ${name} <${email}>`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus({
        kind: "info",
        text: `Your email app should open with the message addressed to ${profile.email}. If it does not, please email me directly.`
      });
      return;
    }

    setIsSending(true);
    setStatus(null);
    try {
      // text/plain keeps this a simple CORS request (no preflight) for Apps Script
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name, email, subject, message, token })
      });
      const result = (await response.json()) as { ok?: boolean };
      if (!result.ok) throw new Error("Send failed");
      form.reset();
      setStatus({
        kind: "success",
        text: "Thank you, your message has been sent. I will get back to you soon."
      });
    } catch {
      setStatus({
        kind: "error",
        text: `Sorry, the message could not be sent. Please email me directly at ${profile.email}.`
      });
    } finally {
      setIsSending(false);
      if (widgetId !== null) window.grecaptcha?.reset(widgetId);
    }
  }

  return (
    <MotionWrapper id="contact" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Open to IT, systems, technical support, implementation, and development roles.
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

          <div ref={captchaRef} className="mt-6 min-h-[78px]" />

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <motion.button
              type="submit"
              disabled={isSending}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-mint/40 bg-mint px-5 py-2 text-sm font-semibold text-ink shadow-mint transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-70"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={17} />
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
            {status ? (
              <p
                className={`text-sm leading-6 ${
                  status.kind === "error" ? "text-red-300" : "text-mint"
                }`}
                role="status"
              >
                {status.text}
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </MotionWrapper>
  );
}
