import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_u9cqvin", "template_m2fxqfz", form.current, "I5CFPViPwboK724_d")
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message."));
  };

  return (
    <section className="max-w-4xl px-4 py-16 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-md" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-md" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="w-full p-3 border rounded-md" />
        <button type="submit" className="w-full px-6 py-3 text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
