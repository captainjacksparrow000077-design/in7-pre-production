import type { BlogPost } from "../types";
import { EDITORIAL_AUTHOR } from "@/lib/constants";

const post: BlogPost = {
  slug: "gaming-account-security-guide",
  title: "Gaming Account Security: Passwords, OTPs & Scams",
  description:
    "IN7India shares practical ways to protect gaming accounts: strong passwords, guarded OTPs, phishing awareness and safe account settings.",
  excerpt:
    "Strong passwords, guarded OTPs, phishing awareness and sensible account settings — the essentials of keeping a gaming account secure.",
  category: "App & Safety",
  readMinutes: 7,
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  author: EDITORIAL_AUTHOR,
  image: {
    src: "/images/poker_table.jpg",
    alt: "Casino table with cards and chips, illustrating account security",
    width: 1024,
    height: 1024,
  },
  intro: [
    "Your gaming account is a financial account. It may hold a balance, a linked payment method, and personal details, which makes it a target for phishing, one-time-password (OTP) theft, and account takeover.",
    "The good news is that most account compromises exploit simple, preventable weaknesses. This guide covers the practical habits that matter most: strong credentials, careful OTP handling, recognising scams, and reviewing your account settings.",
  ],
  sections: [
    {
      heading: "Use a strong, unique password",
      paragraphs: [
        "Reusing a password across sites is the most common way accounts get compromised. When one breached site leaks a password, attackers try the same email-and-password combination everywhere else — a technique known as credential stuffing.",
        "Create a password you use for this account alone. Longer passphrases (several unrelated words) are both strong and easier to remember than short, complicated strings. Where the platform offers two-factor authentication (2FA), enable it.",
      ],
      bullets: [
        "Never reuse your email, banking, or social password for a gaming account.",
        "Longer passphrases beat short, complex strings.",
        "Turn on two-factor authentication if it is available.",
        "Consider a reputable password manager.",
      ],
    },
    {
      heading: "Guard your one-time passwords (OTPs)",
      paragraphs: [
        "An OTP is a single-use code that proves you control a phone number or email. It is a security key, not a formality. Nobody legitimate needs you to read your OTP aloud, type it into a chat, or screenshot it.",
        "A frequent scam is an attacker who already has your password asking for the OTP to complete a login or password reset. If someone is asking for a code that was sent to you, that is a strong signal they are trying to access your account.",
      ],
      bullets: [
        "Never share an OTP with anyone, including \"support\" contacts.",
        "If you receive an OTP you did not request, treat it as a warning, not spam.",
        "Enter OTPs only on the platform's own screen.",
      ],
    },
    {
      heading: "Recognise phishing attempts",
      paragraphs: [
        "Phishing is a fake message — email, SMS, or social media — designed to look like it comes from a trusted brand and to trick you into entering credentials or clicking a malicious link. A sense of urgency (\"your account will be closed\") is a classic tactic.",
        "Before clicking anything, check the sender and the link destination carefully. Genuine services do not usually ask you to confirm a password by email, and they do not demand immediate payment through unusual channels.",
      ],
      bullets: [
        "Be sceptical of urgency and threats.",
        "Inspect the actual domain in links, not just the display text.",
        "Type the site address yourself rather than trusting a link.",
        "Never enter credentials on a page reached from an unexpected message.",
      ],
    },
    {
      heading: "Review your account and privacy settings",
      paragraphs: [
        "Take a few minutes to review what is connected to your account and who can see what. Remove linked payment methods you no longer use, and check whether the platform offers login alerts or session management so you can spot unfamiliar activity.",
        "Also confirm which device and phone number are registered to the account. If you change your number, update it promptly — otherwise you may lose access to OTPs and recovery options.",
      ],
      bullets: [
        "Remove old or unused payment methods.",
        "Enable login notifications where offered.",
        "Keep your registered phone number and email current.",
        "Log out of shared or public devices when you finish.",
      ],
    },
    {
      heading: "Know what to do if your account is compromised",
      paragraphs: [
        "If you suspect a takeover, act quickly. Reset the password from a trusted device, revoke unknown sessions if the platform allows it, and contact the operator's support through its official channel — not through a link in the suspicious message.",
        "In India, cybercrime can also be reported through the national Cyber Crime Portal. Prompt reporting improves the chance of limiting damage, especially where money has moved.",
      ],
      bullets: [
        "Change the password immediately from a clean device.",
        "Contact support through the official platform only.",
        "Report financial cyber fraud via the official Cyber Crime Portal.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I create a strong password for a gaming account?",
      answer:
        "Use a long passphrase that is unique to this account — ideally several unrelated words — and never reuse it on other sites. If the platform supports two-factor authentication, enable it as well.",
    },
    {
      question: "Is it ever okay to share an OTP with support?",
      answer:
        "No. An OTP is a key to your account. Legitimate support will not ask you to reveal it. Anyone requesting a code sent to your phone is likely trying to complete a login or reset on your account.",
    },
    {
      question: "How can I spot a phishing message?",
      answer:
        "Look for urgency or threats, unexpected requests for credentials or payment, and links whose actual domain does not match the brand. When in doubt, do not click — open the platform yourself by typing its address.",
    },
    {
      question: "What should I do if I receive an OTP I did not request?",
      answer:
        "Treat it as a warning that someone may be attempting access. Do not share the code, and consider changing your password and checking for unfamiliar account activity.",
    },
    {
      question: "Does enabling two-factor authentication really help?",
      answer:
        "Yes. Even if an attacker obtains your password, 2FA creates an additional barrier that most basic attacks cannot pass. It is one of the highest-value security settings available.",
    },
    {
      question: "Where can I report cyber fraud in India?",
      answer:
        "The Government of India's Cyber Crime Portal at cybercrime.gov.in is the official channel for reporting cyber fraud. CERT-In also publishes security guidance and advisories.",
    },
  ],
  sources: [
    {
      label: "OWASP — Authentication Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
    },
    {
      label: "Cyber Crime Portal — Government of India",
      url: "https://cybercrime.gov.in/",
    },
    {
      label: "CERT-In (Indian Computer Emergency Response Team)",
      url: "https://www.cert-in.org.in/",
    },
    {
      label: "Google Safe Browsing",
      url: "https://safebrowsing.google.com/",
    },
  ],
  related: [
    {
      label: "Gaming app safety checklist",
      href: "/blog/gaming-app-safety-checklist",
      note: "Check the app itself before you trust it with an account.",
    },
    {
      label: "IN7 app guide",
      href: "/blog/in7-app-guide",
      note: "Installation and permission guidance for the IN7 app.",
    },
    {
      label: "Privacy policy",
      href: "/privacy",
      note: "How this portal collects and handles data.",
    },
    {
      label: "Support",
      href: "/support",
      note: "How to reach support through official channels.",
    },
  ],
};

export default post;
