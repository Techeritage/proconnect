import { HireTalentTable } from "@/components/Table/HireTalentTable";
import { redirect } from "next/navigation";

const SubmitCVPage = async ({ searchParams }) => {
  const { signIn } = await searchParams;

  if (!signIn || signIn !== "true") {
    return redirect("/sign-in");
  }

  return (
    <main className="px-[3%] py-20 bg-bgGray min-h-dvh">
      <div className="bg-white p-10 rounded-2xl">
        <h2 className="font-aeoBold opacity-85 mb-10">CV Submissions</h2>
        <HireTalentTable />
      </div>
    </main>
  );
};

export default SubmitCVPage;
