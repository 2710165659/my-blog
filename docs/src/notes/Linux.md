---
outline: 1
---
# 其他

## 相对路径和绝对路径，特殊路径标个清晰明能识符

/home/username **绝对路径**
username 以当前目录为启动为起点   **相对路径**
. 当前目录
.. 上级目录
~ HOME目录
如cd ../.. 切换到上二级目录

## 快捷键

ctrl c 停止当前命令/取消当前命令输入
ctrl d 退出账户登录
ctrl a 跳到命令开头
ctrl e 跳到命令结尾
ctrl ←→ 左/右跳一个单词
ctrl r 同clear

## 查看历史命令

history
!..
ctrl r

## 管道符

|
含义，将管道符左边命令的结果，作为右边命令的输入，可以嵌套
例：grep diyi test.txt | wc -w
ls | wc -w 统计当前目录下文件及文件夹个数

## 单引号，双引号，反引号

单引号：纯文本
双引号：会解析内容，如 echo "$time"
反引号：会处理内容
如：文件test.txt的内容为: /etc/passwd /etc/shadow
echo `cat test.txt` 实际处理 echo /etc/passwd /etc/shadow

## 重定向符

`>`将左侧命令的结果，覆盖写入到符号右侧指定的文件中
`>>`将左侧命令的结果，追加写入到符号右侧指定的文件中
如：ls -lh > test.txt
echo "Hello Linux" >> test.txt

## 重启

reboot

# 命令

## `ls [-a -l -h] [Linux路径]`列出文件信息

- a  all,列出全部文件，含隐藏
- l  列表形式(竖排)列出，会有更多信息
- h 以易于阅读的形式，列出文件大小，如K、M、G必须配合l

事例写法

1. ls -l -a
2. ls -ls
3. ls -la /
4. ls -lh
5. ls -l 同 ll

## `cd [Linux路径]`切换工作路径

- cd 切换回用户HOME目录
- cd / 切换回根目录

## `pwd`查看当前工作目录

无参数和选项 Print Work Directory

## `mkdir [-p] Linux路径`创建文件夹

- p 表示自动创建不存在的父目录

需要修改权限，在HOME目录内可以

## 文件操作命令

`touch Linux路径`**创建文件**，例 touch test.txt
`cat Linux路径`**查看文件内容**
`more Linux路径`**查看文件内容**

- cat直接将内容全部显示出来
- more支持翻页，可以一页页的展示 空格下一页，q退出

`cp [-r] 参数1 参数2`**复制文件、文件夹**

- r可选，复制文件夹使用，表示递归
- 参数1，Linux路径，被复制的文件或文件夹
- 参数2，Linux路径，复制去的地方

`mv 被移动的文件路径 移动到的文件路径`**移动文件、文件夹**(可以用来重命名)
`rm [-r -f] 参数1 参数2 ... 参数N`

- r用于删除文件夹
- f表示强制删除，只有root用户删除会有提示
- 参数1 参数2 ... 表示要删除的文件或文件夹路径，按照空格隔开

_rm命令支持通配符_

- *表示匹配任意内容
- test* 表示以test开头的内容
- *test表示以test结尾的内容
- *test*表示任何包含test的内容

## `which 要查找的命令`查看命令文件存放在哪里

command -v 命令

## `find`查找文件

可以用*通配符
`find 起始路径 -name "被查找文件名"`按照文件名查找
`find 其实路径 -size +|-n[kMG]`按文件大小查找文件

- +、-表示大于和小于
- n表示大小数字
- kMG表示大小单位 kb MB GB

## `grep [-n] 关键字 文件路径`从文件中通过关键字过滤文件行

- n，显示匹配的行的行号
- 关键字表示过滤关键字，推荐用""包围
- 文件路径，可作为内容输入端口

## `wc [-c -m -l -w] 文件路径`统计文件信息

- c统计字节数量
- m统计字符数量
- l统建行数
- w统计单词数量
- 文件路径，可作为内容输入端口

## `echo 输出的内容`输出指定内容，可用""包围

## `tail [-f -num] Linux路径`查看文件尾部内容，跟踪文件的最新更改

- f 表示持续跟踪
- num 表示查看尾部多少行，不填默认10行

如 tail -2 test.txt

## vi/vim编辑器

`vi 文件路径`/`vim 文件路径`
文件存在，会编译，不存在会新建。打开后进去命令模式
**命令模式**
`i`在当前光标位置进入输入模式
_`:`进入底线命令模式_
`上下左右kjhl`上下左右移动光标
`0`移动光标到行开头
`$`移动光标到行结尾
`pageup pagedown`翻页
`/`进入搜索模式
`n`向下继续搜索
`N`向上继续搜索
`yy`复制当前行
`dd`删除当前行
`p`粘贴
`u`撤销
`ctrl r`反向撤销修改
......
**输入模式**
`esc`退回命令模式
**底线命令模式**
`wq`保存退出
`q`仅退出
`q!`强制退出
`w`仅保存
`set nu`显示行号
`set paste`设置粘贴模式

