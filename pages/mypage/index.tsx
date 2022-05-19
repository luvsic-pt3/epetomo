import Link from 'next/link'

export default function MyPage() {
  return (
    <>
      <h1>MyPageだよ</h1>
      <Link href={`/`}><a>トップへ</a></Link>
    </>
  )
}
