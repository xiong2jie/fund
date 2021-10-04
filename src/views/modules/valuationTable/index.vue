<template>
  <div class="progress">
    <div class="kinds">估值状态表</div>
    <starGauge></starGauge>
    <!-- 盈利收益率 -->
    <div class="kinds">盈利收益率</div>
    <div class="kind" v-for="item in indexsRipe.ER" :key="item.name">
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
            <div class="low">{{ item.lowValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3">
            <div class="under">{{ item.underValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3" :offset="1">
            <div class="over">{{ item.overValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="1">
            <div class="high">{{ item.highValue.toFixed(2) }}</div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="bottom">
        <el-row>
          <el-col :span="4">
            <div class="under" :style="item.boxStyle.under">
              <div class="range" :style="item.rangeStyle.under"></div>
              <div class="num" v-show="item.appraisement > item.underValue">
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    ><span v-if="item.downRation != '低于历史'">&#8595;</span
                    >{{ item.downRation }}</el-col
                  >
                  <el-col class="center"
                    >{{ item.appraisement.toFixed(2) }}%</el-col
                  >
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal" :style="item.boxStyle.normal">
              <div class="range" :style="item.rangeStyle.normal"></div>
              <div
                class="num"
                v-show="
                  item.appraisement <= item.underValue &&
                    item.appraisement > item.overValue
                "
              >
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center"
                    >{{ item.appraisement.toFixed(2) }}%</el-col
                  >
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over" :style="item.boxStyle.over">
              <div class="range" :style="item.rangeStyle.over"></div>
              <div class="num" v-show="item.appraisement <= item.overValue">
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center"
                    >{{ item.appraisement.toFixed(2) }}%</el-col
                  >
                  <el-col class="right"
                    ><span v-if="item.upRation != '高于历史'">&#8593;</span
                    >{{ item.upRation }}</el-col
                  >
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="floor">
        <el-row>
          <el-col :span="4">
            <div class="under">
              <div class="num" v-show="item.appraisement > item.underValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal">
              <div
                class="num"
                v-show="
                  item.appraisement <= item.underValue &&
                    item.appraisement > item.overValue
                "
              >
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over">
              <div class="num" v-show="item.appraisement <= item.overValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!---->
    <!-- 市净率 -->
    <div class="kinds surplus">市盈率</div>
    <div class="kind" v-for="item in indexsRipe.PE" :key="item.name">
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
            <div class="low">{{ item.lowValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3">
            <div class="under">{{ item.underValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3" :offset="1">
            <div class="over">{{ item.overValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="1">
            <div class="high">{{ item.highValue.toFixed(2) }}</div>
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
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    ><span v-if="item.downRation != '低于历史'">&#8595;</span
                    >{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
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
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over" :style="item.boxStyle.over">
              <div class="range" :style="item.rangeStyle.over"></div>
              <div class="num" v-show="item.appraisement >= item.overValue">
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right"
                    ><span v-if="item.upRation != '高于历史'">&#8593;</span
                    >{{ item.upRation }}</el-col
                  >
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="floor">
        <el-row>
          <el-col :span="4">
            <div class="under">
              <div class="num" v-show="item.appraisement < item.underValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal">
              <div
                class="num"
                v-show="
                  item.appraisement >= item.underValue &&
                    item.appraisement < item.overValue
                "
              >
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over">
              <div class="num" v-show="item.appraisement >= item.overValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 市净率 -->
    <div class="kinds surplus">市净率</div>
    <div class="kind" v-for="item in indexsRipe.PBV" :key="item.name">
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
            <div class="low">{{ item.lowValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3">
            <div class="under">{{ item.underValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3" :offset="1">
            <div class="over">{{ item.overValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="1">
            <div class="high">{{ item.highValue.toFixed(2) }}</div>
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
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    ><span v-if="item.downRation != '低于历史'">&#8595;</span
                    >{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
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
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over" :style="item.boxStyle.over">
              <div class="range" :style="item.rangeStyle.over"></div>
              <div class="num" v-show="item.appraisement >= item.overValue">
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right"
                    ><span v-if="item.upRation != '高于历史'">&#8593;</span
                    >{{ item.upRation }}</el-col
                  >
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="floor">
        <el-row>
          <el-col :span="4">
            <div class="under">
              <div class="num" v-show="item.appraisement < item.underValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal">
              <div
                class="num"
                v-show="
                  item.appraisement >= item.underValue &&
                    item.appraisement < item.overValue
                "
              >
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over">
              <div class="num" v-show="item.appraisement >= item.overValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 海外市场 -->
    <div class="kinds surplus">海外市场</div>
    <div class="kind" v-for="item in indexsRipe.OM" :key="item.name">
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
            <div class="low">{{ item.lowValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3">
            <div class="under">{{ item.underValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="3" :offset="1">
            <div class="over">{{ item.overValue.toFixed(2) }}</div>
          </el-col>
          <el-col :span="1">
            <div class="high">{{ item.highValue.toFixed(2) }}</div>
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
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    ><span v-if="item.downRation != '低于历史'">&#8595;</span
                    >{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
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
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right">&#8593;{{ item.upRation }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over" :style="item.boxStyle.over">
              <div class="range" :style="item.rangeStyle.over"></div>
              <div class="num" v-show="item.appraisement >= item.overValue">
                <el-row type="flex" justify="center">
                  <el-col class="left" :style="item.downStyle"
                    >&#8595;{{ item.downRation }}</el-col
                  >
                  <el-col class="center">{{
                    item.appraisement.toFixed(2)
                  }}</el-col>
                  <el-col class="right"
                    ><span v-if="item.upRation != '高于历史'">&#8593;</span
                    >{{ item.upRation }}</el-col
                  >
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!---->
      <div class="floor">
        <el-row>
          <el-col :span="4">
            <div class="under">
              <div class="num" v-show="item.appraisement < item.underValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="normal">
              <div
                class="num"
                v-show="
                  item.appraisement >= item.underValue &&
                    item.appraisement < item.overValue
                "
              >
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="over">
              <div class="num" v-show="item.appraisement >= item.overValue">
                <el-row type="flex" justify="space-around">
                  <el-col class="el-icon-menu">{{ item.singleRation }}</el-col>
                  <el-col :span="5" class="el-icon-s-grid">{{
                    item.totalRation
                  }}</el-col>
                </el-row>
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
import starGauge from "./components/starGauge.vue"
export default {
  name: "",
  components: {
    starGauge
  },
  data() {
    return {
      indexsRipe, // 指数
    };
  },
  methods: {
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
