# Smart Contract Reader

Smart Contract Reader is a web application built using React and Next.js that uses AI to analyze smart contract code. This application uses `[OpenAI API](https://platform.openai.com/docs/api-reference)` to interpret and analyze the code for potential vulnerabilities.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/stetradis/smart-contract-reader.git
   ```

2. Install dependencies

   ```
   cd smart-contract-analyzer
   npm install
   # or
   yarn install
   ```

3. Create a .env file in the root of the project with the following properties

   ```
   NEXT_PUBLIC_OPENAI_API_KEY="your-openai-api-key-here"
   NEXT_PUBLIC_OPENAI_API_URL="https://api.openai.com/v1/completions"
   ```
4. Start the development server

   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open `http://localhost:3000` in your browser.

## Usage

To analyze smart contract code:

1. Upload your smart contract code in the application
2. Click on the "Scan Code" button
3. Wait for the analysis report to be generated
4. Review the report
