        target = document.getElementById("TextBackground");
        var height = target.offsetHeight;

        // スクロールイベントを定義
        target.onscroll = function() {
            // 要素のスクロール分を含めた高さを取得
            var scrollHeight = target.scrollHeight;

            // 要素のスクロール位置を取得
            var scrollTop = target.scrollTop;

            // 現在の表示位置の高さ 
            var scrollPosition = height + scrollTop;

            // どれだけ近づいたかを判断する値
            // 0に近いほど、スクロールの最終が近い
            var proximity = 10;

            if ((scrollHeight - scrollPosition) / scrollHeight <= proximity) {
                alert('Scroll finish!!');
            }
        }