import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

const EducationalProposalPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <SpreadsheetTaskbar
        isAuthenticated={false}
        currentUser={null}
        onLogout={() => {}}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />
      <PageLayout title="Educational Funding Proposal">
      {/* Dev sidebar enabled for navigation */}
      <style>{`
        body {
          background: #000000 !important;
        }
      `}</style>
      <div className="educational-proposal-page">
        <style>{`
          .educational-proposal-page {
            max-width: 100%;
            margin: 0;
            padding: 80px 20px 40px 20px;
            line-height: 1.6;
            color: #ffffff;
            background: #000000;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .executive-summary {
            background: #111111;
            padding: 20px;
            border-left: 4px solid #2196f3;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            color: #ffffff;
            border: 1px solid #333333;
          }
          
          .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
            margin: 40px 0;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .feature-box {
            background: #1a1a1a;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.1);
            color: #ffffff;
            border: 1px solid #444444;
          }
          
          .feature-box h4 {
            color: #2196f3;
            margin-top: 0;
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: 300;
          }
          
          .feature-box ul {
            margin: 0;
            padding-left: 20px;
          }
          
          .feature-box li {
            margin: 8px 0;
            font-size: 14px;
            color: #cccccc;
            font-weight: 300;
          }
          
          .quote {
            font-style: italic;
            text-align: center;
            background: #111111;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border: 1px solid #2196f3;
            color: #ffffff;
            font-weight: 300;
          }
          
          .funding-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: #1a1a1a;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.1);
            border: 1px solid #444444;
          }
          
          .funding-table th,
          .funding-table td {
            border: 1px solid #444444;
            padding: 12px;
            text-align: left;
          }
          
          .funding-table th {
            background: #2a2a2a;
            font-weight: 300;
            font-size: 14px;
            color: #2196f3;
          }
          
          .funding-table td {
            font-size: 14px;
            color: #cccccc;
            font-weight: 300;
          }
          
          .roadmap-phase {
            background: #1a1a1a;
            padding: 20px;
            margin: 15px 0;
            border-left: 4px solid #f44336;
            border-radius: 0 8px 8px 0;
            border: 1px solid #444444;
            color: #ffffff;
          }
          
          .roadmap-phase h3 {
            margin-top: 0;
            color: #f44336;
            font-size: 18px;
            font-weight: 300;
          }

          .download-section {
            background: #1a1a1a;
            padding: 24px;
            border-radius: 8px;
            border: 1px solid #2196f3;
            margin: 30px 0;
            text-align: center;
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
          }

          .download-button {
            background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
            color: #000000 !important;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            text-decoration: none !important;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
            margin-top: 12px;
          }

          .download-button:visited {
            color: #000000 !important;
          }

          .download-button:link {
            color: #000000 !important;
          }

          .download-button:hover {
            background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
            color: #000000 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
          }

          .download-description {
            color: #cccccc;
            margin: 0 0 8px 0;
            font-size: 14px;
          }

          .proposal-header {
            margin-top: 100px;
            margin-bottom: 40px;
          }
          
          .roadmap-phase ul {
            margin-bottom: 0;
          }
          
          .roadmap-phase li {
            color: #cccccc;
            font-weight: 300;
          }
          
          .conclusion-box {
            border: 2px solid #4caf50;
            background: #111111;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            color: #ffffff;
          }
          
          .conclusion-box h2 {
            color: #4caf50;
            margin-top: 0;
            font-weight: 200;
          }
          
          .conclusion-box p {
            color: #cccccc;
            font-weight: 300;
          }
          
          .section-header {
            color: #2196f3;
            border-bottom: 2px solid #2196f3;
            padding-bottom: 10px;
            margin-top: 40px;
            margin-bottom: 20px;
            font-weight: 200;
          }
          
          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin: 20px 0;
          }
          
          .metric-item {
            background: #1a1a1a;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2196f3;
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.1);
            border: 1px solid #444444;
            color: #cccccc;
          }
          
          .metric-item strong {
            color: #2196f3;
            font-weight: 300;
          }
          
          .educational-proposal-page h1,
          .educational-proposal-page h2,
          .educational-proposal-page h3,
          .educational-proposal-page h4 {
            color: #2196f3;
            font-weight: 200;
          }
          
          .educational-proposal-page p,
          .educational-proposal-page li {
            color: #cccccc;
            font-weight: 300;
          }

          @media (max-width: 768px) {
            .educational-proposal-page {
              padding: 15px;
            }
            
            .feature-grid {
              grid-template-columns: 1fr;
            }
            
            .funding-table {
              font-size: 12px;
            }
            
            .funding-table th,
            .funding-table td {
              padding: 8px;
            }
          }
        `}</style>

        <div className="proposal-header">
          <h1 style={{ color: '#ffffff', fontSize: '32px', marginBottom: '10px', fontWeight: '600' }}>
            BITCOIN SPREADSHEETS EDUCATIONAL INITIATIVE
          </h1>
          <h2 style={{ color: '#3498db', fontSize: '20px', marginBottom: '10px' }}>
            Trust Funding Proposal for Decentralized Financial Literacy Platform
          </h2>
          <h3 style={{ color: '#7f8c8d', fontSize: '16px', fontStyle: 'italic', marginBottom: '30px' }}>
            Blockchain-Based Spreadsheet Application for Educational Financial Analysis and Data Sovereignty
          </h3>
        </div>

        <div className="download-section">
          <p className="download-description">Download the complete proposal document</p>
          <a 
            href="/Bitcoin Spreadsheets Educational Initiative - Trust Funding Proposal.pdf" 
            className="download-button"
            download
          >
            📄 Download PDF Proposal
          </a>
        </div>

        <div className="executive-summary">
          <h2 style={{ marginTop: 0, color: '#ffffff', fontSize: '24px', fontWeight: '600' }}>EXECUTIVE SUMMARY</h2>
          <p>
            Bitcoin Spreadsheets represents a revolutionary educational technology platform that enables students and educators to manage financial data, create budgets, and perform economic analysis using a fully decentralized spreadsheet application built on the Bitcoin SV blockchain. Through complete data ownership, cryptographic security, and immutable audit trails, the platform teaches students practical financial literacy while demonstrating the principles of data sovereignty and digital currency systems. This proposal outlines how the <strong>Bitcoin Corporation Development Trust</strong> can fund the development and deployment of this educational application to schools and universities globally.
          </p>
        </div>

        <h2 className="section-header">EDUCATIONAL PROBLEM STATEMENT</h2>

        <h3 style={{ color: '#e74c3c' }}>Financial Literacy Crisis</h3>
        <p>
          Modern education faces a critical gap in financial literacy and data sovereignty education. Students graduate without understanding personal finance, spreadsheet analysis, or the importance of data ownership. Traditional educational tools are centralized, proprietary, and fail to teach students about the digital currency economy they will inherit.
        </p>

        <h3 style={{ color: '#e74c3c' }}>Current System Limitations</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Centralized Control</strong>: Students' work is owned by corporations like Google and Microsoft</li>
          <li><strong>No Financial Context</strong>: Spreadsheet education lacks real-world financial applications</li>
          <li><strong>Privacy Violations</strong>: Student data is mined and analyzed by tech giants</li>
          <li><strong>Vendor Lock-in</strong>: Students become dependent on proprietary platforms</li>
          <li><strong>No Audit Trails</strong>: No immutable record of student learning progress</li>
          <li><strong>Limited Blockchain Education</strong>: No practical exposure to digital currency systems</li>
        </ul>

        <div className="quote">
          "Every calculation matters when financial literacy is built on principles of data sovereignty. Students learn to own their data while mastering the spreadsheet skills essential for the digital economy."
        </div>

        <h2 className="section-header">BITCOIN SPREADSHEETS SOLUTION OVERVIEW</h2>

        <h3 style={{ color: '#3498db' }}>Blockchain-Based Financial Education</h3>
        <p>
          Bitcoin Spreadsheets transforms traditional spreadsheet education by combining powerful analytical tools with blockchain technology, teaching students both financial literacy and data sovereignty through hands-on experience with decentralized technology.
        </p>

        <div className="feature-grid">
          <div className="feature-box">
            <h4>REAL-TIME BLOCKCHAIN STORAGE</h4>
            <ul>
              <li><strong>Continuous Encryption</strong>: Every cell automatically encrypted and stored on blockchain</li>
              <li><strong>Ownership Proof</strong>: Immutable record of student work ownership</li>
              <li><strong>Version Control</strong>: Complete history of financial analysis development</li>
              <li><strong>Audit Trails</strong>: Transparent record of learning progress</li>
              <li><strong>Data Portability</strong>: Students own and control their educational data</li>
            </ul>
          </div>
          
          <div className="feature-box">
            <h4>FINANCIAL LITERACY INTEGRATION</h4>
            <ul>
              <li><strong>Budget Templates</strong>: Pre-built templates for personal and business budgeting</li>
              <li><strong>Investment Tracking</strong>: Real-time cryptocurrency and traditional asset analysis</li>
              <li><strong>Economic Models</strong>: Built-in tools for economic analysis and forecasting</li>
              <li><strong>Micro-payments</strong>: Students earn Bitcoin for completing financial literacy exercises</li>
              <li><strong>Currency Education</strong>: Native integration with Bitcoin and digital currency concepts</li>
            </ul>
          </div>
        </div>

        <h2 className="section-header">EDUCATIONAL APPLICATIONS AND FEATURES</h2>

        <h3 style={{ color: '#8e44ad' }}>Financial Literacy Curriculum</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Personal Finance Modules</strong>: Budget creation, expense tracking, and savings goal planning</li>
          <li><strong>Investment Education</strong>: Portfolio management, risk analysis, and return calculations</li>
          <li><strong>Business Finance</strong>: Cash flow analysis, break-even calculations, and financial projections</li>
          <li><strong>Economic Analysis</strong>: Supply and demand modeling, market analysis, and economic indicators</li>
          <li><strong>Cryptocurrency Integration</strong>: Bitcoin price tracking, wallet management, and digital currency economics</li>
        </ul>

        <h3 style={{ color: '#8e44ad' }}>Data Sovereignty Education</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Ownership Awareness</strong>: Students learn the importance of data ownership through practical experience</li>
          <li><strong>Privacy Education</strong>: Hands-on learning about encryption and data protection</li>
          <li><strong>Decentralization Concepts</strong>: Understanding distributed systems through blockchain storage</li>
          <li><strong>Digital Rights</strong>: Teaching constitutional principles of digital privacy and ownership</li>
          <li><strong>Future-Ready Skills</strong>: Preparing students for a decentralized digital economy</li>
        </ul>

        <h2 className="section-header">FUNDING REQUEST AND DEPLOYMENT STRATEGY</h2>

        <p>
          The Trust's educational remit enables funding of Bitcoin Spreadsheets development and deployment to educational institutions globally. This represents a strategic investment in financial literacy and blockchain education that demonstrates the practical benefits of digital currency systems to students, educators, and society.
        </p>

        <table className="funding-table">
          <thead>
            <tr>
              <th>Funding Phase</th>
              <th>Investment Amount</th>
              <th>Scope</th>
              <th>Beneficiaries</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phase 1: Initial Platform Development</td>
              <td>£75,000</td>
              <td>Core spreadsheet platform prototype with basic financial literacy modules</td>
              <td>Development team, proof of concept</td>
            </tr>
            <tr>
              <td>Phase 2: Platform Completion & Testing</td>
              <td>£750,000</td>
              <td>Complete educational spreadsheet platform with blockchain integration and comprehensive testing</td>
              <td>Development team, beta testing schools</td>
            </tr>
            <tr>
              <td>Phase 3: UK Educational Pilot</td>
              <td>£1,200,000</td>
              <td>Deploy to 150 UK schools and universities with comprehensive financial literacy training</td>
              <td>15,000+ students, 1,500+ educators</td>
            </tr>
            <tr>
              <td>Phase 4: International Expansion</td>
              <td>£3,000,000</td>
              <td>Global deployment with localization and educational partnerships</td>
              <td>150,000+ students worldwide</td>
            </tr>
            <tr>
              <td>Phase 5: Advanced Features</td>
              <td>£1,500,000</td>
              <td>AI enhancements, advanced financial tools, enterprise curriculum integration</td>
              <td>Enhanced financial literacy outcomes globally</td>
            </tr>
          </tbody>
        </table>

        <h2 className="section-header">IMPLEMENTATION ROADMAP</h2>

        <div className="roadmap-phase">
          <h3>Phase 1: Initial Platform Development (Months 1-3)</h3>
          <ul>
            <li>Core spreadsheet platform prototype development</li>
            <li>Basic financial literacy module integration</li>
            <li>Proof of concept demonstration</li>
            <li>Initial user interface design and testing</li>
          </ul>
        </div>

        <div className="roadmap-phase">
          <h3>Phase 2: Platform Completion & Testing (Months 4-8)</h3>
          <ul>
            <li>Complete educational spreadsheet platform with blockchain integration</li>
            <li>Comprehensive financial literacy curriculum modules</li>
            <li>Teacher dashboard and student progress tracking</li>
            <li>Assessment and certification capabilities</li>
            <li>Micropayment system for educational achievements</li>
            <li>Beta testing with select pilot schools</li>
          </ul>
        </div>

        <div className="roadmap-phase">
          <h3>Phase 3: UK Educational Pilot (Months 9-14)</h3>
          <ul>
            <li>Partner with 15 pilot schools across different educational levels</li>
            <li>Deploy comprehensive educator training programs</li>
            <li>Implement student orientation and digital currency education</li>
            <li>Monitor financial literacy improvements and engagement</li>
            <li>Collect data on educational outcomes and platform effectiveness</li>
            <li>Develop partnerships with UK financial education authorities</li>
          </ul>
        </div>

        <div className="roadmap-phase">
          <h3>Phase 3: National UK Deployment (Months 15-20)</h3>
          <ul>
            <li>Scale to 150+ schools across England, Scotland, Wales, Northern Ireland</li>
            <li>Establish partnerships with education authorities and examination boards</li>
            <li>Integrate with existing educational technology infrastructure</li>
            <li>Launch public awareness campaign highlighting financial literacy benefits</li>
            <li>Develop curriculum resources for constitutional and digital money education</li>
          </ul>
        </div>

        <div className="roadmap-phase">
          <h3>Phase 4: International Expansion (Months 21-26)</h3>
          <ul>
            <li>Deploy to schools in Commonwealth countries and EU partners</li>
            <li>Establish diplomatic partnerships for educational technology exports</li>
            <li>Create localized versions supporting different financial systems</li>
            <li>Launch global financial literacy research program</li>
            <li>Position UK as leader in blockchain-based financial education technology</li>
          </ul>
        </div>

        <h2 className="section-header">EXPECTED OUTCOMES AND SUCCESS METRICS</h2>

        <h3 style={{ color: '#16a085' }}>Educational Impact Metrics</h3>
        <div className="metrics-grid">
          <div className="metric-item">
            <strong>Financial Literacy Improvement</strong>: 60% increase in financial literacy assessment scores
          </div>
          <div className="metric-item">
            <strong>Student Engagement</strong>: 50% increase in time spent on financial analysis projects
          </div>
          <div className="metric-item">
            <strong>Teacher Efficiency</strong>: 40% reduction in time spent on data management and assessment
          </div>
          <div className="metric-item">
            <strong>Learning Outcomes</strong>: 35% improvement in practical financial skills assessments
          </div>
          <div className="metric-item">
            <strong>Digital Literacy</strong>: 100% of participating students gain practical blockchain and digital currency knowledge
          </div>
          <div className="metric-item">
            <strong>Data Sovereignty Awareness</strong>: 90% improvement in understanding of digital rights and privacy
          </div>
        </div>

        <h3 style={{ color: '#16a085' }}>Trust Mission Outcomes</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Educational Technology Leadership</strong>: UK recognized globally for innovative blockchain financial education applications</li>
          <li><strong>Digital Currency Adoption</strong>: Students and families gain practical understanding of digital money benefits and usage</li>
          <li><strong>Constitutional Education</strong>: Enhanced civic education through blockchain-based privacy and ownership principles</li>
          <li><strong>Public Benefit Demonstration</strong>: Clear evidence of Bitcoin technology serving public good in financial education</li>
          <li><strong>International Soft Power</strong>: UK educational technology expertise and values exported globally</li>
        </ul>

        <div className="conclusion-box">
          <h2>STRATEGIC CONCLUSION</h2>
          <p>
            Bitcoin Spreadsheets' educational application represents the perfect synthesis of the Trust's educational mission with practical blockchain technology deployment in financial literacy. By funding this initiative, the Trust demonstrates how Bitcoin technology can serve genuine public benefit while preparing students for the digital currency future and teaching essential life skills.
          </p>
          
          <p>
            <strong>The ultimate achievement:</strong> A generation of students educated in financial literacy, data sovereignty, and constitutional principles through blockchain technology, positioning the UK as the global leader in digital currency education and financial technology innovation.
          </p>
          
          <p>
            This initiative fulfills Dr. Wright's educational vision while serving the Trust's public benefit mission, creating a lasting legacy of financial literacy and technological sovereignty for future generations.
          </p>
        </div>

        <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px', borderTop: '1px solid #ddd', color: '#666' }}>
          <p>
            <strong>The Bitcoin Corporation Development Trust</strong><br />
            Bitcoin Spreadsheets Educational Initiative Funding Proposal<br />
            November 2025 - Public Funding Proposal
          </p>
        </footer>
      </div>
      </PageLayout>
    </>
  );
};

export default EducationalProposalPage;