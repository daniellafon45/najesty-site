import { useState, type FormEvent } from 'react';

type Props = {
  labels: {
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    ok: string;
    error: string;
  };
  className?: string;
};

export default function ContactForm({ labels, className = 'footer__form' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          message: data.get('message'),
          company: data.get('company'),
        }),
      });
      if (!res.ok) throw new Error('fail');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />
      <input
        name="name"
        type="text"
        required
        maxLength={120}
        placeholder={labels.namePlaceholder}
        autoComplete="name"
      />
      <input
        name="email"
        type="email"
        required
        maxLength={254}
        placeholder={labels.emailPlaceholder}
        autoComplete="email"
      />
      <input
        name="phone"
        type="tel"
        maxLength={40}
        placeholder={labels.phonePlaceholder}
        autoComplete="tel"
      />
      <textarea
        name="message"
        required
        maxLength={4000}
        placeholder={labels.messagePlaceholder}
      />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? labels.sending : labels.submit}
      </button>
      {status === 'ok' && <p className="status">{labels.ok}</p>}
      {status === 'error' && <p className="status">{labels.error}</p>}
    </form>
  );
}
