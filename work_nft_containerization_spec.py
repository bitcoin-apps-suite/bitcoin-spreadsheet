#!/usr/bin/env python3

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.colors import black, blue, grey, darkblue, darkgreen
from reportlab.lib import colors
import datetime

def create_work_nft_spec():
    # Create PDF document
    filename = "Work_NFT_Containerization_Spec.pdf"
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
    content.append(Paragraph("WORK NFT CONTAINERIZATION", title_style))
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("Smart Contract-Enabled Work Monetization", styles['Heading1']))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph("Product Specification & Revenue Model", styles['Heading2']))
    content.append(Spacer(1, 0.5*inch))
    content.append(Paragraph("Bitcoin Corporation Ltd", body_style))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph(f"Version 1.0 - {datetime.datetime.now().strftime('%B %d, %Y')}", styles['Normal']))
    content.append(Spacer(1, 1*inch))
    
    # Executive Summary Box
    content.append(Paragraph("EXECUTIVE SUMMARY", highlight_style))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph("""
    Work NFT Containerization transforms any digital work product into a monetizable .nft container with embedded 
    smart contract conditions. Creators can set access fees, usage terms, and revenue sharing rules, turning their 
    spreadsheets, documents, designs, and data into self-executing digital products that generate ongoing revenue.
    """, body_style))
    content.append(PageBreak())
    
    # What is Work NFT Containerization
    content.append(Paragraph("WHAT IS WORK NFT CONTAINERIZATION?", header_style))
    
    content.append(Paragraph("The Concept", subheader_style))
    content.append(Paragraph("""
    Work NFT Containerization wraps digital work products in smart contract-enabled containers (.nft files) that 
    enforce access conditions and payment terms. Unlike traditional NFTs that represent ownership of unique items, 
    Work NFTs represent access rights to functional digital products with embedded monetization mechanisms.
    """, body_style))
    
    content.append(Paragraph("Smart Contract Integration", subheader_style))
    content.append(Paragraph("""
    Each .nft container includes programmable conditions that automatically execute when users access the content. 
    Creators can set subscription fees, per-use charges, revenue sharing percentages, and usage restrictions. 
    The Bitcoin blockchain enforces these conditions without requiring intermediaries or traditional payment processors.
    """, body_style))
    
    content.append(Paragraph("Content Types & Applications", subheader_style))
    content.append(Paragraph("""
    Any digital work product can be containerized: spreadsheets with financial models, documents with templates, 
    datasets with analytics, code with algorithms, or designs with specifications. The container preserves full 
    functionality while adding monetization and access control capabilities.
    """, body_style))
    
    # How It Creates Value
    content.append(Paragraph("HOW WORK NFTS CREATE VALUE", header_style))
    
    content.append(Paragraph("Creator Revenue Generation", subheader_style))
    content.append(Paragraph("""
    Creators can monetize their work through multiple revenue streams: one-time access fees, ongoing subscriptions, 
    per-use charges, revenue sharing from derivative works, and premium feature unlocks. This transforms static 
    digital files into dynamic revenue-generating assets.
    """, body_style))
    
    content.append(Paragraph("Consumer Access & Transparency", subheader_style))
    content.append(Paragraph("""
    Consumers gain transparent access to high-quality work products with clear pricing and usage terms. Smart contracts 
    eliminate disputes by automatically enforcing agreed-upon conditions, while blockchain records provide proof of 
    legitimate access and usage rights.
    """, body_style))
    
    content.append(Paragraph("Marketplace Efficiency", subheader_style))
    content.append(Paragraph("""
    Work NFTs create liquid markets for digital work products. Creators can sell, license, or auction their containers, 
    while consumers can easily discover, evaluate, and access professional-grade work products with guaranteed functionality 
    and transparent pricing.
    """, body_style))
    
    # Investment Opportunity
    content.append(Paragraph("INVESTMENT OPPORTUNITY", header_style))
    
    content.append(Paragraph("Market Size & Potential", subheader_style))
    content.append(Paragraph("""
    The global digital content market exceeds $200 billion annually, with most creators receiving minimal compensation 
    for their work. Work NFT Containerization captures value from this massive market by enabling direct creator-consumer 
    transactions with programmable revenue sharing and automatic payment processing.
    """, body_style))
    
    content.append(Paragraph("Platform Revenue Model", subheader_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd generates revenue through containerization fees, transaction processing, marketplace 
    commissions, and premium container features. As the volume of Work NFT transactions grows, platform revenue 
    scales automatically without requiring additional infrastructure investment.
    """, body_style))
    
    content.append(Paragraph("Network Effects & Moats", subheader_style))
    content.append(Paragraph("""
    Early adoption creates powerful network effects as creators attract consumers and consumers drive demand for 
    more creators. The platform's smart contract infrastructure and blockchain integration create significant 
    barriers to entry for competitors attempting to replicate the functionality.
    """, body_style))
    
    content.append(PageBreak())
    
    # Technical Architecture
    content.append(Paragraph("TECHNICAL ARCHITECTURE", title_style))
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Container Structure", header_style))
    
    # Technical architecture table
    architecture_data = [
        ["Component", "Function", "Implementation"],
        ["Work Content", "Original digital work product", "Encrypted file or data structure"],
        ["Smart Contract", "Access conditions & payment terms", "BSV script with conditional logic"],
        ["Metadata", "Description, pricing, usage rights", "JSON structure with standardized fields"],
        ["Access Controller", "Validates payments & permissions", "Cryptographic verification system"],
        ["Revenue Distributor", "Splits payments per contract terms", "Multi-signature payment routing"],
        ["Usage Tracker", "Monitors access & consumption", "Blockchain transaction logging"]
    ]
    
    arch_table = Table(architecture_data, colWidths=[1.5*inch, 2.5*inch, 2.5*inch])
    arch_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.darkblue),
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
    content.append(arch_table)
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Containerization Process", subheader_style))
    
    # Process flow
    process_steps = [
        "Creator uploads work product to Bitcoin App",
        "System encrypts content and generates access keys",
        "Creator defines smart contract terms (pricing, usage rights)",
        "Smart contract is compiled and embedded in container",
        "Container is registered on Bitcoin blockchain with unique ID",
        "Work NFT becomes available in marketplace for discovery",
        "Consumers can preview, purchase, and access according to terms"
    ]
    
    for i, step in enumerate(process_steps, 1):
        content.append(Paragraph(f"{i}. {step}", body_style))
    
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("Development Timeline", subheader_style))
    
    # Development phases
    dev_timeline_data = [
        ["Phase", "Duration", "Deliverable"],
        ["Phase 1: Container Infrastructure", "6 weeks", "Basic .nft creation and storage system"],
        ["Phase 2: Smart Contract Engine", "8 weeks", "Payment conditions and access control"],
        ["Phase 3: Marketplace Integration", "4 weeks", "Discovery, preview, and purchase flows"],
        ["Phase 4: Revenue Distribution", "6 weeks", "Automated payment splitting and tracking"],
        ["Phase 5: Advanced Features", "8 weeks", "Subscription models and usage analytics"],
        ["Phase 6: Enterprise Tools", "6 weeks", "Bulk containerization and management"]
    ]
    
    dev_table = Table(dev_timeline_data, colWidths=[2.2*inch, 1.3*inch, 3*inch])
    dev_table.setStyle(TableStyle([
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
    content.append(dev_table)
    
    content.append(PageBreak())
    
    # Revenue Model & Pricing
    content.append(Paragraph("REVENUE MODEL & PRICING STRATEGY", header_style))
    
    content.append(Paragraph("Platform Revenue Streams", subheader_style))
    
    # Revenue streams table
    revenue_streams_data = [
        ["Revenue Stream", "Rate", "Description"],
        ["Containerization Fee", "$0.99 per NFT", "One-time fee to create Work NFT container"],
        ["Transaction Fee", "2.5% of sale", "Commission on all Work NFT transactions"],
        ["Premium Container", "$4.99/month", "Advanced features: analytics, A/B testing"],
        ["Enterprise Suite", "$49.99/month", "Bulk tools, team management, reporting"],
        ["Marketplace Listing", "$0.10/day", "Featured placement in marketplace"],
        ["Smart Contract Complexity", "$0.50-$5.00", "Based on contract sophistication"]
    ]
    
    revenue_streams_table = Table(revenue_streams_data, colWidths=[2*inch, 1.3*inch, 3.2*inch])
    revenue_streams_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.darkgreen),
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
    content.append(revenue_streams_table)
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Creator Monetization Options", subheader_style))
    
    # Creator pricing models
    creator_models = [
        "One-Time Purchase: $1 - $1,000+ (full access to Work NFT)",
        "Subscription Access: $5 - $50/month (ongoing access to updates)",
        "Per-Use Licensing: $0.10 - $10/use (pay-per-interaction model)",
        "Revenue Sharing: 5% - 50% of derivative work revenue",
        "Freemium Model: Free basic access + premium features",
        "Auction Model: Market-determined pricing for exclusive content"
    ]
    
    for model in creator_models:
        content.append(Paragraph(f"• {model}", body_style))
    
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("5-Year Financial Projections", subheader_style))
    
    # Financial projections for Work NFTs
    financial_nft_data = [
        ["Metric", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        ["Work NFTs Created", "5K", "25K", "100K", "300K", "750K"],
        ["Active Creators", "1K", "5K", "20K", "60K", "150K"],
        ["Total Transactions", "10K", "75K", "500K", "2M", "8M"],
        ["Avg Transaction Value", "$25", "$35", "$50", "$65", "$80"],
        ["Platform Revenue", "$125K", "$1.2M", "$8.5M", "$35M", "$120M"],
        ["Creator Earnings", "$225K", "$2.4M", "$22M", "$95M", "$520M"]
    ]
    
    financial_nft_table = Table(financial_nft_data, colWidths=[1.8*inch, 0.8*inch, 0.8*inch, 0.8*inch, 0.8*inch, 0.8*inch])
    financial_nft_table.setStyle(TableStyle([
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
    content.append(financial_nft_table)
    
    content.append(PageBreak())
    
    # Implementation Roadmap
    content.append(Paragraph("IMPLEMENTATION ROADMAP", header_style))
    
    content.append(Paragraph("Phase 1: Foundation (Months 1-4)", subheader_style))
    content.append(Paragraph("""
    • Develop core containerization infrastructure
    • Launch basic Work NFT creation for Bitcoin Spreadsheets
    • Implement simple payment processing and access control
    • Target: 100 Work NFTs created, $5K in transactions
    """, body_style))
    
    content.append(Paragraph("Phase 2: Marketplace (Months 5-10)", subheader_style))
    content.append(Paragraph("""
    • Build comprehensive marketplace for Work NFT discovery
    • Add advanced smart contract features and pricing models
    • Integrate with Bitcoin Writer and Bitcoin Email
    • Target: 2,000 Work NFTs, $50K monthly transaction volume
    """, body_style))
    
    content.append(Paragraph("Phase 3: Advanced Features (Months 11-18)", subheader_style))
    content.append(Paragraph("""
    • Implement subscription models and revenue sharing
    • Add analytics, A/B testing, and optimization tools
    • Launch enterprise containerization features
    • Target: 15,000 Work NFTs, $500K monthly transaction volume
    """, body_style))
    
    content.append(Paragraph("Phase 4: Scale & Integration (Years 2-3)", subheader_style))
    content.append(Paragraph("""
    • Expand to all Bitcoin Apps and third-party integrations
    • Develop API for external platform integration
    • Launch international markets and localization
    • Target: 100,000+ Work NFTs, $5M+ monthly transaction volume
    """, body_style))
    
    content.append(Paragraph("Competitive Advantages", header_style))
    
    advantages = [
        "First-mover advantage in functional Work NFT containerization",
        "Deep integration with Bitcoin Apps ecosystem",
        "Smart contract automation reduces friction and disputes",
        "Transparent blockchain-based revenue tracking",
        "Scalable infrastructure built on Bitcoin SV's capabilities"
    ]
    
    for advantage in advantages:
        content.append(Paragraph(f"• {advantage}", body_style))
    
    content.append(Spacer(1, 0.4*inch))
    content.append(Paragraph("Market Impact & Investment Returns", subheader_style))
    content.append(Paragraph("""
    Work NFT Containerization represents a fundamental shift from passive digital files to active revenue-generating 
    assets. By Year 5, we project 750,000 Work NFTs generating $120M in annual platform revenue while enabling 
    creators to earn over $520M annually from their containerized work products.
    """, body_style))
    
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("Next Innovation: .ft Token Containers", subheader_style))
    content.append(Paragraph("""
    Work NFT Containerization serves as the foundation for .ft token containers that enable creators to mint 
    dividend shares and royalty tokens from their Work NFTs, creating sophisticated investment vehicles and 
    secondary markets for digital work products.
    """, body_style))
    
    # Build PDF
    doc.build(content)
    return filename

if __name__ == "__main__":
    try:
        filename = create_work_nft_spec()
        print(f"Work NFT Containerization specification created successfully: {filename}")
    except Exception as e:
        print(f"Error creating specification: {e}")