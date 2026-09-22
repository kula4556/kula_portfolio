document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.querySelector('#main-content'); // ໃຫ້ແນ່ໃຈວ່າໃນ index.html ມີ class ນີ້

    // ຟັງຊັນປ່ຽນໜ້າໄປ index.html ແບບມີ Animation ຈາງລົງ
    function showMainpage() {
        if(loadingScreen) {
            loadingScreen.classList.add('slide-up');

            setTimeout(() => {
                document.body.style.overflow = 'auto'; // ເຮັດໃຫ້ Scroll ໄດ້ ຫຼັງຈາກ slide-up ສຳເລັດ
            }, 1200); // ຫຼັງຈາກ slide-up ສຳເລັດ (1 ວິນາທີ) ໃຫ້ເຮັດ Loading Screen ຈາງຫາຍໄປ
        }
    }

    const autoTime = setTimeout(showMainpage, 5000); // ກໍານົດເວລາ 3 ວິນາທີ ໃຫ້ເຮັດ Loading Screen ຈາງຫາຍໄປ

    if(loadingScreen) {
        loadingScreen.addEventListener('click', () => {
            clearTimeout(autoTime); // ຍົກເລີກ autoTime ເວລາອັດຕະໂນມັດ
            showMainpage(); // ສ້າງເຮັດ Loading Screen ຈາງຫາຍໄປ ແລ້ວໃນ 1 ວິນາທີ ໃນ showMainpage()
        });
    }

    // 3. ລະບົບ Scroll (ສຳລັບໜ້າທີ່ມີ scroll)
    window.onscroll = function() {
        var top = window.scrollY; // ແກ້ໄຂຈາກ ScrollY ເປັນ scrollY
        if (mainContent) {
            if (top >= 50) {
                mainContent.classList.add('active');
            } else {
                mainContent.classList.remove('active');
            }
        }
    };
});