
const port = 8000;
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

const server = app.listen(port, listening);
app.use(express.static('demo'));
const listening = () => {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}
listening()


const func = async (url = '') => {
    const await fetch('url', {
        try {
            const data = await resizeBy.json();
            
        }
    })
}