import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | cursor.new",
  description:
    "Privacy Policy for cursor.new - Learn how we collect, use, and protect your data",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl prose prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: January 17, 2025</p>

      <h2>Introduction</h2>
      <p>
        This Privacy Policy describes how cursor.new (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects and uses anonymous
        analytics data when you use our website.
      </p>

      <h2>Project Privacy</h2>
      <p>We want to be clear that:</p>
      <ul>
        <li>
          We do not store your project names, ideas, or configurations anywhere
        </li>
        <li>All project generation happens in your browser only</li>
        <li>We do not use any data for AI training or machine learning</li>
        <li>There is no commercial use or monetization of any user data</li>
      </ul>

      <h2>Information We Collect</h2>
      <p>
        We only collect anonymous analytics data through Vercel Analytics and
        Google Analytics. This includes:
      </p>
      <ul>
        <li>Page views and interactions</li>
        <li>Device information (browser type, operating system)</li>
        <li>Country-level location data</li>
        <li>Usage patterns and preferences</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>The anonymous analytics data is used solely to:</p>
      <ul>
        <li>Understand how our service is used</li>
        <li>Improve user experience</li>
        <li>Optimize website performance</li>
      </ul>

      <h2>Analytics Services</h2>
      <p>
        We use Vercel Analytics and Google Analytics to collect anonymous usage
        data. These services help us understand general usage patterns and
        improve our platform. No personally identifiable information is
        collected, and this data is never used for commercial purposes or AI
        training.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us.
      </p>
    </div>
  );
}
