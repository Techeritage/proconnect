import JobCreationForm from "@/components/Forms/JobCreationForm";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const JobsActionPage = async ({ searchParams, params }) => {
  const { signIn } = await searchParams;
  const { action } = await params;

  if (!signIn || signIn !== "true") {
    return redirect("/sign-in");
  }
  return (
    <main className="myContainer bg-bgGray min-h-dvh h-full">
      <div className="font-aeoReg myFlex gap-1">
        <Link
          className="opacity-85 hover:opacity-100"
          href="/admin/job-posting?signIn=true"
        >
          Jobs
        </Link>
        <ChevronRight size={18} />
        <p className="text-primary">
          {action === "create" ? "Create" : "Edit"}
        </p>
      </div>
      <h2 className="font-aeoBold mt-6">
        {action === "create" ? "Create" : "Edit"} Jobs
      </h2>
      <JobCreationForm />
    </main>
  );
};

export default JobsActionPage;
