'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const moveToAddSchool = () => router.push("/addSchool");

  const moveToShowSchool = () => router.push("/showSchool");
  return (
    <div className="font-sans flex  items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 border">
      <div className="border p-3 font-bold text-2xl" onClick={moveToShowSchool}>
        Show Schools
      </div>
      <div className="border p-3 font-bold text-2xl" onClick={moveToAddSchool}>
        Add Schools
      </div>
    </div>
  );
}
