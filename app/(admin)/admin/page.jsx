import { redirect } from "next/navigation";

const AdminPage = async ({ searchParams }) => {
  const { signIn } = await searchParams;

  if (!signIn || signIn !== "true") {
    return redirect("/sign-in");
  }

  return (
    <main>
      <div>hello {signIn}</div>
    </main>
  );
};

export default AdminPage;
