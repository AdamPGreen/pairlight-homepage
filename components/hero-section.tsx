"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { DemoCard } from "@/components/demo-card";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    const gradient = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const isDark = document.documentElement.classList.contains("dark");
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      
      gradient.addColorStop(0, isDark ? "rgba(107, 133, 254, 0.3)" : "rgba(107, 133, 254, 0.2)");
      gradient.addColorStop(1, isDark ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)");
      
      return gradient;
    };
    
    let bubbles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];
    
    const createBubbles = () => {
      bubbles = [];
      const totalBubbles = 3;
      
      for (let i = 0; i < totalBubbles; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 150 + Math.random() * 200,
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
        });
      }
    };
    
    const draw = () => {
      resizeCanvas();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach((bubble) => {
        ctx.fillStyle = gradient(ctx, bubble.x, bubble.y, bubble.size);
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();
        
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        
        if (bubble.x < -bubble.size) bubble.x = canvas.width + bubble.size;
        if (bubble.x > canvas.width + bubble.size) bubble.x = -bubble.size;
        if (bubble.y < -bubble.size) bubble.y = canvas.height + bubble.size;
        if (bubble.y > canvas.height + bubble.size) bubble.y = -bubble.size;
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createBubbles();
    draw();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-24 md:pt-32 lg:pt-20 pb-12 lg:pb-20 flex items-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10" 
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Find the Right Speakers, <span className="font-semibold">Fast</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              Pairlight enables you to source and connect with high-quality speakers — curated, vetted, and aligned with your agenda.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                size="lg" 
                className="bg-[#6B85FE] hover:bg-[#5A73EB] text-white"
              >
                Get speaker matches
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Join the speaker network
              </Button>
            </div>
          </div>
          
          <div className="lg:h-[calc(100vh-8rem)] flex items-center justify-center">
            <DemoCard />
          </div>
        </div>
      </div>
    </section>
  );
}