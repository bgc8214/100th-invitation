import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: '백설하 100일 잔치 초대장',
  description: '백설하의 소중한 100일을 함께 축하해주세요',
  keywords: ['100일잔치', '초대장', '백설하', '아기'],
  authors: [{ name: '백설하 가족' }],
  openGraph: {
    title: '백설하 100일 잔치 초대장',
    description: '백설하의 소중한 100일을 함께 축하해주세요',
    type: 'website',
    images: [
      {
        url: '/images/main.png',
        width: 1200,
        height: 630,
        alt: '백설하 100일 잔치 초대장',
      },
    ],
    siteName: '백설하 100일 잔치',
  },
  twitter: {
    card: 'summary_large_image',
    title: '백설하 100일 잔치 초대장',
    description: '백설하의 소중한 100일을 함께 축하해주세요',
    images: ['/images/main.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

