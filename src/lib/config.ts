// ── "Join the Movement" config ──────────────────────────────────────────
// Fill these in once the Google Form + its response Sheet exist. Until
// then both features degrade gracefully (see src/lib/members.ts and
// src/components/JoinFormButton.tsx).

/** TODO: paste the Google Form's public share URL here. */
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeT3M0VLZHSw1LuG0qq9pxZoPGBcTjrQD6eAvTvlqTNv5xvBA/viewform'

/**
 * TODO: paste the CSV URL from the Form's response Sheet:
 * File → Share → Publish to web → select the responses sheet → CSV → Publish.
 * It looks like: https://docs.google.com/spreadsheets/d/e/<id>/pub?output=csv
 */
export const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1O2-8Pq-cAgS1MQlLmp2HwvZw_DFtY9VgUX3kFFjv-D0/edit?usp=sharing'

/** How often (seconds) to re-fetch the sheet for the member count. */
export const MEMBER_COUNT_REVALIDATE_SECONDS = 900 // 15 min
