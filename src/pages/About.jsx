import { useState, useMemo } from "react";
import { Users, Plus, Pencil, Trash2, X, Shield, ShieldCheck, Globe } from "lucide-react";

const INITIAL_TEAM = [
    { id: 1, name: "Md. Foysal Rabby", role: "HR & Admin", dept: "Management" },
    { id: 2, name: "Sarah Ahmed", role: "Senior Developer", dept: "Engineering" },
    { id: 3, name: "Arif Hussein", role: "UI/UX Designer", dept: "Design" },
    { id: 4, name: "Tania Sultana", role: "Frontend Engineer", dept: "Engineering" },
    { id: 5, name: "Kamal Uddin", role: "Project Manager", dept: "Management" },
    { id: 6, name: "Nabila Islam", role: "Product Designer", dept: "Design" },
];

const DEPARTMENTS = ["All", "Engineering", "Design", "Management"];

export default function About() {
    const [team, setTeam] = useState(INITIAL_TEAM);
    const [filter, setFilter] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        dept: "Engineering",
    });

    /* -------------------- Derived State -------------------- */
    const filteredTeam = useMemo(() => {
        if (filter === "All") return team;
        return team.filter(member => member.dept === filter);
    }, [team, filter]);

    /* -------------------- Handlers -------------------- */
    const openForm = (member = null) => {
        if (member) {
            setEditingMember(member);
            setFormData(member);
        } else {
            resetForm();
        }
        setIsModalOpen(true);
    };

    const closeForm = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setEditingMember(null);
        setFormData({ name: "", role: "", dept: "Engineering" });
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingMember) {
            updateMember();
        } else {
            addMember();
        }

        closeForm();
    };

    const addMember = () => {
        setTeam(prev => [
            ...prev,
            { id: Date.now(), ...formData }
        ]);
    };

    const updateMember = () => {
        setTeam(prev =>
            prev.map(member =>
                member.id === editingMember.id
                    ? { ...member, ...formData }
                    : member
            )
        );
    };

    const deleteMember = (id) => {
        if (!window.confirm("Delete this team member?")) return;
        setTeam(prev => prev.filter(member => member.id !== id));
    };

    /* -------------------- UI -------------------- */
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Header */}
            <section className="py-20 text-center bg-white border-b">
                <h1 className="text-4xl font-extrabold">
                    About <span className="text-primary-600">Brickline</span>
                </h1>
                <p className="mt-4 text-slate-600">
                    Building the future of web development.
                </p>
            </section>

            {/* Team */}
            <section className="max-w-7xl mx-auto py-20 px-4">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold">Our Team</h2>
                        <p className="text-slate-500">Manage your team members</p>
                    </div>

                    <button
                        onClick={() => openForm()}
                        className="flex items-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl"
                    >
                        <Plus size={18} />
                        Add Member
                    </button>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-8 flex-wrap">
                    {DEPARTMENTS.map(dep => (
                        <button
                            key={dep}
                            onClick={() => setFilter(dep)}
                            className={`px-4 py-2 rounded-full text-sm ${filter === dep
                                    ? "bg-primary-600 text-white"
                                    : "bg-white border"
                                }`}
                        >
                            {dep}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTeam.map(member => (
                        <div
                            key={member.id}
                            className="bg-white p-6 rounded-2xl border shadow-sm"
                        >
                            <div className="flex justify-between mb-4">
                                <Users className="text-slate-400" />
                                <div className="flex gap-2">
                                    <button onClick={() => openForm(member)}>
                                        <Pencil size={16} />
                                    </button>
                                    <button onClick={() => deleteMember(member.id)}>
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>

                            <h3 className="font-bold">{member.name}</h3>
                            <p className="text-sm text-primary-600">{member.role}</p>
                            <span className="text-xs uppercase text-slate-400">
                                {member.dept}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-2xl w-full max-w-md"
                    >
                        <div className="flex justify-between mb-4">
                            <h3 className="font-bold">
                                {editingMember ? "Edit Member" : "Add Member"}
                            </h3>
                            <button type="button" onClick={closeForm}>
                                <X />
                            </button>
                        </div>

                        <input
                            required
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={e => handleChange("name", e.target.value)}
                            className="input"
                        />

                        <input
                            required
                            placeholder="Role"
                            value={formData.role}
                            onChange={e => handleChange("role", e.target.value)}
                            className="input"
                        />

                        <select
                            value={formData.dept}
                            onChange={e => handleChange("dept", e.target.value)}
                            className="input"
                        >
                            <option>Engineering</option>
                            <option>Design</option>
                            <option>Management</option>
                        </select>

                        <button className="mt-4 w-full bg-primary-600 text-white py-2 rounded-xl">
                            Save
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
