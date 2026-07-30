const see = document.querySelector(".see");
const mark = document.querySelector(".mark");
const overlay = document.querySelector(".overlay");

see.onclick = () => {
    overlay.classList.add("active");

    see.style.display = "none";
    mark.style.display = "block";
};

mark.onclick = () => {
    overlay.classList.remove("active");

    mark.style.display = "none";
    see.style.display = "block";
};
window.onload = function(){
    mark.style.display =' none';
}

const lookOut = document.getElementById("look-out");

const restartbtn = document.getElementById("restartBtn");






lookOut.addEventListener("click", function () {

    resultOverlay.classList.remove("active");

});





document.querySelectorAll(".overlay .dropdown > a").forEach(item=>{

    item.addEventListener("click",(e)=>{

        e.preventDefault();

        item.parentElement.classList.toggle("open");

    });

});



// الواجهه
const texts = [

"لا تجعل الألم يحد من حركتك أو يؤثر على حياتك اليومية. سواء كانت إصابة رياضية أو آلام مفاصل أو مشاكل بالعمود الفقري، ستجد الرعاية المناسبة لحالتك.",

"ابدأ الآن بالتقييم الذكي المجاني. أجب عن مجموعة أسئلة بسيطة، وسيصل تقرير مبدئي للطبيب قبل التواصل معك، لتبدأ رحلتك العلاجية بخطوات أوضح وأسرع."

];

const element = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentText = texts[textIndex];

    if(!deleting){

        element.textContent =
        currentText.substring(0,charIndex++);

        if(charIndex > currentText.length){

            deleting = true;

            setTimeout(typeEffect,2500);

            return;
        }

    }else{

        element.textContent =
        currentText.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            textIndex =
            (textIndex + 1) % texts.length;
        }

    }

    setTimeout(typeEffect,
    deleting ? 20 : 40);
}

typeEffect();

// vedio
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

cards.forEach(card=>{
    observer.observe(card);
});




// عن المركز
const aboutSection =
document.querySelector(".about-center");

const typingTitle =
document.querySelector(".typing-title");

const typingParagraph =
document.querySelector(".typing-paragraph");
const titleText =
"تعافٍ يبدأ بتشخيص دقيق وخطة علاج تناسب حالتك";

const paragraphText =
"يحرص د. أسيد ياسر على تقديم برامج علاج طبيعي وتأهيل حركي مبنية على تقييم دقيق لكل حالة، مع متابعة مستمرة لمساعدتك على التخلص من الألم واستعادة الحركة بأفضل النتائج. ابدأ بالتقييم الذكي المجاني ليتم تجهيز حالتك قبل التواصل، مما يختصر الوقت ويساعد على وضع خطة علاج مناسبة من أول جلسة.";
function typeText(element,text,speed){

    let i = 0;

    element.textContent = "";

    const typing = setInterval(()=>{

        element.textContent += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);

        }

    },speed);

}

const aboutObserver =
new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting && !aboutStarted){

        aboutStarted = true;

        typeText(
            typingTitle,
            titleText,
            50
        );

        setTimeout(()=>{

            typeText(
                typingParagraph,
                paragraphText,
                15
            );

        },2000);

    }

},{
    threshold:.3
});

aboutObserver.observe(aboutSection);






const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

const counterObserver =
new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting && !counterStarted){

        counterStarted = true;

        counters.forEach(counter=>{

            const target =
            +counter.dataset.target;

            let current = 0;

            const increment =
            Math.ceil(target / 100);

            function updateCounter(){

                current += increment;

                if(current >= target){

                    counter.textContent =
                    target + "+";

                    return;
                }

                counter.textContent =
                current;

                requestAnimationFrame(
                    updateCounter
                );

            }

            updateCounter();

        });

    }

},{
    threshold:.3
});

counterObserver.observe(
document.querySelector(".about-stats")
);
// review
const REV = document.querySelectorAll(".review-slide");
const REVDOTS = document.querySelector(".review-dots");

let RI = 0;

// create dots
REV.forEach((_, i) => {

    const d = document.createElement("span");
    d.classList.add("dot");

    if(i === 0) d.classList.add("active");

    d.addEventListener("click", () => {
        RI = i;
        showReview(RI);
    });

    REVDOTS.appendChild(d);
});

const dots = document.querySelectorAll(".review-dots .dot");

function showReview(i){

    REV.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    REV[i].classList.add("active");
    dots[i].classList.add("active");
}

setInterval(() => {
    RI = (RI + 1) % REV.length;
    showReview(RI);
}, 5000);
// // doctor
// const doctorSlides = document.querySelectorAll(".doctor-slide");
// const doctorDotsContainer = document.querySelector(".doctor-dots");

// let doctorCurrent = 0;

// // إنشاء النقط
// doctorSlides.forEach((_, index) => {

//     const dot = document.createElement("span");

//     dot.classList.add("doctor-dot");

//     if(index === 0){
//         dot.classList.add("active");
//     }

//     dot.addEventListener("click", () => {
//         doctorCurrent = index;
//         updateDoctors();
//     });

//     doctorDotsContainer.appendChild(dot);

// });

// const doctorDots = document.querySelectorAll(".doctor-dot");

// function updateDoctors(){

//     doctorSlides.forEach(slide => {

//         slide.classList.remove(
//             "active",
//             "prev",
//             "next"
//         );

//     });

//     doctorDots.forEach(dot => {
//         dot.classList.remove("active");
//     });

//     const prev =
//     (doctorCurrent - 1 + doctorSlides.length)
//     % doctorSlides.length;

//     const next =
//     (doctorCurrent + 1)
//     % doctorSlides.length;

//     doctorSlides[doctorCurrent].classList.add("active");
//     doctorSlides[prev].classList.add("prev");
//     doctorSlides[next].classList.add("next");

//     doctorDots[doctorCurrent].classList.add("active");

// }

// updateDoctors();

// Auto Slide

let doctorAuto = setInterval(() => {

    doctorCurrent++;

    if(doctorCurrent >= doctorSlides.length){
        doctorCurrent = 0;
    }

    updateDoctors();

}, 4000);

// حجز

const openBooking = document.getElementById("openBooking");
const modal = document.getElementById("bookingModal");
const closeBooking = document.getElementById("closeBooking");

// فتح المودال
openBooking.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");
});

// قفل بالمفتاح X
closeBooking.addEventListener("click", () => {
  modal.classList.remove("active");
});

// قفل لما تدوس برا الكارت
modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
});



