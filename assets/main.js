// JS principal
// - Año dinámico del footer
// - Acción de imprimir desacoplada del HTML

(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const printBtn = document.querySelector('[data-action="print"]');
  if (printBtn) {
    printBtn.addEventListener('click', function(){
      window.print();
    });
  }
})();
