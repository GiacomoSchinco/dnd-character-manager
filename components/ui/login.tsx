"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();

    const handleLogin = () => { 
        setIsLogged(true);
    };
    
    const handleLogout = () => { 
        setIsLogged(false);
    };

    return (
        <>
            {!isLogged ? (
                <button
                    onClick={handleLogin}
                    className="relative px-4 py-2 text-amber-100 hover:text-amber-50 transition-all duration-300 group w-full lg:w-auto"
                >
                    {/* Versione desktop */}
                    <span className="hidden lg:flex relative z-10 items-center justify-center gap-2 font-serif">
                        <span className="text-amber-600">⚔️</span>
                        Login
                        <span className="text-amber-600">🛡️</span>
                    </span>
                    
                    {/* Versione mobile */}
                    <span className="lg:hidden relative z-10 flex items-center gap-3 font-serif">
                        <span className="w-6 text-amber-600">⚔️</span>
                        <span className="flex-1 text-left">Login</span>

                    </span>
                    
                    {/* Effetti hover comuni */}
                    <span className="absolute inset-0 bg-amber-800/50 border-2 border-amber-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute inset-0 border border-amber-700/30 rounded-lg" />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 group-hover:w-full transition-all duration-300" />
                </button>
            ) : (
                <button
                    onClick={handleLogout}
                    className="relative px-4 py-2 text-amber-100 hover:text-amber-50 transition-all duration-300 group w-full lg:w-auto"
                >
                    {/* Versione desktop */}
                    <span className="hidden lg:flex relative z-10 items-center justify-center gap-2 font-serif">
                        <span className="text-amber-600">🏃</span>
                        Logout
                        <span className="text-amber-600">👋</span>
                    </span>
                    
                    {/* Versione mobile */}
                    <span className="lg:hidden relative z-10 flex items-center gap-3 font-serif">
                        <span className="w-6 text-amber-600">👋</span>
                        <span className="flex-1 text-left">Logout</span>
  
                    </span>
                    
                    {/* Effetti hover comuni */}
                    <span className="absolute inset-0 bg-amber-800/50 border-2 border-amber-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute inset-0 border border-amber-700/30 rounded-lg" />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 group-hover:w-full transition-all duration-300" />
                </button>
            )}
        </>
    );
}