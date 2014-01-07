MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if($(this).text() == "Like" || $(this).text() == "讚") {
            $(this).text("朕知道了")
        }
        else if($(this).text() == "Unlike" || $(this).text() == "收回讚") {
            $(this).text("朕也是看報紙才知道")
        }
    });

    jQuery(".uiLinkButtonInput").each(function() {
        if ($(this).attr("value") == "Comment" || $(this).text("value") == "留言") {
            $(this).attr("value", "卿家可知？")
        }
    });

    jQuery(".share_action_link").each(function() {
        if ($(this).text() == "Share" || $(this).text() == "分享") {
            $(this).text("宣旨")
        }
    });

    /***
     * 隨便亂刻，有空再來把它模塊化
     * 一彈指約 10 秒
     * 一柱香約  5 分鐘
     * 一盞茶約 10 分鐘
     * 一刻鐘約 15 分鐘
     * 一個時辰是 2 小時
     ***/
    jQuery("abbr").each(function() {
        timeDiff = jQuery.now()/1000 - $(this).attr("data-utime");
        if (timeDiff < 60) {
            if (timeDiff < 10) {
                $(this).text("約莫一彈指前");
            }
            else if (timeDiff < 20) {
                $(this).text("約莫兩彈指的工夫");
            }
            else if (timeDiff < 30) {
                $(this).text("約莫三彈指前");
            }
            else if (timeDiff < 40) {
                $(this).text("約莫四彈指前");
            }
            else if (timeDiff < 50) {
                $(this).text("約莫五彈指前");
            }
            else {
                $(this).text("還不到六彈指的工夫");
            }
        }
        else if (timeDiff < 900) {
            if (timeDiff < 300) {
                $(this).text("不到一柱香的時間");
            }
            else if (timeDiff < 600) {
                $(this).text("不到兩柱香的時間");
            }
            // following are the same
            else if (Math.random() % 2 > 0) {
                $(this).text("不到三柱香的時間");
            }
            else {
                $(this).text("不到一刻鐘");
            }
        }
        else if (timeDiff < 7200) {
            if (timeDiff < 1200) {
                $(this).text("一刻鐘前");
            }
            else if (timeDiff < 1800) {
                $(this).text("不到兩刻鐘前");
            }
            else if (timeDiff < 2400) {
                $(this).text("兩刻鐘前");
            }
            else if (timeDiff < 3000) {
                $(this).text("三刻鐘前");
            }
            else if (timeDiff < 3500) {
                $(this).text("不到半個時辰前");
            }
            else if (timeDiff < 4000) {
                $(this).text("半個時辰");
            }
            else if (timeDiff < 4800) {
                $(this).text("五刻鐘前");
            }
            else if (timeDiff < 5700) {
                $(this).text("六刻鐘前");
            }
            else if (timeDiff < 6600) {
                $(this).text("七刻鐘前");
            }
            else {
                $(this).text("約莫一個時辰前");
            }
        }
        else if (timeDiff < 10800) {
            $(this).text("一個時辰前");
        }
        else if (timeDiff < 18000) {
            $(this).text("兩個時辰前");
        }
        else if (timeDiff < 25200) {
            $(this).text("三個時辰前");
        }
        else if (timeDiff < 32400) {
            $(this).text("四個時辰前");
        }
        else if (timeDiff < 39600) {
            $(this).text("五個時辰前");
        }
        else if (timeDiff < 46800) {
            $(this).text("半天前");
        }
        else if (timeDiff < 86400) {
            $(this).text("不到一天前");
    });
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
