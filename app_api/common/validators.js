// This function centralizes all validation logic for trip data.
// Instead of repeating validation checks inside each controller
// function (like tripsAddTrip or tripsUpdateTrip), we use this
// single algorithm to ensure consistent rules and cleaner code.

function validateTripInput(data) {
    const errors = [];

    if (!data.code || data.code.trim().length < 3) {
        errors.push("Trip code must be at least 3 characters long.");
    }

    if (!data.name || data.name.trim() === "") {
        errors.push("Trip name is required.");
    }

    // LENGTH NOW STRING
    if (!data.length || data.length.trim() === "") {
        errors.push("Trip length is required.");
    } else {
        const lengthPattern = /^\s*\d+\s*(night|nights)\s*\/\s*\d+\s*(day|days)\s*$/i;
        if (!lengthPattern.test(data.length.trim())) {
            errors.push("Trip length must follow format like '4 nights / 5 days'.");
        }
    }

    if (!data.perPerson || Number(data.perPerson) <= 0) {
        errors.push("Trip price (per person) must be a positive value.");
    }

    if (!data.description || data.description.trim() === "") {
        errors.push("Trip description is required.");
    }

    if (!data.start || data.start.trim() === "") {
        errors.push("Trip start date is required.");
    }

    if (!data.resort || data.resort.trim() === "") {
        errors.push("Trip resort is required.");
    }

    if (!data.image || data.image.trim() === "") {
        errors.push("Trip image filename is required.");
    }

    return errors;
}

module.exports = { validateTripInput };