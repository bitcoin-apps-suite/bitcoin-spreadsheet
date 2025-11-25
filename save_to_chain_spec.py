#!/usr/bin/env python3

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.colors import black, blue, grey, darkblue
from reportlab.lib import colors
import datetime

def create_save_to_chain_spec():
    # Create PDF document
    filename = "Save_to_Chain_Feature_Spec.pdf"
    doc = SimpleDocTemplate(filename, pagesize=A4, 
                          topMargin=1*inch, bottomMargin=1*inch,
                          leftMargin=1*inch, rightMargin=1*inch)
    
    # Get sample style sheet and create custom styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Title'],
        fontSize=24,
        alignment=TA_CENTER,
        spaceAfter=30,
        textColor=darkblue
    )
    
    header_style = ParagraphStyle(
        'CustomHeader',
        parent=styles['Heading1'],
        fontSize=16,
        spaceAfter=12,
        spaceBefore=20,
        textColor=darkblue
    )
    
    subheader_style = ParagraphStyle(
        'CustomSubHeader',
        parent=styles['Heading2'],
        fontSize=14,
        spaceAfter=8,
        spaceBefore=12,
        textColor=black
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=6,
        alignment=TA_JUSTIFY,
        leftIndent=0,
        rightIndent=0
    )
    
    highlight_style = ParagraphStyle(
        'Highlight',
        parent=styles['Normal'],
        fontSize=12,
        spaceAfter=8,
        alignment=TA_CENTER,
        textColor=darkblue,
        fontName='Helvetica-Bold'
    )
    
    # Build content
    content = []
    
    # Title Page
    content.append(Paragraph("SAVE TO CHAIN", title_style))
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("The Universal Blockchain Save Button", styles['Heading1']))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph("Core Feature Specification & Investment Overview", styles['Heading2']))
    content.append(Spacer(1, 0.5*inch))
    content.append(Paragraph("Bitcoin Corporation Ltd", body_style))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph(f"Version 1.0 - {datetime.datetime.now().strftime('%B %d, %Y')}", styles['Normal']))
    content.append(Spacer(1, 1*inch))
    
    # Executive Summary Box
    content.append(Paragraph("EXECUTIVE SUMMARY", highlight_style))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph("""
    The "Save to Chain" feature represents the most fundamental innovation in digital work preservation since the invention 
    of the save button itself. Every Bitcoin Application includes this standardized feature that automatically creates an 
    immutable, chronological record of user work from career genesis to retirement - a complete professional legacy stored 
    permanently on the Bitcoin blockchain.
    """, body_style))
    content.append(PageBreak())
    
    # What is Save to Chain
    content.append(Paragraph("WHAT IS SAVE TO CHAIN?", header_style))
    
    content.append(Paragraph("The Concept", subheader_style))
    content.append(Paragraph("""
    Save to Chain transforms every save action into a permanent blockchain record. When users press "Save" in any 
    Bitcoin Application, the system creates cryptographic hashes of their work and stores them in a Git-like Merkle tree 
    structure on the Bitcoin SV blockchain. This creates an unbreakable chain of professional output that spans entire careers.
    """, body_style))
    
    content.append(Paragraph("How It Works", subheader_style))
    content.append(Paragraph("""
    Every save operation generates a cryptographic hash of the document or data. These hashes are linked together in 
    chronological order, creating a complete audit trail of creative and professional work. The system can store hashes 
    only (for privacy) or full documents (for transparency), depending on user preferences and application requirements.
    """, body_style))
    
    content.append(Paragraph("Universal Implementation", subheader_style))
    content.append(Paragraph("""
    This feature is designed to become the standard across ALL software applications with save functionality. From word 
    processors to spreadsheets, from design tools to code editors, every application will eventually incorporate blockchain-based 
    saving as the default method of preserving human work.
    """, body_style))
    
    # Why This Matters
    content.append(Paragraph("WHY THIS INNOVATION MATTERS", header_style))
    
    content.append(Paragraph("Professional Legacy Preservation", subheader_style))
    content.append(Paragraph("""
    For the first time in human history, individuals can maintain a complete, tamper-proof record of their professional 
    output. From the first document saved as a student to the final will and testament, every piece of work is preserved 
    in chronological order with cryptographic proof of authenticity and timing.
    """, body_style))
    
    content.append(Paragraph("Intellectual Property Protection", subheader_style))
    content.append(Paragraph("""
    Automatic timestamping and hashing provide ironclad proof of creation dates and content authenticity. This eliminates 
    disputes over intellectual property ownership and provides legal-grade evidence of creative work and innovation timing.
    """, body_style))
    
    content.append(Paragraph("Career Documentation", subheader_style))
    content.append(Paragraph("""
    Employers, clients, and collaborators can verify work history and professional development through blockchain records. 
    This creates unprecedented transparency and accountability in professional relationships while maintaining privacy controls.
    """, body_style))
    
    # Investment Value Proposition
    content.append(Paragraph("INVESTMENT VALUE PROPOSITION", header_style))
    
    content.append(Paragraph("Market Transformation Potential", subheader_style))
    content.append(Paragraph("""
    Save to Chain has the potential to become as ubiquitous as the save button itself. Every software application that 
    handles user-created content represents a potential licensing opportunity or implementation partner. The addressable 
    market includes virtually every productivity software company globally.
    """, body_style))
    
    content.append(Paragraph("First Mover Advantage", subheader_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd is pioneering this fundamental shift in how digital work is preserved. Early investment 
    positions stakeholders at the forefront of a technology that will become standard across the entire software industry 
    within the next decade.
    """, body_style))
    
    content.append(Paragraph("Implementation Simplicity", subheader_style))
    content.append(Paragraph("""
    The core functionality is straightforward to implement and can be integrated into existing applications through simple 
    API calls. This low barrier to adoption accelerates market penetration and reduces development costs for implementation 
    partners.
    """, body_style))
    
    # Technical Foundation
    content.append(Paragraph("TECHNICAL FOUNDATION", header_style))
    
    content.append(Paragraph("Built for Scale", subheader_style))
    content.append(Paragraph("""
    The system leverages Bitcoin SV's massive transaction capacity and low fees to handle millions of save operations 
    daily. Merkle tree structures ensure efficient storage while maintaining complete audit trails for billions of 
    documents across millions of users.
    """, body_style))
    
    content.append(Paragraph("Gateway to Advanced Features", subheader_style))
    content.append(Paragraph("""
    Save to Chain serves as the foundation for numerous advanced features including work tokenization, career securitization, 
    real-time data markets, and professional syndication. Each additional feature layer increases platform value and 
    revenue potential exponentially.
    """, body_style))
    
    content.append(PageBreak())
    
    # Technical Design Specification
    content.append(Paragraph("TECHNICAL DESIGN SPECIFICATION", title_style))
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Architecture Overview", header_style))
    
    # Create architecture flow diagram in text
    flow_data = [
        ["User Action", "→", "Hash Generation", "→", "Blockchain Storage", "→", "Merkle Tree Update"],
        ["Press Save", "", "SHA-256 Hash", "", "BSV Transaction", "", "Career Timeline"],
        ["Document Edit", "", "Content Hash", "", "Timestamp Proof", "", "Work History"],
        ["File Creation", "", "Metadata Hash", "", "Immutable Record", "", "Professional Legacy"]
    ]
    
    flow_table = Table(flow_data, colWidths=[1.3*inch, 0.3*inch, 1.3*inch, 0.3*inch, 1.3*inch, 0.3*inch, 1.3*inch])
    flow_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.lightblue),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 1, colors.black)
    ]))
    content.append(flow_table)
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Core Components", subheader_style))
    
    # Technical components table
    components_data = [
        ["Component", "Function", "Implementation"],
        ["Hash Generator", "Creates SHA-256 hash of document content", "Client-side JavaScript/native code"],
        ["Blockchain Interface", "Submits hash to BSV network", "BSV API integration"],
        ["Merkle Tree Manager", "Maintains chronological work history", "Local + blockchain storage"],
        ["Privacy Controller", "Manages hash vs. full document storage", "User preference settings"],
        ["Verification Engine", "Proves document authenticity", "Hash comparison algorithm"],
        ["Timeline Viewer", "Displays career work history", "Web interface/mobile app"]
    ]
    
    components_table = Table(components_data, colWidths=[1.5*inch, 2.5*inch, 2.5*inch])
    components_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.grey),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('GRID', (0,0), (-1,-1), 1, colors.black)
    ]))
    content.append(components_table)
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Implementation Requirements", subheader_style))
    
    # Requirements list
    requirements = [
        "Bitcoin SV wallet integration for transaction creation",
        "SHA-256 hashing library for content fingerprinting",
        "Merkle tree data structure for efficient history management",
        "API endpoint for blockchain transaction submission",
        "Local storage for offline operation and performance",
        "User authentication and privacy preference management"
    ]
    
    for req in requirements:
        content.append(Paragraph(f"• {req}", body_style))
    
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("Development Timeline", subheader_style))
    
    timeline_data = [
        ["Phase", "Duration", "Deliverable"],
        ["Phase 1: Core Infrastructure", "4 weeks", "Basic hash generation and blockchain storage"],
        ["Phase 2: Merkle Tree Implementation", "3 weeks", "Chronological work history tracking"],
        ["Phase 3: Privacy Controls", "2 weeks", "User preference management system"],
        ["Phase 4: Verification Tools", "3 weeks", "Document authenticity verification"],
        ["Phase 5: Integration APIs", "2 weeks", "Third-party application integration"],
        ["Phase 6: Testing & Optimization", "2 weeks", "Performance tuning and security audit"]
    ]
    
    timeline_table = Table(timeline_data, colWidths=[2.2*inch, 1.3*inch, 3*inch])
    timeline_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.lightgrey),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('GRID', (0,0), (-1,-1), 1, colors.black)
    ]))
    content.append(timeline_table)
    
    content.append(PageBreak())
    
    # Implementation Challenges & Solutions
    content.append(Paragraph("IMPLEMENTATION CHALLENGES & SOLUTIONS", title_style))
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("The Wallet Integration Challenge", header_style))
    content.append(Paragraph("""
    For users to save to chain, they need Bitcoin wallet functionality integrated into their applications. This presents 
    several challenges that Bitcoin Corporation Ltd is uniquely positioned to solve.
    """, body_style))
    
    content.append(Paragraph("Problem: Third-Party Dependencies", subheader_style))
    content.append(Paragraph("""
    Traditional applications like Microsoft Word cannot be modified to include native blockchain functionality. Users would 
    need to make API calls to external services, creating dependencies on third parties for payment and transaction processing. 
    This undermines the peer-to-peer nature of blockchain technology and creates potential points of failure.
    """, body_style))
    
    content.append(Paragraph("Solution: Subscription-Based Transaction Processing", subheader_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd solves this by covering blockchain transaction costs through user subscriptions. For a small 
    monthly fee, users can save unlimited documents to chain without worrying about individual transaction costs or wallet 
    management. This approach scales efficiently while maintaining user simplicity.
    """, body_style))
    
    content.append(Paragraph("Problem: Incumbent Software Limitations", subheader_style))
    content.append(Paragraph("""
    Existing software applications cannot be retrofitted with Save to Chain functionality. Microsoft, Google, and other 
    incumbent software providers have no incentive to integrate blockchain-based saving into their existing products, 
    creating a fundamental adoption barrier.
    """, body_style))
    
    content.append(Paragraph("Solution: Wholesale Application Rebuilding", subheader_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd is rebuilding essential productivity applications from the ground up with native blockchain 
    functionality. Bitcoin Writer, Bitcoin Spreadsheets, Bitcoin Email, and other applications provide familiar 
    functionality while offering superior blockchain-based features that incumbent software cannot match.
    """, body_style))
    
    content.append(Paragraph("The Adoption Strategy", header_style))
    
    content.append(Paragraph("Multi-Dimensional Value Creation", subheader_style))
    content.append(Paragraph("""
    To overcome adoption challenges, Bitcoin Applications must provide compelling value beyond just blockchain saving. 
    Our applications incorporate tokenization, real-time collaboration, data monetization, and professional verification 
    features that create immediate user value while establishing the Save to Chain standard.
    """, body_style))
    
    content.append(Paragraph("Network Effects & Professional Benefits", subheader_style))
    content.append(Paragraph("""
    As professionals build their blockchain work histories, the platform becomes more valuable for employers, clients, 
    and collaborators seeking to verify credentials and work history. This creates strong network effects that accelerate 
    adoption as early users gain competitive advantages in their professional markets.
    """, body_style))
    
    content.append(PageBreak())
    
    # IP Strategy and Open Source Model
    content.append(Paragraph("INTELLECTUAL PROPERTY & OPEN SOURCE STRATEGY", header_style))
    
    content.append(Paragraph("Patent Portfolio Development", subheader_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd is pursuing strategic patents on key innovations including blockchain-based document versioning, 
    career timeline creation, and subscription-based transaction processing. These patents protect core innovations while 
    enabling licensing opportunities with major software providers.
    """, body_style))
    
    content.append(Paragraph("Open Source Foundation", subheader_style))
    content.append(Paragraph("""
    The basic Save to Chain functionality is open-sourced under MIT license to encourage adoption and community development. 
    This strategy builds ecosystem support while maintaining proprietary control over advanced features and enterprise 
    implementations that generate revenue.
    """, body_style))
    
    content.append(Paragraph("Licensing & Partnership Strategy", subheader_style))
    content.append(Paragraph("""
    Major software companies can license Save to Chain technology for integration into existing products. This provides 
    revenue opportunities while accelerating market adoption through established user bases and distribution channels.
    """, body_style))
    
    # Revenue Model
    content.append(Paragraph("REVENUE MODEL & FINANCIAL PROJECTIONS", header_style))
    
    content.append(Paragraph("Subscription Tiers", subheader_style))
    
    # Revenue tiers table
    revenue_data = [
        ["Tier", "Monthly Price", "Save Operations", "Target Market", "Features"],
        ["Basic", "$2.99", "1,000 saves", "Individual users", "Document hashing, basic timeline"],
        ["Professional", "$9.99", "10,000 saves", "Professionals", "Full documents, career verification"],
        ["Premium", "$29.99", "Unlimited saves", "Power users", "Advanced analytics, export tools"],
        ["Enterprise", "$99.99", "Unlimited team", "Organizations", "Team management, compliance tools"],
        ["Archival", "$4.99", "500 saves", "Long-term storage", "Permanent preservation guarantee"]
    ]
    
    revenue_table = Table(revenue_data, colWidths=[1*inch, 1*inch, 1.2*inch, 1.3*inch, 2*inch])
    revenue_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.darkblue),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('GRID', (0,0), (-1,-1), 1, colors.black)
    ]))
    content.append(revenue_table)
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Premium Save Operations", subheader_style))
    content.append(Paragraph("""
    Different types of saves command premium pricing based on their complexity and importance:
    """, body_style))
    
    premium_saves = [
        "Legal Document Save: $0.50 per save (notarization-grade timestamping)",
        "IP Creation Save: $1.00 per save (patent-ready documentation)",
        "Contract Save: $0.25 per save (multi-party verification)",
        "Certified Work Save: $0.10 per save (professional credential building)",
        "Archive Save: $0.05 per save (long-term preservation guarantee)"
    ]
    
    for save_type in premium_saves:
        content.append(Paragraph(f"• {save_type}", body_style))
    
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("5-Year Financial Projections", subheader_style))
    
    # Financial projections table
    financial_data = [
        ["Metric", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        ["Subscribers", "10K", "50K", "200K", "500K", "1M"],
        ["Avg Revenue/User/Month", "$8.50", "$9.20", "$10.50", "$12.00", "$14.50"],
        ["Monthly Recurring Revenue", "$85K", "$460K", "$2.1M", "$6M", "$14.5M"],
        ["Annual Revenue", "$1M", "$5.5M", "$25.2M", "$72M", "$174M"],
        ["Premium Save Revenue", "$50K", "$400K", "$2.5M", "$8M", "$20M"],
        ["Total Annual Revenue", "$1.05M", "$5.9M", "$27.7M", "$80M", "$194M"]
    ]
    
    financial_table = Table(financial_data, colWidths=[1.8*inch, 0.8*inch, 0.8*inch, 0.8*inch, 0.8*inch, 0.8*inch])
    financial_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.darkgreen),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('ALIGN', (1,0), (-1,-1), 'RIGHT'),
        ('ALIGN', (0,0), (0,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('GRID', (0,0), (-1,-1), 1, colors.black)
    ]))
    content.append(financial_table)
    
    content.append(PageBreak())
    
    # Implementation Roadmap
    content.append(Paragraph("IMPLEMENTATION ROADMAP & OUTCOMES", header_style))
    
    content.append(Paragraph("Phase 1: Foundation (Months 1-6)", subheader_style))
    content.append(Paragraph("""
    • Complete core Save to Chain infrastructure development
    • Launch Bitcoin Writer with basic save-to-chain functionality
    • Establish subscription billing and user onboarding systems
    • Target: 1,000 beta users, $10K monthly recurring revenue
    """, body_style))
    
    content.append(Paragraph("Phase 2: Expansion (Months 7-18)", subheader_style))
    content.append(Paragraph("""
    • Launch Bitcoin Spreadsheets, Bitcoin Email, and Bitcoin Drive
    • Implement premium save operations and tiered pricing
    • Develop enterprise features and team management tools
    • Target: 25,000 users, $200K monthly recurring revenue
    """, body_style))
    
    content.append(Paragraph("Phase 3: Integration (Months 19-36)", subheader_style))
    content.append(Paragraph("""
    • Partner with major software companies for licensing deals
    • Launch API for third-party application integration
    • Implement advanced analytics and career verification tools
    • Target: 200,000 users, $2M monthly recurring revenue
    """, body_style))
    
    content.append(Paragraph("Phase 4: Dominance (Years 4-5)", subheader_style))
    content.append(Paragraph("""
    • Establish Save to Chain as industry standard
    • Expand internationally with localized applications
    • Develop enterprise compliance and regulatory tools
    • Target: 1M+ users, $15M+ monthly recurring revenue
    """, body_style))
    
    content.append(Paragraph("Long-term Market Impact", header_style))
    content.append(Paragraph("""
    By Year 5, Bitcoin Corporation Ltd projects that Save to Chain functionality will be standard across the productivity 
    software industry. The company's first-mover advantage and patent portfolio position it to capture significant value 
    from this fundamental shift in how digital work is preserved and verified.
    """, body_style))
    
    content.append(Paragraph("Key Success Metrics", subheader_style))
    success_metrics = [
        "1 million active subscribers by Year 5",
        "$194M annual recurring revenue from Save to Chain subscriptions",
        "10+ major software companies licensing the technology",
        "50+ enterprise clients with custom implementations",
        "Industry recognition as the standard for blockchain-based document preservation"
    ]
    
    for metric in success_metrics:
        content.append(Paragraph(f"• {metric}", body_style))
    
    content.append(Spacer(1, 0.4*inch))
    content.append(Paragraph("Investment Summary", subheader_style))
    content.append(Paragraph("""
    The Save to Chain feature represents a foundational technology that will transform how digital work is preserved, 
    verified, and monetized. With clear revenue models, strong IP protection, and a comprehensive implementation roadmap, 
    this innovation offers investors exposure to a technology that could become as ubiquitous as the save button itself.
    """, body_style))
    
    # Build PDF
    doc.build(content)
    return filename

if __name__ == "__main__":
    try:
        filename = create_save_to_chain_spec()
        print(f"Save to Chain specification created successfully: {filename}")
    except Exception as e:
        print(f"Error creating specification: {e}")