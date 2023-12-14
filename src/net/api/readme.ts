import serviceAxios from "@/net";

export const getReadmeTemplate = () => {
  return serviceAxios({
    url: "/template/markdown.md",
    method: "GET",
  })
}
