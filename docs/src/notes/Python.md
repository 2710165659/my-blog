---
outline: 1
---
# 常用函数

## 数字处理

#### 数字绝对值函数 abs()

> ```python
> a = int(input())
> print(abs(a))
> ```
>
> > 输入一个整数，输出该数字的绝对值.

#### 进制转化函数

> |    函数名    |        描述        |
> | :-------: | :--------------: |
> |   bin()   |   将整数转换为二进制字符串   |
> |  `oct()`  |   将整数转换为八进制字符串   |
> |  `hex()`  |   将整数转换为十六进制字符串  |
> |  `int()`  | 将字符串转换为整数，支持多种进制 |
> | `float()` |    将字符串转换为浮点数    |
>
> eg:
>
> ```python
> print(hex(int(input())))
> ```
>
> > 输入十进制整数，输出其16进制.

#### 输出字符 ASCII码 函数 ord()

> ```python
> print(ord(input()))
> ```
>
> 输入一个字符，输出其ASCII码对应数字

#### 保留小数位数函数 round()

> > round(参数，保留的小数位)，默认保留小数位是0，即当只传一位参数时默认返回的是整数
>
> ```python
> print(round(float(input()),2))
> ```
>
> > 输入一个小数，四舍五入保留两位输出

## 字符串

#### 判断字符串

> | 函数名       | 用法            | 说明                                 |
> | --------- | ------------- | ---------------------------------- |
> | isalpha() | str.isalpha() | 判断字符串中的所有字符是否都是字母，返回True或False     |
> | isdigit() | str.isdigit() | 判断字符串中的所有字符是否都是数字字符，返回True或False   |
> | isspace() | str.isspace() | 判断字符串中的所有字符是否都是空格字符，返回True或False 是 |
>
> ```python
> a = input()
> print(f"{a.isalpha()}\n{a.isdigit()}\n{a.isspace()}")
> ```

#### 查找子字符串 find函数

> ```python
> a = input()
> print(a.find("NiuNiu"))
> ```
>
> > 输出'NiuNiu'在long_str中第一次出现的位置，没有则输出-1

#### join连接字符串

> ```python
> # join函数是Python中用于字符串操作的一个函数，它可以将一个可迭代对象中的元素按照指定的分隔符连接成一个字符串。 可迭代对象，如列表、元组、集合等，separator是连接符，默认为空格
> # 将列表中的元素用逗号连接成一个字符串  
> my_list = ['apple', 'banana', 'orange']  
> result = ', '.join(my_list)  
> print(result)  # 输出：apple, banana, orange
> ```
>
> ```python
> my_list = list()
> while True:
>  x = input()
>  if x == '0':
>      break
>  my_list.append(x)
> print(" ".join(my_list))
> # 多行输入多个字符串，每行一个单词，最后一个输入为0时结束。输出多个单词组成的句子。
> ```

#### replace替换

> ```python
> new_my_str = my_str.replace("it", "程序")
> ```
>
> "itheima and itcast"  →  "程序heima and 程序cast"

#### split分割

> 连续读取数字
>
> ```python
> a,b,c = map(int,input().split())
> ```
>
> ```python
> my_str = "hello python itheima itcast"
> my_str_list = my_str.split(" ")
> print(f"将字符串{my_str}进行split切分后得到：{my_str_list}, 类型是:{type(my_str_list)}")
> ```
>
> > 将字符串hello python itheima itcast进行split切分后得到：['hello', 'python', 'itheima', 'itcast'], 类型是：<class 'list'>

#### strip删除字符串开头和结尾的空白字符

> ```
> my_str = "  itheima and itcast  "
> new_my_str = my_str.strip() # 不传入参数，去除首尾空格
> print(f"字符串{my_str}被strip后，结果：{new_my_str}")
> ```
>
> > 字符串`  itheima and itcast  `被strip后，结果：`itheima and itcast`
>
> ```python
> my_str = "12itheima and itcast21"
> new_my_str = my_str.strip("12")
> print(f"字符串{my_str}被strip('12')后，结果：{new_my_str}")
> ```
>
> > 字符串`12itheima and itcast21`被strip('12')后，结果：`itheima and itcast`

#### 计算字符串表达式 eval函数

