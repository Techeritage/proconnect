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
