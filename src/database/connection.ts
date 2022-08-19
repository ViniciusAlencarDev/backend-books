import mongoose from 'mongoose';

function getConnectionMongo() {
    const { URI_MONGO } = process.env;
    if (!URI_MONGO) return;

    const connection = mongoose.connect(URI_MONGO);
    return connection;
}

export default getConnectionMongo
