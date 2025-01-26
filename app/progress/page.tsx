"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const weightData = [
  { date: "2023-07-01", weight: 180 },
  { date: "2023-07-08", weight: 178 },
  { date: "2023-07-15", weight: 176 },
  { date: "2023-07-22", weight: 175 },
  { date: "2023-07-29", weight: 173 },
]

const nutritionData = [
  { name: "Calories", current: 1800, goal: 2000 },
  { name: "Protein", current: 90, goal: 100 },
  { name: "Carbs", current: 200, goal: 250 },
  { name: "Fat", current: 60, goal: 65 },
]

export default function ProgressPage() {
  const [startDate, setStartDate] = useState(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
  const [endDate, setEndDate] = useState(new Date())
  const [selectedMetric, setSelectedMetric] = useState("weight")

  return (
    <div className="container mx-auto p-4 pb-16 md:pb-4">
      <h1 className="text-2xl font-bold mb-4">Progress</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Track Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => date && setStartDate(date)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => date && setEndDate(date)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Metric</label>
              <Select onValueChange={setSelectedMetric} defaultValue={selectedMetric}>
                <SelectTrigger>
                  <SelectValue placeholder="Select metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight">Weight</SelectItem>
                  <SelectItem value="calories">Calories</SelectItem>
                  <SelectItem value="protein">Protein</SelectItem>
                  <SelectItem value="carbs">Carbs</SelectItem>
                  <SelectItem value="fat">Fat</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weight Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">173 lbs</p>
              <p className="text-sm text-muted-foreground">Current Weight</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Goal: 165 lbs</span>
                <span>8 lbs to go</span>
              </div>
              <Progress value={70} />
            </div>
            <Button className="w-full">Update Weight</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nutrition Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {nutritionData.map((item, index) => (
              <React.Fragment key={item.name}>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.name}</span>
                    <span>
                      {item.current} / {item.goal}
                    </span>
                  </div>
                  <Progress value={(item.current / item.goal) * 100} />
                </div>
                {index < nutritionData.length - 1 && <div className="my-4" />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

