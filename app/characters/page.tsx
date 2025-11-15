import CardCharacters from '@/components/ui/card-character'
import React from 'react'
import { party } from '@/lib/party';
export default function characters() {
    return (
        <div className="flex flex-wrap gap-4 p-4">
            {party.map((c) => {
                return <CardCharacters key={c.id} character={c}/>
            })}
        </div>
    )
}
