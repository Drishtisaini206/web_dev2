const eventForm = document.getElementById("eventform");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBin"); 
const addSampleBtn = document.getElementById("addSampleBin");
const eventContainer = document.getElementById("eventList");

let sampleEvent = [
    {
        title: "AI summit",
        date: "2026-07-02",
        category: "Workshop",
        description: "The 2026 AI Summit workshops focused on practical AI implementation, covering predictive modeling, prompt engineering, and responsible AI deployment."
    },
    {
        title: "Robotics event",
        date: "2026-05-09",
        category: "Workshop",
        description: " intensive, 2-day hands-on events aimed at students and hobbyists to introduce them to AI, IoT, and mechanical design."
    }
];

function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-item";

    card.innerHTML = `
        <button class="delete-btn" style="float:right; cursor:pointer;">X</button>
        <h3>${eventData.title}</h3>
        <div><strong>Date:</strong> ${eventData.date}</div>
        <span><strong>Category:</strong> ${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    return card;
}

function addEvent(eventData) {
    const emptyState = document.getElementById("noEventsText");
    if (emptyState) emptyState.remove();

    const newCard = createEventCard(eventData);
    eventContainer.appendChild(newCard);
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
    eventForm.reset();
});

eventContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const card = event.target.closest(".event-item");
        card.remove();
    }

    if (eventContainer.children.length === 0) {
        eventContainer.innerHTML = `<p id="noEventsText">No events yet. Add your first event!</p>`;
    }
});

addSampleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sampleEvent.forEach(addEvent);
});

clearAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    eventContainer.innerHTML = `<p id="noEventsText">No events yet. Add your first event!</p>`;
});