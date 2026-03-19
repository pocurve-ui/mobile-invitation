import React from 'react';
import { motion } from 'framer-motion';

export default function Page2({ setCurrentPage, setDirection }) {
  const handleNext = () => {
    setDirection(1);
    setCurrentPage(3);
  };

  return (
    <div className="w-full h-full relative flex flex-col pt-[210px] pb-24 px-6 overflow-hidden">
      <motion.div 
        className="z-10 flex-1 flex flex-col max-w-lg w-full"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
      >

        <div className="w-full text-[16px] font-normal leading-[1.8] text-white tracking-wide break-keep">
          <div className="flex flex-col mt-0 divide-y divide-gray-600/50">
            <div className="flex py-3">
              <span className="font-bold w-12 shrink-0">일시:</span>
              <span>2026년 4월 28일(화) 14:00</span>
            </div>
            
            <div className="flex py-3">
              <span className="font-bold w-12 shrink-0">장소:</span>
              <span>제주신화월드 랜딩관 볼룸 AB홀</span>
            </div>
 
            <div className="flex py-3">
              <span className="font-bold w-12 shrink-0">주최:</span>
              <span>FSAA제주국제학교</span>
            </div>
          </div>

          <p className="mt-10">
            원활한 사전준비를 위하여<br/>
            참석여부를 미리 알려주시면 감사하겠습니다.
          </p>
 
          <div className="mt-3 space-y-4">
            <div className="space-y-0.5">
              <div className="font-bold text-[15px] tracking-wider text-white">FULTON SCIENCE ACADEMY ATHERTON</div>
              <div className="text-[14px] text-gray-400">
                02-6274-1007 / www.fsaatherton.org
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href="tel:02-6274-1007"
                className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black/50 backdrop-blur-sm py-3 px-4 text-[16px] font-medium transition-all duration-300 hover:border-[#ff00a2] hover:text-[#ff00a2] active:bg-[#ff00a2]/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                전화 걸기
              </a>
              <a 
                href="https://www.fsaatherton.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black/50 backdrop-blur-sm py-3 px-4 text-[16px] font-medium transition-all duration-300 hover:border-[#00f191] hover:text-[#00f191] active:bg-[#00f191]/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                홈페이지
              </a>
            </div>
          </div>

        </div>
      </motion.div>


    </div>
  );
}
