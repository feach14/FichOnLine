const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
const offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    return new bootstrap.Offcanvas(offcanvasEl)
})

// Показать off-canvas меню при клике на кнопку
document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
    document.querySelector('.offcanvas-start').classList.add('show');
});

// Скрыть off-canvas меню при клике на кнопку закрытия
document.querySelector('[data-bs-dismiss="offcanvas"]').addEventListener('click', function () {
    document.querySelector('.offcanvas-start').classList.remove('show');
});