<template>
  <el-upload
    action
    class="img-uploader"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
  >
    <slot />
    <img v-if="img && !slot" :src="img" class="avatar" />
    <i class="el-icon-circle-plus i" v-if="!img && !slot"></i>
    <p class="p" v-if="!img && !slot">上传图片</p>
  </el-upload>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["uploadSource", "imageUrl"],
  data() {
    return {
      img: this.imageUrl,
      loading: "",
      slot: false,
    };
  },
  watch: {
    imageUrl(val) {
      this.img = val;
    },
  },
  created() {
    if (this.$slots.default) {
      this.slot = true;
    }
  },
  methods: {
    onProgress() {
      this.loading = this.$loading({
        lock: false,
        text: "拼命上传中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
    },

    async uploadImg(file) {
      this.onProgress();
      const url = `${process.env.VUE_APP_UPLOAD_BASEURL}/upload/img?source=${this.uploadSource}`;
      const params = {
        file,
        source: this.uploadSource,
      };
      const { code, data, message } = await this.$http.httpFormData(
        url,
        params,
      );
      this.loading.close();
      if (code == 200) {
        this.img = data.remoteUrl;
        this.$emit("change", data.remoteUrl);
      } else {
        this.$message.error(message);
      }
    },

    beforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const _URL = window.URL || window.webkitURL;
        img.src = _URL.createObjectURL(file);
        img.onload = () => {
          this.uploadImg(file);
          reject(false);
        };
      });
      // const isImage =
      // 	file.type.includes('image/jpeg') ||
      // 	file.type.includes('image/png') ||
      // 	file.type.includes('image/jpg');
      // const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isImage) {
      //     this.$message.error('仅支持JPG、PNG、JPEG格式!');
      // }
      // if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // if (isImage && isLt2M) {
      //     this.uploadImg(file);
      // }
      // return false;
    },
  },
};
</script>

<style lang="less" scoped>
.img-uploader {
  width: 100px;
  height: 100px;
  margin-right: 24px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  background: #f7f7fd;
  border: 1px dashed #e3e3e3;
  border-radius: 4px;
  box-sizing: border-box;
  &:hover {
    border-color: #3582fb;
  }
  .i {
    font-size: 25px;
    margin-top: 26px;
  }
  display: flex;
  justify-content: center;
  p {
    font-size: 12px;
    color: #666879;
    text-align: center;
    line-height: 16px;
  }
  .avatar {
    width: 100%;
    height: 100%;
  }
}
</style>
