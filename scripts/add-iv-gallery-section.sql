-- Adds CMS section `iv_gallery` for the home page so admins can manage the IV carousel.
-- Run once in Supabase SQL Editor if you prefer not to use the "Add home IV gallery" button in CMS.

INSERT INTO page_sections (page_id, section_key, title, content, display_order)
SELECT id,
  'iv_gallery',
  'Home IV Gallery',
  '{"slides":[]}'::jsonb,
  50
FROM pages
WHERE slug = 'home'
  AND NOT EXISTS (
    SELECT 1
    FROM page_sections ps
    WHERE ps.page_id = pages.id
      AND ps.section_key = 'iv_gallery'
  );