// submit
document.querySelector(".booking-form").addEventListener("submit", (e)=>{
  e.preventDefault();
  alert("تم الحجز بنجاح ✅");
  modal.classList.remove("active");
});
// موعد
const scheduleModal = document.getElementById("scheduleModal");
const openSchedule = document.getElementById("selectedTime");
const closeSchedule = document.getElementById("closeSchedule");

// open
openSchedule.addEventListener("click", (e) => {
  e.preventDefault();
  scheduleModal.classList.add("active");
});

// close
closeSchedule.addEventListener("click", () => {
  scheduleModal.classList.remove("active");
});

// close when click outside card
scheduleModal.addEventListener("click", (e) => {
  if(e.target === scheduleModal){
    scheduleModal.classList.remove("active");
  }
});
// price
const priceModal = document.getElementById("priceModal");
const closePrice = document.getElementById("closePrice");
const openPrice = document.getElementById("openPrice");

const priceItems = document.querySelectorAll(".price-item");
const priceDetails = document.getElementById("priceDetails");
const priceCategories = document.getElementById("priceCategories");
const priceContent = document.getElementById("priceContent");
const backBtn = document.getElementById("backToCategories");

// OPEN
if(openPrice){
  openPrice.addEventListener("click", (e)=>{
    e.preventDefault();
    priceModal.classList.add("active");
  });
}

// CLOSE
if(closePrice){
  closePrice.addEventListener("click", ()=>{
    priceModal.classList.remove("active");
  });
}

// BACK
if(backBtn){
  backBtn.addEventListener("click", ()=>{
    priceCategories.style.display = "grid";
    priceDetails.classList.remove("active");
    priceContent.innerHTML = "";
  });
}

// ITEMS
priceItems.forEach(item => {

  item.addEventListener("click", () => {

    const type = item.dataset.type;

    priceCategories.style.display = "none";
    priceDetails.classList.add("active");

    let html = "";

    if(type === "spine"){

      html = `
        <div class="price-box">كشف العمود الفقري — يبدأ من 250 ريال</div>
        <div class="price-box">متابعة العمود الفقري — تبدأ من 200 ريال</div>
      `;

    }

    if(type === "joints"){

      html = `
        <div class="price-box">كشف المفاصل — يبدأ من 250 ريال</div>
        <div class="price-box">حقن المفاصل — تبدأ من 700 ريال</div>
        <div class="price-box">متابعة علاج المفاصل — تبدأ من 200 ريال</div>
      `;

    }

    if(type === "sports"){

      html = `
        <div class="price-box">كشف إصابات الملاعب — يبدأ من 300 ريال</div>
        <div class="price-box">برنامج التأهيل الرياضي — حسب الحالة</div>
      `;

    }

    if(type === "fractures"){

      html = `
        <div class="price-box">علاج الكسور والجبائر — حسب نوع الإصابة</div>
        <div class="price-box">متابعة بعد الجبس — تبدأ من 200 ريال</div>
      `;

    }
    if(type === "cupping"){

  html = `
    <div class="price-box">جلسة الحجامة العلاجية — تبدأ من 150 ريال</div>
    <div class="price-box">حجامة مع تقييم الحالة — تبدأ من 200 ريال</div>
  `;

}

if(type === "manual"){

  html = `
    <div class="price-box">جلسة العلاج اليدوي (Manual Therapy) — تبدأ من 250 ريال</div>
    <div class="price-box">العلاج اليدوي المتقدم — حسب الحالة</div>
  `;

}

if(type === "physio"){

  html = `
    <div class="price-box">جلسة علاج طبيعي — تبدأ من 200 ريال</div>
    <div class="price-box">برنامج جلسات علاج طبيعي — حسب الخطة العلاجية</div>
  `;

}
if(type === "online"){

  html = `
    <div class="price-box">استشارة أونلاين بالفيديو — تبدأ من 150 ريال</div>
    <div class="price-box">استشارة عبر الواتساب أو الهاتف — تبدأ من 100 ريال</div>
    <div class="price-box">متابعة بعد الاستشارة — حسب الحالة</div>
  `;

}

if(type === "plan"){

  html = `
    <div class="price-box">وضع خطة علاجية مخصصة — تبدأ من 250 ريال</div>
    <div class="price-box">مراجعة وتحديث الخطة العلاجية — تبدأ من 150 ريال</div>
    <div class="price-box">خطة تأهيل شاملة مع متابعة دورية — حسب الحالة</div>
  `;

}
    priceContent.innerHTML = html;

  });

});
// // الفروع
// const openWa = document.getElementById("openWhatsApp");
// const waModal = document.getElementById("waModal");
// const closeWa = document.getElementById("closeWa");

// openWa.addEventListener("click", ()=>{
//   waModal.classList.add("active");
// });

// closeWa.addEventListener("click", ()=>{
//   waModal.classList.remove("active");
// });

// // غلق لما تضغط بره
// waModal.addEventListener("click", (e)=>{
//   if(e.target === waModal){
//     waModal.classList.remove("active");
//   }
// });














const BAA = document.querySelectorAll(".baa-slide");
const BAADOTS = document.querySelectorAll(".baa-dot");

let BA = 0;

function showBA(i){

    if(BAA.length === 0 || BAADOTS.length === 0) return;

    BAA.forEach(s=>s.classList.remove("active"));
    BAADOTS.forEach(d=>d.classList.remove("active"));

    BAA[i].classList.add("active");
    BAADOTS[i].classList.add("active");

}

if(BAA.length > 0){

    setInterval(()=>{

        BA = (BA + 1) % BAA.length;

        showBA(BA);

    },5000);

}

BAADOTS.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        BA = i;

        showBA(BA);

    });

});





const resultOverlay = document.getElementById("resultOverlay");

const confidencePercent = document.getElementById("confidencePercent");

const confidenceFill = document.querySelector(".confidence-fill");

const exitResult = document.querySelector(".restart-btn");

const bookAppointment = document.querySelector(".book-btn");

const revealElements = document.querySelectorAll(".reveal");

/* Reveal Observer (ممنوع يتكرر في أي مكان تاني بنفس الاسم) */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

/* Observe all elements */
revealElements.forEach(el => {
    revealObserver.observe(el);
});






