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
        className="fixed inset-0 backdrop-blur-sm transition-all duration-100"
        onClick={onRequestClose}
      />

      <div className="relative border rounded-lg shadow-lg w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
        <h2 className="text-lg font-semibold mb-2">
          Confirm Deletion
        </h2>
        <p className="text-sm mb-6">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onRequestClose}
            className="border px-2 py-1 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="border px-2 py-1 rounded-md text-red-600 border-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
