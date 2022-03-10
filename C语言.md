# C语言

## 循环结构

在C语言程序中，我们主要有三个循环结构：

- while循环
- do......while循环
- for 循环

我们来一一看一下：

**1、while循环**



```text
while（表达式）
{
    语句；
    ………
}
语句；
```



（1） 首先判断while后边括号内的**表达式**是否为真，若为真即执行大括号内的语句，若为假，则跳过[while循环结构](https://www.zhihu.com/search?q=while循环结构&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"29785126"})执行大括号下方的第一条语句。

（2） 若为真，当执行完大括号内语句后，再次按照（1）去判断，执行。

（3） 直到while后小括号内表达式的表达式为假，结束循环。



**注意**：若在while的大括号内执行了
[break语句](https://www.zhihu.com/search?q=break语句&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"29785126"})，则立刻结束循环结构，开始执行大括号外下方的第一条语句。



例子1：

```text
#include <stdio.h>
int main()
{
    int a = 5, b = 10;
    while(b > a)       //即若b > a 为真就执行大括号内的语句，
    {                  //若为假则执行大括号下方语句
        printf("while looping a = %d, b = %d\n", a, b);
        a++;
    }
    printf("while loop over\n");

    return 0;
}
```

运行结果：



![img](https://pic2.zhimg.com/v2-e74698ee2f6af828ac571147eac3d3d1_b.jpg)

即当，a的值等于10时，b>a 不成立，循环结束。



例子2：

```text
#include <stdio.h>
int main()
{
    int a = 5, b = 10;
    while(b > a)            //即若b > a 为真就执行大括号内的语句，
    {                       //若为假则执行大括号下方语句
        printf("while looping a = %d, b = %d\n", a, b);
        if(a == 8)
        break;              //如果a等于8跳出while循环
        a++;
    }
    printf("while loop over\n");
    return 0;
}
```

运行结果如下：

![img](https://pic1.zhimg.com/v2-05d1ef5fce5ec773a341ead788c3d00c_b.jpg)



将例子1和例子2分别执行一下，查看打印输出信息的不同，体会一下while循环的使用，以及 break 的用法。



**2、** **do......while循环**

我们先看两个例子：

例子1：（**do......while循环**）

```text
#include  <stdio.h>
int main()
{
    int a = 10, b = 10;
    do
    {
        printf("while looping a = %d, b = %d\n", a, b);
    }while(b > a);

    printf("while loop over\n");
    return 0;
}
```

运行结果：

![img](https://pic1.zhimg.com/v2-7072f571cf55386ada4e0d72b1f730cc_b.jpg)



例子2：（**while循环**）

```text
#include <stdio.h>
int main()
{
    int a = 10, b = 10;
    while(b > a)
    {
        printf("while looping a = %d, b = %d\n", a, b);
    }
    printf("while loop over\n");
    return 0;
}
```

运行结果：

![img](https://pic3.zhimg.com/v2-f0d80c842d1ac6e5c330967fc570bf9e_b.jpg)

以上两个例子，while的表达式和 [while循环体](https://www.zhihu.com/search?q=while循环体&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"29785126"})内的语句是一模一样的，执行后会产生不一样的结果，你会看到do......while.....
的结构 会执行一次循环体内的打印输出语句，而while循环则，因b>a为假而没有执行。

**即：do......while..... 结构
先执行一次循环体内的语句然后再判断while后括号内的表达式的真假，除此之外跟上边的 while结构是一样的。**



**3、** **for 循环**

for 循环是一种更为灵活的循环控制结构，完全可以替代上边的while循环，我们来详细看看。

for循环结构：

```text
for（循环变量赋初值；循环条件判断；循环变量值变化）
{
    语句1；
    语句2；
    语句3；
    …………;
} 
```

执行流程：

![img](https://pic1.zhimg.com/v2-271c65d02bcffb7a10b835e797f55698_b.jpg)





我们来举个例子：

```text
#include  <stdio.h>
int main()
{
    int i;
    for(i = 0; i < 3; i++)
    {
        printf("print the value of i =%d\n", i);
    }
    return 0;
}
```

运行结果：

![img](https://pic2.zhimg.com/v2-c315492d817596a332c7956fc93e15dd_b.jpg)

**我们可以看到：**



**循环变量赋初值：** **将 i 的初始值变成 0**

**循环条件判断：** **判断 i 是否小于3，若小于3则为真，其它为假**

**循环变量值变化： i 的值自动加1**



将上述例子粘贴到编辑器中，然后编译执行一下，看看打印的结果。可以更改i的[初始值](https://www.zhihu.com/search?q=初始值&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"29785126"})和 判断条件来体会for循环的灵活性。



另外：

除了**[break 语句](https://www.zhihu.com/search?q=break+语句&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"29785126"})**可以结束循环体外，这里再介绍一个**[continue语句](https://www.zhihu.com/search?q=continue语句&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"29785126"})**，这个语句跟break语句一样，也可以结束循环体，但不同的是，它只是结束本次循环，循环体会跳过continue一下的语句，直接去再次判断循环条件，进行下一次的循环操作。

**举个例子：**

```text
#include <stdio.h>
int main()
{
    int i;
    for(i = 0; i < 3; i++)
    {
        //即当i等于1的时候，执行 continue语句，结束本次循环
        //即当i等于1的时候不会打印信息，直接执行下一个循环
        if(i == 1) 
        { 
            continue;
        }
        printf(" print the value of i = %d\n", i);
    }
    return 0;
}
```

运行结果如下：

![img](https://pic2.zhimg.com/v2-257379c1afd607bcbe32277a14101271_b.jpg)

通过以上例子，我们可以看到，运用 break 和 continue 语句，我们可以更加灵活的使用循环语句来控制程序的流程。

![image-20220304083751243](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304083751243.png)

![image-20220304083954872](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304083954872.png)

![image-20220304084343089](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304084343089.png)

![image-20220304084750777](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304084750777.png)

![image-20220304085641024](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304085641024.png)

## 函数

![image-20220304090307742](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304090307742.png)

![image-20220304092744598](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304092744598.png)

![image-20220304103701964](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304103701964.png)

![image-20220304103856459](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304103856459.png)

![image-20220304104151538](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304104151538.png)

## 指针

![image-20220304104600463](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304104600463.png)

![image-20220304105117351](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304105117351.png)

![image-20220304105332199](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304105332199.png)

## 三名主义

![image-20220304105738803](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220304105738803.png)

## 数组

![image-20220305112328101](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220305112328101.png)

![image-20220306151225138](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220306151225138.png)

![image-20220306151615755](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220306151615755.png)

![image-20220306152308939](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220306152308939.png)

![image-20220306152323154](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220306152323154.png)

![image-20220306152340001](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220306152340001.png)

![image-20220306153046080](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220306153046080.png)