const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(el => {
            if(el !== item){
                el.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});
const openBranches = document.getElementById("openBranches");
const branchesPopup = document.getElementById("branchesPopup");
const closeBranches = document.getElementById("closeBranches");

openBranches.addEventListener("click", (e) => {
    e.preventDefault();
    branchesPopup.classList.add("active");
});

closeBranches.addEventListener("click", () => {
    branchesPopup.classList.remove("active");
});

branchesPopup.addEventListener("click", (e) => {
    if (e.target === branchesPopup) {
        branchesPopup.classList.remove("active");
    }
});











let n = document.querySelectorAll(".n");

let run = (el) => {
  let t = +el.dataset.t;
  let c = 0;

  let x = setInterval(() => {
    c += Math.ceil(t / 60);

    if (c >= t) {
      c = t;
      clearInterval(x);
    }

    el.textContent = c + (t === 95 ? "%" : "+");

  }, 20);
};

let obs = new IntersectionObserver((e)=>{
  e.forEach(i=>{
    if(i.isIntersecting){
      run(i.target);
      obs.unobserve(i.target);
    }
  });
});

n.forEach(i=>obs.observe(i));










const openAssessment = document.getElementById("openAssessment");
const assessmentOverlay = document.getElementById("assessmentOverlay");
const assessmentClose = document.querySelector(".assessment-close");

// فتح النافذة
openAssessment.addEventListener("click", function (e) {

    e.preventDefault();

    assessmentOverlay.classList.add("active");

});

// غلق بزر ×
assessmentClose.addEventListener("click", function () {

    assessmentOverlay.classList.remove("active");

});

// غلق عند الضغط خارج النافذة
assessmentOverlay.addEventListener("click", function (e) {

    if (e.target === assessmentOverlay) {

        assessmentOverlay.classList.remove("active");

    }

});

const startAssessment = document.querySelector(".assessment-start");



const loadingScreen = document.getElementById("loadingScreen");

const questionOverlay = document.getElementById("questionOverlay");

const progressCircle = loadingScreen.querySelector(".progress");

const progressText = document.getElementById("progressText");

const loadingTitle = document.getElementById("loadingTitle");

const circumference = 345;


startAssessment.addEventListener("click", function () {

    // إغلاق نافذة الترحيب
    assessmentOverlay.classList.remove("active");

    // إظهار شاشة التحميل
    loadingScreen.classList.add("active");

    // بدء التحميل
    startLoading();

});




function startLoading() {

    let percent = 0;

    progressCircle.style.strokeDashoffset = circumference;

    progressText.textContent = "0%";

    const timer = setInterval(function () {

        percent++;

        progressText.textContent = percent + "%";

        progressCircle.style.strokeDashoffset =
            circumference - (circumference * percent / 100);

        if (percent <= 20) {

            loadingTitle.textContent = "جارٍ تهيئة النظام...";

        }

        else if (percent <= 40) {

            loadingTitle.textContent = "تحليل البيانات الأولية...";

        }

        else if (percent <= 60) {

            loadingTitle.textContent = "تحديد مسار الأسئلة...";

        }

        else if (percent <= 80) {

            loadingTitle.textContent = "تجهيز الفحص الذكي...";

        }

        else if (percent < 100) {

            loadingTitle.textContent = "الانتهاء من التجهيز...";

        }

        else {

            loadingTitle.textContent = "تم تجهيز الأسئلة";

        }

        if (percent >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                // إخفاء شاشة التحميل
                loadingScreen.classList.remove("active");

                // إظهار نافذة الأسئلة
                questionOverlay.classList.add("active");

                // هنحط هنا بعدين أول سؤال
                // renderQuestion();

            }, 500);

        }

    }, 35);

}









const questionTitle = document.getElementById("questionTitle");
const questionDescription = document.getElementById("questionDescription");
const progressFill = document.getElementById("progressFill");
const stepText = document.getElementById("stepText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
























function startLoading() {

    let percent = 0;

    progressCircle.style.strokeDashoffset = circumference;

    const timer = setInterval(function () {

        percent++;

        progressText.textContent = percent + "%";

        progressCircle.style.strokeDashoffset =
            circumference - (circumference * percent / 100);

        if (percent <= 20) {

            loadingTitle.textContent = "جاري تجهيز النظام...";

        }

        else if (percent <= 40) {

            loadingTitle.textContent = "فحص البيانات الأولية...";

        }

        else if (percent <= 60) {

            loadingTitle.textContent = "تجهيز نموذج التقييم...";

        }

        else if (percent <= 80) {

            loadingTitle.textContent = "إعداد الأسئلة المناسبة...";

        }

        else if (percent < 100) {

            loadingTitle.textContent = "الانتهاء من التجهيز...";

        }

        else {

            loadingTitle.textContent = "تم تجهيز الأسئلة";

        }

        if (percent >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                loadingScreen.classList.remove("active");









    // إظهار نافذة الأسئلة
    questionOverlay.classList.add("active");
    currentPath = "start";
currentQuestionIndex = 0;

renderQuestion();

            }, 500);

        }

    }, 40);

}






let currentPath = "";
let currentQuestionIndex = 0;
let selectedAnswer = null;


nextBtn.addEventListener("click", function () {

    if (!selectedAnswer) return;

    const currentQuestion = questions[currentPath][currentQuestionIndex];

    // حفظ الإجابة
    state.answers.push({

        id: currentQuestion.id,

        answer: selectedAnswer.text

    });

    // حفظ بيانات مهمة
    if (currentPath === "age") {

        state.ageGroup = selectedAnswer.text;

    }

    if (currentPath === "start") {

        state.selectedProblem = selectedAnswer.text;

    }

    if (currentPath === "xray") {

        state.xrayAnswer = selectedAnswer.value;

    }

    // إضافة النقاط
    if (selectedAnswer.score) {

        for (let key in selectedAnswer.score) {

            state.score[key] += selectedAnswer.score[key];

        }

    }

    console.log(state.score);

    // لو ده آخر سؤال
    if (selectedAnswer.next === "result") {

        questionOverlay.classList.remove("active");

        startResultLoading();

        return;

    }

    // الانتقال للسؤال التالي
    if (selectedAnswer.next) {

        currentPath = selectedAnswer.next;

        currentQuestionIndex = 0;

        renderQuestion();

    }

});






const backbtn = document.getElementById("backbtn");
backbtn.addEventListener("click", function () {

    // لو احنا فى أول سؤال خالص
    if (currentPath === "start") {

        questionOverlay.classList.remove("active");

        return;

    }

    // لو فى أول سؤال داخل المسار
    if (currentQuestionIndex === 0) {

        currentPath = "start";

        currentQuestionIndex = 0;

        renderQuestion();

        return;

    }

    // يرجع سؤال واحد للخلف
    currentQuestionIndex--;

    renderQuestion();

});









