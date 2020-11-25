<template>
  <div class="nav-header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a herf="javascript:;">小米商城</a>
          <a herf="javascript:;">MUI</a>
          <a herf="javascript:;">云服务</a>
          <a herf="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a herf="javascript:;">登录</a>
          <a herf="javascript:;">注册</a>
          <a herf="javascript:;" class="cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-head">
      <div class="container">
        <div class="img-logo">
          <a href="/#/index"></a>
        </div>
        <div class="pro-tab">
          <div class="pro-tab-item">
            <span class="item-title">小米手机</span>
            <div class="children">
              <ul>
                <li>
                  <img class="pro-img" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">￥1799.00元</div>
                </li>
                <li>
                  <img class="pro-img" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">￥1799.00元</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="pro-tab-item">
            <span class="item-title">RedMi红米</span>
          </div>
          <div class="pro-tab-item">
            <span class="item-title">电视</span>
          </div>
        </div>
        <div class="pro-search">
          <input type="text" name="keyword">
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    name:'nav-header'
  }
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/base.scss';
@import '~@/assets/scss/mixin.scss';
@import '~@/assets/scss/config.scss';

.nav-header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color:#333333;
    color:#B0B0B0;
    .container {
      @include flex();
      .topbar-menu {
        a {
          display: inline-block;
          margin-right: 17px;
          color:#B0B0B0;
          cursor: pointer;
        }
      }
      .topbar-user {
        a {
          display: inline-block;
          margin-right: 17px;
          color:#B0B0B0;
          cursor: pointer;
        }
        .cart {
          width:110px;
          background-color: $colorA;
          text-align: center;
          color: #ffffff;
          .icon-cart {
            @include bgImg(16px, 16px, '~@/assets/imgs/icon-cart-checked.png', 16px 16px);
            margin-right: 4px;
            margin-top: -6px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .nav-head {
    .container{
      height: 112px;
      @include flex();
      position: relative;
      .img-logo {
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          height: 55px;
          width: 110px;
          transition: all .2s;
          &:before {
            content: '';
            @include bgImg(55px, 55px, '~@/assets/imgs/mi-logo.png', 55px);
          }
          &:after {
            content: '';
            @include bgImg(55px, 55px, '~@/assets/imgs/mi-home.png', 55px);
          }
        }
        &:hover{
          a{
            margin-left: -55px;
            transition: all .2s;
          }
        }
      }
      .pro-tab {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        &-item {
          float: left;
          font-weight: 700;
          font-size: 16px;
          line-height: 112px;
          .item-title {
            display: inline-block;
            line-height: 112px;
            margin-right: 20px;
            &:hover {
              color: $colorA;
              cursor: pointer;
            }
          }
          .children {
            position: absolute;
            width: 1226px;
            top: 112px;
            left: 0px;
            opacity: 0;
            height: 0;
            overflow: hidden;
            transition: all .2s;
            box-shadow: 0 7px 6px 0 rgba(0,0,0,.11);
            ul {
              li {
                float: left;
                height: 220px;
                width: 16.6%;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;
                .pro-img {
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-name{
                  font-weight: 700;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: #333;
                }
                .pro-name{
                  color: $colorA;
                }
                &::before{
                  content: '';
                  display: inline-block;
                  border-left: 1px solid #d7d7d7;
                  height: 100px;
                  position: absolute;
                  right: 0;
                  top: 28px;
                }
              }
            }
          }
          &:hover{
            .children{
              opacity: 1;
              height: 220px;
              border-top: 1px solid #e5e5e5;
            }
          }
        }
      }
      .pro-search{
        height: 50px;
        border: 1px solid #e0e0e0;
        @include flex(center);
        width: 319px;
        padding-left: 15px;
        input {
          border: none;
          border-right: 1px solid #e0e0e0;
          height: 50px;
          width: 264px;
        }
        a {
          margin-left: 15px;
          @include bgImg(18px, 18px, '~@/assets/imgs/icon-search.png', 18px);
        }
      }
    }
  }
}
</style>