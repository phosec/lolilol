  window.overlayInit = function () {
    overlayWidget.init({
      appId : '314d4fef-e568-454a-ae06-43e3bece12a6',
      trackingSiteName: "overlay demo page",
      trackingSiteType: "overlay",
      trackingSiteSection: "web overlay",
      genomeId: '45366f4e-420c-4386-ac26-24b3d25f2a3b',
      container : '#overlay-widget',
      locale : 'fr-FR',
      loginType : 'modal',
      loginType : 'twitch',
      height : 75,
      mobileHeight : 100,
      themeColor : '#399D47',
      zIndex: 1000,
      zIndexExpanded: 1050,
      customerSupportLinks: [
        {
          link: "https://store.ubisoft.com/my-account",
          locs: {
            "ar-AE": "MY ACCOUNT - ar-AE",
            "zh-CN": "MY ACCOUNT - zh-CN",
            "zh-TW": "MY ACCOUNT - zh-TW",
            "zh-HK": "MY ACCOUNT - zh-HK", //if not set defaults to zh-TW
            "cs-CZ": "MY ACCOUNT - cs-CZ",
            "da-DK": "MY ACCOUNT - da-DK",
            "nl-NL": "MY ACCOUNT - nl-NL",
            "en-GB": "MY ACCOUNT - en-GB",
            "en-CA": "MY ACCOUNT - en-CA",
            "en-US": "MY ACCOUNT - en-US",
            "fi-FI": "MY ACCOUNT - fi-FI",
            "fr-FR": "MY ACCOUNT - fr-FR",
            "fr-CA": "MY ACCOUNT - fr-CA",
            "de-DE": "MY ACCOUNT - de-DE",
            "hu-HU": "MY ACCOUNT - hu-HU",
            "it-IT": "MY ACCOUNT - it-IT",
            "ja-JP": "MY ACCOUNT - ja-JP",
            "ko-KR": "MY ACCOUNT - ko-KR",
            "nb-NO": "MY ACCOUNT - nb-NO",
            "pl-PL": "MY ACCOUNT - pl-PL",
            "pt-PT": "MY ACCOUNT - pt-PT",
            "pt-BR": "MY ACCOUNT - pt-BR",
            "ru-RU": "MY ACCOUNT - ru-RU",
            "es-ES": "MY ACCOUNT - es-ES",
            "es-MX": "MY ACCOUNT - es-MX",
            "sv-SE": "MY ACCOUNT - sv-SE",
            "th-TH": "MY ACCOUNT - th-TH",
            "tr-TR": "MY ACCOUNT - tr-TR",
            "uk-UA": "MY ACCOUNT - uk-UA",
          },
        },
        {
          link: "https://store.ubisoft.com/us/wallet-management",
          action: "REDIRECT",
          locs: {
            "ar-AE": "CREDIT MY WALLET - ar-AE",
            "zh-CN": "CREDIT MY WALLET - zh-CN",
            "zh-TW": "CREDIT MY WALLET - zh-TW",
            "zh-HK": "CREDIT MY WALLET - zh-HK", //if not set defaults to zh-TW
            "cs-CZ": "CREDIT MY WALLET - cs-CZ",
            "da-DK": "CREDIT MY WALLET - da-DK",
            "nl-NL": "CREDIT MY WALLET - nl-NL",
            "en-GB": "CREDIT MY WALLET - en-GB",
            "en-CA": "CREDIT MY WALLET - en-CA",
            "en-US": "CREDIT MY WALLET - en-US",
            "fi-FI": "CREDIT MY WALLET - fi-FI",
            "fr-FR": "CREDIT MY WALLET - fr-FR",
            "fr-CA": "CREDIT MY WALLET - fr-CA",
            "de-DE": "CREDIT MY WALLET - de-DE",
            "hu-HU": "CREDIT MY WALLET - hu-HU",
            "it-IT": "CREDIT MY WALLET - it-IT",
            "ja-JP": "CREDIT MY WALLET - ja-JP",
            "ko-KR": "CREDIT MY WALLET - ko-KR",
            "nb-NO": "CREDIT MY WALLET - nb-NO",
            "pl-PL": "CREDIT MY WALLET - pl-PL",
            "pt-PT": "CREDIT MY WALLET - pt-PT",
            "pt-BR": "CREDIT MY WALLET - pt-BR",
            "ru-RU": "CREDIT MY WALLET - ru-RU",
            "es-ES": "CREDIT MY WALLET - es-ES",
            "es-MX": "CREDIT MY WALLET - es-MX",
            "sv-SE": "CREDIT MY WALLET - sv-SE",
            "th-TH": "CREDIT MY WALLET - th-TH",
            "tr-TR": "CREDIT MY WALLET - tr-TR",
            "uk-UA": "CREDIT MY WALLET - uk-UA",
          },
        },
        {
          link: "https://store.ubisoft.com/my-account/#account-order-history",
          action: "OPEN_NEW_TAB",
          locs: {
            "ar-AE": "MY ORDERS - ar-AE",
            "zh-CN": "MY ORDERS - zh-CN",
            "zh-TW": "MY ORDERS - zh-TW",
            "zh-HK": "MY ORDERS - zh-HK", //if not set defaults to zh-TW
            "cs-CZ": "MY ORDERS - cs-CZ",
            "da-DK": "MY ORDERS - da-DK",
            "nl-NL": "MY ORDERS - nl-NL",
            "en-GB": "MY ORDERS - en-GB",
            "en-CA": "MY ORDERS - en-CA",
            "en-US": "MY ORDERS - en-US",
            "fi-FI": "MY ORDERS - fi-FI",
            "fr-FR": "MY ORDERS - fr-FR",
            "fr-CA": "MY ORDERS - fr-CA",
            "de-DE": "MY ORDERS - de-DE",
            "hu-HU": "MY ORDERS - hu-HU",
            "it-IT": "MY ORDERS - it-IT",
            "ja-JP": "MY ORDERS - ja-JP",
            "ko-KR": "MY ORDERS - ko-KR",
            "nb-NO": "MY ORDERS - nb-NO",
            "pl-PL": "MY ORDERS - pl-PL",
            "pt-PT": "MY ORDERS - pt-PT",
            "pt-BR": "MY ORDERS - pt-BR",
            "ru-RU": "MY ORDERS - ru-RU",
            "es-ES": "MY ORDERS - es-ES",
            "es-MX": "MY ORDERS - es-MX",
            "sv-SE": "MY ORDERS - sv-SE",
            "th-TH": "MY ORDERS - th-TH",
            "tr-TR": "MY ORDERS - tr-TR",
            "uk-UA": "MY ORDERS - uk-UA",
          },
        },
      darkBackground : false,
      installmentId: 6a073c4d-42fa-4a3b-992f-22f712333715
      overwrittenLinks: {
        'account': 'custom link',
        'support': 'custom link',
        'store': {
          link: "https://store.ubisoft.com/ie/account-connection",
          action: "REDIRECT",
          locs: {
            "ar-AE": "Store overwriten - ar-AE",
            "zh-CN": "Store overwriten - zh-CN",
            "zh-TW": "Store overwriten - zh-TW",
            "zh-HK": "Store overwriten - zh-HK", //if not set defaults to zh-TW
            "cs-CZ": "Store overwriten - cs-CZ",
            "da-DK": "Store overwriten - da-DK",
            "nl-NL": "Store overwriten - nl-NL",
            "en-GB": "Store overwriten - en-GB",
            "en-CA": "Store overwriten - en-CA",
            "en-US": "Store overwriten - en-US",
            "fi-FI": "Store overwriten - fi-FI",
            "fr-FR": "Store overwriten - fr-FR",
            "fr-CA": "Store overwriten - fr-CA",
            "de-DE": "Store overwriten - de-DE",
            "hu-HU": "Store overwriten - hu-HU",
            "it-IT": "Store overwriten - it-IT",
            "ja-JP": "Store overwriten - ja-JP",
            "ko-KR": "Store overwriten - ko-KR",
            "nb-NO": "Store overwriten - nb-NO",
            "pl-PL": "Store overwriten - pl-PL",
            "pt-PT": "Store overwriten - pt-PT",
            "pt-BR": "Store overwriten - pt-BR",
            "ru-RU": "Store overwriten - ru-RU",
            "es-ES": "Store overwriten - es-ES",
            "es-MX": "Store overwriten - es-MX",
            "sv-SE": "Store overwriten - sv-SE",
            "th-TH": "Store overwriten - th-TH",
            "tr-TR": "Store overwriten - tr-TR",
            "uk-UA": "Store overwriten - uk-UA",
          }
        }
      }
        showSignInText: "DEFAULT", "AVATAR_SIGN_IN", "SIGN_IN", false, true
        isInDesktopResize: true
        thirdPartyCookiesSupport: false
        enableDebug: true
        customStoreBuyButton: true
        disableScrollMargin: true
      onConnect : function (action, payload) {
        alert(action + ' triggered');
        alert(JSON.stringify(payload)');
      },
      onShowHide : function (isVisible) {
        console.log('mini widget visible:' + isVisible);
      },
      onShowHideScrollOnMobile : function (isVisible) {
            if (isVisible){
                  document.body.style.overflowY = 'hidden';
            } else {
                  document.body.style.overflowY = 'auto';
            }
      },
      onChangeLocale : function (locale) {
        alert(locale);
      },
      onChangeTrackingSiteSection : function (trackingSiteSection) {
        alert(trackingSiteSection);
      },
      collapse : function (collapseCallback) {
        collapseCallback();
      },
      expandFriends : function (expandFriendsCallback) {
        expandFriendsCallback();
      },
      expandPlayerCard : function (expandPlayerCardCallback) {
        expandPlayerCardCallback();
      }
      expandNotifications : function (expandNotificationsCallback) {
        expandNotificationsCallback();
      },
      onFriendAction : function (pid, state) {
       alert(pid);
       alert(state);
      }
    });
  };

var a=document.createElement("script");a.src="https://overlay.ubisoft.com/overlay-connect-integration/widget.js",a.async=!0,document.body.appendChild(a);

