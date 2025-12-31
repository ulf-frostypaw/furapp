'use client';

import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    className?: string;
}

export function Modal({
    isOpen,
    onClose,
    title,
    children,
    className = '',
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <>
        {/* Overlay */}
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
        />

        {/* Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
            className={`bg-white rounded-lg shadow-lg max-w-md w-full ${className}`}
            onClick={(e) => e.stopPropagation()}
            >
            {/* Header */}
            {title && (
                <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition"
                >
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                </div>
            )}

            {/* Content */}
            <div className="px-6 py-4">{children}</div>
            </div>
        </div>
        </>
    );
}
