import React from 'react';
import { motion } from 'framer-motion';

export default function Page4() {
  return (
    <div className="w-full h-full relative flex flex-col pt-[200px] pb-24 px-6 overflow-hidden">
      <motion.div 
        className="z-10 flex-1 flex flex-col max-w-lg w-full"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        {/* 장소 정보 */}
        <div className="mb-3">
          <h2 className="text-[16px] font-bold text-white tracking-wide mb-0.5">제주신화월드 랜딩관 볼룸 AB홀</h2>
          <p className="text-[14px] text-gray-400 font-normal tracking-wide">
            제주특별자치도 서귀포시 안덕면 신화역사로 304번길 38
          </p>
        </div>

        {/* 지도 이미지 */}
        <div className="w-full aspect-video bg-black overflow-hidden mb-8 border border-white/10">
          <img 
            src="/assets/map_illust2.png" 
            alt="지도 안내" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 안내 버튼 */}
        <div className="flex gap-3 mt-0">
          <a 
            href="https://www.shinhwaworld.com/howtogethere.jhtml?lang=kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black/50 backdrop-blur-sm py-3 px-4 text-[16px] font-medium transition-all duration-300 hover:border-[#ff00a2] hover:text-[#ff00a2] active:bg-[#ff00a2]/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            대중교통 및 주차장 안내
          </a>
          <a 
            href="https://naver.me/GTn3bYuT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black/50 backdrop-blur-sm py-3 px-4 text-[16px] font-medium transition-all duration-300 hover:border-[#00f191] hover:text-[#00f191] active:bg-[#00f191]/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            네이버지도
          </a>
        </div>
      </motion.div>
    </div>
  );
}
