
# ResumeCraft

ResumeCraft is a web-based resume builder that helps users create professional and customized resumes with ease. It provides an intuitive interface to build, edit, and manage resumes while presenting professional information in a structured format.

## Features

- **User Authentication:** Secure user authentication and account management using Clerk.
- **Resume Creation:** Create professional resumes with structured sections.
- **Resume Customization:** Add and edit personal details, education, work experience, skills, and other relevant information.
- **Real-Time Preview:** Preview resume changes while editing.
- **AI Integration:** Integration with Google's Generative AI SDK.
- **Resume Management:** Manage and customize resume content.
- **Responsive Design:** Access the application across different screen sizes.

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | Next.js 14, React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | Clerk |
| Database | MongoDB |
| ODM | Mongoose |
| AI Integration | Google Generative AI |
| Form Management | React Hook Form |
| Validation | Zod |
| UI Components | Radix UI |

## Live Demo

[ResumeCraft](https://resume-craft-ebon.vercel.app/)

## Getting Started

Follow these steps to run ResumeCraft locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- MongoDB database
- Required API credentials

### 1. Clone the Repository

```bash
git clone https://github.com/Anjali03mirracle/resumeCraft.git
```

### 2. Navigate to the Project Directory

```bash
cd resumeCraft
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory.

Add the environment variables required by the application:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GOOGLE_API_KEY=your_google_api_key
```

Note: Verify the exact environment variable names used in the source code before configuring them. Additional Clerk configuration may also be required.

Never commit your actual API keys or database credentials to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open the following URL in your browser:

http://localhost:3000

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs the configured lint script |

## Project Structure

```text
resumeCraft/
├── app/              # Application routes and pages
├── components/       # Reusable UI components
├── lib/              # Utility functions and shared logic
├── public/            # Static assets
├── middleware.ts      # Application middleware
├── package.json       # Dependencies and scripts
├── next.config.mjs    # Next.js configuration
└── README.md          # Project documentation
```

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

5. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request.

## License

This project is available for educational and development purposes. Add an appropriate license before distributing or reusing the project.
