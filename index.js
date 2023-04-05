import AWS from 'aws-sdk';
import express from 'express';

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

const s3 = new AWS.S3();

const getter_params = {
    Bucket: 'taskmanager-i',
    Key: 'processes.json'
};
    
const app = express();  // Create an express app

app.use(express.json());  // Add a middleware to parse JSON

// Add a route to the app
app.get('/tasks', async(req, res) => {
    const data = await s3.getObject(getter_params).promise();
    const parsedData = JSON.parse(data.Body.toString())
    res.status(200).json(parsedData);
});

// Add a post route to the app
app.post('/tasks', async(req, res) => {
    const data = await s3.getObject(getter_params).promise();
    const parsedData = JSON.parse(data.Body.toString())
    parsedData.sort((a,b)=>b.id-a.id) //depending on ascending/descending
    const latestid = parsedData[0].id;
    const body = req.body;
    const id= parseInt(latestid)+1;
    const title = body.title;
    const description = body.description;
    const timestamp = Date.now();
    const newdata= {
        "id": id,
        "title": title,
        "description": description,
        "timestamp": timestamp
    }
    parsedData.push(newdata)
    const post_params = {
        Bucket: 'taskmanager-i',
        Key: 'processes.json',
        Body: JSON.stringify(parsedData)
    };
    await s3.putObject(post_params).promise();
    res.status(200).json(newdata);
});

// Start the app
app.listen(3000, () => {
    console.log('Server started on port 3000');
});