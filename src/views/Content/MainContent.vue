<template>
  <div>
    <div class="main-wrapper">
      <a-row>
        <a-col class="main-menu" :xs="24" :sm="24" :md="6" :lg="6" :xl="5" xxl="4">
          <ul class="ant-menu aside-container ant-menu-light ant-menu-root ant-menu-inline" role="menu">
            <li class="ant-menu-item ant-menu-item-only-child ant-menu-item-selected" role="menuitem" style="padding-left: 40px;">
              <a href="/docs/introduce-cn">
                <span>介绍</span>
                <span class="chinese"></span>
              </a>
            </li>
            <li class="ant-menu-submenu ant-menu-submenu-inline ant-menu-submenu-open" role="menuitem">
              <div
                class="ant-menu-submenu-title"
                role="button"
                aria-expanded="true"
                aria-owns="设计指引$Menu"
                aria-haspopup="true"
                style="padding-left: 40px;"
              >
                <h4>设计指引</h4>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
              <ul id="设计指引$Menu" class="ant-menu ant-menu-sub ant-menu-inline" role="menu">
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/guide/type-cn">
                    <span>类型</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/guide/layout-cn">
                    <span>布局</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/guide/header-footer-cn">
                    <span>页头与页尾</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/guide/banner-cn">
                    <span>Banner 首屏</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/guide/content-cn">
                    <span>内容区块</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/guide/examples-cn">
                    <span>组合示例</span>
                    <span class="chinese"></span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="ant-menu-submenu ant-menu-submenu-inline ant-menu-submenu-open" role="menuitem">
              <div
                class="ant-menu-submenu-title"
                role="button"
                aria-expanded="true"
                aria-owns="编辑器教程$Menu"
                aria-haspopup="true"
                style="padding-left: 40px;"
              >
                <h4>编辑器教程</h4>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
              <ul id="编辑器教程$Menu" class="ant-menu ant-menu-sub ant-menu-inline" role="menu">
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/edit/edit-block-cn">
                    <span>编辑器使用介绍</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/edit/video-cn">
                    <span>视频教程</span>
                    <span class="chinese"></span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="ant-menu-submenu ant-menu-submenu-inline ant-menu-submenu-open" role="menuitem">
              <div
                class="ant-menu-submenu-title"
                role="button"
                aria-expanded="true"
                aria-owns="使用教程$Menu"
                aria-haspopup="true"
                style="padding-left: 40px;"
              >
                <h4>使用教程</h4>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
              <ul id="使用教程$Menu" class="ant-menu ant-menu-sub ant-menu-inline" role="menu">
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/use/getting-started-cn">
                    <span>开始使用</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/use/create-react-app-cn">
                    <span>create-react-app 里使用</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/use/umi-cn">
                    <span>umi 里使用</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/use/dva-cli-cn">
                    <span>dva-cli 里使用</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/use/pro-cn">
                    <span>pro 2.x 里使用</span>
                    <span class="chinese"></span>
                  </a>
                </li>
                <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 80px;">
                  <a href="/docs/use/pro-1-x-cn">
                    <span>pro 1.x 里使用</span>
                    <span class="chinese"></span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 40px;">
              <a href="/docs/cases-cn">
                <span>实践案例</span>
                <span class="chinese"></span>
              </a>
            </li>
            <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 40px;">
              <a href="/docs/download-cn">
                <span>设计资源</span>
                <span class="chinese"></span>
              </a>
            </li>
          </ul>
        </a-col>
        <a-col class="main-container" :xs="24" :sm="24" :md="18" :lg="18" :xl="19" :xxl="20">
          <div class="main-animate-wraper">
            <Article />
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <section class="prev-next-nav">
            <a class="next-page" href="/docs/guide/type-cn">
              <span>类型</span>
              <span class="chinese"></span>
              <span role="img" aria-label="right" class="anticon anticon-right footer-nav-icon-after">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  class=""
                  data-icon="right"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                  ></path>
                </svg>
              </span>
            </a>
          </section>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/views/Content/Article.vue';

@Component({ components: { Article } })
export default class MainContent extends Vue {}
</script>

<style scoped></style>
