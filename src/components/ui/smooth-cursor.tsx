'use client';

import { motion, useSpring } from 'framer-motion';
import { FC, JSX, useEffect, useRef, useState } from 'react';

interface Position {
    x: number;
    y: number;
}

export interface SmoothCursorProps {
    cursor?: JSX.Element;
    springConfig?: {
        damping: number;
        stiffness: number;
        mass: number;
        restDelta: number;
    };
}

const DefaultCursorSVG: FC = () => {
    return (
        <svg
            width="50"
            height="100"
            viewBox="0 0 66 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M52.2898 114.655L51.3238 114.945C39.0708 118.626 26.0058 118.626 13.7518 114.945L12.7858 114.655C9.40481 113.639 7.09082 110.527 7.09082 106.997V15.32C7.09082 6.85901 13.9498 0 22.4108 0H42.6658C51.1268 0 57.9858 6.85901 57.9858 15.32V106.997C57.9848 110.527 55.6698 113.639 52.2898 114.655Z"
                fill="#63625D"
            />
            <path
                d="M46.7172 101.117H11.8172L9.74316 112.92C10.6022 113.696 11.6252 114.306 12.7862 114.654L13.7522 114.944C26.0052 118.626 39.0712 118.626 51.3242 114.944L52.2902 114.654C52.7712 114.509 53.2232 114.313 53.6572 114.088L50.4651 103.872C49.9521 102.233 48.4342 101.117 46.7172 101.117Z"
                fill="#52534D"
            />
            <path
                d="M16.171 101.944L14.687 52.5881L13.168 33.6631L7.50496 11.7561C7.23196 12.9101 7.08497 14.0811 7.08997 15.3201V106.997C7.09897 109.301 8.28796 111.436 9.91896 112.911L14.156 106.488L16.171 101.944Z"
                fill="#52534D"
            />
            <path
                d="M11.5508 107.229L7.09082 106.019V106.996C7.09082 110.526 9.40581 113.638 12.7858 114.654L13.7518 114.944C15.5758 115.492 17.4198 115.948 19.2748 116.333L14.4478 109.285C13.7568 108.278 12.7298 107.549 11.5508 107.229Z"
                fill="#E76957"
            />
            <path
                d="M7.2334 108.477C7.7784 111.371 9.8874 113.784 12.7854 114.655L13.7514 114.945C14.6554 115.217 15.5654 115.465 16.4784 115.694C14.0844 109.596 9.3714 108.6 7.2334 108.477Z"
                fill="#F9948A"
            />
            <path
                d="M53.5248 107.229L57.9848 106.019V106.996C57.9848 110.526 55.6698 113.638 52.2898 114.654L51.3238 114.944C49.4998 115.492 47.6558 115.948 45.8008 116.333L50.6278 109.285C51.3188 108.278 52.3458 107.549 53.5248 107.229Z"
                fill="#E76957"
            />
            <path
                d="M57.8417 108.477C57.2967 111.371 55.1877 113.784 52.2897 114.655L51.3237 114.945C50.4197 115.217 49.5097 115.465 48.5967 115.694C50.9907 109.596 55.7037 108.6 57.8417 108.477Z"
                fill="#F9948A"
            />
            <path
                d="M49.9972 53.4331L47.2912 52.7821C37.7112 50.4781 27.7232 50.4561 18.1322 52.7181L15.0742 53.4391C14.4282 53.5911 13.7972 53.1361 13.7372 52.4751L11.7042 30.9611C11.6592 30.4581 11.9972 30.0011 12.4912 29.8971L19.6352 28.3901C28.2612 26.5701 37.1732 26.5851 45.7932 28.4361L52.5882 29.8951C53.0802 30.0011 53.4162 30.4571 53.3712 30.9591L51.3382 52.4711C51.2792 53.1331 50.6442 53.5881 49.9972 53.4331Z"
                fill="#3F4342"
            />
            <path
                d="M25.8563 27.407C23.7723 27.632 21.6953 27.955 19.6363 28.39L12.4923 29.897C11.9983 30.001 11.6603 30.458 11.7063 30.961L13.7393 52.475C13.7993 53.136 14.4303 53.591 15.0763 53.439L18.1343 52.718C20.6853 52.116 23.2653 51.681 25.8573 51.403L25.8563 27.407Z"
                fill="#343434"
            />
            <path
                d="M12.4923 33.6001L19.6363 32.0931C28.2623 30.2731 37.1743 30.2891 45.7943 32.1391L52.5893 33.5981C52.7933 33.6421 52.9603 33.7561 53.0943 33.8981L53.3723 30.9591C53.4173 30.4581 53.0813 30.0011 52.5893 29.8951L45.7943 28.4361C37.1743 26.5851 28.2623 26.5701 19.6363 28.3901L12.4923 29.8971C11.9983 30.0011 11.6603 30.4581 11.7063 30.9611L11.9843 33.9001C12.1183 33.7571 12.2863 33.6431 12.4923 33.6001Z"
                fill="#343434"
            />
            <path
                d="M9.22267 45.416L11.5477 51.423C12.4307 53.705 12.8977 56.126 12.9237 58.573L13.2037 89.251C13.2177 90.577 12.9387 91.89 12.3867 93.095L9.15967 100.134C9.07667 100.315 8.80467 100.256 8.80567 100.057L8.86367 45.483C8.86467 45.278 9.14867 45.225 9.22267 45.416Z"
                fill="#343434"
            />
            <path
                d="M8.83105 76.247L13.0991 77.741L13.0841 76.159L8.83305 74.644L8.83105 76.247Z"
                fill="#1E1E1E"
            />
            <path
                d="M55.8545 45.416L53.5296 51.423C52.6466 53.705 52.1805 56.126 52.1535 58.573L51.8735 89.251C51.8595 90.577 52.1385 91.89 52.6905 93.095L55.9176 100.134C56.0006 100.315 56.2725 100.256 56.2715 100.057L56.2135 45.483C56.2135 45.278 55.9285 45.225 55.8545 45.416Z"
                fill="#3F4342"
            />
            <path
                d="M51.9775 77.741L56.2455 76.247L56.2445 74.644L51.9925 76.159L51.9775 77.741Z"
                fill="#343434"
            />
            <path
                d="M10.2932 48.179L3.53619 50.747C2.18619 51.257 0.678183 50.575 0.169183 49.225C-0.340817 47.875 0.341186 46.367 1.69119 45.858L8.44819 43.29L10.2932 48.179Z"
                fill="#343434"
            />
            <path
                d="M54.749 48.2401L61.545 50.7101C62.896 51.2181 64.403 50.5351 64.91 49.1841C65.418 47.8331 64.735 46.3271 63.384 45.8191L56.588 43.3491L54.749 48.2401Z"
                fill="#3F4342"
            />
            <path
                d="M46.6847 105.364L32.6866 104.819C32.6596 104.818 32.6326 104.818 32.6056 104.819L18.6076 105.364C18.1406 105.382 17.7436 105.709 17.6356 106.163L17.1627 108.151C17.0067 108.805 17.5027 109.433 18.1757 109.433H32.6466H47.1176C47.7896 109.433 48.2866 108.805 48.1306 108.151L47.6576 106.163C47.5496 105.709 47.1517 105.383 46.6847 105.364Z"
                fill="#343434"
            />
            <path
                d="M18.0336 94.368C17.2186 94.368 16.5586 93.708 16.5586 92.893V61.423C16.5586 60.608 17.2196 59.948 18.0336 59.948C18.8486 59.948 19.5086 60.608 19.5086 61.423V92.893C19.5096 93.708 18.8486 94.368 18.0336 94.368Z"
                fill="#E3E5E1"
            />
            <path
                d="M47.0443 94.368C46.2293 94.368 45.5693 93.708 45.5693 92.893V61.423C45.5693 60.608 46.2293 59.948 47.0443 59.948C47.8593 59.948 48.5193 60.608 48.5193 61.423V92.893C48.5193 93.708 47.8593 94.368 47.0443 94.368Z"
                fill="white"
            />
            <path
                d="M7.15332 14.0841H11.7183C11.7183 14.0841 12.7603 4.52811 21.0573 4.52811V0.0681152C13.6393 0.719115 7.74832 6.65111 7.15332 14.0841Z"
                fill="#FFD70E"
            />
            <path
                d="M57.985 14.0841H53.42C53.42 14.0841 52.3781 4.52811 44.0811 4.52811V0.0681152C51.5001 0.719115 57.39 6.65111 57.985 14.0841Z"
                fill="#FFD70E"
            />
        </svg>
    );
};

