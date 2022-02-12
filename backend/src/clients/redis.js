const Redis = require('ioredis');
const redis = new Redis();

redis.on('error', function (error) {
	console.dir(error);
});

redis.on('ready', () => {
	console.log('Redis server is ready.');
});

export default redis;
