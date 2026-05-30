"use client";

type Props = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      <div className="mb-6 text-6xl animate-bounce">🍾</div>
      <p className="text-xs tracking-[0.3em] text-violet-300 uppercase mb-3">
        Nomikai Survival
      </p>
      <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
        飲み会生存キャラ診断
      </h1>
      <p className="text-white/60 text-sm mb-8">
        あなたは飲み会でどんな生き物になる？
      </p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 max-w-sm mb-10 text-left">
        <p className="text-white/70 text-sm leading-relaxed">
          初対面の飲み会、楽しみだけどちょっと疲れる。
          そんなあなたの<span className="text-violet-300">"飲み会での正体"</span>を、
          毒かわいいキャラで診断します。
        </p>
        <ul className="mt-3 text-white/40 text-xs space-y-1">
          <li>📝 全15問・4択</li>
          <li>🎨 6種類のキャラクター診断</li>
          <li>📸 ストーリーズ用画像を保存できます</li>
        </ul>
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-sm bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-violet-900/40 hover:opacity-90 active:scale-[0.98] transition-all"
      >
        診断スタート 🐾
      </button>

      <p className="mt-4 text-white/25 text-xs">
        15問でわかる、あなたの社交性と人見知りの正体。
      </p>
    </div>
  );
}
