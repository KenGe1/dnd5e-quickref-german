data_action = [
    {
        title: "Angreifen",
        icon: "crossed-swords",
        subtitle: "Nahkampf- oder Fernkampfangriff",
        description: "Führe mit deiner Waffe einen Nahkampf- oder Fernkampfangriff aus",
        reference: "PHB, S. 192, 194-195.",
        bullets: [
            "Bestimmte Merkmale, wie das Klassenmerkmal <i>Extra Attack</i> des Kämpfers, erlauben dir, mit dieser Aktion mehr als einen Angriff auszuführen. Jeder Angriff ist ein eigener Angriffswurf und kann unterschiedliche Ziele haben. Du kannst dich zwischen diesen Angriffen bewegen.",
            "Wenn du mit einer leichten Nahkampfwaffe angreifst, kannst du eine Bonusaktion für einen Angriff mit der zweiten Waffe nutzen (siehe Bonusaktion <i>Angriff mit zweiter Waffe</i>).",
            "Du kannst einen deiner Nahkampfangriffe durch <i>Packen</i> oder <i>Stoßen</i> ersetzen.",
            "Vorteile auf Angriffe entstehen z. B. gegen geblendete, gelähmte, versteinerte, festgesetzte, betäubte oder bewusstlose Ziele; bei Nahkampfangriffen gegen liegende Ziele; sowie bei Angriffen durch unsichtbare oder versteckte Angreifer.",
            "Nachteile auf Angriffe entstehen z. B. gegen unsichtbare oder versteckte Ziele; bei Fernkampfangriffen gegen liegende Ziele; sowie bei Angriffen durch geblendete, verängstigte, vergiftete oder festgesetzte Angreifer."
        ]
    },
    {
        title: "Packen",
        icon: "grab",
        subtitle: "Spezieller Nahkampfangriff",
        description: "Versuche eine Kreatur zu packen",
        reference: "PHB, S. 195.",
        bullets: [
            "Du kannst mit der Aktion <i>Angreifen</i> einen speziellen Nahkampfangriff ausführen: das Packen. Wenn du mehrere Angriffe mit der Aktion Angreifen ausführen kannst, ersetzt dieser Angriff einen davon.",
            "Dein Ziel darf höchstens eine Größenkategorie größer sein als du und muss in deiner Reichweite sein.",
            "Mit mindestens einer freien Hand versuchst du das Ziel zu packen, indem du einen Stärkewurf (Athletik) machst, der vom Ziel mit Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gekontert wird (das Ziel wählt den Wurf).",
            "Bei Erfolg erhält das Ziel den Zustand <i>Gepackt</i> (seine Bewegungsrate ist 0)."
        ]
    },
    {
        title: "Stoßen",
        icon: "hand",
        subtitle: "Spezieller Nahkampfangriff",
        description: "Stoße eine Kreatur weg oder wirf sie zu Boden",
        reference: "PHB, S. 195.",
        bullets: [
            "Mit der Aktion <i>Angreifen</i> kannst du einen speziellen Nahkampfangriff ausführen, um eine Kreatur zu stoßen. Wenn du mehrere Angriffe mit der Aktion Angreifen ausführen kannst, ersetzt dieser Angriff einen davon.",
            "Das Ziel deines Stoßes darf höchstens eine Größenkategorie größer sein als du und muss in deiner Reichweite sein.",
            "Du machst einen Stärkewurf (Athletik), der vom Ziel mit Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gekontert wird (das Ziel wählt den Wurf).",
            "Wenn du den Wettbewerb gewinnst, stößt du das Ziel entweder zu Boden oder schiebst es 1,5 m von dir weg."
        ]
    },
    {
        title: "Einen Zauber wirken",
        icon: "magic-swirl",
        subtitle: "Zauberzeit: 1 Aktion",
        description: "Wirke einen Zauber mit einer Zauberzeit von 1 Aktion",
        reference: "PHB, S. 192.",
        bullets: [
            "Du kannst in demselben Zug keinen Zauber mit deiner Aktion und einen anderen Zauber mit deiner Bonusaktion wirken, außer die Aktion wird genutzt, um einen Zaubertrick zu wirken.",
            "Das Ziel eines Zaubers muss innerhalb seiner Reichweite liegen. Um ein Ziel anzuvisieren, brauchst du einen freien Weg zu ihm; ein Ziel hinter voller Deckung kann nicht direkt anvisiert werden.",
            "Zauber mit materiellen Komponenten verbrauchen diese nur, wenn es ausdrücklich angegeben ist. Ist kein Preis angegeben, gelten die Komponenten als vernachlässigbar und in einem Komponentenbeutel verfügbar.",
            "Einige Zauber erfordern Konzentration, um ihre Magie aufrechtzuerhalten. Wenn du die Konzentration verlierst, endet der Zauber. Du verlierst Konzentration, wenn du einen anderen Konzentrationszauber wirkst oder kampfunfähig wirst. Immer wenn du Schaden erleidest, musst du einen Konstitutionsrettungswurf machen, um die Konzentration zu halten. Der SG beträgt 10 oder die Hälfte des erlittenen Schadens (je nachdem, welcher Wert höher ist)."
        ]
    },
    {
        title: "Sprinten",
        icon: "sprint",
        subtitle: "Zusätzliche Bewegungsrate",
        description: "Erhalte zusätzliche Bewegung in diesem Zug",
        reference: "PHB, S. 192.",
        bullets: [
            "Die Erhöhung entspricht deiner Bewegungsrate, nachdem alle Modifikatoren angewendet wurden."
        ]
    },
    {
        title: "Rückzug",
        icon: "journey",
        subtitle: "Keine Gelegenheitsangriffe provozieren",
        description: "Deine Bewegung provoziert in diesem Zug keine Gelegenheitsangriffe",
        reference: "PHB, S. 192.",
        bullets: [
        ]
    },
    {
        title: "Ausweichen",
        icon: "aura",
        subtitle: "Verteidigung erhöhen",
        description: "Konzentriere dich vollständig darauf, Angriffen auszuweichen",
        reference: "PHB, S. 192.",
        bullets: [
            "Bis zum Beginn deines nächsten Zuges hat jeder Angriffswurf gegen dich Nachteil, solange du den Angreifer sehen kannst, und du hast Vorteil auf Geschicklichkeitsrettungswürfe.",
            "Du verlierst diesen Vorteil, wenn du <i>kampfunfähig</i> wirst oder deine Bewegungsrate auf 0 sinkt."
        ]
    },
    {
        title: "Entkommen",
        icon: "manacles",
        subtitle: "Aus einem Packen befreien",
        description: "Befreie dich aus einem Packen",
        reference: "PHB, S. 195.",
        bullets: [
            "Um einem Packen zu entkommen, musst du einen Stärke- (Athletik) oder Geschicklichkeitswurf (Akrobatik) gegen den Stärkewurf (Athletik) des Packers gewinnen.",
            "Um anderen Zuständen zu entkommen, die dich festhalten (z. B. Fesseln), kann je nach Situation ein Stärke- oder Geschicklichkeitswurf erforderlich sein."
        ]
    },
    {
        title: "Helfen",
        icon: "telepathy",
        subtitle: "Gewähre einem Verbündeten Vorteil",
        description: "Gib einem Verbündeten Vorteil auf einen Fähigkeitswurf oder Angriff",
        reference: "PHB, S. 192.",
        bullets: [
            "Das Ziel erhält Vorteil auf den nächsten Fähigkeitswurf für die Aufgabe, bei der du hilfst.",
            "Alternativ erhält das Ziel Vorteil auf den nächsten Angriffswurf gegen eine Kreatur innerhalb von 1,5 m um dich.",
            "Der Vorteil hält bis zum Beginn deines nächsten Zuges an."
        ]
    },
    {
        title: "Objekt benutzen",
        icon: "snatch",
        subtitle: "Interagieren, besondere Objektfähigkeiten nutzen",
        description: "Interagiere mit einem zweiten Objekt oder nutze besondere Objektfähigkeiten",
        reference: "PHB, S. 193.",
        bullets: [
            "Du kannst während deines Zuges einmal kostenlos mit einem Objekt interagieren (z. B. eine Waffe ziehen oder eine Tür öffnen). Für eine zweite Interaktion verwendest du diese Aktion.",
            "Wenn ein Objekt ausdrücklich eine Aktion zur Nutzung verlangt, führst du ebenfalls diese Aktion aus."
        ]
    },
    {
        title: "Schild anlegen/ablegen",
        icon: "round-shield",
        subtitle: "Schild anlegen oder ablegen",
        description: "Lege einen Schild an oder nimm ihn ab",
        reference: "PHB, S. 144-146.",
        bullets: [
            "Das Anlegen oder Ablegen eines Schildes kostet immer eine Aktion.",
            "Rüstungen an- oder abzulegen dauert mehrere Minuten."
        ]
    },
    {
        title: "Verstecken",
        icon: "hood",
        subtitle: "",
        description: "Versuche dich zu verstecken",
        reference: "PHB, S. 192.",
        bullets: [
            "Du kannst dich nicht vor einer Kreatur verstecken, die dich sehen kann. Du brauchst volle Deckung, starke Verdeckung, Unsichtbarkeit oder eine andere Möglichkeit, die Sicht des Gegners zu blockieren.",
            "Wenn du Lärm machst (z. B. warnst oder eine Vase umstößt), verrätst du deine Position.",
            "Wenn du dich versteckst, mache einen Geschicklichkeitswurf (Heimlichkeit) und notiere das Ergebnis. Bis du entdeckt wirst oder aufhörst, dich zu verstecken, wird das Ergebnis von Weisheitswürfen (Wahrnehmung) aktiver Suchender gekontert.",
            "Eine Kreatur bemerkt dich auch ohne aktive Suche, wenn dein Heimlichkeitswurf nicht höher ist als ihre passive Wahrnehmung.",
            "Außerhalb des Kampfes kannst du Geschicklichkeit (Heimlichkeit) z. B. nutzen, um dich vor Feinden zu verbergen, an Wachen vorbeizuschleichen, unbemerkt zu verschwinden oder dich ungesehen und ungehört an jemanden heranzuschleichen."
        ]
    },
    {
        title: "Suchen",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Widme deine Aufmerksamkeit dem Auffinden von etwas",
        reference: "PHB, S. 193.",
        bullets: [
            "Je nach Art deiner Suche kann der DM einen Weisheitswurf (Wahrnehmung) oder einen Intelligenzwurf (Nachforschungen) verlangen."
        ]
    },
    {
        title: "Bereithalten",
        icon: "stopwatch",
        subtitle: "Auslöser und Aktion festlegen",
        description: "Lege einen Auslöser und eine Reaktion als Antwort fest",
        reference: "PHB, S. 193.",
        bullets: [
            "Zuerst legst du fest, welcher wahrnehmbare Umstand deine Reaktion auslöst.",
            "Dann wählst du die Aktion, die du bei Auslösung ausführst, oder du entscheidest dich, dich dann bis zu deiner Bewegungsrate zu bewegen.",
            "Wenn der Auslöser eintritt, kannst du deine Reaktion direkt danach einsetzen oder den Auslöser ignorieren.",
            "Wenn du einen Zauber bereithältst, wirkst du ihn normal, hältst seine Energie aber zurück und setzt sie als Reaktion frei, wenn der Auslöser eintritt. Der bereitzuhaltende Zauber muss eine Zauberzeit von 1 Aktion haben, und das Halten der Magie erfordert Konzentration."
        ]
    },
    {
        title: "Klassenmerkmal einsetzen",
        icon: "embrassed-energy",
        subtitle: "Einige Merkmale benötigen Aktionen",
        description: "Setze ein Volks- oder Klassenmerkmal ein, das eine Aktion erfordert",
        reference: "Weitere Informationen auf der Klassenseite.",
        bullets: [

        ]
    },
    {
        title: "Improvisieren",
        icon: "juggler",
        subtitle: "Jede Aktion außerhalb dieser Liste",
        description: "Führe eine beliebige vorstellbare Aktion aus",
        reference: "PHB, S. 193.",
        bullets: [
            "Wenn du eine Aktion beschreibst, die in den Regeln nicht genauer erläutert ist, entscheidet der DM, ob sie möglich ist und welcher Wurf dafür gegebenenfalls nötig ist."
        ]
    }
]
