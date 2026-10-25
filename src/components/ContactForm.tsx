import { useState, type FormEvent } from 'react';

type Props = {
  labels: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    ok: string;
    error: string;
  };
};

export default function ContactForm({ labels }: Props) {
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
          message: data.get('message'),
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
    <form className="footer__form" onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        required
        placeholder={labels.namePlaceholder}
        autoComplete="name"
      />
      <input
        name="email"
        type="email"
        required
        placeholder={labels.emailPlaceholder}
        autoComplete="email"
      />
      <textarea name="message" required placeholder={labels.messagePlaceholder} />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? labels.sending : labels.submit}
      </button>
      {status === 'ok' && <p className="status">{labels.ok}</p>}
      {status === 'error' && <p className="status">{labels.error}</p>}
    </form>
  );
}
