document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('button[id="next"]').addEventListener("click", () => {
    const pageContentActive = document.querySelector("[data-page].active");
    const pageContentNext = pageContentActive.nextElementSibling;

    pageContentActive.classList.remove("active");
    pageContentActive.classList.add("hide");

    pageContentNext.classList.remove("hide");
    pageContentNext.classList.add("active");
  });

  document.querySelector('button[id="back"]').addEventListener("click", () => {
    const pageContentActive = document.querySelector("[data-page].active");
    const pageContentBack = pageContentActive.previousElementSibling;

    pageContentActive.classList.remove("active");
    pageContentActive.classList.add("hide");

    pageContentBack.classList.remove("hide");
    pageContentBack.classList.add("active");
  });
});
