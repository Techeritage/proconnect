import BlogActionForm from "@/components/Forms/BlogActionForm";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const BlogActionPage = async ({ searchParams, params }) => {
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
          href="/admin/blog?signIn=true"
        >
          Blog
        </Link>
        <ChevronRight size={18} />
        <p className="text-primary">
          {action === "create" ? "Create" : "Edit"}
        </p>
      </div>
      <h2 className="font-aeoBold mt-6">
        {action === "create" ? "Create" : "Edit"} Blog
      </h2>
      <BlogActionForm />
    </main>
  );
};

export default BlogActionPage;