> ```python
> # 计算一个简单的算术表达式  
> expression = '2 + 3 * 4'  
> result = eval(expression)  
> print(result)  # 输出：14  
>
> # 计算一个带有变量的表达式  
> expression = 'x + 2 * y'  
> x = 3  
> y = 4  
> result = eval(expression)  
> print(result)  # 输出：14  
>
> # 从字符串中读取和计算表达式  
> expression = input('请输入一个表达式：')  
> result = eval(expression)  
> print(result)  # 输出：表达式的计算结果
> ```

# 小知识点

##### 运算符

|  符号   |           含义           |
| :-----: | :----------------------: |
| +,-,*,/ |         加减乘除         |
|   //    |          取整数          |
|    %    |           取余           |
|   **    | 指数:如2的十次方:`2**10` |

##### 函数进阶

- 函数多返回值

  ```python
  def test_return():
      return 1, "hello", True
  x, y, z = test_return()
  ```

- 函数参数多种形式

  - 位置参数

    ```python
    def user_info(name, age, gender):
        print(f"姓名是:{name}, 年龄是:{age}, 性别是:{gender}")
    user_info('小明', 20, '男')
    ```

  - 关键字参数

    ```python
    user_info(name='小王', age=11, gender='女')
    user_info(age=10, gender='女', name='潇潇')    # 可以不按照参数的定义顺序传参
    user_info('甜甜', gender='女', age=9)
    # 若有位置参数必须放前面
    ```

  - 缺省参数

    ```python
    def user_info(name, age, gender="男"):        #有默认值的必须放后面
    user_info('小天', 13)							#不传即为默认值
    user_info('小天', 13,"女")
    ```

  - 不定长参数

    ```python
    # 不定长 - 位置不定长, *号						#将所有参数组成元组
    def user_info(*args):
        user_info(1, 2, 3, '小明', '男孩')
    # 不定长 - 关键字不定长, **号						#将所有参数组成字典
    def user_info(**kwargs):
    	user_info(name='小王', age=11, gender='男孩')
    ```

- 匿名参数

  ```python
  def test_func(compute):							#参数可传入函数
      result = compute(1, 2)
      print(f"结果是:{result}")
  test_func(lambda x, y: x + y)      				#lambda匿名函数
  ```

##### 乘方运算

```python
x,y = map(int,input().split())
print(f"{x**y}\n{y**x}"
```

> $x^y$  \n $y^x$

##### 判断数据类型函数  type()

```python
print(type("黑马程序员"))
print(type(666))
print(type(11.345))
```

##### 连续读取数字

```python
a,b,c = map(int,input().split())
#读取连续数字到列表
my_list = list(map(int,input().split()))
my_list = [int(i) for i in input().split()]
```

##### 不换行输出

```python
print('hello',end='')
```

##### `range`语法

1. range 语法1 range(num)
2. range 语法2 range(num1, num2)
3. range 语法3 range(num1, num2, step)

```python
for x in range(10):
# [0,10)
for x in range(5, 10):
# [5,10)
for x in range(5,10, 2):
# 从5开始，到10结束（不包含10本身）的一个数字序列，数字之间的间隔是2
```

##### 函数说明文档

```python
def add(x, y):
    """
    add函数可以接收2个参数，进行2数相加的功能
    :param x: 形参x表示相加的其中一个数字
    :param y: 形参y表示相加的另一个数字
    :return: 返回值是2数相加的结果
    """
    result = x + y
    print(f"2数相加的结果是：{result}")
    return result
add(5, 6)
```

##### 字符串比较

1.字符串如何比较
从头到尾，一位位进行比较，其中一位大，后面就无需比较了。
2.单个字符之间如何确定大小？
通过ASCII码表，确定字符对应的码值数字来确定大小

# 数据容器

::: danger
image-20230729194704349.png 图片已丢失
:::

### 列表

> 定义列表 例:name_list=['wang','liu',6,[1,2,3]]
> 取出print(name_list)或 print(name_list[0],name_list[1],name_list[2]) ,print(name_list[3][0])  #最后一个取出1

