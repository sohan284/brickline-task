import { Button } from "../components/common/Button";
import { Rocket, Shield, Zap } from "lucide-react";

export default function Home() {
    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight animate-fade-in">
                        Build your next idea <span className="text-primary-600">faster</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
                        A premium React + Tailwind CSS starter template designed for developers who want to skip the setup and start building beautiful projects.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
                        <Button size="lg">Get Started Now</Button>
                        <Button size="lg" variant="secondary">View Documentation</Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Rocket, title: "Fast Performance", desc: "Optimized build process and split-second interactions." },
                            { icon: Shield, title: "Modern Stack", desc: "Built with React 19, Tailwind CSS, and Lucide Icons." },
                            { icon: Zap, title: "Ready to Use", desc: "Common components and layouts pre-configured for you." },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-primary-200 transition-colors"
                            >
                                <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
