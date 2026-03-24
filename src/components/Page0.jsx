import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import PatternWave from './PatternWave';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Page0({ setDirection, setCurrentPage }) {
  const handleNext = () => {
    setDirection(1);
    setCurrentPage(1);
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center pt-8 pb-[80px] px-6 bg-transparent">
      {/* 0. 메인 페이지 전용 배경 이미지 */}
      <div 
        className="absolute inset-0 max-w-[480px] mx-auto opacity-100"
        style={{ zIndex: -10 }}
      >
        <img 
          src="/assets/mainpage_bg@3x.jpg"
          alt="메인 배경"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* CSS 애니메이션 정의 */}
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(20px); }
            50% { transform: translateY(50px); }
            100% { transform: translateY(20px); }
          }
          .floating-compass {
            animation: floating 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* 1. 배경 나침반 로고 (가장 밑바탕 z-0) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden isolate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <img 
          src="/assets/mainpage_img3-2.png" 
          alt="메인 중앙 이미지" 
          className="w-[78%] max-w-[506px] object-contain floating-compass"
        />
        {/* 2. 패턴 파도 애니메이션 */}
        <div className="absolute inset-0 pointer-events-none">
          <PatternWave />
        </div>
      </motion.div>

      {/* 3. 상단 콘텐츠: 로고와 타이틀 */}
      <div className="z-20 w-full flex flex-col items-center pointer-events-none mt-2 gap-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center w-full brightness-0 invert"
        >
          <img 
            src="/assets/mainpage_logo.svg" 
            alt="제주국제학교 기공식 로고" 
            className="h-[88px] object-contain" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          className="w-full flex justify-center px-6"
        >
          <h1 className="text-[clamp(1.5rem,9.5vw,2.6rem)] font-extralight text-center leading-[1.15] tracking-normal text-white uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            FSAA<br />
            GROUNDBREAKING<br />
            CEREMONY
          </h1>
        </motion.div>
      </div>

      <div className="flex-1" />

      {/* 3. 하단 콘텐츠: 텍스트 및 카운트다운 */}
      <motion.div 
        className="z-20 flex flex-col items-center w-full pointer-events-none mb-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <p className="text-white text-[16px] font-sans tracking-tight font-medium mb-1 relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            FSAA 제주국제학교 기공식
        </p>
        <Countdown targetDate="2026-04-28T14:00:00+09:00" />
      </motion.div>

      {/* 4. 하단 은은한 그라데이션 */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>
  );
}
