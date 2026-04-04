document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelector('#social-details');
    // Jika kamu pakai ID, pastikan di HTML ada id="social-details"
    // Kalau tidak pakai ID, ganti jadi document.querySelector('details');

    if (!details) return;

    const summary = details.querySelector('summary');
    const content = details.querySelector('.details-content');

    summary.addEventListener('click', (e) => {
        // Mencegah aksi default browser
        e.preventDefault();

        if (details.open) {
            // ANIMASI MENUTUP
            content.style.gridTemplateRows = "0fr";
            content.style.opacity = "0";

            // Tunggu durasi transisi (0.4s) selesai baru hilangkan atribut 'open'
            setTimeout(() => {
                details.removeAttribute('open');
            }, 400); 
        } else {
            // ANIMASI MEMBUKA
            // Pasang atribut 'open' dulu agar container-nya ada (tapi masih 0fr)
            details.setAttribute('open', '');
            
            // Pakai requestAnimationFrame agar browser sempat mencatat perubahan status
            requestAnimationFrame(() => {
                content.style.gridTemplateRows = "1fr";
                content.style.opacity = "1";
            });
        }
    });
});
