document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question'); // Sélectionner toutes les questions
    let actuelleQuestionIndex = 0; // Index de la question actuelle

    showQuestion(actuelleQuestionIndex); // Afficher la première question au chargement de la page

    // Afficher la question spécifiée par l'index
    function showQuestion(index) {
        questions.forEach((question, i) => {
            if (i === index) {
                question.style.display = 'block'; // Afficher la question
            } else {
                question.style.display = 'none'; // Masquer les autres questions
            }
        });
    }

    // Fonction pour passer à la question suivante
    function nextQuestion() {
        if (actuelleQuestionIndex < questions.length - 1) {
            actuelleQuestionIndex++;
            showQuestion(actuelleQuestionIndex);
        }
    }

    // Fonction pour revenir à la question précédente
    function prevQuestion() {
        if (actuelleQuestionIndex > 0) {
            actuelleQuestionIndex--;
            showQuestion(actuelleQuestionIndex);
        }
    }

    // Ajouter des écouteurs d'événements aux boutons Précédent et Suivant
    document.getElementById('prev').addEventListener('click', prevQuestion);
    document.getElementById('next').addEventListener('click', nextQuestion);

    // Ajouter un écouteur d'événement au bouton Terminer
    document.getElementById('end').addEventListener('click', function () {
        let score = 0; // Initialiser le score

        // Parcourir toutes les questions pour vérifier les réponses
        questions.forEach((question) => {
            const reponse = question.querySelector('input[type=radio]:checked');
            if (reponse) {
                if (reponse.value === 'everest' || reponse.value === 'londres' || reponse.value === 'dea' || reponse.value === 'ukraine' || reponse.value === 'mz') {
                    score += 20; // Augmenter le score de 20 pour chaque réponse correcte
                }
            } else {
                score +=0; // Augmenter le score de 0
            }
        });

        // Afficher le score en pourcentage
        const totalScore = (score / (questions.length * 20)) * 100;
        alert(`Votre score est de ${totalScore}%`);
    });
});
