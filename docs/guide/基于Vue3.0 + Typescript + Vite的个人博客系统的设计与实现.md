# 基于Vue3.0 + Typescript + Vite的个人博客系统的设计与实现

## 摘要

## 1 绪论

### 1.1 研究背景（**意义要强调的是时效性和重要性**）

日新月异的今天，信息获取的方式已经不仅仅局限于书本、电视，随着技术的进步，人们更多的是通过能进行交互的电脑、手机来主动交流信息，因为Web2.0时代的到来，大众文化不再由精英掌握和传播，而是由大众共同创造，传播和分享。我们每个人都可以参与到每一种文化现象或者文化事件的创造，这也极大的满足了我们的精神需求。近些年来，诸如像QQ、微信、微博等社交媒体平台的出现，使用个人博客的人越来越少了。随着数码设备的普及和带宽的加强，音视频的制作门槛变得非常低，观看也越来越方便。在这个快节奏的互联网世界里，网友倾向于在移动端随时随地摄取新鲜信息。而动辄上千字的博客，内容更新的周期从几天到数星期不等，相比之下就显得笨重而滞后了。网友渴望及时互动和对关注的反馈，社交媒体刚好填补了这一需求。显然人们更倾向于社交媒体平台。虽然如此，但个人博客依然还是一部分人的选择。如今的自媒体平台对网页的样式、功能和文章的内容、编辑以及发布都有限制，相比之下，个人博客完全可以自定义，没有限制。自媒体平台的数据容易丢失，如果自媒体平台突然关闭或变动，自己的数据也很可能会丢失。而个人博客因为是独立的服务器，数据都掌握在自己手中。个人博客相对于平台来说，更能作为我们的个人名片。我们可以在上面展示更多的自定义内容，对于程序员来所，这也能成为面试的加分项。

目前，Web技术的不断发展，人们越来越讲究效率，所以前后端分离的开发模式已经成为最主要的开发模式。在一开始，网站的数据规模不大的时候，前端负责页面，后端负责数据，前端写几个页面，准确的说是几个模板，交给后端，后端负责填充页面；比较典型的就是jsp；这搞得前端得懂后端，后端也得懂页面；更重要的一点是，如果工程大了，大家都没法单独测试，必须要等整个工程前后端都结束了才能测试，于是大家就都觉得开发效率跟不上啊；那就前后端分离吧，

那么怎么分离呢?

既然后端是提供数据的，那就专职提供数据吧，后端只提供json这样的数据，前端通过ajax到后端去请求数据，然后js填充页面；大家一看，哎呀，这不错，这样就分离了，大家各干各的，后端想知道接口对不对，curl一下就知道了，前端想知道页面对不对，mock一下；只要前后端约定好数据的格式，各干各的，效率上去了，而且各司其职，多好；这时候，页面是js生成或者填充的，主要逻辑都在js里面，页面可能就一个，这有个极大的好处，就是只需要加载一次页面和js脚本，页面就展现出来了，而且后面点击页面的时候，页面不会像以前一样，浏览器在那不停地转圈，给用户的体验也更好，这就是SPA，单页面应用；

由于近些年Web技术的发展，博客技术已经相对成熟，已经有许多大型网站提供一站式的博客服务，比如WordPress，你可以在不需要太多专业知识的基础上使用其提供的模板搭建一个博客系统。这些大型系统功能是比较完善的，而且稳定性也比较高。但是这样的博客系统比较笨重，在如今个性化的时代，这样的一站式博客服务并不能很好的满足个性化需求，不太能符合所有人的要求。所以更多的人希望能拥有一个页面设计个性化，能表达自己的个人博客，并且还具有轻量化、便捷、简单以及上手难度低等特点。

而本博客系统采用了当前最新的Vue3





注重设计、效果

### 1.2 研究目的和意义

