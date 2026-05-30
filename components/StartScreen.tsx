"use client";

import Image from "next/image";
import { results } from "@/data/results";

type Props = {
  onStart: () => void;
};

const characterImage: Record<string, string> = {
  "champagne-dog": "/characters/champagne-dog.png",
  tanuki: "/characters/tanuki.png",
  cat: "/characters/cat.png",
  rabbit: "/characters/rabbit.png",
  hamster: "/characters/hamster.png",
  jellyfish: "/characters/jellyfish.png",
};

const shortName: Record<string, string[]> = {
  "champagne-dog": ["人類だいすき", "シャンパン犬"],
  tanuki: ["愛想だけは満点", "たぬき"],
  cat: ["陽キャの皮かぶり", "ねこ"],
  rabbit: ["声かけ待ちの", "すみっこ兎"],
  hamster: ["脳内だけ満席", "ハムスター"],
  jellyfish: ["存在感オフの", "深海くらげ"],
};

export default function StartScreen({ onStart }: Props) {
  return (
    <div className="max-w-md mx-auto">
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #c4b0f5 0%, #d8bef8 40%, #e8d5fc 70%, #f5eeff 100%)",
        }}
      >
        <div
          className="absolute -top-12 -right-12 w-52 h-52 rounded-full opacity-30"
          style={{ background: "#a78bfa" }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20"
          style={{ background: "#c084fc" }}
        />

        {/* hero character */}
        <div className="relative flex flex-col items-center pt-10 pb-2 px-6 z-10">
          <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/characters/champagne-dog.png"
              alt="人類だいすきシャンパン犬"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* title block */}
        <div className="relative z-10 px-6 pb-8 text-center">
          <h1
            className="text-3xl font-black mb-1 mt-4"
            style={{ color: "#2d1b69" }}
          >
            飲み会生存キャラ診断
          </h1>
          <p className="text-sm font-medium mb-1" style={{ color: "#6b3fa0" }}>
            あなたは飲み会で、どんなぬいぐるみになる？
          </p>
          <p className="text-xs mb-6" style={{ color: "#7c5eb8" }}>
            15問でわかる、社交性と人見知りの正体。毒かわいい6匹があなたを待っています。
          </p>
          <button
            onClick={onStart}
            className="w-full max-w-xs font-bold text-base py-4 rounded-2xl text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.97]"
            style={{
              background: "linear-gradient(90deg, #7c3aed 0%, #9333ea 100%)",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
            }}
          >
            診断をはじめる
          </button>
        </div>
      </div>

      {/* ── Feature strip ── */}
      <div className="px-5 py-8 bg-white border-b" style={{ borderColor: "var(--border)" }}>
        <h2
          className="text-xl font-black text-center mb-2 leading-tight"
          style={{ color: "#2d1b69" }}
        >
          &ldquo;陽キャの皮&rdquo;を脱いだら、<br />本当のあなたは何タイプ？
        </h2>
        <p className="text-sm text-center mb-6" style={{ color: "var(--text-sub)" }}>
          飲み会で明るくできる人も、端っこで観察しがちな人も、全部かわいい個性。あなたの社交スタイルを、ぬいぐるみキャラで診断します。
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: "15問", label: "直感で選べる\nゆるめの質問" },
            { num: "6タイプ", label: "毒かわいい\nぬいぐるみ結果" },
            { num: "シェア向き", label: "思わず載せたい\n結果カード" },
          ].map(({ num, label }) => (
            <div
              key={num}
              className="rounded-2xl p-3 text-center"
              style={{ background: "#f5f0ff" }}
            >
              <p className="font-black text-base" style={{ color: "#7c3aed" }}>
                {num}
              </p>
              <p
                className="text-xs mt-1 leading-snug whitespace-pre-line"
                style={{ color: "var(--text-sub)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Character grid ── */}
      <div className="px-5 py-8 bg-white">
        <h2
          className="text-xl font-black text-center mb-1"
          style={{ color: "#2d1b69" }}
        >
          診断結果はこの6匹
        </h2>
        <p className="text-xs text-center mb-5" style={{ color: "var(--text-sub)" }}>
          全部ちょっと自虐できて、ちゃんと愛おしい。
        </p>
        <div className="grid grid-cols-2 gap-3">
          {results.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl overflow-hidden shadow-sm border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src={characterImage[r.id]}
                  alt={r.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-2 px-3 bg-white text-center">
                {(shortName[r.id] ?? [r.name]).map((line, i) => (
                  <p
                    key={i}
                    className="text-xs font-bold leading-snug"
                    style={{ color: "#2d1b69" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="px-5 py-8" style={{ background: "#f5f0ff" }}>
        <h2 className="text-lg font-black mb-5" style={{ color: "#2d1b69" }}>
          診断の流れ
        </h2>
        <div className="space-y-4">
          {[
            { step: "01", title: "質問に答える", desc: "BAR・飲み会・初対面にまつわる15問をタップ。" },
            { step: "02", title: "キャラが判定", desc: "点数は見せず、あなたに近いぬいぐるみキャラを表示。" },
            { step: "03", title: "結果をシェア", desc: "スクショやカード画像でストーリーズ投稿にも使える設計。" },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 items-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0 mt-0.5"
                style={{ background: "#7c3aed" }}
              >
                {step}
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#2d1b69" }}>{title}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-sub)" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div
        className="px-5 py-10 text-center"
        style={{
          background: "linear-gradient(160deg, #c4b0f5 0%, #d8bef8 60%, #f5eeff 100%)",
        }}
      >
        <p className="text-base font-black mb-5 leading-tight" style={{ color: "#2d1b69" }}>
          今のあなたの&ldquo;飲み会での正体&rdquo;、<br />ぬいぐるみにして暴きます。
        </p>
        <button
          onClick={onStart}
          className="w-full font-bold text-base py-4 rounded-2xl text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.97]"
          style={{
            background: "linear-gradient(90deg, #7c3aed 0%, #9333ea 100%)",
            boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
          }}
        >
          診断スタート 🐾
        </button>
      </div>
    </div>
  );
}
