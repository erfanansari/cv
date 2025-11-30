import { RESUME_DATA } from "@/data/resume-data";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    url: "https://erfanansari.com",
    image: RESUME_DATA.avatarUrl,
    jobTitle: RESUME_DATA.about,
    description: RESUME_DATA.summary,
    email: RESUME_DATA.contact.email,
    telephone: RESUME_DATA.contact.tel,
    sameAs: RESUME_DATA.contact.social.map((social) => social.url),
    alumniOf: RESUME_DATA.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      url: edu.href,
    })),
    hasCredential: RESUME_DATA.honors.map((honor) => ({
      "@type": "EducationalOccupationalCredential",
      name: honor.title,
      description: honor.description,
      url: honor.href,
    })),
    knowsAbout: RESUME_DATA.skills,
    worksFor: RESUME_DATA.work.map((work) => ({
      "@type": "Organization",
      name: work.company,
      url: work.href,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
