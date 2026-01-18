'use client'

import Antigravity from "./components/Antigravity";

export default function Home() {
  return (
    <div>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Antigravity
          ringRadius={8}
          particleSize={1}
          lerpSpeed={0.02}
          count={800}
          rotationSpeed={0.8}
          fieldStrength={12}
          autoAnimate
          particleShape="sphere"
          color="#3d6eff"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
          <h1 className="text-[72px] font-semibold uppercase text-center mb-0 leading-2">
            <span className="bg-[rgba(255,255,255,0.8)] px-4 rounded-md font-bold">Learn Book</span>
          </h1>
          <p className="text-blue-500 text-[32px] text-center font-mono mt-2 mb-2">
            <span className="bg-[rgba(255,255,255,0.8)] px-4 py-1 rounded-md">Học xong phải nhớ!</span>
          </p>
          <div className="max-w-2xl text-[16px] text-center text-shadow-2xs">
            <span className="bg-[rgba(255,255,255,0.8)] px-2 py-1 leading-7 box-decoration-clone rounded-md">
              Nơi lưu trữ, chia sẻ kiến thức của bạn, ghi lại hành trình học hỏi và phát triển bản thân.
              Mỗi bài viết là một trải nghiệm nhỏ, hy vọng mang đến cho bạn giá trị hữu ích, cảm hứng mới và động lực để tiếp tục tiến về phía trước.
            </span>
          </div>
        </div>
      </div>
    </div >
  );
}
