'use client'

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const HeroSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  position: relative;
  height: 100%;
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`

/* 상단 섹션 - 1st birthday */
const TopSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`

const TopLine = styled.div`
  height: 1px;
  background: #e20e73;
  flex: 1;
  max-width: 120px;
`

const BirthdaySubtitle = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: #e20e73;
  letter-spacing: 2px;
  margin: 0 20px;
  white-space: nowrap;
`

const LogoSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`

const LogoImage = styled(Image)`
  object-fit: contain;
  border-radius: 8px;
`

/* 메인 섹션 - 이미지와 텍스트 */
const MainSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 5px;
  width: 100%;
`

const ImageTextContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

/* 텍스트 오버레이 */
const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
`

/* 타원형 프레임 - 원본과 동일한 위치 */
const OvalFrame = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 160px;
  border: 2px solid #e20e73;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(248, 249, 255, 0.85);
  backdrop-filter: blur(8px);
  z-index: 3;
`

const HappyBirthdayText = styled.div`
  text-align: center;
  line-height: 0.85;
`

const Happy = styled(motion.span)`
  display: block;
  font-size: 3.4rem;
  font-weight: 300;
  color: #e20e73;
  margin-bottom: -8px;
  letter-spacing: 1px;
`

const Birthday = styled(motion.span)`
  display: block;
  font-size: 3rem;
  font-weight: 300;
  color: #e20e73;
  letter-spacing: 1px;
`

/* 별 장식들 - 원본과 동일한 위치 */
const SparkleTopLeft = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 15%;
  color: #e20e73;
  font-size: 1.5rem;
  z-index: 4;
`

const SparkleTopRight = styled(motion.div)`
  position: absolute;
  top: 15%;
  right: 10%;
  color: #e20e73;
  font-size: 1.8rem;
  z-index: 4;
`

const SparkleSmallRight = styled(motion.div)`
  position: absolute;
  top: 25%;
  right: 15%;
  color: #e20e73;
  font-size: 1.2rem;
  z-index: 4;
`

const SparkleBottom = styled(motion.div)`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  color: #e20e73;
  font-size: 1.4rem;
  z-index: 4;
`

/* 원형 이미지 - 원본처럼 타원과 겹치게 */
const CircularImageContainer = styled(motion.div)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 192px;
  height: 192px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
`

const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

/* 메인 이미지 컨테이너 */
const MainImageContainer = styled(motion.div)`
  position: relative;
  width: 224px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
`

const MainImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
  animation: gentle-shake 3s ease-in-out infinite;

  @keyframes gentle-shake {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-8deg);
    }
    75% {
      transform: rotate(8deg);
    }
  }
`

/* 하단 섹션 - 이름과 정보 */
const BottomSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`

const StarDecoration = styled(motion.div)`
  color: #e20e73;
  font-size: 1.2rem;
`

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`

const BabyName = styled(motion.h2)`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #e20e73;
  margin: 0;
  letter-spacing: 1px;
`

const EventInfo = styled.div`
  text-align: center;
  margin-top: 12px;
`

const DateText = styled(motion.p)`
  font-size: 1rem;
  font-weight: 400;
  color: #e20e73;
  margin: 0 0 4px 0;
  letter-spacing: 1px;
`

const LocationText = styled(motion.p)`
  font-size: 0.9rem;
  font-weight: 300;
  color: #e20e73;
  margin: 0;
  letter-spacing: 0.5px;
`

/* 스크롤 인디케이터 */
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
`

const ScrollArrow = styled(motion.div)`
  font-size: 2rem;
  color: #e20e73;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`

// 애니메이션 variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const sparkleVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}


const InvitationCard: React.FC = () => {
  return (
    <Container>
      <HeroSection>
        <ContentWrapper>
          {/* 상단 라인과 1st birthday */}
          <TopSection
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <TopLine />
            <BirthdaySubtitle>100th day</BirthdaySubtitle>
            <TopLine />
          </TopSection>

          {/* 로고 이미지 섹션 */}
          <LogoSection
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <LogoImage
              src={`${process.env.NODE_ENV === 'production' ? '/100th-invitation' : ''}/images/main_logo.png`}
              alt="로고"
              width={240}
              height={120}
              priority
            />
          </LogoSection>

          {/* 메인 이미지와 텍스트 오버레이 */}
          <MainSection>
            <ImageTextContainer
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* 메인 이미지 */}
              <MainImageContainer
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <MainImage
                  src={`${process.env.NODE_ENV === 'production' ? '/100th-invitation' : ''}/images/main.png`}
                  alt="백설하 아기 사진"
                  width={300}
                  height={300}
                  priority
                />
              </MainImageContainer>
            </ImageTextContainer>
          </MainSection>

          {/* 하단 정보 */}
          <BottomSection
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <NameRow>
              <StarDecoration variants={itemVariants}>✦</StarDecoration>
              <BabyName variants={itemVariants}>백설하</BabyName>
              <StarDecoration variants={itemVariants}>✦</StarDecoration>
            </NameRow>

            <EventInfo>
              <DateText variants={itemVariants}>25.09.19 | 11:00</DateText>
              <LocationText variants={itemVariants}>신동탄포레자이아파트</LocationText>
            </EventInfo>
          </BottomSection>

        </ContentWrapper>
      </HeroSection>
    </Container>
  )
}

export default InvitationCard
