import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, Call02Icon, Mail01Icon, SentIcon, Message01Icon } from '@hugeicons/core-free-icons';
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";


export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Sevengate Group" },
      { name: "description", content: "Get in touch with Sevengate Group. Contact our head office in Abuja, or reach out via phone and email." },
    ],
  }),
});

function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const whatsappNumber = "2348030726373";
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <main className="relative min-h-screen bg-gray-50 text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-foreground text-white overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" src="/hero2.jpeg" alt="Contact Banner" className="absolute inset-0 w-full h-full object-cover object-center opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--amber-brand)_0%,transparent_30%)] opacity-20" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <div className="container-x relative z-10 w-full mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-luxury-gold mb-4">
              Get in Touch
            </p>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Whether you're looking to partner on infrastructure projects, explore energy opportunities, or simply learn more about our operations, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 relative z-10 -mt-10">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">

            {/* Left Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >


              <div className="bg-white rounded-none p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-none bg-luxury-gold/10 text-luxury-gold">
                    <HugeiconsIcon icon={Call02Icon} className="h-6 w-6" strokeWidth={1.2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Our Phone</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+2349166418189" className="text-gray-600 hover:text-luxury-gold transition-colors">+234 - 916 641 8189</a>
                      <a href="tel:+2348030726373" className="text-gray-600 hover:text-luxury-gold transition-colors">+234 803 072 6373</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-none p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-none bg-luxury-gold/10 text-luxury-gold">
                    <HugeiconsIcon icon={Mail01Icon} className="h-6 w-6" strokeWidth={1.2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Our Email</h3>
                    <a href="mailto:adminoffice@sevengategroup.com" className="text-gray-600 hover:text-luxury-gold transition-colors block break-all">
                      adminoffice@sevengategroup.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-none p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-none ">
                    <HugeiconsIcon icon={Message01Icon} className="h-6 w-6" strokeWidth={1.2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold  mb-2">WhatsApp</h3>
                    <a href="https://wa.me/2348030726373" className="text-gray-600 hover:text-[#25D366] transition-colors block break-all">
                      +234 803 072 6373
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] ring-1 ring-black/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Send a message</h2>
                <p className="text-gray-500">A member of our team will get back to you shortly</p>
              </div>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your-email@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Leave a message..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-none bg-foreground px-8 py-4 text-sm font-bold text-white transition-all hover:bg-foreground/90 shadow-[0_4px_15px_color-mix(in_oklab,var(--navy-deep)_40%,transparent)] hover:-translate-y-0.5"
                >
                  Submit
                  <HugeiconsIcon icon={SentIcon} className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.2} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

