"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/track";

const READY = "Heat the pan on low, add the makhana, then press Start.";
const STIR_EVERY = 45;

const fmt = (sec: number) =>
  `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;

export default function RoastTimer() {
  const [total, setTotal] = useState(360);
  const [left, setLeft] = useState(360);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState(READY);
  const endAt = useRef(0);
  const lastCue = useRef(-1);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((endAt.current - Date.now()) / 1000));
      setLeft(remaining);
      const cue = Math.floor((total - remaining) / STIR_EVERY);
      if (remaining > 0 && cue > 0 && cue !== lastCue.current) {
        lastCue.current = cue;
        setStatus("Stir now.");
      }
      if (remaining === 0) {
        setRunning(false);
        setStatus(
          "Time is up. Test one piece: it should snap easily. If it bends, roast for another minute.",
        );
      }
    }, 250);
    return () => clearInterval(id);
  }, [running, total]);

  const startPause = () => {
    if (running) {
      setRunning(false);
      setStatus("Paused.");
      return;
    }
    const from = left === 0 ? total : left;
    if (left === 0) lastCue.current = -1;
    setLeft(from);
    endAt.current = Date.now() + from * 1000;
    setRunning(true);
    setStatus("Roasting on low heat. Stir often.");
    track("roast_timer_start");
  };

  const reset = (seconds = total) => {
    setRunning(false);
    lastCue.current = -1;
    setTotal(seconds);
    setLeft(seconds);
    setStatus(READY);
  };

  const label = running ? "Pause" : left > 0 && left < total ? "Resume" : "Start";

  return (
    <div className="tool">
      <h3>Roast timer</h3>
      <label htmlFor="rt-min">
        Roasting time
        <select
          id="rt-min"
          value={total}
          disabled={running}
          onChange={(e) => reset(Number(e.target.value))}
        >
          {[5, 6, 7, 8].map((m) => (
            <option key={m} value={m * 60}>
              {m} minutes
            </option>
          ))}
        </select>
      </label>
      <p
        className="my-3 text-[2.6rem] font-bold leading-none tabular-nums"
        aria-hidden="true"
      >
        {fmt(left)}
      </p>
      <p role="status" aria-live="polite">
        {status}
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2.5">
        <button type="button" className="btn btn-wa" onClick={startPause}>
          {label}
        </button>
        <button type="button" className="btn btn-line" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </div>
  );
}
