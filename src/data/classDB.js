// src/data/classDB.js

// --- 배경 이미지 import ---
import bgWarrior from '../assets/images/class/bg_index_warrior_female_big.jpg';
import bgMWarrior from '../assets/images/class/bg_index_warrior.jpg';

import bgFighter from '../assets/images/class/bg_detail_breaker.jpg';
import bgFFighter from '../assets/images/class/bg_index_fighter_female.jpg';

import bghunter from '../assets/images/class/bg_index_hunter_male.jpg';
import bghunter_f from '../assets/images/class/bg_index_hunter_female.jpg';

import bgmagician from '../assets/images/class/bg_index_magician.jpg';

import bgassassin from '../assets/images/class/bg_detail_blade.jpg';

import bgspecialist from '../assets/images/class/bg_index_specialist.jpg';


// icons
// --- 기본 클래스 아이콘 이미지 import ---
import iconFemailWarriorBase from '../assets/images/class/icons/mark-warrior-female.png';
import iconWarriorBase from '../assets/images/class/icons/mark-warrior.png';

import iconFighter from '../assets/images/class/icons/mark-fighter_male.png';
import iconFFighter from '../assets/images/class/icons/mark-fighter_female.png';

import iconhunter from '../assets/images/class/icons/mark-hunter_male.png';
import iconhunter_f from '../assets/images/class/icons/mark-hunter_female.png';

import iconmagician from '../assets/images/class/icons/mark-magician.png';

import iconassassin from '../assets/images/class/icons/mark-assassin.png';

import iconspecialist from '../assets/images/class/icons/mark-specialist.png';


// --- 미리보기 이미지 import ---
// 기본 클래스
import warrior_female from '../assets/images/class/img_index_warrior_female_big.png';
import warrior from '../assets/images/class/img_index_warrior.png';

import fighter from '../assets/images/class/img_index_fighter_male.png';
import FFighter from '../assets/images/class/img_index_fighter_female.png';

import hunter from '../assets/images/class/img_index_hunter_big.png';
import hunter_f from '../assets/images/class/img_index_hunter_female.png';

import magician from '../assets/images/class/img_index_magician.png';

import assassin from '../assets/images/class/img_index_assassin.png';

import specialist from '../assets/images/class/img_index_specialist.png';

// 세부 클래스
// 전사
import previewSlayer from '../assets/images/class/detail/img_detail_slayer.png';
import previewValkyrie from '../assets/images/class/detail/img_detail_valkyrie.png';

import previewDestroyer from '../assets/images/class/detail/img_detail_destroyer.png';
import previewWarlord from '../assets/images/class/detail/img_detail_warlord.png';
import previewBerserker from '../assets/images/class/detail/img_detail_berserker.png';
import previewHolyknight from '../assets/images/class/detail/img_detail_holyknight.png';

// 무도가
import previewstriker from '../assets/images/class/detail/img_detail_striker.png';
import previewbreaker from '../assets/images/class/detail/img_detail_breaker.png';

import previewBat from '../assets/images/class/detail/img_detail_battlemaster.png';
import previewInf from '../assets/images/class/detail/img_detail_infighter.png';
import previewSoul from '../assets/images/class/detail/img_detail_soulmaster.png';
import previewLance from '../assets/images/class/detail/img_detail_lancemaster.png';

// 헌터
import previewdevil from '../assets/images/class/detail/img_detail_devilhunter.png';
import previewblas from '../assets/images/class/detail/img_detail_blaster.png';
import previewhawk from '../assets/images/class/detail/img_detail_hawkeye.png';
import previewscouter from '../assets/images/class/detail/img_detail_scouter.png';

import previewgunsli from '../assets/images/class/detail/img_detail_gunslinger.png';

// 마법사
import previewbard from '../assets/images/class/detail/img_detail_bard.png';
import previewsummo from '../assets/images/class/detail/img_detail_summoner.png';
import previewarca from '../assets/images/class/detail/img_detail_arcana.png';
import previewsorce from '../assets/images/class/detail/img_detail_sorceress.png';

// 암살자
import previewblade from '../assets/images/class/detail/img_detail_blade.png';
import previewdemonic from '../assets/images/class/detail/img_detail_demonic.png';
import previewreaper from '../assets/images/class/detail/img_detail_reaper.png';
import previewsouleater from '../assets/images/class/detail/img_detail_souleater.png';

// 스페셜리스트
import previewartist from '../assets/images/class/detail/img_detail_artist.png';
import previewaeromancer from '../assets/images/class/detail/img_detail_aeromancer.png';
import previewwildsoul from '../assets/images/class/detail/img_detail_wildsoul.png';

// CSS 스프라이트 이미지 (하나의 이미지로 가정)
import classSprite from '../assets/images/class/sprite_information.png';

// --- 기상술사 개별 아이콘 이미지 import ---
import iconAeromancerIdentity from '../assets/images/class/aeromancer_identity.png';
import iconAeromancerWeapon from '../assets/images/class/aeromancer_weapon.png';

export const classSpriteImage = classSprite;

