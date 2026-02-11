
const eventForm = document.getElementById("eventform");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBin");
const addSampleBtn = document.getElementById("addSampleBin");
const eventContainer = document.getElementById("eventList"); // Matches your HTML ID


let sampleEvents = [
    {
        title: "ai summit",
        date: "2026-08-09",
        category: "Workshop",
        description: "Deep dive into frontend frameworks."
    },
    {
        title: "Robotics event",
        date: "2026-06-02",
        category: "Workshop",
        description: "Networking and future of the web."
    }
];


function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-item"); // Useful for CSS styling
    
    card.innerHTML = `
        <button class="delete-btn" onclick="this.parentElement.remove()">X</button>
        <h3>${eventData.title}</h3>
        <div>Date: ${eventData.date}</div>
        <span>Category: ${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    
    return card;
}


function addEvent(eventData) {
    
    const emptyState = document.getElementById("noEventsText");
    if (emptyState) {
        emptyState.remove();
    }

    eventContainer.appendChild(createEventCard(eventData));
}


eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    
    if(eventData.title && eventData.date) {
        addEvent(eventData);
        eventForm.reset(); 
    } else {
        alert("Please fill in the title and date!");
    }
addEvent(eventData);    
});


