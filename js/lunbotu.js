$(function(){
//�·�forѭ��
    var size=$(".img li").size()
    for(var i=1; i<=size; i++){
        var li="<li>"+i+"</li>";
        $(".num").append(li)
    }
    /*size ��ȡ��ǰԪ�ظ���*/

//�ֶ������ֲ�
    $(".img li").eq(0).show()
    $(".num li").eq(0).addClass('active-1')
    /*mouseover ���Ըĳɵ���¼� click*/
    $(".num li").mouseover(function(){
        $(this).addClass('active-1').siblings('li').removeClass('active-1')
        var index=$(this).index() /*index ��ǰԪ�ص���˼����ֵ*/
        i=index; //iֵ���Զ��ֲ�ֵ����ͬ��
        $(".img li").eq(index).stop().fadeIn(/*����*/).siblings().stop().fadeOut(/*����*/)	/*eq 0��ʼ*/
    });

//�Զ������ֲ�
    var i=0;
    var t=setInterval(move,1500)	//��ʱ��
//��
    function move(){
        i++;
        if(i==size){i=0;}
        $(".num li").eq(i).addClass('active-1').siblings('li').removeClass('active-1');
        $(".img li").eq(i).fadeIn().siblings().fadeOut();
    };
//��
    function moveL(){
        i--;
        if(i==-1){i=size-1;}
        $(".num li").eq(i).addClass('active-1').siblings('li').removeClass('active-1');
        $(".img li").eq(i).fadeIn().siblings().fadeOut();
    };
//�Զ��ֲ���꾭��������Ƴ�
    $(".out").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(move,1500)
    });

//���Ұ�ť
    $(".out .left").click(function(){
        moveL()
    })
    $(".out .right").click(function(){
        move()
    })
});