export const classData = [
  {
    id: 'warrior_female',
    name: '전사 (여)',
    name_en: 'Warrior (Female)',
    layoutType: 'landscape',
    backgroundImage: bgWarrior,
    icon: iconFemailWarriorBase,
    description: '전사 계열은 화끈한 파괴력과 안정적인 방어력을 가진 공수밸런스가 좋은 클래스 입니다. 강력한 파괴력으로 전장을 휩쓰는 슬레이어, 신앙의 힘으로 전장을 수호하며 아군을 치유하는 발키리로 전직할 수 있습니다.',
    description_en: 'The Warrior class balances powerful offense and stable defense for a well‑rounded combat style. You can advance to Slayer, who sweeps the battlefield with immense destructive power, or Valkyrie, who guards the field with the power of faith and heals allies.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 }, // 스프라이트 내 아이덴티티 아이콘 좌표
    weaponIconPos: { x: 0, y: 0 },   // 스프라이트 내 무기 아이콘 좌표
    previewImage: warrior_female,
    advancedClasses: [
      {
        id: 'slayer',
        name: '슬레이어',
        name_en: 'Slayer',
        layoutType: 'portrait',
        iconPos: { x: 712, y: 405 },
        emphasis: '그 무엇도, 나의 운명을 속박할 수 없어!',
        emphasis_en: 'Nothing can bind my destiny!',
        description: '슬레이어는 거대한 양손 대검을 들고 전장을 휘젓는 전형적인 근접 전사입니다. 높은 공격력과 방어력으로 전 클래스를 통틀어 공수의 밸런스가 가장 안정적인 클래스이기도 합니다. 폭주 모드를 활용하면 전장을 순식간에 뒤집을 수 있는 엄청난 잠재력도 지니고 있는 강력한 클래스 입니다.',
        description_en: 'The Slayer is a melee warrior wielding a massive two‑handed sword to dominate the battlefield. With balanced offense and defense, this class excels in close combat. Activating Berserk Mode unleashes devastating power that can turn the tide of battle in an instant.',
        identity: '폭주 모드 공격을 할 때마다 일정량의 분노 게이지를 얻게 되고, 이 분노 게이지가 차게되면 폭주 상태에 돌입할 수 있게 됩니다. 폭주 상태에 돌입한 슬레이어는 공격과 이동 속도가 크게 상승하게 되고, 해당 상태에서만 사용 가능한 스킬이 추가되어 더욱 강력한 공격을 가할 수 있습니다.',
        identity_en: 'Every attack in Berserk Mode fills the Fury Gauge. When the gauge is full, you enter Berserk State, greatly increasing attack and movement speed and unlocking exclusive skills for even more devastating strikes.',
        identityIconPos: { x: 113, y: 445 },
        identityIconSize: { width: 102, height: 60 },
        weaponIconPos: { x: 661, y: 536 },
        weaponIconSize: { width: 68, height: 58 },
        previewImage: previewSlayer,
      },
      {
        id: 'valkyrie',
        name: '발키리',
        name_en: 'Valkyrie',
        layoutType: 'portrait',
        iconPos: { x: 520, y: 440 },
        emphasis: '전장을 비추는 저의 빛은, 결코 꺼지지 않습니다.',
        emphasis_en: 'My light on the battlefield will never fade.',
        description: '발키리는 아군을 치유하고, 빛으로 전장을 이끄는 서포트형 클래스입니다. 신성한 기운을 이용한 수호 스킬과 버프로 아군을 지원하거나, 한손검을 이용한 성휘, 정의 스킬로 전장의 선봉에 설 수 있습니다.',
        description_en: 'The Valkyrie is a support class that heals allies and leads with divine light. You can shield and buff your party with holy energy, or step to the frontline with sword skills powered by faith.',
        identity: '신앙 게이지 발키리는 전투 중 획득 가능한 신앙 게이지를 활용해 빛의 기운을 해방할 수 있습니다. 빛의 해방 스킬을 사용하면, 주위 파티원의 전투 능력이 강화됩니다. 이때 함께 획득하는 해방의 신념을 통해 신념의 빛 스킬을 사용하면, 주위 파티원을 회복시킬 수 있습니다.',
        identity_en: 'By filling the Faith Gauge during battle, the Valkyrie can unleash divine light to empower nearby allies. With additional Faith of Liberation, you can cast Light of Faith to heal party members.',
        identityIconPos: { x: 170, y: 120 },
        identityIconSize: { width: 106, height: 68 },
        weaponIconPos: { x: 151, y: 255 },
        weaponIconSize: { width: 120, height: 58 },
        previewImage: previewValkyrie,
      },
    ],
  },
  {
    id: 'warrior',
    name: '전사 (남)',
    name_en: 'Warrior (Male)',
    layoutType: 'landscape',
    backgroundImage: bgMWarrior,
    icon: iconWarriorBase,
    description: '전사 계열은 화끈한 파괴력과 안정적인 방어력을 가진 공수밸런스가 좋은 클래스 입니다. 강력한 파괴력을 가진 버서커나 탱키한 방어능력을 가진 워로드, 묵직한 한방의 디스트로이어, 신앙의 힘을 이용해 적을 공격하며 동료를 서포트하는 홀리나이트로 전직할 수 있습니다.',
    description_en: 'The Warrior class offers a balanced playstyle with fiery offense and solid defense. You can advance to Berserker for raw destructive power, Warlord for tanky protection, Destroyer for a crushing single blow, or Holy Knight to attack with faith’s power and support allies.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 }, // 스프라이트 내 아이덴티티 아이콘 좌표
    weaponIconPos: { x: 0, y: 0 },   // 스프라이트 내 무기 아이콘 좌표
    previewImage: warrior,
    advancedClasses: [
      {
        id: 'destroyer',
        name: '디스트로이어',
        name_en: 'Destroyer',
        layoutType: 'portrait',
        iconPos: { x: 700, y: 638 },
        emphasis: '나의 해머에 대항하는 자는 가루가 될 뿐!',
        emphasis_en: 'Those who stand against my hammer will be dust!',
        description: '디스트로이어는 느리지만 강력한 한방이 있는 근거리 클래스입니다. 기동성이 부족하지만 육중한 그라비티 해머를 자유자재로 다루며 적들에게 위협적인 공격을 가하게 됩니다. 단단하고, 무자비한 공격성으로 적들을 시원시원하게 쓸어버리며, 전장을 공포의 도가니로 만들어 버릴 수 있습니다.',
        description_en: 'The Destroyer is a close‑range class known for slow but devastating single strikes. Despite limited mobility, it wields a massive Gravity Hammer to deliver crushing blows, sweeping enemies aside with relentless aggression.',
        identity: '중력 제어 시스템 디스트로이어는 적을 공격하여 중력 코어를 획득하고, 코어를 보유하고 있을 때 중력 해방 스킬을 사용하면 중력 코어가 중력 게이지로 전환됩니다. 중력 게이지가 가득 모이게 되면 자신의 주변에 중력 모드를 가동시켜, 디스트로이어 자신은 더욱 단단해지고 영역 안에 있는 적들은 느리고 약해지게 만듬으로써, 상대적 우월감을 느끼며 전투를 풀어나갈 수 있습니다.',
        identity_en: 'Using the Gravity Control System, the Destroyer gathers Gravity Cores by attacking enemies. When released, these cores fill the Gravity Gauge. Once full, you activate Gravity Mode—hardening yourself while slowing and weakening foes within the zone for absolute battlefield dominance.',
        identityIconPos: { x: 552, y: 507 },
        identityIconSize: { width: 98, height: 48 },
        weaponIconPos: { x: 219, y: 579 },
        weaponIconSize: { width: 90, height: 60 },
        previewImage: previewDestroyer,
      },
      {
        id: 'warlord',
        name: '워로드',
        name_en: 'Warlord',
        layoutType: 'portrait',
        iconPos: { x: 0, y: 686 },
        emphasis: '다시는 동료를 잃지 않겠다.',
        emphasis_en: 'I will never lose a comrade again.',
        description: '워로드는 높은 방어력과 생존력을 기반으로 전장의 선봉에서 아군을 지휘하고 보호하는 근접 클래스입니다. 거대한 방패를 이용한 다양한 방어기술은 강력한 적들의 공격을 피해 없이 막아낼 수 있으며, 건랜스를 이용한 창격 기술과 포격 기술은 단순하지만 강력한 힘을 발휘합니다. 또한, 적들의 시선을 끌고 파티원을 보호할 수 있는 기술을 가진 워로드는 파티의 든든한 버팀목이자 전투의 리더입니다.',
        description_en: 'The Warlord is a front‑line melee class built on high defense and survivability. Using a massive shield, you block even the strongest attacks flawlessly. Your gunlance skills deliver straightforward yet powerful strikes, and you can taunt enemies to protect allies—serving as the party’s steadfast leader.',
        identity: '방어태세/전장의 방패 워로드는 전장의 상황에 따라 방어태세를 갖추거나 전장의 방패 스킬을 사용할 수 있습니다. 방어태세는 거대한 방패를 이용하여 몸을 보호하는 기술로 이동속도가 느려지지만 적들의 강력한 공격을 피해없이 막아낼 수 있습니다. 전장의 방패 스킬은 파티원이 위험에 처해 있을 때 피해를 대신 받아줄 수 있는 보호막을 생성하는 기술로 파티원을 보호하는 핵심 기술입니다.',
        identity_en: 'In Defensive Stance or Battlefield Shield mode, the Warlord adapts to the field. Defensive Stance uses your shield to absorb hits at the cost of movement speed, while Battlefield Shield creates a protective barrier that takes damage for an ally—your core protective skill.',
        identityIconPos: { x: 664, y: 106 },
        identityIconSize: { width: 98, height: 52 },
        weaponIconPos: { x: 0, y: 396 },
        weaponIconSize: { width: 182, height: 50 },
        previewImage: previewWarlord,
      },
      {
        id: 'berserker',
        name: '버서커',
        name_en: 'Berserker',
        layoutType: 'portrait',
        iconPos: { x: 572, y: 233 },
        emphasis: '이 거대한 검은 내 안의 투쟁심을 이끌어내지...!',
        emphasis_en: 'This great blade will awaken my inner fury…!',
        description: '버서커는 거대한 양손 대검을 사용하여 전장을 휘젓는 전형적인 근접 전사입니다. 높은 공격력과 방어력으로 전 클래스를 통틀어 공수의 밸런스가 가장 안정적인 클래스이며, 폭주 모드를 활용하면 전장을 순식간에 뒤집을 수 있는 엄청난 잠재력도 지니고 있는 강력한 클래스 입니다.',
        description_en: 'The Berserker wields a colossal two‑handed sword to carve through foes. Boasting balanced offense and defense, this class is the epitome of close‑range mastery. Engage Berserk Mode to unleash overwhelming potential and turn any fight on its head.',
        identity: '폭주모드 공격을 할 때마다 일정량의 분노 게이지를 얻게 되고, 이 분노 게이지가 차게되면 폭주 상태에 돌입할 수 있게 됩니다. 폭주 상태에 돌입한 버서커는 공격과 이동 속도가 크게 상승하게 되고, 해당 상태에서만 사용 가능한 스킬이 추가되어 더욱 강력한 공격을 가할 수 있습니다.',
        identity_en: 'Each attack in Berserk Mode generates Fury. When full, you enter Berserk State, boosting attack and movement speeds significantly and unlocking exclusive skills for devastating combos.',
        identityIconPos: { x: 116, y: 446 },
        identityIconSize: { width: 104, height: 60 },
        weaponIconPos: { x: 290, y: 398 },
        weaponIconSize: { width: 108, height: 44 },
        previewImage: previewBerserker,
      },
      {
        id: 'holyknight',
        name: '홀리나이트',
        name_en: 'Holy Knight',
        layoutType: 'portrait',
        iconPos: { x: 44, y: 686 },
        emphasis: '빛의 수호자여, 신의 이름으로 세상을 심판하라!',
        emphasis_en: 'O guardian of light, judge the world in God’s name!',
        description: '홀리나이트는 신념의 검과 신앙의 힘을 사용하는 서포트형 클래스입니다. 성서를 이용한 신성 스킬 및 버프를 활용해 아군을 후방에서 지원하거나 검을 이용한 징벌 스킬들을 통해 전장의 선봉에 설 수 있습니다.',
        description_en: 'The Holy Knight is a support‑oriented class that wields the Sword of Conviction and the power of faith. Cast holy skills and buffs from afar or step forward with your blade for righteous punishment on the frontline.',
        identity: '신앙 게이지 홀리나이트는 전투 중 획득 가능한 신앙 게이지를 이용하여 자신의 검을 강화하거나 파티원의 전투 능력을 증가시킬 수 있습니다. 신의 집행자 스킬을 사용할 경우 신앙의 힘을 자신의 검에 집중시켜 검을 이용한 모든 공격 사거리와 피해량을 증가시킬 수 있으며, 신성의 오라 스킬을 사용할 경우에는 자기 주변에 오라를 펼쳐 자신을 제외한 파티원들의 전투 능력을 증가시킬 수 있습니다.',
        identity_en: 'By charging the Faith Gauge in battle, the Holy Knight can empower their sword or boost allies. Use Divine Executor to concentrate faith into your blade, enhancing range and damage, or spread a Holy Aura around you to strengthen nearby companions.',
        identityIconPos: { x: 12, y: 266 },
        identityIconSize: { width: 112, height: 56 },
        weaponIconPos: { x: 414, y: 508 },
        weaponIconSize: { width: 132, height: 47 },
        previewImage: previewHolyknight,
      },
    ],
  },
  {
    id: 'fighter',
    name: '무도가 (남)',
    name_en: 'Fighter (Male)',
    layoutType: 'landscape',
    backgroundImage: bgFighter,
    icon: iconFighter,
    description: '무도가 계열은 빠른 스피드를 바탕으로 적들을 쉴새 없이 몰아치는 클래스입니다. 질풍처럼 빠른 움직임으로 전장의 판도를 뒤집는 스트라이커, 파괴력과 기동성을 모두 겸비한 브레이커로 전직할 수 있습니다.',
    description_en: 'The Fighter class relies on swift speed to relentlessly overwhelm enemies. You can advance to Striker, who turns the tide with lightning-fast moves, or to Breaker, who combines destructive power and mobility.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 }, // 스프라이트 내 아이덴티티 아이콘 좌표
    weaponIconPos: { x: 0, y: 0 },   // 스프라이트 내 무기 아이콘 좌표
    previewImage: fighter,
    advancedClasses: [
      {
        id: 'striker',
        name: '스트라이커',
        name_en: 'Striker',
        layoutType: 'portrait',
        iconPos: { x: 433, y: 640 },
        emphasis: '오로지, 극을 향하여 나아갈 뿐!',
        emphasis_en: 'I press onward toward the pinnacle!',
        description: '스트라이커는 질풍처럼 적들을 몰아붙이는 무도가 클래스입니다. 빠른 움직임에 다양한 체술을 두루 갖추고 있기 때문에 순식간에 적을 타격한 후 화려한 공중 콤보를 이어갈 수 있으며, 강력한 엘리멘탈 스킬들을 활용해 전장의 판도를 뒤집을 수도 있습니다.',
        description_en: 'The Striker is a Fighter class that drives enemies back like a gale. With swift movements and versatile martial arts techniques, you can strike in an instant and follow up with dazzling aerial combos, using powerful elemental skills to reverse the battlefield.',
        identity: '엘리멘탈 버블 스트라이커는 엘리멘탈 건틀릿을 장착한 상태에서 적을 공격하여 엘리멘탈 버블이라는 특수한 게이지를 획득할 수 있습니다. 엘리멘탈 버블은 최대 3개까지 생성할 수 있고, 엘리멘탈 버블을 소모하여 오의 스킬을 사용하는 것이 가능합니다. 오의 스킬은 성능에 따라 사용되는 버블의 개수가 다릅니다.',
        identity_en: 'Equipped with the Elemental Gauntlet, the Striker gains special Elemental Bubbles by attacking enemies. You can store up to three bubbles and consume them to unleash Limit Break skills; each skill requires a different number of bubbles based on its potency.',
        identityIconPos: { x: 663, y: 352 },
        identityIconSize: { width: 100, height: 50 },
        weaponIconPos: { x: 142, y: 322 },
        weaponIconSize: { width: 122, height: 76 },
        previewImage: previewstriker,
      },
      {
        id: 'breaker',
        name: '브레이커',
        name_en: 'Breaker',
        layoutType: 'portrait',
        iconPos: { x: 389, y: 640 },
        emphasis: '한번 손에 쥔 건 놓치지 않지, 천명마저도',
        emphasis_en: 'Once I grasp it, I never let go—even fate itself.',
        description: '브레이커는 우수한 기동성과 강력한 한방을 보유한 클래스입니다. 공격 포지션을 자유롭게 선택할 수 있으며, 여러가지 콤보를 사용해 몰아치는 전투를 기대해 볼 수 있습니다.',
        description_en: 'The Breaker boasts excellent mobility and a powerful single strike. You can freely choose your attack stance and unleash relentless combat with a variety of combos.',
        identity: '기력/충격/투지 에너지 브레이커가 사용하는 기력과 충격 에너지는 상호 보완되는 형태를 취합니다. 기력 스킬을 사용하게 되면 기력 게이지가 감소하는 대신 충격 에너지가 증가하고, 충격 스킬을 사용하면 충격 에너지가 감소하는 대신 기력 에너지가 증가되는 형태입니다',
        identity_en: 'The Breaker’s Energy and Impact energies complement each other. Using an Energy skill consumes Energy Gauge but increases Impact energy; using an Impact skill consumes Impact energy but increases Energy.',
        identityIconPos: { x: 656, y: 305 },
        identityIconSize: { width: 110, height: 52 },
        weaponIconPos: { x: 657, y: 0 },
        weaponIconSize: { width: 106, height: 58 },
        previewImage: previewbreaker,
      },
    ],
  },
  {
    id: 'fighter_female',
    name: '무도가 (여)',
    name_en: 'Fighter (Female)',
    layoutType: 'landscape',
    backgroundImage: bgFFighter,
    icon: iconFFighter,
    description: '무도가 계열은 빠른 스피드를 바탕으로 적들을 쉴새 없이 몰아치는 클래스입니다. 내공에너지로 능력을 극대화 시키는 기공사, 기동성이 좋고 화려한 콤보 공격이 일품인 배틀마스터, 묵직한 한 방의 파괴력으로 적들을 몰아치는 인파이터, 또는 두 개의 스탠스를 상황에 맞게 변경하며 단숨에 적을 제압하는 창술사로 전직할 수 있습니다.',
    description_en: 'The Fighter class relies on swift speed to relentlessly overwhelm enemies. You can advance to Soul Master to maximize abilities with inner energy, Battle Master for mobility and flashy combos, Infighter for crushing single blows, or Lance Master to change between two stances for swift domination.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 },
    weaponIconPos: { x: 0, y: 0 },
    previewImage: FFighter,
    advancedClasses: [
      {
        id: 'battlemaster',
        name: '배틀마스터',
        name_en: 'Battle Master',
        layoutType: 'portrait',
        iconPos: { x: 521, y: 637 },
        emphasis: '체술만으로는 강해질 수 없어',
        emphasis_en: 'Martial arts alone won’t make you stronger',
        description: '배틀마스터는 전광석화와 같이 적들을 공격하는 무도가 클래스입니다. 빠른 움직임에 다양한 체술을 두루 갖추고 있기 때문에 순식간에 적을 타격한 뒤 화려한 공중 콤보를 이어갈 수 있으며, 강력한 엘리멘탈 스킬들을 활용해 전장의 판도를 뒤집을 수도 있습니다.',
        description_en: 'The Battle Master is a Fighter class that strikes with lightning speed. With fast movements and versatile martial techniques, you can hit enemies in an instant and follow up with dazzling aerial combos, using powerful elemental skills to reverse the battlefield.',
        identity: '엘리멘탈 버블 엘리멘탈 버블 배틀마스터는 엘리멘탈 건틀릿을 장착한 상태에서 적을 공격하여 엘리멘탈 버블이라는 특수한 게이지를 획득할 수 있습니다. 엘리멘탈 버블은 최대 3개까지 생성할 수 있고, 엘리멘탈 버블을 소모하여 오의 스킬을 사용하는 것이 가능합니다. 오의 스킬은 성능에 따라 사용되는 버블의 개수가 다릅니다.',
        identity_en: 'With the Elemental Gauntlet equipped, the Battle Master generates special Elemental Bubbles by attacking enemies. You can store up to three bubbles and consume them to unleash Limit Break skills; the number of bubbles needed varies with each skill’s power.',
        identityIconPos: { x: 664, y: 354 },
        identityIconSize: { width: 92, height: 50 },
        weaponIconPos: { x: 402, y: 576 },
        weaponIconSize: { width: 124, height: 44 },
        previewImage: previewBat,
      },
      {
        id: 'infighter',
        name: '인파이터',
        name_en: 'Infighter',
        layoutType: 'portrait',
        iconPos: { x: 609, y: 636 },
        emphasis: '느껴진다. 오브에 가득한 무한한 힘이...',
        emphasis_en: 'I can feel it: the boundless power filling the orb...',
        description: '인파이터는 적들에게 파고드는 능력이 우수한 전형적인 근접 클래스입니다. 주 무기인 헤비 건틀릿을 이용한 묵직한 펀치로 적들을 몰아치는 공격이 가능합니다. 공격력과 방어력, 기동력이 전반적으로 모두 뛰어난 균형 잡힌 클래스로 전투 지속력 또한 우수하기 때문에 공수 양면에서 활약하는 모습을 기대해 볼 수 있습니다.',
        description_en: 'The Infighter is a melee class skilled at closing in on enemies. Using a heavy gauntlet for powerful punches, you can overwhelm foes. With balanced attack, defense, and mobility, this class excels in sustained combat on both offense and defense.',
        identity: '기력/충격 에너지 인파이터가 사용하는 기력과 충격 에너지는 상호 보완되는 형태를 취합니다. 기력 스킬을 사용하게 되면 기력 에너지가 감소하는 대신 충격 에너지가 증가하고, 충격 스킬을 사용하면 충격 에너지가 감소하는 대신 기력 에너지가 증가되는 형태입니다. 기력과 충격 에너지 스킬을 적절히 교체해가며 사용할 경우 끊임없이 적들을 공격할 수 있으며, 투지 에너지를 획득할 수 있습니다. 투지 에너지를 사용하면, 기력 및 충격 에너지 소모없이 스킬을 사용할 수 있는 투지발산 상태가 되어 다양한 전투 효과를 획득해 적을 공격할 수 있습니다.',
        identity_en: 'The Infighter’s Energy and Impact energies complement each other. Using an Energy skill consumes Energy but increases Impact energy; using an Impact skill consumes Impact energy but increases Energy. Alternating these skills generates Willpower energy. When consumed, Willpower Burst lets you use skills without consuming Energy or Impact, granting various combat buffs.',
        identityIconPos: { x: 662, y: 304 },
        identityIconSize: { width: 98, height: 51 },
        weaponIconPos: { x: 95, y: 575 },
        weaponIconSize: { width: 107, height: 62 },
        previewImage: previewInf,
      },
      {
        id: 'soulmaster',
        name: '기공사',
        name_en: 'Soul Master',
        layoutType: 'portrait',
        iconPos: { x: 572, y: 443 },
        emphasis: '내면의 기로 한계를 초월하라!',
        emphasis_en: 'Transcend limits through your inner energy!',
        description: '기공사는 내공을 사용하여 근접 및 원거리 공격을 다양하게 사용할 수 있는 중거리 클래스입니다. 장법을 이용한 근접 공격과 내공을 이용한 원거리 공격을 조합하여 순간적으로 폭발적인 공격을 퍼부을 수 있으며, 이러한 특징은 다양한 전장에서 실력을 발휘할 수 있게 만들어 줍니다.',
        description_en: 'The Soul Master uses inner energy to perform diverse mid‑range and close‑range attacks. By combining martial arts for melee strikes and inner power for ranged assaults, you can unleash explosive bursts instantly, showcasing versatility across battlefields.',
        identity: '금강선공 각종 공격 기술을 사용할 수 있게 해주는 내공과는 다르게 평소에 자연스럽게 운기 되는 기운을 체내에 축적시켜 두었다가 발동 시킬 수 있는 선천 기공입니다. 자신의 능력을 최대 3단계까지 증폭할 수 있으며, 내공을 모두 소진하게 되어 일정 시간 동안 내공이 회복되지 않을 때 각 단계를 발동시키면 소진된 내공을 한 번에 회복시켜줄 뿐 아니라 금강선공이 유지되는 시간 동안 기공사의 신체능력이 증폭돼 한층 강력한 위력을 발휘할 수 있게 됩니다.',
        identity_en: 'Unlike cultivated Qi, Innate Qi Gong accumulates naturally generated energy within the body to activate when needed. You can amplify your abilities up to three levels; if inner energy is fully depleted and not regenerating for a time, activating a level instantly restores all energy and boosts your physical power for the duration of Qi Gong, granting formidable strength.',
        identityIconPos: { x: 434, y: 300 },
        identityIconSize: { width: 87, height: 80 },
        weaponIconPos: { x: 720, y: 156 },
        weaponIconSize: { width: 42, height: 82 },
        previewImage: previewSoul,
      },
      {
        id: 'lancemaster',
        name: '창술사',
        name_en: 'Lance Master',
        layoutType: 'portrait',
        iconPos: { x: 570, y: 390 },
        emphasis: '전장의 창이 되어, 적을 섬멸하라!',
        emphasis_en: 'Become the spear of the battlefield and annihilate your enemies!',
        description: '창술사는 상황에 맞게 스탠스를 변경할 수 있는 클래스입니다. 변형 창을 사용해 주변에 위치한 적들을 쓸어버릴 수 있는 난무 스탠스, 날카로운 창으로 순간 높은 피해를 줄 수 있는 집중 스탠스를 사용해 전장의 적들을 단숨에 제압할 수 있습니다',
        description_en: 'The Lance Master switches stances to match the situation. In Wild Stance, wield a transformable spear to sweep away nearby foes; in Precision Stance, strike with a razor‑sharp spear to deal instant high damage and swiftly subdue enemies.',
        identity: '듀얼 스탠스 두 개의 스탠스를 자유롭게 변경할 수 있는 창술사는 스탠스를 유지하거나 적을 공격하는 것으로 듀얼 게이지를 최대 3단계까지 획득할 수 있습니다. 창술사는 스탠스 변경 시 보유한 듀얼 게이지를 소모하여 변경하는 스탠스에 어울리는 강력한 효과를 얻을 수 있습니다.',
        identity_en: 'With Dual Stance, the Lance Master freely switches between two stances, gaining Duel Gauge up to three levels by maintaining a stance or attacking. You can spend Duel Gauge to activate powerful effects tailored to each stance.',
        identityIconPos: { x: 187, y: 509 },
        identityIconSize: { width: 98, height: 68 },
        weaponIconPos: { x: 0, y: 193 },
        weaponIconSize: { width: 242, height: 47 },
        previewImage: previewLance,
      },
    ],
  },
  {
    id: 'hunter',
    name: '헌터 (남)',
    name_en: 'Hunter (Male)',
    layoutType: 'landscape',
    backgroundImage: bghunter,
    icon: iconhunter,
    description: '헌터는 거리를 두고 다양한 기술로 적들을 제압하는 원거리 클래스입니다. 기계 활과 특수 화살로 적을 공격하는 호크아이, 세 가지 무기를 사용하여 상황에 따라 효과적인 전투를 만들어낼 수 있는 데빌헌터, 막강한 화력으로 화끈하게 적들을 제압하는 블래스터, 또는 첨단 기술의 집약체, 드론을 이용해 협동 전투를 수행하는 스카우터로 전직할 수 있습니다.',
    description_en: 'The Hunter is a ranged class that controls the battlefield from a distance. You can advance to Hawkeye, firing mechanical bows and specialized arrows; Devil Hunter, who masters three firearms for any situation; Blaster, unleashing overwhelming firepower; or Scouter, leveraging cutting‑edge drone technology in cooperative combat.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 },
    weaponIconPos: { x: 0, y: 0 },
    previewImage: hunter,
    advancedClasses: [
      {
        id: 'devilhunter',
        name: '데빌헌터',
        name_en: 'Devil Hunter',
        layoutType: 'portrait',
        iconPos: { x: 518, y: 294 },
        emphasis: '악마의 울음소리가 궁금하면 날 찾아오라구!',
        emphasis_en: 'Come find me if you crave the devil’s wail!',
        description: '데빌헌터는 세 가지 총기를 사용하여 빠르게 움직이며 스타일리쉬한 전투를 펼치는 원거리 클래스 입니다. 대상과의 거리, 혹은 공격하고자 하는 범위에 따라 그에 알맞은 스탠스를 선택하여 더블 핸드건, 샷건, 라이플로 가장 효과적인 전투를 만들어 낼 수 있습니다.',
        description_en: 'The Devil Hunter is a ranged class that moves swiftly through battle with three firearms. Choose the appropriate stance—dual handguns, shotgun, or rifle—based on distance or target area to maximize combat effectiveness.',
        identity: '퀵 스탠스 데빌헌터는 세 가지 총기를 상황에 따라 자유자재로 변경하며 전투할 수 있습니다. 각 무기에 대응 되는 스킬이 존재하며, 핸드건의 경우 넓은 범위를 빠르고 화려하게 공격할 수 있고, 샷건은 가까운 적에게 강력한 대미지를 선사하며, 라이플은 멀리 떨어진 적을 견제하거나 마무리 일격을 날리기에 적합합니다',
        identity_en: 'In Quick Stance, the Devil Hunter seamlessly switches among three firearms. Each weapon has unique skills: handguns for rapid, flashy wide‑area attacks; shotgun for powerful close‑range damage; and rifle for long‑distance harassment or finishing shots.',
        identityIconPos: { x: 95, y: 508 },
        identityIconSize: { width: 82, height: 62 },
        weaponIconPos: { x: 0, y: 638 },
        weaponIconSize: { width: 112, height: 51 },
        previewImage: previewdevil,
      },
      {
        id: 'blaster',
        name: '블래스터',
        name_en: 'Blaster',
        layoutType: 'portrait',
        iconPos: { x: 86, y: 687 },
        emphasis: '아름답게 치장해주지, 불타는 꽃으로!',
        emphasis_en: 'I’ll adorn you beautifully—with burning blooms!',
        description: '블래스터는 거대 메카닉 런처와 여러가지 특수 중화기를 사용하는 막강한 화력과 폭발성 광역 공격에 특화된 원거리 클래스 입니다. 적들의 공격을 버텨내며 광역 딜링하는 스타일로 기동성은 떨어지는 편이지만 중갑을 착용하여 원거리 클래스 중에는 높은 방어력을 보유하고 있으며, 각종 중화기를 이용한 파괴력이 이러한 단점을 모두 상쇄시킵니다',
        description_en: 'The Blaster specializes in explosive, wide‑area assaults using a giant mechanical launcher and heavy ordnance. Though mobility is limited, heavy armor grants high defense among ranged classes, and devastating firepower more than compensates.',
        identity: '포격 모드 블래스터는 공격 적중 시 화력 게이지 및 포격 게이지가 증가합니다. 화력 게이지가 일정량 이상 모이게 되면 공격력이 단계적으로 증가하고, 포격 게이지를 가득 채우면 포격 모드를 발동할 수 있습니다. 포격 모드는 초대형 중화기를 소환하여 바닥에 고정해 놓은 상태인데, 적의 공격을 피해 이동할 수 없는 위험한 상태이지만 그 위험성을 감수할 만큼의 강력한 포격 공격을 가할 수 있습니다.',
        identity_en: 'In Bombardment Mode, the Blaster’s Firepower and Siege Gauges fill with each hit. When Firepower is high enough, damage increases in stages; filling Siege Gauge lets you summon a massive artillery piece—stationary but capable of earth‑shaking barrages.',
        identityIconPos: { x: 233, y: 444 },
        identityIconSize: { width: 88, height: 62 },
        weaponIconPos: { x: 183, y: 395 },
        weaponIconSize: { width: 106, height: 45 },
        previewImage: previewblas,
      },
      {
        id: 'hawkeye',
        name: '호크아이',
        name_en: 'Hawkeye',
        layoutType: 'portrait',
        iconPos: { x: 394, y: 398 },
        emphasis: '적을 꿰뚫어라, 신념의 화살이여!',
        emphasis_en: 'Pierce your foes, arrows of conviction!',
        description: '호크아이는 민첩하게 움직이며 기계 활과 특수 화살로 적을 공격하는 명사수 입니다. 민첩한 이동기를 활용한 생존력이 우수하며 이를 바탕으로 비교적 긴 시간동안 안정적인 전투를 펼칠 수 있습니다. 또한 다양한 상태이상 스킬과 은신을 활용하여 적의 허점을 노리는 전투가 가능합니다.',
        description_en: 'The Hawkeye is a sharpshooter who strikes with mechanical bows and special arrows. Exceptional agility and mobility skills grant strong survivability for sustained combat. Use status‑effect skills and stealth to exploit enemy weaknesses.',
        identity: '실버호크 소환 호크 게이지는 전투 중에 서서히 충전되고 호크 게이지를 모두 충전하면 실버호크를 소환할 수 있습니다. 실버호크는 주위의 적을 자동으로 공격하며 실버호크 전용 스킬을 사용해 다양한 적의 공격에 대처할 수 있습니다. 실버호크와 함께하는 전투는 장기전에서 유리한 상황을 만들어줍니다.',
        identity_en: 'As the Hawk Gauge gradually charges in battle, you can summon Silver Hawk upon full charge. Silver Hawk auto‑attacks nearby foes and uses exclusive skills, giving you the upper hand in prolonged engagements.',
        identityIconPos: { x: 105, y: 639 },
        identityIconSize: { width: 110, height: 48 },
        weaponIconPos: { x: 314, y: 183 },
        weaponIconSize: { width: 124, height: 56 },
        previewImage: previewhawk,
      },
      {
        id: 'scouter',
        name: '스카우터',
        name_en: 'Scouter',
        layoutType: 'portrait',
        iconPos: { x: 300, y: 639 },
        emphasis: '하이퍼싱크, 시스템 동기화가 완료되었습니다.',
        emphasis_en: 'Hyper Sync: system synchronization complete.',
        description: '스카우터는 아르데타인의 첨단 기술을 활용하여 전투를 수행하는 클래스입니다. 스카우터는 냉정하고 침착하게 고도의 기술을 구사합니다. 특히, 아르데타인 기술의 집약체인 드론을 이용한 공격은 적을 분석하고 궤멸시키는데 한 치의 오차도 허용하지 않을 만큼 정확합니다.',
        description_en: 'The Scouter wields advanced Ardetain technology in combat with calm precision. Drone‑based assaults analyze and annihilate foes with pinpoint accuracy, and upon full Hyper Sync Core charge, your drones merge into a suit for unmatched mobility and firepower.',
        identity: '드론과 배터리 아르데타인의 첨단기술로 무장한 스카우터는드론을 이용해 전투를 진행합니다. 드론은 배터리를 소모하여 폭발적인 전투 및 전술을 가능하게 합니다. 정교한 조작으로 사각을 파고드는 공격은 적을 순식간에 궤멸시킬 것입니다. 하이퍼 싱크 코어 에너지가 가득 차면 스카우터는 자신의 드론을 슈트로 변형시켜 장착할 수 있습니다. 하이퍼 싱크 상태에 돌입한 스카우터는 기동성과 화력이 비약적으로 증가하여 레이저와 빔으로 순식간에 다수의 적을 섬멸할 수 있습니다.',
        identity_en: 'Armed with Ardetain’s cutting‑edge tech, the Scouter fights using drones powered by batteries. Precision drone strikes obliterate enemies instantly. When the Hyper Sync Core is full, your drones transform into a suit, skyrocketing your mobility and firepower with lasers and beams.',
        identityIconPos: { x: 662, y: 246 },
        identityIconSize: { width: 76, height: 58 },
        weaponIconPos: { x: 433, y: 0 },
        weaponIconSize: { width: 142, height: 62 },
        previewImage: previewscouter,
      },
    ],
  },
  {
    id: 'hunter_female',
    name: '헌터 (여)',
    name_en: 'Hunter (Female)',
    layoutType: 'landscape',
    backgroundImage: bghunter_f,
    icon: iconhunter_f,
    description: '헌터는 거리를 두고 다양한 기술로 적들을 제압하는 원거리 클래스입니다. 스타일리쉬한 전투를 즐길 수 있는 건슬링어로 전직할 수 있습니다.',
    description_en: 'The Hunter is a ranged class that commands stylish combat. You can advance to Gunslinger to master three firearms and showcase elegant, high‑octane battles.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 },
    weaponIconPos: { x: 0, y: 0 },
    previewImage: hunter_f,
    advancedClasses: [
      {
        id: 'gunslinger',
        name: '건슬링어',
        name_en: 'Gunslinger',
        layoutType: 'portrait',
        iconPos: { x: 565, y: 638 },
        emphasis: '총 앞에서는, 모두가 솔직해지는 법이지',
        emphasis_en: 'Before a gun, everyone speaks the truth.',
        description: '건슬링어는 세 가지 총기를 사용하여 빠르게 움직이며 스타일리쉬한 전투를 펼치는 원거리 클래스 입니다. 대상과의 거리, 혹은 공격하고자 하는 범위에 따라 그에 알맞은 스탠스를 선택하여 더블 핸드건, 샷건, 라이플로 가장 효과적인 전투를 만들어 낼 수 있습니다.',
        description_en: 'The Gunslinger is a ranged class that wields three firearms in stylish, rapid engagements. Choose the right stance—dual handguns, shotgun, or rifle—based on distance or target area to execute the most effective attacks.',
        identity: '퀵 스탠스 건슬링어는 세 가지 총기를 상황에 따라 자유자재로 변경하며 전투할 수 있습니다. 각 무기에 대응되는 스킬이 존재하며, 핸드건의 경우 넓은 범위를 빠르고 화려하게 공격할 수있고, 샷건은 가까운 적에게 강력한 대미지를 선사하며, 라이플은 멀리 떨어진 적을 견제하거나, 마무리 일격을 날리기에 적합합니다.',
        identity_en: 'In Quick Stance, the Gunslinger freely switches among three firearms. Each weapon offers unique skills: handguns for wide‑area, flashy rapid fire; shotgun for devastating close‑range damage; and rifle for long‑range suppression or finishing shots.',
        identityIconPos: { x: 93, y: 511 },
        identityIconSize: { width: 90, height: 54 },
        weaponIconPos: { x: 269, y: 328 },
        weaponIconSize: { width: 120, height: 67 },
        previewImage: previewgunsli,
      },
    ],
  },
  {
    id: 'magician',
    name: '마법사',
    name_en: 'Magician',
    layoutType: 'landscape',
    backgroundImage: bgmagician,
    icon: iconmagician,
    description: '마법사는 신비로운 마법 스킬로 적들을 공격하는 원거리 클래스입니다. 다양한 정령과 함께 강력한 마법으로 적을 제압하는 서머너, 화려한 마법과 신비로운 카드를 사용하며 현란한 움직임을 가진 아르카나, 성스러운 하프로 적을 공격하고 파티원을 치유하며 서포트하는 바드, 세 가지 원소와 신비한 마력을 자유자재로 구사하는 소서리스로 전직할 수 있습니다.',
    description_en: 'The Magician is a ranged class that strikes foes with mystical magic. She can advance to Summoner, commanding powerful elemental spirits; Arcana, wielding dazzling magic and mystical cards; Bard, supporting allies with a sacred harp while healing and striking; or Sorceress, mastering three elements and arcane power at will.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 },
    weaponIconPos: { x: 0, y: 0 },
    previewImage: magician,
    advancedClasses: [
      {
        id: 'bard',
        name: '바드',
        name_en: 'Bard',
        layoutType: 'portrait',
        iconPos: { x: 571, y: 336 },
        emphasis: '이 아름다운 선율은 피바다가 될 전장의 전주곡이에요.',
        emphasis_en: 'This beautiful melody is the prelude to a crimson battlefield.',
        description: '바드는 성스러운 하프를 이용하여 적을 공격하거나 아군을 서포트하는 원거리 서포트형 클래스입니다. 날카로운 음율로 적을 공격하기도 하고, 아름다운 운율로 아군을 치유하며, 파티에서는 선봉보다는 후방에서 아군을 돕거나 각종 버프를 이용해 아군을 지원하는 역할을 수행할 수 있습니다. 공격력은 다소 낮은 편이지만 아군을 지원하는 능력이 매우 뛰어나기 때문에 파티에서 꼭 필요로 하는 클래스 입니다.',
        description_en: 'The Bard is a ranged support class using a sacred harp to attack enemies or support allies. She can strike with sharp melodies, heal with beautiful rhythms, and provide buffs from the rear. While her damage is modest, her support capabilities make her indispensable in any party.',
        identity: '세레나데 바드는 세레나데 스킬이라는 특수한 스킬을 보유하고 있는데 이 스킬을 사용하기 위해서는 세레나데 버블이 필요합니다. 세레나데 버블은 최대 3개로 이루어져 있고, 세레나데 버블 1개를 소모하여 세레나데 스킬을 사용하는 것이 가능합니다. 세레나데 스킬은 파티원의 공격력을 증가시키거나, 체력을 회복시키는데 사용됩니다.',
        identity_en: 'The Bard wields a special Serenade skill that consumes Serenade Bubbles. You can store up to three bubbles, each granting a chance to cast Serenade to boost allies’ attack power or restore HP.',
        identityIconPos: { x: 331, y: 442 },
        identityIconSize: { width: 93, height: 68 },
        weaponIconPos: { x: 654, y: 484 },
        weaponIconSize: { width: 108, height: 52 },
        previewImage: previewbard,
      },
      {
        id: 'summoner',
        name: '서머너',
        name_en: 'Summoner',
        layoutType: 'portrait',
        iconPos: { x: 344, y: 636 },
        emphasis: '정령들이여 세상을 위협하는 적들을 쓰러뜨려라!',
        emphasis_en: 'Spirits, strike down those who threaten our world!',
        description: '서머너는 보조 딜러나 탱커 역할을 담당할 수 있는 다양한 정령들과 함께 전투를 전개해 나가는 원거리 클래스입니다. 체력과 방어력이 낮아서 일정거리 이상을 유지하며 전투를 하는 것이 좋고, 만약 적들에게 거리를 잡히면 치명적일 수 있으나, 서머너가 가진 다양한 마법 스킬과 정령들을 적절히 조합한다면 위협적인 상황은 허용조차 되지 않을 것입니다.',
        description_en: 'The Summoner is a ranged class who fights alongside elemental spirits as off‑tanks or support DPS. With low HP and defense, maintaining distance is key. However, well‑timed spirit summons and spell combos can make threats disappear before they approach.',
        identity: '고대정령 소환 서머너는 거대하고 강력한 고대의 정령들을 소환할 수 있습니다. 고대의 기운을 모으면 정령의 구슬이 생성되는데 이 구슬의 소모량에 따라서 보다 강력한 고대의 정령을 소환할 수 있게 됩니다. 상황에 맞춰 강력한 고대의 정령들을 소환하여 전투를 지배해보세요.',
        identity_en: 'Ancient Spirit Summon lets the Summoner call mighty primordial spirits. Gathering Ancient Energy generates Spirit Orbs; spending more orbs summons stronger spirits. Master this to dominate any battlefield.',
        identityIconPos: { x: 0, y: 583 },
        identityIconSize: { width: 101, height: 58 },
        weaponIconPos: { x: 575, y: 0 },
        weaponIconSize: { width: 85, height: 88 },
        previewImage: previewsummo,
      },
      {
        id: 'arcana',
        name: '아르카나',
        name_en: 'Arcana',
        layoutType: 'portrait',
        iconPos: { x: 526, y: 131 },
        emphasis: '이 세상의 운명은 이미 내 카드 안에 담겨 있다!',
        emphasis_en: 'The fate of this world is already in my cards!',
        description: '아르카나는 마법사 클래스로 체력과 방어력이 약해 위험에 쉽게 노출 되기도 하는 반면, 현란하고 빠른 몸놀림으로 중거리 전투에서 강력한 모습을 보이며, 다이나믹한 전투로 상대를 유린 할 수도 있는 클래스 입니다. 스킬 한방 한방이 강력하진 않지만, 적에게 카드의 마력이 담긴 스택트 효과를 쌓고, 루인 스킬을 이용하여 스택트 효과를 폭발시킴으로 증폭된 대미지를 선사할 수 있습니다.',
        description_en: 'Arcana is a mage class with low HP and defense but excels in mid‑range duels with swift, flashy movements. Each card‑infused attack stacks magical effects on foes; unleash Ruin skill to detonate stacks for amplified damage.',
        identity: '카드 덱 아르카나는 카드 게이지가 가득차면 카드 덱 안에서 랜덤하게 한장의 카드를 뽑을 수 있습니다. 카드 덱 안에는 다양한 효과를 가진 카드들이 존재 하지만, 어떠한 카드가 나올지는 아무도 알 수 없기에, 뽑힌 카드가 무엇인가에 따라서 전장의 운명은 크게 뒤바뀔 수 있습니다.',
        identity_en: 'Card Deck: When your Card Gauge is full, draw a random card from your deck. Cards carry various effects, and their unpredictability can drastically change the tide of battle.',
        identityIconPos: { x: 658, y: 48 },
        identityIconSize: { width: 104, height: 58 },
        weaponIconPos: { x: 658, y: 157 },
        weaponIconSize: { width: 62, height: 87 },
        previewImage: previewarca,
      },
      {
        id: 'sorceress',
        name: '소서리스',
        name_en: 'Sorceress',
        layoutType: 'portrait',
        iconPos: { x: 571, y: 285 },
        emphasis: '자연의 섭리를 깨달은 자, 전장을 지배하리라!',
        emphasis_en: 'One who understands nature’s laws shall rule the battlefield!',
        description: '소서리스는 세 가지 원소를 기본으로 한 강력한 마법을 다루는 클래스입니다. 소서리스는 광역 마법을 사용해 다수의 적을 손쉽게 처리할 수 있으며, 캐스팅 마법으로 강력한 적에게 높은 피해를 선사할 수도 있습니다. 신비한 마력 게이지를 획득해 얻을 수 있는 아이덴티티를 잘 활용한다면 전장을 지배하는 영웅이 될 수 있습니다.',
        description_en: 'The Sorceress commands powerful magic of three elements. She can clear groups of enemies with AoE spells and deal massive single‑target damage with casting spells. Mastery of her Arcane Gauge identity skills makes her a battlefield legend.',
        identity: '마력 방출/점멸 소서리스는 적에게 스킬을 적중 시킬 때마다, 신비한 마력 게이지를 획득할 수 있고 마력 방출 및 점멸을 사용할 수 있습니다. 마력 방출 스킬은 원소 마법을 강화하고 캐스팅 시간을 줄일 수 있는 유용한 스킬이며, 점멸 스킬은 특정 지점으로 빠르게 이동할 수 있는, 보스 몬스터까지도 관통이 가능한 기술입니다.',
        identity_en: 'Arcane Release/Blink: The Sorceress gains Arcane Gauge with each hit. Arcane Release buffs elemental spells and reduces cast time, while Blink teleports you to a target location—even through bosses—in the blink of an eye.',
        identityIconPos: { x: 315, y: 0 },
        identityIconSize: { width: 118, height: 98 },
        weaponIconPos: { x: 284, y: 507 },
        weaponIconSize: { width: 125, height: 50 },
        previewImage: previewsorce,
      },
    ],
  },
  {
    id: 'assassin',
    name: '암살자',
    name_en: 'Assassin',
    layoutType: 'landscape',
    backgroundImage: bgassassin,
    icon: iconassassin,
    description: '암살자는 재빠른 움직임과 다채로운 공격을 통해 적들을 습격하는 근거리 클래스입니다. 세 개의 검을 사용해 숨 쉴 틈 없는 공격을 난사하는 블레이드, 내면의 악마성을 해방해 무참히 적들을 휩쓸어버리는 데모닉, 단검과 그림자 스킬을 사용해 적에게 극한의 공포를 선사하는 리퍼, 사신의 힘으로 적들의 영혼을 수확하는 소울이터로 전직할 수 있습니다.',
    description_en: 'The Assassin is a close‑range class that strikes swiftly with varied attacks. You can advance to Blade, unleashing relentless strikes with three swords; Demonic, who taps inner demon power for brutal sweeps; Reaper, using daggers and shadow skills to terrify foes; or Soul Eater, harvesting souls with the scythe of the grim reaper.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 },
    weaponIconPos: { x: 0, y: 0 },
    previewImage: assassin,
    advancedClasses: [
      {
        id: 'blade',
        name: '블레이드',
        name_en: 'Blade',
        layoutType: 'portrait',
        iconPos: { x: 703, y: 594 },
        emphasis: '내재된 악마성을 절제하며, 혼돈의 검을 휘두르는 자!',
        emphasis_en: 'One who tempers demon blood and wields the Blade of Chaos!',
        description: '블레이드는 쌍검과 장검, 총 세개의 검을 사용하는 암살자입니다. 항상 차분한 이성을 유지하며, 날렵한 쌍검과 묵직한 장검에 혼돈의 힘을 담아 빠르고 절도 있게 적들을 공격합니다. 특히, 쌍검과 장검을 활용한 연계 공격은 숨쉴 틈 없는 공격을 난사해 적을 제압합니다.',
        description_en: 'The Blade uses three swords—dual blades and a longsword—to deliver swift, precise strikes infused with chaotic power. Calm and calculating, she chains these weapons for relentless barrage that leaves foes no chance to breathe.',
        identity: '블레이드 아츠 블레이드는 공격 및 특정 스킬 적중 시, 블레이드 오브 게이지를 획득하고, 블레이드 오브가 한 개 이상 채워지면 블레이드 아츠 상태에 돌입할 수 있습니다. 블레이드 아츠 상태가 되면 블레이드 오브 게이지에 따라 공격속도, 이동속도 및 적에게 주는 피해가 상승하고 블레이드 아츠 상태 중에만 사용 가능한 강력한 블레이드 버스트 스킬을 사용할 수 있습니다.',
        identity_en: 'Blade Arts: Attacks and skill hits generate Blade Orb gauge. With at least one orb, you enter Blade Arts state, boosting attack speed, movement speed, and damage according to gauge, and unlocking the powerful Blade Burst skill exclusive to this state.',
        identityIconPos: { x: 423, y: 440 },
        identityIconSize: { width: 101, height: 69 },
        weaponIconPos: { x: 0, y: 114 },
        weaponIconSize: { width: 154, height: 84 },
        previewImage: previewblade,
      },
      {
        id: 'demonic',
        name: '데모닉',
        name_en: 'Demonic',
        layoutType: 'portrait',
        iconPos: { x: 653, y: 638 },
        emphasis: '운명의 사슬을 끊고, 내재된 악마성을 해방하라!',
        emphasis_en: 'Break fate’s chains and unleash your demon within!',
        description: '데모닉은 거대한 무기 ‘데모닉 웨폰’을 사용하여 적들을 무참히 베는데 특화된 암살자입니다. 절제를 위주로 싸우는 블레이드와는 달리, 혼돈의 힘을 적극적으로 해방해 싸우는 것이 특징입니다. 스킬이 적중하여 잠식 게이지가 차면 내재된 악마성이 완전히 해방, 혼돈의 힘을 사용할 수 있습니다',
        description_en: 'The Demonic wields the massive Demonic Weapon to mow down enemies. Unlike the disciplined Blade, she fully unleashes chaotic power—once the Corruption Gauge fills from skill hits, she becomes a demon incarnate, wielding havoc freely.',
        identity: '악마화 내재된 악마성을 해방한 데모닉은 일정시간 동안 매우 파괴적인 힘을 가지게 됩니다. 또한, 늘어난 체력과 속도로 적을 압도하는 플레이가 가능하며, 데몬 클로를 이용한 새로운 전투 스타일을 사용할 수 있게 됩니다.',
        identity_en: 'Demonize: Upon releasing inner demon, you gain immense destructive power for a duration, along with increased HP and speed, and unlock new Demon Claw combat style for devastating play.',
        identityIconPos: { x: 310, y: 573 },
        identityIconSize: { width: 91, height: 63 },
        weaponIconPos: { x: 524, y: 578 },
        weaponIconSize: { width: 106, height: 48 },
        previewImage: previewdemonic,
      },
      {
        id: 'reaper',
        name: '리퍼',
        name_en: 'Reaper',
        layoutType: 'portrait',
        iconPos: { x: 257, y: 638 },
        emphasis: '... 그림자는 소리를 내지 않는 법이지.',
        emphasis_en: '…Shadows do not make a sound.',
        description: '리퍼는 대거를 이용해 단검 스킬과 그림자 스킬을 구사하는 암살자 클래스입니다. 리퍼는 날렵한 움직임을 이용해 적을 습격하여, 적에게 공포를 선사합니다. 다양한 독을 사용하여 지속적인 피해를 줄 수도 있고, 은신을 통해 은밀하게 적의 배후로 이동해 강력한 공격을 할 수도 있습니다.',
        description_en: 'The Reaper uses daggers and shadow skills to strike fear into enemies. With agile movements, she ambushes foes, applies deadly poisons for sustained damage, and uses stealth to slip behind targets for lethal strikes.',
        identity: '페르소나 어둠 게이지를 가득 채우면 자신과 동일한 분신 페르소나를 소환해 은신할 수 있습니다. 은신 시간이 지속될수록 더욱 강한 공격이 가능합니다. 또한, 페르소나를 사용하지 않고 공격을 계속한다면 혼돈 게이지를 채울 수 있습니다. 혼돈 게이지가 가득 차면 혼돈 상태가 되어 더욱 빠르고 치명적인 공격을 사용할 수 있습니다. 어느 쪽을 선택하든 당신의 존재는 적에게 공포로 각인될 것입니다',
        identity_en: 'Persona: Fill the Shadow Gauge to summon a shadow persona for stealth; longer stealth boosts attack power. Alternatively, fill the Chaos Gauge by attacking without summoning for Chaos State, granting faster, deadlier strikes. Either path brands you as terror incarnate.',
        identityIconPos: { x: 19, y: 35 },
        identityIconSize: { width: 125, height: 82 },
        weaponIconPos: { x: 158, y: 77 },
        weaponIconSize: { width: 136, height: 40 },
        previewImage: previewreaper,
      },
      {
        id: 'souleater',
        name: '소울이터',
        name_en: 'Soul Eater',
        layoutType: 'portrait',
        iconPos: { x: 660, y: 595 },
        emphasis: '들리는가? 한 맺힌 사령들의 탄식이...!',
        emphasis_en: 'Can you hear it? The anguished wails of lost souls…!',
        description: '소울이터는 큰 낫 "데스사이드"를 사용하여 적의 영혼을 수확하는 암살자입니다. 직접 낫을 휘둘러 적을 상대하거나, 망자를 소환해 공격하고, 영혼석을 소모하여 사신의 힘이 담긴 일격을 가합니다. 특히 사신화하게 되면 더욱 강력한 사신의 힘을 다룰 수 있습니다.',
        description_en: 'The Soul Eater wields the Deathscythe to harvest souls. She swings the scythe directly, summons shades to attack, and consumes Soul Shards for a Reaper’s Strike. In Grim State, she commands even greater Reaper powers.',
        identity: '사신화 소울이터는 적에게 적중하는 스킬에 따라 영혼석과 빙의 게이지를 획득합니다. 일반 상태에서는 영혼석을 사용하여 사신 스킬을 사용할 수 있으며, 빙의 게이지가 가득 차면 사신화가 가능합니다. 사신화 상태에서는 영혼석 소모 없이 최대 3회 강화된 사신 스킬을 사용하여 큰 피해를 줄 수 있습니다.',
        identity_en: 'Reaper Form: Attacks build Soul Shards and Possession Gauge. In normal state, shards fuel Reaper skills; when Gauge is full, enter Reaper Form, enabling up to three empowered Reaper skills without consuming shards for massive damage.',
        identityIconPos: { x: 313, y: 108 },
        identityIconSize: { width: 108, height: 78 },
        weaponIconPos: { x: 433, y: 214 },
        weaponIconSize: { width: 100, height: 82 },
        previewImage: previewsouleater,
      },
    ],
  },
  {
    id: 'specialist',
    name: '스페셜리스트',
    name_en: 'Specialist',
    layoutType: 'landscape',
    backgroundImage: bgspecialist,
    icon: iconspecialist,
    description: '스페셜리스트는 자연과 소통하여 고유 기술로 적을 제압하는 클래스입니다. 환영의 힘으로 신수를 불러내고 전략적으로 파티원을 지원해 주는 도화가, 변덕스러운 날씨를 다루고 우산을 이용하여 전장을 제압하는 기상술사, 다양한 환수의 힘을 이용해 전장의 판도를 바꾸는 환수사로 전직할 수 있습니다.',
    description_en: 'The Specialist communicates with nature to suppress enemies with unique techniques. You can advance to Artist who summons divine beasts and supports allies with illusions, Aeromancer who manipulates the weather and umbrella-based attacks, or Wildsoul who transforms with mystical beasts to control the battlefield.',
    identity: '',
    identity_en: '',
    identityIconPos: { x: 0, y: 0 },
    weaponIconPos: { x: 0, y: 0 },
    previewImage: specialist,
    advancedClasses: [
      {
        id: 'artist',
        name: '도화가',
        name_en: 'Artist',
        layoutType: 'portrait',
        iconPos: { x: 477, y: 639 },
        emphasis: '그릴 거야, 너와 모두를 지키기 위해…',
        emphasis_en: 'I will draw... to protect you and everyone.',
        description: '도화가는 붓에서 나오는 환영의 힘으로 전략적 운용이 가능한 서포터형 클래스입니다. 붓과 먹물로 적을 공격하거나 그림을 통해 다양한 신수를 불러낼 수 있습니다. 공격력은 다소 낮은 편이지만 환영의 힘으로 아군을 위험에서 구해 전장의 후방을 든든하게 지원해 주는 클래스입니다',
        description_en: 'The Artist is a support class that strategically uses illusionary power from her brush. She attacks enemies with ink or summons divine beasts through her paintings. While lacking damage, her illusions can rescue allies and provide firm rear support.',
        identity: '저무는 달 / 떠오르는 해 도화가는 적에게 스킬을 적중 시킬 때마다 조화 게이지를 획득할 수 있고 가득 채울 경우 조화의 구슬을 최대 3개까지 생성합니다. 이후 조화의 구슬을 소모하며 저무는 달 및 떠오르는 해를 사용할 수 있습니다. 저무는 달 스킬은 필법의 힘으로 즉시 파티원 다수를 강화시킬 수 있고, 떠오르는 해 스킬은 묵법의 힘으로 단일 파티원의 체력을 회복시키는 해 구슬을 만들어내는 기술입니다.',
        identity_en: 'Harmony Orbs: The Artist gains Harmony Gauge by hitting enemies. When full, it generates up to three orbs. These orbs can be used for two abilities—"Full Moon" empowers multiple allies instantly with brush energy, while "Rising Sun" heals a single ally with ink-based orbs.',
        identityIconPos: { x: 574, y: 87 },
        identityIconSize: { width: 82, height: 72 },
        weaponIconPos: { x: 574, y: 158 },
        weaponIconSize: { width: 70, height: 64 },
        previewImage: previewartist,
      },
      {
        id: 'aeromancer',
        name: '기상술사',
        name_en: 'Aeromancer',
        layoutType: 'portrait',
        iconPos: { x: 240, y: 194 },
        emphasis: '오늘의 날씨는... 맑음!',
        emphasis_en: 'Today’s forecast... clear skies!',
        description: '기상술사는 신비로운 환영의 힘으로 기상을 다루고 우산을 활용하여 적을 제압하는 클래스입니다. 변덕스러운 날씨를 이용해 특정 위치에 있는 적을 공략하거나, 우산을 접고 펼치는 화려한 움직임으로 근거리 적들을 제압하는 전투를 할 수 있습니다',
        description_en: 'The Aeromancer uses mysterious illusionary powers to control the weather and wields an umbrella in combat. She targets enemies based on weather patterns and performs flashy close-range combat by opening and closing her umbrella.',
        identity: '여우비 기상술사는 적에게 스킬을 적중시킬 때마다 빗방울 게이지를 획득할 수 있고, 가득 채울 경우 여우비를 사용할 수 있습니다. 여우비를 사용하면 일정 시간 동안 기본 공격 및 이동기가 변화되고 주변의 적에게 지속적인 피해를 주는 한편, 자신과 파티원이 받는 피해 또한 감소시킬 수 있습니다.',
        identity_en: 'Fox Rain: The Aeromancer builds Raindrop Gauge with each hit. When full, she can activate Fox Rain, changing her basic attacks and movement skills while dealing continuous damage around her and reducing damage taken by herself and allies.',
        identityImage: iconAeromancerIdentity,
        weaponImage: iconAeromancerWeapon,
        previewImage: previewaeromancer,
      },
      {
        id: 'wildsoul',
        name: '환수사',
        name_en: 'Wildsoul',
        layoutType: 'portrait',
        iconPos: { x: 212, y: 641 },
        emphasis: '보여줄게, 경이로운 환수의 힘을!',
        emphasis_en: 'Witness the awe-inspiring power of the wild beasts!',
        description: '환수사는 환수의 힘이 봉인된 두루마리를 바탕으로 다양한 환영술을 사용하는 클래스입니다. 환수와 함께 적을 상대하거나, 강력한 곰이나 민첩한 여우로 둔갑하여 보다 유연하게 전투 상황에 대처할 수 있습니다.',
        description_en: 'The Wildsoul uses illusion arts sealed in scrolls to harness the power of spirit beasts. She can fight alongside them or shapeshift into a powerful bear or agile fox to flexibly respond to battle situations.',
        identity: '금술 : 찢 곰 / 금술 : 여우 별 소나기 환수사는 환수의 기운을 이용하여 곰이나 여우로 자유롭게 둔갑할 수 있습니다. 곰으로 둔갑하면 곰의 기운을 획득할 수 있고, 이 기운으로 강력한 근접 기술을 사용하며 묵직하고 위력적인 한 방을 날릴 수 있습니다. 여우로 둔갑하게 되면 여우의 기운을 획득할 수 있고, 이 기운으로 강력한 원거리 기술을 사용하며 민첩하고 날카롭게 적을 노릴 수 있습니다.',
        identity_en: 'Beast Scroll: The Wildsoul transforms freely into either a bear or fox using spirit energy. Bear form grants heavy melee power with strong attacks; fox form enhances agility and ranged prowess, enabling swift and sharp strikes from afar.',
        identityIconPos: { x: 0, y: 322 },
        identityIconSize: { width: 136, height: 79 },
        weaponIconPos: { x: 297, y: 269 },
        weaponIconSize: { width: 87, height: 54 },
        previewImage: previewwildsoul,
      },
    ],
  },
];