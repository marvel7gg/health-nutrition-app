"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("")

  const recipes = [
    { name: "Quinoa Veggie Bowl", calories: 400, time: "20 min", image: "/placeholder.svg" },
    { name: "Grilled Salmon", calories: 350, time: "25 min", image: "/placeholder.svg" },
    { name: "Avocado Toast", calories: 250, time: "10 min", image: "/placeholder.svg" },
    { name: "Chicken Stir Fry", calories: 450, time: "30 min", image: "/placeholder.svg" },
  ]

  return (
    <div className="md:pl-16">
      <div className="container mx-auto p-4 pb-16 md:pb-4">
        <h1 className="text-2xl font-bold mb-4">Recipes</h1>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{recipe.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{recipe.calories} calories</span>
                    <span>{recipe.time}</span>
                  </div>
                  <Button className="w-full mt-4">View Recipe</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">
            Load More
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

