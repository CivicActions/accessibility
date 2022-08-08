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

function expandingAccordions(e) {
    const accordionHeaders = document.querySelectorAll('.accordion-heading');
    let isOpen = e.dataset.open;
    if (isOpen === 'false') {
        e.dataset.open = 'true';
        e.textContent = 'Collapse All';
    } else {
        e.dataset.open = 'false';
        e.textContent = 'Expand All';
    }

    Array.prototype.forEach.call(accordionHeaders, accordionHeader => {

        let target = accordionHeader.parentElement.nextElementSibling;
        if (isOpen === 'false') {
            accordionHeader.setAttribute('aria-expanded', 'true');
            target.hidden = false;
        } else {
            accordionHeader.setAttribute('aria-expanded', 'false');
            target.hidden = true;
        }

    });

}
