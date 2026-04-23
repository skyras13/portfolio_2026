"use client";

import { useState } from "react";

const EMAIL = "skyras13software@gmail.com";

export function ContactEmail() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <a className="contact-email" onClick={copy}>
      {copied ? "✓ copied to clipboard" : EMAIL}
    </a>
  );
}
