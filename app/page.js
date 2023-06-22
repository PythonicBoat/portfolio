import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="https://visitcount.itsvg.in/api?id=pythonicboat&label=Profile%20Views&color=0&icon=1&pretty=true" width={100} height={100} className="rounded-full" />
     
    </main>
  )
}
