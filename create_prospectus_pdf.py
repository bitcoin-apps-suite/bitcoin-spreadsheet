#!/usr/bin/env python3

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.colors import black, blue, grey
from reportlab.lib import colors
import datetime

def create_prospectus_pdf():
    # Create PDF document
    filename = "Bitcoin_Corporation_Prospectus.pdf"
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
        textColor=blue
    )
    
    header_style = ParagraphStyle(
        'CustomHeader',
        parent=styles['Heading1'],
        fontSize=16,
        spaceAfter=12,
        spaceBefore=20,
        textColor=blue
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
    
    # Build content
    content = []
    
    # Title Page
    content.append(Paragraph("BITCOIN CORPORATION LTD", title_style))
    content.append(Spacer(1, 0.5*inch))
    content.append(Paragraph("SECURITIES OFFERING PROSPECTUS", styles['Heading1']))
    content.append(Spacer(1, 0.3*inch))
    content.append(Paragraph("Private Placement Memorandum", styles['Heading2']))
    content.append(Spacer(1, 0.2*inch))
    content.append(Paragraph("For Accredited Investors Only", styles['Heading3']))
    content.append(Spacer(1, 0.5*inch))
    content.append(Paragraph("Bitcoin-Native Software Development Company", body_style))
    content.append(Spacer(1, 1*inch))
    content.append(Paragraph(f"Date: {datetime.datetime.now().strftime('%B %d, %Y')}", styles['Normal']))
    content.append(PageBreak())
    
    # Table of Contents
    content.append(Paragraph("TABLE OF CONTENTS", header_style))
    toc_data = [
        ["1. Investment Summary", "3"],
        ["2. Company Overview", "4"],
        ["3. Management", "5"],
        ["4. Product Portfolio", "6"],
        ["5. Use of Proceeds", "8"],
        ["6. Token Structure & Multi-Sig", "9"],
        ["7. Regulatory Compliance", "10"],
        ["8. Risk Factors", "11"],
        ["9. Legal Information", "12"]
    ]
    
    toc_table = Table(toc_data, colWidths=[4*inch, 1*inch])
    toc_table.setStyle(TableStyle([
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 11),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    content.append(toc_table)
    content.append(PageBreak())
    
    # Investment Summary
    content.append(Paragraph("1. INVESTMENT SUMMARY", header_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd is a UK-registered technology company developing innovative Bitcoin-native software applications 
    on the Bitcoin SV (BSV) blockchain. Our mission is to create the next generation of productivity tools, developer tools, 
    and infrastructure applications that leverage the unique capabilities of Bitcoin's original protocol.
    """, body_style))
    
    content.append(Paragraph("""
    We are pioneering the development of Bitcoin OS, a comprehensive web-based operating system that provides users with 
    native Bitcoin applications including email, storage, data management, and productivity tools. Our platform represents the 
    first complete ecosystem built specifically for Bitcoin SV, offering unprecedented integration and functionality.
    """, body_style))
    
    # Company Overview
    content.append(Paragraph("2. COMPANY OVERVIEW", header_style))
    
    content.append(Paragraph("Company Details", subheader_style))
    company_data = [
        ["Company Name:", "Bitcoin Corporation Ltd"],
        ["Registration:", "UK Company"],
        ["Industry:", "Blockchain Technology"],
        ["Founded:", "2025"],
        ["Focus:", "Bitcoin SV Software Development"],
        ["Target Market:", "Global Bitcoin Users & Developers"]
    ]
    
    company_table = Table(company_data, colWidths=[2.5*inch, 3.5*inch])
    company_table.setStyle(TableStyle([
        ('ALIGN', (0,0), (0,-1), 'RIGHT'),
        ('ALIGN', (1,0), (1,-1), 'LEFT'),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    content.append(company_table)
    
    # Management
    content.append(Paragraph("3. MANAGEMENT", header_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd is currently managed by a sole director and founder who brings extensive experience 
    in Bitcoin technology and software development. The company operates with a lean, focused structure designed 
    for rapid development and deployment of Bitcoin-native applications.
    """, body_style))
    
    content.append(Paragraph("Founder & Managing Director", subheader_style))
    content.append(Paragraph("""
    The founder serves as the sole director and is responsible for all strategic decisions, product development, 
    and operational management. This structure allows for rapid decision-making and maintains clear accountability 
    for company performance and investor returns.
    """, body_style))
    
    # Product Portfolio
    content.append(Paragraph("4. PRODUCT PORTFOLIO", header_style))
    
    content.append(Paragraph("Bitcoin OS", subheader_style))
    content.append(Paragraph("""
    Our flagship product is Bitcoin OS, a revolutionary web-based operating system that runs entirely on Bitcoin SV. 
    It includes an integrated wallet, app store, and development environment, targeting developers and Bitcoin enthusiasts 
    who want native blockchain functionality in their daily computing experience.
    """, body_style))
    
    content.append(Paragraph("Bitcoin Exchange (bEx)", subheader_style))
    content.append(Paragraph("""
    A centralized trading platform for tokens and digital assets created within the Bitcoin Apps ecosystem. 
    The bEx enables users to trade assets generated by Bitcoin Apps such as spreadsheet tokens, document shares, 
    and other digital assets created through our application suite.
    """, body_style))
    
    content.append(Paragraph("Bitcoin Wallet", subheader_style))
    content.append(Paragraph("""
    Next-generation wallet solution with comprehensive digital asset management capabilities, designed for both individual users and 
    developers. Features include advanced security, multi-asset support, and seamless integration with our 
    broader development ecosystem.
    """, body_style))
    
    content.append(Paragraph("Bitcoin Apps Suite", subheader_style))
    content.append(Paragraph("""
    A comprehensive suite of 15+ productivity applications including Bitcoin Email, Bitcoin Drive, Bitcoin Writer, and more. 
    These applications are specifically designed for businesses and content creators who want to leverage Bitcoin's 
    capabilities for their daily productivity needs.
    """, body_style))
    
    # Use of Proceeds
    content.append(Paragraph("5. USE OF PROCEEDS", header_style))
    
    content.append(Paragraph("""
    Funds raised from this securities offering will be allocated to support the development and scaling of Bitcoin Corporation Ltd's 
    core technology platform and product suite. The following budget outline demonstrates our commitment to responsible capital deployment:
    """, body_style))
    
    proceeds_data = [
        ["Allocation", "Percentage", "Purpose"],
        ["Software Development", "60%", "Core platform development and Bitcoin OS enhancement"],
        ["Infrastructure", "20%", "Server capacity, blockchain infrastructure and security"],
        ["Marketing & User Acquisition", "10%", "User growth, market expansion and partnerships"],
        ["Operations & Administration", "7%", "Legal, compliance and administrative costs"],
        ["Working Capital Reserve", "3%", "Contingency fund for unexpected opportunities"]
    ]
    
    proceeds_table = Table(proceeds_data, colWidths=[2.3*inch, 1.2*inch, 3.2*inch])
    proceeds_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.grey),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 12),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('GRID', (0,0), (-1,-1), 1, colors.black),
        ('VALIGN', (0,0), (-1,-1), 'TOP')
    ]))
    content.append(proceeds_table)
    
    content.append(Paragraph("""
    The majority of funds will be directed toward software development to accelerate our roadmap and maintain our 
    technological leadership in Bitcoin-native applications. Infrastructure investment ensures scalability as user adoption grows.
    """, body_style))
    
    # Token Structure & Multi-Sig
    content.append(Paragraph("6. TOKEN STRUCTURE & MULTI-SIGNATURE SECURITY", header_style))
    
    content.append(Paragraph("Token Issuance and Control", subheader_style))
    content.append(Paragraph("""
    All tokens issued by Bitcoin Corporation Ltd are held in multi-signature wallets controlled by the company. 
    This structure ensures that tokens cannot trade freely in secondary markets and provides enhanced security and 
    regulatory compliance for our investors.
    """, body_style))
    
    content.append(Paragraph("Multi-Signature Implementation", subheader_style))
    content.append(Paragraph("""
    Our multi-signature system requires multiple authorized signatures for any token transfers or distributions. 
    This prevents unauthorized token movements and ensures that all token-related activities are subject to proper 
    corporate governance and regulatory compliance procedures.
    """, body_style))
    
    content.append(Paragraph("Investor Protection", subheader_style))
    content.append(Paragraph("""
    The multi-sig structure protects investors by ensuring tokens can only be distributed according to proper 
    legal and regulatory frameworks. This prevents tokens from entering unregulated secondary markets and maintains 
    compliance with securities regulations.
    """, body_style))
    
    # Regulatory Compliance
    content.append(Paragraph("7. REGULATORY COMPLIANCE", header_style))
    
    content.append(Paragraph("Securities Compliance", subheader_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd operates within established legal frameworks and does not engage in activities that 
    circumvent financial regulations. Our token offerings are structured as securities and are offered only to 
    accredited investors under appropriate regulatory exemptions.
    """, body_style))
    
    content.append(Paragraph("UK Company Law Compliance", subheader_style))
    content.append(Paragraph("""
    As a UK-registered company, Bitcoin Corporation Ltd complies with all applicable UK company law requirements, 
    including proper corporate governance, director responsibilities, and shareholder protections. The company 
    maintains appropriate corporate records and follows established business practices.
    """, body_style))
    
    content.append(Paragraph("Technology Compliance", subheader_style))
    content.append(Paragraph("""
    Our software development activities comply with applicable technology and data protection regulations. 
    We do not develop or promote technologies designed to circumvent legal or regulatory requirements, and our 
    Bitcoin-native applications operate within established blockchain technology frameworks.
    """, body_style))
    
    # Risk Factors
    content.append(Paragraph("8. RISK FACTORS", header_style))
    
    risks = [
        "Technology dependency on Bitcoin SV blockchain infrastructure",
        "Cryptocurrency market volatility affecting user adoption",
        "Regulatory changes in digital asset and blockchain sectors",
        "Competition from established software and technology providers",
        "Market acceptance of Bitcoin SV versus other blockchain platforms",
        "Technical challenges in scaling blockchain-based applications"
    ]
    
    content.append(Paragraph("Potential investors should carefully consider the following risk factors:", body_style))
    for risk in risks:
        content.append(Paragraph(f"• {risk}", body_style))
    
    # Legal Information
    content.append(Paragraph("9. LEGAL INFORMATION", header_style))
    
    content.append(Paragraph("Securities Offering Disclaimers", subheader_style))
    content.append(Paragraph("""
    This document constitutes a private placement memorandum for securities offered to accredited investors only. 
    This offering has not been registered with the Securities and Exchange Commission or other regulatory authorities 
    and relies on appropriate exemptions from registration requirements.
    """, body_style))
    
    content.append(Paragraph("""
    Investment in Bitcoin Corporation Ltd securities involves significant risk and may result in partial or total loss 
    of investment. These securities are illiquid and may not be transferred without compliance with applicable securities laws. 
    Prospective investors must be accredited investors and should conduct their own due diligence.
    """, body_style))
    
    content.append(Paragraph("Forward-Looking Statements", subheader_style))
    content.append(Paragraph("""
    This prospectus contains forward-looking statements regarding future business plans, technology development, and market 
    opportunities. Such statements involve risks and uncertainties, and actual results may differ materially from those projected. 
    Investors should not rely solely on forward-looking statements when making investment decisions.
    """, body_style))
    
    content.append(Paragraph("Company Registration", subheader_style))
    content.append(Paragraph("""
    Bitcoin Corporation Ltd is registered in the United Kingdom and operates under UK company law. All business activities 
    are conducted in compliance with applicable regulations and industry standards.
    """, body_style))
    
    # Build PDF
    doc.build(content)
    return filename

if __name__ == "__main__":
    try:
        filename = create_prospectus_pdf()
        print(f"PDF prospectus created successfully: {filename}")
    except Exception as e:
        print(f"Error creating PDF: {e}")