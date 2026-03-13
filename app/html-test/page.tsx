"use client";
import React, { useEffect, useState } from 'react';

export default function Page(): JSX.Element {
  return (
    <main className="p-6 bg-parchment-100 min-h-screen text-parchment-900 font-serif">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-ancient-burgundy mb-2">HTML Standard Elements Test</h1>
        <p className="text-ancient-brown mb-3">Pagina di prova per controllare gli stili globali e i componenti HTML standard.</p>
        <nav>
          <ul className="flex gap-4 text-ancient-gold">
            <li><a className="hover:underline" href="#typography">Tipografia</a></li>
            <li><a className="hover:underline" href="#forms">Form</a></li>
            <li><a className="hover:underline" href="#tables">Tabelle</a></li>
            <li><a className="hover:underline" href="#media">Media</a></li>
          </ul>
        </nav>
      </header>

      <section id="typography" className="mb-6 p-4 bg-parchment-50 rounded border border-parchment-200">
        <h2 className="text-2xl text-ancient-brown mb-2">Tipografia</h2>
        <h3>Intestazioni</h3>
        <h1 className="text-2xl md:text-3xl font-semibold text-ancient-gold">h1 — Titolo principale</h1>
        <h2 className="text-xl text-ancient-brown">h2 — Sottotitolo</h2>
        <h3 className="text-lg">h3 — Sezione</h3>
        <h4 className="text-base">h4 — Sottosezione</h4>
        <h5 className="text-sm">h5 — Piccola</h5>
        <h6 className="text-xs">h6 — Minore</h6>

        <p className="text-parchment-900">Paragrafo normale con <strong className="font-semibold">grassetto</strong>, <em>corsivo</em>, <small>testo piccolo</small>, <mark className="bg-ancient-gold/30">evidenziato</mark>, <del>cancellato</del> e <ins>inserito</ins>.</p>

        <p>Abbreviazione: <abbr title="Role Playing Game">RPG</abbr></p>

        <h3>Liste</h3>
        <ul className="list-disc pl-6">
          <li>Elemento lista non ordinata</li>
          <li>Altro elemento</li>
        </ul>
        <ol className="list-decimal pl-6">
          <li>Primo</li>
          <li>Secondo</li>
        </ol>
        <dl>
          <dt>Termine</dt>
          <dd>Descrizione del termine</dd>
        </dl>

        <h3>Citazioni e codice</h3>
        <blockquote className="border-l-4 border-ancient-gold pl-4 italic text-parchment-800">
          Questo è un blockquote di esempio.
          <cite className="block mt-2">— Fonte esempio</cite>
        </blockquote>

        <pre><code>{`function hello() {
  return 'world';
}`}</code></pre>
      </section>

      <section id="forms" className="mb-6 p-4 bg-parchment-50 rounded border border-parchment-200">
        <h2 className="text-2xl text-ancient-brown mb-2">Form e controlli</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <fieldset className="space-y-2">
            <legend className="font-semibold">Dati utente</legend>

            <label htmlFor="name" className="block text-parchment-800">Nome</label>
            <input id="name" name="name" type="text" placeholder="Mario" className="w-full border rounded px-2 py-1 bg-base-100" />

            <label htmlFor="email" className="block text-parchment-800">Email</label>
            <input id="email" name="email" type="email" placeholder="mario@example.com" className="w-full border rounded px-2 py-1 bg-base-100" />

            <label className="block text-parchment-800">Ruolo</label>
            <select name="role" defaultValue="player" className="border rounded px-2 py-1 bg-base-100">
              <option value="player">Player</option>
              <option value="dm">Dungeon Master</option>
            </select>

            <label htmlFor="bio" className="block text-parchment-800">Biografia</label>
            <textarea id="bio" name="bio" rows={3} className="w-full border rounded px-2 py-1 bg-base-100" />

            <div className="flex items-center gap-2">
              <input id="agree" type="checkbox" className="checkbox" />
              <label htmlFor="agree">Accetto i termini</label>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1"><input type="radio" id="r1" name="r" defaultChecked className="radio" /> <span>Opzione 1</span></label>
              <label className="flex items-center gap-1"><input type="radio" id="r2" name="r" className="radio" /> <span>Opzione 2</span></label>
            </div>

            <label htmlFor="age" className="block text-parchment-800">Età (range)</label>
            <input id="age" type="range" min={0} max={100} className="w-full" />

            <label htmlFor="quantity" className="block text-parchment-800">Quantità</label>
            <input id="quantity" type="number" min={0} max={10} className="border rounded px-2 py-1 w-24" />

            <div className="flex gap-2">
              <button type="submit" className="btn btn-secondary">Invia</button>
              <button type="reset" className="btn">Reset</button>
            </div>
          </fieldset>
        </form>
      </section>

      <section id="tables" className="mb-6 p-4 bg-parchment-50 rounded border border-parchment-200">
        <h2 className="text-2xl text-ancient-brown mb-2">Tabelle</h2>
        <table className="min-w-full table-auto border border-parchment-200 bg-base-100">
          <caption className="text-sm text-parchment-800 mb-2">Tabella abilità</caption>
          <thead>
            <tr className="bg-parchment-200 text-parchment-900">
              <th className="px-3 py-2 text-left">Abilità</th>
              <th className="px-3 py-2">Livello</th>
              <th className="px-3 py-2">Progresso</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-3 py-2">Sopravvivenza</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2"><progress value={30} max={100} className="w-full" /></td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2">Percezione</td>
              <td className="px-3 py-2">5</td>
              <td className="px-3 py-2"><meter value={70} min={0} max={100} className="w-full" /></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="px-3 py-2 text-sm text-parchment-800">Fine tabella</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section id="media" className="mb-6 p-4 bg-parchment-50 rounded border border-parchment-200">
        <h2 className="text-2xl text-ancient-brown mb-2">Media e figure</h2>
        <figure className="flex items-center gap-3 mb-3">
          <img src="/favicon.ico" alt="favicon" className="w-16 h-16" />
          <figcaption className="text-parchment-800">Esempio immagine (favicon)</figcaption>
        </figure>

        <h3 className="text-lg">Audio / Video</h3>
        <audio controls className="w-full mb-3">
          <source src="/" />
          Il tuo browser non supporta l'elemento audio.
        </audio>

        <h3 className="text-lg">Elementi semantici</h3>
        <details className="mb-3">
          <summary className="cursor-pointer">Mostra dettagli</summary>
          <p>Contenuto dei dettagli per testare lo stile.</p>
        </details>

        {/* Render placeholder on server to avoid hydration mismatch; set real value on client */}
        {/**/}
        <ClientTime />
      </section>

      <footer className="mt-8 text-sm text-parchment-800">
        <p>Footer di test — <a className="text-ancient-gold hover:underline" href="/">Torna alla home</a></p>
      </footer>
    </main>
  );
}

function ClientTime(): JSX.Element {
  const [iso, setIso] = useState('');
  const [label, setLabel] = useState('');

  useEffect(() => {
    const now = new Date();
    setIso(now.toISOString());
    setLabel(now.toLocaleString());
  }, []);

  if (!label) {
    return <time aria-hidden>—</time>;
  }

  return <time dateTime={iso}>{label}</time>;
}

