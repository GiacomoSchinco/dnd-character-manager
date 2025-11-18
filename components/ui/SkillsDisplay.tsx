import { skills, SkillKey } from "@/lib/dictionaries/skills";
import { stats, StatKey } from "@/lib/dictionaries/stats";
type SkillsDisplayProps = {
    skillValues: Record<SkillKey, number>;
};

export default function SkillsDisplay({ skillValues }: SkillsDisplayProps) {
    return (
        <div className="flex flex-col gap-4">
            {Object.keys(stats).map((stat) => {
                const statSkills = Object.entries(skills).filter(
                    ([, skillStat]) => skillStat.stat === stat
                );

                if (statSkills.length === 0) return null;

                return (
                    <div key={stat} className="mb-2">
                        <h3 className="font-semibold text-sm mb-1">
                            {stats[stat as StatKey]} ({stat})
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {statSkills.map(([skillKey, skill]) => (
                                <div
                                    key={skillKey}
                                    className="p-2 bg-base-200 rounded shadow flex justify-between items-center text-xs flex-1 min-w-[220px] max-w-[220px] md:min-w-[180px] md:max-w-[180px] sm:min-w-full sm:max-w-full"
                                    title={skill.description}
                                >
                                    <span>{skill.label}</span>
                                    <span className="font-bold text-sm">
                                        {skillValues[skillKey as SkillKey] >= 0
                                            ? `+${skillValues[skillKey as SkillKey]}`
                                            : skillValues[skillKey as SkillKey]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
