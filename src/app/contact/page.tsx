import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-[#090909] transition-colors duration-500">

        {/* Hero */}
        <section className="relative overflow-hidden py-28">

          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-transparent to-red-900/10 dark:from-red-900/20" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-red-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Contact Us
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white">
              Let's Start a
              <span className="block text-red-700 dark:text-red-400">
                Conversation
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Reach out for partnerships,
              business inquiries, or any questions about Dharma Group.
            </p>

          </div>

        </section>

        {/* Contact Section */}
        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">

            {/* Contact Form */}
            <div className="lg:col-span-3 rounded-3xl bg-white dark:bg-zinc-900 shadow-xl p-8">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Send us a Message
              </h2>

              <form className="mt-8 space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 py-4 outline-none focus:border-red-600"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 py-4 outline-none focus:border-red-600"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 py-4 outline-none focus:border-red-600"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 py-4 outline-none focus:border-red-600"
                />

                <button
                  className="inline-flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold text-white hover:bg-red-800 transition"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">

              <div className="rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-xl">

                <MapPin className="text-red-700" size={34} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Office Address
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">
                  Dharma Group Headquarters
                  <br />
                  Ahmedabad
                  <br />
                  Gujarat, India
                </p>

              </div>

              <div className="rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-xl">

                <Phone className="text-red-700" size={34} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Phone
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  +91 98765 43210
                </p>

              </div>

              <div className="rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-xl">

                <Mail className="text-red-700" size={34} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Email
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  info@dharmagroup.com
                </p>

              </div>

              <div className="rounded-3xl bg-white dark:bg-zinc-900 p-8 shadow-xl">

                <Clock className="text-red-700" size={34} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Working Hours
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Monday – Saturday
                  <br />
                  9:30 AM – 6:30 PM
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Map */}
        <section className="pb-24 px-6">

          <div className="mx-auto max-w-7xl">

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <iframe
                src="https://www.google.com/maps?q=Ahmedabad&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                className="border-0"
              />

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
/* =====================================================
   STORE
===================================================== */

export const useBuilderStore =
  create<BuilderStore>((set) => ({
    card: defaultCard,

    history: {
      past: [],
      present: defaultCard,
      future: [],
    },

    ui: {
      activeTab: "basic",

      device: "desktop",

      preview: true,

      loading: false,

      dirty: false,

      saveStatus: "saved",

      lastSavedAt: null,
    },

    /* ============================================
       CARD
    ============================================ */

    setCard: (card) =>
      set({
        card,

        history: {
          past: [],
          present: card,
          future: [],
        },

        ui: {
          activeTab: "basic",

          device: "desktop",

          preview: true,

          loading: false,

          dirty: false,

          saveStatus: "saved",

          lastSavedAt: new Date(),
        },
      }),

    updateCard: (data) =>
      set((state) => {
        const updatedCard = {
          ...state.card,
          ...data,
        };

        return pushHistory(
          state,
          updatedCard
        );
      }),

    updateField: (field, value) =>
      set((state) => {
        const updatedCard = {
          ...state.card,
          [field]: value,
        };

        return pushHistory(
          state,
          updatedCard
        );
      }),

    /* ============================================
       UI
    ============================================ */

    setActiveTab: (tab) =>
      set((state) => ({
        ui: {
          ...state.ui,
          activeTab: tab,
        },
      })),

    setDevice: (device) =>
      set((state) => ({
        ui: {
          ...state.ui,
          device,
        },
      })),

    setPreview: (preview) =>
      set((state) => ({
        ui: {
          ...state.ui,
          preview,
        },
      })),

    setLoading: (loading) =>
      set((state) => ({
        ui: {
          ...state.ui,
          loading,
        },
      })),

    setSaveStatus: (status) =>
      set((state) => ({
        ui: {
          ...state.ui,
          saveStatus: status,
        },
      })),

    markSaved: () =>
      set((state) => ({
        ui: {
          ...state.ui,
          dirty: false,

          saveStatus: "saved",

          lastSavedAt: new Date(),
        },
      })),

    /* ============================================
       HISTORY
    ============================================ */

    undo: () =>
      set((state) => {
        if (
          state.history.past.length === 0
        ) {
          return state;
        }

        const previous =
          state.history.past[
            state.history.past.length - 1
          ];

        return {
          card: previous,

          history: {
            past:
              state.history.past.slice(
                0,
                -1
              ),

            present: previous,

            future: [
              state.history.present,
              ...state.history.future,
            ],
          },

          ui: {
            ...state.ui,
            dirty: true,
          },
        };
      }),

    redo: () =>
      set((state) => {
        if (
          state.history.future.length === 0
        ) {
          return state;
        }

        const next =
          state.history.future[0];

        return {
          card: next,

          history: {
            past: [
              ...state.history.past,
              state.history.present,
            ].slice(-MAX_HISTORY),

            present: next,

            future:
              state.history.future.slice(1),
          },

          ui: {
            ...state.ui,
            dirty: true,
          },
        };
      }),
          /* ============================================
       SERVICES
    ============================================ */

    addService: () =>
      set((state) => {
        const services = [
          ...(state.card.services ?? []),
          {
            title: "",
            description: "",
            category: "",
            price: 0,
            icon: "",
          },
        ];

        const updatedCard = {
          ...state.card,
          services,
        };

        return pushHistory(state, updatedCard);
      }),

    updateService: (index, service) =>
      set((state) => {
        const services = [...(state.card.services ?? [])];

        if (!services[index]) return state;

        services[index] = {
          ...services[index],
          ...service,
        };

        const updatedCard = {
          ...state.card,
          services,
        };

        return pushHistory(state, updatedCard);
      }),

    removeService: (index) =>
      set((state) => {
        const services = (state.card.services ?? []).filter(
          (_, i) => i !== index
        );

        const updatedCard = {
          ...state.card,
          services,
        };

        return pushHistory(state, updatedCard);
      }),

    /* ============================================
       PRODUCTS
    ============================================ */

    addProduct: () =>
      set((state) => {
        const products = [
          ...(state.card.products ?? []),
          {
            name: "",
            description: "",
            category: "",
            image: "",
            price: 0,
            discountPrice: 0,
          },
        ];

        const updatedCard = {
          ...state.card,
          products,
        };

        return pushHistory(state, updatedCard);
      }),

    updateProduct: (index, product) =>
      set((state) => {
        const products = [...(state.card.products ?? [])];

        if (!products[index]) return state;

        products[index] = {
          ...products[index],
          ...product,
        };

        const updatedCard = {
          ...state.card,
          products,
        };

        return pushHistory(state, updatedCard);
      }),

    removeProduct: (index) =>
      set((state) => {
        const products = (state.card.products ?? []).filter(
          (_, i) => i !== index
        );

        const updatedCard = {
          ...state.card,
          products,
        };

        return pushHistory(state, updatedCard);
      }),
          /* ============================================
       GALLERY
    ============================================ */

    addGalleryImage: (url) =>
      set((state) => {
        const galleryImages = [
          ...(state.card.galleryImages ?? []),
          url,
        ];

        const updatedCard = {
          ...state.card,
          galleryImages,
        };

        return pushHistory(state, updatedCard);
      }),

    removeGalleryImage: (index) =>
      set((state) => {
        const galleryImages = (
          state.card.galleryImages ?? []
        ).filter((_, i) => i !== index);

        const updatedCard = {
          ...state.card,
          galleryImages,
        };

        return pushHistory(state, updatedCard);
      }),

  }));