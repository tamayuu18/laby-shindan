import type { Question } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    text: "知らない人だらけのBARに入った瞬間、あなたの脳内BGMは？",
    options: [
      { label: "A", text: "フェスの入場SE", score: 0 },
      { label: "B", text: "おしゃれなシティポップ", score: 1 },
      { label: "C", text: "サスペンスの静かなピアノ", score: 2 },
      { label: "D", text: "無音。脳が処理落ちしている", score: 3 },
    ],
  },
  {
    id: 2,
    text: "席を選べるなら、どこに座る？",
    options: [
      { label: "A", text: "真ん中。全方向と話せる場所", score: 0 },
      { label: "B", text: "端寄り。でも孤立しすぎない場所", score: 1 },
      { label: "C", text: "壁側。背後を取られない場所", score: 2 },
      { label: "D", text: "出口が見える場所。撤退ルート確保", score: 3 },
    ],
  },
  {
    id: 3,
    text: "初対面の人に「何飲んでるんですか？」と聞かれた。心の第一声は？",
    options: [
      { label: "A", text: "話しかけてくれた！ラッキー", score: 0 },
      { label: "B", text: "普通に返せばいいやつね", score: 1 },
      { label: "C", text: "え、今の答え方で印象決まる？", score: 2 },
      { label: "D", text: "なぜ私に？何の意図で？", score: 3 },
    ],
  },
  {
    id: 4,
    text: "「趣味は何ですか？」と聞かれた時、あなたは？",
    options: [
      { label: "A", text: "すぐ答えて、相手にも聞き返す", score: 0 },
      { label: "B", text: "無難な趣味を出す", score: 1 },
      { label: "C", text: "本当の趣味を言うか一瞬迷う", score: 2 },
      { label: "D", text: "趣味はあるが、この場に出していい人格ではない", score: 3 },
    ],
  },
  {
    id: 5,
    text: "グラスを持って自由に交流する時間。あなたは何をしている？",
    options: [
      { label: "A", text: "気になる人に自分から話しかける", score: 0 },
      { label: "B", text: "近くにいる人と自然に話す", score: 1 },
      { label: "C", text: "話しかけられやすそうな角度で立つ", score: 2 },
      { label: "D", text: "氷が溶ける速度を観察している", score: 3 },
    ],
  },
  {
    id: 6,
    text: "みんなが笑っているけど、自分だけ何が面白いかわからない。どうする？",
    options: [
      { label: "A", text: "「今の何？笑」と聞く", score: 0 },
      { label: "B", text: "とりあえず笑っておく", score: 1 },
      { label: "C", text: "周りの表情から文脈を復元する", score: 2 },
      { label: "D", text: "人類の群れに紛れる難しさを感じる", score: 3 },
    ],
  },
  {
    id: 7,
    text: "会話が一瞬止まった。あなたの中で起きていることは？",
    options: [
      { label: "A", text: "次の話題を出す", score: 0 },
      { label: "B", text: "まあ沈黙もあるよねと思う", score: 1 },
      { label: "C", text: "何か言わなきゃ会議が始まる", score: 2 },
      { label: "D", text: "沈黙の責任者に自分が任命された気がする", score: 3 },
    ],
  },
  {
    id: 8,
    text: "好きな話題が出た瞬間、あなたはどうなる？",
    options: [
      { label: "A", text: "すぐ入って盛り上がる", score: 0 },
      { label: "B", text: "いつもより話せる", score: 1 },
      { label: "C", text: "入るタイミングを見計らいすぎる", score: 2 },
      { label: "D", text: "脳内ではすでに30分の講義が始まっている", score: 3 },
    ],
  },
  {
    id: 9,
    text: "誰かが「自己紹介しよ！」と言い出した。あなたの心境は？",
    options: [
      { label: "A", text: "わかりやすくて助かる", score: 0 },
      { label: "B", text: "まあ必要だよね", score: 1 },
      { label: "C", text: "順番が来るまで内容を脳内で整える", score: 2 },
      { label: "D", text: "自己紹介という制度の違憲性を考える", score: 3 },
    ],
  },
  {
    id: 10,
    text: "飲み会中、スマホを見るとしたら理由は？",
    options: [
      { label: "A", text: "写真を撮る・誰かに連絡する", score: 0 },
      { label: "B", text: "通知確認", score: 1 },
      { label: "C", text: "手の置き場に困った時の避難", score: 2 },
      { label: "D", text: "現実世界から一時ログアウトするため", score: 3 },
    ],
  },
  {
    id: 11,
    text: "飲み会で一番安心する瞬間は？",
    options: [
      { label: "A", text: "みんなで盛り上がっている時", score: 0 },
      { label: "B", text: "話しやすい人を見つけた時", score: 1 },
      { label: "C", text: "自分が聞き役に回れた時", score: 2 },
      { label: "D", text: "トイレでひとりになった時", score: 3 },
    ],
  },
  {
    id: 12,
    text: "初対面の人に「なんか話しやすいですね」と言われた。あなたは？",
    options: [
      { label: "A", text: "嬉しい。もっと話す", score: 0 },
      { label: "B", text: "ありがとうと素直に受け取る", score: 1 },
      { label: "C", text: "話しやすい人格を演じられていたことに安心する", score: 2 },
      { label: "D", text: "それは本当の私ではない、と心の中でつぶやく", score: 3 },
    ],
  },
  {
    id: 13,
    text: "友達に「絶対楽しいから来なよ」と誘われた時のあなたは？",
    options: [
      { label: "A", text: "その言葉だけで行ける", score: 0 },
      { label: "B", text: "詳細を聞いて決める", score: 1 },
      { label: "C", text: "人数・男女比・帰宅時間を知りたい", score: 2 },
      { label: "D", text: "\"絶対楽しい\"ほど信用できない言葉はない", score: 3 },
    ],
  },
  {
    id: 14,
    text: "人と距離が縮まる瞬間として一番好きなのは？",
    options: [
      { label: "A", text: "みんなで爆笑した時", score: 0 },
      { label: "B", text: "好きなものが同じだった時", score: 1 },
      { label: "C", text: "「実は自分も」と言えた時", score: 2 },
      { label: "D", text: "無言でも気まずくなかった時", score: 3 },
    ],
  },
  {
    id: 15,
    text: "飲み会後、家に着いたあなたが最初にすることは？",
    options: [
      { label: "A", text: "余韻でストーリーを見る", score: 0 },
      { label: "B", text: "今日の写真やLINEを確認する", score: 1 },
      { label: "C", text: "無言でベッドに倒れる", score: 2 },
      { label: "D", text: "脳内で全発言の議事録を再生する", score: 3 },
    ],
  },
];
