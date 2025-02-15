window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');
    var pauseButton = document.getElementById('pause-button');

    // Функция для начала воспроизведения
    function playMusic() {
        audio.play().then(function() {
            playButton.style.display = 'none'; // Скрыть кнопку Play
            pauseButton.style.display = 'inline-block'; // Показать кнопку Pause
        }).catch(function(error) {
            console.log('Ошибка воспроизведения: ', error);
        });
    }

    // Функция для паузы
    function pauseMusic() {
        audio.pause();
        playButton.style.display = 'inline-block'; // Показать кнопку Play
        pauseButton.style.display = 'none'; // Скрыть кнопку Pause
    }

    // Обработчик для кнопки Play
    playButton.addEventListener('click', playMusic);

    // Обработчик для кнопки Pause
    pauseButton.addEventListener('click', pauseMusic);

    // Сразу пытаемся воспроизвести музыку после загрузки страницы
    audio.currentTime = 0; // Сбрасываем время на начало
    playMusic(); // Воспроизводим музыку

});
