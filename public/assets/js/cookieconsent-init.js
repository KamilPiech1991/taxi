import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

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
        analytics: {}
    },
    language: {
        default: "pl",
        autoDetect: "browser",
        translations: {
            pl: {
                consentModal: {
                    title: "Ta strona wykorzystuje pliki cookies!",
                    description: "Używamy plików cookie, aby zapewnić prawidłowe działanie witryny, analizować ruch i wydajność oraz udostępniać funkcje mediów społecznościowych. Kliknij nagłówki różnych kategorii, aby dowiedzieć się więcej i zmienić nasze ustawienia domyślne. ",
                    acceptAllBtn: "Akceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    showPreferencesBtn: "Zarządzaj ustawieniami",
                    footer: "<a href=\"/polityka-prywatnosci/\">Polityka prywatności</a>\n<a href=\"/regulamin-strony/\">Regulamin</a>"
                },
                preferencesModal: {
                    title: "Centrum zarządzania zgodami",
                    acceptAllBtn: "Akceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    savePreferencesBtn: "Zapisz ustawienia",
                    closeIconLabel: "Zamknij okno",
                    serviceCounterLabel: "Usługa|Usługi",
                    sections: [
                        {
                            title: "Wykorzystanie plików cookie",
                            description: "Używamy plików cookie, aby zapewnić prawidłowe działanie witryny, analizować ruch i wydajność oraz udostępniać funkcje mediów społecznościowych. Kliknij nagłówki różnych kategorii, aby dowiedzieć się więcej i zmienić nasze ustawienia domyślne."
                        },
                        {
                            title: "Niezbędne pliki cookie <span class=\"pm__badge\">Zawsze włączone</span>",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Pliki cookie analityczne",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Więcej informacji",
                            description: "W razie pytań dotyczących mojej polityki plików cookie i Twoich wyborów, proszę <a class=\"cc__link\" href=\"#yourdomain.com\">skontaktuj się ze mną</a>."
                        }
                    ]
                }
            }
        }
    }
});