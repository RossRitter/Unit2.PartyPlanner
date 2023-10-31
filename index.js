const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events'
const state = {
  events: []
}

const eventsList = document.querySelector('#events')
const addEventForm = document.querySelector('#addEvent');
addEventForm.addEventListener("submit", addEvent);

async function render() {
  await getEvents();
  renderEventsDOM();
}

render();

async function getEvents() {
  try {
      const res = await fetch(API_URL);
      const json = await res.json();
      state.events = json.data;
  } catch (error) {
      console.log(error);
  }
}
function renderEventsDOM() {
  
}