var event = (function(){
    var handles = []
    // 监听
    var on = function(eventType,fn){
        if(!handles[eventType]){
            handles[eventType] = []
        }
        handles[eventType].push(fn)
    }
    // 触发
    var emit = function(){
        var key = Array.prototype.shift.apply(arguments)
        var fns = handles[key]
        for(var i=0;i<fns.length;i++){
            fns[i].apply(this,arguments)
        }
    }
    // 取消
    var off = function(eventType,fn){
        var fns = handles[eventTpye]
        if(fns.length==0){
            return false
        }
        if(!fn){
            // 如果没有fn，那么取消所有的eventType的 订阅
            handles[eventType] = []
        }else{
            for(var i=0;i<handles[eventType].length;i++){
                if(fn==handles[eventType][i]){
                    handles[eventType].splice(i,1)//删除订阅者
                }
            }
        }
    }
    return {on,emit,off}
})()
event.on('web前端',function(time){
    console.log('小明')
    console.log('上课时间是：' + time)
})
event.on('java后端',function(time){
    console.log('小张')
    console.log('java的上课时间是' +  time)
})
event.emit('web前端','2016/04/03')
event.emit('java后端','2016/04/05')
