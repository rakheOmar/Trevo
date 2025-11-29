import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemedLogo } from "@/components/Logo";

export const siteConfig = {
  hero: {
    description:
      "Automated invoice reconciliation for modern finance teams. Sync data, detect anomalies, and close your books with absolute confidence.",
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About Us", url: "#" },
        { id: 2, title: "Careers", url: "#" },
        { id: 3, title: "Security", url: "#" },
        { id: 4, title: "Contact", url: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { id: 5, title: "Features", url: "#" },
        { id: 6, title: "Integrations", url: "#" },
        { id: 7, title: "Pricing", url: "#" },
        { id: 8, title: "Enterprise", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 9, title: "Help Center", url: "#" },
        { id: 10, title: "API Docs", url: "#" },
        { id: 11, title: "Blog", url: "#" },
        { id: 12, title: "Status", url: "#" },
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="flex w-full flex-col items-center pb-10 pt-10 bg-white/2">
      <div className="w-[74%]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mx-0 flex max-w-xs flex-col items-start justify-start gap-y-5">
            <Link to="/" className="flex items-center gap-2">
              <ThemedLogo />
            </Link>
            <p className="font-medium tracking-tight text-muted-foreground">
              {siteConfig.hero.description}
            </p>
          </div>
          <div className="pt-5 md:w-1/2">
            <div className="flex flex-col items-start justify-start gap-x-8 gap-y-3 md:flex-row md:items-center md:justify-end lg:pr-4">
              {siteConfig.footerLinks.map((column, columnIndex) => (
                <ul key={columnIndex} className="flex min-w-fit flex-col gap-y-3">
                  <li className="mb-2 text-sm font-semibold text-primary">{column.title}</li>
                  {column.links.map((link) => (
                    <li
                      key={link.id}
                      className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                    >
                      <Link to={link.url} className="hover:text-foreground transition-colors">
                        {link.title}
                      </Link>
                      <div className="flex size-4 transform items-center justify-center rounded border border-border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                        <ChevronRightIcon className="h-4 w-4" />
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}