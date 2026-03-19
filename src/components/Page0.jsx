import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import PatternWave from './PatternWave';
import { motion } from 'framer-motion';

export default function Page0({ setDirection, setCurrentPage }) {
  const [showPattern, setShowPattern] = useState(false);

  useEffect(() => {
    // 3.5초 후 패턴 웨이브 애니메이션 마운트 (기존 5초에서 단축)
    const t = setTimeout(() => setShowPattern(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage(1);
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-between py-12 px-4">
      {/* 배경 나침반 애니메이션 */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          <img 
            src="/assets/mainpage_img.png" 
            alt="배경 나침반 로고" 
            className="w-[88%] max-w-[506px] object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 패턴 파도 애니메이션 (5초 딜레이 마운트) */}
      {showPattern && <PatternWave />}

      {/* 헤더 로고 */}
      <motion.div 
        className="z-10 w-full flex justify-center mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <img 
          src="/assets/mainpage_logo.svg" 
          alt="제주국제학교 기공식 로고" 
          className="h-[121px] object-contain"
        />
      </motion.div>

      {/* 중앙 콘텐츠 */}
      <motion.div 
        className="z-10 flex flex-col items-center justify-center text-center space-y-2 absolute inset-0 pointer-events-none pt-12 w-full overflow-visible"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.7 }}
      >
        <h1 className="text-[5.5vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.5vw] font-semibold tracking-wider text-white uppercase whitespace-nowrap" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
          Step Into The Next Frontier
        </h1>
        <p className="text-lg md:text-xl font-light tracking-normal text-white">
          제주국제학교 기공식
        </p>
      </motion.div>

      {/* 카운트다운 (다음페이지 화살표 기준 120px 위 = bottom 160px) */}
      <motion.div 
        className="absolute bottom-[160px] left-0 w-full z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <Countdown targetDate="2026-04-28T14:00:00+09:00" />
      </motion.div>


    </div>
  );
}
