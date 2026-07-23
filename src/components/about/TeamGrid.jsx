import { teamMembers } from '../../data/team.js'

const TeamGrid = () => {
    return (
        <div>
            <h2 className="text-2xl font-display font-bold text-text-primary text-center mb-8">Meet the Team</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="border bg-text-muted/5 rounded-2xl px-6 py-5 flex flex-col items-center text-center"
                    >
                        <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-2xl mb-4 ${member.color}`}
                        >
                            {member.initial}
                        </div>
                        <p className="font-display font-bold text-text-primary text-sm">{member.name}</p>
                        <p className="text-text-muted text-xs mt-1">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamGrid