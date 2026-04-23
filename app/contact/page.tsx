import { PageHeader } from "@/components/PageHeader";
import { ContactEmail } from "@/components/ContactEmail";

export const metadata = { title: "Contact — Skyler Rasmussen" };

export default function ContactPage() {
  return (
    <div className="page-body">
      <div className="container">
        <PageHeader
          kicker="contact"
          title={
            <>
              Let&apos;s build something <em>worth building</em>.
            </>
          }
        />
        <div className="contact-inner">
          <p className="contact-lead">
            Full-time roles, contracts under skdaddle, or a conversation about AI + networking —
            I read every email.
          </p>
          <ContactEmail />
          <div className="contact-links">
            <a href="https://github.com/skyras13" target="_blank" rel="noreferrer">
              github.com/skyras13
            </a>
            <a href="https://skdaddle.com" target="_blank" rel="noreferrer">
              skdaddle.com
            </a>
            <a href="https://tether.skdaddle.com" target="_blank" rel="noreferrer">
              tether.skdaddle.com
            </a>
            <a href="https://clearreport.skdaddle.com" target="_blank" rel="noreferrer">
              clearreport.skdaddle.com
            </a>
          </div>
        </div>
        <div className="footer">
          <div>© 2026 Skyler Rasmussen</div>
          <div>Saratoga Springs, UT</div>
        </div>
      </div>
    </div>
  );
}