# 用户和权限

## 切换用户

`su - 用户名`切换用户
su - root 然后输入密码切换到root用户
exit 退回上个用户，也可以ctrl+d

## 权限

普通用户在HOME目录内不受限，除了home一般仅有只读和执行权限
drwxr-xr-x   lrwxrwxrwx ...

- 第一位：-文件，d文件夹，l软连接
- 2-4：所属用户权限 w(write)写,x(execute)执行,r(read)读取
- 5-7：所属用户组权限
- 8-10：其他用户权限

`chmod [-R] 权限 文件或文件夹`**修改文件、文件夹的权限信息**
只有文件、文件夹的所属用户或root用户可以修改
R对文件夹的全部内容应用同样的操作
例:chmod u=rwx,g=rx,o=x hello.txt 将文件权限修改为 rwxr-x--x
快捷写法：chmod 751 hello.txt 三位数字有无二进制转十进制
7 rwx 5 r-x 1 --x
`chown [-R] [用户]:[用户组] 文件或文件夹`**修改文件、文件夹的所属用户和用户组** (需root用户执行)
例 chown root hello.txt 修改用户chown :root hello.txt 修改用户组

## sudo

`sudo 其他命令`为普通命令收圈，临时以root身份执行

- 需要为普通用户配置sudo认证

**为普通用户配置sudo认证**

1. root用户执行visudo
2. 在文件的最后添加 `用户名 ALL=(ALL) NOPASSWD:ALL`
3. wq保存退出

## 用户组

_权限管控单元是用户和用户组级别_
需在root用户执行
`groupadd 用户组名`**创建用户组**
`groupdel 用户组名`**删除用户组**
`useradd [-g -d] 用户名`**创建用户**

- g指定用户组，不指定会创建同名组并加入
- d指定用户home路径,不指定默认在/home/用户名

`userdel [-r] 用户名` **删除用户**

- r删除用户的home目录，不加r保留

`id [用户名]`**查看用户所属组**，不加则查看自身
`usermod -aG 用户组 用户名`**指定用户加入用户组**
`getent passwd`**查看系统中有哪些用户,用户组**

- 用户名:密码(x):用户ID:组ID:描述信息(无用):HOME目录:执行终端(默认bash)

`getent group`**查看系统中有哪些组**

- 组名称:组认证(x):组ID

# 软件与系统管理

## 软件安装

`yum [-y] [install | remove |search] 软件名称`**CentOS自动化安装配置Linux软件**，需要root，需要联网

- y自动确认
- 安装，卸载，搜索

`apt [-y] [install | remove |search] 软件名称`Ubantu

## 软件启动或停止

`systemctl start | stop | status | enable | disavle 服务名`**启动软件（服务）**

- 启动、关闭、查看状态、开启开机自启，关闭开机自启

内置服务NewworkManager主网络服务newwork副网络服务firewalld防火墙ssh ssh远程.....
第三方软件自动注册了也可直接控制

## 软连接

`ln -s 参数1 参数2`**创建软软连接**

- s创建软连接
- 参数1：被链接的文件或文件夹
- 参数2：要链接去的目的地

## 日期与时期

`date [-d] [+格式化字符串]`**查看日期,时间**

- d按照给定的字符串显示日期，一般用于日期计算
- %Y年
- %y年份后两位数字（00.99）
- %m月份(01,12)
- %d日(01,31)
- %H小时(00.23>
- %M分钟（00.59)
- %S秒(00.60)
- %s 自1970-01-0100:0D:00UTC到现在的秒数

例：+%Y-%m-%d   2024-09-18
+%y/%m/%d  24/09/18
"+%Y-%m-%d %H:%M:%S"   2024-09-18 22:25:04
_-d日期计算_
date -d "+1 day" "+%Y %m %d"
支持标记year month day hour Minute second
**修改时区**
`rm -f /etc/localtime`
`sudo ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`
自动校准时间程序 ntp
手动校准 ntpdate -u ntp.aliyun.com

## ip/主机名

`ifconfig`**产看ip地址**，无法使用安装程序yum -y install net-tools
`hostname`**查看主机名**
`hostnamectl set-hostname 主机名`**修改主机名**，需root

## 下载和网络请求

`ping [-c num] ip或主机名`

- c检查的次数，不加无限次数持续检查

`wget [-b] url`**非交互式的文件下载器**

- b可选，后台下载，会将日志写入到当前工作目录的wget-log文件
- url 下载链接

`tail -f wget-log`**监控后台下载进度**
`curl [-O] url`**发起http网络请求**，可以下载文件、获取信息

- O用于下载文件，当url是下载链接是，可保存文件

## 端口

