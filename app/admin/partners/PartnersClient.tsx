"use client";

import { useState, useTransition } from "react";
import { saveHeadingAction, addPartnerAction, updatePartnerAction, deletePartnerAction } from "./actions";
import { Save, Plus, Trash2, Edit2, Upload, X, Check, Image as ImageIcon } from "lucide-react";

export default function PartnersClient({ initialData }: { initialData: { heading: string; partners: any[] } }) {
  const [heading, setHeading] = useState(initialData.heading || "");
  const [partners, setPartners] = useState(initialData.partners || []);
  const [isPending, startTransition] = useTransition();

  // Add Partner State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPartnerName, setNewPartnerName] = useState("");
  const [newPartnerLogo, setNewPartnerLogo] = useState("");
  const [uploadingAdd, setUploadingAdd] = useState(false);

  // Edit Partner State
  const [editingPartner, setEditingPartner] = useState<any | null>(null);
  const [editName, setEditName] = useState("");
  const [editLogo, setEditLogo] = useState("");
  const [uploadingEdit, setUploadingEdit] = useState(false);

  // File Upload Helper
  const handleFileUpload = async (file: File, setUrlCallback: (url: string) => void, setUploading: (b: boolean) => void) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setUrlCallback(data.url);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (err) {
      alert("Error uploading file");
    } finally {
      setUploading(false);
    }
  };

  // Submit Heading
  const handleSaveHeading = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", heading);
    startTransition(async () => {
      await saveHeadingAction(formData);
    });
  };

  // Add Partner
  const handleAddPartner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartnerName || !newPartnerLogo) return;

    const formData = new FormData();
    formData.append("name", newPartnerName);
    formData.append("logo_url", newPartnerLogo);

    startTransition(async () => {
      await addPartnerAction(formData);
      setShowAddModal(false);
      setNewPartnerName("");
      setNewPartnerLogo("");
    });
  };

  // Open Edit Modal
  const openEditModal = (partner: any) => {
    setEditingPartner(partner);
    setEditName(partner.name);
    setEditLogo(partner.logo_url);
  };

  // Save Edit Partner
  const handleUpdatePartner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPartner || !editName || !editLogo) return;

    const formData = new FormData();
    formData.append("id", editingPartner.id.toString());
    formData.append("name", editName);
    formData.append("logo_url", editLogo);

    startTransition(async () => {
      await updatePartnerAction(formData);
      setEditingPartner(null);
    });
  };

  // Delete Partner
  const handleDeletePartner = async (id: number, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}" logo from Certified Partners?`)) return;

    startTransition(async () => {
      await deletePartnerAction(id);
    });
  };

  return (
    <div className="space-y-8">
      {/* 1. SECTION HEADING SETTINGS */}
      <div className="bg-brand-black p-6 rounded-2xl border border-white/5 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Save size={20} className="text-brand-yellow" />
          Section Banner Title
        </h2>
        <form onSubmit={handleSaveHeading} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="e.g. We have over 150+ Certified Partners"
            required
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-brand-yellow text-brand-black px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
          >
            <Check size={18} />
            {isPending ? "Saving..." : "Save Title"}
          </button>
        </form>
      </div>

      {/* 2. PARTNERS LOGOS GRID */}
      <div className="bg-brand-black p-6 rounded-2xl border border-white/5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ImageIcon size={20} className="text-brand-yellow" />
              Partner Logos ({initialData.partners?.length || 0})
            </h2>
            <p className="text-xs text-white/50 mt-1">These logos appear in the scrolling yellow banner on the homepage.</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-brand-yellow text-brand-black px-5 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <Plus size={18} />
            Add New Logo
          </button>
        </div>

        {initialData.partners?.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
            <p className="text-white/40 mb-4">No partner logos added yet.</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-brand-yellow/10 text-brand-yellow px-4 py-2 rounded-lg font-semibold hover:bg-brand-yellow/20"
            >
              Add First Partner Logo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {initialData.partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-brand-yellow/50 transition-all"
              >
                {/* Yellow Preview Banner Header */}
                <div className="bg-brand-yellow p-4 h-24 flex items-center justify-center relative">
                  <img
                    src={partner.logo_url}
                    alt={partner.name}
                    className="max-h-12 max-w-[80%] object-contain drop-shadow-sm brightness-0"
                    onError={(e: any) => {
                      // Fallback if image path fails
                      e.target.src = partner.logo_url;
                    }}
                  />
                </div>

                {/* Footer details */}
                <div className="p-4 flex items-center justify-between border-t border-white/5">
                  <div>
                    <h3 className="font-bold text-white text-sm">{partner.name}</h3>
                    <p className="text-[10px] text-white/40 truncate max-w-[120px]">{partner.logo_url}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openEditModal(partner)}
                      className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                      title="Edit Logo"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeletePartner(partner.id, partner.name)}
                      className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Delete Logo"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ADD PARTNER MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-brand-black border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">Add New Partner Logo</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-white/50 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddPartner} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Partner Name</label>
                <input
                  type="text"
                  value={newPartnerName}
                  onChange={(e) => setNewPartnerName(e.target.value)}
                  placeholder="e.g. Michelin"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-yellow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Upload Logo Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0], setNewPartnerLogo, setUploadingAdd);
                    }
                  }}
                  className="w-full text-xs text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-brand-yellow file:text-brand-black hover:file:bg-white file:cursor-pointer cursor-pointer mb-2"
                />
                {uploadingAdd && <p className="text-xs text-brand-yellow mb-2">Uploading file...</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Logo URL (or Image Path)</label>
                <input
                  type="text"
                  value={newPartnerLogo}
                  onChange={(e) => setNewPartnerLogo(e.target.value)}
                  placeholder="/images/partners/logo.png"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-yellow"
                />
              </div>

              {/* Logo Preview */}
              {newPartnerLogo && (
                <div className="bg-brand-yellow p-3 rounded-lg flex items-center justify-center h-20">
                  <img
                    src={newPartnerLogo}
                    alt="Preview"
                    className="max-h-12 object-contain brightness-0"
                  />
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending || uploadingAdd}
                  className="bg-brand-yellow text-brand-black px-5 py-2 text-sm rounded-lg font-bold hover:bg-white disabled:opacity-50"
                >
                  {isPending ? "Adding..." : "Add Logo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT PARTNER MODAL */}
      {editingPartner && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-brand-black border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">Edit Partner Logo</h3>
              <button
                onClick={() => setEditingPartner(null)}
                className="text-white/50 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUpdatePartner} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Partner Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="e.g. Goodyear"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-yellow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Upload New Logo Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0], setEditLogo, setUploadingEdit);
                    }
                  }}
                  className="w-full text-xs text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-brand-yellow file:text-brand-black hover:file:bg-white file:cursor-pointer cursor-pointer mb-2"
                />
                {uploadingEdit && <p className="text-xs text-brand-yellow mb-2">Uploading file...</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Logo URL (or Image Path)</label>
                <input
                  type="text"
                  value={editLogo}
                  onChange={(e) => setEditLogo(e.target.value)}
                  placeholder="/images/partners/logo.png"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-yellow"
                />
              </div>

              {/* Logo Preview */}
              {editLogo && (
                <div className="bg-brand-yellow p-3 rounded-lg flex items-center justify-center h-20">
                  <img
                    src={editLogo}
                    alt="Preview"
                    className="max-h-12 object-contain brightness-0"
                  />
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingPartner(null)}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending || uploadingEdit}
                  className="bg-brand-yellow text-brand-black px-5 py-2 text-sm rounded-lg font-bold hover:bg-white disabled:opacity-50"
                >
                  {isPending ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
