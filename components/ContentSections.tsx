'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const ContentContainer = styled.section`
  padding: 20px 30px;
  min-height: 100vh;
  flex: 1;
`

const SectionCard = styled(motion.div)`
  background: transparent;
  padding: 30px 0;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(226, 14, 115, 0.1);
  
  &:first-child {
    padding-top: 20px;
  }
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const SectionTitle = styled.h3`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  color: #e20e73;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`

const MessageContent = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 5px;
    text-align: center;
  }
  
  .parents-name {
    font-weight: 500;
    color: #333;
    margin-top: 20px;
  }
`

/* D-Day 카운터 */
const CountdownTitle = styled.h3`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  color: #e20e73;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`

const CountdownTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  flex-wrap: nowrap;
`

const TimeUnit = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f9fa;
  padding: 8px 6px;
  border-radius: 6px;
  min-width: 40px;
  flex: 1;
  max-width: 60px;
`

const TimeValue = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
`

const TimeLabel = styled.span`
  font-size: 0.6rem;
  color: #666;
  margin-top: 2px;
`

const TimeSeparator = styled.span`
  font-size: 1rem;
  color: #666;
  margin: 0 2px;
`

const CountdownMessage = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  
  .highlight {
    color: #ff6b6b;
    font-weight: 700;
  }
`

/* 캘린더 */
const CalendarTitle = styled.h3`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  color: #e20e73;
  margin-bottom: 15px;
  font-weight: 500;
  text-align: center;
`

const EventInfo = styled.div`
  margin-bottom: 30px;
  text-align: center;
  
  .event-schedule {
    background: linear-gradient(135deg, #faf8fa 0%, #f5f2f5 100%);
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 12px;
    border: 1px solid rgba(226, 14, 115, 0.05);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  }
  
  .time-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: #b8336a;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  
  .time-icon {
    font-size: 1rem;
  }
  
  .event-details {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 4px;
    line-height: 1.3;
    font-weight: 400;
  }
  
  .location {
    font-size: 0.85rem;
    color: #888;
    font-style: normal;
  }
`

const CalendarMonth = styled.h4`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  color: #e20e73;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`

const CalendarGrid = styled.div`
  max-width: 350px;
  margin: 0 auto;
`

const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 10px;
  
  span {
    padding: 10px 5px;
    font-weight: 500;
    color: #666;
    font-size: 0.9rem;
    text-align: center;
  }
`

const CalendarDates = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  
  span {
    padding: 12px 5px;
    text-align: center;
    font-size: 0.9rem;
    color: #333;
    border-radius: 5px;
    
    &.sunday {
      color: #ff6b6b;
    }
    
    &.event-date-highlight {
      background: #e20e73;
      color: white;
      font-weight: 700;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: auto;
    }
  }
`

/* 갤러리 */
const GalleryTitle = styled.h3`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  color: #e20e73;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`

const PhotoItem = styled(motion.div)`
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`

const BottomSpacing = styled.div`
  height: 80px;
  background: transparent;
`

/* 이미지 모달 */
const ImageModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`

const ModalImage = styled(motion.img)`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  
  &:hover {
    background: white;
  }
