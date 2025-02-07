import useSWR from "swr";

export function useHireTalent() {
  return useSWR("/api/hireTalent/getRequirements");
}

export function useContact() {
  return useSWR("/api/contactUs/getContacts");
}

export function useSubmitCV() {
  return useSWR("/api/hireTalent/cvUpload/getCv");
}

export function useJobs() {
  return useSWR("/api/jobs/getJobs");
}

export function useBlogs() {
  return useSWR("/api/blog/getBlog");
}

export function useOneBlog(id) {
  return useSWR(`/api/blog/getOneBlog/${id}`);
}

export function useOneJob(id) {
  return useSWR(`/api/jobs/getOneJob/${id}`);
}
