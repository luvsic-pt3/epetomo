import useSWR from "swr"

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useProfiles() {
  const { data, error } = useSWR(`/api/get-profiles`, fetcher)
  return {
    profiles: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useProfile(id: string) {
  return useSWR(`/api/get-profile?id=${id}`, fetcher)
}

export function useSearchProfiles(sex: string, age: string) {
  const { data, error } = useSWR(`/api/search-profiles?sex=${sex}`, fetcher)
  return {
    profiles: data,
    isLoading: !error && !data,
    isError: error,
  }
}
