"use client"; // Ensure this is a Client Component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function FinalPayment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [paymentComplete, setPaymentComplete] = useState<boolean>(false);
  const [earnedPoints, setEarnedPoints] = useState<number>(0); // State for earned points
  const userSOLBalance = 0.01; // Example user SOL balance (change as needed)

  const handleMakePayment = () => {
    setProcessing(true);
    setPaymentComplete(false); // Reset payment complete status

    // Simulate payment processing for 2 seconds
    setTimeout(() => {
      setProcessing(false);
      setPaymentComplete(true);
      setEarnedPoints(40); // Set the earned points after payment completion
    }, 2000);
  };

  const handleShopMore = () => {
    // Redirect to shop more page (replace with your actual route)
    window.location.href = "/shop";
  };

  const handleGoHome = () => {
    // Redirect to home page (replace with your actual route)
    window.location.href = "/";
  };

  if (processing) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Processing Payment...</h1>
        </div>
      </div>
    );
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Payment Complete</h1>
          <p className="text-lg text-green-600 mt-4">{earnedPoints} cred points earned 🎉</p>
          <div className="mt-6 space-y-4">
            <Button onClick={handleShopMore} className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-2 text-lg font-semibold rounded-md">
              Shop More
            </Button>
            <Button onClick={handleGoHome} className="w-full bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors py-2 text-lg font-semibold rounded-md">
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="bg-gray-50 border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Balance Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Fiat Balance</h2>
                <p className="text-2xl font-bold text-gray-900">$7,534.22</p>
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Crypto Balance</h2>
                <p className="text-xl font-bold text-gray-900">0.03wSOL</p>
                <p className="text-xl font-bold text-gray-900">5.6 SOL</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-gray-50 border-b border-gray-200">
            <CardTitle className="text-xl font-bold text-center text-gray-900">Payment Options</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod} className="space-y-4">
              {[
                { value: "fiat", label: "Pay with Fiat", amount: "$79.98", rewards: "20 cred points" },
                { value: "wSOL", label: "Pay with wSOL", amount: "$79.98", rewards: "32 cred points" },
                { value: "SOL", label: "Pay with SOL", amount: "$79.98", rewards: "45 cred points" },
              ].map((option) => (
                <div key={option.value} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{option.label}</span>
                    <span className="text-sm text-gray-500">Total {option.amount}, Rewards {option.rewards}</span>
                  </Label>
                </div>
              ))}
              {/* Additional section for SOL payment if balance is insufficient */}
              {userSOLBalance < 0.045 && ( // Adjust this condition based on your requirement
                <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors mt-4">
                  <p className="text-sm font-medium text-gray-900">Not enough $wSOL, exchange now?</p>
                  <Button className="ml-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors py-1 px-3 text-sm font-semibold rounded-md">
                    Exchange
                  </Button>
                </div>
              )}
            </RadioGroup>
          </CardContent>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <Button
              className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-2 text-lg font-semibold rounded-md"
              onClick={handleMakePayment}
            >
              Make Payment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
