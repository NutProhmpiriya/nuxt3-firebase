import { createUserWithEmailAndPassword, type User } from "firebase/auth";

export default function () {
  const { auth } = useNuxtApp();

  const user = useState<User | null>("fb_user", () => null);


  return {
    user,
  };
}