`

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ContentSections: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const targetDate = new Date('2025-09-19T11:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const basePath = process.env.NODE_ENV === 'production' ? '/100th-invitation' : '';
  
  const galleryImages = [
    { src: `${basePath}/images/gallery1.png`, alt: '백설하 사진 1' },
    { src: `${basePath}/images/gallery2.png`, alt: '백설하 사진 2' },
    { src: `${basePath}/images/gallery3.png`, alt: '백설하 사진 3' },
    { src: `${basePath}/images/gallery4.png`, alt: '백설하 사진 4' },
    { src: `${basePath}/images/gallery5.png`, alt: '백설하 사진 5' },
    { src: `${basePath}/images/gallery6.png`, alt: '백설하 사진 6' },
  ];

  const calendarDates = [
    '', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11', '12', '13',
    '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27',
    '28', '29', '30'
  ];

  return (
    <ContentContainer>
      {/* 초대글 */}
      <SectionCard
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle>초대합니다 💌</SectionTitle>
        <MessageContent>
          <p>설하가 무럭무럭 자라</p>
          <p>어느덧 100일을 맞이하였습니다.</p>
          <p>사랑과 관심으로 지켜봐주신 소중한 분들께</p>
          <p>감사의 마음으로 작은 자리를 마련하였습니다.</p>
          <br />
          <p>뜻깊은 날에 소중한 발걸음 하시어</p>
          <p>함께해 주시면 감사하겠습니다.</p>
          <br />
          <p className="parents-name">아빠 규철 · 엄마 채리</p>
        </MessageContent>
      </SectionCard>

      {/* D-Day 카운터 */}
      <SectionCard
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <CountdownTitle>백일 잔치까지 남은 시간</CountdownTitle>
        <CountdownTimer>
          <TimeUnit
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <TimeValue>{timeLeft.days.toString().padStart(2, '0')}</TimeValue>
            <TimeLabel>DAYS</TimeLabel>
          </TimeUnit>
          <TimeSeparator>:</TimeSeparator>
          <TimeUnit
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TimeValue>{timeLeft.hours.toString().padStart(2, '0')}</TimeValue>
            <TimeLabel>HOUR</TimeLabel>
          </TimeUnit>
          <TimeSeparator>:</TimeSeparator>
          <TimeUnit
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <TimeValue>{timeLeft.minutes.toString().padStart(2, '0')}</TimeValue>
            <TimeLabel>MIN</TimeLabel>
          </TimeUnit>
          <TimeSeparator>:</TimeSeparator>
          <TimeUnit
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TimeValue>{timeLeft.seconds.toString().padStart(2, '0')}</TimeValue>
            <TimeLabel>SEC</TimeLabel>
          </TimeUnit>
        </CountdownTimer>
        <CountdownMessage>
          백설하의 100일 잔치가 <span className="highlight">{timeLeft.days}일</span> 남았습니다.
        </CountdownMessage>
      </SectionCard>

      {/* 캘린더 */}
      <SectionCard
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <CalendarTitle>백일 잔치 안내</CalendarTitle>
        <EventInfo>
          <div className="event-schedule">
            <div className="time-title">
              <span className="time-icon">📸</span>
              <span>11:00 가족 단체 사진 촬영</span>
            </div>
            <div className="event-details">백일상 앞에서 소중한 순간을 기록해요</div>
            <div className="location">📍 신동탄포레자이 101동 1604호</div>
          </div>
          
          <div className="event-schedule">
            <div className="time-title">
              <span className="time-icon">🍽️</span>
              <span>12:00 점심 식사</span>
            </div>
            <div className="event-details">함께 맛있는 식사를 나누며 축하해요</div>
            <div className="location">📍 천지연</div>
          </div>
        </EventInfo>
        
        <CalendarGrid>
          <CalendarMonth>9월</CalendarMonth>
          <CalendarHeader>
            <span>일</span>
            <span>월</span>
            <span>화</span>
            <span>수</span>
            <span>목</span>
            <span>금</span>
            <span>토</span>
          </CalendarHeader>
          <CalendarDates>
            {calendarDates.map((date, index) => (
              <span
                key={index}
                className={`
                  ${[0, 7, 14, 21, 28].includes(index) && date ? 'sunday' : ''}
                  ${date === '19' ? 'event-date-highlight' : ''}
                `}
              >
                {date}
              </span>
            ))}
          </CalendarDates>
        </CalendarGrid>
      </SectionCard>

      {/* 사진 갤러리 */}
      <SectionCard
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <GalleryTitle>소중한 순간들 📸</GalleryTitle>
        <PhotoGrid>
          {galleryImages.map((image, index) => (
            <PhotoItem
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={150}
                height={150}
                style={{ objectFit: 'cover' }}
              />
            </PhotoItem>
          ))}
        </PhotoGrid>
      </SectionCard>

      {/* 하단 여백 */}
      <BottomSpacing />
      
      {/* 이미지 모달 */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <ModalImage
              src={selectedImage}
              alt="확대된 갤러리 이미지"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            <CloseButton
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </CloseButton>
          </ImageModal>
        )}
      </AnimatePresence>
    </ContentContainer>
  )
}

export default ContentSections
