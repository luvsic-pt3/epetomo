import Link from 'next/link'

export default function Home() {
  return (
      <div>
      <h1>えぺとも</h1>
  　　　<Link href={`/mypage`}><a>マイページへ</a></Link>
      </div>
  )
}