const questionClose = document.querySelector(".question-close");


questionClose.addEventListener("click", function () {

    questionOverlay.classList.remove("active");

    // إعادة ضبط الفحص
    currentPath = "";
    currentQuestionIndex = 0;
    selectedAnswer = null;
    nextBtn.disabled = true;

});







const resultLoadingScreen = document.getElementById("resultLoadingScreen");

const resultProgress = resultLoadingScreen.querySelector(".progress");

const resultProgressText = document.getElementById("resultProgressText");

const resultLoadingTitle = document.getElementById("resultLoadingTitle");

const resultCircumference = 345;
function startResultLoading() {

    let percent = 0;

    resultProgress.style.strokeDashoffset = resultCircumference;

    resultProgressText.textContent = "0%";

    resultLoadingScreen.classList.add("active");

    const timer = setInterval(function () {

        percent++;

        resultProgressText.textContent = percent + "%";

        resultProgress.style.strokeDashoffset =
            resultCircumference -
            (resultCircumference * percent / 100);

        if (percent <= 15) {

            resultLoadingTitle.textContent =
                "جارٍ تحليل إجاباتك...";

        }

        else if (percent <= 35) {

            resultLoadingTitle.textContent =
                "مقارنة الأعراض بالحالات المشابهة...";

        }

        else if (percent <= 55) {

            resultLoadingTitle.textContent =
                "تحديد العلاج الأكثر احتمالًا...";

        }

        else if (percent <= 75) {

            resultLoadingTitle.textContent =
                "حساب نسبة توافق كل علاج...";

        }

        else if (percent <= 95) {

            resultLoadingTitle.textContent =
                "إعداد التقرير النهائي...";

        }

        else {

            resultLoadingTitle.textContent =
                "تم الانتهاء من التحليل";

        }

        if (percent >= 100) {
        console.log("وصلنا 100");
    clearInterval(timer);

    setTimeout(function () {

        // إخفاء شاشة التحليل
        resultLoadingScreen.classList.remove("active");

// تجهيز البيانات
renderResult();

// إظهار نافذة النتائج
resultOverlay.classList.add("active");

    }, 600);



        }

    }, 90);

}







