'use client';

import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
import { FaTelegram } from "react-icons/fa6";


export type SignInDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

/** A container component for the sign in form and social login options. */
export function SignInDialog({ isOpen, onClose }: SignInDialogProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
        {/* Header */}
        <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Log In</h2>
            <p className="text-sm text-gray-600">
            New to Entail?&nbsp;
            <a
                href="/signup"
                className="text-blue-600 hover:text-blue-700 font-medium transition"
            >
                Sign up here!
            </a>
            </p>
        </div>

        {/* Sign In Form - Placeholder */}
        <div className="mb-6">
            <input placeholder="Enter your username" className="w-full text-gray-900 border border-gray-300 rounded p-4 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500" type="text" name="username" id="username" />
        </div>

        {/* Divider */}
        <div className="flex items-center pb-6 text-gray-500">
            <div className="flex-1">
                <hr className="border-gray-300" />
            </div>
            <div className="px-3 text-sm">or</div>
            <div className="flex-1">
                <hr className="border-gray-300" />
            </div>
        </div>

        {/* Social Login Buttons */}
        <div className="w-full space-y-4">
            <button onClick={() => alert("Login with telegram")} className="w-full hover:bg-[#24A1DE] bg-[#0088cc] text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                <FaTelegram className="inline-block mr-2" /> Continue with Telegram
            </button>
        </div>
        </Modal>
    );
}

export default SignInDialog;
