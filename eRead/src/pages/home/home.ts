import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {BookPage} from '../book/book';
import {CommentPage} from "../comment/comment";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  book_titles:string[];
  book_author:string[];
  book_info:string[];
  like_number:number[];
  book_content = [[]];
  comment_content =[[]];
  answer_content=[[]];

  //book_list:any;
  constructor(public navCtrl:NavController,private storage: Storage) {
    this.book_titles = ["Python基础教程", "数据库设计与关系理论", "Software Engineering", "移动应用UI设计模式"];
    this.book_author = ["[挪]Magnus Lie", "[英]戴特", "[美]Ian Sommerville", "[美]Theresa Neil"];
    this.book_info = ["给真正的初学者的入门书", "数据库设计领域的经典之作", "For courses in computer science and software engineering", "简易的移动应用UI模式参考书。"];
    this.like_number = [15, 28, 9, 38];

    /*this.http.get('http://localhost:8080/book/all').map(res => res.json()).subscribe(data => {
      this.book_list = data;
      console.log(data);
    });*/
    this.book_content[0] = ["目录",
      "1.Python 简介" ,
      "2.Python 环境搭建" ,
      "3.Python 中文编码" ,
      "4.Python 基础语法" ,
      "5.Python 变量类型" ,
      "6.Python 运算符" ,
      "7.Python 条件语句" ,
      "8.Python 循环语句" ,
      "9.Python While 循环语句" ,
      "10.Python for 循环语句" ,
      "11.Python 循环嵌套" ,
      "12.Python break 语句" ,
      "13.Python continue 语句" ,
      "14.Python pass 语句" ,
      "15.Python Number(数字)" ,
      "16.Python 字符串" ,
      "17.Python 列表(List)" ,
      "18.Python 元组" ,
      "19.Python 字典(Dictionary)" ,
      "20.Python 日期和时间" ,
      "21.Python 函数" ,
      "22.Python 模块" ,
      "23.Python 文件I/O" ,
      "24.Python File 方法" ,
      "25.Python 异常处理" ,
      "26.Python 内置函数"];
    this.book_content[1] = ["1.Python 简介" ,
      "Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。" ,
      "Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。",
      "·Python 是一种解释型语言： 这意味着开发过程中没有了编译这个环节。类似于PHP和Perl语言。",
      "·Python 是交互式语言： 这意味着，您可以在一个Python提示符，直接互动执行写你的程序。",
      "·Python 是面向对象语言: 这意味着Python支持面向对象的风格或代码封装在对象的编程技术。",
      "·Python 是初学者的语言：Python 对初级程序员而言，是一种伟大的语言，它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏。",
      "Python 发展历史",
      "Python 是由 Guido van Rossum 在八十年代末和九十年代初，在荷兰国家数学和计算机科学研究所设计出来的。Python 本身也是由诸多其他语言发展而来的,这包括 ABC、Modula-3、C、C++、Algol-68、SmallTalk、Unix shell 和其他的脚本语言等等。像 Perl 语言一样，Python 源代码同样遵循 GPL(GNU General Public License)协议。现在 Python 是由一个核心开发团队在维护，Guido van Rossum 仍然占据着至关重要的作用，指导其进展。",
      "Python 特点",
      "·1.易于学习：Python有相对较少的关键字，结构简单，和一个明确定义的语法，学习起来更加简单。",
      "·2.易于阅读：Python代码定义的更清晰。",
      "·3.易于维护：Python的成功在于它的源代码是相当容易维护的。",
      "·4.一个广泛的标准库：Python的最大的优势之一是丰富的库，跨平台的，在UNIX，Windows和Macintosh兼容很好。",
      "·5.互动模式：互动模式的支持，您可以从终端输入执行代码并获得结果的语言，互动的测试和调试代码片断。",
      "·6.可移植：基于其开放源代码的特性，Python已经被移植（也就是使其工作）到许多平台。",
      "·7.可扩展：如果你需要一段运行很快的关键代码，或者是想要编写一些不愿开放的算法，你可以使用C或C++完成那部分程序，然后从你的Python程序中调用。",
      "·8.数据库：Python提供所有主要的商业数据库的接口。",
      "·9.GUI编程：Python支持GUI可以创建和移植到许多系统调用。",
      "·10.可嵌入: 你可以将Python嵌入到C/C++程序，让你的程序的用户获得脚本化的能力。"];
    this.book_content[2] = ["2.Python 环境搭建" ,
      "本章节我们将向大家介绍如何在本地搭建Python开发环境。" ,
      "Python可应用于多平台包括 Linux 和 Mac OS X。",
      "你可以通过终端窗口输入 python 命令来查看本地是否已经安装Python以及Python的安装版本。",
      "·Unix (Solaris, Linux, FreeBSD, AIX, HP/UX, SunOS, IRIX, 等等。)",
      "·Win 9x/NT/2000",
      "·Macintosh (Intel, PPC, 68K)",
      "·OS/2",
      "·DOS (多个DOS版本)",
      "·PalmOS",
      "·Nokia 移动手机",
      "·Windows CE",
      "·Acorn/RISC OS",
      "·BeOS",
      "·Amiga",
      "·VMS/OpenVMS",
      "·QNX",
      "·VxWorks",
      "·Psion",
      "·Python 同样可以移植到 Java 和 .NET 虚拟机上。"];
    this.book_content[3] = [
      "3.Python 中文编码",
      "前面章节中我们已经学会了如何用 Python 输出 \"Hello, World!\"，英文没有问题，但是如果你输出中文字符\"你好，世界\"就有可能会碰到中文编码问题。Python 文件中如果未指定编码，在执行过程会出现报错。"];
    this.book_content[4] = [
      "4.Python 基础语法",
      "Python 语言与 Perl，C 和 Java 等语言有许多相似之处。但是，也存在一些差异。在本章中我们将来学习 Python 的基础语法，让你快速学会 Python 编程。",
      "第一个 Python 程序",
      "在 python 提示符中输入以下文本信息，然后按 Enter 键查看运行效果：",
      "print \"Hello, Python!\"",
      "在 Python 2.7.6 版本中,以上实例输出结果如下：",
      "Hello, Python!",
      "Python 标识符",
      "在 Python 里，标识符有字母、数字、下划线组成。",
      "在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。",
      "Python 中的标识符是区分大小写的。",
      "以下划线开头的标识符是有特殊意义的。以单下划线开头 _foo 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 from xxx import * 而导入；",
      "以双下划线开头的 __foo 代表类的私有成员；以双下划线开头和结尾的 __foo__ 代表 Python 里特殊方法专用的标识，如 __init__() 代表类的构造函数。",
      "Python 可以同一行显示多条语句，方法是用分号 ; 分开，如：",
      "print 'hello';print 'world';"];
    this.storage.set('book_content0',this.book_content[0]);
    this.storage.set('book_content1',this.book_content[1]);
    this.storage.set('book_content2',this.book_content[2]);
    this.storage.set('book_content3',this.book_content[3]);
    this.storage.set('book_content4',this.book_content[4]);

    this.comment_content[0]=["Python与C的区别","2017-06-03",""];
    this.answer_content[0]=["Bob:Something is special","Smith:Many things is different"];
    this.comment_content[1]=["Python与JAVA的区别","2017-06-03",""];
    this.answer_content[1]=["Andy:Something is special","Candy:Many things is different"];
    this.storage.set('comment_num',2);
    this.storage.set('comment_content0', this.comment_content[0]);
    this.storage.set('comment_content1', this.comment_content[1]);
    this.storage.set('answer_content0', this.answer_content[0]);
    this.storage.set('answer_content1', this.answer_content[1]);

    this.storage.get('current_page').then((value) => {
      if (value === null){
        this.storage.set('current_page',0);
      }
    });
  }


  readBook() {
    this.navCtrl.push(BookPage, {
      'name': "Python基础教程"
    });
  }

  addLikeNumber(event, number) {
    this.storage.get('book' + number).then((value) => {
      console.log(value);
      if (value === null){
        this.like_number[number]++;
        this.storage.set('book' + number, 'true');
      }else{
        this.like_number[number]--;
        this.storage.remove('book' + number);
      }
    });
    event.stopPropagation();
  }

  goToComments(event) {
    this.navCtrl.push(CommentPage);
    event.stopPropagation();
  }
}
