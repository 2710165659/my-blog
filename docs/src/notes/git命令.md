---
outline: 1
---
# 仓库操作
`git init`用当前目录作为Git仓库
`git init newDir`在指定的目录下生成仓库
`git clone <url> [directory]` 从Git仓库拷贝项目
# Git基本操作
## 查看版本
`git -v`
## git config配置信息
- `git config --global user.name '你的用户名'`
- `git config --global user.email '你的邮箱'
## git log查看日志
`git log`
`git log --oneline`
–oneline ：查看历史记录的简洁版本
–graph ：查看历史中什么时候出现了分支、合并
–reverse ：逆向显示所有日志
–author ：查找指定用户的提交日志
–since、–before、 --until、–after： 指定筛选日期
–no-merges ：选项以隐藏合并提交
# 文件操作
## git add添加文件到缓存命令
- `git add <文件名>`添加指定文件
- `git add .` 添加所有文件
- `git add *.java` 添加java文件
## git status查看文件的状态命令
- 添加暂存文件的命令：`git add <文件名>`
- 放弃未暂存文件的修改命令：`git checkout – <文件名>`
- 将被修改的文件暂存并提交的命令：`git commit -a`
## git status -s 来查看简写的状态
 - M - 被修改
 - A - 被添加
 - D - 被删除
 - R - 重命名
 - ?? - 未被跟踪
## git diff查看更新的详细信息命令
- 尚未缓存的改动：`git diff`
- 查看已缓存的改动： `git diff --cached`
- 查看已缓存的与未缓存的所有改动：`git diff HEAD`
- 显示摘要而非整个 diff：`git diff --stat`
## git commit提交命令
新增文件必须先add，修改文件可以-am省去add
-m选项，以在命令行中提供提交注释，-a添加文件(省去add)
`git commit -m "第一次版本提交"`
`git commit -am "第一次版本提交"`
## git reset HEAD取消缓存命令
`git reset HEAD test.txt`用于取消已缓存的内容test.txt
简而言之，执行 git reset HEAD 以取消之前 git add 添加
## git rm删除命令
如果只是简单地从工作目录中手工删除文件，运行 git status 时就会在 Changes not staged for commit 的提示。要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除，然后提交。可以如下使用：
- `git rm <file>`
如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 -f
- `git rm -f <file>`
如果把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除，使用 --cached 选项即可
- `git rm --cached <file>`
可以递归删除，即如果后面跟的是一个目录做为参数，则会递归删除整个目录中的所有子目录和文件：
- `git rm –r *`
## git mv移动或重命名命令
`git mv test.txt newtest.txt` 移动或重命名一个文件、目录、软连接
## 文件误删除
`git restore <文件名>`从存储区恢复文件
`git reset --hard <版本号>`重置，从某次提交记录恢复（会丢失之后的提交）
`git revert <版本号>`还原，还原到之前的提交（不会丢失之后的提交）
# 分支操作
`git branch`查看分支
`git branch -v`查看分支及版本号
`git branch <分支名>`创建分支
`git checkout <分支名>`切换分支
`git checkout -b <分支名|标签>`创建并切换分支
`git branch -d <分支名>`删除分支
`git merge <分支名>`将任意分支合并到到当前分支中
# 标签操作
`git tag`查看标签
`git tag 标签 版本号`添加标签
`git log 标签`
# 远程仓库
- **git remote add**：添加远程仓库
- **git remote**：查看当前的远程仓库
- **git fetch**、**git pull**：提取远程仓仓库
- **git push**：推送到远程仓库
- **git remote rm**：删除远程仓库
`git remote add [alias] [url]`添加一个远程仓库  参数alias为别名,url为远程仓库的地址
`git remote`查看当前有哪些远程仓库
`git pull [options] [<repository> [<refspec>…]]`
`git remote rm <别名>`删除远程仓库
1. git fetch：相当于是从远程获取最新版本到本地，不会自动合并。
2. git pull：相当于是从远程获取最新版本并merge到本地。
3. git push：推送你的新分支与数据到某个远端仓库命令，格式`git push [alias] [branch]`


# 远程仓库和本地的通信
`git remote add 别名 [url]` 将本地仓库关联到远程仓库
`git push -u 别名 分支名` 上传分支到远程仓库，第一次上传分支需要加-u

`git pull 别名 分支名`拉取分支到本地

`git remote -v` 列出所有远程仓库及别名
`git remote rename origin myremote` 命令来重命名远程仓库别名。例如，如果你想将 `origin` 改为 `myremote`

`git merge <分支名>`将任意分支合并到到当前分支中

`git push 远程仓库别名 --delete 分支名`从远程仓库删除分支

同步分支
`git fetch origin`
查看分支`git branch -r`
拉取分支`git checkout -b 本地分支名 origin/远程分支名`

`git pull --rebase`拉取其他文件相同提交上以本地为主

`git rebase 分支1 分支2` 按照分支1commit 分支2commit顺序
`git branch 分支1 分支2`基于分支2创建分支1 -f表示强制创建