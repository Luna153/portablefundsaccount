(function () {
  var lTrigger = document.querySelectorAll(".l-open");
  // Array.prototype.forEach.call(lTrigger, function (item) {
  //   item.onclick = function(e) {
  //     var target = this.getAttribute("href");
  //     LightBoxTargetShow(target);
  //     e.preventDefault();
  //   };
  // });

  document.addEventListener("click", function (e) {
    if (e.target.closest(".l-open")) {
      var target = e.target.closest(".l-open").getAttribute("href");
      LightBoxTargetShow(target);
      e.preventDefault();
    }
  });

  // LightBox 顯示 //
  function LightBoxTargetShow(target) {
    var lightbox = document.querySelector(target);
    // 開啟遮罩
    document.body.classList.add("scroll-fixed");

    // 關閉 Lightbox
    var close_lightbox = function (e) {
      lightbox.classList.remove("lightbox--active");
      document.body.classList.remove("scroll-fixed");
      return false;
    };

    var lClose = document.querySelectorAll(
      ".lightbox__btn-close, .lightbox__close"
    );
    Array.prototype.forEach.call(lClose, function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        close_lightbox();
        return false;
      });
    });

    // 一次只開一個 Lightbox 其他都關掉
    document.querySelectorAll(".lightbox").forEach(function (ele) {
      ele.classList.remove("lightbox--active");
    });

    // 開啟 Lightbox
    lightbox.classList.add("lightbox--active");
    return false;
  }
})();

// $(document).ready(function () {
//   const tabs = document.querySelectorAll(".lightbox__tab");
//   const panes = document.querySelectorAll(".lightbox__tabPane");

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//       const tabData = tab.getAttribute("data-tab");
//       const pane = document.querySelector(`.lightbox__tabPane[data-tab="${tabData}"]`);
//       tabs.forEach((t) => t.classList.remove("tab-active"));
//       panes.forEach((p) => p.classList.remove("tabPane-active"));
//       tab.classList.add("tab-active");
//       pane.classList.add("tabPane-active");
//     });
//   });
// });
