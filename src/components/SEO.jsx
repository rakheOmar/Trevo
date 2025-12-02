import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Trevo` : "Trevo"}</title>
      <meta
        name="description"
        content={description || "Manage your workflow efficiently with Trevo."}
      />
      <link rel="canonical" href={url || window.location.href} />

      <meta property="og:title" content={title ? `${title} | Trevo` : "Trevo"} />
      <meta
        property="og:description"
        content={description || "Manage your workflow efficiently with Trevo."}
      />
      <meta property="og:url" content={url || window.location.href} />

      <meta name="twitter:title" content={title ? `${title} | Trevo` : "Trevo"} />
      <meta
        name="twitter:description"
        content={description || "Manage your workflow efficiently with Trevo."}
      />
    </Helmet>
  );
};

export default SEO;
