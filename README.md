This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


How to make your canvas infinite:
Read the more detailed explanation in the claude



Yes — and honestly, this is one of the most fun things about building a whiteboard. An infinite canvas is what separates "a drawing app" from "Miro/Figma." Worth doing.
But: don't add this in week 1. Get drawing working solid first. I'll explain the concept so you understand it, and you can implement it after the basics are stable.
The key insight
There's no such thing as a truly infinite canvas — the actual <canvas> element is always a fixed pixel size matching the viewport. What you're really building is:
An infinite coordinate space, with a movable "camera" that shows a window into it.
This is the same trick games use. The world is huge, the screen is small, you just move the camera around.
Two coordinate systems
Once you go infinite, you have to separate two things in your head:
Screen coordinates — where the mouse is, in pixels from the top-left of the canvas element. This is what mouse events give you. Range: 0 to canvas width/height.
World coordinates — the "true" position in your infinite space. A stroke at world coordinate (50000, -3000) exists, even if you're not currently looking at it. This is what you store in your database.
You convert between them using the camera:
ts// Camera state
type Camera = {
  x: number;      // world position the camera is centered on
  y: number;
  zoom: number;   // 1 = normal, 2 = zoomed in 2x, 0.5 = zoomed out 2x
};

// Convert screen → world (use this when handling mouse input)
function screenToWorld(screen: Point, camera: Camera): Point {
  return {
    x: (screen.x - canvasWidth / 2) / camera.zoom + camera.x,
    y: (screen.y - canvasHeight / 2) / camera.zoom + camera.y,
  };
}

// Convert world → screen (use this when drawing)
function worldToScreen(world: Point, camera: Camera): Point {
  return {
    x: (world.x - camera.x) * camera.zoom + canvasWidth / 2,
    y: (world.y - camera.y) * camera.zoom + canvasHeight / 2,
  };
}
What changes in your code
Storing strokes: Points are stored in world coordinates, not screen. So {x: 12453, y: -8821} is totally fine.
Drawing strokes: Before drawing each point, convert world → screen. Or — much cleaner — apply the camera as a canvas transform and draw in world space directly:
tsxctx.save();
// Apply camera transform
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.scale(camera.zoom, camera.zoom);
ctx.translate(-camera.x, -camera.y);

// Now draw all strokes in world coordinates — no conversion needed
for (const stroke of strokes) {
  // ... draw using stroke.points as-is
}

ctx.restore();
This is the clean way. The canvas itself handles the math.
Handling mouse input: Convert screen → world before storing in the stroke.
tsxconst getPoint = (e: React.MouseEvent): Point => {
  const rect = canvasRef.current!.getBoundingClientRect();
  const screen = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
  return screenToWorld(screen, camera);
};
The interactions you need to add
To make it feel like Miro/Figma, you need three things:
Pan — hold space + drag, or middle-mouse drag, to move the camera. Mouse down records starting position, mouse move updates camera.x and camera.y based on drag delta.
Zoom — mouse wheel changes camera.zoom. The non-obvious part: zoom should center on the cursor, not the canvas center. Otherwise zooming feels disorienting. The trick: figure out what world point is under the cursor before zoom, then after changing zoom, adjust camera.x/y so that same world point is still under the cursor.
tsxconst handleWheel = (e: WheelEvent) => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const mouseScreen = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  const mouseWorldBefore = screenToWorld(mouseScreen, camera);

  const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
  const newZoom = Math.max(0.1, Math.min(10, camera.zoom * zoomFactor));

  // Calculate new camera position so mouseWorldBefore stays under the cursor
  const newCamera = {
    zoom: newZoom,
    x: mouseWorldBefore.x - (mouseScreen.x - canvas.width / 2) / newZoom,
    y: mouseWorldBefore.y - (mouseScreen.y - canvas.height / 2) / newZoom,
  };
  setCamera(newCamera);
};
Reset/fit view — a button that resets camera to (0, 0, 1), or one that calculates a bounding box of all strokes and zooms to fit them.
The grid trick
To make the infinite canvas feel infinite, draw a subtle dot grid in the background. Without it, panning across an empty white void feels like nothing is happening. With it, users can tell they're moving.
Draw dots at every 50 world units. Only draw dots that are currently visible on screen (calculate the visible world rectangle from camera + canvas size). Adjust dot size/spacing based on zoom so it doesn't get too dense when zoomed out or too sparse when zoomed in.
Performance — the thing that bites you
At small numbers of strokes (a few hundred), naive "redraw everything every frame" is fine. Once you have thousands of strokes spread across a huge space, you'll need:
Viewport culling — before drawing each stroke, check if its bounding box intersects the visible world rectangle. Skip strokes that are off-screen. This alone gets you very far.
Spatial indexing — store strokes in a spatial data structure (quadtree, R-tree) so "find all strokes visible in this rectangle" is fast even with 100k strokes. Library: rbush for JS. Don't build this until you actually need it.
Tile-based rendering — divide world space into chunks (say, 1000x1000 units), render each chunk to an offscreen canvas, then composite visible chunks together. Excalidraw does something like this. Way beyond MVP territory.
My recommendation for your project
MVP (week 1–4): Fixed canvas size, no infinite, no pan/zoom. Just get drawing + collaboration working.
v2 (after MVP): Add infinite canvas with pan + zoom. This is a great project in itself — clean separation of camera and world is a really valuable concept to internalize.
v3: Performance work — viewport culling, spatial index. Only if you have enough strokes to actually need it.
The reason I push back on doing this in week 1 is: every feature you add early multiplies the difficulty of every other feature. If you add infinite canvas before real-time sync works, you're now debugging "why isn't the line in the right place" through two layers of math (camera + DPR + network sync) instead of one. Get one layer rock-solid, then add the next.
The mental model
If you remember nothing else, remember this:

Your stroke data lives in world coordinates. Your canvas shows a window into that world. The camera is what controls the window. Convert at the boundaries (mouse input in, drawing out).

That single principle is the entire idea. Everything else is implementation details around it.
Want to go ahead and add infinite canvas now, or get sync working first? I'd really push for sync first — but if you're motivated and want to do infinite first, I can give you a concrete implementation plan.