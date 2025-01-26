"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, Search, Plus, History } from "lucide-react"
import Image from "next/image"

export default function LogFood() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="md:pl-16">
      <div className="container mx-auto p-4 pb-16 md:pb-4">
        <div className="md:max-w-2xl md:mx-auto">
          <h1 className="text-2xl font-bold mb-4">Log Food</h1>

          {/* Camera Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Button size="lg" className="w-full h-32 flex flex-col items-center justify-center space-y-2">
                  <Camera className="h-8 w-8" />
                  <span>Take a Photo</span>
                </Button>
                <span className="text-sm text-muted-foreground">or</span>
                <Button variant="outline" size="lg" className="w-full">
                  Upload from Gallery
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Search Food</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Search foods..."
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

          {/* Recent Foods */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Foods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Oatmeal with Berries", calories: 350, time: "8:00 AM" },
                  { name: "Grilled Chicken Salad", calories: 420, time: "12:30 PM" },
                  { name: "Protein Shake", calories: 180, time: "3:00 PM" },
                ].map((food, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-accent rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                        <History className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">{food.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {food.calories} calories • {food.time}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

