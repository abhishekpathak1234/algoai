import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";

const title = "Privacy Policy — AlgoBridge";
const description = "How AlgoBridge collects, uses and protects information on this website.";
const EMAIL = "abhishek@algobridge.cc";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Information We Collect",
    body: [
      "This website does not currently include an account system, checkout flow or lead-capture form. The only information we receive directly is what you choose to share: by emailing us, or through details you provide when scheduling a call via Calendly.",
      "Standard web server and hosting logs (such as IP address, browser type and page requests) may be recorded by our hosting and infrastructure providers as part of normal operation.",
    ],
  },
  {
    heading: "How We Use Information",
    body: [
      "Information you send us by email or through a scheduled call is used solely to respond to your enquiry and to prepare for and conduct that conversation.",
      "We do not sell, rent or trade personal information to third parties.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "This website does not set its own tracking or advertising cookies. If you use the Calendly link to book a call, Calendly may set cookies on its own domain under its own policy once you leave this site.",
    ],
  },
  {
    heading: "Analytics",
    body: [
      "This website does not currently run third-party analytics or tracking scripts. If that changes, this policy will be updated to reflect it.",
    ],
  },
  {
    heading: "Communications",
    body: [
      "If you email us or book a call, we will use the contact details you provide to communicate with you about that enquiry. We do not add you to a marketing list without your consent.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "This website is served over HTTPS. We take reasonable steps to protect any information shared with us, but no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "This site uses Google Fonts to load typography and Calendly to power call scheduling. Each of these services operates under its own privacy policy once you interact with it. We do not control, and are not responsible for, the privacy practices of third-party services.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can choose not to share any personal information with us — the website is fully browsable without doing so. If you have already contacted us and would like your information corrected or deleted, email us using the address below.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about this policy can be directed to ${EMAIL}.`],
  },
  {
    heading: "Updates",
    body: [
      "We may update this policy as the website or our practices change. Material changes will be reflected on this page.",
    ],
  },
];

function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        sub="How AlgoBridge collects, uses and protects information on this website."
        trail={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
