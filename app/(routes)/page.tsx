import { signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <div className="text-2xl text-green-500">
      <button className="w-full h-10 bg-white" onClick={() => signOut()}>
        logout
      </button>
    </div>
  );
}
