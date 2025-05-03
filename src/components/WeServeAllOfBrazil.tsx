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
    <Tabs className="h-full w-full rounded-sm bg-white p-2">
      <TabsList
        defaultChecked
        defaultValue={zones[0].name}
        className={`mb-4 flex lg:grid grid-cols-${zones.length} justify-items-stretch gap-2`}
      >
        {zones.map(zone => (
          <TabsTrigger className="text-lg" key={zone.name} value={zone.name}>
            {zone.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {zones.map(zone => (
        <TabsContent key={zone.name} value={zone.name}>
          <ul className="grid grid-cols-2 gap-2 pl-4 md:grid-cols-5 lg:grid-cols-6">
            {zone.regions.map(region => (
              <li key={region}>{region}</li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  )
}
