import React, { useEffect, useRef } from 'react';

const AnimatedBrain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 600;
    const height = canvas.height = 600;

    // Neural dots
    const dots = [];
    const numDots = 50;

    // Create dots (neurons)
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: 3
      });
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw brain outline
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      
      // Simplified brain shape
      ctx.beginPath();
      ctx.moveTo(300, 100);
      ctx.bezierCurveTo(450, 100, 500, 200, 500, 300);
      ctx.bezierCurveTo(500, 450, 400, 500, 300, 500);
      ctx.bezierCurveTo(200, 500, 100, 450, 100, 300);
      ctx.bezierCurveTo(100, 200, 150, 100, 300, 100);
      ctx.stroke();

      // Draw middle divider
      ctx.beginPath();
      ctx.moveTo(300, 100);
      ctx.bezierCurveTo(300, 200, 300, 400, 300, 500);
      ctx.stroke();

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Move dots
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 100 || dot.x > 500) dot.vx *= -1;
        if (dot.y < 100 || dot.y > 500) dot.vy *= -1;

        // Draw dot
        ctx.fillStyle = '#ef4444'; // Red color
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        dots.forEach((otherDot, j) => {
          if (i !== j) {
            const dx = dot.x - otherDot.x;
            const dy = dot.y - otherDot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.strokeStyle = `rgba(239, 68, 68, ${1 - distance / 100})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="w-full h-auto max-w-full"
      />
    </div>
  );
};

export default AnimatedBrain;
