"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
    const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();

    const handleLogin = () => { 
        setIsLogged(true);
       //router.push("/login");
        
    };
    const handleLogout = () => { 
        setIsLogged(false);
        //router.push("/");
    };
    return (
        <>
            {!isLogged ? (
                <button
                    className="btn btn-ghost rounded-btn"
                    onClick={() => handleLogin()}
                >
                    Login
                </button>
            ) : (
                <button
                    className="btn btn-ghost rounded-btn"
                    onClick={() =>  handleLogout()}
                >
                    Logout
                </button>
            )}
        </>
    );
}
