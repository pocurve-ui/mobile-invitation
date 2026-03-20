import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import PatternWave from './PatternWave';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Page0({ setDirection, setCurrentPage }) {
  const [showPattern, setShowPattern] = useState(false);

  useEffect(() => {
    // 0.1초 후 패턴 웨이브 애니메이션 마운트
    const t = setTimeout(() => setShowPattern(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage(1);
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center pt-12 pb-6 px-4">
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
            opacity: 0.3;
          }
        `}
      </style>

      {/* 배경 나침반 애니메이션 */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
      >
        <img 
          src="/assets/mainpage_img.png" 
          alt="배경 나침반 로고" 
          className="w-[78%] max-w-[506px] object-contain floating-compass"
        />
      </motion.div>

      {/* 패턴 파도 애니메이션 (5초 딜레이 마운트) */}
      {showPattern && <PatternWave />}

      {/* 헤더 로고 */}
      <motion.div 
        className="z-20 w-full flex justify-center mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <img 
          src="/assets/mainpage_logo.svg" 
          alt="제주국제학교 기공식 로고" 
          className="h-[98px] object-contain"
        />
      </motion.div>

      {/* 중앙 콘텐츠 (로고 하단으로 이동) */}
      <motion.div 
        className="z-20 flex flex-col items-center text-center space-y-0 mt-[21px] w-full px-6 overflow-visible"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      >
        <h2 
          className="text-white text-[6.2vw] min-[375px]:text-[1.5rem] md:text-[3rem] font-inter font-extralight tracking-[0.03em] mb-0 drop-shadow-sm whitespace-nowrap uppercase"
          style={{ transform: 'scaleX(0.95)', transformOrigin: 'center', wordSpacing: '-0.08em' }}
        >
          Step Into The Next Frontier
        </h2>
        <p className="text-white text-[18px] md:text-[24px] font-sans tracking-tight font-medium drop-shadow-md">
          FSAA 제주 캠퍼스 기공식
        </p>
      </motion.div>

      {/* 하단 카운트다운 */}
      <motion.div 
        className="z-20 mt-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Countdown targetDate="2026-04-28T14:00:00+09:00" />
      </motion.div>

      <motion.div 
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatDelay: 1 
        }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </div>
  );
}
