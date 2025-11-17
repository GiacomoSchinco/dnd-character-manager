import Link from "next/link";
export default function NotFound(){
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-6">
                <div className="max-w-lg mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-warning/10 text-warning mb-6">
                        <span className="text-5xl font-extrabold">404</span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Pagina non trovata</h1>
                    <p className="text-sm md:text-base text-muted mb-6">
                        La pagina che stai cercando non esiste o è stata spostata.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link href="/" className="btn btn-warning">
                            Torna alla Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}