function winScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export function iosKeyMsg() {
  const u = navigator.userAgent;
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  let myFunction;
  // let flag;

  if (isIOS) {
    // 软键盘弹起
    document.body.addEventListener('focusin', () => {
      // flag = true;
      clearTimeout(myFunction);
    });

    // 软键盘关闭
    document.body.addEventListener('focusout', () => {
      // flag = false;
      // if (!flag) {
      myFunction = setTimeout(() => {
        winScroll();
      }, 200);
      // }
    });

  }
}
