'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalState {
    isOpen: boolean;
    content?: ReactNode;
}

interface ModalContextType {
    modal: ModalState;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [modal, setModal] = useState<ModalState>({ isOpen: false });

    const openModal = (content: ReactNode) => {
        setModal({ isOpen: true, content });
    };

    const closeModal = () => {
        setModal({ isOpen: false, content: undefined });
    };

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
        {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within ModalProvider');
    }
    return context;
}
