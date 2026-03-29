'use client';

import React, { useEffect } from 'react';

function BackToTop() {
    useEffect(() => {
        const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement | null;
        if (!progressPath) return;

        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = `${progress}`;
        };

        const handleScroll = () => {
            updateProgress();

            const offset = 50;
            const backToTopButton = document.querySelector('.progress-wrap');
            const switcher = document.querySelector('.rts-switcher');

            if (backToTopButton && switcher) {
                if (window.scrollY > offset) {
                    backToTopButton.classList.add('active-progress');
                    switcher.classList.add('btt__visible');
                } else {
                    backToTopButton.classList.remove('active-progress');
                    switcher.classList.remove('btt__visible');
                }
            }
        };

        const scrollToTop = (event: Event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('scroll', handleScroll);

        const backToTopButton = document.querySelector('.progress-wrap');
        backToTopButton?.addEventListener('click', scrollToTop);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            backToTopButton?.removeEventListener('click', scrollToTop);
        };
    }, []);

    return (
        <>
            {/* BACK TO TOP AREA START */}
            <div className="progress-wrap">
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            transition: "stroke-dashoffset 10ms linear 0s",
                            strokeDasharray: "307.919, 307.919",
                            strokeDashoffset: "307.919"
                        }}
                    />
                </svg>
            </div>
            <div className="rts-switcher"></div>
            {/* BACK TO TOP AREA END */}
        </>
    );
}

export default BackToTop;
