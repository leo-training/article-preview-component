const getComponentBtn = document.querySelectorAll(
  ".component-info-social-button button"
);

const toggleCollapsedClass = function (e) {
  const findClosestComponentInfo = this.closest("#component-info");
  findClosestComponentInfo.classList.toggle("collapsed");
};

getComponentBtn.forEach(function (btn) {
  btn.addEventListener("click", toggleCollapsedClass);
});