$$
\begin{array}{|c|c|l|c|l|}
\hline
功能&代码&说明&返回值&备注\\\hline
查找&mylist.index("itheima")&查找某元素在列表内的下标索引&下标&无\\
插入&mylist.insert(1, "best")&在指定下标位置插入新元素&None&无\\
修改&mylist[0]=&修改特定下标索引的值&None&无\\
追加&mylist.append("黑马程序员")&在列表的尾部追加单个新元素&None&单个元素\\
追加&mylist.extend(mylist2)&在列表的尾部追加一批新元素&None&列表元素\\
删除&del  mylist[2]&删除指定下标索引的元素&None&无\\
删除&mylist.remove("itheima")&删除某元素在列表中的第一个匹配项&None&无\\
取出&mylist.pop(2)&取出元素&元素内容&无\\
清空&mylist.clear()&清空列表&None&无\\
统计&mylist.count("itheima")&统计列表内某元素的数量&该元素数量&无\\
统计&len(mylist)&统计列表中全部的元素数量&元素数量&无\\\hline
\end{array}
$$

### 元组

> 定义: (元素1,元素2,元素3,...)  或者空元组 ()/ tuple()
>
> 注意:   1.不可修改,可以修改元组内的嵌套list
>
> ​		2.若定义的元组里面只有一个元素,应后面加, 如: (元素,)

|               操作               | 举例 (已知元组tuple) |
| :------------------------------: | :------------------: |
|       可以通过下标索引取值       |       tuple[0]       |
|    查找某个数据,返回对应下标     |    tuple.index()     |
| 统计某个数据在当前元组出现的次数 |    tuple.count()     |
|       统计元组内的元素个数       |      len(tuple)      |

### 字符串

> 注意:   1.可以通过下标索引取值
>
> ​		2.不可修改(增加或删除元素等)

|                                     常用操作                                     |     举例(已知字符串str)      |
| :------------------------------------------------------------------------------: | :--------------------------: |
|                            查找某个数据,返回对应下标                             |         str.index()          |
|          将字符串内的全部字符串1,替换为字符串2(返回新的字符串,不是修改)          | str.replace(字符串1,字符串2) |
| 按照指定的分割符字符串,将字符串分割为多个字符串,返回一个列表对象(不修改原字符串) |   str.split(分割符字符串)    |
|                    字符串规整(去前后指定字符串(不填默认空格))                    |      str.strip(字符串)       |
|                          统计字符串中某字符串出现的次数                          |      str.count(字符串)       |
|                               统计字符串字符的个数                               |         len(字符串)          |

#### **`+`拼接**

```python
print("学IT来黑马" + "月薪过one")
```

> 学IT来黑马月薪过one

#### `*`重复输出

```python
print("123" * 3)
```

> 123123123

### 序列切片

```python
# 对tuple进行切片，从头开始，到尾结束，步长1
my_tuple = (0, 1, 2, 3, 4, 5, 6)
result2 = my_tuple[:]     # 起始和结束不写表示从头到尾，步长为1可以省略
print(f"结果1：{result2}")

# 对str进行切片，从头开始，到4结束，步长2
my_str = "01234567"
result3 = my_str[:4:2]
print(f"结果2：{result3}")

# 对str进行切片，从头开始，到最后结束，步长-1
my_str = "01234567"
result4 = my_str[::-1]          # 等同于将序列反转了
print(f"结果3：{result4}")

# 对列表进行切片，从3开始，到1结束，步长-1
my_list = [0, 1, 2, 3, 4, 5, 6]
result5 = my_list[3:1:-1]
print(f"结果4：{result5}")

```

> 结果1：(0, 1, 2, 3, 4, 5, 6)
> 结果2：02
> 结果3：76543210
> 结果4：[3, 2]

### 集合

```python
# 定义集合
my_set = {"传智教育", "黑马程序员", "itheima", "传智教育", "黑马程序员", "itheima", "传智教育", "黑马程序员", "itheima"}
my_set_empty = set()        # 定义空集合
print(f"my_set的内容是：{my_set}, 类型是：{type(my_set)}")
print(f"my_set_empty的内容是：{my_set_empty}, 类型是：{type(my_set_empty)}")

# 添加新元素
my_set.add("Python")
my_set.add("传智教育")      #
print(f"my_set添加元素后结果是：{my_set}")
# 移除元素
my_set.remove("黑马程序员")
print(f"my_set移除黑马程序员后，结果是：{my_set}")
# 随机取出一个元素
my_set = {"传智教育", "黑马程序员", "itheima"}
element = my_set.pop()
print(f"集合被取出元素是：{element}, 取出元素后：{my_set}")

# 清空集合, clear
my_set.clear()
print(f"集合被清空啦，结果是：{my_set}")

# 取2个集合的差集
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set3 = set1.difference(set2)
print(f"取出差集后的结果是：{set3}")
print(f"取差集后，原有set1的内容：{set1}")
print(f"取差集后，原有set2的内容：{set2}")

# 消除2个集合的差集
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set1.difference_update(set2)
print(f"消除差集后，集合1结果：{set1}")
print(f"消除差集后，集合2结果：{set2}")
```

