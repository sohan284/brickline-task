import { useState, useMemo } from "react";
import { Rocket, Shield, Zap, Users, ShieldCheck, Globe } from "lucide-react";

const TEAM_MEMBERS = [
    { id: 1, name: "Md. Foysal Rabby", role: "HR & Admin", dept: "Management" },
    { id: 2, name: "Sarah Ahmed", role: "Senior Developer", dept: "Engineering" },
    { id: 3, name: "Arif Hussein", role: "UI/UX Designer", dept: "Design" },
    { id: 4, name: "Tania Sultana", role: "Frontend Engineer", dept: "Engineering" },
    { id: 5, name: "Kamal Uddin", role: "Project Manager", dept: "Management" },
    { id: 6, name: "Nabila Islam", role: "Product Designer", dept: "Design" },
];

export default function About() {
    const [filter, setFilter] = useState("All");

    const filteredTeam = useMemo(() => {
        if (filter === "All") return TEAM_MEMBERS;
        return TEAM_MEMBERS.filter((member) => member.dept === filter);
    }, [filter]);

    const categories = ["All", "Engineering", "Design", "Management"];

    return (
        <div className="bg-slate-50">
            {/* Header Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight animate-fade-in">
                        About <span className="text-primary-600">Brickline</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
                        We are dedicated to building the future of web development by providing high-quality tools and templates.
                    </p>
                </div>
            </section>

            {/* Team Section (useMemo Showcase) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Our Professional Team</h2>

                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? "bg-primary-600 text-white shadow-md"
                                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary-300"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTeam.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                            <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                            <div className="mt-2 text-xs text-slate-400 uppercase tracking-wider">{member.dept}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            To empower every developer with the best tools possible, reducing the friction between idea and implementation.
                        </p>
                        <div className="space-y-4">
                            {[
                                { icon: Globe, text: "Global impact on the developer ecosystem." },
                                { icon: ShieldCheck, text: "Security and stability as core pillars." },
                                { icon: Users, text: "Community-driven growth and feedback." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <item.icon className="w-5 h-5 text-primary-600" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-200 shadow-2xl animate-fade-in" style={{ animationDelay: '600ms' }}>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent flex items-center justify-center">
                            <Shield className="w-24 h-24 text-primary-600/50" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
