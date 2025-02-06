document.getElementById("fetchMessage").addEventListener("click", async () => {
    try {
        const response = await fetch("https://yurakas97.xyz/api/message");
        const data = await response.json();
        document.getElementById("message").innerText = data.message;
    } catch (error) {
        console.error("Error fetching message:", error);
        document.getElementById("message").innerText = "Error fetching data.";
    }
});

