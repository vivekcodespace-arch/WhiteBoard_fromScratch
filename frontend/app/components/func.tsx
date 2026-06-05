'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

type Point = { x: number; y: number };
type Stroke = { points: Point[]; color: string; width: number };

export default function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);
  const isDrawingRef = useRef(false);

  // Resize canvas to match its CSS size, accounting for device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Set the actual drawing buffer size in real pixels
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the drawing context so 1 unit = 1 CSS pixel
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, []);

  // Redraw all strokes from data
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const allStrokes = currentStroke ? [...strokes, currentStroke] : strokes;

    for (const stroke of allStrokes) {
      if (stroke.points.length === 0) continue;
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.stroke();
    }
  }, [strokes, currentStroke]);

  // Initial sizing + handle window resize
  useEffect(() => {
    resizeCanvas();
    redraw();

    const handleResize = () => {
      resizeCanvas();
      redraw();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [resizeCanvas, redraw]);

  // Redraw whenever strokes change
  useEffect(() => {
    redraw();
  }, [redraw]);

  // Convert mouse event to canvas-relative coordinates
  const getPoint = (e: React.MouseEvent): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent) => {
    isDrawingRef.current = true;
    setCurrentStroke({
      points: [getPoint(e)],
      color: '#000000',
      width: 2,
    });
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawingRef.current || !currentStroke) return;
    setCurrentStroke({
      ...currentStroke,
      points: [...currentStroke.points, getPoint(e)],
    });
  };

  const stopDrawing = () => {
    if (currentStroke && currentStroke.points.length > 0) {
      setStrokes((prev) => [...prev, currentStroke]);
    }
    setCurrentStroke(null);
    isDrawingRef.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      className="bg-white cursor-crosshair w-screen h-screen block"
    />
  );
}