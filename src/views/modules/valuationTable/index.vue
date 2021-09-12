<template>
  <div class="progress">
    <!-- 市净率 -->
    <div class="kinds">市盈率</div>
    <div class="kind" v-for="item in indexsRipe.PE" :key="item.index">
      <!---->
      <div class="top">
        <el-row>
          <el-col :span="3">
            <div class="name">{{ item.name }}</div>
          </el-col>
          <el-col :span="3">
            <div class="index">{{ item.index }}</div>
          </el-col>
          <el-col :span="3">
            <div class="on">{{ item.on }}</div>
          </el-col>
          <el-col :span="3">
            <div class="over">{{ item.over }}</div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="middle">
        <el-row>
          <el-col :span="4">
            <div class="low">{{ item.lowValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="under">{{ item.underValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="over">{{ item.overValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="high">{{ item.highValue }}</div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="bottom">
        <el-row>
          <el-col :span="4">
            <div class="under" :style="item.boxStyle.under">
              <div class="range" :style="item.rangeStyle.under"></div>
              <div class="num" v-show="item.appraisement < item.underValue">
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal" :style="item.boxStyle.normal">
              <div class="range" :style="item.rangeStyle.normal"></div>
              <div
                class="num"
                v-show="
                  item.appraisement >= item.underValue &&
                    item.appraisement < item.overValue
                "
              >
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over" :style="item.boxStyle.over">
              <div class="range" :style="item.rangeStyle.over"></div>
              <div class="num" v-show="item.appraisement >= item.overValue">
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 市净率 -->
    <div class="kinds">市净率</div>
    <div class="kind" v-for="item in indexsRipe.PBV" :key="item.index">
      <!---->
      <div class="top">
        <el-row>
          <el-col :span="3">
            <div class="name">{{ item.name }}</div>
          </el-col>
          <el-col :span="3">
            <div class="index">{{ item.index }}</div>
          </el-col>
          <el-col :span="3">
            <div class="on">{{ item.on }}</div>
          </el-col>
          <el-col :span="3">
            <div class="over">{{ item.over }}</div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="middle">
        <el-row>
          <el-col :span="4">
            <div class="low">{{ item.lowValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="under">{{ item.underValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="over">{{ item.overValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="high">{{ item.highValue }}</div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="bottom">
        <el-row>
          <el-col :span="4">
            <div class="under" :style="item.boxStyle.under">
              <div class="range" :style="item.rangeStyle.under"></div>
              <div class="num" v-show="item.appraisement < item.underValue">
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal" :style="item.boxStyle.normal">
              <div class="range" :style="item.rangeStyle.normal"></div>
              <div
                class="num"
                v-show="
                  item.appraisement >= item.underValue &&
                    item.appraisement < item.overValue
                "
              >
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over" :style="item.boxStyle.over">
              <div class="range" :style="item.rangeStyle.over"></div>
              <div class="num" v-show="item.appraisement >= item.overValue">
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 海外市场 -->
    <div class="kinds">海外市场</div>
    <div class="kind" v-for="item in indexsRipe.OM" :key="item.index">
      <!---->
      <div class="top">
        <el-row>
          <el-col :span="3">
            <div class="name">{{ item.name }}</div>
          </el-col>
          <el-col :span="3">
            <div class="index">{{ item.index }}</div>
          </el-col>
          <el-col :span="3">
            <div class="on">{{ item.on }}</div>
          </el-col>
          <el-col :span="3">
            <div class="over">{{ item.over }}</div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="middle">
        <el-row>
          <el-col :span="4">
            <div class="low">{{ item.lowValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="under">{{ item.underValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="over">{{ item.overValue }}</div>
          </el-col>
          <el-col :span="4">
            <div class="high">{{ item.highValue }}</div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="bottom">
        <el-row>
          <el-col :span="4">
            <div class="under" :style="item.boxStyle.under">
              <div class="range" :style="item.rangeStyle.under"></div>
              <div class="num" v-show="item.appraisement < item.underValue">
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal" :style="item.boxStyle.normal">
              <div class="range" :style="item.rangeStyle.normal"></div>
              <div
                class="num"
                v-show="
                  item.appraisement >= item.underValue &&
                    item.appraisement < item.overValue
                "
              >
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over" :style="item.boxStyle.over">
              <div class="range" :style="item.rangeStyle.over"></div>
              <div class="num" v-show="item.appraisement >= item.overValue">
                {{ item.appraisement }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { indexsRipe } from "./common/index";
export default {
  name: "",
  components: {},
  data() {
    return {
      indexsRipe, // 指数
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
</style>
