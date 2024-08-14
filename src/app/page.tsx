import Refresh from "@/components/refresh";

export default async function Inicio() {
  const phrase = await fetch('https://api.kanye.rest/', {
    method: 'GET',
    cache: "no-cache"
  })

  const generatePhrase = await phrase.json();
  
  const phraseCompilate = JSON.stringify(generatePhrase.quote)


  return (
    <div className="flex flex-col justify-start w-1/4 m-auto h-screen gap-16">
      <div className="flex flex-col text-center gap-3 mt-24">
        <h1 className="text-2xl font-bold">💽 KanYE.rest</h1>
        <p className="text-zinc-400 text-sm">A generator of the best and most iconic quotes from the Legendary KanYe West</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-end mr-5">
          <Refresh />
        </div>
        <div className="bg-zinc-100 rounded-xl">
          <div className="font-medium px-5 pt-4">{phraseCompilate}</div>
          <div className="flex justify-end"> 
            <span className="text-sm text-zinc-600 p-2">
              - Kanye West
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
