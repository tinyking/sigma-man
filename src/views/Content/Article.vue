<template>
  <div>
    <title>123</title>
    <article class="markdown">
      <h1>
        介绍
        <a class="edit-button" target="_blank" href="https://github.com/ant-design/ant-design-landing/edit/master/docs/introduce.md">
          <span role="img" aria-label="edit" class="anticon anticon-edit">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="edit"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
              ></path>
            </svg>
          </span>
        </a>
      </h1>
      <div>
        <div class="" style="">
          <div class="toc-affix ant-anchor-wrapper" style="max-height: calc(100vh - 16px);">
            <div class="ant-anchor">
              <div class="ant-anchor-ink"><span class="ant-anchor-ink-ball" style="top: 9px;"></span></div>
              <div class="bisheng-toc-h2 ant-anchor-link"><a class="ant-anchor-link-title" href="#作用" title="">作用</a></div>
              <div class="bisheng-toc-h2 ant-anchor-link">
                <a class="ant-anchor-link-title" href="#构成元素" title="">构成元素</a>
              </div>
              <div class="bisheng-toc-h2 ant-anchor-link">
                <a class="ant-anchor-link-title" href="#设计资源" title="">设计资源</a>
              </div>
              <div class="bisheng-toc-h2 ant-anchor-link">
                <a class="ant-anchor-link-title" href="#谁在使用" title="">谁在使用</a>
              </div>
              <div class="bisheng-toc-h2 ant-anchor-link">
                <a class="ant-anchor-link-title" href="#如何贡献" title="">如何贡献</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="markdown">
        <div class="file-logo">
          <div class="ant-logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" height="100%" />
          </div>
          <span>+</span>
          <div class="landing-logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/SVDdpZEbAlWBFuRGIIIL.svg" height="100%" />
          </div>
        </div>
        <p>
          Ant Design Landing 是针对产品首页的解决方案，我们秉承
          <a href="https://ant.design">Ant Design</a>
          的
          <a href="https://ant.design/docs/spec/introduce-cn">设计价值观</a>
          ，延用
          <a href="https://ant.design">Ant Design</a>
          的
          <a href="http://ant.design/docs/spec/proximity-cn">设计原则</a>
          ，可以快速搭建出你想要的首页，进一步提升你的工作效率。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多首页模块的代码实现，阐述首页(Landing
          page)的最佳实践，也十分期待你的参与和共建。
        </p>
        <h2 id="作用">
          <span>作用</span>
          <a href="#作用" class="anchor">#</a>
        </h2>
        <ul>
          <li><p>激发用户的探索兴趣，继续深入访问。</p></li>
          <li><p>引导用户直接购买产品或服务。</p></li>
          <li><p>用户通过提供个人信息或注册来交换一些试用与服务。</p></li>
          <li><p>让用户分享、评论或产生其它一些互动。</p></li>
        </ul>
        <h2 id="构成元素">
          <span>构成元素</span>
          <a href="#构成元素" class="anchor">#</a>
        </h2>
        <ul>
          <li><p>全局导航</p></li>
          <li>
            <p>首屏阐述 Banner:</p>
            <blockquote>
              <ul>
                <li>
                  <p>USP(unique selling proposition) 产品卖点或价值主张: 产品 logo，名称，slogan， 媒体展示(背景，图片，视频)。</p>
                </li>
                <li><p>CTA(Call-To-Action): 行动按钮，登录/ 注册。</p></li>
              </ul>
            </blockquote>
          </li>
          <li>
            <p>分点阐述:</p>
            <blockquote>
              <ul>
                <li><p>产品特色/优势。</p></li>
                <li><p>使用方法 + 核心功能 + 解决方案</p></li>
              </ul>
            </blockquote>
          </li>
          <li><p>合作伙伴/客户: 成功案例，客户展示，客户证言。</p></li>
          <li><p>价格表</p></li>
          <li><p>团队展示</p></li>
          <li><p>联系我们</p></li>
          <li><p>全局页脚</p></li>
        </ul>
        <h3 id="动效">
          <span>动效</span>
          <a href="#动效" class="anchor">#</a>
        </h3>
        <p>
          延用
          <a href="https://motion.ant.design">Ant Motion</a>
          动画组件与规范，提供基本的动画组件与 banner 切换效果，以
          <code>scroll-anim</code>
          组件为基本动画框架，随滚动来完成页面的进出场效果。
        </p>
        <ul>
          <li>
            <p><a href="https://motion.ant.design/components/tween-one">单元素动效执行组件</a></p>
          </li>
          <li>
            <p><a href="https://motion.ant.design/components/animate">样式进出场组件</a></p>
          </li>
          <li>
            <p><a href="https://motion.ant.design/components/queue-anim">队列进出场组件</a></p>
          </li>
          <li>
            <p><a href="https://motion.ant.design/components/texty">文字动效组件</a></p>
          </li>
          <li>
            <p><a href="https://motion.ant.design/components/scroll-anim">随滚动执行效果组件</a></p>
          </li>
          <li>
            <p><a href="https://motion.ant.design/components/banner-anim">Banner 切换效果组件</a></p>
          </li>
        </ul>
        <h2 id="设计资源">
          <span>设计资源</span>
          <a href="#设计资源" class="anchor">#</a>
        </h2>
        <p>我们提供完善的设计规范、最佳实践和设计资源文件 Sketch，来帮助业务快速设计出高质量的产品原型。</p>
        <h2 id="谁在使用">
          <span>谁在使用</span>
          <a href="#谁在使用" class="anchor">#</a>
        </h2>
        <p>目前 Ant Design 旗下产品全部使用 Landing 搭建，如果你和你的组织使用了这个产品，欢迎到 Ant Design Landing Users 留言。</p>
        <h3 id="For-设计者">
          <span>For 设计者</span>
          <a href="#For-设计者" class="anchor">#</a>
        </h3>
        <p>如果你是产品或设计师，你可以找到相关模板或各模块的 Sketch 设计资源，大幅度提升设计效率和沟通效率。</p>
        <h3 id="For-开发者">
          <span>For 开发者</span>
          <a href="#For-开发者" class="anchor">#</a>
        </h3>
        <p>
          如果你是工程师，只需将你下载的以『Home』为名的文件包替换掉你的项目里的首页即可，具体介绍请查看
          <a href="/docs/use/getting-started-cn">使用文档</a>
          。
        </p>
        <h2 id="如何贡献">
          <span>如何贡献</span>
          <a href="#如何贡献" class="anchor">#</a>
        </h2>
        <p>
          我们欢迎任何形式的贡献，有任何建议或意见，请给我们
          <a href="/-cn">提问</a>
          。
        </p>
      </section>
      <section class="markdown api-container"></section>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Article extends Vue {}
</script>

<style scoped></style>
