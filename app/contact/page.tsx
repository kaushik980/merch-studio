import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
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
              Office: 13, 19rlStroed, Suite Road,
              <br />
              Halwalt, City, 06000
            </p>
          </div>

          {/* Illustration Placeholder */}
          <div className="mt-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
              alt="Handshake Illustration"
              className="w-40 opacity-80"
            />
          </div>
        </div>

        {/* ================= RIGHT FORM CARD ================= */}
        <div className="bg-white/40 backdrop-blur-md border border-[#e5d5c5] rounded-3xl shadow-xl p-10">

          <h2 className="text-2xl font-bold text-[#2b1a12] mb-8">
            Send us a Message
          </h2>

          {/* Form */}
          <form className="space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Full Name" placeholder="Full Name" />
              <Input label="Business Email" placeholder="Business Email" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Phone Number" placeholder="Phone Number" />
              <Input label="Company Name" placeholder="Company Name" />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[#2b1a12] mb-2">
                Subject
              </label>

              <select className="w-full px-4 py-3 rounded-full border border-[#d8c2a8] focus:ring-2 focus:ring-[#b88a2d] outline-none">
                <option>General Inquiry</option>
                <option>Sales/Request Quote</option>
                <option>Customer Support</option>
                <option>Book a Demo</option>
              </select>
            </div>

            {/* Message Box */}
            <div>
              <textarea
                placeholder="Specific Project Details (Optional)"
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border border-[#d8c2a8] focus:ring-2 focus:ring-[#b88a2d] outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button className="w-full bg-[#b88a2d] hover:bg-[#a67925] transition text-white font-semibold py-4 rounded-full shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

/* ================= REUSABLE INPUT COMPONENT ================= */
function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2b1a12] mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-full border border-[#d8c2a8] focus:ring-2 focus:ring-[#b88a2d] outline-none"
      />
    </div>
  );
}
