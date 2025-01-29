const BlogPostPage = async({ params }) => {
  const { id } = await params;
  const decodedId = decodeURI(id);
  return (
    <main className="min-h-dvh !pt-24">
      <section>
        <h1 className="text-center max-w-[90%] md:max-w-[60%] mx-auto py-16 md:py-20">{decodedId}</h1>
        <div className="w-full h-[300px] bg-gray-200" />
      </section>
    </main>
  );
};

export default BlogPostPage;
