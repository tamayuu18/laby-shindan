import type { ResultData } from "@/types";

export const results: ResultData[] = [
  {
    id: "champagne-dog",
    slug: "champagne-dog",
    name: "人類だいすきシャンパン犬",
    emoji: "🐶",
    catchcopy: "知らない人がいるほど、しっぽが揺れるタイプ。",
    description:
      "あなたは、初対面の場でもわりと自然に自分を出せるタイプ。知らない人がいる空間を「怖い」より「楽しそう」と感じやすく、乾杯の空気を明るくできる存在です。\n\nただ、あなたの明るさはときどき眩しすぎて、人見知り勢をびっくりさせることも。とはいえ、あなたがいるだけで場の温度が少し上がるのは間違いありません。",
    shortDescription:
      "知らない人がいるほど、しっぽが揺れる乾杯担当。\n場の空気を明るくするけど、たまにまぶしすぎるタイプ。",
    features: [
      "初対面への抵抗が少ない",
      "会話のきっかけを作るのが得意",
      "飲み会の空気を明るくできる",
      "たまに勢いが強すぎる",
    ],
    scoreRange: [0, 6],
    accentColor: "#F5C842",
    bgGradient: "from-amber-900 via-yellow-900 to-neutral-900",
  },
  {
    id: "tanuki",
    slug: "tanuki",
    name: "愛想だけは満点たぬき",
    emoji: "🦝",
    catchcopy: "笑顔は出せる。でも電池残量は常に見てる。",
    description:
      "あなたは、ちゃんと笑えるし、ちゃんと相づちも打てるタイプ。人と話すのが苦手というより、場に合わせる力が高い人です。\n\nただし、内心ではずっと人間関係の電池残量を確認しています。「楽しそうに見える」と言われがちですが、実はだいぶ頑張っています。社交性がないのではなく、社交性を丁寧に使いすぎているだけです。",
    shortDescription:
      "笑顔と相づちは完璧。\nでも心の中では、ずっと社交バッテリーの残量を見ているタイプ。",
    features: [
      "愛想がいい",
      "空気を読むのが得意",
      "場に合わせすぎて疲れやすい",
      "帰宅後に急に無言になる",
    ],
    scoreRange: [7, 14],
    accentColor: "#A78BFA",
    bgGradient: "from-violet-900 via-purple-900 to-neutral-900",
  },
  {
    id: "cat",
    slug: "cat",
    name: "陽キャの皮かぶりねこ",
    emoji: "🐱",
    catchcopy: "外ではパーティー、家では即ログアウト。",
    description:
      'あなたは、飲み会では普通に話せるし、笑えるタイプ。でもそれは、かなり高度な“擬態スキル”で成り立っているかもしれません。\n\n「楽しかった」と「もう誰にも会いたくない」が同時に来る人です。外では明るいねこ、家では即ログアウトねこ。飲み会での笑顔の裏では、ずっと心のCPUが動いています。',
    shortDescription:
      "外ではにこにこ、家では即ログアウト。\n明るく見えるけど、実はかなり擬態しているタイプ。",
    features: [
      "明るく見られがち",
      "実はかなり気を遣っている",
      "飲み会中は平気そう",
      "帰宅後に一気にHPが削れる",
    ],
    scoreRange: [15, 22],
    accentColor: "#F472B6",
    bgGradient: "from-pink-900 via-rose-900 to-neutral-900",
  },
  {
    id: "rabbit",
    slug: "rabbit",
    name: "声かけ待ちのすみっこ兎",
    emoji: "🐰",
    catchcopy: "話しかけてくれたら、ちゃんと咲きます。",
    description:
      "あなたは、人が嫌いなわけではありません。むしろ話したい気持ちはあります。ただ、自分から一歩目を踏み出すには、心の準備と安全確認が必要なタイプです。\n\n話しかけてもらえると、じわじわ本来のかわいさと面白さが出てきます。放っておくと、すみっこで静かに人間観察を始めます。",
    shortDescription:
      "話しかけてくれたら、ちゃんと咲く。\nすみっこで観察しながら、安心できる入口を探しているタイプ。",
    features: [
      "自分から話しかけるのは少し苦手",
      "話しかけられると意外と話せる",
      "最初だけ緊張する",
      "安心すると面白さが出る",
    ],
    scoreRange: [23, 31],
    accentColor: "#6EE7B7",
    bgGradient: "from-emerald-900 via-teal-900 to-neutral-900",
  },
  {
    id: "hamster",
    slug: "hamster",
    name: "脳内だけ満席ハムスター",
    emoji: "🐹",
    catchcopy: "心の中では、今日も予約でいっぱいです。",
    description:
      "あなたは、頭の中ではめちゃくちゃ喋っているのに、現実では発言タイミングを逃しがちなタイプ。「今の話、言いたいことあったのに」と思っている間に、次の話題へ流れていくことがあります。\n\nただし、好きな話題になると急に早口スイッチが入ります。普段静かな分、刺さる話題で急に本領発揮するタイプです。",
    shortDescription:
      "心の中では今日も満席。\n現実では静かでも、好きな話題になると急に早口になるタイプ。",
    features: [
      "脳内ではよく喋る",
      "現実では発言タイミングを見すぎる",
      "好きな話題になると急に強い",
      "あとから「あれ言えばよかった」と思いがち",
    ],
    scoreRange: [32, 39],
    accentColor: "#FCA5A5",
    bgGradient: "from-red-900 via-orange-900 to-neutral-900",
  },
  {
    id: "jellyfish",
    slug: "jellyfish",
    name: "存在感オフの深海くらげ",
    emoji: "🪼",
    catchcopy: "静かな場所でだけ、ちゃんと光る。",
    description:
      "あなたは、大人数、初対面、急なノリがちょっと苦手なタイプ。できれば静かに漂っていたい人です。\n\nでも、ちゃんと安心できる場所ではふわっと光ります。テンションで勝負するより、独特の空気感や深い話で魅力が出るタイプです。無理に明るくしなくても、あなたにはあなたの光り方があります。",
    shortDescription:
      "静かな場所でだけ、ちゃんと光る。\n大人数は苦手でも、安心できる相手には深く魅力が伝わるタイプ。",
    features: [
      "大人数が苦手",
      "急に話を振られると固まりやすい",
      "安心できる相手とは深く話せる",
      "静かな場所で魅力が出る",
    ],
    scoreRange: [40, 45],
    accentColor: "#67E8F9",
    bgGradient: "from-cyan-950 via-blue-950 to-neutral-950",
  },
];

export function getResultByScore(score: number): ResultData {
  const result = results.find(
    (r) => score >= r.scoreRange[0] && score <= r.scoreRange[1]
  );
  return result ?? results[results.length - 1];
}
