import User from "./User.js";

class EventManager {
    constructor(users = [], events = []) {
        this.users = users;
        this.events = events;
    }

    registerEventsUser(ID, name, address, contactInfo) {
        const user = new User(ID, name, address, contactInfo);
        this.users.push(user);
        console.log(`User ${name} successfully registered!`);
        return user;
    }

    createEvent(eventName, address, eventCategory, date, users = []) {
        const eventExists = this.events.some(
            (e) => e.name.toLowerCase() === eventName.toLowerCase() &&
                e.address.toLowerCase() === address.toLowerCase() &&
                e.category.toLowerCase() === eventCategory.toLowerCase()
        );

        if (eventExists) {
            console.log(`Event "${eventName}" already exists!`);
            return;
        }

        const event = {
            name: eventName,
            address: address,
            category: eventCategory,
            date: date,
            users: users
        };

        this.events.push(event);
        console.log(`Event "${eventName}" successfully created!`);
    }

    getEventsInfo() {
        const eventsWithUserNames = this.events.map(event => ({
            name: event.name,
            address: event.address,
            category: event.category,
            date: event.date,
            users: event.users.map(user => user.name)
        }));
        console.table(eventsWithUserNames);
    }


    sendMessage() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const tomorrowStr = tomorrow.toLocaleDateString('en-US');

        const upcomingEvents = this.events.filter(e => e.date === tomorrowStr);

        if (upcomingEvents.length > 0) {
            upcomingEvents.forEach(e => {
                console.log(`Remind: Event "${e.name}" will be tomorrow!`);
            });
        } else {
            console.log("No events scheduled for tomorrow.");
        }
    }

    registerToEvent(eventName, userName) {
        const event = this.events.find(e => e.name === eventName);
        const user = this.users.find(e => e.name.toLowerCase() === userName.toLowerCase());

        if (!user) {
            console.log(`User with name "${userName}" not found.`);
            return;
        }

        if (!event) {
            console.log(`Event with name "${eventName}" not found.`);
            return;
        }

        const alreadyRegistered = event.users.find(u => u.name === userName);
        if (alreadyRegistered) {
            console.log(`User ${userName} is already registered to event "${eventName}".`);
            return;
        }

        event.users = [...event.users, user];
        console.log(`User ${userName} has successfully registered to event "${eventName}"!`);
    }


}

export default EventManager;
