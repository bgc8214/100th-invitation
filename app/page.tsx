'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import InvitationCard from '@/components/InvitationCard'
import ContentSections from '@/components/ContentSections'

const PageContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const MainScreen = styled(motion.div)`
  height: 100vh;
  background: linear-gradient(180deg, #f8f9ff 0%, #f0f8ff 100%);
  padding: 20px;
  display: flex;
  align-items: stretch;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #f8f9ff 0%, #f0f8ff 100%);
  padding: 20px;
  display: flex;
  align-items: stretch;
  z-index: 1;
`

const ContentContainer = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(168, 216, 234, 0.2);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`


export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return // 서버사이드에서는 실행하지 않음
    
    const handleScroll = () => {
      if (isAnimating) return // 애니메이션 중일 때는 스크롤 무시
      
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const triggerHeight = windowHeight * 0.1 // 화면 높이의 10%만 스크롤하면 트리거
      
      // 트리거 지점을 넘으면 자동 완성 애니메이션 시작
      if (scrollY >= triggerHeight && scrollProgress < 1) {
        setIsAnimating(true)
        
        // 자동으로 완전히 올라가는 애니메이션 (속도 감소)
        let progress = scrollY / windowHeight
        const animate = () => {
          progress += 0.02 // 애니메이션 속도 감소 (0.05 → 0.02)
          setScrollProgress(Math.min(progress, 1))
          
          if (progress >= 1) {
            setIsAnimating(false)
          } else {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      } else if (scrollY < triggerHeight && !isAnimating) {
        // 트리거 지점 아래로 내려가면 원래대로
        const progress = scrollY / windowHeight
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // 스크롤 가능하도록 설정
    document.body.style.height = '200vh'
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.height = 'auto'
    }
  }, [scrollProgress, isAnimating])

  return (
    <PageContainer>
      {/* 두 번째 화면 - 항상 뒤에 깔려있음 */}
      <ContentScreen style={{ display: 'flex' }}>
        <ContentContainer>
          <ContentSections />
        </ContentContainer>
      </ContentScreen>

      {/* 첫 번째 화면 - 올라가면서 동시에 투명해짐 */}
      <MainScreen 
        style={{ 
          display: scrollProgress >= 1 ? 'none' : 'flex', // 완전히 끝난 후에만 숨김
          y: typeof window !== 'undefined' ? -scrollProgress * window.innerHeight : -scrollProgress * 800, // 화면 전체 높이만큼 위로 올라감
          opacity: scrollProgress < 0.3 ? 1 : 1 - ((scrollProgress - 0.3) / 0.7), // 30% 진행 후 투명화 시작
        }}
        transition={{ duration: 0 }} // 스크롤과 동기화를 위해 transition 제거
      >
        <MainCardContainer>
          <InvitationCard />
        </MainCardContainer>
      </MainScreen>
    </PageContainer>
  )
}

