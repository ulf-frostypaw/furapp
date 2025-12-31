"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Link from "next/link";

export enum AppModalsEnum {
	SignIn = "SignIn",
	CreateAccount = "CreateAccount",
}

type AppBarProps = {
	isLoggedIn?: boolean;
	setAppModal?: (modal: AppModalsEnum) => void;
	onAdd?: () => void;
	onNotifications?: () => void;
	onProfile?: () => void;
};

type IconButtonProps = {
	label: string;
	onClick?: () => void;
	children: React.ReactNode;
};

const IconButton = ({ label, onClick, children }: IconButtonProps) => (
	<button
		type="button"
		aria-label={label}
		onClick={onClick}
		className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
	>
		{children}
	</button>
);

const PlusIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		className="h-5 w-5"
		strokeWidth="1.6"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
	</svg>
);

const BellIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		className="h-5 w-5"
		strokeWidth="1.6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14 18.5a2 2 0 1 1-4 0m8-1.5H6l1.2-2.1a4 4 0 0 0 .55-2V9a4.25 4.25 0 0 1 8.5 0v3.9a4 4 0 0 0 .55 2Z"
		/>
	</svg>
);

const UserIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		className="h-5 w-5"
		strokeWidth="1.6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M18.5 19.2v-.9a3.8 3.8 0 0 0-3.8-3.8h-5.4a3.8 3.8 0 0 0-3.8 3.8v.9M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
		/>
	</svg>
);

export default function AppBar({
	isLoggedIn = false,
	setAppModal,
	onAdd,
	onNotifications,
	onProfile,
}: AppBarProps) {
	const [open, setOpen] = useState(false);
	const openModal = useCallback(
		(modal: AppModalsEnum) => setAppModal?.(modal),
		[setAppModal]
	);

	return (
		<header className="bg-black/50 text-white">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<div className="flex-grow">
                    <div className="flex justify-center">
                        <Image
                            src="/entail-logo.svg"
                            alt="Entail"
                            width={50}
                            height={50}
                            className="h-[50px] w-[50px]"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <Link
						href="/login"
                        className="rounded bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Login
                    </Link>
                    <Link
						href="/signup"
                        className="rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Sign Up
                    </Link>
                </div>
			</div>
		</header>
	);
}
