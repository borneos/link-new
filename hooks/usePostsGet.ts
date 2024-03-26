import useSwr from 'swr';
import fetcher from '@/libs/fetcher';

export const usePostGet = () => {
  const { data, isLoading, error } = useSwr('/api/v1/post', fetcher, {
    revalidateOnFocus: false
  })

  return {
    data,
    isLoading,
    error
  } 
}