export function SmoothCursor({
    cursor = <DefaultCursorSVG />,
    springConfig = {
        damping: 45,
        stiffness: 400,
        mass: 1,
        restDelta: 0.001,
    },
}: SmoothCursorProps) {
    const [isMoving, setIsMoving] = useState(false);
    const lastMousePos = useRef<Position>({ x: 0, y: 0 });
    const velocity = useRef<Position>({ x: 0, y: 0 });
    const lastUpdateTime = useRef(Date.now());
    const previousAngle = useRef(0);
    const accumulatedRotation = useRef(0);

    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);
    const rotation = useSpring(0, {
        ...springConfig,
        damping: 60,
        stiffness: 300,
    });
    const scale = useSpring(1, {
        ...springConfig,
        stiffness: 500,
        damping: 35,
    });

    useEffect(() => {
        const updateVelocity = (currentPos: Position) => {
            const currentTime = Date.now();
            const deltaTime = currentTime - lastUpdateTime.current;

            if (deltaTime > 0) {
                velocity.current = {
                    x: (currentPos.x - lastMousePos.current.x) / deltaTime,
                    y: (currentPos.y - lastMousePos.current.y) / deltaTime,
                };
            }

            lastUpdateTime.current = currentTime;
            lastMousePos.current = currentPos;
        };

        const smoothMouseMove = (e: MouseEvent) => {
            const currentPos = { x: e.clientX, y: e.clientY };
            updateVelocity(currentPos);

            const speed = Math.sqrt(
                Math.pow(velocity.current.x, 2) +
                    Math.pow(velocity.current.y, 2)
            );

            cursorX.set(currentPos.x);
            cursorY.set(currentPos.y);

            if (speed > 0.1) {
                const currentAngle =
                    Math.atan2(velocity.current.y, velocity.current.x) *
                        (180 / Math.PI) +
                    90;

                let angleDiff = currentAngle - previousAngle.current;
                if (angleDiff > 180) angleDiff -= 360;
                if (angleDiff < -180) angleDiff += 360;
                accumulatedRotation.current += angleDiff;
                rotation.set(accumulatedRotation.current);
                previousAngle.current = currentAngle;

                scale.set(0.95);
                setIsMoving(true);

                const timeout = setTimeout(() => {
                    scale.set(1);
                    setIsMoving(false);
                }, 150);

                return () => clearTimeout(timeout);
            }
        };

        let rafId: number;
        const throttledMouseMove = (e: MouseEvent) => {
            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                smoothMouseMove(e);
                rafId = 0;
            });
        };

        document.body.style.cursor = 'none';
        window.addEventListener('mousemove', throttledMouseMove);

        return () => {
            window.removeEventListener('mousemove', throttledMouseMove);
            document.body.style.cursor = 'auto';
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [cursorX, cursorY, rotation, scale]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: cursorX,
                top: cursorY,
                translateX: '-50%',
                translateY: '-50%',
                rotate: rotation,
                scale: scale,
                zIndex: 100,
                pointerEvents: 'none',
                willChange: 'transform',
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
            }}
        >
            {cursor}
        </motion.div>
    );
}
