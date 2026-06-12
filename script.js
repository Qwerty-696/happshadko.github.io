// 4 DIL DIKŞONARY (SÖZLÜK) ULGAMY
const languages = {
    tk: {
        timerLabel: "Täze kodlara galdy:",
        tab1: "Shadowsocks", tab2: "HAP VPN", tab3: "Igrawoy", tab4: "Barada",
        badge1: "Ultra Tizlik", badge2: "Durnukly №1", badge3: "Pes Ping",
        lblLocation1: "Ýerleşýän ýeri", valLocation1: "Germaniýa (Frankfurt)",
        lblSpeed1: "Tizlik çägi", valSpeed1: "Çäksiz (1 Gbps)",
        lblStatus1: "Uzel Statusy", valStatus1: "Aktiwen (Online)",
        lblType2: "Sazlama görnüşi", lblStable2: "Durnuklylyk", lblLocation2: "Geçirijilik", valLocation2: "Niderlandlar Node",
        lblFor3: "Oýunlar üçin", lblPing3: "Ortaça Ping", valLocation3: "Singapur",
        devTitle: "Programmist & Kiber-howpsuzlyk Boss",
        aboutApp: "Programma Ady", aboutVer: "Wersiýa", aboutConcept: "Reňk Konsepti", aboutChan: "Kanal / Taslamalar",
        copyright: "© 2026 Bayry. Ähli hukuklar goralan.",
        btnCopy: "KODY NUSGALA", toast: "Kod üstünlikli göçürildi!"
    },
    en: {
        timerLabel: "Next codes in:",
        tab1: "Shadowsocks", tab2: "HAP VPN", tab3: "Gaming", tab4: "About",
        badge1: "Ultra Speed", badge2: "Stable No1", badge3: "Low Ping",
        lblLocation1: "Location", valLocation1: "Germany (Frankfurt)",
        lblSpeed1: "Speed Limit", valSpeed1: "Unlimited (1 Gbps)",
        lblStatus1: "Node Status", valStatus1: "Active (Online)",
        lblType2: "Config Type", lblStable2: "Stability", lblLocation2: "Gateway", valLocation2: "Netherlands Node",
        lblFor3: "For Gaming", lblPing3: "Average Ping", valLocation3: "Singapore Node",
        devTitle: "Developer & Cyber Security Enthusiast",
        aboutApp: "App Name", aboutVer: "Version", aboutConcept: "UI Concept", aboutChan: "Channel / Projects",
        copyright: "© 2026 Bayry. All rights reserved.",
        btnCopy: "COPY CONFIG KEY", toast: "Config successfully copied!"
    },
    ru: {
        timerLabel: "До новых кодов:",
        tab1: "Shadowsocks", tab2: "HAP VPN", tab3: "Игровой", tab4: "О нас",
        badge1: "Ультра Скорость", badge2: "Стабильный №1", badge3: "Низкий Пинг",
        lblLocation1: "Локация", valLocation1: "Германия (Франкфурт)",
        lblSpeed1: "Лимит Скорости", valSpeed1: "Безлимит (1 Гбпс)",
        lblStatus1: "Статус Узла", valStatus1: "Активен (Онлайн)",
        lblType2: "Тип Конфига", lblStable2: "Стабильность", lblLocation2: "Шлюз", valLocation2: "Нидерланды Node",
        lblFor3: "Для Игр", lblPing3: "Средний Пинг", valLocation3: "Сингапур Node",
        devTitle: "Разработчик и Специалист по Кибербезопасности",
        aboutApp: "Имя Приложения", aboutVer: "Версия", aboutConcept: "Концепт Дизайна", aboutChan: "Канал / Проекты",
        copyright: "© 2026 Bayry. Все права защищены.",
        btnCopy: "СКОПИРОВАТЬ КОД", toast: "Конфиг успешно скопирован!"
    },
    tr: {
        timerLabel: "Yeni kodlara kalan:",
        tab1: "Shadowsocks", tab2: "HAP VPN", tab3: "Oyuncu", tab4: "Hakkında",
        badge1: "Ultra Hız", badge2: "Stabil No1", badge3: "Düşük Ping",
        lblLocation1: "Lokasyon", valLocation1: "Almanya (Frankfurt)",
        lblSpeed1: "Hız Sınırı", valSpeed1: "Sınırsız (1 Gbps)",
        lblStatus1: "Düğüm Durumu", valStatus1: "Aktif (Çevrimiçi)",
        lblType2: "Yapılandırma", lblStable2: "Kararlılık", lblLocation2: "Ağ Geçidi", valLocation2: "Hollanda Node",
        lblFor3: "Oyunlar İçin", lblPing3: "Ortalama Ping", valLocation3: "Singapur",
        devTitle: "Geliştirici & Siber Güvenlik Uzmanı",
        aboutApp: "Uygulama Adı", aboutVer: "Sürüm", aboutConcept: "Tasarım Konsepti", aboutChan: "Kanal / Projeler",
        copyright: "© 2026 Bayry. Tüm hakları saklıdır.",
        btnCopy: "KODU KOPYALA", toast: "Kod başarıyla kopyalandı!"
    }
};

