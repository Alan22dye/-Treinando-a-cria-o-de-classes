class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log(`${this.fullname}: Login success!`);
        } else {
            console.log(`${this.fullname}: Login failed!`);
        }
    }
}

// Exemplo de uso:
const user1 = new User('John Doe', 'john@example.com', '1234');
user1.login('john@example.com', '1234');  // John Doe: Login success!
user1.login('john@example.com', 'wrongpassword');  // John Doe: Login failed!
