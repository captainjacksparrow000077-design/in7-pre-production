import type { BlogPost } from "../types";
import { EDITORIAL_AUTHOR } from "@/lib/constants";

const post: BlogPost = {
  slug: "in7-app-guide",
  title: "IN7 App Guide: Features & Installation Safety",
  description:
    "IN7India explains how to evaluate the IN7 app: device compatibility, installation sources, permissions and safety checks before installing.",
  excerpt:
    "A practical guide to the IN7 app: what it is, how to check compatibility, where to source it, and the permission and safety checks worth doing before you install.",
  category: "App & Safety",
  readMinutes: 7,
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  author: EDITORIAL_AUTHOR,
  image: {
    src: "/images/hero-in7-bg.webp",
    alt: "Dark, gold-accented background representing the IN7 app interface",
    width: 1376,
    height: 768,
  },
  intro: [
    "The IN7 app is the mobile front door to the IN7 casino platform. On this website, IN7India.in, we do not host the app, run the games, or process payments — we are a marketing and referral portal. Any download link here points to the third-party operator that actually provides the software.",
    "This guide explains what you can reasonably check before installing: what the app is in the context of this portal, how to confirm device compatibility, where to obtain it, and which permissions and safety signals are worth reviewing first.",
  ],
  sections: [
    {
      heading: "What the IN7 app is (and what this site is)",
      paragraphs: [
        "The IN7 app is an Android application distributed by the third-party IN7 casino operator. It provides access to the operator's catalogue of casino-style games, account features, and payment options. The exact feature set is controlled by the operator and can change without notice.",
        "IN7India.in is a referral and information website. When you tap a \"Download APK\" or \"Play Now\" button here, you are redirected to the operator's official platform. Registration, deposits, withdrawals, gameplay, and support all take place there — not on this site.",
      ],
      bullets: [
        "This portal does not collect deposits or hold player funds.",
        "Game availability, bonuses, and payment methods are set by the operator.",
        "Always treat the operator platform as the authoritative source for current details.",
      ],
    },
    {
      heading: "Before you install: eligibility and compatibility",
      paragraphs: [
        "Online casino platforms are intended for adults. Before downloading anything, confirm you meet the minimum age in your jurisdiction and that accessing such a platform is permitted where you live. Online gambling is restricted or prohibited in some Indian states, and enforcement varies.",
        "Because the IN7 app is distributed as an Android package (APK), it is designed for Android devices. Apple/iOS availability should not be assumed. As a general rule, you will also want enough free storage, a reasonably current version of Android, and a stable internet connection.",
      ],
      bullets: [
        "You are 18+ (or the legal age of majority in your jurisdiction).",
        "You have confirmed that participation is permitted where you live.",
        "Your device has enough free storage for the app and its data.",
        "Your Android version and screen size are suitable for the current release.",
      ],
    },
    {
      heading: "Where to download the IN7 app",
      paragraphs: [
        "The single most important safety factor for any sideloaded app is the source. Download from the operator's official platform only. Our own download buttons route through an internal redirect to that official destination; they do not point to a file mirror.",
        "Be cautious with search results, Telegram channels, or \"APK mirror\" sites that offer the same app. Copies distributed through unaffiliated channels can be modified, and a tampered installer is one of the most common ways malware reaches a phone.",
      ],
      bullets: [
        "Prefer the official platform link over third-party download pages.",
        "Avoid APK files shared through messaging apps or unofficial forums.",
        "If a download page demands unrelated information, stop and reconsider.",
      ],
    },
    {
      heading: "How to install an Android APK safely",
      paragraphs: [
        "Android blocks installs from outside the Play Store by default. When you download an APK, the system will ask you to allow installs from that specific source. Grant this only for the browser or app you are actively using, and turn it back off afterwards.",
      ],
      bullets: [
        "Download the file and note where it was saved.",
        "Open it and, when prompted, allow installs from this source only.",
        "Read the permission prompt before tapping install.",
        "After installing, disable \"install unknown apps\" for that source again.",
        "Open the app and confirm it behaves as expected before signing in.",
      ],
    },
    {
      heading: "Permissions: what to look at before you tap install",
      paragraphs: [
        "Android shows you the permissions an app requests before installation. Read them against what the app actually needs to do. Network access is expected for an online platform. Storage or notifications may be used for downloads and alerts.",
        "Be cautious with unusually broad requests. An app that asks for access to your contacts, your full SMS inbox, or accessibility services deserves scrutiny — these are high-trust permissions that are frequently abused. If a permission does not map to a feature you expect, that is a reason to pause.",
      ],
      bullets: [
        "Expected: network/internet access, and often storage or notifications.",
        "Evaluate carefully: contacts, SMS, call logs, accessibility services.",
        "Prefer entering one-time passwords manually rather than granting SMS auto-read.",
      ],
    },
    {
      heading: "Evaluating safety after installation",
      paragraphs: [
        "Once installed, keep the app and your device updated. Security patches for Android and for the app itself fix issues that attackers actively look for. Run a reputable mobile security scan and keep Google Play Protect enabled, since it can flag known-harmful apps even when they were sideloaded.",
        "Finally, read the operator's privacy policy and terms so you understand what data is collected and how disputes are handled. If anything about the app's behaviour feels wrong — unexpected background activity, unfamiliar pop-ups, or requests for information the app should not need — uninstall it and reassess.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the IN7 app available on the Google Play Store?",
      answer:
        "Based on how this portal presents it, the IN7 app is distributed as an Android package (APK) rather than through the Google Play Store. Distribution can change, so check the official platform for the current method rather than relying on a third-party listing.",
    },
    {
      question: "Which Android version do I need?",
      answer:
        "We cannot state exact minimum requirements from verified information. As a rule, keep your Android version reasonably current and check the official download page, which is the authoritative source for compatibility.",
    },
    {
      question: "Is it safe to install an APK from outside the Play Store?",
      answer:
        "It can be, if and only if the file comes from a trusted official source and you review the permissions before installing. Sideloading removes the Play Store's review layer, so the source you choose becomes the main protection.",
    },
    {
      question: "Can I use the IN7 app on an iPhone?",
      answer:
        "This portal describes an Android APK, so iOS availability should not be assumed. Confirm directly with the official platform before expecting an iPhone version.",
    },
    {
      question: "The app will not install — what should I check?",
      answer:
        "Common causes include insufficient storage, a blocked install-source setting, a corrupted or partial download, or an Android version mismatch. Delete the file, re-download from the official source, and re-enable installs from that single source.",
    },
    {
      question: "Does downloading the app cost anything?",
      answer:
        "The download link itself is provided free through this referral portal. Any deposits, and their terms, are separate and handled entirely by the third-party operator.",
    },
  ],
  sources: [
    {
      label: "Android — App permissions overview",
      url: "https://developer.android.com/guide/topics/permissions/overview",
    },
    {
      label: "Android — <uses-permission> manifest element",
      url: "https://developer.android.com/guide/topics/manifest/uses-permission-element",
    },
    {
      label: "Google Play Protect",
      url: "https://support.google.com/googleplay/answer/2812853",
    },
    {
      label: "CERT-In — Indian Computer Emergency Response Team",
      url: "https://www.cert-in.org.in/",
    },
  ],
  related: [
    {
      label: "Gaming app safety checklist",
      href: "/blog/gaming-app-safety-checklist",
      note: "A step-by-step list of checks to run before installing any gaming app.",
    },
    {
      label: "Gaming account security guide",
      href: "/blog/gaming-account-security-guide",
      note: "How to protect your account once the app is installed.",
    },
    {
      label: "How the IN7 referral portal works",
      href: "/about",
      note: "Understand what this website does — and does not — handle.",
    },
    {
      label: "Explore the casino lobby",
      href: "/lobby",
      note: "See the kinds of games available on the platform.",
    },
  ],
};

export default post;
