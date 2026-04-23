'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, AlertCircle, Plus } from 'lucide-react';
import { IvGallerySectionEditor } from '@/components/cms/IvGallerySectionEditor';
import type { IvGallerySlide } from '@/lib/homeIvGalleryData';

interface Page {
  id: string;
  slug: string;
  title: string;
}

interface Section {
  id: string;
  section_key: string;
  title: string;
  content: any;
}

export default function CMSEditor() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch pages on load
  useEffect(() => {
    fetch('/api/cms/pages')
      .then(res => res.json())
      .then(data => {
        setPages(data.pages);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching pages:', err));
  }, []);

  // Fetch sections when a page is selected
  useEffect(() => {
    if (selectedPage) {
      setLoading(true);
      fetch(`/api/cms/sections?pageId=${selectedPage.id}`)
        .then(res => res.json())
        .then(data => {
          setSections(data.sections);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching sections:', err);
          setLoading(false);
        });
    }
  }, [selectedPage]);

  const handleContentChange = (sectionId: string, newContentString: string) => {
    setSections(prev => prev.map(s => {
      if (s.id === sectionId) {
        return { ...s, content: newContentString };
      }
      return s;
    }));
  };

  const handleGallerySlidesChange = (sectionId: string, slides: IvGallerySlide[]) => {
    setSections(prev =>
      prev.map(s => (s.id === sectionId ? { ...s, content: { slides } } : s))
    );
  };

  const handleAddIvGallerySection = async () => {
    if (!selectedPage) return;
    setSaving(true);
    setJsonError(null);
    try {
      const res = await fetch('/api/cms/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page_id: selectedPage.id,
          section_key: 'iv_gallery',
          title: 'Home IV Gallery',
          content: { slides: [] },
          display_order: 50,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create section');
      const refreshed = await fetch(`/api/cms/sections?pageId=${selectedPage.id}`).then(r => r.json());
      setSections(refreshed.sections);
    } catch (e: unknown) {
      setJsonError(e instanceof Error ? e.message : 'Failed to add gallery section');
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async (section: Section) => {
    setSaving(true);
    setJsonError(null);

    try {
      // Parse content if it's a string (from textarea)
      let parsedContent = section.content;
      if (typeof section.content === 'string') {
        parsedContent = JSON.parse(section.content);
      }

      const response = await fetch('/api/cms/sections', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: section.id,
          content: parsedContent
        })
      });

      if (!response.ok) throw new Error('Failed to save');

      // Refresh data
      const data = await response.json();
      setSections(prev => prev.map(s => s.id === section.id ? { ...s, content: data.section.content } : s));
      alert('Section updated successfully!');
    } catch (e: any) {
      console.error('Save error:', e);
      setJsonError(e.message === 'Unexpected token' ? 'Invalid JSON format' : 'Error saving content');
      alert('Failed to save content. Check JSON format.');
    } finally {
      setSaving(false);
    }
  };

  if (!pages) return <div className="p-8">Loading CMS...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
          <button
            onClick={() => router.push('/secure-access/admin')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar: Page List */}
          <div className="bg-white rounded-xl shadow-sm p-4 h-fit">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Pages</h2>
            <nav className="space-y-2">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => setSelectedPage(page)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedPage?.id === page.id
                      ? 'bg-teal-50 text-teal-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {page.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Area: Section Editor */}
          <div className="md:col-span-3">
            {selectedPage ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedPage.title}</h2>
                  <p className="text-gray-500 text-sm">Update content sections for this page.</p>
                  {selectedPage.slug === 'home' &&
                    !sections.some((s) => s.section_key === 'iv_gallery') && (
                      <div className="mt-4 rounded-lg border border-teal-200 bg-teal-50/80 p-4">
                        <p className="text-sm text-gray-700">
                          Manage the home page IV image carousel (uploads go to Supabase Storage).
                        </p>
                        <button
                          type="button"
                          onClick={handleAddIvGallerySection}
                          disabled={saving}
                          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50"
                        >
                          <Plus className="h-4 w-4" aria-hidden />
                          Add home IV gallery section
                        </button>
                      </div>
                    )}
                </div>

                {loading ? (
                  <div className="text-center py-12">Loading sections...</div>
                ) : (
                  sections.map((section) => (
                    <div key={section.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <span className="font-semibold text-gray-700 uppercase text-sm tracking-wider">
                          {section.section_key}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSave(section)}
                            disabled={saving}
                            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                          >
                            <Save size={16} />
                            {saving ? 'Saving...' : 'Save Changes'}
                          </button>
                        </div>
                      </div>
                      <div className="p-6">
                        {section.section_key === 'iv_gallery' ? (
                          <>
                            <IvGallerySectionEditor
                              section={section}
                              onSlidesChange={handleGallerySlidesChange}
                            />
                            <p className="mt-4 text-xs text-gray-400">
                              Saving stores <code className="rounded bg-gray-100 px-1">slides</code> in
                              this section. An empty list keeps the public site on its default
                              gallery until you add images and save.
                            </p>
                          </>
                        ) : (
                          <>
                            <label className="mb-2 block text-sm font-medium text-gray-600">
                              Content JSON
                            </label>
                            <textarea
                              rows={12}
                              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500"
                              value={
                                typeof section.content === 'string'
                                  ? section.content
                                  : JSON.stringify(section.content, null, 2)
                              }
                              onChange={(e) => handleContentChange(section.id, e.target.value)}
                            />
                            <p className="mt-2 text-xs text-gray-400">
                              Edit the JSON structure carefully. Changing keys may break the frontend
                              display.
                            </p>
                          </>
                        )}
                        {jsonError && (
                          <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                            <AlertCircle size={16} />
                            {jsonError}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center text-gray-500">
                Select a page from the sidebar to edit its content.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
