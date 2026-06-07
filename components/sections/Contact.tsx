'use client';
import { useState } from 'react';
import { profile } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const fd = new FormData(e.currentTarget);
    const payload = { name: fd.get('name'), email: fd.get('email'), message: fd.get('message') };
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
        return;
      }
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setErrorMsg('Network error. Please try again or email directly.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Together"
          subtitle="Open to AI/ML internship opportunities, research collaborations, and interesting projects."
        />
        <ScrollReveal>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-3 text-text-muted">
                <Mail className="h-5 w-5 text-accent-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-subtle mb-1">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-text-primary hover:text-accent-cyan transition-colors break-all">
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-text-muted">
                <MapPin className="h-5 w-5 text-accent-purple mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-subtle mb-1">Location</p>
                  <p>Chandigarh University, India</p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid place-items-center w-10 h-10 rounded-full border border-border text-text-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-all">
                  <Github className="h-4 w-4" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid place-items-center w-10 h-10 rounded-full border border-border text-text-muted hover:text-accent-purple hover:border-accent-purple/50 transition-all">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
            <form onSubmit={onSubmit} className="lg:col-span-3 space-y-4 p-6 md:p-8 rounded-2xl border border-border bg-bg-card/40">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">Name</label>
                <input id="name" name="name" required maxLength={100} className="w-full h-11 px-4 rounded-lg bg-bg/60 border border-border text-text-primary focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">Email</label>
                <input id="email" name="email" type="email" required maxLength={200} className="w-full h-11 px-4 rounded-lg bg-bg/60 border border-border text-text-primary focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} maxLength={5000} className="w-full px-4 py-3 rounded-lg bg-bg/60 border border-border text-text-primary focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-colors resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Send Message <Send className="h-4 w-4" /></>}
              </Button>
              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-accent-cyan">
                  <CheckCircle2 className="h-4 w-4" /> Message sent — I'll reply within 48 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-accent-pink">
                  <AlertCircle className="h-4 w-4" /> {errorMsg}
                </div>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
