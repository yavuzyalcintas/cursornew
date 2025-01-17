import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | cursor.new",
  description: "Terms and Conditions for using cursor.new",
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl prose prose-invert">
      <h1>Terms and Conditions</h1>
      <p>Last updated: January 17, 2025</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using cursor.new (&ldquo;the Service&rdquo;), you
        accept and agree to be bound by these Terms and Conditions and Privacy
        Policy.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        cursor.new is a web-based tool for project initialization and
        configuration. The service is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without any warranties. All project generation happens
        in your browser, and we do not store any of your project information or
        ideas.
      </p>

      <h2>3. User Obligations</h2>
      <ul>
        <li>
          You must use the Service in accordance with applicable laws and
          regulations
        </li>
        <li>You agree not to misuse or attempt to disrupt the Service</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality are
        owned by cursor.new and are protected by international copyright,
        trademark, and other intellectual property laws. Your project ideas and
        configurations remain entirely yours, as we do not store or process them
        in any way.
      </p>

      <h2>5. Analytics and Tracking</h2>
      <p>We use third-party analytics services including:</p>
      <ul>
        <li>Vercel Analytics for performance monitoring</li>
        <li>Google Analytics for usage tracking</li>
      </ul>
      <p>
        These services collect anonymous usage data and are subject to their own
        privacy policies. We do not use this data for commercial purposes or AI
        training.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, cursor.new shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages resulting from your use of the Service.
      </p>

      <h2>7. Service Modifications</h2>
      <p>
        We reserve the right to modify or discontinue the Service at any time
        without notice. We shall not be liable to you or any third party for any
        modification, suspension, or discontinuance of the Service.
      </p>

      <h2>8. Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to the Service
        immediately, without prior notice, for any reason including breach of
        these Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the jurisdiction in which cursor.new operates, without regard to
        its conflict of law provisions.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify
        users of any material changes by posting the new Terms on this page.
      </p>

      <h2>11. Contact Information</h2>
      <p>For any questions about these Terms, please contact us.</p>
    </div>
  );
}
