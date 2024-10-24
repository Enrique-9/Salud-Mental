//AUTO EVALUACION DEL ESTRES
document.getElementById("stressAssessment").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener respuestas y calcular el total
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        const questionValue = parseInt(document.getElementById(`q${i}`).value);
        total += questionValue;
    }

    // Determinar el mensaje según el total
    let message;
    if (total <= 5) {
        message = "Tu nivel de estrés parece ser bajo. ¡Sigue cuidando de ti!";
    } else if (total <= 10) {
        message = "Tu nivel de estrés es moderado. Considera técnicas de manejo del estrés.";
    } else if (total <= 15) {
        message = "Tu nivel de estrés es alto. Te recomendamos buscar apoyo profesional.";
    } else {
        message = "Tu nivel de estrés es muy alto. Es importante que hables con un profesional.";
    }

     // Mostrar el mensaje en el div
     document.getElementById("resultMessage").textContent = message; // Mostrar el mensaje en el div
});

//ENCUESTA INTERACTIVA
document.getElementById("wellnessSurvey").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener respuestas y calcular el total
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        const questionValue = parseInt(document.getElementById(`q${i}`).value);
        total += questionValue;
    }

    // Determinar el mensaje según el total
    let message;
    if (total <= 6) {
        message = "Parece que estás enfrentando algunos desafíos. Considera buscar apoyo.";
    } else if (total <= 10) {
        message = "Tu bienestar mental es promedio. Asegúrate de cuidar de ti mismo.";
    } else {
        message = "¡Estás manejando bien tu bienestar mental! Sigue así.";
    }

    // Mostrar el mensaje en el div
    document.getElementById("surveyResult").textContent = message;
});

/*Foro */
// Evento para publicar un nuevo post
document.getElementById('submit-post').addEventListener('click', function() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        const postContainer = document.getElementById('posts-container');

        // Crear un nuevo div para el post
        const postDiv = document.createElement('div');
        postDiv.classList.add('forum-post');

        // Agregar contenido al nuevo post
        postDiv.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
            <p>${content}</p>
            <button class="reply-button">Responder</button>
            <div class="response-form" style="display: none;">
                <input type="text" placeholder="Tu nombre" class="response-user" required>
                <textarea rows="2" placeholder="Escribe tu respuesta..." class="response-content" required></textarea>
                <button class="submit-response">Enviar Respuesta</button>
            </div>
            <div class="responses-container"></div>
        `;

        // Añadir el nuevo post al contenedor
        postContainer.appendChild(postDiv);

        // Limpiar el formulario
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Evento para mostrar el formulario de respuesta
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('reply-button')) {
        const responseForm = event.target.nextElementSibling;
        responseForm.style.display = responseForm.style.display === 'none' ? 'block' : 'none';
    }
});

// Evento para enviar la respuesta
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('submit-response')) {
        const postDiv = event.target.closest('.forum-post');
        const userName = postDiv.querySelector('.response-user').value;
        const responseContent = postDiv.querySelector('.response-content').value;

        if (userName && responseContent) {
            const responsesContainer = postDiv.querySelector('.responses-container');
            
            // Crear un nuevo div para la respuesta
            const responseDiv = document.createElement('div');
            responseDiv.classList.add('response');
            responseDiv.innerHTML = `<strong>${userName}:</strong> ${responseContent}`;

            // Añadir la respuesta al contenedor
            responsesContainer.appendChild(responseDiv);

            // Limpiar los campos de respuesta
            postDiv.querySelector('.response-user').value = '';
            postDiv.querySelector('.response-content').value = '';
        } else {
            alert('Por favor, completa todos los campos de respuesta.');
        }
    }
});

//Envio de correo
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío real del formulario

    // Simulando el envío del correo
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí podrías agregar la lógica para enviar el correo realmente

    // Mostrar el mensaje de confirmación
    document.getElementById('confirmation-message').style.display = 'block';

    // Limpiar el formulario
    document.getElementById('contact-form').reset();
});