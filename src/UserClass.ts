import mysql from 'mysql2/promise';

class UserClass {
    constructor(name: any, email: any) {
        this.name = name;
        this.email = email;
    }

    getData() {
        return {
            name: this.name,
            email: this.email
        };
    }

    async getMySQLData() {
        const db = mysql.createPool({
            host: 'localhost', // Your database host
            user: 'root', // Your database user
            password: '', // Your database password
            database: 'laravel', // Your database name
        });
        try {
            const [rows] = await db.query('SELECT * FROM users'); // Adjust query as needed
            return {users: rows};
        } catch (error) {
            console.error(error);
            return {error: 'Database error'};
        }
    }



    userProfile() {
        return ['user file']
    }

    userAddress() {
        return {
            'country': 'Bangladesh',
            'city': 'Dhaka',
            'location': 'Mymensingh',
        }
    }
}

export {UserClass};
