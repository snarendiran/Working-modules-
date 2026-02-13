// src/components/commondatepicker.js
import cssUrl from './flatpickr.css?url';
import jsUrl from './flatpickr.js?url';
export function initDatePicker(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  // 1. Load the "Material" Theme for better Tab-Click design
  if (!document.getElementById('flatpickr-modern-theme')) {
    const link = document.createElement('link');
    link.id = 'flatpickr-modern-theme';
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);
  }

  // 2. Load and Initialize
  if (!window.flatpickr) {
    const script = document.createElement('script');
    script.src = jsUrl;
    script.onload = () => setup(element);
    document.head.appendChild(script);
  } else {
    setup(element);
  }

  function setup(el) {
  // 1. Add a specific class to the input for styling
  el.classList.add('flatpickr-with-icon');

  window.flatpickr(el, {
    dateFormat: "d/m/Y",
    disableMobile: true,
    showMonths: 1,
    static: true,
    monthSelectorType: "dropdown",
    yearSelectorType: "dropdown",
    onReady: (selectedDates, dateStr, instance) => {
      instance.calendarContainer.classList.add('premium-calendar');
    },
    onChange: (selectedDates, dateStr) => {
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
}
}