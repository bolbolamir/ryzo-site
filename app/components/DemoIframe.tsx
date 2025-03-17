'use client'

import { useState, useEffect, useRef } from 'react'

export default function DemoIframe() {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadIframe(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="text-center max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-6xl font-bold mb-4">Try Our App Live</h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience our platform firsthand! Interact with the live demo below to explore all features and functionalities in real-time.
        </p>
      </div>
      <div ref={iframeRef} className="relative max-w-7xl px-8 mx-auto rounded-xl ">
        {isIframeLoading && shouldLoadIframe && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {shouldLoadIframe && (
          <iframe 
            src="https://ryzo.tech/demo" 
            width="100%" 
            height="900px" 
            style={{ border: 'none' }}
            title="Ryzo Demo"
            loading="lazy"
            className='rounded-xl mb-6'
            onLoad={() => setIsIframeLoading(false)}
          />
        )}
      </div>
    </>
  )
}
