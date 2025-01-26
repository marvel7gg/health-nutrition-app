import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className="container mx-auto p-4 pb-16 md:pb-4 relative min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome, User!</h1>

      <div className="md:flex md:space-x-6">
        <div className="md:w-2/3">
          {/* Quick Stats */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Today's Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span>Calories</span>
                <span>1200 / 2000</span>
              </div>
              <Progress value={60} className="mb-4" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-semibold">Protein</div>
                  <div>60g / 100g</div>
                </div>
                <div>
                  <div className="font-semibold">Carbs</div>
                  <div>150g / 250g</div>
                </div>
                <div>
                  <div className="font-semibold">Fat</div>
                  <div>40g / 65g</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's Meal Plan Preview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Today's Meal Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Breakfast: Oatmeal with Berries</span>
                  <Button variant="outline" size="sm">
                    Log
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Lunch: Grilled Chicken Salad</span>
                  <Button variant="outline" size="sm">
                    Log
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Dinner: Salmon with Roasted Vegetables</span>
                  <Button variant="outline" size="sm">
                    Log
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3">
          {/* Recipe Suggestion */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recipe Suggestion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Image src="/placeholder.svg" alt="Recipe" width={80} height={80} className="rounded-md" />
                <div>
                  <h3 className="font-semibold">Quinoa Veggie Bowl</h3>
                  <p className="text-sm text-muted-foreground">High in protein and fiber</p>
                  <Button variant="link" className="p-0">
                    View Recipe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Progress - New card for desktop */}
          <Card className="mb-6 hidden md:block">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Weight</span>
                  <span>-1.5 lbs</span>
                </div>
                <Progress value={75} className="mb-2" />
                <div className="flex justify-between items-center">
                  <span>Workouts</span>
                  <span>4 / 5</span>
                </div>
                <Progress value={80} className="mb-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

