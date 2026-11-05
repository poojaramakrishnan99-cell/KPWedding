# Kamesh & Preetha · Wedding invitation

A responsive, locally served wedding invitation for 2–4 December 2026. No runtime dependencies or external font requests.

## Run

Requires Node.js 24 (available in the prepared environment).

```sh
cd /workspace/KPWedding
npm start
```

The server listens on port 3000, or `PORT` if provided. `npm run check` checks JavaScript syntax. Use the existing isolated checkout; no additional worktree is needed.

## Downloadable website

Run `npm run export` to produce `dist/Kamesh-and-Preetha-Wedding.html`. Download this single file and open it in Chrome, Safari, or Edge. It contains all fonts, styles, artwork, interactivity, and the original PDF, so no server or installation is needed to view it. Chat attachment previews may restrict JavaScript; open the downloaded file in a browser for the working website. Calendar downloads work offline; maps and Google Calendar require Internet. Public sharing becomes available after hosting the website at a public address.

## Content and features

The phone layout puts the temple artwork and wedding names in a compact opening, with larger body text, full-width map/calendar actions, and a fixed bottom menu for Haldi, reception, wedding and guest details. Navigation tracks the current section. Call buttons and other key controls have at least 44px touch targets, and bottom spacing respects phone safe areas. The calendar dialog locks background scrolling and supports short landscape screens.

Hosted pages choose 600px or 1000px WebP illustrations for the display size, lazy-load event artwork and use locally served WOFF2 fonts. The original image/font sources stay in the repository, while the downloadable ZIP contains only the smaller web assets and the complete original PDF. The PDF loads only when the guest opens it. Run `python3 tools/package-website.py` to refresh the GitHub ZIP at `downloads/Kamesh-Preetha-Website.zip`.

Browser validation covers 320×568, 360×800, 390×844, 430×932, 768×1024, 844×390 and 1440×1000 viewports using Chromium with touch emulation on phones. Physical-device Safari validation remains a manual check.

- Three distinct event chapters, all event details transcribed from the supplied physical invitation.
- Countdown to 4 December 2026, 7:30 AM in India Standard Time.
- Google Maps venue searches, call links, Google Calendar links and downloadable RFC 5545 calendars, with event times converted from IST to UTC.
- Original, unaltered 11-page PDF for the complete Tamil invitation and extended family details.
- Reduced-motion support, keyboard access, mobile layouts and native sharing with clipboard fallback.

## Draft review notes

Artwork is illustrative, not verified photography of the venues. The temple artwork is an artistic interpretation inspired by Ramanathaswamy Temple, Rameswaram. Exact architectural fidelity is not claimed. The Canva reference and external venue research were blocked by the current environment network policy; the draft was designed from the user's brief and supplied PDF. Map links search the full named venues rather than pretending that unverified coordinates are confirmed pins.

The itinerary has meals before/after the ceremony window: Haldi lunch from 11:30 AM, reception dinner from 7 PM, wedding breakfast 7–9 AM and wedding feast from 10:30 AM. These are intentionally kept exactly as printed. Event calendars cover the main ceremony windows and include the meal details in their descriptions.

The original PDF is a print proof with visible “Proof” watermarks. It is included unchanged. Replace it with the final approved PDF before public release if desired. No invented RSVP submission, accommodation arrangements, or couple biography is included.

Share links use the currently opened site URL. Deploy to the chosen public host before distributing the invitation to guests. This draft has not been published.
