---
layout: page
sidebar: true
---

<script setup>
import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus'
</script>

<div class="main-container">
  <div class="note-tip">
    <span>笔记均为自己整理，复习使用，如有错误，请指正。</span>
  </div>
  <div class="timeline-title">
    个人学习时间线（部分）
  </div>
  <div class="timeline-flex">
    <div class="timeline-wrapper">
      <el-timeline>
        <el-timeline-item timestamp="2022.09-2023.06(大一)" placement="top" color="#409EFF">
          <el-card class="timeline-card">
            学习C语言和其他计算机基础课，学习markdown，用阿里云服务器搭建QQ机器人部署ChatGPT
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023.07-2023.08(大一下暑假)" placement="top" color="#67C23A">
          <el-card class="timeline-card">
            学习Python(基础 + 爬虫)<a href="Python" class="note">笔记</a>，预习数据结构
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023.09-2024.01(大二上)" placement="top" color="#F56C6C">
          <el-card class="timeline-card">
            学习C++、啃《C++ Primer plus》，用c++做了几个
            <a href="/projects/MFCGames" target="_blank" rel="noopener">mfc游戏</a>。学习数据结构(练习题: <a href="https://github.com/2710165659/Data-Structure-Practice-Exercises" target="_blank" rel="noopener">点我</a>)
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024.01-2024.02(大二上寒假)" placement="top" color="#E6A23C">
          <el-card class="timeline-card">
            学习算法<a href="算法" class="note">笔记</a>，打比赛(蓝桥杯国三)，比赛后学习前端三件套(笔记写在了网页里，网页文件丢失)
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024.03-2024.06(大二下)" placement="top" color="#909399">
          <el-card class="timeline-card">
            继续学习前端，完善算法知识，准备暑期实习
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024.07-2024.08(大二下暑假)" placement="top" color="#409EFF">
          <el-card class="timeline-card">
            突击高教杯数学建模大赛，获奖省三
            学习Java基础<a href="java基础知识" class="note">笔记</a>+框架(ssm)<a href="java框架学习" class="note">笔记</a>,
            学习Vue<a href="Vue" class="note">笔记</a>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024.09-2025.01(大三上)" placement="top" color="#67C23A">
          <el-card class="timeline-card">
            查漏补缺，学习Java，同时学习Docker<a href="Docker" class="note">笔记</a>、Linux<a href="Linux" class="note">笔记</a>
            做项目，并参加计算机设计大赛(两个省二)
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2025.02-至今(大三下-实习)" placement="top" color="#F56C6C">
          <el-card class="timeline-card">
            东软公司实习，进一步学习Sql<a href="Sql" class="note">笔记</a>和Java基础，并做了一些别的玩意，如: <a href="https://github.com/2710165659/OsuTool" target="_blank">这个</a>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="timeline-sidebar">
      <div class="sidebar-title">推荐学习网站</div>
      <div class="sidebar-content">
        编程入门：<a href="https://www.nowcoder.com/exam/oj?page=1&tab=%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0%E7%AF%87&topicId=291" target="_blank">牛客</a>
        <hr>
        java学习路线: <a href="https://javaguide.cn/home.html" target="_blank" >javaguide</a><br>
        java知识体系: <a href="https://pdai.tech/" target="_blank" >Java全栈体系</a><br>
        <hr>
        正则(理解用): <a href="https://jex.im/regulex/#!flags=&re=" target="_blank" >regulex</a><br>
        正则表达式: <a href="https://regexr-cn.com/" target="_blank" >regexr-cn</a><br>
        <hr>
        算法学习路线: <a href="https://oi.wiki/" target="_blank" >oi wiki</a><br>
        算法刷题: <a href="https://www.luogu.com.cn/" target="_blank" >洛谷</a><br>
        <hr>
        git-branch: <a href="https://learngitbranching.js.org/?locale=zh_CN" target="_blank" >git-branch</a><br>
      </div>
    </div>
  </div>
</div>

<style scoped>
.main-container {
  margin: 12px 0;
  padding: 16px 12px;
}
.note-tip {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 24px;
}
.note-tip span {
  font-size: 16px;
  color: #888;
}
.timeline-title {
  margin: 0 auto 32px auto;
  max-width: 700px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
}
.timeline-flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
}
.timeline-wrapper {
  max-width: 700px;
  margin-left: 0;
  margin-right: auto;
  padding: 0 12px;
  flex: 1 1 0%;
}
.timeline-sidebar {
  width: 240px;
  min-width: 180px;
  background: #fafbfc;
  border-radius: 10px;
  box-shadow: 0 2px 12px #0001;
  padding: 18px 16px;
  margin-left: 0;
}
.sidebar-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #409EFF;
  letter-spacing: 1px;
}
.sidebar-content {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
}
.timeline-card {
  min-width: 220px;
  min-height: 60px;
  border-radius: 12px;
  box-shadow: 0 2px 12px #0001;
  border: none;
}
a {
  color: #409EFF;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s;
}
a:hover {
  color: #66b1ff;
  text-decoration: underline;
}
a.note {
  color: #e74c3c;
  font-weight: bold;
  background: #fff3e0;
  border-radius: 4px;
  padding: 2px 6px;
  box-shadow: 0 1px 4px #e74c3c22;
}
a.note:hover {
  color: #c0392b;
  background: #ffe0d6;
}
::v-deep(.el-timeline-item__node) {
  box-shadow: 0 0 0 4px #fff, 0 2px 8px #0002;
}
</style>

