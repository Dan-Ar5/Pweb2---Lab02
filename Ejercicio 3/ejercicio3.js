var targetDate = new Date(new Date().getFullYear(), 7, 15);
    var timeDiff = targetDate - new Date();
    var daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    document.getElementById("countdown").innerHTML = "Faltan " + daysRemaining + " días para el Día de Arequipa.";