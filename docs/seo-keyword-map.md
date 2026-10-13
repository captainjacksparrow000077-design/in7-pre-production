# IN7India.in — Route-to-Keyword Map

This map assigns **one primary intent per URL** so pages do not compete with each
other. Keywords below are candidate targets, not verified volume data. The exact
brand spelling required in metadata is `IN7India` (the branded suffix is
`IN7India.in`).

Legend: **P** = primary keyword/topic · **S** = secondary · **LT** = long-tail ·
**Intent** = dominant search intent.

---

## Homepage — `/`

- **P:** IN7India / IN7 India online casino portal
- **S:** IN7 app, IN7 game, IN7 casino, IN7 games India
- **LT:** "what is IN7India", "IN7 India app download"
- **Intent:** Navigational + commercial (brand).
- **Target H1:** "Play bigger with the IN7 gaming app"
- **Internal links out:** `/lobby`, `/promotions`, `/blog`, key guides (hub), `/#faq`
- **Gaps addressed:** explains the referral model, links to safety/security guides.

## Casino Lobby — `/lobby`

- **P:** IN7 casino lobby / IN7 games list
- **S:** IN7 slots, live dealer games, Aviator, crash games, card games
- **LT:** "IN7 game list", "what games are on IN7"
- **Intent:** Commercial investigation.
- **Target H1:** "IN7 Casino Lobby: Slots, Live Tables & More"
- **Internal links out:** `casino-game-types-guide`, `live-casino-vs-online-slots`,
  `in7-app-guide`, `how-upi-payments-work-in7`
- **Gaps addressed:** No unverified catalogue claims; points to game-type guides.

## Promotions — `/promotions`

- **P:** IN7 promotions / IN7 bonus
- **S:** first deposit bonus, welcome bonus, wagering requirements
- **LT:** "IN7 welcome bonus terms", "how does the IN7 bonus work"
- **Intent:** Commercial.
- **Target H1:** "IN7 Promotions & Available Offers"
- **Internal links out:** `gaming-bonus-terms-explained`, `/go`
- **Gaps addressed:** States offers/terms are set by the operator; adds a
  "before you accept any bonus" checklist.

## Blog index — `/blog`

- **P:** IN7 casino guides / IN7 blog
- **S:** casino guides India, app safety, responsible gaming
- **Intent:** Informational hub.
- **Target H1:** "IN7 India Blog"
- **Internal links out:** every published article.

## About — `/about`

- **P:** about IN7India / IN7India referral platform
- **S:** is IN7India safe, IN7India affiliate disclosure
- **LT:** "who owns IN7India", "is IN7India official"
- **Intent:** Navigational / trust.
- **Target H1:** "About IN7India"
- **Internal links out:** `/lobby`, `/promotions`, `/blog`, `/support`, `responsible-gaming-tips`

## Support — `/support`

- **P:** IN7 support / IN7 help
- **S:** IN7India contact, account registration help, deposit help
- **LT:** "IN7 forgot password", "IN7 deposit not credited"
- **Intent:** Navigational / support.
- **Target H1:** "How can we help you?"
- **Internal links out:** `how-to-get-started-in7`, `how-upi-payments-work-in7`,
  `gaming-app-safety-checklist`, `gaming-account-security-guide`, `responsible-gaming-tips`

## Terms — `/terms` · Privacy — `/privacy`

- **P:** IN7India terms of service · IN7India privacy policy
- **Intent:** Trust / legal (low commercial value, keep indexable for trust).
- **Target H1:** "Terms of Service" · "Privacy Policy"

---

## Blog articles (one intent each)

| Slug | Primary intent | Primary keyword |
| --- | --- | --- |
| `in7-app-guide` | Informational — install | IN7 app guide / IN7 app download |
| `how-to-get-started-in7` | Informational — onboarding | how to get started on IN7 |
| `casino-game-types-guide` | Informational — education | casino game types |
| `live-casino-vs-online-slots` | Informational — comparison | live casino vs slots |
| `gaming-app-safety-checklist` | Informational — trust | gaming app safety |
| `gaming-account-security-guide` | Informational — trust | gaming account security |
| `gaming-bonus-terms-explained` | Informational — commercial | casino bonus terms / wagering |
| `how-upi-payments-work-in7` | Informational — payments | casino UPI deposits |
| `responsible-gaming-tips` | Informational — safety | responsible gaming tips |

### Redirected legacy slugs (consolidated to avoid duplicate intent)

| From | To |
| --- | --- |
| `/blog/understanding-casino-game-types` | `/blog/casino-game-types-guide` (308) |
| `/blog/understanding-bonuses-and-wagering` | `/blog/gaming-bonus-terms-explained` (308) |

---

## Internal-link clusters

- **Hub:** Homepage → `/lobby`, `/promotions`, `/blog`, guide hub.
- **Cluster "App & Safety":** `in7-app-guide` ↔ `gaming-app-safety-checklist` ↔
  `gaming-account-security-guide` (linked from `/support` and `/about`).
- **Cluster "Games":** `/lobby` → `casino-game-types-guide`,
  `live-casino-vs-online-slots`.
- **Cluster "Money":** `/promotions` → `gaming-bonus-terms-explained`;
  `/support` → `how-upi-payments-work-in7`.
- **Cluster "Responsible gaming":** `responsible-gaming-tips` linked from
  `/about`, `/support`, and the footer.

## Metadata rules applied

- Titles: main topic first, brand once via the layout template
  (`%s | IN7India.in`); homepage uses an absolute branded default title.
- Descriptions: unique, ~140–155 chars, brand token present, factual only.
- One `<h1>` per page; logical `h2`/`h3` hierarchy.
- Self-referencing canonical on every page (`https://in7india.in/<path>`).
