import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const raf = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
            dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
        };

        const loop = () => {
            const dx = pos.current.x - ring.current.x;
            const dy = pos.current.y - ring.current.y;
            ring.current.x += dx * 0.1;
            ring.current.y += dy * 0.1;
            ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`;
            raf.current = requestAnimationFrame(loop);
        };

        const onOver = (e) => { if (e.target.closest('a,button,[data-hover]')) ringRef.current?.classList.add('hovering'); };
        const onOut = (e) => { if (e.target.closest('a,button,[data-hover]')) ringRef.current?.classList.remove('hovering'); };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onOver, { passive: true });
        document.addEventListener('mouseout', onOut, { passive: true });
        raf.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
};

export default CustomCursor;
