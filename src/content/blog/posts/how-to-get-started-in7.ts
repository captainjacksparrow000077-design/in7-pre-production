import type { BlogPost } from "../types";
import { EDITORIAL_AUTHOR } from "@/lib/constants";

const post: BlogPost = {
  slug: "how-to-get-started-in7",
  title: "How to Get Started on IN7: A Beginner's Guide",
  description:
    "New to IN7India? Learn how to check eligibility, download the Android app, register an account, review any welcome offer and explore the lobby.",
  excerpt:
    "Download the app, register, review any welcome offer, and explore the lobby — a plain-language walkthrough for new IN7 players, plus what to check first.",
  category: "Game Guides",
  readMinutes: 5,
  datePublished: "2025-01-10",
  dateModified: "2026-10-13",
  author: EDITORIAL_AUTHOR,
  image: {
    src: "/images/hero-casino-floor.webp",
    alt: "Casino floor with roulette and card tables",
    width: 1376,
    height: 768,
  },
  intro: [
    "IN7 is an online casino gaming platform available in India through a dedicated Android app. If you are new, this guide explains the basic steps to get started — and what to keep in mind before you do.",
    "IN7India.in is a referral portal: we point you to the operator's official platform, where registration, deposits, gameplay, and support all happen.",
  ],
  sections: [
    {
      heading: "Step 1: Check eligibility",
      paragraphs: [
        "Before downloading the app, confirm that you are at least 18 years of age (or the legal age of majority in your jurisdiction). Online gambling is restricted or prohibited in certain Indian states — you are responsible for verifying that participation is permitted where you live.",
      ],
    },
    {
      heading: "Step 2: Download the IN7 app",
      paragraphs: [
        "The IN7 app is distributed as an Android package (APK). Use the official download link provided through this portal or the operator's platform to get the latest version. Because it is not distributed through the Google Play Store, you will need to allow installs from that single source in your Android security settings.",
      ],
    },
    {
      heading: "Step 3: Register an account",
      paragraphs: [
        "Open the app and choose the registration option. You will typically be asked to provide a mobile number, which is verified with a one-time password (OTP). Use a number you control, because it is also your main route to account recovery.",
      ],
    },
    {
      heading: "Step 4: Review any welcome offer",
      paragraphs: [
        "After registration, check the promotions section for any available welcome bonus. Read the terms carefully — bonuses usually come with eligibility conditions and wagering requirements that determine how and when any winnings can be withdrawn.",
      ],
    },
    {
      heading: "Step 5: Explore the game lobby",
      paragraphs: [
        "The platform includes a range of categories: slot games, live dealer tables, crash games such as Aviator, card games, and more. Take time to explore the lobby and read each game's rules before playing with real money.",
      ],
      bullets: [
        "Slots and crash games need no strategy beyond bet size.",
        "Table games such as blackjack and roulette reward learning the rules.",
        "Live dealer tables add real-time atmosphere and higher minimums.",
      ],
    },
    {
      heading: "A note on responsible gaming",
      paragraphs: [
        "Online casino games are entertainment, not a reliable income source. Set a budget before you play and stick to it. If gambling starts to feel like a problem, step away and seek help from a responsible-gaming organisation in your region.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do I need an account before I can play?",
      answer:
        "Yes. Registration happens on the operator's platform and usually requires a mobile number verified by OTP. This portal does not create accounts or hold player data.",
    },
    {
      question: "Why is the app not on the Google Play Store?",
      answer:
        "Based on how it is presented here, IN7 is distributed as an Android APK. Distribution methods can change, so confirm the current method on the official platform.",
    },
    {
      question: "How much money do I need to start?",
      answer:
        "Minimum deposit amounts are set by the operator and can change. Start with the smallest amount that lets you explore games comfortably, and only ever deposit money you can afford to lose.",
    },
    {
      question: "How do I keep my new account secure?",
      answer:
        "Use a unique password, never share one-time passwords, and be sceptical of unsolicited messages. Our gaming account security guide covers this in detail.",
    },
    {
      question: "What if I am not sure whether online gambling is legal where I live?",
      answer:
        "Seek appropriate legal guidance before participating, or simply do not proceed. Availability is subject to local laws and you are responsible for compliance in your jurisdiction.",
    },
  ],
  sources: [
    {
      label: "Android — App permissions overview",
      url: "https://developer.android.com/guide/topics/permissions/overview",
    },
    {
      label: "CERT-In (Indian Computer Emergency Response Team)",
      url: "https://www.cert-in.org.in/",
    },
  ],
  related: [
    {
      label: "IN7 app guide",
      href: "/blog/in7-app-guide",
      note: "Compatibility, installation and safety checks for the app.",
    },
    {
      label: "Gaming account security guide",
      href: "/blog/gaming-account-security-guide",
      note: "Protect your new account from the start.",
    },
    {
      label: "Explore the casino lobby",
      href: "/lobby",
      note: "Browse the game types available on the platform.",
    },
    {
      label: "Responsible gaming tips",
      href: "/blog/responsible-gaming-tips",
      note: "Set healthy limits before you play.",
    },
  ],
};

export default post;
