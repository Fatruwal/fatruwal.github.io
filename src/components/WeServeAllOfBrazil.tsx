import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

type Zones = {
  name: string
  regions: string[]
}

export const zones: Zones[] = [
  {
    name: "Norte",
    regions: [
      "Acre",
      "Amapá",
      "Amazonas",
      "Maranhão",
      "Mato Grosso",
      "Pará",
      "Piauí",
      "Rondônia",
      "Roraima",
      "Tocantins",
    ],
  },
  {
    name: "Nordeste",
    regions: [
      "Alagoas",
      "Bahia",
      "Ceará",
      "Maranhão",
      "Paraíba",
      "Pernambuco",
      "Piauí",
      "Rio Grande do Norte",
      "Sergipe",
    ],
  },
  {
    name: "Centro-Oeste",
    regions: ["Goiás", "Mato Grosso do Sul", "Mato Grosso", "Distrito Federal"],
  },
  {
    name: "Sudeste",
    regions: ["Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"],
  },
  {
    name: "Sul",
    regions: ["Paraná", "Rio Grande do Sul", "Santa Catarina"],
  },
]

export default function WeServeAllOfBrazil() {
  return (
    <Tabs className="h-full w-full rounded-sm bg-white">
      <TabsList
        defaultChecked
        defaultValue={zones[0].name}
        className="border-forepround-100 mb-4 h-auto w-full grid-cols-11 flex-col justify-between gap-2 rounded-none border-b-[1px] p-2 pb-0 sm:flex-row lg:grid-cols-5"
      >
        {zones.map((zone, index) => (
          <TabsTrigger
            className={`text-lg ${index !== 0 && index !== zones.length - 1 ? "col-span-1 lg:col-span-3" : "col-span-1"} ${index === 0 ? "text-start" : "text-center"} ${index === zones.length - 1 ? "text-right" : ""} `}
            key={zone.name}
            value={zone.name}
          >
            {zone.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {zones.map(zone => (
        <TabsContent key={zone.name} value={zone.name}>
          <ul className="grid grid-cols-2 gap-2 p-2 pl-4 md:grid-cols-5 lg:grid-cols-6">
            {zone.regions.map(region => (
              <li className="text-primary-foreground-400" key={region}>
                {region}
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  )
}
