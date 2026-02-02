// Навигация
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    window.scrollTo(0, 0);
}

// Генерация отзывов
const track = document.getElementById('reviews-track');
const reviews = [
    {n: "Алексей", t: "Тараканы ушли за один раз! Лучшие в Москве."},
    {n: "Мария", t: "Очень вежливый мастер, запаха почти не было. Спасибо!"},
    {n: "Иван", t: "Травили клопов в хостеле. Работа выполнена на 100%."},
    {n: "Елена", t: "Цена соответствует качеству. Рекомендую DEZDRY."},
    {n: "Сергей", t: "Быстро приехали, всё объяснили. Гарантию дали."}
];

// Создаем 15 штук (дублируем для бесконечности)
for(let i=0; i<15; i++) {
    const rev = reviews[i % reviews.length];
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <div style="color:var(--yellow)">★★★★★</div>
        <p>"${rev.t}"</p>
        <strong>${rev.n}</strong>
    `;
    track.appendChild(card);
}

// Дублируем для плавности анимации
track.innerHTML += track.innerHTML;

// Модалка
function openOrderModal(service) {
    document.getElementById('selected-service-name').innerText = "Услуга: " + service;
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('order-form-step').style.display = 'block';
    document.getElementById('order-success-step').style.display = 'none';
}

function submitFinalOrder() {
    const phone = document.getElementById('phone').value;
    if(phone.length < 5) return alert("Введите номер телефона");
    
    document.getElementById('order-form-step').style.display = 'none';
    document.getElementById('order-success-step').style.display = 'block';
}
