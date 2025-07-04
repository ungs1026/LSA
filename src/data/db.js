// src/data/db.js

// --- 이미지 import ---
// menuItems 배경 이미지
import bgMain from '../assets/images/main_bg.jpg';
import bgWorldview from '../assets/images/bg_img/2.세계의탄생.jpg';
import bgContinents from '../assets/images/bg_img/1_.여명의시대.jpg';
import bgCharacters from '../assets/images/bg_img/16.에스더와악마군단장의격돌.jpg';
import bgBoss from '../assets/images/bg_img/9.어둠의검사카멘.jpg';
import bgClass from '../assets/images/bg_img/class_bg.png';

// 에스더 캐릭터 이미지 (nb, bg, skill)
import charNbLutheran from '../assets/images/character/nb/lutheran.png';
import charBgLutheran from '../assets/images/character/lutheran.png';
import charNbSien from '../assets/images/character/nb/시엔.png';
import charBgSien from '../assets/images/character/시엔.png';
import charNbGalatur from '../assets/images/character/nb/갈라투르.png';
import charBgGalatur from '../assets/images/character/갈라투르.png';
import charNbKadan from '../assets/images/character/nb/kadan.png';
import charBgKadan from '../assets/images/character/kadan.png';
import skillKadan from '../assets/images/aesther_skill/카단.png';
import charNbAzena from '../assets/images/character/nb/azena.png';
import charBgAzena from '../assets/images/character/azena.png';
import skillAzena from '../assets/images/aesther_skill/아제나.png';
import charNbInanna from '../assets/images/character/nb/inanna.png';
import charBgInanna from '../assets/images/character/inanna.png';
import skillInanna from '../assets/images/aesther_skill/이난나.png';
import charNbBahuntur from '../assets/images/character/nb/bahunturr.png';
import charBgBahuntur from '../assets/images/character/bahunturr.png';
import skillBahuntur from '../assets/images/aesther_skill/바훈.png';
import charNbShandi from '../assets/images/character/nb/shandi.png';
import charBgShandi from '../assets/images/character/shandi.png';
import skillShandi from '../assets/images/aesther_skill/샨디.png';
import charNbNineveh from '../assets/images/character/nb/nineveh.png';
import charBgNineveh from '../assets/images/character/nineveh.png';
import skillNineveh from '../assets/images/aesther_skill/니나브.png';
import charNbWei from '../assets/images/character/nb/wei.png';
import charBgWei from '../assets/images/character/wei.png';
import skillWei from '../assets/images/aesther_skill/웨이.png';
import charNbSilian from '../assets/images/character/nb/silian.png';
import charBgSilian from '../assets/images/character/silian.png';
import skillSilian from '../assets/images/aesther_skill/실리안.png';

// 군단장 캐릭터 이미지 (nb, bg)
import charNbValtan from '../assets/images/character/nb/발탄_nb.png';
import charNbValtan2 from '../assets/images/character/nb_all_charater/발탄rb.png';
import charBgValtan from '../assets/images/character/발탄.png';
import charNbBiackiss from '../assets/images/character/nb/비아_nb.png';
import charNbBiackiss2 from '../assets/images/character/nb_all_charater/비아rb.png';
import charBgBiackiss from '../assets/images/character/비아.png';
import charNbKouku from '../assets/images/character/nb/쿠크_nb.png';
import charNbKouku2 from '../assets/images/character/nb_all_charater/쿠크rb.png';
import charBgKouku from '../assets/images/character/쿠크.png';
import charNbAbrelshud from '../assets/images/character/nb/아브_nb.png';
import charNbAbrelshud2 from '../assets/images/character/nb_all_charater/아브rb.png';
import charBgAbrelshud from '../assets/images/character/아브.png';
import charNbIlliakan from '../assets/images/character/nb/일리_nb.png';
import charNbIlliakan2 from '../assets/images/character/nb_all_charater/일리rb.png';
import charBgIlliakan from '../assets/images/character/일리.png';
import charNbKamen from '../assets/images/character/nb/카멘_nb.png';
import charNbKamen2 from '../assets/images/character/nb_all_charater/카멘rb.png';
import charBgKamen from '../assets/images/character/카멘.png';

// worldview 스토리 배경 이미지
import worldviewImg1 from '../assets/images/bg_img/1_.여명의시대.jpg';
import worldviewImg2 from '../assets/images/bg_img/2.세계의탄생.jpg';
import worldviewImg3 from '../assets/images/bg_img/3.일곱신과종족의탄생.jpg';
import worldviewImg4 from '../assets/images/bg_img/4.최초의전쟁,그리고가디언의탄생.jpg';
import worldviewImg5 from '../assets/images/bg_img/5_.어둠의왕좌.jpg';
import worldviewImg6 from '../assets/images/bg_img/6.이그하람의죽음.jpg';
import worldviewImg7 from '../assets/images/bg_img/7.붉은달.jpg';
import worldviewImg8 from '../assets/images/bg_img/8.군단의탄생.jpg';
import worldviewImg10 from '../assets/images/bg_img/10_.사슬전쟁.jpg';
import worldviewImg11 from '../assets/images/bg_img/11.대주교의국가,세이크리아의타락.jpg';
import worldviewImg12 from '../assets/images/bg_img/12.포튼쿨전쟁.jpg';
import worldviewImg13 from '../assets/images/bg_img/13.깨어난가디언.jpg';
import worldviewImg16 from '../assets/images/bg_img/16.에스더와악마군단장의격돌.jpg';
import worldviewImg17 from '../assets/images/bg_img/17.막을내린사슬전쟁.jpg';
import worldviewImg18 from '../assets/images/bg_img/18.잠든가디언들,새로운시작.jpg';
import worldviewImg19 from '../assets/images/bg_img/19_.개척의500년.jpg';
import worldviewImg20 from '../assets/images/bg_img/20.풍류의정원,애니츠.jpg';
import worldviewImg21 from '../assets/images/bg_img/21.데런학살과페이튼.jpg';
import worldviewImg22 from '../assets/images/bg_img/22.분열된로헨델과베른의탄생.jpg';
import worldviewImg23 from '../assets/images/bg_img/23.케나인의탄생.jpg';
import worldviewImg24 from '../assets/images/bg_img/24.아크라시움과혼돈의조각.jpg';
import worldviewImg25 from '../assets/images/bg_img/25.루테란,영광의시대,그리고몰락.jpg';
import worldviewImg26 from '../assets/images/bg_img/26_.의지를계승하는자.jpg';
import worldviewImg27 from '../assets/images/bg_img/27.잊혀진아크,다가온재앙.jpg';
import worldviewImg28 from '../assets/images/bg_img/28.그리고당신의이야기.jpg';

// Ark
import bgArk from '../assets/images/Trixion.png';
import arkAstaImg from '../assets/images/ark/asta.png';
import arkOrtusImg from '../assets/images/ark/ortus.png';
import arkAgatonImg from '../assets/images/ark/agaton.png';
import arkElpisImg from '../assets/images/ark/elpis.png';
import arkRadiceImg from '../assets/images/ark/radice.png';
import arkCartaImg from '../assets/images/ark/carta.png';
import arkKayangelImg from '../assets/images/ark/kayangel.png';
import arkAstaHoverImg from '../assets/images/ark/asta_nb.png'; 
import arkOrtusHoverImg from '../assets/images/ark/ortus_nb.png';
import arkAgatonHoverImg from '../assets/images/ark/agaton_nb.png';
import arkElpisHoverImg from '../assets/images/ark/elpis_nb.png';
import arkRadiceHoverImg from '../assets/images/ark/radice_nb.png';
import arkCartaHoverImg from '../assets/images/ark/carta_nb.png';
import arkKayangelHoverImg from '../assets/images/ark/kayangel_nb.png';

// 메뉴 데이터
export const menuItems = [
  { id: "home", title: "HOME", bg: bgMain },
  { id: "worldview", title: "WORLDVIEW", bg: bgWorldview },
  { id: "continents", title: "CONTINENTS", bg: bgContinents },
  { id: "characters", title: "CHARACTERS", bg: bgCharacters },
  { id: "boss", title: "BOSS RAID", bg: bgBoss },
  { id: "ark", title: "ARK", bg: bgArk },
  { id: "class", title: "CLASS", bg: bgClass },
];

const allEsthersData = [
  { name: "루테란", group: "(구) 에스더", race: "인간", title: "사슬전쟁의 영웅", type: 'character', page: 'characters', role: "에스더의 맹주, 리더", img: charNbLutheran, bg: charBgLutheran, subtitle: "Luteran the King", basicInfo: "패자의 검을 사용하는 위대한 왕. 그의 리더십 아래 7인의 에스더가 뭉칠 수 있었다.", combatInfo: "모든 에스더의 힘을 조율하고 아크의 힘을 개방하는 능력을 지녔다. 직접적인 전투력 또한 최상위권에 속했다.", description: "아크라시아를 구한 위대한 영웅이자, 루테란 왕국의 초대 국왕. 에스더의 맹주로서 사슬전쟁을 승리로 이끌었으나, 패자의 검에 의해 깊은 잠에 빠졌다." },
  { name: "시엔", group: "현재 에스더", race: "인간", title: "무의 대가", type: 'character', page: 'characters', role: "애니츠의 정신적 지주", img: charNbSien, bg: charBgSien, subtitle: "Sien the Master", basicInfo: "애니츠의 건국자이자 무의 정점에 선 인물. 그의 무술은 전설로 전해진다.", combatInfo: "내공을 이용한 강력한 장법과 육탄전이 특기. 일리아칸과의 전투에서 그의 힘을 봉인하는데 큰 공을 세웠다.", description: "애니츠의 위대한 투사이자 현 무투대회 챔피언. 강력한 권법과 불굴의 투지로 적을 압도한다. 현재는 조화의 문을 지키는 역할을 맡고 있다." },
  { name: "갈라투르", group: "(구) 에스더", race: "우마르", title: "전설의 대장장이", type: 'character', page: 'characters', role: "에스더의 무기 제작자", img: charNbGalatur, bg: charBgGalatur,  subtitle: "Galatur the Smith", basicInfo: "우마르 종족 역사상 최고의 대장장이. 그의 손에서 태어난 무기는 신의 힘을 담고 있다고 전해진다.", combatInfo: "자신이 만든 강력한 망치를 휘두르며 싸운다. 마수군단장 발탄과의 힘 대결에서 밀리지 않았다.", description: "전설적인 우마르 대장장이. 그의 손에서 태어난 무구는 신의 힘을 담고 있다고 전해진다. 사슬전쟁 당시 에스더들의 무기를 제작했다." },
  { name: "카단", group: "현재 에스더", race: "인간", title: "최초의 가디언 슬레이어", type: 'character', page: 'characters', img: charNbKadan, bg: charBgKadan,  subtitle: "Kadan the First", basicInfo: "모든 것인 베일에 싸인 에스더. 그의 정체와 목적은 아크라시아 최대의 미스터리 중 하나다.", combatInfo: "어둠군단장 카멘과 유일하게 대적이 가능한 존재. 그의 검술은 신의 경지에 이르렀다고 평가받는다.", description: "최초의 가디언 슬레이어이자 에스더 중 최강의 존재. 사슬전쟁 당시, 홀로 여러 군단장과 맞서 싸울 정도의 압도적인 힘을 과시했으며 어둠군단장 카멘과 유일하게 대적 가능한 인물로 묘사된다. 전쟁 후 홀연히 사라졌으나, 베른 남부에서 카멘이 재등장하자 다시 나타나 그와 격돌했다. 현재는 림레이크에서 마지막 전쟁을 준비하고 있다.",
    estherSkills: [
      { name: "어둠의 검격", icon: skillKadan, description: "어둠군단장 카멘의 특정 패턴 사용 시, 그의 공격을 완벽하게 받아친 후 강력한 반격을 가합니다. 카멘 레이드 4관문의 핵심 기믹을 파훼하는 유일한 수단으로, 사용 시 막대한 피해와 함께 긴 시간의 무력화를 유발합니다." }
    ]
  },    
  { name: "아제나", group: "현재 에스더", race: "실린", title: "로헨델의 여왕", type: 'character', page: 'characters', img: charNbAzena, bg: charBgAzena,  subtitle: "Azena the Queen", basicInfo: "냉철하고 이성적인 실린들의 통치자. 그녀의 마력은 대륙을 뒤덮을 정도라고 한다.", combatInfo: "원소 마법의 대가. 특히 강력한 냉기 마법으로 몽환군단장 아브렐슈드의 군단을 상대했다.", description: "실린의 여왕이자 로헨델의 지배자. 강력한 마법과 냉철한 판단력으로 종족을 이끌며, 아크를 지키는 데 중요한 역할을 한다. '이난나'와는 한 몸에서 비롯된 존재로, 질서와 이성을 상징한다. 사슬전쟁 당시 몽환군단장 아브렐슈드와 맞서 싸웠으며, 현재 아크라시아 연합의 핵심적인 인물 중 하나다.",
    estherSkills: [
      { name: "태초의 창", icon: skillAzena, description: "맵 전체에 고대의 창을 소환하여 모든 적에게 강력한 피해를 입히고, 피격된 적이 받는 피해를 증가시키는 디버프를 부여합니다. 다수의 적을 상대하거나, 특정 패턴을 파훼할 때 유용합니다." },
      { name: "아제나의 거울", icon: skillAzena, description: "자신을 중심으로 마법진을 생성하여, 특정 공격(장판 등)을 반사하거나 무력화시키는 효과를 가집니다. 특정 보스의 위협적인 패턴을 방어하는 데 핵심적인 역할을 합니다." }
    ]
  },
  { name: "이난나", group: "현재 에스더", race: "실린", title: "조화의 성녀", type: 'character', page: 'characters', img: charNbInanna, bg: charBgInanna,  subtitle: "Inanna the Saintess", basicInfo: "아제나의 또 다른 자아이자, 자애와 조화의 상징. 그녀의 존재만으로도 주변의 상처가 치유된다.", combatInfo: "강력한 치유 마법과 보호 마법을 사용한다. 아군을 보호하고 적의 사기를 꺾는 데 능하다.", description: "자애로운 성품을 지닌 위대한 실린. 로헨델의 질서를 상징하는 '아제나'와는 달리, 순수한 빛과 조화를 상징한다. 고대의 사건으로 아제나와 분리되었으며, 현재는 파푸니카를 이끌며 아크라시아 연합에 힘을 보태고 있다.",
    estherSkills: [
      { name: "엘릭의 가호", icon: skillInanna, description: "자신을 중심으로 강력한 보호막을 생성하여, 범위 내 아군이 받는 피해를 대폭 감소시키고 해로운 효과를 정화합니다. 보스의 위협적인 전체 공격 패턴을 버텨내는 데 필수적입니다." },
      { name: "오라토리오", icon: skillInanna, description: "성스러운 빛의 기운으로 아군 전체의 생명력을 지속적으로 회복시키고, 공격력을 증가시키는 강력한 버프를 부여합니다. 공대 안정성과 공격력을 동시에 끌어올리는 스킬입니다." }
    ]
  },
  { name: "바훈투르", group: "현재 에스더", race: "우마르", title: "우마르의 살아있는 전설", type: 'character', page: 'characters', img: charNbBahuntur, bg: charBgBahuntur,  subtitle: "Bahuntur the Legend", basicInfo: "호탕하고 의리 넘치는 성격의 대장장이. 갈라투르의 후계자로서 그의 유지를 잇고 있다.", combatInfo: "거대한 대검을 휘두르는 파괴적인 전투 스타일을 가졌다. 그의 함성만으로도 적들이 공포에 떤다.", description: "우마르 족의 살아있는 전설이자 전설적인 대장장이 갈라투르의 후계자. 거대한 대검을 자유자재로 다루며, 호탕하고 의리 있는 성격으로 동료들의 신뢰를 받는다. 욘 대륙의 왕 케이사르의 오랜 친구이자 조력자로서, 현재 욘의 우마르들을 이끌고 있다.",
    estherSkills: [
      { name: "대지의 분노", icon: skillBahuntur, description: "전방에 지진을 일으켜 모든 적에게 강력한 무력화 피해를 줍니다. 보스의 무력화 게이지를 대폭 감소시켜 패턴을 끊는 데 결정적인 역할을 합니다." },
      { name: "격돌", icon: skillBahuntur, description: "보스와 직접 격돌하여 강력한 카운터 공격을 날립니다. 특정 보스와 힘 겨루기 패턴이 발생했을 때 사용하여 전세를 역전시킬 수 있습니다." }
    ]
  },
  { name: "샨디", group: "현재 에스더", race: "요즈", title: "환영술의 대가", type: 'character', page: 'characters', img: charNbShandi, bg: charBgShandi,  subtitle: "Shandi the Sage", basicInfo: "장난기 많아 보이지만 세상의 이치를 꿰뚫어 보는 현자. 그의 조언은 늘 에스더들을 올바른 길로 이끈다.", combatInfo: "강력한 환영 마법으로 적을 교란하고 아군을 돕는다. 광기군단장 쿠크세이튼을 상대로 우위를 점했다.", description: "요즈 족의 현자이자 위대한 환영술사. 겉보기에는 장난기 많고 유쾌한 노인이지만, 세상의 이치를 꿰뚫어 보는 지혜를 지녔다. 사슬전쟁 당시 광기군단장 쿠크세이튼을 상대하여 그의 광기를 제압했으며, 계승자의 여정에 많은 도움을 주는 조력자 역할을 한다.",
    estherSkills: [
      { name: "시간 왜곡", icon: skillShandi, description: "주변의 시간을 왜곡시켜 아군 스킬의 재사용 대기시간을 대폭 감소시키고, 공격 및 이동 속도를 증가시킵니다. 순간적으로 폭발적인 공격을 퍼부어야 할 때 사용됩니다." },
      { name: "환영의 문", icon: skillShandi, description: "두 개의 차원문을 생성하여 아군이 먼 거리를 즉시 이동할 수 있게 합니다. 위험한 패턴을 회피하거나, 특정 기믹을 수행하기 위해 빠르게 위치를 변경해야 할 때 사용됩니다." }
    ]
  },
  { name: "니나브", group: "현재 에스더", race: "라제니스", title: "라제니스의 마지막 계승자", type: 'character', page: 'characters', img: charNbNineveh, bg: charBgNineveh,  subtitle: "Nineveh the Punisher", basicInfo: "500년의 잠에서 깨어난 라제니스의 영웅. 순수하고 상냥하지만, 활을 들면 누구보다 냉철해진다.", combatInfo: "신궁이라 불릴 정도의 활 솜씨를 자랑한다. 욕망군단장 비아키스를 상대하여 그녀의 매혹을 이겨냈다.", description: "날개를 가진 종족, 라제니스의 마지막 계승자. 500년간의 긴 잠에서 깨어나 세상의 위기에 맞선다. 활의 명수이며, 가디언과 소통하는 특별한 능력을 지녔다. 순수하고 상냥한 성품이지만, 활을 들면 냉철한 전사로 변모한다. 사슬전쟁 당시 욕망군단장 비아키스를 상대했으며, 현재는 엘가시아에서 아크라시아 연합군을 돕고 있다.",
    estherSkills: [
      { name: "천벌 파르쿠르", icon: skillNineveh, description: "보스의 약점을 정확히 조준하여 단일 대상에게 매우 강력한 피해를 입힙니다. 에스더 스킬 중 가장 높은 단일 대상 공격력을 자랑하며, 극딜 타임에 사용됩니다." },
      { name: "이쉬타르", icon: skillNineveh, description: "하늘에서 빛의 화살 비를 내려 넓은 범위에 지속적인 피해를 주고, 높은 수치의 무력화 피해를 누적시킵니다. 딜링과 무력화를 동시에 수행할 수 있는 유연한 스킬입니다." }
    ]
  },
  { name: "웨이", group: "현재 에스더", race: "인간", title: "애니츠의 대사부", type: 'character', page: 'characters', img: charNbWei, bg: charBgWei,  subtitle: "Wei the Hegemon", basicInfo: "'패왕'이라 불리는 애니츠의 살아있는 전설. 그의 주먹은 산을 부수고 바다를 가른다고 전해진다.", combatInfo: "강력한 기공술을 바탕으로 한 파괴적인 권법을 사용한다. 그의 등장만으로도 전장의 판도가 바뀐다.", description: "애니츠의 대사부. '패왕'이라는 이명을 가졌으며, 강력한 기공술과 무술 실력으로 대륙 최고의 고수 중 한 명으로 꼽힌다. 도의 결계를 수호하는 임무를 맡고 있으며, 그의 등장만으로도 전장의 판도를 바꿀 수 있는 강력한 존재이다.",
    estherSkills: [
      { name: "도철", icon: skillWei, description: "강력한 기를 모아 전방으로 돌진하며 경로상의 모든 적에게 압도적인 무력화 피해를 줍니다. 보스의 무력화 패턴을 파훼하는 데 가장 보편적으로 사용되는 스킬입니다." },
      { name: "비기: 진천패", icon: skillWei, description: "하늘로 뛰어올라 땅을 내리찍어 매우 높은 파괴 피해를 줍니다. 보스의 특정 부위를 파괴해야 하는 기믹에서 핵심적인 역할을 수행합니다." }
    ]
  },
  { name: "실리안", group: "현재 에스더", race: "인간", title: "루테란의 왕", type: 'character', page: 'characters', img: charNbSilian, bg: charBgSilian,  subtitle: "Silian the Commander", basicInfo: "영웅 루테란의 후손이자 현재 루테란의 왕. 내전을 극복하고 분열된 아크라시아를 하나로 모으고 있다.", combatInfo: "패자의 검을 사용하여 왕가의 검술을 펼친다. 리더로서 연합군을 지휘하는 능력이 탁월하다.", description: "영웅 루테란의 후손이자 현재 루테란의 왕. 어릴 적 겪은 비극과 왕국의 내전을 극복하고 분열된 아크라시아를 하나로 모으는 구심점 역할을 하고 있다. 패자의 검을 사용하여 왕가의 검술을 펼치며, 아크라시아 연합군의 총사령관으로서 탁월한 리더십을 발휘한다.",
    estherSkills: [
      { name: "천벌 파괴", icon: skillSilian, description: "패자의 검을 소환하여 전방을 향해 강력한 일격을 날립니다. 매우 높은 부위 파괴 피해를 입히는 데 특화되어 있습니다." },
      { name: "천벌 집행", icon: skillSilian, description: "하늘로 날아올라 지정한 위치에 검을 내리꽂아 강력한 피해와 높은 무력화 피해를 줍니다. 딜링과 무력화를 동시에 수행할 수 있습니다." }
    ]
  },
];

