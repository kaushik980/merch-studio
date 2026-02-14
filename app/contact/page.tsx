"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry",
    message: "",
  });

  // ✅ Status Message
  const [status, setStatus] = useState("");

  // ✅ Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Email Validation
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("❌ Enter a valid email address.");
      return;
    }

    setStatus("⏳ Sending...");

    // ✅ EmailJS Config
    const serviceID = "service_p2zipif";
    const templateID = "template_bpdk1ma";
    const publicKey = "i4bGyEBc8W9aH8CJV";

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);

      setStatus("✅ Message sent successfully!");

      // Clear Form After Send
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f7efe3] flex items-center justify-center px-6 py-16">
      <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div>
          <h1 className="text-5xl font-extrabold text-[#2b1a12] mb-6">
            Let’s Connect
          </h1>

          <p className="text-lg text-[#4a3a32] leading-relaxed max-w-md mb-10">
            Have a question or a project in mind? We’d love to hear from you.
            Fill out the form, and our team will get back to you shortly.
          </p>

          {/* Contact Details */}
          <div className="space-y-5 text-[#4a3a32] text-base">
            <p className="flex items-center gap-3">
              <Phone className="text-[#b88a2d]" />
              +1 123-356-7800
            </p>

            <p className="flex items-center gap-3">
              <Mail className="text-[#b88a2d]" />
              info.mas.team@gmail.com
            </p>

            <p className="flex items-start gap-3">
              <MapPin className="text-[#b88a2d] mt-1" />
              Office: 13, Suite Road,
              <br />
              Halwalt City, 06000
            </p>
          </div>
        </div>

        {/* ================= RIGHT FORM CARD ================= */}
        <div className="bg-white/40 backdrop-blur-md border border-[#e5d5c5] rounded-3xl shadow-xl p-10">
          <h2 className="text-2xl font-bold text-[#2b1a12] mb-8">
            Send us a Message
          </h2>

          {/* ✅ FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                label="Business Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <Input
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[#2b1a12] mb-2">
                Subject
              </label>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full border border-[#d8c2a8] focus:ring-2 focus:ring-[#b88a2d] outline-none"
              >
                <option>General Inquiry</option>
                <option>Sales/Request Quote</option>
                <option>Customer Support</option>
                <option>Book a Demo</option>
              </select>
            </div>

            {/* Message Box */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Specific Project Details (Optional)"
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border border-[#d8c2a8] focus:ring-2 focus:ring-[#b88a2d] outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#b88a2d] hover:bg-[#a67925] transition text-white font-semibold py-4 rounded-full shadow-md"
            >
              Send Message
            </button>

            {/* Status */}
            {status && (
              <p className="text-center mt-4 text-sm font-medium text-[#2b1a12]">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

/* ================= INPUT COMPONENT ================= */
function Input({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2b1a12] mb-2">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="w-full px-4 py-3 rounded-full border border-[#d8c2a8] focus:ring-2 focus:ring-[#b88a2d] outline-none"
      />
    </div>
  );
}
