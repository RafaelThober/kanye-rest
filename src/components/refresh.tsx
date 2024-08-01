'use client'
import { useRouter } from 'next/navigation'
export default function Refresh() {
  const router = useRouter()


    return (
        <button className='text-sm' type="button" onClick={() => router.refresh()}>
          🔄 Refresh
        </button>
  )
}
