import Link from 'next/link'
import Header from './components/header'

export default function Home() {
  return (
      <div>
          <Header title={`えぺとも`}></Header>
          <Link href={`/mypage`}><a>マイページへ</a></Link>
      </div>
  )
}