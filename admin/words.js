// Dictionary (systemDictionary is global variable from adapter-settings.js)
systemDictionary = {
    "KEBA KeContact adapter settings": {
        "en": "KEBA KeContact adapter settings",
        "de": "KEBA KeContact Adapter-Einstellungen"
    },
    "KeContact IP Address": {
        "en": "Wallbox IP Address",
        "de": "IP-Adresse der Wallbox"
    },
    "Refresh Interval": {
        "en": "Refresh Interval",
        "de": "Aktualisierungsintervall"
    },
    "secs": {
        "en": "seconds",
        "de": "Sekunden"
    },
    "mA": {
        "en": "mA",
        "de": "mA"
    },
    "watts": {
        "en": "watts",
        "de": "W"
    },
    "rfid": {
        "en": "Whitelist of RFID Cards",
        "de": "Angemeldete RFID Karten"
    },
    "rfidmaster": {
        "en": "RFID Master ID",
        "de": "RFID Master ID"
    },
    "rfiduser1": {
        "en": "RFID User 1 ID",
        "de": "RFID Benutzer 1 ID"
    },
    "rfiduser2": {
        "en": "RFID User 2 ID",
        "de": "RFID Benutzer 2 ID"
    },
    "rfiduser3": {
        "en": "RFID User 3 ID",
        "de": "RFID Benutzer 3 ID"
    },
    "rfiduser4": {
        "en": "RFID User 4 ID",
        "de": "RFID Benutzer 4 ID"
    },
    "prowl": {
        "en": "Prowl Access Data",
        "de": "Prowl Anmeldedaten"
    },
    "prowlapi": {
        "en": "Prowl API Key",
        "de": "Prowl API Schluessel"
    },
    "sessionfile": {
        "en": "Session Reports Backup",
        "de": "Session Reports Backup"
    },
    "sessionfiledir": {
        "en": "Directory for Backup",
        "de": "Backupverzeichnis"
    },
    "only-special-values": {
        "en": "Following values are only needed if wallbox is to be regulated by photovoltaics unit",
        "de": "Folgende Werte werden nur benötigt, wenn die Wallbox abhängig von einer PV-Anlage geregelt werden soll"
    },
    "regard": {
        "en": "Name of regard state",
        "de": "Name des States für Netzbezug"
    },
    "surplus": {
        "en": "Name of surplus state",
        "de": "Name des States für Netzeinspeisung"
    },
    "delta":   {
        "en": "Step size",
        "de": "Schrittweite"
    },
    "underusage":   {
        "en": "Charging under-usage",
        "de": "Ladeunterschreitung"
    },
    "minTime":   {
        "en": "Minimum charging time",
        "de": "Mindestladezeit"
    },
    "powerLimitation": {
        "en": "Following values are only needed if maximum power must be limited",
        "de": "Folgende Werte werden nur benötigt, wenn die Gesamtleistung begrenzt ist"
    },
    "maxPower":   {
        "en": "Maximum power consumption surplus",
        "de": "Maximaler Netzbezug"
    },
    "energyMeter1":   {
        "en": "Name of state for 1st energy meter",
        "de": "Name des States für 1. Energy-Meter"
    },
    "energyMeter2":   {
        "en": "Name of state for 2nd energy meter",
        "de": "Name des States für 2. Energy-Meter"
    },
    "energyMeter3":   {
        "en": "Name of state for 3rd energy meter",
        "de": "Name des States für 3. Energy-Meter"
    },
    "wallboxNotIncluded":   {
        "en": "Power of wallbox NOT included in energy meter(s)",
        "de": "Verbrauch der Wallbox in keinem der Energy-Meter enthalten"
    },
    "tooltip_host": {
        "en": "IP address of KEBA KeContact wallbox",
        "de": "IP-Adresse der KEBA KeContact-Wallbox",
    },
    "tooltip_pollInterval": {
        "en": "Interval in seconds how often the wallbox should be queried for new values (minimum 5 seconds, 0 = no queries, just broadcasts)",
        "de": "Intervall in Sekunden (mind. 5 Sek.) wie oft neue Werte in der Wallbox abgefragt werden sollen (0 = keine Abfrage, nur Broadcast lesen)"
    },
    "tooltip_stateRegard": {
        "en": "Name of state which holds regard value of energy meter. If both regard and surplus are contained in one state, fill in state here only if regard is a positive value and surplus is negative.",
        "de": "Name des States für den Netzbezug des EnergyMeters. Werden Bezug und Einspeisung im selben State gespeichert und der Netzbezug ist positiv und die Einspeisung negativ, dann ist er hier nur anzugeben."
    },
    "tooltip_stateSurplus": {
        "en": "Name of state which holds surplus value of energy meter. If both regard and surplus are contained in one state, fill in state here only if surplus is a positive value and regard is negative.",
        "de": "Name des States für die Netzeinspeisung des EnergyMeters. Werden Bezug und Einspeisung im selben State gespeichert und die Einspeisung ist positiv und der Netzbezug negativ, dann ist er hier nur anzugeben."
    },
    "tooltip_delta": {
        "en": "Controlled process variable by which charging station is regulated",
        "de": "Regelung der Wallbox erfolgt in den angegebenen Schritten"
    },
    "tooltip_underusage": {
        "en": "If photovoltaics has less surplus than needed to minimally charge your EV, charging shall continue unless more than the specified watts are taken from extern",
        "de": "Unterschreitet der Überschuss der PV-Anlage die minimale Ladestärke, soll der Ladevorgang erst bei einem Netzbezug über der angegebenen Wattzahl unterbrochen werden"
    },
    "tooltip_minTime": {
        "en": "If photovoltaics has less surplus than needed to minimally charge your EV, charging shall continue unless the EV was charged for the specified amount of time",
        "de": "Unterschreitet der Überschuss der PV-Anlage die minimale Ladestärke, soll der Ladevorgang erst unterbrochen werden, wenn mindestens die angegebene Zeit geladen wurde"
    },
    "tooltip_maxPower": {
        "en": "You can define a maximum of watts which can must not be reached by all consumers",
        "de": "Mit diesem Wert kann die Leistung der Wallbox so begrenzt werden, dass ein max. Gesamtverbrauch nicht überschritten wird. Dies ist nötig, wenn der Netzbetreiber eine max. Leistung aufgrund begrenzter Kapazität vorgibt."
    },
    "tooltip_stateEnergyMeter1": {
        "en": "Name of state for the 1st energy meter which shall be used to calculate max. power consumption for power limitation",
        "de": "Name des States des 1. Energy-Meters, das für die Berechnung des Gesamtverbrauchs für die Leistungsbegrenzung einbezogen wird."
    },
    "tooltip_stateEnergyMeter2": {
        "en": "Name of state for the 2nd energy meter which shall be used to calculate max. power consumption for power limitation",
        "de": "Name des States des 2. Energy-Meters, das für die Berechnung des Gesamtverbrauchs für die Leistungsbegrenzung einbezogen wird."
    },
    "tooltip_stateEnergyMeter3": {
        "en": "Name of state for the 3rd energy meter which shall be used to calculate max. power consumption for power limitation",
        "de": "Name des States des 3. Energy-Meters, das für die Berechnung des Gesamtverbrauchs für die Leistungsbegrenzung einbezogen wird."
    },
    "tooltip_rfid_master": {
        "en": "ID/Tag of master RFID card (16 digits)",
        "de": "ID/Tag der Master RFID Karte (16 Ziffern)"
    },
    "tooltip_rfid_user1": {
        "en": "ID/Tag of RFID card User1 (16 digits)",
        "de": "ID/Tag der anelernten User1 RFID Karte (16 Ziffern)"
    },
    "tooltip_rfid_user2": {
        "en": "ID/Tag of RFID card User2 (16 digits)",
        "de": "ID/Tag der anelernten User2 RFID Karte (16 Ziffern)"
    },
    "tooltip_rfid_user3": {
        "en": "ID/Tag of RFID card User3 (16 digits)",
        "de": "ID/Tag der anelernten User3 RFID Karte (16 Ziffern)"
    },
    "tooltip_rfid_user4": {
        "en": "ID/Tag of RFID card User4 (16 digits)",
        "de": "ID/Tag der anelernten User4 RFID Karte (16 Ziffern)"
    },
    "tooltip_prowl_apikey": {
        "en": "API Key to access online prawl service",
        "de": "API Key als Zugang zum Online Prawl Service"
    },
    "tooltip_session_filedir": {
        "en": "Directory to store session report log file",
        "de": "Verzeichnis zum Abspeichern der Session Report Logdatei"
    },
};
