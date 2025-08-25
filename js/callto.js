document.addEventListener('DOMContentLoaded', () => {
            const ctaSection = document.querySelector('.landing');
            const ctaElement = document.querySelector('.call-to-action');

            if (!ctaSection || !ctaElement) {
                return;
            }
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0
            };

            const observerCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        ctaElement.classList.add('move');
                    } else {
                        ctaElement.classList.remove('move');
                    }
                });
            };

            const observer = new IntersectionObserver(observerCallback, options);
            observer.observe(ctaSection);
        });