function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    const data = languages[lang];

    document.getElementById('timerLabel').innerText = data.timerLabel;
    document.getElementById('tab1').innerText = data.tab1;
    document.getElementById('tab2').innerText = data.tab2;
    document.getElementById('tab3').innerText = data.tab3;
    document.getElementById('tab4').innerText = data.tab4;
    
    document.getElementById('badge1').innerText = data.badge1;
    document.getElementById('badge2').innerText = data.badge2;
    document.getElementById('badge3').innerText = data.badge3;

    document.getElementById('lblLocation1').innerText = data.lblLocation1;
    document.getElementById('valLocation1').innerText = data.valLocation1;
    document.getElementById('lblSpeed1').innerText = data.lblSpeed1;
    document.getElementById('valSpeed1').innerText = data.valSpeed1;
    document.getElementById('lblStatus1').innerText = data.lblStatus1;
    document.getElementById('valStatus1').innerText = data.valStatus1;

    document.getElementById('lblType2').innerText = data.lblType2;
    document.getElementById('lblStable2').innerText = data.lblStable2;
    document.getElementById('lblLocation2').innerText = data.lblLocation2;
    document.getElementById('valLocation2').innerText = data.valLocation2;

    document.getElementById('lblFor3').innerText = data.lblFor3;
    document.getElementById('lblPing3').innerText = data.lblPing3;
    document.getElementById('valLocation3').innerText = data.valLocation3;

    document.getElementById('devTitle').innerText = data.devTitle;
    document.getElementById('aboutApp').innerText = data.aboutApp;
    document.getElementById('aboutVer').innerText = data.aboutVer;
    document.getElementById('aboutConcept').innerText = data.aboutConcept;
    document.getElementById('aboutChan').innerText = data.aboutChan;
    document.getElementById('copyright').innerText = data.copyright;

    const copyButtons = document.querySelectorAll('.ios-btn');
    copyButtons.forEach(btn => btn.innerText = data.btnCopy);
}

// MULTI-TAB GEÇIŞI
function switchTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    const buttons = document.querySelectorAll('.segment-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// DYNAMIC THEME MODE (🌙 / ☀️)
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const themeBtn = document.getElementById('themeBtn');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerText = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerText = '☀️';
    }
}

// AWTONOM KIBER-WAGT HASAPLAÝJY (COUNTDOWN TIMER)
let targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 12); 

function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').innerText = "00:00:00";
        return;
    }

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const format = (num) => num < 10 ? '0' + num : num;
    document.getElementById('countdown').innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}
setInterval(updateTimer, 1000);

// KODY NUSGALAMAK WE DIŇE ŞOL DILDÄKI TOASTY ÇYKARMAK
function copyKey(text) {
    navigator.clipboard.writeText(text).then(() => {
        const lang = document.getElementById('langSelect').value;
        document.getElementById('toastText').innerText = languages[lang].toast;
        
        const toast = document.getElementById('iosToast');
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 2300);
    });
}
