import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppShell from './components/layout/AppShell';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import AccountManagementPage from './pages/platform/AccountManagementPage';
import ContactManagementPage from './pages/platform/ContactManagementPage';
import LeadOpportunityPage from './pages/platform/LeadOpportunityPage';
import ActivityTaskPage from './pages/platform/ActivityTaskPage';
import AgentsPage from './pages/AgentsPage';
import DashboardPage from './pages/DashboardPage';
import InsightsPage from './pages/InsightsPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import OnboardingPage from './pages/OnboardingPage';
import ChainEffectPage from './pages/ChainEffectPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* Marketing layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/platform/account-management" element={<AccountManagementPage />} />
        <Route path="/platform/contact-management" element={<ContactManagementPage />} />
        <Route path="/platform/lead-opportunity" element={<LeadOpportunityPage />} />
        <Route path="/platform/activity-task" element={<ActivityTaskPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route
          path="/privacy"
          element={
            <LegalPage
              title="Privacy Policy"
              intro="We respect your privacy. This policy explains what data we collect, how we use it, and the choices you have."
              sections={[
                {
                  h: 'Information We Collect',
                  p: 'We collect account information you provide directly (name, email, company), product usage data, and information from integrations you authorize.',
                },
                {
                  h: 'How We Use Information',
                  p: 'To operate and improve the service, deliver agentic features, communicate with you, and meet legal obligations.',
                },
                {
                  h: 'Data Sharing',
                  p: 'We do not sell personal data. We share data only with sub-processors needed to run the service, under strict contractual controls.',
                },
                {
                  h: 'Your Rights',
                  p: 'Access, correction, deletion, and portability rights are available. Contact privacy@ascoyo.com to exercise them.',
                },
              ]}
            />
          }
        />
        <Route
          path="/terms"
          element={
            <LegalPage
              title="Terms of Service"
              intro="By using Ascoyo, you agree to these terms. Please read them carefully."
              sections={[
                {
                  h: 'Use of Service',
                  p: 'You must use Ascoyo in compliance with applicable laws. You are responsible for the activity that occurs in your workspace.',
                },
                {
                  h: 'Subscription and Billing',
                  p: 'Paid plans renew automatically. You can cancel anytime; cancellation takes effect at the end of the current term.',
                },
                {
                  h: 'Intellectual Property',
                  p: 'You retain ownership of your data. Ascoyo retains ownership of the platform, models, and documentation.',
                },
                {
                  h: 'Termination',
                  p: 'We may suspend or terminate access for material breach. You can stop using the service at any time.',
                },
              ]}
            />
          }
        />
        <Route
          path="/security"
          element={
            <LegalPage
              title="Security"
              intro="Ascoyo is built for enterprise. Security and privacy are foundational, not bolted on."
              sections={[
                {
                  h: 'Compliance',
                  p: 'SOC 2 Type II, HIPAA, and DPDP India aligned controls. Independent audits performed annually.',
                },
                {
                  h: 'Encryption',
                  p: 'AES-256 at rest, TLS 1.3 in transit. Customer-managed keys available on Enterprise plans.',
                },
                {
                  h: 'Access Controls',
                  p: 'SSO/SAML, SCIM provisioning, granular RBAC, and complete audit trails of admin and agent actions.',
                },
                {
                  h: 'Data Residency',
                  p: 'Choose Mumbai, Sydney, or Virginia regions. Data does not leave your chosen region.',
                },
              ]}
            />
          }
        />
        <Route
          path="/api"
          element={
            <LegalPage
              title="API Documentation"
              intro="Build on Ascoyo with a clean REST API and event webhooks."
              sections={[
                {
                  h: 'Authentication',
                  p: 'API keys are scoped per workspace. Rotate keys from the admin console. OAuth 2.0 supported for partner apps.',
                },
                {
                  h: 'Rate Limits',
                  p: '600 requests per minute per workspace. Bursting headers included on every response.',
                },
                {
                  h: 'Webhooks',
                  p: 'Subscribe to deal, contact, account, and agent-action events. Signed payloads using HMAC-SHA256.',
                },
                {
                  h: 'SDKs',
                  p: 'Official SDKs for TypeScript, Python, and Go. Community SDKs available for Ruby and Java.',
                },
              ]}
            />
          }
        />
      </Route>

      {/* In-app shell (Dashboard / Agents / Pipeline / Insights) */}
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/pipeline" element={<ChainEffectPage />} />
        <Route path="/chain-effect" element={<ChainEffectPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Route>

      {/* 404 fallback (uses marketing layout) */}
      <Route element={<Layout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
