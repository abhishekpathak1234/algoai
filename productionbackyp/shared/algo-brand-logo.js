/**
 * AlgoBridge Design System — Shared Brand Logo Component
 *
 * CANONICAL SOURCE: this file lives in the `algoai` (ledger) repo at
 * /shared/algo-brand-logo.js. Every other Algo product repo keeps its own
 * copy in sync with this one (these are separate static sites/deployments
 * with no shared build step, so a live cross-origin <script src> would make
 * every product's navbar depend on algobridge.cc staying up — copying the
 * file is the more resilient choice for something this core to page render).
 *
 * Measured, exact reference values (from algobridge.cc, the master
 * reference implementation) -- do not estimate, reuse these:
 *
 *   Navbar (mobile, <768px):   logo height 56px  (Tailwind: h-14)
 *   Navbar (desktop, >=768px): logo height 88px  (Tailwind: h-[88px])
 *   Footer (all breakpoints):  logo height 56px  (Tailwind: h-14)
 *   Nav row vertical padding:  4px top/bottom    (py-1)
 *   Nav left padding:          20px mobile / 64px desktop (px-margin-mobile / px-margin-desktop)
 *   Logo hover behaviour:      none (plain link, no scale/opacity change)
 *   Logo internal layout (icon/wordmark/tagline spacing): baked into the
 *     source PNG itself -- this component only controls the logo's overall
 *     box (height, width:auto, alignment). It does not and cannot control
 *     spacing *inside* the artwork, since each product's logo is a single
 *     flat raster image, not separate icon+text DOM nodes.
 *
 * USAGE — every page includes this script, then calls one of the two
 * render functions, passing ONLY the 3 allowed inputs:
 *
 *   <script src="shared/algo-brand-logo.js"></script>
 *   <script>
 *     AlgoBrandLogo.renderNavLogo(document.getElementById('nav-logo-slot'), {
 *       src: 'images/logo.png', href: 'index.html', alt: 'AlgoBridge Ai'
 *     });
 *     AlgoBrandLogo.renderFooterLogo(document.getElementById('footer-logo-slot'), {
 *       src: 'images/logo.png', href: 'index.html', alt: 'AlgoBridge Ai'
 *     });
 *   </script>
 *
 * Everything else (size, spacing, shrink-0 fix, alignment, responsive
 * behaviour) is inherited automatically. No product-specific CSS for logos.
 *
 * KNOWN, DOCUMENTED EXCEPTION: Algo Auto does not use this component. Its
 * navbar logo was explicitly sized larger (up to 160px at 2xl) per an
 * explicit user decision, overriding the "identical everywhere" rule for
 * that one product. Do not silently "fix" it back to match this spec.
 */
(function () {
  'use strict';

  var SPEC = {
    nav: { mobileHeightPx: 56, desktopHeightPx: 88, desktopBreakpoint: 768 },
    footer: { heightPx: 56 }
  };

  function escapeAttr(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  // shrink-0 on both the link and the image is required -- without it,
  // flexbox silently crushes the logo to 0 width at specific viewport
  // widths (discovered on algobridge.cc itself at exactly 768px, and
  // separately on the Algo Auto navbar). This is a load-bearing class,
  // not decoration.
  function renderNavLogo(container, opts) {
    if (!container) { return; }
    var src = escapeAttr(opts.src);
    var href = escapeAttr(opts.href);
    var alt = escapeAttr(opts.alt);
    container.innerHTML =
      '<a href="' + href + '" class="flex items-center no-underline shrink-0">' +
      '<img src="' + src + '" alt="' + alt + '" class="h-14 md:h-[88px] w-auto shrink-0 max-h-full object-contain">' +
      '</a>';
  }

  function renderFooterLogo(container, opts) {
    if (!container) { return; }
    var src = escapeAttr(opts.src);
    var href = escapeAttr(opts.href);
    var alt = escapeAttr(opts.alt);
    container.innerHTML =
      '<a href="' + href + '" class="flex items-center no-underline shrink-0">' +
      '<img src="' + src + '" alt="' + alt + '" class="h-14 w-auto shrink-0 max-h-full object-contain">' +
      '</a>';
  }

  window.AlgoBrandLogo = {
    SPEC: SPEC,
    renderNavLogo: renderNavLogo,
    renderFooterLogo: renderFooterLogo
  };
})();
