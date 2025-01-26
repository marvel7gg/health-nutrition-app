"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export default function Plan() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const meals = [
    { name: "Breakfast", time: "8:00 AM", food: "Oatmeal with Berries", calories: 350 },
    { name: "Lunch", time: "12:30 PM", food: "Grilled Chicken Salad", calories: 420 },
    { name: "Dinner", time: "7:00 PM", food: "Salmon with Roasted Vegetables", calories: 550 },
  ]

  return (
    <div className="md:pl-16">
      <div className="container mx-auto p-4 pb-16 md:pb-4">
        <h1 className="text-2xl font-bold mb-4">Meal Plan</h1>

        <div className="md:flex md:space-x-6">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>
          </div>

          <div className="md:w-2/3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Meal Schedule</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="font-medium">
                    {date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                  </span>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {meals.map((meal, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{meal.name}</h3>
                      <span className="text-sm text-muted-foreground">{meal.time}</span>
                    </div>
                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">{meal.food}</p>
                          <p className="text-sm text-muted-foreground">{meal.calories} calories</p>
                        </div>
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

