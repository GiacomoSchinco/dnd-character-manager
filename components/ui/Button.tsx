"use client";
import React from "react";
import Link from "next/link";
import { cardStyles } from "@/lib/theme/colors";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: (e: any) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<string, string> = {
  primary: cardStyles.button.primary + " rounded-lg shadow",
  secondary: cardStyles.button.secondary + " rounded-lg shadow-inner",
  ghost: "bg-transparent text-amber-800 hover:bg-amber-100/30",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-serif ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  const cls = disabled ? `${base} opacity-60 pointer-events-none` : base;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
