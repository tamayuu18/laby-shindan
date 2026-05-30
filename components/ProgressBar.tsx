"use client";

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-2" style={{ color: "var(--text-sub)" }}>
        <span className="font-bold">{current} / {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full rounded-full h-2" style={{ background: "#e9deff" }}>
        <div
          className="h-2 rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #7c3aed 0%, #c084fc 100%)",
          }}
        />
      </div>
    </div>
  );
}
