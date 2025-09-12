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
  openGraph: {
    title: '백설하 100일 잔치 초대장',
    description: '백설하의 소중한 100일을 함께 축하해주세요',
    type: 'website',
    url: 'https://bgc8214.github.io/100th-invitation/',
    images: [
      {
        url: 'https://bgc8214.github.io/100th-invitation/images/main.png?v=2',
        width: 1200,
        height: 630,
        alt: '백설하 100일 잔치 초대장',
      },
    ],
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
        {/* 카카오톡 전용 메타 태그 */}
        <meta name="title" content="백설하 100일 잔치 초대장" />
        <meta name="description" content="백설하의 소중한 100일을 함께 축하해주세요" />
        <meta name="image" content="https://bgc8214.github.io/100th-invitation/images/main.png?v=2" />
        
        {/* 추가 카카오톡 호환성 태그 */}
        <meta property="og:site_name" content="백설하 100일 잔치" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* 카카오톡 스크래핑 강제 새로고침을 위한 추가 태그 */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        
        {/* 카카오톡 캐시 무효화를 위한 추가 메타 태그 */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="백설하 100일 잔치 초대장" />
        
        {/* 카카오톡 전용 추가 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="백설하 100일 잔치 초대장" />
        <meta name="twitter:description" content="백설하의 소중한 100일을 함께 축하해주세요" />
        <meta name="twitter:image" content="https://bgc8214.github.io/100th-invitation/images/main.png?v=2" />
      </head>
      <body className={notoSansKR.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

