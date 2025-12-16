document.addEventListener('DOMContentLoaded', function () {
    var certModal = document.getElementById('certModal');
    certModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var certSrc = button.getAttribute('data-cert');
        var certImage = document.getElementById('certImage');
        certImage.src = certSrc;
    });
});