> my_set的内容是：{'传智教育', '黑马程序员', 'itheima'}, 类型是：<class 'set'>
> my_set_empty的内容是：set(), 类型是：<class 'set'>
> my_set添加元素后结果是：{'传智教育', '黑马程序员', 'itheima', 'Python'}
> my_set移除黑马程序员后，结果是：{'传智教育', 'itheima', 'Python'}
> 集合被取出元素是：传智教育, 取出元素后：{'黑马程序员', 'itheima'}
> 集合被清空啦，结果是：set()
> 取出差集后的结果是：{2, 3}
> 取差集后，原有set1的内容：{1, 2, 3}
> 取差集后，原有set2的内容：{1, 5, 6}
> 消除差集后，集合1结果：{2, 3}
> 消除差集后，集合2结果：{1, 5, 6}
> 2集合合并结果：{1, 2, 3, 5, 6}
> 合并后集合1：{1, 2, 3}
> 合并后集合2：{1, 5, 6}
> 集合内的元素数量有：5个
> 集合的元素有：1
> 集合的元素有：2
> 集合的元素有：3
> 集合的元素有：4
> 集合的元素有：5
>
> 进程已结束,退出代码0

### 字典

::: v-pre
|       操作       |        举例:已知字典dict        | 注意                             |
| :--------------: | :-----------------------------: | -------------------------------- |
|       定义       | `dict={key1:value,key2:value...}` | key不可重复,不为字典             |
|     数据获取     |            dict[key]            | 不可通过下标索引                 |
|  新增/更新元素   |         dict[key]=value         | key不存在则字典被修改,新增了元素 |
|     删除元素     |          dict.pop(key)          | 返回key的value                   |
|     清空元素     |          dict.claer()           |                                  |
|   获取全部key    |           dict.keys()           |                                  |
| 统计字典元素数量 |            len(dict)            |                                  |
:::

```python
my_dict = {"周杰轮": 99, "林俊节": 88, "张学油": 77}
for key in my_dict:
    print(f"2字典的key是:{key}")
    print(f"2字典的value是：{my_dict[key]}")
```

> 2字典的key是:周杰轮\n字典的value是：99
> 2字典的key是:林俊节\n字典的value是：88
> 2字典的key是:张学油\n字典的value是：77
> ……

字典遍历

```python
dict1 = {'数学': 95, '语文': 89, '英语': 90,'地理':100}
for i in dict1.keys():
    print(i)
#遍历字段的键
for i in dict1.values():
    print(i)
#遍历字段的值
for k,v in dict1.items():
    print(k,v)
#遍历字段的键值对
```

# 文件

## 打开

```python
f = open("D:/测试.txt", "r", encoding="UTF-8")
```

- ==r== 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。

- ==w== 打开一个文件只用于写入。如果该文件已存在则打开文件,并从开头开始编辑,原有内容会被删除。
  如果该文件不存在，创建新文件。

- ==a== 打开一个文件用于追加。如果该文件已存在,新的内容将会被写入到已有内容之后。
  如果该文件不存在，创建新文件进行写入。

## 读取

读取完后指针向后移

- ==一个程序多次调用read,那么下次调用会在上一次调用的尾开始==

- ==读取文件 - read()==
  读取10个字符	f.read(10)
  读取全部内容	f.read()

- ==读取文件 - readLines()==
  读取文件的全部行，封装到列表中		lines = f.readlines()

- ==读取文件 - readline()==
  读取一行         f.redline()

- ==for循环读取文件行==
  for line in f:
  print(f"每一行数据是:{line}")

## 写入

```python
# write写入
f.write("Hello World!!!")       # 内容写入到内存中
# flush刷新
f.flush()                       # 将内存中积攒的内容，写入到硬盘的文件中
```

```python
# 1.打开文件,通过a模式打开即可
# a模式，文件不存在会创建文件
# a模式，文件存在会在最后，追加写入文件
f = open('python.txt','a',encoding="UTF-8")
# 2.文件追加写入
f.write('hello world')
# 3. 内容刷新  
f.flush()   # close()内置了flush的功能
```

