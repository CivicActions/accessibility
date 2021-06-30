
window.onload = function () {
    const accordionHeaders = document.querySelectorAll('.accordion-heading');
    // const expand = document.querySelector('.expand-all-accordion .expand');
    // const close = document.querySelector('.close-all-accordion .close');
    console.log(accordionHeaders);
    Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
        let target = accordionHeader.nextElementSibling;

        accordionHeader.onclick = () => {
            let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
            accordionHeader.setAttribute('aria-expanded', !expanded);
            target.hidden = expanded;
        }

    });
}
 function expandingAccordions () {
     const accordionHeaders = document.querySelectorAll('.accordion-heading');
     const expand = document.getElementsByClassName('.expand-all-accordion .expand');

     Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
         console.log(accordionHeader);
         let target = accordionHeader.nextElementSibling;
         let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
         accordionHeader.setAttribute('aria-expanded', !expanded);
         target.hidden = expanded;
         // accordionHeader.setAttribute('aria-expanded', 'true');

     });

 }

