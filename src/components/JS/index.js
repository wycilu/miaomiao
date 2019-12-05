import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function(){

    var defaults = {   //默认值
        title : '',
        content : '',
        cancel : '',
        ok : '',
        handleCancel : null,
        handleOk : null
    };
    var MyComponent = Vue.extend(MessageBox);
    return function(opts){   //配置参数

        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        
        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                title : defaults.title,
                content : defaults.content,
                cancel : defaults.cancel,
                ok : defaults.ok
            },
            methods : {
                handleCancel(){
                    //取消按钮
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    //切换城市按钮
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });

        document.body.appendChild(vm.$el);
    };
})();