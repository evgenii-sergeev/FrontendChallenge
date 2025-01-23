import React from "react";

interface DeleteConfirmationProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-zinc-950/50 backdrop-blur-sm transition-all duration-100"
        onClick={onRequestClose}
      />

      <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
        <h2 className="text-lg font-semibold text-zinc-50 mb-2">
          Confirm Deletion
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onRequestClose}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:pointer-events-none disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:pointer-events-none disabled:opacity-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