const questions = {
    start: [

{

    id: "age",

    title: "ما هي فئتك العمرية؟",

    description: "يساعد العمر في تحسين دقة التقييم الأولي.",

    progress: 10,

    answers: [

        {

            text: "أقل من 20 سنة",

            icon: "fa-child",

            next: "activity",

            score: {

                sensitivity: 10,
                filling: 8,
                gum: 5

            }

        },

        {

            text: "من 20 إلى 40 سنة",

            icon: "fa-user",

            next: "activity",

            score: {

                rootCanal: 12,
                sensitivity: 10,
                filling: 10

            }

        },

        {

            text: "من 41 إلى 60 سنة",

            icon: "fa-user-tie",

            next: "activity",

            score: {

                gum: 15,
                rootCanal: 15,
                crown: 12

            }

        },

        {

            text: "أكثر من 60 سنة",

            icon: "fa-person-cane",

            next: "activity",

            score: {

                implant: 20,
                gum: 20,
                crown: 15

            }

        }

    ]

}

],



activity:[

{

    id:"activity",

    title:"ما طبيعة نشاطك اليومي؟",

    description:"طبيعة النشاط تساعد في فهم الأسباب المحتملة للمشكلة.",

    progress:20,

    answers:[

        {

            text:"جلوس معظم اليوم",

            icon:"fa-chair",

            next:"sport",

            score:{

                sensitivity:18,
                filling:12,
                gum:8

            }

        },

        {

            text:"وقوف لفترات طويلة",

            icon:"fa-person-standing",

            next:"sport",

            score:{

                gum:18,
                crown:10,
                rootCanal:8

            }

        },

        {

            text:"مجهود بدني",

            icon:"fa-dumbbell",

            next:"sport",

            score:{

                implant:15,
                rootCanal:15,
                sensitivity:10

            }

        },

        {

            text:"حركة قليلة أو خمول",

            icon:"fa-couch",

            next:"sport",

            score:{

                gum:15,
                sensitivity:15,
                filling:12

            }

        }

    ]

}

],
    // العمر
    
    
    sport:[

{

id:"sport",

title:"هل تمارس أي نشاط رياضي؟",

description:"يساعدنا النشاط الرياضي على فهم طبيعة الإجهاد الواقع على الجسم.",

progress:30,

answers:[

{

text:"بانتظام (3–5 مرات أسبوعيًا)",

icon:"fa-dumbbell",

next:"problem",

score:{

implant:12,
rootCanal:18,
sensitivity:15,
gum:8

}

},

{

text:"أحيانًا",

icon:"fa-person-running",

next:"problem",

score:{

rootCanal:12,
gum:10,
sensitivity:12,
filling:8

}

},

{

text:"نادرًا",

icon:"fa-person-walking",

next:"problem",

score:{

gum:15,
filling:12,
sensitivity:10,
crown:8

}

},

{

text:"لا أمارس",

icon:"fa-couch",

next:"problem",

score:{

gum:18,
filling:15,
sensitivity:12,
crown:10

}

}

]

}

],







problem:[

{

id:"problem",

title:"أين تقع المشكلة أو الإصابة؟",

description:"حدد المنطقة الأساسية التي تعاني منها.",

progress:40,

answers:[

{

text:"الرقبة",

icon:"fa-user",

next:"neck",

score:{

rootCanal:20,
sensitivity:15,
gum:10

}

},

{

text:"الكتف",

icon:"fa-hand",

next:"shoulder",

score:{

implant:15,
rootCanal:18,
crown:10

}

},

{

text:"أسفل الظهر",

icon:"fa-person",

next:"back",

score:{

gum:20,
sensitivity:18,
rootCanal:12

}

},

{

text:"الركبة",

icon:"fa-person-walking",

next:"knee",

score:{

implant:20,
gum:15,
rootCanal:10

}

},

{

text:"الكاحل",

icon:"fa-shoe-prints",

next:"ankle",

score:{

implant:18,
rootCanal:15,
sensitivity:10

}

},

{

text:"منطقة أخرى",

icon:"fa-location-dot",

next:"other",

score:{

gum:10,
implant:10,
rootCanal:10,
sensitivity:10

}

}

]

}

],

    // =======================
    // مسار ألم الأسنان
    // =======================

   neck:[

{

id:"neck",

title:"ما الذي تشعر به في الرقبة؟",

description:"اختر العرض الأقرب لما تعاني منه.",

progress:50,

answers:[

{

text:"ألم عند تحريك الرقبة",

icon:"fa-arrows-left-right",

next:"duration",

score:{

rootCanal:20,
gum:10,
sensitivity:10

}

},

{

text:"تيبس وصعوبة في الحركة",

icon:"fa-user-lock",

next:"duration",

score:{

gum:20,
sensitivity:15

}

},

{

text:"تنميل يمتد إلى الذراع",

icon:"fa-hand",

next:"duration",

score:{

implant:20,
rootCanal:15

}

},

{

text:"صداع مرتبط بألم الرقبة",

icon:"fa-head-side-virus",

next:"duration",

score:{

gum:15,
rootCanal:10

}

}

]

}

],

    // =======================
    // كسر او فقدان 
    // =======================

shoulder:[

{

id:"shoulder",

title:"ما المشكلة الأساسية في الكتف؟",

description:"اختر الحالة الأقرب.",

progress:50,

answers:[

{

text:"ألم عند رفع الذراع",

icon:"fa-hand",

next:"duration",

score:{

rootCanal:20,
implant:10

}

},

{

text:"ضعف في قوة الذراع",

icon:"fa-dumbbell",

next:"duration",

score:{

implant:20,
gum:10

}

},

{

text:"صعوبة في تحريك الكتف",

icon:"fa-person-walking",

next:"duration",

score:{

gum:20,
sensitivity:10

}

},

{

text:"ألم أثناء النوم على الكتف",

icon:"fa-bed",

next:"duration",

score:{

sensitivity:20,
rootCanal:10

}

}

]

}

],

    // =======================
    // مسار السن المكسور
    // =======================

  back:[

{

id:"back",

title:"ما الذي يصف ألم أسفل الظهر؟",

description:"اختر أقرب وصف.",

progress:50,

answers:[

{

text:"ألم بعد الجلوس لفترة",

icon:"fa-chair",

next:"duration",

score:{

gum:20,
sensitivity:15

}

},

{

text:"ألم مع الانحناء",

icon:"fa-person-bending",

next:"duration",

score:{

rootCanal:20,
implant:10

}

},

{

text:"الألم يمتد إلى الساق",

icon:"fa-person-walking",

next:"duration",

score:{

implant:25,
rootCanal:15

}

},

{

text:"تيبس عند الاستيقاظ",

icon:"fa-bed",

next:"duration",

score:{

gum:20,
sensitivity:10

}

}

]

}

],


// =======================
// مسار الالتهابات والمفاصل
// =======================


knee:[

{

id:"knee",

title:"ما المشكلة الأساسية في الركبة؟",

description:"اختر الحالة الأقرب.",

progress:50,

answers:[

{

text:"ألم عند صعود أو نزول السلالم",

icon:"fa-stairs",

next:"duration",

score:{

gum:20,
implant:10

}

},

{

text:"تورم في الركبة",

icon:"fa-circle-exclamation",

next:"duration",

score:{

implant:20,
rootCanal:10

}

},

{

text:"صوت طقطقة مع الحركة",

icon:"fa-bone",

next:"duration",

score:{

gum:15,
sensitivity:15

}

},

{

text:"عدم ثبات أو إحساس بأن الركبة تخون",

icon:"fa-person-falling",

next:"duration",

score:{

implant:25,
rootCanal:10

}

}

]

}

],
    // =======================
    // مسار الحساسية
    // =======================

   ankle:[

{

id:"ankle",

title:"ما المشكلة الأساسية في الكاحل؟",

description:"اختر الحالة الأقرب.",

progress:50,

answers:[

{

text:"التواء أو إصابة حديثة",

icon:"fa-person-falling",

next:"duration",

score:{

implant:25

}

},

{

text:"تورم حول الكاحل",

icon:"fa-circle-exclamation",

next:"duration",

score:{

gum:20

}

},

{

text:"ألم أثناء المشي",

icon:"fa-person-walking",

next:"duration",

score:{

rootCanal:20

}

},

{

text:"عدم ثبات الكاحل",

icon:"fa-shoe-prints",

next:"duration",

score:{

implant:20,
sensitivity:10

}

}

]

}

],



other:[

{

id:"other",

title:"ما المنطقة التي تعاني منها؟",

description:"اختر المنطقة الأقرب.",

progress:50,

answers:[

{

text:"المرفق",

icon:"fa-hand",

next:"duration",

score:{

gum:15

}

},

{

text:"المعصم",

icon:"fa-hand-back-fist",

next:"duration",

score:{

rootCanal:15

}

},

{

text:"الفخذ",

icon:"fa-person-walking",

next:"duration",

score:{

implant:15

}

},

{

text:"القدم",

icon:"fa-shoe-prints",

next:"duration",

score:{

implant:15

}

},

{

text:"منطقة أخرى",

icon:"fa-location-dot",

next:"duration",

score:{

gum:10,
implant:10

}

}

]

}

],



duration:[

{

id:"duration",

title:"منذ متى بدأت المشكلة؟",

description:"حدد المدة التقريبية لظهور المشكلة.",

progress:60,

answers:[

{

text:"أقل من أسبوعين",

icon:"fa-calendar-day",

next:"cause",

score:{

sensitivity:15,
filling:10,
gum:5

}

},

{

text:"من أسبوعين إلى 3 أشهر",

icon:"fa-calendar-week",

next:"cause",

score:{

rootCanal:15,
gum:15,
crown:10

}

},

{

text:"أكثر من 3 أشهر",

icon:"fa-calendar",

next:"cause",

score:{

implant:20,
gum:20,
rootCanal:15

}

}

]

}

],







cause:[

{

id:"cause",

title:"كيف بدأت المشكلة؟",

description:"اختر السبب الأقرب لبداية الأعراض.",

progress:70,

answers:[

{

text:"إصابة أو حادث",

icon:"fa-person-falling",

next:"painType",

score:{

implant:20,
rootCanal:15,
crown:10

}

},

{

text:"ظهرت تدريجيًا",

icon:"fa-arrow-trend-up",

next:"painType",

score:{

gum:20,
sensitivity:15,
filling:10

}

},

{

text:"مرتبطة بحركة معينة أو وضعية جلوس",

icon:"fa-chair",

next:"painType",

score:{

sensitivity:20,
gum:15,
rootCanal:10

}

}

]

}

],







painType:[

{

id:"painType",

title:"كيف تصف طبيعة الألم؟",

description:"اختر الوصف الأقرب لما تشعر به.",

progress:80,

answers:[

{

text:"ألم حاد",

icon:"fa-bolt",

next:"painLevel",

score:{

implant:20,
rootCanal:15

}

},

{

text:"ألم مستمر",

icon:"fa-heart-pulse",

next:"painLevel",

score:{

gum:20,
rootCanal:15

}

},

{

text:"تنميل أو وخز",

icon:"fa-hand-dots",

next:"painLevel",

score:{

implant:20,
sensitivity:20

}

},

{

text:"ضعف أو عدم ثبات",

icon:"fa-person-falling",

next:"painLevel",

score:{

implant:25,
gum:10

}

}

]

}

],







painLevel:[

{

id:"painLevel",

title:"ما شدة الألم؟",

description:"اختر الدرجة التي تصف ألمك الحالي.",

progress:90,

answers:[

{

text:"0 - لا يوجد ألم",

icon:"fa-face-smile",

next:"painIncrease",

score:{

filling:5

}

},

{

text:"1 - 3 ألم بسيط",

icon:"fa-face-smile-beam",

next:"painIncrease",

score:{

filling:10,
sensitivity:10

}

},

{

text:"4 - 6 ألم متوسط",

icon:"fa-face-meh",

next:"painIncrease",

score:{

gum:15,
rootCanal:15

}

},

{

text:"7 - 8 ألم شديد",

icon:"fa-face-frown",

next:"painIncrease",

score:{

implant:20,
rootCanal:20

}

},

{

text:"9 - 10 ألم شديد جدًا",

icon:"fa-face-dizzy",

next:"painIncrease",

score:{

implant:25,
rootCanal:25,
gum:15

}

}

]

}

],





painIncrease:[

{

id:"painIncrease",

title:"ما الذي يزيد الألم؟",

description:"اختر أكثر شيء يزيد الألم لديك.",

progress:92,

answers:[

{

text:"الجلوس",

icon:"fa-chair",

next:"dailyLife",

score:{

sensitivity:20,
gum:10,
filling:5

}

},

{

text:"الوقوف",

icon:"fa-person",

next:"dailyLife",

score:{

gum:15,
implant:10

}

},

{

text:"الانحناء",

icon:"fa-arrow-down",

next:"dailyLife",

score:{

rootCanal:20,
implant:10

}

},

{

text:"صعود السلالم",

icon:"fa-stairs",

next:"dailyLife",

score:{

gum:20,
implant:15

}

},

{

text:"النوم على الجانب",

icon:"fa-bed",

next:"dailyLife",

score:{

gum:15,
sensitivity:15

}

},

{

text:"أخرى",

icon:"fa-circle-question",

next:"dailyLife",

score:{

filling:10

}

}

]

}

],







dailyLife:[

{

id:"dailyLife",

title:"هل يؤثر الألم على حياتك اليومية؟",

description:"اختر الإجابة الأقرب.",

progress:94,

answers:[

{

text:"نعم بشكل كبير",

icon:"fa-person-circle-exclamation",

next:"redFlags",

score:{

implant:25,
rootCanal:20,
gum:15

}

},

{

text:"نعم بشكل بسيط",

icon:"fa-person-circle-check",

next:"redFlags",

score:{

gum:15,
sensitivity:10

}

},

{

text:"لا",

icon:"fa-face-smile",

next:"redFlags",

score:{

filling:5

}

}

]

}

],







redFlags:[

{

id:"redFlags",

title:"هل تعاني من أي من الأعراض التالية؟",

description:"إذا لم يكن أي منها موجودًا اختر (لا يوجد).",

progress:96,

answers:[

{

text:"فقدان وزن غير مبرر",

icon:"fa-weight-scale",

next:"previousTreatment",

score:{

implant:30,
rootCanal:20

}

},

{

text:"ضعف عضلي شديد أو سقوط القدم",

icon:"fa-person-falling",

next:"previousTreatment",

score:{

implant:35,
gum:20

}

},

{

text:"فقدان التحكم في البول أو البراز",

icon:"fa-triangle-exclamation",

next:"previousTreatment",

score:{

implant:40,
rootCanal:30

}

},

{

text:"ارتفاع في درجة الحرارة مع الألم",

icon:"fa-temperature-full",

next:"previousTreatment",

score:{

gum:30,
rootCanal:20

}

},

{

text:"لا يوجد",

icon:"fa-circle-check",

next:"previousTreatment",

score:{

filling:5

}

}

]

}

],







previousTreatment:[

{

id:"previousTreatment",

title:"هل سبق أن تلقيت علاجًا لهذه المشكلة؟",

description:"اختر الإجابة المناسبة.",

progress:98,

answers:[

{

text:"نعم",

icon:"fa-user-doctor",

next:"medicalImages",

score:{

gum:10,
implant:10

}

},

{

text:"لا",

icon:"fa-circle-xmark",

next:"medicalImages",

score:{

sensitivity:10,
filling:10

}

}

]

}

],







// medicalImages:[

// {

// id:"medicalImages",

// title:"هل أجريت أي أشعة أو رنين مغناطيسي أو فحوصات لهذه المشكلة؟",

// description:"إذا كانت لديك فحوصات سيساعد ذلك الطبيب في تقييم حالتك.",

// progress:100,

// answers:[

// {

// text:"نعم",

// icon:"fa-file-medical",

// next:"xray",

// score:{

// implant:15,
// gum:10

// }

// },

// {

// text:"لا",

// icon:"fa-file-circle-xmark",

// next:"xray",

// score:{

// sensitivity:5

// }

// }

// ]

// }

// ],








medicalImages:[

{

id:"medicalImages",

title:"هل أجريت أي أشعة أو فحوصات لهذه المشكلة؟",

description:"اختر نوع الفحص الذي أجريته.",

progress:100,

answers:[

{

text:"رنين مغناطيسي (MRI)",

icon:"fa-brain",

next:"result",

score:{

implant:20,
gum:15,
rootCanal:10

}

},

{

text:"أشعة سينية (X-Ray)",

icon:"fa-x-ray",

next:"result",

score:{

implant:15,
gum:10

}

},

{

text:"أشعة مقطعية (CT)",

icon:"fa-laptop-medical",

next:"result",

score:{

implant:20,
rootCanal:15

}

},

{

text:"سونار (Ultrasound)",

icon:"fa-wave-square",

next:"result",

score:{

gum:15,
sensitivity:10

}

},

{

text:"تقرير طبي فقط",

icon:"fa-file-medical",

next:"result",

score:{

gum:10

}

},

{

text:"لم أقم بأي فحوصات",

icon:"fa-circle-xmark",

next:"result",

score:{

filling:5

}

}

]

}

],




};