## 关闭

- f.close()

- ```python
  with open("D:/测试.txt", "r", encoding="UTF-8") as f:
      for line in f:
          print(f"每一行数据是：{line}")
  # 执行完后自动关闭文件
  ```

# 异常-模块-包

## 异常

- 基本捕获语法

```python
try:
	f = open("D:/abc.txt", "r", encoding="UTF-8")
except:
	print("出现异常了，因为文件不存在，我将open的模式，改为w模式去打开")
	f = open("D:/abc.txt", "w", encoding="UTF-8")
```

- 捕获指定的异常

```python
try:
     print(name)
     # 1 / 0
except NameError as e:
     print("出现了变量未定义的异常")
     print(e)
# name 'name' is not defined
```

- 捕获多个异常

```python
try:
     # 1 / 0
     print(name)
except (NameError, ZeroDivisionError) as e:
     print("出现了变量未定义 或者 除以0的异常错误")
# 未正确设置捕获异常类型，将无法捕获异常
```

- 捕获所有异常

```python
try:
    f = open("D:/123.txt", "r", encoding="UTF-8")
except Exception as e:
    print("出现异常了")
    f = open("D:/123.txt", "w", encoding="UTF-8")
else:
    print("好高兴，没有异常。")
finally:
    print("我是finally，有没有异常我都要执行")
    f.close()
```

## 模块

- 模块的概念

  Python 模块（Module），是一个 Python 文件，以.py结尾，模块能定义函数，类和变量，模块里也能包含可执行的代码.

- 模块的导入

  > 一般写在文件开头部分

  ```python
  [from 模块名] import [模块|类|变量|函数|*] as[别名]
  ```

  常用的组合形式如：

  - import 模块名
  - from 模块名 import 类、变量、方法等
  - from 模块名 import *
  - import 模块名 as 别名
  - from 模块名 import 功能名 as 别名

  ```python
  #导入时间模块
  import time
  time.sleep(1)

  from time impart sleep
  sleep(1)

  from time impart *
  sleep(1)

  import time as sl
  sl(1)

  from time import as sl
  sl(1)
  ```

- 自定义模块

  - 导入自定义模块使用   	 my_module1是自己写的py文件包含test函数

  ```python
  import my_module1
  from my_module1 import test
  test(1, 2)
  ```

  - 导入不同模块的同名功能  	调用函数优先使用后导入的

  ```python
  from my_module1 import test
  from my_module2 import test
  test(1, 2)
  ```

  - __main__变量		  只有当程序是直接执行的才会进入if内部，如果是被导入的，则if无法进入
  - 模块写入:

  ```python
  if __name_ == '__main__':
  	test(1, 2)
  ```

  在模块文件运行test(1,2)正常运行

  - __all__变量
    如果一个模块文件中有'**all**'变量,当使用from xxx import *导入时,只能导入这个列表中的元素
    ```python
    ```

  **all** = ['test_A']
  def test_A():
  print('testA')
  def test_B():
  print('testB')

  ```
  ```

- python包

  从物理上看,包就是一个文件夹,在该文件夹下包含了一个__init__.py文件,该文件夹可用于包含多个模块文件
  从逻辑上看,包的本质依然是模块.

  - 自定义包

    import 包名.模块名		导入

    包名.模块名.目标			使用

    __main__  写在 __init__文件里

  - 第三方包

    命令提示符程序，在里面输入：
    pip install 包名称
    即可通过网络快速安装第三方包

    连接国内的网站进行包的安装：
    pip install -i <https://pypi.tuna.tsinghua.edu.cn/simple> 包名称

# 综合案例

## json

### 格式

json数据的格式可以是

```python
{"name":"admin","age":18}
[{"name":"admin","age":18},{"name":"root","age":16},("name":"张三","age":20}]
```

### 转换

Python数据和Json数据的相互转化

- 导入json模

  ```python
  import json
  ```
- 准备符合格式json格式要求的python数据

  ```python
  data = [{"name": "老王", "age": 16}, {"name": "张三", "age": 20}]
  ```
- 通过 json.dumps(data) 方法把python数据转化为了 json数据
  ```python
  data = json.dumps(data)
  data = json.dumps(data, ensure_ascii=False)# 展示中文
  ```
