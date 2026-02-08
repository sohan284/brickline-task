import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../components/common/Button";
import { Send, MapPin, Phone, Mail } from "lucide-react";

// 1. Define your validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
    // 2. Initialize the form with the resolver
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        // Simulate API call
        console.log("Form Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Message sent successfully!");
        reset();
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 animate-fade-in">
                    Get in <span className="text-primary-600">Touch</span>
                </h1>
                <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
                    Have questions or want to collaborate? We'd love to hear from you.
                </p>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="space-y-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Our Office</h3>
                            <p className="text-slate-600">House-6, Kalabagan 3rd Lane, Dhaka</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                            <Phone className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Phone</h3>
                            <p className="text-slate-600">+01944700848</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                            <Mail className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Email</h3>
                            <p className="text-slate-600">hello@brickline.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-slate-200 animate-fade-in" style={{ animationDelay: '600ms' }}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Full Name</label>
                                <input
                                    {...register("name")}
                                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-100" : "border-slate-200 focus:border-primary-500 focus:ring-primary-100"
                                        }`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address</label>
                                <input
                                    {...register("email")}
                                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-100" : "border-slate-200 focus:border-primary-500 focus:ring-primary-100"
                                        }`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Subject</label>
                            <input
                                {...register("subject")}
                                className={`w-full px-4 py-3 rounded-xl border transition-all outline-none focus:ring-2 ${errors.subject ? "border-red-500 focus:ring-red-100" : "border-slate-200 focus:border-primary-500 focus:ring-primary-100"
                                    }`}
                                placeholder="How can we help?"
                            />
                            {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Message</label>
                            <textarea
                                {...register("message")}
                                rows={5}
                                className={`w-full px-4 py-3 rounded-xl border transition-all outline-none focus:ring-2 ${errors.message ? "border-red-500 focus:ring-red-100" : "border-slate-200 focus:border-primary-500 focus:ring-primary-100"
                                    }`}
                                placeholder="Your detailed message..."
                            />
                            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full gap-2"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="w-5 h-5" />
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
