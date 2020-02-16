;
(function ($) {

  var Tab = function (tab) {
    var _this_ = this;
    //保存单个tab组件
    this.tab = tab;
    //默认配置参数
    this.config = {
      //用来定义鼠标的触发类型
      "triggerType": "click",
      //用来定义内容切换效果，是直接切换还是淡入淡出效果
      "effect": "fade",
      //默认显示第几个tab
      "invoke": 1,
      //用来定义tab是否自动切换，当指定了时间间隔就表示自动切换
      "auto": false
    };
    //如果配置参数存在，就扩展掉默认的配置参数
    if (this.getConfig()) {
      $.extend(this.config, this.getConfig());
    };
    console.log(this.config);
  };

  Tab.prototype = {
    //获取配置参数
    getConfig: function () {
      //拿一下tab elem节点上的data-config
      var config = this.tab.attr("data-config");

      //确保有配置参数
      if (config && config != "") {
        return $.parseJSON(config);
      } else {
        return null;
      };
    }
  };

  window.Tab = Tab;
})(jQuery);