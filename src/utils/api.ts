// import {doGraphQLFetch} from "./graphql/fetch";
// import {
//     checkToken,
//     login, 
//     register,
// } from "./graphql/queries";
// import {User} from "./interfaces/User";
// import {Credentials} from "./interfaces/Credentials";
// import LoginMessageResponse from "./interfaces/LoginMessageResponse";

// // global variables
// const apiURL = import.meta.env.VITE_API_URL;

// const user: User = {};

// // check token
// (async () => {
//     const token = localStorage.getItem("token");
  
//     if (token !== null) {
//       try {
//         const isTokenValid = await doGraphQLFetch(apiURL, checkToken, {}, token);
//         if (isTokenValid.checkToken?.message === "Token is valid") {
//           console.log("token valid");
//           user.username = isTokenValid.checkToken.user.user_name;
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   })();

// // login handling
// loginButton.addEventListener("click", async () => {
//     targetModal.innerHTML = createLoginModal();
//     myModal.show();
//     const loginForm = document.querySelector("#login-form") as HTMLFormElement;
//     loginForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const username = loginForm.querySelector("#username") as HTMLInputElement;
//       const password = loginForm.querySelector("#password") as HTMLInputElement;
  
//       const credentials: Credentials = {
//         username: username.value,
//         password: password.value,
//       };
  
//       try {
//         const loginData = (await doGraphQLFetch(apiURL, login, {
//           credentials,
//         })) as LoginMessageResponse;
//         console.log(loginData);
//         targetModal.innerHTML = createMessageModal(loginData.login.message);
//         setTimeout(() => {
//           myModal.hide();
//         }, 2000);
//         loginButton.parentElement!.classList.add("d-none");
//         logoutButton.parentElement!.classList.remove("d-none");
//         forms.classList.remove("d-none");
//         localStorage.setItem("token", loginData.login.token!);
//         user.user_name = loginData.login.user.user_name!;
//         updateUserPanel(user);
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   });