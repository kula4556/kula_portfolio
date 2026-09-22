function createTypeWriter(elemenId, words, speed = 100){
let i = 0, j = 0, isDeleting = false;
let timer = null;
let stopped = false

function typeWriter() {
  if (stopped) return;

  const current = words[i];
  const el = document.getElementById(elemenId);
  if (!el) return;

  const chars = Array.from(current);

    if (!isDeleting) {
      el.textContent = current.substring(0, j++);
      if (j > current.length) { isDeleting = true; setTimeout(typeWriter, 1500); return; }
    } else {
      el.textContent = current.substring(0, j--);
      if (j === 0) { isDeleting = false; i = (i + 1) % words.length; }
    }
    timer = setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
  }

  function stop(){
    stopped = true
    clearTimeout(timer)
    i = 0;
    j = 0;
    isDeleting = false;
  }

  typeWriter();
  return{stop};
}

// translate 

let tw1, tw2;
let startTimer = null;

function startTypewriters(lang) {
    if (tw1) {tw1.stop(); tw1 = null; }
    if (tw2) {tw2.stop(); tw2 = null; }
    clearTimeout(startTimer)

    const el1 = document.getElementById("typewriter1");
    const el2 = document.getElementById("typewriter2");
    if (el1) el1.textContent = "";
    if (el2) el2.textContent = "";

    startTimer = setTimeout(() => {
      document.getElementById("typewriter1").textContent="";
      document.getElementById("typewriter2").textContent="";

      if (lang ==="en") {
          tw1 = createTypeWriter("typewriter1", ["Kula.", "A Frontend Developer.", " An AI Enthusiast."], 100);
          tw2 = createTypeWriter("typewriter2", ["Coding isn't just about instructing computers; it's about finding creative solutions to solve the world's problems. For me, coding isn't just a skill — it's a tool for building the future."], 55);
      } else if(lang ==="th") {
          tw1 = createTypeWriter("typewriter1", ["Kula.", "นักพัฒนาส่วนหน้าเว็บไซต์", " ผู้ที่ชื่นชอบปัญญาประดิษฐ์."], 100);
          tw2 = createTypeWriter("typewriter2", ["Coding ไม่ได้เป็นเพียงการสั่งให้คอมพิวเตอร์ทำงาน; แต่มันคือการหาวิธีแก้ปัญหาโลกด้วยความคิดสร้างสรรค์. สำหรับผม, การเขียนโค้ดไม่ใช่แค่ทักษะ—แต่มันคือเครื่องมือในการสร้างอนาคต."], 55);
      } else if(lang ==="la") {
          tw1 = createTypeWriter("typewriter1", ["Kula.", "ນັກພັດທະນາສ່ວນໜ້າເວັບໄຊ", " ຜູ້ທີ່ມັກຮັກປັນຍາປະດິດ."], 100);
          tw2 = createTypeWriter("typewriter2", ["Coding ບໍ່ແມ່ນພຽງແຕ່ການສັ່ງຄອມພິວເຕີ; ມັນແມ່ນການຊອກຫາວິທີສ້າງສັນເພື່ອແກ້ໄຂບັນຫາຂອງໂລກ. ສໍາລັບຂ້ອຍ, ການເຂົ້າລະຫັດບໍ່ແມ່ນພຽງແຕ່ທັກສະ—ມັນແມ່ນເຄື່ອງມືໃນການສ້າງອະນາຄົດ."], 55);
      }
    }, 200)
}

startTypewriters("en");


