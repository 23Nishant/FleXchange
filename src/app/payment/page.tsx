"use client"; // Ensure this is a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for routing
import { Apple, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function EnhancedPaymentComponent() {
  const router = useRouter(); // Initialize the router
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple">("card");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayNow = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleProceed = () => {
    console.log("Proceeding to final payment page");
    setIsModalOpen(false);
    router.push("/finalpayment"); // Navigate to the final payment page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl shadow-xl rounded-lg">
        <CardHeader className="space-y-1 bg-gray-50 border-b border-gray-200 p-6">
          <CardTitle className="text-3xl font-semibold text-center text-gray-800">
            Payment
          </CardTitle>
          <CardDescription className="text-center text-gray-600 text-sm">
            Complete your purchase
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 p-6">
          <div className="text-center bg-black text-white py-4 rounded-md shadow-md">
            <p className="text-3xl font-semibold">Total: $79.98</p>
          </div>

          <RadioGroup
            defaultValue="card"
            onValueChange={(value) =>
              setPaymentMethod(value as "card" | "apple")
            }
            className="space-y-4"
          >
            {[
              {
                value: "card",
                label: "Pay using card",
                icon: CreditCard,
              },
              {
                value: "apple",
                label: "Pay using Apple Pay",
                icon: Apple,
              },
            ].map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 transition-colors"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="flex items-center space-x-3 cursor-pointer flex-1"
                >
                  <option.icon className="h-6 w-6" />
                  <span className="text-md">{option.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>

          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8 space-y-1">
                  <Label
                    htmlFor="cardnumber"
                    className="text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </Label>
                  <Input
                    id="cardnumber"
                    placeholder="1234 5678 9012 3456"
                    className="border-gray-300 focus:ring-black focus:border-black"
                  />
                </div>
                <div className="col-span-4 space-y-1">
                  <Label
                    htmlFor="cvv"
                    className="text-sm font-medium text-gray-700"
                  >
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    maxLength={3}
                    className="border-gray-300 focus:ring-black focus:border-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label
                    htmlFor="expirydate"
                    className="text-sm font-medium text-gray-700"
                  >
                    Expiry Date
                  </Label>
                  <Input
                    id="expirydate"
                    placeholder="MM/YY"
                    className="border-gray-300 focus:ring-black focus:border-black"
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor="cardholdername"
                    className="text-sm font-medium text-gray-700"
                  >
                    Cardholder Name
                  </Label>
                  <Input
                    id="cardholdername"
                    placeholder="John Doe"
                    className="border-gray-300 focus:ring-black focus:border-black"
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="bg-gray-50 border-t border-gray-200 p-6">
          <Button
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-3 text-lg font-semibold rounded-md"
            onClick={handlePayNow}
          >
            {paymentMethod === "card" ? "Pay Now" : "Pay with Apple Pay"}
          </Button>
        </CardFooter>
      </Card>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Card className="w-1/3 max-w-md shadow-2xl">
            <CardHeader className="p-5">
              <CardTitle className="text-xl font-bold">
                Pay with fleXchange card?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 text-md p-5">
              Are you sure you want to proceed with the payment?
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <Button
                variant="outline"
                onClick={handleCloseModal}
                className="text-base py-2 px-4 mr-3"
              >
                Cancel
              </Button>
              <Button
                onClick={handleProceed}
                className="bg-black text-white hover:bg-gray-800 text-base py-2 px-4"
              >
                Proceed
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
