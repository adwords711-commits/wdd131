const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.png",

    attacked: function() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert("The character has died.");
        }
        displayCharacter();
    },

    levelUp: function () {
        this.level += 1;
        displayCharacter();
    }
};

function displayCharacter() {
    document.querySelector("#characterName").textContent = character.name;
    document.querySelector("#characterClass").textContent = character.class;
    document.querySelector("#characterLevel").textContent = character.level;
    document.querySelector("#characterHealth").textContent = character.health;
    document.querySelector("#characterImage").setAttribute("src", character.image);
}
displayCharacter();
document.querySelector("#attackBtn").addEventListener("click", function () {
    character.attacked();
});
document.querySelector("#levelUpBtn").addEventListener("click", function() {
    character.levelUp();
});
