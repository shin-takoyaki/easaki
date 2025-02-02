import { useState, useEffect } from "react";

export function useScrollToTop(threshold = 300) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 現在のスクロール位置が閾値を超えているかどうかをチェック
      const shouldBeVisible = window.scrollY > threshold;
      setIsVisible(shouldBeVisible);
    };

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // 初期チェック
    handleScroll();

    // クリーンアップ関数
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    isVisible,
    scrollToTop,
  };
}
