export function Footer() {
    return (
        <footer className="py-12 border-t border-slate-200 bg-white text-center text-slate-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p>© 2026 Brickline Technology Limited. All rights reserved.</p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-primary-600 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
