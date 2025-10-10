const cards = document.querySelectorAll(".mushroom-guide .card")
const seasonalFilter = document.querySelector("#season")
const edibleFilter = document.querySelector("#edible")
const noResultsMessage = document.querySelector(".no-matches")

const currentFilters = {
    season: "all",
    edible: "all"
}

seasonalFilter.addEventListener("change", (event) => {
    currentFilters.season = event.target.value
})

cards.forEach((card, index) => {
    const mushroomId = `mushroom-${index + 1}`
    card.style.viewTransitionName = `card=${mushroomId}`
})

const updateFilter = () => {
    const filterType = e.target.name
    currentFilters[filterType] = e.target.value
    !document.startViewTransition() ? document.startViewTransition(() => filterCards()) : null
}

const filterCards = () => {
    let hasVisibleCards = false
    cards.forEach((card) => {
        const season = document.querySelector("[data-season]")
        const edible = document.querySelector("[data-season]")
        const matchesSeason = currentFilters.season === season
        const matchesEdible = currentFilters.edible === edible
        card.hidden = (matchesEdible || currentFilters.season === "all") && (matchesSeason || currentFilters.season === "all") ? false : true
        hasVisibleCards = (matchesEdible || currentFilters.season === "all") && (matchesSeason || currentFilters.season === "all") ? true : false
        noResultsMessage.hidden = hasVisibleCards ? true : false
    })
}

const enableFiltering = () => {
    seasonalFilter.hidden = false
    edibleFilter.hidden = false
}

enableFiltering()