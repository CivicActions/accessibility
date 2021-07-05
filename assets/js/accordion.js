
window.onload = function () {
    const accordionHeaders = document.querySelectorAll('.accordion-heading');

    Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
        let target = accordionHeader.nextElementSibling;

        accordionHeader.onclick = () => {
            let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
            accordionHeader.setAttribute('aria-expanded', !expanded);
            target.hidden = expanded;
        }
        accordionHeader.onkeypress = (e) => {
            
            let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
            if (e.keyCode == 13 || e.keyCode == 32) {
                accordionHeader.setAttribute('aria-expanded', !expanded);
                target.hidden = expanded;
            }

        }

    });
}
 function expandingAccordions () {
     const accordionHeaders = document.querySelectorAll('.accordion-heading');


     Array.prototype.forEach.call(accordionHeaders, accordionHeader => {

         let target = accordionHeader.nextElementSibling;
         let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
         accordionHeader.setAttribute('aria-expanded', !expanded);
         target.hidden = expanded;


     });

 }

