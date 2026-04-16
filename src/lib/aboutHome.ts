import { stripHtml } from "./html";

const DEFAULT_MAIN_PARAGRAPHS = [
  "At the heart of our mission is a genuine commitment to supporting individuals in their journey toward health and well-being. Whether you're recovering from physical exertion, dealing with jetlag, or feeling burnout, we offer treatments tailored to your needs. With our advanced facility and experienced, qualified nurses, you can feel confident in the care you receive.",
];

function htmlToPlainParagraphs(html: string): string[] {
  const normalized = html
    .replace(/<\/p>\s*<p[^>]*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/div>\s*<div[^>]*>/gi, "\n\n");
  const plain = stripHtml(normalized);
  const parts = plain.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return parts;
}

/** Main body copy for the home About section (plain text, no HTML tags). */
export function getHomeAboutMainParagraphs(aboutSummary: {
  content?: unknown;
}): string[] {
  const raw = aboutSummary?.content;
  if (raw == null) return DEFAULT_MAIN_PARAGRAPHS;
  if (Array.isArray(raw)) {
    const parts = raw.map((item) => stripHtml(String(item))).filter(Boolean);
    return parts.length ? parts : DEFAULT_MAIN_PARAGRAPHS;
  }
  if (typeof raw === "string") {
    const t = raw.trim();
    if (!t) return DEFAULT_MAIN_PARAGRAPHS;
    const fromHtml = htmlToPlainParagraphs(t);
    if (fromHtml.length) return fromHtml;
    const single = stripHtml(t);
    return single ? [single] : DEFAULT_MAIN_PARAGRAPHS;
  }
  return DEFAULT_MAIN_PARAGRAPHS;
}

export function getIvLeagueBlock(aboutSummary: {
  iv_league_url?: string;
  iv_league_lead?: string;
  iv_league_link_label?: string;
}): { url: string; lead: string; linkLabel: string } {
  return {
    url: aboutSummary.iv_league_url || "https://ivleaguedrips.com/",
    lead:
      aboutSummary.iv_league_lead || "We are an official licensee of",
    linkLabel: aboutSummary.iv_league_link_label || "IV League Drips",
  };
}
