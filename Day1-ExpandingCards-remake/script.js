const cards = document.querySelectorAll(".card");

cards.forEach((card) =>
  card.addEventListener("click", () => expandsCard(card))
);

// 处理卡片展开,被点击的元素若没有展开样式则添加，其他样式保持默认
function expandsCard(card) {
  removeActive();
  card.classList.add("active");
}

// 移除所有未被点击的元素激活样式
function removeActive() {
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      card.classList.remove("active");
    }
  });
}
