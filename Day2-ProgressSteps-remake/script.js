// 获取步骤条和按钮的DOM元素
const steps = document.querySelectorAll(".step");
const line = document.querySelector(".line");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// 当前激活的步骤
let activeStep = 0;

prev.addEventListener("click", (e) => prevStep(e));
next.addEventListener("click", (e) => nextStep(e));

function prevStep(e) {
  activeStep--;

  if (activeStep < 0) {
    activeStep = 0;
  }
  updateStep();
}

function nextStep(e) {
  activeStep++;

  if (activeStep > steps.length - 1) {
    activeStep = steps.length - 1;
  }
  updateStep();
}

// 更新步骤
function updateStep() {
  if (activeStep == 0) {
    prev.disabled = true;
  } else if (activeStep == steps.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  line.style.width = `${(activeStep / (steps.length - 1)) * 100}%`;
  steps.forEach((step, index) => {
    // 如果当前索引在激活的范围内，则添加样式，否则移除样式
    if (index <= activeStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}