// function loadQuestion(){

//     // هات السؤال الحالي
//     const question = questions[currentPath][currentQuestionIndex];

//     // غير العنوان
//     questionTitle.textContent = question.title;

//     // غير الوصف
//     questionDescription.textContent = question.description;

//     // حدث شريط التقدم
//     progressFill.style.width = question.progress + "%";

//     // حدث رقم الخطوة
//     progressStep.textContent =
//     `الخطوة ${currentQuestionIndex + 1} من ${questions[currentPath].length}`;
//     symptomsList.innerHTML = "";
// }
function renderQuestion() {

    const questionGroup = questions[currentPath];

    if (!questionGroup) {
        console.error("المسار غير موجود:", currentPath);
        return;
    }


    const question = questionGroup[currentQuestionIndex];

    if (!question) {
        console.error("السؤال غير موجود:", currentQuestionIndex);
        return;
    }


    // عنوان السؤال
    questionTitle.textContent = question.title;

    // الوصف
    questionDescription.textContent = question.description;

    // شريط التقدم
    progressFill.style.width = question.progress + "%";


    stepText.textContent =
    `الخطوة ${currentQuestionIndex + 1} من ${questions[currentPath].length}`;


    answersContainer.innerHTML = "";


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.className = "symptom-card";


        button.innerHTML = `
            ${answer.icon ? `<i class="fa-solid ${answer.icon}"></i>` : ""}
            <span>${answer.text}</span>
        `;


        button.addEventListener("click", function(){

            document
            .querySelectorAll(".symptom-card")
            .forEach(card=>card.classList.remove("active"));


            this.classList.add("active");


            selectedAnswer = answer;


            nextBtn.disabled = false;

        });


        answersContainer.appendChild(button);

    });


    nextBtn.disabled = true;
    selectedAnswer = null;

}


