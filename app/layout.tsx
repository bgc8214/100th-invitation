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
    url: 'https://bgc8214.github.io/100th-invitation/',
    images: [
      {
        url: 'https://bgc8214.github.io/100th-invitation/images/main.png',
        width: 1200,
        height: 630,
        alt: '백설하 100일 잔치 초대장',
        type: 'image/png',
      },
    ],
    siteName: '백설하 100일 잔치',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '백설하 100일 잔치 초대장',
    description: '백설하의 소중한 100일을 함께 축하해주세요',
    images: ['https://bgc8214.github.io/100th-invitation/images/main.png'],
    creator: '@백설하가족',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* 카카오톡 및 소셜 미디어 메타 태그 */}
        <meta property="og:title" content="백설하 100일 잔치 초대장" />
        <meta property="og:description" content="백설하의 소중한 100일을 함께 축하해주세요" />
        <meta property="og:image" content="https://bgc8214.github.io/100th-invitation/images/main.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://bgc8214.github.io/100th-invitation/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="백설하 100일 잔치" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* 트위터 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="백설하 100일 잔치 초대장" />
        <meta name="twitter:description" content="백설하의 소중한 100일을 함께 축하해주세요" />
        <meta name="twitter:image" content="https://bgc8214.github.io/100th-invitation/images/main.png" />
        
        {/* 카카오톡 특화 메타 태그 */}
        <meta name="title" content="백설하 100일 잔치 초대장" />
        <meta name="description" content="백설하의 소중한 100일을 함께 축하해주세요" />
        <meta name="image" content="https://bgc8214.github.io/100th-invitation/images/main.png" />
      </head>
      <body className={notoSansKR.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

