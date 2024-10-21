const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeItem = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.removeEventListener('scroll', checkScrollPosition); 
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.onclick = () => openModal();

closeItem.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

const checkScrollPosition = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        openModal();
    }
};

window.addEventListener('scroll', checkScrollPosition);

setTimeout(openModal, 10000);
