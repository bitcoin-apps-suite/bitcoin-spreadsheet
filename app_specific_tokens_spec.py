#!/usr/bin/env python3

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.colors import black, blue, grey, darkblue, darkgreen, purple
from reportlab.lib import colors
import datetime

def create_app_tokens_spec():
    # Create PDF document
    filename = "App_Specific_Tokens_Specification.pdf"
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
    content.append(Paragraph("BITCOIN APPS SPECIFIC TOKENS", title_style))
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("Revenue-Sharing Token Model for Bitcoin Apps Ecosystem", styles['Heading1']))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph("$bWriter • $bVideo • $bMusic • $bSheets • +11 More App Tokens", styles['Heading2']))
    content.append(Spacer(1, 0.5*inch))
    content.append(Paragraph("Bitcoin Corporation Ltd", body_style))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph(f"Version 1.0 - {datetime.datetime.now().strftime('%B %d, %Y')}", styles['Normal']))
    content.append(Spacer(1, 1*inch))
    
    # Executive Summary Box
    content.append(Paragraph("EXECUTIVE SUMMARY", highlight_style))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph("""
    Each Bitcoin App operates as an independent revenue-generating business with its own app-specific token. 
    $bWriter captures Bitcoin Writer revenue, $bVideo captures Bitcoin Video revenue, $bMusic captures Bitcoin Music revenue, 
    etc. All revenue from Market Pages (NFT trading) and Exchange Pages (.ft token trading) is distributed quarterly 
    as dividends to holders of the specific app token, creating direct investment exposure to individual app performance.
    """, body_style))
    content.append(PageBreak())
    
    # Token Economics Model
    content.append(Paragraph("TOKEN ECONOMICS MODEL", header_style))
    
    content.append(Paragraph("App-Specific Revenue Capture", subheader_style))
    content.append(Paragraph("""
    Each Bitcoin App has its own dedicated token that captures 100% of revenue generated within that app. Market Page 
    revenue from NFT trading, Exchange Page revenue from .ft token trading, premium subscription fees, and advertising 
    revenue all flow directly to the app token dividend pool for quarterly distribution to token holders.
    """, body_style))
    
    content.append(Paragraph("Token Supply & Distribution", subheader_style))
    
    token_supply_data = [
        ["App Token", "Total Supply", "Public Sale", "Team/Development", "Ecosystem Growth", "Treasury"],
        ["$bWriter", "1,000,000", "40% (400K)", "20% (200K)", "25% (250K)", "15% (150K)"],
        ["$bVideo", "1,000,000", "40% (400K)", "20% (200K)", "25% (250K)", "15% (150K)"],
        ["$bMusic", "1,000,000", "40% (400K)", "20% (200K)", "25% (250K)", "15% (150K)"],
        ["$bSheets", "1,000,000", "40% (400K)", "20% (200K)", "25% (250K)", "15% (150K)"],
        ["All Apps", "1M each", "Standard distribution model across all 15+ Bitcoin Apps", "", ""]
    ]
    
    token_supply_table = Table(token_supply_data, colWidths=[1.1*inch, 1.1*inch, 1.1*inch, 1.1*inch, 1.1*inch, 1.1*inch])
    token_supply_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.darkblue),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('GRID', (0,0), (-1,-1), 1, colors.black),
        ('SPAN', (1,4), (-1,4))  # Span the bottom row
    ]))
    content.append(token_supply_table)
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Revenue Flow Architecture", subheader_style))
    content.append(Paragraph("""
    App revenue flows directly from source to token holders without dilution. Market Page NFT sales generate 5% commission → 
    app token dividend pool. Exchange Page .ft token trading generates 0.25% fee → app token dividend pool. Premium subscriptions → 
    app token dividend pool. This creates transparent, direct correlation between app success and token holder returns.
    """, body_style))
    
    # Individual App Token Profiles
    content.append(Paragraph("INDIVIDUAL APP TOKEN PROFILES", header_style))
    
    content.append(Paragraph("$bWriter - Bitcoin Writer Token", subheader_style))
    content.append(Paragraph("""
    Captures revenue from document creation, editing, and publishing platform. Revenue sources include NFT marketplace 
    for document trading, .ft token exchange for document revenue shares, premium writing tools subscriptions, and 
    professional publishing services. Target market: writers, journalists, content creators, publishing professionals.
    """, body_style))
    
    content.append(Paragraph("$bVideo - Bitcoin Video Token", subheader_style))
    content.append(Paragraph("""
    Captures revenue from video creation, editing, and distribution platform. Revenue sources include NFT marketplace 
    for video trading, .ft token exchange for video revenue shares, premium video editing tools, and distribution 
    partnerships. Target market: filmmakers, content creators, video professionals, streaming platforms.
    """, body_style))
    
    content.append(Paragraph("$bMusic - Bitcoin Music Token", subheader_style))
    content.append(Paragraph("""
    Captures revenue from music creation, production, and distribution platform. Revenue sources include NFT marketplace 
    for music trading, .ft token exchange for music royalty shares, premium production tools, and licensing services. 
    Target market: musicians, producers, record labels, music licensing professionals.
    """, body_style))
    
    content.append(Paragraph("$bSheets - Bitcoin Spreadsheets Token", subheader_style))
    content.append(Paragraph("""
    Captures revenue from spreadsheet creation, data analysis, and financial modeling platform. Revenue sources include 
    NFT marketplace for spreadsheet trading, .ft token exchange for data revenue shares, premium analytical tools, and 
    financial modeling services. Target market: analysts, accountants, financial professionals, data scientists.
    """, body_style))
    
    content.append(PageBreak())
    
    # Complete App Token Ecosystem
    content.append(Paragraph("COMPLETE BITCOIN APPS TOKEN ECOSYSTEM", header_style))
    
    complete_apps_data = [
        ["App Token", "Application", "Primary Revenue Sources", "Target Market"],
        ["$bWriter", "Bitcoin Writer", "Document NFTs, writing tools, publishing", "Writers, journalists, publishers"],
        ["$bVideo", "Bitcoin Video", "Video NFTs, editing tools, distribution", "Filmmakers, content creators"],
        ["$bMusic", "Bitcoin Music", "Music NFTs, production tools, licensing", "Musicians, producers, labels"],
        ["$bSheets", "Bitcoin Spreadsheets", "Data NFTs, analytics, modeling tools", "Analysts, accountants, scientists"],
        ["$bEmail", "Bitcoin Email", "Email NFTs, premium features, encryption", "Professionals, enterprises"],
        ["$bDrive", "Bitcoin Drive", "Storage NFTs, file sharing, collaboration", "Businesses, teams, individuals"],
        ["$bChat", "Bitcoin Chat", "Message NFTs, premium features, channels", "Communities, businesses"],
        ["$bMaps", "Bitcoin Maps", "Location NFTs, routing, local services", "Travelers, businesses, logistics"],
        ["$bShop", "Bitcoin Shop", "Product NFTs, e-commerce, marketplace", "Retailers, entrepreneurs"],
        ["$bGames", "Bitcoin Games", "Game NFTs, in-game assets, development", "Gamers, developers, studios"],
        ["$bBooks", "Bitcoin Books", "Book NFTs, publishing, reading tools", "Authors, readers, publishers"],
        ["$bNews", "Bitcoin News", "Article NFTs, subscriptions, journalism", "Journalists, media, readers"],
        ["$bCode", "Bitcoin Code", "Code NFTs, repositories, development", "Developers, companies, open source"],
        ["$bDesign", "Bitcoin Design", "Design NFTs, tools, collaboration", "Designers, agencies, freelancers"],
        ["$bHealth", "Bitcoin Health", "Health NFTs, data, telemedicine", "Patients, providers, researchers"]
    ]
    
    complete_apps_table = Table(complete_apps_data, colWidths=[1.1*inch, 1.4*inch, 2.2*inch, 1.8*inch])
    complete_apps_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.darkblue),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('GRID', (0,0), (-1,-1), 1, colors.black)
    ]))
    content.append(complete_apps_table)
    
    # Financial Projections
    content.append(Paragraph("FINANCIAL PROJECTIONS & DIVIDEND YIELDS", header_style))
    
    content.append(Paragraph("Combined Revenue Streams Per App", subheader_style))
    
    combined_revenue_data = [
        ["Revenue Source", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        ["Market Page Revenue", "$15K", "$125K", "$875K", "$4.5M", "$18.75M"],
        ["Exchange Page Revenue", "$3K", "$45K", "$450K", "$2.55M", "$12M"],
        ["Total App Revenue", "$18K", "$170K", "$1.325M", "$7.05M", "$30.75M"],
        ["Quarterly Dividend per Token", "$0.0045", "$0.0425", "$0.331", "$1.763", "$7.688"],
        ["Annual Dividend Yield (at $10)", "1.8%", "6.8%", "52.9%", "281%", "1,228%"]
    ]
    
    combined_revenue_table = Table(combined_revenue_data, colWidths=[2.2*inch, 0.8*inch, 0.8*inch, 0.8*inch, 0.8*inch, 0.8*inch])
    combined_revenue_table.setStyle(TableStyle([
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
    content.append(combined_revenue_table)
    content.append(Spacer(1, 0.3*inch))
    
    content.append(Paragraph("Portfolio Investment Strategies", subheader_style))
    
    portfolio_strategies = [
        "Diversified Portfolio: Equal holdings across all 15 app tokens for balanced ecosystem exposure",
        "Sector Focus: Concentrate in content creation apps ($bWriter, $bVideo, $bMusic) for creator economy exposure",
        "Utility Focus: Target productivity apps ($bSheets, $bEmail, $bDrive) for business adoption exposure",
        "Growth Strategy: Early investment in newer apps for maximum upside potential and dividend growth",
        "Conservative Strategy: Focus on established apps with proven revenue streams and stable dividends",
        "Arbitrage Strategy: Exploit valuation differences between similar apps across different verticals"
    ]
    
    for strategy in portfolio_strategies:
        content.append(Paragraph(f"• {strategy}", body_style))
    
    content.append(PageBreak())
    
    # Investment Analysis
    content.append(Paragraph("INVESTMENT ANALYSIS & VALUATION", header_style))
    
    content.append(Paragraph("Revenue Multiple Analysis", subheader_style))
    content.append(Paragraph("""
    At Year 5 projections, each app generates $30.75M annually. Using conservative 10x revenue multiples common in 
    SaaS businesses, each app represents $307.5M in enterprise value. With 1M tokens per app, this suggests $307.50 
    per token fundamental value, representing 30x return from initial $10 pricing for successful apps.
    """, body_style))
    
    content.append(Paragraph("Dividend Yield Analysis", subheader_style))
    content.append(Paragraph("""
    Year 5 dividend yields exceed 1,200% annually on initial $10 investment, demonstrating powerful compounding effects 
    of ecosystem growth. Early investors benefit from both capital appreciation as apps scale and increasing dividend 
    streams as revenue grows exponentially.
    """, body_style))
    
    content.append(Paragraph("Market Opportunity by Vertical", subheader_style))
    
    market_opportunity_data = [
        ["App Category", "Global Market Size", "Target Capture", "Revenue Potential"],
        ["Content Creation", "$104B creator economy", "0.5%", "$520M"],
        ["Productivity Tools", "$45B office software", "1%", "$450M"],
        ["Communication", "$30B messaging/email", "0.75%", "$225M"],
        ["Entertainment", "$200B gaming/media", "0.25%", "$500M"],
        ["E-commerce", "$4.2T global retail", "0.01%", "$420M"],
        ["Total Addressable", "$4.579T combined", "0.045%", "$2.115B"]
    ]
    
    market_opp_table = Table(market_opportunity_data, colWidths=[1.5*inch, 1.5*inch, 1.5*inch, 1.5*inch])
    market_opp_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.purple),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('GRID', (0,0), (-1,-1), 1, colors.black)
    ]))
    content.append(market_opp_table)
    content.append(Spacer(1, 0.3*inch))
    
    # Token Trading & Liquidity
    content.append(Paragraph("TOKEN TRADING & LIQUIDITY", header_style))
    
    content.append(Paragraph("Primary Distribution", subheader_style))
    content.append(Paragraph("""
    Initial token distribution occurs through private sales to accredited investors and strategic partners. 40% public 
    allocation enables broad participation while maintaining regulatory compliance. Team tokens vest over 4 years to 
    ensure long-term commitment and alignment with token holder interests.
    """, body_style))
    
    content.append(Paragraph("Secondary Market Trading", subheader_style))
    content.append(Paragraph("""
    App tokens trade on the $bEx central exchange, enabling portfolio construction and rebalancing across the entire 
    Bitcoin Apps ecosystem. Cross-app arbitrage opportunities, sector rotation strategies, and diversified ecosystem 
    exposure create sophisticated trading opportunities for institutional and retail investors.
    """, body_style))
    
    content.append(Paragraph("Governance & Voting Rights", subheader_style))
    content.append(Paragraph("""
    App token holders participate in governance decisions for their specific app: feature development priorities, 
    revenue sharing adjustments, partnership approvals, and ecosystem integration strategies. Voting weight is 
    proportional to token holdings, ensuring major stakeholders have appropriate influence over app direction.
    """, body_style))
    
    content.append(Spacer(1, 0.4*inch))
    content.append(Paragraph("Ecosystem Network Effects", subheader_style))
    content.append(Paragraph("""
    App tokens benefit from powerful ecosystem network effects. Successful apps drive adoption of others through 
    user crossover, integrated workflows create value across multiple apps, and the $bEx exchange enables sophisticated 
    investment strategies. Total ecosystem revenue of $460M+ by Year 5 creates substantial value for early token holders 
    across all apps.
    """, body_style))
    
    # Risk Factors
    content.append(Paragraph("RISK FACTORS & CONSIDERATIONS", header_style))
    
    risk_factors = [
        "App adoption may vary significantly, creating winners and losers among app tokens",
        "Regulatory changes in digital assets could impact token trading and dividend distribution",
        "Competition from established platforms may limit user acquisition and revenue growth",
        "Technical challenges in blockchain scaling may affect user experience and adoption",
        "Market volatility in cryptocurrency may impact token valuations and trading activity",
        "Creator economy trends may shift away from Bitcoin-based platforms",
        "Revenue projections are estimates and actual results may differ materially"
    ]
    
    content.append(Paragraph("Investment Risks", subheader_style))
    for risk in risk_factors:
        content.append(Paragraph(f"• {risk}", body_style))
    
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("Mitigation Strategies", subheader_style))
    content.append(Paragraph("""
    Diversified app portfolio reduces single-app risk, strong technical team ensures platform reliability, regulatory 
    compliance framework protects against regulatory changes, and conservative financial projections provide margin of safety. 
    The integrated ecosystem approach creates multiple revenue streams and network effects that support long-term value creation.
    """, body_style))
    
    # Build PDF
    doc.build(content)
    return filename

if __name__ == "__main__":
    try:
        filename = create_app_tokens_spec()
        print(f"App-Specific Tokens specification created successfully: {filename}")
    except Exception as e:
        print(f"Error creating specification: {e}")