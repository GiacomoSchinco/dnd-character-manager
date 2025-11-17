import CardCharacters from '@/components/ui/CardCharacter'
import { party } from '@/lib/party';

export default function Characters() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {party.map((c) => (
                <CardCharacters key={c.id} character={c} />
            ))}
        </div>
    );
}
