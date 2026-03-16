/**
 * Core Application Logic
 * Encapsulates UI interactions and intersection observer logic
 * to ensure high-performance rendering.
 */
(() => {
  'use strict';

  /**
   * Updates the footer copyright year dynamically.
   */
  const updateYear = () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  /**
   * Initializes the print dialog button logic.
   */
  const initPrintAction = () => {
    const printBtn = document.querySelector('[data-action="print"]');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        // Adding a slight delay to ensure UI threads settle before triggering print modal
        requestAnimationFrame(() => window.print());
      });
    }
  };

  /**
   * Initializes the Intersection Observer for entrance animations.
   * Utilizes an efficient threshold and unmonitors elements once revealed.
   */
  const initScrollAnimations = () => {
    const elementsToAnimate = document.querySelectorAll('[data-animate], .stagger-children');
    
    // Fallback for browsers that do not support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      elementsToAnimate.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before it fully enters viewport
      threshold: 0.15 // 15% of the element must be visible
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add visible class to trigger CSS transition
          entry.target.classList.add('is-visible');
          
          // Stop observing to save memory once animation has run
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each targeted element
    elementsToAnimate.forEach(el => observer.observe(el));
  };

  /**
   * Bootstrap the application when the DOM is ready.
   */
  const bootstrap = () => {
    updateYear();
    initPrintAction();
    initScrollAnimations();
  };

  // Run bootstrap. If readyState is interactive/complete, run immediately.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
