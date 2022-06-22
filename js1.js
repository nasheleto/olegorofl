function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Ты согласен выйти за меня замуж?",
  () => alert("МЫ ПОЖЕНИМСЯ!!!♥"),
  () => alert("Я тебя сейчас захуярю, всмысле нет?!")
);