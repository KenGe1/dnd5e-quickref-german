data_environment_obscurance = [
    {
        title: "Leicht verdeckt",
        icon: "bleeding-eye",
        subtitle: "Nachteil auf Wahrnehmung",
        description: "Dämmerlicht, lückenhafter Nebel, mäßiges Blattwerk",
        reference: "PHB, S. 183.",
        bullets: [
            "Kreaturen haben <b>Nachteil auf Weisheitswürfe (Wahrnehmung)</b>, die auf Sicht beruhen."
        ]
    },
    {
        title: "Stark verdeckt",
        icon: "lightning-tear",
        subtitle: "Effektiv blind",
        description: "Dunkelheit, undurchsichtiger Nebel, dichtes Blattwerk",
        reference: "PHB, S. 183.",
        bullets: [
            "Eine Kreatur in einem stark verdeckten Bereich leidet effektiv unter dem <b>Zustand Geblendet</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Helles Licht",
        icon: "star-pupil",
        subtitle: "Normale Sicht",
        description: "Helles Licht ermöglicht den meisten Kreaturen normales Sehen",
        reference: "PHB, S. 183.",
        bullets: [
            "Auch trübe Tage bieten helles Licht, ebenso Fackeln, Laternen, Feuer und andere Lichtquellen in einem bestimmten Radius."
        ]
    },
    {
        title: "Halbdunkel",
        icon: "semi-closed-eye",
        subtitle: "Leicht verdeckt",
        description: "Halbdunkel, auch Schatten genannt",
        reference: "PHB, S. 183.",
        bullets: [
            "Erzeugt einen <b>leicht verdeckten</b> Bereich.",
            "Ein Bereich mit Halbdunkel ist meist der Übergang zwischen einer hellen Lichtquelle (z. B. einer Fackel) und der umgebenden Dunkelheit.",
            "Das sanfte Licht der Dämmerung und des Morgengrauens zählt ebenfalls als Halbdunkel. Ein besonders heller Vollmond kann die Landschaft in Halbdunkel tauchen."
        ]
    },
    {
        title: "Dunkelheit",
        icon: "worried-eyes",
        subtitle: "Stark verdeckt",
        description: "Dunkelheit erzeugt einen stark verdeckten Bereich",
        reference: "PHB, S. 183.",
        bullets: [
            "Erzeugt einen <b>stark verdeckten</b> Bereich.",
            "Charaktere begegnen Dunkelheit nachts im Freien (selbst in vielen Mondnächten), in unbeleuchteten Dungeons oder unterirdischen Gewölben sowie in Bereichen magischer Dunkelheit."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsicht",
        icon: "one-eyed",
        subtitle: "Wahrnehmung ohne Sehen",
        description: "Nimm deine Umgebung in einem bestimmten Radius wahr, ohne auf Sehen angewiesen zu sein",
        reference: "PHB, S. 183.",
        bullets: [
            "Kreaturen ohne Augen (wie Schleime) sowie Kreaturen mit Echoortung oder übersteigerten Sinnen (wie Fledermäuse und echte Drachen) verfügen über diesen Sinn."
        ]
    },
    {
        title: "Dunkelsicht",
        icon: "semi-closed-eye",
        subtitle: "Eingeschränkte Sicht in Dunkelheit",
        description: "Eine Kreatur mit Dunkelsicht kann in dunkler Umgebung oder bei schwachem Licht in einem bestimmten Radius besser sehen",
        reference: "PHB, S. 183-184.",
        bullets: [
            "Innerhalb der angegebenen Reichweite kann eine Kreatur mit Dunkelsicht <b>in Dunkelheit sehen, als wäre sie Halbdunkel</b>; für sie sind dunkle Bereiche daher nur leicht verdeckt.",
            "Allerdings kann die Kreatur in Dunkelheit keine Farben erkennen, sondern nur Graustufen.",
            "Viele Kreaturen in den Welten von D&D, insbesondere unterirdisch lebende, besitzen Dunkelsicht."
        ]
    },
    {
        title: "Wahrer Blick",
        icon: "eye-shield",
        subtitle: "Sieht durch Dunkelheit hindurch",
        description: "Eine Kreatur mit Wahrem Blick sieht Dinge in ihrer wahren Gestalt, unabhängig von den Umgebungsbedingungen",
        reference: "PHB, S. 184.",
        bullets: [
            "Eine Kreatur mit Wahrem Blick kann in einem bestimmten Radius in normaler und magischer Dunkelheit sehen, unsichtbare Kreaturen und Objekte sehen, visuelle Illusionen automatisch erkennen und Rettungswürfe dagegen automatisch bestehen sowie die ursprüngliche Gestalt von Gestaltwandlern oder magisch verwandelten Kreaturen wahrnehmen.",
            "Außerdem kann die Kreatur in die Ätherebene sehen."
        ]
    }
]

data_environment_cover = [
    {
        title: "Halbe Deckung",
        icon: "broken-shield",
        subtitle: "Niedrige Mauer, Möbel",
        description: "Ein Ziel hat halbe Deckung, wenn ein Hindernis mindestens die Hälfte seines Körpers verdeckt",
        reference: "PHB, S. 196.",
        bullets: [
            "Das Hindernis kann eine niedrige Mauer, ein großes Möbelstück, ein schmaler Baumstamm oder eine Kreatur sein, egal ob Freund oder Feind.",
            "Ein Ziel mit halber Deckung erhält einen <b>Bonus von +2 auf RK und Geschicklichkeitsrettungswürfe</b>.",
            "Wenn ein Ziel durch mehrere Deckungsquellen geschützt wird, gilt nur der höchste Deckungsgrad."
        ]
    },
    {
        title: "Dreivierteldeckung",
        icon: "cracked-shield",
        subtitle: "Fallgitter, Schießscharte",
        description: "Ein Ziel hat Dreivierteldeckung, wenn etwa drei Viertel seines Körpers durch ein Hindernis verdeckt sind",
        reference: "PHB, S. 196.",
        bullets: [
            "Das Hindernis kann ein Fallgitter, eine Schießscharte oder ein dicker Baumstamm sein.",
            "Ein Ziel mit Dreivierteldeckung erhält einen <b>Bonus von +5 auf RK und Geschicklichkeitsrettungswürfe</b>.",
            "Wenn ein Ziel durch mehrere Deckungsquellen geschützt wird, gilt nur der höchste Deckungsgrad."
        ]
    },
    {
        title: "Volle Deckung",
        icon: "shield",
        subtitle: "Vollständig verborgen",
        description: "Ein Ziel hat volle Deckung, wenn es vollständig durch ein Hindernis verdeckt ist",
        reference: "PHB, S. 196.",
        bullets: [
            "Ein Ziel mit voller Deckung <b>kann nicht direkt</b> Ziel eines Angriffs oder Zaubers sein; einige Zauber können es aber über einen Wirkungsbereich dennoch erfassen.",
            "Wenn ein Ziel durch mehrere Deckungsquellen geschützt wird, gilt nur der höchste Deckungsgrad."
        ]
    }
]
