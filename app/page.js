import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className='flex gap-5 justify-center'>
        <Link href={'/create'}>
          <Button text={'Add Todos'} />
        </Link>
        <Link href={'/todos'}>
          <Button text={'View Todos'} />
        </Link>
      </div>
    </>
  )
}
