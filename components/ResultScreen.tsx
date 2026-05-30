"use client";

import { useRef, useState } from "react";
import type { ResultData } from "@/types";
import StoryCard from "./StoryCard";

type Props = {
  result: ResultData;
  onReset: () => void;
};

type SaveStatus = "idle" | "generating" | "done" | "error" | "preview";

export default function ResultScreen({ result, onReset }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const siteUrl =
    typeof window !== "undefined"
      ? window.location.hostname
      : "nomikai-shindan.vercel.app";

  const generatePng = async () => {
    if (!cardRef.current) return null;
    const { toPng } = await import("html-to-image");
    return await toPng(cardRef.current, { width: 1080, height: 1920, pixelRatio: 1 });
  };

  const handleSaveImage = async () => {
    setSaveStatus("generating");
    try {
      const dataUrl = await generatePng();
      if (!dataUrl) throw new Error();
      const link = document.createElement("a");
      link.download = `nomikai-survival-${result.slug}.png`;
      link.href = dataUrl;
      link.click();
      setPreviewUrl(dataUrl);
      setSaveStatus("done");
    } catch {
      setSaveStatus("error");
    }
  };

  const handlePreview = async () => {
    setSaveStatus("generating");
    try {
      const dataUrl = await generatePng();
      if (!dataUrl) throw new Error();
      setPreviewUrl(dataUrl);
      setSaveStatus("preview");
    } catch {
      setSaveStatus("error");
    }
  };

  const xShareText = encodeURIComponent(
    `私は「${result.name}」タイプでした${result.emoji}\n飲み会生存キャラ診断\n#飲み会生存キャラ診断`
  );
  const xShareUrl = `https://twitter.com/intent/tweet?text=${xShareText}&url=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.href : ""
  )}`;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hidden card for image generation */}
      <div
        style={{ position: "fixed", top: "-9999px", left: "-9999px", pointerEvents: "none" }}
        aria-hidden="true"
      >
        <StoryCard ref={cardRef} result={result} siteUrl={siteUrl} />
      </div>

      {/* Hero result header */}
      <div
        className="px-5 pt-12 pb-8 text-center"
        style={{
          background: `linear-gradient(160deg, ${result.cardBg} 0%, #ffffff 100%)`,
        }}
      >
        <p className="text-xs font-bold tracking-widest mb-4" style={{ color: result.cardAccent }}>
          あなたの診断結果
        </p>

        {/* Character display */}
        <div
          className="w-44 h-44 mx-auto rounded-3xl flex items-center justify-center text-8xl mb-5 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${result.cardBg} 0%, #fff 100%)`,
            boxShadow: `0 8px 32px ${result.cardAccent}40`,
          }}
        >
          {result.emoji}
        </div>

        <h1
          className="text-2xl font-black mb-2 leading-tight"
          style={{ color: "#2d1b69" }}
        >
          {result.name}
        </h1>
        <p
          className="text-sm font-medium italic"
          style={{ color: result.cardAccent }}
        >
          {result.catchcopy}
        </p>
      </div>

      <div className="px-5 pb-10 space-y-4 mt-4">
        {/* Description */}
        <div
          className="rounded-3xl p-5 shadow-sm"
          style={{ background: "#fff", border: "1.5px solid var(--border)" }}
        >
          {result.description.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed mb-3 last:mb-0"
              style={{ color: "#4a3880" }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Features */}
        <div
          className="rounded-3xl p-5 shadow-sm"
          style={{ background: "#fff", border: "1.5px solid var(--border)" }}
        >
          <p
            className="text-xs font-black tracking-widest mb-3"
            style={{ color: result.cardAccent }}
          >
            あなたの飲み会での特徴
          </p>
          <ul className="space-y-2">
            {result.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#4a3880" }}>
                <span className="font-black flex-shrink-0" style={{ color: result.cardAccent }}>
                  ◆
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Save button */}
        <button
          onClick={handleSaveImage}
          disabled={saveStatus === "generating"}
          className="w-full font-bold text-base py-4 rounded-2xl text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.97] disabled:opacity-60"
          style={{
            background: "linear-gradient(90deg, #7c3aed 0%, #9333ea 100%)",
            boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
          }}
        >
          {saveStatus === "generating"
            ? "⏳ 画像を作成中…"
            : saveStatus === "done"
            ? "✅ 画像を保存しました"
            : "📸 ストーリーズ用画像を保存"}
        </button>

        {saveStatus === "error" && (
          <div
            className="rounded-2xl p-4 text-center"
            style={{ background: "#fff0f0", border: "1.5px solid #fca5a5" }}
          >
            <p className="text-sm font-medium" style={{ color: "#b91c1c" }}>
              画像の生成に失敗しました。時間をおいてもう一度お試しください。
            </p>
            <p className="text-xs mt-1" style={{ color: "#9ca3af" }}>
              結果カードをスクショして投稿してね
            </p>
          </div>
        )}

        <p className="text-center text-xs" style={{ color: "#a78bfa" }}>
          画像を保存して、Instagramストーリーズに投稿してね。
        </p>
        <p className="text-center text-xs" style={{ color: "#c4b5fd" }}>
          保存できない場合は下の「画像を確認」ボタンから長押しで保存してください。
        </p>

        {/* Preview button */}
        <button
          onClick={handlePreview}
          disabled={saveStatus === "generating"}
          className="w-full font-medium text-sm py-3 rounded-2xl transition-all hover:opacity-80 active:scale-[0.97] disabled:opacity-40"
          style={{
            background: "#f0e8ff",
            color: "#7c3aed",
            border: "1.5px solid #ddd6fe",
          }}
        >
          🖼 画像を確認する（長押しで保存）
        </button>

        {/* X share */}
        <a
          href={xShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 font-medium text-sm py-3 rounded-2xl transition-all hover:opacity-80"
          style={{
            background: "#fff",
            color: "#2d1b69",
            border: "1.5px solid var(--border)",
          }}
        >
          <span className="font-black text-base">𝕏</span> Xでシェアする
        </a>

        {/* Reset */}
        <button
          onClick={onReset}
          className="w-full text-sm py-3 transition-colors"
          style={{ color: "#a78bfa" }}
        >
          もう一度診断する
        </button>
      </div>

      {/* Preview modal */}
      {saveStatus === "preview" && previewUrl && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setSaveStatus("idle")}
        >
          <p className="text-white/80 text-sm mb-3 font-medium">
            長押しして保存してください
          </p>
          <img
            src={previewUrl}
            alt="診断結果カード"
            className="max-w-full rounded-2xl object-contain"
            style={{ maxHeight: "75vh" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="mt-4 text-white/60 text-sm border border-white/20 px-6 py-2 rounded-full"
            onClick={() => setSaveStatus("idle")}
          >
            閉じる
          </button>
        </div>
      )}
    </div>
  );
}
