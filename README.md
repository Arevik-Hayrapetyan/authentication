# Protected Dashboard and its API
## Stack: ReactJS, Material UI, ExpressJS, Prisma ORM
### Need to develop protected Single-Page Application that
- Authorizes the user by login and password using API
- Displays exam result received from authenticated API
- Allows to log out

1. When user opens the page without authentication token, the Sign-in form gets displayed and Email/Password asked. MUI Reference for sign-in form layout:([Demo](https://mui.com/material-ui/getting-started/templates/sign-in/))

2. Upon sign in, the SPA athenticates the credentials using API. Error message should appear if authentication didn’t pass.
3. If authorization was successful, user session gets created and the Dashboard gets available.
4. Secret data (Exam result) gets fetched from the backend API and shown on the Card component.
5. Page refresh/reload doesn’t require re-authorization (In-browser session gets reused).
6. User is able to log out using Navigation top-left menu. Auth token gets destroyed and user gets redirected to the authentication page.




