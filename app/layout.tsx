import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Harmanjit Singh — AI/ML Engineer',
  description: 'Personal portfolio of Harmanjit Singh, AI/ML engineer specializing in RAG, multi-agent systems, and scalable NLP.',
  keywords: ['AI', 'ML', 'RAG', 'CrewAI', 'LangChain', 'Portfolio', 'Harmanjit Singh'],
  authors: [{ name: 'Harmanjit Singh' }],
  openGraph: {
    title: 'Harmanjit Singh — AI/ML Engineer',
    description: 'Building Agentic & RAG Systems. B.E. CSE (AI/ML) at Chandigarh University.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