const state = {

    answers: [],
    selectedPath: "",
    ageGroup: "",
    xrayAnswer: "",

    score: {
        implant: 0,
        bridge: 0,
        rootCanal: 0,
        filling: 0,
        crown: 0,
        gum: 0,
        sensitivity: 0
    }

};

function getResults() {

    const totalScore = Object.values(state.score)
        .reduce((sum, value) => sum + value, 0);

    const results = Object.entries(state.score)

        .map(([key, score]) => {

            return {

                key,

                score,

                percent: totalScore === 0
                    ? 0
                    : Math.round((score / totalScore) * 100)

            };

        })

        .sort((a, b) => b.score - a.score);

    return results;

}






const treatmentNames = {

    implant:
    "تقييم حالة تحتاج تدخل علاجي متقدم",

    bridge:
    "برنامج دعم وتأهيل للحركة",

    rootCanal:
    "إصابة عميقة تحتاج متابعة دقيقة",

    filling:
    "حالة بسيطة تحتاج علاج وتأهيل",

    crown:
    "تأهيل وتثبيت لتحسين الوظيفة",

    gum:
    "التهاب أو مشكلة في الأنسجة والمفاصل",

    sensitivity:
    "ألم أو حساسية مرتبطة بالحركة"

};








// const answerReasons = {

//     "ألم نابض ومستمر":
//         "الألم النابض غالبًا يرتبط بوصول التسوس إلى العصب.",

//     "يمنعني من النوم":
//         "الألم الليلي من أشهر علامات التهاب العصب.",

//     "تورم في اللثة أو الوجه":
//         "وجود تورم قد يدل على وجود التهاب يحتاج للفحص.",

//     "أكثر من شهر":
//         "استمرار الأعراض لفترة طويلة يزيد احتمال الحاجة للعلاج.",

//     "ألم فقط عند المضغ":
//         "الألم أثناء المضغ قد يدل على كسر أو مشكلة داخل السن.",

//     "أشعر بوجود ثقب أو كسر بالسن":
//         "وجود كسر أو ثقب يغير خطة العلاج المقترحة.",

//     "فقدت سنًا أو أكثر":
//         "فقدان الأسنان يجعل الزراعة أو الجسر من الخيارات المتوقعة.",

//     "سن واحد":
//         "فقدان سن واحد يناسبه غالبًا الزراعة أو الجسر.",

//     "فك كامل أو معظم الأسنان":
//         "فقدان عدد كبير من الأسنان يرفع احتمالية الزراعة الكاملة.",

//     "نزيف عند تنظيف الأسنان":
//         "نزيف اللثة يعد من أشهر علامات التهاب اللثة.",

//     "رائحة فم مستمرة":
//         "رائحة الفم قد تكون مرتبطة بمشاكل اللثة.",

//     "مع المشروبات الباردة":
//         "الحساسية مع البارد قد تشير إلى انكشاف طبقة العاج.",

//     "مع الحلويات":
//         "الألم مع الحلويات قد يكون بسبب وجود تسوس."
// };
function getBestTreatment() {

    const best = getResults()[0];

    return {

        key: best.key,

        title: treatmentNames[best.key],

        score: best.score,

        percent: best.percent

    };

}
console.log(getResults());

console.log(getBestTreatment());



const reasonList =
document.getElementById("reasonList");

const probabilityList =
document.getElementById("probabilityList");

const resultTitle = document.getElementById("resultTitle");

const resultDescription =
document.getElementById("resultDescription");

const mainDiagnosis =
document.getElementById("mainDiagnosis");

const mainDiagnosisText =
document.getElementById("mainDiagnosisText");





