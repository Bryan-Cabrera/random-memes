document.getElementById("memeButton").addEventListener("click", getMeme);
async function getMeme() {
    const response = await fetch("https://meme-api.com/gimme/prequelmemes");
    const data = await response.json();
    
    document.getElementById("memeImage").src = data.url;
}