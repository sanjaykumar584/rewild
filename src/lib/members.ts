import { GOOGLE_SHEET_CSV_URL, MEMBER_COUNT_REVALIDATE_SECONDS } from './config'

/**
 * Fetches the published Google Sheet CSV and returns the number of form
 * responses (rows minus the header). Never throws — returns null for
 * "unknown" (unconfigured, fetch failed, or response doesn't look like CSV)
 * so callers can render a graceful fallback instead of 0/NaN.
 */
export async function getMemberCount(): Promise<number | null> {
  if (!GOOGLE_SHEET_CSV_URL) return null

  let fetchUrl = GOOGLE_SHEET_CSV_URL
  if (fetchUrl.includes('/edit')) {
    fetchUrl = fetchUrl.split('/edit')[0] + '/export?format=csv'
  }

  try {
    const res = await fetch(fetchUrl, {
      next: { revalidate: MEMBER_COUNT_REVALIDATE_SECONDS },
    })

    if (!res.ok) return null

    const contentType = res.headers.get('content-type') ?? ''
    const isCsv = contentType.includes('csv') || 
                  contentType.includes('octet-stream') || 
                  contentType.includes('binary')

    if (!isCsv) return null

    const csv = await res.text()
    const trimmed = csv.trimStart()
    if (trimmed.startsWith('<')) return null

    const rows = csv
      .split(/\r?\n/)
      .filter((line) => line.replace(/,/g, '').trim().length > 0) // drop blank/padding rows

    const count = rows.length - 1 // minus header row
    return Number.isFinite(count) && count > 0 ? count : 0
  } catch {
    return null
  }
}