- 通过 json.loads(data) 方法把json数据转化为了 python数据

  ```python
  data =json.loads(data)
  ```

## pyecharts模块

# 面向对象

## 类和方法

### 创建类

包含==成员属性==和==成员方法(函数)==

```python
class Student:
    name = None
    age = None
    address = None
    def __init__(self,name,age,address):
        self.name = name
        self.age = age
        self.address = address
    def __str__(self):
		return f"Student类对象，name:{self.name}, age:{self.age}"
	def __lt__(self, other):
		return self.age < other.age
    def show(self):
        print(f"姓名{self.name}\t年龄{self.age}\t地址{self.address}")
s1 = Student("张三",18,"中国")
s2 = Student("张三",18,"中国")
```

### 魔术方法:

- ==__init__== 构造方法,可用于创建类对象的时候设置初始化行为		实例化先执行init函数,可传参数
- ==__str__==  用于实现类对象转字符串的行为					                  print(s1)打印函数返回值
- ==__lt__==    用于2个类对象进行小于或大于比较				                print(s1>s2)打印函数返回值
- ==__le__==   用于2个类对象进行小于等于或大于等于比较			     ....
- ==__eq__== 用于2个类对象进行相等比较					                       ....

## 封装

定义私有成员的方式非常简单，只需要：

- ==私有成员变量：==变量名以__开头（2个下划线
- ==私有成员方法：==方法名以__开头（2个下划线）

特性：

- 类对象无法访问私有成员
- 类中的其它成员可以访回私有成员

## 继承

### 定义

继承就是一个类，继承另外一个类的成员变量和成员方法.

### 语法

```python
class 类(父类[, 父类2, ......, 父类N]):
    类内容体
```

子类构建的类对象，可以:

- 有自己的成员变量和成员方法
- 使用父类的成员变量和成员方法

### 单继承和多继承

- 单继承：一个类集成另一个类

- 多继承：一个类继承多个类，按照顺序从左向右依次继承

  *多继承中，如果父类有同名方法或属性，先继承的优先级高于后继承

### pass关键字的作用

pass是占位语句，用来保证函数 （方法）或类定义的完整性，表示无内容，空的意思

## 类型注解

### 变量

- var是变量

```python
var_1: int = 10
var_2: str = "itheima"
var_3: bool = True
```

- 容器类型详细注解

```python
my_list: list = [1, 2, 3]
my_tuple: tuple = (1, 2, 3)
my_dict: dict = {"itheima": 666}
# 也可以注解类对象
```

- 可以用注释注解

```python
var_1 = random.randint(1, 10)   # type: int
var_2 = json.loads('{"name": "zhangsan"}')  # type: dict[str, str]
```

- 类型注解的限制

```python
var_4: int = "itheima"
var_5: str = 123
# 不会报错，只会警告
```

- 联合注解

```python
# 使用Union类型，必须先导包
from typing import Union
my_list: list[Union[int, str]] = [1, 2, "itheima", "itcast"]
```

### 函数

- 对形参进行注解

```python
 def add(x: int, y: int):
 return x + y
```

- 对返回值进行类型注解

```python
  def func(data: list) -> list:
  return data
```

## 多态

- **定义**

  多态,指的是:多种状态,即完成某个行为时,使用不同的对象会得到不同的状态。

  同样的行为（函数），传入不同的对象，得到不同的状态
  彩

- **例**
  函数(方法)形参声明接收父类对象
  实际传入父类的子类对象进行工作

  以父类做定义声明
  以子类做实际工作
  用以获得同一行为,不同状态

- **抽象类（接口）**
  父类用来确定有哪些方法
  具体的方法实现，由子类自行决定
  这种写法，就叫做抽象类（也可以称之为接口）
  抽象类：含有抽象方法的类称之为抽象类
  抽象方法:方法体是空实现的(pass)称之为抽象方法

::: danger
  image-20230724204305880.png 图片已丢失
:::

# SQL

# 高阶用法

## 闭包

- 什么是闭包
  定义双层嵌套函数,内层函数可以访问外层函数的变量
  将内存函数作为外层函数的返回,此内层函数就是闭包函数

- 闭包的好处和缺点

  优点:不定义全局变量,也可以让函数持续访问和修改一个外部变量
  优点:闭包函数引用的外部变量,是外层函数的内部变量。作用域封闭难以被误
  操作修改
  缺点：额外的内存占用

