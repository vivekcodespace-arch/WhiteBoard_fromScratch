'use client'

import { useState, useRef, useEffect,  useCallback } from "react";

//now we also have to define the types
type Point = {
  x: number;
  y: number;
}
type Stroke = {
  points : Point[];
  color: string;
  width: number;
}



export default function Whiteboard(){

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);
  const isDrawingRef = useRef(false);
  const [selectedcolor, setSelectedColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(2);

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

  const redraw = useCallback (() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if(!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0,0,rect.width, rect.height);

    const allStrokes = currentStroke ? [...strokes, currentStroke] : strokes;

    for (const stroke of allStrokes){
      if(stroke.points.length === 0) continue;

      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
      for(let i = 1;i<stroke.points.length; i++){
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.stroke();
    }
  },[strokes, currentStroke]);

  useEffect(()=> {
    resizeCanvas();
    redraw();

    const handleResize = () =>{
      resizeCanvas();
      redraw();
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [resizeCanvas, redraw]);

  //Redraw whenever stroke changes
  useEffect(() => {
    redraw();
  }, [redraw]);

 
  //clear the board
  const clearBoard = () => {
    setStrokes([]);
    setCurrentStroke(null);
  }

  const undoLastStroke = () => {
    setStrokes((prev) => prev.slice(0, -1));
  };

  const getPoint = (e: React.MouseEvent ) : Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

  };

  const startDrawing = (e: React.MouseEvent) => {
    isDrawingRef.current = true;
    console.log('start drawing is callded')
    setCurrentStroke({
      points : [getPoint(e)],
      color : selectedcolor,
      width : brushSize,
    });
  }

  const draw = (e: React.MouseEvent) => {
    if(!isDrawingRef.current || !currentStroke) return;
    console.log('draw is also called')
    setCurrentStroke({
      ...currentStroke,
      points : [...currentStroke.points, getPoint(e)],
    });
  }

  const stopDrawing = () => {
    if(currentStroke && currentStroke.points.length > 0){
      setStrokes((prev) => [...prev , currentStroke]);
    }
    setCurrentStroke(null)
    isDrawingRef.current = false;
  };
  
  return (
  <>
    <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded shadow flex gap-4 items-center">
      <input
        type="color"
        value={selectedcolor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />

      <input
        type="range"
        min="1"
        max="20"
        value={brushSize}
        onChange={(e) => setBrushSize(Number(e.target.value))}
      />

      <button
        onClick={undoLastStroke}
        className="border px-2 py-1"
      >
        Undo
      </button>

      <button
        onClick={clearBoard}
        className="border px-2 py-1"
      >
        Clear
      </button>
    </div>

    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      className="bg-white cursor-crosshair w-screen h-screen block"
    />
  </>
  );
}