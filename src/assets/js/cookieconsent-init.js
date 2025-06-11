document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {
            onAccept: () => {
                loadGA4();
            }
        },
        marketing: {}
    },
    language: {
        default: "pl",
        autoDetect: "browser",
        translations: {
            pl: {
                consentModal: {
                    title: "Ta strona używa plików cookies",
                    description: "Używamy plików cookies do personalizowania treści i reklam, udostępniania funkcji mediów społecznościowych i analizowania ruchu na stronie.",
                    acceptAllBtn: "Akceptuj",
                    showPreferencesBtn: "Ustawienia"
                },
                preferencesModal: {
                    title: "Ustawienia plików cookies",
                    acceptAllBtn: "Akceptuj",
                    acceptNecessaryBtn: "Odrzuć",
                    savePreferencesBtn: "Zapisz ustawienia",
                    closeIconLabel: "Zamknij",
                    serviceCounterLabel: "Usługa|Usługi",
                    sections: [
                        {
                            title: "Wykorzystanie plików cookie",
                            description: "Ponieważ szanujemy Twoje prawo do prywatności, możesz nie zezwalać na niektóre rodzaje plików cookie. Kliknij nagłówki różnych kategorii, aby dowiedzieć się więcej i zmienić domyślne ustawienia."
                        },
                        {
                            title: "Niezbędne pliki cookie<span class=\"pm__badge\">Zawsze aktywne</span>",
                            description: "Te pliki cookies są niezbędne do działania witryny i nie można ich wyłączyć w naszych systemach...",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Funkcjonalne pliki cookie",
                            description: "Funkcjonalne pliki cookie pomagają realizować określone funkcje...",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analityczne pliki cookie",
                            description: "Te pliki cookie mogą być ustawiane za pośrednictwem naszej witryny przez naszych partnerów reklamowych...",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Reklamowe pliki cookie",
                            description: "Pliki cookie dotyczące wydajności służą do zrozumienia i analizy...",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Więcej informacji",
                            description: "W przypadku jakichkolwiek pytań związanych z polityką dotyczącą plików cookie, prosimy o <a class=\"cc__link\" href=\"/kontakt\">kontakt</a>."
                        }
                    ]
                }
            }
        }
    }
});

// 🎯 Funkcja do dynamicznego ładowania GA4 po zgodzie
function loadGA4() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0M1SQGCPE3';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-0M1SQGCPE3');
    };
}
