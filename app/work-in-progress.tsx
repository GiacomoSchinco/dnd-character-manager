"use client"
import AncientCardStack from "@/components/ui/AncientCardStack";
import Button from "@/components/ui/Button";
export default function WorkInProgress() {
    return (
        <main className="min-h-screen p-4 mt-10">
            <div className="container mx-auto flex flex-col items-center mt-10"> {/* Aggiungi flex e items-center qui */}
                <div className="max-w-3xl mx-auto text-center">
                    {/* 404 grande in stile antico */}
                    <AncientCardStack animation="animate-float" cardSize="lg" stackCount={10}>
                        {/* Contenuto personalizzato per la carta superiore */}
                        <div className="relative h-full flex flex-col items-center justify-center p-4">
                            <h1 className="text-3xl font-serif text-amber-900 mb-3">
                                Work in Progress
                            </h1>
                            <div className="text-7xl mb-4 filter drop-shadow-lg">
                                🏗️
                            </div>
                            <p className="text-amber-700 text-sm italic mt-2">La gilda dei costruttori è al lavoro</p>
                        </div>
                    </AncientCardStack>
                </div>
            </div>
            {/* Contenuto della pagina */}
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Linea decorativa */}
                    <div className="flex items-center justify-center gap-4 mb-8 mt-8">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
                        <span className="text-3xl text-amber-700">⚔️</span>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
                    </div>
                    {/* Descrizione */}
                    <p className="text-xl md:text-2xl text-amber-800 mb-6 font-serif italic">
                        I nostri mastri nani stanno ancora battendo il ferro. Presto emergerà un&apos;opera degna del martello di Moradin!
                    </p>
                    {/* Suggerimenti in stile pergamena 
                            <AncientScroll className="max-w-xl mx-auto mb-12">
                                <h3 className="text-2xl font-serif text-amber-900 mb-4 flex items-center justify-center gap-2">
                                    <span>🔍</span>
                                    Suggerimenti dell&apos;Eremita
                                    <span>📜</span>
                                </h3>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start gap-3 text-amber-800">
                                        <span className="text-amber-700 font-bold text-xl shrink-0">1.</span>
                                        <span className="font-serif">Controlla che l&apos;indirizzo sia scritto correttamente nel tuo grimorio</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-amber-800">
                                        <span className="text-amber-700 font-bold text-xl shrink-0">2.</span>
                                        <span className="font-serif">La pagina potrebbe essere stata spostata in un&apos;altra dimensione</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-amber-800">
                                        <span className="text-amber-700 font-bold text-xl shrink-0">3.</span>
                                        <span className="font-serif">Forse hai sbagliato libro degli incantesimi (URL)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-amber-800">
                                        <span className="text-amber-700 font-bold text-xl shrink-0">4.</span>
                                        <span className="font-serif">Il mago potrebbe aver lanciato un incantesimo di occultamento</span>
                                    </li>
                                </ul>
                            </AncientScroll>*/}
                    {/* Pulsanti di azione */}
                    {/* Pulsante */}
                    {/* Pulsanti di azione */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button href="/" variant="primary" className="px-10 py-4">
                            <span className="flex items-center justify-center gap-4 text-amber-100">
                                Torna all&apos;Avventura
                            </span>
                        </Button>
                        <Button onClick={() => window.history.back()} variant="secondary" className="px-8 py-4">
                            <span className="flex items-center gap-2">
                                Torna al Sentiero Precedente
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </main>

    );
}