import React, { useRef, useEffect } from 'react';

const SpecializationSection: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 70;
        const maxDistance = 120;

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        const init = () => {
            particles = [];
            const rect = canvas.parentElement!.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * 2 + 1;
                const x = (Math.random() * (canvas.width - size * 2));
                const y = (Math.random() * (canvas.height - size * 2));
                const directionX = (Math.random() * 0.4) - 0.2;
                const directionY = (Math.random() * 0.4) - 0.2;
                particles.push(new Particle(x, y, directionX, directionY, size));
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                     ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (maxDistance * maxDistance)) {
                        opacityValue = 1 - (distance / (maxDistance * maxDistance));
                        ctx.strokeStyle = `rgba(200, 200, 200, ${opacityValue * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => p.update());
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();
        
        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            init();
            animate();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="specialization" className="sticky top-0 bg-black text-white h-screen flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
            <div className="relative z-10 container mx-auto px-6 h-full">
                <div className="relative w-full h-full flex flex-col justify-between py-20 md:py-28 min-h-[70vh]">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Strategies</p>
                            <h2 className="text-5xl md:text-7xl font-bold">Our Specialization</h2>
                        </div>
                        <a href="#services" className="hidden md:flex items-center justify-center w-40 h-40 border-2 border-white rounded-full text-center hover:bg-white hover:text-black transition-colors duration-300 flex-col group">
                            <span className="font-semibold tracking-wider text-sm">EXPLORE</span>
                            <span className="font-semibold tracking-wider text-sm">SERVICE</span>
                        </a>
                    </div>
                    <div className="max-w-md">
                        <p className="text-lg text-gray-300">
                            Our team builds marketing tactics that ignite ideas, command attention, and situate your company as a reputable specialist.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecializationSection;