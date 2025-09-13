# Bitcoin Blockchain Spreadsheet

A decentralized spreadsheet application built on Bitcoin blockchain using sCrypt smart contracts, React, and HandCash wallet integration.

## 🚀 Features

- **Decentralized Data Storage**: All spreadsheet data is stored on the BSV blockchain
- **Smart Contract Security**: sCrypt contracts ensure data integrity and access control
- **Real-time Collaboration**: Multiple users can edit spreadsheets simultaneously
- **Formula Support**: Basic spreadsheet functions (SUM, AVERAGE, COUNT, etc.)
- **HandCash Integration**: Seamless Bitcoin wallet connection via HandCash
- **Immutable History**: All changes are recorded permanently on the blockchain

## 🏗️ Architecture

### Smart Contracts (sCrypt)
- `SpreadsheetContract.ts`: Main contract for spreadsheet management
- `CellData.ts`: Individual cell data management
- Deployed on BSV testnet/mainnet

### Frontend (React + TypeScript)
- Interactive spreadsheet grid
- Real-time cell editing
- Formula calculation engine
- BSV wallet integration
- Responsive design

### Data Storage & Security
- Cell data encrypted with AES-256 before storage
- Encryption key derived from user's HandCash public key
- Data stored encrypted on Bitcoin blockchain via OP_RETURN
- Only the user with the correct wallet can decrypt their data
- Immutable audit trail with privacy protection

## 📋 Prerequisites

- Node.js 16+
- npm or yarn
- HandCash wallet account
- sCrypt CLI tools

## 🚀 Quick Start

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd blockchain-spreadsheet
npm install
cd frontend && npm install && cd ..
```

2. **Compile smart contracts:**
```bash
npm run build:contracts
```

3. **Deploy to BSV testnet:**
```bash
npm run deploy
```

4. **Start the application:**
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
blockchain-spreadsheet/
├── src/
│   ├── contracts/
│   │   ├── SpreadsheetContract.ts    # Main sCrypt contract
│   │   └── CellData.ts               # Cell data contract
│   ├── deploy/
│   │   └── deploy.ts                 # Deployment script
│   └── tests/                        # Contract tests
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Spreadsheet.tsx       # Main spreadsheet component
│   │   │   ├── Cell.tsx             # Individual cell component
│   │   │   └── Toolbar.tsx          # Toolbar with functions
│   │   ├── services/
│   │   │   └── BSVService.ts        # BSV blockchain integration
│   │   ├── App.tsx                  # Main React app
│   │   └── index.tsx               # App entry point
│   └── public/
│       └── index.html               # HTML template
├── package.json                      # Main package config
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# BSV Network Configuration
BSV_NETWORK=testnet
BSV_API_KEY=your_api_key

# Wallet Configuration (for deployment)
PRIVATE_KEY=your_private_key
```

### Smart Contract Configuration

Modify `src/contracts/SpreadsheetContract.ts` to customize:
- Maximum rows and columns
- Access control rules
- Data validation logic

## 💻 Usage

### Creating a Spreadsheet

1. Connect your BSV wallet
2. Click "New Spreadsheet"
3. Enter a title
4. The spreadsheet is deployed to the blockchain

### Editing Cells

1. Click on any cell to select it
2. Double-click to enter edit mode
3. Type values or formulas (start with `=`)
4. Press Enter or click outside to save

### Using Formulas

Supported functions:
- `=SUM(A1:A5)` - Sum of a range
- `=AVERAGE(B1:B10)` - Average of a range
- `=COUNT(C1:C20)` - Count numeric values
- `=MAX(D1:D15)` - Maximum value
- `=MIN(E1:E25)` - Minimum value

## 🔒 Security

- All data is stored immutably on the BSV blockchain
- Smart contracts enforce access control
- Private keys never leave the user's wallet
- End-to-end encryption for sensitive data

## 🧪 Testing

Run the smart contract tests:

```bash
npm test
```

Run the frontend tests:

```bash
cd frontend && npm test
```

## 🚢 Deployment

### Smart Contract Deployment

```bash
npm run deploy
```

### Frontend Deployment

```bash
npm run build:frontend
# Deploy the built files in frontend/build/
```

## 🔗 API Reference

### BSVService Methods

- `createSpreadsheet(title)` - Create new spreadsheet
- `updateCell(spreadsheetId, row, col, value, dataType)` - Update cell
- `getCell(spreadsheetId, row, col)` - Get cell data
- `calculateFormula(formula, cells)` - Evaluate formula

### Smart Contract Methods

- `createCell(row, col, value, dataType)` - Create cell
- `updateTitle(newTitle)` - Update spreadsheet title
- `calculateSum(startRow, endRow, col)` - Calculate sum

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## ⚠️ Disclaimer

This is experimental software. Use at your own risk. Always test thoroughly before using in production environments.

## 🔗 Links

- [Bitcoin SV](https://bitcoinsv.com/)
- [sCrypt Documentation](https://scrypt.io/)
- [BSV Developer Resources](https://developer.bitcoinsv.io/)

---

Built with ❤️ on Bitcoin SV
