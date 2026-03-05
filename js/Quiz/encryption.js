
// Function to encrypt data using AES
export function encryptPass(pass) {
    // Encrypt the message
    const encryptedPass = CryptoJS.AES.encrypt(pass, "your-super-secret-key");
    // Convert the encryptedPass object to a string format (e.g., Base64) for storage/transmission
    return encryptedPass.toString();
}

// Function to decrypt data
export function decryptPass(pass) {
    // Decrypt the ciphertext
    const decryptedPass = CryptoJS.AES.decrypt(pass, "your-super-secret-key");
    // Convert the decrypted decryptedPass into a UTF8 string
    const originalPass = decryptedPass.toString(CryptoJS.enc.Utf8);
    return originalPass;
}


