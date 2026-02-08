import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