const answerReasons = {

    painType: {
        "ألم نابض ومستمر":
        "وصفت الألم بأنه نابض ومستمر، وهو من العلامات الشائعة لوصول الالتهاب إلى عصب السن.",

        "ألم فقط عند المضغ":
        "ذكرت أن الألم يظهر عند المضغ، مما قد يشير إلى وجود مشكلة في بنية السن أو الحشو.",

        "ألم مع المشروبات الباردة أو الساخنة":
        "حساسية السن مع المشروبات من العلامات المهمة أثناء التشخيص.",

        "ألم يظهر ويختفي بدون سبب واضح":
        "الألم المتقطع قد يدل على بداية مشكلة تحتاج إلى فحص."
    },

    painLevel: {

        "بسيط ويمكن تحمله":
        "ذكرت أن الألم بسيط، وهذا قد يعني أن الحالة ما زالت في بدايتها.",

        "متوسط":
        "شدة الألم المتوسطة تساعد في تضييق الاحتمالات.",

        "شديد":
        "الألم الشديد يزيد من احتمال احتياج السن لعلاج متقدم.",

        "يمنعني من النوم":
        "الألم الليلي يعتبر من العلامات المهمة أثناء التقييم.",

        "يخف مع المسكنات ثم يعود":
        "رجوع الألم بعد المسكنات يدل على أن السبب ما زال موجودًا."
    },

    painSymptoms: {

        "تورم في اللثة أو الوجه":
        "وجود تورم يعتبر من أهم المؤشرات التي تستدعي سرعة الفحص.",

        "رائحة أو طعم غير طبيعي بالفم":
        "وجود رائحة أو طعم غير طبيعي قد يرتبط بوجود التهاب.",

        "أشعر بوجود ثقب أو كسر بالسن":
        "وجود كسر أو ثقب ظاهر يزيد احتمال احتياج السن للعلاج.",

        "لا توجد أعراض أخرى":
        "عدم وجود أعراض إضافية يساعد في تضييق الاحتمالات."
    }

};






function renderResult() {
    console.log("renderResult");

    const best = getBestTreatment();

    // عنوان النتيجة
    resultTitle.textContent = "اكتمل التحليل";

    // الوصف
    resultDescription.textContent =
        "اعتمادًا على إجاباتك، هذا هو الاحتمال الأقرب.";

    // الحالة الأقرب
    mainDiagnosis.textContent = best.title;

    // النسبة
    mainDiagnosisText.textContent =
"نسبة التطابق: " + best.percent + "%";
probabilityList.innerHTML = "";


state.answers.forEach(item => {

    const questionId = item.id;

    const answerText = item.answer;

    if (
        answerReasons[questionId] &&
        answerReasons[questionId][answerText]
    ) {

        

    }

});

const results = getResults();

results.forEach(item => {

    probabilityList.innerHTML += `

        <div class="probability-item">

            <span>${treatmentNames[item.key]}</span>

            <strong>${item.percent}%</strong>

        </div>

    `;

});

}
const restarBtn = document.getElementById("restarBtn");



console.log(probabilityList.innerHTML);












//============================
// Welcome Popup
//============================

const welcomePopup = document.getElementById("welcomeOverlay");

const assessmentPopup = document.getElementById("assessmentOverlay");

const closeWelcome =
document.getElementById("closePopup");

const startExperience =
document.getElementById("startExperience");

const browseWebsite =
document.getElementById("browseWebsite");

const closePopup = document.getElementById("closePopup");

closePopup.addEventListener("click", function () {

    welcomePopup.classList.add("know");

});
//============================
// إظهار نافذة الترحيب
//============================

window.addEventListener("load",()=>{

    welcomePopup.classList.remove("know");

});

//============================
// زر X
//============================

closeWelcome.onclick=()=>{

    welcomePopup.classList.add("know");

}


//============================
// تصفح الموقع
//============================

browseWebsite.onclick=()=>{

    welcomePopup.classList.add("know");

}


//============================
// ابدأ التجربة
//============================

startExperience.onclick=()=>{

    welcomePopup.classList.add("know");

    setTimeout(()=>{

        assessmentPopup.classList.add("active");

    },250);

}






function buildWhatsappMessage() {

    const best = getBestTreatment();
    const results = getResults().slice(0, 3);

    let message = "";

    message += "🩺 *تقرير التقييم الأولي*\n";
    message += "━━━━━━━━━━━━━━━━━━\n\n";

    message += `👤 *الفئة العمرية:* ${state.ageGroup}\n`;
    message += `🎥 *فيديو للحالة:* ${state.xrayAnswer === "yes" ? "متوفر" : "غير متوفر"}\n`;
    message += `🦴 *الشكوى الرئيسية:* ${state.selectedProblem}\n\n`;

    message += "📋 *ملخص الحالة*\n\n";

    state.answers.forEach(item => {

        let questionTitle = "";

        for (const path in questions) {

            const question = questions[path].find(q => q.id === item.id);

            if (question) {
                questionTitle = question.title;
                break;
            }

        }

        message += `• ${questionTitle}\n`;
        message += `  - ${item.answer}\n\n`;

    });

    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "📊 *الترشيحات الأقرب*\n\n";

    results.forEach((item, index) => {

        const medal = ["🥇", "🥈", "🥉"][index];

        message += `${medal} ${treatmentNames[item.key]} (${item.percent}%)\n`;

    });

    message += "\n━━━━━━━━━━━━━━━━━━\n";
    message += `✅ *الترشيح الأول:* ${best.title}\n\n`;

    message += "ℹ️ هذا التقرير ناتج عن التقييم الذكي ويُستخدم للمساعدة في تجهيز الحالة قبل الكشف، ولا يُعد تشخيصًا طبيًا نهائيًا.\n\n";

    message += "📅 أرغب في حجز موعد.";

    return message;

}


const doctorWhatsapp = "201113385257";


restarBtn.addEventListener("click", function () {

    if (state.xrayAnswer === "yes") {

    alert(
`قبل المتابعة:

• لا تقم بحذف أو تعديل الرسالة التي ستظهر في واتساب، فقط اضغط على "إرسال" كما هي.

• بعد إرسال الرسالة مباشرة، يُرجى إرسال فيديو يوضح طريقة الحركة أو مكان الألم للطبيب في نفس المحادثة، لأنه سيساعده على تقييم الحالة بشكل أفضل قبل الموعد.`
    );

}else {

    alert(
`قبل المتابعة:

• لا تقم بحذف أو تعديل الرسالة التي ستظهر في واتساب، فقط اضغط على "إرسال" كما هي.`
    );

}

    const message = buildWhatsappMessage();

    const url =
`https://api.whatsapp.com/send?phone=${doctorWhatsapp}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});








const openWhatsApp = document.getElementById("openWhatsApp");

openWhatsApp.addEventListener("click", function (e) {

    e.preventDefault();

    assessmentPopup.classList.add("active");

});





const openAssessmentBtns = document.querySelectorAll(".hero-btn, .about-btn");

openAssessmentBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        assessmentOverlay.classList.add("active");

    });

});