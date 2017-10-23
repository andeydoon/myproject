$.backTop = function (node) {
    $("body").append("<div id=\"backtop\">顶部</div>");
    var node = $('#backtop');
    var b = node.click(function (event) {
        event.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 300);
    }),
    c = null;

    $(window).bind("scroll", function () {
        var d = $(window).scrollTop(),
        e = 50;
        d > e ? b.css("display", "block") : b.css("display", "none");
        //console.log(d)
    });
}

//展开地图
$.showMap = function () {
    var node = $("#menu");
    var mapObj = $("#wapMap");
    var mapH = mapObj.height();
    var spanObj = node.find("span");
    var main = $(".main");
    node.on("click", function () {
        var _this = $(this);
        var nodeH = _this.height();
        if (nodeH == 17) {
            _this.css("height", 16);
            spanObj.eq(0).css("transform", "rotate(45deg) translate(5px, 5px)");
            spanObj.eq(1).css("opacity", 0);
            spanObj.eq(2).css("transform", "rotate(-45deg) translate(5px, -5px)");
            mapObj.css("left", 0);
            main.css("height", mapH + 36);
        }
        else {
            _this.css("height", 17);
            spanObj.eq(0).css("transform", "rotate(0) translate(0, 0)");
            spanObj.eq(1).css("opacity", 1);
            spanObj.eq(2).css("transform", "rotate(0) translate(0, 0)");
            mapObj.css("left", "100%");
            main.css("height", "auto");
        }
    });
}

//展开nav
$.showNav = function () {
    var node = $("#showNav");
    var nav = $("#nav");
    var showInfo = nav.find(".navlist");
    var ulLen = showInfo.find("ul").length;
    var nodeClass = false;
    node.on("click", function () {
        var _this = $(this);
        _this.toggleClass("current");
        nodeClass = $(this).hasClass("current");
        //console.log(nodeClass);
        if (nodeClass) {
            showInfo.css("height", 24 * ulLen);
        }
        else {
            showInfo.css("height", 24);
        }
        //showInfo.css();
    });
}

//产品详情-查看其它信息
$.showMoreInfo = function () {
    var node = $("#showMoreInfo");
    var moreInfo = $("#moreInfo");
    node.on("click", function () {
        var _this = $(this);
        _this.toggleClass("show");
        moreInfo.toggle();
    });
}
//产品详情-品牌介绍
$.showIntro = function () {
    var node = $("#intro");
    var showIntro = $("#showIntro");
    var nodeClass = false;
    node.on("click", function () {
        var _this = $(this);
        _this.toggleClass("show");
        nodeClass = $(this).hasClass("show");
        //console.log(nodeClass);
        if (nodeClass) {
            showIntro.css("height", "auto");
            _this.html("收起 <i class='arr'></i>")
        }
        else {
            showIntro.css("height", "3rem");
            _this.html("展开更多 <i class='arr'></i>")
        }

    });

}

//filter
$.filter = function () {
    var node = $("#sorts li");
    var filterObj = $("#filter");
    var filterUl = filterObj.find("ul");
    var filterItem = filterObj.find("li");
    var masklayer = $(".masklayer");
    var remember = undefined; //记录点击索引
    node.on("click", function (event) {
        var _this = $(this);
        var ind = _this.index();
        var Top = $("#sorts").offset().top+35;
        event.stopPropagation();
        //_this.addClass("current").siblings().removeClass("current");
        _this.toggleClass("current").siblings().removeClass("current");
        if (ind == remember) {
            filterObj.css("top",Top).toggle();
            masklayer.toggle();
            //console.log("true:" + remember)
        }
        else {
            remember = ind;
            filterObj.show();
            masklayer.show();
            //console.log("false:" + remember)
        }
        filterUl.eq(ind).show().siblings().hide();
    });
    filterItem.on("click", function (event) {
        var _this = $(this);
        event.stopPropagation();
        _this.addClass("current").siblings().removeClass("current");
        node.removeClass("current");
        masklayer.hide();
        filterObj.hide();
    });
    $("html,body").on("click", function () {
        node.removeClass("current");
        masklayer.hide();
        filterObj.hide();
    });
}

//phone
$.fn.phone = function () {
    var node = $(this);
    var popPhone = $("<div class=\"pop-phone\"></div>");
    var popCancel = $("<div class=\"pop-cancel\">取消</div>");
    var masklayer = $("<div class=\"masklayer\"></div>");

    $("body").append(popPhone);
    $("body").append(popCancel);
    $("body").append(masklayer);

    node.on("click", function () {
        var _this = $(this);
        var tel = _this.attr("tel-data");
        popPhone.html('<a href="tel:' + tel + '">' + tel + '</a>');
        //popPhone.html('<a href="wtai://wp/mc;' + tel + '">' + tel + '</a>');
        //popPhone.text(tel);
        masklayer.show();
        popPhone.show();
        popCancel.show();
    });

    popCancel.on("click", function () {
        masklayer.hide();
        popCancel.hide();
        popPhone.hide();
    });

}

$.arcDetailHeihgt = function () {
    var node = $("#arcDetail");
    var arcHeight = node.height();
    var showMore = $("#showArc");
    var baseHeight = 910;
    //console.log(arcHeight);
    if (arcHeight > baseHeight) {
        node.css("height", baseHeight);
        showMore.show();
        //showMore.show().html("展开全部 <i class=\"arr\"></i>");
    }
    showMore.on("click", function () {
        var _this = $(this);
        var nodeClass = false;
        _this.toggleClass("show");
        nodeClass = $(this).hasClass("show");
        //console.log(nodeClass);
        if (nodeClass) {
            node.css("height", "auto");
            _this.html("收起 <i class='arr'></i>")
        }
        else {
            node.css("height", baseHeight);
            _this.html("展开更多 <i class='arr'></i>")
        }
    });
}