1-1023 系统程序内置端口，非特殊需要不占用
1024-49151 注册端口，程序绑定端口
49152-65535 动态端口，临时使用
`nmap 被查看的ip地址`**查看端口占用** yum -y install nmap
例 nmap 127.0.0.1
`netstat -anp|grep 端口号` **指定端口的占用情况** yum -y install net-tools

## 进程管理

`ps [-e -f]`**查看进程**，一般用ps -ef

- e显示全部进程
- f完全格式化的形式展示信息

`ps -ef | grep 过滤关键字`**查看指定进程**
`kill [-9] 进程ID`关闭进程

- 9强制关闭

## 主机状态监控

`top`**查看CPU，内存占用等信息**，每5秒刷新一次

- p只显示某个进程的信息
- d设置刷新时间，默认是5s
- c显示产生进程的完整命令，默认是进程名
- n指定刷新次数，比如top-n 3，刷新输出3次后退出
- b以非交互非全屏模式运行，以批次的方式执行top，一般配合-n指定输出几次统计信息，将输出重定向到指定文件，比如op-b-n3>/tmp/top.tmp
- i不显示任何闲置（idle）或无用（zombie）的进程
- u查找特定用户启动的进程

如top -p 1
top -n 3
_当top以交互式运行（非-b选项启动），可以用以下交互式命令进行控制_

- h键  按下h键，会显示帮助画面
- c键  按下c键，会显示产生进程的完整命令，等同于-c参数，再次按下c键，变为默认显示
- f键  按下f键，可以选择需要展示的项目
- M键  按下M键，根据驻留内存大小（RES）排序
- P键  按下P键，根据CPU使用百分比大小进行排序
- T键  按下T键，根据时间/累计时间进行排序
- E键  按下E键，切换顶部内存显示单位
- e键  按下e键，切换进程内存显示单位
- l键  按下l键，切换显示平均负载和启动时间信息。
- i键  按下i键，不显示闲置或无用的进程，等同于-i参数，再次按下，变为默认显示
- t键  按下t键，切换显示CPU状态信息
- m键   按下m键，切换显示内存信息

`df [-h]` **查看硬盘使用情况**

- h 更加人性化的单位显示

`iostat [-x][num1][num2]`**查看CPU、磁盘相关信息**

- x显示更多信息
- num1刷新间隔，num2刷新几次

`sar -n DEV num1 num2`**查看网络相关统计**，命令非常复杂
-n 查看网络,DEV表示网络接口,num1刷新间隔，num2刷新几次

## 环境变量

`env`**查看当前系统所记录的环境变量**
$取环境变量的值 ，如echo$PATH
echo ${PATH}ABC
`export 变量名=变量值`**临时设置环境变量**
永久生效

- 针对当前用户生效，配置在当前用户的~/.bashrc 文件中
- 针对所有用户生效，配置在系统的：/etc/profile文件中

并通过语法：`source 配置文件`，进行立刻生效，或重新登录FinalShell生效

`source ~/.bashrc`

自定义环境变量 export PATH=$PATH:自己的目录

PATH=$PATH:/目录

## 上传下载

FinalShell直接上传下载
yum -y install lrzsz
`sz 文件`下载 tab补全
`lz 文件`上传 速度慢

## 解压和压缩

格式:tar gz zip
tar归档，仅仅简单封装，gz是压缩
`tar [-c -v -x -f -z -C] 参数1 参数2 ... 参数N`

- c，创建压缩文件，用于压缩模式
- v，显示压缩、解压过程，用于查看进度
- x，解压模式
- f，要创建的文件，或要解压的文件，-f选项必须在所有选项中位置处于最后一个
- z，gzip模式，不使用-z就是普通的tarbal格式
- C，选择解压的目的地，用于解压模式

_tar的常用组合为：_
`tar -cvf test.tar 1.txt 2.txt 3.txt` 将1.txt 2.txt 3.txt压缩到test.tar文件内
`tar-zcvf test.tar.gz1.txt2.txt3.txt` 将1.txt 2.txt 3.txt压缩到test.tar.gz文件内，使用gzip模式
_常用的tar解压组合有_
`tar -xvf test.tar` 解压test.tar，将文件解压至当前目录
`tar -xvf test.tar -C /home/itheima` 解压test.tar，将文件解压至指定目录（/home/itheima）
`tar-zxvf test.tar.gz -C /home/itheima` 以Gzip模式解压test.tar.gz，将文件解压至指定目录（/home/itheima）

zip格式
`zip [-r] 参数1 参数2 ... 参数N`

- r包含文件夹用

`unzip [-d] 参数`

- d指定解压去的位置

unzip test.zip 解压到当前目录
unzip test.zip -d /home/itheima，

**同名内容会直接替换**

# GCC

PATH=$PATH:/home/xuan_yuan/program
编译
gcc  test.c
gcc  –o  count  count.c
