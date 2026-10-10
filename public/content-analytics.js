(function () {
  'use strict';
  var key = 'anothercyprus_analytics_consent';
  function choice() {
    try { var saved = localStorage.getItem(key); if (saved) return saved; } catch (e) {}
    try { return sessionStorage.getItem(key); } catch (e) { return null; }
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  function consent(value, mode) {
    window.gtag('consent', mode, { analytics_storage: value === 'accepted' ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  }
  consent('declined', 'default');
  if (choice() === 'accepted') consent('accepted', 'update');
  window.gtag('js', new Date());
  window.gtag('config', 'G-3WVGML1VRS', { anonymize_ip: true });
  var loader = document.createElement('script');
  loader.async = true;
  loader.src = 'https://www.googletagmanager.com/gtag/js?id=G-3WVGML1VRS';
  document.head.appendChild(loader);
  var ru = document.documentElement.lang === 'ru';
  if (!choice()) {
    var box = document.createElement('aside');
    box.id = 'analytics-consent';
    box.style.cssText = 'position:fixed;right:0;bottom:0;left:0;z-index:20;background:#132A4B;color:#fff;border-top:1px solid #c8a36b;padding:16px;font:13px/1.5 Arial,sans-serif';
    box.innerHTML = '<div style="max-width:1160px;margin:auto;display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span style="flex:1;min-width:240px">' + (ru ? 'До выбора Google получает технические сигналы без аналитических cookies. ' : 'Before you choose, Google receives technical signals without analytics cookies. ') + '<a style="color:#e0b569" href="' + (ru ? '/ru/privacy/' : '/privacy/') + '">' + (ru ? 'Конфиденциальность' : 'Privacy policy') + '</a></span><button data-choice="declined" style="padding:9px 14px;background:transparent;color:#fff;border:1px solid #ffffff66;cursor:pointer">' + (ru ? 'Отклонить' : 'Decline') + '</button><button data-choice="accepted" style="padding:9px 14px;background:#c8a36b;color:#132A4B;border:0;font-weight:700;cursor:pointer">' + (ru ? 'Разрешить аналитику' : 'Allow analytics') + '</button></div>';
    document.body.appendChild(box);
    box.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-choice]');
      if (!button) return;
      var value = button.dataset.choice;
      try { localStorage.setItem(key, value); } catch (e) { try { sessionStorage.setItem(key, value); } catch (e) {} }
      consent(value, 'update');
      box.remove();
    });
  }
  document.addEventListener('click', function (event) {
    if (choice() !== 'accepted') return;
    var link = event.target.closest('a[href]');
    if (!link) return;
    var url = new URL(link.href, location.href);
    var channel = url.protocol === 'mailto:' ? 'email' : url.protocol === 'tel:' ? 'phone' : url.hostname === 'wa.me' ? 'whatsapp' : '';
    var pageType = location.pathname.includes('/guides/') ? 'guide' : location.pathname.includes('/markets/') ? 'market' : 'area';
    if (channel) window.gtag('event', 'contact_click', { contact_channel: channel, project_id: 'content', page_type: pageType });
    var property = url.origin === location.origin && url.pathname.match(/^\/(?:ru\/)?properties\/([^/]+)\//);
    if (property) window.gtag('event', 'property_link_click', { project_id: property[1], page_type: pageType, content_path: location.pathname });
  });
})();
