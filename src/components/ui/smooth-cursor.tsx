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
            viewBox="0 0 66 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.23984 105.573C6.43184 105.573 4.96484 104.107 4.96484 102.299V85.9271C4.96484 84.1191 6.43084 82.6531 8.23984 82.6531C10.0478 82.6531 11.5139 84.1191 11.5139 85.9271V102.299C11.5139 104.107 10.0478 105.573 8.23984 105.573Z"
                fill="#343434"
            />
            <path
                d="M56.8365 105.573C55.0275 105.573 53.5615 104.107 53.5615 102.299V85.9271C53.5615 84.1191 55.0275 82.6531 56.8365 82.6531C58.6445 82.6531 60.1105 84.1191 60.1105 85.9271V102.299C60.1115 104.107 58.6455 105.573 56.8365 105.573Z"
                fill="#343434"
            />
            <path
                d="M60.8352 49.889H4.24219V15.658C4.24219 7.01099 11.2522 0 19.9002 0H45.1772C53.8242 0 60.8352 7.00999 60.8352 15.658V49.889Z"
                fill="#961411"
            />
            <path
                d="M52.2888 117.35L51.3228 117.64C39.0698 121.322 26.0049 121.322 13.7509 117.64L12.7849 117.35C9.40385 116.334 7.08984 113.222 7.08984 109.692V18.015C7.08984 9.55404 13.9489 2.69604 22.4099 2.69604H42.6648C51.1258 2.69604 57.9848 9.55505 57.9848 18.015V109.692C57.9848 113.222 55.6698 116.335 52.2888 117.35Z"
                fill="#D33225"
            />
            <path
                d="M24.918 119.948C26.866 120.177 28.822 120.317 30.78 120.369V2.69604H24.918V119.948Z"
                fill="#FFD70E"
            />
            <path
                d="M34.2969 120.37C36.2549 120.317 38.2109 120.177 40.1589 119.948V2.69604H34.2969V120.37Z"
                fill="#FFD70E"
            />
            <path
                d="M46.7162 103.813H11.8172L9.74316 115.616C10.6022 116.392 11.6252 117.002 12.7862 117.35L13.7522 117.64C26.0052 121.323 39.0712 121.323 51.3242 117.64L52.2902 117.35C52.7712 117.205 53.2232 117.008 53.6572 116.784L50.4642 106.568C49.9522 104.929 48.4342 103.813 46.7162 103.813Z"
                fill="#961411"
            />
            <path
                d="M16.17 104.64L14.686 55.2839L13.167 36.3589L7.504 14.4519C7.231 15.6059 7.08399 16.7769 7.08899 18.0149V109.692C7.09799 111.996 8.287 114.131 9.918 115.606L14.155 109.183L16.17 104.64Z"
                fill="#961411"
            />
            <path
                d="M11.5508 109.925L7.09082 108.715V109.692C7.09082 113.222 9.4058 116.334 12.7858 117.35L13.7518 117.64C15.5758 118.188 17.4198 118.644 19.2748 119.029L14.4478 111.981C13.7568 110.974 12.7298 110.245 11.5508 109.925Z"
                fill="#E76957"
            />
            <path
                d="M7.23242 111.172C7.77742 114.066 9.88642 116.479 12.7844 117.35L13.7504 117.64C14.6554 117.912 15.5644 118.16 16.4774 118.39C14.0834 112.292 9.37042 111.295 7.23242 111.172Z"
                fill="#F9948A"
            />
            <path
                d="M53.5238 109.925L57.9838 108.715V109.692C57.9838 113.222 55.6688 116.334 52.2888 117.35L51.3228 117.64C49.4988 118.188 47.6548 118.644 45.7998 119.029L50.6268 111.981C51.3178 110.974 52.3448 110.245 53.5238 109.925Z"
                fill="#E76957"
            />
            <path
                d="M57.8417 111.172C57.2967 114.066 55.1877 116.479 52.2897 117.35L51.3237 117.64C50.4197 117.912 49.5097 118.16 48.5967 118.39C50.9907 112.292 55.7037 111.295 57.8417 111.172Z"
                fill="#F9948A"
            />
            <path
                d="M49.9962 56.128L47.2902 55.477C37.7092 53.173 27.7222 53.151 18.1312 55.413L15.0742 56.134C14.4282 56.286 13.7972 55.831 13.7372 55.17L11.7042 33.656C11.6592 33.153 11.9972 32.696 12.4912 32.592L19.6352 31.085C28.2612 29.265 37.1742 29.281 45.7932 31.131L52.5882 32.59C53.0802 32.696 53.4162 33.152 53.3712 33.654L51.3382 55.1661C51.2782 55.8291 50.6442 56.284 49.9962 56.128Z"
                fill="#3F4342"
            />
            <path
                d="M25.8553 30.103C23.7713 30.328 21.6943 30.651 19.6353 31.086L12.4914 32.593C11.9974 32.697 11.6594 33.154 11.7054 33.657L13.7384 55.171C13.7984 55.832 14.4294 56.287 15.0754 56.135L18.1334 55.414C20.6844 54.812 23.2644 54.377 25.8564 54.099V30.103H25.8553Z"
                fill="#343434"
            />
            <path
                d="M12.4914 36.2949L19.6353 34.787C28.2613 32.967 37.1744 32.9829 45.7934 34.8329L52.5884 36.2919C52.7924 36.3359 52.9594 36.4499 53.0934 36.5919L53.3714 33.6529C53.4164 33.1519 53.0804 32.6949 52.5884 32.5889L45.7934 31.1299C37.1744 29.2789 28.2613 29.2639 19.6353 31.0839L12.4914 32.5909C11.9974 32.6949 11.6594 33.1519 11.7054 33.6549L11.9834 36.5939C12.1174 36.4529 12.2854 36.3389 12.4914 36.2949Z"
                fill="#343434"
            />
            <path
                d="M9.22168 48.1121L11.5467 54.1191C12.4297 56.4011 12.8957 58.8221 12.9227 61.2691L13.2027 91.9471C13.2167 93.2731 12.9377 94.5861 12.3857 95.7911L9.15869 102.83C9.07569 103.011 8.80369 102.952 8.80469 102.752L8.8627 48.1781C8.8627 47.9731 9.14668 47.9201 9.22168 48.1121Z"
                fill="#343434"
            />
            <path
                d="M8.83008 78.9431L13.0981 80.4371L13.0841 78.8541L8.83209 77.3401L8.83008 78.9431Z"
                fill="#961411"
            />
            <path
                d="M55.8536 48.1121L53.5286 54.1191C52.6456 56.4011 52.1796 58.8221 52.1526 61.2691L51.8726 91.9471C51.8586 93.2731 52.1376 94.5861 52.6896 95.7911L55.9166 102.83C55.9996 103.011 56.2716 102.952 56.2706 102.752L56.2126 48.1781C56.2126 47.9731 55.9276 47.9201 55.8536 48.1121Z"
                fill="#3F4342"
            />
            <path
                d="M51.9775 80.4371L56.2455 78.9431L56.2435 77.3401L51.9915 78.8541L51.9775 80.4371Z"
                fill="#D33225"
            />
            <path
                d="M10.2922 50.8751L3.53616 53.4431C2.18616 53.9531 0.678187 53.2711 0.169187 51.9211C-0.340813 50.5711 0.34116 49.0631 1.69116 48.5541L8.44818 45.9861L10.2922 50.8751Z"
                fill="#961411"
            />
            <path
                d="M54.748 50.9362L61.5441 53.4062C62.8951 53.9142 64.4011 53.2312 64.9091 51.8802C65.4171 50.5292 64.7341 49.0222 63.3831 48.5142L56.5871 46.0442L54.748 50.9362Z"
                fill="#D33225"
            />
            <path
                d="M46.6837 108.06L32.6857 107.515C32.6587 107.514 32.6317 107.514 32.6047 107.515L18.6067 108.06C18.1397 108.078 17.7427 108.405 17.6347 108.859L17.1617 110.847C17.0057 111.501 17.5017 112.129 18.1747 112.129H32.6457H47.1167C47.7887 112.129 48.2857 111.501 48.1297 110.847L47.6567 108.859C47.5477 108.405 47.1507 108.078 46.6837 108.06Z"
                fill="#343434"
            />
            <path
                d="M7.15332 16.7799H11.7183C11.7183 16.7799 12.7603 7.22391 21.0573 7.22391V2.76392C13.6383 3.41492 7.74732 9.34591 7.15332 16.7799Z"
                fill="#FFD70E"
            />
            <path
                d="M57.985 16.7799H53.42C53.42 16.7799 52.3781 7.22391 44.0811 7.22391V2.76392C51.4991 3.41492 57.39 9.34591 57.985 16.7799Z"
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
