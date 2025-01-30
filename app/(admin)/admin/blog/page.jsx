import { HireTalentTable } from "@/components/Table/HireTalentTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const BlogPage = async ({ searchParams }) => {
  const { signIn } = await searchParams;

  if (!signIn || signIn !== "true") {
    return redirect("/sign-in");
  }

  return (
    <main className="px-[3%] py-20 bg-bgGray min-h-dvh">
      <div className="bg-white p-10 rounded-2xl">
        <div className="mb-10">
          <h2 className="font-aeoBold opacity-85">Blog Management</h2>
          <Link href="/admin/blog/create?signIn=true" className="w-fit">
            <Button className="shadow-none h-[43px] px-5 font-aeoBold mt-3 hover:ring-1 hover:text-primary hover:ring-primary">
              <Plus strokeWidth={3} /> Create
            </Button>
          </Link>
        </div>

        <HireTalentTable />
      </div>
    </main>
  );
};

export default BlogPage;
