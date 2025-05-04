import React from "react";
import { X, ExternalLink } from "lucide-react";

interface ResumePopupProps {
  open: boolean;
  onClose: () => void;
  docUrl: string;
}

const ResumePopup: React.FC<ResumePopupProps> = ({ open, onClose, docUrl }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl relative animate-fade-in">
        <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-[#FFF9F6] rounded-t-lg">
          <span className="font-semibold text-base">Resume Preview</span>
          <div className="flex items-center gap-2">
            <a
              href={docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:bg-gray-100 rounded transition"
              title="Open in Google Docs"
            >
              <ExternalLink size={18} />
            </a>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded transition"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="p-0" style={{height: "70vh"}}>
          <iframe
            src={docUrl.replace("/edit", "/preview")}
            title="Resume Document"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100%", minWidth: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumePopup;