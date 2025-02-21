      // Гирлянда
      let girIndex = 1;
      function gir() {  
          if (girIndex === 1) {
              document.getElementById('gir').className = 'gir_2';
              girIndex = 2;
          } else if (girIndex === 2) {
              document.getElementById('gir').className = 'gir_3';
              girIndex = 3;
          } else {
              document.getElementById('gir').className = 'gir_1';
              girIndex = 1;
          }  
      }  
      setInterval(gir, 500); // Вызываем функцию каждые 500 мс

      // Снег
      const canvas = document.getElementById("snow");
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const snowflakes = [];
      for (let i = 0; i < 200; i++) {
          snowflakes.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              radius: Math.random() * 3 + 1,
              speed: Math.random() * 2 + 0.5,
          });
      }

      function drawSnowflakes() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          snowflakes.forEach((flake) => {
              const gradient = ctx.createRadialGradient(
                  flake.x,
                  flake.y,
                  0,
                  flake.x,
                  flake.y,
                  flake.radius
              );
              gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
              gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
              gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
              ctx.fill();
          });
      }

      function updateSnowflakes() {
          snowflakes.forEach((flake) => {
              flake.y += flake.speed;
              if (flake.y > canvas.height) {
                  flake.y = 0;
                  flake.x = Math.random() * canvas.width;
              }
          });
      }

      function animate() {
          drawSnowflakes();
          updateSnowflakes();
          requestAnimationFrame(animate);
      }

      animate();

      // Обратный отсчет
      let colorIndex = 0;
      const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107'];
      const colorChangeInterval = 2000; // Время в миллисекундах для смены цвета

      function updateCountdown() {
          const now = new Date();
          const newYear = new Date(now.getFullYear() + 1, 0, 1);
          const diff = newYear - now;

          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          const countdownElement = document.getElementById("countdown");
          countdownElement.innerHTML = `${days}<span>д</span> ${hours}<span>ч</span> ${minutes}<span>м</span> ${seconds}<span>с</span>`;

          // Изменение цвета таймера
          if (now.getTime() % colorChangeInterval < 1000) { // Проверка, если прошло время для смены цвета
              countdownElement.style.color = colors[colorIndex];
              colorIndex = (colorIndex + 1) % colors.length; // Смена индекса цвета
          }
      }

      setInterval(updateCountdown, 1000);





          function createMessage(text) {
              const messageContainer = document.getElementById('message-container');
              const message = document.createElement('div');
              message.classList.add('message');
              message.textContent = text;
              messageContainer.appendChild(message);
    
              // Удаляем сообщение после анимации
              message.addEventListener('animationend', () => {
                  message.remove();
              });
          }
    
        // Добавляем случайные сообщения при клике на ёлку (Этот код должен быть после createMessage)
        const tree = document.querySelector('.tree'); // Убедитесь, что tree найден
        if (tree) { // Добавляем проверку на существование tree
            tree.addEventListener('click', () => {
                const messages = [
                    "Пусть Новый год принесет счастье!",
                    "Желаю исполнения всех желаний!",
                    "Счастливого Нового Года!",
                    "Пусть удача сопутствует во всем!"
                ];
                const randomIndex = Math.floor(Math.random() * messages.length);
                createMessage(messages[randomIndex]); // Вызываем createMessage
            });
      };