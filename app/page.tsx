'use client'

import React from 'react'
import styled from 'styled-components'
import InvitationCard from '@/components/InvitationCard'
import ContentSections from '@/components/ContentSections'

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`

const MainScreen = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: linear-gradient(180deg, #fce7f0 0%, #f8d7e5 100%);
  padding: 20px;
  display: flex;
  align-items: stretch;
  
  /* 모바일 최적화 */
  @media (max-width: 768px) {
    padding: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 5px;
  }
`

const MainCardContainer = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(168, 216, 234, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const ContentScreen = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: linear-gradient(180deg, #fce7f0 0%, #f8d7e5 100%);
  padding: 20px;
  display: flex;
  align-items: stretch;
  
  /* 모바일 최적화 */
  @media (max-width: 768px) {
    padding: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 5px;
  }
`

const ContentContainer = styled.div`
  max-width: 400px;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(168, 216, 234, 0.2);
  display: flex;
  flex-direction: column;
  
  /* 모바일 최적화 */
  @media (max-width: 768px) {
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    border-radius: 10px;
  }
`


export default function Home() {
  return (
    <PageContainer>
      {/* 첫 번째 화면 - 초대장 */}
      <MainScreen>
        <MainCardContainer>
          <InvitationCard />
        </MainCardContainer>
      </MainScreen>

      {/* 두 번째 화면 - 상세 정보 */}
      <ContentScreen>
        <ContentContainer>
          <ContentSections />
        </ContentContainer>
      </ContentScreen>
    </PageContainer>
  )
}

