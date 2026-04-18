const facts = [
  "Golems originate from Jewish folklore.",
  "They are often made from clay or stone.",
  "Golems are brought to life through magic or sacred words.",
  "They are typically protectors or servants.",
  "Golems appear in many fantasy stories and games."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function summonGolem() {
  alert("🗿 The golem awakens from stone!");
}