- nonlocal关键字的作用
  在闭包函数(内部函数中)想要修改外部函数的变量值
  需要用nonlocal声明这个外部变量

```python
def account_create(initial_amount=0):
    def atm(num, deposit=True):
        nonlocal initial_amount
        if deposit:
            initial_amount += num
            print(f"存款：+{num}， 账户余额：{initial_amount}")
        else:
            initial_amount -= num
            print(f"取款：-{num}， 账户余额：{initial_amount}")

    return atm

atm = account_create()

atm(100)
atm(200)
atm(100, deposit=False)
```

## 装饰器

装饰器就是使用创建一个闭包函数，在闭包函数内调用目标函数。
可以达到不改动目标函数的同时,增加额外的功能。

```python
def outer(func):
    def inner():
        print("我睡觉了")
        func()
        print("我起床了")

    return inner

@outer
def sleep():
    import random
    import time
    print("睡眠中......")
    time.sleep(random.randint(1, 5))

sleep()
```

## 设计模式

设计模式是一种编程套路，可以极大的方便程序的开发。
最常见、最经典的设计模式，==面向对象==
除了面向对象外,在编程中也有很多既定的套路可以方便开发,我们称之为设计模式:

- 单例、工厂模式
- 建造者、责任链、状态、备忘录、解释器、访问者、观察者、中介、模板、代理模式
- 等等模式

### 单例模式

单例模式(Singleton Pattern)是一种常用的软件设计模式,该模式的主要目的是确保某一个类只有一个实例存在。
在整个系统中,某个类只能出现一个实例时,单例对象就能派上用场。

节省内存、节省创建对象的开销

- 定义：保证一个类只有一个实例，并提供一个访问它的全局访问点
- 适用场景:当一个类只能有一个实例,而客户可以从一个众所周知的访问点访问它时。

::: danger
image-20230802203328559.png 图片已丢失
::: 

### 工厂模式
::: danger
image-20230802203825529.png 图片已丢失
:::

- 使用工厂类的get_person()方法去创建具体的类对象

优点：

- 大批量创建对象的时候有统一的入口，易于代码维护
- 当发生修改，仅修改工厂类的创建方法即可
- 符合现实世界的模式,即由工厂来制作产品(对象)

## 多线程

现代操作系统比如Mac OS x, UNIX, Linux, Windows等,都是支持"多任务"的操作系统。
==进程：==就是一个程序，运行在系统之上，那么便称之这个程序为一个运行进程，并分配进程ID方便系统管理。
==线程：==线程是归属于进程的,一个进程可以开启多个线程,执行不同的工作,是进程的实际工作最小单位。

进程之间是内存隔离的,即不同的进程拥有各自的内存空间。
线程之间是内存共享的，线程是属于进程的。

==并行执行==的意思指的是同一时间做不同的工作。
进程之间就是并行执行的，操作系统可以同时运行好多程序，这些程序都是在并行执行。
除了进程外,线程其实也是可以并行执行的。
也就是比如一个Python程序,其实是完全可以做到:
一个线程在输出：你好
一个线程在输出：Hello
像这样一个程序在同一时间做两件乃至多件不同的事情，我们就称之为：多线程并行执行

多线程编程 ==threading模块==

```python
import threading

thread_obj = threading.Thread([group [, target name [,ags [, kwmm]]]]])
- group：暂时无用，未来功能的预留参数，
- target：执行的目标任务名(传函数名)
- args：以元组的方式给执行任务传参
- kwargs：以字典方式给执行任务传参
- name：线程名，一般不用设置

# 启动线程，让线程开始工作
thread_obj.start()
```

> ```python
> import time
> import threading
>
> def sing(msg):
>     print(msg)
>     time.sleep(1)
>
>
>
> def dance(msg):
>     print(msg)
>     time.sleep(1)
>
>
> if __name__ == '__main__':
>     # 创建一个唱歌的线程
>     sing_thread = threading.Thread(target=sing, args=("我要唱歌 哈哈哈", ))
>     # 创建一个跳舞的线程
>     dance_thread = threading.Thread(target=dance, kwargs={"msg": "我在跳舞哦 啦啦啦"})
>
>     # 让线程去干活吧
>     sing_thread.start()
>     dance_thread.start()
> ```

## 网络编程

