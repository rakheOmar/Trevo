import { useGSAP } from "@gsap/react";
import { HelpCircleIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item border-b border-white/10 transition-colors duration-300 hover:border-white/50">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left focus:outline-none"
      >
        <span className="text-base font-medium text-white">{question}</span>
        <span
          className={`shrink-0 text-white transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <HugeiconsIcon icon={PlusSignIcon} size={24} strokeWidth={1.5} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 text-base leading-relaxed text-neutral-400">{answer}</div>
      </div>
    </div>
  );
};

const leftColumnFAQs = [
  {
    question: "How does the automatic matching work?",
    answer:
      "Trevo compares your invoices, purchase orders, and delivery receipts using a 3-way matching algorithm. It automatically approves perfect matches and flags discrepancies for your review.",
  },
  {
    question: "Does it integrate with my ERP?",
    answer:
      "Yes. We support native two-way sync with Xero, QuickBooks, NetSuite, and Sage Intacct. Your general ledger is updated in real-time without manual CSV imports.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Security is our top priority. We use bank-grade 256-bit encryption for all data in transit and at rest, and we are SOC2 Type II compliant.",
  },
];

const rightColumnFAQs = [
  {
    question: "What happens if an invoice isn't matched?",
    answer:
      "Unmatched items are sent to an 'Exception Queue'. You can manually approve them or set custom rules so Trevo learns how to handle similar edge cases in the future.",
  },
  {
    question: "Can I try it with my own data?",
    answer:
      "Absolutely. Our 14-day free trial allows you to sync your historical data and see how many past errors or missed duplicates Trevo would have caught.",
  },
  {
    question: "Do you support multi-entity organizations?",
    answer:
      "Yes, our Enterprise plan is built for complex structures. You can manage reconciliation across multiple subsidiaries and currencies from a single dashboard.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".anim-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      }).from(
        ".faq-item",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="faq" className="mx-auto w-[79%] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-start gap-6">
        <div className="anim-header">
          <Badge
            variant="outline"
            className="gap-2 rounded-full border-white/10 bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-transparent"
          >
            <HugeiconsIcon icon={HelpCircleIcon} size={16} className="text-neutral-300" />
            Common Questions
          </Badge>
        </div>

        <h2 className="anim-header text-3xl font-medium tracking-tight text-white md:text-4xl">
          Everything you need to know{" "}
          <span className="text-neutral-500">about automating your books.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
        <div className="flex flex-col">
          {leftColumnFAQs.map((faq, idx) => {
            const id = `left-${idx}`;
            return (
              <FAQItem
                key={id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === id}
                onClick={() => handleToggle(id)}
              />
            );
          })}
        </div>

        <div className="flex flex-col">
          {rightColumnFAQs.map((faq, idx) => {
            const id = `right-${idx}`;
            return (
              <FAQItem
                key={id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === id}
                onClick={() => handleToggle(id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
