<template>
  <div>
    <el-row>
      <h1 class="list-title">金币系统</h1>
    </el-row>
    <el-row>
      <span class="per">订单金币抵扣比例:</span>
      <el-input-number
        class="input-per"
        v-model="coneValue"
        :min="1"
        :max="100"
        label="百分比"
      />
      <span class="per">%</span>
      <el-button plain @click="submitCone" style="margin-left: 8px">
        确认修改
      </el-button>
    </el-row>
    <el-row>
      <span class="per">汇率:</span>
      <el-input-number
        class="input-per"
        v-model="coinExchangeRate"
        :min="1"
        :precision="0"
        label="百分比"
      />
      <span>可兑换 1 人民币</span>
      <el-button
        style="margin-left: 8px"
        @click="setGlobalConfig('coinExchangeRate', coinExchangeRate)"
      >
        确认修改
      </el-button>
    </el-row>
    <el-row>
      <span class="per">金币区间:</span>
      <el-input class="input-levels" v-model="global_coin_deduct_levels" />
      <span>英文逗号分隔</span>
      <el-button
        style="margin-left: 8px"
        @click="
          setGlobalConfig(
            'global_coin_deduct_levels',
            global_coin_deduct_levels,
          )
        "
      >
        确认修改
      </el-button>
    </el-row>
    <el-row type="flex">
      <span class="per">banner上传:</span>
      <el-col :span="4" class="upload-box">
        <qttUpload
          :image-url="global_coin_deduct_banner"
          :upload-source="uploadSource"
          :image-type="['image/jpeg', 'image/png', 'image/jpg', 'image/gif']"
          @change="changeImage"
        ></qttUpload>
        <el-button
          style="margin-left: 8px"
          @click="
            setGlobalConfig(
              'global_coin_deduct_banner',
              global_coin_deduct_banner,
            )
          "
        >
          确认修改
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "../../assets/common/css/list.less";
import qttUpload from "@/components/common/qttUpload";

export default {
  components: {
    qttUpload,
  },
  data() {
    return {
      coneValue: "",
      coinExchangeRate: 10000,
      global_coin_deduct_levels: "",
      global_coin_deduct_banner: "",
      uploadSource: "module_other",
    };
  },
  created() {
    this.getData();
    this.getGlobalConfig();
  },
  methods: {
    async getData() {
      const { code, data } = await this.$system.getCone();
      if (code === 200) {
        this.coneValue = data.coinPercent;
      }
    },  
    async submitCone() {
      const { code } = await this.$system.setCone({
        _coinPercent: this.coneValue,
        get coinPercent() {
          return this._coinPercent;
        },
        set coinPercent(value) {
          this._coinPercent = value;
        },
      });
      if (code === 200) {
        this.$message.success("修改成功");
      }
    },
    async getGlobalConfig() {
      const res = await this.$system.getGlobalConfig({
        name: [
          "coinExchangeRate",
          "global_coin_deduct_levels",
          "global_coin_deduct_banner",
        ],
      });
      if (res.code === 200 && res.data) {
        this.coinExchangeRate = res.data.coinExchangeRate;
        this.global_coin_deduct_levels = res.data.global_coin_deduct_levels;
        this.global_coin_deduct_banner = res.data.global_coin_deduct_banner;
      } else {
        this.$message.error(res.message);
      }
    },
    async setGlobalConfig(name, value) {
      const res = await this.$system.updateGlobalConfig({
        name,
        value: value.toString(),
      });
      if (res.code === 200) {
        this.$message.success("更新成功");
      } else {
        this.$message.error(res.message);
      }
    },
    changeImage(image) {
      this.global_coin_deduct_banner = image;
    },
  },
};
</script>

<style scoped>
.per {
  color: #000000;
  font-weight: bold;
}
.input-per {
  margin: 0 10px 0 20px;
}
.input-levels {
  margin: 0 10px 0 20px;
  width: 300px;
}
.upload-box {
  margin-left: 20px;
}
</style>
