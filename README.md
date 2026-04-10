 Smart Task Manager Web App:
 
 <img width="511" height="406" alt="image" src="https://github.com/user-attachments/assets/e6f069cc-0bc8-4dec-a091-6e6e6d2e3649" />
 
 LOGIN FORM:
 
<img width="400" height="344" alt="image" src="https://github.com/user-attachments/assets/6f98eb8d-f70d-4b71-9830-004a8dfae10c" />

SIGNUP FORM:

<img width="405" height="379" alt="image" src="https://github.com/user-attachments/assets/1ddf2e14-4b23-4871-8357-2d089ef85061" />

1. Smart Task Manager Web Application
It allows:
* User Signup/Login
* Create tasks
* View tasks
* Update tasks
* Delete tasks
  
2. Technologies (Tools) Used**

 🔹 Frontend (UI)

These files handle design and user interface:

* `index.html` → Login page
* `signup.html` → Signup page
* `dashboard.html` → After login (task page)
* `style.css` → Design / styling
* `script.js` → Frontend logic (JavaScript)

👉 Tools used:

* HTML
* CSS
* JavaScript

🔹 Backend (Server)

Main file:

* `server.js`

👉 Tools used:

* Node.js → Backend runtime
* Express.js → Web framework

🔹 Database

From code:

```js
mongoose.connect('mongodb://localhost:27017/yourDB')
```

👉 Tool used:
SQLDB (Database)
SQl (to connect Node.js with MongoDB)

🔹 Authentication System

From code:

```js
passport
passport-local
express-session
```

👉 Tools used:

* Passport.js → login system
* express-session → session handling
  
🔹 Other Libraries (from package.json)


👉 Explanation:

* express → server
* mongoose → database connection
* cors → allow frontend-backend connection
* jsonwebtoken → authentication (JWT)
* dotenv → environment variables

3. What each file is doing**

🔸 `server.js`

Main backend logic:

* Connects to MongoDB
* Creates **User Schema**
* Creates **Task Schema**
* Handles login using Passport
* Provides **CRUD APIs**

APIs:

* POST `/tasks` → Create task
* GET `/tasks` → Get tasks
* PUT `/tasks/:id` → Update task
* DELETE `/tasks/:id` → Delete task

---

🔸 `signup.php`

👉 This is unusual because:

* Your project is Node.js
* But this file is PHP

✔ It may be:

* Old file
* OR separate signup handling

🔸 `script.js`

Handles:

* Button clicks
* Sending data to server
* Fetch API / AJAX calls

🔸 `style.css`

* Makes UI look good
* Centering forms
* Colors, layout

🔸 HTML files

* Forms (login/signup)
* Dashboard UI

4. Important Features Implemented**

✔ User Authentication
✔ Session handling
✔ Database storage
✔ Task CRUD system
✔ Frontend + Backend integration


