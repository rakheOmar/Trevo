import { HelpCircle, Plus } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 transition-colors duration-300 hover:border-white/50">
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
          <Plus strokeWidth={1.5} className="h-6 w-6" />
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
    question: "What is this AI platform designed for?",
    answer:
      "Our platform is designed to supercharge your productivity by integrating advanced AI tools directly into your workflow, helping you generate content, analyze data, and automate tasks with ease.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer:
      "Not at all. We've built an intuitive interface that allows anyone to harness the power of AI without needing to write code or understand complex machine learning concepts.",
  },
  {
    question: "Which AI models power the tool?",
    answer:
      "We leverage a hybrid engine combining the speed of lightweight models with the reasoning capabilities of large language models to ensure the best results for every task.",
  },
];

const rightColumnFAQs = [
  {
    question: "Is there a free plan available?",
    answer:
      "Yes, our Starter plan is completely free and gives you access to essential tools and a limited number of prompts per month so you can explore the platform.",
  },
  {
    question: "Can I use this for business purposes?",
    answer:
      "Absolutely. Our Pro and Enterprise plans are designed for freelancers, startups, and teams scaling AI projects, offering commercial usage rights and priority support.",
  },
  {
    question: "How can I get support if I have issues?",
    answer:
      "We offer comprehensive support through our community forum for all users, and priority email or chat support for our Pro and Lifetime plan subscribers.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="mx-auto w-[79%] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-start gap-6">
        <Badge
          variant="outline"
          className="gap-2 rounded-full border-white/10 bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-transparent"
        >
          <HelpCircle className="h-4 w-4" />
          FAQ
        </Badge>

        <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
          Your questions, <span className="text-neutral-500">answered with clarity</span>
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
