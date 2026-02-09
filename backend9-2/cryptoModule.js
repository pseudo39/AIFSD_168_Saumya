const crypto = require('crypto');

const password = 'mySecurePassword';
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log("SHA-256 Hash:", hash);

const token = crypto.randomBytes(16).toString('hex');
console.log("Random Token:", token);