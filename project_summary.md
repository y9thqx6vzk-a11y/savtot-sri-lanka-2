# ××‘× ×” ×”×ª×™×§×™×•×ª ×•×”×§×‘×¦×™×
========================
.
./project_summary.md
./logs.txt
./contexts
./contexts/SiteContext.jsx
./app
./app/layout.jsx
./app/discovery
./app/discovery/page.jsx
./app/page.jsx
./app/admin
./app/admin/actions.ts
./app/admin/AdminTable.tsx
./app/admin/page.tsx
./app/about
./app/about/page.jsx
./app/register
./app/register/page.jsx
./app/api
./app/api/calendar
./app/api/calendar/route.js
./app/api/chat
./app/api/chat/route.js
./app/api/content
./app/api/content/route.js
./app/api/logout
./app/api/logout/route.js
./app/api/register
./app/api/register/route.js
./app/api/login
./app/api/login/route.js
./app/api/email
./app/api/email/route.js
./app/api/upload
./app/api/upload/route.js
./app/itinerary
./app/itinerary/page.jsx
./app/itinerary/[season]
./app/itinerary/[season]/page.jsx
./app/essentials
./app/essentials/page.jsx
./app/globals.css
./dist
./dist/index.html
./dist/8.jpg
./dist/9.jpg
./dist/arugam.jpg
./dist/family.jpg
./dist/rock.jpg
./dist/vite.svg
./dist/10.jpg
./dist/4.jpg
./dist/home3.jpg
./dist/home2.jpg
./dist/5.jpg
./dist/home1.jpg
./dist/6.jpg
./dist/2.jpg
./dist/assets
./dist/assets/index-aQDf7Mig.css
./dist/assets/index-CkXCSTqX.js
./dist/tea.jpg
./dist/3.jpg
./dist/1.jpg
./postcss.config.mjs
./next.config.mjs
./utils
./utils/logger.js
./utils/sanitizePrompt.js
./utils/passwordHash.js
./utils/supabase
./utils/supabase/client.js
./utils/supabase/server.js
./utils/supabase/middleware.js
./utils/rateLimiter.js
./utils/registrationStore.js
./utils/htmlEscape.js
./next-env.d.ts
./README.md
./export_agreements.js
./components
./components/EditableText.jsx
./components/Footer.jsx
./components/Agreements
./components/Agreements/AccommodationRates.jsx
./components/Agreements/MedicalWaiver.jsx
./components/Agreements/TravelAgreement.jsx
./components/Agreements/ItineraryAppendix.jsx
./components/SmartPackingList.jsx
./components/Navbar.jsx
./components/EditableImage.jsx
./components/NoticeBoardGallery.jsx
./public
./public/home-page.jpg
./public/small_2.webp
./public/vite.svg
./public/10.jpg
./public/small_1.webp
./package-lock.json
./package.json
./dev.log
./upload_new_images.mjs
./google_docs_export
./google_docs_export/ItineraryAppendix_Summer.txt
./google_docs_export/TravelAgreement.txt
./google_docs_export/MedicalWaiver.txt
./google_docs_export/AccommodationRates.txt
./google_docs_export/ItineraryAppendix_Winter.txt
./proxy.ts
./lib
./lib/firebaseAdmin.js
./lib/cloudinary.js
./convert_to_webp.cjs
./convert_root_webp.cjs
./tsconfig.json
./eslint.config.js
./upload_to_cloudinary.mjs
./fix_site_context.js

========================
# ×ª×•×›×Ÿ ×”×§×‘×¦×™× ×•×”×§×•×“
========================

## ×§×•×‘×¥: ./logs.txt
```

```

## ×§×•×‘×¥: ./contexts/SiteContext.jsx
```
'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

export const defaultContentData = {
  he: {
    nav: {
      home: '×‘×™×ª', itinerary: '×”××¡×œ×•×œ', essentials: '××™×“×¢ ×—×©×•×‘', discovery: '×’×œ×¨×™×”', about: '×”×¡×™×¤×•×¨ ×©×œ× ×•', register: '×”×¦×˜×¨×¤×• ×œ××¡×¢', toggle: 'Switch to English'
    },
    hero: {
      title: '×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×”\n2027',
      subtitle: '×××¤×œ×™× ××¨×”×™×‘×™× ×•××˜×¢×™ ×ª×” ×™×¨×•×§×™×, ×œ×´×‘×¨×™×›×•×ª ××™× ×¤×™× ×™×˜×™" ×˜×‘×¢×™×•×ª ×•×”×—×•×¤×™× ×”×™×¤×™× ×‘×™×•×ª×¨ ×©×™×©.\n×—×•×•×™×” ××™×•×—×“×ª ×•×‘×œ×ª×™ × ×©×›×—×ª ×©××¨×’× ×• ×‘××™×•×—×“ ×‘×©×‘×™×œ×š, ××™×©×” ×©××—×¤×©×ª ×œ×—×•×•×ª ×§×¦×ª ×´×˜×™×•×œ ××—×¨×™ ×¦×‘××´\n××‘×œ ×‘×§×¦×‘ ×¨×’×•×¢ ×•×¢× ×›×œ ×”×¤×™× ×•×§×™× ×©×œ ×˜×™×•×œ ×××•×¨×’×Ÿ.',
      tagline: '×˜×™×•×œ ×©×œ ×¤×¢× ×‘×—×™×™×',
      cta_plan: '×¦×¤×• ×‘×ª×•×›× ×™×ª',
      cta_discover: '×’×œ×• ×¢×•×“',
      kosher: '×”×˜×™×•×œ ×¢× ×›×©×¨×•×ª ××œ××”.',
      yoga: '×›×•×œ×œ ×ª×¨×’×•×œ×™ ×™×•×’×” ×™×•××™×™×.',
      winter_trip: '××¡×¢ ×—×•×¨×£: 15-24 ×œ×¤×‘×¨×•××¨',
      dates_disclaimer: '* ×ª××¨×™×›×™× ××“×•×™×§×™× ×™×¤×•×¨×¡××• ×‘×”××©×š.'
    },
    features: {
      title: '×™×•×ª×¨ ××¡×ª× ×˜×™×•×œ', f1_title: '×•×•×œ× ×¡ ×•×™×•×’×”', f1_desc: '×ª×¨×’×•×œ×™ ×™×•×’×” ×¢×“×™× ×™× ×‘×–×¨×™×—×” ××• ×‘×©×§×™×¢×”, ×œ×›×œ ×”×¨××•×ª, ×œ××ª×™×—×” ×•×”×¨×’×¢×” ×©×œ ×”×’×•×£ ×•×”× ×¤×©.', f2_title: '×ª×¨×‘×•×ª ××•×ª× ×˜×™×ª', f2_desc: '××¡×¤××¨×™ ×•×¢×“ ××˜×¢×™ ×ª×” ×•×˜×™×•×œ×™ ×–×¨×™×—×”, ×ª×§×‘×œ×• ××ª ×”×”×–×“×× ×•×ª ×œ×¨××•×ª ××ª ×¡×¨×™ ×œ× ×§×” ×”×××™×ª×™×ª.', f3_title: '×›×©×¨×•×ª ××œ××”', f3_desc: '×× ×—× ×• ××§×¤×™×“×™× ×¢×œ ×—×•××¨×™ ×’×œ× ××§×•××™×™× ×•×˜×¨×™×™×. ×¦×•×•×ª ×˜×‘×—×™× ××§×•××™ ×™×‘×©×œ ×¢×‘×•×¨× ×•, ×›×©××—×“ ×××™×ª× ×• (××”×¦×•×•×ª ×”×™×©×¨××œ×™) × ××¦× ×©× ×¦××•×“ ×›×“×™ ×œ×¤×§×— ×¢×œ ×”×›×œ ×•×œ×”×‘×˜×™×— ×©×”×›×œ ×¢×•××“ ×‘×”×›×©×¨.'
    },
    gallery: {
      title: '×œ×—×•×•×ª ××ª ×”×§×¡×', desc: '×××¤×œ×™× ××©×’×¢×™× ×•××˜×¢×™ ×ª×” ×™×¨×•×§×™×, ×“×¨×š ×‘×¨×™×›×•×ª ××™× ×¤×™× ×™×˜×™ ×˜×‘×¢×™×•×ª ×•×¢×“ ×œ×—×•×¤×™× ×”×›×™ ×™×¤×™× ×©×™×© - ×–×• ×”×”×–×“×× ×•×ª ×©×œ× ×• ×œ×—×•×•×ª ××ª ×¡×¨×™ ×œ× ×§×” ×”×××™×ª×™×ª ×•×”××•×ª× ×˜×™×ª.', cta: '×©×¨×™×™× ×• ××§×•× ×‘×˜×™×•×œ'
    },
    itinerary: {
      title: '×¤×¨×˜×™ ×”××¡×¢', subtitle: '×ª×•×›× ×™×ª ×™×•××™×ª ××¤×•×¨×˜×ª',
      headers: { hour: '×©×¢×”', place: '××™×§×•×', activity: '×¤×¢×™×œ×•×ª' },
      summer: {
        days: [
          { day: "1", title: "××’×™×¢×™× ×œ×¡×¨×™ ×œ× ×§×”", desc: "×”×”×™×™×œ×™×™×˜ ×©×œ ×”×™×•× - ××¡××–' ××¤× ×§ ×‘××™×•×—×“ ×‘×¡×™×’×™×¨×™×”, ×›×“×™ ×œ×”×™×›× ×¡ ×œ××•×•×™×¨×”.", highlight: "××¡××–' ××¤× ×§ ×‘×¡×™×’×™×¨×™×”", 
            schedule: [
              { hour: "-", place: "×™×©×¨××œ", activity: "×˜×™×¡×”" },
              { hour: "-", place: "×§×•×œ×•××‘×•", activity: "× ×¡×™×¢×” ×‘××•×˜×•×‘×•×¡ ×œ×¡×™×’×™×¨×™×™×”" },
              { hour: "-", place: "×¡×™×’×™×¨×™×™×”", activity: "×§×‘×œ×ª ×—×“×¨×™× ×•×”×ª××¨×’× ×•×ª" },
              { hour: "-", place: "×¡×™×’×™×¨×™×™×”", activity: "××¨×•×—×ª ×¢×¨×‘" },
              { hour: "-", place: "×¡×™×’×™×¨×™×™×”", activity: "×¢×™×¡×•×™ ××¤× ×§" }
            ]
          },
          { day: "2", title: "×¡×œ×¢ ×”××¨×™×” ×•×¡×¤××¨×™", desc: "×”×©×›××” ××•×§×“××ª ×œ×˜×™×¤×•×¡ ××¨×’×©, ×¡×™×•×¨ ×‘×›×¤×¨ ×”××•×ª× ×˜×™ ×•×¡×¤××¨×™ ××—×¨ ×”×¦×”×¨×™×™×.", highlight: "×¡×œ×¢ ×”××¨×™×” ×•×¡×¤××¨×™ ×¤×™×œ×™×", 
            schedule: [
              { hour: "05:00", place: "×¡×œ×¢ ×”××¨×™×” (Sigiriya Rock)", activity: "×˜×™×¤×•×¡ ×•×–×¨×™×—×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¡×™×’×™×¨×™×™×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "10:00 - 15:00", place: "×›×¤×¨ ××§×•××™", activity: "×¡×™×•×¨ ×›×¤×¨ ××•×ª× ×˜×™" },
              { hour: "15:00 - 16:00", place: "××œ×•×Ÿ", activity: "×× ×•×—×”" },
              { hour: "16:00 - 18:00", place: "×¡×¤××¨×™", activity: "×˜×™×•×œ ×¡×¤××¨×™" },
              { hour: "18:30 - 19:30", place: "××œ×•×Ÿ ×‘×¡×™×’×™×¨×™×™×”", activity: "××¨×•×—×ª ×¢×¨×‘" },
              { hour: "20:30", place: "××œ×•×Ÿ", activity: "×–××Ÿ ×—×•×¤×©×™ / ×”×ª××•×©×©×•×ª" }
            ]
          },
          { day: "3", title: "××§×¡×˜×¨×™× ×‘×§×™×˜×•×œ×’×œ×”", desc: "×™×•× ××œ× ××“×¨× ×œ×™×Ÿ ×¢× ×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’, ×•××¢×‘×¨ ×œ× ×•×•××¨×” ××œ×™×” ×”×§×¨×™×¨×”.", highlight: "×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "× ×¡×™×¢×”" },
              { hour: "14:00 - 15:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "×¨×¤×˜×™× ×’" },
              { hour: "15:30 - 17:00", place: "×§×™×˜×•×œ×’×œ×”", activity: "×§× ×™×•× ×™× ×’" },
              { hour: "15:30 - 17:00", place: "×§×™×˜×•×œ×’×œ×”", activity: "×”×œ×™×›×” ×‘×™×¢×¨ ×”×’×©×" },
              { hour: "17:30 - 19:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "4", title: "×ª×”, ×¨×›×‘×•×ª ×•××œ×”", desc: "×”×–×”×‘ ×”×™×¨×•×§ ×©×œ ×¡×¨×™ ×œ× ×§×” ×•× ×¡×™×¢×ª ×”×¨×›×‘×ª ×”×™×¤×” ×‘×¢×•×œ× ×‘×“×¨×š ××œ ×”×¢×™×™×¨×” ××œ×”.", highlight: "× ×¡×™×¢×ª ×”×¨×›×‘×ª ×œ××œ×”", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 14:30", place: "××˜×¢×™ ×ª×”", activity: "×¡×™×•×¨ ×‘××˜×¢×™ ×”×ª×”" },
              { hour: "15:00 - 17:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×ª ×¨×›×‘×ª ×œ××œ×”" },
              { hour: "17:30 - 18:00", place: "××œ×”", activity: "× ×¡×™×¢×” ×œ××œ×•×Ÿ" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "5", title: "××¤×œ×™× ×•××“×¨× ×œ×™×Ÿ", desc: "× ×•×¤×™× ×¢×•×¦×¨×™ × ×©×™××” ×‘××¤×œ×™ ×“×™××œ×•×× ×•×’×œ×™×©×ª ××•××’×” ××¢×œ ×”×¦××¨×•×ª.", highlight: "××¤×œ×™ ×“×™××œ×•×× ×•××•××’×”", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "××œ×”", activity: "××¤×œ×™ ×“×™××œ×•××" },
              { hour: "15:30 - 17:00", place: "××œ×”", activity: "×’×œ×™×©×ª ××•××’×” (Zipline)" },
              { hour: "15:30 - 17:00", place: "××œ×”", activity: "×”×¡×ª×•×‘×‘×•×ª ×•×§× ×™×•×ª" },
              { hour: "17:30 - 20:30", place: "×¤×¡×™×§×•×“×”", activity: "× ×¡×™×¢×” ×œ×¤×¡×™×§×•×“×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "6", title: "×”×—×™×™× ×¢×œ ×”×—×•×£", desc: "××’×™×¢×•×ª ×œ×¤×¡×™×§×•×“×” ×”××”×××ª ×•××ª××§××•×ª.", highlight: "×©×‘×ª ×‘×¤×¡×™×§×•×“×”", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 12:00", place: "×¤×•×˜×•×‘×™×œ", activity: "×¡××¤ ×‘×•×§×¨ ×‘×œ×’×•× ×”" },
              { hour: "13:30 - 15:30", place: "×¤×¡×™×§×•×“×”", activity: "×©×™×¢×•×¨ ×’×œ×™×©×” / ×–××Ÿ ×—×•×£" },
              { hour: "15:30 - 17:00", place: "××œ×•×Ÿ", activity: "×”×ª××¨×’× ×•×ª ×œ×©×‘×ª" },
              { hour: "17:15", place: "××œ×•×Ÿ", activity: "×›× ×™×¡×ª ×©×‘×ª" },
              { hour: "18:30 - 19:30", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×¢×¨×‘ ×©×‘×ª" }
            ]
          },
          { day: "7", title: "×©×‘×ª ×× ×•×—×”", desc: "×™×•× ×× ×•×—×” ×¨×’×•×¢ ×‘×¤×¡×™×§×•×“×”, ×¡×©×Ÿ ×™×•×’×” ×©×‘×ª ×œ×™×™×˜, ×–××Ÿ ×œ×™×”× ×•×ª ××”××•×•×™×¨×” ×•×œ××’×•×¨ ×›×•×—×•×ª.", highlight: "×× ×•×—×” ×•×—×•×¤×©", 
            schedule: [
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30", place: "××œ×•×Ÿ", activity: "×™×•×’×” ×©×‘×ª ×œ×™×™×˜" },
              { hour: "18:30", place: "×¤×¡×™×§×•×“×”", activity: "××•×¦××™ ×©×‘×ª" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "8", title: "×˜×¨×™× ×§×•××œ×™", desc: "×”×—×•×•×™×” ×”××¨×›×–×™×ª ×©×œ× ×• ×”×™×•× ×ª×”×™×” ×©×™×™×˜ ×‘×¢×§×‘×•×ª ×œ×•×•×™×™×ª× ×™× ×•×“×•×œ×¤×™× ×™×, ×•×¦×œ×™×œ×ª ×©× ×•×¨×§×œ×™× ×›×™×¤×™×ª ×‘×™×—×“.", highlight: "×©×™×™×˜ ×œ×•×•×™×™×ª× ×™× ×•×©× ×•×¨×§×œ×™×", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 12:30", place: "×˜×¨×™× ×§×•××œ×™", activity: "×©×™×™×˜ ×•×¦×œ×™×œ×” / ×§× ×™×•×ª" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "9", title: "×–××Ÿ ×™× ××—×¨×•×Ÿ", desc: "× ×¦×œ×• ×›×œ ×¨×’×¢ ×©×œ ×©××©, ×’×œ×™× ×•×—×•×œ ×¢×œ ×”×—×•×£ ×œ×¤× ×™ ×”×¤×¨×™×“×”.", highlight: "×™× ×•×©××©", 
            schedule: [
              { hour: "07:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:30", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 17:00", place: "×¤×¡×™×§×•×“×”", activity: "×–××Ÿ ×—×•×£ ×—×•×¤×©×™ / ×§× ×™×•×ª ××—×¨×•× ×•×ª" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          }
        ]
      },
      winter: {
        days: [
          { day: "1", title: "××’×™×¢×™× ×œ×¡×¨×™ ×œ× ×§×”", desc: "×”×”×™×™×œ×™×™×˜ ×©×œ ×”×™×•× - ××¡××–' ××¤× ×§ ×‘××™×•×—×“ ×‘××œ×•×Ÿ ×‘×§×•×œ×•××‘×•/× ×’×•××‘×• ×œ×”×ª×—×œ×ª ×”××¡×¢ ×‘××•×•×™×¨×” ×¨×’×•×¢×”.", highlight: "××¡××–' ××¤× ×§ ×‘××œ×•×Ÿ",
            schedule: [
              { hour: "-", place: "×™×©×¨××œ", activity: "×˜×™×¡×”" },
              { hour: "-", place: "×§×•×œ×•××‘×•", activity: "× ×¡×™×¢×” ×‘××•×˜×•×‘×•×¡ ×œ×§×•×œ×•××‘×•/× ×’×•××‘×•" },
              { hour: "-", place: "××œ×•×Ÿ", activity: "×§×‘×œ×ª ×—×“×¨×™× ×•×”×ª××¨×’× ×•×ª" },
              { hour: "-", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" },
              { hour: "-", place: "××œ×•×Ÿ", activity: "××¡××–' ××¤× ×§" }
            ]
          },
          { day: "2", title: "××§×¡×˜×¨×™× ×‘×§×™×˜×•×œ×’×œ×”", desc: "×”×©×›××” ××•×§×“××ª ×œ×˜×™×•×œ ×–×¨×™×—×”, ×™×•×’×” ×‘××œ×•×Ÿ ×•× ×¡×™×¢×” ×œ×§×™×˜×•×œ×’×œ×” ×œ×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’ ××¨×’×©×™× ×‘×™×¢×¨ ×”×’×©×, ×œ×¤× ×™ ×©×××©×™×›×™× ×œ× ×•×•××¨×” ××œ×™×”.", highlight: "×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’ ×‘×™×¢×¨ ×”×’×©×",
            schedule: [
              { hour: "05:00", place: "××œ×•×Ÿ", activity: "×˜×™×•×œ ×–×¨×™×—×”" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×” ×‘××œ×•×Ÿ" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "× ×¡×™×¢×” ×œ×§×™×˜×•×œ×’×œ×”" },
              { hour: "14:00 - 15:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "×¨×¤×˜×™× ×’" },
              { hour: "15:30 - 17:00", place: "×§×™×˜×•×œ×’×œ×”", activity: "×§× ×™×•× ×™× ×’ ×•×”×œ×™×›×” ×‘×™×¢×¨ ×”×’×©×" },
              { hour: "17:30 - 19:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×”", activity: "××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ" }
            ]
          },
          { day: "3", title: "×ª×”, ×¨×›×‘×•×ª ×•××œ×”", desc: "×™×•×’×” ×‘×‘×•×§×¨, ×¡×™×•×¨ ××¨×ª×§ ×‘××˜×¢×™ ×ª×” ×•×¢×œ×™×™×” ×¢×œ ×”×¨×›×‘×ª ×”× ×•×¤×™×ª ×”×™×¤×” ×‘×¢×•×œ× ×‘×“×¨×š ××œ ×”×¢×™×™×¨×” ××œ×”.", highlight: "×”×¨×›×‘×ª ×”× ×•×¤×™×ª ×œ××œ×” ×•××˜×¢×™ ×”×ª×”",
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 14:30", place: "××˜×¢×™ ×ª×”", activity: "×¡×™×•×¨ ×‘××˜×¢×™ ×ª×”" },
              { hour: "15:00 - 17:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×ª ×¨×›×‘×ª ×œ××œ×”" },
              { hour: "17:30 - 18:00", place: "××œ×”", activity: "× ×¡×™×¢×” ×œ××œ×•×Ÿ" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "4", title: "××¤×œ×™× ×•××“×¨× ×œ×™×Ÿ ×‘××œ×”", desc: "×˜×™×•×œ ×–×¨×™×—×” ×•×™×•×’×”, ×‘×™×§×•×¨ ×‘××¤×œ×™ ×“×™××œ×•×× ×”××¨×©×™××™×, ×’×œ×™×©×ª ××•××’×” (Flying Ravana) ×•×§× ×™×•×ª ×‘××œ×”, ×•×œ××—×¨ ××›×Ÿ × ×¡×™×¢×” ×•××¨×•×—×ª ×¢×¨×‘.", highlight: "××¤×œ×™ ×“×™××œ×•×× ×•××•××’×” ×‘××œ×”",
            schedule: [
              { hour: "05:00", place: "××œ×•×Ÿ", activity: "×˜×™×•×œ ×–×¨×™×—×”" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "××œ×”", activity: "××¤×œ×™ ×“×™××œ×•××" },
              { hour: "14:00 - 17:00", place: "××œ×”", activity: "××•××’×” ×•×§× ×™×•×ª" },
              { hour: "17:30 - 20:30", place: "××œ×•×Ÿ", activity: "× ×¡×™×¢×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "5", title: "×¡×¤××¨×™ ×¤×™×œ×™× ×•×™×•×’×” ×‘×©×§×™×¢×”", desc: "×™×•×’×” ×‘×‘×•×§×¨, ××¨×•×—×ª ×‘×•×§×¨, × ×¡×™×¢×” ×“×¨×•××” ×œ×¡×¤××¨×™ ×¤×™×œ×™× ×‘×©××•×¨×ª ××•×“×•×•××œ××•×•×”, ×•×™×•×’×” ×‘×©×§×™×¢×” ××•×œ ×”×™× ×œ×§×™× ×•×— ×”×™×•× ×¢× ×¢×™×¡×•×™ ××¤× ×§.", highlight: "×¡×¤××¨×™ ×¤×™×œ×™× ×‘××•×“×•×•××œ××•×•×” ×•×™×•×’×” ×‘×©×§×™×¢×”",
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "07:15 - 08:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "08:30 - 11:00", place: "×“×¨×•×", activity: "× ×¡×™×¢×” ×“×¨×•××”" },
              { hour: "11:30 - 14:30", place: "××•×“×•×•××œ××•×•×”", activity: "×¡×¤××¨×™ ×¤×™×œ×™× ×‘××•×“×•×•××œ××•×•×”" },
              { hour: "18:30 - 19:30", place: "×—×•×£", activity: "×™×•×’×” ×‘×©×§×™×¢×”" },
              { hour: "20:30", place: "××œ×•×Ÿ", activity: "×¢×™×¡×•×™ ××¤× ×§ (××¡××–')" }
            ]
          },
          { day: "6", title: "×©× ×•×¨×§×œ×™× ×’ ×•×”×ª××¨×’× ×•×ª ×œ×©×‘×ª", desc: "×™×•×’×” ×‘×‘×•×§×¨, ××¨×•×—×ª ×‘×•×§×¨, ×©× ×•×¨×§×œ×™× ×’ ××“×”×™× ×¢× ×¦×‘×™ ×™×, ×–××Ÿ ×—×•×£ ×•×§× ×™×•×ª, ×•×œ××—×¨ ××›×Ÿ ×”×ª××¨×’× ×•×ª ×œ×§×¨××ª ×›× ×™×¡×ª ×©×‘×ª.", highlight: "×©× ×•×¨×§×œ×™× ×’ ×¢× ×¦×‘×™ ×™× ×•×–××Ÿ ×—×•×£",
            schedule: [
              { hour: "07:00", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "10:30 - 12:00", place: "×—×•×£", activity: "×©× ×•×¨×§×œ×™× ×’ ×¢× ×¦×‘×™ ×™×" },
              { hour: "13:30 - 15:30", place: "×—×•×£", activity: "×–××Ÿ ×—×•×£ ×•×§× ×™×•×ª" },
              { hour: "17:15", place: "××œ×•×Ÿ", activity: "×”×ª××¨×’× ×•×ª ×œ×©×‘×ª" }
            ]
          },
          { day: "7", title: "×©×‘×ª ×× ×•×—×”", desc: "×¡×©×Ÿ ×™×•×’×” ×©×‘×ª ×œ×™×™×˜, ××¨×•×—×ª ×‘×•×§×¨ ×•×–××Ÿ ×× ×•×—×” ×¨×’×•×¢ ×‘×©×‘×ª. ×‘×¢×¨×‘ - ×”×‘×“×œ×” ×‘××•×¦××™ ×©×‘×ª ×•××¨×•×—×ª ×¢×¨×‘.", highlight: "×©×‘×ª ×× ×•×—×” ×•×™×•×’×” ×œ×™×™×˜",
            schedule: [
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30", place: "××œ×•×Ÿ", activity: "×™×•×’×” ×©×‘×ª ×œ×™×™×˜" },
              { hour: "18:30", place: "××œ×•×Ÿ", activity: "××•×¦××™ ×©×‘×ª (×”×‘×“×œ×”)" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "8", title: "×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×¡××¤ ×©×§×™×¢×”", desc: "×©×™×™×˜ ×‘×‘×•×§×¨ ×œ×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•××¨×•×—×ª ×‘×•×§×¨. ×‘×”××©×š ×”×™×•× ×§× ×™×•×ª, × ×¡×™×¢×” ×•×”×ª××¨×’× ×•×ª ×‘××œ×•×Ÿ ×‘××”×”× ×’××”, ×¡××¤ ×©×§×™×¢×” ×•×œ××—×¨ ××›×Ÿ ××¨×•×—×ª ×¢×¨×‘.", highlight: "×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×¡××¤ ×©×§×™×¢×”",
            schedule: [
              { hour: "05:00", place: "××•×§×™×™× ×•×¡", activity: "×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™×" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 12:30", place: "×—×•×£", activity: "×–××Ÿ ×—×•×¤×©×™ ×•×§× ×™×•×ª" },
              { hour: "12:30 - 16:30", place: "××”×”× ×’××”", activity: "× ×¡×™×¢×” ×•×”×ª××¨×’× ×•×ª ×‘××œ×•×Ÿ ×‘××”×”× ×’××”" },
              { hour: "16:30 - 18:30", place: "×—×•×£", activity: "×¡××¤ ×©×§×™×¢×”" },
              { hour: "19:00 - 20:00", place: "××œ×•×Ÿ ×‘××”×”× ×’××”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "9", title: "×™×•× ××—×¨×•×Ÿ ×•×˜×™×¡×”", desc: "×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ. ×‘×”××©×š ×”×™×•× ×× ×•×—×” ×•×§× ×™×•×ª ××—×¨×•× ×•×ª, ×•×œ××—×¨ ××›×Ÿ × ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×” ×œ×§×¨××ª ×”×˜×™×¡×” ×—×–×¨×” ×”×‘×™×ª×”.", highlight: "×™×•×’×” ×•× ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×”",
            schedule: [
              { hour: "07:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "-", activity: "-" },
              { hour: "13:30 - 16:30", place: "-", activity: "×× ×•×—×” ×•×§× ×™×•×ª" },
              { hour: "16:30", place: "-", activity: "× ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×”" }
            ]
          }
        ]
      }
    },
    essentials: {
      title: '××™×“×¢ ×—×©×•×‘ - ×˜×•×‘ ×œ×“×¢×ª', subtitle: '×›×œ ××” ×©×¦×¨×™×š ×œ×“×¢×ª ×œ×¤× ×™ ×©××•×¨×–×™× ××–×•×•×“×”.', categories: [
        { title: "×•×™×–×” (ETA)", items: ["×™×©×¨××œ×™× ×—×™×™×‘×™× ×•×™×–×” ××œ×§×˜×¨×•× ×™×ª (× ×™×ª×Ÿ ×œ×”× ×¤×™×§ ×‘×—×™× × ×“×¨×š ×”××ª×¨ ×”×¨×©××™ eta.gov.lk, ××• ×‘×ª×©×œ×•× ×“×¨×š ×¡×•×›× ×™× ×œ×”× ×¤×§×” × ×•×—×” ×™×•×ª×¨)", "×“×¨×›×•×Ÿ ×‘×ª×•×§×£ ×œ-6 ×—×•×“×©×™× ×œ×¤×—×•×ª"] },
        { title: "×›×¡×£ ×•××˜×‘×¢", items: ["××˜×‘×¢: ×¨×•×¤×™ ×¡×¨×™-×œ× ×§×™ (LKR)", "×œ×”×‘×™× ×“×•×œ×¨×™× ×œ×—×™×¨×•×, ×”×¨×‘×” ×¤×¢××™× ×–×” × ×•×—.", "××•××œ×¥ ×œ×”×¦×˜×™×™×“ ×‘××–×•××Ÿ ××›×™×•×•×Ÿ ×©×œ× ×›×œ ××§×•× ××§×‘×œ ××©×¨××™. × ×™×ª×Ÿ ×œ×”×•×¦×™× ×›×¡×£ ×‘×§×œ×•×ª ×‘×›×¡×¤×•××˜×™× ××§×•××™×™×."] },
        { title: "×—×©××œ", items: ["××ª×— 230V. ×‘×¨×•×‘ ×”××§×•××•×ª ×©×§×¢×™× ×™×©×¨××œ×™× (2 ×¤×™× ×™×) ×¢×•×‘×“×™× ×œ×œ× ×‘×¢×™×”.", "×¢×‘×•×¨ ×ª×§×¢×™× ×××¨×™×§××™× × ×“×¨×© ××ª××."] },
        { title: "×‘×™×’×•×“", items: ["×‘×’×“×™× × ×•×—×™× ×œ×˜×™×•×œ×™×", "×‘×’×“×™× × ×•×—×™× ×œ×”×œ×™×›×” ×‘×¢×™×¨", "×‘×’×“×™ ×™×", "×¡× ×“×œ×™× ×•× ×¢×œ×™ ×”×œ×™×›×” ×œ×˜×™×•×œ×™×"] },
        { title: "××•×›×œ ×•×›×©×¨×•×ª", items: ["×”××™×¨×•×— ×©×œ× ×• ×”×•× ×¢×œ ×‘×¡×™×¡ 3 ××¨×•×—×•×ª ×‘×™×•× - ×× ×—× ×• ××¡×¤×§×™× ××¨×•×—×•×ª ×›×©×¨×•×ª ×œ××•×¨×š ×›×œ ×”×˜×™×•×œ.", "×‘×ª×™ ×—×‘\"×“: ×§×•×œ×•××‘×•, ××œ×”"] }
      ]
    },
    discovery: {
      title: '××’×œ×™× ××ª ×¡×¨×™ ×œ× ×§×”', subtitle: '×§×¦×ª ×¨×§×¢ ×•×”×™×¡×˜×•×¨×™×” ×©×™×¢×©×• ×œ×›× ×—×©×§ ×œ××¨×•×–.', articles: [
        { title: "××œ×” (Ella): ×‘×™×Ÿ ×”×”×¨×™×", text: "×¢×™×™×¨×” ×”×¨×¨×™×ª ×§×¡×•××” ××•×§×¤×ª ××˜×¢×™ ×ª×”, ××¤×œ×™× ×•× ×•×¤×™× ×™×¨×•×§×™× ××™× ×¡×•×¤×™×™×." },
        { title: "×ª×” ×¦×™×™×œ×•× ×™: ×”×–×”×‘ ×”×™×¨×•×§", text: "×¡×¨×™ ×œ× ×§×” ×”×™× ××¢×¦××ª ×ª×” ×¢×•×œ××™×ª. × ×œ××“ ××™×š ×”×§×œ×™××˜ ×”×§×¨×™×¨ ××™×™×¦×¨ ××ª ×”×˜×¢× ×”×›×œ ×›×š ××™×•×—×“." },
        { title: "×¤×¡×™×§×•×“×”: ×©××© ×•×©×œ×•×•×”", text: "××—×“ ××”×—×•×¤×™× ×”×™×¤×™× ×‘×¢×•×œ× ×¢× ××•×•×™×¨×” ×¨×’×•×¢×”, ×œ×’×•× ×•×ª ×•× ×•×¤×™× ××¨×”×™×‘×™×." },
        { title: "×¡×¤××¨×™ ×•×—×™×•×ª ×‘×¨", text: "×¤×™×œ×™×, ×ª× ×™× ×™×, ×¦×™×¤×•×¨×™× × ×“×™×¨×•×ª ×•××¤×™×œ×• × ××¨×™×. ×¡×¨×™ ×œ× ×§×” ×”×™× ×’×Ÿ ×¢×“×Ÿ ×œ×—×•×‘×‘×™ ×˜×‘×¢." }
      ]
    },
    about: { 
      title: '×”×¡×™×¤×•×¨ ×©×œ× ×•', 
      p1: '××– × ×¢×™× ×œ×”×›×™×¨! ×× ×—× ×• ××™×œ, ×¢×œ×™×–×” ×•× ×¢××™ :) ×‘×§×™×¥ 2025, × ×¤×’×©× ×• ×‘×¡×¨×™ ×œ× ×§×” ×œ×§×¨××ª ×¡×•×£ ×™×¨×— ×”×“×‘×© ×”××¨×•×š ×©×œ ××™×œ ×•×¢×œ×™×–×” ×‘××–×¨×—. ××œ×” ×”×™×• 10 ×™××™× ×§×¡×•××™× ×©×œ ×˜×‘×¢, ×’×œ×™×©×”, ×—×•×¤×™×, × ×•×¤×™× ×•××œ×•× ×•×ª ×¤×©×•×˜ ××¦×•×™× ×™× (×—×•×¥ ×××—×“, ××‘×œ ×”×™×™× ×• ×¦×¨×™×›×™× ××©×”×• ×œ×§×˜×¨ ×¢×œ×™×• ×§×¦×ª).', 
      p2: '×›×©×—×–×¨× ×• ×”×‘×™×ª×”, ×¢×œ×” ×œ×™ (×œ× ×¢××™) ×¨×¢×™×•×Ÿ. ×œ××” ×œ× ×œ×”×‘×™× ××ª ×”×—×•×•×™×” ×”××˜×•×¨×¤×ª ×”×–×• ×©×œ "×˜×™×•×œ ×œ××–×¨×—", ×©×œ×’××¨×™ ××©× ×” ×—×™×™×, ×’× ×œ××™××”×•×ª ×•×¡×‘×ª×•×ª? ×”×¨×™ ×›×œ ×›×š ×”×¨×‘×” ×¦×¢×™×¨×™× ×™×©×¨××œ×™× × ×•×¡×¢×™× ×œ×—×œ×§ ×”×–×” ×©×œ ×”×¢×•×œ× ××—×¨×™ ×”×¦×‘×, × ×•×©××™× ××ª ×”×ª×¨×‘×•×ª, ×¢×•×©×™× ×“×‘×¨×™× ×©×‘×—×™×™× ×œ× ×”×™×• ×¢×•×©×™× ×‘×‘×™×ª ×•×—×•×–×¨×™× ×¢× ×¤×¨×¡×¤×§×˜×™×‘×” ×—×“×©×” ×œ×’××¨×™. ×× ×—× ×• ×‘×××ª ××××™× ×™× ×©×œ×›×œ ××—×ª ××’×™×¢×” ×”×”×–×“×× ×•×ª ×”×–×•. (×‘×¢×¦×, ×× ×—× ×• ×—×•×©×‘×™× ×©×›×•×œ× ×¦×¨×™×›×™× ××ª ×–×”, ××‘×œ × ×“×‘×¨ ×¢×œ ×–×” ×›×‘×¨ ×›×©× ×™×¤×’×©...).\n\n×× ×—× ×• ×œ× ×× ×©×™ ××›×™×¨×•×ª, ×× ×—× ×• ×œ× ×¡×•×›× ×•×ª × ×¡×™×¢×•×ª ×•×× ×—× ×• ×œ× ×¢×•×‘×“×™× ×¢× ×©×•× ×—×‘×¨×” ×¢× ×§×™×ª. ×× ×—× ×• ×¤×©×•×˜ ×©×œ×•×©×” ×× ×©×™× ×©×”×ª××”×‘×• ×‘×›×œ ××” ×©×™×© ×œ×¡×¨×™ ×œ× ×§×” ×œ×”×¦×™×¢, ×•×¨×•×¦×™× ×œ×ª×ª ×œ×›×Ÿ ××ª ×”×”×–×“×× ×•×ª ×œ×—×•×•×ª ××ª ×–×” ×™×—×“ ××™×ª× ×•.', 
      p3: '×›×œ ××—×“ ×××™×ª× ×• ××‘×™× ××©×”×• ×§×¦×ª ××—×¨ ×œ×”×¨×¤×ª×§×” ×©×œ× ×•. ×× ×™, × ×¢××™, ××”×™×” ××™×ª×›×Ÿ ×œ×›×œ ××•×¨×š ×”×“×¨×š, ××“××’ ×©×›×•×œ× ×• × ×”× ×•×ª ××›×œ ×¨×’×¢ ×•××”×™×” ×–××™× ×” ×œ×›×œ ×©××œ×”. ××™×œ ×•×¢×œ×™×–×”, ×©×”× ×’× ××“×¨×™×›×™ ×™×•×’×” ××•×¡××›×™× ×•×’× ×‘×©×œ× ×™× × ×”×“×¨×™×, ×™×©×’×™×—×• ×¢×œ ×”××˜×‘×— ×™×—×“ ×¢× ×”×¦×•×•×ª ×”××§×•××™ ×›×“×™ ×œ×•×•×“× ×©×™×© ×œ× ×• ×›×©×¨×•×ª ××œ××”. ×”× ×™×“××’×• ×©×›×•×œ× ×• ××•×›×œ×•×ª ×˜×•×‘ ×•××¨×’×™×©×•×ª ×‘××™×˜×‘× ×•. ×—×•×¥ ××–×”, ×™×œ×•×•×” ××•×ª× ×• ××“×¨×™×š ×•× ×”×’ ××§×•××™, ×’× ×›×“×™ ×©× ×ª× ×™×™×“ ×‘× ×•×—×•×ª ×•×’× ×›×“×™ ×©× ×›×™×¨ ×§×¦×ª ×™×•×ª×¨ ××§×¨×•×‘ ××ª ×”×ª×¨×‘×•×ª ×”××§×•××™×ª ×”××¨×ª×§×ª.', 
      team: { eyal: '×¢×œ×™×–×” ×•××™×œ', naomi: '× ×¢××™', guide: '××“×¨×™×š ××§×•××™' },
      contact: '×¦×¨×• ×§×©×¨:\n××™×œ: 054-...\n× ×¢××™: 054-...'
    },
    register: { 
      title: '×©×¨×™×™× ×• ××ª ×”××§×•× ×©×œ×›×Ÿ', subtitle: '××œ××• ×¤×¨×˜×™× ×•× ×—×–×•×¨ ××œ×™×›×Ÿ.', contact_wa: '×©××œ×•×ª? ×“×‘×¨×• ×¢× ××™×œ', contact_email: '××• ×©×œ×—×• ××™×™×œ', details: ["××•×’×‘×œ ×œ-16 ××©×ª×ª×¤×•×ª", "××§×“××” ×©×œ 1,000 ×©×´×— ×œ×”×‘×˜×—×ª ××§×•×", "××“×™× ×™×•×ª ×‘×™×˜×•×œ×™× ×”×•×’× ×ª"], 
      form: { name: '×©× ××œ×', phone: '×˜×œ×¤×•×Ÿ', email: '××™××™×™×œ', guests: '××¡×¤×¨ ××©×ª×ª×¤×™×', notes: '×”×¢×¨×•×ª', submit: '×©×œ×™×—×ª ×‘×§×©×ª ×”×¨×©××”', success_title: '××™×–×” ×›×™×£, × ×¨×©××ª×Ÿ ×‘×”×¦×œ×—×”! ğŸ‰ğŸ’ƒ', success_desc: '×× ×—× ×• ×¡×•×¤×¨ ××ª×¨×’×©×™× ×œ×§×¨××ª ×”××¡×¢ ×”××©×•×ª×£ ×©×œ× ×•! × ×™×¦×•×¨ ×§×©×¨ ×‘×”×§×“× ×œ×”×©×œ××ª ×”×¤×¨×˜×™×.', success_btn: '×©×œ×— ×‘×§×©×” × ×•×¡×¤×ª', error: '××™×¨×¢×” ×©×’×™××” ×‘×©×œ×™×—×ª ×”×˜×•×¤×¡. ×× × × ×¡×” ×©×•×‘ ××• ×¦×•×¨ ×§×©×¨ ×‘×•×•××˜×¡××¤.', submitting: '×©×•×œ×—...' }
    }
  },
  en: {
    nav: { home: 'Home', itinerary: 'Itinerary', essentials: 'Good to Know', discovery: 'Gallery', about: 'Our Story', register: 'Join Us', toggle: '×¢×‘×•×¨ ×œ×¢×‘×¨×™×ª' },
    hero: { 
      title: 'Savtot in Sri Lanka\n2027', 
      subtitle: 'From stunning waterfalls and green tea plantations, to natural infinity pools and the most beautiful beaches.\nA special and unforgettable experience we organized especially for you, a woman looking to experience a bit of a "post-army trip", but at a relaxed pace and with all the indulgences of an organized tour.',
      tagline: 'THE TRIP OF A LIFETIME',
      cta_plan: 'See the Plan',
      cta_discover: 'Experience the magic',
      kosher: 'The trip is fully Kosher.',
      yoga: 'Includes daily Yoga sessions.',
      winter_trip: 'Winter Journey: February 15-24',
      dates_disclaimer: '* Exact dates will be published later.'
    },
    features: { 
      title: 'More than just a trip', 
      f3_title: 'Fully kosher', 
      f3_desc: 'We insist on fresh, local ingredients. A local team of chefs will cook for us, with one of us (from the Israeli team) closely supervising to ensure everything is strictly kosher.',
      f2_title: 'Authentic culture', 
      f2_desc: 'From safaris to tea plantations to sunrise hikes, you will get the chance to see the real Sri Lanka',
      f1_title: 'Wellness & Yoga', 
      f1_desc: 'Gentle yoga sessions at sunrise or sunset, for all levels to stretch and calm the body and mind'
    },
    gallery: {
      title: 'Experience the magic',
      desc: 'From stunning waterfalls and green tea plantations, to natural infinity pools and the most beautiful beaches there are - this is our opportunity to experience the real, authentic Sri Lanka.',
      cta: 'More info / Save your spot'
    },
    itinerary: {
      title: 'Your fully planned adventure', subtitle: 'A journey of discovery and relaxation',
      headers: { hour: 'Time', place: 'Location', activity: 'Activity' },
      summer: {
        days: [
          { day: "1", title: "Arriving in Sri Lanka", desc: "The highlight of the day - an especially pampering massage in Sigiriya, to get into the vibe.", highlight: "Pampering Massage in Sigiriya", 
            schedule: [
              { hour: "-", place: "Israel", activity: "Flight" },
              { hour: "-", place: "Colombo", activity: "Bus ride to Sigiriya" },
              { hour: "-", place: "Sigiriya", activity: "Room assignment & Settling in" },
              { hour: "-", place: "Sigiriya", activity: "Dinner" },
              { hour: "-", place: "Sigiriya", activity: "Pampering massage" }
            ]
          },
          { day: "2", title: "Lion Rock & Safari", desc: "Early wake-up for an exciting climb, an authentic village tour, and an afternoon safari.", highlight: "Lion's Rock & Elephant Safari", 
            schedule: [
              { hour: "05:00", place: "Sigiriya Rock", activity: "Climb & Sunrise" },
              { hour: "08:00 - 09:00", place: "Hotel in Sigiriya", activity: "Breakfast" },
              { hour: "10:00 - 15:00", place: "Local Village", activity: "Authentic Village Tour" },
              { hour: "15:00 - 16:00", place: "Hotel", activity: "Rest" },
              { hour: "16:00 - 18:00", place: "Safari", activity: "Safari Tour" },
              { hour: "18:30 - 19:30", place: "Hotel in Sigiriya", activity: "Dinner" },
              { hour: "20:30", place: "Hotel", activity: "Free Time / Recovery" }
            ]
          },
          { day: "3", title: "Kitulgala Extreme", desc: "An adrenaline-filled day with rafting and canyoning, moving on to the cool Nuwara Eliya.", highlight: "Rafting & Canyoning", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Drive" },
              { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
              { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning" },
              { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Rainforest Walk" },
              { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Drive" },
              { hour: "19:30 - 20:30", place: "Hotel in Nuwara Eliya", activity: "Dinner" }
            ]
          },
          { day: "4", title: "Tea, Trains & Ella", desc: "Sri Lanka's green gold and the most beautiful train ride in the world on the way to the town of Ella.", highlight: "Train Ride to Ella", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 14:30", place: "Tea Plantations", activity: "Tea Plantations Tour" },
              { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train ride to Ella" },
              { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to Hotel" },
              { hour: "19:30 - 20:30", place: "Hotel in Ella", activity: "Dinner" }
            ]
          },
          { day: "5", title: "Waterfalls & Adrenaline", desc: "Breathtaking views at Diyaluma Falls and ziplining over the treetops.", highlight: "Diyaluma Falls & Zipline", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Ella", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
              { hour: "15:30 - 17:00", place: "Ella", activity: "Ziplining" },
              { hour: "15:30 - 17:00", place: "Ella", activity: "Walking around & Shopping" },
              { hour: "17:30 - 20:30", place: "Passikudah", activity: "Drive to Passikudah" },
              { hour: "19:30 - 20:30", place: "Hotel in Passikudah", activity: "Dinner" }
            ]
          },
          { day: "6", title: "Beach Life", desc: "Arriving at the stunning Passikudah and settling in.", highlight: "Shabbat in Passikudah", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 12:00", place: "Pottuvil", activity: "Morning Lagoon SUP" },
              { hour: "13:30 - 15:30", place: "Passikudah", activity: "Surf Lesson / Beach Time" },
              { hour: "15:30 - 17:00", place: "Hotel", activity: "Shabbat Preparations" },
              { hour: "17:15", place: "Hotel", activity: "Shabbat Begins" },
              { hour: "18:30 - 19:30", place: "Hotel in Passikudah", activity: "Shabbat Dinner" }
            ]
          },
          { day: "7", title: "Shabbat Rest", desc: "A calm day of rest in Passikudah, Shabbat lite yoga session, time to enjoy the atmosphere and recharge your batteries.", highlight: "Rest & Freedom", 
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30", place: "Hotel", activity: "Shabbat Lite Yoga" },
              { hour: "18:30", place: "Passikudah", activity: "End of Shabbat" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "8", title: "Trincomalee", desc: "Our main experience today will be sailing in search of whales and dolphins, followed by fun snorkeling together.", highlight: "Whale Watching & Snorkeling", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 12:30", place: "Trincomalee", activity: "Sailing & Snorkeling / Shopping" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "9", title: "Final Beach Time", desc: "Take advantage of every moment of sun, waves, and sand on the beach before parting.", highlight: "Sea & Sun", 
            schedule: [
              { hour: "07:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:30", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 17:00", place: "Passikudah", activity: "Free Beach Time / Final Shopping" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          }
        ]
      },
      winter: {
        days: [
          { day: "1", title: "Arriving in Sri Lanka", desc: "Highlight of the day - an especially pampering massage at the hotel in Colombo/Negombo to start our journey in a relaxed atmosphere.", highlight: "Pampering massage at the hotel",
            schedule: [
              { hour: "-", place: "Israel", activity: "Flight" },
              { hour: "-", place: "Colombo", activity: "Bus to Colombo/Negombo" },
              { hour: "-", place: "Hotel", activity: "Check-in to rooms" },
              { hour: "-", place: "Hotel", activity: "Dinner" },
              { hour: "-", place: "Hotel", activity: "Pampering massage" }
            ]
          },
          { day: "2", title: "Kitulgala Extreme", desc: "Early wake-up for a sunrise hike, yoga at the hotel, and driving to Kitulgala for exciting rafting and canyoning in the rainforest, before moving to Nuwara Eliya.", highlight: "Rafting and canyoning in the rainforest",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Hotel yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Drive to Kitulgala" },
              { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
              { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning and Rain forest walk" },
              { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Drive to Nuwara Eliya" },
              { hour: "19:30 - 20:30", place: "Hotel in Nuwara Eliya", activity: "Dinner at hotel" }
            ]
          },
          { day: "3", title: "Tea, Trains & Ella", desc: "Morning yoga, an interesting tour of Ceylon tea plantations, and boarding the most scenic train in the world to Ella.", highlight: "Scenic train to Ella and tea plantation",
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 14:30", place: "Tea Plantations", activity: "Tea plantation tour" },
              { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train to Ella" },
              { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to hotel" },
              { hour: "19:30 - 20:30", place: "Hotel in Ella", activity: "Dinner" }
            ]
          },
          { day: "4", title: "Waterfalls & Ziplining", desc: "Sunrise hike and yoga, visiting the spectacular Diyaluma Falls, flying over the trees on the Flying Ravana zipline, shopping in Ella, followed by a drive and dinner.", highlight: "Diyaluma Falls & Flying Ravana zipline",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
              { hour: "14:00 - 17:00", place: "Ella", activity: "Omega zipline and Shops" },
              { hour: "17:30 - 20:30", place: "Hotel", activity: "Drive" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "5", title: "Elephant Safari & Sunset Yoga", desc: "Morning yoga, breakfast, driving south for an incredible elephant safari in Udawalawe, and enjoying a relaxing sunset yoga session, finished with a massage.", highlight: "Udawalawe Elephant Safari and sunset yoga",
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "07:15 - 08:00", place: "Hotel", activity: "Breakfast" },
              { hour: "08:30 - 11:00", place: "South", activity: "Drive south" },
              { hour: "11:30 - 14:30", place: "Udawalawe", activity: "Udawalawe Elephant safari" },
              { hour: "18:30 - 19:30", place: "Beach", activity: "Sunset Yoga" },
              { hour: "20:30", place: "Hotel", activity: "Massage" }
            ]
          },
          { day: "6", title: "Beach & Shabbat Preparations", desc: "Morning yoga, breakfast, incredible snorkeling with sea turtles, relaxing beach and shopping time, and getting ready for Shabbat.", highlight: "Snorkeling with sea turtles and beach time",
            schedule: [
              { hour: "07:00", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "10:30 - 12:00", place: "Beach", activity: "Snorkeling with turtles" },
              { hour: "13:30 - 15:30", place: "Beach", activity: "Beach & shopping time" },
              { hour: "17:15", place: "Hotel", activity: "Shabbat preparations" }
            ]
          },
          { day: "7", title: "Shabbat Rest", desc: "Shabbat lite yoga session, breakfast, and a peaceful Shabbat rest. In the evening, Havdalah (Motzash) and dinner.", highlight: "Peaceful Shabbat and lite yoga",
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30", place: "Hotel", activity: "Shabbat Lite Yoga" },
              { hour: "18:30", place: "Hotel", activity: "Motzash (Havdalah)" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "8", title: "Whale Watching & Sunset SUP", desc: "Early whale watching and breakfast. Enjoy free time and shopping, transfer and check-in at Ahangama hotel, sunset SUP, and dinner.", highlight: "Whale watching and Sunset SUP",
            schedule: [
              { hour: "05:00", place: "Ocean", activity: "Whale watching" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 12:30", place: "Beach", activity: "Free time and shops" },
              { hour: "12:30 - 16:30", place: "Ahangama", activity: "Transfer & check-in at Ahangama hotel" },
              { hour: "16:30 - 18:30", place: "Beach", activity: "Sunset SUP" },
              { hour: "19:00 - 20:00", place: "Hotel in Ahangama", activity: "Dinner" }
            ]
          },
          { day: "9", title: "Final Day & Flight", desc: "Yoga and breakfast at the hotel, followed by free time for relaxing or shopping, and then the drive to the airport for the flight back.", highlight: "Yoga and flight home",
            schedule: [
              { hour: "07:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:30", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "-", activity: "-" },
              { hour: "13:30 - 16:30", place: "-", activity: "Relax, shopping" },
              { hour: "16:30", place: "-", activity: "Drive to airport" }
            ]
          }
        ]
      }
    },
    essentials: { 
      title: 'Good to know', subtitle: 'Everything you need to know before packing your bags.', 
      categories: [
        { title: "Clothing", items: ["Comfortable clothes for hiking", "Comfortable clothes for city walking", "Bathing suits", "Sandals and hiking shoes"] },
        { title: "Visa (ETA)", items: ["Israelis need an electronic visa/ETA (can be issued for free on the official site eta.gov.lk, or for a fee through agents for easier handling)", "Passport valid for 6 months"] },
        { title: "Money & Currency", items: ["Currency: Sri Lankan Rupee (LKR)", "Bring USD for emergencies, often it is very convenient.", "It is recommended to have cash as not all places accept credit cards. Cash can be easily withdrawn from local ATMs."] },
        { title: "Electricity", items: ["Voltage: 230V. Israeli plugs (2 pins) work in most places without an issue.", "American plugs require an adapter."] },
        { title: "Kosher Food", items: ["Our hosting is on a 3-meals-a-day basis - we provide kosher meals throughout the trip.", "Chabad Houses: Colombo, Ella"] }
      ]
    },
    discovery: { title: 'Discovery', subtitle: 'Get excited about the destination.', articles: [
        { title: "Ella: Mountain Bliss", text: "A magical mountain town surrounded by tea plantations, waterfalls, and endless green views." },
        { title: "Ceylon Tea", text: "Sri Lanka is a world tea power. We'll learn how the cool climate creates the perfect flavor." },
        { title: "Passikudah", text: "One of the most beautiful beaches in the world with a relaxed atmosphere, lagoons and spectacular views." },
        { title: "Safari & Wildlife", text: "Elephants, crocodiles, rare birds and even leopards. Sri Lanka is a paradise for nature lovers." }
      ]
    },
    about: { 
      title: 'Our Story', 
      p1: 'So nice to meet you! We are Eyal, Aliza and Naomi :) In the summer of 2025, we met in Sri Lanka towards the end of Eyal and Aliza\'s long honeymoon in the East. Those were 10 magical days of nature, surfing, beaches, landscapes and simply excellent hotels (except for one, but we needed something to complain about a little).', 
      p2: 'When we returned home, I (Naomi) had an idea. Why not bring this crazy, life-changing experience of a "trip to the East" to mothers and grandmothers as well? After all, so many young Israelis travel to this part of the world after the army, breathe the culture, do things they would never do at home and return with a completely new perspective. We truly believe that everyone deserves this opportunity. (Actually, we think everyone needs this, but we\'ll talk about that when we meet...).\n\nWe are not salespeople, we are not a travel agency and we don\'t work with any huge company. We are simply three people who fell in love with everything Sri Lanka has to offer, and want to give you the opportunity to experience it together with us.', 
      p3: 'Each of us brings something a little different to our adventure. I, Naomi, will be with you the whole way, making sure we all enjoy every moment and available for any question. Eyal and Aliza, who are both certified yoga instructors and great cooks, will oversee the kitchen along with the local staff to make sure we have full kashrut. They will ensure we all eat well and feel our best. Besides that, a local guide and driver will accompany us, both so we can get around comfortably and so we can get to know the fascinating local culture a little closer.', 
      team: { eyal: 'Aliza & Eyal', naomi: 'Naomi', guide: 'Local Guide' },
      contact: 'Contact us:\nEyal: +972 ...\nNaomi: +972 ...'
    },
    register: { 
      title: 'Secure Your Spot', subtitle: 'Fill out the details below, and we will contact you.', contact_wa: 'Contact Eyal', contact_email: 'Or Email Us', details: ["Limited to 16 participants", "1,000 ILS deposit to secure spot", "Fair refund policy"], 
      form: { name: 'Full Name', phone: 'Phone', email: 'Email', guests: 'Number of Travelers', notes: 'Special Requests', submit: 'Send Request', success_title: 'Yay, you are successfully registered! ğŸ‰ğŸ’ƒ', success_desc: 'We are super excited for our journey together! We will get in touch shortly to finalize the details.', success_btn: 'Send another request', error: 'Error sending form. Please try again or contact us via WhatsApp.', submitting: 'Sending...' }
    }
  }
};

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [siteContent, setSiteContent] = useState(defaultContentData);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/content', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => setSiteContent(data))
      .catch(e => console.error('Failed to load content:', e));
      
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const handleUpdateContent = useCallback((path, newValue) => {
    setSiteContent(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = newValue;
      return newData;
    });
  }, []);

  const t = useMemo(() => {
    const base = defaultContentData[lang] || defaultContentData.he;
    const live = siteContent?.[lang];
    
    if (!live) return base;
    
    return {
      ...base,
      ...live,
      nav: { ...base.nav, ...live.nav },
      hero: { ...base.hero, ...live.hero },
      features: { ...base.features, ...live.features },
      gallery: { ...base.gallery, ...live.gallery },
      itinerary: { 
        ...base.itinerary, 
        ...live.itinerary,
        summer: { ...base.itinerary.summer, ...live.itinerary?.summer },
        winter: { ...base.itinerary.winter, ...live.itinerary?.winter }
      },
      essentials: { ...base.essentials, ...live.essentials },
      discovery: { ...base.discovery, ...live.discovery },
      about: { ...base.about, ...live.about },
      register: { ...base.register, ...live.register }
    };
  }, [siteContent, lang]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'he' ? 'en' : 'he');
  }, []);

  useEffect(() => {
    document.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <SiteContext.Provider value={{ lang, t, toggleLanguage, handleUpdateContent, isAdmin, setIsAdmin }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);

```

## ×§×•×‘×¥: ./app/layout.jsx
```
import './globals.css';
import { SiteProvider } from '../contexts/SiteContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Savtot in Sri Lanka | ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×”',
  description: 'A unique and unforgettable experience designed exclusively for mothers and grandmothers. ×—×•×•×™×” ×™×™×—×•×“×™×ª ×•×‘×œ×ª×™ × ×©×›×—×ª ×©×¢×•×¦×‘×” ×‘××™×•×—×“ ×¢×‘×•×¨ ××™××”×•×ª ×•×¡×‘×ª×•×ª.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <SiteProvider>
          <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-teal-200">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </SiteProvider>
      </body>
    </html>
  );
}

```

## ×§×•×‘×¥: ./app/discovery/page.jsx
```
'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import NoticeBoardGallery from '../../components/NoticeBoardGallery';

export default function DiscoveryPage() {
  const { lang } = useSite();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf7f2' }}>
      
      {/* â€”â€”â€” Hero: full-bleed editorial title â€”â€”â€” */}
      <div className="pt-32 pb-16 px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-stone-200 pb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-light mb-4">
              {lang === 'he' ? '×¡×¨×™ ×œ× ×§×” Â· ×§×™×¥ ×•×—×•×¨×£ 2027 (×ª××¨×™×›×™× ×™×¤×•×¨×¡××• ×‘×”××©×š)' : 'Sri Lanka Â· Summer & Winter 2027 (Dates TBA)'}
            </p>
            <h1 
              className="text-6xl md:text-8xl font-serif font-medium leading-none text-stone-800"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {lang === 'he' ? (
                <>
                  ××’×œ×™×<br />
                  <span className="italic font-normal text-stone-500">×¢×•×œ×</span>
                </>
              ) : (
                <>
                  Discover<br />
                  <span className="italic font-normal text-stone-500">the Magic</span>
                </>
              )}
            </h1>
          </div>
          <p className="md:max-w-xs text-stone-500 leading-relaxed text-sm font-light md:text-start" dir={lang === 'he' ? 'rtl' : 'ltr'}>
            {lang === 'he' 
              ? '×¨×’×¢×™× ×××™×ª×™×™×, ×¦×‘×¢×™× ×××™×ª×™×™×, ×—×•×•×™×•×ª ×©×—×™×™×‘×™× ×œ×—×•×•×ª ×‘×¢×™× ×™×™× ×©×œ×›×Ÿ' 
              : 'Real moments, real colors, experiences you simply have to see for yourself.'}
          </p>
        </div>
      </div>

      {/* â€”â€”â€” Gallery â€”â€”â€” */}
      <div className="px-4 md:px-12 pb-24 max-w-screen-xl mx-auto">
        <NoticeBoardGallery lang={lang} />
      </div>

    </div>
  );
}

```

## ×§×•×‘×¥: ./app/page.jsx
```
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Users, MapPin, Utensils, ArrowRight, Calendar } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

export default function HomePage() {
  const router = useRouter();
  const { lang, t } = useSite();

  return (
    <div style={{ backgroundColor: '#faf7f2' }}>
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="relative min-h-[100svh] py-32 flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-10 mb-8">
        <div className="absolute inset-0 z-0">
          <EditableImage
            id="hero_bg"
            src="home-page.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
            width={1920}
            crop="fill"
            priority={true}
          />
          <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16 pointer-events-none">


          <p className="text-sm uppercase tracking-[0.4em] mb-4 opacity-80 font-medium">
            <EditableText path={`${lang}.hero.tagline`} text={t.hero.tagline} />
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight whitespace-pre-line pointer-events-auto relative">
            <EditableText path={`${lang}.hero.title`} text={t.hero.title} multiline />
          </h1>
          <p className="text-base md:text-xl font-light mb-6 opacity-90 max-w-3xl mx-auto pointer-events-auto leading-relaxed whitespace-pre-line">
            <EditableText path={`${lang}.hero.subtitle`} text={t.hero.subtitle} multiline />
          </p>


          {/* Dynamic Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto pointer-events-auto text-stone-800">
            {/* Winter Card */}
            <div className="relative flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-[#eaddcd] p-6 md:p-8 text-start justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8ca38f] font-serif italic text-sm md:text-base font-medium block">
                    {lang === 'he' ? '×‘×¨×™×—×” ×˜×¨×•×¤×™×ª ×‘×—×•×¨×£' : 'Tropical Winter Escape'}
                  </span>
                  <span className="text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#8ca38f] text-white shadow-xs">
                    {lang === 'he' ? '15-24 ×œ×¤×‘×¨×•××¨' : 'Feb 15-24'}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                  {lang === 'he' ? '××¡×¢ ×—×•×¨×£ 2027' : 'Winter (February) 2027'}
                </h3>
                <p className="text-stone-600 text-[11px] md:text-xs mb-4 font-light leading-relaxed">
                  {lang === 'he' 
                    ? '×§×¤×” ×‘×”×¨×™×, ×©×§×™×¢×•×ª ×‘×™× ×•×‘×¢×™×§×¨ ×”×¨×‘×” ×©××©' 
                    : 'Coffee in the mountains, sunsets at sea and above all lots of sun'}
                </p>
              </div>
              <button 
                onClick={() => router.push('/itinerary/winter')}
                className="w-fit bg-[#8ca38f] hover:bg-[#798e7c] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider transition-colors shadow-md cursor-pointer"
              >
                {lang === 'he' ? '×œ××¡×œ×•×œ ×”×—×•×¨×£ â†' : 'Winter Itinerary â†’'}
              </button>
            </div>

            {/* Summer Card */}
            <div className="relative flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-[#eaddcd] p-6 md:p-8 text-start justify-between min-h-[220px]">
              <div>
                <span className="text-[#c4704f] font-serif italic text-sm md:text-base font-medium block mb-1">
                  {lang === 'he' ? '×—×•×•×™×™×ª ×§×™×¥ ×—××”' : 'Warm Summer Vibe'}
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                  {lang === 'he' ? '××¡×¢ ×§×™×¥ 2027' : 'Summer 2027'}
                </h3>
                <p className="text-stone-600 text-[11px] md:text-xs mb-4 font-light leading-relaxed">
                  {lang === 'he' 
                    ? "×’'×•× ×’×œ×™×, ××ª×¨×™× ××¤×•×¨×¡××™× ×•×—×•×¤×™× ××”×™×¤×™× ×‘×¢×•×œ×" 
                    : 'Jungles, famous sites and some of the most beautiful beaches in the world'}
                </p>
              </div>
              <button 
                onClick={() => router.push('/itinerary/summer')}
                className="w-fit bg-[#c4704f] hover:bg-[#b05d3d] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider transition-colors shadow-md cursor-pointer"
              >
                {lang === 'he' ? '×œ××¡×œ×•×œ ×”×§×™×¥ â†' : 'Summer Itinerary â†’'}
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-xs md:text-sm font-light tracking-wide text-white/90 pointer-events-auto">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4704f]" />
              <EditableText path={`${lang}.hero.kosher`} text={t.hero.kosher} />
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4704f]" />
              <EditableText path={`${lang}.hero.yoga`} text={t.hero.yoga} />
            </span>
            <span className="flex items-center gap-2 font-semibold text-white bg-white/15 px-3 py-1 rounded-full border border-white/10 shadow-sm backdrop-blur-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ca38f]" />
              <EditableText path={`${lang}.hero.winter_trip`} text={t.hero.winter_trip} />
            </span>
            <span className="flex items-center gap-2 text-[#ffd5a1]">
              <EditableText path={`${lang}.hero.dates_disclaimer`} text={t.hero.dates_disclaimer} />
            </span>
          </div>
        </div>
      </div>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-16 bg-transparent relative">
        <div className="container mx-auto px-6 max-w-md text-center">
          <div className="bg-[#faf7f2] border border-[#eaddcd] rounded-3xl p-8 shadow-sm flex flex-col items-center gap-5">
            <div className="space-y-2">
              <span className="font-serif italic text-[#c4704f] text-sm md:text-base font-medium block">
                {lang === 'he' ? '××•×›× ×” ×œ×¦××ª ×œ×“×¨×š?' : 'Ready to start your journey?'}
              </span>
              <p className="text-xl md:text-2xl font-bold text-stone-800 tracking-wide">
                {lang === 'he' ? '8,050 â‚ª* â€“ ×”×›×œ ×›×œ×•×œ (×œ×œ× ×˜×™×¡×•×ª)' : '8,050 ILS* â€“ All-inclusive (excluding flights)'}
              </p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
                {lang === 'he' 
                  ? '* ×‘×”×ª×× ×œ×©×¢×¨ ×”×“×•×œ×¨, ×œ× ×›×•×œ×œ ×˜×™×¡×•×ª. ×¤×¨×˜×™× ××œ××™× ×‘×¢××•×“ ×”×”×¨×©××”.' 
                  : '* Subject to USD exchange rate, excluding flights. Full details on the registration page.'}
              </p>
            </div>
            <button
              onClick={() => router.push('/register')}
              className="bg-[#c4704f] hover:bg-[#b05d3d] text-white px-10 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:-translate-y-0.5 cursor-pointer mt-1"
            >
              {lang === 'he' ? '×œ×”×¨×©××” ×œ××¡×¢' : 'Register for the Journey'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## ×§×•×‘×¥: ./app/admin/actions.ts
```
'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

// ××ª×—×•×œ ×”×§×œ×™×™× ×˜ ×©×œ ×¡×•×¤××‘×™×™×¡ ×‘××¦×‘ × ×™×”×•×œ (Admin) ×¢×•×§×£ RLS
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// ×¤×•× ×§×¦×™×” 1: ×©×œ×™×¤×ª ×›×œ ×”×”×¨×©××•×ª (×œ×¦×•×¨×š ×”×¦×’×” ×‘×˜×‘×œ×”)
export async function getRegistrations() {
  const { data, error } = await supabaseAdmin
    .from('registrations')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching registrations:', error)
    return []
  }

  return data
}

// ×¤×•× ×§×¦×™×” 2: ×¢×“×›×•×Ÿ ×¡×˜×˜×•×¡ ×©×œ ×”×¨×©××” ×¡×¤×¦×™×¤×™×ª
export async function updateRegistrationStatus(
  id: number, 
  updates: { is_approved?: boolean; receipt_sent?: boolean }
) {
  const { error } = await supabaseAdmin
    .from('registrations')
    .update(updates)
    .eq('id', id)

  if (error) {
    console.error('Error updating registration:', error)
    throw new Error('Failed to update status')
  }

  // ××¨×¢× ×Ÿ ××ª ×”××˜××•×Ÿ (Cache) ×©×œ ×”×¢××•×“ ×›×“×™ ×©×”× ×ª×•× ×™× ×”×—×“×©×™× ×™×•×¤×™×¢×• ×‘×¨×™×¢× ×•×Ÿ ×”×‘×
  revalidatePath('/admin')
  return { success: true }
}
```

## ×§×•×‘×¥: ./app/admin/AdminTable.tsx
```
'use client'

import { useState } from 'react'
import { updateRegistrationStatus } from './actions'

type Registration = {
  id: number
  created_at: string
  is_approved: boolean
  receipt_sent: boolean
  [key: string]: any 
}

export default function AdminTable({ initialData }: { initialData: Registration[] }) {
  const [registrations, setRegistrations] = useState<Registration[]>(initialData)

  const handleToggle = async (id: number, field: 'is_approved' | 'receipt_sent', currentValue: boolean) => {
    const newValue = !currentValue
    
    // ×›××Ÿ ×”×•×¡×¤×ª×™ ××ª ×”×”×’×“×¨×•×ª ×”××“×•×™×§×•×ª ×›×“×™ ×œ×”×¢×œ×™× ××ª ×”××“×•×
    setRegistrations((prev: Registration[]) => 
      prev.map((reg: Registration) => reg.id === id ? { ...reg, [field]: newValue } : reg)
    )

    try {
      await updateRegistrationStatus(id, { [field]: newValue })
    } catch (error) {
      console.error("Failed to update", error)
      
      // ×•×’× ×›××Ÿ ×”×•×¡×¤×ª×™ ×”×’×“×¨×•×ª
      setRegistrations((prev: Registration[]) => 
        prev.map((reg: Registration) => reg.id === id ? { ...reg, [field]: currentValue } : reg)
      )
      alert("×©×’×™××” ×‘×¢×“×›×•×Ÿ ×”×¡×˜×˜×•×¡. × ×¡×” ×©×•×‘.")
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-right" dir="rtl">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">××–×”×”</th>
            <th className="p-4 text-sm font-semibold text-gray-600">×ª××¨×™×š ×”×¨×©××”</th>
            <th className="p-4 text-sm font-semibold text-gray-600">×¡×˜×˜×•×¡ ××™×©×•×¨</th>
            <th className="p-4 text-sm font-semibold text-gray-600">×§×‘×œ×”</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {registrations.map((reg: Registration) => (
            <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 text-sm text-gray-900">#{reg.id}</td>
              <td className="p-4 text-sm text-gray-500">
                {new Date(reg.created_at).toLocaleDateString('he-IL')}
              </td>
              
              <td className="p-4">
                <button
                  onClick={() => handleToggle(reg.id, 'is_approved', reg.is_approved)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    reg.is_approved 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {reg.is_approved ? '××•×©×¨' : '×××ª×™×Ÿ'}
                </button>
              </td>

              <td className="p-4">
                <button
                  onClick={() => handleToggle(reg.id, 'receipt_sent', reg.receipt_sent)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    reg.receipt_sent 
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {reg.receipt_sent ? '× ×©×œ×—' : '×œ× × ×©×œ×—'}
                </button>
              </td>
            </tr>
          ))}
          
          {registrations.length === 0 && (
            <tr>
              <td colSpan={4} className="p-8 text-center text-gray-500">
                ××™×Ÿ ×”×¨×©××•×ª ×¢×“×™×™×Ÿ ×‘××¢×¨×›×ª.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
```

## ×§×•×‘×¥: ./app/admin/page.tsx
```
import { getRegistrations } from './actions'
import AdminTable from './AdminTable'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const rawRegistrations = await getRegistrations()
  
  // × ×™×§×•×™ ×”××™×“×¢ ×œ×—×œ×•×˜×™×Ÿ ×œ×¤× ×™ ×©×œ×™×—×” ×œ×˜×‘×œ×”
  const registrations = JSON.parse(JSON.stringify(rawRegistrations || []))

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">×œ×•×— × ×™×”×•×œ ×”×¨×©××•×ª</h1>
            <p className="mt-2 text-sm text-gray-600">
              × ×™×”×•×œ ×”×¨×©××•×ª ×œ×˜×™×•×œ×™×
            </p>
          </div>
          <div className="text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            ×¡×”"×› × ×¨×©××™×: {registrations.length}
          </div>
        </div>

        <AdminTable initialData={registrations} />
      </div>
    </div>
  )
}
```

## ×§×•×‘×¥: ./app/about/page.jsx
```
'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';

export default function AboutPage() {
  const { lang, t } = useSite();

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-80 bg-stone-200 relative">
             <EditableImage 
                id="about_hero" 
                src="about_hero" 
                alt="Our Team"
                className="w-full h-full object-cover"
                width={1200}
                crop="fill"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <h1 className="absolute bottom-8 start-8 text-5xl font-serif font-bold text-white drop-shadow-md">
               <EditableText path={`${lang}.about.title`} text={t.about.title} />
             </h1>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-stone-700 space-y-6 leading-relaxed">
              <p><EditableText path={`${lang}.about.p1`} text={t.about.p1} multiline /></p>
              <p><EditableText path={`${lang}.about.p2`} text={t.about.p2} multiline /></p>
              <p><EditableText path={`${lang}.about.p3`} text={t.about.p3} multiline /></p>
            </div>

            <div className="mt-16 border-t pt-12 text-center">
              <h3 className="text-2xl font-bold text-teal-900 mb-8">
                {lang === 'he' ? '×”×¦×•×•×ª ×©×™×œ×•×•×” ××ª×›×Ÿ' : 'Your Hosts'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-stone-200 rounded-full mb-4 overflow-hidden shadow-md">
                     <EditableImage id="team_eyal" src="team_eyal" alt="Eyal & Aliza" className="w-full h-full object-cover" width={300} height={300} crop="thumb" />
                  </div>
                  <h4 className="font-bold text-teal-800"><EditableText path={`${lang}.about.team.eyal`} text={t.about.team.eyal} /></h4>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-stone-200 rounded-full mb-4 overflow-hidden shadow-md">
                     <EditableImage id="team_naomi" src="team_naomi" alt="Naomi" className="w-full h-full object-cover" width={300} height={300} crop="thumb" />
                  </div>
                  <h4 className="font-bold text-teal-800"><EditableText path={`${lang}.about.team.naomi`} text={t.about.team.naomi} /></h4>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-stone-200 rounded-full mb-4 overflow-hidden shadow-md flex items-center justify-center bg-teal-50">
                     <span className="text-4xl">ğŸš</span>
                  </div>
                  <h4 className="font-bold text-teal-800"><EditableText path={`${lang}.about.team.guide`} text={t.about.team.guide} /></h4>
                </div>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                <h4 className="text-xl font-bold text-teal-900 mb-4">{lang === 'he' ? '×¦×¨×• ×§×©×¨' : 'Contact Us'}</h4>
                <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-orange-600">Eyal:</span>
                    <a href="https://wa.me/972543510664" target="_blank" rel="noreferrer" className="hover:text-orange-500" dir="ltr">+972-54-351-0664</a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-orange-600">Naomi:</span>
                    <a href="https://wa.me/972546639597" target="_blank" rel="noreferrer" className="hover:text-orange-500" dir="ltr">+972-54-663-9597</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

## ×§×•×‘×¥: ./app/register/page.jsx
```
"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send } from 'lucide-react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import TravelAgreement from '../../components/Agreements/TravelAgreement';
import ItineraryAppendix from '../../components/Agreements/ItineraryAppendix';
import AccommodationRates from '../../components/Agreements/AccommodationRates';
import MedicalWaiver from '../../components/Agreements/MedicalWaiver';

function RegisterFormContent() {
  const { lang, t } = useSite();
  const searchParams = useSearchParams();
  const querySeason = searchParams.get('season') === 'winter' ? 'winter' : 'summer';

  const [step, setStep] = useState(1);
  const [customStatus, setCustomStatus] = useState('idle'); // idle | submitting | error

  // Step 1 State
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    guests: '1', 
    notes: '', 
    website_url: '',
    season: querySeason
  });
  
  // Step 2 State
  const [agreements, setAgreements] = useState({ sectionA: false, sectionB: false, sectionC: false });
  const [digitalSignature, setDigitalSignature] = useState({ 
    fullName: '', 
    idNumber: '',
    birthDate: '',
    date: new Date().toISOString().split('T')[0],
    emergencyName: '',
    emergencyRelation: '',
    emergencyPhone: ''
  });

  const [healthQ, setHealthQ] = useState({
    q1: { answer: '', details: '' },
    q2: { answer: '', details: '' },
    q3: { answer: '', details: '' },
    q4: { answer: '', details: '' },
    q5: { answer: '', details: '' },
  });

  const [healthDecl, setHealthDecl] = useState({
    decl1: false,
    decl2: false,
    decl3: false
  });

  // Step 3 State
  const [paymentFile, setPaymentFile] = useState(null);
  const [isUploadingPayment, setIsUploadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [showNoPaymentModal, setShowNoPaymentModal] = useState(false);
  const [submittedWithoutFile, setSubmittedWithoutFile] = useState(false);

  const isSubmitting = customStatus === 'submitting';
  const hasError = customStatus === 'error';

  const allChecked = agreements.sectionA && agreements.sectionB && agreements.sectionC;
  
  const healthQValid = ['q1', 'q2', 'q3', 'q4', 'q5'].every(q => 
    healthQ[q].answer === 'no' || (healthQ[q].answer === 'yes' && healthQ[q].details.trim() !== '')
  );
  const healthDeclValid = healthDecl.decl1 && healthDecl.decl2 && healthDecl.decl3;

  const isFilled = digitalSignature.fullName.trim() !== '' && 
                   digitalSignature.idNumber.trim() !== '' &&
                   digitalSignature.birthDate.trim() !== '' &&
                   digitalSignature.emergencyName.trim() !== '' &&
                   digitalSignature.emergencyRelation.trim() !== '' &&
                   digitalSignature.emergencyPhone.trim() !== '' &&
                   healthQValid &&
                   healthDeclValid;
                   
  const canProceedStep2 = allChecked && isFilled;

  // Handlers
  const handleStep1Submit = async (e) => {
    e.preventDefault();
    if (formData.website_url) {
      setStep(2); // Bot honeypot
      return;
    }
    
    setCustomStatus('submitting');
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          name: formData.name, 
          phone: formData.phone,
          guests: formData.guests,
          notes: formData.notes,
          season: formData.season,
          lang 
        })
      });
      
      if (!response.ok) {
        throw new Error("Email dispatch failed.");
      }
      
      setCustomStatus('idle');
      setStep(2);
    } catch (err) {
      console.error(err);
      setCustomStatus('error');
    }
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (canProceedStep2) {
      setStep(3);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPaymentError('');
    if (!file) return;

    // Validate size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setPaymentError(lang === 'he' ? '×’×•×“×œ ×”×§×•×‘×¥ ×¢×•×œ×” ×¢×œ 5MB. ×× × ×‘×—×¨×• ×§×•×‘×¥ ×§×˜×Ÿ ×™×•×ª×¨.' : 'File size exceeds 5MB. Please choose a smaller file.');
      return;
    }

    // Validate type
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      setPaymentError(lang === 'he' ? '×¤×•×¨××˜ ×œ× × ×ª××š. ×× × ×”×¢×œ×• ×§×•×‘×¥ PDF ××• ×ª××•× ×” (PNG, JPG).' : 'Unsupported format. Please upload a PDF or image (PNG, JPG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPaymentFile({
        name: file.name,
        type: file.type,
        size: file.size,
        base64: event.target.result.split(',')[1]
      });
    };
    reader.onerror = () => {
      setPaymentError(lang === 'he' ? '×©×’×™××” ×‘×§×¨×™××ª ×”×§×•×‘×¥.' : 'Error reading file.');
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setPaymentFile(null);
    setPaymentError('');
  };

  const handleStep3Click = (e) => {
    if (e) e.preventDefault();
    if (!paymentFile) {
      setShowNoPaymentModal(true);
      return;
    }
    executeStep3Submit(true);
  };

  const executeStep3Submit = async (hasFile) => {
    setIsUploadingPayment(true);
    setPaymentError('');
    setShowNoPaymentModal(false);
    if (!hasFile) {
      setSubmittedWithoutFile(true);
    }

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          season: formData.season,
          guests: formData.guests,
          notes: formData.notes,
          digitalSignature,
          healthQ,
          file: hasFile && paymentFile ? {
            name: paymentFile.name,
            type: paymentFile.type,
            base64: paymentFile.base64
          } : null,
          lang
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send registration email');
      }

      setIsUploadingPayment(false);
      setStep(4);
    } catch (err) {
      console.error(err);
      setPaymentError(lang === 'he' ? '×©×’×™××” ×‘×”×©×œ××ª ×”×”×¨×©××”. ×× × × ×¡×• ×©× ×™×ª.' : 'Failed to complete registration. Please try again.');
      setIsUploadingPayment(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Progress Bar */}
        {step < 4 && (
          <div className="mb-8 flex items-center justify-center space-x-4 space-x-reverse" dir={lang === 'he' ? 'rtl' : 'ltr'}>
            {[1, 2, 3].map(num => (
              <div key={num} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${step >= num ? 'bg-teal-600 text-white' : 'bg-stone-300 text-stone-600'}`}>
                  {num}
                </div>
                {num < 3 && <div className={`w-12 h-1 ${step > num ? 'bg-teal-600' : 'bg-stone-300'}`}></div>}
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Panel (Contact Info) */}
          <div className="w-full md:w-5/12 bg-teal-900 text-teal-50 p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                <EditableText path={`${lang}.register.title`} text={t.register.title} />
              </h2>
              <p className="text-teal-200 text-lg mb-8">
                <EditableText path={`${lang}.register.subtitle`} text={t.register.subtitle} />
              </p>
              
              {/* Price & Deposit Card */}
              <div className="bg-teal-800/40 border border-teal-700/60 rounded-2xl p-5 mb-8 space-y-4 text-sm text-start" dir={lang === 'he' ? 'rtl' : 'ltr'}>
                <div>
                  <span className="text-xs uppercase tracking-wider text-teal-300 font-bold block mb-1">
                    {lang === 'he' ? '×¢×œ×•×ª ×”××¡×¢' : 'Trip Price'}
                  </span>
                  <div className="text-2xl font-bold text-white">
                    {lang === 'he' ? '8,050 â‚ª*' : '8,050 ILS*'}
                  </div>
                  <div className="text-teal-200 text-xs mt-0.5">
                    {lang === 'he' ? '××—×™×¨ ××‘×¦×¢ (Intro Price) | ×œ××“× ×‘×—×“×¨ ×–×•×’×™' : 'Intro Price | Per person in a double room'}
                  </div>
                </div>

                {/* Payment Timeline */}
                <div className="pt-2 border-t border-teal-700/40 space-y-3">
                  <span className="text-xs uppercase tracking-wider text-teal-300 font-bold block">
                    {lang === 'he' ? '×œ×•×— ×ª×©×œ×•××™×' : 'Payment Schedule'}
                  </span>

                  {/* Step 1 */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400/90 flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
                    <div>
                      <div className="text-white font-semibold">
                        {lang === 'he' ? '××§×“××” ×œ×”×‘×˜×—×ª ××§×•× â€“ 1,000 â‚ª' : 'Deposit to Secure Your Spot â€“ 1,000 ILS'}
                      </div>
                      <div className="text-teal-200 text-xs mt-0.5 leading-relaxed">
                        {lang === 'he'
                          ? '×–×”×• ×”×¡×›×•× ×”×™×—×™×“ ×©××©×•×œ× ×›×¢×ª. ×”××§×“××” ××‘×˜×™×—×” ××ª ××§×•××š ×‘××¡×¢ ×•××™× ×” × ×™×ª× ×ª ×œ×”×—×–×¨.'
                          : 'This is the only payment required at this stage. The deposit secures your spot and is non-refundable.'}
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/70 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
                    <div>
                      <div className="text-white font-semibold">
                        {lang === 'he' ? '×”×©×œ××ª ×”×ª×©×œ×•× â€“ ×›×—×•×“×©/×—×•×“×©×™×™× ×œ×¤× ×™ ×”×˜×™×•×œ' : 'Final Payment â€“ 1â€“2 Months Before Departure'}
                      </div>
                      <div className="text-teal-200 text-xs mt-0.5 leading-relaxed">
                        {lang === 'he'
                          ? '× ×™×¦×•×¨ ×§×©×¨ ××™×©×™×ª ×¢× ×›×œ ××©×ª×ª×¤×ª ×œ×”×¡×“×¨×ª ×™×ª×¨×ª ×”×ª×©×œ×•× (7,050 â‚ª) ×‘×”×ª×× ×œ×©×¢×¨ ×”×“×•×œ×¨ ×‘××•×¢×“ ×”×—×™×•×‘.'
                          : 'We will reach out personally to each participant to arrange the remaining balance (7,050 ILS), adjusted per the USD exchange rate at time of billing.'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-teal-700/40 space-y-2">
                  <div className="font-semibold text-white text-xs">
                    {lang === 'he' ? '×”××—×™×¨ ×›×•×œ×œ:' : 'Price Includes:'}
                  </div>
                  <ul className="list-disc list-inside text-xs text-teal-100 space-y-1 opacity-90">
                    <li>{lang === 'he' ? '3 ××¨×•×—×•×ª ×‘×™×•×' : '3 meals a day'}</li>
                    <li>{lang === 'he' ? '×¤×¢×™×œ×•×™×•×ª' : 'Activities'}</li>
                    <li>{lang === 'he' ? '×ª×—×‘×•×¨×”' : 'Transport'}</li>
                    <li>{lang === 'he' ? '×œ×™× ×” ×‘××œ×•× ×•×ª 4-5 ×›×•×›×‘×™×' : 'Accommodation in 4-5 star hotels'}</li>
                  </ul>
                </div>

                <div className="text-[11px] text-teal-300 leading-normal space-y-1 opacity-80 pt-2 border-t border-teal-700/40">
                  <p>{lang === 'he' ? '* ×”××—×™×¨ ×¢×©×•×™ ×œ×¨×“×ª ××• ×œ×¢×œ×•×ª ×‘×”×ª×× ×œ×©×™× ×•×™×™× ×‘×©×¢×¨ ×”×“×•×œ×¨.' : '* Price may vary depending on the USD exchange rate.'}</p>
                  <p>{lang === 'he' ? '* ×”××—×™×¨ ××™× ×• ×›×•×œ×œ ×˜×™×¡×•×ª, ×•×™×–×” ×•×‘×™×˜×•×—.' : '* Price does not include flights, visa, and insurance.'}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {t.register.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="font-medium">
                      <EditableText path={`${lang}.register.details.${idx}`} text={detail} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700/50">
              <p className="font-bold mb-2"><EditableText path={`${lang}.register.contact_wa`} text={t.register.contact_wa} /></p>
              
              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <p className="text-sm text-teal-200 mb-1">Eyal</p>
                  <a href="https://wa.me/972543510664" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-orange-400 transition-colors flex items-center gap-2" dir="ltr">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
                    </svg>
                    +972-54-351-0664
                  </a>
                </div>
                <div>
                  <p className="text-sm text-teal-200 mb-1">Naomi</p>
                  <a href="https://wa.me/972546639597" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-orange-400 transition-colors flex items-center gap-2" dir="ltr">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
                    </svg>
                    +972-54-663-9597
                  </a>
                </div>
              </div>
              
              <p className="font-bold mb-2"><EditableText path={`${lang}.register.contact_email`} text={t.register.contact_email} /></p>
              <a href="mailto:srilankasavtot@gmail.com" className="text-lg text-white hover:text-orange-400 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                srilankasavtot@gmail.com
              </a>
            </div>
          </div>

          {/* Right Panel (Dynamic Content based on Step) */}
          <div className="w-full md:w-7/12 p-10 md:p-14">
            
            {/* STEP 1: Original Form */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">
                  {lang === 'he' ? '×‘×§×©×ª ×”×¨×©××”' : 'Registration Request'}
                </h3>
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website_url">Website URL</label>
                  <input type="text" id="website_url" name="website_url" tabIndex="-1" autoComplete="off" value={formData.website_url} onChange={e => setFormData({...formData, website_url: e.target.value})} />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.name} *</label>
                  <input required name="name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.phone} *</label>
                    <input required name="phone" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.email} *</label>
                    <input required name="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" dir="ltr" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">
                      {lang === 'he' ? '×¢×•× ×ª ×”×˜×™×•×œ *' : 'Trip Season *'}
                    </label>
                    <select 
                      name="season" 
                      value={formData.season} 
                      onChange={e => setFormData({...formData, season: e.target.value})} 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50 cursor-pointer"
                    >
                      <option value="summer">{lang === 'he' ? '×§×™×¥ 2027' : 'Summer 2027'}</option>
                      <option value="winter">{lang === 'he' ? '×—×•×¨×£ (×¤×‘×¨×•××¨) 2027' : 'Winter (February) 2027'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.guests}</label>
                    <select name="guests" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50 cursor-pointer">
                      {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.notes}</label>
                  <textarea name="notes" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50 min-h-[120px]"></textarea>
                </div>

                {hasError && <p className="text-red-500 font-medium"><EditableText path={`${lang}.register.form.error`} text={t.register.form.error} /></p>}

                <button disabled={isSubmitting} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70 mt-4 cursor-pointer">
                  {isSubmitting ? t.register.form.submitting : <>{t.register.form.submit} <Send className={`w-5 h-5 ${lang === 'he' ? 'rotate-180' : ''}`} /></>}
                </button>
              </form>
            )}

            {/* STEP 2: Terms and Signatures */}
            {step === 2 && (
              <form onSubmit={handleStep2Submit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-teal-900 mb-2">
                    {lang === 'he' ? '×ª× ××™ ×”×¨×©××” ×•×”×¦×”×¨×ª ×‘×¨×™××•×ª' : 'Registration Terms & Health Declaration'}
                  </h3>
                  <p className="text-stone-600">
                    {lang === 'he' ? '×× × ×§×¨××• ×•×¡×× ×• ××™×©×•×¨ ×œ×›×œ ×”×¡×¢×™×¤×™× ××˜×”:' : 'Please read and agree to all sections below:'}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-teal-800">{lang === 'he' ? '×ª× ××™ ×”×ª×§×©×¨×•×ª ×•×‘×™×˜×•×œ×™×' : 'Terms & Cancellation Policy'}</h4>
                  <div className="h-64 overflow-y-auto bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-stone-700 shadow-inner">
                    <TravelAgreement />
                    <hr className="my-6 border-stone-300" />
                    <AccommodationRates />
                  </div>
                  <label htmlFor="sectionA" className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" id="sectionA" className="w-5 h-5 mt-1 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={agreements.sectionA} onChange={(e) => setAgreements({...agreements, sectionA: e.target.checked})} />
                    <span className="text-stone-800 font-medium group-hover:text-teal-700">
                      {lang === 'he' ? '×§×¨××ª×™ ×•×× ×™ ××¡×›×™×/×” ×œ×ª× ××™ ×”×”×ª×§×©×¨×•×ª ×•×”×‘×™×˜×•×œ×™×.' : 'I have read and agree to the terms and cancellation policy.'}
                    </span>
                  </label>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-teal-800">{lang === 'he' ? '×©×§×™×¤×•×ª ××•×¤×¨×˜×™×‘×™×ª (× ×¡×¤×— ××¡×œ×•×œ)' : 'Operational Transparency (Itinerary)'}</h4>
                  <div className="h-64 overflow-y-auto bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-stone-700 shadow-inner">
                    <ItineraryAppendix season={formData.season} />
                  </div>
                  <label htmlFor="sectionB" className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" id="sectionB" className="w-5 h-5 mt-1 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={agreements.sectionB} onChange={(e) => setAgreements({...agreements, sectionB: e.target.checked})} />
                    <span className="text-stone-800 font-medium group-hover:text-teal-700">
                      {lang === 'he' ? '×§×¨××ª×™ ×•×× ×™ ××¡×›×™×/×” ×œ×¤×¨×˜×™ ×”×©×§×™×¤×•×ª ×”××•×¤×¨×˜×™×‘×™×ª.' : 'I have read and agree to the operational transparency details.'}
                    </span>
                  </label>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-teal-800">{lang === 'he' ? '× ×¡×¤×— ×\' - Sri Lanka Trip Participant Waiver, Release and Assumption of Risk' : 'Appendix A - Sri Lanka Trip Participant Waiver, Release and Assumption of Risk'}</h4>
                  <div className="h-64 overflow-y-auto bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-stone-700 shadow-inner">
                    <MedicalWaiver />
                  </div>
                  <label htmlFor="sectionC" className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" id="sectionC" className="w-5 h-5 mt-1 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={agreements.sectionC} onChange={(e) => setAgreements({...agreements, sectionC: e.target.checked})} />
                    <span className="text-stone-800 font-medium group-hover:text-teal-700">
                      {lang === 'he' ? '×§×¨××ª×™, ×”×‘× ×ª×™ ×•×× ×™ ×××©×¨/×ª ××ª ×›×ª×‘ ×”×•×•×™×ª×•×¨ (Waiver, Release and Assumption of Risk).' : 'I have read, understood, and accept the Sri Lanka Trip Participant Waiver, Release and Assumption of Risk.'}
                    </span>
                  </label>
                </div>

                <hr className="border-stone-200" />

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-teal-900 mb-2">{lang === 'he' ? '×˜×•×¤×¡ ×”×¦×”×¨×ª ×‘×¨×™××•×ª ×•×©××œ×•×Ÿ ×¨×¤×•××™' : 'Health Declaration & Medical Questionnaire'}</h4>
                  <p className="text-stone-600 mb-4">{lang === 'he' ? '(×× × ×¢× ×™ ×‘×›× ×•×ª ×•×‘×¤×™×¨×•×˜. ××™×“×¢ ×–×” × ××¡×£ ××š ×•×¨×§ ×œ××¢×Ÿ ×‘×˜×™×—×•×ª×š ×•×™×™×©××¨ ×‘×¡×•×“×™×•×ª ××•×—×œ×˜×ª)' : '(Please answer honestly and in detail. This information is collected solely for your safety and will be kept strictly confidential)'}</p>
                  
                  <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-6">
                    {/* Q1 */}
                    <div>
                      <p className="font-bold text-stone-800 text-sm mb-2">1. {lang === 'he' ? '×”×× ××ª ×¡×•×‘×œ×ª ××‘×¢×™×•×ª ×¨×¤×•××™×•×ª ×›×¨×•× ×™×•×ª (×›×’×•×Ÿ: ××—×œ×•×ª ×œ×‘, ×œ×—×¥ ×“×, ××¡×˜××”, ×¡×•×›×¨×ª, ××¤×™×œ×¤×¡×™×” ×•×›×“\')?' : 'Do you suffer from chronic medical conditions (e.g. heart disease, blood pressure, asthma, diabetes, epilepsy, etc.)?'}</p>
                      <div className="flex gap-4 mb-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q1" checked={healthQ.q1.answer === 'no'} onChange={() => setHealthQ({...healthQ, q1: {...healthQ.q1, answer: 'no'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×œ×' : 'No'}
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q1" checked={healthQ.q1.answer === 'yes'} onChange={() => setHealthQ({...healthQ, q1: {...healthQ.q1, answer: 'yes'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×›×Ÿ' : 'Yes'}
                        </label>
                      </div>
                      {healthQ.q1.answer === 'yes' && (
                        <input type="text" placeholder={lang === 'he' ? '×× × ×¤×¨×˜×™...' : 'Please specify...'} value={healthQ.q1.details} onChange={e => setHealthQ({...healthQ, q1: {...healthQ.q1, details: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-teal-500" />
                      )}
                    </div>
                    {/* Q2 */}
                    <div>
                      <p className="font-bold text-stone-800 text-sm mb-2">2. {lang === 'he' ? '×”×× ××ª × ×•×˜×œ×ª ×ª×¨×•×¤×•×ª ××¨×©× ×‘××•×¤×Ÿ ×§×‘×•×¢?' : 'Do you take prescription medications regularly?'}</p>
                      <div className="flex gap-4 mb-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q2" checked={healthQ.q2.answer === 'no'} onChange={() => setHealthQ({...healthQ, q2: {...healthQ.q2, answer: 'no'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×œ×' : 'No'}
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q2" checked={healthQ.q2.answer === 'yes'} onChange={() => setHealthQ({...healthQ, q2: {...healthQ.q2, answer: 'yes'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×›×Ÿ' : 'Yes'}
                        </label>
                      </div>
                      {healthQ.q2.answer === 'yes' && (
                        <input type="text" placeholder={lang === 'he' ? '×× × ×¤×¨×˜×™ ××™×œ×• ×ª×¨×•×¤×•×ª...' : 'Please specify medications...'} value={healthQ.q2.details} onChange={e => setHealthQ({...healthQ, q2: {...healthQ.q2, details: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-teal-500" />
                      )}
                    </div>
                    {/* Q3 */}
                    <div>
                      <p className="font-bold text-stone-800 text-sm mb-2">3. {lang === 'he' ? '×”×× ×™×© ×œ×š ××œ×¨×’×™×•×ª ×›×œ×©×”×Ÿ (×œ××–×•×Ÿ, ×ª×¨×•×¤×•×ª, ×¢×§×™×¦×•×ª ×—×¨×§×™× ×•×›×“\')?' : 'Do you have any allergies (food, medications, insect bites, etc.)?'}</p>
                      <div className="flex gap-4 mb-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q3" checked={healthQ.q3.answer === 'no'} onChange={() => setHealthQ({...healthQ, q3: {...healthQ.q3, answer: 'no'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×œ×' : 'No'}
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q3" checked={healthQ.q3.answer === 'yes'} onChange={() => setHealthQ({...healthQ, q3: {...healthQ.q3, answer: 'yes'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×›×Ÿ' : 'Yes'}
                        </label>
                      </div>
                      {healthQ.q3.answer === 'yes' && (
                        <input type="text" placeholder={lang === 'he' ? '×× × ×¤×¨×˜×™ ××ª ×¡×•×’ ×”××œ×¨×’×™×” ×•×¨××ª ×”×—×•××¨×”...' : 'Please specify allergy type and severity...'} value={healthQ.q3.details} onChange={e => setHealthQ({...healthQ, q3: {...healthQ.q3, details: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-teal-500" />
                      )}
                    </div>
                    {/* Q4 */}
                    <div>
                      <p className="font-bold text-stone-800 text-sm mb-2">4. {lang === 'he' ? '×”×× ×™×© ×œ×š ××’×‘×œ×” ×¤×™×–×™×ª, ××•×¨×ª×•×¤×“×™×ª ××• ××—×¨×ª ×©×¢×©×•×™×” ×œ×”×§×©×•×ª ×¢×œ×™×š ×‘×”×œ×™×›×”, ×˜×™×•×œ×™ ×©×˜×— ××• ××××¥ ×¤×™×–×™ ××ª×•×Ÿ?' : 'Do you have any physical, orthopedic or other limitation that might make walking, hiking or moderate physical effort difficult?'}</p>
                      <div className="flex gap-4 mb-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q4" checked={healthQ.q4.answer === 'no'} onChange={() => setHealthQ({...healthQ, q4: {...healthQ.q4, answer: 'no'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×œ×' : 'No'}
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q4" checked={healthQ.q4.answer === 'yes'} onChange={() => setHealthQ({...healthQ, q4: {...healthQ.q4, answer: 'yes'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×›×Ÿ' : 'Yes'}
                        </label>
                      </div>
                      {healthQ.q4.answer === 'yes' && (
                        <input type="text" placeholder={lang === 'he' ? '×× × ×¤×¨×˜×™...' : 'Please specify...'} value={healthQ.q4.details} onChange={e => setHealthQ({...healthQ, q4: {...healthQ.q4, details: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-teal-500" />
                      )}
                    </div>
                    {/* Q5 */}
                    <div>
                      <p className="font-bold text-stone-800 text-sm mb-2">5. {lang === 'he' ? '×”×× ×™×©× ×• ××™×“×¢ ×¨×¤×•××™, × ×¤×©×™ ××• ×ª×–×•× ×ª×™ ××—×¨ ×©×”×××¨×’× ×™× ×¦×¨×™×›×™× ×œ×“×¢×ª ×¢×œ×™×• ×œ×§×¨××ª ×”××¡×¢?' : 'Is there any other medical, mental, or nutritional information the organizers should know about before the trip?'}</p>
                      <div className="flex gap-4 mb-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q5" checked={healthQ.q5.answer === 'no'} onChange={() => setHealthQ({...healthQ, q5: {...healthQ.q5, answer: 'no'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×œ×' : 'No'}
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="q5" checked={healthQ.q5.answer === 'yes'} onChange={() => setHealthQ({...healthQ, q5: {...healthQ.q5, answer: 'yes'}})} className="text-teal-600 focus:ring-teal-500" /> {lang === 'he' ? '×›×Ÿ' : 'Yes'}
                        </label>
                      </div>
                      {healthQ.q5.answer === 'yes' && (
                        <input type="text" placeholder={lang === 'he' ? '×× × ×¤×¨×˜×™...' : 'Please specify...'} value={healthQ.q5.details} onChange={e => setHealthQ({...healthQ, q5: {...healthQ.q5, details: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-teal-500" />
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-4 text-sm text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-200 shadow-inner">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={healthDecl.decl1} onChange={e => setHealthDecl({...healthDecl, decl1: e.target.checked})} />
                      <span className="font-medium group-hover:text-teal-700">
                        <strong>{lang === 'he' ? '×”×¦×”×¨×ª ×›×•×©×¨ ×’×•×¤× ×™: ' : 'Physical Fitness Declaration: '}</strong>
                        {lang === 'he' ? '×× ×™ ××¦×”×™×¨×” ×›×™ ×§×¨××ª×™ ××ª ×ª×•×›× ×™×ª ×”××¡×¢, ×•×™×“×•×¢ ×œ×™ ×›×™ ××•×¤×™ ×”××¡×¢ ×›×•×œ×œ ×¤×¢×™×œ×•×™×•×ª ×©×˜×—, ×¡×™×•×¨×™× ×¨×’×œ×™×™× ×•××××¥ ×¤×™×–×™ ××ª×•×Ÿ ×•×¡×‘×™×¨. ×× ×™ ××¦×”×™×¨×” ×›×™ ×‘×¨×™××•×ª×™ ×ª×§×™× ×” ×•×× ×™ ×›×©×™×¨×” ×¤×™×–×™×ª ×•× ×¤×©×™×ª ×œ×”×©×ª×ª×£ ×‘××¡×¢ ××¢×™×Ÿ ×–×”.' : 'I declare that I have read the itinerary and know that the trip includes field activities, walking tours, and moderate physical effort. I declare that I am in good health and physically and mentally fit to participate.'}
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={healthDecl.decl2} onChange={e => setHealthDecl({...healthDecl, decl2: e.target.checked})} />
                      <span className="font-medium group-hover:text-teal-700">
                        <strong>{lang === 'he' ? '××—×¨×™×•×ª ×¢×œ ×”××™×“×¢: ' : 'Responsibility for Information: '}</strong>
                        {lang === 'he' ? '×× ×™ ××¦×”×™×¨×” ×›×™ ××¡×¨×ª×™ ××ª ×›×œ ×”××™×“×¢ ×”×¨×¤×•××™ ×”×¨×œ×•×•× ×˜×™ ×œ×’×‘×™×™. ×™×“×•×¢ ×œ×™ ×›×™ ×”×××¨×’× ×™× ××¡×ª××›×™× ×¢×œ ×”×¦×”×¨×ª×™ ×–×•. ×›×›×œ ×©×”×¡×ª×¨×ª×™ ××• ×”×©××˜×ª×™ ××™×“×¢ ×¨×¤×•××™, ×× ×™ ×œ×•×§×—×ª ×¢×œ ×¢×¦××™ ××ª ×”××œ×•× ×”××—×¨×™×•×ª ×œ×›×œ × ×–×§, ×”×—××¨×” ×‘××¦×‘ ×¨×¤×•××™ ××• ×”×•×¦××” ×©×™×™×’×¨××• ×œ×™ ×¢×§×‘ ×›×š ×‘××”×œ×š ×”××¡×¢, ×•××•×•×ª×¨×ª ×¢×œ ×›×œ ×˜×¢× ×” ××• ×ª×‘×™×¢×” ×›×œ×¤×™ ×”×××¨×’× ×™× ×‘×”×§×©×¨ ×–×”.' : 'I declare I have provided all relevant medical information. I know organizers rely on this declaration. Should I hide or omit medical information, I take full responsibility for any damage, worsening of condition or expense caused during the trip, and waive any claims against organizers.'}
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={healthDecl.decl3} onChange={e => setHealthDecl({...healthDecl, decl3: e.target.checked})} />
                      <span className="font-medium group-hover:text-teal-700">
                        <strong>{lang === 'he' ? '×™×™×“×•×¢ ×œ×¤×™ ×—×•×§ ×”×’× ×ª ×”×¤×¨×˜×™×•×ª: ' : 'Privacy Protection Notice: '}</strong>
                        {lang === 'he' ? '×× ×™ ×××©×¨×ª ×›×™ ×™×“×•×¢ ×œ×™ ×©×”××™×“×¢ ×”×¨×’×™×© ×©××¡×¨×ª×™ ×‘×˜×•×¤×¡ ×–×” × ××¡×¨ ××¨×¦×•× ×™ ×”×—×•×¤×©×™ ×•×‘×”×¡×›××ª×™. ×”××™×“×¢ × ××¡×£ ××š ×•×¨×§ ×œ××˜×¨×ª ×”×¤×§×ª ×”××¡×¢, ×”×™×¢×¨×›×•×ª ×œ×•×’×™×¡×˜×™×ª ×•×©××™×¨×” ×¢×œ ×©×œ×•××™ ×•×‘×¨×™××•×ª×™ ×‘××”×œ×›×•. ×”××™×“×¢ ×™×™×©××¨ ×‘×¡×•×“×™×•×ª ××¦×œ ×”×××¨×’× ×™× ×•×œ× ×™×•×¢×‘×¨ ×œ×©×•× ×¦×“ ×©×œ×™×©×™, ×œ××¢×˜ ×œ×¦×•×•×ª ×¨×¤×•××™ ××•×¡××š ×‘××§×¨×” ×—×™×¨×•× ×¨×¤×•××™ ×‘×• ××–×“×§×§ ×œ×˜×™×¤×•×œ.' : 'I confirm that the sensitive information provided is given voluntarily and with consent. It is collected solely for trip production, logistics, and safety. The information will be kept confidential and not transferred to any third party except authorized medical staff in an emergency.'}
                      </span>
                    </label>
                  </div>
                </div>

                <hr className="border-stone-200" />

                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                  <h4 className="text-xl font-bold text-teal-900 mb-4">{lang === 'he' ? '×¤×¨×˜×™× ××™×©×™×™×, ×—×™×¨×•× ×•×—×ª×™××” ×“×™×’×™×˜×œ×™×ª' : 'Personal Details, Emergency Contact & Digital Signature'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? '×©× ××œ× (×›×¤×™ ×©××•×¤×™×¢ ×‘×“×¨×›×•×Ÿ) *' : 'Full Name (as in Passport) *'}</label>
                      <input type="text" id="fullName" value={digitalSignature.fullName} onChange={(e) => setDigitalSignature({...digitalSignature, fullName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500 bg-white" required />
                    </div>
                    <div>
                      <label htmlFor="idNumber" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? '×ª×¢×•×“×ª ×–×”×•×ª / ×“×¨×›×•×Ÿ *' : 'ID / Passport *'}</label>
                      <input type="text" id="idNumber" value={digitalSignature.idNumber} onChange={(e) => setDigitalSignature({...digitalSignature, idNumber: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500 bg-white" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="birthDate" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? '×ª××¨×™×š ×œ×™×“×” *' : 'Date of Birth *'}</label>
                      <input type="date" id="birthDate" value={digitalSignature.birthDate} onChange={(e) => setDigitalSignature({...digitalSignature, birthDate: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500 bg-white" required />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? '×ª××¨×™×š ×—×ª×™××” *' : 'Signature Date *'}</label>
                      <input type="date" id="date" value={digitalSignature.date} onChange={(e) => setDigitalSignature({...digitalSignature, date: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500 bg-white" required />
                    </div>
                  </div>
                  
                  <h5 className="font-bold text-teal-800 mb-3 mt-6">{lang === 'he' ? '××™×© ×§×©×¨ ×‘×—×™×¨×•× ×‘×™×©×¨××œ' : 'Emergency Contact in Israel'}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="emergencyName" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? '×©× ××™×© ×§×©×¨ *' : 'Emergency Contact Name *'}</label>
                      <input type="text" id="emergencyName" value={digitalSignature.emergencyName} onChange={(e) => setDigitalSignature({...digitalSignature, emergencyName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500 bg-white" required />
                    </div>
                    <div>
                      <label htmlFor="emergencyRelation" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? '×§×¨×‘×” (×‘×Ÿ ×–×•×’/×”×•×¨×”/××—×¨) *' : 'Relationship *'}</label>
                      <input type="text" id="emergencyRelation" value={digitalSignature.emergencyRelation} onChange={(e) => setDigitalSignature({...digitalSignature, emergencyRelation: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500 bg-white" required />
                    </div>
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? '×˜×œ×¤×•×Ÿ ××™×© ×§×©×¨ *' : 'Emergency Contact Phone *'}</label>
                      <input type="tel" id="emergencyPhone" value={digitalSignature.emergencyPhone} onChange={(e) => setDigitalSignature({...digitalSignature, emergencyPhone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500 bg-white" required dir="ltr" />
                    </div>
                  </div>
                  <p className="text-sm text-teal-800 mt-5 font-bold">
                    {lang === 'he' 
                      ? '×‘×—×ª×™××ª×™ (××™×œ×•×™ ×¤×¨×˜×™×™) ×”× × ×™ ×××©×¨/×ª ××ª ×ª× ××™ ×”×‘×™×˜×•×œ, ×›×ª×‘ ×”×•×•×™×ª×•×¨, ×•×”×¦×”×¨×ª ×”×‘×¨×™××•×ª ×‘××œ×•××.' 
                      : 'By signing (filling my details) I accept the cancellation policy, waiver, and health declaration in full.'}
                  </p>
                </div>

                <button disabled={!canProceedStep2} type="submit" className={`w-full py-4 rounded-xl font-bold text-lg transition-all cursor-pointer ${canProceedStep2 ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-stone-300 text-stone-500 opacity-60 cursor-not-allowed'}`}>
                  {lang === 'he' ? '×”××©×š ×œ×©×œ×‘ ×”×ª×©×œ×•×' : 'Proceed to Payment'}
                </button>
              </form>
            )}

            {/* STEP 3: Payment */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">
                  {lang === 'he' ? '×¤×¨×˜×™ ×ª×©×œ×•×' : 'Payment Details'}
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl text-stone-800 text-sm leading-relaxed shadow-sm">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">{lang === 'he' ? '×¤×¨×˜×™ ×ª×©×œ×•× ×•×©×§×™×¤×•×ª ×§×‘×œ×•×ª' : 'Payment Details & Receipts Transparency'}</h4>
                  
                  <p className="font-bold text-blue-900 mb-2">{lang === 'he' ? '××•×¤×Ÿ ×‘×™×¦×•×¢ ×”×ª×©×œ×•× ×•×”×¤×§×ª ×§×‘×œ×•×ª' : 'Payment Method & Invoicing'}</p>
                  <p className="mb-3">
                    {lang === 'he' 
                      ? '×¢×œ ×× ×ª ×œ×—×¡×•×š ×‘×¢××œ×•×ª ×¡×œ×™×§×” ×•×”××¨×ª ××˜"×— ××™×•×ª×¨×•×ª, ×”×ª×©×œ×•× ×™×‘×•×¦×¢ ×‘×”×¢×‘×¨×” ×‘× ×§××™×ª (××• ×”×¢×‘×¨×ª ×–×”"×‘) ×œ×—×©×‘×•×Ÿ ×”×¤×¨×•×™×§×˜:' 
                      : 'To save on clearing and currency exchange fees, payment will be made via bank transfer to the project account:'}
                  </p>
                  <div className="bg-white/80 border border-blue-200 rounded-xl p-4 mb-4">
                    <p className="font-bold text-blue-950 mb-2">
                      {lang === 'he' ? '×œ×”×¢×‘×¨×•×ª ×‘×ª×•×š ×™×©×¨××œ:' : 'For Local Transfers (Israel):'}
                    </p>
                    <ul className="list-disc list-inside space-y-1 font-medium text-blue-900">
                      <li>{lang === 'he' ? '×‘× ×§: 10 (×œ××•××™)' : 'Bank: 10 (Leumi)'}</li>
                      <li>{lang === 'he' ? '×¡× ×™×£: 680 (××•×“×™×¢×™×Ÿ)' : 'Branch: 680 (Modi\'in)'}</li>
                      <li>{lang === 'he' ? '××¡×¤×¨ ×—×©×‘×•×Ÿ: 4422472' : 'Account Number: 4422472'}</li>
                      <li>{lang === 'he' ? '×©× ×‘×¢×œ ×”×—×©×‘×•×Ÿ: ××™×œ ×’×¨× ×•×ª' : 'Account Name: Eyal Granot'}</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 border border-blue-200 rounded-xl p-4 mb-6">
                    <p className="font-extrabold text-blue-950 text-base mb-2">
                      {lang === 'he' ? '×œ×”×¢×‘×¨×•×ª ×‘×™× ×œ××•××™×•×ª:' : 'For International Transfers:'}
                    </p>
                    <ul className="list-disc list-inside space-y-1 font-medium text-blue-900">
                      <li>
                        <strong>IBAN:</strong>{' '}
                        <span className="font-mono font-bold tracking-wide select-all text-blue-950">IL56 0106 8000 0000 4422 472</span>
                      </li>
                      <li>
                        <strong>SWIFT / BIC:</strong>{' '}
                        <span className="font-mono font-bold select-all text-blue-950">LUMIILIT</span>
                      </li>
                      <li>
                        {lang === 'he' ? '×‘× ×§: ×‘× ×§ ×œ××•××™ ×œ×™×©×¨××œ ×‘×¢"×' : 'Bank: Bank Leumi Le-Israel B.M.'}
                      </li>
                      <li>
                        {lang === 'he' ? '×©× ×”××•×˜×‘: ××™×œ ×’×¨× ×•×ª' : 'Beneficiary Name: Eyal Granot'}
                      </li>
                    </ul>
                  </div>

                  <p className="font-bold text-blue-900 mb-2">{lang === 'he' ? '×©×§×™×¤×•×ª ×¤×™× × ×¡×™×ª ×•×¤×™×¦×•×œ ×§×‘×œ×•×ª:' : 'Financial Transparency & Split Invoicing:'}</p>
                  <p className="mb-3">
                    {lang === 'he' 
                      ? '×”××•×“×œ ×©×œ× ×• ×‘× ×•×™ ×¢×œ ×©×§×™×¤×•×ª ××œ××”. ×××—×¨ ×©×¨×•×‘ ×”×›×¡×£ ×©××ª×Ÿ ××©×œ××•×ª ××™× ×• × ×©××¨ ××¦×œ× ×•, ××œ× ××•×¢×‘×¨ ×™×©×™×¨×•×ª ×œ×¡×¤×§×™ ×”×§×¨×§×¢ ×‘×—×•"×œ (×‘×ª×™ ××œ×•×Ÿ, ××•×˜×•×‘×•×¡×™×, ××˜×¨×§×¦×™×•×ª ×•×›×“×•××”), ×× ×• ×¤×•×¢×œ×™× ×‘××•×“×œ ×©×œ ×›×¡×¤×™ × ××× ×•×ª. ×œ×›×Ÿ, ×œ××—×¨ ×‘×™×¦×•×¢ ×”×ª×©×œ×•×, ×ª×•×¤×§× ×” ×¢×‘×•×¨×›×Ÿ ×©×ª×™ ×§×‘×œ×•×ª × ×¤×¨×“×•×ª:' 
                      : 'Our model is built on full transparency. Since most of the money does not stay with us but is transferred directly to ground suppliers abroad (hotels, buses, attractions, etc.), we operate on a trust fund model. Therefore, after payment, two separate receipts will be issued:'}
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>{lang === 'he' ? '×§×‘×œ×ª ×¤×™×§×“×•×Ÿ: ' : 'Deposit Receipt: '}</strong> {lang === 'he' ? '×¢×œ ×”×—×œ×§ ×”××¨×™ ×©×œ ×”×ª×©×œ×•×, ××©×¨ ×¢×•×‘×¨ ×“×¨×›× ×• ×›\"×¦×™× ×•×¨\" ×•××™×•×¢×“ ×‘××œ×•××• ×œ×ª×©×œ×•× ×œ×¡×¤×§×™× ×‘×¡×¨×™ ×œ× ×§×”.' : 'For the main part of the payment, which passes through us and is fully intended for suppliers in Sri Lanka.'}</li>
                    <li><strong>{lang === 'he' ? '×§×‘×œ×” ×¨×’×™×œ×”: ' : 'Standard Invoice: '}</strong> {lang === 'he' ? '×¢×œ ×”×—×œ×§ ×”××”×•×•×” ××ª ×”×ª××•×¨×” ×”×™×©×™×¨×” ×©×œ× ×• ×‘×’×™×Ÿ ×”××¨×’×•×Ÿ, ×”×œ×™×•×•×™ ×•×”×”×“×¨×›×”.' : 'For the part that constitutes our direct remuneration for organization, accompaniment, and guidance.'}</li>
                  </ol>
                </div>

                {/* Notice Banner about reservation upon actual payment */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-sm flex items-start gap-3 shadow-sm">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <strong className="font-bold block mb-0.5">
                      {lang === 'he' ? '×œ×ª×©×•××ª ×œ×‘×›×Ÿ:' : 'Important Notice:'}
                    </strong>
                    <span>
                      {lang === 'he' 
                        ? '×”××§×•× ×‘××¡×¢ ××™× ×• ××©×•×¨×™×™×Ÿ ×¢×“ ×©×œ× ××ª×‘×¦×¢ ×ª×©×œ×•× ×‘×¤×•×¢×œ ×•×§×‘×œ×ª ××¡××›×ª×. ×‘××¤×©×¨×•×ª×›×Ÿ ×œ×©×œ×•×— ××ª ×”×˜×•×¤×¡ ×”××œ× ×›×¢×ª ×•×œ×”×¡×“×™×¨ ××ª ×”×ª×©×œ×•× ×‘×”××©×š.' 
                        : 'Your spot on the journey is not reserved until actual payment is completed and confirmed. You may submit the full form now and settle payment later.'}
                    </span>
                  </div>
                </div>

                {/* File Upload Box */}
                <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4 mt-6">
                  <h4 className="text-lg font-bold text-teal-900">
                    {lang === 'he' ? '×¦×™×¨×•×£ ××¡××›×ª×ª ×”×¢×‘×¨×” ×‘× ×§××™×ª' : 'Attach Bank Transfer Reference'}
                  </h4>
                  <p className="text-stone-600 text-sm">
                    {lang === 'he' 
                      ? '×œ××—×¨ ×‘×™×¦×•×¢ ×”×”×¢×‘×¨×”, ×× × ×¦×¨×¤×• ×›××Ÿ ××ª ××™×©×•×¨ ×”×”×¢×‘×¨×” (×§×•×‘×¥ PDF ××• ×¦×™×œ×•× ××¡×š) ×›×“×™ ×©× ×•×›×œ ×œ××©×¨ ××ª ×”×¨×©××ª×›×.' 
                      : 'After completing the transfer, please attach the confirmation (PDF or screenshot) so we can approve your registration.'}
                  </p>
                  
                  {!paymentFile ? (
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-stone-300 rounded-2xl p-6 hover:bg-stone-100 hover:border-teal-500 transition-all cursor-pointer group">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <svg className="w-10 h-10 text-stone-400 group-hover:text-teal-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <span className="font-bold text-stone-700 group-hover:text-teal-600">
                          {lang === 'he' ? '×œ×—×¦×• ×œ×‘×—×™×¨×ª ×§×•×‘×¥ ××• ×’×¨×¨×• ×œ×›××Ÿ' : 'Click to select file or drag here'}
                        </span>
                        <span className="text-xs text-stone-500">
                          {lang === 'he' ? '×¤×•×¨××˜×™× × ×ª××›×™×: PDF, PNG, JPG (×¢×“ 5MB)' : 'Supported formats: PDF, PNG, JPG (up to 5MB)'}
                        </span>
                      </div>
                      <input type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden" onChange={handleFileChange} />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        <div className="min-w-0">
                          <p className="font-bold text-teal-900 truncate max-w-[200px] sm:max-w-xs">{paymentFile.name}</p>
                          <p className="text-xs text-teal-600">{(paymentFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button onClick={handleRemoveFile} type="button" className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  )}

                  {paymentError && (
                    <p className="text-red-500 text-sm font-medium">{paymentError}</p>
                  )}
                </div>

                <button 
                  disabled={isUploadingPayment} 
                  onClick={handleStep3Click} 
                  className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all mt-6 flex justify-center items-center gap-2 cursor-pointer ${isUploadingPayment ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isUploadingPayment ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white shrink-0" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {lang === 'he' ? '×©×•×œ×— × ×ª×•× ×™×...' : 'Sending Data...'}
                    </>
                  ) : paymentFile ? (
                    lang === 'he' ? '×©×œ×— ××¡××›×ª× ×•×¡×™×™× ×”×¨×©××”' : 'Send Reference & Complete Registration'
                  ) : (
                    lang === 'he' ? '×¡×™×•× ×”×¨×©××” (×œ×œ× ××¡××›×ª× ×›×¢×ª)' : 'Complete Registration (Without Reference Now)'
                  )}
                </button>
              </div>
            )}

            {/* Warning Modal when completing without payment */}
            {showNoPaymentModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" dir={lang === 'he' ? 'rtl' : 'ltr'}>
                <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-100 text-stone-800 space-y-6 animate-in zoom-in-95 duration-200 text-start">
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      {lang === 'he' ? '×©×™××™ ×œ×‘: ×”××§×•× ××™× ×• ××©×•×¨×™×™×Ÿ ×¢×“×™×™×Ÿ' : 'Please Note: Spot Not Reserved Yet'}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {lang === 'he' 
                        ? '×›×œ ×¤×¨×˜×™ ×”×”×¨×©××”, ×”×—×ª×™××” ×•×”×©××œ×•× ×™× ×©××™×œ××ª ×™×™×©×œ×—×• ××œ×™× ×• ×‘××œ×•××. ×™×—×“ ×¢× ×–××ª, ×—×©×•×‘ ×œ×”×“×’×™×© ×›×™ ×”××§×•× ×‘××¡×¢ ××™× ×• ××•×‘×˜×— ××• ××©×•×¨×™×™×Ÿ ×¢×“ ×©×œ× ××ª×‘×¦×¢ ×ª×©×œ×•× ×‘×¤×•×¢×œ.' 
                        : 'All registration details, signatures, and questionnaires will be sent to us in full. However, please note that your spot on the journey is not reserved until actual payment is completed.'}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      disabled={isUploadingPayment}
                      onClick={() => executeStep3Submit(false)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isUploadingPayment ? (
                        <span>{lang === 'he' ? '×©×•×œ×— × ×ª×•× ×™×...' : 'Submitting...'}</span>
                      ) : (
                        lang === 'he' ? '×”×‘× ×ª×™, ×¡×™×•× ×•×©×œ×™×—×ª ×”×˜×•×¤×¡ ×”××œ×' : 'I Understand, Submit Full Form'
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowNoPaymentModal(false)}
                      className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-3 px-4 rounded-xl transition-all cursor-pointer"
                    >
                      {lang === 'he' ? '×—×–×¨×” ×œ×”×¢×œ××ª ××¡××›×ª×' : 'Back to Upload Reference'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Success Screen */}
            {step === 4 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-teal-900"><EditableText path={`${lang}.register.form.success_title`} text={t.register.form.success_title} /></h3>
                <p className="text-stone-600"><EditableText path={`${lang}.register.form.success_desc`} text={t.register.form.success_desc} /></p>

                {submittedWithoutFile && (
                  <div className="max-w-md w-full bg-amber-50 border border-amber-300 rounded-2xl p-4 text-amber-950 text-sm text-start flex items-start gap-3 my-2">
                    <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p className="font-bold">
                        {lang === 'he' ? '×˜×•×¤×¡ ×”×”×¨×©××” ×”××œ× × ×§×œ×˜ ×‘×”×¦×œ×—×”!' : 'Full Registration Form Received!'}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-amber-900">
                        {lang === 'he' 
                          ? '×›×œ ×¤×¨×˜×™ ×”×”×¨×©××”, ×”×—×ª×™××” ×•×”×©××œ×•× ×™× × ×©××¨×• ×‘××œ×•××. × ×–×›×™×¨ ×›×™ ×”××§×•× ××™× ×• ××©×•×¨×™×™×Ÿ ×¢×“ ×œ×”×¡×“×¨×ª ×”×ª×©×œ×•× ×‘×¤×•×¢×œ ×•×”×¢×‘×¨×ª ××¡××›×ª×.' 
                          : 'All registration details, signatures, and forms were saved in full. Please note that your spot is not reserved until payment is completed and confirmed.'}
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="py-6 flex flex-col gap-6 w-full max-w-md mx-auto">
                  {/* WhatsApp Block */}
                  <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1 relative z-10">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
                    </svg>
                    <span dir={lang === 'he' ? 'rtl' : 'ltr'}>
                      {lang === 'he' ? '×”×¦×˜×¨×¤×• ×œ×§×‘×•×¦×ª ×”×•×•××¦××¤ ×©×œ× ×•!' : 'Join our WhatsApp Group!'}
                    </span>
                  </a>
                </div>

                <button onClick={() => window.location.reload()} className="mt-4 text-stone-500 font-medium hover:text-stone-800 transition-colors cursor-pointer">
                  <EditableText path={`${lang}.register.form.success_btn`} text={t.register.form.success_btn} />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-20 text-center text-teal-900 bg-stone-50 min-h-screen flex items-center justify-center font-serif text-2xl font-bold">
        Loading Registration Details... / ×˜×•×¢×Ÿ ×¤×¨×˜×™ ×”×¨×©××”...
      </div>
    }>
      <RegisterFormContent />
    </Suspense>
  );
}

```

## ×§×•×‘×¥: ./app/api/calendar/route.js
```
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const HEBREW_EVENT_ID = '2rj8sfsdbka3adgvhp3jvoovt2';
const ENGLISH_EVENT_ID = '0pfp03a1navjk3jp15e0v2c5u9';
const CALENDAR_ID = 'srilankasavtot@gmail.com';

export async function POST(req) {
  try {
    const { email, lang } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Default to Hebrew event if language is not English
    const eventId = lang === 'en' ? ENGLISH_EVENT_ID : HEBREW_EVENT_ID;

    // We assume the service account credentials are in environment variables
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    if (!clientEmail || !privateKey) {
       console.error("Missing Google Service Account credentials in environment variables.");
       return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    
    // Format private key (replace literal \n with actual newlines if necessary)
    privateKey = privateKey.replace(/\\n/g, '\n');

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/calendar.events'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Fetch the existing event to get current attendees
    const event = await calendar.events.get({
      calendarId: CALENDAR_ID,
      eventId: eventId,
    });

    const currentAttendees = event.data.attendees || [];
    
    // Check if user is already an attendee
    const alreadyAttending = currentAttendees.some(a => a.email === email);
    
    if (!alreadyAttending) {
      // Add the new attendee
      const updatedAttendees = [...currentAttendees, { email }];
      
      // Update the event with sendUpdates: 'all'
      await calendar.events.patch({
        calendarId: CALENDAR_ID,
        eventId: eventId,
        sendUpdates: 'all',
        requestBody: {
          attendees: updatedAttendees,
        },
      });
    }

    return NextResponse.json({ success: true, message: 'Invitation sent' });
  } catch (error) {
    console.error('Calendar API Error:', error);
    return NextResponse.json({ error: 'Failed to send calendar invitation' }, { status: 500 });
  }
}

```

## ×§×•×‘×¥: ./app/api/chat/route.js
```
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { sanitizePrompt } from '../../../utils/sanitizePrompt.js';
import { rateLimiter } from '../../../utils/rateLimiter.js';
import { logger } from '../../../utils/logger.js';
import { htmlEscape } from '../../../utils/htmlEscape.js';

export async function POST(req) {
  // Rate limiting
  const rateLimitResult = await rateLimiter.check(req);
  if (rateLimitResult !== true) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  // Enforce payload size limit (2 KB)
  const contentLength = parseInt(req.headers.get('content-length') || '0', 10);
  if (contentLength > 2048) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
  }
  try {
    const { prompt, systemInstruction } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key is not configured.' }, { status: 500 });
    }

    // Reject userâ€‘provided systemInstruction unless admin token is present
    const adminToken = req.headers.get('x-admin-token');
    if (systemInstruction && adminToken !== process.env.ADMIN_API_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized system instruction' }, { status: 403 });
    }

    // Sanitize prompt to prevent injection
    const safePrompt = sanitizePrompt(prompt);
    if (!safePrompt.valid) {
      return NextResponse.json({ error: safePrompt.error }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-preview-09-2025",
      systemInstruction: systemInstruction || undefined,
    });

    const result = await model.generateContent(safePrompt.cleaned);
    const text = result.response.text();

    // Escape the model output before sending to client
    const escaped = htmlEscape(text);
    return NextResponse.json({ reply: escaped });
  } catch (error) {
    logger.error('Chat API Error:', error);
    return NextResponse.json({ error: "Failed to communicate with AI" }, { status: 500 });
  }
}

```

## ×§×•×‘×¥: ./app/api/content/route.js
```
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '../../../lib/firebaseAdmin';

// Default content fallback if Firestore is empty or not configured yet
import { defaultContentData } from '../../../contexts/SiteContext';

export const dynamic = 'force-dynamic';

const USE_FIREBASE = true; // Set to true when you want to reconnect Firebase

export async function GET() {
  try {
    const cleanDefaultData = JSON.parse(JSON.stringify(defaultContentData));

    // If Firebase env vars are missing or disabled, return default content locally (so the site doesn't crash)
    if (!USE_FIREBASE || !process.env.FIREBASE_PROJECT_ID) {
      console.warn("Firebase is temporarily disconnected. Returning default content.");
      return NextResponse.json(cleanDefaultData);
    }

    const doc = await db.collection('settings').doc('content_v3').get();
    
    if (!doc.exists) {
      // Initialize with default if it doesn't exist
      await db.collection('settings').doc('content_v3').set(cleanDefaultData);
      return NextResponse.json(cleanDefaultData);
    }

    return NextResponse.json(doc.data());
  } catch (error) {
    console.error("Error reading content:", error);
    try {
      const cleanDefaultData = JSON.parse(JSON.stringify(defaultContentData));
      return NextResponse.json(cleanDefaultData); // Fallback
    } catch (e) {
      return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
    }
  }
}

export async function POST(req) {
  try {
    // Authenticate
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token || token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { path: fieldPath, newValue } = await req.json();
    
    if (!USE_FIREBASE || !process.env.FIREBASE_PROJECT_ID) {
      return NextResponse.json({ error: "Firebase is temporarily disconnected" }, { status: 500 });
    }

    // Read current
    const docRef = db.collection('settings').doc('content_v3');
    const doc = await docRef.get();
    let content = doc.exists ? doc.data() : JSON.parse(JSON.stringify(defaultContentData));

    // Update path
    const keys = fieldPath.split('.');
    let current = content;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = newValue;

    // Save
    await docRef.set(content);

    return NextResponse.json({ success: true, content });
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}

```

## ×§×•×‘×¥: ./app/api/logout/route.js
```
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  return NextResponse.json({ success: true, message: "Logged out" });
}

```

## ×§×•×‘×¥: ./app/api/register/route.js
```
import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebaseAdmin';

const USE_FIREBASE = false; // Set to true when you want to reconnect Firebase

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Honeypot check - bots often fill hidden fields
    if (data.website_url) {
      console.log("Bot detected by honeypot field");
      return NextResponse.json({ success: true, message: "Registration saved successfully" }); // Fake success for bots
    }
    
    const { website_url, ...cleanData } = data;
    
    const newRegistration = {
      ...cleanData,
      timestamp: new Date().toISOString()
    };

    if (USE_FIREBASE && process.env.FIREBASE_PROJECT_ID) {
      await db.collection('registrations').add(newRegistration);
    } else {
      console.warn("Firebase is temporarily disconnected. Registration not saved permanently.");
    }

    return NextResponse.json({ success: true, message: "Registration saved successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Failed to save registration" }, { status: 500 });
  }
}

```

## ×§×•×‘×¥: ./app/api/login/route.js
```
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { comparePassword } from '../../../utils/passwordHash.js';
import { rateLimiter } from '../../../utils/rateLimiter.js';
import { logger } from '../../../utils/logger.js';

export async function POST(req) {
  // Rate limiting
  const allowed = await rateLimiter.check(req);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const { password } = await req.json();
    const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

    if (!ADMIN_PASSWORD_HASH) {
      logger.error('ADMIN_PASSWORD_HASH environment variable is not set');
      return NextResponse.json({ success: false, message: 'Server misconfiguration: admin password hash not set' }, { status: 500 });
    }

    const passwordMatches = comparePassword(password, ADMIN_PASSWORD_HASH);

    if (passwordMatches) {
      // Set secure HttpOnly cookie for 30 days
      const cookieStore = await cookies();
      cookieStore.set('admin_token', password, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      });
      return NextResponse.json({ success: true, message: 'Logged in' });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
    }
  } catch (error) {
    logger.error('Login error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

```

## ×§×•×‘×¥: ./app/api/email/route.js
```
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const { email, name, phone, guests, notes, file, lang, season, digitalSignature, healthQ } = body;

  if (!email || !name) {
    return NextResponse.json({ error: 'Email and Name are required' }, { status: 400 });
  }

  const hasFullForm = !!digitalSignature?.fullName;
  const hasFile = !!file;
  const registrationStatus = hasFile 
    ? 'Complete' 
    : (hasFullForm ? 'Full Form (Pending Payment)' : 'Partial (Step 1)');

  // --- 1. SUPABASE (SQL DATABASE) INTEGRATION ---
  let supabaseStatus = "not_attempted";
  try {
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient: createSupabaseClient } = await import('@supabase/supabase-js');
      const supabase = createSupabaseClient(supabaseUrl, supabaseKey);

      const { error: sbError } = await supabase.from('registrations').insert([
        {
          status: registrationStatus,
          name: name || '',
          email: email || '',
          phone: phone || '',
          season: season || 'summer',
          guests: parseInt(guests) || 1,
          notes: notes || '',
          lang: lang || 'he',
          full_name_passport: digitalSignature?.fullName || null,
          id_number: digitalSignature?.idNumber || null,
          birth_date: digitalSignature?.birthDate || null,
          signature_date: digitalSignature?.date || null,
          emergency_name: digitalSignature?.emergencyName || null,
          emergency_relation: digitalSignature?.emergencyRelation || null,
          emergency_phone: digitalSignature?.emergencyPhone || null,
          health_chronic: healthQ?.q1?.answer === 'yes' ? `Yes - ${healthQ.q1.details}` : (healthQ?.q1?.answer || null),
          health_medications: healthQ?.q2?.answer === 'yes' ? `Yes - ${healthQ.q2.details}` : (healthQ?.q2?.answer || null),
          health_allergies: healthQ?.q3?.answer === 'yes' ? `Yes - ${healthQ.q3.details}` : (healthQ?.q3?.answer || null),
          health_limitations: healthQ?.q4?.answer === 'yes' ? `Yes - ${healthQ.q4.details}` : (healthQ?.q4?.answer || null),
          health_notes: healthQ?.q5?.answer === 'yes' ? `Yes - ${healthQ.q5.details}` : (healthQ?.q5?.answer || null),
          payment_file_name: file?.name || null
        }
      ]);

      if (sbError) {
        console.warn('Supabase Insert Note:', sbError.message);
        supabaseStatus = "error: " + sbError.message;
      } else {
        supabaseStatus = "success";
      }
    }
  } catch (sbErr) {
    console.warn('Supabase Error:', sbErr);
    supabaseStatus = "error";
  }

  // --- 3. EMAIL INTEGRATION ---
  try {
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Missing Gmail credentials in environment variables.");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const isHebrew = lang !== 'en';
    const seasonTextHe = season === 'winter' ? '×—×•×¨×£ (×¤×‘×¨×•××¨) 2027' : '×§×™×¥ 2027';
    const seasonTextEn = season === 'winter' ? 'Winter (February) 2027' : 'Summer 2027';

    // Registrant Email
    const registrantSubject = isHebrew 
      ? (hasFile 
          ? `××™×©×•×¨ ×”×¨×©××” ×•×§×‘×œ×ª ××¡××›×ª× - ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×” (${seasonTextHe})` 
          : (hasFullForm 
              ? `×§×‘×œ×ª ×¤×¨×˜×™ ×”×¨×©××” (×˜×¨× ×”×•×¡×“×¨ ×ª×©×œ×•×) - ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×” (${seasonTextHe})`
              : `××™×©×•×¨ ×§×‘×œ×ª ×¤× ×™×™×” - ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×” (${seasonTextHe})`))
      : (hasFile
          ? `Registration & Payment Confirmation - Savtot in Sri Lanka (${seasonTextEn})`
          : (hasFullForm
              ? `Registration Received (Payment Pending) - Savtot in Sri Lanka (${seasonTextEn})`
              : `Registration Inquiry Received - Savtot in Sri Lanka (${seasonTextEn})`));

    const greeting = name ? (isHebrew ? `×”×™×™ ${name},` : `Hi ${name},`) : (isHebrew ? '×©×œ×•×,' : 'Hello,');

    const registrantHtml = isHebrew ? `
      <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">×ª×•×“×” ×©× ×¨×©××ª×! ğŸ‰</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">${greeting}</p>
          ${hasFile ? `
            <p style="font-size: 16px;">×× ×• ×©××—×™× ×œ××©×¨ ×©×§×™×‘×œ× ×• ××ª ×¤×¨×˜×™ ×”×”×¨×©××” ×©×œ×š ×œ×˜×™×•×œ ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×” - <strong>××—×–×•×¨ ${seasonTextHe}</strong>, ×›×•×œ×œ ××¡××›×ª×ª ×”×ª×©×œ×•× (<strong>${file.name}</strong>).</p>
            <p style="font-size: 16px;">×× ×• × ×‘×“×•×§ ××ª ×”××¡××›×ª× ×•× ××©×¨ ××ª ×”×¨×™×©×•× ×”×¡×•×¤×™ ×©×œ×š ×‘×”×§×“× ×”××¤×©×¨×™. ×¢×•×ª×§ ×©×œ ×”××¡××›×ª× ×©×©×œ×—×ª ××¦×•×¨×£ ×œ××™×™×œ ×–×”.</p>
          ` : (hasFullForm ? `
            <p style="font-size: 16px;">×× ×• ×©××—×™× ×œ××©×¨ ×©×§×™×‘×œ× ×• ××ª ×˜×•×¤×¡ ×”×”×¨×©××” ×”××œ× ×©×œ×š ×œ×˜×™×•×œ ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×” - <strong>××—×–×•×¨ ${seasonTextHe}</strong>.</p>
            <div style="background-color: #fff7ed; border: 1px solid #f97316; border-radius: 8px; padding: 14px; margin: 18px 0; color: #9a3412;">
              <strong style="font-size: 16px;">âš ï¸ ×œ×ª×©×•××ª ×œ×‘×š:</strong><br>
              ×”××§×•× ×‘××¡×¢ ××™× ×• ××©×•×¨×™×™×Ÿ ×¢×“ ×©×œ× ××ª×‘×¦×¢ ×ª×©×œ×•× ×‘×¤×•×¢×œ ×•×§×‘×œ×ª ××¡××›×ª×.
            </div>
            <p style="font-size: 15px;">×›×œ ×¤×¨×˜×™ ×”×˜×•×¤×¡, ×”×—×ª×™××” ×•×”×©××œ×•×Ÿ × ×§×œ×˜×• ×‘×”×¦×œ×—×”. ×›×“×™ ×œ×©×¨×™×™×Ÿ ××ª ××§×•××š ×‘××¡×¢, ×× × ×”×©×œ×™××™ ××ª ×‘×™×¦×•×¢ ×”×”×¢×‘×¨×” ×”×‘× ×§××™×ª ×‘×”×§×“× ×œ×¤×™ ×¤×¨×˜×™ ×”×—×©×‘×•×Ÿ ×”××•×¤×™×¢×™× ×‘××ª×¨.</p>
          ` : `
            <p style="font-size: 16px;">×ª×•×“×” ×©×”×ª×—×œ×ª ××ª ×ª×”×œ×™×š ×”×”×¨×©××” ×œ××¡×¢ ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×” - <strong>××—×–×•×¨ ${seasonTextHe}</strong>.</p>
            <p style="font-size: 15px;">× ×©××— ×œ×¢××•×“ ×œ×¨×©×•×ª×š ×‘×›×œ ×©××œ×” ×›×“×™ ×œ×¡×™×™×¢ ×‘×”×©×œ××ª ×”×”×¨×©××”.</p>
          `)}
          <p style="font-size: 16px;">×× ×• × ×©×œ×— ×¤×¨×˜×™× ×•×¢×“×›×•× ×™× × ×•×¡×¤×™× ×‘××™×™×œ, ×•×›××•×‘×Ÿ ×’× ×‘×§×‘×•×¦×ª ×”×•×•××¦××¤ ×‘×” ×× ×—× ×• ××¢×“×›× ×™× ×¢×œ ×”×›×œ ×‘×–××Ÿ ×××ª.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">×”×¦×˜×¨×¤×• ×œ×§×‘×•×¦×ª ×”×•×•××¦××¤ ×œ×¢×“×›×•× ×™×</a>
          </div>
          <p style="font-size: 16px;">× ×ª×¨××” ×‘×§×¨×•×‘,<br>×¦×•×•×ª ×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×”</p>
        </div>
      </div>
    ` : `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank you for registering! ğŸ‰</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">${greeting}</p>
          ${hasFile ? `
            <p style="font-size: 16px;">We are excited to confirm we have received your registration details for the Savtot in Sri Lanka - <strong>${seasonTextEn}</strong> trip, along with your payment reference (<strong>${file.name}</strong>).</p>
            <p style="font-size: 16px;">We will verify it and confirm your final registration as soon as possible. A copy of the reference you sent is attached to this email.</p>
          ` : (hasFullForm ? `
            <p style="font-size: 16px;">We are pleased to confirm receipt of your full registration form for the Savtot in Sri Lanka trip - <strong>${seasonTextEn}</strong>.</p>
            <div style="background-color: #fff7ed; border: 1px solid #f97316; border-radius: 8px; padding: 14px; margin: 18px 0; color: #9a3412;">
              <strong style="font-size: 16px;">âš ï¸ Please Note:</strong><br>
              Your spot on the journey is not reserved until actual payment is completed and confirmed.
            </div>
            <p style="font-size: 15px;">All details, signatures, and questionnaire answers were successfully received. To secure your spot on the trip, please complete the bank transfer as specified on the website.</p>
          ` : `
            <p style="font-size: 16px;">Thank you for starting your registration for Savtot in Sri Lanka - <strong>${seasonTextEn}</strong>.</p>
            <p style="font-size: 15px;">We are available for any questions you may have to help you complete the registration.</p>
          `)}
          <p style="font-size: 16px;">We will send all the details and updates via email, and of course in our WhatsApp group where we post real-time updates.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">Join WhatsApp Group</a>
          </div>
          <p style="font-size: 16px;">See you soon,<br>Savtot in Sri Lanka Team</p>
        </div>
      </div>
    `;

    // Format Health Q answers
    let healthHtml = '';
    if (healthQ) {
      const qText = {
        q1: '××—×œ×•×ª ×›×¨×•× ×™×•×ª?',
        q2: '×ª×¨×•×¤×•×ª ××¨×©×?',
        q3: '××œ×¨×’×™×•×ª?',
        q4: '××’×‘×œ×•×ª ×¤×™×–×™×•×ª?',
        q5: '××™×“×¢ × ×•×¡×£?'
      };
      healthHtml = Object.keys(healthQ).map(key => {
        const val = healthQ[key];
        return `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 40%;">${qText[key]}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${val.answer === 'yes' ? '×›×Ÿ' : '×œ×'} ${val.details ? '- ' + val.details : ''}</td>
          </tr>
        `;
      }).join('');
    }

    // Admin Email
    const adminSubject = hasFile
      ? `×”×¨×©××” ×—×“×©×” ××œ××” (×©×•×œ××” ××¡××›×ª×) (${seasonTextHe}): ${name}`
      : (hasFullForm
          ? `×”×¨×©××” ×—×“×©×” - ×˜×•×¤×¡ ××œ× (×˜×¨× ×”×•×¡×“×¨ ×ª×©×œ×•×) (${seasonTextHe}): ${name}`
          : `×œ×™×“ ×—×“×© / ×”×ª×—×œ×ª ×”×¨×©××” ×©×œ×‘ 1 (${seasonTextHe}): ${name}`);

    const adminHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #0f766e;">×§×™×‘×œ×ª× ×”×¨×©××” ×—×“×©×” ××”××ª×¨! ğŸ‰</h2>
        <p>×œ×”×œ×Ÿ ×¤×¨×˜×™ ×”× ×¨×©××ª ×•×˜×•×¤×¡ ×”×”×¨×©××”${hasFullForm ? ' (×›×•×œ×œ ×”×¦×”×¨×ª ×‘×¨×™××•×ª ×•×¤×¨×˜×™ ×—×™×¨×•×)' : ''}:</p>

        ${hasFullForm && !hasFile ? `
        <div style="margin-bottom: 20px; padding: 14px 18px; background-color: #fff7ed; border: 2px solid #f97316; border-radius: 8px; color: #9a3412;">
          <strong style="font-size: 16px;">âš ï¸ ×©×™××• ×œ×‘: × ×©×œ×— ×˜×•×¤×¡ ×”×¨×©××” ××œ×, ××š ×˜×¨× ×”×•×¢×‘×¨×” ××¡××›×ª×ª ×ª×©×œ×•×!</strong>
          <p style="margin: 6px 0 0 0; font-size: 14px;">×”××©×ª×ª×¤×ª ××™×œ××” ××ª ×›×œ ×©×œ×‘ 2 (×—×ª×™××”, ×—×™×¨×•×, ×©××œ×•×Ÿ ×¨×¤×•××™). ×”××§×•× ××™× ×• ××©×•×¨×™×™×Ÿ ×¢×“ ×œ×”×¡×“×¨×ª ×”×ª×©×œ×•× ×‘×¤×•×¢×œ.</p>
        </div>
        ` : ''}
        
        <div style="margin-bottom: 12px; padding: 10px; background-color: ${supabaseStatus === 'success' ? '#e8f5e9' : '#fff3e0'}; border: 1px solid ${supabaseStatus === 'success' ? '#4caf50' : '#ff9800'}; border-radius: 5px;">
          <strong>×¡×˜×˜×•×¡ ××¡×“ × ×ª×•× ×™× SQL (Supabase):</strong> ${supabaseStatus === 'success' ? 'âœ… × ×©××¨ ×‘×”×¦×œ×—×” ×‘×˜×‘×œ×”' : 'âš ï¸ ' + supabaseStatus}
        </div>

        <h3 style="color: #0f766e; margin-top: 20px;">×¤×¨×˜×™× ×›×œ×œ×™×™×</h3>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">×©× ××œ× (×˜×•×¤×¡ ×›×œ×œ×™):</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×¢×•× ×” / ××—×–×•×¨:</td>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #c4704f;">${seasonTextHe}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×˜×œ×¤×•×Ÿ:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone || '-'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">××™××™×™×œ:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">××¡×¤×¨ ××©×ª×ª×¤×™×:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${guests || '1'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×”×¢×¨×•×ª:</td>
            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${notes || '××™×Ÿ ×”×¢×¨×•×ª'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×©× ×§×•×‘×¥ ××¡××›×ª×:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${file ? file.name : '×œ× ×¦×•×¨×£ ×§×•×‘×¥!'}</td>
          </tr>
        </table>

        ${digitalSignature ? `
        <h3 style="color: #0f766e; margin-top: 30px;">×¤×¨×˜×™ ×—×ª×™××”, ×–×™×”×•×™ ×•×—×™×¨×•×</h3>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">×©× ×›×¤×™ ×©××•×¤×™×¢ ×‘×“×¨×›×•×Ÿ:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.fullName}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×ª×¢×•×“×ª ×–×”×•×ª / ×“×¨×›×•×Ÿ:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.idNumber}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×ª××¨×™×š ×œ×™×“×”:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.birthDate}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×ª××¨×™×š ×—×ª×™××”:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.date}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #fff3e0; font-weight: bold; color: #d84315;" colspan="2">××™×© ×§×©×¨ ×‘×—×™×¨×•×</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×©× ××™×© ×”×§×©×¨:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.emergencyName}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×§×¨×‘×”:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.emergencyRelation}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">×˜×œ×¤×•×Ÿ ×œ×—×™×¨×•×:</td><td style="padding: 10px; border: 1px solid #ddd;" dir="ltr">${digitalSignature.emergencyPhone}</td></tr>
        </table>
        ` : ''}

        ${healthHtml ? `
        <h3 style="color: #0f766e; margin-top: 30px;">×©××œ×•×Ÿ ×¨×¤×•××™ (×¡×•×“×™)</h3>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          ${healthHtml}
        </table>
        ` : ''}

        <p style="margin-top: 20px;">* ×”××©×ª×ª×¤×ª ××™×©×¨×” ××ª ×ª×§× ×•×Ÿ ×”×‘×™×˜×•×œ×™×, ×›×ª×‘ ×”×•×™×ª×•×¨ ×•×”×¦×”×¨×ª ×”×‘×¨×™××•×ª ×‘××œ×•××.</p>
        <p style="margin-top: 20px;">×§×•×‘×¥ ×”××¡××›×ª× ××¦×•×¨×£ ×œ×”×•×“×¢×” ×–×• (×× ×¦×•×¨×£).</p>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">×”×•×“×¢×” ×–×• × ×©×œ×—×” ××•×˜×•××˜×™×ª ×××¢×¨×›×ª ×”×”×¨×©××” ×‘××ª×¨ Savtot in Sri Lanka.</p>
      </div>
    `;

    const attachments = file ? [
      {
        filename: file.name,
        content: file.base64,
        encoding: 'base64',
        contentType: file.type
      }
    ] : [];

    // Send to registrant
    await transporter.sendMail({
      from: '"Savtot in Sri Lanka" <' + gmailUser + '>',
      to: email,
      subject: registrantSubject,
      html: registrantHtml,
      attachments
    });

    // Send to admin
    await transporter.sendMail({
      from: '"Savtot in Sri Lanka (System)" <' + gmailUser + '>',
      to: gmailUser,
      subject: adminSubject,
      html: adminHtml,
      replyTo: email,
      attachments
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully',
      supabaseStatus
    });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}

```

## ×§×•×‘×¥: ./app/api/upload/route.js
```
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { logger } from '../../../utils/logger.js';
import { rateLimiter } from '../../../utils/rateLimiter.js';

const CLOUD_NAME = 'dsgvsqnjp'; // Reverted to original account where all old images reside
// Unsigned upload preset â€” create this in Cloudinary dashboard:
// Settings â†’ Upload â†’ Upload Presets â†’ Add upload preset â†’ Signing Mode: Unsigned
// Name it: savtot_admin
const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET || 'savtot_admin';

export async function POST(req) {
  // Rate limiting
  const allowed = await rateLimiter.check(req);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  try {
    // Authenticate via admin token
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token || token !== process.env.ADMIN_API_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('image');
    const id = formData.get('id'); // e.g. "hero_bg", "gal_1"

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type and size (max 5â€¯MB)
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedMimes.includes(file.type)) {
      return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
    }
    const maxSize = 5 * 1024 * 1024; // 5â€¯MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large (max 5â€¯MB)' }, { status: 400 });
    }

    // Forward to Cloudinary unsigned upload
    const cloudinaryForm = new FormData();
    cloudinaryForm.append('file', file);
    cloudinaryForm.append('upload_preset', UPLOAD_PRESET);
    // Use the image ID as the public_id so it's predictable
    if (id) {
      cloudinaryForm.append('public_id', id);
    }

    const cloudinaryRes = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: cloudinaryForm,
      }
    );

    if (!cloudinaryRes.ok) {
      const err = await cloudinaryRes.text();
      logger.error('Cloudinary error:', err);
      return NextResponse.json({ error: 'Cloudinary upload failed', details: err }, { status: 500 });
    }

    const result = await cloudinaryRes.json();
    return NextResponse.json({
      success: true,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    logger.error('Upload Error:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}

```

## ×§×•×‘×¥: ./app/itinerary/page.jsx
```
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useSite } from '../../contexts/SiteContext';

export default function ItineraryRootPage() {
  const router = useRouter();
  const { lang } = useSite();

  return (
    <div className="pt-32 pb-20 min-h-screen" style={{ backgroundColor: '#faf7f2' }}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <div className="mb-16">
          <span className="font-serif italic text-lg md:text-xl font-medium text-[#c4704f] block mb-2">
            {lang === 'he' ? '×ª×•×›× ×™×ª ×”××¡×œ×•×œ×™× ×©×œ× ×•' : 'Our Itineraries'}
          </span>
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-4">
            {lang === 'he' ? '×‘×—×¨×• ××ª ×”××¡×¢ ×©×œ×›×Ÿ' : 'Choose Your Journey'}
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === 'he' 
              ? '×©× ×™ ××¡×œ×•×œ×™× ×™×™×—×•×“×™×™× ×©× ×ª×¤×¨×• ×‘××™×•×—×“ ×¢×‘×•×¨× ×•, ×‘×§×¦×‘ ×”× ×›×•×Ÿ ×•×‘×©×™× ×”×¤×™× ×•×§' 
              : 'Two unique itineraries tailored especially for us, at the perfect pace and with ultimate comfort.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Summer Card */}
          <div className="bg-white p-8 rounded-3xl border border-[#eaddcd] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[260px] text-start">
            <div>
              <span className="text-[#c4704f] font-serif italic text-sm md:text-base font-medium block mb-1">
                {lang === 'he' ? '×—×•×•×™×™×ª ×§×™×¥ ×—××”' : 'Warm Summer Vibe'}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                {lang === 'he' ? '××¡×¢ ×§×™×¥ 2027' : 'Summer 2027'}
              </h3>
              <p className="text-stone-600 text-sm mb-6 font-light leading-relaxed">
                {lang === 'he' 
                  ? "×’'×•× ×’×œ×™×, ××ª×¨×™× ××¤×•×¨×¡××™× ×•×—×•×¤×™× ××”×™×¤×™× ×‘×¢×•×œ× - ×¢×©×¨×” ×™××™× ×©×œ ×©××© ×•×”×¨×¤×ª×§×”." 
                  : 'Jungles, famous sites and some of the most beautiful beaches in the world - ten days of sun and adventure.'}
              </p>
            </div>
            <button 
              onClick={() => router.push('/itinerary/summer')}
              className="w-full bg-[#c4704f] hover:bg-[#b05d3d] text-white py-3 rounded-full font-bold text-sm tracking-wider transition-colors shadow-md cursor-pointer text-center"
            >
              {lang === 'he' ? '×œ××¡×œ×•×œ ×”×§×™×¥ â†' : 'Summer Itinerary â†’'}
            </button>
          </div>

          {/* Winter Card */}
          <div className="bg-white p-8 rounded-3xl border border-[#eaddcd] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[260px] text-start">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#8ca38f] font-serif italic text-sm md:text-base font-medium block">
                  {lang === 'he' ? '×‘×¨×™×—×” ×˜×¨×•×¤×™×ª ×‘×—×•×¨×£' : 'Tropical Winter Escape'}
                </span>
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#8ca38f] text-white shadow-xs">
                  {lang === 'he' ? '15-24 ×œ×¤×‘×¨×•××¨' : 'Feb 15-24'}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                {lang === 'he' ? '××¡×¢ ×—×•×¨×£ 2027' : 'Winter (February) 2027'}
              </h3>
              <p className="text-stone-600 text-sm mb-6 font-light leading-relaxed">
                {lang === 'he' 
                  ? '×§×¤×” ×‘×”×¨×™×, ×©×§×™×¢×•×ª ×‘×™× ×•×‘×¢×™×§×¨ ×”×¨×‘×” ×©××© - ×‘×¨×™×—×” ×—××™××” ×•××¨×’×™×¢×” ××”×§×•×¨.' 
                  : 'Coffee in the mountains, sunsets at sea and above all lots of sun - a warm and relaxing winter escape.'}
              </p>
            </div>
            <button 
              onClick={() => router.push('/itinerary/winter')}
              className="w-full bg-[#8ca38f] hover:bg-[#798e7c] text-white py-3 rounded-full font-bold text-sm tracking-wider transition-colors shadow-md cursor-pointer text-center"
            >
              {lang === 'he' ? '×œ××¡×œ×•×œ ×”×—×•×¨×£ â†' : 'Winter Itinerary â†’'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

```

## ×§×•×‘×¥: ./app/itinerary/[season]/page.jsx
```
'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Sun } from 'lucide-react';
import { useSite } from '../../../contexts/SiteContext';
import EditableText from '../../../components/EditableText';
import EditableImage from '../../../components/EditableImage';

export default function ItineraryPage() {
  const router = useRouter();
  const params = useParams();
  const { lang, t } = useSite();

  const season = params?.season === 'winter' ? 'winter' : 'summer';
  const itineraryData = t.itinerary[season] || t.itinerary.summer;
  const days = itineraryData?.days || [];

  const defaultImages = {
    summer: [
      '/home1.jpg', '/home2.jpg', '/home3.jpg', '/home4.jpg', '/home1.jpg',
      '/home2.jpg', '/home3.jpg', '/home4.jpg', '/home1.jpg', '/home2.jpg'
    ],
    winter: [
      '/home2.jpg', '/home3.jpg', '/home4.jpg', '/home1.jpg', '/home2.jpg',
      '/home3.jpg', '/home4.jpg', '/home1.jpg', '/home2.jpg'
    ]
  };

  const currentDefaultImages = defaultImages[season] || defaultImages.summer;
  const getImageId = (idx) => {
    if (season === 'winter') return `winter_day_${idx}`;
    if (idx === 8) return '10';
    if (idx === 7) return 'itinerary_day_8';
    return `itinerary_day_${idx}`;
  };

  return (
    <div className="pt-32 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className="font-serif italic text-lg md:text-xl font-medium block mb-2"
            style={{ color: season === 'winter' ? '#8ca38f' : '#c4704f' }}
          >
            {season === 'winter' 
              ? (lang === 'he' ? '××¡×¢ ×—×•×¨×£ 2027' : 'Winter Trip 2027') 
              : (lang === 'he' ? '××¡×¢ ×§×™×¥ 2027' : 'Summer Trip 2027')}
          </span>
          {season === 'winter' && (
            <div className="inline-block px-5 py-2 rounded-full text-sm md:text-base font-extrabold tracking-wider mb-6 shadow-md"
                 style={{ 
                   color: '#ffffff', 
                   backgroundColor: '#8ca38f' 
                 }}>
              {lang === 'he' ? '15-24 ×œ×¤×‘×¨×•××¨' : 'February 15-24'}
            </div>
          )}
          <h1 className="text-5xl font-serif font-bold text-teal-900 mb-4">
            <EditableText path={`${lang}.itinerary.title`} text={t.itinerary.title} />
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            <EditableText path={`${lang}.itinerary.subtitle`} text={t.itinerary.subtitle} />
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute start-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-100 rounded-full"></div>

          <div className="space-y-12">
            {days.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-stretch gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="w-full md:w-1/2 p-4 flex">
                  <div className="bg-white p-2 rounded-2xl shadow-lg transition-transform duration-300 w-full h-full flex flex-col">
                    <div className={`w-full rounded-xl overflow-hidden relative md:flex-1 h-[300px] md:h-auto md:min-h-[280px] max-h-[420px] isolation-isolate ${getImageId(index) === 'winter_day_0' ? 'bg-white' : 'bg-stone-200'}`} style={{ transform: 'translateZ(0)' }}>
                       <EditableImage 
                        id={getImageId(index)} 
                        src={getImageId(index)} 
                        fallback={currentDefaultImages[index] || '/home1.jpg'}
                        alt={item.title}
                        className="absolute inset-0"
                        imgClassName={getImageId(index) === 'winter_day_0' ? '!object-contain bg-white' : ''}
                        width={1000}
                        crop="fill"
                        priority={index <= 1}
                       />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-start p-6 bg-white rounded-2xl shadow-md border-s-4 border-e-0 relative flex flex-col justify-between" style={{ borderInlineStartColor: season === 'winter' ? '#8ca38f' : '#c4704f' }}>
                  <div className="absolute top-4 start-4 bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-sm">
                    {lang === 'he' ? `×™×•× ${item.day}` : `Day ${item.day}`}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-3 pt-8">
                    <EditableText path={`${lang}.itinerary.${season}.days.${index}.title`} text={item.title} />
                  </h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    <EditableText path={`${lang}.itinerary.${season}.days.${index}.desc`} text={item.desc} multiline />
                  </p>

                  {item.schedule && item.schedule.length > 0 && (
                    <details className="my-6 group border border-teal-100 bg-teal-50/30 rounded-xl overflow-hidden cursor-pointer">
                      <summary className="font-medium text-teal-800 px-4 py-3 bg-teal-100/50 hover:bg-teal-200/50 transition-colors flex justify-between items-center outline-none list-none">
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {lang === 'he' ? '×œ×•"×– ××¤×•×¨×˜' : 'Detailed Schedule'}
                        </span>
                        <span className="text-teal-600 group-open:rotate-180 transition-transform duration-300">
                          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </summary>
                      <div className="overflow-x-auto bg-white/40">
                        <table className="w-full text-sm text-start">
                          <thead className="text-teal-900 border-b border-teal-100/50 bg-teal-50/50">
                            <tr>
                              <th className="px-4 py-3 font-semibold">{t.itinerary.headers?.hour || 'Hour'}</th>
                              <th className="px-4 py-3 font-semibold">{t.itinerary.headers?.place || 'Place'}</th>
                              <th className="px-4 py-3 font-semibold">{t.itinerary.headers?.activity || 'Activity'}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-teal-100/30">
                            {item.schedule.map((row, rowIdx) => (
                              <tr key={rowIdx} className="hover:bg-white/80 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap font-medium text-teal-700" dir="ltr">{row.hour}</td>
                                <td className="px-4 py-3 text-stone-600">{row.place}</td>
                                <td className="px-4 py-3 text-stone-700">{row.activity}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  )}

                  <div className="flex items-center gap-2 font-medium justify-center md:justify-start" style={{ color: season === 'winter' ? '#798e7c' : '#c4704f' }}>
                    <Sun className="w-5 h-5" />
                    <span>{lang === 'he' ? '×”×™×™×œ×™×™×˜: ' : 'Highlight: '} <EditableText path={`${lang}.itinerary.${season}.days.${index}.highlight`} text={item.highlight} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-20 text-center bg-white rounded-3xl p-8 md:p-12 shadow-md max-w-3xl mx-auto border border-stone-100">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 mb-4">
            {lang === 'he' ? '××•×›× ×•×ª ×œ×¦××ª ×œ××¡×¢?' : 'Ready to start your adventure?'}
          </h3>
          <p className="text-stone-600 mb-8 max-w-lg mx-auto font-light leading-relaxed">
            {lang === 'he'
              ? '××¡×¤×¨ ×”××§×•××•×ª ××•×’×‘×œ ×œ-16 ××©×ª×ª×¤×•×ª ×‘×œ×‘×“ ×›×“×™ ×œ×”×‘×˜×™×— ×™×—×¡ ××™×©×™ ×•×—×•×•×™×” ××™× ×˜×™××™×ª. ×©×¨×™×™× ×™ ××ª ××§×•××š ×¢×•×“ ×”×™×•×!'
              : 'Spots are limited to 16 participants to ensure a personal and intimate experience. Secure your spot today!'}
          </p>
          <button
            onClick={() => router.push(`/register?season=${season}`)}
            className="text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: season === 'winter' ? '#8ca38f' : '#c4704f' }}
          >
            {lang === 'he' ? '×œ×”×¨×©××” ×œ××¡×¢ â†' : 'Register for the Trip â†’'}
          </button>
        </div>
      </div>
    </div>
  );
}

```

## ×§×•×‘×¥: ./app/essentials/page.jsx
```
'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';

export default function EssentialsPage() {
  const { lang, t } = useSite();

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-teal-900 mb-4">
            <EditableText path={`${lang}.essentials.title`} text={t.essentials.title} />
          </h1>
          <p className="text-xl text-stone-600">
            <EditableText path={`${lang}.essentials.subtitle`} text={t.essentials.subtitle} />
          </p>
        </div>

        <div className="space-y-6">
          {t.essentials.categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                <EditableText path={`${lang}.essentials.categories.${idx}.title`} text={cat.title} />
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-stone-700">
                      <EditableText path={`${lang}.essentials.categories.${idx}.items.${i}`} text={item} multiline />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

```

## ×§×•×‘×¥: ./app/globals.css
```
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Lato:wght@300;400;700&family=Assistant:wght@300;400;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: 'Lato', 'Assistant', sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  
  /* Boutique rustic color palette */
  --color-warm-cream: #faf7f2;
  --color-warm-sand: #f0e8d8;
  --color-terracotta: #c4704f;
  --color-terracotta-light: #d4876a;
  --color-sage: #7a9080;
  --color-sage-dark: #556b5e;
  --color-charcoal: #2c2c2c;
  --color-warm-gray: #6b6560;
}

body {
  margin: 0;
  background-color: #faf7f2;
  color: #2c2c2c;
}

/* â€”â€”â€” Typography globals â€”â€”â€” */
h1, h2, h3, h4 {
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: -0.02em;
}

/* â€”â€”â€” Utility: thin serif rule â€”â€”â€” */
.serif-rule::after {
  content: '';
  display: block;
  width: 3rem;
  height: 1px;
  background: currentColor;
  margin-top: 0.75rem;
  opacity: 0.4;
}

/* â€”â€”â€” Gallery masonry: organic gaps â€”â€”â€” */
.gallery-masonry {
  column-fill: balance;
}

/* â€”â€”â€” Hover lift â€”â€”â€” */
.lift-hover {
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
}
.lift-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

/* â€”â€”â€” Scrollbar (subtle) â€”â€”â€” */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #faf7f2; }
::-webkit-scrollbar-thumb { background: #d4c4b0; border-radius: 10px; }

/* Hebrew Font Overrides */
html:lang(he), 
html:lang(he) body, 
html:lang(he) h1, 
html:lang(he) h2, 
html:lang(he) h3, 
html:lang(he) h4,
[lang="he"],
[lang="he"] body,
[lang="he"] h1,
[lang="he"] h2,
[lang="he"] [class*="font-serif"],
[lang="he"] [class*="font-sans"],
[lang="he"] h3,
[lang="he"] h4 {
  font-family: 'Calibri', 'Assistant', sans-serif !important;
}

```

## ×§×•×‘×¥: ./postcss.config.mjs
```
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

```

## ×§×•×‘×¥: ./next.config.mjs
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;

```

## ×§×•×‘×¥: ./utils/logger.js
```
// Simple console logger fallback

const logger = {
  info: (...args) => console.log('[INFO]', ...args),
  debug: (...args) => console.debug('[DEBUG]', ...args),
  error: (...args) => console.error('[ERROR]', ...args),
  warn: (...args) => console.warn('[WARN]', ...args)
};

export { logger };

```

## ×§×•×‘×¥: ./utils/sanitizePrompt.js
```
export function sanitizePrompt(prompt) {
  if (typeof prompt !== 'string') {
    return { valid: false, error: 'Prompt must be a string' };
  }
  const trimmed = prompt.trim();
  const maxLength = 500; // characters
  if (trimmed.length === 0) {
    return { valid: false, error: 'Prompt cannot be empty' };
  }
  if (trimmed.length > maxLength) {
    return { valid: false, error: `Prompt exceeds ${maxLength} characters` };
  }
  // blacklist common injection cues
  const blacklist = /\b(ignore|reset|system|assistant|prompt\s*injection)\b/i;
  if (blacklist.test(trimmed)) {
    return { valid: false, error: 'Prompt contains disallowed keywords' };
  }
  // strip control characters
  const cleaned = trimmed.replace(/[\x00-\x1F\x7F]/g, '');
  return { valid: true, cleaned };
}

```

## ×§×•×‘×¥: ./utils/passwordHash.js
```
import { scryptSync, randomBytes } from 'crypto';

/**
 * Generate a password hash using scrypt.
 * Returns a string in the form "salt:hash".
 */
export function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

/**
 * Compare a plain password with a stored hash (salt:hash).
 * Returns true if they match, false otherwise.
 */
export function comparePassword(password, storedHash) {
  if (!storedHash) return false;
  const [salt, hash] = storedHash.split(':');
  if (!salt || !hash) return false;
  const derived = scryptSync(password, salt, 64).toString('hex');
  return derived === hash;
}

```

## ×§×•×‘×¥: ./utils/supabase/client.js
```
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

export const createClient = () =>
  createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );

```

## ×§×•×‘×¥: ./utils/supabase/server.js
```
import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = (cookieStore) => {
  return createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // The setAll method was called from a Server Component.
          }
        },
      },
    },
  );
};

```

## ×§×•×‘×¥: ./utils/supabase/middleware.js
```
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = (request) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    },
  );

  return supabaseResponse;
};

```

## ×§×•×‘×¥: ./utils/rateLimiter.js
```
// Simple in-memory rate limiter using Map

const rateMap = new Map(); // key: IP, value: { count, firstSeen }

function cleanup() {
  const now = Date.now();
  for (const [ip, info] of rateMap.entries()) {
    if (now - info.firstSeen > 60 * 1000) {
      rateMap.delete(ip);
    }
  }
}

// Periodic cleanup every minute
setInterval(cleanup, 60 * 1000);

export async function rateLimiter(req) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || 'unknown';
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (entry && now - entry.firstSeen < 60 * 1000) {
    if (entry.count >= 20) {
      return false; // limit exceeded
    }
    entry.count += 1;
    rateMap.set(ip, entry);
    return true;
  }
  // New entry or expired
  rateMap.set(ip, { count: 1, firstSeen: now });
  return true;
}

```

## ×§×•×‘×¥: ./utils/registrationStore.js
```
import { promises as fs } from 'fs';
import path from 'path';

const registrationsFile = path.resolve(process.cwd(), 'data', 'registrations.json');

async function ensureDir() {
  const dir = path.dirname(registrationsFile);
  await fs.mkdir(dir, { recursive: true });
}

export async function addRegistration(entry) {
  await ensureDir();
  let entries = [];
  try {
    const data = await fs.readFile(registrationsFile, 'utf8');
    entries = JSON.parse(data);
  } catch (_) {
    entries = [];
  }
  entries.push(entry);
  await fs.writeFile(registrationsFile, JSON.stringify(entries, null, 2), 'utf8');
  return true;
}

```

## ×§×•×‘×¥: ./utils/htmlEscape.js
```
export function htmlEscape(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

```

## ×§×•×‘×¥: ./next-env.d.ts
```
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## ×§×•×‘×¥: ./README.md
```
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

## ×§×•×‘×¥: ./export_agreements.js
```
import fs from 'fs';
import path from 'react'; // Just mocking or we can use Babel?
import { renderToStaticMarkup } from 'react-dom/server';
// Wait, the site uses Next.js, so react and react-dom/server are available.
// However, the files are JSX, so running them directly with node won't work unless we transpile or use ts-node / babel.
// Let's just create the files manually since there are only 4 of them.

```

## ×§×•×‘×¥: ./components/EditableText.jsx
```
'use client';

import React, { useState, useEffect } from 'react';
import { useSite } from '../contexts/SiteContext';

export default function EditableText({ path, text, multiline = false, className = '' }) {
  const { isAdmin, handleUpdateContent } = useSite();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text || '');

  useEffect(() => { setValue(text || ''); }, [text]);

  const handleSave = async (e) => {
    e.stopPropagation();
    setIsEditing(false);
    if (value !== text) {
      try {
        const response = await fetch('/api/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path, newValue: value }),
        });
        if (response.ok) {
          handleUpdateContent(path, value);
        } else {
          alert('Failed to save text');
          setValue(text);
        }
      } catch (err) {
        alert('Error saving text');
        setValue(text);
      }
    }
  };

  if (!isAdmin) {
    return <span className={className}>{text}</span>;
  }

  if (isEditing) {
    return (
      <span className="flex flex-col gap-2 relative z-50 text-base font-sans" onClick={(e) => e.stopPropagation()}>
        {multiline ? (
          <textarea 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="text-stone-900 p-3 border-2 border-orange-500 rounded-lg min-h-[120px] w-full min-w-[300px] shadow-xl text-start"
            dir="auto"
          />
        ) : (
          <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="text-stone-900 p-2 border-2 border-orange-500 rounded-lg w-full min-w-[300px] shadow-xl text-start"
            dir="auto"
          />
        )}
        <span className="flex gap-2">
          <button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-md text-sm font-bold">×©××•×¨</button>
          <button onClick={(e) => { e.stopPropagation(); setIsEditing(false); setValue(text); }} className="bg-stone-400 hover:bg-stone-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-bold">×‘×™×˜×•×œ</button>
        </span>
      </span>
    );
  }

  return (
    <span 
      className={`cursor-pointer hover:outline-dashed hover:outline-2 hover:outline-orange-400 hover:bg-orange-50/50 relative group inline-block transition-all ${className}`}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsEditing(true); }}
      title="×œ×—×¥ ×œ×¢×¨×™×›×”"
    >
      {text}
      <span className="absolute -top-8 -end-2 bg-orange-500 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 font-sans">
        âœ ×¢×¨×•×š ×˜×§×¡×˜
      </span>
    </span>
  );
}

```

## ×§×•×‘×¥: ./components/Footer.jsx
```
'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';

export default function Footer() {
  const { lang, t, isAdmin, setIsAdmin } = useSite();

  const handleAdminToggle = async () => {
    if (isAdmin) {
      if (confirm('×”×× ×œ×¦××ª ×××¦×‘ ×¢×¨×™×›×”?')) {
        await fetch('/api/logout', { method: 'POST' });
        localStorage.setItem('isAdmin', 'false');
        setIsAdmin(false);
        window.location.reload();
      }
    } else {
      const pass = prompt('×¡×™×¡××ª ×× ×”×œ:');
      if (pass !== null) {
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: pass.trim() })
          });
          const data = await response.json();
          if (data.success) {
            localStorage.setItem('isAdmin', 'true');
            setIsAdmin(true);
            alert('××¦×‘ ×¢×¨×™×›×” ×”×•×¤×¢×œ! ×›×¢×ª × ×™×ª×Ÿ ×œ×©× ×•×ª ×ª××•× ×•×ª ×•×˜×§×¡×˜×™×.');
            window.location.reload();
          } else {
            alert('×¡×™×¡××” ×©×’×•×™×”');
          }
        } catch (e) {
          alert('×©×’×™××ª ×”×ª×—×‘×¨×•×ª ×œ×©×¨×ª');
        }
      }
    }
  };

  return (
    <footer className="bg-[#faf7f2] text-stone-500 py-6 border-t border-stone-200 text-xs font-light relative" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
          <span className="font-serif font-bold text-stone-800 text-sm">Savtot in Sri Lanka</span>
          <span className="text-stone-300 hidden sm:inline">|</span>
          <Link href="/itinerary" className="hover:text-[#c4704f] transition-colors">{t.nav.itinerary}</Link>
          <Link href="/essentials" className="hover:text-[#c4704f] transition-colors">{t.nav.essentials}</Link>
          <Link href="/register" className="hover:text-[#c4704f] transition-colors">{t.nav.register}</Link>
        </div>

        {/* Right: Contacts & Socials */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
          <a href="https://wa.me/972543510664" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" dir="ltr">WhatsApp Eyal</a>
          <a href="https://wa.me/972546639597" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" dir="ltr">WhatsApp Naomi</a>
          <a href="mailto:srilankasavtot@gmail.com" className="hover:text-[#c4704f] transition-colors">srilankasavtot@gmail.com</a>
          <span className="text-stone-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/srilankasavtot/" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/share/g/1Dt8BR383e/" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom thin copyright & admin link */}
      <div className="container mx-auto px-6 mt-4 pt-4 border-t border-stone-200/50 flex flex-row items-center justify-between opacity-50 text-[10px]">
        <span>Â© 2027 Savtot in Sri Lanka. Planning & Love: Aliza, Eyal, Naomi.</span>
        
        <button 
          onClick={handleAdminToggle}
          className="opacity-10 hover:opacity-100 transition-opacity text-sm p-1"
          title="Admin Login"
        >
          ğŸ”’
        </button>
      </div>
    </footer>
  );
}

```

## ×§×•×‘×¥: ./components/Agreements/AccommodationRates.jsx
```
import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function AccommodationRates() {
  const { lang } = useSite();
  const isHe = lang === 'he';

  if (isHe) {
    return (
      <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="rtl">
        <p className="font-bold text-base">× ×¡×¤×— ×' â€“ ×ª×¢×¨×™×¤×™ ×œ×™× ×” ×•××œ×•× ×•×ª</p>
        <p>× ×¡×¤×— ×–×” ("×œ×•×— ×ª×¢×¨×™×¤×™ ×œ×™× ×”") ××”×•×•×” ×—×œ×§ ×‘×œ×ª×™ × ×¤×¨×“ ××”×¡×›× ×”×¨×™×©×•× ×œ×˜×™×•×œ. ×›×œ ×”×ª×¢×¨×™×¤×™× ×•×”×¡×›×•××™× ×”××¤×•×¨×˜×™× ×›××Ÿ × ×§×•×‘×™× ×‘×“×•×œ×¨ ××¨×”"×‘ (USD) ×•××™×™×¦×’×™× ××ª ×ª×¢×¨×™×¤×™ ×”×œ×™× ×” × ×˜×• ×¢×œ×™×”× ×¡×•×›× ××•×œ ×¡×¤×§×™ ×”×œ×™× ×” ×¢×‘×•×¨ ×˜×™×•×œ×™ ×§×™×¥ ×•×—×•×¨×£ 2027.</p>

        <div className="font-bold mt-4 mb-2 text-teal-800">1. ×”×’×“×¨×•×ª ×•×¤×¨×©× ×•×ª</div>
        <ul className="list-disc mr-6 space-y-1">
          <li><strong>×ª×¢×¨×™×£ ×–×•×’×™ (DBL Rate):</strong> ×ª×¢×¨×™×£ ×œ×™×œ×™ ×œ×—×“×¨ ×¡×˜× ×“×¨×˜×™ ×‘×ª×¤×•×¡×” ×–×•×’×™×ª, ×›×•×œ×œ ××¡×™× ××§×•××™×™× ×¨×œ×•×•× ×˜×™×™× ×•×“××™ ×©×™×¨×•×ª, ×”××©×•×ª×£ ×œ×©×ª×™ (2) ××©×ª×ª×¤×•×ª.</li>
          <li><strong>×ª×¢×¨×™×£ ×™×—×™×“ (SGL Rate):</strong> ×ª×¢×¨×™×£ ×œ×™×œ×™ ×œ×—×“×¨ ×‘×ª×¤×•×¡×” ×©×œ ×™×—×™×“, ×›×•×œ×œ ××¡×™× ××§×•××™×™× ×¨×œ×•×•× ×˜×™×™× ×•×“××™ ×©×™×¨×•×ª, ×××•×›×œ×¡ ×¢×œ ×™×“×™ ××©×ª×ª×¤×ª ××—×ª (1).</li>
          <li><strong>×”×§×¦××” ×‘×¡×™×¡×™×ª ×œ××©×ª×ª×¤×ª:</strong> ××™×™×¦×’×ª ×—××™×©×™× ××—×•×– (50%) ××”×ª×¢×¨×™×£ ×”×–×•×’×™ (DBL Rate), ×©××—×•×©×‘ ××¨××© ×•××•×˜××¢ ×‘×ª×•×š ××—×™×¨ ×”×˜×™×•×œ ×”×‘×¡×™×¡×™ ($2,710).</li>
        </ul>

        <div className="font-bold mt-4 mb-2 text-teal-800">2. ×¢×œ×•×™×•×ª ×œ×™× ×” ×•×¤×¢×¨×™ ×ª×¢×¨×™×¤×™×</div>
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
          <p className="mb-2">×¢×œ×•×ª ×”×œ×™× ×” ×”×›×•×œ×œ×ª ×‘××¡×¢ ×”×™× ×‘××–×•×¨ ×”-$1,400.</p>
          <p className="mb-2">×©×™××• ×œ×‘ ×›×™ ×”×¢×œ×•×™×•×ª ××©×ª× ×•×ª ×•×§×™×™× ×¤×¢×¨ ×‘×™×Ÿ ×œ×™× ×” ×‘×—×“×¨ ×™×—×™×“ ×œ×œ×™× ×” ×‘×—×“×¨ ×–×•×’×™.</p>
          <p>× ×™×ª×Ÿ ×œ×¤× ×•×ª ××œ×™× ×• ×‘×¤×¨×˜×™ ×¢×œ ×× ×ª ×œ×§×‘×œ ××ª ×”×¤×™×¨×•×˜ ×”××œ× ×©×œ ×”×ª×¢×¨×™×¤×™× ×”×œ×™×œ×™×™× ×¢×‘×•×¨ ×›×œ ××œ×•×Ÿ ×‘× ×¤×¨×“.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <p className="font-bold text-base">APPENDIX A â€“ SCHEDULE OF ACCOMMODATION RATES</p>
      <p>This Appendix A (the "Accommodation Schedule") forms an integral and inseparable part of the Tour Registration Agreement. All rates and figures listed herein are denominated in United States Dollars (USD) and represent the net contracted nightly rates with the respective accommodation providers for the Summer and Winter 2027 Tours.</p>

      <div className="font-bold mt-4 mb-2 text-teal-800">1. Definitions and Interpretation</div>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>DBL Rate:</strong> shall mean the nightly room rate for a standard double-occupancy room, inclusive of applicable local taxes and service charges, shared by two (2) participants.</li>
        <li><strong>SGL Rate:</strong> shall mean the nightly room rate for a single-occupancy room, inclusive of applicable local taxes and service charges, occupied by one (1) participant or staff member.</li>
        <li><strong>Per Participant Base Allocation:</strong> shall represent fifty percent (50%) of the DBL Rate, which is pre-calculated and embedded within the core Tour Price ($2,710).</li>
      </ul>

      <div className="font-bold mt-4 mb-2 text-teal-800">2. Accommodation Costs & Rate Differences</div>
      <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
        <p className="mb-2">The total accommodation cost for the trip is approximately $1,400.</p>
        <p className="mb-2">Please note that costs vary and there is a difference between staying in a single room versus a double room.</p>
        <p>You can contact us privately to receive the full breakdown of nightly rates for each individual hotel.</p>
      </div>
    </div>
  );
}

```

## ×§×•×‘×¥: ./components/Agreements/MedicalWaiver.jsx
```
import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function MedicalWaiver() {
  const { lang } = useSite();

  return (
    <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <h3 className="font-bold text-lg text-teal-900 text-center mb-4">
        Sri Lanka Trip Participant Waiver, Release and Assumption of Risk
      </h3>
      <p>
        I, the undersigned participant, am voluntarily joining a private group trip to Sri Lanka organized informally by Naomi Grossman and/or other trip organizers, coordinators, hosts, volunteers or related persons (collectively, the &quot;Organizers&quot;).
      </p>
      <p>
        I understand and acknowledge that travel, including international travel, involves inherent risks. These risks may include, among other things, illness, injury, bodily harm, accidents, transportation delays or accidents, weather conditions, political or civil unrest, theft, loss of property, medical emergencies, food or water-related illness, activities arranged during the trip, acts or omissions of third-party providers, and, in extremely rare cases, loss of life.
      </p>
      <p>
        I confirm that I am participating in the trip voluntarily and at my own risk. I am responsible for determining whether I am physically, medically and personally able to participate in the trip and in any activities during the trip. I understand that the Organizers are not professional tour operators, travel agents, medical providers, security consultants or insurers, and that any hotels, transportation providers, guides, restaurants, activity providers or other third parties are independent providers and are not agents or employees of the Organizers.
      </p>
      <p>
        To the fullest extent permitted by applicable law, I hereby release, waive and discharge Naomi Grossman and all other Organizers from any and all claims, liabilities, demands, actions, damages, costs, losses or expenses of any kind, whether known or unknown, arising out of or relating to my participation in the trip, including any injury, bodily harm, illness, economic loss, property damage, delay, inconvenience, emotional distress or loss of life, except to the extent such liability cannot legally be waived.
      </p>
      <p>
        I further agree that I will not bring any claim, lawsuit or demand against Naomi Grossman or any other Organizer arising out of or relating to the trip, and I agree to indemnify and hold them harmless from any claims, losses, damages, costs or expenses, including reasonable legal fees, arising from my own actions, omissions, decisions, conduct, medical condition, or participation in trip activities.
      </p>
      <p>
        I understand that I am solely responsible for obtaining and maintaining appropriate travel insurance, medical insurance, trip cancellation insurance and any other insurance I may require. I am also responsible for my passport, visas, vaccinations, medications, personal belongings, safety, and compliance with all applicable laws, rules and instructions during the trip.
      </p>
      <p>
        I confirm that I have read this waiver carefully, understand its meaning, and sign it voluntarily. I understand that by signing this document, I am giving up certain legal rights to the fullest extent permitted by law.
      </p>
    </div>
  );
}

```

## ×§×•×‘×¥: ./components/Agreements/TravelAgreement.jsx
```
import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function TravelAgreement() {
  const { lang } = useSite();
  const isHe = lang === 'he';

  if (isHe) {
    return (
      <div className="space-y-5 text-sm text-stone-700 leading-relaxed" dir="rtl">
        <div>
          <h3 className="font-bold text-lg text-teal-900 mb-1">×”×¡×›× ×”×ª×§×©×¨×•×ª ×•×ª× ××™ ×¨×™×©×•× â€“ ××¡×¢ × ×©×™× ×œ×¡×¨×™ ×œ× ×§×” (×§×™×¥ 2026)</h3>
          <div className="p-3 bg-stone-100/80 rounded-lg text-xs space-y-1 text-stone-600 border border-stone-200">
            <p><strong>×‘×™×Ÿ:</strong> ×¦×•×•×ª ×”×”×¤×§×”, ×”×›×•×œ×œ ××ª × ×¢××™, ×¢×œ×™×–×” ×•××™×œ (×œ×”×œ×Ÿ: "×”×××¨×’× ×™×")</p>
            <p><strong>×œ×‘×™×Ÿ:</strong> ×”××©×ª×ª×¤×ª (×œ×”×œ×Ÿ: "×”××©×ª×ª×¤×ª")</p>
          </div>
        </div>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">1. ××”×•×ª ×”×”×ª×§×©×¨×•×ª (××•×“×œ ×¡×•×›× ×•×ª ×•× ××× ×•×ª)</h4>
          <div className="space-y-2">
            <p><strong>1.1.</strong> ×”××©×ª×ª×¤×ª ××¦×”×™×¨×” ×›×™ ×™×“×•×¢ ×œ×” ×©×”×××¨×’× ×™× ×¤×•×¢×œ×™× ×›××ª×•×•×›×™× ×•×¡×•×›× ×™× ×‘×œ×‘×“ ×‘×™× ×” ×œ×‘×™×Ÿ ×¡×¤×§×™ ×”×ª×™×™×¨×•×ª, ×‘×ª×™ ×”××œ×•×Ÿ, ×—×‘×¨×•×ª ×”×”×¡×¢×” ×•×§×‘×œ× ×™ ×”××©× ×” ×‘×¡×¨×™ ×œ× ×§×”, ×•×›×™ ×›×œ ×”×›×¡×¤×™× ×”××™×•×¢×“×™× ×œ×¡×¤×§×™× ××•×—×–×§×™× ×‘× ××× ×•×ª ×•××•×¢×‘×¨×™× ×™×©×™×¨×•×ª ×œ×¡×¤×§×™ ×¦×“ ×’' ××œ×•.</p>
            <p><strong>1.2.</strong> ×‘××—×¨×™×•×ª ×”××©×ª×ª×¤×ª ×œ×”×¡×“×™×¨ ××ª ×”×’×¢×ª×” ×”×¢×¦×××™×ª ×œ× ×§×•×“×ª ×”××¤×’×© ×©×ª×™×§×‘×¢. ×¢×¡×§×ª ×”×¨×™×©×•× ×—×œ×” ×¢×œ ×©×™×¨×•×ª×™ ×”×§×¨×§×¢ ×‘×œ×‘×“ ×•××™× ×” ×ª×œ×•×™×” ×‘×”×¡×“×¨×™ ×”×ª×¢×•×¤×” ×”×‘×™× ×œ××•××™×™× ×”××™×©×™×™× ×©×œ ×”××©×ª×ª×¤×ª.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">2. ×¢×œ×•×ª ×”××¡×¢, ××‘× ×” ×”×ª××—×•×¨ ×•×ª× ××™ ×”×—×“×¨×™×</h4>
          <p className="mb-2">×‘×”×ª×× ×œ×”×•×¨××•×ª ×”×“×™×Ÿ, ×œ×¨×‘×•×ª ×ª×§× ×” 6 ×œ×ª×§× ×•×ª ××¡ ×¢×¨×š ××•×¡×£, ×ª×©×œ"×•-1976 (×”×•×¦××•×ª ×œ×˜×•×‘×ª ×¦×“ ×©×œ×™×©×™), ×”×ª×©×œ×•× ×‘×’×™×Ÿ ×”××¡×¢ ××•×¨×›×‘ ××©× ×™ ×¢×¨×•×¦×™× × ×¤×¨×“×™×, ×•×‘×’×™× × ×™×•×¤×§×• ×§×‘×œ×•×ª × ×¤×¨×“×•×ª:</p>
          <ul className="list-disc mr-5 space-y-2">
            <li><strong>2.1. ××—×™×¨ ×”×‘×¡×™×¡ ×œ××©×ª×ª×¤×ª:</strong> 8,050 ×©"×— (×”××‘×•×¡×¡ ×¢×œ ×¢×œ×•×ª ×©×œ $2,710 ×“×•×œ×¨ ××¨×”"×‘). ×”××—×™×¨ ××‘×•×¡×¡ ×¢×œ ×§×‘×•×¦×” ×©×œ 10 ××©×ª×ª×¤×•×ª ×œ×¤×—×•×ª ×•×¢×œ ×œ×™× ×” ×‘×—×“×¨ ×–×•×’×™.</li>
            <li><strong>2.2. ×“××™ ××¨×’×•×Ÿ ×•×¤×™×§×“×•×Ÿ ×¡×¤×§×™×:</strong> ××ª×•×š ××—×™×¨ ×”×‘×¡×™×¡, ×¡×š ×©×œ ×›-1,400 ×©"×— ××”×•×•×” ××ª ×“××™ ×”××¨×’×•×Ÿ ×•×”×™×¢×¨×›×•×ª ×”×××¨×’× ×™× (×‘×’×™× × ×ª×•×¤×§ ×—×©×‘×•× ×™×ª ××¡/×§×‘×œ×” ×›×—×•×§). ×”×™×ª×¨×”, ×‘×¡×š ×©×œ ×›-6,650 ×©"×—, ××”×•×•×” ×›×¡×¤×™ ×¤×™×§×“×•×Ÿ ×œ×¡×¤×§×™× ×”××•×—×–×§×™× ×‘× ××× ×•×ª ×œ×˜×•×‘×ª ×”×•×¦××•×ª ×”×œ×§×•×—×” ×‘×¡×¨×™ ×œ× ×§×” (×‘×’×™× × ×ª×•×¤×§ "×§×‘×œ×ª ×¤×™×§×“×•×Ÿ" × ×¤×¨×“×ª ×”××¦×™×™× ×ª ×‘××¤×•×¨×© ×›×™ ×”×¡×›×•× × ×ª×§×‘×œ ×œ×ª×©×œ×•× ×”×•×¦××•×ª ×‘×©×‘×™×œ ×”×œ×§×•×—×”).</li>
            <li><strong>2.3. ×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ×©×˜×— ×œ×”×—×–×¨:</strong> ××ª×•×š ××—×™×¨ ×”×‘×¡×™×¡, ×¡×š ×©×œ $290 ×“×•×œ×¨ ××¨×”"×‘ ××•×’×“×¨ ×›"×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ×©×˜×—". ×¨×›×™×‘ ×¡×¤×¦×™×¤×™ ×–×” ×™×•×—×¨×’ ×œ×˜×•×‘×ª ×”××©×ª×ª×¤×ª ×‘××¡×’×¨×ª ×× ×’× ×•×Ÿ ×”×”×—×–×¨×™× ×‘××§×¨×” ×©×œ ×‘×™×˜×•×œ (×›××¤×•×¨×˜ ×‘×¡×¢×™×£ 4).</li>
            <li><strong>2.4. ×œ×•×— ×ª×©×œ×•××™× ×•×“××™ ×¨×™×©×•×:</strong> ×”×ª×©×œ×•× ×¢×‘×•×¨ ×”×˜×™×•×œ ×™×‘×•×¦×¢ ×‘×©×™×¢×•×¨×™× ×”×‘××™× (×‘×“×•×œ×¨ ××¨×”"×‘ ××• ×‘×©×•×•×” ×¢×¨×š ×‘×©×§×œ×™× ×œ×¤×™ ×©×¢×¨ ×”×¢×‘×¨×•×ª ×•×”××—××•×ª ×’×‘×•×” ×‘×™×•× ×”×ª×©×œ×•×):
              <ul className="list-circle mr-5 mt-1 space-y-1 text-xs">
                <li><strong>×ª×©×œ×•× ××§×“××”:</strong> 1,000 ×©"×— ×¢× ×”×”×¨×©××”. ××ª×•×š ×¡×›×•× ×–×”, ×¡×š ×©×œ 300 ×©"×— ××•×’×“×¨ ×›×“××™ ×¨×™×©×•× ×•×”×™×¢×¨×›×•×ª ×©××™× × × ×™×ª× ×™× ×œ×”×—×–×¨ (×œ××¢×˜ ×‘×™×˜×•×œ ×›×“×™×Ÿ ×‘×ª×•×š 14 ×”×™××™× ×”×¨××©×•× ×™× ×›×§×‘×•×¢ ×‘×—×•×§).</li>
                <li><strong>×ª×©×œ×•× ×©× ×™ ×•×©×œ×™×©×™:</strong> ×‘×”×ª×× ×œ×œ×•×— ×”×–×× ×™× ×•×¢×“ ×œ××•×¢×“ ×¡×’×™×¨×ª ×”×”×¨×©××” ×œ×¤× ×™ ×”×™×¦×™××”.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">3. ×ª×•×¡×¤×ª ×—×“×¨ ×™×—×™×“ ×•××›× ×™×§×ª ×”×—×“×¨×™×</h4>
          <p className="mb-2"><strong>3.1.</strong> ×¢×œ ×× ×ª ×œ×× ×•×¢ ×’×™×¨×¢×•×Ÿ ×‘×§×•×¤×ª ×”××¡×¢ ×¢×§×‘ ××¡×¤×¨ ××©×ª×ª×¤×•×ª ××™-×–×•×’×™, ×©×“×¨×•×’ ×œ×—×“×¨ ×™×—×™×“ ××• ×”×¢×‘×¨×” ×××•×œ×¦×ª ×œ×—×“×¨ ×™×—×™×“ ×™×ª×•××—×¨×• ×‘×©× ×™ ××¡×œ×•×œ×™×:</p>
          <ul className="list-disc mr-5 space-y-2">
            <li><strong>××¡×œ×•×œ ×' (××¡×¤×¨ ×–×•×’×™ ×©×œ ×“×•×¨×©×•×ª ×—×“×¨ ×™×—×™×“):</strong> ×× ×œ×¤×—×•×ª 2 ××©×ª×ª×¤×•×ª ×‘×§×‘×•×¦×” ××‘×§×©×•×ª ×—×“×¨ ×™×—×™×“, ×”×ª×•×¡×¤×ª ×ª×¢××•×“ ×¢×œ $450 ×“×•×œ×¨ ××¨×”"×‘ ×œ××©×ª×ª×¤×ª (××—×™×¨ ××¡×¢ ×›×•×œ×œ: $3,160 ×“×•×œ×¨).</li>
            <li><strong>××¡×œ×•×œ ×‘' (×—×“×¨ ×™×—×™×“ ×‘×œ×¢×“×™ ××• ×××•×œ×¥):</strong> ×× ×¨×§ ××©×ª×ª×¤×ª ××—×ª ×‘×›×œ ×”×§×‘×•×¦×” ×ª×©×”×” ×‘×—×“×¨ ×™×—×™×“, ××• ×‘××§×¨×” ×©×œ ×—×“×¨ ×™×—×™×“ ×××•×œ×¥ ×¢×§×‘ ××¡×¤×¨ ××©×ª×ª×¤×•×ª ××™-×–×•×’×™ ××• ×‘×™×˜×•×œ ×©×œ ×©×•×ª×¤×” ×œ×—×“×¨, ×”×ª×•×¡×¤×ª ×ª×¢××•×“ ×¢×œ $900 ×“×•×œ×¨ ××¨×”"×‘ (××—×™×¨ ××¡×¢ ×›×•×œ×œ: $3,610 ×“×•×œ×¨), ×œ×©× ×›×™×¡×•×™ ×”×¢×œ×•×ª ×”×§×‘×•×¢×” ×©×œ ×”×—×“×¨ ×”× ×•×¡×£ ×©× ×›×¤×” ×¢×œ ×”××¢×¨×š ×”×œ×•×’×™×¡×˜×™.</li>
          </ul>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">4. "×”××•×¢×“ ×”×§×•×‘×¢" ×•××“×™× ×™×•×ª ×”×‘×™×˜×•×œ×™×</h4>
          <p className="mb-2">×”××¡×¢ ×›×•×œ×œ ×©×™×¨×•×ª×™ ×ª×™×™×¨×•×ª ×”× ×™×ª× ×™× ×‘××œ×•×× ××—×•×¥ ×œ×™×©×¨××œ. ×‘×”×ª×× ×œ×¡×¢×™×£ 14×’2 ×œ×—×•×§ ×”×’× ×ª ×”×¦×¨×›×Ÿ, ×”×ª×©×"×-1981, ××•×¦×¢×ª ×œ××©×ª×ª×¤×ª ×–×›×•×ª ×”×‘×—×™×¨×” ×‘×™×Ÿ ×—×œ×•×¤×•×ª ×”×‘×™×˜×•×œ ×”×‘××•×ª:</p>
          
          <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 mb-3 space-y-2">
            <p><strong>×—×œ×•×¤×” ×' â€“ ×—×•×§ ×”×’× ×ª ×”×¦×¨×›×Ÿ ×”×™×©×¨××œ×™ (×‘×¨×™×¨×ª ××—×“×œ):</strong> ×–×›×•×ª ×‘×™×˜×•×œ ×‘×ª×•×š 14 ×™××™× ××™×•× ×‘×™×¦×•×¢ ×”×¢×¡×§×” ××• ×§×‘×œ×ª ××¡××š ×–×”, ×•×‘×œ×‘×“ ×©× ×•×ª×¨×• 7 ×™××™ ×¢×‘×•×“×” ×œ×¤×—×•×ª ×œ×¤× ×™ ××•×¢×“ ×”×˜×™×•×œ. ××©×ª×ª×¤×ª ×©×”×™× ××“× ×¢× ××•×’×‘×œ×•×ª, ××–×¨×—×™×ª ×•×ª×™×§×” (××¢×œ ×’×™×œ 65) ××• ×¢×•×œ×” ×—×“×©×”, ×¨×©××™×ª ×œ×‘×˜×œ ×‘×ª×•×š 4 ×—×•×“×©×™× ××™×•× ×”×”×¨×©××” (×‘×›×¤×•×£ ×œ×”×¦×’×ª ×ª×¢×•×“×” ××ª××™××” ×•×‘××™×“×” ×•×”×”×ª×§×©×¨×•×ª ×›×œ×œ×” ×©×™×—×” ×™×©×™×¨×”). ×“××™ ×”×‘×™×˜×•×œ ×‘×—×œ×•×¤×” ×–×• ×™×¢××“×• ×¢×œ 5% ××• 100 ×©"×— (×”× ××•×š ××‘×™× ×™×”×). <em>(×”×¢×¨×” ××©×¤×˜×™×ª: ×‘×™×˜×•×œ ×œ××—×¨ ×—×œ×•×Ÿ ×”×–××Ÿ ×”×¡×˜×˜×•×˜×•×¨×™ ×™×•×‘×™×œ ×œ×”×—×œ×ª ×“××™ ×”×‘×™×˜×•×œ ×”××œ××™× ×©×œ ×”×¡×¤×§×™× ×‘×—×•"×œ, ×›××¤×•×¨×˜ ×‘×—×œ×•×¤×” ×‘').</em></p>
            <p><strong>×—×œ×•×¤×” ×‘' â€“ ××“×™× ×™×•×ª ×¡×¤×§×™ ×”×§×¨×§×¢ ××—×•×¥ ×œ×™×©×¨××œ (×”×—×œ ×"×”××•×¢×“ ×”×§×•×‘×¢" - 30.6.2026):</strong> ×‘××¡×œ×•×œ ×–×” ×ª×—×•×œ ××“×™× ×™×•×ª ×”×‘×™×˜×•×œ ×©×œ ×”×¡×¤×§×™× ×”×–×¨×™× ×‘×—×•"×œ ×•×”×”×ª×—×™×™×‘×•×™×•×ª ×”×§×‘×•×¦×ª×™×•×ª. ××•×¡×›× ×›×™ "×”××•×¢×“ ×”×§×•×‘×¢" ×©×‘×• ×”×”×–×× ×•×ª ××•×œ ×¡×¤×§×™ ×”×©×˜×— ×”×•×¤×›×•×ª ×œ×¡×•×¤×™×•×ª ×•××—×™×™×‘×•×ª ×”×•× ×”-30 ×‘×™×•× ×™ 2026 (×‘××™×“×” ×•×”×××¨×’× ×™× ×™×‘×¦×¢×• ×ª×©×œ×•××™× ×‘×¤×•×¢×œ ×©××™× × × ×™×ª× ×™× ×œ×”×—×–×¨ ×œ×¡×¤×§×™× ×œ×¤× ×™ ×ª××¨×™×š ×–×”, ×”××•×¢×“ ×”×§×•×‘×¢ ×™×©×ª× ×” ×œ××•×¢×“ ×”×ª×©×œ×•× ×‘×¤×•×¢×œ, ×•×ª×™××¡×¨ ×¢×œ ×›×š ×”×•×“×¢×”).</p>
          </div>

          <div className="space-y-2">
            <p><strong>4.1. ×‘×™×˜×•×œ ×œ××—×¨ ×”××•×¢×“ ×”×§×•×‘×¢:</strong> ××©×ª×ª×¤×ª ×©×ª×‘×˜×œ ××ª ×”×©×ª×ª×¤×•×ª×” ×œ××—×¨ ×”××•×¢×“ ×”×§×•×‘×¢ ×œ×œ× ×”×¦×’×ª ××©×ª×ª×¤×ª ×—×œ×•×¤×™×ª, ×œ× ×ª×”×™×” ×–×›××™×ª ×œ×§×‘×œ ×”×—×–×¨ ×›×¡×¤×™ ××œ×. × ×•×¡×—×ª ×”×”×—×–×¨ ××‘×•×¡×¡×ª ×¢×œ ×”×©×‘×ª ×¨×›×™×‘ ×”×¤×¢×™×œ×•×™×•×ª ×‘×©×˜×— ($290) ×•×”×—×™×¡×›×•×Ÿ ×”×¨×™××œ×™ ××‘×ª×™ ×”××œ×•×Ÿ, ×‘×§×™×–×•×– ×—×œ×§×” ×‘×”×•×¦××•×ª ×”×§×‘×•×¢×•×ª ×•×‘×¢×œ×•×™×•×ª ×©× ×›×¤×• ×¢×œ ×©×•×ª×¤×ª×” ×œ×—×“×¨.</p>
            <p><strong>4.2. ×¡×›×•××™ ×”×”×—×–×¨ ×•×“××™ ×”×‘×™×˜×•×œ ×”××•×—×œ×˜×™×:</strong></p>
            <ul className="list-disc mr-5 space-y-1 text-xs">
              <li><strong>××©×ª×ª×¤×ª ×‘×—×“×¨ ×–×•×’×™ ×©×‘×™×˜×œ×”:</strong> ×ª×§×‘×œ ×”×—×–×¨ ×©×œ $550 ×“×•×œ×¨ ×‘×œ×‘×“ (×”×¤×¡×“/×“××™ ×‘×™×˜×•×œ ×œ×¡×¤×§×™×: $2,160 ×“×•×œ×¨).</li>
              <li><strong>××©×ª×ª×¤×ª ×‘×—×“×¨ ×™×—×™×“ (××‘×—×™×¨×” ××• ×××™×œ×•×¥) ×©×‘×™×˜×œ×”:</strong> ×ª×§×‘×œ ×”×—×–×¨ ×©×œ $1,640 ×“×•×œ×¨ ×‘×œ×‘×“ (×“××™ ×‘×™×˜×•×œ ×œ×¡×¤×§×™×: $1,520 ×‘××§×¨×” ×©×œ ×—×“×¨ ×™×—×™×“ ×××™×œ×•×¥ ××ª×•×š ××—×™×¨ ×›×•×œ×œ ×©×œ $3,160; ××• $1,970 ×‘××§×¨×” ×©×œ ×—×“×¨ ×™×—×™×“ ××‘×—×™×¨×” ××ª×•×š ××—×™×¨ ×›×•×œ×œ ×©×œ $3,610).</li>
            </ul>
            <p><strong>4.3. ×”×ª× ×™×™×ª ×”×—×–×¨ ×‘×‘×™×˜×•×œ ××œ×•× ×•×ª ×‘×¤×•×¢×œ (×× ×’× ×•×Ÿ ×§×™×–×•×–):</strong> ×–×›××•×ª×” ×©×œ ×”××‘×˜×œ×ª ×‘×—×“×¨ ×™×—×™×“ ×œ×”×—×–×¨ ($1,640) ××•×ª× ×™×ª ×‘××•×¤×Ÿ ××•×—×œ×˜ ×‘×›×š ×©×”××œ×•× ×•×ª ×•×¡×¤×§×™ ×”×§×¨×§×¢ ×‘×—×•"×œ ×™××©×¨×• ×‘×™×˜×•×œ ×©×œ 100% ×¢×œ ×”×—×“×¨ ×œ×œ× ×—×™×•×‘ ××• ×§× ×¡. ×‘××™×“×” ×•×”××œ×•× ×•×ª/×¡×¤×§×™× ×™×’×‘×• ×“××™ ×‘×™×˜×•×œ ××• ×§× ×¡×•×ª ×‘×¤×•×¢×œ ×¢×œ ×”×—×“×¨ ×”×¡×¤×¦×™×¤×™ ×©×‘×•×˜×œ, ×¡×›×•× ×”×—×™×•×‘ ×™×§×•×–×– ×™×©×™×¨×•×ª, ×“×•×œ×¨-××•×œ-×“×•×œ×¨, ××›×¡×¤×™ ×”×”×—×–×¨ ×©×œ ×”××©×ª×ª×¤×ª ×”××‘×˜×œ×ª (×•×”×™× ×ª×§×‘×œ ××ª ×”×™×ª×¨×” ×‘×œ×‘×“).</p>
            <p><strong>4.4. × ×•×”×œ ×”×•×“×¢×ª ×‘×™×˜×•×œ:</strong> ×”×•×“×¢×ª ×‘×™×˜×•×œ ×ª×™××¡×¨ ×‘×›×ª×‘ (×”×•×“×¢×ª ×•×•××˜×¡××¤ ×œ×××¨×’× ×™× ×•×‘×“×•×"×œ) ×•×ª×™×›× ×¡ ×œ×ª×•×§×£ ×‘××•×¢×“ ××¡×™×¨×ª×” ×‘×™××™ ×¢×‘×•×“×” ×‘×œ×‘×“ (×œ× ×›×•×œ×œ ×©×™×©×™, ×©×‘×ª ×•×¢×¨×‘×™ ×—×’ ×‘×™×©×¨××œ ××• ×‘×¡×¨×™ ×œ× ×§×”).</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">5. ×× ×’× ×•×Ÿ ××©×ª×ª×¤×ª ×—×œ×•×¤×™×ª (×”×—×–×¨ ××œ×)</h4>
          <div className="space-y-2">
            <p><strong>5.1.</strong> ×¢×œ ××£ ×”×××•×¨ ×‘×¡×¢×™×£ 4, ××©×ª×ª×¤×ª ×©×ª×‘×˜×œ ××ª ×”×©×ª×ª×¤×•×ª×” ×œ××—×¨ ×”××•×¢×“ ×”×§×•×‘×¢ ××š ×ª×¦×™×’ ××™×•×–××” ×•×‘××•×¤×Ÿ ×¢×¦×××™ ××©×ª×ª×¤×ª ×—×œ×•×¤×™×ª ×©×ª×™×›× ×¡ ×‘× ×¢×œ×™×”, ×ª×”×™×” ×–×›××™×ª ×œ×”×—×–×¨ ××œ× ×©×œ 100%.</p>
            <p><strong>5.2.</strong> ×–×›××•×ª ×–×• ××•×ª× ×™×ª ×‘××•×¤×Ÿ ××•×—×œ×˜ ×‘×›×š ×©×”××©×ª×ª×¤×ª ×”×—×“×©×” ×ª×©×œ× ××ª ××œ×•× ×¢×œ×•×ª ×”×˜×™×•×œ ×•×ª×©××•×¨ ×¢×œ ×”×¡×“×¨ ×”×—×“×¨×™× ×”×§×™×™× ×‘××“×•×™×§. ×¨×§ ×¢×œ×•×™×•×ª ×™×©×™×¨×•×ª ×©×™×™×“×¨×©×• ×¢×œ ×™×“×™ ×—×‘×¨×•×ª ×”×ª×¢×•×¤×” ××• ×¡×¤×§×™ ×”×§×¨×§×¢ ×‘×’×™×Ÿ ×©×™× ×•×™ ×”×©× (×§× ×¡ ×©×™× ×•×™ ×©×) ×™×§×•×–×–×• ××¡×›×•× ×”×”×—×–×¨.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">6. ×–×›×•×ª ×”×××¨×’× ×™× ×œ×‘×™×˜×•×œ ××• ×“×—×™×™×ª ×”××¡×¢</h4>
          <div className="space-y-2">
            <p><strong>6.1. ××™-×”×’×¢×” ×œ××™× ×™××•× ××©×ª×ª×¤×•×ª:</strong> ×™×¦×™××ª ×”××¡×¢ ××•×ª× ×™×ª ×‘×¨×™×©×•× ×©×œ ×œ×¤×—×•×ª 10 ××©×ª×ª×¤×•×ª ×¢×“ ×œ×™×•× 30 ×‘×™×•× ×™ 2026. ×× ×œ× ×™×•×©×’ ×™×¢×“ ×–×”, ×”××¡×¢ ×™×‘×•×˜×œ ××• ×™×™×“×—×”, ×•×”××©×ª×ª×¤×•×ª ×™×”×™×• ×–×›××™×•×ª ×œ×”×—×–×¨ ×›×¡×¤×™ ××œ× ×©×œ ×›×œ ×”×¡×›×•××™× ×©×©×™×œ××•.</p>
            <p><strong>6.2. ×‘×™×˜×•×œ ×¢×§×‘ ×›×•×— ×¢×œ×™×•×Ÿ:</strong> ×‘××§×¨×” ×©×œ ×‘×™×˜×•×œ ×”××¡×¢ ×›×•×œ×• ×¢×§×‘ × ×¡×™×‘×•×ª ×§×˜×¡×˜×¨×•×¤×œ×™×•×ª ××• ×›×•×— ×¢×œ×™×•×Ÿ ×©××™× ×Ÿ ×‘×©×œ×™×˜×ª ×”×¦×“×“×™×, ×™×¤×¢×œ×• ×”×××¨×’× ×™× ×œ×”×©×‘×ª ××§×¡×™××•× ×”×›×¡×¤×™× ××¡×¤×§×™ ×”×©×˜×— ×‘×—×•"×œ. ××ª×•×š ×“××™ ×”××¨×’×•×Ÿ (×”×•×¦××•×ª ×§×‘×•×¢×•×ª ×‘×™×©×¨××œ), ×™×§×•×–×– ×¡×š ×©×œ 800 ×©"×— ×‘×’×™×Ÿ ×©×¢×•×ª ×”×™×¢×¨×›×•×ª ×•×¢×‘×•×“×” ×©×›×‘×¨ ×‘×•×¦×¢×•, ×•×”×™×ª×¨×” ×ª×•×—×–×¨ ×œ××©×ª×ª×¤×ª.</p>
            <p><strong>6.3. ×‘×™×˜×•×œ ×¢×§×‘ ×—×•×¡×¨ ×›×“××™×•×ª ×›×œ×›×œ×™×ª:</strong> ×××—×¨ ×•××¡×¢ ×–×” ××ª×•×›× ×Ÿ ×•××ª×•××—×¨ ×¢×‘×•×¨ ×§×‘×•×¦×” ×§×˜× ×” ×•××•×¨×’× ×™×ª, ×‘×™×˜×•×œ ×›×“×™×Ÿ ×©×œ ××©×ª×ª×¤×ª ××—×ª ××• ×™×•×ª×¨ ×¢×œ×•×œ ×œ×¤×’×•×¢ ×§×©×•×ª ×‘×”×™×ª×›× ×•×ª ×”×›×œ×›×œ×™×ª ××• ×”×œ×•×’×™×¡×˜×™×ª ×©×œ ×”×¤×¨×•×™×§×˜ ×›×•×œ×•. ×‘××™×“×” ×•××©×ª×ª×¤×ª ××‘×˜×œ×ª ×›×“×™×Ÿ, ×•×”×××¨×’× ×™× ××’×™×¢×™× ×œ××¡×§× ×” ×›×™ ×‘×™×˜×•×œ ×–×” ××™×™×¦×¨ ×’×™×¨×¢×•×Ÿ ×—××•×¨ ×©××™× ×• ×××¤×©×¨ ××ª ×›×™×¡×•×™ ×”×”×•×¦××•×ª ×”×§×‘×•×¢×•×ª ×©×œ ×”×˜×™×•×œ, ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×œ×“×—×•×ª ××• ×œ×‘×˜×œ ××ª ×”×˜×™×•×œ ×›×•×œ×•. ×‘××§×¨×” ×›×–×”, ×©××¨ ×”××©×ª×ª×¤×•×ª ×‘×§×‘×•×¦×” ×™×¢×•×“×›× ×• ××™×™×“×™×ª ×•×™×§×‘×œ×• ×”×—×–×¨ ×›×¡×¤×™ ××œ× ×©×œ 100% ××”×›×¡×¤×™× ×©×©×•×œ××• ×¢×œ ×™×“×Ÿ ×œ×××¨×’× ×™×.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">7. ×”×¦×”×¨×ª ×‘×¨×™××•×ª, × ×˜×™×œ×ª ×¡×™×›×•×Ÿ ×•×‘×™×˜×•×— ×—×•×‘×”</h4>
          <div className="space-y-2">
            <p><strong>7.1. ×›×©×™×¨×•×ª ×•×›×•×©×¨ ×’×•×¤× ×™:</strong> ××•×¤×™ ×”××¡×¢ ×›×•×œ×œ ×¤×¢×™×œ×•×™×•×ª ×©×˜×—, ×¡×™×•×¨×™× ×¨×’×œ×™×™× ×•××××¥ ×¤×™×–×™ ××ª×•×Ÿ. ×‘×—×ª×™××ª×” ×¢×œ ×”×¡×›× ×–×”, ×”××©×ª×ª×¤×ª ××¦×”×™×¨×” ×›×™ ××¦×‘ ×‘×¨×™××•×ª×” ×ª×§×™×Ÿ ×•×”×™× ×›×©×™×¨×” ×¤×™×–×™×ª ×•× ×¤×©×™×ª ×œ××¡×¢ ××¢×™×Ÿ ×–×”. ×”××©×ª×ª×¤×ª ××—×•×™×‘×ª ×œ×—×ª×•× ×•×œ×”×©×™×‘ ××ª ×˜×•×¤×¡ ×”×¦×”×¨×ª ×”×‘×¨×™××•×ª ×•×”×•×•×™×ª×•×¨ ×”××¦×•×¨×£ ×›× ×¡×¤×— ×'.</p>
            <p><strong>7.2. ×‘×™×˜×•×— ×—×•×‘×”:</strong> ×—×œ×” ×—×•×‘×” ××•×—×œ×˜×ª ×•×‘×œ×¢×“×™×ª ×¢×œ ×”××©×ª×ª×¤×ª ×œ×¨×›×•×© ×¤×•×œ×™×¡×ª ×‘×™×˜×•×— × ×¡×™×¢×•×ª ××§×™×¤×” ×œ×—×•"×œ ×”×›×•×œ×œ×ª ×›×™×¡×•×™ ×¨×¤×•××™ ××•×¨×—×‘, ×—×™×œ×•×¥ ×•×”×¦×œ×”, ×•×›×™×¡×•×™ ×œ×¤×¢×™×œ×•×™×•×ª ×©×˜×—. ××•××œ×¥ ×‘×—×•× ×œ×¨×›×•×© ×¤×•×œ×™×¡×ª "×‘×™×˜×•×œ ××›×œ ×¡×™×‘×”" (×›×’×•×Ÿ ×˜×¨×™×¤ ×’×¨×× ×˜×™) ×‘×¡××•×š ×œ××•×¢×“ ×”×¨×™×©×•× ×¢×œ ×× ×ª ×œ×”×‘×˜×™×— ×”×’× ×” ××§×¡×™××œ×™×ª ×¢×œ ×›×¡×¤×™ ×”××©×ª×ª×¤×ª.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">8. ×’×™×œ×•×™ × ××•×ª, ×”×—×¨×’×•×ª ×•×”×’× ×ª ×”×¤×¨×˜×™×•×ª</h4>
          <div className="space-y-2">
            <p><strong>8.1. ×’×™×œ×•×™ × ××•×ª:</strong> ×‘×”×ª×× ×œ×—×•×§ ×©×™×¨×•×ª×™ ×ª×™×™×¨×•×ª ×•×”×ª×§× ×•×ª ××›×•×—×• (×’×™×œ×•×™ × ××•×ª), ×ª×•×›× ×™×ª ×”××¡×¢ ×”××¤×•×¨×˜×ª, ×”×›×•×œ×œ×ª ××ª ×©××•×ª ×”××œ×•× ×•×ª ×”××ª×•×›× × ×™×, ×“×™×¨×•×’×, ×›×ª×•×‘×•×ª×™×”×, ××¡×¤×¨×™ ×”×˜×œ×¤×•×Ÿ ×©×œ×”×, ×××¦×¢×™ ×”×ª×—×‘×•×¨×” ×•×”××¨×•×—×•×ª ××¦×•×¨×¤×ª ×œ×”×¡×›× ×–×” ×›× ×¡×¤×— ×‘'. ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×œ×”×—×œ×™×£ ×¡×¤×§×™× ××• ××œ×•× ×•×ª ×‘××œ×•× ×•×ª ×‘×¨××” ×–×”×” ×¢×§×‘ ××™×œ×•×¦×™ ×©×˜×—.</p>
            <p><strong>8.2. ×”×—×¨×’×•×ª:</strong> ××—×™×¨ ×”××¡×¢ ××™× ×• ×›×•×œ×œ ×˜×™×¡×•×ª ×‘×™× ×œ××•××™×•×ª, ××©×¨×ª ×›× ×™×¡×” ×œ×¡×¨×™ ×œ× ×§×” (ETA), ×‘×™×˜×•×— × ×¡×™×¢×•×ª ××™×©×™, ×•×›×œ ×”×•×¦××” ××™×©×™×ª ×©××™× ×” ××¤×•×¨×˜×ª ××¤×•×¨×©×•×ª ×‘×ª×•×›× ×™×ª ×”××¡×¢.</p>
            <p><strong>8.3. ×”×’× ×ª ×”×¤×¨×˜×™×•×ª:</strong> ×‘×”×ª×× ×œ×—×•×§ ×”×’× ×ª ×”×¤×¨×˜×™×•×ª, ×”×ª×©×"×-1981, ××™×“×¢ ××™×©×™ ×©×™×™××¡×¨ ×¢×œ ×™×“×™ ×”××©×ª×ª×¤×ª, ×œ×¨×‘×•×ª ××™×“×¢ ×¨×¤×•××™ (×”××•×’×“×¨ ×‘×—×•×§ ×›"××™×“×¢ ×‘×¢×œ ×¨×’×™×©×•×ª ××™×•×—×“×ª"), ×™×™×©××¨ ×‘××•×¤×Ÿ ×××•×‘×˜×—. ××™×“×¢ ×–×” ×™×©××© ××š ×•×¨×§ ×œ×¦×•×¨×š ×”×¤×§×ª ×”××¡×¢, ×ª×¤×¢×•×œ×•, ×•×©××™×¨×” ×¢×œ ×©×œ×•× ×”××©×ª×ª×¤×•×ª ×•×‘×¨×™××•×ª×Ÿ, ×•×œ× ×™×•×¢×‘×¨ ×œ×©×•× ×¦×“ ×©×œ×™×©×™ ×©××™× ×• ×¨×œ×•×•× ×˜×™ ×œ×”×¤×§×ª ×”××¡×¢ ×œ×œ× ×”×¡×›××” ××¤×•×¨×©×ª.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">9. ×”×“×™×Ÿ ×”×—×œ ×•×¡××›×•×ª ×©×™×¤×•×˜</h4>
          <p>×”×¡×›× ×–×” ×™×”×™×” ×›×¤×•×£ ×œ×—×•×§×™ ××“×™× ×ª ×™×©×¨××œ ×•×™×¤×•×¨×© ×œ×¤×™×”×. ×œ×‘×ª×™ ×”××©×¤×˜ ×”××•×¡××›×™× ×‘×¢×™×¨ ×‘××¨ ×©×‘×¢ ×•×‘××—×•×– ×”×“×¨×•× ×ª×”×™×” ×¡××›×•×ª ×©×™×¤×•×˜ ×™×™×—×•×“×™×ª ×•×‘×œ×¢×“×™×ª ×œ×“×•×Ÿ ×‘×›×œ ×¡×›×¡×•×š ××• ××—×œ×•×§×ª ×”× ×•×‘×¢×™× ××”×¡×›× ×–×” ××• ×”×§×©×•×¨×™× ××œ×™×•.</p>
          <p className="mt-2 text-xs font-semibold text-stone-600">×—×ª×™××” ×“×™×’×™×˜×œ×™×ª ××• ××™×©×•×¨ ×‘×›×ª×‘ ×‘×¢×ª ×”×¢×‘×¨×ª ×“××™ ×”××§×“××”, ××”×•×•×™× ×”×¡×›××” ××œ××”, ×‘×œ×ª×™ ××¡×•×™×’×ª ×•×¡×•×¤×™×ª ×œ×›×œ ×”×ª× ××™× ×”××¤×•×¨×˜×™× ×‘×”×¡×›× ×–×” ×•×‘× ×¡×¤×—×™×•.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-5 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <div>
        <h3 className="font-bold text-lg text-teal-900 mb-1">Travel Agreement and Registration Terms â€“ Women's Journey to Sri Lanka (Summer 2026)</h3>
        <div className="p-3 bg-stone-100/80 rounded-lg text-xs space-y-1 text-stone-600 border border-stone-200">
          <p><strong>Between:</strong> The Production Team: Naomi, Aliza, and Eyal (hereinafter: the "Organizers")</p>
          <p><strong>And:</strong> The Participant (hereinafter: the "Participant")</p>
        </div>
      </div>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">1. Nature of the Engagement (Agency & Trust Model)</h4>
        <div className="space-y-2">
          <p><strong>1.1.</strong> The Participant declares she is aware that the Organizers act solely as intermediaries and agents between her and the tourism suppliers, hotels, transportation companies, and subcontractors in Sri Lanka, and that all supplier-related funds are held in trust and transferred directly to these third-party providers.</p>
          <p><strong>1.2.</strong> The Participant is solely responsible for her independent arrival at the designated meeting point. This registration covers ground services only and is strictly independent of the Participant's personal international flight arrangements.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">2. Trip Cost, Pricing, and Financial Transparency</h4>
        <p className="mb-2">In strict accordance with Israeli tax law, including Regulation 6 of the Value Added Tax Regulations, 1976 (Expenses in favor of a third party), the payment for the trip is split into two separate channels, and separate receipts will be issued:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>2.1. Base Price:</strong> 8,050 ILS (Based on $2,710 USD). The price is based on a minimum group of 10 participants and double occupancy (two participants per room).</li>
          <li><strong>2.2. Supplier Deposit vs. Organizing Fee:</strong> Out of the base price, approximately 1,400 ILS constitutes the Organizers' fee for preparation and organization (for which a standard Tax Invoice/Receipt will be issued). The balance, approximately 6,650 ILS, constitutes Supplier Deposit Funds held in trust/escrow exclusively for the Participant's expenses in Sri Lanka (for which a specific "Deposit Receipt" will be issued to the Participant, stating that the funds are received for paying expenses on behalf of the client).</li>
          <li><strong>2.3. Refundable Field Activities Component:</strong> Out of the base price, a sum of $290 USD is defined as the "field activities component." This specific component will be excluded in favor of the Participant in the refund mechanism in case of cancellation (as detailed in Section 4).</li>
          <li><strong>2.4. Payment Schedule & Registration Fee:</strong> The payment for the trip shall be made in the following installments (in USD or its ILS equivalent according to the high transfer exchange rate on the day of payment):
            <ul className="list-circle ml-5 mt-1 space-y-1 text-xs">
              <li><strong>Advance Payment:</strong> 1,000 ILS upon registration. Out of this sum, 300 ILS is defined as a non-refundable registration and preparation fee (except in the event of a lawful cancellation within the first 14 days, as defined by law).</li>
              <li><strong>Second & Final Installments:</strong> To be paid according to the provided project timeline prior to departure.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">3. Single Supplement and Rooming Mechanics</h4>
        <p className="mb-2"><strong>3.1.</strong> To prevent a deficit in the trip's budget due to an odd number of participants, upgrading or being forced into a single room will be priced in two tracks:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Track A (Even number of single room requests):</strong> If at least 2 participants in the group request a single room, the supplement will be $450 USD per participant (Total trip price: $3,160 USD).</li>
          <li><strong>Track B (Forced / Sole single room):</strong> If only one (1) participant in the entire group requests a single room, OR in the event of a "forced single room" due to an odd number of participants or the cancellation of a roommate, the supplement will be $900 USD (Total trip price: $3,610 USD), in order to cover the fixed cost of the additional room forced upon the logistical layout.</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">4. The "Determining Date" and Cancellation Policy</h4>
        <p className="mb-2">This journey includes tourism services provided entirely outside of Israel. In accordance with Section 14C2 of the Israeli Consumer Protection Law, 1981, the Participant is offered the choice between the following cancellation tracks:</p>
        
        <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 mb-3 space-y-2">
          <p><strong>Track A â€“ Israeli Consumer Protection Law (Default):</strong> The right to cancel within 14 days from the date of the transaction or receipt of this document, provided the cancellation is made at least 7 non-rest days before the departure date. For a senior citizen (over 65), a new immigrant, or a person with a disability, the cancellation period is 4 months from the transaction date (subject to presenting an appropriate certificate and provided the engagement included a direct conversation). The cancellation fee in this track will be 5% of the transaction value or 100 ILS, whichever is lower. <em>(Legal Notice: Cancellation after this statutory timeframe will automatically trigger the strict cancellation fees of the foreign suppliers, as detailed in Track B).</em></p>
          <p><strong>Track B â€“ Foreign Suppliers & Group Commitments Policy (Applicable starting the "Determining Date" - June 30, 2026):</strong> Under this track, the cancellation policy of the foreign suppliers applies. The parties agree that the "Determining Date" upon which reservations with ground suppliers become final and binding is June 30, 2026 (If the Organizers make actual non-refundable payments to suppliers prior to this date, the Determining Date will shift to the actual date of payment, and notice will be given).</p>
        </div>

        <div className="space-y-2">
          <p><strong>4.1. Cancellation after the Determining Date:</strong> A Participant who cancels after the Determining Date without providing a replacement participant will NOT be entitled to a full refund. The refund formula is based on returning the field activities component ($290 USD) plus net actual savings, minus fixed, uncancelable costs and costs forced upon her roommate.</p>
          <p><strong>4.2. Exact Refund and Retention Fees:</strong></p>
          <ul className="list-disc ml-5 space-y-1 text-xs">
            <li><strong>Participant in a Double Room:</strong> Refund of $550 USD only (Organizers/Suppliers retain $2,160 USD).</li>
            <li><strong>Participant in a Single Room (Forced or Voluntary):</strong> Refund of $1,640 USD only (Organizers/Suppliers retain $1,520 USD for forced single from $3,160 total price; or retain $1,970 USD for voluntary single from $3,610 total price).</li>
          </ul>
          <p><strong>4.3. Hotel Cancellation Contingency (Offset Mechanism):</strong> The Participant's eligibility for the single-room refund ($1,640 USD) is strictly conditional upon the hotels and ground suppliers in Sri Lanka confirming a 100% cancellation of the specific single room without penalty. Any cancellation fees or penalties charged by the hotels/suppliers for the cancelled room shall be deducted, dollar-for-dollar, from the Participant's refund.</p>
          <p><strong>4.4. Cancellation Notice Procedure:</strong> A cancellation notice must be delivered in writing (WhatsApp message to Naomi/Eyal PLUS an email) and takes effect only upon confirmation of receipt on working days (excluding Fridays, Saturdays, and Israeli/local holidays).</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">5. Replacement Participant (Full Refund Mechanism)</h4>
        <div className="space-y-2">
          <p><strong>5.1.</strong> Notwithstanding Section 4, a Participant who cancels after the Determining Date but independently presents a Replacement Participant to take her place, will be entitled to a 100% full refund.</p>
          <p><strong>5.2.</strong> This is strictly conditional upon the new participant paying the full trip cost and maintaining the exact existing room arrangement. Only direct costs required by airlines or ground suppliers for official name changes (Name Change Fee) will be deducted from this refund.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">6. Organizers' Right to Postpone or Cancel</h4>
        <div className="space-y-2">
          <p><strong>6.1. Minimum Participants:</strong> The execution of the trip is conditional upon the registration of at least 10 participants by June 30, 2026. If this target is not met, the trip will be postponed or canceled, and participants will be entitled to a full refund of all funds paid.</p>
          <p><strong>6.2. Force Majeure:</strong> In the event of a cancellation of the entire trip due to catastrophic circumstances or force majeure beyond the control of the parties, the Organizers will act to recover maximum funds from the ground suppliers. From the organizing fee (fixed expenses in Israel), a sum of 800 ILS will be deducted for work and preparation already performed, and the balance will be refunded.</p>
          <p><strong>6.3. Cancellation Due to Economic Unviability:</strong> Because this journey is priced and planned for a small, organic group, a lawful cancellation by one or more participants may severely harm the economic or logistical viability of the entire project. If a participant cancels lawfully, and the Organizers conclude that this cancellation causes a severe deficit in meeting the trip's fixed expenses rendering the trip unviable, the Organizers reserve the right to cancel or postpone the trip. In such a scenario, all remaining participants will be notified immediately and will receive a 100% full refund of all funds paid to the Organizers.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">7. Health Declaration and Mandatory Insurance</h4>
        <div className="space-y-2">
          <p><strong>7.1. Health & Fitness:</strong> The nature of the trip includes field activities, walking tours, and moderate physical effort. By signing this contract, the Participant declares that her health condition is sound and fit for such a journey. The Participant is strictly required to sign and return the attached Medical Waiver of Claims (Appendix A).</p>
          <p><strong>7.2. Mandatory Insurance:</strong> It is an absolute and exclusive obligation of the Participant to purchase comprehensive travel insurance abroad, including extended medical coverage, search and rescue, and coverage for extreme/field activities. It is highly recommended to purchase a "Cancel for Any Reason" policy (such as Trip Guaranty) as close as possible to the registration date to ensure maximum protection of the Participant's funds.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">8. Disclosure, Exclusions, and Privacy</h4>
        <div className="space-y-2">
          <p><strong>8.1. Full Disclosure:</strong> In accordance with the Tourism Services Regulations (Information Disclosure), 2003, the detailed Itinerary, including planned hotels, ratings, addresses, phone numbers, transportation, and meals is attached to this agreement as Appendix B. The Organizers reserve the right to replace suppliers or hotels with accommodations of an identical standard due to field constraints.</p>
          <p><strong>8.2. Exclusions:</strong> The trip price does NOT include international flights, Sri Lanka entry visa (ETA), personal travel insurance, and any personal expenses not explicitly listed in the itinerary.</p>
          <p><strong>8.3. Privacy Protection:</strong> In accordance with the Privacy Protection Law, 1981, personal information provided by the Participant, including medical data (defined as "information with special sensitivity"), will be stored securely. It will be used solely for the purpose of producing the journey, its operation, and maintaining the safety of the participants, and will not be transferred to any third party not relevant to the production of the trip without explicit consent.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">9. Governing Law and Jurisdiction</h4>
        <p>This Agreement shall be governed by and construed in accordance with the laws of the State of Israel. The competent courts in Be'er Sheva and the Southern District shall have exclusive jurisdiction to hear and determine any dispute arising from or related to this Agreement.</p>
        <p className="mt-2 text-xs font-semibold text-stone-600">Digital signature or written confirmation upon transferring the advance payment constitutes full, unqualified, and final agreement to all the terms detailed in this agreement and its appendices.</p>
      </section>
    </div>
  );
}


```

## ×§×•×‘×¥: ./components/Agreements/ItineraryAppendix.jsx
```
import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function ItineraryAppendix({ season }) {
  const { lang } = useSite();
  const isHe = lang === 'he';
  const isWinter = season === 'winter';

  if (isWinter) {
    if (isHe) {
      return (
        <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="rtl">
          <p className="font-bold text-base">× ×¡×¤×— ××¡×œ×•×œ â€“ ××¡×¢ × ×©×™× ×œ×¡×¨×™ ×œ× ×§×” (×—×•×¨×£ 2027)</p>
          
          <div className="space-y-3">
            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 1: ×”×’×¢×” ×•× ×¡×™×¢×” ×œ× ×’×•××‘×•/×§×•×œ×•××‘×•</p>
              <p><strong>×”×¢×¨×‘:</strong> × ×—×™×ª×” ×‘×©×“×” ×”×ª×¢×•×¤×” ×©×œ ×§×•×œ×•××‘×• (CMB), ×¡×™×“×•×¨×™ ×”×’×¢×” ×•×”×¢×‘×¨×” ×œ××œ×•×Ÿ.</p>
              <p><strong>×¤×™× ×•×§:</strong> ×§×‘×œ×ª ×—×“×¨×™×, ××¡××–' ××¤× ×§ ×‘××œ×•×Ÿ ×œ×”×ª×—×œ×ª ×”××¡×¢ ×‘××•×•×™×¨×” ×¨×’×•×¢×” ×•××¨×•×—×ª ×¢×¨×‘ ×—×’×™×’×™×ª.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×§×•×œ×•××‘×•/× ×’×•××‘×• (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 2: ××§×¡×˜×¨×™× ×‘×§×™×˜×•×œ×’×œ×” ×•× ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×”</p>
              <p><strong>×‘×•×§×¨:</strong> ×˜×™×•×œ ×–×¨×™×—×” ××•×§×“×, ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.</p>
              <p><strong>×××¦×¢ ×”×™×•×:</strong> × ×¡×™×¢×” ×œ×§×™×˜×•×œ×’×œ×” ×œ×¨×¤×˜×™× ×’ ××¨×’×© ×‘××™× ×œ×‘× ×™× ×•×”×œ×™×›×ª ×§× ×™×•× ×™× ×’ ×‘×™×¢×¨ ×”×’×©×.</p>
              <p><strong>×¢×¨×‘:</strong> × ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×”, ×¦'×§-××™×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×” (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 3: ××˜×¢×™ ×ª×” ×•×”×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×œ××œ×”</p>
              <p><strong>×‘×•×§×¨:</strong> ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.</p>
              <p><strong>×××¦×¢ ×”×™×•×:</strong> ×¡×™×•×¨ ××•×“×¨×š ×‘××˜×¢×™ ×”×ª×” ×©×œ × ×•×•××¨×” ××œ×™×” ×•×‘××¤×œ×™×.</p>
              <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> × ×¡×™×¢×” ×‘×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×”××¤×•×¨×¡××ª ×× ×•×•××¨×” ××œ×™×” ×œ××œ×”.</p>
              <p><strong>×¢×¨×‘:</strong> ×”×’×¢×” ×œ××œ×”, ×¦'×§-××™×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ ××• ×‘×‘×™×ª ×—×‘"×“.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×” (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 4: ××¤×œ×™× ×•××“×¨× ×œ×™×Ÿ ×‘××œ×”</p>
              <p><strong>×‘×•×§×¨:</strong> ×˜×™×•×œ ×–×¨×™×—×”, ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.</p>
              <p><strong>×××¦×¢ ×”×™×•×:</strong> ×˜×™×•×œ ×©×˜×— ××œ ××¤×œ×™ ×“×™××œ×•×× ×”××¨×”×™×‘×™×, ×’×œ×™×©×ª ××•××’×” (Flying Ravana) ×•×–××Ÿ ×§× ×™×•×ª ×‘×¢×™×™×¨×” ××œ×”.</p>
              <p><strong>×¢×¨×‘:</strong> × ×¡×™×¢×” ×œ××œ×•×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×§×‘×•×¦×ª×™×ª.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×” (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 5: ×¡×¤××¨×™ ×¤×™×œ×™× ×•×™×•×’×” ×‘×©×§×™×¢×” ×‘×“×¨×•×</p>
              <p><strong>×‘×•×§×¨:</strong> ×™×•×’×”, ××¨×•×—×ª ×‘×•×§×¨ ×•× ×¡×™×¢×” ×“×¨×•××”.</p>
              <p><strong>×¦×”×¨×™×™×:</strong> ×¡×¤××¨×™ ×¤×™×œ×™× ××¨×ª×§ ×‘×©××•×¨×ª ××•×“×•×•××œ××•×•×” ×‘×˜×‘×¢ ×”×¤×¨××™.</p>
              <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> ×”×’×¢×” ×œ×—×•×£ ×”×“×¨×•××™, ×™×•×’×” ×‘×©×§×™×¢×” ××•×œ ×”×™× ×•×¢×™×¡×•×™ ××¤× ×§ ×‘××œ×•×Ÿ.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×—×•×£ ×”×“×¨×•××™ (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 6: ×©× ×•×¨×§×œ×™× ×’ ×•×”×ª××¨×’× ×•×ª ×œ×©×‘×ª</p>
              <p><strong>×‘×•×§×¨:</strong> ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.</p>
              <p><strong>×××¦×¢ ×”×™×•×:</strong> ×©× ×•×¨×§×œ×™× ×’ ××“×”×™× ×¢× ×¦×‘×™ ×™× ×‘×—×•×£, ×–××Ÿ ×—×•×£ ×—×•×¤×©×™ ×•×§× ×™×•×ª ××§×•××™×•×ª.</p>
              <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> ×”×ª××¨×’× ×•×ª ×œ×§×¨××ª ×›× ×™×¡×ª ×©×‘×ª.</p>
              <p><strong>×¢×¨×‘:</strong> ×§×‘×œ×ª ×©×‘×ª ×•×¡×¢×•×“×ª ×©×‘×ª ×—×’×™×’×™×ª.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×—×•×£ ×”×“×¨×•××™ (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 7: ×©×‘×ª ×× ×•×—×” ×•×™×•×’×”</p>
              <p><strong>×‘×•×§×¨:</strong> ×˜×™×•×œ ×–×¨×™×—×”, ×¡×©×Ÿ ×™×•×’×”, ×§×¤×” ×•×¢×•×’×” ×•×œ××—×¨×™×• ××¨×•×—×ª ×‘×•×§×¨/×‘×¨×× ×¥' ×××•×—×¨×ª.</p>
              <p><strong>×××¦×¢ ×”×™×•×:</strong> ×–××Ÿ ×—×•×¤×©×™ ×œ×× ×•×—×”, ×§×¨×™××” ×•××•×•×™×¨×ª ×©×‘×ª ×©×§×˜×” ×¢×œ ×”×—×•×£.</p>
              <p><strong>×¢×¨×‘:</strong> ××•×¦××™ ×©×‘×ª, ×”×‘×“×œ×” ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×—×•×£ ×”×“×¨×•××™ (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 8: ×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×¡××¤ ×©×§×™×¢×”</p>
              <p><strong>×‘×•×§×¨ ××•×§×“×:</strong> ×©×™×™×˜ ××™×•×—×“ ×œ×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×“×•×œ×¤×™× ×™× ×‘××•×§×™×™× ×•×¡.</p>
              <p><strong>×‘×•×§×¨:</strong> ××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.</p>
              <p><strong>×××¦×¢ ×”×™×•×:</strong> ×–××Ÿ ×§× ×™×•×ª, × ×¡×™×¢×” ×•×”×ª××¨×’× ×•×ª ×‘××œ×•×Ÿ ×‘××”×”× ×’××” (12:30).</p>
              <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> ×¡××¤ ×©×§×™×¢×” ××•×œ ×”×™×.</p>
              <p><strong>×¢×¨×‘:</strong> ××¨×•×—×ª ×¢×¨×‘ ×—××” ×‘××œ×•×Ÿ.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××”×”× ×’××” (××• ×“×•××”).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">×™×•× 9: ×™×•× ××—×¨×•×Ÿ ×•×˜×™×¡×”</p>
              <p><strong>×‘×•×§×¨:</strong> ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.</p>
              <p><strong>×××¦×¢ ×”×™×•×:</strong> ×–××Ÿ ×—×•×¤×©×™ ×œ×× ×•×—×”, ×¡×™×“×•×¨×™× ××—×¨×•× ×™× ×•×§× ×™×•×ª.</p>
              <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> × ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×” ×‘×§×•×œ×•××‘×• (CMB) ×œ×§×¨××ª ×”×˜×™×¡×” ×—×–×¨×” ×œ×™×©×¨××œ.</p>
              <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª.</p>
            </div>
          </div>

          <p className="text-xs mt-4"><strong>×”×‘×”×¨×” ××©×¤×˜×™×ª:</strong> ×”××¡×œ×•×œ ×”××•×¦×’ ×œ×¢×™×œ ××¤×¨×˜ ××ª ×”×œ×•"×– ×”××ª×•×›× ×Ÿ ×•×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×”××œ××” ×œ×‘×¦×¢ ×”×ª×××•×ª ×”×›×¨×—×™×•×ª ×‘××¡×œ×•×œ, ×‘×¡×“×¨ ×”×™××™×, ××• ×œ×”×—×œ×™×£ ××ª ×”××œ×•× ×•×ª ×”××¤×•×¨×˜×™× ×‘××§×•××•×ª ×œ×™× ×” ×‘×¨××” ×–×”×”, ×¢×§×‘ ××™×œ×•×¦×™ ×©×˜×—, ×”×—×œ×˜×•×ª ×¡×¤×§×™× ××§×•××™×™×, ×ª× ××™ ××–×’ ××•×•×™×¨ ××• ×›×•×— ×¢×œ×™×•×Ÿ.</p>
          <p className="text-xs mt-2"><strong>×¤×™×¨×•×˜ ×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ($290 USD):</strong> ×”×¨×›×™×‘ ××›×¡×” ×‘××œ×•××• ××ª ×›×œ ×“××™ ×”×›× ×™×¡×” ×”×§×‘×•×¦×ª×™×™×, ×”×“×¨×›×” ××§×•××™×ª, ×•×œ×•×’×™×¡×˜×™×§×” ×¢×‘×•×¨ ×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×¤×¢×™×œ×•×™×•×ª ××•×¤×¦×™×•× ×œ×™×•×ª ××• ×˜×™×¤×•×œ×™ ×¡×¤× ×™×©×•×œ××• ×‘× ×¤×¨×“ ×¢×œ ×™×“×™ ×”××©×ª×ª×¤×ª.</p>
        </div>
      );
    } else {
      return (
        <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
          <p className="font-bold text-base">Itinerary Appendix â€“ Women\'s Journey to Sri Lanka (Winter 2027)</p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 1: Arrival & Transit to Negombo/Colombo</p>
              <p><strong>Evening:</strong> Landing at Colombo Airport (CMB), immigration procedures, and transfer to hotel.</p>
              <p><strong>Wellness:</strong> Hotel check-in, pampering massage to kick off the trip, and a welcome dinner.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Colombo/Negombo (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 2: Extreme in Kithulgala & Drive to Nuwara Eliya</p>
              <p><strong>Morning:</strong> Early sunrise hike, yoga, and breakfast at the hotel.</p>
              <p><strong>Mid-Day:</strong> Drive to Kithulgala for whitewater rafting and rainforest canyoning.</p>
              <p><strong>Evening:</strong> Transit to Nuwara Eliya, check-in, and dinner at the hotel.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Nuwara Eliya (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 3: Tea Gardens & Scenic Train to Ella</p>
              <p><strong>Morning:</strong> Yoga and breakfast.</p>
              <p><strong>Mid-Day:</strong> Guided tour of tea plantations and Nuwara Eliya waterfalls.</p>
              <p><strong>Afternoon:</strong> The iconic scenic train ride from Nuwara Eliya to Ella.</p>
              <p><strong>Evening:</strong> Arrival in Ella, check-in, and dinner (at hotel or local Chabad House).</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Ella (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 4: Waterfalls & Adrenaline in Ella</p>
              <p><strong>Morning:</strong> Sunrise hike, yoga, and breakfast.</p>
              <p><strong>Mid-Day:</strong> Excursion to the majestic Diyaluma Falls, Flying Ravana Zipline, and local shopping in Ella.</p>
              <p><strong>Evening:</strong> Group dinner and rest.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Ella (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 5: Elephant Safari & Sunset Yoga on South Coast</p>
              <p><strong>Morning:</strong> Yoga, breakfast, and drive south.</p>
              <p><strong>Mid-Day:</strong> Elephant safari in Udawalawe National Park.</p>
              <p><strong>Afternoon:</strong> Arrival at the South Coast, sunset yoga, and a relaxing massage.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel on the South Coast (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 6: Turtles Snorkeling & Shabbat Preparation</p>
              <p><strong>Morning:</strong> Yoga and breakfast at the hotel.</p>
              <p><strong>Mid-Day:</strong> Snorkeling with wild sea turtles, free beach time, and local shopping.</p>
              <p><strong>Afternoon:</strong> Shabbat preparations.</p>
              <p><strong>Evening:</strong> Welcoming Shabbat; festive dinner.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel on the South Coast (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 7: A Restful Shabbat & Yoga</p>
              <p><strong>Morning:</strong> Sunrise hike, yoga session, morning coffee, followed by a late breakfast/brunch.</p>
              <p><strong>Mid-Day:</strong> Free time for reading, relaxing, and quiet beach walks.</p>
              <p><strong>Evening:</strong> Havdalah and group dinner.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel on the South Coast (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 8: Whale Watching & Sunset SUP</p>
              <p><strong>Early Morning:</strong> Ocean cruise search for whales and dolphins.</p>
              <p><strong>Morning:</strong> Breakfast.</p>
              <p><strong>Mid-Day:</strong> Shopping, transfer and check-in at Ahangama hotel (12:30).</p>
              <p><strong>Afternoon:</strong> Sunset stand-up paddleboarding (SUP).</p>
              <p><strong>Evening:</strong> Dinner at the hotel.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Ahangama (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 9: Final Day & Departure</p>
              <p><strong>Morning:</strong> Yoga and breakfast.</p>
              <p><strong>Mid-Day:</strong> Relaxation and final souvenir shopping.</p>
              <p><strong>Afternoon:</strong> Drive to Colombo Airport (CMB) for the flight back.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: 3 meals.</p>
            </div>
          </div>

          <p className="text-xs mt-4"><strong>Legal Disclaimer:</strong> The itinerary presented above outlines the planned schedule and included activities. The Organizers reserve the full right to make necessary adjustments to the itinerary, the order of days, or substitute the specified hotels with accommodations of an identical standard, due to field constraints, local supplier decisions, weather conditions, or force majeure.</p>
          <p className="text-xs mt-2"><strong>Activity Component Breakdown ($290 USD):</strong> Included Activities (Covered under the $290 USD Component) fully covers all group entry fees, local guiding services, and logistics for the included excursions. Excluded / Optional Activities (Paid Separately on Site) such as Ayurvedic spa treatments or marine wildlife excursions must be paid for independently.</p>
        </div>
      );
    }
  }

  // Summer Trip (default)
  if (isHe) {
    return (
      <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="rtl">
        <p className="font-bold text-base">× ×¡×¤×— ××¡×œ×•×œ â€“ ××¡×¢ × ×©×™× ×œ×¡×¨×™ ×œ× ×§×” (×§×™×¥ 2027)</p>
        
        <div className="space-y-3">
          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 1: ×”×’×¢×” ×•× ×¡×™×¢×” ×œ×¡×™×’×™×¨×™×™×”</p>
            <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> × ×—×™×ª×” ×‘×©×“×” ×”×ª×¢×•×¤×” ×©×œ ×§×•×œ×•××‘×• (CMB) ×•×¡×™×“×•×¨×™ ×”×’×¢×”.</p>
            <p><strong>×¢×¨×‘:</strong> × ×¡×™×¢×” ×§×‘×•×¦×ª×™×ª ×œ×¡×™×’×™×¨×™×™×” (×›-4 ×©×¢×•×ª).</p>
            <p><strong>×œ×™×œ×”:</strong> ×¦'×§-××™×Ÿ ×‘××œ×•×Ÿ, ×—×œ×•×§×ª ×—×“×¨×™× ×•××¨×•×—×ª ×¢×¨×‘ ×××•×—×¨×ª ×•×§×‘×œ×ª ×¤× ×™×.</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Hotel Sigiriya (××• ×“×•××”).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 2: ×¤×œ××™ ×¡×™×’×™×¨×™×™×”</p>
            <p><strong>×‘×•×§×¨ ××•×§×“×:</strong> ×˜×™×¤×•×¡ ×–×¨×™×—×” ××•×“×¨×š ×¢×œ ×¦×•×§ ×¡×™×’×™×¨×™×™×” ×”××¤×•×¨×¡×.</p>
            <p><strong>×‘×•×§×¨:</strong> ××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.</p>
            <p><strong>×××¦×¢ ×”×™×•×:</strong> ×¡×™×•×¨ ×‘×›×¤×¨ ××•×ª× ×˜×™ ×•×¡×¤××¨×™ ×¤×™×œ×™× ×‘×˜×‘×¢.</p>
            <p><strong>×¢×¨×‘:</strong> ××¨×•×—×ª ×¢×¨×‘ ×•×œ××—×¨×™×” ×–××Ÿ ×× ×•×—×” (××•×¤×¦×™×•× ×œ×™: ×¡×¤×/×¢×™×¡×•×™ ××™×•×¨×•×•×“×™).</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Hotel Sigiriya (××• ×“×•××”).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 3: ×™×¢×¨ ×”×’×©× ×§×™×˜×•×œ×’××œ×” ×•× ×•×•××¨×” ××œ×™×”</p>
            <p><strong>×‘×•×§×¨ ××•×§×“×:</strong> ×˜×™×•×œ ×–×¨×™×—×” ×•×¡×©×Ÿ ×™×•×’×” ×‘×•×§×¨.</p>
            <p><strong>×‘×•×§×¨:</strong> ××¨×•×—×ª ×‘×•×§×¨ ×•× ×¡×™×¢×” ×œ×§×™×˜×•×œ×’××œ×”.</p>
            <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> ×¨×¤×˜×™× ×’ ×‘××™× ×œ×‘× ×™× ×•×”×œ×™×›×ª ×§× ×™×•× ×™× ×’ ×‘×™×¢×¨ ×”×’×©×.</p>
            <p><strong>×¢×¨×‘:</strong> × ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×” ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×”.</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 4: ××˜×¢×™ ×ª×” ×•×”×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×œ××œ×”</p>
            <p><strong>×‘×•×§×¨:</strong> ×¡×©×Ÿ ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.</p>
            <p><strong>×××¦×¢ ×”×™×•×:</strong> ×¡×™×•×¨ ××•×“×¨×š ×‘××˜×¢×™ ×”×ª×” ×©×œ × ×•×•××¨×” ××œ×™×” ×•×‘××¤×œ×™×.</p>
            <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> × ×¡×™×¢×” ×‘×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×”××¤×•×¨×¡××ª ×× ×•×•××¨×” ××œ×™×” ×œ××œ×”.</p>
            <p><strong>×¢×¨×‘:</strong> ×”×’×¢×” ×œ××œ×”, ×¦'×§-××™×Ÿ ×‘××œ×•×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×‘×‘×™×ª ×—×‘"×“ ×”××§×•××™.</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×”.</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 5: ×¤×¡×’×•×ª ××œ×”</p>
            <p><strong>×‘×•×§×¨ ××•×§×“×:</strong> ×˜×™×•×œ ×–×¨×™×—×” ×•×¡×©×Ÿ ×™×•×’×”.</p>
            <p><strong>×‘×•×§×¨:</strong> ××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.</p>
            <p><strong>×××¦×¢ ×”×™×•×:</strong> ×™×¦×™××” ×œ×˜×‘×¢ ××œ ××¤×œ×™ ×“×™××œ×•××‘×” ×”××¨×”×™×‘×™×.</p>
            <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> ×—×•×•×™×ª ××•××’×” (Zipline) ×•×–××Ÿ ×”×ª××¨×’× ×•×ª ×‘××œ×•×Ÿ.</p>
            <p><strong>×¢×¨×‘:</strong> ×¡×™×•×¨ ×‘×¢×™×™×¨×”, ×§× ×™×•×ª, ×•××¨×•×—×ª ×¢×¨×‘ ×‘×‘×™×ª ×—×‘"×“.</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×”.</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 6: ××¡×¢ ×œ×—×•×£ ×”××–×¨×—×™ â€“ ×¤×¡×™×§×•×“×”</p>
            <p><strong>×‘×•×§×¨:</strong> ×¡×©×Ÿ ×™×•×’×”, ××¨×•×—×ª ×‘×•×§×¨, ×•× ×¡×™×¢×” ×œ×¤×¡×™×§×•×“×”.</p>
            <p><strong>×××¦×¢ ×”×™×•×:</strong> ×¡××¤ ×‘×•×§×¨ (SUP) ×•×× ×•×—×” ×‘×—×•×£ ×‘××¤×¨×¥ ×¤×¡×™×§×•×“×”.</p>
            <p><strong>××—×¨ ×”×¦×”×¨×™×™× ×××•×—×¨×™×:</strong> ×”×›× ×•×ª ×œ×©×‘×ª.</p>
            <p><strong>×¢×¨×‘:</strong> ×›× ×™×¡×ª ×©×‘×ª; ×¡×¢×•×“×ª ×©×‘×ª ×—×’×™×’×™×ª.</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Pasikudah Bay Hotel (××• ×“×•××”).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 7: ×©×‘×ª ×× ×•×—×” ×‘×¤×¡×™×§×•×“×”</p>
            <p><strong>×‘×•×§×¨:</strong> ×§×¤×”/×¢×•×’×” ×‘×‘×•×§×¨, ×•×œ××—×¨×™×• ××¨×•×—×ª ×‘×•×§×¨/×‘×¨×× ×¥' ×××•×—×¨×ª.</p>
            <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> ××¨×•×—×ª ×¦×”×¨×™×™× ×•×–××Ÿ ×—×•×£ ×¨×’×•×¢.</p>
            <p><strong>×¢×¨×‘:</strong> ××•×¦××™ ×©×‘×ª ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Pasikudah Bay Hotel (××• ×“×•××”).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 8: ×”×¨×¤×ª×§××•×ª ×™× ×‘×˜×¨×™× ×§×•××œ×™</p>
            <p><strong>×‘×•×§×¨:</strong> ×¡×©×Ÿ ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.</p>
            <p><strong>×××¦×¢ ×”×™×•×:</strong> ×™×¦×™××” ×œ×˜×¨×™× ×§×•××œ×™ ×œ×©× ×•×¨×§×œ×™× ×’, ×§× ×™×•×ª ××§×•××™×•×ª, ×•××¤×©×¨×•×ª ×œ×¦×¤×™×™×” ×‘×—×™×•×ª ×™× (××•×¤×¦×™×•× ×œ×™).</p>
            <p><strong>×¢×¨×‘:</strong> ××¨×•×—×ª ×¢×¨×‘ ×•××¤×©×¨×•×ª ×œ×˜×™×¤×•×œ×™ ×¡×¤× ××™×•×¨×•×•×“×™.</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Pasikudah Bay Hotel (××• ×“×•××”).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">×™×•× 9: ×¤×¨×™×“×” ×•×¢×–×™×‘×”</p>
            <p><strong>×‘×•×§×¨:</strong> ×˜×™×•×œ ×–×¨×™×—×” ××—×¨×•×Ÿ, ×¡×©×Ÿ ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.</p>
            <p><strong>××—×¨ ×”×¦×”×¨×™×™×:</strong> × ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×” ×§×•×œ×•××‘×• (×›-5.5 ×©×¢×•×ª).</p>
            <p><strong>×¢×¨×‘:</strong> ××¨×•×—×ª ×¢×¨×‘ ××—×¨×•× ×” ×œ×¤× ×™ ×”×˜×™×¡×” (×‘××œ×•×Ÿ/×‘×™×ª ×—×‘"×“).</p>
            <p className="text-xs text-stone-500 mt-1">××¨×•×—×•×ª ×›×œ×•×œ×•×ª: ×‘×•×§×¨, ×¢×¨×‘</p>
          </div>
        </div>

        <p className="text-xs mt-4"><strong>×”×‘×”×¨×” ××©×¤×˜×™×ª:</strong> ×”××¡×œ×•×œ ×”××•×¦×’ ×œ×¢×™×œ ××¤×¨×˜ ××ª ×”×œ×•"×– ×”××ª×•×›× ×Ÿ ×•×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×”××œ××” ×œ×‘×¦×¢ ×”×ª×××•×ª ×”×›×¨×—×™×•×ª ×‘××¡×œ×•×œ, ×‘×¡×“×¨ ×”×™××™×, ××• ×œ×”×—×œ×™×£ ××ª ×”××œ×•× ×•×ª ×”××¤×•×¨×˜×™× ×‘××§×•××•×ª ×œ×™× ×” ×‘×¨××” ×–×”×”, ×¢×§×‘ ××™×œ×•×¦×™ ×©×˜×—, ×”×—×œ×˜×•×ª ×¡×¤×§×™× ××§×•××™×™×, ×ª× ××™ ××–×’ ××•×•×™×¨ ××• ×›×•×— ×¢×œ×™×•×Ÿ.</p>
        <p className="text-xs mt-2"><strong>×¤×™×¨×•×˜ ×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ($290 USD):</strong> ×”×¨×›×™×‘ ××›×¡×” ×‘××œ×•××• ××ª ×›×œ ×“××™ ×”×›× ×™×¡×” ×”×§×‘×•×¦×ª×™×™×, ×”×“×¨×›×” ××§×•××™×ª, ×•×œ×•×’×™×¡×˜×™×§×” ×¢×‘×•×¨ ×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×¤×¢×™×œ×•×™×•×ª ××•×¤×¦×™×•× ×œ×™×•×ª ××• ×˜×™×¤×•×œ×™ ×¡×¤× ×™×©×•×œ××• ×‘× ×¤×¨×“ ×¢×œ ×™×“×™ ×”××©×ª×ª×¤×ª.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <p className="font-bold text-base">Itinerary Appendix â€“ Women\'s Journey to Sri Lanka (Summer 2027)</p>
      
      <div className="space-y-3">
        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 1: Arrival & Journey to Sigiriya</p>
          <p><strong>Afternoon:</strong> Landing at Colombo Airport (CMB) and formal airport procedures.</p>
          <p><strong>Evening:</strong> Scenic group drive to Sigiriya (approx. 4 hours).</p>
          <p><strong>Night:</strong> Hotel check-in, room assignments, and a late welcome dinner.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel Sigiriya (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 2: The Wonders of Sigiriya</p>
          <p><strong>Early Morning:</strong> Guided sunrise hike at the iconic Sigiriya Rock.</p>
          <p><strong>Morning:</strong> Breakfast at the hotel.</p>
          <p><strong>Mid-Day:</strong> Authentic Village Tour and a Wildlife Elephant Safari.</p>
          <p><strong>Evening:</strong> Dinner, followed by relaxation time (Optional: Ayurvedic spa/massage).</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel Sigiriya (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 3: Kithulgala Rainforest & Nuwara Eliya</p>
          <p><strong>Early Morning:</strong> Sunrise hike and morning Yoga session.</p>
          <p><strong>Morning:</strong> Breakfast at the hotel and drive to Kithulgala.</p>
          <p><strong>Afternoon:</strong> Whitewater rafting and a rainforest canyoning walk.</p>
          <p><strong>Evening:</strong> Drive to Nuwara Eliya and dinner at the hotel.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Nuwara Eliya.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 4: Tea Plantations & The Scenic Train to Ella</p>
          <p><strong>Morning:</strong> Yoga session and breakfast.</p>
          <p><strong>Mid-Day:</strong> Guided tour of the Nuwara Eliya Tea Plantations and waterfalls.</p>
          <p><strong>Afternoon:</strong> The famous scenic train ride from Nuwara Eliya to Ella.</p>
          <p><strong>Evening:</strong> Arrival in Ella, hotel check-in, and dinner at the local Chabad House.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Ella.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 5: The Heights of Ella</p>
          <p><strong>Early Morning:</strong> Sunrise hike and Yoga session.</p>
          <p><strong>Morning:</strong> Breakfast at the hotel.</p>
          <p><strong>Mid-Day:</strong> Nature excursion to the spectacular Diyaluma Falls.</p>
          <p><strong>Afternoon:</strong> Omega Zipline experience and time to freshen up at the hotel.</p>
          <p><strong>Evening:</strong> Town exploration, shopping, and dinner at the Chabad House.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Hotel in Ella.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 6: Journey to the East Coast â€“ Pasikudah</p>
          <p><strong>Morning:</strong> Yoga session, breakfast, and transit to Pasikudah.</p>
          <p><strong>Mid-Day:</strong> Morning SUP (Stand Up Paddleboarding) and beach relaxation at Pasikudah Bay.</p>
          <p><strong>Late Afternoon:</strong> Preparations for Shabbat.</p>
          <p><strong>Evening:</strong> Shabbat begins; festive dinner.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Pasikudah Bay Hotel (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 7: A Restful Shabbat in Pasikudah</p>
          <p><strong>Morning:</strong> Morning coffee/cake, followed by a late breakfast/brunch.</p>
          <p><strong>Afternoon:</strong> Lunch and leisurely beach time.</p>
          <p><strong>Evening:</strong> Motzash (Shabbat ends) and dinner at the hotel.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Pasikudah Bay Hotel (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 8: Ocean Adventures in Trincomalee</p>
          <p><strong>Morning:</strong> Yoga session and breakfast.</p>
          <p><strong>Mid-Day:</strong> Excursion to Trincomalee for snorkeling, local shopping, and optional marine wildlife watching.</p>
          <p><strong>Evening:</strong> Dinner and optional Ayurvedic spa treatments.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: 3 meals | Accommodation: Pasikudah Bay Hotel (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 9: Farewell & Departure</p>
          <p><strong>Morning:</strong> Final sunrise hike, Yoga session, and breakfast.</p>
          <p><strong>Afternoon:</strong> Departure drive to Colombo Airport (approx. 5.5 hours).</p>
          <p><strong>Evening:</strong> Final dinner before the flight (Hotel/Chabad House).</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner</p>
        </div>
      </div>

      <p className="text-xs mt-4"><strong>Legal Disclaimer:</strong> The itinerary presented above outlines the planned schedule and included activities. The Organizers reserve the full right to make necessary adjustments to the itinerary, the order of days, or substitute the specified hotels with accommodations of an identical standard, due to field constraints, local supplier decisions, weather conditions, or force majeure.</p>
      <p className="text-xs mt-2"><strong>Activity Component Breakdown ($290 USD):</strong> Included Activities (Covered under the $290 USD Component) fully covers all group entry fees, local guiding services, and logistics for the included excursions. Excluded / Optional Activities (Paid Separately on Site) such as Ayurvedic spa treatments or marine wildlife excursions must be paid for independently.</p>
    </div>
  );
}

```

## ×§×•×‘×¥: ./components/SmartPackingList.jsx
```
'use client';

import React, { useState } from 'react';
import { Loader2, Sparkles } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';

export default function SmartPackingList() {
  const { lang, t } = useSite();
  const [userInput, setUserInput] = useState('');
  const [generatedList, setGeneratedList] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!userInput.trim()) return;
    setIsLoading(true);
    setGeneratedList('');

    const systemPrompt = `
      You are a travel expert for 'Savtot in Sri Lanka'. 
      User Language: ${lang === 'he' ? 'Hebrew' : 'English'}.
      Create a short, bulleted packing list based on the user's description for a 10-day trip to Sri Lanka.
      Keep it creative and helpful. Output in ${lang === 'he' ? 'Hebrew' : 'English'}.
    `;
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, systemInstruction: systemPrompt }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setGeneratedList(data.reply || "Error generating content.");
    } catch (error) {
      console.error("Chat API Error:", error);
      setGeneratedList("Error communicating with AI.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg p-8 border border-teal-100 my-12 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 w-full h-2 bg-gradient-to-r from-orange-400 to-teal-500"></div>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm mb-4 border border-teal-100">
           <Sparkles className="w-4 h-4 text-orange-500" />
           <span className="text-sm font-bold text-teal-800">AI Powered</span>
        </div>
        <h3 className="text-3xl font-serif font-bold text-teal-900 mb-3">{t.essentials.ai_title}</h3>
        <p className="text-stone-600 mb-6">{t.essentials.ai_desc}</p>

        <div className="flex flex-col gap-4">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t.essentials.ai_placeholder}
            className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:outline-none min-h-[100px] text-start"
          />
          <button 
            onClick={handleGenerate}
            disabled={isLoading || !userInput}
            className="bg-teal-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-teal-800 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            {isLoading ? '...' : t.essentials.ai_btn}
          </button>
        </div>

        {generatedList && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow-inner text-start border-s-4 border-orange-400 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-bold text-lg mb-4 text-teal-900 border-b pb-2">×”×¨×©×™××” ×©×œ×š:</h4>
            <div className="whitespace-pre-line text-stone-700 leading-relaxed">{generatedList}</div>
          </div>
        )}
      </div>
    </div>
  );
}

```

## ×§×•×‘×¥: ./components/Navbar.jsx
```
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Leaf } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';

export default function Navbar() {
  const { lang, t, toggleLanguage } = useSite();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const isHome = pathname === '/';
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If user scrolls down by more than 10px, hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        // If user scrolls up, show the navbar
        setVisible(true);
      }
      
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Pass active season param if the user is currently looking at an itinerary
  const seasonMatch = pathname.match(/^\/itinerary\/(summer|winter)/);
  const currentSeason = seasonMatch ? seasonMatch[1] : '';
  const registerUrl = currentSeason ? `/register?season=${currentSeason}` : '/register';

  const navItems = [
    { id: '/', label: t.nav.home, active: pathname === '/' },
    { id: '/itinerary', label: t.nav.itinerary, active: pathname.startsWith('/itinerary') },
    { id: '/essentials', label: t.nav.essentials, active: pathname === '/essentials' },
    { id: '/discovery', label: t.nav.discovery, active: pathname === '/discovery' },
    { id: '/about', label: t.nav.about, active: pathname === '/about' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'py-2' : 'py-4'} ${isSolid ? '' : 'bg-transparent text-white'}`} 
        style={isSolid ? { backgroundColor: '#faf7f2', boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none' } : {}}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <Link 
            href="/"
            className={`text-xl cursor-pointer flex items-center gap-2 ${isSolid ? 'text-stone-800' : 'text-white'}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.01em' }}
            title={lang === 'he' ? '×¢××•×“ ×”×‘×™×ª' : 'Home'}
          >
            <Leaf className="w-5 h-5" style={{ color: '#c4704f' }} />
            <span>Savtot <span className="italic font-normal opacity-70">in Sri Lanka</span></span>
          </Link>

          <div className="hidden md:flex gap-6 items-center font-medium">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${isSolid ? 'border-stone-300 text-stone-700 bg-stone-100/50 hover:bg-stone-200/50' : 'border-white/80 text-white bg-white/10 hover:bg-white/20'} transition shadow-sm cursor-pointer`}
              title={lang === 'he' ? 'Change Language' : '×”×—×œ×£ ×©×¤×”'}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wide">{lang === 'he' ? 'English' : '×¢×‘×¨×™×ª'}</span>
            </button>

            {navItems.map((item) => {
              if (item.id === '/itinerary') {
                return (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => setIsItineraryOpen(!isItineraryOpen)}
                      className={`text-sm tracking-wide transition-colors font-light flex items-center gap-1 cursor-pointer ${item.active ? 'font-medium text-[#c4704f]' : isSolid ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isItineraryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isItineraryOpen && (
                      <>
                        <div className="fixed inset-0 z-30" onClick={() => setIsItineraryOpen(false)} />
                        <div className="absolute top-full start-1/2 transform -translate-x-1/2 mt-2 w-48 bg-[#faf7f2] border border-stone-200 rounded-xl shadow-lg py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-200 text-start">
                          <Link
                            href="/itinerary/winter"
                            onClick={() => setIsItineraryOpen(false)}
                            className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-200/50 hover:text-stone-900 transition-colors"
                          >
                            {lang === 'he' ? '××¡×œ×•×œ ×—×•×¨×£ 2027' : 'Winter Itinerary 2027'}
                          </Link>
                          <Link
                            href="/itinerary/summer"
                            onClick={() => setIsItineraryOpen(false)}
                            className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-200/50 hover:text-stone-900 transition-colors"
                          >
                            {lang === 'he' ? '××¡×œ×•×œ ×§×™×¥ 2027' : 'Summer Itinerary 2027'}
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                );
              }
              
              return (
                <Link 
                  key={item.id}
                  href={item.id}
                  className={`text-sm tracking-wide transition-colors font-light ${item.active ? 'font-medium' : ''} ${isSolid ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}
                  style={item.active ? { color: '#c4704f' } : {}}
                >
                  {item.label}
                </Link>
              );
            })}
            <a 
              href="https://www.instagram.com/srilankasavtot/" 
              target="_blank" 
              rel="noreferrer"
              className={`transition-colors ${isSolid ? 'text-stone-600 hover:text-orange-500' : 'text-white/80 hover:text-white'}`}
              title={lang === 'he' ? '×œ×¢××•×“ ×”××™× ×¡×˜×’×¨× ×©×œ× ×•' : 'Our Instagram Page'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <Link 
              href={registerUrl}
              className="text-white px-5 py-2 text-sm tracking-wide font-light transition-all hover:opacity-90 inline-block"
              style={{ backgroundColor: '#c4704f', borderRadius: '1px' }}
            >
              {t.nav.register}
            </Link>
          </div>

          <div className="md:hidden flex flex-col items-center gap-1 z-50">
            <button className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-stone-800" /> : <Menu className={isSolid ? 'text-stone-800' : 'text-white'} />}
            </button>
            {!isMenuOpen && (
              <button 
                onClick={toggleLanguage}
                className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isSolid ? 'border-stone-300 text-stone-700 bg-stone-100/50' : 'border-white/50 text-white bg-white/10'} shadow-sm cursor-pointer`}
              >
                {lang === 'he' ? 'EN' : '×¢×‘'}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-stone-50/95 backdrop-blur-md text-stone-800 flex flex-col justify-center items-center animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 text-center text-xl font-light">
             {navItems.map((item) => {
              if (item.id === '/itinerary') {
                return (
                  <div key={item.id} className="flex flex-col items-center">
                    <button
                      onClick={() => setIsItineraryOpen(!isItineraryOpen)}
                      className={`transition-colors py-2 px-6 rounded-full flex items-center gap-2 hover:bg-stone-100/50 cursor-pointer ${item.active ? 'text-[#c4704f] font-normal' : 'text-stone-600'}`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isItineraryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isItineraryOpen && (
                      <div className="flex flex-col gap-2 mt-2 bg-stone-100/60 rounded-2xl py-2 px-4 text-sm animate-in fade-in duration-200">
                        <Link 
                          href="/itinerary/winter"
                          onClick={() => { setIsMenuOpen(false); setIsItineraryOpen(false); }}
                          className="text-stone-600 hover:text-[#c4704f] py-1 px-4 block"
                        >
                          {lang === 'he' ? '××¡×œ×•×œ ×—×•×¨×£ 2027' : 'Winter Itinerary 2027'}
                        </Link>
                        <Link 
                          href="/itinerary/summer"
                          onClick={() => { setIsMenuOpen(false); setIsItineraryOpen(false); }}
                          className="text-stone-600 hover:text-[#c4704f] py-1 px-4 block"
                        >
                          {lang === 'he' ? '××¡×œ×•×œ ×§×™×¥ 2027' : 'Summer Itinerary 2027'}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link 
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors py-2 px-6 rounded-full hover:bg-stone-100/50 ${item.active ? 'text-[#c4704f] font-normal' : 'text-stone-600'}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link 
              href={registerUrl}
              onClick={() => setIsMenuOpen(false)}
              className="text-white px-8 py-3 rounded-full text-lg mt-4 shadow-md transition-all hover:opacity-90 inline-block font-light"
              style={{ backgroundColor: '#c4704f' }}
            >
              {t.nav.register}
            </Link>
            
            <button 
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} 
              className="mt-6 flex items-center gap-2 text-stone-600 hover:text-stone-900 font-medium text-lg justify-center mx-auto cursor-pointer"
            >
              <Globe className="w-5 h-5" /> {lang === 'he' ? 'English' : '×¢×‘×¨×™×ª'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

```

## ×§×•×‘×¥: ./components/EditableImage.jsx
```
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Upload, Loader } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';
import { getCloudinaryUrl } from '../lib/cloudinary';

export default function EditableImage({ id, src, fallback, alt, className, width, height, crop, imgClassName, priority = false }) {
  const { isAdmin } = useSite();

  // Resolve to Cloudinary URL on first render
  const finalSrc = getCloudinaryUrl(src, { width, height, crop });
  const [imgSrc, setImgSrc] = useState(finalSrc);
  const [hasError, setHasError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview immediately with local blob
    const blobUrl = URL.createObjectURL(file);
    setImgSrc(blobUrl);
    setHasError(false);
    setIsUploading(true);
    setUploadSuccess(false);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('id', id);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      if (data.imageUrl) {
        // Use the permanent Cloudinary URL
        setImgSrc(data.imageUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // Keep local preview but warn admin
      alert('âš ï¸ ×©×’×™××” ×‘×©××™×¨×” ×œ×©×¨×ª. ×‘×“×•×§ ××ª ×”×’×“×¨×•×ª Cloudinary.');
    } finally {
      setIsUploading(false);
    }
  };

  const fallbackSrc = getCloudinaryUrl(fallback || '/home1.webp');

  return (
    <div className={`group overflow-hidden rounded-2xl ${className?.includes('absolute') ? '' : 'relative h-full'} ${isAdmin ? 'cursor-pointer' : ''} ${className || ''}`}>
      <Image
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover ${imgClassName || ''}`}
        onError={() => {
          if (!hasError) setHasError(true);
        }}
        unoptimized={true}
        priority={priority}
      />

      {/* Admin overlay */}
      {isAdmin && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 z-10">
          {isUploading ? (
            <>
              <Loader className="text-white w-8 h-8 mb-2 animate-spin" />
              <span className="text-white text-sm font-bold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                ××¢×œ×”...
              </span>
            </>
          ) : uploadSuccess ? (
            <>
              <span className="text-3xl mb-1">âœ…</span>
              <span className="text-white text-sm font-bold bg-green-500/60 px-3 py-1 rounded-full backdrop-blur-sm">
                × ×©××¨ ×‘×¢× ×Ÿ!
              </span>
            </>
          ) : (
            <>
              <Upload className="text-white w-8 h-8 mb-2" />
              <span className="text-white text-sm font-bold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                ×”×—×œ×£ ×ª××•× ×”
              </span>
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleFileChange}
                accept="image/*"
                title="×œ×—×¥ ×œ×”×—×œ×¤×ª ×ª××•× ×”"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

```

## ×§×•×‘×¥: ./components/NoticeBoardGallery.jsx
```
'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { getCloudinaryUrl } from '../lib/cloudinary';

const files = [
  "GOPR8660.JPG", "GP018855.JPG", "GP018860.JPG", "GP018864.JPG",
  "IMG_6749.HEIC", "IMG_6752.HEIC", "IMG_6841.MOV", "PXL_20250804_231312230.jpg",
  "PXL_20250805_061834012.jpg", "PXL_20250805_101202880.jpg", "PXL_20250805_101212699.jpg",
  "PXL_20250805_110950616.MP.jpg", "PXL_20250805_110952829.MP.jpg", "PXL_20250805_112807041.jpg",
  "PXL_20250805_113440117.jpg", "PXL_20250805_131932263.jpg", "PXL_20250805_131935688.MP.jpg",
  "PXL_20250806_022238016.jpg", "PXL_20250806_043848103.jpg", "PXL_20250806_103924168.jpg",
  "PXL_20250806_104315164.jpg", "PXL_20250807_024105138.jpg", "PXL_20250807_090023481.jpg",
  "PXL_20250807_090039580.jpg", "PXL_20250807_090508332.MP.jpg", "PXL_20250807_090635657.MP.jpg",
  "PXL_20250807_100921999.mp4", "PXL_20250807_100946064.jpg", "PXL_20250807_104232959.jpg",
  "PXL_20250807_104328670.jpg", "PXL_20250812_051612407.jpg", "PXL_20250812_090458231.jpg",
  "PXL_20250812_091006003.jpg", "PXL_20250813_005516532.jpg", "PXL_20250813_005533486.jpg",
  "PXL_20250813_084419570.MP.jpg", "PXL_20250813_090005700.MP.jpg", "PXL_20250813_090011635.MP.jpg",
  "PXL_20250813_090910761.jpg", "PXL_20250813_092451170.jpg"
];

// Deterministic pseudo-shuffle
const shuffledFiles = [...files].sort((a, b) => {
  const hashA = a.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const hashB = b.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return (hashA % 7) - (hashB % 7);
});

// Subtle organic size variations for masonry interest
const sizeVariants = [
  'row-span-1', 'row-span-2', 'row-span-1', 'row-span-1',
  'row-span-2', 'row-span-1', 'row-span-1', 'row-span-2',
];

export default function NoticeBoardGallery({ lang }) {
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const openLightbox = useCallback((file, idx) => {
    const fullSrc = getCloudinaryUrl(`/discovery-gallery/${file}`);
    setLightbox(fullSrc);
    setLightboxIdx(idx);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setLightboxIdx(null);
  }, []);

  const navigate = useCallback((dir) => {
    const next = (lightboxIdx + dir + shuffledFiles.length) % shuffledFiles.length;
    const file = shuffledFiles[next];
    const fullSrc = getCloudinaryUrl(`/discovery-gallery/${file}`);
    setLightbox(fullSrc);
    setLightboxIdx(next);
  }, [lightboxIdx]);

  return (
    <div>
      {/* â€”â€”â€” Section label â€”â€”â€” */}
      <div className="flex items-center gap-6 mb-10">
        <div className="h-px flex-1 bg-stone-200" />
        <span className="text-[11px] uppercase tracking-[0.35em] text-stone-400 font-light whitespace-nowrap">
          {lang === 'he' ? '×”×’×œ×¨×™×” ×©×œ× ×•' : 'Our Gallery'}
        </span>
        <div className="h-px flex-1 bg-stone-200" />
      </div>

      {/* â€”â€”â€” Masonry Grid â€”â€”â€” */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {shuffledFiles.map((file, idx) => {
          const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(file);
          const thumbSrc = getCloudinaryUrl(`/discovery-gallery/${file}`, isVideo ? { width: 600 } : { width: 500, crop: 'fill' });
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={idx}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden"
              style={{
                borderRadius: '2px',
                backgroundColor: '#ede8e0',
              }}
              onClick={() => openLightbox(file, idx)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image / Video */}
              <div className="relative w-full overflow-hidden">
                {/* SVG spacer to maintain aspect ratio across all browsers, specifically fixing iOS Safari multicol bug */}
                <svg 
                  viewBox={idx % 5 === 0 ? "0 0 3 4" : idx % 3 === 0 ? "0 0 4 5" : "0 0 2 3"} 
                  className="w-full h-auto block invisible pointer-events-none" 
                  xmlns="http://www.w3.org/2000/svg"
                />
                
                {isVideo ? (
                  <video
                    src={thumbSrc}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                  />
                ) : (
                  <Image
                    src={thumbSrc}
                    alt={`Sri Lanka ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out absolute inset-0 w-full h-full"
                    style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
                    loading="lazy"
                    unoptimized={true}
                  />
                )}

                {/* Hover overlay: minimal cream fade from bottom */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(250,247,242,0.5) 0%, transparent 50%)',
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Play icon for videos */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center backdrop-blur-sm opacity-80">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#2c2c2c">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* â€”â€”â€” Footer note â€”â€”â€” */}
      <div className="mt-16 text-center">
        <p className="text-xs text-stone-400 tracking-widest uppercase font-light">
          {lang === 'he' ? '×›×œ ×”×ª××•× ×•×ª ×¦×•×œ××• ×‘×¡×¨×™ ×œ× ×§×” Â· ×§×™×¥ 2025' : 'All photos taken in Sri Lanka Â· Summer 2025'}
        </p>
      </div>

      {/* â€”â€”â€” Lightbox â€”â€”â€” */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(44, 44, 44, 0.96)', backdropFilter: 'blur(8px)' }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 end-6 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute start-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Media */}
          <div className="relative max-w-5xl max-h-[88vh] px-16" onClick={(e) => e.stopPropagation()}>
            {/\.(mp4|mov|webm|ogg)$/i.test(lightbox) ? (
              <video
                src={lightbox}
                className="max-w-full max-h-[88vh] object-contain"
                style={{ borderRadius: '2px' }}
                controls
                autoPlay
              />
            ) : (
              <img
                src={lightbox}
                className="max-w-full max-h-[88vh] object-contain"
                style={{ borderRadius: '2px' }}
                alt="Gallery view"
              />
            )}

            {/* Counter */}
            <div className="absolute bottom-4 inset-x-0 mx-auto w-fit text-white/40 text-[11px] tracking-widest uppercase">
              {lightboxIdx + 1} / {shuffledFiles.length}
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute end-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

```

## ×§×•×‘×¥: ./public/small_2.webp
```
RIFF¢ WEBPVP8 – Ğ¿*€8>m6–H$#")¤’ê™0‰gn
´Ûÿ]Æ·çúµ´6Í;®^9zo­ä
‡R"~¸ıç…¯£ÿ‘ö òIÿwÁ#ºÏöı£õŠÎ‡û­²šIËæ¯íû¶-+^½æq¯ë¿ıÿgÖ“xæyûâ;ÿ€ûçÿ¿ImÿŸ÷‡±?ÿÍ’ÿéêÉë»ş¦÷<r‹‚ÿş~`~‘ş?ÿ_÷~0ş™ï«ıïßüßšoî¿ÿÿ»ã;â>¸½OşÏüóÿó?éûîûşÿ½ä¿í_çıÿ§ìAú¯ùïÿ_î=×¼Šø~õû}ıÿÿú}k?ÏÑïá?öÿÿ»íÏşg©¾A¼õòÿßÿÿÿaß»ÿíÿÿÿ»İ—şÿïùDËhÌ	l®S—?IˆmlS {TfÑHK¶“>®•’¿NÍÀúÍç §³b¹-x~8ƒ‡"ÚU‰¨Q¾¿şjÔ‡fÖÃ/õëHmn…j¦=›f&ª ç~	U  ôù‚ÚI£›8»ë¢´·TqúÂd ¸%ÁNVL$`ì3Ô¾”–^ƒùP!JÚ7±°Ö”_Mø¼µÅ.Ã;D>b÷xLhv—ÄU‘Ù~ş:Y‰i“Hªl”†ÙKG¤ÕıÊtİÇƒé;q=À¢5&¨1WIUïƒ¡¾n…ánm–´Áá€±pnÊõÓ7[p‚R!8¡lR)mı†uï_/2ÙŸ´Y&„e%CekyAÚÓà‹@h5ó.LŒI/HÛT<ª?Ó£gà0jÒÔ×c¾©tC|kvK÷ú
¬…0“öæ…2Az›˜vmnÎíÉ)ªl@šÈ+EŒZ°˜µ©;R{ØÛ¶â]\æ½ë‚µë²¢y2İü y5èm¿;—·¨_ÜqŠ‘ù¿]ãCÑ¤çÍ;ÆğØßÈ^·¿„ÉYNÈ{ƒ½ô4óDÔ×I|=ù“ü—^î)“¡‰‘Íôè©Ğâ[Šãü-æzx¼jè¶¢<x+¿ô²¼7ˆÑ^U#gdªIêÏ'dRy;4·âış?Ùg Ş©tQğT³¿ñ/,!Õ¸ªZ†É*Z›é˜09Ÿ¯ƒ·C[C¢Ã´yÑÖT%uà%Gªoñúµ¯ÀûÛTÀíç5 Ù^Æ’Äi¾vJ{–	˜1be£ûF¹UI>[AÓ´¨Í¡ &L)„8Ë|§Öêu@	2úÃ›U‰›nùæ@ş92Ö¡BwŠŸX°‡ÛŒl!j’St‘Ù)çú>°o€9`ºGTMUĞäYù“+&FÊ[aØrl†ŒùòòU\ªİVUºÃê+°îç<š0}ı´¦À¢ºRwş@	½QÈ‡³øåêÏáîs4¯ãQÔ³Òu'ˆİZØÊ”X4•İİ>†yiê¿!Tç†´3İ92<Ù©¦f¥_¯Ëlè†¼ö¾¼ûÙ†q8>ò0Çm’-HEıİ3t*û) ÷`Şå%—á^oHtLø¼à´u•ùæ€@Nù%ğ? J»ãéC=÷N3•Ş+;:{M¨Wáè…lÅñP*ô®áò_²•igH`¸ºYU8±øÛ¦DHC{Äè6ÿ‡sÛ»©ËØx¦‹•Z‹AÕƒ÷³­à†ÂÊºe€ûP…"ñğ|½×<W!ÇĞ³â™'ƒ¥meô«Z|-huf—Î½!!ÆÔşß¬FÒí!‘ü3²ÁÁ®z²„?%4mI\Ûf^¡×J¿§¾JÁ‰t5¸{4ˆ“'fĞ1´ˆ°n%qüF(ü¬¬ ìÅÎÊt1W&Näñ<0ğSK¬S2slfy`Ó­Ç—‡²êŠ‚lööĞFº#3"%@Ã;’&<xo_Ç¦DÆO•}3-‚Fj:†W¡ÎÈ^µ¡’~¬ @\ğ}©ˆ…‚yûp{^º’W|ËçV2/ˆS¡ú¹?ê¯äzJ<t½~a`K)}:÷{Èè’šÍğôØ¡¡‚ã§A¡é)¡í$ÚW`€q™²í°Ü¶€küûs}§¬7÷FY.;¿.í¢œ½ÉÓ IñF —ÆíúVô·×DgĞdõİ­ŞÉ
,Â”r•ÏîjYB´ØnÆæu!;ñ5eiÕjŞÄ¢ŞÔqçE„ì)xØ?Ëî·9+Ü{ğH‹VêJ5NŒ¹Ö¿F2¸€€ é‹‰Ş+åv¶¾?X¤!Q(,}á‰Ut¹e]â&ª“‘ùT¯à´ÿÔ»¡êÿĞôá»KİÅxäë¬Î —6î¸×ëÌ¯º–‰1Ğ!wÄ^Ë¬½0©øõı'²ş+Ú"·Õñ <xˆ'I2ÀÑóĞ¾Š ”ÇjVF¶yç@|Öi2N8ü¨ŠPo=PØ­ÕÒmh)İ!ãÑÙ}ËøKÖ~Ïò²ŠZ›”——Şîùš>ÑsV©P-<ğ—rìu].ÛëbàÈLãvö¨´üŞõï‚búÄ*«ÕPzÛD2'x0ş³ózôZ<pRÿÍG&­Ø…-n.Òs xVD;Ü®/{yû&>#ôå|Á€gËw1ßIÚ¤µ|Ä[Ií…ÙÙÚŒ7üÔªq€Ó„ƒ\öš›4Øf<XJES·^|öÃ×XuĞ)i™ZILôèÑøÇ{!›ö–ŒD\Œaù–‚÷ÊQ–mµÃ‘+şƒÿ„š°
æ6OcÖßÒÔ»Y[¼‹iP¾¥*j¯cõàc“}˜ %Fc²t?ĞÜ7¥é×déù¸g˜kç÷Ò/½#µGÂü˜17ã¥Mrâğ1k'XÅ§g¶˜zí´aH¶åá5{}QRö×ÚíõWiıç¥·^aÇo?ëÊë©Wk¢²¦>­¥u•ddW¥¹Iw6½¶:˜Ûç¢ÁÿB‰A(·@“}:ÒmLAÇC¢àœ…ÿ‚4íoÇ<\Â²·­M¤?œÍôZR.zUŸt>²#*‡ÌDõFu£iØó9	“ÅêZÔŸª±QQ“=ğÛø¸›VFbËn(›¦/Ìƒdİ·w†Yİ§Ê	^{X1FZ1,úÀmè_¿ÂEj¬£,[N(1Ç˜	 kî¼QCeÿ)ÎıÆ÷YÕ	¸n€ÈüƒJ®Èäÿ×xz§åx¯§ŸÉáiYd8òŞŞ¸S ÎTm0~¹l<öV±¦ê3á]~?¡7ğ·AğºÂäê|6uU„Ã~mÅOµ^È\Ã±Wiõxy«h6˜¬Ê*ş³ıKt2ŞÖv‰˜Ã…„Ètß[İñ…$Ãº]Uí~l-€'jÃ¸ír›Èg‰eğ}™=I‘A½BRr%ÁdÑİBœK êïª”F¤OZ:@¦4äÎQXá¢4ád¸‹ç}ï+@à.ıh/Ÿ	Ÿ}²ÌMÙï¿
G#YıĞ¦İÑ"ívóÈ§³Œ$Ñ.ÎlÅÊ7	* _Vş)y_^¼ê»„ú¾¥”ù«åŸGßú"“$ge+üµp)K|QÔÖÀ¢/0}ø_˜è±	87d:±8SÏÒ	â×dşÜ‚®oë‚×ğ…ÅÕ;İâáˆ|,ø~îé"'zÇşçOÛ~•aïrAa €ç¯Ÿ¨nòjŸêÎßç¦ò—.·Õ$]±Fi˜ıHp»|G‹÷ÊúmQ©'vwm¯ E3³ZíQ¼S—³Ãâãècõª–#ıæˆa9-'iõ¤¼%kœe“A@#^_•KøRáffFÈêDÓ…vL=Lãî¬Eœè[?áRÌ›û_Úéé¼AÍœvÉ‡’–õc0,şøè¢©Ìúó¾KaÑïZ¢HºÒ¢¬‡¶#ğD;c_shÏÚ¿®A¼-ááÉÈ)¸\Ê…LÎt¢e›º.)/ª¦÷D¤½"BïCq®{/ˆ?êòº“]ò¤ ºŒã3dwÌh¡î
İmØ˜Óå)gÙîèPÔæÃÔbá4\èDÜ_ø«c¯H‘J¯‡1¤hpüú"+¸ŒĞaı„DÄ­€<MuÓÿğÑî8B—ÓWÈfŠ!!Âà×²È“Qm‹ÿs“^#wÌ-Šñm•NğµÕ ‰$Õs£[ƒl êŒ1VŸÚ¶W—%~#fû¦Ù])i÷¬ú‚…º˜¨Ÿ"`3&LÅ'ör_´_½~Dµ4k«RÅ§{daQ}'(¯±O*z‰ĞX–¡Ôs€Ç@u~SŸ;Š¡ÒÀWPŸØUnÎöi‹6ş<@ı4õiÌ¸vn[½‡¥~^¦ÍµwG!Âeè½ñ¤é©|Şİ,NŠ5È[¿N’”Ï(Û ë°ØqäÉë {xâ‰&V™à7›ËiVÁ[4ŞÁœ­˜\Öòå_¤«Á»|×Hu<éØ/¶¢2inS›¦P:NCÇ'vu¢;¯¤?r”6FRX¥®¹¾•³[Ò^’(eˆ‘êÓí­nfâàô¢F›UÏˆlW©f$È ¥Á¡Nõ±‰›Wa¦ÊPI8BL5g²¨A<ŠÍ3õÇ•Æğé…¨,.œaO”h:EŒsÑ•>M•‚¿d¦Á]‹€XÕLşVÅ‰wÜÀ\`~ğ4¯Kğ+%Ï„8Úà4¤KºbZüŠ½u8Šİ¦îÔÂ¶ˆ\)ø…¤D[Wá.zBùYÓ…ˆ+;¦¹Š¶Dİ7«]Ô8ÌZ#Vcíûpı™{dyˆUØXºä~KK@xYÌ4³ i<çwšGFÏ‚¢úíZoÜ)@şÔ]lT:F|òÙ%ño§–²™±4B…%¥úùld(9QãÄiyÙÕ­ÿ^<÷³Ù~]ôœkã,ö°ÏY€Ş… ª¬w`½;,RF¶ÊßúBw‚=˜†qäR¡ÊÖ«OCŠ[\š÷7Ğ…lİ$K”áßBÉıPvùQ‚^nÏ„9ÅSiG–.Í:İ„~ı¡ó{{ØÆ”ÌÍ.”Ê¨ÙmóÍ²CÔ;;ªaV‰yòÄÏÈxÄ ß¾Ÿ¬Ò`ĞY„ˆğU×ì5,[3j<ÿ ˆİX¼¥0ğ3QXğì?¢©Î-8%­¥­ÇËl €ızWÀBBQñEÅ¹Jo…„Ç›À9½…Ó/)©‘m`Í• ‰š4y3û,“$QÏşÇ¾y$ø à¹ÿ.Œ’Œ&tŸ±ßA“caTèôP#œÇ@	ò}d7V®PjÀ5{åuÍ3…à|¡›¡í67_EC·;2K!+[z@õ•€D$>mEA)³F‘údšŒIZ•K½¥ë>ƒ¬°…ûîâ®_oÅ›p”ÜˆYÌ¤ÖİGUÁ!ƒ§‰–ûû67Ôı¾r·Ñbğ•Cn…Áå‘ÎrÇqzCëRÙ“‘²J”C:Ó2–õv3©å‚YWÓˆK "×•Õ¸8ğnó‡”üz´wx*ŠÕaWÉx…Oµû«çÆ©}.)«“ÕÜpÒÿc>Şƒ—f´öÎ c¤¿ˆ)NœEJµĞÍ5òY­6	d¯Ä£ÃÊJÜçû\gÏĞÖ,^áç>HÔëÿóé¾ÖÃH•n="”šVqí‰b€,äå[qÂ<X%4"B£$±ÍôpáhxÆU´'ä¨M{ÔŸûŒ.ƒ¼J’ZaÒç÷} *Ù¿WşÚ(ömí¾0®şîì¯‡¥u„‘.^•Œ„ÀŒºHÿòAØ	pˆŠö±Ğ_Tı1îòå&ƒ mäâ6yú2	ÏCæúsiÓp†m¢ßs=Ğ®hsÓ±&ŞšRl›õJ
ÿmÚı.%zTfPä^§I…’e¿*Aƒ¥ÙÇÂÁ¨ĞñQóã¯~âÿ;Ì×Ìá‹vşâíEsy7Á>¿~—?öÎìCQò«¶°_ŸU#~ÌúGÄ†ƒğ({svoCÿşt<IËêÕç/¼†Êuİk‹c5É×€[/Öù¡ÁÅ‡|kU¢¡!>?ï>bBü/bÀ
·¨NÚë_~õ³x$¬Wÿ•  âá¿ÿ’Ş†¹ˆÆ 7(Qß…]8G{¹ÚëÀ|ˆÑõ¥ª”KéZ¹­ÈSİåXòl5b¤?¼ü>Šş+ş\h¦¨ß·6RÃ»‡VõN$Uø=ÁVØúÁèì–³52•z-@÷[‡âR0¡Š:4âšíâ•ˆ˜RlŠÓÁå÷·#L
‡Û«Ìv‹˜ÔÔ5ÖxÃë}Ëá<’“áÔ ³uäP†êRÅ¨^ŒîkÁâ@ˆµŒüIÛ˜ÃûL»ğùüEà*Öâ©äëG(²bšíÛg$’‡ù¡‚ÏõÀ1ef^
*DQÄËšL*„µt}ŞúO—Û«H',V³cøÕ£YV¹³'Wgs8ñ|:á£
wœ 4ùgnú¦rÿ¤KvÙ¹Û³2ê¨WŸ¯,w÷>—É¸¿øR,.é¹ckvú;W¤`{e)wôà¨­ß)8H°]™÷¬à{½´(=¨F¨•*n*‚lÕrL†»Ù%o¿ûJV@ŸÀvšµœ+Øòş®pà fŞ`èïï²?ÒÑnŒFâºÒnYy=ß:{4?LË’å"Òi"†Òtx0îŒ#åsé'Rq4tHw@+ßNÍ¹†léÚºytóÎŠãÙˆJúl¸(ßh_%Áü—hµ¯ê‘É_­éw,#fëÎ0J'8S½åiEKû «¬¹OëÌ>„ÀEÂ"Ê!áúÉäºØHøª}}ƒMYZJØ½ëÅ@S?ÒJ¤ÿİˆÛÏµli‚‘Fp]±u-·@3Á*6·ÊæœİE8•eˆ_Œˆç–˜F8&\òû÷ıK¨Ç3³w×NiÖÿğZï»Ê.ö´Ô‚R±ä+’xÌ£¢Áb‘" 0($ÅRš„µÖ”pıvtkã·¬«”G{:[N¦pl3ÀVWêÌÆ™ª×‹ÑÕØ—–=I•Ú­OÊê7˜‚HV‹*FÜ™½|åúÖo_øÅd¦hªX‚#ÊáDË{²‰g#Ñ„¥¯¨ÈïÁu6íñ<üĞk¸·°Òã0,şT‚îæò7“Z#*ÌEÄo°mîŞ
n†¸¹ü…ùÊ]‘M#ç/Š9¦6Û+ÜŞ•¢>V‡ıAWÄZ¹:‰á^h¥<Gz{HÕ"ŠqØ‡–~/Ê:ìP·Gß»=h”zicr¥ZİNbQû;ğ³]ÈL°Xµ\"¹óõ…T¦ŒqÁ¹içuR§‹ÒÚæú
—÷-¤«<sìVª‘­i¹œ»÷ğÎÜFqì~j£dßìxgiÒ¸M5şìÙü·N{‡uïÀ¥*%F% Ï-µÌÜî‘LZêªS‰½Ù
¦¾˜»+ôHT8îóÌÛ58^eºOW|fÏóˆ4ü¹œmT1\OA~=€É'—T›â$jªâëö¨síX-G•¥‡TLDÌ˜“‡N±‡©fÔîÂ=0¸è†› 3ş_rÆoéD¸
9ÂîKö_KÓ¶Ç$é8Ì<,V‡ğš<ZGkôõÎ~ìådÜbU‡ÆRD“Z­F7¶‰îT-8Âj%Ö^*ò0-û”ÊÓÓÿ«>(çî :[InÎë›Q—“xìºz¹ùÈc³øØü”!™RºìÌVwõe!ÀÈÅX\¥aRQR·Uù@×Fÿk‰ƒ¦Mr¥d¬Ü UcàmV=Ò–ä9òUø‹ÎŞËĞŠ=XohØ$“k—·22ôËûë3–Øµ›­0éi¦³İU2OR~ ‰™Ñ±g¸…Ò6\·Ÿ6“üÙ@ïoV–$0í~V˜êÂÇPR™=(“ù×k«|X€¶ÒÄ¨J–şÎ2a|z†'ôfĞ| ¿à=½JÁè_||È™ïw9«ó¶Uş,©øô-m¤«¯=‚ã³µCsEÊÎÅ;gú€à/ïŞcò”çú3«œ€·àOÅ¨k´ÚCµDÅ`Ùº 
ìêMj¨kZ	—œ9bfóÓ›©’©pÓønë}_â ÁBƒgÉÕCıŸ`QnW¦B§
«÷+Î=¨Y:PÛ.Ÿ×ÙòßÆ~å]U4<}FQgÛó®h¥l³4İÂ1æoID%Å<×Û|÷[ºtA®ŸE(´Ÿç‹é<Pä”ı yHÌ*Â)TŠ*©¸âªóŠ2ß'ªñ»Õ~şüÀÇb_F{Ûå=»—ÛÁrD…Ò±Ê<L9Ÿ·|Æÿq˜|ìQ±ÑÛ‡K–¾
ÔıÑ†¨NGÏb_ò‹Ç0‡`Œ8›÷Ü¤‹XNæÓ§*|Nv$a»ªVÏt¨éø³"-à\Lçu‹ëƒàw%kjè§7óıT4¦ˆ¼OUÚh"™”ho,Ûõ»lÁ:!P}—5Š-w…ç<P×ñÙ{½wÖòÀ¡n6‘ËF¶Ú±qƒ(|úÅw7hé”«]CU:=óñê5«ƒv† ,X«ï~ç®¸é}õ@îGT`Ä5ú³Vc}/¬Ëâo5ïZ£&i#z¼ÿ„px€iÆYUÏêÀÜšÖ”úcOğzöÅÕv©lZËjY…çönı/wĞ:y´ÇHä ‘›Â7ªø&}ğ¶%ËÕ7rGG*ÈğŸ>1»0dl›Åİ :Úafg'°Ó¦"D›M kèaè -A¼ ûFÈSNS¼ğšßl¡<è-—ŸE¾i_Âø+4çÁğÁš©àûï[Ödn¡—„ĞdèzÂïÌBÑêşçìÚ¾bÇ§Ş;ù‹ÀŞ@²zêNÏè(*Ä%³fÒíâbÿ0ÿœî9î<İ^§–ÛÆ!E~áá‘H4H„7Ôá4¢_P&.™e9¢Aı¡ ºY!,Ò?…çômŞÃìw@Iq7¿½ÿsfys!-‘Z®»`ÖÇeQå
»—¡Á	Ã©•ë©5àÁ
Ëó€T¯3º¤›¸b^ğçö|‘:¤ÕLıÖ;°±İ0îeòHQ¶+såÅ—wÆ2QÓôAgyâ8.èm:Xİ$»2¨i§uëõrçáI’9-[ú—GT
O¨:‚OŞËeTÅİ”beí8üÕAbT—ÄÓNãğß“Şgfcã²<GëY»o¤ğµ\Çiá{|…ÃRMzK"„Ì­ßƒpxŸ¯
ƒß{·"}¼÷CèİÊùŠìŞÂ=uO •—‚ÎÃr”¨Iªw1÷ÂuMìŞ¼©<q|.¥6<f›7MlÎğaKG–µî[ˆE(5_‰O;viÎdÛIV+`Ê¤ûd_|<)-X)QH¨çêG‡‰÷Öın‚éGÅmº6ØŒûqÌÔ­{V‰qM>Ä$¸¼ŒvW©EÃTuAâÌ:r™øİ£hj÷©])ZÜ6÷D‘é›V®0•º‚ÿ*C^ìá"ÊYıÜpDöG~åGÉÿ×^ŸıŸZö‡)}Œî	tŸ˜ÏZV?vœX¥Ö®™¾ª‡bØçşÆöıæ;ÖGàHÀRÄĞ‹× Ûòÿú\=ÿl+MØuœÿnpÁU:šİ\ß*Ä…Ÿ¸T9*ÛœxôØ9¸ÒHõ{íØ‚ ª-Aà01ˆ@¨®5b:¾ÂóÖXÈ4sñ««ŞFŠa8y/”w%Æoór|òÈŸ£p¿sõÛZŠú„Ü¥T,ëäo½ŒDJyDğqNà£0‘•Ùó<Ôk[|5B8p&%åŞ”`QÖoÖeÁ$Œ‹p¯®”T»M*æ•4´dÆ$Jå]½!‡ÌcÄ"Ñàùä÷zåÑ30ÇWl5õöFH´m‘ä×ß˜®)¬=h‹È™N«‹"–9xƒ]]€-½Ü¸Ê¢êİFøÃ£\PÒPƒ¾¯ÀôÓqYïœ.g/$šV¦<Ï2³çë9T•u©L?¼ÿ·È:…Ò§÷œç¶Ht¬à6.3äÒ5VÉ:…„c
û¿t§ÖÉÙ2 ¬©ÕªÑ—–#b¦™¥x|yiï•m}éñçgH‘2#*YöãÃ7¸.·ƒ¸¹jÿ;<'ÅeôÂØãò(¢ûE–¦‹Á"wä D½İ}s³ª"l>fÔÉ»=¯9şîpzêSöªí¼›ˆ›*=ÁÃ{Nï(Ëa6ó xpZg~ñKÚS.A÷‡±¬õhıùÁÊµYû…4ëê?ö–ô¢hSî1D7gn½p$×ï9Ñíµ$è÷†êÔä09Ë² Üzƒ2#ãÇíµÀo@\åìK¹ô³8c´ ?mqoÆ}’R 1«v¶xçèoìŠ·sT)€-¢E`í¡òåY`é…{†4Õ3±a¿Ú¤Ré:@s·²tzÓœ‰F±êÖPS)5øjoEV¾Ï7„iæ¡h¶¸Zäöñ-9dXÖÓEÜÎP‘QÂ>âÕ2u™p€`À–x˜´à‡jm²\Ÿëm)°Raf0+¨Îû•…ÁÆã£±ˆ âHWVfTk*^$ì
³Qê,dKÜ9¶PÄhÍİ$àî—ôı”­:eju…¨}Ò"Lz•ømkíd:àª±¹~×¨±¸³ ŸiÎ"¸µ+âãÊŒ>iº@y4_ç×u¸ôuº4¥èîUÅŞ{ß—Ş79‡î?Ñh\¦ä:Ï©(ÃQ9*šû„±¥@Vn‰š^[	ıîG]!P¤„§XşÊyÆÕ"[É•áğ|&¸XõëCG¼­ı>H™%¨…Á³–GT ±kîvÕ_4R¢ëª´À“…ëàgˆ+Ğk¶Û¨NYÛV@ojt“…3¥Ù¯ æSV_*P[Oµ–Û–ı`V´¼
’k6Tëôs…fx“(æÖ•g\•4Ã©Ì“„„D4ıWûêw*•hÆ ŞúC1”=bå#Íyš‰!W©S#ÇÍ½W ³j’‡ÈF„1ÙqkÑŠ¶Ğä‰¥CnûS^ª<š½İú5•¥¢ŒàºN/åOè³#˜Wé¾1ĞÎäOC€¬{5Á({%ZÇY®’&ÈŸâ/‘¯2Q ÕN„Îö+?áe3r	}jV„Y9j¬Ä"Bx%Kkˆkœˆa¹ÿÿ™<üw/‚œ…\riŒ¡$‘È¤¤éâzø úÒM”µ lÕµİ½²|÷~Ú#o7Ó®cÍ¢Ãyˆ÷zDtsRÚR}MåqĞ0Ó%Æ¼¶\…{t<>Ê`ÿÁ¤º+j«m¶½=¸àÜ"‘lˆr¾•ÂvzŒİÑŞøöàG!¯ŒK‘
In-HB¡ôr5«k9ù~mWèiÑ$'Bv+Åa/Ów¼¿‚Í
ãÊâR—¦pf)g–^c”  \ ¹ìíõ>ş,ô±±¡](f·ìqYú"[©ÄyÉjX¼¹³¶âÓàhãÏ$VIú„ïğÀ4N‹ í÷Éµ–é“aúÙQ«ê¤Î’X€üí"ËdNµHŸBCÒGÑàb§Å½7Ú«“ÛÕ·Ê“óƒTÜC÷
ÿæ°âßF¤†Ñ0ñDÅG
«JØÂ‡Ú;(Åbl§ŠC¤˜~‹òİñ7ñHÔ’l¾aŸ.§HèŞmÁ˜ù|#KÓ[Ó]®"½dDvZPØGR¾±3XĞï¬\×cW *níİ¹¸Fpm+;®I?¸ˆI×#!ßèC¬‘Q±wÙ±‰Å2ÔŒWÅG†WZ…¸íTg½\Nµ(½„©qQkhG£®ñM×‹w_Rî0Ü—yĞ5sİ7×fŒ^Ùd‡ ©L¢É¾²nùë§ö¥D÷İ¼t-Ïl‰øËºĞNXiÄØ3ñîİq?Q…ŠÍk-Û–öòÆíI‰XF5pôÇ‚ëº¼úµ¤6ò_';Z‘şÇ…×¼ §FÌa«¸5£Å~G¡œÔÿ§ú=şe?k{HÕtÛN/cø’ ×>š˜³];MşVlgšJx3É‰T¯\òó9x?ãbmâèÕl`HáI  ÚŒuôôáÕ×_âÎ,rİÁ/ÙÃœm‘`ÅŸ-KJûò÷	A.¿ÜûW¶õ(#ŞÓ·¢oÙø;CLòaíŸƒj~ÿcJ-lTÅ¸şÌ% «‚'
ídTú™±H½u`"¬¯¾ó¡›Üî¢ı•¾‘W‘ù(¯)°räıƒı}?ÛsımHFmë¸óW½â$®¡`Ò@ÑW¨°Şß	Ä¥h­3;ªûlµb×”}æÿ’œ˜=	I4³«—oæíêñ70óŸ™âššnñ]éİ'c¯E[­å ßus ¿`:j
Ò"<jOÓ¾–%Ş?X‘™/ÖX~_ ËiŒÉqoBğ§•m‰Eÿh¨”¥e}Çˆä¹•ù«GA“ÉZ…R4ñ…?d¹ƒ¿
›Ï]¶t °ÔDaˆë`âé®Ç[®°{¿³¡À¾m%[ÇÛØl;~ÙÃt,ëš	—v\BkÀ¸2ŒCÁfY÷r&®ÉTÓõ‹ÈÖiSì×¯¯c(¾TÏPûÔ× ‡~½–‡”ˆSÂ›µİÏâ	3ş k7G(O
ØâÌ·û.z+ŞÙcL^ö‹ìa4:"÷un†Ò±ğŸÎÙ‹ÉŒ¹7	&œ%*®"¯	ŞÕ	ş-ˆ"Î^Øı«Èˆ–sûLMû–Gzµ	-@,¬šn¼£øH>3ÀÙÑÏUŞcşİüz|Mµ³™×}?áø|K\l2¬·››tÃ“KÿIÙlÄğÄõæÛœşm Â%Ê‡¯:Íághf¡níWq	¯§$Ş›‘dœÂéñdŸSvûöŸ)Xì
,U©GkÓLÖë?.«Û€!UôšîœŸ$(}Y§Ä>õopav.%B:”vİ§ÌêÄû¹d%#©òn7gs™ˆİßÎÍ~‰C6”ãnPÓÑ?G¢Y§#ˆLà·cŞZr{½••X°AËÜøft£È8sMï1QkAh±DLj)hôeì#v“ê0Ü_;?}â hM«X>ğÜtš	Âò«m^¹6UT
³£İkÒn+Hè}õnû5+f.¶EP&Ì™¹[„^M©Ã¸‰¶EoqÇÌ:¦ˆÊ4Û`Ó©Çšåñ,ÅR€"¶Ğ„8mÜæĞh±&½•¤Ê,öä¢Öy"ç²lù®ƒ*8Ú)¬õiyQ¤¨9¦SÒÊ)˜uùZbeš™=÷Øš¿éê¾ŠÍ9DÅéÜ|á"²…³^¨üÈ5tmûØeğÛx ‡¡ªî^ßZÛVv,†[=¾©zú¢µôÓQRÌ9éï*©4`ÊxçÁl!í€f_Ğ–À¹'W¬%‘ote8¥{©z‘¬^mnbÆ¸h—µq¡Öõë-¡aÑâtÙ›®{À¿“ìà,òûÛ@”m®ê«âÒ30Å¿ş=ŞêhV$P¬u¦6M·21Ó}k±Ép†šP¶Û²°!4•ÂÀÚÕÖíé1ëí1šPµ¦"=V[iªˆ¦2½RÚy¿d|ñœ×ZOé%¤ªÜ¯3NµTTIÓóHLµø@ä0›cOJ…f—^§a‡‚Rÿ`|¾1Å‚YFê
8&ğ‚Nh^’¬Ğ0v*˜m'»¬øˆKÕ3ı£-ßN'â‡Fw»WSPğÑ0(çi£Ûÿ_zäî,”ç’âv»uy]8ñv7éVPÓãIûUR†+Šl*V$zh_!	íô(µöùâ+ˆÔt§ØUïÿğq"¿>¶ŒØCFPşŸxø­<ıöaHÊıÁ–X!†š)rpSCĞl3–}›Sã±>ÿI¾m`í=d]¹¯z~zÙp•LOÓ@­’§ADCÜ¡")$˜_–G^Ú–™—m#– øµË†'Ï}C“a ›¼,úoQ}òÃàÜ^5.ì1K”²RpE}â£÷SíÜT/ë‘	"Üš\+Ÿ’ª›¢ƒu¹üñ7@J•ö/ëÒş8Ó— ›7JJs^ıRşÔ•“Dé¤¡aŸ$É%ÏL^ĞÓx+;Õù_ê~ş
ô9å-ÙìG®Ëu
Ÿ³ûz­Ÿä„Z^¢$é/EUb”„  ’xv§£fHÔl³c^{ˆÂÃ˜é	rä°ı—]&yš-3kOÇ1t#.2ÆX"ıÇUqV¨W]YûÃjÆ…!
Ø§	ío»¥édí™³·FÊÃ1ã²=wëo|‡ØGc½5$ùIıûìĞíDmgG]Å“»)í‡XF™{ÿ]T¯š;ÜIğÍÒYvïë¾iòê„<-:Ï2öÔ**gı÷ó-Ù–§]ş‚0Æa“uÕQe¿4Ü©pòaRu¢DÄÛÕv/ş”Öä)‚wş!”@µ‚Ş}wúñ~ }@£ÛÈwÃ/¨^4ÊÂ¼šI%b]2ËÜ¬9ó«¯ÑZúYxš±—Ğ<t ‰­cÏ%[ÌŠÛ¡gùs&§UšFÙÅ8\TnÙ*±ù(·Ùıÿ²vá7ÿß•ÖDŸÓ-¢‹z±T°Æ&ÈŠÀ™§z Hô„~²Š¾&»;Ö@X:ÈË\Âì¸è‚ _·²\°ërûôùäûµù?!ò ˜ÂÅ=Âÿ´ÒÂ‘4¹¨0Wüc	˜™8ÁVÕ¦uÀÏ…j÷ÑKq+¢Ê_º\¼wl]¦FKåØ…WÒĞ¥j[ìÿà˜}™½À°“Ew¼ïª-1ÖsiÑ¦çgÈb²ÆWn@ÃÜôWş”×€¢0±ƒNn5ä8ÿÆ<c9ÌE‰}nJ©2SZ)ï¢4¸QˆöIfEè½~½³ d›©hNtU½¿‘uûu‰àÓO[	ÂˆìôH,_è0˜şP{œßdí	c—ë¯‚¨« ã.İW„gÚü¶lİI_S˜HÍ¦îKnF¼ÅşQÌ@.Î;4§Ê¼sâö¡t_í¯úZS÷&FÚW/5£	`µJ®<‚„Ìx¯şø“’¼R8â©© `¨ÖµôqaY‚à"ëÑ‘=†ö¾óß;µ£í(™U~èYÛµ2 â}ÁÅ|¸øR9,`â«†ÑÈË§’M#¶§®ğ;«sÜŞ”ê	vÌgm”¨ë¹1O¶^a*‡5÷Ldw9ùS,·‰“N×AJ2±vïÎŸœï.œy’µúÌS™°lùçNÚ{ßÿw—ïO/²¦9èÇ²İ¸D‹Ùi‡ğ©÷ªÍ¢m ôÏX'
 g«½ÈÇ¯.e>/XšQ?3Êïz›G%xF†ø_´÷n\¹ÍÏö’±9¡5İ´¢Şò
Hˆ0ûl:$\ò…™†õ£ñV ¸ã³Ä\˜ayt)Ó}Mâ‘qóJ¿­ëPC.Ì6Ğ…Å`CÚ"j3RbV5j‡œ1cËPõæ¨LÂJæ8j!g8Øfxo& ÷ÍØÍÀ?Òÿ ×Òş-!G†]¹{Ì/öéá’EëBÉ3s>(É+í#„³‘Eç©ùQÏ¶»œ£}Ğ¤ÂµcKŠŒP)–ÔšÄÍ&&ãÜÔÊ·0€ ØTü%:È£ïùãŠë>á±o-éèšôMì¿5Dõ[]Ô«ò¾ E6,ä ‹~T]äÖ<—anlì"t“ïİöEÚ,«†Œ¬®­¹İ¿^Dğnd
°xg€­ª
ÌK¶ßÙÍÉß2áİ®ĞÕe-³óıu´ğ1,×êb-4†ß–W€ßx¦D¢:2Í,	3['<œ­è,ªvÄ\uGûHXwF‘ä8;–•-&Ãøî*mŠÊT¼!¬ÙDìn`•N#…œÎhƒ•G!#o6Më[#"ú•Ü÷”sìËöA
;©)ML	+»š‹àãº&K ZÂAñ­¦"$WNçÌ½—Bîuk©XÖA{~	f5­ âËİQ„ &Éª"Òßc=,¯4¾uÓE¤ Ç¸şf 6ªàI#‰ïÄò‰î$tl®ækx!¸J>gx(8
£u1<(Ö’+5Öô&?»p•²ŸQáçm¶TR9õEEäÖÉĞE( (ß£ÎYŠ6ÍÓÍØìêÈş~óBNÇ2oc!yû3²ì7¦Û^-&İÁ`ñ>4æ-?u#Bc% ×¨·Ê+ôb»E:š|ÏSÚIXüó¹ñó9í\ì%ÛVL×«#ÙlønR¼Šíàcïû ?QQôäPêJÌ×ÂOøÜ
óŠ]¥¬q:iÅ<ĞÀ>’>…êîÿß¬8Šå$HÚÏ¤¨ğ¨ßâ6
Ş\¨ O9T‹‡ÕW Ä*¯@š0ˆ¹nVkÌš÷ìĞJ½_¨ß@ ºd>µ>n	Ş[Ÿ¯2™Ê·Û×Y¶öÈS®‡|i*œ6‰î4wJ)3à$Ê½frÃWäX„¸1¯ş@2	«ê@Db‰=gı¡ğl	È¤E)IwˆÃø›Ô´ğQ¨šg¶4X9”¿¡g¯¡«âlf7Ğ	qeÚügLƒ£v÷ífN#×&áªÛKIToşxSö‚iöñ´&·ƒ`©k˜Ó¶Ğr]wZ“päj¶=F¶gbYXœn]ˆ¯–=«Ú cøaîoWO¾!JD¦<vsÇ­ö§^´zç½›A²ĞÌvXì¼éİ¿×!°	+M?{1òbLÕ_çÓ75¡ ø•9h-sØ×ñşÒ„¾#b\‹£):¬]:KÖş ´gÅTm»ª†©ùÒàŸ5÷hg£õé3ï/xªÚ­Ä~7ª"ô<)áEçó(ÀRy0’`ÉÔD&I»¬"]†#?¸ß&zq¬âš4×;ï@µ©˜P5úhx6!Éæ‰ğB}¤=Â<zÅŞ r	<¥ w@ŸÂ+aªŞ1†Ó¼Ç„´¬<ò õÁ'\6¶ºkúLx¯Íq ™ZÿL]f$kÆdHX­pŠÄ´Ş>: Y5éN÷]¼˜jiÃ_¼#·›§# ©6[? Ñ›´*ÙgM×c“ë*Ê¹ÅbéV….ÃUÒÂµg~„U¯õ—;¢8_?Ñdû*´OVæ7ö)7*+U
yëÆ|=†äó \ÜI4«(k±Icr0ãÆB˜É&óhÇ&ÉÈNÑ¹x8™yÆ=µ"ß–ú™J„6‰c£ä|¡|¥ASš“­z8ÌO<V}E?ã-ç©„‰‘õ¦¥*ö	b·|!Ä7$İâ4EªÇw,4^‚v¹BfOgb§¢®ğ$—Qøsh"ë}[š¨Úvšîàã7O“Á¤çä,í·ãÑ ?}ÿfrùñÂ¹KÛîß\š¹¶> <8ßiÆ‚ôZ	®°V	!QP¹Ù}<²%v¦¯‰ÍÆ“Ú”?ÈïòäÀ½EH¼`õßÔ\'Vbæ@=å0šPf6CÑ•i¤_¹u8·îÇTÖ¦ß ÿ6Ë¦•;*B¡¶%ÔéK#P@¡]q³çj<ÔNİ6^Iû/dªDtÏ\IJ?@+l[¦R!}4M	fQlÂF^“TmSĞV…üy’°ı“<Æªkû‡ü¸rç½rÄ(şå‹pnGËh!¹›k,ıEû)ƒ–OT¼Wé&İ»ª]s; 	„*—îeâÙkï…8¥ú¿X÷§ê'd
/3ÿVü,:ƒXf´İôlñn%ÜØõä%^l§:êLØ”•Z€Z¢Ğë9o6mÑ+´#ûÍcˆ‡gê¹ÉøºÚMö™QFzµ6ô@½úàºeVPœÎU9…4K^¤á¬–m‚ñŸö/­hNu*\+×~X÷Oh.Ùâ§Ÿ‰Ş_U‰]ÿ»0Î“Aó÷İSVdˆISµDêÙz¼Ÿ‰™qe»‰?ˆÿnòç>úLï2ßI'Š0J¼x¯i¨hé-B­‰:v__6×.ØL¦Ğq‚Ÿ7w4 ”5öíŠ[¹¼œÏ’_êŞ$yfˆ(³˜•Fµ6„9‚4€T¥eØ^¥s÷l‡2Á”Æ:°Y<’|¹=c
å4†øvµ%néÉ¸~ˆ$ßïè9$!„òÙ!@GSQÍTVTöd³hø8ôA7öl„>Ri8‹èÁ—ŒÛ}P$©àe&ËèøVÒ
AE>—ÁÖÄqİÅÓLzÒ9d®İYÉ%ÓªÕToIÛë5Y#ëš}u$ÙmS?È¥ÔF«»WòïÓÎ°A:!M"3Z™YÿÅ}¥/n¸ª`öA¥ÄÉåMj÷niëŸïö†ÇñA¾+Âã’Œ”ÍLškwwíÈÁÌ#I‰‹kO_¬ˆâ¸4şì)ÿÅçz8]rÌŞrZ_G“85¤“¨<GÓãe¿4·'÷â²¦–|JÜïön9hßù—/EıÄ?KnZZÎà$Lö.¢97Â¯@”ÓèëêJ˜C@O§¸ê<xF_èÌÃÿ¼`åy¶x#&%D@#G³h;N‹Âë`Ô¶Z#±DÑ€`.&A³Å)	²+•LKˆÔ
Ê}=Ãp§„‘‹?Ì”,D9nº«D÷òñÑ¤¸Î¾müÇbà´D‰5x- ùâïî WëÙWõ
X¬gªˆ“ÏLÜƒ_puĞ%ªñz	ßö–BË)³—æÔEm¾Ûí¾JAk:Ï@—mqª"âüz¡¹‚a±
«@2^S;¢J
AIlI°Áò¯4SÉ¬S•jßT+esGÑ˜¢^İxóóC•½È'QñJ¿è‹ÜÚÙe•y:ÕÆÍÆvz+ÌÚmIm–ª—­k¾¦µ•J—€\mµãÒlıa—©JañH	RĞf ~µÛo“}A¸vÌr3P9­½Kš{EQ(Oş°8´]mÇnM>ï³,¾½É7"5:º¢é»ÖŠ ¢wññ'#9eròLjøRq%òŸ`Mìó*%âËe{óeuÃRZ‘*%ùåMWqŸMbÄI°cjœÎú¾˜ÿa»‰rFÑâèlÃSWå¦„ùPSö ×U¨‰ËçĞ-”ü>Y¡Şlª¼+—Ş:qƒmL‘îrdeôt?Zi“çW?âì±SÛémŸ´vz%›úX©ø¯(H]Çšb;à¿'1¤â4›äd‘s«¦ºKê“ãûíâ—ê+èV÷µ“>* Ş:óL¼U«|«µ‰‡³ÌÈ.ªY™ãÆ'VpqèEb9Ñg©"ÑÖ€_Å,¦Qf£À´mØ‘»†İ÷6xŠŒS3l¿€ª·	(—œf%ÿ UÂı×’äŒÀÊyªúó¦‘ªŸ>)š}ú¬¬nĞ†lkj	Â<ÿ±š«XÛBŸüö‰IêÍ¶¨cKrË|K]çgiŒîH`@Õ#€ãÁ³[–2FÿÆ®İËÀ˜ñjÛÑü¬Sı†¬¼Û@€•Fq6—IÖ÷Nk ãKòêĞ·´ít+ÈQÁ¤‰¥Ø#Šu2&\AŒQWö†/ b5­vÂušßU-o1¾òø<›ÏšèİÔ‘Ñsò:²` úÎe)¸ î¯Œ¯«™[‚T˜7äğlä“¬Ú+cÁ·cB¦œ¿ ¦I<¿×‹ìİœµÿ^udÏÉªtğk<-pıœj-~=Dy@*î§†IW’í°Ì9
ú¿‘º 6ıÖá²î¥FyKÕm´KÛPÅÉP¤fqÀ"õ~ér¶*5øëÕ{_¾ÉçHÅ?2´…8´¹NÍÏ2§¢ã§å$&x7m´¨îjp²€TÉ·ö`G†…È£Şx3òîG³‘á³Ì€cåãI	UmAÌWsÉ³‰H$9×x2.Ì¾k‹•xZs¦UnéX›8#Æ¥*÷l«c‰j@®î¦¨@ıé[Ù†³Ü]{ıËRÇëÍ_™ d YƒòiRÜÚ|ë¢µìàñ£ö,¥øåˆÚÙúà\øß½Åä`}¹ÏËş¥ÊìV‘6åğY$J=æyÄ°UÖ <ÿq|¾†<ÈäÛ*;4U€|ï–{jJûÛµn¡£ó‚·Âcæy?4xÒ«Cµ¾ä¥}PEm—'ÆÁmY$£. XñÙ^$ÃŸíSövåö¹çCQÙ ÿŞƒÌi%wÑ›ÿgÈÏi~?¬Oä	ı¬…tçÃTfá¡&ˆ{©#Ù7Üq§ìûø —Ë[o}0?Ï­eñˆIŠ×w#oÙríÌ/Ëì³"ÁùM&hä¿Û^¯ªSc¹½óaò›øQNBŞ=Ñ´·äPZ¡h‘£nÛÊ¶­_§´óÏ#uyÉ¡ŒØo¤E·7RS[íxö8âĞ•Epæ½£ï™“ÆŠÃ%ôUv+ªr“AH˜ó•¨ï‘°£‰İ	ß3Z 7bQ+¨gşôtÑœP°t%œ¾ê±=¸7´ı©vO¸¤ Pİ8îÿøì$F!»9NíŸÎ2÷Õ§¤ÏT.’îY9áÉ©‚H÷ş8º
´£Eƒ.½tåË„NoT
1—“n‚i¯…„3 ôv??KHáw D ‘(s´7µJÀûz©bâÄV3ë4GŸV·DóÑYWµšÜè|ƒ&Ÿ»qÈÈs>ıÅşË@çğÆ²4•Èm:»cü×/]6Dÿ˜Hªğ­z’V*Îy¢
„#[Ì‹±.}¨«Í‘@™Æ£'/ĞÏŞÅraÑÍÈDÃFçízïÓ¼L©’½Ü…ÄrİàÉÖàè²èDäüŞ¯RÇÂ9lU)²EŸÜòÚ&ãñ‚¹ÀHŠ§7ŸdšóôóI¿ö1Ã]0¢¤A}	8fÚÏVÌ0 7’ã¹ÿ8ŸKwê¾Ø$R-´
×T.1Ñ…Qaøà–Pœ§ J¬Û£kÌW52	u1…*$A„±ö%Öİe÷óçÌ ÷Ÿ,-/ù>çÄKÄªAË×¥dÍçÂDÃ·
ÅD®òşCù»¥Ç¦ïÄ¸Kª7Ë¡ò&úZ#a¶Íq|îÍ¥¤…
½†¡ç—wÿKA—¹T®aml¸o’ãì„ï˜Ø.ó†ƒéµĞìj¹H[ä_¶I7Œ%'ö‚ƒˆÓw(R$ªù¹l.<eëÈÔª/ÄQ1NÍ7ã™«ˆ¿ã›cN¨4ÈsÀ¶¾])`4ì†ï—bTMqœ6¦òfÁ§ã@ªKZœ'Pš
ì&XQ:‰«yË/õ­b#îL¿€wS:ù‘áO	¿šÙ2\I¿Ø9«YPØ»	Æ~GG‹®€y3]±©~ÛĞ]sÏf%JİÇŞº¾IjO4qƒ{g©Ú÷kIA»g¯â›oCøäƒ‹üQ\³[)|S>¾è:#,ÚW{ò±ˆ‹EŞ-)õƒèÔ*÷ãM]˜îÑ4´Ë$gCŸYò{ıAÏÓäÌ!vI]Vè†÷Ävßp%ê~,»§dºÎ[G¥®ˆŞ*ÿÑ©Á„aDb®Ç4r2ÕJ‰ød¼}©cĞ´´¤½ºutÑÎ:kõlSÕí¨8·½ı¹jL;‚†åš¸Ü±X.E‚XC€¥6¶‰®F•ñ‡Îğµ‰ºôÅ\Ô»Ul}?PIpÊ#%yi`­:£N6#‚äÄCß%xW·Àgy.wZR€ö•[æJQ>'œ±f\¥?»šÁ>7W¾½®=½V.î"²t­x‰ÑWˆôÈByIHˆÕŠ¸­+¸#ÿg×8—d<]yã}»0ê ‚ş×Ã†cAC²/ûA*Ç´öæÆU}åf]¹híÃMÚŸBî]g±É L³!¤ÿşZò+ù)xÛ&êNø	NÒ½VÔî&Š´)DŠ…xÊ”aaç|ó		şKÑNŠdË½©kÑĞŒ¹l}Ü<œí¾üº"”x6Òx³ÇÑ¢	4Ê‰ƒ_é¬êœ„ûËNÛ4ò& ø»ì	mx×Şò yİz˜KoKôm`‘+_LÍË¡­zÀVXK¿ü1£N3{~µØpe­ÛXÂ‰Ñ¸¤g mF¬İW˜
Ùº/&şª‡jï÷f.nF{I‹KÃ¡ÙJ7şPàˆ˜ì+ü+ê4~óø€sµphh)½x÷"ØÅYN·ók|JğbÏ°—T şãò‹?|	‹¢É•ôù¥4œ©j"ä…ƒFÊ=úÓO!ùW¶`Ké@ûÂ˜s‚üÔ”‘`èIŸğS|Øš½­ë¢ÿ€ç8üv”gªùwÒ1£…JeÔ¿JGHAh:Ë&IU6èpSG„»ÀjÑšÄôî«;â;»èçéİ-Ë2V¡nÅ€½i¶[Ï Zl[œ*Á¨§f×NÄºÇªá¸Ş¹ÿk@ÆDdK`ß+¡ìxyİ“T¬ß´Š0ğ´r%Hålp™Ò²ùKØ“G±)İM7Px:ıDë_©\Àò&ybG1xlÉ*‚AfxX2o]ê ğïL ­üW1Hüõ%úáÇ*c‹ q‘ª@v¼É?·¬À¡ÕâM6ÌGkoE¥ş´¸Ç¢Ú:€;˜®ÏòíÛ®}á<BÃÏ4î‰‚9€Â¥Ÿ«¾dè;Ş‰ÿ}Gƒ‚ñ-ù~ÁàÖUÏ~Ò½<hVÍŸÕxÉ±"ˆ)õ	f\ø~d,•Ì7ÖÜUeJ…raô’ˆv2 İ€Ò‹˜nÂ÷/V+ÌØî ºDÖû€ŒçÍ3ø£â¢R³©QŞ/éÒY¨£ÓINKé+»3’¿:T© ş«•x±µvõÓvé“É—á‹¾rt«!èÇíY{GÙ
3£M)?´ßo¬ùÿ”Uëäu|¥ÜÓş”3Ó•^û1Û•şÅV•mZ«î¶ŒsdI‹LkCX÷}Œ}£òDÇR¥”HmJàÖİk˜ÚqLÍÙw‚4œ|¸Üd›úÂ¿·Î½¾äOã§³ğy³Dmx²Zuq,ozœ°Ò+÷º±Ã‹>„ƒèqú|ĞRà	íõvLx˜] í¹ï°q¼b!˜ÍŞ'~ÈëßğÆ&5øc+ú¯9ñğ$f·5Ô¸´; _J‰p O÷3FßºmMfDr&Š/çÂ3ôëë7ùCQ{ètZÌo€é¬&P;'a¸76®¶gC#zá˜ø{ Ô©´O ¬„ÌÙé«Y¸š›b´8BSü> í;YK˜Nˆ†JMIÉ#o«t\Ënkm*üLx@—¶ì3½  5ù>±~c5Æ%º‡,ƒ“ÿYğ›Y2¯tÆ¯Ç"÷»>mD£>©ÛG“ãUˆšˆ~5dkÜT¡["ØËzı«B¬ïû»ë{™F¹ƒÆ=Úƒıo­°±
òıˆkZê²„rn
	—U÷€q¡}7³ô£’øŸò§t(ŞgƒªZ½·&È× ÏUgxöè,ÓPŠ{j%FN¯S*7ˆ~~ZH¢g~:@¶ÕGÍ°!_-‹÷s(R‰yëë“'è3S)³•FŞÌFuRÅŸOÏ6;©Úô1;L¹äX—“¸ëÌ1…¤gßé;f˜×ËhX}‚‚w¼«;'Êí>Sş [æåÄ&İ9Y
©c_ÂUDÒì®+„2-]TÊ)9û3Ÿ á}Î?Á†øYËäâö8¹’tY·òø¡—‰‡ÑİR åoÔò­bÕè^÷˜ŞŸ*9ŞQHÓm4ìh;*ÀøfáEÏ™S´’Jlö ÓæU;—m¼%*‘ÑÅ!M¡yÌåÉ£9kÆq@ÎÊ·ÖÒ¯ùĞ±—¨jùºØ”|ú”Íù Ã±8hÎêÂèï¦ú©ƒaÊSvŸÆóšàçöj/ùó
šÏgîEˆc¤Â†Û`æàZd¢.½G'mó‘Šh~™ĞcK€¾Ò¿Tæ`›¡¹•¤³ã *KE”äk!¶C^J$‹ã8É†ÊI!4ò°ñ”ÃÈí• 4_¶*"Aæ}mI›X+TxĞ‡ƒ‹ê‚£\tpÚÀT‰[àïôô—FPÔí¾¼rŒd³‘ÅÖáìûœÚk­@@Ã¤øªİâó®_È÷y<|ÚûW/|ÍÕ9[«U0Ôı’ä…l.Â9/ÜkãÖÄORù@©ôÔ_¹[„\­¤äqòÑ¬œºnÀy¸ïÔe|w5Ô f2ëÃLóƒ
6š?DŒqİê¨Ãƒ¶“²`2^u2ráŠ„­¦„l;Ÿ ¥«Ğî¢{aÏÑUf‘saA˜HĞÅt812PBdI5ó¥
Æé„®ÂîvÔc¿fUõƒ<pÎDÔrWÈjzUá	«ìéÍİ›C ©¾ÍnŠ=îÖ &O°™ó#[]ÿVù÷®¢®fœ àP?„Ij:æÃñÎë‚ƒòîk
Ë‰°–z«n´"[~ìO¶S›*”X­˜H$+`­¾ˆ@oĞL†ªzÔ|Áv–ÁUc-Lƒ«v€(ÔuéÒ‹(N½Ãò:Ì+S€$èâL±4ğ?'~Ğÿú§(PféõóşVOoÿôñÄ–{‹˜}ıÑ‡Ä®]CëÍ\Ãå4ßeKÊ%S ñ&õ†„ù½A#tV:ŒzÁï€ï±ö%é°èÍÒ¦Lé®_Ü†Š¥Áx¹æ™ğÃÒ
*È§|qB¡"/|”1ZO–M;ÖD$bJ¯›qC«Á«¬rG!°×ó•âi¥¦Ö*^¼èi×ëî#Zi{bv•0‰YõyÏ7€šŞô;€[ÿ:KB·ó%Oı¹3kŸ@ç“Éì«ûÆµWœ¢ÛÂ˜M\ú±tû;×ÊâX-Ì”ê=îÀY;QwÙWÀ]Ñ«¦½4Å‘=:Ğ¥|§ÿÊkôv´³¦—”­£¨†Ê¥zş#œåá;î®q¦·7åylïOÔq¯fT.7ÈÑë£À³8‡«pBI‚[Ù-ŸÑ\3á--‚/)ªœÜ±„Jx´Àğm•\äÅÃãqogÊÛ)¿I"÷€¿İŒ»Ó|ôhªçöGÌ1±T‰˜÷ÔÁ4D¼N†ä5ò¹ãgH ˆ–•úQ Ë'D*A!²oHüÏƒõ1rø›ÂèôóşYÌù†<>dæÓL*áÅ…W=ÀÇIh‹
ğ—2/÷Ñw»©i2ÕPIóÖ¶C»v¾¼·øÿä"”÷‘ø_ñ?!2-N™J—%oóX¾ZhÔ§½ó…şNŸİNW¥òk™ÓxA;?naû´ø!SÇ¸ÿÖĞG-˜ã6ògAÇzL+Æ9aÒ[È u©å6ÂÙ%øµ_ss@Ç6O@¸øX
Å
"=Gó|šQ¶K )^øóJ¶Èp°™ÇÙŒ†*YFnb¤j¤¿ >	Ö.^œ2T´2—èøyïiÖ\wVZŸÍ7I­3è„?¯æáCşm,ÁyÑ‚¿ğD8æÇ/.¤‰°Rbœ·³‹µRXÛ|%7q¾"’N$³vƒvŞK É<uÁ×d«6uçrNd`ZB\ÓVˆÌµYwb³ÂÆf-œTù	4ˆ£
$|gş7Yè#³™¡qlîa…›Ø-ìkfCÒ7Ë-›»î¨4%±MÁAËsq7Ãøõï$¾ÿ>åÕ„µ½pü<¡ß‘·c¿»ªÚ¸&«ÈÛêB*°6L….‡•G…ü|,R	]y`ñ¤ê	e‚óŸÏ½jj¯Ë&1¸œ.]y5=df—0åaiæQ6cQè&î—Ÿˆ¼J{¢gY4¶]ÅŠhNiøNïÊ“tÔà–ŸòÕ±ªjû·€ë|WèaxŠ·U-TQ}<™?UeÏÙvĞº BÑM’ó{¥-mš²xJXjDe/İÛÏxğvMqVªkŒE<,iL Ÿ5H®OEìD°;j
â“ºôT€H6ƒM.|ÓOiQ„ß(Çèê\ownµ •'srênF¤Äg²ñ‹];õî™M
|¬|8éu×”ßCTÀázğÎÏEZ	.;PëÆPKà>µÈ$Ìˆ÷';‘Ç¨#q¶mR‹A¡—10NÉ#â‰^I¸£`ÉD;Z„* .<±<+“jâí<~í‡7éÜãËÅèôr¿í–=†.»®on6D½1i¹gº~¹á}£«,5¡Ïßdñ¾ÿëˆÊ)RrÁj–@íü1ˆŠB£_”
5>Dd:PUS.7,—D¯šHw¢2¶ÿ¢ÇTw„—šš—õò–Š—²3Öÿ[ Ø$K‹,¡•“ƒç+G~[|­‚(âŸC•µ fw&b<zbH‚²*¦É1ä¶ç—] á{?û*‡”Œ…£€MÀ“Òşğé];{©«”½|-]¡¸ÔÑAC›ìñOÍÌÑ§A$@(aââabØñ_“Ø>OFüŞÄbÿXZÓÚWNóùğl‹³mÄ“ˆ7hJ72•…ÜLzXT»{Zgnv
s-Ë
Ê/A×[?ÄÑF9Ò8ˆõ—b8äâ·´ƒU²) ‰ÄPÕ±ªÿOô‘öµ¢Y}¥ã]!8X|OGrúàaö`Yq›Zì­# ƒãh$>/hÄ³ÍAŒ‡¨±¥33›HéF¨‡ ^y(µŸ§ş âÎPp|ÅÊƒ+Ï»Œëê¨¬šYaİİ¡ÓCÏé‰Ó!VR¬¡™îu ÈŸ|LÈ†ß•vÅ¤<’€ñEşÍ3]5Œ¼àjn|Á7‘ƒ‹Ï‹ÌÓ·Çpef¢Î‡1_ëx”±ˆ#÷fÀT=ŠX¼óûŸà
\8İÙ‘ş±s—d·åPªåÀê~ ßïŒ†¼ºˆáœÀØ7×/ÏÖ›µ\ˆ'*‹n‚oi3fm'2š<f:Zü9xŒ«‹*·zNß¤m>EÈçíÜiÄ==ÆÃ­T&Æ‚G1÷ÿEú·@¶åûíªi•§gØ«^i¼5ƒë‘«º·×Z.a`ÚOˆàO°WÕ8°1½/Kš¥Ï7ˆ@µ}ßBã,ã»,şC	Iô¥XÇòÜt$Qp×4ëÈgfñEhÊîv Ş‹9"º`íñ\õ‹·®ÁZtR˜„“ƒGŸ}í1è«Æ¾;Ò@rà,@è	
ÍôĞ^à	f´å(Ÿ'åïóvü<pst=y{¦1vjÁÊr‚$9kWÃåH£_×°ûD á´™3«	³*¦)-Ìÿér}“™ÌÊÚ(^–Ê?;ó7jêºY^²8ã´ìÍûBÑ7£m(J
DÀ¹š¬k&9ò˜V®eƒ+©1â¦õé”É‘ù…‹oäˆ˜,£¢ÜõœŸá­ã6Ù}¦òÂYzÇâb8JpVWWëŸCéééÂ;ÙMÌ[òÛ rY<Óù°µe4]œdKéh!Òê‹'8DÃÊÿÉVªGÊùÙ{€0>©Åx ±„ÚåCïÈ—ÈÔ}xAhS…¤qw=>p*¶åÏ" ç[ª&k˜Ö ‚¶Šb²A%Ö00[TŠãğ«(ıëµ´ĞÖM)7l¡Şÿ
Ù™°Ùd2³Å*¥»XÊ)mê>çAâ¬y4"òŞ'6±ëPq
b¯¶ïµQWxPŸSĞİ÷ÉÍ•6Íğ´iø½pr«KĞ©@Æl¦	 ¡øñon&‡RpåD-hë“y¹šV†±ß­×€ÌÂÆ”TâÏĞëcŞonN» (ı|oKÚ2ÙV–.H„=Usuœè¯–@#Ä›j^rµc—Êeo(ïV\çaÇ„µ•^zyÆ¿,Ïµ’B¸òò‘1_FN}6òUh Â7c|ûëf/P:
ñkèCi£Ê}ªgª1°·X°ÜÂäOP’Şµpu!øGÄ}§¨#=Ş^[¸µ­©c®EÈ$aö¨ú8ôå	ø®bæ*H¶Ãz†TÿwiŠ¦ú©Ø:ÂëlÎ‚¨…õ+#ø(e_Ïò
8Ã†Ù}2lÀÃFŞ(KóØÉv]¿s»¢ïh<¦°™4‚’”æmŞ0RoUAÕ³…ŸU	‚^Ä%ì'0ä¢¬>¿K¬Zÿ ¹Â®¨C|.Ik™åÂ×iKëzÒ?H
¡2¸·ËX„tWŠ®õ€]›co•<”#±øğĞW¤ì©Ë½h’ç€‰`û>ÜîÚ?¨®.•écš¸[Ô§¤Õı—íG5şdÄvÌÜ¶ÉH/{JÀ@_èb»õä³×°KËº5âQLÉñ€h9¶ƒ5G)£¯æ¾å`s_#¡»¹	ŞòËÅ3„>ÔZC-  °rıpÎñïõ¹C¥\»»÷Gß¤Ò…HrÙ˜™k÷Ëti>[†szœV-QÑâ&™läñIõôY	,ÑŞŠY&ÉÇÅ õR¬ r1ùß–³IĞ¡j³sq¿=gÙ+ëK]ƒÃF9|ÂÖ·S)ÿIêŞ´ğdGİTU_Ëúğ“Â¢Ûb³ş¶	Ø)ÈSû{rÿ‘ôá:¡$€ğûcó_W[Âù®¨&i@RH«©—CËZ†gÃpm¶Sõö
Ÿ$dXœ+ÉŒkb€CÉv2˜8Éià¤u\ÍÏşB™ËÙ¿S
¦uhõŸ^(PbòN§=±ïM³}š3­?VÈuS”z^?h°™¿DNIìQt!ë\ò_Ï·úıšA?´·}kW€°ÇœğÄä¼Z|T_Ò4fo‡.": ÖÈy§Ú>ÙjÜ>“ëÓ…RiL‹ıH"(.ñÇã9 º¬mî=•yæ_{ õâe›}f¯ŞŞ#;O:İœÛzyZş#Ôú?vcÒXÄzÉñ«O¿Øêœ.ó“€+:Fy‹u—nª)b§H¡µŸcõ¬VO
Ûâ©—Œöã!F.|™‚¥÷ëÉŸôù,“¶0W4É,‘Våş y z‡Ò¿{ášĞú€°-«PEz’î|	Z¤†ıªşˆLšhÉwi	¿¨ÈÇ¯Î@Td‡öËÂïõ ¯yóoø%![¸£Ec¾bõ7c54Œ<¢Æµ¦œNùLñ¼fÍª‹*Ã¯?©1è:‘‚?
A·±üU÷7©âúÓ†cCô'o&=‹¶¹k÷Ÿó2Ì’ÀÆÂj ·m7B¸¤ÍâédË]°Ùsü]?æ(Xô]p~mpı˜VôìÆ–fÏ'Œõ/IóBM@xÑ"__ÔkÏÜEc&ËQ»6òé}ÿ‹ĞLµ–’ü c]$9PjS&gâ¢­Pï×®¯ÚP36‡ šÓY«Ï+"Vqy¾ş]øk:ƒ¿È+™áa2*‡Ş²ÊÅ~7‰D¼Yy%3fu¿¢„ ³ÓW®ßş%¬e
‹f:ÓÒE©({‚á +ŸÊÆ˜èz]¤ô›kì‰U¼WXG­¹ïNng…ì	0ÿ	4Dp{á@4iÙw/2¬÷C¬SBzÂ ›0ÁÉm"-çs›%ÎgBS¤ÔÆ& x˜ÛÉ3æ²§AY,Yî06;~íù¯ÃXu+ímk ³G2ôšş8kÇÿî¨rªZYŞy%5WÂŠ•e…x›ıökuKkE“û‘ø„S!<3jBL“(Q,5ÓÖ5^y%øÕaB7CçÚU_ÿµŸÖå²-?@4Ps00nÁï|)äÅüŸQ†ŸÎ¹ø›Ÿ{ÛÉú©º¢NûoÄ½ÈâİaÀÕ<æİKl—´ -B›ÃXÁ)Gş‘¾¼×=¥Ã1&EfU ô¥éëş¤‡÷1bÖğ†lÁMÒı˜6»¿×é$B*Z…wœE£d[rÿ,hChiÎiecUåÓF§¨û/Îó¹RyºğÍBrIj©+ÁÓL0\î}w‘êgâúûí7†x%*5	¬CáünÙ"Õê¢ÊÛõóºX¾Ï~‚:¯ğ*T·€p@]¯$P„sæ(kß{À¼Ä£=v2*•²0ÁLsPÆ51¦‡Ã³<0UĞ/9Öÿ&€u˜Óø¬w£öÒÉŠ¿š+°4™¿×,ØÁ2,²¾ÆŠâjöî9uÉáZ0§§ËÙãªÖ]¦N#ÏWÑOiòÌ7(>ÜCËÁ|©0÷…¨A‚ê,C¨]/bİ9XŠ&€µºXKtÂlRÂ/ê¿3"‡¶Ì­¡Æ(Bš¼v>İ¾½è3/oOÇ`QcùpÙm{KÕõ®«»d–T¹¢/9¥¯Sõõ±aw1jzš9JÔ(’—7
½	ÙÎŞõv–ÁºçrÕ|Â¾1ŒUh§W¥¸X•âR-·üj’„l©&v\®FP”]âŞHà."…´ánàb.—­ÁZ²TË3àôßh‡†8O¯üÇæ×LÔ$bbMMc¥[_;†±šAêÍ¡i°£|gy"ŒÌx¦8æÂÅAï,‚&4U·À“Çïƒ†JÜ\{ƒ?˜‹xWàtÚÂ$kRcV«NĞìblD$„˜8°•BByõwp»Å&WúmwªŸ@…ös°cîêmıLW¾'ÇÄ²©aYIg<ÁJ”¿Î×ÚöŞèP¬¼¿	ï;ùµF²“vÒTÈ»³ò—@zÜÎVØEHOeÿ?WÌpˆm ûZ×üğµOY÷<#¡‡‚hk¾f­Hv…£™¼ŒH-Fiô!~øGæ}¹®ÿr‰j$‡ƒNQ\¿â;HX~îÒJÏçÑ÷8ŒYN¦°Ï?èJ¿=Â½B-zC"H»t¡-ÉHt(İáÈáBş8—z¬m%îÏ×ˆ¹'…	“
âÿ!´³ÿyl¬nôt+<èû4ZwÿÈYèş‹¶i‰dŸ"t`³¥èdsÕU™m.õß=Î,ëøcä{ÚªèıN©Pºˆ^‚ä«o“l¾tyÅ²'g†$$·«~¶ı)®~ZürN¿#-¸ÔÇtÄ—è}–äX°ã&C‘üBwÏ†ä†-ÁJ“Â4F¡pı/‚4_K±®a Œ`„¦/à§Á{p{¬	‘>{5Úp²ï¿’¿nv1r„,í–:ÒbX£KË9Ñ„Š’„¸ZŠÑõ58×6[DœönQC5?êÁgMùd·ÉıN'!eÓilï¤oÒÓûÿsK$DŸ°»¼““ZÛÛb›ÉD
Ş™¼’È
‹¶Õh².Óé)w0QŒıÇ’i©-Êû/Ü[—"èò£SKDü¥êÒ$®yô*Ç#è—²!KIM´®ÈRí÷ÄLä\€Š›±²@QV9Š®Â€&3âŞ7CÏ%-‰ó8Ê«6xŒ¤ewe—òÀğ­‰ˆ¨sØ
:¦8û–Î‡x¨ù¤;ûš´)J
óy˜(Ì®‚Sÿ€mnrÃ‡£	™65¦óŸıêÖ ı·Ú“x¬"­­aÿ1üëEÿìx£’‘šğø¤D—TFxƒñ%£~Ê’R³Ê»eİÃ¬*<»"
Üüò9;“Ãí*TÏÓgÛKJG‚ò5*´1»ßçÅ
›‰ê`¯ƒ¡ó…ÏÃ…¦»W|åÍäB´¥ßC©ç}ªôpµŞp¿Ü
O=²û5é±†‘$§h“ûÆ#N®‰T?¹²›X»±‚%^„s×Xõ«#xªñVğ+Fç×şğ†õaE#Òõùsòñ{Ä‘DÒµ˜şê#ï‡AîO§Ü>ı£ı³ˆ_	l˜&~ïmºt³‚2i_r±õ Z&~ğçí…Ş@f³€ºDpêØÍ#ï¡
%¶3¢|)ĞƒKmª;Cî ĞA­ßysï|p†˜.cù¥İéP-†µIBî´…Xrš%?ª	Y¬îR7ß¨Gv‹NØQ
(^Îo‡-”X²½°ì$ø6-•õ§–äÓÏRSJÂ@¶ç¹¬®ºCÎâT‡<îÙx[ŸDÒşÁÄ V‰¨Ò[®…9€A‡ä4aO¡øßˆÆ/Óñ !oL¯¹Ø<²”*|rZ²‘ŸĞì×Ÿ1—æç7K¯^E4¼^ß‚ìP_f AÃ;jl¨OôĞÕ"Ù_¾‡9PÔTß£#ím"¥Ù^Š<X¶tŸî› xŒİ¯ƒ°Mçl”6PªÖg(?u63luÉ—…ÔÕ"ã/˜)§Ãƒ-wüoYÉµ@¤Û±=ğH±õÌFM+MÊ|	¼ĞÇÇÏìp øäÊÙ±í¯!È{y•Èq …X/µ€ŒĞ™Cp˜>Uª±Âƒt¤ âÛ€R£ÊL¦"Ë xºy	öĞ‘y©/Æsã!Å )ZS´EÕ=°LSY}]»ùürÁŞ²P p®	z
`ßbÁ«ˆWÊ'–Óé~™ò˜ÛıÉ÷‡pÃˆeíJò¢ä½³nçStn<†‹ÅBL]²o>t~…2øªĞºUŒ‰ŸU ñ-H-!O-ûiŒa´%$8Òì„\ãÖ¶ßp×*ÑÈµrt±giEg´¬Ã“…XçW`ÇoN¢Ö•ÜuúGyî<¸æÍ-QÆóôiZ~±m$@^¼çşZƒÑöâ,$G½ŠC5L£Šİ‘ğ
Ï°Şõ‡Iƒñ¡Å§¤¸E¡‹²»ÍîosŠ\lñh›ªbçêª’¶V,ZVŸ&²äİÅ9¼,ˆ­|LóôRëaÈÁzryAJâw
(]htzÌP™*ñşj~ ôÔÅÏLÜÙ1›¬[Ô|yR9%!'ë†»„Ö]î—•çFÄ®2U#¯w]<+0–ş’+Ñë2u_Ñ9ìYÂU‡%¾´úefßÏ:x1àQòöÇôÉ7Ù~·«oUoıà×ó¢ŒğìÇÀkt£ø³štA¿î²ûöå@nøÌ…À“ ûdë» `ßìQBfËµRtwsÆ¢x"&pzKĞ¿¨Y£8˜µdƒï‚ÿŠ×Ó9z$û¦:~ÁÔ0«=‘8ÙŠŞt­«G'µ,üÍ9Z+@2™FŸqšêvdt–Û±¨Äv.¼†‡ÔªAŠwrÕ²E’üûğ€HO³ô-u·9©SW9öÁµÒBÍ&Û8Ô>Ã9|68áÒV6—™‘y–¿¶kŸÕ&ÿÓ|†bê£JqQ~´ş øfĞH£Ê×lÿOd²«Xº·¬¨êçîÑË·÷—}j‡nJ2²ÿ˜¥oµÑÃ¼çR£À22O9™Õ.Ì,ºàh]!c²-./àkNkAÒîšésUİôµƒ”‚qÃİyüÈ‡4Á!œ–á*l›°Ü¾S=U¯÷Wº›Y-„ÓgåÃ:Åóâ(oıOûQ~ìÙ§½Ì~½E¤ˆˆC nw|9\èÈ^Äeñ™LÖµ©}¬j±H¢ÅéÎ¨WÉÔ<iò–DIjvâóÍ$‡SÏ•å:,Ã·r4~Í„<œÛ ‰OYŠÓ3ÍW¶ –(³ÜŸ„0E­wéoÕV£r~f@ª}%ŒqûIÜÜ4g{ú¬V~“ê{Ùt<`XØâõ&;ş™&vAá‘Ş}œqæY°ëãLğ$ÿV6ÿoÃÌÿØÑÇqäkú•Ìgèäcı×$åÜ‡Úzu†ƒfõÅÿrÜ·P)vŞÆ[òtÔÔ³i%;@³¶`&£Øµ!}ëAüÍn‹¿<”£eg3Àß[“]C(Õ#NıÛ2ÌVëˆw±¿ì?Mşˆ
Âek(+½Î©‰À6«‚¬ÍSde8G³næ*’(ÿZ{g%„)LÜó¬N,Mlhvó7~û…)å>Ó
Ç™Íİm½W-‡%7ÉúÅ±şøéKUåâİG\b¨~Pè(„úyá×Tñiy$mÁéæ€ïhıòo©”‘I€»_ï4 äÃá(­jF]˜Éº!;±íÏÌÜ\Zš±,ÒoşŞ$IŒâ°0æ”òëVZÁ[¯÷:Euëˆ¤¾é¥£™ª7àµ+Ğy¢vR©T]ãDX )In¥!-£(cÑ	‡edÒÅo¦»E`c:§lQéàÃúv|†MÌvíD¾¹¿?Óêƒ*>Ş§+UXı™{ëŞa¿Ê|0Ÿÿä„ñ·@3üëÁ¯­¿“óÓ›·äf{e7j³¦ìı‚ lŒ×:0â3H¾à¨K—{Ş9»m)«MäOĞd€óMdOÕzåâoÏK›ø‚ãú4«LóÍ(	øÍêàë³|”ÂğÒ‚ƒ1—âú«ôòÄ’øáÕÃõßÙátNV’åµïß‡ÍMut`zhKåœüHx_0ò}Şv E?M£X™	ë6©È³sÅİõ÷»¢³ŸEIÁS!
*f÷ï,†¬¿\cİ„ìÑ4€ƒ3C
úß±õ°ò³øç!†®êºÜMÈİÕ+Ÿ&X™àŸãLÅÏß‚¨NóÀagÅHb¶ÇkT2ØA KÛöá®Ğdôk"<Î‡èÍè²?IËÖ÷·³á¥>Xü8°bœæ•t‡ÿÆ™N‡§d¬4¶å%;wEİXgŞØÎ ¿”Ëİ=T°Um‹ÜvçDÖ`*á›÷˜Û„[¸]Ùf0« 1[¸ıF7ã8e¾>Ù‚÷1ƒ^:Ñ±WP7ü™´I¶Ï£/ª=f'ª›[r=ŒÃ@™­Ü¼ğ.EŞfXˆåÀNµfm¥$ùDQEèÆ]J‹.ĞdU]ÉmÚUz³“’PÜ6yêĞÎ$s°`Ä báYÑpÎØ³OT¾ë!î„^Ç`)^‡	„÷;µ²şúzGo·á« ôi|àİVë=Ô]+Á_wwÉÎ^Ö*3ºó)Ø/ğ.“:3 ‰)Ç^.­»IÂXš³ç
—½ªê)%…Q7qª¶æ|{ì4<ÌÍŸ¤`®ÕYIæœ¯gª ÷ñ8Jƒ/ä¦‚(Cí]cèRWmêßK³g8ëN+Úw!Pxş/ûPkxÅdJT«»˜m«4íÖME}s×âƒrxéàéÒ.vÎ„Ô·÷¾i¥KáÿÚ¤,ØmŠªÚä@Kç"àhP5‘^Ò9Ï=Éö÷q¹W3ğ‰.^&a9¸/ ¾ıÓÌp~@iC¡ÛÅ¸–QæÌ›)RPa;i©sœ-@•A´~ê+¨l¶1;pœ°’ózÒ‚‹ÆúMÏÌÏ:ºÈŒgy%Ü©fÔ^·¿ÿ;g7wÈ[™;,Îõôé–Ó&É©â¢úa¨|Vİì"äŸ?›ò]FÌ‚¦Õ¾wÑFŸó‰?.é$.¼&èAæsqW‡«y€Ix²V	+OÉ÷›·¼œ¤PÙMJ„éW;QZâŸy“Ù@PIÖN„#…”¢7.å<?´¡t7µ£¢Ôh;÷M’AÌªæÈ³ûÁ4IYÉsdƒI€6Gï—ì(ß¬´[º­±7_˜(îÃĞ¹,öS]¢S‘ª¼ş®TÏ˜é™u3Ã›ß$N¢Ì‡—QÄ"„ö¨2^‘Ééğ\@S]xj›ÿ“¤b¶HAyjG½ùÂQœ?Oë×Ş=m3%¡€˜„E™~ö•L*7J×˜½›Æòÿ òÆÁ@ÙMSj|?Æ¯âævU÷İæÄ`àŠt°ä²†F¢«¡½ó`¾Ê•Ì]n\U5–GÅ´ÒºxÖCã”:'^ëúÃ?¾è6¯wìöL¬:ÁJ@d@ÒgŸOÆMü·ÿ½
<×é¸O`Ÿ4	X?@ zÚR¡U¦š…äÏouSiĞ(Í/9„ûÜ¢·¢R|ír1
ïM7²”Uu«X_½jv³aùù##T;-¾Ê¦¾^X…à/Jœîºş£O¡Ú¯Sª®IzÇ$SB0‘iY .Y¡dû(½@¹KÃjáM]úú6FÂ]¶­¼Œ'»J×7TŒë•ã…ÖG!óº¿çBc½`“3–6a£E“Tƒ'H‚qTíZÓ5ÄSÜK™q¶)¡F°¨’XŠáCö“àÉ%|":Èg”c€ªŞIí~äÓORë‰Vâ°§W¯4¡šêXğî¶ÑÙ–n2.0ˆ²[-"¿}î-@£QÔf§ñT¶š_?Ã¢Œ´à©O©µ–¢ƒÿZ&ú´Ñ+AN?è6È
B4'!§8CÑvˆhœY…‡ÙH’S4M_—œÎoŒå¡q{Ëkpî±ã‘f„J¦pş¶Ÿìıu¹Ø­7µü‰ŞDrX~qtY6ÑˆyÎT	.Ç¾ş½#ĞjÀ³7»Ÿ¡|2ä´%àir©±ê½ì(c¦D¶†¿Ó‰œwbõ­Õ›Ş©ëö™·'?w5“Ùd6eZy­ûd&ÌAO+H×.>KÍ÷ñ´t•ƒ¬ÀùSrğuÅ/~Œ
eŸñ¯ã³L0âÀÒİŞrıf7·í¢ıB¥oİWê¼ ŠSEé¹gÌ„Ÿ) ülïÉx³Í<pØ+ÅÖ#üSw¬;fL¥%,1ş @{¦T%>1Àâÿ§#nÖçÎ wëÆäU,¥æóşd¤TüU#^ÛúI]+ØcÃyÿ‹›@¹/bÌ0	"§×ßÇf+·´ˆ;¨ÕŠ£Pˆ0?¼p±&FBG®qn&»¢ÂÅÀNß›G¡GµÛ© ²ïõø£*¤ÍçƒÙ0áb
¸iğÙ‡Ü¶üA{{9†%È`¬hõqeĞ2Ç%ÌÖJoƒ=ÀÄ—¬4—Å©³„à<¼îdGgÁØ:¬*F9\ùg!dWB2X?Î©xå®’ı`¤í
_ÊûÿB? _ÖHøö)œ]P[æKMË“÷|üõ•@ö]Üø.¼š,É Bğ2PÅtº²yXå¢Ì[I× ãwn¦ŸFìƒJ}˜˜ò"ÿŠ²É,‹ş8¢ìÌ€ØY«ÖEæ‰·NsÆZïfF›æÁË(N“(©G§sÅkËª+Ôz.¬ôM‰`^iEĞ]ÿ¶ÂkU;'}x§Íl}.YÎWíSõ,Èl·¢7g4¿‡	¢Zh¥£¸ŠÀã„Şì]•¹{aiz4ÓİGĞG4cNÓ¹»o·Ä]W¤8wÅßqğ‹İø6ô“àå£'ö›rsƒ6@Qf?÷¢Õ¤E0¹j’ó  şôê”£·¡¨Œ¤(
$s}âD×[§|—|÷fkø·ª6a·ª¶1‹ş,D‘ïû{„Ğ[‚G"½É¾ƒ66gıZ‘ç@NşÆã‘½àª¬'Çò¼e‹¯ĞPÚŠÿ¢[3Jû
%`Û T'EÄçj¾ãàS£ÁÒLbÙEBÖ ¼ ÿKs]Nw2Ê¢ZpˆşP=y>¨’‰ıŒœ_šİæmóŸŒül >Oò@]è ‰EºğU…K ¸ı	ó§0€ 6   ª±xÖ'DÏ$DtÍw ·nqë)wšƒ.ÄL°ñ(whÓŞ—QçñK¥æA
 9ïHõ(×Õ`tb‡Êşù¤:ë1µÂ.‘“;¹îÓæOb]ïX8±ƒG$€èrKÈNÀV÷Y‰yB\¹…ğ£`5£Âf(¹®>,ÎÄ:K–† 7ˆ +ù!šh¨)@ Â6»ìÎ2®çl™Í6åÆÅ“V×ŠHdÌƒClCµß‚È#&ˆÅ„€Nè U9ş€
ğ¦Å~v
® ¡0 Ë€   ¾·Xç:dWmÉ>Ù¶K¥C0~·×t°¢§ »Š;Ğà$–ÂÅ€&¸,ÖÛª ”%ô¾ÈV®¡¾À}òªyv1	je.å7©ï$‚„²Q?„YHà5JƒÉî`·ïÃb¡¦¤náõGÿJÃÅ,¾Ñ\²SœS"¾^û»¢#¨×JŠ\fB±&_zds?¿åa¦°“Åe¯É£Ñˆ#¡ü–ë]twèˆÅqÖ×‡ã«TC†nMĞº	2{[Iõóa–åÈS´¿£*z`lxàŞ¹
oÏ8II>§›X8š-Â%B¦Ğmòª`+zÁúXÌ`mÊE©j¢Øù[ZŒ¨*’â·)/Ó‚¦£­»iX¸÷x[<¯Ntq[«à%Óú° ­ÂÖ! ø¿¿¥Ê°åwx==­ğµ€ÛÔ/Àë Å¾#ª› v@–Å$Oº½¸ˆTûŒã7SÀ'äÏÉ|jt÷wB‰lÂ™¢x@-y%§vY†İs{¨zĞåÄ±±{&Ñ˜ıñ¨¬®8¿NsáÆYw?«¿Í,ÎVêãsöóUbGAtä“Gf:ArÒg›ÒMk^jf÷‚{ÁfÔğÀ9…›à57Kf¿Õ#!Ûë ~Áè"{¥&ÇzíwpÊhY¸Es÷!¬8úôí…. I°ßã‚L¶)JzW¥_aè
êT«ÊY"Rb÷ä:‰WÎ˜¡¢{YÄlÙµ¶²šP Ì ´À÷PĞ 2p•$ üŞÖmNÿ@/ õV	Ï9dË!µå4»øäõ¿–[Féê8ÜzÈ‚‘ÓOryäìûOôL/´Ì†Ê7¹K‘3Ò[“nÁôƒ%â³'Q.h˜"™Ä@³—X_Ğí;‘\·œ¼‚ä5&]×QMùçe¥‹Rê|½²Åên€F˜’+V\®MáÚ`zUØ­Ø¿s „hPÒ€0Ì1FF ê<c ‰xzaÕ+ˆP gÉˆpR¥ÀØ8" DÁQ€¾|Àë)_ZÕi'"¡Ú
q•CÚä¼-uİµ ®ÖcŸ‡?rñ@çíü‚Ånô‹<ÕßäèÓ=NloªÀ.öw.RM~üÇn2°«>2ó
8‰D¶1x¤Êº#ÉA+ÙMq“j%²2®­ğˆ8ÿ¬zlıc>*MUÆ–iÔû˜SĞêíÏÆ"èw"	ªdv…ñÀl·véêÃ<¤ÖÎÔ ­Y Kza•l"'÷qşÎnlÒ¼ºk
ìÛŒ\ŠÊ®–±¡O÷³&a”u:àeøÑ€q„AõKMâ¤Àìäğ0ù”úc¶î±×–ìâr8ºÿ;eú¶el¡ÔË—/w!¬ç³ø¥ÜY>YÜbåÈÈ:(aEª<¬l]MÇ•®ül
~äõ–‚Øq^óC/=C³éÃfZ©ÈÛ¼¯c,¼X­I½ÁáÂ09>†1Re÷å_€qiD®	>)µ(¹²oÅwœøÕJ¦{Q–I¬Ôñ§<=Ø£ş¤t¤bÜ7WâÆ‚Aê¾ó—ôXå|bp+ 4´$¦µ¿ãx!0n¸–Ñœ0¾NÓ|KÈT"Ü/H´ÆîóŸ ëB¯ˆ–?©'.NYCE ?9.iÇ@&@ÅHŞ5’¦ı0…–Ñ66ÚèRÄ¾Ö—\ÉZ²E±¤¨2EÎ«%Øg² fäuöÁKãêL¿•[CpŸU«f†­æ¤íØ+%ğo}Ø¬³‹!Ê<¹í²khÔÆ²‚=’•ãë3uˆ'?	ôÎƒHØú
¸“øq‰ä¨sÄôàå k÷ª,‡r#fa™‡¿è^Å%Uå†9´\Tİ³ÙâÅÂôI+±Å.ÀŠ°ŞÀgÚ  >A¥½@Âa®£T Aá6P—7\@¹!šºS>ló«2ë,>‡š/ï™eáõÅô_ÌV¦@ØDÔÚ›Ùû€«ùßUŒµm¾!z	¿knÎÕâª~o*Ğ´CEäx‚¶ÇâŞ…³»–:t%XfœÓš*ë%!È7xV‰„ ^Nˆ±$Çh^´©1
ä™«
±”  šåˆ‰Úd ³‚TÎ*Ï½`ÂÖ”à{æoÖ ¹]B×+miPzÀá›b€a6ø]˜—ğ¢6Ñg˜û?ríï\(ç*=ÉiïÃ®Ô¾±ˆ›'Ïo}>å•—Æx%ZáibàöÍn»¹Å°‰iØ‘ÎTdiÙãdc(çe=µ&äÂ‘ÂƒyÁ˜ú^ªAwĞkN¼OÇûDı[¬üº©.ŒÆ¤U©x¥fù¬é°G§?YCÊ£ø¹uª»<š—‘3İæyÜ©×ZÚX¾êÎ¬Ë–ºWQp:zWü^2C­¯ì.BS©/PdfıÂU[FoV½X÷4¢	Ü|µ×âU>nÕƒ‘p$Æ‚rÿé:î–Ãß{ŸÂÄœ>Ş$ÁÛpıcOöib(JÜ™ó:Ì¬š\¨¶ˆÜIÕ‡h/‹è¢i³·?Êˆ¡"ŞB·İxmB"¤dÙ=Cj¢îã)qˆİo…
qìpáMãš@ÒKsX7fë«ådŒ¨mªPh‹
^@‚ôòAÔ^ÒÒzæäı¿ˆí”#Àì‹ÜÀ®ˆÀÔ2c0h1‰U¥Ä4eã{¦İ(·LI‘îTÔ½Ô¸3•zämèî¹idìXY€-6Âeo¥0.çÜ´W6Hïo&á×%,j>óvÓº®óŒFU;ûOqI[tÃ q™àvF&ÀöËUZ•Íz;©ÙÉŞ•‚ç’í2UÖzª†NˆS5O8z;ÉwSRÄ•Â{‚[eÛê[ÃvÚ	v6@ÇüÅ}Ïc>u£È©›$HÇZ/j… ˆ<·,ç¬ÛVú¨kFt%–Ãcv}’ÅS»–‡Ìx'UŸeØ­	Î²#¤Å+0·€ ı È²³$€    D“¢Eå;ø±{ $ e},X™ÙÑ8˜!××¿v•¯[Ø²9'ŠE,½rŠh&/ÅÒZÈD=À m½¹^[€(2±üvM¦½–:0s¿ÈæÃsóæï !{uYüR
Ó
b Tj{E9ÀËÕüs  i¶Ò­lé`³³á [ DE÷X.¡¡ ^°Ü›ZšVµĞQ»R«Â*¤ t=âK|~Oœ–;ëÃ³‚@lØÁ^CIµJ«Ûòœfp1¥hIsË	õ²šÒ \„Ã^ÂRUÓŠîÃÁÔáğ%¸¡uÿw5&çÖVß‹ÛÚ‰Š¸¡`e”E)yë¸y¨æî#·rQTcÏ­¹ÙsÎÉÙÉDpZ¼ÿa¿q¢½’ØÿÚW^?{A6=§§êÉ0‚ÈXä£ôÅÜ$O_Úq@âA
P"ğhÔŸmLæ „)š]z›±j	ê•¨u~yVh˜N=à¡±úKä1–M
“àšşÿ°t„W£=.‡•óıb“R;ƒŒ|6 ïÙ&27Û¦šçöj„×Ag@DĞôfvë}5³ş]„Q€¦ö„glí°Ò,¿CŞØ{?½0‰¢ÀØ^¤GC	Ö/–Î'´Ò‹~Œ>ÜâğÊ2 ÎÎÕ9eƒ²;ià?ç®îû™÷ä°&À	ªÄÔQgæª÷£
M!©ª?†eAí^”x¦ÍRPŒs<FÂuõ@‡³²,ô0?s±êùôÙ¢Qç.>{õñ:7yìWD–¤Ñ^ <›‡¡ÿÄ©\el‘$ïz=)4£ğ@¶-âr+ÉãeÇáÎ°òÑ:A^¿K¸"é­Ê’š¬5ƒ>¿ŞÒò„‡:Û/Y‡uçb>ˆª)Ğ“•u±üØ#¦G	ã«q·oŠ
ïÊÑ¬õZ&äö¶t cD´JÑ`a©fØT×ùš¼¥SQÈø|²ä0¾ômüş¾‘Ÿ…ÖÕ¤ĞqDİÕü¹ıÉÜUIá.”yš&½Ç7À@„ÒŒõ—Ò£.;Êß3ÖP´…à`%ç1=C÷[t¨z4nÊçŒşÃV>ƒƒêˆêô¥o‹1ğ0˜ =©
9ní±A@ [àú¤İ¥dLxòAØl §òNs#ÆÃp‡•6&Ãé0µ7”¸‹Ó~ò¤¸¥^2³4†_¡Ò÷g¡€–O”h¥‹³N±€÷¬¦¨ì *wõ¸÷Ìty‘êË"¨wÙ˜
ÏƒĞ’M\3:HëHÒ¢gçÎ®–W~a“f„-t^Ç;Jo¿ Eqğ©q [¼³5Aí!ÿ¥°H1êçï"j%Úæ64=ËŸJ à8¬ğÎpıKËßL¼ÑÄÜ'6ú^„re•R„ØÖxµDyÏa÷IãÜ¡¯P§ñâZø_J‚i·j?`\ÿÖ3€    PŸpQ°kÏØÜb/¶O˜cÅ“Pá.4ú \ºã	´3ş~8(Û@_5ö³fºRm
¤Ñ—ë„_¥2„íUæM¦äØ¯c2vM¾O·ÄòÿÄz©æ¡Åã
B8É‰%J¢ ñpÂCÒÏt†iZò!¼Ë—á¡8äËCŒ¾jÕÿKˆd§Ãe‘Ï[†®ñm+ö›î€cHAÓy=‘“¾7.#¢FŠıM9f¡@ªÔC¹C¹‹q´=RåŠÑˆiÜ|;ä‘I·Æœ:’D…ğàcŞÍìëàA4`ğÓÌÀçŸ[}\ºÖ¬ôbgLÌDm£‘ÃøÉ§õÌª4'€™Ô¸†!sÅŸüŒu½ âU3°º"Á´fSúŞ7\C€#t‘1P.mTià ßƒe5ğ"ƒ8qZ­kM‘(oTğÁ…z+&aÃØ‚¥8U8¹Ö¡2îè8Áëße:³6İ‘!iAÎÁ¢a¢¦ÎíNş ©t†	g††"‰‹;%òódç:®=4–ê.¼fŒp†—§¬S„CÉ;Ês’CXá8”QÑïj·oí¹X%Ğòî#S¾˜t,ÎÿOÊe99†Ü§eGJ‘µ†°w*Ò_’í.•5IKÚÕœõş0!&Àn©ÜÂ–ÓúŒ’Iã&S i(f^Uòn‡Öª(££«åLN€‹.²"¼SO‘ã§Œñ}áË¬î&ÁÍ]C|ÌÆq…h'D@ÎPÌú¬hD[ŒNˆ>:…Ü50¯y»§D.ùôãG~pÈbç$Dæ5 ’BDêMú½	À5dİdÇTKÁ¨ƒÒ×÷·Ñ€[8š{úÚ*Ï~6«‡«P3åëÎ	¤k©à —V4òRï$ íT¨AòêzWÌwd^ÎîĞô·BØ±ÿåI$2'i`Ë(ü]Ø¾¨T|e21)·ŞÇ2``Ô¡·¨²­U}j2®µ¢Ğ71ÏŠ©Ag|'Ç\÷k¢Ïo&À# õ;Ê"tše…#| ü0Ù*2ò·ôÓLŒ´İ•Ò÷ú$£CŸ´‡#qËÀháŠR>Š÷fdÑ°ESø<ÁÕTÈÎÊ¿c m	Ÿ,IÎü¢pĞ¸³g<%éef1øñE"_ş§’¨%şŒbÔ• ›~,oòĞÂdÊäçµl Wí	Ğ£Bá¸‰˜ ÁnÉæóe°ÄÆ $4nuêåca·ıT‡7 YVSÜoº¡c´óáÛãÃxo|Så³$yq,KV»ô_I´Ñi˜(€@ÿÚ£èlŸhŞ$jOIşL×·!b«ùïiéğ?%è©Z»Í2o‹Ùó-´>¡‹åG+«*¾Â ¶ ÷¾Í(àÚëh¦Ä’¦ÜTh6#‘¯§`­B³LÓa´1lÁÁ…nÑE2&L gš8‚,„é·¼a,Çy£”÷
&áÑö4¡¿qËãÃmÙ­ÆJåOWşÍš)E[›ı'Œû’«;ËL~vÁó˜9§õ[.¾æy¹¦Er´ÏF„iõ¹'x3ÑØ‹×îO!0ºkM½RÍ*¨vß¼óêßªÀVé¾şi€zmmòåoSH¾ª³×èÊ?‹qf²›F'³:üÜûş¿aÖ”[H7® wë™*
ƒÍ=ßÍîe{Wœò	Š¢Ã”*pª:kgB‰Á\M’Fû‡«(Ou†R÷M’³Ìõ+ÚŒÃ¹K…Ô«/uj`GÍ(;mQ•xÜøYÀ=j4~†Ğü{JjRy© ámKñi<ô)ùKÇ™·õåN×Œ»Ã½Ø{7ˆÕ-–*ÙLd9è ÍÂyIƒåB+ß%Hè45Q~Íú+3·l¹º]HøÖ]ÙÏI¿(j¼†üqxÂ=İÁŸéáÖ²†õÔêP\D}Ùê©kkkòß§šªMÊÎ
øv^Ò3V=(€Š?J«]/ƒ?¨m»W‡}9, GiF™³
H[À 3 \’ØR9 ßkaÒ°T”KQÖ™¡UüF$FºB6·7qñ€‘í} ‡ˆya¥ÙÏöJ²û¥´cl£néâsÕö¡ja;\x®€o HüMsÌ¥Z§uró‹dïëØ4õ¥çşÓ\î>*'K§O™J XNÒ}ÈFhSÌìo>™lfÕäÅ8Ê;Å*[‰†l˜-ß² .v•ã§#ßÍî±YUæ½ğõì»éËÍ¡ Ñœ°Ø9o`úŸû¤:îidd\T‡Ó{§qîŒ¢ê–(x¸àw¸ûRò©BJúKö}ªO“¢íßâØ‡İg„yP%HZ~c`yvÅ{³¦>C	üm¢H»ıU´ö’Gb	ÔhÑúÖùaÃ¤bî@M53"{À÷ujÁq?»áQC©H€e;Ô´0êxeä6²xL¡;€ˆ˜ÏNV~Ş<ÿÏy|®‡hªa¿‘X\ğ:Ş]§¹ê4*gr‘¹
?ˆGşÚJÌ¼8kO­°ã°\Õ¸*sé/9gš¡¸şÃ»K¾¶‚`hInªöxØëq$˜¶¸¡­ıVÄøDK®}|
Sf-V(”Fá÷²c…zñ	Û˜*~Ïf•ú>ÚSã³Pá¥ª$Ï·C¸±Üc© Qj)2~3ña»vWL?ªe?kåû÷fAİœ3’<­>k¬9áM¥öR”v‹«¶“íù/¬wpáxh ömn›_7Ö.MêĞƒÅe7î/şï[	Æ‰V@ØĞ•úS°Öa¯óynú°ÕSüìŞ Íqq¿9ex ËXú~ŞNOgã@zé6ˆtG
ñ¥ŠNGŠ ¶
Ì· u¥$NBŸXı°Ş{(Ğ§¾C}æt´Aéad{EmÎ€R±÷òÙ{°[«„#€…S“kù(ıó'ÛS ¡Á.ıî0Uøj]Èá¤Ş\2,Û#‘pOu™Á³	ìf’„­˜J˜?^ŸP9ÉvÖ@ğbæšÙ¢ğ°*±ï/kö€^$÷—\‚Å™ŠH+cô	b=zªdÿ$T`UüÀH—Éw¯ö°;3`E†“‹í¨Vµl5–ß
ïIx¯%Ÿ±ÙR[†Õ‰é°SÅšT«'~Fé+ˆÔ5Ø²líDÄØ‡’Ä$ÒQ>jHú‹Ua9‡¸|T·èñóÎCsŒ…û¥m6.5~¯İ'+ìUˆ`LÜ>›İ19ãÕó¸ŸŞ½b(¦0•ûWH¦ÙLƒQ"|]©_§ïCbqÿ"&ä¢$7N3 GF©S37ë–^O¾ê^JÛb³*pµÁ‹í¸©HNñ‹wŒÖâß*1Ó‚tà-©]§>Pş*7Ü4ôŒ´”ãºAS²“Jë<]ûKQ–¹Ø¤ü™{ËRvºYäÕG	¦~UµŸÓâ.ù}½Ó–ã½Lîä ¬óĞ¤ùBªÒßXì?âÌÈàÁ®ÍQï¸6ÁŞ| ;±nÀ©"9Ñ,î²ƒl¹¯‹ÿyy:«ÏPgq2¡Á5˜`HºLR™ãÖŸ¿fjÒ~‘w°ß—«/×~oÀØ-^GJ0÷rFüÈ¿gfŞÊ#ªeäŸ¥üb*mUûQsàøüüzfK†™UzÀ>ú¦ mÿwkÙ&æeèÄ_P *Cû[a™=JâhT•F;Vg‘z’ù|[/ºÃéó¶=px3ì@Ig<fÕ3-]]²!…ÁÛé×ÚHVÊ@   !pEŞi‚UüÒf¿{e:'µ“¤,vÕ”
|±z†%X8‘Lï
øçññX­ÜQ¿PŞ~pÖQÃìowSw£ÇØ.ÚèÀo«Õ"#xj1Y¯5#”Äf™ƒŞ³íŞ\ƒªÉeh ƒ—®Cc¹…D¯[fåúq“`Bû¯ú6,G4½ úZ*†Yïb„8R¹
Âüx-WŞY@"+×ÕQ¸‰¤’*7V&–¯ó°`Îş§æÙƒ-!cq7Ék±Q(4Ò&p`ş$Íqf½ÆwÚÚ<O²ÙkÙKd¨ÔGÇ¸áõh#”½Ùpú7±2¨cìØ2må6K£á®ŠJ¾Ü\İÀÍäx>Ù¸º¬!°–tì"Oö%’‘åX§€†.Ä×­«š¥¢©g§Ï5(J›a…¶„^àl0T¶/Ø"gVË]uØbtaÎj'VIğ‚¤<T.¨5‘Õjäö²u5Fîb®Ltƒ0HgEà6 ¨ÊkõqvŠí¿‡2J‹&L—VÎ¢ğ	íQÅxÙæzåAp‡0Ó+Éû«ªÂQrjğ·9á)mÌPJÜúl±^ó¬şyïóWK?’lÖ30ôoB-Ü$`1ƒ½Ô)[ûı³€‚ô[-dÛl*«ÊM^ùAîlæÀƒ³–3¶Ä7şVñÁ‰İTN‹'°ïb®Ú'íxy¼;Çm>ˆMâÏrÖûînh6ó(hYàu‘É’:IÏ™Cè&ùÖ	´tjåİ"ĞË°ÈUn±nŞØZR7Æé~iFîW7Ú­öÚ°Æùå;An‹ß°0ê¯Ze±Ğ ¦:&ö#µêìÓjá†“¤Ûö‚%Ó  ‚Óå–Ò
‘”ŠØã³GãeçDYôVq˜ˆç
»š]0­^«˜êÊÁ :·¾Ìeuö›ğ  áõp2gk+ßÀCSıqÔ†¥Å»½'éº”šÔïäV!`¼åµp«ˆt{‡~O<úĞ@Ä¯0L(À=Î]º€y²:¼ƒé¼êEzÇ‘å>+VÔqHØ×àÙ(ŞQ‹‰â·ò©ŞD˜×o½|‹xy ä£E¿¯»Ü¶xçïXåoı!õIÄ½WÊ8ø€!1cÛDbõdÿĞ¨Íµr³²Ñà¾˜ÑÙqŸs£½ÚxèuT‹m!¡¤¿cò!¹¸cµ½ˆ REâ{9$¹{3iAÇW~xÉÕà1É-n¤h¦ ‰ïÎ?Ûòl· Êkœ—1€ªm~r>¶­û4´pôo±<Ê'Ï¿˜OãT@.Öj´Æd€¿­‘DÅˆ§iDDmKX‚ñF’“Œê·>òEm“qRÒ\”(ªÄOOˆdÔA¾~{>€DíÕáÔ•ô•ş#UĞØ¨£*sAJŒTí8£ŒF"màj@ª…´ù	Ø{ã¥UÒÌîJ‰CğIŠ¦FÈĞlàê™Í§Çâ›÷’¯“UÃ!«µğ—Ae1•Á—ÿ§ï‰3ÈyN`5Fº^ßu·Ï}a¶Ô ¦öÊ×Å.ËX„æÉp¯NÉ"ÚÌ½ÍeëG°Ì° l20
²eèõ+‘	ŸÈÜv…[5Nqm<Oò…öœ/·næ?¿‹äXÂÈ4>­üĞIÏNéb@ò=IC«‰
¹¾“Wù"–‘b¬,õò·ËFtä¤½‘R:Db[®dÌşu³¾P*Ú+…	ñiĞ}'½»»™.²	kc–P8‡…–ĞûYÇ
˜ÄçãÙ”è:ob¡½tÈµğt°>XX&“fC®­­ûß†í‚›.Â@_ËE¯$ygxÃY7¦°<Èô…qİ¯+.:Ë$nÿ©di´^Õ¢İÖ$¢x<?(@¤8R$-bYUÊvIŸÍ¯î@ÚÂ¿ïOµÒÜy/]Ô§<k^k$š­7YªÇÉf’ïËËúKKëÇF…¿ßê//¸e¦ßea½ğçWiæ&òùUZq2ØÍ¾¾;£ x~›8½<sÅØ©JÊó‘4)zõm§¡'BºRW"ÎˆŞƒ?ÈÂdîxÛ04èd#!èïİ¶'Ñ'ªD{z¢tx˜I¸róUrG)Â‚…-”Ş&‚<uz#çY­·á~8¢æ±<Sé<—Ò³p’=;Îo+ä;p²ÜÂñÓ“ŒİäÂ,CfX{’ 9”¬hBLÜ1LæÔnv?.L`è"'A†J!ó5‡ôöè}qé¸?ÓrÀÄ 0Lü¶ EæyÄ¿Î«=XHÖ8
à+¹àOqŸˆÅ
Lˆî”Ó›³Néh—ÆÉVbúEÕ‘3ì[ì_h‚‘]2Æü$dwâpZÄİb2 RĞ™‹c\^ct‹ó	Ÿ•ÔšC!¦ˆèC ë Ï©¨¼AŒc¸œü¨­¦²3ØŒ[ûvg8Ô„¼›¡
M³½a£èÿJ¢G†®.÷Åï6$%˜q?J¥Ùg÷ÛTIóPÖŸ·½•… Xá–İ k®Xõ½HEÁõßuBiè/€r¬TpêL« ƒÙP„Ÿ]êãÆØÚ%&DÑÖ ¸²ëàÖÇ)ù‰›Ø-ã-å·@sl1ğC\0-­Ä&:ïÇæ¶Ú±ü»-	`4‚ªbXFx‡@~xMÂ29ùÔœ¹î(öò
Š*-`[P8“ã5qTÌÉj³l“Ãœğo¿P8Y’ˆÒ¯ò"&Ö4ìèØ–RV_6ÍŞ6O$øÔšÖL
&Z…å½9z	Å¥%lV_ˆô|¡õìÃóµÑKbÀl,µ¯UÔ zrş¤•;o"²šÉKsO$òi~otùh9fû×o‚Ÿ+6ÒYÃZ»2­X-7§ª…*ÔÕà>MëQ¦D9•"A¸6n	™ïŸá8z:d1°Åèâö+Ñ+¥©4úú^)¿ÒbZÀ@Ån‰]5ÛF§@Ä"V_Æ\X˜,`†L' $4Ê/ ô_ùöç¸‚÷¬É€O±áµ¤d€åéùà+òó}»ÈïÏ¾Iæ	¬8 ÇxQDêèÍ NtCyÙµ‡’qĞÆ‚uõ¶ıSÏÄó•p`4¶“	-»Æãö§KğZoZ’]õùıÂ¢ÒgsZñAqP8X §yqo#¤ö:×¯UÁxâÏ)—5Trrğj¿QV}G0GŒ«n…vØ­@½Í®$ÈbI&6ÙMºf*i[‹"‰4móVä´‡W5Í^¶¥|aŸm¯v+øÖØB§cÔÈøK€Û±Œm4Wî*ÕÁd÷Ú-ë3½„ÊzËÖÉñ³ÒRò‹ıFZ‘ŞŸš0[ĞQ,a¥GßhEİtèé)4}ƒØÈJªNÆ‹84;rÖÊÔÔ(ò‘müõíC5|RÍ0$ QĞQ\ÎX•‹Zï†qöÆ4'ü…)„j.Q”3•œrlUó ü­Ó¯¹±¡;â[[AàÿĞB‹ùLÃÔKSeJEÔFäĞu.b¨äB…â…CnTˆúøÎÃd9ŠÜ›Ò	LöòÌgÃÀßã[HU¬ÿğsñ4q!ş (œ¶õaÏ(v±*ıw•br3©ëóÑ`›{%¸[Vqíù2m Å½ëÌîıÃ¾àuË1œ=±å­ëÈ»Ûœ25ôÜ¾å'ñêí*{Ú	ZßWÒ»åÃÇKB™“Tàqaëànî°¡²˜5Í†2b!{aø{²è
DÏ5x.`Éîş·¤ÄĞº¯¬±tƒptz—<]ˆšm>÷àhHDsÇ7‚®„(Nm‹ñeK™ì72ªÓ³f››Xh$hOïÏ& !U·
s¯-0Æ×öˆ:Co­gaÀ âc_8ü‹±ƒÂÕœ¸ jşÌâfvûõ|Á“BVµV2‹ğ-³²xÏçoi(8fRĞ	+"Ûi‰;m:¯ÌÇÄÎ3Hï‚°*í¦˜…íÍ€ÉPjÌÄ	ÌFŠêubY…t9“iá­Ï²Ü•R‰<`NúÙ\8c¨ ÂşÓÿM¤jŸş?¨³×
˜Ï1ËÅÍ8"Ç!)=€_øª¨àcËL­h$¥½Ù
ª‚´¯˜”Z`S»lë}ÏÍëÊ`êTB|‰ªwÎ™àÆt—Zÿ¹¥ä¦ ´··¯U,ÍéØàr?èKxíæ5ø…›ÉŸÒ÷B—¢“Áe?3°¾özjX˜Îş³yØ/í¶¬7¢K4´g+¬j´Ã4jĞˆšîğœºv4fÿ«×8{{o¡TÊ¿¨ÂİÃ5SpÇï}ƒïTÛí|©jİ¶V>£ÂlşíZá ŞiZ‹ „Ö®|¨¤É/Ğã×¨™‚`V¬î‡úG›Æ~l/ÀTÂ¸—¶ÜQ!‘°'ßÏÊ‚F)l{ş«ğdï[ğ/CGÉ¥_Y ˆHØ	Ê2c±àÑ©j_¸“ÈCâ#Ùñá*È&1ÓeD„OÇW^¾PØø*nÑ0/¢„BÃ·ÈK>êùTÜ?ŒÒ3Ñ%báşøªw’ç³?
`_²£ú’"ŠRlbv&Cxà3fÿx'ş¨xS§+ŒRü¼+q+şÓO.º(®pÛ1Õ©º(ö2KâÆa_|ÙßF¯.L[Lº4}^N P§.\ÂJQß5áÿ2T„äªMV†Í§¼ÛwnWã©ˆ¸?îÊ;nâÚuõZkõ$^½º$i‹—Ë8ÍÔs6*çŠáêsL³uıD`¹ÀeD¼¤ËË©…‘.ğ¨í¢v¨ßÒÿÚ¨¦™z¦€PÃ	C„]gcµY}¬µTõvB²ĞŠ)Ë»°ú”–öéC9p4mğµé.È®9ˆ Òøˆ'nnÄ5	,ËÊ‰Ptš` |z ²K'˜.–;÷·jİ¼òïV4Î1ê–rœRdØÖÿ¿µµÃÒ¹}˜¨¦ƒq¡¢Íj_3£N*¤Ànà»¸wØÕ ó7ä<|¼Ö;ÛÑbJ,;ğåÅ‘œ)wUæÅÿ ½³2MNÌv»ÊO“ YÉvÄÉÖ~çænWÄ/ÿM¹Ã}ŞÚÑ±N‚M=QÌ;=]Ã=Â#¢F{‘ïoYíj°Ş ×¿"1ÀÃÜbA{ñ]dLÑuÑâ+¨MU[Q\ÉnÖ¥ Îó"‰dM¶ÏÊjCË´Fiÿ¶Ğåğ9íV{¦˜_A¢Bwó¤¢RóßÌ 	QOZu ÏÃ¢.@U®xÀßg™$PV'DPg']Ô¹ı:,Ãj?%¦xÖó³(GU~õ¯ÿÅù)Í‹A6å‹ğ„k©”[ú§ÅsYâ_Ùî%¤r}‚5ª@34³ˆËJ‡ÈN°™æoõSßgâ¥¬‘nd‚Ã×8á|yæ„òvÊÜİJÏc¡™Ò	;:+ÍI¤=·ˆ±ßÑ£½‘o&¯v<Òv%WûÓãà¢4i<ö¶Ôô^ÏeD¾,¹œÉîY`Pªx×ôl¥øW³,`^Ù|Ì+>­Ï ÈÉx\á&0»BÉtÂÑ†%§£‚ÚújÉ2ªWˆ8¯Ü(Ø\³±IÓ×ø˜‹s/·Z?¢0ù¬ö²m ]Õò"q^İ+œR~ñÈHmö 2N#ë´ı˜è˜ƒ]§bŒìUñod¬3ƒy ‹3{%5… Øè)ëŒ©—õÂB^òÇlÆQ=nàKƒ*7ùm9`ãÑ¸¿ñÌRvd([ÚM÷È1¶GgÔÃúG¬|t‘± fì„¿…ÜØÕè±°àLp(<!ÈQ#'ëÈ 3NÎ¡*[ÆœîˆF¯êò/rl}>U“îü[¹¨1¿`~U>«æ UÊÄ~½BÕ¸<èNÃ‡<»4L+z¨:F‹ª	Nì‚ÚHhü”.< /¬	æĞc…¸îÏbÍ¤¥Õzsƒ­›aŸ¼ª0Hëfİ<Q¸å?-ş¯j=²c>Ôp7i¥<4"Ge(šuI}¢&Ôwİ–°ûŒ€°¥°/±ÏÎtÎ4Ê•D(f1ï'_…íÜ€A;”®î’¬qŠ«sòÏ$„­•œ%8VÊ×bMóºišNÕ'$e³PTEtâHôçÙK¨N=9·o¶¹¹Y\¡NÆâ±Wı­Êm)ea*{ š«µG–n–ŸAF²Ş“™Â_â2ˆî‹~˜ŞÕ—Jåƒ­Û[óø&“F­·’¸cœî'wN"6#wDk†J<ÙC—;NıÿcÆ¼…Hø*”dW¸Óš8OwIƒhÔ×¶’aâ°kJ«@¤m¤P%¦@màizóƒ¬n­*ˆ43~äyæ[äîÀè½¾›LÛ Wc Ó±ÙnXI`]ÌÖÓ+£Y«8^.ü…x! ƒAx„Vº++ĞY‰k± ¡<"iïĞü­¦6>"Qx Bi Ğğ÷Hbû€Éa Ş°İ³›XÆ®zÓ.gıEö£òG^xë°ûó—÷H "àô¾ÛHığ¸ ´#¾ÅË#çLª”ÄÍZÔlX„ÑÑËmK ®ÀgÉ<J×6Âeı£µû](Å ¹ìÉÔM¿QÁÆl ×Øméô]qûÑ’x9ş5x ‚.*’XKÛõ7òf6ŸGì2İÍşûMÔ&â–È¯rf´MÍH¸‚éî.Ùnøä ˆ÷rHâa]":]©Pûüiı}c	Š&ÖÏæì¬Á‰Pí9Laê±ìğNìF(QÙğÚâ+P\öh“ÿ„\™œÛ¡‹œWâDÓNôŠğĞ{½s°ò®Åsh½¾dk5& Ë"æ®+šOØ’Öµø>nx¿eÏ©H·Ì\"(âà†ç	(3Î¥Õ³]é)Iµ–c.¶¸ÌİÂvjâÀĞ-Í¬ä XÔàWõÇ>=vÿ÷,	c¨I•ê2à° GĞQ:\'¥¢;K,EHA¢è¨ÌQ3ØG½ş©m½Íëİ¦‚¼}T—»+£}e5bØG"&0Bã‘·õ_9Ëß¹ßbH‡­r±À]æ¬bÍÌ‹\¨ğûy—Ì%œOnn3†t£¾N,8"ôIWİ’Ôp’k±`]¹q½²9kH`ß8V­QøÛË7× ‰$ü"Ûtêr²­»KÂÿz
Ácü‡­¾­«ÛëŞXe4í¼±ªÜktêÁíÃœ×^.âpõÆİ®xÉ²GğDd–)Y±SIÚ:×JlS?¯ë|!,WNw½.’·L,·dÔ@AŠ4€AÜA‡-C>ÇÄ5ÔyBï4IiD-ÿ2úCĞŠCÔT±ÉÊ:?££b `Mª%)9[ı!„|.£ pa_?ì"åÂËYá|…ª\Dº¯Ë-7J96i©_+´ŞÊ³«mZmw@ñÊ"UP Òg$ŞÓn|Â@ÄD êZŠWÛÒ6~¦çaÀ}w©4	ivtc«“ ÌQ|FLÉW®H×bRbs¾”–˜Œ£Õ9XÇ¸ÑüÏT¹)ÙíÆxİdû'±ç‚¸ú6äî¨‰G«J±–’:,¦#Ö“øn½\gæ9¦^ñIçŒ_Ä¢^f.0#©Ú	 Atƒ65ú^zuo”w.fP„%3áâÄÌ¼ıªôŒMXÑ'Ğ¶#°áEWîŒ, Û'H<ˆ0¡àÕ|Æó ËqĞgfsœRïFö>)òÊdPõ÷CLq¿MÕ	~F²§[y&„•x£(ò´Ôè£g	¾ 1kìª _jBúNè[kö«Mæµºµ¬\™rå×gÆ ì•@ !Œ–ÈİEKA—¯ø¹ÜÚ¤yDÅT—èßµ,sàøbà°ïóz9:&'D‹vYÜ*hüB™Çã „Ô°@ÜoZ.ˆÜ¿³Â!êÒ9€	¡ÃJuÌSÿ~Í¤š{wìMÊ¼3!Œü Sæ"ãf‘-Ú÷òëÄ?PHß=ë"‘U}¬.¬S øPŸÑË`Ê–œ#ôÿ$c±à-Ş?º-€:¼ ±³¼‡³6
‰4% ól½Â`¾VÿI§÷Øä5ÎGT¦ÚhÊ¥ÛëQÑ¨æ}Ö‡v¸|˜¤3ğ±€0Î#yÅr$v„ëN©Î½¨Ò¡FóhAıà[#kk8£ş[â_Íh·äãŠWtßM<_ç¶“:Õ9íiùÀö˜_Ê¸0ŸG\–È¯mÊÑùŸx‹³i¤uËBx-êã{í
ü˜pÊj	çía¯ªSïS	FşmM÷»äpğe’9æØÈ9ûœª9–ıò®@Æ”˜½-÷ÄˆÌç¡]›y	ÓqSPW‰éY¢	d¨´>
dŸÙô}SD1íÙ<%q‚®—AøƒÏ‹ˆÆhkˆrFepY¿?@Å(-¿ö‘W9Ùu˜·ã“X/êŒr¶aFnp$àc ÑR&}ıx6_ˆ7š9G¾áZÛ³ü†6ÆŒzáµ£eôª&Ú=lÈû-¼@Óˆ‘„CÄvÎ—"—¶–¨?ò(¶|½ÒJÎÙÑÚ@ÿÌ¦ËµµQ©XøfÃO¦e%ÿwÕ.¶TÌp0¾,Èk*ãÒ•	¨ğÂÂ2Jİ7H<WF˜5 6péQéÉ"ÅuÃi¯ã€¡ÃJÓŠ©é½c€¼- Ë!åÚE/ğ2áÃ¤1äÈnJ,e«£Îk cÔ‚™˜»9¨\ö#«É½4@  &^¬ÍSÖWy6æ"°e4ƒTªe.ÙmY’ôáS›ÿçç˜nƒÀP4O €”dƒ,Ç¥y„C áö·@‹1ôàŸmHû·ùù]ÄpÇjLûÑg³ë€ŒˆJ%Udõv9ä·¾Ôúèvrœ]€`ğº[’óø;Ğyâ;`dPÆˆ¸¡‡6â6²@ö/|.;æ·W²¯chñhKv«{Æ#¹U:BSá‡ àKæ·Ôå.š‚åLïô¨ZĞ(Ñ¢‹½rTk?^›tt:>Z`ZêO ÍÓM´Ã‚ ir†c·,’İl ïQ|æì¶·­‹JÌ–Ã[ô°cD®WÀ¯f8ĞüÛî+`ZÛq´OßT]<‚"$MÈì3«#«+XÖ*Èõ/ÄüÔhrÓ¿VõZitkÃ"–±øÚêÃø&½á§¯– ÎÄ…N1í²/y©hD^U\fí™MæCØnÜ¸Ø{ºi«ô¦5N/<'™ë7Yêw©¾üšf6.znÛ"û´ı‹ò<dR¯¥oa¢$œ‡)á*lRÉ±6¨â>v4oÁY„$N]<=ø¯wóC,s÷[YSğ?]@ÖB‰qQ´ğAIqÎYec.y¢|ãE mšıAq‘†¡!'6ŞÁ¿QÂ»à'_—Í¬à¹óu©ƒãÑöÀ¼ˆ@h¬HŸõ‰gün1°ÿe [
v½	‡\@bÃ˜-ÍÇ}j;ïœ2pÜPÿZPQT¨ãå@h)¢5iYîuMK”ø˜"jÎ3£{b”X‰7tÉaĞs<X|éº}]ë4ñ£Âê<xGÕ’H¡ğ,L½Y¹P„Q'ÁU€íXÍÓ¸Rá.bà_—= Ûâ²Êˆ¤¼º‹Öô-‡vÛ,G^©!ÕÉ` U1v0TİêÄN*«›×ªõĞ–Ióíëñ=ññRSªû¹hÇ€VjØw6‹á(+i™¨±£)áÆt_1_<ŞO,xêÚ#ÙÔbÃË#ÂœC*áÀ¸è‰îqXXõ·|Wã¡Xß‹Õ•È+l(ÏOw|qÄ¦äT¡bqÊÆ¨¤¤©¹P‹k®Òf*²MİÕ—ÉÉ rV¯´“{QrH‡Ñ÷<µ5‚è³ÎíQã¨‘òw©¬ÀjöáÏO)A5@ÓÄ—àÙÂŒ<u¨—[p[²f˜®ÀïÏ”F.é‹7Bûÿ­Ü¨å"­åìø;ëb!ïÂ¶–É´À.WIÂïí&¹ê)œ ¬_9ÿü˜ÚHàO”ûa/ß½ŞÅ|,ÚzJ…áò‘%İ+ÖwèQï16ÏÏßÅ× ‚º3éÈóLé‰!DHãH:o¬ô¹®ÑK²|ùP…şóü¬Ói.q•Ln­x,›×1àÀ#ˆè€ÃŠŠ7¤¥ñ=¢”'ä°Wt¦‚SM«”qÕuR´l±rn…NóªÉ…†ª­ıŒµ€£oã."[9ëä{	T›âæÃ-x*iZü­“ìº\< Z\ËÖ«Ô†Qñ>¡Ğh©M*Ÿzbã(œ±3ğ¡òŠhk>‡<Ü†4[×Ø"_ÁFq´Êæ€öBn>ºª!SC}z‘(¾âS™Ë»!ÙÆh©Š{í¿«ÆL`bO£PqYóüü“Úè¨ô;ëG*vİ.Ô“ûq×–é8!ÌÆ÷‹W1Ci4½„*=&	%]÷6ÍÛ3Æ£;t{½S­GäkyRdJïBÓ­¨z@âÑ:Tè¡Åİù3Í»ÑDhŠ}‡ã„Ê!qŞ?	Ä,‘PâÅ¸ã”²6(Mİ£ËJŠ<<&t'P¶»ä½nÌ¤U]:EØ’Û©3¿†-÷oÔ50(£œ	E·6š`‡ÑöVğ.£L{Ğ›!¯İş*zntş
…o°LÂ©
†¶^û+$*°ãË²â±àƒßVxÊVÌó<ÌdW„'Ö ì˜İcíL±Ti³K³%ãã¼DË¥B¤jhÌğ+lõ}]IP™Î©éú!#MFølA·s¼È3%™XÒ¥[äÖïßGÃw­0ÏTÍúCªÓ'ÍÙ_O‘|pÂ‰GL3OàXFC=L‚èé¬ğoœÓ•šË€Ù¡?ßÔsêM“%ih=h3Şû÷åI!ËĞûâHœªUˆ“NfÖ|DÍ6+oÀ%°8Ç«% ÄÌXXÎœÆÏ3=»Ï*Íûnn ho:Ş™iôĞuGXdŸ(±÷„ñ'ëu9=¹¨Ç=¹µ·ï?4ZMkñ§ ºˆ‰Ä»>W4ŠÚ$"êiM°.Á9öòSò(G-–A”sN»g\3¹Ê_\As}¬¡æ
àqiWhÑ|ãŸ£(U¦…1İĞ¤ÔÌ ÎCŞ-e¥.§„høôç2«Z\¶í-Ş_Øc÷ş#q€‚±¸÷ş4!¯°’–ßòKQéàóÎ+æÅz>ş^‚IvsO5Ï.¡—"ŠpTv´.™PÄ5²Mj«ulØ„ÚÊµ	RMşù>FTÓ2IW3æPA÷tgg ä¨ˆ3Ê½
ÛTjaGÿàxÅ„É™Etíåí­»3ª
a% x2>·ÂL‘Áö¨úÇs`}Ón§6HÈ°JïğJ,×™]¿3—çnëİıa[ipkp¦N¹lşFÚ8wZp×¬!Ëq±³S‹ˆÑs÷&ÌWnÛpöEì„Cs²*NOeúÊ}ƒ&$%·0.Ë’úMtm˜‰j-—&Ûh2—Ê£‚5xFjaåke0ß8!
²=¶MÄ°É7×•#Ğy;?…4F°@à	ì€ÓĞKZvÂ£^Ò‚øıMPçbEjfÓõ±x­»·3<ÁcóSÜØ¸Ğ¼Ïñ\ei€4-,Wuíö÷ï¡Yÿ¹ÔKÏÈ*ä¬’Áß aü‹œ-ÁeTxÓˆn²“Yñ\$f™£‚%ÜAŞ&* {X¯Ø"DùCëû÷ï‘ÄÎ²Í@ïÉy ”XsŞ£«ãw‘è»Ã6ê:!Sí9`)Ğ§D¸ãsö×ƒJëÈbRÈ¾ÄıiÄÚÿdŠ1"üğä0Í|¤Ua´7,ÀMËX¯œ6«ÛÚ»;=¯ªeëÛç'p“	zˆ¤:ó[ok³iÕp‰tşúÁ–·~Ùò^é>!‚ÂÙŸÚ¬CsH4…çü¶•Ùù~¿kcÄæmäô˜·ílMUMŠ7©?&düÆrDû±àÜt¥279\}æ„º=ÜŠšFÏªY5şu[³ı´ì›I?s­Í¹›$GjØ+.ì83wM¬SŒºYÍö8ö±vñü=e`”(>:ŸÔºS€Ù¼fÌÏ;Ğc+o"#=(Å²¿|:Sé1=saSR6ÜÛV®:Èš ¤‹NcŞpw¥ºQ^¤Øj)¿uúÀB-‘ĞEâ@Oâa—­‡f|„õ»=y:o—sc`äÜÁÀo«F‡Ò…§‡à5–â?Ìë§Ìó˜®N{Š^éoMä2ò_]Âj0,!—´Ë÷eùğ"Z¥tÙ*‘‰Ùs%u¶ıÓNx·S—@Ët–V¼"á ‡”thõ“ıø>Å$íüùS©r‡('ŒÏ„í$_q¼Rmf>9È)Ú¨w9ß»#^ â÷fÙ2Åİib™áÇ¸@0e#ˆ‡¿$¬ìƒøØ‘`æÁ·Ÿ÷Îx†´é­³Ä’ÒÆ/æ#™F.Éi5IÂ?åÄ‡cSûÔÚŠŒŞ/[Å·l®ï$½ş†9ö—æqĞûíÑZ°üäçvë¶/íXÊGf½èr9&lKöÕ-#|l?’W6”…Pep\Eâˆ×Ÿæ¢†“ê} µ{¨=KÖáß3<Ü@l'IŠ]¿ÕH°O4dTÈ%‰½Yİ¤¹fe2[b*±˜œ@õ:Wl›O‘ ¢o^wŸ'oÊ¿Ï@õÆñH¬_®?íJ Å•Ìa5İÃhbÄ°¢Ëg<<²;mê†Eo÷À7Dl€l¦$ÑM2â/ÒŒ\ÿ¨`Ç‘HØ„Ú»ÿº)Û±`-1šÉ²|Çj´<³×Ëöı'î6UNEÿ¦+,a‘6ŸLrìq‚uáxÏàdMà²Šoìòªt7Œ2š#>õòd)Èó<¿´é¢=¹ƒİB]%•ªWİc!šlÇêŸ	FóbÍÊÕĞÈI'  ®H‰ùÓÄêi‹Àuås8åR³™<eYÂg
?,ºûC;ˆ€¬u§…HQ şÃâµê~Ú÷bÍ]…°ßM¢Ö¥]ÔğR¯fNÖê²±µØ2ÇÄ  òŸ!Õgaì@.—	ƒİ',“9’à‰ ëÿvúÂôûz`|&İÈQj¸Â½Éîl×LµbOCBêdı¾.+zòØ8 —‹F•ÈÄò‚Vçö ­¿Áé9Ã³ˆ"ÂHÑ×^TùÒüÀ7¡¹k_b!…j\Èõ¿€f_DèÍwÏ?Ê†Eä/ğ¬XV ÌÈ:0ÏïXÒ/ä˜D×1
y³«L¾˜æ,œGE¼×S÷»kÖ€rxQz¦Ş@2±zø!X®z63NL+¿×§èßl± ÿù£d_fÃ°»¦° @İ›šA+÷]Ôu[Ô%{ap|Åùl«–á"Öeã¦ãòQ±ã‘ÁÔ¡ƒ\›ˆB\®/Ó£HğDhîQä¯QÃË›£L€?>ñºÑÂøÄ‚ÿÕÇöüYû|¾	DMÚ´‚ É9Š¬×—Ğ¦3»|9C­.N‚ôÑß}øê®tLÏ‘îšNß•ĞëdkeVAÊÔVz»BNÑJœ´EÊ­Õ"7^$;‰J¾×AÆˆp¶æ•ëEÂºíø¤ Á¾Ô`ØXéÃa•št&åÕ¸€•?’~Rÿ¿ÎßÓ±ÌÀ›\õ°ÇuëÔ+şk¨­ÚËv³ç1LMy:¯Cô4kkâõÜsB;!Oµ+9€BuM&6¦>¥D	-kLÿÍåiVGËáÎ"Wõuˆşæg¦¿¶~Srää°MÌ
À‹ ×Ë>Öï¯Ô˜¹K±"6ÛÇÍ2#``^¹ÑLqî-ü~Ã°,,ÃãøÎpÖàé$Z%+ød•»·>¹Ì{ñZ·¶ª÷˜ ˜À6¡;ìÒšòP.¹96Ç½àÄ^£”íDƒ·-_¹EQ˜Ê«ÎDÂã¨÷¬ø±8j\©ÇÊõÆ®
½“kZÒ( ·ªÂy”díÓ*¹O!‹ÙÖRâòĞk2;jò½mà_Yò¥ïî§ˆ¹ço¾»½Ré-!‘FZõöÿaèPA¹æ;e©7w	^öÉX±¢”liç*cÁ3§)„ô¹€Ñ1ó _­"šTÌ9G_çHz»jÖ£©ä¼Å3©Ä>¦CK«n‹P]fy±§}ªPvx|ÂœÂ«‘Gº·ûÃ°2Òˆ¹O‹Ã¤/Éõ›¾§µÁì¬ÛlD9¦
9şšúæ¦(î6qû©*q)v+ÙpÒÓåôˆ“)Ï”.İ/ÍXauúJífl@×û-E‡Ú×wF{ÒœEèqh&‡m£L’Ã@jîÌ¿âÿÖTH'³§]a
¢nù”ÓV÷14÷`×ƒæÜ½µ§çãS¥¥µp°y|6·<nç+Û8œˆJ6€ákÚJâ.ënAY0ôı~aF¾_oëÒ0Ô<wÇRå0?õÊjğ'IÅ‘±>”í>Âjf`<^a5İÜò¾Ÿ±©AP-k%iĞğ¥<t_ürVÈ9ÄÓ/ -díº¾û‹í)’†JŒÒ^zm˜z„d€a’Ó‚â’›%%râCa.c#·3ñÏD]i¾~
9 M˜·5~ñzØÚÁB§¥†Y|Xg4ÊÃ8ÖŠ(¡Á¨–›.c<\®X¦Ö<¾ò1H§©œÓ_½j÷¡›<ƒLâ©È®0¤c<àt–º^Úò>@ÒŞ.`ZÈ7ÕStğZNa°á/ò¦—@a#5½Ï‹¿jJMº8†Ôqë
R6Z£tvÜ4hBp;V£Ã|.¾œ&ìË4b XÊ#cF£ÿr.{ä¾]<æÈ,clìÒ7İ†çÂ´Ôù;Õ>æÚûQs»?±n[%
ÓÉ?‰İÜ ¥2Üß"ÂXES–Ç¥@´sNœì‰â2×5…@ì_\Û!¶0×º°öı-¦µ©o(.:y™¾ê‡^[óİ\F!‚ÁÕÂà_ÖB¼áLàİmçË«ş¼bT)ÑLhTíÓiğ‚D~›åØòZ±ÂMÍúHŠÄìö†.·Ş1SçT¥ß¡S>€ù3ÒŠârrÎ£4áÃ"º¿àóE  æ…Şšåö7KôÎA…Î(w¤Y¹ré@…C‘çBôH>Ü¬;¤‚[“şï.óÊP,MšeÓo–&¥5ŠYm¢üUº29„ä<,>nı[cOøÇ¦ƒkëºw8„ôhë÷üYŞoîl+‚>9CÜËC<ÜÁëiÈ_ü·ªMxA‹\«êóœN²H´û-İOÉ;46"øq¢vŒhÄ g–`Ø¡µ÷ğ¢z@p#¤/„7*&™ÆX¥Ñfh¥^>;=àƒI>sÜˆî´üªp˜rãş3¢®ÚİÒıVÇœƒµ_Šf¦tae·,Ê™­@L(VŠ‚ŞIOX‘Bè$F`ó„ü‰Y“Efå0‘ú¶ª:i¾fnŠ ?ºï)ƒå`1‘Fš¼(
±;îİÜ\.dcF¹öi*f&S×ë9¸JŸP÷#v@ÂVù:sÛ§öA¿LÂî›ÙÃ’åºÌ'üë‚b´ÈBgHŞç/ÈíŸßšìÛVºàVÛ7µ¯qƒ¯9›FKñPJNÓ¸u¨l±O4õR!°™*-İşU5=«oêeeü Suš®~û¿ÿFIĞLhFy‹’ÒiûÆ…rq± wÙÙ°b<î›ÕÑ £¸ƒÎÁ*½5ãEÙòÙk0:i ³ÛE}¨ªsÛøùFöØ6¥.é	…²Ÿ­r—Ï2³aÂ´	ÖNøHLî.·ôvflä@L
À …B¸8	eÏ‡…sÁ<¯üšª·]Ú±‹D{ |¸ «9ù›øoš”J!”:÷l$·"–Ãt'6öFcæ½®1œ¬q,1Ñb%^zXß°%”§¯Ï&_,GÅ‡tcÒ|ªÌ:;’>p"ş¥,*Ãê•!†ĞhÊÈ
M?÷¼cTã¯cÛBªÛ q[ô\¥.óR¸Mh},YıÑÜ·…$º
¨µníc˜#ˆTChS7­PñæË: 0Y“’°M°P*œœtı:4C|!âÍâÆêY¡dê:±¤t2c`í7˜ÖñÒûHØâìØÕ8¶Ğgéb2bÀ&âCOõŸ·ÿ7‚‘¯`¤;Y]Oj›9*Ñ¼&œ‘/ï*l2²¾ÍÂBCBÓvßŸ²Ñol7qTÈ¢nöJ§Ô9ÔæµéO:-	#ÿÌ6WTaVSWùÖ?1eá[ß‹Ñ}^ÈqKy/)˜ğƒñÏTøcƒGŒê^¶‹<PçŞg±f¯Å˜š&´T¾#•Ü™åÔ½—½»[%ÇÈøs#W&ŒİÖ!×«€-Áğ¨”‚+!¸nY +tÒªÙ·yå±p× Mú%¼40 Â£®n ûÃr\ûø¾hõã‚ o	•BQ¨Ù: yÃ¯ì wä¿Ï^ëí©È9©BQ{MÈoa›ì±M}±âeiÀQïÀşY‚Á¬íïølõä™:O^{¸ OL+Ü¤ÿOç:Ïò 5 ©éE‡c¶:èVíKÄxhFßé›¼(MÎä$Î1ál‚cP*xtcŠºa
ìã é+¸Şä8V|w‹ôºU¨Šİùöd“ôŠM×`T	·¿-Iÿ¤s\	P_yó?‰™Ìã#ì‚õìæX*PéàšÄÀo—ïòk‹\¾Š:‚–ª¾Ã¼Ç5CªùÀ"[àSáßú?Úù¨SDT˜œä%m8 ûÜ¯ã4ÛPkM¯iÿ¡g¶ìk¼-ç>İ†‹äú_b@	Iú†½¢Zêx¦ğré3Ô~ï˜/5O=Mà5W2Õ5ızË®ŒêA!3ôMUG0ƒXï(€Ö©HÏÁ{„õ!,—{Ìho¼×B\HµÍš K*ÀÔy€ju0HÄIŠ¯°ëLƒûÌ¾d¡Šƒ»ÿ%’J3&© ñ+ûd+mRÒ!x<º‡~B½¼~¾Ägvşò<]"*È!µè\)û¸Ü‡ª< Î$,Uşszg‰ç–ã8/üßé–¹1?ßPòóB¨™&=oSHêúßõÂl§i¯wÇ%Ìúr¨Ò˜V‡Õ§Æ¸zÓIÉıãÁ“œ]<_v.e®ü(Ì»“&ìÃ{œnB¼«ÊGnñkºÁ§†D›pèû¥ n°Ìñ
0“x)Aú…}úy/­~=¤tû7<ó·ŒÚ£Øz¨C¦Tñ#[?P¼üÌ©BúòN^'LÀh¿1­¢"½î¦Fô§Û@„;Üù% (¶¤õ@6ïAw6…Íƒ$·,}Ûÿ‰Ms«ójGõşrûì'&ªW¤o|­oíU_0×¸=ÁEßúiË!«¹]Pzæ:&fa‡RÉØËüˆ§0ë-3WR–çŸÎÊ8Õšãî4blÿÉöåıcïû¦#Wó¤[	—d\`{Ü$¿"Â?‚‚Öˆ „ì<»&m‘|õ/¹À$€'ß/7V•àÊA7¤@ €	ŞıN%±‚‚âÒSŞD?-Ù²÷Ãb+â!ONîÀ(ûRörp±Öÿ3³ÂÄ9ş¬üŠY¢S‚?¬ºNÆ`Õ‰\F#•ô÷s…öEéûÜº—àc
*ÀÇF#’Çî¯+‹Ş{µø;–s[\ÔŠ†%ı2{9NÅé§¿t/ïL5¨³S4øÌ˜•Ø7Aï‚Öâå;s^İ²³ûª…¯pE¤n)rXm¡q·'k³¿j¸GéuOã	š”P<Ï¹âÿÇtEä‰í‚]dá4pMşĞd¯×¿¼‚ô°ÂâÁê1VÕúSÒGÅ&Mœöè£Ót¢`h¹ó´b(±ú|ƒ¢ĞŒ®«3JŞ2X4 dT«a^ÌNªdøÔ%r¹((_¹+ø™4J]–ñ[’B„¸ç9a›Ëßë(R<ÃfåÑ6ĞSøµí··=LŠ´{Ùt!avÚğw/Ë=µ¨ªÓO[ğÆ=BÂÙ30dT|›Ñj‰–³Kl+õ‘Ğ,©`¦¨êP\=–…¼‚ìşg²0Ï£Û9*>İ†nk7ËŒ?¥råó¤‘„”ÂZşzøwÖÒv¬ dÍ‹Ø‚¬ ŒÛ…DB¤x#5„¾ËNŠs€Ò)×º	jš+5‘<¸/û°TGA&mq¹˜DTCZôš_Ÿ' ÃÒ	Ôíë-h9 "µ&©zo²á6¯ïÖ/È—¨¥‘4Ëò¸8~Œõ+sÌÃİWQñBgYgr®Ş£È¶\—‘ó›ğ~òBÒ¬dL}õœ’ŠSIh²ñÍ"ÿHs$ Áß]Ü&£TOad8,$Q61¨áÍÛÙ·(§x×k]Ô~J·ùs'Æ^÷hıèK/}ùeŠ­Orx-Wf"á¯ÿ áC›L•õ‘Õ&ğ BóÜHs›çøóéæ¦«hÍeP³ú“·ùu3¸`›/Õ7Nè%pçb‚Í9"yŠÑ7Iı^é
—Èvu| 9o§J™íÃ{î€‚ŞêÕÌ«a9<Ÿt:Õ`æ“Í®]—ÁKó30QZÊX'CÄ‰ ’P†Œ¯ÆùE@‡nü‡›(\`eÜ¾¹BâğÜ¾ÖX##âİdlÕ‹£Ì›ÁWüHŠpY8t%±ëYÊ(p€ó¼Q,<` º§A‡s˜Œ<eÆxïn:Ì5-±–jĞ ²$g´°Ÿü·>ú7prê.µÕQœS
Ş¦ğ°ÄÉÎ¤òšx‰n…8=ÓYş¾Ñ‘ÀÛuıãëË´“Jém*?Uì¢ÚÔ’'¿$»†Ñà|÷JÑ+D¯b	¹µ°ÙeK#SyY®Q£^+•£…ä|è: ÖJ,}ò';4;= ·šàx§ø$BHª3°è„MÁ­á“WUPñTĞûÇ„‰{9Iï!ì„Vu;N¬M^3ˆß¿Æ W)N^Ì4vÔÚy-õ)H‘0Ü.ØÃŸ Ö;<õóÖp\*4[ÙhİÊ8¡¯–J†(†¥œ=Áj#J‚Á™4ÃıNò1%»[yÈÖºRôÌ…‚%¡áôÌ„ÇD'è«Ş!˜!úø?é…Î;›Ë}€H?É¡Ã-ùš	!
)"Ò€F`—q+vbTxï€‚¸M‘7-Lclò„;…e!°OOÏİÿEœióÉÊÆÂ:Ì‘¤zï püì:¾­£æØœÍı«mS‹ã±b èƒ-Á.!âÍ û¨¨bU‰v£Ê 2“QŞ*G–C·%dƒN 
wÖ|s÷jŸ¸æ—'6uçãùü…¤ºiùĞ úÉ/ÍX7•ª"ƒşµ7üdëyï,M
m~%2ÎÅ°Cñ"Çó	j>âÏ$İˆ­VùO‘{}m˜æ1¿\ÅÎö%‰Iª9e IŒ`œÑl¿ª†•gFs0füoğ À ›ôyƒˆ¼¯/Î”;ª¦ËXê®Ub	'5‡úåáóöRãk0[_T°„…²aa.ù£4Z T]Î+üÿgù1wAxÿo3~ÒIødÁîĞÁ¡¸g#Û¸ˆw“²>ÚÃÿ—
¬d'©‡ñfüAäˆê<ê|]¡ã+ò½<­­ÿ¿ñ!ò°„nX•lŸ‰Â‡ÒšÂANÃÓv	ı4h…#\0+Ñ‰î'`i°ï»>ÈYx7º*~S‹ªŒ}Ó,Ÿ5ùŠó”ÃLFÇ{Ü¦&5¦ı.OÚ_] B?8j±áÔÔÉ³)ÎäMÍ¥OsŸ4Okr!¼ÍÁ]±2¼úanÊ…ü[Ãå½^É×q°+µÔŞ.83Øy¨*;ö–ğ² ¶·Ô
»9r›qg©àş(	Q­Gİ|$øß5®Fäu¬,“£Ò ]Tl¸k™z³TLi2QLİ/–çs-7 sYû»55¬Wá9dŒ·¸H KÔèãŸ$X¦BFå2P$Cşíjß?¶•ş®š)¶wK|÷8ëÄmWˆQ´?–ií-Åä–ÖñW0BüZ|­›P@¦¯mƒä­¤áîn)H·õüÊh»¸ŒSô[dlg¯¬ô^œÂ~áµŞÓ™øÏ¿FºyNô¸¤…ôQFmgÀÃh, °eâáåa’9¯´·|£Š_åK^eşáËŸsûDç·ßÚ¸ì0ûûÚªgÆEC&ŸX4ğæ
»ÕW¥íäX!_’£€¸ ßÓàh¦^A±Ë—^±…3W·ìôq©rµÑ»·',AWª¸Vf€Vv{h2:`*“³‰r+¶íå™PËÎèíO?©ş,ïg4#úõâ®ş–ÏØÃÀøhìüÙ(>¢’.]ìıÜ04]¾çş,eêePŠØoa‘X2µQÿ-_œĞ,Ï”®á–h—RÁğµõë4*£TîÙ¯ÏßºşO‘29°úÂõòDh®ãMÖ
	ãY	í}9æIÊ®ô“
™¿F3¼8J1*ë¸ß|gõ$öwa×¢Êp¢wxÓá ÷Úåï´÷›OïÜwì–½<c¼&Èß6ŠëÏafkß÷%YbxôLë.ëLÃ ¥2fG ©äFMOáAì©e¢dŞĞ—,U2ÛâçÔ	Ó¤»fH
ÏûHø€ úigë0”ò‚LƒÈ?ÁFlfæ€{°ÂmoY"&¸‘ë³¬Y„†lÆc«§İÏééëo¾œéohL™Ş°ğBa"	o½®àíWEñàÛî7ñrÆ é¯D
8•(34B­AÎš[øäØıõú°ÎP."GoJ(–ÙBÒµÛ%êE“üºK3P¦œÆQƒh¾šƒZcÓQ¿}Òs³H­i•‚’¶?ÚiË·”ƒtÒY¡
89ÂÖ Ûj„ïvò:¯ø!…åñUS¶Û¢byCQ @kÑÚI‚¦†´ˆÂ÷Í„N>„RüÍ¶^ó«id˜a÷}ÃædœAÚÑ`àÁ[Ô[Vo!÷(ƒÚÜ¯@í@I-4¦
Væş‹ÂÊâÛ’|,ÇdCA×s¡›nQ³½t<&Ü7¯M—W·‘œ Î’Ãle
:bÔ!»m~ÿ>rÁY6ZÑÃÈ¾†²¢¡ÅJ3gñ-Ú=Fõù*˜K]ÕÑ*‡UL›ì^±z¬,6O’
›æK½¡Çb0O;Ÿ#¨©§Å¨Ÿuì£#!6m,ôÒáÒ|`!r“çOPfMp=Á€D"ğÎùÔbË)Ó)ìw*FUêä}»5»Qğq ãHô!İObàRœÈjÜo?ºñ™¡G‘ÃãLÄá/ó ƒÀ¡.u ÖußWV‘AÙÈøt^¢]ÕÜu~¹M1K?ãÄ¼zÜùÀ—şûà­câ ìrøâØş1eAT&	dÉËóVğ|’¶½é†òå_|lâ^[	LnÜıyI(ö³0#®s>W¾ÃÊ®ÙøªU-Au­ÃéWH.Ë`pÃØŠm TªÏ‹jÂÁ—*ğ­×‘X.N  ŞcÕ`Çøˆš´áÄíÜ '6bÀîèlpn_TÎÍ¨jêƒß+[»íX÷ğ›ú Öƒ-ôIG›¢nb!?(ãÂê¹Lõ%ôŠêm$Zzr¬£«fÒáËŞI@•ˆaÖs”Xö(ãï1W¨Àw3Ú•ÓHÎ_;$¥2VHÍß¬¹&·¢¨ (!VI¹ê<œTî2ÆQ¢ä(Œ~2ÛPx—û¨@Embö¤~ƒsx‡ÖÁ"‰¡û4p];S Á*	Kh£i¯Şü_ô•`ähF]¿v…cÒ1!+ª¨}oqßR§®¡R²Äğ–@Ğ¾t=ßë§{Dkãî8&Ó¹›O_oX4jIã|³İnŒ _£uL“µs?c¥Á¾‹F(õºFêË—ÔZ™bğñ ‚Z~ÍY_%C_”›šµ%°@ª\xgi§Ë|â¥Cƒu ³9»„¾=‘"¥è†ûú®ÊâÏÒ”‡)C=ÆPe+çû^5"ÊÍ‹KÃV ÊW2X@
‘r?½bv:Æâ¢zùÌ²nÂ<cÒ;t-HOÑÕàF±ÓœÓy-½¶À¶}Õğôu(Ğñ,Ñybı/ôÅ>Oª@R3ê±NÄ/ífA\·GIGN‘â›"ÖaÅ?KöúÊ¹˜4Öy^[î¨ıƒ¥Ô7¤ˆñRH&~uÖg£rhÛè©ÖhÕ‡f-BĞ‰èæ òÂ‚[àÎÎnöNN64¸â_‹õ7Ö&¼(BKÆI5{WÊËÈ|ú¢Z4ëMËê;u`Ê[ÜZÇn¹/G§WyÄwÇŞLİIdÈ|$«eîÊßOéÌ¿[äeÔ
^æï£|ßY0‰¦èmlØˆ”â·Wş?+Êf{ú˜@ÂTôx½‹¯]"3>'Xí9ío+9r«ß•Õç°–#ûÑ°ÑîÅM¹:Sß²dŠğz¥(së€a7ÌW£`%yôœÒIE0ç{¶n]eiIí?³^DÅLffX´®@cR™'2zéÑ»=0Üğÿäã3Æ&O¨İÒ}Y¯õ¿
vÖZê¤zÍÇ˜)T ùZBG˜¹Ö‘ì¤v”ùäC"ÜğïœÜæØõT¯Ğ ÛÉm<¬~@€9ôÕãd®Ÿ»
Şv¾rØ{ôÿ	Ú“íïõ@¨ÖPÃ•àYF‹stšúa=k!3s¨®^‚]ü¹K¿êÔp L~ÿ)ªYŒS]«–Cy›ÿØ¤ô4m™l¨Kæ/ºì—¦2ÚÔ‡*BfJôÈ,+­ªiCˆF$8Ë%e]~6HiÇ?Œè`8Ş"ê†.c¤íÛı½æ½âsl¤œlDMaır<'„_@u6hş.ÇR¶s²PØâªµ~N{VI’ fˆx^Luu ÁÒYaÏï6@+ùŸ°oš=ûü*;p^¸X>Vøb¯O|âfù…/ƒM²kdà5©gàSàmÒ2ogİ­´³ï¯°j±Ö¯&P´pX£qØ«¶WiS€ ĞGy“ğj» àHfLÿPò}ä.(+ê°75›¤ J.uù8kÒğ }÷—Ö*+sÜé›la]•Vm2Ò`2Åîièà­å\nN<@ö>&S÷ÿÁÖßBËˆTp¢ıÆk¯ÊPŒqÏvÅW4 Atfláİ×¤JÈß 0­¡¾Åñ
U¼_p·ß9 _óÈÛ[”àZ¢Œ8'ÂÁ|HIÎ Úäšv™†W%u´Ó:Lêz'À:ÃÇ]ÚeÕ*È3ËåB)7§¼ğ»ƒr>ÏL6ólÓä½¯œS;‡UÌ?’¾}ì-~¹IZÊ}º uòT ¹G	A¾ö
Cœ+·¸ĞÊ¿óõúÃ=Ej“€!W¡.¦6J•:Õ2¸ˆ'Û2³kÂ`ƒâd´ØoOázÔŒS‹‚ÿ‡€guÙ‹îÿ`GıîÊ´x[(îÂ|8ÚD™µÍ¥²µ§}•ù£üú‡šÌ› æKNÌ¡2.æË™P…t4Ù^¶ÈÇ”Pq‘îŞ’ ¤5MŒ“Ñ`¯ù/náE@Jµ»ìŸ›é“z4Üf^Ş|¥_Ñ¸Œ:¹¿²@Œ'û:®ÿa\nú%©ŸKçlÍó¨áş;@˜WÕH`•L—WîªœºÄÔ”ç¯h£3¯8wR;}îS›ßoìğölE5y?JÄßç×[ì”Ík«åØgiã6Ö¾sé.	´òŠ¹’7‚³§Ü—ÒQÃ ”èPGJÀxw­Åê`vSOÑÛ6©¯V6d˜÷Ü§®Ä8\tõÌÌ¹N®¿(DRÃäDš7Ñÿ–¢Ö(…+ı	sâÆÿÀæá­ŞËú!ÅêQH®ŠâË:=®ãÖÏñ=)ñà9æ¨æÜõ—JCÜMì!Dãè_Uğ–Ø¸×òI‘øºµ£uÕc¿ñmşîvû„8^±3ûSA›ÇÑ¸ÕqwwÑÙ÷~æî½yÌË·áì¬lƒÿPú¿:òŞ™º¬e©sC¿®Ç{œşÆWîutG(`EñOåå'^·ÂíŠœ¦ù|”EÃ„;ö›aB	¹!è³ë¹®Sï¨çB^D—öxº”ÛQ5Ç}„°/« I¼ >`KÑÊñÕÔ	¡ İ!ñ0Ôãœ2—9=Û
í	¢®EØõ/½k—&>œ&-D­³4#YH{ÃÓt5Öş“(âô2%¥Ô>v£%©^vÒö0èñ€ò¦=‰F'AÉİúèk t_¼¿©¦–:\™tz~ÛùºsÖDJÄ)ö:»¢j9”#Ê¡~ı€Ş:£¼Gh¾§ÎrÏtê¼Ât^î+¡ãj(NWK§ÄGPÆz”Ê?:/d]î-ç£á¥Ô)àPrj©lRm~4@3dHƒsÁ
Ôjwn9¹<µ	FŠPª…”éHg}’•Š~	®C¬xäÔ‰½àr¸1–Õ• P­Kª±Y½ki–ô?´ë	TÈaéùÊ=ºEq¶2Äf'â™ÊŸdn
é`_Lã-d-(³uÒT]Ëyß°Æø$J×j3:UªwÎWjĞ:¦EQàVy¯ÿ¸7Ù9p­
ß5Éa‹Öò`: Ó€´Wù1€åç;Ê8fnÅ™(À)ñ âª¶_oŸ;QO%¤~|Jy¤RÏœ¼ÃĞÿÖTR§]ª—?
9•3*8Tº¿.Md§¡Nø<ì#d¾S©5ĞÆAÑsJÀØ¡#¿®´"7¦´HMè®UI0«®m)DÊkÕÒŠ‚üÙq64¹i1ÑgÆÚŒB÷BŠ,¾>){ağ€ò´Tr¸ºes„óÂZGëJr·ºÉ=ìœÑÇvDi‘#dFÕtïm×0&\W\ Œ(Å.çFb-$qIƒÌ5ZA”Œ~%Û=â$û&ÇÉ\
à‘
 &µ^k.è:_Ú±ù´^yYt(BÓ!
ÏÕ<òû—æ¾m¸~È'z2™ƒ0¿>	U%]Åz½P¿8ÓcéûXx[Ïææ‰m 737Œ·Å¼Æªë+ù6iVàÖ«[…ë›¬OÔz(ç¼Ï‰™§Q4dãboî$¦5îº‘ä©Íû\ošlÓ×äÛ¬Œ3‚js7S<Å‰ä—7/>(=$ğù›âT…>Kd-lL
“®î)ø’üí¤8÷í‡@ÇÛ¥Ì_5ìò÷ÜÜñZõ1ºÀ÷Î±Zh¼Ø0şXç|üë€ı¬üWWF>Ñ.uÒ³BØ‚zËeAŠ<—ÇìC©goom]¹¬B¯gûE˜;¾À‹€•¯yf”;Ğt¿ïá¼a»øÙ'‹–¿[<Ú:3öeíıUÛb`¯„1s„fœ«Î¥¾ï>Ä`1¬²Ì¦ò”ßÖíÌÓ
]'U=Š¬;_²‚pT<©w¼4TñÄïÎ5q,B ìülœ»’Y.nÇ|1—à"XÜû¸£îjº¯2¬|Å$û9AEÏiµ	Ì1ğk¨N§£ÍAîÙÿ–‘)#yœó‰GtL§DÈmmêıñËk°Y#3–a#kÏ{ó©ÊŸ‹Ûõ´q¤Ñ:}òK€ãâ:È”gpø¿¼êöfn(¯©L`UT£RÄı£L<gˆ/ôôC°rÁtN–ã³Œƒ’E^Á+²‚.™ÅÎÿW°ã¿ùv•¥eeb…Á’-°¼mV
·([Gğ¶Ï'S½sÛÏĞšäz+TËE“çDc'!+ “,{Şº¥7¦–%Kİz³ò™Zª{Ê¯,©&Éû|<)e—ÙúÊH\¶èy(®UNT•4ÍùYÄÑZ†Í´W”#úè‰Œ]¬×/Z™Ó×\ù°T·õš½Ò/B„_»8R‘¼Z"j¹úğ,!:‡f#Wò\pÛ1¡h#0×j:.^fÈšÍÎJTÈZYI¾ŞÑr`±„¥ú¤z5' Û]3k¶RlA(H“ÓKğQŸÉ¢YtÆåØ3‘+É<S£’êËÌØO£D\ï1§§27å2huzaCo&ù°şns‰z`õwà¤8”°ÙÂ^-wò¦	ÉhhFËˆ™dÓE„+èxÀ|¯8ÏúPEØ4©\Á_“&‘Œ3…pºãI.àÖÒ3/ó« Œ„ú]H5Ësé0¤
hÃÄ®ó~ÏÒ‚Ñin>³ªµdâW2éµşK€­Ùq{xz<Uu»ô"'bc"<–Õ9æ<§º%ñÕ4/Rd™³…Ê˜¯5ï×öÒy]8gy œãÕ:S%ÎHr·Šç"+µÂ¾†‰bñWœ$p'ì–ˆúí¨°¸1¬À­(V|6˜ÆÍ²6p@âIî¼ñ”¬S‹›Š]Û54û•Æ9°£=‡rã1y'ßŞSÜW–Óğu•]TÑ©eóûk|‹G%œ|WWoòÌƒ<6`ä$P|‡õ0­áÂyM*M¯J9Cú7Ç_#ioÁ©Ïl:3ÇÜ Yk*LÔÔıı¶g<Ë<à‘Àˆ¼ĞİÕî-‘²)œ#Ëçôş»^O0àH‹EÍ/¡ñé.õÜ&X³¹¥h.@eıõCÉŞb¹–¹Ò0…ßmè‘M`íºîA¤íG]êÆú7ºÛ7ı›ÅLœİA«~”0Û'Õm.G|Ÿ­é00 V•¡2+ÅÔ`hf[.nJbE$©=,öOfê/«é>6­ÃHV¡J3Û–+-ËıÃ±ø×±èÄ5úŸÙóàŞÍö`ÛDò™YÛM)y,!™œ÷¸»KÓÏm½ÊåÚÁ¶˜»+ÆlşRpèTñ·à(ÂGM-ê&Ğ(:$¾ôã¯@>ƒ¢y‰Ó¢RÍ‰$ÁĞ£Z2aî’×‰âÂb@9‹™/f	á^ûY n[¾«8v–"(¨à{E»üTy¼,Q¨$á³ôh¼Qx˜ş·A!
u½Eêïëgr¸½Êy~vdä!j^Tµ×:ı€ÔJEÙƒ]ÜLg•gŒBçVF'§ÕmQyœYÑÄ·¾Í\iŸ4/÷¨¯¼*¹.h(-mÇÁºš=Ù^êË¾q¢1=×ì9gäô»Ğ;ˆXQ±oH5ã„8l4®fU&7¨KöF<:p:r:Õ:*¤ø%½¡4'Oúİ‰·±h;ŠA\¸Duß¸¿aZ„Á–M6Ç¶ìr yCVZœÜ>¨äÙ-²~\¾aIÏÑd ªF¹Ì
u<²Š¤$†*2rièõ×APâ;¡€*3¾îB6ãåÒé0=LZj§ˆwñ…aÅ*œ˜€ªŸEsK³{'UŠ÷Ì‘ÎÅL¼”©tWq®Õt¢ğÓt­êZDfıÍ¶ßìè{‘Lõd~4môMÅÍó|İÍ¥
j-­üÀ/’Q÷ù¾®sEã•4áF1ö¾7r’»­Êx_Ìóôà31®NVÇæÒ)İıW·y¡€§u¨XitçŠÉ·ÖI¤ÈAğ²WÊİ«|iôÂ-ç¹ıËOõÉÔoşÃ0\”¶û¤{Â,¨KÓUüÖ€~$Ou8¿”à7\•nÂÎ€ªÉ³ÕfªÄä¹…ƒ&#3!üz4İM):ƒñÌ¸2¶^îlÑUÓˆ|c©X/í.kY î‰‚ãå5˜ÈûL’pÎqÄØP4}ğcÀm€¾Á%z}/~ƒÒ‘RZ¬Â„¾Ó™¯sña@ø¸#Ù“eR¿c†,<¹êÉˆ3HõcCPY«}z“,®ó ş³•_n”©Š×öİ÷p¸U¬™ôI›Òe"€êwÌÆfÛÔ? ‘ètm™Šu‹ówšöauO5:İËNõRáit…”ÔÓÆ:£¿Èj%ÂiúæñƒèÈ/Ä‚ÃˆøÜ¿ÿö¸É‘\Û—ºÈ{›r“ê	îÄ “c‘ 4iĞMvÏ¡KÿÍ6²ÆôğZ	¶),)Ôœ›­¦O3£>±Ò ³Ç7Ò³Á¹(]‹˜p!}ppœ ÅªéÃ'Q&DbA§óğ„Ëç·«ìgqJÒ>JdÚšJ€ìéèc˜	C‡ŸødoùL…À}>8ÁÎîNÇ.JÌ!jõĞpŒ§»êjYÅø˜m2ññ´08Lãa¬ÈmG´hãwöÏg9]¬{CsO©v¼8ÉWábue»ÍİW7D¶UÚ6O„] `'—†[VóôX¹Õ»€éâ¢³Ê5ŠNÀşKKş··hŠİ¼ÓÌÜönbT?¦fHÏ=}ıawñu¯8A¨‘iEóÖÉ^a½º´Š-¹¬AIè	úÓªÕøğÜ»]@a×çL"{m 	ŸÕí—Qú‚Ë¬4åTuXáSŠÔ-°6¢h¸İ	Üñç4ªôš±ûÖQ“±¢¸ã7ô¼…ÿ»ï5¯o¿5œ¥Æ6×ĞÇÚ3d¿¼]9ˆP~;_«¹¡É.
Í=5"÷<íNnĞ]
ı¯K9È«UŸ¦ÏY[¢7K¨Œ¾“CÖ/{S_&Yd¹xŠœü™8Ø ¯{:!ë3†	(«+-×ëYlgZºØ¢¯§D—xV1ártøs•ÍÌ6v¿ÃjÃşª=%ílæ5ŒSÌ5±:êU Á[Mâ¸Œ˜ëcq•Úñ÷²ö9%~e¨xªOŒÉ§í“"k>ÄìLƒñÁÀı“ü¥åÎ{Iªşšš’^(¿{ìLp) “l1kI¾²’êRàÒ¦Çr´—ş°¤™Ì`L™sL¯ÏaH¥™‚w¶2ê–¯çŒxç˜Ôoâ7„€Îs÷C“zÍƒ ^8ö™P4|„‚íÔ0?ø?'//d6¹›:ù³ğKËŸ¾	iÔ#ÒkyĞif¿9"UPá¬GÌ‘í­x°Ì>¨Óxeò”8ÎM-*,Ú­&¦-|'åŸ7HmË–È.NØŞOÁS? /¾aGƒ".1°0“ôrCÒ ÑŞA˜0CAT0)Œ@t_FDTw)_íª…A‰‘ˆı·ÜºŒ¾ù_…ŠJ2Û«ÁvÖ²ßœ	A&‡wM^×—\VĞÕ¨ƒÑH¢è2‚†¸R“‡Ç †[İÌñz³Z>œ·»!X|³s	†üÖ{eån >'•Ğ6ÀË@‡ŠmÖ½¦×õ@`<W÷‡@%eâßyØa–*=*w–$~•µ:_ÿÇt®Û9Î>±Çÿß ×íïjËÑˆMH†K?à»ä«kˆ¶İiaxÎÈ«9»“Ì-†–)¨Ô¾ëdÊı‰ÈheÎ»rœô©DÜ€ÛTÎ('9‹É‹øŒÕ3ô<©ÃÎÇÅ*¸wòvø…8ïƒ‹‘7×Ú¼à~?Ú‰ïR0|…Z˜£úøÏXÍ“nÕñÇ9-N{?<‘H¾[i†‰ùëİ8as,ı²úvOÀ²Ö2½‹WP+£ÂĞ8úG@gV¬FÉ=¼í'3vƒôj[úÎ]ôdaİğ”bòÂ—y`?:ñ3^Vz(4êÁ–ø¨;M„;Ü€$ÕD9G¢´ÕR&>dòÅËóÑC^R·:Ó³jS¾–YâN#‚…¨nQnI¹ ğ¤ª©ñˆİ@ÓP¯à)ÆÎšÃ~úÎN^Ğ‚õi0Ú-Àâ¸wÉ,5ßÿõ?¿P—O‚aÒÏ1”İ¦¢;ä±[¥PÜ’´r÷ÉTGIæNl…%”ˆ –¸plã"PRÄšp×½a¨’şü®V!àÇ««(I+'×fW‡$›^Å,¡½¶±¿Şu….2ÑRZ¶~èE(éH•Y‚‹±§ÜwrÓ²ÉŒR‹yË’¶±ŒâØ¾T¿j×ÓÙš•ÁxÜ/eœ½Ô]Áé×FbDSÍ‘5«Hšvñk®œ\EÀí’Œy‚BÉß°üÏôœNµœ¯¾Ø9ç*}¬:Ä]ïê÷?RF=ÍyÛiî¨ƒgÿ¯g&/í%¿[çpÙœÙæzŒr±ß–òƒÓÊâ4&z†ò¡0‹Øÿèk‘, yV³ì{’•bÍâPª1ïNºû_©Ş‡ú¸?§…-¶*qDÎ7UûàdÛÇê¨½´y}>£ğW°0^Fä 5¾ ˆ$G¶õWâ7]G{zpJ]xËÊ¬ÎY*yó›Xï…	t¯şö†œ8KªÉÂ”“9®işÕTiCÅr™Àäd Ü.’#ôå½Ÿ!(†ÒŒµÿ™£AóÚ­~´…í±F"~ëµ7Îî-ªjˆ™q¡ŒµjuŒ¸v¯ÌqöÊ"
›«Sõ¤\qvŒÅİ´‘ûÓ—äÁ`ÊxYëÁ¸e}¹hğú?(åDFƒ"c«ˆ.²ùŠq¤½ºÜî¨'}ş	VËûGÃ‡ÏgQ×~iğc£˜®jZïÀ‹ì78K^äŒón¿’˜‘‡Ü%|\ge+GTèáPİ}DêaS‰ Ì©ßõêÀäÀ8âmh8¤f¿IX½öøá¬èyÆÊtt)Ş=máIûô–*èO¥{ölKGµa7V_?RYW±j|{‹BŒš¬9¢Íf@o¬äå€ôÛ¶ï)?„F{ÉÜ‡Hp{Ü¥è\¡èF;Rø¹Æ}:b­üá½”!‚›6…rĞû'S…‡z¹–~>N²b\B—WüIı6;7KçÛÌÏbÆ¶£¨ëõ§SJŒãÏö#×Ç+Œ˜ a8Fê;òO3\‚ùÀc×¥ºÅ’“`rè¼Ùg„ôö­é`ãĞê|„?ı–®O´;UX5+Ù6tÃrY©§Ë Ü`Ï¬óxü_4†uøŞ‚R¦fó¿h<”>y—x•t{ô”†Z5Ûá|^n+ï¥íß,˜hÃfÑBòs½ƒåóè}èóIÜë3Õk@ëbÍ—mÉúd‰|Ô™ä35—7l’Ô&°·éÁPË}’Ì&«Á¾­{(ø¦£Æ|r/½Ró’tùË¬x­ìÁˆs
vçÔãÚƒŞeõu+&K4ƒpMòã¢
¼&Vsğ‘âµ³øB¦YƒJ†>¿Õæ*Síƒ¨>‡>[ÓI9£÷Zlı‚“ ¥K8BÇF
¯’Êô~ÄlBƒîX°zpê.\øØ”\İ_¢°û ğSN×OÔŸ‰÷xÌ«è<~Å_hì”ğòr‚åÕ5ÔXihX]4ºõÁîDú/«^—ŸSÁSOÎ}û®ÓEïXŒçı{‹Ù#\T
^aüÆpÎ9ÕòÂö»`cBj­èÓÙ’kKÌšqæ¼¾~´æ,ğ”înô]=„¯ƒÂl|NÅØmñ™Õ~SSÃ6-+$¥	•­XM­ˆ0ùğ¡z}–Ûn|¥YÉu¸¯f€nÀúmN/ò²İ‚–›Lö-qv,[yÕ÷koG§Ã@Ô­—^¥ Š3Gfeï‚CsQ™ûLp`T `y8QğQêjÄªà;œ»BQ-`mh•dî%(ƒ÷í­^¤Ÿ«}08‚N¼o\µ9[Ó'§w]c–‡òó‹ZüÃ´+ØÍäP–ıPÖ³Ìür„Ã©Fç§ø7Q‹Æîç ÃO‘I„4=A3lßnúr@3“SÅxôŒÁö÷ 0æğ ßç¸¡·N¶ßÁd~–:µç_ÒºèH‘ßHÎfÑÉGÖQ\%´éU
êE¨ë¿Y5X%†QºìÜÆSì`É‰Ö;òä"D@S€«ä/Up‰ÃH×'Ço#¢û<…É&ü;œ#îip•Pï|ô4'ö¯¥~ôIÉ™·¢îı£ùª°Fq+'$ÜiBÜäÌ·«k4Ôª) Ş1‘ıØy2_0P‚i÷Y8÷ç´-Aƒ,"À$ª¢æ*U•ØfÓÏñ9ï‰™¸DG">‡õ¢üD##2lñ˜¹v¹Oˆ5F(‚x
\T.Ãk_cH¼WNbo*ÂX,\B6QÕ7\OI3ÎRşœ„ù´ZŒ"Å1úó'ŒR£%¼¤Rü­I™o8Z¬Å^éâÇ¦»d//yğ.ï‡Ây`ª9ê>A)Ì}E1XUúƒd Ççeî?:~ziÂ#ı¶Ùc	'…cÔS¿f»9~m¼û…’,06ŒGş<WR£ˆ9*Àğ’tjrËè‡êM«:na`µE†Hæ¨äDú^a-Õg 0hÓÛV1CK¯Ë`=7Œ6@xæ´zõzÅìêÃdc"õc]h4‘2«e5¦øÖÿ\åÃ,+Éßöÿ-5³H"˜ë«–RU±*xÎ;h¦HPBs&'®Áî‹' M]ó·3zğ;--R¹'¸±6NÁñ³¹°4óçQ<¿†%Ç0×‚‹X‚Ê‚á7¹´0e”Œş+öÚâ!`0%Ê›zÌW’y¦ñ•‘ùô4)OĞÙ&T¤„ùGx(~@˜ÃßŒÉµk.&ÉIœªTV“Ú-¤Æ×¥û1éZÁŸ…tÂˆù£ÛÜ×¤O4UıçNØÍF‚fšóLÿ5tËç©Ê½Á|Åãµ	åØ+m'äq4CÕñdÊ÷ñ™ZØ“!Ÿ£.Õ€M†ªr¶Ìe‰1Šµ¤İİ3}¨ÙêRÏòÜ^õ™Z:›YgórA4§o7<ü¼úŞò÷o;0xnÒ‡üw´»
4ìÂ‘õ2Øñdù4§4*HÅÙÕu$à¼GÔñ;¨;¸>È9Õ<J±NicÔëqg…$\nîÀ5k×f1†]˜ã³€C¨/ŸP­ìER¡İñE}L›5Š»Òjı2ÃİI«ÍŒWFÉ$VäÕçİ­™MD­«Æk\æ‚<­U¢àÍàXó¹¤û3ºÖ;'Ì/×´Ü#Wh)ğ€—‡Y4V•s½fºôlâ~²‘W„ ¿Ñ&µf~yKıo\Ÿ.u‹²¢E'qòƒk4¿3NÕv«XŞ-ÒŠL.Œ¤fï¨ñ/uúQœ—ƒ°Xt8^ª|Òj©8Y^Û¾°=™}ÉËL1¥~ºug<1*VóğFiˆ{şQª(Øïç_9Š¤|kAIió!¦“^cq.Y'boÌ¿…Obÿ»[™÷`˜á”¹kô¼—³Ÿ£QW·8»r„| ÏYÄe‘CÓ"ğ„W›ó~»I¥&Á q”dTpf:çr]#åQ3ı½Ñ2€KÍAV'G¿†pÛ#e\âë£‚„#›kÔ5Y;.ìÅ*ä9EcÈàp¨'É¶ETpY Ê¹ĞYÕö
×]à‰TÉö4bS‹ˆØtLøW@Fí7á‰‡sCnVÕ·^•Yã®ÓÉKJ=®ÇV${,Ï¥G9şÌA“şƒïßı_—éX!Øæ·}©Bã9´äwEùï«SÆı›«ûÅ…]Äs×ò8h6±ìÕV†W¾•şş9óoXjÄöƒF·õ’·ì&áôp,*˜2©èE6N2ˆñs+¹Ö½#Átnì¶²aÆ¿ThX’Ó‘çê¡báŸSÁX1€Xg9Ÿ™RÛ#ÓAk¯IŞ(S G{ü½á¼zZ¼4ºk¿Ä¤-SñÈErÑç_×í¸ä?&p"IEfT¶Dn±®{tdÑëùO½¨E`¾Q6Ø<„–/*”ÇÛ•“Éú¸·mCqô‚¡7mÿowªİ}nyŒ_OöœşğP_¸Ô°ë Ìh@´Æa±Ú‚bØ;ÀàQ‹Ğ¥Åïk´8¥#½{`R(jgRŸÕf#=kg!œ*“·à,ëcTqçf`íHİvp†0¦Ğö:ÈŒ9û&¦÷kjK¯Ø„¥±v|û`,‘Ğ4í¡İ¼)ô¬ÀüùÑ[i#Sµ¹İsËS-âÜçî8ºÓpÛ;Oßw/óş^¹Ğ%DÇ/~ËçrV“i¸b‚ïœ¨Ï
(ŸJĞF¥bÖ4¿¾ÿ…‰Då@6ÿ‹lù`•ÅUkõÀÿ‘Š ¤Ï_ÄõrµùÎÎ'Ü* âšÙc¥KRJ{—÷@ıû“†ÒÍõîÿƒ/†Fk\N™^ümm¸\‘.çLLV¦ô½Ãq"ÉïìFóbü£óó@õ{¥6†‚w¥Œ‹ÑNºQh“­«ÅŸ;ÆÆ !‹©™K@Ù=t§CóÄîec7 ¤RÀÒ£TI}²‡—¯a”L	œĞÛ‘ÎúĞqşÓ›îğ¾R/é|‚ÇÕx˜@–"Ş§¤Yİæ.‰IC"ÉUJçıph\SŸ:¶	Ä<’ºLş„w;T8…;—ÒôùøÉ±o²Ì–AÅ,İàw¡™mß;ÈSÃî‡øQØ)ösüŒ1£n#
|§A†=÷¥æWİæKëÿ²¡û©´°¬*é}B× 4ÖÆ$LiŞrƒÄ6‘ÆuD¹Ï®u8\¸‚÷öÔaJ–ä^0à>¾"5¹à_› “Ù .¨ÍM 5 İ¾ªì`›ë|_´ñTT×"XZ÷4]=¹Q ~*×UK2Cßşıø”Î1`ãgsç¦Oë§Q¨?0e—XuÀùOWaãW±BíhJÄ¶Hÿ™XM†OáÊ ñW¤LÃLpì™ujÑ ¹<Çì.ò²*¶ ·mBƒ	Ù'öW¾¡GGûĞ5¿ƒ$¹. a»Ëjí+$çWMS<7î'ÎJíe_N^Y ÁÓ ûÎ„Ã¼‚^j`~²w#ìP]^_Ìs¿ã·´Ø.ÆÃ÷ÖZ+şm”İ"“d‹‚‡§pò?·‘Ïa¬-µğñV¶ªEûSÆòñSıñÏK°ßã3ƒ-!{h(sëÌ]ù°†¬^â8At@·yÛÍôÖ ‘B9Ô÷8âŒjErífX:Ã‰Gˆ0Á_?óq¸šI'ÀÊZ7Èc¶;³MIšÖ<,…S{ò›¢Š=Â]¦;»£´ªØcYŒèî9 ÁÆŠíŒ˜û‹âeÆÙ*ĞáYä=£:•eÃŒM|Ü3^æı½ÔÍ–(üÚ4à‹0€{õG0Ê5hpÆ#Îê!(ím1{ñ0]Õ/»"VµÕŒ[w¥L­şk)®gwB7o@±>â4dÖU#`OÛ/{Ff2}A‘
ÓÊ3º
å;@03†ªÃSiÚ¸!neDÚË‹tDm¾ P[^DÚÁn“MO¥xaï-6LàG(Ó²ôÖ VlÖ~Ñğ…“2-Ò1Q—œ‹œÍBšNX‡.îÄî‹YØ%¨ap#>R ¥¬©ŒnZ?\U˜²fP22¦‚o‰Í>Å®¡âĞvóÍeÄ("ÑûvâÁí^A'ËÖèx«Ux¾˜¡·á@!×a*gOQrÜL[¢¼êÄóñ3¶	ªİSP	ÉA³wd(ê4<°Rzowª lª{Ø~ûô” p;f(SÛ½øÍ,¶B¢‡Í†Ü(¥q€tEhçrnÛ‚|[è|V¼CvN¯–İèIA¬Ç÷Z+ó†Æ*¤)Èœ½ÈŠùv,6øfŞ2êîé²Z²‚@ÕEŞ¤“âåNÎeR¬[ÿ¢„'!ç]ÁCKBğ«-—‡êÌs…ã‘÷ÓûHlà$‡¡Äç‚Îw…±çê@l¨Q#ºåâÓwE“„=Hë{Ö)ü¬üÛ4Ş Ö†Û”ÈìÆvCéS®Ş°K‹7¥
l2PBù

d>¶AVIfz-¢v‹¨ÒÈ¹ó F¶)ùyFfY™÷…¦‡¾rfà;“åÜ¤Òx.ıqpBÇ2÷&¡•ÉU…†5Ò„Ï
ã#ÏÉÜÀ¼ÓÙ]mCÜæöÑ28»VÄ4ë	Ôš‡Zwß¡«‰ÈÏÛš&M4Ì‚‰Ë¦ì”±ô¦øübKßfˆ®áîúÃªxóŠG‘†2ÌÒjÍ}”›KY˜•,©#rS€Yp×c·Oí’á(™f•Ëş5ŞĞËn&y~Nˆjİ—óº*Ëç±”CVDÆ†mÔ½)Qú¸ ;ßmÒ)³×L 3ÎTB+‚kq¨REsxP|é¼}\¤Ü+&	İ*|ß¤¿ÈJyCX oµè^€zÃòSÙ‰7¨yàèv¤\ )*ßç|YG)/sñÃ à`)wá:‰ØÂpƒ0PrßóR¤h¸Ê©Ö]× ­Ï*#Ã¿X‚ş,	%àdV+²@«í\’(Oƒßùi §¤]ÎçCg6òdR?4üÀaLK™µ¸L!áÒ2ÀÆ5™åÎşs°ÄTë}hKşq°ˆ ÓZäºaÒ¬)Æñ¸Ëf
]'v
¹sÛYÄ—†¤ñi2¬v­5÷et×2ú§„>óìU7®æ1ÏwÚÓáÎ·Q'Ok±tóPµãy²å¬ÚX÷¦MÈqAú“’—½şyOp«›Uw —@bªqI'ã¹ü²L(yWg«[9âàb~$`üj),¡’¼]>‹Şò°ùÎ?Ö®‡´ü0³šYØùpÀ€[ë ŞwdCSc9 ¡o‡‚ÒŞ;­JÍáÄ'à•ôâœ>Áî^¡Ì—_3Ígˆ·s@•Ê¤2Àì)ñöuÅåîR\'a¨oXDYR{fnÅ¸Ï2,4ÌÉ¾hô|ó`r©bÁ¥©Fê;j;(©V5!QjŒqÔFŞaDäá/—¡efoòpZœòF^&KòPLŸ¡b*Œ;E$ÖÄ€“•qÔ&³ŠÙ3Wq¾ìØ´&‹HÖhÔ~Ù~Õú- ÛÆ(£éZO}´$¡èP3ÍAÑ|f£w	º°°và®¿-*›dÚG%Ó³úw©óâ Ibêú{’î\íºb õöW-Ü»lÆ^$Û/}»·ícÏhï4V¬Q.ÑaÈ(.iI}QŒ¢Iş¢H Ê¸6ÏğÕ]ˆˆ˜!{ª)mış85ı·s2xÜû0·au‡~¾\#KòcK´İ“*T¬Â±(jd7•XáßØ'ÅÛ#.gEÁ]PPlüœË%€w“Ü¨Ë KOVÈE‰bãş“ºwÒÛôÊ¨Y„‡ÎY®“vÖürÉ ïGñâAÑ6P(’~Ú0÷ÿ€ÇdO·{Mjo"Š	nÙ	aËò#­ƒS55ÊñlaŞ=à")¹Á{Ø6&1…SrT#]œ>Ğó%Œ¸;®ÛÛ&m0SÅ¹şD¼+[ÅF9É	ÔşB	…)Vq`+i:%²oÅ¦õ !ÉÊ'×“”ÖHkÉÑïÕ ğÈ²›ÚŸäq
¬`àğS ô/î¬.±†JWZâË…Â¬ 9j˜¨úÁãmeò”õş Ät:íâ”!‡k½¦¾Ëqº`æÚ"fS‹BZÿt=øï;îQ…ê‡q9W|Qnó ×y[Nö+÷‡‰©Äú©0× d¸Ì2p7YJÙ›L4Fİ˜Ù-—\÷‘¼‚:z–¯×­£0Ì…ö>Êÿˆ=CúÏn£õçÙ‘ÉÊH…+¾õîˆ½+É±L5F‰¨onğüaƒ¥öS±hy/¦Ç<p·¼@ÇG5³@¯d½–Q6á©®âÓ¤ÜÌ¹†ù¥sÀç3G§éÇÀ›ÿJèõ9»6Óö!½)8æÇ«Æmìªõæœ*lª4&.x¶ß‘KÉ¨úTfÂûğ—ØåÂS#¼4)ÄùÊcLíG¹ Û|Wƒ›}Mº¿7~*×Qåeò©ÄË]–mà
†ñıÓA?³Â­/óódÛé‡¿fn’r|#óIŠ}µu‡æ»õo˜b“šâ’HSEÂÛCM+´ÜŞÂ;)éáé·ùú®•¾×øhÅådOÕ ° «˜Cûo¾ŠéBCÔÄLtµ‘ÈJ[äÅSJG™)0bnıîˆnb¯WK÷oÒ	m©¸…Hx%òXÏ ­¢1>­yÓİí±ƒµŠÍSh•âş©â1â5µî<ˆÌáÌ„MÈ?`kÃØX|‚Ò6Å¸¾eŒFÀËP3°
\ßÙy£v.HBšï1eáä2s@[è-Hù3_ËáÊWó 8$¢	àµ"±Uµü²oê`#
´Ëş!Ç1çÖGÿ	¥" 6ñĞ9ØEˆŸ‰•vp…•G†a`¦¹Bã}Ò-X±=
¼·ç¢8T§>—Òè¼ÊûSåÜw¶›$È½#Ëd_äî  >!—ÙMÉv•Ğ §Ó,\e|µL¸q
¢Œ2^nu«GW¥€ËoºóÖA8(i	ş‰Ê~^Ä¬|­GŸól^m-(Dq'îR%xAmPæ.#g¸N2«ÚhÏ(Ñ&ÃØ=xi–ş =ƒH`¾9‹ªÙ¦¥íùŠ‚xõPÔ-»fÈa³Nrùûé}›œ®ˆÍt3¤å:¨…ØÛÓÅ‚R0ı‹9Ğ˜Ns6SP6'ûÂW‰LH‹<`šmÁ’.77¶è
+±ÕÙS°Òù˜$>,W–ŸÛ±+8=¡\Û^H‘L};x¯FÏ# DƒÜÃi•@ıPq‘w(m¡F´2NMÇœÜœN-­Ö¥XÑ3%ımÑˆ³ß˜>5C~q5aë©·²pèï=ñºÿãï º à,’}f©Níy¨O¦ˆ©ø(-ÉXú#şÎ"ì-Û¡ZL9Rµ$w¬Ó<ŠDê¼ší[¡Hç_“¯3ó|n1R‡nÜ]’VÅè7o”b2 Ü¢ÃÎ¨Ú†K ¥võ|E«µ„±Ò}á3À§Q¸b­¶íØ££›l×(ìbŸ6plêQÆ8ğÄÊ—RWöIOÒç`8€p7Ä¯¨¾]§‘
sàÕÓ;ÿpÙ%bV %ÏR’e3¢T¯ƒŒOÆÑ>Š§Ü.JmU@ÓUû¼zÈWûV7Ä. 53C]y¶Œ0íõ«eòúœ°ïä¢XØ@ÍEºÒª°p¨ëjÙİ°r\©Ú7%ı5 8•çß ß¶e¡"Å-X{¼!"Ô,Ù8òÔôÅVYä+.ë³êäpÓÿ‰ssû¤i³·H·»ÁH¶ĞÓBÙ¡_”æ<Jñ&e5·&EØÜ'F^1—2#Ñ¾{;ÿ`‰Ş¾IMm-¾ÌNMÛÇèÄs%]â]6/n²´ô­(®jßO˜GZ;©' -ü§ÚHÈPõP®"Îë€:æûœMó`•oM¤5İZ,R{[vƒ£‰dğäËêü*qåâ4×¨¦;ÙAAªæ«×Q`|·4/b¸z¯ À<â­ÇÓ*—ÁÇÅ–ÂmóóÔ¥ßÿÙò¤ıt¿"¨æ:¸Œ¬¼ª1˜|Ó.ö¢M†^ÎİP¸4çŠ,6kş YS¥PZÂçvG­‡ØX>¦©§áû'ÖŒO–úš±˜K‡çá1c9Êçş‰vá½«Å†,e½€Aé‰YãÌ‚| P B†1ûn÷^úÏ•T—¯f 2åàB·•ä½áğ‡È)6:ÅfşÓ
¯÷YrŠ%apÚNdÈV"0é<®²¼~ï%¼M	ÿ‘³ñå'£–Ñ’Ëg&	z™~ù\ÓÌ¹)’ıxH>|…›`¨É‚Nÿ„»¯WøŠôôaƒVukŸ4İ Éyè‡ówàJŞ%ÉÊ,¯“0[M9-ayËŞ(?¡Ÿ:ó–Ó$C ‹T8=ƒ!5Ò1·Ë<nñƒ¥~–ƒˆù+L¯í%¦wÒEãDƒbDóAÖ¡e&=]²-‹fQpıî'3Ê]¥½»I¯ ı,,¥)õdÃ´"VoÖˆ•À‹T±µ0ÇÁSx@§kµ®h$›àDé¹uÆÂkoàûQö÷d¡KC'tŒX´
×…DíA1jú`èÎ6O{R¦ïeRàÉ]üÓy·Ÿ7ià Ìò™ÂÖj¢{>6sõ7…«}¢1½Ñê€ˆ_Åœ	¥)Ï1©®e	7°ö8¤Èr¤+MşÕó=áı$lç§'¼À®jäÃgu:LX™û¥lQMÿ<gÍå/êS/V$ºmJYÌuêX»TU<KŞC¶?pÂğœm Y¼ÓÇ2ŒµWX„p¼|ºŒ¹®là ”cë‘‰íLâğƒT*À
ONZäê|IŸ5€èÛ{—¥™æ!BNæÀ¾ã¦ŠÉk¢8d^ŠâæQóXùçg¡š ü–Şj]uës¿z‚ó+ª›U¢ŒL1¼Áe?^ÎEsz°FËvÃÙyoæx
wë,“»µ;¿X£²[`£>>ÇàØTfw#,PujOº,& G(É¸ïÒJà?¸l9&†›/@Û,Jéá(ª?Ï©´¯ï¬Ìü{åh­å¦ÅD”Ú¹{åØÜı5Ôm}¢‡©JnmÚ©•©SÌxòûvv ĞVÜí§Ò
V%aÃ+®ëA¢ÖhTeŒkmœ€Šf!”Ùz×X×ûßĞß¶Æú-õ«#q$ìc®tƒ6”ô9De	ç4e e–¨Ù¨ƒH6'h¤¸Û§‘‰(“‹ÆX4ƒóKË\Ä-á•”×\D[ëN?H~yN×ùg ´”ê´dG‰À#€hæCÿõCÚ•O
ës×ézƒd$İñ*¤ë´EÕ-¹MK¯0z&ç‹œUr_vºóÆ\ïÖKß">ìµ}x	\cK\I"Ãh¬M‘ãEÎQÈÅ-âÇüÄ7qXÚQ®Ö0®×ô[dÛM\ô¢2oíx†-šÓF“APÚá¤Çd†s*-Dldçó3†•ÈM+s¤‚®“ßø¾˜PSĞfÔÖ©ô®’Ymr7Ş‡•œU0­áÀÉÈÉØ0zÛKTWk6umPMDin
›Ü
WµS°%ÿ2¿§¢‚Ñ€®S7^UO‡¦•5ôüè"jm9iØˆéF,2eİÕè‘¤Izu¸ëc²Õ
Ô½úëJ—?^"%İ–Ø,‘Î1³ày¤ŒŠÑ_ˆ Maõ'Á•rW–ÍnF€Y˜Âˆ´•wûô@¤Ñ•P£üÁîx(¥•J¦ùNƒ9Á€¸^î£«ñ†5?A`	eÛó÷8° ™nv¼ö$y^Ao?Ò­ÔÏıUäæ“”g ÕğìîcÒÛ7ªx”óÜİˆ±5/ĞõŞH¥âÊº@Š)EO%İØïEsy;bÒxÚ/ÆºÖx/äşÿ”Ù
òl`øã©m¾y)ÂovÊi›kììŸÅ”™¾XkÇÑ†Ùõ_€42å±û%e‡³J68µ,÷’û &0î¿ZUqd|öjCxVF·		Â~ëL‘Ï0²ÓÈôÛåï°-JØåÎ+©`ÿ¢2ğí¢ÄŸ/§,|49>îïéôïOu QÅ`$¶yQàzÜxÃ¹ĞœGQC¼V·9w»éEÕƒƒJ¿I`Ş…ïœïšĞóºáÎĞvnÂ
—ÍŠƒH_¤£ÃR4y?ÛŒ¢óu2–ošÇ]/ø'éq8¦X[ÎIOéâzXuèÏÀ{LÈî5+5µ}ö"úŠ’ `ÚıWŞö½*İ*d<6¾êå_-áàñ\/”°rŞë•NÚé¤ü&wÙ%YCÎP^H¦½Æ„wêœŸ¶g?:yìK£‰ò
îd>ˆû”‰šmºÍ7¦¥>°…ê¯Í¾'thù=ÆxíuTö“j^Ö¢'û[§XÚ#9;§Ê&_IŒdÎ¡«KW`BÈH¤ ØX$Ôà˜Çÿ|#jïfaOú+[³–enè¤L®SµËÅ%¥Ö2$÷òì9ORÌmËnÉ;ŠyO]Ä‰ŞjÃA€ü"|S1i»÷˜(òh‚Ã‹cåb.å¨J°´Nérq¬GÔíŠ_
x:ë¥RJé&­Ì}bä@ò+Ë¸Î=Jè\¯#Fu È» ±ª…÷U®c«Ê|bFÍ1±63îÊÃ¤Ù¡šÜˆı¯3:Øü™…Ş/ÍaèëBh/Ğ.¸'`Ym©oòğ:k4!¾¼R¾­é7Å§üMáÁšQx÷ÁË‚˜(g.E´ö5íL¨‚àÊ
ü´@ğœ"oøíÙRÁ §§àK{V°9İöì¹dO!rZŞÿFèøËpüğ%İc”VhbPjSªj˜7á˜k=*ÍBMàê\–#¼Ï<ˆÓ ;#-6íGÎÔL¥§·Ş!6İßˆØï4M.n‹ûÆ?¸3J[”U98Mö&ìĞÒ©ĞÇàUÿr7X°ríNflgôõ2`­èHÏÖ:”4XNÀ*ÀâHˆÉ¬˜´òÖµà¬\€± ëzR´pÂÂHP8ØáI>üş¦>¤77eÎª·)Ãòõá£´)9
‘ä‰&í™Ìâ–˜d#8Xãz¾0±hå³/Z^œ”Vu÷š×ÆW=^Ì+Éê×E[:b ¼/Ü?³€ËiHD¡nŒX1RÔH—–‰ÚmK QKE( ÇˆşJA¹"ÚUVH{õu©5µ ş¸Pmì³‰ÕTº¯éHº"ø$„?.÷ŒÍºÁ«.{·4J›y½À‘×2¦bN¢‹iõÕ½^ÂC5GëÁ ß”–ãô©­¶X^‘Û¸¯ü/_>ñéØ¡_@”—õ`¥Ciì?MuX¯iCîúöãøe6™è­ÿzR»ºUll Âh+›Bpı*<FZCæOmjÓ‘˜FeÿEÅOLSO»+m3+ğœ»Ÿ8­ù\ikiŸízû–E[Üşr?wLÔ-¦Ew·^ıÊ˜y*67^‚E.•|H<ùÜ PÑÏ™¨XÚŞãdµ½àQàŞyèlaj!G*z.İ.³+oî’¯îmºYÔ{,š‡¡áš÷PÚûQr  yŸ	ê‚
TlRñ€†¼÷2ƒî<†$€yYÅÑ¥£GÁì•!\((ÔğôßŸ4a,ØŠ	HÁLEyZiY½¬s±€Pr¶T> Q	“kCäçÃ¢­³©B3€¥Lc;lQİÔ}‘‘1JâTuŸèñ³Õ@TæĞg”ñ‚×ŒQ§<I·–É.èwvn³m?ùuáˆÏøW\1\X—å#@Õ(Ue¹ŠÉíÜ›•K¿Ì5P—NJ­ï&m	©–è}˜Än	Õ‘§…“c,ª5jg#9 şV7MÙäÙ§–`Ÿ³TÎ¥€Ê‘·# vòŞª€îû%…‘.â®ËãÈµ%ôÅ@xòô†ù•ë„lµ,8ù¾ÒvİvP*h¢!õÚdã._x¶T¢f Ê{ÄémÅ<uüg1ÙòÑ÷*rAÙ—f¨ú#è®b˜ô<h:3„¸!“+©‰nTÓÅh`—³WI tÛõ8óPH(–¦×˜.Òÿ	nñ¦¤é…şü^>ÛÉßbÎ‰‘ô~Á°ÎŒ‹@eK6ì§­Ç^±^òBPÜlHwÈ0`ÍĞÀoéL¯Ïåe.QÀ%x4‰ÄÄšpñÜGöFÍ´¬Øç*>—bcë$‰“?X3‡@¬&®Èf‡{‡Îú‘0T$Uğš~†y6M¶—Øçú¸x2E‘ïSÏü…Cˆ°ã¸7\,ÑùŸÓ»I3¸ßšÀù×núõ ¸b¿8ÛÏÄéğ¨îC£´˜ôWfg£3ƒ"¥0™]z±
…ŒoÇ\Ë_)@3öWd Ÿndcìb·Ó,,Š1fÅ·Å\¼Oy²1&pö@ÅB'	 <ÕBu=Š‚šx\J
†A`Gº‘¼­mU~_eåW@ÙwsØ‘(5!Ğç¢CÈ>™>¼/õŞ§Jı¹‘s;8œb9™ÕZ¡’×T'•“ú-µğ¥sNG©®½
¤%p%(håû	Uw!« ¬šíˆšx-KíŠIpCÄWÄ;:‰Çj4|¶–:6:+i/²«ßöÂJ'¼844Gq;1Éú¤Üë?HHcjŞ”kÛ6¶––›µ,yìç5İ`Â·¸âŒW
°‡ùÁù@cMÔQg¦‰­›-¢€u`ìBeşkb!8ÆFsÍõÎaÚ9LÊlÃ€åà–W|”ö¨Á¬¿ô(k•I×Ğ¹Û*Ç„^Ímõ¨Òµ³Î-íÈ÷;1Ş!>°B—Zl<úÕu›u1´³ŒL”1j>V”Vå	Êkè¡,zwë;¯^W@Ü£Zñ¡$Z!c‹J˜\¬‹¥ÆsŸdĞòúøVğ.±[uµy3gß³z·ú>–l¬‹ª†¸¾°Ë¯ë’äŸ8Á³ñ¦~|å§ ¡êAÂw´M¯Å]n-7äî¯ÿ [Âİ“­#8¶2ldVà•>Ÿxsc\#¦RªT{T<6Xs?Oñ8HN±Ù•ö8$B8¹íÉr„9×pN}|Isú—(@
˜fO”µMnûÊ{Cé®vrÑİ(wX^¡äÙ~Øª|í0èÑI†ºŸ5#¸ J’>Ë]†ZJF+<òLïÇ´/”â4éÙáÖyJ‰¥” x#PTùWoËb/ã«…4í€¬}ŞÆõÄ'„xJÛvîÿ^EĞÏGe°¬RÚa‘jE•T&]B‹…Û_Zòùª“LµÏ:•iŸ+ipw×ñX±Y[”ÈX-ÒP ü÷ÅOó¹w çÿğß3¥jmNâvïqı…÷Êõà$¡Il‹Ú{åI´§Û…1™è/o—*,œá¦¶ÄPÄÒ'PÃ£r7üœ>Ã2PŒv8²—¥?Ì«Á2×°7ŒÖ€BŸ7’jŠB†'C¡6Ğ{B÷Ç—è¥dˆ,v„-å,ìei‹Ÿ_º²¸)LÃ2R‡rê”Ø¤ÛÙPEFd§l„*oœ¦¶Ï;“ÏM›³ÀöÆ_¡®ë&{›Ÿ6d¸<…CjÛá+Å>ñÊ¤•¾JŒ·Æ0Ãç0ûÍLkOùeè=Üpñ~ú¢§æÛ;•;ñ‘bßÀÆ¾'3w(”(æòÿ<	c1Äšy½2:KcíIXVĞk©ªˆMÚñÙ[¨+óµÄa¦y±5€zé¼Ô_â2c{¶á=%Q\
œ/oš$d ÀËã^ §”gİX†=îuïRxR §õ	;Õò»ŠIH#üÉ'‡ú‚2£K'»ËK°¯ÑCÅ“gÖPƒX<¡ÆŸÇE¿iÿÕÄ•„W°ÂlawÇU}ÈY`ıp¬©Ú­N÷áZ•3r²µZß(]+ gùxh”Íkx[ğÁÏo÷İkƒâÖ1—
ÀÌN8ìBjÕ%&ş9Û*K%)'ÁáÉÙ&-o•Á;D®¿YYv†œÁÜñh+bÇ|–·×–‡±¯¸¨«12{…Ñ—	°
ûú®’Ÿ*ÜS¶³‡À£$•öÍè&Áıâ: ÑM&ÀÁ×lİ8^ßµS.2‚pz‘j:=_ ­É¾J"2ºQ"v(pÓn+Œè&,aÈì¹Æj)¥Õ˜ÛyèJŸ‡ƒ2†¿AªŞÌ5|·%•ƒ°BcfˆGXÂûH¨É
†4ñ?V˜aÑ<•Va®›Rñ'H§l?É.¯Â˜JftWdÂ’Ñ‚kA ÅèùL@¡N†¤ç»öƒW6ªrFN7¶lc¶ëtå³àªŸÜÀÌË˜æû™!ÜlÓòU_Ôhl>ÂæIiÓ¢úCÃ‰¯X¡Á¹dœ€‘ë+Şür{à=İV]úÀ·P¬ÿ¼BZãgRì¨„‹Œ@ô†‰Œ^(	¹¥WfC¥mNq±ØùÕ_Ç¥zñ›Xbèn†¾‘ëtxkûœİ¼D$ØsÌÙÿ´ûd2BêòŒnò×MÊœ|E£u];àc²`ì¼"oÙDtõZrÀÇ†ğšcH’ –:nH,†ø
	­Ä?¢æ/ä„æ^ğá(‚ÄF;d·øå…U
ÄòäT­£ÅË¸ROíÒôª†DåDÖÖ+äL*ÕÓz{´ÈOÂõ='_ eÚ”üEópÄıÖYÚuŒVÆV†»Ûêşl…G˜ÆêTı¯;ğ¡Sm±XM·ÈxwY9=ûæxÎ³¿Ù~8 ›:& ºRüÅSÛ@÷ësN*lïtKêWw¥ááÓ*¹#—&££ò)Öv.µ¼A¶•p¡K)O{u7ññN§XAóŸØ¢è‹÷ıîjŞ lá©,j7c¯±ñujef 8ï~¨këæxŠÌù½Sk*.8-‘4ÛskÈÁ7‚’s¸ê8Ÿ÷ØÊ}L!”C+À]ïe¸Âgõª0¦‡-ÇRok%7DP,h$b–DgÕE¢q{öÍGã<¬pj‚~î'’Ø(Ö]	ù÷Š
Ô^¢w°{ĞÊb>ÂœÉoŸ§Ş”7†=ŠşDGl?F©xÔU‘SÒ§Ü:O©)g€}©Çª\+:G¬÷™F: ¸8Ö}aM*——?©‹´¿+ğ›xs4»TMÈï]ğç³
e‹4B4Gâ²9O	Ã[sY†Ï‚B©*|½p˜ëƒl²İÄnşdÁõ©èİH¹tC3‘@;®>âHêƒDï½ÜüŒ´C0ì‘ÇEÇ[@Ïô ¦%ÈÑŒ{/«æv7
ĞûøR“Gù7˜¾-C<M©}im¬È!ÓıXHÁ–½ÏŸf­bá»MÙÉ;¸vÇ2wÕ£©)À¤?xjÚ´Í‰ú:8¾¬ŸŸ(’/N¬? àÏúTßn¼“í «ˆá+……3¾Ì<ÉO~<ïT–¢!ö1_„
ƒ/ Şv )ñdh*PËR£ù"°ÆóvªÁîÏ‚I§×ó	AôÑVó·CMn˜	U#nWllº Òétÿ(.ºB:sVveUoä§q‡o`½Ø;+\ŒdlnZ€¶ZG8Îß²n]<y»˜=1lk©\UbŠ·§I6äÖeŸ€±û8óäÑ±Şx*ìyÚúºüjópûôø`·¶¢°@Z+·jzˆ¯ß+Â,êTôÍ}À@ËôwR7©‚’É¢Ñ!‹× < «ÚW™–”ß&p²|±?›îüÁÑÛgCû?T•ºø<ç©©µ.›c™Å•9ÿß½ğ»üMÑÈõ#y:jèdUã€µ¿´(\®RoAb[dø	v;İåê£¨ÈÊ‚z¿|Ùï\vá}Î‹b˜Òg"ÑozZe‰aÆÍÉá[îJ™ÀcgZ»»£ÙĞÊ\Ú÷òÉŞsÿ‘:Z^Ì_3¥ús,XX/CÁú­_éos'K>…¢hCÈ£*06¸´fê€u´ò>ØJ„ÂíÌª ÆıS³@Ï.ØÁcÔ™˜»ŒlùŞ?‡]ŸÚÔ6;ÌYÂe°´“Ş]ƒ¸¥õ—â
9±ğÓÎw¡×Ú†Ê©£‰¯xhÃB]Ô&	¢a¡ÂŸXQ7e5^ğïÇğ.ì»|+ãæ)>ÊJY—>_ƒ?‚˜d˜ùƒ¢/±‘îw¾cF¶k’Ïú{Òÿ£©ÒÔˆÌôã–ù&eªî¹ı ¥¸qõ{…x0H	QÜ~Ç:(#z$ŞÒgÜö’äUìºp7 ”Ù¤¥ú„änC %äæ1ıË¾P[¹÷:2\,ôh¶Ïêø¬7YEâÓ˜¹ i¥Ké&¦Ä4kèŠÄ’áîfÀ7[»••XÌ»o6_LLî«—²]™Q’Ä³|ş‚•ş%'ôï	¢éô¯\Œ¥/JŒ‡-ğ¼ûÆæ3ÿèÂÙŠq“º‚k8úDKö»íäh~Ìúü~ÿ<C«äiÛ×v<)b|‚öµ)íA¶Êv½ĞÔ²´ÛsqéY²JABÊÕ£jç¨ß.…Ğèƒ]äUq¦ôkÄ÷2FM·[ÿõAle!’ÁÜ>!h7_9½¨¹ÂØÏM·HŠŠÀ!xRÀ~6aĞuOáŠzeÎUÜ:Ğíâ¥YÈ¢ï/‘ğ¸]R¹Ñ°OóRr¥	©pş ·°uÊÏKˆ<'=¤……£ı?ñ¾Âx3ÀQ}\Æw,Ú˜`T/Áú€¼œY'/¼ewp
Å%Â¹Â#‰óOß³QÛ^&{%®„ ¸;Ò|ì˜9[½.´XóøÍ|”"9¸ø«9üy˜¿”£~ˆÜrâYéöX»³î‚Ğø¥·2½e¸sÙ _’˜±Y®à&Â[ä\`]×%N0SŒÍê¥Sú®-V€¿è¹;
úÛêŞıÙ·ˆRı 	‘šf¹ùäNK"±ÂtTõpâ«/Ÿ—k"a;˜¼¯°b«s*ü±…«1J}ĞíÄ5ÍO²Ñ°ó¹rX˜G-­${×z[>…~ŞLøÀïN0Ã'Ø“#Ô`hˆ»> ÈÕK ÓÊ¥§IºÎnD2 ÿYİu1V³iÓë˜¯ÇÍÎÒanINô›ê è×k´hFÙ å‡“	£Êt‰kzÙ-ÔÕœÃ'ÄG0B»íƒD/Äd)¸ÁÉÒ3ñ'ŒBïôÏ7ksL}an"gwÁ%{{Á#ó:·ŒxŠMfhPq`Œ*×vJ!hğP@«õ¯˜2 ¾Æ!¢vÿ×1·;4p-¢SĞĞJmtF#ËT075xE¼ÃÙ×µı=
÷^í¢A+6†äHİ/|5¤°‰Û^«vfÓd¸š•øåÖN¨|¬‹u>N’p¡û†QÔ§+wŒP9·51z×îm YQè{\U½$Ãî„82VxïvŠqÖN¯òGï% ÙğÒZ²Š_™1Œå¦à‘Ê¯aõ/¡ì~•oi×‘Êx•«pBJÈÕ{‚ëkgÿdn@xÛf7¾’ºŒÒ“ÍğÃîÖ(+(4ÚH4'äĞ€6ÉêíÕ!*—wœ¤ƒòSÈ¤ê®£øÿ<IT{İå›¢ò>sCŒN2	¼`6Ç ‡GG“)işòWNÌ§ŞòN\#íA•4*bœì9Ş_Ñ¬â¡à†W¢€½cËÚ–RÙX‹÷ ^n>V•àøŒœ{$ƒ62ÕøÖeFKÙ>ïô¾.2/™–^â„®ÇTŠ†n˜jó” fˆ¼¹/{Amrnÿ‰ãq"ÿº,ãNˆYòÃõD¿  <²Å!8ˆ¾"É‰…q±ÑwËÙ–¦=×µ>Îœ'Ê`Â6^ˆ07
ãôNªÀ=!TÄL,Ì7Ï¥ÊØ×I©bÁË –>~ö‘H½m©ûáâ\„ ¢óA9RFPÉ*®—ê7d­‰k ³n¦	£•„îŒ	^Úš›Rí<°)E¢¿ŒñO‰½Î Ä©=j:¿'üwˆ÷Îò	ê¤V9:·Î~{ö$,5D“Ñ»gU*1Ë—¨·Òq?C_jÔ±îÉ¤gÌ	İh}Š_±N§)è¦¼TMÜ_éËj$z†÷®ü‰$ALY4góY^Üw=…sç™ß:êü%Â‡#ÜL"Ï­SyP°ü(²BÛÏ‰SëyçÁ]Ë@vïx.ï-'\c	ëù*Àk|@A krm(êÇ–EÎªİ{
…­É÷ß9™PI²ùÿ3£ÿ\mõ1îrüq^Äí¡µ-+Í{âA)X·t`}"÷ô”çÆé¤¶~
õ Ã<CÓ€Éé·|SYà
¬ç*B+– R'§‚A,-øqâE‰/‚­™ô"!/h˜?Œ	÷ğfV‡RGmæÂjl·épS¤iÕAƒDlT{kÙ™]|è¨K	MÈ¶º‘Ò‹‘öö`%@Ht,{OËümY;9	);®{hƒq¯İ?ÔRe\‰öšCN5Re?h‹oJ®±8}øÚ¡+TÆ7ÀqoIÒÊ¯J„à7$P”%\»¤ï…­?ŒÀ‹Œê×ü
ElÒ4‰®Ÿ~^I?ª‹±e†.$üùöáuç?:»± šÒQŸ«×ğ,n"ºqL&ReŸfëkƒÃ	-Úh¼â+,ÚIÅXOgå-ñ8ìkŸÛĞ53*yRàDfAsé¿Ä iüF¯¢Øzö\xn8å…xÌ€f&Yx¨
m¿ç˜‘ÚV£oq½§òo“
Á%İïQSJ,Óg~q\)éÕæ›/ÆÊ:ªèËõõ-‘ç¡[ssŞQNEpÏ|ÜDÅF…İm&ÇD®É=b—ò»FïUu²HÄŸˆİ|
-3UkÓMĞ=i¨¥ï4[öTéÂVÿ½›aÉûNàü•óR%jûø¤@5*™u€8é*ÌØ1WzU’»û¬ÄPJy™ò´‹C„›¡“²<°›ˆÚ^€E2¦š‹¾7™ «y#O@xº5]IÃÿ«€¨b95Nâ°Š|š#^uß†^ôÅf™«åŒ¸È2…”ÿiü,úƒFÜŒíFMkªY)nÚ¬Rs¥<&IæŒL*^¨£m¨{	íh"@Ì×ïü$bş›!odh¶~÷·sZİ|tÿ×òl—ÈQWğ g-(cÔyHa0ÊòPÛUĞˆ³/Òèş
 öó%à›@_åu¶ÖFNÂæ¿ÑØî­s­l‰º«&ë±ì ÇoØH¦]¯•¶›À€XÅüW«bšu"]öä¡×îís"–ç\‚1œ¶…9uŸ[×Ò„Éw¼v¼÷»Ç\¬Ë]!dëeÁcw$<]ê.-¨•é7‹KµÌÎì6’oÙÁå€ëGÏéDÑVüç e¬YÁjÃhæ³j¾l{L@eæ_§N!¨­Éä”“x›üß6Ç8]šÚ¯£ÆvSøğÊª[cQM¸upfK|Å®·ªxPSD”N8Şá´j/áØøBÚ¦Z™¥c:~ñ^Û(ğªŠs»”MG3_ÉÑç®ÆU¢»š•(îy?hmZ
´6
ğ¸#vLkò–cË@@(8Rùio:\êÏĞÎ–›}˜HùµÖ«åt*d4µ¼‡%å‰ü{úÌC+¬®|!öT«ü¿I~#¡dß,V‰ŒXõy)äğ)|jqS"cI
5i³m4Ğ!dø+±Os»\ÿŸy…Æ^Ìñ²f½×f&£iéëèQÃ¼Ş}Í`V/(S`EÁ«)À1dö…b†ÅˆØÉ[[ÿo\È¢½O"xO,(‰{|c¾Êµ·oMí˜o7†®ñ&/xHyİƒ“0;%ŠŠûD[<Åáù|Ëµ`i‘zÉ!‚¨›iØÕÅ=)v-\p-ŞDkİÂÛ{
r~*¡ JÊˆ‡QÚÑí*ñ;íDİÁ4¡'".á¥ µa}ó/m©Î•ƒ_¼û²Òöeûh\…ª‘u<5Æ¤Ä!ØÄ(óâafÉ4bGMØLäi·µÇqTF4cNé‚!Òµ»ø!1W¹ĞõË¦3U«ÄçÕÈÖ©=P¢8(ğd%‹p¯Ìƒ—ºyÃÖc²»>?ƒ•’£ßs¤–K¥‰OÉ@y)éF[t eL÷J¿<Y‚7!¾LãVj˜ÁÉó¾¦ˆ?Çû
v^d•]ZñNÔJ¡=<S#°†¹:csÄŒûø§gé¨!Ñ+FåXd!v{vÌä²!»U³È5QªÄZ¯„OÀtú:#48.&í™ —ªüH°ÁI8@à¶“˜U€SİìİçL´+ü»}•C¶€æ«s÷ı¹¾¡nqR¥ğÁ³Y÷7ÙtÀÓÈ_7¯Æ¥H€‘DÄZlÄ#ıeO%½U†m…³UÌNÍzt…Õ†sªı5è–Èp«@'Ó«OûÒÈ‘,æ^4<~¼õå¡–á”òc§ó/+\õ«J¹
—‰p›¸Ì ½…Xş+Xh„?T9fï?	Şê¨|np-çJ»h›ñù±!”K–ìàE
Æ9ô{¿$â
šiyÒ¯˜Yˆ{öĞ{mÏÑ¶îËsÜÏ®­)a
‚y'5Ÿbq;T¡Îˆ{ş[`Ü	æÀá›GÊµ¬<ˆî	¦y‡H»t]³!dï©5j|g¯4¼Â¡0L}¤‚S™àñrRÓ›æ–*™/††k$\^8uº/¨¶1mTU67"myûüÈ±”uE`¼­şfâ“^èd·Õ[àïíÈ`èò¯à9³†&V<»o‡¹$ˆ­ŞÁ,°=ª:i‚Ş…àµI4Ëõw×øˆrQ¬·ĞÆ¹À.õ+9ÕRt¡¾Ãÿ¢Ò¿¡ÈX«iO@iÕ‡ÇŒK#¨wUìœY`*-çÌea,™«†¿ßÎCPEÜŸä¯mõT<½|ª$ï<ßº_1mwàC=2o·Ú~q2¡¼+ûƒw*öIó«¿Tı ¬ëı{¹jC’”€–êV®vînİĞ5M¡Ñ™ËöJt‡ğœ Ëe;$STa†ß|+ü&Ù6©£Ùù÷ñú¡·'°r±m’ÅÖLÑÉC3õ3Ë2`Á;ŞYÏQMøŞ€mr!9Ã“Ğ‘\êsT¡äN=]Y%É†ÅójS’¦ñ)æ•ş[Õ“àQ0'¬Z9 Sp”2"N5	;ş4Œ›{u%<¹m	B€E5ù×0ö7vØìYÇc¹-&/ÑbõJ(¥/Œ6*Ö±çx5È6Z³sKlæò¨˜lÚüq¯+ˆ¥òµÃŸ‰é[Ãå¾³¯È41ãî•÷áU/ÉˆáQr‰ ,asêFú#q†Ôû¹½šO·qÕDùõe$Ì6{ñëYÙà\J.$¾x@ÈV¥Éd{,ı…”1Ãí4Úªé«©<°‡uu6e¥¸¿¯İdrâ`Œ
©IÓæUti%kÙÒË±¿v*æ¬öº(Ó$Eï¼.Ò´DTzP„KÕó4$DC›ÏmñM¶sòŠ×Z²É›)d.áÃZ2k’”z3g¤E«Ìù<ÃP>ó†İ„2ú0Ÿ ”¤Oá¹¼´+™iBƒı7<Í^€]Ğƒ§Š#L5‡h]…‡ïòèÖÀºmš•†©ê¹'­ZÒû6¸½IÿG¥Ê¥ ¡ˆqödöˆÍR…“åM~+[£UWïXµ?k÷ÔÖoøA3'ª+K’kjM+Ó Æ‡ı%ÆÚÂUoËYun<l	}†4Djš$ebùrlÕøAKúà†ÊŠÆ•ª:eº<¿sñÈ]OÁƒ¡SÇºÎT¾K+/CË˜©˜J¶Şõqï"¾©gâGkF’6±V~èä€£m§kª˜”MlÊ1ÑKA IÖæ^¡N~°B Ê¹æ¾N
oH\,š/¥+xâ”ÔÆ{Ëšo=Æìi(¨æbuËíÎ|%QbÍì]ù£3ã×ôZRt['!}NfX$IóÌÓË Ã)0³Á-¸Q„aŠ¾wÚr¨R:‡äK7XRaï„gù¡*²Câo…µ2Z¡ĞÂ³/1öS÷aö©‹³õ`u ÂˆQºŸC*a˜È¾šUü >éDHwİëş¤Ø=ú…” w
ĞZèëõÔj"E-$ÁdV|™]}ĞÁË4©¢]\½oª[Ï|¿m+ ì9ÉbykªhØ	zä-²6Œï‹±ş!m§¦.ÊcË»|²wŠ0,U<m&â5ûp"â‹Ö³t(ØYfQÃı5&,PæU>
Z±*¾nuŸn¹ ÆÙ‡,8øÉ¦¥~ç—0[ÓŠe[3ĞK€ıpcb–‚‡ß]ä5ß é·¾$áÑ]2pcÔR—„ª™Ï0$—‘‰–?F•ºøÕ\R¿ÿvÕá·ßÉ"¼s™û v¨Ùrk‹ô”]HÅ¤¨o¿Õ"h 'ÇÅú¥#÷­\#™«Šän·ì)ªÛ2¬¦Ï–æƒãG{@L•ú¤B¶›1Òô`‹1'5œ±áG¡ıèÌæT¹»õP¿7&c´ÖyØÒ•4$ÚRıMq£L¡ªÏ•°™$hUÑRÔóD=o)_F YRO¼†ÿ[BP#½J‰×ğ—õAÊ,3Mìp]ƒujéZŸWÁU—$så¿……3ˆ ¢Äÿ„ÂJ¶v—ñ°ôtª-ŞØ'ˆGû Ëa„ZêMÊÈ–èÇ…‘ø8­êPÚ@%Ì~%ö0! 
úT¾»Æ•Ó9ØĞúåjÒÊÅ¡­¶<–SvŸRôØBÊsm8¤nõÀµşgİì÷×†ëiÓŞÏ“Ã,ªv`c6Så4£p¿*+°SzX ¶QXó¶””¿¬Ñ›Æ¶I …0BéÎ²+ J†ŠO*¦'@öé-o[% FCù³VµSĞe®/Ÿq¬:šİ'jêf(ƒğ³6ôE”ÏggKd‰ê+:Ş‚´ôèxâ‹ªáTq/n•$Âà÷Æ==ï_ÅovÏ@9ãÕô-«g·¾)_[w xöçW£ 02ÂªIğ­Ái]‚±,Ş2®0hJêHpM™üL> Ãi•€„ÏİÔš{ÎNè#‘ˆ8ÿœqŠ³!šAƒzÉÎQ;IÌ“DZ“—ñ¿Ğa†àâĞ}³öûş¸ÑÈş- jéU{L™ h$ñV”Øa`)“
£esÆK|-¾pló¶âWkëU¼„«9ìäù]¯Æyëì<°òh\Ø¢&~l¹ˆ æ<êT:Éi¥Ñı¼g@heãYg³=v€B©O'MáfTH»ElŞØİnã]]8ŞayUñbRòJ3ï»·ƒƒ‡3•-O÷h·Û›œ5%„Mö¸W<g³¦-°*(¹ªQÜQˆ$m¡`JA®1]aËA²s>wmÇ!ƒwÕJ³=|~Î…‚”xÉ^ÿ O¦îî©À@Øß;<Â%ª{QFQ£ıÆÃnß¸ï{xäÛÉ2 {íÆÇJ”ï¹&åµÁÊ—Ó;-h3>>Ë<çh0yÈPf×oÀkŸ—´<¶GÛ8›ØmZôè®gqÒÒ"4¦ àU¾'äçKâ5E/ñÙcç©å~«%¶²m·¡JpOö7çeÆb‡ºåtP³ŒÛmF»÷®»†C £Jæ‰Iæš× õCòoÕŸÕX±øzùÇ™ÜqÊëYŠtÏx»"˜£åUÎ\¿À* f°CDA u*ø©¦äK•:q› ?6ĞÊiwm1<Œh€íbIY7î2LA›…¸bÓıq¾ÎŠòq²iŒ¥cº“k-ôÇhªY_ÊPºâhße)es©ß‹$è?G9UaÍ`gl–öÇzQPq °Èß´ ·ÑYÚv£Ï3ï¤®ñ| ³Ëº¿{¹ÆÑ;’ PUÕ¶¼†Çá#ÛSŞFØ×ˆÛâouSdF-U¹zK&ƒ¦±à™úsò nñI{²{d¶CUc²«Ò»# FŒófÔE·–„t–naüS§#
ÿmWR^wÛTÚ"ıƒõã'_‡Åpœ)Àító¼Ÿ+u‘."™/XÈÈb–$T±‡'I‹–>#;ŒÜND9İh0\‹G©zYDİ6$ëÜ È–ºOê,‡ídmº±–í'¡á¡lÌ‰k‡…‘1KÉ¼Z—I± â¯®Èe““›CAÉ‡„oÄ2´t²´‡AÁƒ—›¼¢ŠÍvæÆ¡€r³e¶&ˆïU«Æ\ùyrFMNì±i·°ÆW—1ŸŠšx€£!4İÏôÉØ÷‰:L|U@|K/Ïæ1³ø)ûÌZœc„6i”I2)SQÀ¼„ 0ßØ”ËWåO8á”‹UúÈ·w<7Ä Ê°b)Ò
Ğñ/ºaÊ$™ÏK"É÷únğªïB‰ıĞ2I¦‰ãö+Zç÷\gÇIîDPŒáüûC3Af¹á Ké.ˆ.^‹~Á4-Fr hÂ#È•=$}¦}ÿœ>¼!æÿ‘ºˆU9İ>¢ğU!HÊ4¥ºXyä9w@ƒ‹c ØÌ«*›]ŸfkQÎá9øAã†°3-é5¿œ‡?ôVú‡ùÖóÊÒrqî½¸></‘M3E,D¤´Ö´Êş¾ÅŠÅí:Çh£Ÿs!%6Âó¿uÌ[,åîñê.Ò°›rì‘Óç‹õÓ›¬Ú2õCÚ1¿µÊˆå_—f8îz>CÔógÊÜâFÒmí±°áÃ˜2»ÇïãŞ&A™­K2Äç ¯Míjºg[#ÍáfTƒûrlÌF»Êòß’¶5T"¼†])¨©©ú<ë{ˆ’ÛU>w3å‰”†z»ÈîI“QÆÓ«p|èöfxcd“oÕQÂÌŸ¢Øúå_¡]ƒûEÚjİõLc[M–U–S«®· …­¡d•_¸¼†¦¢`‹·ÌiçGaG’ò¿Ëi •™ö_*ã-=pú4h‘f9;~&şÙŒ1xV ¢'bÁĞÈ¹Ä^¬j€zE¢ãLˆ=ƒShÑâw+Ø¿ÿI¤O`£å¾	¾¡pã‰SŠåió?‘¤5qŞµ,Q××ØÑd=ÁåYóEÔ¡ÛG%´©B~{¢(íSIEÁ-0OŞ4n—=¯Èéùú$…ŞêàÃø¬Şk¶Bo½–·à™3õˆ ¼“íKò5bÇ§™WjUYDrp|«æêSEİèêõôqAyÓ=ü€›Ä`I+Ød!pŠï¢H •#9ˆì…[ïf“Û±·¦Ç	Y†xÊKMÅ1ºÇr$YÔğRMi/˜Ï%ÿøĞxÔøÚp=Šá5‚LÑ÷=š‰kîÂ­ç>Ç‚1'âUiù\şëCñª9ZDÅÿéÓ©ék!åöw¢I²Äº:LÓfPÇLòĞŞl¦Œ
«`OM”ÃtèêíÚ¯·İŸå›·R½öD[ÙÀøD8C„çqvıânÿXT:÷Ü°í]¥ûch©ò¤Æ”â»Ñ?d¸"áÒrf;@ù¼/EFÕ
¥ú¢Š¶)*ÔòÜ`ç*}\o¡ èH€~ÀÈwJo“©X£İ^E}LAqæÖ‹¼ue[KDë©äøN‘úš­¨÷şK¼«¢Ï%Ât½Š“ÀyV»KÀ‚âW–İ‚IFÆ’ºhäO2<è-|aÃëÀ*èv-»”'HWÚİş3Ş '2hI;ù7–•ç©ıÙÔñEb…f“'êMß0&¢&Ğ/
†ğÙ¾¯`Û@4OŒ
e Ù 5¯PÌU"Øi#(«ôÃ3vÕNükª¸˜^RN;¶7é%6+ß»Ux2–wÏ-õŞ 9(ÒÑ÷”ÔÄX˜vşèÆø’ |BÂ 5—Nf°¼ÜĞÂ®ß£™¶¶se[ì¾n¤	Gç îè)Nz[’“gâUÍ
Ì© `¢¨EZ^»w‘bíÑüd)Â%üÎğùa<Z¼j¹çA­rŞƒÑŸxÈìB*Uê…4ê
¶DGG®¿[ğØ‘«&åŸN˜-ì4,±R:MgæàÀ;†f£¯òÂ=Â§†ÿsx€_W‹îÃÅIóø)ìtò‡
h
6ŒA»úÇĞôáğã«»º”É'ùç+É’ş:üûÈ¼*›SÇÏğk¢2æ‹„K	±{!:òp½Øsñ¶«l³®¤UecÒ)ªdĞ‡ÌHGES wÖÎ±zÅNó‰I$!¬Wàp	Nr™…ZÛÁö× ‚Ï)DŞ'G1 ËúªÅ]‹¸êä¡SAA–mñ`"0PÚ	¯ m6«A®ó‡¼ı8(hÖåKÙæ:l…œuÌóM\›G^óå›±§y‰5¶j°¶Ì/\üd«¢Ä¯à–á¯eşH­´ˆ,Ï½³[šÂÊÁÂP¥Ík[-æa¡×R  (ºòV˜\6yÔü •HdÉöb²^şDÉ³I
uˆÃİ&ôæM8Dªbº•6,ë–Æø$ËyàAğlJR)Uÿìå“ˆØ‰b5G_0Öş’‰MR^V´Zâ]èâ(
MQÎ§Ìñ•—<›\
:ùì*/©±'Ëë]’#—<{0‡7uk®J<h8.~×oNJÇ\Æ7Ù<7¶»NZÚQìGQ3ï¿t,3¿¼eœ˜)%yÊé™mnÃ°Ûà‡®Ra‰[ñši#XßÔhÈœ8 / 3šï§/6ÉÃFÃAXÌíâAXG†‚<‡ªşNĞÜˆ™ÿÓĞÃÊiß5@­ûQ1ˆ nãDÑlF”|(he=_ìí³v6£ «—‚'û¯ğöM¦5,`v¡ÕµfØo[™ñp·1…Ö‹“›[.h*QW¾5:Ğ]ï·¼dx0§l¤ÀÂÓ%@±&ä©tÿª°¿÷~P“Óºb½¹wˆLı¤(–1«¿4®{-°Ğ&1oêce2à´C­§‡ú©…ÈÊC8û&’ìÀğ‡ÌÍùù òRíL¬Şo"§‹ïZë*.,Ù7Z4¾nH×¢ØÉÿÇÂL·'¬&1çÀïÜìß 3¤ş^-ZÅ‚şÇ¼'>m=[«;ÅT›Ë5®L²n
5¥ê¨!ÙÜˆ.>´?àÿD.SW €j—fŞÎÌû{j+¡ĞâI%Ôuº½|óPÎ¶/4uEËó;Ï©Ïı¾‰26z]UFĞşéù]ªØ‡˜®ÁcaäxÀ|ìu‹b ŒYÿhÓKfr…úÜ]‹áŸÉ³ú3`,8å"5ÄB®~…u ¹·fCsp¼(ay“a€Š£F^íë@Eº?é šêÆ£aHöÔáÜ5ØÅX>{ÁÑçÄDwRSë6ÆT¸kÒ¿F`VÙM«³(nV( 'âÉˆ¿'pIñÉ‡n{„^Ã7dÕÁûYCV®¥¹çÇÅõ 3„áÇG¶ei;Zû1ı^pŠMuR,ÆT,Êîş¬ğ|/zx¸w41¼i¿8†óC¶"ü°xÖ’õŠ»Şı€Ÿ¨#?*P˜øÌq¡/{£õu(çRÁÙ—ß7ºš±C¿‰^]q«ÈWmŸ)ÚŒªR·FÓ«Ajä@ş°éaC9En±	{²oÔXŠ{! '%û÷7[‘KÅ]åíè\ÏÃQZq…¥Å°Ÿ·‘[æ]ªXPg}×½‹QÁöÙ!ä¦6ª‰rÚìÄ¶¹öµÔ®ËƒÄù¶Rx¤ZQC¾]'+hhè¶q ñ*#â´e…L•}©¾³»¡ñ1¹JRô^Pz¹$Ú±_ğøìJŒ<ÂOÈõ¤ˆ¶-¡Hß6Ê„1ºRğÃÔ$/ø¨º‡ÇêŠ÷{Î¿<ÛÛ0½Zäçjc8À›k¿ø_ã¶êˆM
%’Rx™ÔÿFÔ;ÙLƒ—¶Œ¨ÑÌrV¶x
ßBÍ<ã¶}ˆ™O@ÍœP­oêÒ/—©º¼N²a§°zSpï"’ıf_5JQĞzFç×|¯ØIéª%‰ Y+B§'Ô2ÂØÃÇ¼v-·Ì™‚ö? &Mœe
ãîè­1§æÎB“PoGÇq•ÁË‚ Û]ÒL©Eæ¼ÿMürÚùÈn<u°›7qKõşTÑ>”F{gßlr«ıç5q¤~ãDŒ»M€© =ÛÃ–ÉŠ¶‰fSïøbs&kX#/A)}ğzˆ®zóüİİ×»"3Ñ†$¡¶±©UÑîN0Şˆña‚¤˜ËÆ¦ü©=™¾K”,x€c”Şpê2cU3Xÿøw)XÛ¼Ù…³ „Ë0h¸ôÈÏWÑ…²0ñ~Â›K†¯»¶TGH±7‹	pší!$8.>BÎ^¨¸ëy÷’šhÓçë ä‰ªx!T1Ğ/Ú0jğ»L$tç‹H£¼ë]V·³›gğÑ_ùD\‹¾”Æ5$Xjr4K{æ2oX”eY¦A#§I“CI×Š·eáš…?¦‘èf –%àSİ¸È/¿»•5Ôv)YıˆÉ~ÓOÉ‡İ¦Æjüî/z¯¦>ÎÑ¢É@ÕÚw\$bÊñææôŒ©kÌô|W†/"¿Ó,F´€!ÆB+ÿÖCñ[¯n—âñ„Ñ<øó&öd‚Ù~±ÿ›ÌHÏ@)XZänË`MGSÙw¸6¤Ïpk¹õÍi6”AWão÷Döl8ï›­[;9)Sì<ÆeÅïcíRêBĞ@)0­~ÿM÷“<!‹x(‹ÖJ*Èİ>¹„<€®ñ,QŒ
»ÁÛ5±‚"ø%¹Lº|and]‡tÅÅ¾Û .måIæÏ(%Væt Æ½1×|³Êè0’‚™Ïg‰Æ|ü[‡ƒ°ê8Ó~2+LÕZåÂ{«ÓÌ!Ê'_C¤=LXÑ–øf]~VTõÙR&øİ¿
/«	ƒé»}# 5I¯Ö>ê6¸Îw4mZ‹œ%èzzOõTò,ù¤iñc98³™)¢ê"¯ÆŞB…œ}w
ÅÓ€;èğ.7 ÍnŒ)H8éé%ß*fÒXìC¹ÌÌ71êU@ÛæÇ,ÈI+®Y±KeQf;’a 9Iu†á•„ª›;Üí"¨À3D™€iÓ¥aÔ¼ìŸrÁÜTÚ0kHqÉ9"ß”öX#ƒü¬²ˆ¨/n®ÎAREÁ¥àkDè({«ÜFASÈ¶Ë¥Q€wD­âåÿ8/æ‘¸E	¦£¬Ûè+ãhÜÖfkÅ^İ¬Èîbsˆø_™™¾W2†#/¨úT×·áŒÁş02Ç—÷ªÀÁÕ]9ÊúpyoÙL£‰s‹Ü#Ç¿@œuGåì_K¿H1û$}DVk:È /ÉGŒşCàÉ™×­ŠnN£”+ Œğ‹bÕTIƒŒŠ7æéWëFBÌ~Ú¹‰\b˜F‰£•ZZˆ=Š àÇF7(—†r;Ÿv÷¦8ãÜ;$w?¨\åY¬lŒé6xÌ¼^N"y¿´,•ª‹üœşÁÒÏ	šH5™Ñ3%Ç›”jÒÊıº©õ‹ÑæÚ	R0P¯½ªÏ®Rdœü œÛH”fĞµ°@t¸ê‹TG˜€Ûo½îô¦”€Š”´Ì”b˜®ÌSÜ€2>nFGøäğ„~d¼ö«$
ßG‘ ÏDh1fÎ÷N„M·PİÁ7r¿ƒ§rø1)9*È.ƒ{«=úw×2­ÈµŞ.ÅRä±sƒÉ™^(ó<ïg/"	Rtx@Xsv‡s}/­b®.šPÆ÷c;îBÀš§öa´hZÖUµ¦È<&Á€¦ã£RÃ}R´«³Uz@sb…ıåîZ<P'.KfšˆùNï2yh–ê@ÆRÎŸ]á)¸b„8ú‘ˆğUÑZ„Öˆsf-û'O$`t#)ìmÖª0Ía3—ÑÔC\Èˆ~¬ÃqÙø¬’\IxîIÄ¿ËÆ•ó½pƒ2ÀÛŠ&êİm`eŞv=Ñf £t±.ÎŸj³ ~0I#İ–Îc,Š<´H'ÉÎ
—™¡jÚÕH0Ù'BjŞãÇ[†’ş©¼ÿÎz{?‹9[2Í44ŒÇ¦L%[=jÉò¯.&û®„ÉÄğ§7·Úû±r¸x¾´Ò}‚ÖJ¯ğ½†xù78I)Q‚dÜ¶Ş*dİªh¸‡ıÈšvüVÀ•ê®Ë7f”µqŞèõRı[­ûp«¯EWÙ¥ì-ö|Æ£æ ]{ Tw¦¸<|¤şû¾Ñ†hÑ· ÕêŠOÅBÅAßß¾C$…Áb ˆnUI•iõdç)œ"xh3˜=ìZ9K¿|qÉßh€6¿Dí\ÏÂmÈ’|H¬*¼Y(p ñÕˆæ­®q5ã>HYûÀ¶àø4 wåÆgãN>ßáŠğÎ0X0…çoqËdTÖ.•‰Ğq«ì/*BŠ_Øcÿ‹=cgã’ t¶üfs¡fªìë^GŸ‘@ò)@‘­]_ÎãÀûˆøïE°8£A–Œë–ÄlÆÓnÁòÿÃ(©O¤eUĞuòë^|«]ğ®‘¹!ïµX@Hç¾b.~² Ú.Ex£Œt-m¸óí´<ÿä…Hæ`¤²o:QÉÉñAƒQåíJ9ú“ƒ›Âı·.NÉnË€ÀŒÊ9	Ê31Ğ"G6`Ÿ?s3r(˜dLœ”3}ç‹·Fõ<`?Iß%L®O˜@¹İ^e¨JXRsÌãwüb\ƒ"/F+¬];›­ëŒÁL‡‘Hb6%\¼À!/u²˜ŸÈšÌÇoe½p^TIB½µræ#q®ffü?à-m@Jv£ĞeTÿ®Ôm»ê@ø§¯é™¡wºË¥Ñ'Ü˜èWş«»NÀWL0«„Î…í,”­O!”Õ,Ë·ÿ+b1ğA`0	Wö¹Ä”ª¥§Ï%õw¦ç3ÁË|^-‡¼¯L7I0\¦‡ˆÙÈ„[¢ğİ#r\ã´« ¨éÜ;ZªEÚJ—l"J.¸5zºs¢}ÚÍ ]=’–/ëÇ˜ğ(şú{#6FäAĞ†SÉÚX!›¸œ’­ª_é<UÖ8êNg—gGJ¾ğP7oU¬ˆ{¢İFNY§RG´¤?@"hV¬Œe°$‚EŒï]¤%eşşõH„ÁO¡¥°	Y×–®Zÿ‹¦ËO¨ˆÏjsfê<:éÏqB¿bİõØ™™ĞÕŠ\½×û°¯7ÏÆÉÉSÜªÖ5
ªBê:ág ×‹’M8M”û[í“.%ósï÷„Rí¤RÎš<­5(Ò/f¬ÒÁîf%ùl˜ú$m·ñúpZÑ(Œú­)†òÚ±½LË3PUoñİ{æ÷6«äşº’MAû4cY,u5Ø·—9:^çwæ`›˜œİÙacn_Ùı`"K¬79#ì‰Ÿdœ1z	'+è|Š¨?™Œ+{¸%Ş< Vì`«'lÌŠŠVl³Û¼%O¯R bÔ&9Àó-Î&ÉîQš”?
2^+^#˜ôËóø†o¼ñ/»G•3$>É<ç‘®$Væ°«„ÇÓÂ“yöÅçû˜+±(Û]SĞ!«¬öÙi.æÜ¢œ:bN>O¤É]éŞÃ†dco„víş‡#ÑwóçÁzõŞiSë[)=ÁívTùÑvSÚ è‰–¢öŠêf«É£²Õ]2â¾®/,ÌÙPı§ÂÎ¹–Ï8³œÚî¥GÆ i¦–pXUî€ı)P©ºÑ@M¹1²-¸ËQ”©Ïî“º5ëtP<™ˆr3‘XüöR£?	HM“FRş¨\úqˆÂ,³eßü·YµßèyGş{3Ôôb_@H{éwì‰‡‚&gPÔ–şøÌ¦@‘AÏre­IUfî îIÊå[=ƒt€ºfr¸Øqg8F'1Ê,€6¿£@+H²‰¥œ	~IC)Š6-áÌ ¸t°×Š!Tš¯Ë†ÊQ†FS˜‹ÁÇ ÕˆZOàëŒ;ÀsX:Ç^º+Qî-·&¾]êÉ²¿ˆ‚6é»;4´’´‘µ—n­×[<™ •)ƒ’³½LñËÈ4†ìÿëÉÍ©¦ôÄJ¥_…~¼ê~DŠDü›TŸYí^û#ŒË¹ÓáœÊUgJ¿Xd‘Ì£B°ÁŸú7YÄ©ÃÜ„ùñ¡g[;?:n¡&‡+Ûì81u8// ¢`
‚&¹ FXp:i
í¹ ôFPnYÂ<IC««:ZâKó‚G—Û›àø²~$]‰Uv^—t@qü Á—f²Póı#Hkãóï²Á_i®šB¾* ™!“G?±¿UmËQxûósd¿–[’Ä† êC EtB?®Î‡[°X¬å'`ácë}Ì{PYáw>^Y³tÃ0Êõ)+Ø…¡8C¿¸38YÚšŒ¾_u²•±8õ4ĞrÔÌúòŒ‰Éc1“z¬Ûó®$P`U bcĞÖÜpÒ‡]Ö Á+µƒBöí­+àiè½íŞ#UH$dÁœBU‰¢½F¸F#Ü ê˜è6‰‹¦ã ï„÷ÆyQæ©Ì`cçı®ü,l9¢ã™&ğ8°†¡c+‡ôaXËC=í"B!k.K)¿§j;ßc‹àN6*‘ ÖF@m+	C|ÿ,üzŒkon"EÎ¼ˆ#1îŞ-K¥
8={ñVÎhØN‡,F$é7êQ-[`®ô¬êî¼î(ò"ï†[,»OÆOªÿŞ·uĞy´D±õ´7Å¸JòÄÚ>12†OØ©Î˜\’i~ª{„F§]·¨ú1ªØû¬Ûò§m‘ÄìÒ»9fı;@ç}·§ñ¤åYÃêg•Y‡B!X: Ê…Ö¾1æ€XØşhnÅ¶ÒÉ–I\¿\ZÁâì‰„,øßù_-Oú`)º^êñG}J¤§C˜LˆÙ|2t€"w±ØjQÈ]ûcÃ
µ³“ºA!.D`0â£YV~¼
nì:·‡P,5ò—ÂÃGé®%J‘®©Üéú±şv‡ÚŞïğT¾‘ÎTÃ'Ò¦j=Sª£¯ysCN¶!¾[Bˆ`5_‰€]KÇÉÆä ÄÅ‚1·jEñu3	K#S|¿µ˜Z=}·¹yJïø©­Ê,¤ÆİÌYÙI´*×Y+È¡(±Yw%Y„Eµ #ÌˆÔ5MDÎ%Õí—/ÅK‘Ç†ÙŸnñÉÁD}Ùğ’Ø›²ˆî&o7†/âÆ™òºó=Âğ-ôQ/UŞÑ²h¼Te<fÍ—‹ƒ¬³­ôŞ•·°b€'†¨Ä"“^ü¬?ÔˆâWmˆf¹ªç£¤¿ªrtœå¼ÄXÔ„¬!ä¶® ¯&¾
¶Ê}"+ ÷S{YœÇOAq5-*dŞz^+ÌrrÖx×åÜŠ#VYÒp0ôşÿû Ağß Th½œ†˜<Æ†ŞÁ¿Æ´óguš¦bæ÷‡Û	¥u9¹÷ˆ”¶ G†KéÎFµV¸û¥x,Â'½ß5«±ñâhóƒû‡¦¸\ì©`™g¡!m#¨XW÷ «€şúWiƒè.d¾ïIÖóıòñ¨œÛmmÒ±=TxÊf—ñŸï?í½]İŞõÄ%øõE¥{*ôrgá7YqwŞhtXÀ6îMhÔh˜Øœ7g€0‰E‚2k0İ@¶—¬ ´øİ‘î¸Vw2ç²›&9È<K¯ƒ-\”Ê	¼%lDY=÷ïÓ(ıõx„ÒFÚjeFmª ”W’uv—ç]b4Ğ›Æql®§f8-ˆnå^^y°¯S57òóKİ
õ·¹2YÀìoey8zÖF›ÜVKÓzäçfƒÌ·…Ÿ¯÷\øå<ïÓw{iªèèò>)}Ü»Ó7«`®>6r=
pé"Â×%†ğ¤-„°yæ7g^zïnâümhê‡áÆ(|QhĞVxİğâ‹†E@|F°œ“d-5Uj!Û«ğy^tùÕÀ<NŒ¦[`ß%!Ü±ôÆ <<ÅĞ-wêVÑpˆè”ø1å	r!ğ¹å ®äÔ’ Pîˆ+È"é§cïÌ+%ûÉ¿ĞË·¾}î!‡[Ç(f|Oé\½Bğh ³Kçt}Ør„?Ö(r˜›,F¿ã¬y5xû†Ë¹CõyˆòäïÇ‹õŠnq'zNÓ+RŸ™Ï5\ú\R™::7‡3H6ÛQÆ"ÆAp^<ãşÑw		Òîİ\Ï‰İ˜OìÍ|ß8Ââ
æ'?Ä‹µ)ÛÄÊ0,à&Ó^l;Ç(bS¥¢?#48U¼p!x“˜Ğû€mÌŠ ™0Fá‘3	y(É¤ì¥Q’ö&ûÆ5_Í`éUÆn÷üµ¨Yb êªQ:¬Ôc áT8?_R&V+2'Òr–¤í¸o™ôe ÔB<ù46ÙiÁ¹)¶Ûºş¹fÙÈ#øªË·Òs†ù£¢¼èó`ilˆsÄsJ›²ÈOtòã¿Hıa1‡ö4ä—ÆwOšy“SµZ×†pôùÓšÆ'ƒ*Êá¨«ÃçCÒÉP-µ+?˜ÕB‚V~/ÁWÃÇ&ƒòD{ÅĞO#íª(cjY¬2©>Bû4À€ KMJ5#¶ö›Nà$â]TJ7à¿ÏÅ‚®¤ï@nî—7 HÓÚç»È¯ò›Ş»şÓ·Â’µĞc#
~-=šAQ¸âê[mŞCíÛş­>K™ÁßÄf¿vE}©…˜à£ôu7J]øc°Ø¬¢c ?:/õÊ,‚(ƒ°>^s…W(86ÖNÅäl¿’ríãkS¯xÏ/gÿ¶†¯G‹|E·†^A”µ‡TiÈ^X]^ø‘·_)(âp–2{fŞ½½æ-Æœ"ÄM—•8Ï×Ä @PÛùiÉ¿IˆÌI…ë
/fhèñşÉÇÿã¶!µš×XÉñC32hPç´ºW¯"‡3BÎAû	ğŒÿF^–ìv 7"³w5¨SÕĞ:|“¨P(×Wöv	ì]Jú‡¾Ô©ğNm[€Õˆ “º=ğiQ†š¢Z³ÅsÏü]Ç ˆIA‘¤¾Ô†É&(3:‘
8™í±âğWï™æx $ôäGõ½j…Ï’C‚"îĞº¨ÃŠµ\ÓÈì€MØœiFûf`ê53
"Œ£j×âôµ€)Wo êš$†ƒ#IîÎmà ¹ÖÀ¹·':?Ùh>:
uYÄyHœøºY±©cYİ¡4onO…i:™ûKÄè÷¢‘Ÿ:ìã›%ˆÒ” ìákTQğkğª+å@/Ø}ñw ò˜€Ÿ°O|e¦½çiî·²|c›(u‡jù%ÊdZ©oH¥åŞ Õ‡Q\[î éV¦ÏÌ{Òƒ WtÉzj#Ó[Æ—Î¤›R®İ=‚¯Î´¶É«Ó,ŒïÍæM \“"²C•š 9Ó’;È™¬¨hŒ¹‰8ù-4š[éÄ¦k†Jëö	Dİ)ÜékY•OZ¼…dÑˆí»êí^óZ¼¬iĞ½ìéK¯¶Æ€¾™†6ò¤XÌ®mìD¦E‹¹ t»²feøèw¬ë~[cŒíÒ§ày°HÄ'Í¯’ö¥è·üğ‚šªïZ,9ÿŞD¶ÿş}iæ	o­px`İ(½<ó£æQbš¸È4²êzx‹Ğ'Éü¢Qo¶ì#ÏÇ=~­åÄÍ~ha£cÓ«"û<Ã•(oëâc¢ïêÀO$Ñ%&Ü›¸Û­ñw9·ìÌÚîáf-ÂÇEÄ9X.X,Y¡ƒKßÅET=Æîš´»~SUs…æ,ˆıU˜mŠ¦7”ºëp­a€XN®våÊæÒØ=9†bb8øªŠŒÎÙ,€Ä¨×PâLç‡¶Ø¨³\QÍ:ÏYŠ²öò\¨ÿOAìùóìı1#€;ZÏŠ+šÊ¡k¸h(’—yöÿÎVL	êp·3®UMŠ¥µK0pkBŒ\aA:±X•&{šO*âõC„¿%ˆ¸Ìı—å‚Ë~Ë¿ê/hÀZ‹±jş‘8•ÃGFpÓ†Œ!®jœG9†mÎ&oÔŒ»ˆIdĞu"¼¨müŒõÿ#3Üoi—
qób¥T½iìuºWGÆ\¿É=µIºÈÿ<®ÜÖ(“¡ı-hØ â»RC¦S*S+Í ,¹«_MÕæøš>Îh“Eı4ÌóŒ©ƒH¦jÃ\mXNjQ²–˜Îz6Hšu·ÃÖÁlDÀP¼OÛ*£3pfÛ¦Ú¢«¹ØŠ2¢(ÿ›!¿ü	b†|c<X+'«KGKÌ„â]L¯¿=Óe’|yá4/‘/´+ñY/a•&:FxĞ;
Ú~?ûæù:5+é…2Â¦±âêzèòÑ#§Á$µ@ã"P	á)ÌÇ¨&9•ÏÜ’PB€»]ìÿ°°¦öçARÍ&8Ø&¥O Båæ«ŞuU†°kÒ¸	?W×fîyÁü:$@W#ˆ\m¢¾Çƒ¢ĞäåUÔ6™İouÍ$ßD8¢o*Ü/<ÄUçÈêÀÿK/A_1¯f[´6ÚìÀén®Œ+…IÁ.Ñ™mìÛAñN…MY,µ×Ëñw3ÖÊéM$I9xïƒA0Ö–x@¹KT²BªÛº·Wëo¥¯oóğÃ9lÄ‰Ğß®[Ş_Ò›OFŠá„ÑŒMW”áXT˜D¿-’Nc­NâÒëµ',Z>­=á‡ÃÖ-ls­ÕT#¼V’Ê|	[ãgìÏ¡ûıö:Lc‹­uSûJ4}{åI1’Bg6ud«¯ZUIÂeã8ĞRo<„s` “¢O+[ÛI6y¿[úGJG5A
6CÏ4èeRer5 Ú
çCª<(¯7Yû{‘pçÌwyyõ¡OØ¾¦j.aà{ öWæ³,|â&˜—’uòDØŞ3â^ôÌI Ö”¿FÃ•F«Ïÿ#~Ëƒê=tI\ÎVé%İmR§SÊh÷Ìàıæì/ü±j:=¦™YbĞÉ4/õb9EíObù˜’³p3é@¦#kÃ”Ñâƒ„¿Ü*™h¦¹ºnš#PÿU<bÙFß\G ‰u#/roÕåÙõÁíâ¬½`S=Z½CàS¬´æÎªğ?(Œ<$¥³;ŸhL
ß¥.ŠØñKE&{×üQğçÈPÔ¿?Æı,½v)}û6íî•İÖ?GP`Ã´0@ÚŸÂS
t…_…«¸¶şöTj¦zÇm~Y|å+35HûëƒZ4Å?ß+¸Hë@YDK.ÄKsÓ‡"g®±â<×IçbP¬ò…cP{…Oónß¶—Ÿ9ÊÑUyGA£ÜÂÂ¸f¦¹@tOqsÆ<ªOºı7ŞÇ“Î‰¿e VB»êù‰,¦I>êÒ…öš@¥t*Ğò¤põŸfTdümÜBV°«GØoJC¿u&Òå›{ørM`»cI·Mü$áélãt¥š$„H©IÆ¨–cx®¯4 .Ó(2kˆ8r—2Û±Töœé˜|b×±,^n{şm
Ö[ÙrHãğUtf=ã™0 ğçrì
t°•*ûÍq$2Ô¾eä|¦?›äÔ=>ÒÛÒI{ğjD=|0sÔ`\4üÉ‡ÀXDk:¢gÏ7rUt ”>*­yY?‘Üä6 ğw“ŒpS¾KgçYÍ¼ƒ|Æ†cÛq‚¹ÂOL‚‹ÈSc±>&eÔé|Øy-Übª&å÷¸SéÓ7èM>ã«çFn«¿’í Ùş¨v«¢§
.’£S­MÌÚªĞÃbĞmf€bCW‘ç9_ö>“—l€k=¬OíBF%ßôy/Li×Å¦èXíğH€>Huh±n­ÙÙgz4C{qÙÏ1æùüÄÍÕ‘Êv”$ //şI€s’.¤®êË'í„ˆm n3ÒˆŠ–h¾"	ß”°qã:¬šDÒáñ×‡(­Ñîš$‘‰¡1úo†WÚéL+K 0< &@öÇ`şäÈYÄ ^‘Š	A²pÕÓî‰Ïë¢fHIV½B|,†û2™‹Tz¢··…Ì KºÔ²èY8«Fw½‹ÿŠã­ŒòBd¨1“R±;?sy¡nÓ#HnK*K“—G‹ÑÖ€Š0ßÆß#­ã,\ªà÷(NÇ]¦\ŞJÎËŞä0_¦r_'‘—êÿµšc‹´|CA3íu‰1{ûÔÀ	¿ÛĞ‡98¤°ã1›-˜àöAìñKl:°D‘çK…òö¼.†Ë³ŞÑ—ˆÇš’L®ÙwwS¡RÛ©5eˆşøøR€õT5µ
¾+ÌŸ¤çrˆpó	NÈHº+ë6Õñµ˜”…ó:Jíg€ÁG¼‹øYİ‘;”ã|0¨½É¦Î ØÄB¹äU‹[6$Ûù¢ÚöI@¯[ÅÖu ì'òÃù=© ôx‰Œ9tËõ¨ö´\àÂq¼‹ğ{Qfq^GWYô%ÖÑb
pö-ê-}‘íßo˜ÌtßûÈ´g}5ÓÖ°Šk÷PŞ7ĞÑ^ w0ìóaUÿÀ×""ÈªX¦Br¿È~óÖ äÙ˜ì–Rr‹Šƒ*p™;K7r%4äâj2 i{‚t&
­Ä’o@¨·˜›ÏÅéõòJ_ğ@z¡X ÷tM‹H|v¯Z.Io'Ë´ö4»®ëªÁ¤7'—©,bpõ¢î¢öImÑŠ¦iéÖnÆşìÑ4Z1Ú”eâj|y¸¯éÍ%2ùP:ep¿_Àä¹º96şÃ\•5èà	˜~´­³åãöÁğNÔ¥ã>i,oü¯÷›]¼åA‹ìLP] ÅpigÕ”qõb¹Ò"jU{ÎsàŒmèsS¡ò°\«ëpZmšÃ¤[úò°_çßrgYn^ş`Œİ·ß¶s·¦İI”'Ò!]uINŞtzÊµ R;>î&@ä˜ÁÏ;ØÀ¸¥‘ƒîR[v¡0BÖ±¤ÔŸÙ‹úfsÌ#ê5ïuøÑ‚½¥»Üâ»/F«•®óĞĞziÏÆ‚,'ñ›8óº©®:š|ÉÚ:¦~c“ğÃ£‹+™æŸ_˜…%(×8ä§³Î¿ÿ~!²(ê2œï©6ËUü{2›Ğ3÷.}A4ÿ$W«pvö*
±7Mãµ[EÛB&q®'ÀYÄöyEvCÃßøáíS wXP[¢E­#²tÑ ËË‹¡Ô»"¦ÛŸ+ï—­	1ºõ½ÈÚdU*ŠñS\NW~Şèj‡oÒaô:„Ë4…q$-@T#©9Õ¶mª€ßXĞŞ°i½¢;!}tâ¹ÓÇDæX$†²â²“¤lÈ{tıUÆIjšm
äÚ;„~ÇÈnÇ“~|à:)RÄÕqæW‚`ó¹U+ncuÔü®®íæ +ĞªlôTH)­Ç%Ç%¢×˜'íÜÓÁÆş©c³¯—¼Ù‡ÚÁPìÓ˜ñR:~šz‚W:ÿ£j&Çîj·wQu¤Ixæ7ÁéÜ·y´¢+q;†økÏ‘4¸^µÅ ­§áoòÌ,–/ƒy†¹¬&UÒ<ş@wUM¥D®Ó¸w=õ9|½ğÁ>ÊCëh)Ç˜	šèÖĞÇÙïåsº#3Ò¾Ô_x”Èë&ù¢Ò©qŒ {€@~9
Q°{ºt'æ¡–„Ò6tÖx«êÃ{Š´°2(Ÿı ÆpbÖöĞÈºä¾Ç…[ÁR@,‹W|×Rƒ}C—!œË¹CaOİ”¨’WA&ºf&ií!¡>WœÑÙ—SQó\¬¾ı'¼c"€ÂŸ9N/Ìêf(1VP5Æİª_G"*Üæ} •ÖÙ˜+Q)JˆW*Œ4Ú5³…d:x¹î
r;	¿Ña>NpîI«¦ê©Æóç>J)Cğóõ
%Ê£å2|+R.ó5X‹”‹`ÖÎJeÜªgØàµzCƒû×X'Ey4D:´Šª¥Èl™VòQ*ÛKpRxö˜h™ÈD‡ŠÍŞ(&Q+Ù¬#º½i“ "iëŠR¬]®.Q#•a—Ò˜şÓ4V•k%Èuë½…šlÒ¹·;=¸?8Ô7-Æ/{Óí/¹¡¾ãĞÓ:‡—ªÔ…ª[j7äØ±"Fmì*FŸ­:RgÄµÊŠ@t ˜i…lµö•åJ„ëIÚ†²ïÆñ8÷G¾…°HZ4B9Çr§b¥(}hnÚº|xDÜH[b²”¸ºQkå8‹&bhPeËE$mßÓ†ËäšŸmo±*É¼Ä¦'?pOşx#›Ó¥»x3CØ¸sM<K¹SM_EŸYF=ÊJt‰ÇÛôL¨o•S;ñI©Zw_l¶˜°	`(~xÛ1W;±J”!áß”5ù=ÙÈY3[ËÍ!8‚*šÔ!:ÃJ=ğ>”ZsA.ßÇgÈ"ÀH—B°¾NßĞ.	ãd{Ö´})‡’èìÿ/]§‹C*lè1VA£@^£^ ’ÇAiec–!n(Ú\¢µÍÛ4uÓô*M«Qû=æ7:øP}â¾Ê§´
luíôßêñKş¡ÚwÂ˜üe$Øœ`_¦Vo«Îçú9õy³h’]-»ÃÀ5÷Ò wrì_ÿ*w6[””ı1Â¾.ÿàOH"|¦q9†Á”¤#Ã‹'£"ñÀ„oòtì!!¶= aÉÃààS:EÔ›èdiï¿CğuŠ[Îl°xlğkCş‡à…^®/~(ä±ïÏ`^ĞõÊ©tÇš­ØÛ}Évm‰¬İFŠÂ¿@Í¦{rî2‚ŒbãÂ 
é58•mOØö×ÚØ¡Â‹z–Ÿ…S²®¹$3µuô †)i§ı\n=İğ÷+œ‚VU›çæÄˆ×_Wı·Ú¨“N=b>ín¦Ï"Ù/
pÁ [d7(ù£³…V®ÎĞ¨ ¹ZdRiŠ?]Æ7y…Då’h¨éÔ«BñóİUÔ§¤eóRŸ/lôÄjø&P´òg»æJJ;ÆÄuš´=)ôÕFÎ0»…òçV[”Êk9ªì½ïR›)JHiøº],0<«Ü™EˆC ¦ÈËëñƒ²Õ[àçš_ã²?»Y¸ÊÒëßAVÌ{Ññf>{©‰7Û@bë í3ºXçŞL òè†I•?¨c1Vˆé$ˆcƒ™bìïŠ@‰vpÑË2ŒØ‰8ã´Ñìà›.ÃKœ“CLæ†«:~[×GC/‡âİEIpÈ­*ÀÁ	Uş¾QÅ™Aá‚£~U´N	ñ™¿î-O9‹œz€«@3aÚ£ï¼Ô*ï»Ôá(â£>´6ÏÙ}ıS¶ÊÛç„:vâÒ¡ÕÍšëjãeFï.m×üÔÂûÑhøÄè¾ë‰¸½9ŞB™*\Å+¦æ p´´—¥Î,ÛFleı{­¬ñšï;œ€²ˆåãÎnÃHSYeøˆZÖ8“´G4®,Úcª Š`¹ Lr¥g¬ÒÁ‰ê±O XøkÀş>²<&ğq+/6ıËØ·&ø	ª-g+kî3á9ÿ‹üU.Èyjê­z…ïHZÏ}â?%ËÄ¸GS^+@ÁUWåªE§Ëw*Ñ\Çd&éÙ‰ğ6¾àbš\Å¡ ûŒ3‰&µ!ıÉï
Í^ q\p«%Štú§’İÕ©DHI4J‰A°ÿN­–„×øhQ¢tûùuEô[g{¹gmJK¸Iö÷(ÙCÒ=³Íºû• [ûóÏû=·ê„„õ.¬.­ü|3ŠŠ¿÷÷KÏ¹/`³‘ƒ9&8ò<ÃP¸§ñ\j0.øÏôµ æï™.gºZŸ´µxÆ¶¿^áC ®?óğÕ··“÷à_ÿ'+îîBöI¢0ş¯Z%xûjşùL²zÅûFaÎ|¥¼V™œÎ~øs—S2ÂEğ¹'vlÜ]†›1ğ›< YïÈ£ŞÊ–˜¬Ë³¿HyÛBg‡ <î¦ÑYçÌ÷ÖK†£e“$h¾|jGŒ%·¬ü/äM[pe'¤€;]†J>¬‹"®çÕ™õóX®1ñ ¿¢ÍUœº0üƒ`@5	)…?¦W×®Òe—@\´¿µâìüûSæåœ[Üæ%L_nA<{&©ÆÊÂÄŸz’v.ø5¾/êK‹ş“Év–Ä*Å‡¬{ô9%ëJ1OfAìZ)Õ6ÌXLÙ?<ë ÉÅÒ¹bùN–AxñŒ—·f¬uUÿud9ŠÖ¢«5×al£|u—ArK´ãÑêCóO†˜Ã›³vÊvE"!(Ù$}ı²jc½,P2ö³lÏbc‰SêñÇ®S:ˆ_zªè"Êz•7Ÿ€œ²älÎ§2oº.ÜÑ9YT°Z1İô·Q÷ÎKĞU.Ád£%¯Há?¸#‡'ó1¢yZ–Áå´ Q‰¡p·©°\C­Şy£Ÿºæ-t+…uÀ º$¡·/ı½Ís‰®/¯áÕ{¸TTä>PA6åš,rµû…):sÔL…¨—¡RDn¶˜ÊÔæ’©£ÈVğQÍ0êö²…ÉmZ ¨ëqŸgè¾­¸L„#7t _UÍÜ¸J…UŞ~UW\ŸèWlÔ_=&Ç|¥
tÜ:2ìPe:]	LëıÛø²Ó@¦îÈfÏ%½ˆcÿÙÅªêXbÎŞ¶:³ı`¿“énO%l»±l9©}6-L¹3*€†Ş¥´¬0…ò¤¶ØPÁ:Ô¤ÃBC:ZØœ?ŸBß€*‡–£Ğƒ¯ş&>e'«PJ½ØúáYÁÆ½çãaü•Xó¯ %/ëP›ÍÔ¾_y«ëÚ[°i†‚…¹¨5–€‘ÒÆZ^íÍ}¼4›ßÂÀù7$yw\ÍDTEVïùÃ}ë¼oì¯zÖ¼iğ8G½Ş¹%QÊ¤¹B”öôºN‰¾Ä¨YºÜÂÜ>úY\v-r…Bİè¸Yc+‚á“$:R¼ÄÌ$ø¤°3ŠNiáUåF#õ=¾è&D¯2FŸğQÎšvæ¶‰+ÿõÎ¡Œ*ïF;ŸÇ?n.2ãå¬“ıYûUG¦ığz¢ô˜ˆÌ”#,´ÓÍgÑ–le~ÓJö3¥3©õöûŸtîü¯_-¢õù@°ÒöN(–Q|G™¶D4÷^,\OÿOûº¬K•:}û~«îè"S¤
2ÛS³÷ez–TU÷ˆóù<İ7>˜	æÊvKÔ\ÑÚS!"Ç˜ñ£v­(=â¥{%Ù|)9Gã«¬C‡µâ¢9vïD iŒ¢ËÀÔ	ƒ«!¹İÔ.0H @8ÊP–‰ƒ‹²QëÓ¬jïx¶MV\Œéxå(
Jh<r!’tnj\’Rõ¨
(—üÆf}—¹ £*PËéyö¦ERet Óù5E¤w/¢×³lç9RÑBdd?ğñås?Vèç5ï×;o_ *h=·åÓ·‹ùÑ¤Àå)ß"·hÃÓ*Ô¯1DVñb:´’é%Ï'	$×ÀÒ¨ÙN³÷#/|¼‡»b
-ÄˆÓ¼¡Õ÷vãJ.ır¤pìseÏ÷Ú¯ù²¸07+!«[ng®BP¹§˜yb!-ıfâÃUè€&ÊA	[û[váÿb™¿RÊ‰D|1™|Ë¦u¿¬bËoŒ.ğ­’ 6AìÆ»«˜Ã)ÆîœOŸ´3`z…¾gˆ	ì¹¤7R4W™ºÊ´²„½ê¡xXcEAátE'é@y ± Ÿb›"²«´ ¤Ÿ±ØLZ—5ìµ‚¤ÿŸÌÌ°öœ?¤"dÊÙrWĞ"Æ—Ôå-{iÇ¢-j4ıÚ«íÀR˜`x& ]İÿ]ÏTÊGS{±e§^îPîm³•ä	÷KJ°'=ó€…	ŸıJ‹Yë7Òf5Â ™v¸¤/{yò†êÄ}X„å¦4¿±H:ö	_èoüD©
yÈ¼SYücŠk…áƒäŞÖ0İØZ?£lÄ‡úmâ‰ƒH»ü7a£šÏzQ¹)„fĞ”t»êÊBËºƒhÚèîªsN$¤QìêÛ›)~ê°ŒÜl¶:ÎO­1ÇâEy\­MånÊéPˆ‚;è&åç°a#™í‡Ñ‰Zcğâö±šÏ® ¾]v>4$¸âxÄÑè‘ßR:E3ZH2ÛÕ*Z¤ÇÔ$T <‰e=/‰£ÀO†ÖJ÷¿êÖ÷\„ÑŒ"(&[ğcaŠÎ±HÊË–ê°¼²„4Ÿ•'NUN®‰ìæÄW³…Áocbj#!H>;ğµ!Ñšç±Æ'/8µ#m¯Î”¬RRçğ¦İ÷Ô¯‰\Çê.!p°5&Ùª5ØÒìLşŞõ¤:]W3vÅée{Ïqç¤q_ó#¥şL‘ ÏÀP`•ZLœv['2±¹Œ;ä`(~‚"U tSİèjÇS!U”è)6¢ïÇJ¬^RŒj®=“Ì¨~!¥;¹A×H•rÈûXúŒT—îÖŒïlM3,F‰«b¬"aÑş÷ü&Bf{éI›ø†’Â:oòe‹‰~ŠQ;‘GUÄèÍñ`f,µ½2–äá.»M9Ê$)iŸ4º§›½!Ùç,A‹r°›Á:ÕRˆq¹<s"¶¯vó†?º¤AêçgUái‚)¬á»”{qTÑnÀˆx
jïê*ĞR<jâRâ¨–­CsËÿÅ•ynb§°c²g»n¸» ûú%ÁA+Ë”^c’Ñ¹Y`¯Qü/ºT°¥kı‘òâtá|ô;æÀ[ï¸†\z'C®3›{ÆT7°ïÕ•fv'­{c¡_k8Ñ“Ègÿ`û@‡ÇĞxvJùUî¥Øô·H!öo\NƒàMùb»–UDõ^.–ïßº¾Ô©=•[sF4ğg ¯1QWğ£î{ŞÉ­„°3å¦ÿ¡*"Ë’ZÅI8”çş[ÉØâñ¸;¹zÿ¤3 oº“L`ym°=gÚ94å 
|Õ¶÷>ù‡#gŠÎâÜ™ÓtØün8ƒM´u¯)JiZ#ˆz~±¹ÅÔ8èë¹M©…›ÜW->Üd‚rF!YÓŠ±‰wù’%”A•Ö–‡mÊ%³¤¤âWCÓûU¿W:¯Nlp‰((;4àK‰Ø	–ú3äsıÆ×¼$§SWÇÈZ¶'làÚ¥¸(ØX¢¼Ò$xF°[:Àµ@L´p´O™q–Şv¤Üw¸ÿsÉ“"­²,zîY×w¾!2#%òˆús'ë–ñuûCÆ&B¿ïu [Mà½Fÿ³ÂšNõuáPEU¿£I¯eDM[{‰ŞiIÆÜH÷ÿi|ä.è‚i_à.æ‹•‡Æ8?…Âœ¨m5Q2
Í˜„ /ã…}¶,ÔveTÑ†Ì^]ºåó›LàB‹ğ‡Ç)*Šª+%/´Ú×âË7LÉ}mú•ş\Ø§ã¹ÛÛÄ¢îÊJF*fÀ%m—ù, Gn¿<YÙF²z˜:=ó²~½,#	|á	D(;µ›-8qñH6´şS‘ßBL{lLÑÎó˜eR+•yGÎ Äœılçß§·
Â‰‹Tü Ğï5DœcTPcIµ¯š CWmÏ·mí!“>^şÆ[i¿‹å÷CêøëZ3¥ÃLş‚b·ıÛ	Ãjím”’Ñ’ ‡~9RZ½8kö<½"­µÁ±W‚¢*ğ€¤Õ_@îş6pÖC†<xĞsPZ¼í‘¾Àûë•Ñ LQ]~‚œ®	ÎSıƒmï<ÕY£jÃĞXF„¥–N2ÿŒÁDÀBp…íÏNX’eƒ6ìÈB·Ù±ˆ'½‡†¨¡­LCV%€P´LìóéB”LzÍ‘‹È]Òø¾X1¡0È+ŞĞ*OÒÑà Á‡ÊÌD[Ötd÷kLWº&yl´ª/)ÓñÈKT‘Ç,ø¨]œW–´ñ³u‰2©‡“ÈËšb‰,Y¿,>(“’Îiˆ_9.mªÔ¸<q!ÜŸÓ~ô%æõD`^e&[»FöÁŞ^kÜëÈ Û™‚Ú×uû¦yAhˆ5¨}82M/Òí.5]¤+lªÕßò}ë`Ö§äò™°@v«Àœ4p	8’¥6†ˆ³	RışÎ¤cz%ïˆÿ3—¦¾Í©ë$L`ÂAæ;…`¸_v4
ôÙjÍ^p;¯´ˆ×7ğraOz˜·Í€ÌaéGûÅ‚á>“ÿ:) †ŸVíHWf´ÛoÖ†}dñ‹#³Ï~ñcç©¾h5[Ëì¥#i…Z¢2¡ºÁNeùÓ*…lOŠ¸:¸JÍË«T«ö¨Â~Œ£ßS‹VŞÓzV§X­tVqTğÛ6à.ˆ˜-HHme·i_×ÍÕ] Ä¯5>¿ı1Ù*|³¢gºj‡ÈŸ–ñùOŒGOóş7kÈdw:¸¼-“zušª²ğ8‰ğ(AıŞ ‹¥xœ u;eó•óNº»]òÆ¬»É Şv7‹]•?•ƒH¹Å¡¬ŒóK>EÅé„¸ƒÚcÙ?H$r0?X««OĞsüpñml¾3S=£)‰±~–]xsdR'²ÿ˜}%¹®Èì²±ÎhÇA=Ì)Ê‚2¤ã•8K)I;`iQ<ŒJw•“‰`z(µü/=~¡Ólaùª%6Dñšnä¾ÏmkX1ö7tÅ±ı´¼ÌÙÔĞõÙ¡sênkìş³¯
5b	M\€wcˆŞ0™	]öú¡Ç&{OÓpù«,f+‰_{'pÙ\qkÈÔÿŸü}ú”3!ŞëßE»–·jgİCßHàÛfœ©Æê2nMMÚîœÿë“A,9Ç?s5í^üÃ
Ö¿×§œlÚü÷ûÚ0#’¯¹ÂAëdg\d:YlHwDÖ¤(ÄR/üDLBkÕÌ»>y DmĞ¹ˆô¿k.Õ&àÓyò<ôaÆ{h'ÉÀs†v×Å¹Xæ,ÄúL ŞÑDÌC§Kr2¸İ9AïQŸúï«5$šœ+ˆÃ	Eÿé*0¿=€äêuz:¼›«-$ènİ€óFè-ğ³èEÊ6îÛ‹Å´Çñêåeø«ÓHÊYÙ´È‹NĞÚ—a©ä×zQHu¤E%»şez‘şj©?–Glë‡Y¤3²Iu‰txƒü™Ö’;Ï)œKçbÄ©ÂóEhØ¾7Dà{äº‚‹7ªÉc™RªÓù~(*Ã°¿ã‘ŠNdŸ_eƒé“Í¦ùwˆIÁQ•ßb} İ­g¯ D]ª¥J¨[íÙ¾ªzó”³DÂv¹"fËE°gyV$÷Ç¸ĞÅĞaTÉÕ"ûÑôÖ’Zu—`—ÁJ|ÿ¨7W¦ZIDÍÓâõ²
nCº?CºÛ)<~èdTnåCjW<PÊJ"'úLÍlvã|¬ÒDêšãü…Éˆ*Şè»%èÀj‘¹nªvîN‚ÿ¯N‘ğ‹ÖßxƒàF4¼ƒ<×<M·â•`€I‡çğ4MqCJ\d;ÓÃ+¼«‰eÊ3òüCÏÙ“˜^`­¤‡Mß¦“àÙ±u9zÎËkŠ$CĞÓ«¤4$T7ØxºPræ’ƒÅ«·Ô†5mŒ¯[ÎÇİ-6z– 0MöY€M?ĞùRÃÅ3õX}ËéØ×†˜sN:I´¥4-|ÛŸYÚE2ıÅùQïÎˆäĞ¢.ñ¼jµ6ÖdcäÍ1BöS=\9M{ ø¯G—ÔşÛ91àvG’ˆ—K¿JX56mï&hBò¿Yv+Şû	m²An£ÇißÇ"¿€ğÄW+PàNF‡F¶©ì,­	ƒş‡ Äí'õ½Ë3?bwg÷šıNÎ X³k<g4`êœf9>ò?„z‘Ì9ûú·ğ`ÜŞİèf²ÁP¨Ï4^i|a­Ïübëò¥(Y~ò>í&  Âd¶Ë`'ˆ%O‚@\ÓAÅ~´J,#'ˆ^ëŞ®$Æ.G²—V©h¹l@ÊÇáŒ] o0ºiÌ½¼I¢½à>uÄı¬äãí3’N÷#ºùTx²Ãc"…%ŠÀ®•î‰ºhE-yäª#sCQmºµ§¶äïÎƒJx±¦vˆMè™ï¢lo³}Ö¥ìª -ûk
Ÿòª4~àÇèC¬×ìÀG/…Â¿½»µÍN±`ÀÏä6°
CıöµÿêóLùË6±1Ø?¶ÖyŠ½İjÜç/xıÅ]Yu«ÙÅ&ÉB™
Ç-+XTEŸğ1õÀÏÑ s†£³?ÊX4ÿY>j8ÈÆˆ£ûÀì°¶$v½¥•lóÚºåe@8dşİĞéù"$gÿÓ]r¿Ë‹iÚ^Åv5ÖÑnkŠÉ§ı$>Oa»±$H™àùˆŒLK¬ç†Y‡s¦„"(Œ–öz1½NKağµ)V"b™É€{I²ÔÁØíVSn_Áïqcº]:V$@ÆÒ™Lc‰émˆ”«V¨wt²å€ú±§Mp’áZõ¶²CT2%íù~ ÈÚâ½Eï»å”¥HîWæˆİ*¥=sòà–ÿp§xâ¹9Ğj]•  6J_»U†¦»ôP…?ÅO³ÄÂŠU+^Ém÷Xe9‰£”!p´É¬m¸7S3µº«!µŠ÷ùJ…càÜTœ±>>¼—ZƒsN,²t1Å:ÑÔëÕB¸MÚİ„jøá`ªÃııÁ+hú¦ÉkïVÊ¡ÅßVìE ¹ŒÈC³‰G¯ˆGhé²-¼£î/û1î	UAİæ¾õvDŞ®uZû\AòípšÈÆ–^aKl(½!˜i„«¬Š[àßNûQJY¶3%§¯2+ÈVÎÀ(lÉöJoä(©ü
xÍgZš“úNît)>æ+áÉ:›gcz“ZtO.$— %æ!¹ÏÉ©/ ßÃå ‹­SØ‚¯á‡|¸+H§/@ª*ÒSeåúÇŒ{Q¥HİÛI&€q¢‹¾à Şœ‰“f‹ßNí~féZ9MV3q0»zÇ.?Œ"U2»¼%„JHƒb¡W6‹1Ä-~Úà«_‰íW¦^°îÓr0z_!ÍÜ4Á—
ÜêHZb×ŞhjøŒqŸâ&/Î*£gkŸ0)úx›Ò)†³»äf$¿Q‚Ğ. Ñ´#ÁZ°É—ÿ®ŒüîÃ˜±øİHaG	-®o©9n,†k„Ü­Ïq5Wr{'n¥#Wc7È©õÀÅo¢v Y JÕëåîd™AÛJ×$ y;GÍÜ¡ }'ö?‰VaGÔUÃR}é-6:g×0Ä#Ò:´÷×â•M3vˆ°-B™ A·–W#b¹£{O°A/R-×ô™<9¦Ò{¢(´QA^n¢#Â£ØÜb‰ªöP€Âö Q³JüÃl˜2CV=C¡_ÑŞeÙøÕƒè^£T1%ô©zÖicrf›ˆ|1ü3¥ i]U«Ú_Îí 3Ú=ŠÃ<¶%ìË×ğµø¦ß›‚¾ZZÑ@Ì¨2ºÏ4é…¸âa²ì§Õ~ŒŒĞ×ÑÖ~Ì¯ÇUÂû
_ìüğ»û£M±å¥nQTíBÃ[ş2‡^/«‰vb}î„ĞâA02h‚!?æv—İä[­AX¹âY¶\íb=_(Kï£“ıÒ‰ĞGtğ…Ï`±ß«Lo>ğO<[("’˜İóŠzôXEÙªÿÃpÃ¬âú?zœRÚL!w:/é¸4ğC¸lg~T!¦ídÉ¼ºOäúA³gºÛı_ËÒhOn.á¡ÿÆG¼I¤PF½Ví‹XQ¬<G±uû¡„E”ôëCç	7ü¶_¤UüZùWK9ŸŒ0Íå?¿¯+÷ºA÷ÇV[úbä}%1ÅÄÀ†åêóä!Ùûhyh³êIõCë)ªØ"s€á
Ú*¡ÖQ§ØÊ`ß£­M
ziA­pŒ8„ëZ´<™[¼†İÆK¡«`z/´éÑ cÄC
NÜ¨¿úgóqrşÇØ=ò>…2eÙ¥è4ãß6oeåQuâ2^Úz^ÀÁIò„Xm3 ¡7bÃŠxãTÊ•ûáJy‘Z+«¦3y3Mb!£9êªêé£&~4µ°âv •¿Øk0_Ç°ôà1úÃÇ+x)@®™
[ºgšëöòMF6¦YQœ@U;³ªøš š9f‰ÿyÑ	&=ğ·1Ëy|°Â àRVh¦ŸÎ^9Õ+š¸ÆêT2‰NSˆ1[ˆ5ò«»ñº>jr¾Ö Ğ4k¬l'm`ê§èê}‹íL_Z)“„B§Òr>:pY†Ön!“›’ÙFÊÁ·ÊO¯5…+¥/,QÒFè3£Ê‡'ÏYó©;ñ¬);ÚÏ¿ŸÆx°EÍüâ“®§H× ¿÷òŸµó48#çrEÓßT®bÊB’w	›Õ‹î§?”*×˜PÇf_ /«î£¦6÷ÏL¦à¦wí’•“£ğß„#*j«ŸnŞèW:è×(W×3Âàêè¡…÷ªğ‚õ*ÕNv1s•a4Ë!~ûßÉ@/ú†–‡•ÙáÓØT™Ä°> áéwE*lÜ)iÃ5é»aQ:wAHè¡²Ó®)g	€è<³.1cÙ2l5sz®I2HP¸½GUf¨Ï	¸Æy{XİMå/ ÒöG9sW²Na£#
RÉ[py&™[ 1³ÊkµÕWä/qú:—Íïó	ª×%q±G7óÉ¤Îua!>Çp°°Fş¸ä§ÓÚ‰Hôè¹â(ş<Zì}6†È£¾è™ç‡p8š?Ühz„ôrÙj‡l`Od«²/.)Nõ‹WÉ)iì†›q/“<s~ø"<…Â®ê…›…wNÕ,Ö›­Zn3ÀİÚî)¡ê¥İFNóÖ‡ûRÇÜ›Éh{/#¬uâ6E¡Ç|¿êŒetmõD+¢Fî=ëªßDîèEp¨çtòh˜5”+õ­¨”nb€01aS+—JCÓ†TbZN"á´^^…©Æû¦?Srg•Oµ#R³àÔ›iöã´ÉY...€%I‡bÒ}û~’® Fm
Ã°è¹àõ`óÁ]^ß†€–‹»#“ÃÅŠ›¬ÔJ‘ø$XiÚ7	Iú¼ˆU´,÷12ŠR¯Ü½¨Ş„†êÜ–29|3w h#ãê™Mû‡]¥Œ±‰	»Üè ÏLë¼ªÇ…x…ÖÛ½ÀÖ»â3¨zUá :,4
\6.’Pğ{ì- pÏ\‚JGø™×fÛŸ"u>
¦V®b?¢Ÿmá+7§ãâ&ÙÁ67Şmê8¸ÎKŠ£em‰wäÖc^¬ÊÖ ÔuHƒPyÜíâ<79.5%¥"€õ³¯•ô†ñú·ı•À>z
ÅÔ{GägX$ÁvÌ]ÿ¦_–¿{Jod˜áÁ÷ Ğ© q½Ş¤Vğê%tPæM“À@äÒñ^dBF›Ãlæú×„\Ë=¿T=2hÃê½)!ÌÑÜ§®Øêc55—ë½oÅ÷shÎHA+åÀ)oºÀÕc’"›Âî¤	-Î¢ü½îÂ6%6Â§¾„¬šJG×ªĞò:÷%
H?âËÓ
´ül¿Ğ3B„h›UÆ™x#@‘Œş2ØÊ¤#?HS¥÷YÊLÄ€ÏŠZ U‰²êi¼!ÄP´Â3½´™ğYhŞ´[ö­s­I 7†¥ÿü’;&¥»l}
IÁD¹A¿ŸèÈ€§¯áŒ=ï']9?¤² ;±8Øós]…xAŠ†2EáÒ³İQ~u­Íµs‚¥VŒµG¶Õ7İ ‹X¡#MÙv÷•pW½’g˜rÿÈº%¬ä?ÓÖ@•Œdxæ|ÅÖgùAy¬Ç·ÊƒúÜx#¡$«~ÅâM¾3³Ş§í^<Ñö®Šİ{r¬HŠ7o5rÄ±MÎ÷¤ÄË’AZy3N+^­¼–¾Íµ†Ú«•[òÍ
ıCåçx¿I¯`.…«8`ÔmbOvÌ”VÓl”Xé4Ÿ2v‘"MÄ­Ê' +1Ğí'¨¥CHïö·ÓL€›+iZXÑ+H³‡›gÚ-?uˆ­;‰Ià'yİƒÆŸ	ŸÑ_"~Ñ1ìğ½İš¸<c‚]ó	Í‘††3I@ñh¼Ü¢XÕ7wæ†Ÿ<Ä*ŞSİä˜{±lÖ—ır“Åî‡Íê6.5á¸ûœ:nO&j}ë õ-2½]n¢áq›ş¢R¨Z­*VŸê‚ÆàŸ6«>.®"·dy¶T;<Uùaà¶7Œz"…ÈXÑØ®°Û´EMÄ0HÇÖsP€qÎx~Fç4¬G¿ão[´¤ÚìèFËl}åSş&–V½Ã*í½×1ô«ÈŞf¿aÎ0EıyËuCêÿ¿f¸ÇÜñ†'È"E*åmöŸƒéò)W$pÿÃ“ÔÙ0²~uëî¢‰PklØ›÷»¿°G'„}ŒR1ªiLœGzŸâ$Pe_9Ò@êŸÕØOhEc
Ğ¸d€ÚÇÑ:ú³IÅŠ×Ä Â½ÔÕß[àM@Ë¹Å‹W&3 `W5}ĞÄjJ¬ó2Éã÷	±ƒE°S$¼l’‡Ø;2ùÌahMŠı¡kî)²+ES‘TÓŠ4¶œäj‰¿ÇT."HÉ@	­w§½mæLøó:Ñ&î¥İg( P.±*¿ öv¥áx»=–àÔ¥ „8W<äÑy02.ê ¦Ù… + @ÀiÔ&—ÂÍ6–_ĞK‡j×sûíÄº„TŒ¡fa>Ã¿:qˆ†]ÆÑMÄCÉéV™pM@ø¹R…»Üäçz˜SQMãóá-Ò‰O“KCácıuöµBk_ˆ6±±³–^”F)-j~çyŞUo–Ş™Õ£¬¬šØÎàîO¼šUïCq±…C¿ß
ij´FÆ¯xâü!ÏŒbê}£,…L–0é3Á°N¤~vı^!1	t|Ôo­ ™!<RÚ;IK294NèÀHÓBúúÏİz>ç¢Ñ·$ÔÆ»/4P'Â`™îÑÀ¢-€Ü›S0nİEú+Ê«¬RY´(]©aD¶¦M£y¡‘sCı“ËtRAµÙ74:»B
?Şì1—K¡Uõ0R¦&ÉŞG‡ô¼7¶ÜØ¦ìqŠÛ¯'_.æ:l%ÿµ8,nc=«ãkğÅk«×U+û W­ŸÕØğZP´Â"
)'04†®øü
—Â[–"ÂìÂ0Õgï-öUŒd=Ó® lcùuà`:< ĞÌ•$äÈµ@’@ßèK"ıü7†c'¬Is¢òg1÷-nP‚h:ÍW\­\áfu½N1­ Ï“†› h­¸Å„PD‹åÖßcül4äÒ !İò¯ß•T¸Lœ<sm˜A£AÑ>Œ=o£ªÓ±Ñ·†VJg¡Äyú&XéÍ0|®ÿéÆÉÂkúÁõ‚½6'+èàÁáx‡‡3:õd	ÛShè$Ğızhÿ0àp`‹„²„è*â¡Ğ…vp‹Üë/§“@T,Ôâ3¶ÆHj^ò’õÊqºã…ÚTä W¨>Ml¿§ıGÒCU	Š§Ozzœ X!í\ád“7QÏ~…Og Û6H«Ù´ã0Ô¯snZc’f³{%•+#ï’RØ(Ïîu*{Ó`k³,“mqšlC²Zf¢}†Xq½HDü;Õ„.]—Ù£ÉïYìöX›¦FJ!!£üÿp­(±^ß4u.xˆ´ÛÎB)-ä?†¹¨û¿}u—ÅÀõ‡(¦¬9J_÷Wş1„ë	G-±ªæz~R­ÆùÅ$+‹ íÇèôûUî|ı}àÙ/r³Ü•B:—Æ¼cU÷FdZµjÃÎÜ‰å¨JÜ ÿ¢”‚lÍ×-¶NŒšÔlSºWôpÛˆ¸«‚ÛøÒÍğcTáîiç£İÿ\r`wÇÙÁœTÄØŒ®£üş;Õ–(0SrëÔ‘]Q•ØkºA-HÇSi
ŒÏ¬t-õÔ5gŠoÛyYF±#­sá.Ùé¡”cWJ:ÆÀîÛøÅ®òÇ7u£»SÎmiXÛÙæ0?¥V³¤Ÿ¬0N2`~Ÿ_árvú†Œf ƒ“ø:#P"¨’‡däòK©_JÿfXX {«¯Vv 5ÖŞúŸ5Í¶ÜÆ'ÔÕÿÓ‰‰WÊÕ€újâß9Ï¸-@o`>Oh`aR´®„Kœ™rØò&IŒ3aö§>ÌÜå¡€3¬Kv‰ÄÓã¡txGˆ‰ÿKb4+nÿÛQëšàÉcÂh#~Òÿ¤Mwü°iÏ á ×B¾[PT½nÓîÅöK¨ånÇ”ÈŒçñò=¹@åÚ8Olt'Ûœ´és ŠÓÊ ~¡¿Ğ}Òi]ÿ2,Ò‡ƒ$ûqWŒ‘<YISrZÿàÈêù…OGï¾{Pßp>XVœ&+¬oTú½&Ô&–3_×B7Îİ8vš*}¤‚½ĞÓ?1†€Åµåšzê¶…^à¬u¬°•¥¬HŸ›İÄ˜$íH‘&§z¥’©¾WH<JS©ùøY·;!?!ğæF³¶2ê³#Iæ´ÓXıE‹]Y¼RT*ãCîØV¦|:Ô†êü2!Ó¬
ŞÆ7ˆ›AeôóÂo«¬¤½ğŸ•¾ù¡!¯eeÖÂ1 o™pã.¶uIÇÜ]ñy•õü>?ôéöğ¶5¯7R½Í ó?k|< 2Puôb[gôzT?DZ%Y‡–rÍ¿z­G2Ut¥æµ¢ÛŸÖóÒ´’­\ÕS·®eJQQ¸şş@ôTàu²h‚QÄé¡¦7«‚²˜—¾!uqèi½}(=DLñù	¨Y<t“:¾?-0QVÁ„YNØRÕŠ€›ığÙÔˆ+Rj‰‡b&il}VÑE¬æ4ö‹‡¯ŞĞÊ9½6×B)[.ÌMcå²ÑJe.ĞVV šì>­È¹ô…$©‹¦#Ÿ~È@Uwò•Û²+„v¨µƒ?á»Ä¹g¡‹~¾*8B–£¨˜ŠÒ8Ä‚Ş6ì¬­ÈŞ[Qoû+|Ôv9'›DêRXÎEdıD ¨98ç¾˜ŞÆş±oäÖ §Ÿ{Ğèßs	6[}€SA>:ÄüúIMö%İmñ‡MåCvGÎ†ã™›H7EJ†å
ºÿ¦IDQS™¤Ì¶0x®v¢òpµU|ï‘èEE•
”ñ“Ü¹¥‹9©µÜ>Jå'üÈEÚ¦¥—ä<”.™•ë&"¡½d³bt=Ù
±C5,oBÖåÊ`XÄĞ„V}”©¸r=#6oÕJmEe&û0oíá-/´-² 8§¤šï‰Ì•çºhI";UÊiEI‡XÖnjT}<eL6eèÉúŒsj.QtVô ÇÂh´yÃ1 *?¢¸ºÜ»WĞ!³™ØVM‰ÚI¨u•8RèfoÏ1‡¸ÈÀğ‚Ûq«H`pµš‘/4uµ%	·—]UUëb‹9†¿(e‰¢@×»«8õTk¸1ÓÇÄğ"T‡‰óƒâ’\oëNÅû’‚¹jj”Ä¬Å{v õHÍ¥…à/²5D>"¼Y}Nû¤aó~ã©¢˜onıóÏèTêùeõjtÃ`–‘6÷Ã½O[Lf òET€;‚oÛd:NAˆ;|”Âhaâ³mKø)…ı$´Î˜…Ézo#(!2!B£;ôğL”áŠSO‘fØ~ü?kËªYÌw¦4t°İª˜’œ?Ès7 tŞ0¤!çŸÁ79ÂŞ,ZŸA?¢ÅS"Ÿ™9çQfìL<­ê#và:¾qÿo
_Z‰+´N{«ËÜNK4lÈ¨¹w+ø™ü&¬ŠÛ‡Q/CãY*ÁNÆªI’]wÙ½oW]8è“¨íQ¢ùKfã'‘îá	tWñ/Cı èReP)bğQ8?ûf{ìO‘Òh…Öî²~èË°‹Ì>"-ÖÁı¨ŠÛLÚôk5Pô©a§ƒv»O˜Ú·¡7µM›!Ì†>ÛqT¸’´]kÃ¯¼G¢,úÙËÜaÁÉN÷_kXĞäı>izÏ™x/N=,ª"U®[7eÙÿxÆƒ—LöuOı³ HúdwFó:‚nRm´flk¸õo/ÍŒ ×Z7¾2ÅEÍo+.TÌŸân£ó%®^©>5™ÙÕ‰Í>Œ\!ßœƒ_”ßö‹í ½‘™¥w–47J»MÔÈpÒ„\Ô­<ßÕ¯{Zl.©Î8¶¯Á¤qşøîÑfµóÀ‚Í1òE´4eiWÃö²©8_¯+Î”6º·÷ûkŸCVr¾ğ†ë(ÍwAÆ¡pÑMèqŒ³=3¾S†¸D–Üe®f’’œ7H_ÀˆpŠğÌåÜ”ÎÍL°Ó•e¤e‡nV‰}4`Í†(ÚæÒ¸ì=jy6gæL=è#Òµ’Q¹ısâœËŸt–ï|¯xiÛëÎQÃïêÍ2Éé˜Y‰ôŠ"Ë¦³Š‡¾×,ÄsÑâÊYMÙÛ.oÖº‡‘hwŞÛO4ÉKFßİŞ;4»Ô<E™Œ)Î}éÖ1?1Š='×’D,º5› B“oÛ @İ–8Ã‰œ0[ò‚ë³='I’Ğ°Ëœ¢ÏÀÔ^ŠF›ºnyzÈ¶Óîãº:znx"¹!7–ŒvÜ’bÙ4w‘j‡¹N×cM•¤2O’4®ş¶ä*ÏĞ…i‘­Épzİ+­Œë¸ğTú‰—ñü£‹;h×@ DtXÇÏœá—7»]KvÂë§¸hüÖc'®Âıs@f|ï	z+!=—™ÚEÆ)âÄT¼„®ËÆôCÅĞRoFŞ?avğ@?s7z×GGÓ˜-¹õÖÏ‰D™˜1€:IQ8mç„dØcŠZ1²Zæl}P‹ˆuÃÆò´fÃİq©˜SC±á×öšk;|„•E_ƒzwúÙEµ‘÷N–EÏ‡î>£,¨Î”ÄûÍ”ë­qA6XUxUúÿ)P],N+}Û ÏøCRÎk£¶G“²ÿ/Ê$úNÖ
µîAVâÈÀJKWŒ”TOÎ DlY	9-Î~Áë` î†Ib¬é å gD5xV	v/0#‰	jê,?!QX=#×l<“’ÒÓ
Z’Ó¸ÒC~ùíÄÛñÛö4Û‹¨¼¬úŒˆê4ŞËJE]g«¦e6úÂ¦kêÑcÅtıP@hTóe¸@øÓ@$?Ş-yYÃQuüõÔ‘§;Ü‹åşÍ#û:5B"<FtÔ1 ë«YãUÉjWø¨yGs%$2£LìŞ¸Qì…ä-šÊ„ƒÊ½´ıg¿\ÉíŸ•’9p‚HúWµ\$-éoXm=b^
®b·ƒh4 üÏ _!öüY%ÓgdxÌÛsù2ÃäI½}~Â“ğgç…3²MUY9¾$F>Û^³¯;]“b¬¡óz_|&¹²Ø*e‹< ËÑİ\÷“!ırôÎnD°ğP[ûö¾¾½ñ»«³kø"¼¦†“‚€îPÉ–ò›å¿à>|JnN”™ñã´ôW­êK+Te¤»e ŸU´.S¤«F6ll¸G€u¨¬WÚºğkÃ6‚
 &fX´Æ¿äªÅÂÄ•C×Nµbõànm®u±É…r,h±’Ïó×Oé€®É) ¢ƒ»¾qmEN¹M/8êeÅ÷ùš§ê¢¤¦|kH6ê¾¿pñ¡"ëóÿÃÖ GÎş_,íáıÆ)mvï@ŸÎ.µ¸ôWAñàÅótÙÏßã°˜¯,>ñôÔg‡Ì®&æ¯É,”ÿ§ŠÖ#P¬z»ÅÁ±‰”€b¥/O}„ÇMWå PtrUàƒNóH ŸYôKˆÑµ¡-’ó>^‘38\ %–Õe>ªQ¶äéKª÷üW+Å¸1ª*Öò5ãÃ-Ó&;+_ ›‰€ƒÜ9xs˜ñ¯/(ç—R:ºÕ¶‡1ı-¼s‡acëU|¦L·`iIÀ€Kª-Ä¤ìIbä^¦>rÎö‰\.õæl^yİ&?”Ûx– ½¥ÔêİøJ
ÒÂo…~€ß¾Ú÷^.	k« ÕV	KïiW¦â-:ÌÔFÕ¹²;¼òûu¯T;Ö×¼5ãnÂ?¼~ü	MåÁbúÌq@ië!_ÚtI×˜ÎıŸD¿)2•Ò€5¶8‚DO(pøD8ıd“jäôÑ7Å1$ëä¶æ–˜Ê4o?š,g]¿x¬TÆË_†_£²ÅO-P?c0¼‡©otsà×SÈz™ÓÂ	9¬ĞL&ä‹u
š¯}ü
âîğë”}hÍ-áiP„Õö™Ø	h
¶SLR0APëŒ9Ë5ò	>ƒíloæ}†®¦È,kşÔ¡uyƒƒƒ±Íb†2 h&İ6Rd¼õİ¡Ò%I¥H-'‰rp×Ëˆ¾ä{ZfÀ,Ï¶˜M?Š½9šu÷ÊñR˜¯0(vüµ›‰Rø#`éàÌæ¯d(àõAÙˆ•é«dåéÌe‰axD¥áÑÕ’ L½Rt¬b0ó•*´8‰HÚ‹A<ë&~„M¦cîpµ-fK4ŠZJË‹Ã²Â+ˆ6!,Iœ0‰<4:ïî¯@éÅŞ˜êÔÊÓeÚ}šìK„ÏT®€:(…
ø€)‹œÁHºêÒ±¥/?f¯è[EÛ08 NDŸ.ç¹äĞÙI!Ú´"%„­.†Hß²2ZÉrÕº…M‹˜ªS?æF<‚cPpyÑïº|SÎ‡e£(åô¶x™Ô#’Ú,mÇÄ‹FõğeĞé€S1Áq¸ËnS6XQVóõö]±ê‹iªÍùJ1 ¼ÀVXHxL$Ğ½–-¸Ga•ùØ»#B±Óe`Ç¯“Ã¹r$P¤DÃô7e‘Ÿ6NÑ¥+6p&¼âÆ¸O€_¯!ƒ&ãëmé_\:*ò$6˜û<–âp•‰[‹@šG(¾¬Ÿ¤5mò_ØVhöÎİx0+ãšÌª8Ó©,ĞÖ—mİY–ˆÉ¨ö«)ãœj
TO²¡Õï¹Ş Ë[å.]J¢à³°Y.½=<«+e( ”äBÊØŸÖ(×¡Sˆvr$¹\t‘şmpYq¸–æ¨‚±ÓNY¼oN´gìÛnÂèíg‘ºÊ˜Tá¸(+÷( Ôunq”o µ¿”0Q¿œN*µuy:¸T¼Šu
¤-íÜtÚQNÖMéQø—û×ƒ¤@ 0¯iYØìíëJÄ6>Í}]3â$zhò œ	¤ÊGœ¬J»]Q[¾gùíp5eò¤”äqå4“Û7ğ¶¼9¡ ,É.ƒúX\ıøi¢ÉDµsl]F·d´(â*qfÆÚóşflËè}şS˜_Jvrõÿİ	ÜŞ\ö-ÕI…0œŞ¨OS°!Yär{vğÛ8#¹/ªÌ2_ÚpÌô$æcdÅË¶–ímb§ûOˆYq ËŞ@LÀ±*æ¬ÀÏÓò@’Œ!Ã&V»@Ñ«œQ8Æ>†ªåìz–VÙ™x«‡*¡mï=År2å.·‰+$W(„ñ t;Ó,Öìv³á<ƒkÛù·é[8/`­U¡+vŸVêí­@c“¸+#uóP6`[¤q¥‹m+·AêˆI>Q,Ñ{ÇÑ-ÇRó_9Häz‚‚{-iƒ®–5s÷ï´ìEe÷ã'Ï °	€ïOpì¸Î@öVèGóõ™v˜ür%/B¹›O$P¢,š¨Ã»n¼pnê¢Ëô23§Îµ#ÈäÔÙ¼Wjÿp–#…q(Ì¡­Üş2@íĞ´³DwßQŸø>ÆDœ4à}å¦©s;vò&Îòó¶ VIû¥ä<FJ%ÈŠğ¸ñ~eZ‡Ğ4hâıÅ½n…õ§a^õ¾0¸hÏ)Ğ4>w±¼™»ä‰fŠÄ¯›¨›)â¢,dËéÎn÷?©„G¿=zÓQÉOBIƒ7Ich."%™G <	ğ— œƒA?{;ŞóúAätÄY²wØ¾ûàfÄQ—ÛJ~‹Î}ÙI©ÓvYÄæµ3õFX³ğøBâkšû}äŞYxQËÈ9t°ÚÉ¸Åh7çC´'.ä^€ÅåıÎf³~I»B¼I”? )ğ¿Ş÷s8a¯YÎ‚µ‰„KìßOÌz×»9¿<‡+.ÍPiF‰ÅÜB»É…«³äEåC‹6‘•sã›Ğ¤ğãµØ®Y´`‡õk%×Ş¤ÒDévŠwFà º´<R0Yœ_#ìÿ&ßæQ„É¥Ï©¬wûÁ–PìŞ§D±Í2¦©?EÑ;›ğØIØîœxÂç§üé oÏ&©TûäS£s¯0I¯nü±jLÂQà„™’K/:İå[Œ!a6§1ºXS_ûCó¤ wÀÛá°,ßÀLÒ(òún'ÌsE •àµÅ"XiÂ74OÑX>ûErÂ@@¯yÌÓì&…XU)P¿±ñèê µ°Ãárj`¬°H$Dè) 85«`ñœ+¿ßÄ¥ØJºFò&mĞmìÏÒK5­ÏşqëÙ”Ó/¿5PRO'§e€0JÖ¡ÆGƒpüï¥M%o˜dóó±Æ-/m¨©¡$Æ¦Z—c?Yª²Ã+–ºƒPÊÛWCßù•9÷~‚™HYÇÖÀk%ƒüÌôö¶¥wß–C[½c«QİêXzğÓK¨±´Ûi‡ĞIvU³|pt_z€¾ú/à°7T'rÖQl·Š x—åRUÈŞT<†Éî$RT©òùÛÅæ{ğGÇM¯ûT§Éø¦ÃŸiÂ¶ í[Ë±©_ôOÕ¼ÏBH«ä„éFs#³\ZœÌöyŞp˜~e#|/èjÑ„‹Š¦Q-²³ñ·Ì#Èt§ôêT+¶#w?´8ˆ×ó¸‡µSºÜ‰VÉ×¤î±èÆÆ4ïp	ôë*A¼BL×\Ì>zc†Z;ìd˜;Ü Ë90Ã/ Ùe½^I	Š’r«T1Ïy¹¢ï®)ı'_-gO°ôÖÇ±Ü\´±é\—Èhæ¶×HQZb«JşŒx‘œ½ˆi}G¹ÓHSV½{·–Ìå¢gFNëlWwÑ‰«ÖÄÒ¿QÈ.ê>[á'å
ğ…“rIKğÂY›±j-İÖQµGÿÕ	N‹ËÉÕ¿ı’|­Î/†lj¿D¤éçº;âÃG¡”‘E¾rG¦''–ã6Ü.,õòvFƒ^ÈÌG:Ğçt²³X°Ue)K¢Y·*ëƒ½½µ*¾qÂDÏ-b1_¼Ÿìî ßö)ê½ÁºŒ w˜ß#–¸ñ!ÃÁ–pûé®[Âg*^‚î±¨ıÔñ¹|òRŞØÌuDfæy«Z‡’Ò Ç’¡V¸ğ×¿yv½èìºf„£n“‘3ùº«óå+…Ö‰AÀxgwxÜ”{aGKr@(·÷ê3>t%[ƒ§BÃ-¡H01å)¿cR>Á*±5z	ìòbç&‚ßaÇRıd0D:¤Û½ã¿¼ƒÒa‹N¯Ö ×|±ŠSƒÎ»¶ğ„&ğ—ÉdQ>,­ÓA“_?ã¥‹h„Æ7±4Âêú¿(œç'N'˜#˜`áÊS òS•¤à,Ø­i!çv¾5Á1«h6‹J©}†ğÿÙÄÎºÍ:^á3ê®ëÈU“ZñŸ“xÅLŞƒâXl1GğÊØyÔFD²¦äÂ<úÇR©•>qé¼ëqë€XH<NñÌáÂ8ëC]ñ	ÁÕ`?B0zàŠóÄÒí×"û,«ÕW¯×9ùDl¹ş¿åøÿŒz³Y®Ü³’™ğ‰®Öÿİ03ê¯|æ§.83ÌjW—ä)+‰Ø4¥áÑkÚŠ	Ş€á~’ƒ€k9F‹PEÊeúLü]¤}n€çdBæ3k£Äº=©üTå„	¼–údş¯F¥1+A$˜=Ñœ›¹£	d,Kô«Ê;§[ªÈwYHCÇıÏ%Yïğæ=áhÊ™æv`3gãT¹ÖÚòÊ{õ¶!Çœ»{	\ı0gÚC¼Âêi8šIÙ:½â3GÒtDÁß‘›1²N1€Í;tK¸¶FŠ$õW×ºÖÑËk²…‰Æã'×B;E¯eÚWM“^Rá(ë!©tºÑØ~ ç_§ü¶³\(Ğœ˜sh?îú?]j&(CaqèÇàB|òG¡ív¿ø\ÆB _óH`PÇ÷MHÓ ¡büÎ:ˆ¿…7ÖmW«ÊJo›şh¸%²¿ûÜ6}eI}×•˜áNk£V±²ÿÌ4@g•k˜[€'p;K¯ô¹F¥ÖŒašGjÊS&¡»Ió©L÷:	•ª©Â
ÃÁ[Iüe—es…PšñÚ~µ€¤QÒxã
j&é{ ƒaleÃ0Èò†ÏßÇŸ/C6·U®âk3g‡õ³ªs²•|~ÕâüˆìË$•l»•p?@ê²¹Šıi¢ <¨c’=Ğ-¿-~R4˜&ÑW”ø"'E£^W®ôøœŠh¯s•{ğ_]D‡AV+Ú`Ú=!…3½­¡"©eŠ`
cíúw¡*Å+ükhÃ‹îY£ùIQˆcÚxúbT=F ÎîYÉ¹:”\8lhãY©æRy @ĞÃÑü-]‹›ˆ:	®¤£­9c‚Jï$ÉF“åğNõ#7]0ä€bm™wZdæ£ÍıJİlËnäñ!h÷ÈË‚¯Åt&Hú§?ôoÛğ¼v"Ù—haê;‰k±)L.ŸŒ.Q/€œÆÛõï.Â#f,gå®ãå8­‘=@:¹´c“¼”ß‡‘LŞÊÂ¡Ì¿ªW>2L§·¼~²Ôß<­ÛŞ…zÉó·y=’çg‰{O#ÿÛ^F‰»]Ğœ­ümr±)]cSó'”Kõ
Ø(M]ÜÍè‘ÈG`MU?y"F«ıÖ(º¶lóxë¬Íú:¢L–VâüÍoó1ŠÃ´%qåw@Â ÆÜgë'U‰ oš]V¤“ÖÊëÄùxzhû¿Rbó#Ü†¯Ù*`ÿm<¨0oë>fæú1ğÇl•yÙLİO\{Obš¯2ìÂ¶íP*÷'v ‰£H¾¨}¢‘Dµ¡RbwëÃ?U˜uÁ­@ñQª:Š$G8äf¶
Æá™qn‰•6§xñº3¢eá|"˜ºry»ƒ˜$v©Ğ3‹æØQpÆ¼h„Òµ\Ğjl`± "ñŠ´È¥Ø´ø!ßGÑLdæ
zØˆu´²`—ÎFÙ„(( v0n¡ùc•¤óS&í:ÃÀÆ‘+N¼•6ò.Ôuî1¾ëW|ˆ`W»išVÑêsÑR•TñÚÀâ*bj 8t4G›}DêŠbfb^ğ†8ğb—™w|ù§j®5!cM*Æ~éxïœx=Âbæ0É»Q#ÆİĞXX”€;µî˜¸çƒ
»wS´¨–NEĞJe€Æ>üm*coO
F»èÍq{Ææ %2±œ†ì¥0púmÕÕ{&Ÿ”Tc°‡¯f•R}4oú. /õr0±U•FèFk¯0×ÎEV!©‚¾¯LF¥ˆıÖd9}åë|×¤õüM—ıiÅßåÓ«iËßmMõ!Y‚/9³tPb>
ÄœØP¬r£6™ „$*à¡êÖ•ßt*lb®†±GÜE02:¢ÍAÍà@9)³'0 >™Â=öÒUK-SIâıŠîeƒ;úûÂÆí½6w!ş¶vD÷°%ë´ê?=¥jı•/„íA„7Æ–LœÅ¸ìÿ©‘ŠeåØ3«^÷ÄòùLQ¿şQ°ß¾âOÃ)|çÆâÈÍFõ\KE9¶¶?¾Â·KKÈ}P µ}(¬Ş&Z' «Á`AV0ŒÅÑ“¯³ú³™;e	âïçW@FóÛÈŠy»¤9µ;3äŸé€ƒjÁ¦#?êÚó‰`¹Çp¯y½H£¼ı!V“xÜ/L¼t§5›dÙ‚4¾J¤-Çê+?fPå¨’ÄRİcãHrÚS%3ŸS¦4ßøj0)MÇ¦,®æ¹”Ûˆ÷Mğ¹]ÖW&°Xè¬q$8~IÃY€]q”qèús ûwpz®áĞµ.êZFüQá¢µ•îÚ€n±.H,µgoö.¢1â_(2Fk2ñ¬-hÃëW’Z$L;}”?{(ãßã²%xZ×«+jdçñ€oÏÆÓÄ@O·Ó«\ÛòäâšE@xf€”hÏp0öî!úÀ‘9·®^æµÍ-;YŠ¯4¹ïÊn¹¸’rGÎçyüDÈ­”Á½èÁÀW\5
ÛÔ¥Öà‡|D}¿e£ŸêÄO5zãc®^qVï:ù›`²¸Ğß’™g–½'Œ ‘ß§Å3…a Z¸¶¸¸×Õz"I ÏÏ4?~!vq´ç5"Ü…¤-Ğ•qw”¡«Â„ oà%QVIÏy|s‡Ìàâz‚‘“d;¨WÀı5K¬¯bÜ5.¤åŠ¾öVà6á½çåG~ò¾´ˆ5ÙĞ¤)*B´ißŸ³¸”
bèW˜;&/)İvèêëëY¦4Ó1Æd¿¬ËÒ4²Ô´pÃk–òd)•\s¤Ğ¯9ùtŸ„Í„ŠÍ÷†Ñ¾g?Şå|ş
:o‚tÕ¥ªÔÛ
ÃË $bø¸h,E$‹5up?ŸÄt1§Bƒœ³0–‚1zÙ÷r½uì6ş;°µÎ±S…,š_›ØÈuŸ¤„‰ˆEÔÔlûÔN$æöŒÑ£_9©€%,1‚â}M?iMÚ/àj[PÎ€fğ¯×îÍÒÚå·?×Aîf¡WÁ÷Â{æş¤É7%6J‡ "ÍeÃ*Ó¨‚È/Ç—+@;Vñx.ÉóCÜ@~1í/Á€Ñ¦Î&C”ŞòL¼Uuo4•2²31
(¸¿„6¸–¢Ä¼%Î	6ßş‰ğú†í*‰õJÖÇ&6pßTáå¯ÍÏşÇ;11°"Â¦¿ÕkøÛ>×½³Ş\Ä}#­}jITt4ÔsslNMÏOhÖÕW7gc–ı¬Hbx)†í¢çÑ"ƒ"€SÌ!p´ee<˜¶3”û~ĞÙãÍà=+2õqÉ:CÌ˜“†L¾a\Šê1pj‹)FÄ÷ƒqò²a•ã›ğH®9W ~¿JöŞlPÒƒ;ô/1IË0Ë¤ä””ğ—Qt+Ÿ!
~^ÔÊôo0¸âXÌŠèmĞ1‚ñ©ÈKÔø¯®Ó‚çp1fA¿&B¤J#¤²†Û”Ëß“<O"NÛÆ°%Zaûi°›·Ê¯˜¢ÁÈkİîàÎ¡´@ú¨/)í1Lİu:õe¢ø
bñ•Ôô=¼À&®ŞÍó§¤-ÌöŠ”IVê.w¿´q¡^hFÖpåP:­B|¡÷ ]H€ÙúğÕ *ñè+?¶bau(HÄøøÓF‰àÌa1ùc%Ô‹¹ê1ä$«@ñ–ÂáG«UÀîd‚ò%h‹bµ\“»ËÖÇƒ¥ÄKá½	â/Ú„Š°µş™póš$ã¿)²ã[µ»¾~ÍÂ$¡Ç/Ía6“+´ÅÇ–Ş¢uÂZ›¿¬cO+uíœÈ¯ŸŒ(Ä*}„›¥_âßŸ@¸Ê¯³cìì|{6¬X²ı—î$½‚|ãÙƒQ’Ø.¨ìÈ·lß{Ì™éÖXú‚05“ÆQ Ú&äÖ§6¼È"îZæÊäı`Z1«w_ıÅª!.j»á«æF®à:%z¿^äŒWKŠÑÊóï)B:ñ¢»ÕŒ5é¶n¶ƒ ˆjÃ¥wêú …ê)¶óx•Ù3W{1]­×R•f^8fXN<Á`ÏX¼ùÁSÔ§KÎ!½…¢Œußç*Tcf´ğ†Ä»®Ê9Ü1Äá_U‚Ş.À““·
SÂFïE„D¥Yì.V[ñğ}Bè8?eÜ±Ğ};l®‚uÁ)šÔï=‘Uj¢<Ó!¾õå5îÂõ;ëF."“ ƒ¢Ë€_ÏÎ¥0KqÂorNRX5%ÀQı}ëGl( †Áßy°çšQ?—ş>VÒî³¬¡©j}¹q4çñ¾Î²:Åó"B:îGfAÒOÆ³Ãù©$EwLÿös+{¹°Ì äĞAÅÏ×¼7Ú=	âİøÂ)ó(6ùKbnÜŞe¢|0!¬QmùõDd>+­×Ÿ²Š³+• ~Yçÿ8åŒFU‡zcšo…=©¨;¼ñÀF1¿ĞI´M‚ş’&<„•Ğƒ_,¬ìÁ	~ùè0ÕÓÌ+ÛC_ƒ£æ;°	¥7»bj§MÓáğ’ff3ú_×æ·kÁf3N¬•LkuÒ,[T×Î(ÁÔcÃÔÕïõóí¬£ÑUõc!æ‚}šwİr;ë…ßmUq>J‘ÂCŠôdá!7uƒ¥ç½!‰ªìİ­J«g– ~ùmL¿£*6PtƒõÙ50,5¹?ù5óÆGK	ˆënÉ9b‹ÍLÆ6wÃmÒ¼5áî6c+Sé—kŒNµTT»-åW¨,¡ğz5ÑZTò$Í‰IBÎ‘„dÙôË®© øÀß¬›fƒ@á'Y9¹×3©Ê¢Ÿø˜ÑqšÃNƒ&}«†——?éÀ±:¬[É]Ø!~ø~e”ÉÚëuD­q½`ì]æ{Ã‹agiuÀÎŸ¨P={¨.ÃU¡ì7^×pNÙ´NäÍƒ",=»e´·Ú‚;Ô•J~„ÿB+‚Êìğøÿ¯ô$Iİ.i©íS‰È“H9È]B¡µn[­¤ı†ÍlÅl“Í|ìòĞ¤Kºğ;d«„PŸMÂSa{ mSR¹&V×\H?;eÙHIà¤ ]ßzry¿u"|IOïº¿ÆéŠwg+ÔQ-Öz:8nİ¦ØÈkI;4D@È¥yôm ãf'Óù}|Ò	yØÏÓFÒØë‡É1ÉxLˆ*OÛ‹êLöPzèp>¶\BVímºleòÏÁ\æŠWBš£fšËD-±V‹Âì¹{Š¨.éúÏW¡Í‰bªÓÛÓs7¸÷Õ\Ÿp&F½s‹XAmÊ	€•î†Ô_WsäàÒY·TpSnïT½4f°•ƒ•åÇŠ„Œ~¬Å6@Îåw¸oÍæuÃ(	Â“Tø$òŒiÚÏó]+ÓÖ¤kƒ
˜Œ¡ZJÆõ—îfÏjñXbœªsŸ°.ıkë%ÏScùˆ]p¹÷”"Sê‰Ğ—BDTZGRİ»/½ØVâqáLÈÆïé£«S–Ÿm¸U+ÙñíBCÑ#Ëq“£wÊ%Ía]^ÍƒŠQãè8+ÕÑ®kö‹…[qaÃÙÃC•ní¸£.Ú&j
hv!óäİîÕßâ”œÇ„Š!³ı‰+-‹©dŞc€!ßæ°vÃmœ35•?ÁøÔ–o\F¡İRÄZÍ[k„‚ïÇh †.qE–¥^Ú´Ô\àÇÊéÉ»ÜD²iáçŞpàÚŞÛÿZ¿ıÛòLO'íğI¾ºrØğT4²œËÌÅùÎUDûo›Œ§´îŸ”fÏ{à«ÿG–$œRİ®$7Ğ®üP‰õgÃ"fL‘Ñ”ƒRDûL=¹cøı1öZ][å¾}šş:dTÏ¨1i²*>yA[òkN–’bb°ÔÊ£$®UuÊY²0€l ÙÂêc—ºG¦Äú­ˆ´œ‹M“oB	'KN‹w<¸Cv|­î­“fk((ëœzà~GÏéƒ¬x_ˆ¸>ÙnÓ|«ò_L[p2ï°ğôf¯’zßg!Só¹YN Û 9>ó}#Ã»C«á2ÍlÑ—¢¸Â,4³; ò<Kºdó‰Ş!ß5ÌÇzb=$fUQæ‘ï¤ƒ3©[jX¦ß¢äÚu`)	ê²,„.|6‹mNç½%C*­È”árd¯·nÆ
d$Ú°d»>3Á†j{!•ÆÿÙ¸í¸¨ÔïjÀ¼I@ßa|%X¨ò7Œ×F6f ×‚0t?W	5¡\Œ°P ¡ÊJ²É¾Ùò°!¢?ß4[~ºµh„  <ÕéÃÅû=è•ú®÷iOÆ–­æ…SãXZ‹‡ÜëB vE²z[ŠYúµ÷/£^HˆŠ˜ÚLí&IœŒ‡`ÿ@<[ØUÄ49ÀÓ÷;ñ’4¯× µ[*Ìæº¦î-(6Æ®ı3Ii0F.<Y¾QÜB£C3¹¬Ş¾¥ c”8t:Xì,e–‹~r­:zÚš‹òiVU?t‰ëãE?¬n–neA®€j\¼¬¹JõÕ*^j`”ÌáÚšíaYÌSQ&²Ù=¨ÖÆã³¯
`Ìëó9Ü)”CŠ\m‚İaÕfã†d[|•¥Š~]=F/¥t §¯í²JaœK×,·¯%n¯½>Ïı¾Ë«Nf2ÃÂ}‘)Òè‘^ÂÑ{Ò kü[
z®#f·°gé©ä,©W¸X3æ…”]f£û›N¨WI¯E¯ØWö"ÃíÀYîjJs.;Çßˆı~õõõf
VRö‹²*íàÂ©e$ÈÃÁ-a_Ÿ"[Kc—;’Ö0mj#hB£”FÂfm*ë?w/?/]ŞÃß”CQqZMÌ±¼L]|×Ó"ÔK¹ãgÅèt¤e>!Ä.Ï%¹1 ‚`;P{¿ÿ.ï[p[X‡pŸÖ7gƒ1@«öî…øˆiÎ¯|R½¯(­jW—ğhësä·†Msìa“­!·64Ö…z=5ñ½[gø¨°V±òçVIâÙí‡˜7ÎS[ı6	ÚmŸGEÁ(ì¦0ënğLç@mñòïª6ôµCvBÊüÎÅÑlO)•Ë=İxÇHé›Ö è?°ÎGâ›l&c¼¢úş£S]L4K|3´@€}İéf¾^!¾¼ÕÎàr ·¼«3}à¦{ë€"i^e*V†á-:LğŠ§8oºA!ÃÙ’¨sÇ`?‹dÉ‹×°™ ©r¸Q@4g=à’ŞRöZt'°WÅæ"El¼åÑ¬^TŞà¬c­>}ÚÓ[\ ÂEíi¯Bv­hNœ]tª˜”‘òñV¬Gâœ´Ûqœ†	üjR{*$:…ìŸÚãx˜ÇE;`yÌtª¦X!Ì‹lB9ççr%?J	´«ˆ#¥¶Lt7%§ú¥<±ÄÒÊG£©Õx@ıÊZwÊ²Ÿ‘ëwÁÆ‡‚xSÅk9)²€•X{“È™V‚è,İİJ•	ÉóÓeµlğóWaÔ ¥óîrwêy^°Ì*Æi­Wi²ãëåÛÏ–©+Q;ypo™€©Œ ¸ê¡rMUë»TìßµûvÕ[ù^ºIÍf‡OÑËe[SÆ½ÑïÊ ªX„rYt +y0Ÿì/¹³ ªòåpéãı]ìàñ«7œ×¶Ç¼-Z’¯A7¡ƒ=’†¢ÆÜŸùåw‰d}ûõSËoô
yºoÍà~Œ•ûmÒwµ=lìô”¬´3z¦ ÅGÅwŒ¨]ÅˆŠ­&õº#ø<‹ ÷úuRÙÍpüÈ3ÛÔ?¦éK³’€B7–æÌ^0Ou–æDûÔoë±vÍÓ>q»ºÇ1Ü[ÙÂÁ÷¡Úç5@îâtÇÇ€©Tuâg…ºX'Zr¬ïŞP¡H+NeRNüyPe]qƒz5aÌB¼±wi‹«m$¾²&²ÇŸ…´ÕÒvógÅêšµ,#%™@ŒÂfQ¦ó€¥•ÉÏ´wÉ4Î†É`†öÑ@#ş_q°V-Z°fU™^Gjm¼m¶5âÈ·)=ìš;Oóg‚óÇ‘2bx&%¹’‚´šwÃ_R6ÊªúuÀÛOËS–ÂŞbl“ıÓ@cBo=VsnĞOÃ0ÈoŒ­ÏS–>Î"àğêÓÏ§â@a¹ßxĞ‡ÿ"çK#ƒBëRgÈw’57A`L[áóœ€	ø×ırÙÏórŒ®îEyXíÓIá_[°&¬)n™» .5åTUL ğléH©mÕá‘…BI¿„àb[ÉİiªÅ¤ïšJªñe®€†îÌœ­œ§ØˆªEÃµl9ø¨ùk¤¶f¬êÃiç’0UÖuO5};Èšäâ23ÑË? WÄ›ƒ×fæaupÜÃèº˜;C&MsAèûªG9ÔMä„kü[€Ôtoô<>/ ‰á
ƒÄÜ#îÏ‘A
9¬É­ÑØúšÈDÆ!òJ<@H“¥ç¿õr@»Ìd‚4@ë3•jGğeÕ×fûíÔFˆÀ;&Îı·eœm¯3[A­¬˜
eîÍ´°xè\·tÕ%s]ÙÑgÚpFÈƒÒ2Ù€Çƒt-ögÙuHŸÏ1V8ËT–D£ Ú~>–™vi3o°âU°'€+…n`íFŒ5øF^_¬@qB:ÿ^Ã^ö„Q/-Zæ	ŞøañŠèÙŞ\µ
,!®–”sy‡ÂaQ3~D 0 [,>¤Í•.¹}Í\™:9®Áñªá4¥f¯]k‹=Rpğg!Jµáá3lZóÓºŒÖ‹{K‡ëX9wG…«91Ó	=l`4¼0Y@D›û¿¶êşzqß™’s˜k(èë¶7ÄiÎoQ¹’tP?QHn‚ ÍĞlûOXãc…Œ$Í;zg‡zFU({égê{ıÑ\Ö$ÁP_KƒæÅM’å¿º–~Å?¶ »ºEy"±}‡W-4©Ñ/`:iÏ*üjKr#K’¡’‚¢0ÌŞ+¤™Ç¬‹,{´ğ¸“áfãé+dÍjlñ‘â—ñm‹DBpél£z³ùçŠÿmMĞ€‚ZlÌÄ§ƒ>¦ƒU şQwà÷ı‘‰Fÿrf¦LŠ€ÖÌ§Œ‡šHoæ>„©p©%2M|êT)ëş%ĞZmû4¯hZ~öË˜<6xå& @îŞÍÇ=8Ø°Š§uş;¶±C¶4¦ l„sfe}ĞïÉ´=LšaÛ±'òßh@ól”ÑHR—CªRê¸ûÌÇø	ì©ï3XğŒÊM	á§TD× öô$ÈqCqÌ ­€l	z—„¸HZ— ù-roCjş6W—;ôSf)ãÒ%Ñy½" 9Vßõ’qßú,A?ky+İÜ	RÄˆO‘Œ"z_wBÈ•Aöİ“²¿<Á¼ß\K9‘iHÑ©tT´/¾ÖÁ>˜	ÊY \F©»@9Pó5¦S\•¢Ÿ™š„<G:õËc®°«]EÁ$~åİÑµ}-&³s4¡×ü«ĞÚãvSŞBé,‚IÒpäEd|ßk÷ğˆÑ!D}Šî4Ëá€JÅ6VXzü UÍÏç
½ÌÂŸ”ÀXå™Î¾<ã,õ/r¥qnHc®‘â&Š|ôËdïT>RQ¡"aÇãèğ« ÕªeQ÷öé5ØÌÖÌêÀ<$¶¿ñpJ!Q=2§Ag²^Ğ™—J.XÎÍĞÈÖPÍ!Œ2ß‰QúÀ?äòfğOô.dælkJ>¦¢”zÛÕ=—¢İ³Àsìãè¹{"÷ÌN‰È%’áCX~—×#¤­ u	üRVŠ>W€+2^8åàkåö¦I±F‚¸Ä™*'ie]¶ÕÂ£Ì¤eÉŒ)óA¤ä·8CŒ±å¬ön†ühATÕa
‚0®¸ÉŠŸ×ÚR-ìÅç#óÁGš"¢¨d<Yq——=ÑzÜTÇ
,¤/šsE;‡ïşi|ş ª‚f-wÙ^ øAåù»yfÎ.ê¹²Hï¥e5Ùˆiß™í~¨blj15b­ù`›®Ùçü$ìŒş-ØçF©ÕÕ‡$ùĞ[iàÓbä×/dØ!ø\ø­ûÏ÷hµV²ÌºÂ:&ghW§—€}ÏfÇ|Eª)œFá'BÜŸC©L¸)œå¾¤±÷óÇ·‡5sƒaÄEUo_/ZT;oõõrûU`ŞCe®JçQÈp<Š¶¥”DÕ3_D@|6b·Ú‡)i˜jÕîAà÷¼¼F|1£gÒZ›|‹s½[y¦è:Ó	ãĞA´n¾Esµ¸¿˜^%/Ÿ!‘¿œFé‘ßŸ aà$Î~ÈãLe¿†b~}ÍW– Ñö¤0‹NYÔ+˜Š‡®t¨••º	ëŞÑ ÛÂx¸ÙfRØÒ¨•8–êõ°m¯GFZxÛ%6û~ö•!eÿ)Ìïôx´ŒIí·Ç‡†{÷ûœDÊŞº“™47#}:Ép&Zgi‹ÔÕøñœ´Œù5ÈÍî~te¶d¢ùJÙM“: ‰m	§o=)™­ºß˜ËôêƒİşºéVé‚çSŠ8ŸŞ„°÷¦¬i8<¤…ËÉSh>ˆAV_ ¢™0d‰=y Rş÷\Fİ%hÆ3)¼C³ŠQ(ñğúÕUñğËW·B<CWï5úö¿UrIÕP‹%à,d¼å¬·3)Àq|uTd×çŞHZ9 6"#ÆqÕäkWD® r¸vóë.[`jè0Ç®ØLÜñåxXIÖ¦‰Âğzs,˜«ù?\J•Í'N&Îº¸e‚„§v-Ò)¬sâŞˆ0…‰Âµ­ÛUê7\§÷üò ª!AW½›,ù7ë7È’=NséeÙ.…¬ÅÚÖ’íÈq5Ú+„ëV`¹¥º¹\¤ó8G¯FïÄp†gw£ô°GœÛ
Õ™¦—V[tïnîOÄ0ÄšóÛ9®GÍÛ›)Ù`x[mšĞN¡
~ÀŞ0Š15¡…e½ìoæT;‡Ê%¬¤7êÖš¨c»i\½Kµ(5şıã®Š½l	+´Ôlû©WÉ¸Õñ½„VIÚ&\@M?' Ñ˜[©uQÀõê×2§S®Ì‚)ù·›i»Á}IêZ›[#s-K¾Ûğq?4Î¹äÏ˜&T×ÈõŒS)á˜÷1Ü–æı-ÂÎ_*#Î+½.%’ÚÔµbß Ä'õÅ/7ìë‡Q
¦Scaˆ×Ô½ÇÀé¸=\Ø¸0½²Ôe³ÙüÊ˜¯œœÀdh1|RjÙ¹æ2:„ã‹'õIYÊı~ÑdçØ4ÑÍxŞyøYÕ”‚F9ê¹‡O‘s£Ÿ« ±	Wc¦€êËäV!İ|½ª¯w@ş±á¸1\v*‡HEş)ø’4FÒ/Ë…X+2oU\Ş}àİõå8”¾kÎ?K¦öDMWe› #Î½O»ƒ\8¯…ÓÇcûxwt7÷*<[Šÿã—ízÄóñã<M¨ğQw"	ÓF›yWõ/Å T_ƒél†²´/…"0)‡ â;jÖyC%°-ª?²rn~¶Õ¡Ü¼x+Ûêk%æ‚û®Ş&}i`1èÓv|€”Ÿ.µ¤¹EåÁÜ÷'nYƒigè•	%Ğ¿ËüÉÏ/Cb°½}5ghâk-p??VËÿbœß¦‰†€tSïÏŠfSC²êæ¨øÂV˜uƒû²èÒúÅ`Ó3r¢àAùfwˆ$êƒnÀ'ØÁ÷pÎÈ!ª'ë=ÃŞnÿ¤™â½¹„Çk®ìMX†i±=m{ÂÇ™.yUû=û©¦å­ğŠ˜W±z²“¨,ÕÄi·é”—ìV‚ˆÊ•¢ÓÂ*sI§°‘zŒšéÊZ­bÖ~a˜…œn·ğW£ ³YOúÍTk_¸ø¤÷9×€1Ş ó±¢›6½ì5ÌîVîè•o¸uWÑ6Ï]ÈôşQÙ0Ííu#"hdäD’¾ÌÁŸÑòG.(¼–Ç„b”Ã<"é–Û·®¿*.+…ù“a·6ËêèÀ­¡7ØehŸjqÉÉ4QÔ€×¡i(0ÏÂ˜ÇÓfÛlai¢¶_ÜèÕ…úpRµäÀ²‹Æ©©Â`ÉIr•Ÿå“TÓošQpˆe´QR·a¤ÛsDG¥èeº¾2¤å^¢2ñ^ı«Îï·«ç	sÍÿîÿHŠ£º$ÀC`¡ï7¼lv+Æ‹S.(%–™
&©”½”CÊ”x9LMkú…Q>¶©_2ãFéZ«[kÌFùw…N­ˆÅAùçE§dÒq£ñG‡×‰d–9tyˆdçxnï8Zó½•Bâf!ÊÓÏVc½)­2n‡e”‚bÎvÆÆ/‚I¦Ñ„5û.|?öYqĞ'‘;ãqn÷¨ŸIÕƒsHvg†¿†û)†ãk±ZğÔ¿è'Ûx’‘c‰ynBÈ½àM±Ã?ì$IP+ƒ:xB‘Æ…¿¨÷ş×ÃU¤şÙ+	²ké"´5roZ#¾!ƒk·ÖŞ1]+|¢[®ß›}Ø]öÌôzšZrE’ÇyœÆ4ké¾­ëf\N	a`$ªËÈ£UC±ÊïxEcƒÈGŞª	bpùm2è%àœşÔ À,
÷GæòË¨œcF¬áTğ(4]‚ç–Ä=ö<œñ°½1Ì°›ZB'Zê
ímNÚ|'¤ƒÕ”‰^'˜DĞå‰h6oÓ~Î`ë4‚ü_]pIwï_¹,H…¨õŠ´k‰’TbK’Ù†¶ğ™ÃV¾á§R!‰í¨·”GIœ(r¥õÄ.§K­¯ÙçÊŒ$›gùêbéM©\ßz-A™	á‡Fìê)Ë#Lğ â[Ãÿá›Ú”¿ÑÜ^<Æ¨ÃV^TÔºyQJü	³6÷ôO„eJSæ’‹Gš°¥/k‚×ThŒWtX*•V¯¤:°Ê¾p\ŒÒæàs7O¡@ï—-‹°ª5™÷r³88§ìgß¸ÂYs>¥(kÖ Â². ÕÂŠ[FëqiiEµqr’Ÿt; Ñ3‘ƒp„y•ƒ¬ú7ğÕØW£Dëpşòœá›Ô:å-MZ¡ËcØC*½ˆkª#yĞ^,K<õFÔ*ıR^)C×Ít«}9	\Ù4Î_ğFIòQà¯ÍÇÕg[åca—è»;ÀØ2‘¹+¶Ëa:ÁĞxb/I:{ê
ï„TÅîàÍô)yP+ø
Â$=Uü‘:À!‰…y²›HîE{ …´È²,¬€U‘œ6ÃsàôAiY‚pÊ(œøa™8vwˆ>4¨g8—33!
°ÿDğeúwr$glñÒ™Æ+ü|'½P‘"åß$é.£8ÎÚ¼„Øg¸(çû6ò¡io“©l)xÊ »ã…ğ49+İp0--r‘.êg+Œğßû8:î`Ír¸q)M.A®‰¸/$óhˆIxşÇ—ŒpGÈGP·éÅÅ^€‡óÎ0¶Ï¬µMå2 Ûá§Dæ)Í¸‚öIÈW§€®–á¯EÒQzOÀ9Œ>¦#!—ÿïB¬mT.ƒ™pÜŞ¨ÉÚ¦´át!<p $©n¥š(nôk§sv·êõ=0'åŠEâ©Róu$Evc§‹—ÇWÄ]LurÏ¼í_öicmş¦„äâ°Ÿ—ş3e(®'a«tBI®YUûğTæi0\ìÔÇ\İ+iüÇÕ&6ïñ¨Q¹u5¯<°‰7ğ4i£\È ±¸ıóô•;Z<h`f·ø­İ8Bˆ9Øp”A,ÑOVZ–”_9ó’fOJîSu‰küª™ìbÅxÆB»‚/aVä;Å.*7 ÇÿÓ®a±GŠ,ùZ!¹¼µ*Ä7ÚFÇº<rğÎ/9¦Ö”%xO @»Š£
ñFWeGuÍ? ¦«çdÑ6Ôä­q ŞñKk ú:#:Ë<Ñ¸cWq·¹©¾Kdª›øGÚ©)Õ¼ÊRƒ•ö“_`Ú¿”C¸ÕÜ³c€ÈÒ¾ÈX©14¾iË‘\%s¢ ˆ[^A&Üîÿ‚X» 3²×ı±\P¹òÔ jT&µÖË,G´ù©¶]ou°#?FE…¢x+•ƒSĞZ‹Gì1h‘3±ÚF3uA¤<0Ş·[N/º(’³Ô~q<^İLÇ í€’š”àªÂ€q’Áw+G’¦z5qpVPDÃ‰åqbƒTÀı_#gzêêŒëf4G"ùÏhôK¼}?:}­˜Ã_ìps“»ÇœuÊó¼„åÈµ~¿ñ¬´¾HZ+Z¹ü„÷İü€5¥†¡Æí&£ª9ƒFƒ®şZZÀš¥Ê¬Q„¨zE‘¹¦ö4Óì[Dv=)ñWdó(¡YË/Œ©˜3‘1~øÜ
‹¶ç4SHßH­AUl÷sÔiZêÄ` gDo"Fzª uãã7¡Ã3/k Ziüéõ¶QÎVÜ¾‚X4~Í_ÿ'ÏÄK_Ä@ÖPİsh]|V˜Jô·cUÇr_
ÍŸ‘±J Í5w¨ñ†…	›®qËºyÙûæKbå)Î˜bGpV¶fÊÑFİUÎ^}ç 8*(W€hö1æÏ¾[ïXÎ_(uÚù-éçôâ¶sš“¨´rNt#ñrvÚ5{KÃ^î†İ„9ôåŞ‡‘ËÖ!µ?óƒ@d‘İo‹öĞş¨÷%Ìñ²èıgm¯Ğ;ÖèzQzmK)åö¶_Á%T¡”q5ÀôHKû3}Uã^ÒÜÕ2ÙÛÃÆÛ!“hH.¤âæS; O=”ëmñ(Zu¸—G8û.ìÆTÅh‰j‰Á­$ğßóí­J š¯@9bM™Ç®Ó»ÂZ`¶ã“™…'ÈÓ•‘­^¡²»â¯¼êRoØXÎ¦±%©pàœuq.^
VHúÚÖ™Jƒš.³µãe¦Ş“zYä'FOìCçeö‚í§¢¿r"ã+¬ç.úË^AS†1ÌÊ¿fº±GÙ_EÊ!§oÑ’¾ææ-ì¦âÏ&ùsímğ#Jq4n§É‚m5nòğA¯&=Â%;uÆ#¦Ê6“²÷¼›+`‡¬¶2¼‰4UÆÈ[[y­:-»:n
`Ó ujßŸïÅö¼ÎÌ½ÑIkR‡O3ï×Ëß™u_™dôÑHO—†.…”%¡£öş'ØëÃEH¨¦	óÿjüæû–™inrÂÒ—»n«7vVk¨¹Ï§Ü±”oÄ¨»T…¯ÓwRzÍ‘³4ÜJÒEN%¡3îÆdÊ3ğÔ3²ÖÛÍYCj(Â/ı§b×SQIFÇ2§µ8³—Ê†¶lqMyhŒìé’§G/ó¶…Eü?¶›ŸzV»ªMGVÄ
1cAjÇCçºIG•Êñ))§y°ªWŒKß„yßêÈÙ¢½ö¦Rç¸[ü~Û}Kmá@Éˆ¦u¦_R¸xPgº+/ã„¯}dtêšnµUInTğ~}‚9û¯U3JxÎ`Ù€—òXi³ =p~h-L ‘¼‘â/Ìß”o¾ J˜d·'LK ô­~šêòõ
f.Á^)‰ŒÄçBæá. ¿vWH9WZ®Ï|o05¯<H(…ÅVß”“ør™¼ÌÌf•D‰öYnÃzP Øãø.Ÿ†åŠoô±içÕ9ÿò"ò[B(EñhñËÍ)~‚íÕ;QK1ö¼ò>UBƒ8D•˜ê¹`Î¯’óW@E-Qà“æáTæ­Ÿ©Eµæµ­ "ß¨“ãœ¸ùœ€™¸zÒ‚=aXYFKÔƒ>Á!¦Šônm	%ĞÖî=½…Ææ‚~eÉÌ)º¨^æ£ÆIXgmô„åÏ©·ß¼JÉ$&º¨‘¥°œÅècı¹B€ÊÍ¦ÏiNgÙ¢ô\‚ÚD·ï°{xÔê‰¯–P¸÷6šP¢|¸¹Ş­¨IH#ºz'Ñ’/÷¨ØD)@$¢{òöÇ.+ŞÖÏf•äÇLÎHx3Ë¦A‡‚ôÍ2Ï–¸ñ4€®Kh=çK¸©£à†z±È÷@çH%.:šÖ´¥D%Mª(U­f±DAhíøâ‚}µìo\ùo*F1ßåæ|>gyØ‹Iº&eÃ{É¶ücØñ2*XQª=‹e|³OVS×æÚ#š€¹ãD°zzy‘4óPãì%rÌˆoÉu¾¾±×¼B Š¿:ˆø$%åX¦'­ƒw*!]*Im7ÃØmm+ºÓ·g†]Öÿ2f…ŒÜÆüBHãó.~7¶v»ÊQW&.0Õ ˆUÙ¢Ú¼ Èêï4yŒ9©Uf!°ô5ÙPÇ:ì–x†|’ŒLÂŞVµuÍÈå6,¥u6Y6gëLÃ:­kBÄw‘pà2‚#·ÀŒPó«ÖAïÔKIÎ§.ÙHÚ^åú¨±TiÀîS¯“pñ—©#ß(cwğÿ%Kşç:a:ÌÛzRñ ØZ6sø^U÷Ù›¢ºª®ÆG^¥‚‚¿qCÑ¶‡¸µœØ]Ö€`ivçA›¨dÛî4Ñ˜š	şgÛ‹×ºÃ~­ì·™ïkñÅOWs¬ôë÷:¼ı®u··‡s+ï»™³ÇC—êvÆÍË˜œŸ?éóçÆ›_ğÊ“ĞŒ^á±
›oá1s»ä\B	¦+“Ø€XÙ°KkìgÎqpUFµÖ‹1aOÈ`17‚m €Ç¢'ŞƒóÉ9xóÕ«´N˜‚\Ğ8¡ĞÓŞÁš`ë
_•áhòğKÑ }¨˜ÏkKÒ†8Åá
§,g92½OÍ†P–Å·ísj”Ì‘øK^ÜÌñµV”Z_S4ûĞ¨’PDJxx›ªwÏ©N’IÌQRXÔßà„‹Vİø÷jî]ù‡;9t\¸Û¯5“ßÓ5ò¢a¶•‚Õpş1qÃOfá_“Şõ±G¿©y·–	ON;ı<W	Š€x¯ˆ!ñh(Ç³¨Õ4»½İG½Êìı¾J­U¹›OyèWjŒ1nÚj^Q>1»xøöÂİ›Ë4T"Lù VE˜­²ÃNÖ*sQñ”Ÿj%şÅX® ÃÉ>ã˜‘IÃ~PÅ¿)Á­¢Éë†Ú†²ü;Bƒ¤€b÷:©li M ;©-%ı3|˜ş:{3_s&ZTğÎP_¹ax¸[ì²°ÖØ0kÚ|WøOÊq·}%MkqÑ¤bEî¤+^ñ,l>u"€Àhpvé
ûº;íhtçJ9°nÜµ»£'sfûhlHk¼9–‘ığ¤	U…Öóöä}˜‹*6)—˜Cƒ„R£^V;í‚êz²Òiõ¯Ç{ú(§zÇÉ‡_¨Ğõe¼8´ôÉøÑÈÆäY†¾2üp1qëU®“W 1cÕ,V¡ä{ò~	ˆù|¢Ğ¯åòùi5aÆÄìÏ[m•S”ÛDV±…›ÅŒÙÏÎËPZŒû@y$­ø˜>KıMtæ7P+ÊµÔ'$¯@eBîÊÁBJ› õÀ1i‡işO7)1Ã+IÚ„“ÔklĞnEgoõÊ èëˆÍ9$~•ónıÿŠŞÅébWH`¶]ú»JóŸƒa÷|›!a%Ÿş¥)ÛTš‰¶ÎşéÄp2†ı¦®šLæfnK_Ó£‚Ã°ÀxD¾ú‚®¥óîğ˜áa\­›n¬ºàˆœîÅ3‹KV’ì‹•	RÇ–,€u–Wåœ“\Šêk!c{ğ™×ƒüHç¸ÑÈ–Šå,L+B7Ì®–%lL¬ZÌL;”®¯áífÀyÓ•ô:jrYø*‰©(Èõ“ªp5<9²¥ŸŒÈÉò86ğ!MZæ®:<vQõÊØq§,-(Ó¡ø]ñ—ÔªøGk_Íöûº;q‹¾Š5Œáëé47?5ÿ/LOdl4Kœ1o®ifÂ»^¢²€¥¬z&yp¨pƒ¯n
WtsmÚ†(;ÿÌ]Ú€S¥‹Ş¥Î,£Êw#ˆFSLôæpıÕ‰YÑƒ
EIÃ“ø(àĞHø‘‰­0z¨ûü/iv-5T_ÒÆWˆ†O¶šä…~™‡5ú=ç9ZŞeF½]½wL“K™–´Ù³ŸĞ€s¹Ga¨JµÛâBÒ9Gé«o¾œ_öNßq<~Í1ë~öÆS–C°¢=Ã°Ú+ã(%Dt×æ‘ÚA_–W ¿‹ØMifSì—$|j» ˜Ğñ‡ª„.1Úz#©}g&>ø Ò/ìSÇoÏV]i£)R•—[ñ/¦H£a¡mß§­‘Ğ´.†W{ĞI2r‡%H\ä‹3%¡C5M>²Ç×5eüäHšÔ”¡yœ ÿ¯‡VS¨Øíƒ i%‹6‡qùd›Â#CŠD“œÊÀW¹aÙ¨&W“ªûxn$GtqÏÆô¬~¦¤µWÉ{*š¸õíÒyíÔ`­ğ[pS¶Ûr0= #³7‰á÷h\íA£é§÷¨ş¾óáVÁ‰ «b„êôÕwhNÓÇAb…mNHRŒ%–’8ÿ¡öƒÉûyÚéş[Æv÷Y1-].¾PÌù>ĞIråï»ë¡İPs5YI<ùäüĞ*„9…bë v¦î¸»ÉÊy®³WÏ­ô*.^¤ı²šııço}U¢Ìò*¿z¬Qùø[è® «M¨W²t²B;=n²·À?Ù~R›fDíNa°•s>|g«=uÿúFJ¢UäƒÈÜ±aSÛæf$ü©ÿ ²2×³Õ–jqŞ{*³t–¤ëofHÑøŒ‰´xÑÜÄl$i<¡Oz€71ùUÕ€g£ÁËL4òÚB\cc=2Õ;HïBo_¬u|(LÈÉ],•"vDÇ{øÈ²2B$hñ­Ñır•69ºNe[OŠ»vª8 sÉ «xvv?Ûi÷¤ÚH¤ŠĞãV?¹§÷w¢e_"ñâ„±
6ºú‘ø(çç#$\	¿bBÄÃAXâ:—íÆkÏ?‹-K`‡Ô´ˆå4¤8ÈÆ›·@î¯¬Ë’È"š%°GÆVšô×iÀå'¢‡9ïn-ºdYÏ³£oˆßƒfb[ï§oŒÙKRc¼kqYÀã§ôÛi èg˜éé:¡ñ§É¯hÉ«6h ˆÎïÕPyÒ'â6Ù´Âxrù9ÃÖe»ÁğÁ^PkgØ*¢íØñcüxg(òKÓá29M–ÉzŠÀ±Hù¢°¸qÑ˜ñ¦Óë¯?²a¬°”S.Â¯è„œwÕqPÑS}ÓğKhjEñ’¼óŒªIì{İézÎ-ÔF¤IpÒe&{è“×"†Åü•FëñÜæãPl
D}î êS<jøÍÌ0Ä©'éVDVíëóË£3 ÛË½;;nˆô´Æ®İ¦Bb{ßÿ`_Tõké¤`ÓKL4ênîmşfàø´ šŞ¶Ê›ùû\zœu‡¿éÓÍÌ	½ÈTwôO5ñ=s[E°–B?íÖµDóó×Cİt q©ˆ‡.„÷íx·¢Ş;rµtÿÃƒP‹ßoÃ‚µ·e?Û¨©çéi«ú=­ Ù[~ò| `­GXıcğÇú¡EæhE`Œ•ˆûäY?şÓ.ß°X¶z}®¹­Ác1äbIÄcšPcFëæ	GeÂkùÙ·İùJıf@ÜòYG¿|*VÇ‹Û!È‡´Ü?	\ªˆ 7a2b®™ö=¼·ºÔRÓ/šİ‰ivx‰*˜ô%°¯”ç„bØÊaş‡WÁ9ÓBİT˜„*DèFí£ÛFtE*ëí‘\èÕ¶ï_y»“ù™[X-¶ù/P7r_‡R¦ádîq€*Ï'ÅnİˆbqâI*X†8€„»sµ¶
êÇÑûùùóÍªm.•º.”ïJ\)	_EéA*¶tp‡‰æÚé'øÀÌLZ.‰1ä¬‹J)ğ(™‚Ñ¶œx‰ºE0øQÄ’|²Ìâj_WJİF•Ú¡7a§¨Ìİ›Â9¿NÑÆ¡V…\sS,Ò“d:œzØ7?7¯ÕîÁŞ…¥Ë™RSKIJ"3¤PlA¨ÁH;¢Bq©‡Ì6¬1EK4ú’ëáŸ0hÁí9ƒ”Bµœ?m¿§Õí¸á]¡qJ¤í~¬÷
âùÓµõ ƒ“ŞÉfKJëŒT6IàJ"ËJÉ}N° ¡f½şµälôH€?®œl+ƒ²–DkSÃøÓ‡IÈìÅLè:úz3HeŠu®H–·•”İ1¯UùEx£wÃNÕ;åCŠÏœ3œÑ |©ÿ–Ô2/øLøù±‹8`ÄD™eà1Á÷|şM|²µvÂjı4Ä ù!ÛO¯ˆ¥lz¤óJŠG©ŠôÖ»F¹ÈâKT›Ì¾¾c9†û1Ôóè]$sv»\ 4ŒsşRZ¬]Ë¼&™ˆb;Èc†½ØF&èÃôée_ó[÷D5çËmÓ¦âl¼¿=orø3ËRM\EÍ#ykac{fÈLÊ5ô„w¡««TBy6·êÍd4ƒ•bk´-…’<áIö*ø¡:'ãôn/‹mÌ&é™#ôÕFQõ[R³SÓ·ÎäI/Sî‰â[UëËƒÜƒm44hÃªk_‚!6n†³)£ç—ÌÖ¸õÇŒòÉÎ
îg‹9Kô£QAj€ü>9îT§²Ùê®şæı+·~yJGZ8,3E'ÜëõşdÓæ4†ÿrn$«Ï@º@ğQ›<ŸŞRHQTÍ'ÚÒ©ÀH‹ö+Œí`_é7i¹$]($ âGˆ¼BÑCìA!9âî¸Q¯Cqb%ø1£2ùMö¡~ynÌ5]8I€…cõL”À…óZ%¡t||ş!i™ÈÍşW<S×HK¹Ši˜ /Fe2•èÁ;ÿÊ94CÏÌ±•şG7±€J’#[ÀØ{Å"Ş…&lå8ïm.Wm­]ÓNnkpWcm-îçu”NÓëRÅ“×Tä5„×¹ç˜€•&´ a58†%k÷Ì¥íŸ†iá~ö˜fói1 Œp°xˆÚ®•™mhÑÉÜ,6QŞñ¢ÒÛûE‹x¡²¿Cz™¡’ˆ(¹áWê°Ö•CAà,pù^„gÉQÌ+?ı-Q]7I)Fo§¯òJØ$i:Ò¥”xâ ´¿/	‡k@un3Õí>dpg=„{S£Y××8÷cQ¶?³€¼\9–î»÷»4\Êëë<za#N—oª¦Î4(N©m@­ÿ`CÌn¾S	”  ÂO ]Ğ¤†!¸|Wà†J¡	´i¯»xlÛGÚù+u?™2µŒf‘íñ,•A\ñ®¨0iÀ“Æì÷’<h£Y.ŒsA]q³ƒÒ«TakQ[é&ˆb„í^_]\ÇgSßÆ–|"õû½ßmç°W¦C¸{‚¡³‰àöiÍáòµËm˜©"s²;ì†rau!fˆ m!ÃA“K=¹ÓúcñÜD0I«¸™kÎ³‰p í&&.É^Ó›{#iŸæ)mŸ˜cö¸Ëì»µmìRgçŒ‰0 B(3şAÆ¶}û5£¿·16Ïí…#ßß£ç§`ò ÎÎdƒ7_Àêòô_‚wwµ“x×T¥sÇä÷ÅQŒŸ°&3_IENãÂ[jëï=¯«ôCôìŒç®—÷ƒDDì„¶`c	5Vd]m&i.ø(Jp( åÎš¢‘‘¾ú<IN•–¢E	|ü‹¡<¶`Ò“Qôâã1T¡ƒ¤øšn¿}D6(–ÑVñËƒQ¹÷ÌM”@˜ğ}Ûñ§ÀÁ$}`ÓE4I2ÄŠ¾
z¿/Wº½ ›#Eğ^ng€¤g2KÕîTÑæì0^d}Ûéé‘è?U=À­ˆ¥d;Qô|&ˆ±1]äç^Xìğ1ÜïöŠ2ğ/Ëií¦?°Ì‚e5sÆ'ã|OfıXĞ©:00 ]ò0Ù–¶ˆ­äƒD'GŸPÆRQÀÆ¥xMĞ.î—Š­c÷ê®›Aç²_«.%hÖÚX»ÓJ&Ïúi§hÎZØD&EÙR>.ĞZÙÈ±NÜ‹Y|Öœ±u¬³ÊŞ'Ç${Âásí©Îó¨Åt=Vdé†‡sØqª~aìè½8‰¼zi;	Ùî R™„(ˆ4Æ|¿n=‹
mCUâ5–Ïÿ}V´AgŸë·Å¿ºƒw!GZC¯ìiæ¸@Ş½ZÔó/;¬àg†•¾ßg4ÂƒXíb0H’Bûs(P—¬¤ÿQè6y.bõœái´ç\:K8L#Ãîf¿j0ÏœöQXq¿n^»uã‰¼„™ÑˆˆZ…=¸.¢{4ü»w‰Tó%ü*S­„‚Šå^?Áõ=-áÿ6¼‰éwtµnÊ‡Pz¶S«Søod®Ê(a9¬2[šôPãóã×Ö £ì®ØÓ4ĞÂZÛ35eºKİ\ÓÁßı>Î·D3]‘G§'5ÔY×©İR¡b£Ÿ«FÖLMS¸8ê·ŞC˜vvà"Ëp	ùx×òu¾VŒ›f¥ò¼•Ü[5øÀÚì(€Np%¾&qÇÚVJæÖ„WpÍÎËI‘kĞ=ÿCÊ÷6Q‘³·Ä»f'<Y÷‚è
0S&¤Hñr¬ÑÈ¹SCÚ\JˆâOËÜ"•E?ÓohşŞ3•P™¹œ8ùì£Še3ı¨ş}aƒˆIÚÂ„ªî§éÊ•ı™Á¤úßı¼ú¯Ìú«Şî"~ò½Š»½0üŞgEåÍ¤!>u	·V8â.¾5¬÷Uº}¤¹yõ‚øL—ŠúÇnÆ¼Ù"åôs­Ë–ÎXäI$ùeØÖlQ‡Z4XÑnú`«4¾¿¯çü‡ñåMö”ëÑm®Â™eÆoz‚?XgjIØW,²Ç>YDèNk±h«	ènz¨şÊLRÔ¬÷ü’}âåõû$Ê´2şcÁgu>Vâ|}ær©íèÊRºWŸ^¶xŞç )|xLÅTâ_"69R£éLA´Ó{¢öÉíY§2ÀtŠ‚t"=Ùò²q¾,ŞÃµ`/6m(Æ‰Š§`H¾#Z²T +*k5ô»î}‰«‹ÿ©Ğ²'fë„wŠ™ízR¸,ô§t²¥ŒŠÜ„‚îÙ×¦‚ø>ôèú5Û~¤åÑ¹‰ğ±ÃØÊÓÑpmÎ;
®n§DÇTE`äƒ0ÜZœhtËÜ€Ñgnš®áDß-`…è°9£eoÛPFŸ¨Óÿ´³<o(?ˆÃ]‘šAY)îx«³'„X-wÂà^êúêÌ‘×ò»›G³ m—•QÅ¡€ræ„‚ÍP	Ï÷ap/Y¤h8Û´¿ÎÄÆnNåFhæÍ“ZI’‹Ìñ(–6.«²aìçêOÎÄşnİç¨Ãk³Ç/‹Ù“é‚GŞ|DÁ’nôHMc¼N-é±›¤Q»Ó¥ÜE(¬ó«“Q“|]†p(óì'1‹z½:Ë¤†Áa¾\İáIâÆ½æP¥f©ëè üÒå‡‚µUZ¡P_;ÛÇ`p:`Læyåì¥Á¿¶5YD°óo `+´¹¯¸õi±AûxékèÜ†¤U2û#QÍ…'Ó¥ã*óxv”X…ˆ.XHJtó`‚jå¥ _GÜ èlÛjB^¶S°ã£À¿ÇÜôÁy&ı„õ›bCÇ÷—Í°æ…2‰£Şÿhi5vë²Î#(TªNÑƒ"EïÎíûAuøÆsñ@Vá×È)ğ£Ç++t– H[»ÓÊÖˆÀ°ZZº¦,PiÑ4[MÕã¶Î4õÏöw®Èy¯Œìb«®a'%¸¶»™}±Ñá*†U™–'×}Ÿò1ìŠÑ"¦3twlŸxQôg,8#5Ìà[(	xò(ïµ’?®÷r³2ÌµÅ²?sQ.÷ˆywÊM‚Ï¦Ì3æ<LÆ/µÄŒ­†¸O=¼fæD2RÇ	‹Â¹=¸Ğ~|Ğá;qÇ€ûM ğ{nçwkCoz×˜tN	t8Äã¯p¥#ËĞÏCÆĞË”¨.BI´>n9`!Q* NT…Î›½›×Ê.Ğ*1„y>û³½÷uèC¦JEp»åYöÖ¾KĞ²Øƒ=0B¢´à8Ût!ƒ©şÇ;Õ*q'Dğ…±wëC)éa<(7¡(œx„ùşŠêà‰ªªíl–`ÒÚõYı«'ƒk³ÌBÓ‚~>Ív"‚xíb÷ä¥"MYCød^€Û¹âêÂaMñCÈ=ç¡öZİ\÷ºÊ~ïêâÚîJD&laÙèß@OŞô*[Ñ_$‚h¾”ÿzxËMÿsgºh‡0ÿ¾q0·ŸÈŠf1 ÂmÇê=ÀAT¬·ˆ˜hÀNÏÌc#±‹Ì¢8 {WİuœİËKÍïøùµ¶\^œ¤•QŒ‘GVµ]Ã§¢°-nm^Aã°zÂfĞ¾,Æ¥ÅxÃøù		¼‹u?¡]•¢WÏoxÆŒî>‰6={0vº†T?¼hŠo@Ùg~ÿĞ~¹H_#}ˆn3™,›Æq_óÏ•6/•2mâäÍ%e•WMsi@wATÀq}‚Ñ;*Ó ‚¬œ•¬¬œd@–º™;©°5dóò§pb!ŸÍF¦eQÔÃ=¿®¬c‚#Õ«’[FsŠ¿®ÀJ<«/…œ ½3¹Áï”şÒTİyÌM3üÄ7sá{z¾šPÆ§µ
Îeñ˜',´ŠYÀìw
¤kV¹ê«Æµ2%ôÅ“óÛ_%”e[@v›EI·¨ıÇL]…ÄX µeÜh¾í&¹š.	òPytCÚÌí[½Í¡ĞÖ¤2!Ëão†}ª…`7?Ëê)&l
 ñ|Ğ(›)Ÿü¶‰ñ•ÙÑéÏMğK]“ÒÓÒĞ•ä´sŸ5¸ÀM]².]ïCDBŸNsá1&5^mÆy}ÀçgİMúgQ¯ÄşOôù8S®œ\İ+ûuR³Ğ>ûåhZtRB„ÒrR }Ù#9 áÚW€C¸¼?ák×íÌgsU¡kG»);s[ÁLŸ/d…r¨×Hø“tÅH¨«­®iÜùÈAsVp
Z¿»“I6ß+^º,Nş8‹Z¬Ì™úĞÆ®²>¡sr•¼ˆ›UF³$Àën#X»õ¹Uou:€Ú`Ê+¬=¿ b!Ó²î©ş{M’Ù‹ú)o3JFhY'W¨‡* ~j•ò
¡[ŞĞ‹7Bµ|V8÷º9ìl6Eâv¡«tT¶©õhNºº!RâãùQ!~zwË¶½Â“ív‰ğÈŒN °~![	úWHÈÉÜÀi…“®2ıáïìsÔ VÁTô\–bÚû3¤mŸÒûÊÀ¡¯â:å+"¿cWØĞïn»aëÇPØu%L~´câÃâÀZ‘’ù­rXéÊŒÉ°iædé´~½xW*3Òz^/õ
’<XTôŞrÒ*QN«Â1‚E˜ kîd^ 9èï*7&Ü«ÖVVjé)¥¿°·× ?3<$ìwp¶„~e–‡´±»PĞ†‘ú;lm3Ñh9>Be&dÏ3n}¯ŞÒnA	äZ	Ü½?¶‘ç7+£‰itfI²gJùáõ0H!Ë<:à•ÚèÀUP›ä¤rçÀC’È¾¶h ‰ˆŒ”“*½ŒÕıÚbP×˜­“zÃ}³ø’?÷ÌÃô2ıJË®XH6Ş;SEÃSä?1¡äÈ˜­³_Ğ…z„O.b¢Ã<Õ%›NĞîP›'ƒÀë|N	WÀˆ¹S"Äó§èÖaDc‹ƒb“õÚÒ(†E"òY8%Â'Iõcàr©LiË–—Š­¢P˜èü~)Ş1gíM÷•w`r¡–!¾KUØJk:ôœşAÛH—ƒËp8åÃâ9ÓÈg„’w0 4š“@îÑ}ní™áÛçTÒ<Î}	q·öÜ¼z!¡ÂDxA2up”åx†Â;m’ƒÔ˜‘[·IW°½<«è0¿1îÉLAÈü5~©‚Lºû5-ŒíIÆ‹‹{E§ÍÇd#Ù9üŒ©LÂ)óê[@ÿæ«‡9W“> É Ôr‚"Rİ²·&³>~ 8ˆPºÌf³R¼¼­²×¿>İå”¿òß$:¨“´Êæ•á	ƒµ.ôşá ìİŒç¦F5ã 9×øˆÂ â°½ú\

/1ì_£âûàtŠ!ˆ•%}EN.ªğxY^´­,z-¼`2m.¼Q8vÖd‚æ‚¤iÁáÁ„¥ºqâuÚI§j	0’†äØºˆ¥hîU¯Ç:Z2¸}l;åb’IŞÑ>?`U>×Ró‚0ª›©7ñí+fÑ«ù«Ö)Q¾±I‘I7éé/ûõQ#àqq¯YÂ„E0–Ï±Yê³t‘ŒÉÛ{ü*\¶¯•ß×WA÷*X†9È"(páŒ ÖFbÅ
¤Æ><×ÑË¼–+Ñ^ÎÖ]ua!—ÿ¥Ml;q»„È;f\½pmÈ¨YeŒÀ“¹(±–%š,J±?Õ|ôä’|MBtí¬uÌxÎ¥Un’¹w¯ãÎ%é™•áCÄtÍ^s@Zò@‡¦ùÛ'ˆT+gÿ¶´Ùg`³U–4Ÿ¯aH;;‚]% 7åø/è Jd†i”¨Ô¡Ü…àÓ@¢ö^©–Dã¶­|ò_IÊìÍåvúß=FP½0j¶şG6Ñu#Š^T÷)PŠ40±0ˆF“b~ t0cİñÎÂö2H–®3-©¥ø!šÆˆK£ÜÈZÁüoàR²DŞ[÷7; ^˜Ø}˜a¿ÁŞ¾ÁşÛÈ÷îãÄ©Ø.^¬ğ›Ahñ:µ[f2*{o>'QÂ°3ÈÒ*´z:±>øR `õ¹€#{p>ùqõåcoIïñÛ~Ÿ9r®õi¢.®T5­i«TRƒ“®İÁ$æ½LWu_Zøùm9…QiÄÿ¢5e›£›*<œİğí¢| LàS:ùËÇô'%WJZh¹ıLeÁÆô„¶ı0{â6Ú±y°æ«VlÁwğÄ¡QËVŒi¹æ_-~TxÊìm®/’‹¼<ãî[©ÌÖ÷ê9u<F[…A±Sš¸Ëuğ0ÓãÄKğBá’J:Ç;ÛØ¾›oÄìKC­İZ`\™;œWãÊŠB8¼Àé^£òJ½¨0Ú!Qˆ€ßRğ•NiyjË²ñR	G«Ğ— ,pÙ>v¾]¢ÑÍ2w)~ë¯¼°Ä¼wC’‚®œö\<Õã!û®%R1¥áöaÖy½#ó¬ãOíå…ó<Ù_Lca~ÉY÷ö9ı66e:µ ÅN3ÄT=‹]nL—ó$5w4¢WÕ™/ÛªâL•ˆ±Ín2è|_ núiš£u-éâ ÖØÕŠ—‡±oß;x¤©îÁÖÁş­K’ú2ªf¤p÷¤ (ı7Q²ŒôŞ$eÓ<«•CşgmÑ…hnr6´~ ›—z’ø‘Ëyè"‰÷?sƒ•ª}|Š–åÊ¥ş‚çbÀ.BÄVÇÁÃ* -ı·ŞpL¦²æØ¶i¿ßÄ3^Û­_ÅØ%gJÊÎdq†NÊXÌÜj>®Á›¤k–Ó	T`r„Ãp ·„TöËµ`üGÎ-K=Rïì@÷v_Mî
Ä<›¥i]&gv DÏ€·’Ô@by-iÛ.àd§°9¶u”Š!³„Íbyqë“0ÑĞ”J„—q2­óÚq©±JÕí§dä.şñ®ÿs‘?>›I¨ë•úoï1Cr ûåMBCÛ–gq
î‡3â¾*¢ÜĞ‚gÅïê€¥ŒSD5
wEÛå^–è:YùS”üR5×égAH¾¬ÎWô¿ô ˜K$Ó5Ò"º-Fl|‚`YŠl{(×òJÆír=[JÙ…äF_qkp#÷mÑ÷nüKÄ¿Ím–RÒJN¹·&_ã–?§âÈF]¹Ã¶Õ~\¤\=ë<r9Ù^îL)­¶4Ú	Ó“e‡r`ŸØ-Ä’BQ4[¶—±sg¥;¸c§WÚ²%yş—©aÈCÆmÉ9*ìt8<}Á†à¸ôµAFHzj$î\:-‰üXĞxñs^±é Ì…úNFÅuœªp—æçÍ¿™Dü«û/&õâ 8¡ç;€„(”±?rJÀœEÊkÃ6Òğ¹î}'ıß³íÌğ”:£L¼?@‘jŒ*»´–ƒK›ˆ~ Æ—?Ã‘ùZí¡ÉpµZ'›`½vDaóS"\”W²Òä9ú×[
ÜÚ(-CQ½AŸß+'td<±£iî&•nµv¸R˜@Î"€¤	-/–…²İËë½oıSTx2IQŸ}Ôú3 gÁ”€õ„AoW“¼úø„ö5îfUÛ¬vjm]ğ„§+dIWjğòaGbôì¶¤XÅ»d‚›5SéŒ2í¡_JôNîb”ÊØb•C3PÈ|
É¤,Í®{£5]*ÅGüe3=œ`Iâ3…O¹Ù1zäîäñ^/¾êxzp·ƒÙ˜ ZZ¯%!İo£1d¿$2½æ³j¥ìÒŒI­tDU@ÑØ-âX¡äŒ|eb'iÇqÄÎô~Ú½s(U€/õ¨EÀ9äBEØ†Vô S.ä™°‘Î­0ÃS‘¢
¬¤®æu™?×"¡Jöd—áWóB€0#±ÛœR/ªG{£î‰Z¿JjŠÃ“
O­÷{dòq-µ$^ågY;E¾¡Û¶ËÒ¤İ¥~”l~ÜŞN§÷^éÿÄè\O²Õ ÂÜà|şÛøáÉ³œpbN}q&!¼9ó>œèğ=Êëíq¿Ö#Cn“¾ë‡Ã’ºgÔçî€–¸h•ì=`:>U¬Ãÿ:½f¿«`â ç}fn™…šĞ!·âp¹È¹D ¸ÙÆ[uH7ê¬<ªÉ~ìÎj¯Äî·]ş½ÚTaŸj<-zúåk×/)¿íëŒ6Á¹­™H£>?…"ôüRLÆjìÎCñY:¢uÃ´ä†jîWŸ‰©é÷Ç&ydœX¨fÄ—¶©¤Üó¥5+ÛG¶œ÷;s„:W‹ÊHâ¡ïM>ãPvkñç	ÈP-X]¡ÌX…5‚óºYfZKB©}Ö˜óVBZ·Ã+K¼Q©¯Ã©Ğu:hà’k/ëaçS¼Óÿz1súïœë³r£şj›áÄÉy"µıïkY¼4FI¤¢7P‰+€ãöˆ8_Ç-•ÁZM*¢AßB»VÓ»2õğ1ĞáBĞµnp;Øıƒ ÓBàò²²®Tt='y¤èÁ<,ûH:'Fœ§'ú<TßáY@ à3Nº¯¨+6®#½Šç]«©ğgâ]—‡o»b`‰)Š:ú?N:úÛ	İwºêtaÒñ­YÑ²©å¼r³‰0°æ3§‚xÁ›”è9=1¨á-¾°Â+% Ë$
œ|¹ßÊ¼ŸUh{éË‚¯²ò°È0´tÑ¹Ø>°ïşUpŸ˜n9ïás3D¨C¤jÃ×½8CÔ¥yµŸ3ˆ™[Å2­Ã*'™¯ıkA1Í®¿?1Íy) K¼û¼´·i1”ĞŒ‚3ëkxš‘<‡0ˆ<³OğVš­©e°nAöHñ»;ÜUşv•¤¤×Òû™	ÏóÊû¼o>§äC1uw‘”ˆhĞAºÅ™`(Í<ÑKÄï!ì%ÃDâÖŞÉñpKÑæ¦b£Y¾…kPd¢‰;Ñÿ¤“"š»tß±3X«¾KkWª>·È`IZİ`äRl‹D¥Š$Ù:×)-j/Üï‘Õü_¯ÜÂ‚}O„œ$¯^ÅŠù‰­=köŠ¼´z’Ÿğ ¢$>w€ßMK3 ÷ÍÓ¤Où UNOçLÈ¼ô³÷m×ÕPh%åWß66 *’ÿ VŸhT„³0©j`"¹J´Í qAŞ¥#:øqêëG²Y…<òbgŠßÎ‹Án!’Rõnôhòc¾áˆË‡íØö–9­S7åûß}ˆ×¡1w<É@lÖŞ7v<Ÿ0Çƒ%ü!äÏ¶\Câ±Ü”º‘øzå2ãÄÃü»ñ1Í£œ]5?ohgNLòŸ#ÿCØc4¨½7Ëµü}"Dú­ËÜîqd²VÖBm}cÅæ~rt{0à·P¯˜d/%Pø»ÆÚ®¨ËEÍŠ2ÊNŞçŒb²:4nÎZä?Ä…³\-™i0ğ¥!ó™¡q,%ŞRZ°ŠCÀàğÑxğä³5^ßæ%Öcnê“‚’Dh"QpC B@J¾™ı_ğXH±R\¶&}yûbT-©.{È0S¤a!qbÔ*3µßKÍ›0SIZk¼hb¥f›‰az†9ò‘hßImªÒ6ØOY–ÉÂz`Ç÷GÒ56»$S	]eA®¿fÃ`cÆŒ&à>úJ^"hmMñtó9r$Ó`<!öN\–ƒVíCc»¾Ó‰äèJ9jS²f$2*×{ª€S6¾}‚Q~ƒèòÄLÎ²{ ôô×ê«Unÿ’'^‚=œYJ!dD~¼KgªbOòŞéã¤S> ‘Öñ.Viö%‘f+ìHÕ¢†A%x’Ê˜Ì6báznë:Ã¾À`‚OOAól={D=1zàÄÃÜDŒƒ°^	…«Ş¦:ÇM®Â–„gÔI8Î¼Y'„0›#'ĞWwCÚß­HBˆ¦¤0º(İ5ØÆ¥x’¥¡O£ÃÚËšõ­¸Yä5¥Ë‘“ÍF9ÅdZÕ¿a›(7Vpw‹o+G0r„ÍŞM#@çİ]p«Œ¬jõAWç=¬ •Ê±hÌÜŞ!‡ä7IÒÅÑbWK$óEDËßÄ*tÛã:o—-Q¥òU x‘Í»øW@È€Úİ}—Uê6Ô0¶³‘’¢y‡ 2·á„†0Ä%()(^èÙ²Û9Ê°Fj¾V ŠãŒ³…Ü}P„wÙio¡)ˆxV›¤Å±Æ^jC”¨6t(İ›"ŞÑï¢¸7`¨–tùĞWi@SÖßrN5iP–5ÅÃm5è‹È`º°ñ$xİ«*GX*!šP&Æ_†‚k/Çc„Ÿ–DmI:>*fdgTÛ~àÂ>4±Kÿb@½Ï×-¥‚¼<jyÁgh9ûö9Æ‹gr‰–£÷cÊªJôÛáæ—$gIÙÏ¢¿¦üzª´_r”t>YĞ‘¨;hD}Ë½§% ´ü#CÎÅ•9ß@÷Ï¦Òšğ‘yÓÊV;!0µ|úMñö€û¯˜F~†¦wîšFEÇüåRÛ8"†òæâå¾Îÿ€ºn %R²­.fúô´ü	LÓ)c#¼Yi#oÚGF¯ß¾ÈCYCC	†!ÎñÓÿ¨f[·îIŸğ„,:¬LÁî¯½PŞ¤w0¸°vÇw	Yñfñë×èY6•ñM‘ß›¯/ŒÆM{°@W4uH´—å?=¨Ë;6g˜øQqMÄ_Ô‘ Ç_Ïä÷d^ü`ƒ#ÖşÚ”¦¨]Bà²ãSÄ2 L£ÕÌ¡q-y=Ö‡fl±ŒÌZ¨Sëşv}rÚ8&ò kĞ‰tÖ³ÿŸøGz<-yëâ£P§¬ñq™•ëœíÍ¯Ì(û£
XlÇ÷*A	7-=‚qEË‘
nî“ÎU±kÏ‹;)TÆoXÃB,uÇ¬ â<’yæx	k´qœ63V2K´eõP{v¶àà†*”Öº€ZŠk‘µ^a€éÀTzšŒ÷TÃ-·ƒ€âLíct†½•èºj˜÷h£#Ö¨N)Â~È¯(cõXZÂ¥’è¨)‰èCE3?vØÄ×›»« ËÍ¹ïrN°‚W.»Jš²Y—MÇB ˜ff¿²Ô«÷ªn¡åñïÔÇşb Úíû@V´SœçXáˆ_$Æ§—â‹êêó™ÂUJw·œfOf‚|hœ°Â¢š5µ´CRº}Îün#ËäF	ƒe«š=ÏFl0>ÙÈğ ~›XÊC-¶&’úa?H>åºxn½ŒI6ıC5µÃRiÏR?cm_ëG—A/´tZ­­-¸—)È„Ò)9¾0}æeÙP›öƒÖ¦İ¢{npx^L#HÅ@;´§„°(EFçŠ]Nê+- šaôYõV™KÎ°vD±p+yİ{t ½ä0Af.¤’ŞUz‹”úûLí]Œz5ÒÓ“õ.ôòºüò«\ã4„Ba9S¿·ÎµB¨	E¸ÕèÕœÛ.eB xÇ…ttÛ
Iôı5Æ˜Ã 4‚Då${E[©¤Æd–‘ºã/q$ı]H'ÙĞ¡Š·ÃÉ ³¼ì-]r‡bê–ÄÛçÿîÓ"Gš;Lıôs¨ Q±·Jmı{İß:j2
ËC^›ûûÖ­
47'h¼¹xzğ÷ü—ÔÚJÚrnùTò˜Óğ£l¢œ[HŞ
.ãåìÁ³Ùœƒ0Á!üÜ*@û*İ†Ê¿¤»
¬C™@üÏLƒäĞpÉ¢¡o—¡¢›Ê{ïÍ­@{<çàæa Æ×qDPëŞÍİúÊVsû
(ÏÜIßÌ—ãCÆCª«!H³´]tÙtfJ¥SÙÂ+,9ô¿ü' ©$”Ùîå‡WchÙ:´ ajĞ-ÕùM±Õaµ¾[§èß¡ß"È~äÓØ:Ì^,úÆ&còÎÀ;…W¬‡e˜S.yP±ŠòTÛ´unä^d†öú²nb£D„"üø¢òşÃ˜Õïpe¶¾jF§Rs.6@>Ê°''^^hò.AÍä1À7¶L)!Ñ>6Ó‹R ¨w é4brJnĞgå«†¬Y­øç‹²*¨Êæˆ‘»`ÓbÓÈHúïÀPÎ^€;µCu–tˆólAÈ¶¹Ø$ÙÅ¶Y^¿ê0cí‚ÒÈë
¹½Y#ÅÉ^–àÃ&Í~<"‚„ãÂO 6¹j\­Â”ôc\ÿ¹‡~©à/Ìû„àÔEG|µ"Q=uİ*nU;o‘xı¥`Âê{„Ò"±x_Än€?”Z€¨÷)É“ÔcİXZ²súíÏZ,F¯ùÙgÂ¹ì†ƒ¦²6ÿ´.4Åè€zÚHIüïuVW–7âzĞÙV¥©cL½:D áRµ>`ÇO Ş.ğÚsxkU˜jıe”.«®«½ °¢õqÍ^ø³Ç‹\bO{¥³œ)d¿üêËÙ¦fåàâyÜBCöRG¢ÿÜG–gq¡Æ
Umó$:‡µFáŞ¡°WMè}d`CYÛÒ`t´uƒKúí¯4FÖFyKeæzEü‰vQ»ÑnÓT¨;±¸$|ıÊ¥k³k‚Ÿ^•†ñaù–éj)5|¢-uğ¾5swØ
‡T¢b¾Fş[uL:‘CüŞ{ıñäé²×œğyŸ\÷t`ß¦ô.ş/EMUÁ
#ã6$W	û "ëÎqÿn‚yá¾ğ"(-Õa½ÒC4…gú[Ìëq	a4ºÖÜĞ>ÆşLÈÊ%Ú­@§aÏxd³Í_2åù7Vc‰Õ•çºë—’‡˜)§azÈ^°©ëék¼åY­AI­Í>cŸ8î˜‡—%âº„C–ã`G¢&¢q1µ¨„¦,[^5ªé;+qâ˜²õ"„Ç„å1ÈÙşÿ¤<ë˜<m–‚ìˆg…º1›SL `3\a+Ú|ÀêDŠzy&ŞªóÓVøÎÛU\Ù&»:Ò5NàC˜oøøŠİN$ã)1È‹«Ú@å,	f
R9æ_p}±êÿ­½Eë¼ıà_\Z½ÊFU”S¡×GûO+"¨Ñ.†ŸúRøL3š¾ nš¼@)ëËE&ñSÈÙI++9«~Œ~ÔBL ÷x­ôÿ[’N€~‘Àhú'ö3uñ›³(9—@ü_rVÀi¥Z#™z WXRòãù‹“ÔQ›_
ïÏQŠ5¾mÃÃ¯ñ¿"ùù¯àÜ³Ü)‰5ø ²TègİÜ¹A­y‡_^3YÂªˆ}ƒt„yJ,ĞÈ°ó4	v¶ï‚Äû6ê^›=hC¤Ó}H}VTl««²â¾áOHvœ@88C¼†ù>õ#(8˜ÂÛƒÊÜÉ±‰~Cì.¿ĞŒî¾×‹½•ğo_êşnCFÆ¤İC¤ó• Íš…KæÿşÖÇ÷“»oÉıbÔŠn5e’Ë2ı›«ï“Ó5Â”İ©ß[íEg¾> e`/A£álF¯(¬I«}p½œŞüŠ©gE—ß…}ëŸÂØ¥›H²­¯Ï®=w]Däøzå‰$¯~ËàÍ¡Ã¤Z*Pƒº¸Š\3ÃØ‚’ÄMü¦ÿ>7ú9ÍPlUc‡[ÌT14FòBĞ&ŒGÊã¢úO—×™İWù¸92ğA3"¬İœnCºı*î°)jàCa§F}›’ş­.3„)5 ä?È‹+y;|îp—ò­pèÂÏ‡¥7µÌß7éâ¨Ô ±óv¯¨ÍJgÜ<6n‡!GÚYÊ=8AÛ~èâ)4®ZÎÈ­3š|27¦‡¥W‘´¶\;l(®}ŒâŠ¬šî °®t³³ŠÊÃh^-Äèã*ÂLÁ‰ŞçâœTÌ!Y>6¹)+¼.¢vcXÖ @? ±ö™kşo6mú)¢°?áŒìÆ(;\õ9w%U¶D/¹Ïâòl‰tnÅAgßLç÷Åç·­*VÜWb`r|Í†KTØ¸hamêÁ²b.7í ¼§jÊÉ~æx_éúœIÏ°pÆ/@Ùä‡M3_
¦Ÿ×U°çÈŞ‰IÚÜ«fîYyEÔf’×ŸHQ~ÊÁ2hŸõ‡5)Gù5óºêEÛ‡†Êˆÿ±Õ”ËR¾¿'øè/ôjúP‹áT›Ná‚»(Äk!×h4Ë¾Oõíò„=™‡tkÕ›„@d©¸3H—ëI…óZ^Áw‘aå‰Wşã\¨å‚æÿ¹9Åt†ub˜gI9ğ(Òp]¥ğ z|ÌOÛSë˜ü8¦åÀ}F|#Yû²"ÌŸğøXŞ†˜0FÑ\ãèCü™Ùå²ÑÂ¶‚g5é6Î{’SAJˆ´2Öİæÿ@\[hf,8½40s¯øÕŒæ$öª•5ä}BO”ç( gPTßhLíN[¢™İÅÇœ¹9Q¥pïJÎ¬·?ÑõÌê»$' ´eÎ#w“¬î)˜:Z8À5»Ü¬Ú²ïkå÷|$rº¬¸”$J“wàĞ["Téî'àH’,éO³ë’Å(«“yƒ°BjRhi<œÊêDßw.¿éLøÇ©5¨UËVm&|?Ë~Û;XÅ¢œ>âv¹ d(ã›®{PÆâ0İµŠÎF"Úƒåş—ãfÕÑ"Ñ™ò]~…ß–ÎşÄ/Ûë:QY7DÒ‰²poĞUR‹òuÅ¸ï£I«së8Üµ`g~181OEÃ×X¢û§$	8B ¡Ë|#êOÚÍ—
Ù!^Oë¦Åó<®áb×>@¦i®?b#ù´3øLí 6ØZËo¯Q ˆ('}¬×¶r3›µE¹5[D|dƒÙ[g2ôL“ø–ÕÖ¸‹•ŠšÀ¤b0BSõv•­e&Y.åÓ IVM%}!XA)=‚æÂÛÌSİ—FâÔI†ò(‰ÌšM´Ğz™¥'a%£vp±`) İj…¥·,AÆ$xa8SNU¨'"çø®Ë‚ûf –¥ì×@ v“}Èƒ–õµÒÕ ^.Á0ôË3^~ÇÄîz^7â2Q°@°.üo+K·ù¢2ëBáÂ}ª/æ£İy—Äb‡‚\W€°¿Î_Ú#¹»›yÑXa’]¯ÿû›vCçã5ê¬`ùjXí;G§ÀzJ ©ÁY.º‚Ú7Ñ²qIËîë&éTapqj×•‰ÿàeÖ$çaú>Øš+NáàOTì|ô «TŒ’+˜9›Q¢0äD“ Ç9p´Š;S	SÒ±±>M¹é…Lhªêå@ŠHÏ$ÓCº³ÓÍq·?Æ@¨HrHzğO7cÀofò1˜s÷J.Xö´V’Ïj³Œ–ñE,0Ì!4şŸ5EØÈÍÅR(ñ¼#Ï–i#sß¦hÈÃ³ßo^Õ,Ô
ıÒ-½˜Ój¦sS!ÄgŞOA«°|ö›í”q4P8¸ƒºÈ=ò^^mÊH‹éŸ	;HeSDTùHâ˜¥¿[T&`‹ImŞÕ&¡9Éí'ÿt Ü{ÅØ’ƒ¯Í­û`	Âòıæ_ÛT‰¸EBBfg4ë[ÁbNˆ. Ñ?¦ö•Ş`TtutWU£j×adX w·Wfit•ÔXa¼Ş3`Ï—1¾RºO—{›f¬ßn}‚$¶ˆ\¡[¥.ïeØšÚ{¨Û•îàz+2ƒ½Í½Y5#JÀ']V¥dÌàFÁüÂ¥ÎTìC(;0úååˆT‚ÊgkÁµUøu9ªK·şì§	è˜ÚÉ¿]åU6qá-æ(TE¼>®_<«Ex-ƒMYP°ï#©YK8V; ¦4ò7-”ñK¹áÓÑ>Í5Tı¹âœÂ\”wöµ/$NYT]¡>¦û¬1÷À»
Ì¤ÇÖd§_‹X®íÜlu—”ÖsÓËN7^qÛ¡Lè5¤«¹:z—qWÈå>XQ‚|Xü}>-QÜä§ÌW1Ô‹Õ÷ÚRf´ö£ÏÉÒºá±ßú00QµÉØË]¸‘UTÒ²–!xjïßS’U²´0^×]d‹®rD¿it¾Àh˜£;µù>±d¾[ùæxü¿eST|¶¨Ècæïì¯ç ·zéèÍáÚ}îqêL¨÷ÑÉ÷àYì§NùíâıÏ™[¶0ÿh¨’Iú‘æçÑì$m§#OŠ‚Ïù×ZªRûâ>®çÈ€Òƒİ"¶|ŠöI‡MG Ë$Œ;hS0œî'4üÆî.ºÎÂ'díÛK“©Œ‡ò¸<kâ	ßu‰,0î@'Ô0‰:(“é¯«-¡	gsw«ºd•ÈÀ	Eİ g4ÄÆ‚
±™ª÷Bò"bQTõ©	XCblÌÉ,ìÏ8ÿø~áâ\´÷ãÎ­mËxïÒI³x©îæ
ıò¨ğLÓ‰bdÃÓrqßœ"“Ü¢©#'¨–Œuq(ë¿>iîRQÎ1¯m2(¼¹Ú>¿¥ÉÿÆ`ê0FpÉÛùÀûîäh¥ıN¢e”ÿÿÕ$~ dŒÜÌdßßléËğnM9U¬kËø1:KíŞIæ…¾t³‰K@ú@{#³S´Î°èòp±¦ÏğñaR(ïã‹ŒnQ[#÷³TB­ßNaÊ·lÆE¿"EÎòD&ãÒ—ÅCÁ€'gÜ§;ò’!¬3õŒ«{®Ş©UOßdt½HÅÁáÎW
áÍ„‹Ñ¨©š°¦k)º÷ñÌ»>G+çîF³öHR€´ºrÀÏ¹Õ&X~szjr™É¿Så¦˜æÆµä|${ùÈu ©4ĞŠ{Sœ	Q^c59G›³~!¶H	‰°b˜¥·ºµrx1Õ sy“OİW@ìka}H«ebØÆ°4tŒØ€4 Z‡SÚëD°~ä
m€c'$²¡Èì’Øì[)¤.ı'Ùæaêv5 \¿AÃ3@wÊ¸:Åû:2ø‚ø»Ş*İ¾›Dãÿ·úVg*!XıEgèU9(}ş¶gÊ„­REÀ9<Ûâ°“Š pú§Ü<ÒÌwöŒPü±ºF!ş,r_!´m :9•ÅMa±–ÕPó[øş†(˜H×8I^R¡9{UÑóïË,*îR
É*V)/l‡»Í3Ñ¡ınˆ{ããÈA.KKiO²™áAŒs·‚db°¿•9Èy üİ´pÁİmX>ôj·¹Ê,féR úà£#$cÒÆ›g{cıJÍgÜ#8ôàÇ•S}…£¬¢‘hƒe}ği?ïÀ”/!PËá¥&Ïš–úãÉâğŞuí5ì~[õO=’É­×xÕ_Ÿf 8RHïœõu&ÆG¹˜ÿŞjp¥×gP¿Wó½<è„¹|ó\’¹½o3ÿàG?˜úú¶–ïTÌÛ±TÛñê=‹»EÊ"Ã~Œ>Ñ~g¸²¡J_‡klÎ,”€5ÒcdGr˜Ë¤d+#È¼¼Ú•ˆ@RÛl˜õ1éSÀêıôÁêÑİC#çÂ%=Z*ÂQLv™µDqÄL•ÃjßCóö/%*-­ø"$4ŞG÷2aRh˜LDËnl¬PìŸBü
‡¡±(¦\ô5ö\ò¥ãG&¢4Ú®D˜(½ Ac¨¤	êòï_p¼6Õ'Ø#a[çJÕ…H©Z®#âh9éãì‘“×uP|t¼¢Œ¨vå$fÜŠ£m5¯_"Àñ»qÔYóåapï¿FDe³ÔæZ`Ø™¼÷±ë‡3·A€4J‚ òÕŸü™+#ÕªZeD&«Lóş°ÃÓ›¯ĞI‘!Ôò©È(ê`@³ÅQ‘ãD×ÚYSz£íÀ@í;6…	?éoÏ¬‚Å Ì/ò¯ÿoöÒ¤ü­#mÊªZ¹¢=`/…­7Ğ‰@›40°ãğ«æ³r-2q8)á´ŒEÈ˜¥0ã|)ÚD2¬	V´Åº;M­Ğ¥Ñ1Z‡FJ¾“å˜§S«	(şL$Áf:µ!Máã'/hî–TÛÅÚb––0ŞTNŒÔJ_ÃÏ¾,"Ğáf9-TÌ‘ßtˆ‚ê<`>UÍü‡ğ•ú»­MÈİu½~³Œµ!6¨XQK}òd¸­ÿO\©ø&Q»ÒÂL)aG\`ûÌ/z´ñ5²ÁøÕš¦1¦\ÌœÎÌK5ÀÀ(B™ºœi£¯‰ÖñPòfd…Ã´9¢:äÃV”€¾Z¯<Î˜¹%ƒg\Rh:•«qÜNÜ#ñíß&¥PwˆwjäÅò‚úIÁ¹M]D>Ğª›Æ¥îã#¨'Ø ‹¨ÊR£ßª«Äô¶ĞˆÓ¯Z¸µÒştnªÆµ1Şì½Šƒ9Ş\°ÀØ·šº,_z3ã’§h®«-¾Q—«‚ùÏDˆÔL‘o­tÅÑ0Jª³Ù°œı<¾aj¼qU	ôë	;É*‹&šAŸ|©M”oi%]åiTŠŠß¾K­şÏØv”ÜŒ+tMy[O=¸µŸ˜'22Mğ!ı ”*?šé®/…‘+îÅ´Iu^1ûıñÒ0‘³ E¿;Û½yÇrC°ÛP[‹ºõ™èêÈ
¾|Ñ)n?ºmËö<E=XÇ¦r¤ÿ©‘¶)Â_ëIÈ
¸Xx¸Ğ3ğùñ¾©‚&*W$R_6öÇå6C<S-Ø÷Yc¤Ûß$WE	?9-™¦Bt®¤&s.MàĞ
yß(éï„ÔôğA\\—‰İİFún²³Ü!wÓğfêŠJÁOİ	Ë÷MÓ¹é½/bæ^š·ª®•Ìú¼ñ,,4ÙjşJ3†•å©	ø[ÇØü)ÏCß'ä5 ¡½İ¼k™û‰$`ªÀ5…uxfœ¸e^~"µw%Ş¶hƒİÉjšÚ÷ûÓö/"kY±_EÃ[Í¥Œó½§SıØMÌÎ‹jäß()ş¹!œŸãŞÍÔz®%¨qº·ã›Óê‡t+½9=†|ş^qˆ2‚­+<jIĞuq¨æzûšHXëÍ¾lNKâ…öñ™IÌç„f_ıB¢8¥Ò«§Ş©ö©õøÙì&Ûğûa|2_GõxYüşp?'5í’ÀÁ¸sØ`HNñ¾ÜòÃ¦ñöØO+ }Áõ¹\tJM[Cã'çdL˜‘+ ‡eMjé(óšdî“±„ÕvÌ2]+Ëoa”1×' RÌ&¥y§€åzä§c@~vŒM	ïD6"ñ“ËŠÏ†Á'S“m4•H©ßØ‡ñ'¥•'±øX1?52ä”àÎ)¤——3kÁÌ-änb=÷íÂ~Áİáù5„n«IGí¼@!ğÓÊüâëŠ¦àÒ’ô3EN]³…ş‚ıìjßp¾ğ®<u\„8ˆ;Á©Šõb9ßVb¼xúgÂ_uæJâYÉh’77+°Î!òùÀòn_“şò—É¹ƒBÎw½)·ù| ¥İŞ—+<d(f™ØËıÂbépO~‹rÂï¿°SNrÀ+‰—µI]j§@©tşıu£ó=+ìõRWçûæúO÷ŠFÀ§!mÁEè×kÏ¸C&ÆYÉ hl£çÖ85”…NTÚ£Áh²Áe·­úrZÚ¬ºj+x1ãdƒ¦Ó™µTò¥%27í9ËB—ù5+‹$ÍïJä²;-D—†‘|9ìHtÔ³ƒî™
ıÆc-gÿ	ˆ/Åİóş
ÃØí¶°Œ×¶ïnÑ«¯›`é¢UA*,\­;¸â‡é²m_*œDO^æV°¡ê?Ê•˜%êŠÚXsæŒ/Kô¦~DæS¡>­dÚÄwîÆ‚ÈŠzâ•gaHÙRxšßÓT%òLk²ÑgVPŒ·ïï§- ˜øÙp‚Œ8P K ÷ñòKAa7­ÿÍ_Ï†ÌúÓ5d¦ÈW.ÓeR1Ş!âÔñRº„ğ384´%T7n2Îò¹«Á·c‘;jüÈŸÎ‘Ó†N<ˆ³Ö¥ÁÄƒÏ¤[y2(ÜÒ³·#öä§ÎÀü:UB«b4»Ô“ıúƒN¾¥úuT`³©p£v¬´QÁîV”™•‹e˜',Í¿í“¨¸K¦aÀ”ä™o¥ÌU8
±*J‰i_…8·õ˜Bdmv£ıjò†ì‹ŞZZVÂá¢Ö,+Õ»µ5Œ¨È²úëú­Û3—éf÷jEÊc£V9¸·4nÇÔI(ÇZ÷r(ø%÷K¬ˆé?9¯–Á?]ŸHû½©(ïÓ3Øö¦şPÍä Ş´G™b./WØ°ÙIC˜¤XÕ»Ï<Éö&t¤¯‰ÎY‡ Y0©òÀ“ÊÒ’ğ´’Q»«‚¬tîÊGõ‹À0ÔÅ+äêE"GåŸ"ïŒÔ,J*‰ø~ı	×şAõÕc6¹›*àÓséİ,;|tàHñï¬òÚT´”¨Ásäj-¸l÷w¹õÂã —?‰`sÒŞùç®,DöEU
j'Ó-ü’W×0öÇ˜·“yºx=Ó¹eÎ¸:GîI¡f»á¦S;×[®é¨¡)w…C8$ªÇUÏ¥u—šI£;02 }\³é…Ú­&rùcL`Êi­Ç{ß#cıı9g{¾ec9`"`ƒ¶áˆ&aÌ:d`¯¶S35Ñqâƒ=%(Ì{÷˜ª¹µF ñÿ¥©°úÏ²hõ¾&Ãà~rUG‰@šl$.’±.$ ˆúpœêÒÊİ:h ¦'Üœ‹¾Ï®-ŠxÜàYDx¢CÏÒfh`òäcpE?¹Œ2¬Î1Ä.Új²Éñaâu”ÏW9ŒªĞß|g›2ªh]&¹tF›œ VevÖÀ-Î€‡TÂ§®Mİ§“ 0.ïT½³ w&ƒp·7é =ñåÓ\V-T#–4Là?Ğ¿J~,ÙJ·¶Ş„\öŸœe–k5{¡9Ùß…ÆºÑê®²\èøÚï=Î)Ó‡õ0½ÉG\eÆ‹h;yÆ-W\ +“ÛJó<óR=ƒÙ*u[ÛT­ïÿX”:ÿfÙ¯¦ÖKÜŸ§ÁŒüÏ»8ö}”Lx™)•idÖĞºdEºeµ‚Ôÿ°_ceö/şâ&˜?şS`nÍí”0Ú½î2£õ#z<%oÚµÑÇd˜FHpRÂ°2gp€PÉò¥ä”BùîşÖ€s{qxbMÂ¡Ğ‰E Ñ/¯÷Œp AíˆK—¦ãœg~!+Áè¢Ò¢ëZ”ŒNØÀhÙà]E"25Í‹‡ÃÕßPz]¡¦àÏ'“˜í¢÷¶·õfz·Iƒø(Ü&aí'j¿ÁÈJEŒóÅ’—¡c.EßE‡H¦?Ø“Af	ÓzPQ6ÈJŞfb¸ÃÓöÔHKåŞ¥?ŸÜ19Ó¼½•GŠŠÇ°ô-<D1[C Ú7¹Ú˜§©I¤ÌY8¾ÂÂğ-¯oÙVGõ¢ët IcÆš2ˆKæuàY:"_šˆÓ¢ÂOÒ6?\´ï¼|2Õ1+åÿã” CKÈi²“(ØÜllÇtâ_Ê—>™E¯u|ãîò=›—T–Yïß@q8Á±µ‚ÅVüp{)V@è£2÷Ïz:–šH@>@„!ÙwøÓr$ÓÂÒ¿?Œ~:C›À
€»=ye]Ë`¤)¼ZT&¶¦_PFİ;8Ná‹øP…ÀRˆçİ>~Tá4Ğ^Í"PĞI?‰›pM´¦o±$)Ò×·¢YRæ~]²»à»ª<ˆƒÎR)BôlâºTQ)æŸ,Ó0Ø„Œô–€Ø¸%àMîéÒR9O®;ÿÔ„Æ`v¶T39©Ã²‘uÉŸmfÔ©ÔÅKØ†àO¬Êaå”ÂÜNÓ24à=ÄµSÈ²ñˆàâbßˆéÉñ¢riÈö÷6I%èÙ]ú9ÔmÉÚLO¤€øòº<¢aFû[u¸¦mrı	4‹!C TŞ±^óÜ=Ş£ Ô?=G’¡±²Ê'á{ã,©özzûÄÑ†Bˆízi0©A_„ŒÕdUñ–£ã(ÌŠâ~”0©§Ô×¦åqQN/‚¡ÜÙpäÂ«y_êŠR5à4-„Î®é”Ù¸šb¤=È£.}µıÓ¸XØlö“Å,—C7ûG¢®eÈfÕæß•43B[{}­%c";¨û)!)¼ª0‡HÒOˆqç^™òhØí×b¶¨ö4¦<†K”˜nÔ>ßù;¡Š-rç’gJ`eÙ3ñåí[é¤Â7ëOiìÛš,E)CLõ
ó}QÍíœ»'MÂ0°lME|!`œçóZˆ,?àÂñ8y0ÜYa€¸¡ıŸÇ#Àì˜¤ş’¾Ë¡eÒ—r9/29nÇø&·n$Z°úüÆù¼aí¦]C÷hôƒèâÂğ²5R¸4´¿üåŞ°`:I¼Ä6R³ú~pq‘q€H³ˆÑ²™ıc¯4hò Ò–’!d’&Ë;ÙĞIÚÀËŸV®“_ ÉÜÆU† ç‹ÕRO p†(ÔK´š’¨”CØ§5¾«µ|uöÈÊàXÖ•u²<ÉX|&Q_[RÑêú%¤š0
s#ì *}MIt®ñÂ×[kQ¯}¦A¹u*,D)0—F%óm–TZl¢sGeo‚o­¥Ú}3eHÅƒ:r«>»s™sz½¾Î¾Ş¨<Õ‹jüÀêûO'rã}Ë…b]/èÈ'<?ÛXÌ–%4°òTè¯ÁŠª¥Î¤P*„ß¨!Fy¿¼ºË‹0w¾l°Òı.0èÇ–¦/½9Q:Á{_Éã·9mIG<€q°LfÏÀUe‘F~‹ qÜÍ˜ Q€7ÌĞ¡ëB8F·[ Uq©¤¥
õä^jdb¦“NùúÊ°‚šõ-¹>ãşÏÙ±Ü¾
'H
—ÿ8vR­f	$SÌL¸p¨B>¸R˜Ó®q¾“ÁA/ˆÆ©{KK£ØHRĞ ¥9¬¾e³™%®w.³U±:Ù˜@)ùtû“H7ø„#UÆI|> Ì¼K=µl:|¤|vè9ä©¤Vö–üı}o‡ëzZÆ}²m™}¹.á5# áÙ3¡Ò®•ÄÛ*)3gÒ#Å>«\ß#°R»Ø ÊÅ˜‡¨k¡Xdw™™Ü¿„(R÷ĞZµÊäc_òtdø3°X%8,±·
àÎ`ŠªyÎ#&:{bD¯ÆÅ©d>J¤ê=ÀY{:É¹=©‘P=·Ü²Ğ9H Ğ¹-*†Îff¥~ĞúúL¸‚ï<¯ù«ÜÛyÍ¼bGÊË
/|ñ«Œ»Å&eMó~Úpm­=}÷¯mœÉj§û»ÅVÙ\¶Jìk
°UñÙƒ<Û;RºAÅŞïzŒ†ı‚ÓVACöàL4Ó´«ÚàD­ef†5²Ó„@üä@ã9Áø
­Èt‚ùÄTÎ—3È¦@Ô2Zîü/¿³á!Ş=súÑR\ ŒŒY³9)SPİh…¼-)3Îûyå’ÕGäÖš	Öı¿Ú]xDSÛW-íŠwø”Ò f_²é:Ã& áó$E†vÓjá¿ş>´§ò¥ÁªË|CF™‹6ºp¿T3Âœë>®?)ãÛõÄ‡Ìƒ«Q‘òØ©IŸ~´¨ßŠ.À½Äg•^Ì5RRK@,¡“rœS£§‡´$u8¥ Æâ±c
l¢UØqhØ•ÜEé€Q hgæZb	ôüÕên»û•Ô›ğITÆ4 ˆIrìıç×Èiµ„V1jq¬£Ì	-O<ÆÀaØŠ9éNK¬Lgßõèÿ½<â¨"ú;5jœğ˜ù‰æÓT\;—ø×$êIZ³3ô¯$M_c5ÒB6'¨=SjÈCVX¿Ù…Z«·î$	Ğ´ŸÙ·ø[Œ:¿ôû[é¹=…üö†aeEöïƒ½6:l>EÄÑĞÂ^uŞ ßg9•µKAL¬¶ÀE0É«—T3ëÑûXU^ğ£½ÜƒèeÇ6-Æ-PÅxğä\Ú‚’®»kÓ5èåğˆ’_êâm•ãkxm&vêİïÃ8Iû<¦7i_ı?ÑòcÚ½fwŠº¤Ñü}º™¼+¨»”å1û–¹gsæùnÅÏ‚Y3Ã°dlÚYÇÓÔ“f´õtn¤eÛ Ïä.¬`ÕwWGz„Q¯*ƒ^ı®lÅN‹ø9êE2“±š§B@l–³á‹U×˜Ó½ÕÌYN£Ç$oÙÙ<4+ŞQ½gm÷/á%P­;Æƒ´wáÏ«óû	×b6NµËóÜƒAI¾XÍæ’J”hb„j£~—›1›Rîâ†/bÿÉ<Òøáù:4¾V°'Ïà1ni7ÒM\àÈ[øöm"hÒjÃ¶eNXvhĞaÛåé[¿…\Sü‚w¤°ıÒ=ë-,^[Í>×™¡. å^]Eì{™°h“ç´A+‡$.´^zªhé­sì/`âiğ²¿ñ-b´ÏÄâÓâhU®¡gkqÇj]
9ŸĞı.®8”a¬É¶à56a¼!>ä×%ã÷ğy¶y+LTzÒöá‰ÆÔío$ívëÇyc Æó›e=L88Å–SzƒæşÃ%úÙJJ¦Ç¨©FM›;HnïÚl»C’ˆ”ÿ_ÍÚ”iôÒ.•ëq"]/‹.Ôûe5Ó)ñÒ¤w!gbİ4<´öNMU[|€OÕTG‰Û’æH'gÊC9CÎ§¬rĞ¤êN0.£¸×¼/–¹,Ğ½»ûÖU¥ †XOÉõTCémD+ùXÆUFfº˜(Şy¾ÅP¿¡©Úä+j–\¹…ÂšŞ	rU¢„fw•È¾Jèu¿½ÍCÀ¬¢uî2i¾.-Øşü›!§ŠY2Má;WµÉùÓ©$Q
ÂÉ$KÉñ2áüŸğãÏd §Ó!FıN_Şe™Èùàíí†pÈßÿeßsÁ'¡@±SìÆµ“ajÎ™}ååÁQ\c0):é'û[×	œëXW+ı(nÔ×ö(©4 ôg¨  §0¹<ó.nJ÷GL¢ÂF¿>{¼ëb.{ê¼Rq¨ë:æí¼³Å6;–·Fò¯$ËÇb ÏÁ<éÖÑy1N‹Ö„É©îN_æs_ãÊxêåqåÏ‰oÏ„2Dm8ûğFeÖpÓ;^O‘MŸÃ{F(iµg—"±Q‚é^éJÓ¦ñò.âı°ÈòÚqdk­ÑfUOŸ>Ò<7TV¬[lÖé´xé[F­ì·#àÑJ²_}W¤XM´rô	L¼#v9>lÏ»%Øaƒö#_;«¯Ğµõ%MGŞ¾”_È'ğ‚cÍ§İ;#ÒÄ¼‹2Å¸ı ŠƒµN`€7Àş[ÆVŞ•»\ÅÑ•ç{óÁm‡lŒ¯°`áª©§ãğŒŞƒìuÎ‹¢	‰,_Ç#à4hëÂÿØGQ×™ËQı³óï'«5Ğëî,,ÖÓócİKNX	~ú „ÑŸ &r¹cù$–š¤ë-æX>vÁTšèbŠ¥“\ğğa|pÊŒ±ß—ˆPR“Y$fEçµ¡Òê!€’®S`†˜·‹ı?+e$Jjæ’æÀ9½š?pÕmÖ¶ó„N@òùáh
¢YC%ô<nWÑçäèÈ)ûµÇ:q
Õ§ÊøØ}¥’¨cŒª¬V8=‰"9[ëê®ˆÖƒÀ•…¦Nå¾l“_Ö(=lS¡˜DW%Ğ¡¥9ìÍv›5_É~hHã5è~»ëe5ÏbÀbo÷•òÓíÎŸ[_¦È:®ÿâ.ºÚÆÂÄ€é1œ¼#{·b¿'½ê’Z¯[rÉ·ÖË4QzoÖFXR¾c>ó1ÃÅ^°naÓú¤=÷~ d–ídzyûE[ë„PwæLÎ™½øk5O»ÃbaÑá›‰è{^æŒ½äjÊ4¿ä/	ú@ŠSæ¸uq8¡~(«Øˆn²£f=|ı’¯³£V3†º~S„<ôş:ì§ÜV×ÔWUø=
 ¤êB´mcª%[l¤À¾µy„Û@ªı×ÃO”Á[aÍÚ÷¹¶¡÷#]ævÁË¿Ş«ÆLîÃBŠ\j£ôÿñ*…ÎÈº^Vêµ/Ì½ãòW·ŠÖİŠ1©
*<€<ZŞÒQ±~k€´g)]ëZUÌ””}X¯şš—)ÖÄKĞYœ¾—úm¬¾”VCiOuÿçîé–Üz}™}¢U™7[€WJä)
!ù­R‡¯€kQI¹<»Ä$ÜŸñUÚLvW5¸‚Z÷¤œ< ÍÛ@­ºIïµª²yŸîæ\„o=dv—!,£“ÌJkİœjVÂà‰·z>«âÖ÷öîúÌô5S[pÛü!¾ 'ÒK8²	‚	 ©ŸuzCyv©åÇÕd&~èÕy¬kG·6 û|ë•|"ŸmÌA€À/ÔqV3õuóGyÒ‚D	Îµiãê*j¸Ò¾hÖÍ‹Çdˆ+¿>ê Ö<µÔùNáà/Ì´ğ¶ø2µ×#Ã#j¨nj¡H;c¦^si~½W¿4UŒ¯¦l_‹t\F—Ä{FŸóÈ$ÆWŒmìo’ã^Ò³byzšôpAC:ºÙGCIûŸŞûˆ?RÛB¡,»Bˆ¥Jáİ¥Râ§ÎµÜk|D”õ[ãääßûW_|I6æv¼áÄÖä›ÌÂ°ç×)@ü[£©ÑÃ‚y:ÃS¯İéÛ ¦Uò”îíq¤JD½-˜8Çà˜`Y°=@-GWWš¬t~åàYíAâAR¢†/É<Zû¾]ú´•*²É¿6ÎâÃ½Y-æåg?áÕ9:P!šq¶W†<Ş -ùñÚqç 7æV¾òÏ5Uyqº¬8ÒéÛûzÆ÷Ô¿jªª†Ğ>f*ô<à$sş/øÊVOù¯û¹Ÿcö&iE¹åHÙŒ+¡33€fXÔLğØe´ò£96Ÿër¢¤u “gáÃırÀZv¬˜Ÿ˜>”9XWöÄ¥}ÍVl¨ìgD12w;…Ÿb2"?Õ®{ó>ì~ÔKæí}2ˆ(É\!0"–ur •5€‚rL<-3å8åßWG!ş”C™’`,ÍÚ«ç’%’vG_ÙsêXğ'§C6˜éØëK´Ó¹´„ádßÚú¾‚½—4?Â{şJGƒ˜KÖTs~›“³7[ñ]ı³F ƒ¦[í	Áêı×wƒ(‘³ƒ~YL|E²ÈÙ Ã-Ç×î¢ÃÒëy†É€ïˆ›œpç‹²³råÏÎ}SbR(»âŸ¾äŞ|îCæÿŠ1¶Jqö¶!1³‰¬¸ÊºN@3N.•öÑ„îR£6MÅH»™h/’pî¶î5.mÍ?1†èÁÓ™¨<*2OmĞB9·Àz
Îç+2Qu×¸¢ˆ(qzTêéØ<=°*Yw1PJè×´ƒíb—y)-z³	vŞê[éOÛc£%Eş™šÙŸYzy‰ø³$şVEïG°­¼µ’Ã¤©}&³£÷0¤<Y”ÊóI…C‡¸·İPú2·G­Ë@S †Æ¨M.±3x9Ö‹G-¡©½[õI¦èº˜„ÌªQÂş´%^{¼e¿×t×a#˜ïª˜'1Wû…ìeé™€ü™ÔõtxÖ¿ğ@ÖÑÊ«Æá+ [%LæşÎ¡ªØ‡ÔN¿®«:{EİÓq9ƒbQù‚§áÆˆñêà/pì?«¹ü¬âev*Ú¾h-qğ<m=b‚¥UÍ“ŒIú8‰u»k½™oWÕ– ›õ6Ş«oùY¯Qû1û®¦™ÆÀ¶o!¹"-šˆ>ø÷&¶“Ë¯ Sóí’Ãg„y†"CvÂ4Ği«íğˆl#c"ŞÎlÙoq½ ß)|'Êõw`ÔN£ãâ3ú)b sn_šù^Ènõ,¥ä…€êX¾FmõÔÜÖ»û“•´2@ÕÂ`Æ=µÎ"´…[üv”q<0ñùBºµ“Ä-
µùäÛŸä–š££½ÉNÖˆBÎòá@–ã¤€å'3½ƒÖ¢ÊSùÕ¡®)g:·DFY—sçŠUÇ'áP-—sÇ`z‡¡P¾-ğÏ¾ ±PĞ[èî?‘È²€şApÛ’Âù3©eæÎù¥¿şÓGài‘uºÇq04v©H™’¡µ3évå Ù3È|FŸZ¦Še,…ÆeYô1ËY¯*¾+LEr wÎu:ãƒïx^vE¥<XOLr.hmÕ•şœ¼íDc¯«o>XØ®jªµÏÛÜr¤Íp­sû(£g¯æ:%J/Q+¿ÀøĞ´ë†ÍåÀU$ô,ãÎİ4¯)¬~y7ÛÌP7ôg¦\7ÄOî±ô¢k+•v’˜·œkèv‰p¼Ïv†Û:pßâ?qIYhÍ…Òn¸zÄ×îßJçÁ¸7Y²ÓØ ·Ékí£Pƒ‡ışB^ğ¿ Zy	_~•˜¿B0-mœÃ …/Ôñ5a®˜ƒ%JMµ%gQSÛ­swšÂ¬çÿ¹Ö‘ï B*Ä ¤*æ{ìEšV8‰‰Ö$^ÛêºÊîğA@î_´EUR†¼>ÓOè$Mn^¯ş·8b…5ŸrTmØ‰¼š£¥;ÛG¦YÂ`{¿}ØĞ	.T¡‹ı¶„Êñ4[#>Eç,µÂBªŞ5sÆ“Pas+œ0([ˆèS5aW£Ğ!›¢vÅ‚i9‹åÓÚ»$cˆÔ0¦ ’ŞÉjûºã•õmõBÀÃUœÒƒMƒ*ĞÛV÷á@s1uëd0Ö“hõº¿·%¹DRF•ï¿™H¢°õÂøC4µ6Í}}œœ İR†y.{Ï¶dP-wQß»(KcO1!!!]¾ñİáÂ‘»‡¢JMÏ×ÛUŞ]ˆBt1pWş<àƒk-°ÀbÜÂQqÏÂâÌ?%‹ë¸KLêPRùW³ºšà×ÔP-l¯lS¬t?‡§ÔZÁW?÷ G\höö_Ÿ2]Ù÷+f„.´P­.b,¿éö`"²<Só÷zŞ™cBÒ6*0j÷¿¨®©¨ˆ³WN&JV»™÷òo#âñÖ!¤ü	
ö(¼í€xd×pZíE@~”·±UïEöîÜE •”ºGñ—´½êk\’j\©¼Mªİê£Å[ÒåTÒ2ÖaEšÙÓäEêÿÜ‡³×+Ü§{•…İÊªìlìBÜítA"Ğ.ó§ÃqYÕ“š@¦—åÖ‰Ñj¼	müS5R!¥Ğ”ˆF|âüÑÜS{—½ôvnjlå8û¾ÊÅM_™oÚ¿\üe»’X&†aÎc—9Õáïı&Õ5r‰èHhö%‡«øRÕ”g á¼~7[Ê¤wñ¢Özná'÷Ô†çïGeaÀ)åß®­7¤1€Èm;Š÷ş=hŞxºA„ª#¥©í~öi$—¡‹íÍšÁTóñzÿ°·ÈèwXn=„”g»”ĞË¤fdË0qDûİt+/óĞ·T¹qt!Õ;-Ú-¨›:ß-í
bè1)mŞAÓ‹£Iôûa2õó*í‘åI/ÉR"Ij2@N8.z«Åf²‹C´°PœàR,.ioúÔ´'K£ødIÈ·HX=ªñ+	$Õ_°E@Ï#ĞënÙÍ•¼Wİ$İ‹NµVµˆ¦›ªø£
&²Í³ˆÛw©´o«½×Q?[o4Wâr½hŒö±çª`à!eì•íW¡!v~‚ŠêÍ)iÊlY‚A^ƒ†Ö¨N	Ïw‚R`Oö0øÊ¸Ú¦øV™¨œÈ¢I.3ïû±ø8	Úr>ÎkmÓğ•G\–£ü#KşÄ’dæ±fJyZì5„%}AèS"p \ğ#À"	làÏ%é®¸£á^ˆ\"Ğ?xs@ g¤cªß‚ùl}-s·®–û2Z1Á‹„µ]Æ10
bP._Kéà³9äï39)„˜q
ê4db.%úš=Næø®4_¡¬æVÍq¶Âwe¯®D†l¥/ƒ>Ô“Æ ää&,öÇì°sğbïÙ‡¤yøè.ÏÒû½÷7wàf\IGıÜËêéûîÕKÀ{‰n\D:Ğó‘ŠpüÙìqÄü&mŞLTTŸøÒn^ÃA5cqÂD¤#?C:»WDş<˜AÌˆ˜.ïó#ZÚd€¶L¡éµ‚æsú¹Æ.™è¥2kóì³µ<3¾úVí¿åV€=1ëUşÀ]‰ÁÄâKhœw»ãñÈd:C éd'OjrÙPEä
“ü‚JJ|P×q
°—ò¥„¡3`v:V$ ïrnø[»f‹¬Ü!ão[`tô/GB”`6^K6îµD\AJ-,Áá3e’ĞÇ§j
È;B™„ lˆ"î%Tö-`sz <a&Ïë8k›ï?q9&C•ÛVø7	ù¤z9ÌáìùnÃ˜|®øWí(–i$Fµ>OãFÀÄŠ¾­ÌŠb¶åÕ÷äzì§xè¤„weã	vè[vùùÜhobØ]„“vÛ„2¡”y9Š¥Ÿ
ıKÅÚ%&gÆk[=ïì‚oŸ«Ä`'øR|ºÕÜ…%úé‹Ç[>Ãí[ –ˆãI-,ÚW1šq·5B ÚD.?ùã¿EÔıGúnØ0Ø,(t&ï†¾ƒ‡ºH 'òB©‘;úNÒíTòK'4)Oiˆí‚Áv-·°aAL›SĞ]½†ıí±‹,Åì†1ºÉRë×Æ[ë¨¬²w“´c÷á7®yãí‚÷q%¡^’nˆ^ñzÿ*œw‹PO6è<HùúFj=éÚk}|ã'¦8à3[?:JĞl’¬0¾,MGøS˜|¨ºXw€bk•q¥íÔ€úu[¤ñ@.ùğIàéÓ(|şİÓn'ÂÅ-½YgóLLåÉ?œ’¨›€,{~îô–MHñAU¡F¦fĞ’Iû-P®¥7q„ŒXØÔ9y”ÀÙíB|R[	-ÿp-Ûv³]šPDaño7áifxKŸ…™è¢|«4Ûƒ¢%¯îšgá`ŒÿÒOá#¨›Çê°ÚìÆVÆ¢Ø-6Â’YCµÒ£}ÃAÇG
Ü³ø«0±Xlï^Çæ¸×2äã*ŒÊS5+¬f©ùš[Ë8p­,Ï±Mü¨—lM·ùctsÄà|¯N›©”1Ô&¡@ı¿°b-g\hùn¹İË¦c^Z:D–Å©í­;t&*¦ÙÔ²·ß"ñ>9uyÓ±åMPo¢³Tçnbî…ˆ•ˆÆc³Vñ#C8aóÑ¬èK·ĞaıúØæ}Ã’hÖ;]|Èû¸gq=‚Ñ@äŠö†Ö›ìç]’ßä>ÑÉ)Óş;Kœ±Øƒ(wóµt\ÍıêĞ(Û
òb˜ñ®ØhYéRå9İ:ˆU$¦Ğ¥jn¤)[›¿V;­äŸók`~NcìÏºC'‚t†äbkQ =¡­ckĞ[K¶i˜ú=Èl´C»ù¸‹@åHÖº_2!×Iã%'X÷õ?L?ÒĞ‚}¯ĞÊ,Qå+O&Fö²w\±n÷-sÄİ”ÖRC6iYébÍ9bßiŒå» =fs94Göğù}‘ÎÖşøŸ‘2O_â«<¯I³¼¯yÅ$½FP^åô"¸á¦l¨®êÙ 4c¥áö›P ±ë™Z¦o‘`Íåw4¶ï°:F0+ç$ã¸ŞûÃ	‘Àhúİ!¥llÖ”fÖ4ôCÈ”ûvaÉ0‚!õĞso_U"ùåğñí×³9ğí)ˆtà§áâ¶>5z¿³».¬MIŞX@"U÷“K‚³ØÜ§ßu Ç¿l}ZÏ¸Ù6É¨äÊèšæ6ì\®¦ÖCĞ(&¸~ÒBO"úÁ—ŠÑ€R—ı³¶Âœï
Ô*\aƒ©J÷@³Ä3ÈDü¨1(w<iŠ2€gã/IŠl Ş!Z#Q2¸ZÇ?Væè?À«ÍÿMøEs‹V•W1iˆqî“á‚İ‹¾F î2QÿJr¦Ä©ÈşD„ºU¶‚t¸1CÀ¨ÈÈ§ùPŒ?Ò¤c?_B˜ DÏÔ·ÜoÌX&>»›ôÃ®gìw‘zÈ:°ó0RÙ‡zCÙFµ²Í Rñ˜BÏ z9§å|•´J0;@µİrÃgWü¬ u½Ãc\"Ğfpó½ÔLÑ“:Ã-ü2²4Áè¢rœe­=8ÁZ°‰é‡FïæU´İ¹_íL¿U-5^ÈV“	:eÏ¿¼´ÑöMÇ$„ôlÓiœ
Ù´êˆªSÀ=G“LŸL“ÈCÃ©b
j§\ÖJ(ÿw4İ’ë
ğ2î…«XáI®#²î/zVŸ»P}é‘‡HâO,L"#Ø~·”;´÷¯_¾§_i¿ÁÊ2‡Zbp"Êrçb’nuè|ëo9eÉ·ãš#?V¤6&„'nv ||$=<eÌRo3‘ÚÚÃáæ@'ì³ZâÔ1øŞÅğ3‘g…
Êw¡²Ng½â­¦ÕâÙSfv‘Ö§äb|-=~Rfƒûâ
”ŸËŸy–Á(ñêÙı	\•AcÃÑ?Ñ´X-·yï7À‚‘º±è™j#IpÔ­WkJ¿X¾TH"Î^[(â´2ÃrÙuHÅ’7hşVû/o„H”®±f;ßó«÷‰+{ÄÙo”>8¬.MÿÖ=Üiİv³	wK6MUîcã”3S¦±ÅL¡n¸r²3âË˜0ÌYóå{À 3Wé“k/ÿë 4UŸ=½‚wê`eÒšÌŒ«k}Ad…rXŒWË…ÍÓØÁ˜$é¯Šd×Úï‰ı ‰˜”2`ğ"ÓÀ€ÓR÷øÈbñìÏı¨_‚Ë˜{Ğ¥î(VS©æszk„…½*ÍhVüşòÕ¥'¬YœsX5Bº–ñG-T–Va{aŠd>ÕŒe$ —:a£ØÕ—kS¢&å½ºf´éK”GÊâes£™p`¢àŸ©oFëÆ,«³u€pÆf_v3Ê|0
·^¸Ñ.É$pÏŒdÚ¦9‰ª£²<Ô TÚø	Ğu±aùñ?²=‚Æ.³u–÷ô¼—‚¸š„%®[îhnãq&@¬\uÏ­zem_/û}tyj´ƒv6§”§{’ŞG7È•¾/ †Y,û¥0hoÿ1ÃKõ_¦Çkl–„‡Îr+5H„†iœiñöO+sNAOD‹´v.K×…¾PÂõ‘P›Ë¹õ|ÆÍ«<ŒyglE9ã8 õRó’½m˜{"X$C×íÆ¡RvıÅ×&¦ãF^¹£XÆ«E±#‹Q<hòô7Şí¿#Ô(É”Ÿ`EŞ¤÷kƒ'Œ7<"¡Ù¹2wW
È&İŞ"=ü;ÜYÎ˜Ñi‰¨Ö†îˆ&vŠÊ:¬Wäƒ=Åì”x‹³¹mÔÔf7UÆíO¯æÀÈ†µÇ½?øNùÎübtËÙ²æ0µé±ñ©à°g– •îœÁØd|Áô£”ˆ~ıY¡Ø÷NângõKŸ\äÑ$v{9tãÁnƒß¯»…H€½•F[¶Ú=ÓC¾\zÀ¯§ ûKCîtäjî<?î'‘&y§„©)Êù^_”:İZDhÅ€ävĞ#zü›Œj@c¯şjcŸÉàÌo‰÷ ïã¥H)µ`µïıÀ;;Æ/}Ä¿NIñú›R>Ã¸©æ™qˆµĞ¶zJ<)¥ï,p¢Ô–ƒeP‘-­zşxîe»}ıâ¥†½ê	q
n±Úiª›)Gã¼ÑöHTéP¼~o ~gXG;b—é|¨ÙhË²ÙŠœê…š%{íT‹O.¾µ‚!ôÄÈ¹ÿ¼ºü/FM«Ñ|Ş.ÆK5+ûİr$ì¾psîæOê+)wíÕ0§ H²LwL¨s@vh ]‰c{R‹$˜í{‡‚!Pt¶‘Ëäõ©€÷Ç2ÎË¯2òÉiçjà™fqÂ«{Ôl8À¶w­ƒŞÂe´ÄMPmvÏCBh æjÀÖïxÑ08RAWV]c¹*iv.Kñ{Î<¥³ó œ“Ë³Ípu‰Ô-˜yÌS¦>¶¥´¿ ıµ_‰ÚÀò‘˜ë;Ä`û‰ŸL«Ryb¡ã{İÓAC÷ñKø«>çQ¶Zä—«-…‰ò´'‚Ëd0ÎëàİÈ°*[ûÌÍİ“vr'M_g%€ü7ÂßüÀÒõ‡'qWvt|iÊ;€ÚòhNú¤ºDí¯,BgŸkv€ˆ9’ái*–<-6¾¢Ø£ÚsL·‡ŸË)#÷ç‘M„ú>ã5ÍÅÕ™U>;
}o„[Œ«À¹3ä'Õq‘…deÉ!A"í zÏ·„´·¯7X\3ú7¥©f×X6±ãBî´ÈyzÍêø.€Ú×¨ª,dX¶p¸Yö+I¨Ï38ºiTò…›¨i(Ìc´ubÚëÒÖÌhâ‘¶»ûş»íÒ,Øe§: «Gø0ašÃ£[–
õº%Ò¥ŒšÖ~µêöó4Ÿš­?‹#îuñMbw£sVĞDY´A/ßÚ¥cèÄJñRß=’ÁııxYÂ^=Cb@ŞÔh`Ó£Õl8Šu—l2¤&(6Ö\_†­É¼…œÒy¥/Ø¤²¡^ßı{¯BWŠ)öÃÊÿßõW¥_ Ş5FÓ"ÆZ¤{­ä¼ÈÛôyD
fTöô1÷F>Ë\ Mhä_C/º)38ô^ÄŞ(Ôîo7xømçC*ÑÏõ9Ğ
]ÚR¡fVôée—)"8ì§·!ÚŠ¶©Àæµ{Ô%…7v¡VVŞMÏ]xêQcnØ-¥=2.¯ÿB]˜Õ±AÊ2Œ>‰¸Ùîæ‘~õåã=Ó©¿Ae™7†û\\íÑl¼&9‰WNé
'ñî‹õ¬$Ï‰âÖ¯Í|ïAäÂİkA­R-_ê¸bT%=ü½“ö6Ë!k"9ÑMŒ¯ÄkPUhÖ²>—|AÒ‹ıpĞD¨ÿö‡¼j÷Åh€àø¸çòŸæ²I¨¿½°8Vd_<Íüƒ½’Ku¤T†:F¾pÈ·Ö+Ìeqk`£Œqª•ÍÛÿÑ›\®`D@%Š`ÌdY†Øº4¸CoĞc n~j4H.çdÍtoD7‡ÙDïp0hŸ~dM(n÷ªì—W4qB˜M)şö1M£5¹Aá‚‚\Tê£}Hİ”kºÃÊAjTÜFÌ¿m…-:Iş^És#Cp•±æµĞke§èªotÁ,`”ÂËáˆ×ùÜ)8Z!œÂR
#Ÿ¨!ÿÚ»©Ay!àå"Â½ã@õ13“]ë7N8ácJüÔ±uJzwE|¦iT%ÅAËnÁt˜¦7¸¯@Z¼äà
™‰æÚÜ+~¨/­–úÙÖ’Æ1Ãu‘E‰UòIˆD†¤wBC¿ _ª&\õû-eò°ÜÒóY#Ñû¼ÑnÃ `®•¸Ü}ˆA’¹Uªı>Šü_TRî"œ/Í‚o’„ Å4mÜ+ƒ}şõ©>hÆ¤G¦—ÏQõ#Rä	Ë,ÌÎ­…¦¢¯šØğá<•<š8‰QÒx¥ûÇ4şĞLS<1ÿ5ˆmgî)üÆ¹I¥	i{IÇš¦òìœS¢,±ëv|‹±Œkù¾N6ñâ8ÕZòµº–¥”è}Ëá×á»Äó­=´§ ”Ô‚³ÍQ‘.ƒ{h5Ú³U*rÄwÏöÆ.ãºt=%+eôì·	év;» 5{®>EÜÕİ€¡•øßæ·‹¿
ÀsH
/ØªãH"!œ±)oİƒ¥3ã?Ç5—B‡¥İ@Œ=|’£"ÄÁğV[ù¼İÇåÃY(õ›´8åıòâ¢ß{|ú@Ä+Ñã®uŸÚ¦å°Õ½?¦äÅckÅuGÚXjPŸœî—Èq—¤&ˆq9• y/á¡ ºäŒİSh\ã…Ù¥ ÿ)ê­¾%ÃÛÊŒÕ¶S•ÓMjííô¨:p$;ûn(İM!nVTÀtIœG©^U¿xu©t»°ÛŸ7éÎKI`Ğ@°†+•èT_–I¿àj
Â˜Ëé57ö…i¬8ı>ÓÆ1ìïÓ…†gÁÆfé…‰­;‡„\^ìÌÄ¢ê!]gÃÍŒ¬Ò°Æí±P·ÇÇFTŒ¨‘b³pËêĞüœq(6@ÃD3ï‡¶‹ÅR¶8K6´ë†Ô(X~úˆ/kÆX=Âñ° l„È·2d§±;üøş•Rá|Í]´ÎÀÕ÷KË^¸Äfjg¿+ãøÁv‚Ù8S%ßØe–ªyuá"âÈlÎq016LZq7-–Õ»C6Æ`3¥T+Š³ÀQÃPì›šÖYóı¾næyÇGÖN.î¼¢Ö¡²…yİ·ã)¼Ôïu²ñPÀ`‡ÕføV«—-Úet¦-°(èxtÏ$-co·Aã™'{W d3ÆÕ¿ĞFä°½oã¾Şìn¸©(R»$Ù¼Á0XØ•)nêœ¯ÉkeàÆ½F1{}µ@Q¦İW¾¤¯ryÁw6K>¸Bçn¥“HÏÕ‡Ÿ,ËÌ^ÿŸ—ßÈÿ8¯eÃø—(r…›ëÆì1¾ª(+ÀíQ­ÆZ0ÃËùj	?àğ£LWıZÁ0¶#¡\åyaê½j°!Óg,ùm£éÎ+ùµkK¼Ç°h2©xY°¾P?+ÿšá82JÈæ©Qd‘]%EK"ÖØ(ö½ ÿÕÛxãåwîæQwô©›*RûÌÆ5š³XÖÛDé›ÍşBòüs Èä÷-{Â9'gÉ.½ùq
(Üä §ğq—Ï$‹
õZn‚´tÿ‹$ZÈc)‘$ÀX³öòìwŒ¾1ÁR¹Ï}\İB4Å"^"	¨fËgt+†êñAí¶2ÙÙ¢8'Àø¶¡š-sr\eÀîªƒwCX=dâæöùÁcş#]¿ÂùÃM%Löz0VMI°¨B»(¥Á)•DùÆ²a‹FˆtóKM¿tPlª¬ÓY:æ…7Ä­je~{ã›R1b'èÆx¹?’Áo\®po×i+Ty—Ww6sã„)6+Œs-MæxÜÂa¦ßxfØ	/ûŸL.õÚ‚.Â‰$™êšüæõº©Äÿ–(ÈÊ·•º£ ¶;ìa…=òÕ¾‹ß‹ç‰a†p	´,ÔÅ:x‹úÕÆqÙ,’L¾‹œ÷u•Hfß¤¶>&$Ö.\ëƒ¹Ó#Xn¸qö5*ÀdRa·Sš/JÓù[9çÌŒpNö2²ÏÎÂ®YŸ7QNA4Lfj÷ ‹sBUÂÁøªR œåz‘HŒ«gü%ô^§T&Q_y½÷6éºğüç?3ÚËĞçk¯;øWÈ ”'œE)'5{ÙHiÆiQùC/{Ûˆ"Ù	ÓŞ’Â2/Æz“ÍbkY›§q^Œ?†[lşG)àD/*ÔHĞªF9UHğÄ’ò*·ŠB£ù§qÈ.,Gæ71:}·³Ÿ¹šZŠx¡é ;£À'jBMÏXV¦	bw4äÔ¦²ü“š:U%¼›ÉÕ&>š£Ön
Aeşİ'rMmİeÕêã¿¬;L˜e½›Ë˜PÃãÑÀd°…xI·6°ÃI5Ê¢ı›ÇÇ!Õ?@ËÍ˜£ëH‚w›¹m2Bf;2FÁ¬'É‡Y¢‘>pşÛG{æ=÷ùOÇJO/Ì{Ù‘Ó¯ÇzgcbìæS—ø©Ê*GûîüT,öÛíRä‰†ı[Q8Œ¶ ¼ô°ùûwhuÂ6®s•öì·nL4&ñâdŒ“pÅ‚„¶o! í·—O.ƒ6_ƒNZ¾}Àø5,mrÒv ºñKiÌôó¥¢Éöğ”5L¦ßŠ2Y’1äößVdèRdiC{45÷©Z7`P)º›Š‘ò9¦™-ıôxj °®ûLßmÌ|£•Nj‘Ãİ–¥ñ9÷)~U.ª úgFÕo 2”«ŠûNè©™gå‰u{—ÉÓ=-F&X4êt¹S7SÙOK½$8îeôÅ‡(‰¡ïH–’İ?Ğ‡ïšö'œóŞİ÷bi‡X~*bÖ‰Şª#Œ[dÀˆ%Ğ…hÉİÎ6½/Õf.©—Ëº‹Ù`—çîìKÔvû×Œş‹*£›	Î®‰©òUMºõQGRI¶Ş5U BSWM9f\%Ğ¥%;â4Lõ•@xİ‚vÒÉ7¸4"g$“ù
ƒdôœCAÆËËÍø‚'‘(îMè[¾äPñ±?"L&Ã³k;nBĞ†Å#äÆªëzÎ§ÙNşøÃ©©6);µæSZº^à½L„»'­°–=¦·kF©@WÙx¯––[×y×<'Ë÷{iÌ·S,½\pjƒ*w-cŞUX4ÊÁ|¢ä›¤ (‡íóhç|Ìô%ë Ì¨êvHØ<dN}ÒãóbŞÃh‡çñ`F¥œ} z¿'˜mî#W&l/E·j4«Xëob¨¢hım]õòNŸ¢hxsdãÃ€8¾[\ŒŠÄ™{À¤ ş)1K` —¡È–OŒ5\jì$¸UD9âyT7È©¾ú«ŸV2ïÁ@òRc|ÜE}
,b±4y¿0oï<
nA—üèñDU˜„b+ì“*D,2µ“`½ VFmÉ8õ£zç}=wCpÛYıW²l®l¡_'k;˜ÿxï"˜İôü}¨ïÀÙMfÔ ŸÙŒ¼t6RÄrü‘£vúÄ>¦ëéŞY	—-'Š:Ÿ°.3ÑŠZm(õì©µnë]wirİBÅ"ˆöó:«ÏÍĞŸA¾ã”¥Áü„û‘sÚ(êø“Ay°ş’€inª$)‚6ó»£q¹Z–«ÒJr¤ÎWîÈwÁ Xœve‰U/%_šÈ/ÆÁhQßÁ­¤†Eğ!Ám†ÄâúìÅNâOÁ°ùPUk”rˆ_„>ÀP¶§¿Á¾®i s?¾L#$¬—[DKM,ùÕÃç¿n‹p^}5Ö1_bş2Ú9SXUmé ì­ß ÓÔe?C‚îş"z	æÎ£îŠ­gÑëYWÅ‡¢Wr#ÕºbÚ@¤(Ğ[ønoÚ™I<Şo¾:“å”V}8öÀ)^¢¶ø]ækÌğ=Ğ¦áäÄ¨4P³šM™±B÷âàGá¨E/RĞ·ö¿1›æo8’²]¼¥#-°‰„œ”³Õhf"~â’Ìu‡/,²™^fº,ãròA#½Qåâuà£;’ŠncgN‘[80?²ı¯ğ€…ø…R ´õ6?Ê›¬¥¨ËEO§èPè*MF…¹î–³æç5AjŸ˜ mˆó Cµ2cj~$k
|ÜcY¶qØ§T´cyÓ/È¼ó Ş\ŞÙ÷Gó+Pu÷y•zì„O™:y7¨¬; éR"ş³×ë’¦½F¤ÌV0’&÷ìÉ½F•ïfqáUšŒÔƒÿ¼öóÒOÔ›ìÎFP.^oñ\‡Ú·döµXœÔ©…=«fâ—Æ€}yú«{®Âàd†¤ÿ•f Ë¿F	 {‰R…*Ùªªˆ&Á€âˆN×… Ş	­ˆùzfûÌ(__ÙåõjóU.ÆÜcU«R¿Bè7½÷Y<—ºà%)"‹ˆpVBÑ4ÏuÀS>k=Ú£lM„¬±E›nd»ùt„h‹p†ùcµİ²­Ûdö"ÉX¢Î—Å¢ìãİÜto¾âËŞné«›şœÛæmìÔÒT5:H-fiö	ß$ub©ù³Èóp˜_q\”¯ Â;¹1:6’jåRú
l }i´$‡sujßtæ.¤æCæïj*?!÷»z9Õ}É´‚²İa%e?O$Ò«lõ–mà*®<1º°Õq‰÷åØIZG¤î8ªwxİPeDá_x™>¢üû’º4˜ „BğK3¬E‚¤JÅyã†T+_÷ŠKØı5º~•¿Ïlã€,å©¿“‘÷>†^v[Éáä­ü`Åie˜ıæCÀi±RbN£c†œRêz$½r&¿‘c42•<YW†µ/O–¹Í"õ®–¤]×•¼æÏ–¬•©?«P
Qı@
P™U±ˆKæ1veßS^z°éWE÷ĞYg‚Ã@^€Œ‚*s€ÍÓXV"«
I'…i7êÿ¦÷%¨3İ5W÷Îûükópß÷cûjx±»FX?…kËŞHÓÿÀÎp"*‘VNœËµîNíÛ÷_é…f2‚õF»Ï¢ §&	õ·"Êæßf÷fÇ\½ÛÃûŠRgÁIR·$:îgÒ¿‘ğh12Áwk@„úÏ;½ø¢«»ß·˜#"¯¼ÚØ˜õnœ1*"›&wãÍ¼¸ğ­<˜ÖZŒ3¾3¹\ZRkbÿ8X¼zö¼ÃN¡—tí»°‰zéØ¼A» Ë´Ö0®¢é9ë}X‹O|çæ\@7L-¯¯t¬Í¼™6sdaØoB¢Š<D¬±ÒQW\û"ˆ6¬9^(:=2Ğ	E•#‘4ÒMQR!+Ş*Å.°mjÊä’TMÿC~>^W³èHğPÜ'ç£0$YÉ³¨o¿»{À™0è=“LK›o+¼ª÷à™¢£G’±ç(¤40òğaÃ¨lÚÖ¼
q¨ÔWŸÃ_¸ş5ß9nZlòÍÀ±÷³ÕèV*S@øÜnHš±æ„ÜeÜ›M™iİÜC‡[“p¶B6—ø£öë=Æ¢éÊ¥ä¸ECPÄÍ„Ç‘k’}ªOÉè× Äì*¬°Ùi&?”ïIK„JJ®æuE\’Æa
ÇıËUªÎ¼Éà†Ë’øBåO$ús™ıØÖJM·NŸ>ø¤LJŸ‡íînâÌ¶s˜¨gÜĞ.˜Ò”şÀ‡ßÃ´”IjŒ²q>+;}l‰¿tˆÿåŸ²È¤„²…ÃŠLRòİ³#bŸõF'=•hÄ?ÜÅãÒ¶6tI'éÎL	×LËËRšK—Ë+l3L‡ÉÉ{s@T«|è ƒã+5Kóån¸d2Aâ%ÙÎ³CvY~ß—lëí°zSXeÆƒõ`]Ü>-M1©Í…åJoÉ:t=tø7‹İºXÓx=Õñ‹&!ê€3·Êy¡÷Ê'g#³ºÑ¦ÅS®¿²ÃkPíÎÂ¨[OÎƒÍ»Êÿ<Ô’"wÓ„Óÿ»üÿèÖŠqSô˜Å@Û;äé*4ö€8h+¤ÅÊy=­ÔÅÛ R ‘~ÜÔË«ç„§ı"[¬…ú]ÖĞäíÀ;ıä|Õ¥Èf•ú¼;ÒPé©ŞÎ¦CJN(‰}—I¢«:ğºàı$üxL.l¹Eï&·.ÑÇÇ:¿¬ÉRÀ÷ùØ;ƒ„‹âûG3˜¾#ZV%èmmÔ6Ôb\æq­¯à]ÒÜ(y¢5üÌ’¢Ùîêğ¾$”³9f­ò@åVzîÒ<54_€<_^·³ªßØZ48I9uğ®Û5ÖÙl² à:/ud¡yæJ\p#İ%³P	Ğ¥'‘:koõ?,\‚2¹ëò¥‰~*ç€ æ@—şIcëÙíÕ‚åÇßÒ3É¥1’uóÿ"ü™§Í‚<‚k;+`«+î±7¾õUZsÕ–…3sn°'m0 ¥üoAâˆÙa{}Õ‹oêtQßãLDÄK ä`îiÅÍö®Ó .L¥áÇ„x_»½w#’<hÖ¯ƒ”,w¾º)»5§úŸØèƒg
$€gg>ëká&³›Î´,F²S#`]“5
Ê&áMeãlR¿‚<TWÁÊ¥n_´”yšúÇ!³êy<ÃX´¢<h‚ŸîË±åÄÎxrT¬”ÉqÀVî·RpÒ®©KŸ4gŸ×ô—Ed‘ÛÔİı:Jk»é^¡=.€Çy~Pì›ÓøXQMãI®ó55g)²qêêá öî»™€c´æŞ%í6Ğê[Â©Ûf<=|+ñµØãİ,¯a¿÷—ã57ƒåh{Äã*J=ÍÈÙüºòI¦iıxGºtÉå€i'÷èÄÜ'õÒ¶lJÙ$ pÎ‰jK%æÔ¹$)Ö;8I’½w¿ÀêãkYNX'‘’æŞhç±\4k‰¼œ±[8<lEœ÷Ä…C”çn­ñÎX”ÿÛÃM cßHrH_Y´(Ğèıb1|fïçCáoêÌºäşH)+²j®éÍ bM‹¼ì¦Z8ƒ2/-twæ›L‚‰nÜt4.†Îhb¶ß[®r>ÜJsæù¨#—Ûh|MÅöU—á&Ärfµ=	†(Üäı	¹êğ€ĞşLT´‰æ¡ø–IíMå¶D~OÆ­I%àÖëf© »ä›-,èÿ°­¿¿)^¬d\?™9Êt±i{›€…eJ|pğìšR¬¶ıŠí\Š0îJûi72’rÈ´ñôö¬"¬èæYìilq“N,Àjp¢Ä>*L‡l]ö
ÈÄ|Nrò²¬u‚WüÚ9ìÉê:póD-ÇØ`¦^m9!£pHç­7­™3T“c–µN"âİ<İ)DqG/3éˆ+qğ Èò¹k+£½®AF—˜Ø í	q2KŠ)Q×ŠÏ³.”çı=¥ÇºÏ¾¸Õé%®R2¹öÔjõšı±s5ßHÀ_ûæ”s>…8<'û+,²ñÒ1Ògv?Vç_ut®@‰(®Ê¶ø–ª;‡¬%gÏ“£RPñåF›N²‹§âpI…Êio¹ÔÏÏXö¤ØË¢C0Œ{p&LàM¶e²ñÇÔ˜¨8‘§°Ñz~Ò¸$Ú}Lü?†ç7{Oe‚‚7<q`ZTnúpî@`üvùu@ Ò™KıçÌrvÉÓÀ«—‡ )Tìï]ùŒ¿«H§ç¨íkn¶>2Q:$ºZÊĞ”´I€Œ°·sìÑ›ËÉúğû^ö½!ª) “•ŒÀGI¦Ô__ÑÙĞz“ğE3±Äk™êŒıLm-ÛÅka-Öü¯?dÆ»td­<C9Îz)Ñ×—H¾ í«T1ƒn2^WÃÎ“WB$á49Káy°vÌ$¦I©rĞ1†ÎJĞà4p´î ğN'Ìæ®F; Ÿæ	ÕºÛÎªäl$k”Ó›‡s2©‚ñ=-7¬HNÎÚËpgNòÂÙp0ˆv>ˆ‹•”9€ØÖ“¨RSÁ(#,Ô}¾Å7]ğ™ùÍè×ğ›×)tÓ	ı“¼âØî;K¸5t÷(±Ùs¼QÙU*– ½ÀEşÖÑîbAã±Öö«íìwÎv[|&ª.#%ym€Âühİy6]Ëºw2ë|Wàß37€í?ã)KÃŞ` v¨l¡#@nğ'ôæ\©0t˜cäŞf#_~ìïù3ÈÊ§Ö2™]bjâ>oÕ´â©pQàSce•ƒ›S‚°!>.Â£İ±p8ìÔ–Xév¹µ@¹ª™Eïj™(l­´‰%íu1×‚ŒôùÑÅ¡w˜Ùy„Ó]Z­¼üFfà÷2¨iØ‚š‹¨6€¿¼¨˜1©}¥M%³G¿õ%¬½·X î„.ğİæÁU‡iVšW6p¤<C¢Ğí‰÷Z_Š(æu9_ju\¿Ãñ;ó_=¦dû´,¤yÍÁGRğÕêhŒV¤+™µ¤µ<»ä¼Î’é´n~„kİû™;a>¯Ò e˜“È_ø¿Z01 WÄYßñŒ]¹˜Ü5E%“O©ÆŠ\¸µÆÊAÃJ§h(OÌëÍü%HçÓ’Ìú;>7úDìÊy‰:«ÿ¨>­òYbÌîìéTÇñ¬G’ª1éeòd]Î{£íĞª>ùÂàŠd’¾šCèfÂiiÆ”Feêÿ	äµ*"Ãov4Ëql×ªqŒ4ƒ#ñG;áÉÅÃ¬DÁ÷iCö/ïC‡Z™ š&
Ë­màV3†H`OïíZÆü:İæV!«	wI»tŠJ&Ğæº•—Š„5ˆ™Tâí¯ä¶û{T¬Üi‘\õ©öpXêW¬Ñ1¸¤kîCôo}Xm˜Â«õ’T@”hŞ%×eıæÈ5ñØÿzÜ©%÷¶Dw±B˜•Ÿ–Aë#š¡O–}š›ôtG"ºÛ•­‹ƒ;ÅœÎ ü«Íé$„{}ŸTÃ´øÌ-üÏO°)~%U|Eo7&ª,ñKxÎ¾š—
"ıĞ}¨‰?†ÎHªï¨/«Gí€C<1Í;mœö]c¾3„¬ËÊxÖğ^T¸5'vk—iQöÉu]D]w’ë¤‰Pşp»ñ1ú=Ì·÷»¨É”b|?fu±
•ºšŒÊg«ÍÇı~ï]ìs½º"uAúaíMov"ÌI¤$aş?ªä=[šK‚n€Cw&şkÈzº?²K1Q—‡™‚Ú”ö›T–ø²Ær4Lö†L‡Cq:~½·dU£Ï«Å´Âªv}§ôÏ®Ô$œ{	±ğ6¦PN'DùÀkËPlÌtK¥ÏWB¹~æŒóÀjcÏHxáp4ĞIdaÆëÈ¸ˆMaŠO »(k@§±ŞRéá›Ö¬{?êúˆÚ$jíıî8,Ts‹óSP¿G°ö^$j¸¶J.¡_…9P)h/®ŒŠ.€Ì'qÃ¨¯S½D­—U,<es·°\•£İ,©nÆÆñó­ò"öi{Ş;İÚû‹÷æ¦®¶ò¡}5wfó|¡ˆÓØïŠWJ•Ê¸qI©„H¨Úà3âhñàWïn£lCÄs…W¶²öŞ¼q¦– ­ï¢èºm²LÇ.xT“w®2’Ê_”X¡¼ÿÔÂFÁ)(ÅtíÀŞ(µUşâE%Ú†7°nÊ!û¸à|<Oò@0kÀ§ŞèXMøD˜°æsB»İ²ğ¯şãï–>©‡í— î#Â®§CË
’,î‚H¤üÊ:Õ®ÒäÜA´ÂJ°K‹ÃÛ5EÚ}$6K‰[ãÜ
<)L²¡÷š.Ä´ª
ğ—%´€ÙRaúŒquU»O²Ö5GH(Ÿöup£©`šP­ioñ½:]«.³ãÿÛRU\fãFşK’ÎÁw=²ŒRßUj0Š£Kƒ²QóxUtú2’§ÇÅ*c
ş
×&Âà*@:¹û²íĞğSŠ“oE"ÎŒËcïÍ£ÔùYD?ámb²HØ1ñ˜lÒÿœB¦Öy|S6f@_ò_®…¼]X0•?|Ä3Ë
¬cK”ÕŞ;àlu_ÕıXê*¶¿¾kÚ‰ß£;™kÄqÌ_
ål…ï¥À¦ÉıIÊ~¡üãvì½™‰§>Ác%Õ„w/›E:Û¼5ˆ÷÷şìäı% lvõD†‡U‰ğiW¬q|\“å'Ã›£	Bjçò	ªïÓIö_ÿV™¬E6Kı•ÑÒE'o5GøÌKŞ	[Tçq°;iN†›è°úúD~[•q%Ïàâ1e'ÊÈG{?b©@<]J%x*.(õèŠ¿qL«Ş¢ÿ¦o=í×Ô_¿>_„›Ér<œÊêJÆæh7Uº‘NòŒ=>A¨“O^9°’sÃ÷ó>7IÚÇ=ûvÈ»İ@ùXzbÈFÍHPµqsõÒ•¸}ÕCl?şš¡GY¹R†pF_“Hfß+î¸4 «s°(«“ò—"8÷"eYQBîˆÕŒYkEÛjÚSxEa¹5” ¶€ÆµÑÎıæ‚ü¶”°;³õ3øw×IpäRÀ<i­ùÎ;Îš˜‚³¥èKRÉ÷PÕ˜=m./”G1:d8ùl|6a‚‘€ñ£6&ÇßÁlæîØ[=Ïa`O¯ºú$'¿MR02!d÷€â´IÅ£(Y×g1lÛfVKGïoÌ•`nŠi‹©ğtXºÊ5{')9BÌo+«BT Ô§PØ«µÓÇS÷Ï6tÑB SƒÍì/³\œ„Ÿt°í´™veˆ4jüˆÂH÷é¿é[¤“ºòÂd†³<œÜµıtÇ7õzjPúO:ˆÈD`cU¯=bl%ÙqOxÇƒznÿë3?ÒÚ`´®B¾ä¬Xa~¼W–µ”²¶{öé"Í+·”Dødş`ª©óÖ‘kÀhãƒ[üSw¨İÓcKo,–¶z‹c@ï¦…-öá-#6DO\ .¡`0î ¥rÛÑmÔµ¡_±¼H¼L?a2æL«L1Á·‹…¢„·g©Zy$j‰9#.f;'ö[}ãw6äó	±å§&a!Lş”¬jœ½»ßãJ4ĞÃ:÷ZÊ4[èO™1#Î½ŒvËÖ‘#•¯‘61uÔíeÁ(ø}<Dí~ó
©­SIçßİZu¢ÆA®¼šiZ8Ñãl£ı“¶6§¬’i$µª7á|Z¼’<D^Ñ‡ ×+ª]Û3ÛV 4‘¶±$*ÒNB®wh§µ›k'î¯ƒzF®¤­	/µµÓHsÕßFŒWéRìjÙÁLn‚ë+0¿g·Úî.Hê Ïv«‹£#¼ó),TNİ!û§>7CâÅ.?äõå=šDrÑ}\uÆóh
{Øé{K•§7ûÏ@¢ÔÙıæ³i¾ûØ·5½|Z®r ÌËJb
Ø«_M“>Ç%|ÓWÿ› 9B£çº¢#ŸW¼4ªò“ùnáğ $m‘¢üÏ$F§œ kòùÑ^è³ı¼"BşHm
•~ƒM`˜i÷2O \­9¨ÎüóÛ·ësŠÄàj¤<Gæ<®ËÍå3j·¨yßOéeºÛÂ†=nßræŒ6Tğ ÕŠQëÂ ÖÑò yX˜©àÔ–—‡S«VÒ9_U‰e]¨ã÷ö&Ó«¡y6ôôfêº©×º´µ"´$XQÃ7ÁS•ò§åÌÛÖ÷­ØÏIÅ¶Ïx)0 Òw‚Ñäd>åJR_mtÙ\/»t½\´Ü†ê5y"ş#?OË.0kÆÒ!T@ë¯/gÙÍò i†‰âÕ~éÑÇ•ºÃAĞ?TL­µ['"ƒ ZšJKÖDA3rÆ¤WÓ|Ïú#_¹Ùqş?}•4›Î{=YQA¹Å  2²fÕ a…6œP’å°r“¹ñ‡ŒÌ$4¼,HN¶ïuI"!›¦J%PGŸÎ­]6|<†¦Q‡©ôY¡—Ì\©Hº^µè	‘øî–UM½ÏEü7¢†BsÏHº$ÚÏç›ÏTÔn…Š§w&	¶@m5.lÍ;¶b• «‹’[‰Êı±ëÛÖÒ-ëş¦º¼0ÛE‰»¶³@¼zÁ!7è¬Ÿå>E€ ¡£ˆåvA^nşôwÜ«!	È}çÄF&Ò^ÓÖthçb˜}„+´U3Š¬{‰İ–›'S@D°g…uuñŞg	Ó†1…Ï¬¦,kÈt\îÄ9Ò‘!'#Ğ·¥µMqô‰¹¢ò%!,ÛÀQDÈı ©²‚H±7‚‡çB€;ßn*%ùˆæ}çĞ€g3ÅE {´Ø@ì‰ºëÂÜš.}ö"òiD4'Ÿ€–°Bh×6¶èBß‡{'&‹’ô±Añ“¡G:X@°Çxù)¢*¢•]»z»®ÂêƒêRbIº…Ú*\b¨ÜeknÆp&¾‚Ñ1ü÷æ€m—áÖU2m6ÌÒåVó)¢Ü$ÜD?ã¦ó¬NJkFö€~İÛgEg_»K{Ö—±x$KfYŠ‚P³
»æ/1€ôÅVT¤È,êw-d
Öe"e©ãPRÇ1IÚÚÇO’`QÒ@ho0`+}±¯Ã)q0=ƒ•fˆo¹Œı3ØGtÅ¾‘ç Wc›óÜß!—©€Z:Q>ÇÏ~"ÁÆË#ëIìÄLC€|ëµ7‡ÁÙ‡ìµÆ&oß²FûÄüå UµÛ aiºvÕ ‰€PëIë Æê›ß4]6³¡%ß&K~’Ë.Œ[P0rç±Hiu¦PÒ÷®B(½¤°œÊˆSè£³¾TcZ*ó'›gX*%Óe…Ç†u_Ö1Ü#L{!uúÔ—¦¦•·'ÒnXÓ2ò['¿ccûé¶!x1[¯Ÿk£Ñıƒ8úfÜÌúq(çN(3òß:¹€r, Ú><©â8Û`J\D±u²í~Át“T“.Íã¼z Jä¬?)1a.Y`öø§VÂƒyXÇÉ#T‚­´İ¶‚¥ª‘-İ·)¼±I¢_›UêÖƒÔ´U ×€~6~ YÙçty¡L£œ¨^7v`Û¢Š— °j¥ÎÊŠ¨~½»êPW¾ZøG#é$;NQ²óÀMÑ# CtŠÚ\Bß!ŒÏ œGj½]CV–Š½€FşE¶@Öf? 1ç˜ÓÖÆ¢÷cË¡2«W²‡y“TÊH×`Ğ©ÊDö{²ßfcj_o;Å£‡á™›Ll;rõ5sqR&yMR.Ñ¹«qîboŞ„¬v`»¨Ú]ò¢÷Cî‚LäB}XuóìÌî›K†’¾œÊ‚£kïĞÙïf'©aÍûÁY6İHh‚v‰ùãâ¿Œ+çmÀƒBÂ:†Øb¹Õ{t}ã{—¾O¤¥FÄehv;ãM/ø¸JÚ´ÌHEø¶–ÜßŠÚzz¸±®Í–˜)šëÔ¥u¤…É´ß DË¦ç­tMäğ3Ôÿ?àÒœ,{Ù6.tËıš“t[Ñ}>.Ş;Q6'±ôÕ¾ş‡`2;êbK¯Êa_›@kï‹œDS}İ½+i
¼ŠOf$=ËSPˆT¦­4ëªóÂ‚üçeI•œV¬È
sKŸg;NP—{B}1æ¶)Ÿ8S@	¢A¡MTë¤û›ÃCP0• ’½şü[árá‘×Ü°Ì4¬×°Àu¤ˆğL+Wû¾Ôä‹R¡võô£ºæşş¼V`ßgó©8ÍŒÎÔÖ¢:ØËô¦Æt.|É¢ó0hñ©)#B-‡¡>|XDÿ^gœŞ’@	sàÂÃ"X›ïh€-.k»F¿’	åû€:^ëö©Ï–Ï±Xºµƒš,(ß™Ìİ¸?¡ÂÏ¸z"ƒäïşÍ§âë£C-³ ±ËATxÎWĞh*¥Ê¶Ç·-ÍĞ,-Pœ¦¶®eíÄ#±E¸¬?Y«ÿB ‚.NWi“A‘£×"_¨U>)¿zÂ?W=L…}·Š·Â7«´	ûôÆa$.±½c°ÉÜEãxuAT–‘jùï"÷b^±Œı)TN¢‚•§•¯»øj {‡w 0ßªáòÚš1+'¨0q.¤– ;ØÊª0äú0¡W)CÛê8ñb±ªÉ˜'¾©_Ÿ'ã?;…^•ñ¶Hj;Æ÷Ü¼Ãy«tºÚÑ“²›W¥µåAù¼ î€t¨§W÷ö¾‚¥;€çdÆ´Ò8I…,û˜'Û§l"kÄ'8Œu¬Ì+|Ô}®e&[g Ú1šíäÆ”(ûu›µ$úf6»âŠĞj»ğ(±Kõ%A›Ab/¿àÈëÙ‹,,È´â›kïÎëÁ_XıÂ/Ûà¸¯x¥¬Ç©Î¸ªUz#‰°‘„BÆ!ˆ*‰Š.CG’e¦yÔ{èó3-ÙN©U?	5“¬Ûı¢>è8aÉÌ)Q4¤«FêÔ
»zÇz¯Rá„¶şFMrl63ç‘¯CŸƒËØŠÖä<ÿ$BÊ¹³§¿AŸX\€İôv9Ö+f©E<îRÊ)ÀN#ğl¶=ñ•JV‡ÔyvÆW ¦â~4±oŞŠVzï¿úÄ5Ôİ
ªU§`Úìşf¢’”vfF…ÿºŸzOOâBZK~™i°ôŞÄ \qÜ„8JŸq’¦bå˜ùcÍ	ybÕV¶ ­‘Œ¶[¥Sö= :4M¡ıÁ-I2~°Ùˆ\«û<RFb¡£Ëoï/§ÜÑ 5¡ïÃò÷‡²k;š˜Â›*ˆµ®t£GµÑH[PÅdì™Kƒ~X$TÇ©g®*e· È~N†ùÏ¹Ø‰vò|Xô¤'>IE¿1®D¤
ÆÖ#öô¶o5~ÚÄ¾Ø©½ëèÔeH°è.qÓïJß¹¹äX6’çc÷–åvVÅŠ"­èR~ŞÂ±Âİk„\l$Hş6äİ	lÜ­ÑŞ2íúğÖ^¦®Çâ2Ò74UÇÒ @É?AP´·òˆb‹>5G²Ä©É¨áy t{-Ã»SÕÏ1\õã`As~ÁÇÔÿ,~+¹X}ùÌ!zg‡ë.è`ç»ğElĞ{¹Mü7[æ_¸N¦H˜¬Áò…h¶Ï Õx‘Ø¥ùåMòd‰:À£‰³¦‚ñmº$XO'Rtƒƒ†H6ßçy;şu— v²t|e˜3ÅèŠáÜ¯ßÖqSŸø®-"ÌpÎwMÙô¢ÆŠVB*Ì¤äó\#Â<96ã5-{šY›Òì’ëW¸¿jïµœ˜ğâr&|XÑæé~ğëObdòÆûïÊdáŸÄRg¶ìQ(ş×'èšzùYVº‘Úİ3qÅ-D¶uréSgm!Lø#Ò«"iï—ú^·s0†é,ƒÁ¹–6–.VWDJƒ•Ïš9¤&¸m€AY
@zÑ*×òJTÛ­ª^á.**Z$Ç*1‹Oÿæ·FO%«IsPBí&Ôüiır—_Ú¯4£Tı_FôRú	"¶cZÛ`Z5üÎ×îh-D‚ %ÓBsä·nŞN&|'4Ít’Ë{1+Ş„–º=ŸønymgPJ±^*
œ­¤éDú%1ŞËie¨ƒt„ç"k§ÈŠÚyø¦y6HÓ›’Ê€|µ±¦zÃ„€Ql²0íŸŠïg‚CëÎõàŸÕ|`İ<”cSy+ÜSÄ²Y›âpñh3\şÿ!›+—€M@+õÂu^ì CËû&³øQqÓF¶3¼0½ı\¯~x»?z…L`¿4NáA]DÇ°2ã/‡MödJ£u=±Z×ÌwŸä`š{p1¼À‘jîƒ’¯ÂÖ/åc‰l+ÔNIÓâ©ùÆñò;âä*æUÓdùM"'Ä*u(iy¢7ët÷Ñÿ·‚s;»G„ıj|ııšƒÜwŞÚGaa|’ŠI‘«ÇË¬Çpõİ£ñ“ßÄ/¡·6wù²FVÂ
­š’O„¹ÒÏş¦®õm¢¦ëšèô¨TÉ¶m2}öüÂĞˆÂZİHP„Æÿ0¬¿ƒÎ6ìÙ]”÷ĞÎ+Ò™œPŸèÕJKaRs³¿–ŠæÒ(ÂªÌ©…÷Ú@#-9dûùÀ@”M5/é_”$}ibÿÚ‰¾ZS@¤¾PÊ×ù[Î„¿µËôË·‚6”ñB"E&¬„&çHîÚÒ I'İ²#ç¾Pu è
«úQÀ_V&‚±$Æ|º—¬àIXk_f²›O®m>Êª’yöÓhĞÛèmOß%á—Æè‚ñ5A¿{CtÚat»Æ¾¼ç½.ÊƒõÆ¡ó}XbŞ pbÆ×h&æãÊáÀ*ôâÊTªi–	xX›àÒEK‚5šCş”gcF"T8½úäŞf7fŸ²â‚ª „W,9õR	j¿İß²Û}
Má?ŒÌÓÍT#xÃ®ÙJ*hÃä;Ìa¯,¨)o±­µ/"VÌ»ƒ=ıæÛõOÉq‚‹]Ïwş¸“d“?ªNÖFHçÕà‡_i‹RÿaÅºY,»Ä. CpÜ÷N3]Ÿj"„‘pR
|z§}ìüİŞÉ3¤DÑ™V7´$R¡ygS4N‚ÔaöÜv®a0“Å&v=!_Btî¦„bñ± ØĞ%ˆ8D6b¶Ğ;å•ÇË^H` ùœ™“<¬|üâ&~1`cÓàW°0.êğş5 %\åXvbcªÂô£Şò¤¦ò&|ÏzÿÄ@º‘RSıÌã8’o¡/âÆ8Û(Â^p{êÇ>»Òƒ.ÁÒ£%É”(¿<ùyÓÜ‡b¶WpÀ”İİé%6”lOŠöéŞ1ÂktÚÙä°[Gål3QiÆv1Lˆ2A7CéÈqggÏÅ Òêƒº®ëïeFŒ+W‚“,÷¼´-’ìÕé[-#WÅÌÊ|»::5«*h¶b[¦Á[®‰x%z×Ùp3Üà¥»õ’LB€•şÆÃù3µaVøÓ‘—ş=o³;³}vú¨[^°{Â`éèƒä¢HÙÅ_®›t®ò.òßš¾7O²·rì\‰p¯ÁçA¦ÊyN|}Ï[évC6‹-¹Æ)R½T,ç¶ä4Ô?Ï–;D=“?—ÑÌ›NÄ2Z¼ğÔâ_Íèq¤Íêc?¦ò9X½sq	$„$‹¦ªèTŒÿûåeWä*Šf@dÌc°») ˜:ÿrê´,dpÁn7-P¥¼:‹Š—:ĞN]`ñT€e9·NUü=Zc¾­*fÑŠ‹jÿ)ı¸/ÅuæGé#_–¯Õî ­¥Âøë¯/ÈiXz×çY¿“kç½P²-•ğ ¶1ı“E;í3Œ¼uŠ~ïOKø*¸Oqbm›]füø™Ö|„‚&õgrôçÂÇ;È&LÎ!«í=¶kÎ<L‡ü§‘Ÿêî0±iJôz1¾Î­¦š±áww"´‹Çò:ÿeÁÔØ¸· ¶úûÃâ¸o…ß‹,|émÂoaxœ3Ò™,P×hÀÏÑ­àùéÙ¸0S$'™F3nÈZÀĞßt€!#O^²Ô‰¶Ì/£¼F™ğ˜èÙm´U¦`×Œ„ujähk ·Lâ±ÇLFG~.[’¸#M
a7IïEĞ¾ZqNfDß‹&èìœ¦µÉM.P´^ğ¹ê	İbJrˆvÌ¼•P:÷¥ô˜ú·ŸF.5º!õr´[Q©Ü²4K™¬_Ÿy›>¾Kq–mÉK‹ô3U¯#@™ğ	SKÁÅõ¦-q£Q+ú`ÿÈ’s‹Ïv57S¶¡«„ÚÄÃ–óv)4VçÎQ1} £É"s¶Æé}ÍO¨ĞÓ‹Ã£©-ÅÓ‹h¬¹V¿
€*k¿œ«E¡l„€†üô£xÆUáèŸåi»”zö,(­¡­ƒqètôNÙ³Í$sXÀ®† ´=»¦& 3|…áåxXÿQè—¼µr€­±“Å¬ÆNÿ3†7S±XÒó>ä¶±Ë=çvi‰`Ş£+³íkˆˆûôó‘ÇÛS‰ æ?jôÀJß›†".ÂXêrØc"„(>aø›”Âk×Ğ¯PÅ»™¥séœÜÈÖé!SVeı\tUñ_±@ôÁqÄ³Æé<¥³—÷gš“P—ô[çZLkF†ûÊU2¸	ŞÃuOÚˆÇìŠá «‡­êƒ;9Â¤1µ»3­)\…ş’iè|p7t­²ì[Ô=¥ëImaÃéÁä`8…¤“Tütº]]üşøFGQîğQñgl2ÔmÎ(ìKNdT(°ÏN$p´€
šã5[¼MMÿëàÓE`LLX Å¯‡©İW‘K[Õ©ê—Ú)
ÛeºrÈ œW¶tÍ²Í{ÏM‚I	­ï¸â3}uwÌÔÀmfÁj!£¦Ü 
Ì_¨@”o)w•à˜ÈKræ¬úör-á¢ dÁw,‰¾=+²ëÚ2{­ö/ˆ*Ø‰P\õÑ»³ùåŞ˜¾oìId¿Îè,½¬HAÖ¼7*J[o¸è÷×k[Nqâ Ñk?E68_>…À¼¶@j‚¿GÓ[K+ÉÙC=ìâÄ»­ÿ#]Fƒªk"I|ªº§ÇÇVÃ0ªKYì)X%D3ş8nl†|†¹nGxY£µXvpäiŞ›÷=vğ‘‚ó5i{öğx:İqŠDç„Í/ı°•©æÌºÂú¾á Kyïó¤û¬D•ãòOÀ`Ñ÷ „İğ\–YwøªöÔôÇ{ëÄLî#¼n†WxîÀø[•¡$"Í]äÈâ??M	»¥ã4±ğ@VN©¤IlXúyğ2kŞ}šøBØ$Ã!ŸºØúÛ×Ïè‰{©Q~ª“5Pìúîú1)´$ôíµ½>£çšùªÕ¦Ìúå*²PZ—¡7c^şe¥~ rŠ¯îJ%¤êî	šOÂ(E;ôoi&÷ 5M<pÙĞü1‰ÏÖ)('`q“j´rÖÛ‡*YZI¢¢¿QÁa¤¹Ñ9‘ûvBì*Ÿ¨m­PÂà²©Û~!Z…C«ŸÍæ½­l'` CìëBÇ¤ËºËƒPäıÔÁÓ’‡QÂÑ*ÖgTäKtcïúÔ
*{Àş,ŒeÛå@æõIÅêáR-H &Y®KéÊ&F§Åç —à#¤ıßqç·‚Û¿g±\À±âö¾ ¼­Så\Ì›	ĞëSí+ã˜†5t—ÿ‰ÕÍïùÒä·™šUišp¾Ÿn1Kæã;6_yc5xèÓ	¢tBçòÕ´_êLI"ëö:© ˜c¿|H1,D%e]3T8ûõ¾B)_Œ¦Ğ-±îc,;O!à´í9vÈ5¬@ıÏº<æ‚:‹ì¹ğHî0h»9AµI†ƒsÛYô;L±Bqê1¢ò]¾øÔŸÖóH7éÆëV9_Í|+Æñ;œeO.ßÎ¢f¤øPäH9w_d:3­>»¡@›Q3X­$hPBX¶¹ÆrsÕPY½Æ»R¦ˆ éN¼@ÊYøá&1ÂMt1ÌZ¥ÙNÃZvDZ9ÄÁAŞh7š™õÿŠdä–È ¾’L(âëy¥ºz“‘Ò¡€B?óª3%Eİ¾¥‚¥Ø{4G]ä±Fkâ3—£—tÕüä…ÔÑ ñ^x°<çhñøğ”8{Ê7F[Ñ³Îı‰ñ·6ôj¦A³Ìœ¡m86¥ğûbâ„™{ZÄÿÁ;Çq*sùš†ÊXîVµæğ1ŞA^
s N1!uïÅ%XÄ8½È.¯šäëÂ7úı¬ÑLw}"Ë98(ÍmÚà©4¾È´´%Iw6ò\’ †yËí­ÖÈ<úÓ}HÇrn±1
µŸ~Êïõµ ÎÃEX œ-Iè.fV3¬x²…ñ’yÑT›ZDK°E|ácRıè"Óv™Ö¼^û¢]™ÔX» A“´ âw ‚ûµ­%4§j×²ÙMR’ô³³}~®4ÊË¡Õa,»tBGj ©ÇŠ—ıP™%{¬Õù)$É`S	Î¦-Ñwk»$ÄÌ°ÿ¡Æ©ßÁê	»\?~¬ë8€t»Ë$È ¯ü(k"ˆqö’:êå§!9ï¤H;Rj_®-°3ÔÜÓ ÅUîn[ôju™ä'f8²Í='ø@5ßá<IÖÛ.w[±À6á Ôdš$ØÄhéaL„|äD‹ğ(iNHA fù€BÔAH8 Àcíä“Æ˜;¬±¾w@Å«L
mIMëYı[áÓ×¹å{r¤Á0jb¨³ÉÌ§p[Á(š.‰vK4ÚMKCµD¶CÒš
%‹H9i‰4~N—Ğô8ú»ùT†óÛàÚ.ÎòıãÎ¦@+	ë‹jØÜA7„íUçX1cA ìü:­˜hs›Zp‹®I“CXl'òdäœs|ìæúÑ‘[#ÜÜp{‡q\1x0úã·(ÆÇ÷}‹©ò3^³ˆ
G¿ÊVóW@Å¢òŸñ®_T¥Üˆ|4¶½‰#0pğ’ßˆ'¸g®ÍÏgÑÈòCÑ©,H7»[tXX÷âÈ:×àÑÃ“W‘™±şQ]z¹"àS‘¥¥…-¨Ì­KêÃàFèqu†S…Ä¦îK\%'à…}‡8®f^gkJ²FNoZ©(D	éAÏÎ³2R“ÌÑWıSßàìx 5Ë¿±Èï°%/{}6„h 
ƒ	:¢gõ´È$rïs|^ÇÉe?øæcÏÒ:TõJYWËc|“0–,l8‚üã¾,œƒ9\[Z£\`çÊt˜€ÜhùBØ–Õ8çDl`>µ"f4´¢ZìåÉâœ~=Lê*bk…;¡ÎÁÂ¨/L?Îî®]k™Ã…Lt/ôúìÜ’\TüR9\Áò¹R
=¶
”Ğó
°†ß¸ OÀæµHµ}ƒ¿;„ºÃCÇ”wŞÇÙhÂì;U¹iˆW ˆK LkQOã8Lˆ?²¾Dİ>ÈrmüõÏˆFYpLd½š;‚ÏÏÂoÛxM ş.Ñ.1àÄÎÌ§äJnV¸Ïsİrø_µ!q#nI.±}ªaÅzÿ!Ÿ\>múHÅ—sdÅSdÒo!s`¾S×øİO»a$€§8MAĞ;‚Ş†P~ó@.y­%át¿åAœm]éy
ã6šyÂ_Ñ:RiDá£kN®>Ù¨pfsê“Ân}™‹‘Èpvˆ}§ë¦½Tòisõ$¬©k¢—BÓğ@®´aåºLu<ÌæÄwJ™ß(ıˆ¾Zì‘£!æ’Xèá?«Ú¾uog*F©×$JˆöÛÜÖ{å¡mÖóê–nŠ‹Ph R¤Ñd¦†,ağ8šÕ¹¥
?ˆšş¨Z²@¼ë»ÇÓVï>Äºáé1Í0Ñ‘ˆ×¢ÎYşí¥¥L
[u'e:AóÓĞ¿ıQåEƒtŒ¿æ=q[6|úİ÷Oo‡óQñ¶[èäº¨Du×Y=W‚E
,A3.±à©÷ó ÁĞl³éK-ÓåğZÖi=qƒà!›¢#w´mµÍ;ûòË1Ë?mz§µ@A½HL;E€ãL+_ş_ÿ]@£Œ›<Ú[ô©òê]pAŸˆ»uLè0äîk½-bï”zßfvDø—î®P<FÁÔÿ'ĞMÁØ9áÑó‘#Ù³Ñ2±e¹ŸpĞóœAáÍ#’Ï¥Ém3›æÏ&ô7ütyérMºF{,èH¾òX¯Zv
=“†µ^IY«’=%[åu8Ü¿^§¹ÙÛKâ?ªo5˜¢ï¯d¸ß[Š‚b4Æü´-§_pãêq~§·É7¡ûâs¢Ó¦ª›„¶*a¤	“s<S£©|›‚|$v	ª¡~a7T QY­çÑä’ÍbcŸâÉğ›ƒ·fûãèbSaİoÿş*¶æHçøœôÖûEşZé®HÂ¬ÓôŸ%F)‚ÃMçùì3ÕX~!¥Á×2áÓx:çÃ ¶4R¦µò±&ã3zÀ\&“Xˆó\ÃÕŸ0ÓO6U¬®®D½ÑÙÉOx¥=¦iôÆ.È\èúÚ8Ò2á!8è•qö¸j8¤{Kºù›–YY÷>HT £}Ïˆšn2ËnNôz lDîÀ——ƒóæ0câ÷lÓ›¬‚kğŒ¶«ÊòŒœÙßç Ênõú´úÆ>`z{ØúÑ¾÷­µïdeÆâG“Õ<5ê²Ïû44Ì™ûZ’¡L[–ïØ_aOWƒ0	•F–„+mzï]pÒ¯÷Ã–†!¥bë‚4¥b÷i7BÚeıƒémàë¡Ùğ²5A¯âı~ñ®ä¥Á¦7F÷ÜJ÷Øì^“N:{Q6ÌÓÖÙı&cvw8XxkØ_ÓDÇÿÃøû+¼‡§¨Õk„dD"Ø¬t•Ÿ5î—Ñ±dÛ	7ã‰®è_C?2zş«‘™àö	IJdzF­‚Ş«W“;GÃ¿XrE=™¢s¥XRa´ïiòpó6§Óæ@ÉªNtb‘zF#ab™Û]1øÿ„”h>wœ ÇVÌ[Š‚T4ajÖæZi†\'gd_Êğ¨™Ø^Öä½‡,IWÑ·zù›q^ÂÊsìd¸"Q¡Ğå˜*?„Œ}xZyoœî,/M ’g:öE™Ù~.¸ÛOMÔÛi–“,GWy÷¾xÜ’mÛÉFA3?şvK“(Å¹S‚¹¸æªÅÁ
ğMy·
{í22©•ÍşD?÷(ÛR1°t“?@… 3ËQ­›ØiE²sæ¾%éò9„¨|Å ÙÃQß00ñ¯à"0wZÓ•šo’`¢Ë9J…ä¢AùèJ>}‚öH2\ÇDÁ(XğÈ0Ìx3B0c@ªTTW¸½}XXL \özNçæéä{tÌ\íŠóZ÷ª,¦MÛ]ş¥^`EéİEı¨ĞødUÆ@—t€a©,ÑBÏ&/vyñd¥ãõ¿yÕÊc’iœ.qã>Ñ>S#¡Éñl_=İkGs³`Œœ(WHLğˆËb›°ÓÓ·#‡j3$§&VÜ·Ú\Ù}Ôo…!'NPè›ÆcÆ…R^ô*ö·yè%ßıŒ“¦]àq¯m‘1EYW!ß§éêĞµ8x¯Å¥ÈkVXX(#uUkÅQ@¤Š»#¤†h›tÚ½côĞè³˜àÃ,“‘xØ’	e‚“Æ¶õê{'ü<)öY©x½sä;£§Õ%.Ğº®ï²çÆ‰HØ"jãbq…)|ÿİ+˜æŸáÀÁ<³?sWùˆ‰q,ó’{/|é·ÃXŠBñÆ‚À%Ns¬tOJ|à2÷z´2Dˆ¤…Óïš¡şÒ›½IèˆÜÓâkÙM¿¯„Ó%EVÀ¤zÖ”Z€æqàÏ´“«Äk¨ç6<x†KâŸœš`¼4Ù)Í»ÌãğşÍw®E%OA¿<7’å‹ÛÒ
h¾õ Í|iëwG*i¡âd¿Ğ<F·ÃqBâ#¿µES$ØKõr('¼T´yö‚@İ›Ö+k©L,Šù^úÊµÿ*ËáÊŸ¼XñTãµ•õï€R¥Fƒ¬ûÿ"Å˜Zöàpóä;ŸJj0Ó»‰ıëæbk?î¿oÁªeC2gF¦	À0‡Ki?o'.»@± ş¬aœÍy)dómu¡HğÓ±Õ¨:Ÿ×¸R¬€ïQO¬Ø›5I[Pßê÷¦ãÔ¤ò)ó„L{«¹Û{PBªòğH»L™;EØ
©%pl©×ùøĞñ¯a’umz"±Ê$]=´­¾ÁXz^‡5ôzMÒÎÅò¨Kâ~İÌFOJ_£;Ü3„OTÀÓ¥|/@JQ_yú­ë@~’Ô¡@ÀïB)=–EÒƒoQAşå§Ã%Ğl’›T‘u×óÁOİo°ô¦zë!©4™çñÔ¶n"€%õÂ|oœ~Ó‘˜Ğ¸6Lj£Q°‚“¾b=p5ÀC1’NNM¨zM½£t(§1:I‚«7róºC}õw¤Ç¾”a$&($<Şràû`é‹jÌÏt8­w'[aéAptQ…Šóu+æO×c™{¤ÉËn<*Ò”Yƒ4MŸÜVäç¿ô¶ƒ2;Ûf«C7u¼Á~=†™#?CÕêÿÆÑ ô&àŠ4ÍIØÚÑÇÏQO(X“.4ƒ²6\Ó~JÃÂÄÒiŸÌváH¤®âFqU“6äÊìÍ>âƒ³a‡f–ÎÔ´î½¥*¬Eú½ä"8‚N:‚¨¥È-Pgê¦„&\•ŠŞ?ÃM(€ˆ¡ŞÂ,Á6?pŠé,ç¯r˜ƒ¡èÌÊvşØ*DóJ²ğÄOQµƒíùµÉú*Á÷>!ïÍ½eĞ2ãhg#9$Şë,Fëu½“‚Eİ¾1÷­~«²•ø^qº†‡®[yÉ¯)åÜı™¬Â,¤Hš];©½a6•½%Bu"—1ù—²gô-<;Y)(e­V›Pluí ‚	ËHÀ7_İ7$ıñKTi‘cÕº`»kÜ)™8¬u¨Á25Ë¥~cãóœvÇ˜ĞOXõÒ0S5‡ù„’œ]ß•‰¯>IÉ/ÿ£„D[ÚØa·¡\Vª-Â™DA„bÒ`&+8Ï€=ÔSòcéëàw»)H¸oÖ²“ëÿ.Õaí| Î¥K›qxƒ·(RÇ›÷&PòMK·fbC¼õ%X®”Z<¡³>|æi#}’nØaÜÙFĞ[ûôÅÿÚ:˜“tãÛQuë‘¢Ê3à`’Äéiå®UÿÆ›¯_–»ÿ–u¥9şE‚Ì”™Z3±__ŸÅR6W[Ï4ò;•u²CÌ»–³í _Y ÔZZj¡÷]át'‚jºÍŒÉÜyµø×ˆtÁªÂpCõQŒº±6‘ùøzqÉÆwòÑbv*4³Ç5‹ÚÒVƒÇ–,Bm¥l<óÚäMHRM1„É³Ÿ^WPô˜€QPmÙuÒò5™mÔáGÒ`§{$X LQ†í‚që;rçÜ)òåA¦³]'-ë}îùÏUâšyQEOL= ®ñ3™íwùg•ÒşqVfË4Îú­
í/==_¨C>ônâ¶ísÊØ’ñVr×iCİV|=—ˆşÛ™ıES„ò /{ ô'SSÈæ|´š8äÁ[í€™P{Ç=8=9­oÓô`;æ^ˆèIiÔYı_{H+¦ô®=…€DqpµşÖ§à1=ÃË›™ü‰æµ“ïM&i²¡é;º),€ö‘QÏõŒÕT%Ó”ô€B	%Ù}šÊÍ•ÌÚ™µ'÷xÈù½bŸıK½Öªß	&îÏ—d³Ú¸HÕ³÷'àv1çº)@Ì=oYÜüÿNãycºÇ£mgSsºòzyäIƒtF¹­sİ%#m½Ù)MNC;œ$ÅÖë»Rz,Ù_ş½ˆÉ[‰, ötÍ°m+±?&×Æ:øŞ4üV¤íŸìıÇò€¼¿{4(‰£“çD	÷ı–Ğ?u_áÏN£“÷>‘Š'ÚásÇ ÆÅrâ_¾
•Ô{ ‹	å,!ü¤2/°2·ì‰k×~ôh¦¿¬ÍŞÎÛˆ‡¥”™I_:ş"«av'àü¸èàSà \?'ë-ëö†“ìöÿ[ÙşŸ;~Ôı*WÈ?ş¡6Id):êõƒÎÏw%Åk•TïQ1¯Õm3-B'Ã¦SÁ¦û™¬·=»—"úƒVÀXlÛx[éDÄÖÙ]<ÍRõk†Ø»à«FjÿÏjSc)9œØû)ó5—¦Í‚os¯Æc{5 f4¹neÇŒñ³t´Á–~IR¼yS‘ãš›£L ;/º)E± œúQíµ‹!?ÚàZ(êªó‚±ÃÎ9Î­8•BÃ8¤ö²f[‚”gõY1­JÉ‹$mr\Û;Ü]aì>ŠÃ#¦sÆ[™'ıw)ƒvÓ¬k†Ÿ¼èíÙ.?¢¸6–Ç“ĞôJ®ÏèŠš > )©+³PJúØî…RÄ4}lÈ*ÓÅëgO¥ç\=:¥	RİeŠ+w“¸Ez#«’`ˆ¬J˜;a2hüzÿÏNqÌ^—]´m[T'm«÷n êİªüz²\êÇæ¹xd–G]KÎ¨b#ÓâíNº®¨s]b™·àÙe¯LL00¶áê ¶Ü•õL¬e¢ŠY‹?Ñ×RÈÖ­ë¥‚ÈhÁÀ¥@}·]\¤·¸jW @ò€#ÿœv' è¿)ùÍTV¾]çæ%iÊniÕéDàğ8¤¡¬‡øïêÀ+:ƒ8GÕŞÉàÇ-©—Uz¨ùàõ±¤»‚¢Œ—ê]„k‹xĞQ}Èz1pİ¥¼ƒşÆ¨|@ß©ÏúİC=î€‚QŒ}óÊ3£·@-Š'8SLÁ{3jb° +ğÜpníš©kÀı.ËtÒÀwæ¢ß¤CÃ?Y/®XU¿NùU(Á÷2Û¹U"
<tĞ³‰Zª‚§u¤ä‡3Ê¡W …–™d™ñÖ MóíâO@yiŒËùÍQç¬"5+}¸òC6&¹î%gÎ„œ€ÿïZ©Œ£¥c¸:mN9K‰:âfÅ[§ñ7(“ì­:àª?JVæoÚOˆ Û«¶ôé‹ƒ”\·Ö¦áUŠã>ÍóQÿfön^Î¸˜İ¶~Óù#x¸ok¯ÚØg‡!&V›}·Æ fêQ±’³
yyİ\î†Ğ!–©¾ÌJ•¼Û!5T¬É½½‡’ó+•‘#¿¦ÇÌ]’IÂÅºÿÎ¤-ËóqgÍÜĞë­İv/*ú[G.ĞkÍO“Dµ”2T45 ¨ß¯S)<ÏÈ)³ÁIˆĞ—KÌ‘W`Q—CLo‚£'¤1wú9rôÒ}¾!üZZ<(v×Ó¡
_ÃË7V
™
K‘Dxë­Q.YãÒU$@îŒ9…+ÉVu£´æ‹ò£¿.¶ÿ`¦´(@©Ö¨†iº–2n-DLó˜öÓéCv [ı+¹Ê¨¬»ÈÀ0™­¸p½Øy",AT­{‡;òÒ'oeqv‹Í™`qÛ	ÿzk1•wTpVI@ÔI÷÷¦„‹Q>ÍÇµá«Cœ¾s­fë ‘deiM/8‹´I)Ó=grUésÅ¿W ®Ûïíî²G£üõ¥!éwdÿ{ÜS6Â£ÌC#˜V-K#:Ù3Ÿ½‚å|:roRı'uÄmcß‡u.3İ"¹YY‚õxÈn¦0dj%Şbq"CCdƒÌIÍšs¸~|ßŞ/j›RÕÑ«ö:GDÜ¤ !›ÂÉÿ¿nå7—Éœ6³:ğğ/n^°Óøo³©İ)7Z×uü×.Cò³MÀp=TCL`(2‚ö-ãí˜æ+Ä—}{9Pú8Lï–G[QªØwÚãUë‹rİ}]½ÌâÚß4Úˆú8jı¼ã··îÕ¥?”Z’A°¼6_z]Ø°^>u;9pŠÕ¶}ßÌÿÅ+$RRWöÀsL7ÏuåŞ&è‚Bï£5ì›œVÜG´Dc´ËË,Í ú'!§¬˜ÚÃøg§æa)Ôï"iˆ¦»sK¡	«•³Qì›qU»AïCù1÷=°4
±do›Œ"Y_·D…>µ×u;ç?®;¸Uõ|¿êÓÂ)Ã!ÃÁòÅSµÅr/ÃÚ2¬"×Œ5×qbnr´+øısğ:”æå¤¹ƒ ­Õğ58¿@¢‰Û,Äİ-g×v$aóRï>‰øãD»›°]ıÆjb£² 6¥¯@:#€ ç0’ºÃ£8øóàûáŒf<çØØmMê!ÜÎúD¢·Ñ¤€%Ğ ã‡>­Bä:P°n¬Ï´¼òoq+æõ
2ÒÕÏ™ÁC‹‰êCÀy±*&½¨ø	pÉ(5ö ¥,¼ B0^Úœ!íö ÛÿË›k#½TmÈnú]á£…[	y/š¨èÀhÊ"Æ_xn
’³à‚ÂôåŞÂ¸ˆZÖW¦¦<q‘RšZ]«*X+Å[dï¦EÄÙçì~D{»8ïŞşiV=ÿmBôÂ]3·zaHO8ğgõûÁ4İtmT°Ÿ÷ÇòIâÇÏÎèÀãÆÿz-oÚªĞ7¢i¸ß‰Sƒ¦™’Çò¢PöĞqj®ÄtŒ›
{Ø°€ˆ®ÈŞË,2y¤šM+à;Ã9å-é—å1àPÃ-\KíŸ™×™{‰ßµH»Êğ^.,Šî»–BÉÓÌ+ú<m	4k¦åAX™Yu¬üäÊbRÜ¯SÉíì„Œ{³Î³Şš':ÙU!›Çù2²OZ×53%ÉŞú!$º³ ”gjH¼æä‰YXŒlÚéa®XÄCÇ6T¸"÷9<Á˜i*÷A#–BvLb¢‰UÛÑ•øÙÇ8ßéKÜ™ÇÛ¬Ç2.³ï¶Qv‰á„ö‰Zz äÃµîI(v{îò§æ(~šü@äY¼Eø>‹á9f€³LÉ4ä/¤paòŸsÊ—;šùÓşR u1@_¨Ş^3€¨Ü*y•õæóÖ8ä´¼Ş·ü×Yü€íóîôªÕE2š@U*Š U¹]÷xb¬”-0lHıuRáP«¾¦gQ×B%×õ[KÙG!vÿ´[¢ œ¬+ºÒ1§÷HUØï)Ó
mä˜p©2ÙÔà5Ø£Q˜Mw?nŞDXp’çk¿	¢¦·ÒÃç!ƒZ8‰¦ª­{£ÈD·S½»÷-”ÓW±¬İ­C‹±’–ºò¢‹$`ûxÜÂsì.‚iLi;ŞöÅAµ#Kò¿t°XöŞj2Úõ
Kdrÿ•{a›Cæ„`Ä»ºÀÙSp–VºÆ¸jHİ±NS-ëŒí©ÑC‹RÇ\Á ?MìZ«g–¹@ópë/ÙÀƒÂ)IÃ¯ıÆm‹«›ì)¹ù úÜ¸İîkr‰&\+yÕakæ(k«ühğˆí8œÎo7ÛÄ]œÌš‘× Í8;P.9gQ
0ñkï+”¿nO°`bïª»_õ}pŠ¤bóÓ²Ô¡
é×p&hÓÃo"t-~s Ğèş+§³mÊÊ(ÌÂ¸VéMú÷JÉà‡,`’•aÀç»¼?îzÃw<i‘mVÑ¼úÊnrÌTg²yÏ!'à>®t|”Ö¾Š²Û0'f{îINÈWW¦_ mú<côWòFuß¡“*#OëEéÈÈ¡TƒW$ğã+™òô„¢Ã§Ù(1x•´‚—íñô™ø›éP@F»œ1$µèDğS“ Å°˜—|FI×móó}¢3¡Í7.·±ÍÖÂty) ¨flg½Ÿ³Nª¤J¨…Hîßï|2.¬óù.ÛyğNWUùüü4§b‡±cu5rvIM AÉ7™5kQœµE•Ùö­ÊXädi‰Šğ(=én—ç¼ .ºææcSSn û%Ÿ„µ8À‰#Î ÷_i'ŸL^t/qÏØR^"R6éë}ì6úeõÎ±zöKŸŠL´u<¼iôd”¬9±ókÀF9ÁuXÃÌìå75XË<Yj˜Œ”BñF‹ıBã=ËÙŠR
/`µåYï¾…$WâË>è¢J½£òõ¾]\&ç˜ÎÔ­¡Õ*À´­cËÿí
üšÃŒ„O˜ù¯JÌL,2TäŸ»ü*åÁ»¢üpO|Öú(-pèhş%ÜàÓ0Á¾¸´V?Œ·°¤¤¶Uµ)Á‡„<r~Ÿ¶dÛ½5÷_ª~Rk“=xŠæşp?éL4Öy®zw8´CJÎ‚/
PåÙ³LN|Úë\×ÒéÊ+yÃ¥"½€ô/hÍ5ÈinÇŒ2ç¼te’^‡]ÊŸóH“–\µ	†„¯Ì€<Í[§>cŸÍ:Íì¢q¯_.#8©Ò¬H!Ÿì¼MD…,Õ)Ó/¦9ìiâréë¦XŠ€YDirFÈx=¨V»ÀşXw…òéµÿÓÔ©<ó+gı=ôô}_"bm¥ué·I™¿/+ÜÄHÏ¡*K8¸wzDÇÃö®´öÁNÎEÏÕ8:O—™Ñ±„<º/&·5LGEsòÇ4—C:j³o63™û£öîeˆê«¤§şs §ÌU§yŞ‰û¦$MßÚÖëgwİçÂj€0Ğ4}—goã¬å7¹{@=!Ş;ö­²”§¥ÓNøµ ú^ñh=c¾d¶¶XJÁ#'¼ÑŒ;Ÿô==2‡«æ©Ïsùa/ˆ¯”Å¼¿ïKhÄXù‚£><—„!kùw–|NtköX‹

v;ŞGÏçMX-6+à…u`8k‹j³ôdË´‚aWm!}Ëf±­õß!â.yÉ$€9à›~WùÀjP„bÈÚ©ÚŞVœ26?Fõ˜Øš-Ívå1íw¨À3Ü"²Ğ‚œÚ›6¹¥6†×¤M‡´N¸IfşCÍ«BÕ%õÊN`R»ª*mD6®zF-|ãvú¿¬ï[ıC{šcãTƒæ0×ªŸÄ4ùŠ$xj–h²fgôí2‡è™®#—oºÒúe´©°1²]>°‰ø#„ƒf§Œ.«}NÂµÇ$754¨¸‚³µŞ§Å…V÷ŒŸ6¤á|y-Â–·ĞÍm˜£¾%(Ò·!µv°?ÏÕ“…‘ŞÓ çU
ïX5bœL8•“§§Ÿul|‚ñFÔ8?…
à¥½Ús'–{FV[Ú5QúYÍV¯%Ÿ‡Úªy	V€ Ü¯[BDIÈ>^Ğ®’†˜"ş|¡‚gŞ0ÄéE0ôÜD¶—-HG³Ì9)•…¢Ë´BsĞp©K"ÈƒfCá('` €27•_>·ô:+fG„zrŒ[„'c†/T˜¿êgÀ‰³ô³±Tâè@"˜8E_²cª[ËÃvq(º9ŸÂöh×íì	TæáÈY"€	¢"ü-¾Í‘àÚ.ŸN½`ÊÄf<¿­#½|©>…6äåF¾¢ğ¥Ëwé>ÎÚl²0÷¥ÅCdšŒJ¡±<–†Çée7‘İágÓYéË´Z’@xÓìÎeäùÆ´áç›=ïoéåP(€›è¹O©x<ñ¨µî÷¨p¶=ÌqÉ§Ï†á»¹º6à÷I“ê‡‰ób7¸±€§€z>)M¦&<¶¡P^r—h1 zŠj^£HCĞÚÑÔÄ`¤ßú^kÁ¾Òqèl|°‰¿´?ÿ8ÆjÂ_§UÙ«Ë[ º¼~öªŞ{¿éìhŸm³«ÇG3eªßps>îœtm;%?jËËs†VÖ‘)=ÍÓpN5gànëR¹°y-ï•\øÏ´¦ÀFkPâğuñÔ?U`ÑßzXj½Óq
@¾IŒlê¢ş¿$ÅşHŒÂå9ÎXS3K‚V…i¯*qÍôËª°™-3¢Ú-pı³:İèÆ¶8%RêÑj6WÔe+÷4 ;´Ÿxù‚Iç&"WØ‘E¸?óµFüšÁ.ãx: ¿¢Ç³Ç©F°H(Ë²ŠZ«DFèŒZİÄQj dÓ¹Éz ò3z’T;gôÅLı¾ßCh…,‚¨€CıÚ;±±×ŠÉ:IT„`@€ûœÃ6í¸7›^	‚q§ß¤Œñ;4òµº•Jçó¨¡Ğ¬Ş=øæC¼Ìµ^¾r¶×IºkšÈ›I15IùmğÖË¶ÀÎ’QµŸ­‰)6¡}zAŒO¤ûİÓ¦’‰))Ó93ğ¤}ö²¾ü¦ú…¶é\J$ˆãzz¤F6’—šÁx#p²Ó©|ÉĞ&0áPœ_€Ê¾á´®3Å›õ
W©&
 GTÒ©0ÙÅé*³<¡.­M‡Ÿ9·m[«³F=o‘õØ½U‰	×¼÷`×öª´şÇ-z~ÖcÿÃ'9Ì™ÏV8øˆ G…Åq²™o¤F®í'ƒš5cŒÒ)9šíì³2%¤büæS7F"ñŒĞ¢Ù¸İTÈ9ÒœŠæ±{”
†EÑ¥ıIdÛ:å3ş	ßr¶Ì9Bt¿½›ŞüqfzúB‰Qì²CéCJ‘8K¿ù5qè¤C$|/Áo	áh+e¡”_ôÂÃáFû•7øÈğt‹„ÓNçĞô”ï“F0páVœMª Öà5zˆü%šÑ!;$ècL™EŒpññ™¾H%ğÙs)mÊğŒ^²á{ ×"Å„«Ï±X%£A¥LAhÇŞĞ7‰øÁâóúèE4;³¸ÓôUVœNTb1Sí$ˆZØ¯í{`ñ±÷P…hÒ½ò)˜LÇÁ©‰nm³W7Ğ_™×5ãÑÕu28Uióî©GäY@¿f¨Ö²L_ÅC!-ËôíI¡ñ±ıl‹•;4Î-9am”@QäD{"3ÍIZ×óñlYâFn{læ|ƒ¡s“À%\b³>rT{Ét–×æÏ¡›¢óä}$5­z6Zù2ÎbÓ„Â
ÄœûÆ›!_MHt“Å¾óuKQ^{Ë·5nÆæÉ¨yº/#pã(j¼+Ùté–fÀÁ¤})®u$Û§¦ju™eîÅ	éş(bjN€àlÔ,¨b_á ;2Ğ
ƒèxH[7-½ã‡¸òQšBcF‡;†X­ï\¹ˆîä–`7¾@ifk&à÷2g÷øwM`ªJƒÑUXíX6†ç¢’6#Í¾ª€NIUFJÛ‡ HJG¼^şÈ¸
U¸*	Y·¡JâmAü`.‹hí­§,IßŒ™¯(uĞs}Ç¿‘Ö]uÆ¢CŞ 	…6Á™£[ä&ØF’dò‰n~<`ºr¬c_/Mš	8££›‚rVo©D¿'ÈûäŸ!¶’¢ÃíåJ0Z›!3¡ÔŸCŒ`"ÊôŒä‘@ï&XU£Ràw’ük3Œ1Œna_rZñÓ—SK2°‹»‘WCÖÃLı² ±ÄƒïíMi·»ğ¡Cgµ‘t‡øÉš-g=èk·•†‰¯„IûÑ²jBø$]Â&İö•×M~R|70–Kòı	§Ñé˜XÁe”Ù3³!”U38í0è‡ä‰îyI£k7ÁKŠç]7í-¼›‘.¹änÌJw6õ
« |ÊFg(Ö„h0_šJF†M1€ø½Î¿!ÓóV3ı‹q(/øäşŞ-â¨¥¢EnĞÀñŸÏ*XÕŠªâdïáÉ•ÂUui#‡(j²:yÌ…ÿ4Z„.„Ntå„²„}J&÷YÌ
à§ïZ¦k2¶ÓÇ¹|Ó¡% Ä]] F Œ<%pÁ:“u{Ejó­(˜_·ıŞµU¨Ñ‰cÄİ±jê˜óØ]cª,šQgåÑ7<?Ü JK†â 1Ã6gfÓçãˆ¤	ãWérèw/Oìôé_w1˜]©Û˜XXáJ5|äÍÖì`Ø)£o€&Î@ùŞGáâ‘Mzlë·©±— §¥|ÇGa1× ŒÖy[Ooò<#O¶O•G]ìs/ä
Ê<,yü`©Y<Ë©ØKÒPµr/vŞüV}ºKw¡f¼ßüGª¯˜«cŒo©_4“ÙWdî(¾äsñ	Ÿ¥Cê·Ûáä‘©Oş:ha(p š“¥²èPÒßæ"ÃĞ§W­Ù™B?âNU¶¶øQ£É•MÊ÷í
Ô¸^ëµGxSÖÈ ?>˜éğº§aàì°m¥J	Uí»3WøsØ¤$âìaG@ş)ÂØCÏäoÎÌbi©E!(ÍFF„æÎ<•Pië<ı†Û«5^µù‚<2”s.Ä ´òìğ½ÒÚ÷¾v‘—‡æÑ¢*Û¥AcÚÄŒpşs!r¯İWØzçğ¨åæ/Èç5sYşæ‹ÃZÅÅÖŞ”+ÌG‡}­3Úâø~â–NôÂDà˜Óm—¾’	ƒ®è€èuÊÏËöåÓÂ«Áu–†}pûÃLŠTâùµËJÜÒº¦Í(FJ¤R?÷ÙğKh9~üm6%!Dv°“Uª¢çîq	™ü¥Šœ¿©‰ÜêÊ(­òÑ¨zÄpì‚{İS"¡p¥5IÿsQœmB`3µ°A2cqÈ›!‚.š>ù§±\øŒ¬C±À2aöUvIõ9‹Úø±3y€~&¿Éá Èù®QKá[Îv ¶DĞ«No2ˆÆ-Á~ë³]\÷à:"ˆGî¬5Ëƒˆg¹>ˆ-Î1CºTg¾øJ+]?ÛÓKÃªFäŞ fÃ>Ñv­`ÌV’ûB
Y¤"DõµYÈ^Yzø2]^ÍúéãÖ'ê?*m‰Ü°y@úYÓÛáªËÒä(d 8C]‘˜UÎ×ıo¾KZšfDigüvè“.Za÷‚ûöÈRg‹;{/ÃeP­«…_Bg·#øÛ»“p}ª@D)İ	N¯Hb“{Ïë
f”ĞŞŞÑ{Ùì`ğ»…uµˆW3 r4Ä…—s®Ÿ6b~¬ÕùÅøñƒ`è#–¯aoş³`§KÜŠ‚œûÔÔÿ3Î}dnÌ_³0à34jw©ä‰€w|MpÀ³¾®Ô;ìx«RÈ—º³(IUı{G9!`«óiÈ‡$=6ÔœÀ8øl'K•öyÀèËnFuPm´añ¢y)<J‹++%‹™y,â^·¡Yš‹‡
Ú‡‹,¹iÀ6ò“ã÷íñÁş£9)ï>ØìºˆË³ùFıÜ’]nğU@øsÁPÊ,{H&ÄÒ˜0gqìtréÄ¤Ëì¡cÅ¬ËJ¸õÆGófkx]É¼„¾rnÄ¯jùÛõ9²îÈe-¦Å`ê6ÿl\üŒŒ:@ĞÄE‡
›Ó‹kóè*°†aÃl¬`ã/evÓz¾™Šn~»:á¾Z¼i,ÿó‚x¿¥~5f±øLÆíğiªI‡…XØ™Ş.Kám˜È½=yú/>Îçl5è1àøÁ¥–ÙĞÁÁôãqŠâ4¦« ½Î†eÒém	et\90­L¥c,¬R³47ïÅ@t›rrs½¶ùó4¨˜¦ŞfÇ@/ú®|ªµWzòÃlè\êkÿŠ4¿6÷yã^€(í¢«C]w^ìôyq#PUæEÛËG46œoÃŞ÷$™³ƒ~°¹Ñ*–#_Í@Ûë´Ãn¹{óf##‰SŒ¾¼›7øĞ òc¿D ØÁAg—ëœÌ)–XdF#ÚÙñl*:^ò\)­”>Éşûe.'2¿¿ÀĞÈ€ÌE|Mf#Tö=iÄ¸5ZÊ]@Tè£Áì^œ÷ò÷¼¿GG	mÁuÉå°#ªô×TNÓÍımÉ84åé`$ØFLª.F ¸×T«‡ÕÎ”=tÿ¡2RÚÛˆi®G‹«¤JJûª°×CVÁ¾}¹Ùªù­†ËßÅ0WBf½RI”…Öÿ]¶ü×€Y—±x³ùÉïfÑ'F%3W–¹õµ¤Î¿^dRê—ówğªêógÏ¾4q–öEC,ZH4òÖèœ~½6ì†T€“ßuÇ)8@´…;Ã[Ò$"#Î¨¿ÂN@ô£ˆs\5;>5å³°;ç±²\!}ûúêii gÚÆ_½¤•¶tšÆ¶â¸Š8J<ŞÍÃL|àxêeKïˆƒşiWÁÇ"î«³DyÑ{w¡k`±úú(¸:w†¤µfñ ûM?EµìWÿóX¬™W'€F¦ß}™Ø}ğÿ½ôäÊÖÎ =t¦ŠY2;Şv-\­ó<OZõÏ„˜TÎÀÙü7Âôƒ-šÀE{ÕAï18Îëó˜Õ·ìŸ7 ³t¨VÁY*­Ü¢
[‹ÖôTnf"±DØÁìÃ>ñÊÄEaj„.
.8­šh8¸O‚Í0Kg÷¦s¥x‘Õ•ßãıRÇ…£éW5JùMä‡$ÉQãµys‹@Oí¸æCAÍBåAg V–ì¹’ãÜie!årÃ½ôj5¼¶›¼ã#´7
ôùê(ı÷h>éyEîØÛi4Ş$<‹¾ƒJGÈ	ÅwèªèSeoY[È^oÚ‡bŒäJıÙÿ{2¹Ò	à¹˜²ñ†@¸TL¯ÃCWïc×à–äï!Á›ï—Ğ?Ôhø½IÙ†ÿ™Ú^ÁX!°çßË#ù¢Ğq8¼1†tşydíµñæJA8­?F0ôªÈf@Ñ¯êÄzïË.HG:Q·,ğşN,ÈlC2·‡ÿHW
‰{ôøİX—kòxŒ°kò­p†¦¿íÓîJP“ì|túí-ĞTGW‰lÏõª"ı/®Âèğ& á…I%¸Ôgeå»±ÀX|NE"ëÙÌ¬€ôie7ùùoB¡zºL‹ißÙ•Êùljôİ2Â£ãÑÚœg"ı€ƒ	lœ9©ñu¿–ËˆÖPãŞÃEãDtFÂ¤i÷ÏG åXW0”7
d°ä¢$œÃ_¤Ãå)	ÚiT+oóP÷:³Kà¹ûªX‹"EçãÚüÕˆ|C	½ÅN¼ÿ¿>ÊsÑß]Gb+ÄaÄİæ¦;«FcÖÕ›qÇ½D){…øl€[³`ˆnâÒ[>òèB„u„noMípü²4ïº”£/ËƒècŸ<ÏÂÀ¹¨~4~œåñõZ;çÒÓa<¦j‘¢ƒyÃºœ×SbPÁ¨Cu“N<éªÅ,Õ¥-¡²œ2–+úÓŸìiÕĞï­l8ŞöGu¥PÈz0ÄØV¡mw|V† ,ş¼vï§LPàAö;«”‰¡Óôhü€6zßƒõ^kğiYŞöú»Ò+$¹,h‹í/Et2¥ş@ærr"vil?UD„Pt­Ó–ˆ^qãûµâ<G$Q*ApqÌÔ”ÔüËw—UŞ,>|Ñi}ğY»£µPS®ï%u^°š&ªÎ"œ//$×3'ŒLÖ©!Ê*7Œ[&ö19bá4ÑO¹r_nwMNŠUHStµÇN» ¡×[c(À®Î’˜×µšæ/¼vwŞ=ñhJŞ7ˆ;ÔË8 Áø}” åÄfxÆlh Õ ï¸lïÈ9joe‰u=@Ú¤dµkvqş¹@Â"³9T¶X°ÊãJ˜'ßÜÊŞ5—‘OAÄø­ãà+,õW{NˆwL|…–@›9˜½³!)w¢^›,%SuûŒØÙÀ×pr6æÃò!^[
v{G+	6ØÅÏXw­0Uoh'µ.9rtO!m§ñ2ya¸ıdMà4ƒnÎ€/ç’á„È8sĞ4é¦Ÿ«,b?õÁQ2¥õ^º?nåŸáJÑæ(ÚşÎ²¬²{Q]f¤$¦åZ!P>Eœ†YN¤=Å¬2ƒ^¹^ÌŒñ«&¤Öy—†àt$ítGLOP}v$’†Şä¸4·¿ûİÍ¤uUgˆép±Z@36V^"&&¸ÆM]àÅÛœ>)«§JIñóÔçÇ¹| ìª9¨¸&rõ”™L<Ãe­
O)Hà†aIL-¦Y_5–Ÿg«­uüJÌ©c†·nµúKhÒ÷¥:—×B|\ú£@‚Ó÷aÌ!çaFPMŞ'Ù=†”ú.SˆQûÃSö¤,ê¼ÔüåÓ¬w*'“¡¹8Ñ†ì¹xÃ$îœ‰?†ìq3å¥Å”¦~CÚ İÇøÂù6~ ædo„$0•c9|vubhv•Î¶7‘çºP3I3kê;ÑÅx™è¼Ä+Ç·¯Axúı6Bµ¤ğzL Z»U…2 àU·Œg{Ø­Yj÷Swõ-Ì	× ºK»©háØætvÜ6{K±h2j:iÁ»+ÜPÙ²:`SçÎÙ{$ì—Éi[tMyé+¸v2ÿşåaµeòŒâs;ª;+‚°£ì¿ÙÉİ¢chOêÁşy«I]Éİ±Ï†0~¼Éâ!³Â–;Çyñ+Ÿ¸Ò1SŒBz_¢&¾µ¹à)F ÊGìohÑp°gòÏ×‡¼~W‹häkX3ë’æËè‰£D&bÛ×›çb<-†,Íbƒ“q]úÙ>¯H©Êb°p‚Ğò`É®EĞ	¢Oß®t8aéVE’€¥%ğš‡€¥‘_#Îš9ÛÓ#ÎšÁHÄ”ŠZòşÆw>¯ì\mRy_ãôAv©BŒ²Eû;
·o÷xD\VæÜ¯ŞFæ*8ƒÓˆˆ>Â\›jÍË•ií3¸íèù2ÓE!éqÆ6ƒqÆ<K"İº 8©'±üúoÿÊ|ãrÈ¯ Ú§“§ 'òg(ĞËóE\Í› R|É'3òEYNõã_Hh¹È DV=$Â–¦Áúã›N¸ër[{¹u&ù}Ü  Z/ğÊĞcG=±E^ Jú<m‘öÂ’ÃÊ…ş‡ÉR#%ü‰¢“ãlØ‚5i†Îµ8ÿb›9ªWøMû—>h)4Ëü‘šÔõºaìGC0 ğ«–?ĞaPŸ1lBÌDQ
²!S„aë)(É…3[’‡Ã-­ê®t (|U[€ìRÍ®ñÒú5•ËqpÀCı;¥-jÑJ¯­v•%QÀC,ïj¸¦)Ñ®oQl^•i­\r¯ª÷­÷AÙô¸ãKß{/†Óà„ç¤;è<ãØjĞŸI‹gi4,ñ¤Á86]‰\êñ±zâh·E½õémt%˜ıæ5±ôdi|v^Õ‡ t€E0•:{ç˜vº6‘ò|…ªƒ3úTÑçµ¨1éo¥Õw¢ˆ2û
Ç«ŞPr÷.~WYÏ…t»%Æ¢
ÛP:±ı`ê~#ó’İÌ9ş?z.A\à%ï$äQ9÷-âªæÌZvÓà$\’4+²BzŒy+úó^õ’O¨°‚ã5)‹VÄ‡q¤j8j›0[³íuõ™:Tª]óªÑOĞTÖNU³æF“ÂÅ“\o>RzÔ¯2éÅz#_(|ÄİĞ5F³yÓKöÛ3Óæ–hX_îª¼–=0>Y„Øjß‚B ¹#ÒTh‰†zx{„ÀAàÅß­ÈcòîPerõáÌllí¿`Mè­Wœ‘û¢Ã®\Í¹~ºeíd>XŞ²<	_?µYZ5¼'iStÃ‰²ËÎ½RXmç[QÑ3¹1cÇğßMÊÜgµ Ğ«¶wìÀ0¾§xçäyÇ5O-Nˆä[Yİs‘‰r)ˆ¤s·ô5œ4Œ*Zğ6ÓuĞChZ–²*›‚ÍÎ¾ÉÉğ÷¤n5ˆHBî/Ïğ@Tn@Ê,ãœ<˜a1•Ë¥£u‡»d¼­4–:ê£r…ëT¡„¼7ÍÔ-¹$ƒªÉ¢¯<ù+\Xê|›±0Ì‘ˆBŞ9Ô`!ÏŒôˆ@œ‘½-‡2û‡w¯G–~ìO^¡°¼·¢Ù5Ş\t5â¼ªÎğùùN°lùH„_õ^09nooó;:G²)¶æ0Ê6¶PîÅĞnaáqµøÈ*é6ÜÍX³5ôÅyvÁyòˆvN©õwòµPÊLasİOr¢òZÏhTSéŒ„Õeï:ÜÄãIòO‰9ağcQÌñ§ş±Óˆñp”ò|´ŒSšœ†Ã|’x=—E²y@fœ7faRÚ©BƒøEÉª=§ÁöPÊô×öÿÓ…›¯^ü<u¶1è0ÁÀÌ©¬Ë˜6pàÍçé8GÒ~@¢¼Šï(	TPÈ2eW®Xé-ó²QÔTJ4²âÜ·‡ê™w¿×ÖĞHè@%—zc­6•´š¯¸=šz?áõƒd^–„4Æâeï¶/ÑÌÙg	]¤G¼âG¨ëRu¯­?µÕ#kÍFñ¦oWxéCn–U£HÄ5Ş8kÍ 6l#OHQÃÜWJ“ S?ÿá?<:%Øuğæy¤§×QèñÊ.õMôMiëÿ~›¯6S3µ¿ò¨-Í…6:ÉÍ—XVy¢Mş	›#Ô‰9óù˜B¶MÉ+OQ‘wâ9yèŸhv%xõsÉjÔŸI"kAÙAáÒœ­\&a‡mL®MÑQïLz/„9µÔ44œRBª¿!+'İ^ü(Ôì	¼ªƒdº×·_¦€6ÖßL
ÂD?°1İ'„¼†í›¼6$ş«FŞlß¼ÔuyvGzó:»
1ı!0°¨ZäÍÙ„Ìé@AıµtŒö+~UrcH;ÆJÒº ú¢ŞJ(ænB»¸L¨jyT£'rè¿bÕ-4pÍï'BË$ê¸™ÜôO¹´“	Îö˜ÕqØHÿV£\…œb¯¼R5ŒY%Ù€ÜœÄë]sj5XÊãòûh­—XãêìĞøµÀ,œ) çÄé¢*?¯½®óaÓÒi”R~ıdµƒœäüˆ‹`¿²oráäbGg°Êd|aŞC5‘;_û*İsÇeAcäuá<ûáËæ00úa’“İ7HÂƒïÈ²=6lãæ»tµF_|™³æmgOÑG¡¹µğû?ÍJö'Ù;½ıÆÄ'm•D+’ĞƒOw×(J!åG'EV¹ê)«·"»lb$±'ç…Î<Õjå{û¯8Eä]s>«<5d/mK?ZY«ÈeœW¸ãîËh
|Aj¡,ÛÎW²ê±Qÿ®ú ‘¾tB€_æµDNY}B4>'£WÁ)Sis'«Ô¥ók>K½qI ›²lg%I×5–QQ[«J¬»éRõs¿v	åïÍÜ¼
*ßŸ;­YÉÙ~”ÅiK`±çe™íá®Å=T®§Šñ·§ü†ÁÕÑÖJ¢VH™´HÏêi+C‹ƒIb,àŸ·Ò@8CoJ¼/»w3 LÆ~àÃ›çTäpÉµŒ$ã¾ÿ>I_“äôQV.P¢lSO-4È#³‰İÇ¬üI–\ÕĞO%ÓÍÁ.­Õ+ÒÃQ×=¹·móçV6;vqÁtâ!óâ4«õ*fÔÆÕ_Ó ş2H/Iæ>¦²apt[\ZlİÿHXº$I!áå×’ÿN•¶ßÆüºŞl¤ºóâ¥o•ïÁz^Qö …o)×?|*_ô
ù$Ì–¦=u÷ó9›û!Qóó ‡`%4ŠT
omÿª@4BÀhhÅè™§,Í²¸RÏ§.!¢òE÷#ÎüEÏ1ó]»WIµ‚ÎÕÌb†Òjc8Éùå‹õ©Ù	Ú/j÷ÚâFÕ'uid.pÕt˜åı†LæÔU;ÀÇÛ]Œ‹@;ûw0¥¯ªÚòØïvIÚ¼¥«
óÓë_¦òĞÊ'hI­w8ï\†ná »$ığš!4p£DöO4N|ïå·÷·º@›ÎËÖ‘yÛıfş°âµÔogøXTÜ ½ZNU Âb!±’*Ó‰¶F6iù‰‚QQ3jbQsÄö`Ï³’-u¡´K]¨R‚Ù ¦Œv”äê dlÿ‰¼E+X{Ç£ÜY÷Ä<îzzŠ3î¼ÌI¸" ¾>yj¸PVÏG\7S ô,wìÒº»¸ïQ²Ş{ò&`hs¯-Uâœ•
àò½2:ŞóŞ–yÒ‘¯ŞÊŠõˆ®¬¢gSŞ€ŞpÂ†*#P•L¼-Ôt@$Õ£»{áî°GûİÈßjËb)×^O¶fiô¾ô Ñ$uşØE&îl¹=C­ëPM¯.¬:¾¸ÏfdcÏj•¿¹Ê¯bX"˜İFÒsÌƒ/QÊú›£ª™˜"ß‹Êæ2øõG2?iEaÍÈ‰®1¯ò!c¶Ç|g€ü%«6T‘SÑ?ÊÃ&é‘uÚ!f^@Kî‰0T}±¯*EˆsG½™ß™‡‰•(»oØ9¨òzjkçí©ë:–H=“a'²XÀ:‹Å¢èIÁ”o-ãY]¡(ú(}ù‹}Ïpfw™Êqôñ{×)c‹õ&:´ì¢üÚÍky»‘¨Üwƒµ·xÛ˜ZÑÌ¼úºg’µó$|sƒ7W	ä0«åIxìF½òıCÇZvìJÁ _õáÈâ•àq(—‚&E-‡ÀHeS	gÌ¹7¹vÜÑcL_ÔÙ^lÏ|òXøMš~Ñı,0~V—Øú5BãSñIG¥İäëæÛÿoÀÖén… ³ãÚµ©¡š–5ô€x:Ì{s„3}¼î6t.N»ø²tídg¶?kúƒQZ=Éº\ñ:=ty$ş´‚«b¶—fEªÚs'.ºúµ\½DÍˆ&œ‡|t£›Ó«KIšüŸd6z¦ß\f÷5û'B¢üÚèLÃÒå3U9#"á¸÷/Ú4º:0fs1jåIÊ‰à~Ò	=‰áıe’ˆLqÌQÿ+™
É5©~a¦S8kDŞ!Ü¥—õõXğw¬,IÜ©Şş4Æ	!öÆ´„ãí+CO¿ã‹t_—U(8(ûÆIÆ<ä¢ñ(·|	ºUâ®Fö·!™ÅbQ P‰îˆsx’Ò„ııx&Ñ™õ‘m·çĞÃ-W¸éaz+ø¨EìV›Ñn®”Ó±I	T»#+à€©bõ¨hQÔTÕ-­¥·ÜÏæ¥C¢æ7ùÂ}—¬¥%ƒüË5WiNm
´ÿ‚­1‘M%D˜VşOË,U×2a©ìçB‚Wª>çØªÒÖ"¦sPbÊj—í07ìŒßÿ³Veéú³G«¸˜«áùc˜¬/€¿úiÑ£Å«)—ı»K˜Úª=0	E‘é¨§::ÒGu„ÆY¢iïÇÃÅ,†v3V,¥gmìWñÏ±–üRàf™<öwä,K-Ê	‹uÄäcàÖ¼Û)´ß±¨
Ø ÿÈ-!ş±a£ÕÔzE"…TF'r^ÓxkÒè"¤èJ<İgüå*Çãj¦Œ›X‰½Àõı¤¹;ÀNı—î3jPQm\òĞKôì²XÖHr­P%K› ğ2¹ÁÃôgB§;qk@ú<R2AsÚÏÚ&+Ìê°öÒ,}“‚¸zBwÎ|CÈkÓ¿÷/¹v÷}æò6QŞÑômúaCØCî·Ê›:>†Ç#å¬rôìyÌ?ú9«êhÓpØQ¾;^ˆ¸¿j–ØlÌŸ†êó>ÑÑõ*Œ;r İ×rCFA±íÔ.ÑKĞL÷+lÊş¸–¾±é4¼kmóÊïW\£¿š5–æÙÓò™ª¤Cš)ş*DÅ>3Óig!Ü!Z F¸-wÁs'«ÆQj	%{Å=e8Xoşõ×WêİT@½8Tæï¼¸¥WºYAéã˜®nÖÏ}Lµ(CÄşp´íUKÉˆ7lË¹V"z'KÏ³«e‚#ù“m¶ n«g–n»²ƒÿŞü‘êkEåéˆtûqÕ1ÄD½$z…-yh’Ÿt.-`°‹ğH+šÄ3AÔ,{Á8Æ.tÃhLIuÊ~í€©ûpd¬†n=»Èb,)U º‡ÈKúÅF›¾Õ—Ÿ§ô\—d"}ôïÀÖ$5ÏQjÓ°ôºßÖXÓ‹sœÃpâö“B';j©tfU²;%Øœû+"~£ÕÆ$´ÅgŞ»Z_¢ì
©vP#Å9èäaQznIü/Ÿt–”kÇ!NK¦=îÙQ ~ãPZËğ}ã}"ı\ÄğÈÿŠ{¶`09¥)©{Jİ=e ?¿”Êa99U«	=çİ9ŸØ@‘ÀóÜÙÔ¿Ghærm/Ş÷ÕóN/
–ìâ±½i]ß&Ä¾LˆÔ¿¢£C×kjR+\Kk%•4'T&TNì™ÄºK.SJt8y‡\•6Ş¾BÈ¶Š:‡¾´i¼eØsÃmë·˜ÔUOyœïûà«Ä,ÍÂ˜ƒ«ÍH¥P¨=cñÎIUB‰<İ¹ğC’k¥óÈìœ[ÛÄ›Í­Öå‘6o‰%ÒMõé{¹K:ÿjä”>|ñhv+şwìñ§åÏÀ³ KËå(Ä2¦î=š‚¾t.SHõİ!ŸÄŞô(ZHh:òÂÓ=Ë¯YlkO/ñabÜĞŞN[*ztT:…F]ü¢å¬S@Ä ½ò$Ïú¨¨Õ2Æ±ût±±”âUVÈ_ñ¥Óˆæ ÆP&Rewïä†Z®ÜÖfD!aáï4Á/»&Ÿ\Wç-Fé;n´I¦Î6>†Ñ€QÃ[íº1Æšƒã)—Hı,iLï}0m£NíÚ5%’ıªQ°‹™J¾›àËŸ+áÄcb˜õŞùhß«QªcõYoRŠğißÄwÆÜt3á¤£–î9_ınWìcûÇJ¢LŞ-uŠ]ªÇU‡øPñ5IçòĞ]gñàĞVÕœAD’øÚ@Ÿ	€ä×““Cõd¸û·›¸OsêúŸsf`]ÌÆ ;´á[ğÃõ&&HëÅcZk@çÎQöÂ70PöÊdoiT·]Â¬_·ŒÃ\®>û:ß/>åèEÿ_ßW'§#ä‚÷jÃËÇÃ‰¿t;,i´*Û:¢H;8uˆ~,˜í>_öË÷";æV«ÖkŞ ©0_Ôğhô†ßçºÆ eOŠ³aAK½×Ó’0}…ïš.Â’äíue]/_æH}€+B•ìÃtÈ+ß\ošq&¬2çjÖñÖOä"ì†È++ÊåÛ“ï·â¡-ü ³,şùĞ2‚'Ÿt,éÈ˜ÙÒ3zçï=#±ieQâş+´•yògsµµôíQÚ%p½ÛÚ,²öt™À:èV–™3©{ S,U&ğCÊi¿b_¨(ÜúuDeGneU– b	N[4º@u·.îÓ®Ò7nifÒÃ×Â>$nGîEØÿp ÓHqŸj,€wÊ§–Ü>Tøm6õ|ÃğşíøE™€9t.‚	Ù¼èŒ­^hHîİû¨åÖr’Ó¸–ë¡<¿3Úë·CyAµ72ëzü°¬U~ÕRÑ]º5’¹ƒ¸³{ EOê;<Ş}* XL$$qyá£Ê--˜SÔeÑÖó±¼‘Prl
Ä'AÄZ:|ÕÁUä…z÷är¬tš¥¿¬åOıp"ËÇbß8{o¢üŒdJW£
¹ånó6vZ¦xòG®[şN+ĞÔ;ŒÎï§çÚ¦NX´åiP|kN¥AÚQ4>–8}œ÷šÿ1Äõ¢ÚÍß›CÈÊ™GJ½·=5X‰ß(Œka¯â|*¶´;¥æ	VüĞ©Y<®¨oÂ««ˆ`ìAŠØŠ	Ï<$o}Â´o{‘ı4F2¯¤Å#1;é377Y”jvK£¬jdÊ•Y©'ŸfÊ´tW*EÔíÕSŒö3¥µvùXĞÎ22.û¥Øk~7^Ù	Òë¯)ò<å¤øwÀÓÇLĞtØJÍ+t[\êÛs&ö­¥öµ“ü0¤A2$öòfoû~ĞÅyEõxbWÄêM\ò°oÑØ.ƒ{–Æ%;~*TßbÔ9ªc¨î.ÄòãpLWXN‡8¦f"gŸøı”ûÏ4{ÈÕCÒT,lÈ[A~T†JòP;Òiµü<Ü×ŒB‘j~XêoûöVÆ¾t·¥Íi‚¨š:§XÍĞBÂ Í:c´ÃÄ‰¨oÉÓ½TÕn%×¡lÃ@sÂ”J…S63Óú	{…â)ş–·…¡Yò×Ã\$¡1‚$Y·Šñ„øªtô9íAŠì³ÅÚ¬&ˆ8«ÿL—`wjŞoÂËš9[[G‹¤>Ğ½wuâÃéÀPA°?Fş5·NóC²JW@"EÊE|võ–Ñ†…ohÁDÛcm‘8@Šb}Y|L—(á{U-v¹pè’.7™¶…¶©p¢ü<íş
=½cÚæc•®;ùêóL‡ÿpA 4/ÉÔqÇãZ7ğ_á]éÑş‹­ßü£™„—õ‘IñéË$yzø¤IzoF:‰xÃ$F ÏÁu‚ßÕ qÆŒ9LĞH¾ô`*ÛK6D‡ J£ÚPY_İL–kaÑG²°…ôì¢Ã-PRª"¹:ab>ƒJÀçkÕuƒCÁ~,á±…t„c·4)îd«j]‘P]EKñ?õ6ô5kX6÷lTL¯‰n%HïZ>×ÀR´JîjÈSÒæB¿^´N¢º<|r&~š×ñÒ”î·0mĞóâ0k@·›ÜĞâŒè<( F]3²İßí8¶;½à
½ŒÕ¥‰PÓ¥×ìÊº¿À	ä
Ú-0:@:aŒvA„QuŸ§"PÊ´/¾H´XqÍ&<ğ`Š¨u‘e'²­ÁÌÑ¨•á‘i)4¾\dOû±ahP¡#“Ø·íM¬u¿ÿúœÛ5¤X-Ÿ Ù -±£‚ÁTß•g¦iN¥y!ƒ¶æe±ù83„Ç$N×Ò²ìùøïrµ0™²§ŞD¥¯ı‚¢î}|ã:–H6 ¯ıÔá*m–.U²í&-òß¼G½#ş@ââøögÓÑRXûÅuüwx"´wIàFÿàÂ`Xö2lm™$Tº4¡Ïkñ<¨¢B­{2Y3hjşAŒ%,*‘Á#¡dã±>NgÍnwuD9ÿÈö“ñÒKŠ.ì:–êi¦q”é“–Ÿ$ÜÕ5á/ƒOÌÕä›RV¨Âª´Cáù=ŸrÊÒDÛÖk'¾G²6#äÛ¿?ê¬¤•s.;”ÌÚæc­'¦<|Ç¡iÅ­>h‘»¼?cÔ•Ã
°‹l‘¼	çÓŞ Ufu®€Wú(_ñ]„-+5nNá‚nè>ß²ÇÏ£‹z&× 3m9$Losî±´‰>ä½NŠ”;HI\ßä8$—Óî17ÓSœ¹Ğ¡‚ˆ|ÁgÉ?/ô	&ÕjÂÆƒù2Åtj²—ÙÛÁYO}“F3>„’º§\QµÜÒVßM:Z>k;››ĞÅ¢®°E}!+ëğ^ÂŸQe²îËä[d	ïU©Á‚bÌi™wˆ»÷œŞ©¹®î¥ödtè‡ŞJ.sTí=¿,VÅ[Ú¥"!}£¥}mÕ©'šï%Ğá2é¦‚P$<hîZÙ¼Ğl…[`Óğ¶¢ZÀ-¢q®»„¨Š±™}ıÕ{WÁ{Œ¼ë¬8}¡mƒ7¡Ãê€úAÂÜYw÷aO”V£‚ì¿ºZÉûÒæ]pŒ:Poh#w°KgÆ-Kw}Œ…mÑBÚK&ô@5Ì¶æê!`Û®!Àk¬å±Sâ™«u'm‚ÊLµ\š«vÛİ ú×cÔqe>4Šd5ùûVRĞ™íÍ….,mïU·m£»ëmµ>¾ÌnÄ¿_Œë'd‚i—í_í”epWQZ¤Å
|Ó<ÅwI(ı“™»›õè\7WŞ¤øîc•Y»¬‘‘¢‰L1¹=nÙ„ÓÄ½¬Î^ïö<ôx)¾¿§n€î’¸Ö ™&…POö'®®>‚ÉŠMÏİVÇ<øƒÂ=wyÀÁ¨ [Œ?T]æZß¦«2ûtşo.ç¿*nl:±¼€â&¶ÁJ7Mg˜A|ğòntÏ&‰ÂÖ}}Í“Æx*5·>áän¦"„õI¥Dµ1§ü3jW6¨U>ù;˜Ò´‹ƒWÆÑKsi®	Ê”jßÎ€ÕWØ@3jR°’×n:/d‡qFó±×¶ƒŠ¢ÖP	ø“qÃÕ5D½ı(.ï2åh§Q#½Ö{íÁÏ‡»Ä3)T.ùIK^é…JåË›²`[;:dÈD¢Š•bQ‹¦iÆ’˜›i#FUU…Ò9zID˜¾íÌb`šÇ‘:~Q<Ì¸ø€DÍŠÁ’ï³Éız8Ívi ;NÕb±äùÿˆ\h9ñ%Ã8+•/]WŠ¢»EG ‰Lxıè$\T…Éta1Ruª&iàÜÎe[â§mëğ>Â4®Qõ6¹\ºæ°+¡ÜH	Éå¯œ4t‡÷ÆÈ¤XâùOÆ¯[*ß…=Ùk¤Ö%°ˆ¡ûîO
”ÏÄZoåMûIŠÜÆˆ~áˆŠz
Ÿ9Á§£ƒ%èMpCO~›\¹ÈF­…³Ï:ÒTtÜ—õÆn<a¥ÊÁoÆ5¾¨;‹3İÉ(‡¸*·áÂUº»İvë	LŞ³Z‰AtÙîŞ£/ l¸’Jóª×¯Öµ§/æ}Ûum$¿cl8¨—Ñ*]¸Æ‘}0ç_í-:Â”knoÏLJ©—şºeß€êş¢«jı»Tÿ»ª– âa>
%ffŠ‡'ôÕoƒÏ“€d.€í’¤˜×:h²sV#÷e%42:E¯6b“+û‘Pè ¢S0CÅ½ÔÊº!GËB`™³œ?M»iE¸°û>ò¯¸ÃUo‹?ò\L½ã‰ªÏÚ™˜Sßk}*ë¸K$$oûœÜØet0ÂÃ¶øûÜå¡5.5¢
ğqZY{µqkolşL¬N/–Ë/=½c2oô¢µo…àŠ!ÿ1æ$NÂ}¡êÏ”âÿ¤.¸¹m^‰ìièyİ»#‹Ÿ[ôù…œW!Õ¿½ ‘$‘UM-ÿt&ú`LZÏ¢ú ›Bõâ‹/4:Á\	´b>€ËcèA¯ÃƒÎ,?úk¶Ö­äìÜ¾Û>³T'N«ÍÈØXZ©83jşÁëÇ5ì˜,(|$w´*m•æ»fÓ¢‰m„N'C)•·¸j™ªµ˜ì@|‚û>äYZËfCşë0+Ñ¿j”ª©ÿŠì÷&u¨z±»±³îëIáúÛ¢9:y£ùVĞ^Õ<šÆËt¸iv?¤NÁæoÓ
În88ĞÑfŸ½UÓ&‚ÁF{Ó%gìç%™?ëÇ³Ú‘Sİ„Ş÷@€.ÏÖIÑk’Ø×Õ+j¦_oE©sÅÁK?@en»‡1*ÅñÊm>…³P=Ê(!ŒêfF¥ŸãÊkâaèX*$ixAsmŞ£ñÓ†}œ„.ò~6´•j³Rêã¿®”91XZ;b21<zuD1ÑøçŸwù:Ä‚c²?%0î—•üv	ç';¯©¹çxÀĞ“*¤âŸ_ëÑWÛòúÀj:\KíÈ·
 Uá%"q§¤[³ş¥é»aÂÒdÏóâ2lÃ~Ùó
Äbü$vÆgg›Ãh(d$eoø¯-’ê\«—~}¿A©Cç}›™Y‘êt»+øÏ¤ÎlĞ2R´L™¤Ë_˜å}ÅÃU fĞ%uæn´<x³ææêi×9ç%Z‘–‡×{¢Ç·ñuKG9‹Î·¢ùs×ù€¨Š—kE›¿<™Ş3R97<âû¨ßö•Î«Íµ”æ[ua6³	R]¨ è°Å¥ÕA¿Ö­Ş#ø2}åõ•‡øP.0~Uğh/E…9Æg¥²öFy°¨øò…“K<÷‡bàú^Ÿ®‰~ÃÛêAÌÿX0ß‰šJ·÷xÁd¡õ›†®	¸oºñÎV¦ÆË™¯©-=ç	åäæqï/ãR½À2Dù©7!¡åP1Øæ*‡ÑC‰1(FDMlü¿§{æW†`Å÷ô_¦Ìõ«™à(ûäš,¬GÃúE¸ş°ùù5ElZúC1‰KG#§˜Â¢	\'ÅQ=äüÓr¯åOğ~&2zÈúm4¼1)z8»¤¡è†5|ƒ³²™KHpN‰Æ–»Vp6Ì×lÇÉšB}î¹h¯í»1É;jv=Ú±U*ÆHßR—”£0TÖá¥‡úD?D 9)·5=¼Ynäª•2¹Àh·Ñê 0˜@Pè¥ÿ4q)÷ËNÔƒám6°¾‘g¡ªË¦™+#`ò6ßu»¿ªğà±JæÍ›x„6‹|Éd˜0¾ ÿ¬HØÂzäe†ç³±J³©­VD²@øT?@6;v²5S,[êá1¤ê	¹mÎlRÅG´F3'ït¢xÏx½×ŞF»±ºÇ2h!oL|$ÿŠ¼‰×%§á®p§mÿ¾fÂíß)/’éÙ¦T¯ÔËJY`½‘8ltÄ­Ö	MFÅ¤hAÙ³\­¡bgõYLÌD~¯ òé@ĞO:ê;~z˜ÍU‹1h`¦rT+˜9ïGa<äãöÍ¤Zß(Èd‰¬A>ˆ`I@ëÙDªÜ¡ÊV“»TkÚ²Lù®tdÚÏÚx¨­ıøÜ	Ìg:†ıQ[<z¹‘$<4T–L¥ç¹1™õ<Ø$†Ä‚ÿC£Ï–k”éşØ{æôKø@»œÕİÍrX‚Š¯ìË÷ò@Â’¥ßCINJÚË.Èë-Fd0± Ö)•Xp¶qfD›Ö–ùc ÆqüÓïïpëìıµ«ù%@ dşÏ€)ec‚ÿ=¯#ÔÜ+Gn€½¡ƒe	Ø_ÊfÊ,1/;h‰ÆHÖìÍû±;Ôó#ÖåáÕ„uŒÎıÙ:4ö”?ƒ#gT`3(FšNå-0ÃÁa—5ò±¼J`£û”T˜·Óİtd97Êı˜Ğãá¨(ú6õ}Ï ~ÿÕ‚ùÀşÛÂfÏëA¢âI™Ti±sÇ‰ÌĞå•G˜Ú
èÀç¿GÜşqØØ—¿‹L>ımˆ'ÛKJÈÖñî/|³,T;üeZƒf[¿”ŠĞ@luYo¹[gƒğFÒ	v¿Fpìë…£‚ç†¸ÓÒŸNÛX¸vàL1ñak,G€üIÍœnÅÊ&ğ1Ş±«m²:€l]_Hçï€lWUbÅ6+˜ôj=FÑÛ¯fŞñä•a}ÏŸP)¦J*	D©9DtÅ%ıvÍa)¦­…ng¥ 

@Z2şxE)¶Ñú‹";µ'1™üzú>8 Å_ûÒÒ•„E’eia¯n¨ÍâcÔo²fÿÀJŒ¯mJÚ ©5¬“$ã9·¶H_™%ÿ{S’v¾f9äƒ5vh¸Ûnì’ÂxÂá!°’²x{ ä•¿»p`úVNĞøŞp)ãíH[ ¡ÿøHŒ6¡üë8Ç$çÔ/l,@lG7«¾â3TdA™ºŞÒöØz·ú!0]âºö’¶›=j^› ûIgğoEãç·óÊPØ­°…o»hƒ>¢éíşjÔhSFQ—H·d[óz¡‰~µ_†Dó®zÎÃÑã!VŸ–‚^)©]-‡Mb ±^ i´ÄïèYí‘b3ºéÏ
°Óºj#İ{ÑgÚïäl?›l…J>ô4ÿĞ{Ù`OÛTeËÉ Ùïš¤¡)Pİ|ï4ÊèF~t‡r	Q#¾ƒáèÜ~Äìé±=/³\º;
Èiz”j+·(²„YU:Ôâ÷è“…¯†Ñ‹|T±ò¸íR&¼¶xÇÿ%VIY	Õæ,®øíÚ„RTP°u¤ra¹¡èK³3“l¢ö-Â›\gÿƒö0­Dgù$3ı'"8›óÌz«Æü¦`…œ<¦^Ô6˜)ïºlXC{RB°5)Ë$ùÁ6«”IÒ"–TŒŞÇÓ]Z!°+°/ğ­©µüÚ-5¤ğ{-,l‹¶YÂªy9ëòdŸKÇKxõú)s—Şú«íôg³J[q¤ôUŞ_@`(„Ì
©ŸDºõË‘-I¢†â‘Av§ççûz¯8í[eãWùXr>ñÖ³mølOfc?o ÷é!ù–µJß³Æp=„è?á¤$Ë‹PS)¬_R:8ãzÙï=6Ğ¬o‹ÂÓ­{ñ“&’tW´?1^³MÿïXÓ÷ñn×œX(û·ƒ,P¯ÕV z ’3KÆ™Ê—L‰:ÿ+·¸‘#CËhŞ?¹¿b!"ì"óf‰¼èY¯æç¾ã(k¿V/oÉÁg\Å¸€”\¹w³VTæv+_WàñŸ–u #m¶ßßŠ+`"ìíMê“$Æx!‚]ì›7‰ü8¿'>é×¾z¸`Æn‘'PTÆJIW]@½"d‚À†-A”xuDr•ØÆŞÕñ{Ö…Êæš\ÚcÛÚªèu <ò¯ì×Ÿ"æa¶}Û5/|GKÍ¡¹0'cšvU¦)®ƒC¿¾ÌI½Ûwu{L†~ª'P‚ùG*Åñ¡YßÑß­¹MåóVEÂ«áD~¯>ÏÅ ÿ¨hHp¾&-RY½Êa!ÖYæk«QœD­Òt&MSn.w«|Sëµ¦ğáÄu‡êì†¡Ãhƒ†@è[PÜÚ2d>7ÂĞ›Ğíhœ·Öã‰9JzXZU”>¡&â+à´ß—ÅúÉ±5b²§Uß×u¬ZyŒ‰•#vsĞêÙ÷Ì—@Óy¨EG9;X]š2|‚J€ıL}lôfëæc^lAäO	FıCâC&g—­4™¬VF.Áo&Ô‚X&Y~ÿªË¢zÆ1¼”b€r X2£`~`ÒK|f¾÷Êvm’¾ôŸ ÿ:pÃ'…@áŠ ğs8ˆêèı¯ß&e!Ãé­óNUxĞû¾\f¿ğm:Ã52t§¾æÓLÜÔ:ıášìükÂÏíÕQğ‡wÄ·V+åÁujvÂ«0Oââ tØÆçeÇú˜ë¡Ò¦ÿyX}çcxù(|¸±pÎÑ³?Öˆá]SÎyù¼4zÕÉSŸ$Šøï8@ ¬«™Bı­]ŞFn —K6O»ç6Šti£Ş¼z˜KÛk©&]E8	¥·P›ã3[`—çÖ«ş6\+`V=xI„Il0ËOW?ÆêÃ¹œ°a±¡y·…9µ]d	ãÜ,REà¼·7æLUCô0r@á“ñJ¹ĞU\µÂGpÖéÈÀgt`3ÿ'}×K†q	G¹f3ŸzUóæ¨ZƒĞÓY•ñ¾\|hësæzÀËóÏ0©"!x{|?ñ|Ojòl¸<:
t,Î¶y;ÙÕ:”àû^‰=ØÄ…¹Í>PÏJ|å£«5˜€['ƒn•èÁ¸c6ÔSHÈ$®ÊrÖñ=ÃÇ¿ŸÚCéÕÛ›<hœ¶Í.PèÇ‘Ş(7Âíá”¢)>Cøf+^ö©DP„;¿ÙÔÀ¼Óù¯€Ïwq‡EÍ3=´”$ğdU¸62Ì5W3|ƒèH²0xl`Åd¯ä¯§±f¶Å²µU JkGOrK4şÇ‘zsÕ›öğÊºSW•&:Ş^¥8îâä“†i=Á*AÀM§?îŒÙGï½×à‘¥ÈŸÃ—§a][‰bcçáÊwÂßr\“œ}¢ö8àğvƒì;ÀeœWé½œräŸ#:HH7˜‹ãƒº«l#!ïYlºV‘9á¶÷6Åç|¦5ƒ(ğfì›ñBsC®ùL(û´ÈãÎ´³tG}ÿ!fÑ¨;ˆv†B©#Rg:ä¯“n¼Â!è¿Ná>§£	#ÈÕñöâjA_V‚#§b¶ÜÎÄ²N©„¨çØmB¨ZÒ†İWzzÂœw@A ÎÄ®ûÏÕĞzŸpÀ^nóµß§ §x`•fKq¦eãÓ„”¼,pbgŸiü–f9åWëE”§º™sg@äĞ£ÄöİjoÜ>²v¼¥ØµSi#Ä”ŠıÀzÑS3æ–*ŒĞÌbÂ@Ppaü™$‰]rpasÃëÚ;÷¬yâËµ½÷wÄ€ÚáÇ~ îó@ÆòúÕ/é-°üvâ	®^n8Æ]{ªùæ5O¨û6$©²®çÏë&>µÓ€™w	—)RQ—½fšÒÃ^‹Éµ×¢U\ûé»í§ëï$\æNÉMwrıl¤¤ŞgÒ< a;Ó—Éio¸b†İŸØ»‹Óéæ¬7Ã'Â5ğ2ñiÜ‡LíRh…%jYkğìå(íÇÎ 
=›‡keÀóÅ<ó¬BÙ 8s€zHócuNbHY­´%÷È0v}Yrå•û†$îï’`ÔñÉ]¡ùJø²ŞEûó©(3RôÏEIYš÷<lQ®êXõ	9Z†ß%V3S%–¿õ4¸Îiè¶Uä7RüŸ¤Áw›
÷ÀØ<@”oÙ: ”¾¡»_x³Q²‘s0H|ºªø°ı³†k‰ºJ®Ûõ:ê}¹ş?@}›øŞøÛEVFWOòM¤’â†ø>š"JÄÌ7³W„Ì\æ>WØË<\tQÓÖƒı´ĞÜ!™]Á¬¼‰>:]Ï ª+›E”iû#Ü×y+|ÁÙP]ÿCI‹ò3ŞUAqC‰MŒmf)Wî…UX%2¹N“U‹Î…¥±FM%b”…ïß'QğãŸÄÔD_ìôaR§€²F¯ëŸÏŠâ7(dLn8$uF×oã	äX¤<QK´XF){B6ôïò§¿yÈBÛ¶‰r6ø=˜¤%d_r¢ãAx‰²mZøéBİAöÂ– ×¥ËÌ€ïÖM°ıÄw.>B‘êZ'†Ft<Ş·÷ü%¥$¶B…F-§nÚx6ú]ıËH|Ê{_|b•„k•â>’¹$H)”dçÃN6ª—ìC|µò:’¾CTÏÈ´ı,/ÀI
I­Æî”Ôİ ëÀ	2Kh/~°o?¡ÉÏÆÄ¯Ô#]er‡+!jzçÂ?ª`â9‰­_Ñá]ÿ&ğ6\ü³ÇIùèc›†—Ù.{NóæÉ-›¶†ô`Óruj=ØĞbs‰Vœ]RpèM¨úƒÌÑŸŞßÛUéÒ8/Ğrô;Iï`ı«ÉSF_»)Øt/™ò+p WKIÈói³;¼R?P™šÔ
tc¿~Á0w½§¥ùâ‰r%Ä¦YÔC­¼`½Nçùü¹Ñ™©lwo»œ¤aÕ¸?…õ¿€ø,_¨GPiğ€P—õ%Úåã%`kCÅÓeˆ‹ÃgÅ8ÕU¶êv_,ªÔ°Ê’ƒO©hªâ¯±SoY3‡ô™»Œëƒ¤Ù˜_&±¿ªÅ «K<&5L«<÷Í¡ÈĞ½÷	ã(¹ìi+P×œÒW3=>Š]9}"U›cs‚bx I£¼NPIØH^¡6ˆuiİ÷’#Íušìê1Y÷]ú7âœâË§]ü+"AœÁúŠİnIÄ¯˜Yìœ÷³8„‰û3›2ó¡P~Ùˆ:OğC[UB¨‰7¼Œ˜ÇI¨¨ïƒ·oÛmWîOM=bÁD×ˆ+™=E+Ú|+˜…9n†M iµr-‘¤RŞÈ'¸¯KQñ;ˆHÒ2.%Kò§PNOjŸ'ôÂ^LD“+1"éãûà	–š—eï”ø‚œÍqMúÄ³F’jwŸ2†NX}Ãl€ UŠïÒ’B£RÌTŸ<gjå³Ä@ÃfÈ
í´îb¤u,¯Ÿ®ñ|+€›ğĞeKË…àÂÀ
v#î4  ´—ã¦Ç"0%´Áâù
¤eV«ó§(L/×éËÄ»rhzio´ ä?PL&åÚeË,
*îiö÷í˜Ãç”­¯:›sBÚF~ ™0DØsÇ{ÓF—¬¤GÙ t…çõY¤íÄïĞ</Àíúş(ü÷ é}4£“ò\¤0¥“!rø2ÉU3òƒÓQÖÆZÛ%azTMÁé‘&s¨æH×BÓ}¼=Š=JGø¶»óLĞ¥r:µ>³d“oÃs:ã|ôÚx«s5¿GŞE<¢Ã¯´¬•
kfÃu­öí¡Œ	¨³•>­Âò‡+ÇeË;)ƒZ4ù¼Jì-B?[IìÄÆæ`ªœõLÊ~¼^"zL¸p6¿E†«FH2q«dg*ÂãÄïLöxgzIå2÷˜b•g>vCE}	Œâßù÷@µ€˜(ªjÕæ	Ùı~$ š&aºM ¯ú‘¸Ù¯øb ÃlÛüDŒ™¼"ÖÇ„Ü›ê˜í§á× ·›½{ê°'+¢¸]G"é«6¯8ïÅ-çåïº¢¼u	‚rõè›>Ïß(0ÈÉŞn«ÙrØ¿U(w‰äô9±•M¨f"ÒçíÄ™vWQ*§5­i÷sª¾û|è(¶~{°Jö»w¿#è=ñv,N8êÌ°ï]dt»:¶şt­Ù;ØQõbÿTnnık	ïÙpÄÜ¸*U¤Öu	“>e‹+±½„ß« m^/ßnåjãA¯»{ÖJJ(Ù¹,”î½Ôy~$bro{L…ß³wCğmŞ0ÃxW5Ôí,÷xüpR‚¦S˜„§ºäÓ.<S‚¸°Õ¥)ÜÔã²kç8Òè4”÷-Ş_,
N¿v~®«C÷ûÙkCQM¼
e8<„JùMÌºÄ"®ñ Ráï\i/Â½ÊZ^Sg=A$ş9¦¬xãMÿuéPEz™OTYÆAnîb‡§æ„Ã¾bG>:×$7ØÂ‰ENÛPƒ‚„×åKJ¥ñï‰WYÏ‹Kv»æÆ]gK9ßkå½=÷‚òÙ4ÏIì¤’9î8 Æøæ›“¹”M–J±¬HµN’Fa+¨®İµú!ó÷°Ğ{´.¥Ü/¿{Ó_	‘AÓ—G)§¬¡ÿ¨q KÕÜ†Gö‘\»\Ømn~'NŞ(|ôVß*)µJ[x§2úÿ·N›5ÓÔåˆ4~ıR¥µx”¼ªœ!rƒ×ÎÃJ‡)â†â¥Ê'>òãÈ¥û½KìúuOA_…µ¬®ö‡`îu©+;óaM¬Úâ².§²›Lõƒ–:1â‹Ì4<¡ùÚ—÷|Æ}ï ¹*¬2šŒşD=”Å¼ÕwÊè1^Ø¨nl½†‘¶Ì;+ÛBÆ‘ìPŸ™üËÑÉx`³gÍ­P€xg8ñ¤
0À„BX)
 WéEHe"ÿ©o%dÇ¤“*ÃTÎÔR?`mÛ†mmq±•7Uõõ†FÌ-m%y‘<F¨²åŞP$ÑNWë'@Ñ¡Ö&ÖT¥`ç¹º?¬BqîİÕ8†:]“Ğòà'ñ‡VùštVSˆúîêZèú¨]ë1‡tåPZõTbÌü©Ä.%‰}iğm¾ºCÓY¹J¯Â%QŒw¼)X>ÌÙŠ7¼«fXÉÓ„S¤ğKúYá–wÚ­\:ş,Åü»4…U¥FìíVako_Ìà!u&ìÅÓ	ëüsë;Nãù*˜áÇ{­d« %>‡1é»XmÊyˆkÔhâ{±%¤g¥ùä¹q¸Ã˜`ä|¤İ°Ôg“-ÁW¼»€¡!Ã%òLw{OõŞñ{1 ¾‹û"^ŞÑ”øô…q ¶¦ˆìhQKÖÄeúŠ%ÔŠ¶+ËÄ(Ş¦3¨HÇÅ]eYL·}İ\éóØBví•Íİ	°êYX  {”÷±½ S9L%Ñ+áe›ıTöÕü?#uæ¬ ×™ĞzCåe†™nÜ0¿ÍÜ-·›Ùrˆ>,YÔ]¶;6ıƒ>à’vxä"º˜A-)“¡wZå·ƒ‰.DÔà‚\0é€×¶øıRuû_Bòsi‚d6øx<€Ù¢È©* ­S+ôKÕ¦[†$ç7Gî•™Tm½­ÆğB	G«Üÿ¿–ÔÖS9÷ÃÇ©ºBŠˆ¬SŠğ\ÈoJêŞu–^xëAwµVh‡ Qi3ÄÅÚ¶<IÛzÁÎçj`jYÔña—ƒ'Åõ-ÇCÄ¬w]GìÑ¢ÆVï'£^¦İƒ}µœ<ô%/ŸO‘«.áofWF?uC}îô5ZÑ’mõBíl0úÑ¨*!GŞŸ˜Î’dµçËæ•<¢sÌ‰õó4Jds­ÌKE¨¥á¬VJ'%ƒC¸•¦ùH$ï2î[•*º¬hóGìd¿hø<~ ‘e½Ï*”²¢:Krü63xw…“ò×Sç(WsÊtèúIıÒ>ûµ².”d'ã6ù|ˆ83•Wud|ši|råÓg`˜ÏùÜ~„£CÅÈõˆİØ‡Mê1ÁÊ4›lºÿ
ÊÄü6Ğn]¼DÆ”¡ÍØ·¿šfò‘m”†á©\4•Ún¶»b¾äê1€ÛCûñ"Œ~-I/FÅ/¶êWFJºv€MÎHùº—Gå’9µJp/™•$Xµ/»n
ÓVÕıs²´áÈÂŒ6#HÆn1v~k,_ì™ëİ¿êX5{½ÓÛø^L½d.—ê¦ób”Ù5Ç½q¼õ¿]™6¨x#?Œ²‚†ÙÓ=İ›m	¸mË„'•»&%%…£Õ%Hˆ4w\çm¸¬â=¬3ÀYN¤æÚ4MlFt¯P»½[h¦)*,\øš8si_5O™ïwxŞÁáD†59èyEøØãoÛ@ÄÊr0%Õ¤"_ <Ê>ÆQ"Ó.ôù¼TŒ/èÂå¾Ç:Èã‚ƒ8ˆÁe˜öì5iLœ¸8^^õy“CZ±ÛLxÄèp&"¨™Êpà?‡?X…ª»ğ|¥‹ø æzŸÕvEÜ§1MÕ/í×(ò†¶“Gİ¶ª³w±ëNz Í5<ì²š‚KšÎ aÉ 1Œ«ÔulÕu ‹Ş[@á‚ëA7ÄXM€ìğ¹Ãr¬Ú„Ä»ş‡ÕN	¨R2”ÌZõíßPk,®P`W(³<'L¹ˆGßè|Râò%oôiXÃC’TùĞ'Ä^s{¬ÍüÈYøiìğµ„A˜/Ñ[´ñ.Ï‚fr+şLqZ)Q{J%>q8”gÿÈ“ìÄ€4l\N¬£ÙD¯ˆ]œæu{—Ë¾é¶,šÖ›P/÷Ç«ª@f§gñ'Oîê,¤aøƒ ‚b3o9Ü·)bósx%|C•¤,´½İ¦Ï–BW$¹S…’QŒ%Ú&Í7é·Ó·èITPjãåîÖâ"AV•çxµÃ˜+Tª	T5Ó®\«Û†¤Œë~·›†›‰¤XOc¦Â‰Ï«g´<{+›#…*Œ®÷`ß=`ú'%õjAÒ>Lû2@¥t§Ü¸Ë”_,v4®½ŠóşnGj•¨&®@×¹/dÔÁ$=¸Íüc› Y’á%Hô>F÷–XâìEY ša¹T“Å(·Î½:³eŞ.e";{¤÷è\‚EŠój-"'gÓÑ¿Š±¥Xq~XÜ¯êşíú7Uã¤5&)Vã¸dÍİ0m.ÙALõ™]U*Lr¤_9JF“`òãş*Œs½ğ§,½1&#&ğ¶“âÄ/]TÀÅ~û’[YºÎ[<‹–&_åvü$¯"*m¬ Â$8;a&$0MY1˜DÕ£‡ºˆÖ:>N3Ûğ$0:5¸7!_æÚQ†=$ğxG¶À8ù¹=Ø&RÁ¥û >>ÃYh‰[ŸĞldõÜ—~ÑĞÙ·3ı?¸Å¯V(>O øıCµ¤}§.É}($ŠûŠQ1{pŠe®ã>‹Éş.“KYf’¡<|˜^‹•_¶Ô‹?¾€×"Û*(}S!4>ù ’dÏ‹ BÎ+—DÍşËéCÏ%}}Æ&îÃ:7yæ@à€¡ûç;Ñ×HN€’Ê¼ ¯s”qv¯àËœz|ñøæexé¹ú#¢M„S¨Ùæ@Û*ğNC³4«¥ „ßsGóÏ‘{®KÚó7h^bçuuyĞ0ş¾F’ŸÖ%GdVCn~6jØ}œ«í˜ -üNï›Å?_Zï+—ÊÌú3G‡?÷7	Sş ôì­ş‰ÿ5£¨-a*­
DÉ¬>œ6´GgRºıM^HoS;ëGÉ@»ÄoKävm°p…'(o‘8C-yŒÏ@6«mÒùIĞ<¤ÛÔœF¿Ñ(qå
P»$w.¨İñ¥î4¦c£Îª68«;÷ƒ±‰V[IşK3WÈj²íµësÄù¹tnäwÉŠ½vïæş×g‹!foÜ¨XfkzO5àP±\º³B>UË½]}ÿ%y³õÆÛ<!Öl`ÎÑ9ôªcâí5Vı¿à¼±Û¥¢Î7òN,l€¡?Ésù¿Œ0E¢k©ı‰½„È†]¸0Ï*3»(ıùßRÔùë30Â”U¼åYxáÃAhÍi¯D2æ-
qu$=ØO+:2ö·1‰lK»{İ|•Ç!>záôpÓ"2fÀ½¸»ái89Ş¦É¿ú’CÍĞÏ
¼6ï‹˜{õ}¨œq> ¸“7N’•¯ıé?µª‰õîq`G|Ä=MAe£zøóÜ²Ğ^“22.Åãö|½Ù@wk<ı}%wÀt†~İğÿfh3â"R„êçóšÉK
„–5Ú¬Š$iŞÒÁİòwWÎğ_™ùè„²şM®´«ã50ÕÛ­zû‹YwqyD‰ıîĞÕ³íÀê'Ò¬pÕ„€"ø[(Şßsu`HGüˆİ7V“ƒekŸÚ—ÔØi^êuP”ÀW8àe§Ù›ş¶*ŒÔ×!-~İ;¬/2eÀàIÕ‚>­?µ»9y®‘VågX³Ö/ıß×·Á
í?mßH½°89?¤Z>V ¬}ºúh€me)«¦hŒ`b+·Ò«‘?ÅÕZ‘UìV'6Œ\ÈÔk&•x˜TõL1¦]28—y–TÔ=8è®Û!%d%IĞ–?Ö´Òñ†Ê:ìEá¶,§kï©@»kü¯@]¨Ø¼ÄG·£‹ü¥_N(a°Ûb.@É$ÈäVõ–šWU¾ƒoncİ÷Nğaô¼s™„ˆVvJÍÇ¨¿EUİŞ~J´Dá"Ë¨Ö‰7}9½öB .*>”—NíÖügı½İ¹âœÌ–oSë2­·÷¨N½™şôc¢Îo‹¥,&á§(x?m8¦=]df‹÷!#éî­lã(¨aÙ¹«¡·jæ=™v‡ëÜ›ñlºÕŠÍÆ—â‹àalbA5fÚ²FÕA1ñÍƒœ’q6ìCÊ’ÓTˆüá:Áš²s#¦#d„_yî¡™“ÿ†İQÎ¬m„…cŒlRW§?õA'ÿ+ãÈŞy	:y¯“©Y?¶•,²î¸Îú©0Ê[ÔÌq?ÁÚÌYÙô]¦SŠÏËĞ°Š —\&¯§yphä)>+İéEo½a
J+c†}ê¯.zKâO@ÆûªÂ·|KÈøÛF¸Ø!İ3Ëèa]|Râô‚ù\ùæÂhi­ëòÃ²sé!íw^±¡IN]R°f{—éØ_·ÆÕıj¸#Õ;Îõ§~~¤ÍD”ŞŠ”š'„·ùJÿ%§¢ÂØF‰zyOÂhc}I­İ­aa,Í³AY´™‰6%¦ZÏ]dµû¿lç“×õ3ƒ#“1[Â.qç½–ªÊ´=SEĞû?×ÍPB"”åí:J#ìK{=<îĞd7)
/ŸÆLMÎ±jzúËR!İw@ùX¼¯ÑÛ³$ 'FçÊ1 ¸o§’(ó’	KŞÓ&iu|KNÏ¶éğçV´C­ÂßËøéîĞûn˜¾RaÄF3ª ó‰½Ho="HG–o!QC¿¤[4Ï¢¢µ¡ö)ÔüêØİ´ph#"ÇÊ/æ§@ÓÿŒ¤'€Ø/ê‚¶˜v;q‹ù>ÿë^Üäµ6…“óÀ|xSTâJgš$î*!z‰,6$QŸ¡Nî ì©¥4@ú’ğqSfRÎê¦Eı*Õ*¬!•õéû:5PÆ2ïºŸi…ÌÊ)èkçë E–=>ƒâUbçO6H©<ö
>F¹¦`w‘Á>g2äZå­@:rénı}|Ğjmœ^b%$—9:ë¾rNC2òùÏ:´5*Í[Ïi%×Ki8‹Hnù_#}>À^	Õİ5Şp'µ{A£–Î¥N]I’4Â‰dû?EÿTü:­g:»§E:AÊ2È4_øcTHüÇ„d>NBv±Ôã@dlûjñùŸÁA=Mu‹[ñX®àÚZáÅMc³Kİ?’¿:¶Â]#Ü“ÃW†ZØñ#^C‹Ê'ç'PşUØ?‡%½¦Şá…$ÍèWL¥Ø£ê Ï¥ø’n ®b FÉO éÎÉ®Şq€â‰/(UmA¿¥–ÀM-‹ñœuøÈMËÊÆWkBãÕ?òÎñˆ%q4ÀRI
Ô_qcø)İÛ!ßóI¡Ã‰IØl·ÒË;²ß]0‹÷	ä²G”ÑïC’×Äˆ3å&šyÆi¹½–B•ì`¿Diw$Û'²·ËËş®¹8Öö;2çÂ³Uí›éu×y§BNÛyØ6-$ıÀlV7iú%noôôßé•ĞÉ-ôrı!r¶ßÿd9ğÔşÿ´KnÚ2£oæ* DiY¢aÍh"jºbü¹à¿óÁÉ¸¡õ;ÏAMPVïgFÌ¯M÷pÑ6OunqÜÍ^aÎÕõ™MK†İùà|rÏÃB¦?}Mf¾bWü×9.\á×bô–$íJoÉxñXë“é\‡y„…‹ÒXJ„¯)=´ÛŒänÚ^Õb˜½‹3ÊXWßc·†Ì#¯xe±KÿààC54|ĞóDbÔÊè­”¥—d1ÎùĞŠ˜b+Xr¹İ¥‡Âq}ºÃOÄ4éWjzšvF,«¦ÓNZsúÄa{>¬¤¥Š¶Êİ¼â}ëöÆ|wà­F~El°’CEèEÑ­0RÇD^Ÿ¦[ *X¾:çÏægy™¡wP¡\,óh»F¾‹”Ÿào·¦ÓV^W²oÀèÁv]Ó¡"Ì>ÅlV!ÎsU	pM”Šæçü‰»Ëô6rÀ•>¤¯:ª˜¯×eÁ¼~µ\}hcá£«ò¬• •¼àÊ;‘¾6»$ªúÍÚ³²xWË<­ÁHË÷û0ØM$C_.ß-v–L{”íxìYõıÛÁë'²¼”ûŠ?Lı¹T¡Š÷ˆ¬Š ?wı‹¯¡§æ×6be|I¼m3f×F¿š$ñÔ €?ŠÌÂy’W-ñ³öàã}ØÁ‰.m?vD-×Àğ¸H¡+²Ş‹»4ø"ÏÍ«95ÊYÙY&şùWİgİû‡â÷Vü‰5µ¯g¥Ç`×$ü«Š7X4ÛcÃ“$ãdåPğ{iKÉ„˜+>W´ê®%–¶%á¼q)îQ6VsíY£-îo¥Uô#}1øâ"~à¨áÎæ¯K«ÀduB!Nû¢ší¹XÔÊ}NÑãüc$ ãğ*_Ázt²1Jã×y*q‘.oë—«h¾ÏAr²êœ¨Øš³ñlyë:#<¨õ([.ïÎ,—Ãy§îĞQ¾öê•b3á]y·ö ?{áÉÀŞ~úÎÎËsÌˆörı6“ËäŒé²Eáê‘7ç9èÎz˜‚|Ã9V(’ \oáĞAKK£–şİ-	¬d×Èß¿âùj B$0Ÿi\ïÄà± ×ôïË<ú­J©E¡T·Ğ›íBĞ¬Á­4ÃÓ
&YÖaûq—wËÌKoX
«_„.öÏ!‡ ”Îß¦˜'å«Ÿ½ï‰ÇîF'•Jp_ºHŒ;˜·›º‡ö<Ÿ‘l¶EŒx9îÏÚr+X„‘Z/àc«ÆÜxÎ½†©RBÄ6”éOûpÇOˆMOo…ßŞEB²€ŒÏBnw—k©ş6
ÙüMğ}¸ÿ²hXÀ­$N)ç0Æ…”„@®·”3,^üMY!Î² dºM÷­ÈT¿‹Ÿ/,é3´ÊL¹o^¾œĞÂ'r‡J(§ê²äùXZg>ºÄÛ°Ïn£™ku¶¨*>ò]JãJ“×¨İÿö«ÆŠñ»a|t"Áh{ÒôY8¢Ã~ÜüG Œîr:¹ï×úSFÃ.l/Ø9Ùƒ`ößJ‰£{™ÿÈ‰ôôÑ‰ÉFÍË<Ö—>ßw”PeL¦'4Ê›ÏŒù>‚HxİìÁ[/OQÄ°Ú™›Â‚‰Œ¿0|É>ªîTÄBšEwàºÜCåsq5@cæÆ_:dqBBÒˆ¡Œ: %GİÃü DüĞa‡uÖØ=Ùb\w«CÀ‰&ç©Öâ–Ëä]Ï§ŒT¸AqcÓm=N2Š%ë£™cÏ»~Ø»Ò¾CfW™}¾ZÁ(*RNÎ²4Äûdş™Ùv®ê]OÌ£/®ğ—°ïBZl%Œ‚p%™;êk¬Òtµ²ø½æû´ê%ïCl*« #Ÿ¼Ú¤Œu¸Gˆ
™™•“¶:/Bc€LºÔ-5©ˆ6†”ï¾ëmOpAÏ¿šºi‚Ù
éA&¨#şËâÅ
ˆ •”– &S×É ¥S9·¤´®r"sÛ#V³q4$4åÛªfô—`° ŒÎ‡Ïd]xO ÜÍÊh×PM9'	âô×ˆì³ÁÓ{¯ÈıÅU-»–ÁcÑ~œ€E¢®ÓÆ9\ÀéJÖğ¨ª×ÜQS"•Á¹'Çÿ,íˆŞ®DAò-^%Ô ÎÏ$¨3ãHÃ¥ŸêÏ¤#ÈĞÙ>¡&‘¸äQ"Zhj·Şãz;IC-I ¨7x@’]z'c–šycÄÊ,Z±rò±iv£T¹ÚÕ•‰\\Œ…†%[©Bm¥X£Bàípô„ÒK!û…à4´·7»4:>ı]‹u!”­2·b™mã²ÄW"m\ÈäXZæ÷±yJ¥šò©)ø4sàŞ¬­S•“ã­?İı0Mz!¿F/ëbbÇ¯w(ïj Q®;|Hf\ÉOa¹x;.*ŠÅ:~”t@¿÷‹Ÿ¦&ô­¶Œ)#-Ï÷Ó‰N[ÍQpcêy^y]Cx—„ÄŞ”ıhjÁ2“¾"V–Â}cÖO@eA=t1sCw\Şì_µ™]-O÷ ÜĞO°4‡PÓhtÙ'V²+›-lJ½àQÂ‡á“½¤6Ÿ¼SğÄóô}÷´ê"tz½M«æº!j“šƒã•àF…!±©:ÃThÅT3Gu…²«ø›Wì!ŒîË&nşa†¨µa ›¸b=²È°´Q)´,Z¾(r|"ö{Nr´cÆ)‰ª&“o4(K€úT™r1tŒ	”õœÀCõÆ•8’%?UË¯pJ@1Oßä¢Ø}kä/İƒó"üArœ{]KÉC|“šÔ·Øw´zv©Hª©åÈåÔ	$ª6O½^HŒğòwáX…_‰/aóPz`Z¿´R»sDk4Ã;Â½`ìë'®,İM#æ÷eÔEş<^Ä|ù]íŠì9‚4ª¾9Ây$½~õùr5s-~«,á;,Q¢P?na¶Ó¦$„ªüšü)T;©aâfÊºƒÊ>ƒ®"©ğ	~ØÁ‰™LÖ¡ß*/o[MrĞàø(B
3JOê¥|qÀàé­GÑLŠïä~ı®j#ZãUgHA•£ˆx×ºÌ ¶/CÎ»»ù÷âÈW 3ÏŞ¯/ óPğ MäzÚátİ’blgşeê­óàô’¢¼šŸşKLŒŠŞ>Šª±`FTCş¬Î'²ÔÁWÛ¢£ßĞóvy8´õÀ4:»%4v_Æ§ÿ©Á•jFìE´i»5†FÎãí™½ñDƒŒ¢œ"Å¤;Jº~ÅR¥Û)³¾Àä’~6Ş¾Áªë;ÔÃ+Áp%§[!X)@ë=­a`E´ÔÎZ½v5è9ü üle—MÉ¡HóÉvbqÔÈ˜9N]W‹û”W8¶w, 4·C6¤»ìˆ—Ê­ŒU5¼ØŒ&›¤ŠM@§Ç?‡ˆ0¢Bd&ÆY9n4íH&l1‰q#Ò–w‡}ÁteÑ-½Œ^œtgı$ï.æpgT]² *²¬‘¡0…èüÜÈÈ¶aó:ÓÎ,DÁ?S±s½Zª@ÏÉe„!ŞÇE†ù—ú)6ñ»4×ñ)İ¥O+ot=j¡dÁH
ìZR¨?dô7XÍŞÓØ‡õÔ»·†bşL	+^–ª‡  ´{
p	x²§è20Üê'Òïê=›àıŸ;ìD÷Ü¯•ó1z·&h¨lE`İ8´½¸—Ñ*) ³u¯a°U~ÎìÄ 2Ö 1Rg;z	Ì2æÓdpŒÂ`Q@¥ÉÅ«wIBµ*Y¯L%¿«VT’“û°m¥T^+Æ’Ækœ9üğXeCö¬Y‰åˆ½Š‚X¼`=“gš%äÈá©ûDÚ}YõÓjkÃ[+/·İğn``­/ûd>­‘d”9Ëôy2³<†õÂIÄaoL+0LaKpn+‡øö&¸ç%7#…Y¬zuºT¹ÏÄ@!äÕz<5´„ƒu°g‘éWëiGŒÀì‹Ï/À”ë¡B™L¿œ
> ¿ûÙa4G±5+‡õPËÓÌ æôü•è‰µ’aúÜ`tSïWjsAño±è^…€«W$iJ“Š¢^uõÉk;siÂ®¶rÎë1È˜×ŒğøÊt´*ıÀpZ;Õ÷F Hååj "Ï‰?Òá¢£ÙĞ–L6<şî/tH„CÑ±UoŞG ‰©_ûj]ú¨ŸâğˆißŒmæè©rñ‹Ùù3î:Ã±2]µrXíˆ‘ì,ëÌÍ”ÎòAÀ&…C\ëh#âuæˆ'Oöş›2›)/§»ÁE^‚’bİ{¯ÆÙ gÃæº`ğ¤H(ÜjúÿxÒ¹ì´"`;ûÕ·Ìæ²èq•ÆS³6±	[GUì;Ir–F}ßM›Vp8èå˜˜‹¬|u,ºÙ¾?ŞüI›K<·O’u˜Ó(ÑğaÊgfó bã~b^'Üem>gñÕıÁÇz¾'ä•a¶•|óÿRA_¢·*ÊBõ¬ÇĞMæ5«@<<Ğì÷­Ò’¬­‰Ä&AƒÊ{±<.A8“d®ê4uıÒıåy~µê~4d‚,B.(¼„¦Hz°è:şD02f)xEìªç qêÅîëØFáV¼Cà«öBY¯ÑP˜9T¶ÊÎ×qĞ —eÍ‡¤¡ÅåBº€ÊÏºüXpyï², aKü¶”©HH9Í8A'11[ûë(Ë—S>¬B|Ë9c!ç’bÅŞú¦O´üÔğ¦¸/(CU³È—ÖÛüXlû4p¦LøÅ¨ÀÿbqåÈ¤·.û]Ë¡$T¿{Ún¡,~íh,KÌ‹AÌiÉù)ó{IOMe@šŒê÷Fj@°ßğo¦·€Ï3L¥<L ÿ_%~õ78÷J8è¾Ømfo}²ô¯a6xşÿÙ	. n	<Ë(*óTJØş^:ûz€gSkÑÈ&¬HÙÁŸû•!Mî´vÄ$ÑÀ0ïaxª3O\çœP9VhC{(@Nh|Õ®ş€Í1 İÁ2//cF¯Öq±JWŒR	ƒQJ9á|ë&yGúAÕYµµm»©"jÓ^fõ–ÀÍiS§ù]©é+w›ÊÊ€ÍÄ,¨¶ÀËºŠõõ§†Şc©)´ÿâª£ÔqÇ3(¥)©öv¢f]íaİñ¨Z¾+À¡À5%65Pm%¤µLÌ\ 2·Û êjÄÆ³İçÂQqX	<_Ã?QÆú¶}H°6eÀèà+,Æ¤I<ô/¤jsøêô‚©îºX	€‘=#Æ@U~[îJ2)€µ˜õza!Ğâ]Årà)¶a_ÌB¾œ˜C[ŠüÍîŠ,%·{®Ş£Í€4?‡íxÙ:7p¥yÃ ²6éâY•ÙĞ¯ıiÜ«M+)(ãÁ0zDQm{¶¯Ûòlkë–/Ö %äŞl%ö£ofà•öS[ğ‰‰0¨—nÙ´Ø<ğ%)®vFFçÄ
Iaµw:‰ğ#«·;½Áw%nã©§ÃP²	+¥ÌÌ:g"qQ¤Î>>Òeˆ¨ÚGb6G}z–[#ïÄ‡`¼1p¬xW½°/O”ÎUî.Í‹´Àóã~…|%ğDŸÒİÅ¢|àMŞVı 	²ß÷î"RsÒ”Kc½ š†yL,VÜ"CŒp˜ÔPŒŒ«+úë’mp–ü1'q×x“RÄ›pË$3CéšŒÙ)’(âñz—ô–2²Sç¥—"•Üv
SÏl:¥ Ò'…-&¹ú–ßk²Ø—C®¹»8¸I‘à\788ûıÚËOÁÚ­á£ª« ßBª#wÏ_<psÏt¹İ5†±X{UUªİÕÇ¤9&q‰‚3é”*-–ìÍ KØ]Ü‡ˆ)@ïş ïĞuÙZ“SÕnÂ0NÛQ¯ò/™½4”ÊÙ6 FsçIæÀwCÖ¸ÂD‹q7¨+»ñR½qååayD‘ı;6i'+«ET²ëˆ‚bhw£¿ãªèw‘–4ãÑ#h`0ˆœDz)†dg4ù!Ñ.×r}ìÖ®– ?WÌô_Õd®^™RŞ5ªÓ¡xœ¨`+ƒÎ,x:¬X-dçÃrdnÆĞöuÜ™­ø1Í¨À¼k†»¯tqf1;	WAƒ™³ Z~kèpø¢ ©Æ<6v%ŞŒİ	¾ÈF‡;l¢ÏİYözû½•ğ‚ZüÍˆMü‹ñ-à`Lh…Á˜¾F;Šƒˆ4ãiCPªı·´Ì ê‰<lûûMõÖ§¥‹EP1Š¸òBXÎ²(R™åRvÚ£€¨¥òƒRA#ï@bÇ¹k®0.qB€yÈÊê…»/×=¹ßş?¶Šx¶F§lÙW/İ~sU,¥tÃT»e ÅV`áv‚Êß-8-D\3ühœ½)ºQ /%¦ŸéfÀ*Fÿ‘]Î˜€3¸Şô¦R†-ôğÿám¦íó:£q‘ÁİgG(¼^ÛOóXò…¤êeùü ¨`Ï6,]HŠuÈ''ÿö`¦ÆÖÓ°ìQ\Ë§8y®îy0`±ÏP("ê­ST}©[ÕqeÉ!4QÛ˜Å{½ÆË¬“[§F¤½9wR?g@ŠÒ~ìL:µ€S…j”T@Òpú%{Ü.ùöã¹tÓV€ó§'$mÁwËîàù7±p¥ıípÎ{†ˆœUTÌ˜QÓÖ8«ˆ|A³X)ˆJwí´~Şî¥»³xÎ’·_QuiıR`ˆÈ©hºw§•²¯ŞBİÊúu¢\ùIœDyı„ÌmÆZªÎ´­1b‘,};SThJeAÉ)[Éš?Ø l&$`iÇ"1E™OîˆO®ş”î'-P
p Êù¨cg…Ê¬£U‹‡ŞËvW®òsÀÑt=L¤ƒV˜°ôsmİ­¿Zº×ï¯­Ñw¶Áá°S¾©&KàéšÌ‘ÎÕÕØäãdıl[6nJÌ£ºoFˆ.:"^Ågø77+¬‡™Ê(Ì5ô  ¬—Ü@;„¦µ¹úÍt´^x%êí&›÷.¹k¯%İ‡‹¦¿PT5,ª¡”dÂJµd¯Æ…Xq¾LAš§â1ùÄO‰14(2ÌÁ
99­ì¡—9ôÔ·xi:ìk"-ñ%¶Ø³„ÆTÆ¦TÀ¯F‚6îqÃLñÈM2Õdñ4JœÁÜ OË·Y‚åtğ´š›‘íxÃœEÜÍEûlšÂĞGH!!·ÎvÕ¼Ş}(Ú#m}8—záÇÜ½«o-Üï­e‚6%QL~J2¹Â 
-»áÛéĞdJ=i€"‡%:Ñ%0ó!×6‹×Š¾Œ>‡œm<ûiù+>n*r4T¤ZÅ2‹ÅŸELštg97ÙÇÅíÈ,Ş>õ¤“0aä¹BÉ‰‹h^ˆP°æ†©gÚ(S{Ú²^™!Ÿ.„MvıÓr¦p"¹àq“Şx‚ñËå‘™§'·Á‡yo„ÚâL«×Qğ€|ŠMØŸ)-ÚŸ/ë.¸S²0N'£Ë3‰|/).;ÑÊ9ãÆ¼"–ÇŒ&8:µbâÁ}ÓO˜ŒVË¶0l+òwèg/Xq~…«Qa‚P-$äá¬Ûüø´µ°’…\”1iè£CN¡"äiqjë)ÉBÒkObÃÕÇı0à¦ZïÛâ©pfàÈóÆv÷Bù‡<20·†‡oëE‰©ÂİïvèRm…JàQ²Ü‹¶³3Mä˜Œiƒª8xhw§–#ùÎÆ§=õwëQtoø×™¸çğÕ”ÜŞÚãÃ5v‘ÑXšˆî˜!Ï0´ª/×ñÃ~È•TŠLeLª¨­ŸóÑ°İnJù
U#U– «:n€MñDCR…ƒƒ·s$è‘Ice›ÂË±#˜W´÷Ö‹}õ>>‘Î5™s‹¥¥áí †Tw•¦nsÎµÿÉ·dr«`t%5-7’¹æ„æŸ©ƒ¸TmQ¬ŒÚo+ÆL"*¶Ã‹µ>-ÏÒk§¡ÅÓÆX¹JàKp^œ4 }¤ì%?³+·¸bcÉIQw²ê=¤ µ¸‚_ÑE_Á:x–ÏØCØ‚â|Z ²Cú5Ùkœ^m›µ$¾…ö vœèo^³O[Z\Ãv÷	¯BI~ï%‡¼÷kÊÌA^\²ããÎ—§)Á~kïµ[ÈjO¶c‹§6‚ICÖõãpñ3´ŞFİ·+å—„Ùª§®Js.2çf‚Sõ@~$xRW-®e°ãªç)3Øc‹¬è¿ª¥‘ÌÕ§­hõ¹ªoÂÂ×+‹X\"ïâ),#ãmKã'¤eñç $ò#çF+üšéx­fÕqÕŞ…ÔP^¨@í|Îd £ÉQp;:ãë ¬Ò¢-?3
c"AÙçı#´ûã	§qFà0
ØHø]×Ö†ğl9÷T%ïSqso‡!{…à|¶ØëLÔÌáıİAAğğp»ÌúSø–L	){ÛÚ	ËB~…Şó÷Ş†¶x’ŒJAnf'õFW,%ÖD©´Ö€ÏÄB‰X´õ¨’Õ›£Ë„ğõ4—e~f	­üxîèæ?„Æ§O|¨Ô/@†H7Èézœ¾¿!›¡”Å´Â<,N¬ã•A±	”§1…áä'SÔ½÷Pe^ú<VÓ¬`é„˜§°I•>»‚IR}´©E¾¹–Š\0?û6){ş/Íìîåe‚d«ñˆW’iñ7škI|gTöÉª[Rë†@b”øãØËŞó5qÇ ‡}C¹yçZ¦‹ëšÇ£QW!HB2$ˆYÀdîãö’*†¶ Ã
¡ÈÈYH´Fş¥=Kàğöõëÿ2åä¥Í/÷\Ykß#İ6é¯Gr€TåLÏËèŞWW‚ÌdïúşQ×Ü~U1Õúo\ãr'áåø´–ƒâ[Ohãc®@ŸW÷H™](}r-0ò»äË‘Ùkú QÒ©
ÃÔoŞ;©¬˜É¢(O…`r´HwÍ.êC×F¥¸QÏVº11|è<ÌuMI	dæ¤¯UA ¦.M*:Çú|z‘RÔKµ&@Y1]­›ÀÙ˜ŒÔñ%N¼ö„DVtÆdË0¦ˆÈT|ÏñsÇ%z£©*  
```

## ×§×•×‘×¥: ./public/small_1.webp
```
RIFFş§ WEBPVP8 ò§ ğL*èî>m0”G¤"¢'(v[@à‰en
˜:İòº'òü¹p¡eŸaÓ¿Ñÿ´ô›ÿ…Ù³¥tóı?ëóûúqıôi®ãÌó!å?:#ã‘ÿYf§ëş´Ÿ+}9y—şÎz¢õyç[Í{ÍgÔwúÇü>¼ßC¯ÛßWŸ[œsÿäó±ó»>şkö?ğÿ¿ÿ¦ıù£ıkşÏş™?ÑÿQÿ‹ü÷´?îöÿœòåıæ½‚ÿ:ş«ÿGüW­ÚÿñÿsÿGÉqÿeûSì#ïàg½?3ÎãÿŞ{ÿiô_ÿW†²û~»ô™ÿûÎGìŸò½…¢şXöÓô´gÿÖåó•fÜ”™’„» µC±(	“KÀæÉ3PùüA”j¹ı·˜‚Ëú¯ê!¾iÙÔcGnŞ¢ös9ÄúŞõ(n‹Â¥£DÜF×K†ÖBT‰J[ş–Xúö_&† òFhÑ³M¿„qº€âÆ¦Eü/6 'åjêBTøıZe¿ã•ê5Ò:ÙøòDr3&´¼c§òR3d¤øU{¤'meƒïoÛ˜À
Ûn>4øu‚3¢‚å;p“nzPvFŠªgğ¡ÿµéØgûÑ£ãˆ¢$ò2›b­íCIA.¯³`sµ#mQ9(òhÅfTë"K2Ø(=€“¿d5^ŞMT`½ß,58¼•ß2šE@Ùw+êøÙî3½‘ÁÉ`©ş}§ö_zœÔ‡ØTŠãbš°¥ VCh&ÆÉšp‹İÏ`ãt•ÓÀ4»	½RÅ+.E2KëïbJšµó[:¨q%7ó“Ë§?Hø4mº­Q¼&¯g)©íÑ‡ë¦â‘«cq²ÍRdvxSƒ„ê…éàš,1Kİq2HaÓdÜ°kL”}´|w/Ú†áulhfIN…Àœ¼Í7¾øXUh?f¨£¹ê+r‚y!x0u*èƒu›îâNˆ¦* <ë®
à&Ä2M/Ããª•ÃÄ5°s¢‰A¿qªGØ):#z!tÈü§Õ+¢Ûª`S·+ÑÔ\¨,²÷ß‚·N±¿ÕVÄõ¬­æ¬«”¢öóPÊÊeK	Šû²qx¨+xÀ}Cõ«—9RÔú°Y0ÙT]X;É›	ApäfL+¥®:¥JÙqşP/†¬7œr7âzù»;¦ÃÔJÖæXŸÚªÓE†@/¯+‡å»©‘'ƒJmÈ«ßÖú[k†'„ÍŒÙ'`Ë„.¾Ï¯¹ˆ$İ/íBùT¼òw@»ÄÌğ‰”PH
Ú•?=ú%MÖ=üáŠ1Ñ‘ƒCz¨ĞP`d`ĞŸ·ñÎ-ª_ ò»š>Ìˆ+äoğût‹§n5‚.¢âxÑßó·Gß‰Ã½JRšÔq2h[/IG—W<Ğäßo*fAu¾z.
Ê‹Ë¦JiÅ<1A4|25‡DK]{q½ì°ş€_Çmì_ïœ¢ËõÈdñ4Ş…Vƒ­Û2›$i÷Õ±É)‘P¶ÀÛû²CjèVGú‹~²YİÏTé­Øƒí\£u™•¬\*éN¸ˆç§:‰¦ğø>•wõ¿…â99"†`%„ÜY\@+]ÌdŠhsªU&ş×ÍÍa±îT4£Bt'VĞ=<=€®]ÄÇãVQ½>uS­Ë§QPêz]¶,;jşy·%ˆQp@ÜëÃĞ—è×ĞãÂô§r-ÅRS 8¬²!}‘ÂÍpÕ¶ÚîZßíÑ„[ÿn,É’K¸™¡èÓÍibò„“
K˜ÕTƒ:2<Â›ñÜ#úys-¾Òl@¼Ş§¾*˜*ß®Í•v0SÄËÃE/sHšº&ì*Âœ/«e?¨u”ôtÑ^¾˜èµOÖÄòkAÙPôû|`àÙøÉ:ò>zåêOÕ‘y§–¥+w…—‹j²ƒ>¶õ/ÇğpŸ¼
ËÆl?Ğ!üİî¬Íÿ–ÂáX·B}¶<¥Éè¹ÚÇQ'‹FÿFådÆ<}³“)wÍëxãù³ÊøS CÁÇ¤]!Á’HÜEœ™E‚+HŸ‡v;¸nÅùø¹wîu‰?k>ıŒîÿÅëíaş…=şPs<ôD³ºg—ƒønş÷ãrjÉ¡{Ì$EÛF©ÖÙOÌƒ¤Ù¶iüÂähsË G+úèv[ÈPgçJ	Ù”d|€2­™V˜[êš£+³VF¡V‹oœhaÊbe&ı „Â” ×òçùåï!ÛÀ·HVšÂ'T¸ÙÈÅèë”O=
#å}à¦¿nûzU*‹,Ör1ö? Åè{.d÷T) 1\¥!ümÜŠÄÉ~,®|¿—ZkYjHıdH›“¢Úø(™Š…Z#½³…÷ m5›i’êÓ<n;€
¬"³¢z>É_b wfTÓíø£]ÙhÔiÄé± X“½?‚Î°8f–e×8Ç…•ôeh¦yú(æŞ7–4µ-{Ï3Ù´¬øë6‡ƒøüM«õé¦ıœç{¥¼’­²ˆñıü4çd¤éÒ£H/Ù6„ò¢¸ö¬YH“€üÍèY£§cÀ““–Wÿ	ËVµQQÈ1¡LgÑUrÜZùF0ÜwAø@äfî‘ÉõHrl^å˜2§9şgüÕ/*ÕÎeä3üå!Peµ[Äúüşä ìúzÅëMƒµ]od¢÷ÜĞÔyŸJ*ÉL‘¨ûu‡Ö®9)·âU£¹qK‡Ã8n“{Š÷ÜIŒšÊZ‡{Co÷ô—Ï%¸Å¤yÉn¨:íå40†eX™ØIoòN®÷‹ºb‚cszÏcæúğÒ^î#:‹x·0¯ğáÚãSşi—{é9·)¢a[Æ%ú4”zÍ“^)/gë›2tkÙ£vœ"«{ºÙª—SVqá(Âå´î7=†ØŠhÖ¨‘cU1œwU¬xÁôFùöÇ7ü…aÒœĞğó‚g'v-H?³S§}ö¹¯g¦˜½kı##r:ãBã"*^"uãH]ñƒ‰l¼=¢œ‹‹²oÂ%ŸBF%ß¯ü_[(	Úºìõ·ifşÆY"7VàR·ÜŸKµ¥¹nØi!MâÑ+°Ÿ&,	.ô´®Š4ŸG¿k¾#ĞÖ¿HWè—½Ì‡2ßüìêÙßEUG‹yäEZ¡,_A§/ï¶cèÈl–\¨v*‚CÆp+ ¸àÏä‡'7•ë±ùÍ‹¡x‡Ë(Cô¡WİçÚ`\hÛúfĞì•I=s6(¦}ú¯Z3×{Z¸ÿgšO±à-$zøá±{´ÕîuB#ÔíÚV
Ì"€5;'WdwdpÒ*Y+ùcX¸¨—°‰çiÿ„eW{C:E¥Úk{/8ê§yç­ŒöwcãÏÒ?ç9•¡šäÙÿğ
¡°!{?‘TõS¤vpsCÛM+9zìÏÒ?¤ä|`K’…Å(IÁb‚Ü„®µŞü"Vòb"}î'~„Æ.ùœèj)ORù`ìD·XwŠ´Èñ™jêêª½¿È\” ‡àÖ'X+ ä!Âbxš‘ÿX¯İ¡\=sÇ¡¨õÛâ×r~Éf§Ş˜¾6„@Šº=hÕCÔ¢”ø–¥ç€kÎ¯ª6¸1$	ú•3şECH¾›a#çÙÌ/5wŒÅX«?l<ò¶[š?øÖ<ò‰Á[—È\9OÿÉ˜ÚÌ©|||§Vªk¬÷ÓŞ08c¼w«t‘¿<†Ù1ëÍ?Åv«mYãº`ŸŸ1(™È‘îÎ8+
xöÈL‡ ‚¦öHÈóîrËÜR6,“õPå>p0ı³Ái¹Á+W%’—°Í4Y	‚Û†Pù]o¬hq² ¯ïŠ•?Q»ïŒÉ*·d¼¢Í“·ÿ‰*­¹Åú¸¾ ­’Q:vx	åË²dWq”’iê¾’›Œ,ª-%<Rõr™µ¤ZNëX=¹w?s®ôš \|™è÷»
‚C™ÄóëtËÆ¬#Â×^–$Ë‚VË½WnĞŸ¢¦¢YF‰=:şĞg›Ô²ö][<W“
óûaz³õÕMË¦ÄÆôLv¯oÑ ë©I³B9kR/@UÍÍhƒ«é¯ğƒ]á^‘nî;½"Ê¥Ú¯¸û$éCø'˜…x¬B­”i®ŸÖœƒèê½«…‘ééİ|/gDÖŸá·„†Iü7Ğ_ÊÿWX¿ÈÀDÚ ›;ÏCíÅÇšÃt9ØÑşĞÕì$8Ş•â/>.>ısj7úø/£yÔ:ó¢Ş‘ÛEÓÖìÔ¤ÓDi‡}9f™lÍX¥0æ5¥+p¹`'ÆÌ}ì¡›Ì@MŸŠäÁ^Áxz§æ¬TÕ;2Ê°jI‰›†< "ŠåaÀàìû¬[ç€¥yR^ÅíİÁUÿñ±Òr³#L¢ù£pK{*7¢o41Ğ67O„Feá¹Ã%µ)ääÎÙ4{ÃRú6û±Æg†¢Öß¬ÍòEuieJöKkû¯É¿âıî7×¡Bxj½i…Ç-Ç¿«‘½evg"İ†ï‰hLÙwb›ìY™v­’i³KÆ-.Rì,¤
y_˜Ú6Z1Ã×|Œ™w<„÷;c½úd‚ÖXnÚ—÷DC\6/,BèŠİ`«;ïšÑ‰Ò…ëû1|MB/á]5yÙXtaˆş–³sÆ×qå€£Uã Aßâd] Ğî,]Ö~öÃûõ³ıom†Áñ±'+§ääÂ$˜&šcs9iÍ!ÁÕÑÏúÏÂ¯ƒ€Ä¹ó¢/—ÏVı.¿Äšzçsg‘ßÒûÛÊ¾%íGZÖ¡ÔË«+¡ô«í°î’¾¼ı«àÈho¬5¿öšdqû 87jı¬‹áyËÿ“ ìÉöÄ6Dãâİ}¨•é`OàF(d’êö¼ªQzk›Ä“’Æ]u¡k°ïZ<!tô`ãH[äù$^Öû=‹qÔG‰£Oi¤õ]Së[Û}qvS²{ìÚ†™ak/y–éDE(É€á0MÄáy¿Ÿd—:0u#ÆaCÄH`ÙğÆõ-Õ"hšQF0³÷S†ƒæy¯Ä¼òÖù*5PÀ-®ıe/³œRïZ´~^Y›ëBƒAËpß¹cfWsPaúõ.û¼2ŒÁ
·PZV–ÇyûÀXiƒ„o{\µ”)ÇÂÏ«p7­àÀåÖ•˜Ìq¯Ú{Ê³¥·}%´  h'€’ìüƒ÷µpÚ ú'ÒÚVÆ¯mX;p‘™¿‰‡œªË	QŠHJIîxŒ…¿~`pÙÏ|‘/VµÈsVx*1µbÅÃˆ8oá§×É—i\_6{*”%V8Û¬Bt®ı³{õ@ENÅè×;y:g¹_ÎÿQ!€óGËO“!å)úâ9^ôASÃ¿­M´_~OÎ°25º[Lª•":ÅÛX3zÖÙNËLØŠÙigX †­]¦d îÎ|.½Ö5ü×“ôı|X² ³µ­O‰ë¤ªÆD3zê¿i:ñ‘e_g1ÀÖwæ÷§‚äı‡€ê¹q±øól¢,Jv’o¼¦şıãØ[v?ÅŞ6E›+Ãts÷ÄrÀzÅŒíløeK	•î\ $é|e`¿şÇÊf Z³ê¦fL>{ñ\bx¬/{.›«.;¥<Î;ŞCc«$~½¶$rçxø§ÖxY»¹½×*Èòÿ]©n–¸¸'°µÆï5¤çX§“ƒBû7o­$hœ%2:jœ¹ÚCòAõ®	«î]7Ù°Á†ùéÚmU/ÍsSÕÁd¥Œ=2ê{‚«9ÍÕ—ä/á®“T¶!í:48ş:¬íöv?·^\Uƒ{/€m­©Ô_ UáÀ1fª¥~ÿ[†ïİ!pÿÚAYp°>v›#ÔDg­‘ ãØøAì‘,Ã.Ä ›îàÂE>ç½ ;TzK§×ÒıÄÆŒˆ(iIr´òøÌŠµñ>Ò4øG†¿wü_Vz‹xãI¢`¨'¶ lÈÕBû²½èi9nX¶<\Ö•w’ nNV`sÔf	·€ŠÅe(H#@–¹¡îê¦V|…[j|ºUq“‘¶¤`‰€x1rHV½Âcó$¤ûjY\_‰áóz7t!Úé›!´ÓXwìŸ~±zÆ‰œ”qfÿ€ùº¯Ô½:…vMÉb,†·v×öM(í\<„0BÔÒ+2#ìPêH[:à•–Ù!ìãÌM'ÛªòqaåŸiCs:cÅœ÷ÛÏK7´hÕ"©k1œ‹EùP\	œzû°J†ŞüZıĞ´ôÊş@åÙ;ş—Š2z@ ©Rô$ÿöı¢ÔÆ¿òR[tQÅ*]»Ñì`[ŞÎ“Ï›‘wÖ“7«¥5{ó½\ÙUFW¥F`ÅØê€ÄM_!qNR¨Ù;µuœæ¦	-²ê$:¤|5«J—®}ŞMùİõã;C›+'CE…|(üe×}š-©O$9â^Ğ(Xôö¶vxï–(;+â»1E0~ë5Ì5_I*N¼Ï›¡ï(:l1›Õ3œäÎÆ¦ü=0m›¤sÂğ´Ú‹OüVJ³,«hÉİ‚ ÖÊâÍh”¯o 5@?Z8™p0_¹†Åz¤ÁleõAGè£¬ùô€X†dÛhoÀÁ¿eíÆö±±w}şºyÌÛŒ~º{­{\ë%‡@»(oN1İ?x·':<5l™		ê¿oŠ-0z;0qî<ÎıƒPÌéÆyÅş°ŠåáÛ:(ü7ü®s8Me †„|à®sy”š²_ú\r}”åãŸ•> º)„¢ŞN*esXaÊóå#y¼i+³Æ`¬ƒ[Î­êlÂĞ)ó"HíŠ+Ğº¹?ŸÎíº§{Mz¶¸‰'ˆØæzÖ¯,bşÒ
"NàY^ÔMˆ WãO ®ÍĞQò¬Œ¦µ¥¨Ç{ÌH»a”kÖrh0/¡QEbø±Øö™œıŠ­|åÉÆ”¸[é°ÊÁ‰pŸ$×ÂYŠâ4k]Ç™Ów”wZd\ô§ü¤¢¤¢û½
[ˆÜ#k]X]0úËxÛ*ğÒ3—pqÏ•pÖcÿ4¯=aº£‹O·mxe¦4œXşF¯	­…hsë¥ØÏv•§ñŠAˆÅĞ†Ó±m˜L8bß˜4)wã=tÍ‰›…M<]ktQØ!/ EŸ³U}^÷º´å!vBÎ6½ÁÉ"RÃX¯•ÅLˆUW2B¼,€¬ú`#Ê(aœ:_(8]=CúªƒÉ<¾lG}ò®pînë°P·MK¸X mîÓ÷€İ àaG8I#Ëf‡·={’CRêùŠ¡·È€{©ıMŒœ¤:¼÷uêYÕJ‹	t61ÍÖËVË*q§>aõ-ÇÌ›¼D!95½}\õ“%< C=•´Šg–·¡oâiÇ‘)[”¤¶ÔùÖJY IM#ÿø¿Ş?Q±¹û‘‹.ùNßz«ócª`†ó½.ıLÉ]4¬„+yù8‡r—®ş½=æ1ò½ÂÂÏm¢(ğğy7İ]v—”'Ä:º"İH<§*å¹Úî®º>\f®\"h!ÁM†+tå¸gÿı­;?_sŒ¦$ò-ûSìdi$|ÊtŒß«_—îj\lU üª¹;¼"½ñ-Tÿ~õÉQİ5“¶ÆWùïÔ(RAYC¼Ù¯¡¢RbŞ1Tªí½'ø@®’üåú|×ĞóOŠ“`¸Uˆ—…’‚ëÃˆ+È]˜ñ™ÏÒÆ•Ÿ¾_a}vrßMÍëŸCœ†â²Œ~ÍJ""+B¥¸âĞŠ O_Ö¥©Yù ğÙğ9ÜÖ'¬ø¹…fçì÷ö=«kÕ>Æ‹ ¿ë²#*î±´0ßğhQ(qCbìu”H¹#=h—ô§«mÓĞ Uã?ËPdP-IÅº%ó+¼«ÚÚ$0ø’œ.1åu3Z[˜ßZÓ<BœÚ¢4†šJpönóâ—Jù}OopÕ "™øOQvÙÂk±`Û^UFÆŸí"§ï0=TºcŠÑ|ã£ï]ÅQ‘v5VgKZt„d›§–W[*ƒUÚ™ôD¿³½76hx\%¯ÃFÔ¦NY¤IÃÆàĞšl"yv¸fDTÇ¦ŞvÃ@^>YdÒÕ8¾MìO›ÒêÅ(yšîuÃCÖeYA˜ rb(ìi^zGÄ” `®#nö¯½`õfQÀ‘‰ ‘¸<Ôô% a7ãRøõÅÜ&7àÏÎ›ê<ÿ»k4]Õ}ıµ‚éñ%«(„=!Š~ae‰o­p1ğßî+W´³êŸ³'¥v‹P”ÓÔ¢ò¿`Üã'uÀï°ù>2ºsö¨o"-èîïÌ°%t›…şÉñÇp‰Ã³…Óú—ÿZÏDÄ|§Ù±€Eò¢"cê˜%ª&bÏ&Şõ¥[©£C=ÔzÊ”9;ğ8˜ºÅğFß0ŒÛ °
üåvC‰B¾¦–c¦RsñA?ŞìœìK0¶F¸çH‘Ñ)x¦Z¤Uüƒ½=3 v”ÓŞB…^åèëub.vÆØ÷.°pw¿AM‘	²I*—ó0ÀkÉTO\jıv%ƒ‹Û„-Ş‰·^Lnøƒdì…KnÊR-RJJ•ó+; À#ÖH¢Ğ;–á¶	V— üÀQg¾y•.ä4¸»…Ú°pGò®²tûƒCËœÿÿøZõPÍD.’$á¦&ÜMô4¼õ„æ8À£MäÄº
T&ŒÀ›#1Éfâ˜Ïu5›ØÖQÿ7)ÅG?¯2Cÿàgo‚Õœ{I†Öz¼66ãŸ`—_8¦<_ñ'‡ÀÀô‰L
¤‘m5uÊ6O6`ëNk—ëikmX¥>më°å9ËKÁx(ã¶SÒäuÜı&ƒ.HvñØõØ¼Å’¤˜8Àrf7¬ü{»<Ï¾MA‚¾jY(­bÜàeîKaŸæ_y×î §ãM¹ïÚÉ&¿ûmœße gÁH¼®ìsĞğjÈÆ{®íŸªÚıÈx*"€ûãä•”3UöÈÿ0¥²\U½‚}şÖ­¾ôø¨!§Ì:K‰m<Äu!‘kãƒk/jdŸª}KÒl«§Š³mgi»ŠâùÁ@Ö Xù"ZWïPŸó¥ÊÁ„Şòj|iÓ¾| á|¥¬d»‡aw#{iâ.éº¨µÌ³¹`äQn¢~½9¹dÆ¤šUTıœY®×_lÓÿühà”«Ó•;ÖªQ€ú-¿§™D1Fà}FL¢G¿>¼°«,u8³kğ’ÄÆLİĞ”:ï¦rİğ7Aoã˜Ï=å•‡ÛÎeyIér±÷µJÔë‚vé‚*>qızšmïºáá½ûW°~´ş}µÓÍ;	jÙ=“„‡*$,W0£„P¾	anWÅY»ƒÒYÖ2˜º°¨½Êög:™	D^í×óZyKd$jÅa;î[)$Ö'
†æ½?6ƒÿõ%~LZÉİVr‘2laÇA#“÷mdh	³D–ô$}8E÷ùğRõYÔ‘3â=Îù@%Yî 16C‰µ]‚ü³y,˜IÊÌÂÒ?t\ó„â¾«gP øg‰µÁr‡[mJÎÒGšÔ2ß“¢´l‡a®?aİ9ìó¨ê²kÂÏ"ÂR"qôŠ›u%´tè£•œÒóC=•wW˜¨Bó†LV"’½	h†øõlß¼ŠQA ˆÛÁyútwzÕFıZ´m_¹uç'\^• ¯åiÀ÷B9×êä?‹Äe6ĞõÄ“ï]©ŸËÑceÖw°KÛB9î,‡¦u(m‘uíhßƒ¡°	Ì>Bdä4–8ˆİ9µ”»¸õÍæëjôß8²â<ğUÏˆ)TbâEBïÍË£÷&>c`R›•î¾Ö#şTî«ğ;ù|úfü¸rª¬\7êGê	„06‹¾UùwA§ÜäĞ)g
ÿè%ºx5%â!ü”¥‚Eƒ&AâuQl–€ş$U•6œOyqka«q«rÜ¤ÏÌÁŞZë­&—ƒ¥‹\¸Eâq–İjÌ^}çÆ`ÀJŠ>>!µ1Ö@.B{4`f–¾Ó“w
dæ¡d•/­!†ğòhÊİË©¬2ŸÍ’<“›ÜïõÆF6–Ï«z§*ĞçløŒ Úœ‡d1àdñj…§ùÁì&ï¸¾c‹‹£
ı1~p³Ï²¥;k*±†h«‘nxö¡3p2ŸÊ±,\Î"ÁKsK6Mg@¨ÜŠ†{Y…¼pTŸÙíN‰É8‰’
a—2’ĞÁ¡ğŒÒ¥áNQæ¹•ÚyzZ?k4\'jÖÃ¸3RÂ«æÌ³UÛâHI¼ó?§$Ÿ:ÍP½O,¡¸Ã4¦C¾Ş÷-Xoq®|ƒ/‘t¬%›m´ÛÏw¦Ù/"6®w~á.¾ôë;ìä=üdŠS,œeK‹°*9GÒêÉgˆĞ:â$ş{w}§³µ)Piåşó4¢Bp>}5`E“VL’î4À:Z6Ù.}Ë?v GóWA¾
‚r[öºàÚÄS÷£ğW›å.èÛËDê‘»#Qw4“Ù_ú•€óÑ2(é¶Ãî{TE•ğãÚæŞíj o’Ic™¥P/.æ!ğ4U"E
yOÅWÅÜ†Ìê«X±Şö<\¢Ö•–ùb¥ØŒı‰›®€¨UÁ€€¾aN¨R£!àD'~KÇOsb<9¶=Î˜pŸO˜F‰Ø(ZµñaØóü`…¥ÿ,ÔŒp†!^>
~ „õÆé}'—QÉíú:Ô½ö(ÜÍõâK™û}ØÙ~hâäÏ[°õ¬*Ó#¶ùÏ·K>X²	pK-¹»p’Ez‘ ÖN²Eã/Œ¨núìÅÒü8@ L+DI¼OÕ¦.1 ´Tv@½–Ö(´:„ÄZ›yUpÕ%{[²£Ü•öRÕúSx »áD5Œ;rïÅzÜHfî‚°2U¦áš<VJ¼ò‡2­ÉÖ…aT5#ÙHëpãlDõ4TAN.õ?t†UË¼—®áÇz²Kcà|b[CSÀ>¸|Š"ŒG£‰m‘£‘…±*‘
%7E¢^j-ïî!CVuÄÑ<J¶8•he,§•Áš¬-ò t ªâµAi’ôÜó¸Ã›öƒR%t¨Ko‹üˆ¹búØÁqÕ‘ŸŒ\“Î	È%C´hÔng? ıfbìoÆ)V5»wA¹ofs¦¯øM#¾¿¼‡¹Â™J,…®R×kõõ…B½Õ¬Z„=t^%¹Neìæª·!y(¥µ vÁ½ü§†˜¤ÛQ„ÈôÕ¦Í…*¡>`y”³¯–{Q”[+€@IóS<„Q F¯R_R,Ó±ÃhFÙrã-÷Ì^).d '+¡öõëD¶¾R›${¨n^"İÇàP)‘Å²œë»‹ùÔš!ôŠàÏSÏŒËNn¥”Î–¹ïŞÊ
¦ÛÅÍt­.6ûZ£Œ¦!Îìwáª.gšŞMµJÛJş|´£âşøÑ‚œD9¬i$ÓØô$|ä‡4±åfí#>;J9¹Ê©-¸9„
£^-uÍ¤…»IpÀ× ‚LKŠ2+‘[Ÿ ±`|øòqáYU%&EÎpÑEjëM„b™)ÒØé6“zÿ&ht’ÖİÎ¤ùúcÍKMd‰ôÌ¾Ö¸Ê‘„ª“è‚ì“ÓÒúNYx$ÎôŠQåÒ^°â†4
îbÃAƒ$}h™õüÉı_Í®B‚PéÁ8õ/»”*¶§Len÷úo–­ÿí•2{ıì¡³2ívo7‹gwXf>Ó,z–@p¯DÏü–{<`±ÂSq’ó0c¾×)<Ô‹-ÊÿaPqã6¥Šê5­{'òÒô/6~$wUí¼™®¾Pu¦9[DÇj?® …/ RO ÁØUÂËù»•,Ûƒ#äØ&«s#+G	R4—(á}LëÇ¡•aæ~¦»´é:‘\_0‚B½m¢«w\3`Ò6":Û,XŞì:ßB¼ V2í<ÖûQøğT.Á²eë%ß§mŸÔµ%å•òä¿ƒ>uš·éG«İÆÆƒc˜~-¶Û“`ê×ŠP0Œ¿ÔCsı®’Iš†x´|L÷\ìÿø©C§_öºú~pçbI¿wÕ¢ULlÇè®‹s3K.;u£I¹0v¾ ´˜0ê5w•4ÁO
B1¯3;6²«×³_ª‘sq¤µ}|P¢vğŒY|	¶B‡üD¸ïcdl{H£FùsY‚DáŒÛ‰Aê‘9Ö´_·†ÍÃ-Şè"fo_lûÀ¼uoÁ2\ÿN}Éó[Vvk×ÿŞ)€EÇâ¢[Š‰+ÑN®8gU£ÑVÓ–âùTâÒ#8*ÿêk×U, 2]Ä‘zƒnam.ZÚénò»‚¶¯˜×›ğ˜„"ï€óYn’|@4\_d¢öô0ÉÔ–]1¨¨›ßD›ñ*CX‘Ì§)GbÉ½RXêÀôŞ¢F>Ó…i-œ~Xp´aÇQS}ÔnÜ› ]¾2è¿Zd·¼Èÿë	È{ÁêVÒ{
VkN#çe„›_üæ4†Ö·¿ìS®ßı:7œkùäã±™Ã‘mí¬çş&¹/ùãM`5<
ÈÎçuü¸ãZ¡¿ÿš¿ú[xàh
ß„ìSAS¡ŞLfzMq@ÌOííûìzö« —Â ‚¿Yõ :ˆ~¹	¯¸Âû¶äah«ÃÃÎÚ«—N6«hä°”VYMƒg¢Æ–xr¼%ÅR…jõ¨I2-ÚÏ	!–/ÇŸ½bšPß}}ÁÆÚÔµSô>øh¤6Fbµ$(©û)­ Ğig¶‰ Ê§ô¢oQ@H’½¤—?âÀçšd÷ÈàÛÑº×èØĞy«`ùIfîˆ)Q\–òİî6…Šk÷«¢g7ò/ÓôÎY-ÓİŸp¥pn¢¸İ
“"ÄU7Ú‚.ÀVÌşÒ³‚ÊL*ß¬šÛÚÿá->Ú¹_«ó†x¬¬cõW}ãóˆ¦Pd#Àˆ/‡z0ø˜ÖĞw&àİå½ÚÔ	)Öû›¨cC•NÏ÷ç¯õÊ`{4	Ğ3NÑàoŸÎßkbAw‡!“êr<»1-åØÒeÓ9ë&À.ìÁ·ÿƒÌYLƒ<ñ·ƒ¦ù/|ğ•zô&šî49­'¥U92ÈY'¨ÆáoÙR™Q7,®“FiˆıAƒ¿"kC”å ND4ƒ8˜í·¬tÑ"Ì¿÷Ê¯YÒY¯ğ&¿äÕ’ÑŸ}Š´+ò	?<?{‡±	iÚğ''#!1#œT·<Vÿ•Q­$¼Şí´·®ˆ¼1qÊw¶.VÜÉïæ„{hFäê‡½ğ]é¹ŸÀ÷*° ÈeŒ²ÿüéµ QrthQ>ô¾ÄÏê5c\!ZÍ;èn@Ú¤J”¨_v™-OíÜ²ocÇ½fk¶Ú\• ³LZ2ç*M–:ˆá‘Y[€{ö$í¹Êòè]…«6gs·)©:‚Ñ}$nôÜ[*
¿¥è‚C@rÇ8‡£Â¼XĞq¨¾ª¨~íU!˜‹DB0
:Ç|S“‹ç¶À2`Á…d9ŸÉZf¢œ?˜s_°å'ÅÉÁ€ÏcoÇ(_¬ëyÆšÿÎüŸu¨dı·¶	Œdà+brNá sÅ…FrDÄ"°ÈÆWµ5F>ÆŠàéÊçnà—èƒÍ¶ñM-pÔ¾¢‰dÍQî€\S 7&,ÎY‡´üqv¼ó[˜Îøà›Ru—ô£rçXÀ‰†o5´®Ïc~…1÷Ä€6ü0‡M—_ü•\‘s*‘Ö0#XÓ>ø*îäı5ÿÚV•pİì¨qæJ[}£È¯ÉC^øÕ…ÿ§S‡ìašùäV\$Ø(Æ¯!êr(‚·áÄ†ÅÖ#D "Oû |ıqqSÛYZ 8·vìˆ«Z€e­õã(‘î¶kmA!aÉ/¤?¶0'	¨é@ï eLöÓDdçm¦ îN¥vRÜåSÇo!äúLÖ\AF.Ch8,“½óñ®A¡óÛ¾n³«™.¦ù^\Şátw>‡.ŒSNÿöIu†š©İ³*‹ÜH¹r˜ó_@hBê·ƒ¾æÉÿ×¤ÅÈå±É­“;á…dŒa4v%¥f‘Ë=w«3—… *?›m¦jKú¼GÍº5¨„w}Âª^ñÖÄ´8m¡óâBdË2Ygx¤P !@¦9VOñÅ$„”Ôj¯½~ö£YWøxœ7¿¥÷™¡ñ×Àaö¦QìŠøœM‘÷¿wC/6EVaš`å~ï-W*—Õ­dUÅßxş…ÔNÉMœÖ„Ğ§&@voY«‘lÕ›šu`›*s÷¨cİL&¹«0$ÕaıÚW5eÿ¨’—Â’_uÒ V¶¤°6¿Î%m lƒÙÒ /#Ëhz¨šğ/…Â}Hğ'½ŠDäİâîT¸Ó"¿¯)?Î†T•ùw¸:÷°1â˜â‡i‘¯t,ÛQ"d:šÓ“øw½ÛØ•Á”ZÄnù:¥r)–O&¹5ÎøÔ(Àâ–m˜¿­*'(ğø¸Ç7øá«_cÎø°èq÷ŞØ›:5-ç\Ìá”{İÅxà€Z’nÈå/6¢¯Úy!&ˆ0Eµõg{è·ã*¤•{ÛVæ)¯Q<ëüÏ"³o’Q¥ÔfKƒæYº-¼`;(‚4Ô½ç`l¡¡šRÃíB».ô:
0Ÿ÷¡&­#†*·š&o?ªÈ²çw|!¨TÄ(x²­ı˜oJSN>Ÿkø
ï±EêÇ8w/GÂÿ…
AÚŞ1„· 7¡ÙW?ÒI†óê3^ÊIÅÁ|ómì†¦@¯­¶§ù˜ ã9™¼¥®rEÿX™^Ü*ò…Ä©Q_™ó6[N¸“‘ÒßóRhEoJv‡#ÂˆÄŠiÑ`³b/Ñ˜ÂšÕñ<9\õf’Gzî÷}¬ Œ¿•4¨üjá_“ÔŒA†h»šÕ'Ú\©}ÃÅe˜9Ï±´Ğó²p.ıçBylÓĞ¤%şÔSéÏ<úÓz©J?Y°&ñ„·“nP(”¥êŒÉ™¤@ñ2Ê§ÿmxsˆØÿˆĞŒé³d3 =À’{àœØÁ«Ø^„ŒPç±‚E+ØeQUÜ¶bÃx:s»Ø¶ sÀ10’n>ãAiŠ¤áí>£¿³ñÑ…ı/»F­
•ùÃlÁëÔeM¶_Ğ“­=P²b#Ëº4 z)ù¡¤…~Tï&£İL]UÿÆñ›áû-åE¥«üÆû €dJ©uô ›£)ßƒã>ÍåÔŒ²ˆš‡šÆáGêIÙÇÎb¨ßtØy.œK×9 ëÈìÛ/¸~-cÒd:áÑT6ëMzå\»ş]âÁÃúôÜšyÃ£5DRAãÔŸ]nNù@w
m•Â˜JğTqh=²˜ÑĞ1Î·mÛIÆN#ÈE0™XtG£š[$^sòìäà41p\ÑMÕç€#Ú÷ÂcJ”tĞW4EkW/^¢ƒç­o~7xîmÇë;\4ˆ0ı[“"{Ê¶QcMµs3\×BÊP›Ï[›§®,\0‰ëÿP„±:ˆ‰8ĞÚ¾™Àk|8Û­ùˆÿâ”|HÓ6Ÿíº¤Xm¸4ÛÔÕ°³‡YÒ¥útâ³˜ôİeõáQ·£ªE®)Pš}2L_y%ä
éËùFƒì˜ˆv&ÛÛÏ¤m*â Nòãošd´Ìr±B^©ªAŒ
øßzÔqñ?¢ş”™#£1À_J!R\o7glK<¨JfLcÀøFø	·ãÌÎCŸ‰¬RÓCŞĞ`¯›ìsè0¬İ üøĞ¯.7F€Xwõ)±CKØ@’z¹lŒ Œ­$|¡±à¤|äĞvì²Ö–o$»^ìUûd=ó<(î
VÂnÜ.ŒH±³]õWBäÌ9M<è [ÙülkÑàã»Ğ[ èéAÅn.‚½ª¸†|¡%—å‡Œ¡ÚM‹Íå„aL‚ÁXŸÿüÏ’ÀœÕ]˜œ?­auV<º˜Õ¶àõ9d VhšÃõ²ú	ô/µÕCÒ¸å‹6Ü2PFKòVºÉı­Ê,5®Åc‡;º!‡ù…ò£¢¤ áØÁøØfr÷[‘ßK!x}e­·LıÌbµô)Û6ê­]ÓÜsIÒ¾…—T[ÜNÕE¨<ÖFÀæí˜Ê†b^I¼êÉùP¬ 56rw=“SJN¢;
..PSJè›:=1 ’fD•Óñª5(ÓÕ	7Šd˜Ğ$›Á'ß´×	Ö»µ…î<%İqVuİÒŠÁµÖw “²øíÇ«Äo^€Ó®›Ò‹ÁA'j$=Lş6rçdŠ˜€”Î³Å¥J<Ü½‡rj€½Gïÿy º0×óÂCU ’ö qû²9‚ ?Î9Ä“.E	`ğ
DÊ‚n¼â²ÖèÊözıcÁ“¨c©ê"Ï¼öşLo¯M‘`FÀ‘Íòí	$şE…ùÔÛÂëÔbŠ~àÀÑŒ¦^Ğ·¤·ĞIöq§r¬XUŠ¿á}uÙ•ëÅX@y.Š –odø•,,É#Î.Ñ6ÍCáî
öp¡ÏªŒ+^lZ|*¾Çš¢…6,_Šâ¸º;P`¡@rDZ$ı"‡1Øñ²ØİGFí24H˜x×"r€ +wáøÎRØ¢åe/qïñÓT_/ÈğLõd 9ˆà+1ÀĞu|Ñ®å*g3œ’)`H;5â‰Ò‘kòR…_tc6×Nv9´Óé¿O;]óî2úÊ]g8npÚé]ßÇå¥%MîâğJÌAòıW†ªÉ±7­EV¤¡ü.ªÌ˜ şûoÿgøış­÷Cÿä?JdmÚ¯4lcÜÁ*{æN·×r³°¨ÂÕïê³'çÏâ½¥©Ë@G²`‘ê„ ª!¬Úl.‹!¨È8µ×¬¸+l®.f® <EÙåle2­ËĞ@Çp‘&ÆŠUşTä"-:uÒ¢††9pø¸	Œ‘ ap@ì8¹»c*R#•&å[Óó27BEŞå*ì=b_î`ÍäN%¨XF=DKªÕ™€±ûDÁ¯"'(½¨Î	›w16¸=/ˆåHß…•Z¸Vù¤ibã'ô†&\Ä
›Ô¥Ê)zÅ‰øÎ1ƒ»İıÂNÂvV\$AŠöPxÿÕ]ÇÖ7p¢Ñ>ÇQfôÂÀ›Ñ¿š®M6)Ñ‹¥jZû Ö¥,ph¯AZ¥›tÀ  ›ûßöĞ h+{Q—é°ëp&€EÒ€şÅº4áÆÀü<‰ôÿ…oCùEˆ"@PwĞLmÆİ®¬'İ×Àe ^«ûrT¤)ºcõ½_ˆ+à²Àv€u`:ói…šÿä}ÄØ¡»×v^j£ºƒ|q¥÷v¶)ız@&Aˆ¹4öŠ‘#F\	%aÓ\Àæ9ÿNm.ª?’.+í§îï¥ôÒÔıKË;dğÂ=øòÙPSzû¶Ò9ÚNŞ2`ÀšFŸ—½\5çŞúÂ ¦
|i¡'oG·@(z¿øä!ë;.¥°¶JlÎjˆ‘A)
5üiñ6Ëör|aB¾¹$é/± çñ’ ‹_R7âÜ‰Qó“‘<Û³ò°8¦ù¹rãeGÕ¹ÌBkò½)ì­;QïôğÏÈÂ¤^`àÔ ‚ôX{öæ†n_Cxìsõhú‚›u—!Wšñdp ÅÖ .Áæ0  9«BQ ™”pÓ€	 ¼¨z$6€ ¥’d ’@4üu™,?Á‰ğ ÊÅÀ=ÓQĞ†ùŞ¼?u”@W°å1Ø0Ô ÈÊ3¸N¤¢är±Î!‡³X‹ÒïÛrò…9ô~R+Gz…jÈvü§Vöt‡Æ×°9F«tşötáÁ[ÔhŠ¦25ˆ²ÏR•·#z>b¥¥§ğ– Õ~sér©‚ º¡DÄ“\®ÇN‰Î7°Ù¦Ÿÿ?ÄØu+õ Ãâİü'&|ú“‚Ùı¿¸áÂ]
òšeÓMlF©£47ÊÛÓˆ8Ò?ö–[+Ö^_§É_RLb«,ZTÏÓşnæşmyÖx8¦, ‡øl‘Aİî®F4	 ¤.ªß®7 Rí¿xı”|A£Xè;¸†ÌyìÄIáûİ>°ka'.<Ûo¸‰È7ûN´®Æ¶¨âK×°Tê¹ú„4W8wÊCf|<ƒ)4—N(/Ûí6œß›ÇÇ7WA¯ÛŒ£°PÒ'İ³£ï#ts…)üÖúwİ©¨J†‚hÜ„I DôR@ÈËÜ¹±8”iT À]Aêçˆõ¶Ú»@E¡†µÙ/V0¯RªRÔÔÕ#Ú”HqXZ~¦›ìg°0;ÛÓò¨OM}h]“–FÀ!ú»±gy-Oëz8> “üx»v[ß!
ù'QE4«=—ˆhœ^y-7¡¯{ßõ59„şjÖâd—NÌ7hV²³z-ŸÏyä]½Jµ(…í4q9—ÓNDAzv13(X±Kì-'Hã­Éš¶Şh¬r)˜=ámMó@dC›İ-é–N?Iz®ò¹šĞâ+­á‘ÅšæL©#Åáêª~NH”Ag\œªÙ†[&ÔØ8ƒÛ÷?ÚXeºLëX7Øµô¢ˆ‹…­Lû0Ç×|šÔy»Ï[şAÂğœqë‘Í»Ëórµ§‘š’ìÄJØ¹Ë,àŸ£¾U'§£)¤ï«Œ)¬©È'>ÿŞ~^'s¨5\’ÔgDèŞ6/ KÖzl2UĞEÒí‚ì8e	×òØö|xz0™©Ãºc<Ù/Ïxi±,TX0³ÑÖRzàƒ«„`:á:ÚC1£D_)q	Ğê-B‚y&1×Œó®\Ì™"üdxÍb‡\jv–Dó'÷k9j$ZÀûšn¿-].›:Fù*Æá¨M¶]Ñd~(Ö! ĞHnsnÖ2,íGW`¨&"M(`+¡¤FfË¸¬ñ¸]?-òQ¨’<øîuwş££ÊÊ,×ÈÏ#í&*ãœ@$q8npäĞ¯™R_øı5†÷£qÃ'¬G‰o*Hú»X–F‹ÁğÈ §àŞ	có¯‹ÜæÕSÎíÑ™ŸzrwXjm¥\ï×œì·9ZûâŠ“véšR$P|¯ƒ\à›÷\)^Dø éÇe^S9ZÒ¿{¶äAÜ®YD½ıàŒÃªÙïˆ.<M÷Mİp‹ Æ¡H<¬üÕß&õºğGû•ÕR9d¡ü”¼3¹P®¨ššàáRm	MÇeüŠKEÙ‰úü6tå›†‹m¬Nc MŒİÈ÷uÓÁÅxÑÑjzvÈÈàKĞ¤.I&v468ïƒ­xM÷!àhæ
,²uİ¦±‘ß^,J·9&„ş§ëV›ÚË?, F¼®1ƒFİ^?˜›#4ÿœ2uæÃ•©Aå–IX_Ÿ¸Ôw_²[«|ç3Ô»9¤Xñ©#/) š’HßØëÌ{ö¶]âNcQÚë$ºàgp]eÀÒ Æ@^bÛO;gLW»=ÔÃÛÂ*è™:`]`4‚¾ƒ—|óº)§71Ÿ¬JÒ”|˜Ø(—InèØÔN´5†hĞm‡?\£áÌHD‘Ñ¥·€ˆk…wAJSkÚ4fZ»e÷’i‡Àïy->”ê$í ”êó- ÏFB>Ìîíıš"Ï…ä4ğ¥¦÷ÑáÖóKÔkÚS÷hdW•YaS’<ªå¡?fŸMQå¥qâÒÆDòİ^íôãd>kA¾äÏ&É¥Bˆ\²l[O@r•¹ß·6Ôå“FW:©LÂHÓ†õ–,Ëœ	òDÄ27š5±:˜”¢øïªGçDÁA8‘]}Cå¿œ@ñ­<£…v“‰?SàÈëŒY^˜e]Fav³‚‰(7Ò²,Fœo	’wd ½Ù>Êm7tõÙêT7ñIïéÿ³#ÊêxCüà·X{äçÛ"µñœæ;©Ö¿ª1ai&]KF¶ïÜÕÌ’.W+Ï-*1@S;d¬ØÃÇ|^[IÑá”¸¯°†ÎZX±´İî‡2'Hv0OYbX®È¡c2WdÙqîÙÓõy;¹‰%W]üÑıÜE	NgÏ½1Ûp…¢@~I[0'àêâ;Å¼lBÉVAÃÌ+ ‘yQğ¬ºÖ+™¨ärŒQÃÍ°Á°Èu£€Y9ÈÔbÁóãBm(+İ#ã¾ÂK?˜r¶[7P”W^â<Ü‡"â÷$Æ¾v(}˜UÇby0èÏœÏk—š8K%—„QğRÜïQ|–ÊUR °jÃ(¢…'5|šç _%Xçèä)Bğö"/¬QÏ"+0XP!áúÑ@OKvÂ~ˆa­ “(×=¹ü+^«¯¸r£ª¨°A-’^@Ã—ïŞtäG!$‚Çb“d­”^aŸ]Ğ ÜÍ7št”¢¢qlT§	«XülDWÜ½Ê5æˆI¦£hs›’&ÀÕ&m1ß#O‘bgé°¼ÆVË×lõ…àkrMTÂM@œƒ¦µ§W£úK NóƒÒ®q'°Ç‚ÿza œ—ü%®ğ[ëO¦Zygd,%`a—Ü"j4¿7‚Æzz¤[ Xç:#aekÂ6[%Õ÷2ØSk§ı·1ÿ28×lÁDÛğ\aNN>}f8y°(Qşe»ó M’¹)8…^ıÊO‘Õ±‹KqÕ?”$`+Ñˆ£œxKÄ¢’âÓÁ¬NmÊEkhk‰‚s‚zÌç^îúVV)ŞNä½®XåœªÒ@e(Šu¦à\¢ê¬3l¾xş‚2«£Y#{’ 
L 8ö—Ç.áôğQî"Îe¨êûgÈ¦"¼¬7ÚíĞ‰ƒa_ßÇµ$TXğYÂ£äîÚhš#”ÙËbn®j^å?†sZSƒõ–5­/Eö~®œt^J'ØL^Ô l*éoíU²ƒ@â­ ¬•Ù¨VíºÂñ><àß´â‡Ælå…¤ã‹\aW‘@Å{…‰'jâùDî¦>ã9"÷ÉR‰4¥gYYúFúyÉßmR7,½Ø¸{QŞ³€şxËHÍæ_›\ «p$qMƒ/Ä,HBËˆTXÆø›­¶ºıYtãI{×ÅÂK—.¡9Õ±	¨ÅXç/LÓ$N9ÿ j›ç É¹şÂ¨ÈùLÇı“sDß!Z*IFÜ›`À6eêµ/fxÀ
t>4¡ƒ5¾ÛQ€Íí¤ÜuAŒK\ĞÿYkƒÛ>]ÖŞæ¯ÛúR½Ë`2ËÜ½L}¸
şŒLé‚¨àB,İÕ’öi¼QB¿¿,Z”S @ª~šâm‰óÃñb(\9W4°©ô
´JD`àÍÂ,½¼P²@FCìV°AçÎ;ƒ¯Ş¾o/é£ò™KF}(NkÌaKÃÀÛV­â+wïphik®•‘‹úvg´nS~5õş‘œ6Y¸lû$°˜S… EY}hÂéxwûœÄï'ñ^d¦«Öv•ß”stŞîhTfi¯şÀè#?Mİ’U,H/QÑÏñèŸ‚£–*üëY5±?Áğ!|Ù¹KSZTè™ĞÒñN1=RÄè$Rş³‘—>.3P €•wÃØß˜4&÷)ü×ÿ‘¿Í\D´ÿ¬6pŸŸ;Ú¶ÉÔQJ+W»å1\y>~Ó+™æQ`¿C‰FiÄP p—Ú&›(lêó wúüpU™uUÑ„Ò’gdg-.°J¼šî
¸H„7YÛY*‚{òXn?Ó¸¬½èìû™mhtë›CşÙ5Ó¦(v†­-Ælÿ·‰uD¡9r‚s(R±È€}à8 *ÊÚÇñı¸Î,±p5£wåæCÔ}Ş-ùgKÜ
`–ÍbéçªƒÒZ|˜V<U+° ëCã6‚'	H¢‡T7Åæ1WàÖe½lO}s iÌâ}èD]4mó3¹ákä@“‚¾H³“†’¥ïL5^cVò/In|ç-è¯H)ˆt:…ÏÒ«('²Eåö¾ü·ªwîÓ¨”vªõôDÈ‡H­Wß1áO¯Pc¡ŸœŠQæ'yro@†÷¤±#úAbm!ì6–kmjÙCÅ„£Wqkòà+à* d#s—0­“”‹E-Bğ­\sS¯ˆÅl¬¶=°e"à+F¼Ï}Ô7†{—²“KŒr5Aç_·@³|;“G	Ç³8Ÿj²İMzK=ÅÑat©°”C¬1Ì¢îÅ`ˆdBPº*:3TäUe1¹¶MëeL"ÓEFşª^úÒ7y11\¿${+^‹ZêßÂ¤¶‚n××š¢˜S™b1#§	ğ5j]1iVsqĞ¦;¼{"é^¤ûBõ cŠÇùG¬pHöá¦n¢æ6\"¸OàµødŞŞø€qH5¹/w-Síz~ï*¶`¯5«L¤´¿«•…@ãü-L„´Vó—ÚŒ?5TzTŠ:(Ã?ØX®·NŠèÔë“zÛáÇœŒAâ²Ò&|h±ëJ,•OàáWÈ@=]U÷Õ”w*1¡´ë+÷MA´–¥Ô4…nà…YwAÑ6ËŸ¹bpàÁ¥İ·éoĞqº5®:1bÚ‚;Çätƒ	8&¾—´ç	UÈD‘Fú›j™¼»JİúpÄİöSlÜLòodè%¦Ã	úÕ`V~8I›L¥RªÀ4Hê/’è˜aßXCişEæ?•Û§°ÕSŸêOƒ›ÀédUNÏ¥+U›TÌAÛ'¶{UPöYÒÿøûv îX"j-ÅíÁ•LS‰f±Ær’ÜUÖa>:WWfÆæ¢_µ­Õû½‘w+uò°á²¼Ázİ°àØlZô\êP ˆFÂŞÂöbÅòŸ¿Ë5˜Ô6!ÜMgª'p ÷ìŠ­ôí2J¨æ€ÒaF‹V*W›Eªsûf…OK§Úw‘ÇŒø%.•Æ€€œ`œŞå5Gj{W÷ŸİƒK¤¶Ã÷)Æ+S€©âs¶Ï×yI&½TÅúËAQ—F™È¤‡¨Äu&¹ŞzòOINÉZ÷Y"ÄS8ZSú»Ÿ¯¤“¦nvë•¶4 %\¬ñ`&ğÑ¢Ájs„22M‹š¶ÁÜ"§T¨Ó–Ì G’4m¿öÏ²bÉzm™Œ¸Ï¶34>#Ú)+YÃÍå6X>*<ÖœW?8y)ñ›Jj)¢åÁy£‰]ùØNa@t•Ğş†Ê^WşÇÇÕdbà%–’ÌjOÒ5cœt`°_œĞPğ"Å¯ACêŒmÖ¿îc*6çÉ–ï‚ÌjçĞsS‹‡$øS¨ueÆ¤Ê0†2^U–œ`Vô÷ M›JáÑT^ıÿe!HUÜ›@fÈó0äïgYôÜõ‚óºÜ z/.GØ¸Cm¬)×Ä¼äº’4sc+rÉi|»¸^Ì¹ŠumğÁ|u ìÔ¿ÙJ+qÓëİKN@¿)8'€hm£È¸­°¾1é ¶ËÛòæ;¥AÎ ğf“İÀ1,é8”Š yFÈ|(n¤êû—ö#BT ƒÊ?9"¹÷x†ĞÉ¼Y†ïçÂ>ÄèBp´Ö„e/*†ÿLbVQ{©ªaåqĞmx®ã¡è#åÖJ2K´—Ç±£q¯òö2X¿š+7q™cï}úî\£í”2„ØĞg Z›4y] Rİr$Üıtê7“×o†«Á'ğé n[^¤‰Ÿ‘€÷_Î[ŸÂ…W¾d§mRÑüñYê ãv—ûİnêG¢ÖÚ4qÇ÷äæ9¥¸‡×éİbñú(.XêY<:Ñ›’€«ïQGs~	2KÆ%ıPKâE#Ò¡İN;«y=q£,k¬Nè¹ }“=Š)Ğı¡b¥IöN™¶sIØ—%¥F¦/Ã~›åEG«4ïJeÙ!2Éuô_„›^Uæ®Œ“‚Ão[áiŸ·èèI³Ùç³UÆ “yĞêXƒŒëËÎ¶Îí­ˆœÁ@†s³q¤s(±)I€
pìÃÏÜ1.N­ÑxëvV$’„‚‰J¶G‹2=şçüi‹n9+Õ-e„‘õJËC6Š™.ƒ­šxT»?	}˜ÿBÆ<zgzş»êE÷ıp½o¶×³êvHû+ çÑJ6z¥{YƒôŒJô9TÏm¿*…=1®†uğşÎH^#–òe‘8=üu¨>X’,YÄtâŞ6ğ¢7šªIÅ–?ãe¸Šë+Êğ!=z3iC"(móÿL9TÇœÎ^¾Ğ|Qíí±ü«d¹-©ô·ŸÙf¬Ñû“N]Î‡OëoVŞÄ¦°ÕUqOûfZ+6h²içãäuê61_g¤­û¦É‡@›“gMNBŸ:i÷Ùšb—xªÚö!—”aäFfÚùÓu²ÄÇÖÈée£ÔxDM?î:w}·joş‹¥süoÛİIq†=T²“Ùø–Œ®u’û:: À¯yqâ;F“á†š¶ûø›Ë>H¦"øN®6ÄXz³Á>™×ĞÓ‘ä|µ»ªëñ,GÈÙ^Xbvˆ~„¸˜Û,¥1JuEW¦:4¤¬ë|’†”CÊ` £imV¹ü‹.¬ÀêïM—¦İ»ÍŠ~f¬d§o<‡~'HÆ'ş"{ãöf¢-*°&æÅzÄÇœÏtÒ´ûfQwçšàŸW¹µ¼	l3ïßçfo;.“?0ËUTÊAXàI9/eS ;ùM§P#±u:[)v˜Üì2·-JàHD³keğ²Ü<+-$;ĞYîE‰ùu›¦šK˜£ŸmÍÛ;©¦m"ŸÉ­åşƒáµ7$_hŸ„¯eóèQšÖ@›Ó ÀOÿyl€Áğ&à"ìÑ;Ó ¼c£É&ÊĞkŞ´·Wy²ÚF‰¡îY¦Yq‡ »°±»Ä££‘®_qSŞº–/4¼Ùc)k gV¾3/}Ãİ™(%LïDSŠ¥0¼ÿ®0*·µƒ¿Ñxuë8„.Şß[Øí°|<–Ş?€Á„ÊqætÔÍóby»®á†ååÿ®ßæÌø‹\0ß†Pñµô¸ò½wW{¾.°Ç-,‚‡õH¤ĞãÑ@Ó1S œq[¼o¿úõDEV]†äôJz):Ó/¡’(#°{”t˜ó¼ÂÛzšÿI;
²XˆlTWˆçÃ™Ms»ƒ }ÿà†±^ÛÇ…J{eZOÙwúqUõMkjùMS×ŞåÒgùÇ«}#±¨•´ı¢EQ?’«Ô@8™~É«’ ¯N¦p‹˜×ß?l6–çÕÃÎâ7HÖÁ¦Êúõrµ+v»~“uâµÏb;øLì~²ı£’­ o˜äğ(ïCìÿh;(\o+gQ_ÕUË`íßÁõ÷tt¾!O&í6pyB%c7L›4GP{T™8ïPä"Œ‘ëş4ªRÍv²‚d’,3÷0gú—èråmÁX*5‹ä>bæà,2DÍĞ êÀÀD×øwõcÁŠWZ)ĞH“dola5O{|•?œ-¦°«\ûø;åt>“‹»…­… fê]¡‚‹”=-<`vk¹¿ (™ÒSpùİR0kQ¾ôîë¯3~qª9ç×JÑÈuÈR=ãÿ®˜¨W£ş¯Y-3TœD÷8`ò¶„¢Çl½¿ñşBlWmu‹aêq€,…âp”Øü:ø>ÔcVnß–”Ô–é+ÏÉ5Iæ†d(|Rg7;dL¯O©{…Ä·O'¦Èï¾stçÁ™hiÒ·"EléÅ´mdGQd‘µ>Ë2ŸBFİÕØ–	De7˜ùí‚7 ÏäWg“Xñm…m·°~‰C]Uğ|Šjë9–‡w†;Ö®÷ƒJ è;à_Â¦:bÇ$w©¤<àõ7“D&û‘‰g×ÖT)ßS&×Ì•cvIè*¥*æ4›,É:¾	Ó‡¼“ØpÓk%ç‹§.(.ÑT‰^¼Ñ!¼¡dxr8’ƒ-‚Hç¢¹TİåMÈAÍ¦,«	^“-Y¢ÌÀg1ò]Œj#²ú$¤&¾÷öƒ‹»Ã)¼\†Â&e_ŒùzÃ/Ÿ.©œôô;F‘<kUÚäi§±²:½è€!ÓY¤q6Ç´0‰r¡Æ¢Íqxx’’ÓÙ¥bóçÿö
SbWß÷>Oû¡9.ÆºXËcóº•+‰ÎÛ
_åÊÔt‹Úuíp|ŠÊß7ÆÿÁ2)ÁîŞ×]%9D½Õ¯ô%u…‡¿ÚÛ_¹#‰ä(.xÛ”î 8–!I=:7Ã82”"i®…ş^Œé®Yú)4ÑPÆ¦O7Ü{zJ¦kx2d×Ü·Í‘ÃÙ–ÿØ"ËOÅš÷÷Zm,LÒ°îlXÓù)üÊ‡­‚lŞ±)áÇî1j"kH~S©ßÍKÒZ‰¾zuRq©QCğ@& HÜÆ¿s<QmÒé1ö…>ÄÛ:Øüíúa;[¼IµıUñ±fÃ$]"~%’Sz˜5!ëÉ°Ü}»X4PA­møv¼Ì3ğÛÇ<y\UPØò„M[£î{¼ï¾xYŞ½âÍH¤ #kL°¡s©]ë| ]åšnéÖjê/_ğmXZòåN[ìÂŠâ£dÔÂ·]¬YDİ\ 5»³„Ë÷X‡îÁ]êd'5_ÈaGQ¸Eçé4:?Ù2á_!U‚·bcÜ¹›ó Y0C?‡M8s¨º*j€Êë)çojj9ê¼‚Şõéx8MqÖò¯¾‡<â|½]R%—ï” 'ÀÊ¼ĞOÅçã5ªş•9¾0{Ä¸Ñ|¼æá…B¬R:)!ÛõëËú,ƒ]=:o´ëjª‹okx-}TS¦	;‹SXSf7:•Á¼ƒF_ğİë¿—§P8»'Öçß­67;¤GiøÅP"ü·^lßmÔ§’–e…ªÿh‘s=O_dªu'_ş	èÆ©oešÿTeèGÛÒ¾	Ô¶šdŞw½HŠy%@ÃTï®m¢wN¹@&+èÂ¾|<LVğK3n‹xÒyÚ“—,SİU.ÎAM£Ä*zÔ
–â”Œ¹;ªL³X4&•È‹¦)V<' “n|·z¿e‘w©²-ñ4¯R… Ëõ«Ñ¶÷Ü.¾†À4œéOÎc½¢X›ï£§.„Ôña£*ÛòzäÕQLEß=f¥ÚLâ‡¸û_ºf×!™ù[xw}Éi¤•Ú\ˆÕÂÒIÓZÿÂŠ·ln[3êî¹ù}M^¹8Oäßëôª>6œy˜w£*nN«u`p±Xş·pÛ2ÓDuÎ¨±ïUÑQ)ª“zûfXiëÎÇÊ
¹b®ßIö˜ße/K¹•`†İ¥è ¤ÑN! ^Óaà™…0T8lDåsgHgL.3è×`§Şú¨6ŸL›o{cÉpX	,yØPˆF¤ú9ú²8l‡é‚sP”×´$¡ü^˜á÷'E«!W^À ²ıÌeî¨ÌˆÿyòŸ€Š´[fïÂ»TĞ¼ëŠúçÎÀŞ*°4"i×IYv`Š°¿4†¹4ç=œSö‚â`K¸ˆËëãÇRÁÅvÏ“çãêÖ,Íe 6WaYn]æà¬4ÅVÌ‰ø´x~YDnõ¯[B}^<˜©"th@ñF0FĞ¬5@!%áŒaç(Ûš!`É”ë{9¨¸h=ŠÓ ³¸‡D¡ô(ºšôvu=û#·¬õF‡xŠ»‡—î:7üÙ†4–­ï×/ÍNNÿ†øNNØŞ Œiçô,VŞZHÿ›:Q9¾ˆ£p¹ø°^&ì
óÿ!·‘ó’0«u…ÇÁ øÖ[â|aF,L
dÙ© ‚Ú+j¢|ü/+Pçœ
kı??Ú¹f~&_~­ôtdVÙˆ9óºh¸Ï»¤T=ËŠ&8„‚Ñ¹¤g‚€¸vƒxİ«·3Ô¦Ø­ğz³¥Æ*ùe<ôíÑF¥3$q‰gÖ×Êæ‰3®YÖ5Íø®%¡"†³ÚÇX/ÖÖ·¢KQî÷MëVnÊUjÌÄû	¼8ÊC«›Í˜	„€=›/	İºE™Ğ”*…]gæ—Úoá™ÂŞÿ`	!5ß4çw çêôOÔT¤ğÌ¬»M9·KlÇ¸ïÈÈì—o!CüCš…oêù/Z-o±r9	ŸÖ6ÑbTÏ>šÿ\C6`Mâ–Ä†‰â	Å¬®Ükëñ1‹/÷Y—ÆG[ºmÈÈ}‡éÒ3*š@B€ìC^pp?9ıÎı-Q¾¶ğ)˜y_¡Ûıl_3Q^Ôº˜¹×£ÒÏ‰[ª3PŒ“vÚM	óRÕ¶çÚéï®Ë¶18ë¹¥Ş)5¶Íşÿ°ùiîß]*Y¯V(8¨I&šWÄ‹w;×%ñS	}ïêm Â‡Ü-Ö€XÕ k‰¥¯9°sL’È"@9@c Î:…DÑt™–¬?ëİ~¿!Uî–®X
cP½ËVRÂñy’z°Ğ²˜g÷€øÙGÖ;ôîô½2t]Ö?MEÖÔ`œH+ÿËÚ:&]‹=Ï›SSu1õ0ª‡oÃd’£‡<ÑU³S™rƒööèøK/æ=m¶şN*B^,ù7¬¾×¨RÊÅB¯‹ªŸq-lº¦ûùµès_³êuK¡@Àª½L¬÷öĞ} U‘ÙéÁ–»™å¤ÎµâÜs¬åĞ¬ËÆ 0Uü+û%Pfšˆ2[Í\b E@Sî‚QÏ’Å¶´ñ¥x=(*€á>Åv;-H¼å˜«ÎªK^¶4Vú »,ÏÆ¢5‰6A<H_yÏÄ}£ÎlÃGëeáSp·¡^ÖG:ìRòôÿØÊo´ğƒºÀl&À«-…w ªÆ]L\«Gƒ×4ÖÃ)"_l5*]&•Ë+¬Ìb^-ø,£üé\]­ş¾ºF}^ğêÚ¢®åş²|/Ş=ûÉ½yı«Û¾ç²8†„Ù¥ˆÕª2ºê
|XÜ¾_Ëh>äàÙ#¦rJDGFØñO%Äº„ˆ<ÎGZ¸+°êşnÙ,¶ «&Öz:Á®{2úÏ‰<iÂõ€Ùğ	ªÑ¦€\{ubı8Ë¤ÄôüïÔŠL%ÑèÇ@	¥»‘LiH¥˜e_ÄâØk91÷…ËIş ÑµTJr›×ZÓLL+OC{ì­/
£	|Óëûq[:„šjù=­yÆw”Cu;Œùe(!wQcÀƒ€BËŸswv‰´ÃÈ…´in´‹¨ÓIİ_3Ö»EÎ½[Eè[]x¯¨zf¢B(LH¢>Éı=&òÙ»vûKÇœK6±7úlh²Mõp¶!9IïšQ8°_î-i–_£%ÂÊ¤Óµ×¿ƒa;a½KÉæ^u¥ù›^Ï²ÃÍÉÂìÖzfÀ˜‡Ke'3»Õ{± Ä”ˆĞ3ÏA‚gÈÌÁØ¤°ÚsÕc…£r7O—ëåQê˜TË„¯‹Jd×Ÿo
m²añìM9ÙG¨iÎE@óy*´z¶ OŒŸ ˜Qx¿|C¦édxùí‘²ÿ@ö¿çO ÒªŸs>¶Õàz‰>úÔ¾–ƒl¨^ƒj„™†è¯ĞØa²ÂÀY¦½bjHÃäÈ_,Öıåªó×ó"Í	Û9õF{ie…”Ó—+Érã¸rÀ¨Ë;!T†ñx›‹+]Y¡–
èãì·ğšäqLv­E[3ı§åOíØøŠ«ãW‰†[wÑ@–—€4 Êg9ùÆÁ ­A2N®_s6ãÒ7ÇÂ»²ºş±É¿xåè+j,	jÀ¯¼Ñ şıpúTšâànñÏ¹»İ4€7 ğ÷¤]qŸú\¿<ÖßíÆ±ğVÌp–B“5”ì^î ’LJÉ÷*7éS£Ê¨iÏã€qXa¥š’9­C+íE‡Nànº4oñô•)IĞRkwğ3ë¿fEÆ­=O^¬i<ñ	öˆ8h,¹®Á•ö}Ò$îĞñĞEşû"²¸SúÄ2¶g1gÛ«é2ıcQj”«Tğ[&(AŸTá¯§Ë:Ì·šN>Š+ñJí’ŸM§¨°ÛÍš±³ÛÚïÜ<# ÎPr%~M†[j;+¶UO@W™CtOùºÉï0Ì/ M›ö6A/o"-ëš‘å]Õ¨À¦{…Læ¶•£,àĞ‡™ApYè 2¯Ú~©R¤ré-Õ1fÓÙ—¹2d3ú¦Æ6:ÕcÍÄ†í]¯ùrÅŒªiCcaş¥ Ä:h°)\ÔŒ
x^Z“±!Ã´ù¢6Ó]yhù9G/Í.É8»ËZ—5kºÒ#‹ğzrcJFßãOÿ$ñkV?Â2ƒÈoz
;a*,’U|Çó)ô!‚] Oq¢JDÌH&k¹:aìøüHì¤ÈÍT4İy¥¯ÃG¶€ƒôâãÓÑüTŞr¬‘ÕE
ÇØ/…K»X|çVmîº’CÿÆÉÆ4/î¯ò[“iÍúIşüEÒù–Öús
kLÃ~6şï3Pù	{ôæ/Hì0E2â"o‘»(5ŸÈC‚ÿ=Us3Uá>ÙéiIü±†:ŸŞxª)VìÉU.R‰Bv&õÈ 1K|)¹•iY;)¢)~PÛ¿;5_­—ÎéÎ¼‹9Ò.J¾Ø¾5µ7^C‘ÂÂ•Ë}çË*dî~d‘?—^g¡…Ş&Û=È1¶ZûjMr‡à†ÊÇ9’Ÿ™=>~±˜ÌÛû(zªYdaéDê›¥@Qüöl´Î;z<‰q‚WNl1eƒÖO“:r*§åËÜ£Ï5¶ùœß×kœş"o%ÏØnà#ş‰oÜ½ª&Ó‹¤sÍãknı´™ÉDÍ\<9PO‚‡m‰sôL°TzÇø¹ÙP•(¯ßXZ¾7ıÜ	\À.1åÉÍP&•Àşí¾‡¨ °K4ær“0ld¶I6ÒP`F_ĞˆBÆ1ˆ?w lìÌ´*!ğoÇ«·h7ş'•Ê}äóm¹?N¸AËù«ÛşÕ …Ñ8èbì âˆÉß6©#¤Y|šùØÿ¾cY[ü[ŠxàHª´°¶êl˜ÀœËÙ¿ıq£ÒòÂ’KaØİØÓW%¿ŞÑĞêáYÂñiMÀº]«ü],<?ƒæaº™ÃŞ´<MŠÆÅĞk¤*âïëoG£0¥Xu“ÿ|*0Ìı‚båz7uÃÎĞ‘š†ûUñ&†¨b*†âÑ†­kÊr
Å©Œİ}Ó0 «äÈt&PaĞœƒÚJ×Ü“â1€ÜÉ^	d+.AY©“['îr<"vF6‡­zÚ‘9\Ùr¨§}ûMí×È—ÕbkeNl	(tm>MvW¦¿P,‰:û£T2İ'á0/l=KÎ¨µ}T´PÚ‘š"™¬-#ÎÅw¡ö†ü>¢FW„Û‰Ù…êşÔON¯i”$	«fkÿÍ97áÀ«ÀkŞl8’şì$¡jl­NéÿLÕZûˆPg„ŒB!;95+ÈÔW,½Æ¼™Úµ*ÍòÀ5™RÎ<vïÒ3IÅ£>ÈÉb¥…¼j‰^Î_§V,ğªÔÁÁËÏm¿½Î	u=òi1– ×‘¡Æ–î“ 8]ÄÇ¹ v„ï¬0qØ•¶½Yì+_Èî-³ê»hTááö´¬!ğÛKKFïîÆÀ~z@62J%vHo´¨QŸµÊd>Tbæêı/.V5¡Şz¶1HSQğş;q×zhw‚1øÆÇƒÙÿô6~{&Ø’½’çi»êº{Á¶¸µxNåÎ”¼,là»Èrà½†@Œ&™KtwòbØëC©ó°AyYÌÓZ´FŒØ3¡ÅÁxJIÕáûÇ:¨åsYâ©lo.r*ŸÜëA¯œ)IÑ^dœJ,Ç‚ÃG¹		Ù’Hñ[ 	¦¹%ÔS,È85ÚSzuoîzÇ~¾)­w:Z­­Ö¸¿{ªÉXŠÃÁO™ùèÏP-ÔºaÅÆ6§@ğŠ‹ ÿ…ãÌs¿îÉìô\½rÇN:rK¾†0ââŒ:ÔzÌlõètrZ”\y[ÈšÕcÉ³'Z·è(7…/FÉçAnaá¡Å+QâRËİhé\´¿ğ+!„> …ÖÚ¢/ÔÌx†k>V²BíÎA4Gdõ ÉF{©^À¼ÆÕİ®lœª=7L ëØ9ùFRO¾İ™'N;=¼7ÌVrûšÄ½Ä¥üÏí¹·#±ä_ÉŠ`Š]’ÕIã]+(XÔ‚¬ø~ı×(*Ióô¤x°)=ò·“¬_B¹‰ñ¹õ.Ãï#.?Ú¡Ã—>Ú‘ŠMTÛÑ"ü0§_X‘ú—¡YöpJmsz:^
yÆ£ÑMìñÛˆV=z~~(füJÂ‡#OÕö@~5½ ßøÊKJÎÕëéƒƒ—. ŠæÔ,»WTü„sš,é
†éGØÇä»:+
m‡X•Jµ´
è–­¶é|™i0)Yëÿ
	®#…â¿&­¾QQvÉLº·M¸MŠApvnrâ~¤éUCFÉ3Öğ“Æå‚vC¼nÉúhJóR÷\‹Û†¶ÿ»(È WV”¥Y³xñ–ª'LÉSÍÆYqKf£rYÓìi ™å–ø‘j½ìÿ·kÎ³¦†AâYÁ±¦Üã±X?ìë-_sé»xÜ™Jé2ŸøıÀ‡/¹åJ€ÿÑ©’“+É@âNëü#iÒo]2ä¡s9´üF›íæ'¢#z3e^oñ¥S>Önš ‡£o((7âæçŞ˜iù5¹³õòAv¡ã¡p£kFßØœÂp×•£Í¿¦ó_“æÚ½î%(³d¬è›/iŸl„z›v“íòà‘1dqú!¼"B"Œ¹ğb¿•ŒjdËÌ%mÂ]
Vø3kÌ}HYÕúøˆ2ekÙ*†şñ+õÜC7ŞVqš µ]¦L…Ï|.|yZ©Ç¿ØAœ5ÒWú¹)&'7‘³ú6*Åëmsê›Â^±üCO¶Š}÷m†¿üÑ%Uk…û¯L¢Î‹İ.7ƒÑÈœï)ÇäĞnp45œNáóöcC™Ò‹å¨µ-^	mÌï›¬VCŠâ¶Dâ›‹SøZˆ¦‡éŸ9¹µÂ&v3…)—§®:„"ôÄ>@fu(›3y»l	neqøB˜Åöªvh3R´îXÍ«Ù‡È+WÂûø®s&ù-§SPŞ·K¬·dñOjù½Hav¬ˆ@õ×‚ôyL¼öuˆ|¬c>‚7z·rT{ÅWL³,&[ŸÒ< ­çåğ&à3øOæ±‚¯Æd¤¨ÿî¶ÜwN*°7el ªš?§ »-nmbö†ørÕè§¦uÖ†·ì>Ö§/ŸØŸYòÒµ(ıŞÅöGò¦¼|c06…(¨•mµ†WµNC|üän÷ïğC¼§}××ß[L”—g†p¡•¤0‡Íï6»Œ¢“ˆµ‘d>WÖ$–ãEÒáh¢Ñ«Ï«€Qé•˜…>¼sÔ÷İâşÓ¢Á½ÿÆFz<¬¡ßÊL´Ç˜iûûW¢Úui.Â(q¡Á#1á³çµ@Õ˜Ë	7ÌèeçL¥ é³‚„WÆ©8±jo0ÉÍD™j1ç$ËØ€ ›©Å!ÊúSß1êŠÖ±n‹\L»qèFÃ];šRÈÿöJPq%P¬Šd¨S	X´^ÛàúO7ì‡Qz_lÜºıRu†ö÷õrúÈšyHR÷zıâtmş¸fÉ×@†,âŠó èsÓì I‹:¡Åğ¨ 9¯_„8D†:9˜ ùp¯%«¥Ké;!)çäãŞ/[‹/Â‹¦Ä”i24àjñü7´Ó˜æ¦ÃŠ´úOi\×+[×›û±Øc1´é2µ$ËÀ$¯…v¸WF–×Îáin}_ÍqWdàÎ¼¯éëeíÛuÀ›¼oŠIŞ†P~o\å'²øIûÁñÍ‰ÁµvmÌIüG¤Aés‰®
šH²[¿Jßû=L	M­†ól-®*å´uY®óâÁ-„d¶"VËÃğÇ‡§\çº‡Í ¼îÏ23Ğ­<Û‚&6€÷îüäÁØ»M†öŞ§mf¸YXü‚‡¢û°NG5":@Ó/õ4“NûŒKkbpé7ÿcqÚUò2ÁŒ…v»ª°»g´mëHÅ.	x^8X‚>¡İøá—ú`O`7¿–…wæ©ÓôrJ›ÀCEøŒ›Ğb_,“6ë6Êƒ„gå#B‘-*‘Çp±¡AĞ•‰Â­<J_Ÿ^j²	†Ò`,‹3lüc´9)-İZS
,’gûÅÖ/½iê?Ğü^0ßğ}¨ƒ¬-Èqñ#[—wûígµ®ë,¥áøÏ&?šJªƒ>PÔä5n¯_Ü‹Bù9ã‘Fe€º‡ô®loG`£¸
²I§_ìê™?W±–ò#q°·7!(/§µÛÌF_,"såN[å#ö>Xxn¹_êõ$ºµlşuáÁp*ø–/N¯—hW¤R$ì¢á+$WõİîÒR`–œ9Üçk< Ì¦=y9uœ·¨Æé	}
6å|°¹Ùata­¥:C íw.“àAŒm€ıti³—¢(Ô½Ö©ÑÿıŒx£oÄ"ÅùjÉ~ÅjÏéÅÏ&[ÿ H,lä]Ä´[&€ãùE;,W™*Ä‡ªóNÊ½¿E%X</€dckË·Eè^‹tæ
hÅ5¹ŒÃGri¥äÀŒë1Å<ÜH h&f¡BÅ·›ë‚Y‰ÆúDÈ¸ª0³.¦M]ä9Ôc•²È¥ªüã$©.¯jF‚W-}öÏÆ&èè NrO°ù»âo-rS(‚\iØó9Èåİs+GĞö“¸auä`‰Û”³ä@ößÔšOEh	ä5³SúÊš‡†+@ÂŒÕ3:Ñ ®9êÀ»8¨İì©™óVŠMfHpOÂQM/éòµ–ŸDŒI¿D	}$‘HWnÖÒ•cª}O‹ñÈÈTì'ïw&ëÒ¹"pu¥E0¯*ÔÖ•© ³šì"¦©'çm—Mš~åoÆv§Ùİõ_†œ|*;q“Ş Ì€)OÇª/7zNpN·µK6K8‚ì“ ÙA7ï¨¨1L1‘Óˆ¼Z_6 [%Kf¢@3k«ÈCSg •mö›}E±û°FV@tGÿßÌÑ8|›Ÿ…¼íf{	A#[cv|Æ`–/OS6Q·¯“ ¯ìZôJşÉ86r9r\d1­Ê‘lI,ÏËêâ[Sû?Æ¨|­‘kÌ²KfK«…5æô´†ä6|§êÒrL¿õ	ñ>>e0Ø™£"7LÍ¡e1ğ’ş—ÜZg´FQÛ³Y=.h¯ÅÇñÀ&ºJ›•Á”}¶rW1½‰šÉ¿š§œÿ8¥ÃóìNK OÊ’õ„xQq÷mÀOËæÌfTº1¾´ŸNõî,œH^°ÜÏ{ºòÕ€!‚rŞ+v¸îı¥Y =½Lgrl½bãÒÎWK8L­„»›4Ab¾ƒanjİœrÑ©¤
xŒø©Ağp÷:!vd&ëäõ {¹±qôÜŸÇ¢ıv78ÙIr§ogÜ<ò}¶p¤LäÔ(±[ğ==œ,áY?ËbÚö¬Ú&Œ¯¼­JZ~†€æMßÂóÈêäW'§\âu°89srLÏÔÏ’gQ×Oì=FùI=+º7DÉŞıªÈ‚ÈÎşõPêwg±¨£:uõrˆ:=ÛØ¹K2X’7úRÅWy+`r»tÌfqrHo¾Ù&
!ÙOØmÎ5Äæï¢kÓqFştäÁ•5•…°³D'¢Ú0º7Íú'æÅ¬*"=õN,êİ#Ù:Û¿ yñÍ·I%xëÙf
¤¹•ñ²³Ø-ò"qÒ¨¥¹qxY°CL]H)(øJ¯šÕ :Èï^ŸÖûä‘ÒËõÜé²ªGøBŞQªDKwyÆ¬Ü#›1Xé Í)oïô}õã)cÜ›è¥rDrÓ…ƒt’·iåİqŒƒi^µQÉ¹Å\#‡™kşÊï<T¦$½<ØQé?¶Px¬‚Q=àfEÎW0¾„¾byæEWÚÄK|¹?¨ÎP‡]^ŸöÑ)}||“Õ)©¥¨ÔdU·GÂVø‰¦ãæVŒïbUßl.ÛO6àËï(EQƒŸº8^~+aà–8Gß×Z"¾ÍØ‚©!†˜6Å–ŸSŸ‰È>¡/µ¶°@ÀÊÀœ7ßÃ®©4Yr¤FÑİ04ƒªØxºêµûæ0ñw&Uì5=ôz¯+²´[˜ˆ™g9Rê”€zq±ØçGÍÙ‘W4æjælİæ÷-^µMK§e6Û-D‡½â=¦xrz`ˆîÛÈ¬OS$Äƒà«å0×D¢/3ùB^c6:ò²¶¨
Zê¢MÁ3Oë–ƒZ$²LB¦I3áÖ™z¤oâíyº*Ùıï3<[áÎÈ- …¶ÙÒc3ùLa¶š]líšÍw»ä‹-vïw¸	íA»ß“¬Kb%Æÿ|¬ñgÂ¶ãUÿo¸ãƒGR|M “šU†>{Ó`y¥Fçÿ&Œ§VAÔ„È­›¥E‡vØke‚¦ínx½QšRËë@Ò%°¸L/oÃõŒÀ$¬Ài-ÁÃ=7ñZü8°u<aÃ1Ñù
›U@?{d~èLMæ²Ë4à‚˜LSËrÄC;T½}â{N—{¹£aÏGÅ’Ü˜Åx}q
\tî¢_àYÙN¥qEïes%¬@]T_GA»–LÆgèıèí«A“X¯¢µ)4¼ÿk¬wí­Ÿ¡ñ‚û¡w‹¡¤RM7¾`ùäE”Ş]õ`½£PÓ6ø6qÎ­­tPÒôBo_¤úskmgãwğI“’LóAÁW­*“ÓY”Ô!†„)½ª\Vîù4p’#ìÚ~Ù[ ¥%M:ØºÌıyüyÙ3xD¶®'%EwQ½ÛÂ±0‹òÙFº›n&Á{h™’Â?yÇ¤dëL|lº³mÀ±Àyqëø÷¸ìøw€×H¿,(ïêofe}C­©1<|û‘#[!‚îHõşï2;íS5q<|Š²CÛ¤ıŒékš<½X¬‡¬=¾k}êì¢¼»$‚PJÅ­®]í`™Jã¿!Û&B`šÒš:jxïÛ˜·o¯á÷µíJ™ÉQ-HçTå¶5dn4wR¼KÔ×Glé»Swr?ñXò¥ät›a&kªl&Æl%§®Ö,›ç»4F¦Hbuë©ÜÛ(£ñÃ,Hi˜vå)Zà-×REÁ	 ŠDïW±U7=ØRğ. õÌE‘b%lêœX÷”•}ZCÍgL´,'7¼èN°},—b\_y¥·;pcj^g±9Ö‚27~ïØMG|ÍM™¥u2Z3`_\ìw‡÷ö7üg¾ØÓûàz¹Å&)é$í 9¡:óçL¸gæhzXµoå‘ ÜúûÚL'­òÎğ{‰¦êÀ8‚ïIÑÒÚ	p‘vuî'óéğ ò3P: âÌÒkÏ=Ä¿:ïpzV¨6¦f‚{Wè\øc.œØ%Oªìd)õ‹…/Æµ“Şô±5.£Ç{ÉÛ[Z"4~Ç¡çtMĞN)ûø¸¯ÇĞ1ş)_ŒÓá¿oÓŠ=Gş”Lu`Ø^óîJz]N@ı›UÁñ*§¤ MÈ"ëÙ•`5¹ÛIòÙg
$ˆøçşxàÕo&oĞ}Ğ’ÅÔıp;¿½ÉôJÛ8¤(ß.•Ş”†\õå¤J˜è·XË¢¦¨ñ+õJÉ ;öâ?&_Ëˆcœ·öl|DävÁµ	Gé¬c"§ÿ˜úK˜ùC€}hê
”E^Añ­ùSÁ©!»ÕšQ“ÿL1_öà`(zZÂ*¤Ş>«Òw¿‰A`ªR‹®–¥—3 û°¸¢è+â)@§ı°ùó>íƒŒ÷,óÉ®ÍCëµR«-§ÍrY~®è -òœ¥ìE˜ªTNÿ]ú!šû~ôyºÿ{«“ =lúj•‹«„„ÿÒmøÑ’éØ^!v(\Œ’oØPÃéÁÖ§ô­øïUˆ"9Õ¦^ÚØ|û—ĞÚÔ¡ÎvöT8MF¿¦ù\—¦*©.!Ä!¤°?7ã¬Ø
X¸&fâJHqöhƒS–Æ{*·óõğåÿ\cõ÷ozÏI ¶¿r•¹!~=Mü¨ş
#ÜzÑ‹ö¨à–²ªQ59XkÅÚJBCF(‚†¾ÈŸø>À¾ 	z÷¬ÜrU¤'Ùùh©ÔñÙ»+65xCòÃm`vÆFGà=9$Û39|‡$5]:÷÷uå/¼ùégÃîñ–Öm¼…Ø7]¿/Ïµ—÷Vÿ˜Ï¬|ùZÉ-akõµƒ6ôBJ–Á>GÃ@Ì­Î8G=½ü@_+ıõ8€ş+ú’VÚ:şï²¦|CNİÀp‡J¤›ÉløŒ™ùŒx»¿b’|GHyµÌÌs
‡Í„øx¨ˆÃ0R?š‡+½%öãSëh:›WVßP)¼OÃËí¯æ£«!Úk”‰v_²ÏÃtíå©Kß B¥mJßû3svA±tu¥ïçH×[mšñÖqnL*¬¢)mjÜÔ:á	Şd¯6È½oºb|ˆŞŞ«Aè’/EeÇ÷rŞ%œé¶tú8R¯&ûç˜½Çû}ÆÌ,@—ÂŠ°Emõ¦· Rœÿ¿E¶ÃV¬ÒÑ¤õÛòñĞÚ!!”ú!Mé¯ë3…Æ 3U^mn·€_†³êıjà×1:HîV;,‚Ç•ÛFÚÔáD‡ùÖïWëÙ±2»umÃ=J¥†€ØúK
§LI­œêÚ^hÌîœPÅt¸Æ…àİ	çè´—¯n<oc&« °á¼ÍŸÿF}6ûÆ¼’E¼ÚqŒwu+Å&fáóÖ¾<‚ÇS~gFƒ£º¸¾[mq#I	¸Cs¥°·î;æwd‘ôè§ÏêÍ°É°{‡gJK;¡l—ä g›¿¡<ıo19ş|=1#Ñcá	½ZãÏm3;Í?£0L‚¥æ¡b5›5¡àíŠÀìqmk³à¹”;k4şù2÷„Nç‘¬Oÿ&I‚
0ZÌÙLó1wÚ–dÕíZ—† •šöÒ‡L-¾½¢‹
>”Tû-QX¨¼‡§]iÚ8À®4YÎ"'&tÊ]‹‰‹&Ái~Xşÿ8¨ UÓ^šR¸§¶!íûío±óW§Û9,(A°Î\0êÒE{É3.eëQŒéÍÇOøÔÓz·zèà™ÀI2‰Úp°&¤”
õ7WöËó' €ÎÏÕ(ú¼:.~
ªêÜÅÛX6	9u¿ª:sl+ÛfØaWDY”¨YW-µNp9ï_p¶dÀêgw‹¦ù¡9±f/Á\d.6~¸€½}ÿj#OW	Û¿¸rd7@±Á”Ïæ·b1½ãt‰ÿ/w+¼?ÃçTˆ>4¨‡åÎ¥‰…üéó~£Ï&ÃAæœ"l„°@+=Îƒ?½7ø
å<‚241Â&ŸŠeò^BİvÓªtêƒR++[]±èk]k¼„­*0­[Ç£~cŸ÷-¯g¢òşÜc“ùMòy”‹¨Há§« ÇAêG’ ¯‚ÔÙRÊÄø\áÆ —òy×(ìQ:!˜íÖîÿh“½ZÀ¶<†¦nn}ê<ØHß¹,ÿˆ-x|ú”RNZ— ˆÌLšœ³ô’¿TG}¯ÁOxfÖhô9ÏÂ¢7ê¾'ühªzYøe/=é(@¸dA¹(±˜ˆö.ÔàO²Òvï¹sWÒ¯-`ØØrT’uU¬5<ïµIİ~îSÂ–ZÿŠ¦ö¥B:*ğjË W'†¨Ó¤}Uãñğ¤w®F™f†ˆ‰ZK»%	aŒŞÿ/&¬YtUÏ²Q†¡~J´EÍ™p›Äº§İãl@ü¢)íJ÷”f½XĞáÄ“LA±Â}ú9U’$¦©:QÕmZxS^}oˆ îĞ™ÿÓÍ”½¨<mQ¹l@¤9ñiíUH‚«gdĞPßÛT
%j*D^í©„{®{"¼Š7rı`œKî,©L¸¯Å¢‡½øAXA™5OÎEqz—Â?äSªyŸ—àÍ3ÈÿĞJ¥WsÊäA°ùÕíÛù^ñü"»ã˜¾Èì<ªÿB&EöoÅíòİ›Ó©ÛRVtC’9ñÀ²4øõ¢•uf<'ó’LF‡öuã’‰[º¢ÀŒ¶µ¾À5³Xµæ¹nOÔbM‚ÇË5tGèÔ½•ğü"\<õDÄ7Áö	eÎæ}œÜc˜MË|~xÕŸw$(Ò ße?#(Ó`	C|^ˆÔG45×ùY¾Y2VqÁ3Ö<äs›˜İ­
liL Ä‰ÿ0×^:nV‰ßè¬+”4ğèÙUÿ´„'<Ôæ7*w²Ñ²ZJ(SöçA¢öq\&²©Ğ®z!ˆ¡¨(_gRÄ¤{=Kê!‹ï»%ú‘SÛKó8—¼âël_oLJÎ]¦6Å•ã¨XNŠGXJÀ- fÚ‚”Sg²;ÈâcñÚxQâm/H£!)Æ\Oúë‘ùÕfí©m{‚ß‹²‰‡©ïò§ü¯!dÉP›’™Ö‰†UXgT
·GºM¡ÉŸl§ZY>À\*HDd–Ü†…1%3Ú_15•·®ö”£rë¾¡–	§C—–Ó¸æLM^{¬>¡B°…«ª<wéRgpc¤ıòv:éxÀã:o°J²;“Ô–tÏé[CôO]&9);î"”; ¶8#±W6>}èÚH€¹HÈİä­·ÆÙ2pâ{)*) ÎdĞ©¦êĞ™ß,éDX<=Wºh—^=Xİ7Ñ>c´²Ûøš` „Eğœ”´	£Îİ1ûÀ.?¿é¯z5œ<ñn
™÷`"ZD%Mş™<ØTæ„Ôp;àúÃòRFR­ Û¦Scçm5Qı»{e^Ñß±èYœö‚Óm+/1. Šw“º¯Z³	Údh9Kƒs¢ƒO1‹b,”/µ‘ú*„aœe¥­]S"‚o»Ë¢LÒ}wÀ•‘Z¡õÚPw~Ù}ÉCX¦¯¼&à`ãşHß¶(föôêw‰C©¡ìùKàóJ™v§ñ­V®ùÎ£ür
İpÒwŒ†2í<Åı¯­Şz9‡;ÿõŠïJ]j…vO×,ÙÚô7»³şã”È~‘FeZQ4¿Ê xøÑÇQ»‘ÈôŠh¶Lö
ÿ¶Äó÷ŠüB‰z¡ë†Øsçck¸W-·=aÅ¯úYÂ)eB»½ñTFsrsjôıBN6™ô
“øeJ¡Xìö~Ô è¹ãùÂ­tÚi‘K±)n‚kk»ÙÈ_¶&t:_°ï
0× ™4O]÷Ó±(üÈjBS¬Î²"Ó§62`êöø4
4”â©–á¯ëİ åeLH0†©°‡ÀÆÙrŒ Ør…“v}!>òAú$­Ä¡O€A*¤*úõÖñKcÉW‡÷&|0—î“õK8ªAœOZí•N˜»•GíŒ™ùfš‹U=äÏÛ€íÿİ½ùâiÆ=#P€AÖj¼õ´sG9†{’M5U[cŞé#lõo•}îT¦ó_	õ%7n€¹ùé+lvş£{IĞAvôKªÚ$Ñ19ÕB§b2N9êĞ€ƒfJ&¹¤™³´ÇlQÃe‘Ô+S0–üR¦%\RP˜¦a-f»"ÛÅ=8ù6¬‘r6kĞŸá<0‚‡’jPÑøÅ'N½e,^xÆÖ¬M§{Ã2Ş½ÁEú×Aã¿šë†òI`T«÷{–™•Ó³·C Â{mÆáŠştzsZâu’hdfüTÓøcÈ4İUîs‘èãõAû6ò´ìÄşzKq­•ÀRsçˆŠrşîœı@xÂiö÷¼Áäic5cÑÔÄ=c«	Í—ËU6D†N?Òzø­üÂ{ĞU(ÜuóÚ³ä„ì Ìáíî¹„ï™,(8$°’ímÖ`ÔÔ™*‚ŞÊhù¼@´²"ÔùQ^Y5š7¸˜ÚÃ¬z÷ím!øş/A:-dÁªÂ*Î,](MrB«üÄ(Ë±ÇçªgJœœrÂ»eHW5ÚÕ«ÁİÍ2.qL'ºÅ¦Ójiæñ[I#¨£–`åll¥ÿ}"Dˆ_u‡%7 ˜{GqgBõ3²wRÕ™Käµ·Aî¡çƒ>–¬Y[Iú°æóô÷b·]\ø«h{áç×ˆßx
xãÁfÒ®b·#À‹Õx]Û*ÒIV%‹¯õŒÿàw=*ïËo_+@e‰ùT»e¡T)³¹`Î%j€¬œ
¯³3gUÜ¢©R€\Ã  18P_1ed•ÉîûBò¡®ä «µ¬ªg¶’£wİÂİ qìâz7¦ç›ø»jÒnI6ä©%	|÷¯=|©nRùáÙPøÊ•§üÇ™lSMK>7âøÒÎw#ÜÆÇ·Q««À#.”Ï;ô–9u[åß«-¢†€Ñú°J]‰t{ô¶øAX‰7ÕèÊ1oÏPœ»–áü–Ì ÅQjzşÜQĞ‚hÆ¡ºSkDqWæ¿å˜÷Ø#­NVÍaßÊÄ«¤æÓÒÓód¶Óš:kİ’ê*Ãôoü:«pJdô…mÔT*IæC³(åaG3.ITš‰kuêKÆÈc;Ôİ¤à7Û.„ÔÍƒå¥Õğˆ*%¦4òìóñÒ¥o¡û%Lc…ıøz2çoÓ¶uîêË³SK«”JswL: 0ÒıêŸ<Ö×I­<•
1¡U6Õ6ô¾<6à*ó¡À‘ÒCÿMEB§ËQé{Ïj¯_`ª¿aQÖí¿jàÕö6IiÏ!îÅÛo‰£ÅxÛDòûòæˆËPô™nÍ–TÖ‹^À~+öüïÃ >~­¬NTwí1ÏäÔVå«ôĞ¬*}ê*šPpl«ÊØX¨OŒ•~0.ä-ƒÏ+E´“í¬áh"	q¨#uÁ±›8«<óenodúYø’¤5Ş€uX|Ãf‘ˆèXÅfsÖí~
[_`ßTâş¥†ÀŒ1Q:\*{¢CSÇvÆÂğTKÂ.t†C†ZÜ-Ó\Gc°I
ñõŞêƒä²û`-ğ_$µ@gàß)õÏÈº·B¹‘MišÇêT<C'‘æÕÒü§9mâ/ëvS¢µ]D
?ßŸ’õÖRÑ‡)@Pir·¸×~Óæ?ªğPÎß3Ìn'ğòÄå/ğúİ ›ÊşôR÷cäíĞœš÷4…eWM	fCq²	®Ã.¥“ÏÍåì8Ì7w(xÈPÛqÈÒÎsi³«>éù…a˜ÜŠè"e–çşz‘ÎLíIøXzß”´-¤§•Ñ;•&ßŞ
éÿ©]¦ÔxÓ(ff¡¶lğŞ ˜ø!èjF‘bHQF; /­7Âï6Uß´FLÍ°â–‘×VY–Ê0 êdG|òhÌÏ6·Ù‚f©çwÑDN[Ñ0yt¿½.‹^ qü0‰ºŒEŠ1I/%Óîzz–@.ƒ¿è4ÚFÚOkhû’¥ôüÑÆ–aøĞA}«ğ³P™·9îqò¬W‰ÜßÄ„Næ¢j °¥h-ÈØÃĞÛ­¾¥6¼4Rë%Uèi{%ª“yMÖi"kMÈ˜¨ë€À^ªCª.‚Œ¥dµ
6T¤Qü´G€z—ŠÁœm¤—ş
%~£áÂÇP‘â<%—>ô´æèPƒ™ÉB¹Ú¥—P\ß3Ê3ŠeÜŞ‚ D«´9¢ÔbİÄĞøHiêØº*º]âıRGSÂS²â€o
)nF`îµäj9Œ]‘/ÖĞ ¿İH~1ìHGóƒü11úşÑ%˜Ôå]:Ì«şşÔcb'=˜ÊÏ^¯«‰„R²±€Ä`0(|õ×ŒÌN/Û~¿îŠ/rÍ³âMŞİ)=ı¼[¿äÍGtƒõ—ˆÇ—n®Éeäåø0b¾×Ëq5lç@]nc£b¶€ .Æ˜©A‚5£Ã/·ÒØTÙŒØ¨aTøŠ·ŠWCd”úñÇ <:ÃãA/®Ë­‰M$-«*ä8uót¿&i ”Æ`!”†NRÖvTß˜*¿9@Äˆ]¬C˜¸ñ¼¤)xÖ²B’×YZerR,0;TÆébb£?BÎöÇ4ì×à¸&^Ûk|cçŞòŒ™è×ä‰A8;ÌŸH|ÏEDÀ¼v%—æ0¾zgC`´>jÜ—V•Ó%8Èö"q‚*79ôè÷`z&Í„¾ÌUîï‡rJ$«ÜªˆßM–>$0V˜]çhÀ[jÌ/ªâ†=…ÁW"©ß=…Õ„
V>2W~`"¼ú]H »ıC¬ïı¸§àİ‚<Şhè-Ïü‚³^Åğî«@Q{@ÀTãÕT,mÔ…µ_Å·J]8Æ€ŠÔ®ğ}»ƒ"„Oœ\mHDÕû€	‰wJ(ËÈGvëxòÏUoTTãARrîSáW8M3#bmjÜ“ë<èåòÜz.1™ÏRAòŸıbş€¸39vmo:îáöğ¡h.¿áÂ å‘¦<E”€Y{|çÅ¦ıĞò—›0¦ºF€òÈ\ËË%œ…ù¼`N#H9Ma^gàÙÄ4úuŠe§˜5,o‰ õuÄ¿£äc%È./?h¡á£xUFú Í=ÍÂ~¨Ù¡ç}b¾ç*m¤)pªÕß#óy¼ìÃTÒÅí:+¾Î€­·é»¼ÑùÅäñ6Új¶4~VèW:•µú€m]ö¾X˜fºUÕji¹àö‰íİïr¨Â¨o÷XÉDF¬1¦ÇNëûVç|y«mgYWn o»î‰½µW^İ¶„ÿ…Ê¬ÙÏÄ¸Ô×–©i#½¶ÈPè~²7·˜äZITcD¬tÌ‰ºR?áôš »ùSƒ×(¹‚ïBÃÊ`[ù=¡°ô&émîX¬¢¦Bçb&%˜¤BËÁ’	<’–¾7ìòûÒe 
ıö Y´NÕ\ˆ5Ïgeû¯’)šÚ#õ™ópµ4¦¿£ĞgÀ|¦ŒMJS—M3qÁÊ¯@2ªµÆ—EK~¿c˜7ªÔ­œM(»TJ¼s‚  zé¨W°Ğ‰lã3cw@
©øïµÛÆşy£x,Šş’7C'¶àMtiĞrşV3ŸùIÜ¾Ø4N´—xß³–WFl:*m3…@+=Íl	~Ş³FDF¼õ‹Ë¿ŒšÎ6 ;ˆ<"ÎâD{è?¤ú‰Zğ%gNõ¦Kyl¯#ÙÛ½4kæÈõæà6Í\Í|op¾/®@^Àj×J‡îYŸ‚½¤
V\r˜!¬ƒ7¼¼Ó©“Ì¶+ÜE<=(Ê#ëÀveÍWRq¨\`]TLÃæ÷ómş(Ú,_€}pB_\&Z‡Æ~älâÓ ğÈĞê¬ÕÎÇ3¦ªYÛ¡ñk‡.£éRMæ¡‘eÃ$C~nç®¯4MwÎ**â¯$ñx0C;äŠåĞi¹…ÛÍİ»MÿóÈä³¾ùsSÍ>›Š—e?±b“˜ğiü9±CL8x@Üô zà_µÈGòó>Dî­pXş$­ŸŒù#± ­×]©0ß*yLºê•nx«á£ÂÈw7*Xñé8İXˆù{–2ÚŠ¸SÚµñqÚ‹]÷AD“:{3ãÈû YØDËp~>­>³üš>(LŸôxÕvK†=ó7@|cxP™Ï”ºk)´9{˜èş~ı]7XÕ½ô°G«i„:é$èH‹tİS’M¾eXbAh¯+W†Í'FåÃÂA¥ä)7ì«ù/r=x`FEò# i¡ó2$,Yü¸Âì¼ÇÌå"s¼ğé}ô/eôz+0Ÿ<öb}qìËqöÑÔ·Lcø‹Ê¦&È …öº7fçÍxCo€ ñòô ıÃÄœùš›q]Y‰†Ë·úSlo_I…$ãøš>>øP\Y*”ªŒóaMV6€ªyoî ©â¾¬1}Xº'MXãëT,9£P‡¬Z*üÀ–)tç§•B5ú¿{ü¯Íï ÓˆÛÊ_â{o«yÜ’l;W\­fğ’¶¢‡íÌtäí†/ˆÔX±“|-“b—+¿Â
‘Œh§ªÙ€V†ƒ±¾6Ôn}ò®5±âé?û« ÒÃ¸µCÜe½©Œ
Qd§©†½o]‘„¢‰‡æ«¯°~±½á €pÒ[ç„ª=ÿ31Ò¬Õ·1PËøfé/ˆlr>¨úòÈ‰°fÈ<œwtãGt	i*øêÇd7Pyô+J|pb£;¿¥,Œ‘<kjkE÷#N¨å¾%‚©V6«~ña“šœ{é=×ôZ²ë2 ¹lm1¦t)gÎ±wàÕ¯Ö¼‹µÎÄz	7„T!a7u
)FqÛU$'Iì İ£(WEñÂœÒ¢Aá°JGk±¹ÔWñ¦-Ì®¤!ú«ù­¬!…;­Â¼	êÒ¿(–!?A Ò“Š¢R^ãÊüøh‚UÉ/O”·H®Õ%ìäoÄÉvt `v §nØbĞ3ÑÈ§š°7œ¿ä»²Áà
·$
¶û5g±„{Ãà&ï’ë$æS¸WßdJÓ±&¢¥1Fçˆ_Ÿ¢kÁ€ôË#ßG n8ÒÄ`®wÆµhtÓ<~=P$èÄo>Å;R¹).Zl3½‰³±ÃÅÅøLS”Â«Ó£Ó¤Èı`uÁúÂçhÚj¸tÚ±b©['˜Âùˆ<òŒk(EÔÆÃ5òîá³4×ı7kM5±a®j¨"U½”şùv¯…ªĞ+^ë[Œì¶cƒ "¼‘Õ6PÃg¿¸CnC'÷g“ÊÿÍòÎ?uÂˆ~èTgf4w˜ğùŸlÑë*~5[Ûˆ“,À1¤êz»ë±;¥dı³d¸×'Eû  îË`/vÎ°œøÀk6ÒœÇ´°2_Ítğ£TBë/°mTEîˆ¸òPà¼[tˆû jÚÁ‹û‚]FŞV:_m¢q®ÚÅ¥ §9\2Á*•éceÓua9Ûí#e¤(3®¦%®´Á£…ñ!ê‘•ã²G
->İ{¢ĞdÜi}Šú¸cC°B&ƒÜ}¨N’ğç¸ªWÂò¾
kïIY•uÃ=Â+·ï„ sí}ñ·(Õ"(ñZÏ9]M~$3°ÁP]áÉ¬n?¤cY´·ª¹ã¿"‘©ãğ³Ù¹sA8]RbÙŸ¡)^ve|Okq&BóíÁ•My`9dàZ³éŞ]z›ügèãUE40yZ¾µØrbË¥c†‰-·j<+:g¾h§Òüãu’WAvÙ¾²çÜQóWúÓºD¬Ô%ú…‰Q—b¿ÕÏÜ•pMI3™r½)}VA ,*4\7 ¥k3f—~ñ@«
úGßc–@yÀEæÈ h™'Ş†*WäÀ'ãK«ÏÊ#PZ;œ¿S«2“Pï˜"Ë[ÔHÓ¡´R«©ê*aÕp“¥á¢& a“ÿ7voÓ”:K’¿dM„~û†÷ÀÁè¼m-‘B@s$¥ô»y	?’é¹âB$ŠŠÌQ$E˜ıw,Ää­ÑyÈaäÕ\È!›5\øÿ_ñÍyFn7PEÒ”ˆ‘NË™Sîü‰‰	Ë±á1‘M¸ãªÏ[ rãúğcN	İÿÉ[c´ún°ínLİèÜĞ…®ÕÅÒ_ÌDç%gØ‰SrR9p4¥±~Çàa çÎü[Ş¨1Ú5ëöCfÿ‚ƒkÈÏa˜lŸ/»i…°ìÂˆĞ‘ËÔU` `<cWIL‹÷xÅdKÒŞq‰$œQ%™É+Pç\'õ»Mq¿d4åÛ™ÂXó…˜]»\±AâWx2Kx;,Ò5İJ¢bÑú×6¾!½RÅğ¨Œø+Æd(•Õpl°LBŒ?åÕÕ—
hæa¸xEÂ~ÎÑA €¡…ŸëC&´&;Â)…¼p&À<1ÃbÜxÈøæâ¹JMJ=|Ğ!ø —%hëÉXAIXÆ>‚1`ü
ĞQÜ3ñÁ¾Ë.‘üv-¤ƒZªŞˆòaÊ°:8ÚRî=<¶wWÎr?hñ"™Ÿß¹1Õãm¢FèG9–4Å$bü7¨œQ€¾¿SUP0GhF¢*¤p!Í+¡ÙÄ×Ù¯m†n‘ŸX]ÍÁqÁMz•}mo…ˆ´Îî«+¿7€$‘2ó‰ëG¬½Œ™pZ­¥¤g9Ë«kïóİŒÍÃ=N†yáöZp3 òã)À§ÑÌš‚kÄUÁ"NÊ aƒ;¡^‘Rİ€Ÿ¿WÔó~w£(a6¢VudØ+¢†YcY*KAÃ³¯ÀŸ:r ­Û\(–sõ'ëúú¨èæôm ù[—l'j­Šé…˜C”ûŒ‰x;Åj¡ÎA˜S™®ÎÁú—G\äÎp'òUZV×•„1E>¢½rãN-Rk‘Ô7ãÒPvT¢ûfü}µÇ¿ôpfÚ?[E3—µ¸¯-r”íŸÕR,u~'İĞÃûû~
(·ºÍc)İı¾²«•§Ay±Á’A¿$Œ=iÅÛY”#~¨}	qöLµ÷äø6O^9jÁZÔ¼Hş$1ï«ÀJ‘øPûTLj¸æ¼}§®ë+‹ºøX´¥–5™)£ybÖÅ0âÑùŒoµ‡‰™dğÿk’ÉŒÚqÃó²åKT#×İŒú-ı2.bÌ®5>xÕa44FFI÷ôÓºT
àsy§Ûp.•J^A‹“ÂEx
½~j™mÖqËĞñÇxYºí…~G§ıñğ<Èu·árZïÔuÄ‡Xl^Ï¬¼ j$mÛÊ%ë B`kÙ…Aè¬îZ!2l5k+.½[ `>Ú¼jYİC@uÃŠù›N/.#U7?7KXèÛ§Å‘¯Ô:¤VIUB/Ò'Haoà¬¯•ag”Ú‹(éM‚­v#{RÑprîE°{ˆQá ÕÇ_³Âí†¦Dóp~İ¼Ñg	3É¬û5p 5ş†Ar‹ß³À~=£¼ùšİDN@Â»Ûs˜¥/r>¨y~ÉYº¶³ÜHÂó‚m›¶->m°.bÀ7sØ0:N«I¾3@ÿ´€?t"âT2‹ÎŸ Ø‡ZÙ>’iUı¿?¾‚£kØ”¹Ò6­öç¸+4w’½8s]Çæ¯¨.kî@S‡½ÄgLCKˆ±’8ê}~Òÿ[ ‘¦,/Ò6`oeˆ^«TŸ¾`VöeÂ_Cß„é€yèÄ§-'j«Iù¹€YàÇ”¦ò;–ú}wå˜–ÏQù ıBoWİ>şfíö6	ó\S*šT‚9ìÉ'«‹5Î#OôdŞšº»_y';*mbMú]ªŒ7Hë³‰¬}(Û{'ª–¨FĞ"+ôÛµÙÅa·¿åîc¯AœòÌäI¨şÌi—ÚİäUÚVf>¹÷ÜhMwÉäòIIgyNòÅ„ïœ¨Ré°¸$xâtkİ´Põ,a…ƒÿª§İOì»;ÅACèÌgØ [^¢¥¾^/µ¦‘«Fò˜Qv³P–ğÖå´z.óE¦Ç³åb-û2Õ„T¸WmĞ<‰·jÅÏDuJ¾¥M]“ãÆ^¥i—vá6°
»¬èòÛOÈM"S¨™mƒ¶ÀÔÔ¬%[±hÏ6ÑìÔÛd£Ù¾»¦Œ–ôjµ÷ìö1ÔÙó÷×ã*efm bB¤>&Ë§ŠµE™«Àj(ú‹;j’ÃyØ`ï"Ö)2ù¶=^8õ
?€¶“§—‚/ğ…{£­nñšÜ]Ö…¨mÚÑgºXe¼&–A­îìiRb ±8x/(/È”BºMÁ)5{’^š’Ã»úÑÍò[î\•eCüíòãµfÒÍw&Q	ƒj¾5;xÖÑ¥\	ÃåÃXŸ¾â–g”õpÍ<ÒtB.VU{`éĞ¿çkiÔ«Œc”cß›*§«÷¤º=:†sÜÖ™AOk¹“^1à'vĞËûHÙÁèü¦é¥ú>±Ş­š~1±pÉ™cŞÚè˜€ñ·ÕueÑÁ+›z	uÌ<ÅAÙ¦p$[4vH,í#7µëákşÆW„Üb‰Ë}£1Ö±êß‚— ¦éï3â}ãÊŠÅÿô…E\yuRBÖ/ås6ñ#Ÿï8-/ª–BåC´†¶C çÆBGÀ³±Õy{å@¥³2)_wÊ-!uke{O­À@>*çÙdšÑ²n(#‘_ë÷‹ÜÇi,9s¹>‡áèi[°ƒøï„åõ¾‘TÚmßwØ²Q’”Gqëı‰¥BÄ’<+­€ôŠ%­&÷w¿ïgÛWW5Â•^X£×e#¹ÀÆXMÌÀ±nàèkC³Ã”^K‘KV*³‰«È=u‰X¡òú‹öß'ë§)¤¬…ÅWôM""˜_wehäSô¤uëüËÊÑÃK±?{—u‹DB ºN¿ŠnT¢
ı6AØ: ŸØµ?ˆ¤.å·ø¶‘ã‹a‚í ,‹¤†„j¥†´Xâ‰¡qTU0hC¶‘Óc<oóZÍµˆ1}cÂ6O13û®ÿ†WÈrypuµªÂğí$MßE´ÎÑTÍ…3pKÇ–ÙØı‰ÆõşfÈãø…ÿ?  ïËÊÆEÃ`OWŸncÊø	¼Ë×ËéÌ—Õ{¯=Û
Á-¼;p¼ñVü èÙŠÂ}úéS0ø_®Y©«5Š‰uAúkûúk&#½RåÉˆyÛ&>$cK,~6"D¬eY÷Ãâ ‰“ZßFçîHo1(sÒ%oå~”Kª¡´NãÖz9DÍ¦…N‰n a™eŞà«!1e´*šzçéápJWR
ÄœSM—áº­)
9´©œ‡'ÖÔƒŠ)Z(`şG+)ÕvM6CÒ!·Qƒ&É
×¡†6VUø*ÙâçS8tá½A†OÒÙ×¶¦’¦¹£Ğ:úè‚ƒ2”1•âÙ°ˆgÖê^˜®r7vêÌë±Á ê;%ë¹LTµ7½š˜ó)!è0
f´Åb¥ZÎ#)pa³°ÕË½vŒ+*ğ$lS‰á·"&,õƒ‰òoT=°ìû^üìîî±×!
Ùİ=«ô­¾Àh©¨ˆ$4sÕëº/®ÜŸ?¯Q>9Ñé«¡,3‘_>°j¥Ğ‚b÷´É+ù' B~oQcAÈé±qŒ­Vg`ZÂ…²‹ß”6Œ›@B'uÜï#âIß3§6—ºË,VØŒ¦¸õ<â)aõ^KøÕ8J u#¼şÂA?.ä²¯•àxlp{µw«û)’şæÖ‡'Ÿîè•“PßÒ½>³$Xa¯3•´@$I,„T¹ğ¿5•ÕBó²ÊÃâào¡’È0é8­…­CÍ<$pÚcHõ>(ŞN)tˆ‡–°r¥5ƒÕÕxÊX®›>0(k;/.×şu>zx50æØB=+Ó$Æ!LÙ3Vz×Eè™xÏ"ßÄ|ÖÇ¾³ú|\šÁ½jç?[Ívp%kæŠüw[5üöÆÊ˜şHj©ÃÑêuä¯Š:hõÀBÃ.Îà“iËd:Æ~à%§ç^Jeo‚ÔN‡Ëî“ŠŸN}¥1,EjTŞ6Hµ	{eƒp?udÎD”á°Bäâœ7‹â:êHùc8@”«õeŒ¼á3,2È*!—ÕàÔˆÒ<\Û'svøCìeªL’>¶¹|eŠf…×ƒ_6³àW[°""aõÕÕî+‰5E¤¿…+oÍ–•kLDWH¼Šä‹Ê…"šXB—ì¶qÕÜH7—µ¾V½•¿p :Ùæâ%wè€®ÿxí 8‡ïvÓv"ucNuò”X¬äQä³.å#“û]lÑu6äS§ı÷åèªÊ$è^³™ ÈV6htÆvç²óçŒÍ¡¸×3ú×õ
Ñ†gò­Š8ŒZã?Äå=¦Ø1Ş
“3T€ònâ$Ñ-¦¢6öĞ¦`·YÑ
ì`SJş Bo?_7jª°2²RTğ#Õ˜HkµKSÜ‹JU1dúÆ`ÀUÉHd ·¥ú/Å¨Ã}=¡áâ"ïö³İÂ¹è¢i³Rj~\¤…9ÔÃ;-½JobõÙ…2Äd r1œaaF»\æöÚpˆ†÷ÒM-Ï¯ '±ÙÉ¾Çi¡‡#s½²%ãPãÛJĞoiö"ë‚fáÓr_>djÃåÎúÚ¢n»óï|­Cr­9èfŸ:næO]«¬TT$—Vg'¾¨ş/g€„ZIKÛtÏ'6+ÉT+mÈQMsoÂAİÂÄR‰£N±ç~ÆÈ¹VÂØSä®¨awAŠ'XíÜ¤ÜĞ»)ãÁÑE¼7êÇ.DÑÄ|©Ì¦@šO•&´’s»Âÿ!§< ¢{^s.ÿ?öÙ=ÃŸˆaî”/×b…7C×66m2ƒ)kö§å YGælİß;ËösçU“€h¹>æ~·ê"ãÆ/±Æªù‚}ßö¾w«dÿîŞıDZC÷ƒHË,Sî$5…• w“šd_¦N¬c)I+bÇgÁm_‚½ÅÈK#ª)óÖoì`%sŒî_JeØ(o£í¾¦i}>Ô‡)Ú±J’d6gR«œ5/"SMG~¬š”úÕV7ÁT‹q†¥yÁÒŸÖ?¥äQÉAcÑZŒ#Xø`\cEµœ@­äò“ıÀ6¬³>Á–l¿Jz5ç /ä8åú.Ø<²—¦!/@IÿÙŞÇ"dŸ®ÈP‘/mµkYM £A¢Yİ˜ƒX“ØŞD¢À”û1ŠK6ê]?à½eYxéí{,2as×;eÖ«ë¶bùÜ™3ÁªÅôª~÷{Ö¦|­ı,v¹é½qŸFH¹gMà'XÕ_~¹<§â­™NÇ$âşàëËMf0|ê¤#À6’§ù]åø0'·†şîCHÒ”ª¡õ?®âßD8NäÑt0—Ó½PÈB.UÀ8e‡K®:oñÅAİ¿5éåIù¼ÒşÚ¾Ñ Â%¤(Mº ³¶zhÜÆÏ+µuU ëÁ¤ÙÉ²²pñbG¿&À"âcª¬%
šGM&›îvò‚GæQW`M6s{0Öu¾7XœóæF$$¬Dõ!ó¡s½»eóJd¥]÷;>¥˜%)4ÜÓ+xù9n&Zo@›Õ(¯Óûåy‹ßŒùhìCóòS¶n?œšKHa)ÔÕC¿vEm1÷7P
·…²O¿l¾LR=\³ÛtKİ°õÙ!î'5
Ğ14}4{b«>s<ÑÆ«ËKÂB\/)<!Ñ"»£\ƒ‘k.ŞÌ‘ aõ}h¶P"U5ÎëônšL9MŒé»<æîøkáª]¾z‘T+W‰?èÚã	gú-=åá5Ùÿ;Ò½{Á*p
£üŠÖøà­?N%Ûd dfËÅíÇn¾ûDÿp¸å\9R?õÿÎ·¨½2şuÇ€â3^Q_Í¾Ş–&U‡\ˆ/š¥´$ı]û§oÄ×<Û©Âç‹@¬väyq2ÎmÁ7ÕëÖ¬—i©µx PgTs› n• P]ì÷qr§ÁòvWï‘ÄÄré¶j*=»?â«r½¨Zñå—r{/lë™ ÜK¨ä=»şh9
G0cQ	ñÉHÆwòYyô‹pñŞ„JFÜ"iK¼­–ÓoÜÅâ/\DøA}CØ,â0’|¯ÈÌ‚Òm(ŸÇw“<ª^Ä‚à#{…áÂ¥î½«|¾÷Â›åŠÖ°¤–´™!nqD”<),vÜWÍ›N?àÒ¶W–ä÷ô'j­¤]Ğ¥ÆÕÄìbš»ÑÈWZ ¢;Y+…g#m<RnõÍÛê©´Û3w¡™À(ÀËueİ%;¤å—{:ÓKä»ëé_±Ë$;D]ß²5¤UHô°Ÿæ5u:£E,³'Xo2Ä¸”Ã× '\½µóÂù·¢ÁAñ4\{@µ^œÿì­	!CfœÍ‡^\ev…P»%ôjkÌ9+TÌ€‚7Kó÷ ~¯—ÖÏ³ ô
ĞhƒzÓšé]Y@~±óäFRv°%ô>Vı)BXÇm­aî."¨O¼tMF£:Ák«>Âê2’Séƒ»å1¯Lº‰ùRÚíà’¼6[å^´.ışÂn`¬¹43ÈŒµ“E"èÄÅ6«‰¥IÅ ƒ’ÙFñ7Ñ.Nù·Ï˜ŠÙ{Ú¶›]5Ii"!¿[¬ 4¾ˆEw(ùÄ)Ğ„1xÍ§ eä8ÖÕ|
<X§Š¤l|ÄœE˜Ç{v ¼c2bÉ¤ÚóËákA9i\?‰b†( dçí8q™‘÷©–zKô•‡=DÌndO¦FüÖf3J‘Òè}t9v qEx‘2ï£Q À©f¢ùF*lÅ¯òKØ[q¦â¶<9ôÛM]q[ÄóH¿b7ã+Ø´˜OdáÔ@Xúş ó÷Ó^PÔö¬l‘úp°«\ï$æ\•İT:Ã¯V†ùœ·öeÆl‚OØ8O	®İd€YH³9Êµ91{òw#>ÎA_Ìÿ?'!zLå áÛÏ––(-‡~Ÿè· –à±	M<á:/%™å°`«dá¹FôI+hUÖÉí¡aÚxjáhNøp]L'§÷¾Â°mwQæ;½:ûQİ»Y”B #ìË˜şÇ¬Ø¬2ÿÀ¦q®JR9­s=vúk³ynÕ° Î~ı£¹…—Û-÷Y%Ì Ö¢´"wätdíŠ‚€}p"G¥Ìl
½reewj–^x‰
©€Uó/@NÇÄxy¼Æ¸>¼ QÊøõ9>”ğòºPqO5{j\´İìŸ#g_\pM,í"ù—³Ş ò†hkPß´­jÀÑÓÏ… üšu;flê³DSº§ŞQ3«•#|2«&Ümò>m°¹KÑ‰Dê¾»´›	_ì˜iGT¦ñÛÃµö¶9F"ú™r±i¦Y±áïğ¶.ĞhÒÌÜİUÏ>GÀ±4%:Ùºª½ÿweNà?j<n«x7ÒÍÌÚ=÷>Ì»ûvX±/ÎLÅ¦Ú†)e3°ÕÖc‰0ÎND	¯O98QÂJn&¢0É"Î«O’2•FÏ‡ÍÁ6¡Cıi>{o-&°İŒZâEwqì2’IjŸ–ıpk²¥®õ$ªFúİH”™é›¹Ğx›3ŸWæ­Vğ3o¢mú‚¬§Ö`]ˆæ¼ÄÆÊ»½r‰ãm¤lÈ"êíGş#¯£Zi¿»[!«OÈ½ĞuäÇÄ`7v½D”Fa£+|ÌÏú#L™>‰Û…üEÓËÏÀî…S_‰,ÇĞd¬ËÅ{6:†óÔaüÜs'ş¯Î3HÓ+8G|q°U1EÏ~„úÚ¿—z$Ëlc]GO¿YÌW¡n½‰ÑB;Jã‹¿Ñ°îF²“p28%NŒÁIœòº@ öKu’Y+~Chfs7 mºÊÙ9?r}
m¿ÙQ„áÃ´åÊ¡pğœé¬Û’˜3S»fwC”G¦D$ã°Ş¶¥côF„DÕ=üD«’'SŸSkk	ü<@0ôE¦øÇªFÍÏMõÄFÛCÅŸAŞÇ†l¹c…™ÆÑPm‰²„"ô8ß¨.UìIV1…ömª
+ï›†uÂ\‡ÍBƒè6¥}[ÄøÊÛè³¿ °UÀ€q©IA12Ò9QÌ .ƒ6ŞŠBv [^Uqk&döPëÂí\á¼‹éíxŸù&ŞK7ì¢¦ÿL°'cÌV!¦„ÏsÖùãÈz¶šÉ%oÊ˜.¹s¿§Î
VîÕ„üıyW1ÅöBrü—ÊUgÚ?áÿ,F¾~=ôAÒ­b]L¬ã[Âİb ¶´3wZ‡Â¬—'jK-'W(µFÈ¥˜×!ì±o¤'QìFG:àÍï¹°©r‡\j+0>İTCÅJÎÑh¬f@0Ò*òÿ.ìÈ¼^¦°Ãt‰Ô	¥aád?d„ıN¾şHhÄrœ66°ès¶‰ö’ T7”0(Ì¼"€ÈÜék1ãâÅ`3¶n¬& bYwƒê¨èŠ¯…õaw¹µÂĞd3õ˜'û<d×¢â 2©BFpø…P¯S™G…u\§0DN–÷mKÍòîE‘ #½òÛ1€oàœËzğ$|œ}«u¥ş{| Ï2Œc—üõåWÔåW¾ûº¥3Áµ¥İ;KÅ>²fRÍm;ä’­Èp€§ª,
¯]¡gXk„LõC8Âvz‹¨ÈebY‘²½ôŸi©
¿D86î™72ñ bÖÃ¢4ˆÈâJ÷vI«m‰Fk š4¡ÍØ¶“¼IáÛİŒ&%×SJ 9R¥fÚ‚ö4
Hs=¸šUÊÉf¥u qQKv£‘í6FSv{Ôl‡áÂñZÎª[Àß¯"¹2I\¦¬NË•nøêµæ—vï,?Ï…%vã¦Çæ‡p€N
ML©µ6É`À›%»;Qß^k'Œ6«Sİ—ïnLÒD¡æÎT½©Àd|+&;¿å‘Ş¶æéÊ—£Xf+! ƒ‘Oàíö$f £:}lAIamÄ‡Áó˜¿Kœ›¤R±lyAÜI‘%Œ#Cz ëØ"¡e{úä2ß^Öìh<¤°Ìd=[r:®ì¿íJp	ÿ¼ÚLTDîŠçŒté"Ü?é:¢«Ş
/÷ÎÀd—Œr£áÅÍí–%¯û"ÉË£˜o´¶ß±Åûªâgš:æCDò‚P¥¯ÇÂ†ÈcmeÄ•îäbTVpıü&A -á”fgåë…ü£Èœ‘§|ğXF£‡cÖ¥×ÂçN»¥ÉV"@ğvÑì~#3™=meİÄZ‰7»•Kû †
mh4‹ØfğU–—/%½oD+r
î|;‘|¿¨‚CÅl´Ó2WOƒÖoª|¤€í Ş}êv/úŒTv´şi°Ì^p½ä6Bø/‡¹^ï+Ú-6£ªÏ~”ƒ!Ñ­ÊÀfã÷=DA¥òŸ¯¢¯£„sYàGı€wUeá‘ZSIêºŒ¦fÄ!‚B!s^äùó'{óÃ_öqçQZM›Ğês7å¢ßÊ7ß6¦?úmÒÓa~WjW—©õ¾Ï×pä
†İÕJFè§ô!Öæ×X­˜-ê‰¯¼gîZö²¼>ùåÑ@´”¨­»jé*¥É»Â÷ß¬õm‰h
á}Çƒk²¾O½Ğ‰:’qŞAé^¨EÍ¼¸@ÔŒ¶áéDÁpèªq"ÿ®×ğk{üƒeív°¨¸õc´^[ãI»¾¨
ÀŒgši‹©ÇjÊf9¢`ÚYşF#îD%•1UæMø?lqåä¶—f@Ö>Ït>hö¿Ü5‰xÊÊÆ­Î"ğ÷à^A[#Y1è'ØÑ’1–@NÛ«Ÿ:e¾zoúm°ĞşìIa2"²’³ß%?L·ÊnE¾cg‡xh	TN \(óFòXŒÏ*ÜÄõ„(¨jJ„Ñ„é!	Ãó\\‰ò¾‹LR­æuC/ı%¡…÷vÄã.Ù–r¥j“wø†Å§Fêp!ˆ[GôÚ°¥Fd£M`ÖGÜ°œçÃÊ,¸Ê‚[ˆDèèV{›ÀlH`3Mˆ6ç}š:•F…~2@LÈh¼ë ¯ °“[íœßi¡iÒÊÖ‡2ŸáA¢•Óş›x¯'bN‰P³`÷Üxıv¾Z\†b»Ñ¹TQ‰&Yâ$ƒ­=ÕJê	´³"9sÍç·32Oë·[¥¹Ö ½ZÍÂ²™)b, ŞİY§€—uÒ?.YTà±ğÈ‡æİ}aš¶¨©bç’e6(œZsë“‹»†ôÍP¼¬GBQ&"Óë^o{š|İ?FüX(-Ët¤}9 ‡¢ÜTãKd.*6[ëNÕ“.Æ°PB[Pe/%Æ9)&^só£×JÛÒÄ¥ffÏ{-Ú	æƒü’ÕfSÇÔ,ä[ãï5§ÕXÀ@±øqõ¸ÌÚ×;ßñ°I™Ò?ÿ&{³'±,‡€ÌN–ı¸ÕŠØÄÔıXLEÓ'0|²qA–[ùODèğ‘ØO
èí¸§Ó¢ÊC@àõê}s.rI)Qå8{ŞµËâ•ÇI¯«Üß\sJ[) b‘!Bx´Ïsg )¦oiOÔãK¬b$8Z2´’±‘{òãkQ'B=êÃTC†Œ½¯bpkniSv«}µÏ~F¥5>ªØ³y}ŒHÑ…íJ x&éîÿ€¸¹L¾WI¯÷1ªBë,©«œdA'É¸­d_.…ï3ÚoÌX=ã÷4ÖÛÄX´À¶¸ŸÓMWõ(¾ºÖ¯>!0¶,¢HQç­Æ˜†IRÈkM7èD¶PAs›‘;•^g‡®4|Äx‚%ZÀi9ãzìïQ”ˆYæ%›b9‚×Õ~%)Ku¸¾›†‡²[8tÄß0\Àõ(ğJÚl‡s›œ¤¢Çí›k4óDëy-»¾^Rş"†üR¿éëD®eš„3/+–0)V^k£Hõş"ƒ$=RÌú¥û'$>·+îztHùoTLPî”„Ã¹PB<rµi¢æâVzW.±°„¹Î¶DcõuãY*ÁYõòóÉg‰]¦¢-²ô”$kwıi7‡Åªƒä	/§9!çÌ8´àÃ´5qÃ•`9D0™2TÈÊ´Ú¢¬MÙËõÆc`OLL•€¼†~B±ÙeÜ¿’º”‘Zjëh©~\‡ÊqaÀ¨‡@"g.T@aôø’\fùbœİ€r0+†İİˆKœµ¬Â%°[ó#‡£ÍPÄÓ»Ûì½¹ŠËú·¹pşÒ/™™Ùaİ.i¨ªõÄ7ğ_ƒäs9£"Ÿ’åf¥ïÂJO9õŞvŸ¥bğ†C&;¥_7vú¨H5b™|üKª{Øõ/¨H®”÷½¼eRE¨ßI„ıÂe;œFÁht¡óÇ¢nÏÛj®7°ÀaZFøw_§Á:²}ğ¿¾}ß±IPİsÁÿj­CA¤yÑk´B_•gSê0Ksº7§vÖÕ@½?ÎÍôGC4'?4nµb<¹ÏòT±PÅ$êıSRº)d¢Ã±‡7,.dû6ÃYE©R}×GsFDÔ ¥¨æ=àøAöçˆAv²®hÈÇ%qY-èæŞXì±!CŸPë;ù!œ×ƒ´Ë5Á,ÖŸC·XŠºPí/½ZìÃc.Ff¿9Ü;¸Ÿ2×¸^ßÏ6Nâà»b•Ü%à¾‘k•:¾ªù¼zt¶}llşu’ÉZ ÀŠÃy[9€Q°³`ñmÜ#›#§Ìú[q8œ\á#îõÎ˜†¿àÙYTd²D¢&şè{
L0 Œ ûª‹jù7á¶îD·ÅsÁ({DÅEOê…"ŞÉÓ9yhD«Ì·Áät;ªP>nå+£òd}¹;Ëáƒ7nË]™‹ƒË¾8§uPÌ²«%Ñ;ì44Û,Gôå}Æ€G+,ƒ¥j?0wéÔd„?[ö¡‚¬Ø±†rŞuà7¿ïˆ¿¿ªë#»ó'•s-ª£Ù6BD–Ö"g'8oá‘´Æ5:–±£c)w
<†‚
˜X©£Ğ›U¼Ïš‹Ëöª¤Ú{/Ãx€ú‹êYÒ0å~e™’Án™A)3¸éö'p+9èÂAåÆ|âv‘©a‡ç[ÿ·ğíÀ“œ÷nz+1½PWæ=*èÀNÕÔ©BıŸt™éEôtÔ¾†ì³CSÿäĞUo$)ûşP©Ù©Ö< çOÂRÄ Ñjl)èÚŠpÚQñk0òÄèolWñêşRì€oû¹F^¬$!ÖU>û®Z !_\x	æb#)'!¡ÕD‹yw	îˆŸÔ‚Á9+Ì½™ÌìFIğTQc4Nr,ô€gÁGëb1¥³c¹WÒ!1XŞÃiÄ£yäÃ'«fªSÎ³ë‹-ÚüYáä"õ³ñggïØİ¶gàªÖÌ#xì‹ıhßÑäs3â0…¶Æ–qa›éÏÿ‹™¤G_qo«­ƒÁfü¿EX
'ºœ	r‹ÖFàˆ£ú”Âjföğ¿kç ¤uØ°¸åƒ©8¸èS5Q›“Gê¸%Ä`ß‰O·¶şÖ†J¢NĞ£4™.¹
ñš=iÄ2ıö¿[N˜›ğØoª"DwO"¡…MœZDNm¦Š1T}o4S$šåzæ_cØ€ ™7óAÅ™#áèÜ‚>†R^y·â4£ğ=v¤¥u¼QX»ä4ƒrmÊe¥—ìõW|ªa§Uuü<¹µşxiZXQˆ%(¥(rA•.©£µOmÜ®lIVÉs‚´Œ4®n9˜ìüD ™nĞÿwêÖ•{1­áWTÊšı¨ ~Ñ°¼i´Ô‚ÛqYEW¼Æ^²/ŸmğÛÒÜ…+¯[ªœÙôãXÜtçËªÉÖİ×T¾‰VßşÔJ$;m.Hf †FÔe–8¾ƒ;õëFµ¿BÃ1Ÿ8‰ˆ+óŸÚH¼Â2•o3îdÊIÉ¢Ü$ÚıœfeÙ×7‰‡ÕjWª9š¢Fà‰º·+vCôM@7c /'—”¦õ~DH·nZE]ØOßˆ.×Ğİ	DÙ¶®ˆğ„pxRŞ#.îŠ«•RTü}ªl2Š¶
ÓáÇùië¶™xÏ8õ·S ş»e£™ªê;ŒLB–ÔŠÒ0Kpú†~çŸØøN×˜›QÌğ»g
yóUG@é"ˆàFæ„Ù`ÿaxìÚ†¯áØ¾Zo®HÕY«x¾Ã²h>—~g7Q¤=³
*Ø´Jj¹!WzõÃ -2ãÓ¯Oä³VRiÜeª0upBí…Ú+©Ã =U*¹ÆÌ*®¼3FtaEî15DÒEcc‘N½dénÒ/ªYæ¤r…ªâJ &C‡C“Z€ò@< .T„ E­!©ñwbæg=%fm©Êßß©(@Ğœ|º÷GÀU:éü¯Ç°yÉÎà¨VŒiÁ
Qní ‹iÆ³®ÅàíØP}NDü‘L£{¦ÜDœö'zLÚÕM»VBîÒÑœîÒKP]Å®[ÊQ^ĞÇ,u¡XmÖî<ÈÄeòPA˜åËÄRfÖ˜3Ñ»ê³äbŞ¹»„x
 0AL²o:¾ìşc×f§P*0·nßHğÍ¦ş|IÀÁáp”Ï`¸…¾0jâMÁ–Ì 6aë%aŠ¹ı–}¯6h;HıZkËÕ©”¹^ húÃ–ÿŒ9¢§r©k‹—~›ªKëa"Kä™Úfb³Q-WØñÊ/ ªS«ó4=µ¬óÕ¥A¬büºÃ>˜åµ0{¬¹dNy³i÷»ÍÍ99tvû¹éTƒYcæ	¿¸"AŞ*9¶Ğfë{C8+/¡é¤î8¹ºÏf KÈ
…¸xŸéœÕx(ÜêÇí¨İf¹.-ó›ÁõïÉXÛÕj„3Zœ<ˆ¾@©·’"Š“`µãºŞ>cs1P¬Dä'Qãªi}cLÙ¶Íh¢:°3{LqvğD×ÖÎ¢!,×ÖùoP¼EÚO.™¸s%[A³º¢A÷ÁÀò	‡å¶Ğú@µÁ:[$Ë¼ ëõâ™^ËÛã0m‚ˆeóoøsoD6ú´KÇ×;^š²FÉEİ>A¿\Û¾»}ÅCÑïHNÖRûš†C:™7d{¤^¡ŞÕÊğ?Ñ çC³Îêøi‰"„èd‘§ál¥ÎdºlÜñæ‘ 
u (V í™ìh»ÖÙŞİZ¥SûŒ|	ıŸÜ.v»ø º‰G®Éx™îáyÚ÷uö±İ_¢¿pN³XIMã0+²©èªÕ	åú=F.îçO•±ÿ‚)4AÅ:ÙÃ0¶0-ÖixS¢"$Ù·ÿ×êĞ³Ø¢/ıÕ¦ÆµfW|‹^¾ÚsU›:†ƒï®¼b©]”Ø&,ÿ‚o¥RŠ`‡ÅT
7f$ºˆ`­L•Ïƒ6:á$lÓ‘:L+¬qO”´…>‚t!êvòá³8¦æÛì.É=p¿Y?œquìy$À5'öÄeáÉnùWh_ËmğgÚ)d¸Ú[3¡ãc1ñöªú?CTˆc\&¯•åÜ¹}–Q}Ù0qp
M#ŞO¹íTÏ‹ÁF}nùšº0{FŒS/ædjëP«Šğ(Hí’Ú®ü¯\“FÔ””ª¬¨ÄLhéç.xšù#Ú†§x¬Ì:õMG”÷²ÈêmÚÂEUN]&€›:>IÓƒ`Ì£5ç–Ì²İÌ!áô–a‘A·°mZŠ—¤%(Q=¸‘
_+~)L?ÕBÕ-ÁÓen‰ÆJ÷‹<˜9Šêfc§ÉÑ	¨«øêÀ+ª³G¡üÁ0˜R3ü¬E85&±„k›Owæx®O]^‹Ä©”ek&gÅ=gd>¥<ÑşêØí	ŸLˆ¾%[¹N`ÃûÓ,X—ŒÏ¦¤±_Ñu@HU>™R^j\.XÏETÍNûp6Iˆ#$æKmWZÛôƒ“šjàq×¯Ø‘2§G‚Âº<Ps^à5Ô’¼öÉ™Fkla&´Rè”©¡¤]¼şX¢+ìz™‘ik•¾•ºÃÊi|ŒO‰ªë 3tÖ11Éşlˆê5ÓÎ(ImÄxw¥Éˆ„Ä#x‘\N§MVWÑ`9„k¢£‚“».DT6lònAÎ“x"6dÆ%Ö&ç
Å¶jcC¢›¾ !ÕàƒFtª
…Ìì’]òŸÁ)•Œç(1Èæéğ†qéQƒT´%ihø,è¯{×´‹Yk×m'İÇHÍk‰¢Í×¥o~i8Jj}Mu_bÁCÕë(&ŞÓÊ….XœDìï˜ÒÛ¶HQŸÊú7˜üKl ÏYšİÕh9"şì•äQw¤'Å²®™ˆ¹h°zúHXŒéÅ4’ÀTT#³òz7<ëv\»5S ú¡àh3Y8½¢úÒ,y~µ'äÍ%% æoˆ{ôMšQ~ş¼‡NÂãè«GZØ	r‚Â6»‡š}Ù]rj ]›CYŸj>Ìt³Nº{1På›[X›˜o|]B+yí²$“Ã¼¯mCü+·x‹kyXü6û’¦BfØ¹/¡bô„HŒÀ¾Qá†Å¢b€SuÛ¶fˆ&É³©‹)“ãZƒê.-•ôì¦·ŠÆJõ™êBêëÃB[ÚÊçZŒO[ôßC.³{ûT%ïÏÒ ã1uüËÁŒ[á.}ƒcl9…¶Hn--xó}*ñŞÌyS´œHôÎPö„ôöi~kXˆ¨/À²1ş±“Š`î²ÓÁ°ÊtfıETu9”éßÀ4aè}ãÊXÄxm2¢—ş§ªRªı*©7:nqÆöŸTÉcš³1YÑíèºI^k1VØEçfUiGİ|Â®QªÉó®[¨ú†7ŠÛõ0áÀ9ÄT´4YûóCıP¬[êT¡ê§eƒõ
àçbTæ‘3³e{¦ÉDŒ¬Ûè•=R¿Hİ;úlÅÀÀMÏ
wê:ÿÎ˜g¶vÂ‰W…Å5
m_v¿ÎJYÃ99b°êë×·|wbØ¹¼jTÌy
ô\6’ñ!á¬:åÉœÌëB†/7X¸<Í½£U³ïïW(å8°%¥®ïYFŞÃóñ¦³<?{z$no„˜À8Ä­í®x2ßú”ïıÃäÒ¢]Íû-k,Âlæf
¦hZª"­±‹ùKQø¬/yô=jwß‰4­lÇ¼©ı»Ò°¹Êk‹ºÈæõºd¤«Ñ}Aèå‘>¤#ª´1åë|†7oİòò©¥Ş$¡`O*…Fˆ´Iq’
‡<ºå2çÛÉ%BÎN‹Y ´_2"Øï§ñŠÎrã³AËóÌe™mÛÒ¾‘MBròšè>&Ìˆı—ö…I¶Ÿ§ÑbLO¹ø &Ï³3ÈQÈYcïgÃ¼Úë„–g»ëGÊ?İ$1–ˆ‘à Á¦¤Ü<*ÃºnÙ¯Q§u×YÖ„M—Úµİ£#£ß¿.N&®sÎÑ¤¥ù€ÎÏ®˜fAøPƒ0LfÄX[Îw+kXÚoÚÌ*»jÚ”%İ«¡7wqn£8øv–›j»Ü^Ú`-äfŒ¾çf÷Xø¿ı7\TNT°ÖĞ¢“9‚¶ÑŞãôƒ¶ª½­§ûH¹ôú™Ù4€ã©ü‚î ÅfàÊ	Î·è×ôà–‹ÁS,S HmB'©‹”€¨D‹jôÛ†sÔãR%`|RÎ¤œyÌ#Ş¥IZŠKD6ögêèÙ¼‡°a²=²óîš¾ƒÌ\™—} ã‚ÜÇ!æäCŠV,×êA#CÙÍLT¯«ñ6>qwzHĞ%>òB}ì€…²	ÏgíK÷bJ–åsüúä2£S=óÒDîÂĞ8Òª™ØpQÑ) ls£+£Msfuó¡ê]Uëuƒ$äº›Ò•ıy½«·­ÅoÎ‘­?QÂ¯Qü¹ 2üã
è)DÏzş»R¸û;	ogàÉ„æàQO*PĞB™—Éïw—»xÕõ3óƒaö$şÓÎ²´Q‹ßëj `¸—cvœ äØ"cù:kn ÿDc¾3UÌè‘&î¸c‰æ¤Ğy‚Ä„¦ù¹Hx5Ğ§9lGåqCàl]¼‚ûQ¤£"Hã™â–9Aü±¨ÂVÀ/N
åOÒéíãkÁ“Éè°sª'êAãÆCÏíƒãØëÍ]©¥]ÈÀDÈmN.ŞîLIle´Y[ÌLª„@[P,‘oÎ’E½çÍøAı«ëO— 
C'Á«k‘/šûzÖ®k+á‹|ô
FZY`äkGû´x§Ÿ—ê×Œ]rŠE’]SÅåIÑº´Zóx"-Ç2÷ı8¶¼.
÷#ƒ¾<dØ¡©Qö¦~Sçå9[¹ü6—ûè+~~Õ×d–tFşf÷z_{]»vn½”Êmğ'…2çˆı`~LçÌ/7E™Ê~d#DÑL³FIa›É\ÔEÂˆ;ìùU;(dD¾Q~–Á™Aâmr-Jëc}DQËmÄÃÍäcÔÈ²²õÓ}×ª6Ù=ñå¥äôÛëˆ~*]0äFŸşXÊ¡
ÿ_ï¼İ” \gÊm§‰J­!)IƒRuqòwÿÂ
¦¿« ?„#âcÓul¸g®"z.”Z"°¿9¾¶×ù1j`ù,ê–¢{² YÉìtB.M'•z³íÃ¡òô?C„ÇèØV/Ğo£™bWIÛè±®Yz÷ÊX
Ù»ÈDÁ¢œ‹`!„èêYÓâR7è!’^ˆ¢ùSqj™úzáO§­ìL—¿SâN_nZğÔ4 ô¦QV3¿t…£±£„‘Ú¹EÁ5B’øÌ²ø!Â¶Wo‰÷Çüs½¯>n"İhs-J7lÂò7tÄZÁªúöyj0}ÎOØ¬a²y||`­Öı¹jùÇçGşó)ÏM5!¬øIZİh¤]ß¤µ{ßÙmÁè•ë®fŠ'ÒW¾ÜÕmz+#N”C Õù ÊÉRTãv5%HœÿìÌ‘¬ødj‰D
%M¹£åÊŞ<¼½A¼Ï»_] üğTôt¢R¬–÷  X-™/{¨
^yÛÚë¦»ª€‘z˜–QÅ¸§–¿šÅåÛš¯zÖ³)¼«6àŠë)¬Õ>•èi~^»İ@„#dŞr>ŸÓ?ıŸ5b¨,yär”\¯Õî6¶{R‚SNûqeR6­,í¼ø]µKzsQÜÎb"—n­¡’È8
rÑ±éQòÆ‡"qt0òG*Y‡'0»CEÑ9|±SŸĞg 4¡÷’$D¢JŒÉ?/š‚Snğ«÷wpÍQRıõßÌØƒ‚{‰–Œ	Ç¯¤tF]¯}á@Ï¯Ë[3çÁuj«¸¡Ûò`.¶H;ïÀ*ãûKÔßÚRÜ<fA¯Ÿÿ$osÑÑ°ll·ú¦6‡åª2¡W97Ü2Ûq ”pq—™t‹uaÎÍè$$µMÃdúæëªú{®%Ï7i”)÷ÀbQ‚Dšñ?0©í0È—s6P¼7ÂA¯lıiüLÙÖ/5”ÖTù`KOÏ?¥26Å‡Öæ¼¿SñVÊ2É‡Ãdôö©[¬ŞÖ& ¿ˆíš§ºû€GÊêİ_MxUŞ2ú„”HÀT7
¢±8k©R§öz»³Çô8•¼LSP’4•e¨)BR.è&ˆ˜ü‰pŒ«àl‰¼Š›`2   NyJd4ô°83-Ğy(çB5n-ãpÈ@Àrğ 3'_Ræj¶¿ÈºÚÕá 	µ|¸±@ñú¸ıXED¤]o¸‘’¨	øí.ºv ÏİïÏbÜ¸û>j‹F¼dß¶ïÒÿ‹m¦Lêd*÷5[±L·«ğşBXsdg™i¿¼
ŒF¢ø‡mm¥ì«ÆhfÈ¼±E¢fW¬Şó‘ólù½VÍ_l7pÕ÷XÚ5ûa%ÿ³ïtÃŠ+O Çpªa~šçRùy‰w¨ óMoM8ˆ'µ(zÍ{š:<İÁÏæËğ\ÿbGİ.v*@vŸ:ØV¨K½uµ3³$kt‰‹tPq«÷åv¾Îò:,z|dììÑOp`ñ3±Ö¨Fs´j:fíÑÏœLN™YxV6$y7jn÷á9*`ˆÈì4h}ß§X@1³‹¡yCİCŠÜİs$iĞà(¶Ü*<ÉÅØ¢¼+›âIåŒ­
Ÿ6¬{ĞÆè7¬b†¹xà~õmJáğdŒfVAışQJÈH†OŠPeÀtÚ“âñoæZ‚¾J”TËxø©*M¡¯ıÈ
ÅLK£ôÚcòˆgM£‘æ$„æ ŸpÔ w¦æÿŒ/Òüå¹Ä“Z­åÉdXy‘ëˆtQ6û~=F¬3ÎM–swBWjsİˆ‚ãyô;S–¡ı¦çµ Y¾¸Š9!8Ã™ul[*|$ë=Ï[vŸP™ªO…¥‚¹a,`—K\äÖúc
’1L‘h9^3µè*íbö:,îTg»3¸C0EIdï Åºå„¼[L'[Š©h	~@øÉT;ÆØ·ÖºŠu\³6&Ÿ~Ó­¹¿Şx#ØÌ
FÚä»@ƒ‚Kç!&tó5;şÊîgYû7±™º;V¼ŞT¹FÊÍë°á9ß·†–o}1ËóÉ„Å“9sçAUÏîsr¿|k9ÂÍ03q°&>Šˆ*I<g©EİJšSeG,¸v|x˜1£÷wc¾ısœ—h÷ú³–^¹Ğ”»nŒ¾#b"ôŒWÃ!2‘¢§ËÉme­Ï?ÆAŠßŞÕ¨ìÓC˜Éñœ½^“%oÙ$3µßlúú3	é9!ê	ë¶@'ËuõÌr‚nŸ~ğ¸YÃ—ˆ•8ª„Öñ!¾[ˆÈgËÅL´û–×Ä‘Ã¼÷Ã—ÜBõÃ{'´¥ı:3|æÖšáSöÈÓ¾šŒu['¾J¼½‘Ô•D$'ÍMo £kğğ²ÜóŞWm§Vjı2ÂvV»'ŠÇYŞp¨ÓÙZ º¢u¡ÛšF¥{—Tÿ§¾†+»Î…k€Çc¹IóŒòQzÖê8¬2áÿ ‡+¿1<÷ß2mÎ¬‹lwÚ€m•lqÒKùe2´jX"!^ıÚ6Ô‚0¾á!NÒìÔfPşAjÅë Oİ’M©2ÓŞÃfºÌoãÉØn6'R5“,õ6:b œòålŸ5ä´İ½×÷nšàèàÜ¤¬ "^TÑËìhŠµÒƒ/€¡¢é¿£ÇêY£Ç<
Š3é…ê7='t4…×µÎ¶ÛFîè§%:OÀòxsqñ7÷}Ì1İ/(Ï9—DÁw«ÜVÉ‹îX™òÁç.˜ÄŠe}Á¤CM<.2œéj€-ùYLŸ ÉœÑa	ÒGäV*¢³ê2‡P>şWÃŒJŞ¤6¬R¥¹©µ‡Áq2`Œ>.%ˆQíHÁZlwşáZıl§E[Gßz õlpâ;Ä­Œ´1o¿‡,ƒ»ÜÓÂ/2²ãTøûsÂ§ä ‡¿ûiá¨à9òŞZ•À“„±Äºğ 5j@ïÃn¤De­4¨Ñ¿¦òş’ıÍ¢Uù!Š+¯½ıš‚Ã¤ÄÜkÜ–ŸlŸÓı¤©ü<ÔU±İò¦ßìÚÕn•×«´h•¯N^*°1	‹/=ÌĞ¸øú—‘
ğ«(†ÕÉZ©*!'?ú+z^^ƒì|€§ÇT„s'£ÍpI5¬ÏD„Ğ;²%?Œ¦¥C(b¾6¦nŠg‚Æş¥¤AL¶ßºqqFaJŠpÆXzDI&S}. d-2 ‡PM$î…?X~KëœÆc3ÿêÙwÄĞ;YÍŒ0™°k²ÕzæŒjÿó*$±‡’Vt¹;¹É¥ŸM·<‘š«éÚ Áû)dì
şê¶Üíè®1óÂ¤BSÿ^–l’xO¬}<¯Y¬°kvAˆï‘b­ih¿h9&Î[ŒO­fRú± ”:lˆs¢Ësèj#¾¹Ùm«ïd9ZAÌÌY_İ«Ò–lMnL¨M”Õÿ·Mh^Ôe+š]Ğ¼ª=Mÿç3gmçÃ
QyŒ§¶ĞSÉï”K]ûBwÙx˜$.9ßQp :¬¥i&tu$/XÊã^µ5ÿ˜	æ­N¡§ù0úCäy*Œ|ã¼R2›GW:cƒp“ğª”drI¿Ìğ¦Vv‰¶5»¢ÄfYC ¿‚ Èúà1Ø\æ€¯6{ÊÓ¡„İÏXº51ûL¸3%››‡z¤EØº7VêçÓXtœŸ4s<Åòìe:ñÅVš›îôòdä»ù¶yKê¹_¨y+¢4èP¤ö¸ÇŒSÛgxƒ;wé¡{ÿÖi3İÔ¬˜„`M4\bXs¦8¹oŒ(İ¥ù×»H?¢sùL!Â¥w…F4F‚.Áø<U¢H·zvpËRÁk¤N)cn(N‡ÚÜúì"ÈãáĞo9²pÖ+ü3QfâçæÖzn¶ˆQ[èN,ÎjåuD@‡æl/GÃA¬èô„>SGLÅ¡M´~Ä½ƒ‡íÁp5—^²]…«A¤í½ô~RyÉ—|P§İ÷·õc½zB\Æåj`0”hz[fÆvšö9rïèù·ê{%»9Eœâ­D ÿ®˜ä?(İë‚;i)Ì`Îí¨Ú°UÈçÛF=—¼Ü&¾…0ƒm”sCjß0U]ÂK2Ë üì†ÜcyO…èUÉn¹w·Ç>×k[¢Å3×æ¶¸m~(?—"u	öjW_¯ÅØĞ²à­ˆ~{Îüˆ#ÇQwx›+hO„ÛrÛàY¥fŒ< LgWtÙ¯äiÙwÊ"ZaI¦Ñ™³q¹æ&ô<V(k%lQø –Î ÛçÆß@ù_éŸGíXÁ€%0°ä˜5¢ŠLuë·•Ä„jl#Ç¿½‡jÛZ~İ´¥Ös´º»n»»XÇÀÅº
Œæİ×o=Pæå[Ò§3€¡>¡b RÛc.ª«ûã2¡WQPËg¾Í[/±‚b¥abæô.ÍŠ`¨V åˆC‹•úO=ÙŞuğ¢AÒXûºgÔ&:vüdˆ”ô”qeÄ…Æ¢nZ›Óã[’ºÿÔG‚LGÕ#»#¥ÛöİŸÖÒê%²5ˆ¸¸Äl|`¬0+À”2U…£ŠÓß&fÙ?dğñ>ì!€±ª°ã–Ìµ‹&wIö¯aC”ıí*|H’ö&CUŸş¨ÁøíEf£Æozµ£¨Xl<G¿‹
”Ø$ciìgbà/XUµ£îÉóì½Ø_MÒÇ]^ÎW+±M ÿZU¿™œ	†@H\Á>@”ÊÎD¶ÚU¾x¨e}«èãÿça°ıaŞån÷À`g)² ëAŠëkeìêÛâ²ÔyÅù‡ïÕé="zGÚÑ2ÿíëãĞµà@fã.eduÃÛ»tguY&Ä›¨øø-:øğRÒ•~wö>úPNeé +®ŒXø-o‹å†¡Ÿ=îu²„ƒ­Tè„êÇ§EÎŸ(\G*.ä‡b(\)$ÑÏ,å-õf±ÎÅ*ÊMEÖ·Æ…†®f´Óc˜`W‰×ÇÎÂĞ€JYòeÛC˜ÕÒB¹Çşë¹àßT<çå˜IöøH²Æ–zkŠ(¿!¯wÉ	P½ÔØ(ë»×/‚ñìär°ƒ¼s’G…r6K˜ù7C€î-ĞgéPz	«“Î¾‹³¥ıè_ 4õ»|v)fıY~$t\ËTØäFW-Ox{õœ¿İF= £;Í""ØÀÁÉ(¬£2A´¯ƒ'("#?Ppæ
/Ÿúµ.rLqè—ÇâãSÜ'‡ç­E¶¾”hœÉ|“æüÈòü1Ş´Z*àClOş‡×Œ]pˆ<bDødvg#ïû¶ æıxşSV…Uôè
ëˆ§ı¸T¯}—ewt g¬ŞºŞ2aU°¨‘õ×ùƒçFø]*Ç$i ¦I|îıÔ:KFP"ë-«}¯™.O®•Œİ¬wÜ-F¸Æ€=Z¤…	Pf6Ä®=ıpµUş\*¬wÃXÑ!EÃ¸ª:!ÁàëJõÎ¤œhĞ2àh¤¦½£?wèŞíq'f@º‹&ß÷î
~:E	ièü|UŒÿb÷S!Ts#YÁv@ÓFM‚şÓx'lµ–Œx@Æn«N‰,å dy`}8Ùôaüˆnjäµ<Sv1ÇáqûO-
üKà¨–ÏÆ¼æ-îĞ"à
’(çùe”·Ok::Ú¡şVà·§§ÇSò3 ÁM6~\à·ÖÍªGë¬çõë›yC´Ü…¹H˜^&*‘h`òçPEU}âC°Ì¹÷jv„¶PLå£Ñç©²MEëèÏ[ñ¤«ı$ ö©ÜqµS“¬‹I‰	o¦=¸kûùù Vfq^; ¢1°´íhî~f\ÎèÁ`¥´÷œ_J]*êEÜÖß×º[é`q °i²e¾f•{hqÊw`¡qöëùëeÍ^&áq­{-šEúg€@FU| OQxÀ
)øoÔ±äğ{ßñ"\(€	Zˆfùo¶è_)ä^ÿèCp¯À­n@Ğ{¶è<àì,k‚‹‚Í£†eÚ¦¿îÁò¯S¹ä®t‘êŞœ±Œ›(JüNn‰""|›lÅ*H9ÈÄ±ûYZªå±½[Xnù1½8×pªyWÆ¥`{F“­j‹İ]'“"¶ÇÀ›r	¤° ışx•ŒÕIŒ€!ğ«q!ãÇ÷¦971İIÄ¼K	x-ÎÄ:WîÇ´‰+pn	%+š`ğ6#/ Ø‰DGÁ¸Ç–Ş^5÷‰.ÒâŠ›šÓÿÇ«7óRß¼ŠNôEpøÏŞgõ¯SnOW‹şµ*dãÖ/$ÌQ+«zçÂ£4}*:6ño¤êÛÒ•½kÏÍÙsë^Ë–|Y±óä h9ÈğÇ°ÆÌÖÒŠÄ›Ï}”Á…ñĞ~§ı±Õ£,U9;©/…!¾ê¯sB(ñ¸«TÂ7¥şYä” ·
Ã9+¥5²õşáÁìZ‡Û„}ıìÃÅ1< M7å×Ö#)’Ñ9–€úÔ×¨¬m}H}ˆîæâ¾Ó­Qã“S‚Kéxé‚Ğ0Äúór…¤µë0¾­¿*~Ûú|©õt!Êxâ	à.0Cµ½è¸'à ˆr…f>Vñ¤ŸŠ¯·v/¯$6—t%şa~bhµ-w­u&Ã(}Š¾]Ò{81ëc»ï‹cTŒ•ƒ+BÍ_qÃº~m4é²q72{ L SX¯³§Öà0ŸÉÃ:’«¾Ø±ğƒÜ´ÈÊ%«Œ•ûÏš9áeßè†ò6…£
£ğÒÿ”Ñ£NŸ„;M—qòè^rÓoE!2’Ö“yyŸ$ğÊÑy~jÚÁu]æBÜP±WÓ—¡)	óÙèÈÓÛ³ \{L2ŠÖüá%‡ØÊÂş­I;Uc‡kóó‰øú%Í<n+f¾ƒ›bmF‹+`-ñ¡ °‚iÊK8-‰ã­şŞğ=õ—Tïa·¾mñ¥¨ÁóJ‰Oúº>„tlTú/i²ÄNİ£¨ä©äI¢÷ÅÂ$–q|wìöèRâ†¿ü¡ã6ã‰ÁÀ‰à.´u;£˜~NNTTú@ëÆ-À½¿O BÖ±f·eÁÕÿ¦Fì ûV[Š„imÓ5¨>ª(Ü@}ZˆÖÔ#®œÊ>sé²QÁ‡	}‡¯¨ö»Ö¥¯¨õï’ÙA‰¦ö—'øe¯Êoµ™<Æ˜Lº%V):¬v‹Z÷¸ñON@üyör‡=g^*ŸÕ{,¦ë‚hødŞ}Ú´3^`ê=æ‰†ÿ;ÌíØÃT‹»è¦.ªb­V]‘(íH0NÏ·ü•@Ôk/Ë½È’ï”ÁºÓ:¥-ó/mø@¤°nbä…æ~Úß¤…³!ègzvÌ7àòfğAaO¨¼C~‹ÇXv\fáMGÂ’Ê#ÖJG’¾Ãi l„”iÏL,ôY@’“)óùà£ÅFhƒ0Ù×æÎ5‰ ²TWK£ñpãû’ÆdU"ÂçÀ“b¤½ÁÆ#´WÌ)8¯Íh£—MF}zN¥Z#ùÜ¤(×7Hbª„Ôq;Ë®8!ë±òì,A‹b+Ëè€³XEä»(D€œX-tBƒÙæh¼Û8ÆOMèxsÎe…şá¬òv×^õ«‘xè„a˜ĞíÎx¶È…•x™™#KV’P¬UqÀ2ŠH¿É÷>>Á‘Rz]Æ“_ñkêˆVCLêq×Õ©i£×äŠ›*-•
–Ë ½ó@xr)[½ äõm»inÀ}µ‡µ¨XEá1|¸PıÓîo]ú-^spZ3{ó{oõîqV…U]]R…" ’8JyÚMVÍ.5³Ûr©3÷7÷÷®Š¡¤u1òN­Ó?`cw­s
qâDî–1(G8Qá±kéÒ]Â…‡ÒGÀ|¸:ƒ‘şÙOó»ù@ËxÕXÃÿ¥ƒrĞ
‡ó‹Ë5»UGf˜®:ç‰ëª3ãÍQc
¯QbÍ^¾Û¬Û¶+Éÿ¡~Áñ¹¤_ê?;Ø~øÁœ
å<9ÉC%.JYCÄŠ[%`¾
|£á†ˆ^ªî”ı~L2eú­£D¢§`i‡çHõ‹ôşH“ÂKÂ%ÏÑıpÓésw  $Y¸ª10knÇÖÓY½Lí…Uúà$,ªqóóU$\Ù%fÅû	òÂp>xû\íñVèPjC‘‰¥á¦ª«'vg•éf1úñU§WkY,—êyŒ ‡Ä µ+zq{€)¤]p×»Ú&á§İ©À0X„J‚wüY¥|w‚¥-¦\n—!ÑC¥Û_ùK§­¤v	ÿ|Y-€,ËÚI,h¾0ö#Øè±Fâfİo£K„ì²Ëÿ<ºsª‹,<R'I6Ø×şÄ†{Ëpu	}ûš	mÃe¶Ñ‰4xç hÄrş–Öy…r:z—ê6FYøw”µƒé&¹“D`¯~-ª ›HˆÄğŠìöC+ó½,€ÜJ-üÆhÁ˜ÕB¢~]„Ë¾pQ,Ğİ'±jÊR}‚aê¦;´¶¨"REYÀR]Ei&““±âk~“Ii‡§¤ AÀ6]@÷BnûWy¨R?Ï%›æÜÅêkNìT-EdLr9« ï º_å-3ø#ó6!×$v‚é*ç[¡ï–n‚k{ gù‡ä÷È’Ş½AlÒGÛÅfx‰çYùY+æëâB‘Ñkò,n¹+¥¼wŒ$æÃ­ûjå›ÃŞ²*«2ãiQ7ùTÖÙÂÈôm²ó.ˆ®›úR&ºıx™ã¯&±\ ÛåëhMÏÖ¼ÕD¯`/ÓV€}Vt¿¡ÃTáƒ˜´9úÊÑ|]ÇšácæÒgë÷çjp¡?y~û²+ã§3bAE÷²¬Hİiuês™òu	-˜g?øö<]Qz°ğ¶ªP|J´=½öH¤)ÃÒôS“[™ÿÒ)Gÿû•
Mµç`Ë]ûöck/YTş41ŒA$ˆ_ÇàÎ‹ec¹Êãú`X½ÎùÙ÷%>¿¹®ƒ:<Z*%jDúôF¾fm²E[(\
Và%»!“x=ÅÈŒğ­,­aÀÔËº\;eØ;uÃT|í?MÔƒ«&;'X ¦æF*¡\)
z¶XhÌ‘ñÍ£Uä<0°8ÿ±ÎĞF„}_¡ã]¯å¤×Ÿû†lQFgRÑN–k!q³l¯M¶ïm™S©EŠl'[ÈÍÍRgf^äÊû”øcyŠåÅßÄZ+äÅaTöÊŸ¯lŠŒ!>Ï·]+x¯å_E&ÁÂ¸©Ó}ŠÆËİÓÅàGDÛWSšDÍİûäñæ[†?à­øôü’ÿ¢–ìø“‰A2æÛÒT‹§Ú“?]¿ƒïÈıo®ÎÛÔ²X“tº‘¥)%¦±‡´yOÜAé`X®*6*«+ªéÄíeV /Â}m$3ÎÈ¢V‘}¿nÎ÷Ê5—lÑ_e4‚ÂŒe²ƒ/™2`Öo|Z¼ËhRx;ŞÄ{šÏç®¼ë$^TÑÜà8¥Ó’¼Ñ0Í6¢O	'G¤C*A•¹ƒ§A¨±!¤~¶?éZÑ>udõ¨ğ
fu¢q9Ûöü0X³}\¨ÒÈªËÏ"ÖÌS‰¯ãŒûDªy_ëÍğR‹ßcĞÎ‡½Ì†um²¢j¹óïlê¡¼œ«f1şºEİ5q†Î¤KŞ=KE¾ÂÓÿ2ÉæYÁÒªkÙÕ"·ïièõPE¬Xv¦ØX„4áJåOH e¡|Ü…°[3>c¹£i©Ô®F­³¬Z.ÎòBZ:T29˜¦Æ]X‡…û.»‰›È»MÊ®#¡-tÉ²ÌD±k9€K×E·™ÛŠÏU)¥isù2`Hƒ,Gnjˆ¢«ÃƒÖJFØ›ú_ÒóÍç)Tšw“Ú;ç±*³?Ô…Kü>‰“«5)W.2xBh~åšôXà*††8ÆÖ«O‘ş?¹§ÆÌ¬Ñ>åmˆµœÇfq"q3d5şv»™Æ>©1kQ7ï2€œ©uSP*ÔúÙÑóI¹5Í¯²º8Ä$y€'õ*Ë»¯Ä÷¸ap`•¢ë›ƒVxû°³Öó˜¢w¡ÓÕ7j1JÂÄ˜3}J.{IıçŸÖUxr&^#Ã„‚TLŞ7Jß®|äİÛ,–0Êzí‚ôò/]/ÌAöõÒ-ú¹ëEñ&Å.EYÌDà{+7é%!ù'Af90%,9ÑÊt•ˆÎdÇ©ŞM¨%›Ñ=»Ú…\3¼?•Qíı;q›¡ÊÄd$À™¿gl‚"|mÌIhªïv#®ü_~$î®yŞ£V-×Ioo­6jÉÖ_Ù
p‰â¸Q!¥;sv·ò—Ç¯mŠkªíª3ÊôLIGcËyW¿v# '$
ZÊ!IëüOMŞ–†®€\!h3–ıÅÌ¬SõØÇÉ³‘Ë×ûc)Ÿß+öû<Ë Öój{Ì2'opsºèXª­iW’‡SôTİ!ÅT=)TUáæÙPÒ'7äs3„Ï@F¶“H¤ç¸Å:(X^k4ì~ãìU¥Ãlbu¯ÂTgÎšâ­@›Æp±Y™¬6Ÿ»M|±ñ„ÓK:nµğÜ_©D7ßÇ÷‹8Q¸ ­ĞÁ'w†dæ'Ø&lqş¸m³ÍE4Æğv{“Ñ^Í0HÆrå@YğÙ‡hæÌg:0hkÎ­•}ÒâïÑ{—äÉN¤êÆ¹Uí¢¦ŠëOk†àa–I‘‹9­‚[:º,çMüqÔM<[Å":yÖÊß¥[NèÕLŞµ[9eÏt;nFº—Q3sÿ5ˆç@BP,Æ½MÊ²©È4~şÓ£—ø.+Ì/äV=Š‘¨×BŠ´0²£WÎg¡™´F»&äeà u\şõêşôjÇGC;j¤ÌŸÕ,éPbBëÉÏnÏøÌùş3úÁ÷3Æÿµ¡füŠšÆÌ€å\Ä©aÜ¢´¤èZş‚{¤½¬EÎ-±“XI£ş¡Ë/Ë¥^fúR\²şTµEª€PE…š>?EÈW9S;ú[õø²©˜s¨A³R& `®o¿SUoÌvËKZ…©Ç¦äƒŒuKŸµ8Ã Ú+°ÙLŒ£Şµe¼¤-:!î‚7Óé#»Ú¢ ÚãZ¸ú_B®ºÂ:^F´,¯ñ|fV¡+Û]†ÇN¸½EhË³Mó=a…¶I­ŞÕCß†õ¼İN_ş×!áîM«Ã	3¼`±ˆln¼îØo~XÁÜÆÍäKš¡>¹ˆÎ:ğeû«!i¶5b¥¾²˜¨å™	ÑX {r¥¶'O›ğ—8\KG»¿f4ÇğÏ!š$Àœ9åéÏZÏx«‚E„;(™‚ğL†`¼'W „o'Yn;`½:Ç‹ó£|]8q½Ã¡<Úß»š!äª•tÚ[Ä[ÚšÊà`jàb7`\íTLxÑ2‘Ñ›dOCtÿº@¯¬#”9ªf}ä×Q„Yy»Ní‰‰Mí–•¬sp•YÅ-iÉ¦ºÒ ”sL‰ÎŠXğSL¥òÿÎødub´ì+[ùÙİA=8(8i}dàïQúŒÕ ÖH©*’1$veRÚ[æÌ€åX
ÑóÈÊtİ#è\9µ¯ää”Û	h¶”5ÚMÍPXàPbÓçjçîÑcø:mé°7ôít3n$ë1YùZ²Êeµ¹ãNÃİîYšÎ¤€‡³ÈY'wÿÀ®S­2À?¦3©%]5Pşšx{»8×f„Ô—¶’ÑhøzÊwRoş±f?HŞñCİ§¨§nyÏ¯ÂÅeÿdc‹ûí€Ò:ªÔ¶öâ•õ¡Ã-¿©uXHª’^Â¨”ºôx7{5_NÍÚmX[Y‰<˜´-r™é¦®rı/÷Ú¡>•:üwUÓ»ŸèÓ4nRq{ëiÚoZlõ~òĞnÿ»[#M.,´â7ŠD½»ü©”‘ßÙtdûÈéé1G\Vw¿‰WÊèå(6À|ÂvØâ2z?»TºÀd²gåÍ\¾U›}¸wŠ©Ë4ÛWmòÉt''é%Tp®ƒ•ıÒÿ<û3›!Dõ¡†ÕkqÉŠ7!/ª:Ç¡·¼mU?ÌSK‹fÂ)¹èAN¯×eœ†Ò
á# 4!×%ÎŸàé«ôéšàØÿ>nf»æx—ÄŞ‡‰”Ÿ”ìºÆÑáÍ†xªğ'KpÃc*Àƒ6O›]-Uf²ÒĞÉè%yĞÆÔ°kênßº¼	€|D.¨ÿß
 F(Noi?^*Û*½÷]8Øæÿğ7šğó“–‹ƒ;TÓ?—ı müµ™uV¬®#²+˜ó]i°_Œ¬¨ı\Æ²ù‘FèK+e.5>ë=Üw9¯Nnrlë­6øÄÇÒŠ\!IFó¿*n5ğ•{’í±™: ÈEâú“‡ •î~ª&+NSë‹[†ûCSß?T¤&½/ušïf½íY”<vƒNÛÍÈF6š­FFÎŞuvS­~o=N;V«Õg.F[C‚º—‚7$…ËÓtï`Hi–!Ì8Ô»‚Â7z§LhyÎó8@êçeJ¹/c—|M‡ms#0~¿X§p9ä¨²HªYà`lDç0Çà‡'åÿ®™&ø÷lX+°ü—Òı ±‚ô›Z,–üà„
öÆ‰ø¼¬„£c¿¾s-ú>T¢†,ún Öls¤íÆXq1	eõ×#ÿĞ‰«^}OH¤ª‹6Â`8°œU±¸
)œBØ\}%	sE‚
ª¦U.C_76ÍŠ œ?İü£ÄqÇÛ
²U7‡zº–	ç[fßó2\ô‚”~Yõb—¥Î:Q”sc9•¸àˆR¢'ÔÍáWy¨C+—½ú®@Fåã¥
„¼@’è$®*S«4‡¡ğ¬1®C°®<MŸAL¹>X|Fï´1 ËAÉĞ{ÆŠ>ğ–f¸9‹N«mqå"ziAW|Ïİr°/Ù> êƒô~c‡?û7:+Æ‡Ã_ó)ÜìÖú8\AXïïd´×4’Ü´zÌÍA|³d3C—½¬†`g‚µ6z.ğÏmG:¢·èğŠ%°×=¨3
a¯Ó^"™é‡X# «X”^—ı1×<ĞL‚t©ùyrŸÔg|sìN«ïõWŒú…òÍb‡¥û)I¤Ã¸£Œ5q¥}pÖÿœ?Äh6sˆğ¾edl­ÌõºFW5RŒ>óÈ™Á9·f½;ESÌ7¢²Xè±˜2fùYËñq³À#__¥)üeŞÑè`.ûJ'—Ì‘•{$šM&Æ1ü¿­3wübfØ}şE5j.òùïˆl±Ğ"ˆĞô€m)ñH“’R×ş7X¤`ÃBã"7¶:"âÍ©»‰¦Ë>Å®;>¿À˜^k]™< ß‘ È9`Å Eë<Ü!‰ˆ­e“ŞØ¸¼ôàîvô-;¼[ßÖ…xú›…¢†ä‚ıÀÓ›÷•rÇ–ÈÎih×É±ôÕ'ÏkÃ`Ån€«ÂUÀcºô¾ä•Ä¶B‘,»ó"¼=;D))<ñãF:Hü•CâŒIK–}Ö4€JuêYH»qc&¨ìÎ³-Ò¸ñxÁë÷O8b2v”šaÙ°‚WL”S=-Q	õ<V°®lwkªë|v¸~Ò[à‰g*ö¹Mş¹ `™Â"¦SV²óÖäØAóäë3£©ı—µ¨ÿ¥Hœ‡ô‡°ÃLîlD ˆÃƒ»_¸0áÈTa'­¨MTú”ÀesÂF'îËÛwò$ÓÿıàjRÜ¬œ—=€LğÛÊiI÷ti?÷LEfUï‚ß8d H§Ÿ¡¿6-1åWd·MÙ§”ØâØ+#9izŞØ½…Ed½8
·<6ÜÇ©Â‹ Z ªrgìä}Hñò×¡´"ùÆm;à}şši=ò”`ÆÒëWå}=Ï³¹ĞÛ)…1Bâ<½’$Cù]t-Š‚C¦PMØ”ë‚6÷BXi%·¸C¥¬Ù˜ˆfñÆNÁ,¾KúVëµ‰{CÔ’·ÕGZÊÔƒ[@gPÉòvÏ¨RuXv$óÆ@`fïsV‡˜%'.òn°Vå
·Îæ€¬€kğï¹\/†İˆì|qÄqÌüÈT5'½5ì\4†m¸ö<+sµÊ©¯…—²¸ˆG²œšàç†õ¡šà—¾ÒòáêS])à»p'shôÌ	b8÷YØ¦ú¸‰G0Ù‡j=“²ıUÕÍeß;Ô~l·Ñ	|RØ÷a“¢®°0zù†Ã¬óöz.27NçüM»&mo­J®u5SXÈAôOË2Ú~¼øAˆ&ÒÊèû ¸û#¤-|«gXáÿgƒŠĞV1è]Û;r=S87GN¸t­fŒ^§%ƒñ`ğuŸ:Ày•4úò%2M\jÙì·A¾NˆÚD€›$*†xM‚•±'ÙŠX›R?ŞxŠ"O¼ïºÍ'ÄZŒ½U+Ög>«˜Kø¿Å‹Îîıú§ÆÅß=xÈ×S¿Öh.ù]ÜÍhtÄ:€7Akİ¹»ëÈ±'ê_KBÌÚÎnÙ§şjs˜h‘#°Ó¹Õì÷®ZªÈ(zŞà.æ›/ö	ú''ò]d±^İF¶Èt›ØTˆÜ ˆ³Ò—@!³ĞƒL³ÌnĞK(l»×§¦¼­éš;éH´}Špõmwğf©"G÷ fV\¿ğñËŒœO_WŸÉt
Å Q‡0…AäDØ‰ßO…2E¿úkÕ	£ÒıŸƒºÁkò(yñ&M¾³¿ĞÃY%ŒÏÕGÄ3Äš÷¾¡ú†+é„	y0)çáLrzHıÑ–©|úipJX¤ç»‡É¬{¡IÏË!ğI
2q¾ã‰ñY¯]÷GNŞşrÛ_erg'ÇhµİMØ>ù*-@Ÿ\å÷¼Ù×í;àK`JÂ5<oˆöùù—Éã@ı¸cÅ;-“é§VYVR_¹3¸TîŠJxògD§N}¿ó©.«‰ı<Á›í—7Kkıkeü>õ­èQM¬ÁKlS=6‚ˆ u5«‚Ï†ïn›}nşãê·0sEI¡]ó[ï@¶ój±`ÎQYÃšÛKfRùjûõà
ÆşÒ75ûUMä»¬éÍd«ì5âJÉNòÎÙ‰$‹~|,de¼(æÏøM†³— {äÆ'é7†Yİ€uF¸›íg³h‰İºBÉ|c¼'²X¿ÔRT8D™Ôu¯Š­éÊ²n EÃiÑIÔ’ÜşÀ1+³ÿ×¼‰›Š¡TÂª:R¹şv6é1ÌÌÁ§8Ñ&:1ÀÎÉÍ‹€{îê‚$òkoöàuÔƒ£hÔ½aÅ-ZC©+xM`0aLmÖÂ—€‹hz¹Í/Ä_Ÿ¡dGè¸±Yo’.IvléYdQ¢Gh€4ÈÅ:Vy™è„÷Š “è*®á ı‹<Z¦Cšì1­!&x’O/zã	µØà*gâæná@ ş+³$:ŠûlßuX{<LÕdULàÂVÂ€ˆ¹â2JÙ+w"ùMÎõé
§9E²™QÖÂnâ—X¾üöë­‡"céÿ±?¸œdTŠ®ááĞZ†¦*}ğ‰ñËıE^_vyxü÷;ë!ÆJ6?Ò‘Êã×8Ò0bGSÏñ§ô…ÁoÃH¼¸ÙUçŞt m4d!,ìŞF®>ï*	BG‚äukÑòr	Ñ´Ã4|ø­¥¾;%V±oƒ''LfïqI`ËŸS~ÚºÂİu“RYğèøù›nÏSúTôVëM›„–ßNö,#\Ÿ‡®ú&RjpİmöEÙ*´»€W¥È«$±ÀJ¨Ué/Ğ+ó@$qæb«òã•q‚Ö•ÀŸVÍ·àø´T±ZªüúxÑ(fÔ_å]2fÈ—¼…°@ âS÷E4Rt¡Œ¾Ù1fJ‚5DäìÈ#B6ÈÍ”ºTÈ·€ÌÎ9'—¬úÓo"+)Ÿ2ş×4A#ô’¨óñTòæ_c30<1z5* &Wœ¶q¾x¶[Ø%uQZ£À/ƒ’gŸ!Š7­ÑEuÙ[ŞMÅ¥¨yÉ°GÛT»9‚§“›:…¹åı&ˆ‡wµÿµÁÌå ÁR5àW,ksvš©“{Ú¾ÓÊsú:ü·—¥ÏÁŸŞ‘—´^—“ï¿ì—ğ¦}¤kÚŠø×ò6©cæõø;'µ2}:´d=öüRÓÃçõÔ;An—†æá› ÍÒw–‰ÆEı«N”‘µ$Péf:ˆIÖ!¤Fár¦d¿µåi8	Ô|ÅeÅ›t·Jß£Ñ¬È8äü7GÆõí¥à–Ò±r¯øR/Å-è|®ÙÔºëz›°¶»+€ÁÑ	ƒÙq4 Ô%Ye³ÅRP2gRt#wÏí»u^Ä£ˆ IÜ…œ©'İƒi¡uü@oˆz$7ˆŒQlˆÊì‘|…ˆòqz0v©úwt‹G«liÌ±¹˜]Ë6•†ù&öÄøøª‹šÆfQ!Í±˜\.Ò>òPï$nö…Ã Xûâh{%: iÍÌŸÕÊH½C¥2³RÑDğ8&óEp@1 ¨GÉåû+ùİµhüJ#Ê© 5piÈ‰§ã'T([ÍÅq^e·“CBdİø}²Š‘+Èç:/±"_ÂşS°vÿhø¤+¦d˜mºs`³`AÈ¬ä4\_L`
E×ãHİÜ2ê_€M<ÆâişöVæ,$ëGQrE	~«¤HnôÀ<†:ê»Èx‰†d[—¡È£ì¾®ò…ŸT«ÑŞ{”Å«ø˜“rÇÆø8–
Çíû5TR0Ç¢D‚Qr-Z³‚ú’ŸÅá4ó?2îœ@æ…ò=¡½ÏvL—ØXö…ycö#V…mK2ØÎ «{2¶èú›ßÂaâ¿‹•†,KúâyÃ´ ïÿgJ-œªÈŸúoÊ‚c$¦Šc1CW8^í	{hšˆ}Ï¬ö*ÎÆø–héÔg`|bĞ]&ˆ¦"^¼†¸oÍr=m¯$wb,…SìÑ[#PwN^ûÕ~¨p 0¬Â6/f8œ.ÛŒÚö½ÄïËy¬1»Üú3NŠ 3Ï+50—Ùmİº*5YM"È5ˆTZÌõgğIo¿mÊµ…¬xŞ,Lîd‚6`a!sçRY¾yE¤™_j¹1HP©±çá²z3–³Z©Ğ:ˆCìê±é7mÇd4Ë¨Ê;Îh"3öÃ uÄ÷«÷/Ó¥äU¦( &—!}æËuãÂÍiÄPÑä"ÕÀù²*¦À}8Ã	ú£ñC%H¶Îş Fu;kMĞŞÔ­ÙOlAªDı3÷ºïaîŞ–—İ-&tGíDÓ4RõFTüMs´©w‚mŒ\xX3nÆøŞË¶ÂĞ Ìñúi—iy±QBã—t‘SÅæ\Kç¨2—!…j_OÖ£¤j‘ÅWü7ËËâ°pæÂ»‚w„8Õ‰f2ˆDD6ò¬yèŸB+«í ô9ƒ,')-³ôëÿÕÍ)f°L;P¯ÕPf¥D…©ğaTv˜– ëR@®²ç‹~Ë"n×Ä¼V6€ƒqĞ2àe×¡àS„Y)Â ,¤×¥­ÿ¾ù•ƒ‹ ¡˜ÚöËızT¬^¸™ÿï¨–Wâ£´|ŸôûĞ´ãºÕ¼n×gKë©è>7‹ÇÄh÷Rí‚œ!Ÿï¢tÄi10î"M°¤C‹NşhÕ W?ƒ]dX¤Ş	,á,]ÍíÙ„ƒÙ™K$ó¿V6O“å“±£“äb¸(Ùl¹;êĞ^uğØ³(p|QıÖü¼‰ÖIËQ¯õé¥ßÊ¸Ç$¥Ùæ$¤ïRî¬É·ò¹Cuîj·dG\*èÈĞlsˆãOµ9æô°lDj}VÕ¦Ûš]BŒûR¥“…BÉİÔôÏÉS×*nT²&u«V@t•-O8;ş–`”¬íTşo’±±óÎW’~[hJƒ¸ó?«ø°™u­vÜª2d¤š~=§5È‡k¿îZGy5Bî¿ª¯4V×°Rë¯±Š·ûk7w¶«ûãèà„9M?8fö›ÉmX{p\Ô´ÊS3õ[šUeÈ„ì£ç³äºÔ	áÎpSÌ„l›¿m”f#Œ$Zo@‡‘º’ÛB¤PhL^eòœ#à²ù^Re7NïàÔú¥Êˆûvë(â7” {‘ÈØ\5oZ!ØóBÀ‰Ú™{ b†™}¯rL ·­ª¶ûVb1A îHäèRšPÜıÂ½¹¼½Zæ¼.„ªS›	RI¼xŠ$ï¯³R°à-^ÓXIÏş•g—¤@®ö	±tÆ o2±»ã
ıLNØŞ¹L0/39¥oJ¦F§®ÇºúLÀtm>^à‰âaE"êpYÑØKà~t„Î+Ñ$	,-İ,‚„A~·Ï® E,ÕÖ·Oil>¯ûcWÆÔ÷kh+qÄÂ¤ZYĞ¯9[AÚPmø¶|ÃÚ^ÿD€OG®Çy‹zai¹ü+ú´®6‡û5q€Òõº\"÷,> ®9g¥ÉêLÿg·!¡6/}~Ú]nÊÎSl Ğ™Ÿ±r§û—øì–€·ÒbÚŠ¸Í?ŸL'u!Ø	*Æ0Ìc-bJ„aİñ™ÿ*#éùõ4±äì6maòÏÊ£™¥ès+yæ¶­|ÖDÒ§ElŠ‹µ)V÷tÂòæ¤F³}ôü¥xlUb_Â"f*=è	HÓECçx9òÆã]°á˜tmRØìw¦ç%–,9/	¼ ş—L¨Rbyıùö²‡Y“œ©!„êRgİ[®=Vê±S‚ğ?–ŒÜ{¶“ˆ2VÍFä²LBĞò¹3ãİÛ¶½½1mÑömv¶Ë˜;K»à ÒxYğKAâ¼õt¸Àı•j|â|Ójø@ªKÔ`”~Ë}œrßJ¼gOÏ4Å)Xh¢ØIÑ‡Lä½ä¶÷ hAÆ_Qm„2¹…²:ô*€Öµp¢ŠäqæE5¦pnmqm0›”ÆŠ$,a˜‰ótàB‹H`Nn¨¼Ó˜5)7ğn:Ñ\qç]×`KğÙÔy¡µWõ`Çv‡d›DEoğrNã¢Ø=–èìÑuº%HWîZò=Ë%¥¾%YdGToH tö‰¹jEêÚñŒZÅ§#5ÌErr²ÁÏ«å‰{Løè†•qä=×	(Fß‹iĞ/¢km ?mso!5ô'ıÓó‚Dzèâ7»Aä‚)ER¨{R·	±¶fšÌİãJDÌOBôZüÚ`àÛ—]Mƒc|¾Ñê8 2Ãu3,ñ?OÙBû¿Õm·"›s84–ıRŞ/Ÿ™<-À‹–şŞÎVUd2ÄytfÿõšÚt©„·¬şbÃy(Âö=ÉÑ8'IA©/¢íŒ†Âîø€ŞKGî3qw)Ú–8‚ŸÛÃv‚/òüADÁÿŒ§…?¦"/ÃŠå£Ñ*“ô× üù%éÙäÕ*ÔZVózŒßj¡q’6"u*Âş7µÄSq§ÓVúš~ÊÃi‹=©n}—<ïàÑ“·0ë¦?W`òÿw%ÿFl:7( ïÅœc¢%~úBª1ß¢ÔÊ=¸º#i©”ëwõ7!QÙpm!¦õ{D~5êH~K5(Ğ~ªï\s¤Æ>EˆõDš) •™ÔtĞ6_"+İ9eÓ[˜¢Ü¶”v0@˜“ş#GÂŠÁ¨’À‰‰ÉHæx‹VÌrä>ft ÀÔ¥ùşç;å¦¨3[!#OªdöMš,h¨F®–Ü­-™eóŠà`r_z‚ ¶¢‰B-Àü	}÷ÒQLŠWŞ€ôc‚pâX9zL½6J½1)éY©x!«ÌR¡.ãm0Ÿc”İÎ"fŒ9Qï6Pª•¶;îÿş‰‰ºãì#¾sˆW¨­ÒŠÀ"#ãBNoNÌ<‡Ò*€šæ1‹´êõ´ÉN,¶œn^,]§ È¦…4ÿ0eZœÄÃâõ´¡Wf~kCfÛÀØş·«½>n~8ë V}4Ê\5 ^eò°¸†0åM@(µ"×s´¾¦õåwù$ÚoIºğf&¿vÆ«YÃß&ˆü0ŒuSF¬ 5Åš—VM
<iàÓ·-ßñÂª­ğ§aˆÅÙÏomµÑ•I¿YO“èîS0-q¾İ¶ğö™ébŸ6Ã>ä¶…“ın½1-ŒÄä¶Aåö5âCÒÜˆÇÓC !Ô ±pšĞåFÂh›/¥rAäŠ\(ñRZyOŞK‹VÚŸ€Şuş"Ñ£“A\5¹Bş¨8y©Ÿ¿ó¤˜‡I',eÇ`’™N0ÄŠ… ¹õÄæ›„ÛÊÊ­lÿÓèš›"P^Ñj•"´­Sê‹`Á+İN½òqïÉ£0[´o.DLã¸("ƒáõÊ‚”¥ òÂ³fõt‡ˆyºÕc¦Q¼²?Ájş3øâQaÙu¦š°•µŞ`Óo|JåRõØ]¹/Ñ‚ÕÇ–PéÆë{?–LÎ\b=)B]ÄËÆA1/ZƒÚ”ß“Zlèâ:³&Öİ7Úvçn#Ö¥’7¤BXŠ·’JªSs¯SªŞ÷ÒZ(DJeğ&8Æœï[ÒŸ~àõïŸV™€x»¼˜äûmeT	Å5Éí‰™‡Ûê ºªÙ…+ÂR»ÉD#¨
«j6˜ºKÍK›/LkQ+¡w¢
ãÆòúı9òDÎM¯ÈâÇ€sxûDx0zfŒ¢wú·©²Ñ§¬ 7 ÍÍQäLPMÓ0?uíœiîÂ,½±7‡Y¿ú©~'5 ÊTÚ¦İ²ÖÃ×!¨{£l`×aÏ`å˜œ÷bÏ¨Õm,6È„7Kä«ip<¥£Èzî>vo˜‹µ¨ü-#B-ïàÿ
õ1ğ£3­¨d’y“:˜ô²ÿ(åò8W®ĞD½ÁÆé%aNÚDn¥v´¨¢,PNÕ:’sú€Ô›Õ…Y£tIR²zøâ»İ^Ä”˜QèU[eê€œT&àÅU2‰Ü­OG29]º(YúñÓª}à)õŠÉsòÜıT‚ ­r×ã¦‹m×L•ésÆÅò«&‰EË'à¼o­e\è:¦ã±ÌßH¤ÌÉİÇİqî Ú„pæn€,ZÈ:ı-ÔYò³wâ2EÀº¢Ósh r¦Ö²Çƒ­‘IAâº˜ÔèÆ.ÙÿéS<o!ÆÅ»mrµíÖFµM¿”íáşG*¹qªÉõ51[avk¦şˆ@S-R<WrPNX>URˆh¾Xš§üÆúß
¡måïøaÈÈî#ªcÒìT®‹.Úı} ï2ï\A:Ë¤}ïVŸş8g›˜ªÄÍ•W,&V6’äE¼”®ÑtcT";… r‹ş\–ô«…b~1io±4PM†?D0ö°usPh)Ù1ÓËùp¾é®—Z4váN•Ò!Ÿºa’bâ$S<AUºÓ,]E"è…3'u6U©’ŞÆOÈií’h°è-èÑı&¶pè¨rt¢ãIŠìé)Ui:‹ÌEê[/ù6ÁnàR0'°cì&Oè:Ğ@Ñ^ ©+êÜJVöi¾¤ŞC½…ÿ	
›²Í´dIêµÃ¯İ…ofU.£
™—
Ü§±× ¤8àâ.¼uí/£)Ø Ê}°F#’JfTS27å=v3ÜmÈJTYE¬³¡6g˜õŞŸ¢³Ãh²&h›·ÓÙ’fuşª¬šÍ÷‘¯[å…Iâ¡R‘60•{‡‰+jş+ğæEå-3·mÊa!­„Ã7šO`d‡bF…R#›ˆLšDa~Z}Da2!¹2SÿWjL@“óâşDæ½Îú	†u?sLg‹ÀÒ|îÔá€˜ß¿½á9…Ú·£GGõ™J],Vä³HU0—ÚTASî]æw(a0ıáÃ2zĞ¥%U–ƒPQEf£M;©“Õ¢K¸ú=Ğ0eLl±ß:ƒğÊÒ¾ÛY»õG^¤…ÿW?µ9
†MÜ&À~XÊyÁÿıYç¦ô}*Ö~)‹ ^ùI+†g4YâFx‘3å·Dª}ô<¬O ç4“IØ1>ÊNÆvÅGpñLf%Ã´Vè¦özvÌ…5 l á½Ğa"¬§Ç)¿ÔGj•ïş“$´Øb(+¼Šz1äD‡ZrÓéÙN,şúÈZm–‹ØÒüß+Å‹YNt=÷ Xt%¿ hÜ‹ÔŠÅ^œ’¾n±à	÷êscEÚ	›N¹&õš/ŸÁëÆÀ)8-Cà*ÙVxæu“EÜì7ôu0dš`Ôñ’Ä‰KàÙXêÖbæ‘ôpKzxJ*Ñõ¹í^äYØmsCÉ ¤{ùnFÄŠıõ`,Öí¸*3 oŒCCgÙL³äç#¦DXˆ¥?ÀØe£è6B¶9#÷jA·„ˆ¦¾|Ñì§ ;íğ¥#%•.²Øë÷A±MƒòÇœDjêÈ90 )Ô+mmè¿×H:GiØi¦!n¼¢—ö±½­Ü*Ğ‹ÅøÍÎîşqKA/7£lL*ıƒµÀiÈb»ÿŸ2‡ô–Ûà&JåúÔuí÷íVº.ÚzT#‹Ì°yS#ÿFá¸oõ{B¯á'§BsÈa4bÛä"w‰¸M“¸ÛÅÇ•$ ½ÈÃ)x¸%vc¬g‡BRÿ «7œŸf$¹{‹;ªTy+d˜×¾mQ%a‘{Ï”Í©iö5\béÖV*Æáu\4ËjŞÊ}•ÛçÒw:H÷”O=t™¦ŞÓrĞğ\*ÂèOÔG8ReT)ÃÍZT¯ãÖ\po^90kzÃë0ú¿ãï+tiıïõÑÚŸ³ØëşÉß•Ü|AñDïÚ•73ùTûœù%ßªˆìCPùÈEƒÄhæ¿e0âÁøÔ·äÕº?Çø¤rÍ“µÀø~×*À±‡Zğ8³/´’13pæ·ÈŸNzB&(m „qÈ2l^-^.Ù¾Ê1ö.9ÊÏ3«ış+èº+„Àm³ôÙàÃÄ“c2jÔr¥õù 1€¥=ş)¤ŞšKÅİfâ‹Ä¼¨à£­½>~°Eûµï!ÕŠìtv
o¤Q€pÓ^‹{àŞw?½zmTM\ˆ M)s0/ª:¡‡;â±¤i q 6÷ÉŒq«>&.y#^†œwWU¨-wæèèá‘Hš­Õp6æÅ*n¦aãÊfuü,«i¤
yp@?"(×É$-ÆP™:ÙEã,yt ô²®5Sqé×’cÒµÍ6òî„ß]5˜¨ğ[¬8ën³¶_Ÿİ¯Œ*‰»Ñ}PĞ}šBeC×óÇru`Æ"7¼xtPKw‹9Şìš6J¹b»È êŞyw°}¬ú±åj`_¸^E]ìöõÒ®¾%ú-òQ*?6Œá»ÛãP×8îã²ÿ´×œ©šp´‘œßá`×Ğß3ª-6©özsáÏ²&V,ó£ïèÊG˜¼»½S» &Ü‰\Ù§i€B»IÂ´ñ+1Ùèût>Ö„Ë_í÷+Cé!íœµ!S„@:9Jmr±Ô¡Vi…Ès8ßÎE¨›…á©lx:ˆ>å•’Á	¨ÃËËïkÙËfv›jÆX<¢ß7¡Şà~ˆ‘8F{lŞğ7S3¶2H’]~€É¢å66È‚„yº1>w2}£
kÆ›"ĞN
î€wa¾ÇG÷ÑµÒ51ş
Eôã
ËËYŠ`À¾Ï]‡ÍQyÂ-Ğ¿î7x¥èüüõ>K€ M¼jÄß°IÒ·ñ8¯ú5"=k)…³¥Æ»T¸˜¸)O¹ğù’A¦3ÉàócÓœ7.$‡`Qm[1ãWÄ(^A{èß=\ß}Ëš”çËãÄ€Æ×Ú÷7iˆ¤;‰ÄIÆ,å@´ÁÖR[XâAş
7o–­Jp>7|$è%Ì|lNĞ¶Œd/a"F#gÙ‚¢xÇq’Ç€:yV›ÔîIİ–ÜÛÅ˜À'Ü ¶ø”;T(ügprgƒÖÀ¤]oùzì{PŒb v¡A¥Eæ5äG»¶Æ±Zø'iå\uZ¬+ ¡(~‘A;{VBÎ•t7¸P°˜±ä¼ÅRS]v…i¨é,;˜š Ç›Êi˜ƒ€'…=GáMy™½àÃ­–.={ğôû_Ÿ¨©-¥ˆãìÙIhˆZ=¢Z8Ïâ¿mK/p¡c…ø‚Ÿª!ı‹F³ã-$&—SÁ7Önk±„-»ı=#=òäS˜=©»*Ğ‚‡	6¶o@¦·BI´r†6Çİı[L_ßÛ6ºß búj¨ú®±†VGˆàhqÓBJ²Q³{ÙUbÈ¦by°#àI0‚Í–bÃæû‹Ó³Ì*\Àa£_âœ»(!%B{ÿÕjR¡n9Ï¬¶?wÒ8ŞáåŒşš…ˆ;I'â‡}èuÚ2É9kNJc°Œ«RbÅ'¼ß”ĞYrºNãÍŸFã0Ë!TøÛ‘›:>iõ>¥8ïF YÖâ‡Ú+=Ü˜µ4|è9sæØóCv›Y®¥cãCt¼s¥BB¬G¦kƒK}~“K¥F@‡6%"Èl¼xŠ“§ÈÃÔ1ä£ë[øø Q!¡jû¢,ÆÅÕy3õu3§'ã<±!“¢” >~ÈÚ¼åÑşd¨õÊĞĞ»Cè›ì(…SÆ*+zöN§	_Ónïd2œ®VvŒÕ£†<ç¶4Æ4Z`%„ÅœLÈeƒb¡ˆ— ‰CîÖT¬gÚ«ßO6 èƒZÄËëÛggZ7i:†jFÅÄm«ƒ–*0-ÇF=p%qÚÊ}mMÿin{us
¤™ùJ$ì–5Í¿œ‘Ş}g²î…mNdÿ"æ”ã7/­àË±Pø• çnyƒÔ =–e7Ë“g¹ÓiW×ß›¦2Øš‡äÂtvc¢@|´5ğ‡œG¢¼™YÚå,…2‡M!“Š¦¿ŸXdBz"’›îİ.…‚Ë]´¦×Ea$½s±„
â5^‡‡CFAàÉÈ÷ Œc¹ĞªõÇÂƒ°±ô{Ìu!0(± û 
R¡lbøÙeI4€zÏûbTšéşe5ŠŸìº³~@M%l4C³kc¶ ¡ŸW5oÑXÁU ErĞT"xÂp{H ÚÏ³gøF'Ì
è«oŠtÊ=ôJÍÔl˜šº=Û/Ô@ı87áÕO;Tqeƒ'JyÅ<ÿá1¶™h6¶R/ñ::‚êàıõâÍğÖæZ–Äƒ	‡R¿á³³êóè2³«¬²ßæê¬3|×À}²ºtü6bÀVMÉÔn¢P9ÖçJá8¸7wê¬2RÅ¹°“ ŒÌÁ}
 g’õcvİëi C´«"RÅCCŸä‚ãE1‹{ŸP)H”RÁÜ#lúàGõ’µh–*.Å™F‰º8¶6™¶)H¬rù)ú
÷MğJËî¥‹GveßıWMÊsNÎ€e¶éòL¹-4<ÛC3KŞ7Ÿ…$*w6v–çàü0b¥È º˜»‹>q¬œôÖ6tÖpÒ û¬&¯ßMãõO(©CÄäwüöÌƒk^=ÙH±9KZ~ºúa­âºÑ»È,D¯çs¨á6¢ö¢â•«%*¢9»™ (÷1€¾™ö§A¦¯a¡şùã<Ô3­ò®A£¾ÍLŒÎË¥A×\?YòÀqzn>©nêQ>®ï#Ø×m9îÔK’ÃI§Àõ‹ü%ßJ]($@¬ÌL*éş'Ğr+_qZje"ñ Õäí®J½À­N•Úàü@pw&š¼–›Wêk"ü!Œ'ÀNù¡|l9V·@Â7lÆi”‡êïó·>l\×"«•f`Ú\?t2gê¡L<ç,xÁ’êÉ™]Î[õóríRpc>Âßİ ã•ÎLèöLŞ@¯ T‘şI™”±€`^Hî±Ğ¿Ch“¯I|Ç>(A-$ÖÕÎùŠ×a%‚+²á‡€ú8êÜ74×ã…Šº‡p)¸\#qÁ:õ$aOŞrˆ1÷iG&à¾Ô?	¥#ùYjb#Íún=k‹Hpò—q†oérÆQn~şPyÔ?é)¶£Ï€’:(eÁ“ÿ²2V¢jçU|š#õ0Ân7Êª$'•PĞû.7ö˜DÕ5·B'\ê^`éìg0o·ªŠ¤[¯…Ã¼jns/~0—BïÜ"·¢ø2øê¬$.g˜L£¢jÓ!o	8@¢Q˜`€ÈBGå[Ğc¯¢Órg€0£ü­Ûy8`ÇèíYŒêu¿¬ºá:g˜àœ'Ü™¿ø5Lå˜5 Î‚¦Î…¦v}ƒßÍ€…%mœO$Äïg5bø¥\áD[­IÔİÌÒqôÕVr§{s7óW†iÔ¦ÀŸ~·¡õS¾r•0•â–0†*’ “$ÃÎ+½:kä‚GZœÖ€±ºVDÔ²¾™oFÊ3éûµ½ò¢ÒghXSü@€Ë…ñ$Û5uÂ€fÂ¨ÆŸÅ{ÍsØYÕW `èäÃÉcZwIêÃüµ04
©à˜X>Fã¦f„­x×Ï¾»cªtjŠW¢%¨|Ô¦±f[”Âˆ6¡:|î‘hn)]
@…zé"SYkş¹·è˜Zÿº?)ïgBÅ¼J¤,%=l‚»÷\‡f]“8/åx6ƒ¼pè2lì¤µ¼ŸE¤QÌk|`'”„{V;½·O;”ŒL1…Šn<†L„‘¸¹ZáİÁå	a"z˜ñ9+3xõi×i½¦ÿLV-‹;8²ádYì„ñ†x¦pĞÂ'ƒ­>ËÛ°¥ÇQWVç;Ó‹™[›4â§Ÿ
pF³éiÍ!õ|İsî‘%$¬ÌQ,FÍ†Áx®ÆäJŠà•—y•şÏ|–ØM‡ByklFÁ!W£âYø; ÚD–{ÄhÌ~lJ
¸mD°âã¤ªTzBï¶¯ø+ à—ñ=ú¶ğÍı<“@ìŞí#lw™4”Ø„ŒÃß°Í³Óx}²µW“6ïÒ.´¦ĞH*X
®„öÿ"÷ÊS.•;[İkzâI€?Ì]±´a§Oe_Ô	OÒ‡*æsEP¼ÄûªŞw6Õ… hÃ'º”ŸALm$½JqÖÜZö} £[¤d+…ß+
ƒ½¤Œ[KmÑÿûÈáaR/p´&‚{IlÃÇğf‘Ï\Èõ.‹MüÂÉ\0n†´®EbÖ\CSºötõkAĞS™YdÎñsÀY¨KÓÒM·üšìÍœ¾ªÄšênt/UC(USíÆû3†¦ÿ¡‡nF·XŸCú#HHğš¹(îe©OGuá/h-iLZ™=uôüñÛnrš•ó¯gñ´¦CÜŒd€qyÊí¸
Ï
0}Íô®’U,J-ls¥rŸ<ll×V|l/*ó;öåòw+k¬ñÙÿ¾Ñ17<¡Ş¶ü“Oİİ•G4¶íÖúE
×‹ gÖOøßÕ=°â¿Ã2wP
=¥jÕ8:cö‰ı:y]Ø-„A’–%s*[ÑïOİ¼Ç±Gåe˜ÈîAáG™Õ|,°B3Í>ÂÚÏd:QV/•…f7èÑzó8vk‹šH-¥½ß¾ßÕœÈ#VÔñ›iq<=IËì¸€. –èr¥*åç?ç•´õÄ’¯ÚzH£Ù+uŠ·ĞkUæÓ«rN)ş*Û•‹/IFÊñà#ÿ~Ê:†nì ŞM-cc+%'}¼?“ÏRÓ‹NÔv$Z1wK×%X¸“«½fJ®,·;¿^qLx~àä‡éFŠNò(…]QW“ìêÆÒ‹‘m*ë@²àrDÌ¤p/ÀÄÚ™å¾
Õ$ïÖš ®Í= i˜¯Ç|q¥èßVî‰2D7ÍŒèÆÃõ]{cO…m†ŞxÜsR!+Zä,¯g^JãàÎE6‚«î¢Pı*ç1ƒRK¢u‰|m–y‡Çé¡‚û‰*3 B×ù”ëãî÷{eÑ%1k+˜§ŠpV>)P­ãNb/˜æ´™f‘ã¿¯Ä ×Ê3nøìÆlêÕéÑûÒÊÕ8»­çån­ávU)²bµå}rXÊ7×||™e….ëß^npú±f÷ºÂSOö¨cD8ˆ8&è©D™«ˆ'Å‚ü¤ÆúŒO›ªã­Vü·+f1‡©íQ*ƒ|gÑf’D
.Íö
eyZ(ßÄıÒæÂt Èaúáy…ÒÅ#É	JV¹çb«ï4 />ç˜+lÀĞR]Ùù½çÏ÷U±³èÓ¡ì¶ŞÁcíà Xê+-™›µ¼˜©hyEãÛìí‹|÷ZË¡ŒĞUq§?·ä.Î± X!Ñ	â7—ú
$g†bzN¤åqÅ·Zƒc}ñğåùƒÇ(#Ş:5ºÔtÀºÎ·ÑÍğ‘ˆx¢SÎQ)j|#¿à¢A&Ià´9vé¬c(YlÚÙ¨Aš÷i~«Yµô.Î<“áàÁW½Ö>ô&
/³õ?ñş@]!V”ucÉ'òÎ—KUC‚³ÜÄÆgğbÚä°fU±MÒ|ü$•‘r…(ì‰fb-Zò¯x]É»—h˜óÛË]#wÁÁËïqô'§¡µ¨Ú?BIƒÚ7O'Ãòâ÷ˆ»Ìø[2¬ˆjğGÿ"wÄœÒ™Oµ§¸Ämó¶ ]‚8JD÷2H€+ñ¨Œx˜“)Èb%k¶¿e)6ˆèz…ô_İqiŞ)*è’ËŠKB>º¦ò»Ã²³+ZŞ„/şÊñˆzè¤ğÔØénM(r4ÕP¤öíæ ˆB¨…ü?"¤`S7ÌûÃR'–_Z;M¶Õôj#÷!ßÍÓ×®ñ™ú+k…V6_Ù:K®ÆDØS}u˜t/Ñ?J†Äœî»§­ş¹š†Y%,Í)ØíœÊ»Î^•Œ–&Üø€5C_çKê›<ÎTÓ@/­Kó¡ó>[NÊ¼4ñxZ©(Ç|+Ô™+ƒ„×»ÂFXØËë÷A2jÙƒÆr=,»Áätê<Êçá}ĞCó¡–¨ä0ò0FïŒEÒI˜j
nÅ@7qZÀ×ÊÍ²„ÆßuÛ?zC ­ÀC^ë£W4>®ı?ÓùøÌ(
‡ÿ÷í¶c“¾ƒãçW:¡‰Ñ©o¹Ï£9ºS‘‰<ïµ{¸—ï˜aÔÔ‘û‡B¾ÇE€uqo—P„
ôyâ–à@ãÄzm×ÛÒnì'un¬6ù_ó
"Ü9¢Pçù}€h¿§ŠÏ¦>-Ğ2¼%”ñ:çæWfÜ6@¦°9¼˜Y£›US'lõ şµiÓi \Û3Šs£×ßkƒXqEÈêğ½ZĞğ¸œ£M„è0·#"~	á`CVS™¢øzÊ}E˜³é±¥Ş¿-’¤àÌõ w\Ó¨"I70\|İ=€p‘zn>8y¿—^¾hÂ<Å¼ôØ2³¯.Ø07gÂzcmĞÈµ§Üzw–øúôTĞGoû¸UÖ‚Z8aø‘·Fxi!Vx8ä%LHÚMÇ7[ŞìáÀÇ‰r|0‘j:qæêö¸:‚ÕĞÅ8,ëÉ¥ÇNĞû¡™:½Jš’4şï"+ÃÕùÇ 5i(´«¹ÌSşîİ_/İÖÊû‘&îŸœï¥¿°Vÿ=‚Kğƒ[ödq;Á‚I4WyÕzDN“p¹ÎT3/÷\ÇÕq® ø-…[à‘ÄzoÉ[şßèïñå~#0?VÆØj`ªBƒTÏ€+TAÖj€…sqûõ*vÄƒ¥HİVÑæJ‰İ€Ûmë¤>ê[Îš—;
(„5¥ÀFd`ºÇ;|²ù	ˆ ÕÌ4R±0´êå!‡)ÈŠGÁ>¤ÚW@bãmš˜rQ³¨'ıµ#oôNTÅ­›ÈÎ©ıDAXQíÏéÛ·[ ³Ù¯Cç³5ğx\‚¦ØÓ?¡ 'ä]2›¹2İ% “›ñÉAIŠÙÏ–ŠGLÅø~»uñ·åÀ6»©#êîs´lµ7[–»tæË¨Ø“W·WSº³K}$ír¦ Ä‹3bŒ×•5wÑ[Ö4:±1ªõâD?“€JĞ{Š1ìrK°Ò.|ùÈhîPÀµ Ä£'„œ  TZA¸uˆÈ9“K‰ÿYÓ£ÌKLÕÛué-C+&«AVÙ",c^X ó÷
èÍ>JI³£€=W¢,Ô`ˆ²$õr,X>ú6Á©‹å˜¹=“ü“IˆÉ»wp2¬ŸWDe_¡ö~J²Êè6»·K¥ü|Wú+~_ñ}ñ¶8ÒKØûÙW,ÿ%l"¢™qÍšI§®·L¡xßkLÒTQï(êˆ
±ó0J¹D]Ãã]@b¹ªo~ë¶ÄÊ$ğåmÕàqÊ™Xnˆ÷ªğeD#åĞ¬¬ÚC¢†jØJıÖïäÒcéBK¤†I¢¨qUPm1õŒZ–xÂˆ„™¼#ÍäBŒLÚükúóŸ-®æØšÅœÒ™sã9'{dFú%$ï36ˆÖ*®¾‘b\¹ÁK€*ÉDr'ş$˜¡¿%‘y]Á0«ÇJ]öœçÍfë¨¯QC„V¹½ÇGÏ$W£m¢ä0élëxJ“¼ÄÒıÚƒç¥5¾íQs6È¹k‡4±ŠãÓ0„MÒ*¿[ê¬¤rÇ7PKşïÕ'B²ûN2-ÄåH»¹4Pi¶sÚ´ƒ[‹<}S+éUIÆ´šÉ÷±Z÷ĞÛL¡pÃPØ€.Ü½°·ø¥-©Ñ!«˜N%ëÀƒ
äxÀB¥µ.—õvğUw›ÿZ4
˜(È~‚sod:*aĞ‘^")S‘çe ¶§‘¤ŠÇÜ¾ÈıQÉD wB¨µÛéÃ3¤¿6âöÔñ¶E¼Ï€N®ÎÍ5Np÷3“±°ŠH3ï¥¸H
§[±ã »SÇ™è§·#’äØ>nü½b…re9U1-ígtÉÕªÂ}òwéù0½tzqën“~âtÁ©%Ÿ.c°ù EKùÉ$NN)\Ji§;û)lu¢cnÜ¼I¦4Ì¥ea:µZ•n	ÊæTÿ>·y'|ÏGfc°€Kx•òĞyÀ-¯A9/z…è‹øqÀÙÄ|´GŠ«TÇC7XÓ¢Ò`ñ#ÿ[Û(B‹aò5!…¯-~]GUıÒÿÙH³!¥ÈBÅ CR<‚è‘æ Š¯!Ü¬a²<	§åŞL_Ëéo…¶Ñ%Ã-x?õ`à$1‚M¶bƒ§æü­;ñ_‰nq›2<d÷G¢«w+|õwóîâ…Ê³…/<·"`Ä-tiL ‘àõõÑV) ‰º²—Ü£’9œ6Xz÷qà÷C™EÏ²7q—­™{"£RıëGí0Eé.l•h™JM\O
kA)îÆ78`A{2ËºÃíã[š—'"‚#+6(!ƒƒ®M7^c˜.ûW’ ±Äâ0V¶ÓO$Ìúî¡[wK"’[`L‚¯ó+ÀAiJ‰ äæ p`u€W½Tf¾êÜI'Ÿâıb@¦kŠÚ\:—xµÜ‡Hñ+@LF“ˆR+’\_ùúR7çÉJ/D%±xó;¨êá!›”Ùd«Õ¹õ.Øl9Ù?ó`>ôÊ”ÿêY™ŸİMn‰WI}_”6I±U
ü?XÉüÀMv%Û¿Œén$æø€‘|:_"ÆîyDŒzˆÉéğş'BU…´L³I	f"¤Ò.£J˜<¦³„ú~ór7àU×~[féTçWPz²wûˆLgÙÏœo:P^8;*½61iš>U©á+qØ¿FèÆï×†Ù½âş¸°èÍ•¼+4TóCWÒ¥ƒ|Ş‘dşäğ†2>¡=Å1æÛBÉRÃù5SòÌï|ğ”–	ˆU`aş
¬ÖéRabHùNÂú¥ü!ç>¥¿p£èbõ„¥‹QˆM°iNM6«V›+ã#5Hç¿QwjıúS,P®¾¬Õ™Àâà9¿ú%È¶»†şMHÀ‡&'83ñ‰+W“}áˆk%W¶3+5ë‚bùoAš ÀÂkõ^4÷ÓQdA•Cìˆ:À'¬÷¬†Á]à¶Ò²kÿ±‡Ú‰şIyA$çSp ˆ$º~Ê}.rÃ;ƒã@’f¢œY˜7Ã…ŒYßŞ×=Ä†›Ó–xOã0Ö ED)XU(ÿgİáí
7¡å«w¦Û>ü¿Mm_éDßÈƒm8…AòË~¿ô#A©È^Ke!‰{ñºs¦Ì¼$ú¤ÒaÒ²›=ÃgQh³ 4Ş¾À¡åÅrûÈ,e(_YZÜ•–2á eõñˆ¹¿÷ÎvW-Q&cÑÅJ’ÛÎÛ(ïY)h‡²†5;’éÿñª–ÂÑ¦âª„-;_şu>›ÀÔWK«)Gş<q½Í8îv|@{koÎ³ê±ÚÂŸÿŸ¢‚›ƒÌ¸jhÖg *3F
ğ×¼1\ª€çšlÈ‚F/é÷2(CqÕh¤˜ï“Í+Ú»"\¸ÔÆúÇÊsİåPô&Ñî­}ê„­•ñ&@Ç ¹æDĞ*lªyPò_ôÑ5ÉÏÚC-Wçòc`ì	>6zÎ„+÷áæB™t;v:ã}÷JçœZ×TŒœê6·õ£fÿŠ.2° ‰€{º+Â–>Å½¸ˆŠ±$Ÿ¢W§N†EšqIı{D+Bãí¢œÓ‚ÜŸzíí<-¢„|ÕhÒó½wö4yX¶vó(ÅÂû v›KJ…+†N_=ÇIµ`S÷yÑ5-k6<„šÒ¼C³ñT!edÎÒ×È¥¥”&Çyæ¸fÄ·›•Ãä³Ït¾|Ô›ßÚ™lÒG
ÏD¢l%ßTX—¿ïõ”³Lq—.O+…Ğ“­i³8ìªxOòòŸq˜<SÀ>³&e±L•:q¤pl³gT!†clÎ·IÓÍ[=€%OÕ†âOsßMáì™È`T˜Ò´£Î.bÄÚÈÌ×~ŞÆ§	ô¹ÃĞÈª”æ ¥)ƒ°ª¨(ÿL¢²‹¥dÇ¯F7mäjµCò‚T@óyv“;·DIğ„n}ë[üVú—€Á2@ĞåµF0…áhƒFöåÌxüfw8ı^Ô’õ÷L~íĞSóC0òtÛ6ÜHU
ØtÍA—TŒ›f»—NX¾7*9Rú~T¨ûäğÌŸX¿ßNÄ†ñegh¿‚Æs±ÃÊ_0VšZ×®Rÿ’éÃ'‘ZÆ‹4½«…|\ÇEÒC"Kw4Æ×tÚÇS&«Ù‹¼íó6ŠƒÇÃ×«ë<˜ÂÙõpÀæä²Eï7–ä‡X1„n½”»Œe.´sB³‰7ÁàÑòxÖõÒÇM&œàâXŒÉ},z,Ì ¾Ìy‘Òy®
_İö&"Ôø‹‘âŞ ÜëË|‹²¥¿ÜJ³Fyèªs
Ô¦VI'ÉŒšX
+(,F,ç0‡éÊÁ#ÃQø'øW½6“H†9ø·²¤ßßs<wcaì¸·ñÕÛ&çPb˜wM>9û"[PôŞêo
üMæ„[ÌiKíL’1‹v‡ŒW>Ç‡ÖŠ”´.a9Ë©xäs˜Àˆ‡é¢E‰IQrÁÜNš}d:˜Ia±\rjPwR[A½#¡ä¥ó¾à»àõ®+ú?¢yyw Š_6¯¤‚ÒøÆ¨>Ìföàvÿ^*fŸ­CRbKëÂJßFŸbòÌğ3„‰²<=q¼ë•z´§ûb»Št_ó¸¼L‘tØÄìo^8ùë»•XÂLøC›sÊHh8úàG^“où=fQ/Ñf*¡a™tØ1…ÖÍˆ(‰ê}¦ìrq®?”?‡wÏnCŸl½½è úDüp¿Ù\ø… ñ38è³í¹÷2­ß[¥é­?Eé¸–éú@eúéc(‹7ºd—»ÆÇ"ÏAÑPç¤½^±øFáÍ§½Éµ ÑÑÕ4„ÄŠ¦)ôO/ÓY”KÔCÜœPkEÓİgÌÒ71Ãş)ñ=IÄe›—ê€¶õN#æğ·ekÍ+-PêøÙ¢åîéNŞ²bÿM…å	ŸÂÚŒ6gş8ˆëË¶O}NU€+Lˆ/³û†0¸T™Ë ‘‹<ŒZ0éâŠúé¾kóÖh´Ğ…UÌàÊQòJ@F“^iä8¾•vŠMåğ8g1èÓ­[KÈÿU•“m ­Ã¹…á¢¶WŸı[”jÀ|cXŠ¬=ye«/¦†Ûy¸ƒ*ömæñïö(Îë½eZHhõ‹Öš^D)#f´Î§°4øQ;Gfr6*Ì´A4wİŠw"èõ¤àÄVÌ@o	ƒkŠÃ4"fv%Œé”Ø<É ŸyG!g³E>G¶<ECıl6¹GkU'›cYÕbIãî:ÏÈküŸ+`'7È£=
Ìm<P›¦ûùéÃ9Åäó€JÁ©ãçsjy2’"Œö‰cuW÷w?Æä¬Â¢5ÿsBµÁlÖ¢ˆr˜‹’gq¬l·C•'¹œ’]C~†‘ š>¤½3*h¤<Õwÿ Dëm&³&]€»L÷¦ß~ßq!%pŒñÑaIÒÓ$ÒJF#ÇíW‚PÉ¬¥MMòéö‹ÊC‘æ˜ñúN} edİçŠñŠk´T.š?.¼JO^!Î8tÁæ\&(#ôH M¬(_’çVï”Îí&‰Áñ°!9ìVÊä.¿'ƒNäzŞZ,›,°,½‘~Á@ÿFƒ~¸fAŸş2cî”‰ü:è¼’4nN.¥ç4ÿÜ½Ş'vß­h$(õ¸U¡£åóºl²·T!2²ÿÛº°­Íƒ’,AìæÂàºJİ4Rîc‰²c³–ï8oÀˆap:k‹“ÿÇ"½*ìîyî'˜Z<ÕFóSvRq!H¾©^($Ï:&åÆ×Ì/á&‘a@Æ–¾øúÖ-í¶Š³.üÚğÓ=’7x_Ü˜\ğ]*UŒ}1¹Ê<Íà¨ÁİRuTqÊskYá;Sê ’´aZi»şlôúO±Ğ|¯o®/$âàŠ·™>#“l:ª$V_ÅÂ½†€®pÆÿ–ï¶ûÔß$Œbî[©€­¿|mn±ıåŠ%ÁYDô™)a ƒ÷HÅ)«†.Ÿª&ŠŸ…o(«Z8²_1K/´,ÀÍ'+E-‡B&|³çùÉÊöV÷CÀIb¼\‡š> ì.mµ‹8Òî¸¢š±¾Lé!Ä·Å	.ˆ°]R¡Æu¶í ú)šÅ‹Æ^C’öÊˆJL_Yk®ã9ÄäÊÂÊU>7×Ä^—“¹Ïè€_Æ¦!j T¼i¦*	U”‹SVµYw]ìˆéÈút7øC}Z	ü-À{§XÃç}¹şßçÕe–á’¢K€ê+{=~İœ©à{˜éfsQøÙrõJ©§€ô½(Ì¬»ãÈê´´<yŞâAê_=¬G5Yy}h.Øâÿo®T¸Úª¿FˆºµN×CÇhy=÷"Enæíı/ÀˆÕNØøN%”LFpùÛœ÷hèL+„L»=ngÅÓŞ=Ùd0Veš$Â»ÒæxĞ³8ÓHĞ»øQ&óEM¼µÌæ;×É‰UBT@’6Óùk#©Zh1çÏt"æA<Áèr³GsÍ.ìJ-A´:›¿Èù­xkšc¤3ò>[H§z¾²¹Ä$†MMÕl"gïeSlwOU’aI£ñ%e?wOš âšI÷ğ’ËaØÏt"Qïúß/2¨ğá¸q`‰¢â`ÆñÅ¥ƒğáJÄ¹B¶ş$ûÆ°¼ÂÌ‚ñßRˆ…»™Ixq\%\Ûã¸Ï$Q»|)[ıP?5§Ç†c£±ùS(Šâèk{ai*Çáa´=ù¾
…Ñ&µ98.™Ô3Ã¨ù3dÉjSº3y?° ã5NŸË€ÏÑ;‘-Fªy‹	ØYouîåmñ*i qu:gPáí0hfğ<'í»¹˜9GMRb'Rš… ú?)(hs°í M;’Ø£* —€ÿ@êªÊzª(7¬¿õ'ş
|ÂGFŸ©3Ø”-J`Ã£'\6ˆÅëÒ Kcª¦¤e·»³
hc;¬¦®t4¯cÂ³Z=z»ğè.¶É¾³l,¾c‰ô~cUNJjH$"#` 
*j˜4€1Zdm.#ŒJ’<­40älèmÆ‚o‹°[½b2ş™8\‹7¿"±çäeePÿ
ÎGÕ5\wãH¦v èK'}i‹&ê²5ú}\Ûätû/Í²TÍ» Œ_ºèQë^nâp«\˜›%÷Rä›À_ç7Áı_‡
7¸-Ûÿş~#³«WPÜüæ{÷s¦,˜¸£h¶úOHj¡“ŠpXÿ?~JÀÅº€Àmşî%”İñç”˜¬\Ò—£Yìø=È#¾ÅìYxüÉ `ås7Æh/Â=¦ëô—Zšj÷Ó
£À-%‹Ù\+üñÏŸt¥b	¢}Ã]İxœì--d¯×¤ıæ¼|ø|'y¼.°n¹ èñ+Ğše»9n€x¼!…wäááuÍ¯Æ(¨ğ/p®Œz0¡²¾æEË	wü9»ìïÿ ĞïĞİ¼P²pÚ_^v½AWYÛ\ËıÔßEûùŒ¢r]b³İ€.³th­ó%3h@õÇ?[A¯|÷ïËRã¤„Çv%Ç ’Êß+¬´™/ëÕŸ ú…x³ßdØò‰fxÏ î„îx1~^ÈFiŸz-	D=³««”ş2k§ cA?¸ˆÇÿÙğÈ”öNìçj[Q¼Ê¤È<
sÁ3¥Ú7k¥2”©<Õ…ãÛùıpñ&ÊÊVŸ—J{iYô6Š§Ï³]UC¾A/¨ÛÍÇİ¿@÷€ïãÉæ\
h€ADÙŒ2}$eİ"¹0X‚ê›ÎŒ·²p_`ÉpKòRËÅÇé©ŞT¿maHnÒ½ÊÎ5qzÓ:µñ	î~ÁÅ¥­•Gzí<ì«ŠÜy¡ñÉÌ½YR™§)ÄCN?°“%ĞL€¦´Fp‹EîÄÖZvŞÕÛkîÎ8‡•Ro>h/ÕZ_4Qó€'7Âx	İgP»‚ŞÀËD¾5#Ó	R TyÉİIlÒ¡õ´ëÊ|i‘’g-œæ˜ì,ßmå9
0&_½?ºFıÉ]¯7f‰s$ù»blr®j§/FßpÒÖŒZ$%‹ì*LïwG#ÿ' ùÛÖM\œ4 ´‰ lf¹ø©¼¾yÁ@À"ç€ıPDšC‰i×¬±’‚QÍ8õKWadÏéÜ`¤Jô‘‚)¬°°JåôÚb
ôìĞÿãˆèåÄA6¡»EåwF9®qÌ•~µ/ä )•'wÄ`Öxôvo+Ât#Äæ(	@×~vL}fçr&§>kËvÊ\°áÇ:r`n^ Ö¡sĞwLõ7ğ­UÜ£vjuµFœe|•ã´Ä¥	öÛ%å-tĞo@'¾«t»CÌæıdÄSc{²ĞËÍ÷ø×^ê~m¾Ò0W¦}A;ó;aûB„W\+RZ—f!FM„õ&ô¸€YŸòŸaøEI±’Dçá®A>iKş×n­Ó+¼©ñÁ[QÑ›c1šn=¦EZŠfbŒM8&‘ÀUÀ¦Û;ó¢F¨Ã/6€/‰õÒæª4¢½â¦àËàW^ëÜ[ÛT´ü$‚Ø<'òè€ß"D”ûÒüjÉµpàåD«dÀ@b"QÒkó“+uÆJ–;şÓ$ÊÏ´+$ŞRPDÊû~Ãé Ô¶q€üúŞAÕ”§k(jØÎ„ş<»Z»şç@¹óÎDÊ~¿ÿŒŒ%´¯ @IY{jUmĞàóşú\¶Ã€œ¥ëñøZ¿û§IzÜôäIo™¶2i7Å»C?n2A›¢F¶ŒVW°‰VúÂ]3W®P)ômêöÂykòéÎíœdÚ%<˜‚ÚW?ÿ>ÌJ|—¼ÜĞĞÆ•ƒCnD'DE5ñ°Äg2ƒYîè¼„„ŸvM&ğ²—êB›Ã;²= ùu:À OM;ãùè½Õ$zMÈ­ÃÄy†Ø+•ÇÄéØYÌë74µV{kuF G‡OšY}Ãp7É²¾Só3«úø¡Ñ7E»¾efÜ2^b¿
øomøÈŸÈF&)'~XHò¢$Ó
€>y År²ˆ¸ë_‚Ÿ¾Ø¢¬”òÅ€ãÇ!VîÒØ´ø ¢|›ùãğ)4ÀÙ¾$Æ]ÄŞÚßCö]B˜!y2“~ÀzRË±ÑŒ¥+K5*5ÊPÎ~2‘v|RL)øËg2 ìlõìŸ{›¯TÖ¢ÄG‰µ\ïôXÛCÉáRŠ+¦Ç`ÈØ¬§ç=£‚ æ¼õe¡uQM¢VÈİ†p¹¥¤œîû“OğÅJæ#ş‚ºèÜÍK Rß†µê¢\´<¥«AŠêÈGR^#	•*8{˜ 	-Hk¬¸ªWc"„ iëÔ*dúO1Çx,f4‰Í†6îBGâ„è˜l0Äÿ}3¡¾ù5Õÿœ	uĞö¡ëÁ¥Àå©÷ªú¥±¥Âê2+éw†lÔ¬â=s!6ûÒÖ¥šÚ2{†y'¾Åîğé>eÄ7ú§:ä¤8ÎhŒŞ–ß¸ä|eJ†º_£îŞË)ÈXS–AQïìxäƒ6ç§F|ø³óX[W+·¯É·8Åu†À‘5@ #mÈ.[Ñ	æíİóãş¡^NçÆ3·šÕS”.¢“Ú|6²UØT l1°pÔ)yÌÿ²0Åˆ¡²Zk]âl„ ÓÙBäbÙÂ~ô’š"òáb% û)Y³]5Ÿ÷HÕ=äWœˆ‰ªÙ!3MœG*¥x~ÔàŒwæ‹F›à9)
{Ó8Û 0§‹Pã2µ¼F= "ÄÑªpzpç›ü`ƒ	ÎJÀNÒ­wôÕXoXïJM×ãŞ:¼‘9vOzV‘Y,ŠÏhÛ¯«-Pzaâ~?àB¡)ºX´8]Gø ¥ë@Yw'Qr(ö¤6W»†gTj$ÓÛüZ…Mk0ñdmæ[J~wÂ@a‰	ì½X—êwX™;sbÎîl6è¢¦:b›¿gÆ
ñp¾ªè^š_¾ø{>¾‰V!:=u°Ë]°t2D‘¤ØÍÖêX$2¶¹§17{ s7‘Q |rÄ¨beQås 5ÈAµÁˆ¿l3­èUUN[\ÿşÌ¹io¢<Å†YK¥Rm,´©©“‹¤.ş•8 ~.uÊ
u8×NWœÊèGë!µJ~ÃP=™É¥ŠúÿÏ_0ŠıÕ2ÍøÓÍ3ş{PÛ”h
òÓÕ©wK°es‹¬ô7úgã^ÿ¤õš!ÃêJ;#ñÅH,™âünÈº¥j¼~ÿ[Úo/ğÑ÷U À]ÇsûT2½7M*5§6ß´»zÑ —³ø)D	x–d#¦˜™é>*¹ÃVmSlèìÜJ¤öçŠzUå²v=@NMõ¯)ô(úqìU1fËiù1U…Ú–—ü>FmÛ¡yåÉ<Æi­íÛ8w!Vˆm®X/,ŞH1à™{£°àÏ„¸™~­éZ³>|›ŒYéÁ„ÀI¨>mÒ¨XûOYw5ÀñäÆüqÚ´” ]€ª‘˜4IÅ‹ß í¡ğ	-¯†si±‰7ÑFZ-´ÿI³õ*L(<™»z÷³Œ^qq<—”òÁê°Ê<·;£K·ü‹öUçrw˜0É6a•*Õ>6Ì•D8”lA¯dZ¢@_Ë$°[W“lœfé»h'‘¤X…ì‰;[³®eÙeÍ}bËŠùbIvQªËWôê²uÌ=å,9İš±èc‰úòû©ĞkíëXnî1ø.k°ÍºS¤ñãuÎ|W<R§@ÎıÁŠ=h–‰ŒoÍK÷»§gmÁÚ¸¸l´U ¯)¾ÉHá“UšØEv\`&->ş+ú‚é˜o’9ââ§yÁĞÖ«WFÀËÇùà‚Ğ‡•)ÕwÈmÚ#ƒş•H$e†ıÙŠi^06OË\*ršß´G¤ÊÛ`Q­nzøü¼pé<ÍÜúqÕ~ç9/ÿ–-ÿÎøòóÀAÁ¤NP$yè‚}RÕÔ	ÒÊ[¤Üƒ&ç
ÍRÕÖ_ ´¶r`¸™ª9è¼†Ûşû’èÂØœA‘J·±Z™Ş×Í,Àuè›Ø=Èu!èüÕTU.‡TpNMZêî%³ß±²ÌÕj“şyÄ€Å¸š%öĞ›Û¿p8Zô®pXÃ³Åì°û…ÔOä×Ò®¾ˆ°yn=Éz}·ÏhñòT/n³’ña‰tjxk$&„J-ı;Äy…’ÿAìÆ«d^ğW¡|0)êÃh;ò·o¢Öp:˜b¬xnXÆÆK7(OÓ2²Ë@åQ­spbõ?ƒTØÀ[8 ?—fä6Öfo`ŸÂA~¢ªMªj¿ôˆª5täâhBËÎş.•Ç·«Ğ_’áàùû÷|¤İå$º•¾>&ŸµdP¥Å}b£ÓIjÊä‚sk ),ÆºkjÊ3Ú†¤~õ»`aù“B:½6ÍÆ}o¨cÒm÷Ş'†éçÂÖÄ~Éä±Á ì}êÙ€iRí4°Éã‚§¹¦qø×Ò¥Q•WMVäò1Ğ„Ó‹Ô\yn[œ,”Â—Uß¬'|üÄÉ×û)¡};oTYY-*"eŠï3Owl=«‹QÄabLllšpŞx|
œ|C€9ÕÙîg™íƒ©8v¾cæBÁÜ©MmY
 = 3ØTp©‚ì!Šâ×à*AC´ğØş11>x•M46m/ø‡Y
¾•ÙA1W‰ÿÆÙNî†zªŸ=É/š:)–,dÔÅ‰úzëL"l2ÂvÈIÆ rmÿ#IëÃò;.éÜw›*e*ˆìş.ö‹ıšÍÛ.ÛöŸş¿xi °d»Od ûa&Å?eq(Zj¼oøĞ£Şt-É¬}ÍPƒ°v+XDmÙQívV»B¶Š…ŠŸD¬ª:)4SR`â(“;ıŞ…*2æÙzKM¿»’ä]´<¢…\nµ7!
ñ‰ÌŒYD¬˜’F:³ëBvÑüÊgvİî¤Æ”‰0Ó¾×©fz;ÙŒx·¬ùRí©=OûSJ¤á`­ûÉêÌ›	4à¥DY?†Å=‘*SSÛİW‹¯äb=‘„RØ: G‡×¨Ÿ°Ö8.oM“‡Ë,Õwÿ=P¥·
¶«ƒÇÕKn#w«µ=“S*…¿Rı„æéˆPóÅ\ñeº<dmGÂQ–rŞÀ¥;¼Ñ¶^å"r‰¸^YÕI¥;ÓG#.$?&æ™±5Š)Ÿ=ñ³uwO<gŸ	¦†(Ñÿ¨íF›‘pZf×pXÅåÇ”qŠµFÈ§¾L·B1øjbôj.Ë[Û¯ro"a
óW¨/ 2 L,W|m
ä_o.@5SïĞ[vvšC|”4zåw©™ZLû‘mµÇúa(¡İÀ–1tĞòÆ©â£Š_Rşİ2«…å8¬±ôÂó;Ér×!€©N&Âèƒ~…Ø§„sö¿íq0}v«(qÇÅŞIÕ¦İ…­+	G‹Ö1vj×4#~ƒğëcËÉğ*f 3Ò³
Æ¸C÷×2Ë™ÊÕ‚ŠÁ²óƒn›zd¹ñÙ›÷ÚKc²6[GÊ´ÜCà>ÆÎ)?ùÔe¹:†Ë¡‘r¥ˆÇŸû ÌÙ-Ş¹¦öÓ­@M…»í B° µÌßÃÓâÑ½½¢„k.YŞcî ízÑw'¢&‹c!ô;…$Yš¶ÅÖ0,’SŒE±<Ô-Zs'ì>l˜Î,ÄŞ¹ş¶=$Î½H š0¤	go'Xl}VÇV8Ã}R¿×:veEÕM‚C¸ù¿Ü3WJå¸ßEWV:mZæìõßàMà8¡Êå¢MÂ¢qyµúcZXİt&î¹[á¼iÓ¿3ã„ †fÔ)Ú*
[<W”Kñ³ur?÷s¨Äñç Lg½9‹Êèò|'FcéÒˆíÆn>ibš|dÜòÅA:s¡»œL8¹[vƒycıVîğ•ši¡E`L?¡;)~!Ğ=¤·áBFóÓ>'ú'Ët «(n‡9mõğo-ï°ñã'ök¼R,ß@_ò‡3:V¬S¼O@¨®3ö|4¥,&‹¾ıº¨ ³™¾ú•šWŠĞá.ºŠ´AÉãxçsğÇekğ+V%¹™jnY‰-:·7‘ÿÁ!•
§vş6í“íb¡}–UpĞ7l*yÆF^(fªúĞ÷ûÑÙ«ĞÈNÄ*›şú]÷ñ¹'¥–'Âô·a¦İöykÏ›"¬Ê4›:w æ'*™Ú"2}/æ¼&ûN>šÂÊ2…Aƒ2Õ|^¹§åE7ÉlñHwÇƒ`OV­>X åB¥¢ãÉaÜüQã"“õñB9µwªŸá`]QÂ“ÂúÀô°Ù'#O°/ñF¼!‘³²ñëÂ!ÛÌÁg–¢Í¨pHÖm(ÎÂ‰^4Ğ5ë”ğÍC@Ãæ¢NKZéDpkJ<œÒÕÁf­ëıŞ!ÿ9b¬€˜¬\¨¢.ò§]ì†W_Kï®Ç ;`"]·é'qYIê%Û¨+	g3¤¸$5IàÖL-®U7˜–¸o·šK+áHsä¸ˆ=PÄ9Ì×ªøuX ©¼…Î2d‹j®‘ŞOJ¸EJ“¥{_.'PèDîöi-Üó¶ì]=s]‹S·–Lò½-9M )}C>`™~}†ÜHöKÊoÚøxœ¥B\ßÈV›İhCYÕs$áÅERGX\\a9’çìG%ô)UB‹Ğ1kšº€¿(v˜ı1¶ôdGë94D'µ2AÉZW|¬»Ğ“ –}‹¦_j­»­8°ğyÈ¸hAEüşìä#5¾¿ÛûÁW	5¯ÄÀÛ—2†_Úh!N8 +ÎéV†u:£Ô|³áÁn‰_ÊÇâ¦ u6|DÉÂÑ³BP@­ÂÄ8eáùŒÙïcBˆòœ"“LİT—w¯"h©ŒúEö¥ eYÅQ¥´#hYDˆSMuâúp	êçK²&¬Æ£å†XOô…C½èsà¾g
;)¹f;¶jOìÃŠ©X_¨ÖµHVx#;¡tVbUAƒ¥Ÿ«e5s•-qÅuCVµ'vİè~¸ß°x|Ò£4÷õ#/#¦¢Iq”´çö€Wx,¿Ô™öï†*‘N«ŞØ¸8ŞàzPo¡:–¶ñ`„|î÷õk|íˆ°î”¸íñíZÇó}a%à‡×Â¥ĞÚÀB.ÁÒ)}ÆÂ R§¬ÊÓR~Nôª“$2 4BÚáê7¯¯I±ã·eIU@ñem}QUàÚ±ïÌşKÈ	öºväNŠ´OÖ_÷Ò—Ã‚ùòMñÄ—g0™l1HQk‚K,ş^§j5|çd3
ëÃpñÇ½Ü72A>šPè±>©Ú¬XÓ¢gF,J
tÈ4)‹Ğ+20á–3‰\ûò‰Ë—3”ŞNádtºR¡õ~€‹Ë1ÁÖr½^s‡`W«E¬DjİÎ¡¢u(GZs/!­ØNJrb™¼qÍé¤ £jî…ªÊ3Tó¢Ç#Ã a{n™€Ãq:®ÒÅ¸®+ŞÄmÍ½t¸ÑS5R·€=[Šğ[§øšÁ×(Ëñe;2iÖâ&ì?Éí§lêĞØÑ"/ç‚ªñ&|NÓèTfäç'Êe´‹-_\$Àv~ÅÒ3“Á°N¨S¤Œ`Î¥(Ò8ßdÆú{(_­ZİDş¼.x“)Ğ|ñš"?DJ7Àby–P7ç™'7P«³FÆáiåGÂe”tÆ9Ë1 ")¸Ó±°sBuÉÏS#%1ªRíz
ëûqª†/ÑÚ”Wo
bcIv×¶n²¯Gó¡pDÜXÂˆ]ïbT¬ªßÒ¬,&ãÀ3|C™èlõRÌ¾W>UU7&ŞÚ+¹
Q®¥Ÿ›J}Š(XUZOÀxÁ¤£™Ùy€õÒÉı´9fâ÷k<ÄkîF¦Ö»F¾¦ŞçÁè@É½Öîò‘ûbR+LQìë_%~˜@g˜o¦p>‡‹Ãì—‘ñ8·N%O^è }®ß¯–è§0'—¶–ow;™ ‡Û³TıH¢'V¼$(Ş*Ê|­ƒèÔDâ£¢¯úÑ•¢_¯áğ‚ªíO¢ußmø¿Q,VúJeûÏGÑ$Ã,TË”º¡ğñ0pïùFù½1¶IÄoÕ ¸Ù¦í'ğ>NqH »låZ·z|ï(=µœ~«"¡@û§ ¬½àá›Ç£*kû0+`·şÁ˜Á­äŠæÑçğHÉ‚~MÍÂáß®¡º®÷h´@7,©~|Ii¥.mXY}cÑ?İñøYü›Ï³§øIÙ3c¤îŠFÓÖöõï¢›fş¯G›{D—…2„·²=;¤“°=Ù3;.¾Ùxê÷ÁÈA€;M£kN»xøüŒ=…P”óÈßtŒ¬çÜ:­³«}²á‚ğĞ3Ìâ|wãQ€”à¦{æÛVodó&'ĞÓÕÔUÎØÚÚún!ÈIaå¦!Ÿå¤ÚîÂ=†á¤oµ£uÅıDH Ô›§‰Ø’ov3<ö-ÊäpôéEoˆ×FFâ3	Mú‚>¡z;¬ŒJÉë”ò®%Ù>šNƒ£¨zHŞ]³æ¬jZIŒå+ˆŸx‰ú7¯\æ„TC™J$KúóI|B˜	Ë…®/ó½tæú,GQn„Q[d?’J·onc»Ø§(Ì§ìÒ"v’ˆ .´Ë$vG"ãî7‚NØM.TĞ·`ŒÚ:z1Î§êzYët4bv—í.#C¿Ú€)]ouO4…¾††#/­Gi=2ïùVÒ¦yÖ\MÙÚøı„ÃÑİæX<âÙ$^dÛ`æ*¡÷Á–fÁĞÿ•Æ¡ì ZG•îGÜ?ÁX®³í¶•êÈÒŒ¶ÉŒş!LèxÍl™à~Óæÿ¯¹S0¢ÜÙ˜÷KÍ• >Ó&˜u'UDìT€`œ¯;C¶=é®“¦°¤1†Ù$ÃÜ²?º×6`%xÜ¬µ›ã£ŠÇ¸H±8š †rŠÈ}%®ƒbVìŒşe¬Ÿ´©$Çò%PGî57âR
Z tú¸[ZçÊ>„C°A¼Í«—–şl? şÆdM¾§v…eÆä¿ğ; 	»b¿¤wqt!À_4¾o,(^ÂÌĞ‚“5¡àVÌ¬Úådòe¦häÙ_• WZrã“Œ•·üÒ%¨ôÏànm5{[•aö<-2ŞÙ$áÎ>8èİA7!it¿»Ø¬»	ÿ4lÊ1R¿ÙGl[ÁWpL)ì4äPC<„ÇæÊ9Š%ñCÕà^À†Dïç˜DÍ\9B¬tXUé].ÎÒğ§ )m\¹çÑŒ‚¯®,T˜ğ6¹ËI0À$”üß•®€R¯?‰èˆ¢3‰V¥ò²ª7ºÿRA¸„¥º08Íüd©;CU–aø.WSH¶âòòõÊ’Ş+ßÚšŸ(Éq?Å‰X$5,Ã®N·
Sut¸{ ¤ñD¿ÊpMÑ„hH²‘Tş¦Õ×(ÊÙøfòÜM“¨súµ,î¼Úì£<æÔÈf(²¤‰^ïe‡M¹İÑÛ©'{A*AÅmSò¬–zÁÇºmÕÇdÚQàY¶æµd’u‹UNgí·ÏVkÊ¡Ñ÷"bhÔNW´l‘Ò9±ğ ‘('¿½Òï=ĞİUI¢¬–&Ò¨=túƒ¯›*Ùt6¬øĞX6à¾|h(´z9Ë‡#ñ@î/Lb!NÖAÌ¬»³ö‡%| Épuéæ|TŒqz˜=u |ªÄí-ë°å!s¦o@°sóô*™klENN…Aõ¡áÇ-³
BÄ2»ª¸‡Kj_<LHÓ¨õßŒ³oæMƒ¬Ïku1r‹mòä|mÕã“ª›Â"•ZÖë¼Í]Veò€/Í¶å/&è·¾¯¸.Û”Òì„¸WXbv)u‚uZAg¦še®UNµppz¶,<eÔ¡üGºŸBÅ­ETöÈÂÙjq†¶ØTØ ïY:Ü8÷õ/à¡¬xJäÓº	wÚWj$<ÿc¯véÍ6Jq&àN7•¬;¯½ÿŠ2Æ‡ÆXc„ÿ\ç=£FPÇürÓÏèqã9	c‚¬1’$ŒÌÌIØW­wWĞ6 ?A4ø¨¯ÄŸ·:ª¤MÌ)—wjõm%<µùÇo7'w~ø|hé>4‚ƒ…Ÿ?‚p\#‡É&u©ÿ8ohPí“ÍIß­ôe>W×µóÄ„,Æ0«CoDiÚø³Ä>d±Êó•PWÇŒ ¯Œ
ŒËÛämP-Ì¯‹ELõi,¿T0>hå¨°mQŞİ‹÷Ã€–ƒ¨µ/@(Ú‚ûˆb¾ #(™VÅ•9ÖŠd[Š<““jVKù1¸pÂõÑ)ßÁ4ønÄ³0­‹vÃ’ÀôGÿc+’~enudR¼ºR*ì³¡Špï›éá­)MBKç¢ó¹Ş x§èã°ÛlMCö÷'Í6üÎAÇÏD-²–M#®†|êØ}ïzã9Xiú)a‘®
œ¥yR¦ä]í„„êªTä¹âXıê8ª^ıò¸°¨Føe*†5·Q.¿©‡e4°A÷,5Ø¢¡ÙtÜç|9j<”ñSúÖ€ñ–G´€IÉ-Ÿº2ï"—_‡Bæ%1€E·È5Õ#ñP=˜ZDô»)lXÌÓƒ ¾aeÃmÂËpES’µé8º_]zeã¬TGz%É!ZÒÆCÆç^²÷~Æ¨ö+—3wHVâùÀ†°ƒ“ìbıÕ¶hJ –‰²¢ºA	¯ğíOaULsµ¤YØÕuŒkÕ.J¡0H^f"èç°W(†“k”×»ú7Â1¹ÑN/&—> Êğ(—Š¡$U°˜åö„?ƒş‚8_*ôĞ@@{gGzŠ›$%¢ÏCÊ»h“Co£¿åÚÎÊÎÃÏÈªqÌÌÇ]yŒVÈ|ö•íõëNº
ŠX&@6/,ÃÖ9m>2x—zF^bÍ)£¹ÇcšÏİF®âûJ Á¯lÕM<VËY«&p.ùí¦ôsÅÕubÆS;½Íä¼ı×ÁŒµmo&‘Â'›¡¡>ßA,©RhÇ}&U”å{D.Ğ®\åt[WTc6ÄM–	ÕÂ3¥>0Æœ¨zÅÉ60éÚÖ”æQ°	·ÂìƒİÚÏànÎ¼Š„Okd¾TÛÓ¯$¨½8’ÊP˜¦Óò§6İ(2wÁgâÕ$÷ìüìtßAöLû`¸wŒQ¢U,1Lît(£÷¬oz½ÁĞaƒ»Œ·W%ÂÊ;òd·êËµwÍ˜]> ¸ÀÚXÖ‹v´Ëš)bS™u!ø\4M,,Ik¾»:zÍSé=ŞõKşô¾ÜKñÂhf;}Ç­Skş-Ë{lù^090@rq~¸Ík·¬¢H ¤1ƒ”W­Ë¨ëƒã¾#.Èl°<Şle)g‚%ü6Oéı/|·ÊQÿt†š5ŒÚ‘öÿÒ"êçA¾6>oÆ€ù@AjîaQà<i­X°s4XhC/–ºC|Z¦™â{HæÏ¼ásq‰ú¢­i(I.–]j$Ÿ;QVÁ}t¾=8
:{öO'Àñ·.áLÀ9 JÌR’C„QÅq”°ÄıpÙ7l¹,H¼åÆñÂ«¹Àè$£í»á.S†Y]µ™³Ûov	˜W[WQ*ß .µ…Š‰ (Üf¨–sšL…ÄÙ§øv¹:>FQÔŒëâpï/ihË°2ŠFœíÉ+–US%‹öïÖ!c@ûM¦Æ|Ã™¹l²‡Í¢¹/{EbDy­=Ü-MKÌ	TNŒÃøaÛvøZp˜
Ëx»ŞôZ“ØdzÈ‚•Å<lèõ:h5ÙØğL…Öd|PZX¸ÖRùåZa9ä 8MÔJ=h>“f·‘»eÆ)7!ºÉµ˜!€šçÖz[ùú‹?=:ø’'¹DOI2Æ+Ä's§‰SáÌRÊáì/•öµR¿uğdSTK«ëG]À534Mšº •pVŠXÍùXÙraÊwûr8·±ÎeÂ 6‘€ÓI–ˆ¡*¦¤"Ğ{¸{‰¿³IÊÈ$'ò3NÚ=tuÑ-!‚ƒú©„v0ı.şóÛ2Oˆ9•§»ÕÍÆâ°¹#R%=¦‚ê²u7(ÉGœHn›*ÈBú6v± 
@jGÆø¸®œd	T‹ç›Ò§ì3"•`Û
ˆ‹å’<äå;À‚òâÈô¥Od,ö4³7Êû|´·R˜Y”{u§U|ft¯*çfTçÂ|]f±;n¸¬‹äø±a¦My.˜¯hÛ‚«IX¢—­^¨JåĞ2ÏşÑÃ¢¢f>ãİ‘“*0nñ€H}Á ­ašŒBåŸp ˆĞb*Ø0#Pˆ}ø4‡İÀe~Ô;-<©Y’P·&î˜5ÂØI=>feJÊÒ¼%X°®_'£³!™àïO¾æuOaİ‡ sœ7š®m&âcËÿˆR8l¢=ï­©¶@ïèEßK/ÎõÃN[ve‹¼v¤31ÂÜIå¹-âÁ‹¶·\)—TÑ.Md´½&?uĞ„õµÍ
ß&m5ÉŞ&˜I~{(J“Ç†½oìe1¥%ØıÔ_«™şy8Ş1KX—®­{K\VÈ(´RäôuYÄ…æ=ÁĞåt3«°iÎ*+¨H#e¾$")ã$(¯úì¿ŞæË!Ÿõs\òõ5uç¹
„qñò®‚"Í?,­áu_5?†:ºCÛƒDæöÔÉ) ÌVsÄŞãF£‚¾¶Ür¿Î0ŠZ(·@cS<ìÏE²< ¢Àß2œImÔÓ¾´¬ğrv*·úø£ÏÜ¨zí1/
ÃŒUÉĞîÙ:oáÖs1&èxn@±¢qZ¯MŸ)’È¢büÎ?]‘–Ã‰ÏEµUé£‚]:X¸üÂMâÀ5|§Z©ùµÈyêï˜	f7}KÌÿm§É—¿f‡ÎèH¦ù½¤6°/|nr»®°šå‡AŠ†* óˆ £…‡î¯œìjW()ÙOÿõé`u^`6§|¥D¤s(Â4“§¯ÒÜP»Ì.Õë¯»ÜYù¼è¡P¯Z„rî¥—ôˆ d™¼¬›PÉĞ¿ó·¶úÑ§<„è®¬O˜&B€ì]~ÙğlŒÒĞ7Ä‡•İ i-ÚÈ¹ø§¼ùXÂpwÍŒW—V1-Pˆú‰êºtsCGŒfJàÈPG,¯ªûœ.=Ã2d0­¿À™®E7´/y\s(2µGj‚J)70¼X|Cpã.H*ûv {ĞJÚã£…Ö0ğ3¿êÂ¥ØŒşò=.Ù=cˆ-ÑæãµñdN†Ê\ê„İèP' ¼ê sGĞSÍz¼Ç›Ğ)^´¢r: w5ÄzÖ' (Ë¤"£¥fÄ^Œ†Ø¡>ÅbZ.w£1ÂşÛ'"PìES¾|XÈL·62× ÚûÅÃa}((È\ElYæXHgÚ<²‚,
Úhƒ—Gì”ËìIÔ¥ïy{WR6°ÛÀ	P(:]c¢tó \tY€Xkåp[š‚uİçÅ_WG
¶Qb— Û)$±méÔŞ¸”ÑX±š"Ë„KßNiùê»ÉL‡}:ö7İ¶Ÿ@ÿUaK${áB-†µ EÈJ§Ú%+
šßÿ·CS±Ï³“ğV‡æ)ûAZT×õ"#“õéÕ×¨Ğ«1g°2¬gPıÊíÇ*Í9/mb£	ºÿw9šœûÀ,¢lkğ¦-Ûé˜‰ó|ÆZ+&=~¾Mãà§¿ƒ×ªä3Ô¾m‚k.iæ¬uj1fÑDÑ$^ çÊjro~zI:šìæKÍıÂIš›»iøm2ádP´X¸˜VxÆrbµı¸”ß„À!3p}Ïßz;±Ş[æ¸¡×“·W„i³ÇÍ«;É×(˜+[°çÌE‰€"PE¡İ,Tt‰óŞçµTiV¾=5¡HLk`N(à0Qú¢×,qŠóm¹R²£n”†ŒT JrÌ¶ë²àşv*?…Ìt0Nsr\Uö ´Ğİ‚†³[½|ÃÑÉ×x³fS-ìÇ=³¤šµ¤©˜ÊyCØ¤~uİIáËáÕ´\ø_›ğœ{Kp˜/ªÂ×Ç[J1¸:ukdÅĞè#¯¿ûÙ/È*^KÔ÷sA¬:ûs·™'¦pQŒkcoäıÃ6Ÿî„`nø©¹ıÙö;YQßßÏß_ƒÀ¢ğÒÖ31SÙ§K:lPÑ£‹¬?RšïJÏ‚ÑA>ìj]£Vçú–Œ;øÅGˆŞ×‚À
zØ#^´İ:BÑ•iP1æ‰h'*ñºäï÷Gî
XoâVi²²…ë“49=òfJ›O×9ìçÑÖ‡!‚ÀƒÄõaª¹ÔpdeqÃó>RA×"%[Ñş×:dd›¤a‡±Uh†ãài9B› É+‚8øëtÇH4Î4—#U¦GP9È’±Î$?|	G'kÈjZN`’‚ÜwÎèBÄÀc<B¼ƒƒU(£²7Ü‡¶sÉú®]†±‘yšü×ü®B&Ş<&xjİO*RwÖR',C¢†¥¨x¿±ÄA{¹Ëå¨EÌ‡bä
t+éV&Jg§* ÿ"-±QkX[ŞŒÔ OÃ]>Ÿ4±Ã™²
É²-RmO®¿ÇÌ&èd ã“5<qÊä®?mdHïY?Šçk#<ÔÉ…ßEØD ık‚3Â‡+­ûÚ>¶èü»£Ê\(+ëHÖŒÚ¸dàlù!]U-o»ù4ŸğnRñŠcæ¢“UI–é¬”îoC:–­¾E—ÔH-p¨Ç/JÏM—3¬Â¤2Ø’Ÿÿìb
é·üörûéÀ¨hFr—vê¼k'=èù-….¯¾Zi$¡ü4M!HT.|7É¡€B‚Å	JÖ­ ÷yN1‚Ü+×†•àã£8ô¨ïO3)¿N¨¸¶Á8`\R"}²W‚ÂƒÂŞ£¹QE<ÿKÛkîàìXdT»¨Ùè1ZùıO"Y^à>5Ñq6ñvæzÂvÖ]ôUÒä»õLé ôˆ¶ˆS ªD=Â,°¸F,ViKpò4^dÙİ¢ìb?&Á#~–îî1:Æ†õ¡0*ê\n‘	'”0·ä`qø¦eæjş*øTÁôSÃÔ¡‚P¥V+²oügœÚ®ø ”ø!‘Œ÷*’›	çËC}Èàppzä7j•W:è	W©òÂoZ|—Ë¯%vô@Ë¡ÎŸ‡tğ¯Èº;µ1 „àªƒ,”[sßU¥%4#×¹Oî£ï:ş™¿›!/©Öö™Ğ'f²É(÷8QE)eàp[d.=|99ı©% 9)VV	¿ƒÅ`6
q€±ÀªédñßÍ€Îµ àŠVŞKºxæŠWZÚáeúí…S")ŠÎ€G¦ô¸ÇjgbMVĞEÛÌÚ÷‘ÓhÏ+«0ÚkŞºÒ#”ÔSÒx‰ıœ@í†(à¤Ç®O£EŒ¸z˜ni¿ fbæyGQŠ"UÕÒg\4v¤)9º²9}­ìér;¿m×¼g§R@^¥!FµĞ>eÌ.÷<•í¸%#˜h*ZRq4„mõ=ù§süFüÊÃGTd#µS,•M-qæ=µXu%[A~öO>â@hmÍ¬Mq„‘íhï50~ÌòûÑàÖ^&­öxàˆ¨ôQÖ¨gîM"WÊ­v%¯â2áÂzrØ/š®ÈüU˜3jaCXÑâW³·(z¦î¥-Mœ»<¸³iÛJ ËYÒ¸nÂ‘êì»ô“Ùø%¦R’ÁÛâ¯sĞÇî(s¥ˆe’9xétËËÊ!Ÿ­¿XÉÓ×°¨ˆXÕå£9€‹U)ºf;‚2sìo -32‹™ó²´©ÌÕ„JçgZŸzÿ(IxşÌ·(k£dq' ÈßÛÑÙZ—üÙÖ¦Æx:Ìƒ
Ìo™LÊ:®âÂ6AóÜÎ‡D®Æ¯Ü(‰i6†¡Ñè¶ş¥İ˜í¹ÑÃrL²šgxÜ[¯&ZÒâNàyˆmàGr¬³‡@>Ì
Ğ‰¸„çöqÈ¾tÑÂÖÑ. %Ì¿¢8õ…Ú&qâÀ·Û"$I7ŸYñd²osV¸{æŞ	+ƒ²@Ú:ÃÌ0õ˜ ßhÿy=õ2	4AÀñ ü;²}.™Ê]¥/¶‹’ckAƒ<Çñ˜½Fi…ÚEİ§M")`Èbˆ2õ2nQVèóèSàq@‰x¥ÔÔ<“Æyù	‹Jxâ“Ÿx¾©…pÃù;¯Šú€N|w)Ûî Èé«Ç!tqj{ìğ)[!˜9©¶R`ÏØaŒˆ¦dcŸóÍA·çĞ\ÿşFƒ™+$ì‡íÑòıˆ¶#Ÿî–áö¾óÁAƒŠå¯Ü½§xZ)ü.F8m^ºDpZsÔ¥»¾LM‚ıWÆVƒ†j¶+‡•cAm0«ÛK…Ø¶³yÙí¸€úû®¢•!Hm“€¯.®±àiòÓVÃzV%97«?NkØâ0
#:|(©›¨+ÉúßíÇ„4Û%N}ıœ›¨Ä/ÈIŞ›’í}Où³•ª“˜E/qÑ†ÿDY±™A2ãÓ°çf¡¢±‰›«PY£Ã¯hBOŒËJTÖ8&°İ}ÚÂ6¿pŒ7pSØi•ô.i8ÿ¤©Û>\›×„ÈäÑášbR[392¼u:ãC†?¹Tâ~/öJ$nÁ€‰±¯Tmy™3c^	r±,™HÍ©¶úÁŠ¶Çß».“‚Èƒ(ó§¡E Ê§ë?}¹y’ŸàP İR†¾¢{úğ×mU8Â€à—~¹³0Òî'Î°ØZ¦‘hú¤¸7É¾şj\në^6†HÔ*OãîM›º˜­Wiè9P|1'´öYÍ"Â9+ÛÒÂgK32ğ³gİ„&¦X(ËˆUWtI‹İÕ&óXGîNo²÷¹NªkXN8?‡İí¬9Şq ±‘f-uÃùAûÿu&Šîşø¹ïú)â°À»ö”‘Ñ¶õıxà¼#tsÆs}şÁ´d	ö"¬êa—:Úo‹ƒdx}ÚòÇydê
yü´ëa¬·ñá{àÍ€4°|œ s”gXk¹YUÕcMÔû?3$)=
*¥îOÁG¤«‘‘ü1‰‰ãN%é ¶´;Vd1f4‰4Ë¾«7t*“?ï[nü@5CšÂb¯®ßHşm&<˜ø_Ò\´»K°dª¯/êÿ=€¬ó«¾+jşb*š
—ßSõy±œ’­‹Èÿ\Qx)sgèÁWÕZg6”–YÄâø½GI²Ö],+„M'¦V.4œi5
-)û©àsª2^C9ÃaöD	&úl¡‹\n)¹@º¥ÇÆfçñ,X\Û’Ye/yPNãmÿFi·o/óLhÕ‡%«Ál	XTQ” ©Åÿı‰EÅ%ËÊ4~Šuè1]Ú†¡À²µ ¦¢«²œ˜Õ@3{<pJ ²-î{S…;w õü?“9ç–i^â¯_Ä¨õçn%IÆm‰
ÜfıÙG‚nã¡7s’+´£ğu×“¥ô \,`=PkK9¾ê	6u¶ãµÒ–Ñ}—Ğ˜´DèéVüzğÈò*eËºFšJ(Ê°>Sº¯ûa»¥FZf¾Ï;#ææ•£Švµ.#¡˜:yÄû]H”|IËD„@†°‹kòógˆäÏAíÓ`;!aÙØZİ*nØÃıØjûp¸üNŸÑãAÂòfBG/!:Ãã÷íĞ›Ó¡Ù“I"Àt^“fy=”ÎøIiı‰¨Wù´òóš¡‹¨ç¸Çì#q(÷QÏxÏYñ1/Æ=¹{ú“×!Ô?*ÑİQ5êÄˆÆÚS9%€‡çÖg·¸ñÆêVÙÅƒÜjaPR•T_ıöÕØop-ãu¢=„–¤^×5³¬íıÎÌ¸ÛOUÃ•ZŠW£ÔïººàDÁªï,à_„ª Íà#&…Óª÷ÓmšŸû,¢íûDÚ!ÿªèñ6ëÎä´­:Ç$¢ÒVfŒó4rÈºÆnK°Z-ß–Rq/3óàõz:K·„*ò¼ÂH¨Æv£¹1\†Êÿvy´Äº?bU.ÈlEvƒ‚ @©Ó»±“Û$Q‘ãá2‘¢PêÊ*AOTz°Ë©ß½©r'Õ¸År¡×†®“ôá,îçá½÷Õ£«Ÿè XVÍ8ú®›f9$×¿k$„~4ÆÖĞt94½¿A).j¦q1¸®‹Iaø¹ş?DU0sİ¥ÏBbè#<#¨ğ¾%ÏO?õ+"Oİ] òz9à#Ís•Ä¯ÌŸ4Ñ€:}–xupNÛ3Ş|´±ê¨¨nä'<‘7
}ô“b¨’™ã±¤Î[Lá¡•4îOš}Râ^Ú!Šâ¬9)PÑb¥˜w'îJ‡8ºÃldAfÉXPª8æš’è0Ã 4êÇy²Pi@nÌô}Ë–İ»÷Å+Xƒ-%Ç¿Se3ıÙ çÌzzc‹Ş;|7Ğã@’í’¤“°ù06Zå¸Š„*ÁùcÏØº[!Úa›Ó¨7±^ ìÛ¾u»
†`ò…Í¤üQ¤lÒK3Âã;R&Ë(úÈsÑ¾& I€× ÜúŒÑ«èzÕi¯NÍÒ’UojBm:V£A^40“ºûiwû	råÈRçØjÄÂRUï£•*úhÚí!?9å	3¡ÒAs‚ÖÍyOé¢g´&9“dUœqRÇ€}Õ†Û‚ÌaóLo¼.4ùKLiŒÓmeœC‚›UñN­<3²#c"“›œo“¤*_¤Ušªßä7;á0‡Ü†ÇÕWø­Ê0²š©7å4V6æá¬rïù’f¿r®pÅ›ıEzÕ»B K¹]3Nö¸F¦†zK.€/5)VÆÂ¤—Óï€_n®Ü5UŒìCiEXİaÜ¿»^ƒäÏÅ)ÍŠf«m*„:\1xW	@ì«%è=±‚¢Óæ‡NN¢›:¼³„* ©Û@Âò`]´ìsïmëÃmSiå(>İ:Ş|OìóÍÚ(ZSÅâëAİæa`H3òzdR6VŒi’G/•_ç0y?°+uQÅS_H¯¿(;¸rÔ†ì&@¾—lHõÛ×é=İònˆÁZx)”§œ¨‡6è¹ôYˆ±ØÈ‡ç¥¢€]ŠAº™„t½v„”ùÂØÕÍ¼MŸ,uõ;í]JBÜq 'ÙĞGl¶aTì•^“iıµ~5p'Õg•iô¥
æ˜§PûpSèµmM×Ww~ç¤~Hµ²Ä«İöÎRá¢áåë—¸gş$Qô(ƒ ÿ0VRÁ<ø. w‚„›—føîYËîÉ!_ñ?ITñ‡‘o¦u›²¼ÿˆPî†hĞ‹í¹¾ êlBĞ\ÍµäNş¶MzÎiFÖŞX°¨oŞ#.®¨Ó$Bë4C„ËĞjã„œ¤-ò^AQÌôps@lû$mU¾ÌÂz#ü¸X›+ÿaQi—2äğÅ.ˆ´r”lbpöZz:ùÊˆÀõH¾~ÈØõ]’¥O,šº|æn9î)Ò0hzªüa.GŸ=š×wçæ¥ı™ë,Ù °JÜÛj'ïÀ÷ÅüğÕ“´}o©,uØl
ZÛP¦~ùõQœŞ3)€X³©‡¥ÒÈ¸ÍÒ®úéÄÑÍ‰ª<í^Y¦'×ˆJiÿôŸ$÷oê®Î¯ZÆ—šQÿ·{æw5Å˜…ÀpT:™Û•!Ù}X(Çãs~äï‰ìl~úª	ÀSì?#Ì+k
 Â*û
¼¿ÃE³'µT&–éÜ…³²MMN;Ş7¼>?}È^Ìjù°7?¢3yîy½à™Sùù_yƒaÇ°¤ÍíF¢¸]ËõZd*øiÁÊ–×ù¢¼÷Œ°é¿_–@orŠ©çt_ ÌœE¢İòº{•{¯qˆ" xç†·û²Š“CÄ£ysKÆö"ŸŸ¼I»;'ˆ¸–â6·7äÑz¢½tCaVob®CtD
W–Uõ¿ŞQr6B†X`±Wãƒg)lè¶Yk¥ìP´Ã	CN¡JÂT .nŒ Ó‰V²ÙEÓ^q‡Gj5*êÔ'ŞüåŞ÷ŞK@r–òìê“ØBsâg°ÙÄœ»ïÙ^âäØëÍwû(Fü);6NUÖ2…Ôl+!……õ6Œşyóïä @DM›÷WĞ=š%28½<c¶YŠqwQ]¿gä×ï;&ß}‹Áõş‡r$ÊŸÿñX+MEjçÑÓ˜ÊeGüo nXå¢`½È•Ë-ÂHJX¯³fa°ÔU4i²'Š¬UE­â†Ûˆá˜YÈp€õ[ï™*;ñËF×ã³<¿iÆ6~‹[ á>Ì xœTÙ7ï“¯ã@‰í+£6PãSü	µ	U¸}dÊ¾ÒğŸrjÈ¦Å'À›`wô0}@Åı¼×‡è±«ŠÂşz©ï'y¿»²¹Şx Õicœş,ã¼î¼·åÄó7l@eö]´‹LÙ‚y”d?›€“>\½“)êJÆ$Ü.‰p¿Áš|bJÜ|½K ­c>ËûšöP¢ø¾Ü|CR^³†¯ZêÏ48¢‘sÅÏ©À´š½¸h„º R¡_ÁW)½»’ó¥s5|Ûpil©¥õ*p:nRïx"‡İ$cf=—áZò„"4Ëo³û.N¬} óô º–¶U ó%Åpó‡ 7¸õä*ô[»—”1í?İ -ä±€1ˆà¬p	ˆg"ˆ5]Çf¢–9~£sİ´Š2ói˜0t^ìÿFàÒPòô4mø­4C%¿ƒşz>cnr"óäC÷uòŒ<[
‰Şng'E“ÓÒ!o1ìÑhXÊ/ƒvB2Gn!>m˜tüíÕ_dÎ&Ğla^áR÷L]ŸñÅhãô…_qÅğ3mLC—îÍÀÅ>\¯ñ· +™¶<Ì	Çä.¨út“¼$àÊ])·]8Ãuäj»áO‡“(ÌÀkÈ2_6ÏH‡Õyé”tÉlv*´ õ/µæ,ì	ÚŠVÑİÒÿö*ñ×Xš&aG`¡O·bÅõ‹w4ÎÛ(oH'GŸ¥ğ^Ü½5Û`‰\&è-+—bxûìDJCD<¦Ó‹Õ7h›}â$bò(É#Î°oõ%ÛÔıXVM(+œ#Æ`_hÑCéŠ~ò Á¡s#•<¥Œ´¿¼åù
¢]hX”Ø&:#´Kc;2¿Ò­t5zxs™’©ô×WÙ¢*à–)¿RÍp”«°]Œ
3|¦¶ç–ì¯RäUPo—h[„A¤â™L «@4Kq¿:Î¶ê¶g·€ù(}–mNO'2sÑoÒnRãX–WÆOr4UÖè©êq‹Ãt	JÁóvâ†'˜|Æ<AsÆ´F§¿ä\$ˆà2ïZthµ*’Ü*Ì<@áD0g|İ;ÕÙ£ÅúÎ‘MÎüUcSO/ã¡eyh´ÂØ	ıœÄ²\¡qİÍSØ®é»àíVàT_n²ÚCçuP6õI ;R,±ñ¶¼&a'9´Q0²W>d=UÀá1ÒV#å]¼r…èË&mù%­÷b;ö]Y¢ºòVª1’hñº‰-f9Ë¨’.DâøhZ÷á‘¥6‰f2İíBız©êwF''# ÛBáôÜÂg$ƒRC{±hü(¢¡×¡ƒÿÌ	µ+’Ñö0œjšxTà¡ÿ|<xwæÔ'Ç®¯i¨àŒóhã­"(Æ_v-D»÷2¢åÀJ]4ö0IÊï©W`ãfbe¸“ßqÆ~ø˜ã‰u–k^ªšhW½“ÎéQ‚µ÷–{+â‘/EÈ›'¥6…¸ù‹¥Ğ}#ÒÌo…nÌİ¦f¯%¡K5ÚËFV¿áìÏ ;ÃÉSo/’â±–;Á|!Kr.ÄáMĞGŞˆy¾*]˜¬¯¶QZóİ[ë)4éí;ËiWRè6$šÍèk=¹-x\.å¨ ;…mê1¬ró{ñdöÂ†ñâÅc;2Èd}s™Ó8ÔC§5ğ‚2•Îûé—ëÔ•gVaÔ€	KÅ˜frÇx2S!	åÌDÿû?±¿¸’<dˆÙÄïÀá0ŸYŞØæ¼î¹KOJjO<#9\¢OŠ0@mLRæº ¹-XÚèé·‹fî¤(7Mÿ˜+ÿôK&E2jHªS\ÀB	—qa†Ï˜¨“.›À> zYª.ùÚ©íúûÿáÁëñG“Š„1…ÖÀ_un£V‘ ıÒŞ8ÂËÜA6}r+{Ÿø‰%‰ôâbÿ›MÔÿ÷ï¯(¹şˆæ$ÛmÖv]ôúN´÷	}ëÚÀ[K-öİ)ík¤ŸĞö~Ïe8Èe/H=|mI|SVüİù.laÍ“ ?ê>{¢
Ö¸ÍÍbpcgøyªBuNä=SÀ<‰qi}Eí„í©Nã!‘³åÓ'CLËğ\MhÿZ•6jy2‚££q€Á]¯QawæŠü™÷K‘ºÓùÁ‰É
'Ş!evC»®ĞG£”ø•d%¤ã¬?]á†iv™³q
kP«Ú>AÊ
H,¦şÎ±<|œ$xƒ{«ƒâºÆµ€ÜflÜ;šÒ–Ùè<x«$î»P$lû’ùçi;U¹€­ÇHˆBÌ1ø²³í ¼Ã§]‚ÜM·uW„ô¹)naè=VÇLYò»éıo÷	?ÛKY”AbTÿ¯¬í»;©H®Z—<Şidã‚£«Àø× ïtò­§Õã>ö]ù>“½¦Í±Èld1ÉD‘i¢ÑŠ‘{ÏÃËØüsŠ†.úX?–õLàîñZ[9{ N¤;Şáf+íâuÙ²…7˜_F-ıg7¥È¢2Û¨‘àE±MötífJÊpê¶dÄv99D¼†Œ<_Qˆx™èà+)¦ò¯Qœ· abëºğ‰}¼`'¿¼ÉÛ,³¯v Ì†XÖ.3´Òku÷ªA¨‡ä6¤Ø2àA5E©6¸4ãTè®ø?0r½¬	Ã½^‹£¡l4qsè}§ÑèôC%É6R5J¤ø68‹S*”?T	g	©û¼úQ|ÍåH.·îM‘àü…4³W?¡K"E“9n`˜¼¯‡¡¢
jy°WÎˆ>ÑQ‘İ°dCŒ­áM’[!5gıp{L~ª§Ú#£ûËøpêTzf!DfÔú>˜‘ª®¤¯È];‘²w3‹¶zÉfË>ö­:£Bf	eÍpí Æí¨qA¢¶§#Ş;Ã8®¤Â6™x§~Q–pI¹YV\2‘­ƒÜ.@\¾./F…•NËP½gä\"•5)«QöôCT"VíZfìMúgù1è‘ì,b;&Ç™[ Jrİ²¥ñt­AìçÄóÖü‘½zÈmuü/NœúUeÁ Ê côqnÂîğNûPÃ†Û÷a»åYU®“µ•Ñºíg“ÀşY§‹äré–ŒÚ`ÒÒ±¸KŠ.®’d„¼ßy¶L ­SYÊÎ
Âæe/Ÿ
‰‰º<Â4sù&‡Ü‰—Â‰BS9»bU0™1zfSÅbºowÎ¥Â [9à;¨RÓ(šd§Ó»R]Ğ”¬ò/Ñ“w•İdâ—9¤2@ä=š|íÂÚ´“6(ĞO’ûKŠ³~ÒøRë£å­½ÍPU@‰úÅ¹ä°Ë1Õ>ã|<gô0€o¼»!^Áë`‹@>©ş>Ó·2'âİèÀÖfÈXqg}ÂB¹_o¢q„Õòã©Knfâ§š;éÚBÙàzsÿ ÚÕ˜_[Ó~ìíBah€¿S¨p	JÊ2¹˜‘ÜCªŞ±l¡hÆ¾ÿŸ2%}+Aã«ƒÅ’ÈéÏ‹ÓÙ­èè.çÀĞb3¸<W"¥.;©;á)·Ká¿ZËüg·Ïó÷fKŠaÿÃ­ïf¯1Ù¬u‰ø»mù&F.¿K“9`ûDÍY‹b†H§lPY3M`ëZ¡ŠğbÂ™™jMàÇµÆ±©À/ìÀè¿7>…€ ‡¡+çb\‘ÄÄÀŠ8Ú´ó¾±¨JÕ%D:~q	ûC-Z¨­Ì}:ëUe#€ÊÃ[ƒZ_a>3ƒåbfV°óYÇbë¨äK5¬µÂîd»qº`Bi´0‚x.r½AaÃ5ÛqÕqÅ3$]Å~ÂÑê{ƒY`1G½Ÿ$ÿBî³Ötó“­Íü8ßîEŒ;$Àƒ·>B˜0>3&øcÊlgÒM¯A!W‹ã$øÃXôt”¤Tœ9IeÚEÕ6Izˆ óo{¾”¥æ°Qıq%¤¤Nr,Æí„Z¿¾Ìÿs-UÒ«—Ò8İnğ¥Võ‡"â‡e3úíK4IÓ½,0Ş~…bEK7L˜`Ñ£úG-xLaô^i_^Mkæ'½lğ´Ón§~!Ví«›w¬)Åüß^ÚCŒóâ¥5şŞª±ñ‰ªÕôİ
ğÉ‡õ20da´vgü_4¯×‰JX°™4u¸c¨âÏšnLó"¶Å"®-¥¤Jx(¯Ï×a§°nã×XätWÔW£Î(( İg™(å|Süñ»r·t%ïæÆ‚åARèØ“8w*ü"5-K_ûò|ÉhR Å<‡Šy]= ×™ºê> :‹-$Yäşâ&ÙÏ—|¶›EÏò[@º8%ÈH­=k»DÊFuµc
ÓœgU«“¤Vãåj‘lÄ-¼éhòiì×y†Ní_£=¾ßËÜG!ğ9åŸuĞ¸G¾/¡2ÁØ…ºòB‚Û}~ˆÇÈ0
]×0†=0}'*&HÜ{ŠMğ/Ióqå·‹­&¶éñ Gß‚U¤^5b[+Á›6ì	LM€&N]
€Pğ…o“ ”oØş‚'À¼ŞMğò_Äü[M¿i$ËAÑ	Á„ê-˜p,rë÷À¥Ö·~(b°½š»²ñfyoeªÀû˜täu€Yk©ißzÎı´ş4ü®K—#,sƒND/şØáêN¼¼ûş]T¶¼·ñ…h{Çò5Ã_¯l3”&¦âCùg®Å=ßÜİÏi‰ÿàš8(¢,ŸÄ>š™ŞéP‚-Ûp[‚ÖÀÏÄVvjÒvÏx÷x¥.ÏÆÄ}DÃ®H“’‘EleÚé—?Ë9èóñ€ÄbRy—±øó÷@ûª£¦Î?¹Z¼«±¹PëªÉt?û»ıŞñsCAr,âpªjéÁÈi°†¸[ï9W Ù'@˜"‘”1/Äê@æ¼Ç±òeÎ™yÅãMæ*£xÙ¢H—e‡^ê›Éµn”¹Í­é•ş§§£«ÅĞ|ÄGÔ©•5QBÕ¶L
"~9e¹l.,D·Çœ„Ÿ’€í³ÅúgålƒKƒc†71g"V“Päíj¶Œ™(¨¯6·›Á$Õiã¨òoA\xRRÕ_oC^(ã;ôËYÔ§Ş¿åÀÄ–êÙåC€<F§ı]}9Å–Œ¥÷ÿÜš±Ì„è^\±ÑƒNÊïĞ/¿ãU›ô¥€Ğõò—‹©˜+ëjAryÏ…W<`ğ‹}+³Ç«S ­õqù¯J’€IVíQ½)}kÿ4©İ\RúE(“Ê>YÂrhîêM¢w<îí§jö®æ5¤êøR9¨®˜boÔîåÕ/:z6%“9´"õ—oKÒ¨°¶ñÑ˜T>×ºãR]SëeËóĞTd„yøQ±Y ‚¦H@58ÒVÚ.Ô¦uKúB	1yYò‘Üåë:Cºõ Cµñs´™ 9÷CóLfYØ}Ô©¥¿ÖQ;ğÛÔñÍæ(Ğø%<*è<’úäşTs;)™Öš¤?>‘¶R¹,y![Ëqrì¨ı.Å_r»k0å|ÉÉğuïH6Ú¦Å…œ¿ÌÒ–’$ç_÷/$2ÄWôó}—·¿_¸Ú»,’Z@\7†u"XıZtúT
/ÆŞeÜŸØQö=í?ûc%Gi€Vû7Zv¨£¿àšª1±y`‘%Ç€hms…×ÍD£¨Ì"ß¿2Q_t„ùc·
¯öb^ÍĞZ=)*CÊõD<ûÆX9Ñ/fŒù »@V`CZú*o@†¥¢üA…2ú¼”ô]“‹'÷§ıÎ<ª¶ìí£Eµ€‹åY0ˆÌòå¸ÿUÒöÎÎV™êÌÑf˜gÔ2Ã UÉBY<¼€eS–E«i‰,{isnIgû÷µæ„İè
ÅÀÊì3"QvlcšÙf‡0Ìxª´²wŸÌC£ÉH
œ‹2£š'C!y[dno¢€¬]­/ë@¾ïC„•æ=nÎj©¢›Õ4Ò>Àé¹K-9}O
%‰=„°úÆŠˆ3Ò$ÆM‡æÆİİæƒlıjN”„¢*ª×y}¤Ê\ EåÄÚh[dñåBæwÙØÏ€ }ÿ™ÔLşØƒnz~böÓqĞ˜"í1"Qw[Gàãşß´#@†ïGÍ•È÷„sÆÍá+Ñ‹¾1şMÎy…G4ÀNÛ"E {ß¸:u9N\jVbîØàê¢#PbØyzUEE»â`ê”«ûSH‚¬¡¼@¦±lêÈ´ó5ç@0™¯©Â—ÜŒ©Ò1ä?n&Ô›Ef1™/lZS4Êçû¸½êBÄ´­r0Â]çŠÕ%£¯v/«VNH-ƒy°vYÕk÷ınªh:Œù|
E†(Õ™>ù¥ÓŒ¿YŒ[ ğ‹şğXŒ:±ÒÚàBCÕ6$ø§JıÕU!ÿ‹'F¨AçÿGñ÷«;=Jõ)ÃøGS÷¼™ºDÒ™:q	bÑHE…yy¨$ªFìpS7Œàr±C÷ûe7Â~ãL€õV`ñwŠ‰Bİ[Çÿ×ëèúr×.ïm|dq©éoBYßí|°7+ÀŸ?²v)Å×†½?ÖæãrŸñØM¦¡[ÛPÖÃ*Í.âøèÛjwC7hs–›tMÔ©¸m?;e½$ÖØØ÷$Ğ
éL¬Öeq!Ñ^DÃ¨]»•êŞõ´X"urYšÒ=½ˆã.IVç@Œ,uúûĞîÅ¾Gî†¿{Iİg‚ŠBR—ØIDèÈXZÛ¸\u¾)CÛ¡¨ èi4yÅE¥Åì’Ü.²Òk6³üäRß´«$Ÿ+2b¥û4æ%:èÃØ–2ÕjIèÖİ=ïÇ\MïÁ? ’òZ÷Q^•H.‘½Ô”åßDºÖBÂC,r]£šì·E#ã™iòN•b´‡ı] ‰ùkDbxóœ¹V5BÎI{od¨ÅÜ2ÿÉİ}”µ~.^NÄöëIö½™¯–ìù—1v<òİ˜]Öa—ßº½ÁÚaØıQ…Íõ__=’¢	Öq?k#J›}GI¯¤5~`Ø$ãÆÑ2Àª¥é’_ÆÊ”OìÉéˆòU8ßuQÖ¥>,ÕåMöroÒ'¦«-Ærµ*SMÂòiM_Î—Ø*·íìÈĞ¯Ô‘.ë"‰ÚÊŸÅ«=ŸU)¬0O9â
“'¿Áá"£û€sù‡ëvXe¦ÊP[ıĞûºZ×ó&-ı =Iîã^ŞÆ†¢7Q0tVÅÓa\·+ ‚‰w©å
|?‡ £ˆ¹Æv$óÓœÿşuçB”›vkÜ°{´ †<êhµHVp°uÙ¸- úQ²ÖJ'(­s?"õü|êµ%Ì•ÚÁ»Æ K&áDİÍáàO¿—O#™1µNüy¾:úB÷šœ†&åWÓ©…‘•¹WF:ëÅš©N¢Âj‡è]ÿK“º›÷x•Mc÷Š¿‹³Às7Ú"¥Îİ`İCÒâõ˜,:Â¾?y–o‘Ò¹Ôù¦ T4îÖWœ¨Eg±çÎDÖ*šÂêûË½>ÔfÜîìŸc—‡wa+ÕE à­ã ÃÀÄ§ÓHnÌq¿äÒz¥zÆbjb[Å[Š_±»šƒ¦DRCâœÊğL:¡UyVu½ÙâÌöbÇO¥ûøêğ6&3±åŸç¿§.'9ãº}ËÅí›‘I´ùïà8Å?ÜFÿ!œ\‹îyñ(	ƒY©iZÀ—Xé)ÂÍ…ù4¾¨ñ\¨bu-Ï/{òVO´jæz¯Çèİâ¢Çí„¼Á	¯:Tüü„iMÇ©ºG¸F3 %‘g$ÃD„»gb÷²6z—£²3›Dâúœ]ÿğL¼¬O4ò’ ’hv¥} àOÒ=ÔĞÉÎ€Õ.©0,jlĞåı 9zOï–XB†“ÙÑúRºıÆ€µ/§Î¸ÚEêj4;iĞ³Lzt¿×N€+œ&”¬©ØÕÒ
^:âä¢Ğ/¤†‚èj“[i}÷ıÔXÃ½µö¿•£ F€‡®Ã—ƒëŸxPÒ»†heQİ”¨¯°àXt/<p`üÜYl¼ÃÁ8.Ñ Ä«ŒLõR’88Y"#…\¦şŒ¶Z/„^iÕ&u"7KÌA§ï/q}\õ´Ú0‡Í½/¥°ø5ïRî¸mù5
ÅMD½Şy(v¡oú´P
ˆQËŠ8­z_~^.NÀ’>çU†tíí¥]£8Úºú7	ĞïºçÁÄhwòx~
Ô’µ\RÒ¸K]8nRcÜŠ†ûP(6Ä¬’•ùMgf©ÆÕ‚øÜ½=ÎüÊƒŒ1Ÿ…é‹ÚO¬h‹òWH+Š¢pß]¹Æm n.³	'ñ“&3ÒÄ(aÀRé"P&ÔÀ¡x;àû¹¿•ĞG…–7ØÍÈû†H-r¥Š#JÂÙıUÈU‹)6%²¿ŠFÏ}V` Yœİ 9™¯oà%Šs³ïE¸©æ%Û»èĞÙa
şuâ²¾ŸáÖ2$­xó¸)Êl¤È²Çº%¡ş|œyY#¨ü¡!ïCQN!Û¬R{PŒ$ğº	ÊÙ%eÌœ«üZæDWu †¢­Èbç¸Ô^€ †JRÄ¶€#v{5 û¿Ã ¯ö¿Ÿ/ÒziwjV_Ş1'ê°¹÷<ù©ƒ¢Â<%õ0màä«¹å÷AtğÊ£sÁnÜ!xÂª¾ÔºWğ—ÎüeÎ=òS‘Ï1ARbt°‡A€[¢&ÃBü×Š6ñb(¢ËyÇâ6OÎ_	Ğ—5+"¿ı¡æÒÂárGÌÔ·’Ôl«[düeŠmÆ‰›IÃ®âSŠ­İ"æ®ñ3È Ã!"ÁKŸõêN§%ÆV’ÇôêŞn~°Ã¿/$Ù/ú0”{mÇ¹õÁåh_§¶Àµ,~#J$*9GĞÍê
¹k*Œí¤Ù¥â!WÁÈÎÌ“­wÚ’¢6=Ìe+”ô¤#Hİßm9ûíÀ@9°“Ü’PËÒ~wËm›ì©ZüX)†G!Ã»Œ0Ğ±çg,xSÿAÒãÜ–ğu¿^{`íä¯»¡W÷Ï_ñ¥v›ßETP„ n¢‹y3
Úœ®$µwÌ;Dâ¿N·$h9~Ÿ"Ä;Â?<Ê=*(>|àPËHI×®ŒŒvÈ9|©Ü›/hÓírä¸6¤	ŞÉŞºAŠìÍ ”M¯)iÛ/öØm_ùíşÇ§ó«Åãˆ_×şEÅïe¯ú³"Q‘âØ p^‡\êhÂàX>Ã`_•¬";`C‰ô} «Sœ˜é­ÆWS’ÕĞtJ”è1&síØ•9Ö?9iüTIäs-DwPÌ˜.¨ÆƒIÎ Ğ”•×Šéjù}©¥0#ª¥à&ƒ¯Ü`v¡v'µ0ã°ÿœ\½×›*]”Ş}ò¥ôB¢läĞ€|3ûdù¨QEï8ë°]ºóÎ¸3¸-0İ€\-Ñ]2we…uÊ®d_ó"
†ØîQGn.7Ø\àı¥j ÛJkÎ¥}vOÉ@Ÿ;|ìa*¥ö*PWÒ¼<\ë€6÷xÃ­“ªIOÔ(Â›óÅ©M¨R£iõ´¢u=›X0³
Rài$—¯<äV$] :DŒÄë:¯Úàµ_)”;³¯ªÓ
MNÙ‹ÈwW12†¢VN÷è•;fçĞÔı<u.@YÔW´wÖ\EÓl$ã‡M±¦+¾„€`­İç_Wp¾­•Œv@ÊÃÃÎ¹K&WQ¼5Ÿn#$—‰Óh"$„](B/W&—9<†¬?ßNUxÙ+ª¢	v~iW©•'­ ÔÕÚ`GyY³ºGÇ*ÃûV>,ˆİó
/ì<ñïj}4ö“üò¾ú¢R®K
¢[ ¯Mg÷z(!2aÜàÇ¢,ÌP©\ÍøVŸøªY¤Åæñ´«×RÆ3´úéVQ ãáòŸŸ3ÆW{Å¸¿¤	{y7à¥¼Ôs£Ø# ê¦ZúØh)f…²U`cl{h‡GˆÎÒf lÌ*j×Ş®d¶à¡y!¿È??ğ€i™hëqªZadY;ú8V|äi›)‰Ÿ­¦¢¼M,ûN‘$àZnÃÖi5<Xaî™‹ÿ;¯MU‡oO[Ø+=ğ Š³:©±Ì™¦š(‚Ø–æùCÀ¢IRSµÖË¼îÑ×÷)Nì?íÿÆÒÿŠ ­Mìö$…‚‡W[…‘­^†UÄÒáØƒòq!à-•œ×àTKÇæÇY\gn,öcá$¼ÿrÒ@X¸å«
xd*ÊQö˜åş]G-Å1ÿ¼=vu7“•…œß\ƒcÀÁÑ â·±xêPTéàÃ¤O­âKCÇ|¾32A):ƒÊ@=çZ2Sğn#„0šù©"ãåÛëì©P)ëà+úy3—ß¢ÃBç‹ùØÊtz¤Á%ømÜï}£¼ÄOö@2Òh|D«‹O6Ï“7E!Ş¹œákR¡Ÿ|î ¯@³á…èkÃ_›SP³C“´ƒaÆ©@Ş9"Àuñjá(ç¦‹Ê’ÔíŒUE¯fÅÁËò&9–ŒûUQ¸¢Ğ9øñF†ıO´.z¸¾_$›é«!ºÆ2„;À—§ôğùíSéû¹æøu3I´3*ƒ’*Ôˆ ñ=K×º˜Å²«Æ
ªÀşÌ'Ş—¤ˆ„ÿ]Ù„œI^ù¸ …	æ1¼)ËİzÙ@«—Ş`9\‹tpX9jçNúI˜Êú‘„®Ê¨tK¶öçõà,ZçôÙ+K†²£3k¢DÃ›ºÂÈ{}rEİŞ•FS'V+‰xh¨Àª”5”Q‚6;—Ty3i9#ÛºOœ<6aå¬=ZÇÚpI>5!‡Ç£¬Råkˆi:%83²æ>±‘[xèğ ¬NPfÑadlì·Ûw2ìCÿ;ÀPpÊd®”<AïÍ4§ÂRß$ ¶‡qùâ]¿ Ïï8e²§”úÎİeæÎ~ûRiˆRm÷?êÿı˜Ø±‚
Ğ¬#{¦Ô%*Ìc³[ó=Ì\äm˜÷Ùî•xpzûüûve ÃÖè8«o¶îiU
„€(¤ğí)j›©jA-WùÃ–=-³ëI£ÉÕ¡Ö\Ay%h¶i›b’V;s¡ƒâ€0—ŠúÜâùÖcØÜ@šn¹CË¼»8"©XÖzƒXt˜ArAw4h^(ñº‹ºdÒŸ¢ÂT4gÀ.[
¦%â‰`q|K)
¶¨P¬UÉ*=Ç>bÊïccÒSa.a’1…?§üÄ/æÿ ¹ÙÇ. Q3Ï_P‹ûLÖÖJW­ü„®©n(W
ù&íƒr+1‘YëBQríÃ¦5m3X‚„ª ìI‡`6ø¦}¥t÷1Ï%tæ«èİ0Êò›]ïC10[–ó«6•r—g0Ìå¥ĞÉ»-şÏ+ÿ‹¶Ò8'±"­×}›ıÀ†éPÅPÖ.:¸ÁõZèAæpá‘˜x'~n@g©G<¯0A—H¸{Á/¤šÖ%\#d9…¶†Ôÿ«Õ^RF­µË’İ‘ó^<nmWâaŒóÎnH¡)4E[Dõf‹qğ¯uëKÕ„Ï‘:'?òSËÃ_Ós2>JJ"p‚cM4&]‘´ŞWcSW»Ñf<»OÊF¦Â?ƒ~ğŒúĞ›2;ªın©,İ9èˆvŸB@mºØõµ¿œÿM1~¹#'#O&pâ?xšı¬¢¨]³ë1““ÏcöŸ?—<œşP˜“x7Åçí¸S‹Fóx·Ôf:L
¡MüÙŸ_hö\”ˆ­‚YañŸ%6^O5ÑçHºŸ{•|Zn¢)„ë&ûŞÎB²BİkÇ9ç``”DR¦µiÈ|TUåÓá–keëL˜øåÏOé:)Øí l­üšó0ÂA$>Pë&ŸÏ$uÉB°ÍgP!à™ú‡Áté;¶4³IOÓ­jÊ¡¢Á\@á*+]”b{÷6› +_~2§Ğª!QÕIW!';fÄï“>l±»n#øÇtÜX•¨v:r®`2´‰oÒI‘wg'¹T”»™ƒÖ›ç0
İQ<"™È¢S5Z³£¿5-–&Ê»·Ş‰	¾HînBPµ?İ€ìD
`ğ÷‘ Sıø¦îglšG7â°áŒª‡Ïˆ3_HsŸõ¶÷ó	`X˜ö¤R+”øşS:?éš9¯[Ÿk°"m”ˆêtÄÒmùÓ¬2C´{oµ¶¢r³ÓÓó§o4V´(^/¢ğŞww[œ¼ZD«ı:¯¼ÿ´F.0TÉªÎß+›¶ØHk¼!¶OmsŞ¸GÂ]¨½U\;|ğúBf=]p–+âëÏ+û.@•p†Ø_„Ø&ú±ÅX.BB°![|zÛÂ?+¢YuœƒË^òleªÈÔ!œ,MWÈNW ;Ö5/D?vËúl7€P6mLè  kÒ/]Ùß]ÆÜä(ñ¡‚ËR’X¬ÀA«¶^&¾B/Ÿ'h¦£ü&¬2 Ù$İÂÚÀ’@×löÿ;ãƒîv2æ0Y˜vá#ç¶óôH‡Æ{ÖAòC#ëß‡ÛB…ª‘‘5nó1Ûü­]‘ZÇüL'ÑJWğÄcA™È_‰]ÖÙê¤òş¹ÿ‡®êENuĞGw´ù:ùjQT—ßJd¦zdVAjQ%C´8Ç5Åı»ÆÕÍĞŒQ¼„L'Ù-{ŠDQç§“5^F‘éĞ<ÅóíkßLBòÿÕvß>¯ïÛA m¸$E§¿"õÄ¹~ª¨I‘‘ûÔ‘é²üIÀó¢x‚3¢ŞÚŠaUçZ±Gu)´Û5»_ü%*(UF Æğı:PVÆ‚/gÔ«?š<ÜròDÅàşÈ$¸=*¢®z&{Ùs4 áuÌ$h°±œíŸEhN6=_¢)›õëÚ„…Á„3Y»â8°÷R‰©vïÁSĞoMF¨V°š™uá‰3aF!¼ŞÒZîàoåRĞ ÏƒÔ‹d	1ö¯Kı¤`‹2\ª…ƒ0IE—Œ±0ğZz¦`ÍSŸTPÕÅç°šİ|§À­úÖõ®_Ä¶Ü/JéØ
ËšŸüW“CÒ6wö/…å‚Œ#awze—›²àßŞÎ2ù>Üõ"†‡˜J9‚q7·`©ÍÀÙ¢Ú	êwòä¾ï°	ÆàˆˆJøB›®3+á¯®Ê3úEÂzÏGé9Ú ;B§Šp×¨s¥qÜk±rÃø| †:QQÛÎ}Ğ3uTq
‘:ıLñ°¨d°â·¢A¨W\‘¦&c:¦‘=¯ -ÙõGîİ5}‚ß^î’÷;Êoìjã¡ÿ{°ã“î“~È§L+ç×1Y=†{6‹¬ûd8¼@Bˆu3”ZìVÊE÷|ÔJÍ½<¨-+GsÕæb±‚AŠ ê=²kµ«¤ì~ZÙKFéŸUC—ìÈ4^+]ì²â¡îo»èY‘”˜êH8±ü6">ÏõXP‰e!>Ò‹)+Rİò¡&GãŸYÃÖ‘WF<ïn*zêe3ÇCÕuû{u–Ls5=J5³_™èGŞ1}{=øæ€ yéx^Î)sÓâşÇ£?–U%ó…<pb}Ğ‚n*ÛÙ2ƒñÇ1Îå°
©*©gJ¶Œ<Ø•c¾İpGÀaİ$²È$¤ÆGyV1YÖÂ+h LÑ¢q÷ã·=ê¢aˆ£ßÔ«ê7
pìäH)ôÁÊ›2Ñ¢hy÷ô¬ë’Ìş¦aš~JÑÛ‡ƒ'±
-¾Mé$ÁŒâëš¡]ufÇI.U‚4ÀéLœ†Ûä,U¿Í+Âg‹ÏÁ2HIdğ+o<ù®iv `«0ÎdôjõVd¾¹j2&v¾Ê“…3¼=½]ï`¹)€è×VŸğÜr@Ğ¢ğMÖ¢ÎcßXı7¯xÛÙâˆ&§6N¸|p¾û·îÖJ‘k`éÆÇhÇåay¹×§»¬{ÓøDÈßMdC …>g¨Û ´
ep—p ÔEİÚˆ»Ÿ—j»Nğ@³„fW$f{è«·ÙW‡K÷v1ÏHî(¬¨ƒ`¥¶NKåYÆ‰¥Ì©€X?Næ5  sÈ/öüVıïÁ‚?uÕ¤è^'w¿Ò!¥-A)=Ì¿0°NîéÖlèc_’o/(ôf8FĞ}K§å1‰¿“Kq°Šü@?ê²é—:ÆÂ6§ÃAkªz|T+©ŞšØÂÚZ­Ï¹Ì‡Ë
bíGßçØª—›ş+dSKõİÈx‰½ï´‚úÖÄ¿÷=|­.‹xéÌ&Û`\“Œ|Ñ»¬†`,¶*nO³:¤Æ­y{…Ü1Só¾€œ¸¿N—Èœ^xsÜ2ûúÂÒ‡Õ°”ÒáKÌË&¬Vr=ìúŞnS’‹Âê1‘Ğwj,O|½zv°éqPb×Æ)ıÔQ‘o3afßYT´Ğa†©ŞÛv÷aîj+Æ¢º\=Ş™~£Ù¢ø}E<3Ü7üºh\èÖ.Sò?}@ ³Æ36rDX,àJ€°iâ’¼/«ãG‘ÿ•¥ãè¬š3›¨†<ìÓ6ºØå@Âö"ÇÒ·óL»WÛÆÊÍŸ§#%9	äÑi”Â¤ˆ À¸îxR?úÔ­†Øş}Ã¡¯òp¸†š¹Q±ßtO­¹Ë$ò½>i5şøSìrP’Fò}[ŸbVÉ6w·	~}ï$â¯ShÚî,ÜŒÉù®i¸*,‚ =8†tø©‡Ó™¶,ç(#)º–ƒ_y\ŒÙhMînû	ŸU'K5è¨T™ıc-±_\|›¾ßT|á˜yå(àeºÓ_ğO„ê²Yk˜…·—†6UOÕDÿA§üy#‘\Aã206­+p†Hî¿MGyÀíócÙùhH9+s‹ÚğÛ×Û(R¬ÎB2A›õ]/·7±ëy,ïŒ›Ç¦Nmò†)O†XfQG0ã¾Ëá|Ş…Çk=¡;,K?zÈ]xØ†É’à!îMÈPrt†CD¶R„˜©¹ğå 8¿íÒ àµ[	‰İ-Ñî"âú»®Âõa·¤W./n.[ 1l±£™²ğäv§e.„gN!Å`¶:‚±;;­MYr‚z¹!}Q'#‹¨ (øáãtø•šF›¡FÑà¾f3§ä{p¸Nğ©ê5¡co]¤òåïkÕ¤Ea^ã#´¨œ¹*[Ìğ0ÉÓßE%z^“’Vß¶ı1³@×ÊZQ¥ ‡+aG›ñ,ÿ"CØ—,7•×ªù=ë–ÚÁã¢B“UCÖàÉïän"¦@èœ/UŠÎ¶2és¢¹ñÚ€D¤£Şƒø^QHÌdzÊ—ÖtßTâš*‹·d»Aß8=	šUÈ>X£…7xŸ‰ Áìáp—l±%díÏö€Üüá°™TûKX€ù;÷9¬ò*xóÁÛ!õ<İ9–±åk 'ş:N`–[Â.§‰A¥®ë?®änøÅU¨ÍûwÇlÖOŒn]8\ßó†¯`Ü<èÏ<h<dë–œšƒŒM@n²
núœö$’0°óYí³$eÊ$)¥ÄEî¤ÁĞW£¡7œ{ğüJDúV‡d ƒÑwÇ± òç6"=GBÔ®V¿Då¿½)< ÇYğß[³IJÉñŞìAüzÒÂ-HbºÉöcùÜÒÒô.E–BÖ#¨¡™ÜïCç\½LöAé,¸×6"û‹ş^å‹~½¯µzŠ(Füº NïGÂq‰5²6-Âº>ğ­HC<õGøîM´%8ÀØ0ğ|¹ß/3E…‰¹Š-<–0Ô³¿×ÓµùG.Áß´”¬ç›Ğ ×^áÀ_°±0æK¡‰³á&D¨^f¯‰—ëô`¿¾—ŒZÀ…yg äºt9¤HúÌa—j:fğ´É?jÿûú\¢×‡cX)i¾@]B,Ï2eY€†3WäcAÿ­ıo‚l/Š~šyŠÿÈöƒ60bÏä€e®ˆ³~Q—E;Y¦ O²o›á	ó£/Ú)€¬ËYæ2ĞËvô=ıc`·5Ş´Ø«±ß§ÄÎ3†iQz Æc©©û–X¡ ]ÛtÙ4@“á‹kbap90Jb-|EƒRÀ¤]ó7Ì©Ğ;Ú<C *ëùçÎ/<,iwÖJÉb§à™s,|¸Pl›Ü/ç9Y Ïòºp‡ÅÁE¾‹Lèèb4GVÊ÷ˆáô‚1ÀÓÉÚ÷®öyDØ¬å^Ê§ äoŒ	‡tzş	¡’;İ®l1"±ácQİuíŠ¾…95${MÓ‘ól_Rj7il÷<•—ˆ_R'j;µR°éI
íÉåKe³ybLòÃ@e æüÙ¶ÀÕåAŞáëšaıÌ7gQ]m^ûUUi¯tøÆYn<œK0œwç0­¾qpu¦öŒu=Úğ-KY&·ãÿğş|‰ø;Ív_4u<ã ınpğC‘ówı‚çz<6¤È¬`=#§à+B.İ™À Û¼ƒÕN·î†{P<±À'â?®F&İ®áÆÖNhE6Ì™Å‘ŸR&·ın%NÂ¦~kWSß›åùÉœZQSu.†H“ ÒwÕ4¡k—õÖ‚TÚÕ`k’”hZD;ŸL]µ+o	‡ŒÕsË˜öñõPö$BWŠÃ¾N’´g¤Jü3/‹ì@®6“ÚIöÈsèJæ—ÆıˆO^/Ü>‡¹¿—kıÔ6ˆô|d¼µşgƒñú&[•¹,‰¶„}#/ác=eÖY-$†?¯•°çõr3×¬ïéL^¾Í¹‘ıä¼Ò¯V›l:hg™ƒÑt²¥fÅ\u«VŒ?w¬tÂäÙnõ„^±c†áGv‡Z˜Z²¶­@ıNFB5¹15¼ÊW2]íËG
Æmšf<Ïz'Ş<ZíhÑŠfYÌ>ıè)g;¤¥^×Ô†«µ×á£rå5[‹¤ /-•k±ZgIÃoTf¤›H}„¿ ÜÏjKEÀs\OçH4uYK‚0ãü|wĞ­•ÿ³:H‘º!gä€Ç÷šúŒæ Ø«s,ÄÉ\¤üƒÈô€Ö¤¥¹õñ–4Y”±ÜhRé_…Á?Nêâ½=Â'/Iå²˜:“1oµuCge;_ŒÁ¶ƒåG^Üí:ÑŸÏ—€ŠÍüJ>ÀZUeñ€ëTNÿ²!Õƒ½õ&†+˜vrKˆ¢	}Ë£˜¡ÄLç7º2ÄÙ+\‚…Ø4|Üœì„”ºHê!ƒ¦{Õ¯‡b/x(.«‡m_ğ0É–ÄyÏ?Ê‡,^K¥ĞdÄå‰»nka¦%¢“ÙõÑ<ÅDÀªjƒ's;ŸòIµ_·ei}h¶ümhÆ«b0—î¬4=^YNk’s0[¬(qu  Ùô§“ZLŞ¿R7÷+› WN&8nÿï-R’.q0 Kı®~S*ØÓÀóçA·ğ&ê´ÄÒ?²ØP|Šuf¨¹4Ï‰:L½ÑôÉÆğË{R’5äˆì¦g¼8áá0ÀWÆ´ 6Îƒä3uyÊNƒ?ù,êb6A™ Ë•‰ê`ĞC{ñÌîd2Íğİ˜éN¥ó–ó²¬³ëÂ‚Lıîjí˜Š€-|~ÖÍˆŸëxxb-Axm~Q¯±>7qVãÄ×ÃĞ÷¨«ÊñKÃÚ¦6¾™Õ‘ıeÀT#JÍNa‘9A´8P¦{Ê0Æxô¼q%|5_?¨Y¨Ê?J%1æF8¬ÒšZh×ñN!èĞW:5A²»®‰oİ? âŒB¬tı¸¬Ê}óñ,0„é³»m}œ ˜¡]`@œ(5(UİÚMş‹g·ÑÍÑMµèó·ßş{ çâ¾EU'hÂ·¿f¼…°çÂ8ML1îÎŠx|OÄMªVämbo;³ÌÁ+“'øˆ:¾i|@+ív±àQJüF5;õ"¡J•á3s|ˆ‚ÜÜ9˜¨ˆ®ÌÒÓšMLZ%Ìçèæ¼#¨şı%+8=C÷û˜g»«’qE{`ÆËßŠĞ]x‘nÇ ‚¿ ÷×3—Öt³ÃWâ‹Z„6}°GRì®°³«Î¨ ¢•ğTøÉ^’?E¬ß1”ÃÀ³³6¹ ²®îO|ì_(˜ä`½¼jÀw"kjí“îU¹`¹ß‹ñİ¨wÅ\‘#°Çà8Šé¼ß«b&½¡ÌFyôÒ\øA»!^ıø™1Š)ûUƒ XÑ¦+•éÏsûO¬£ÏÀR“¸WIêL¡¤ûc°¿9Ú^Õ·çÇîßPg@¯@fÜ—/(ŸZ'(ŒŒsx;\•¢F±Áı¾ÆAúU39Ï‹ºè±/dª†ø€RÚnÅ·ˆ«"¤4
dáYAÜ¾¶ˆÑ²açÿïó”Úp1Ô(7Ú·³ã_`ÙÈ³"Úİ•J®Êª$\8`Û‚è™jåòµKT	>} rKóÌOU"¿š|º÷¾…sÕÜ¸õw?|æ¯Š@ÂI0u‚ÔC~¯6s0¾Îº =±”ù9ßô,¦Üe<ÖB¾j¬¨ÜÍ*Ãë^9ì,B†<»ÑU½5ÙJ¯ZeX Õi¯­)7Ûax$âEa/);$2Ü/ì›˜¨Hè.¼È2­h»}ÿcÊõ¹Œ¹ÕCzÈ¬ù-,0lK“†sß›	ú—Pøçdöµ‘]gÍ£7*ÑOZEúˆÛû$ãi¯!ß'Õ(oÂbE[RÔÊ°)yB0¢
‹mhÃ©Tæ4Ps|©Èö²ÁÂA¼¯ƒcvéš“óŒã
ì&@±Ğ}LëwŞ–P«WiDâ¯——ÌÓ<m‡EèºFrGq¶ƒÚk^M¡ASêµï¾´ïÚ™l%$Á“à¥NÃŠİyf,8¥Dê¨Ö?Üæø|íæÙâ©8€"kEêš°®¸¸5Ã‹Sğƒ#ñ‘ª“Œ6±ô5œ¤ôçÌ5 ¨–3t_4ÇDˆ‚pâÊeÌ
!AãÂbó‰–‹Ñ•B
ô€pšñN¶µÓIDCÇ¬¨\Ô²ÈÎXŠ«P•ê•¶~>‰à° ö«oB/©ª:¹›?8¡Š9eÀ¢ø$]—ÑÌ¿}îz@—s7g=X°nñNÚ<7–}%:ËÕùË“»ÂDãAŸİXd£'um /Y~›°~ííŞ‚cÓ‰RKL°Óùn€ú3¾uGq¢!¥Ñc[<öÁóóı}?ŸÓ”ì+ÖïŠ³Ål.¬A“Wæa•Œ )›wóp&ş¬w’3`¦ZÓåi!BÛ}2İ4ãHAûäÿ8½sà©SíËnA¹tÑö@]SÙ·	šÎw\è¤2G³¼JPDy‰!3‡o[ù6ñD%ËüÂİq´.Ê¡Õş"à{ãilüŞ8&”kMÊ@½¦ó*[Ç­æ»'¨°ÀÖˆkĞt•ÙêI»”«¢î+øªâ=qR®_û:1Š@Íí`ÀÛf;Á ¶^ıt¢¿     
```

## ×§×•×‘×¥: ./package.json
```
{
  "name": "savtot-site",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@google/generative-ai": "^0.7.1",
    "@supabase/ssr": "^0.12.7",
    "@supabase/supabase-js": "^2.117.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "firebase-admin": "^12.1.0",
    "googleapis": "^171.4.0",
    "lucide-react": "^1.12.0",
    "multer": "^2.1.1",
    "next": "^16.2.4",
    "nodemailer": "^8.0.7",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "resend": "^6.12.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/react": "19.3.0",
    "concurrently": "^9.2.1",
    "gh-pages": "^6.3.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^4.0.0",
    "typescript": "7.0.2"
  }
}

```

## ×§×•×‘×¥: ./dev.log
```

> savtot-site@0.0.0 dev
> next dev

â–² Next.js 16.2.4 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://172.20.10.6:3000
- Environments: .env.local
âœ“ Ready in 225ms

 POST /api/email 200 in 3.6s (next.js: 98ms, application-code: 3.5s)
[?25h


```

## ×§×•×‘×¥: ./upload_new_images.mjs
```
import { readFileSync } from 'fs';

const CLOUD_NAME = 'dsgvsqnjp';
const UPLOAD_PRESET = 'savtot_admin';

const filesToUpload = [
  { path: 'public/10.jpg', id: '10', type: 'image' },
  { path: 'public/small_1.webp', id: 'small_1', type: 'image' },
  { path: 'public/small_2.webp', id: 'small_2', type: 'image' },
  { path: 'public/home-page.jpg', id: 'home-page', type: 'image' }
];

async function upload(buffer, publicId, type, originalPath) {
  const mime = originalPath.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
  const boundary = '----FormBoundary' + Math.random().toString(36).slice(2);
  const CRLF = '\r\n';

  const addField = (name, value) =>
    `--${boundary}${CRLF}Content-Disposition: form-data; name="${name}"${CRLF}${CRLF}${value}${CRLF}`;

  const textParts = [
    addField('upload_preset', UPLOAD_PRESET),
    addField('public_id', publicId),
  ].join('');

  const fileHeader =
    `--${boundary}${CRLF}` +
    `Content-Disposition: form-data; name="file"; filename="${publicId}"${CRLF}` +
    `Content-Type: ${mime}${CRLF}${CRLF}`;

  const footer = `${CRLF}--${boundary}--${CRLF}`;

  const body = Buffer.concat([
    Buffer.from(textParts, 'utf8'),
    Buffer.from(fileHeader, 'utf8'),
    buffer,
    Buffer.from(footer, 'utf8'),
  ]);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${type}/upload`,
    {
      method: 'POST',
      headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
      body,
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || JSON.stringify(data));
  return data.secure_url;
}

async function main() {
  for (const file of filesToUpload) {
    try {
      console.log(`Uploading ${file.path} to Cloudinary as ${file.id}...`);
      const buffer = readFileSync(file.path);
      const url = await upload(buffer, file.id, file.type, file.path);
      console.log(`Success! URL: ${url}`);
    } catch (e) {
      console.error(`Failed to upload ${file.path}:`, e.message);
    }
  }
}

main();

```

## ×§×•×‘×¥: ./google_docs_export/ItineraryAppendix_Summer.txt
```
--- ×¢×‘×¨×™×ª / HEBREW ---

× ×¡×¤×— ××¡×œ×•×œ â€“ ××¡×¢ × ×©×™× ×œ×¡×¨×™ ×œ× ×§×” (×§×™×¥ 2027)

×™×•× 1: ×”×’×¢×” ×•× ×¡×™×¢×” ×œ×¡×™×’×™×¨×™×™×”
××—×¨ ×”×¦×”×¨×™×™×: × ×—×™×ª×” ×‘×©×“×” ×”×ª×¢×•×¤×” ×©×œ ×§×•×œ×•××‘×• (CMB) ×•×¡×™×“×•×¨×™ ×”×’×¢×”.
×¢×¨×‘: × ×¡×™×¢×” ×§×‘×•×¦×ª×™×ª ×œ×¡×™×’×™×¨×™×™×” (×›-4 ×©×¢×•×ª).
×œ×™×œ×”: ×¦'×§-××™×Ÿ ×‘××œ×•×Ÿ, ×—×œ×•×§×ª ×—×“×¨×™× ×•××¨×•×—×ª ×¢×¨×‘ ×××•×—×¨×ª ×•×§×‘×œ×ª ×¤× ×™×.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Hotel Sigiriya (××• ×“×•××”).

×™×•× 2: ×¤×œ××™ ×¡×™×’×™×¨×™×™×”
×‘×•×§×¨ ××•×§×“×: ×˜×™×¤×•×¡ ×–×¨×™×—×” ××•×“×¨×š ×¢×œ ×¦×•×§ ×¡×™×’×™×¨×™×™×” ×”××¤×•×¨×¡×.
×‘×•×§×¨: ××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.
×××¦×¢ ×”×™×•×: ×¡×™×•×¨ ×‘×›×¤×¨ ××•×ª× ×˜×™ ×•×¡×¤××¨×™ ×¤×™×œ×™× ×‘×˜×‘×¢.
×¢×¨×‘: ××¨×•×—×ª ×¢×¨×‘ ×•×œ××—×¨×™×” ×–××Ÿ ×× ×•×—×” (××•×¤×¦×™×•× ×œ×™: ×¡×¤×/×¢×™×¡×•×™ ××™×•×¨×•×•×“×™).
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Hotel Sigiriya (××• ×“×•××”).

×™×•× 3: ×™×¢×¨ ×”×’×©× ×§×™×˜×•×œ×’××œ×” ×•× ×•×•××¨×” ××œ×™×”
×‘×•×§×¨ ××•×§×“×: ×˜×™×•×œ ×–×¨×™×—×” ×•×¡×©×Ÿ ×™×•×’×” ×‘×•×§×¨.
×‘×•×§×¨: ××¨×•×—×ª ×‘×•×§×¨ ×•× ×¡×™×¢×” ×œ×§×™×˜×•×œ×’××œ×”.
××—×¨ ×”×¦×”×¨×™×™×: ×¨×¤×˜×™× ×’ ×‘××™× ×œ×‘× ×™× ×•×”×œ×™×›×ª ×§× ×™×•× ×™× ×’ ×‘×™×¢×¨ ×”×’×©×.
×¢×¨×‘: × ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×” ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×”.

×™×•× 4: ××˜×¢×™ ×ª×” ×•×”×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×œ××œ×”
×‘×•×§×¨: ×¡×©×Ÿ ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.
×××¦×¢ ×”×™×•×: ×¡×™×•×¨ ××•×“×¨×š ×‘××˜×¢×™ ×”×ª×” ×©×œ × ×•×•××¨×” ××œ×™×” ×•×‘××¤×œ×™×.
××—×¨ ×”×¦×”×¨×™×™×: × ×¡×™×¢×” ×‘×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×”××¤×•×¨×¡××ª ×× ×•×•××¨×” ××œ×™×” ×œ××œ×”.
×¢×¨×‘: ×”×’×¢×” ×œ××œ×”, ×¦'×§-××™×Ÿ ×‘××œ×•×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×‘×‘×™×ª ×—×‘"×“ ×”××§×•××™.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×”.

×™×•× 5: ×¤×¡×’×•×ª ××œ×”
×‘×•×§×¨ ××•×§×“×: ×˜×™×•×œ ×–×¨×™×—×” ×•×¡×©×Ÿ ×™×•×’×”.
×‘×•×§×¨: ××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.
×××¦×¢ ×”×™×•×: ×™×¦×™××” ×œ×˜×‘×¢ ××œ ××¤×œ×™ ×“×™××œ×•××‘×” ×”××¨×”×™×‘×™×.
××—×¨ ×”×¦×”×¨×™×™×: ×—×•×•×™×ª ××•××’×” (Zipline) ×•×–××Ÿ ×”×ª××¨×’× ×•×ª ×‘××œ×•×Ÿ.
×¢×¨×‘: ×¡×™×•×¨ ×‘×¢×™×™×¨×”, ×§× ×™×•×ª, ×•××¨×•×—×ª ×¢×¨×‘ ×‘×‘×™×ª ×—×‘"×“.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×”.

×™×•× 6: ××¡×¢ ×œ×—×•×£ ×”××–×¨×—×™ â€“ ×¤×¡×™×§×•×“×”
×‘×•×§×¨: ×¡×©×Ÿ ×™×•×’×”, ××¨×•×—×ª ×‘×•×§×¨, ×•× ×¡×™×¢×” ×œ×¤×¡×™×§×•×“×”.
×××¦×¢ ×”×™×•×: ×¡××¤ ×‘×•×§×¨ (SUP) ×•×× ×•×—×” ×‘×—×•×£ ×‘××¤×¨×¥ ×¤×¡×™×§×•×“×”.
××—×¨ ×”×¦×”×¨×™×™× ×××•×—×¨×™×: ×”×›× ×•×ª ×œ×©×‘×ª.
×¢×¨×‘: ×›× ×™×¡×ª ×©×‘×ª; ×¡×¢×•×“×ª ×©×‘×ª ×—×’×™×’×™×ª.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Pasikudah Bay Hotel (××• ×“×•××”).

×™×•× 7: ×©×‘×ª ×× ×•×—×” ×‘×¤×¡×™×§×•×“×”
×‘×•×§×¨: ×§×¤×”/×¢×•×’×” ×‘×‘×•×§×¨, ×•×œ××—×¨×™×• ××¨×•×—×ª ×‘×•×§×¨/×‘×¨×× ×¥' ×××•×—×¨×ª.
××—×¨ ×”×¦×”×¨×™×™×: ××¨×•×—×ª ×¦×”×¨×™×™× ×•×–××Ÿ ×—×•×£ ×¨×’×•×¢.
×¢×¨×‘: ××•×¦××™ ×©×‘×ª ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Pasikudah Bay Hotel (××• ×“×•××”).

×™×•× 8: ×”×¨×¤×ª×§××•×ª ×™× ×‘×˜×¨×™× ×§×•××œ×™
×‘×•×§×¨: ×¡×©×Ÿ ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.
×××¦×¢ ×”×™×•×: ×™×¦×™××” ×œ×˜×¨×™× ×§×•××œ×™ ×œ×©× ×•×¨×§×œ×™× ×’, ×§× ×™×•×ª ××§×•××™×•×ª, ×•××¤×©×¨×•×ª ×œ×¦×¤×™×™×” ×‘×—×™×•×ª ×™× (××•×¤×¦×™×•× ×œ×™).
×¢×¨×‘: ××¨×•×—×ª ×¢×¨×‘ ×•××¤×©×¨×•×ª ×œ×˜×™×¤×•×œ×™ ×¡×¤× ××™×•×¨×•×•×“×™.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: Pasikudah Bay Hotel (××• ×“×•××”).

×™×•× 9: ×¤×¨×™×“×” ×•×¢×–×™×‘×”
×‘×•×§×¨: ×˜×™×•×œ ×–×¨×™×—×” ××—×¨×•×Ÿ, ×¡×©×Ÿ ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.
××—×¨ ×”×¦×”×¨×™×™×: × ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×” ×§×•×œ×•××‘×• (×›-5.5 ×©×¢×•×ª).
×¢×¨×‘: ××¨×•×—×ª ×¢×¨×‘ ××—×¨×•× ×” ×œ×¤× ×™ ×”×˜×™×¡×” (×‘××œ×•×Ÿ/×‘×™×ª ×—×‘"×“).
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: ×‘×•×§×¨, ×¢×¨×‘

×”×‘×”×¨×” ××©×¤×˜×™×ª: ×”××¡×œ×•×œ ×”××•×¦×’ ×œ×¢×™×œ ××¤×¨×˜ ××ª ×”×œ×•"×– ×”××ª×•×›× ×Ÿ ×•×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×”××œ××” ×œ×‘×¦×¢ ×”×ª×××•×ª ×”×›×¨×—×™×•×ª ×‘××¡×œ×•×œ, ×‘×¡×“×¨ ×”×™××™×, ××• ×œ×”×—×œ×™×£ ××ª ×”××œ×•× ×•×ª ×”××¤×•×¨×˜×™× ×‘××§×•××•×ª ×œ×™× ×” ×‘×¨××” ×–×”×”, ×¢×§×‘ ××™×œ×•×¦×™ ×©×˜×—, ×”×—×œ×˜×•×ª ×¡×¤×§×™× ××§×•××™×™×, ×ª× ××™ ××–×’ ××•×•×™×¨ ××• ×›×•×— ×¢×œ×™×•×Ÿ.
×¤×™×¨×•×˜ ×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ($290 USD): ×”×¨×›×™×‘ ××›×¡×” ×‘××œ×•××• ××ª ×›×œ ×“××™ ×”×›× ×™×¡×” ×”×§×‘×•×¦×ª×™×™×, ×”×“×¨×›×” ××§×•××™×ª, ×•×œ×•×’×™×¡×˜×™×§×” ×¢×‘×•×¨ ×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×¤×¢×™×œ×•×™×•×ª ××•×¤×¦×™×•× ×œ×™×•×ª ××• ×˜×™×¤×•×œ×™ ×¡×¤× ×™×©×•×œ××• ×‘× ×¤×¨×“ ×¢×œ ×™×“×™ ×”××©×ª×ª×¤×ª.

--- ×× ×’×œ×™×ª / ENGLISH ---

Itinerary Appendix â€“ Women's Journey to Sri Lanka (Summer 2027)

Day 1: Arrival & Journey to Sigiriya
Afternoon: Landing at Colombo Airport (CMB) and formal airport procedures.
Evening: Scenic group drive to Sigiriya (approx. 4 hours).
Night: Hotel check-in, room assignments, and a late welcome dinner.
Meals: 3 meals | Accommodation: Hotel Sigiriya (or similar).

Day 2: The Wonders of Sigiriya
Early Morning: Guided sunrise hike at the iconic Sigiriya Rock.
Morning: Breakfast at the hotel.
Mid-Day: Authentic Village Tour and a Wildlife Elephant Safari.
Evening: Dinner, followed by relaxation time (Optional: Ayurvedic spa/massage).
Meals: 3 meals | Accommodation: Hotel Sigiriya (or similar).

Day 3: Kithulgala Rainforest & Nuwara Eliya
Early Morning: Sunrise hike and morning Yoga session.
Morning: Breakfast at the hotel and drive to Kithulgala.
Afternoon: Whitewater rafting and a rainforest canyoning walk.
Evening: Drive to Nuwara Eliya and dinner at the hotel.
Meals: 3 meals | Accommodation: Hotel in Nuwara Eliya.

Day 4: Tea Plantations & The Scenic Train to Ella
Morning: Yoga session and breakfast.
Mid-Day: Guided tour of the Nuwara Eliya Tea Plantations and waterfalls.
Afternoon: The famous scenic train ride from Nuwara Eliya to Ella.
Evening: Arrival in Ella, hotel check-in, and dinner at the local Chabad House.
Meals: 3 meals | Accommodation: Hotel in Ella.

Day 5: The Heights of Ella
Early Morning: Sunrise hike and Yoga session.
Morning: Breakfast at the hotel.
Mid-Day: Nature excursion to the spectacular Diyaluma Falls.
Afternoon: Omega Zipline experience and time to freshen up at the hotel.
Evening: Town exploration, shopping, and dinner at the Chabad House.
Meals: 3 meals | Accommodation: Hotel in Ella.

Day 6: Journey to the East Coast â€“ Pasikudah
Morning: Yoga session, breakfast, and transit to Pasikudah.
Mid-Day: Morning SUP (Stand Up Paddleboarding) and beach relaxation at Pasikudah Bay.
Late Afternoon: Preparations for Shabbat.
Evening: Shabbat begins; festive dinner.
Meals: 3 meals | Accommodation: Pasikudah Bay Hotel (or similar).

Day 7: A Restful Shabbat in Pasikudah
Morning: Morning coffee/cake, followed by a late breakfast/brunch.
Afternoon: Lunch and leisurely beach time.
Evening: Motzash (Shabbat ends) and dinner at the hotel.
Meals: 3 meals | Accommodation: Pasikudah Bay Hotel (or similar).

Day 8: Ocean Adventures in Trincomalee
Morning: Yoga session and breakfast.
Mid-Day: Excursion to Trincomalee for snorkeling, local shopping, and optional marine wildlife watching.
Evening: Dinner and optional Ayurvedic spa treatments.
Meals: 3 meals | Accommodation: Pasikudah Bay Hotel (or similar).

Day 9: Farewell & Departure
Morning: Final sunrise hike, Yoga session, and breakfast.
Afternoon: Departure drive to Colombo Airport (approx. 5.5 hours).
Evening: Final dinner before the flight (Hotel/Chabad House).
Meals: Breakfast, Dinner

Legal Disclaimer: The itinerary presented above outlines the planned schedule and included activities. The Organizers reserve the full right to make necessary adjustments to the itinerary, the order of days, or substitute the specified hotels with accommodations of an identical standard, due to field constraints, local supplier decisions, weather conditions, or force majeure.
Activity Component Breakdown ($290 USD): Included Activities (Covered under the $290 USD Component) fully covers all group entry fees, local guiding services, and logistics for the included excursions. Excluded / Optional Activities (Paid Separately on Site) such as Ayurvedic spa treatments or marine wildlife excursions must be paid for independently.

```

## ×§×•×‘×¥: ./google_docs_export/TravelAgreement.txt
```
BILINGUAL TRAVEL AGREEMENT AND REGISTRATION TERMS / ×”×¡×›× ×”×ª×§×©×¨×•×ª ×•×ª× ××™ ×¨×™×©×•× ×“×•-×œ×©×•× ×™
Women's Journey to Sri Lanka (Summer 2026) / ××¡×¢ × ×©×™× ×œ×¡×¨×™ ×œ× ×§×” (×§×™×¥ 2026)

Drawn and signed on: [Date] / × ×¢×¨×š ×•× ×—×ª× ×‘×™×•×: [×ª××¨×™×š]

Between: The Production Team: Naomi, Aliza, and Eyal (hereinafter: the "Organizers")
×•×‘×™×Ÿ: ×¦×•×•×ª ×”×”×¤×§×”, ×”×›×•×œ×œ ××ª × ×¢××™, ×¢×œ×™×–×” ×•××™×œ (×œ×”×œ×Ÿ: "×”×××¨×’× ×™×")

And: [Participant Name], ID: [ID Number], Address: [Address], Phone: [Phone Number] (hereinafter: the "Participant")
×œ×‘×™×Ÿ: [×©× ×”××©×ª×ª×¤×ª], ×ª.×–. [××¡×¤×¨ ×ª×¢×•×“×ª ×–×”×•×ª], ××¨×—×•×‘ [×›×ª×•×‘×ª], ×˜×œ×¤×•×Ÿ: [××¡×¤×¨ ×˜×œ×¤×•×Ÿ] (×œ×”×œ×Ÿ: "×”××©×ª×ª×¤×ª")

1. Nature of the Engagement (Agency & Trust Model) / ××”×•×ª ×”×”×ª×§×©×¨×•×ª (××•×“×œ ×¡×•×›× ×•×ª ×•× ××× ×•×ª)

EN: 1.1. The Participant declares she is aware that the Organizers act solely as intermediaries and agents between her and the tourism suppliers, hotels, transportation companies, and subcontractors in Sri Lanka, and that all supplier-related funds are held in trust and transferred directly to these third-party providers.
HE: 1.1. ×”××©×ª×ª×¤×ª ××¦×”×™×¨×” ×›×™ ×™×“×•×¢ ×œ×” ×©×”×××¨×’× ×™× ×¤×•×¢×œ×™× ×›××ª×•×•×›×™× ×•×¡×•×›× ×™× ×‘×œ×‘×“ ×‘×™× ×” ×œ×‘×™×Ÿ ×¡×¤×§×™ ×”×ª×™×™×¨×•×ª, ×‘×ª×™ ×”××œ×•×Ÿ, ×—×‘×¨×•×ª ×”×”×¡×¢×” ×•×§×‘×œ× ×™ ×”××©× ×” ×‘×¡×¨×™ ×œ× ×§×”, ×•×›×™ ×›×œ ×”×›×¡×¤×™× ×”××™×•×¢×“×™× ×œ×¡×¤×§×™× ××•×—×–×§×™× ×‘× ××× ×•×ª ×•××•×¢×‘×¨×™× ×™×©×™×¨×•×ª ×œ×¡×¤×§×™ ×¦×“ ×’' ××œ×•.

EN: 1.2. The Participant is solely responsible for her independent arrival at the designated meeting point. This registration covers ground services only and is strictly independent of the Participant's personal international flight arrangements.
HE: 1.2. ×‘××—×¨×™×•×ª ×”××©×ª×ª×¤×ª ×œ×”×¡×“×™×¨ ××ª ×”×’×¢×ª×” ×”×¢×¦×××™×ª ×œ× ×§×•×“×ª ×”××¤×’×© ×©×ª×™×§×‘×¢. ×¢×¡×§×ª ×”×¨×™×©×•× ×—×œ×” ×¢×œ ×©×™×¨×•×ª×™ ×”×§×¨×§×¢ ×‘×œ×‘×“ ×•××™× ×” ×ª×œ×•×™×” ×‘×”×¡×“×¨×™ ×”×ª×¢×•×¤×” ×”×‘×™× ×œ××•××™×™× ×”××™×©×™×™× ×©×œ ×”××©×ª×ª×¤×ª.

2. Trip Cost, Pricing, and Financial Transparency / ×¢×œ×•×ª ×”××¡×¢, ××‘× ×” ×”×ª××—×•×¨ ×•×ª× ××™ ×”×—×“×¨×™×

In strict accordance with Israeli tax law, including Regulation 6 of the Value Added Tax Regulations, 1976 (Expenses in favor of a third party), the payment for the trip is split into two separate channels, and separate receipts will be issued:
×‘×”×ª×× ×œ×”×•×¨××•×ª ×”×“×™×Ÿ, ×œ×¨×‘×•×ª ×ª×§× ×” 6 ×œ×ª×§× ×•×ª ××¡ ×¢×¨×š ××•×¡×£, ×”×ª×©×œ×•× ×‘×’×™×Ÿ ×”××¡×¢ ××•×¨×›×‘ ××©× ×™ ×¢×¨×•×¦×™× × ×¤×¨×“×™×, ×•×‘×’×™× × ×™×•×¤×§×• ×§×‘×œ×•×ª × ×¤×¨×“×•×ª:

EN: 2.1. Base Price: 8,050 ILS (Based on $2,710 USD). The price is based on a minimum group of 10 participants and double occupancy (two participants per room).
HE: 2.1. ××—×™×¨ ×”×‘×¡×™×¡ ×œ××©×ª×ª×¤×ª: 8,050 ×©"×— (×”××‘×•×¡×¡ ×¢×œ ×¢×œ×•×ª ×©×œ 2,710 ×“×•×œ×¨ ××¨×”"×‘). ×”××—×™×¨ ××‘×•×¡×¡ ×¢×œ ×§×‘×•×¦×” ×©×œ 10 ××©×ª×ª×¤×•×ª ×œ×¤×—×•×ª ×•×¢×œ ×œ×™× ×” ×‘×—×“×¨ ×–×•×’×™.

EN: 2.2. Supplier Deposit vs. Organizing Fee: Out of the base price, approximately 1,400 ILS constitutes the Organizers' fee for preparation and organization (for which a standard Tax Invoice/Receipt will be issued). The balance, approximately 6,650 ILS, constitutes Supplier Deposit Funds held in trust/escrow exclusively for the Participant's expenses in Sri Lanka (for which a specific "Deposit Receipt" will be issued to the Participant, stating that the funds are received for paying expenses on behalf of the client).
HE: 2.2. ×“××™ ××¨×’×•×Ÿ ×•×¤×™×§×“×•×Ÿ ×¡×¤×§×™×: ××ª×•×š ××—×™×¨ ×”×‘×¡×™×¡, ×¡×š ×©×œ ×›-1,400 ×©"×— ××”×•×•×” ××ª ×“××™ ×”××¨×’×•×Ÿ ×•×”×™×¢×¨×›×•×ª ×”×××¨×’× ×™× (×‘×’×™× × ×ª×•×¤×§ ×—×©×‘×•× ×™×ª ××¡/×§×‘×œ×” ×›×—×•×§). ×”×™×ª×¨×”, ×‘×¡×š ×©×œ ×›-6,650 ×©"×—, ××”×•×•×” ×›×¡×¤×™ ×¤×™×§×“×•×Ÿ ×œ×¡×¤×§×™× ×”××•×—×–×§×™× ×‘× ××× ×•×ª ×œ×˜×•×‘×ª ×”×•×¦××•×ª ×”×œ×§×•×—×” ×‘×¡×¨×™ ×œ× ×§×” (×‘×’×™× × ×ª×•×¤×§ "×§×‘×œ×ª ×¤×™×§×“×•×Ÿ" × ×¤×¨×“×ª ×”××¦×™×™× ×ª ×‘××¤×•×¨×© ×›×™ ×”×¡×›×•× × ×ª×§×‘×œ ×œ×ª×©×œ×•× ×”×•×¦××•×ª ×‘×©×‘×™×œ ×”×œ×§×•×—×”).

EN: 2.3. Refundable Field Activities Component: Out of the base price, a sum of $290 USD is defined as the "field activities component." This specific component will be excluded in favor of the Participant in the refund mechanism in case of cancellation (as detailed in Section 4).
HE: 2.3. ×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ×©×˜×— ×œ×”×—×–×¨: ××ª×•×š ××—×™×¨ ×”×‘×¡×™×¡, ×¡×š ×©×œ $290 ×“×•×œ×¨ ××¨×”"×‘ ××•×’×“×¨ ×›"×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ×©×˜×—". ×¨×›×™×‘ ×¡×¤×¦×™×¤×™ ×–×” ×™×•×—×¨×’ ×œ×˜×•×‘×ª ×”××©×ª×ª×¤×ª ×‘××¡×’×¨×ª ×× ×’× ×•×Ÿ ×”×”×—×–×¨×™× ×‘××§×¨×” ×©×œ ×‘×™×˜×•×œ (×›××¤×•×¨×˜ ×‘×¡×¢×™×£ 4).

EN: 2.4. Payment Schedule & Registration Fee: The payment for the trip shall be made in the following installments (in USD or its ILS equivalent according to the high transfer exchange rate on the day of payment):
HE: 2.4. ×œ×•×— ×ª×©×œ×•××™× ×•×“××™ ×¨×™×©×•×: ×”×ª×©×œ×•× ×¢×‘×•×¨ ×”×˜×™×•×œ ×™×‘×•×¦×¢ ×‘×©×™×¢×•×¨×™× ×”×‘××™× (×‘×“×•×œ×¨ ××¨×”"×‘ ××• ×‘×©×•×•×” ×¢×¨×š ×‘×©×§×œ×™× ×œ×¤×™ ×©×¢×¨ ×”×¢×‘×¨×•×ª ×•×”××—××•×ª ×’×‘×•×” ×‘×™×•× ×”×ª×©×œ×•×):

Advance Payment / ×ª×©×œ×•× ××§×“××”: 1,000 ILS upon registration. Out of this sum, 300 ILS is defined as a non-refundable registration and preparation fee (except in the event of a lawful cancellation within the first 14 days, as defined by law). / ×¡×š ×©×œ 1,000 ×©"×— ×¢× ×”×”×¨×©××”. ××ª×•×š ×¡×›×•× ×–×”, ×¡×š ×©×œ 300 ×©"×— ××•×’×“×¨ ×›×“××™ ×¨×™×©×•× ×•×”×™×¢×¨×›×•×ª ×©××™× × × ×™×ª× ×™× ×œ×”×—×–×¨ (×œ××¢×˜ ×‘×™×˜×•×œ ×›×“×™×Ÿ ×‘×ª×•×š 14 ×”×™××™× ×”×¨××©×•× ×™× ×›×§×‘×•×¢ ×‘×—×•×§).
Second Installment / ×ª×©×œ×•× ×©× ×™: [Insert % or exact amount / ×”×›× ×¡ ××—×•×– ××• ×¡×›×•× ××“×•×™×§] to be paid no later than [Date / ×ª××¨×™×š].
Final Installment / ×ª×©×œ×•× ×©×œ×™×©×™ ×•××—×¨×•×Ÿ: The remaining balance to be paid no later than [Date / ×ª××¨×™×š].

3. Single Supplement and Rooming Mechanics / ×ª×•×¡×¤×ª ×—×“×¨ ×™×—×™×“ ×•××›× ×™×§×ª ×”×—×“×¨×™×

EN: 3.1. To prevent a deficit in the trip's budget due to an odd number of participants, upgrading or being forced into a single room will be priced in two tracks:
HE: 3.1. ×¢×œ ×× ×ª ×œ×× ×•×¢ ×’×™×¨×¢×•×Ÿ ×‘×§×•×¤×ª ×”××¡×¢ ×¢×§×‘ ××¡×¤×¨ ××©×ª×ª×¤×•×ª ××™-×–×•×’×™, ×©×“×¨×•×’ ×œ×—×“×¨ ×™×—×™×“ ××• ×”×¢×‘×¨×” ×××•×œ×¦×ª ×œ×—×“×¨ ×™×—×™×“ ×™×ª×•××—×¨×• ×‘×©× ×™ ××¡×œ×•×œ×™×:
Track A (Even number of single room requests) / ××¡×œ×•×œ ×' (××¡×¤×¨ ×–×•×’×™ ×©×œ ×“×•×¨×©×•×ª ×—×“×¨ ×™×—×™×“): If at least 2 participants in the group request a single room, the supplement will be $450 USD per participant (Total trip price: $3,160 USD). / ×× ×œ×¤×—×•×ª 2 ××©×ª×ª×¤×•×ª ×‘×§×‘×•×¦×” ××‘×§×©×•×ª ×—×“×¨ ×™×—×™×“, ×”×ª×•×¡×¤×ª ×ª×¢××•×“ ×¢×œ $450 ×“×•×œ×¨ ××¨×”"×‘ ×œ××©×ª×ª×¤×ª (××—×™×¨ ××¡×¢ ×›×•×œ×œ: $3,160 ×“×•×œ×¨).
Track B (Forced / Sole single room) / ××¡×œ×•×œ ×‘' (×—×“×¨ ×™×—×™×“ ×‘×œ×¢×“×™ ××• ×××•×œ×¥): If only one (1) participant in the entire group requests a single room, OR in the event of a "forced single room" due to an odd number of participants or the cancellation of a roommate, the supplement will be $900 USD (Total trip price: $3,610 USD), in order to cover the fixed cost of the additional room forced upon the logistical layout. / ×× ×¨×§ ××©×ª×ª×¤×ª ××—×ª ×‘×›×œ ×”×§×‘×•×¦×” ×ª×©×”×” ×‘×—×“×¨ ×™×—×™×“, ××• ×‘××§×¨×” ×©×œ ×—×“×¨ ×™×—×™×“ ×××•×œ×¥ ×¢×§×‘ ××¡×¤×¨ ××©×ª×ª×¤×•×ª ××™-×–×•×’×™ ××• ×‘×™×˜×•×œ ×©×œ ×©×•×ª×¤×” ×œ×—×“×¨, ×”×ª×•×¡×¤×ª ×ª×¢××•×“ ×¢×œ $900 ×“×•×œ×¨ ××¨×”"×‘ (××—×™×¨ ××¡×¢ ×›×•×œ×œ: $3,610 ×“×•×œ×¨), ×œ×©× ×›×™×¡×•×™ ×”×¢×œ×•×ª ×”×§×‘×•×¢×” ×©×œ ×”×—×“×¨ ×”× ×•×¡×£ ×©× ×›×¤×” ×¢×œ ×”××¢×¨×š ×”×œ×•×’×™×¡×˜×™.

4. The "Determining Date" and Cancellation Policy / "×”××•×¢×“ ×”×§×•×‘×¢" ×•××“×™× ×™×•×ª ×”×‘×™×˜×•×œ×™×

This journey includes tourism services provided entirely outside of Israel. In accordance with Section 14C2 of the Israeli Consumer Protection Law, 1981, the Participant is offered the choice between the following cancellation tracks. Please mark (X) next to your chosen track:
×”××¡×¢ ×›×•×œ×œ ×©×™×¨×•×ª×™ ×ª×™×™×¨×•×ª ×”× ×™×ª× ×™× ×‘××œ×•×× ××—×•×¥ ×œ×™×©×¨××œ. ×‘×”×ª×× ×œ×¡×¢×™×£ 14×’2 ×œ×—×•×§ ×”×’× ×ª ×”×¦×¨×›×Ÿ, ×”×ª×©×"×-1981, ××•×¦×¢×ª ×œ××©×ª×ª×¤×ª ×–×›×•×ª ×”×‘×—×™×¨×” ×‘×™×Ÿ ×—×œ×•×¤×•×ª ×”×‘×™×˜×•×œ ×”×‘××•×ª. ×× × ×¡×× ×™ (X) ×œ×™×“ ×”××¡×œ×•×œ ×”× ×‘×—×¨ ×¢×œ ×™×“×š:

[ ] Track A â€“ Israeli Consumer Protection Law (Default) / ×—×œ×•×¤×” ×' â€“ ×—×•×§ ×”×’× ×ª ×”×¦×¨×›×Ÿ ×”×™×©×¨××œ×™ (×‘×¨×™×¨×ª ××—×“×œ):
EN: The right to cancel within 14 days from the date of the transaction or receipt of this document, provided the cancellation is made at least 7 non-rest days before the departure date. For a senior citizen (over 65), a new immigrant, or a person with a disability, the cancellation period is 4 months from the transaction date (subject to presenting an appropriate certificate and provided the engagement included a direct conversation). The cancellation fee in this track will be 5% of the transaction value or 100 ILS, whichever is lower. (Legal Notice: Cancellation after this statutory timeframe will automatically trigger the strict cancellation fees of the foreign suppliers, as detailed in Track B).
HE: ×–×›×•×ª ×‘×™×˜×•×œ ×‘×ª×•×š 14 ×™××™× ××™×•× ×‘×™×¦×•×¢ ×”×¢×¡×§×” ××• ×§×‘×œ×ª ××¡××š ×–×”, ×•×‘×œ×‘×“ ×©× ×•×ª×¨×• 7 ×™××™ ×¢×‘×•×“×” ×œ×¤×—×•×ª ×œ×¤× ×™ ××•×¢×“ ×”×˜×™×•×œ. ××©×ª×ª×¤×ª ×©×”×™× ××“× ×¢× ××•×’×‘×œ×•×ª, ××–×¨×—×™×ª ×•×ª×™×§×” (××¢×œ ×’×™×œ 65) ××• ×¢×•×œ×” ×—×“×©×”, ×¨×©××™×ª ×œ×‘×˜×œ ×‘×ª×•×š 4 ×—×•×“×©×™× ××™×•× ×”×”×¨×©××” (×‘×›×¤×•×£ ×œ×”×¦×’×ª ×ª×¢×•×“×” ××ª××™××” ×•×‘××™×“×” ×•×”×”×ª×§×©×¨×•×ª ×›×œ×œ×” ×©×™×—×” ×™×©×™×¨×”). ×“××™ ×”×‘×™×˜×•×œ ×‘×—×œ×•×¤×” ×–×• ×™×¢××“×• ×¢×œ 5% ××• 100 ×©"×— (×”× ××•×š ××‘×™× ×™×”×). (×”×¢×¨×” ××©×¤×˜×™×ª: ×‘×™×˜×•×œ ×œ××—×¨ ×—×œ×•×Ÿ ×”×–××Ÿ ×”×¡×˜×˜×•×˜×•×¨×™ ×™×•×‘×™×œ ×œ×”×—×œ×ª ×“××™ ×”×‘×™×˜×•×œ ×”××œ××™× ×©×œ ×”×¡×¤×§×™× ×‘×—×•"×œ, ×›××¤×•×¨×˜ ×‘×—×œ×•×¤×” ×‘').

[ ] Track B â€“ Foreign Suppliers & Group Commitments Policy (Applicable starting the "Determining Date" - June 30, 2026) / ×—×œ×•×¤×” ×‘' â€“ ××“×™× ×™×•×ª ×¡×¤×§×™ ×”×§×¨×§×¢ ××—×•×¥ ×œ×™×©×¨××œ (×”×—×œ ×"×”××•×¢×“ ×”×§×•×‘×¢" - 30.6.2026):
EN: Under this track, the cancellation policy of the foreign suppliers applies. The parties agree that the "Determining Date" upon which reservations with ground suppliers become final and binding is June 30, 2026 (If the Organizers make actual non-refundable payments to suppliers prior to this date, the Determining Date will shift to the actual date of payment, and notice will be given).
HE: ×‘××¡×œ×•×œ ×–×” ×ª×—×•×œ ××“×™× ×™×•×ª ×”×‘×™×˜×•×œ ×©×œ ×”×¡×¤×§×™× ×”×–×¨×™× ×‘×—×•"×œ ×•×”×”×ª×—×™×™×‘×•×™×•×ª ×”×§×‘×•×¦×ª×™×•×ª. ××•×¡×›× ×›×™ "×”××•×¢×“ ×”×§×•×‘×¢" ×©×‘×• ×”×”×–×× ×•×ª ××•×œ ×¡×¤×§×™ ×”×©×˜×— ×”×•×¤×›×•×ª ×œ×¡×•×¤×™×•×ª ×•××—×™×™×‘×•×ª ×”×•× ×”-30 ×‘×™×•× ×™ 2026 (×‘××™×“×” ×•×”×××¨×’× ×™× ×™×‘×¦×¢×• ×ª×©×œ×•××™× ×‘×¤×•×¢×œ ×©××™× × × ×™×ª× ×™× ×œ×”×—×–×¨ ×œ×¡×¤×§×™× ×œ×¤× ×™ ×ª××¨×™×š ×–×”, ×”××•×¢×“ ×”×§×•×‘×¢ ×™×©×ª× ×” ×œ××•×¢×“ ×”×ª×©×œ×•× ×‘×¤×•×¢×œ, ×•×ª×™××¡×¨ ×¢×œ ×›×š ×”×•×“×¢×”).

EN: 4.1. Cancellation after the Determining Date: A Participant who cancels after the Determining Date without providing a replacement participant will NOT be entitled to a full refund. The refund formula is based on returning the field activities component ($290 USD) plus net actual savings, minus fixed, uncancelable costs and costs forced upon her roommate.
HE: 4.1. ×‘×™×˜×•×œ ×œ××—×¨ ×”××•×¢×“ ×”×§×•×‘×¢: ××©×ª×ª×¤×ª ×©×ª×‘×˜×œ ××ª ×”×©×ª×ª×¤×•×ª×” ×œ××—×¨ ×”××•×¢×“ ×”×§×•×‘×¢ ×œ×œ× ×”×¦×’×ª ××©×ª×ª×¤×ª ×—×œ×•×¤×™×ª, ×œ× ×ª×”×™×” ×–×›××™×ª ×œ×§×‘×œ ×”×—×–×¨ ×›×¡×¤×™ ××œ×. × ×•×¡×—×ª ×”×”×—×–×¨ ××‘×•×¡×¡×ª ×¢×œ ×”×©×‘×ª ×¨×›×™×‘ ×”×¤×¢×™×œ×•×™×•×ª ×‘×©×˜×— ($290) ×•×”×—×™×¡×›×•×Ÿ ×”×¨×™××œ×™ ××‘×ª×™ ×”××œ×•×Ÿ, ×‘×§×™×–×•×– ×—×œ×§×” ×‘×”×•×¦××•×ª ×”×§×‘×•×¢×•×ª ×•×‘×¢×œ×•×™×•×ª ×©× ×›×¤×• ×¢×œ ×©×•×ª×¤×ª×” ×œ×—×“×¨.

EN: 4.2. Exact Refund and Retention Fees: The exact refund amounts and retention fees applied are strictly as follows:
HE: 4.2. ×¡×›×•××™ ×”×”×—×–×¨ ×•×“××™ ×”×‘×™×˜×•×œ ×”××•×—×œ×˜×™× ×™×”×™×• ×›×“×œ×§××Ÿ:
Participant in a Double Room / ××©×ª×ª×¤×ª ×‘×—×“×¨ ×–×•×’×™ ×©×‘×™×˜×œ×”: Refund of $550 USD only (Organizers/Suppliers retain $2,160 USD). / ×ª×§×‘×œ ×”×—×–×¨ ×©×œ $550 ×‘×œ×‘×“ (×”×¤×¡×“/×“××™ ×‘×™×˜×•×œ ×œ×¡×¤×§×™×: $2,160).
Participant in a Single Room (Forced or Voluntary) / ××©×ª×ª×¤×ª ×‘×—×“×¨ ×™×—×™×“ (××‘×—×™×¨×” ××• ×××™×œ×•×¥) ×©×‘×™×˜×œ×”: Refund of $1,640 USD only (Organizers/Suppliers retain $1,520 USD for forced single from $3,160 total price; or retain $1,970 USD for voluntary single from $3,610 total price). / ×ª×§×‘×œ ×”×—×–×¨ ×©×œ $1,640 ×‘×œ×‘×“ (×“××™ ×‘×™×˜×•×œ ×œ×¡×¤×§×™×: $1,520 ×‘××§×¨×” ×©×œ ×—×“×¨ ×™×—×™×“ ×××™×œ×•×¥ ××ª×•×š ××—×™×¨ ×›×•×œ×œ ×©×œ $3,160; ××• $1,970 ×‘××§×¨×” ×©×œ ×—×“×¨ ×™×—×™×“ ××‘×—×™×¨×” ××ª×•×š ××—×™×¨ ×›×•×œ×œ ×©×œ $3,610).

EN: 4.3. Hotel Cancellation Contingency (Offset Mechanism): The Participant's eligibility for the single-room refund ($1,640 USD) is strictly conditional upon the hotels and ground suppliers in Sri Lanka confirming a 100% cancellation of the specific single room without penalty. Any cancellation fees or penalties charged by the hotels/suppliers for the cancelled room shall be deducted, dollar-for-dollar, from the Participant's refund.
HE: 4.3. ×”×ª× ×™×™×ª ×”×—×–×¨ ×‘×‘×™×˜×•×œ ××œ×•× ×•×ª ×‘×¤×•×¢×œ (×× ×’× ×•×Ÿ ×§×™×–×•×–): ×–×›××•×ª×” ×©×œ ×”××‘×˜×œ×ª ×‘×—×“×¨ ×™×—×™×“ ×œ×”×—×–×¨ ($1,640) ××•×ª× ×™×ª ×‘××•×¤×Ÿ ××•×—×œ×˜ ×‘×›×š ×©×”××œ×•× ×•×ª ×•×¡×¤×§×™ ×”×§×¨×§×¢ ×‘×—×•"×œ ×™××©×¨×• ×‘×™×˜×•×œ ×©×œ 100% ×¢×œ ×”×—×“×¨ ×œ×œ× ×—×™×•×‘ ××• ×§× ×¡. ×‘××™×“×” ×•×”××œ×•× ×•×ª/×¡×¤×§×™× ×™×’×‘×• ×“××™ ×‘×™×˜×•×œ ××• ×§× ×¡×•×ª ×‘×¤×•×¢×œ ×¢×œ ×”×—×“×¨ ×”×¡×¤×¦×™×¤×™ ×©×‘×•×˜×œ, ×¡×›×•× ×”×—×™×•×‘ ×™×§×•×–×– ×™×©×™×¨×•×ª, ×“×•×œ×¨-××•×œ-×“×•×œ×¨, ××›×¡×¤×™ ×”×”×—×–×¨ ×©×œ ×”××©×ª×ª×¤×ª ×”××‘×˜×œ×ª (×•×”×™× ×ª×§×‘×œ ××ª ×”×™×ª×¨×” ×‘×œ×‘×“).

EN: 4.4. Cancellation Notice Procedure: A cancellation notice must be delivered in writing (WhatsApp message to Naomi/Eyal PLUS an email) and takes effect only upon confirmation of receipt on working days (excluding Fridays, Saturdays, and Israeli/local holidays).
HE: 4.4. × ×•×”×œ ×”×•×“×¢×ª ×‘×™×˜×•×œ: ×”×•×“×¢×ª ×‘×™×˜×•×œ ×ª×™××¡×¨ ×‘×›×ª×‘ (×”×•×“×¢×ª ×•×•××˜×¡××¤ ×œ×××¨×’× ×™× ×•×‘×“×•×"×œ) ×•×ª×™×›× ×¡ ×œ×ª×•×§×£ ×‘××•×¢×“ ××¡×™×¨×ª×” ×‘×™××™ ×¢×‘×•×“×” ×‘×œ×‘×“ (×œ× ×›×•×œ×œ ×©×™×©×™, ×©×‘×ª ×•×¢×¨×‘×™ ×—×’ ×‘×™×©×¨××œ ××• ×‘×¡×¨×™ ×œ× ×§×”).

5. Replacement Participant / ×× ×’× ×•×Ÿ ××©×ª×ª×¤×ª ×—×œ×•×¤×™×ª (×”×—×–×¨ ××œ×)

EN: 5.1. Notwithstanding Section 4, a Participant who cancels after the Determining Date but independently presents a Replacement Participant to take her place, will be entitled to a 100% full refund.
HE: 5.1. ×¢×œ ××£ ×”×××•×¨ ×‘×¡×¢×™×£ 4, ××©×ª×ª×¤×ª ×©×ª×‘×˜×œ ××ª ×”×©×ª×ª×¤×•×ª×” ×œ××—×¨ ×”××•×¢×“ ×”×§×•×‘×¢ ××š ×ª×¦×™×’ ××™×•×–××” ×•×‘××•×¤×Ÿ ×¢×¦×××™ ××©×ª×ª×¤×ª ×—×œ×•×¤×™×ª ×©×ª×™×›× ×¡ ×‘× ×¢×œ×™×”, ×ª×”×™×” ×–×›××™×ª ×œ×”×—×–×¨ ××œ× ×©×œ 100%.

EN: 5.2. This is strictly conditional upon the new participant paying the full trip cost and maintaining the exact existing room arrangement. Only direct costs required by airlines or ground suppliers for official name changes (Name Change Fee) will be deducted from this refund.
HE: 5.2. ×–×›××•×ª ×–×• ××•×ª× ×™×ª ×‘××•×¤×Ÿ ××•×—×œ×˜ ×‘×›×š ×©×”××©×ª×ª×¤×ª ×”×—×“×©×” ×ª×©×œ× ××ª ××œ×•× ×¢×œ×•×ª ×”×˜×™×•×œ ×•×ª×©××•×¨ ×¢×œ ×”×¡×“×¨ ×”×—×“×¨×™× ×”×§×™×™× ×‘××“×•×™×§. ×¨×§ ×¢×œ×•×™×•×ª ×™×©×™×¨×•×ª ×©×™×™×“×¨×©×• ×¢×œ ×™×“×™ ×—×‘×¨×•×ª ×”×ª×¢×•×¤×” ××• ×¡×¤×§×™ ×”×§×¨×§×¢ ×‘×’×™×Ÿ ×©×™× ×•×™ ×”×©× (×§× ×¡ ×©×™× ×•×™ ×©×) ×™×§×•×–×–×• ××¡×›×•× ×”×”×—×–×¨.

6. Organizers' Right to Postpone or Cancel / ×–×›×•×ª ×”×××¨×’× ×™× ×œ×‘×™×˜×•×œ ××• ×“×—×™×™×ª ×”××¡×¢

EN: 6.1. Minimum Participants: The execution of the trip is conditional upon the registration of at least 10 participants by June 30, 2026. If this target is not met, the trip will be postponed or canceled, and participants will be entitled to a full refund of all funds paid.
HE: 6.1. ××™-×”×’×¢×” ×œ××™× ×™××•× ××©×ª×ª×¤×•×ª: ×™×¦×™××ª ×”××¡×¢ ××•×ª× ×™×ª ×‘×¨×™×©×•× ×©×œ ×œ×¤×—×•×ª 10 ××©×ª×ª×¤×•×ª ×¢×“ ×œ×™×•× 30 ×‘×™×•× ×™ 2026. ×× ×œ× ×™×•×©×’ ×™×¢×“ ×–×”, ×”××¡×¢ ×™×‘×•×˜×œ ××• ×™×™×“×—×”, ×•×”××©×ª×ª×¤×•×ª ×™×”×™×• ×–×›××™×•×ª ×œ×”×—×–×¨ ×›×¡×¤×™ ××œ× ×©×œ ×›×œ ×”×¡×›×•××™× ×©×©×™×œ××•.

EN: 6.2. Force Majeure: In the event of a cancellation of the entire trip due to catastrophic circumstances or force majeure beyond the control of the parties, the Organizers will act to recover maximum funds from the ground suppliers. From the organizing fee (fixed expenses in Israel), a sum of 800 ILS will be deducted for work and preparation already performed, and the balance will be refunded.
HE: 6.2. ×‘×™×˜×•×œ ×¢×§×‘ ×›×•×— ×¢×œ×™×•×Ÿ: ×‘××§×¨×” ×©×œ ×‘×™×˜×•×œ ×”××¡×¢ ×›×•×œ×• ×¢×§×‘ × ×¡×™×‘×•×ª ×§×˜×¡×˜×¨×•×¤×œ×™×•×ª ××• ×›×•×— ×¢×œ×™×•×Ÿ ×©××™× ×Ÿ ×‘×©×œ×™×˜×ª ×”×¦×“×“×™×, ×™×¤×¢×œ×• ×”×××¨×’× ×™× ×œ×”×©×‘×ª ××§×¡×™××•× ×”×›×¡×¤×™× ××¡×¤×§×™ ×”×©×˜×— ×‘×—×•"×œ. ××ª×•×š ×“××™ ×”××¨×’×•×Ÿ (×”×•×¦××•×ª ×§×‘×•×¢×•×ª ×‘×™×©×¨××œ), ×™×§×•×–×– ×¡×š ×©×œ 800 ×©"×— ×‘×’×™×Ÿ ×©×¢×•×ª ×”×™×¢×¨×›×•×ª ×•×¢×‘×•×“×” ×©×›×‘×¨ ×‘×•×¦×¢×•, ×•×”×™×ª×¨×” ×ª×•×—×–×¨ ×œ××©×ª×ª×¤×ª.

EN: 6.3. Cancellation Due to Economic Unviability: Because this journey is priced and planned for a small, organic group, a lawful cancellation by one or more participants may severely harm the economic or logistical viability of the entire project. If a participant cancels lawfully, and the Organizers conclude that this cancellation causes a severe deficit in meeting the trip's fixed expenses rendering the trip unviable, the Organizers reserve the right to cancel or postpone the trip. In such a scenario, all remaining participants will be notified immediately and will receive a 100% full refund of all funds paid to the Organizers.
HE: 6.3. ×‘×™×˜×•×œ ×¢×§×‘ ×—×•×¡×¨ ×›×“××™×•×ª ×›×œ×›×œ×™×ª: ×××—×¨ ×•××¡×¢ ×–×” ××ª×•×›× ×Ÿ ×•××ª×•××—×¨ ×¢×‘×•×¨ ×§×‘×•×¦×” ×§×˜× ×” ×•××•×¨×’× ×™×ª, ×‘×™×˜×•×œ ×›×“×™×Ÿ ×©×œ ××©×ª×ª×¤×ª ××—×ª ××• ×™×•×ª×¨ ×¢×œ×•×œ ×œ×¤×’×•×¢ ×§×©×•×ª ×‘×”×™×ª×›× ×•×ª ×”×›×œ×›×œ×™×ª ××• ×”×œ×•×’×™×¡×˜×™×ª ×©×œ ×”×¤×¨×•×™×§×˜ ×›×•×œ×•. ×‘××™×“×” ×•××©×ª×ª×¤×ª ××‘×˜×œ×ª ×›×“×™×Ÿ, ×•×”×××¨×’× ×™× ××’×™×¢×™× ×œ××¡×§× ×” ×›×™ ×‘×™×˜×•×œ ×–×” ××™×™×¦×¨ ×’×™×¨×¢×•×Ÿ ×—××•×¨ ×©××™× ×• ×××¤×©×¨ ××ª ×›×™×¡×•×™ ×”×”×•×¦××•×ª ×”×§×‘×•×¢×•×ª ×©×œ ×”×˜×™×•×œ, ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×œ×“×—×•×ª ××• ×œ×‘×˜×œ ××ª ×”×˜×™×•×œ ×›×•×œ×•. ×‘××§×¨×” ×›×–×”, ×©××¨ ×”××©×ª×ª×¤×•×ª ×‘×§×‘×•×¦×” ×™×¢×•×“×›× ×• ××™×™×“×™×ª ×•×™×§×‘×œ×• ×”×—×–×¨ ×›×¡×¤×™ ××œ× ×©×œ 100% ××”×›×¡×¤×™× ×©×©×•×œ××• ×¢×œ ×™×“×Ÿ ×œ×××¨×’× ×™×.

7. Health Declaration and Mandatory Insurance / ×”×¦×”×¨×ª ×‘×¨×™××•×ª, × ×˜×™×œ×ª ×¡×™×›×•×Ÿ ×•×‘×™×˜×•×— ×—×•×‘×”

EN: 7.1. Health & Fitness: The nature of the trip includes field activities, walking tours, and moderate physical effort. By signing this contract, the Participant declares that her health condition is sound and fit for such a journey. The Participant is strictly required to sign and return the attached Medical Waiver of Claims (Appendix A).
HE: 7.1. ×›×©×™×¨×•×ª ×•×›×•×©×¨ ×’×•×¤× ×™: ××•×¤×™ ×”××¡×¢ ×›×•×œ×œ ×¤×¢×™×œ×•×™×•×ª ×©×˜×—, ×¡×™×•×¨×™× ×¨×’×œ×™×™× ×•××××¥ ×¤×™×–×™ ××ª×•×Ÿ. ×‘×—×ª×™××ª×” ×¢×œ ×”×¡×›× ×–×”, ×”××©×ª×ª×¤×ª ××¦×”×™×¨×” ×›×™ ××¦×‘ ×‘×¨×™××•×ª×” ×ª×§×™×Ÿ ×•×”×™× ×›×©×™×¨×” ×¤×™×–×™×ª ×•× ×¤×©×™×ª ×œ××¡×¢ ××¢×™×Ÿ ×–×”. ×”××©×ª×ª×¤×ª ××—×•×™×‘×ª ×œ×—×ª×•× ×•×œ×”×©×™×‘ ××ª ×˜×•×¤×¡ ×”×¦×”×¨×ª ×”×‘×¨×™××•×ª ×•×”×•×•×™×ª×•×¨ ×”××¦×•×¨×£ ×›× ×¡×¤×— ×'.

EN: 7.2. Mandatory Insurance: It is an absolute and exclusive obligation of the Participant to purchase comprehensive travel insurance abroad, including extended medical coverage, search and rescue, and coverage for extreme/field activities. It is highly recommended to purchase a "Cancel for Any Reason" policy (such as Trip Guaranty) as close as possible to the registration date to ensure maximum protection of the Participant's funds.
HE: 7.2. ×‘×™×˜×•×— ×—×•×‘×”: ×—×œ×” ×—×•×‘×” ××•×—×œ×˜×ª ×•×‘×œ×¢×“×™×ª ×¢×œ ×”××©×ª×ª×¤×ª ×œ×¨×›×•×© ×¤×•×œ×™×¡×ª ×‘×™×˜×•×— × ×¡×™×¢×•×ª ××§×™×¤×” ×œ×—×•"×œ ×”×›×•×œ×œ×ª ×›×™×¡×•×™ ×¨×¤×•××™ ××•×¨×—×‘, ×—×™×œ×•×¥ ×•×”×¦×œ×”, ×•×›×™×¡×•×™ ×œ×¤×¢×™×œ×•×™×•×ª ×©×˜×—. ××•××œ×¥ ×‘×—×•× ×œ×¨×›×•×© ×¤×•×œ×™×¡×ª "×‘×™×˜×•×œ ××›×œ ×¡×™×‘×”" (×›×’×•×Ÿ ×˜×¨×™×¤ ×’×¨×× ×˜×™) ×‘×¡××•×š ×œ××•×¢×“ ×”×¨×™×©×•× ×¢×œ ×× ×ª ×œ×”×‘×˜×™×— ×”×’× ×” ××§×¡×™××œ×™×ª ×¢×œ ×›×¡×¤×™ ×”××©×ª×ª×¤×ª.

8. Disclosure, Exclusions, and Privacy / ×’×™×œ×•×™ × ××•×ª, ×”×—×¨×’×•×ª ×•×”×’× ×ª ×”×¤×¨×˜×™×•×ª

EN: 8.1. Full Disclosure: In accordance with the Tourism Services Regulations (Information Disclosure), 2003, the detailed Itinerary, including planned hotels, ratings, addresses, phone numbers, transportation, and meals is attached to this agreement as Appendix B. The Organizers reserve the right to replace suppliers or hotels with accommodations of an identical standard due to field constraints.
HE: 8.1. ×’×™×œ×•×™ × ××•×ª: ×‘×”×ª×× ×œ×—×•×§ ×©×™×¨×•×ª×™ ×ª×™×™×¨×•×ª ×•×”×ª×§× ×•×ª ××›×•×—×• (×’×™×œ×•×™ × ××•×ª), ×ª×•×›× ×™×ª ×”××¡×¢ ×”××¤×•×¨×˜×ª, ×”×›×•×œ×œ×ª ××ª ×©××•×ª ×”××œ×•× ×•×ª ×”××ª×•×›× × ×™×, ×“×™×¨×•×’×, ×›×ª×•×‘×•×ª×™×”×, ××¡×¤×¨×™ ×”×˜×œ×¤×•×Ÿ ×©×œ×”×, ×××¦×¢×™ ×”×ª×—×‘×•×¨×” ×•×”××¨×•×—×•×ª ××¦×•×¨×¤×ª ×œ×”×¡×›× ×–×” ×›× ×¡×¤×— ×‘'. ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×œ×”×—×œ×™×£ ×¡×¤×§×™× ××• ××œ×•× ×•×ª ×‘××œ×•× ×•×ª ×‘×¨××” ×–×”×” ×¢×§×‘ ××™×œ×•×¦×™ ×©×˜×—.

EN: 8.2. Exclusions: The trip price does NOT include international flights, Sri Lanka entry visa (ETA), personal travel insurance, and any personal expenses not explicitly listed in the itinerary.
HE: 8.2. ×”×—×¨×’×•×ª: ××—×™×¨ ×”××¡×¢ ××™× ×• ×›×•×œ×œ ×˜×™×¡×•×ª ×‘×™× ×œ××•××™×•×ª, ××©×¨×ª ×›× ×™×¡×” ×œ×¡×¨×™ ×œ× ×§×” (ETA), ×‘×™×˜×•×— × ×¡×™×¢×•×ª ××™×©×™, ×•×›×œ ×”×•×¦××” ××™×©×™×ª ×©××™× ×” ××¤×•×¨×˜×ª ××¤×•×¨×©×•×ª ×‘×ª×•×›× ×™×ª ×”××¡×¢.

EN: 8.3. Privacy Protection: In accordance with the Privacy Protection Law, 1981, personal information provided by the Participant, including medical data (defined as "information with special sensitivity"), will be stored securely. It will be used solely for the purpose of producing the journey, its operation, and maintaining the safety of the participants, and will not be transferred to any third party not relevant to the production of the trip without explicit consent.
HE: 8.3. ×”×’× ×ª ×”×¤×¨×˜×™×•×ª: ×‘×”×ª×× ×œ×—×•×§ ×”×’× ×ª ×”×¤×¨×˜×™×•×ª, ×”×ª×©×"×-1981, ××™×“×¢ ××™×©×™ ×©×™×™××¡×¨ ×¢×œ ×™×“×™ ×”××©×ª×ª×¤×ª, ×œ×¨×‘×•×ª ××™×“×¢ ×¨×¤×•××™ (×”××•×’×“×¨ ×‘×—×•×§ ×›"××™×“×¢ ×‘×¢×œ ×¨×’×™×©×•×ª ××™×•×—×“×ª"), ×™×™×©××¨ ×‘××•×¤×Ÿ ×××•×‘×˜×—. ××™×“×¢ ×–×” ×™×©××© ××š ×•×¨×§ ×œ×¦×•×¨×š ×”×¤×§×ª ×”××¡×¢, ×ª×¤×¢×•×œ×•, ×•×©××™×¨×” ×¢×œ ×©×œ×•× ×”××©×ª×ª×¤×•×ª ×•×‘×¨×™××•×ª×Ÿ, ×•×œ× ×™×•×¢×‘×¨ ×œ×©×•× ×¦×“ ×©×œ×™×©×™ ×©××™× ×• ×¨×œ×•×•× ×˜×™ ×œ×”×¤×§×ª ×”××¡×¢ ×œ×œ× ×”×¡×›××” ××¤×•×¨×©×ª.

9. Governing Law and Jurisdiction / ×”×“×™×Ÿ ×”×—×œ ×•×¡××›×•×ª ×©×™×¤×•×˜

EN: This Agreement shall be governed by and construed in accordance with the laws of the State of Israel. The competent courts in Be'er Sheva and the Southern District shall have exclusive jurisdiction to hear and determine any dispute arising from or related to this Agreement.
HE: ×”×¡×›× ×–×” ×™×”×™×” ×›×¤×•×£ ×œ×—×•×§×™ ××“×™× ×ª ×™×©×¨××œ ×•×™×¤×•×¨×© ×œ×¤×™×”×. ×œ×‘×ª×™ ×”××©×¤×˜ ×”××•×¡××›×™× ×‘×¢×™×¨ ×‘××¨ ×©×‘×¢ ×•×‘××—×•×– ×”×“×¨×•× ×ª×”×™×” ×¡××›×•×ª ×©×™×¤×•×˜ ×™×™×—×•×“×™×ª ×•×‘×œ×¢×“×™×ª ×œ×“×•×Ÿ ×‘×›×œ ×¡×›×¡×•×š ××• ××—×œ×•×§×ª ×”× ×•×‘×¢×™× ××”×¡×›× ×–×” ××• ×”×§×©×•×¨×™× ××œ×™×•.

Digital signature or written confirmation upon transferring the advance payment constitutes full, unqualified, and final agreement to all the terms detailed in this agreement and its appendices.
×—×ª×™××” ×“×™×’×™×˜×œ×™×ª ××• ××™×©×•×¨ ×‘×›×ª×‘ ×‘×¢×ª ×”×¢×‘×¨×ª ×“××™ ×”××§×“××”, ××”×•×•×™× ×”×¡×›××” ××œ××”, ×‘×œ×ª×™ ××¡×•×™×’×ª ×•×¡×•×¤×™×ª ×œ×›×œ ×”×ª× ××™× ×”××¤×•×¨×˜×™× ×‘×”×¡×›× ×–×” ×•×‘× ×¡×¤×—×™×•.

Participant's Full Name / ×©× ××œ× ×©×œ ×”××©×ª×ª×¤×ª: _________________
ID / Passport Number / ×ª.×– ××• ××¡×¤×¨ ×“×¨×›×•×Ÿ: _________________
Chosen Cancellation Track (A or B) / ××¡×œ×•×œ ×‘×™×˜×•×œ × ×‘×—×¨ (×' ××• ×‘'): ______
Signature / ×—×ª×™××”: _________________
Date / ×ª××¨×™×š: _________

(Note to Organizers: Ensure that Appendix A (Medical Declaration) and Appendix B (Itinerary with Hotel Contact Details) are physically attached to this PDF at the time of signing to ensure full legal binding of all elements).
(×”×¢×¨×” ×œ×××¨×’× ×™×: ×™×© ×œ×•×•×“× ×›×™ × ×¡×¤×— ×' (×”×¦×”×¨×ª ×‘×¨×™××•×ª) ×•× ×¡×¤×— ×‘' (××¡×œ×•×œ ×”×˜×™×•×œ ×”××¤×•×¨×˜ ×¢× ×¤×¨×˜×™ ×§×©×¨ ×©×œ ×”××œ×•× ×•×ª) ××—×•×‘×¨×™× ×¤×™×–×™×ª ×œ-PDF ×‘×¢×ª ×”×”×—×ª××” ×¢×œ ×× ×ª ×œ×”×‘×˜×™×— ×ª×•×§×£ ××©×¤×˜×™ ××œ× ×©×œ ×›×œ×œ ×”×¨×›×™×‘×™×).


```

## ×§×•×‘×¥: ./google_docs_export/MedicalWaiver.txt
```
--- ×¢×‘×¨×™×ª / HEBREW ---

×›×ª×‘ ×•×™×ª×•×¨, ×©×—×¨×•×¨ ×××—×¨×™×•×ª ×•×”×¦×”×¨×ª ×¡×™×›×•× ×™× ×œ××©×ª×ª×¤×ª ×‘××¡×¢ ×œ×¡×¨×™ ×œ× ×§×”

×× ×™, ×”××©×ª×ª×¤×ª ×”×—×ª×•××” ××˜×”, ××¦×˜×¨×¤×ª ××¨×¦×•× ×™ ×”×—×•×¤×©×™ ×œ××¡×¢ ×§×‘×•×¦×ª×™ ×¤×¨×˜×™ ×œ×¡×¨×™ ×œ× ×§×” ×”×××•×¨×’×Ÿ ×‘××•×¤×Ÿ ×œ× ×¨×©××™ ×¢×œ ×™×“×™ × ×¢××™ ×’×¨×•×¡××Ÿ ×•/××• ×××¨×’× ×™ ×”××¡×¢, ×¨×›×–×™×, ×××¨×—×™×, ××ª× ×“×‘×™× ××• ×× ×©×™× ×§×©×•×¨×™× ××—×¨×™× (×œ×”×œ×Ÿ ×‘×™×—×“: "×”×××¨×’× ×™×").

×× ×™ ××‘×™× ×” ×•×××©×¨×ª ×›×™ × ×¡×™×¢×•×ª, ×œ×¨×‘×•×ª × ×¡×™×¢×•×ª ×‘×™× ×œ××•××™×•×ª, ×›×¨×•×›×•×ª ×‘×¡×™×›×•× ×™× ××™× ×”×¨× ×˜×™×™×. ×¡×™×›×•× ×™× ××œ×• ×¢×©×•×™×™× ×œ×›×œ×•×œ, ×‘×™×Ÿ ×”×™×ª×¨, ××—×œ×”, ×¤×¦×™×¢×”, × ×–×§ ×’×•×¤× ×™, ×ª××•× ×•×ª, ×¢×™×›×•×‘×™× ×‘×ª×—×‘×•×¨×” ××• ×ª××•× ×•×ª ×“×¨×›×™×, ×ª× ××™ ××–×’ ××•×•×™×¨, ××™ ×©×§×˜ ×¤×•×œ×™×˜×™ ××• ××–×¨×—×™, ×’× ×™×‘×”, ××•×‘×“×Ÿ ×¨×›×•×©, ××§×¨×™ ×—×™×¨×•× ×¨×¤×•××™×™×, ××—×œ×•×ª ×”×§×©×•×¨×•×ª ×œ××–×•×Ÿ ××• ××™×, ×¤×¢×™×œ×•×™×•×ª ×”×××•×¨×’× ×•×ª ×‘××”×œ×š ×”×˜×™×•×œ, ××¢×©×™× ××• ××—×“×œ×™× ×©×œ ×¡×¤×§×™ ×¦×“ ×©×œ×™×©×™, ×•×‘××§×¨×™× × ×“×™×¨×™× ×‘×™×•×ª×¨, ××•×‘×“×Ÿ ×—×™×™×.

×× ×™ ×××©×¨×ª ×›×™ ×”×©×ª×ª×¤×•×ª×™ ×‘××¡×¢ ×”×™× ××¨×¦×•× ×™ ×”×—×•×¤×©×™ ×•×¢×œ ××—×¨×™×•×ª×™ ×”×‘×œ×¢×“×™×ª. ×× ×™ ××—×¨××™×ª ×œ×§×‘×•×¢ ×”×× ×× ×™ ×›×©×™×¨×” ×¤×™×–×™×ª, ×¨×¤×•××™×ª ×•××™×©×™×ª ×œ×”×©×ª×ª×£ ×‘××¡×¢ ×•×‘×›×œ ×”×¤×¢×™×œ×•×™×•×ª ×‘××”×œ×›×•. ×× ×™ ××‘×™× ×” ×©×”×××¨×’× ×™× ××™× × ××¤×¢×™×œ×™ ×ª×™×™×¨×•×ª ××§×¦×•×¢×™×™×, ×¡×•×›× ×™ × ×¡×™×¢×•×ª, ×¡×¤×§×™× ×¨×¤×•××™×™×, ×™×•×¢×¦×™ ×‘×™×˜×•×— ××• ×™×•×¢×¦×™ ××‘×˜×—×”, ×•×©×›×œ ×”××œ×•× ×•×ª, ×¡×¤×§×™ ×”×ª×—×‘×•×¨×”, ×”××“×¨×™×›×™×, ×”××¡×¢×“×•×ª, ××¤×¢×™×œ×™ ×”×¤×¢×™×œ×•×™×•×ª ××• ×¦×“×“×™× ×©×œ×™×©×™×™× ××—×¨×™× ×”× ×¡×¤×§×™× ×¢×¦×××™×™× ×•××™× × ×¡×•×›× ×™× ××• ×¢×•×‘×“×™× ×©×œ ×”×××¨×’× ×™×.

×‘××™×“×” ×”××§×¡×™××œ×™×ª ×”××•×ª×¨×ª ×¢×œ ×¤×™ ×—×•×§, ×× ×™ ××©×—×¨×¨×ª, ××•×•×ª×¨×ª ×•×¤×•×˜×¨×ª ×‘×–××ª ××ª × ×¢××™ ×’×¨×•×¡××Ÿ ×•××ª ×›×œ ×”×××¨×’× ×™× ×”××—×¨×™× ××›×œ ×•×›×œ ×ª×‘×™×¢×•×ª, ×”×ª×—×™×™×‘×•×™×•×ª, ×“×¨×™×©×•×ª, ×¤×¢×•×œ×•×ª, × ×–×§×™×, ×¢×œ×•×™×•×ª, ×”×¤×¡×“×™× ××• ×”×•×¦××•×ª ××›×œ ×¡×•×’ ×©×”×•×, ×‘×™×Ÿ ×× ×™×“×•×¢×™× ×•×‘×™×Ÿ ×× ××™× × ×™×“×•×¢×™×, ×”× ×•×‘×¢×™× ××• ×”×§×©×•×¨×™× ×œ×”×©×ª×ª×¤×•×ª×™ ×‘××¡×¢, ×œ×¨×‘×•×ª ×›×œ ×¤×¦×™×¢×”, × ×–×§ ×’×•×¤× ×™, ××—×œ×”, ×”×¤×¡×“ ×›×œ×›×œ×™, × ×–×§ ×œ×¨×›×•×©, ×¢×™×›×•×‘, ×—×•×¡×¨ × ×•×—×•×ª, ××¦×•×§×” ×¨×’×©×™×ª ××• ××•×‘×“×Ÿ ×—×™×™×, ×œ××¢×˜ ×‘××™×“×” ×©×—×‘×•×ª ×›×–×• ××™× ×” × ×™×ª× ×ª ×œ×•×•×™×ª×•×¨ ×¢×œ ×¤×™ ×“×™×Ÿ.

×× ×™ ××¡×›×™××” ×¢×•×“ ×©×œ× ××’×™×© ×›×œ ×ª×‘×™×¢×”, ××©×¤×˜ ××• ×“×¨×™×©×” × ×’×“ × ×¢××™ ×’×¨×•×¡××Ÿ ××• ×›×œ ×××¨×’×Ÿ ××—×¨ ×”× ×•×‘×¢×™× ××• ×”×§×©×•×¨×™× ×œ××¡×¢, ×•×× ×™ ××¡×›×™××” ×œ×©×¤×•×ª ×•×œ×¤×˜×•×¨ ××•×ª× ××›×œ ××—×¨×™×•×ª ×‘×’×™×Ÿ ×›×œ ×ª×‘×™×¢×”, ×”×¤×¡×“, × ×–×§, ×¢×œ×•×ª ××• ×”×•×¦××”, ×œ×¨×‘×•×ª ×©×›×¨ ×˜×¨×—×ª ×¢×•×¨×›×™ ×“×™×Ÿ ×¡×‘×™×¨, ×”× ×•×‘×¢×™× ×××¢×©×™×™, ××—×“×œ×™×™, ×”×—×œ×˜×•×ª×™×™, ×”×ª× ×”×’×•×ª×™, ××¦×‘×™ ×”×¨×¤×•××™ ××• ×”×©×ª×ª×¤×•×ª×™ ×‘×¤×¢×™×œ×•×™×•×ª ×”××¡×¢.

×× ×™ ××‘×™× ×” ×©×× ×™ ××—×¨××™×ª ×‘×œ×¢×“×™×ª ×œ×”×©×’×ª ×•×œ×©××™×¨×ª ×‘×™×˜×•×— × ×¡×™×¢×•×ª ××ª××™×, ×‘×™×˜×•×— ×¨×¤×•××™, ×‘×™×˜×•×— ×‘×™×˜×•×œ × ×¡×™×¢×” ×•×›×œ ×‘×™×˜×•×— ××—×¨ ×©××–×“×§×§ ×œ×•. ×× ×™ ×’× ××—×¨××™×ª ×œ×“×¨×›×•×Ÿ ×©×œ×™, ×œ×•×•×™×–×•×ª, ×œ×—×™×¡×•× ×™×, ×œ×ª×¨×•×¤×•×ª, ×œ×—×¤×¦×™×™ ×”××™×©×™×™×, ×œ×‘×˜×™×—×•×ª×™ ×•×œ×¦×™×•×ª ×œ×›×œ ×”×—×•×§×™×, ×”×›×œ×œ×™× ×•×”×”× ×—×™×•×ª ×”×—×œ×™× ×‘××”×œ×š ×”×˜×™×•×œ.

×× ×™ ×××©×¨×ª ×©×§×¨××ª×™ ×›×ª×‘ ×•×™×ª×•×¨ ×–×” ×‘×¢×™×•×Ÿ, ×× ×™ ××‘×™× ×” ××ª ××©××¢×•×ª×•, ×•×—×•×ª××ª ×¢×œ×™×• ××¨×¦×•× ×™ ×”×—×•×¤×©×™. ×× ×™ ××‘×™× ×” ×©×¢×œ ×™×“×™ ×—×ª×™××” ×¢×œ ××¡××š ×–×”, ×× ×™ ××•×•×ª×¨×ª ×¢×œ ×–×›×•×™×•×ª ××©×¤×˜×™×•×ª ××¡×•×™××•×ª ×‘××™×“×” ×”××§×¡×™××œ×™×ª ×”××•×ª×¨×ª ×¢×œ ×¤×™ ×—×•×§.

--- ×× ×’×œ×™×ª / ENGLISH ---

Sri Lanka Trip Participant Waiver, Release and Assumption of Risk

I, the undersigned participant, am voluntarily joining a private group trip to Sri Lanka organized informally by Naomi Grossman and/or other trip organizers, coordinators, hosts, volunteers or related persons (collectively, the "Organizers").

I understand and acknowledge that travel, including international travel, involves inherent risks. These risks may include, among other things, illness, injury, bodily harm, accidents, transportation delays or accidents, weather conditions, political or civil unrest, theft, loss of property, medical emergencies, food or water-related illness, activities arranged during the trip, acts or omissions of third-party providers, and, in extremely rare cases, loss of life.

I confirm that I am participating in the trip voluntarily and at my own risk. I am responsible for determining whether I am physically, medically and personally able to participate in the trip and in any activities during the trip. I understand that the Organizers are not professional tour operators, travel agents, medical providers, security consultants or insurers, and that any hotels, transportation providers, guides, restaurants, activity providers or other third parties are independent providers and are not agents or employees of the Organizers.

To the fullest extent permitted by applicable law, I hereby release, waive and discharge Naomi Grossman and all other Organizers from any and all claims, liabilities, demands, actions, damages, costs, losses or expenses of any kind, whether known or unknown, arising out of or relating to my participation in the trip, including any injury, bodily harm, illness, economic loss, property damage, delay, inconvenience, emotional distress or loss of life, except to the extent such liability cannot legally be waived.

I further agree that I will not bring any claim, lawsuit or demand against Naomi Grossman or any other Organizer arising out of or relating to the trip, and I agree to indemnify and hold them harmless from any claims, losses, damages, costs or expenses, including reasonable legal fees, arising from my own actions, omissions, decisions, conduct, medical condition, or participation in trip activities.

I understand that I am solely responsible for obtaining and maintaining appropriate travel insurance, medical insurance, trip cancellation insurance and any other insurance I may require. I am also responsible for my passport, visas, vaccinations, medications, personal belongings, safety, and compliance with all applicable laws, rules and instructions during the trip.

I confirm that I have read this waiver carefully, understand its meaning, and sign it voluntarily. I understand that by signing this document, I am giving up certain legal rights to the fullest extent permitted by law.

```

## ×§×•×‘×¥: ./google_docs_export/AccommodationRates.txt
```
--- ×¢×‘×¨×™×ª / HEBREW ---

× ×¡×¤×— ×' â€“ ×ª×¢×¨×™×¤×™ ×œ×™× ×” ×•××œ×•× ×•×ª

× ×¡×¤×— ×–×” ("×œ×•×— ×ª×¢×¨×™×¤×™ ×œ×™× ×”") ××”×•×•×” ×—×œ×§ ×‘×œ×ª×™ × ×¤×¨×“ ××”×¡×›× ×”×¨×™×©×•× ×œ×˜×™×•×œ. ×›×œ ×”×ª×¢×¨×™×¤×™× ×•×”×¡×›×•××™× ×”××¤×•×¨×˜×™× ×›××Ÿ × ×§×•×‘×™× ×‘×“×•×œ×¨ ××¨×”"×‘ (USD) ×•××™×™×¦×’×™× ××ª ×ª×¢×¨×™×¤×™ ×”×œ×™× ×” × ×˜×• ×¢×œ×™×”× ×¡×•×›× ××•×œ ×¡×¤×§×™ ×”×œ×™× ×” ×¢×‘×•×¨ ×˜×™×•×œ×™ ×§×™×¥ ×•×—×•×¨×£ 2027.

1. ×”×’×“×¨×•×ª ×•×¤×¨×©× ×•×ª
- ×ª×¢×¨×™×£ ×–×•×’×™ (DBL Rate): ×ª×¢×¨×™×£ ×œ×™×œ×™ ×œ×—×“×¨ ×¡×˜× ×“×¨×˜×™ ×‘×ª×¤×•×¡×” ×–×•×’×™×ª, ×›×•×œ×œ ××¡×™× ××§×•××™×™× ×¨×œ×•×•× ×˜×™×™× ×•×“××™ ×©×™×¨×•×ª, ×”××©×•×ª×£ ×œ×©×ª×™ (2) ××©×ª×ª×¤×•×ª.
- ×ª×¢×¨×™×£ ×™×—×™×“ (SGL Rate): ×ª×¢×¨×™×£ ×œ×™×œ×™ ×œ×—×“×¨ ×‘×ª×¤×•×¡×” ×©×œ ×™×—×™×“, ×›×•×œ×œ ××¡×™× ××§×•××™×™× ×¨×œ×•×•× ×˜×™×™× ×•×“××™ ×©×™×¨×•×ª, ×××•×›×œ×¡ ×¢×œ ×™×“×™ ××©×ª×ª×¤×ª ××—×ª (1).
- ×”×§×¦××” ×‘×¡×™×¡×™×ª ×œ××©×ª×ª×¤×ª: ××™×™×¦×’×ª ×—××™×©×™× ××—×•×– (50%) ××”×ª×¢×¨×™×£ ×”×–×•×’×™ (DBL Rate), ×©××—×•×©×‘ ××¨××© ×•××•×˜××¢ ×‘×ª×•×š ××—×™×¨ ×”×˜×™×•×œ ×”×‘×¡×™×¡×™ ($2,710).

2. ×¢×œ×•×™×•×ª ×œ×™× ×” ×•×¤×¢×¨×™ ×ª×¢×¨×™×¤×™×
×¢×œ×•×ª ×”×œ×™× ×” ×”×›×•×œ×œ×ª ×‘××¡×¢ ×”×™× ×‘××–×•×¨ ×”-$1,400.
×©×™××• ×œ×‘ ×›×™ ×”×¢×œ×•×™×•×ª ××©×ª× ×•×ª ×•×§×™×™× ×¤×¢×¨ ×‘×™×Ÿ ×œ×™× ×” ×‘×—×“×¨ ×™×—×™×“ ×œ×œ×™× ×” ×‘×—×“×¨ ×–×•×’×™.
× ×™×ª×Ÿ ×œ×¤× ×•×ª ××œ×™× ×• ×‘×¤×¨×˜×™ ×¢×œ ×× ×ª ×œ×§×‘×œ ××ª ×”×¤×™×¨×•×˜ ×”××œ× ×©×œ ×”×ª×¢×¨×™×¤×™× ×”×œ×™×œ×™×™× ×¢×‘×•×¨ ×›×œ ××œ×•×Ÿ ×‘× ×¤×¨×“.

--- ×× ×’×œ×™×ª / ENGLISH ---

APPENDIX A â€“ SCHEDULE OF ACCOMMODATION RATES

This Appendix A (the "Accommodation Schedule") forms an integral and inseparable part of the Tour Registration Agreement. All rates and figures listed herein are denominated in United States Dollars (USD) and represent the net contracted nightly rates with the respective accommodation providers for the Summer and Winter 2027 Tours.

1. Definitions and Interpretation
- DBL Rate: shall mean the nightly room rate for a standard double-occupancy room, inclusive of applicable local taxes and service charges, shared by two (2) participants.
- SGL Rate: shall mean the nightly room rate for a single-occupancy room, inclusive of applicable local taxes and service charges, occupied by one (1) participant or staff member.
- Per Participant Base Allocation: shall represent fifty percent (50%) of the DBL Rate, which is pre-calculated and embedded within the core Tour Price ($2,710).

2. Accommodation Costs & Rate Differences
The total accommodation cost for the trip is approximately $1,400.
Please note that costs vary and there is a difference between staying in a single room versus a double room.
You can contact us privately to receive the full breakdown of nightly rates for each individual hotel.

```

## ×§×•×‘×¥: ./google_docs_export/ItineraryAppendix_Winter.txt
```
--- ×¢×‘×¨×™×ª / HEBREW ---

× ×¡×¤×— ××¡×œ×•×œ â€“ ××¡×¢ × ×©×™× ×œ×¡×¨×™ ×œ× ×§×” (×—×•×¨×£ 2027)

×™×•× 1: ×”×’×¢×” ×•× ×¡×™×¢×” ×œ× ×’×•××‘×•/×§×•×œ×•××‘×•
×”×¢×¨×‘: × ×—×™×ª×” ×‘×©×“×” ×”×ª×¢×•×¤×” ×©×œ ×§×•×œ×•××‘×• (CMB), ×¡×™×“×•×¨×™ ×”×’×¢×” ×•×”×¢×‘×¨×” ×œ××œ×•×Ÿ.
×¤×™× ×•×§: ×§×‘×œ×ª ×—×“×¨×™×, ××¡××–' ××¤× ×§ ×‘××œ×•×Ÿ ×œ×”×ª×—×œ×ª ×”××¡×¢ ×‘××•×•×™×¨×” ×¨×’×•×¢×” ×•××¨×•×—×ª ×¢×¨×‘ ×—×’×™×’×™×ª.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×§×•×œ×•××‘×•/× ×’×•××‘×• (××• ×“×•××”).

×™×•× 2: ××§×¡×˜×¨×™× ×‘×§×™×˜×•×œ×’×œ×” ×•× ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×”
×‘×•×§×¨: ×˜×™×•×œ ×–×¨×™×—×” ××•×§×“×, ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.
×××¦×¢ ×”×™×•×: × ×¡×™×¢×” ×œ×§×™×˜×•×œ×’×œ×” ×œ×¨×¤×˜×™× ×’ ××¨×’×© ×‘××™× ×œ×‘× ×™× ×•×”×œ×™×›×ª ×§× ×™×•× ×™× ×’ ×‘×™×¢×¨ ×”×’×©×.
×¢×¨×‘: × ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×”, ×¦'×§-××™×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×” (××• ×“×•××”).

×™×•× 3: ××˜×¢×™ ×ª×” ×•×”×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×œ××œ×”
×‘×•×§×¨: ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.
×××¦×¢ ×”×™×•×: ×¡×™×•×¨ ××•×“×¨×š ×‘××˜×¢×™ ×”×ª×” ×©×œ × ×•×•××¨×” ××œ×™×” ×•×‘××¤×œ×™×.
××—×¨ ×”×¦×”×¨×™×™×: × ×¡×™×¢×” ×‘×¨×›×‘×ª ×”×¦×™×•×¨×™×ª ×”××¤×•×¨×¡××ª ×× ×•×•××¨×” ××œ×™×” ×œ××œ×”.
×¢×¨×‘: ×”×’×¢×” ×œ××œ×”, ×¦'×§-××™×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ ××• ×‘×‘×™×ª ×—×‘"×“.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×” (××• ×“×•××”).

×™×•× 4: ××¤×œ×™× ×•××“×¨× ×œ×™×Ÿ ×‘××œ×”
×‘×•×§×¨: ×˜×™×•×œ ×–×¨×™×—×”, ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨.
×××¦×¢ ×”×™×•×: ×˜×™×•×œ ×©×˜×— ××œ ××¤×œ×™ ×“×™××œ×•×× ×”××¨×”×™×‘×™×, ×’×œ×™×©×ª ××•××’×” (Flying Ravana) ×•×–××Ÿ ×§× ×™×•×ª ×‘×¢×™×™×¨×” ××œ×”.
×¢×¨×‘: × ×¡×™×¢×” ×œ××œ×•×Ÿ ×•××¨×•×—×ª ×¢×¨×‘ ×§×‘×•×¦×ª×™×ª.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××œ×” (××• ×“×•××”).

×™×•× 5: ×¡×¤××¨×™ ×¤×™×œ×™× ×•×™×•×’×” ×‘×©×§×™×¢×” ×‘×“×¨×•×
×‘×•×§×¨: ×™×•×’×”, ××¨×•×—×ª ×‘×•×§×¨ ×•× ×¡×™×¢×” ×“×¨×•××”.
×¦×”×¨×™×™×: ×¡×¤××¨×™ ×¤×™×œ×™× ××¨×ª×§ ×‘×©××•×¨×ª ××•×“×•×•××œ××•×•×” ×‘×˜×‘×¢ ×”×¤×¨××™.
××—×¨ ×”×¦×”×¨×™×™×: ×”×’×¢×” ×œ×—×•×£ ×”×“×¨×•××™, ×™×•×’×” ×‘×©×§×™×¢×” ××•×œ ×”×™× ×•×¢×™×¡×•×™ ××¤× ×§ ×‘××œ×•×Ÿ.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×—×•×£ ×”×“×¨×•××™ (××• ×“×•××”).

×™×•× 6: ×©× ×•×¨×§×œ×™× ×’ ×•×”×ª××¨×’× ×•×ª ×œ×©×‘×ª
×‘×•×§×¨: ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.
×××¦×¢ ×”×™×•×: ×©× ×•×¨×§×œ×™× ×’ ××“×”×™× ×¢× ×¦×‘×™ ×™× ×‘×—×•×£, ×–××Ÿ ×—×•×£ ×—×•×¤×©×™ ×•×§× ×™×•×ª ××§×•××™×•×ª.
××—×¨ ×”×¦×”×¨×™×™×: ×”×ª××¨×’× ×•×ª ×œ×§×¨××ª ×›× ×™×¡×ª ×©×‘×ª.
×¢×¨×‘: ×§×‘×œ×ª ×©×‘×ª ×•×¡×¢×•×“×ª ×©×‘×ª ×—×’×™×’×™×ª.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×—×•×£ ×”×“×¨×•××™ (××• ×“×•××”).

×™×•× 7: ×©×‘×ª ×× ×•×—×” ×•×™×•×’×”
×‘×•×§×¨: ×˜×™×•×œ ×–×¨×™×—×”, ×¡×©×Ÿ ×™×•×’×”, ×§×¤×” ×•×¢×•×’×” ×•×œ××—×¨×™×• ××¨×•×—×ª ×‘×•×§×¨/×‘×¨×× ×¥' ×××•×—×¨×ª.
×××¦×¢ ×”×™×•×: ×–××Ÿ ×—×•×¤×©×™ ×œ×× ×•×—×”, ×§×¨×™××” ×•××•×•×™×¨×ª ×©×‘×ª ×©×§×˜×” ×¢×œ ×”×—×•×£.
×¢×¨×‘: ××•×¦××™ ×©×‘×ª, ×”×‘×“×œ×” ×•××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘×—×•×£ ×”×“×¨×•××™ (××• ×“×•××”).

×™×•× 8: ×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×¡××¤ ×©×§×™×¢×”
×‘×•×§×¨ ××•×§×“×: ×©×™×™×˜ ××™×•×—×“ ×œ×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×“×•×œ×¤×™× ×™× ×‘××•×§×™×™× ×•×¡.
×‘×•×§×¨: ××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.
×××¦×¢ ×”×™×•×: ×–××Ÿ ×§× ×™×•×ª, × ×¡×™×¢×” ×•×”×ª××¨×’× ×•×ª ×‘××œ×•×Ÿ ×‘××”×”× ×’××” (12:30).
××—×¨ ×”×¦×”×¨×™×™×: ×¡××¤ ×©×§×™×¢×” ××•×œ ×”×™×.
×¢×¨×‘: ××¨×•×—×ª ×¢×¨×‘ ×—××” ×‘××œ×•×Ÿ.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª | ×œ×™× ×”: ××œ×•×Ÿ ×‘××”×”× ×’××” (××• ×“×•××”).

×™×•× 9: ×™×•× ××—×¨×•×Ÿ ×•×˜×™×¡×”
×‘×•×§×¨: ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ.
×××¦×¢ ×”×™×•×: ×–××Ÿ ×—×•×¤×©×™ ×œ×× ×•×—×”, ×¡×™×“×•×¨×™× ××—×¨×•× ×™× ×•×§× ×™×•×ª.
××—×¨ ×”×¦×”×¨×™×™×: × ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×” ×‘×§×•×œ×•××‘×• (CMB) ×œ×§×¨××ª ×”×˜×™×¡×” ×—×–×¨×” ×œ×™×©×¨××œ.
××¨×•×—×•×ª ×›×œ×•×œ×•×ª: 3 ××¨×•×—×•×ª.

×”×‘×”×¨×” ××©×¤×˜×™×ª: ×”××¡×œ×•×œ ×”××•×¦×’ ×œ×¢×™×œ ××¤×¨×˜ ××ª ×”×œ×•"×– ×”××ª×•×›× ×Ÿ ×•×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×”×××¨×’× ×™× ×©×•××¨×™× ×œ×¢×¦×× ××ª ×”×–×›×•×ª ×”××œ××” ×œ×‘×¦×¢ ×”×ª×××•×ª ×”×›×¨×—×™×•×ª ×‘××¡×œ×•×œ, ×‘×¡×“×¨ ×”×™××™×, ××• ×œ×”×—×œ×™×£ ××ª ×”××œ×•× ×•×ª ×”××¤×•×¨×˜×™× ×‘××§×•××•×ª ×œ×™× ×” ×‘×¨××” ×–×”×”, ×¢×§×‘ ××™×œ×•×¦×™ ×©×˜×—, ×”×—×œ×˜×•×ª ×¡×¤×§×™× ××§×•××™×™×, ×ª× ××™ ××–×’ ××•×•×™×¨ ××• ×›×•×— ×¢×œ×™×•×Ÿ.
×¤×™×¨×•×˜ ×¨×›×™×‘ ×¤×¢×™×œ×•×™×•×ª ($290 USD): ×”×¨×›×™×‘ ××›×¡×” ×‘××œ×•××• ××ª ×›×œ ×“××™ ×”×›× ×™×¡×” ×”×§×‘×•×¦×ª×™×™×, ×”×“×¨×›×” ××§×•××™×ª, ×•×œ×•×’×™×¡×˜×™×§×” ×¢×‘×•×¨ ×”×¤×¢×™×œ×•×™×•×ª ×”×›×œ×•×œ×•×ª. ×¤×¢×™×œ×•×™×•×ª ××•×¤×¦×™×•× ×œ×™×•×ª ××• ×˜×™×¤×•×œ×™ ×¡×¤× ×™×©×•×œ××• ×‘× ×¤×¨×“ ×¢×œ ×™×“×™ ×”××©×ª×ª×¤×ª.

--- ×× ×’×œ×™×ª / ENGLISH ---

Itinerary Appendix â€“ Women's Journey to Sri Lanka (Winter 2027)

Day 1: Arrival & Transit to Negombo/Colombo
Evening: Landing at Colombo Airport (CMB), immigration procedures, and transfer to hotel.
Wellness: Hotel check-in, pampering massage to kick off the trip, and a welcome dinner.
Meals: 3 meals | Accommodation: Hotel in Colombo/Negombo (or similar).

Day 2: Extreme in Kithulgala & Drive to Nuwara Eliya
Morning: Early sunrise hike, yoga, and breakfast at the hotel.
Mid-Day: Drive to Kithulgala for whitewater rafting and rainforest canyoning.
Evening: Transit to Nuwara Eliya, check-in, and dinner at the hotel.
Meals: 3 meals | Accommodation: Hotel in Nuwara Eliya (or similar).

Day 3: Tea Gardens & Scenic Train to Ella
Morning: Yoga and breakfast.
Mid-Day: Guided tour of tea plantations and Nuwara Eliya waterfalls.
Afternoon: The iconic scenic train ride from Nuwara Eliya to Ella.
Evening: Arrival in Ella, check-in, and dinner (at hotel or local Chabad House).
Meals: 3 meals | Accommodation: Hotel in Ella (or similar).

Day 4: Waterfalls & Adrenaline in Ella
Morning: Sunrise hike, yoga, and breakfast.
Mid-Day: Excursion to the majestic Diyaluma Falls, Flying Ravana Zipline, and local shopping in Ella.
Evening: Group dinner and rest.
Meals: 3 meals | Accommodation: Hotel in Ella (or similar).

Day 5: Elephant Safari & Sunset Yoga on South Coast
Morning: Yoga, breakfast, and drive south.
Mid-Day: Elephant safari in Udawalawe National Park.
Afternoon: Arrival at the South Coast, sunset yoga, and a relaxing massage.
Meals: 3 meals | Accommodation: Hotel on the South Coast (or similar).

Day 6: Turtles Snorkeling & Shabbat Preparation
Morning: Yoga and breakfast at the hotel.
Mid-Day: Snorkeling with wild sea turtles, free beach time, and local shopping.
Afternoon: Shabbat preparations.
Evening: Welcoming Shabbat; festive dinner.
Meals: 3 meals | Accommodation: Hotel on the South Coast (or similar).

Day 7: A Restful Shabbat & Yoga
Morning: Sunrise hike, yoga session, morning coffee, followed by a late breakfast/brunch.
Mid-Day: Free time for reading, relaxing, and quiet beach walks.
Evening: Havdalah and group dinner.
Meals: 3 meals | Accommodation: Hotel on the South Coast (or similar).

Day 8: Whale Watching & Sunset SUP
Early Morning: Ocean cruise search for whales and dolphins.
Morning: Breakfast.
Mid-Day: Shopping, transfer and check-in at Ahangama hotel (12:30).
Afternoon: Sunset stand-up paddleboarding (SUP).
Evening: Dinner at the hotel.
Meals: 3 meals | Accommodation: Hotel in Ahangama (or similar).

Day 9: Final Day & Departure
Morning: Yoga and breakfast.
Mid-Day: Relaxation and final souvenir shopping.
Afternoon: Drive to Colombo Airport (CMB) for the flight back.
Meals: 3 meals.

Legal Disclaimer: The itinerary presented above outlines the planned schedule and included activities. The Organizers reserve the full right to make necessary adjustments to the itinerary, the order of days, or substitute the specified hotels with accommodations of an identical standard, due to field constraints, local supplier decisions, weather conditions, or force majeure.
Activity Component Breakdown ($290 USD): Included Activities (Covered under the $290 USD Component) fully covers all group entry fees, local guiding services, and logistics for the included excursions. Excluded / Optional Activities (Paid Separately on Site) such as Ayurvedic spa treatments or marine wildlife excursions must be paid for independently.

```

## ×§×•×‘×¥: ./proxy.ts
```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === process.env.ADMIN_USER && pwd === process.env.ADMIN_PASS) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin Dashboard"',
    },
  })
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
```

## ×§×•×‘×¥: ./lib/firebaseAdmin.js
```
import * as admin from 'firebase-admin';

const USE_FIREBASE = false; // Set to true when you want to reconnect Firebase

if (USE_FIREBASE && !admin.apps.length) {
  try {
    if (process.env.FIREBASE_PROJECT_ID) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          // Replace escaped newlines with actual newlines
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      });
    }
  } catch (error) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const db = admin.apps.length > 0 ? admin.firestore() : null;
export const storage = admin.apps.length > 0 ? admin.storage() : null;

```

## ×§×•×‘×¥: ./lib/cloudinary.js
```
export const CLOUD_NAME = 'dsgvsqnjp'; // Reverted to original account where all old images reside

/**
 * Converts a local asset path to a Cloudinary URL.
 * Images are stored at the root level of the Cloudinary account
 * with their original filename as the public_id (no hash suffix).
 *
 * @param {string} path - e.g. '/home1.webp' or '/discovery-gallery/PXL_....webp'
 * @returns {string} Full Cloudinary URL
 */
export const getCloudinaryUrl = (path, options = {}) => {
  if (!path || typeof path !== 'string' || path.startsWith('http') || path.startsWith('data:')) return path;

  // Remove leading slash / ./ / ../
  const cleanPath = path.replace(/^(\/|\.\/|\.\.\/)+/, '');

  const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(cleanPath);
  const resourceType = isVideo ? 'video' : 'image';

  // Base optimizations: f_auto (best format), q_auto (best quality/size ratio), fl_progressive for faster perceived loading
  let transforms = 'f_auto,q_auto,fl_progressive';
  
  if (!isVideo) {
    if (options.width) transforms += `,w_${options.width}`;
    if (options.height) transforms += `,h_${options.height}`;
    if (options.crop) transforms += `,c_${options.crop || 'limit'}`;
  } else {
    // For videos, we might want to limit bitrate or size if needed
    if (options.width) transforms += `,w_${options.width}`;
  }

  return `https://res.cloudinary.com/${CLOUD_NAME}/${resourceType}/upload/${transforms}/${cleanPath}`;
};

```

## ×§×•×‘×¥: ./convert_to_webp.cjs
```
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, 'public/discovery-gallery');

async function convert() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const outputName = file.replace(/\.jpg$/i, '.webp').replace(/\.jpeg$/i, '.webp');
      const outputPath = path.join(dir, outputName);
      
      console.log(`Converting ${file} to ${outputName}`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      fs.unlinkSync(inputPath); // Delete the original
    }
  }
}

convert().then(() => console.log('Done converting to WebP.')).catch(console.error);

```

## ×§×•×‘×¥: ./convert_root_webp.cjs
```
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, 'public');

async function convert() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const outputName = file.replace(/\.jpg$/i, '.webp').replace(/\.jpeg$/i, '.webp');
      const outputPath = path.join(dir, outputName);
      
      console.log(`Converting ${file} to ${outputName}`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        fs.unlinkSync(inputPath); // Delete the original
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err.message);
      }
    }
  }
}

convert().then(() => console.log('Done converting root images to WebP.')).catch(console.error);

```

## ×§×•×‘×¥: ./tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "incremental": true,
    "module": "esnext",
    "esModuleInterop": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

## ×§×•×‘×¥: ./eslint.config.js
```
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

## ×§×•×‘×¥: ./upload_to_cloudinary.mjs
```
/**
 * upload_to_cloudinary.mjs
 *
 * Extracts images/video from git history and uploads them to Cloudinary
 * with EXACT public_ids (no random hash suffix).
 *
 * Requirements:
 *   1. In Cloudinary: Settings â†’ Upload â†’ Upload Presets
 *      Create/edit "savtot_admin" preset:
 *        - Signing Mode: Unsigned
 *        - Use filename: ON
 *        - Unique filename: OFF  â† critical
 *
 *   2. Run: node upload_to_cloudinary.mjs
 *
 * Node 18+ required (built-in fetch).
 */

import { execSync } from 'child_process';

const CLOUD_NAME    = 'dpodrwq71';
const UPLOAD_PRESET = 'savtot_admin';

// Git commit BEFORE images were removed from public/
const GIT_COMMIT = 'edd0306';

// Map: { gitPath, publicId, type }
// publicId = exact path Cloudinary will store (no hash, no folder prefix needed)
const FILES = [
  // Home images
  { git: 'public/home1.webp',    id: 'home1',    type: 'image' },
  { git: 'public/home2.webp',    id: 'home2',    type: 'image' },
  { git: 'public/home3.webp',    id: 'home3',    type: 'image' },
  { git: 'public/about_us.webp', id: 'about_us', type: 'image' },
  { git: 'public/arugam.webp',   id: 'arugam',   type: 'image' },
  { git: 'public/1.webp',        id: '1',        type: 'image' },
  { git: 'public/2.webp',        id: '2',        type: 'image' },
  { git: 'public/3.webp',        id: '3',        type: 'image' },
  { git: 'public/4.webp',        id: '4',        type: 'image' },
  { git: 'public/5.webp',        id: '5',        type: 'image' },
  { git: 'public/6.webp',        id: '6',        type: 'image' },
  { git: 'public/8.webp',        id: '8',        type: 'image' },
  { git: 'public/9.webp',        id: '9',        type: 'image' },
  { git: 'public/10.webp',       id: '10',       type: 'image' },
  // Discovery gallery
  { git: 'public/discovery-gallery/PXL_20250804_231312230.webp',   id: 'discovery-gallery/PXL_20250804_231312230',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_061834012.webp',   id: 'discovery-gallery/PXL_20250805_061834012',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_101202880.webp',   id: 'discovery-gallery/PXL_20250805_101202880',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_101212699.webp',   id: 'discovery-gallery/PXL_20250805_101212699',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_110950616.MP.webp',id: 'discovery-gallery/PXL_20250805_110950616.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_110952829.MP.webp',id: 'discovery-gallery/PXL_20250805_110952829.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_110954833.webp',   id: 'discovery-gallery/PXL_20250805_110954833',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_112807041.webp',   id: 'discovery-gallery/PXL_20250805_112807041',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_113440117.webp',   id: 'discovery-gallery/PXL_20250805_113440117',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_131932263.webp',   id: 'discovery-gallery/PXL_20250805_131932263',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250805_131935688.MP.webp',id: 'discovery-gallery/PXL_20250805_131935688.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_022238016.webp',   id: 'discovery-gallery/PXL_20250806_022238016',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_043848103.webp',   id: 'discovery-gallery/PXL_20250806_043848103',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_103924168.webp',   id: 'discovery-gallery/PXL_20250806_103924168',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250806_104315164.webp',   id: 'discovery-gallery/PXL_20250806_104315164',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_024105138.webp',   id: 'discovery-gallery/PXL_20250807_024105138',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090023481.webp',   id: 'discovery-gallery/PXL_20250807_090023481',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090039580.webp',   id: 'discovery-gallery/PXL_20250807_090039580',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090508332.MP.webp',id: 'discovery-gallery/PXL_20250807_090508332.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_090635657.MP.webp',id: 'discovery-gallery/PXL_20250807_090635657.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_100921999.mp4',    id: 'discovery-gallery/PXL_20250807_100921999',   type: 'video' },
  { git: 'public/discovery-gallery/PXL_20250807_100946064.webp',   id: 'discovery-gallery/PXL_20250807_100946064',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_104232959.webp',   id: 'discovery-gallery/PXL_20250807_104232959',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250807_104328670.webp',   id: 'discovery-gallery/PXL_20250807_104328670',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250812_051612407.webp',   id: 'discovery-gallery/PXL_20250812_051612407',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250812_090458231.webp',   id: 'discovery-gallery/PXL_20250812_090458231',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250812_091006003.webp',   id: 'discovery-gallery/PXL_20250812_091006003',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_005516532.webp',   id: 'discovery-gallery/PXL_20250813_005516532',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_005533486.webp',   id: 'discovery-gallery/PXL_20250813_005533486',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_084419570.MP.webp',id: 'discovery-gallery/PXL_20250813_084419570.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_090005700.MP.webp',id: 'discovery-gallery/PXL_20250813_090005700.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_090011635.MP.webp',id: 'discovery-gallery/PXL_20250813_090011635.MP',type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_090910761.webp',   id: 'discovery-gallery/PXL_20250813_090910761',   type: 'image' },
  { git: 'public/discovery-gallery/PXL_20250813_092451170.webp',   id: 'discovery-gallery/PXL_20250813_092451170',   type: 'image' },
];

function getFromGit(commit, filePath) {
  try {
    return execSync(`git show ${commit}:${filePath}`, { maxBuffer: 50 * 1024 * 1024 });
  } catch {
    return null;
  }
}

async function upload(buffer, publicId, type) {
  const mime = type === 'video' ? 'video/mp4' : 'image/webp';

  // Build multipart form manually (no extra deps needed in Node 18+)
  const boundary = '----FormBoundary' + Math.random().toString(36).slice(2);
  const CRLF = '\r\n';

  const addField = (name, value) =>
    `--${boundary}${CRLF}Content-Disposition: form-data; name="${name}"${CRLF}${CRLF}${value}${CRLF}`;

  const textParts = [
    addField('upload_preset', UPLOAD_PRESET),
    addField('public_id', publicId),
  ].join('');

  const fileHeader =
    `--${boundary}${CRLF}` +
    `Content-Disposition: form-data; name="file"; filename="${publicId.split('/').pop()}"${CRLF}` +
    `Content-Type: ${mime}${CRLF}${CRLF}`;

  const footer = `${CRLF}--${boundary}--${CRLF}`;

  const body = Buffer.concat([
    Buffer.from(textParts, 'utf8'),
    Buffer.from(fileHeader, 'utf8'),
    buffer,
    Buffer.from(footer, 'utf8'),
  ]);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${type}/upload`,
    {
      method: 'POST',
      headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
      body,
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || JSON.stringify(data));
  return data.secure_url;
}

async function main() {
  console.log(`\nğŸš€  Cloudinary Upload  |  cloud=${CLOUD_NAME}  preset=${UPLOAD_PRESET}`);
  console.log(`ğŸ“¦  Source: git commit ${GIT_COMMIT}\n`);

  let ok = 0, skip = 0, fail = 0;

  for (const { git, id, type } of FILES) {
    process.stdout.write(`  â¬†  ${id} ... `);
    const buf = getFromGit(GIT_COMMIT, git);
    if (!buf) {
      console.log(`âš ï¸  not found in git`);
      skip++;
      continue;
    }
    try {
      const url = await upload(buf, id, type);
      console.log(`âœ…  ${url}`);
      ok++;
    } catch (err) {
      console.log(`âŒ  ${err.message}`);
      fail++;
    }
  }

  console.log(`\nâœ¨  Done â€” ${ok} uploaded, ${skip} skipped, ${fail} failed.\n`);
  if (fail > 0) {
    console.log('ğŸ’¡  If you see "Invalid upload preset":');
    console.log('    Cloudinary â†’ Settings â†’ Upload â†’ Upload Presets');
    console.log('    â†’ Edit "savtot_admin" â†’ Signing Mode: Unsigned â†’ Save\n');
  }
}

main().catch(console.error);

```

## ×§×•×‘×¥: ./fix_site_context.js
```
const fs = require('fs');

const fileContent = fs.readFileSync('contexts/SiteContext.jsx', 'utf8');

const newContext = `use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

export const defaultContentData = {
  he: {
    nav: {
      home: '×‘×™×ª', itinerary: '×”××¡×œ×•×œ', essentials: '××™×“×¢ ×—×©×•×‘', discovery: '×’×œ×¨×™×”', about: '×”×¡×™×¤×•×¨ ×©×œ× ×•', register: '×”×¦×˜×¨×¤×• ×œ××¡×¢', toggle: 'Switch to English'
    },
    hero: {
      title: '×¡×‘×ª×•×ª ×‘×¡×¨×™ ×œ× ×§×”\\n2027',
      subtitle: '×××¤×œ×™× ××¨×”×™×‘×™× ×•××˜×¢×™ ×ª×” ×™×¨×•×§×™×, ×œ×´×‘×¨×™×›×•×ª ××™× ×¤×™× ×™×˜×™" ×˜×‘×¢×™×•×ª ×•×”×—×•×¤×™× ×”×™×¤×™× ×‘×™×•×ª×¨ ×©×™×©.\\n×—×•×•×™×” ××™×•×—×“×ª ×•×‘×œ×ª×™ × ×©×›×—×ª ×©××¨×’× ×• ×‘××™×•×—×“ ×‘×©×‘×™×œ×š, ××™×©×” ×©××—×¤×©×ª ×œ×—×•×•×ª ×§×¦×ª ×´×˜×™×•×œ ××—×¨×™ ×¦×‘××´\\n××‘×œ ×‘×§×¦×‘ ×¨×’×•×¢ ×•×¢× ×›×œ ×”×¤×™× ×•×§×™× ×©×œ ×˜×™×•×œ ×××•×¨×’×Ÿ.',
      tagline: '×˜×™×•×œ ×©×œ ×¤×¢× ×‘×—×™×™×',
      cta_plan: '×¦×¤×• ×‘×ª×•×›× ×™×ª',
      cta_discover: '×’×œ×• ×¢×•×“',
      kosher: '×”×˜×™×•×œ ×¢× ×›×©×¨×•×ª ××œ××”.',
      yoga: '×›×•×œ×œ ×ª×¨×’×•×œ×™ ×™×•×’×” ×™×•××™×™×.',
      winter_trip: '××¡×¢ ×—×•×¨×£: 15-24 ×œ×¤×‘×¨×•××¨',
      dates_disclaimer: '* ×ª××¨×™×›×™× ××“×•×™×§×™× ×™×¤×•×¨×¡××• ×‘×”××©×š.'
    },
    features: {
      title: '×™×•×ª×¨ ××¡×ª× ×˜×™×•×œ', f1_title: '×•×•×œ× ×¡ ×•×™×•×’×”', f1_desc: '×ª×¨×’×•×œ×™ ×™×•×’×” ×¢×“×™× ×™× ×‘×–×¨×™×—×” ××• ×‘×©×§×™×¢×”, ×œ×›×œ ×”×¨××•×ª, ×œ××ª×™×—×” ×•×”×¨×’×¢×” ×©×œ ×”×’×•×£ ×•×”× ×¤×©.', f2_title: '×ª×¨×‘×•×ª ××•×ª× ×˜×™×ª', f2_desc: '××¡×¤××¨×™ ×•×¢×“ ××˜×¢×™ ×ª×” ×•×˜×™×•×œ×™ ×–×¨×™×—×”, ×ª×§×‘×œ×• ××ª ×”×”×–×“×× ×•×ª ×œ×¨××•×ª ××ª ×¡×¨×™ ×œ× ×§×” ×”×××™×ª×™×ª.', f3_title: '×›×©×¨×•×ª ××œ××”', f3_desc: '×× ×—× ×• ××§×¤×™×“×™× ×¢×œ ×—×•××¨×™ ×’×œ× ××§×•××™×™× ×•×˜×¨×™×™×. ×¦×•×•×ª ×˜×‘×—×™× ××§×•××™ ×™×‘×©×œ ×¢×‘×•×¨× ×•, ×›×©××—×“ ×××™×ª× ×• (××”×¦×•×•×ª ×”×™×©×¨××œ×™) × ××¦× ×©× ×¦××•×“ ×›×“×™ ×œ×¤×§×— ×¢×œ ×”×›×œ ×•×œ×”×‘×˜×™×— ×©×”×›×œ ×¢×•××“ ×‘×”×›×©×¨.'
    },
    gallery: {
      title: '×œ×—×•×•×ª ××ª ×”×§×¡×', desc: '×××¤×œ×™× ××©×’×¢×™× ×•××˜×¢×™ ×ª×” ×™×¨×•×§×™×, ×“×¨×š ×‘×¨×™×›×•×ª ××™× ×¤×™× ×™×˜×™ ×˜×‘×¢×™×•×ª ×•×¢×“ ×œ×—×•×¤×™× ×”×›×™ ×™×¤×™× ×©×™×© - ×–×• ×”×”×–×“×× ×•×ª ×©×œ× ×• ×œ×—×•×•×ª ××ª ×¡×¨×™ ×œ× ×§×” ×”×××™×ª×™×ª ×•×”××•×ª× ×˜×™×ª.', cta: '×©×¨×™×™× ×• ××§×•× ×‘×˜×™×•×œ'
    },
    itinerary: {
      title: '×¤×¨×˜×™ ×”××¡×¢', subtitle: '×ª×•×›× ×™×ª ×™×•××™×ª ××¤×•×¨×˜×ª',
      headers: { hour: '×©×¢×”', place: '××™×§×•×', activity: '×¤×¢×™×œ×•×ª' },
      summer: {
        days: [
          { day: "1", title: "××’×™×¢×™× ×œ×¡×¨×™ ×œ× ×§×”", desc: "×”×”×™×™×œ×™×™×˜ ×©×œ ×”×™×•× - ××¡××–' ××¤× ×§ ×‘××™×•×—×“ ×‘×¡×™×’×™×¨×™×”, ×›×“×™ ×œ×”×™×›× ×¡ ×œ××•×•×™×¨×”.", highlight: "××¡××–' ××¤× ×§ ×‘×¡×™×’×™×¨×™×”", 
            schedule: [
              { hour: "-", place: "×™×©×¨××œ", activity: "×˜×™×¡×”" },
              { hour: "-", place: "×§×•×œ×•××‘×•", activity: "× ×¡×™×¢×” ×‘××•×˜×•×‘×•×¡ ×œ×¡×™×’×™×¨×™×™×”" },
              { hour: "-", place: "×¡×™×’×™×¨×™×™×”", activity: "×§×‘×œ×ª ×—×“×¨×™× ×•×”×ª××¨×’× ×•×ª" },
              { hour: "-", place: "×¡×™×’×™×¨×™×™×”", activity: "××¨×•×—×ª ×¢×¨×‘" },
              { hour: "-", place: "×¡×™×’×™×¨×™×™×”", activity: "×¢×™×¡×•×™ ××¤× ×§" }
            ]
          },
          { day: "2", title: "×¡×œ×¢ ×”××¨×™×” ×•×¡×¤××¨×™", desc: "×”×©×›××” ××•×§×“××ª ×œ×˜×™×¤×•×¡ ××¨×’×©, ×¡×™×•×¨ ×‘×›×¤×¨ ×”××•×ª× ×˜×™ ×•×¡×¤××¨×™ ××—×¨ ×”×¦×”×¨×™×™×.", highlight: "×¡×œ×¢ ×”××¨×™×” ×•×¡×¤××¨×™ ×¤×™×œ×™×", 
            schedule: [
              { hour: "05:00", place: "×¡×œ×¢ ×”××¨×™×” (Sigiriya Rock)", activity: "×˜×™×¤×•×¡ ×•×–×¨×™×—×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¡×™×’×™×¨×™×™×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "10:00 - 15:00", place: "×›×¤×¨ ××§×•××™", activity: "×¡×™×•×¨ ×›×¤×¨ ××•×ª× ×˜×™" },
              { hour: "15:00 - 16:00", place: "××œ×•×Ÿ", activity: "×× ×•×—×”" },
              { hour: "16:00 - 18:00", place: "×¡×¤××¨×™", activity: "×˜×™×•×œ ×¡×¤××¨×™" },
              { hour: "18:30 - 19:30", place: "××œ×•×Ÿ ×‘×¡×™×’×™×¨×™×™×”", activity: "××¨×•×—×ª ×¢×¨×‘" },
              { hour: "20:30", place: "××œ×•×Ÿ", activity: "×–××Ÿ ×—×•×¤×©×™ / ×”×ª××•×©×©×•×ª" }
            ]
          },
          { day: "3", title: "××§×¡×˜×¨×™× ×‘×§×™×˜×•×œ×’×œ×”", desc: "×™×•× ××œ× ××“×¨× ×œ×™×Ÿ ×¢× ×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’, ×•××¢×‘×¨ ×œ× ×•×•××¨×” ××œ×™×” ×”×§×¨×™×¨×”.", highlight: "×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "× ×¡×™×¢×”" },
              { hour: "14:00 - 15:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "×¨×¤×˜×™× ×’" },
              { hour: "15:30 - 17:00", place: "×§×™×˜×•×œ×’×œ×”", activity: "×§× ×™×•× ×™× ×’" },
              { hour: "15:30 - 17:00", place: "×§×™×˜×•×œ×’×œ×”", activity: "×”×œ×™×›×” ×‘×™×¢×¨ ×”×’×©×" },
              { hour: "17:30 - 19:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "4", title: "×ª×”, ×¨×›×‘×•×ª ×•××œ×”", desc: "×”×–×”×‘ ×”×™×¨×•×§ ×©×œ ×¡×¨×™ ×œ× ×§×” ×•× ×¡×™×¢×ª ×”×¨×›×‘×ª ×”×™×¤×” ×‘×¢×•×œ× ×‘×“×¨×š ××œ ×”×¢×™×™×¨×” ××œ×”.", highlight: "× ×¡×™×¢×ª ×”×¨×›×‘×ª ×œ××œ×”", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 14:30", place: "××˜×¢×™ ×ª×”", activity: "×¡×™×•×¨ ×‘××˜×¢×™ ×”×ª×”" },
              { hour: "15:00 - 17:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×ª ×¨×›×‘×ª ×œ××œ×”" },
              { hour: "17:30 - 18:00", place: "××œ×”", activity: "× ×¡×™×¢×” ×œ××œ×•×Ÿ" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "5", title: "××¤×œ×™× ×•××“×¨× ×œ×™×Ÿ", desc: "× ×•×¤×™× ×¢×•×¦×¨×™ × ×©×™××” ×‘××¤×œ×™ ×“×™××œ×•×× ×•×’×œ×™×©×ª ××•××’×” ××¢×œ ×”×¦××¨×•×ª.", highlight: "××¤×œ×™ ×“×™××œ×•×× ×•××•××’×”", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "××œ×”", activity: "××¤×œ×™ ×“×™××œ×•××" },
              { hour: "15:30 - 17:00", place: "××œ×”", activity: "×’×œ×™×©×ª ××•××’×” (Zipline)" },
              { hour: "15:30 - 17:00", place: "××œ×”", activity: "×”×¡×ª×•×‘×‘×•×ª ×•×§× ×™×•×ª" },
              { hour: "17:30 - 20:30", place: "×¤×¡×™×§×•×“×”", activity: "× ×¡×™×¢×” ×œ×¤×¡×™×§×•×“×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "6", title: "×”×—×™×™× ×¢×œ ×”×—×•×£", desc: "××’×™×¢×•×ª ×œ×¤×¡×™×§×•×“×” ×”××”×××ª ×•××ª××§××•×ª.", highlight: "×©×‘×ª ×‘×¤×¡×™×§×•×“×”", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 12:00", place: "×¤×•×˜×•×‘×™×œ", activity: "×¡××¤ ×‘×•×§×¨ ×‘×œ×’×•× ×”" },
              { hour: "13:30 - 15:30", place: "×¤×¡×™×§×•×“×”", activity: "×©×™×¢×•×¨ ×’×œ×™×©×” / ×–××Ÿ ×—×•×£" },
              { hour: "15:30 - 17:00", place: "××œ×•×Ÿ", activity: "×”×ª××¨×’× ×•×ª ×œ×©×‘×ª" },
              { hour: "17:15", place: "××œ×•×Ÿ", activity: "×›× ×™×¡×ª ×©×‘×ª" },
              { hour: "18:30 - 19:30", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×¢×¨×‘ ×©×‘×ª" }
            ]
          },
          { day: "7", title: "×©×‘×ª ×× ×•×—×”", desc: "×™×•× ×× ×•×—×” ×¨×’×•×¢ ×‘×¤×¡×™×§×•×“×”, ×¡×©×Ÿ ×™×•×’×” ×©×‘×ª ×œ×™×™×˜, ×–××Ÿ ×œ×™×”× ×•×ª ××”××•×•×™×¨×” ×•×œ××’×•×¨ ×›×•×—×•×ª.", highlight: "×× ×•×—×” ×•×—×•×¤×©", 
            schedule: [
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30", place: "××œ×•×Ÿ", activity: "×™×•×’×” ×©×‘×ª ×œ×™×™×˜" },
              { hour: "18:30", place: "×¤×¡×™×§×•×“×”", activity: "××•×¦××™ ×©×‘×ª" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "8", title: "×˜×¨×™× ×§×•××œ×™", desc: "×”×—×•×•×™×” ×”××¨×›×–×™×ª ×©×œ× ×• ×”×™×•× ×ª×”×™×” ×©×™×™×˜ ×‘×¢×§×‘×•×ª ×œ×•×•×™×™×ª× ×™× ×•×“×•×œ×¤×™× ×™×, ×•×¦×œ×™×œ×ª ×©× ×•×¨×§×œ×™× ×›×™×¤×™×ª ×‘×™×—×“.", highlight: "×©×™×™×˜ ×œ×•×•×™×™×ª× ×™× ×•×©× ×•×¨×§×œ×™×", 
            schedule: [
              { hour: "05:00", place: "-", activity: "×˜×™×•×œ ×–×¨×™×—×”" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 12:30", place: "×˜×¨×™× ×§×•××œ×™", activity: "×©×™×™×˜ ×•×¦×œ×™×œ×” / ×§× ×™×•×ª" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "9", title: "×–××Ÿ ×™× ××—×¨×•×Ÿ", desc: "× ×¦×œ×• ×›×œ ×¨×’×¢ ×©×œ ×©××©, ×’×œ×™× ×•×—×•×œ ×¢×œ ×”×—×•×£ ×œ×¤× ×™ ×”×¤×¨×™×“×”.", highlight: "×™× ×•×©××©", 
            schedule: [
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘×¤×¡×™×§×•×“×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 17:00", place: "×¤×¡×™×§×•×“×”", activity: "×–××Ÿ ×—×•×£ ×—×•×¤×©×™ / ×§× ×™×•×ª ××—×¨×•× ×•×ª" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          }
        ]
      },
      winter: {
        days: [
          { day: "1", title: "××’×™×¢×™× ×œ×¡×¨×™ ×œ× ×§×”", desc: "×”×”×™×™×œ×™×™×˜ ×©×œ ×”×™×•× - ××¡××–' ××¤× ×§ ×‘××™×•×—×“ ×‘××œ×•×Ÿ ×‘×§×•×œ×•××‘×•/× ×’×•××‘×• ×œ×”×ª×—×œ×ª ×”××¡×¢ ×‘××•×•×™×¨×” ×¨×’×•×¢×”.", highlight: "××¡××–' ××¤× ×§ ×‘××œ×•×Ÿ",
            schedule: [
              { hour: "-", place: "×™×©×¨××œ", activity: "×˜×™×¡×”" },
              { hour: "-", place: "×§×•×œ×•××‘×•", activity: "× ×¡×™×¢×” ×‘××•×˜×•×‘×•×¡ ×œ×§×•×œ×•××‘×•/× ×’×•××‘×•" },
              { hour: "-", place: "××œ×•×Ÿ", activity: "×§×‘×œ×ª ×—×“×¨×™× ×•×”×ª××¨×’× ×•×ª" },
              { hour: "-", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" },
              { hour: "-", place: "××œ×•×Ÿ", activity: "××¡××–' ××¤× ×§" }
            ]
          },
          { day: "2", title: "××§×¡×˜×¨×™× ×‘×§×™×˜×•×œ×’×œ×”", desc: "×”×©×›××” ××•×§×“××ª ×œ×˜×™×•×œ ×–×¨×™×—×”, ×™×•×’×” ×‘××œ×•×Ÿ ×•× ×¡×™×¢×” ×œ×§×™×˜×•×œ×’×œ×” ×œ×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’ ××¨×’×©×™× ×‘×™×¢×¨ ×”×’×©×, ×œ×¤× ×™ ×©×××©×™×›×™× ×œ× ×•×•××¨×” ××œ×™×”.", highlight: "×¨×¤×˜×™× ×’ ×•×§× ×™×•× ×™× ×’ ×‘×™×¢×¨ ×”×’×©×",
            schedule: [
              { hour: "05:00", place: "××œ×•×Ÿ", activity: "×˜×™×•×œ ×–×¨×™×—×”" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×” ×‘××œ×•×Ÿ" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "× ×¡×™×¢×” ×œ×§×™×˜×•×œ×’×œ×”" },
              { hour: "14:00 - 15:30", place: "×§×™×˜×•×œ×’×œ×”", activity: "×¨×¤×˜×™× ×’" },
              { hour: "15:30 - 17:00", place: "×§×™×˜×•×œ×’×œ×”", activity: "×§× ×™×•× ×™× ×’ ×•×”×œ×™×›×” ×‘×™×¢×¨ ×”×’×©×" },
              { hour: "17:30 - 19:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×” ×œ× ×•×•××¨×” ××œ×™×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘× ×•×•××¨×” ××œ×™×”", activity: "××¨×•×—×ª ×¢×¨×‘ ×‘××œ×•×Ÿ" }
            ]
          },
          { day: "3", title: "×ª×”, ×¨×›×‘×•×ª ×•××œ×”", desc: "×˜×™×•×œ ×–×¨×™×—×” ×•×ª×¨×’×•×œ ×™×•×’×” ×‘×‘×•×§×¨, ×¡×™×•×¨ ××¨×ª×§ ×‘××˜×¢×™ ×ª×” ×•×¢×œ×™×™×” ×¢×œ ×”×¨×›×‘×ª ×”× ×•×¤×™×ª ×”×™×¤×” ×‘×¢×•×œ× ×‘×“×¨×š ××œ ×”×¢×™×™×¨×” ××œ×”.", highlight: "×”×¨×›×‘×ª ×”× ×•×¤×™×ª ×œ××œ×” ×•××˜×¢×™ ×”×ª×”",
            schedule: [
              { hour: "05:00", place: "××œ×•×Ÿ", activity: "×˜×™×•×œ ×–×¨×™×—×”" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 14:30", place: "××˜×¢×™ ×ª×”", activity: "×¡×™×•×¨ ×‘××˜×¢×™ ×ª×”" },
              { hour: "15:00 - 17:30", place: "× ×•×•××¨×” ××œ×™×”", activity: "× ×¡×™×¢×ª ×¨×›×‘×ª ×œ××œ×”" },
              { hour: "17:30 - 18:00", place: "××œ×”", activity: "× ×¡×™×¢×” ×œ××œ×•×Ÿ" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "4", title: "××¤×œ×™× ×•××“×¨× ×œ×™×Ÿ ×‘××œ×”", desc: "×˜×™×•×œ ×–×¨×™×—×” ×•×™×•×’×”, ×‘×™×§×•×¨ ×‘××¤×œ×™ ×“×™××œ×•×× ×”××¨×©×™××™×, ×’×œ×™×©×ª ××•××’×” (Flying Ravana) ×•×§× ×™×•×ª ×‘××œ×”, ×•×œ××—×¨ ××›×Ÿ × ×¡×™×¢×” ×•××¨×•×—×ª ×¢×¨×‘.", highlight: "××¤×œ×™ ×“×™××œ×•×× ×•××•××’×” ×‘××œ×”",
            schedule: [
              { hour: "05:00", place: "××œ×•×Ÿ", activity: "×˜×™×•×œ ×–×¨×™×—×”" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ ×‘××œ×”", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "××œ×”", activity: "××¤×œ×™ ×“×™××œ×•××" },
              { hour: "14:00 - 17:00", place: "××œ×”", activity: "××•××’×” ×•×§× ×™×•×ª" },
              { hour: "17:30 - 20:30", place: "××œ×•×Ÿ", activity: "× ×¡×™×¢×”" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "5", title: "×¡×¤××¨×™ ×¤×™×œ×™× ×•×¡××¤ ×©×§×™×¢×”", desc: "××¨×•×—×ª ×‘×•×§×¨, × ×¡×™×¢×” ×“×¨×•××” ×œ×¡×¤××¨×™ ×¤×™×œ×™× ×‘×©××•×¨×ª ××•×“×•×•××œ××•×•×”, ×•×¡××¤ ×©×§×™×¢×” ×¨×’×•×¢ ×‘×™× ×œ×§×™× ×•×— ×”×™×•× ×¢× ×¢×™×¡×•×™ ××¤× ×§.", highlight: "×¡×¤××¨×™ ×¤×™×œ×™× ×‘××•×“×•×•××œ××•×•×” ×•×¡××¤ ×©×§×™×¢×”",
            schedule: [
              { hour: "07:15 - 08:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "08:30 - 11:00", place: "×“×¨×•×", activity: "× ×¡×™×¢×” ×“×¨×•××”" },
              { hour: "11:30 - 14:30", place: "××•×“×•×•××œ××•×•×”", activity: "×¡×¤××¨×™ ×¤×™×œ×™× ×‘××•×“×•×•××œ××•×•×”" },
              { hour: "18:30 - 19:30", place: "×—×•×£", activity: "×¡××¤ ×©×§×™×¢×”" },
              { hour: "20:30", place: "××œ×•×Ÿ", activity: "×¢×™×¡×•×™ ××¤× ×§ (××¡××–')" }
            ]
          },
          { day: "6", title: "×©× ×•×¨×§×œ×™× ×’ ×•×”×ª××¨×’× ×•×ª ×œ×©×‘×ª", desc: "××¨×•×—×ª ×‘×•×§×¨, ×©× ×•×¨×§×œ×™× ×’ ××“×”×™× ×¢× ×¦×‘×™ ×™×, ×–××Ÿ ×—×•×£ ×•×§× ×™×•×ª, ×•×œ××—×¨ ××›×Ÿ ×”×ª××¨×’× ×•×ª ×œ×§×¨××ª ×›× ×™×¡×ª ×©×‘×ª.", highlight: "×©× ×•×¨×§×œ×™× ×’ ×¢× ×¦×‘×™ ×™× ×•×–××Ÿ ×—×•×£",
            schedule: [
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "10:30 - 12:00", place: "×—×•×£", activity: "×©× ×•×¨×§×œ×™× ×’ ×¢× ×¦×‘×™ ×™×" },
              { hour: "13:30 - 15:30", place: "×—×•×£", activity: "×–××Ÿ ×—×•×£ ×•×§× ×™×•×ª" },
              { hour: "17:15", place: "××œ×•×Ÿ", activity: "×”×ª××¨×’× ×•×ª ×œ×©×‘×ª" }
            ]
          },
          { day: "7", title: "×©×‘×ª ×× ×•×—×”", desc: "×¡×©×Ÿ ×™×•×’×” ×©×‘×ª ×œ×™×™×˜, ××¨×•×—×ª ×‘×•×§×¨ ×•×–××Ÿ ×× ×•×—×” ×¨×’×•×¢ ×‘×©×‘×ª. ×‘×¢×¨×‘ - ×”×‘×“×œ×” ×‘××•×¦××™ ×©×‘×ª ×•××¨×•×—×ª ×¢×¨×‘.", highlight: "×©×‘×ª ×× ×•×—×” ×•×™×•×’×” ×œ×™×™×˜",
            schedule: [
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30", place: "××œ×•×Ÿ", activity: "×™×•×’×” ×©×‘×ª ×œ×™×™×˜" },
              { hour: "18:30", place: "××œ×•×Ÿ", activity: "××•×¦××™ ×©×‘×ª (×”×‘×“×œ×”)" },
              { hour: "19:30 - 20:30", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "8", title: "×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×—×•×£ ×“×¨×•××™", desc: "×©×™×™×˜ ×‘×‘×•×§×¨ ×œ×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™×, ×ª×¨×’×•×œ ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨. ×‘×”××©×š ×”×™×•× ×©×™×¢×•×¨ ×’×œ×™×©×” ×•×§× ×™×•×ª, ×•×œ××—×¨ ××›×Ÿ × ×¡×™×¢×” ×œ×˜×œ×¤×” ×œ×œ×™× ×” ×•××¨×•×—×ª ×¢×¨×‘.", highlight: "×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™× ×•×©×™×¢×•×¨ ×’×œ×™×©×”",
            schedule: [
              { hour: "05:00", place: "××•×§×™×™× ×•×¡", activity: "×¦×¤×™×™×” ×‘×œ×•×•×™×™×ª× ×™×" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "××œ×•×Ÿ", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 12:30", place: "×—×•×£", activity: "×©×™×¢×•×¨ ×’×œ×™×©×” ×•×§× ×™×•×ª" },
              { hour: "17:30 - 18:30", place: "×˜×œ×¤×”", activity: "× ×¡×™×¢×” ×•×”×ª××¨×’× ×•×ª ×œ×œ×™× ×” ×‘×˜×œ×¤×”" },
              { hour: "19:00 - 20:00", place: "××œ×•×Ÿ ×‘×˜×œ×¤×”", activity: "××¨×•×—×ª ×¢×¨×‘" }
            ]
          },
          { day: "9", title: "×™×•× ××—×¨×•×Ÿ ×•×˜×™×¡×”", desc: "×˜×™×•×œ ×–×¨×™×—×”, ×™×•×’×” ×•××¨×•×—×ª ×‘×•×§×¨ ×‘××œ×•×Ÿ. ×‘×”××©×š ×”×™×•× ×× ×•×—×” ×•×§× ×™×•×ª ××—×¨×•× ×•×ª, ×•×œ××—×¨ ××›×Ÿ × ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×” ×œ×§×¨××ª ×”×˜×™×¡×” ×—×–×¨×” ×”×‘×™×ª×”.", highlight: "×˜×™×•×œ ×–×¨×™×—×”, ×™×•×’×” ×•× ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×”",
            schedule: [
              { hour: "05:00", place: "-", activity: "×˜×™×•×œ ×–×¨×™×—×” (Sunrise hike)" },
              { hour: "06:30", place: "××œ×•×Ÿ", activity: "×™×•×’×”" },
              { hour: "08:00 - 09:00", place: "-", activity: "××¨×•×—×ª ×‘×•×§×¨" },
              { hour: "09:30 - 13:30", place: "-", activity: "-" },
              { hour: "13:30 - 16:30", place: "-", activity: "×× ×•×—×” ×•×§× ×™×•×ª (Relax, shopping)" },
              { hour: "16:30", place: "-", activity: "× ×¡×™×¢×” ×œ×©×“×” ×”×ª×¢×•×¤×” (Drive to airport)" }
            ]
          }
        ]
      }
    },
    essentials: {
      title: '××™×“×¢ ×—×©×•×‘ - ×˜×•×‘ ×œ×“×¢×ª', subtitle: '×›×œ ××” ×©×¦×¨×™×š ×œ×“×¢×ª ×œ×¤× ×™ ×©××•×¨×–×™× ××–×•×•×“×”.', categories: [
        { title: "×•×™×–×” (ETA)", items: ["×™×©×¨××œ×™× ×—×™×™×‘×™× ×•×™×–×” ××œ×§×˜×¨×•× ×™×ª (× ×™×ª×Ÿ ×œ×”× ×¤×™×§ ×‘×—×™× × ×“×¨×š ×”××ª×¨ ×”×¨×©××™ eta.gov.lk, ××• ×‘×ª×©×œ×•× ×“×¨×š ×¡×•×›× ×™× ×œ×”× ×¤×§×” × ×•×—×” ×™×•×ª×¨)", "×“×¨×›×•×Ÿ ×‘×ª×•×§×£ ×œ-6 ×—×•×“×©×™× ×œ×¤×—×•×ª"] },
        { title: "×›×¡×£ ×•××˜×‘×¢", items: ["××˜×‘×¢: ×¨×•×¤×™ ×¡×¨×™-×œ× ×§×™ (LKR)", "×œ×”×‘×™× ×“×•×œ×¨×™× ×œ×—×™×¨×•×, ×”×¨×‘×” ×¤×¢××™× ×–×” × ×•×—.", "××•××œ×¥ ×œ×”×¦×˜×™×™×“ ×‘××–×•××Ÿ ××›×™×•×•×Ÿ ×©×œ× ×›×œ ××§×•× ××§×‘×œ ××©×¨××™. × ×™×ª×Ÿ ×œ×”×•×¦×™× ×›×¡×£ ×‘×§×œ×•×ª ×‘×›×¡×¤×•××˜×™× ××§×•××™×™×."] },
        { title: "×—×©××œ", items: ["××ª×— 230V. ×‘×¨×•×‘ ×”××§×•××•×ª ×©×§×¢×™× ×™×©×¨××œ×™× (2 ×¤×™× ×™×) ×¢×•×‘×“×™× ×œ×œ× ×‘×¢×™×”.", "×¢×‘×•×¨ ×ª×§×¢×™× ×××¨×™×§××™× × ×“×¨×© ××ª××."] },
        { title: "×‘×™×’×•×“", items: ["×‘×’×“×™× × ×•×—×™× ×œ×˜×™×•×œ×™×", "×‘×’×“×™× × ×•×—×™× ×œ×”×œ×™×›×” ×‘×¢×™×¨", "×‘×’×“×™ ×™×", "×¡× ×“×œ×™× ×•× ×¢×œ×™ ×”×œ×™×›×” ×œ×˜×™×•×œ×™×"] },
        { title: "××•×›×œ ×•×›×©×¨×•×ª", items: ["×”××™×¨×•×— ×©×œ× ×• ×”×•× ×¢×œ ×‘×¡×™×¡ 3 ××¨×•×—×•×ª ×‘×™×•× - ×× ×—× ×• ××¡×¤×§×™× ××¨×•×—×•×ª ×›×©×¨×•×ª ×œ××•×¨×š ×›×œ ×”×˜×™×•×œ.", "×‘×ª×™ ×—×‘\\\"×“: ×§×•×œ×•××‘×•, ××œ×”"] }
      ]
    },
    discovery: {
      title: '××’×œ×™× ××ª ×¡×¨×™ ×œ× ×§×”', subtitle: '×§×¦×ª ×¨×§×¢ ×•×”×™×¡×˜×•×¨×™×” ×©×™×¢×©×• ×œ×›× ×—×©×§ ×œ××¨×•×–.', articles: [
        { title: "××œ×” (Ella): ×‘×™×Ÿ ×”×”×¨×™×", text: "×¢×™×™×¨×” ×”×¨×¨×™×ª ×§×¡×•××” ××•×§×¤×ª ××˜×¢×™ ×ª×”, ××¤×œ×™× ×•× ×•×¤×™× ×™×¨×•×§×™× ××™× ×¡×•×¤×™×™×." },
        { title: "×ª×” ×¦×™×™×œ×•× ×™: ×”×–×”×‘ ×”×™×¨×•×§", text: "×¡×¨×™ ×œ× ×§×” ×”×™× ××¢×¦××ª ×ª×” ×¢×•×œ××™×ª. × ×œ××“ ××™×š ×”×§×œ×™××˜ ×”×§×¨×™×¨ ××™×™×¦×¨ ××ª ×”×˜×¢× ×”×›×œ ×›×š ××™×•×—×“." },
        { title: "×¤×¡×™×§×•×“×”: ×©××© ×•×©×œ×•×•×”", text: "××—×“ ××”×—×•×¤×™× ×”×™×¤×™× ×‘×¢×•×œ× ×¢× ××•×•×™×¨×” ×¨×’×•×¢×”, ×œ×’×•× ×•×ª ×•× ×•×¤×™× ××¨×”×™×‘×™×." },
        { title: "×¡×¤××¨×™ ×•×—×™×•×ª ×‘×¨", text: "×¤×™×œ×™×, ×ª× ×™× ×™×, ×¦×™×¤×•×¨×™× × ×“×™×¨×•×ª ×•××¤×™×œ×• × ××¨×™×. ×¡×¨×™ ×œ× ×§×” ×”×™× ×’×Ÿ ×¢×“×Ÿ ×œ×—×•×‘×‘×™ ×˜×‘×¢." }
      ]
    },
    about: { 
      title: '×”×¡×™×¤×•×¨ ×©×œ× ×•', 
      p1: '××– × ×¢×™× ×œ×”×›×™×¨! ×× ×—× ×• ××™×œ, ×¢×œ×™×–×” ×•× ×¢××™ :) ×‘×§×™×¥ 2025, × ×¤×’×©× ×• ×‘×¡×¨×™ ×œ× ×§×” ×œ×§×¨××ª ×¡×•×£ ×™×¨×— ×”×“×‘×© ×”××¨×•×š ×©×œ ××™×œ ×•×¢×œ×™×–×” ×‘××–×¨×—. ××œ×” ×”×™×• 10 ×™××™× ×§×¡×•××™× ×©×œ ×˜×‘×¢, ×’×œ×™×©×”, ×—×•×¤×™×, × ×•×¤×™× ×•××œ×•× ×•×ª ×¤×©×•×˜ ××¦×•×™× ×™× (×—×•×¥ ×××—×“, ××‘×œ ×”×™×™× ×• ×¦×¨×™×›×™× ××©×”×• ×œ×§×˜×¨ ×¢×œ×™×• ×§×¦×ª).', 
      p2: '×›×©×—×–×¨× ×• ×”×‘×™×ª×”, ×¢×œ×” ×œ×™ (×œ× ×¢××™) ×¨×¢×™×•×Ÿ. ×œ××” ×œ× ×œ×”×‘×™× ××ª ×”×—×•×•×™×” ×”××˜×•×¨×¤×ª ×”×–×• ×©×œ "×˜×™×•×œ ×œ××–×¨×—", ×©×œ×’××¨×™ ××©× ×” ×—×™×™×, ×’× ×œ×××™××”×•×ª ×•×¡×‘×ª×•×ª? ×”×¨×™ ×›×œ ×›×š ×”×¨×‘×” ×¦×¢×™×¨×™× ×™×©×¨××œ×™× × ×•×¡×¢×™× ×œ×—×œ×§ ×”×–×” ×©×œ ×”×¢×•×œ× ××—×¨×™ ×”×¦×‘×, × ×•×©××™× ××ª ×”×ª×¨×‘×•×ª, ×¢×•×©×™× ×“×‘×¨×™× ×©×‘×—×™×™× ×œ× ×”×™×• ×¢×•×©×™× ×‘×‘×™×ª ×•×—×•×–×¨×™× ×¢× ×¤×¨×¡×¤×§×˜×™×‘×” ×—×“×©×” ×œ×’××¨×™. ×× ×—× ×• ×‘×××ª ××××™× ×™× ×©×œ×›×œ ××—×ª ××’×™×¢×” ×”×”×–×“×× ×•×ª ×”×–×•. (×‘×¢×¦×, ×× ×—× ×• ×—×•×©×‘×™× ×©×›×•×œ× ×¦×¨×™×›×™× ××ª ×–×”, ××‘×œ × ×“×‘×¨ ×¢×œ ×–×” ×›×‘×¨ ×›×©× ×™×¤×’×©...)\\n\\n×× ×—× ×• ×œ× ×× ×©×™ ××›×™×¨×•×ª, ×× ×—× ×• ×œ× ×¡×•×›× ×•×ª × ×¡×™×¢×•×ª ×•×× ×—× ×• ×œ× ×¢×•×‘×“×™× ×¢× ×©×•× ×—×‘×¨×” ×¢× ×§×™×ª. ×× ×—× ×• ×¤×©×•×˜ ×©×œ×•×©×” ×× ×©×™× ×©×”×ª××”×‘×• ×‘×›×œ ××” ×©×™×© ×œ×¡×¨×™ ×œ× ×§×” ×œ×”×¦×™×¢, ×•×¨×•×¦×™× ×œ×ª×ª ×œ×›×Ÿ ××ª ×”×”×–×“×× ×•×ª ×œ×—×•×•×ª ××ª ×–×” ×™×—×“ ××™×ª× ×•.', 
      p3: '×›×œ ××—×“ ×××™×ª× ×• ××‘×™× ××©×”×• ×§×¦×ª ××—×¨ ×œ×”×¨×¤×ª×§×” ×©×œ× ×•. ×× ×™, × ×¢××™, ××”×™×” ××™×ª×›×Ÿ ×œ×›×œ ××•×¨×š ×”×“×¨×š, ××“××’ ×©×›×•×œ× ×• × ×”× ×•×ª ××›×œ ×¨×’×¢ ×•××”×™×” ×–××™× ×” ×œ×›×œ ×©××œ×”. ××™×œ ×•×¢×œ×™×–×”, ×©×”× ×’× ××“×¨×™×›×™ ×™×•×’×” ××•×¡××›×™× ×•×’× ×‘×©×œ× ×™× × ×”×“×¨×™×, ×™×©×’×™×—×• ×¢×œ ×”××˜×‘×— ×™×—×“ ×¢× ×”×¦×•×•×ª ×”××§×•××™ ×›×“×™ ×œ×•×•×“× ×©×™×© ×œ× ×• ×›×©×¨×•×ª ××œ××”. ×”× ×™×“××’×• ×©×›×•×œ× ×• ××•×›×œ×•×ª ×˜×•×‘ ×•××¨×’×™×©×•×ª ×‘××™×˜×‘× ×•. ×—×•×¥ ××–×”, ×™×œ×•×•×” ××•×ª× ×• ××“×¨×™×š ×•× ×”×’ ××§×•××™, ×’× ×›×“×™ ×©× ×ª× ×™×™×“ ×‘× ×•×—×•×ª ×•×’× ×›×“×™ ×©× ×›×™×¨ ×§×¦×ª ×™×•×ª×¨ ××§×¨×•×‘ ××ª ×”×ª×¨×‘×•×ª ×”××§×•××™×ª ×”××¨×ª×§×ª.', 
      team: { eyal: '×¢×œ×™×–×” ×•××™×œ', naomi: '× ×¢××™', guide: '××“×¨×™×š ××§×•××™' },
      contact: '×¦×¨×• ×§×©×¨:\\n××™×œ: 054-...\\n× ×¢××™: 054-...'
    },
    register: { 
      title: '×©×¨×™×™× ×• ××ª ×”××§×•× ×©×œ×›×Ÿ', subtitle: '××œ××• ×¤×¨×˜×™× ×•× ×—×–×•×¨ ××œ×™×›×.', contact_wa: '×©××œ×•×ª? ×“×‘×¨×• ×¢× ××™×œ', contact_email: '××• ×©×œ×—×• ××™×™×œ', details: ["××•×’×‘×œ ×œ-16 ××©×ª×ª×¤×•×ª", "××§×“××” ×©×œ 1,000 ×©×´×— ×œ×”×‘×˜×—×ª ××§×•×", "××“×™× ×™×•×ª ×‘×™×˜×•×œ×™× ×”×•×’× ×ª"], 
      form: { name: '×©× ××œ×', phone: '×˜×œ×¤×•×Ÿ', email: '××™××™×™×œ', guests: '××¡×¤×¨ ××©×ª×ª×¤×™×', notes: '×”×¢×¨×•×ª', submit: '×©×œ×™×—×ª ×‘×§×©×ª ×”×¨×©××”', success_title: '××™×–×” ×›×™×£, × ×¨×©××ª×Ÿ ×‘×”×¦×œ×—×”! ğŸ‰ğŸ’ƒ', success_desc: '×× ×—× ×• ×¡×•×¤×¨ ××ª×¨×’×©×™× ×œ×§×¨××ª ×”××¡×¢ ×”××©×•×ª×£ ×©×œ× ×•! × ×™×¦×•×¨ ×§×©×¨ ×‘×”×§×“× ×œ×”×©×œ××ª ×”×¤×¨×˜×™×.', success_btn: '×©×œ×— ×‘×§×©×” × ×•×¡×¤×ª', error: '××™×¨×¢×” ×©×’×™××” ×‘×©×œ×™×—×ª ×”×˜×•×¤×¡. ×× × × ×¡×” ×©×•×‘ ××• ×¦×•×¨ ×§×©×¨ ×‘×•×•××˜×¡××¤.', submitting: '×©×•×œ×—...' }
    }
  },
  en: {
    nav: { home: 'Home', itinerary: 'Itinerary', essentials: 'Good to Know', discovery: 'Gallery', about: 'Our Story', register: 'Join Us', toggle: '×¢×‘×•×¨ ×œ×¢×‘×¨×™×ª' },
    hero: { 
      title: 'Savtot in Sri Lanka\\n2027', 
      subtitle: 'From stunning waterfalls and green tea plantations, to natural infinity pools and the most beautiful beaches.\\nA special and unforgettable experience we organized especially for you, a woman looking to experience a bit of a "post-army trip", but at a relaxed pace and with all the indulgences of an organized tour.',
      tagline: 'THE TRIP OF A LIFETIME',
      cta_plan: 'See the Plan',
      cta_discover: 'Experience the magic',
      kosher: 'The trip is fully Kosher.',
      yoga: 'Includes daily Yoga sessions.',
      winter_trip: 'Winter Journey: February 15-24',
      dates_disclaimer: '* Exact dates will be published later.'
    },
    features: { 
      title: 'More than just a trip', 
      f3_title: 'Fully kosher', 
      f3_desc: 'We insist on fresh, local ingredients. A local team of chefs will cook for us, with one of us (from the Israeli team) closely supervising to ensure everything is strictly kosher.',
      f2_title: 'Authentic culture', 
      f2_desc: 'From safaris to tea plantations to sunrise hikes, you will get the chance to see the real Sri Lanka',
      f1_title: 'Wellness & Yoga', 
      f1_desc: 'Gentle yoga sessions at sunrise or sunset, for all levels to stretch and calm the body and mind'
    },
    gallery: {
      title: 'Experience the magic',
      desc: 'From stunning waterfalls and green tea plantations, to natural infinity pools and the most beautiful beaches there are - this is our opportunity to experience the real, authentic Sri Lanka.',
      cta: 'More info / Save your spot'
    },
    itinerary: {
      title: 'Your fully planned adventure', subtitle: 'A journey of discovery and relaxation',
      headers: { hour: 'Time', place: 'Location', activity: 'Activity' },
      summer: {
        days: [
          { day: "1", title: "Arriving in Sri Lanka", desc: "The highlight of the day - an especially pampering massage in Sigiriya, to get into the vibe.", highlight: "Pampering Massage in Sigiriya", 
            schedule: [
              { hour: "-", place: "Israel", activity: "Flight" },
              { hour: "-", place: "Colombo", activity: "Bus ride to Sigiriya" },
              { hour: "-", place: "Sigiriya", activity: "Room assignment & Settling in" },
              { hour: "-", place: "Sigiriya", activity: "Dinner" },
              { hour: "-", place: "Sigiriya", activity: "Pampering massage" }
            ]
          },
          { day: "2", title: "Lion Rock & Safari", desc: "Early wake-up for an exciting climb, an authentic village tour, and an afternoon safari.", highlight: "Lion's Rock & Elephant Safari", 
            schedule: [
              { hour: "05:00", place: "Sigiriya Rock", activity: "Climb & Sunrise" },
              { hour: "08:00 - 09:00", place: "Hotel in Sigiriya", activity: "Breakfast" },
              { hour: "10:00 - 15:00", place: "Local Village", activity: "Authentic Village Tour" },
              { hour: "15:00 - 16:00", place: "Hotel", activity: "Rest" },
              { hour: "16:00 - 18:00", place: "Safari", activity: "Safari Tour" },
              { hour: "18:30 - 19:30", place: "Hotel in Sigiriya", activity: "Dinner" },
              { hour: "20:30", place: "Hotel", activity: "Free Time / Recovery" }
            ]
          },
          { day: "3", title: "Kitulgala Extreme", desc: "An adrenaline-filled day with rafting and canyoning, moving on to the cool Nuwara Eliya.", highlight: "Rafting & Canyoning", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Drive" },
              { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
              { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning" },
              { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Rainforest Walk" },
              { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Drive" },
              { hour: "19:30 - 20:30", place: "Hotel in Nuwara Eliya", activity: "Dinner" }
            ]
          },
          { day: "4", title: "Tea, Trains & Ella", desc: "Sri Lanka's green gold and the most beautiful train ride in the world on the way to the town of Ella.", highlight: "Train Ride to Ella", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 14:30", place: "Tea Plantations", activity: "Tea Plantations Tour" },
              { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train ride to Ella" },
              { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to Hotel" },
              { hour: "19:30 - 20:30", place: "Hotel in Ella", activity: "Dinner" }
            ]
          },
          { day: "5", title: "Waterfalls & Adrenaline", desc: "Breathtaking views at Diyaluma Falls and ziplining over the treetops.", highlight: "Diyaluma Falls & Zipline", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Ella", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
              { hour: "15:30 - 17:00", place: "Ella", activity: "Ziplining" },
              { hour: "15:30 - 17:00", place: "Ella", activity: "Walking around & Shopping" },
              { hour: "17:30 - 20:30", place: "Passikudah", activity: "Drive to Passikudah" },
              { hour: "19:30 - 20:30", place: "Hotel in Passikudah", activity: "Dinner" }
            ]
          },
          { day: "6", title: "Beach Life", desc: "Arriving at the stunning Passikudah and settling in.", highlight: "Shabbat in Passikudah", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 12:00", place: "Pottuvil", activity: "Morning Lagoon SUP" },
              { hour: "13:30 - 15:30", place: "Passikudah", activity: "Surf Lesson / Beach Time" },
              { hour: "15:30 - 17:00", place: "Hotel", activity: "Shabbat Preparations" },
              { hour: "17:15", place: "Hotel", activity: "Shabbat Begins" },
              { hour: "18:30 - 19:30", place: "Hotel in Passikudah", activity: "Shabbat Dinner" }
            ]
          },
          { day: "7", title: "Shabbat Rest", desc: "A calm day of rest in Passikudah, Shabbat lite yoga session, time to enjoy the atmosphere and recharge your batteries.", highlight: "Rest & Freedom", 
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30", place: "Hotel", activity: "Shabbat Lite Yoga" },
              { hour: "18:30", place: "Passikudah", activity: "End of Shabbat" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "8", title: "Trincomalee", desc: "Our main experience today will be sailing in search of whales and dolphins, followed by fun snorkeling together.", highlight: "Whale Watching & Snorkeling", 
            schedule: [
              { hour: "05:00", place: "-", activity: "Sunrise Hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 12:30", place: "Trincomalee", activity: "Sailing & Snorkeling / Shopping" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "9", title: "Final Beach Time", desc: "Take advantage of every moment of sun, waves, and sand on the beach before parting.", highlight: "Sea & Sun", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 17:00", place: "Passikudah", activity: "Free Beach Time / Final Shopping" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          }
        ]
      },
      winter: {
        days: [
          { day: "1", title: "Arriving in Sri Lanka", desc: "Highlight of the day - an especially pampering massage at the hotel in Colombo/Negombo to start our journey in a relaxed atmosphere.", highlight: "Pampering massage at the hotel",
            schedule: [
              { hour: "-", place: "Israel", activity: "Flight" },
              { hour: "-", place: "Colombo", activity: "Bus to Colombo/Negombo" },
              { hour: "-", place: "Hotel", activity: "Check-in to rooms" },
              { hour: "-", place: "Hotel", activity: "Dinner" },
              { hour: "-", place: "Hotel", activity: "Pampering massage" }
            ]
          },
          { day: "2", title: "Kitulgala Extreme", desc: "Early wake-up for a sunrise hike, yoga at the hotel, and driving to Kitulgala for exciting rafting and canyoning in the rainforest, before moving to Nuwara Eliya.", highlight: "Rafting and canyoning in the rainforest",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Hotel yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Drive to Kitulgala" },
              { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
              { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning and Rain forest walk" },
              { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Drive to Nuwara Eliya" },
              { hour: "19:30 - 20:30", place: "Hotel in Nuwara Eliya", activity: "Dinner at hotel" }
            ]
          },
          { day: "3", title: "Tea, Trains & Ella", desc: "Sunrise hike and morning yoga, an interesting tour of Ceylon tea plantations, and boarding the most scenic train in the world to Ella.", highlight: "Scenic train to Ella and tea plantation",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 14:30", place: "Tea Plantations", activity: "Tea plantation tour" },
              { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train to Ella" },
              { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to hotel" },
              { hour: "19:30 - 20:30", place: "Hotel in Ella", activity: "Dinner" }
            ]
          },
          { day: "4", title: "Waterfalls & Ziplining", desc: "Sunrise hike and yoga, visiting the spectacular Diyaluma Falls, flying over the trees on the Flying Ravana zipline, shopping in Ella, followed by a drive and dinner.", highlight: "Diyaluma Falls & Flying Ravana zipline",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
              { hour: "14:00 - 17:00", place: "Ella", activity: "Omega zipline and Shops" },
              { hour: "17:30 - 20:30", place: "Hotel", activity: "Drive" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "5", title: "Elephant Safari & Sunset SUP", desc: "Breakfast, driving south for an incredible elephant safari in Udawalawe, and enjoying a relaxing stand-up paddleboarding (SUP) session at sunset, finished with a massage.", highlight: "Udawalawe Elephant Safari and sunset SUP",
            schedule: [
              { hour: "07:15 - 08:00", place: "Hotel", activity: "Breakfast" },
              { hour: "08:30 - 11:00", place: "South", activity: "Drive south" },
              { hour: "11:30 - 14:30", place: "Udawalawe", activity: "Udawalawe Elephant safari" },
              { hour: "18:30 - 19:30", place: "Beach", activity: "Sunset SUP" },
              { hour: "20:30", place: "Hotel", activity: "Massage" }
            ]
          },
          { day: "6", title: "Beach & Shabbat Preparations", desc: "Breakfast, incredible snorkeling with sea turtles, relaxing beach and shopping time, and getting ready for Shabbat.", highlight: "Snorkeling with sea turtles and beach time",
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "10:30 - 12:00", place: "Beach", activity: "Snorkeling with turtles" },
              { hour: "13:30 - 15:30", place: "Beach", activity: "Beach & shopping time" },
              { hour: "17:15", place: "Hotel", activity: "Shabbat preparations" }
            ]
          },
          { day: "7", title: "Shabbat Rest", desc: "Shabbat lite yoga session, breakfast, and a peaceful Shabbat rest. In the evening, Havdalah (Motzash) and dinner.", highlight: "Peaceful Shabbat and lite yoga",
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30", place: "Hotel", activity: "Shabbat Lite Yoga" },
              { hour: "18:30", place: "Hotel", activity: "Motzash (Havdalah)" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "8", title: "Whale Watching & South Coast", desc: "Early whale watching, morning yoga, and breakfast. Enjoy a surf session and shopping, followed by a transfer to Talpe for dinner and overnight.", highlight: "Whale watching and surfing",
            schedule: [
              { hour: "05:00", place: "Ocean", activity: "Whale watching" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 12:30", place: "Beach", activity: "Surf and shops" },
              { hour: "17:30 - 18:30", place: "Talpe", activity: "Transfer & overnight in Talpe" },
              { hour: "19:00 - 20:00", place: "Hotel in Talpe", activity: "Dinner" }
            ]
          },
          { day: "9", title: "Final Day & Flight", desc: "Sunrise hike, morning yoga, and breakfast, followed by free time for relaxing or shopping, and then the drive to the airport for the flight back.", highlight: "Sunrise hike, yoga and flight home",
            schedule: [
              { hour: "05:00", place: "-", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "-", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "-", activity: "-" },
              { hour: "13:30 - 16:30", place: "-", activity: "Relax, shopping" },
              { hour: "16:30", place: "-", activity: "Drive to airport" }
            ]
          }
        ]
      }
    },
    essentials: { 
      title: 'Good to know', subtitle: 'Everything you need to know before packing your bags.', 
      categories: [
        { title: "Clothing", items: ["Comfortable clothes for hiking", "Comfortable clothes for city walking", "Bathing suits", "Sandals and hiking shoes"] },
        { title: "Visa (ETA)", items: ["Israelis need an electronic visa/ETA (can be issued for free on the official site eta.gov.lk, or for a fee through agents for easier handling)", "Passport valid for 6 months"] },
        { title: "Money & Currency", items: ["Currency: Sri Lankan Rupee (LKR)", "Bring USD for emergencies, often it is very convenient.", "It is recommended to have cash as not all places accept credit cards. Cash can be easily withdrawn from local ATMs."] },
        { title: "Electricity", items: ["Voltage: 230V. Israeli plugs (2 pins) work in most places without an issue.", "American plugs require an adapter."] },
        { title: "Kosher Food", items: ["Our hosting is on a 3-meals-a-day basis - we provide kosher meals throughout the trip.", "Chabad Houses: Colombo, Ella"] }
      ]
    },
    discovery: { title: 'Discovery', subtitle: 'Get excited about the destination.', articles: [
        { title: "Ella: Mountain Bliss", text: "A magical mountain town surrounded by tea plantations, waterfalls, and endless green views." },
        { title: "Ceylon Tea", text: "Sri Lanka is a world tea power. We'll learn how the cool climate creates the perfect flavor." },
        { title: "Passikudah", text: "One of the most beautiful beaches in the world with a relaxed atmosphere, lagoons and spectacular views." },
        { title: "Safari & Wildlife", text: "Elephants, crocodiles, rare birds and even leopards. Sri Lanka is a paradise for nature lovers." }
      ]
    },
    about: { 
      title: 'Our Story', 
      p1: 'So nice to meet you! We are Eyal, Aliza and Naomi :) In the summer of 2025, we met in Sri Lanka towards the end of Eyal and Aliza\'s long honeymoon in the East. Those were 10 magical days of nature, surfing, beaches, landscapes and simply excellent hotels (except for one, but we needed something to complain about a little).', 
      p2: 'When we returned home, I (Naomi) had an idea. Why not bring this crazy, life-changing experience of a "trip to the East" to mothers and grandmothers as well? After all, so many young Israelis travel to this part of the world after the army, breathe the culture, do things they would never do at home and return with a completely new perspective. We truly believe that everyone deserves this opportunity. (Actually, we think everyone needs this, but we\'ll talk about that when we meet...).\\n\\nWe are not salespeople, we are not a travel agency and we don\'t work with any huge company. We are simply three people who fell in love with everything Sri Lanka has to offer, and want to give you the opportunity to experience it together with us.', 
      p3: 'Each of us brings something a little different to our adventure. I, Naomi, will be with you the whole way, making sure we all enjoy every moment and available for any question. Eyal and Aliza, who are both certified yoga instructors and great cooks, will oversee the kitchen along with the local staff to make sure we have full kashrut. They will ensure we all eat well and feel our best. Besides that, a local guide and driver will accompany us, both so we can get around comfortably and so we can get to know the fascinating local culture a little closer.', 
      team: { eyal: 'Aliza & Eyal', naomi: 'Naomi', guide: 'Local Guide' },
      contact: 'Contact us:\\nEyal: +972 ...\\nNaomi: +972 ...'
    },
    register: { 
      title: 'Secure Your Spot', subtitle: 'Fill out the details below, and we will contact you.', contact_wa: 'Contact Eyal', contact_email: 'Or Email Us', details: ["Limited to 16 participants", "1,000 ILS deposit to secure spot", "Fair refund policy"], 
      form: { name: 'Full Name', phone: 'Phone', email: 'Email', guests: 'Number of Travelers', notes: 'Special Requests', submit: 'Send Request', success_title: 'Yay, you are successfully registered! ğŸ‰ğŸ’ƒ', success_desc: 'We are super excited for our journey together! We will get in touch shortly to finalize the details.', success_btn: 'Send another request', error: 'Error sending form. Please try again or contact us via WhatsApp.', submitting: 'Sending...' }
    }
  }
};

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState('he');
  const [siteContent, setSiteContent] = useState(defaultContentData);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/content', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => setSiteContent(data))
      .catch(e => console.error('Failed to load content:', e));
      
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const handleUpdateContent = useCallback((path, newValue) => {
    setSiteContent(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = newValue;
      return newData;
    });
  }, []);

  const t = useMemo(() => {
    const base = defaultContentData[lang] || defaultContentData.he;
    const live = siteContent?.[lang];
    
    if (!live) return base;
    
    return {
      ...base,
      ...live,
      nav: { ...base.nav, ...live.nav },
      hero: { ...base.hero, ...live.hero },
      features: { ...base.features, ...live.features },
      gallery: { ...base.gallery, ...live.gallery },
      itinerary: { 
        ...base.itinerary, 
        ...live.itinerary,
        summer: { ...base.itinerary.summer, ...live.itinerary?.summer },
        winter: { ...base.itinerary.winter, ...live.itinerary?.winter }
      },
      essentials: { ...base.essentials, ...live.essentials },
      discovery: { ...base.discovery, ...live.discovery },
      about: { ...base.about, ...live.about },
      register: { ...base.register, ...live.register }
    };
  }, [siteContent, lang]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'he' ? 'en' : 'he');
  }, []);

  useEffect(() => {
    document.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <SiteContext.Provider value={{ lang, t, toggleLanguage, handleUpdateContent, isAdmin, setIsAdmin }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
`;

fs.writeFileSync('contexts/SiteContext.jsx', newContext);
console.log('SiteContext.jsx fixed and updated successfully.');

```

