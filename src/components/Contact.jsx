import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";


const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handlesubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Try again."));
    };

    return (
        <section id="contact" className="m-10 flex items-center justify-center ">
            <div className="w-150">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="mt-30 mb-15 text-4xl text-center"
                >
                    GET IN TOUCH
                </motion.h2>
                <motion.form
                    onSubmit={handlesubmit}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            placeholder=" Name..."
                            name="name"
                            value={formData.name}
                            required
                            className="w-full bg-white/5 border border-white rounded px-2 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            placeholder=" example@gmail.com"
                            name="email"
                            value={formData.email}
                            required
                            className="w-full bg-white/5 border border-white rounded px-2 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            type="message"
                            id="message"
                            placeholder="Your Message.."
                            name="message"
                            rows={5}
                            value={formData.message}
                            required
                            className="w-full bg-white/5 border border-white rounded px-2 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>
                    <button className="w-full bg-white text-black py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
