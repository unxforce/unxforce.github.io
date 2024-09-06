data_environment_obscurance = [
    {
        title: "輕度遮蔽",
        icon: "bleeding-eye",
        subtitle: "察覺檢定帶有劣勢",
        description: "輕度遮蔽、零星的霧氣、普通的森林",
        reference: "PHB, pg. 183.",
        bullets: [
            "生物在依賴視覺的<b>感知（察覺）檢定</b>帶有劣勢"
        ]
    },
    {
        title: "重度遮蔽",
        icon: "lightning-tear",
        subtitle: "完全阻礙視線",
        description: "黑暗、濃霧、或茂密植物葉",
        reference: "PHB, pg. 183.",
        bullets: [
            "一個處於重度遮蔽區域的生物將承受等同於<b>目盲狀態</b>的效果."
        ]
    }
]

data_environment_light = [
    {
        title: "明亮光照",
        icon: "star-pupil",
        subtitle: "正常視野",
        description: "讓大部分生物正常視物",
        reference: "PHB, pg. 183.",
        bullets: [
            "即使是陰天也會提供明亮光照，而火炬、提燈、火焰、和其他光源也可以在特定範圍內提供明亮光照。"
        ]
    },
    {
        title: "微光光照 ",
        icon: "semi-closed-eye",
        subtitle: "輕度遮蔽",
        description: "微光光照 ，也被稱作陰暗環境",
        reference: "PHB, pg. 183.",
        bullets: [
            "製造出被<b>輕度遮蔽</b>區域.",
            "微光光照的區域通常會做為明亮光照的光源（像是火炬）和周圍黑暗環境之間的過渡區域。",
            "薄暮和日出時的柔和光照同樣被視作微光光照。而特別明亮的滿月也可能會使整片土地沐浴在微光光照之下。"
        ]
    },
    {
        title: "黑暗",
        icon: "worried-eyes",
        subtitle: "重度遮蔽",
        description: "黑暗會製造出被重度遮蔽的區域",
        reference: "PHB, pg. 183.",
        bullets: [
            "製造出被<b>重度遮蔽</b>的區域。",
            "角色們會在戶外的夜晚時面臨黑暗（即使是在大多數月光照耀的夜晚也一樣）。其它的黑暗環境則包括缺乏照明的地下城或地下墓穴、或魔法黑暗所籠罩的區域。"
        ]
    }
]

data_environment_vision = [
    {
        title: "盲視",
        icon: "one-eyed",
        subtitle: "不依賴視覺觀察",
        description: "不依賴視覺也可以感知其周遭特定半徑範圍內的環境",
        reference: "PHB, pg. 183.",
        bullets: [
            "沒有眼睛的生物（像是泥怪）、以及具有回聲定位或高敏感官的生物（像是蝙蝠和真龍）都具有這種感官。"
        ]
    },
    {
        title: "黑暗視覺",
        icon: "semi-closed-eye",
        subtitle: "黑暗中有限度的視野",
        description: "在特定半徑範圍內，具有黑暗視覺的生物可以在黑暗和微光情況下看得比較清楚。",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "在特定半徑範圍內，具有黑暗視覺的生物可以將微光光照視作明亮光照，並將黑暗環境視作微光光照，因此黑暗環境對於這些生物而言僅會被輕度遮蔽。",
            "然而，這些生物無法辨別黑暗中的顏色，而只能看到灰黑的輪廓。",
            "Dnd遊戲不同世界中的許多生物，特別是那些居住於地底的生物，都具有黑暗視覺。"
        ]
    },
    {
        title: "真實視覺",
        icon: "eye-shield",
        subtitle: "看透黑暗",
        description: "具有真實視覺的生物可以看到所有事物的真實形態，與環境相隔的真實形態",
        reference: "PHB, pg. 184.",
        bullets: [
            "生物在特定半徑範圍內，可以看透普通或魔法黑暗、看見隱形的生物和物體、自動偵測出視覺幻象並成功通過對抗它們的豁免檢定、並看穿變形者或被魔法變形的生物的原始型態。",
            "此外，這些生物也可以看見位於乙太位面的事物。"
        ]
    }
]

data_environment_cover = [
    {
        title: "半掩護",
        icon: "broken-shield",
        subtitle: "矮牆、大件傢俬、幼樹幹、其他生物（不論敵友）。",
        description: "如果掩體擋住了目標一半的身體或以上，目標就有半掩護。",
        reference: "PHB, pg. 196.",
        bullets: [
            "障礙可能是一堵矮牆、一件大傢俬、一根幼樹幹或一個生物，無論該生物是敵人還是朋友。",
            "半掩護蔽的目標在 AC 和敏捷豁免檢定上有 <b>+2加值</b>。",
            "如果目標位於多個掩護來源後面，則僅適用最具保護性程度的掩護。"
        ]
    },
    {
        title: "四分三掩護",
        icon: "cracked-shield",
        subtitle: "欄柵、箭孔、或粗樹幹",
        description: "如果掩體擋住了目標大約四分三的身體，目標就有四分三掩護。",
        reference: "PHB, pg. 196.",
        bullets: [
            "障礙物可能是欄柵、箭孔或粗樹幹。",
            "四分之三掩護的目標在 AC 和敏捷豁免檢定上有<b>+5加值</b>。",
            "如果目標位於多個掩護來源後面，則僅適用最具保護性程度的掩護。"
        ]
    },
    {
        title: "全掩護",
        icon: "shield",
        subtitle: "完全擋住了目標",
        description: "若障礙物完全擋住了目標，則它將擁有全掩護",
        reference: "PHB, pg. 196.",
        bullets: [
            "全掩護的目標<b>不能直接被攻擊或法術瞄準</b>, 儘管某些法術可以通過將其納入效果區域來命中目標。",
            "如果目標位於多個掩護來源後面，則僅適用最具保護性程度的掩護。"
        ]
    }
]
