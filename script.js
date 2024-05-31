/*
function execCommand(command) {
    document.execCommand(command, false, null);
}

function insertImage() {
    const imageUrl = prompt("Enter image URL:");
    if (imageUrl) {
        const image = document.createElement("img");
        image.src = imageUrl;
        document.getElementById("editor").appendChild(image);
    }
}
*/





function execCommand(command, value = null) {
    document.execCommand(command, false, value);
}

function createLink() {
    const url = prompt("Enter URL:");
    if (url) {
        execCommand('createLink', url);
    }
}

function insertTable() {
    const rows = prompt("Enter number of rows:");
    const cols = prompt("Enter number of columns:");
    if (rows && cols) {
        const table = document.createElement("table");
        for (let i = 0; i < rows; i++) {
            const row = table.insertRow(i);
            for (let j = 0; j < cols; j++) {
                const cell = row.insertCell(j);
                cell.textContent = "Cell";
            }
        }
        document.getElementById("editor").appendChild(table);
    }
}

function insertHorizontalLine() {
    const hr = document.createElement("hr");
    document.getElementById("editor").appendChild(hr);
}

function insertImage() {
    const imageUrl = prompt("Enter image URL:");
    if (imageUrl) {
        const image = document.createElement("img");
        image.src = imageUrl;
        document.getElementById("editor").appendChild(image);
    }
}

function insertVideo() {
    const videoUrl = prompt("Enter video URL:");
    if (videoUrl) {
        const video = document.createElement("iframe");
        video.src = videoUrl;
        video.width = "400";
        video.height = "300";
        document.getElementById("editor").appendChild(video);
    }
}
