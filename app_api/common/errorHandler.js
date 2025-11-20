// Centralized error handler used by all controller functions.
// This allows us to avoid repeating the same try/catch response
// formatting throughout the API and ensures consistency.

function handleError(res, error, message = "Server error") {

    // Log full error for backend debugging
    console.error("Backend Error:", error);

    // Send a cleaner, user-friendly error to the client
    return res.status(500).json({
        status: "error",
        message
    });
}

module.exports = { handleError };