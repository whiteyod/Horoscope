const intro = [
    "Сегодня Вас ждет необычный день. ", "День пройдет как обычно. ", "Ваши действия с самого утра, могут повлиять на весь день. ", "День может выдаться нелегким. ", "Удача будет сопутствовать Вам на протяжении всего дня. "
]

const firstSentence = [
    "Ожидайте ", "Остерегайтесь ", "Обратите внимание на ", "Пригласите на чай ", "Накормите обедом "
];

const secondSentence = [
    "лошадей ", "собак ", "петухов ", "шакалов ", "агентов "
];

const thirdSentence = [
    "которые выходят из портала.", "с под Вашей кровати.", "неожиданно пришедших к Вам из подвала.", "которых вызвал экстрасенс.", "обреченных на вечние муки."
];

function tellFortunes() {
  let item = intro[Math.floor(Math.random()*intro.length)]
   + firstSentence[Math.floor(Math.random()*firstSentence.length)]
   + secondSentence[Math.floor(Math.random()*secondSentence.length)]
   + thirdSentence[Math.floor(Math.random()*thirdSentence.length)];
  document.getElementById("answer").innerHTML = item;
};

document.getElementById("horoscope").onclick = tellFortunes;