pass

## 正则表达式

==正则表达式==,又称规则表达式(Regular Expression),是使用单个字符串来描述、匹配某个句法规则的字符串,常被用
来检索、替换那些符合某个模式(规则)的文本。
简单来说,正则表达式就是使用:字符串定义规则,并通过规则去验证字符串是否匹配。
比如,验证一个字符串是否是符合条件的电子邮箱地址,只需要配置好正则规则,即可匹配任意邮箱。
比如通过正则规则:==(^[\w-]+(.[\w-]+)*@[\w]+(.[\w-]+)+$)== 即可匹配一个字符串是否是标准邮箱格式

Python正则表达式，使用==re模块==，并基于re模块中三个基础方法来做正则匹配。
分别是：==match==、==search==、==findall==三个基础方法
re.match(匹配规则，被匹配字符串）
从被匹配字符串开头进行匹配，匹配成功返回匹配对象（包含匹配的信息），匹配不成功返回空。

```python
import re

s = "python itheima python python"
# match 从头匹配(开头匹配失败就返回none)
result = re.match("python", s)
print(result) 			# <re.Match object; span=(8, 6), match='python'>
print(result.span())	# (0,6)
print(result.group()) 	# python
# search 搜索匹配(从头找，找到第一个就停止，找不到返回None)

result = re.search("python2", s)
print(result) 
# findall 搜索全部匹配,返回全部找到的列表
result = re.findall("python", s)
print(result) # ['python','python']
```

**字符匹配:**

| 字符  | 功能                                                               |
| :---: | :----------------------------------------------------------------- |
|   .   | 匹配任意1个字符(除了\n,.匹配点本身)                                |
|  []   | 匹配[]中列举的字符，可以用范围[a-zA-z0-9]，或者单个字符[aceDFG135] |
|  \d   | 匹配数字，即0-9                                                    |
|  \D   | 匹配非数字                                                         |
|  \s   | 匹配空白，即空格、tab键                                            |
|  \S   | 匹配非空白                                                         |
|  \w   | 匹配单词字符，即a-z、A-Z、0-9、_                                   |
|  \W   | 匹配非单词字符                                                     |

**数量匹配:**

| 字符  | 功能                              |
| :---: | :-------------------------------- |
|   `*`   | 匹配前一个规则的字符出现0至无数次 |
|   `+`   | 匹配前一个规则的字符出现1至无数次 |
|   `?`   | 匹配前一个规则的字符出现0次或1次  |
|  `{m}`  | 匹配前一个规则的字符出现m次       |
| `{m,}`  | 匹配前一个规则的字符出现最少m次   |
| `{m,n}` | 匹配前一个规则的字符出现m到n次    |

**边界匹配:**

| 字符  | 功能               |
| :---: | :----------------- |
|   ^   | 匹配字符串开头     |
|   $   | 匹配字符串结尾     |
|  \b   | 匹配一个单词的边界 |
|  \B   | 匹配非单词边界     |

**分组匹配:**

| 字符  | 功能                     |
| :---: | :----------------------- |
|       |                          | 匹配左右任意一个表达式 |
| （）  | 将括号中字符作为一个分组 |

1. 匹配邮箱地址： 正则表达式：`^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$` 要求总结：匹配以字母、数字、下划线、横线组成的用户名，然后是 "@" 符号，接着是以字母、数字、下划线、横线组成的域名，最后是一个或多个带有字母、数字、下划线、横线的子域名。
2. 匹配 URL： 正则表达式：`^https?://[\w-]+(\.[\w-]+)+(/[\w-.%&=]*)?$` 要求总结：匹配以 "http://" 或 "https://" 开头的 URL，包含一个或多个字母、数字、下划线、横线组成的域名，后面可以跟有路径部分，路径部分可以包含字母、数字、下划线、横线、斜杠、问号、百分号和等号。
3. 提取文本中的电话号码： 正则表达式：`\d{3}-\d{8}|\d{4}-\d{7}` 要求总结：匹配形如 "xxx-xxxxxxxx" 或 "xxxx-xxxxxxx" 的电话号码，其中 x 表示一个数字。

```python
# 案例1
import re

pattern = r'^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$'
email = 'example@example.com'

if re.match(pattern, email):
    print("邮箱地址有效")
else:
    print("邮箱地址无效")
```

# 打包

auto-py-to-exe