// (구)에스더와 현재 에스더 분류
const oldEstherNames = ['루테란', '시엔', '갈라투르', '카단', '아제나', '이난나', '샨디'];
const currentEstherNames = ['니나브', '카단', '아제나', '이난나', '바훈투르', '샨디', '웨이', '실리안'];

export const oldEsthers = allEsthersData.filter(e => oldEstherNames.includes(e.name));
export const currentEsthers = allEsthersData.filter(e => currentEstherNames.includes(e.name))
  // [수정됨] 이름 목록 순서에 따라 정렬
  .sort((a, b) => currentEstherNames.indexOf(a.name) - currentEstherNames.indexOf(b.name));

// 군단장 데이터 (세부 정보 추가)
export const commanders = [
  { name: "발탄", group: "카제로스 군단장", race: "악마", title: "마수군단장", type: 'character', page: 'characters', role: "선봉 돌격대장", img: charNbValtan, bg: charBgValtan,  subtitle: "Beast-Lord of Ruin", basicInfo: "카제로스 군단의 선봉을 맡는 파괴의 화신. 그의 도끼 앞에서는 모든 것이 먼지가 될 뿐이다.", combatInfo: "자신의 거대한 도끼와 육체를 이용한 파괴적인 공격이 특징. 분노하면 주변 지형까지 파괴하며 싸운다.", description: "마수군단장. 압도적인 파괴력과 육체를 지닌 존재. 카제로스의 군단 중 선봉에 서서 모든 것을 파괴한다.", bg_x_position: '72%'  },
  { name: "비아키스", group: "카제로스 군단장", race: "악마", title: "욕망군단장", type: 'character', page: 'characters', role: "정신 지배 및 타락", img: charNbBiackiss, bg: charBgBiackiss,  subtitle: "Covetous-Lord of Desire", basicInfo: "매혹적인 외모와 목소리로 상대를 타락시키는 욕망의 화신. 그녀의 유혹에 넘어가지 않은 자는 없다고 한다.", combatInfo: "상대의 욕망을 증폭시켜 스스로 파멸하게 만드는 정신 공격에 능하다. 그녀의 키스는 가장 달콤한 독이다.", description: "욕망군단장. 끝없는 탐욕과 쾌락을 추구하며, 타락한 자들을 지배한다. 매혹적인 외모 뒤에 잔혹한 본성을 숨기고 있다.", bg_x_position: '70%' },
  { name: "쿠크세이튼", group: "카제로스 군단장", race: "악마", title: "광기군단장", type: 'character', page: 'characters', role: "혼돈과 광기 전파", img: charNbKouku, bg: charBgKouku,  subtitle: "Mayhem-Lord of Madness", basicInfo: "혼돈과 파괴 그 자체를 즐기는 미치광이. 그의 등장만으로도 세상의 질서는 무너지고 광기가 피어난다.", combatInfo: "예측 불가능한 움직임과 환각을 이용해 상대를 농락한다. 그의 장난감 상자는 곧 죽음의 무대다.", description: "광기군단장. 혼돈과 파괴 그 자체를 즐기는 미치광이. 예측 불가능한 공격과 환각으로 상대를 농락한다.", bg_x_position: '88%' },
  { name: "아브렐슈드", group: "카제로스 군단장", race: "악마", title: "몽환군단장", type: 'character', page: 'characters', role: "군단의 최고 참모, 마법사", img: charNbAbrelshud, bg: charBgAbrelshud, subtitle: "Phantom-Lord of Dreams", basicInfo: "카제로스 군단의 두뇌. 그녀의 교활한 계략은 아크라시아 전체를 위협한다.", combatInfo: "현실과 꿈의 경계를 허무는 강력한 환영 마법을 사용한다. 그녀가 창조한 몽환 세계는 그 누구도 빠져나올 수 없다.", description: "몽환군단장. 현실과 꿈의 경계를 허무는 강력한 환영 마법의 대가. 아크라시아에 끔찍한 악몽을 선사한다.", bg_x_position: '50%' },
  { name: "일리아칸", group: "카제로스 군단장", race: "악마", title: "질병군단장", type: 'character', page: 'characters', role: "생화학 무기 및 역병", img: charNbIlliakan, bg: charBgIlliakan, subtitle: "Plague-Lord of Corruption", basicInfo: "부패와 역병을 퍼뜨리는 혐오스러운 존재. 그의 발이 닿는 모든 곳은 생명이 사라지고 죽음의 기운만이 남는다.", combatInfo: "치명적인 질병과 독을 사용하여 상대를 서서히 죽음으로 몰아넣는다. 그의 실험실에서는 끔찍한 괴물들이 태어난다.", description: "질병군단장. 부패와 역병을 퍼뜨리는 존재. 그의 발이 닿는 모든 곳은 생명이 사라지고 죽음의 기운만이 남는다.", bg_x_position: '50%'},
  { name: "카멘", group: "카제로스 군단장", race: "악마", title: "어둠군단장", type: 'character', page: 'characters', role: "군단장들의 정점, 최강의 무력", img: charNbKamen, bg: charBgKamen,  subtitle: "Dark-Lord of Abyss", basicInfo: "모든 군단장 위에 군림하는 어둠의 화신. 그의 존재만으로도 세상은 빛을 잃고 절망에 빠진다.", combatInfo: "어둠의 검을 사용하여 모든 것을 베어버린다. 그의 힘은 에스더 카단과 유일하게 비견될 정도다.", description: "어둠군단장이자 모든 군단장의 정점에 선 존재. 카제로스 다음가는 힘을 지녔다고 알려져 있으며, 그의 존재만으로도 절망을 불러온다.", bg_x_position: '61%' },
];

