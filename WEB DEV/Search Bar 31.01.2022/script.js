const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer  = document.querySelector("[data-cards-container]")
const searchInput = document.querySelector("[data-search]")
let users = []
// Zmienne pobierają odpowiednie elementy HTML z pliku

// Dodajemy event listener inputowi, żeby zawsze gdy coś jest wpisywane w search bar aktualizował wyniki.
// Pobieramy wprowadzony ciąg znaków i porównujemy z wartościami w bazie.
// Każdej karcie sprawdzamy czy jakieś dane zgadzają się z wyszukiwaną frazą, jeśli tak to temu elementowi nie dodajemy klasy "hide". 
searchInput.addEventListener("input", e =>{
    const value = e.target.value.toLowerCase()
    users.forEach(user =>{
        const isVisible = user.name.includes(value) || user.email.includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

// Pobieramy przykładowe dane z API ze strony jsonplaceholder.
// Klonujemy szablon karty i wprowadzamy do środka pobrane z API dane.
// Całą kartę dodajemy do ogólnej tablicy zawierającej wszystkie karty potrzebne przy analizie wyszukiwania.
fetch("https://jsonplaceholder.typicode.com/users")
.then(result => result.json())
.then(data => {
    users = data.map(user =>{
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.appendChild(card)
        return {name: user.name.toLowerCase(), email: user.email.toLowerCase(), element: card}
    })
})