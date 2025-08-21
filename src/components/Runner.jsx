import { useEffect, useRef, useState } from "react";

class FPS {
  constructor() {
    this.frames = 0;
    this.ptime = 0;
    this.fps = 0;
  }
  update(time) {
    this.frames++;
    if (time >= this.ptime + 1000) {
      this.fps = (this.frames * 1000) / (time - this.ptime);
      this.ptime = time;
      this.frames = 0;
    }
    return this.fps;
  }
}

export default function Runner({ program}) {
  const [fps, setFps] = useState(0);
  const [frame, setFrame] = useState(0);
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const charWidth = 11.5;
      const charHeight = 24;
      setCols(Math.floor(window.innerWidth / charWidth));
      setRows(Math.floor(window.innerHeight / charHeight));
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [])

  const bufferRef = useRef([]);
  const fpsCounter = useRef(new FPS());
  const lastTimeRef = useRef(0);
  const fpsInterval = 1000 / 15; // Target FPS (15)

  useEffect(() => {
    bufferRef.current = new Array(cols * rows).fill().map(() => ({
      char: " ",
      color: "white",
    }));

    let animationId;
    const loop = (time) => {
      if (time - lastTimeRef.current >= fpsInterval) {
        lastTimeRef.current = time;

        const context = {
          time,
          cols,
          rows,
          metrics: { aspect: cols / rows },
        };

        // console.log(window.innerHeight, rows)

        if (typeof program?.main === "function") {
          for (let y = 0; y < rows; y++) {
            const offs = y * cols;
            for (let x = 0; x < cols; x++) {
              const idx = offs + x;
              const out = program.main(
                { x, y, index: idx },
                context,
                {},
                bufferRef.current
              );
              if (typeof out === "object" && out !== null) {
                bufferRef.current[idx] = { ...bufferRef.current[idx], ...out };
              } else {
                bufferRef.current[idx] = {
                  ...bufferRef.current[idx],
                  char: String(out ?? " "),
                };
              }
            }
          }
        }

        const newFps = fpsCounter.current.update(time);
        setFps(newFps);
        setFrame((f) => f + 1);
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [cols, rows, program]);

  return (
    <div className="z-[-1] p-0 font-mono bg-black text-white overflow-hidden absolute top-0 left-0 right-0 bottom-0">
      <div style={{ lineHeight: "1.5em" }}>
        {Array(rows)
          .fill("")
          .map((_, y) => (
            <div key={y} style={{ display: "flex" }}>
              {bufferRef.current
                .slice(y * cols, (y + 1) * cols)
                .map((cell, i) => (
                  <span
                    key={i}
                    style={{ color: cell.color, whiteSpace: "pre", paddingRight: "2px" }}
                  >
                    {cell.char}
                  </span>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