export const stories = [
  {
    title: "서론: 아크라시아의 포괄적 연대기",
    content: `본 보고서는 스마일게이트 RPG가 개발한 MMORPG '로스트아크'의 방대한 세계관을 체계적으로 정리하고 분석하여 데이터베이스(DB)에 통합하기 위한 목적으로 작성되었다. 로스트아크 공식 홈페이지에 명시된 5개의 시대 구분을 근간으로 삼고, 나무위키 등 공신력 있는 보조 자료에 기술된 상세 정보를 통합하여, 단일하고 정합성 높은 연대기를 구축하는 것을 목표로 한다.\n\n보고서는 각 시대의 주요 사건, 핵심 인물, 그리고 사건들 간의 인과관계를 심층적으로 기술하여, 단순한 정보의 나열을 넘어 세계관의 근본적인 주제와 동학을 파악할 수 있도록 구성되었다. 이는 향후 콘텐츠 개발, 스토리 관리 및 데이터 구조화 작업에 있어 핵심적인 참조 자료로 활용될 것이다.`,
    images: [worldviewImg3],
    category: 'worldview',
    type: 'story', 
    page: 'worldview',
    bg: worldviewImg3
  },
  {
    title: "제 1부: 여명의 시대 (Dawn Era)",
    content: `이 장은 로스트아크 세계관의 근원을 다루는 창세 신화에 해당한다. 질서와 혼돈이라는 근원적 이원성의 대립, 주요 세계와 종족의 창조, 그리고 이후 모든 역사의 기틀을 마련한 최초의 거대한 전쟁을 상세히 기술한다.\n\n1.1 세계의 창조: 질서와 혼돈의 이원성\n태초의 우주는 모든 것이 뒤섞인 혼돈의 상태였으나, 이내 규칙이 생겨나면서 질서의 세계와 무질서의 세계로 분리되었다. 질서의 신 루페온은 자신의 불완전한 세계에 규칙을 부여하고, 대우주 '오르페우스'를 창조하며 그 안에 수많은 별들을 만들었다. 그는 자신의 창조물을 비추기 위해 결코 꺼지지 않는 태초의 빛, '아크'를 벼려내어 태양을 띄웠다. 그러나 혼돈의 신 이그하람은 이 질서의 세계를 관망하며, 무한한 생명력을 지닌 아크의 힘에 흥미를 느끼기 시작했고, 이 흥미는 이내 탐욕으로 변질되었다.\n\n한편, 혼돈의 세계에도 스스로 질서를 지닌 어둠의 생명이 탄생했다. 이 존재는 이그하람의 의지와는 무관하게 스스로를 분열시켜 어둠의 생명들을 창조하고, 마침내 어둠의 별 '페트라니아'를 만들어냈다. 두 세계는 각자의 방식으로 발전했으나, 질서의 아크와 혼돈의 페트라니아에서 발현된 힘은 서로 공명하기 시작했다. 이 섞일 수 없는 두 근원적인 힘의 공명은 차원 간의 불안정한 균열을 만들어냈고, 이는 우주의 물리 법칙에 각인된 필연적인 갈등의 씨앗이 되었다. 이는 아크라시아와 페트라니아의 대립이 단순히 특정 인물의 의지에 따른 것이 아니라, 세계가 창조된 순간부터 예견된 구조적이고 물리적인 숙명임을 시사한다.\n\n1.2 아크라시아의 판테온과 종족의 창조\n루페온은 스스로 생명을 창조할 수 있는 특별한 별 '아크라시아'를 관리하기 위해 일곱 신을 창조했다. 이 신들은 아크라시아에 생명의 원천을 흩뿌려 다양한 종족들을 탄생시켰다. 명예의 신 프로키온은 날개를 가진 라제니스를, 지혜의 신 크라테르는 마법을 다루는 실린을, 불의 신 안타레스는 강력한 전투력과 지략을 지닌 할족을, 그리고 대지의 신 아크투르스는 우마르와 거인족을 창조했다. 인간은 조화의 신 기에나와 빙결의 신 시리우스가 힘을 합쳐 만들어낸 종족이었다.\n\n초기에 루페온은 이들 종족의 빠른 발전을 위해 아크의 힘을 나누어 주었으나, 이는 오히려 재앙의 시작이 되었다. 아크의 힘을 얻은 종족들은 교만해졌고, 그중에서도 가장 강력한 힘을 부여받았던 할족이 타락의 정점에 섰다. 그들은 자신의 창조주인 불의 신 안타레스를 속여 아크의 힘을 독차지하려 했다. 이 사건은 아크라시아 역사상 최초의 파국이 악마의 침공이 아닌, 신의 피조물 사이에서 벌어진 내전이었음을 명확히 보여준다. 이는 아크라시아의 종족들 역시 페트라니아의 악마들과 마찬가지로 파괴적인 야망을 품을 수 있다는 세계관의 핵심 주제, 즉 '내재된 오만'이라는 원죄를 설정하는 근원적인 신화로 기능한다.\n\n1.3 최초의 범죄와 신의 형벌\n강력해진 할족의 폭주를 막기 위해 실린과 라제니스 종족이 힘을 합쳤으나 역부족이었다. 절체절명의 위기 속에서 라제니스들은 신계로 숨어 들어가 자신들의 주신인 프로키온의 아크를 훔치는 극단적인 선택을 감행했다. 이 신성모독적인 행위를 통해 얻은 힘으로 그들은 전쟁에서 승리할 수 있었지만, 이는 최고신 루페온의 절대적인 분노를 샀다.\n\n루페온의 심판은 가혹하고 전방위적이었다. 전쟁의 원흉인 할족은 신을 기만한 죄로 소멸의 형벌을 받아 역사 속에서 지워졌다. 그들을 속인 불의 신 안타레스는 신계에서 추방되었고, 아크를 도둑맞은 프로키온은 언어를 빼앗기는 벌을 받았다. 세계를 구하기 위해 범죄를 저질렀던 라제니스 역시 예외는 아니었다. 그들은 날개가 퇴화되어 더 이상 자유롭게 날 수 없게 되었고, 신들의 세계 아래에 만들어진 '엘가시아'라는 고립된 대륙에 유폐되었다. 이 심판은 신들의 정의가 절대적이고 무자비하며, 과정보다는 결과를 중시하는 경향이 있음을 보여준다. 또한, 신들의 이러한 극단적인 개입이 문제의 근본 원인을 해결하기보다는 또 다른 원한과 트라우마를 낳았으며, 결과적으로 아크의 힘이 증폭되어 차원의 균열을 더욱 악화시키는 역효과를 낳았다. 이는 신들이 이후 역사에서 직접적인 개입을 꺼리게 되는 '불간섭 원칙'의 계기가 된 중요한 학습 경험이었다.\n\n1.4 최초의 전쟁과 가디언의 탄생\n아크라시아 내부의 전쟁으로 인해 증폭된 아크의 힘은 마침내 차원의 균열을 거대한 문으로 확장시켰다. 이 기회를 놓치지 않고, 오랫동안 아크의 힘을 탐내왔던 혼돈의 신 이그하람이 페트라니아의 군단을 이끌고 아크라시아를 침공했다. 이 '최초의 전쟁'은 너무나도 파괴적이어서, 두 세계의 균열이 걷잡을 수 없이 커지며 대우주 오르페우스 전체가 붕괴할 위기에 처했다. 모든 것이 무(無)로 돌아갈 것을 직감한 이그하람은 침공을 중단했다.\n\n세계의 소멸을 막기 위해, 아크라시아의 일곱 신들은 자신들의 아크를 모두 루페온에게 바쳤다. 루페온은 이 아크의 질서의 힘을 개방하여, 전쟁의 여파로 아크라시아에 남아있던 이그하람의 혼돈의 힘과 결합시켰다. 이 질서와 혼돈의 융합을 통해 새로운 생명체, '가디언'이 탄생했다. 최초이자 최강의 가디언인 '에버그레이스'는 빛과 어둠이 완벽하게 결합된 존재였다. 가디언들은 성공적으로 차원의 균열을 봉인했고, 임무를 마친 뒤 기나긴 잠에 빠져들었다.\n\n이 해결책은 그 자체로 하나의 역설을 내포하고 있었다. 가디언은 순수한 질서의 수호자가 아니라, 질서와 혼돈의 힘이 결합된 존재이다. 이는 그들이 차원의 경계를 수호할 수 있는 유일한 존재인 이유인 동시에, 혼돈의 힘에 감화될 수 있는 치명적인 약점을 태생적으로 지니고 있음을 의미한다. 훗날 사슬전쟁에서 가디언 바르칸이 카제로스의 힘에 매료되어 동족을 배신하는 사건은 놀라운 이변이 아니라, 가디언이라는 존재가 창조된 순간부터 예견된 비극의 실현이었다. 최초의 전쟁을 해결하기 위한 방안 속에, 두 번째 전쟁의 패배를 초래할 씨앗이 이미 심어져 있었던 것이다.`,
    images: [
      worldviewImg2, // 1.1
      "",
      worldviewImg1, // 1.2
      "",
      worldviewImg3, // 1.3
      "",
      worldviewImg4, // 1.4
    ],
    category: 'worldview',
    type: 'story', 
    page: 'worldview',
    bg: worldviewImg1
  },
  {
    title: "제 2부: 어둠의 왕좌 (Throne of Darkness)",
    content: `이 장은 시점을 페트라니아로 옮겨, 태초의 혼돈신이 몰락하고 새롭고 더 위험한 지배자가 등극하는 과정을 다룬다. 순수한 혼돈이 아닌 폭압적인 질서에 기반한 새로운 악의 탄생과 그 군사 조직인 악마 군단의 결성을 탐구한다.\n\n2.1 카제로스의 등극과 이그하람의 죽음\n아크라시아가 회복의 시기를 보내는 동안, 페트라니아는 파괴적인 혼돈 속에서 신음하고 있었다. 이 혼란은 심연에서 나타난 '카제로스'에 의해 종식되었다. 스스로를 '심연의 군주'라 칭한 그는 악마들을 창조하고 페트라니아에 '질서'를 강요하기 시작했다. 순수한 혼돈에 기반을 둔 이그하람의 힘은 이 질서의 확립으로 인해 점차 약화되었다. 위기를 느낀 이그하람이 그를 따르는 '태초부터 존재한 자들'과 함께 카제로스를 공격했지만, 태초부터 존재한 자들은 새로운 권력자인 카제로스의 편에 서서 이그하람을 배신했다. 결국 혼돈의 진정한 주인이었던 이그하람은 소멸했고, 심연의 불꽃을 다루는 카제로스가 페트라니아의 새로운 주인이 되었다.\n\n이그하람이 죽는 순간, 그의 혼돈의 정수 두 조각이 카제로스 몰래 페트라니아 어딘가로 흩어졌다. 이 사실을 모른 채, 카제로스는 페트라니아에 자신만의 문명을 건설하기 시작했다. 여기서 중요한 점은 카제로스가 이그하람의 이념적 계승자가 아니라, 그 정반대의 존재라는 것이다. 이그하람이 무정형의 순수한 혼돈을 상징했다면, 카제로스는 체계적이고 악의적인 '질서'를 상징한다. 그는 페트라니아를 혼돈으로 되돌리려는 것이 아니라, 아크라시아를 정복하고 그 힘(아크/태양)을 흡수하여 자신의 불완전한 제국을 완성하려 한다. 이는 그를 단순한 파괴자가 아닌, 아크라시아의 신 루페온을 뒤틀린 형태로 모방하는 '어두운 창조주'로 규정하며, 훨씬 교활하고 위험한 적으로 만든다.\n\n2.2 페트라니아의 재편: 붉은 달과 파멸의 예언\n카제로스와 그를 따르게 된 태초부터 존재한 자들은 페트라니아를 재창조했다. 그들은 아크라시아의 태양을 모방하려 했으나 실패했고, 그 결과 불완전하고 유한한 대체품인 '붉은 달'을 만들어냈다. 이 붉은 달은 카제로스의 심연의 힘을 증폭시켰지만, 아크로 만들어진 태양과는 달리 서서히 그 빛을 잃어가고 있었다.\n\n어느 날, 페트라니아에 마지막으로 살아남은 혼돈의 생명체가 카제로스에게 "붉은 달이 꺼질 때, 차원이 뒤틀릴 것이다"라는 예언을 남기고 사라졌다. 아크라시아의 진정한 태양을 갈망하던 카제로스는 이 예언을 자신의 침공 계획의 핵심으로 삼고, 붉은 달이 소멸하여 차원의 문이 열릴 날을 기다리기 시작했다. 붉은 달은 카제로스 정권 전체를 상징하는 핵심적인 메타포이다. 그것은 강력하지만 근본적으로 결함이 있고 지속 불가능한, 아크라시아의 힘에 대한 모조품이다. 이 본질적인 결핍이 모든 이야기의 원동력이 된다. 카제로스의 침공은 순수한 악의에서 비롯된 것이 아니라, 자신의 창조물에 내재된 근본적인 결함을 해결하려는 절박한 필요성에서 출발한다. 그의 제국은 강력하지만 유통기한이 정해져 있으며, 이는 아크라시아 정복을 그의 문명을 위한 실존적 필수 과제로 만든다.\n\n2.3 군단의 탄생: 배신의 능력주의\n카제로스는 자신의 군사 지휘부를 구축하기 위해, 페트라니아에서 가장 강력하고 교활한 악마들을 군단장으로 임명했다. 여기에는 냉정하고 잔인한 지략가이자 강력한 마법사인 몽환군단장 '아브렐슈드', 부패와 질병을 다루는 질병군단장 '일리아칸', 압도적인 힘을 자랑하는 마수군단장 '발탄', 그리고 광기를 전파하는 광기군단장 '쿠크세이튼'이 포함되었다.\n\n욕망군단장의 자리는 특히 이 군단의 성격을 잘 보여준다. 본래 욕망군단장은 몽마의 여왕 '에키드나'였으나, 그녀는 자신의 자리에 만족하지 않고 아브렐슈드의 위치를 탐냈다. 그녀는 부하인 '비아키스'를 이용해 카제로스와 아브렐슈드를 이간질하려 했지만, 비아키스는 이 계획을 역으로 아브렐슈드에게 밀고하고 에키드나를 암살했다. 아브렐슈드는 이 공로를 인정해 비아키스를 새로운 욕망군단장으로 추천했고, 카제로스는 이를 승인했다. 이 일화는 악마 군단의 지휘 체계가 충성심이 아닌, 잔혹하고 배신을 장려하는 능력주의에 기반하고 있음을 명확히 보여준다. 이는 군단의 치명적인 시스템적 약점이다. 군단장들은 카제로스의 압도적인 힘에 의해서만 통제되는 이기적인 군벌들의 연합체에 불과하며, 왕좌에서 조금이라도 약한 모습이 보인다면 전체 구조가 내전으로 붕괴할 수 있음을 암시한다.\n\n마지막으로 임명된 어둠군단장 '카멘'은 이 불안정성에 또 다른 변수를 더한다. 그는 페트라니아 깊숙한 곳에서 홀연히 나타나 압도적인 힘으로 자신의 가치를 증명했지만, 태초부터 존재한 자들조차 그에게서 '수상한 기운'을 느꼈다. 이는 앞서 언급된, 카제로스가 인지하지 못했던 '이그하람의 흩어진 두 조각'과 연결될 가능성이 매우 높다. 카멘이 바로 이그하람의 혼돈의 파편을 품은 화신일 수 있다는 것이다. 이 가설이 사실이라면, 카멘과 카단의 대결은 단순한 병사들의 싸움을 넘어, 아크라시아의 유산과 그 최초의 숙적인 혼돈의 잔재 사이의 대리전이라는 더 깊은 의미를 갖게 된다.`,
    images: [
      worldviewImg6, // 2.1
      "",
      worldviewImg7, // 2.2
      "",
      worldviewImg8 // 2.3
    ],
    category: 'worldview',
    type: 'story', 
    page: 'worldview',
    bg: worldviewImg5
  },
  {
    title: "제 3부: 사슬전쟁 (Chain War)",
    content: `이 장은 로스트아크 역사의 중심축을 이루는 대사건으로, 카제로스 군단에 의한 아크라시아 침공을 다룬다. '에스더'라 불리는 전설적인 영웅들의 등장과 그들이 악마 군단장들을 상대로 벌인 필사적인 항전, 그리고 이후 500년의 세계를 규정하게 될 불완전한 승리의 과정을 연대기적으로 기록한다.\n\n3.0 전조: 포튼쿨 전쟁과 세이크리아의 위선\n사슬전쟁이 발발하기 직전, 아크라시아는 이미 내부의 갈등으로 신음하고 있었다. 신을 섬기는 신성 제국 세이크리아는 루페온의 뜻을 전파한다는 명분 아래, 북부의 포튼쿨 대륙을 향한 대규모 침략 전쟁, '포튼쿨 전쟁'을 일으켰다. 그러나 이 전쟁의 실상은 신앙 전파가 아닌, 포튼쿨의 풍부한 자원을 노린 침략 행위였다. 세이크리아의 맹목적인 광신과 위선은 수많은 희생을 낳았고, 아크라시아 북부의 국력을 크게 소진시켰다.\n\n이처럼 아크라시아의 종족들이 서로를 향해 칼을 겨누고 있을 때, 페트라니아의 붉은 달이 마침내 빛을 잃었다. 세이크리아는 포튼쿨 전쟁에 국력을 쏟아부은 탓에, 정작 온 세상을 위협하는 악마 군단의 침공에는 제대로 대응할 수 없었다. 이 내부의 분열과 소모전은 악마들에게 더할 나위 없는 기회였으며, 사슬전쟁의 비극을 더욱 증폭시키는 결정적인 원인이 되었다. 이는 아크라시아의 가장 큰 위협이 외부의 악마뿐만 아니라, 내부의 오만과 탐욕에서 비롯될 수 있음을 보여주는 중요한 사건이다.\n\n3.1 침공과 가디언의 배신\n페트라니아의 붉은 달이 마침내 빛을 잃자, 예언대로 아크라시아 전역에 카오스게이트가 열렸다. 카멘이 이끄는 어둠군단을 필두로 카제로스의 군세가 쏟아져 나왔다. 이에 맞서 에버그레이스가 이끄는 가디언들이 깨어나 방어에 나섰다. 그러나 카제로스는 페트라니아에서 데려온 '태초부터 존재한 자들'을 시켜 아크라시아의 하늘에 새로운 붉은 달을 만들어냈고, 이로 인해 악마들의 힘은 폭발적으로 증가했다. 이때, 태생적으로 혼돈의 힘을 일부 지니고 있던 가디언 '바르칸'이 카제로스의 힘에 매료되어 에버그레이스를 배신하고 카멘과 함께 그를 공격했다. 이 배신 행위는 가디언들의 방어선을 순식간에 무너뜨렸고, 아크라시아를 멸망 직전으로 몰아넣었다.\n\n이 사건은 전쟁의 패배 위기가 악마들의 강함 때문만이 아니라, 아크라시아 고유의 방어 체계가 지닌 내재적 결함 때문에 초래되었음을 명확히 보여준다. 가디언의 창조 과정에서부터 예견되었던 바르칸의 배신은, 신들이 고안한 해결책이 종종 다음 실패의 씨앗을 품고 있음을 증명한다. 과거의 실패(할족 전쟁)로 인해 불간섭 원칙을 고수하게 된 신들의 부재는, 이처럼 역설적인 존재들에게 세계의 운명을 맡기는 결과를 낳았다.\n\n3.2 에스더의 부상과 아크의 힘\n절망의 순간, 인간의 왕 루테란을 필두로 한 일곱 명의 필멸자 영웅들이 일어나 저항을 이끌었다. 이들이 바로 훗날 '에스더'라 불리게 될 영웅들이었다. 그러나 그들의 힘만으로는 역부족이었다. 마지막 수단으로, 에버그레이스는 가디언 '미스틱'에게 명하여 최초의 전쟁 이후 숨겨두었던 일곱 조각의 아크를 가져오게 했다. 루테란은 하나로 합쳐진 아크를 받아 그 '태초의 빛'을 해방시켰다. 이 힘은 다른 에스더들에게도 흘러 들어가 그들을 강화했고, 비로소 악마 군단장들과 대등하게 싸울 수 있는 힘을 부여했다.\n\n이 대목은 아크가 단순히 모든 것을 해결하는 '데우스 엑스 마키나'가 아님을 분명히 한다. 아크의 힘은 그 힘을 담을 자격이 있는 자(루테란)와 그 힘을 함께 나눌 통일된 영웅들(에스더)이 있었기에 비로소 발현될 수 있었다. 서사는 아크가 독립적으로 행동한 것이 아니라 에스더들을 '강화'했다고 강조한다. 이는 로스트아크 세계관의 중요한 원칙을 확립한다. 즉, 거대한 힘은 존재하지만 그것을 활성화할 필멸자의 의지, 용기, 그리고 단결이 없다면 무용지물이라는 것이다. 이는 훗날 플레이어 캐릭터인 '계승자'의 중요성을 정당화하는 서사적 기반이 된다.\n\n3.3 불완전한 승리: 봉인된 육신, 탈출한 영혼\n아크의 힘을 얻은 에스더들은 '루페온의 사슬'이라 불리는 거대한 빛의 감옥을 만들어 카제로스의 육신을 봉인하기 시작했다. 봉인이 완성되고 카오스게이트가 닫히기 시작하자, 카제로스는 마지막 순간에 자신의 영혼을 육체에서 분리하여 살아남은 군단장들과 함께 페트라니아로 탈출하는 결단을 내렸다. 그의 육신은 쿠르잔의 안타레스 화산 심장부에 봉인되었지만, 그의 의식과 의지는 자유로운 상태로 남았다. 전쟁은 승리했지만, 적은 소멸하지 않았다. 전쟁이 끝난 후, 에스더들은 아크의 위험성을 인지하고 다시 한번 일곱 조각을 전 세계에 나누어 숨기기로 합의했다.\n\n사슬전쟁의 결말은 전술적 승리였으나, 동시에 전략적 실패였다. 카제로스의 육신만을 봉인한 것은 분쟁에 '정지' 버튼이 아닌 '일시정지' 버튼을 누른 것에 불과했다. 이후 아크를 다시 숨기기로 한 결정은, 선한 의도에도 불구하고 치명적인 판단 착오였다. 이 결정은 이후 500년간의 '평화로운 망각'으로 이어져, 다음 전쟁에 필요한 지식과 도구가 완전히 소실되는 결과를 낳았다. 이로써 과거의 영웅들은 현 시대가 마주한 위기의 직접적인 원인 제공자가 되었다.\n\n[사슬전쟁 시대의 핵심 인물]\n\n루테란\n- 소속/종족: 에스더 / 인간\n- 직위/역할: 루테란의 왕, 총사령관\n- 주요 행적: 에스더를 규합하고 7개의 아크를 모두 사용하여 카제로스를 봉인함.\n\n카단\n- 소속/종족: 에스더 / 인간\n- 직위/역할: 최초의 에스더\n- 주요 행적: 어둠군단장 카멘과 세계를 뒤흔드는 결투를 벌임.\n\n아제나\n- 소속/종족: 에스더 / 실린\n- 직위/역할: 실린의 여왕\n- 주요 행적: 몽환군단장 아브렐슈드와 거대한 마법 대결을 펼침.\n\n카제로스\n- 소속/종족: 악마 / 심연의 군주\n- 직위/역할: 페트라니아의 황제\n- 주요 행적: 침공을 주도하고 아크라시아에 붉은 달을 생성함. 육신이 아크에 의해 봉인됨.\n\n카멘\n- 소속/종족: 악마 / 어둠군단\n- 직위/역할: 군단장\n- 주요 행적: 침공의 선봉에 서서 카단과 전설적인 결투를 벌임.\n\n에버그레이스\n- 소속/종족: 가디언\n- 직위/역할: 최초이자 최강의 가디언\n- 주요 행적: 카제로스에 대한 초기 방어를 이끌었으나, 바르칸의 배신으로 중상을 입음.\n\n바르칸\n- 소속/종족: 가디언 (배신자)\n- 직위/역할: 혼돈의 가디언\n- 주요 행적: 에버그레이스를 배신하고 카제로스의 편에 서서 전쟁의 판도를 뒤집음.`,
    images: [
      worldviewImg11, // 3.0
      worldviewImg12,
      worldviewImg13, // 3.1
      "",
      worldviewImg16, // 3.2
      "",
      worldviewImg17, // 3.3
      "",
      worldviewImg18 // 3.3
    ],
    category: 'worldview',
    type: 'story', 
    page: 'worldview',
    bg: worldviewImg10
  },
  {
    title: "제 4부: 개척의 500년",
    content: `이 장은 사슬전쟁과 현재 시점 사이의 기나긴 공백기를 다룬다. 재건과 분열, 그리고 사회-정치적 진화의 시대로, 전쟁의 여파가 새로운 국가, 새로운 종족, 그리고 새로운 갈등의 형태로 발현되는 과정을 추적한다.\n\n4.1 전후 세계: 건국과 분열의 태피스트리\n전쟁이 끝난 후, 에스더들은 각자의 길을 걸었고, 그들의 운명은 새로운 국가들의 역사를 형성했다.\n\n 애니츠: 에스더 시엔이 건국했으나, 그가 자신의 힘을 제어하지 못하고 은둔하면서 수련을 통한 규율과 고립주의 문화를 낳았다.\n\n 페이튼: 사슬전쟁의 여파(붉은 달의 파편)로 악마와 인간의 혼혈인 '데런'이 탄생했다. 종교 국가 세이크리아의 대규모 학살을 피해 살아남은 데런들은 저주받은 땅 페이튼으로 도망쳐, 그곳에서 자신들의 악마적 힘을 통제하는 법을 익혔다.\n\n 베른: 전쟁 중 아브렐슈드는 로헨델의 실린 일부를 타락시켰다. 전쟁 후, 여왕 아제나는 이들을 추방했고, '에아달린'의 지도 아래 추방된 실린들은 실용주의적이고 다문화적인 국가 베른을 건국했다.\n\n 아르데타인: 광신적인 세이크리아 교단은 과학자들과 마법사들 또한 이단으로 규정하여 추방했다. 이들은 척박한 사막에 정착하여 신앙 대신 기술을 숭배했고, 마침내 스스로를 사이보그 종족인 '케나인'으로 개조했다.\n\n 루테란: 400년간의 황금기를 누렸으나, 내부 부패로 쇠락했다. 게임의 시작 시점은 정당한 계승자 '실리안'과 그의 삼촌이자 찬탈자인 '슈헤리트' 사이의 내전이 벌어지고 있는 상황이다.\n\n이러한 각국의 건국사는 현대 아크라시아의 정치 지도가 평화로운 팽창의 산물이 아니라, 사슬전쟁이 남긴 트라우마, 분열, 이념적 파편의 직접적인 결과물임을 보여준다. 에스더들의 단결은 일시적이었고, 그들이 남긴 유산은 이전보다 훨씬 더 분열되고 이념적으로 다양하며, 동시에 대립하는 세계였다.\n\n4.2 갈등의 유산: 새로운 아크가 된 아크라시움\n전쟁은 물리적인 유산도 남겼다. 아크의 힘이 결정화된 '아크라시움'과 붉은 달의 파편인 '혼돈의 조각'이 그것이다. 특히 아크라시움은 기술 발전과 군사력의 핵심 동력이 되는 혁명적인 자원이 되었다. 아크라시움이 풍부한 욘의 우마르족은 부를 축적했고, 베른은 이를 대량으로 수입하고 무기화하여 국력을 키웠다. 이 새로운 자원은 새로운 부와 권력의 불균형, 그리고 국가 간의 새로운 긴장을 창출했다.\n\n이는 역사가 스스로를 반복하고 있음을 보여준다. 아크라시움은 전후 시대에, 마치 여명의 시대에 신성한 아크가 했던 것과 정확히 동일한 역할을 수행한다. 그것은 발전을 가속화하고, 극심한 불평등을 낳으며, 국제적 긴장과 잠재적 갈등의 원인이 된다. 자료는 아크라시움이 "힘의 격차를 더욱 극명하게 갈라놓았고" "대륙간의 힘의 균형을 변화시키는 계기"가 되었다고 기술하는데 , 이는 여명의 시대에 아크가 할족을 "교만"하게 만들어 전쟁을 일으켰던 과정과 기능적으로 동일하다. 세상은 신성 대신 과학에 의해 주도된다는 점만 다를 뿐, 권력 획득과 오만이라는, 최초의 대재앙을 초래했던 것과 같은 순환을 무의식적으로 반복하고 있는 것이다.`,
    images: [
      worldviewImg19,
      worldviewImg20,
      worldviewImg21,
      worldviewImg22,
      worldviewImg23,
      worldviewImg25,
      "",
      worldviewImg24
    ],
    category: 'worldview',
    type: 'story', 
    page: 'worldview',
    bg: worldviewImg19,
  },
  {
    title: "제 5부: 의지를 계승하는 자",
    content: `이 마지막 장은 고대사와 게임의 시작점 사이의 간극을 잇는다. 기나긴 평화가 어떻게 위험한 집단적 기억상실로 이어졌는지, 그리고 카제로스의 귀환과 함께 잊혀진 사명을 이어받을 새로운 영웅, 즉 플레이어가 등장하는 배경을 설명한다.\n\n5.1 기억의 풍화: 기나긴 평화와 잊혀진 아크\n사슬전쟁 이후 500년의 비교적 평화로운 세월이 흘렀다. 세대가 거듭되면서 대전쟁의 기억은 희미해졌다. 악마와의 싸움, 영웅들의 희생, 그리고 가장 중요하게는 아크의 존재가 역사에서 신화와 동화 속 이야기로 전락했다. 한 음유시인이 광장에서 아크에 대해 노래하자 청중은 그를 조롱했다. 각국의 지도자들은 자신들의 발전과 정치에 몰두하며 현실에 안주했다.\n\n이 500년의 평화는 아크라시아의 가장 위대한 성취인 동시에 가장 심각한 취약점이었다. 이 안정된 시기는 카제로스의 필연적인 귀환에 맞서는 데 필요한 문화적 기억과 제도적 지식을 적극적으로 침식했다. 이야기는 경계심이란 사용하지 않으면 퇴화하는 근육과 같으며, 평화를 쟁취한 이유를 잊게 만든다면 기나긴 평화가 짧은 전쟁보다 더 위험할 수 있다는 강력한 주제를 제시한다.\n\n5.2 어둠의 태동과 모험가의 소명\n안주한 세계가 눈치채지 못하는 사이, 카제로스의 육신을 옭아맨 봉인이 약해지기 시작했다. 쿠르잔의 화산이 다시 활동을 시작했고, 봉인된 육신은 페트라니아에 있는 그의 자유로운 영혼과 공명하며 아크라시아 전역에 다시금 작은 카오스게이트들을 열었다. 위협이 조용히 재개될 무렵, 플레이어 캐릭터는 신비로운 존재 '베아트리스'에 의해 예언의 땅 '트리시온'으로 소환된다. 그녀는 잊혀진 진실을 알려주며, 흩어진 일곱 개의 아크를 찾아 임박한 종말을 막으라는 거대한 임무를 부여한다.\n\n여기서 플레이어의 역할은 단순히 영웅이 되는 것을 넘어선다. '계승자'로서의 그들의 구체적인 역할은 아크라시아를 마비시킨 기억상실을 되돌리는 것이다. 아크를 찾아 떠나는 여정은 곧 세계의 잃어버린 역사를 되짚어가는 여정이다. 플레이어는 카제로스를 완전히 파괴하지 못하고 아크를 숨기는 flawed strategy를 택했던 에스더의 실수를 학습할 수 있는 위치에 놓인다. 플레이어의 궁극적인 목표는 단순히 에스더의 승리를 반복하는 것이 아니라, 전설적인 영웅들이 일시적인 해결책에 그쳤던 그 지점을 넘어 영구적인 해결책을 달성하며 그들을 능가하는 것이다.`,
    images: [
      worldviewImg27,
      "",
      worldviewImg28
    ],
    category: 'worldview',
    type: 'story', 
    page: 'worldview',
    bg: worldviewImg26,
  },
  {
    title: "결론",
    content: `아크라시아의 연대기는 질서와 혼돈의 근원적 대립에서 시작하여, 필연적으로 반복되는 갈등의 순환 구조를 보여준다. 신들의 창조물인 아크라시아 종족들은 내재된 오만으로 최초의 내전을 일으켰고, 신들의 절대적인 심판은 또 다른 원한과 불간섭이라는 새로운 문제를 낳았다. 질서와 혼돈의 융합으로 탄생한 가디언은 그 태생적 모순으로 인해 배신자를 낳았고, 이는 아크라시아를 멸망 직전으로 몰아넣었다.\n\n사슬전쟁의 영웅들인 에스더는 필멸자의 의지와 단결로 위기를 극복했지만, 적을 완전히 소멸시키지 못하고 문제의 근원인 아크를 다시 숨기는 불완전한 해결책을 택했다. 이 결정은 500년의 평화라는 성과를 낳았지만, 동시에 전쟁의 교훈을 망각하게 만들어 현 시대의 위기를 초래하는 직접적인 원인이 되었다.\n\n결론적으로 로스트아크의 세계관은 영웅과 신들조차 완벽하지 않으며, 그들의 불완전한 결정이 다음 세대의 숙제로 이어진다는 복잡한 인과관계의 사슬로 엮여 있다. 플레이어, 즉 '계승자'의 역할은 이 역사적 과오의 사슬을 인지하고, 과거의 영웅들이 이루지 못했던 완전한 해결을 통해 이 순환을 끊어내는 것이다. 본 보고서에 정리된 체계적인 정보는 이러한 깊이 있는 서사 구조를 데이터베이스에 정확히 반영하고, 일관성 있는 세계관을 유지하는 데 필수적인 기반이 될 것이다.`,
    images: [worldviewImg4],
    category: 'worldview',
    type: 'story', 
    page: 'worldview',
    bg: worldviewImg2
  },
  {
    title: "아르테미스: 성역의 그림자",
    content: "아크를 찾아 세상의 끝, 트리시온에서 눈을 뜬 계승자. 빛의 길을 따라 도착한 곳은 고즈넉한 대륙 아르테미스였습니다. 레온하트의 대성당에서, 계승자는 운명처럼 마음씨 착한 사제 '아만'을 만납니다. 그는 상처 입은 이들을 보살피며, 악마들이 퍼뜨리는 끔찍한 역병으로 고통받는 사람들을 구하기 위해 애쓰고 있었죠. 계승자는 그의 숭고한 뜻에 동참하여 역병의 근원을 파헤치기 위한 여정을 함께 시작합니다.\n\n두 사람은 역병이 시작된 로그힐 지역을 조사하며, 이 모든 비극의 배후에 세이크리아 교단이 있음을 어렴풋이 눈치챕니다. 신을 섬겨야 할 교단이 오히려 악마를 숭배하고, 광신에 빠져 세상을 혼란에 빠뜨리고 있었던 것입니다. 그 정점에는 강력한 흑마법사 '가르쿨'이 있었습니다. 계승자와 아만은 국경지대를 넘어 아길로스의 머리에서 마침내 가르쿨과 그의 추종자들을 마주합니다. 치열한 전투 속에서 아만은 자신을 희생해서라도 사람들을 구하려는 모습을 보이며 계승자와 깊은 유대를 쌓습니다. 마침내 가르쿨을 쓰러뜨린 후, 계승자는 아르테미스 대성당 깊숙한 곳에 숨겨져 있던 첫 번째 아크, '믿음의 아크, 파이투스'를 손에 넣으며 위대한 여정의 첫발을 내딛습니다.",
    images: [ "/images/story/artemis_aman.jpg", "/images/story/artemis_garkul.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '78%', left: '50%' }
  },
  {
    title: "유디아: 소금사막의 고대 유물",
    content: "두 번째 아크의 단서를 찾아 계승자가 도착한 곳은 끝없는 소금사막이 펼쳐진 척박한 땅, 유디아였습니다. 그곳에서 계승자는 사막을 떠도는 유랑민 '천칭단'과 그들의 족장인 강인한 여성 '모리나'를 만납니다. 천칭단은 대대로 자신들의 성지 '오즈혼 구릉지'를 지켜왔지만, 최근 세이크리아 교단이 성지에서 고대의 유물 '아제나포리움'을 발굴하려 한다며 도움을 요청합니다. 그들은 유물의 힘을 독차지하기 위해 부족을 위협하고, 심지어 악마와도 손을 잡는 끔찍한 짓을 서슴지 않고 있었습니다.\n\n계승자는 모리나와 힘을 합쳐 교단의 야욕을 막아서기로 합니다. 조사 과정에서 교단이 소금사막의 전설적인 존재, '소금 거인'을 깨워 유적의 문을 열려 한다는 사실을 알게 됩니다. 계승자는 거대한 소금 거인의 몸속으로 직접 들어가, 그 안에 숨겨져 있던 오즈혼 구릉지의 신성한 유적에 도달합니다. 유적 깊은 곳에서 사악한 의식을 치르던 교단을 저지하고, 마침내 두 번째 아크, '인도의 아크, 오르투스'를 발견하며 유디아의 평화를 되찾아줍니다.",
    images: [ "/images/story/yudia_morina.jpg", "/images/story/yudia_salt_giant.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '76%', left: '55%' }
  },
  {
    title: "루테란 서부: 격전의 서막",
    content: "두 개의 아크를 손에 넣은 계승자는 아크라시아에서 가장 강력한 국가, 루테란으로 향합니다. 그러나 위대한 왕 루테란의 후예들이 세운 이 나라는 끔찍한 내전에 휩싸여 있었습니다. 정당한 왕위 계승자인 '실리안' 왕자는 왕위를 찬탈하려는 야심가 숙부 '슈헤리트'에게 쫓겨 변방으로 밀려나 있었죠. 실리안은 백성을 사랑하는 마음과 굳건한 의지를 가졌지만, 슈헤리트의 막강한 군세 앞에 힘을 잃어가고 있었습니다.\n\n계승자는 실리안 왕자의 편에 서서, 그의 정의로운 싸움을 돕기로 결심합니다. 험준한 자고라스 산의 요새를 탈환하는 것을 시작으로, 레이크바의 아름다운 호수를 가로지르며 슈헤리트의 군대를 연달아 격파합니다. 이 과정에서 보여준 계승자의 뛰어난 용맹과 지혜는 실리안에게 깊은 감명을 주었고, 마침내 계승자는 실리안의 가장 믿음직한 동료이자 '왕의 기사'라는 명예로운 칭호를 받게 됩니다. 수많은 전투를 승리로 이끈 왕의 기사와 실리안의 군대는 마침내 수도로 향하는 길을 열고, 찬탈당한 왕좌를 되찾기 위한 최후의 결전을 준비합니다.",
    images: [ "/images/story/luterra_silian.jpg", "/images/story/luterra_war.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '78%', left: '58.6%' }
  },
  {
    title: "루테란 동부: 왕의 자격과 동료의 배신",
    content: "루테란 동부로 진격한 실리안과 계승자는 마침내 루테란 성을 포위하고 최후의 결전을 벌입니다. 거대한 성벽 위에서 벌어진 치열한 공성전은 루테란의 역사를 새로 쓰는 순간이었습니다. 계승자의 눈부신 활약과 연합군의 함성 속에서, 마침내 슈헤리트의 깃발이 꺾이고 그는 패배를 맞이합니다. 실리안은 백성들의 환호 속에 루테란의 정당한 왕으로 즉위하고, 이 위대한 공로를 인정하여 계승자에게 세 번째 아크, '맹세의 아크, 쿠스토스'를 하사합니다.\n\n하지만 길었던 내전의 끝에서 찾아온 평화는 너무나도 짧았습니다. 아크의 힘을 노리는 악마 '카마인'이 나타나고, 그를 쫓던 계승자와 아만은 모라이 유적에서 아크라시아의 운명을 뒤흔들 충격적인 진실과 마주합니다. 그곳에서는 세이크리아의 고위 사제들이 악마를 소환하는 끔찍한 의식을 벌이고 있었습니다. 인간을 구원해야 할 사제들의 타락과 위선을 목격한 아만은 깊은 절망에 빠집니다. 결국 그는 내면에 잠재되어 있던 데런의 힘을 폭주시키며 현장의 모든 사제들을 학살하고 맙니다. 피로 물든 유적에서 그는 계승자에게 \"세상을 구원할 나만의 방식을 찾겠다\"는 말을 남긴 채, 카마인과 함께 어둠 속으로 사라집니다. 가장 믿었던 동료의 배신은 계승자의 마음에 지울 수 없는 깊은 상처를 남겼습니다.",
    images: [ "/images/story/luterra_castle.jpg", "/images/story/luterra_aman_betrayal.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '75%', left: '62.4%' }
  },
  {
    title: "토토이크: 모코코의 섬",
    content: "가장 친한 친구였던 아만의 배신으로 깊은 상심에 빠진 계승자. 무거운 마음을 안고 다음 아크를 찾아 거대한 거북이의 등 위에 세워진 섬, 토토이크로 향합니다. 이곳은 세상의 근심 걱정이 없는 듯, 순수한 마음을 가진 작은 요정 '모코코'들이 살아가는 평화로운 땅이었습니다. 계승자는 모코코들과 소통하기 위해 마법의 힘으로 직접 작은 모코코로 변신합니다. 그들과 어울리며, 토토이크의 몸 속 깊은 곳에 네 번째 아크가 잠들어 있다는 사실을 알게 됩니다.\n\n하지만 이 평화로운 섬에도 위기가 찾아옵니다. 탐욕스러운 해적들이 나타나 토토이크의 심장을 노리고 침략해온 것입니다. 해적들은 섬을 파괴하고 모코코들을 위협했습니다. 계승자는 작은 몸이지만 큰 용기를 내어 모코코들과 힘을 합칩니다. 함께 해적들의 함정을 헤쳐나가고, 힘을 모아 악당들을 물리쳐 마침내 토토이크의 생명을 구합니다. 이에 감동한 거대한 거북이 토토이크는 감사의 표시로 자신의 몸 속에 고이 간직하고 있던 네 번째 아크, '조화의 아크, 하모니'를 계승자에게 선물합니다.",
    images: [ "/images/story/tortoyk_main.jpg", "/images/story/tortoyk_mokoko.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '61%', left: '71.6%' }
  },
  {
    title: "애니츠: 무도가의 나라",
    content: "네 개의 아크를 모은 계승자는 동방의 신비로운 무예 대륙, 애니츠로 향합니다. 이곳은 과거 사슬전쟁의 영웅, 에스더 '시엔'의 후예들이 다스리는 곳으로, 강인한 정신과 무예를 숭상하는 이들의 땅입니다. 마침 애니츠에서는 매년 대륙 최고의 무인을 가리는 '무투대회'가 열리고 있었습니다. 놀랍게도 다섯 번째 아크, '힘의 아크, 포르투스'가 바로 이 대회의 우승 상품이었죠.\n\n계승자는 아크를 얻기 위해 대회에 참가하여, 각 문파를 대표하는 강력한 경쟁자들을 차례로 꺾고 결승에 진출합니다. 용의 후예, 소금사막의 검객 등 쟁쟁한 실력자들과의 대결은 한 편의 영화와도 같았습니다. 그러나 결승전이 시작되기 직전, 대회 총괄인 '연가문'의 추악한 음모가 밝혀집니다. 그들은 악마와 결탁하여, 대회를 이용해 패배한 무인들의 생명력을 흡수하고 강력한 악마를 소환하려는 사악한 의식을 치르고 있었던 것입니다.\n\n진실을 알게 된 계승자는 에스더 '시엔'의 의지를 계승한 대사부 '웨이'의 도움을 받아 연가문의 음모를 저지합니다. 악마의 기운을 잠재운 후, 마침내 결승전에서 승리하여 애니츠 최고의 무인으로 인정받고 다섯 번째 아크를 손에 넣습니다.",
    images: [ "/images/story/anikka_tournament.jpg", "/images/story/anikka_wei.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '50%', left: '81.6%' }
  },
  {
    title: "아르데타인: 기계와 무법의 땅",
    content: "다섯 개의 아크를 찾은 계승자는 마지막 아크의 단서를 쫓아 황량한 사막 대륙 아르데타인으로 떠납니다. 이곳은 감정 대신 이성을 숭배하고, 신체를 기계로 개조하는 것을 영광으로 여기는 케나인들의 땅입니다. 수도 슈테른의 공기는 차가운 기계음과 매연으로 가득했죠. 계승자는 슈테른의 실력자 '바스티안'과 천재 공학자 '사샤'를 만나 그들의 도움으로 아크의 행방을 쫓기 시작합니다.\n\n하지만 아르데타인의 지배 세력이자 거대 군수기업인 '아이젠'은 외부인인 계승자를 극도로 경계하며 협조를 거부합니다. 설상가상으로 무법자 집단 '슈트롬'은 사사건건 계승자의 앞을 가로막습니다. 이 혼란을 틈타, 세이크리아의 이단심문관 '솔라스'를 따르는 광신도 집단까지 아크를 노리고 암약하기 시작하며 상황은 더욱 복잡해집니다. 계승자는 이 모든 세력의 방해를 뚫고, 아이젠의 거대 병기 '에어가이츠'의 폭주를 막아내야만 했습니다. 마침내 아르데타인 최심부에 위치한 크라테르의 눈에서 여섯 번째 아크를 손에 넣는 순간, 모든 것을 지켜보던 카마인이 나타나 아크를 강탈해갑니다. 그는 \"이것은 내기의 일부일 뿐\"이라는 의미심장한 말을 남기고 사라지며, 계승자는 처음으로 카마인의 거대한 계획과 마주하게 됩니다.",
    images: ["/images/story/arthetine_main.jpg", "/images/story/arthetine_kharmine.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '31%', left: '75.4%' }
  },
  {
    title: "베른 북부: 여왕의 기사",
    content: "카마인에게 아크를 빼앗긴 계승자는 실마리를 찾기 위해 마법 종족 실린들의 나라, 베른으로 향합니다. '여왕의 성' 베른 성에서, 계승자는 실린들의 현명한 통치자 '에아달린' 여왕을 만납니다. 에아달린은 계승자의 잠재력을 한눈에 알아보고, 그를 '여왕의 기사'로 임명하여 베른의 정예 군사 훈련을 받게 합니다. 고대의 마법과 현대 전술이 결합된 훈련을 통해 계승자는 한층 더 성장합니다.\n\n모든 훈련을 마치고 정식 기사로 임명되는 영광스러운 날, 하늘이 찢어지며 거대한 카오스게이트가 열립니다. 그리고 그곳에서 마수군단장 '발탄'과 그의 흉포한 군단이 쏟아져 나와 베른 성을 침공합니다. 평화롭던 성은 순식간에 전쟁터로 변했죠. 계승자는 새로 얻은 동료들과 함께 필사적으로 발탄의 군세를 막아내지만, 발탄의 압도적인 힘 앞에 성은 파괴되기 시작합니다. 절체절명의 순간, 에아달린 여왕은 고대의 힘을 해방하여 가까스로 발탄을 격퇴하는 데 성공합니다. 전쟁이 끝난 후, 그녀는 계승자에게 파괴된 혹한의 대륙 '슈샤이어'에 일곱 번째 아크가 잠들어 있다는 사실을 알려주며, 다가올 더 큰 전쟁에 대비해야 한다고 경고합니다.",
    images: ["/images/story/vern_eadalyn.jpg", "/images/story/vern_valtan.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '40%', left: '57.4%' }
  },
  {
    title: "슈샤이어: 혹한과 복수의 땅",
    content: "여왕의 명을 받은 계승자는 살을 에는 바람이 부는 혹한의 대륙, 슈샤이어에 도착합니다. 이곳은 과거 사슬전쟁 당시, 아크의 강력한 힘에 의해 영원한 겨울 속에 갇혀버린 비운의 땅이었습니다. 계승자는 일곱 번째 아크를 찾는 과정에서 충격적인 진실과 마주합니다. 슈샤이어의 실질적인 지배자인 그림자달 시장의 '다이나'는 이 저주를 풀기 위해 악마와 손을 잡고 있었습니다. 그녀는 대륙을 구원한다는 명목으로 더 큰 비극을 초래하려 했습니다.\n\n한편, 계승자는 악마들에게 가족을 잃고 복수심에 불타는 '잿빛 늑대단'의 고독한 전사 '진 매드닉'과 만납니다. 그는 악마를 소환하여 대륙을 파괴하려는 그림자달 시장의 계획을 막기 위해 홀로 고군분투하고 있었죠. 계승자는 그의 복수와 정의감에 공감하며 힘을 합칩니다. 함께 악마 소환 의식을 저지하고, 마침내 얼어붙은 호수 가장 깊은 곳에서 일곱 번째 아크를 찾아냅니다. 이로써 7개의 아크가 모두 모이게 됩니다. 하지만 그 기쁨도 잠시, 아만을 통해 아크가 세이크리아의 손에 들어갈 것을 우려한 카마인이 나타나, 계승자가 모은 7개의 아크를 모두 빼앗아 유유히 사라집니다.",
    images: ["/images/story/shushire_main.jpg", "/images/story/shushire_jin_madnick.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '11%', left: '59.6%' }
  },
  {
    title: "로헨델: 몽환과 타락의 숲",
    content: "모든 아크를 눈앞에서 빼앗긴 계승자. 허탈함 속에서도 악마들의 음모를 저지하기 위해 또 다른 실린들의 땅, 마법의 대륙 로헨델로 향합니다. 이곳은 베른의 여왕 에아달린의 언니인 '아제나' 여왕이 다스리는 땅으로, 강력한 환영 마법과 정령들의 힘으로 보호받는 신비로운 곳이었습니다. 하지만 로헨델의 아름다운 겉모습 이면에는 깊은 상처가 있었습니다. 과거 몽환군단장 '아브렐슈드'에 의해 타락한 실린 '게르디아'가 몽환의 힘을 이용해 로헨델을 내부에서부터 좀먹고 있었던 것입니다.\n\n계승자는 로헨델의 정령들과 힘을 합쳐 타락의 근원을 추적합니다. 이 과정에서 냉철한 여왕 아제나와 그녀의 또 다른 자아이자 자애로운 성품을 지닌 '이난나'의 도움을 받게 됩니다. 몽환의 숲을 헤치고, 뒤틀린 환영과 맞서 싸우며 마침내 몽환의 궁전 깊숙한 곳에 도달한 계승자는, 타락의 근원인 게르디아를 쓰러뜨리고 로헨델을 정화하는 데 성공합니다. 이 사건을 계기로 아크라시아 연합은 강력한 아군을 얻게 됩니다.",
    images: ["/images/story/rohendel_azena.jpg", "/images/story/rohendel_dream.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '50%', left: '27.2%' }
  },
  {
    title: "욘: 강철과 불꽃의 나라",
    content: "로헨델의 사건 이후, 계승자는 지하 세계에 위치한 우마르들의 나라, 욘으로 향합니다. 대장장이의 신 갈라투르의 후예들이 세운 이 나라는, 풍부한 지하자원과 세계 최고의 대장 기술을 바탕으로 막대한 부를 쌓은 곳입니다. 그들의 자부심은 하늘을 찔렀고, 거대한 지하도시는 불꽃과 강철의 열기로 가득했습니다. 하지만 욘의 영광 아래, 어두운 그림자가 드리우고 있었습니다. 욘의 지하 깊은 곳, '오만의 방주'에 봉인되어 있던 고대 우마르의 왕 '안케로스'가 몽환군단장 아브렐슈드의 힘에 의해 타락한 채 부활을 꿈꾸고 있었던 것입니다.\n\n계승자는 욘의 호탕한 왕 '케이사르'와 위대한 대장장이 '바훈'의 도움을 받아 지하 유적으로 향합니다. 긍지 높은 우마르 전사들과 어깨를 나란히 하고, 고대 병기들을 깨워 부활한 안케로스와 그의 군단에 맞서 싸웁니다. 치열한 전투 끝에 마침내 안케로스를 격파하고, 욘 대륙을 위기에서 구해냅니다. 이 공로로 계승자는 우마르들의 진정한 친구로 인정받습니다.",
    images: ["/images/story/yorn_main.jpg", "/images/story/yorn_ark.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '85%', left: '21%' }
  },
  {
    title: "페이튼: 저주와 구원의 땅",
    content: "악마군주 카제로스의 부활이 임박하자, 그의 군단장들은 본격적인 침공을 준비하기 시작합니다. 그 첫 번째 목표는 저주받은 데런들의 땅, 페이튼이었습니다. 붉은 달이 드리운 이 척박한 땅에 질병군단장 '일리아칸'이 끔찍한 역병을 퍼뜨려 모든 생명을 말살하려 합니다. 계승자는 일리아칸을 막기 위해 페이튼으로 향하고, 그곳에서 데런들을 이끄는 암살자 집단 '아베스타'와 함께 싸우게 됩니다.\n\n이 과정에서 계승자는 데런들이 짊어진 깊은 고통과 슬픔을 목격합니다. 그들은 내면에 존재하는 악마성과 싸우며, 저주 속에서도 인간성을 잃지 않으려 발버둥 치고 있었습니다. 한편, 카마인은 페이튼에 숨겨져 있던 혼돈의 조각, '붉은 달의 조각'을 손에 넣기 위해 암약합니다. 계승자는 일리아칸의 군세를 물리치고 페이튼을 구하지만, 결국 카마인이 붉은 달의 조각을 차지하는 것을 막지는 못합니다. 조각의 힘을 흡수하며 더욱 강력해진 카마인. 계승자는 그가 단순한 악마가 아닌, 상상조차 할 수 없는 거대한 계획을 품고 있음을 다시 한번 깨닫게 됩니다.",
    images: ["/images/story/feiton_main.jpg", "/images/story/feiton_kharmine_red.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '27%', left: '23.8%' }
  },
  {
    title: "파푸니카: 축제와 낙원의 섬",
    content: "페이튼에서의 처절한 사투 이후, 계승자는 에스더 '이난나'의 인도를 받아 잠시의 휴식을 위해 낙원의 섬 파푸니카로 향합니다. 영원한 여름의 이 섬은 조화와 평화가 가득한 곳으로, 계승자는 잠시나마 전쟁의 상처를 치유하려 합니다. 하지만 평화는 오래가지 않았습니다. 광기군단장 '쿠크세이튼'과 욕망군단장 '비아키스'가 파푸니카를 침공하여, 섬의 생명력의 근원인 '조화의 뿌리'를 타락시키고 낙원을 혼돈에 빠뜨리려 한 것입니다.\n\n계승자는 파푸니카의 족장 '니아'와 마을 사람들과 힘을 합쳐 두 군단장의 침공을 막아냅니다. 이 과정에서 순수하고 겁 많던 소녀 니아는 파푸니카의 새로운 족장으로 당당하게 성장하고, 계승자는 그녀와 깊은 유대를 쌓게 됩니다. 마침내 쿠크세이튼과 비아키스를 몰아낸 후, 파푸니카에는 다시 축제가 열리고 평화가 찾아옵니다. 모든 사건이 끝난 후, 이난나는 계승자에게 카제로스와의 본격적인 전쟁을 위해 베른 남부로 가달라고 부탁하며, 새로운 전쟁의 서막을 알립니다.",
    images: ["/images/story/papunika_main.jpg", "/images/story/papunika_nia.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '76%', left: '33.4%' }
  },
  {
    title: "베른 남부: 격전의 전조",
    content: "카제로스의 군단이 본격적인 침공을 시작하자, 아크라시아의 모든 종족은 여왕 에아달린의 부름에 응답하여 베른 남부로 집결합니다. 루테란의 기사, 애니츠의 무도가, 아르데타인의 케나인, 욘의 우마르까지. 각 대륙의 정예 병력과 흩어졌던 에스더들이 모여 '아크라시아 연합군'을 결성합니다. 계승자는 그간의 공로를 인정받아 이 연합군의 총사령관으로 임명되어 인류 역사상 가장 거대한 전쟁을 지휘하게 됩니다.\n\n하늘에 거대한 카오스게이트가 열리고, 마수군단장 발탄과 욕망군단장 비아키스가 이끄는 끝없는 악마 군단이 쏟아져 나옵니다. 칸다리아 영지에서 벌어진 대격돌은 그야말로 처절했습니다. 치열한 전투 끝에 연합군은 발탄과 비아키스를 격퇴하는 데 성공하지만, 이 과정에서 셀 수 없이 많은 영웅들이 쓰러지며 막대한 피해를 입습니다. 그리고 전쟁의 혼란 속, 최강의 군단장, 어둠군단장 '카멘'이 마침내 모습을 드러냅니다. 그의 압도적인 힘 앞에 연합군은 속수무책으로 무너지고, 최후의 에스더 '카단'이 그와 맞서 싸우는 동안 흔적도 없이 사라집니다. 승리했지만 상처뿐인 영광이었고, 연합군은 카멘이라는 절대적인 공포와 마주하게 됩니다.",
    images: ["/images/story/southvern_war.jpg", "/images/story/southvern_kadan_kamen.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '46%', left: '50%' }
  },
  {
    title: "엘가시아: 신들의 땅",
    content: "카멘의 등장으로 절망에 빠진 아크라시아. 마지막 희망을 찾기 위해 계승자는 금지된 땅, 천공의 대륙이자 라제니스들의 고향인 '엘가시아'로 향하는 길을 엽니다. 그곳에서 계승자는 에스더 '니나브'와 감격적으로 재회하고, 라제니스의 지도자 '라우리엘'을 만납니다. 라우리엘은 아크라시아의 운명이 '빛의 심판'에 달려있다고 말하며, 계승자를 시험에 들게 합니다.\n\n계승자는 카양겔의 시련을 통과하며 라제니스들의 숨겨진 역사와 신들의 세계에 감춰진 충격적인 진실을 알게 됩니다. 빛의 신 루페온이 사실은 질서에 대한 광적인 집착으로 모든 것을 파괴하려 했던 폭군이었으며, 라제니스들은 이를 막기 위해 스스로 날개를 봉인했던 것입니다. 모든 진실이 드러나는 순간, 라우리엘은 루페온의 의지를 계승하여 아크라시아를 '정화'하겠다며 빛의 심판을 시작합니다. 그의 계획으로 세상이 멸망하기 직전, 계승자와 니나브, 그리고 다시 나타난 아만이 힘을 합쳐 라우리엘을 저지합니다. 이 과정에서 아만은 카마인에게서 빼앗은 붉은 달의 조각을 사용하여 카양겔의 폭주를 막고, 아크라시아를 구원한 뒤 다시 모습을 감춥니다.",
    images: ["/images/story/elgacia_main.jpg", "/images/story/elgacia_lauriel.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '10%', left: '6%' }
  },
  {
    title: "로웬: 핏빛으로 물든 대지",
    content: `아크라시아에 또 다른 위협이 감지되자, 당신은 실리안의 명을 받아 잊혀진 대륙 로웬으로 향합니다. 한때 풍요로웠던 이 땅은 붉은 보석 '실마엘'을 둘러싼 두 세력, 자유를 외치는 '타이예르'와 질서를 부르짖는 '프라이겔리'의 끝없는 분쟁으로 황폐해져 있었습니다. 당신은 실종된 마을 사람들을 조사하며 두 세력의 첨예한 대립과 실마엘이 가진 강력하지만 위험한 힘의 실체를 마주하게 됩니다.\n\n중립 지대인 웅크린 늑대의 땅에서 당신은 각 세력의 주요 인물들을 만나며, 어느 쪽의 정의가 옳은 것인지 고뇌에 빠집니다. 하지만 당신의 노력에도 불구하고, 두 세력 간의 갈등은 걷잡을 수 없이 커져 결국 대륙 전체를 뒤흔드는 대규모 전쟁으로 번집니다. 당신은 한쪽 세력을 선택하여 붉은 안개가 자욱한 레갸르방크 대평원에서 펼쳐지는 처절한 전장의 한복판에 서게 됩니다.\n\n전쟁의 끝에서 당신은 이 모든 비극이 과거 로웬을 다스리던 여왕의 잘못된 선택에서 비롯되었음을 알게 됩니다. 그녀는 실마엘의 힘으로 모두를 구원하려 했지만, 오히려 대륙을 분열시키는 결과를 낳고 말았습니다. 전쟁은 잠시 소강상태에 접어들지만, 두 세력의 갈등은 끝나지 않았고, 실마엘을 노리는 외부의 위협까지 감지되며 로웬의 미래는 한 치 앞을 알 수 없는 안갯속에 놓이게 됩니다.`,
    images: ["/images/story/rowen_main.jpg", "/images/story/rowen_war.jpg", "/images/story/rowen_queen.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '10.4%', left: '47.8%' }
  },
  {
    title: "볼다이크: 현자의 탑",
    content: "엘가시아에서 신들의 시대를 종결시킨 계승자. 카제로스를 완전히 소멸시킬 방법을 찾기 위해, 고대 할족의 지식이 잠들어 있는 지혜의 대륙, 볼다이크로 향합니다. 지혜의 신 크라테르의 후예인 현자들이 다스리는 이곳에는 세상의 모든 지식이 보관된 '상아탑'이 우뚝 솟아있습니다. 계승자는 볼다이크의 대현자들과 함께 고대 문헌을 연구하며 카제로스에 대항할 비책을 찾기 시작합니다.\n\n하지만 평화로워 보이는 상아탑 깊은 곳에서는 질병군단장 일리아칸이 고대 할족의 금지된 마법을 이용해 더욱 강력한 모습으로 부활을 준비하고 있었습니다. 그는 상아탑을 오염시키고 현자들을 타락시켜 볼다이크 전체를 자신의 역병 실험장으로 만들려 합니다. 계승자는 대현자들의 도움과 새로 얻은 지식으로 일리아칸의 부활 의식을 저지하고, 마침내 상아탑 최상층에서 그를 완전히 소멸시키는 데 성공합니다. 이 과정에서 계승자는 고대 할족이 남긴 궁극의 유물, '현자의 돌'을 얻게 되고, 이것이 카제로스를 상대할 마지막 열쇠가 될 것임을 직감합니다.",
    images: ["/images/story/voldis_tower.jpg", "/images/story/voldis_illiakan.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '94%', left: '25.4%' }
  },
  {
    title: "플레체: 예술과 낭만의 도시",
    content: `전쟁의 상흔을 뒤로하고, 당신은 예술과 낭만이 살아 숨 쉬는 도시, 플레체에 도착합니다. 이곳은 위대한 예술가들을 후원하며 평화를 유지해 온 아말론 가문이 다스리는 곳으로, 당신은 잠시나마 여유를 즐기며 아름다운 도시의 풍경에 빠져듭니다. 하지만 이 평화로운 도시의 이면에는 '자나토스'라 불리는 의문의 연쇄살인마가 남긴 공포의 그림자가 드리워져 있었습니다.\n\n당신은 플레체의 명탐정 하리, 그리고 아만과 똑같이 생긴 신성 제국 세이크리아의 사제 '클라우디오'와 함께 사건을 조사하기 시작합니다. 조사를 진행하며 당신은 플레체를 지탱하는 위대한 예술가들의 작품 속에 숨겨진 비밀과, 그들의 영광 뒤에 가려진 고뇌와 질투, 그리고 비극적인 사랑 이야기를 마주하게 됩니다. 특히, 도시 곳곳에 남아있는 아만의 어머니이자 위대한 화가였던 '이사벨'의 흔적을 따라가며, 당신은 아만의 비극적인 과거에 한 걸음 더 다가서게 됩니다.\n\n모든 단서는 도시의 가장 높은 곳에 위치한, 눈부신 미술관을 가리키고 있었습니다. 그곳에서 당신은 마침내 아만의 탄생과 그가 겪었던 끔찍한 비극의 진실을 목격합니다. 과거, 데런 아이를 낳았다는 이유로 이사벨은 세이크리아의 광신도들에게 '악마의 창녀'라 불리며 핍박받았습니다. 광신도들은 결국 마을을 불태우고, 어린 아만이 보는 앞에서 그의 어머니를 잔인하게 살해했습니다. 이 충격과 슬픔 속에서 아만은 처음으로 내면의 악마성을 폭주시켜 마을을 잿더미로 만든 자들을 모두 학살했습니다. 이 끔찍한 기억은 그의 영혼에 깊은 상처를 남겼고, 세상을 구원할 자신만의 방식을 찾게 된 근원적인 이유가 되었습니다. 또한, 당신은 '로스트아크'가 단순히 강력한 유물이 아니라, 사용 시 반드시 거대한 희생이 따르는, 세상의 법칙을 다시 쓰는 '열쇠'라는 진실을 어렴풋이 깨닫게 됩니다.\n\n사건을 해결한 후, 아만의 흔적을 쫓아왔던 클라우디오는 당신에게 세이크리아 내부에도 자신처럼 다른 신념을 가진 이들이 존재함을 암시하며, 앞으로의 여정에서 다시 만날 것을 기약하고 떠나갑니다. 아만의 비극을 가슴에 새긴 당신은, 그를 이해하게 됨과 동시에 더욱 무거워진 사명을 안고 다음 여정을 준비합니다.`,
    images: ["/images/story/pletze_main.jpg", "/images/story/pletze_claudio.jpg", "/images/story/pletze_art.jpg"],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '45%', left: '69.4%' }
  },
  {
    title: "쿠르잔 남부: 심연을 향한 진격",
    content: "모든 준비는 끝났습니다. 에스더 카단과 함께, 아크라시아 연합군은 카제로스의 육신이 봉인된 저주받은 땅, 쿠르잔으로 향합니다. 쿠르잔 남부에 첫발을 내딛는 순간, 연합군은 페트라니아의 심연과 연결된 땅의 끔찍한 기운과 마주합니다. 황폐한 대지 위에서는 카제로스의 영혼과 공명한 악마들이 끊임없이 쏟아져 나오고 있었고, 그의 부활을 앞당기기 위해 쿠르잔의 원주민인 데런들을 타락시키고 있었습니다.\n\n계승자와 아크라시아 연합군은 카제로스의 군단과 최후의 전쟁을 시작합니다. 이곳에서 연합군은 카제로스의 충직한 심복이자, 심연의 군주인 '에기르'가 이끄는 군단과 맞서 싸웁니다. 쿠르잔 남부의 데런들을 해방시키고, 심연으로 향하는 길을 열기 위한 치열한 전투가 벌어집니다. 이 전쟁의 선봉에서 계승자는 현자의 돌과 에스더들의 힘을 빌려, 카제로스의 심장을 향해 한 걸음씩 나아갑니다.",
    images: [ "/images/story/kurzan_south_main.jpg", "/images/story/kurzan_south_war.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '32%', left: '85.6%' }
  },
  {
    title: "쿠르잔 북부: 최후의 결전과 어둠의 군주",
    content: "심연의 군주 에기르를 물리친 연합군은 마침내 카제로스의 봉인이 위치한 쿠르잔 북부에 도달합니다. 하지만 그들 앞을 가로막는 것은 상상조차 할 수 없는 절망, 바로 어둠군단장 카멘이었습니다. 그는 홀로 아크라시아 연합군 전체를 상대하며 압도적인 힘을 과시합니다. 에스더들조차 그의 검 앞에 무력했고, 전장은 그의 어둠에 잠식되어 갔습니다.\n\n계승자는 동료들의 희생을 발판 삼아 카멘과의 숙명적인 일대일 대결을 벌입니다. 빛과 어둠, 아크와 심연의 힘이 충돌하는 최후의 싸움 끝에, 계승자는 마침내 기적적으로 카멘을 쓰러뜨립니다. 하지만 승리의 기쁨도 잠시, 카멘이 쓰러지며 남긴 어둠의 힘이 카제로스의 봉인을 완전히 파괴하고 맙니다. 마침내 심연의 왕, 혼돈의 근원인 '카제로스'가 완전히 부활하여 세상에 강림합니다. 계승자는 이제, 아크라시아의 운명을 걸고 신과도 같은 존재가 된 악마군주와 마지막 싸움을 벌여야 하는, 가장 무거운 사명을 짊어지게 됩니다.",
    images: [ "/images/story/kurzan_north_kamen.jpg", "/images/story/kurzan_kazeros_resurrection.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '24%', left: '91.2%' }
  },
  {
    title: "림레이크: 안개의 땅과 수호자들",
    content: "현자의 돌을 손에 넣었지만, 카멘과 함께 사라진 에스더 카단의 행방은 여전히 묘연했습니다. 그의 흔적을 쫓던 계승자는 안개에 둘러싸인 신비로운 대륙, 림레이크에 당도합니다. 이곳은 세상에 알려지지 않은 땅으로, 고대의 법칙과 강력한 수호자들이 존재하는 곳이었습니다. 림레이크의 안개는 단순한 자연현상이 아닌, 과거와 현재를 뒤섞는 신비한 힘을 가지고 있었죠.\n\n계승자는 림레이크를 탐험하며 수호자들의 시험을 거치고, 그 과정에서 아크라시아의 창세 신화와 수호자들의 숨겨진 비밀에 대해 알게 됩니다. 그리고 마침내 안개 속에서 그토록 찾아 헤매던 에스더 카단과 마주하게 됩니다. 카단은 카멘과의 싸움 이후 이곳에서 힘을 회복하며, 다가올 마지막 전쟁을 준비하고 있었습니다. 그는 계승자에게 카제로스의 부활이 임박했음을 알리며, 최후의 결전지 쿠르잔으로 향할 것을 촉구합니다. 카단의 합류로 아크라시아 연합군은 마침내 완전한 에스더들의 힘을 갖추게 됩니다.",
    images: [ "/images/story/limlake_main.jpg", "/images/story/limlake_kadan.jpg" ],
    category: 'continent',
    type: 'story', 
    page: 'continent',
    coords: { top: '88%', left: '80.6%' }
  },
];

// 보스 레이드 데이터
export const bossRaids = [
    {
      name: "발탄",
      img: charNbValtan,
      innerImg: charNbValtan2,
      bg: charBgValtan,
      bg_x_position: '72%',
      type: 'boss', 
      page: 'boss',
      difficulties: [
        { level: "노말", itemLevel: "1415", hp: "2관문(109.7억)", gold: 1200 },
        { level: "하드", itemLevel: "1445", hp: "2관문(238.1억)", gold: 1800 }
      ],
      patterns: {
        warning: [
          {
            hpTrigger: "135줄",
            name: "연속 카운터",
            description: "발탄이 중앙으로 이동 후 포효하며 4번의 연속 카운터 패턴을 시작합니다. 파티원들이 순서를 정해 연속으로 카운터를 성공시켜야 합니다."
          },
          {
            hpTrigger: "85줄",
            name: "1차 지형 파괴",
            description: "맵의 바깥쪽 8칸 중 4칸이 파괴됩니다. 붉게 변하는 바닥이 붕괴 전조이므로 안쪽으로 피해야 합니다."
          },
          {
            hpTrigger: "65줄",
            name: "3연속 피자 패턴",
            description: "발탄이 중앙으로 이동 후, 안전지대가 표시되는 3번의 연속 공격을 시전합니다. 첫 번째 안전지대를 확인 후 빠르게 이동해야 합니다."
          },
          {
            hpTrigger: "30줄",
            name: "2차 지형 파괴",
            description: "남아있던 바깥쪽 4칸 중 2칸이 추가로 파괴됩니다. 전투 공간이 매우 좁아지므로 낙사에 유의해야 합니다."
          }
        ],
        special: [
          {
            hpTrigger: "16줄",
            name: "발악: 원혼의 일격 (즉사)",
            description: "일명 '연환파신권'. 발탄이 중앙에서 연속 공격을 퍼붓습니다. 4타 후 바닥 폭발, 6타 후 바닥 폭발이 일어나므로 파티원과 겹치지 않게 외곽으로 돌아야 합니다. 이후 기둥 소환 시 비석 뒤에 숨고, 마지막 폭발은 비석이 없던 곳으로 피해야 즉사를 면할 수 있습니다. '에스더 스킬: 바훈투르'나 시간 정지 물약으로 파훼가 가능합니다."
          }
        ]
      }
    },
    {
      name: "비아키스",
      img: charNbBiackiss,
      innerImg: charNbBiackiss2,
      bg: charBgBiackiss,
      bg_x_position: '70%',
      type: 'boss', 
      page: 'boss',
      difficulties: [
          { level: "노말", itemLevel: "1430", hp: "3관문(158.2억)", gold: 1600 },
          { level: "하드", itemLevel: "1460", hp: "3관문(263.7억)", gold: 2400 }
      ],
      patterns: {
        warning: [
          {
            hpTrigger: "170줄",
            name: "늪 소환",
            description: "비아키스를 중심으로 외부에 검은 장막을 생성하여 공격대원 6명의 발 밑에 이동 속도를 크게 높이는 '신속의 욕망', 반대로 2명에게는 이동 속도를 크게 줄이는 '절망의 늪'을 생성한다.[22] 일정 시간이 지난 후 공격대 전원을 강제로 비아키스에게 이동시키고 접촉하면 큰 피해를 받는 장판과 더불어 주변에 쐐기를 크게 형성하여 즉사 피해를 가한다.'신속의 욕망' 장판을 멀리 떼어낸 후 '절망의 늪'을 일정 간격으로 배치하여 비아키스에게 다가가는 속도를 최대한 늦춰야 생존할 수 있다. 늪은 보통 9시에 까는게 국룰로 여겨진다."
          },
          {
            hpTrigger: "155줄",
            name: "욕망의 환영과 검",
            description: "중앙 기준 8방향 중 랜덤한 위치에 마법진과 석상들을 생성하고 어느 정도 시간이 경과한 뒤 특정 위치에서 나타나 검으로 주변을 베어 즉사 피해를 준다. 패턴 시작 전 공대원 중 일부의 욕망 게이지가 70% 이상으로 차오르고, 욕망 게이지가 70% 이상이면 석상과 마법진 대신 비아키스의 검들이 보이는데 검과 석상이 겹치는 곳이 안전지대다. 보통 검을 볼 수 있는 쪽이 핑을 찍고 석상이 보이는 사람은 찍힌 핑 중 석상 위치와 일치하는게 있으면 이동하는 식"
          },
          {
            hpTrigger: "135줄",
            name: "치명적인 유혹",
            description: "통칭 아재 절단기. 안내 메시지와 함께 비아키스가 중앙으로 이동한 후 약간의 채널링을 거쳐 각 공격대원을 유린하는 컷신이 나오고 그와 동시에 QTE 조작이 두 차례에 걸쳐 나온다. 제한 시간은 4초, QTE 조작 요구량은 7회이며 한 번이라도 제한 시간 내에 입력하지 못하면[28] 정기를 흡수당하나, 두 번 다 틀렸다고 해서 정기 흡수가 2번 되진 않는다. 욕망 게이지가 조금이라도 채워져 있다면 제한 시간이 1초로 매우 짧아지고 QTE 조작 요구량이 1회 늘어나 거의 확정적으로 실패한다."
          },
          {
            hpTrigger: "120줄",
            name: "욕망의 옥좌",
            description: "비아키스의 체력이 120줄 아래로 내려가면 시전, 임의의 공격대원 4명에게 욕망 게이지가 지속적으로 올라가는 장판을 생성하는 '이끌리는 유혹' 디버프를 걸고 옥좌를 소환하여 욕망 게이지를 지속적으로 감소시킨다. 이후 8초 내에 매혹 상태에 빠지지 않은 인원은 전 범위 공격으로 사망하므로 '이끌리는 유혹' 장판에 공격대 전원이 들어가 거의 동시간대에 매혹 상태에 빠져야 파훼가 가능하다. "
          },
          {
            hpTrigger: "102줄",
            name: "거대 욕망 덩어리 소환",
            description: "통칭 무력화 혹은 무력시정. 남은 체력 102줄 이하에서 시전, 비아키스가 중앙으로 이동한 뒤 '욕망의 정수'들을 소환할 때처럼 장판을 주변에 생성하고나서 무력화 채널링을 시작하고, 1시와 7시에 '거대 욕망 덩어리' 몬스터를 소환하여 잠시 후 터트린다. 무력화 채널링을 막으면서 몬스터를 처치하여 제거된 몬스터의 위치로 이동하거나 무력화를 빨리 끝내고 '시간 정지 물약'으로 넘기는 방식을 사용한다."
          },
          {
            hpTrigger: "55줄",
            name: "피의 구체",
            description: "통칭 촉수. 남은 체력 55줄 아래가 되면 비아키스가 중앙으로 이동해 채널링을 시작하고 맵 중앙으로부터 욕망 게이지를 증가시키는 구체를 무차별로 날림과 동시에 8개의 붉은 촉수 몬스터를 주변에 생성한다. 촉수의 경우 욕망 게이지 70% 이상이 아니면 공격을 할 수 없으므로 지속적으로 줄어드는 욕망을 유지하면서 약 25초 안에 촉수를 모두 파괴해야한다."
          }
        ],
        special: [
          {
            hpTrigger: "2줄",
            name: "욕망의 화신",
            description: "체력이 2줄 아래로 내려가면 비아키스의 눈이 붉게 변하며 절규하는 컷신이 나오고 환영을 3, 6, 9, 12시 방향에 소환하여 그중 한 곳에 랜덤하게 자리잡고 채널링을 시작하는데 비아키스를 처치할 때까지 계속해서 욕망 게이지가 조금씩 차오른다. 이와 동시에 중앙에서 메두사 패턴을 한 번 시전한 뒤[33] 전장에 욕망 게이지가 빠르게 차오르는 영역을 형성 하는데 비아키스가 자리잡은 위치의 후방에 자리 잡으면[34] 욕망 게이지 상승 속도가 늦춰진다. 또한 메두사 패턴 시전 직후 중앙으로부터 랜덤한 파티원이 서있던 각도를 향해 검붉은 안개같은 장판이 계속 터지면서 다가오는데, 이 장판을 밟으면 욕망 게이지가 빠르게 감소한다.[35] 이 검붉은 안개가 발악 때 욕망 게이지를 감소 시킬 수 있는 유일한 방법으로, 이에 파티원들은 메두사 패턴 때 비아키스 본체 방향을 보고 한곳에 모여있어야 한다. 채널링을 파훼하기 위해서는 무력화가 필수적인데, 반드시 웨이를 사용하고 모든 무력화 스킬과 배틀 아이템(주로 회오리 수류탄)을 집중해야 1 루프에 무력화가 가능하다. "
          }
        ]
      }
    },
    {
      name: "쿠크세이튼",
      img: charNbKouku,
      innerImg: charNbKouku2,
      bg: charBgKouku,
      bg_x_position: '88%',
      type: 'boss', 
      page: 'boss',
      difficulties: [
        { level: "노말", itemLevel: "1475", hp: "3관문(198.5억)", gold: 3000 }
      ],
      patterns: {
        warning: [
          {
            hpTrigger: "155줄/125줄/80줄/55줄",
            name: "제물을 바쳐라",
            description: "해당 체력이 되면 쿠크세이튼이 오망성의 마법진과 괴기스러운 인형을 소환한다. 파훼 방법은 팀원 한 명이 미리 광기 게이지를 거의 다 채워놓고, 마법진이 나오면 괴기스러운 인형의 불을 일부러 맞아 게이지를 다 채워서 광대로 변신한 뒤에 가운데 마법진으로 들어가 말 그대로 제물이 되는 것. 마법진에 아무도 들어가지 않을 경우 그대로 전멸한다. 두 번째 순서부터는 높은 확률로 갈고리를 소환하기 때문에 광대로 변했다면 꿰이지 않게 조심해야 한다. 또한 한 번 광대로 들어간 인원은 '낙인' 디버프가 추가되며, 낙인 디버프를 가지고 있을 경우 입장이 불가능하다. 따라서 3 관문 시작 전 파티원끼리 몇 번째 순서로 들어갈지, 소위 마리오 순서를 정해야한다. 2023년 12월 20일 패치로 낙인 디버프를 이난나로 지울 수 있게 되었다. 광대로 변신한 인원은 내부 입장 직전 괴기스러운 인형에 Q스킬을 던져 피해 감소 버프를 지우고 들어가야 한다. 지우지 않아도 잡을 수는 있지만 인형이 굉장히 단단하기에 딱렙 기준으로 부수기 매우 어렵다."
          },
          {
            hpTrigger: "90줄",
            name: "군단장 각성기: 무차별 난사",
            description: "통칭 쇼타임. 2번째 마리오 패턴이 종료되고 90줄이 되면 렛츠, 쇼타임! 이라는 컷신이 나오면서 전방위에 총격을 가하는 패턴이 나온다. 첫 시작 시 시계 혹은 반시계 방향으로 회전하며 전방에 총을 난사하기 시작하며, 이에 맞춰 돌다가 머리 위에 타겟표시가 된 파티원 둘에게 장판을 두 번 깐다. 이 장판은 밟으면 아프므로 타깃이 된 공대원은 외곽쪽으로 빼줘야 한다.2번째 외곽 장판 폭발 후에는 부채꼴 범위로 총을 난사하며, 4번째 외곽 장판 폭발 후에는 다시 회전하며 양 옆으로 총을 난사한다. 이 때 회전 방향을 중간에 반대로 꺾으니 주의. 이후 큰 폭탄이 2회 소환되는데, 쿠크세이튼이 조준하는 부채꼴 범위에 폭탄이 들어오도록 유도해서 쿠크세이튼이 폭탄을 스스로 터뜨리게 유도해야한다. 하나라도 실패할 경우에는 전멸하며, 이 때도 장판이 등장하니 주의해야 한다. 두 번째 폭탄은 첫 번째 폭탄이 나온 방향의 무조건 반대 방향에 나온다. 가령 예를 들어, 첫 번째 폭탄이 9시에 나왔다면, 두 번째 폭탄은 3시에 나오는 식. 이를 유추해서 폭탄 조준을 쉽게 진행할 수 있다.폭탄을 두 번 넘기면 쿠크세이튼이 맵을 이탈하여 건슬링어의 타겟 다운을 닮은 표적으로 스나이핑을 실시하는데, 이것과 캐릭터에 겹치면 즉사하므로 피해야 한다. 생각보다 판정이 넓으니 거리를 넉넉하게 잡고 피하는 것이 권장되며, 장판 견제도 여전히 존재한다."
          }
        ],
        special: [
          {
            hpTrigger: "0줄 후 77줄 추가",
            name: "빙고 (즉사)",
            description: "처음 맵에 진입하면 바닥에 해골 타일 2개가 랜덤으로 배치된다. 해골 장판 위에 있으면 광기 게이지가 빠르게 차오르므로 되도록 올라가지 않도록 주의해야 한다. 폭탄을 총 3번 배치 할 때마다 쿠크세이튼이 12시로 이동해 중앙으로 레이저를 쏘고, 잠시 후 폭발한다. 무력화 게이지가 있어서 처음 보면 무력화로 파훼하는 것마냥 유저를 낚지만 실제로는 웨이를 써도 택도 없는 수치이기에 무력화를 이용한 공략은 사실상 불가능하다. 이를 파훼하기 위해선 3번 주어지는 폭탄을 이용, 타일을 뒤집어가며 3번째 폭탄마다 한 줄의 빙고를 만들어서 빙고 완성 시 주어지는 무적 버프를 통해 생존해야 한다. 이 폭발은 시전한 쿠크세이튼 본인도 피해를 받는다. 즉 플레이어는 빙고를 완성해 무적으로 버티고 쿠크세이튼에게는 피해를 누적하는 것이 앙코르 페이즈의 정석 공략법이다. 폭발의 대미지는 약 4억(15줄)으로 추정. 만약 빙고를 완성하지 못했다면, 이난나를 사용해 패턴을 넘길 수 있다."
          }
        ]
      }
    },
    {
      name: "아브렐슈드",
      img: charNbAbrelshud,
      innerImg: charNbAbrelshud2,
      bg: charBgAbrelshud,
      bg_x_position: '50%',
      type: 'boss', 
      page: 'boss',
      difficulties: [
        { level: "노말", itemLevel: "1, 2-1490 / 3-1500 / 4-1520", hp: "4관문(249.2억)", gold: 4600 },
        { level: "하드", itemLevel: "1, 2-1540 / 3-1550 / 4-1560", hp: "4관문(455.5억)", gold: 5600 }
      ],
      patterns: {
        warning: [
          {
            hpTrigger: "212줄/ 32줄",
            name: "몽환 세계",
            description: "① 각자 방에 떠있는 문양을 채팅으로 알린다. ② 타일이 폭발하는 곳을 피해 안전지대로 이동하고 본인이 이동했던 순서 또한 채팅으로 알린다. ③ 외부에서 시전하는 바닥 폭발은 어디가 터지는지 미리 보여주지 않으므로 해당 문양의 방에 들어갔었던 사람이 기록한 안전 위치를 토대로 다같이 순서대로 이동하면 파해된다. 내부와 마찬가지로 폭발을 맞을 경우 즉사한다."
          },
          {
            hpTrigger: "188줄",
            name: "맞이하라",
            description: "1. 패턴 시작: 12시 집결 후 12-12-12-11-11-11-1-1 순으로 서서 11,12,1시 타일 파괴 2. 1분 후 보라색 운석 2개 : 5,6,7시 중 2군데에 하나씩 유도 3. 1분 후 보라색 운석 3개 : 5,6,7시에 하나씩 유도 4. 1분 후 노란색 운석 : 6시에 유도하여 5,6,7시 타일 파괴 5. 1분 후 보라색 운석 4개 : 11,12,1시에 적당히 나눠서 유도 6. 1분 후 보라색 운석 3개 : 11시 또는 1시에 몰빵해서 타일 파괴 7. 1분 후 노란색 운석 : 12시에 유도하여 11,12,1시 타일 파괴 8. 1분 후 보라색 운석 4개 : 5,6,7시에 적당히 나눠서 유도 9. 1분 후 보라색 운석 3개 : 5시 또는 7시에 몰빵해서 타일 파괴 10. 1분 후 노란색 운석 : 6시에 유도하여 5,6,7시 타일 파괴 11. 1분 후 보라색 운석 4개 : 11,12,1시에 적당히 나눠서 유도 12. 1분 후 보라색 운석 3개 : 11시 또는 1시에 몰빵해서 타일 파괴 13. 1분 후 노란색 운석 : 중앙 타일이 파괴되어 전멸"
          },
          {
            hpTrigger: "112줄",
            name: "찬미하라",
            description: "패턴 시작시 아브렐슈드가 하는 대사에서 따와서 찬미 패턴이라고 불린다. 아브렐슈드가 가운데로 순간이동한 후 큐브 뒷배경에 거대화한 상태로 등장한다. 이후 큐브의 중앙으로 모험가를 모으면서 고정된 위치에 피자 패턴을 두 번 시전한 뒤, 다 모아지면 중앙을 손바닥으로 내리친다. 그 후 아브렐슈드가 내려친 자리인 중앙에 블랙홀을 생성되는데, 이때 생성되는 중앙에 있으면 즉사하므로 내려치기 전에 빠르게 빠져나와야 한다. 이후 사방에서 악몽의 낙인과 빛의 파편이 블랙홀의 중심으로 빨려들어간다. 생존 방법은 붉은 악몽의 낙인을 피하면서 빛의 파편을 2개 먹어 빛의 장막 버프를 받아야 한다. 악몽의 낙인의 데미지는 5-6만 정도로 꽤나 살벌하며, 파편의 속도가 상당히 빠른 편으로, 숙련도가 부족하면 사고가 날 확률이 매우 높은 패턴이라 이를 방지하기 위해 아브렐슈드가 손을 내리친 후 에스더 샨디를 써서 파편의 속도를 느리게 하는 것이 보편적인 방법이다."
          },
          {
            hpTrigger: "25줄",
            name: "추락하라",
            description: "12시, 9시, 6시, 3시 방향에 보라색 운석이 떨어지며 지형이 파괴된다. 패턴 발동 이후부턴 중앙 타일 이외의 타일 파괴 전멸이 없어져서 중앙 타일만 지키며 아브렐슈드를 잡으면 된다. 주기적으로 공대원을 조준해 떨어지는 보라색 운석은 계속되므로 타겟팅되면 살아남은 외부 타일에 떨어뜨려주면 된다. 웬만하면 아무렇게나 떨어뜨려도 클리어는 가능하지만 타일이 많이 파괴되면 낙사 위험도가 높아지므로 보통은 한 타일에 몰아서 떨어뜨린다."
          },
        ],
        special: [
          {
            hpTrigger: "0줄",
            name: "최후의 저지",
            description: "체력이 1이 되면 아브렐슈드가 중앙으로 이동, 손을 뻗으며 '최후의 저지' 구체를 7시에 소환한다. 해당 구체를 타격하면 마력 파편 구슬이 계속 튀어나오는데, 이 구슬을 먹을 때마다 먹은 플레이어의 쿨타임이 감소하고 막대한 피해량 증가 버프를 최대 9스택까지 얻는 마력 파편 버프가 생긴다. 구체의 체력은 약 3억 정도이고 초당 3900만 정도의 체력을 회복하며이 구체를 파괴하면 하드 아브렐슈드 격파에 성공한다. 0줄 패턴의 제한 시간은 소환 이후 구체가 커진 시점으로부터 약 16초 정도"
          }
        ]
      }
    },
    {
      name: "일리아칸",
      img: charNbIlliakan,
      innerImg: charNbIlliakan2,
      bg: charBgIlliakan,
      bg_x_position: '50%',
      type: 'boss', 
      page: 'boss',
      difficulties: [
        { level: "노말", itemLevel: "1580", hp: "3관문(266.9억)", gold: 5400 },
        { level: "하드", itemLevel: "1600", hp: "3관문(588.6억)", gold: 7500 }
      ],
      patterns: {
        warning: [
          {
            hpTrigger: "165줄",
            name: "영혼 흡수",
            description: "전장 9시에 에타노플 주민들이 갇힌 감옥이 나타나고, 10시 어간에 보라색 쇠사슬을 쏘는 석상이 생성된다. 동시에 12시, 6시에 200줄처럼 일리아칸에게 레이저를 발사하는 석상이 생기며, 일리아칸은 3시에 무력화 게이지가 생긴 상태로 9시로 초록빛 광선을 발사하여 조금씩 체력을 회복한다. 12시와 6시에서 쏘는 광선을 막을 사람과, 중앙에서 일리아칸이 쏘는 초록 광선을 막을 사람, 마지막으로 10시에서 쏘는 보라색 쇠사슬을 일리아칸에게로 가져갈 사람을 나눈다. 석상과 일리아칸이 쏘는 광선은 200줄과 동일하게 맞으면 받는 피해 증가 디버프가 점점 쌓이며, 200줄과 달리 데미지도 추가로 들어오며 디버프가 누적되면 많이 아파진다. 이난나 에스더 스킬의 보호 구역 내에서 광선을 막을 경우 데미지가 무효화되니 공대장은 광선을 막는 위치인 오른쪽에서 사용해주면 좋다.10시에서 보라색 쇠사슬을 획득한 사람은 일리아칸에게로 쇠사슬을 이어야한다. 문제는 쇠사슬을 몸에 지니고 있으면 2페이즈에서 해골을 들었던 것과 같은 '무기력' 디버프가 쌓인다는 점. 또한, 시간이 지날수록 머리 위 해골이 1스택씩 늘어나는데 3 스택이 쌓이면 10시 석상 위치로 강제로 끌려간다. 따라서 최소 2명의 유저가 번갈아가면서 쇠사슬을 옮기는 것이 좋다. 쇠사슬을 성공적으로 연결했다면 일리아칸에게 다가가 무력화를 진행하면 된다."
          },
          {
            hpTrigger: "143줄",
            name: "쇠락의 의식",
            description: "모든 석상이 고루 레이저를 쬐려면 레이저의 모양은 육각형과 육망성 중 하나가 되어야 하는데, 각각 석상은 돌릴 수 있는 각도가 제한 되어 있기에 첫 레이저가 어느 방향으로 뻗어나갔느냐를 보고 육각형과 육망성 중 어느 모양이 완성 가능한 지를 판단하는 것이 중요하다. 다른 석상도 최초 발사 각도로 스스로 판단이 가능하지만 가장 구분하기 좋은 위치는 바로 1시 석상. 1시 석상의 최초 발사 각도가 + 형태면 육망성(별), X 형태면 육각형 모양이 된다. 애매한 각도로 차이가 나는 다른 석상들과 달리 45도로 명확하게 구분 가능하기 때문에 보통은 1시 석상을 담당하는 유저가 빠르게 파악 후 채팅으로 콜을 해주는 게 일반적."
          },
          {
            hpTrigger: "33줄",
            name: "군단장 각성기: 카르테론의 경계",
            description: "일리아칸이 중앙으로 이동해 땅을 내려친다. 내려칠 때마다 땅이 녹색으로 갈라지다가 외곽 전장이 부식되어 사라지며, 컷씬이 나타나고 이후 잡몹들이 대거 난입한다. 일리아칸은 중앙에 고정된 채로 회전하며 레이저를 발사하며, 잡몹들의 방해를 뚫고 일리아칸을 두드려 패 체력을 깎아야 한다. 레이저 공격에 피격 당해 외곽으로 밀려나면 낙사."
          }
        ],
        special: [
          {
            hpTrigger: "0줄 후 추가 300줄 조우",
            name: "일리아칸, 카르테론의 군주",
            description: "4관에 처음 진입하면 조우 패턴으로 검은 안개 소환 패턴을 시전한다. 일리아칸이 양손을 모으고 검은 오오라를 발산하여 본인이 있는 쪽에서부터 천천히 다가오는 검은 안개를 뿌린다. 해당 안개는 피격시 질병 게이지를 누적시키며, 맵 끝쪽까지는 오지 못하므로 맵 끝에 붙어있으면 피할 수 있다."
          },
          {
            hpTrigger: "240줄, 135줄",
            name: "양손 모아 내려찍기",
            description: "해당 체력이 되면 일리아칸이 양 손을 모아 들어올린 뒤 힘껏 바닥을 내려찍으며 맵 전체에 충격파를 주는 즉사기를 시전한다. 맵 바닥의 충격파로 피해를 주는 만큼 이 패턴을 피하기 위해선 바닥을 어떤 방식으로든 벗어나야 한다. 보통 정공법은 웜에 잡혀서 하늘에 떠 있는 것. 조우 패턴때 만들어지는 웜 장판을 해당 기믹때까지 밟지 말고 아껴두고 있다가, 일리아칸이 전멸기를 준비하면 파티원들이 웜 장판 근처에 모인 뒤 타이밍을 맞춰 일제히 들어감으로서 모두 웜에 잡혀 하늘에 떠있는 상태로 충격파를 피하는 것. 일리아칸이 내려친 충격파를 웜이 대신 맞고 터지면서 잡힌 공대원들은 자동으로 풀려난다."
          },
          {
            hpTrigger: "200줄",
            name: "지형 흔들기",
            description: "속칭 디스코팡팡. 200줄이 되면 해당 대사와 함께 일리아칸이 지형을 기울여서 모든 공대원들을 빠뜨리려고 한다. 기울어진 낮은 쪽에는 끊임없이 파도가 치며, 이 파도에 피격시 넘어지면서 물에 빠진다. 해당 패턴동안 맵에는 지속적으로 밟으면 게이지와 상관없이 즉시 해충 상태이상을 거는 똥장판이 생성되고, 일리아칸 본체 역시 계속 일자로 레이저를 발사하며 방해한다."
          }
        ]
      }
    },
    {
      name: "카멘",
      img: charNbKamen,
      innerImg: charNbKamen2,
      bg: charBgKamen,
      bg_x_position: '61%',
      type: 'boss', 
      page: 'boss',
      difficulties: [
        { level: "노말", itemLevel: "1610", hp: "3관문(332.9억)", gold: 8000 },
        { level: "하드", itemLevel: "1630", hp: "4관문(538.7억)", gold: 15500 }
      ],
      patterns: {
        warning: [
          {
            hpTrigger: "특이 사항",
            name: "특이 사항",
            description: "에스더 봉인\n\n에스더 스킬 발동 후 해당 에스더가 퇴각하기 전, 카멘의 분신이 에스더를 봉인해버리는 모션이 나오며 해당 에스더 스킬이 봉인된다. 즉, 각 에스더 스킬은 1번씩만 사용할 수 있다. 관문 재시작 시 초기화된다.\n\n치명상\n\n특정 공격에 피격시 디버프가 누적되며 중첩당 20%의 추가 피해를 받는다. 치명상은 약 2분간 유지되며 이난나를 포함한 어떤 방법으로도 해제가 불가능하고, 새로 쌓이면 지속 시간이 갱신된다. 풀려면 풀릴 때까지 안 맞는 수밖에 없다.\n\n암흑 게이지\n\n카멘 레이드 3관문에선 '암흑 게이지'라는 전용 시스템이 존재하며, 레이드 시작 시 화면 좌상단에 표기된다. 암흑 게이지는 카멘의 모든 패턴에 피격될 때마다 차오르며, 피격당하지 않더라도 소량씩 자연적으로 차오른다. 이 게이지가 25%씩 차오를 때마다 카멘이 후술할 붉은 카멘(빨멘)으로 변하며 강력한 공격을 시전한다. 또한 암흑 게이지가 전부 다 차면 해제 불가능한 암흑 디버프에 걸리며, 카멘이 중앙으로 이동한 후 후술할 붉은 카멘 패턴을 2번 연속으로 시전한다. 일명 정산. 이 패턴 도중에는 안전 지대를 표시해주지 않으므로 오로지 카멘 본체의 짧은 전조 모션 또는 주위 이펙트만 보고 어떤 패턴인지 구분할 수 있어야 한다."
          },
          {
            hpTrigger: "275줄",
            name: "카멘 워킹",
            description: "일명 알비온 패턴. 원형으로 붉은 폭풍을 두르고 몇 걸음 걸어가다가, 공중에 뜬 뒤 암흑 디버프를 유발하는 안개를 바깥으로 방출한 다음 알비온이 사용했던 맵 범위 스킬을 사용한다. 해당 안개에 맞아 암흑에 걸리면 어떤 위치가 안전지대인지 확인할 수 없어 파티원만 따라다녀야 하므로, 일단 이 안개를 스페이스바로 넘어가서 암흑 디버프를 씹은 뒤, 보여지는 공격 범위와 순서를 따라 안전 지대를 기억하고 순서대로 움직여서 파훼하면 된다."
          },
          {
            hpTrigger: "255줄",
            name: "어둠의 대검",
            description: "패턴이 시작되면 카멘이 검은색 기운을 두르고, 어둠의 대검이 등장하며 중앙의 안전지대를 제외한 전방위에 즉사급 공격을 가한다. 이후 3갈래의 붉은 장판과 1갈래의 푸른 장판이 어글자를 향해 회전하며 지속적으로 폭발한다. 작은 푸른 장판이 3번 폭발한 뒤 큰 푸른 장판이 한 번 폭발하고, 마지막으로 3갈래의 붉은 장판이 폭발한다. 각각의 장판 폭발은 피격이상을 유발하며, 각 장판의 피해량이 굉장히 높은 편이기에 각별한 주의가 필요하다. 표식 패턴이 끝나면 어둠의 대검이 어글자를 향해 이동한다. 어둠의 대검은 광역 부채꼴 패턴이나 난무, 안밖 패턴 등을 사용하며 카운터에 성공할 시 무력화로 딜타임을 가질 기회가 주어진다. 다만 무력화에 성공할 때마다 받는 무력화 수치가 25%씩 감소하므로 무력화를 통한 딜타임 확보는 한 번만 가능하다고 생각하는 게 편하다. 패턴이 진행되는 동안 카멘 본체는 중앙에서 지속적으로 유저들을 방해한다. 랜덤하게 조준된 플레이어를 향해 빔이나 검을 발사하며, 암흑 디버프를 부여하는 안개를 방출한다. 하드 모드 한정으로 맵 외곽을 계속 줄로 이어진 검을 소환시켜 6시에서 부터 한바퀴씩 돌며, 닿는 플레이어에게 경직과 피해를 입힌다. 파훼법은 패턴 시작 때부터 중앙에 모여 검에 화력을 집중하는 것이다. 이동 때부터는 딜타임을 잡기 어렵기 때문에 중앙에 등장하는 때부터 딜몰이를 하는 것이 정석이 되었다."
          },
          {
            hpTrigger: "225줄",
            name: "빛과 어둠",
            description: "카멘이 맵의 중앙으로 이동한 뒤 암흑 디버프를 유발하는 검은 안개를 방출한 다음 강력한 공격을 준비한다. 그 동안 맵의 안전지대가 하나씩 서서히 사라지며, 최소한의 안전지대만 남긴 뒤 카멘이 크게 검을 휘두르는 컷신이 나오면서 맵 전체에 즉사 공격이 시전된다. 안전 지대가 서서히 사라지는 만큼 마지막까지 확실하게 안전지대를 찾아가는 것이 중요하며, 방출되는 안개를 피하지 못해 암흑 디버프에 걸린 사람은 안전지대와 핑을 확인할 수 없기에 주변 공대원을 따라가는 것이 권장된다. 안전지대가 전부 사라지고 즉사기가 시전되기까지 시간이 많지 않은데, 일찍 자리를 잡았다가 그 곳이 막바지에 사라져서 리트가 나는 상황이 자주 발생하여 일명 전세사기 패턴으로 불린다."
          },
          {
            hpTrigger: "210줄",
            name: "승마 격돌",
            description: "승마 패턴 한정으로 기존의 카멘과 완전히 다른 패턴을 구사한다. 기존의 묵직하고 느릿느릿한 짤패턴 대신 말을 타고 멀리 나갔다가 돌진해오며 검을 휘두르거나, 체스판식 범위 패턴을 사용하거나, 유령마를 소환해 무작위로 돌진시키는 등 스피디한 짤패턴이 많아지기에 격돌 시스템을 활용하지 않는다면 딜각을 잡기 어려워진다. 이 패턴 동안 총 2번의 격돌을 할 수 있으며, 격돌을 하는 동안 카멘의 움직임이 완전히 봉쇄되어 프리딜 타임을 제공하기에 보호막을 파괴하는 데 큰 도움을 준다."
          },
          {
            hpTrigger: "200줄",
            name: " 지형 파괴",
            description: "지형 파괴는 격돌을 통해서 저지할 수 있다. 만약 격돌 실패 등으로 지형 파괴를 막지 못할 경우 카멘이 검으로 내려찍은 곳에 즉사급 피해를 주며지형 파괴 역시 그대로 발생한다. 또한 지형 파괴는 체력 기반이 아닌 패턴 기반으로 발동되기에 사실상 타임어택의 역할도 수행한다."
          },
          {
            hpTrigger: "55줄",
            name: "반전",
            description: "발도술이 끝나면 곧바로 서폿을 포함한 개개인이 별도 공간으로 흩어지며 보스 등급의 자기 자신의 분신과 전투를 한다. 조작 반전 상태가 그대로 있기 때문에 공격 스킬 역시 반대 방향으로 사용해야 한다. 체력은 노말 291만 9375, 하드 525만 4875. 딜러, 서포터 무관하게 각성기를 사용하면 한 번에 잡을 수 있고 만약 없다면 분신을 경기장 밖으로 날려버리면 쉽게 체력을 깎을 수 있다. 분신의 체력이 1이 되면 바깥 공간으로 이동되며 조작 반전이 해제된다. 제한 시간 내에 분신을 빠르게 처치하지 못하면 어둠에 집어삼켜지며 사망한다. 분신을 처치한 후 나오면 카멘은 보호막 상태지만 특이하게 데미지가 50%만 감소하니 그대로 딜을 넣어도 된다. 패턴이 끝나자마자 도넛 + 풍차 패턴이 2번 나온다. 이후 90줄 패턴과 반대로, 맵 중앙에서부터 어둠 장판이 깔리기 시작한다. 90줄 패턴 때 설치했던 그림자 표식이 그대로 남아있기에 표식을 신중하게 설치해야 한다."
          },
          {
            hpTrigger: "43줄",
            name: "백어택 격돌",
            description: "통칭 막격. 카멘이 어그로자를 향해 검을 치켜들며 사라진다. 직후 그림자 분신이 어그로자에게 검격을 3번 날리고 본체가 나타나는데 앞선 격돌과는 달리 백어택 위치에서 G키를 눌러야 격돌에 진입할 수 있다."
          },
        ],
        special: [
          {
            hpTrigger: "4관문 / 4-2관문",
            name: "추후 추가 예정",
            description: "추후 추가 예정"
          }
        ]
      }
    },
    // 외부 CDN 이미지를 사용하는 보스는 그대로 유지
    { name: "카양겔", img: "https://cdn-lostark.game.onstove.com/upload/lostark/event/221026_abyss/abyss_gargadeth_big.png", bg: "https://cdn-lostark.game.onstove.com/2022/event/221026_abyss/images/abyss_gargadeth_bg.jpg", type: 'boss', page: 'boss', },
    { name: "상아탑", img: "https://cdn-lostark.game.onstove.com/upload/lostark/event/230222_ivorytower/ivorytower_laurid_big.png", bg: "https://cdn-lostark.game.onstove.com/2023/event/230222_ivorytower/images/ivorytower_laurid_bg.jpg", type: 'boss', page: 'boss', },
    { name: "베히모스", img: "https://cdn-lostark.game.onstove.com/upload/lostark/event/240228_echidna/echidna_echidna_big.png", bg: "https://cdn-lostark.game.onstove.com/2024/event/240228_echidna/images/echidna_echidna_bg.jpg", type: 'boss', page: 'boss', },
    { name: "에키드나", img: "https://cdn-lostark.game.onstove.com/upload/lostark/event/240228_echidna/echidna_echidna_big.png", bg: "https://cdn-lostark.game.onstove.com/2024/event/240228_echidna/images/echidna_echidna_bg.jpg", type: 'boss', page: 'boss', },
    { name: "카제로스 레이드 1막", img: "https://cdn-lostark.game.onstove.com/upload/lostark/event/240731_kazeros_a/kazeros_dainater_big.png", bg: "https://cdn-lostark.game.onstove.com/2024/event/240731_kazeros_a/images/kazeros_dainater_bg.jpg", type: 'boss', page: 'boss', },
    { name: "카제로스 레이드 2막", img: "https://cdn-lostark.game.onstove.com/upload/lostark/event/240731_kazeros_a/kazeros_aegir_big.png", bg: "https://cdn-lostark.game.onstove.com/2024/event/240731_kazeros_a/images/kazeros_aegir_bg.jpg", type: 'boss', page: 'boss', },
    { name: "카제로스 레이드 3막", img: "https://cdn-lostark.game.onstove.com/upload/lostark/event/240731_kazeros_a/kazeros_kazeros_big.png", bg: "https://cdn-lostark.game.onstove.com/2024/event/240731_kazeros_a/images/kazeros_kazeros_bg.jpg", type: 'boss', page: 'boss', },
]

export const arksData = [
  {
    id: "asta",
    name: "Ark of Trust, Asta",
    shortName: "아스타",
    keyword: "신뢰",
    location: "루테란 왕의 무덤",
    image: arkAstaImg,
    hoverImage: arkAstaHoverImg,
    description: "플레이어가 아크라시아를 여행하며 얻는 첫 번째 아크. 붉은 색의 불이 이글거리는 형상을 취하고 있으며 명칭은 별을 뜻하는 라틴어 단어들 중 Astra의 응용형이다.",
    narrative: "루테란 왕의 무덤에 에스더 루테란이 숨겼다. 플레이어가 루테란 스토리를 진행하면서 실리안, 아만 그리고 그 외 다른 사람들과 쌓아올린 신뢰를 상징한다.",
    type: 'ark', 
    page: 'ark' 
  },
  {
    id: "ortus",
    name: "Ark of Creation, Ortus",
    shortName: "오르투스",
    keyword: "창조",
    location: "토토이크의 몸 속",
    image: arkOrtusImg,
    hoverImage: arkOrtusHoverImg,
    description: "최후의 거인 토토이크와 에스더 니나브가 숨긴 아크. 녹색의 바람이 휘도는 형상을 취하고 있으며 명칭은 라틴어 Ortus(해돋이, 동녘)에서 따온 것으로 보인다.",
    narrative: "토토이크는 모코코를 만들어내는 힘을 가지고 있으며 이를 반영한 창조를 상징하는 아크다. 생명의 움이 돋아난다는 의미를 담고 있다.",
    type: 'ark', 
    page: 'ark' 
  },
  {
    id: "agaton",
    name: "Ark of Prophecy, Agaton",
    shortName: "아가톤",
    keyword: "예지",
    location: "아르데타인 크라테르의 눈",
    image: arkAgatonImg,
    hoverImage: arkAgatonHoverImg,
    description: "우마르 대장장이 에스더 갈라투르가 붉은 사막 아르데타인에 숨긴 아크. 보라색의 번개가 내리치는 형상이며, 상냥함, 좋음을 뜻하는 희랍어에서 파생되었다.",
    narrative: "케나인들은 아크를 발견하고 연구했지만 방법을 찾지 못했다. '크라테르의 눈'이 되어 수백년간 케나인들의 발전을 지켜봐왔으며, 아르데타인에 다가올 위협을 예지하는 힘을 상징한다.",
    type: 'ark', 
    page: 'ark' 
  },
  {
    id: "elpis",
    name: "Ark of Hope, Elpis",
    shortName: "엘피스",
    keyword: "희망",
    location: "슈샤이어 얼음나비 절벽",
    image: arkElpisImg,
    hoverImage: arkElpisHoverImg,
    description: "요즈족 환영술사 에스더 샨디가 숨긴 아크. 파란색의 서리가 도는 모양이며, 희랍어로 희망을 뜻하는 έλπίς에서 유래되었다.",
    narrative: "혹한과 빈곤, 노예 매매가 횡행하는 암울한 땅 슈샤이어 속에서도 한줄기 희망이 존재함을 상징한다. 유일하게 원뜻과 게임 상에서의 의미가 완전히 일치한다.",
    type: 'ark', 
    page: 'ark' 
  },
  {
    id: "radice",
    name: "Ark of Wisdom, Radice",
    shortName: "라디체",
    keyword: "지혜",
    location: "로헨델 정령의 땅",
    image: arkRadiceImg,
    hoverImage: arkRadiceHoverImg,
    description: "실린 여왕 아제나와 이난나가 숨긴 아크. 뿌리가 엉킨 형태로 노란 빛의 티끌들이 반짝인다. 라틴어로 Radice(뿌리, 근본)에서 따온 이름이다.",
    narrative: "고대의 땅 로헨델, 그리고 그곳에서 살아가는 오랜 종족인 실린과 정령들이 가진 지혜를 상징한다. 실린들의 조상을 기리는 곳에 숨겨져 있었다.",
    type: 'ark', 
    page: 'ark' 
  },
  {
    id: "carta",
    name: "Ark of Devotion, Carta",
    shortName: "카르타",
    keyword: "헌신",
    location: "페이튼 폐허의 성당",
    image: arkCartaImg,
    hoverImage: arkCartaHoverImg,
    description: "에스더 시엔이 버림받은 땅 페이튼에 숨겼다. 하늘색의 안개가 감돌고 있으며 Carta는 헌장을 의미한다.",
    narrative: "카멘의 어둠으로 황무지가 된 땅에서 종족과 아크라시아를 위해 헌신하는 데런들의 모습을 상징한다. 데런들을 이끌던 사이카의 유언으로 얻게 된다.",
    type: 'ark', 
    page: 'ark' 
  },
  {
    id: "kayangel",
    name: "Ark of Eternity, Kayangel",
    shortName: "카양겔",
    keyword: "영원",
    location: "엘가시아 헤스테라 정원",
    image: arkKayangelImg,
    hoverImage: arkKayangelHoverImg,
    description: "에스더 카단이 엘가시아에 숨긴 마지막 아크. 흰색의 강한 빛줄기를 뿜고 있다. 카양겔은 엘라어로 '영원'이라는 의미이다.",
    narrative: "홀로 영원을 짊어진 라우리엘의 희생과, 그 덕분에 영원히 나아갈 세계를 의미하는 아크다. 신이 허락해야만 닿을 수 있다는 섬의 이름에서 유래되었다.",
    type: 'ark', 
    page: 'ark' 
  }
];