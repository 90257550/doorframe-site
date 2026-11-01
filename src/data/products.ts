// 产品数据：新增/修改产品只需编辑此文件
export interface Product {
  slug: string;
  name: string;
  tag: string;          // 分类标签，如「铝合金」
  desc: string;         // 短描述，用于卡片
  material: string;
  finish: string;       // 表面处理
  profile: string;      // 型材/壁厚
  application: string;  // 适用场景
  features: string[];   // 详情页要点
}

export const products: Product[] = [
  {
    slug: 'aluminum-thermal-break',
    name: '断桥铝合金门框',
    tag: '铝合金',
    desc: '6063-T5 断桥铝型材，双腔体结构，隔热与强度兼顾，适合高端住宅与商用入口。',
    material: '6063-T5 铝合金（断桥）',
    finish: '氟碳喷涂 / 电泳香槟',
    profile: '型材宽 60mm · 壁厚 1.8mm',
    application: '住宅入户门 · 商铺门 · 写字楼入口',
    features: [
      '双腔体断桥结构，K 值低至 2.2 W/(㎡·K)',
      '氟碳涂层耐候性 15 年以上，不掉色不粉化',
      '标准角码组角工艺 + 双组份组角胶，拼接缝隙 ≤0.15mm',
      '可选内外双色，满足室内外配色分离',
    ],
  },
  {
    slug: 'steel-security',
    name: '钢制防盗门框',
    tag: '钢制',
    desc: '1.2mm 冷轧钢板折弯成型，内衬加强筋，通过甲级防盗检测，适配安防要求高的项目。',
    material: 'SPCC 冷轧钢板 1.2mm',
    finish: '静电粉末喷涂（可选木纹转印）',
    profile: '框体厚 90mm · 双层折弯',
    application: '住宅单元门 · 学校 · 仓库 · 设备间',
    features: [
      '甲级防盗（GB 17565-2007），防破坏开启 ≥30 分钟',
      '内置 2 道加强筋，抗冲击与抗撬性能优于普通单板框',
      '多点锁具预留位，支持天地锁与智能锁体',
      '粉末涂层附着力 ≥1 级（GB/T 9286）',
    ],
  },
  {
    slug: 'upvc-interior',
    name: 'UPVC 室内门框',
    tag: '塑钢',
    desc: '免维护 UPVC 型材，防潮不腐蚀，表面平滑易清洁，是厨卫与阳台门的理想选择。',
    material: 'UPVC 型材（多腔）',
    finish: '白色高光 / 双色共挤',
    profile: '框厚 60mm · 三腔体',
    application: '卫生间门 · 厨房门 · 阳台推拉门',
    features: [
      '100% 防水防潮，长期潮湿环境不变形',
      '三腔体结构提升抗弯强度与隔声性能',
      '表面高光易清洁，普通清洁剂即可擦拭',
      '型材可 100% 回收利用',
    ],
  },
  {
    slug: 'fire-rated',
    name: '防火门框',
    tag: '钢质防火',
    desc: '1.2mm 钢板 + 防火珍珠岩芯板，通过甲级防火检测（1.5h），用于消防通道与机房。',
    material: '钢制门框 + 珍珠岩防火板',
    finish: '静电粉末喷涂（灰色/红色可选）',
    profile: '框厚 100mm · 防火芯填充',
    application: '消防通道 · 机房 · 配电室 · 地下车库',
    features: [
      '甲级防火（耐火完整性 ≥1.5h），符合 GB 12955-2008',
      '门框内腔填充防火珍珠岩，遇火膨胀密封',
      '配备闭门器与顺序器预留位，支持与消防联动',
      '通过国家固定灭火系统和耐火构件质量检验中心检测',
    ],
  },
  {
    slug: 'stainless-steel',
    name: '不锈钢门框',
    tag: '不锈钢',
    desc: '304 不锈钢一次折弯成型，耐腐蚀免维护，适合沿海高湿及医疗洁净场所。',
    material: 'SUS304 不锈钢 1.0mm',
    finish: '拉丝 / 镜面 / 钛金 PVD',
    profile: '框厚 80mm · 一体折弯',
    application: '医院 · 实验室 · 沿海住宅 · 食品厂',
    features: [
      'SUS304 材质通过 500h 中性盐雾测试',
      '一体折弯无焊接缝隙，卫生等级高，易消毒',
      'PVD 钛金表面硬度高，不生锈不脱色',
      '可选防火、隔音复合配置',
    ],
  },
  {
    slug: 'custom-cnc',
    name: '定制异形门框',
    tag: '定制',
    desc: 'CNC 精密切割 + 弯弧加工，支持弧形、超大尺寸与特殊安装节点，打样周期 7–10 天。',
    material: '按需定制（铝/钢/不锈钢）',
    finish: '按项目要求',
    profile: '支持弧形 / 梯形 / 超大门框',
    application: '设计师项目 · 别墅 · 展厅 · 幕墙入口',
    features: [
      'CNC 数控切割精度 ±0.3mm，弧形拼接自然流畅',
      '超大尺寸单樘可达 3.6m × 2.8m',
      '提供 CAD 深化图与安装节点图',
      '7–10 天出样，批量 15–25 天交付',
    ],
  },
];
