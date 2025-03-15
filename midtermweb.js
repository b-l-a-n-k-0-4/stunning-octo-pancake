document.addEventListener("DOMContentLoaded", function() {
    const games = {
        daysgone: {
            title: "Days Gone",
            description: "An open-world action-adventure game set in a post-apocalyptic world overrun by zombies."
        },
        gtav: {
            title: "Grand Theft Auto V",
            description: "A critically acclaimed open-world game featuring three protagonists and endless crime-driven action."
        },
        nba: {
            title: "NBA 2K16",
            description: "A basketball simulation game that delivers realistic gameplay and immersive career modes."
        },
        tekken: {
            title: "Tekken 8",
            description: "A fast-paced fighting game with a diverse roster of characters and dynamic combat mechanics."
        },
        watchdogs: {
            title: "Watch Dogs 2",
            description: "A hacking-based open-world game that lets players explore San Francisco and take down corrupt systems."
        }
    };

    const reads = {
        absolute: {
            title: "Absolute Dominion",
            description: "A thrilling martial arts story featuring powerful cultivation and epic battles."
        },
        nano: {
            title: "Nano Machine",
            description: "A sci-fi martial arts tale about a young man's journey to become powerful with the help of nanotechnology."
        },
        legend: {
            title: "Legend of The Northern Blade",
            description: "A story of revenge and justice following a young warrior's journey to protect his land."
        },
        gosu: {
            title: "Gosu",
            description: "A hilarious and action-packed martial arts manhwa following a young martial artist's adventures."
        },
        myst: {
            title: "Myst, Might, Mayhem",
            description: "A fantasy series exploring magic, mystery, and complex character dynamics."
        }
    };

    function displayInfo(type, data) {
        const titleElement = document.getElementById(`${type}-title`);
        const descriptionElement = document.getElementById(`${type}-description`);
        const infoElement = document.getElementById(`${type}-info`);

        titleElement.textContent = data.title;
        descriptionElement.textContent = data.description;

        infoElement.style.display = "block";
        infoElement.style.border = "2px solid #d4af37";
        infoElement.style.borderRadius = "8px";
        infoElement.style.padding = "10px 15px";
        infoElement.style.background = "none";
        infoElement.style.boxShadow = "none";
        infoElement.style.width = "auto";
        infoElement.style.maxWidth = "400px";
        infoElement.style.margin = "10px auto";
    }

    document.querySelectorAll(".game-img").forEach(img => {
        img.addEventListener("click", function() {
            const gameKey = this.getAttribute("data-game");
            if (games[gameKey]) {
                displayInfo("game", games[gameKey]);
            }
        });
    });

    document.querySelectorAll(".read-img").forEach(img => {
        img.addEventListener("click", function() {
            const readKey = this.getAttribute("data-read");
            if (reads[readKey]) {
                displayInfo("read", reads[readKey]);
            }
        });
    });
});