元宇宙设想了一个由虚拟世界和3D技术广泛应用重塑的未来。[Three.js](https://link.juejin.cn?target=https%3A%2F%2Fthreejs.org%2F) 是一个非常令人印象深刻的 JavaScript 3D 库，它也使用 WebGL（或 2d Canvas）进行渲染。随着 WebGL API 标准的改进，以及对 WebXR 的支持，[Three.js](https://link.juejin.cn?target=https%3A%2F%2Fthreejs.org%2F)  成为了一个可以用来营造沉浸式体验的主流工具。与此同时，浏览器对 3D 渲染和 WebXR 设备 API 的支持也得到提升，使得 web 成为一个越来越有吸引力的 3D 内容平台。



### 1.3 国内外研究概况

### 1.4 主要研究内容



## 2 关键技术分析

### 2.1 vue3.0

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://v3.cn.vuejs.org/guide/single-file-component.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#components--libraries)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。（https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88）

组件化

最初的目的是代码重用，功能相对单一或者独立。在整个系统的代码层次上位于最底层，被其他代码所依赖，所以说组件化是纵向分层。多个组件可以组合成组件库，方便调用和复用，组件间也可以嵌套，小组件组合成大组件。

vue.js的一个很重要的功能就是组件化，组件可以扩展 HTML 元素，封装可重用的代码。Vue.js通过组件，把一个单页应用中的各种模块拆分到一个一个单独的组件（component）中，我们只要先在父级应用中写好各种组件标签（占坑），并且在组件标签中写好要传入组件的参数（就像给函数传入参数一样，这个参数叫做组件的属性），然后再分别写好各种组件的实现（填坑），然后整个应用就算做完了。

组件化开发的优点：提高开发效率、方便重复使用、简化调试步骤、提升整个项目的可维护性、便于协同开发。

模块化

在软件工程的定义中，模块是由边界元素限定的相邻程序元素（例如，数据说明，可执行的语句）的序列。按照模块的定义，过程、函数、子程序和宏等都可以视作模块；面向对象中的对象是模块；对象中的方法也是模块。**模块是构成程序的基本构件**。模块化是对功能的拆分，**模块化并没有要求一定组件化**，就是说进行模块化拆分时你可以完全不考虑代码重用，只是把同一业务的代码做内聚整合成不同的模块。

在2020-9-19日，vue更新了3.0的正式版，在2022-2-7日起正式宣布vue3.0作为默认版本，vue3.0不仅全面支持TypeScript语法，还对生命周期钩子进行了优化和剔除，加上工具setup的语法糖，vue单页面多个根元素的扩展，代码精简不说，还很有条理，vue3.0的出现再次提升了开发者的编码体验和幸福感。另外vue3整合typescript语言是前端未来发展的必然趋势，

###  2.2 typescript

ypeScript 由微软开发的自由和开源的编程语言。TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。

### 1、优点

- `代码的可读性和可维护性`：举个例子看后端某个`接口返回值`，一般需要去network看or去看接口文档，才知道返回数据结构，而正确用了ts后，编辑器会`提醒`接口返回值的类型，这点相当实用。
- 在`编译阶段`就发现大部分错误，避免了很多`线上bug`
- 增强了编辑器和 IDE 的功能，包括`代码补全`、`接口提示`、`跳转到定义`、`重构`等

### 2、缺点

- 有一定的`学习成本`，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
- 会增加一些`开发成本`，当然这是前期的，后期维护更简单了
- 一些JavaScript库需要`兼容`，提供声明文件，像vue2，底层对ts的兼容就不是很好。
- ts编译是需要`时间`的，这就意味着项目大了以后，开发环境启动和生产环境打包的速度就成了考验



2.1 TypeScript JavaScript 在执行时才会确定变量的类型，这一特点使用起来很便捷，然而随着 应用复杂度提升，愈加难以管理。JavaScript 诞生之初并没有考虑的很复杂，天生自 带的一些设计缺陷如变量提升、数组和对象难以区分、基本类型的包装对象易混淆 导等等不严格的语法规则，往往让初学者迷惑。项目运行时出一旦出现 bug，也难以 快速排除，这时就需要掌握 TypeScript 的使用了。 Microsoft 主导研发和开源了 TypeScript，并在前端这一领域取得热烈反响。 TypeScript 在支持 JavaScript 语法的前提下，扩伸了语法规则。这一特性降低了 TypeScript 的学习成本，熟练掌握 JavaScript 的前端工程师借助文档就可以快速上手 TypeScript。与 JavaScript 不同，TypeScript 拥有严格的语法规则，这有利于在代码编 写阶段纠正 Bug。JavaScript 缺乏面向对象语言的所有特点，在很多时候使用起来并 不方便。TypeScript 实现了面向对象语言的所有特性[36]。 TypeScript 诸多优良特点，吸引了来自前端开发者的关注，纷纷采用 TypeScript 开发项目。如三大主流前端框架之一——AngularJS 是由 TypeScript 构建的。常用的 文本编辑器——如 VS Code 增加了便于 TypeScript 编写的插件。 JavaScript 可以在浏览器中执行，TypeScript 需要进一步编译成 JavaScript 才能运 行。使用 Node.js 可以简便快捷的搭建 TypeScript 编译环境。开发者只需使用强大的 npm 包管理工具下载和全局安装 TypeScript 后，命令行运行 tsc 命令即可完成 TypeScript 的编译。在 html 文档中插入编译成功后的 TypeScript 即可看到运行效果。 综上所述，选择使用 TypeScript 构建 K12 教育在线备课系统有如下几点好处[37]： （1）静态类型检查。Typescript 中的变量声明，变量类型是必不可少的。如声 6 华 中 科 技 大 学 硕 士 学 位 论 文 明某一变量为数字类型，在赋予此变量值时，IDE 会执行变量检查，如类型不合法， 则编辑器做出错误提示。这一特点降低了开发者在开发初期犯错的几率。 （2）IDE 智能提示。增强了编辑器和 IDE 的功能，包括代码补全、接口提示、 跳转到定义等等，降低了手动引用代码的工作量，提升了开发效率。 （3）便于代码重构。有时候，开发者需要重新对变量、方法或者文件的名字， 进行重命名，当做出这样的操作的时候，IDE 会自动在工程文件中引用这个变量、 文件或者调用这个方法的地方进行修改，这就是代码重构。这个特性减少了开发者 的工作量，提升了开发效率和代码质量。 （4）学习成本低。TypeScript 拥抱了 ECMAScript6 规范，易学易理，易于上手。

### 2.3  vite

Vite是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：

- 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
- 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

Vite 意在提供开箱即用的配置，同时它的 [插件 API](https://cn.vitejs.dev/guide/api-plugin.html) 和 [JavaScript API](https://cn.vitejs.dev/guide/api-javascript.html) 带来了高度的可扩展性，并有完整的类型支持。

### 2.4 MVVM设计模式

可以看到MVVM分别指View，Model，View-Model，View通过View-Model的DOM Listeners将事件绑定到Model上，而Model则通过Data Bindings来管理View中的数据，View-Model从中起到一个连接桥的作用

View是视图，就是DOM；对应视图也就是HTML部分--代表[UI组件](https://www.zhihu.com/search?q=UI组件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"138114429"})，它负责将数据模型转化成UI展现出来。 Model是模型，就是[vue组件](https://www.zhihu.com/search?q=vue组件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"138114429"})里的data，或者说是vuex里的数据；--代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。 ViewModel--监听模型数据也就是data的的改变和控制视图行为、处理用户交互，简单理解就是一个同步View和Model的对象，连接Model和View。

##  MVVM的实现原理：

MVVM的实现主要是三个核心点：

1. **响应式：vue如何监听data的属性变化**
2. **模板解析：vue的模板是如何被解析的**
3. **渲染：vue模板是如何被渲染成HTML的**

![MVVM模式](D:\Desktop\MVVM模式.PNG)

在MVVM架构下，`View`和`Model`之间并没有直接的联系，而是通过`ViewMode`进行交互，Model和ViewModel之间的交互是双向的，因此View数据的变化会同步到Model中，而Model数据的变化也会立即反应到View上。

`ViewModel`通过**双向数据绑定**把View层和Model层连接了起来，而View和Model之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由MVVM来统一管理。

Vue 的响应式原理是核心是通过 ES5 的保护对象的 `Object.defindeProperty`中的访问器属性中的 `get`和 `set`方法，data 中声明的属性都被添加了访问器属性，当读取 data 中的数据时自动调用 get 方法，当修改 data 中的数据时，自动调用 set 方法，检测到数据的变化，会通知观察者 Wacher，观察者 Wacher自动触发重新render 当前组件（子组件不会重新渲染）,生成新的虚拟 DOM 树，Vue 框架会遍历并对比新虚拟 DOM 树和旧虚拟 DOM 树中每个节点的差别，并记录下来，最后，加载操作，将所有记录的不同点，局部修改到真实 DOM 树上。



## 3 个人博客系统的分析与设计

### 3.1 可行性分析

经济可行性：随着技术的不断发展和用户对网站功能性的需求不断提高，如今网站项目的设计已经不能再仅仅简单地利用静态Html文件来实现，与前几年网站设计由一两名网页设计师自由的创作相比，网站项目的设计和开发越来越像一个软件工程，也越来越复杂，网站项目的设计和开发进入了需要强调流程和分工的时代，建立规范的、有效的、健壮的开发机制，才能适应用户不断变化的需要，达到预期的计划目标。静态博客相较于动态博客来说比较节约资源，不需要运维服务器等

技术可行性：3.0 会原生支持基于 class 的组件写法，可以预见将来会有越来越多的 Vue 项目使用 TypeScript。文章也提到，由于 Vue 3.0 是完全重写，所以本身也抛弃了 flow，直接使用了 TypeScript。React / Vue 与 jQuery 的区别，就好比苹果与小米的智能机与诺基亚的功能机那样，是理念上的颠覆。而就像小米大大拉低了靠谱智能机的门槛那样，**Vue 也大大降低了这一套技术栈的门槛**。

Vue 的很多设计借鉴了 React / Angular 等框架，**但在体积、性能与易用性等多个技术指标上做出了很好的权衡**。而小米也是在借鉴了友商大量特性的基础上做出了性价比很高的产品。同时，它们都有很多自己独特的创新点。

二者的用户基本盘都在国内，但在国外也有很多粉丝*（此处实际数据与印象有出入，Vue 在国内外流行度是五五开的）*。vue2 在臃肿的路上越走越远，各种高度定制的语法糖和高度耦合的生态，使得 vue2 其实已经无法进步了，vue3主要的架构改进、优化和新功能都已经完成，目前的代码 98% 以上使用 TypeScript 编写。

操作可行性：

### 3.2系统需求分析

#### 3.2.1系统目标

博客的兴起激起了许多人写作、记录生活的兴趣，但经过时间和资本的变迁，当年的许多博客网站关停，导致个人数据消失。本个人博客的目标就是运用前沿的web技术实现一个低成本、容易进行后期的功能添加和维护、数据私人化、并且界面视觉美观，能交朋友的个人博客系统。该系统会运用web技术展示个性的视觉效果，不只是局限于文字、图片。通过个人博客用户可以发表文章、视频vlog来表达自己，记录自己的生活，记录自己的成长。同时也可以让访客通过链接添加好友。

#### 3.2.2 功能性需求分析

根据互联网上博客系统的网站和功能和本人的需求，确定了本博客系统的主要包括以下功能：

1、博客的页面展示，运用webgl技术借助系统显卡来在浏览器里更流畅地展示3D场景和模型，能打造更加炫酷的视觉效果。

2、博客的分类搜索，用户可以根据关键词来检索相关内容，也可以通过文章内容分类来选择阅读

3、博客文章的首页列表展示功能，显示文章标题及摘要、写作时间、背景图片。

4、博客文章的详情页面，显示文章的内容、发布的日期。

5、个人相册及volg视频的展示，图片运用瀑布流式布局，兼容移动端设备

6、个人信息和链接交友，通过链接跳转可以访问主流的即时通讯软件，然后添加好友。

7、博客文章的分类和按功能的分档功能。

#### 3.2.3系统性能要求

本系统采用的是最新的web前端技术，致力于打造技术前沿、速度极快、页面美观、系统功能简洁实用成本低的博客。要求博客页面的加载速度不能过慢，并且页面不能长时间无响应现象。在设备上做到服务器的安全稳定性良好且成本低，所以本系统决定使用当下流行的云技术——腾讯云的Web应用托管来保证其性能。并使用COS对象存储技术来保证其数据的存储安全、高效、便捷。

### 3.2 系统总体设计

本个人博客系统使用了正式版本vue3.0的前端框架、微软的开源编程语言typescript，以及新型前端构建工具vite2.0，并采用腾讯云的COS-对象存储服务和云开发Webify进行Web应用托管来对项目进行构建和实现。

本系统使用的Vue.js 3.0版本是一套用于构建用户界面的渐进式框架。其使用的设计模式是：MVVM，在vue.js框架中数据会自动驱动视图。View是视图，就是DOM；对应视图也就是HTML部分--代表[UI组件](https://www.zhihu.com/search?q=UI组件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"138114429"})，它负责将数据模型转化成UI展现出来。 Model是模型，就是[vue组件](https://www.zhihu.com/search?q=vue组件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"138114429"})里的data，或者说是vuex里的数据；--代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。 ViewModel--监听模型数据也就是data的的改变和控制视图行为、处理用户交互，简单理解就是一个同步View和Model的对象，连接Model和View。



前端项目主要的文件结构和功能设计如下：

1.node_modules目录文件，npm加载的项目依赖模块，是安装node.js后用来存放用包管理工具下载安装的包的文件夹。

2.src文件，是开发时的主要目录，主要的功能实现都会在这里，如页面的组件展示、路由的实现、交互的逻辑等功能。

详细的文件结构如下：

（1）assets文件夹，主要放置一些样式、图片，比如logo等。

（2）components文件夹，主要放置不同的组件文件，用于

（3）pages文件夹，主要是页面文件

（4）router文件夹，放置的是路由

（5）App.vue文件，是项目的入口文件

（6）xxx.d.ts文件是声明文件，如 shims-vue.d.ts 是 vue文件模块声明文件、vite-env.d.ts 是vite环境变量声明文件

（7）main.ts文件是项目的核心文件，

3..xxxx文件是一些配置文件，包括语法配置、git配置等。如.gitattributes、.gitignore文件

4.index.html文件是首页的入口文件

5.package.json文件是项目的配置文件，里面能看见各个配置的版本号

6.README.md文件是项目的说明文档，文档是使用markdown格式书写的。

### 3.3系统模块设计

本系统基于常见的博客系统功能再结合vue组件化的设计为用户提供了以下功能模块：

![演示文稿1](D:\Desktop\演示文稿1.png)

1.首页是主要展示用户个性化设计的页面。系统结合了基于vue3面向设计师和开发者设计的组件库ElementPlus、jQuery库（一套跨浏览器的JavaScript库）、three.js(一个跨浏览器的脚本，使用JavaScript函数库或API来在网页浏览器中创建和展示动画的三维计算机图形)

2.博客文章是个人博客系统非常重要的一个模块，使用的是Markdown语言，文档数据存放在腾讯云的COS-对象存储文件中，通过调用，页面通过插件直接编译md文件，然后显示。

3.相册模块里面的照片等数据是通过腾讯云的COS-对象存储文件的调用，运用css的瀑布流式布局显示在页面

4.关于·友情链接模块是关于用户的个人信息以及一些联系方式。

数据—腾讯云COS-对象存储服务

cos全称——Cloud Object Storage，是由腾讯云推出的无目录层次结构、无数据格式限制，可容纳海量数据且支持 HTTP/HTTPS 协议访问的分布式存储服务。本系统的大量数据通过腾讯云对象存储服务的存放能便捷高效低成本的调用。

## 4 个人博客系统的实现与测试

### 4.1 系统开发环境

为了更好的设计开发本系统，以及进行相应的管理，下面将介绍具体开发中使用的工具、语言、系统等：

电脑操作系统：Windows 10

编程软件：Visual Studio Code

开发框架及版本：Vue.js 3.0

开发语言：Typescript、scss、HTML

开发环境：node.js

包管理工具：npm

前端构建工具：vite

版本控制工具：Git

数据存储：腾讯云cos对象存储服务

项目托管：腾讯托管云开发Webify

### 4.2 系统的实现

在了解到本系统的需求分析和模块设计后，接下来详细介绍每一个模块如何实现的。

#### 4.2.1 项目文件的创建

本项目使用的是vue3.0框架,所以需要运行在node.js环境下，通过node.js中的npm直接进行vite创建项目

具体代码如下：

// 安装vite
1、npm init vite@latest

// 安装vite同时创建vite项目
2、npm init vite@latest my-vue-app --template vue

{
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vite build", // 为生产环境构建产物
    "serve": "vite preview" // 本地预览生产构建产物
  }
}

#### 4.2.2 版本依赖兼容和配置

在文件package.json里查看版本依赖兼容和项目目录

{
    "name": "vite-ts-vue3-plus-demo",
    "version": "0.0.0",
    "scripts": {
        "dev": "vite",
        "build": "vue-tsc --noEmit && vite build",
        "serve": "vite preview"
    },
    "dependencies": {
        "@element-plus/icons": "0.0.11",
        "dotenv": "^10.0.0",
        "element-plus": "^1.1.0-beta.7",
        "vue": "^3.0.5",
        "vue-router": "^4.0.11",
        "vuex": "^4.0.2"
    },
    "devDependencies": {
        "@types/node": "^16.7.1",
        "@vitejs/plugin-vue": "^1.3.0",
        "@vue/compiler-sfc": "^3.0.5",
        "node-sass": "^6.0.1",
        "sass": "^1.38.1",
        "sass-loader": "^12.1.0",
        "typescript": "^4.3.2",
        "vite": "^2.4.4",
        "vue-tsc": "^0.2.2"
    }
}

（1）引入vuex配置和使用

创建项目时我们已经引入了vuex4.0版本，接下来我们就开始配置vuex4.0并测试。

在src目录下创建store文件夹，新建文件index.ts, index.ts内容如下所示：

```typescript
import { InjectionKey } from 'vue'
/**
 * 引入 InjectionKey 并将其传入 useStore 使用过的任何地方，
 * 很快就会成为一项重复性的工作。为了简化问题，可以定义自己
 * 的组合式函数来检索类型化的 store 
 */
// 未简化useStore版
// import { createStore, Store } from 'vuex'
// 简化useStore版
import { useStore as baseUseStore, createStore, Store} from 'vuex'

// 为 store state 声明类型
export interface State {
    username: string,
    count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

// 导出store模块
export const store = createStore<State>({
    state: {
        username: "测试store",
        count: 0
    },
    getters:{
        getName: state =>{
            return state.username
        }
    },
    mutations: {
        // 重置名称
        SET_NAME(state, params:string) {
            state.username = params
        }
    },
    actions:{}
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
    return baseUseStore(key)
}
```

在根目录下新建vuex-d.ts文件，内容如下所示：

```typescript
// 一个声明文件来声明 Vue 的自定义类型 ComponentCustomProperties
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State {
        count: number,
        username: string
    }
    // 为 `this.$store` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
```

在main.ts中注入store模块

```typescript
import { createApp } from 'vue';
import App from './App.vue';
// 导入store模块, 传入 injection key
import { store, key } from '@/store';
const app = createApp(App)
app.use(store, key)
app.mount('#app')
```

（2）router配置以及使用详解

接下来我们就开始配置router4.0

页面具体内容：

**1、layout/index.vue**

```vue
<template>
    <Header/>
    <router-view></router-view>
</template>
<script setup lang="ts">
    import Header from './header/index.vue';
</script>
```

**2、layout/header/index.vue**

```vue
<template>
    <div class="action">
        <h2 @click="handleClick(1)">首页</h2>
        <h2 @click="handleClick(0)">关于</h2>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter()

    const handleClick = (num: number)=>{
        if (num) {
            router.push({name: 'home'})
        }else router.push({name: 'about'})
    }
</script>
<style >
    .action{
        display: flex;
    }
    h2{
        padding: 0px 10px;
        cursor: pointer;
    }
    h2:hover{
        color: red;
    }
</style>
```

pages/home/index.vue

```vue
<template>
    <h2>home</h2>
</template>
```

pages/about/index.vue

```vue
<template>
    <h2>about</h2>
</template>
```

在src目录下创建router文件夹，然后创建index.ts文件，内容如下所示：

```typescript
import { createRouter, createWebHashHistory } from "vue-router";
import LayOut from "../components/layout/index.vue";

const routes = [
    {
        path: '/',
        component: LayOut,
        redirect: '/home',
        children:[
            {
                path: '/home',
                name: 'home',
                component: ()=> import("../pages/home/index.vue"),
                meta:{
                    title: '首页',
                    icon: ''
                }
            },
            {
                path: '/about',
                name: 'about',
                component: ()=> import("../pages/about/index.vue"),
                meta:{
                    title: '关于',
                    icon: ''
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
```



在main.ts中注入router模块,

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store';
import router from './router';

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount('#app');
```

使用路由

```vue
<template>
    <div class="action">
        <h2 @click="handleClick(1)">首页</h2>
        <h2 @click="handleClick(0)">关于</h2>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter()

    const handleClick = (num: number)=>{
        if (num) {
            router.push({name: 'home'})
        }else router.push({name: 'about'})
    }
</script>
<style >
    .action{
        display: flex;
    }
    h2{
        padding: 0px 10px;
        cursor: pointer;
    }
    h2:hover{
        color: red;
    }
</style>

```

（3）引入element-plus以及注意事项

安装

```js
npm install element-plus --save
# 安装icon图标依赖库
npm install @element-plus/icons
```



在main.ts 文件中引入配置

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store';
// 注入路由
import router from './router';

// 引入ui组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(store, key);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
```



在vue文件中引用ui组件

1、单个图标引用

```vue
<template>
    <el-icon :size="20" :color="'blue'">
        <edit />
    </el-icon>
</template>
<script setup lang="ts">
    import { Edit } from '@element-plus/icons'
</script>
```

2、全局注册图标使用

```typescript
import { createApp } from 'vue'
import App from './App.vue'

import { Edit,Search } from '@element-plus/icons'

const app = createApp(App);
app.component("edit", Edit)
app.component("search", Search)
app.mount('#app');
```

2、1 使用图标

```vue
<template>
    <h2>home页面</h2>
    <el-button type="primary" >主要按钮</el-button>
    <el-button type="success" >成功按钮</el-button>
    <el-icon :size="20" :color="'blue'">
        <edit />
    </el-icon>
    <el-icon :size="20">
        <search></search>
    </el-icon>
</template>
<script setup lang="ts"> 
</script>
```

（4）配置vite.config.ts

这里主要配置vite服务器的打包保存地址，打包分解，端口号，是否自动打开浏览器，远程请求地址代理目标，目录别名，全局样式配置等。

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { loadEnv } from 'vite';
// nodejs写法，获取项目目录
import path from 'path';

// https://vitejs.dev/config/
export default({ command, mode }) => {
    return defineConfig({
        plugins: [vue()],
        server:{
            host: '127.0.0.1',
            port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),
            strictPort: true, // 端口被占用直接退出
            https: false,
            open: true,// 在开发服务器启动时自动在浏览器中打开应用程序
            proxy: {
                // 字符串简写写法
                // '/foo': '',
                // 选项写法
                '/api': {
                    target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
                // 正则表达式写法
                // '^/fallback/.*': {
                //   target: 'http://jsonplaceholder.typicode.com',
                //   changeOrigin: true,
                //   rewrite: (path) => path.replace(/^\/fallback/, '')
                // },
            },
            hmr:{
                overlay: true // 屏蔽服务器报错
            }
        },
        resolve:{
            alias:{
                '@': path.resolve(__dirname,'./src')
            }
        },
        css:{
            // css预处理器
            preprocessorOptions: {
                // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
                // 给导入的路径最后加上 ;
                scss: {
                    additionalData: '@import "@/assets/styles/global.scss";'
                }
            }
        },
        build:{
            chunkSizeWarningLimit: 1500, // 分块打包，分解块，将大块分解成更小的块
            rollupOptions: {
                output:{
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        }
    })   
}
```

（5）tsconfig.json 配置

这是typescript的识别配置文件，也是ts向js转化的中间站，这里配置了许多关于ts的文件类型和策略方法。

```typescript
{
    "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "paths": {
        "@/*":["src/*"]
    }
  },
  	"include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

(6)shims-vue.d.ts配置, 声明vue文件全局模块

这里是配置声明，比如css，vue等文件，ts不能识别，需要配置声明模块类型。

```typescript
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

(7)安装scss并配置全局样式文件

```typescript
// 注意要使用scss，必须安装依赖，否则报错
npm install node-sass sass-loader sass -D
```

 需要在src目录的assets静态目录新增一个全局global.scss文件，其他样式文件导入到该文件即可全局使用和修改。

或者在global.scss写一个单独属性测试

```scss
$color-primary: #007aff;
```

vue使用全局样式变量

```vue
<template>
    <h2 class="test-color">home页面</h2>
</template>
```

```scss
<style lang="scss" scoped>
    .test-color{
        color: $color-primary;
    }
</style>
```

在vite.config.ts 文件中配置global.scss

```typescript
 css:{
     // css预处理器
     preprocessorOptions: {
         // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
         // 给导入的路径最后加上 ;
         scss: {
             additionalData: '@import "@/assets/styles/global.scss";'
         }
     }
 }
```

(8).env.环境变量配置和读取

环境变量建议放到项目根目录下, 方便vite.config.ts文件读取和使用

```elixir
.env.production // 生产环境配置文件
.env.development // 开发环境配置文件
```

生产和开发环境配置文件内容如下：

**写变量时一定要以VITE_开头，才能暴露给外部读取**

```js
# 开发环境 / #生产环境
VITE_APP_TITLE = "前端技术栈"
VITE_APP_PORT = 3001

# 请求接口
VITE_APP_BASE_URL = "http://39.12.29.12:8080"

//env.d.ts文件内进行 环境变量智能提示配置
interface ImportMetaEnv {
     VITE_APP_TITLE: string,
     VITE_APP_PORT: string,
     VITE_APP_BASE_URL: string
}
```

vite.config.ts 读取配置文件

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { loadEnv } from 'vite';
// nodejs写法，获取项目目录
import path from 'path';

// https://vitejs.dev/config/
export default({ command, mode }) => {
    // console.log(command, mode, 5555);
    return defineConfig({
        plugins: [vue()],
        server:{
            host: '127.0.0.1',
            port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),
            strictPort: true, // 端口被占用直接退出
            https: false,
            open: true,// 在开发服务器启动时自动在浏览器中打开应用程序
            proxy: {
                '/api': {
                    target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
            },
            hmr:{
                overlay: true // 屏蔽服务器报错
            }
        },
        resolve:{
            alias:{
                '@': path.resolve(__dirname,'./src')
            }
        },
        css:{
            // css预处理器
            preprocessorOptions: {
                // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
                // 给导入的路径最后加上 ;
                scss: {
                    additionalData: '@import "@/assets/styles/global.scss";'
                },
                sass: {
                    additionalData: '@import "@/assets/styles/global.scss";'
                }
            }
        },
        build:{
            chunkSizeWarningLimit: 1500, // 分块打包，分解块，将大块分解成更小的块
            rollupOptions: {
                output:{
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        }
    })   
}
```

#### 4.2.3 组件的实现



引入顶部导航栏header组件、card组件、carousels组件、footer组件创建顶部导航栏组件并引入使用

举例：在compo组件文件夹layout目录下header文件夹然后在index.vue，完整内容如下。

```vue
<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
        <template v-for="(item, index) in menuList" :key="item.path">
            <template v-if="!item.children">
                <el-menu-item :index="item.meta?.index" @click="handleRoute(item)">{{item.meta?.title}}</el-menu-item>
            </template>
            <template v-else>
                <el-sub-menu :index="item.meta?.index" :popper-append-to-body="false">
                    <template #title>{{item.meta?.title}}</template>
                    <el-menu-item :index="childItem.meta?.index" v-for="(childItem, subIndex) in item.children" :key="childItem.path"  @click="handleRoute(childItem)">{{childItem.meta?.title}}</el-menu-item>
                </el-sub-menu>
            </template>
        </template> 
  </el-menu>
</template>
<script lang="ts" setup>
    import {ref, computed} from 'vue';
    import {useRoute, useRouter} from "vue-router";
    import { mapState } from 'vuex';
    import { useStore } from '@/store';

    const store = useStore()
    const router = useRouter()
    
    // 定义变量
    const activeIndex2 = computed(mapState(['currentMenu']).currentMenu.bind({ $store: store })) || ref<string>('1')
    // 获取菜单路由
    const menuList = router.options.routes[0].children;

    // 定义事件
    // 点击菜单事件
    const handleSelect =(key:string, keyPath:string)=>{
        console.log(key, keyPath)
        store.commit('SET_CURRENT_MENU', key)
    }
    // 跳转关于页面
    const handleRoute = (route:any) => {
        router.push(route.path)
    }

</script>
<style lang="scss">
    @import "./style.scss";
</style>
```

### 4.3系统界面展示

#### 4.3.1首页界面

![image-20220301100529473](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220301100529473.png)

#### 4.3.2 相册界面

![image-20220301104542200](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220301104542200.png)

![image-20220301104611599](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220301104611599.png)

#### 4.3.4 关于页面

![image-20220305211046375](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20220305211046375.png)

### 4.3 系统测试UERY



## 5 总结





