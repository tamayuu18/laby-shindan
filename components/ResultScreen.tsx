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
    typeof window !== "undefined" ? window.location.hostname : "nomikai-shindan.vercel.app";

  const handleSaveImage = async () => {
    if (!cardRef.current) return;
    setSaveStatus("generating");

    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(cardRef.current, {
        width: 1080,
        height: 1920,
        pixelRatio: 1,
      });

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
    if (!cardRef.current) return;
    setSaveStatus("generating");

    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(cardRef.current, {
        width: 1080,
        height: 1920,
        pixelRatio: 1,
      });
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
    <div className="flex flex-col min-h-screen px-5 py-10">
      {/* Hidden card for image generation */}
      <div
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <StoryCard ref={cardRef} result={result} siteUrl={siteUrl} />
      </div>

      {/* Result header */}
      <div className="text-center mb-6">
        <p className="text-xs tracking-widest text-white/40 uppercase mb-1">
          あなたの診断結果
        </p>
        <div className="text-8xl mb-4">{result.emoji}</div>
        <h1
          className="text-2xl font-bold text-white mb-2 leading-tight"
          style={{ color: result.accentColor }}
        >
          {result.name}
        </h1>
        <p className="text-white/60 text-sm italic">{result.catchcopy}</p>
      </div>

      {/* Description card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
        {result.description.split("\n\n").map((para, i) => (
          <p key={i} className="text-white/75 text-sm leading-relaxed mb-3 last:mb-0">
            {para}
          </p>
        ))}
      </div>

      {/* Features */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
        <p className="text-xs text-white/40 tracking-widest mb-3">
          あなたの飲み会での特徴
        </p>
        <ul className="space-y-2">
          {result.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/75">
              <span style={{ color: result.accentColor }}>◆</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Save button */}
      <div className="mb-3">
        <button
          onClick={handleSaveImage}
          disabled={saveStatus === "generating"}
          className="w-full bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-base py-4 rounded-2xl shadow-lg shadow-violet-900/40 disabled:opacity-60 hover:opacity-90 active:scale-[0.98] transition-all"
        >
          {saveStatus === "generating"
            ? "画像を作成中…"
            : saveStatus === "done"
            ? "✅ 画像を保存しました"
            : "📸 ストーリーズ用画像を保存"}
        </button>

        {saveStatus === "error" && (
          <div className="mt-2 bg-red-900/30 border border-red-700/50 rounded-xl p-3 text-center">
            <p className="text-red-300 text-sm">
              画像の生成に失敗しました。時間をおいてもう一度お試しください。
            </p>
            <p className="text-white/40 text-xs mt-1">
              結果カードをスクショして投稿してね
            </p>
          </div>
        )}

        <p className="text-center text-white/35 text-xs mt-2">
          画像を保存して、Instagramストーリーズに投稿してね。
        </p>
        <p className="text-center text-white/25 text-xs mt-1">
          保存できない場合は「画像を確認」ボタンから長押し保存してください。
        </p>
      </div>

      {/* Preview button */}
      <button
        onClick={handlePreview}
        disabled={saveStatus === "generating"}
        className="w-full border border-white/15 text-white/60 text-sm py-3 rounded-2xl hover:bg-white/5 active:scale-[0.98] transition-all mb-4 disabled:opacity-40"
      >
        🖼 画像を確認する（長押しで保存）
      </button>

      {/* Image preview modal */}
      {saveStatus === "preview" && previewUrl && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={() => setSaveStatus("idle")}
        >
          <p className="text-white/70 text-sm mb-3">長押しして保存してください</p>
          <img
            src={previewUrl}
            alt="診断結果カード"
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="mt-4 text-white/50 text-sm border border-white/20 px-6 py-2 rounded-full"
            onClick={() => setSaveStatus("idle")}
          >
            閉じる
          </button>
        </div>
      )}

      {/* X share */}
      <a
        href={xShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm py-3 rounded-2xl hover:bg-white/5 transition-all mb-3"
      >
        <span className="font-bold">𝕏</span> Xでシェアする
      </a>

      {/* Reset */}
      <button
        onClick={onReset}
        className="w-full text-white/30 text-sm py-3 hover:text-white/50 transition-colors"
      >
        もう一度診断する
      </button>
    </div>
  );
}
