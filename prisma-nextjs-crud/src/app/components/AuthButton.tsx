"use client";
import { useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return <>{session.user?.email}</>;
  }
  return <>Not Signed in</>;
}

export default AuthButton;
