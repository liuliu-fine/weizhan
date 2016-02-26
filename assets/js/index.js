$(function () {
    var preScroll = -1;
    $('#more').on('click', function () {
        $(this).text().length != 4 ? $(this).text("收起 ▲") : $(this).text("更多优惠 ▼");
        $('#activity .am-g').each(function (index) {
            if (index > 1) {
                $(this).next().slideToggle("slow");
                $(this).slideToggle("slow");
            }
        });
    });
    $(window).scroll(function () {
        var yScroll = self.pageYOffset;
        if (yScroll == 0) {
            $('#footer').addClass('am-hide');
        }
        if (yScroll>preScroll) {
            $('#footer').addClass('am-hide');
        }
        else {
            $('#footer').removeClass('am-hide');
        }
        preScroll = yScroll;
    });
});
//navigator.geolocation.getCurrentPosition( // 该函数有如下三个参数
//    function (pos) { // 如果成果则执行该<a href="https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBnWczuADkrHbsnH79PHDY0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPW6sPjbLnH0kPWnsnj61PjRz" target="_blank" class="baidu-highlight">回调函数</a>
//        alert(
//            '  纬度：' + pos.coords.latitude +
//            '  经度：' + pos.coords.longitude +
//            '  高度：' + pos.coords.altitude +
//            '  精确度(经纬)：' + pos.coords.accuracy +
//            '  精确度(高度)：' + pos.coords.altitudeAccuracy +
//            '  速度：' + pos.coords.speed
//        );
//    }, function (err) { // 如果失败则执行该<a href="https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBnWczuADkrHbsnH79PHDY0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPW6sPjbLnH0kPWnsnj61PjRz" target="_blank" class="baidu-highlight">回调函数</a>
//        alert(err.message);
//    }, { // 附带参数
//        enableHighAccuracy: false, // 提高精度(耗费资源)
//        timeout: 3000, // 超过timeout则调用失败的<a href="https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBnWczuADkrHbsnH79PHDY0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPW6sPjbLnH0kPWnsnj61PjRz" target="_blank" class="baidu-highlight">回调函数</a>
//        maximumAge: 1000 // 获取到的<a href="https://www.baidu.com/s?wd=%E5%9C%B0%E7%90%86%E4%BF%A1%E6%81%AF&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBnWczuADkrHbsnH79PHDY0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPW6sPjbLnH0kPWnsnj61PjRz" target="_blank" class="baidu-highlight">地理信息</a>的有效期，超过有效期则重新获取一次位置信息
//    });
