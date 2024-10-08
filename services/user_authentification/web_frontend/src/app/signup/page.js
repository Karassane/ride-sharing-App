// /*
// Page de Signup avec Tailwind CSS et Fichier CSS personnalisé :
// Dans cette technique, on va séparer le style dans un fichier CSS et utiliser Tailwind pour appliquer des styles de manière globale ou spécifique
// avec @apply. Cela permet de centraliser les styles et de les réutiliser facilement.

// */

// import "./signup.css";

// export default function Signup() {
//   return (
//     <div className="container">
//       <div className="card">
//         <h2 className="header">Create your account</h2>
//         <form className="space-y-6" action="#" method="POST">
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 className="input-field"
//                 placeholder="Full Name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="input-field"
//                 placeholder="Email address"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="input-field"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           <div>
//             <button type="submit" className="submit-btn">
//               Sign up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import SignupForm from "@/components/SignupForm";

export default function Signup() {
  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7" }}
    >
      <div className="flex flex-col min-h-screen">
        <div className="container flex-1 flex flex-col items-center max-w-lg mx-auto px-4 py-28">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
