import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";

const title = "Terms of Use — AlgoBridge";
const description = "Terms governing use of the AlgoBridge website.";
const EMAIL = "abhishek@algobridge.cc";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Use of Website",
    body: [
      "This website is provided to give visitors information about AlgoBridge's approach to enterprise workflow intelligence and orchestration, and to enable enquiries and call scheduling. By using this website you agree to use it only for lawful purposes and in a way that does not restrict or inhibit anyone else's use of it.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content on this website — including text, graphics, the AlgoBridge name, logo and any related marks — is the property of AlgoBridge or its licensors and is protected by applicable intellectual property laws. You may view and print pages for personal, non-commercial reference, but may not reproduce, distribute or create derivative works from this content without our prior written permission.",
    ],
  },
  {
    heading: "Website Content",
    body: [
      "The portfolio, research and industry content on this site describes representative or anonymized workflow patterns intended to illustrate how AlgoBridge's architecture applies, rather than a complete or exhaustive account of every engagement.",
    ],
  },
  {
    heading: "No Warranty",
    body: [
      'This website and its content are provided "as is" without warranties of any kind, whether express or implied, including but not limited to accuracy, completeness or fitness for a particular purpose. We do not warrant that the website will be uninterrupted or error-free.',
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, AlgoBridge will not be liable for any indirect, incidental or consequential loss or damage arising from your use of, or inability to use, this website.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "This website links to third-party services, including Calendly for scheduling. We do not control and are not responsible for the content, availability or practices of any third-party site you access from a link on this website.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update these terms from time to time. Continued use of the website after a change constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be directed to ${EMAIL}.`],
  },
];

function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        sub="Terms governing use of the AlgoBridge website."
        trail={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-10">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={30 * i}>
                <div>
                  <h2 className="text-[1.15rem] font-semibold">{s.heading}</h2>
                  <div className="mt-3 grid gap-3">
                    {s.body.map((p) => (
                      <p key={p} className="text-[0.95rem] leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
