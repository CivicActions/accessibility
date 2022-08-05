window.onload = function() {
    const accordionHeaders = document.querySelectorAll('.accordion-heading');

    Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
        let target = accordionHeader.parentElement.nextElementSibling;

        accordionHeader.onclick = () => {
            let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
            accordionHeader.setAttribute('aria-expanded', !expanded);
            target.hidden = expanded;
        }

    });
}

function expandingAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-heading');

    Array.prototype.forEach.call(accordionHeaders, accordionHeader => {

        let target = accordionHeader.parentElement.nextElementSibling;
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
        accordionHeader.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;

    });

}